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
    "2xvSfGWzK4QZXfkn96SFSR4ZmgDdv6N9LMzTrVnd2AtYCpMPGZaGAnJD2JkpAggxTy6DbDNSFHurCWjb1jRuaVAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zj85gPbxNq1bQXX7FqjtXRzxc6uKN7Unpnod7sPV2eKbHJJomtBwewAgDsQsxHoBpEE19epyWY3MFwZpMiPZqMh",
  "key1": "2RA3W6J452uGtSKu8Vkfx7LKiPGUMosCK7qPQ29KBCfQ2KoY4QcNjwmuMCMs8nim6oELE5xUxJ1U7xAcZqE5vcr4",
  "key2": "4Z4YB8Rtids7FzKBPApHLndZm2KsAm6mWYn3bZsuWHnrWLKcPVNHJrVKj7oYwjr1W74MLLj5jubyYtYnNwchXjCJ",
  "key3": "4Hiszabrr8zdhHABtpCQW8RGXwY8AjqEgojcoZdaHzsyXhA6JQB7vEhEUyTMC9yxxav9q2xh3LLaLxGoFxpbsGC8",
  "key4": "5HBscFF1Bp3pKYNyzrZtJDS5nNZPzHw3i6c1xvXn5RmpqDJxEC2ukiNb8izRXMxepPDoAnQHAohFC5uEBvktJjGL",
  "key5": "2kgfBtAhjFb6FAawEYa6hAK8pdjyuV38Y4P6iPjKTob3m2oxtXGMQvytzgWSktHgJy3Vrz34kKxVzNXuDZsxQrM2",
  "key6": "41SrsHpSrezLLWDcB74pZZYBgjFTNBhxZ8kjmdMUi2rZodmmShNBf2tNcALd1BBtyRoRUy7zeDEtvbXtw6D875f9",
  "key7": "5fjcAQJ9vA97jUaLFsQEwu5v8WSffVjevNX7QSPWTxhDs4CYaw2s8fHAuXmJaq79QiTgLXoVUoULKZsioiz51rDa",
  "key8": "3zQnGZ5zPK75wjqv42nvmbokpgRh5zqREjXQHM6N2giDauVhFaeXLYSGRq9dSVJXs4ug7Q94QsqmYhvBKSoeq6Yh",
  "key9": "3qAkXDRawNzt9DqeqdWBu8rXnwae4oXFGLNjYsX15EdzeAc5561s6s8v8yCpAMvcke7rCnfbqyCMDJneMteQK5NT",
  "key10": "peGZjBJsNUgrsHdXub1UoJhAQD1SjdkMFEdy8qdeU7EB4pbmGQjk7Sa4s1uCeqT1zJfQQzGrhu1YSZ3rwBHSaMN",
  "key11": "3L6QEkgLL3v78LK7nNzszUMKXVBsvmpeHgtsyQJiqQNiLCh1u7Chv6jNnmTsRnXtcZSPYE5oRBP32vAFoaPT8Ff2",
  "key12": "4iwfHQ5FEFnihizUx4QF1hrxxaD5hNnj82wWUhfnaFLajYrhaCUeKLJqrr1B7GLV4gxzupRm6AjFELrvzCB3Meq4",
  "key13": "3ibkie6vsLuCcrcMjEUZKoUweQMUwjTRWTwFSt795rnoa7sotRyvz1wpwwVsGawcA2yWojcAn2AD5QmNk31pEuWr",
  "key14": "3DRvdPUPuP5KLKjBZcGbvEjVLRPhGHW9ow3Zy5WnnuQawJN1y4AemXneNhZHK4YLSZxpuRoaa9Pr5uRSpL5gHPhd",
  "key15": "6Vi6uRHVk5vTLC76nyjbnhp2n1PQYvDfRnZ7Ndwxx9uMuARE5ghVnxRxxagEHduiV8CXc4xGa75MwfPmiVKaBSP",
  "key16": "Mb5A14GLR4kNWbUFKfZu38b9CmVdhoPaGL6Fniyhq1UU7zjDfz8uB7fbvJJKuuUeVbuw1gczEAyRSLzTkmCDhPr",
  "key17": "3F7gzdovwoqCdxpidcMGtAW5nMPvpiziTPacVbFXeXiY7nKKLPXoYj3HBWrN28p8ANvHfAPHVhVxVKAi1UGmgWoX",
  "key18": "4DRqFR3TvZw3ojEsP77VVtcxLB8ob6gQsdrArSdqxVY8Fc3hEVsRd7XE55xCuhG8eKpHov1WYw3TVoy2jyZkjjbn",
  "key19": "395EiSpz7UMgha2cUhko2RD77Ruzf5kPwGKhdxNQXgN1Sos3UeTjwSG7znbtQYDRYX8C86xR4ECkzikGKQtqBVed",
  "key20": "5YphU2kuTdA9TKnHPk5sCHXSHn4pVbJDrbotk37LW1LFWJt3UgrqUGinvz8BUzokePPfBasnCGcJ61ex6b7UmqzP",
  "key21": "44uyzcw7vLGwpCr3ZSpBEwn1zZRCtKzQxaKCpUHabYYrEojgqx4LLFgqmNQ74JDwoKdaRLeJNfKQbFovun9mRmvL",
  "key22": "3z8QE4ERUcTbSA5LHCGT5C74zhcwLsJHSa53vmoHVLS8FECY4WeBKsYqCCy8NomConcXy45BAZ2p7vNkkJQwJMSf",
  "key23": "JVsGk4bzGyqgqSAY15oY6Su9PnUhiC9n4vsrtGwNwBr8aGhVTK3C8xVoXpBpV77Q3WNq3bKMaMv1SJgPsJcFjxK",
  "key24": "3oYRdFbeDHsKgDBiVgNLB6ixBJekDJqbLEiBJppT2UgRcoVFfNFJmqs75xphFp65nAykZDs9HHF7NtVM3SUPRNVt",
  "key25": "2EzkC87uLPY8xzzk5k4hdoZswxvmLSmZtM67qknEw3DPHpjAtyt5VF9ezsNZ1SDq2aEBexrCGx9EnocfNVdWufCf",
  "key26": "4vswNNf2hguqMmvok6cacfgU1nxnrgssY3cxKwnHou1YjS7vr16ZeBuKsYo7qf3sDuy4YvMFZazo4gxA8af3iG5A"
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
