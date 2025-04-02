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
    "4ESanJUGTKkiVX69hVZWa6RRyp5RL1qn7jEK7oeXozQJeT6AgrUHkNY5iH73MB2q85R4jS5sNLWJkxAjRBGk9Bho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nB2XMp8PDPNzEww9H8VKWnmvVTQNAMDPNsVeaN1eJFQ3u6dJzA8B3Ld9abpLgrpC2bYQA1VzxzLrcdSX7A9mcn3",
  "key1": "3tZpkDwYQ7oaTg6Q9fRiZmfpDbzq49UHgj6VjJ7HyLuLWaoXdFaFpkNZyXQzqexk7dKs1x894E6HMaLgMAjmUbn9",
  "key2": "63U1rPvT2i4oAYKN1pp8eyvGKibJKPXia19KkX55wFw3PZq2o8TkeLFGbU19aRuBaDbyVvXyyxSVfec68PgZXp83",
  "key3": "4DngaxL7JKU4MZFVoYqJQha1DkLnKyF24x1gSTCQFCRZMpveaYpjMXc1DgTr52sLuJ2CeHnVje9mYF2narhfnWib",
  "key4": "67StP8QAVyPQcaWi2zijMTfYKq658vYXEdoMb9kdnfHazKXuaikGbH4Cr1sLUjoz8x58vjFE2UAcVfshno4FWgxf",
  "key5": "5nPkqMKxyBrMLxV2fT6ej9Maw7NC4VvA1TJs4FrMEjYSfdPFG7QqNn4QE8UcSyBMixPVUoH9YUuUAAWg2BUpEhth",
  "key6": "eZ6sM44bWbo6z9R3YNBor1ANgC7J6sbmmd2hvxs6gJbar2wq6NTNY8ByDPgHXvbFg14NyKETxsk2nnMUvaAXusx",
  "key7": "4BFJEyhx3EMrwScSvyYP4YLWf5tVY42X8WgKsxQLYTuTmdnnpaC2VarcNQoDaqzC75o7mDmR5NYXYKRSXG3k6iQi",
  "key8": "3heavRJAqghZxwdtW8hgLRQ4azKeiy4uHXM9BiTuSPmYeXNWHqT7cjVjkuhaJ1z6iMh6np3CKd97EfacnZU15CYN",
  "key9": "z61YR2CJcmadnkAQJApontgXdzJpjCSXWEPKSrAzNnggLdFzENUdtLtYrv3t1b3G1Hqi8tv85xhLta6joqo8ccn",
  "key10": "3oJLPHTQg1RWvpTCXCDBhyYikEKH4zFhzSBanZKHhAnsu1wuYxL4WjQU1Bf9eeXwCGAdzxVx6Ayry3tYQ4BayrSE",
  "key11": "4baKYWPczoGGtuNW5QEiHxbC5gy3ZaspDdJi3Pw15wwgvfsTShUJR43Fop6c8rg8iL9NLWCaXGk4p5nYV4GxVzCM",
  "key12": "2P7NfTo4VHgekqk6ufKmwSYgWoTYmEeADw8YkDfS136v8amdtDAPAjpLsKmF2ZfmSkGyVBBahFgj5uBaSGvZLZM9",
  "key13": "4nDLGsAdsU4gErgkjDkT3DYVJgeTFox56QBGdnwVdFTjuuQ1JCUTuHGe3pFxoW17pJ2ifEAnb28BnQLzgaXFKprd",
  "key14": "3ZnA7Ui6zSPn67J4LgYacY5EB3TddoD6GNERWgDh92jjc1tR1hvTy5NtEuSp1EEzVNfEVASb67z4zXiuJEPv84vK",
  "key15": "Dm9NS86EreQCiaq4SJcB3GQSGgPFHJK8AtKb2Bbuxoi7xoSBEN4AdqmiLd1EL2H36Tr8hzj7yFvB8iT65MDCPqF",
  "key16": "49RNjVvfYaLB8WAQFxnAjGRWRuPzWGN5bZahh5oCvx46Pbwms1dfyrnSo1HEQAfZ8cJywYD3qtLwbgbiujabgPD9",
  "key17": "4ghZZPAPNuacPrm5MWU3tVtCmXVB4TkRyetVgdvAtvwKmV96vMu9Tjg5TCQWUBwJxJK82GBxbgG1Qbi7cEZP4zLr",
  "key18": "2sHYBrbPA2tvpz2LDzJXxUyBgfHwwusPjbsQkM8WRhH4o8EEAiuR8ZNDh69xbrDLE8zwDsYeKtDX4Hw7p8qt7wG8",
  "key19": "2WhRTVoAsbz7KZ7DdfjwuCa2CD1S6QwBMTazD7cbBZnXq9VRJ3FrQc2CJKB32x5LhG5KtbbTvyHGRaYP1SDvxDRB",
  "key20": "2wx22hgY5BSVadR9uwqzca4exc75B5sJRLfYcB7U9LjoFajNEZH2q3CGLh9Z3NUEz4Ef1QjnhWoadfrwFokvGQZS",
  "key21": "3cfd1gxFJg3KgALUd7GTWBXeuWpqaiVSLscsWDMCuxwmtuHAJHRbRz1GNmS2cYr84wc86eqGBTeuJtDCoo1s8rwP",
  "key22": "64yEti2X3vskH7yeyExiMGoJfx79tyu2okkae8nPiu6PpQmGEQ3s9GMDZLdwpBesbpm57SbphRCicCYbXYKqUmBS",
  "key23": "36k7TvtReJb7ejYdQMcYR3FWs4284rA378jtRMhG54bCeSeNS6BmTf6GLxSEwDfC3dRv62GUzmzZdECDEhFKhmjh",
  "key24": "5WXf6B7AW5RWK6KWuMNErQqDjgUwoEPHjJc43UVbRGZo8JaWyXuYvYn1688UFryziRg2SatjKtzFnpWACZBCyq5Q",
  "key25": "N6UYJfNVwfatGyZd2ueSUcgkH5DWvQD2hmvMVcZkeqbFy8X3tXZtL9uzqMfYnMauLw2nqgySWY7vbU357hmV3Ub",
  "key26": "3mW1JYGogdonuSoRnnZLzBrqMdDZNbSVQ3MVkA5uHiJxVyvCzEFJMDxHVHUXvQDjXGoSorQ5tzbfLMb9hjJj7jmB"
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
