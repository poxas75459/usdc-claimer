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
    "ZsJHX3HggSzfjTxvt7XpSZ4Z3PrEbEk2tTgSULosk5ykVa52f8DP52YkdhnLRQrB2TiqWHpQVLr6YNiNCef2mZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aKEcyGCUFzB5SfcdvCdCoC52uGKakayo1qjJEbeZGPFoQZd9giEYMJ6KaHPXmJaPz5NtjWud7fJETRuWTgobvTp",
  "key1": "3MbZh3d7znqeNepYoHXtkgDaCuHktaqr2mKSaEncRomM1mn9Gzm1VDjPSckLV6hvs3oanNUxawqvRgVkjCYrbJtS",
  "key2": "GjMhS3Z3XJa3BNA97qw3tXH3xLtFnogREJyhXVcQXwZtMwHTgiDJaC9XsuqqrcN2wQ3kP2JBXmp5AYMBCC18ru5",
  "key3": "3cC8TeXyYQvrUGGbZhXKZmc7Dg3aFY8jUK4FXw6SrttNxwCKMCpcSBcbuWGp7xHt5L1Lmu3rS4CrKVJbH9vxMboo",
  "key4": "2YL4zYuPs2J14J4eVtSVW9FgtpAAzE2emf3GYigSodfMjdhPmBc3xbwfPMzQFm3JvqJCJ4R2cZGush4Wk44sof7z",
  "key5": "5RBbun9fkPWr4UyRFHgMVZX63SisUhzFgauh77CBApA9a4ehRPgnGMi23UnqFzbrZA8dkSKWGwRpshTXWovZswCC",
  "key6": "2UimAE11G94GjfVvfkTvdUJEfaBrrDdKP7gUcdeF1SBp6Axp9b46DzS2aMXHgyrQGEA87g98KZjbm9Jxom6WgrXQ",
  "key7": "HaKe6Sm7e8ESTzuX9Z7CMvjr14RwdGKbzwubhmR7jyXs9Jhbc2x2s7b4tdRFkJwJJ3Qq53nkScV1bN4BxKCVvT9",
  "key8": "ivJPAWtu5qRMskYBXKMPNXiZWMrhRjiS7ady7UMduQ71jzqewvykJ6z5jW2MXq9wzqYno9d26J5gkVyHL84NcYA",
  "key9": "4mfC6L59UM342xhdS2i7odmbmepgNdVrAfZB6u4xJrGuRMiAR6X81TaZ13Y9WvUfdtyzSXV9Dx3Up348VCyLS1nZ",
  "key10": "3ApEDMtphKuHh398LvToYX3WUVPqHVs2kdUtQXjFPyKSqF98NpYdF28F7SMd9vHRWhCS9t8Jew4Ex7VrgHNXeQ8U",
  "key11": "4LTfWuYBDVTkx8NqMbv2EmG1oXpEJ1HnzH6XKjnWudfq7qU2ULiXzLtJQG9VP5gSqHnBSvr6Piy8kHA4DDnzQvv3",
  "key12": "66utYddctKWPgSYMyQnqB1GMEuAD2ySxb3C21kzxpxX5ckkxaPN6JNc9PPCP97FtuxnbwuAuEc2vT8T8S7sfiv85",
  "key13": "4Pg6rtDd2ptETWdhwrWPhdu3vZrco7f2LqhrxaAAyMVt3W3mQazKPtVXRoZs2dt6ssPaJVqsiHyWVSqzDBCvUxiP",
  "key14": "Xc5SGLWLHsFA4RPM7aGHhb36X8B55GSPv1aN7K5tfN44HgTGKzgWPi7XakwBo7vXQgvrpYWsMpFXbhh1eu2fq8L",
  "key15": "4VPutxMvsMBN6GsKpM2vgEfzGt6JPB9VgkzhnsCvwTc2Q9evDv76P7NW1yHpwkXHKSAm8VRPJE4z2cVrAjeNTeqv",
  "key16": "AzEvpXDzMiiYTX2xzrxXJuJvWvJZDDGq8jCh8T9MF88uxFhfWCLQua2mpVBeQ7JU3TJWwBbp9391rvTbMdqXNw2",
  "key17": "21qf1RT2QR26LqHJVPiyYZb2a3K39ZH11aNbdvaEAr87yhjrVo7nknGgru7VBDNkAdTLgeM74XstTgqa9Jseajps",
  "key18": "2HSpJb7dMRCohqBaVPYHDP4LhZdVB3nt5fFKW6ob2shJ8pfZLQDM7eP3T8JnvVUNjJEyUUV7mdB2dtGGx2U5czFB",
  "key19": "2eEgm1ySHzLCDh5hHmKx1fBq6rf3WQLGhVbwtJBb2GF1sHU5Bb1UPV8p64anMyZzebLcPkFBufRECQxvgqjmRJor",
  "key20": "DBS6kM8UJv1yxf1tEi8NHEae48fziL6ELhuGRnFvPuSFw8nAKrAcERHV222u8d2n9Yrs8J9ivXVNsFYsKCj7vmS",
  "key21": "2keH6EKnues19aMv7BwPCYa6dn8N7KzTpEYqQ1WEyshQrvhzxcp6MsgZXA3JHoQk4jvL9CHedPrBMSseY62TNzGb",
  "key22": "5K2QcqWdK695zzULVpT1i6zS6TCFqYoe6GfthzzsMX5HkZdpVKU8rxHuN6XSsjoG4g1MJUb3AMxeKSqbHvn79n7E",
  "key23": "gSFuD75pbV47qSgjEsgEFWDc9yVRcaidT92TJK9Z8b7qijN5TvUHYTiLTfcJChBpYCWAwTptu8njf7vgf1QaY3z",
  "key24": "3yrkvRth6APMh6HWEeStHWqrZRYW9aY8ebhSsYEFtaqUUtc3iS94hN9GpbjHc7ZrENePJjHmjvFXDFTd2Vnkf13n",
  "key25": "n5TQ5fiYZzb7UfBNNwCWJAjxddCDteP3X5BRnyJcNmULuxkd7KcscQLv1pqBEvLdocVhqVueV3KjcLyfDnPfVEF"
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
