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
    "jrdSurFdmf3TCFDQgz2A85D2gLp3wG36ZgdU3KvFjw1EvH4H8vnNZFE3LB8ZovRttNKyVUjmdDHqCAfiwiEoMLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JhDkyGZN5durmXgP2oc7fkTQ2FFL69tkG3nNPxh9ViN28Esn62knYVHNQMETJzfrgYdcMGhAZLsTH4uETg17QYv",
  "key1": "3vp5i35igbdqU4wzDvcrbxNpf3udFiZDjB1XdyBa5KYKPmrjJQnFwAvkJKfgCmtaWpk9CbLj7JTJEXePAX3S4YG6",
  "key2": "TYmpUtkCc7KZHTJ5e79czEu4EpDsMDShoG6TSRoKQXEMnHUEcFcgkZ3ypFwkJVRuFGLaSFyDaN8pDQeZNasd3cb",
  "key3": "3gjXubYeVf5hbsuKfp48WeX9spF5VDqVcNezWV6nQcC8sNLJJECQiCHvUx5bdR3ZCabe2gAYHzGancveHNpjWXsy",
  "key4": "4uyMMXSyyoqYzeUm1y7MgbHwnkyXC6t73npGn1nP9G6cPqVJtwYfmnRj8zKZaK1xKyVAvJ1qYcXHP5dmXZvsVobU",
  "key5": "5GFCt7Tc9E2j3CZZnuHpGH8tNpktbPwZM1tvHfwv8PiVfqdWrTGoFVEx177nQrtARB3bcDXBcAfaFqNadm8eqjBr",
  "key6": "213LbiTjnPH1ZjJRr7rmQS1Bm4TfW3iEP8RwN6eC75UU2fVsxi7VshcJqmLuXetHqJrGVdtBW9dYKHcch32XDdKs",
  "key7": "2A8PhMbhGfXsWwJ6jXHPztYN8MFtbrTLkcw7sk2Aq5qYNE94eH8uTbvM783cx6MBB8jwCg5YHMMKMGKB6E8vmLyP",
  "key8": "51aUWtDo9QFNGvn5eJ8xKUsqx993hMf3AaX7zpyaFBqFgoVs3KyFY7jgi5Lnyyqv64o4XkTJAcaCLvvKatAYnhCJ",
  "key9": "396wXQBwgjWHghSfSjXrZuNztBb1YSEB9fFjgHf2hrm588aG6hUUaCBMJ6b1pfWoa9d2EMiKAJ8yQ2x8adLph6Pn",
  "key10": "3XVDhN3PZd6QLvUexxHnw2Z3RX8FW3hm36hTtjfvV9tZBHUHCVDwhr1GVwEsj9FgX6SYUoxxSn2tAxPdszg8th8Z",
  "key11": "5cBYHeag4xbd4QheSSJRaiLNmNrTyNwXd2SvDGuZmGRsi5Z2xHp5pmzCaZ1Ahx2XRxoBGRVCFhNCEGQ6H8wckoEq",
  "key12": "Pu4S5ZvFetfPK7oHKmemLtP827Rh9dzh8ZKvSw26HC623jueXg4FwGeADTFTCn6fBCKG7fExpJEuYJYacg1XsgB",
  "key13": "3Tg2fzZbJJCH425FANLgZigH9o8VLJwmNisCntJnfwKvcgD77T1BiR65esNNKK2ntuEWwgdqKf8eQLJtGiH3Wrz3",
  "key14": "5P9NeznW8P9fjDev6hAgtcR4Z3jQ6g8hEQ6cRLMYwDWKRDJZp8nrmHJD8shR29eqfFqrS24RAYJLaQoCqygrdaSS",
  "key15": "3cghfmVsDMKv8rNEW9qJa9mqyjxohGw5Zn9X1pt9cuNQehTJBw6PuXv9dF7LbLFozbkfhBWFMtu8ba1aNVVhWAzM",
  "key16": "5jPCctANuFLMYeqdfMdxs5SxrF7XeSEX6iE1eEHpTGevR6uEq4qeurpzKG2aiNGaY4aR9Rh4gQJ3q5WWAEcKCYMa",
  "key17": "45ssKkbbE68eiKWStxXHqgcg569h56QSpXxSvySLZoeCPeFU5XAG7Sy9X1WNfb6caSAEc87Q8f4gtFCLGtnBMcVA",
  "key18": "52VKgGVTKx4rVAXGfur1MHXk8jWfJ1acb6NJDQJ8ReWfAuHbbFqGfCh3oaoCa2W5ZniWMjxqYNedZhWYwjhBB9jp",
  "key19": "t8jNmvvaEpAZf7T28tUsuyvcibVBEu6VxfohTfgDBTu3b1UZQ8NeXGDXq1qCZNXGD2SAjNaERGi5wKvEp4grXEF",
  "key20": "Qc2acN9T9x6GbiyCNJLkRCCPBaYXUyicuCebiq7QqazcJP2qy4YUBVQ9RAhHGiW9SDMqa47BEhNq85S9EJRG3ft",
  "key21": "4P9CkquUnow2ZzjqErH5nJHwmKWTLHV2qL2a4Uwf4wVzPWNg29DWPf1LWHAz5jZqrWTBXbgaxBdkFSi24odgvcWY",
  "key22": "1SyH4vaKMhV1EojSCK4mbdZYfrDfSVgRq9wo2kuRWFuNF3aiyP7THVdNiYPipX74SeR8bNbMS5RWAPSLPNmNuGc",
  "key23": "2zkyYZLgFpzfFKsrwTer9rCqmB3WnhbUSUQ6cvm2k66umPmzmzPewXQ98r5MVvZetiFpx5WHirwFgrwmEkz4DaXn",
  "key24": "5oDM2dR8iLjqGeBtUVBVUUfeWUkZA9puQbCpynEW2AkDAgyHKKrEdWHPoiA9t3ZFrfatxYajGkJGk9kQcdf4d65y",
  "key25": "AnQLwS3Lfcz7Bo97Qba9Yc1QPFKjBcJuN3FUnB2WMpeCPHhdqafefD1mYYCFPupG82EsZxHbgYdRBk18Tq1xKx6",
  "key26": "3y4poRCRQ47R1zGsExvZVdXsAwNqJxmVf7nuDVEE3SEF5z8AZFcrwL1GGZwkiqapVeXp1MMugGFr4fgE1CSvbbT6",
  "key27": "4HyaKcaGq6KUzPPcsV4D1uVeqYCN77mSnKb6i9p9sgL3S3fPbUv1gcjxHq7xA8SCEogDr9FaNJVUmEFsRRS44BhJ",
  "key28": "g3rhk75hAwQF6GoZfHFrusiqLsvwuXCFWzkwDNwyjTehNmHDuQ7qYNCt2J1HAgpa7s3vsNJgtbayh6dd6g31DcD",
  "key29": "22AZ3HGJSLzaFV4vo9mB1t4rnSTKqXW3erPKMSCA6UT9HVmBBXV84EpYyGytsRrE2P5dJ74vH9TQHqT6wJdKdZay",
  "key30": "2pQat7oZKEB8m37mNwjvdRscSXkaUAc4W2VYpBf15pd67iNYVJefew2qHiXnwQeLPXJ3J1QqpkT7t7ccKSRGMyQy",
  "key31": "312RVUm7PKyCsdZwqxYAnVEG88ekYNdcab33HMvQ94Krj5ui1rXT2h4ANQ9zz6tD91vCw4sYhKjguxY7HP6T4Eo2",
  "key32": "5BNLnR4ZEHidcCCHCtMyr7qzB7kubwptogLNY5QzacjEafNLihsK48jKUhBJbsNYtdjUoZtHRm2eHsGshAthrpVd",
  "key33": "vELZeneVoLmMu13y2qkZo6BrhrCeJM4hVLW9pWeN36TmjCjKsHy1NxwpGRLWix8YqgPj4oPPoK3RESMsB1ePCFD",
  "key34": "3tMsdB1WuT4x51XzxkBs43Swajxu8RP5MC7xPx6e9CFszpmAzA95eE3cpS1WUhe4pvZq9PtJNimFRrpJsqhSoSHE",
  "key35": "5eA4EpfbUgr69PJj24QJX71y6Tsf8ykTVh8JGDGh7y7ukaegCK45khZdYGB1UqSugyciQ9cHHAz4LQ6Yuqyq9Fgy",
  "key36": "346LYSzKd4Kan4sbUASkPxAFKU4auusLfB7ck9DhxAdqKYLtnyAZLoGMi3FoQFyTe3SsgC9N3d8hcPir7j7BZmzy",
  "key37": "uVx6Je1bKPAMy9Z5Q6vRdcc9LuXb6db8arc4hm9ejGdf8Th91RQSJ6oqYAUGyzaPSskKVF4fEUeAPsnDxebgr6o",
  "key38": "3JrrL15FwfnYX4kKSVrzBfz8AfUV15iXWjE4f6XvFJDpmARv1H2prXKQLrRwoLMagJA8YVUShZxSSFtjVH94AMKe",
  "key39": "hynKCE6SGtX8TiJ7dqHuXRt1Z9Bhd3TbbP4YB14yaxaN7A1meB3HKZWBzYShLbm5toD2pS6DVcurYDAf7TAqgWc"
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
