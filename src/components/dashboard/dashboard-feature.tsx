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
    "2fnnMNCRKgeKaeajmU9czDtDGohxeR7t8ZKGuqTH6CxgwrPuroxDxkW3GGAT6y438JGdb8KKJArFCHWGWdCEsi2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5euQdZJJb9dBz95GhvASrctgJ77jWp4AKt1wdG8hnbUvQSnKSfVoaTCv8JeR3Q84Crd6oKnQSKSGASFBLu8BDGWH",
  "key1": "5obwY2xxf89h4UJxbmbKdexuebecpw6KcSxgx4Lh7bs1C4Rk2rdwmEeqmXYTcqXqdAyUCN1cY3nFmuSbwpwPo4qE",
  "key2": "5Q7REzJfpC2NQVsUaooWXshMa9gh51mvtBtnbuNsnHETKVSbMFhyPCSvj6xbmrRtwMtW8p3sxwGVL45Xmrv8eLBY",
  "key3": "4oq7fmbwZaT58jqciNcYkMHUFGcC79TiS53XMNhbAzeTeWvt7YrUnadv9qDKPtDDtvBAkWdvRNRfscPZspxrcz2B",
  "key4": "5t5RDF43njjqioeMgm9s1AtQR3RE4wkCKXsW1wDMYwU86rJJyYL7ZEkdYTVTd7JDE5oNbDaT6ofMdAqyfcfN3h4z",
  "key5": "SBRaiuEBK3GpTDVvHbQXaGUJjQE4XYUYx9MrqfjispsLJtESsMroxwAVQCkmveSm8ms3Xs1ACqVSpjVYEQx4fWo",
  "key6": "3V4iVRyGUz9VRHjR2LY2zvcY6ZCnYyDRasw1GuDqph28k3bhWTpuSYkem2finvSVmWakZsjow4QrCaipNg4tuoJL",
  "key7": "5nHGyhswsRSzFMJtdTDtmUz1Kf1gnTa6c5AomyLXcbY9QdrPLaZK7LqSWz1fqoBjgJWWob2yztVg83wMrdhsZFDi",
  "key8": "3ozYnmFtCRVUunbsarpHrCbrmiyGHkcvdrGuGkr4W88Xv3kngwNty7AA52ViREgXfgpiWrKGN4nnEvRnG7GAQtsu",
  "key9": "66C2wVJW6J5occBgW5x9JkQThXL494YgZrK84K7TzmdCfupBfQDfy8KKGjibSTWedjTcAd1ShNMmwDjG1tTQsQKd",
  "key10": "2EhNrEXXiPv5uGdLTEAT15V2o2t8Kh6WHcw2zDRbLQmQ3RHDNZh1n8Srq3m1cHWrLCyLL3JeV7kQBocfigJZMErJ",
  "key11": "5rNm7x4jTqEVCWAyZjA3Y8bgkNodHb9KnPWWpyW2fmk2jf1VWKDA85AzQj91E82fkpFKffd8FM2g4b6svyCnGizc",
  "key12": "5zQvhr3yMHfmUnaGV5tUJ8QAERUB6w5e3u4Z9HFx1rGR4LAXuL96fGpYhuAnV8CsYB5fcPxkHDLLAM8aPSqshBRi",
  "key13": "GX4wejkCnf8NmuEbAq6tChHwVcH1mF7r6vXGLoMacSjthx9xfWXDDZcodsWAvkPhZGZ4Xo43ocNSaFizdv64p6E",
  "key14": "1jQvRZ1kNrxQ9iJhAiPCE3hEbdv94icycWMZGKrykFoKPJBR1GBEboEMfN9GebzhgWVA96fRT19JRY1zcqmUsY5",
  "key15": "3bHb5ueyGtZBq7wwfL948jcXyhzAsexE6xkmPx32LL2a7HxRabLEAp69vzNJKeQpGMjnKMaiMpY6qAGo61hqg3mt",
  "key16": "3UX5UshQUHXutPPw8PBxGvGV3svQwMFez2cRGGdzPV92mbSHGcH9XYDXavLhoSu3fGByJ6PLQBxcMNaVitTnjrmq",
  "key17": "54SwkUb4qY6s7YbwitcbiUG3tfkQuLp58HspYiKm5tWrhRzxCUXQZGcgyjWizir1UNbGcHdXy8Wcv9XF5ASzcZNz",
  "key18": "448Jmb4ArqrZNFZFfcyurFcpRMczkBfyMiw8V7gEDsiAVwVktNsEkFG49MfyVHsnmP6AJx3qAqHZeAdrKJJe6hVJ",
  "key19": "2Auh7HqbG4ujwrbrkPS6Q2UUyBtzMCs9DbBvn6Kaq1jwvkk25dMzVe2PgZhs4cvUsJV9KdjSzVv2fJuQw2FmscBp",
  "key20": "2ewCNgVUftx9jwai36fw7aZnzP6t1Fc1DDHSdt9tp2ZWunGKvaHCY95ZCa59aH7DZjTQboUmtwwfYNBsir4UK69V",
  "key21": "5MtaLFSU1KUt2R9SkB55JgWDrCFimaRpsueCzpcukHpGEhctcBhA9BWrkBbbyjNSiNz8CEeWVHz8ahDTDA33vajU",
  "key22": "3Bk9hGXM7uujcUqqvVNG9jRQxjVfuwPS1hihk87fQrLFkbTb4v4WaKyiKf67GKwfBQ5Ay7hMwQDb6gSPejmuLKCa",
  "key23": "3QhTBTsZPjD5akVZ9bnyk5XEHPUffrmidMKo1jGS67NsUthnuTubkMfDdpmRtT84Y8PFbYvTp22Lo2314Akoupvg",
  "key24": "4fGhkbgek3fwAod5SaRcXqAFrM5x55jZNZQhZkBdrXnRgMCtkz8HMGvDYyHtNbkoQ6ssdL5F6H8AQgMitUr5k82f",
  "key25": "5thMTx4o6Ri57RURwH7EvwLF1px5MzbNUsaNVQJfwxDMd9LCyVqPRBLUEQwFATAKnjZsoBWdxdyoD4Yxxu9erE3",
  "key26": "4uiAxC2t2ncyKeGXhcHV26vmUs43zGPaGJxfe1JbjsA7tLaXefdiUa7U2EZLQvZqj9aLTtSc1dicHpx3n68qmTaJ",
  "key27": "2p4veiTH6QpNMUmJXkkDzYZuwV3UQft6bCphiD3Y6eFt2NXjDttNqSMxk5L7A1qQMewLALanGQV2hNkS8m17RfXr",
  "key28": "5BdgBMbeP65VDusv4Fu642LCrHfRiJnggTxThSMxgRh1hhid1dVtjgaBhUidXnZzVjDVDNfgYLuMLGdxCxqCVtYy",
  "key29": "5PYhEBFDCyxbgAzFG5vE3cg89Ei9LEJZm415iQg2QpwPnqEBzWAzfMxjK56QHpxhsk3cvf81cwHhvSmcLZ3FX9xN",
  "key30": "363RGnkTppRBfiBoRLSaBMTmjJF1XUDRDdxKnDwuQjrWW5aLSrpGJ3z5iDYizCZkhmPh21wi2hyagvuNg1sLsT1q",
  "key31": "4dQgKGoywCVo4AtG3ptMj4F6W5uAADpPUjWEmZveUyPDH93nfDpUVhJKpPrQnDbwULnYYBNJHs91wBU4aHHCL6TZ",
  "key32": "2reEfGxJZ3DBs1CdDpzSv6JGGLd3BWhQeEH1sUmYFmDSMhryN9KHzRyJ6dNxmGnXknWsNdx7PPpywBpL5KYwjSKT",
  "key33": "N2ntpQEwMffzFBJNu7VVpGvWv3CXvn8ciEFkdkkfWLCbsP9eLBi1wV2Tur7KkApchZ9ntKnWk43VAxiE3pepKR8",
  "key34": "3FGwLDoW58zaoqckovsuWLrQDyR45cja3y2U2SxCFXXMaS3JH3gPe6SdxeMCU2VHx8yHpZ5wyCN629yF8HC9cH1n",
  "key35": "2gFS1TLtTKQKMmBnqRshkmaYKmyEcoH7x5hzjaRHTHmHhFVM7koXxJj98rffar3wcUhChDrfp5W2t38SRJRKS6dL",
  "key36": "4o4NfVMUEzRRCzTzdVZ1H45wkQtuD2PjHgX5NgvJLjqFKirYJ2BBg5S8DFQkiNcd7b8P3ExLf37rHEAAKBhD8Lh7",
  "key37": "4bMfmmwrThWBKVott8Pc8eDFbZGa8gDzsNGDGiVj7f18C7HejzqpFQThyBLsL5gfDT4MjEzRJJfcsz5skZApRXUK",
  "key38": "22WDm2ZvkaN5GVjui2LyrZ4b8CzjCUPivScCa6XfREwRRQZxTTxezVTHEU682zV8u89ZdJnAFEbDtj87Pd5VGuaM",
  "key39": "4X341uP8H97sFm5UgqSvY2ZfvcBkjmUoNCejrUnqE9VZ5HHU3fmcYxDpX87vtjqhRqN4YTHgPdWWFHWC7TEhMp3y",
  "key40": "61T9pcUShqAv5Emq7EqvNp1YqAnPgtPGaFkgMX1mLusEaBuFbKhJivH88L5Vm1Rb2ARznjJZrUkVhKogsFmLpacC",
  "key41": "58Tp12sjnaZHYjzr6Rydz46gKLXmpWBEFUhNyucZftfW52amUHiK2HULnzPGLrdJKFq3FwMdd6ZqzWtoA4mfEB1w",
  "key42": "4Bok45Jc4aqc8YsFdmpveoVtaQ9qqESQAjKPHYe5MurNLaXWXHqQQYwygYFwiwbJZZttp9N7tYN4LkmDsrXRU7AY",
  "key43": "49TQi7tuGg1ev2CTZWEfg6b7Ujgt46DnTMqk7HRC3HDSsmNQk5RknkUMkscUmQWcNQ7kkNjWqBXEUERqGVrfnga4",
  "key44": "2EmYxGTKsF5AegCms5e3vDnvHFpNhBhasJH1x2kThJXex3VUDvRcngBN7ZqeGVU1CdgPyQbdi6qNdP5uwsGCKwpu",
  "key45": "2RStJbsqx81B2mU7wRnE2r7qXASQztTTiRHaK9zJCTQq8ZppkPUgBC69KUGL2BLQUTz7BYQF8WzzjPozEU9o6AAD"
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
