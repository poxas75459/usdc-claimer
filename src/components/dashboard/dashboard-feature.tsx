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
    "3gPgr4HX28iVLTTp3ApauX19j1eQsgv1FVSA1kZAyVLjfy695g6FiNk3py3WMhj4FQsX1qr3LTShUQkqpD38VbL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TAj52jS4J1VF49UvQdVKCwaFsLcx4CKM2SqepSk2o13fFF2Wabe6QZ7MrSg3BVEVCQF9pc37ZmaMKhPejAmTScA",
  "key1": "2Tt7s25cKBjc6m2nqZTbfvUKkzeGdgWY24zT8ZFQAkdG7JNHL6NoK3KCM3EMBXSfJGJsZa3VDxsm1gJRB4VstZCm",
  "key2": "4iLxJJKFc4QpHoFE8LfW3u7sAGvthhqmEhHcxTbDFf39eD9rwVuJKYQcT9BopzQsXqKnfDx3aGuWF5B5vHghE75e",
  "key3": "3b7b2BnJAyubNQAHKW8gL927y47wwfxEXN3zpyoSaiNpGru4vLDjbGouj6cRz1RcwzaxyKdkzTgHQmGQuv2ejKtK",
  "key4": "3jQEvNpuk4yVqfmo7T1L3GkBXfTBhZnijM58LcH34GjhudjNTa9kJUT41ojEj51D7cgAocHXKrBx7MyvaMqgPUWu",
  "key5": "u51TVyknF4Ehe3vDyU7EiQyJSfMj5wsuBS5E4FLuWZ2DTUzT9dSMz9NSkKABUouhhfzgpnZirSXEpRwtL2xiYb5",
  "key6": "4P15BuaoiTSv6j24r1mUJRaW39dXAGwtej9kiaCqfHoGHaZZ58KaduZ1W9z1kqYXiAVRU8mUTRf5jv4LafR4tShQ",
  "key7": "4VXcR9vBLCU7235inpMdnDoYPF1AR7YnGsmkbJT2PcJ2yceq5rLFCN2Mb4nyCUzU61oqRtaUnMPkRuJqWXrTrt9v",
  "key8": "54ayNkewArNKY4TNXsKekNvU2RrUfSJitrixXZ6Jd3wqRvkDij2zACZRmqd4xEKQBXLsguuC446dNPpDmbBjaTeF",
  "key9": "4qHCWtg6WvE7HosZBUG8VYRUxELqMW7uW8C7yGNAGXtUpaKHukCYVh8gyA4jGohHsLD7GEGZuCw8UEWdoF7tTQvK",
  "key10": "jwCjspcQZMip4yn7VGVLZCzKAv7HVt9gEvQdE1UnJ5tqwaQZF3g8KHpYd4SQgMx7SXLV7PAEgCdVJRMLNmPw1u9",
  "key11": "gJvXZVsQZNC2CaduWLxLsw3336sFXTWR3TugphUW7GaZgRFuRWWjrQRrtGAAxUzGrTmwHWPbrB5w4TPWgWFHi3Y",
  "key12": "5Aa3ycYFeZJvKRvbCfvGsZQmXeis9vScuD15Ah6qqswADyf3Ygfu1EgEjTMsrqzGd4hYqyr7vhHnLYJet71AnXop",
  "key13": "3BbShP1Cx2JUigd2YYHo7R82FoRLxze4LbTbjXpaUEXsxifGShtoVm5xZJMz9x8Xf9ArEL8sRWu76B7SEGgNGGxW",
  "key14": "555RxYmWT8NanhL4Dx6UDaqky8WH8n8jEcMx2sT2Z6Hg8Qa7UQGZKcE3KwWRLXG9hFkkoRHXwxojhqvgapsPqA2F",
  "key15": "3BfjQLBWGFmGVjZxwqKxSNCy32fEqnS2LaQiMVeS3SzUFrM3NzgYUdKFXDw7cKWL2x5rWgtwuTmr7XQsRC6SnYB9",
  "key16": "62dQbCnhV4fPRifB3x4Ej6J4KX5KsHBH6A1tFVVsJUHvCBFvW8juBRCLFcjeBnWQxMjG4Vd2b4YAv82CurPd3q4W",
  "key17": "54VSun2bvZfHaCKBdhC1skqzKsUWtoxNA9uRvW65cq47HeLvixokdF2AGySa8Yf1VbQK1C4wiRgUq3FCmNVAr6aj",
  "key18": "4FtGdEEbk18Pas6ndGTyc8udw8GQL8UZPAdr6qtYwW12vWkJKneKeXMPLMrCBsRU8q6mf7sHgJ9bCG9tyq7pdrY9",
  "key19": "2E1j3Etwic8wEizfGeqtLnSG26ZTYGETvtGHBUaRdjz8PbawwicqTzPEpZYe9NnrD3SAsERZNwm9seW5qoFa6Bs9",
  "key20": "56CddGcRBjP9gZVDVgrGcBo1RTSexR3xeAwtgbHX2tYVPSybMZv19yXdDayXzDW7gGYQH4xJRfQxkkwtkRtzeSng",
  "key21": "2yLsWR1qDaFnSV8GTRdWgWNkyrk785Sf3PzQroHLkx9QzntgKuSEz8pBw66bx7QdMk3exBatj7xzaY6w9yA9ELQB",
  "key22": "BHLEr7iEAHiwfgT1NmKhGYLcnZEYdoiMvkDxc8rcPhZn2EYe5i4meEZmq78jU5CwMaK5YiXGkPgeg16e3APj2yD",
  "key23": "3J2v7QchAH1bdC5BcaEz6GjJFHjkhrTwK8ZyTC5xn93Nx2FiaHQaVYnkfyXJY1U5yMg9bPQPo21XnFQkSasp4QnM",
  "key24": "2eAGub1Su488qBPiinAqH9ZiKr9JAjPaE1Wxc3tB5Uorz7oWPwGwF6jsGjoStp5HebdZssG39UMQx5wVVCrk1fCX",
  "key25": "57hZiKzkArYu6yyXEHBCFgeTEwcqPXzATUqnChD9VskQGe4r6BaW28EM6eqgUVRTQ2cbcEEyGZr5WL1ydy3bHsqx",
  "key26": "eSMmwVwLofh7uSUFb1QdGhceKmb4BsTevyrUrRhgkwVZdRKxiUQ5m53QkxSaCQXQsQCy1apabhY3dN1bj8XwvFA"
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
