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
    "2VPMj9zwE9XWdeR34mRL4EHgQ1RaRwT57pR6iQ5jvtZgbwMXvLPd3UNqp2ybGtgeJtTEm6s6DseaKNwYjLtMFzUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61PpS8J7WoxufBTQQLikNQKp8qDodWP6ST3tWjtCB8gPjHGyv5ViqXfhq9SRipLDUvWqfVvEt8V3HQNFY9J1xrUw",
  "key1": "3mvrqYwKSTXMa1xBaWnqAiVou4viHSYystJNz9WpZousLwMAFYvFfTmqxDiQFbvXpc3VPeSMT6CpFVVt5VSpiJg",
  "key2": "4TR8TQf9bQSAjBUbnBja8cqDQ8wXWP2W7PJV8ggKjsZ1zHWuBybASi83aMDtzZtkrNxYvPM7wTAvrq95cZDv9Pxj",
  "key3": "Sad5HvpAoAeWCmE8wAw7qgefYqvff7CtdgFWyieQGAbnwFPfxXQPgsNTAemNCcviS6bU45JDzgUzMo4qhvS1ftx",
  "key4": "5SrRS2WaveisTmQsGoquj1HXqJyPeqijso1taQ84EddFHPKBRwckrgiGGwR41ch29PCRyHvjeKkfcyf8qkczjPXC",
  "key5": "5Ly64hRy8Yq74PHXs6KuXE3bDLsQvBW2PL9CwzceL6Cz8pHgafpn8zrku6ZGuKwRaULoAxihZgnMRFirMbW3XTdM",
  "key6": "TtpFzFJkMoD9qf8QGbUr5qiF8SKX5uRbn6WsTUuDvzspH5aLjx5yz8rf1xm3MY1SVkjEZ63VDBGFdEAZnKciquT",
  "key7": "mpcaE272j7rqUrnc1GrCKTYqZ5UVeuBZR8b6yyvJ6xNSD3AuJoKRz644TJ3YS1CbTn5NqDdYbvR3QkENVwdo57E",
  "key8": "4qvjmgjhWuUFph4B8HLarcWwetdPfR1o2MWGsFj6QshBxKuhj83ARAs7yBD3ahvdUGq8RtbhEU7jL8WbiBwYvVpQ",
  "key9": "4MphdJQ6GRw9aPeBQohzafUQbz8qW8i2ybc2BVSoFvf8ppLyfTEgRJ6uf4wFfDhN3Dgrrnb4gh3cT2uLYbcTymri",
  "key10": "5A4xVj9S82DsRk8zegx4rd4Cuw2g1BTyKS35eBQcx7PR7Tj95Fbu6N1XMZBTLhcigA2j9tiqHSEXgxHwToneecv6",
  "key11": "4rbY8N4zhH4e69CXidZDA1hErLHVwNrjccJ2VXSXo6XXqmGXBpD1ih23dmeQPMwrhu59KDuMRLSokGXFkUwhFDyz",
  "key12": "2fFz6TfUgXJ1gEuQLsjReKRxf7SGxLj86rg2eJYvfi8BRA4i7vT4vcor9ryAE7xc6ZeTbiCvrwvmUtvMtXKCM5vh",
  "key13": "5WDTvLVLQcrz44xHmGRKe24uRuxDwy39uxfpRNnvj2Wgm9y8gJnRjMqwrSREC8mstmZ3c62sPGjYnAQi4QCVDmDW",
  "key14": "5gh3jz7FPh21Wp3EdSatGDkmLk9aYYCriERRPoJRuyuxHicALLeneZiXhCSC7zdqUebGgFXSN74Tx4aQAffB19iS",
  "key15": "4azf2sZsHQWynKFJFRgGHKpZhJVRbcypQKZY837TcYZvwqoAN2YNWHA2YZWPXharoYX4ayK1N8pxtAKy5VbfTVm8",
  "key16": "4RpriGP2iQAc3DSykmcuBCP8FZH7zmdTphi2HU2LhLrNb1ufbsA3YVHEpGXDk5zosUQRmFjd4wxDeVyxNDseqJZa",
  "key17": "qKrTj9csRUxSp5UGxF2fZEASmijwYpBEkUbo4bgscedydXLLyqC2va9nMZ2jiHmP7WRj7SjxDufe8dtSKjsMQUy",
  "key18": "4mjohdU29C8uP1bEJdniMcUWjg2fa5pZAiG5R9gSJ3FpR1wJKeV5npJWucdJK5JUS6RaRpW3bYJZvmcofqrcMuae",
  "key19": "2JowntA3mnpmnSwqD6wLrvhQUhd7Px3dUE69utc1suRYtsiPMeTgfmcmGfUwz1bpwUcjrnsAgBFSiVwz8uz3WeR6",
  "key20": "58B8pxfh7Bfif1yP1JSGUx1A399Wf1aHph7S6C4Avs9F4ww8B3mdih275ahJZQXqVzr5JZJZ2Gtud82QVPJbrVKe",
  "key21": "PUTxam9t3WhEKgW4YMnDLawWkpeJJ8yVMb4faBrs3LZA8LWrkN4mn8K3Nv95JzTvx9S6FA3uWrFejyA3sLmT3nu",
  "key22": "2vJKEm7126i7RnV9bwkWimH2p34gZvifYtG6fAt2s7Gn8b3aHyL8ah9jKF9KBBSf6JEPgpyDdLBZbuBy7a8nGa9s",
  "key23": "5YPanS6BxNsfPf46tYHvDi8MQqJ1no7g2mqU1dpiWrGaNjwh35y4KXQKuBx1ybU26JZafQsNPyhEiVc5jUspBZpS",
  "key24": "5v5jYYZUcXV8pZeVjqghswf3Y9HysRqzH9YwfTcYHjwnGeZERCFqtF6naKTxVxieKvQ5tyYfxa79XErP3dakzHuM",
  "key25": "25QVc1uu4HyErPcbPrgrgPHXGfTaeifT5ZzmFFVTDropMUweiDBAoBtkxKdhfdT8kmcLHp8RvToyyR3Mi1Q5H6EB",
  "key26": "2ubYtc8bdbCxpcZiseCHiQJz2MBpjPd1gKKfMgLuvRLFivgn6wbEZiAsBejDP5HZv8sjUcKf1zBorZjR1k7gM1VQ",
  "key27": "3TauREJs29s8drEbC6Za9CoyKcgyghW7fbbXKUu2Wxrw1GU6M6ycQnjc3ajg1aouKWjkn6QrVY4eXmggLqybonSs",
  "key28": "3c3ZUp3SP3bj3AsmsoGsVqZtg8ZYoXLLHMZfZyxu5w8XJNnrjxE3vFaA5fr9WP9GQ7RBFd8p7tAYjSQAq6LhBrjU",
  "key29": "4fgtJW9zjFipbMQ2tNf7M75mqr2KApwxukyYv2BDcuPxuRX8Qjp3P61caWxY51oVvCWN7GCHcDWLyRq8gsNU4a9B",
  "key30": "UHoZX3T2BjxK5Vcue8wZcfc6f2kBZxQ9W4RwcqzR4ywL43ZgP4aWPuTYEbx64Ch6HpeeT6qqabnT4b1E2rxQQ6J",
  "key31": "2isE4n2LHVHuzUtb6gxWv7oeeNzzTWqCEpT3MegwvwjcV1D5s3Gc7HFB4uoo4jngEo6tgPcy1UkaJMFQuWNEQaAR",
  "key32": "GyV7615225stakV9wh49Xmtcz7JZBtVyXJi2v43bQGPoRYUD6QzX1rZaVfAmAkxWVrhnbLhfKBfty7KNyrVhEQX"
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
