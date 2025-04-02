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
    "2trmT6ZpcskGQBqfHZxDhh59KF2yS2GjSPnERoCHgVpQVvLxWZPrQJqhvxS5AbEfrQYo9UKuMvUyR4U2M9AsrYcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4umsiJ24KGeBdpjq13vKqeMawhoM3Yv5WgSbLBmRDa1Cvx6HxQ8SxjpNuzVaGh8d9v39gEa6XjF393zCkFHUqgQE",
  "key1": "5UfbMNBfhRxy1v8XFr1yRz9fEac8uSh8kATXGmCYKTuYj15KX9wEt2CPc9oJARnoTWhoDePyQL74mwLG8UkPrqsN",
  "key2": "23Sjug6u8LacnuXm2WMASyqAnt1qX1GoevFrJX9vURVuLi2LZGp6C3XsxpaqxG1YorYFsUK9nyyvBLLSFBS5E11R",
  "key3": "asLHuzNSqCtJjCG5MUDn3QhQ3TWHZeSVNathBnqzqVJbjTyeH899bAwPwxaQMA4JszFMfCDGjiqrr7aWDsWR4NN",
  "key4": "3mWciKtmJ7kP5C3eyaM9SEN1nHXCMRV85wpBYGNndfANmcSgpqpJHtXKoF7mah4DPk24WwVGEc2SVMmuczf92smF",
  "key5": "3s9zrCK64SZ1TP8kKcSBgomNyBofZ9JAfWyh8gR1hraxzK4usu8br4fuKCBaSTM1pj72x1rynUauBeoCocbG1Qmy",
  "key6": "3pDECdQ8WAzDLLZgP6K3Bzvwy45HKSTaYPh8fJiXdY7EoPBqQSyUdwnzGduYFu5aA81aWzp3F4czd9UpjhXT22XT",
  "key7": "4A9AG8aDTrG1b55GrU78cTeEZVa1GhvRxpCGSqisPLGTSfWZFUf8cUDTt4gwbnUkVmaRawq5hdtbme2k2cZEnCvo",
  "key8": "2VGXfp4QMbtp4FwHVeZCCnkD28j4bZWoUmnjkZpi1pMzBDtsBVHm5aBHJvDJsZGU2SiyLuTEc7TdqYFbB5MRHY9m",
  "key9": "5Sf2QHmcfghnSEjU9Roh97rbHxSXyMizgxCJMVLAwAjDpwNGn45Bq16Hcx2xKTGqnFSUSEWmyBfcX8hiQSZtTEVt",
  "key10": "2N9zj87He1mbX1TtD8s9GN5gFCHqeFWmSeQm4KE6mvXSi4RZWr8T9MzX8Q1idd6zyEJfPrETJ2FWfpZMjTnM4usg",
  "key11": "2pTgZYcMw7XZU5Xc8TBkUaCdraGpA7ER1peDSH7sbD29fMAfidbcdCBNCRNMLF1sz2qLMiJCdRU1KVr1R2ATvk95",
  "key12": "KtW3ePdPgAWmPm7EvdxF7P9pKbaS1ZdaSY1SfBZMpw844bEmuPRx4S9UX8vH93NgDJhSFaQornqE3ixLMpQczWL",
  "key13": "5Z3HYiP292sVikUSpHYWPaVP6fSD9Kors82XgFMkXrXAFhZ3PiQcXwcUg2KpsDRj3Cub9cuZAmGMaqEcgBvdXZJw",
  "key14": "3De8S9gjkiu4j5oKnFYfAKEq9frCqGMTcSXduvU7oQ7AP8RVqREnAAHfyTZnfu3ozzDxpMNwNeHNTycu94Xr8tGQ",
  "key15": "466MLHb52LL4bnNYoSG71ajMNiWpJ3THMXFGwDKVHatNru3jefqJJ7wddhN1Ews8K2TGdzY6aT4cwLaEe49HHUov",
  "key16": "3uht4tRJRBQVmhpxXY4YvBcRNA9vBBSEbHxifrsgDrSfXHg7TUHwzsRb3beuJidKWiCyFLP21Q1NnLebRNLRUi3g",
  "key17": "53AyUCURn1KZLbcWZUaNXbyQg4AZWAhrJohMQM3cn3xxpxY9V5ya4E1tGC5fTikAx4ztgM6TiNe3xZ7THxEgQzsq",
  "key18": "2ew67gAtWg39nvPWsSzSoxSM6AWDoZ9PcxY8XzJL2fEKkRcP9KkKSn2yNbh4AqgLQQdt5uEHYJWCWoJ1qYAYfaSW",
  "key19": "2QvwjmKYe1MJJcDgWXUbueoXM5h9TCoHc3dqobHNPEvkJjiRVM1Qsvg1rKMQLaYFtKjQ4Xca7u8LJr2XMFjWSCmW",
  "key20": "PeUThyPDXwhFeVpVvggSgVRnHuRuQxKKTvgYDVt1ysTp7e1mWZfvUeoiTn8jCv7yurMpgctPe3AuZFuskXGfFMa",
  "key21": "29iPiHdP43WTZtrvLCF7ySn6F5UzNXSdjtTbbAPXSjqkc5CbKSSm7XKKp4XwTMDjCqaZ6CsYjJrdp3JGzHuEYLvi",
  "key22": "RosiD4B71TRWfHzskh7tYNpuhVGZXtVSSVgu5yQsmTQ7ThJ6Vn6E1Eb5p1jVKG1dP9j6AmGqJTdHbNjMgiQeu8U",
  "key23": "5YYWRXevzLpqtGpeDxwFanzVZogdNNdi75dimcN8DRsYGc7L8FhGEMACnt3B3CeFCpxzcBkzThzdvy1yNnMmpDoS",
  "key24": "4b5mX1QijrpzX6anSsZcj2n9QeS9ER3x4wqXdhRBiTDxkDjYTEPgXtivf2iudNU6JqmwZPqQfZ2h5iifqfPtqRsf",
  "key25": "5jYPzAxZawwHfdnzQPhHCcKGfKy6tRdVZBKrqmfX1SbZ8aPFjDrq9YWYm7uW8spWkUJrVuWs6fUaa9FRpK5WbBG",
  "key26": "553QNB4GGaTYFRj55syAcKeM3L7fcnAh1wEjaifHTV2DwC964GLYKm62HqA1DuZMeqUmxpg2DeaipAKA3PJ6QqEC",
  "key27": "3cJ9u4AUnXyBGGfgZqZTbv7NH8iGdBys9MZAPjnhyGn3NN4t7sGszsrx5LJ6qp6bX6RgfnJ3358iFevRup4f6aX7"
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
