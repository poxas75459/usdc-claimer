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
    "5ucNkLmCgJGykQNJyyoSe4aovoP1YF33iQAfje8xA7d5hMd2AUiRGbgX98vg84C5epGFJJkppagWwRwZGnsN8YyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hke4vUUvYZREodVZqmBBhJaf57WLGCSEHr4r3T7JJDsoNsNvAY9AjeVx4axXmrsxEhmsXAFWwyHouYwp9DFtDsB",
  "key1": "GpQKFPJortz8TNXYDSAMZEynPAGceM6y9sVAXceB2pZmTTRLGm6jmnumKm1ofJMhpPufTt24XFEGYyCVjmBVBsq",
  "key2": "uGaTnmjb6k8i3SvvbbCsgzxkX22PhHeda14oMXDg5LYpXJ2XaRi7csuRFXbEDjgT3XGof7hKE2ucNS8Aj7p3DHG",
  "key3": "5q7fRH5cftVvps5CETiYBujqyUr8cWiTdtKNVZ7vPnYXoy4eB5X6NfnDky58NB1Cprb9M2zfjwqYmm4JkhpYepBb",
  "key4": "3HzgMVBme2qKaiEZun9ia6EqH1y7Ssopx2mop7xXkWUUVfoW8UVxnNBuqu8qCHTqriqZiDTLP3hjC2MaKoQpCa5v",
  "key5": "Pg86ZpUkeaudoPDzzFRY6W2rMpGFHeYtUJR4p8P7ENvQ6qZMU94ophe69dq3a8QNx7Q23aUq3P1TdTTu84gn1wu",
  "key6": "2zEzc8M19mkht8G8JxTX9gc5axxyGghGvoH46igHz19vUfxGbqsomF4eY1S1V7ZohQzCV6wJ7X4RihqA5GqKahwm",
  "key7": "55om9MAXJygbpmooq58QuuPTfJaTXmZuJcot2KYHdn44jEStZR3xtDNKWFN4W8TsqKew5xP6fKJDczBDHDEbmnRE",
  "key8": "5XiBCiWC4HwZiBe3JNUts1SGtgU15NxSSRSVMnHXtt4wvgnQmt5fAJPpLsFGsQjAKKsW9KCDX75NiHGob41AXiM3",
  "key9": "3aS8iGWDkzyzggKidyJAJjC3Bhxi5uNzk7rLLpLWhQASQLmUDXdKDxH4f1XojFuAYKu56KqAz1jzHF8usEW5ZRwr",
  "key10": "PigqKtPRBkNehXyhXeudcB8NVSFYwsjbbadrWgyyB3F23NQgvRpVyDsA1k4Au5pYMqtiKmbT6uCHtCe8oG46gtq",
  "key11": "2LHvzvN5gqhnt58vG6qcdsL1PZhWcUQVrb2d6hmxWHTi9KStRejo52WjhZTfdL2N5mtFVcHDzmz4cbqzckFxyTRe",
  "key12": "4LSGQeyZxFc6Ewb17mgLeHG3USVJXYn9a2pjtguX7h3Ub9hai1YmziA25ivi6E4RaJ9PSYsZ5JnvseuyLeqh2cub",
  "key13": "2qyJQMkNfUz9ceEJsKpWQfCn6QCkUg7VyvcBDZ1PH57cBFFBJRvo5wks9d8j7UbREhLGiFQ4yVU7xAvziWLEJ8hu",
  "key14": "36x1PyvZEQmdvoBU7Abz8nCzgeikiTzwmQSQuJs9fovxGbe3L9Ju7m6brwihkdLyMeFyTdfrkVqJpKhs728xM4N",
  "key15": "4pAn3rMrKQUoo9UM4YP9c4r4mbipKDK5WRRQu7Ws91nkaVJWLTAc66KSffEFSy5Jr8bEB6ZhtXDEm5Mjx3XqHyZq",
  "key16": "2bLdgmbPyeFc7spdQT7fbBuAoJ24EMFQNG19u6ndykijfxTBHHQo1bJeaLhJdegBQo15EWRs4HfCRa1FHdoDLmx9",
  "key17": "fHQoTx1m49DBM14YjybJXPTvYbjwXXi3wzcxunU35PHnvdNg7eDmv8RZvbLS5VTUCnB5hYJAWAaWkwjQ84rtR4d",
  "key18": "5X7VnAZUZ7MgrVsUeDPUR9deL9aKQ29xtpNzM5Gjr6eYE9JKGBxer8L7F1g2T1J8SgGpbi9f2P5n61pwezfAKr2f",
  "key19": "2TpcTjKdH6kuRuoS7Ed5CCPSeQ8KHhdmuBvnGNnDRr7waDJ4QwkkgVo3Rs1SiKCNkKRVzacdVuCiePi4CSa5Japb",
  "key20": "5yeoRVLv4xpzgiwyenynmdP83gg4T9LTarhkGf1fKZgxTHWzzMZ9dbHVnRXWAPgHS2i53yND3bfD9K3AAUw8jfN4",
  "key21": "2T76V381AhKQv5A7gAjZ6Tc6193kYfQjDPefXoFChBTwAVMEgwPM6g3RLrWhvnKjdTTjMpRav7dHPnng98ybji87",
  "key22": "5rCS9wC4pQCoaaaPmRxHgVaLe1ZjCj2CpLUhztau158otdb2pTFLeUAUiX927oH6zUYorXjqtv5KtUAhZiJBoQ9s",
  "key23": "3oTzbyXdVk8YjuLEEuLgyqnarryisgGxEm1tZficHogVVDFw3m2mvVWBw6XkMuAsdJxc9N954kenqR5KMCU4yYV9",
  "key24": "532e9cdyqELUDsRDGyKaz2h6gcFGcgKrpquxa1YddoNBJTyjqyi2neLiCAw4Ep51hc3E7Xe5cqhWChz9tzX9JiD9"
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
