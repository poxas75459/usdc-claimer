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
    "2XwqBsKy6zJiygAQAFHXARMM55GS9LzqCbLXpUDaKo8S3B9GvFAZGeLYWNmATSJfHhAq7MqTbzMUXR3QF3uUGbkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64svVy2HHmpd1sqLpthgi5R4DphJYgtGvYvfzkxPM6qDXAwXSMVxok6XrMMESGGGrcqugzTf3NcZhXWZAs84Qdjg",
  "key1": "3KrQRTTBPMttBrEWrzmzQTCQBmxDbmtkdS2jVhSZBgd4QKtMvRYWYJdP37WD4ReMT8D3AuxiDxc1z6Fc7nPqCKjo",
  "key2": "4QPCZpcff6pchQAA4mQSBTt9rARtMxmrr5fJJpLCTYszqj6BHSrujTMHMETJM9KYy6LFhfBEJMbs8bqjonx1Xbiy",
  "key3": "5GuyfwJvreSu4mzxVMTLdRhpokf1n3UC6p5ygBx3QfyPAzfgbB7CcAuYYduHVUcEpyey7qJntnoWm6UvnZU53AFD",
  "key4": "2nWiKmAKy2ahrBdU2MfwdyzkqXdssQMshwmz31xjmiKYps4zroEfPS7Bk9WX41G3Mj3pASRWKhJqQMf5ok6E9fSM",
  "key5": "3y62QQYKPVk7v7g9HSQ1Hob4tzuSes23ZYBxX8FkSZcooNSoY4MBJE514yKLRDwn7fhzXkAXCgVHRRcV3ow4uXA",
  "key6": "AFx95z2TkYQnvtegcJtb7Ch37nesNp5z9MYExYNBRQ6dPvp6kwSyhz9dYEVtTcU7pmPFmTkdGyCrHm7sgDLai9S",
  "key7": "f7fLWKjoAt2XwpAx44kNX6q8qfZgGqVEFYMntVJNjJLoS7uJP9Y7t3GE3RK5zRzrvVsy8cjgpBioMJwrsqzVEW7",
  "key8": "2fovDRdwrfEVPHcs8nZNdym7n2R2qNaiTzTqDCG7eLEsCHDvg38ASCUKdHg8v69GRQrsrCYFa5RBRBpiVtBq4SXV",
  "key9": "4HHAFnkE9X8PYNYbbbq4VQ3o3hFNQVQQeSTKLrN3Xb9AH5YBqTaSFv7y2KsHiTTnbuN8W7YtD8ZnkK22r51jpuSL",
  "key10": "49HGtAijZ2ZPqJooizcv79iRkvC6hmZCaRrmUv75zMVEdhnrLapBHkeaV3VVHMNWtNQjz4a8uQVGWXsY98UAVy2Z",
  "key11": "5EVbFcS9zDpNXttcYjfACsMP2b4V1xrXNj196oJ84fLXtjPAvu5YgpK8xbvcQFcRWYD3WrYeeCCTULY3xxbeUxhG",
  "key12": "21ZkCZWhbJeatcGVXezYmiDb2PvgiMJgdpJdn16xbMkCEBQBoMFn1cZJFivdeo4u2kveGd6XUmiBkZNbPfoPJnRg",
  "key13": "4EwffAnCNTeGUtCCY3qVytBqnjsw5E7uD5UMpHWWkHK2DnN94iA2TN49ygAdt7nn8iKku2kj59bK1wmUkB28sGEL",
  "key14": "yzu8xwQFoM6wENYdcpsVaQAw5FTCv9oZB79RstTq1cp1tKpQSMWRh6dyRGhFEyLxBMXTmQBpdh35vcQGDg7nDKQ",
  "key15": "2zxEH9K2Kqfz4FwG1hTisMVkcdLbSCAKsegnY9KSZPsh1nA3DZc1aViL9esPrfmurP98rCE2a2af9sny85wGS2me",
  "key16": "3BpJhWQbuwCXgNMVue9sYbDmjWXzwsdnRL6k5vuo3dYAzcFJFWAF7hMSxAWUDa9cbWCbrVvWDr5QbS4m2qJGejWu",
  "key17": "3nNGvPs8hJWpEybMyd6BRRXaqoEfh6TLEmhyWCZpkNCagKUHRHigHRBdeXN9u9Aa7tuKTqn3y5cN39LpsGusf4CN",
  "key18": "32iAacRNoVLSpNbZQN3YnP66BhYjcA8EE1MP4TdwryuGpANfU13cSym3bPSc3YSZNudDCKwHCAx65Duhtjk7oxBf",
  "key19": "5Lf1C3cCz4zeFuGK54vnuKcVFD1P5wusvrTgmouYWnY2LFTe5nFBXsWXxqYPqXpTvT2xVVsjtcM872GhtRzMY2dB",
  "key20": "3mWFnLfXbugepYGQQxUuRQgf1e3Xrntoqh4JTZdciUWhB2DQ2TbU7xYZRvL4Fie2MLQwfy4mh5Skn1iPfLoMB1gx",
  "key21": "KNnXqiJmm8zZ8UbMPjBn81as7m5NEeGe8nLVMf3TArr5Hu8KDKaau4ncMPynauMGsXWuKoHH8PdPEkz72ZZPzoj",
  "key22": "4nb1yGMSMgECftsDjAVEWvvU2MCg3NJhL7hjMvVUxaeHcCwNe24Ko13gFtSDLUAuwHdp1yJr8kxXbThNzpVzfyqn",
  "key23": "3GWYjEpqMAn2YYJLyX8so1PcMMusKkksYka7YgPmy6XeWsnrP5vpykj8pHHLadNUS8h2r1tiwMAHPbBoBanHWPgT",
  "key24": "5uumTANPRwbkHUeb2A4aWkQUq8nMN23EUjKoXjGo32XmCbG2ecUbkZqojM1gi7CXq5FiCUUPm3Ws7EhfvGiGKvdE",
  "key25": "TQUoAYaPRSh2tEzSxZc1AMamBjh8JJ1KcWNs5V2d9U56LRqNi8oK1Rs6hApSUeVBoDpqwa6KHRGRwSMDAVRGeBg",
  "key26": "3BYsSRvJJKkA2KLFapaaSqQAEuukUkBSbaSNRuQcPM5Re25jtCdmmUSfyPT3HBVFutu2NrUW79N3hNWQv8BYMHig",
  "key27": "4Cp8J9ANAbHf8mcYE6RuMDVjq76A6Wj9UnLg2Mhpe75FHws8d3pPceZw7YSJQu92BYfQp8NoRLVkJnQFzEv7fVqY",
  "key28": "2kjDgrY9d2ocLmnwkbQgWUWtz61et2CMsznR9duqw2bMDvzcoVbrjfMZ6z1ijpGxNNaeDPkYAGRzgDUFVsGwxDUX",
  "key29": "5A7gB87bw6T5tVCD3tozHHF1r6t361KZawpkbi3E86iTUbYEiXe6dHRzAa33UiAunGxRUeyxTTkc5Q1t5oxF63q8",
  "key30": "2Yb3MzLyZ3Q2QRbmk4YNiWTkDM3KzNAX42oBxXRVFAb3XeWq9Bt9KfchNmmPBFZyeVvU7D2AHKqERn2GSTUKZGpV",
  "key31": "mBX9NZdfg289mbZqmr4k9obSoMEoEJQRPsY66jgXshFmxZ9Ay8yVAvRnLpVDv1iC7iruTwuz86h6S4ZFqeHi1Qf"
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
