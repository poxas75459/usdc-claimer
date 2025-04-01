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
    "57fmZQVncshR5WuUdGg2a52YeKuWpHEiMJ1ctPT1Ef3aMXhUGFr8qafAgvLJijh2wYAVEuD8pGZFU5hQTsUQPFWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KFzHb9yBCYu7yunsqQbUBVmh3WEcD7Kv3mL2sz3f6U7nzyQ6jE8iKYxHNCDALTwL9nHvApjBW8S9d5kKSq56vt3",
  "key1": "5ToXeaD8Nen3CLBxCwmUxDGh6AU77hzW6m8iA39KXBB7eof8QJwjde71YeLMRGgNGjyLVmQxKhKg15JLqSbvG2Cj",
  "key2": "4VucwEJpHVa5F3ajyTLjhbY5cgjYY7KsYsE4bmuCP85y4hL9KUfFitEvrTSAiFwBvdQxixUW8qZNDgMoGyCx7p64",
  "key3": "22PTn3m4cgtn7RcJJ2pVRdq1Q3R6B7QjexYPjge1kJxuJm7m2uzsjGjM3vYmLjYYSJx7rULoWPzCx1QT58ePvYLx",
  "key4": "5PqpvDnpifZqmDShvnJXt1knogVyLSUfdTnMPD4hNtsDhRCo7Ke5KpGSE5EpXonzyLKarCEao8ZxsRjqFZQLyZXN",
  "key5": "57XgSqSc9CBXPRSLVGEUD2VusCBkeqGUdGQhRdfYfP6JqhhgM3XDPRWdRo12vKEv3RqgUPfABCKw9rVR49xCGRyH",
  "key6": "52wJJFupxKRJDM7ynfCPpBivY4xUoCdwTGFem3RoUKhjHkmptWDEr8JxJVbs3QYDboKEE5rDBK2tawLP761H4CGM",
  "key7": "2wUmXgfVjhMyH7uNSyNxptpP3iKJsf2MZH3gkvBxKNCz3D9TYwwzNLLWBAHkvXCkA3CyZ1WVU6EPvhQBiMzPPeX",
  "key8": "3qCa8aqMgoFyKgWFzgXu6YQz3xaVVgmrKQtJwtLSKrNk9VBW7o1v1FWjs6nSmwRjBaEK1QTQBZsNFY6dJVAmkwFs",
  "key9": "4yhXiffNwKYYaeDf5Qp2H6vrANZwmG2SgUgy8doCJUFJEePY6xdQbmpS2EuGqJkNdZZcuKAUSdvLyxbvoZ5E6gBj",
  "key10": "648PK6vymYek1hUogRDd9NGSSApPDHe872Q3yNcusPwQJPTRAaGUuWEbMxXBskovNBrQV2ukG63pQACTkSgiCJZj",
  "key11": "58JVZ51zGu1dTyXpH4CYWEbWDbJsCQ6w1A5R5HXtdq9DGhbUVzf5h4mFNfti5wRFX4BYuCW7Kimb6ofVRrRi2NR4",
  "key12": "3qEz4i3ercHWbREieGozseiZeobNkAwWJYU8Ty9ZUut9n7jCFkPxABd5KsJwUjgC3z6NHJTr8AbLzauhhcEnxjLg",
  "key13": "3CyN3o4u8ucryrz1AxtiRj6paoxTo2oFAWVZEDot1ENEhaWfzmHdVbcJY4mWEi2SPqPqqsRzLGwns72FXrXdYfgd",
  "key14": "tUicTYwQ4oeojxUyVWVDkQLy1AK2qBKAdeKAPNq7aC4Ecba1UZiQpcNieWg9d3zvjvd1PLz6D6PeVMD1qGBPB4i",
  "key15": "3mqVDGFVfF8XJheumDQKxVFi5w8Dw3B1FNhbHmxD4f1fmLDh2AribCig8KbiwvRkuJn8jrKh6BdWL1MFbTFwmc6r",
  "key16": "5JkzpXeSPijAoEbbUNs4N2KRBJqJbpiGhgCLkYK3BJhXD86JuBhjEjKwWtLQvRfEavzqzNTqVPnsDvdAutMPzZRb",
  "key17": "4S1Minum3mMR5DFTxZsQukcHp8UcLKAzdQxsK3Ghu9d1r2eNkYREQ14yZZF5cYmHzpsXUVmLoERqTuZjAGzK1LiT",
  "key18": "kchaHzwKeYaLZr42pXpS1kjwwEMjszg5w1VZSYxq3Yhy9ajn8UCd6JhCuTk6ofFrsDv24fqbb7TdjUzwe4fGdwD",
  "key19": "5j3vBoPDyNhqTkcpQjsPKyyxXwLuhrEyjmRE3Sj7GvxqGgBanZV8jS3ELkiWVyVS7d2aoiy4uFVBGSwSYDokoB5T",
  "key20": "2HzxQDAbhnDjLjRnL1EfK2rKvBDKViAmKRndnTUZ67vaPq7scwwcqEra1hRd4Gqk52tYfrE5iiGrsN8CCKGWNg4h",
  "key21": "5VVZ4JBeRsj6M1DUpTYY1ck2KWe5Kobv6Z9f97oLG23ThZLZLEd8PHPnj14f5BezrwMTFi8BWtjGbSvsQYLj2XFZ",
  "key22": "4fetgjnugHZRTFFk1Z7W6LMT4YgkpbSVPu5VpKdunSsYgqwYfdGwrFTZcYgMPq5wnyZXifFVz5jhFWU4KKXbqA31",
  "key23": "575KQo8DkccQimjkda9yACg61iPo5MEaiMorriPmSkWGyjtbTnbJB9SzNwMhcUXgvTxBF1b7DQcxhUhEL5bbUMyi",
  "key24": "2c24yoant6nLoRMMRjJDr7CTk2uYJKLBn478JGTUaX8qVMrgTLXbPhwDPfryBZb9SjtyCN2pbgQ3tAafoGF3goev",
  "key25": "3QnhktkoYwM71nddVXGfSbV4r1Bd3xDoVaHUJn1bmubNBoo2LJCY8Qf7VR2YYdBQ4jFoiTepE52oVA85iVTTBkva",
  "key26": "5vaLeWXSFSvMhzcdfQuJ5d3PiHcQ72JCJ4ZRh5YMy4yEVNXv7BbQt7e4YHHwTrhbWQrVMrAmrXv7dY4su3QrhEFZ",
  "key27": "39YSmckH299CL1WG4ptawxyCRwN88ch74Fm9H9RgWrrpTvQKtonDTRiUszFJ2nV8FX3NN1oXPZtpWGrPSP6t2FEL",
  "key28": "w7TFuR5r4VeXyTRfVs1MRBitCxtfQJndY1jW4fojzj1g7PRp1aMUnNjDh6stv3X7jkFqR5RcuM13NAxzjc1Rpi4",
  "key29": "5y9JbZgTEhtF3KwWiR2WGF4UNgdNRWQyjoU6c9xHTwv53yPjVLRPCZreFTphZp9gNWqT5CLBhhKYmwiKBK5VSTXM"
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
