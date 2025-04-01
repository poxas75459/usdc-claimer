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
    "5nsVqPuHoEfzQNUaUU87TyHC3Nah3RJa6Fgn98jQNKa1D8591iKtSgk8rNo6uZDaPSKMfxZmCVsjbS4bummvsEoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pnvKMhYxXfo5EX848SvsLBmXCxxEcVfrZLinh66e6iAYZoA2iSYik9DP7bWMXsme2T477RG7ZePjJo43vMAoEcn",
  "key1": "3v5NtAdedZfH9YC4ASE5XXGGr8wHn3MzZvjPmkWtAbFVQbGnGryiqwcCUsmxgf38tNNzgA94odKWQJJcExW76i57",
  "key2": "2JcL4Z4aVT1Wwqp5AtQ7txZi9rhqrHGVDXtaUkpqT1D6giHLMEPjzrALmGVaz8b8Nxiba6WV3gS79XnpsyAi6hjT",
  "key3": "3GhR3HTqY6zHuFeBNVoiBCRLxfi2i7G1f6yMxVY3yVhhVKkGbLW7XFgVo2GSRs3bKjQ6DyH9JFLzN9XHNKQvuh19",
  "key4": "5diFpQjh7mBmWiBrCkPM61gvvxEoWFqVw9upDfT417g95Zo9dBU9r6hBYqUPkEY7pPbxSGoVacD2eP3ZNeZfTN7R",
  "key5": "3Fp5kH5gkUC3zJxFG7s8wjEBg8ZPQmg7VSoeVmxMnjoeWd85wYiQsiTK2njP3R4rNeELu6f6tsbY3fubz8oug9cL",
  "key6": "5261vJfUL5Eme4PSeeqVTMbJJWcSp3e4eTqj2cSgqBfkdqFo7ePAsJCRtdoYEEvjNHyCRy8pMY4sF8MtdqnCQ1Ye",
  "key7": "KQ3PfgRikmK1rBdAAZJMRcRZq4Y3GvQ5hqVsMvk2eUqsXMcfHmxnTkejFTzKbHhLqy6a3nBKUVtavJ6Z6jx3U3A",
  "key8": "4MGeURVmgNRFcodVN5Bkm33zrcJeaKHtztv9NRenryUAS6vTf3WLhgRRJBBgevgps26RdxQfkwEPV7k89aScjkFc",
  "key9": "4iHthDPMXAXm95Dy4RqLbno5dDvVwjPZnrz8cj1zApS8jzYGbqoyCJ1454HMA6byeq88swu4drGP6PRPXAGXrx3v",
  "key10": "NzPaK94J7ARGRi5smbHPixbq7ATPQ7Q1AYuQ6BEV5Z9Jg7FtrunTEskGei4VG4HkTzfC4TrMpCuWUXhS6yT26yE",
  "key11": "2pEsGuqnp3aWSW4VGSReUMyFAvJ9PXqKK1RTD839rxNcUXeDh7UiGT6JtTFRYWLwqhUvgoXEuk84MbQ4n2YVKbcc",
  "key12": "qS3pzLvnpK9DULihXYM8bomyjtahJdPdP9MoanjHYjH6FP1Ki8spWwtWvFgEozcvwGbiBiD3ac3LQ4ZRwpCTnfW",
  "key13": "2bKoHQPf2nCVbTpuAH4KkVQwSQsCTUCAz3Pz3YdxAyxLy6JKNFzpc8ptz22XLfNyBTHFv6Yd345GQeLYNQNTiKy1",
  "key14": "2agjoRX4RkH2DaGq2qyuysYANeo1k2d2tvusGsEMKDDVno6LdZgsKxSso2Eyt7BjinMn28hpBcDoj9TPD3pnz7Md",
  "key15": "26DbXTWawrvY1jZZtyCJzM9qtYSdZgp5GY4jDCvAutVetR8fZSkjEdjKAGVGJsuauyrvFCnVHGFWrqxmj8SPshsT",
  "key16": "31xWww7APfjAvEXwKjDkiiXaaPBMeZKaCE1vh5VhF1JzXD35eSdajiFXM2n2tf6UqVBfvCMNF9spMu9KjDvvXJUc",
  "key17": "oZt4D2mZQfYboGZZ3T4B2DFrESLsW5VpqwpWLnvoNrjt2zafzenPzJ8insfizLqFNhRyWKd2Eabymes7hdH2Jne",
  "key18": "3cek7b6sz82HxZgSQdvrZ2PC7qMtve8qYvdzocesgG1KKPG5ibXCLHQNdqeccL5vVBsrs7AzE7Syt8xtfX5i9ZjA",
  "key19": "3CT1etT8KEjKtXaD3AkSpU6LCozaqZf6aQ3mafm65EGSYtihDpSdt3WBME2XPUA2EXBSJehQUPFUPrDZWXXzns6S",
  "key20": "1x4LMicv5JwhPZKQh3eWgMZYdyECeFeXHNCwQ7KrAn9LMrenRCZDvnJcSa7zTuGY2Dazhxjzjyp1BePvY1SG56U",
  "key21": "4A73HxSH4P4PAtPrLFEBBsab1cyEyATkpxyiwvQJG4eQyfAkGkq3dgY7PZoL8WLEXFm71G5LMFhVgBE8Azim3JJL",
  "key22": "2UNH6tpcM4qXpCf2t6AW221SNwbCs7yqAiRXEE31EpMoh9DtUM5fir2gpkpLmaorWGveoNWxBi2JVguWdhfyk3kL",
  "key23": "4eopmvy6PrT9jxmhXZLrVgWjsmTXDRhtL7upZxSfUDNMdtvuEwQ1PttKaBRTPRekDDBVW4pXEt4PiV22U3Zc7WcY",
  "key24": "55GKgtYEroNkvfqRWsTAbxBKm9t8ohajPkdKU4ZZDpHyz3R2aR7EGAcazxabYyxDq4iC2zPwhsRRAEqNUoXXfEKC",
  "key25": "3XFBfNYPjCsatufB3J9mLj3qyC75jTxwx4CoJUU7afC5ajPDmNLXDH3tUomRYThThhUBkV3X3mo74xzrWJzMckPP",
  "key26": "493b1UEnxzjRcSy6wSW8D77KkHpmx4gNwE4EVm5fYDkf2HSuaMifkQtmwcEUHHj2hCKneAeCLrGS8gFJVyXD2sub",
  "key27": "29q8ccMT4LjWarvjp42vAX2p1Lw4TJDUt9onz9w4WTQ7ord8VPnpvGgydmU4ukGJiU3tFcs8EU24hsDeLXzSrtR7",
  "key28": "5jXUieXXf1AaG3uAeoP4iAzotDviDMCLk1K1BycquSzqVCyRZtzt4X1SYJxNQV6GWu7i5Kjpv59YsNikCKXHRX7Q",
  "key29": "5685JZDzfWGZtjr5nXejLrT1YGa49MgmjNSgME7z6468z8WiSMApqq2RJHzSYZWkssbZ7boND2wDmyzwNci5TQVc",
  "key30": "2bFc7GaduhUATjLX6g3rkEk4YkBkk1zq5jqKRnXiK8E5iGcxbuKb5XNhNKdChAxtHLAhtucPVTZEeRsXENMtJc6k",
  "key31": "5KcZqsksrgwUuV73SkNEWVBqXvyqmBbhws9HnWnV7fGjTvYonkbUMWevSb2QoZzf3ES5dXvpHyRLfUUts4CvHW5L",
  "key32": "3E9FYw7PE62bsvjFZZVVCTrU5Vx91f5pC4MtgE644drCLjrduhFc5ZmUNYdEDCADygWXAgy7oyoo2BLbbGdUBKLF",
  "key33": "5JuushNU5gim5zta4StwTkrCZwtDypABMxnNs89GMyoXRF4MgWXcWvw8aiDYxubrigatS5fEFYHvZkAWjXRJJ7hE",
  "key34": "3WrwG4rxkUVX7X3YB88M8UwpXQmUdmKzKByCe4PLQVHFg4ZHPMc8vHm2KHAhPrMNSU7AsU1J96M39xQJFL6cSrBS",
  "key35": "WWaWWxHxHHkKTgCBBLRFLX79NqFYAyHQ9Qwg6xwPhFZ2Rbf57NQsYEvoKy8MZwpYWeSxPbmT8PGwyVa75AyH2Gj",
  "key36": "yGVpCtUVVbNSTrKMCXZpHBfexqvfJinV13jdHtnYND4q8vAn79U8stjdJwAdsfFXjQduNRk4LD3Tms5GbeSB55c",
  "key37": "4a6BgsdRg4A4dKEgNe2fUdApXJqfPAEHYgT1qFC4y22rryPcN5fZKUyt62JqgUcPfwW4gsNg9L4qexFHhP69k9zt"
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
