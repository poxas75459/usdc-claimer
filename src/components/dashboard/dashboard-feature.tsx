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
    "T7cyL8jtn2PHv8yR7ivtaYCUdMYaibsb4a8XNrERQb68rhRKzPdduFv6UEgrJTMzx5JtY34ukZJXh8sHKtnurV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sf9CsFhzgAa9MCjY5wUPZPLLp4xpmTb1Nn4vzjkmUvmGv6jJmoTWvYHRTRGdbrccKFTXx3pfuUqBYGqVu6VLKx1",
  "key1": "2GiytSKiksb1paW9EE1T1Yf6am27RrgKEeu82GLbF4xzAYpWnT2pKTN4a34h66NKf1egstwm28HAeZPCttiwefiB",
  "key2": "4qmcwyEenKFrEryZ9hpGM2pQ9NGP9XBpqZqoea6xpSQaVurSwGYnU5NirdV8vY3nzMbjsYhm8GbVbMNapWMVD7SY",
  "key3": "3Ubwm6xrYHws14QPmYZTUgFTvpEtdULdtUU9gYnhSZow2NVecWaEGacgur8RxBxPAqEG6hsRirCmwinL4qE4FJok",
  "key4": "VUM9XsWf7PrjgmhgdCHut2RkiUvZcgBEyWhsR34ENp6Pzp9qr8T5aFmwYt1T5GhHnxtNStUgVeJfMWtZGiKY1nk",
  "key5": "3sX5FXxfpctZmLCm8a7yrZZDaB7ecyU1oEiazif8jSsCR6W5pTP4fKB2XtYngy15fgFAGijE3kXRfaxJzBzyRsXh",
  "key6": "2NVMxTHV8CYLRKpjLkivLwyjzbTnnzVTm5XLd3JHswKhb8on2TCCb6J3aapnXVN2urjKfAR9j8oXzV9b79A4jMVX",
  "key7": "5JfqZsDex3G6sNCCdanPme42dwC3nSjQF9Uzoz8FhTwUw5szRvxvFwuXSDty8b5BZv9fEiqmkknsqT8HVXgz5PHi",
  "key8": "4i6tm2qkviiX9tGsURAhZa4RJwaqi73fGvsBJ1yWdJNUUuwyyBrQYea4Hk5BcjJZiFAR2qeqTww9j6sTDnfq3iq7",
  "key9": "2N68RD9HsbeMVUX39fNZrgVXkvfdVs8m5V4emLkiEsxfpgAXsXuNRhd1Rad9rT64WYxaWuLrgtvhst5159eq6oy2",
  "key10": "5c2QYR7Kw4LvYaG8Y3p1tsTNQKtxjNqnnDzgjDFQ31iLmVibtRnuUtknQNzr5qMzmxSxeA28DpdLoMWZ1F5iJbpJ",
  "key11": "2qkLiKLsk1GqHe2HsrzVkNdXZ2rRBUsfCCRd4caMsjUUFddsRBezjpBhbzfrfzKTf4gYVHFkrUgrdiTv7xbKVKEa",
  "key12": "2LVh8hPwE178eCsG2SwJKw78gcbp4DyNDdDtcL96mDLmkNQnKkdvQc74f33yJwWMwgThdFLHNCVKGGwsa5PvePyY",
  "key13": "4nA15QYCUcCf1dzNc2NYDEehdmbMFBBqjYttN35quWHMScy8t3LhMS66LLcumzybFeaN1hcS9GTsEqHtNCKR1sBn",
  "key14": "2hBSqeDHADqMyEo2v8y6Z71WAfBzpPb8NdJUTBdxHvzDZ6kMyaLxhhUGphgV1ZFWUbFYLefaN2B5V9c9fv2FWbsA",
  "key15": "2FmJkfYeYpxECK8SFuAgsbTDXctQTryZ8vPnv7YPJfg55zJAbsAoNTJ3Vm2mtBKhdFT5rN5zZPcYWvjSZ5gHcoDG",
  "key16": "3uXRVMtxUhgotZVDWgW2XT77oNgTC5eA3mBsXcG1fiEXM69G7z69aKcGA91ZYKMbSLxwwf8k2ftyymVghrJwivDb",
  "key17": "2k43bEP4iezBx6B2Fuv9RtWkFuQX4nLDtqszHktFfYB6oXhjnaFTuG9i5Mh63bxsscxfxaMXKMaEb6H42LTg6E77",
  "key18": "5gnbaa4RuHU116bTRNMPxZ87gCjDwULfm5gvHF5xwX4ArK7Dma7yKF1jCDH7ffYgDG26b14Q72nPSZgm918g2tPZ",
  "key19": "3Bataku6gnvgDNgcEYteQkViSVi3MCzBao8Pvw85waexhLXCrz7NX5UEG6KKpttnfdpfVCBDxSy4NnEPLWYjYzYH",
  "key20": "2GQqqeg7FX5aVWVcnD2ajqdn9xSwB2zcbgD6Nb4XHEJneL9QsDGb44zf61Sw9mbNHxFv19r4G7DEWoFE3SNvozc3",
  "key21": "2Rgo3c6bSKNyCCwHikghkBiKxFDyMHFWw4xbtQxTUmBUPs1mbVCk1i1RXhhBJbzt6wPnDVRmpcHYjnmnMJR1DrA2",
  "key22": "PX6rnWiyQ36No1jaqN3fWmEBFRCoPf88kB1u1wzWCeYPjUv4i6LND3jRVyTySUjfjjFrXFRRmoijAzVYdEE3e8z",
  "key23": "5N3uzoLWiDrRU41fazmDfkMNNWtLzAtfGx3HHSvPfSDbGCrnaU243UHMxCY5WXYEMPd4CYVc26FNz9DMeV9iC2bc",
  "key24": "3gyrJM4BTRo1TL8g6rc5br9j5ynnYbAKikyEnzwGHy34cxj46BxQQF9exVYNa9PNAcNdB3rWb3XQWE55n3t8ZXBz",
  "key25": "642BZ1sKyvxXSWFNz8XrLRYX2RHSWv2QBsFfbkQ7fUAZREt7c8otAtSD1DHBGtaRf6GAMm4rjfbegYPZSMW9yRSy",
  "key26": "y1mVUhjZ6vAo56eFrJExNiPCS7GNNgikaYYBGYJVGkwLsKhYNGxFEt7KQx5a5adoKoJdSHMTwRTmSfM1DKaypvv",
  "key27": "4TywwMBXfRAB8PnubLteCxeMLgjh78ppw4y1eE61NMPFg5YJuWSfcq1X1wfmdAsWzG4amnvCN9Dwrvr4W9r8kmup",
  "key28": "4iDBt4D1HAK26H8kgKG7asFTS4CtovjjLNgMKfqo95ja9noeBEDKiGbhQ493xgUjRHZqiw8j1t7T3gY2CchzD7Y1",
  "key29": "4Fu6vDFmHeuxwjg42nF4t6AkrEdHL9UNgoTi6THBzTgJL3zEmCELv9vA3YdPnomd67Zs1ghB6HV3xxJShppgCy1p",
  "key30": "3J2GdJ3jGKubdyYQUcBWJe29D9FUSEHHTK7wbJkZQejXdAWj5FTgw4ijggJZARY9QF42CYvsEYfPTdfFDXKUgAR8",
  "key31": "5ydME4JY6wv24CYzbL7P6xfNh8Y8vYUXPRanYZQmieRN7Wxgzfzqt6RVDXYyAaqPqxK2wsW1w2ruVKMg4DxNjbcm"
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
