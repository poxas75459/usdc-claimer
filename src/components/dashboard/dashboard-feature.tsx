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
    "4m9e3LA5yeF9Gs5XjhKmiTYzwCSk96D25Nqj7WjgjAnQwESJC33E95VehDZAXSVe5LDp38fhLkLDgMhRkQdqZZ36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "274M8kpW6ppzjVaSknzwwpSimEWdeXvx3sEQbjfrWrSBjuZovJbfD5YmhTvmhVeNBvEETofrfhFZicfNaEq36Pnb",
  "key1": "25WnUJZFmZM6pyTQfEZ6Bf8QQ2scVVxSWxXVLoKCyt5bcHR3NJHXznieRYSFcYWFpqYrZee4tqMysAwMzFBSMDGL",
  "key2": "4UeMm4rbm5nddFBFdAeL8MTboTnR2pZj2B739S7LDYM3TJuHcuFSeThMkFvcjvtYL5YQgkezPGKyJi2WQtZS3Rez",
  "key3": "5kNTrGdtAL33rHybjzKjto4eHwyDgpHczb6wSRCgwbXdh67BPPzVixYPWaTshpzqetssUPaLuHsQqF4hoR7a1wFr",
  "key4": "4yMPDKjBormuXUB8KPFaUFJtXrkBDnRgMZSqst31qqVBnYsSyS52YauHKyAmdpvkzA6MXSVRoUsL9LB6YswaXJxf",
  "key5": "41gvNVDyyGdXeiakbjDb3r5wmxT1X43CgDvUDYcZRpJ6aPNg7QexTe8tya4roYUHMzbt7x7CS3xnpKJKP39Cb43X",
  "key6": "2LB6D6wY3a3dqZQHNWQiJfz2xuBLh3wDmANcXh11wda5PJQtoTu82zDkqx3GAoGobznFJTTBVLk25HWk9KuU7Pei",
  "key7": "4RzC97m7auoEsHcGAcr3c5u5KQZQzM5kZnfZKnXBpj9hmpYT74janQ2V71ah1qZ18Da4tzcrikeC9A3iiwufdyxU",
  "key8": "218bHpfBmSnvrgcyCHFGx77xxYaZ6RU9ZgddcqDZgf63MU1m4LxG1c8bn9qkAkH13UVBZPYkYx6V8fMUVCPDUHi9",
  "key9": "T5qLtHL21ksnrK9Kb8WC6LdkurNd2v17nHo3pZgP2vuUECWgPD9n5KRm1uKE98pEXHW7xeLkWm8JQJtTgafP553",
  "key10": "2TQgFigwEJRABGLMQ8xouFyusNhaYVgip35TGMF5n1DLEuyjEp5j465ZB59VPqhhdMZ7EUA5gu1LMi4Hgsaighjc",
  "key11": "5zvAgYr571EHrLweh7KXN6dpPP1iXEAZbRUjkYAbnCmuFGM8QTS1vpqkExaFoTD6NgBdt2mAP3zd6PpKnKb1wzKs",
  "key12": "3a2XMYLieqAHP2fWjdfKrUhrsNrUJAjGA4Utkd9GywGCTUf8JGJr75ZbxQLjciYSV8gxhriRFCT4wt1N92wNANsF",
  "key13": "4CCEjZicZQVwcmj1YxBJspwmU6nEmzNGLLebugF9ogjC11z5J91GNUnKjt1P9CcNgoohUSnwHGnWbno3E2RfWCvc",
  "key14": "5C4XkZF67XyNuxm8n6CRsCHxNmyDTSZQYJ1ThyRAw32GhSdnBHWxvHLGdJRH2fxv73fYcBk3NLsd68X9NpbJGwTg",
  "key15": "2RHaL9RmLojMnx7UXPHKhf8YXn4ZDfXha6UjmoXLUamVKGrCUBLstfzgyGep8mfQLVVyeo8bXCVV9bRMNwr1jeT9",
  "key16": "4k1p9bj9JFiE5XumBJohUZ1gB4whv5Yr2xxCwYiZufgATTZg4fSprjNiwaRkihiYF1QsXmESTv1rPbNmoEvjawis",
  "key17": "4RTCT9Rbf63RebeJKkWTkw7dUKM64RZv1njhtXqFo74Du8yE1xYihWuA1SaghYhmbhV5WpRH1Pp8PqKpqFNQvDK1",
  "key18": "u7bNkxG47owY372p8uJe3N2QmwvM9nXXZ4EFjwguY7gdvQQbRsWXdHKZN8rnAfWGcqyvPUMiDWGnLCLpE2Nkqmr",
  "key19": "2EGmofEnzFHnCDUZSiH7MbmAQUUteKwunhZCzoescgxuk23HC5pMxePDuejvqiKuVM9RkWtgcuDhcRJFTfFUree5",
  "key20": "2LJVWq7btQvUscrj4jTsm1tnvuGRij2BcMsCPwbyUnR6YGct4fF4XLAWUj6HNNt3jGMfZkFZaEfk19f1oARkP5tM",
  "key21": "567Mo4VqFBFfhYpu7JjqJXQyXAkP8zYGj785mdnRePPxfjv2mrn7pbDcNfNQ59nGog2hmv5HSVy7U5r7fCLLkaL7",
  "key22": "3F2BB1fqC7ZEzfDjDiNJDJHK6TTfovZjQ9NM27yxmmNt1tCvdbKynP4xk3MdPXP4sSKFSXD3b5XzJSCWjUmuKLJ9",
  "key23": "iSqsRYs8G3xsMbLnCWdPMEgsm5Cn3DLX86PkwCLbkSnNMCNE6nXA1Vw4fR5PoTon3QL3ZDV9abXEtUfq6fRr7iz",
  "key24": "3dLWGRLWHjr64fVpSxngESbPBeWpLMMKj2rij1LhRyVHcs5LcRbTuRaT8Z4ShG3GxURt3MiHKMb7kXMZoDVhuUdR",
  "key25": "29bMbw6qcUfUP5fjLfm8vR5E4yTm958VGQ7VYCiKYp2L5PjzB1cUoCJaahneVAmcPoK5HsM6Ae8yHm4TJAg1nKTF",
  "key26": "3TqCoqT9qHhnfRqfXvRKE8j5deigTWt32a5C9vAC9GvZ516GYoKDj8xtuMQmBrLmekyamrsyyZ8z8Mu424BktqGW",
  "key27": "5fXJ8cLXyiNbney8WWSqsMaynwpBZxrKCKKHFg2pPyUyviTBNJNTM6sDbJhnUNJp6wycTrPmLQP91RiXgE1Q9oKW",
  "key28": "3F3YNEUv8VjFhR8pXXLenuGFFXtxmoRtRpS3MYbtnWT7bX8gFf7WnjW4cUWpcYT6r2d9xUMTcqNJL7CLhyZYrTSt"
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
