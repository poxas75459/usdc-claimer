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
    "4eJFUHAqjJn7bBa9nMMHZfP8YTgXAk22w4UeGuFSzvCDvMWeGcg3jSJhUDqfRJ8DfvVmFZXEuQAgnJRxgFboMbUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g5nDrA33fK8jX2jxyQAU6SQ1VdTSpWwVaJwfGrfLNVCSJ1Xk2Z3NqGp6qHwPoD99zhyEvMNcjDfeFF5gVyNEoo1",
  "key1": "XG4YGNhEe6foPW1DE1z9tHhjD345YNNqve271eV4sF8nDGA2xk236mx4YvNV1DukQduPjjtPLntUs9zBqZ2jniy",
  "key2": "296oky2qzSSBkguPZ9RJv6SKnN3czacqRfiqWK4fVLPsrmhTsnsSDUWfAD6p3yKmdifRkZoEWACUJCbfBuNGUaMq",
  "key3": "28my2UAsUsa8DXnBXwArGFCYvtjPKuj4GoLfhRaHzEEz8CkhCUWTwWuHoMzCe5XpttNvnC5CLuZisd8SEK2K5B6J",
  "key4": "Bj9nYUafWmHgnNDRhJ9ViYYZrZnsjyXJQRGmKcdfs6QHkC2KePtpQnkMMpB9er7hH3ACKcPATh7P8rH72XS4aAa",
  "key5": "61BYTrCEzaYhHDvpjjVdZYKK4xUGfDFUKMbFx9hwP1USmSUrf8Na2q861Muj63o9aCDyAtLcvShNgT9nSVwxknAb",
  "key6": "49EN4YXufDkhaXRn8mqQyzBUuo1ZonfLNapdy2yn9FydA5jmJ2eTk6JG1VkiUH51dEGoe5sU1uP8s33K5nhQvmb",
  "key7": "58s784evVpmEpCDmZZ9Hh7eVbotiVQvdc7gKswCrtPXAwjoTgizTbSi8bMNn2k22zAAHM9kVFWwpr9R8RzxksqHZ",
  "key8": "4CAnKiQr9RifkDgCkSrni21xuYaJR2CswDxc6EZVz4V3jdKUGouX3Vm6snX3b9jMcGQYmbrukQ3TFD2Psw1b9i8c",
  "key9": "2WXBAp8JzL4JwRoVoib9PARo9yv9FJUEZk2L1tUgPUPfs8pQwv21nYPD9w5HAKqvTYDX2jTtWqEkohV61bLxe8rz",
  "key10": "64JRSMG5kzJL41SdTo2DZAcxuoaTMKb1xNaACzDpiwzKNUSqyBBv1C5MTngSkdNGw2ZnKdc5EThVhaTnFMZ4mHMA",
  "key11": "7nKGeb8gUNii1hZPKVqQ72nXZAADnm8h9HwTNywW9jqmF9J1EsekwKn2VozcnftzL7x3J5sEZThwNf5XmZxTcj3",
  "key12": "3gGJBwXDiUbLDSqPbRhdR4o1ByEo3Aaq53uNEC4QAuzSyiAGjutFTWurWdyRbvD4L35osuCxQXGZnuEkwtNsiDGg",
  "key13": "4rAa7zX4qjwesoULajqxEdTF1JQFDkubaLvrEA1n1bQajE8iT5hJ96kShUpw7yH3QatXs4tqKQB9T2zVhBT1evzA",
  "key14": "24zdyyVvrXbNochUDVNsFDzQeYuFBmo1VwBxAHP4pTMREyohdERpJW6A1h5K7bkJgP9wmNZAnFtE6wJoMkCdWZA4",
  "key15": "38E2EpXhDUa22VR3o7AC2skBin5P9TcE7fyUNBzD7nX624ayb4dTC25MMkupryNkLDBtDa518AtLqo3jRM6A3ePn",
  "key16": "4MstVzF12R4DkUDzkLKuo5DGFvpJ7GtdAGzpAqa6okKtbXCvjWAzp2jnoU6tVg3a1z7PCbeaw4PbCv7Wty1fAuBq",
  "key17": "3VbtX2qVsYgYad7WkqCZthFHrrqLHK14ivrHtuVEa2zWcm6QE4rNqL3sc5uMepkqUCnuatkGoM7BrXMPVP2bHcuy",
  "key18": "7mB1Sbkr58WwVh4JsL41zdBdJwfngkxjxUDfbgMKVByXPPe2DjeoeaTY2XbN7CPaXALqCnjTm6SxkwWzm655NQk",
  "key19": "jJ1PMPoCzSj1DoFT4qfxif6r8k13QuePW4hWsPRohd4nqnyYQF6qQJPUusiVhe7Bts5fXmHSK5FmhH3UHvLrCVv",
  "key20": "4nqmJTHDN3tqUmjKdZe2roHr1fCXcXSgArfmcfsR53X3qzheApUN3uujn8xo7BRXFpfb3KLatSvobYpNsC2Uc9EM",
  "key21": "4kfPzaywAoGTQcRtG6cKEFv16XWm6Sd9m5DArewd9QRb5a8yzBDXDLeqVdwuCqfyHhNbxSjLu6UG7SD47BwJryX1",
  "key22": "2kNKtPDeCZRuZfHwn1ekzi6DbYhKeX8mjBVkYXkrDyz5QVU7cqgUVEpSjBhPiF1Z7TP49551CvRnJctL8F1h5PUP",
  "key23": "5MqNR2rg2f7LanDH678ifoQBrZACusjAJWzNRLh6eLxE46bdMHkwJTdKC5V7fiyv99YrmxvNc5h2Hn3AKU7tSX8Z",
  "key24": "2EC3p9eiJNrixtVvY31TQagvyvJzzuqDhvjhv57RuuhVCQ1hkycGnGBauLiKaGvGsLR9LbyG4xb6XPVjfg3RHNMH",
  "key25": "64nz2sADo4vWbxENboZxjPAoBMfgjSswwcmEssKLTg5hjPDtodGo9fx6BbDihRNZpDoepPfahUSiu3M37PQeT6bN",
  "key26": "wkuu5q6HLrQJU1cgCnbJVNTBdnsWCESx3ijHjnSUK5NRp5gAZWHvNu8u5t9NVADh5RiUWyybTt7y4yq2van9NMi",
  "key27": "3gBveqwGqf3ptzAoV6VWTD2LnpGQzMFR1e6sNpUcTF8JczPefGVk5SXeKFoQ5kcPX8qrx7tPvcKFsUNLXC1vXs9i",
  "key28": "5dTko5HTcvydEwhqQc6xGA1ycVnDDredXiKbC7R9KGNzNfBMDLboEzuv54Mv7grm44cxaW1Me3VNv5osnwMu2ReU",
  "key29": "2GdaxE9hQd7eZUouhzwnSfbP4C7DyMCa3JDPKuko5KNsgyDNxChnoqZuiSqUxuZKZUdKvefhmPnDXrR3KwVwaiaf",
  "key30": "2ZNHDo7dXWLJ5aFUaBwZbXe2t165s4dU4xrfPfuYPYcHCPodC2ko5FCWq8pXtSsLRDaQFibBH1pX3kmEdvho7ZJq",
  "key31": "4Fm8Fv1uJ9wKxMTpd5E717SDTqneP51LoTMakpAwA72Awx45iy6fPje9mSc84uM8G75Hq27aD5M5zjS98jmLsvzm",
  "key32": "38LPYqC2NnNGc4budp64SrDvQ93Fbj4pQtssZywRDncQsinep1XewzPPi8BKdungwRnwuqDRChfSYH7gmFW1a3EQ",
  "key33": "5nPRN4yG7kAM87fy2Rz1gHSFMkAhZr26P6zpmm5JXyCvhftngyqyB3sJ7nzgFsjPY5eRgTgZa2qtwcJx91GCShqh",
  "key34": "5jrj9txrLtRXhFfgGaXmhMqQmzt7gDpWNqfYH5Ujy9MdXiCR4fS3kaPcJoKDG1Bex9BG73kDn9hhVFJiLf2N4Qee",
  "key35": "5hEUZEhaj5c276GYqkTGiQ9yzFXqE4YkmSYV8p4sxnd9Rmf9HpCprWVDJebXu3vwsKCBJ7UQqYCTUczvstkQaMoh"
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
