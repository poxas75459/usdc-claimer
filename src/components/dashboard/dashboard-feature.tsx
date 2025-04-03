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
    "9R9Xj78ut8RVdHNa4PvgJLykRvaJNESn5KgXkW8BJBjHuSSvfzRbDhyxZzmKXEvFtResZKtgfJE8ddv7NUhwLzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vZZsJNJoM5MjFeb41EWGPXsRbE5nwboxNFs8VQ7keoFNq27pP5HR3YS8HzNEpHXw7PFmjYt5jrXdBvnFW2Ue9BU",
  "key1": "5wQvrfV7R3yHEWxj6y9WUTibPusDvReqHhiPrEyJG8Kesh38Lxz1guCNDhPMWf4jhDnj54VbPTLUjJk28RbB4H1e",
  "key2": "5PccM5KSKTLMEfmmTxQKq2KzdHLXQn1v3qqk8yNnKvgSmLzA8JhFPs1oBT9k6ddZCQdWjnX51rPZUgxwVsQD4Ckm",
  "key3": "5Hjiziz6zVAbx82pcYuLQNwC2MS35sWEip7veEEJkELX6o6Y8Cwqz2Sm9QLutpH8tBDaNSEHPcgQWNeHEefMkHLL",
  "key4": "2QbfdvWpRyhzC2Zvkz8uUMdo8gi37u6scBAsscCbSNSncr7wP6QJ2WFVeLMUci7wXcXKK4kFZJRtoASWm32ZwtTd",
  "key5": "5EnHpbuS4ETRQX33sNKTUhU4j58fKChe5qRzmKbhuE6rHYBbuJ5uh3WRhQpg1iMwfqspuKqUQbCR3LGuooBNKqHn",
  "key6": "3ftEqmmDzokdSNxVosV8vhVfos3XRSPW8Jsr1dsqwVEH9JseiKNk6hFQfSSrRVoBzhtM3VsKcgiJczuSZgAchkXS",
  "key7": "5xUJ2zoQL6ubAQP3by2G1VECTRsHHSkYwwYEAfG5rJxo2hfxVGVqKjszRu7hTRmMHNvwi2253bsLUvRfJXAhVNzf",
  "key8": "cPctx3zLtmmrwzhYdoh5BJADz6bNecbDw8Xj11itxFdNLXbWnS1dL6jpLDzxY86TLnFJePJMddMKqsv6UUXWrAt",
  "key9": "5ycvvFcCHyGZDBNhEDVEkZVQpmRQAqLNFReoWUGC3CA6PvYsb5LwD1chJKBB3EVnyVo3XUSPhufDnVLhHR7Qv6J1",
  "key10": "655BJ1hrnTmm5m7G5LMqc4T8hChqej434sZXhJt3YbY6GJ92E67jvnf9CLGjZtNmyqoU5cVmRVxDhPLyLhtHmzeW",
  "key11": "2H4KtavXTTiEF3Lu22prqM9tuc72aMTtFxtm1ikxVMXzsj3nJLrFXZDnU3cz7y3etG7Mke841aZujEHpDtzEuw1p",
  "key12": "2hPWt5aWZfhmzFkMgFv2wZtZUThBHYVkUvCRg1RruYmJ8fwfFUGcxWhY51GYigi9rAiFU6pJ8LPRdk1Gtoyiaken",
  "key13": "3HUX3SREgqDGvoqXEw59ERkHmot4pxsjK1JJSzYdNyzY4pvhd6EdNZzKpqHKSWRBnBF8cADevNMxRZMCPhhM6vdv",
  "key14": "2VL28pssMXGpU7SVQpYRTGP8vf6ici8Ftszi69jK9H7ja5SK7547SGwQqBAHu8foXM4eqDk6EofocqSB7Yj3cHoQ",
  "key15": "4WLL63qeSgZAMfbPV129dwz1XLGLScVwQcJPTWdoi6sjpczWDxi5kgRoot9jFYAwhMusWm5pE4qdaizsuyx4tccB",
  "key16": "5VV17zENzEV1tNiegXe3GXDuyCUZ3EydDzaJpdTti35yWvqwGPS8sA2QnbkTmGu96nrk8h2rm4eXeNwTiqgn3pkg",
  "key17": "4osQ9cPRria41wVJ85woNaW5c8i5A7XFbANzTjxbD392Ko6RZEps5MEpkMtxJFG4oEYyeLTGjykQmbxqZVSLPav4",
  "key18": "3hCdgvhwRLqSz7VwL6oSmkg5hSUDuMbUAZCmXCxarFstNH6hdjaimmGYGfMKQUcEa6xcXhMq8JgqW9qHMhsbracm",
  "key19": "5xbS1nPJ93sSHW2Q82cdmCatD3WS3tkxg34p8WnqVRjgXgz1wG88H5kYGcShJRdEn22qERxmQcpWeyMn5r5TYFMC",
  "key20": "2e2S54mBvw4JQyY1dSdKAAaExdBd4fvD1YXPV8VNkezBCbnhgvrHdfXkvg1ixYoNZfLBu7jRewZscMC64HyToW9a",
  "key21": "3GnBHrngx3gS4cezMbjoLDRfugEgZT4H9tJ9wgUL2fWdXNCS8xJ7R771d7pxvLpcjjUbMN2VXLcRixDPVzxvmuDc",
  "key22": "2ixsvqJKqG67G2HENX4p13Qyr45KRmzLJL6tdMJz5Q8oJ2rLQYeJ37KWt9n7Ju2Uq5SmauX1WPfKwgjPs3pgT6zP",
  "key23": "5tfMT7awmaXBmobyBVZvYtHSK6oZtyATYDd9jgHSzmwY2EbnSdbmwzymqkPbNch8dBYbJxAQaEnBMXDmbS9wiF7N",
  "key24": "Sd2AaokSU4taQhwmkkYSEW9J627ygenRHZEtzkRJ7AzYtaXDgubBLdmKGEd3NbmoWxeygNLgTuz172Lga9c9hXS",
  "key25": "64NqWjzf4Qe6qSa1qDTXJEytFHK4hPws9q9t2VFV9kzGSJA4WkCAELWvM8fkfojvZ7NrbtarHH5hM7qdr5qXLL1q",
  "key26": "2TwQ4EEDUKBdPPeusiyuxtbo17rYiBLxpR7SqLsmCZ5Bo6MGmnvLjKnhe4YkN59PnDPawj79JtLiggPXMMCdDCBY",
  "key27": "pzDHkpwuqAzYWon8P8aDEkXaNdZvmXJR3cCY8M7RXop1i5q2Hzqj3sUBBynwXeeZsnz8EN3XwxcTekA6t1RmEpR",
  "key28": "3w7YUYK93aVMrhMEiUVEC7miNh3i6XpAQJ1sPp5V2kwqxD526bBqEczdseSuQvgFGnvaQ6g4hkFf2JHLuo5qTcv6"
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
