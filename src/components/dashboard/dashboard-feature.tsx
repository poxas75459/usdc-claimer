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
    "5XBpN9j9SsSxDoDob3b3BNJ7tCFHtWXKPeEQgCn22ve5dUpMznvmgSzmFsMXmChFQkUVAGzWYuQmmRgwZBEUytGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WWBnTyAPCQUGrSYacpVvTRzHeuRKwSbr14S7gb7U22R7QzoHKLLNsXgn7NxtohXYR4SVuw7dqQJWhTuzRabf1nG",
  "key1": "2zsxsQQ7vY19QE9LNCQJ2XhkErBdrw1vnKwb4RHQRPD7XGBvDjF6LZJfjcUhi9b9mj9TK1EX8HgigzJzBHZwWuNp",
  "key2": "2oziUHk4KGQX9sn4brFTuNJfuMTkWM5MA1e7EP2zvdB5sG4hno29Z3WBXgi1A9W4fnRJgrwiQorLx2SZE1BNz5NR",
  "key3": "5BAPXq7qajWYyqGAnRtDBi7msiERrwFZZrVBHJDA7JhCxPcF5mZjsmPJvbaNzjS1f7mQzHcf224Vug4AyLYdEAgg",
  "key4": "4tC9ssMVY8NFknVLdCZv6EkXv8bbhqg5bQKswznBCEHUEBPLhuSGdVqbowdGKPQuL8WjFFHY2FpY6X7ke9wkfD2W",
  "key5": "42JL3JofZuPWpVYYDWBm7hTVDGQMvht6LS6GuCZBWu6qeUPszCcZ5o6nfgYPx6Fjrmsx6pC6zgEmeBA2PpT6SAPM",
  "key6": "2JQBk1w4EkroxnyVyp9hhCwpvipJwpGHgLFCuZPGmayAMVBYW2uSfV6axrndFFaXWRawe7ZxLqWbGAvC5uZ6oLYW",
  "key7": "2FTpmFPZbGNsdmqZjjm4D17g4W5qLrG1pgJqcU2gG4UG5DD7G9DL36NucTGeFyZKe74EmeTcavXXuyA9RTJi7g8B",
  "key8": "42wjUx1xG6Fs69zWh9zHK1KDYxtX6aCGox8paT3UjLMcNHSYHH4CDx5B538fHCgytKyKoBxWreTtx8w1gmvkYB9F",
  "key9": "5svztvVBfz3yM8hB9XdCpQJtmGK8YYLUkT1M9vwwKWsBaGhTSZoN3qEjUtGLSxZdqmwnERwndh8mkYNHYY7QPQGA",
  "key10": "3ByfJXbGz5qRbTQwiu1D4BSFAKYZXA3YdmcdVwAH8XYSJggBRGN7GdhATL1kSQ4kwV6EvTp4UFpyEQr1BUDywaKp",
  "key11": "4aXv9SxdYxk1UcJw9nJaaGdUex5fNtmXEgLxkM5XAkGesVXDH2JTzHhSA9VP56DqR2YZ5MWenRFzereYbFE6ChtA",
  "key12": "59gvmtw1iFRwgANCvQg1zmUiM8FYrLK8xY4naP2K94MoLbMsskC4wT7ASxYScZQoEsKR3gurq5VD9P1YQ9QTxzWC",
  "key13": "2PxmmW5t3KjY4qsf1QxacTLTQnenTnpoX5w6MaH71YjFtthNaLfzWgdotFKLpqfs8KSB3NzW3YFMFMN3k3PDXgEg",
  "key14": "4Ey6hpvrdtTghR2CwWRWa2x15dxEroSuzdGeGpvU8ao8QHEsv5X9BzHCrVnp51BWGfXbKjCygf9NMYc3yMZETZT4",
  "key15": "4k6KVcG9QaktT1n9g6hAcuZXad8vRoLX5rwvgxCk94vTRgH2pvAuvdnAaEomtBUEnKgPhxXWYux4cXP71DgWXfmA",
  "key16": "37r7aP5TAJqndAPSZxEMSnjFVGRb1PEJUWwWhY52LikHZ2rxFKUo1TMAHQno83U3aj3KnqjuH6WrLtvyURy6qVUX",
  "key17": "5iEhiirVaF7QxCjHgxfQY7FrJvT6U9Q6noNVrsqBpTU32gmpdW1amN3QGeT21AoucqfP8N9CpA2Lqga5gzZn5fu3",
  "key18": "3iFEk7gsPyGeWBeyaWD6CD564mDryguAcGkkhuykYEfMeva7CrRv496xycLpnw8cNiPDRTC3nHzTvUKBXm3YtpAt",
  "key19": "3pi8k3yerAmmvvWSt7oo4WeNV1QD7rTJAbAEMqZL8f9EafjagcJfyakHzTrMKPZtUQyvkeuHYiFqLBgNKpTjga2S",
  "key20": "62G8M6WAncvA3iWRJpcJ43EXGWPAP3StKk2cxjC9We5Rnav4KtJHbzkw6BGaqdBSr7vFxDBDRpHd2fEBput7enHh",
  "key21": "4UTS4J5ek2BCny8Farsx4Nnv8uJV3FfZFUnnXwrxWHVThj9KQRn9evsyeqBKGRB7tjv7sjEeJcLTVHfgDVSKtZTG",
  "key22": "4ZCgLV2cq5uhMxFmvG3cBMp5XE17X4ByqSUMEDhnNM8XQ8YXEBHz9tg8WqUc5jKf6uyVSbTtmNPjF3gLS6vgMQEJ",
  "key23": "39B5Qa5UtYXvtGvJPdwgxhYXAwtRaaKtcpEDx8gR66pXUUtKjAfiVwCNZVGkU6pykXdRsna54hRsPvvE6oYAxHUY",
  "key24": "4sYLGaJptHW53BEdyQTdzgq4sd54HVx92ZRUXu5xJ6r32WXzysP4nwLVm4eaTfgrXeBWV3hg85xLoNyXQy61sekW",
  "key25": "5C5ynbXDep82RWqQZRPR42rRm3UKbdMRVkfiAeGYYPDE6NJ2YZcXrwzEY9RLCearXxT17E3HhnB1nCqLjSk6w9yQ",
  "key26": "33NSSRgAziyNA7ovvsmTjRHd6rzZha8hWMWv9CBd1E7cb8zZ6qymkDCgGX6uFBwzjrc2aD74cn4V5GFpk4F3BMaR",
  "key27": "5izps3FqX4ryNQrMHPzr3JaQ6mkfx9rLXwmv2HpaG4W3mwxdQJUQ8vEtQmdUT9Z6Mjh8ew3NkSHyWmd7viBNj1fp",
  "key28": "3j8qXVU6Q2ov1BED5GDH2BTGkEi3LYw5P9z2Dwf971ioJ4ZAqbrRd6aQ2r5qJZPza8dHd1cRDrNeoCET7vnooyxr",
  "key29": "3UPqvhbbr9eQrzKhuBzzYcbv9nU2BcSP1tSkDwqKpfx6cRnsy8jiUNJGx5DzT9uoeZXqAjdeapUdDNhDN6UYjFAc",
  "key30": "FEXmGNTKzSSoQVfpqzeALJctUtAs4sHEj8Y5biAwYgLMPMYMhHsZM47wRc3wWYeftsVbqY6G8aN49GpX3BB2722",
  "key31": "SVv3hdj5wfrqgxr8NkMdaaxu6gqwxPwYnn3wGi9Ughb6Rj2WPA5h4t71NrYGYM72YwDcrgKrifHG3xRwPfdYXHc",
  "key32": "35vokHtrBYMVhhwq5whzmzX5woyTTqhdQbFjbJvsSWnfwsFppyYxWvbJ5X5FNEbzQ8kUEd1SXFtMVMVk5dJ7Zt2a",
  "key33": "2ghYgbduUA54ns5WNcBQpC3rCMpRLrFn7EhMdMgKF3DzYyUg27a2U2GXwjx3NkCo5g5Y2UuNQ78cYbMkYEW8i7qS",
  "key34": "3GoWxjJVaw1ZWQ5k3txJdeHoS6z5w5pWx5HbPHkECATSVg9NFiwp9SKbwBryGMYysxREnBrS5yuQsjiUqobsvxoU",
  "key35": "2V29djzpQF6VjzYmBzQcKUin2JNL3ofkoiSzoN3fe5BioJneDRM8d5wD8EwCjEUQQUMkbL1NUbJR3Pjva8y6gJLn",
  "key36": "5TpEcXu6g8g812ymJnouobZKHm4ZmMwiCR6ob5aoDPJeQDgXgcTugpbhUVDyXcwQf2iNRwQNCBpHXi9Kjc4gN2mD",
  "key37": "65pHhDNUJVob6TzcYeyQBxEeAzn5sYjSS9yDFKj1TZH3BLexSrVUZT62fTnV4ApsKLWwcsiHbtM1coVzPuLTxTjs",
  "key38": "taKYykeC4pPYUap4tKhA8BHzY5NWvPo51coHVX6DaogHcJa5iV8qk8wjzf2p7cL8P11BDaFHQ6NaXJSy5iVoRZR"
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
