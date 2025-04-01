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
    "4sAiPrUjpjDmAbE77dScc9DsMBBfB6VtsSdqdZwzB7Wpf7Znypt81hRTjP6fr3whcPbFXWyjKqxvceQ6HDyD12Rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53LPTf9vFyce12KTHN15svM4ViuNqxjPHokDmiUUCoqMGRLg6fTrNPC44QUgTevaLHUpvWLx1YE8GqUgAbgb74i4",
  "key1": "5MLvwdjn59DjpzvA4E5GjkGGJrzUNzzAvXXAJ7VfmbjoP6XPd5CoWwhrhzwZBhvfUvJq5tpsVRx5GA2cVx15K2NF",
  "key2": "2GsRdMJGorsoYHoJTFbAk7gdPRFfYcwB1Hv21bjxxAEVrrPn9ogmXRdCmeFzVDNbFG847eWm3XH21aoxvfKzHSPB",
  "key3": "4n3Xe9aA3Nxa23899KDDBu6eJ7mDzMvseRmJT5UqZiU4BQxvh9u5YzLBZdLTNfSUGPrvKvY9HknXvANmyk5QYt6f",
  "key4": "2r5Q62pMuXwQDoqdbm6cn92cqn5P3wrVjwLqipuaVMLeL6ZQDn6fwakCJvVtJqsumKnQzYs7Gg6FZ8EXGpa7oAQ4",
  "key5": "3cjq8XmJi1U8rE5CUBp5DZWJ7bjCWJx86oM23MF4oiTLueTwgpfZZ5jM7sFiUiEKQgUHQfkhDuenNkLHAQ3MyXMh",
  "key6": "34KiYCzYNgxv1WBktJGW69cXtS1MdotX8ESWreJfBt8emeJgkohZZBcCcxCfEvhhvpnxMsLiZ73p9BVwz3j6RuiM",
  "key7": "2yjZED2ztrcKjSH9bX7WM7ZDPq9UkDeMVFLJ3kHact49jKm8e1dw8AaKrf7Nye7XUoshoGbVPAxVSRhhMTxqY6Pi",
  "key8": "5MUnnspnGuwvxnCkAoKGVP4eT92MpPbXLXcg2i4rTML5v6X13t7vduTvpapvtjpCB4ZYS5kgotAmbjDnkpvZ1TLn",
  "key9": "3RVC5rTcgC6N4Wb7HeHxoW2RDQXwFpCLY7VzpSFLd4eD9vruGU7zeGXPztYnaucVdRhBnHEMn23QZFrQi28RVEGM",
  "key10": "4dW86qRwa2hWqqnmNq5tuFwrkj7WAvvut2qAXS1rdoXpfeAb7oc1EnmaiFnt9Z8VLyQ69cNoNgifnyQ8hadNhRJ7",
  "key11": "5qt2ytZ1nTmpymLtu1Q3sEb8uZTgTEo6KdLDegGkmwrpNjYWHRg9Mrj15KYWxWEaJJaKaKsp9fCPunkBJYNV6ja3",
  "key12": "2H39Zn2bkGC6SWonU3xoAp2mvGSf8XRNTtpQ1mrdT1GkkxiXcoUPAgmTWsqF6Zj1mAvYdrycyZ5xyMiWoeZqcw2q",
  "key13": "3pq8D9CHuD3dMZnWJA6i8d89xfnh1gJ75x9J6of1vwXUwtbuja2UkquA9ZbfHXWQxqEkYzngfS5YMjQuU4ZKZ8mr",
  "key14": "ChaJgHT4ReJLTwDoKoM82FstvqjaqVPH2Rq83C4emuVRdbRgWHprWKoArGbf7a3HjenYnGM9yAgWqCHgLBBdBqA",
  "key15": "34GJ9w7knKZq6V1bKt8SuvsYuYPHNPaWw3tMw3BmcGNToBHLCxkp1bNKRJLqTN7M4war9RHbSYS4qmsbVZEnDPVu",
  "key16": "nZtChAvkHG4PYn1Je1AM2guBo1rkNhTtvd9DsgEiGRqZUocpDTnaVHvUDU7bxJYYgMYHs6DmTg6C2Eogwzvrpx8",
  "key17": "3xDKZ9bMouebBuYDesJboeP81pTyaobhWzycoTMqyYViVozr4qCihddwf692YajqxoNwAg6NDU5dHJp94KqimteJ",
  "key18": "2VE8E193hB6SRrkjJmwpwSUQBTpt7hyQ98ED3bkRG8ye9zoetvntfo4BNdxZGHG9ULRUDa1Stu7dmHWYDLVn8Y1o",
  "key19": "5iqfYabUFw4ZXjoFdNJimNBMvYNwfPbvGSArfkzCf4eVnfYwvD4fwvmCTcwNgmaCMCD5Z52Q8U6tZHFA639tVkq5",
  "key20": "31L4wWcq3uxKS1jgtdHq6cCaAUnm9q2pfXGc3Six8JRnd4d2UqQfgZZhyDKvRhN9bB6BBBSjD7ikvqkd5hGcYrt4",
  "key21": "3dCxexoW3EtYVWKLp7sS5s9jve3YUgfb2SiRnqYMuSF9sjgCAy4NVsUHzUnCs221sP9izQmxsJhXawNXmYSMeQbv",
  "key22": "5Wdi1xpmWW5xUcg8W2CDFc4SDhhp8ZHdQ9WaBx5V36o1vFnRzCUMR8JLAVH1otBdP77DRQSeQFpGNfjnzoCpqm6U",
  "key23": "38Y9aDQwBpM1cisyhNBS7AxBCmU62xhspoK95K7ai12pD3sGKUR4DqYgHHbikf8tqKE2UE3g7tLKXpJnMTNGzqKN",
  "key24": "2yMJwoBWCgussBv7PJGN7TxLtSB9a5UkfrM1sSGTRfCubenSoYRfG2H2cc48ZN26mjgAXKPbydYP5aBZvmh9bmGU",
  "key25": "2NXZuyY7YVmXVDviy2Y9K4SaYwhWSF5B8SKFApeKEVJh7fQZe8X6M9TWKJWLmhdBKChoYZ3efiJUBCfipTFX8Qv7",
  "key26": "5qtZPmQatkHdGebnzMegWDnYWKBLg1p9weVCaJwAVQCL5QWazsEvK8zDPHL7xcoxV4dVjTBfXeNvrNNd3bXjtk6j",
  "key27": "5ErSwSbdSxLTQN64MueqLFMYDrhUis3BSG5PiTzHvDjigcUnGERmEvQxobcsd8awa4J3bfrPELeBbZA3D5znxCe3",
  "key28": "37RLdRBiGAWxfS7zCPYjdJyekkhf7Cz73cSZM5z6z7hYvYjaEH8G6PuhvR9XcGS3hKaBNPzQeKJH8jywaALYBqo",
  "key29": "3yx4535LEQst44X5PyL93dgDdzWzW3n8qfNeu4F1eq5aDUBFkXiS2WbDMsghhZUAuD2ZDxQvXyEagrF3tGDdNu5H",
  "key30": "5UsNqtQV1fdg2V1VrqXx78to7SNe6NABxKSh5SaqugsXUtqEKhCkatL29NTbdgoDAZwJ3CpvcJUbQLhAi4rTA3J2"
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
