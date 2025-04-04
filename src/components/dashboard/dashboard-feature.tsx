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
    "58XCqY3xMpvHNzagtFJukW1pEMUvYPkkxyHMuCMxjeNJyeGvjxAcKYnHoMwEvjsAB4Jwvi1xU4KdiQewhAsjqaBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VEKv2a5F5ruk4cCy89THDBGbWsZXY1KqMeFTWVAftrLRzZ7xyG4bgV74tY3o4aXSqGLUSZKdEwNmeEZ2JgMMMEg",
  "key1": "XR6yEe81vg7oDPSs2Yj9jwt4r9aZ965XjNZzNqccVyNoSkhyUSXcRAxxsiTqX9TCHWn2cCyHantarVjpSAHWnjk",
  "key2": "32sef2nyqhhhJvoaqoVnA8UV5rHQ2mTgTUa4fWGGxk1fJm3Ddj9Pcb5jGu6o5NciZQskiMStWEXkc6gPPMB7JnCj",
  "key3": "5R7VMQVj9z6DLa2Wtkd49vmTGwL55nUuLMhDq18D66LKC9oCN84DroobSdmT8cJ9NExMSdnd73v5bJx37sVtK77G",
  "key4": "4vm12w8NLsqdrNsTtqxCivFb9EL5tcFMEpfkmvLDfG9vvLz5FDcpWqpzsysZAj4xVYYcVreNqnLGACBrW3NZg99",
  "key5": "2Huhs7b5DwYpaD4KgJifJ122SS1uwDKBYiruHefftuTf2Soc1KZYpAThCDSu5UwLNyRqtp9C3oSaHQqrDtCRLTGh",
  "key6": "hH2z6aHrrEismCTHyU4L1SBqKnxVhgTPtRmcz7ASo6HT3yf4cDnAzfkzgWN2CcwwagPoCyF44VZnmBQR2fzRPWn",
  "key7": "5oWnVdbDwnruXkkKJNQ4ZRYJGSmyd5wU818oAUGggL7HGqZ2RwL4NLseppagd6tV7hdejgB4AkrXVyGtWGSyma1Z",
  "key8": "Q3STzqgtBoWY6tK5iYxCxizez9DsGEKPAurR8kxMetd2NYKWBJpRJs47w7VMiyWCQodcJsJXXJcWDUDZFyU7FJU",
  "key9": "UT7SvGgdFheH3N2BWB9nm3c2abYyFyLvz1y7fsSX9GcBsmofqaUxomk7oePtrcic2wA8zprti9JnsnJbrnyR1PU",
  "key10": "2mCKfMognS4Qm589fKSehqnbs2gXdrWSePaTLzny9hDRLbHGm4bUPn1yHeSEFuSdabxZPe6f5q1F6xA7KVN1ZQHU",
  "key11": "43aNbuyZSRuWNuCm15uLzY2AK7RcAAMirXKB2rJY64GLtNumgWnQUHbJARtL7nWjXFocRj8aBKPsopR3qNzbGMML",
  "key12": "212kQBqQc2oLXhP2VTHuJuHD8AQKGt2LisvurWCW6WnbGof3pCzfCVSAXR4GorphDVsqQ7ZuLoNf6AZ51QpuL1Tp",
  "key13": "3aojct2TMKsN8y17yR3WBqjgmTAXAR4yj1Eq1qHVJgrCEjaSJfsTeiWwhU8NR2x5GYY4KDmBbBQUQyoRDKma2dv2",
  "key14": "5pv2D8MqU5R1hfcEgAG7QL5JaBdJy19Qi1rRU8tMJfAGkLXUozyACD9kzh5LK33UjTgXKxbjMbv5W3fk9nWTSkkm",
  "key15": "5tDgju7nstkhstuXZH6WFANFqgB1gxaknUkYFfm7LVMEQz9FpdqEqEbJR5gqKYvhaaznrQX7mfP7CUX8X5w8gBgy",
  "key16": "7AEQYXn6Js2CGsSGUo4nDrksnywnTuB8jrrN2nC8WSFUXmm6rZCPAA3g6BwuD7sHzHLLUoJuSBcHGJc9HwfT2zY",
  "key17": "5nySG3tYorDGJ3vTY1qksqpyJYQ8b3wmiadbCj3jKTLATCWyioM6PL5TWEFnANUPST6hkPKFnKXX68JrLgzRXne8",
  "key18": "2bszJCFBKaLpkC2KbCxJ92vdfShczU5XgxhiozC8yCLoSEXZNktHCiw7t1ewDrhJ6g1f2aemxaoPZvqETaNqQuwa",
  "key19": "3tqKcNGpygDyLjeG7mjpLf9H4nmXfeBZTwbvqs7NXEukSDXhxRYstEvgnnvrZ2YbFqLEmqAuPnLzU2msELKM5tMM",
  "key20": "4hn9ynGzZYQ688A1eETh79pZJMDdmLregVHNaJF85QsWat1zh9ZWrjsyYHxtK6Zbumn2hu99RupL7sspfbx6k6q5",
  "key21": "47BrDjNXcqqgncXDmKhwapqdMYZkgmHDCSaXXu8DeQra1soEHQeoHRzfhYS4b8tUv1oGuqMWtWxqBN3CBFypZsuS",
  "key22": "2riqnTxu7UZ8MopXfuauxzhDza4QZTPgZCozq14nLEbBuxp7PfGsid6YUh3R9xM26GqTnnTQgZWaPmcVR2aJKRDy",
  "key23": "5mNpJLLMNbELSD6DcY2Qgs7jMW15wapj2MW5FxBsHa56bwu5DYkWM4987pvVFso1nu2quvts87kMwjmgW67n92iN",
  "key24": "4pom4jJWs89Q36CmMDJKvs9Hcz8TLxPx3nxHP3RG3xi8k3mWtg4V6r6M4eaZ1jZAWjyLmee93Z8VxyafwF3fqvog",
  "key25": "2oSM2GnjjoQTBF5NgEvK3Buty1xNPZ2K6AYhePXqbQYH43hvMU9Eah6fe3MjfBrqdFkF719LRcjjFyYXDMQfRSmG",
  "key26": "BavvYKUXkrNUCPWj1SZr1sLwwBDMYq6QegGqEPF18cfzaNdyZmk9uVofULJZAB6pUKTEvi6FPtpaorC1Pn5it9q",
  "key27": "fqhHB1Tok6cbMJS5kN8hLHcmuuLcavhPNRthxLVHV9fHk9Yp5joxeBJBDXUFsdQZWK93Kfwpe7oEhWNAa7AkTu8",
  "key28": "44agiZLRQG2XdThZWHHdQMUcFGPJksGMZg7rGbVvqgNo42Eba128NZL7BFo8kfasabWkMGdnN3DT9DMae7U9Expd",
  "key29": "4EWBdXZwRyBmf1Uh3NWXHhrnzAdgUa5ybqRDuUZ3K6QwLrDwWuSP58UywMJEpd4PfeJNz4UdVCd1D4t5Nz6BfTMm",
  "key30": "9Y2PfQuveDZdoBSvW2FEVYu6wHSf5eR1Kyh1GxJec5q7Po1aFxfgsTc59VQwTswu1zQuQpvWwTbtXFKsrB4cN1t",
  "key31": "5U7Ms1PeYoAsG3HoH1SvjQsrGt9ii85wGtAaMw3F7ct1oVwqCxY2YuPToD4U7fgfwJh8a6zJbvMstw6iVEJzspcK",
  "key32": "5EdgSCJiftQ8an4rCwTqkZA3VpMqUZ4MERw8LHpDEshfgGN6KkvY7tBw1ynXdNFixmN6ovWygT6oaBm3gVpmMNaj",
  "key33": "56yVT3u2Xk5XxG1tG7Cx7Q4e9dSNx8VEZe64KsuQ18QEc6QXsWqQPjucLvwVG2q3x1SEct6tcNtTb8a6XVNvJTeA",
  "key34": "WhC4w9GoEai98DzJ5qbLhW2XDAee89hWBxNx7SMSquf1KrpPgLYx8MAWPW4vPVaCpaYRZAf5a2krUPQkatw4DQu",
  "key35": "7JwXHe6gP2TydeUmw7kc1mrZarWCSK1nMLe4YzXCvCc1hiLHj8nWQfdbqDyP13TgFaFYCZssZD18Vo9CQXbmaPJ",
  "key36": "4UnkcuWUAh571cWzRCieyQFzFUXgjNWn5M391KXM8PXUf5JM7pj8f8cHJz52H8PJj8ne5BDW67r9EzEYYQPq2psA"
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
