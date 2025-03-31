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
    "Gb9xG2WDco2NKXYD9kqp4d2GCFmdYc1FwzEKRz3kYKu2TxgLnBRkem4CuCh7EUTeJFUcScMhV1wEywUwYVih9TM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24GycEcQh41W6r6yvv1NMQ9EjC8njBY6JUMP4hCJ9RDUwGMoSt4UgbqQKQkmDaGkwtcSk8869r4UwtYdbtMtU4ki",
  "key1": "2UXoQGYneCLRgTf5rXVUPAeZV7f1ZsiVftGVi7UYvWWvikUEUDkNxXhayVDixPhg1jHgQ1smd9pHsnYFxddXy1VY",
  "key2": "amB5sv6odjtxooSCmNLsoS7m62XHfjyswvEgKvew2vo59FHoxQfwN5g8kns8X5GXpNPNxdogTxgqXsQKEF2YJ5e",
  "key3": "5oBBTybydE9HnWwj31Q5sxQ8VfaohcFVRGTRcQnVQV5hQWLi4EGg17qhZUX1aLHgvk6RtkAEY7QYZqDMKHm9toEc",
  "key4": "wS8aSQcrYKrifcEgVTcGpMsGB7X6eCwWGitGdCzqFVyVDHZt271kp2zQW8C7YwRtiZYuwJ4tK2XQdByiKxLw3SJ",
  "key5": "5iCq1JBU2qcaNC825C27WQQPtv4Hgn3ERdQPdt6U1xsKeLvCSGRLNYywXuH6DwfhVCNgWg6sB7wZssodzkW2qG2k",
  "key6": "5n1Q757FdZYqp1n6zQKwaHw2dskkCJs7XztVZeWvPDQWp8UCYFeXy3U7hNaBp3eTR1tJy37ZzJGN2D26NCShRAts",
  "key7": "49sQKMPtTFiLSFkXWQVgmR6MxPiXUP1FoUWiJohMzafF2LHqyYYtDWqy21z2SLgsPptm2eiJ1Cmy5Q95dYS2r41f",
  "key8": "4mhGzi3JB7x1LWzQjmvVUzBujNd16HfRy4v6Ans2fTTyXow3y7zwLCQTpv2Lh29MgXukA66sCLU4h2fFKkHuPpep",
  "key9": "4r8pPnjZoZ2Dz3XJZiDvcn1UK9VW48yJYYd51hrbyC4Kk4vuHw6uSFAXw6p6kqcteSbdsNm8he14aqNwbMXxXwF7",
  "key10": "21vesNxBGnytCZahdpDkANTupWPc6MTsyfH7mbuY46RrRnWhrktsGh8mSFVBe8xb4uj1kxUtPVBPBVuzDWoya8zP",
  "key11": "4oxkEPNpJqHDBQxw3716rHgPpA9CC4ZBPgEnnwrzJSn53EshyQjcMVjqq8x7cpPRkA2d8xVUhqwKhduBk8NBWPfb",
  "key12": "FC75vzG7VuF8AwG3Wmj4B6669vuvkmpug4NS5S5BDL7LLmuQqg1zAfwSNhY7Y83SPLxz4bdWiTtd9x7hFrxX7fe",
  "key13": "3XYhWoZ77r32DZni9brWtUtNeYBwNHyBMXtjLJHgM7kZ6c35HNyuinzqTNVV31tQmAhmjkyXk62yznDiQXSJrhMn",
  "key14": "63nynfhjKE3jqPdHywToo52t5eZb644rNg3DEcsg2uHiN7T1heAiBqzWgqdyT4cNoLdpQpQkzhi9DyUi5zqCu7Fq",
  "key15": "3AnvKfuk848W3m38daqCTcDUfdc4u8RfvzT2SkkPoLLYmjDjF3tPzzsikmVKCNcpomVzvy2Cz2bNAexhA6n6juNb",
  "key16": "2E3XmtWazGreU8ucPxYp5KAGY4bWxtpM2B1AJ8WAuV4U5aNbgDxdB5CoJoJgMhTYUcgNZrfnFW5jikCstPHQp8Uk",
  "key17": "4mKJ992wv1p2vvkUxL71aiy8KTuEDonD5voTqMzo3DC9NrhitdUQoPgdhnFNMd2cE9FKZc5z61atSk19b25pNBaR",
  "key18": "2Ry9RUJ3bHjHaw4DKWmYatWuGiobvxtu8cjbgjcubcWqtHq6oukY1mdMD3i6quMiMCkpdsYPWT5Ty1Sn4cAUEE5K",
  "key19": "4FEkQCtk8AsS67kNNCsuZp3LYrxBkX5j6FM1a5oWECRWTg6EQ6Du8EczTxvFicqDzotjJf1nUZxNh91Y3BMX4GYq",
  "key20": "4LRA4EiYarpZqtDsxkgojtJShHJtwqGf4YDDwGwG5KBJHRo8buXBffkEF7RjSD3nTZ1LKAEeaymn84zPCAiDY9oX",
  "key21": "2MMpWyc91iqtpkB1Af1tiit5xh7A6yQMi1cVuEscTRK1F4FG5PoagNKBapG3i3fxUyiimRkS3HJHzaPgStFbW1o5",
  "key22": "zFFeozRwngDmWGgjZWHCsoz1bLFZpTmX7eznQ9VU3wGRT9iV13Xr3yXqqFNmLb2HsCsNyzixW1L8djWrG8eU5m9",
  "key23": "236ki1fn9saXNaf5E5V61jRfpLQ7motKXZeLVv5mBoS6ThTjxZfk4buK8rstrTtf815VveF9jHqH2o9oJTgGdW3d",
  "key24": "sHGxNuMLwLLWp63FPG7zC1dLeWpEYHtHKA69jFywRBvmH6APMfX7RKQZdvyoc4GtrWt5gcyJmrSgiastFQndM9W",
  "key25": "3dzTwiMtymzaXyARVRgEjiRnkhpDpBN78DDQutEdfpCTEvd8LDp9vhmC75XtaEuBxnzphQLpL2YNaWTWefxT5YFw"
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
