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
    "KRXj53NvCfCQWVY6s6VrL1Bi35UEaB7YA1YVnkpR4SLHLzoaYBHf2Pz4DoxpicVQfTx5WgnzVCmRaaQJFTX18T5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oDccztXdZL9HNhWvm6RmaNZjkQzSC3jf2syPt82HTUr13vqVZsHrJAxRUHqMpraZELKcPrCgjVcgfk358FbwYJz",
  "key1": "2jJx4uYHynphJVkeaQ9zKNktXAkyQX8th8fNsFsUGTSwmJ659ctt2P3fYPJEsdE2JSvCCBGunpspzDzpYayinQEe",
  "key2": "5vHME2dhWkzgApgRBDscq3ZqTaUhC1s8exkTpj2nLT2XCbzTiQbxuVixqrJNnswfnchYiQWPU7jHRSkshrFp1Dde",
  "key3": "4aBywAwoGZK6ytDwRweSoaoZFWbMV7McLgvUTvMQtgrp6DhwXvBy4jELhh6dNF9nRAhn7LdnMHFL2rMyvgjiJCyN",
  "key4": "2CpUR7HKURcvPAcWdPgCWU9Ki9RZHWq1wcB8CN8YcTiRLgU3W243Y4UtcmFjQFWE2L4H1dz55hgREbkHfP4WVuie",
  "key5": "4NgPAyqoM7uRVFpwk3uiDjDdPkB3AeJBW7vLyzf2pW7Jc2DXLU8dYMfCcdBvdNePPH58xvkz9nmiyiTfvgZ6AZup",
  "key6": "bDnw1vKEBsAhKdg5yAmWxgJK5DqhaqwWE7BYoR3VBrV9xQi4Y1mc5KPPBwFYDVxnPsCajZ7Ga39YND2dpYvPzLz",
  "key7": "5shKjvds7qZ7GxPWYLCPrDMXHzXPExUTe2WYg8EpysDKprBcpyTPFcZf7DtpXQfozEiX8sbE3LHdyd8kswBumbxA",
  "key8": "4WthLQhExY81DLuRAAQekiAwmxF7gvk3FsWid7ht4zksjPRiZt1LCKB6uMvS4kANJYL1m2YRYnW51fVHtQHmbf8w",
  "key9": "5fNy3cMYPJY2oA7RgG6DfZp3Y5QjxoPV7vRT2BNfR9GpxBv67JsvqWLiq6TMzN2J3oi3jMWfbTTXdUFtfh6hN3ZA",
  "key10": "5MzswTHwR3KzHNySYXEbhbGfakWJU5TNxF2Tb2iKtoWkSiVPx6htCX2cDLr24b77qBYpTZhjAh1iweHmCs6WTaCL",
  "key11": "2EWizbjN1EGJzucmSnPShmrR86tCGxDP1xVVtLiWsWgC14uL61kjkytcSQr1V7BYCEZDMDEnDrzupqwFbXgeQX5Q",
  "key12": "27ZWNVH9AGsqibczN3nRjXKuxTEDxQKcEuzTKBnoAyu1Qj9icKJ27EpmAdBaC92GbXBpysPJprhBEceDVQCN8Axh",
  "key13": "BPQSaMoVVMv5pA445GV97Jxc4HV6VvZ2TH5541N1pPm83337cQSCmbz2csHeV37xjhKCEqXnZg99YZtKyX3tMxU",
  "key14": "2KQDLc1XL2BT6sLb9LYPpwnzedH6n9rq3xe7ax9Bw6ShZ87mRDTXf6kDNx17VKpEi8esYpzFDcTWSTAiTE3HRvBq",
  "key15": "5FhiAfAXX88Zgs4T88SKspuGtju47v9pCNTyTfpjiiUzC2ZwuLSa3QdMCdEP9X6CRJqFT3cqFnx9Nydx6sWrraLX",
  "key16": "4RubZQDQNvqUMEfotACNgQpckYWBWWharRdHcjZpxNRArKn8ntS7rvwkQD9DZz59DQguyS7iyPmERar4VF98Ndt3",
  "key17": "2YQ8hWSKnXs24oAZTAVPc7hpi8vJMCLqUS4QEAe82gkeoYPJNUMVvdhS42VNe4xHufoR5FP6MWy3AFvVHD7rZrm7",
  "key18": "4h3te1WJWMHNjeUXLmQARh3VUmHHT9M45NvcJvX84qEdp3uTZD99nGqCpr5LaRJ39fAm6K4NJKEMwjX2RFAtcTcF",
  "key19": "4AgMWE6ga1AjPMXDF7ogBcFgVFC5eiWrGRuWiauKmkGpzawTWh5iV5k6dpQ7Y8ZFHc9ndPKpEEeqEk7cVMkxRgKa",
  "key20": "2p83Pd1sHsPP74rZKZKBA5MYfTrj6CcYh3JNPvkz2w1k2a3ukYkSSoZZ1dc7Un2Ushg2gETtKQFWSH3vnidFCcs",
  "key21": "2UwADGQ7D1tBKkkfeu9fiawttLNTV2Zy3Tj9mcYT9aXDEivHtC2jgAVoetJQtxbw3uSYMzQhnnheG2k9zQK9Fv9C",
  "key22": "4KonVaqM7K8aQQL1LAshYciXuK79TZ38xVSkgsJg8LB1pmTXKsR5hz4WohU8CWJeKoH7NxcZFqGMUDmyP2tPrUK2",
  "key23": "2CHQw6HR2ZN9S57pgLJse52yYXQhzf1rmjAQpaJsqqNPuX2jqQz9xqSfQqSy3s94kPMt5jTeBh5mkVgaA1LmQRHD",
  "key24": "3bcwxnyayTJj8uj69jfBvRwRN468DUVNeyGhCmGjRoLxgyGjMmj9ZR1FyrWAodcURTHWFtwFgqtpcNNecVPZo2W",
  "key25": "5qUKd6KhA41c8XRYtd6T5NwRMqY4uuTCTGxzf3pBcc6T1PrPrcuVPBpzpgczcceu1Gnm2VHnHv68j1WEsVjopNDh",
  "key26": "2AXUCydoJFGUBvJii6fcdyWuMbVKNfKVzVU8j1jvXbr5LBZJXakbs3V1VcgsfMhhC86TvPtVrhDkhWiYViqyFRbG",
  "key27": "4A53pnGsyc7F9KtXiER36SUXhCD8mKuvB8dtFGptRbHaDmEu1XkMGpCurUzsEq9JDU7XHFwXKgnXXHFkrLg1N72z",
  "key28": "3sdW8aLP85k6jENQgZEnb66tGmujprxnKzjNe7ea4s6zCvHLMgJGzX1Yog9MmNvFCyUx8BXEfr2khWnN6X1sAVyP",
  "key29": "5ivr3Rh1bekovgSHUFhrkMBBGi4X1g97WqtNBnf2q9b66aHHSiQpj2XB4kvNKCdjdSaGidUZeRurdedo5VoKWHUs",
  "key30": "4LbPiTehxX7Cj8MFimkTmf54q5aNeLnhNGgnPwH6YpEREGriJQhPn29Q8q2etVh9zGi2JEdM9QQrSMR498pR2CY",
  "key31": "3ZCsC8XKojCMRPzWv1QnhwZMAeKf6GGzTpAZBD1sRhxTNwJD5FJJnQT6yWZ2a3x9EBLMA7sUuM7qm6G2WNMVqYP5",
  "key32": "WCWDQ6tqMp5rLRtFTybkQrhzcHqAHsfAmBtijhfmGsQP3X39dvPnBC6aMKeYNo3FmmUuE7WNXXFb528SfqbnvrY",
  "key33": "SwomijCxoTXXgjt4HMb9VQdpKkJLrFgEe2cQYU8Fdn8P49bGndzWCxZK2hRUWNADA4bvmys7Jhry7cs6nuv9vbF",
  "key34": "vnTMMEQqAM2oufPb9qy6SADWpaBjBMYTWu7HUfocfB5wUMqsfkGZ3cuWzTWJC8fJkzmG8k8WNEH1duNVRfeykA3",
  "key35": "4sQHyqLvcVApvrF9oJwng8R7X6LovZqNp4WcmzREyYhApChC2HNYBEY2cF5G1vkQ8YyyNjNWje2ksCN1akepKnH4",
  "key36": "XokXxiUTMGx3H7eB2hxmGUu1p1wS7nuWDR6LTjxdMvfCxCFAJ7BQ74Rbcx1YQ66yETdR3E5xdVTsNXw6RPhnAAf",
  "key37": "5tZz6PmkH6uKb2GtL6Bw9vPd3qHHQ6SDTBRPa4jBGuGjGxG6mzZbzvRXf4578Zdby44piaPGAdLWEFVdcs7xCHMz",
  "key38": "21eMcnZKyj39U2u3i5FPzMwmL9hc4LmERMk7hNefz8gqodfy1kiypZAGqtYpFwE9MbpfNdRsRvkPyBoNXVaXH412",
  "key39": "5zfqfaJ66wtNTkKi8GCgbvVjoQDm5HfhDuZifWnh3zmeKArLD914aAkE2kqiFe1GaHzaNzNQuBpt4trJS3TN3axG",
  "key40": "5k7Jf9nG6i38jTC2fkYSMeLPeDnxk6FvTqVvMEKDrf97KNj2dXE6GFj2PZBdNMjq5q5mVgpfQYQp7ejpwBfK8uyd",
  "key41": "48A98SsxYoKfoBRsSy8zgAxRRMvRUfDkyhsAnrURTJqs8j6vDx6rFrTNeBYusGg7ffJheLTSqkz5KBpzkYij2zq5",
  "key42": "5YW598ZEgkGDGcC4NGTEwtLJJg7AvhrFJwtGPNjhptCeTVMpnSXf8saniMdS41LfQoroNDtELc8GpjJ55sNxb2uf",
  "key43": "4C8grVnN2dNbFLqeWc2jfBAwCpH8B9TCYty6d1L3SgdbLrxN8nXV5fbozhTFwn8ZYwdTq7LqBzC94FXgGE2L2QEy",
  "key44": "5fhDEWxXyUkmnQowqPzr4Fgk3KpjjmZVzHJukMVQz1KYoRX8QZVNAmtU87UknunnvuTf5xxJhMiM5zoHJzx7SBKv",
  "key45": "8AHg6Mr8jdeD5Gsp5wbMA88TXHFSMj75BPJnELcqnoxgBRnvxzG4W64NTRswjKhEnb1oVGFBb7EqpZcKiqN8751",
  "key46": "3zVw1byVteS1Veq59rmmajW3X64rksiej7Asn3cHF7THX5uqEmecSSKnJCF3utCtepkNUiR732oFzWwtzLGbnaXc",
  "key47": "h2suCagJBpuqHbv3cWUoqbGSrXksMGSVDVCeryEH21VsUH24FJtG4LYHGdB38RtPf58viidnsza11F7VFAZYZDV",
  "key48": "5aVcQoxCgg8m19PzkQ6o6XMXUKNaxHpssAMkgwUq1YDKzXthtCoJvNvoRUsMEBJ3DZUBE4f7or1aYMNqTJJqLxQx"
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
