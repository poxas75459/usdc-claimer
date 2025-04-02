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
    "49HGHULbCEcgEccdP72qTYeY3xqokbvF1obWsoA4EL1GAhFpCoCyg34qoxsFxSdPU5hikUnaAxYgXdsguH5JuQgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cVfDDx5ve8bNHbHG5GRusWM8wXXLvZuhzQWk5mY7VjzSx2yGc9LEMKkfttZ9te29YtN4T7bfBnwMkXgfjZKaNMG",
  "key1": "5GQwqck5ewFnbp7Xrr6nqq8vd6Br9a5HeMvzbES62ACnqzmrd6EHGtQGMG42aNfQQpnycA2dzFAMxPxQPAqPspjK",
  "key2": "GZGstJEsT61UfTG6RDieuyTkwVxSAmYuder4QdEtErCRvTacxgP3Lvgv3PeALqfFU7w3LuMFsUbRe4UTDWLtNzR",
  "key3": "2wMxx82kMAaAV8kAgBFigZwgwph9G4zqCEv3STVYnmjNJa952qyhLS7BarkrJBCxeSXNZqwqfDtoJb6KPv3N29Jd",
  "key4": "5gLt2TrfwDwhhbBj7xMqorUwFJfHVkntfQbgjfvQX9DixUES5M7yf3aNG2MNEQf5DAVDtMdSzU27VEgBdX2ffkDu",
  "key5": "333UX9qdpzgxtHfxfVe3wMVUbtbQSz75ZD91zNS2BYJF6ng6YwVzx4o8ay3Bds1KX4DXRkcuCR5gPqn2LxChbiVG",
  "key6": "xDJx9y84P65uKUBov2tKSvxaKXRGuRAspnzuevBCcp1RKueiH6kZZzPfHf1p4gzTdubqkk4a7mVwTjyHH1AERiK",
  "key7": "46XRrQZbSrdJrEjknnfq5CYumCtEoYZ3gS1uF8qpp5M8raLKVpm8Ny2aadtzUNcDKeUedbUFHh5UeBZb4xx2R5k4",
  "key8": "99HayfRNBwM6neSwfxHY98SBGLkWXz4jUmRDTZopAfdsK1ZK3wXrE7BD5tecaKPTqpdwVuxkgbBgCasFPqcBcQ3",
  "key9": "3PXeMZKduykvzcweARySgSrAXrF3J9MDiY2vXDr7D7VEQ8447zzXr8kAa42jxeuwvGk6CMPZchGj8MSqNDhs9jsD",
  "key10": "62PpQHP3tw7P51fVKz1VsMknTRfjZ7ph3Fysj5FckBuGL2Qg5NQYcdbBq8B1A2PjW5h2RNSD4yaXMpwNVSoUFm4M",
  "key11": "64aqFEn8h5rpVHRv8VxhfmuQ8rFddhHsHDX9jakYyr7rFwQ5hgxTCrZhLBUWxbk3vbEd4DQcfcVLZEv5mLoKu6GQ",
  "key12": "4wcnwa9PdSr18WZQnxop2WSRUskUALsh48LGiZUGzPAfEh382dVA6r3YdReUxzM43F7zbyPgdqB2qhrmuY5oAtDn",
  "key13": "43h4BL253LDWNL69Nb7SC4n8mLoPQrb2s4bVbzZuavyJs2GHedJZXYo3nkZPXG3DYQiYabnDxejn4njRq78yXQS2",
  "key14": "5QZUxMCybBidjxo2M9CYpNGg9uDrXrhtuVdNUNkMXCyehdyYvRwYgGfwFnU2YXkGZYdPoHrehNGedP99SrFRpMfy",
  "key15": "3X9LAFRAnhwTMRTA31fZu9xxLeYE9s8GqoAQr2Qvi9EuhAXFum7yassrN5Ue9F4vrvZud3JCiyP2hRqVXMfqprVd",
  "key16": "3do3AnMKxJ81wT4isSE4LcEk993SoCNiDib4MNTTMD7taMG3XUgatbyEFB3ZutRo25igEe3782HcymArWmCyrKb7",
  "key17": "3bc8zPUjGSe8LTYsmhaZ6tkxBKmZH6kLLzkWLEv88erhR38D1YJujup6aids5YMff1ZkMeWhDBESZc72aGWxps7Z",
  "key18": "2XjhbRacj9brSv6WgJHSL7aXqKWu4WibZRHF19iu5TcWaF39998Qxrr1TP37nanEKd51pvgPjvJN7oswmDtBWzHb",
  "key19": "1quf1Nny72zPGp3eeMMDVHUwJaPErPwYpXYru1TLGRZKQHewZUDZP9W1vKRy6cFo1AXFNt81s8a7AmwMG2PP54y",
  "key20": "41ryuSkVTzTkF2c6LvCKMwQs4mH6yfwzui44b6evec67jM2R8m1HHt1v6RwH3h9fCtC9QUjHyJ5gBHNhiAhrFr5p",
  "key21": "5qXSdiwPjfrFvmUvw6dM2PHzxZbn27Nz699RUwEcx51sinQfhmTW1mJst5amC758uMpbXyQF1q6yW2Wm6asAPBoQ",
  "key22": "sSvbiAbdH4KDMJGcBQ9ce9mXfcJpLVkajXW8nMVi7ABpKNdPLLihjXRV32S1SiSqG7aF1fibMXGyQxTK85HcMaV",
  "key23": "mJHcQUqEWdL9e1EhxNunFuZ8P9a7f8pr71fKxjm26Dzpav1PU8WGQcRPoja2vxShJAsoU5ZCc3hc33R8LTsYjpa",
  "key24": "2yoLg5gv3wnvFR8MQ6QJyvgig5G8cKxuy4PJZTPQegHJT5BxFozNnHXE3fhofMpNcJH2opWVGSjZb1SRFcNRj4Gr",
  "key25": "buVwErHiBiy1thiZQYAswvqSzEGPyuEKCxzVnQmFk99P2hNasN5UFpp5T2j2qbG3V1F9EZF9cvwvFQUbextWi2d",
  "key26": "3ucPzdTNLBN7Z9EYRq6sKt7YZL9Q4qPwE7CSrjaAY9LHSuDbzgHdvZd2cFnqPkW3x4DcCQwgiSpRLWo3aY3oSzGv",
  "key27": "44AZfpA4mNKHUHBos3fSgu3EzsA7chnfZHjRvsY6Uo6s513jmksNurBSE9P6jQjoZpCNcAyUXRuiYaBWzqyHuYwV",
  "key28": "4wkhCa65HSMi9HpoDpJ97GHCe7aJotAMwdJ2rCXQHihJ61q1as1wA4X9vskUrP98fbJD4ZXg3VEQ292zEJoKvYQL",
  "key29": "4wCxCTKbwtiaDPKnwHwmF9GdbRhV14LiHt2mTEUvxvGbzrgjWmKfanRqZRtd1Zx3k7jZx4sCRnupfPMPtUkkvsko",
  "key30": "rsCr4MRNBVz8TBNVrUccAMpjjq5REYVCVAgXmiSnmSPwPiv9yHQHiVQvp57EvNYXP6KYe3RnNcqbne62a2mqkFN",
  "key31": "4uF6StgaaWA1x6p4wwSr46CT8huodmZgHreqUxVEswPSZufumLPVhiNmFLwJsYkEgYotp4SQbtNFRZmQyE13StQA",
  "key32": "5yrKvU87AVLKtUGxczZtmwbaVGcZMCJMFPz9AwXS8evKXRpPs4z4mp3FLrKvaFz5q4XgrtVteqfaGPP1U6tP1HJ6",
  "key33": "3sdYGxia3G4CqRgkaiyagMqssZZU23mRE3bRvSw9KepiDUK4NLKCHPKE6AyjeHzqPB47JwTXUHWC93mq3DLiS648",
  "key34": "2hpPCpZoP1NTwbFhDuBZ3v1f4ehVT4ao9owNaxXXwPr6Pca1r3qPyjWGFDbDLXxaUhcSD4oXy6CKWwLoXc5st954",
  "key35": "2ih1qCqguDP8pDaiFU3zmhRbnbwDcZhTvHNnxgLMt4jZFaBZG3LrT4XxM6LyA8SrNsjuhX7Bgt6SGaGQwKY6dS5J"
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
