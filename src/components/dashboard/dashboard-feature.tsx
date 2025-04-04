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
    "2BsAs1yQr5MeZDYgVPWTVGybWsF711ia2gWNouuhSY4yuC3wE9zPoGnmFhSoWG2E6Myj645QQE6xiyws3UFWkvkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36bbTPftKTDP6APETqwuR3gsAuZZooPpaeb6MVPjcaBRTiTdgi69H1X9FakAh7ipajAuA5TH8454DWqn1bS8TqRZ",
  "key1": "2MAzga5YAmPQ5tKZdhLh1N2LQxDVhsUm8gPE9rUegmyPWjGJ5PqNdSspJsAgA9XfpNs5TcE6KoCUvm3x7tTQr2Wb",
  "key2": "5SNe8GJxRizjQjaDbZT8usmDprJRBd5zo6GG31UzUf2a433eSWgKNhd5Pce6GXNEXBPfKQw7j2t96nUq6xti3Wy1",
  "key3": "4e9H8Tpk53C5jpWKQxvP7Btsk6eygsYZFLi8RK8GhXQqygYo7e7BCjsAbWCuNe8C7LnQAB8YW69yYUPU6gBi7JpY",
  "key4": "5PkZNs5SuRKPis3QCghz1DwPbWrvrcSd5E3ueMoQuxV7GC3Qo6ANNgrLfqE8YvbMadq8YJt89AL6ZZV79qco8Pxc",
  "key5": "5zwpZ5xUMxT4EFGmprFcqyyeMf8YEUADEcvkquyF8H6sJQUvxeSA4Dvd7RZKXhgwdAHTjn9ZyrHUWwqZzXEYcckf",
  "key6": "3QzXjSgAN1HPzeBZPcbANpyNMCbQVNgUq8VGY7BwEnyTYziyKzUCUr34j2sFNw1BVKoLGWFeozvQHYNDTD9xQpiN",
  "key7": "2ngxBMC7cFnarb2Am5cWrGsADzrPq4QAvB2QCRo3SEqwfF3Rjc8i3V8rvSFB2Qc5LgAU5Jm88xe8YafGFXgTDnnY",
  "key8": "5sFVdjNoJnx7RoFRPmKFGfPebt6KXLfNPvLjPQJVLRUYpdrPo2mNc1PTa3pVs39v4PC97kG4qqLgHzfjHeD7SJQ9",
  "key9": "2awgTQmXtSBCRr4YqqE5XkF46LenGP8Si7CoGEPC3NGsLDKRFrePiTvi5yv7rS2QwjJ6C55T51hUz4u9Z8yeL5fF",
  "key10": "uqrTZ6gTV8tWk5Wouii1Gv4mAc98xtEFQSTK9wj8dJ3B9oySY1MVEftrEFxmvsR2nCdVaCVebVh4Qz9TvnqFY3r",
  "key11": "YjEcrXQU2EBbdEMUVwzs7Vc42VwAmZKTHbC4Gayc5Vp1t5WvEGaifVsQihFL567sJP8hqyefKY7SXwPKrYuKJdm",
  "key12": "3CPHcRCy1Ednx5iHH47xRX4wcbwW5d8PfqMWY3uQSPy4of54uQoXju9h2NhnVHJBWazcKpHtxog2kLESvSmyS9bc",
  "key13": "8BQFFcGTfdtLuPcqXsHpRHWFdPaqHGYx7XcGHVdA6n9C896Aj3boBmVwT7C4WD3tFRBpgNaejzmuvArBSVnbfPV",
  "key14": "3DdgJfMxq1nSoBPabEZYoeWnkGzwxsLwYK6TmyMUJXo3Q4Vq2XzfQEfEG4KTxCixAdGYNABf7b1H26G8AuGseLDj",
  "key15": "3wJbmDKypS51Ca8sxdzyyZL8thmepRZicRNYhrEiLmwnPT5MRzfDRrFnpZ4Q4Stey91RVyetBDttZp3U3a2L7BZe",
  "key16": "5MhEGREx8G7B8uEdejcKx8VkehUKE97LF8u1s9yhC3evyXYxDBq48UTpQpkXyg5V3GzhRTqqivEqJDcpbKAnPVuM",
  "key17": "tfqFqUYn8A6SifEXhNCVPUmA7a3CtEcQnTpQnqA4ss3uc2zzdeuFZ38okDQHUR3mTtLBm4FWr2iDx8EwFLJNtEn",
  "key18": "52zyFmkmfZpjuDp18hhQx8nLNXQ9Vu3PVYuMHE6JrPdufzqG5iDW9Z1JYHr4KdZjG4xb2Aa8pzRdmyWhhxgYVGUz",
  "key19": "S8nS5oA9avoBY2KWjjDA5Gs3eG4dYRGttr8QhqCkvBhyPhTBztZFH7yABrxMDyvJ8Bkyx1cseqhpC7cx72AYDZH",
  "key20": "2vLSHKTsMymfJaPSZp5ffVzXEvXQRMS68dT7YDPjyghQT2pffEqULe4vb3XQjjDjFir1EvdUjJx4d2rDfH3cWAJq",
  "key21": "3vpTvqXyXokKsbLibg4H4B5K7hcqVqM3b27FR5752mcBvsdxGLvbKbubd2BhBM6Bpsg9kTZxS7sV2qXLsgEfM97e",
  "key22": "33aDquRhY36z8rcayfKghFng3pPT6mwKr1K5pRE4Em3gXR7W8iFzDmMRgASxrHd2hBjMjJV6fyuKyouWPfQv7cdo",
  "key23": "2bFwsQt3LxZrvwSaAZeYbWYMWvPeRxMXBqTDPvEG1NFZiLqkp551ChMTTGk56aEuWnC3sZ24cLLxMm9ZXsCBdr1M",
  "key24": "4SJ2hYi5fTkKcMAYetr7meXM8Y6KgkE6mehXKqQUEK3ufvfXoEfK6ZZkph7YXLnmZS5V8PgDuUh9mNPEitCp2rnQ",
  "key25": "kYHxMPhHUGxSyCeK7qvfRtoB6FfEBsZ7cpqD7KFrbpG5gX2ADb5twudvyozjFsnXDJn3xbk8Y4SARR3eU8aFgnn"
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
