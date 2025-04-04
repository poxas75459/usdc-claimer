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
    "4JtfBpA7agtBzvcASggNrAoxF5f3iwTC41k1xKSmTGz6bLc7v4XpLgoAuqhV4yscSdpgCRgUarhBjiYjpx6ChBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55hrr7VPy4ETpiaJjaLir8X1gzJAmJjBMrzwGT6RX9bGjjQ9svFyzW8EabbdjybphG2QxNx1u2fqaLd8Z3aSvJav",
  "key1": "3WBBmvmxPPuDCDkD94DtJwDqYjGCEpePJ1WzMQkDQUpX21mFuc4W86gV42T9dwVm3TMUnLtD8oNB3UkDa2JZEeiQ",
  "key2": "3qm9MVitjx4hxgL5k2YrwSuWqRX1G9bxq4gvfAKpdQzCJTnVS44hwPnbi2d8AJt3ZtCub4MHZuaAZG4uhFy8UdrF",
  "key3": "42HnzMLLXi5aszusfpLXeJdEgYC9UQvUVYDHicfdwLxMs2RDa6r2JDdFA7qaFVaiWDC3Nj5V7mrKSBML1zdKmQ2i",
  "key4": "5dppoypWZdbAq4H2bmKuWmkpiTjbH1WfUZVd86FVeSgxAC55p5erS1CdTH133pub3Bkj7ZDsE81Mif7uzHMW4amr",
  "key5": "cnY5LHcgLh8fP25ZM9G7Qg3gApSPtrvXRxv2hDyPQ6hrzHKqfxUKhXqmws3z14UgqD563o6gxnBw723uPXrW6nK",
  "key6": "49DHKwz1psrPJh3gMbJU66uyRseYgWhMUMnkNuK9nhs4Hpz3mYYzkMSswbZURHBcsu8vU45XuFVTxd7a1MxVv7rj",
  "key7": "4we8AaoKipw4gLyYk7eJ2SWRZkfjT1RmdjmtKLsDKpdPMHqCf6QA3qGyeupD5aUv8R72oDD7CESzujzV65ZzNhVf",
  "key8": "5C8ZC365MU9hV3EoTekBonszoWYuczaNbCsp3viAekZm9TtHbGRKx6SLzdPGy7PZ7tHPws9CFXcF9aFifUL8tWc9",
  "key9": "w1n2DjWm9sDqVQmzSnLhTPPRY4sjxJAptRCVSyK28n2mtCJ3o33KufXPL3H1KhKXE3SBuqdp9wLqm8PCwFxFcyH",
  "key10": "34CFuSRKPvQ5wiNxJvQwJqguULkEZPxwKuftwNbNVmxvBrMtqy9heoB9SYXWjxMXcqXfxFVP66XZ7AE7RMwuKydC",
  "key11": "4fAjz7cyWVELfUGnseLCnDy96vjzDaU6R8rpSqSRGtsaqXi8igtyQfRqwuNvE9QPRHeFyDMaEPB8ey7qXD5pDoyV",
  "key12": "65jQCnveE5RFGwazaf43ksYTcv3QHfhN1VuNPx1qxVMxJi9uBoySmUTJDhQeu4Zp56LvjhTzRSbo5kfnwCjaFwZT",
  "key13": "2ygH3hMEeGN7GhTe12FA4pjNoRr1MWRvbccpFLe7C6tr2hRyioZhwKvjr5frtzyBuevEmi1fAAmEHB8a2R6MBx1h",
  "key14": "2e6wbKtnw8fHbuHiSQDGEYkUNa3MDgPaR1mpqCvEb5YDv2wyn8KmjxXzucP3QVUcWekbC969i8vqKsCPnhUUEjcP",
  "key15": "4dpQZ8244hFAPWvpciKoGWKnU5Wg9uqJobQ7xRSAYGFjXPVuvUHcfxMkqDZRHwkX2kMMDpwT7HuodCujs2pijdsi",
  "key16": "2JyZYi4HR5jAJC6X7pYHAebhSkTa7U1Beb1BhcKF8BDvmGZaSU2UxbJH1p6KhL82J825xsmtfu567thxEqEv6g6L",
  "key17": "3KpDHyk16ssHtfnydNTtsbeh9kYvkaNQgiykud3qJdFQ3tfrQ3Jzsgw3PKCUo47RjA7i6NTyCd8jyz2fubjv3Arj",
  "key18": "3XXpvkAptB2Yhm87Z3yfXygBEjjdz7jmtGyqj4pLDYt1QY6JU2WFFgU5NtU77AqcEXD9GHF3t58ripXT1AHybzAP",
  "key19": "5Gz8vVsunP6meuLqZbRKYEVMhZYGCSZUsfXoFJmbzaHXuthhxkwATsjxwVPB9XD7HpjHUbjpYLijtvSXLwC6XN5S",
  "key20": "5UXWxVvhrSFpWsY3xgqQriWi82mws2c8tmUFAsqeWF44ikUU5q67LLN3tJmjafVKZpgME1Fikwz51dTLvrNCXsnp",
  "key21": "4rErLBiRDpYRNuH3UMtgse2mZ7S5dEVYj7jWixxsiRHZQDybUGX7yBXviyVyhXUGUHb13s1m97Hr9cANGayMmQof",
  "key22": "ht7KuJfQkKhxNBjCWVc3eCHRGvM9DvnmBKGSWzqKfSqdUFKhGsysYnQFm4XyFCVTHgMzxYsLPgzYgh7jVp8j1aB",
  "key23": "49LmYnsvD2BY12nNhmWCCFA1nSdBKwhRNA5D9JFcyjQ7iDm5XUFm9sUgAoZPgc3rbYUXYJGQzzMcbE55bWd3cF3x",
  "key24": "2GxpMTQVpah1eX5MXbrXR2Fib1Xvxq9csYqcM9VPfv5wDuqGqvPnJazSzVyhFktpq73wrBgR9TKJod5himhE6gs7",
  "key25": "2ZzzZYk3k9KV6UZhAuZigwXC4fykKyHEhBxmxaGk1xaahisDhKSgHTUdumAffA7hjaTvK62SSBtLLr5kgTy7H9PL",
  "key26": "3nMwuyTZPJ8ishUqu2xwXcgRB61M7DD8VsMQc99YtsLaeV3eQ8GQUxBiHJE8Y8ZZ68oZLGXD6cSUYGJuGPV9sasD",
  "key27": "5DunEj9aCrS2p5Be2nqmaWrLLJuEtgmPmwAMSTzHvNs4ET9sKETqqBS7bBfgkpWaNTNPzvFYtEwxU4YjVuMgUFMc",
  "key28": "2Ua3Hy5nkPdn7GXj8xFTbQFtpJdivd5SgRXuRsWc9ZS5EzfzgTsCpBBsVtJa9K4uCrNQbrfov6v85Uf1JJrKavyF",
  "key29": "3KQt9oofMenKkZrQqi9p3pqMS7UeUaABKxdtoJKr8epDPS98WMn4VyceCYzL4WDXSuGuiLt25mMppgkrE8fyHvzL",
  "key30": "5qTbxXgsH7KvaRuGvUm34sWJZZFZZGrQ6NdcjsAa7GNZwf6bFyVStn1cEWXffQLpfxFoZykvXzhg34hL4Mz56dLu",
  "key31": "4YfS95k9NtvsbbqCEYXQq2AMq3iYdqVQCVDWwHSyYNGuD7BK6j1iEJdqKKJabAVaUH32vuBTgeffhD83nzjmfFGw",
  "key32": "5VrbXjPZBuCnXnWHfvSioBab8hU72ZsipPYBBfYDT8XMGTjU9KHsYbDpQzW8UKMfWYQAMh9pXRw2wYkfEAR5Bd57",
  "key33": "6PyCoeMedsubn6roTKRTYp96Hx4gy5KgeQdX7zsi6KdxXqPY9mqdJJkYZ4qxeZE7rHth3kRpb119omm4LyJcBUH",
  "key34": "3QKKLVtie2S8GAeG8Fgj8CxQFTYXUQdhgHA197NgkvV7rESburHufZDNU2j67aqBQFYG6Xyfywqdo4WMbf8Gie7z",
  "key35": "3qnMXC2xWuh4DDcRbQ9ZELVPcC8JwP1kgb7icrRZDAkesZ3QS41tASR3TCTYjoTXyDPLFDpKtCCkrnGUvNtRMn8T",
  "key36": "3VpvXUuhVBhWdPqaYUuMmEaoPzJBCbh5MwDf4JBgJxsBWgTrzW2dBPtbx8mm24sH1ZxFgyJXSgSMG5iLhL2FyEYc",
  "key37": "m6MY584D61ezuppbYLbda1yzmnWvCfPfFLQ8hVZGSLSwGcjZpg5DcjDdCb31siS8D3DG6Ue6kaXeChM1S7LFphq",
  "key38": "2GXScGP5KPMPdsY2hjBiQCgskk4SHTwcZ54vQwD45wwdSwkJG3eWaPBkucJdbztt67PTHaxijCpfeZH5JDkYSPTj",
  "key39": "2Z8AwwTMd6fyzCtxRTFxqxAY7CTitsA8ZnbDWMcjPw7pPR6XDLRF8p85K1pWboxWVPbmEPTD899AE3BzHADzr1F7",
  "key40": "3ooSWaF8DYimk2rm8m21Q5QEbQYHr39BBuPbed8tQCcPgpxv9HkCWTEAzUuefne9VBXptK6kSG9xNoZQubu3pmMf",
  "key41": "4iYqRB4sUm3G7mdeZp2thjXojbmQsFiy8ojj29oNPG3sZqj1FuQLj4biYn6qLtUKHp4xzEaqtiMtHTPMNkXm47XD",
  "key42": "4F7xMD6KVbsNCZLufaLcjtr9msaaQZzSSom3y4R41g5qNK4HmiKarHSRFguyBMXqSt66trU9zJ3DD1NnNtUWtSFV",
  "key43": "vjhRoS4WrHGcYuDpDp1ciYHgfuDrKaJg5LivkBCXzXG5ocYCPmnchCA7baACERpZ77Hrj5MofNrktEAHUqiMZJZ",
  "key44": "627m9Kde38LF9NgjwreiTV1j85dRkGtGBxtMrvfXsSvX6noCHxBMnJYzmgCpbAjL33GQcW1GekEXhz21mAKJs3nd",
  "key45": "2XASz3qcAjKCu6ouQi9GcYF4e994TwWGBwhbzvBzWieCUnk517ubYPrRhyZSZ5N9Xu5vLC9vd64jVnJJZ9eEUtFH"
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
