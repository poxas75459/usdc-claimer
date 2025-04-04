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
    "5eNLfW8tFWF5AUXo34YwAsfVVN3jHap4us9rnxezgExyrFMLUuvc1wXtdS4LTiLfNzBEXMKSHLvDDHAjCT1MHFh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33RkDpWKbRa5S7KGMRwWXNzzTZKghDCxQQoJZHWHYKVmwKeeoXD6ekXVFC4aMUK7n4iBHuU5BgMC5KLxRNkpduUP",
  "key1": "26bGPZFh99fzFpLeAaU2e33Cz8aJ3WpYceExFaCG6eiUAKTL1SDbQHrFftW2mYbmfzZ5H9QVi8RnEKx54NzRivFP",
  "key2": "25KSVX8KJ8UrV6wigngqCZnEseULqrt4rpqupEEHd6DH4iAMj2NdTPfU1hbPu5Q2KDKeo7Luj78yzBTpjJvmHbDk",
  "key3": "wtZtkr8CsAuWvGCHffWabBv5h6SVvM7hetWqvJKzJf8CamvnYeVhSuy1TbkFUzo9G7gR4sHFNCbZg6piCwLyZb2",
  "key4": "3qfnGMAqzDQS7dR4GTwuoQaeyJFxdUMxpuswFuFHzJpnvfCVaXhbUeMdUiKB3mAaQfh7k9ebhxsoJfxNRM1K7bGG",
  "key5": "nxZBnWC7KE7L9U8HjYH3eS1qF7GXDHsEDPi2vB548duvQoeS4yrmmYG8w3MJSmX9B5KKYtFd7e75Vpa6edgPiGT",
  "key6": "3VnY85NEsozbByUuKppYY4bg4Pmx5wYVsFLMRemVhH8Buk8oJDxYN3Te66Jmxy3MHQZ4KQP6Mvy3jpnhRS7A1gwd",
  "key7": "vzr1788Fm4SCCX3fYmJjJX7iY7M4iGy4ncXPsaXv2YHRzE87uk7cAuwdUXQ6JN4sgtoKAVjRC661h8FVWwrShm6",
  "key8": "3UHQiUeEk1H8ddfdieuRjvgWrJuuowDeM4uPtx9vCqFHfLsjdVNXMqqUScsdcfG3BgLV2huSVcSTuD9gnBLparYP",
  "key9": "2pL8YDubR3mYv62fM4bYfuqstcJREF9fzuQ11voHoVP8biBucFezSqtRSLurA6GCKaio4zefn85nvCJMcrVCBJmM",
  "key10": "25nDLnSkfa4f1AY1GhXYFbmX8285pvKHJcTYbCcFvzn5zFhz48UcQwJuCDN1iRwoMXoBsw4ttDYtw88rhP2n92Va",
  "key11": "CaeS6UnHEMwH5vedfhqZCjCP3VB5BkFMPzckLZJqWEgYL28urhiyWgngYkUc5cYL87D5bB5dhSiE6jMmBSvzeCj",
  "key12": "5GAoWzoCE9c3K4C4AmDk5zYJNooYonbC5tJNkwCygdPTUMTi6cUBFLhGmMJDFyJTTWTZycJRyHVWStWXfhZD6Aci",
  "key13": "33NMRrMWJWbdQa6hY5QU88FcVjGtirq4euxcKFkjEkBiaf5JvLMi12VPkgFgPtr2oUrakyCmqn6VwE7LCmw2oBEe",
  "key14": "29Vr2yFxTAHsnBeup74pNDoWcVuXTneeqyt2y58KMDvrx4V7Qr4qkGnwBoAEJYKTFK9iSur2FcZgJYQgf361Pcr1",
  "key15": "6T4S6Q8QCkiwxn7s51NtqWnBweEuo5Cz2pyxjvxGRAPXfcRYh6fTrKtPe5nWau9WzqCRhi9buyVzM6UaVpA6LLi",
  "key16": "3ZnSViyY5VxTGakvENdEC172avadzWemfBhyGcWZBaN5A3So9RNJUQmsmEaEzkz6Fts1rh9TEA1wsEzFXMCegv8",
  "key17": "4AeqrK8jJA3C4hspo8SbX5KQYMfT5NcfCvnHdS5C7BfxTBfdQFccK2whKTHnjuxSxi5gbtVSnyH2C6ff1Z4XKSF9",
  "key18": "2K8h8s6GoiX2c2Ye1GZuBUe9KjEMw9B2bXzZGuFtrhRyB3igSrjHpz9E1vsKupfqqfNGv4abtzAnHAS1SHm7TRu9",
  "key19": "3TAatvuQXNyNRqJ5GwCaZS4vF2SaZNrUaLLmS8xg1bz7VEkbV8BXzaANoq4n7xZmK8hq3q3pbeEnHjdokAKcnnbQ",
  "key20": "322BsoroeYoRCARJrmVhCrLMvD1e2ydJpLmW5M6BMZpDpWiD3bJp1KtQdq73sh6NABJnATwmurHVhG3NhoLp7C5w",
  "key21": "539WWj82Qt7wT3fXK25GvZq8q635EHj6A4jjmkh6nNdjydMEtCyKYW5ARdKx22PUys1MywgaHncbN38Csb8XCai8",
  "key22": "5FrKzvQXGSPasEREQs4NbhLcF1HrMJEyxcp5bB93zdUc9PKavvAeLv19gsLtLPdZGqDs7kMpiAnWZ2EoFyKfVXVc",
  "key23": "sxWmJ9GpPMN4X7vWS6YPEi5gC8sdy1f5vPwH2CaiPFZ34yvpRgK52kEPSXvVLrQMdjd7emGSJA6Nw1eVhGwbF7g",
  "key24": "3ZcJo57gR6GpsPMbhNUhQ6QRD7pNMGyfTELRxJZns16ptiE61186hEJ2oGXPwYvRRqNLDt4zrfG5GadDTAq9Gzac",
  "key25": "DZaV2RKjPMbPziC9cCtrERn5WXV2r1xXXimZwsUbpAbU6sCZPFD5ewgDzqEQEtDNwJQmm5tf5CAYissQ344c2m7"
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
