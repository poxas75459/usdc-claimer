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
    "oroDKUdLXdbdvcA5Ux4uh8WESd23WfMECUYYn1AjbXEC6oede3RMYtj7s2SZpkeCghVFnhKzkwK2y1Hs2PHsp5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58PkdJTUAt57D7PxsBfcKt86mEZTcDU4u4pKREe7UsKTp1weNb7vbQjkVVFBoVXx2XjyNAWMKHfGfGvE594QkpnW",
  "key1": "4nRTTsKVWuap8f3bhpRMppRQQLm1QSJsh7Me6mxjrFAekeWxCfjtvravCJjLcGao6qCcESJXvKaVMLCwA6QmGgGZ",
  "key2": "2oxHPAZG8YaeS1M4he5vYF9ta1BhrR7ucfNqfCPz5jBr2FiPfkKux6MnGFrQRFauBBcwAPnkkWqfo6kKRueqs2oc",
  "key3": "2ru1QBwDsSSdVXNGdtotz7YxqzGnUApoAwSU9Lb7ar2RR3jBYoeUuTgwrbyoASTtZGm3wzcPnnqZKjEow6vpSBK5",
  "key4": "gF8T4acdAkC1XeiCSSWLSmCz1sNrxY9vVmJEcV2jsrzDy5DtpAkFtUHsjmLkezH61XD3H2HyTqRxtVjCsnUXUxw",
  "key5": "4etzhEA8neBzNnQ54xhThwga5PjK9vYuDvarHSbcVSXJttouB28LLRWxGeyJHVjgKyu4t3Z8JFfcLp3JMCa8xBmM",
  "key6": "2jzgb7cCNQwSYMZTkEcx4A4isFgwSQtihNGae7QAVzacx972xZWCp395BCvWN9SiVCN2eXWx7Wz4RF3x8EVonpTP",
  "key7": "3bu4q6rc5aVSfkcgZmeDtE84MZDCRnuLU9TLpD1aTjWDVezF12W5SaKHhm2dQJudPtHxsKPH4fTYDmWK5C2rS7ci",
  "key8": "3Mk7kJL79nwtA3y3jPXTnonWLxok9HweqiFaoUM8v1YLsvHa6fKLPUmJZ7wfjv2B3QQ5gS8Ss1s8RbYQSrFcGtnu",
  "key9": "5watp6FX1C78vm73Kn6NeMgKA21eb8ac8kAK2FLjWDoUodkfss5oxRoLmTj5rJ5yTod6ymnKcpEz14ivQUYxBSiJ",
  "key10": "5duKGRPTiFWBZipH9GyVdqY4M3G8DDs4REWSxJ1EZWkSUpZt9YjtCPBsJ4YYXGnot5AEFfT1hfefD7NCua1HGdcN",
  "key11": "3GeLmpaGmL3B7V3ub1Z4TTwguzcfo4TtUKigw5AGD52LGbU5GibwCbhfYtm94nwwsb2Tw3iyEoPVeFcAe5QKsKS6",
  "key12": "5tovHCE2QPe4LWRQduz7i3xsFAWDhXBpemghcDwnrG4rPJz2U7LV5P5WidZEAQ5DYj2pARETJCrtBBf6kkG2gCik",
  "key13": "3YcXkNcSH1jXcQS3w7nFpPBb3vozWhxjAWWqJKMxAhnCozkTaboWXBjcihsezXGMtjZz7fnocr8Urt7fHrF3M6QX",
  "key14": "3CkhjGExuPfRbgAMvM34ivTaTW9FxLQwskz3DtmYzcjLkxDVM4xNBYAJmTFNzTqV9PSaJFfXmUcSTZ72WoZL4TNf",
  "key15": "4dA9EAMeGuJzfjHx2SXYi4MmSCdXcNmhtHePXvU4gvmupS5izi9oVErXrRaRgkT2Lf1iwcHmzcT55YHMd5irjxHq",
  "key16": "3qY9D8N8L2qrk5ceXMYajHKcFwAv64bC9it5PXyzQx1fMDee43DmLtrBFdfospUuKEHGo33M3xLNWsdqxpXtMc4Q",
  "key17": "GwwUJVqsjn9jTZHjeMR12BCd5J4Zij2WpSBpSri2MRNPEqqqmkjsYwTUKurVaxFZxkjjDadXgg8vRmkz8udcZyQ",
  "key18": "2j3MnGsJoiKF5KBmJfHEu8gj4RZvGpA1UH2sArjcY4MEyvEhP5HxTdaAoDMCDFvznCwxYGtcTGCDGGRdWGnf39ER",
  "key19": "4DS5wXgFPxKRnVTXtpMGTqZjRGLi6M9uYFg7x3KeAdEPMPmjx4HaHTVAQqFfhgB9GLSm5JxE5eEu6oQrhkMJ7NST",
  "key20": "3muqH6yEiK55SL6r4cBozWrp4oNJ9EkRSS97Ldiw4HyAr35NbiBKZ9iKoWRt98zRFj7W3untyQP44abhH9fGpbe5",
  "key21": "4m31tttxNCgRin8SaUNBjpr5b8e82d4L6GgSJqbusVg7nMhRSZvafQTzKYgxKxZeprDXcUZvfUf5G3f8AqnSGLxj",
  "key22": "45J3aiBnJ4DJTuCoRU3psNv63RPqKADmCBstDmQ7vedNUrE5jBccF6ZCvZHcmiVUnkLhMSZjrgMbWn62ZcdeSWLV",
  "key23": "4Wt1cWHZU3LptKRGGQt8EDFTrbeZ9B46aQMew6PFxxHVqQrVLhiCeL2ZgZ3KfM5Jk3CZpzuVhobNLRC5jvtQ1u35",
  "key24": "2eHiCUrgqw1HSqnHYi5SBmPxMTfyGiqG9kumJxD4XmdHxW2k7pC5pGugdpfs5WoiU7AArotsbStWMYsiAsqBBj6z",
  "key25": "5eSiyM2VFH9wsp9cPJVNJpQ1quWX4CPzHbrpmQriFSuEfGfNorD4Wvk4XR5AcKhPCBQ6tcQTVNdRAsSQkDFwkMxS",
  "key26": "4uyMb5z8keVaTtoGAyyPEa76RRugPvAPEyVL9M3tQr75tNnihELc6pQctF5q2dzMQxFaA9e8ziubpiC6xQaA1GRq"
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
