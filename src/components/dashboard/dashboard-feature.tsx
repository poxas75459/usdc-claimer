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
    "4frFCQ1Rq2hYdCH6qpPACSes2zQMv8waQLmkbGimqXhNvFAB9YHM9Gux1Hvmc7J4nofPDLjrb1ibswhQ9KR92BjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HeLZPJtv7KdLKdhDRVord1Pazgn2n4rTy5KNTDX1PNnETYbup1WEorPFhTK88zcD2EGsaBp82mdF8kmH6K7hmm",
  "key1": "2ccTChRUNfb1rvSfi7oTzkdZeZtYYwvgfVR5XVhnxv1nTi9hcS1RgbyEsVbmUnrpGS5bwQq7nn6yY7dhHmU7AYSv",
  "key2": "5bqvkMzGhusdUSa3h9vcPyWXFz5HhQqVwvd82TW4SAevmshQs7qPkaRDjjULntBvfGFP8PRJLvjZVuX4M9X5rCwy",
  "key3": "2yFUGuHPRSxNeGcVR53jJAdcYstV5srLdSkXT8zbXnfe9pZDAeRsf3vkwxpH6FHd3Rc2BAthhRdVAzUfCBR1D1Lx",
  "key4": "42d4WvTvt9gtN7DnjnMdWaHqpcnNAr2HaauSH16Tusz4Y1xQVEoKBsoLxYV6UheoMkgprFsP97cLzaaMskD1shtG",
  "key5": "5het9AecwiB3TyEDyjNoasFoa8jg3Kt6HDy7VsbCcsnxJo5fC7xVyTYrLCnZMsjTSZiuEhpJ2nPBy4riEQiMxf1x",
  "key6": "5q9f8YhNmADbyNgDWeBaPA5ukib2x7zDCyNKYT2tWhbNiU9fHHHDVsKi19rFZ59JqJXdZim9VjViArQkqbviY3rk",
  "key7": "HsNgCoR9H3k8p5Ea356rBS1tbrEtufPdEL8zd1ujyDzrzJTdYFgZJWgcWhPV3yspUQCzx5nkApTgUP8gu4xbbmT",
  "key8": "3hZJ565Fg2Ej5zHJW2weBPhmty9ubKPr8edp16pmc9jgEGoovj1rZ1MtzJCWDT4oHjXfrRfyujaACgp3SkKc7Fnj",
  "key9": "2LS5Xnv83kpDmFD4MqPjpuYhkoH7LiNpiYpeWGH8RG1tPQBvhw7YQ6rYFEJ1Q2kztEn9pb5fuurwDkByWkPxc5Zz",
  "key10": "62t3pPURtCkBxVnqQuoSLd6g1ShuX67V9uUZh7Cr5uaEfhsmbZpetzVe64SXj3bHHwwjDErCYZgEYF5VyUt6nDBT",
  "key11": "4aQkoEh5cD4c1USdjuxsHxMfH68HXkg74DKGUQ6JWcn3975geeeE8nY74F3DJAA4hpz5XpdNvHr5zoDeNYCZQZY9",
  "key12": "2RXjWMvGmUfNSdit4S9sC4gPcXubufyq6oq6rBZbZadJjKDxYvyZS4uBu3vwGxarxfyLiJknw77qcTcb6rD3XeKP",
  "key13": "6RmZgM1bXXzsE3fx4STTnpj31dZh9jhF3ChnW7RR7DYg4bNyzoLGL7tc3FyzmVpjmuoXwRNNymNFGmE1BGf8e6P",
  "key14": "2T3JNUoeryg4EPuqAb5VtPiGkrQa7ayWwJQyLZtYgyWz9uY9A1MRhs3mBwR5VqJZv1n1jLxxtomQNuCoQLqURndN",
  "key15": "4uFA638vXYLdZn67JjdDrozwxsv6mEExZiGRKCxsjAHa4CzytpGmqdLojaA3gQhHYHcTTPLVPTv9f25YrgAyyoRC",
  "key16": "4KALdSrFETVZXNp5wBD7GUtYtNUDtQgr48iCpc2SHeUCw7zvkXyeFiqaUrQX7WfKoVRTWWsrtndhrNpcmg1t1Kfo",
  "key17": "5rph97mvhbtcLjwqxUbtY9N5XY4xH7xtzJkYYuqRhSEoyUxbYjf17g1EJqnepin977Tu9uwL1TE4NJkW6UvncYE4",
  "key18": "4eqeNFBErixKsg3PjvQaSivmAiRnjLkA4iP1bjH6KMzxj6u3nNNPzaH6wYADtmT9Ac5c4387fqQkAof6kEGeSKZc",
  "key19": "9fvdd4b3vNzFwjbQJzkqBjD3L7GnbYSdsJkEukK6AsmFVfjYjW4jmXULwM9ij7xaLdWEMiR2yTiqytXgYu41ygv",
  "key20": "338kPBNfyad8tvLZeedvTDhUFDgKuNfF8jcsHkNkCQThLJE6P7rW1MWToz8YhjFKmSrem3bdZFXqz7SUkZ8GeM3d",
  "key21": "5BmLvGfCLbYuALDwkt3eBZZdnjrAntWB6b4i36WqrpEJAqZVaKBChsb8GR72WdavVfGmEh69R4GXvTVnewpBgAxK",
  "key22": "66wZ1N4CeGTSfrn6XG7ejugoQ89f3jRQt32HFtqASnfvh8tCHWRZ8VeUtd3FLNHDtGo3cPMVtrSVPDUCu82zV7BW",
  "key23": "2fh6PEVyQKynHKxErebpYyKueu7MhVt5iYP6reHWcSyiFKTKbsQVMnVm2zQw7JwCeSHMYMNS2XP7FrZLWDiq7djw",
  "key24": "4Dxy7TZwxANzt9o6f9Lyo8Zr65aQFjrjDqMnnj8ZdXZmdeUUn74YkGVcgs8faB5ViRDiBF58r4eFzUzwaYNPkGt2",
  "key25": "4gUjEUeJ7EMWoqaqzVRLGkNcgVHgvWEcX89ERck7BkjkfXCXeHNcSzJJrddx3Z3MARegiYnDsuFCQSkdw7ZNT3A",
  "key26": "tk5eKNxAuCcFXwV1KV54x8yShYqqjGdZuoYBBx5ZyLywo6DBadKvKF1sRBG1QRDJamh76u1dacr1nPWuXXXLgs4",
  "key27": "4cTZd4vve2cYyEt9PmhSZek9dRyVpiY7WVUC6P8p9dMafG1sP7TdYvZ6eErsGNMaHCG3ea4KQyxwUjNxpYrn9gWq",
  "key28": "3X4B2ChsFzKCW3pVbQL7Ex4jGr2DerpwfB3bStgBCTv3Skc1p7AgvMspRts9JKJLuh4EyMa5sPBdeenPoSaVk3kf",
  "key29": "5XqrK7QqnnFBPeH2rRtaBj1Uq5sumg4UwmvjfkBKEqys1miw45utzUX1S3AK82FvWGhyeb6V8YULvfCXXmk7439H",
  "key30": "2dUKCk4RyJCnaQo76Rt1fQT4BmUsAcRhKGyXNmFM9GZRVkkXbBMHh1wHtJsy2diz4gD4q1shCpJYCgmT9N3M3Yro",
  "key31": "5XtkGFUkrjbgrqZMDZQUHn2w4K9gBBe8yyn9ywgP5k3rzna3zFyXs3pCGcyx7LsdnusqsGNh1TM7xwEKQ7zdTGGb",
  "key32": "32RpANBmV6GdxG1fECW4v44LLEvSPqyuefPnfhCCqJSM1gYSnGeQUws2FgkWuNA833gNxWU6qbPC2hnutzYxubBe",
  "key33": "5g6NFC2ucBwaBmkHTHAQuvM9jy65RCgNsrUYoq1DT51Ytx8e7Rr6JSe6zPxGAvWfWAQBQfoGrYqUkfv3NBQHGRM9"
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
