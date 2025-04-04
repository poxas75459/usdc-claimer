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
    "5RsFkZ8CQMm5JxV2K5SFLM3HtHwQodTNayf8tvTCYjSPSFNsaKHybaJDSkXwS7Dst6rpFYEAE1nQfaLZ7z2FssU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25AYCoAq3GZbLQF7Y4hqSGVe3wGuZTjQtcK8DktMtVnTgsVK1dLC1sq8zhbrDW1XkJhcXk66yymbXPemccD96j9U",
  "key1": "49Pgm9hzZY4rRSLmU5P4EVmLyPdViGGEphBX43MAYuFB1L8tZMMHYQ173hjPSZHQ9aBkvDSAx3Nd4Sr1J9F1uCWN",
  "key2": "4KqFgn474HXLqWaqr6hCVLJ1xp5JdfgccwNicMvURwwNgNsZ6mcfRnfJkWwVWyFstpZqhAfbqGMuD3fhCuzjHJzJ",
  "key3": "5VYrB4aakCP6498Y8mRN6cZnSd6fJwMZgsSCNAWYoyLxTFwv5N5WR5nGHKAfhM12YKMzoiuR7sh887TwHEHnrsqg",
  "key4": "4tP9z3h8xkw81qbb1FiYamTF9K1PrT2TmTGDavpSZcVkiLWc7wnw8HZk68pNNA3vWWk3htp3CQg3ioBFVTsgNnro",
  "key5": "4oAYiwim2x5i3PYJXoVAGx2Nyy6hzJ6rCcKQtgrmXCEmUUgX6LjvYPL2C3XQnUt2kaWhRuVnJeTBCWhDq6oqaYy9",
  "key6": "4xyobhKab5rinoF6VoGkDpz9BwA7gpYBhYFmoiZN3kcTg8i4X4aFmPkff79h5xGgnQD6AwrvgSSJ7nM5Zevq8wXb",
  "key7": "3RfF8FJ5R8MLUc5H4fa2TPYK7Ve9Wc95ZQ9K3ufZpFLKS3duDqccNPi5yiTSndcyqhcjiqdAHac23PfTH4jHjx84",
  "key8": "3o7Dw4754PfRR4SfSQ4ZhUq7t2Bj7Y5GQfrenteHUqtz9uejYfBAikiyAUatoyGbDWstqumwfLYvHBjwUAUrjaCY",
  "key9": "55B3oUsoRxivrpHZa6oUUJDPbVgA8A6KpvmnG7R7Gky7XLgwqPenRicPP2mZRxagdMfkMqAzPvnecmUvGWWnAjtX",
  "key10": "XU8isexmcvu4s3sEEndqxrGaT9Xzbyx1Ch6pKD3XdACzXjsByPb6MMYRYztxQhnEUd1Sp1S1x2CNV2tR9HuZCkU",
  "key11": "3eV4LuVVPn4RyBUZBowDJHoJEiJZr114PbwKrQQajL26cJwngptnT5HJjnjGweNJrXg7vQncFk5xqpgeSath2KAY",
  "key12": "3W2J9mdN8huhtYy1Lheas1kcMPxBaErdE3i7ZvwjQUXCAYrx8T7qrcvfDSmpgirtSFKM7NPU63rZteErJ8bjbe5Y",
  "key13": "46x5GyW29gM4uB6t1uYe351Wjwr7hyZmXm8A4sV1N3yzsJwttEuzCzHkAPQ8Sz2WgnYeZyvr5ot6ptuGQEX8KorX",
  "key14": "3NN3kKhU3vjeV7483ud3SiZFV9biDk2ZKiuaCK4DB7t7pHptHdHWax8XNcwt5zGCeGPYKppNia2eyfoX9vneV3d5",
  "key15": "2YYQFR4cRNnduwxLGXfPRkWjRzEEkw84JdfuEBMH56i44tTSFfAFRLSRETP18yGVj12VaYCMYMzjyibxGGyyxiym",
  "key16": "4tkkPiRE7NvWaortZ3DfuZbpM2EEUNfMCkikUZBnzFa2VsNxaQWiYRqvaeFx8xUFr87N9HMJn6VpdxrXyDacGuwH",
  "key17": "5yA9kGo2QcGG9ooomZqYpFqav9VWDCr5SzBert4Ltkv4j8tzn5yhVhbaJmyXfopJ6iMEGwX6RUSGbyPSbpiV1jHX",
  "key18": "4p5QYKKZyApmfsdE8a7gLEFZ2GuHaKWnHYYDKdfiaccAarzvRpM4qe8tBzkcaWN5VA9cnNMprN16H99BE9xCLxjq",
  "key19": "323btaYq7DHFx5cyEsKHskGBSxNpvuBNf8reEWmtoVwi5pGzWtgPbU5gqDToDwzfkZbkXJpTXn6X17sGHysmWohN",
  "key20": "5V174LnRb8PhhyrkgjYM38o19utYGpwuvCwzhSHgSeYhJhUgJ8vws8wwpk4x8cqB9bTxSPEC8o7tKqqZGWSghPGZ",
  "key21": "3E7aGvRUw1xkg64tFzTMQxYWZjE59CFk9AmGyuQai9MnjtpFhhQyYz5u3n85XJv5N8utWLpwQ36Uz5X5f2kG5R8L",
  "key22": "2q2Nvi6EjJD19NUWSv5XdhKsF43YhybKcLX9t25PWexwhMd7mfYLENfW1iuLtT7DkM1YSojX12bNuUjrVyGfSCge",
  "key23": "QfXkU8rBdMBg1UB4egCcNd8WjhHpBW759UJRC1DYWaazjwqNLrAdttB8vgkVLJU8ef4tjQiri2ihSGD3FjzqgMk",
  "key24": "D35AEcVHMeqsCUQHNb5EjyS4afn57wM9R8kmKmTQboVmDxZGxioTPSmVNqRTvPCWpzC6ywHk8ifKUgWcT1Vhma7"
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
