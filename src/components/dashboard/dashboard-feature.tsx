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
    "2F92PZCQ8WT2nckfBrbRzRQvzYHb3H5aoKpEkoLGjy2o9MiKhJGRTvFrBSshKAGCwcfVndvNWjfbx1xuBDNS8mdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fjQF7vYJZ6fuKMCv278fFGbLp7VvfEhVsPpiRVePxFwdGdBxUJMj61LvQ3ppX6xYx1K51wEqoEa5bWxstSW1jcQ",
  "key1": "5ZFszywAgiEeryApKiyjGwe1BSuqFFsz23CRRVzJqpZpctpQLv69rS6p1YBpyZKecywU3b8sLdPDyWsi5b7JoFyj",
  "key2": "jpgqyT2Cik2nak93dBjVrfNUDabPUZCnSzuiSocZbsbqSPeU5UhQH3DwnGook9quHYXEsRkY6JdKBfQ7kjBiPXG",
  "key3": "3GE2hcG45Gk7YEZSqovD9amJZnuuQqSyBTYrLgyCj8QHDon5UrRA6FVdk4MXWspFLZ8pXAppsjGjwuw7xPPi4qQb",
  "key4": "6r3NRY1RBHs78SsNSXG3c9eP6UnX9nywpt27UKRoMg7gzGEnjGBGhYpS7v8yFAWeJE3zXmV5yM4MjjFzPRJAG4L",
  "key5": "4De9ZR9HqixfVyqT4FKHJzWWqcxq88uL7at8CSmmonAe6TqqtoL4kb3EG8dgUvf6GuVtHgdXu8uctedwcxUa9bAw",
  "key6": "3hnpHYFA1qaKTk32i6fCq4fNMwB8YtXWqb9orimLbCB9uzZUWxy3rEezMNMKrrB47pz5jvEmh3cSxpEC9khwueQ8",
  "key7": "5yT8wLpBk4mQr7KoPbzbdBfFULs8A3v9x7W5rV9qQZztej2XC3KKwHJNZJ8h1ybXQAMW4cyrLfkybaGJp5gZDufu",
  "key8": "3EY7NKvAQwSsFD6GPqibRRDALjjRhdWR8pvPL7xqS2decrVCXNHXA4NfVkZFW6EMhmbSfKjug5ckUWW4LH29NNTC",
  "key9": "3HKXT44TZLg7P86qKmV6MWMuQd7Pyq82XSZdUA1f8EegorZnCSwaBSMaVjswzniX6FxTyijYi8rrXzhmL7JTR9Nd",
  "key10": "4HVXCwu6XwT8jde8536zotrsKvSkCTSePqoEguGD5kT2VhcAebJ4vVLPDB4w4BPwVV4EogzxME5TnKrXcf9xhjmX",
  "key11": "myjMUNFgV7ASZHqMUP2ARXzMzWXL3L9rD4CPQ27GPto9pHWrECXNCfL7gXBDx4L5yhLp1g69DFL98grffyQeow4",
  "key12": "4yRkQjFd2P3ufUrBJqLSqGpvpJJSJpmz5nPRVovAojf3vrCJ8YjSa1o6j1fXBXzmE3Aj9421NA1EkgZ8cTo6GFFk",
  "key13": "5xYCcFCdBesc6d2uo7mTsBpU19kTjeQnpo2qaZskEBq9vESip9ijP26pQrNdtfS5QGTiftzCJLkK8RexADA5XEPF",
  "key14": "3ypQVTu1nrGuSfRHcjx11gC1DBBGz9JLHwtiN71YA51fky5rE5quZoMBMGTVvVp9Hy2dFanhCf788gTeKVk91YUH",
  "key15": "4grqCMuVZoDUF3QCSvnmTorhTqRSG9tLHD4PfDvvfWGfW2sdBhjZJx4f9SfRK9cAWyeBY1xNjgHxDSAS1vXVru7Q",
  "key16": "3eD5qATC6QRDamJHQoFfsudtaMdRWyG7fZuVnQFmGEtNi9nwds2y76kAnAgHsGZoBZMqHTayh72fEcBKxanBXRGk",
  "key17": "49aUzFhiWYto2qmqD14zzvgZw8NM1yzqT39gbXcD5dL7pP7zhVxhttpDBfYKPoMPDqtRYYt41UJ614vXoPiBHCRX",
  "key18": "D6DVjrCu1oWLHXpRy2nq3Ssqspm5aviQindNmRnVv9fdoiLXEyR3rG2gQwXrNDuuosRQ8fz5X8vXqyp3yWFaGwN",
  "key19": "4J1nqqwFWjzukTTuoEaJjP5HjThNHSJKpwunn5EfJPXnkLWdvhhXuzLKYDV99kmxXaDWmv7oMpPXzfM2bGVKTkxL",
  "key20": "5f93WJdyyNeiPNMpda1DsB1eM8jvMVvKskwDFLVyiMhwJ8vDBkj4fMV2FwycF1XGpfmK9Puz8qrVLvowDek3oUDb",
  "key21": "3PsTusbPn9vojnAQau9mEEw7CdroYBBR2fRse3tt5uJASNB53ksKFAtFbpzV16hT5dG7qmWAbCfTEfYwVuTKt4N4",
  "key22": "mLhhdL54PAMmsB5dzC2Qp75oC31PYYweNSjrSKLK7PkN42wLzgdAY3AiehaaSvF7A64ArM9DY7yqRh8hh5KdvNA",
  "key23": "2LqLF632voZwrnZrVks7bShoFv8vAkBTw9xGmsHrTCQhkENsxuNtNTGtmJ2zhKx4AVZnAdCBsHhBagA2rDLUAjSk",
  "key24": "36HCrFbstGXnJLJ5dw37dEHndUd8wpdXXfsk4Yj4eDkdHvFLohaGhebJcmWsx1Zdn4z2VK6ZS95TqQihkXnFYAMf",
  "key25": "4Tyoj148ymCubbizR1Lain5gnVLDJvBGkxii9VUS5mwWG1MbZDWwTDiVKB86FVkxTwwquwtSxw9JC7AG64iGN3VT",
  "key26": "287ZGVbXnEe5MMyfbmE3kpArAnCga8qKPbrQKzfMjSEr2z1sexdKtj3DZM1zdeQFVDYexbdiTTuMqKni5XLRYt4x",
  "key27": "CGw4h32vT4H9khSU8LRX8BWe9HrurYVM3HXf2XNPSLSKmV3ptWE49EQ9DAJBDEFUj5KRZu2UMzRUECGR5oMQe3v",
  "key28": "MDHLtG9xH9pXnh2xCjbzvhTp1tjgGt4xszNTKNYSuEyFNXLZtb7aXx9tYmJHmeMUXZ5oqznPk1GPqgh7w1kFtaB",
  "key29": "5MJDoTd4BUwZu7zUhtLv2Un44CrUcvN7fMBnpuxSuoYpoaYPfUdzkSPbaudswKj8kBncCyjzGp7itwnmQBw35Jqg",
  "key30": "667GjmytmyJqzVfAc6F46So5GPNR3TDqCcBPiERGuw6rawWdmzPCj9zh5FJ4K33KHHCcffAMYk1FCsr7ZCNCEi89",
  "key31": "49AjJxhYQUc7zNPGkRjQPXo9Z2DPU6Jj6cEQH7YiMZNBiwo74p5iMDzzQFHEPzxJb8sZ5BAoh8g7URjMztGqcdPR",
  "key32": "3xdXN583y55oJVSLHV8Mco5aWqbCN5zNFzWXxp5gWr3bWJswqQGKTeQKPPf7YgJA5qzUqmxSTdgomQpjySPDAJ6o",
  "key33": "221kjVgkWsaFAABY4gC8AdaQruzcyfqj9gAzQasSSY2tAGMpwRrHyKtozRC9NToJ94Z3fJ52qe11shjy7SfNPiMN",
  "key34": "4frm5UdWGN6zBVuMyz2f2eXUnwbXzd9GZv5h8yNvdXYSbA8ievFDcA2ZG189mrrNt5LmYdFoBS6YqdAftoGcuy8S",
  "key35": "23jTGC2ui6bNKetJqFo1AfeJAdv1yZeUiMMivQ74LZm8sUxgMrS4mjJDfCBtqAH78xcL3nDsmscYtU2ck8gu5Wik",
  "key36": "3ATbMpCecqnQ1aWMSsZXHY5XYRCYtZm5e2zFHdsrW7WjvDJQyFoRP9DpgTrtgZLoVqjXkm5Z3iFHUweSXBTtVFNa"
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
