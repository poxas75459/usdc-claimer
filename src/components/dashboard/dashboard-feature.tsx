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
    "3mmpj8hgPFDagGKtiDQSCGZvMELzKNEwCA7f8Z3ngtrWJVDp56ST6wWFH7xEKDsLHQ4mz43VrRJzknKyWxCNTUjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63kfJ9h3Pdd7t9i6usDQRyKM5XXet9P4UMJGvDR1AeuYqxUgUKUXcphRMzbJiX6mNqM43ZsPm8fsTdvfmrTmyhm2",
  "key1": "5zokdYZg2JhkxcNvp6Xr5stPeNf7iGqW9259EyPhYrvpVJzP6LXnzukBfi6xwdmWxVm6jEn9pfvzLVpZoXULAcDn",
  "key2": "36gW7iuQgzX9nuMLVXyx8uqFgBiKwFjRhQVHqQbsoA2xA1Pqef7d51jPSs3kctfzsFN82wYgah6XEqgFY2KGuQnB",
  "key3": "4wik1cmrWfywFpwhMKTysyjf98HWuTZ45DMRsXXuGkQdvEpKxMk4fVxPAg8rGvocpKvbS8kRc459NZT3keoz5SEg",
  "key4": "3zor4SxoM1LnZrmmBWUR82xHREerNHBKPvpQVFJZJTqVR6sA2hNtAbDQLZp95rjiFBGeH8BhH1QMzNhdEsKBGTCp",
  "key5": "4X66JtMZ21MJT5p88JF8BP45mARiQBKJ1wyrshyppBQVWCpfJwFKyu8Wqd3wQEVWogLCA7NFWw4QNiZPS613aXSK",
  "key6": "5fGRYj3djp1UyfkgbYmFLy7ezvSTfFr6dhhC24AX32nZr392XxzcB3ULLjx3bTM8P1f1HTBmnphUyHfi3JzQWUy5",
  "key7": "4dZsEAhGCx6xVEyCYNeAtFXPrtRfBGbyJswypr83CByygRcN4Ke4RZWxFCE67czcEGdastp2uG1d9ZpKA88Zxpvb",
  "key8": "ypbu9YaqLhUh8rnNQDx4h8LFfysE8bAch32voEXim68G86mc8cb5YHbxPsrfFQqkfRa3ZPyynZJFB59eYr5CqGg",
  "key9": "2cmFAamX5pBQE6d6puFGtfq4tNQDUsLnzmtnxwzQgk7FMUKhukuM5siNJjiZrDFTqnPBfULgjBjJejATaxu5TRET",
  "key10": "3pCQ6upYRh5m4WdCnRbD3sdXPwaqg1h8NMJxtjkLUE4tiBWmpPCt7zDXqtf81GpixjJ4v2JeLuNktpRcXXDb5W3D",
  "key11": "65KW6ocogGAeibRBnvXbTJcV3XGpevX3WjT5H7wm8SrfXgirfB6CZ5MX75SgQpCyEFm9igTeTWEnhqBDbWKz2vnH",
  "key12": "2ubUbyAEuS1dVK6aCozREve5pSmN42CCLxW1xSoawBJmbx4YnCTk4n9UbyyfMbcP95VKeA2eAn3VBQoPfR5QjnZG",
  "key13": "39P9qmGRXGdPTmV3iLxnapNN8YmApYKBrKPDs4UQEdvTUB3g9ya33aUDzuZC8Xm6G38qAwymazsi6XEcJzLCqX1V",
  "key14": "3XFsSwvBrJnQoyyxEt5jshEwkUmH2jn9YkmYcTcTZacDGpABjKzScwGmyHUSGmpb9Bjn2C8jR88q86QPeWYLpXoV",
  "key15": "2NNjtz4jUFJaVn49vPHBUioDKbxdfDdvDxTPp9nVBEfg9Va5vTDpoo7Wqfo5bCaENFJ96UoekWAfNvbt4LL4Fo4a",
  "key16": "5iefYnG3Etc3UWfr4EyzVaT7FBwC43gMDgaXPVURkzX5zV5ccTSMfFuyNrQCazxDvmR9oCbn3XTa2jCSzfbz9oCQ",
  "key17": "2dzj6PTxpr4A4qdmNoYtbhaYawc2PfgSTmw5QgVLgSce7kHxBvivBC71uMVCnPi66qy3aftmVfYCok9i5jqH4fuU",
  "key18": "54orM2fHedvQ58cYb1u4cyBPQiULygiGobyvTh8uGcwG3JmH8pyXxCWsA9Hx6NGqLVhf2dyxo3H4LFrb5TABuW3e",
  "key19": "3o71iRKgMhxgsdYLeQTBSnvgwNptt9f8xMgFHSihWUf9JRMPbBcZCp34Ti8titBH7ooD4cXeqV2WbJEnigWjuRnP",
  "key20": "3sm1BLjFn7XFMDF9GMXVFRA6oYsKsVLkVXi9ULjTpjJ7CSWShPFJmukXDFZZNc6oA8B5DcnihydGtKotgUH54iQk",
  "key21": "4XbCpX4ZsKjP7wNkVFYxjpibdooMEryUeXEGSQeUYiioKbGowrspqBuCy3TduH4VmQgzFNE2HrCSz6yrAmSpwXZL",
  "key22": "3vpBrKSJFvqs7LpHmJ4LWU5h8Z9WRZKzCWdbFnBATxbSLRhFypeQLehks1EQciTKXd7nw3erRNbCpGLBLqkCT3XU",
  "key23": "MR5WgKDgta2c4YstYSstRzGsepyZYg59j8rcWhhNyiHzQrAYApnkQauRHL4AgYcq7HQgWRy7LK3jZY6WRQsytyF",
  "key24": "66xAYfQgExgCpA43pWehYjPZazxx6De4MBJ7PdwSyiDuxCy2nFKp3cdNsgxanhYgu1mvB587g3Dx7TRCyPGgTN8R",
  "key25": "5ZBSuzvJbaJtaV17bCrm7ZL7EyQ9GiJZZiWccmJFtY3YtHFZkxxpQ87DKzgqL9haK9kC48Y5KrFs1d45s9cKWMPq",
  "key26": "47k8xrgiqnXHyBxJBWBUXdmvaiiSt2Fm4x5jo9swdGnpgMbi1FuvaLau7qQWunmFWV49y3ZpskrfEkVVrpo9bnfB",
  "key27": "53SHREWixyuz88PB1sgp1aAwmJn5yCwyioGyhZqPrD5PN18p2yybp1TiuT8991mw6wxVgJ8PTMcjMwBNkxxDSoGE",
  "key28": "2zNqqYvn1HvGSpuT7s1PQu2SMp5Hrmuk3FotWF8CUzNCWF34GGuKadkkUbxrohk6oGBxxkvq1E3dLbd2M7guiMr8",
  "key29": "2SxED87e9XNXnjmcqb2so73abagop26R5uNdVNvV21rkn1ggrRLgH43YAVZdjWbr65teDRcfzyHyfhYTL4HAWqgs",
  "key30": "2rvfFHUwDqmPkiFN3QhFDmSwmmJYmaRagUrHP12ys9z7jv2jn4X2psfnRv9grepsLzuyCvDsBaZyscFrcy3W5PsN",
  "key31": "5UD4yXKbRqFajMa39jjBdumGQWSYutkCxK2YQjLuqbZaa11sjtzrsGqzJ2rZmLKvfjgDDmcJfHicnVMPKsZGccn7",
  "key32": "3BfKvBZwyHWQkvXoQedTfd1EDjjaFj6mXY77PCe1D1oiqQtbtKudkkJ3dQHYQBtxnu2upCvkiCgKY1CkQ5PzFwS5",
  "key33": "3UhPaynuceYrRCSs9c7k6haiqVtMDcayFfvKGJHwmGNrPy7asVL3WnbSX1mrFKr59BrT6PyCL3NycEKhAhxWNreR",
  "key34": "4GDncCPPfTrkFZAgLZMF3Lkqsm3cLkzNi3b818BSSUS1VuBnke7BXEvneqUgRGLxqqGZSLyvDtTESEmtKV7EfK6Y",
  "key35": "2CAbnc2bH1qhBfpcQ6zvMFBFG66MfusmhFhAYJQcQJ8iw29Rt9et9ofgnvs9LeuRGiY9GyDSBaCANwX78EatwExd",
  "key36": "5rD58ruk9Caeqys7a3G9Weny8bezdEQMM6qFPE7ZvcYSm31rfnWCF73QmroNwJyM3Haw4d8vqAtDpH36CXyiRvpS",
  "key37": "2EywoYdN3vBpJJoijdTZTTVcsttS838qC9A5EhdFobztYqZJZHDowDh8sUagRsxWAm6qTXQfeVSDXwzUn9jT7ydv",
  "key38": "42huJ7fWAXDu2Ktta4cKnA9ZaCFkKDRYp45vCGaTrBrhvw5vPivdnqrSK9baHciNZ7PVxxkfBkFoSyE6TC4tux7E",
  "key39": "fCBmsNz7dv4TUCNM74U3hDDBSRFPhpa8GRW14gAVhL9VXDwe3TZJkc8RbcSYRUhwnZ2WjGUUaKCUNd4i3nQUZiG",
  "key40": "2ftj1ZpnRUFCrK3pkza61Ld7qUZ192Dbgc6U2f2ciau8KA978yufJkaRxzsWmjrzcPjhijGytu1XszExy5a1QAbs",
  "key41": "3TicPaZe1Qhge8harohsqsCgtz2MMYb5ckR9ry1PngEEM4bVexAWz14MAuEsVatntwZYXRpyqDRdStayFYfrwu79",
  "key42": "2R27Z9PAoYAMRPUJ5qUAjgWB8Csbn96ciMjssXsAbnHHwqNRLADTZ25FhJHbkbuDzSuZEFxJ4Cu9HPj6q8PkEcAG",
  "key43": "4HM9PdzMzWH3gPTb28maXCHSFRaLsMLsodHPSfc7HW6jbT3ZuBKf4Q51WChjpHdiFjkU444DP9FCsu7UgdeSh1dt",
  "key44": "2qNMbagte5GyAWDDzGFQofRqmybM4SjcSQQdYxKFH9kUgRmwidATGKwfh7c1zqoS33jfaa7Y9yrv4KTG3dShzsVv",
  "key45": "2fAG2EWwraeugUqT2Pi9qUQMry6Nvf7seVJmsAj1KaBovGrtW7MDn7x6JxT4TbZP2UwMV1494NNubSRVHDFQsMju",
  "key46": "3w3TztuMiZNyJuYwiL6tYEibxyQSPuRgr3xUppHZcBdHFbAhqrrxrXYs9EBJdurHErXuehXzoPNh7xYK4vdm7GkJ",
  "key47": "4NzytnNqMJL9Zc6rFKuW6sJ4C2g8MKr8FD7UkjoyLeqpza6ds2A93em1fXQJwM3wHx2UrbbnCk5MmXQ6atcvzhUN",
  "key48": "5jzpAtWRGXvoiCbEdPZdmwMdRCKXohqAqL6aKHxzD1kx8ksZYS3k9KA6kDcTJgFdhCvrpbThpv6a5ph5pykeuzCi"
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
