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
    "4muKVUq1iisr4Q8UbxCM5g8vURGA58BN2q1fwN68BEEPqyX1vR5GBMY2rxaBVov8c79Ci3PYLNCTjHFPSZytcqBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F8jRSZuP9R5diK1osRcMhvrq2hs7U3BHxfEc7ZaMZwbtnRxQDxSS4b2SnY1pi9REnTr425m5ZZhf8CqgiFE6ctA",
  "key1": "4JxgxQ2kuGuToAAALKo31QorMAZeccdqov5hHE9yjfaSHMk2z6aF4b46SxL4JnrFhg2bzrfxNv4nTmZegvuCLMee",
  "key2": "ehnkD5Dz5bYXL2cBTcUUZ7SNSrFSjq69NJtgXf2LtpmUUkwPrR3Mc8aXNPMGVxRy71TzM4E5YgjK2oezQAnbbYr",
  "key3": "3C7x3GasaGUHPZVHo8F2tNX37Xye14QiQvhqK7cb4aMV6dBrtTDx7Syv91dTif6gGLWV5eFYactuS39MQvdLvH64",
  "key4": "ZMpbMY3nC79oGhCAhNmVidKpbdVcfsa4hYmRrXKsZZN9tfyuQeaaAc8dgPa5xZd5fo6jgntfWVuifWphXZP46Yw",
  "key5": "5BVN94jBeRkskxfVvoYoxonb97T8w9kFD9GQnpENQPKNToqsFE2s9KAXZ5xq5qEYGN2W2onAuMcmgJWWGLrRagJ",
  "key6": "4zJ91y7PumM2GfKDtc4s5Z4H1ZuCaBZcYPCt1WGabQJAgZomZ2C9A5vzMd5cBTcmTJFKrbfGf8SCdTtJP4TP6qWe",
  "key7": "b6L6FPjJBTTmGCuyUKmB1YrRXfGwJRYxEK8RGf7NrSi9gvvkRkocbCkaBmM1X5Cwsbhweaw9uknjdr56pv8zi6D",
  "key8": "2G9poXvw6DGXaxWxPHgsHUvC6oFsEF1rHpqFCmubRT9RnoeBfEMNHwZvzsi7dXJggPvRL4xdT81vPQJzcbjSPdyg",
  "key9": "64Z2bSNzJvDu1RHp82AaAJMgSQc9jBwvmNPM8n5kKmvRZ4vgptszR9DfL8jJiktdK8G2AuDh7n6CkpNrK1wbvkSx",
  "key10": "2G6jTWeaWXQLe3A3sFQw8pCdC9vwnATDugQLE8H8fCrpXPh1hXvTAC6Z4zz7ztvhPqPzfqKrBX5vSn3MaRR8kj9p",
  "key11": "4Gg6PBuShGC97VTvctk4P1CFh1uRGCAt31GJEzuLLs56Ldx2XRf446WoNsq2BKFuBHYHvrB3kP2pLWnGt3V8hqgL",
  "key12": "4ah48VVHH8FxWWx6RQkA6W7Q1B3Dqm4H3tfGvkXSL9475sVbwFtGxjF7MGn7jxiDqqNZM8wGE3WAuGfrrkH3gHjQ",
  "key13": "5GcbWU1A87JFuC9XuY3t8NPd6amtmG2SkE3sEQDyHNGc496jmFAnHDibBQDpuiwvyKJdpNUXdNUwL1ckUFvwa5D6",
  "key14": "2LpVB4PoEu7ZtLFUJsYWdBxRenHtyGS8FUU5p1FL4KwqCDTMgVWhXdEWV3HpB5o3BS4ATf22Fu931GtzuBto8jZ8",
  "key15": "5PPwDQkRt44phxgkZAnCjdXf9UdN9MQQB1wF88Y41zZatXWvFSshjEvBqFpT8i9xXCLnjn4B5Pp6VfYvzkBYwMcv",
  "key16": "4K64i4Ts2HSd8wZGR2D3F7gWbhfPbPBMjwGfD1Vg3uYoEm7mKseUB5TfUkZWKo7kMCdmtFR79mtSysQUQU8ZHbsq",
  "key17": "5ZCcccTggBDNBfaLAxnSKNTfXQwiP796tbhME25oxKMPkJEUyy23DN6ssMiAZud7oBqM1Ww5rVVjMDASx9epqtTH",
  "key18": "46Cu6mV94XKyLzndNPyQw9pVJCSHuagxC2w5gZkvaAjUG7KLTfSHxLMawBt2eXgVMAcWExzn4Tmug7jW8m3UmDXx",
  "key19": "3Cu1DEH5Z9eULbBLCkYmon7MWLB9B6DWQaitgskPM7gUtSYFcU3jjcnKZRuJFC86J6VVmQ8JoNomJRDxzQC9z8ox",
  "key20": "4QxEeA1Ln2GvhCscY5h2wQJDLFXrC6doRt6Ljzasn9qdMgHSzBHKXgUPojjnkQRYAgQdjpweqEsxhkpvX9cDmZQE",
  "key21": "kga8p492qxVBnHbM41ftAtPHJxxg8MGWXXBtA352LejHtZ2iRAL3WyVNecYxhGaJhiF4Et1BjqRUiZKGFDSzgfD",
  "key22": "ShcdksLVGUo71st1FcZHaec1Fkuy3B5dPD66H9UBwgrDW5fE7Hiy5FeVLbXCS1UdDwnLK9gzZcoEsetU4nkRNd3",
  "key23": "Wz5QaRyTUJZxPB6Pix1v2fUZtR3TXK6vzbXJ9JLWbsna4Vs4LNtqy7UJGnW82xYaRAixFsBGEHB5fAfcwh7bWMZ",
  "key24": "59THsVmHSdhMAqKH3AVzJux85CE1V7heKSxjJvRxJSeaaUmyzZ8eFgpEuhNus1FJyH157LdAtHcUnrfcToehzhzt",
  "key25": "3mEprJqsaP8PTJojoG94NEz8KDgUFvCotwy1ZADtzW4hr4366Y1uzxXJrn9UBBv8qJAH6JAeScTqy7YLdPeZQgcW",
  "key26": "3hMqkQNZqPqTmLyg1aHKYWmUg2oQZVDQdBXMpJqLQfCfUPw6WDdmiHvFGBu5KbLJY1pbFmguLWv7QFrAe7sggV9y",
  "key27": "2434vVsiuHgJeSNL6R3SWetrTDnyQ4yGurBNBHJEhEn3pYRECs6MoeUQae9DZHwccjSKMmU9vEWfAWLiaFfdqJeR",
  "key28": "4vTP3akFjBYPJQrxjMZjQeCUzSs3uQXfrH4bNvDGefYAzJWgYWGtmDH7qx38hPMqH8MTfe68krRxRnSsGyCHq1Sv",
  "key29": "r9HVx9zz9Ms8T4w9fUu19AqmHBiM6BKuXLEG6mQgGY2mdt7NMwRFymCCNatuwntFFM5bM2a7cuSyQLj2XmJqGQa",
  "key30": "54inDqn64mSmbF197C1LdJr8tp9AHkS6MT6Q7Y1HuxXabfdGHAN2NgWPN1pX1dWTnPcmd8oSW3NFqLFm8wkAXBvw",
  "key31": "4wDadiioEcPeQeXb6oyvU8WGb5AK31TTE6cnymVowsdqK7vVb2RmCrqadDSj8ZeSD4fpZdbemVp8qCad5axRyQJY",
  "key32": "35hUgQRBsjqQnwq8qKz2VDeSPMmGWp8wgkeAW4E3ypxk3n3XmjHae6GEGV5qyoeaK7Dk7pP1pd7fSggrfepZpHqn"
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
