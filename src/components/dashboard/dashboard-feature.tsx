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
    "2MhKeLHJ9wYytQCpnZpYHs7Nuow6XMrFdNkReAJ1c6BCXeBEQrLMmj1VGYeNiBC8KmsW2VGEu9oZF5SnhxvvxH9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xxp5kRFs1PkYBvRiLgpX62qRKtgw9mhoLF7EigFujJD7xAAVxVR9urpHnbyGp35h9y4En8j9WzsmeaYm2dnexTg",
  "key1": "41GHURMv8JsCJMXaxwN1FmScwABr8zJriVEFYyP5oxsPWrURfo81qcupKcmEp9Fd8eTPSkMCCtFXQvu5mTHntTkj",
  "key2": "2wxHYjEWRqYGmP3en7MEEiLyfZ36fy6pLDoHNMiCzU6JZi3eWaUEiGxajFJNVv2vaYL7H6o44TLuzjNUvqj8ti3X",
  "key3": "3J3R4rDAcTDnFKACXnDm15UzQyZtE3EoHgeYqDDh5BM7s5kU9SXpVAijDkaBUQoupYmRuyMqDZonqkiDuPQCzKCk",
  "key4": "4AWL2APbHHFbNpfdL9C5M17mrR7Bp18fxd7bgYemmKVLutr58ZQHMdw8epM5jNZGaFkiLSHDYwqSvsvEMwL48aFh",
  "key5": "43vsrBPsRYySZ9kQF8C7YLTkUcnKA6bptrbmR8rSNy3pHfqShdT2kADr6ijoGudEBcXA6dr4YiBP8kmy8oBqswvc",
  "key6": "2qjJSVabDo6UvMZoYbrSqoFBsmqX4hCezPqhF16yiVhPSiD9tdTw5xcpCciBn5RFiXjCGPbVAgGxSzqWGvVX6kjy",
  "key7": "KhTHQqAT2p65vtrfKpT9tkZWVCqYPtWm5mN5Rmyh44L8Fp8bCZ5bXs3c4UAz4LpbiUA5tWPBEEjiasEMCbWzpVw",
  "key8": "5zhHdgruf26Gg9aFqSZK3ahjLjnX6EtJBmyajd2VAwYHuxESWgWmkWyVQS55zw8PV1UYmwmtxsBW8EHSAPTy2Gw4",
  "key9": "3DNAhFHjoekiYoiAsuq9LsX85mWewhA6H7ZQboecp5Y1twTcFNrh282bU9itdeoxvQf8aEFA685wuVGaayDmSRqf",
  "key10": "4M1CGBuvan2RpNQrGSoSazKPnwE71KbfG8obxufpzYUyjkVWrJ9FFq1UoMuKWbQapQHzvUkPMEpDAWfK2iTZVhYE",
  "key11": "2QcKfVpzzeUsdJ6EX7n4Xqj1NkZgq1sqmvuxVJ2tFpqPpcozGTK2e1fPAjuZH8TUhKuxgib3fpLKy1eW3izS1uTT",
  "key12": "39Ymf4ZUQbmf6RaZBSKqqF7NQQg42cKCUPZqxyPPTexXn7VfmpsqKuzWPmxBpP1o7gL3tz9CJL7ojLG6KBdSJSn3",
  "key13": "4pqqyfxH41zsXo9wjECe9eAEF5oe6GfRTj3ZbMc8jze4fXaqX5QxEt3zgeJCB7Ag4nXKdKi7pxYWedp92coLGhiR",
  "key14": "4wxuEUipGrh1Usn7mv1cLvZ6cJ8Mr3uc8ZQGhY4jm9p5UzHeSm3mvBucVqqGAWtMxdERKt1KC6QyXxP5C3K9jzbM",
  "key15": "5oPr3o9BKGia8A8BghmXyunq6dLQF9SQac5nuYQtnspi5wP1eqeZ1QysTTut4hukwzzXnUmF7pbqjkhbwXLjkoNY",
  "key16": "2psVWYyzQJJaAwPwZ7Pzbz6g5YTSfTdmcS4nbUB7TGX3emRAtYg1mUKPDTt8q7QYDhYjx8ia3ZKcNi8EntrMBkhA",
  "key17": "3NtxLCMvWRkMa15vGstGywaV9WLu3iCrByJu4cbbD76g97osDhTD3bqdQC8MDHP53bcZX3j3mi3EV8E3a76kbavA",
  "key18": "32GZM2TdwbjkeBHhEU6okTHJNpmiXF5dJ4ksN6Th8zfngF5gW66AwzoQNZjUCPFirpiEHr4mGAQDmyqL5NofZbTW",
  "key19": "2NCRnJFZGDs6PSzSBWoB2QemunkKEpEUeQEECupWB4uTkw67D7E19dzfc5tEk5GDbE8EW1RqEs7Wm6wYi7MJqF1h",
  "key20": "4A3VUQUE3EwVtqBHbxf2oWS6wdNjUBNX1rLpaFRAfy8J6ZDR8DbnxE6sBgxEM4wixg23YYj2izhtTcgiyY2gQxUG",
  "key21": "MgKpmjTL7W1tNknwB3AKauxpfvfoyNnTPRhYm4oTiQg7PTjGNHeoE84t3dt1CxFQtvF2px8eRNhcpc6NXRBkwuK",
  "key22": "Va2VsfXJ17fZLh8pZQtbTGsgMdMJB7zq9fssbfR5ms7qzvRUJ7Grw3Bw4xQrz4jX7XnJdBMvBkbpdaKBrSTVdP3",
  "key23": "242DVYZUqKWm1caGyJqa3SWHCbeWKu1pMDGdwSEiakuVY9zv5aWD4RYpX77eSRt8U3HkJAFwV7JTnTdgXuTCGgnP",
  "key24": "4AoNVHwyQguiqQyWroK2LfHc2LeDiXmPQdcmoxMC9f8pHLKggaSZJD8cVaXAirJQF8A2Y4m3qNXGRAVueC3UZbHX",
  "key25": "27MC711zVzqupuq8uNnrN8p1z862XF75EUZ1x2qMevyFP2EWTx1M96MyicbxFirUyw7efQc8XmSPNUUMThVDZziF",
  "key26": "4hL8FEZUVo8rygWxjDzqAJZLGJhj1xWAGhNudCHRrtFfE3LsRJ4jKPnuKvKAxZW1DrRXZJKQmaH3yLkNi2zQFoCn",
  "key27": "2Q1urwajyZ7BfoiSSuBqTUb1x6xdgW83XtcRYTfMwhrEgeGsDPr5ADCfSdxXYbojcHNjkVgnniFcaMSEHD7K9j1K",
  "key28": "e3vB9D27UTzv14wtnFwKP7FCPCJohbCWe4Q8FZSCpuk6XLZNDfncejairpMB4TXJbk3ibwob4med9AJLYDHF4bs",
  "key29": "27vnu5PygcABS21bytyMX98vwNMXuB3mWTnFcSvmRvmCbdJ2XcJMxkykHi9dTkzWiV6AYCgc6VmKhsteje9caG7y",
  "key30": "59aCwqyj43mTzfC4fvrc951GWks1aiDr931QB2iN33JBekq3ePQsifkzF4nbMmQzhiEcvLXd1FUwNSRzyPGCGDff",
  "key31": "3cxVLdALxzEBejNSuEdfoCxS1ySLHdu7pBxkGFJt8UuTjGVAJyYLnPqjotdMWC4thEmHjcii9iazw74wW5JjoRb5",
  "key32": "44hTvPWbVc6Y69ZaBbURo7BM7q9HjxnMxXr6W2QbnUf4PcNt2WBCzhYniTdUgcETnYmewPnbd7dqadiSTVnetvWV",
  "key33": "MShrD6iniji5VrJiicqXEwAhsZQpZTP6oXzhMG1Vuria3sZhwUWU7QFmsgDQEi2oy9br1XsoWj3kjhGj8EPCuVx",
  "key34": "zC3y2Vz5qeKng2Xcn4LHvbYHJjYqX4TUPPyarVSdMY6Am9B4GBykUfdr45itsY2p9hUqQ386ApHqLgyXbZSwBUo",
  "key35": "2V6NfTjSR8MewB7CJutkMwp8LrX3VGUXrpbCjSn4gQA9jXnGcuGShGGnHit5us3mVmBjCZky35wbqNbL4re2k55Q",
  "key36": "4nfvh3rbwvqfMQgCyBHdFqVMjZH6wR4Gj45J3AJ98hK4ZVGx6yn8yoyi9eGQ4NL1j3h5kp2128Qr32LWd2XZF5A9",
  "key37": "5Hfm8MXZGxRX7eUR4oMRBokBwKFYxXD8TmXorNP4CPwsQ1SmceQQAYyrMJE53nN4aX35UMMXiXDDFusZc5cgN2yj",
  "key38": "5JD2v1DbaHFmMHBR6JwBY9fUGYfLTJuUdxpoVAJLoMZJC9GRcPiYbzZ3xbKtuYbGvELqVuCCPi1v3DtWYzcxxCUP",
  "key39": "5XN2To9NRu424BRuWzAG7UUfNyssDczSjefE5SaEySz5QKtRCtZu8HxVNdrF3mfvn6anFrFmRvmyhowMsGYxMBGT",
  "key40": "MwZV5c6KqAsgQquRGNy6Yfvq6Q5EjzhujzdFm11HrBEUGkGpdhW9oc8JJjH5kjTmwzmQJKzBJqSQcbaP11UQ6pg",
  "key41": "3a1BQ2zQHxMCvL9K1VG66dG7YdLuHuguJrok467oXJfaDUxa6ZFjuZEzaQcfJdUtoyWWHSZ6ZMdGBTvY6vLRi7qg",
  "key42": "T7rNtU9cy8K5BCX8GDYtLUPTjNCri13pQb6APwREy2dbUGjkTd1MvPkUjfGU6JUAMcrerGozhhFum7GBKM9cVta",
  "key43": "2CA2qBGNxST8FpDVPVSdqx7pgUCdoSEi1D7bvYCZTYnusrw2bPdCTBsqa199C9eJ8Zbwvi8ig3NHVjJoDS66PTGv",
  "key44": "5Per7oqbeFmYpvbenAQPbQ3WsvcgVY5TakV5wXvDcN46GpUS6gBWMo9f1NW2BYQM7HUyCaPL3kPtRayMdeZAtDbF",
  "key45": "53Kz1uM2XUHsPYiZbrdJ174uFaJwoGHgLLn4cMtN6kxH1RqLqCALjX1LaBRVErM6RT6rrUPYu5FLNDSNsCbLSZXC",
  "key46": "3MmkE1exmW1wTJvcRFwwq3W853beVpFDgGooZDkU9GYDmyKX9R8hy528uvzGMB6FdumK1bVou3JH4yD4qVzfe8YZ"
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
