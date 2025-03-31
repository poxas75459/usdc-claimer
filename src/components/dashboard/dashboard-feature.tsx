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
    "hkfL4RtBgBNgPgFgK1K5H88esYcePAMTskwcyG17q6tXDNdBE6D5fB4L8wMD8JRbHqd8i3mbNckVvqsp2od4ciF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nvho8bhQ1vh6pKu817ZQHZvSqtRiGfJpU3cuKrNNZAtNYKGF3B3Hvr8wS96ELS9Kn7HCTBoEfrvimXcKxz6EeLd",
  "key1": "4oNhSEtnmoi9s5HkJwoCUvcGx9BXVZ5K7PSxXpiK8KZkoNTnZRMpawwEZByuduRMzzChs2VW7sESAtjDupgBhiG1",
  "key2": "5hcHAYX5ZvZfi9GdJf3wUvj48KGDkr8imwkEcEHh2NhEdxyBsZfqAUtELTCLqcLkH9n2T8BHJEwMgdTXGXxTGxZo",
  "key3": "2b8no9qmNdjyRe2ce79ZAZudLQzc2XN3JX7VStjgavmcwbrt68MSxjEgB4C3kqeq5CxNjxbVNq3UDjWW2qREU2t2",
  "key4": "3gvs19bs9Hbk7sHWKTFPooXgbeSQsPwRNiheC5vyDYFWNrBsrunR2SCkEbuNMyNBjRmn7HWoewVRgMmcGaqypQdY",
  "key5": "3ME21itqrqjjawBEnZepkS1npLsW4rCKhypUiSGdU9amB88CDsE31rSKLBxdb9gzfMYaJuFE7v5NQL3VCTaFhDPa",
  "key6": "5hb9QrmmYAMv9egcQg2s58NEUg3e1rUgVqDsSkgRVnSdMxo63B1ntCFzbuTBhN5jFswhHaZaT18GiJB7Jm85o6sc",
  "key7": "5A45BddVPXKDkWyoEqxduNYsbtu34kjnEAVwT9AzB6bN7Dn5pPnh6ytt3oDGfbVZP9VkQqdw8sMiRr5B5yDsR78v",
  "key8": "473HbDQ1322ApBu8qFK2RAmBLt2FedKrF5NmoXJeqCekMX17pyjKoDLmdru5SXthYAUQmmYwX7389KVVpueUSKSw",
  "key9": "4VoHQ12EEc9oKCKePK3XSzeC6f7VRCyNL4pRMxd9MGx7scTDoVY3nLyWwpjq2JkrL2jFHF1kJWfMa1VZafQLZhJD",
  "key10": "2J9wArys3YPk9x1G9JYdkhaqQZMu4oNjXQpyTy45BMpCjdu9ZwAgpMwCM2eLZbzkQFoZGCdqKphBJYurNxswbymU",
  "key11": "62yZ2ot7GoVusrJomckhWYUbkw4BDZ4n3YeehARbsmNjBjrg2vDm2sgh6N9oLw5tJxXggxUKMxdpxUd6N3SQM7zH",
  "key12": "4NboV9HLUHDmUVktqn7MHBZHSNB6iDrbEarJ6yzWrLYfdZFYSo8ySwoHFsh2CUfWTHZXfepJ8hmsS1rCuV4RfEx3",
  "key13": "5mcD6uG8utE128sY74hb4meAwLq8gAEG7VK8mTAYojZi17m8BpdtvC6CeejryhjuWH7b66Hf3GueTvPBy4nAF5ri",
  "key14": "5MWuWaxafRn96cw1BgLk8WBbgFMWjvPehs9XrnzX2DR1kUtQmzCRMzUTm7kto2k52darA4Hx4zeXruLQfpZWerrJ",
  "key15": "2tMqz6Ut2dabyZcS5Q6c1ymXoTeDDdodLpnvcCRrwq5GZBk5BTZYPPyKZeaMnJgQV4xkZPnYU1DQ3EhK75bnmNjr",
  "key16": "2Zxgmfze2d9ovgwdva7L3MXVqXvxd8CNN6tBy9PAJmHB1UK6za2X78QxpLoaFgqhiX2BsovjhdAKaH5Zht8YF8t6",
  "key17": "2XjASddfZ4m7fqdSwriqZNQo1htvftmkT4tJsq8L6xjqvtc2pr6QYGG62Xaoy3id9CC8wvKhQ19yxgCaMGfgQ5hZ",
  "key18": "3cKD8Fe5kRgax3ZJF88t9SVNrHuy1yZH6HHZnD4aqmMWDT8Zn9NQrDnhPEW5XzbYDWncefvMLqRNbMmsbiojFCrD",
  "key19": "3cQ1fzUaUWohqXgRPAQtePF89qcHm1Q2YQpiD2WtoSC27k5RUVoPyNKCg5cxnZo4Ya9SRh3emiiaX1VcS4XcW4fE",
  "key20": "3snkahwvn2WbuGAN4JQ1r8VwMRSt8wx5uvUgkdfGrLMHruE5GpEJ9cVCZF2RAJB8LXBB2gNXcW9LwwUQaKrcAV44",
  "key21": "2T49qGwmWtoVX3tSj2HAzmjcc3P4Lk8r7Un6uT3JqGjJbtds5TMqtdUnePkZBuPemi5RRoZPVDogSytfKxSBTaHW",
  "key22": "2UebYEsZEd3xsy4i7D3icDKRztqB7AH6HJQStjg6Jo9z2pVzJH2M523wxd8UuEKTe9ZPGSRgJWZADzMBxH33ytdk",
  "key23": "N2Hjjhp8A4H3nuw46ughDCLHVct9Bz6nnXCsx5AfhZyaaeqzyg2SvBoRswMDyNahUT1xkZMpVkyDYTnqaU7Wi3a",
  "key24": "2L9aDi15tc3WgrGpQn7ePJvay4KQkS5VPMrgNKosWQ3dbwDCPAyY6YSmKdAmpSiouBeEZEtdn6r62QLoDwu3ynf1",
  "key25": "3KqWPjwiQTdZyWGMSX7KE3SXba2zjVgkCmoq6c6gkmM6ySpzeLYVXfqhzcaHqKQfq8kUbHXKTK58x6ZKpRUGBqM2",
  "key26": "5GmWj1KnGmsJyhs7zyLRKDnyFuojvfT7XMzdGbjaR1R4C77oftMXJtx9F8x9Eh9aHzZKZSPZyyEpgs9iNUkaYrGk",
  "key27": "41MBumzQ87A32Sj3SA3H7kuzG2NWZ5XKp3FH3ewfiJBaSGdbx8aixe2cSNyByUvJ3Md9nxPjPNG8Ky2bowNBwHWq",
  "key28": "5btxdX8uD7zmrHKbUmCqmNb2JJ3ZJQMSXBFtzqpvxcx3i6ff3QdHFiSeVua5NgS5gDrQZZF69A2toFt9wZq8FbKz",
  "key29": "33XmSHZNLDdfhgsEKJmP2R62q3vdoPfkW5TDd9cHiaFqMCtjkrBMej3jTeaUABZTNkmU7VkyCRPUHJaG4DVRLLAB",
  "key30": "3Lpys2u4dzMJEX284AjveNF3QXvB7VGs4jWHTsQLqQDkpJv1Jjv4GRjvYeN131iBUKH9LoKfZUiqvWDqibhGHmxn",
  "key31": "3M6L2kTTcCFp8TK4sq7hBNurr7M3PugsfD9hoHauhBqzTZ4XDm87iDRX1vrs98J7vqmQjgg3Ar4KNodqLNj5CSfb",
  "key32": "8K3HrmestVhgTyUHYo6D2qhARUQvyNo18UBX1pEwzQsu4X8i6fp2g6pCCq2qUuMqW5gT5riXa2DZvTXD7Mg8dxC",
  "key33": "8V8jLkn6n6jBYBjzSVMwDwWEGEz6C7jzdeKB3yURbktP4eupgSaFfdhK2Ryhoa4phTx4GWGMiE5UNcmYRvo3121",
  "key34": "5sQhyij6uuT7dZuPSnJjV7VsLVWKhLnpaiRBYVjdafbRM3ni6xgS9e566FPRYFqTcjWNhdYJ6WbSZiRDFqJnZ5LH",
  "key35": "39rtcf3Zmm5psKAuZ7sG524HgapDw8WkLrGqRv6w7y53ewGt76ueTXRMhryRNftJY2tc494yCpny75WFJxS2Qpbz",
  "key36": "23HsxFYRf6FzSXEK4Ep1HTCVzhGiFyy6LJ8HSQ4qEiLpoBHfwbMrCmLxQDy6qPEQWNbYXPqLmbhcxDMeKVZgvLrn",
  "key37": "mApYWJqzWQTucQW4aaHhebV7r2Gp4QiiH4bEUgxKyitWDu4KeDLjswGacn5yEVsPu1js8HrAAbymFVB6b2zxP7M",
  "key38": "2WTNznioErRpsMm3Tha9k1u2TNaQC6P1T92aGpyuQva3nZE9BcmknPDZwrpHZB7AnxfrhynMLCxhx3dA6VwcSsnS",
  "key39": "Xr1CtREpTRxS5Jsh517jC3V18smdV8ntCwvKzJXGG1qGn957pjCgwE2Q3UMQiKjMBPvq3JgCvD67VfExo9qzo1Y",
  "key40": "4GwTER7LcsB6ybx1WoFaTs8m9gHqQD5pHG6VdYEyQ78YESb4sgpcdqLzvW88yBzKzFVomLrhdhJmpgWzhMAvTvM8",
  "key41": "5KEPJgkjm7agCeHWREhMfNxThpGp5nzsGzyhqYy22RcyGBbx4BVvHCQUqoAJSEHuEkJpDKGiRY12ZSFrGeBxZagS",
  "key42": "2w4neZ42Ly49yYweenanXwXCc65Ttxg8P53o2FtgEqcBLLHxDdESxb4HJK4pVUVL4qNR3fdLBgH7LFgaiT2CMaHt",
  "key43": "2GWenCKtTwSFpcekx5MMAD8XnSx7vB4VtSWnbb6oVHUiGxc3TYKdVvd4oK45iYvPiH2q739mLsdihnPy8QdaAaJH",
  "key44": "CHLDmcvRXQxxR8BNhSzBu3J5t7ZW7zEnyNr1Gr33s9Jdh8ybHb2XMASx7aVuu1z29tsua7mXhBEsUc4Zx8Mxohn"
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
