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
    "45vFWPkn4ECR35uryM486wo7xBLQMXUbk7HMqACnPi47HFChsYzpQNC9hF6CcTsjS9HaeL8yf2Stth3oG4vwRRvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xgxorKwJLfRzqLyrrofd4ziBv48NHcsCX5QG3m1fszANtKAhb3bTSuVXASpVx2idY7hz31iLD8iiyHb9BSCq3hq",
  "key1": "gYhVbKGZ3XD6KdkAqgDYfM7eScqm5bh8drp3ouXZxciREcCwbHHdx8E6MYB6K8RJv8aZvW35Br7395aBHgsek93",
  "key2": "4bbwAGq613aQuUoQs8UE9FrcGA3SEmpV2hyz58ex7TPBYD96idKVvmH6MhhNBtgUBqfuF5ujNK7atkT9u5R68BCu",
  "key3": "Ahd8DK5uVrApQ5xwrNcVFtCL1cMuqZyBiKZUStAR8W8Y6sCvECy89LvrXbuTMscdpy78Xozo8BUwm5a3LrdiY2w",
  "key4": "5mNPuA6Rn1fXT2frByPQ8QMVxK6rhDkMmFApTjvYSLtY8W5MXUDs9mQqoo5EzNZ55YsZXWE54PoLEmwgyGNccgEK",
  "key5": "22Uv1ofd6ePh9D3ozhwEtB4AH171AzW4wrFeuaUWPZtabPD8N9KoiUSLmgEJCL9DbudGu1LPZV2im1y4nkwyYVN6",
  "key6": "4VGGmYaCJwazM5cqHPazdB9T5NTVbUPGngky2ZwrPpDdJxMmzAR72gZhmGg47pSZFsYpQya12Lt3wZrbmPAsMLSV",
  "key7": "3nEcSoDGPzwF7Y8sbHPBTUjmHraFVTrpjVo5SDTXepBVmWcPKx8a45hM9VCvhU2fYGdRBkEBwjL6FzBJ6FEew4Aw",
  "key8": "ge6L3QSQcG5GYC7ZZiEDMGctPTRtnTKQKTsrBGkearLc8hPGe27HxWYeBp1eU3PNAgZCriLzXxtm3FZSpwF6sEh",
  "key9": "5binPwQwD5swdtRyT76ViH1dS7raQhQS2JcnxrFSwYG4js6PPcjNFCMXvAN8PPuUUe1ZbDgMjNr8VwnFdZ9RjNbM",
  "key10": "5SWpJHa5qx1bteKB4DfbU1KGz9cEEM7h4zRJDVS3f3oJSggTUViSdKH3kpsgtBnAp6bqkW2aF6hCBDSvv48rbHCR",
  "key11": "4Amh69FF2k4LSnBeYzdBfYAdjkRZir4AjomWMS13RPLHGcaocGYG5xcavy7Y36zQpzrErgWwFnymCudqUhcGBSKk",
  "key12": "5g6oD4uNJobGrRe6gzGV4TUfHFp95i3TZYjPoYLzNAPtd61r1sEvvBzZsd1QpE5gYfxDFp3kPSLLiebi6E6ia22U",
  "key13": "4RnvJgk5pb5dyrWt97ArQrz8oN2X5etL1dd6nhe4pWFPodAk9dXMfrV9FXWKW67ieYxFm8YQkBDU5dhW4hqWDQTk",
  "key14": "5fRskLWfq8ZRLvBmyWGf2F1yvmNzVRBUDBeaWmJiMW2hyy71VJ7nvrbFiEQCzJfCD4LnGdDoPG4gF1845deyBB4K",
  "key15": "3JYVZT3pVikGvwHQtwcSvUxnD1A3HKwPGmoqG5c5gUicwcXGMwnzddCvQNswKJB5EFpeWLWLT7rTxMnK1av3oDH8",
  "key16": "3pBiieo7pmTnutwm4hQQWHAocM255aejRigS7bEkVgVjpJYEya5gdkapDW8q7g7r234RsWy3b8iBrxad1NL8twnK",
  "key17": "3tG8DRkWVZsi9tY4oEV7V1WezwEAraQZdDXt6Lifm33Nx1HdUvJ2ayx9BRS4oD8p8D5X1LiVUvsbaGwx2742DHvN",
  "key18": "LwK8gwssVXdfKLbt3TFxbieYstssUCSNpANBABLiAW1Em52McsxHSxbs48btxCKi4cML9eTeC2ZKKWcsNenuSfR",
  "key19": "3Sro94rVDZHYJLX1vaMD5iNPDzEvyM49npksD5v6fTSFy2iM4DKYKJySiV8W3XGq7b6kKdJYD2irSScHfyDXwP3z",
  "key20": "4CXuQBxkq6EcKnohk2J4aRhDjF4LSeSFk3UAgGsBMEKDV4afe4Eutn7HgjvYKkfMk1XFHYa2HLUnjy6mUgtATFh5",
  "key21": "3sWZAoUsQpUnrTbYRdPyuuzHhdvDkNo3mrswRfvcfdnJc3ZBzEUWDYYC7QeopQDPXZows2ZrtsshMAxz66Hu6dX3",
  "key22": "3vYcewRkXUG4XKnuTgRBzDPqHLNw9mC6ghQKbBmQxbP8HTbRxSkTZZWFN2QDuegodh141PedWqDYyD8pskgKUSLN",
  "key23": "3etgKMAxQUc6CHzDEC3tw6MSGePPaSZBJ1F9QmDVNZzceUUkZxYi3xhgRMsUQnmuQmnvxEFemGbAFZQe13i7yfus",
  "key24": "2x3n9T5ntn7ZnC4BRJ7fg64rZRSYqrnHPbvFjdcJJo2BVxNgiiMzWQuokX4evJv7z7v5bXRJMpQuXPsqWtgANGw",
  "key25": "5UA5gZHNLPB6j7AvnoTZQaAhhuwABQTrL5jA5N5hJKE6axmNZ6UhdzpVSDs9YxPvLwYwdJe5pCXQFrkZgB1tj5Aj",
  "key26": "34tpMgFrtWUUiek8UgE9FuZdbuPYKGMK1XQzaGhw5jYcSsJjKDN2TCWWeZmipRdPpZNyr6MRXNsinHwZRGDZW6eN",
  "key27": "F6hn4Tw7KuNynoYf5HUDQD1uC3t3aPENYiGLs1d5djFVkYuUyYYvTxTBH7QxjCQTrfW7tJJyvfo5Q5UbPKQ19g3",
  "key28": "3YwDAp25o4J8wuhYyusWW3G4jSoYu9qs37UgzYBY7HWyWDszd1JjKkGNCTqbcJhvEefMGvLFT6ovNg9ubuEEDLFa",
  "key29": "2JuKtpmoDzpcjtW9MqBpTqv1EefrPTYt2wpgSsato24wvfdM3jHFQm4VVGy6kGxSWMjocHEoQSiJSWJNTtQge84Z",
  "key30": "4Fd7tUXEtqxqTGUaKt5MuxDx4u7fZMp4PwvXwdZaEzMUeKXd4MgU1nG43p3xtunFRjN7LfbjcxdEqvcZ3Q9Kgfgq",
  "key31": "5XiRsCfijTxQFcok2UyZDFFuSGi3A7E7XdZQg1xLkB1PQxLaqXEHBnfG4TuoMpJRtfMxfeknbxDvKSBwvKzrXJGs",
  "key32": "45hcSzr3pojJZqWrEvVEdtufNUMUwUaYXS9j39QCe5EorpoQPRhS8JkRgbRFZaoCe2RRi5j4JojNqcYwnKJSXQ8J",
  "key33": "31ztffmp4DKerxPQ6fZYuoDX9nNMoEHByoH627VNVepiHCcKqE6ndzmEBrSXvqHRTnqrf6zBjeMaDxmC14v6x63",
  "key34": "3EDkejzjBwLdnrjtYSAoUb9T2Th7F5NFH3rE1Hn8kwdKeUoTNp94h48K2y69LnnKVGqDFsB3c94wLMa9aGEBcWab",
  "key35": "xVMYi5qUaiEi2vFpu5M5mkvMbD9nfPCBHHQbANRVDgmFzGzXfYeDZqXB8zFPKWKvGh5y4jdG8B4JRivmCRyMrfD",
  "key36": "haafC7UzyjmN3yWtA6ggyoYZQo1h7EbUua4r8VrEcQyffqZJVFizvMXDpVFhLRxDYVFrWmZD6s7CNwVdxnujv9e",
  "key37": "28Tmd8xpeyfiLwf8SE94pXfA1XNPjp6JiXcUkdQbWeSustEP8rRETH3UzqSWJHcM7MuMkSn3aW5wyC43gDY98CL9",
  "key38": "4RN94Q1T1reH5UuJvNNmhoYGSkhBrvPHesyfhk5g8BZUhGU1gEM6QMyF8voLrA6FcT8KgPgELchQBXCJhFuU5EjY",
  "key39": "5JbRqgrMBY2yEwdzA6vMnd1yGSJdAywncbRWmm3ZfyfhrzLgEfWU5Ctdu9yB2oyNAi8q5f5eiRrvgyokNdXAGpF2",
  "key40": "4EwgHcCmGipkSHrQPb9L5teSTXTtQKKez2S1kwFX8FagoC3ScTgPRBJJny1MhnZ6Mu3sbPDUCti1K9UrvfrCV8KU",
  "key41": "2PyRch3i4JgXQ2m8Ggu4iyh9o3KpqBM7cSntdnA8925rQdnRXfc4zdoA54W9uBrQR7SAUtpEttomcUk2xPuYfDdW",
  "key42": "2jVvk9ZXnvqQZSFFiSJNgW2r9t631Sm2WU59QDbfy2TAVLV9AjySan7jLFZAz4zgzFcvJSWk4m93xtwZ5pd1GRiu",
  "key43": "5KXMmEkduyrYd4UA5A3V22b49ZKiWew3rnHY1W6ZXvcgCyD9wDuXbE91Vsg4ELvNGZeRQzUpdqtFuedE5Xofc4nL",
  "key44": "3cajjvLQbBNZXi3rUa8WahdP8jRBx8ZqwGtn5oGk8GAeZWNqetvo4hE6KkyzcSwZPVMU9TPmSHizp2788v4vG9Yr"
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
