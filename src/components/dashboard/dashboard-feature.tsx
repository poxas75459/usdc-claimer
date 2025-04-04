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
    "42Dq6SztKWvQE3AiqjJytgqoGrvJVrhVmZRX8ZVLRxBnmm3p2xEr57K19QDfoMy4QWvEn1mRzpJxbq7U4VxJ7bpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nd4kjuwFMDiViEeeYsU4dr6QNfKZVKZ4jFRzUZAMWaRCXAyjR6pnVWcLYWNGwGTG3o1CBNFURzEC9Wr1LTMSBpq",
  "key1": "2pzXizcH1KjwA9QP7H5D3mfG9ikjuyRMcme6DdZP3Sp8U6KoYFoqZaXrZwKuWcySgWhPKgNR9AvvgrWpMQuhbmb9",
  "key2": "3q6ahaABhFmoAnFkrHfjnzDwa5LKyMMHKN5urja6RPavVAoEGaa9J6vHgs19TGn37sZsnsXeBbrC1ydkXNzs3pgh",
  "key3": "DRx2V7cJ2um4B6xH7vBD15k6W3VFJn6Ts9aPAzgySZyk83NMFJkUso2HKL1cwYymkimW6QMRKXFiuDkANoXd2ni",
  "key4": "2F6FJFDMsvRMvVqNQuPaRFDczg8rvovKQc8Bd7JbhMYwKJriyNVCneAC4Hd2YhPivrJb1EDjKn5jVDUSszHoCezq",
  "key5": "2LK48RBA8Vd3LZYjoJ9A7dEkuDX8YxkiuY7FN37hJFtaabDdYZZAjTM8kRsaKk58pChrFk73rxY5pjUbZPBZ5s9M",
  "key6": "FbNT1MvYZivtvReYpej6wi7hneWtnVoccs4oescfXMQcUqP2YBfFpFmr5nWmu8vPLwC9ntHCKC4QAoBVmW1GFYW",
  "key7": "3h6i7dp3TixYr7adWUMZdSq74EMzHJ5QYcFciXHaY79JybtZzgxSeRrge3kayLnTvrknqpxs4s8vmfn2w42Cnmdj",
  "key8": "5Yd7vz9zh4J8H4w6C6Z7r2vqDRA8NV56ULwbq5DuWPdKuMa8CCEKN3ULaYVGftKH8agNYbSmCLGGYGro5acwkYdy",
  "key9": "5WUtJrPHN376mbfYVB9w4c2GvibCXwUR4qLUpYhsWfbevpi7A7JQh9zP1FH5a7KSWCr8XSHrkRBCP721pLkkawCy",
  "key10": "24E4JhKjXenrwxe3xkmhMJ4fKquFvPwc9nQGr5z3XyFLmveJMFmBaGfVzNkUebPijY2DW6ksTX5t7DbTRhW1a76o",
  "key11": "5XUFp3Eqt99pN8cWM1qDi3KXj7jSvDtgpftMgqou3ebg85cydYbDAM5pnG57pkt9VkjwBWrp4CBZRcEtFbBNzxQy",
  "key12": "ufVUspeSxMGD9xkwSVL91AxviyRen4n26d6yFrmXqmP3Q4u5uEDxp7HnCGirnqwrzSh7G8WoVbxF7FaaW9W3h25",
  "key13": "27jBExmc9D8NtiAprJtSVxq6Upa6wkqng49A8R7eb6bERiEUroeievtKZNNPbPLVapRSvbYSUuwUPsAaPbjRUg6e",
  "key14": "4CHDieu1ZFVCcCzbHMMksApPkeoRmJzog4chcyT8bMdvV8i6muCsat1KihsUKY9MtXWRrL7ru49HHWGcaxK8ABAa",
  "key15": "3og77qKgjLHeCpWTMgMmQpZPcmo5vkg5kjNzZ4xMaHS6hGZMLa7xRBinL7oyTSwKvgLdzzqCyeUD9pHjHui4RJrS",
  "key16": "3h3amY7NpiYMpSyuj15t8PnVDN28fBp4CtDYHNRnaabJt8Z1poLNaMjjaen6esE7GSs1hzP5zUeWUpY59p2uPx6p",
  "key17": "2pBTLsMxgF6mDnNJnBZZJMdFvRSmw7RaXvpyLnmnWUgPY52rLrsx1doseRtHu5nwFSbgTv4QCWPntw894XzUwJjL",
  "key18": "4o8oH7UU4MEVkYbHqYTcjGuHuf5Mqd3DF551fi1ZbLMrBuoowkypubEoaXDzRKntK3bZZSU8qCRi3ktfKdCydNZY",
  "key19": "bYzww5Xy4Urc5JfLZxnjBhQp73FF9BPyswTPd9EUpxVYqirgPcev2ySfY8eNURUpfbkBWkZGszSJnpLTW1Kw1aL",
  "key20": "5Pbz9GXjc9FVMaRgi1DUS5NmxyHWovY98657ap6cB1ANr64cbdZTEhfMwDnHZF7121c293XcP3i1t1P1rWaeGZYN",
  "key21": "4x7yn4EiDznojpe8bcdgG2FwQrb6nbU2HDQuNvSyXAtXR2TCV1Z5RQyxoZgLmN8wN7TWcdiKNr3wGQWhbaMqFT56",
  "key22": "5bSXb2TVofZNmgmpVpWpC9DSXB2g4z8WJPTKFfF8rS4qZqjJREzR3wCtGZiWqYP1945j4WmRCr825w8PjGPXGCHS",
  "key23": "3aiqCLuDbGXzdqFMq64GpSCR1DhQWHwh1cx9VaB6FWXgKJ2GFpefKNU1DsvELk48d2vQV6pgSmXVNZemSN5U9c3e",
  "key24": "4hwRaMvLxgsVmRRURHNpDQF9RgVdtrPZ9FoRSVMyRNFKrAvSXkDaPNXQ2C3X6amvHbkR9J4Bcpodxeujm84kNAur",
  "key25": "3C4wV9p5qNdEizhMUvhZxThkBCUMtaQWsQmcY677pssPCzq58JA6c1891N7fjz1pvwKJ5QhTKxe6HgpKREyoEcXp",
  "key26": "214GXop3K9fnM98qXF9bwSqpGRjzdDtJaH2YWas2GbksEyuoyd2Aak7axjiytuCZWk4N6SvEDsmHsKkizuhNR7mZ",
  "key27": "5enFXNdSECMzhXpZrZyGigeC3wTzrxc381UtY77E3mdReUNsPgV6cGuLLdqmGfCtYZoyHjm1RnHwbRxbk5qTykuN",
  "key28": "2bwz9X2NbVLzzdtZtUuajEekgoXXDp8sF28Q8CyxoTCPfjMMoaWgQQzGrLSDaKhVRQM1DYeRWQZZLamV1Zv3Rvgj"
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
