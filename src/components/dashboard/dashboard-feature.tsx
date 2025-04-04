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
    "brivjYFyajEmar5jmgnKgjmbAdRqP87Zjh6qrKSD6aCEk7JpL3NptZu1TkcqnBqfk4QCxHwc6vVBvpryfJUH34W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M6vYYpzuVZcrfPosrHBwmFXhokecBw8T6NuSomB36JVyGfqyVpEXoVneSYewULqw72qxUWk2XU5pCmL6hMruapJ",
  "key1": "2vwhCvxbG43ebssoUYrQbhZPbfCftMV3LBaCUM3Ue4EQpcwrrC9apfDAi9uXUnUmbHAmBstak7bHDefgJD6kUh12",
  "key2": "56TwKg83oSwBSG4VyNirkXocSJKxC1yD1AjTREPS9zokz3M9BvyLfwjz2Mz7ZUqrVS6GSusq63tFZ91ZzF5LdxLo",
  "key3": "2LyEkMUgft1LvKjMqfXVPzxfd3GJVBPpa7oe87uiZiihJhrHV51EZ9KzBxF3Ko5CGSWD1LomHi1arjpYqFAZaAKE",
  "key4": "46RYKQxNa4oH3767Vupo9GVPdV6tZnQbsS44KX7N6AnmffHzKbNTfC3yZXkqWkgYzwp2SFi29ttRwENDD6TfKXr2",
  "key5": "2zyGcaPFE1wcc2LGWkgkXwFj8WaFDmggigbg5ChFfMdyaAyYYGyh1t21hzx1qPiDGerKF7j9evamU6ELdiMfe2R3",
  "key6": "4BccTPGekqpFf5vsNPEWK3GsLk8LCpwwdXUHDW6n8iBT748RfjQZAjweTkzVJ9uAMaA9YW1DyquR3epBGZLvKWu4",
  "key7": "2Lq48y221d998Ug37c9iyGcXxTpGYSfepPWikgdCc5BpvujTuHcckf44dzkJhbzGrZJ8zNEiS4GEeB6hCjkUWQvL",
  "key8": "2tmqAGDmMbzEWLoWHyyU7sc92tMApVQfMgyBc4vzdHBsAS99UgE1FAKrc4HmRDxyT62JD1y5ngGu3DgwyZq58LGf",
  "key9": "5M1AVU2CACq3CjB17uiB3n6PhFdHvohTjNiAajnB3w3Gpjm7YWqRqaW1zfaAUXquBAZFVxtdoXkYKtUuJNsrE7Q9",
  "key10": "5ZmkGjFAPWKZhGQXJjpbUQbGHjg2cfgAFi7fPH1fL5FeHj28hEqhJAej8e2XK9Gdxxw6yQ5SbKw21uyeZHvjLHWB",
  "key11": "2tKmJDk6kwAU7cLbrDqVU6Z2Gg1agtB9sHPsyC7XcztZKwBkiCkR1c5UtJG4TmFcFNbgGKG5ZwnbDVXb2TnyMtns",
  "key12": "2T1X3T53vd6ZJTk1cMiyd9DzxUA1MxSCuJEzECtpKj9FENYxuC5pN7wiDGCYANnE7EokZ2YzquTBj6hypMxiAtFh",
  "key13": "28kaGMD2xtBhaX5muJ1L5fahkVjiKTQWuQ9tX57LhxuN94LFrLbWVE87MfS8RfthDtPqKyZmUCyWvDkMEcfAZDRH",
  "key14": "2LWjZ8zvNLYhtRq2XqkFVPU2QypwzQpMz94q1w7DA323qZtw47cjcFKSb5CmVwAHRVfMgoExJESM3WH8jyVfc14C",
  "key15": "5sHZa1m1XAxJ57YMwTVVcE7ZTN2nZj32yNP39emRLU1ZWwdfzkTT4wnmKouJUFpVTLnJEtXyd4cWo62FjcTjoTDV",
  "key16": "2pXi8cdXmY6tXACBxsAouoqEtcqn5Rm3HtsxVeEH8RqCuhehtoj7EFQBsYiEWpAKckEN3itiXqbSiDtwkjb2m2VU",
  "key17": "4C6apErUfUccQtu8jbWtxTYtDJ4o3LCS7XSstDKKNJYMFvJJKz3YS2s25fKNNGkfP5QwycMqrAMNxJbTGdZad8TD",
  "key18": "394inNiS8pSgic2WzaEcYzymBnToXfGt2J1FgsjepKMwTobNeQJ1TLzzrA6JNASxmdqTuwUM9xARdLnXpwW8r5Js",
  "key19": "vZ9u1cirrLbAr29xQXk8Jqoav1TFeqqiV3LWMQ98TaSFGHHLknnBPrxdDC55fzeNKk6M1Nwa4NYXQHNaHvSyQJQ",
  "key20": "5my3bBvfWyxVUqYLYxvMrhsMk4UHYE9GxKr8sQxxbWKyaZqLdC4Ga6QBPjmfFfXiUtvpEQekhQxbD5gVS1iDeDE8",
  "key21": "5mLFaRCxyzNbydaD9XwyX77H61k9q6dqQncahxuPunT7aPGQkYLYZ2hds4HRHQckKjB1X44KSoSUs4jaFwRmMmjX",
  "key22": "5PfTJVnbRvb4o26rpmGctwkL8X96x29ntgXL5JCYoLNooHDkb8FnRz5wQmY1EN5N11W4QKeELyFVxHoCRzb4FUmi",
  "key23": "4ycvwURVgEz6zELsSxRy143DKiUyGJqvc9cE1dRbjKo6UbStXp9YG2yigXFW2RGRB2gPTMCZ7QWwFBHh3nXuLSji",
  "key24": "3nMo9dkgpDbtgHU6d1KHuV9zS9wR7bEJZQScEsU2boKUHq2oioJ7SR2vJqdAHFsWaYYQ9d9hSEhRKtnj6xxPHee6",
  "key25": "3qB3v4gPPtxSTta3gnRRpUh5PNQQiPYYWf8nUA9fGKtip1BGeEiDDVpeFyAwa4M9CZWALEYGegqkNHjszkk2QdhL",
  "key26": "3Dv7HdJcfdSF8gw7patfib373X7pvWHihmyUBWsp3UywFnztLRvo9AieiyPDSqATzN7W2shqcNiG4m93XvabSfDd",
  "key27": "2hZuCErwYG6ocyM4JvLYyimw5NN92Rh3ozohQMCqyaWt8rXy7ADL2YA4dbQENUL2AZT1H9P3H7GNtiNsq7tcGqMV",
  "key28": "4YXe6votSMoHUc8RvdEGB8kKMLdbExc2w3Y6qKFxp6W2qyVSCuDLdVTJgb4sBPQbk1xYYxCXQAAEHSF9ygFebxVK",
  "key29": "5egHd9XYA33WqW6VFofy4JdPSmB1trh3cdwBFfxgUfNKMijwJSKLnqaKk1ooaoAP4DFdKJwJCo8R1QFnYZCXcD2S",
  "key30": "2Kgfkqz9nnsgj8xvJ2yjzergZJhbzquFTRSwBHQ4ZjT4BgbeUSddq84wMxDqYkNknMatraLJKtnXUSPFedrynSmV",
  "key31": "62eiA5RXpd85W5xi6RGyQPx8pAj7P9Jf78u6XuKE3a2bEdPJBXXi18w8DZHkEQpkoL4chyEjsm9jSFABmyeG9PKb",
  "key32": "2fvQfMKVZGxqzkCm2v4UMv6w3ot8DszB4a7taEAE9856gCgk31Mr3xSnLMVarN19JQBvexm2bSLBBVjHQk1gDTzf",
  "key33": "9TVgESmYBSSeukZmoCKo6QYogHdW3HribaFuYkZCYR7ibKBBXq1bjZgUirZjdTGH8C5HcjVYfmCqGQFxnN1sxMf",
  "key34": "4YG3QBMRXpSN9SgjkfNjBp63LPmCM72aW3s4c9sSiuuK5FXWmQtXo2pfMmFbyJeoLWoU2BG6X5mxWA4DSuVFgTzZ",
  "key35": "55kgyUsLQGDcNEi5oGqiGTq4P94vXK25FtqNidgcqAeiSJ5M8YFAB65DtSYHLNB8ZpcAhAZSAbBuyMacgnYnETzX",
  "key36": "2h4SiAAiHq2zA28Vj94wf53qNBqaYSexgYCKeATxjrs2Y3WLRsgez3Nro8jxJKUVZ66HyM6uFZx9CNdDCnTxPjne",
  "key37": "5GeJ57sDZaELRR41hYTTSDMDGZfNCzx3NdUwfpjzHAfezZV89yQQL4nf3W7nF1C9sfEjSZkuBvx5MjcRRTrdUbcQ",
  "key38": "a7kHnkqjkNgPzSzJogCPTX1vwtFcbRQ21XYkWuKqZpVF6xQXXJEcDNT6CWeA2Tr5KLs9XF1DWmv8oX6iqJu7Pqe",
  "key39": "5zFKAqcvzVz8mCgPEGv9DFdXE8379KzuBgirAbmSfXbsQCMVQMfDewumVXQscVJMTfDkBMeFL4v9puVSErAtH2sW",
  "key40": "2Jd9u2e9WucZ2NXMpQjWrg2udhPeC4EQ77FDdF6G8vHjMq6FhzJNZQ27ngoS5b3XvrGbdnAihr21d2KEtctWF59n",
  "key41": "3kRimd2DkHqtr8XXFPbYj7xkW5dQHRkgQueGDa9KCT647GfNyw382VapNV323fPDeaVXeEij33Z2RyxCLaey2q2f",
  "key42": "3ZgngNwjQxc2mZcu5ro7Fs1kdhZVfnB2yPYSZQi6kvXSLGFGKkuLBPcPYsyNUrmHiMt9jytuLaYcVCvDSn6qabqm",
  "key43": "jqPJXaEDwcnfx8zUDJnBbzjcUHizQtzTjw95y7yn6DhRPsCwAo5zU16rmHCNnUcpYW4geQP3YzatxvPhxWNcLHn",
  "key44": "4dTnJf2QjJ9UguJMeTYMGAMoZkLnDUgUs3s2C2fWBLcYPjmfsrjrGk8taZzJKxNyzgpAw2H8DkatJA174YVrLabh"
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
