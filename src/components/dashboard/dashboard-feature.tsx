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
    "53sTztbChVaY6n22gyxpcLWWoDj3m3zNziBcC9KxgxsNGYV8o4dYEfjVKYwKMFwhaircoUnySdh3P9tcuzt1CbJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pmMGkY7QZnx1dm6k6no3GzsmcAhrQfP6wfe4VNXBV9gms99rPtR3QL58VDwTKBAgNXonJAHEzfmYMt4w8TZLvdR",
  "key1": "5Pdi6W1Mryzf8ZEWbkuNkVcwuQioJWHRneNmBCBPvszaNB7ucYdeFroXCbS6cvnj1DaWQ1eFC3MciE5hCGjyA7Y2",
  "key2": "2kbNfxjKfpMAcLk4xjfWC7JC916SCeaeGs1gYBcZhCBweVBnHjn1aBQ7pP5aVmWFYxLMzzFiwYUXgrvK68FbZtZs",
  "key3": "4FJfT5JD5rywmeWsZp6KAkuSMYK1EJgk7TGeJGv8cTHCZPHhauD93QrBS8AxnvfWJZaKPYBuwPx93ZW9bj7oi1NC",
  "key4": "5pYxWGKLdv5JUNnMtHMBjsNrWXpt9yQ5MDBhr9MRvRqwUWWcBLrAHzTbk4NG7rdMoUswRKYYMyxLX3TZdov6HB6r",
  "key5": "4vRe5oCCoBjtysKsJHf1ikzcwTLrPejhDenXhiRSYdfQ1TfK8DdTyZhtQFx3Zc9QpkpC7pWJExVXKb3MidcYSRea",
  "key6": "3UyEhMASCkf7qNeQbk5qKreHqcLiGfHTAN3afVccpF12AN4sy7bMpeBdzG8RreBCm9tkozttHNUr3a71Rag8UyMY",
  "key7": "431rLcDHjPzCwioh6gD9iv9k5dutc3q9XxzJx88SYVfKSxxR45Kq13zuKN9E7zVhcfPURJVR98pHuPJpr8RVg2WL",
  "key8": "3S7RFYYp1F3Wa7x5crwcaFHqaJsHxBTGfkGfQCYiXQKnTURv3kYgBM6D6beGyVJBpdWvPzAdzxmcdM7j6JEZgXdz",
  "key9": "5taQAxcJDKkeSAfGNBZmjL1AYDrmLj1WASSkS1izYYHLEJ44dFAwG4Mr1ZGYra1HMUew2cYSwzPynXmDmA5h6tdz",
  "key10": "3hYZTJFJ53EnzhPaTKuidh28foPDX7iE6jb3cMT9HDPXnA4r6tY3YvuPF3gdkcX1Sni2hBWA7MWe9sbBqZtdCSrj",
  "key11": "5ZkiZLsBYNNyMh69FoZpmMp2HB4i5FmKwgBnhxBkGMRdvXp2Sd36w6ZBgysEqp8mbes6RhBr4utpS6CwWKkut8ig",
  "key12": "3b6ctb4kU7hSTywDSwmviQhSEFKHEUNWHpRyVB8jC8qUFG64HpchFrZg5z2ezKAGGWgxHPqDdUo7wjLGoybqafGS",
  "key13": "3sgq665dSvVLTgS4MiXAhbbWpicDy4qHaUrftCqRsbKAyTwZfzBFDGhhFMiHrD2MUkQ984YQNChLpBgMVo98sbDt",
  "key14": "44C21KkW12MtmY5xvLSrp5NH4MLa4sTK1vVrNd1yQEm66EB4JPFCuYUvfBiViwvgL9g121oB2K5jzrkpgtFPE991",
  "key15": "1aH7318raGj3TWzYQQ7o6iMsbysDYFjK3txJMSRsiJK9aGwNnzRPsWbhLMmAnb3KJkm6RDu5urxJy13GFS3Wv3s",
  "key16": "34wTpEgFcp3UAnAsVNdVrHxDidtMCQnZq8B26RuvPaaEj2dCNJU7QZd4QpiUuPTAZboy9VnpsoWYLde7ov5CYvHs",
  "key17": "5cSCEz6pWBT42PkctHFuaifVofhcssu7SKWWZXm2KyoGwHhWojh6BVCgJpki31aQZY2u3fHxsYPyqKPo864gLF6A",
  "key18": "5qMGea53dZ1uWGLSTRQSSzGucffASt5oqTanxeafvTjGrbW6SckHDJvqjXsgRrQPphkJfoodEn5jpwjNL6ZYiJ6b",
  "key19": "2jYnspVGc6KwYspUCEteMCreGC4GEPUX1uMCv1cpGhhuRc4pFrXBVcLrNFuk1yxEMMLaT4u7639KbXWJJ7TCqsuY",
  "key20": "5wLDaTKgMwvqVGEZXLocAmGLpRUGZDW6kdz6LHcpeXbibzNG7BQtzZZWvMECruyf7NFGYT499cwmRPN2pzNNVqTJ",
  "key21": "tnAnAFUJdQyvDsEQTJkGPpNbbd1KtLiMg546NhYjvWbPn1LxBuWqpM5PKosQQucuJsUu7ypZdhzBABYt4RQSVcy",
  "key22": "wyQkcbxtu55ivL8323bfBAdnurrgFMhk36MHNSFceMYXfSafE1Aimmhruv4gar8TQZ5CG9vtGYvyKqAFwZRCdD5",
  "key23": "MxVjab7kps1qtU1h79mNBB7zzihtUXTYeay3h3F6VWc9WNBfCoAZqFxv71ssMpAvzD5iziu3mZQzkTctHYofQPn",
  "key24": "2jWWU6sHV2u5JP4USTa4cXWmqmDbgbnePTBq1MnL4viy7SJgVZkrkRdjbX8Fbj5xi21NKRdYgSr5cMRURd2ttQS8",
  "key25": "KRFn3yj2Y5z5ZLKu5umZ5MUUPg1wdFGyDBFdDxGSmBA6qM1z3bWsSCS9MTKupkLuqXMaHfhNvjJY6pFnGXX5uvX",
  "key26": "4qS3MEyvAXwa8cZS7Hz6YuZtkGc5juNBifZJKn4bALfrX5G3r4tqYwqavwhhgxRb76vitAFZcDZMniNM5c7kkbgv",
  "key27": "3445tMZ4wxbjbJ5hMQhSidmKHx5L8v7TR8J1AztGZGuUEPcMcFd2Yrmc7tQC4A6MGhhb6KZHT2WpRkNW1Wm4feDJ",
  "key28": "61jHuCATmfiwkxpsqozb5yjDZNMPJnUWrbwtHJzuANfxdQFS7AhUfFg4ZQsmpr7V3CfZCnHxYk6mkTHviDkDJ3AV"
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
