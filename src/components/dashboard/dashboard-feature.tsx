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
    "ZCJW4JKYhwQo3bBVUaRRG4P4smLB1qSg6BuZcrZUNg3sgDTEpnawpW97iDqM6ebUHY2vwmVm7qy9TwdWomXoRUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FfBxgnDQPoiaGagGFomdcjK299DgxvMzDWfxz1rY9eD6BvnvwxBu4Vk4PBGNri4VQHrjZNaqhz5PLvWahJMmrNN",
  "key1": "kfyTRczxL1mqPZrKk7VTTtBscaKurK24QDoakJX88444vXhAWwpQMthx9Zz3HBeDFwHFpfBDTz6hrXsPPi3mmn8",
  "key2": "4cpxrKFGMCG9pxrRaxm17pvWfyo9WtqJdWjboai1UkDwuD5ye9BmdujiB3L9Aptyar2vvJsiAvrKMcK9jiMimMQF",
  "key3": "ZZvcsaw2hc4j8ZK8iaMTcyHJxv683oqVqWs5wcnHXWr6qAsnGBKWuYwmmXJf2czHG4KGDqVnvGucH5HwqDYpb6m",
  "key4": "cWUwEEBmEJop9vyp5FHLTH1U2vJJEfVJyRT2Au771FhkU6hoeep59S4jtFRJ69VYRQUrXGsGEc5AXeoYy9ZWcih",
  "key5": "4FeDfFdQRrnj5t37dvvCQC1EEuywLU5ZYBcHTWMyJLLH7FEeMFhN7uZ3yQATszdua73q7Nih885vVpk8GQDoscDp",
  "key6": "3ZWMQ27pux3x7hhWoZ7swFsLzB2PCZReq4hP9xdfzRC2qe28NXvenDxkFSz1D1sMiJC27MnNF6fhRjJ94nbTD2Xo",
  "key7": "3Y9pDi8u9pgHTh4rxhbgjk9LnGUcipjo6CdaXKoLZDSmLZJbiQTY95F8ZRNdcS52AyTavdEVBfDuFeGwTDCQ7UsP",
  "key8": "5uJDDZYMiVxayrevrpfP1BJ8iJcQijJwsB5PxsU42rijuJtkxSiEcUxga1E76ZWGxBhmLtjPnfqzAfFUweM3gWfz",
  "key9": "4ryVV313G8hS3XUdoYrsZnf8zUeZ22wzN9sLoR2b5h7YgtT2BM2gT2KCb4e8TbgFbpadh3mH42VT4WoBbe31ME95",
  "key10": "VqRjKzFBXqXg5FYfKy4pY3jAi7UkFUajSQwjewpdevMV7NjNaaqB421k4rMp5Fmf55GhM4hJ74Aaph777Y919Qp",
  "key11": "2JnguWSJQjPAFkSbSMVTb8TU8WjZmg8d86Em7R5Pchn9XqCmsYx76yiXwyHjidLNgmtiLE3smjoD3GnGEmqa8tc8",
  "key12": "5WEnMUZKJ5XdzN24biopmL7jmVbD9hjpB7MCwygoGorXsi3yMrHcsvLtyiTp6ZJsDQuptigSgHjfLHazY66hrmSz",
  "key13": "3zTQz57VgL7DCd3ayrfhBD8QszjkZsEipD3qgtewoAvsNvt5ooboerTygBGDkJmUhFBEgcfT5JLAaLanEAis2xKa",
  "key14": "5j9Lg2zAr7Ch6fU1JAfc7DcCKv1yRNid1VGp6PDzkSeWA2r5Jnscq7Q9fvB3fdj41gkEDqpwD23uHroQYewCLcRQ",
  "key15": "5F85K4QvbKue2wP5NTeiNiDcRwfc7ezYRrRDX6kb6kXeYC7VgzNqBUQxZtn91EhkJdNa9aPTpDZ2u1x2AHNhoCki",
  "key16": "42aSLDYKXCZwQfnjWqgCebWJ5jsP2XtzBkxqaSA3Skfmq7DVeD1UvHXGiDWAwoYH9yhBPRLmbYpSnRwnmKuFn1o5",
  "key17": "22aqRjPTUJJQpBzkmFfDhRHR89Ra8VAmkpFAumiMxcLpPxZ55jaE1tpZzc37wXqwjX6digwMwUsY1xCB3xWkAh8W",
  "key18": "4xkw4Uupisgpa1fnHZknfxYZcrr9WTyvVrFJ9sP12bcet9AuTBTEMkuZKsq7WivBbHXz2ELQFSQ59qQwFvEJrSUx",
  "key19": "2YaDB7qnGFMVneRmV6RVkBdMFLG6qppioxeKd1Cddnt2U2spzuSBKmJx5NZFo9xPMrcZF61QUkzpXmLPSnD2awrJ",
  "key20": "3CRBcM3GeRAeqYbaU9k82HaAfzBfzi73MpuzBWh5ygtucCEW4qfgxzfEwGyLASoHNutfxYm84176cHpER3byo5FU",
  "key21": "43iGZwQe6uyvpu7eUksE3ngZNVeUQazCVjNHQe5QwHpi4S9T1Y6FNeREmdNXkUer4AnnaWytm6xzcdGgw7i62E3m",
  "key22": "4iAJcyTBiRuw1RkwrNGmbBWAppppbZx7cugAffPppUeUneQ7C7c5ASonhjbUW1Ef7aTubCcrVzEDGRjX6HRhB3Yc",
  "key23": "2Wj4fS8orX5HRJVohLFCbcnQRcxgC4oP7N9pCrCHDk47jM5AG52edWDJfb6oFLeFqoNv4bQU2RtFCswh8soHn2ET",
  "key24": "M22RtqRLr3QTKXiLci4w2eYcu3onqSLQwBhT7RvGG1ERHxKAbvEXBXUXz2jg1hD6wF3zSoTf7uFnwNzJqjmZ4hD",
  "key25": "3LafPS4QKBmda1oxLT56f2XYVDrEdgzQX6LqtkJrp5vDzY3fGmf8PBYvHZQGQMZbRqsPVoRPK9vrf3XEAi5PGZk6",
  "key26": "2niYRAHyauvcpGrvAPaiE4ZdsGsPxX8sjz8uPVGU33JSGBc9riPFGZSejHTHzKSrDTBAgwmZGgujhJGb4m9zq6kB",
  "key27": "4TTeAiqcHg5MNSymkVJ9HCHEWPnzarvdtDLvSFcU3LgkMDGcS6ByzfKmJ8kuXJ6STT4ZYUZ2C4MnQHunx4rTNExx"
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
