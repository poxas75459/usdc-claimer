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
    "4bzhpF2YxK1EhcPa2mx2ti7qexH3h3nzGPjC7z8eRTBy9JabH5nTLEWJ78khi6P8HNQbcnRgXeicW6ci2kPNrZoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oLGBMeUXHvYi2TsBWZkVZkaY86qik9BFSHmBMvGKE49KyEurMoAqQM4ePEjgPQYU9BFR49SqbfbFzccS1i8rfZ8",
  "key1": "2jwfwQLu58jeaEAyzc8gn58v3PRgyvXni1PCa2BfXCMJemcj6h2dTHbCncH7V6V49VyCLwkwy8j3TbAe1QfCNP1D",
  "key2": "4K3aJtEmr3KQKbTp6amsiQvtj49GwXYSCkqo6F7e3rXkCn9R2zj59GoB23a9DSxMQJsK7iwo9kUjiHkU13f6xbrb",
  "key3": "2eCqRecCWm3XDsE7pFY8DFkX6RghDdD9pC4udxrktyxS9TPwJ8RDqyeZAXCZii1d8z1reNXAUvxYzihkRC31FM5k",
  "key4": "4LngFcu9qb1BZrUYfCjMrGV8B2KZww5V883gtiVZnCQaX8QS42em4MSr9Cn4gGyH4vUUQ4yiAMXYBntFCa1bUsjp",
  "key5": "4r9f5ik5XFLfoFxP3hjK6DHPzthaSUpfYEriKH9JXYAopB9X7ub5LSeojwMMyQRwn6ZjA5MJiRQtouPT1nq5zn69",
  "key6": "3CEf2XyHzjw8UfJmUHbDkLjezuCRujfNZmVfHLpD8SgWfTrU8C4C38F7sLFmsFG96Gmb9ZrhPxEekPamPgu1t3VT",
  "key7": "aLv4LCzH6h9Cvzb87GxUnwAL4SzyBt3q5CJUKM9fHezx5bnzw7AHfDC68tZsKPMinbMftxHepmHpo7ymxGKA3JX",
  "key8": "4dG8zKFPtcpJf1Uc9ijFxnsjMMF6p6tn6fG6jtpP9A2eU6hABqrQTExdjRTjbDLPvd3SF8saPd3rmZ6BHAEuTqZC",
  "key9": "47ydfwfM1HarBaX4v6MkkmLpkM1KETz4rU8DVXVsEVTcFirxcqfWaWrK4wF45G85WmBvBp1L85MErmFMdaupSLm2",
  "key10": "27HwnSQUnSbW8TRRGUr1mRD2oJBD1e4yH9nZWaW7guSrJCnDxnatZ9WsHSb3zvEY59s1MRf3ovEKDFU4gXPL3UsL",
  "key11": "2naiV84kUUyHGVNsg9EMobBzA1U7QAznAXGGiow5qVmaXz6fr5fP9SuhJSrwiFKuZ9LS2pzbbcjyQrZuoUfLFZzQ",
  "key12": "37TjodRPnZ7n7zT1yw4482hxJUXRMF4eKkca9iV2qkG5LQhoYqeRAy4qdywHvUaqJMAfeecQ7dVSn26yEhFNvVLY",
  "key13": "4yYYcXUvGUGgfkw7zRS153LxzqD7vgPF8vYKu6FMYJEz7hNZorGqrRoN8Y7XNqTV2Z9y8uxAr8HJcTgYnWjgERLr",
  "key14": "5VJimg1h3PiouX2uNPZz13zt2nTAXLzgRdVxPdjgPH7y6esQNcnEvk3JQtsitfC18oDUiR1eff5eN6dSn3MA3mWB",
  "key15": "5eaNdjaLAVVgRbxK32irPWQiVqMwuGtipdqtnEGBBxZ7q4aLUfsmwXbbjWkzdRNZkaEc95EH6xqqfsfhBzgst74p",
  "key16": "3VnJAZEMxH4BjxM1ZSjXQSViFpJY1xVH9qfT6oxrEC5S9mJyc7wZGQHNpiYvV1KQ3kq5EA9Ziuj8sB2ePyq6oEa3",
  "key17": "4LqZLM28cPNAadooNyHLj3uDKBLf9nzixmP2HGxnZ3SHu1xZLPoNdmA4j2YQRtwV7oahw59PASJFar7ixcpx7sH7",
  "key18": "4XFHJbuXcSJncz35a51v1je5tZV3LTiNnrjHN7c9UDPpxBbZLonHa81tVACtoGa1jJMFrYrpVFyRZwEZ3gGoHvp4",
  "key19": "5qwZbAUyWFU4fARxmrGkCHFbC1W6p4hPvcRZyLh9GC37xdPJ9356GsvUCBKVPBPCrJWhjzFLjGANFC2rorxb4uYV",
  "key20": "5RRXNLcyH47mAHJTM5y64dn8MxJJYqsijNh9hMrW3pwvTB6kd3U4eAaGY779yDXXg3kQYxqb1UswHfxKhGk5m6Nd",
  "key21": "4anBpAVVnYa3jTics1vhHSaERqF6fxyjVWFdbLdimJNCAJsmHYL88S2x7Pm7Cs9aP8VpUgk6LmiVWmzhtLTqNZaR",
  "key22": "3FLnB1qJiTjZRUEBDJAFaMty91Ap9Apd41NBXq8Wd5jTMmpVkpnUcoeSZpHDkqSbL2RcjovCyZ1XdMbXUbZK23Yw",
  "key23": "3nCELorvu9wAdXcJs1HC2dWPduqNsE9V1SN3mPnaz3Ksfzk4Na7qVsj2sCtSx4ckGG4uWLC34ysC8nEgJAwCWQig",
  "key24": "45Z2YYV79VsF4DK2susuWtkF963EDYFnrCaCuqbQQqcjYbSw649Mg64du1e3484bShJq8RNuF4Z9wU2YK7ztwGNj",
  "key25": "5a5jjBGuVHyDyi1WqvJhRPHmpERPUFtCddiup1vhPqqq3tozXoAmbEHKErypPiyiTCfTqqHrvEurCZ9fjqMukSJN",
  "key26": "wZbn2rguKWwqneRxnw6fpeA34ZocY6HMFadXq3RXhR9h1PSLWyeMYbvoxLEhqXPyjhSDq8gqaWNE2fhQRw21RW5",
  "key27": "2ZtYZa3Ki2D7FXKLXjpEmJnZ159upt17RXUaiLEKuFMLZEptpiYT8kYi8TC8cisddANSuAerz8iMDDEhvKCKkKAh",
  "key28": "o1Qz3zy1nbHoinby4rP9Q5Vp9CrCznC2ckbWfs8m9b9E8iDjNWr6mzJzLNhzwyeFDTsJbiEmS9JNDhv6Q17ePGP",
  "key29": "3tudjvaJmMCdDC73u3ibyMUHRJtP23xJhkftMunXqRrVn1XcHvYSvQhdFCqhSQZwLBYYVkSg584GxmuHQctrVxHd"
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
