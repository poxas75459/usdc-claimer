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
    "21KnhnzhQ2vz7MQTHCe5UhWy2fNdojStwCcj6Wq5CJ4EDMgv1XRWYu6tnGcRLLfMrboVSWxWe9XPJRBuRymM4D3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Jd1zwUeiuGYLTZ69HwH19QrpnFySNsqNnz7AUFWrZmjKgRBfC5AQU6rb8PVGhREhkiBKbriCDBtYkqLbREqZ8H",
  "key1": "55268BVnQhyMro3gg9s7n9yov7KF3dLeBDdH3jKvdBd8eLpEcHdV2m1f2eKWPVPVGpJNKMi9cGxQj75wdoAFR3oT",
  "key2": "2WKxwhHjeVoMGpq3wP1fkPSdXjFhmb7aw3HRLnMoYmKW2CZuG2BFwjt7R5pELzTxuu2mezoJRuK8A1QBvjVKp5Ee",
  "key3": "5hF17Ghsso4yxvL482bnvEaphHNsL7ZfaJtWvWA97X5qprJqJeVaJ6Q2Ttjkaeh3bBgsGvpBCirZqh13FXxPNG7C",
  "key4": "4iHxQUuB4avQvucUXciD2UBNf45zdNFiWHgvEZ28CFaZyWBCkPnTkCvJoBgHguqazkXiCRMfAQZdCFWEjBpx6HSc",
  "key5": "4MVM9s3kFuWyT9sB4gu9hs6zJYNw9TwqbNXHoYTF6e1g1UbPcNKzhQXHmo7LfpgeKPjd6v9u9rg473E2ZN6PDDK1",
  "key6": "2YT5XgFxA7j8Qa17ofxwtfnEgMWGCDESwbajqKQ4VxzUjuVdVEP9aUKXCNN3nTm2sekguGNkaVXvRKNWKXE3Vhjj",
  "key7": "7GEdpN8NipVLPaSJsyekhkWGivzdAiKW9yAHncvub2qtu3XUYvr1Pxf1GgyRkAC7vsJADdtnCLFhsvnz9PMgPr2",
  "key8": "5fMnrZBC6ZHMk3eSwr88YagWbcurHCesPXqhcqPAJGD74JpkXKmwTjp1ELrmMCcKtkvzHUpv1oy2DNXnArDnkjvP",
  "key9": "2uTPwkwjpARZ689ut9EbEm6cFhMsdgTGZdjwViUBCorsfjWQ77v6iAowTXbYeUtdqWZ5smwV4YQhDNyqzej1qrrB",
  "key10": "3Armyy15SsAnWcH157zJXTjKGfLDseEiuHMJJbR6J9bgmKRwwZaUcfM8nLM1JXAKG7idxkSL2TCLm3qSmGxRpPS5",
  "key11": "2EW9U3kLPKBMLUG9zmQsHBXNLu37LyMpBgnE4bRNsTe4xyb3XgeUXTVWWWrXEHPs9nua8pEtyJ4kkQGGxv3dxTWD",
  "key12": "3jmY4CUsdPSs4wgo3YtL9VVAWQ9SPzryZScK9mz8kZD4uYePUCVuTmx4JazFL6qNF6q2Z8MWwzY4ueWMWXZiXXy4",
  "key13": "36FCPHDMEM146CyKKupkueE1M7brRMbviKJ7UMPCgqAnGc6chq4AKkKH7tAGgijGX4pTyfeoxq5Xz2iwG7rNLT1K",
  "key14": "2BSqVy9kzwX5FeFEfYGuHkA4CWhfdm37X2HBGkW4coCR9BMCJQ2cwpFsmxJ43EbRf7cyBbseqEzM2UUV9SYdVEfu",
  "key15": "3DHhsyqdw2MJtYHDLgExPR68fqGWQ12D11EiRwm6JkNUBjdYAwDFAAGaxqPngzgugEgepajDhvBHVT13A41Gi4oy",
  "key16": "2JrSLL2XUEKeWZyL7QnYvXbhLdHESLEQJ4EwcNtQzUZJ3xJ2Z5gQS9bZQUbFhg5Ka8tyzx2EtcZoqX6fZ3FYqX3n",
  "key17": "4xncGk7p4cmsSJD89z6gJnQaA4sPVDtAqrvY6exAUc9y9V2DUewnx7cogFMFv1ghnJLhSXp4PvvZUPY6VYEcrsvu",
  "key18": "5EKiKg4gQyyUXXvnWHxvWzxPjDxuavofMvwgBFxZHsmL4g3T18Nns7h51ARg8b42qs6uvjtc3VePrMUZ3PZrcoN6",
  "key19": "4KCn4rYo8FZRDbqGQLGH6jVhcFdCWuCRCcPvqD8VdDgnvYugeo5BNjdvGiN1cZKfdBFdusujd3fwsEzVaqVJQza7",
  "key20": "4eGxnauD5NiJBP8zyGjBXWe16QfWpSsxXZnaoZuUxiN5fKV536ng7tdqa3TAwm2QL8TGPSKq6rowj8WaTh611h89",
  "key21": "3LAbp57UCa32Yeh18Q5kXGSP4Tis1Vr8GcsHekoApvK5VGPuAyw3s25c1noZRMocBzT9q9LGbUB5oQu39fkE8YRn",
  "key22": "LDWKvkg4snN9QocDKfo5pijKCRkQa6fVLqzabJBm1zobaHCC3QKMAhBJRFWoQe3HEBFKN2zmFX8S56URJ5v9zsy",
  "key23": "dsA5aMGYJwetv67HbWy3NWEr2vLiGiug3jNqoVLeoVmmZX6xwgWJev1n3QmcFxLNX5ckdiEdbegtfpbJs25WAcC",
  "key24": "3AcXDn3PjqrwuNKyFnMXjvsnJefFSTEFqA72j1XT3TnbTpEsvaqq8Vj9ibxX9aGuGbrj2YyKSaihrJi22Nxi9deW",
  "key25": "2oE1M6wurfcNU29TENbeyFYgDHL3yi9AvDhLrmgh27zDrcNWpr54ytwe4dU1c6Q9EJEijS1LgVahs2YGwRkZVknu",
  "key26": "2hiEcpFqKopVEnEtDozxoQDZqR7d1irwPKwqzfs2ksmXkR3S29QXXnfeP9EokZnxWHMTUJKdiaz11WDP9EaE7tY8",
  "key27": "45PpFbL8k4btAZ1nPPHo83NLzXqmPiy7RhnUEDdSDs3KQfh61PzcLqsZggVCsBE2MLTe3ssM5BcqiG8zQdHZ4P2L",
  "key28": "tRk6rhDPLoNPw4DkE5gu7ZuqG8xqsEgz2oKzPV6n7XEEmy8DPjpXTDUsGBcGozSPQTaiWRjvvs6Cwty37dtPMPB",
  "key29": "32vk9tYShgkPB3C5zK6NhzCkpn75rogPdWtWMaHPrhHXcEA2xvAB4txRwZeEoLHmyfPWPcNCk2hwfmSjoP3KT49f",
  "key30": "4L7fmXRrMcAzivGX6uSvrDfQcubWXoTxfdjFdPm8usrm6K7Xb4rQKxK7B1cCqUUoMARMQ2tCdFnWB8BzjhSCTDaE",
  "key31": "3FneLeDszVjBkMBXaLi1oB5bjc9kBWmrr6WGNMn3bF6UfYDsA1PWBLoszH4cb7r2ajFLMffRuThCTjHHLWzggb7v",
  "key32": "4S63QhxEYW9ZdBGatg5y7sLxrZJLDX77M9vfMJmVpu8fS5hqk1mGB1ZDSgVS1L7CrGbGEFodp3d5W7FAft9hn6By",
  "key33": "ZfxeNSDXoFv7QcQSp1ERxZND1aGPPgRjCmpVyfqvGmj1qFToaajaEPVFqfhiQZNWt79sG9BNX7mnhPSq2mKBrrC",
  "key34": "5ezD4qHySBmYdjTK5hgsu1wkKioaESUn2veLjKsKf4aZ1Ff4a15XbavSLAVsG2o75eacWFNXACKnATua4mUk9z1f",
  "key35": "2aaJZtUXHT22hXH1WzeE8crPdDsU3gqFCr1uckgP7XmaULuFLRHF1S2uq7pnLQZ7QqjuvwuXXcf8bpoWAe2iNFGy",
  "key36": "5RWTanZT3dzzWaGfUhruAgp87RNauYJE4YVfq9R6tpDpoi65NhAwHP1coYGE7MSpAXtb6GhSWhhssmSMN2rKMHyV",
  "key37": "2arsPruh5VgSvwdCX7PKws4Njdmf5TVGqccBQXcHp4XBZYSirEbbsTMLJTuT6fEi8vCMtKaTju15rWVfP56PKd2X",
  "key38": "5397Rzaj5UntnBcvvqj4AZNmpBcQKi9xv2iMRcncjTee9PEBa9E2mm43c5j3Lk1sM99tMmNEujr2ji8tQui2S3mu",
  "key39": "uJntSQLXcpSY9smcGA8wAckwZHEWczkZK2iPwoeeFWhsYsjdApwkCVSEGGPU6x3SrCLraFtPY1xqrhbLaVFoa3J",
  "key40": "4RYSjuAV1zSC9LyxEGNsPmyYDry8VdF9RxVftfC4WVQXp2UL25P6TfdJAGop5VYQ4Lkkh8Ni57RLGv5jLFyeuo2z",
  "key41": "3kXVjAfe5U2PsTSnAESpSfCzXTXzpiJ4esbLdCidMWn7T9hbmsBwzABTt3U3uQW5ESgNxGCdf7NHn2GaTKd2NFC4",
  "key42": "4waMq4vVYhAjdZMuXFnZzP9mC8nuBsuMH85CziQ7kT7pmKsJxT8jw8tu4Agr7U1od6ZjMarnEW5dPtRrmm23droq",
  "key43": "2fQ6Vwr6gverTQGkNxujwcowa5hEprwBiuKSPWMiJ8xjHWt6tzgmWs3N1rgUQr8KHArHN5hamsY1Ra8rAEZpM8bQ",
  "key44": "42sxVdVqKoyPH1mwJwmRUkeabbbM99fTGrUi4NDaJsqCMSrEZyZ1kKPGjccu111R2bXZeXQuWMWq6rLVZhzTWYzq",
  "key45": "4dYfy8u2xvtpFWgSi1XX4HmQx94MbZucrbiQ5t5NQBNgtvaGDppckeGDmDrAdogq7JFFQ6RZbDjHisMccmRXWUhZ",
  "key46": "2ymLoqDQtMk5WfCdmpXaY8Gq2vPE7DUaLqBY4qZjdFaKerVbwSmimwi3iywm18x4sMXKoBSGgucLCtw32at6V4in",
  "key47": "3dm9aRZjgo1tx16XDgVCCg1uUYVo6u7EveWCG6p2U4AYUxHtEyZyoUw99NCeA1fRzsgtVADZguZChd67nMCpHERA",
  "key48": "4u24sAMQavSHEGrtuweoSH9rJKtyyrQmkJiXeRFmV744ZdKo7AjBZX6oxVaUQPB9A9we57aih9vGRnLrQxx92VzW",
  "key49": "3E8QqYuEqEb4qSCpCsiDG5y9k8fSEYLieDWTbY7hHvRmHtCzm7QF8FJW8K4JR5TtdbRTV7c68FRwUzwZudCrLmue"
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
