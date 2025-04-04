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
    "29CQMGzEnhpALw6tSuqSjuFyGyvZKuKPtSVWxVMUZQViCtDsmyFsijF9jFFcGA1tQgyTp5J8gFFUgvU5T1S73Ged"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PTtzSjRyEMQdfC1FMAuWxR97J3Lkj4LyF9HS8KL6oYCNStpXLeoVaLfn1DfLc48PJ164bvB9fzp1bPViN644zmq",
  "key1": "5gnFzKgM5CfMugEbHzuiL6PCAxNptJi8efuscHBmG8FQJAdmtMwpgeVVhgaecN5koBARF3YjcPmhpae7cVEvq2zK",
  "key2": "yoVUEjUbELNoecYCpEgiUHfK8NWhEtxpa9KycTn4FoeGZToDgDo28NuBjfFEKLLLgqGbE1GDkEbXWN8Lh2k8QxQ",
  "key3": "2EDkCfcLUmNpuvimRZQHnUxKrn97oxrgPmULrMVAX4QTeFyYnzRGbRxB2Rhyo3Lj3ySacrzW4ZVP3h5SQXG7zEcV",
  "key4": "4AWzLusJ3kVkP8KP2JqtTm4cZxbUw617ixGpzsNDsN9GYnu6mq6jjyGgVTvBQE83TvU5iPYEWSVDoL6mxnC27eYc",
  "key5": "4L8kFaVQfUh56HhpMfRbXjrydKytsVzbStxKsJUhbjqzr4VUoxc6puW6t7p88ZddZEZDoNU68ESzDZPVDpxPp5FH",
  "key6": "3GXV71FSCNkgExwS1JVakg8E7iMHiykXCPcjC8WAjrap7Z78FVtaJq58D659mpiJh7U45WDxWQYi9UwjiUUYvdng",
  "key7": "2P4pbFYpkMR6WzfgsxyEJkAUrdZG2VjXmZycwg3NkdpSu9AhmMiF2L2bF2CHXCYyTnfmNcfGA35SH25CBAWWut2h",
  "key8": "2rxihD4hDZXzDbUnQBgaDYF4fDzZrLPXpf1kLWKC7qBMEAMM691TPSQe7m7Xb65x4KEFrbrnXmDMgtQzyjnwHBd5",
  "key9": "67BVLqSc8ACGd3XRhCCGLMgtwaByPCgS6d266YWVV1HBwSXq63h5mTyk2xUCjzgR3UH1MDFRxyUSvARSQTdZK6Qm",
  "key10": "2syrFu7NTBYRa8uBRKrgo4yWUTvmeJw1jQmrwQvqFxcei5aquppEgE2sNCH6UtAtbjrquLDwB5nbupYy5EnNsifC",
  "key11": "3bA4SDtuRRPQS7TWbmcYc6bXQoMSBntgoSb55xo2c89MaKdSLXYU34bcQUBuLKhqM7Thendr4w1x4YpSCeqnrEY2",
  "key12": "5LDkhbdUsnxtXHHmyfK32MD3ZtKuAtTzAHB37UELUzhJW9Ue8G2q3beDDfuupNWqtW4HFzW6GnFMceasMa3er1kf",
  "key13": "3YwKbaSNL5oTRuQhAtPokYfPwt1eUjoh5qqtoiD2uv9y4Rf1FWxtJNE1kyK6wzkEmMHepgiCTQYeagvTnh3LAwmE",
  "key14": "qN4v3KvnXwZ9HnHr4ypzgiPp8sAwDbudcVibSEyZ5rHEGAGoRpyAtTswkK1WUFkyPh6ijY8Y8eC7krGrrVXXcsn",
  "key15": "551FcLoayyi5nkMA4UZMuBiQtDYk9papCjMqXEiqVSB7sV3DRc1ubtR3ym7aSee1bhkT86EwwJyKGFh7ixj9sTWB",
  "key16": "2oaV7jYnb4rZsFrMLvPrpAFtnGBA258YFxmf3WqNw4WNjvCFNwjYG5AJi2hzj3X2625mtzxfkmVtvCSNGQx5Ld7u",
  "key17": "UfuajsUKgLpDRfRZcyuNNVsfCkhL8L6BNyutrhAnUKurXzXt1PR9XqJdMbYCLGiAcHvqs78rrxkvdmZ2p32pHyd",
  "key18": "5isYsvikpJUr59SHsfvVdDWf6ZTqjkJyr8fTBQthP99RTV3GMKCVmQbiKupAs18ZqKCe1eqDV9urWUpWYMCCw3iS",
  "key19": "2kedCTGgnaFiGoGm9NEQkMBGZjo75RxRtFTRAeQUA3YUH5GDfWznGnWftpFgyGmB444LSrLmVY9HYiHcL9V751Ni",
  "key20": "3sMVWNDZMLPjjepxNCjqBfMtA1PCzUYSNTybNBkaeVmcFT38bAkDpbmq5x8ARiBvkcLuTTYZ3kvvkrDmfLwgh9rZ",
  "key21": "4PNwSEYctcFvntEMGXKax1pjCe7E1tL22vVL5HVd3U6G2oPP5Rvfd2kZjzBwkaETumBh2LZEdJYEUGPSTgoc3awY",
  "key22": "4LiPDufmrYLcQfoAm8isyk7vtvEUR9G5Ji75n7x1BpKWxUnwMDrAHG6HJH8B8aykAxPudMVz7o6Epu2LBYVDCFYd",
  "key23": "3qe9s4kddmxhB6kANcF2pnCAVmbekYwUzNKH52yGfKg22oCPzUaJbNBB4n6bQqEqxb6GNfGYnRQkRB9jigjMy3Z4",
  "key24": "27LKHHfoBog7sqrN1Mr1QCGbBsyEdTer63Aj6Jki1XuCzmPQSphHCMxXazFnq2HR5UuCpWPYpmMohXVmwHq2naVE",
  "key25": "nzDLG2NKseSKsmNuYkfQqEuqYrAuZqJdDP5nPxTBEL1GgkEjmqrRDhrKQaUxVkhCUcgcucuE6ZaaC2DT2TyqKd9",
  "key26": "5pMfbsc1wR8fdpbnL3H96Z1XXHc5C8AJWqH7W592fUnns6GkeFqs5wt786eqzwBt4RRdXjQBgQMpMStFy5A2CvyT",
  "key27": "dJZUdHdYr82P9DM9kZyDSPR5U1ieU8pGUXYtzeAE7vvAqCU3fpDRqRsRRfigMFzQHVBW7KXKXTzrHjdJRBbD3s3",
  "key28": "fBPdscor9arqw4TJjM6iX1CRHKwQGTJLVW2vgH22avaQkvcfoTiUQwqMwBbQQJdcraDkeGBiLauePfUQbxb4dSu",
  "key29": "2NJ2DUiFQ6hWiKviBirMFg4jgMoJJmWv9PB6ZBJhS4nUBwJJa512j4vscdX9GZfWqjuj24sKWiL1fDtd4P6S5XJm",
  "key30": "67N7oo41W4fug77QoxMhSCCCbt5azZDhHUNktsNqYKHXKrq8gmTsEz8aWALM8BbRwk34QA6EY12GDCQrc8DY71sJ",
  "key31": "5V5WZVtubyjTC3aGfHgy9LJ7kTrpq4VZx4eNW7jFzwuBg2HfTWdo4eCPsAbotUuK7xxPFS1qoAzwFvTpif7wudpP",
  "key32": "2xZ7YyEnLG8S9TsKoRqyethqo4CkxsrCA92MvEXuBrGSpzFXvLLMfKtq9evXmBPA1wjcLdp9jN3wzmzoWoLAFQNh",
  "key33": "2r7VnfzKn6s1H8CERYT4KXUgN4sebuf7b6j7sxffq4eT7cXfZ6BtutbGQUcQNUUfzvWNH7UHJZSx2WtLBcX91m7e",
  "key34": "2NscXFFPLAuGXd4u92eHs4Ek27ghJnADpXS3wfUz2k1A3dTV4XumRN99BxjJN6P8Wnq8ManKUsVA1jYLYEZx1Rdw",
  "key35": "55xvKpmFepjcSJAD9LK2U3DkYEz2SUHGLXvD2LCfMhHgyrP8jxwTt4EQGs2s5sAW2kYRWUbDXm1CW6R6Ma4YqmEU",
  "key36": "4xBjLAfF1sJ1hXpq5QHPHfb19BU1cpLW5JXzJYWXHchBuTKP2acyzWRHBd1frZBZBS6AGdv8ahGAt95yZJ2suFkJ",
  "key37": "4f9hMPf3eydAmCBVagNJYfR5n8V9Bv5TiVJ7cd2ArxX7cUckooAL2njjj7nSficeuaFyVjzLYCucbLC27DUST3Qu",
  "key38": "42ZsMN2vHzFatip3Gq4EwLsgHTUmRWehW7wU1B8ftLZUMDWPZCAy1kHS7AQUKDXUy22GCsbH8YKPKW5FNtTNfkKp",
  "key39": "3zMb8nTp5G7VP5RrXqAnTMsM8bRLo9HhB7EUcpkuFfkFX4nPFjPibzxNM5pGHtZVcJW4wpdD3QsGCLJqZ4bsGhzv"
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
