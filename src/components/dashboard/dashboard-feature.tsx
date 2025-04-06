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
    "5fF967u1jLePY1nJL7PrwFtmVpPofuWhqpj5LTB1nS248WVUpNZjoeiHDwZPsMXDLVgFduRK9rS6kniNGBppS1UB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Hv8RyUgtBouriYs6LgBAuiR8P2DgFypHWb59SbkHaH75a4z3KKut79jgTVGvMRE66UbtWewXE2H431FFuWkeCZ",
  "key1": "3qjtm3k7fbETpYYjQDd7hym7eNa2xrvPzABA8AgW969PbWHniS2CQcuRVgTECNUXh1BSPuHbWPitrpzFhoJuKDCu",
  "key2": "4o5MXd43BoRoxZqd6VmbzPMKiKnNtGBcLiwfkzY9dFnB4zR4GMiUw2yopMusWsBkG2MehgrP79ZbxieBSWJTvkcA",
  "key3": "2i4F6zRb5eNQe3AqtgqgefQH58dTSKTcpmv1XJdkiSSZ64hJ7FSKvhRJs93PZwZWsSe7ih7ZEU8FFoWybc7hmwwy",
  "key4": "44npVu5wm6LhEBoYtQCpwqy9h36nRpWKAM1q1KirXxrh7cz97PBMLGtJcdPV9MMpg5rCgo6fDYGPaQ83h4giBEqG",
  "key5": "hGf2dDPF9wzR6ALVbxEygi37M2zBWBRxhgpSMu2bH3zQf4kWZrz7htVyYGogYypVXtDEeHofANrSoEz2odBjQgf",
  "key6": "5t2oj2uyXv4ZY8aH4yWZ1yRiPrfSkEijczAa43sbMyvDk4Bdn11njTMoELVNcDJRutYDHPHV5FcSM7zAuNujDDXC",
  "key7": "3drZ7zD9cQkuUnDw8Mf4c4cPEFpmYo1kaeqz6YCtDrctVSKovARZXEcEaXb9oTYYL79jLCMNLvrwjMvNKVYGD9Vp",
  "key8": "65vuyNx8enQtjEpzcpZj9jnNEt3VQgoPeDJP8aYPM7BDh7HEcJNdhZ4NfRZgsQzYUCgQCxtcSSkFHtVyiizJZttS",
  "key9": "1siUmtzY8jKV56t1vud2WNcv1ZKHP517b8ia9s9nMrbZ9456MxfURWzF9KeG2MDWWxt1UeyxSVx4zKQtgPhSEMT",
  "key10": "3kVrtM1rESFRdhqWfg3eaybZxt6ZbFjSrqdBuTa2AfBY3u24KxfcS9baXN6BQ7bktAt5akYHFVb4kWc5HAwEYCyb",
  "key11": "2a8SAKXUy8PxLdfhQqFEbWqa4cJW6yVEDmY2TANENzWeNos68WpkTq5sUXffBSHU6goFTKYeQV69JRE6v21f5Qe5",
  "key12": "UufcvyQnn5uyo5R4seSbMFrkLXtLvnwcebHrQRp1XPcwwJXCT1qsAeJ84ve4pZ7FQPZsX9wKmmu4y8pJQQoBA58",
  "key13": "2NemPEqsPt6yVyjn2AVqKbMfakRkKHzxsm8eWojbsvNoKxixw1mc93x15JfQxxkQ8CqXeehZHZKasJZYrqGBAMR4",
  "key14": "2dEVWG6ADeRjoM8HhFs6d2m8HCPGLyzprP2dZCQ1itaaLbNB5Gq4mTFVM3rB943fume8kKwD5yhoQUwBTFBP5rAp",
  "key15": "4ULfXfQ7SLULz5QjeoNT4DmoZUt694JENAdJ7qaxQ61zrassb1RV865XMd9ShTiLzJaTaJxaUFJTp8shSRJ8kKud",
  "key16": "3pVJ2ysDnN5UcgSA1s2tfroArrjLQojeuQNUmm25S7Twz9huaMC96zNio4pMUsXDdKEZkZsJTGRKKXussCCQXYZ8",
  "key17": "2YkuwRg9yp3p5YUe94R9YhMyMc6b6dzddAs4XNinkgmLTmnpaAUv2a6asYYB5TWEuq1f8Ww3FTpze4WvPZsiTgSr",
  "key18": "2Ub3QGE2hR2P7wMXX6aXKW8yYbk98e5QrDTwoZZ2dwjEb65Vyu6a29WSrHZEeZPP3f6MFty1jkVmeqagXvCu427C",
  "key19": "2eDqF3LDFrV61QADxJMBKT6Dd35vSseUkY9mhxQYV1r8AM1wTBmM3Be9oHfcmmNJdymqytJfQimJ9bmk5SYv66XT",
  "key20": "3cJMiNSyPwNL64H9tBCR7dvnoXWqEmyP7T11KH8TyWRuYQbZgWx1Y6jnJP2VLwKrRg9cD89rKceNuRqXbDBSxW7T",
  "key21": "4z42VrkpaXjVM8xNYiusqzgMzs78t1DqcpTytoCG429QHGdRqpH9GwHZe5kftrkkaWutB5szQfak2NojWiKxFxxq",
  "key22": "5cB83GsGGcBrbdSPBZ8QTxx3MsHL6UyUPLrQ4uzEec76nHn2Q8bRJLxhPzhP9FTv3ejJJEh2PatQHxFvZ848Naci",
  "key23": "3ncii3rYjLqF3zxRsjHrfn3BAQGvE6WLBWGZeiHenVpxXzecesVsh5K7z2Y4i14nYYLE1YBrDBuao9t5wqkyhLXA",
  "key24": "5qV2eR5vK5jXfVzAaaUavta1V6dHwQuhgzJGePqXpuPf1hXVM3Z4ceoN4guWbibQNYjN3KSdXRvmucobAdde5jkZ",
  "key25": "5Z2gGqeJt93G3dczaFeobLqXraEpRPquxY8Nig7MoitmiZDRgkSMo6yyEgQ5qBv91bQpiM9onaiWuxcnb4Tdd3yJ",
  "key26": "5jMpb37X293SPjNw5oA3gckUqLg9L16yjzfjQnfUMBpxj1XX3EALWHnLaULKQPjZfpxsGeQKwQainWndvqZVah1b",
  "key27": "3vMatSzREGQZGvzFrrRPJq4jdtC7JYWm8n9fSF4Eu2Z5hB8Q7vD9ycMFK8RLdD8ZtNkhj6MjNJHTkCj6Qc7wYn7B",
  "key28": "5gj5qeMhXck68A9wkfWqmUDVLK5bPfphw78rdmAWLjsWdkrNVxafihsHdMJz85X6uDjLjsEuJLWZJhcNmtziYxVd",
  "key29": "Dc22TFwubVEwXvLnaZ9NMwsrff98UtXMWDA6sAZNwHj3xrSf2cYBn5ymDV7rXoVWHxJVU621sYN6cP6mMoSoyhf",
  "key30": "3S32SkAPtmwE16G6M2Nv6bbuvxqnN8eXWeoCNSevYAMvx596snQKdzyQbgBTvwENfRnpN382haVuiYyttMeKZg7r",
  "key31": "5fpphpQMfaUnfuEGBWwN3LRLsjdbkzFVX7G7J8fHcAAFUVKwkdrNcmXQuUsDHVkNu9Ckpcte2q89mEUAbuNguF4q",
  "key32": "5aeNQbKkG7Q1tL4UgwS1NHqFHGLg8guiufuGrYskuo8DvHK342zto3GV5KXz6wYqRzCLT9zTgrJ9YxA3rL1zHmiq",
  "key33": "5Tj36DErdSQvyq4DxFEki5psBAUkaFfoBm68THZLUCpw9BWkqArWuFhrmtjH9DYHu4L9GrLA8Wj74Goy4CoxEYqF",
  "key34": "4u8JKEpL25zZNYQ9EntWBTP1qciV75DZwdPqhtbgoHwnhH9v41d3TEitjAdbZD3DHnumvZPTyGbhUvJtLqzNQKGK",
  "key35": "4zgaVN3VEGM6f5hRzrbSz43K4bjamFT16SQ8kyA4SqCVket9SkMS3r39L84CNs3Uwz5MyKRENGyVnLJtzYUvbXPj"
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
