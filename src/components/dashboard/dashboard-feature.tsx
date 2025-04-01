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
    "4JJ2aTvQSy5DewfYukZWmCzsERWBuW3KFb6GsAC6PWD3Q87A4WimpMRXRsYBedHnpb7Hd2EABYHDxeBEFQsfUqZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27kvmmNsVZcvuiNRG4psq3b1mu1cT4H2QXVaj5J2aXpbVfYys4CfLvTtbXdnaPk4zhZaHtnLo6p5Mn3jqoBhZrqz",
  "key1": "4T1AFKJ7bWQApHhVUREQpeJbB3dsNUnQM9P18MWZPnWDAFQw6diSbKmfZrN8FFKLpHtXT9TzYk5Sb9ic2SoeWCqz",
  "key2": "47o8M7xaeiLQye6M5ccCMab69WeN9B9cZjhZLbdpHU5kf23vrYTLp7ZL1EKaqQsQwGiFGZJDYYosPVka9wuQ1tjF",
  "key3": "3PpdgvLkeSs7psHXQPTgVsbh81EyvhhSJmYnj5fcVXkSfRF7o8bez5CfH31s6raB7GhtJR5VrNdbEeQKwWJPKsrC",
  "key4": "3PE4pxJbGrHj3eoCuSoC5Gv8QijWzYq9gPJ9cxhrGai8QwRh6s1ejWepFR4XihJgaT7f5mkkFtmYVDDv34B9GubR",
  "key5": "3Hkp5UFbTHqzp8pGo2gRPTTkhmdrPLKdnK8zLMDNV22NsKukH2f9JQHDguqrRrSsVw2QBZx2ktWXEHdb1CZxkDoe",
  "key6": "4ta6ceXBjbzwnUQFN7TZZphihEGASszuWjC5dTsCWUsM8wjtLd2hRgz2SDFCX9hKiToi5GSKwws5HF3qga7P96Fc",
  "key7": "225izL27LNVMQDKnxpv4TFKxfXmtMKbUYgrnhzSAXQQM1CntEq4nAmjSqqKeg6fRy2nYdWuNC5m6ZYsccHY9Sp1Y",
  "key8": "5xmPkX9hqr75w2MGjFKEzusKK5Y27kijJGvRdDL6qKH35EDtcDikg3ghFMgaWuRK7JwQJBCNqPfW3ppfyshiY9Km",
  "key9": "WYQbmr4xSF19Do7vRQu1cA6R16qG6QbaPHM549jeh9KqwbCp75jWhp9Uy9GRzJjLYp1BCtdmVM6ATw3cYVR4tiu",
  "key10": "4bXNaEwgrbnXq32gY5LkiyJbVqQszfqkxbkHUSieKkUkjiCakdSAGQKNPdu3BmGQdUrpDvkKGpChUpNQheUFtaWi",
  "key11": "4kyBZ5JRvBASxJRNHp2vDXHcV4NeteYhr4brMSTT3XBXdYHZX8Pxa7YEdyPHabD12fwTwiFpGLmMDaBM4wc5XKdM",
  "key12": "4BLhWPLpteAZwat5PEAn9XchG1CeT8iQBzUPxiMCPqAPS7sJ64wAh41VXoiY3XEsYMrCspnqEbt6woqAuenHhAce",
  "key13": "pbf2jo45GFwRLLa6uBpoCfdvmNxHF8EvWAjswKTPRN2A77wSZsdC2U96qF1FWy6JwDVXPK1qPQSHpmK888fz2eh",
  "key14": "3DByHAYXUGfwzYrS7Y2GS9N8GUmbnoL1zmZhJ8f9AS64WV8iGjgCfixfLisnEk2oTq5kKwbsuU6fs5vqaDU8zGSE",
  "key15": "62vxJ447V3MPT3tpm3weDuMFXkyRLG7kM95gqkpFtUi4CiZA1YHNUjmDLEx7vk1Vqvit9zuWtebwKPZVCgirJGkN",
  "key16": "aVxn2gbTveQqxT3DYvS3JF51VL5UqntELnqFn7f1hs8okkJ9UjrtcrmKYW5nwyrbWmcMcZHxbRPPLEjy2NhXTnQ",
  "key17": "4zw4yBQhNMZxemakhg1VgyhVf6bTFBWSXjTQ9xgCSNpVt6Kd8FBQQrVLw76BTjBXiGxRnkH8hcbfqVNrxHx6FVDx",
  "key18": "2TqZK6cz4ucRBAhFWn1PV2SnTg3V1uSPPKwrc33Cb3AokJR4KrxMHRf8se6PoS7F7k7zYFFukn1cneAg6Jikte8d",
  "key19": "ABWqPJYEJo4KGDWEoAoUu4pvKZstK6UVfseQH4LC5D3JKnbdiunVAK56ttCGLW4vXEaXgwerDuth2BCgQ98uvrp",
  "key20": "46nzDbbcyRbamJX4tsZDDiQfV4esQ8g9KVBz3cCC5zc1uPiRe4abtZp3ksF59PHXWXuHpge9uaadQx1H4SRWepx5",
  "key21": "4CCWwavorDbFvSyB73noisotsQtP8hLQRuRgRDxfmvEYq7sA2QzUFDP8Lk4Aab21c9baSRhp6afSuoCWr6RMZYNz",
  "key22": "57jvjjX1njKDCo8uPmskBUdZ7cQTGnBbwNBfKe25uCnE6k1KFEhxyP8YDEeZasccn7Pqs5f8xtxn7YbQA8kTec2a",
  "key23": "5R5sBKK1dACZGSUy5v9rRvH8uz9AfRgPPD4UJcuzAPQFck1iC3GopLkFnDe3x39TymgXLasYpMK2MJVSuggx47As",
  "key24": "2RwC7WHphdosaaDEypVyWEeYo1MiB2QZHxer3cSTQW3wcuDYDkKzEkvoGW418tbu8j7e674baVjPwMLjDfFBzN41",
  "key25": "2L38kiAwn8FnWnHPyTHeKAc2XFj3KD5WniL4HL5iuucJanmg7ZaK3uW63Ayo5DuvKej4DxhUww8rQdWUXC27jkAk",
  "key26": "5UhZeA5PaFSopBkr4u5vYxrHUd3q5ufirM2XdYnGFrQhd1f5Zn5ructgxAKt1MCxUEAX4LbTbeEPEHKPM379vALQ",
  "key27": "2QTSAHorq4q6TMN9RVNjC78baJE764fHeMBw92uAvWXDMfCPvPMyQxqKQy9dcVUfZnsiVdX53765aBvGixDaQxhV",
  "key28": "4X5HXXv1h73jdPxXFfMsKXCP8LExvt32gWEhEKUNfwXsJ4wg4mnndNmUXGSktiPowCQ1KgpUSpfw9YSVeykTdpwL",
  "key29": "4JwvbEVMjKWBKqTqnneo33bGXMyM1Q54wVgggZFdq9NxRNYJqgZ7n5fmCbJfPi1zmEk3venYNdgZfiDERHteq6vP",
  "key30": "2ZzUeDEqpAEh1stD4ze8E48SKKWNUmct5zEuetirpeBApdazFXULgfnCsFoBggnQTKy6YM8GD9iUKX68mzwVV2Fe",
  "key31": "5MQXjr6prkpGEGtkaKxVEgSSyyrJ7RCok8cUSvNfEKJdCUExzWMzKJmzcoiD1ckJPqrbDFhK7DWtYrcF3gRcW5Kd",
  "key32": "5CYr77rKz8uoPU9FwLMw5H7HA3waQriYuXPXoFqiouMXb62nzfwSmuW5d2kBomvAd3qcxbYH5UmnXHvQe8H5cHqm",
  "key33": "2LYWfC2sUrXEejnZ893Tcwcp3bmK6U6iM8ExY64zTtEx7WC7tymCCFLjpEzBxvyYFQG9mpEh75CHv62wpzgquraZ",
  "key34": "5vLyrHwJMYZXMAteSbEGvdP6DkmQGzUJU1wWzK7oEktdx1c5DKn4f3qYK8KgfWfGvEngbbXC11aNgtTo7p12HLu3",
  "key35": "55pHP8iDsDF4nRYNFD1wxi47ggwmxtN2kQ8wLGbjSd9CKmszubwqvSCXDo37zB5fBzp95VxmDiQsZapPqwqz8p98",
  "key36": "48By2EBxd7vKZTMVeabJ5tRqacPrpQhYeUDfHmUxW2pL1ZDt6H69c2VKGDmJHiTiqfih3efQqQMakkCHmgK3fzUX",
  "key37": "2uU8XDoc9ArJ5Xfe66hG1QGT4i7G6AfjN7Ug8vENPRvQDhRq2Y5Wu9yQU9ayzPmaximpaED1ukfRgEb3UQyxPEze",
  "key38": "2sK4oZP7x7XELjneXPzgPqF2qkaVv6YUUqRkNh6yLXbKN3HXvEBFS7dUQtPa9wdxP4BSVS3cV1Wx86SgsxXgrNyv",
  "key39": "2d6UDSfUooLTJviiyhtBjxRTC6eE1wzDLkkaDCJ8iot8pqGvHJBVLpg2a2nNbmvZkZN9TyGxUJ3mviJMhRm8km3y"
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
