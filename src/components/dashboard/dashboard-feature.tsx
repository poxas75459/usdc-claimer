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
    "5bEmNuyF84ydADjqYLyv5ZJSCKaWWbhoZGZagY747ojLKAPoKjH41647dQDGz7a43GavYK3ZTvBzpBRie1WfgtoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xRDA3jeq7TuSbg66TbfFHVqva7Le4fPGqCdYf3J8W5o5dyEiJEmGHfig12TNxi6xiwnYmoc1Z9WkTDefXtrkyji",
  "key1": "4ejDE5mQGtA2FG2RiDUhFUsTjRVo4mofps9fv2VWS2p99Ginw1oE61k8sL2cwiRtEj4AztW1YPXcDbPty7wtkXRe",
  "key2": "2FnTHjBFqXKUcbFofec4CMq49nXTrjqhwyudgRHafFSc8TxowW9J3ae1Shs4fhruAaBrDPvG21pkRE9otGs5j8BF",
  "key3": "3nyhGZFshJbAovFCDGL3mPaTh9cDkPoeTA5tmsF74dmRdbMBZr9BMbhKfa7kZCxypV6Uo1K18kHprhoBw3K1xPAU",
  "key4": "3rvf21BpogH66e9UcPntArYQt25MrsasvoL42UcfSj3uEerF23JUWDcqS5qiU4B2TGPH8kwKBbhqs7nPMewQTnQK",
  "key5": "4jNBpozFHX3dfBFvMsomRWPo4uzNgb1NJRQJTUutAt2bcAzT8pNwE7ms4NjwwFF9tPYasyoVTpF7a6XqfHYvYKJ7",
  "key6": "4rGz7kPjuDofAq9HuYvj2g8xY2ibdiZpesMMjY2U7CHem5fiwXiVM61ZXdGxsvrGNnVXUsHZk1XEhCZE1x9caV42",
  "key7": "4eLM8K3VjqL9HVWAqmUGBao7yUi4vwv8WDpR2QaiwbMpWsd82u3cNvwR7pKraDdvNZVk39b6p3NYZMmjH76TfKe4",
  "key8": "2ANKSCz6sYJt1hKYonHcGj8RrxirU8tm2Bkk7PRnAptZaUbKnQKMCBmuVAGyiLMWKTwNKQ2u1uLtqiZsxCrXbKfW",
  "key9": "4mB22yxhiTB1hFM433Y93CYtnoyPpbcsjyXKhbFhLqnXrQkr3uroxXWohEVn5Uvwdqkck1FG6axKVW3WgA43wTaW",
  "key10": "5X7TSymSyvSJGHAcgk2rmEeaJb6gqvE8xTQidCJdVNoGqTDEMLjRnCK2fbqmhowGvK6GBZ5ZuYGygWbmSkESg5VE",
  "key11": "5qd8vS8Vr6s3Uu2mDxcnKv7J5Cwx4s1823AnKKGcjb1vtFzJ7J6cwR6LUF2NwNsxzeg6F7vbKRTe2atXQ32YHk5m",
  "key12": "3Ko9SuZdbWVrwfbAVRJ66VY2cEMfJKcuCgq9SYKj933vbv6j1JG4jd9AKHoJ8uUiLtwkBoQbKHa5w1Heu6ferdUk",
  "key13": "2N9s25vMd63TLfwW8SFSY6i3od59E9FfRdwMbH7qtwNRn3Gu2N3GgL7w1gs7DnEcWhgbB96wMooBVKKA8Se865iG",
  "key14": "D7GFgZoJtZbyXYJfv2QS423p6JaYnsQZ3kzsfEv1rem42thFbxUhiwBYyZf7uKs1sKQCXAZ2EUFGk8HMLb6r2MC",
  "key15": "5d442RjbSXABhjLao1W5H3SjhLGmBMBgUw8a65xiKZjbuoynM4vA7x8vYLUCuUkrV5zmX2gdJyoDny1juLwQ4Zh3",
  "key16": "2HgkYdETNg3sFpLG3hzurdgCv1b6nHw5f31AFgxXMaQNJVefKgpsL1mwgAFkRacwxCT2YaD2CynkWnCQA7Q28qXm",
  "key17": "3FRDrr5v4VdvcnQYcyRpLWzqpuGvtd9v7DQhqKahcKmankWVUahAT6gasAjnDtywTvJP8nNbXdrGdj8qMCnbKjrB",
  "key18": "3imPFHUsVz7sDdXDYovobH2gDsjuLEAn7meTfZh7Z6jeirRraA7pbUHisiruCAAW8meu5ZCFHpcCsyEeTiYbpitS",
  "key19": "2sNJMHCU1HL3hM1Ninbar69Ek1anZGZbQwEAmEW7m1SiufkJX1BnBWXoiqE7s5LdzDopPDFXBnaVagcPjAddxipt",
  "key20": "48j6sKFAhXV21o3sL2yfCG4YJs3H3tFQoGscmTRap5Hssm1z6zXAUF3Pa98vhKpnHLVHf96VQXtFWgmpBsAbfx1j",
  "key21": "2tLPEsok3194LNGGvGrMvEopunyS4f7XqVZWaJYZ4zToBBnsFWJAacmSw9n2RQjA1cpXqdn9ihot9wwuKZst48Tr",
  "key22": "2uiB6drcVEunKFC1eXrDGWtbyH2SK6nUy5vYHEYamvtZqNtkKrTVd9ZkTWmv4EdMq272LywpTkZZa3Z7Q7gLTAs",
  "key23": "4HXBAH3mxL3bit5wP9GXFiMQ69dPwr3uV8VZFFYzvWMZxo2Gc8KgUnPwyQDdSnWehLodH6e6TcLs9hrNvNJmzF2U",
  "key24": "2yezXhVbgU55ZwGTgxTPJvy5QNeXPigT7MLgKxUZb9afioVNyWxUWjXstyBmZBhedd3HBJMxYzmgwTszQGRWJQeg",
  "key25": "4zhFCRoMRMFwKXt8qxhVCa2utdetsCuiAE1iR9YsoWWqK1p18pqDjtKBJnDQakQEGwgURRwDCHCKrkcHZ8rgRbcA",
  "key26": "2MfcT8r7B7muuDYDGLTs57Vho884kLQonHx36oRXMo4v3geouc3NV8BvJMoszTZ4dV9D1hQ3sb5Gih6xGD8AdPPF",
  "key27": "o61MngaoW61bwXYAazeMP9ka6oEKgoqNgbE8CBKf7LyR41uh5Z1TbjrXefZFGjxUeYtRCewrvkAQCUR13dsQ3qq",
  "key28": "5E7Uj3i2Y7R4RaicyuHpyVjRF3DY2iavS6qkA1J37DdhZxHvWLe678SJKpjM6T6SNt29bx319CaZBPpWF4nLM8WV",
  "key29": "23HSGkuRwbQkHUbpJGhnMR3cuiY98eu9CE7Y1vujdZ9rHrk8cQQgXzEezEiy5vanY1PmtmLA6aSQiqfqPpckbeXx",
  "key30": "55zF7LhkzzoCSB1EC8WoUwZLKQ3B92AfxHURmE9QSny3M3BhKiq874hh9phTuJVQnEmfYxSuNTo9FLBeeYkDQpXe",
  "key31": "4HkoY7R1ZTcBv6ohVmcbfi18Uf8u9f23JmpUL5Vxw3K4TCjPBdUCbUb21DZZomxakPP6zxVu3M6GPstD5Gmi7THW",
  "key32": "3ZNyMVXuyf39oc9SfbDS68572qhrgmEaENypeX7qgm7D1C9581nxRvtYPhgdkCo48r12kg735zeh8G3DsGmDJVL7",
  "key33": "3KicjEwPJy341VM7UVRrs6meXhWEvaQao68KuHJxk6f2B8yGdjk4Uh8G8CmnXGmSHbZ98gXQHQrc33RVMChUgav7",
  "key34": "5yEgFc6o4RtESxtrnYW1ktw8eQodCC8P2uzD3JMspP2oE5bxVesfvM5tKSjYnDr2c7so4i6vJC4UFGFCWpTRA9kE",
  "key35": "ensWDSoQ2j6XCVG7RuKhvXae3edGYawu7N8LvFHR54vVrmRf7JZQ8i3wRHWGAMyduY9X2RRdtJk9TEqCnuqTDfv",
  "key36": "4TP7h1X1YApbCCiRiQ1AZUm33NN21F632zqRTGu9tUUmCHNYHhoiYqiDkzuGE2BV7BSVBmrfXEYLBXbzXR1L53CS",
  "key37": "52zTRvcMTMrNV65vX4ZzdzRhXXAQfJCjP4eLfqu84eRUjJ1zFEGRfeJXnzYJNh6wZZkyShhoMRksGJVWYxjB8DxJ",
  "key38": "LQKE7EHQf17CtxeSiPt8Pe7cifSnVS2EfM9xGY3UZN6jP1HRDZtdNukazVgeoDA6VDW956Q3xmmie4B38WnGcw9",
  "key39": "3nMdweetDF7gY65PBhs9PxrmB89Uvp4cHeSKJTpJiELqKTfkm9mimPHHWXuMznuyyPLRP474vwNNXLfhebf3Y7vp"
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
