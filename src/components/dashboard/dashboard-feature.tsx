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
    "61bsrBseRMJcYJX1nMYa23Jy7feykBkUE1rWiz66RFa4Aa2Juu2Y5z3YMCBCntpocKZJYRJgJRQiAZnARKeMTnv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vf4bZtxv3VyPZ6TyFYZCMd7Hycx2QGfQubEr3H1hNFxKXdv6Cp3dehU5F3DUWrSSYcciSVe5eaAKzMhAF3jbkEh",
  "key1": "23f1nHaLQ947Ez1T5FKDR5dSdjH9PuB7o6jRYqEUuPdBRpfysVtQZvdNsbyH1x5Wu7iqWwCTrFzTnKpC4JEjJgWM",
  "key2": "yWCubHDyxVu57K1adH7gackMSZVVyAd6UERqNA1H6EVN2Kavaun46YMdPo1RCuBZfPwGUogJLpH3CrHZwiTvsLP",
  "key3": "3yBYNCzauWaLnDi5WHs88cFwT4WFYNGTJ5gpP8WnAsqJPjEuNYQogJakjgekRrzDjWvVGFfJgfkTvvZQTDnzwhmW",
  "key4": "5XBEoBxdaYCqLbU2aVJjj9qp5EpDFhvzzC4xF5y2LWGDRagAagNpcsX3VYaq6ertX6uGvEpYsQrtz9cdrRw145vT",
  "key5": "5mp7Rirtvxe5f112kW2Uqrobn9LCC5XWUPPGgEVRqJMsV4GxPtM8NPpMFrcoiunHhDYxwKNGdMQDWdgcWW5U3E5s",
  "key6": "5cZqs1bikNtebnCngvrE5PeJm5eh5brdZ5XV8ybfAerG5YrK3GGMDcUoHZHm6i9i6U8MFJi7tt6GP6QJCQByv89h",
  "key7": "4rxe32SxmNqo5wguHpKZfzo5AD668M77JsNMktnAjZLxZgpEavHW1Mx8T5z1Gvs7jTkzut9RKQMbmaJZM4zzEZiJ",
  "key8": "3YmFsAFoCvmWMPPJbTXg56SzkfnRYKgh5YD58sg4WBEabiduY5jpqgkbHnQsfjgrAHNGw668UMF69pwnxpYMrfXa",
  "key9": "hMB71wqb1rc3fH76nbrehQDprAHy5Wmn7ibsyhuCoEDeREytj3xzZN66oHRiioyYqeHzttv2RjNH8GxCLP6bsTs",
  "key10": "47PAL73pQwJz1yTSGJJewuWdA5dgWCsCNnM1AJP1aauVyJcbiXQ3VqNAj21yfEruU8qDX4wPD699496mjNx2MEUH",
  "key11": "3dCnAkEkpPDyz6zyUcLiTN7erzaXA5bhjfVknx12XHWnkhD1b1xWV7vCYaUTGYgW9enKibrHvuE7kpXBfxpYagpt",
  "key12": "2oVHbfuk5PKiPZa1keooHu7p8SeEdGdKfyhLXw5MyqRC4XD2QYERMVVDWAh9grvvRAmxYpaaFxrP3vLCjzbSLLo1",
  "key13": "55x99xpWVR7MzuBVHVAYsfmGQB6zTgAFyB1PgNETJrYavpveMYiqro11ftLe3HKFWoGVPHKTprFfwVrHh4WadWCA",
  "key14": "3kngm3erESEEqwmdVv8sU9EGQx18GcTA5i77zvjphwEuQKHd6HLV91t6FZaU4PYPL3agrGYYecSzz5zw9Suq8Ea4",
  "key15": "zazh7EF8sirQpgzbRf9kPPd6xu1XLNgjMSeJqp59a3ZPsporchquv1KJN3xtEuQtJKUt6vCkExHkFegPzxxrbag",
  "key16": "2okQXSqy9kKxvc5zmLCCuGjTrxJUS6Ee6zo9fYvrdY6RkwnPV3iREVSZ5tRdBBTs45gA9RBqLVss92x9xjD1Hkem",
  "key17": "a8pubQfaq8nLDPoxUUYL4JwGJrBuXXi8e2qm56L2jGeHMpzu9ycREBuSjqZxrVqnrBfTY5dUfwTCDX17WDLEXbZ",
  "key18": "3SvdBEMzSS25mAbxTZrUPqFpdTfqvkGVatCzEet76Hip2oVz3NY1TNtAckDQhxwHkEHBpfq1yFUuBcaWUW4E8QAN",
  "key19": "pJAN8oMXAxFpLEKrasCwxopKJ3P7Mc6TBC2kbWoRpakA7nCdUD7iTCPYv5AR3aca4iepNXMz4UPKAPa696XVx9F",
  "key20": "Wm58JBcAsmCGMUizwss338fe4kWgFbQc2c1yAn9oHQ2tbLYr8dqL8jfQASHRtXgNCiRkzwsahSskxuYVpZU5G7G",
  "key21": "3SfEBKs13ZDe2vSxp8MQ9gcUhrxZMwr9MKX1pGdsWJxTsPSeC4ArN6LuVXMNfefvPpCAkr4Viznb3zUAjzcxtBSw",
  "key22": "2fE2E4eSNzihdA7B7d5rBLDMPWDup36kG6cdas3ni8E22gzhvmojzriRFXzkQYQhDoLE47waeXfke5LDuPkJ7Jx2",
  "key23": "4shGhpqQNxjo9aq2uW5dUqvsRK3rnNXHQf5GqfBDao7Zk3zb74cUqDuqM2qGsgDGYF1DibM8dMGxZXKGjYPGCQ9Z",
  "key24": "4cCzd9RNb59QjhPHiDsq9RKgc8id2tDABynnQAW3TnuAKTMKjHDHZCrybHC9dXYAdbyD1KhMjM43Hzy3coZPFqbQ",
  "key25": "hXqF2jn2USKP5ANDHp8FHrcEs3jRvXufBAxoVaq67r9gL4ZRhw2ocsuMEU71Kut8JeYUe8qNw5BoSZzXtZSSaYX",
  "key26": "2U4acSAQaZC7LKbXgcFdJFCcjWc6SaDLzrCyviUkduVMdy2T25wNxVxap2hgYvt9GJZ4AE7R2SmCcaTrFHu67sn8",
  "key27": "5aEmj1rujqXg6S2R6bEAHcNfLh3fV3yj1s1Q2y8B9af5TbD6ZBKyLFqSXYHgkRo64JXgGGpYH2YpBEHXCsbUuft8",
  "key28": "B2MeN36r41CZce8FHMueaftghuFdsPQsWHfkUD36w2G6DU5FAGtkmRUdvmiEXah8hyFvG6n1CsYeKegsMqEyBnW",
  "key29": "2HPCbHo1u31VdWPH8nSGLkfhgjmw8rDs9aVMDi5cSNDVJydeXkmR3tHPAJLtN2vbYNTVb33eKopVWoRnrUuoEPpt",
  "key30": "63hNjnmdN8d4fBkxC2SrUMvDKwzNEz1HRVHo5gsM2Wm77VEeeH5UAd16cz87FbFqDmnYRKaMwCHYgk21rJnh2Bvb",
  "key31": "r2qbaKeeKbNy1FkrJfqkK726L6LBRmjk66HZVdDdkttqWBDMqfWy8YhueNzigJmj2HHWNs1py3CuvFqkdy1AerS",
  "key32": "3RhS5dE9Y6KMPRKUcx96yWBM21vBL9Aq9JgXpQSM2YbbSYfXrW1d6AaQN8mPZcWpjqjM7tLS98koSCmwB3EgpCem",
  "key33": "YWyHMYnrugV8CFDZkzbTQC2BpC7QTYUuAzZLB5hVdWgZ4cWmhYJMifcLuVzrBXDDJfMj7GtvYxtaRh6x4qo82oA",
  "key34": "5xpXZP2DXoB9s7unkekyF5Skjg9yj6FDzyy83iGqawshBodtuneAwTL9rY2KzGd6cdfNyQio99WjAfbTgREycWhD",
  "key35": "2LXoRmpAqQoLYoy7Cnf6WYtTfGpdNok327WsBtDfj45uYb1bBdKaC34eK4GAKgrWc7dz5Kp2fMRjAQTUZE1bhXVw",
  "key36": "58Xinp5tq8NBzPzMFukCKpr7qD8qwqwjjwa5HPGWES16AyiHLYZdoXwAJZimgUyq1eArHDQvs9d1TAL61S9NLCVo"
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
