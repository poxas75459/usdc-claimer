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
    "4F4yJe89iE1cRkdq1oRyrrdUbFwMen8GjZfeEKkxeHcumuWfx3gD72EZkhCK23LagXQynD67RDYXGapMBxp3YYci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CNAh4TEnXkdthZ3D9c3BkRFBCqD8HFZR82nApHNHUzDEx3i8uVfhbCGq4aBWLpq6TrHuoWVF9dBbEbGAdByKoJi",
  "key1": "5yZ5Qm5rT8WiMT1yLPn5Ar3eMohKEnb65CQNjkfbPeoNkpJBa8VpeiPU8XsVm9bRPML9WCvPYs1PYBrUd6SQxDpV",
  "key2": "4FBuKHKuSAGCU2d6JcAi6QKUaQqSkHC7sskCgXa1nkhtFZ3inqrqReKWU8XRF4fQZk3BsQ9BHbNiJxfm2V3vLAEg",
  "key3": "4Rpze4hYH39n3juM13cCKYqyDtsaGDWPoHeeZKqC29V5vJ68KjZUWfZqgDew6zvoJHmLfJeewrhYmGmGxQeC5wDv",
  "key4": "4aiXJ6ASTKZqAVBiCPN3vaKz3b1xNJ5Cu8NjMrvAKMB8wpxfJb7Ae3sk28US66M6oaHeopHyS6ke9Qp5TfcNoumP",
  "key5": "3i1NGL8zQTtCypBs1JjCZ8uiPKKq8TvJGv5VxuWBFMdmRCuWf3rgScehTT924jUbgQEqg6WBDgBLsA4Jx9npVe6t",
  "key6": "46c2ktwsiQ4sesb6F2ZViaNAm9CxsejNsSyLLNRWYEEofoh5Cp3ZevhUL9jY6pwk19GXWJtpLQrEHavdCoeZM3pD",
  "key7": "2MSJpvZe4GUvyuzuXPVtw8ZWXR5o7AgHBQmDx6q2vfUSLQumjPDAgR6iqSEioTxCPgAWe8x1srLMyJ2zMUTq3xLq",
  "key8": "33f3SLxtUd6zCzzJ9oQbomwt52YY5whiU5etrvGRo1axMv5kCjMAgse7LkuQtwZai8ky54Fpti3kgsbxnt8RjMbj",
  "key9": "aUqeiVYHdUosV4GWXjJVy9yeAssaBZBaDrje1qCM74grVJh9hKhjJ7eGGTmtfaTYRJDQWLvhKtgBV2V16nLDudB",
  "key10": "23nrwhLCrfHLXvJBr4GrDRKhvfHEECUAzqWCC7aEWGZf2ABwq3U974zhYNRT1zwHhDqDxdMQxe1m98tXgD7bH8Tv",
  "key11": "2SBjhWSFuThrZe1q61ThaR5UJqnEtMLcp5oDtqym3HavpFr4H9KadurC2gnzzzU5EvzVP6ypcUqkDhkmEM2c3ihy",
  "key12": "5yLj1ywPDeyhZZy5EBbUDbB6tY2AykYG9JQJ5j2eLVt9c7dBdnEA6vbcApWmRTigpw2JhaXfgvaVj3Vbv1WSNXWL",
  "key13": "2y8rext29e2FWDro3Rv7VG6MefHG3gwGzcDKdrv7qL436uGpW3YxD8HhSbb1Dy2QSQ8vfqBSMaBudgFCRNs5mXsg",
  "key14": "4du3HRXXeEep4fAyoVCjVu1AoootqhX8x1LmK5GpLUpbnCWuacfqjxhDLHv2rGYf12DuNzAWWSNELDdSZWaAbmGp",
  "key15": "2W2771S8A1AAKAsRBcVYsN62nfqMFwnxPu3mAMfjfP3RdBwScwn9LeFqqWje96q48GA4k9wHYF6HmdKzwjcgiJWV",
  "key16": "4cfhtZpruEPAwD8xv257Qes2MW6nCUCu2dzw4dnDdZRZKyTYAwDcCdraJa3FAfEaPGUbxC8DFTK541Ga1mw4MmQL",
  "key17": "32DuBDk83yH68gXGeMQPwCfGLjxPymLsQQVvf5Ao7TM95BRZc7RfxYxez2SJPc1jyxcx22YATG3nQpM2eTh5R9vG",
  "key18": "5Ktt3VsbaPRxdeRruykhxDRGfMyBreFbnvSY4E2GLtZ8YgDM46v7sSRGKuig9ZoW3yZ7WBXox6imTT4JbiCYcEoK",
  "key19": "55TgjF6ipedffvXaSsP6KxAxN93LsciAeb6GJ8iEerfH1bJca92fm2y6JhFTEpU1qt27RdA9yqhhzU57A1LuvnMt",
  "key20": "3MHBc9Va8ZeVcm4L6gDSrF2EimqLLJ6hcG7STywzkrno5FuNR1VhLK4SY8eJF4jLDyY9ZFd6mCeQ6aYjH9QAaXoq",
  "key21": "38kv7jfqfjoY88c68h3XJcs3Ao8CCZmYTmWvQ6QqiWzwJxgwixjusRZaZftgt73yLDTzWsS5X9ooVjLCgTxsyCUE",
  "key22": "ebYcg8ETJEuEAVU4sS7e8BhhpRdisJqsguvDCttN2tczZzrakGf43ogTJSMg9ZJ9Ak3mpt9VPHuZ8EjpcSbsoJq",
  "key23": "51NNZ3K9FpgfuYWP9taGqaCXy4QMFHAWkEkZ6NhQnjAEGWv1ZHCVL4KWximEtubhAjF9cWejaeFNv7GTDerCdH7z",
  "key24": "3KkrJ57cAokiMYxmCXnSPgsPp2CjLgaRy6YrP8oiVJbPVXck6fdxajMhnN8KkwDjGGaofXdTzVzx8yvpZo4L3fJE",
  "key25": "42paHEdEvdowA6sPLBawfeVoxNRTnqXBz8oZdZjPXyGqUCtjhVScYAX6DpTCaF3Agh7oWcYHzQZb3BmAdTwPnCBJ",
  "key26": "2wSXYfMij4nt8WuseDvN3o6eugx4ai5y5mrw7ocUCU1XtbFwYod8i4CorYPL35DC8C6yXbWxYd7c8Hc7rKazygVy",
  "key27": "5LB2DoAP8W59gjE5LDPGiLNjZp5urVjhVEuNUU9tFmwo4w8KZ2xzjKRg1dovVs79zD36G8ePCz2xRx1Ang958iz9",
  "key28": "5BotVhNW6pcKNo4rRScJJoJ79xAnFTCnfuxw9itMBQ4BZRzdLwPon3vwBjpeou7bnMLBtebqctHkFn2uVBdraVLp",
  "key29": "5B8YdzJYj8TNe35g6UxJRg1NHsDzLswsarWH7moT5ALZVzzsQ8vqjewD3VXrmT2d9jYTbndSkcfCdxiHTgMhAwic",
  "key30": "43Tt3JzavXMNP2rUCWtK81A7WcCSAhnLFSRdYngfiyEthZH7NWWYprkhVbWZS35bXmCWSCJSiEE6Q6eJkvBJSKuz",
  "key31": "8bZr2C9PtydKQqj9tE4JyrWHiJVoZyAF6zgg24mmUbzL78FFcfGsgmT2fXvmB22va6KWqsUsJf9hcM7Ava2Q8ei",
  "key32": "2Yx8A8ePspBgCGgDhy5DFtbw9b3RSCVLgfAVZqfhPk3ZtR7gm2Y89xLLWvjcmnwAQCGzsrUs2a44GEGJFUdwENmW",
  "key33": "2an1UwjvgQABn3gibMAgXHn7tSSj5X47gbUSidKFJqj5QHFR1aB5XXNKaagVx2fDCXyD1UVMeAaGhdet31Fm1Q42",
  "key34": "JkRvJHBcMU5SgELzKZf5F6E1DJ2TsTxFGnXPKmHwHrsuRNvPqhFD4MpFPuPPR6N4V1MKQse6mD5TmWUyjQDKvXX",
  "key35": "61X5RPEAask7wFoNq6yVWJgPXbMFG9yVKH2eySe8x5eNjrNwjwjCrK5qi5y58ZGcKEpzrR9AHkMX5ffxsUe7fnKE",
  "key36": "pZfbb3iuYwzrAjdXhCERp8BnuvaahExEPWQorhLiP2PMwVQmG2qo3QcuHth7Zb4YergYLjkw6bpmWuX5yUGAVNp",
  "key37": "dZox5SLovnPax8WBjvd5BfwnvpFhQaw8AovmvKYiz8q4ne17rtzpDR4b5Kzj3CXxvAT655yV5KKr4kf6Rg83KUA",
  "key38": "3C4XYDfmAQg8WrUjhtac8zjAvLuqDp3LxswxiiURfeSxwcfjjEBSjrCcCdidEjM2f1hrzC1bhrtFEqbnDyqdMyTL",
  "key39": "3VeJqA3EP1dBgEbUXcGdA6NqibfQx2jHHfn89kkjkAMHzAHGycEKfLQVbJ8ra6qALudLZuE3Y24kzVGAzfXGkWoK",
  "key40": "4dKgirDKESQq2tqo5zriuR2hrZvk8jL8j2tpcUuHGQfiXUSftkRfg9WguJjcomvGuTGyBACrQm2JSNuF1nJF1BfJ",
  "key41": "5SUBWvAF1RtcwYU4oUv97kcdpU96CYHrhKfTHyy7GE29tKjCTxR786CX3Ut7CSyps35sMDpnpHCKgj8ZnQAs87ev",
  "key42": "yyh3Fkg4119kkz2GywYmosBKmwpN1XHPVRyoXy6yG3udhLqDGYj9LPdNdLuvaeUuRsonx3wx1r6AcNNpqYCkJDy",
  "key43": "22oAKqKqLxq7n7Aj2ZbgxnQnKYjrrRfTgxChH241Wp1qWuMRRymNeSu3WwPvZH1mqFtqFMyyRu6gEfzEcRwpBywa",
  "key44": "3zgPYeMnNburAx7otzoRdN1x7E7dhXfkKPC4eobAb3u32Wnpc9kugZLHByMLjgNcYmKxC3Vi2S9PyoAhekw5Dpjh",
  "key45": "5tkFKh4B8SwfAJTMCYqWnU6Mpq6XysBtt1t5rFcGPL51KzekyQFugtoCD2dFHBHPPpjt8GKqX8BPr3QGFfbNCQVi",
  "key46": "3xewWsfH7hs1DFZ9bkerUfCYjLsG8nruMsnFzJRukwwbNbttGnJsWbJaVukRFpbGSxn4aUog4HFNBJcrKkGCLLQu",
  "key47": "3KfNo3h9mXzYSbiht8BTHV1CY5Jkv2Mx6QhgWjaDTCekKCycQ1SH1WRir38MycX8VE7T6vsZeYbSk4cQ41EMmw39",
  "key48": "4UJaH3haQvMuB9QSXbiTrnwxxGV3nsGn1sxD8bhXWvhHwXcHgDW43bMbtjJSyfUsVi1k85y7W6pxkUGMKqLM5N5s",
  "key49": "5xFkWximrWXWfWWevrjAdiwscFaHACgtnQnhw9Z8CXZodaiqY74E5MJadqh68m8EUfmbWgmAJMjLvtpodbeYkceC"
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
