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
    "2s9rHeYR6nVY5g89oWToJnkM66NHep5xfAviRYxN3LexQi4qqwyvxeoidr8bGkDnPNwuPRj2tb8RYTutEnJLPjLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NZmXvE47dyQr1nhrp8EBpfL7D8xpRNTKSkpDKFhTgmVpXbcfdcevrGiDc9eV9pk6PJsK77DDccT1td7s93i7Rqe",
  "key1": "34zX4X7QPkpp918pxni81eoRuEHFk68CgyrRadkUGKC93YfifqpxowmE1SEe3bxcs3jAsie5Yxuo6MctCHy6oXo2",
  "key2": "5EgWjceRWvbJeTQG66FXriXcit3aw8dAcFtHfUa2zBHKryYvFzjQK2DUJjW6VBaVbTrs35YyyocvL1Y1qaduPZ4H",
  "key3": "5SeU7diJhRPvyP1NRr6gw6AExMwjWP4hdpU1UQ7CXZUiXBaFWthfmYeZAG3WXdiux4iKLEJNSJ1iiLUAzna1q5DE",
  "key4": "2mkyaDF4M4WDMB5zoVDQyibqw3B9TBgoe45mE4GSFMbFzG4B6HBN6YkcezZHXVZHw8dfPodrX3fGbmMhG8jNN3xo",
  "key5": "3SY6e6Jbru46Lbn17hUju88NWXCispic7387ScDAsomyxSTnH71orsGDA754gsJ8wsywhfhbGEM4hJTW1m6L4ugF",
  "key6": "5tyLP2jHtqQ2nAKXMw8GHvYFmd92gvJv2SBXVaq66C4C54PMhZVQVbJ88T6r4mFR31bn8RZ2s1HhrNNWdY1uj8R8",
  "key7": "5LoLdbSjCmaaZPRmS7jYa4wGKeAoFhB1czeakZfU7KVbe5MDZPpDdbKa8Tps3FvZDiGB5WcFzjuWZ7c58b4gHPXX",
  "key8": "2amUujGNAEZxCwCR1ADW59zAEHpBaAL4VK4YXrFWzSqUy9khLJXrihFivD33f6RBF3Jyt9BVkZcqRZ5Zf71yC6kJ",
  "key9": "4iNeReX4WLJjgA5aESKUSP8NNVenD3QdVGNDBJSgzhZWhSemkTdbgcQBvvt8uBHWfmiUALxRSP2YVWdo6oRJY1Xd",
  "key10": "KuPCrj9B5Lq5JuSJymBjF7bLX9j3VLi5YoL4fs9P7GPnS1zY7R2GG4Kp3vKN8MG8RN2x2VwXKYBTVKoZK9kwN6L",
  "key11": "4xbEPq5Sw19ftek3gwM5qJWgMathu9JtxtP72vF6YfuujNwoAF5FXL9NxZKDtVS2iS1xNC7q95b4RMCTZZGkjaQK",
  "key12": "KJZV5ZWr39D8g3ULz9chmXPCDErLVmEXqjxEBUSiXXZTSJts4i9NiNkJmZuwfSYmSJ6krUqBgn2SoUe6TKdwCdR",
  "key13": "49LQgUnWAqY45ZJtfuhsaBgeBp4k3jYtTjzMmUAuBENdBD8ncoYwQVZTR8nyAmG4vQtesZL3GgUcuw4zAwNDiNRu",
  "key14": "5sdnq8FP83rK5ShTZ5hjhuipcP4prBVDFFWe91EfaZ2a1L6vXpFmpchRZ3s9cgwLmJBZQdKgJZtgBwEbVJC1LfYH",
  "key15": "3j66dgbzBdHyiLUXfmgC7BuD5ZT1DsDCEXdoC83886sPB6NpGKW2e6zM4hbJB6a5RqBjhGM6TD8tEbnn96vuTNoD",
  "key16": "3XJ9vDovz4x5Ju48MTgcL37DxvFVkrNse8XgCvpTaJBtBx8xenmP58t7qorqhhNqw61mwQtMtsBJ1ZLmfgk1KXWR",
  "key17": "3KLpkq2N5BnqQbfZdKpEAvcgdxioedM6hJwUnbP2mYShVUk87VrB2jyZR5iftZTczKDpdCQwKh2RabG1EgBPPnbC",
  "key18": "2Q7KacCnt4BWP1iDBvU7bCGYqHoFPzohZobV8Y5Uy7595nxKd6nCahf1Sbmpqnj3dsk4hYEMo3cnsmEDEaeKjs8Q",
  "key19": "2vuym68yzq67Ydi1vkJYgE3kQdoJyWCsKfbmF3GvaoxBYCkHY5haQhCEmBUgSUdJWxWsWaekvbzVzoD5Ad8y2VF9",
  "key20": "ujMKVHwn3KwHobiAGAXUQMuX8UwgLbs17xUqmjsoXhEE6THJWYvHZbAbFJp92x6bHdrF2nNK1Cfxw4ipaPAHxuH",
  "key21": "64NjY1CTENEj6n2iZwwbhmD35nnoemaT4ouj3DWdhoC5dDk8krCbDyMzDHvBkjHvbNaX4diDBNdjMFYEUrYjgymU",
  "key22": "25a1c9Yb3n3t1GeKYkoyz1TUNETy79m7yMjrAMU5c1H8hCD7MxK4fTxVej1WSaVVMiAKsVGxrKA1yEtgCWkMQy41",
  "key23": "3Djhe7Ee8u4swRkWen1oEva76bsSHUKKE3c5gJedbywjLSwnNPrd3AzMNMZKn7tzaKAnv8UU8AuncJMZP3jUebQr",
  "key24": "paG9i6x34QvNmKi6cT7LAsmJjKiDu4nhnCmidpsWCu3v3mU1RJ4yURMexM8JjAnEZjRW4QmPsUBy7pK3MiBFbmX",
  "key25": "5NRY7k3A4PHVFXwgfAwifcPxsPtbPyuDgsJ2p6W2P2abPrteeAX16VZBLAH6H14DG8P3R97iKr7LV4kDuzU22dk3",
  "key26": "2xTh2YrmrJtFacW6ALjw18Pn7mChc8SPvAhx71vxxkDzkDVBdY2K1GprqQv692esgFvB8N9hUGkaiA31dFNrXvry",
  "key27": "2vovG5UaVJr2zR5rYMqf7zkYNyJHiaTWUyTznNAUHDs1q1vFyK4EE6JqqofySpNQG4aVXQtVBqkED5fURpg4nuNc",
  "key28": "2wLoaj71xo5fatfz7MJ3kFqVZgLUQvkJfLPGJFRmjH88Kk1G6dK6vQHouLQWJZBnkBQ8Z4SoDDQ3xPvJG7y5iErB",
  "key29": "3go1ppPqtGfhrBxH7x538RqTgRT3m5xdjmLW2P9tkBRnuECFFPEUn4aPS4SpyN7MUJKHEyFgaEmanBdo42BAhTYi",
  "key30": "5mUZV1jL5yCZ8cS6xp4ghF8ZWfdm4UwNaFNLrvjkocvXgwJkqmcB9ia2tE42giuj4scoJf59hjqAJLGkHj5oGUDC",
  "key31": "4WXFfoxmbdfkY69SuVZhnFsERjrt9ny5F25Gq8sgoFrXkyJ19mR3A6juG4kgDaf2hFqYSrQJvWTquD6mgSswtFWZ",
  "key32": "5HyzbRNtNJEfns4qqTrUjh1RA1BhzijHEmyk8kXx26gUWm1zxnjC72yGzmZ3ACmqJGho5MXiAMKjm14fZomkYwny",
  "key33": "5VzsfYYwkBkZMiZ26oxAkizLVKmREkVrmVpEehUS7eb4qjnZ2mrrguBip4te8L9VKHAyPYFnrgH5DuxvVthaTrmY",
  "key34": "36novWHCDkyZDeRR5ca4bHPughvNGAex7Sy6pihqvfeY1LnQLnh2KNSZ4dDLdmmgSpeLrAF8wfYvaDdgrUtzJ2C4",
  "key35": "3nxpzRFCh3oxpwsc5j9LHgw3anxqv25uM5ZyL4v7cFG5WvP4P38b648CVoU98fkLSunn2MToYjvbRizfBoH51FKZ",
  "key36": "BYFNKEK2Dz1E6b2JNJdcghDse2koJyfvNwxDDwaDH2vMjX3g8KheBnoFmmP1nhX9AoJC5VMvJnTLXf5ijfp3zfU"
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
