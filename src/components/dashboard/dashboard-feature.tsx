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
    "2D6HzZF6bNNf5j6dwBwRteMLAgTw8JtEx7csU1qFDe6khMJSVuU9y9B6dwrmXKXnXSNNDBTxj8TidGMJ2Lq48Aax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gqc7TLERS4rx921wmJGmFqqjG4BFijueobxt1aVbZq2jMsBA2tifPvM867ZGSytHU8HoSssEz5syjFo65CBoGMM",
  "key1": "34X2QBEPahuRFRQX6v4vZ2gxqevBvV1xhFSiQbFSC16JpajjXoAwaJXeGseFN545xFUgU1URKn4LAUEhrzhqjnAT",
  "key2": "5tinvTxbyMYzuNshatmL1hEDq1kYRdHomXD9h1kAgY7pkmbwc4hJGkwTDCZwuteBfsvniMoYfr7MXcB5AvTkem6w",
  "key3": "2BpQAexb34TYRQuLcvgwEYFpXnJDnFCEx73uMkygFX6LsTxuHR6g9fJ5mj9eHoJUHgSQmiMfrXxEufdHoWwt5vH9",
  "key4": "3so89L7DSJrBpt7oY5zMw2JuKCZ2ea1RuA9VNHvpz5KhAxx8bMtzhDTp6V5R7h5Bp5uNiYtxa7rgmW5QJwjvyrmH",
  "key5": "3aVNQsH7BXRs689mRHBUu7s1hkD36RyxPdj4G54rEXUqd48eRr6Bb36GTBFXbeTXxUSw5thY2xyKKeMxYpdifqyF",
  "key6": "524yLAcE2rWYnuZWJYNvVpkNvg7p579d6jLTVqdSbrAGK5RA8xPthdfGjndnJycZDAAM6WZg1DSE3aE31GepZrXh",
  "key7": "5TM29NSjEkNSqzdtrUnKqh1H1oTw8KpGDNkzqEcNEr64EhkqxE3NdqwEsWMFbnHBVtGojRQu3psvqGrC5rbQz6qi",
  "key8": "2rJpUDrn5tn5Ss6QnJix7WGWsT3db6xXW4Fb8X2z9aFUXbykEB9Fhr8hyC6ogfq9Dj2XZNrTdTLU2mJYaE3zyr9i",
  "key9": "4NiiQkaqtPhxfZCFUcdW8D2oLtHsD9mACLzEaGp6ETj8N1FspbeGbiSfcnDvjRidTGo1Smz2JGuAsGZju8F3AgtS",
  "key10": "5rwbCwYcrpHgM5QLE3noUEuLDVMZXKhVFeQ6Qo1CYkKNGuY9qycdVbZ6FaMJRVTtN2HAFhVTRL1wwdz7PxaxtT6S",
  "key11": "5a8GfGTQ8pyWJREQ5Dy6pVyahV1TAoV3yYGQany98mHFryVxkYPdDKkaXr8qEGDrs65KXxsEf5P1ooepWGt7W2vZ",
  "key12": "3X8J8DfUAncX474Pz7PmbSj1v99ZLC7Pn9iGVkKJMTBFzH1bZ4yvLipVwM6GVfathV7QU6faENDk9ydX7uEvN4gQ",
  "key13": "GtmRhS9BGNX6DLm15adZf3h4GTs2Vgn4DHiJKJSBZPjGLnndzZehGNv8qywjXHN9HnivnNdbih2AiEUyEPbgxSR",
  "key14": "kVCzZg7T5Pd3x7AfR9zdCufNmWRHRXTbgPTLUdi8re7qrrEkwqFxFGzakSgKGPE4CisnzHPMMG69xMKUZbpoXEW",
  "key15": "fcVjGHuagcSFDqcVNqFsRyYWAazQ1yGqyitvS3uCeNHrH4XWLYpJqZVXyymWyf33uJFPHfrLW33MdoxbrKpWSF3",
  "key16": "dBjn8HT32C1WDwRnDjh9mQuNQMsqiYRPF8Yho8ooqBPATGz7B5ucYMC4c7LQ1CyobyijgnAWrwHQkwB1MdWc5ir",
  "key17": "2RuNRcEwaautSfyinDwgmTCBXhMchQgBwYKTYuRWPwd3VsJHp6kqoSo5oF1sgjF7soTVT4mz6HUQZeXEWw5bdLjm",
  "key18": "3AEfFi9aAY1XFTpeTip96FHcVJofje8fxZnCG6D6hDmNbhPrpfkkrBdieX7Jmek76vdEEvuTiRkkboJA1YT4tNkr",
  "key19": "3DD6FthRM1KmrZamPffz2zPKFBAEseanqeUUg5fXuSt85ZyCGaK1jvS9U9M3ergzDUCXsNDzeybALfAWKRQXuwbs",
  "key20": "2LkBAn4KLXjvdf7ac9xLTr2miCEWFG1YM2Nx9BHVBxYjWDtm9Eik8yzW2vyRGDpnCcPWXvNc763xqEYpc1Cesp7H",
  "key21": "4To5rFABxhcz8aE7UjKftbfdTEaaFzYs4AYtHEQv6q5bWFp6SXbk3zafHuoPx9s9ptd1CjSrQKLa8Nu1rGo83KzB",
  "key22": "2So5ttvwUTxPAdcxjpbQ7ca5PN3NhrvgQD9pGHMN5U1KTyE3ZucXD973gbb8ew4WbGesxG5kfeYxFgGr4ucRKajk",
  "key23": "56aYy5mhpz9YTvouFPHCF9b4AfCk7sW6TDkneJJSqjmThkhHYRXJsgtxuQEVZztgiCsVZSKYzMA9AZv4epMDdop2",
  "key24": "UW2GqabD8bJHyQmrNDg3gc6EeR1nR3W7xccuwGjWfKVAYmyRtJVjZdQZBg6yABhkP6yrwJPddLz1fCquwDSCjSZ"
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
