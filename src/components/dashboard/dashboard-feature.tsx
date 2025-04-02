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
    "4vhsnENo8V8vL5JaeQtfpdsj19xSj6H8EkASaspWyzXEmiBZci629SDWyT1WtGLFZBmiJQUHdnYYt2C2ofDFGpQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B98Z5Fc2vZXzUVc4gH8CcfLs4gScFXWvtJed5AHUsGu7jQaFnJoeSAy38EH9aEk3LYJcGSD46yWjFUrBgPyCG2h",
  "key1": "3b1kAEYBKFtzzaxDQXiekHdZZ9JEQVGNW7jEWdkeFWyrZou8Gs9ZUoz7r2CiimV5GV7WJtgjmaUAyPWiPLNbixnW",
  "key2": "tY2NSP32HviFeekpuyhJiCrMGhj4gWPWDwt9SAYZU97Lc4AhArrsB1zvx9teurdfwiwcvNP3jRbwN9bZ5cuzUsH",
  "key3": "3n5wC7LD2v1H4gfkg2Jh62KxGEdz4tnV1Qk8EF5pBpXac2Tqe85LpxQxUPxCPJykd3qP9oorVRLQqEQRxwBUba4S",
  "key4": "4AQcgG84tSUvQJDBiQSajEVACfTMz55KgkgSuWTUP1uPErhnvJAWcT7rdkVy9q64aaWsqqoyefELCbvStwrntUSa",
  "key5": "3CKHQmn9gbB65wozThoh46SwuBLZJ4kH5LacQqcoKjK5K89hhuaix8Gctj8T1ADK9wfoGX7GrFgiMitFgRAjSHVd",
  "key6": "56rtwL5QjjjEA15dPPJJDZrJAjgrLCS4YykZufY2rs3gndXUB19HiTWRuLFqr1aK8c64pZEvEUaEU2oMBK5dzJkc",
  "key7": "5zg8b9fNzhMgD2uctDGdtUAymP2m9SRfnrfEgKj5YQbKoqXbR4M2UQ6NqoGXzhNrXLCUzY6cZzPWd31Z1XneLrFU",
  "key8": "3NYyrV4x6FFuDD5gaoPrKhTCzDKnGtLCW5h1gBN1UNzDcwFJs5NRz1cNby5wZw7ozx9Z5MWp2AgxG62VjkqHqoJK",
  "key9": "5MnXWJAbSofjgWJe7Q9SsaaZB7nQs8dcekQAHwSbi8oU8PM3EbfVvNYTZ3J3fsKaUwxyLTXWev9MeeV5e4siBDNM",
  "key10": "5y4UErG4tHZwhZX81V26ZPYRFQ2bYNLB1BVdNkFTTjqQBGhNvyGB6Lv7V2whhYMnPGa8FKWk36w1nffMiv2JYNWx",
  "key11": "4VRE1Fr89v41cZMQHGg9Kvd2EoBXGSW2WsRDPffdyuwKuXFQoNMoh14fcv2xsjM9erghf3455NfeJcQMzvopgtQK",
  "key12": "2gb1Nn9N85pPXZDjTe7c4FP6E6rf76Nfo1cxn3zFPpQ8j7MmDuK2PABF1jns6GnAazgBxb93gj8gimKfQYLBBQt4",
  "key13": "3xz7aZ9QjFDkr6hXhiohdaAkyrpToo7wVFVVyy5utXWSK1a55nx3wQPRBYVKHXGyNSg3mB1Q6kBosp3dafFqaWm6",
  "key14": "3Cg37jSMuaohkNjdJmDtiiEwqBmKaRvzh5WJbrwCvpuf2uwaAyEmGeHJwYK22duqkQu2yBfLWAkCNgPeMLxbevzg",
  "key15": "412mNjSVYGQxuNfQuZP5vBuQcD6GWptocVc2aRWwv7UXapkW1BCTWVYGRpaihiRZ3bYohj3KWMhPZaZiFTUZdTG",
  "key16": "EXpcMRYhnd1YTh3p1RqY97fppzqsyNmM76axRqxe4qGV4zShD9N1U8X7Vmumvwbzy3xG4pmnLxdhSHF4tBPmjRV",
  "key17": "4kUf9Qic9rdux286YKWERncrqMnEconZRGZWTrcF2QRNn1UNK4LvJxphp3kYHSNQEsZDkbG4J1ixd4fNsfoAnYGd",
  "key18": "4mWsW1VthaStBMFse71mtoZiB2Pan1HTQKyv6HVs4ibcQZyLUZkrrag252UDjzjCdF9BeQZViVUEEk4DtKGuVcXr",
  "key19": "4Fwr7Ew4jvg96LewkRLRrXZ2aw8GQSmRimkpf1V8ZNS4cFjgNvpcRJYuepPLXrsWCLXySE8zr71ockg5D8hA6U2n",
  "key20": "3eMV4zyWfzULLFh4kh62Eiwwm7F6sAGXuVMZg4XC3HMoedxMLQxpcyYzBW26j8VN3Uvp42vKZKCyPyatEUyHEikE",
  "key21": "4RGpb8BxPDqHh3TGT7uVvuT1jokC9Torf4sJeEP8bsNbfd8uaxQK5yyHzWU8B4CBc859nHbYQMJA2mMyXu7YJLUH",
  "key22": "MexkXgUdtxkVrLH1JXt9kyFVWRNGTu2m79QWnV26vTAxA6VgmnxfU4g2FuJZpTNaqueWuvQ94rCcBrw2XCN5ajC",
  "key23": "3tYUpiZe841Q1JEvRUpWwmCCjxc6bTnZL73FTQospgSsA76wTg58Wpn9NSa99SnnMN7zbCG5iazwATYnBrihXbTH",
  "key24": "2g7Mwd2SB2eshWTVwrC4dNgJ3jonXQ6S6CRgCQi5BjRivGsxdorHrFHZqH27tAaf7HZi3Kt6F3A2tDPgsdZnGV7S",
  "key25": "4F17FFCiTp7EndzDwv5grqmRCvFqkJYMv4xRqqtLKJ9dRikDHJncK4wmAdxhRG5RuDmpisW8UEWd9dWgpNyUGaPo",
  "key26": "4TaT4dL9WKAQDqstNoFgcaUt8AeTLSuzXA8DSXHpScTcraQmf5tUmXpfxSdwEM2UdTXGmXg8wgMmg8vyCsqUqgfm",
  "key27": "3jmgA2r1DxySpU5Gi88RGdaac8JMGjC8FUCEL6MVpLYrZBcGENXuD1SisqP4PwdwExXFkCKKo5zVcFSLZwu6Ur6B",
  "key28": "4XeY9FyFbYpAkL4AF4w74DnhtXLsfdFUW5zdRWa4YxjtvQavLZCNZhqAkjPeNzRLLi4zKVXaShVN1vTZXBT5F1JU",
  "key29": "2pCQ1SH93msNQmXRodCTWrtViWighjigPiJq8dT4VAsJzepVeLVXHoTxK189hqYda3zed7j4VpFtH6QCzy3eF7gJ",
  "key30": "4XaQHJhqbdkzuQRZreoURWPZqSzwYZ52TypousgSFtDN2fEiHVdvR2eGs2xacUp1HwCM6hghFYXgXATAeSva1gtM",
  "key31": "5iX2YpdajVjcC2DSzVVFTwijZNAuFv8KEjKfMmasaLpjZR9VntN6Ci3euBemkVdmQpGACyr1GsnbrTyNvA8mbZLX",
  "key32": "2jmqcgEoQvAZTnwS8g9ZYRiiXwZ9ffQkcNXtuMTHu8jgXrBDPHkbEHj2UvEBzms3ruhFNrfvfUFYFkXFLjjBxmAK",
  "key33": "5F7jLDHDG1jHqmR19yiTS5BkBWenhRJKNLxocMmsRPdobH4YodwRKjC4W6KTtMeRTEK9mUHy7WdyRcAH2jbhzvcG",
  "key34": "fa4FdUk3GFbMmiyeQiSk3acahcZfTC1qVQMYycaJFJ1ifvMVJaZDeoo7hc72iG7xan6J2cArUKUBs5JhfVRSas6",
  "key35": "eWH1EhMaCkzsNHa3rR2oB4VZ1VF9gXU5ti7bWpmX7rXZvFmh3WCiLkjFVCCHMWjtofdkhLiamBKgzUwtvLWsJxt",
  "key36": "4yUYb8vh4Pn4FG2qWtdWxnNRtsyK3UVjuX1a8ZBFc3UUHzR2cdwd4tqHjVwobuyJazDvb2sD5xugf4AhRU13ENhU",
  "key37": "7gpNg5Zt7TKuJqiomBJJTaiaZqiZm9qZfr7LwhMFXEGTAJq3m9HTQEgvp8hym5JFHNhans3QvhjAdgUNrQNajNU",
  "key38": "3192SfxKBpqB1mvYs73FXiojEzsQPD7HPxetX8bTzgF5SHLChPctJb4wUNQ4roC9HHEv9ScP2LhwkphiasYqeiQb",
  "key39": "5WbAc2EkHfe8jsgc3cBJwpa6aAdvebpkkF9C3qzkPGFHfqCYtkvhv9kkfi3zHV6Hf45gNa2CMR8HAqaU6PdRJPye",
  "key40": "3zEEFqR2coqM8FswL7QycE7T8r46Fxo83jyidz9YzDQfGy8h4NeP5XxBs6FyJwcGqqCQR1tjgnB67efRTugsnnjD"
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
