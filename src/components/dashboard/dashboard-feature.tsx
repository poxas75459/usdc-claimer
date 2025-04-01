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
    "oc1UuKb2EZ8PdWYq8sWuPRJ66J822BXabc5L6vtXtuasp4suuJqHi9R7a7MWHpkYXcqxMfYr9FPH3LuPQ2x225h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sUi68V1o6uuQgcfzZFnepwkUMnwvCy3ZvN2R6RKFi5bC5LP38KaWFghrWHkBRQuVFLK1a74hkVeD9xZKWFRgXP",
  "key1": "5EdSYYH5prYjK6k8HgGueKoT3hBeW3uuM5nbnCaN3GpAACPGTZB9D6Qxw3Tnmb24rXTExQSw5tycmThDq1Nt4o7d",
  "key2": "2ZLZPb9jumSqZaHM6fYamSBaaF4toXvQifUQnisNfgKiGwWFf8P2NFbDPzqSACLAk7EjskDsiR89cjQAHu7XaujE",
  "key3": "2zjkQn3YyfAUTDDDpAcet6hGsz9Ws53VRSwW9ACEXFQZs18SvNhABRrVnq6AhUkeDwrKUKLjvoKS9vjeKg3GknuX",
  "key4": "5ZjhSk1AuqGdJdqYuKUpGv8eH8soxbBqk6YrLmkcM3AHf9ybqL8tkzeNPeTk1n8XNsJFmopVkssKBmzqZfBGrmoi",
  "key5": "26HV4KTALG69LRDSkVrajqBT3amQ5fQmY7rSnHWTHyLXby2r6d6wdcEu4ow93wyJprK8JGeHEY8BMXr7oos4ZELe",
  "key6": "3GrDRacwufZnzANkYtqWcoeAm4jmHbDYzrney9CiHS38SG7Lae5AzJETWTinnLmHFKWBLxaLWRHYk9FnV6ADo7dC",
  "key7": "4bvxfg7tdwsbgqhDfT55YJu7Anm1AUhKWzKySWrJbcmXgQ4D5u8fBpP3etxZfeyGy4f8jj19FcGNMY3tq75Lcvmu",
  "key8": "225SSoLg7nSkLZLnDnGHw2SvRQty3eRyLRzQy5TGZx56CujwBCQhAFFQXaYA8DebcVv4MvTK6KUEFm1Jsmsh86HY",
  "key9": "51xfFTXs9PSQNTHkJH93dxGtetXXmsHVKmH2PgU23Vgwg8npEk6NpdLwjgFaFS3KK5kQWMSguMfHp8w7XPsxoQuX",
  "key10": "5i2gyFRWqjPofbwkCkKgcTcJ7byskgxaTxsVEERs5KhRZF6jUvBV4UKebRTog1vjprwpdFoVSugfKRVsbLpxp3Hc",
  "key11": "2TyMA82PDerxuPL7gJVyEg1W6gGXebPRSfFmJ13YpjWvTvdvoCZHYxkAwHmaePGdigsiFMJ1MPsK6Lbkei8RTAE1",
  "key12": "Lq41bavsGsLQiptvKQTWZpGhhwmrmFmx4wKv5CQZcM9rzRXjYJzbdui1JHTJDJkMDaSa7Mm4R8N69Yzudukmk7R",
  "key13": "2ukdL5PFunW5kSLZyoUojanRjCLtjTFnhek6NYJCU6eRR6GviBVG6qju48jatw4h7yvPiPL5seAnYphVrg12MnPy",
  "key14": "mdAPonQRT8TVW5hTAM9B2nCXDkTtvKP4UuLBkr4tYQSUW4zo1pCEDChNh8f4pSUeFqcY9ZEtL2TRZiaai5mjWcu",
  "key15": "bu592xnW3T9SEpx5U3q2z2mehWEko7nWzgtJzhjWsybjVstyxZawheaNn6xJJ7QBNiDAGYrwLVQEe3bdvxUFgVA",
  "key16": "5ZRWJixnsqDK249szx6QRYYKK85s3XULEf65jHWP1TvAXX964kAsakTpX6YvRJtQbSs7adRydEyjjmvRvseBkH1J",
  "key17": "4GwvhYkjTHVW3NAAkw4aqUWoHpGQEsHjpVgAr3fjWR5tfVx6G6B1cFMUPUbuwwEyaDmySHjzEaMe2u8UxERRTD6Q",
  "key18": "4ge9PKNnpgpXN3ni9HitCFseGJzfmv1K1mssDqAxYT6Q7H7wmuuSb9SF5EmM7hNq6c3XUtwH2ApkCAia3keuEU6x",
  "key19": "4xfRtMmjEL3ZnL7rNqRNMaARaASGEjby1tPobrTsG5SV5MkTcCHcS9s2wirR3HfooDkhKi9kaVxg5szVZo3QcV8a",
  "key20": "5KKmchFqff4KXXGxEKAQenECSUquYixVTLQb1b2D9AwgubKfHEEDbNRaDoP96S5A5PujWSEZNWZCqm4w2vcde8oq",
  "key21": "3ha1okuseiJzeBYcDDK2vgTuan1zsYQwVev5gmsz1JC42UqoC8a29LoJY5Uic9TcCFiA1Ho3Gmi1KkrXyTvDPY4V",
  "key22": "5AVMMJLpKdGABYSvyrfN8aTLAX9bneeBHFdC3bp1gLFv4Fa3GXBWqJrGj1dp3mX2TStdi9jwFwPhsKZC4BHbsuSH",
  "key23": "rXCiTm93EkPv7EGtAsYgTpQQtbGzgn6iLQypSu5a49Ea3ssmWi5ocPf7xsSF9rDL6DB2tHCEKvRvhGS2DMiB9Hm",
  "key24": "5fnsW9AGCVFUcQAjDtUyEtpPifXuh3iHw2hUjnqJ8JbaUy83miD1ArQAJxvYKUqA2eDrjWuahshJGdbNKTubqtaC",
  "key25": "3dNvyN3Ayu8231ry1jh9hfxyoEygYYTiZEwUGgiYjWQorQ1mSVVUQYEEdVxYoGPBZ9Aj2RW7UaYjMYezciJUGYeG",
  "key26": "3yBJqeAzzrU9BKyaj57jBPCvghW4FR5QAdsJqXrZUftSFWHreRJ6dh8x33YeZV4TW4KrPSX4F4gRcEPGFoQ6TJx6",
  "key27": "51Aj4KTxmKEaqrn1XqqnMoojc4b8pwrVPVq1by2yTcQxkp7EVfkSSkTiumoE8Xdh2zmrBGae4xjiK1Yd3Yz7W7Uy",
  "key28": "43U4Db7o8wDQkYreVK8H8hkmwXGPTdUAedKTYFiWpBrqgfD2Cg42hrTf7nyrbtNFZY4JYguwTcRFYMvZdUT5D8wn"
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
