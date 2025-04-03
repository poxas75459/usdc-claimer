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
    "4DAAHNyohU7kFjhMDpShsj2sfD6PFH1GcFRMBcNTNGGnLtgttWc6bvTCxvdSot1ojDzu2b2XgqKBA5VLnrUZB5ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gvAs7Nk2hNiAcimi34fzJqxwn1sUTb5Rf5HmpFij9GH751ZN8CP2hDzHwpoXH4CCDvxzdEA24bXD72tJsn4VBMm",
  "key1": "HYWf4pNTKV6SeVSGkAkY77CwxHqkxKLH5fi88HbpZSzhsdgDCMweMxbu38LjpaqMj4ugNQgNMjEA9zJPeXTRVv9",
  "key2": "2LyvMn35Ubve9CNRPT9bkAFcPm6NTV1hkGrPLcJCiAeADkJqqXoKJpkg9ZGDKUny1xZsUKAqfH1hEGht7d7sgb99",
  "key3": "521srtWmLHszQSFBovxqatKTCUZuLqYDw4ciXvuw6umvGEboPjF4GGH5y4vnvgDxEE8v8hCQ71xE1F8XMSfk87c7",
  "key4": "txaTVeuFosU3WVbmXJ6wUMNdtNUuLEyowdqhn9sADzZd7VWQhwfDy1VXomWAewpz4n5XJYgYTPo55ic5kdYPrVr",
  "key5": "47rASKk6i4t5aDakKax5TnbMQNWZC5WcG8DNg3HZdGyxe6992YtbYBxvFSezLFTzPGUZuScrkLt194g1NsJkcDv4",
  "key6": "43G4gNxGhAs75GQYnMZaYmfMDtX4u4VEDUAFyM9EJesMKXyKxGEseJasw5GqWnzPwWhsaZvF3FtGHcBuw2DEtGfy",
  "key7": "2ge6aFK7dFcGqAEnxaVd2MnQKJ8hBGExSgDKUuU7yTzphPGRam2iRpJ2bGt673B3S4JB41QimyxVvgizYLo4RAdD",
  "key8": "25AS1riAJ6n6kXUNyycVJ8JEFf4ZkUbQeGxZCwSQfCiH2L96f9jv5dtcX4reUtSHyp2EJ94vgtSeDLFUQ8XQPGAA",
  "key9": "5EZjD8C5tvNb7EtZwUbAMN6dQcdiS7udMQRvGfH1KtkQXgFS4H5nLWurNo7RdjJPCsDBXxRo8bYPGhDsk8JxXy99",
  "key10": "51QxswdRFESFGfYuJspdB3jXM3JNuf9vV897c1T24rCwPy3mQgmcpyfhYRGBCBiEtq4fqH5V44jMofeb9XM8of4",
  "key11": "4L7En3En8DbTS71H45wqMU9ywU2UPSmVnPSTJRk3zryYUbxERoH3LFweVx7CbyscEh7hGV6m6UgR1oEDVN55RCyG",
  "key12": "3sHs6Gqk56iXzHgmukDn9Stg3Ajt18J7TWR9sUVbuWjDP384x49p7fpL23q3V6r2Vea8bdLMFAWhWxn1uqeSzAZk",
  "key13": "2Fvp47LDUMF7H7kVDGz7NjkJnNBHxzEj768GFZEjmpeUxHGKTifogdt82fNp2nHC9EsBBVULAfHHoQBatPXGNgw4",
  "key14": "3uGzQUfkT9dqmCeJ8LPaLEERwe3reU9q8DjpRxQhUi7feW3wr7J2fAgs952JXWk1vsWBppbV1hZNtdJYgNcBh9TS",
  "key15": "p81rWi22Fw4ecW2msgwCHvZc6QKUdQhV3SFUvYeMdiT42zCryKP8spC65Cu9u3nUa2oYPefro7FmVjRtZzVwK8v",
  "key16": "26QkaSs8meSwSoL34xXaHYMv9FsRaN9K6JsS4kprU8jC1iEP6znztJsKSXHzxhamDpATAyRgpLHhjVmWiaEP4eSn",
  "key17": "4Wau4fz5G37KeLwLx2kRACE2tcjx9wuAARHJMuKZ3YhNg3VrsmpLRk6SEB85fNCnZFuQhTKTKwgLCmjHBii6uQhN",
  "key18": "431t61q4eEeUVV7iAsKeE4GsM1LUadkUSrAWKMwhbCjeHhAePjYQjwrWZWzFrRH5RyyEjfsTf9MgJGrkw6pAgt9B",
  "key19": "vWJBCtr6bgvyQriV72RcG1E6KViGxm4sqgncWwECTwqde9BVEdapCir9cWb5wfo81buJ5kLpCoRo5ad5x4YYPZ5",
  "key20": "63TVYDNFrwF3PFiLFCQn4nT86HN9HRtF8adHDEZD9qxg3nSBGvdT7U2ptXsJT7We6zYx9wFaDUYhkZJfJivvNXhF",
  "key21": "5jGmuDX2ZGpswBoXF5ocL3ARJkJymnvjNrVn78wRiUbCF1G8oczwXn1JMLd9cAgirBotAok1J5iogLBwmgVBy2W",
  "key22": "2vgd5Boh4QxJwFSScs1EnD2RdyPVqpVcX9fXGHhsKPQrYv1u5keA65U8FGw3fU51gKUbmeEswSDabgUNZZ1edfMK",
  "key23": "28UFb7TiYP9jBApeeBACo9jFRP1r4HkousMMK2ibAzXsRbx6xDP32EBdt8HVDq9E34iWRVLs56Ght4esP9A4Eip5",
  "key24": "2fWBv4n3adLx8qPrig5DgEBQWtVREcNgHNCdik5Kt1L5zAdtsGWY1JyWbhTYXkdq4PREq2Yzcq3aEJqecQpr2cgP",
  "key25": "fer8P2TXmbqk5sSaG7ijCsDwstybueaDKthvpc2gyWomGto99Z1WeskVJDsxLqiFPRSZ4gPvW5GMQUXsQ4bgLqb",
  "key26": "2dQ411ERVE9Ty8NSi57gCCSUAVvackFPeLyshCrcB2eKHx3okMTtepAV4T2x9AQ8TriSG2zQNWmHUaRwjzNsMgcY",
  "key27": "xW4bwZBEDrbVKKBQXMnKiSyXeX7bRPaKEBWhGyAr7vHMS41iX85cC7HmgtTJpSx7GgYggdCg6AYSLCS5WojrPTS",
  "key28": "4bWer4MFg5MedwtLJarxM1Am8AwSnCej3BC83rnGWMBfHva8civCBKGinj29XZi81okybp2cf5Hsd1pJUEtyhqc1",
  "key29": "2fGihkGTHtqtVinLAmyTJDWpAobpvBnznq1DL9EyqqQ4qATmQoXmVTUGjUCf4PaCqL79ZpQZCpS6v2dR9Nf6wfHR",
  "key30": "QYSoiK2tMLNzNQGet7j6axzbQUY9fJxKeruU5qYAobup226a1U2Y94XF3MJkwqtea1q7mSuYBcQRz7yRwFyeiAY",
  "key31": "3wdX2CCgMf3MAbDRByM9B6TPAmefgtNcrQA15p49ysmRWMYFkrLw1d66UNV9HDrka8AfMPYCLCypbVFLaQScemEF",
  "key32": "5h4MDyPzsGVLM91hzCb657EScR6CUPEkduRP35vRxUScbJqPW6LEXk5TPftUNEhfhsXH4RXVAN6NycxMRBXqogzN",
  "key33": "26fspF79bNBygbxHYY3gMCLspUJT8k5b7k9WoASrbPbdrMkgzat1iiY7Hhhe32tySosMEJ4WSERGSXBo9QvFXADA",
  "key34": "44xGESnchpS4TQAJqZvqJZFh7PtaWKdbhFFFP8oBY6KLfsFLc3GthpwVqdkUD2UAMbK3uugUeJcj1BqamdeYXMeV",
  "key35": "2ZDvpqZMsvbnzCJuaw4brKzLBVvCBL6zWELNnUojCfC4sEXTgsAacVsuGkSHT99K3gRWt1MRfT1yDPiNSoq6Pak6",
  "key36": "2ViC5e3CYg2HFebfyvUcj69ssT9GbwyxE7Mrk6WoZAk3PTSaq93PsNiVc57Sz6nS8oTpGgDvgF5QY39gvgtHbQ9U",
  "key37": "5tbMZ3c5xpD1DjYNcMVy1dGM2zwdcDMybe83zAdZAfpiKdE3b9JmxJuJbtzf7z3c43JmaCt2BGoQfMrmLpiERfB9",
  "key38": "55awX4ezrURUrXwdJJZkodP6HwxjsUMY1J1czksuA1AzWhR66XJ5DTXXWFXbGXBtbohQ1VZ6wDmS82Tx8vwgbNkx"
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
