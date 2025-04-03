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
    "3adtAeFfyH8JBMKVvB5fScKDwtDepKpSS7Jc5qdiEotZbQnTSe666DYtPEpemcHt5NgHjd8MfkKzuDN7RWck6oms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NeUAAghuBqvhNn5FK57DvhiF9tpVC3XSZTYkZCYcSHEq867CGzJwtFgyN5nScLnEP2H1fJBjtWfQ3mZpWVj9pwz",
  "key1": "5Q1zXM6SzFVFVzdbTmanqAJMcZtHY3SmLc8Txyu9pdkzaydQBUy85pBWnn7P5oZXPp94j2eR49KeTDZwSaTzRL1q",
  "key2": "3XWCSxFk92zpshCUUpdDLwJPHCwkxujqRKGPLJF1T3wYYz7ecqd3JhidFEEfWnbsErCfWcBw4CAY1Kb8kzKrvJkQ",
  "key3": "3mZgvCbSmSwqCWpBQaY9YQbJAMZfhfS3fiu14aZZQ5BqJ85gNmHpkdPq8hwiykw69DS8Qy53ttpqS1rJTxf9iaFN",
  "key4": "3Do33sArjXRwDXSzKVt5mqs3aCGoDfHMTzsbQYDfxpw77kDX99dyx9vAcbv2kFNx1mZWgzgUWkHHcFKYSHz4pRMa",
  "key5": "2cNK6KsVLicUZFgQjsuR4nrFw3RALt3NBUUP6dGhfw6yqoc7ou13242Cnqi3tnLUpwSPGxtE7CxZ9DTBmvvJPw5m",
  "key6": "5UU8PnUkkuUuqmKVde57Pyk26W8PG61UCF1Vj8yYVLuwxN2oZjFtTWHAQ2JgvCrRc2pHG4Za19dvmvNTtNw2zQyN",
  "key7": "C1wX9V8r1XRc2wwhPEpQo5XdPFVrR5qBEUpsiBDfeRC37oST3Tepsw8D84XXqoMAWua33p4nf6CxnxaUCpRwsD8",
  "key8": "45PNtVRU1VqXP6U2G5AM6cUUjimfHFgCvsgkrBw4qPz9V3jK3KBwJ3cdTT6vRuaE7AHKgUhN8w8FKniuw4ZhBPcx",
  "key9": "4tCwC5wfaB8tiJyvwQLJJp3y51hkH7LWzoRYpDdaWGp2diYk3NbzfXSuJSyvhNpmcjjXX6kNovd3omo2mm7KFw6n",
  "key10": "4CYsnyFcDKBtYrrf39SKnTUGGABR5knRGwtJZddqqk151Q58mApUGYmTGd9e3AEVt5koMoF98mBKXkChMq1fsEnY",
  "key11": "3t1Wwnct7xQ3BzxNyev21TkBTXzqBH8i5L8ora4WF9B58p28D3qbL2o5nRY3ZA6rjoaQFjdVMPvRurLAXyqx8qHr",
  "key12": "3xHujRE2TDouzPZstJoDM53kAJQwdzQsPpoL6WNYcdunCbq4kctb5mMfQCpT2Ncqo9Xg8VckfPAV7auYNEc6s5cv",
  "key13": "3f9BSPh46r7HcpeQwNVRj6bmBEKBS8UhPFsZxfYxATAbRFF6oyCqE4osiAXzjRGjBepAs8TiCyHNBdipPBCLYdqa",
  "key14": "5zoZ3emdtMpk16izABcADeuKrj6jFdCBgpG3PcT9vB7fp9b9aBo6yXZkgSrmm2hiNvQAG5YouPRijFiS5JUKKege",
  "key15": "3xXuKDoaoNaS16ujPz8EWGdz8tV3eKCpxBG7ZvMjwPvxFZ9kUTM1oSiy7bm5v9SHUU2AbeqeqsfQRuTbaQox6tzk",
  "key16": "5RF3S1Jqo1S6QRVmheMjsM9L1UMNoJvjQmvmjrHVm5sGanvkEgoPV3DrBFmm8XmGUCQLUXUNrrFFQYhXwvy7CWe5",
  "key17": "qzmEdMWydAfqUkNpzqSmkah2JXs722QicKjRGzHG3CAf2pFtH82YKu94U2tjxZ55mdk4dsv61j9ibRZGD9pPWhx",
  "key18": "5GYyc2Q9Bte2HbgfPMBjsKV6FZbQB87GGm5gzssUvrpTPo8uPGPULkP1im5aSsEpvDgWMk12rUyPwMfFtWjefCqA",
  "key19": "3yK2c7DVu9iCudLHk9Pk1UvyGj5h4H37SMMm7BeUEDnjdrxisfwAiUUC4FYp67jziMUUw7rdEQre5hX66CD1T58a",
  "key20": "3e7XCAmTbetXNNrKbMCXTs9rMVkELbfKemDXuewQYVayN5FzmJ3TmtEkpfF6dSTc7CqaPFLNnJHAWjev5BiiPETC",
  "key21": "5PVfHCM6NNSWaUPJdM7tzfPJor5QmhDM6FP3CZBH7FmweeidbEYmBd1WSsQSgtzyD4zZcUPJ9oZDQvM5Bu8a8DHX",
  "key22": "ycJ9mB5Yj1MDH74NU59W71xHeMvSTz1q9gTd2iPdSwuNMJ1pKRjvZ3go3YNszEur2mPfUxQqC7MHapBBrkpH1d5",
  "key23": "dEaxSium2EfrsBBtwXheNdUoNhFM6NZPkdHsb7MhtzQ9JQPHoBg9uJRhMpUMDDC4ivpsgUzuZT5gdK9pEY3zc3r",
  "key24": "2V3R3FLGfLyTPt1KGFhT5GJfiZnvCcKaMvfwURP6zzguas81q4qFmrrZQSMPW5eXUWdY8jKZWcBy7jGW2QudWCQ6",
  "key25": "2v6Jns2FBCd5TnRuBc2LFVhxErtBNzQ4QAL1gc9gw4AHcyKhNongU8tvdhBD7ujrUVfB2xmvrcGBtvovBKK4cwWd",
  "key26": "25tFKA6S3CN9HPZkcd2Qj1BdpK7TZWo39EGXGe1cE1odjY5WbTqfwJENkkE3KHR8cKJTDdZfQeqwCNjeWQNonrQV",
  "key27": "zQD2HCQGXs9oNuAxJPTrCc2rdi1hf4JqK2kKieg9xvDDE3vJcDooURPmfEgUzt6mk7G1P7Bp2vaYNxJ7ZZYT2nA",
  "key28": "2oCcuSW2ULMmZM9exrZDLUCMZnsVqAbfQbfQmYefRgsKdj9UMtjC2CTjeSHuKasvfFkdsfMG2UbXdBJiPCGkkZAS",
  "key29": "2SDQ2uXKPzjk5QVxmz7qA1TeGoH17Q1TFDc4daNuMgDecSN7txuzqxFXtGAmu7dnfo2uPHfpdscQVxrWKTVQrj6C",
  "key30": "amFcputyK8jonQd8XHDnWU73Pr33hzezcK9Ztbyn1LG2QvJYviNPQgLrNmQyShB8dobkT8TAmjCQhNeGM94NoXp",
  "key31": "37FSBghqvyBxMe834c5E6vMXZREyvnZjC5H4juhBTSaGj99WznYxjE5zVLsNybGQQ8T13ru77FEfiHPybQCb2GhJ",
  "key32": "Gofj2VSDX1HqYxVdznKnvPjzuwfzVkaLC2H53ivTKrkPWKSWhHMPQi5bZgY7P2TwcHAzdTd67RPSxuKzg5Hn39x",
  "key33": "5YHCd6kF2TtagZVhBQnzToUhGxMgp21kZcebrnZcuGCKVRECpFXwu5GUfQLTQs1sXrVpaBtsCHqgMEQrDvsmc6wk",
  "key34": "5yUKVsMxRfH3vsFkVTgTYYyg91j2u1BetQiaNSicL5ijDzE2r9VaJwfAKn6JbN6ARMpcXmRHCnEXjGT5nFory8Vn",
  "key35": "5jToTLtRUqbnTktGCEyDD91cYo2d1vMipggJocCmzuPxuRsPhvn41sHFzKCvzBeksUjCpLuP5m9KMkrZPHptkkrW"
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
