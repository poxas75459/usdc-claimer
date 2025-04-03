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
    "bdR6HUbvmpxo1opiUidNQhivfLR1Q59Cppr7Wu4cCUaoUzo4SZ1TrRLWxFSHDbD9NRNejmqqWBFRXccDu2hfmZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iSyyjyrUyyhHqKp8NUssPExsnr7YwyPbnD2StWkrgvRDQupU7ohQPYzExUQPk826wLnjcqVZN2YU2jnR3HTbPqB",
  "key1": "4aycY2pepuWsfjiGU7gKwBBvPLzsz1ntjhCwoUYuhFbpcpJvMF1ZzewSPJHLiCemdCp3NECoAYrPFrVvrpHhs8Z9",
  "key2": "2mRmJ4pg8m8oAzV9saLBtXwwvb64L89Rh3wu182kovCEQphBgko4Q9wtj6Py1EUFsnWwmvE2ujSUBZbxzUuQjrfa",
  "key3": "NKddmuHFx2owdnLCutqt3stGj4a6EtKx3F3EpMwcQfZTGuGWczPssakhmghZ7ivzNVaqPTq6U3spg3N7tBQhSRb",
  "key4": "sMMAhij5k6iUmUgUPVgGjDBdgY6URqyR9kbj9AGmVbpUQQr1JtR9cSH4NWVCFYaRfW4zsftJMzo8kV3nfFQB1AZ",
  "key5": "4tsZqnGMbJxiiaM3JYZ2iYSaamEMxoqotGRJxoes8ia9Fb78Wc3CnqmazEJHJA8LFt1f1XvNmSvX3dNqiDg4E7yB",
  "key6": "5GPo6WfJrQCzMWSXwdhagmPi6rYVZpXGPumGMe79LPgkTXM4fX7oEL1ve2fYn3oJsw4kWPgHE3BuPVgMrsGL69YV",
  "key7": "2QSF66qDpmTeJHT4JoEMAcQmwvTGQtMJrcqa8qwNK4BZtjsWMM7rwRGp7KiHT7rRj9RTGdCz7HpUyXkDrBYMfuWE",
  "key8": "5e48VjvYupNjveZfRTtkiAzRkgqqChFSJTpTvibVdsKrWA4e9yMee3cMpNyn2bSGjUPTyYYA1zD7RSvhfEhwpjCW",
  "key9": "t8vRCDwzeLmySi3YXWDGa3L1zQWRr3gRiL6pcKx81FaqhU5KePbfHdwNZwYvypsN9mUMqDpyThUQoseDaTDWZqE",
  "key10": "2chdUgSp1okxTkHej1d6dFhNQPyz8wVJs8VNRjw3QpeLUShASmTVHtnSomh3GvUxPjAV6CyPCHy5P3eN1rZEV9mP",
  "key11": "4GUcXriNjnHz8punqNytv36AQBTgtfVLtj3t5FpWHfrzcG4G6F7PoDEJ5S4zJTvamgP4c2mKi4q3R3KqHWSnB6ZM",
  "key12": "4DgbLr6N3ST75YW9fCveodqh7D2Zimu27XAAPAq5niinL3WiavYdre99AnCKbk697cPvxhKjAcqkT5WTBVzc3Tfz",
  "key13": "WtzXDBuHRmMxFu2svyM2e7aZLCrGKMRHuSDYVipwCsjigUFLbCeZcrgxPcUbYRVinW1odd1z7RS3hhUCVqnQHCm",
  "key14": "ZzztX7zJavEsC5JrsTUS3oj4yWJvfFnqPXcYth73JiWqoWFDLdBm1HbY9ngtgytu8SLeGUTY8GBNr5GCHX8WS9Y",
  "key15": "3bAZUt2EzYwSNdaypYEGPG83AGyydTeDKS7ecphbQh9d1Qhf6BWd8EfnCTCWarxcs7vwEGcHTwQzwuzJLUU9UUBu",
  "key16": "3g8pQFV6Wz67GP3CFnDi8JqgeAuZwathFAEKHWSi9BrcxuYpX3cTbzkVLPX9DWyogtRxQPn5Sb51RHtW99Qnp5Ss",
  "key17": "3aWB7dPbGqfUorQFPwsMwpN1wzZ2KezLAExkKmhfEazTaZx8VZ2tne3en5WC1PptAojBNkhSvcjqosjkNZWj24bm",
  "key18": "2pbkLswtZLNYYHurp7cucM6TwsEnAjzaHUspr6mm1UXBG436k3c25QXqSMLkiJa1nE5CfJCY4B7U2SrTp54XCmqk",
  "key19": "4h7heonKHFERZVxqUVzsUvvMMa5pfHNeKrScG62ctpng8Zv8bMY8n1rPuyRHbgNwMHitXUSHLRmUvAtdb8Mtsin3",
  "key20": "5do6qK5u1K3vdkSSZMvpWULQpiX3BW3aUW1TWS2NpYuuJuCGuSAP6W73LGcNPZqFBHwDNVNPeFwMMH8LCtJtW7Jw",
  "key21": "bKN99pALEtJcdGjtJejM4qLQir33YWv9F53GGmz5RKuh7SKTxpZXcoMuz26J2pQufsiaM4pq1PEjKmDRigBpVpY",
  "key22": "3eARFGTvtxbC4emd76a9shQX2casuKeSsBgQ7QwcvEEWSS8g5bCpXVmP2yz6YQdBbfPLnEXTZphycnCbAb7YqzPP",
  "key23": "3je7yvsgJJ5YZii8djSBmTUHsXpSLeM2DrXabjBDkCgcfQVdgqNpEgcbEcqQTrs8rPaCcohuKqPVHjxTgCxL1nLm",
  "key24": "5EzU26bvwyip3nhtzBZpnn1wCFJqm5rQumKpZ3V5Qhxiib8Cj36G8136eoUjHpBfCVjsW3tFxxKUC4aAhWr6Jd1L",
  "key25": "56fSqM5aSSmCQCT3wPtAq8Wi5ZJBBK1HYiUYogyoQGj55r52JSfDUkPenom6rK4psiPqXwu1G9GWL1exC4fWiZd9",
  "key26": "4ZatpR6y13kx7ZB7LuZghjFmCMqE2HzKB3v5hgmGXrsn2w2xdEabe9KfF5X17zTa7NmWGpYf6qBjSQpbmZWMNhRB",
  "key27": "62FFytydPUeh8XbWwRgf4c8fQASN5UrPStMSMdZyeCc8K2ZDmaFsXgA15pHo6kJRgnvucGXvgP88oTFtwTYZf9NJ",
  "key28": "2TjWCVrk7HPbyg34EZ5HsU5RyN34f8cNDKt267igshxzjiThoZXckq3bSFt63EpSSZYPt6TSiTBJ8EQcVUbnAcjk",
  "key29": "4Zd68ZYKFm5t56K3L3a92oYBCH6qu974Lkyr5QLBhLe5ATw4aMVBrtcsMiN22cFH3LEFvVr3x6Mgcjx9E23U7oBE",
  "key30": "5Bc7u7U9ikRtoLk2HB7wKtxwN3qE1arJG2G99caoo5pmS9nkdYr4JY1aVgDRbR25RVfQJXYsonr7uyJGN7tmraYm",
  "key31": "4bRskP2Tcidm7k36LufVMPHarFFqnoCTXNyuZUQ6W5pbk8ZuM742PqpiDgEdie8vhzHW5L9QXeaKe2LCugNsfhpe"
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
