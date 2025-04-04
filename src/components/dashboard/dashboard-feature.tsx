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
    "4WR44waxYkE4hMNsmLYdVzbmorNjyEWkw1xaRoWM3us1V2kyRxbsXhotUws3yVPacsRSDvJ4axZrXFdMdiuqg2e4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jS6nteQiDb2X3KujwP2VUNTChYZKkaP1QUHhczPpeuGxWWaSPQYXubrWdhG1mDM6KfCd9tSWTuJqiHgr8odz5i6",
  "key1": "6vxpkDgMsiZbCKUvQhLWA2u4NRp6YZmW8Rv877gBCTWjCiuA8Vp8atuRVEZURMvKJ3huYizSFZKzSWHzQuC88Qi",
  "key2": "3QHhKNxMYEdhUVkRcmtckVRhbqvQFQhx2KjRW9ZpoJJVRjp7zN27qj6Ed14LekvebE2Wip82rLPCNP4NJQnuvxNo",
  "key3": "2qMxfHmhUvNJf7iXyAYimtvHr2sZEBaKR2SXz8R74tvQb1p7kULXRZz6f3AG6vju4M8GUWEfA3iQ2q8HQ9xGvctE",
  "key4": "3GJx4K2FcPb22kaGFkNMBj11h7ymrRLb6DvTCHXSe8YWCcn4fxCzLPCvkzjp5T1TBzNSebchZYCvGKxEUetxDGWm",
  "key5": "Th4X9BVLUwi6Cq3JcAdyhy7pVbREfMyu8f7AqoXGeqYBiTayUbBZohD4a63zLYe35pQycTHATAFEfbZjosGorUW",
  "key6": "5VKCBfVkQCpLxdSYBAUqNqbVvwywvY6qmGa351c6YDnGZ8Q4BGDc45QpbpqvBtyZJKg5DEc3PNKwTMEndmDkJhhR",
  "key7": "3X2AXKoDrFa54Sd2o7aZcCunRpsbjs4pa2zMEBis47rMBo2ifA2nUrZz6mT9zXELKwJxg8fMD7kTc1bhtqP9EVLd",
  "key8": "4aEcBbFWaik1kw46RnfT8eGQ69gQGAT7DvxnMjcd9wzBCvoVFQMaSJBTJvrPionbBAeeebecsVFFEuNTxyUwDRBo",
  "key9": "2TB2u2njvZhq7ZaZBbmeruBT1agqy9eDoW23e61PFrDV8v8Gk47Y7wvhCbfNXadhvdefkd4HLi7jrjzmnhXqaV7F",
  "key10": "2n81GYz9TSgYWT6mWvN6DQDA2vSMAks3g8eTodTdWCM5WYw2cypy8HPQwQGQLzRgtADLEPiLrZaLHgKoJjW3XMKM",
  "key11": "4HadknJ2McJRMNz2Vz4YVd4PMWTikdrciAYYS6yBCFRSgEtbT6fhiAh31MJsQLsVhxa9HeQXbePi9LchrzuZJvxw",
  "key12": "4aED3XLiBWaN9YetWsDbdLW2DRzxmdch6XrAiYcxDY1FZd4rx414vr1CPVQY2GGzfTWSP4kTKqNLbsxeaji1UokA",
  "key13": "3vHAMmzsJ44NFxjZ6kLWT3vQL3ANhdjjAtmaNwyZVTTLGN5fEpJJoQHHemgo2YPvUZvwqVqK5n888q49ca2MV9JW",
  "key14": "uamT8h3NgiikvuamyVZKvd8RXEoA11vKkR3B8XnEd64YoKYDpgyovhrcszrrkQUGjNcDDeeSTFYahBGktnY728K",
  "key15": "28EavZagRoQaEV7LHZFtxShrpL3kdqYtK93x6UUAsaMNrXk243FQuNBnxsM7qdswL3MeEmATkLUE3cVjoeup66vg",
  "key16": "66LtwhCoAVNerRh7LJazfrQJxiEnzEFonie97J23rKNizFwpkWWpptWFgMjFjs1X4DhnhUgLLkZ7jW86wfEg54LU",
  "key17": "5KAt7EH8coFRSoAQuQYw9ov6yxZVDXHLGzhrDc77JapHeHkwiJX1jqN2ZJuo8RimHdp89wiWT6r7W5nw5jUKFaHo",
  "key18": "4YupUFBJccfD2D7az7ut24GPA53TSV5fGfYreyzEzUYyN7969LGVsSGi3zH6DtGax9z39NnYJsN1bNGEAstsEDNd",
  "key19": "7aS2SUdUMnwpgrUCE8kshQJEpzxZm3HoGEejx345mq5WgPPf7NV2tfHwv7ic1FAdpZwMqbv6w2wuosBUnbPgBPY",
  "key20": "3SbrGorjSX6enwvWMBmSERMG76yCMoGhykrXqTMNVJcKtWps8PbW7njDGLwT7Tc4eKqC4YxjMN2GAjyeuvsAVR1M",
  "key21": "23K6SRoCVGxzYTaSx5wGiSF3aPPyF7adrBNhxM4TBeoDSas5qhLm4YTKWLiY9XfqJWiBLDfTk5CTK6Yj7NCvAi2M",
  "key22": "4j4uneNShAahBxwavzaJX7X4iYZwf43jbREufRBUuW3tAcxXFvAFj1A8WtMsiftcBRPDLz9z7d4AfPMWTDYwWchS",
  "key23": "5AMpuQUXKQB3rmWArKgRuXq5fKorYM52wMsVqrVrE1AexcmLxnDe2Ns9BVLS5xRVQo8hjfWmRRqeaMmQ8cLqJfhv",
  "key24": "zcFVaoyR2Q1LF3MkBouLdAySLh6vBiWUYKkxkJQ3ciMeYmnmLURkJ9CZpaXgYGXmcHZohiGU9gJAj1newDcwo1q",
  "key25": "hd9ZFx57sfzPXLsTmYFpSd36UUwLUDV9DxC7RvTdw4yUDMoUHXrm5FLP3pD8PSD25hkQfJJKkhGwtDWwCWRUvYa",
  "key26": "AzjW4PLMiPnN4c7YMYhp5CCpxv3z82ED55rQ9Lfi3oxBPUbakYzHG6m7to7Srq2nSdfJpsvoGvUNigyRrkKCwiv",
  "key27": "271mTEjZVPQrnBmPqgzTcr3nTEKSyJdAbbNccMkRrbB2EPVBrGSjW7tH9GEc8dxXqXjwotF91asTWiphHz5S1Ydx",
  "key28": "5MkAZtia2DFVx3GKu5RpvRtqNzy2515dpY4JqwZiegCg1AukCP7ddPmfqWEWL48nhRrGStHgoCZsAr4pGuyci32G"
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
