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
    "Qhr8Se4cnTJRp5Hhp5UFYKstChapmPyoJHWkg6CRbzcGVgMEgNJYQwpp1pz14BdeNpnRe8RX9EqiuwWjgWjwE7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495SAZn1MU3DG1ZcewHRrarrCK9VVMifnCmiukvAyobnFENmj5nsoamKxf75WMMjtJMsqLf1fN9gKLftmrcSN3ms",
  "key1": "3XST1q7BbLVx44tiKhxgrduLw6kDb9hTu9LyRNZoSsm3hjzXuaAbL6jfiqg6psoBcf9seH3gq7GPA1fHiAwqGXUN",
  "key2": "4WzeJfTmgWx4cCEF2ANCyp1U7SGgTTRRjLJoMsC16234Hs2YHeCvn6ZKzV7c6bP2TGVQTGFeoKWzwj3HtgokcTSb",
  "key3": "stosHcmeiSSV8cyzLwVFBB6FWUrWrgVpxMUqydSi8qorZawtmwcZ8hLUx1xhBYwTSyR8Zsy41AobSiH6dRAeiRu",
  "key4": "3m4qA94G1dSh6mcc6qWGYhUhon6v9breauf718SohN9FzRcKLJRoyyJjcxHJb7gaxxAHfwDoMeb1Uj2dCXQVe6Ai",
  "key5": "289dz44nzXc8eVDLpuNfyDVf2fdmvAKwnGN4Snzs5J7Kn6pMsnHS4P3d24tNvari1PVeiV6D3MWXnRKtrmm7Y3aB",
  "key6": "5YyKtmBVf4cxmJwZkdYa48fNEsjKkz88L8wm1x1jofwcCpck5ieA675CCyCWYwqgerxE81yFzghj4sQgT2yYE5CZ",
  "key7": "3XQMqba5TneLco8sZUfuMMsSw6Gjz4y888UbsoaPuGGX2YzFoUjx8WzVsW8X26oQEViMaQUvn48Lo5M6bgEhvE3Z",
  "key8": "2mSyroGHKRunP8L8LK7QXYwrZQAdkEj2Dief5kftz3GmoF73Y5ud5F4igSFCVyhwh9bTpJ7UwUoKemJAqhLsWNXE",
  "key9": "3Dx1zM3eFhRc8TQ7tAUoXD296yz6ntTaGhJDmkQL3CuFtjTHWSMsCRCkt17HRavzQPs5SDxc4br733EfKoEf9f3i",
  "key10": "3qhBJ9JmNuMDCA85QGKust2JC7RgiiRctYonerw3A3c6tCmtSHbjbLay7kvdTAp3mnobdM6FXA4Sweg3ckrVrXJ6",
  "key11": "hvRr87vGjpXCWTtm6pZVRLwpcmxnLBqrptJBjmEsqRT9xcr9PRfbYaAZkoPLyGvG8Tpkp3FxmbGxag8Aeh8f4aH",
  "key12": "3WG2552Cjudn47b8unZd46sGnZ63haPDr5gXG4maH6mguxh8ZVveoDvsXeT7Ube1H6oFLDCg8f5Wh6puqxCpz2kG",
  "key13": "4JutGMQsNzvrW5uD8imkTJVJ12vYH3TuAJR42oiahoMYWXrmvwbM11GVrfgtCKjW93jZmaZP1arfhfoAwSbN39gy",
  "key14": "2HvSLfdRX9cqfGEqNANJ2jKDsX7MSCLiEmnpZTLBB4khxomC3nBLdxGmxUcMkBB2boSNcrDX3fLfx9PADeFDv7hm",
  "key15": "2JEyEQ8rvYbDXrHJB74BtinR86GAf3MUns12HPraVmJWPh1gKM3t1WF7wSGmZzFJ7Sn1N1XeFWPPocmrY54nfcVT",
  "key16": "4AfEN1hYXnF1Hr5RCoHiphE8tKcmqyhKHVqXXGoNneTUr1GiwLEWLjnuW182CXBzPobqgfKgs7S8hVsQ7PLtQTS5",
  "key17": "mprP1Wm7py3pgGz4NHcoVMiaZChZbwaZKAWpqiUGMdkL9h5ksNGsda6jkoMTn1FqXWRZ2fMBjsDGP7UV4EQzTbE",
  "key18": "4Y15sinJz4KrfgKn8dqytQ3pxN6sqTortLS8bpFFQTqmGbj6AFn7jC34Uhdd21iRwAf5HAvXoH8mRyGxaiTqhs1Q",
  "key19": "23s9vrVs7rayrkqvyD7Cprzz6JqZyScPBo9a8apCa5BBzfQu6zqd2VjbeVP2VhdkWQ2Ky7Vu9uD1vgECXfEF5uV8",
  "key20": "4BjYPsw7SvAfJP1QPenTGAiCdCnRJ6QNJKPGjys8475EfQGyNz1rouqy1hhq84zv14i7euWiC71ZfPfVyBdGECqK",
  "key21": "NJ17BvGkuvQsbHDo39uacQnyRatNPNRH2sP5ax8Y1kvoSyU4MfBGvu7N6i5XxeQPjbw2N4K3QD4C2V9QCDCJBDg",
  "key22": "5oi5xTW7YsQKgMrUtwmTvhMii5KSiNCq8tUiPALftwSvvFRfSWs3oxLNaiZojY9ukYJFDiBA4kp4qyH4pCwgYesd",
  "key23": "3JQ66WeY7rHKpqzke7vegDYeznm9s1RLSdpLjZhqS2eNP7j3EVLDUtfijksW2AQz8WAQXHCfmEKbaPSp6458Fz7o",
  "key24": "413PxC625s4SD9K7ooupPfXoExkc7gqGfBZZt3HyASqJi9fcpGwPHkzzdi15Ad34K3sRhzc3NEVmMNZdC9PmanCK",
  "key25": "1DmjJ9CnUMKbMKJg9FboAsBH9FANedwb7WsXqBRVJZ8ek46AUvQF3p7q7VEkuzgnz5ramQJCxYBBLEmrX4RDEkq",
  "key26": "APyhLYgvGZ2oLwvhmnQPQ2Aha9XMNgx8UR4bYjwGMi6rVob6ykZmQ7B8cA1N4mUFEDvDaKL3c4nst9Kkit52agz",
  "key27": "63J9NH8kxNFwbCBSS5TRtKyumrps1TD9MMVnjsUUGuQScdAzJ3FZEkRwxmT2tqwKMxhCL9KtCzQQgMaWzrZowjPi"
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
