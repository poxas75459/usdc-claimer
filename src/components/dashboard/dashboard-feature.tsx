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
    "25TVKE2TeYkmANJ57tJbgtF6zJVkunER9BQLs5CWBaXFLAqxcDvYESubkqpYbTCjXkFCcZZVdRwEtchE4h6FNdDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8AakwtjuoXkavnDTwW5F5yffxcmaMzgC1r8wwPG6c531gvkZNZxZEXvqz9JBwd8CCnEryYnBuUQkU9HWC1PZW7G",
  "key1": "46QbEQFgvqA4qyQxTfobqqvmfbLqUGqFbsn26Kyr9uEAvUnQxjr5Ys9pLafoafpa3u23vK3o2gsyhyfgFBQRFFbW",
  "key2": "39coUor63b4aDXPy5xS6cukuRMSgt16GiEM89TP5N9SKmjo4hCCP1jRGmZ395KomUQFdncDxXULWmq8hcFk13AUJ",
  "key3": "2ChVLLZByLS2d9beJqnj7r36i5k1mhraJjVVAiTEwRTorFYxHBxc5wmGMVFe5P6xKtLSn7DGj8Cahp1ZEjTzaQyi",
  "key4": "2JLatfrDurz7RGkEhfFQPgrM8Xff6gEyMDkK5MsGSJgg77jBGq5dguCQT2FsXc2GRqf7rBHxjYnvLAWs7q4EW4Qc",
  "key5": "4Gkti3v4BNpYJKsyd5C2k68oRkCVNsPgxAFQUqvjSy6QSCJYN4vA59iACJHCgpKYntEUfcmFs5Lg3bkCj7rjaZJF",
  "key6": "3U7JJ4JfgE7A2C3rF3B9ZpgtmvGRQsiTgvSh75voChGQndGkAh2ya4ChLrfanx1NNDbHhES5NLeDejsD8fbSnoTS",
  "key7": "5U9EtzXopp3b3xKdvqhPaJQAqicsbHQsYxBCEDLMHTkuYputwBiDSkTKbSECNyE554uaXKEEmrsbxA7oxuCCt394",
  "key8": "4k957t7csmnCuXrPUUTQt3553HAoM6979AMp5USk86TShE1sjxUqRrGiTCsuHivG1NFbzGB9h2Vyk9exN2Mkqu4D",
  "key9": "5EUcPg3ZHriAraFX8gKCMxfJrYEUNsEEuuzescEXxEr1uimBNDFkLTTQBn5QxwvpPirzxhTZBAQRcucdrYX8maDG",
  "key10": "4PoSRiMzmcgoJB9SEV6Bmwfb42EjwzdiDKiTVL14RoiDLeMvbdb8XedREuCjb4T7zqF1KvqqRuHeDBM2hiojKBj2",
  "key11": "5sCTFYZZM4dLVoHa9rgArEm22E3gv8d85fQNhnX48QDFbSFjFfkW7nMmppnebJunXV1JaSkfSaQP81Y88CFKNgGd",
  "key12": "5NvFdQCw7ivR92gnzrYYztBWcKRwRxxf1qchRz38mX8PdvmLLRWMxff4cVz7zhHwHwBpb4iUoyoQYva4KbJdRNEb",
  "key13": "4xUqEgp42h7zMwxoXtAKdTsS1enAYeTaaTyb11TWcJVN4gDsTb2cqcUeNkxBzddUwSYi1F4zHhYTGaS8kEtStof",
  "key14": "2twHd2JYdk64zYq5qhS9aa2QhhriEYimZrBcPwPsy3ECkJdE5orsKQZgPwkUT2HLq8LmHUcA9ky1bLT96KTUJQAj",
  "key15": "3QKRatTRcnsa4SioxKbQ8Y9HtzfuGkykKkXbY3xyeQ62acw5vU2RRr9GnGpNv1jRF7FKWa3VxKrpXcd4rzAqZX7M",
  "key16": "BthSLDj6Bg6ZD1R7uFyxzqPWuLox5pT9zA7AUAd48CsFJ2BJ6C7ctCSfK5gBbTomKazz1bdHvEKyAFSdLUFCGh2",
  "key17": "3at9h9SVjmQeJMBprRTjaZ9LxBk7H17dZJf1jXc9RYfuJRSETnG5JUrrrBXKS5v5ahi8pwFSW9EvnukjA3bMN7VS",
  "key18": "avTFbUL4LFxDgtu9y6GkLCHxGw4qJBSkXzM54aSZyL1WXi2GLrXgx8APK5tvC8c1x72tvSFriqWU8q1ARqTkT7A",
  "key19": "1oe68hujiewsNLiCAHij3ppm9i1ESVYsxmMiPyR4kwaQWep4tCcCgRDPWKtBnh38AimYa7c2enyDjHPJypRN927",
  "key20": "5UQ7vpkHZyXyGJSapG7ttVSxkTPLZ5N7iLxp7L94U7a6iPUyfLY7tnTCPHLPt2zEa3AKmuKNRLE1svUvknLVyfnC",
  "key21": "574BmiHNgcF2o39gfbijsDFfq2Uf1hQLPfW6zNjKsWrCoL18ZAJVk1EMFofd9TpHrgY33gdhWYnHDKUV51irS4uM",
  "key22": "srr2wGmJQg1wfBthX3q6rM5K9RG9kY36p7a6aQv4BCxN8hjkPqFcEYG7TUrhR4EEXg42aGxduV9ooifhcWxqdf3",
  "key23": "5C9uSXCDcK4ut559VHq9fBNW6fFYe7h42D3FHeWJnU9R4fysjPV1GZaC121XAcFcCEGnsT6TidksXLHRot1yi9cE",
  "key24": "4AN8VkQhCvWxhVQRuJrFWS8cMBQ3ARJfLs58bJ8P8bNMyz7TM1g4YsXstQHKY4mb1C69Wh6xMoFkybgxLUpziquk",
  "key25": "5qHiXfafVjaBdEHDgv4k2SYPjWvvcxVv11YXVTU69siZcbPnd663u7tSGVdCdWwbrCT36oAtaSsFLbyc57tn8BDw",
  "key26": "52dGNtWfB3Zx1ThYwzJRQj2BU5ad7SKcWSL5MTdcZER514A54JwVeGTJWXeHA2C73oo4cGVtPRFBb9yDLH9XhbfH",
  "key27": "4UtdyaP1qRNwP8jizPRzeAmfmVcitinhUTGct5eJtyV8MJvKnbPN1rnVDg8tzfBCQaUCgwCVnTRbeTwgcCecV4DE",
  "key28": "5zowmbAm7GMce3xekkHtkFzb2np9px2Rt2yKFYQ5xQvm3F4RRc3MKxirbev24zXjaRV3JusCmPtN2zCwbSp14C5s",
  "key29": "43ifFbP6Xogm4kPr1qDBHM9EtaKYYaDzsVWxJgg3wMu169Wr1XpeXLeUgcWYxCeYUn2TC24yaCtZtd1S61eBbxzr",
  "key30": "39LKcd4ih8vPGDR9FzwziuLc5LxLQyD6U91XLiycKwBXmETEHYXp3FRVeVbhSmkA5PuG6wKFVPpPcWKSD49LpXse",
  "key31": "4Jwzc3MqHZJFwRhCte2Z23xc5T1NwWy1TkSnRXqaMtm9wUJg9XocFDCH6AW1ATnNWBjJLLrRdpRMF9BfkckmZWXV",
  "key32": "3KLNv15N9BLUg8t3kSkyHF1z3SX1daXg4gtvnzUoGvWbiNg3ozvWAgQ86GQa4i3sN2wypMTDzBd8DGrRiTt59WK2",
  "key33": "b1BBXCEK9wyV8LDHThdP76jsLDMz7R6ke86LkNBqmH6toCxPzqoC1CZcUxo9MDmwvS6TTDuMpCSgv1rvykqp5pZ",
  "key34": "z3zMmeCfKPDirRPsEzrnaSFJJBHuZZ357ER2amYWqYh1WFuHN4FkaJ9tooRtxu5NsrYcHbVKEV2KcKHWxNZXtei",
  "key35": "5yngxGRAGCPhpyRgLYh1hrp5evKCnQs6b31S8anoRWn1GbP7Kh5MYk2V237RJQZNTobZWCTLYFdMcNGCqUwyj7J3",
  "key36": "5uhddm7Aa8ETh4jATfFQUxzdLkKSiuEJQwtVKoD8QheEQHFgLhRrW3cuT8xH6UV2fEb6VKEdH8fLgeJSypQPJwZ2",
  "key37": "2ziZEcGduxGBNBk4BS17pYgBkhsoem3iSEGno7ikZp4cS83uPaAD7bp4wBYcPU4cjMNSjE8ihfUWZabtpGgEpRWw",
  "key38": "aDkSkYicMUsS8AbYTCMPnvP12gVzPHfDtGmGaSpzJKZ1Mvtvof9RxGC8hjacqD5bV6yEt8qejKUFEe1JzuQkngF",
  "key39": "5aYxd8ynw4uYS1vGCAhmMTUtDRVv7PVuQtCbRbTQ4BF4wbjZeSbNj7uMwJ4f2Pxqeobisu1iyagVnPPGwbCzeR9c",
  "key40": "4XqA24CxEfyAdtTpzcB8hjoxD7xR5kgxXt3zsVndWJx37JoZ7MnZknWQJgf2teRDmZoA9MZdk47WcypsoWYBGAVz",
  "key41": "5jA9UkMcLBMYUFcW5rzBFe4S8yB4FY61LyHb3JzKdmMm4E2KrdT5atbA5GBodvcWgB1SdvxLikGQjYBVQPy3xNwM",
  "key42": "Bqj1kRxeaC7TokCuXtMkVM2dquRja2LEvbxrUBYkHTHY21vDNr2N1snEoimh3MjSZRT2DoPAwwW3nJowtZM4kEN",
  "key43": "4NGdKQpyGwj3rZuhRQjiFCXBkX1gbNCshNWNDVwkcHeBL5iVqHoJJzUaY1dcYmbxP7DrXja62s8gEndEcYkgdW4u",
  "key44": "2yqF4gaFWAxLbhcZBhpcGJH2CJcMKcba9bGtVomaW9iut8nxDn54BzJVWJauyRsQtFYBCXEpytmEnptuuokpjfHx",
  "key45": "3RioRaphfqnjZNrvANuneysEDpd2xcuPFezJXtYvoSJwB7ZFrusQoaDwWZNjfc6yE7z8eYmto5JN68x1s1CtCaoy",
  "key46": "66xrcV7PA7DiXoFtJhE15V9JYJB7Lg148MmHB8qP8BNiuYUAYz3dM3FF8sKtqjt5RV2skbd6Uw4mtgwUj9Bz9rZ3"
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
