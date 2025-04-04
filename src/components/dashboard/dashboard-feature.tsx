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
    "2tnTcZiCcw4pxiDHtRBWQZAeKJYPLXu54JE1JEnpCy4CpWeL4GJrxsxpL66o66hzCebkDhxqSQnz1Tnj5H39tAsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tTpb2fssDhhBXMcMANiZRkWCmMeeWTvJoRfMPBzR6AF4hyqfPAsWxNxSs2bxEPaeDooiUo43PSMeUAfd5VsBPyk",
  "key1": "57Es27cB2a4qmwb24nSS3hTtZLrAQa8ppD9tqHLWUzPd6oUDYmbkjmoFXn9CCB3vCjRQuyyKB8b4UTanFupEWRqa",
  "key2": "45B5fiwmNy7Vmzvtz9w5ag6a8oeiVa6UCZ8767mLW38gwkbnXEpDz2Qv1hs4ArLNLbGbE9iRoFkqqK5btZoN1B7n",
  "key3": "2WW8hDtin7eiVm2aEsgdDc6wkF59XKi1hiyNa9eNXUFPGxy3o36fjZjEUZRGzUXemMP5bk2yWpvZVTZrFZrQjWQc",
  "key4": "49L7XkUk3nNAtTwCRP16rR9puP3jSRcioLak7ayVsdSMva3rHbrU8AgayNE3Dtifyyrr6SesxHha1vxRuWcJGJ3X",
  "key5": "29aNYi2PfYdPjQiPAEigJbBwz6bmx3feAMgo421Pjm12gFHMbAwvpirBR8meZ5coLL8nr33HNhRuqpRugNxg13b6",
  "key6": "4pcQpYWAKyXXpfbmBJHf82ZH2LUSYEfaC3N6ScsDQ3hRF7P7fg39ZbcxVuP32N8EYmudXmjxbrhushwMtfPXnYnB",
  "key7": "4JFpXFrk6SvGS2btbQDcurHHn8xtHvySpdbFFTppnEKhUiMu3RgqdXbpturiwGGpDiT96sa19A1a53zRUyEC5ma4",
  "key8": "2s28NeQ1u8boox4UEPeHKALBibHS76cQFCWzH1hUZsptUKTcdHTZ9yDu5RCh1FREBpFdfSUPfjcBE46YEeYznqPg",
  "key9": "4oNX7aKJHLa8rirjyutP2kkXrmn6Ms29iWty57jfcsyrkscLj53XwXGD5PmxqPTQHAMmzFWXcGvkRCQvE7esuKg4",
  "key10": "4v6JpAik93iqQVxcoXVgb22QchruGxLkBHvWMJK6TRx1FUL1unEEBaTGQutgdACyzsNTYBuGp5y6eyyTZRMYYXzg",
  "key11": "4q24yED4tE1T7h2HiqnDwSpp2pX476T4fbxSwky6poN5yva1QigxCcQhUYrBz2a2bbGGvYFyTGkKgcrLvkxiNiAP",
  "key12": "5g1TZvSimVGVm9fNxeCr39cvyqHLpa4pYkc528N5ATKQrE9BtEjcfAwAQ7teALjjHJmoUwJ4KRbHV5tBPU59sxeG",
  "key13": "Wux2CkoPv3ef2yLgGR63p1iRrFz5DW2Gb6oi5cUAoRaG5g2sH1CRFAsTN4oPKhdgkCU3VvzmfBhEF2LzmwdSyNR",
  "key14": "4sw82rNBSZ3JHe7iYdMwsvZhGuG6YQYvyUoeEufpSWQhVZRRmz1CPPUDWv1MFc57oL2XveBBy9tQaVGstyBFTVmu",
  "key15": "3ZLv9BFAdbXBWUg3NdYRdjYFdDaqzjqeiouUkH5dV8muhxKSxAsAzx2tiCJKudPSmXiEWjma8PrvZFFo2T2vtJhW",
  "key16": "3WXmgNypVQtQB4jmCq4iebiRYXRsMEs5DAfY8GgZ7jC5cPP2s3REXTSq3H6syJm2ox5svSu2vuLUC7m7CFgnDQa5",
  "key17": "5HaccixTE1ZmhdSb6RkPv3RWLK65yEh1czqDQB7kkRyJBM3vamCGHX4Wn5nNxchiQNA1gKL2aRecZNx3n1udNSia",
  "key18": "PwWhd3TKn3zowvTTGWxo2x5jGpCfz8YYshPweVWJ2m64Rb7fKoqprcJd4nSrZZ1QQYLcTmQV6AnvNsfMjcsf6yo",
  "key19": "2XbXsAZiHdtDkrsD6CqqdjycLW8DokcV5PJSeG2LK6ub5xNV8Cd81uDfXt22t4exaTjmrXP6n9kvWHcn87h2tXB9",
  "key20": "g1mj3qYkiH8J8ABnvS74WQ6ZPw4AQvZDGpbQyD9dKDBp1UpvZMNKQ73WrjHRYn8JLr1Cgcz7LgbVpRxtThyEpJS",
  "key21": "4mXcWDMbAzSz7SzC2or6jt5mgdp1D5mS2aSPPXwNP3cB5cGxRg6VdL88TeWbaicg1FcWh1hmN5e24Yf8hJj9u4De",
  "key22": "5KkWPmB2PDbKioSAoSyVuJHdvepSwFNaxrddSrnyAkUH9fAyke5jUNhrVpJVXvkCjghVbUgDQeyQBt5EPeCaLc1N",
  "key23": "2uJEUBzKUU7m63UnG6GDAzqJvVL9CpkLF99WfPjMoWHWne3xMDzCYJVMpdbQCb5vxXgcxmnQoZ9yLrvSiqpy8GT5",
  "key24": "TVg3c5F2YVAABiimfADGiWagU8QgS2W3BsH6kmtvdxyGXhYbrXjmtWzAxeqZwJ1HuagfL4rHDAJaJW1wiPdbQhr",
  "key25": "4Rx78NofU42Kvu4EemvBy4iXL39MeuiuEw6Mdoq9TWBg7B1FSLAKpTJ8VePHmCemWjKLBrEVUaomJcrkCLWvynt",
  "key26": "3jj2VneAPvSwspThaihxu9KSx1JM7EnYHqNBjK93VpbqWWAkP5bUZN2UePHv6cazzxUYwhYpXW6PFw7rFSpdof12",
  "key27": "2gZ4oBo9StVZ395xcbyy8yuSwdNXFWNuA7WJKq3H2YFvZqFP3srKKkPhFKXAFQiAt7NRdT5scPyUoY6dVPPZuUTg",
  "key28": "3HCq3fubuqWRXVVmskH8kUTn9mqqipY7BqzWR4rX4aC3D2RTm2okNoT5MLNn2v1HNzkqQNqA1ebCyU55S1ZbxVgj",
  "key29": "4Ax3KRNcNaG63eeWYdGcTbRQ5asAj2RhEnsHFFVtsGeiVpPHUEDAL9fj84ngGWG41xLKGRn28BJL83mwUG5oiVcL",
  "key30": "5ffPsJiWYGNLyBLtba47sCHmBDy8hSWsWHyPvEXHkvFamrapPce914ZUjGcfJQbU6xaE9zZhkhzrnVd1giq8KFxD",
  "key31": "3CbZWpDMoeN1BMQ4FzthwJCHVhuXPwxpQZh4XQbmTq7GhbvS65YU2irVd7p4gqawCsFCAzoHkJf6BELFqjtQosat",
  "key32": "45XDLJjZY2pwPD7Xwzz36VukgY9NvTLp2gcRNN9abMd9g6fDG4CFJTsCi1388cvAE4YokVPmSskGLM6bBhjdmJzo",
  "key33": "UgNEBfGmceYTvP7brDCN2Mw6bJnaFtCLbE87kdb55ywbNRAaXRcye2W5UzrvcZzNzboCckwagp2rg4xvc6oSBsr",
  "key34": "kKNKAySxG1nefYToLpJmK3iuJ8Vo1sEFSayjoVW8BM3n2HwzVAW3QZAEvvDz3gqirJQXZ1SkpQ11bFkYzX8NM9n",
  "key35": "5kj2KbnDVNZL2tDjA15oKxk5CV6xYuSeL6hHBWzSEqJGuPvTwxQEJdmAGGSgogeKcLN7yDeVhG7XYNQQW5D21rnq",
  "key36": "4zZADAYg8qTkb6fumPR7NNBs92NwJufzcrSdarB2oUxAeUhDUuKgbBbktfthyf5QsPUmSp3xexyUM5A1J3qtcCZZ",
  "key37": "3ierahLZxaSiWVq1QxcVzBQmY7tmSCJUV7DMWEFxteULYCUxR8iD8kuLX9zPdVfjSG44qCHHj8Gu9nMTzquAncfs"
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
