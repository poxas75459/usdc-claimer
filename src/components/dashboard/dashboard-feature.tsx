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
    "QwRbMsvdZAUiaYcbD8ASm8TQR7iRkjw6ebHseWRuBbE1ko4t1ad5x6XYxjxwtb926mCKKNnzywT3f5KDGpWrRzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uUddnN8i3EdGXDKf4TqZrKvfaeXHF9Z5dFXgn6ZKUo5wdCkAq6WAhcxpcnhtDGqSxS9sdM4yxbxryyuBetaw59C",
  "key1": "5gUoaex3FEJ4fRQ6ib9KxmHzt5tHtNzLdXQwnyyZJa3u1EDrG1zLC5QNRPiern2gnZpLsRGc5hRi6bTvrBRRnaXQ",
  "key2": "3gAikkAAHcqV7C88dDnua1e4uQS5gnujLP7HZpqxQxoWhDEhbKs2BfbrfcxjDCTeJWqi5VAFud6cUr17scYBkhSD",
  "key3": "3HUBnoxBE9bHeUVnvEsQKgN8UPpqU7bHnFew94r699RMawbVdz6vzR92Hohi36LFmcRStm8Q9rJJSKkqhExB4GF7",
  "key4": "5VwUpSWdnURNyNzFT57tVrZm4M6WyQr7NzvSz7i59TjdFB7jY61vcijqLXV92WNA46AUXvhGVt2H9cNNvvEFSSF1",
  "key5": "51BDLjBkPXvrXgyGmXPrh75vem3BvB7rwo2471fqJY62xstL1Z6pn3vKooXR5v29oBukkZMCZVXAeiZq638uCiyQ",
  "key6": "4wD56kbDSZXLVYknfK9HZH5tcYejFCNxtH5FLz4sY4fdRAgvQ6RMz9AvTDKQkTRw9pZkZjU9oQ8rKJGWQSaewr1E",
  "key7": "43Yqn1Cc9DfcAg5zUVdnUHQCfUQbWqFCoRJcL2iVR3uXht8etx64cw5txbWGLiVKf8rq37GNUxEBfsjSU7vmvLJW",
  "key8": "2XA5KVnmgnbKQhJjhZXjxM3P4DbM3irESr1tB2NnPkGZfojWfgsdf3VGoD2DNjh87vHUrneccFFGCeAJXrgteRSr",
  "key9": "49AUhQNdy8g2eUgyU5n6RaaGJ11mtXzGJs5o1zwNoQPwUt5Thnae3oohj4SHUAVqp5dTrwCWnNsg8nQ4nrXqv5f3",
  "key10": "5LMa89m965w8TCLLySrHDpyDFtHMhihc5oDqpiLxK11cnMthVsjhcwRKuLHYVzkeZn3fbRppZDuNVm8Me1b76NHc",
  "key11": "3P5bdGACQ9hWfgBaiR6PW83q88huDEPrCrjjxUAqWqK7ENanARG49mn1P8vLta5UA6b5rnArDrTQyNcU3y1c9CnV",
  "key12": "oHk7iabzq4QybrThvKZ613KPQjFJYiTWpuzWVaBbhbkYZ6DdEnJ3jXdUYxoa9xudF4xsNhKuG4Qa1Qd1Se7ds2C",
  "key13": "66gHXTg9H1aZZAyukF1VMopHEggKB2AWakwRVwnt5apYhwbhFyTQZwuUeZgwDzgRujdTD3kWnrhsHmvpZZ92Z7gb",
  "key14": "5cLUVD67LEABrfRpP7xnj6fAa6hcfsVGr5rt1RW2R7Lvch5D4RbeFJbNFbkwEctihi81UM7pFcY4jU51gs8JT4oE",
  "key15": "2Xex1akf2c83DXwn94KYsRvj1isS1WnF3yzuQsEUSZzhuRtCfadmBKrJkZD9TLP7imbMoW7iq9aVaCUVMWY2rS3z",
  "key16": "2VKAHCR94J1EmPMbcj13Vmh2R42TwavXHX5fFa5NpRToBudDgHB8tfpdGTqrugWxDYYfM1fVJBTLawYnfP7j9cLN",
  "key17": "4RfuvVCBrWK6fVEfjJscRjcM5sC8Npcgie4RdVtdBVnTm47R9HhcYj9CzFKQp8sb8Ck9y2CDQ3EsmaVuFebRgmnH",
  "key18": "3B22juwiSB279wxYTq6thdeCfkukeJg523Fjyq4zCU1LyDV2rCg4HPXr9uJUapFmrm1eSCXFrncJi2XMjBoATK7a",
  "key19": "3Up6xytJa3JByHKF15fE9xxodm2KeVyVqVWFzfPLV4sU4hqDodtVKAnvhac7qS5zcMGDQCrakND9pLxqnCiooY4m",
  "key20": "ame39stzXej5UQDGCHxqy3bSHGoXHzGBRToS63jAWyxxSQrvqHxDf9La3Cmoi1mhF9sLNU2VSnHxcWkNytwyK2c",
  "key21": "Ds8jEdBpafykkHqWad5A9vz8YCFvGv1CqEye6cJorFbNYNEhjYGyHPu6eHDwu5y7fpdof5vG3QTruXGXj3NjZgt",
  "key22": "2oLyuVVEs94SNmePVNcJLqHnUGSidC3pZ8c2jwS5JUjEqm8DxrJb7eJsxsBTM34sqTvMAi1jq6tCni7w4TYBQBo8",
  "key23": "2Nkirj8zALE3UD4HMdkbtMStRvhkgz3WsssTBpjZhNKcaYRqKVz588u7PUVDwSVQZiuKRSintTnyMMLQroLG2GvB",
  "key24": "3wqo2YmShDQWeBNyEuwMShRimuu62ywJLK8jaHvrWuy4LZD8yJTE9YT1H2uEUorvgg2AgkcxTVn1Lv6D6xRyiLes",
  "key25": "LcKyjFnKmpcgqYKZsAJwFKcZodn3kDwQqSEYzCv9aWea8NTe18g9TDBf8oo277rmDkAm6i5DVHvnpunJE5nU7Mo",
  "key26": "4WedVajZQWKUaMAvvnxw9221NAbHcjgRG9rXdFT2a97bLWvcVqqBkhwy4MeWobrr5yD31HWstg65renYmaB3SnRe",
  "key27": "2MZtn1cc2jkeT3fxCJehimiCg53E4mE2MYWkSjw44bZ4P4bxpyCTU6qB7rZs3PVzVgEMHh4CEzKS4wfDsbDgL4Bx",
  "key28": "arZ8BwSrdUk58rVC8CBxkNSp1UpW2oLMsZgJwKhe8sGGvmpfnXSBf3fMcuVFS4qhXXQsQQUeDXPtpWeYfVkqh1n",
  "key29": "52ybDTKac65x1oG9BzvBf5BpE14oHyxKYUursQuWd6jJ87nfds4jyjeVBJX9MMFqtZ69QRzbiT4cyArhkkfvaPwE",
  "key30": "278ZBEFxpCCGXtBwpWFkKNuSZBsowM6Q9nzPsMRMjMAhHHupLwT795rtsPtMzVzCwPd9FX6jrvGGnTQCQHrAAkZt",
  "key31": "5XzeEVgnLXLJPWDW8cQvq7wRLDRXwFjChdep1r269UDDAjwQ3aEFuF9mth4cXiy8vh5zKBL2ryomyNMkxUcyRrFg",
  "key32": "54t9g7m3jby6inWC4g8jyQmoczfwg46cJzD1aJyQTz1j5H2FjatKNMsBtRAF48biv2sfDWqyCgyBjy41sVesdxck",
  "key33": "2wMcZVAeskSA36ZcwotGaNeQQGTTpVZbBaawiSnk5MizCH1p49nKShNdxpKUurWZx21mxD5h9AC88oC6FgDtYQMD",
  "key34": "kPavFMqMd3aaJwwDosZBuc5w2VeE3fZoHQeQWbif1dCiW3GUE3khN3s6ybXUGm2AEgH5S4bjynjuLADZwD5RwbK",
  "key35": "48UzJtktMZgeVfnW7tprmfXariHBHkj8o312z3J5QiqboRaTdosWg182eoTJtMfgcYrBTY3YDdPHamhXvCfcfAvy",
  "key36": "5UGefhsTGUPDyWr8dFUwNEhgGHzkRBqCVf6upxTjzsCpD3vptivCsY4ygniDyKm2wvycwLT83GAPNAWcHcuN8P7X",
  "key37": "3tF18xKLn26iyiDoAT2uJdWfk9mnenXxKnJYUqafggL1D3Jbo1ifLMBnTN8M5EcNEaWogWPqSKkBbg9gsvMLT8Gg",
  "key38": "4yiYcKsY2PwxyiwHhT1KL3SYGGuy729zB7Bkbd7oracXSrvVbCyobwPBEx5uJZPRPRiDKRq7t2YPBDtH5Dd6yxYH",
  "key39": "pZnyre6iCEbj7Mw1HH4WKNR9SvCGfGJPsgUKFYVCpmNYJX1PUTjmozFhMKzYr22HatEMxHbcigeye9zPEGQbZv3",
  "key40": "3VWFjaVhTxocWNwQF5wqMrTbxEVkEFSZowffRCjGto9Dw2rqBkEHV1CcLPrJqAdRA6Jo1sjJxogzKz7KaL6vfjUe",
  "key41": "4uQ2Zg49Tceyt8uWMcobbJ7MEzVQcxCAgUWYp138Kf7iHKHQvg2brajiqBXvk92ae7ZAt5oEsmXmEhzrqEqeXtGP",
  "key42": "64UFStbut3nEwdq65twdwf7Jn3WTDvNyQoS4bmvNdoHReHLp4RnokNGCMKDDwrr8tUoY75tjoRaDSnPUh66AGKkn",
  "key43": "4YbKLQzju9moEKoVVN971QT5321EZWf9KESKZWUy5D7SoRc1Mv7XQYJyDNWGVDZqAuyZWKuezzHgmzTJTX5pCJFV",
  "key44": "22yz3Td4AqbAWWthX4ueFEcgfiWXu7BkZjBV8AVfU5UjWPbRFTsjssaHiCLXs8CDZuUv6mSHqXQBgsYbZcKyyALJ",
  "key45": "3Y77A1MvFLH7wCKNXmX7H43d8uXxvuS3eE5FMUmUiMTMqw6wuUiKLcXkGgozGbwYF9HB7tLpeKNJx99ngjdvGsQL",
  "key46": "3Wk3YMc2okwDeFw3xadaAJR7EHTpB4GkSHgFE4JHRzLQdDUzDvph6TCVWm5ENVpjAv9HUt4j26dXamaQPQMfQ8f5",
  "key47": "5rg3neHzZM5ZHJZz7ADHatTZDVedMQwxWsa5S6WnhmbsoEqiX4HHRHGQeoxHquWvmRnorHxD2HgF7kdRb3PbcDkd",
  "key48": "2XGn1sMiZPa2ZXigVedzED2YGahzEtzmhUbK5P3S5NNgD9hRagvUKxE4VHXVUtrKmPZjMTf4G56FwAQHi5w6paE3",
  "key49": "49D9tJb9rG2S2gkUtrFXX315gZFYzu9u34m6jTbG8KznGrDdBRhJ27idjKLNU5nhCe5kASRd2h35uJV7bDd6GifF"
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
