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
    "2JouLc7aW8AZCAFeUC4UutYJFBaxnPBXsfnkanqPbypgAp6EqyBtNsEmzxWPKEfuHVvrY6GaMdEkUgWE7qaE1LS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MAkZjFqYGdt5PYSWAKDL1raVgQNyYGbC7vSz5eTSue9kvn9sNvXbDNeZ1PhDPoxvU6VovqQfrKFTSj7NqtneLqo",
  "key1": "4PfCYv7nbivckEszPn6oU97m9yCUvRHpugxgpPzLPb3TLdCkFyGDu2y4xa767eXaPaAYBnogqttHrkv8XXdnHeP4",
  "key2": "5aZwWwWe6uYCYLzF9qraLPkbFJAS6DLGgpz7i4PyqJnxWBtEApyFgjDfo8UzzmyhUwWLMfPEvxdwLF8JhwBs7gjJ",
  "key3": "429EkRTBabwhoWgrZGWmPFTXPSmhdMbHHNsjqKvwH5eKXHiXRSjaPhJ8Hp1yQWNxJyft7ekGLJGtgSh8WH4xYMQQ",
  "key4": "ryEk4su3Bx55vEtPBKFQ7CrTADWQxj6ZNTm4ySC2f1LaFunaH6uz3FMLW4biQgNYNWYPeCvTGf1ynDCuDEHgtnp",
  "key5": "4yXHGrQXuNyL3hmZXTN4Zt483oppynAXEPc61nwiyLcvCGjAFKnxcceoDEwzC4GEKbXXPb3rKrRVdCU7S5jEGrfE",
  "key6": "5DFmhUtaYA1F5YLzjXAqTgFSyhSqoV5bReb1SqzLTkPnUBUPi32MMetasF1E43Xz9obCxWGsCPeHDvxe8BhGhRLw",
  "key7": "4egRrgE19UpLaPmJg7t7ycBKCxmCWQd8HbJg5UdeKDyCRPhggiFb413omC2wLNZm26cQfHcnuQ8wB2Y3mWCHjZ44",
  "key8": "23PQri8WXTDGAJHg6X7jhtjVoaALGZRbuqex9GycukVv5k8s946dhMuiLXg27MyJMT5SaFF6eDv98SP43ugj432F",
  "key9": "2UHCsHxjirYJwbqhd47mRLjzWyVCCkQy6JuP9hVCJiCHoBrLpF5KSdWSFAd9rHnE2YruMoY2pVuEzABraffRAQCH",
  "key10": "5ryoZHqaY6sb8J35gMsvw5eqK4CuntYNm44dJzLv3srxx7V5XFXh6bSz9ZrBVqSscQL8GiQhaAVAjCSTYgWA1o8c",
  "key11": "4WUfyZhjRxrXynsdFbwSQUYVTAk9gYn7bgojm4vbCSguUdDW2QdYuH11wxCGoY4tWwc6QZo5auoBHwoTNvT28SqP",
  "key12": "4B2yf7PeafrztnTbLzMr4ZqK1wDjC9zKXFnh55LPvCZd3oQT75ZXSPa1fLjtBL1KBhMKPbHsU7Vkvq3oSHc8KV1V",
  "key13": "67kjqqoxFK6Tv9E2Wci5yzqdayGAoSU4PBaMrYpufsfKfQSTS5FqE8fR4vMfMCezSBY9S1wYgRK8wCqP5hT239z5",
  "key14": "5UBPhF7bWMydgt619C8TAftAkw9W89ighTacJTPmkwCxKD9RKTMapRC5RRCfcfSW1zsjTeUnFJH3MGWRtwy8mPZj",
  "key15": "4aRhVEjnXEZ6se29gPqgwbGi5tsFUxx4rhb8yjMEEuHmdpw9m54RPcwAsGGXEQTHBnffdiWBKxQr8SmmtdsUs77g",
  "key16": "48v75QWfjG9bGd6bAdvZgwXFeYaKojw8D7ycGD8wC3NENpVXHrNP4twzQetpKHPnMvVFhN3NfSJPvYZbbPRsaieH",
  "key17": "Kv3DcCVneJJ5qgsSXM3HXkoN8jBmGdtre5nQJyQX3CMPSdQvDAt8crjVD9Gz9A2ohLkmghsCT1pEspiceucQkVe",
  "key18": "4qDcPPrmyRaxr6qPLRQiuxS2u1um96rjLKnop5t7Pgh4GTPNb83PXPVZ1BjFMn68M9bKWjzjRbT167HKpNBUiQp1",
  "key19": "55m58f3Tfi87H5Es8kgUPSEoRR6gjg8khw5W3F3a9jXD7MCqywGBtPhk7i4AvWBdyQ3Zi4QkTuh6Xdq13aCSuvpc",
  "key20": "WydxCb78DRtW41QRn3G4ye6BMvFUVqQKKq9mXskJUURuwGo89ht9G7hoWWbAvbLuMznA2bTWaQV6RZ4knZLA7wi",
  "key21": "2XbHqZb4V6UKQbigsT3bJsGEYsuKvBaeTdKtPwztJYmvZxYExGDVxBVp3kkPhxJCrQGE8JnT6FT9uBT32HeW2bAD",
  "key22": "YNSeHkvEMzHwz3teuYrNrPGLWo8sw2EJxxGVGQDk5AQWSRwN9SYhPw61ZDASKoS6SCnP8g3ZRH8HLeEPwYAbD1d",
  "key23": "3yDcgRkD3PX1x9n6EKKq78UNuuicL5esG1rLSYudcQdcK1k8J2TGz6ekmhuBS1cVbYJ8uXt553gbyhzitsuACt2b",
  "key24": "5YeRQ4gsMv3AJoogCxxn2f4TceY1zE1NvHtZiDaoGyEK9VZsdtZTWhdw5BquR1J2BjGZ9oAmsTtXWdGeSMQKWcf2"
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
