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
    "4qXgnRYZ4cuERjuFj1ofRftPsqCkZh3ebi3diSTbKGhQ1zij9gJ7zpuSTAqCP6cBfJyKQ9PY8MR3mY4jo8vav9et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJoKDmqDGKxk4CorqEnn5pwR8u4D3UfRgh5x9f5PMZB99qt6mVScSr8eszT743fYUiUmB2JvxujDhjYTty8eLnx",
  "key1": "3wfQKsizrAHHgVy7c99oSk4BpTpyVAh4czvzYsyq43AzmeuauybrnyhQ5MD3L2LvrdakUSoQZ4KvQkvdpMa1hCpK",
  "key2": "3EcpUcmGYubFvPUoFcTfbCv6SatZPcJ87TFkoK9F7tv25NgEWXdPxWH17c8CT1Heg8LMsv6dJJmP7nYb1Bnwanh9",
  "key3": "36McsoPPyFtGL736jBbBUwKDfYakibaPKnJFMwntKEGCw3c4T5P8iCJtUapF5YmHxBzzN8MrDPWyNtxwRwMNgo2M",
  "key4": "4WjHAL76VaSR8gja6aouDVC5Hru1dVe9Zi3YEwPKBbP88RYFX7c8dfgX8PKrxrkFDfubLuL57hx4Z9xjUdvspZHA",
  "key5": "4CLDCqWmKh9PPgCFarPBrLFhVrfwAJXnceto8y5LpgXjqRGh3d9uYngSWvvq4yTZX8N3MjCrEEoSt9oATBa3WSdP",
  "key6": "45Q2nmdgeTgSXjJ5to1jaMPo6jWwGNDikDHJWmRxyWvNgtqURZvkhm77U8fTordmgn1MEaVr9F9Tfw7vPEGPPcTa",
  "key7": "32z7sTKDCrK5dfKNM1jHXwukkg6wP3K8vPtYJfdKRKEYj4oLcUjM9yXtGtwAzqC7yBHoMT3FbC542tno3KJff3eh",
  "key8": "58Twx81BgBNECvkrQDHT53q9dyMEZFNMEiTTPA4s8XqtL9oVYSNBJyYtyPxBhLnJt2q8umH1VC71QfbUeKFLFesw",
  "key9": "QnQkkZrbSAHtY7dyybnrEMaHqUfqGsz5yHhyHKnnqdHSQRBxaq54NgDx1EkSHQGvYUwcD4QrrbsuCpsy1tZTwcF",
  "key10": "4hb3Z4vcmQSc9cM2iDXcGDnpP2ePXQfURmu5W4n7Q5mSHaS9dkwpRP3AE2mZCxs7hs4mmToDg5xaRBYwyuztPWCu",
  "key11": "24n7zQbtLyyV8xzwnm5mvtuSbDmRLHWF371kiw4SAizFxWaNoeq4MFVmrEJUFM2udKG5fCHLmenbrmZsoKbyazuv",
  "key12": "56CG3sqSTocvyezfVgNFfUWGjoFqNhUEn84cfLY6p8LMVhmC3BJskYNGmsptf6zB6ZTgMGdkzk2oszm2nbHniPXW",
  "key13": "m6odPMtGJxBKejU8QjgmNQnSU3RcKUHBqdyfTR8nn2KaKSbEAoa5Yo2oCvNuoPwJd2LhoB43cSZV4eG6WeVfkee",
  "key14": "2rEmee4WvNL8BMrbWTdiSjTFaRRaeU58aq9zRgwdc1WhpLCJrkHgVb7jecoB51epbhayvKUvEdtfbPWVTsm1q99u",
  "key15": "5bZzv9u8v1dWGDCvuS2ZLS33ghGYW7nP7dU9RvLbqbng7GTEdPSWEFFFQuUnpPLYWCzPcq7CN7vfSuiKFmS9c2et",
  "key16": "4SmNmGws8K6nf4RVW8CC6MqVzRk5C7jFy75rL4mtF4kxSKdwgXFFL8eCj4hGo6jH7r1NnCLXH4ApcpnkNstopKuo",
  "key17": "3FLUCgo1E2EGNLeaBaJjgFe6DGPKFV2f9UtsZzicdmNfo3iQZRq39aCv3zQW3XCZPwFXWYkbh8rt49WVGZg5Huty",
  "key18": "5vmqejEDwR4eXzycwP5ZPuxttp7QrpDjYQsvZ4yX8dxUgtPPisS4zLiMZ8GD6hHF418qyvL37RwW9g3nztKd2vpM",
  "key19": "3KR6Dc4jZcmhQyHXN6YKtSRNLxPcUmSkFW7yAL6vAFVvh7kHfDjsJ7iWPHs1ZPnXQ7eBAfeo4rKq1ss6xYe7YYY4",
  "key20": "5sxNBXWf8Mj2A3xXh9mMzH2LNdQBQoEFZDHcPNNBYfurCasrUs7DHS1Yuf1whxrNCHjHQa5d45hZTZzNDfM5wxFg",
  "key21": "5gWUFFibxE9sRchbBdYJkmgaFkWQQVxvhayHPbzrCDDwxyxyLaR6sH7ryQShnCMYbZcHWTdw7GDVmzAnkbceZ39z",
  "key22": "3f5XdSEhdneVqWFsMEKmdhMTTXsppDBwfnjBKFtAnsmdHHpmKxbR3SzH7Pcvu5NNAYa9pVghsQrLgurvVmXpWCmV",
  "key23": "QaWvQoaGsGbp4m8JcHrbXtwzchpoByw8sZs8oy5sHRTaajrjd2GqvXBvpsj1dsMmekMe2ScKgXmSYELgg5zRY6q",
  "key24": "8vSVFvFVfiDY8nwwn9k7nwt683yGuP9Pa92X16sgpsoerkBaeR9VB8Smsgar8pRsyomsqgkmzk9rj8wa5VnLsmn",
  "key25": "58y8jYxcJLbgswyZbECJU3EDyAC4GcKVdZ5sLaARzDF6eqGn4VG3v2u9eF4kG4X5836LXxHeRkXg8wwBpFpn8J2u",
  "key26": "49o3EVTxgA43abry7izaY1iHuMbss2RvsJnVDZzoUELsaMiZ1UimGg5e3DRZT1iT7EPY2DsUqFZPhsFZ5Gbgbv3h",
  "key27": "2VK4mwCeFnCQhwUcuDMNkKkhenBRQaqbNiTuS4VQCumfNPp3J18fA4SK18cXC9AxuUrHq4mQXihRTZUp78JDXpbn"
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
