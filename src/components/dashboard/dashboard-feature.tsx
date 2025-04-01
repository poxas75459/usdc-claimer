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
    "3gZ581Qmi1gTXB8Yxc9ZVZxCBUP9auLM4yQqy6HVHhKUVpiHWpBkjp9pfu8Xzbo98eS71gLsoqbNVi7DUPsXebYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MxAfAmh4BupWTXtRmMZPusZ21DdQxi8pDiBAcJNGKBwpU8DQMXnyPn1vWkm5XXC5pcS9L58dKG9MRCwAFuGu5jd",
  "key1": "2T965b8g3oGeywxEZRUiWztJEDyazkYKKLeXiJgLeAQyYVLK8CNFpm16Wa4LuFsQz8ss8rnATwPi8zBrYnshmE7R",
  "key2": "3LnMVHbMaDzoSr4dZhTPSbiaVQVVvwttDhxBoXfGAvbDutTa3zUfjdYXWqdmcFWcyqHoPX1U5mbaRCHenfmRFnkM",
  "key3": "2UFEpXqhDCUChNrUuXCopKWuaCSyDxM2iXF9tQdxxmWahXsBHjK3Tfz1nELEyCSNVrhGM4U5JVAmoCPXgghYnU2J",
  "key4": "5SKzUcvCBNo6gJ13bDQnzjcRBvz9uDP6W4kVRNu1v3D1nCBKJ2xE435BbEJkgomKRL29tghvVvmYNoCx55Lo6yST",
  "key5": "rYWQFjj93cQDgmR36nAVWQL8qswNXMZDokTxhQpnYdXMpXzYk1yrxKumUBiTjFrbHSsyPaDXX1TNGRoy8UK9Yfd",
  "key6": "3BTx3pCMCSbkqZ8955jGsrP6eySbp8L9akxVRJtUrMjrMJpXxLf3NxRDB8j6rJF7RrftbYPdKzPP7E3UYbDxcqxa",
  "key7": "46ZuYLjDuxLfsJuTHDja9NguVJLUYenBSSYX7sPoFpkfRHpnHzeNomsSKAKyiiHjvQmdCpMLMigLZ6EMToiiKAyX",
  "key8": "4jfDopV3x3JnSG1UxfrGZxaQk1VUWAQxMatR9SLoJsJgz4g4CsSiqa2hZooE6xmSrxUJ5tEtHmrxPRgpmk1F6suj",
  "key9": "2SmEBB4MNWnP3H59uDRPuDE5HgArN2VxvWxF5Y9XwUEspq11x45j4PEKrko4bMoffNyrcAGSko1GUpfiPYQHtNZx",
  "key10": "4ujU1QhFft1Pw5LNShRhaGRotcvxjbnhBJGYgTrdDJYkF6B8cLKVRoAViZ2SrU4hhzKj81SPzMfSGQbGiK3QBZR9",
  "key11": "6155TYJKHW4FaaSxCLAX7URbxgo9zr2pjX4FH4asBkbss9WqanHT1FKRQuXT4QR8odujrfbJKx9YUnKZZeryHhQJ",
  "key12": "4vQYgMEGe4GpU1JNAP8cRQRqYmb9rmoFQkgoMFfnrAerCJDyVo9ZUsQhHZJ2FV7VXmHpt8o66vgegrmqvg55YSn9",
  "key13": "5oL49Y6vCE8t7V8bGm9xtpBPoXucV4r5w7tzrjv3kxByL8dH8B2115JN8vhDZ4aTAnondgHHE9Kb8QktGQTdzPi6",
  "key14": "3FAwn9KQqFcPtgRi7Qx6qpWAMFE5PELc91TuKychgXxWPKmxUpNU54T8RwdHtPSSnQ29zGC6B1WdHuoVno31sfBu",
  "key15": "AfRVA2j3jnBtr9AL86Lo8YNtaFHLXzYhvbk7efTseySkhsWY1z48Hp3E5Y6cL5hibZwAtc1g3xeBgTuTvAnBh6D",
  "key16": "41d7TSA6kXTgubAPX1uVdwT6imFEHF2Gs6noK9cpBCt7XH68Uwujm5uRxjUdTHWQSV9jcKaC35kwPQBxzvokm3ML",
  "key17": "yADsBNY9gvGeYt4QzMyG9DLobL9uJTMk7USih6k7PeL1GiREtaVWaAmzAMCWsbixQLnUNsRd9uwHsTya8dP9qrQ",
  "key18": "2dXXETMcvJVDfXqSV5U5oVNtQNV75rFq7yypJiY7PrvFVUP8vDBxdrmFE9o3ifLa5BrWd3EED11MKihRe6qmRcf7",
  "key19": "5cTDV5JCJiVnnRDnxEMdZsYo1oBMsGRoYFp4EHEt7z5Qe1U3AhHKXQxhdYRUSwvW3MTsykGN1ggZujnDHC6ybEH5",
  "key20": "582A6u5XJJXtUUxsm5a4fvRdJzUhvhBbvCJamCAqpN1RJfbwjwuiH4kdf6TGkXsUXsSxFavfZ6vhgTLDRva5fdZF",
  "key21": "4fUY7cjExV6Ujh3QVZVgwiob3Zm5AV5apQqQS72UnyqLr2bHWsvunob2cpaM2A9gfs3ncmNk58xGDxjFxRqbJYEE",
  "key22": "46BjRZJx5GFzyT5BR5hK1oXnbjR75vCTb7jWeDF8uLqGuUsD85etiL6G7nzkYb5WxjSDKTEEkzTf44VuJVgkegvi",
  "key23": "2huJZRdfBXmnLUPkgWhQr2iD9caqEQu7i94Gvq2o8AuV72RqpBzL5xwPXHvs8tq763fisfaLt3NWtk7VLGQHXPP9",
  "key24": "FEscvJjDPP615R3acmjQH6hYXfi2u33yWSjeB2mF9WDUgtsb3UKh2LEK7ofs2ra7fJCi2pgfFvNL1ndRttmtDuF",
  "key25": "yNvbFDouxhMr9kEQ8G7jQJUDj4UoBnX9FDdLZQYVAFNurzNGRb8D5fYQiv4i3A8wF36kFDtCKZ259za5JpMABbf",
  "key26": "2w78pVuHdjBWhgPk4oFADf4oQoAK5gmAugnBy2tURspZxTvL2H3MjvUVQEyuhhT5UHXpkKBymQ1h5qtf3m7bX6FK"
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
