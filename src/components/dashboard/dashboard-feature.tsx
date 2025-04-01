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
    "hJ1EbmvE6kBQfg3VACQy1qiHRiNegaMgKxhdThbaW5UPCLiyReMakg39JmA1JqYhuGcrQFd8jPVD5eZkMtJvJZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "499ND4JuzG1Z6hnn1dSopEzTw9Wum33gfvszFBoYdZWefhUNLBiL6QdjVrgcoPi3uztp2tmEB93QWXvQgp8DFns1",
  "key1": "286Te4gTBDkwENpBdCddwoEL4bPWoWJSzRY5MsR5xE4wEe7qPCtZAoxyqn8RHNuQ3KBBko4bez2jncCg17z6gJti",
  "key2": "2ibBxzcU4Eb7M6RL5478bKm7ESppKL9xuxARZRdmjMsoMgDtraedvWfTEB6MTtC2fvWmZet7CcBvap7yYXzbKnaV",
  "key3": "2rP9LTUfEnQR9JtM61p7PwzQudau3tjD47SmTTV87nR2hRoEGFb4W3C5dUBnRXQi7ZsF8Di9XNwygMDSgBiF4sau",
  "key4": "2dUEamZWuy2kf4G2LnrW13H56mZfuBCALhQHY1fcBszzFT9TZbcVGxCHx4WGh6G8S4bSN1DgKUMVbpRw3dfSqqad",
  "key5": "2duUcEzvNhZTwkz2B2S8s98xfFJX6VMM1YD28MXWxDU7gKFf3SJk6SYEyoHDLBGU6qhVf4SGVQMSsHMqypuVVsAH",
  "key6": "56drXCvfkUCna9wpWY6o4JSyJ8SDR9v6GUcaCJvMjoe4CygZy37nMnyPk9ba9SYHUjGbdP2MbiMC6qWGthbapyKm",
  "key7": "3hUAkZ2sa5NsuGZwhhXpAxZ6tqRBttkUxfWribwsiJH4mSyAGR7MfDD87DXLRQmtXBLFTNQub2sPYTp94TvBTxkw",
  "key8": "qZVBwgMnvmACBCC7fNyt2xWq48HWsjNHvK8hgxwx69KrnAgiVE7iEAJSabMeYZSSUp2yiYHShN6GqVVUGCi1mGs",
  "key9": "37DbCzx7TEFSf1adwFiFpf2yh13542MvhuqxrX87mbanG9kzwoi7HXjc3tTJdSDQfsBtw9S17qXmhwRkrEPHsEGK",
  "key10": "eXS5myJkF31NyzYfcSAeJ5LjE9kYJAiRdj2C48L84iYG4VoyEhc8fAq6g5ZbZTFXcP2N574a8j5VjwjfPwTRMYg",
  "key11": "5cJe48eSKnf1SFKJMbUByAYrnQTKiKKvqhpS8u5MH9zc1kCm8tkRHx2HZ5XxrrcZcLuQVCFwjLt367im8J4bx2mD",
  "key12": "634rpnDzuKnx6t7bsXEAxrqpxqDM4Cf2XGWBcYofRAM9KyFJfbEh1XYt9fGFnEGLHpvL56JMYNzZ1AX2pAh7QTsF",
  "key13": "S5Qaavz4Syu35P2CAgPswhGPw3dZ5TmeZuM54gxwdeJDoxiCb61XEq8D8YaXCiaazv6AqMMH8NGRAr1W5eFNdsD",
  "key14": "zHKJ7rEk9yKzkiFa7hdUdzu3fWnTBuLDrAjqtTUdkU8NEgufwV323fpM28NzpL4QQYESFLUmrVTLvupu1d4ULcb",
  "key15": "5qRCSdCo9JbBkNSJY6CVGKoxQ6CEozyP7rdiV9K4uzAxkMrQHjfcP6feKRCpJk27FsxmvvLpQKZP9XU6r91SFihc",
  "key16": "uXtFWtSTrgEb2JbDuDgdJzr8f7JXpRr1ML1QnHW3AyGzHghjXpwjU2eWgpjc5rZNdJhqM4Na4C8Cmu6Z6od21Lh",
  "key17": "2hnWsKHLwSavb9szz9faRSV5iz8mwUX8kHxW2moQvYaP5eg7dYN3F2PA17KaQ9TitBgXppevhnLBdGq5wm2TutVp",
  "key18": "4fE3jYdm1m4Zuvwpj58c8grTkDYoTAcfwzBcbmtnvpX3LrHY5v5od2Uc4uhhWHdWSZmyrPJSoNVSepmZSFgmcVht",
  "key19": "3aeiCwtW5rn3J3G2MYNuFDzieMm7e1YWRXNb776YNdh4WYp2x2uVn5UQDappUwHZVrxxiKVCa9QwoDMKk7KPRire",
  "key20": "5LL7RKanKFh7YaQVVifbidXVKuPJutVCAiA9W16QTukHSBJFa4VtydMGYeFzVNmcBsC2tG5hZ78wGdBKiGd1wSYK",
  "key21": "2PjDg4TbUCRceJn5NrEhqC8zzsB8Lzqz5Qux6zcrF6HxobpYGpQSvGbSPELgsnEt35Lx1KxY7ZuaSrPcoWAvVxhc",
  "key22": "jzka3SbMwQgGNDWuSWpMqZpjBdWiACeBh9mEaH2hSpRbi7XY9d8o5iM48kYx1XHYyeGUgM2FaeP9wern7MVGAAM",
  "key23": "WxwHMuo9857rXuK9PbHhrXqNMUDK8h4ojNmcCm4VWTubZYZ5xPNJvF1tfaMzkPy5krB3pxNbNFBawEnSLrVZ17N",
  "key24": "2cikVbSuWo56RmVSXxrj6FMS2wWu9CM4yiHGLas5XfBs2XDiRBzWEdeMpsfUpKE6XBcX1QyhHbjnmVdp4CHKo4cW",
  "key25": "gvHh5Gvh4suaCzjt6uL2BK63NTopAVShTLDfAxduxQqLW1yTARjxHDiTVJ3VyWRRAx6dQ4VehYcGiNbR4RRWtT3",
  "key26": "31nTWqSCmCmCKx6hBAD6kFH2Pp2ZF3baVazJ8NrEf4WvsiG5NxhA9VDTLTnvkfY3uCVtbfQMZ5nZA9gscMj8GFpH",
  "key27": "2qKiQXWiduasSiyVfJFzx147P4YYBZAvjwK3ejjR4d3jQuh2gyYgoyaM67qd6pkorgLBx4WPxKVJdRMhR4rKGh4n",
  "key28": "5ZbmbqPtAP3r9McnnwUptZBCm5fvuWswRJg5YkvWmFuu19GYMbAzDuvAAyx3r1cJ8D7bmn64QgQNkpubwp83tiHr",
  "key29": "55DeNsYLCnZwhpN7JvrcvaAzvaeRRe2hLiws9keJ7D1MBbFJM8jDVGwkGNLmeWdms2xvoCWXK3kNKg1TyBYop4Db",
  "key30": "5vYxRuUucUFaFRuwWacnfgDRZxDRygMuv1FrGCxYS9LnYtbyEYP83yDv7hRP7tJLmofMSUwJWm2b5X5wAtuyH15X",
  "key31": "4HUQ5Zf5U95NZWZcoE5XG1iJBcHsoD7wSkQ1TX1hRc5EPqrgjhgvh1MS2yF2npL2zRJVdesL7x39Uc3FhdVPwCEA",
  "key32": "o6LcigYWr4MFgPnWjUBepKchKm9rDxP8tRrJkqjgpAmrpks977ayLrkYw65xEk5o6KgwAbTKnM6ykVxEfGgknhL",
  "key33": "51L1JJvhFMzLN7cYZFnTfuxPc4nQZuNMJh9CRtoHDF7Lwz8m3w5J37ovRpGhmgGn43YU4uq4rGmCKnugAkyc3cGZ",
  "key34": "3MMabnVQjDFAYsLiYCQrS6kSoD4EGBHCizEkkTH9JnXd385qEPV1bbSAhfvKvt8pKrQxU3Lr6eZqPbF6TQTQAbKm",
  "key35": "4PHAq4avcwBbpvStiT54vHBby4ViDLt31tETT66vAhHk7trFZE5gukqYdB9TqemSZtGBADiw9WZqJZ6MdCLt9XZP",
  "key36": "pBus23vQxVzMw9SQQU6Azkd7k1EacRR3FejAn7ac5gQfktzX69phc6gprn6H2TtfWDNw1fX2BR5Qj7ofedGfntF",
  "key37": "4RxZWjATecWtKWrmaWCuWGK8mwhnRwPEHnDtFHSUVuraLwuPcNbZaXd8igGoKoah73usDXz58Pwa4QjbAutqDSsE",
  "key38": "2pC9PJMuLc47waJ5Jh8Jao7EyXdKNCxGanzS4BXZAurjBC5Ts4CKnhxC4p4yUgkRcKkjLeLoxDiSpguYzFNS2Xqh",
  "key39": "5yuKkgfmgRHhaUjeT3qQiJfvxEGBQLBLtUoNGr4q8qJEboib8uJhP9CUJKunwYKfSD1CfUx1UZRNNKQBisLzKtsU",
  "key40": "GquhfJegxawre23esRQ2seYWHvWLm5STLLj3rFHV16m7qVpgcyoUYahBuwuq1X4ZXzUYPpWZpAiooErUuPrqPyp",
  "key41": "4y4H1qJdSyEwpXMd1ENKrmquCwP1UESjZacpTrx99SH7jpGcWy8ywkyc3c8ZCwLuPeVkDsHhNRd2SA2P7BigN1hc",
  "key42": "soAnTy6UiBrQRq7tHCnWJ8Psngs9esoqU1LXx5ud93JVoAjkbu98eG2pCLFyXeEUw2rE3jJVD1BaXabbzwtttuE",
  "key43": "wUHPTthqeYgx1LwRUxjM9pXqX9qyiuDNMs8QhHe9P86yqgfPRAXnQAVtaQ1Q53WQsidVSL8cXCZTRWnsv4XNPiT",
  "key44": "oifAQd6TMHvc3Z75yqe6nHG1XGubz1PqS2V35sadjnrdxdJqK2xsWdjSCksjAiWPjyHEupTC2hTqZz3T9ReBnF6",
  "key45": "5ryRgtkYRVpU88jXbL7b4rP9VMzUgHPpuS771GyXU8rNZmTsCRjfQmo5VcHbSbUn3nGZGiZKzRyeXV7ky93iMsD6",
  "key46": "57ib6e18ZBA7LdcpCYnEnr3edoby9K9XLBs21mSA3i76Fm9wajvJNaQjYe9sULpMHQWz66opLpNPbAwC4vSKb1gV",
  "key47": "2F2wYcaDX9Xb5KNsqJUeMb2zuELfy9qa64Lg3XUGk1eqG7JNYGMAfgQi7Z7osRYCVTVVboxjVuEwTz5y7soxuy5J",
  "key48": "nj3L2AgxGJnb5iNVRuEGJT7bUoRVWNQNoqvSEVyjPVfv6ptWAjAULiKKtasB1ZYARKmZM4BSRaWKHszQ9XTxpQy"
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
