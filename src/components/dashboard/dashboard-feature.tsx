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
    "2k51LQnckwCZs5TAddD4ZCvpkt4mZxt3zJbsUsVHKvS4NfvH8YDKQ6owXoGA7cBbbTyC6ZsF17LeobYYJB1zJVYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z6n5rZuxF66Xh149MD6BF182Cp4Uux7ejvntwDrs2VQg1UJmVCvCL5vs7HAUbjYHhBE7booRLyNdjsZhU9aoETQ",
  "key1": "3rzZFACSDSyE3QC634QWfP6vq3AX4y9tDYnYNcBBvHCMcWzh2h4vVgLhxGhqR26omLfeVU1inNe4tnwfQm921f7N",
  "key2": "3J8Tc3nNS73HHvRLukAYAgi72vKnYMKpQ6LoiUKkjxY148nQY3R6oi4WS8uEb6u8mWWbB77EY8BzegyCo1HQt7nU",
  "key3": "3N3kkT3HcbYhydzcG94ijwtizCsctooYQgfqAvB3SgA5ftDxDjjXZjNaY8XF81Aip4a3ZqSqEjYnLr4HpdXrq4er",
  "key4": "5EQ24XzikP1hFCauPvKX2P48P9EPP3ywt4e5NKmtH417kmKoHA6MHMgVHU2QqxQJs86QVJmVvCGuXg1hx3V5gWmE",
  "key5": "3g3VUzJLzjmNyB7ZkEVMLgSwf9EbrQPfJmCM1tS3ufBorSGNAtDXPyFWjyfCSWB5zLZMyVuisi32v6rYk1VBBr7B",
  "key6": "4ZDwbGriJ7boGX8ZTBW9QmBdPeiDSZoufhsAb91SMn7BwAkCNaVgVFuYSjdYe6bupUxGxWMGy7PMexzBE6dGQgu2",
  "key7": "3b3rtwR2JpSKArjH7iv4WrMFYamUTC7kkXcv9BgFqCvJH4kQg7SV6EoAjExh5R7ASNHb9pgTniyPL5tebhwzNSW2",
  "key8": "3SuPHVrUVKoiGhZSdgB9UojEj2kAV1Aaid4ostZxfYdB4F9gzStxGA6PFGkKyEDbWsr7mrTmJy9Rygepu4JB94vz",
  "key9": "Fq6wisvpjfjfbpb2PtauMEA637mk3J39HFCuSuhBPAz1wtb7Q8ZKq44pv8Rt5y2EZFsryQfxrsJT4ggySSANuyt",
  "key10": "52KA8fo2jHp9Fo5H5Dsud5cQmkeiKCVqG7cvPsPDbFmkWsacuPSk1Ag5M87htSTRRFcPHDRccWvTdk23WoM1W8Bo",
  "key11": "35x8EPncNrVSrDjMKwKnn31Zmto5xrBQUeXmeMWSKXHEB5yi2p6oRnUEnTGMHWb1coid3GQvyJNSYHqoYAHACXPR",
  "key12": "2HjJfxHyraLXA2xV7XkG84HErD2LUn36DEmyk62JyNChYfpX5xCoCDKssQm1xXUsac1c7fnK2rwERwYXqZ2RCEMo",
  "key13": "5daz3spwEN7ZGtjSbeib7M8JfTdpUvs157NL46PmMMQ9AziAa5JX2TotcJXJNf7Bg69Sa7gTuMXnucLAhCtwRsSm",
  "key14": "2L9C6RmmgMQeHyKkiML99BnrA36MRGK69DZdPjsUMWe3hhFtauHacTX1pTPBZ6Q4j9CHD5gX61T22TWhaazwajkN",
  "key15": "5Xr6dFPgB1oNAUp5Kahbcv2EUnMQ7hPVQZLJTM7wwQWAbR4bSFar8uvmt9esfopJNwejTFhZSyrDDpJrcca2NLwS",
  "key16": "5mCGZYtf3EwHHr1jmYNYMz1N6gCJ58FayFgURPjAFJWAoTn3FzkbuGq3G5KtxL3KfFiBCTQw7NZaLnPQpqDhEC9d",
  "key17": "2ifB9m661tjTxBrJbGypCYt3WkykZQydzHB3Dkwpqfsj2jvDtWYPZ2iuWpyZcfrFJ2sUyS7eWQAWvQcSgYsBufgZ",
  "key18": "TLofcVkwBiMkCyrBNXckJEPqbNXs5BcC2kXrYhMAPUpnGC6WacXuQRcQ63rfXBntqFV8MGqLHG8f7aZxu6Wsw7M",
  "key19": "237EtMQYtwhQC1VGKBErJzQ2wqtX6j2x9WJF4kEoDFHmW8EEGBSTE4V3EhFQnarpJB1ucoTfXmsoWLLCLCFtpxi9",
  "key20": "2oNg9MMnagLzoGHTzaYdR81Ghs6C1x469y9QXSnPRJVhNwuNdZ7gzAXaonUNkyiLH8kAxeTjWK2pAEJknRwkiDX9",
  "key21": "471cctuYHGQJiFPE7Gi2ipTwRURiXzReLKK5jNdcnErzn4iVtThcJZkNBnGPGeNPaQcAwHm9MhHeP5UB2ej4j97G",
  "key22": "3qm1UHSYq2XSSDyCGeYMhbFyJ3jMz6YUVtm2ehscMHNSvqR2mK5X3LeXq1cb9hT24psZzaGp5Q2BwgSS31feVGMa",
  "key23": "4YjUf5eky6Y1obb3HNHp65tF3VNa6G2nFmg9W8FFYUXAcRid8G95sSECrwspMRRwZUejChJ5U8XhSp6GAWHvMCTn",
  "key24": "5FtAvTurWsbRfBnnuFBbfqCjpbrEQX9kbAyHeUQtABABWk9oyn2JtHfNHXHdmyh1X9SpzKpSn1To3BbXS8DRbx6w",
  "key25": "8skggevRKA4jkRcoQKnRDKaTsN1PcaLLRPiabotyxXV6u3tWaNhpgMKj81ByCBHAwqCXR1W2ncjRV518kiDmvr7",
  "key26": "4QZjHc97oxBj3aFXLVakVExfi7X7yP7AYuEzZRKibbrpwdeWT8CoLhayZGudMZahPnXyJoXLj3d4fnEs7isonRPH"
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
