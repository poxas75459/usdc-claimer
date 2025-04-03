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
    "2D3qWVQoy2fDRe6iiMCrpKCU2R7aXgzz3ggcge5mbwqfAT7UiyjYhdHruzqUgtCT6j7kMxB2Ktd6sj36gWzDF7dG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23GaTK32d8n4aVrbxS4VnXtkp4QLFDE44ghHKbzcvNgWKMVZhXc1hA9ZHNjmAR7u2Kn59xB246iiibmAd7yi2AtE",
  "key1": "4iJaDUwKy15bjszyigVegWGSJmUHY1DSpuLVS4PKt46RTCo4kJzTiQXEz5hhwiXTT6hjnZXd2LNohEr5LBcXV65U",
  "key2": "4Q8aPpF34WBnnAnJ9u7cr5XjmSEJgYUG7EKVMmwHfQSSJ4Y7Fmna21tgEttxCcMmUzb9q3WBcQAZwzT2QxaTK9xe",
  "key3": "5W2zrn9sgzrZ1spnzF8NbJFhX57WReaYzi8VDyVHBnNJ5k5q9KtpCdZakmQ7fYdpKewBrVFmiZaqH9Drc5e8vpTr",
  "key4": "2wCGdAWUtEbJ4169WoNwnT6SHmrvzNwhfHh3qDzk7EPSvV4AFLs8YKQ3dtQHjcyphGL5YurQiNXpwT4w485bjVod",
  "key5": "5T2DNpsgtLjfTvVhe7CT7Dc1Bj5VKHudDkKcQEF8uFyUMJPeV9iuAMXXsUoBq5adgQ1fcnq7b8tVyh2Tq6ksPANW",
  "key6": "2jMt2YK67tLB9bQmxwzjHVKno6aW6eescchcNcxJ1zdF7hcgGGWdCuQXDvtMY1mN2mog6SGFxxCZJjZyVH4N8RQa",
  "key7": "3z5U3Bn1L31JF9FK3SM9DPbFFtPacT4qpxqbZwd396FKawH3bJ25HMouXnPuN9nFFNvMPzJPmnGYvAoSnqiBuyBm",
  "key8": "Hs97vV4RTWbE4rVPYTkbgJHXheSFCgMnASLXZJi9WmQTDWDjwYSwA6K2N7ntyhEJ66TsSfG1m49L7pnDgohvKdA",
  "key9": "K5hK9poD123TfTreUYvoH6CM124VZ3QSVCPh1LWKaP2oyVCP2SBWjFQGyBv5iVNkMWRxk7iXMQ9kF996WuFzQMn",
  "key10": "3TAVVzAsbFhWPSCiXuCHXP4iwKythR4jfbxoHjgrTbuUHVRWBkEpR8Nbbs86wZbLrRT7XMMrhC4wsbu6D5wUgCmC",
  "key11": "4UbKSmNYkEva9HiHooLchefb5ZMvrnLnpMrSTfR2bYK9MSXdvHr5U6XQMs3QN1qtZ9i3ZHrHL56zq7ZnFiKKWH6S",
  "key12": "3X88C4H79RsKY7UGjvJXnj3pYU4x2EX6uM7VJebdobd8HyKjPfxmiS7Cn6NoBfUchoXZhPWrnaL8h1Kxu7nM44tQ",
  "key13": "4JAroEgxhYMdC5kDvJ1rnL5tioQZFtbwMKbN2s8NLdx75Z1bqNGE9Y3ZEj67Wt56eKqHQ6D9tVEaBhhh9Y4tXMHu",
  "key14": "3rSrRMnWtLKw6SHfHgeLPb4jdQXth56Vac6jp61ZTXuchBcYggpgUSMqKDkcMKG69KuoUdad7NQPagd6DukwzTeV",
  "key15": "5bfYUoWm1QSAvwQZNaRfAKvUyk85ga8oHLaoGPAo6sacjPddFHaGvyqsjLdyQzSZfB1dxaGoAMJWXdWdtL44qLAf",
  "key16": "3GntVWB7BhJun6hUt81x8f1wpxK964b3DhDxrSGkFmHrPWZ8pnnKJ6Q4cr25sinMDbrVdagpJDLLJ2gu7uiBaBdQ",
  "key17": "5NkdrrfbEcDvXm9ZYYv1trfMSV9qGuzSHSgdNFZtnEE77hZPfP7NpdpZje5TazPX6oAANGAaSAGS7PSnLo158Xk1",
  "key18": "3azKSxVnBk2dqgp9WR39r49cDmC9TxKMQF87ujD6TdksdTTwKwi9wrxCDTR27pRkK1ni3cRh3MmXJsgnfSZ5c4XY",
  "key19": "3b8MAimTHJhtCzJXeLCPLagsW89qEYxLWXZmPxCZkbGojcoKYDQPmSAuEuLRFXJh764JHyNptP6Wvoh1PyuMxTpA",
  "key20": "3iSPJC542LfS7Rf7U2v9yQxAuuAAbXWom5CrSNWsFeHtCzYg143HzKvtoZJkgpMtZTjk3vUUJDepRXFMVWL19xxs",
  "key21": "V7SQvKtQA42c8hKdjwGgEmVVNf3mG3hnjiLvpxXYwFfJDon3jjba4AnoqPhCL6MmuF7PCiJ1p8VZ5prfYskz8mS",
  "key22": "2ESjEFYJVN5MZdeFMKCE1DwS44ZTVJqjdJVqrdBE2Bvy5gRZaRVPQoT26W2arx35nJMbGaUpDg7ByiTZQ9dAg7Gv",
  "key23": "2CNrMos6vB9ieeDgtczAjKuQL46f3jJrffDKMJYAK7oQ6BJcx4gaWw7mLFLUvTeStzZx5S9Ni5KL85BWS8QfKVaM",
  "key24": "2rYk6tdvEqonbXTcwMwva1j39cVJKdM3ujnjBRYFWiSsJ1dFkPrmb4RCBjbn7ERcZ13kL3WB8RMeaTgTMULnCGzF",
  "key25": "2NKdDMcSrej66qosyVdLm4nWdouUav1zFLJAE7o9RwoH68MWxi9ebQwVHX2ykugW8j42WfeNRWa7XmNmt2ft2P9o",
  "key26": "3xbdbRdggbGMjZ3SPbvN5MHAZfb54XhBiJCAbb6aMoxCTjVJpjoMQ4JPFkvS6xpa6U52YeF58d4bhhuVjRr2AKn",
  "key27": "xgLNp8Pk6RKYCTfvdzqNWvqVg2cqqVBQ1k92yMCeJRCT7nZBf5LwYP5oHQUkjQAZr9ihH9e2gjN2RCCMdEzAPtL",
  "key28": "39P3pASvRUMYeonRNG4hfM9fffYbED1iZPc3ZqAbV8GG8VESjhWMshEjFtESczXcTMWwGt8QJC9tSA1pqZgpYjHD",
  "key29": "5eaN2bDHhZG3LWjYkGPgWVXi3TbFR9LFmn2xQCdwAjU3KMfwETnAELCwJaB2TvekUNZCBCSeqgfyNcpf3wz7pPJE",
  "key30": "3hgSN2DARSJ2nukLVSiMqArHsqpBUhorXkkTfgkn9ahKeomNmfUwaHr5248x9KCDuHzVQ9aupFB8VC7U7MdRnCJp",
  "key31": "3GMw96txbiCwRCz5vfytXpvsY7YNetduc89oqReTJc1XHHLvG3Fm1aWp6CsivQNAGQUo2GPw9paB1B6Pko2c1kt6",
  "key32": "kmrmmFBrxHjNceV8KzWDeLfMBwiQkr3DzzQT7zFcDBPfozC3rXNm5KxGyjSEYGTxeymw9MwbB74ESC4Y8z8LhFK",
  "key33": "4aZiZnokZDwumk6v5sDSysG6PgWzS4hLMRb7EiVMskPeLnMCyLkSYEhiyb8T2t6EsZLMWa9P678P6oTdfCAk1Lt",
  "key34": "C4pMJDJrcq8NW2jmVBN7KvJ1KE9ng5A2YzNaJcPDe5U2vpQujj2RynwhaDDtLi27i5wra4wFv1nNDmvA9SBHC7M",
  "key35": "2WaKg2r36DedH6p6nAjG16G4qBsK7UXwaBTwFRWLrnPy5xikPQ3vThohUX5GoSoEW6pYSGwqUeHdPp7S4yP8coyj",
  "key36": "4c1uqqvKGYFJKoFwTuJnCc77qw28zNPYnWJmej6bVYtHRxGkZrVzZbvc4XkdA3ckzNx1CVhia5Gyk6KEFbLGFkJV",
  "key37": "4EZPrjngvEzU9T1Fc8hKrxnoJCWA4zyEkFoRDzQ3sgvHmjNTBtDodaA4xugCwfxz9bquKQEBavzenbJpWinPyaJT",
  "key38": "5ZFECYKuKXG75W9SP6UAFiLghZQ5qWdk3SNC8WGtUmK2kwcAREU9obpGzwMvNcMWaVRMHRSfJ2tyefk6H58NW6g5",
  "key39": "NB9xGTAoay5FkbzjVKcXbAduDQevsTLboWJdVKx8pow7R5zWJAqKQ3MVgKk1b5royLA9zxxQPxqhvvqstHY9rJ8",
  "key40": "63roDJ1qTpEVinMxrFT5p8MsJdoY6tEWtrBzRfHhNKAt3LyZF9KCTxwRmV4ytbx3vNmBxT5QPsLQzDBpDymgEMtK",
  "key41": "5ou4KYpKaW1iWMYcX7dUbZ3o5dXCjKpXzFwpS1x8vsyjwMDHxhkyrbZ88qVdeuKt6i5WLeqVGHeamtGCCHGv9Fx4",
  "key42": "4UjCcnVYLGaZxmm3c8JG2iyUvBq2twHpQwRauyzm8FeG5mUfQvWKn8Go9XeFA5UsodgepTEGnwnbj4w1BNSq5LAR",
  "key43": "3k3HWQE3df1K9sooveW5fSqRJuNhCU5qSqcpR6kCW3GANH5WUreCccTcc2iu77oHNkpfeoRcjah9WPF1PgDnmsUB",
  "key44": "5Rfj3CzFE3HoxBghsakdCFHSMQQDLv5RY88oGdyR3XhexvB2Gt5GxBqR8m3TNr5AbvXuqr2M1EtTmKgo6VdRMhgH",
  "key45": "jpavEftNoHSKnwoWZ2yuyKA7UBCAtv5rykz4AYA7H3NWC9uYcsR3Wd3E9zyqtcBpL8EFiwSTF1u3TuYYxuQHCPS"
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
