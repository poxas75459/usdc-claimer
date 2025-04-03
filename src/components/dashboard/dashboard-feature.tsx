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
    "39phVWbJkbEvEzBsA9yTs7UxCBWaYwdLUUQs2pNAnZVMcfwpTmAkXN2h2fVct4BrQchUQ6vazgAQXDdmYMEh3BYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LKQi1YzKaG7w3uWRodMWqLiAjeaDfGXeFHqiwG9aA25pRfZvVi3GiK5JP65oYyZtGb61oNv6YEjyQJjohxfnyDj",
  "key1": "3MkX3wmoeyMwdoy38ZFWru7QCzbqoSWz8RAyBbfPW1EdFzkC7ssLoDa53R7UGCUby2kbyyYWDR4UdnxZ3awokwGU",
  "key2": "47mabtqbAV2e9dqxRrGShz84o658ycsJrwcWcdjHeMypgqhY9g9EUmDiKf9Vu6dspEZZbS2cVXk6xE58yBVhSt8V",
  "key3": "3RopMfdTU1pqCzVUAUGYD4MWjGxmcypFkCxoJooUc8w9H6YS9mdB4KZpjdRxVhFpUoEvaBR5S47rs6jCY8XQhU77",
  "key4": "4F8oMaiom16KNijSTHGou3uiPZn7giekb7vprD7KV5VRuZTA18afK4J1Zk2zRLJvMX6kYLSdgioCgLs9ZanuoRCf",
  "key5": "fScejJ4wr8jng7QUoW9dSovhrV1L7GXinJkz2V2Lgojjc5yZhmh2vkEHkSyjugu4T2ENDpEjLwtDz9D5eVdoAqo",
  "key6": "3jNmoqSjpuLwGWLiirTNdkbATi1ytFDRtTFhXivVxwER6S9NXRzJwa5ZRwbMARhPzGE8hHu6rTBmJq6XLUnrT5oH",
  "key7": "613Vma3n3ebg9yLkenoHnM7z4S4RRs2VNYpKbbqMHW9VtmRQc1W8jC7mMMiDJk2aNkEFesaTCEtPjbonswFR2YKH",
  "key8": "3bkBNg2T1GmfFCwyU1N7H8fhZckv3Lo12VenexL3DcekC4JZ9UGZw3ZmS42zPSGXDf5ABCuseH54WR61XjD1EUqL",
  "key9": "4doCb7dPDskQj7g19hinNUgRDXtLnLPeyPUwoFkoXNpucfCqt7fzF2MsweroSC55ijWX9R6LHTR38jMqecHnGXHo",
  "key10": "4fNJvbxAEuL2rwKiEkiPVivcWSvPs6KTAzhcWVSwoqSGAtYgp2tPiULDDHPUX4K67DS4iEbVB63XKrGnq2nAJKi3",
  "key11": "2Vf7RG2sLPZGyEKfqPUEekMLJfEfCagkK8CCgrs4sx5Hoam2TrkztamFMHeamS5TwBcGehUpm9Q2H9trggNDM3hM",
  "key12": "5peXiVSrFGteoAwbRK8qDhEP13HKohZHSFdwEKVxS5AG8Bdt46jqpiESkdLatxoBCjV4t68F6gQ5Sn768EwWGJRk",
  "key13": "3gnrPtZuFVhigGPonBNAspvrX9aiLDSuvAsy3j8Vywh2pKYimWQAT4zXJMonbzi3n44r1ZtjQDSAcf2SkoeutcHg",
  "key14": "4PLBaCGiXrB5YDZ8vfKVZMK4GepGHcTxZyvj2Nqqb9EaSG2iaeiM2fuSm9WaeMtWat8FqvPRBMy7Ph8N3tNnRCuU",
  "key15": "4VLjEDmCJYTXZ34QN8EnZNoPdH5YnapkBQuYjRVBBHAg8sh5DCcrLEJ4p9nXGg3NDF26ZNYZgruBEfoB5xjdGer5",
  "key16": "2DZo8gVRubjXoRednt4x1mh5K3RZrkgB9fm9SXrKuWL5ScyL7QCJCkVhrthmx5xJXmiQqUmag6zi42DfrwTQVPMw",
  "key17": "4AYXZzREMtM87PdtAUkbNAQGiXtjk5z9PzdrQjZTvVz64WyzMTFwHPe7QacuSzE3NLNJSgyhDgjH6bo4j95AJRU",
  "key18": "5MZVpvubWcL5bdth9oxxMQBvjiFLEDPtPAqCdf5ug9gmCtfH8SoekSwhZRQxRBwe1nJEA6tqCDhv6CyecF6YSies",
  "key19": "48hQQaQMGWj1eXweuG22rijTKxUJRUDah1sHG9wkGexuMP2HBbGXzTSvJAGDw831LPNxn8F8bpMWkjrB1DsQJvpC",
  "key20": "56MnnX44iPbT9Rin5vj21kr23TCPDGFYyM3h5NxyN6bxrdT8Xan4188tFaygs2nELhwv4D5dwK4PSqpY6vP5GRQw",
  "key21": "3TA6DTzaGQFVtFdHMghe6jaPYU59MkvPdVJ2Br34NV4B6f4iehWxHZuGsTf2y2T5UANDHWn6Qp4Xf9reLrwXgTHQ",
  "key22": "584kUnPbP6zQDUuUHLSTWkXNWgGjCW3Yyd1m5DEdzgqDJUn2tQh2WcJVjapRxSd4MW5yisDjL4veSrocQ4qDUpKd",
  "key23": "37eoaxHQFthroYnnW4KS2FwYtBAGXj8HufXxK45VfUsdUr1vahi9xQVymoRN7ZKsSbQHRquY7ZTeRvdWCidnp1RW",
  "key24": "3HZqkvv2csNL2qHn9okEw3UAFyCzXDV8paSzNPXtd3HbUy1Lw5MBJJXuAQpSKngUEz8Q3vZ2RbExeDda1mGe2DU5",
  "key25": "4f5eEun9nDVdYAUWvwrtk34W1neZkJVWg7FtaDjBSnuCV8GUucT3q365MjKWsaxdygvgWReK584GFtsLEMyBJBwK",
  "key26": "CeZ5pBknen2a8UpBMFBpU9kKhX2HzqUSP7XX5oKwZXTcSE4owmeDd74SRNLtuym166LyKqNzXsFEG5XtE4XFa8n",
  "key27": "3E24cKebUS3dAzJoxXkgT22UH7nr6HwcA7KfRnzkYZ92M9ukNXvc2EhmiGMe4ZQ3n9Gsnkg6j3Emxgx3vd8We6NF",
  "key28": "fF25MASa32q2BvP3MeTeFavNBwx5DDiiFqCMqBDy9xCqQSACMEgRNbY1wGuHCUsQaV8bjRCywiKCP6chBXc8aNr",
  "key29": "2AzqtRSWfy2bhZuukBJ9LrZdHwwvtzaLZycBbxpViYZqETZo5ysowc5CQ37kVeL9hE64B5S3y3vQ7TM8ean34dh2",
  "key30": "Zb5hfDHy5kaVgcrhbSr7zcYJyGggeLRa6EKSkkrmvJWgmydezavs63wtLXCuk5GLRFkfpuQxnMTqsfrkKFLEbSQ"
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
