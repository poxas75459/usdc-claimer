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
    "3Ck5p4fL8kzRZZFrVwg1puU87p6UWeeAzyqwYXRtApLy7JdJmD9eyuT3YGxuefHH792FpLCSfV4ZZbUtmwoyrBmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XunC1XWsJMyj1W4X7MG4VpCQoeZvWsd8gLMvXxQVkzNeJaFUgUSbtYtaiKjodD2CSxBQYsVFQ4LyMNRtUPrteoC",
  "key1": "5EdJj5BoKzQCq8ENH8mzrG5kKGzYiiZtibWwuTbuAGDQymvwhSmGKUxpRTW7QABMrWeTqwYTG7WCCZqsmKKqgBZH",
  "key2": "5MQ9wA43uzY5W4ocTTtotN5TKCrAHGURVwEokboDD2YZGY51jvuPY5QSMAts36pqLfP1u79B5VQNuWjepF1jgVV9",
  "key3": "3YAR9yWj5GdKNpSZ7g7d3onbrbi5QUjBrmZTVmWGVXJEFPpHEa3RRaK8Um64YjJBDtCvvEnLiqmZvvriDXSAtpqV",
  "key4": "3pWJth5MhQR1fA1ggEmk2SpDvngFPN6sgMtm843PPc2UoCPSDjj7RUis3W1z4gZQ99CmnFuvjM8Li7XZkma34Efr",
  "key5": "3YFaLnPZiNcd8sKePwiTWJ7GkWF4CQmo9Wt7CkmJTH7fcrJiwYSTxWMuSMKhKw5ZG9C4U1afcz3VrWLKL46G5jx2",
  "key6": "5ZFmy7vBrosKhi8jbZbKqKw1dnUGu9wCciTDDqYtCDuwBoowrgoy35ATHofNFDjhHNpGdtuXhXrMmaMCzkjMCUqd",
  "key7": "3eN1AGH7HCb1CkT6GniVnm6PqMm97LQnob6mnyjPj4fW363L9vAPqQiKXr2rdAUqppmkk2swqh6DhaXtWJMiyq6M",
  "key8": "24GoSLLkTnbP9Myac52Loi8VVztKFRU2pX9yV5AC74829QhW7pLy1damM8tgR1M912SKAtXErYR7W52DCjtuxari",
  "key9": "5rwWHut57fzEipnMN25wJ2ap8Fnq9YECbUzGbWCxdKppv6HdWrGbF19bsV8pJUYaz3U16pN3RGoXdrP6g1FuicYY",
  "key10": "5Nc6KHnZzBacuikaoqkBBZjmv9bv4CkxaLEDq8X19saJNkR1oAVt4QKVuH8kpDd4tcjovuzttKpn92WiYqABFmem",
  "key11": "5NvwWUtKaHHVNPu8qfQWF55mKBQxe54KJ7mKQvymhNePNSfFUqDrw5rMyyYoGh7CtTrHddJ4yjpzkp2eujqdL3mV",
  "key12": "3J6QvXdV3T2dhKMGjUNS8KTd8mMrNazaQJFRyzY5QriT4cxLmtPYzB5jESKKMyxViXeyd9RcaL39PPRzScLnwcSn",
  "key13": "5y7wrGgAKbxHEumUMA3ccDKtQWuDKqaLgFRbmA2JnzTFnbGmBiQZA2528ZrtXAh7nNrLGmj7pbNdwHuDBi7T7Tv2",
  "key14": "5vnt3cRLiznkjsg7YYzhsf2hfoxSQ9S8koDVs6u2WSDtopvtvdJtknBrR3HUSLMyAJ6yZ5tHfoAaU1R5etXB5vYu",
  "key15": "2UVLiXtLShDDtuiU1yhQuLdQUGnSrt2QwWY2QsdXUQnkYjGeRZ7eE7qeSMZXhmcUyt8E4i3qyiRAWRG6hMwDYhT6",
  "key16": "3kjBuy2ZLaXXYnTSGNTGbeTgk6fP4ELmRj6UEKFZMF6Bgj3pEFqCpueA2hvxVnaNPFNt2sD6jH9kzGuVvrvDjpJp",
  "key17": "nt3U8L9rmjdmMe94xWngjkEUCww6Msukhp8iuNavuc4RED6qqzvZxvXFWwhdZzvAqH3owLRYoSFTHAr5xCFUkv1",
  "key18": "3ekb7htnytXMWW5VUQjMexVbuk5463XaC4Z8WcVzd4KpyxfCqXZiRRtSuZFfxwD87xjwMMjLpC3MNpqhJ1iTxwPd",
  "key19": "4yzZRfJGjEehoWtDS8be9v3gwFNyBLnK9ANgi7oETRUgYuiZWCifQPMbgn4dcrvvQeXfkoUKCHCGWjqqYHXDe5Ru",
  "key20": "45EGzTaygtekbNvBnsZ4FfrZaqzHmfyeXAdNpCaB7CD2DV34bXdsTFJdmwCkpJNZSEQtH8CYaEtpgyDmcskG9VfV",
  "key21": "4Ck8zi5e1wfsyjfscLCA8wzHcdcpVdNG8spPvgbMnsaa5UcFf47sLiYmTGNkcdhf9gDxau21EWFdYpv8sB3UGG1T",
  "key22": "3CvnA4ZF4wem5fUjFDwuqYByNWQ4rnH3kQiBjppnq21vFRwgwJhs1V3LoEYHXGt6x6ZGNVe4jkS8UHy4xHt3nePe",
  "key23": "4EPD1fy7h7jjvLLG6RdK1spEZM1zdX3FA8p7sRNGBfAXYgfpfR72PDDzYv35xpxGYEFUvhwL8zJzAH7h1kGf9xQ7",
  "key24": "5PAMdjkofJQAGXtzfTzc1YgQhFH8HrA52C9U9ohtJmwjcg3oKh1atp61TEzuYwXvCKg8MQL5nRdyhcJmmwy9AzRa",
  "key25": "4WvKrH66kSBuGZXQyzcG4fKp7rxmwUftQYQueudPZTj1PyWQ5EJ5o2Faw8wWpYdZmMcFqtpfvocmT4PTAZDtL3jY",
  "key26": "2QJySZNkyUodHdgHm8Qyov1jeTkhWmcbkcHjMZVyw84PMdPDU7AphHkWeY4YeSTE9bLXwQHS5XfvetmwXN77vT3v",
  "key27": "5vpqMRFPowHYDRwwD2b8N6B1D1QNNiu8zWEna7NR8TAzVywuPL5iVbTNpC8FPQegXCFpkvVW1cp9dmax5rB6XJ1Z",
  "key28": "49dQBarz6V3KLExyVaNpXNFrXCHqzKhKji2iRummjFnPmbhmV46sH2VndcYFKtEreoXffCQ3TU7JxjPcGk1BDnDk",
  "key29": "3zH4S3T33PBru1bgPmrNJqypLvcFyT46yBV95ZQiugrdKxbVC4dvs6wEkmJXMaT23PQyx2gF2cgvieDQf9Hetxe1",
  "key30": "3586EDwbogM4QVN2Qd7XHpQJPLBqUjsb5z9CFNkaLWA9Bp34GPXm1gHqitJadh7xrHY7omGuQRaSqYcdEPcsbuA8",
  "key31": "5317CBQ1p8d2sNS95jYxQZqYWmhWrB3XeGq944yQdg539v4u4CbzbvPWQPUuesLedmi6EFA7SzPxUcQgjYCrDkGG",
  "key32": "4xsCF8tqwyBCtgrndr3JdadzMRMU2tcTYCWQhr6L6dm2vbPynej8n2ciuLVU9hx8ukvSAxP1cSLpQcpZaUtsjLgr",
  "key33": "2foLY8VbXdQaytU1EpWxArXx9aNs2PaM9HMJK9U7iMR8rGSbpbpMtD5X7Nm89oDzDKXaNiRzxYq5T3DizkogHDSu",
  "key34": "2Hzdw6HX7wiDbUwi4w2hTrcmu5noyVbSMb9VYAkGxZYft84EyfiUgABE6wcudzEcjdHd9vuPfrriGVcYxkqDDkVA",
  "key35": "3SQx6iZ4KuEtpUS923cnr1T27cTrZj4gsNCGs5C9tHMt1CQtgeu4EpDaqa1f3vwDLDfiTmGn3QjaoqXvMuMj5dsb",
  "key36": "kAazNkA9SAfLJiLct2J5ssJRFxBfUVZhBiv2Qj4LnnGUiEG2qJPvyDG1zwyQLwZpN3yiHM55MHPssjTvuGy3nau"
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
