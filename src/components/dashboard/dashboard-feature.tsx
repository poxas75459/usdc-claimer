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
    "5KsPJqXoZbAimVMjq2uC6Gfx45qFLr8KLTVe88DLFo4dRNH4D16vtjE2srM9i2GJxTk7yxRQ81BxaYesDjEsiKa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y9VT1BJwQKiiufjdaiYkzNrCx3XpzyrNkPZUBc1XAXVf8NXigzWDsnHhynVxdf8kHYcdtR8SbiYm1h29Q73ZDb3",
  "key1": "3BM6kZujUBk9Pg6Q6V2W7jd7ZrRtEUbdBkn2GU7Jm7Cmqwvqrm7T8i6AuPTFE6LZXrj7QGvSBBiRveJPREY4ey7e",
  "key2": "2RrXg1hqmc8wAnULi23KeYZey8dtHcPbGmJ3srUn6QMwZDwgDwqG48iN5QPwuKxqU7FaPLo3PLeCuB5Axnpohg7L",
  "key3": "GXHTyVqLBZ5X9RdiKz94GfgPU8tnA2kDsX26mVAnpQs1KEyXu4MfUpnB9ESgEgG2zSURiVwmsfC35MS7f6igHMg",
  "key4": "2tBpVe2yt862b8ZmSDAGuCXBsjsyfrQZ1z5cKsEhudGNpYDfYDKB7sNmKaraLH6QJdYwpTMeYfDTuK943GXLBosd",
  "key5": "4Duyr3jNS7nF4D5D27V8JZ7R8osayTtPC8TNfq2QkHc5tiEUumB34sfwQwucRqNpGGgdVmnBbSPue7dd9uRYtt1n",
  "key6": "2W15eV37rJFcvATBXfEiAkFRMF5CqABXTosKiLaqnuUqn43pz5hVERT8PiwFSVMhZkJeksDQcTNgFYMzmNd2DKMg",
  "key7": "TuKmPudX6SNGkLBKxLXA3xdqbvc7VQuYjCt5RnLiFNCUTTdEDLj3VNi6PUkKgCqNM9T6GXsJgbsCJxULdR7xesV",
  "key8": "4xpLVcbpGfwm5eQRZUqA9xKvrvHDwx1hkgfZRAgs4JgMojCbUQhCFsrsi1kZYAtGRJhSozGskzz8TjDNghrzYXGK",
  "key9": "4kTEPWKA51xpFa6fPnb6ofCSg6cJnHvJ5LBRhxt2Sw2BbrGZVN1iAAcH2638qzjtLoEdfLJDWc9pKT4DNtETDovW",
  "key10": "3bCgwNLvYAyUVrHfw5kzdsLW6KbBhwMfLGjdkcrCrkSnarYDcWKsRBU6uPQYUqpBqqXrfha7vvBDQ2uFaJa7LAtM",
  "key11": "3JK8zybWMctY9qcdvMSK67WJPpRdq82pADiVh7sn962DkF1xqruyZMXTSUicQGcgf9rmAmsu9fwbzrhJboBVXy2p",
  "key12": "3kgLfxz8HjetNBTn93J1gTAhMQP9JLUZQSf1n5fEcxcXkmJcVZ6JVa2qj933nKUtp6Wcd8GHHSd6UtcHgvtHJugq",
  "key13": "4VUTmyMgQ4y65DXFKupC3cyVr4bv3uP3yhTXmT1hyoeBamDZp7NimUfkreSxGP3xKHH7KPtNaqwrALfUy2oyR6sf",
  "key14": "fhJMMacurhG6naLRcJNZsfb2LDY2dZbuzkhNXVyDTy6gwu9tuevH6px7g3cuo3CAwHxRPE8YYwxPcjA4Ujqq4Fo",
  "key15": "49n7ToZRqGePTCZErztsmQ34PiLFAGE6tHyteNJznPQpWHckdeXY1D1nhuFfXZgeSCdZsyGks6SFywPugxjJ1QUf",
  "key16": "5wV3h24ZaYC9E5hunG2tgqNEQosivv3JhJrZjN7ohF8PpTUBBeDr4v2tUTTGjvUZxX2a5VJpNNZrg6mdqCR7Ct3Q",
  "key17": "3VNZpU7U2wgyGkxPZdKFh683twqMf77a9CceCDpVA9qrUQG9P5oK7kQMzrf857TXkyCFY5YTYQnfQCDSm39cxoEQ",
  "key18": "3L3bwHscYwwYkqweNSDNLZZJY6WvVL9fKJeVYQnhXjLvmThCHBoxR2j2uPhUd7M74RYjDwfwKddRLKhXVNcg78Wp",
  "key19": "53LSL1YpETafu6MdryQhTtYL39NeLRDNVbUZu7ZQLKRkUJcLJQcX97CRozrFHYFk2jih3vKYZq9b7yjVRuavKP1c",
  "key20": "38zrJqRnTBnEZ8DEKcC6KDs29mWZ2zw6ABC2vZuKUmk3TbuQBTHTPEEgHE6iFwwxqAHLKkggnt8usRR24mRLm1H9",
  "key21": "5PPsxf1vXjjfUfswy3zrPcggbq39hnLtRiqdEZpfjRvMVWzq8mDUE9kmGa4Wr7oLfnPKUJYJGfTCQpYo35df4mKQ",
  "key22": "RmGLxAdAMq7bfk8FKArH17dLLYoE9f5bjUP4iv3XYcs2xvNAoNvjEwAB8jQdRgpfCLSYCkqXXrkanezRFUeRheJ",
  "key23": "2oafBryoSorkRnDmzBwTroiUav5hNsn4FX8V6AbxyjKuv6rY8eK1aVNGhhJdpHDT7CbMwgBjTedfifjadEQR44nC",
  "key24": "4Lj9A3GyvumV3rCw61frVf7ydm7VbdEPRQLeheineVEWSs75pWhnujBwXUKNFrfH2cgFRqA7pg4kjg1iT3iW6kGB",
  "key25": "XDdEsnsYn2qS4ZaHsBtfBW2Pu5DA6Lv32DitEAxZS3ZyYvE5mznzZj8UvadJ1Wut71t2SNbr15JBbNg5xuycUzs"
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
