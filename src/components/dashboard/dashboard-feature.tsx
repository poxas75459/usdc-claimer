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
    "285bwyw9djFfZzb58EaxLz7coDCqRwDzV2dfcBLw1HjK2N7kcYjCDhSi8Lymyy7ADspoUaTkmYkTkZ17by7g7Q9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eNExNxgBuq1Cd1sWVrHXP28FtE4DcXTBio7T6e2s58zSFB4JnC6DStj5kaFekizJtDrFQB9pvBFdzGvUgzDo9cG",
  "key1": "2E4gjsm3F9vvHDcsfFqcP1fXpndduM9ihJT9UUYszs3G6YBCTV7CzVgp5qqwyhksidD8WTYc6eiL5of4Juy6fPDc",
  "key2": "4UhoEo2jEhMFBkn7yPL85W2CrV62y6pLULgZMZpDgGQ829biL1EvXfmbxBW56ye5YbAbinddcipYacxqEd42prQv",
  "key3": "26meZfx5BJVzjM5fvQv7GCQDa977Kh7HR89fGkvBaTjTebnEowaBQrZ7BmQxBmp37bVPqhXR2XyxbADTbtXZAu5n",
  "key4": "2N2Rwewot3AuFviD33RFC2Tc8zGiNMYXeGmwxFv6avzwmV5n4UHXYjfTFCnDEmeDa5EqKMbTsWKt2a1A1z2KsnGk",
  "key5": "5nG4bJFr7vXZAT38Q1rJAMzrmJk7tKKw6HyaQd7Pr65h83SbArcoqEzD4V5EsnCVynTzNmiPUzgsYfFKQvsrNLd3",
  "key6": "4AowonguLtXDYWTN4KDVmy2fd6CMXA9bSVxypQQ3sn2Vv7cVBgHLBb7Uvv4pfVeuH74VLHuL8APuaJ26qyuiPSp",
  "key7": "3epjis3BZUFvqRBYf3XAWg35A73vbVWjAML2P4uuL97KhGLack9hed216UpoeWSX9kpJM9hEpQGsW8VxcaL4HBHJ",
  "key8": "5sUqkmVhaqmD4pG6HY52d4ipH76tKiacRE2i3fWNhZvhfsewPyGeJDFM3teHydYcbRtmiECjJSeetQCF95VjBdd4",
  "key9": "4HupYu3dqZqh3sJFseTW6FFDDHkv1sDvgn1F4TwG93V7qTvornpZ3zRGj4fq5koPH5y5Ttk7mzERFQ2QDAZPdTJY",
  "key10": "44jBqrTJ2JknszexYHXEZWSCNHniGQ8ySNccRizipkiqAnBccA1BoxWCewvFAFFjCdB3gaE3MYQ7qb6tbZ2AEFmG",
  "key11": "3wy2H5rY9VJRdCEoyt1iabgT43s2SvTPjBjEx3goJgmH2xNKpQshNDk5EoWEDwec5gM7fnt8uqT4mA8tUvRgAGMG",
  "key12": "2C8dCzeEDXpcRmSjiMMRyNESMR4qXoeEzHMMesfYS2Wk9pFPMLwyJcuSQ68qUqM5jVuL9uz1AmDoV4g1EEz5Vbk7",
  "key13": "2nz3ghLtkp171KT1BDuNg5dvRuMd1gdDSCSwUs4EmqS1UF1k96bvB5vXyiCSKictAGZ251T7YQFTJXuiA2cwP63p",
  "key14": "4s582xTV3ZHHHpJeSSwH7hn8ad1xbveoEppWAaYMESbYavFjHYEPi6g5uh6s7WccDB2jVXAFMeiW6xFhrtTEam2N",
  "key15": "4KgpKvY4UbCz4epPXUCmuoejxET4yqYwAsKnDE2KvBps6qEiBRNPnXzFEEKSskG1PNAENVMwLk3fFwX2wU2HLkfJ",
  "key16": "46i74ZwgSS7GQdWVLCxycygzksxqN4Hwcs9wQ9ccw77FZUXuTgouXuuBdM5xfLr3Fv2iYcEZCrYees15pJWqznyk",
  "key17": "3wYrDgAXMEr4rCRtKfikSjiKaRR7PzcAGM3WrsgMtQN1ebKDnu56YpM5DgzMHT4zp7aLWCrodBNR7Czk5dnmw63V",
  "key18": "5zR8zNac3ppKxAb9v6voQAx5z8kYCRTDL3Dc1Pdct2BiSmueZiXdNF5SB9WmTT1mNSa4d1oDNBL37uQPvxLeXxAF",
  "key19": "3bi7TxETUatNDVsotALqQ9hVJFb1oAHDkgJaNsWwFSza1zxucNbTNiej4mVpsDg57aosCxj7CdrP9LD2nNzQTroP",
  "key20": "GbNDCtZqQbzMSJ54zWe4MnrvG4K6HTK96MM118gva1Z8Uo3YHqoq8CQTghKi5qdQWopawfeRDocgfRfJfAJATU6",
  "key21": "2fjiB4cCCtnQHWE9fmXQqT7MeCS8C13HdZmYTtMa61KUjAFZwhuyUjFw6hqJEk5Qc2R5WnoYMFk7HCr68ccpXzhJ",
  "key22": "2DurwvADvEGQ46GifmeqQKjZ29FacB67csCBP7VkrPLezp4kZQSvCKnDoH8kabpG68Jn4C9JkxQCmrThTLsZqS6y",
  "key23": "2vEx3jroeoBmu7BT7qA9nX4NpiVC249VohnPjTTpmbqbWqW1d4TLpPHCnmgJU8zmdvQpxESuiYdQUPBxREGjNuHh",
  "key24": "HRvoWztM88RXBb6zT81cVK7eSyVmFsi1pBuyhuF9BTmUQJRcPihJRrc2AEJgG3jx1cF1T8Nx2tPqRddxnT4azhk",
  "key25": "4qnDEYNeZvpK7qEsTdTtSnrZRTB8z9EQzDc6TfhfPU6ia98FqSnNdZLANJQLSzxgVU1vPdSfqzZ1qzKAzszTiQvi"
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
