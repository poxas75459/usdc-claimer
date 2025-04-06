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
    "5cVt1PKENmJzxKpZkh6JAMNxnzRXHf5yGi8wLUKc5NitLti5VdJqrSZjmCcNobxNRWK4C64eN4e1YQRDUeTPbZ4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24c3tM7tGtozY3gDYPfpTa7MfB55FmY6wutEqs577RgQfzGMHKey5Sky7cHABmEnJNYfsm6wUd4euNm6NgVLh1Bk",
  "key1": "56WJ5amVTFK13XeVFqvJLdJ5m5KpqBNcqCrfR1m7fNdmU3Usz41GsWxN261SNn6XzZ8P33sRvYyVi6aFaQUirxQa",
  "key2": "4HFdFKWC9cF4n2XhAodyBptx4QDV2PFpVndAVA48z3U71mpgzK1hWaBmojky8uVjygWKTFy9L5ZHbAsLeJUZoHFZ",
  "key3": "3cZww1NTGR1os9gsVPUtTP6QrTeHfwe7qkrn4j9juxFUaz9dqcgd54JRkE2RrH5A5fPWDaahBFV9PS6kLPrgFwkQ",
  "key4": "2tY9jBHk7qC7dkhh3NCJChoNKbeZi5afDKCmN6Fx69CryLLnix7xo8frZShJXMns22aCT48q1NsCkRhvrEtsFSf5",
  "key5": "k5Z54MLwWha5fdbBwwdQpBrjgSv7Katzg3MCVE5zJgAupFN8xxgsQa7V7H9yXBqNunCMMXq8v1JujUChcQUhcaA",
  "key6": "WUfh2LTnkWNjfpzUkaLjFduuW6hjsvVy6SRg9LDS1YSnfb3eGhJVfHsjC3FxVF9a1AcUWEAcbc5ADBdkVcKe68Y",
  "key7": "5ryCHNW2qttnb758tiaCusNxBxdRfVqu3omb8Hko3kCjYNdWUNYyRkDZfZtdzHNx5FVrrwcAzSgRu7mcC9mYwP1b",
  "key8": "QL3qGPHgDp1hz6euYwvMKmonuS7TgZQ3w1hRVAPaLpfoYgDMgcCeeRfEu7tLNgTB1EPCKVAohBJKMLuGYUz46sV",
  "key9": "52jedJr6CzcwFo2T1zkZigiZFaTprsrYR2QdZasyJTf22gsZTDjHMwNureJGtdKRvTK7oW8qHDp21x9cwgos6ueM",
  "key10": "bEegh1AjBYLuJHXDALjC53SkB7zZTkteTkjknoACSStGUiA3jaXCM9nDvGbihKvnSPJe7Que35gXZmwssacoWg8",
  "key11": "LiH4xsC4786TbmdSVjdTUhGJMFXdpck91brYueVxuMtXWLMiPDX3YvVyvMgojJk5i1zAnowuj35utZFZiY6XVwx",
  "key12": "3myxkXgfugABR3wEm8uyuWf1jPyTDy1nWofp6uFfGxfGiCSBVFEkeS5EWz6zfLLHpMDBT61EQiWdpineuzcaBZ3V",
  "key13": "3cqY7xcmv6V4oEPB3pbJPmM67ZvuuSw6hiDZmVu2W75F791zoevNyLm5hJ5Zu99bKT7nrSXY2vEReoaxwfbo2byQ",
  "key14": "2ttQ8EDKAr4GNm1oFbK5yCrGyVjUFvSMU2Te7i9J4d8f8bkEr9G58WLHvZErRDhpuA7DM1NAM2ALjF92ooA77KJ9",
  "key15": "32Ebbi1WuMXRYygZVZb9voqbanu3N7CfdrPm5dpsBcSZ46v91kbhg6zZXBz6BdmCAmCD9GG4XpRQQ79ZVGx7fmQK",
  "key16": "bRnKYaGj2AV1v2QdthcEsEnkGKCtVkPKMuTzDBKfkTaPACE1urJTNYjEbgsdb5qLQYLFJopzLaEumTYT9Ffbb7R",
  "key17": "387Tj71qoPMhkWhFj2k2Rmd9TMNLNRd7fnFZMeL2JSniZCCFNCy1PvzZDpk732L2VWkpEsmYnmC5FRzPf4aRuxwv",
  "key18": "XpqxggDAtrEqT89SEG1fTQJGsBfj65zunDuGrThmth6qa8mGm9aQ4kuARSFYaNPLzHpfkdr4ZbrG35tmQVrJ8cY",
  "key19": "nAcREzZBcsfoft7ukV5R2eniJ89pn3jZtyRRKVTtGx6CvijoUH4VH1rRLhSJtq6BPQmNKWfSbYYXFKh3Q9xVK7R",
  "key20": "4BtYMM6S6BTQLr858caUZ7Mo4bFv6uVoWY2BdUkDZwFTdHapbJNSAku1R5FwgUxGAvJijasuMSEwZLhGw4Zj25ec",
  "key21": "Rku3mFmypCyZk683t5D5N8KphyARz1J6pzPvcYvJncSdYrorzrYtAdK5KLQwyKFZ9zuu489wV85g6oDLGwygTi3",
  "key22": "AcMhwSVfzepWNc8kPpu63vLJJYSeqxyDPN9oPR65tXwXyoELtQwFBf9Zr2uL5KaoTzBEZRw3RbDyEf4VMPYsExv",
  "key23": "5L12aDxH2HjfkHk1fFnWHf7nAeWuyujHNuXpgNhzRC5ufTVajuCumro2nJN3KgkDVXyr8WRrAvK9wRwuuQyH9FiE",
  "key24": "3VaDVPkLc5H7AptyTfU6Ud3Qc1mYxTY86EgvZ6sc8ka4oM4v8EYuJPgjoAEmMmGgEaCCr36HKoZ2ZUUNnkEtwRSw",
  "key25": "2vFpwDT3TEcfeu1XjpDiBZvgRdf5sGpnXAVtzgAunEjhHqwbGVW5vgyBdQLC32sjGRcMbDeLVJQpKh6qTpA7Yqr5",
  "key26": "3iMFadnS7Ncohc3EAXGGhkStJ4YP9G5UgA6fivAoiocvRWDxRn9CKpkb1TyaBXGzYpeQBy7pNrNSsBBZVKiTuHX7",
  "key27": "4uiMKmu3iyHwLfv2ByeSFijPPzzf97cZYZk9hAhydP17TBEED2QSvf1iMF7evCzNdNRx9BQXq2mYDYv85oShhd7M",
  "key28": "4Zc3Cb1uxHkrDrR3QsNPgPopq7FeGcZ6ae6DhxkvYvdDNevDMBkY8qi6r3uGEX4vmZEi7Y7XM62KdAAgwTevxCKC",
  "key29": "4pADtjFQ7tJEr8CMcqhi68AkTbkfYTYLUPPxnz4K4FH92LdULxGyDHcfVe44vqaJTM3SgTYJyVrBs8L4trxfswxh",
  "key30": "2qEVqFec45LWMFD2JEba6bGq9j3goWQCtVHPUhagU6Zon279PjSScvPU2f4db1agc4VLyrDgLPWrfu3xA3pQwSTC",
  "key31": "5G2DjDasLDQi8WdAuYGk47APB6f8gUrMeJF4jpSeDB9fpC6rfcU8CA4ofZuhx3wDtjcTUU6T1nRc8xZqZnPxsS1H",
  "key32": "2qDkhhqEVNiRXkooSPz4m7cz5KUCTjBEhN6d1CnT2kMPQ56QSzXK8agmh2rzh1xysMG1XVWXtzCvvMf5usxF9ouK",
  "key33": "LkZcrD9wP152FviZ5FDsiUkumNXG9nAmtXuQQ2FnT1wNVX2GEbRNQVmZyGVfnydDBU2mK1YrqSNM2P2S8Qvrv94",
  "key34": "47x1YWbnFX3worhowfJoadcUEPRXTrdvotZX4f8wgq2ApcAEtZXrMnJkVHBoFA9WJQiJSbDU6TWEk3744CUQH6dz",
  "key35": "4mKF1A7SVxC9P82pBrJhJAF6ovKf3yfkK2efXZH6Exp4G4E4p8vcoVaEFcpXuyBpEqT3JLXCnn1pxJAmA4J1xvua",
  "key36": "4GAwThRCoKo9ETcgREkzVcWeQD76szybstQCHKdHUaV7NS6965Mt5w5tPSz1hMvnoEe98XbCFLwsnDbLve2yz1pR",
  "key37": "44LJyUi4ULcmNG4xjBoZdEArNxm2hfZZaqpcCz13p85ihSyfHNSy4jxXjJRRXdsiNG1xhR6YYiJyxg9MscjXmmoq",
  "key38": "5u8RXKfBAee8cxdgHvr3HBCCqzETmRMPV1PpudsasSzxRuaeTxXeizLhMDSk1ktTctu8RBvthDEbrer9zwWYMBLi",
  "key39": "QX8kQNtPYhNQbuqVn6jhBAWcv8AeXaDCQdPKraSZgp2sjkbEg8F4bwBY8zj5txBHXzp5thSrLXrzn6i2oxveCTE",
  "key40": "5ZZbLaimhK8ok8UNf4ixFttZVCPm5swNG728aHUk732P8Qf29DoQFuE4foYJ6i7Rq7bNF2tgqQt6PzqZpv5vDiPL",
  "key41": "61KX9Y94mS6hvDMYEW8S1y3aMJDXgpejMmFiCfSP9gVshbUTSAn2S8oP2QRJ3Siiw4ngbVQs6KgnRZm73KtP9TfK",
  "key42": "2XmV2upmNNWA3pbeSgaybzczYM3n2rGrxNTYookZqKgKQXxKWkPoFuDvPHWAmBP6KrKwGM9ivVpjHztfsssuXXY3"
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
