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
    "2MpES6ZWCNe8oAgHQqhYrnGAzYrLC2pHiFYC7yxyADbrEHNswf1phY5VyGcTXBYdFaK7wnNNH7ypJRVqMFynQKPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vmhmDeM6gJ6DSjmouRDJgxn4b84N7t93p9y2KrHLm1HL7Tnfgxmun4qSsUUkbX1M93DKDQaTzTGvD2XDEZUWG7c",
  "key1": "2fVm11UepDxTLfW7nkqv7zsmEEzAgaR4DKLmGXKNQUXwipefGq5JmUj4UUE7geFoL4MaT4tQS9nHT8rziftzhw4w",
  "key2": "5HbuQz17oL2NYysN1iJWKoy89sgQaXVQGQfo8xgp4NB8tU6m6BXct6tK9S1ix3zbBsmurGzRjdnENnq5FzPLo4Aj",
  "key3": "HYETYHH1UUX87V5eEVjyDWbtUN5aL9jpkqQJxzQykgqqhPQsP2ZfrvtDHNSkKkipEfM7VeRNz2ySH7MEkhktGBN",
  "key4": "53DGPn35wZeu536azNF5GFCyNwdVbjksrJXPxktgjcd77fhbV3ScKtqmm3WKieGMHDKhYTNjwEjkk1aN8iGjz6GE",
  "key5": "3wjtZTP9YJENMdBvYeEJoSBgztKzzfUtBxc3VZ5cwBneqgt2onBHEa5av2YBAQg9M6PPXcFM7FdSsPLx1oSYf1io",
  "key6": "4CGbfibWYhJh5kFHeMrSuciVixJdYcSUKNyVXTg95w157E6kNFeTB62M5o1SQEeEzQkNrFvyJzVRwwMe9uohwg35",
  "key7": "3TEtVRmWGPnbUXUq91wnMJK9V1bro6J3HoLPz2F1kTfGAmdEmf6CC1DXJHBAyLggSNmzYUkGYpnxm218M5nJ1Bsz",
  "key8": "R3mS1RY91JHY51oXiue8sYL11LqZ9iAopfVSe28StoPREKsHh7gGyg5mRj5SxR2evu7uNspt8RD13bn1mza6Liu",
  "key9": "49xgVaxj5CVhuqL6egoEHKCQ2XGNzvnNgEVSWQeAAeHVTDKBqaF6S2RBZ2rULyDY1yz5ZqLvSTgrNLSKnUt3Ro8W",
  "key10": "3aDsCuJu6SCNRhtsxaSNCiHNMsFTvJfKbSajzyf599RMRpt3EfHDsCMMFPFnBNM2FzZi2STBZpk8GBkQ69wFVUmM",
  "key11": "4E8ifHQ3ynUceewv1wxnxkCy9UyX9mtHgjftw4ve9Mfdm88uquw9L2tVDEFAwSNjX8ro8czKJdjfaakzkxd1hdHn",
  "key12": "4CJHGLLtQCwpsJuZ7hVtTGGN7MpXdAAw6yhLK9nVwZDjiRqCYVKJytw1ggdH9YdA3doKSk1q4B5G95FNCLwuaKmu",
  "key13": "X9H2VAp5J7f87YRqi55a6DcCJchnGuiaDBX3GhpEMwTcMqGqHscRNhHkMCEnDpkhMaFfP8RtgbhbixxabUi7wRG",
  "key14": "HVMF2FN1h3AFNuxN3589vcLEwoi8gBoKLLXGYTaL1dbeuCDZ77SdrUgGK9uE36DdRvLP3nvuYPGsrQUgKFU7HRp",
  "key15": "4DSkYGqAi2dFPheuujx9gH5SEBFgpX3vy9oPt96gYxyBt21e3FVXX5LTL1d4mVV1Zh9wezF5U9DnnmZrw6tKzFff",
  "key16": "5Sg3rRDXQLH1uyHJ6AC7LLScp5YwDfi2qaZn3Xy1yR66zFGC8ZVHUW1ag7jadZrqBZ2udQVxEcsVq7uC5Z5VSXZ6",
  "key17": "62n48EreR2XApienwXFsQD3jnR2vL7N9FFNJNRzpU2ws97DnGespYSCbeyr9ziX1BTpW5g464f8mjQ9MSqsnh6e4",
  "key18": "5GEWgyg7SLZ8LAAMViKmj1LokHRK9FS8k4jiErb1e4Db9yuXhZhwRNVA7188A9iXetpsigi2RjZ9aJjJZDSJZJui",
  "key19": "3UM6SnJfrALxyofQS6TXJCxAeNjCAwGF56dEuB8ftML4CL7qiSzDpRKTma4uau7hPhGXC96siacjvno7p22k7fQN",
  "key20": "n64uLPXdK9RpZtwfqP8thvdT64XLvFc8pbGCqbX8xWD9yvW4eaNLwbEtGKwMkxw1kKSqZgFiSaBz6osBexVEUW8",
  "key21": "2sBeXZc9SbS1eekJ6pzhWk78P6uJYbAGsp5Qo6qP7ETA6uSfwpG1ZQWM7c1Kx4EwZU8k7R4PsY74yUmneUa35D4G",
  "key22": "62XeukkiHHcEEmc7rKiNrhTNpUvnCZ4ncBN8WWqvJPT1n3WVtcN38SA81yJxGDnwLy8HDEs2i1qWZFFBbfKJ2J5K",
  "key23": "4wXhxWh8nc9HTAeXqSczhHzfZ3Nx5nADjNRBoANKK1LRJXfwq65qRAsA4BqKj2iTakCJnBf23gtJrxf6HDc9HWwt",
  "key24": "4WPTzgYM2zeiuBSnQpVm3LtpFZhzZ4he6wnSJx5t1AbiCKMLjw6PDs7iDr461DYq85hdX8QtAqegrFQgA66qWkgj",
  "key25": "21Gt8cp4KRja1UMRuFQc48XFtNg21D87A58GDDnHXkYgNoePJpHyBLk75gVBHuYyFc2JFgLhtEfr2ZSRMb4pznVJ",
  "key26": "58RrNERbr9MbL5RSRzssTwuDryZrQqJHKkWgnJRTQmRRa5N1vPbP31sD7u7r4qTzN7YTBsDuznvHSRrsyj4N4Mj1",
  "key27": "4Zja3dacF3TvkraSzsjvb6UsAC1hMeje68HY1fEGmmn2Ky5sMb6oKbNCeTbJojRvKvqVgfpTjgUsMHuFWNJqQvKQ",
  "key28": "4KCQYzyDsjXYej9fh67F4SQDFyMkNmUXBaZmgD78aMBfz17aYifronBFnkwRgWRPJWtB4DPRzWTWudhmkDQJyUMe",
  "key29": "5z4ZxLAuLERnkKnpeLdLuvs1pyznHVC1jFjbn1QP6mW6YdafVFygZJLqFFXj4bKa5opkL7bSREfi2i3QQixRaAP9",
  "key30": "3gY9MtjiFYjjk9gNtfQzYhDdH5zKhgh276qCFFQ3gPJh5BFxNzbJ9gQCsWZRw7tDVyx36cNyawag9N3sowvZcH2f",
  "key31": "2WyT3mFsXZHkXeaSc7he3yG5qKEbHCFQXEQKpyeUUm5QFP5siCofQTXZE3SpNWNmoN1Zm2Q94jUjrphjzXyCZvDS",
  "key32": "5TA4wsTafTRRaBfEtuJ9SbyoCk6wu84ysKgahGAA3pyBehifJxxVNGmhc38SMjwibkYtpTzuB5QPWqVEaxVH8jY6"
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
