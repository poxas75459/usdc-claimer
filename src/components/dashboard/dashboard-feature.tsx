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
    "2rQ6hm8za9eYEuoTRpV1PnVw5feQG2pBqqZg93DwYuckPqZnp9haFvHhq6bU2nTv9UGB9Qvw9vD5EDL525Ad4M1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "raBF6iei4a2HDuEMN97qwLUqvZXBiQ47edSu7RxpZgShAerFDYgsDwdk6Tq3QNCK3EjL7yhbu8hQcag1PdDYLJU",
  "key1": "5paD1czttioV7q74CTK3t64uYvtFz9krJi6X5jDWeRAXKRFjczEgj8tJpUY1bhTiT2qJFZUG4ptrRYGgKeCBZLWM",
  "key2": "3eLAQMwx5uG12wnDSS91RYC9XQxztny4mcbkqr83YooJhdqygVt8kvNqPK6taG5G89K72Et8Bny6CPDT466UGe5M",
  "key3": "2Vx7zowrh5rnEnytLazaKpykpjec7v8oEXTxiEfdYPwJkrHGaafoGKgVUuC54DXetyc6whXsqMLXsAJ4dBwx36qs",
  "key4": "fRzT4tHRZsj4in5oakzCcH4Pt1h3SCaGQydrQSaCvqh392iADigqTe3Us3j3V7c5cNr6wtt5QV63f5wVA4T9p2F",
  "key5": "4iSfihEQ2kPcLaujn3zRQQD8zbF1Kk86HBuR7xUhu9TtFkGp5ukPNw17xqxd7AGAVEg6sAtaXCrAX4GCmJZ9NBPH",
  "key6": "49Q95Ro4942SpXJ53ZYyraiApyB268tsqMoMpQXVvHgD8CqUysUaCVwsxYiZWkHu7VZNeKgCWeN7eXS9jyy8HHu6",
  "key7": "64ma7BN66U4hoYi4DUvs9kXai3HYqYmAUqfMWYfvA7dvKA5cPBfSzonaygR5C6sVDrv4XPfJvagh7bWVWh1fqdgn",
  "key8": "5uqtvZAnFKuBCkjp6HxVnKy7PmJUqz8SzG46r1FTZJNbQkkZTX5MWnEFA9DbhMcdGufekvSS6Swnt85YtPjQxMEX",
  "key9": "4wM2doK5MyE5JGVbSo7EhqecYf95ixHQJMBqtnes2aXeKVUU37Y7aRxkc9W8yuG7gJDGJwBrV3sbJ8uM7iBeawqp",
  "key10": "46Y2R7X96sX57HELvAhCJSi4JhedygTpN9Z6DDtBj8anTY37NFK2eewAVPYQ6xDMCTTwfV9MjJr44b8uppGozRpB",
  "key11": "4pBD9VSEdJJ7v6esc3JqZtkNAbQMSSwSTj7RjbAZ1wixHAB2CcKEoLfq1vSj3x9BeukxjJsswE4juNvNrnj2kcGr",
  "key12": "35JsZTzHXdEwcM9QtS5VYkcGD4yH1XYRWWTX1i1qLuozhtWhDrUW55FBcok1SitNPkTNFcfzbTUzDuajHJBkqE6c",
  "key13": "o8mvWYAPPhZoKxeMS97JdRUj2AGwSwJzSutmAL6xvJMAZhTnx4BuEF9A1mQrkS9vtq84fTXapHWqTrdbsGRqBf9",
  "key14": "3HSattgZV9J22GgzzafKWrZQY7qHdJxxsSs9R22Fvnr9LjpTzpJ1udScWUT1cFxNisSrsr7qJwFxuSSQhTh7vYZy",
  "key15": "pbMhTsE3U5XAUob35hLdPULGGJpvMucH2Mthsthv4mdoehk4hMVkt2kM5FuuMZCA3hYH72pbZRfYdGraF4dpk9Z",
  "key16": "4t66cBiydmPxRhZafVyNtq6hX6qVSCHuD5kr7JWvj65C9H8aDW7hXqTBUrkQj6qMfmLJNGbAn7AjiKfJHXGt174s",
  "key17": "4Lk7abXLJb2Diuydh26w2u3f9ZkZpmm5aroZFS9V59KRJSpXvmotgj79XKyVibxcZtbBLqM53ouizvxmg6QgYFBk",
  "key18": "4BSWDAnH9WZqiQcJfqjNGX2FavcKSUX7y6jBbwnELL6BbHmsWphTsXRsLDvKfEVizucFnxd32s6E1SFBksMPfmcr",
  "key19": "gUkd1SGJucT3V2DfcuFLpAarY6n5YX8cJFe9y1cE7ZLV74rruXiB6m6PWXgnu8baqt2aqRJpkw7kCaxVtx3dsiz",
  "key20": "3qekTsobBPDB4tiMAeRZgJjMb2sr4YJb7UXvL6Zihqf7T58rQqsqdjWRoyvXtWqJbyAhHgGEGscjDqW1294QfyHZ",
  "key21": "3fJhBYXAaPxkHh4DEL6okrXaJ33rKXBgG8LfE6EiSyWZwDC4DLeyPXoEG8BYhrkToS2E3wAXJkvUXnGQTNwAaSg2",
  "key22": "2CmcxNVSa4RGLcDL2wp8HkJFLpK39BZyFPJCF3gSwpn82EpVtXc9BiFPNuCJpj4nQ1TEbCShKLKR9S1oqwSX1T1W",
  "key23": "LerLZ7E3Uyi2uA2qJRfyG5XjbYJAWLP4BR5RnekzZbPhEXr7jHokZvbuQZ8hmwiKx377VNstJXdSiyuthGTAoP9",
  "key24": "2ZcfoWso4k4b5usKJL7sntF1AwEjMJjqUsjcycft12UogZtm7B8GjLeBcSWrn1z5Ki9ASYFRzPZkQB9rTgKwsLQ9",
  "key25": "5gNiqFjDaqF66RpqeBLTSDmhMQ3tFN7tVFRWfS82M2hFTmBt5T1zLXeHaFSmSyKeNM21N9QwkuysH5MqUymAFyJ8",
  "key26": "5t9A2RZSCUhidpEMWUXjCufXyRirDUmDBrFco6ZAmz2aQ888o3qpJpA3aTdGkfCjFRS2oePC8QBTjxZe9fihJ6pW",
  "key27": "64m9xMjJH7EdL5PK8ZeK8jaTqNWKzkn2hwFTzqsmH3nTQJ6pkqeqqTFngvKmqeiT9Ho879LMjgwC3F5DVJH4DB2j",
  "key28": "2wxRK9W3LjT7dV92z1TLh38qBVx9nsNitqBt5kLBwCHsEyoaRqPgxwu2asL4oGpys2dzpN8QFHh7ykbDc9voZKZC",
  "key29": "4fotCQodWWn2HWavNAqm2ogQ9ThkTPbzYnnVq8DSa94Z84siEYQbwJiET1RrwXbZ3kxDhCaap7g7TuMcC3TBeHrg",
  "key30": "3e4VTyR1tCW1Wc5aH7iGWjuNYuQ6TasKLvwhvcBueFmhYctKea1MyrFNpRpoG9Yit22ykDvwf3Q4ndCFpKe8Ai5J",
  "key31": "4ym5KeUkxUiCsxBebtUajfkYFTQ44Fpq8awy8KZxz3hDhN6Y6UJTjProUMRM5QxvYiAqsBM8jpavG79dKdRn4SmB",
  "key32": "2CyQ9noXETswTwUFbVXAP7fr9rsHCoXV1Gm2fWH8YLuvdXmjypYXiNDikAMsD2YV1FsgecafybYvpPbb8fPrwj2Q",
  "key33": "4bdFp83nsuLYwxtz1ZtuYXEKY1eKReNvm7gqVzgc5vVjfuT2cNArJUDRWw3byMaZgx32Qn3hPHu8dnGba7ELTZ9L",
  "key34": "5C3aLkLnQ3Huw7b2rC2v5hRCQXBBYpXCLT4Pjb9PPM59dWvFDs6siJGuEuk4yPGn3tLae8C9xRXJwMAwhspccmTh",
  "key35": "3EnmdaR5FzqZXynSWSrB4A28LdtfZhc2mZE9XrmdC5Zb57hvycfs9YuX52gVgiTDwutYq8v45hVbDtooV6ZGoAHg",
  "key36": "9Tq6c4JEJ4r5cgcZsQXhCxXm2DYYnY3JA537Pj5yP7DqhDgTHy2GNKd7JKPtWpG1T1CpFCaKEJzGuxsYBc5uA2w",
  "key37": "3ULKY2DmAFjMBy8EuhRVaQAMwfKHheopypARWYv2tSXNNWGpHJ3Sth7RxKG1FYB1Aqch5VpVxjx4TAfDszLg4WV8",
  "key38": "5392hPdnVxxo3adXMxZ7ofzAvjs6mLp4WBPfKYsKNS8xEJavWRjPRRRTy5NpTHUBbHyYydMbqRmZgcL1A8YLBMji",
  "key39": "5ntMUELdDwBznv3CFjjmcwk77pQUsrBxBB3qEsyTCiBQD9BWwzSvuZZvesxyUtECjK4wjvzBYY7RVizoxyN5xnPB",
  "key40": "3wDtZvfjFo9C7G61x3PYT2Ek8xvyQwBCGJ3iTnWeP7nfFkohMmQWHYwGzzjaow9WZUZ2j79Q4YLoQyCSfoW7zrPq",
  "key41": "2RkRPtpALFiTrMf6s4Btf2z59qUCeK8Wrh8mJmJQTf3uhVESQovXHEcrmdVyBKyrr5BQSTGiAoBUC44rRkdEg6mD",
  "key42": "44b82J5cJCPY3QBhZemLn5La5F9cMC6ecLTzQaNb6yPEmK8ECGuU3m1VZNj4gFhzJfeUSuQtZu7K9wip67VUCsjc",
  "key43": "2uJ8A7zKjAxK1qaVuLgDZ69fxao67zvhMM4SKZgecwF9Ch5ZWM3UPcdi3iMP9fXZTUPPi3eVx4HRpmsTc98dsHKx",
  "key44": "3w1JD5XcTvWspjumpgc1StqYWBG5iMTw5aFDCqCjnc4wTg258KTyLdKoCrx86MRgExt8kWBteAetf3SDhMM5qsy6",
  "key45": "2CSM5Xdrvaavh6qAUogoUpuF5ZheN5jwY6xXGuosRtW7S2NQztWdiY8Qf8S8F1Hsp5unVM7hQ1sUxCyYFj9RK7Gd",
  "key46": "4BSqTWBpwi5WUAcbnQK5ucYQPpLkE6U5a4bHGbHuKWse8f6TfB9v2AydiSDLtZthGG93eTJH5uH5PzXNNZzdWhD4",
  "key47": "DpPw9uKYrj35zvWYFWKUDmat98reqKLw8CbRkYVss6rrQ7bFb9QEKXyMoSkHFrcxHyHHfrMcp7GBM5CjSagfwms",
  "key48": "5vBMuatnjEGALZH9VHHTozZwmGAb9pssqkDRDiYWno3PjQjiVj6GCS7BK61Nx8tnFG7vNNurZGteVhqqRyf8hYG5"
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
