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
    "5ZpFXvHA3KrQKftrJbQGisu2taKjXMYLpUwXWRGN6DdxYGTkBqycseDeQR6eQz1R9NHx7Kp1vmPxc4eQktzsvv3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fUAWQhw26zwJPrxNfiUE3Ko2EsKezuH3qWaKavBh9zpo86buSVtJvXvou6ChUWp9aAgyz5RwuSq9y5puv8fBgPx",
  "key1": "2bLviZuZdCZqXcsmfxDSiDHtzoarwdFyGp6WdSRw9PtLJ2pt6nhc4vbtYC1YtjRZJBvf74L8JjdCdoYvbLnDidXh",
  "key2": "Qyc3MutE8paLLXgCSinUkrA4crqCTzUz7nrQQiSyMUCWLp6ACQVzP2YsMr9HsCbCyeMfyvgZyUwGrYJZFbQeQDA",
  "key3": "RqjAmLgCTjikYqXqfPKQHjHrSUGAyHoQ6Umkt8Nh8CZ2Ti3WKcNhbQoh4Hey8jZ2MWAz4tKskD9Mv4feUjomDpk",
  "key4": "4VBaouzEigwV6Bih5o95MNjtoDNi4gbJjiTbzaUCuZYYGr46kdQ2hj8nfCytbVdtprS8VdPmKsRrNHW7iezXRsQ3",
  "key5": "28fFJ1oT94oToqgm5BiMQfLaQwPieFjtaSJYCQquFWTLFCf12mQLZSucKzCiPRqHMAYpYEKpo2YTh3UJjMBCxNCq",
  "key6": "HsTmnwPcaVdfHL1MCoEn3j8v3MrGwg6kfsav7pUmTUvm8fARxeB4JA71fYJLaCDZbjJejWApsbBY9edGsyiw6HY",
  "key7": "2N3qisam1m5hBKTvW6EM9B8NCJzBLRHBBX2niz2zkttrQ92VLB2C9n6zhHrXduVeYjmQuLtpAKLubRotHv49WuXo",
  "key8": "3Zd3F96SRWsi4XG7J1o4TA2x4jen8d2iopD4jzNroGjBwEmXgiCZ9b8QwXckVFb4NKksHoHEjmnAVF69pCgKS6Tq",
  "key9": "5KeDBek8CdtrVEc5oiSGBVWEzvQ5yVW9FJ9CdQkX97P9muKnBVKyF5Z1uHjmZXthzrWmRoX2Tw7xqBQ4mVZrMoqy",
  "key10": "2TEtBgG4sWCUmJWhLyVZkasKpPPXjCsMdzkqbp6dFajHMZj5g4zEcGqrHQq72jR7p7wSQU8cf8AHSebSikEEUM7A",
  "key11": "32zF9tVtM9axwDxpUNCrRcboovJQ12JoMeJQcDeQYy6HHHRq7sFdBJ7p5ZtNMPHnyc213wuWvad3fd7SmZszmSzm",
  "key12": "4SJ3be4rYWrsdHtS2K5nusqK9zZjs4eGd6JKnLXQbJfesJNjfQ9X6xg7cSN5AzyzfwJcWE5fdGEFv8Rf4Ahbt7mv",
  "key13": "5xjxQ65wJBzZL9b9n3UnH38UufCH9jScRkDd5UoGtS8PZbtgjyP4ZcK2Z56HYP42foEmrCSjW47zDPkYTNDhZA1",
  "key14": "4asKMM49wA6DvWHAjWjsBEXkQwT8ME42X1nPsVysRV8UyPuNXxVcxLqE8f5JTVF4x33HCXjxqyMBt84ghNBE6TGh",
  "key15": "5s2rUH7UqYafKRmoc9dpd4YMj8uXvxF4UMotUJ5DbUtkUci119wGLzDK7yncm3q8uJbQntBzVbRkuwcEGqwHWjgi",
  "key16": "2St2E4P6KFZehP8tZuydSG3yZYQvCvZctxuwtuknjuqK9Vv84dkUFC2cBKV15WGW7Y3iSKWaonPNrYnJPqstmeuj",
  "key17": "2Kn17hCGHeX2RmPy5CFd4i9a1bHAL6475wQFRvvhxZ4pZWyXhw6Eb4QVyENZVSpPjwXg8Kkkf9s4YWLQR5fDKcsn",
  "key18": "u4oxRXLFXEKHw1BihA77VE8XAZ5MNyJRwhCJJXsjRdhoT3yH4BZisqfKFTUGcAiDryMeGTQ6vnTbLTcTGwN4a4B",
  "key19": "e1Ymsd4nbvUCEa1umEc6VCD1QA33Ln5w55nuTpxm8K6V9YgnrRJ5BruG2JRZ3D7YFfZjErd4NQnBCHpNVbJL2WF",
  "key20": "Me7Pk2fyKp7enx94NvGk2tAkp15qsdwNi49fk52vog8mjfhpSEvzmpQcZmsVDCeqYmvs4aQ5LVbCcirfqVCMGCu",
  "key21": "4sHa7g7xHyhtrFjkQAtp7mNLGH7yJFSH7wZxLxizddr1EJXQbM89WyVEym7cnnt6HKTbNyHUZrwYQYN1pMSBMyLj",
  "key22": "4HtQ26DekSFjDb7auruhndiUPyqyakipAAL8tq6J4WbBwwUZJ6xr15DhYexRCjB3dpYCYpdcVHwiG2drVTPDF3yS",
  "key23": "3yHJjajGnGscPVakDcsTHAtEfTnfPwx5QL6sEd616zLdXFouiWaEm3cHzvGmKyQdS9N7kZV6vEUapGgkYYMU3X9c",
  "key24": "KRUAn2mu1RY8TtZzPkCkspZfcytHhvfyeobC2hpWbTrA295wrRrj4hc3KyqzWTth87hwVjbZwb2Q9yk5T9FM7p6",
  "key25": "3zP4wRnLQpPEb6ur6wTBjvLAoLizfVVZ2Av31dzP1QQu5DBewrd4wwfmmHtAfFnJ4h3iGyfrCU1dQdJ9oCwAi4cB",
  "key26": "5HbPuGgAmiJ4vDBMKJHJSm1YBbAR42t9K9x4zyoevUuYZ7rWerEwFAeBdQJZXVphLNMBvi4yS9hwkRKqwoMQqBVw",
  "key27": "4RxCvTMzYESVpvg9knPhBbzActXa8y4A2aguxRtobUi3CsAe3BYtAauX4rayMPZzx16eKBueKTU1LoVj9EA6Yqw6",
  "key28": "3g8dUMK6wyLJrqsAywPcjcsBcbDiAnmMe6RhJ6Vnb2d8sieLooDp6mnQ7j9j3Tb7gzdJNGSJ5Rzv19V5ZqNRe496"
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
