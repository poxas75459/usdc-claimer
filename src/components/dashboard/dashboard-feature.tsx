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
    "2QWUD17kk1pa65KNPxAKJP1kJer13Vd9kkSHLJRcF763RhiWBWW8E4LCjW6WAo7mqgmochQvnsd8VJfVxaibJBSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62WgSoR7RigurCzaYAvNwGKaGGug8QUQw7p71yZBcZJ6rU2Zdw1kpqCSVC2JLgwtjfA8erMinDWprEY55ggTLg8P",
  "key1": "484BUrA9k1nRjgApMNTScTN15unN4tBCUdrMymWcwjN2aYCoHe9uUXkKmqscjfTN4ocFHyzDqwtb51BAdCWHCuCa",
  "key2": "2bRaBrjuGutEQZRf9XVD8QzSXg4YcjCG9RsZsFazuRBxsAZ47m4bq1NJLSsPWkXffhEv3FQCQAXsoKJJUd1ps9tr",
  "key3": "4L78Rn99tufRJKxCirS7yMRag132A7Jc7TjgS6Fp5k3Tw4ij6HAkvFwSMPm4vNxhLmJGbFDKJx55ngTGAwBeu4AN",
  "key4": "49A9NQ8TLPj6gjqF93ntK7T4cNm8fPWoCVBzyCYYhyBzkwfQaL6jCA2Jt4UEGVkXZvoAcwEqFMP8C4fzaeLbNnAR",
  "key5": "56iNsD1qkDGWKC8jYe3fqk8cziPeC7ChMQcvbe8tQ5pbezwnGTEvyFrjBXcfjooqaZqs1H42fRxS4bzTyCp7cEoV",
  "key6": "ATybefNFtAehFF4KxdoZBbz9vAoNSXbx6vFtRNjJwJEAwLxgtcKrUfoRLag2F61ybwjDzRUZVtk7C6b9W2qnYiY",
  "key7": "26em8HvUdewznpGP97WCe5Ctu2rBJaNMvSjKubExRGXabtBh5mSB6vDBzKMcwAVv6hqCPkuuUZEfhrTdeAt9nxfm",
  "key8": "4MK7h91gu5dfXVk6mXXu3UJ61H4FQe7QECXwLvHhShRTECdoB74RkiAPdY5kznwgAQzcScC6U1567B4Q7RvHwVkQ",
  "key9": "5ayTCdJwPapvtPVJwQ6khSwZg72WLDiGUpEpGXbXvrDnoJ238ckAyp95XbcU1X7mJ1yAM5nZp7ayA1XKsJMJTS2g",
  "key10": "5jHiomPV3yy7SsE1FzRbf59KfbbQa43hsg64SrBEqiAyLFLApXsTaNRHfwN5ZokBrgPJch4mKwJxrEsnK2P5pkG2",
  "key11": "5c5Duv5e7PX7WhjbDRDxrg86HSULDghWsbVMJW9Aoj4SoJXAvxYLZ9MpU2XtQCRRnVg6gBBErFcVFWbWHDAAqVFM",
  "key12": "5o6qeicAAVvEg6tYKBzWtKH6QyTsR4uDTSVrrfMBjnBNEgsn6ArpjjryPr6TzWftdxyfB2wJKeW5Z16VvvFKgiP2",
  "key13": "3w2NXf47MkLzfvxtwQQjYzKpWq2QKeuTqzNhVgdXGdbhyJFRkmCcRWn63qkTonPTea2E4DFVLRwMwt4qywTtaa3p",
  "key14": "5Ug1DCii3SgCjMCUvz48e7sxwx4hgU1Ui9dRzHHpKzirRSb38vCDECRFNgHACPPcQejDG6KSEXUMnTQ3LvmB651C",
  "key15": "2zARuiQN2VVwYBAD2G255DpdKmmD3sLeYLL7su8dVDFc4pfnNmr5VHpYE3F5MEGDHsBdSdsPPxHgpdiUcr2CLpLZ",
  "key16": "5iHDvQZs83iy62h8i8ZXSAHRXNLTbheVbLnJvFemcGbrqpcSN5g4etffTcsXe2B9vsuTtdKDMXbWHHVZT2jWNBSi",
  "key17": "4WFXph8vnQFXVCiPdSKi4Y641JovBsmzS8wxhyZMuLhjHrTEPyfXshPSJ7wZP2nxxkjrNrAwjtr5eKHshBpCibBw",
  "key18": "Z3PcauKHJfSzq2URzsHEYqy77bTYmnsRyKFnPonFrcdZvo81jc69UG83ytB1p1fKzTFyksTPKCMf8wFcs1VULRk",
  "key19": "ReTmy5fFhxNNHXmhrY44T5brnVUcTbCJggbdBgRoAdYhc2pKhdnAqWnnEuJ6pjK88Rq48gagL12pF7khceyRpyd",
  "key20": "63L2uK7y5m9qYjrdjdn1wQCCVPTt2AU7EhTsiCV3W4n3dsNnmAQcFbYdTGECh4c9qb31ao9xR4ypaZRiKwRckmjh",
  "key21": "2L5iDW3A5hragmaPzb1UuAYLfA5p6BMjKBjrRXtNsF8Hcc5BcH17MR6zMgvE36BbBT9fLDJMBnUH2HBTx9Jexf54",
  "key22": "4jkppBvqmUMCSNQdZgoZPBbgTrpucqjU7TX7EjSmjmGY6AZqXuWbPTKPPS3KyN23jfHignfZvUJz19B8yMCmYVHn",
  "key23": "2ovhpkHctKMTYY4k6CVLjLaoj9nNkux5u9KHrFdc8TfMJ9SWM44Dcu7t4YuGw6quiJ8n8ZHjpXLeayr3DTin6ALD",
  "key24": "5bTqd1WhJMfXVfFgGgvNpSV3uV81tzdrP9895VxZFQwXG335iWQMXGqNYqS9QHH4LHFNxTQxqSLDrjcqYAtVvbMx",
  "key25": "5PEuyfZ3VrvUGxLfyrcs8zkWVcYW9e6Mm1x6YDqbuCSFWJPWwsaaRmrQuTeufGkKiAWZ7z2MCfVQ8RkUiWUybAVS",
  "key26": "4HWFh1gj9Co1i8DeXzGrz4azhYapiqWgXvfPod3ydhcFsXgGihVw5rZ1rEm1bRmB17iod8rVNaEKTCQuHaU83KNn",
  "key27": "sgEevn3r32Rp9Wm13BV8EdBCRfhAA2pee8tzSUKQHeZcXN75sfa8jqLAhREDfNykcLQK4PfLAdZGdQLHBcnmEEJ",
  "key28": "4PRuJGxEQQ3WyPnfqcZZeU4KLLw9QUyT1koGwLnVQ2SfFmMpwyUjBgYVMq9RuNvF3ZLkGj5X4Rf2eqF1BCJbWHND",
  "key29": "5zLyJCsvpsFXMbNXf93qiycwpQsrAaox75MvxevopXTnhXGwVG65eKSXNQhyvykjcdccspMJLVL7NUyW6jYtg8aY",
  "key30": "4KZETEWSWuSRCErgdmgZmXAx5hujX34jRBKaq4HFVsjxyxwGdR2T5Ci3EXB8dspZMQdPYPBjwyzjjFnoGWJGBSfy",
  "key31": "2kWQYxgRB4E3SsJvCYhYYeVGvK2NdryvxN8oysQwJocUyDcqsZrfeUWe9E7MdSZXyPKbVpz5du9Xrs5ZJVxw9Dxv",
  "key32": "514trBN3yABE1yxAVBbyxRGAWVcEZz6g9gMuqyP9KPCCCFpZ5DoBuFctUDUeMER9uvACE6hRF75VzzbMgq9YaxMK",
  "key33": "kCcXZ8nqruMuRe58gha9hAjLJvou7LnP92TdUJsoN2M53AXtDgPHF22vuaip5Voau4yPHbtEWjmvegarmpg6zgZ",
  "key34": "5yHiQKzcs2uQ9kZrToNUoZn4ft3tdYjCSYXPbKRmkbP9u6fQm6dHBAzAVSdZs7cLmiQuZ1rMAjP6t1LdejwNV2Vo",
  "key35": "4SGt7YFb5zFDM479djddiPjg1Mz2FGoZzQPARZHedhmdWwSsG8G4SNFnzRiQFDi9d2SWPo8z7TjxtZWpuNUhFjKi",
  "key36": "3b7k8tYcU5U8CQ1jPQ4iSj44Kx3ewx45zhGzLqxQccrwUUxazhdtLx8j1UUrNLLq3hPeQCt5du8HkyLkW17Gmhm3",
  "key37": "4KNWWdsPk51WVaMyxbRjquoNDJjZi6x3tSuJwFrRezSgSgh7CCQvRa2teUxqQsBp9tiwcnwNA57AX53MBo3r5ZDY",
  "key38": "2U8Yzw7hBe4mcxszk9xwXyn7XRS6VXX44QLZBKbuKoTw2cAozbLDJ2q2FPQs7WTWvjSaAB5RA7G2QXG2gP6nCpjX",
  "key39": "27nKRj4UiD2WhQiYCtXUwX6WPw69LZcq6DTAYkjHTspvUREir8t9PVHGrkxJkJi2EjmB8TyqY3HUhCGNMr63NUTv",
  "key40": "3civrLPG97KjE7o8qaKR4fjcj2p3iFxRDBNrr3FeHXs1sridTE45C7g6RMcAKXKLibJaeQc4eJoA6K7MbZ8xVYRB",
  "key41": "Q6xkswGncULTsw8ViFv18bfBYcCYPkaX6enQFdV2wLmjdSFaLhUrLVqXSB7r9b9cWY9Dk53soQ3xuE8rfJhqDBQ"
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
