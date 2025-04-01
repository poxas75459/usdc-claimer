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
    "2EddxMFvYFva9ZR2pvzpsxaqAqsKYsbYtP3FwTbixxLUpnuPU9jRoCySkBEv98KG5MuENESq2yoLvikgVQHPtV6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SAVCwmjeBt34V2d1q6ur8ebksmjyzrxuwoF3xEPEzjrjbp6QkSLnnEnVF8Ut3ySSMT4Sbm2gB5qdDwBiEJ6qmP4",
  "key1": "5KHydcZAND8XncaABSxt1nghn139QmP7VmQWG1A6Q5jAQiea6idtMKUZHtuX5kXwnVjto3Cve18quBdgAiqytMcy",
  "key2": "5HaD6mLH5QnJR4KwUGmLzHemmY3kf7x9QY4uKgnJBzUPn9tVA3yFKPYwpDS2wvcqTgcKdmU8Xi1N97ysu6LNqM7u",
  "key3": "2eh6Vof8ZpNMocRjzvbfArwDuWEG1tpz2k1XAxkcfEbwHMTjWkDwe5nS5FYiZKffqKb297bSemQVPHnNu2kT5ZXk",
  "key4": "3uoQBhbHQrFt5tQQotSjeXmAkMXvEtHgE3ZAS1fVpVbJ1BggYgJXTMwkjcy2iFsY9H9ezoZ76feDcPBp6ikhyCGo",
  "key5": "fggmzemhxySXyGTWY1b3Kw7odEycCvwXVwYHanfi8Ecoad75ey3S8B5fuY7o3AjWTivgD1JTU9hU8ghpAUgfkKd",
  "key6": "5cqR1C1JTSHvrZEpocfG5VY2i42k4ctq1vTPN9tuWC68anU4rwZhczXGzgEL4BwtwANLJperfoyV7T9MkcnqrLqf",
  "key7": "gwcJR3yimF5U2kkc17jUQvVr9RW4z7tM34Py3g1XZwiiFaRovWhbeqbQ2FuXnxP7FxaPkgVEKr5S4cTKexwUj6p",
  "key8": "Xdz4D5k6b5SonjJ4GQCYszpf2vveT37ZVFYnfkZXHATNaJxFzSkqZs7ABPE7PHLFUAW8t8sjw6gdJELyUNygxtD",
  "key9": "2YdrFTQuy7JGNTMnnEWEME5BDhEenZWZ73C6yiRaM3YFmbR4jc1iRj7VYqxQkr3R3o8TWJEtmif4qKe1MhFV9fap",
  "key10": "5BCajc5saSUnZCkQZjriHvN1euamsW8ujjgf31VKG4ASEb2FqiBUvy4V519gM3hgfNFnMMhDULYQKSnwfNgov7v6",
  "key11": "FtWDbxeJGNi78buLEKpSLiCaoynm7vgmY9JP9JBrWhRVvcxS6akBRjzSuEvyKeEaso3WjnLGjS7R2xCNUqbufWn",
  "key12": "4n6gym9B1nZNgVVAFYuqHi7wF8LCZxxpVjWbvxjz2NZXHbggtC45wAourawKbvFrj7eTKNmf4uuUDEVjXs53UvFY",
  "key13": "2uGrSRwFMhtXGQ58XsqQ21pidoHPfr4AnnBGyTF1EFyuMCeDxz4VFan86kEhAenr27grWCUSBfuDz4pNbmyZERZc",
  "key14": "4aDN9v6qAp1tnX4w4kG6KjQ5H17HT89GAPHJ5yhPS4cn2VJMTCvAdbs21qQVbB3fpxxVjccCivXTUX63e1o1LLjv",
  "key15": "vGuc9jBWQzx3EFXFH5ptA5tRc8NhDkM524CDdvWAgzu1DRzBwxzzmaZziuNuB9QFawTd2PiWp2qL6z6qTCCS5NV",
  "key16": "3tGMnB6VyhPUkoa5V6CFmBwxvmSW5PFHyY1Frzu63HkLW7UaVkvjEJE7uJHsFud4Qeikowt93VEzabo9rqkXYgQm",
  "key17": "KYjYicNbQx7nhBt7jMWqXLqiLcJYRJzKCouoNzwtLHPGgLvgrmQUfNnFmkhZQJuuD3zBUEbNF9hgjRBp4yWAa5o",
  "key18": "5aHFhb2Xb9cTeqPod87yvxPcQ4BrSqSGbS5PvkijeDZA7ZKpMT8X1ZYvgufpwY72rvpbaGxBwomXyUPne6tVCRwz",
  "key19": "3CVGD3fZv4vJ35gU23avHPFUfRT7rwqvBjv44URgE26RtJVmtsPssE5sfchGgR5NJxXsSMoYF1ZueGXmoSxRXx1V",
  "key20": "65GwxzJBYMErNi2RA4fLdSkViJGaWb3fCRW8BGKzk6PgcWWSEsFgF7MWLaHRgpV3WJma2Rg6P9ogfXBRq16E384M",
  "key21": "hbejaV26KnwSdxDA7f1TrcwhL2EWa1Pa9hYHBooNzjVv4SmvoWWjqmLTBY4o96yeMzsANLed85X1AezCxcAAsjT",
  "key22": "5cefJgNgiYaabyRkjv88FT85BzcvAPzUk2x3nvghwHizGkSDSTmuUnADm3rTmN9Jvr395VdtuQpqiCrkhkBEZLEM",
  "key23": "5ynCpYgYNtiuvHaBsXkm3LSifNLPp1eS7e2BaecUs8x2nv5k9uEQMLxPqSniRYMhJSJmn899afQJipVc947vQmsz",
  "key24": "5LcbU5ckm9qY9HMKVn71rhz93s6K3SzJLH4osGjtC9fWKSECisofewTjqx9aNKu2LyoouUbsqqE2MU582afns6Cs",
  "key25": "4Cb89UvHdzTYRdVB5mjcKxAibdUgE1beUyhY2yeJ7PMDpNTH4fi2oUakugiybcnP84X1AVdnGPyZu4VEF6H1zduE"
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
