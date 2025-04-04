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
    "EuSraCTncbMZ3g3s6BsP6CqeqiY7SYwJPyokZrSdMXSagFMBxw1CUKVwnSXJgew9mkh5fKSiRBVkPRTZY7LapwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmKwkSZQNzSaTSRVYy7vGWG6AzqvFVTaykjJzVZzkyWr7UMYNwqCZoUuVFHHD33AfcxPvfnrWccdKimwJ3jjj1",
  "key1": "db4XtweS1ZjhaUsvMSUSrzH76seTjCFsPixCzdsaSHuf5r6UpXjj3HaRqbBekNWgYt3fhdwu1mVggF9pqkWrA94",
  "key2": "4gspa7hNS7cN2CWvi6C2tYGfw1SmEPhbUC4R8EQ6GAqt8XnpX3KUAHpZYzu3t2CG3VEYt8tZU7LQJSyAT3YSd3Uf",
  "key3": "3e32XsAJCEUdLbrUfS2XqudH4i85yv823amRoZVKxK4ogncVATbeKnsgbtk1XbgQZ76MyVMpfYSBwKnZBBLptpc",
  "key4": "3V1Kg64hchuec1CAJefjJwEhi9oGMN6HouC3c3dq1WuHF8E3wPKqoYse25XiQjoQBBvrT4hzMma5r8Q1qSQXvguh",
  "key5": "4ohouSQv2vtZbkaUJj5vbVJ1piei9zsBB775kYEiH8KBqZUbi5EbAkk5qzJcMdPGyCoMNbqjKbnQb4L7SbpdZTMr",
  "key6": "4Uuzh8z2VoCNcgKLy4p2WeGuEBXntvx3LM5GdqAcJYgUNiEFKnxx8f3TAjQZKcGEYjNGzkt87dMqjaUh7dEoT8Zi",
  "key7": "5883ariM8qmAChj4nPvB2xDcpx5PGwiWqo5ysE8ZJWuoDwfseZG7Anf4A9Zh32PoffN9wo5xXYkacTPMFFmvLBF8",
  "key8": "XuLZzGzmZrTLFEoBvNfaEdEHNh93oTjJ1JUGd8KQ6z5d2JaZpvY9WBPwnp1raT7k4dh1EMvmsdZLcqeNeHeypRz",
  "key9": "5tjAsFxjo7dgjnW4TmtY2GLHKQ4de8t6D4UB2F3u8hkB45jzCZ49ckgN8FAqFGGG69ceAce6cK2Y3ZRjijwZiRtm",
  "key10": "4gV6wJuuhFJL74exehC6L7nh7XNx3x1GrrQt8UUyThoG8Yz891WQAmGsMXMWNWJVZ7oSur28E61P54qo6uhe82nS",
  "key11": "33A1pq3o7Cw26GZjLoHrbBvNgKGu2GWwxaJL8CvmLEfsiduziKxrJ6p7QY5MQNtqxwLhYz2muopH3e3JYLDz22p2",
  "key12": "JaiofznVRuxzE7eg7xrwb6AdTnyxcXwcK7AnezxHn1BSNdBz7Xor1RZ89JwzZoqnzbBNj1RA9aRXLqvSgeUStnx",
  "key13": "nL2S7mnmFbAwYgUDLcpLwTWXMk1Uxb7wJ6pMN2NyPdfa2ybpvxdQF9zNqW1ivnfBM2zoKSkornbTFkWhBA3cb2J",
  "key14": "mMoxGpiZf1YPhAoECDGkwGKvyup1P2H29F2QeHim9viKh5X8JaiM6n3rP8cuT3RkSL2GrEbooGuA4AvipcjsuRg",
  "key15": "HFDA5Xci4dJCxLcTxaT9ZDurTkFq6ziNhMz3F9Hmb4iaKcMuRgRjfwixqGh5uhF9o2AJcLHhYYKaThsJgco4LAU",
  "key16": "4aU4ubtvNagxX7MUnnBDhA3FbNsqxXhGXjQ1e1UQbXkaDxDndyRC1kFJQ4KZJakNQbonhAtF3d8Pe5UNdvKXexVv",
  "key17": "cXCcbE5AEosyPGboPtoGFrC9uDZdWiUEFTg7Lvpyqtjor8862cXAF9MugDtZFrhcfBzvAXjCpiFEcguSBsV63c5",
  "key18": "39JaPwj6JnRcV9xSEts4jEL1tniqyCS2AeeSCUwN2JERk8TwAq73zWh9EyeAoFswL6hds7LBwoK1GsUqSmqi5Mi4",
  "key19": "5iXYkK2nG31UXh5bBkGX9oX9h1rCwnWdthJP5oAPprPbgkFtWyrKpjH9mctjuPSfWoNqhTCLbQj4oWMG69wbHp21",
  "key20": "Z8bXUmMDFdpPSPtWSHcKpoh5o8UV1Hor3pL6VxR2SkGnEoczGN1ruUJNFtq7gx9cXd4EAr6FBw4qTBFQwzzphSm",
  "key21": "8vLavQT4tADHVyo12bU6XiBDUaqrmkbbsmXW7xaD6Ceyr2ceT5sj7KzUh3tetTWkB9nyz5nqndP2HX85iAqiFP3",
  "key22": "62E3Xj4b3MMPcBKgLyq3ygZVt5azvW8aQfmGwW9ozJzwEEcFax2o157DP8TkPHvGa5sSwYmt58753wTr4CCFtuxc",
  "key23": "2RR6sFrkFgchPotsBoXDG9pZaTqSTadxsUgKyzFptLQYCd6M3QJLf96FSKPnpNan5xpkCEqLrH52GsDs4cmhfSjW",
  "key24": "2BrKob64dkaKngSbk4ruVbp9i4s5F5gnpPUqLyqQVk8HsBrjrS51m6mwmn5mryAwVCsgNvcraHh18aiSZuPGR4af",
  "key25": "3xnht3N8x1ZwgHjgK6bVXJKy9x2gUb3wLrmsQibX5vL8gMnE3Dbsvt1TD6UHHsByzAPrTDMwF2Sc1aJfuyVx8A15",
  "key26": "3Qc4xxJrWMmtrnpjBnVBRCca9GBt31b8JaR7gdY6DR2hGwnSVKFUcv2aVf9NqKhPD1rY6xwuGV795vAqzvxdsz1b",
  "key27": "31RCh7tBueB2E62NEsun8wh3PewajoucFKgN3RjJGeFCXrGojThcMyGdjz2sWezGZUnM3hztE4oNY8seBZoQx4qR",
  "key28": "YtMSrohbqToxmtoqbkjr5M8F8ybfBN323vy9WrvjwUn8TnqMrVKoUu4ecFgAtSrKiqEWPBxHLJJuhCFHgjDUDWy",
  "key29": "4a7Sj76t8VAgWwk5W84DNLDaFwuTLPbH6a7apxzNJu8FW6NraQWZoSsS2EbzWWTdwYyvegDCcUMA3dEtGeVCNWKb",
  "key30": "2fY488grTKAyCTc1SETY5pTUf7EeprKHvgi1Qs4HBxMYLdQs8HE3nbA5yvZmBja9KSQPT6EN83jmQEQ8sCT61WCL",
  "key31": "rceKgBH2nz7w2HcjuNCAhJz8qEDYrCXaqrcW23Sv9A2PkqpN11Ks9gTDW2JHnw296WCBxkzd7Zyackwt25f7N8k",
  "key32": "5w2f4CYS7EtX3EJd5HY7FABYWTgkuDhgRvwHkwKqVwzprqbEbin8WvFvLqKKzXqf7rPY6zmyW4QiwfwS6iYGeQpf",
  "key33": "iSX7hnqVcAsLDa2g8Lf2MbbVghmepqkeKEZRvWnCVhCbjM5jHVcS5c4oEetPWiuLD4fz8fVuJCHg69djLjefZcb",
  "key34": "4Nfy76xxsUNzFeZLo49KyfTMTAEh7ymRYMUVzcCuAHwEQbBf4ZjBigWZxnsvEt1jwkWLBD7LPK8bzFP5eVGr3zGm",
  "key35": "2PpQuRQrVeta4yL6gytFQS7huVr3uF3G1qfHpJdkRZpiJDjjPtzkoikaNnX9eyk197C8ezFqK5BxvXtScgQ7jVHw"
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
