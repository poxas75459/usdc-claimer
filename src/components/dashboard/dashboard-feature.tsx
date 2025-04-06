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
    "4Bsvep8dEw6Ap8Ri35QumiXvbj5RbR5oSat5FxnBmq8F9sommZDYEYGeUPP3fjp4GpRiTze6zARba4PyvzwwS1bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cQiBW5SAvoe1PgCci5YY5mkboS2qybyKNB3MyERBje4uwT8Eee37Ve974fUvTH4eE5wW8oYoHbhiKbw51bK1Mcc",
  "key1": "3XViYym3aBoeJuiLJ22WAt8KvYZLFuM41B2XQES1MJLRcofMDDY3cRUrGVfJfNczMHtFTX4fbEV3kYY6SYY63rbZ",
  "key2": "62a5Vd5GLZPjufNqmCrNtSYSxNyC2DWsvKtfjatnbAQmkqcgGP9NCTMGPXwnnoeid4NEeGBjE1qvhEbdXVUueBvR",
  "key3": "61C2EckZSABLsEKPoLqBqmUHUrsMVfjSm33dbCv2ZWtFgMaLQYbZPM1NjT1CsjmkGBa1NziDxapGwTXNtsxjwegw",
  "key4": "de2aqBE9N1yxSGskr86g5fJyZAMRLykju3biT66TKahjgr94mmEUTr9yDxRuyGrEwHaYczeQVvy1yP1t27aDMdB",
  "key5": "3diNLg8vPywLUSQNy53LDHtfTtezmuqS1QQHtzebGmgjJsA6oJRw183cAXSLW1MYSThByEitoMTSDsMYyxqyQ3nd",
  "key6": "E4FzJkEaS55pUFG3L1g4NPrFCNdFwTeePezqGiKFWY9T3sDqtAwhh9Y1JpAUYGp6GUpBteSYpRF3UrtG7QgQF1t",
  "key7": "5oSZDpgnYbZXzKEHVgUnE2kztqGq9PTpuz7YCHJesrxJNV9bXCWBq1bbCMPsVS36FzrTQ4s26KFZFwT7AMqMw1rU",
  "key8": "4TJtkznwkAYqXQk6xJrp515pTMmwbUqRg2xnuAFcrLKVYc591nd1585yLyFgd67BaRqNqatQs94rbTmuLSEyA2zq",
  "key9": "5sC3Hgyio94tHWCnBzNskqYwP6XNitr2DS2RJaqHEnyioTnMA5fm5CjwCEWNq6UA7nVZ2JHM5w1R7YRMnyK9KzWt",
  "key10": "5ekhAdaYfNmP2FxaARPCdQ3vkd1wiJuqsrwtw3HF2d1MLZeCci95XT5n1EZbQWyXwZS6fPeCa3BtMU5EhiJJfzjU",
  "key11": "5aQ9puFMFBuazciuwdE9urWGrbrhDmzHUMATwQn1mpo44CnrEuJgzbfAY5r9EDuarXhuYWyi3kUwozVX735U51EN",
  "key12": "589uE7V9C2v3X9Tp8AhtYhN7UZtwvP28PDEfVLy7gaVAw6Jq6xfvkPeUdhEvCEM2EEbrurkhDg88yBEVnHPVTgYm",
  "key13": "5WExVuahNzPcoYYcNFvZnKSQNXKZ5Du3RHJKHXZXa5XhdoU61VchKSRdiEHcSVaBST6Q2sny3Q1AKwVweHJQbAzh",
  "key14": "5Fp2CAvuFjxD9GFBB2unanktJsqwHMAwiYTsymzULchUyrW3EPk6r6qTGUEcVjvSHmqPZG6nxa2WinFov8nNXjbA",
  "key15": "43t7fYWWibH3wjieLyhmp4MG3vgHMZcPfT8TynYg5TAAbrSQhby1gh2XLA877FEXPqChTYFywvomcF5giFg9m9EJ",
  "key16": "awm8HTWYg9Gs7MDwqY2z1VKNHq4AvU1HuigXGGJmrQ62kGkxapJZBJb1tN8VF4Dfo3M9ibqkoSRE7GdEHzTgoun",
  "key17": "3htAu1au5kkztyTK2KnhSD4pmuun4SuuGL4v2aPQ9MnrtztRp1USUvtcmBC1mFEye9XbbA75frsKh3PPnQARC43s",
  "key18": "29bHKnDMNaSeKQiM6xX5Ep4Z4k6aaZ6aTUQLFwAMJid4BHgahN34CzHSnBUbzrDkCyYGd8PgU4f7Lc2Fsn8k464p",
  "key19": "5FgQMCqAQBNtaDWxf5R6vTGFMAdKNk9Ehd3xF9WSmBn96DjFGHcRirv3i2D48bHMfUKG9adJAArNDmcgfk43Nwgx",
  "key20": "4ZGbJHbzYL1SHdAK6b5YR3J6umfzjFUWWYNZ4LmZ1QPHrcGqSW3p5zbHjGNAQXq2vDgVStDMWHkoYPZiKUGev86e",
  "key21": "7uki9DDaNMuuJYyS33rVidxgXcsX6b3hywCEWB8srAZyTz6qVPUrU9TKL4NCCm5h24vVcPiXFMPAhPgRtMCDYKS",
  "key22": "4ZjMMXZzse82115S3vLp4XspSJdBviNPhXjZpYKz41GsRquZQ6wodJqgHaMbFw3UQCXEF4FtWSb9VDy88gLCfyvQ",
  "key23": "4RXBpWbVATQTgvqHmTnESc9YEL6MaMQt92SD7hamQp7bNqVMSWurw5cN75U9Qy5kbKvoBdvv7HS22URrqN2xo7Cm",
  "key24": "5f2QFY6ca4XWSVTYqh5QHRqQGzu2ApM4USYGhui7HYM7mxGN5ZuiSGCTeWGwo1sUrrp262rj5FK8WvYUG3Ewxevg",
  "key25": "4E7vEHPK5A6WihG2v1aLt8ZikuaM1dpdtn8e8tDsP3pPaidQotstTMbJ1S8T4VCaTkUVJY2s3h8rQ2DxVso2Xa5D",
  "key26": "4ow2HQYaBKBdQxaUBzY1tstHwVob2513ntdJh3GchWcnrksWoLAXXRfMf531gUsSNynuQdPjHaMvbVRCsjzCL8yK",
  "key27": "5nnVLmxkwqubtb2c6WVdepZCZHxngufdCAkU5D3eQtQVmUtoL6bgoBUoZ8Lhvygb5Fx7GBwCbmXaBhgDbP1juCPm",
  "key28": "49rsTiMejCRuF6z39rA3PhgNn7iTtadbAgtN9PSVbimYjeDp1aFubBCJoNjB3bVDvtrjU373Py6Pg2LgUDfRSWj4",
  "key29": "qAaz5wvzePEW2GsE2napYfSr5MmhZ8iCEFwpCFCr7jJUjxzRKgedQ8XqMTcXEK2C3R9QG3GbDzWXnTHh12EDUMU",
  "key30": "5ZTD7ZdGYxGyS7FBeNj66GSKvoU7JXds7wj1Zjx7aBhMNfx1onPSUjzC1HjBjQ1PjNLNbWoTkmm4evnEJ9Asw1Ha",
  "key31": "KnTuJksSBC4r4D5aDbtAxnM8RdU5SeeH9zceqJJtCirQ5JY3rnnvfL6SKMMSQbEaEk7HHVtp66LcYtPe6Q9Adf2",
  "key32": "51YC6e4xuSj2Hb9AeWCWi8PxjRSQZns2jhKNva67JxnMtuV7SGZrqrzSty5rFL9cPHXSF6BKk4exKwYisd7CPKbg",
  "key33": "4rDjQdTTmjhtaw442ijJeQFRbB6Sbbc9UvsRakSxijiCmRtvhXt76Xeu5YfgAAofz8hBfDYiASvDqVAfQwwjMTRJ",
  "key34": "3LsKcreTBHi5VrMg23V6vTsiK4k53Dx3uKZD8Q9UG5yL4xfWgv9CBwexfmLKhTKHVzLkVXEidLfNjjfYV52Ynmg8"
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
