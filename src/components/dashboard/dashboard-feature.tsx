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
    "5wiU8ycVBkHoHav4g9aSjckmKYPZ51CJ8us64BAPdmsrrQumYFUmoQWPPVeuBi8PXrj9LtKz1DCkpyugWyCJVifK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xkq2bXo1FNZJWvMJCYuu8WxzABvRPFDXsRDv9ktTLL3zDfywt2dXKHb6q4A1utXUCfwZ9tWei5GHK7rjShZVva5",
  "key1": "7tS5ky6nCXehRk9u7w5VrCmqwYEHdAT5T8meQJUcFmuxQ1Bg6yM9XBxXRMMe1JpFAhwvdddnPKbkRG43gt1DKgh",
  "key2": "4KTVxopcdNP1kEJNggCduzDiJjbp692BpATkgBQRsKY7Wg3MFnvA1DS3R96Jay45PtjehSuePikwxnRka5A4SXcG",
  "key3": "2cEhCmo9GU5mqw4AMryL5ynJ7uoD3cESMJBbVqwhL453dqJvL6H1LsZQmGmVWngvuKvwQEP35ujWVQW96ztihxFN",
  "key4": "3n1YxzRxQa4wbFPAzZZJzy7G5mH8hS29sAFf9SwXWFYH4SM5hvZZ5CNUuJLebPU4rwNL6rRKov4AyCbBdUniLFtc",
  "key5": "5FuQSM3TRh5xHA7bzSw417xQZ1jiPW4G83xArdeDPnciGg8yHHziMjhqmANH995Yg4pw24VLFgRwursdxx4aHr6u",
  "key6": "29MwJbSMQgxg1aA3QMrWVaCamR2GGzVdwCrir4gVKfe3iqLRDB2W1hhZt29umMErvyf5daiEBYUR3vdXz9x2rvNj",
  "key7": "3i5xtoMkY34QjsGyhMjLHEENzufGN9pVKxa8Z3ieo75jifnoPB5uQaLGY7PTGcax9P8JmM7WYNyuw8QTbwYMCRT",
  "key8": "37vdiWUFrhyx6Hny4ejn5pVBuFhBe6Vxt6h1ka9gf3aMuRtPUPaXtjUN2execfNs7pSCt9R8Aa6iyh4e9AAJ3DtK",
  "key9": "27kY12ndtTwP5fSCfhqX1scAMktcnmE5aY9nqc2e2viZ7EcFjAGu2YAKUzRVBgT1fTgXKs1STm7WQLHgekweo5dg",
  "key10": "47j1edk8keVyvEvav3ucW6S6svtcRQAfDW3YrY31hod3ELNP9GQuwG3kGNfBfRwx3og59UzgmMs4Pf9oxShRY8AX",
  "key11": "2RAJwSZrFCj7unWcdCUwekLEB5w2XCfvdX2xkDJTcmYAmcByAjNXme7ucMJxjuvDkcNiYbhsY8RNHJ6sxhPriyUd",
  "key12": "5YFKwfbs23DYrGRsT7CBpYzFuHL373Cpz3fY5gEsSxXDP11boSZ1javPzVL8JDRPmJwUE73ERLCqh1YQGvCbAn37",
  "key13": "3jJ5KDcJBdoAz8tAW9EVSXH7DMuPxctMHZkoU8WLLBJigMJxdb35B3TwPvuJtfcboLVP2AwEXhJo6nh3NRZ1qSFN",
  "key14": "vfUpTwg4zodiggPCqC1SrAw5mW5LuySqLJQfnx52zxsZAvekk1icDaSoHtSMoncPVm3h9CHtx6ADHjq1A6BEh3e",
  "key15": "4zvvMKixEUrMdK1b5uXY4ihup1qJbvWVWHqdA53zwLZqYt1kKwscZByPbz3Se2kb6ogNwgPVJS1WvUDR3UaFyBar",
  "key16": "2DzHdc1wYKL48Tbb1PTzsQ6hULikZMDttZUSV5fvMCYasCNgYEDRziHt8JGzMb5tQKx2T2oydx1tPaQuNASjn5HS",
  "key17": "2bbM6Wcd5Ra91LgV7HuCMVTymmgWjL2dUKb4khhS4498ySooHoiCJPnkfNczwFQecAE9SYbMioaShtpWacNy7suU",
  "key18": "2CrShSxxUx1Gp72RnJRXTu48sXegPTKomcuaGD9fSXK2hCQkQUJR9gwpD5BrQeTx9QAuzeq6eDFydBys3BcnV6Hz",
  "key19": "WFRtRdfCBDfKibyq9i5uP9mgs85jsGjHNx7QjVeHiTfNCj9667A57LGLkff7C5FomPNFsNS1CkoiUbDFxisM8vy",
  "key20": "67H3Ah6GQtD9hDoJJKvwSdxDqkycWNQ3fVu7pnNt1tVtwz4AwKTunXwc9nLh7qDSu69j7bxzdyhEZRZnYk71A8su",
  "key21": "4pVJprEpKLP2T8WDJCD4WjJHnxbjmugaRJKuXyz8vEMBWwJsQkHJkmNzDgGvGuKPmd7u9WwaHze5z3aHMy7pspBd",
  "key22": "xt5k9dD6pyspMwjpBrS7vZbvjdYP2zTjL1jt7aPoHaijEGjqpqTo4PEyXdTSTMcnrCpc7pzpGn1g9JArQqLSEDm",
  "key23": "3dPesWhjJ3YQp4mT84RvLL5f8GndQ6PWjbHXtEBGxWBu7rvhYRAP8h9ygsWpKrEQfpPypGTJSeRxAv3iPWLvMp3G",
  "key24": "3vVb7BFEs4zS9maMJtrR9J9kd7emoiL6macLP8vdvXHhdECZR9N1nXjnh76cWM1rug4KdspJmFRwgM8WfF4YL6ya",
  "key25": "3UVa2mgrMtfSiGndcJpAXuEwPS3qpaWL4dnts9ZpF7RMutbLJyk4YR7hg4eSwKS8UBZHxJYY1ZM4bpNn29dHy7Uo",
  "key26": "3tf8AWSvEwxPBHrGLCTnFcqwrVgL21qDQCQocD39PWWzhe86Ypi1M4AFecP5sn6ZqxoErKBE3NkTA5Ux2x7DZPSK",
  "key27": "vfoH65DE1r5E5xuZB2m6tfDQC2T9CMaVLjxRuCRmrxyXppgn2Fjgjjzchi8V11PsUhKHrZsa8Q8UsVCwN5dj6Kj",
  "key28": "F78PCQMnSp3LXLhjH43qHfDzPhjWf6cmuT7qdR12ctkGC7fJKEjRMzYZZBmGfU6wLGbCeeub5WK6K4MXAy5Utgx",
  "key29": "3hKu3zSgM5SisgP17fEKLpgAgpkxsQCLm7fgE97pBAbyYCKkoZhfkH8H1GEUF3eJsYgFTNCKg6PRWj68T66GNhrv",
  "key30": "54L8p3sk9SKUaauDDiwoko3yiKLeXCVWdRZissGD8RfiBgb9dxheqQypgvJongw3ZSfCmsbWsQiCoQmU8AQoBEHS",
  "key31": "1mzqMQn8kV9HL9S9g5jUXfKeF3SyRmmngp1AbEdr4wVxi7Zm1wX8pmYcBKvU8VvxbkcSEJTcQbMyszwJBUEgQA5"
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
