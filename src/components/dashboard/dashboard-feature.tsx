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
    "4WbcD4jFa6oEnNDPuqBLJo7kvsZAKnNrwqtQFfzc13evfXYja5qpY2u4c9QMez9Uwh6eAYXDB6NAVD6bsLQh1pa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xJYJxYGRZPRjYbxWMrhegwcN5ArrBWx6nqRqyJXwBjLn1HULKEiQ9iqDKfLHfGN4bXRD6SG2nxW4Kneb46ZaBx2",
  "key1": "2GYovwngsao9RtiREsqQee3nePvWEiPsLtnDZsDCh59ogBM9QZfmbLQztHX8jwppq8BomEQWnF5v9ogAuwggagxw",
  "key2": "3k2hWUaPa2thdoXW3NQjs53ibNMwjWW8NGfmXm2EniJZ55yEyjNeERbSmyFhuYhcC2RV38o44rXTro6bLLLeU3wW",
  "key3": "4rST2FCozC4fvm6KoZjHhsYFs8NGtWEpuApLyRuityrXAGmBrExkMw9YYQ5zLaoUJNXRM2VcYiYyt3weCgojfY1X",
  "key4": "4QumdugntasnRiyN8T5VXy8yBdE4bgvWiRAyQyn3VLDcDtSEoDcYN8s8qVzrMFkqQg8atXL6tUqhH6LmBhbjBy3A",
  "key5": "r5Xsdkfr9ZQzTZkPeEYmuQaVxhLH4FS14ECHXSFgxYhDkbkxXujoW8FTTeqhwPSHY9WH5QcFgMdhySNT8Np3FbB",
  "key6": "5AxVBSMMK98R2xg77V6PYyVpwV4XgJxZurbdvCaeQZ8TbMNT4EJDdsAhfL3WiEmSuQebYcYQQWy2XMGMVbABq2Cg",
  "key7": "q1ra388EzeKahHwKcj4mLLTXk2qa3fzdDcT98dbgyGTjr34iFwbaPeG1XKLP4MPZRKqB4HXx2YQPZP6cyxKaMeb",
  "key8": "4euy6s9cfCDEv2DruP16chXDUL9UivgMyjuBu5aDieKzq5Mjg3QpyEsQGxYWSb3XPomgyDA6eGWsHEUs43ixV1Ja",
  "key9": "429VH9hyp9kW5MJZStJHXp2MUZEbY5WrPzT5F9cfDxt76idQ25GxePwW2gJJQboDGyo8AoSQuBdWwPGM2ov3b8g3",
  "key10": "2vrvaHkPNiuq398Dx2dHeSiZMe97f92PQjL1x3YBikBXrXqh8zL2rpxy4wCHxCTopDtZCLq5QoyyN4uYQLPxLu56",
  "key11": "3EQ9qQECoKhdRE5njHLxQVRg5VGrTzmfCoL3qQtf7gvUagyfM7mmSqdSJMcmDPvRc5KnofirdUUqqZT23uVyCX7n",
  "key12": "3JUS6yFfH9z543tanEimRkNpQGdyj7ZDy2GTVnGJVAHdNn62o5jDGkHyWvHqygowF1DwXF434JwvHnbsEKugrbaF",
  "key13": "2khyaLuiRLPWSYxruBQsgz3rma93pW9uVBSqoojLqd2wrGBTQ6s3kgttfmMsicsTBCTptNNNcUJi26TdR8A1qCHb",
  "key14": "43r7wBfYgGotDn79PNBAkTJzWB8B6dYGNPB4jY6fPFQgbE5HJASdZqUYug8gq59zijtvnzRX5JnfXd599rUhL8dG",
  "key15": "3wqroVYcuASDSp5S1J4AQUGRdYBz7tpN51SqJEq8hqcb974Vex1gGv2Bm3EPVZmDoK1mkv5SxhgBqvU7MSeuL6Af",
  "key16": "2ZXdKhRngTGj5XMrheir4NuQDvZoKVbmwtbK5UqacXxqKHCAH7avwch9UAVDz4dKpjzpNcUDPC8862kUiYsmdWj9",
  "key17": "3obwwxzhP6eEUpfodCsrTWeqHkprqW1dPmHbpvjaxYPNXzpThzqBmiaAuhuTYSEphJbfkqjzb3F7WPMsKLefNSgv",
  "key18": "54aeRuktSkrf1Kz2qQcYKm3VPE2JYREe77tt7H9uJnk5Hacy1zHVGFKYtMfNDg1JJdP6A9Aqc5XFvgLcUH1ktNP4",
  "key19": "eitzCT1U5zBHtrJcZHiWwK3xcTTZ6GJ7D9M2PbCt2vL5apPdVmcP3R2DTZEWbBSkQfY7PPaowuvTtMNYg6DKm1q",
  "key20": "3Xe6sNoTny8Bb779Z4QFKZ2vLqR626EMDgVWjaW5H7Bzs1LNJr6w1eP97RJqNyXFi2HbJWR8VoXMKTsvA4ce6zC7",
  "key21": "5MTy9qC1PK6J1TRo34ZwUT4tB9CWcGUtoCGzMwcaMjjcjFkTBkESbKDL4hQLkQM2UiAT4TYgf49Pa5MVmqC8FPpD",
  "key22": "5uSxW6tV1YVYHR5DWaNZEXPXt471Z7EqHN4VowhZV1fSzvyBMWmtVAZ4U9yadghTktbsi9aWrA29YRvTEP5oTjCf",
  "key23": "4jGykVhYb4RYwC6e9BQBiStU2gWzKJdnCN7uPNZe843e4KUJV6Du8x7X3qT5xfSa7uyhQhdgsM4DxL5wNX7Ss5mu",
  "key24": "4Hqhet4eU1cnjyF8YZJceHuUKT59KzbWzj9dbQvW3wvExVEXvrVwDN72AkZVi3i8oHwazdf1vCSwpKUzvrmBWzZM",
  "key25": "3CZ2UieSYJ3U45wK6U4bbYbDi5zs3mEsw9M7pnm9ynEaAuKzuYgK6WRbSjZFzntMsoQwihXpHnHrSejssDQez5pW",
  "key26": "5VPs3k5QrTCxS3Qw2fyqPkGc9EsrYYd37r6puahnYeLzwmFUvmMfoCkwcXSmMBQHvuEnmtMUiHS9C9LLejoZ6Fec",
  "key27": "23AeNgMYGPNSeowB5Urx3URE7APiwD9HV6GnREbe9wx35p6BkrmvBCk8geEwNtDN6mXy976Uiu2itZcPRnwWofYE",
  "key28": "3rcnyMg2uxR3Yu4DBV4cLVqL9C2uvcAMc3e3VVZnDGufU795yBbF6cH9MYYTVjPEzd3aUXNPiVtAQN84CkQWWxf",
  "key29": "4YrA6dQuG77ASi5Cfb8DrBSbapNue8jQwjT4QiftezS8DjGi9jN48D1WvTAKp13sAneBEq6i66LR57gW9ZfvyVAn",
  "key30": "3LNAgBu2V5wYYeAy5ux695jViaMzGvxTaz46jUcBWEhmw7CJX1JtJBCtyQKJwWGmXUAKQrn2R893GvDJQL7hVB4s",
  "key31": "51EALSRjXhA8tDq8J2kfEsvcQNmJWecWbjqA3j7TFJ3Yw2AANJaWVrBeT6wPqVBZLyaSKrN8FtqBVRXw58JphK3p",
  "key32": "3MUjCkprH9w5GoAQGacWRM3YzEenDGPSVSWnX22xCycmY82oof98C8bsojywe8foDUtDoXyxhZkejn2RrCDTJueQ",
  "key33": "5rdg8GdJdzHHgU8AQv7wdfBy56VJLAYx8iHA53MWQuWqEa7k9NC5m3FUA5uLiyufyWkghm14tJMpWrcXg74orZC5",
  "key34": "KZFjfmUaAvW7vMmrs2Qvrsw97SRSd9kLKtCZbV7QhH982Ew9PaSYxwAXx4573W5pDJ6au5Cr79TYFV4uSnkC1W1",
  "key35": "5Vwtgicya9zYPvGzHKWKj6vUY21wBsgRrj7bgkQZZ7HG7JxESjLwUkGNNBtopaeKBjE6Ra4Abo6CrRPL759oatWF",
  "key36": "5pces3ShWaEhDcEvmzBJXbZws2WwZema6CZjKBrVDiwYgXbsFAjkuDApnMEfdSStXs1DK4Mtcug8PUsELDSrKj9W",
  "key37": "3mkd2HqbwcaFi6NQDqJG9XX3qoKMxshNATEpHRYYituRtLJ33ELn43r81RMprFRofyhbh5e7Mwm4ofq24SnZTxhU",
  "key38": "2k2AXdWMJR7RUdyBEWcP8Ct18tf8eBDeVqtHpXtGK4JM7VqmHrfUpnqRF6B8TzH6wedW6XCbcPS5gDS6rjDAnBrD",
  "key39": "595LRAXUAENqTHmvX6QLrYRG61PtgYwnrVakfzcdUUUkanosSzqK6tw1rejx2Sym6cRFmAk2tLjXLBTEJXcsatpt",
  "key40": "5YcUzozxTUVfn3KZoZQT4e7KB9bGxer9tLTvmQ2ZnpFeMTThXZx8ASRC6nAdi1t7hCsWARFY2whRqCkGLrdmwbjN"
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
