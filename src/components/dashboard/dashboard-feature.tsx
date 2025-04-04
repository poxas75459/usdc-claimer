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
    "4Jj2Q11JeuaArsKTQ6dMfC6eU9WVQbrdsasD6wtVmTz9H3gugUBQPcV98qYp5f4G7mDNz9R9icsCwp11CFkiaMi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GpiP9Zztf44L3VRNjKvxX3P1WaVxaMheC7yQAGkKQG1sFw6cFAcg4DLHaeoaEvpEpLxkfUxACYF1Re3VbgQCbim",
  "key1": "5ewWcdC2FsEEWkd9agpLo7nwfd5saQqriwfgJ7afM7yWctkvaJPgbm3x86HvHU12usQLWqizs4hQLyMwwZRFE6uq",
  "key2": "4g2hBFt2EJDopVLjQijT8eSLDHf6zfiJotqBUxa4U7ZYLJqk51GmarETr6XbqsDygMPihS5T53Jjoujnkp8Z86RK",
  "key3": "3x7wp3p1AsqWPS2d7dnA8tzDpsGRV1Bw2to1fZjKnhSDUWr3NyE5ffaYaG8a8sYu5SXhpuVjQCnuibHjTyW8zr1B",
  "key4": "RBqPy3zn42zMCxNhxDaJrqw2cBHzujsy2vqrZbLXpAhW9KbcfJDMZGZeU9Ko8Jt1dnnPfYMi3AKjBsu34sDFGJd",
  "key5": "5EWwHmjTygNiTRZqfLp7Xt5UtxuziXjoAaxuqBRgujK2xKeJXqJRpYc7LAQvo9dnzjuQwQ5TUMmwycEuaqH29Vq8",
  "key6": "3MkNhEcoRn1ezJVdm9mH4k5XCvzF1nxzm3FcdaNebe7fDmGq9m5DKFsTnz3iFUh4QMGDC8hMsfqw2ixzq2nhEgXp",
  "key7": "4xLuazUAjqEr14Pa3xZoctJuEZaigsd8d3UCYJJM9KvpSpkg49NfAtEw9YuH6okzA8PudHR4u6PAW7txbspHNb1n",
  "key8": "KfDGN5fcRDgvKbgw3dNn5tEf6a7nsiTxK28EFqe7TBmnRvRHiiTvko3Wt1Pk4WzX5qNjcu7VphEBi6eCDkVuXov",
  "key9": "3GJjsnFoAWdb6zJXP2oFJkoMSm8292ecyv5awsiPmbXvPe1YxqskiLQftwLwxfUCb2kuvab7eBUryQ4Cx5FUViYP",
  "key10": "5heoaKoyV7MDfCiAQVm2VN8ooFnAaAnwMPjjFBwSrLwnqC2xs2fXdZAAKBXCxvvihLFtnY9L2SDiuwM2wwxQwKP3",
  "key11": "4ZzJnmgw9s2ZeBDo6YbTsP65MRwXK9gX2vcSS5vp98PeJXtNbwnSorBXKNEye4C7HzZbnkQsEVLvei4a3cFhuUcy",
  "key12": "3Q3C5cjSeU96ULjUqJpBjsGXHimjr3RBpSXz7wdFCTMU5zG2AcZio9kAzhYDUdW9BD84XSzHAobBpWLKvEdciUxr",
  "key13": "NuHU5Ex4vt53Lzky2bZztqMoREaZiE8rqLn658otQ5Jkp7S2qRL1qTPXrdNUAiiWaGZGUN6MMNam3ozJ8dysVhZ",
  "key14": "3zvyJagux4v2nq8RRCQFk9ge6nWDfSf4MkVGmCCvBqdMCaJYNA3kLcpCk45m8jF1V932q6EwcD8acPkojBUhPs2r",
  "key15": "4cPMgoQ4iKuvH7hwefeGw37j9qPCpuYRuTqUX11PSPhvzYswFBX4eCBeJj3vXTdmKoux7GYsMqWQZCcZmru782R2",
  "key16": "2MtjUry5jdNgAQUT1j3Yw6gKC6b14wRuUajFzmJ1ttFgVv1uQGpUnKYzhfik7oPmky3ZL8rWkMFCs1w14cCLsmA",
  "key17": "5U7Ax8v9Tyjh9Sgc5JbetNnSxjLHoQvYQLduPTg1XvhBBDoBQhGiRMN5GCpQCzuBhEnjJdDDjTdjo52ZbpRxKSof",
  "key18": "4tgpKq5kACUuc2REiVMdg9hF5cQ2q3yam4uaoHQ4rM69HnX1iD4nG6UEVqE7Ugfpze5kaNNRbbgqZx4zzr9iGSFK",
  "key19": "2r8yWCtWt5S83nfAyqQsKcnGsUm96jctAxVKfPdDdp1HNiPJ7HoBnSPRBeDLnW16vYiJTmcvquoEF7iyC5g3Pjzr",
  "key20": "9ytkHKzgFpGdNRQfYGJ9As4jFqYncd9vaxNMTyXjnNZ4JvnxpDux1Rk9riT9E14XbaqM2LnqHLg8APkeL9pdqmE",
  "key21": "2h2ftbGDw1F9AHGHwqiGxhstTuFuRFvkh1ipc9G7Yw59B7p7GKg7RRC1b63nvHzmTmg77VwgvuuLWifb7Na3SeM1",
  "key22": "Z1YfPkrMfpEBS79rtKsmvrkYhmoVHV6A2gMFQqe7m3NonbPASYQGCG91dchF33iTCnTXgZY31saoQSe21nvVXAq",
  "key23": "2UebMdZm6WJ2GJQn3nWozExMhBdXVpDLJBFMNFs2FG2qTXk5HSgnLpKHbtQa7PKQsUGCUNhQBvXoKW9XG9hWsTEq",
  "key24": "58GJg7MF5QjASiMeTnHn4ErmTyUceq4QkDc41ki22MEzWddFX5jBHxiWK73HhGLKh3UKqCW4LnJqZN9dMGxn7RZ9",
  "key25": "4zDkgxPV5pCjTdmLaVCdRPjQF8p5tDMBSHDfXFFvF1idPQpci2zs9avSmm8yvgS6G2Tp8BDHa8ZkuLpZDr89cjSj",
  "key26": "41PTFpYpTk88badkmuAWPBMP65TdQfjfhnqn15X7GqyzwTYJEKwMo95mkhPKG1bqdeNAQM6yNTYuhGwavV2LkM9p",
  "key27": "2TbQrkFUdVk8BSwm4ANz9UNN4dHWmZoDC2buSihGPRXTRXZ1mTqYWzXke4QFtPRvNrkyZDXH8wFrwGA3Niu8y8Pw",
  "key28": "3Yf1XxKYTnzrm9QQbFYSUtkKcJjf2iGgUTgqcDU3u5gaBedVrm7FmFyhEkJ9FQuNdYFvcnFbcYXrqmpis2TcdA3G",
  "key29": "yM7eqLUuJq8FgRukBqgjofH7n2JXuJ67ghVU1n3VZK4rDtKnfZdAW7QF8DaW7YxWgWCg7b7cRKgA6gHDkdFNndh",
  "key30": "25H8ptXXCKjsFvntcXtNcafRKDT7itadSJ1SoeM2fUreDJRCcMu7ncJBq4Fvo1LUpSznmVHGGUiMAxX2jbrHq4it",
  "key31": "wUNRtPSjrvoBimtVFm3g8XhuUGU4e5ymwScuyiTQyjDu3uZBqiViMnrgygd5cPsFVdExDx9vNhLezCWrXrQ2UCD",
  "key32": "3EfyHyMzpvSuBxQegzHEGqKaCJLk5zAVA2VJB5uSK3o2jhQL43y583z4SxNBGXT9zBgC2ADtbTAqcFt63CFno3Qz",
  "key33": "HaGZJEbFyU9GbENZLyMBLjiNmcYR87LgLVsJtV1xBY596ryztu5wHDMZXWqNHrvXCYWR8NqEeXRS9MpYovsnPNN",
  "key34": "4vv9bQXdGm39DVhjrioL5phvuwkbozsSN8M3twSP64Hfgu2SiX7dV4HpsgSwF2m3Ldk5rNB5wYnu3fgtdPc2fSBx",
  "key35": "3YLPFnHa7xpiXQRUMkigAu6dge1ms1Dvudh1iVA7kqerNk6DXD6FpVgfb7F4bzn2pirjDsNadgfpnVNw7tfP9VS2",
  "key36": "2P3h5V2awF9no4vviivQmRnpSksm1d5FNUXM4d3aV9kA4ggQ19RTXBUdVNQttWa1siUmwwLo1hNeVTueUTXUnWoF",
  "key37": "5AWqF9EVrKSGaZiTHPpcJfCggdQAjF8a6X2BWhNr3dTNeBR3NJ2ExiQJMofuJqS8WBjCnBLAegNosZrXYAcnUCUV",
  "key38": "4j6Mq8ATz2sPNUHLcVRxRzsNVzCgTUWeVZVsVJHwvyt6ETRzuPEH1Tt2zZyiDwcNMmgDvzW7Gi1beoaebUrtbSSa",
  "key39": "32uY5qrvi9Pk8zhqfv4w78MPjGGA6Ujf3jg3dZkkU95rnFnaMBvKkUFyNA8TsrUqsW7SpzSzH1UL2WsPqkFbWmvM",
  "key40": "3j5BPM7pXZjth5uWuxY8mYBwu8rMcbhiCJ9BjAVu88WcAffd5DsgXyGpHJEWGqN7zTf9PUjz1QzBREic1SyAKA2H",
  "key41": "2xV8maKgvCLBze8gHVYQ3FhD5tejuWnQjB5Q2a3V4pejQoAJNmvxLoLeZvyn1J5EtwtJgTu6d6QdHbtfyAfvP7pZ",
  "key42": "2MaZwoWFLj5Z2eZAhT8sGEtFdSS9N9ResTNhenqrJzduDQotbZgq5RaWZMo2u7vkysCwfvHcFdsqJmXRa3aMKnSR"
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
