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
    "CcB6KNH8S4tXdzHfiCpp6Xy7Paa3oVwHnyhfG6FhzJ9zVE2LvXKczdsPdYLG82EBhaNEqecDXDbvKyqLnT7yprx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "276gaBN1F2thdeUwFoDZYzukMVwdSQ9NPJSk411QqaQdyy2YYYb36pn2qrWzvpFhTej3bmjKc32LpxmDfW3oqnx6",
  "key1": "3JA12PLj3fXfvdoDBZdHkFTTPPUxNTStXavKxq3DQwmwUJHnKSCcG7UtGEaSzUSozmY1BLCu2ks4Sb1qzTs2aHDW",
  "key2": "2xindLgKyfDgdYFKgFe8mW1RjcCkBLUa587sYXMeUL9LUdHQkgCB5kakcpdJ34dzmTJRye5gydFc9vVyMXxqnro",
  "key3": "25cqfNab7QhcMhqCGnqF1g7VRj15doyv4cmsyXdZpiWR4i3eB5qSMLnre26wES9fwHDEJvwTQkxqArqFqNszTbHs",
  "key4": "2jWZ2VmWELRTywLRiLTSxvGHWJc7zFT4eUGTz7QPoAjRP4QLVYGJg8F5mqA4etipbKG1z2xF8zNhQ2RJCUnSejBH",
  "key5": "4HoJzJrPcbkRzsapnyEuNV5zVTup8qaDKxn5wHCQDKGmuAczqroFP5p1ZWrJdfExTx3xfoNXNpzd7dqxeGnX2sZD",
  "key6": "2nyU3FFQVC2b6txgRp9Nv5FnsLsHYbBcDCNiqZSB3YUA1Cg5K7voJa9RZvQ1QgPscoY1B6fCMmMJB77wnmzPfPK5",
  "key7": "wGENx6GjdqCnR16n2EjESqk2maSCbeLNktWH4exXVCB1wjS7tEksuoo1gqm3ygHAfUGZ1ZFxbWmVBP1cACqUhtP",
  "key8": "4hpH6rHkJ8zs3tL3VqU4TX4azaGzMUTNcd89dUpjapjP8eGBx2qTQw3aG5DJ7NW9tyqxRgGhjZZf14voSf89sWdK",
  "key9": "5WbD2kHtn9UxTybTA1nV5zScbJtt2Xx399xsuCDAFNY4scSionAYR6v8r4ekvGjkiJ5eF6Qfazneis12bphnrk1z",
  "key10": "4uEq6faNyfjgUnXvmeFyjtcRZ3xrxHpf45gX6LdNE81rg7BoWmP2f8C35W6YGNsVvQqBSrB9GWVXwFE7ChBK4uSQ",
  "key11": "waGnQX9UCS9xCzG2cbzYAFmcrxBbFJGrYZHdZm4ytS6akwdYuNc5sotRFkyH4ctY272vTGg7uYaE75yoASYm5vR",
  "key12": "5iSjGWLtwXkjDnpXdA4QtazfccbwYkXTvjvBXbi5YTXiHhX7k1wyfd1MP37cwUaaPKQowNwaq5eqFdktz2PGFig8",
  "key13": "3USACKciPzmXVZAuKXQTBRzn3X4xzLkyETrEoQzU3Vxbr8WwkvFwHW5eM7rHUiVbNWDTJwGMw5HeHaRkqa1jC7dA",
  "key14": "2fnrP9uyWEbeZiLXJuheWXYhjrVieBcBtpaahSzGd6WmNRTUWbTw3Mw71LG1x45bjSbaNz3TzCXgJ4Afc3dtpoec",
  "key15": "2HYSTdWws9FhL9aJ4YPhDQDwKptt522obXthjgxwSfhjUUU9ZaJ8rsW1AHQrS9JAEknote5yJT5Xz1nfeps7nxzE",
  "key16": "4shT5mCBUcoNVVNCzQwwk7eAd2HHsFCDJq2pLc3HXybQbkeptWeCki73p8oqZvEdoSXtyFtbyi8i3VctnANxdWDq",
  "key17": "4bm7hGr572jbq27rcddfz34DjEYGR3f3hSeMu75dvdoNSndnaafyLS6czkNB4vP9trVXRFRzaDiyGSPP7tpzGoCF",
  "key18": "3TAvgGYqYwNfF5SbioabwjrWcQWdAmGj9h6qe5yZgRdkM6egysxzBxUELPaFvXok2GuyLPFFX2FjsGaz8iwxcayW",
  "key19": "2nKTU1DpMaVM2JxkYDwiumcQof1sGMeBGCNokZq1Kh3iy53RPGiasqvVV8oHB7M7SKvgUC7MAYMhwJiM4Ntr6RPB",
  "key20": "4DTnhcVMYPAek8m7a68YD1anpYR9v7Zgvvhor1h3Fk3ruZspnY1JEZL1yN1wH64ykheyWqMXen32SP1JA6uhwXnT",
  "key21": "3g2DsqpW4B5eScBnztotgqZaM22cfQ26hMQubxBAn68jGuPW15TVvENemBcmCeFKFCKYwfKrRXMcGxGvnHo5K3jq",
  "key22": "2DNLdQpevsbmoe6hVXapcVHYJGTYnepdxEzMrJjHN7YbRj3DcSRRRsyNxnLrYb3j1wm6DBSBmKG648N9yhpviB3q",
  "key23": "4NEGeUqH1ZZFuji1QQbEkYeoahiWcgTiwXQyoMqQv1EqzSMBm9nEfBDzztsb9EJyxsoaXeY9DGxsvJL7x6VKUXTW",
  "key24": "xN8BJ2ZkGdZoTCGysmh48CCkUUSzFjmT4MiSsPSrvvgwu5wXUAGtDZ2TiftBnY4VMwMa5XtvhtSYoDg2cPaHXJF",
  "key25": "RhZX388MzAV8etFmo8ZJ6qh3C2CDqErNMToBgaJ6WBJr1REdCFjaBQ16uH5H4EMurWytS86EXVpDrmbWcFWspZM",
  "key26": "2Fp2ycvPag8qzeDj5oV94pxjHb82NoryB1NHM3p5HzVHKpaeXiQ8r74ugqT2cL2aT16Ab3tmAZkwzm5u6qjocYAy",
  "key27": "3cth98wQZTFhoTNjRC414fL6VXJDEMf4CapVgFLDru8H86qEQBxvFWPwxSCCQJd5bboDxiVD2Ly5C6521b3EVuv8",
  "key28": "kdJVQW6DHdcKWKMFVzRc3Z3uF4DEd7SQMw69SWZSPDLZBfoFmsvymJ8rkYHWPU3RXk3udvmotd8GRcUdNc4mEes",
  "key29": "5DrQop4g9X28F9vfoGZTcEU7yDiA6sbtXTy9jkwsyaqN1qVb9JCJX4pw1Q2fphvfHvf4nSmVWRzLgHWKwb9rUxKE"
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
