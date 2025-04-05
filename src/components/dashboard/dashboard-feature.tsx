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
    "5aa6Gz5f3VoXmQgCrhBfxeCuUYwa2Ukyt4L7sJ8vE627aBxTuqmGs82b6CVjdiua5imyogzu4dtdHAPXzKRTbXUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C16kyLH3vLrAfPeGBry9QiaNGiZG2rLiyqybXt4gM1BB79q4qGbyMNtWME8prTmmRuHrTko5sdfo416DPxqDUFS",
  "key1": "3gMiw4ryex1JsDkHErSbwhLUfMQP4FyWdH2T5xbVVw4uoFfhQLTMoKEKPT7cEfZ9ZS8G8AKx6PrDQbecpKRQTmxA",
  "key2": "26RdUc3Kg6gGpHkP5yJC3gCRzEgEQJ8knYSfMRFXLJH95UC61pxMqzhdGYK3caKNidhSk1sma8yR1oByXeSB9bio",
  "key3": "63Bd4u1qnSdYdUQi9xmA9WVfwoSMGd6nXjt7oSvVPgyk9uyaChc5aXjqWmRJWUkmbhgeW2TA7ZWTcLC8w7oN6uJr",
  "key4": "6bu8eyu3bb1RaFuqcoE1rDaKdAQmTdE9ddxgfzvq422zkX5nfD9Rde9ryExGruZxZuzVDpffrGCNAY1dBqWtcCi",
  "key5": "4eVcCiddxS1drWbAZRbJ2AVnvczWGJWC4x35zGHaLEMtmc5QyH38Ni1tsTQv2eeP9JgNWzcX3FYNSCUCLUD8QG1g",
  "key6": "dvomfCnyAABjKyys2bPQ4LmmL4iMoHBbMQmGfwRURrnZrqCjNKnLb9yUKTrCqNmXMFiamktxwMUQKPYdyZFNEfW",
  "key7": "4dTugNhiFUyoEx6qnMR2mWerFwnFWwwTYFmd9kktaP7itGEkDX1digkutqEjha5tZUhjU99MKXwPgsmBqNcci3ns",
  "key8": "2RJGqEPAwic8a1XikzrtfVcmWh8QZazRK8325aJbGa75r5tpCg75J4J7qz3Gp7UyEA4AFULRG3bESv4ZUT4v7xUF",
  "key9": "4kV8rB5ZWY71vZUy2TsLFwdSzRAHgaomvsJKCEbS5T2wet1XeC3cDu5J98ByGP3Zksw8ZHNFDaz4kuJxXct7Azk1",
  "key10": "3aGTCjtx8tJnG4Vrcn2FEJBgWYrNo7w7TDK1G7qjMzYYYfAxsXs1R7tPqmjCxvWW9p3VYwgkFXYEAZFLYM1xsEys",
  "key11": "3qPYZBmKDeg3QnGxt5cCejXK2LnQDCv8wE1sVMwwdToMD1ozab9b8y1KE1V4xT3iDSZkg7AsqoNLrPcFPrnVN7nG",
  "key12": "649U61YAEXCk9GTvFQCTGSi3iE7jRxZhUAXZd5VaDd9PmpSoJHuG75wWYLfVR4yzrALDaR7GeCtdnCJdFRJ2RDCF",
  "key13": "3DrWrvmidJe9vo5uGviANev1MQKcxaW8oT17Usq4rLetk3RJRQx9SDc7Js5oQpDmQuh8pRtNfecudrq7S8RgDDuK",
  "key14": "47V7eyq9nPc5N4WfDLToJsPhLb1SyYtsk1RQNu46WAGpgJV9q6wMhwbEMyEck4TaQQSfLaGSYhyWpSkS4SoYMRnu",
  "key15": "3Bm6F3nZntbwAEjoccGbJHW5Xpk6S9qnPqFsN95D6W2YRCQAtx3N1X2g75r27dwafUkjvKdibcNc9CvwhfRrRLjU",
  "key16": "2LyPern79roEnjS3M3pao7FrXJfR4U52LuKYZvLRGTxbXPUNuiTm5kSGrJ2mE7kapq9GHGfgE6h5NGiuTBjYnTLD",
  "key17": "3s2gA6Q6XjPYQPEd68LGRMqKByaPYKfhvkpCP2fKKp8PddAaGU7ZTCajfeCFrC6G2koWLZxFDdrm2yVXaj1E5oVV",
  "key18": "h3WJUQXhpVvUUuZ9DNmozkdriVRykGeatiPFe7MdbHVdGNbLNSJch4GiXR6CXu5oRmhpn9H8D8DsRWdnWPkR41D",
  "key19": "4muPPvMmKGhgSqZAqfyLtngTFcoChk14i1DkF8KKjmrPZJ1vHw3moDv1uV7XwtdsrsDZzyuk6R35mG2nnno9oYEh",
  "key20": "2dL9AfFdz7r3JRsom6kSaoBEiDiBRH2Yc2UpntZnJUY7Hub2FM3q2is5JcNAr5Tr1h6vhGDbkJ5pw4cg3TEjocmf",
  "key21": "FHVV1JPENSbT5MofP9tYKc3gHwuANJG3GeSkv7CvFVBNfhvvmbzFTDZFo58pBgwWcRAhdUX8uA6Gd1qvHmvFpXL",
  "key22": "3sRCyMM1P57jwzyodrAUUnpHDd3dxZo23VU8BKVd6vJ2DoWCZn9bZpJZumhfu9hLSMUnge1xXHgibqMCm3SnTz7s",
  "key23": "2sqtBNghsid5N1xeLaZZwVjVoRoEZVgjCyPtVZcWuUA5m5rQpqdLBtNs3Vii8TbUdTDkAxzwK75bfrDyukCPEG15",
  "key24": "4SgHxUfJgnCWGEKK3Wc4XxfBaFuTNhEZnm3tLu9wxJ1zcZcFAjRJA5oDtJeyGPNAJsUAwncP7iLZPUv6pEQMzmGy",
  "key25": "2yV1zvWhu6fnN5GeWBy8nDYRDYT3LnP2eeJm1TyFkqUEogYbjsfWpvj4RrN1QAF55r2PnsjPBD2QHQS4EjZfsCAD",
  "key26": "n7g9N4YSj3CJz37HeHBr7vk8xKTydeozapZZTSo2HoRqtQ21dZ3K7Z3cNFxusUsJf6kSh5h9m4MkXGPHGuyHtxu",
  "key27": "5YqVaXxRN99kDfWhNUu3jsE4a86P445suLc49DgR6bRXQyawdSKYWyaUf4GwmTSVH3r6HWt3utmdMGbcD5GjkUXs",
  "key28": "32PuEnJWxf1EmSQwJHApU4Wm2mKpBiTe7hsPXxTYusao5WqyvDFjTYmfBddHQATEcJqzp6GeVFc38VNTYu7M6XCG",
  "key29": "5YLS8bG7XUDhymwTjQosMwrXy5Ct3VM91iAK7x5ingpFcTN2APCpkXnEGSLnkaNYDDEuVpVf8mCUo4R5pdcxmLtS"
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
