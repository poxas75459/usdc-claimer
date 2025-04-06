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
    "4qt9MQYxXNTHU5pvfAVo1FLd8kw4MjCyZwwk2bV3Qovr3QprHcsUgfekWn93PCy9mVTYdZSufomMXWcfV2bX48hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52zPDxs2dK1EhMnd9j2A46uaV7USJjnspzjJgdeMxsPrxxk6zdsK8m2sh91mrFNQPsEUZEMnvhktB1NNuMFJ5fD3",
  "key1": "5FmM32kYWnbwSB4tQH7QsGFgGHyieMqn9RY34JNaBENEjDeoZmiVYBrjy8ScLEiJG9M5ViwSBciMCFq7pm6D65fQ",
  "key2": "3BLfTntF2aTPi2aMVACp6m5dvK7smVpvaJd7VqUeuPYUNYYJV1WDPQUtY6eZY246SNAjV8ZuPjzEKfNR2q4puEQp",
  "key3": "4AXMpTpLxz8GmfvgTNCaJgmZQ9fGA2p5uAgZDf8N4KSgFQzbnM3kETb1f5CSZ8ro8sdQ8ueFmXsivZGWmvoezZbW",
  "key4": "VV7r2g8H4a1vCpHLHrr8oHnCEzMaY8GR8HCQa1spwHqwfSbgN2e4stLtjHavnkeieFX1C74FffcHwHadzM4xfy4",
  "key5": "5Veth9BZhpgcgYprtkszSZXud3Dad5rcpeBgezgEgSAoKpStXGAPrAcnTw4eAVxKoqaWdSLjgma4VjKrdEpeCqCg",
  "key6": "5uBqZCgjGc11UFma9dL4WxWwfw6ShMXhbbCxWKR3LLi7V545LJTisnGGkhB3XzFAojUDQrzRXx8DkJDZqhUd8gsN",
  "key7": "4gzU7tdMLRAyo2FXj4zv38wAA1dhCwR4osTaxyKzGdtLc5F2hoei946FcyfFfAQamTD32XHQnUZZ8XcYquSYqeSn",
  "key8": "4oSwBb7wEKtSy2YXRjkcKnbzcNTBNL1bHXHT8V1LQhKSMwCdWd8P1XzSQHgWxHBnxs8pkiuaHS9guQLRBbZT3VPw",
  "key9": "5PJSGqbZdi9RJKGdB2X1YPqRKej8DgiokL4jzCN2h3bM2mbsJ2iZzVMRbACxNbwF4gtLN6jjiu26hP8L3DwJyMAN",
  "key10": "5snuUX3uB6t2fghr2sfgS8uYoSAqn4uPLayeXQNGPGrRmb5JRwFeLEJ9ya745xsgdfu7EB1oVThkVZsQTY73SDZS",
  "key11": "2K7uWHBwxGoc6sXpVMxHJmz4R8Keh4Av1qXDd9aSrBCFjEu1mfG8yCD2QEeYLNZcviD347EyjWrPNRTfgLnNQQ36",
  "key12": "4cduFd6BsuwndmVnf8mvBndUWTPJ46tEv7AXSJJhVJSyxXijEcVXmYShNm5jhmMF9oGNRahjP8kRHkzbwDuJTis7",
  "key13": "3juoNLmDgrBymM4YkSamKVVYrrhJtwVXmRFCjbvsLku1sytGgJ1SE4coJRqXYJn32YwFpufGwEpYC7pUw5Q4QWTB",
  "key14": "4SmuD9ed1sB6rBEp5QzhSkk8vdWDWp5tFjhKSs8Xz98ma9srbqzPvEMf4E1CY83C8iCrdrxgmdnYtGGJVs85TxQP",
  "key15": "3tVz8jjCAP78oL8kwYwVLgLetZq6ttN1UuqMxMWw1aQYiNdimEkCkZaUJE8VDccabVmzcchG3EZR7iRFwJBhjCtZ",
  "key16": "ouk79JAxYGdt6fQrAFxYPMtuzCVBKoACp1Yxtx2VvaeT2pLLMmpVj3y3w7Wxmt3WtEvCqR6XhpU7jbSPaHSjFk6",
  "key17": "LmkqhPdf26yBfajPdo7aRTsMfL8cY6NAozWSAgC1GPY3kpyGFBvvCGQcsUMt2NXSi6GGmMhaPZKCPh1SGFbqeR9",
  "key18": "55YhSLEmLa6aY6Efm7oPVxhqtHAv7kjuYpLund39rqiimqZ6aA1LvcppdafK7uUx9VdLtZquKX3848dDjvNG7T89",
  "key19": "KNyupi7RgsHEx5WgcpCZcEnP96djTjDwrEMap67EoXms2tKkGzDcVY7gHA9DE6RAvJWrWdg5rZB8153auTGz5ig",
  "key20": "5K1mtFKVzsbpwX68oHv2gmzEacLZxgdh2uoWrx2R5SuxTtWsTg18ZZpn5Hk7oxiFFsqMTXZpn9EiqLMwHjzh2dKw",
  "key21": "3HKqV6oYQMb98fJwLk19NoAzJexjG1ZFC49HbF4uJBvxwqvdnUK9rDkuyhe6efsWMikFYsCACKeQDYMM2hkZeVT2",
  "key22": "4MGgJX84KMik7jhF8oaFdNu2QnFw7toxRPYoHvmvhBrSH1zVYnHszJN1mg126jYodkYipYDFCnnw94MMqWdtkpZC",
  "key23": "2ST7fN6qA78bL4bvQXwgtJDWC7z8VjNYg8yybYcExeyFBfY3AYivqMxNuvmJhpFraGB6GGnQB2YnfdU6G3gzmNx6",
  "key24": "bu4VKU8gpxJWJdoeaThvUJzfZ26Zb1WLWZWxft7UpT2SxHTktEceY46CoR57JCryrSVNDp5rkd4MoptPMK4neTs",
  "key25": "2fgfSV4UBLmRnbuYChh9iGFEcwfn1KmYg4w6TZ6Pau4TGwRRuSD7MXzauunif2DGca1RfDS5Uaam9uNandcfGqHF",
  "key26": "2bDNApFZ4akeTBpub218jbWPhw2RpxotKBhL3DCrYtaTWmzgvbUJSDpaq4JDChPcs1osgtxubc2W2jRyxXQUYEjK",
  "key27": "2pzZEihy9EKXLJkRpASmDmQHtUHD6XJwZiKBmkduVVV6oun5SJbK2ESuDWV8QU1K9EAamRYcbeNG21A318fVGnsH",
  "key28": "2koPb4esdpEbJ2KbPnbpmGGr67Lv1MpS2dptDCZuz3cywg99X8HR1qWam95n1pvsM8yeyu5CAygPBbfYRFXbASgd",
  "key29": "5skYukHwrf5WxLGS5d2sh7fsncj2wcLNfGSUo1tdvfu5umZnhtCD9jtqhp2LzHP6rkc3NZ1rokf9JLxNhVpZjyXk",
  "key30": "5wFEQPxrmc2r76CCqX26Q4W1jC7Vx6CJbBZS2t18foRbAXbeWVpE9N4T3DL69cgiWE8KTow6pBDwrwCw2z4KLKiU",
  "key31": "G85rwYo7WbRoXYJGAcewVH28XSPC4pvX9t65zHq5kS1yw2wNS3tH3eKZKQtR63CCxNebzWnmFx1C5u8qq112Gw4",
  "key32": "2DvqWqdnQ4Nt6PS8SsmgtcNneWG1wip4GzBXyWHR3H87XaVymTp57burxExsaWLuyVbgAuy4fniuGwRovPcgeYeU",
  "key33": "4Yz7oukhugqQ9ZN49bfCco7p6iyuxrQSc2em4vto4nih2o4fkKrvujbnwchnyGYUjY9nxgLvXRWA1p1fKk5vsGFT",
  "key34": "4P56DFu9dPeMqPEwARAkLUH1QvoPhdBEAekQQpCYHDiBi2Udeq49iqQReVhWsmbZmbq59NJyzz9JFnpNeT8J7LT5",
  "key35": "Cwf1ruQMoEtdL3v59NzU3mSGBAohnPtcavbD5bw1FNvsRSZgdriowQsZayrGdYFt87jZV3UEHTFRwE2kaE4zxzg",
  "key36": "ssaoHq5yuWUmSV5DuGJfJc6WEhumnx5fTC6JzHDE3gr7AHC6aUwn5esE5D8NyNCWiTRDoW11kNJKKnvoBHwT3SL"
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
