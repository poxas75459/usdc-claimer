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
    "3e9zzrygsgAx8WgFH3XCQ26vJxE3eT9qnkkZLLfd4iSBKihp3vnF7CMYJbFLJdaAFaDSzvLcUDtUH7j547V1wnaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MmSexWFcqAtFeXkN2eSJsdCyqPnpmsyrg8GjCQQD7q56BQXu1bb65J9WACWyXJYSuvWrbziMYyr9KVuAJhXv9C7",
  "key1": "EzyLUYYMiAfLFsHfoS4JrmpJHY4iwbrKS4K2Y5hTWedfJMXLMyXRGHykNDJqWd4rJ9sW5dxJbF2FykK3uTMTUF1",
  "key2": "4wDVx67CD59skt4WCMDetKjJufK6Tp7QcKogbne7cni4TH9XUkWzFcWCH6o7d7SDQGEbyrcoqTFGZVaM3a4ENqXW",
  "key3": "ZeFwbMZtfrSpisBPzqUqVaNyqRvkZUunDNFtMGZ9EwzQRTYE29wm5QNPPRM3tX93nn2CciApRa9sZfGYbS6Eu8t",
  "key4": "5nmLfLaGdyGZ8zv596MieTPUVLxLgWNPieL3GiJxNn2YsUiCCher77vwoASxvyEwai8M5AZ7YUnjEm9EFLCpCqKS",
  "key5": "5RxV51GfqfLFEnCk4vSUMpbXP1BYHmrEuZo3sAZgw2jTS7gQe5Y89EgLB69psyhpYVta2yqrGHt4QPoWxJ9nmzee",
  "key6": "3Wyn6kEYsnUqUjBS67MdgD6N1n4NKSv6jpRT9ruSoEP99Y27ptxhAX1y2VaKbPowNfYFw7CbCXQLCahiGKbJmpsX",
  "key7": "2x3r2bkBqNkt1MWx3eFAzVwjkNXnRLwV9HxFuFRsBsQpRDGnGyYcccWsCB6w8PWKAahQQCeYrkSSzhM6oJ5qoLnh",
  "key8": "5Hy9Vti4YzCX3bVeRt7y8SCgbwNia6GfNTGUTk3FuqZBMyjdnPZQNdZ3JFdq7b2iwXHPZNsCbmausdR8opNhE7Ve",
  "key9": "5j9U7MUxV84QZnmWYpPdYVMcXrG4isKFD5p5A2Hb833EPBwDw6jiM7XH3Eia3s2WeDwKJC7yaUKoQfF2MBoy3W6h",
  "key10": "55Q8GTFbNbRSV8yh1nZ1f1r6zRp73bqquEPBVcS5riib76v8ZAYL3HEsFqcNREQZ4XELzDinPiBNQ8gwxi2yParX",
  "key11": "4632AZgVTZqQo4EdRRqo5xT5qS8oKfVDrCxGfgHoAcGoUmBMjMaZvyjaPGp1vBPHqHsikUXsMvAmgqBkhbtH1Nmt",
  "key12": "4skF8hN2j1e1QDwqPmSYiBuTUkHKGP2ifRjxAxSKXF7MLfpd9qW6BdcbFmSQHV4FBfoWvSDkXexGvEkotjS2YcBJ",
  "key13": "4oW33z7vgGAfnZBVcUBkPzKaXjsSsi9hrkUKLDm3DNKpG55XFo9vc84PaQvB7PzjvK4K4QUynC6PnfsZWemhoGfC",
  "key14": "2r8FZu8ec7bGEgLBaazXsKErDmwmDdnVsErh1LQT3ynVFER1SUpwYaqbT8Tuij6Y58C21Pzph73tgWpF1Dy6WXCN",
  "key15": "22nSdMrkNZKzicyHUwM1eJ1MvzM6s7hRGSuGdjetiMYJ7fHyyuKfKKa4FJgni7bTZMi6a6FGUphyjq1MR3sFnbkR",
  "key16": "2S6p6STXoLAmb9CTkN9gTrLAAexmQppkDuMP98ggqge5MWXDoD16MWnxZkRzHc5YZx7tvA6WNkKcqHBncFt7gavq",
  "key17": "3ATUefGsawg8YchDp661QvH4mEZSMGiKr4ySarmQsdoHGT8cEP8WzwwmScRebXfFKKEJwHXPEqKuuK83JECt49cz",
  "key18": "2hEdCgKz3akEncAion8nnLcMmopGW135NH6xY1yBumKDDsPsTmWZVt4mwgYXYhyGprHeYqhji1gGQtFEXACcfPMJ",
  "key19": "yV9tvNA46H6cs4AunnqkdchTx2BxrYf4zsrnJTx36L8kFJKXjBMxb86xQtzhGM42RaKETbtpzQSkNy4p1HWUj8E",
  "key20": "62n24WRXw32kPrzTeiaf5a1i7XFPiVJSBPhgectAeWm7pNFEm6eDTDNJaKHcN2NXZK2HyZDSkdtCYNFVsYTbw8BJ",
  "key21": "4UjyHE4hiqgJ8gLqs8BGhKYvbQT1h1Na6teZKbLo1R1ZcMtc2UgGxNnNKbKKmWbjAzh3V4YeDChTFHNtYutv5S5d",
  "key22": "5WWXU5d621rw4svDW8yz21gXMdoS7wckc5fmoX1ZLfj1kXnMT9wsKCitgXvzwMxapJSTHGHJkyhrdq4gz5vt8nMm",
  "key23": "5NB6J2641fGftrFyGMj6LcURJzA6u7uR4twRxjgWu69RHfYSgAmjoVDCGkdKku6PmUmwyNxjy1RYxqouR6m1iZFb",
  "key24": "5MCv8DDxGSxA7dPZ18FaA6Gg3zxssw6YCKJAdrtdY8HKwhGXSGHi9ixM5Y77PNXnkbX9BAw5MTGaPtiTWsLimwT2",
  "key25": "3GL9LireYsYi98YVWjTdUQTXUrExiSFiVG7dewyLqLyb8iENAe6u2Ab2CZxe4yMveQM2DNb7kXDRkbADzCscPQQR",
  "key26": "kKkN1BfXNkNA68PU5eqE3746WnJrYde55xt26ascXrcPAdK1W7kRzmgc6YKoisRA6u1uQJfGkNThQgHXTWVDFzJ",
  "key27": "59N3VD57Ld3VsaenzJFL1ftenjnqZS1yhew8tHqYPbCui94e3SrgbGiPtqBLzfSq5PWDcXAiUebhwaGuUJdhxhkn",
  "key28": "5q7NQ2omPA9Z6oVDr5mkk7jkSo8q1gSntjBxcZPYDrtvCvhHVcWZ5xUQq6mZf7GMaif5THtsBnjsWcb8NjLMe4n6",
  "key29": "5aY8FXZ6Z3u9uWJnAS1F42C2oC2EGqxyWy2XrbYoEi1KXzaPaPqGfJ5XVciRv9JWehzwn9heLBogMmJyPNmL6ej6",
  "key30": "35ihfMpe2dsxYfUA7QBgyubPXVgEZAZNBKqS7FUo9ymWTjLVSaEZgCUTadtkzqHQDW9H9826QMvdCWxKmN4qngGw",
  "key31": "3h9pXZ5y9QrW3mFRXF8imq4J9nPjsmeRRz3tD7DTTMVL1cPdnCgikspAR6xi5mjvRKJWnscRYDG5fxdPhvp387Dr",
  "key32": "4dKTJhi2tgn9okaAvf75VaFfMxwopzSES4koww3YmiBJzuxEdyLit883LEZKDrUTJypM8n6eJJj8Ym9KjJeS1xWx",
  "key33": "5w88cGoKqMD4frexKBPcwTzep8MuBxjgdSbw3b56wQqLTtaECRtPBiHyNGLHapJrrBazb7DdZpPEbn3yKZxMCo7h",
  "key34": "2CojVZgd92xCoYh81iQ6kZMmm4RKze9DyGuzeaQVbnAoFFASyKge7YEPYKQpw7dr8DmXGfMDg8wSJbaNS8hv9w89",
  "key35": "3eXtSpF6Lz8RNMNkPSxTV1pGJjEL436Lt9265PyiAobNCfJJKgHM9cjeZLKjDC5DXUjyBrWX93SWFRDsTSh7iB2u",
  "key36": "51Xf9XeGgoFWnTagzGp9VTP6J2uG6K7CXazVLway79XSLBN1R6HP6iJZfLyxVFGsSTRp1Q9gAjGsgR5BJDjuSgcF",
  "key37": "3zwScM7VUYe6wn3gUnpdpHQQZxyUpxqrimQ5kjtgGUZtoHx2wfUzsLcrPPTN1dNQNM4PCZb8ALCdLGZsPEEmtdki",
  "key38": "2wNy8Yhj48c4TmsH1eUZpQg75yNwtJqUzDjw1k59x5idvJkAjXiZwbWjzCevMxaA7XCcYvhFXNwJbBV7KzveZytv",
  "key39": "4ocUiS2ZCcuSLSntG7dvwsnf92jjCWuns8w5ug7ESLAVwiSwYtJjYpULkqhy7QSacHJ9no5YYgmS25Fw6ACuZzuS",
  "key40": "4p7SznNnvTVQDrQm4WVmUpvxS9vQgTPMVzL8HabRpqVshgGTb5t2nWhMGGwoxRZ6jC7fbPAv2oCxdGughmUhueGx",
  "key41": "2FT7H36xmBbY3EZmkpSryLe9uiSGGFAcq4T9WCeJ4VG5UhvYfvVUxKWg9XuCHaRFY4XWtegfNbV8dduwuYJRuREk",
  "key42": "5XxCUqC22Ebcdb366uoNmktSNmHpYAS1n8r4nyNK9aLPatZJnf8baFw9eA4cyf1wGtVs3x6whTaRNDGgd4GFpegY",
  "key43": "2NQrofPYLiBjjHXVCatW74zrsXdQUDGaC8MZAsQicUPHRi7C6Vin93dMmBFoQy8K5YYcTys6KdSovUchNchFac7u"
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
