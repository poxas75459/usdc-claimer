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
    "5dwJRZq2FLyrbCZynB2SRQmvWwdDuNJfHYB91KjL83qGUjSST2ahmApRa2jskHqwMVJ52x26ZXr2aXZYLBKKbcd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VEfg16Hu2Ad5WoCYJiKXKoaFGdrro7AJjbHjd8YnUs2jSHpLwv6H1RG1yQLTuZqM8uwg57ZHzEyMi84T42T4DyX",
  "key1": "25hZKVuQMWBqQQjNUov1jhFjiCuQbEjKbaEFAMoWaDhwNSMaqewAXpLfMiHtYJ8bzX6foCLC6ZP5UM6tBqFbGyUk",
  "key2": "UZejdq2RiP5kutsB1YHQhK4Asbqf9a7NFC7mZDiWALrbTq41AF44mArdVSWRfYjse783NcsrfeQuHn7fUe33LmE",
  "key3": "2kK3X9GSEwDb59v6Hh2bnyPf22hepX15THNyQ2JMSqUqmHZHmrxWzvMXHe7pCWhc3LhY3C28KZtGEtPTAFje7pyY",
  "key4": "556vxet4Y8KmNbTj5oh3hm5qVqszMpWDU2bYt5oNqT1ZPaj2EKahZn94fSRbe9nEKPhPNKRPkE6GmYctH7fhFkPE",
  "key5": "3VMPgzPcvZXLS4TbpcabjNh4xiRX1xiEo7acmeVahkWKBNifREG6PTkS2cGswf7kD5Xr5eRxGAruax55LbGp8pYr",
  "key6": "aHJ9ginFTm1jwBZZF4xV8Wi582fCaU9vVgseqGDMvt877FEju54gqmcYeAHg7vDSSp28EeL6TEQ2Uj12f1gaqPL",
  "key7": "4V376a4m2bVczQdZHh3idZTCp22rSrSKVmR6nW94fNDeHTutU8p2hPWynDWzisb63LAUJv8pkeedXeWEvp2U3TmX",
  "key8": "4uN8jjhRmqpXiMbPonikT26maQzYpBPo4P7Ygp96RjNTVD6EPsPqcLrDh9ifmLbJmumhYkoGg4Ea2rRoSy1q9byY",
  "key9": "4H6sFcZDppfKM55AgT56jJktkP7z9g7fzxg8AqqHRdZ161NqokaQU9rGnCcWNWokF4X4zH8NFUnyR6Hw93phikUY",
  "key10": "g6Ebi97svt3sNJGPseEHHDo1PNVnBbFJub1Up9H4Vrz9dp9T7g8B6TYSnpt5UotC4fKQ7WcBb834ERrkhTzHfaH",
  "key11": "43YzGeydcVEP8q9mdTrLrd7wBTJ9SfgYgZg5KkFwTFWh7dz3DDHzRpXK1tCcmCmwHUPQuWusN4cBeuFemSUigxhn",
  "key12": "67cWnKyRkHCiBU572iVwSCSMcTVYwWd1imtQaXA1qA4ENzCEJ7utzbdqf2mA2GVxg4EZN9B1jYqENF4wo1Nx1hEo",
  "key13": "55viMvCUhoTy7Y6qH9o3XKYBDAoj2UZKzDoGN2cGgVmo2Fmnfe6qxgHoE22K9jfTbgW3htMQeTcu9nXjfjczuksa",
  "key14": "3bjCaQJVofiD1U5nnnMaBy6o78MnSFdTLstR8idpLE8un5aXD3byh2K8dQZbBHv8t2kRLqqLFE1QS3jDLkEZCrik",
  "key15": "5sHLNyYGwESHXFGAcUiGd6dQXH6dabKaQtUTaadW2MrKN53srHfgMiA92gCgwtFzqcZL6RgiUW99hhGWRUg5awZ9",
  "key16": "5659cQcKCSDC7vjijfCsJ2iuJGMbz6Qfap69n3UTPhg3vLp3xDaYgQ6HvQqLFodNwmREunCWfV11L6ABgwPEuL9M",
  "key17": "318hqU2i2ZNZ9HCmquuN4TcuEsjhBxvvdLvD6uZFd2aLdFeD1Wh7QYt79FRfSfRzYuL77iFtmborUhQuZKmmnZnY",
  "key18": "5a7mvNRq2AhrJf8MQXdvDoPKjbh2QDHAsAgmWmp4gcp9Uc8USdxSwiLZTbwc7rEfJ27jQZ1sXL9TUCirzSWCmcdj",
  "key19": "5AefNkRBbdDXkqKjVwrogWdFn5rNJ5M3GNipBjiWxrrmJQKbpdrqqgtbhgtAddxkahYvtA2dECEVUrCPw2feu2hG",
  "key20": "GJyzKnG9cG1GYknqbLPRvd3L5x4QWrke2aJd9p6YhjHAVQjJsPpdPESZUBTn6R7TUpgHHCPzbMn7k4gX3xsv7y4",
  "key21": "4vjxwtHUsxeNeKpTPUPAp4tjiJ8ftWgkSWSqzB7zZdtnRJjn3hUcs5j4Ph6nw48paVakLhs8g4BVbYwmai1utT3q",
  "key22": "2JydxK6H7YttnSwf9GgnVJcLPikPgo3rfFon2Qm4SfDne4SCVP2LdWZNgJrvMVbeCm6MjhHRgfPVAaDrGV3VLiu2",
  "key23": "48DhCkS7iMpUiwRKiM3QpQmPrijGbJpyHDfgUkJZwuPd6yqDc1RJXCYyyu89kPRxpULPFRuNxn9hYLuujAZC9j1q",
  "key24": "61V9mv6LP6ZUWHrKFzMSStxPjiQYzjGQ6tBsQfKG1XwdLAdVryGuVhmkbyoFXbLe5kiNZohKf3fQuhzerAkyRjEF",
  "key25": "7kjcCj8y2Zbbj8oJsKSyrM7yM5jcsTj9m7BvNb3zMpqrDCCb57VrYiF3xa9W5BArA7tCsupu2eAZNwDypixcEBK"
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
