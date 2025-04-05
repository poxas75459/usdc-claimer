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
    "3n4zDfoe7MVVz6hCfztTjoXamgkp6erxZA7JXkeRNk5BAX79kJMZcnmnzFsgt7mFPMjYaHq1L3J3Qv6NAbntf8U8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bdS4nzbEbuh1gNh58VnEpr9A8UU382QsxvE2oM4x9PGKPNdtrLgwScETk24o4sxmuhX9mh9mrty4PaAwL6AUoM5",
  "key1": "27mjdxVGE7v8NkZPsdMXcF7UiMBcx2BPEvWFTT7eD3WYhSZPxkhzuDxSDgBafiX3ZHwFiRsWNvL3eystYQU3V3X6",
  "key2": "29p9FwQ2PXcNihxAYgVgrZipSw7LtCeVZbSwzpHzSPJ7iFu4FWYG32aCdykAx2RMQuAw6DXdSvuPeMLy7XcrwLAF",
  "key3": "3zqWWdsipdfLtMGroz6UfmRPVtSZmpo6AeqwZG5SB9XLdiSXNHkHSbgnxozvygxqTMCGJUD4mVZtCXGKr8xtE3dm",
  "key4": "dGGERRmUXZT722pZNacxHBDvvWhCk8EakCzGarzTN7VpaAStJVKfncc1LnqhftmzjeJ8igT3Cp8C9bUkKjW656k",
  "key5": "2HMXzayVfiRbxFBaSkkSAcGrX7hU1ALBZFWyhMSjtgdA4ywo3tcp2KAeKzHEy3YrTBAZXLR9Sf5RVXJVibuRm1pc",
  "key6": "5Es45fB66Q6qeYf8pfLu9zzN1uKZgwqmuhe28L6CU6adwYSTomj4GgZWv9h1g5UkxhWGbykNcn276TWcdQBguSNY",
  "key7": "5X8PHmKnSHFERfyMWFRWCbJbfaERaha9MsSy3qaadNjCkxY2cy5w4cDw65kDNXEhzFXmvxcYK3Vb3qxEV7SpKvTd",
  "key8": "475PfxWkrF8gGyTkgwCCHycoHBuLXR8krVh5ppvRXR4sWxwMbie58hunfEinTws7CQpUzoitKyrRhV3hirSZV8t5",
  "key9": "275TKmsMKVigBHHNiCN4ZXftJ1ngvv4RRteNuorg8oCpBnz1hCTh4w8TMVbpUJArMDk9V12Vyk3NcWTZYh6xCY6g",
  "key10": "B134MwsCFYXnT5bKMopUeV8aafNQZ4Dz6gTPXGwMqro8Nq7Aa22oDxDFkcB6J2XYzjDMk2zs45SBBa1QU1UoXiP",
  "key11": "3EHS7oBu3Sh86RojmnjpziqXLwaAfUbTCQuLD6yC1K5sK8HZZYEd91eNwGeyN9A4MWGWfdhEt1JhdBtQDbiEzT33",
  "key12": "4Xzsm3BEEiDFEhFGUKfdW21fWQdHYMDipYfpr1juyqS5ToQfp3LeqTusTzzfNUq3khbAc4DMRwNjmuphQcC7Q5Xu",
  "key13": "4CrZQhFjQMpdohXWgqVpBbwLgYtdd8KMRkpdcEw8r1KZGyyp1nzXqHyAFx3p8qzX8u7xGz63uq5dMpAtJRDjaLiW",
  "key14": "391QkxaacqRzsghoLq4tapuG8qP1eiVqDVSF27TAKtckmbK2oUpwgJFNRTbc856qoK3ngZeJdjDGgZVN2rjo6MxK",
  "key15": "3LSA4DY3Uux7d7bJQ8Ebm2qK5xT5oe5GnckTY94smWVNX8oof8tokomTc2tSttXmo4sC8VP8d7VgUFzHYAegSHBR",
  "key16": "51VnF9QsZgPcTJoiXC7z8JYdFgkkdNaQk4mhitQp893muDdbR77QprjCNYXD9YokxH8LQaMtf4E9u1JXgDXi94eK",
  "key17": "2SKqatZGyGd7HnThx7HURhxJngPaUxickxL8Bz9kPdYdMVKoyB833DTSXQHpd8zDNgEaaR2bHLz3MD1pZ2e2NuuM",
  "key18": "37AAkrbrTp7HKfUc3pyTP3weTLNBhwKeJ3k5Dic3fBpQsD66PGrBtyCDszyJP9z7ZKRbmrcf6m466svwiPNFX9Vp",
  "key19": "37BHYTjS9yFSs7wAhqVsVfaus2kfxRCXnWRtzZcYbeM2VRXvmr5aQ7qih5tU942V8vTUaEP5kK87yLY3Z4drsTyV",
  "key20": "Lm37ZuuutMBkCeWG7Wb854eHfvAnWvGtqGEYxMfVjnjhN772ZN8F5m9LjF6K1QHZ5XrLgre9ArYVwcYPKFZg7WL",
  "key21": "4fV3rzuQM5EWMkfSoN4NrigtWyeBar7fi8bKhhh3TatYMU8JmNTNLYcMfMRvRxrKYRULeA29JduVH32eQacsQCkE",
  "key22": "5H7afFRAagaapYAw6c9gTpkZ6pfMbpt43ASaw8zaE4h2wqgrYAR78L8zPp8frhUFXoSFYQpLZ6s3E6NgpXqLQuqp",
  "key23": "5nb6mM949DGvTSEiBy7Fr5QyLQrCPt2mry5DmDsrkvnpcqMoo56NxNzrWoyEkEdT5wmTP68L4ENktTginv5iyPEo",
  "key24": "3xVdzjb6XxmbxAQtMaogZq6G7VbUYEa2vv3xidvYbnhheSSWLnNvV2xUYiYJNUq1jofrsYCoxdMnMFpEosgZdv2D",
  "key25": "4qdaPWhBHDDB9maKctpzgkc3YMAj9evAGgcpD3C1pxfk9kqLTTXRchSp1VXuqYGtGArGYJ7wsiHfMZNrWMLcLGcs",
  "key26": "4uBk8US43y27kp7TkyrD5Q9F529Yjwa7HU4NrqirZu2VVa4TVpRqoZGVE7iJZNtXS2EUdWrvtAA18KpkT13CRreJ",
  "key27": "iB8SwBWj7SXYa32YLu49atJGLq4NxHsQAQcVbQt8w7VJnwiLZVvmUo7owBxxVLcNYiSaDcitqvV3udoHKaxnXUc",
  "key28": "2srWhSK9oWQRb5ePCyieZLhARmRNLgWz6ssuQ8LGNzHeRzR4PbK7Ea1jfm7HwhwD5qMbZi9zLQxtoRs63JpxjNFu",
  "key29": "2zBnK5hUqHGdv8mfjuFjAtSF4AzJKKUNdhBujnPN4pqKiCoEQL1p7yhDm4bBzmyRHSUMDKkzsShTBxNVrKEiWH7u",
  "key30": "4RLr9NWYwnDitrgmAK9U3At9WxKLx8B9wqxFdd1xZaaRec5j1yGfCJDiKDwicxrQWw3oQpw7CJ1PexuvGhVtNbzv",
  "key31": "2ozhdsqELR8awvNLVGNFLgtX7XWbt5NJxLzCaeQgVwYYTaZeZctjqVsFv5eR2QGCYj2NeP3emphp1REo9ZgWUGRV",
  "key32": "2nwrHAp5sRvy3cXmbJsHVNRa7kostDiK4VdE7o28VYDg4PpbMLnY4zYd8cBTBUeDCk2EYJedRpwp69sBJBcaxBJG",
  "key33": "47T41yDW6YSKXjNJjwk4QBy6H1H3nkaC382w6Hxd12UdGh7xpfedTdACHRE5W5cCcJbppx6Gt5WQRPyyUHZHBiZ7",
  "key34": "2pQoYFZtjTkhVRTFwbuv2hbn6oAubLWh2u1fa64JGFczwiecE72Lbf3chdHShPRBgVwkeEoodiLcdEYfrJHkS61q",
  "key35": "QWoFMER2zgdQiXki8nHDE22wv89SV1vc4XAErtMDvBLtaoUdhdRRny67qBofbT48yWPQ86VNZnsHTG1XFRYXXfT",
  "key36": "5ggPye2eVaoE7RPgXk9PPWHF7hvjvwkPaC6TRSN8LbLwZXNwukpcgf9LFod5ogKU6fZf17EtZvochADKknrzPJbU",
  "key37": "5hrLotCvqmF2S5YQXGcGuXysJLmaBYtJ9oWuv7vqpR7yn4k9BTuinuaNUr5drVfGQiQBp5vwiktimnET3TjFxky4",
  "key38": "67LHGoMm6LbfhWgHBRzaK6x3GMVTDk1KL2QBCq4avSffBBs5qTDjC55C7xRYjSpTx9b4azktNPRdQGPJDVWUxdni",
  "key39": "3AN3uf8xVp1tVTNv8x9s9wU989njP1CwtFGBFandda2jy62jFHDUsG6b5oY7v3EqCf6abGKtQPCT8LpJsuiKmF6j",
  "key40": "4irfGDfcrtURfgFFyTcsHYfn3zQUaTYrrMtERAFfp7J3HVYmHmUxdDKjh9RbW1h32z8A5actHhnGuajXZA2cSDf7",
  "key41": "vFMVnyxvXmRBHQSmcAmKyHnVBH4GCAXzWGuZJkoyk2PL6sSUq8Xx9DAeKV29mnHxCTSCsRKiSaTUtpFMkDS6ueE",
  "key42": "4WNTxFPhuL3yw3MrqcEoWNpATqXJeCGRm8yY6vERoAN33CwhqJVoqLjSqAr8qSPZf9r9oUgQFfSDdBiiDLvGmyU4",
  "key43": "4yh5GXbwae3AJQVHLLenskE7ZPCzaYUNbe6o9v29gWiBs24ZrKPNe1eu569DpdRDXwY8qMhRRTAC9EVtpaFJXLea",
  "key44": "2oECWQVbE3fKFAz1tuPauA2cTAUqaV41AuGsJabWyMs2NHKyh8MtCtseKq6Po2d48tz1DxSy7yi4bse9ZrUH8aWg",
  "key45": "3XQtivqbG1PCGxGeJvmULYfTqKoGrsyRcVANnbp4YbZRbBHeumMMLXExnT4WSa1bY2aS3aPrf3yMizSoqry5jhuj",
  "key46": "59ainTpGnaCEwPs9oo7bVjWAiuTT66VAmHU699MNTNUQfdEK53tMCyucAy7i6KMHCxhmftWEvxDsbjzTs6bir91K",
  "key47": "gWzdakE3679iDpXVF6iZfzLhYQvenDZsC5PdxswYY6ZGBSeumDrnsPV2gaGTqUXkDZcsMnxVvEnCsjPF95vhD2W"
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
