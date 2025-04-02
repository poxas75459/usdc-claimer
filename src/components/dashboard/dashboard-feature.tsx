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
    "2KAUogr1EA3Be9D9VWnonkURc4foiYhScRcSyA6uirnEhhtdAEaWhkV8J9VMQBpaQvTJBxsbuZ49fRQGdLmLWLgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NwPsAe9HpAXYk2i8QEjxEScRvPau5XHV3yPMjo9CuNh2qP2G14FLK96nEqohvg8sAkRhUhdM6c262fGjG1y5x7Z",
  "key1": "45DLwyrhrXwQ5nNm86BKFNh1DdvesdxFkYBM3xmH4ujWiCxaw37ZHhCjULsPvo77CGhxfuccPe2F7oJYFUK8hDVk",
  "key2": "4uyyC3urEErgEUhpvTPJ9weLX7b7WNbgxVD1baejKqTVHSFVAZ4E3YRGjs7qinFFRkfoLB3EambkoEprgemwNmC",
  "key3": "4twEvaCCk2NgEhGWN3wKTQtHyVHu13yQaKBeZZaHVWbcaZEgFipCDFfUWtwEC3XKkgpaYyEGf1QwufEVsTH34Afi",
  "key4": "rweLXpZuMZNJtUBJ7qLc3DKkw4vrTjUkQcEHRMWvpWeVWYmJVVMBvU7aGwBcPZkF5FWkJk74PScX62pn8PQ5FEY",
  "key5": "3etHPGQRKvBhzzGVFaxJRsNMnEVxZfcGdLLAQGXRKHatQwgU6TTkeZCT4gjAwDRZuWYLsekqPvMzaeRut9edWfFF",
  "key6": "3c1DC6cbY9NkZZNMHk95RcCRuVczCjc9FK2cio2SfaqVv2VgdX1VW74nSktPpRwmTZwxWyDDJ9ZvFebs9uA23Ljt",
  "key7": "4iaTpXkRJsaRuJpi85b6e33fFkZZrSfQue6CyhQYPmG6p2v6aspP7tPERcjqrLA4kbJdhkBAnKYGuB26TpVqMEap",
  "key8": "3ax7NUtpEQpk5PvtzR2QRwxK7G9m5oc1DwB3QeoKXKxCY2KxMBjL7XRFuCHc5GvUA3Eseow3t84pFpL4g5w1MTRJ",
  "key9": "4tzvfcUYGDgLEFYbpSnqvFMjH1SG6SoiwDyWeRPbqFiT143jJa5sCSRdQwXcUqeWSTiDSRuXH351NmSuenP248Zq",
  "key10": "21PQBN9pL14F25S7YkptuFX1GPrRXLhEVfWYbHNUg4chyjF3Rzz1P9isowYsD2EaTf7btsXkvDN8PjD7qsi58ejX",
  "key11": "UFzHz8FLdSQFPggErVN84LgFYmyTSvj3uAPNHPcqC7DSTtS6eSkMZG8L3r9mJwpMLGU9MpLEv38Jgfc5zD5NDCt",
  "key12": "BdmxkVbTKZY9ztaNTnwavtHqwbBnpJysQs4vPrEhwLQRWzL3mUBdYLFfgNXdSa5BfxyYZazzEodxW1gFe4QU7hM",
  "key13": "3MLB633kvs9CBewSuummGhCR2WotPAKUP8tbedrsbRDzFBbACrZ5ST6s5Dp9zjQYEuEn5PzNkZiqy3hkMsU1epqe",
  "key14": "2fR4gpq8SssLsaZwZNfs72Q2WVKj51rQ9tzhA8QTN7GqsXA7jLYHHDSdpBeJX69XMv5v2kjdh2jue4HNMeqtf1hy",
  "key15": "4uoihvazviCoZUKrctugxPaBo91vehKj3XomC8yNPKiJ6YdbjbVQ65ZmhWAFmeGGGBamM6wYaFaWZt6rFKPz2mha",
  "key16": "4WPbUvoyBVxdBD33bbY5GcASuNY9ZA1mwTZn67yMMw1RWuUuUiBkt7ux7koYyEEAQ41No6Ydh49vT8W737Qaxttr",
  "key17": "5ozdGDk9PcYofMmWY7Uwh3bfDmkkq1BrgzBvPSwg22RjCo9XmF5pLFrYoo9tKG1bZ4RgypC8dUkxX7SJ9FnN6eei",
  "key18": "J2qBNUZYBJPRMyN2dCxMrzzE29k1AtsCmRxdHfJFziNe7tN3F8iUxnbRSQ7iA8fPyndbF2JpiQyW3ttFWuhPErD",
  "key19": "3jwDJuX5aRUQkUfkE4ngakuP6WXfmULgPiqotisVikCV1xFox5WNrBDL8vWP5SFinBrBQLJbw8PMPdFxGypp7feV",
  "key20": "4bDkQq685if3XHdiyJqLDEPpYccRbxmFzAu2TAwe8QeR1D57HkWTbxG4gmboZWN31D9pvkr5ztchydDFWrKVwj6s",
  "key21": "2kmhwWLavfKa9fz4nG8MFpPFXeBG9fDnxqT2zEPbPtJGWh5qRHSaBgghK8ncqgRvks6m9SA11Xr1ZEtWbvvFqTBC",
  "key22": "s9g2HfziMXUa6nd9DoCdpVhvika3cWYdgTqH7H1nWGqMKvCNBqG8CVpoizWgAbYJBLb4m1742bgztpKew33aRxo",
  "key23": "HguStx1pnK39rGxtvFeFwUDtfehhwBBpTZUxGBfguAFStyQnkzM7cY9SishVtA2mYGN5JsbZihjZDG2xpih4y4Y",
  "key24": "58F8WHnZzMTskmUcqr1XqJjJQgYs8Bb4MZpZxHnyrG5osnHAxP6QGuPk6sAbd1KWqZxNxzZHZj1XSQWZuAfwN6sa",
  "key25": "4tvyBPPBF7ouWNSZtU69btcVowD8WSuwYwgGrttgmxqoqdsQNyWfQZn931zDZw3mPyzPzMaTKMqokFVWHXRfDt7r",
  "key26": "5pr1Sng7HHamRNBnxgz5joMUmN4SQHniN4wcw5XCFysQvzh1ZormY34nW32fpATavRModHPQUUtSERMxKg7LiYfj",
  "key27": "3icTTBqoEq4CcmzHzyYFm59Ym1d9Mjj3mMoyxXDS8bibNGaAC6PEGyVV2dwBSJJZ461u992vPycoLdGdLBsybCiS"
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
