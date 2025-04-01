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
    "4x6KLgFcS3YMuebKmZxssgPWr8gYVwhpk4LQFuajZsEa76ZnHSToybPda3xrLHMYK1c2TG6ykQLgRa1x7rA3Ud7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V8bRyrejp5B7SDaUtzCfeWrc4LEumCDKRgh7NykCcQLcAwdbUBhBJXVTitXFBz4f8ACJTTevBuFDGnQKTt6vLAF",
  "key1": "54USkNwTdLtSfhrysezuSPt1caFqnxZtJLaHhB2s2TSEMFwfkTaF4TsuBmXMFxVudy91h5ujx7f7JJ8ngKfQfXkb",
  "key2": "4JCTcczr2XivHgZMBqp1LJcG2Pg1MsFXnkLeN32b4e4ihXRSGqrt5X5CoiBB4yRTRfTJ12PbvU3by8xqRyoHrAtU",
  "key3": "5vcQ7YX9kfhJXY9DjN5v9ujtKbX3Hz6w2AQHdzf2EkogyZmGDKoKTGu163aY5DNKADk2kgSVEN2pbYavAHbSdcRF",
  "key4": "3eqxWfSadKCe2icQRyaDgXT75jJxYTFPjubKQQ1pD1psRyuuhVuC4RxZj2NUSnLVoc59wAGW8CYuUD3eNH1jRngd",
  "key5": "DfpPVHxnHATdmvvv8TMNY9JC3hx8EZfGtsnSJgkg3L8vf9AeQCGJuRfvvTXxcKi3CVg9XqvQCuvB1XibMdpp5eP",
  "key6": "2Xw3H8Hzsg9Hfy2vW8k6XsXiyvMLaSS9vQPqtz5Zv19bLfTD7hDDGYm1VDo8jRszXeXzrpW1TnvyePRnqvyEkzPQ",
  "key7": "3snHrseXvh5PPrWrtZz6L6HFq6sKW6XVEVa28vE77fhEKuGqcWhazxY3UgNDxL6uJifgKNYV86f1UZNdACTtCU3P",
  "key8": "5Rfb9itQGBX3tbmaHP7coFXGKY6ZPkP6F4vGWY64e8Dq4yXSZkruTVonmUUJGLfCKnEhuAGemCpQ72UuRzaNp6ye",
  "key9": "56ikiYB72wMHTo3BxnQ2Bs5bxinuCJmGnddCUT4DoE2Kjw5mPHNbeQA9sSXNJEWAQo2VJ3hthCdWJfnAqJbnExss",
  "key10": "3ThU7AFRwLeorDNM6ujBAmMmA1JH1rKKSHjE3oRyG8xfgQiZQiKiKWq4NN81TsqCnJwbK6E2TRxgeCVC7mozXqc8",
  "key11": "4iaWSjxWNRM4qkDaZXZCmHne2iYQMf3bpbyR1tXN2WbAQbdwz9SLsznRqDM4sG2Ta5RxVMk6Hjo1mMYPXqxuQLRi",
  "key12": "5ZXosKQeyHzFLbeYvgPQro6UdLgkiGps4wcP5fuZncqXhgrkBMbSsVrPvNXgEmN4xqvwANXNBsHvapFU4fW2Hf5Z",
  "key13": "39LgLs7mrnrUD7X2WhQsivHDuYjcx1uXRoS1gbDKyD8ST9qAvRyb9MxCeD93uCBLq5FJYDcQL14hyRkcfTanhcVc",
  "key14": "2FKLwHdkmQXaKvB1SvDWcdXpkDyBPeL1HsHKCC3g5w1c8cNGKWRF5iBZEXrJ5fFuctatrvH92n1WyCqehehj4BFV",
  "key15": "46XhM9YjNGKHHvtFwiCWdMvfPEwFDivCiesQzDg3bZkxY81c6DpqdSnK1dDyxBU6jJX2J1AqGnk7dVpoVwiKjxnY",
  "key16": "46zcx79Dz1nZwKNfHCPGn5RBdmhdrrhByDdZKnvATiKkvUabBfpqTXVBGoAJrq9ZXXHZjCFvDURfjf5wtthRwtzV",
  "key17": "3RDJY86o1rwNEKfNpFzWYaq957ER6Ug4Xx9sPnc7AVyriF52kWo7mZLVxNDa65wGXGRydSSRX2dc9tweKKYXo8dW",
  "key18": "7WdcfcZxYNr44zM9hCAHQY3JNEJ7DajQ5JQigcke4F5MJpyTmFhWQKTTH2EFvCC862ct35AUnyLQJeaLbKdagto",
  "key19": "4cJ6E7RehLyUoGfXBqNBAtkyphDsZXNWFrJtvkCcJkg8gmeSPYGSA3RhVSX1Fvc1pAHbxoDBbKSikusV4gxGGUNy",
  "key20": "ZiUMyhyVMTrcFNoT3qtp7vS9QakQVVsocor31ve1mTMwWpLbMiCVf1h4yNLd34fuiCjP2t7uu2MVtWcB5xbN5TX",
  "key21": "3jDdNAFemWMFC1aukHN5PwQWc3xMmsw2JzBE1cfRrKmnEp5FwUmA5zBhVkhcepity9DPz2ujjJ36cALad8b2U7HL",
  "key22": "2Whtvajj1AVFGJLUJuE4DQVrMhxEv1t388wwEvQb6zyHm6eAGRCtficbpZy7tLd5ivgeS4hYodMEU7Xr1QQo4TFR",
  "key23": "4tfGri8FAZuaSkRRyNXtrief5hUa7s6TaVvndWQLJVJfMJBthFNsB6BJhbhk5xQ3yWMQE2e15C56AgCWb9TwKS4r",
  "key24": "4TNxLCKyBueXFAL2Psr1PGrgqFeMdcMhjjPoGrDBmUD7jp2iHU4picNRNaTEocdriKbn3eLbt2DdLXHws1C2FiJb",
  "key25": "46pNzf3V1bQPNAzLNWxQcEF5TLJePuhbWiVVhSYf7RL1kt8m21RcDwHYRDn4c45EmrUZpEBffxS8FbcXCUhnjtJL",
  "key26": "5MZkeSUDpYg2nvAgdwvj16XMy4yX6HtxT52d3TRQ2BUx6fkSozVqymmixQG1x4rfdPvWCm8m3jgCT6GVH7B1qQvL",
  "key27": "hBZqxwYLTRz3okYUSYzhZc6nKQnGk2Tk9qZiN3Uf4Jw1mHj9hGwxmfjjVU75u7dPbA4dt1gu1PEgz42T2rAL8dH",
  "key28": "5se98TMd1L8THX23VwrjoVs6uxGEmgyXiKVpoXMdsgzRvdmJntiVD6r2fW7TX19RcJ55X1FDihApdguaz6WBdQDC",
  "key29": "2h5Xk7W3Mt6HCmtBKkpTg2HdPitQmBQKSewdYPTLYeTp2QyuPDifMeKYb2ccGMPzfgGY1z6uHEoTGs9a6ZmTNEWE",
  "key30": "Gao6pjHh79ooVHGfx1U4ZiRKgasH1QLSnWCAWNSkTVMNpvPi8xmjPWxnYSArrWjmMDBtx2d43QXB2XZMjT4sZYF",
  "key31": "5M3AtMDaH1o2asweDeY5qbBjZz9gqjQktV18VHKJcnUUSRqo8QUbK7XvbPxEtZh653Gu5z2crrMciMMFvVrKsSg6",
  "key32": "4bx9hEQLV3vajfyEatGxYx1sABSHEPdHBBaswgHmVZE4yALdxugdjfDVPpt1RmiVGQLUsfkN5V7qZ9ctHrGdUVCk",
  "key33": "2TT52SpzgLcZvQWXpgVSKwuFzn71HVfT12XhyTujnbh3zxARdaFgts4mVwe9U2v9CYibrZXvnNvQDNNt7wVjXZTQ",
  "key34": "2cucWpvAUHHDfmQ95FVHpWtJT3FkMMS5fAa3CUwRkGqngtxLGEzHhxEZPWRWfTFqeGScn1v33tDQ347PqDKgZfXS",
  "key35": "2ZPg4V8GFLzVdje6HVxZT7DkMskge57BYVdncL5YLYkeTqp9BYCPEgR9JAXujriQbCgogY3xvf2rErgD9t9nFbbR"
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
