/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4fJGa587ZGdNT3LQ21zmAdeAEP6mAHXWjFVmWKUXmh8WF9GmVuHjbH5ZTDwpW5kzVKGy8XsgR7m48TmyRF2dk397"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZByJ3SnVX6Mh5iqYjnFA6TNGEqk284YoJZ9cyc8GD5qgK5qgTtPqThE5WFzpxssSpDxihX9QCY7fQ7AZx3d4iSe",
  "key1": "357ZjmnsLWAqFdp5EFJq2vfMiC3izHwZ1JyvwqjLX5EQBVdSwhSAeZLCwyxHw6kFknNBXUyVEJfSHsz5yfuS2zsV",
  "key2": "3VF98Z8YNMBzBRbpiYKLN6fc6dnG77ptuvcRxVUUsf63YYHxQ1BPjAucS57sZ918oaotK3oaGQ1JDpwCz5k5i7i2",
  "key3": "56KZGhh3YmV86Mrf5zA9DKUqYkWsFFUhD9UoWg19vY9qvEgBacfmeEig33SttiSdcj1mu11n2P59S3wbdPeWzws4",
  "key4": "3HBrzdN8wSW4K4UkU8E3BZHPRUGnkx6Z3rkqBsLcteZL4guJeur7pckuGTkc9SfkSrxBg7HoYyqTzHXvXyMsoJ8A",
  "key5": "dA9Ab1EingsucBSYYetqGFcHmVZu66CTByygHQja1qjRv2eY38UB6d2h3UpsrXQPScrfu8ZSarViv1HhqsRk3Pu",
  "key6": "5GouU9tgaKjzJ1DtYYkEUDRmJYKxzzeTyab2dJvXFHi3Ka9SJmjPip6sQ8W6pdyCrNfXLpVjLqvDtTptV2EyVBdt",
  "key7": "JUYVA6nNS11cbbUrtqroUWRhyNh78RKYjfgtyynH59HM7jSp4G4NwXJYbytrPEZfWpqSNYMHmYWYPZZztsftG1P",
  "key8": "MNWB4hDhhb8FUNDSsiTN5gveQ5QvjjofHybUTCbzLVrm7q1GXNDFB8NtVcmBLH633DaSZLVW7RXFMp5j2NnCZPK",
  "key9": "5qX2dVkhi9bpLysrwcbPSs1s7oTSrE4Vqgg7HgfNwkT9e6iPGfpmX9xA46ek2e1GSfL5ipn7pjPMWSpzKcGVeiNA",
  "key10": "5GbznaQ8mrT5Gopdm7xefQ7KsxgL5VX8p2QWQJnayGS3uoMm3Thx5SYdQTxe8Pm7XQX9jqhdzvQbNYbra6fiLK7d",
  "key11": "5BxSYiFTFgBpi7hnefqXZwTDCp2xpJcS8H6WTJ6uJg5bueFa6jf4m9o1FwdZL2nvZjLRoreM2yR9Av4eodVq1vMT",
  "key12": "4kDxRLh1c4ygBD3KTAe1gWVxe1A7LsjKaQjmrirrcnfEV1CtdaxnHwt6HSvVJEyVUJLDDeiUn1NPWEWWumxhFKj7",
  "key13": "5hDrcZ4n3cTDr7nNjjtCd9daC2kMZQqaShjgTyLdhAzxamZfnzoGDHhmh46t9kPqABWCJonUB8Pf1v3qCFZA5m7C",
  "key14": "4PJMyV8nA9z43Azgkn7Khvm29y3e5DxDjvLg9xC7ZFQhALrxTf5JKJGJRnLhTU4Yus1q5RgXVdpopPkxwfiUjF4u",
  "key15": "5oaorKT95RhZUD9yiyED4crm8twAfZBeFLSaHpLSpguxjanbXM7oWj5iy1XBq7Ngq7i3t6BMaWNphdmFiaVb2k4k",
  "key16": "4upHAx4PbtLidf5E5azh3nCVruYzyBvjcr8tz7cdTN6GLqfFgnCMVKeVCfC9m1CN1znZBABd5tSDsCbSXFvn7GFH",
  "key17": "QHiHZrJbWgrtfEi3zozy9HwdQk23BARY93finKF8AKg5RSuC6uobkmezWb4fLiy38zKSWfvZ8otaexQP13QaePs",
  "key18": "3e8h5PXYPotnqnXsfM5fBz5nPgiF2JLd6h4TTAjMm3YCN6ZWzdVRHFoPm4dZWoZcno3ATuQB92mxEBsiGahvDVf1",
  "key19": "2aaxcWa9w9Y7hyY8JH2hMURT8t4sWkQ99vxGUjbFdj4ti2TaaRYF97MpKTvoi33RX12cdVJAcBu6s5KX69vV5aHn",
  "key20": "5sZ96ujSQfGQG4qDqWngDLG1p4SGFstbiDpP7H9BeFZNfFFQ7Y5yj48F9sMLMqYMPb2S7uWL5AaKJ9XmEsNd7NJ9",
  "key21": "5fgt9vu5879YBZQEdFd7n6c9UbhR4DRE7L4wJp7HsGGZAchABYh3xDjK2c2ztiCDAc5rA3gDiWqEA7VptndVVA4n",
  "key22": "2VWRPXFbm1PHN7YwrZ8GSQNBPBVMJU81miDuJuLDTURguqv7WjXAEvXbdPxVd1RKcr3VDEA36tBYUjFzsnLuWLcn",
  "key23": "2Rq9sGRfmxyzZwrgS3A9CbGyfsprGkyGWSZQfJtxrLKo58zrauhL9ne5jdBqfrmN2qEssAWTTFvnq4ukd9rhNEYZ",
  "key24": "5xp9srcBFgchaUjps9suTvSAdPrZRayXdmaNteQYrMABC1rhKFZD8xtKJgmmSnWSH7u5jCxmfjXtRCgctd6oqxQu",
  "key25": "5TtAzfVx8N6nKkmv94cAwbooHPcotwvBjBf674erKCz4xNRx6opz8QN29N8UiZTEWHeMm3tAJCS5pHYqKvUtCGKt",
  "key26": "2ZNVPiqdDuwYkKvGQXtWDr9FRhmFh4X3fMkXWZ1L59sqKo9AX6amaaY98wXDMxJLXN3jnrBw1NDyEcXa16BFFy1E",
  "key27": "3zZ7q3EyVDBRW8ztxnvHfJdk5WuDCVxDRess5xfpsaQKJfwDgVK2RVQudkfkoe2JWUscVKrGuvZ8yfSzKo7DdSf8",
  "key28": "4uhGbiLQBeUpbRyL9ncRjjq4NK5sy8hZ5F2YatrrprgeiY7CLB9vG9fqSMK7VYAtVtimTtnpBPx2bYS19912MSrn",
  "key29": "5pP2Jg5B2G7jvfys5FMdmwCue7MqDFNRrR5ebewbpFuz6N3tevPPQhxYXchn9jVno5b9zNHgXQuHFxFz4f7htTqS",
  "key30": "fcazvt8gXPXLW36kkJMkBnmqNnzCg9VTjuDN5R9dxNtdvHyAh24k8mFcExsaPFLSf6yP1VcngAYZjZoCbAhBFqV",
  "key31": "2b22o4LcvM2g8noXRyALBqtEmfpV48Ssa7xvrBVZSzswhfFUpe8Lf6Kry8vBxybeWEn7j1RRJU1ZytBQNHcm96cS",
  "key32": "3PURLRDY2s2WufgrUtpQqbQxahM5bNo1zeDfkvPBeyxyuSB3gB5uvivRYGq8UvTdvZPZZu3M8QTfTETZDKwQgqws",
  "key33": "EJjzQXNvAn815EN6iawBgro7M8SFzMWJrJBzcgcmFpUQinr5mz65LWgE3NvcCrPq3iMXgbbwycwWntCNe6umzHp",
  "key34": "Rga4PRMU8PvpsJem7kHw9GZjLnRt5HDp3ipSLi6MDidBKQtDonuQ48gKJ653RPmcZC8b3Y1u9bg5gHu64gieAge",
  "key35": "3es3vsgFq3ccnEo6ziYxkucQU4VijzU7cSoMpBZAb6t4rj9bX44iTcZADo2Mj1KSm3GQcWdHkUkTbaeshL29rfCf",
  "key36": "3JnuQCiQHvsGDcJPNPCHL2ETb5sKWN2WUjPg2jREkkNqEkXMJHrZL93wuzZJeV3WKAFEujN7QtpVfKo5aawtNDup",
  "key37": "2pgA8dHFg5hMK5QBKMveadK3MjpvBZgN2qP1zTK9AtGdgLYNUkAiWeZUKYCU5VpGz1kTv4rQmX73Zd32KDsouwiT"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
