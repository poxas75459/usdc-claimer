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
    "2QPB6cfVwVCXjhAXJnDsWpfkamYgx8M5jW9cstVysKomHhDgGxDZsRVji9XBVo6FSTUCFQeqLhwde3T4uRtQNt7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63VEnJPx2XC3Jpuy6XbVSagX2qMPjtZAzb2QcqG5x9czMhK953d7VRR5JxaFesnFiACafS63SLoKizv1D9AHE6gR",
  "key1": "26URi4utaNofePmL6ZsWQEnzNiDS8MgG35fyjk6mWQ5pwSgkEB7zvwFANYvvgNDNsEAT8RaVBPqKsmbdtfEHHwru",
  "key2": "EJitSH4N16cRShm1SmFANzXjGbrw9bSPtnBGXPfesTduyLNxYaCQ9Ns5JCi8RBE62ucmZJrMfF2isGHtHryBzo3",
  "key3": "4UMpkcWmSEweiMu7ryLg9b5G2y94SUX3NDrrVVjwqtL2ndckyygY7PpUnbJqCj61DZ4gowiA3umkGkjy21e4LwnT",
  "key4": "5BoqBhxmcsqV8asburcbDhWsAyXhkPdLfFGxFGUbj9XzZkyN13ecyLZ2FT3FSTHXcXDf4DBVe3ANf4tsMYEpk8We",
  "key5": "4Ecp8HWphLHBnLMxWFnBpF4miY3pSsmwtukhVw9iHbP1j4UkXvY3uMfe1UMmdXVYyesgCtH3Fj3jUiQrhzDFtXPN",
  "key6": "5nNUAjvQySdG48vSjfVvUB52R7s31Ps2woBHiXMfdVNtNSYa1Y6tFVw8Mdee7SfZJn8xtZK2CgsCMD9FkXokyeFD",
  "key7": "3iJ5LTGo92cHcechax9LWLbrBnfWLdXiwowyXqtpWh1QQ9Zdbvz9UzS6q1XmgPNjr5AAcbwra3Y14XsKZQPVv57n",
  "key8": "5hJk795yPkft8LsqsHisP8WrFeWFyXAU1nzNDwyDuVxmBP2YX4D3UQv5oNoSScD754a353tzdhqRY8aDmFoK5pLJ",
  "key9": "41heALKCpJa2GpengvWtcAvG2utwr1Bth2KPiqJSHqZt4XnNVbpgwYLGeVT5fm1jbvUMwX9ASTJ9gTudgKrRd44t",
  "key10": "79rx1mxqHGRuseWYDjRPy4wjjvvhrwuex2nGXEq9bgSo1H8ACe7jhuC4UFhi2TNgTVM29qTMUBnuV8pHRzrhgar",
  "key11": "3qPsbUZ7Qqp41zdozZ35EkuwmEgfjJFE6H4Kfri6e8S2YaiGt6jDC1vButeV4U5KSWFqXqc6qoorrMWuizjQP8wH",
  "key12": "2GvuZzeAWmdBoW19jfXEtEn4ZMcsfWw2P55P8xJTmcikqLpKJ1VEAdtv9AbnAzoUvXguR36A7bV6ARTP3n4Gac1s",
  "key13": "5EDzK7LieRjNjeCT2BKKDB8PmYtXbhjqh76cCgmr7QJh4b9gDerivxpVFWJNf8mnx69BYw3Z6AXib2dJ9H4L3N3f",
  "key14": "PABaC424dtifjwXRpTcG6q5fif2gHvBQ3XvHZXkvSLpGJ8px821YUsrWkkidNqmhMJLrzQMTopQmE7dpubS8663",
  "key15": "4c89ynAX3LYzBaQeaCjYhjnt3Tm39b7DhfpQTKhGKryBiPPuYUDBDSXQikW9dUaFKDSoqmpAb2Tf8bYrBFvfFNYQ",
  "key16": "5EUxex6x9KG3aX65Ste49fvdkuHetbMb7UmmGVWEJaUrYRSFAJVbpdRcNE64YCQtT4QAWiq7X8RyQGxoPEyXZBsS",
  "key17": "4eeTvFvPzXRX6KsLMQLqyJ8wwgP4XJXncdAGZqT7mzWEZKEgaBppST3WBn7oB4ifhnohFA78D52hATaFCLNut8Ui",
  "key18": "3E9r7VdqxkHjzB6ATjnhumowz41jWv4xqLcTB3o2nhhZPXrRVRk2J9vigTNuekTGYA1qz9xi94h7EduD4mvzS8iU",
  "key19": "5A1FHnSYjMiCDZG76Jku6LL1P3aJpSHoApnHMcHJFhQ7zb19RKNYQyx6f7rFnKSjpRkQ8QsJjniRkZiaSohEPBgg",
  "key20": "63fwChsCbzFe7ePhVtCbKd9dNJHFhbFebtXZVwD3kEGjstwn3GikgRA9faxEfG7vaVUuqfm18GTw1jJVzduoTLtA",
  "key21": "3z4UMHifrELd6W7LZUf9br2usd4cfhcdkHVaRfHmr9VMipi3AqDBoCJ7C3yWpJnjTGpAtg486tsHyGqvW1gxZJuU",
  "key22": "63LKTRB45kpgz73DtmPb8nzdFFYGARzHN4uWeWhXjddXrnXGmSjwCPiNiFJq5otefDr4rGhqGBfNJ8y8uSMWUQHs",
  "key23": "5B977trSvES95ShGJsQj7PMhCAU1PM78tCzBNDVPJFjvnogWc36GSJ4X3ZqH3hZPw8w4fw3UsQPTXBDvSdct1haJ",
  "key24": "4QV6h915sVMMrHRBfA58WeYD9JLq5b5VMAf4UeqHHhnb9W5vHLEEAVHF2GGgXfYpA5fSMVx4c3WTaJPKuBQc8Zhh",
  "key25": "4AQUgwpJDHMi78FiRyerdrzc5YhH3G5kNWQK2VFPZY73R3k7P17pde8SQWuEdAVSmW1Wpxqg5BfehGnoXtQjccq",
  "key26": "2v5yc4rvZ2MBwyyuvkEwetKucrHkVSG9A6deYGwC58fPXUUr2v7tCezp3KiJpTLBPX5CVimRMZE8zdDjJo28HTuX",
  "key27": "4MFegcH9W6zP169J3hKhcSV4CCisvsuhwEf7aaupiHyzhHSpjzmLzAVbKpb6cHkTE1yMEtBhAwmTjV7TnCSRKWEd",
  "key28": "e6MG22eTSy6FkhqtvHvNfmyVypHQS5Z96zam45o3mEKHP4eHkP8o8Evcbpkq4cJeeBkhH54F7goFAZDwLF77926",
  "key29": "2MZjYnGto4LprJFXNv8wKhtuGjbUnMDgKMPShpBRz9ZD7MEHARkEAAwYP42tTBw9UfWahiENizoxvU4VVEP2D5S2",
  "key30": "5th2WQ7Qc9GzVuFCr1bP4tQft2DhDsweGsTSTre2eHMRkCM6H3J1vzaXjk4FMMjbotvpo3VP4JT4fftuS7tGYTVU",
  "key31": "5p3d1R81JkpbonS1noEmgLSkdA3vsN3Kr8gT3X15cBmvc6nLeVG2BohHAATqGJ3ZA78xnC8t7RjtPjVJYsBXLLhB",
  "key32": "3AgVaCH1S5J8osRsnCZEPzN6wZ6APEhBAjXkPLfPkj8pND6yqaBFdyrwnVFYTeeRUrJpjjZABh41x2QRwM1Ufvhr",
  "key33": "2CKpeyfWLexUS6wNSJTbNvppLDscfVunXtv2pyfLZrBJ5vX2SoMUtj2zgsXe81jyqZGp8w55nT4gqeK2vPttEZHF",
  "key34": "5geqviifVqxBKfT78A2MSRw2Ujm9ukTU4Bt2HNTtrguEw9ACL4MJagcan3id7uJXqPuayTHd87JNihVWJCtnjdVe",
  "key35": "2W9SXowqBfuXXPhxUgxtiVdchQ8yeHmpMsPBXfXZr5RsAUmZ1iED7aeJEsWCvNLbYHAJnZe5f4MuZKEqTDoUV97R",
  "key36": "2EyKxrdrY4ADbsr8Uz9ZzQabcnNKr3tw5VqK2mLGsEEhUQnq3drUvVkfDTkorCWs8iuyJgEuwMbja6cabtDutpGy",
  "key37": "2zPJsQNVPiPKMLNDpTJobdXnwfWuNb4TuLxMfziVs62eRDm4t8ReWQWYiVpBQ8jjwJBQ8rmVF8g9Rk9hHk2Qn7wJ",
  "key38": "723NJdEN5s8YX9iFdeVMeiHCHfQmSHt4ovhCKMUzjUK3tkYsimtiSC2gK4Tph4JKiu3LMPzebFXhVYHmie34SEP",
  "key39": "2WEsSKtJyFUATsAdUekbKCyxqs4Lu64dwAzFL2JhWUJckUcr6UgZq4XBfHZn2dVv8fjvkZihceriHCM3YTPVFzDW",
  "key40": "4Mp7V3KzYkxP87mnGT1ELMJ7LmftUVuDjvDT1yVNg7RdWrsxXQR8bUdhTWTUeqCCFQfr7CxK15ynbc8Ehd8awvC4",
  "key41": "5LpnZf17bKeSuXRi7QqauWWSFo78bEHzcAtAp8hccBAkZZwm6mDft9MXybjmrXprAXGJ8FMLVYi1uzRGbhjQustW",
  "key42": "2LpRuZWwVxGk7riSKw5XnsEXUsmi2tkLeBrpz9zaC9RP2ZXbJnfZ43xxpHifAdtgDP6h3vZu1XSVeC4BMw6JSexk"
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
