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
    "Y8pfLc5XAemZHjcdJ8yC2eEPgJpHXEBQbmFSn2DYiZwEATkpbtcRNCKGsk6oRCCjoqAfPiDpCp6Y84AjnBgquTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rNZvw2BAEaPmctPmBifjpUhtu1rxVoCFqoPA4Yh5tb19HxeXLiW3d5rggC8Pb3oGKQi6Nu5PY2YCXqSWDfukUJF",
  "key1": "WVEsaqwbAczaeze16rczMwQH2wvkUgC6EPZ6huHgnLEqk8fGNKzMzSgRhwuUQnshq2M18aXpVRmG61RHsVQzFGi",
  "key2": "4FwpbDrhQ4YCMBusBEUaQYEkJ4AnyjDzuUEcUefULsFgSoMxqJgWVvekihDc7w3g8UkTLuD1M4dm3twdNjbNKXUm",
  "key3": "2J2jcQbyCbqKHbyMxijAkYqFe2EkirLo8ZwhTGksmXNjt6YoajsecXZc1wtLgEQr17FDrtyQR7CThY535styFu8k",
  "key4": "4rvu32dBnB1NDiLCREPJcwWLfXREcpf8wYnKQnw3ZrnAyipnrteKcqUNGJivCSv5B8ph5KYa4rnyfJ4oPw99GqBu",
  "key5": "2eHy2hkE4z9Z5UCMXGyxrxSGBosir4dw3xtwoxw7jjB52BkuGhMxzrnQ7b8732UYyqDQVMDek5xJ2pCQVSCQKFPS",
  "key6": "5J1pj7qKunesr7hjsUBhN2RVfqXNjXYKwLGALYRus9kjsNvznRJ9185QoodYjJnMjmBjXvzBkrwHnnj756xvrLnp",
  "key7": "5eFh6EnCFRRTBPjv9KVHTcv1D7Yvd64F6r5n9C9jm8NFzdbS3X4zFo7RxgAcHwg2xUdcSJCCdk7HVWHLXGswrCfW",
  "key8": "3PqcdhBkJQrQDYZmkMqyUstshWnHJS7dN6SFFehTe1xJioytMqCsnRwSoHomtLBr2aMupCf2cghdkQUAPhB5LLDz",
  "key9": "4AtadVaBeEDU6ar2iVLnbs1uRFQDvBW2KwUoegW25pKAao6kL4GzmH34sTDeMFYVzGK1p6WZ7Q4C5ckrqTTjYcRs",
  "key10": "KFWU5wQHW6nmb9pQWa26YWmMRC6Ex5UoPmNXggq7zW17W4xkTy1ocTK3m62znbnY54T7kQ9WJ8qLnAQ2D25KYVo",
  "key11": "CwQoJ6VV4vc4GZ13XgKCm4b4WqfPZGZn3NKLTB42QWNR5FCkDN3RGfMs2w7PbAvFjmYbGKvqUxPju4U9Zr2ac8t",
  "key12": "54oj1BCW5NRDVb7LGLXesPvY86gYJyN56GN8R8zMM2VVWGL6uMHDZXW5yPJXUUjWhPEvsCTinjgXmDWVzwdqNJFf",
  "key13": "6P56RQrzmZJYJ2Vbr9pFPgBBFTZooq18hj5HqvFHarEQFmj9uzqis5HjKPPSbQcLvDbhqZ9fnvid4nXtSENarzp",
  "key14": "4BS7ASxSJRYsx9GrQvYwzThsXmcC6uf6U4MixgmWCHFfeGsgFojNRUKjHeftNQTjKAFDJ3TjH4hSmCKJSRtCqxsu",
  "key15": "5FQGp8ksYAyEzVePvnDYGTpk8PC5p73Jqitrm1go3qFmNFgEMBrGdmqWCQ6y3VnZudUmXC5fvBdcBgMwm5QaUVfs",
  "key16": "NW5M28MGQGMkeFS68KiKtXdQfdz6xq2JuB22sTpAfk4e87zfmzReX4YLNSAFEpbaJVR1HqcTm3Rt86TPpNRMnQu",
  "key17": "4RiSWGSrnWmw7K4Th66rTyf9FsmNLYUzDJ61d7XS26p1zErFVyubMQSgizNZmWqrxSX8J3BNM934b1CCom3SiuYv",
  "key18": "2e5yMKASk8GmmkgJgLSqodTs6tq2dyoxekigYBAXQcm5mniBtby1dHgfcPbPUZuwLUFSxpCmZEFoPgikSNs9Av4U",
  "key19": "hqmutCSJcrQaJgKXaD7TaM16r8uvb2sJ6eAsyfmtDrPwibRgHGcncykoSxYQXWbVu4Azc6bufZvoePXHTy7mFpj",
  "key20": "EAeupYunFyB1wL2WytE7VE4GKurRJDJk1yZpEL3h2Y2iiQU2TDbMm2dT7VzieMWiuQXzJ2EXKJGoFvkdVavQWoY",
  "key21": "4B9XyTn5XvCMDiKx8baA9SWeFDQHPuh11BRCfZe4KnkKJ3iAyccQWRZcpgWbyUPgJRdxnYGk8APps8Mvh9pbHN3y",
  "key22": "5xdL89yA1EmCAzhi59N4NneD8e3YRmdYLjgC68dGvLRsFkzth8ZwbEqFFp4J2hGX8GEa6fL5hyCHKfva3tB1CYMw",
  "key23": "5uo1fVqE63N2R2FWskjKGqfg1Ag2TmSBuQdpLKKE6ZXEctCVyvhyhuf3fqAMNvc4KjsEUajZfwFxxwnxgmqMwipz",
  "key24": "3L9mE2kFeJx7tGAbiawBvtzXwcLpTsj5Y29qht1k21L5bs6AhNy61qudss4L3bfCSasWaZDmymSNGTuN3QBxkCyC",
  "key25": "4Q7oLJAuassQMaURuV357EaJdk6tA7KFAAnWjXZAjuXTw8zx7fYuD91ZibH4CihjzeWcnU86dYEn9x7yAdqvpArK",
  "key26": "59Vy1MxzW9eDUZFXB1kmXqSxnjhQGXu2FHwe5qiDnrKVo5ViC8aCGLpt7bx9YKGuzbHh1z9nr8KSwo2VdyUu9KbJ",
  "key27": "4Tpb6EcB1fMhdJkZuXjB9CVtmRZHfTEV7TwzBVw3h2ka6Br2i9EwswMFBPYsws4e6uco5KNjR6vLX1KygTQc5XDL",
  "key28": "26dH4AqHQT1XPiU68p9xkHU3Pne8TnDeRwW7HuwzgYZRpV7TGdKWzgPndFuvajyqdq7PFX8Zc74c9eBJipzoZo21"
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
