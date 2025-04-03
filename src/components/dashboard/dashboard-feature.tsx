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
    "3mScsgEscuUta77B76T4pEUwkzyXCUNdtqu8gj4C7iWSyvLt1QtuMvBgjAFXLXZXpv9jzcan2ZarELQ3XVUecoHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ccAx1pt5AQv91VSozQ1qbYb4zEEjDriMWnPgU52GxYuZZ6vrVjM8X4NjrRD7NDar1LKWbWaG6pAmidQMChCbqF6",
  "key1": "b5pZpJYP7en6gNKomZRLgCBSJrGo4CprJbcnFRF8dAazbMB9uMBeGqiuAwN9qXY6Zr6VbkVu9k7TQXzN7TNK5Kk",
  "key2": "28cnRbmXVsa3DGChB4oewzRZ7Z3f7HAnyxG3enSi49rjgzXp8X28MsYRd7h9aBV7HLSQkykTpK4eB2RCs8P1uUyg",
  "key3": "U9HUVZNSo3zUzobewm8KVronJm9PLFuDdjMkb9pCD4BivmwyLbf1W9ZBuWv2YT8DK1H3EmfTReuVCaHzqk6A76Y",
  "key4": "26P8hG6e4hmbGHDy9e6235hKQQyDXh34sN1fZup73cqi6zVUh8E6cusD3DhR8QDNmTEKGFunosVapdy1Jp7gXFyg",
  "key5": "4Vqm53hzWgb4DFV5qCVHii9qjM2BrQXQ2eEFGctxeqRynLNNaqKwP6uLTFhDYnjHQiTRMr1JAYGCDdW4fy15Rifx",
  "key6": "5o2V15TGkrsKTeWzTELZQx22QL7KfHNucYa31nrDB5sLwu9eCvp3fYr463AjJva8s5h7R3sw1wrf28m5uXJ8PaQC",
  "key7": "4pTidE4D1juF1YNbtfxG5AJxDDY1sguewEHXw7hXTXbDYFdNE73Uk9byArahwbENjhrDBxtWh7CYkepUcD4QyB3H",
  "key8": "26N8mh1KDL2DJGSM6oF19oFNdujPFrTA97iJhQNCSvUdwiLCt4aJd3xecBqKu2Cp6Dt3wQqXDgNFZVApeiDctw2X",
  "key9": "nEF8CK8LiHQweqyKcH5d2RhxXtNMvKKww6fwp2PJF7Lq5WXab3pQHbR6cTHEfTsmf7hNT8QswGJny68YYHVPoet",
  "key10": "5nXArYu7AxKGAPJ3VqsK9arxShNjnpb7Q5fjK5QHNkwDyvQUrssavmY8DX8cMY5gdRXQDAWahR634XgzzRibN9Kd",
  "key11": "aXLuzwev2vte4nsykipkqw1QN7TAAe5oLxodrY8h4BuEmab82rnocPPp6RWNQwxb5hF1yhp6UnDHpyYiEMCWPyc",
  "key12": "5E4zG9VYb5YzAXFcXs787m8RFDWC7R7J3AGBWuXY5XkRuWYP2CATmUd8yjuvfDmoy7UtzNy9QrF3MVueSSYL5WM3",
  "key13": "GtgQi6Q8J1wwBsAsenaDE4Si9wgazfX3M6v6trDgrG2aeS9YytGtg1UryN3YtyWSghTZjivukekVQBfspqtb19c",
  "key14": "58fjy8WTUMGHX3NWaaZMY6uXZxSFYri1zZ1x46AyDADdTh19P6FbKVhF4YQZMTyfcZdY2BQ9u63CWUyisPoYwP5y",
  "key15": "N9epws8H5EU39L2shkJDUQ5ZSZFJuV7ta8DPKbdSEra2o3DX7tEEkFSJajbzoSEh1GS5CyyHdgqJDK6opY4wTnK",
  "key16": "28DbWe7rAQYCbetawpogLXeD5S1GSHkSetKNPNX4i3o6nBWjYC3gsYBcnKAHETHdJszWwT8VyitNowDsZ7FLFQDY",
  "key17": "9KexQJaEBgeZMkbwQ6VvWHUtr24pbnmyBFn3ww3ebY9x3KjZ8mL9Yq6xJvc1bonYqqGAUWeSE8aGi6TyE466Xk3",
  "key18": "iatjMTQgF6wQGhpiwBC7J8BQie6BNsQkUVMQQkHBc8TBATQTCtMNahzia8TmRiqs4i9qdMzHj1tyffav85PimyT",
  "key19": "9ZZQnfE1GaZn8SHGzR8VuTc2yYGuGs5HPTZaLugkYtK1HSc9Uh9oBr58RngnEioRYt2YwYrBAKVeKVKdwGfE4kz",
  "key20": "5cKhqrvRfNZz26SA9Yfuy2bpPuY6JwnLpvRavNscFemGcJFL7ZaVoZXaueAik5cDqzp1mBeQbZqkjaLHsmd7xZQR",
  "key21": "4QiVjuXUcxRq3NzCGnHZ4kd6sK2ecxAyvGRfo3JGREHvQycxdPtDsizgThsUkyqdZR5hht6XR5m8sTubSFqocFz",
  "key22": "1zh9nuRiw8CY8PLaPTdNYKJmpnJmTiCJ3JE7SNf4LjQyjhXjuCr8mNHfHdpVnn6EMVXsKxFShJK4NWzQnfvyF4F",
  "key23": "4NTKy4GEecCx1Vone6UyWZozCvpCsYn1io5cUMTSnk41perCJjRW5j5QgxMmUjcz8KCoMx9qKsoRn2PqQytoqy65",
  "key24": "3kGfwtc4UJwet35VFs313i3hqk5BkTp1u6t1LP4WbYauvwP9qQp2UyDUSZHEMF1tthxT6vyHefGmpNVZSHBYnD1j",
  "key25": "2RYPerf9FaQuwu7U6jEeGkLBukqwXJVtoJcryEJtPEeUm3EgoaRjjFvwfDnvdRWkQqp9WKugkGgVyBpcJbProCtN",
  "key26": "3gBg12abRhqXFFvXE1hjkRg9CWGrxECYzjXRApxeC1fzrVrtpVjAmZ5LfrMrHBpa34iko1RqGbXSJo3eqcnXYjSg",
  "key27": "3ywJrVLF77c9o46oP1p6cVnf27bn6ybgvJqrwjgmRqkeHtcKLdsQxMiuu3k7QmEq1ikHriiFwrthsZNibLqmQoXT",
  "key28": "2rtgB4Xu9vjJSaRBj6Af99u4RKtmfgH4DCRfpsaNBpDz3FFfhqGPYcDMeKBdAYgM13Nm1j4MRnF8JufsBu3gBseD",
  "key29": "5m9sDvboTtPuVVZ6Bg6XRqQ4iisGdHrDzfWoanruKpj3bHc8RGnyEuzy2udzqujpEzWJ9RizNagzUaVNwe5AzCPW",
  "key30": "21L64dyWqJgU9DyNU48qfWq6Qgd24TpBsqA5SLtzAHxNzTcfaGNN3r7VTtt1M2LrQnejLhVyhqqVmEhRcNzVXRaS",
  "key31": "2NSaMsbkuxt9oxQTgWYCXjXDmtBvkQb9GixZ2WvuawC4jE7ZSHzhfcM4aYTjAby7ka1YvaqPHZwGVacSjgU6KHgk",
  "key32": "zjvdt8aUMWnz3pYM8SzUCdQNWPkkJDWZiw3JfyVR7U4vqsMBKmqPFyaqeuavJRg2f8MMvBDbnbqhSpZnx4oQMps",
  "key33": "45dkbPWgWB8MzoHBgfMzjzN9PN5wjTEF7tU94Lu3mvVXtJTrutMpF7S6DRWyxmA2PzFbq6CmYeM1d1aQ6NyBRMLW",
  "key34": "4JLMU5aR5u9KVfCmgWrM9XSrQ6XwkpJX653dBbhNwjKUuJUBwTRUh3oDhZbuHNEDNW59z2GjGXfTPLHyzQ6v4moP",
  "key35": "376MVcJ7KjF7BPSDcnM6zZbJRsv6duTVaVWat76BwzZGzEPesKcy8t8RUuh2fqhvXGh9zqTcJUtXjnXC15CYtSBk",
  "key36": "5cukFg9kx1HG3EYMctSiNWp1RV64SfGN3hGoQMupwYCFnRnsMLcjUgdn2dpVt9QLuzTBXY1g35FBTuyUJa1GZx7Z",
  "key37": "48rfW6Sm7nMZv7vVUNbyhZA19GkiCVvJikAg8QJcCN7kvUFWADW8GgZesRZmu7hP6UHWZaSJ4p5jc75XACZKvoKs",
  "key38": "4Q3Umu2smznbtCJhutAHxVPmzfpocUhVMRnpgxNmWKo56FE8gGKf7nbTE7jy2TNsHRVZmAMWhdhoF8CTp6aLynJD",
  "key39": "22FZtLNAEmxNRyJpDHmaRZoEDzoUXoEDFQaRbVWUxByfYBMsp7JyFkgTyzYdVTrYVzrZrWWoGttoXr7Q68SuTeuw",
  "key40": "4Gb7y37vWoPXErnDzX27J17MpNae9TvQ3yGnJFsYgQbuaivCzWkrTzgfFABWKa7o6MC3G5gdrgb1apdbiHH5SFh9",
  "key41": "4jj1cSvZ4hGHz5o3UasdLYeA8r8sJnvT4XMmygFCqEVRfRdDn7FfpW8yZqeN1M2zhFhzy3Qw11C8oqfii4EKNY35",
  "key42": "3K1JCULypvs5N2iXEkHH1QGhR9bDGwoxPaXTaVvJDDbp9hyuSgi9nGfkUHWUwCaP5ohqQ1Q7Jk2PrY6W71vP8fWD",
  "key43": "3N4Rek743vautFD2XjJWfkcpjR5UcieV964schtg2Supmbxc3HSA5Y5ZKffcoPApuCwLmZKRdXmKrLUZtxGz1ef5",
  "key44": "33oN3K2eRuPwSU3Q7xmEnGpqYwfHSGvXxTQxD1qjfDdVHe1r5pDd1kBTDBKfEK6pfhSz41zHj9frvu8NRyBc3gnB",
  "key45": "4nVBrj9MV4RxdFMMpx8UNAVCAzgxLsmyHphSdzioqXikVVa3VKjBTcV66DdnZG56KMHU7u1GuR7iu5JsMiAzkjzy",
  "key46": "2aL7MXuCEk3cC56va8ayWcQhgZJyMBs49wqgt5oM1YhTTiqG1ok1XQFdGbMiwUsn6zoRSDpKLpy5qiaKdvJ8SNre",
  "key47": "4nqfeAq52hdyjaEZcQJNWwaf4Y9cxKBP9SknRAD3KoFjfu2SGb1XoA1NAithjZvJYZfRGTrHFGZ85jesCvjXNsbN",
  "key48": "2DCqutPggTviRaFAVwhWNbYinPiMqRucfyEvN2ohsuYDWiD2NGgn6FrfQf6ufkps45jSXS4ijpjgCt1rTuDNg3SW"
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
