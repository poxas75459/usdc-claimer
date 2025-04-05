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
    "5GrWjCph7ubjDopdwFT37LgDN6WnsDDLyFsEmwubfT9yP4BXJTfgAgZHefEeXySyetX4UFsmmE4hqeY7diH354rM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3psTM7Wm9QStaJpbaWboMb3G78DyskpzPnkGjsFWDNiJbCwSdDbhTbU4Cbk6xT1i2s4YBcNSEPi6H9ZpzD6YjKga",
  "key1": "7XVzqAuE11q9a7akseA1LKJ81urB4S4qffQ5FHG2cerVV5eX4sNXyxyVw1nae1wHgWt8zh17ZuRroYH3dwVxwAM",
  "key2": "41Bc8VnX2hvwWPAuVtCNuGRRUuYqEDcdBF7gdTXtowoDLdDrvCedvPjchZoRWizH4xxao3zE6buc3Kzuzi3vFUTZ",
  "key3": "XhJeVAUDsVtCGf6wksXKJvejKkmcD4amEcT2BBY1txbRmna8zgm4vH3Xxh4hHBACoAY6PkvPhW1GGyLJfxdw3uC",
  "key4": "hVD9xMFft4LS6Pn48VT34w4AK39Towh1rJk2TiytutP93kaTbvYiuGEL5Yt4UbKHtpNgiWFdupqpQQD48WZyHts",
  "key5": "48vCBvTzfiG7EirfXgXCSKWBty54NfX5H3P9oaLAAd8MCkRKx6Kiymk7bkFUDSBGKNZbTJz5k141YFvWNcZCsVMn",
  "key6": "4zd27MceThJmCpdhH8wd94AJSVRhrKBLDVMwyZ1vEKVPpsYsenqfTq8qQwgcXnMbesHzRDLmmjsJJHTKWPn8AwJv",
  "key7": "bwo22FrzG2AA8DUcrb3odN8pqpaibKHk4ibzoXNE4dcL8Lk4xCJeoC6kLYJiejuT3iBG6HfHz6ABjZPL4kSLCTP",
  "key8": "KuxLBFLMNmmkEqYHbNWqGCtEeKZbAXAJZhT3HiGvtXRjfpSxBh8HM2pe9RCcpMgnJxyzCEzuMYA6BgS76K8V2UR",
  "key9": "514Bhi2nFDx6KFjuM2KsbF5xwc3zCFPFrY3ExZ2wt9qvJxKHkpitH6hqonvjLT3UmjEzJYzLA1DZRug4hz4ukMi5",
  "key10": "2chLDqohVVZ4zKaHT9npufF1qky4XamrJCwpaS14H89SMuAHMfqHnFWVVu8q6T3wXu1f6adKD72HCkBekb8hQ8be",
  "key11": "5VYQ4N2dRQTbWGNXFMAi9kCyB4vhStYEQSLsP2JqKhxArJu327sDoE2zuBKxbaebtfSMrzVniew6m8p7EqEoUrwv",
  "key12": "5xm4CvMGQBHhv1CagfC6ZPo8eyQ4cDv1s13dxGqZQ1nPEXg5v67UdSgttaSQraecioy4ptq21BiZXpw9MmUWgCAS",
  "key13": "cbMugfPAZppwe9FDiTaSt6nex9mEzxr626wjRNDG2ysrcKTKELEzhhvkscgpdv6o6xkMGnzNa5eEwHMdNC6pZot",
  "key14": "XrT78qXQUqFNA51Etd3xbSL8cqfwC4hkhSY4XzBFL4dntqs5VygWvyvoSrh2XfZ9NRJbnQ22izkWtv22RrfUGaq",
  "key15": "5VJfsii2hTwGqDevWF7AiCwPaUUrsVcyeoq1kT4eb5Gpn7gqukcmyw3cWoCXgtsdzLWdntpVUEBT9ZZKAtGvsv87",
  "key16": "5cgPbutZdyxTNnPxs4FXzhcY6uz89unSoUkXgMLWfrjc9914tG9TkdZtZw8VKG1Qd6HdeC4RYqkwpLoRBDrbzLVR",
  "key17": "5iWPon6yt7ESiiu5PgBGfB1U8bfgxMs9WmPJH7T8MirPzutja8bK38Uaz86MxmCQyHqDxqMY1RLkWjpjiFAQCCnR",
  "key18": "hxXaudUKQfMTH9gkq33syZ96z4qREksJbhEjXW76SAz1XZ38iMA49qwYc9VfQR4TSThdHPwp8ATemKUN4UkpWGE",
  "key19": "5AV6ExaovxEKMHeoqgbjkc1BWNwscdnRof1sc4pLm2XYLipm4qjNkEc4wFryuHQ9Z5ZMZ3dPt6WFGiaE3rG3JQe2",
  "key20": "2yhd2FfTSPn6J1zcyba6fyQyrXTVtvgHrA2d4rbixco7hqfT8no5iqjJLzvRCi61qtrC9H55pYVCJNxqCeENQckL",
  "key21": "2EcDKWRAwfHw79hvHHQhjN9RbwZmt61rnPpfzhqMjCXnV5hjS23yWBCA2WGqw8vbQLHtXgfZSN2TfhaDafGmGN6t",
  "key22": "3jwiZqTLCuoyWBoMoy4Bz2EkLPxE9JJRjRXb1Gv7LvY8fPHjiaiicpxBiQupnuL18JCL3Wukv2b1mVgMXw7mJVnh",
  "key23": "3UfgA9hFDc1fjLMHmRWTdVp28XBjYhAHUB5KFzMEANWPJAJRqVbQ9u238WEPpQNrRvusJrEshGh4QLxNYiQStSdU",
  "key24": "34ryD6BZDTu9msHRoU9RPW2XqQtzWnHvazavgEnqGCTR3W5rQCFRT84f4Rxjhn9gtyxz1QHR8C6Bf2GBTcp1LVN5",
  "key25": "54M2qnzJZvdY1mW855HZYe7DXkzMdRY5NdmENABzyPrWK5fJHy9cQwT3JoPDRkPDrztquhBqqa32zSiBxMMSN4Lf",
  "key26": "a3bWMDmiaEuAH77qFPEk5iCCoNb5185PhtMSH6ki4DRDGgkDqNbuNEzSbA5pHFKfodTqojZZw3SnQnpgTrYDWmw",
  "key27": "kamf2dev2GiDvrtFUr3LwLEjk1S3NZaR5Bw8DKh8Ney6NqF1e6i1yWW4u2w9Zop5wykLtkTBAUhMAEJNhiNWLJ9",
  "key28": "Qk1BuytCmirpMcmzHSiU2pPTJd26LkrEUERtZfU9eZi6aL4hi9ueijtPdw9WZ4wvL98oLjzEb1qHjsMjnT1aYDF",
  "key29": "2X9VFVSfKXvfunqdrHMidFvnua5LoL1cwJzxMmPB7T33mvajjgBUdKKQwGZMnErqJ9ej11FNX87zweMmYNcqm97S",
  "key30": "tiNKNxYQZSQPLigDZH7KjjXRKz8Stsf4QJbHJT4T6GpShz4EYX7KdtU2Z1aKdrKyhraqQU4ZdC11vphbGBxEn9q",
  "key31": "35yWEceRy4iZy6Zctri3W4H3feyLJx6pNgRwiBj4bKabdRjugijNukHghw29cTApeAzZBszz6qfFdqfryyRRqvaj",
  "key32": "4rKfvrygiNF5SneHn1Nqzt5UnX158ErBa6NzP3MDGrZC8wFvFcfcWuerA7rjCAyAYrvSVCuvSQBmxLWEBRDYUDNE",
  "key33": "2j28TH4y1EopuhM9yqaXDE7qFHWF7pmDLpQhNUyqF8cw3v6GmmEdGRQvS4uxmZaRvKMESeLdnJfkuuLqTgFHkTXy",
  "key34": "5KaB3JwzcVGuJpXUAi951jxUAcsAf7ZQMB1pQcrjVg555qt8ziE1Nmjxau9FF9m8LY6toKob1u9EFVzCJKHx1D5X",
  "key35": "qGooQAC24ohQb4NV8YkDiMov5zoqzxx8WYg1TqHPB7WLCYLwP2wTyBYFPV47ypgLrZ6pWCkQdMDPMpGgVByzLAi",
  "key36": "5bPmDpSrByHqoz8PdCR77JLKGxGEQzVT2j21TLcByt8AjzLmsktk9a9YA3tWJMQmzNmf8izRmgucx7zB4o6YHYK7",
  "key37": "2mC3A6YVyYYs8WsbKGNRGbdAqprpfpnS6yiCUxLwceJcCtmSV1GRxkHzogr6jh1bDzUhPacfqG9N4oXJKMC718eS",
  "key38": "24heeNXJomnTASkJsHqqnWqJPKhDmZCN8Wv4dVroUpXCwrdYx9rENjeB29D2oRLV2kB3uvVb2mXijbUKdZ3hKm5X",
  "key39": "4ADnQok4aCWPTt5GCQrNM3aWY62pkU7TDE8VyEtWRtE9z4NXnXEb8uc8vGdwMuXwE6QywWQZ5YFG8HZNUagKTY2L",
  "key40": "5mG6RahjohrweSJmfrLtWh8ysRiFxk8LBBfrMzFo2xDUEN88vuVjj9G9YA1NnCta3bJ948nEGjjaBCS1SFiueZEK",
  "key41": "5b4RLsyHSxEXmyThXexnM2Pi2tdJr1tSPJUkdpwMGY1Z6y1usTegqfbYw7syRyPFLSNrF2KhGTx3mkjAQFFYHEar",
  "key42": "62pY3V4aBR5mReYqqSRj2YgTbZx9ixXwc3hDfQeEAiHtndzEcerK7hoJ12QMdbGdqYHb7VbdxrPeJNmQG7r5pAM7",
  "key43": "3JeAY9g9YVojekzvTYrVwPD2ZvSHQkusJgDgaoNzAFUNancCg72VNfywFyEU9Sn9FsKSx4cb1VmfsDcj1NNCo5o4",
  "key44": "3hV8ds5hq1ATGaf2jDRS6DxF8tda2iAdn9Rii8j9UZVzocJ9QPJ9H1EG6zaecMQBK9FHLoKhAL9TD8banMe885WM",
  "key45": "2sysPwsAnN6BeDKFW6H7zmpb7aXcNJbCTj44V4rUymWFWDp9cwi8BRhBRhpv3pSpvGhcGCihdQGx1CR5A9jZKZcA",
  "key46": "25hPKM7k1bZfXEBQcM1imQiojCrPgjpizLejsUP4VaQRrzS186gyKuNXytWvUesun7en3Rxgx5JnXtnscE8cw5eQ",
  "key47": "pW6Yi7RfZCf9rGYYozWXaqTdBS6Eok2kqiLtY2h7NsvxpiFW2SCo4xrEzaqHHrG876eQCnufFD5ptehtEJ3TVbu",
  "key48": "2zXvVmDxRWp34HYGDsRTeS3MWZDiCCKzGEKKmbXoDBghaksQx6waAWASWyNcCbqvyjXmYD9nXmBLMmNWzgu75mRQ"
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
