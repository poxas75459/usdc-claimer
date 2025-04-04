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
    "3xmze6mvDzHaYQytjQ6iEC8ugBiEXkbkSVMf5VJG5vRzYtdDEBmiCbYaYWLYWn4yt6PEd6v5m7Xbpk856U9DxBjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PSg4pyyVs681oTG8sxdko3ycu93ASoWEsJ6fsaY7g4DhHyEAHUsn3kDsrbnRgF6HUpj72FEAUihvHo2iuZF6s4P",
  "key1": "3rjfXJ2iv3tHLLcAMnKUjEm2o655KFCeSoK3bWMnriR3N9gbwLZbYb3EKAFVvgbFzX3thvZEV5qicjfZ8s4fVvb6",
  "key2": "2V7CFW1H3VehfQ3gNryHCqV7udng6Gi81QUne6iVmRFXTpgE258z5d4cCpyspcshyAsVjMM4c9VGVCED7P4sheVv",
  "key3": "aoXsaMYoHqSgHJm7LWyKpjoHNro8meLz2a5wKJG7wkkbWQxMt3SuCTZz938AW4qebjXdrXAvsXPHzma1S9bkwZi",
  "key4": "5kkncnUfQBRdCNinbnHxN3wbcEhYVXgA5hcguDFSHnxL8baS6iAk3Ck7amSoPUxxz4eUJ8gtsiZ9EQxsojyK96c3",
  "key5": "4nr6Vn8YESTEaReKmkCmcJvVSh6MBMoy1cyMLGcXUTwcij4W1YBd4QRTaGbtrPCjqnAyEWU5bXgLEqxocpDnWDPt",
  "key6": "2b8pSTBaLAPdQGuYRZH8ZmkHWUuKrasBpyugN1t41xzggrZQ35PzJH69hEYXLszq6mMShTYVyTkTiPn7urMnwoqL",
  "key7": "3ZQoJEZVtvUuqUGkC1YhMiKxt9dCnbv2bdN1bQ5DXorPTVngHt3u85wyLuwiWSz53RoCsBBjm9tZFT2Yy7AgSPjw",
  "key8": "52FhfhS89uP7Hc21pYZVnyuEmNk8SJw12GF5yGWCZzv7bXePG6R3JANVKynZGaCmsJThBpgd5Y2tQ6JJVNjXmArj",
  "key9": "2vhR5pivjef8KpPtRpUXQv2HnHy3QQhCfFHqogtvDdiLDtM18SQTmKN2cR37VMRQm3GkzqG2ZZDcTzf9CdzskQhg",
  "key10": "2HS9GW6xPNr4RA4tygAsZRR8rfcxn6REBqP5Szs1XGAo8VpY1BDa9CA9D5q3H5Tn8Tf2Vk3qACnm5i78vnLc5Um6",
  "key11": "2hTRJhLo38W7WUBpemNhNEFnMr6v4nUxSHZhKUEgYhQVn5VZ4wC43gpsJcwN4V8ipX9FT4QpKDC3pisBFjDYAhzx",
  "key12": "2Vm7n8Atz7wgqRkdCiJpKhQFnKFFVsLQM6Uyp9iHJwC8oP5pN1dZA34VWn2FWjS9rqenkugSnGZk8spmD1rCqncd",
  "key13": "4e5AJgMuMLsDmrvzmqnFGkZLFDrwrmuSgjUBQbsZ424cT5wH6aK37gnZND3yoELVWnMFTQ2pDLfdSLL9iHUh2ia6",
  "key14": "2qL652e8iSxLEu19apiUEQj6tm66FuRNogN13Pk8qwLF4dAZ8oogYY8CqVoycfkhiTeepLrtCPtPrjfctgQFAXsC",
  "key15": "3EP9oKuTaBAbdxJtMYLKTSvxgkiDMhzWcnzRJxAhFB7Q6KKJAQsBnZVY8KzQUq6AD4BnPGpZAuxiXvjxJwXF8XVK",
  "key16": "2h8wfeBoarN4qVuzep5h786g5qe2Px4BA5oiAYavqE1pf5a34o24N4ZcfZ8TY4KQ9mXPkPf2Z7c4dQatpdHtFbNU",
  "key17": "5gNGdHRzLGfKQfHHXNv5Uqc5yvmUuiHAjr1CToteARbcpDLFVfTwehjPVWbc3wqtLG5T6z4uR9VFmArcgZ8LPHQc",
  "key18": "3ZMAbsZUe1sNV4yWdjWD9nS2WTybwpvryraXwKfyUgT1vhy7RnoJFgwsLUHuiGSph3DZjAwZjDUNrzezUe3YAso6",
  "key19": "Fep4QM443Z3hmF4zRYDqUHkEsTvF29cC3ATRkmrtvFZERkhABdN7X6hpxnKdH5xG3sHSpbD2TuWXxWrZc8r9d9q",
  "key20": "3HiaEg3c3Trh43RhipF5qLz9jR6LtHj2JZJzFCHwCcNFsVxBSCs7povR8zAAz5DwAZmDi81s5oFzUTEsXE14hCF3",
  "key21": "5bFNGzAVbPJ8mcArjisq3oF72Nugf9FQLtYqj6VAJA6TuQaDSigiMvTgYwVweRNyqTjfoPSs5pQnWs8ubRRSs3bK",
  "key22": "57kiUV6YbVNPqswWq4adUyrq5cwt7cWUWZwar353P47pbMdHwgnortG9QUWXuWUCYWmsteNBRoUG64qeuXQdnkoW",
  "key23": "8gUAuh5iNAZ27YBprbazsGpUi8H29ZAsmETSBw7QaeFDnrt1hwkggxkDvbT8qSRWCy744J9NFjxBquj9juN7rfR",
  "key24": "4MQQcFqjz6d4mj7x8bNSPxfGztkAgN12zFCggdcP4JHfPDtLVXJD9tVKxTQbYyMifYpqdAV2iFayCfThwPpKUzfE",
  "key25": "3jzY8MAYzTVch1T6j3p2ugj2ykF5y5WwzX68w8LhSm3HN7yPyj2xcz7gWvk5u2VT9f37WTqeoA3pe7BsoStgi7nT",
  "key26": "4jpSuLCzWuBoTAC4oovyntqnipd75cScVYSo98VP7UTQxPNUF2sUHmeLpKdCU57aRLqJRhrUevBxhSaNqkXc75XN",
  "key27": "3FnREdxRHv4rFUUiTaF8KX3TymNiWReB4K1FEdsAsfPyzmkH2Dy7wbQWxDayzgMfL1oN1fs23NsiGR6QimHCJ9Yv",
  "key28": "2vfJJ91QvsfZaRQNZ8ezkU3f4xxQJbyhN4EpsBcKxFXT1vM32Ctz8421ZdWFuiuubgC7dBAK5zJviahnDaJEyW5e",
  "key29": "3VYGJ5LW3YuhCc6HDFErfDERmvp7sgnXc34Ko3vLobQqaSRsofefCMZJYmMDN3E8dGQVbYCD1fNKYfePABzxias2",
  "key30": "tbh6gLZQtxQxL4BGZVwoB9V2W2y8K8nUZvRU8doFoPApPVsGZRfoCgKEhpym6GNs4rGSgRQAGhWXyv9dW3chdy9",
  "key31": "4dB5Jx4PaBzHHkYLhD3oGxZvXmYek51TnuVUT7zvF9vnSjH7GbFQddj8UupMeAF6VcbLT9oYrzNzoRGqmLMfBPeQ"
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
