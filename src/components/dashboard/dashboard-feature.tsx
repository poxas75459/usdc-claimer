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
    "5riCFk6WpgAY3dAPeVR6UxuBoTVJCeDFdGAonQ44QD7MMo39sr7LMswFp1pLo2riGCL1xdSWdTUN93mCWMZ117xF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CwwXjsPqJoH7ix8WKscQeEdZp2Ywdh6xkoaBRfp5LgaABniViZ4fzVT45EYhZTjfzd4T7psgGPEgtNWzYEEDGSy",
  "key1": "3zX5BuVQL9Y7U9Q6gscq2qN2aouGjRcRahh6W3fiTEfAsjvscismSHSkcfTCqG99TQu8HYdaY3UCT9mwYLAV1i39",
  "key2": "5qo9iakyvcMRp2RJVgEJsredDwhXExVoZsuFMRGQxDS8yE7nB6t5hakW8A4ctZo1hZeb3M6UKmfBimQiW1W1zaBA",
  "key3": "5V9R325Xe7daakcNPKxPpvrDVHshjHpYrfQ7Eygs4qaXGcTQftdXqeRy6ACuxJtdML7mjQRC38P2WH7voywJ1p6j",
  "key4": "42ywp5Ewbvu9cHp2x6heuVM9jrwtRp8e6xiimBrmndggFtCbN4d1zZNp78veE5m3ughkzV62bkNE5pKhGzdaUfpi",
  "key5": "65zBYwizFir8aha6TZmkv4Agc3kycC5YJSkdsbxG2wgfsNdez7CnbD3Z3P25zz5qU8tAEfFQHUYTq8hBFk5Jviyf",
  "key6": "2UdojRCV8eKGm3AKrszMNexqzXKVTxwVHNRQoRYf8s4ptYmaM5nfZJvY9Wkne75mYekenToWKFQdmucm1YC2WJZi",
  "key7": "5MqYtXXHqd1z6unyXtvchPj9Mag6xVn66Dq9GfqseMbFSUrnETZToCdCE2a7r7B34QsxuVVfi5qPNLpqRCtAVSHE",
  "key8": "5DyJJvgGwgzVcpv8cNDMbWreMea8JnASqydCBKbz2QnKi8u5GZP7k9r518f3AT1xvZgvxcUiKF8GMyUWbS8JxBW3",
  "key9": "3Z73nM5kBXkA2B2AEybeAnab9oDzfpz6PN5d8fFoeZYixUxWrTs5TF41S6Ls7wcCGgALYp7EVyAWdYWzrXFNnMyv",
  "key10": "3pmrRjduLexQjEvVEX2EQm4HU9xEHiDmJACPQzKFEfn31dKn6CPCme8dvDzJAZN9bgUyacKiKuVuVRYVrsph2ZRr",
  "key11": "4E79ifnDvYHB5Jzi4pG9S3vTYWepvkBo3gy3u1A6bXGtixhksu5jNCdBv7UgUK3j9912byvkTv2ruB8mXrzk1M1b",
  "key12": "341hgNFHs1CFWTNPYtrb9vzysGdmeNjGbQ6uskAFsQA78beczfwZbprmLuT3Wu4W63BWBg64xv4fyzGNrcyLC4Gu",
  "key13": "4gVec3Z6NmTc7PQbpTigCwDkkr7LT1SVdpE4ernbfiwup3SVJmXpYRLFbDBn4j99EGJrXCwTSWejKWmgmpL25pSZ",
  "key14": "3Xqxt4NQucDejd87Uk5o4DMK67P9VzT7ACH7n7ysLMeqbCTZyQ8GbKEPX3fAFPeR1xEDhtt9QjqDDC2N8hyECkwR",
  "key15": "41qc2rLV6ZjyqYGvWm1vut3Q73c4NU8eyEx3dqYU1RuGQJztATsF4SxfnH3wprsPjZwDheih4UAQFt9tQjZ9Jy43",
  "key16": "61mppBBaiaxmgEWomktDg814FceyLGr2JToX6PE2MMVs1TEhzLNEzjGiJGJLqi3WpVzXzGsNHAabjx7KJquz8i7U",
  "key17": "5JrLvbzpigg47GEpXVrqiss8Afd7N6iRfRKoafz4xcGtnwCAZkHfaTXXio6tD6YYrrmoh36VRmqw8zD7vL2JjXD9",
  "key18": "bH6wM7AkSzVUsGkTi1jJQDwidmPAnHeh1ZF6YEpmAoTVYjLKbBDVymbv52Wp86o9sCua6kHRuYpPQcA2vCu5yws",
  "key19": "3KjxnESjEF5QRPrbWmEZSk2KeoCmZNJa7KqGrggmnAKeaKXuivFTEUkjNKp19FPFw6AbpwUr9tRru7W7hjt45dsb",
  "key20": "66jjTp5q8KrkNzGVmjfX2nU8nSDph7V9dh6kdEufZPD6gFxdVGanhkQX9zRKxS7eanUWs9ASrfQph3gjwkmtDmeF",
  "key21": "g7E541Fa4f43yhuCNr6wcb7WR6AHEtQanLPEtcfVJ5YPZgPwzSRbfXNQBXZ9H454SSWEhxrUSEFaiPuLRKugnUE",
  "key22": "3Bf3db3WRNTttHkiDMFPoSV72sRCP4zSJZUiwu8TKCM4ZV92f3xnUWtSmRnTSjSKyR1mpBq5neqHQK6NcW12UDMD",
  "key23": "29ehY8RkQ16gj4eUEqwQ7vj198AM9xyarJjCa5LXXHKTDvwykEUg1vrkiDCD297GNPmfCkamYEeabc3AWTSoy6xd",
  "key24": "3v12cMk5nD3we1jVL1cWqiQ2qSEnNPfG9ubz5FaDAkwdofBp9bFnM6RmmMgmxJHUxknL4CLEKZDz2r4te7mH3D91",
  "key25": "4dQETCo6dQ2Fi62hCqFt45ondAmVdRgXLnfibf1NxfaZwRmNkm5rR8SNdtTqXfdqYoe34Z61we6ifYCiEVxCDxX",
  "key26": "3KM2g72ujkWWjpcjem11NQwuxtPdJHGSZuUukbk36jftFpBSyCtBAHFh1xkDhWHXKafQP6yv6WsfCEWFmv8ewnyU",
  "key27": "2phbbth5bKUfP1HHVyV1qHYW2S9wZGcFHy1qaGGi4eyrWYkVGG993Qb9KyAaDMZ4sigeeDrC9QwWsYd2R7ND47aE",
  "key28": "fHJziB3t2cGfxku6uQzcwyenJ6rQoyXCAZ2vwrTmMreXBouTbtC5C9ZDPZSyrcx1UsUKzLPuG6i8ciXkxF31QRx",
  "key29": "2CPYPFqoLJoP7mB3j9FiZJGYczx1yhcz6BWKmQgUy1xoNPiKbViV1aQDP6sz6ZAtogo1AptwZKkWgmSxjHgveSzJ",
  "key30": "2bWykDgHrQBdnD3u2EFNjqPtMtcQ9hMWawvw5iXj4dxg9JCqFuQnxhPXMzJjS42d39qtDVrPnK1JR6xzZEhovRuN",
  "key31": "2EocZ2zJzcHf7fCJ81f9Jya3CFT7heqk79EPRiLhA1ND5U6kJovJmkuoJ3juwvnZ1Mr3YysvoJcYNv4VByq98R7q",
  "key32": "3hQPHcGtAdzku7rMGbmL9zAsKh8trzfpzW91wSgrhjH46wgh16uCfzFH74eBTDUT5mvh3hJ7QCM3EEvrTUPRYuDh",
  "key33": "ZkRgTMKXaCobmznnqsvHpY4w9wLjHPPV878H8JksRxu3rmNKQJ6Dnk7dWMaE1u5qjNPv56QX5p7Hj64BXu6MNFg",
  "key34": "3Mf9ovih1HntBEMcgRDmKGvve3zRXVyoW4zAZx2eBR15QLr6NfTwnR1qDekvGUWyDFhtx3k2h6E64ypp1LfTtELE",
  "key35": "5tfRWZ743NqEfocg9ezBnWWLUhau9WuxhKDTa19iSTyPm5RwhfkNBiFR5QRGucPKATJs7AiVVc7zpNQJjWPdKi1S",
  "key36": "2dMNX2WSRZ71yMkcwTG8gjv88ucjQPU8dgyq66uxvn7ttYiq8iPCTmSPWEJQbF5hsYKt9RbhQs8F7C9vQFJPp9MP",
  "key37": "2FiH9JhKYQfi5vwXUED27w5KgEiuFYZ2gaCahk6tEaDoULL8Rm5uL5fu9pXYgzteFeAdevQT2GrCi8yodUKsN5pe",
  "key38": "4Gvh8RiFeNHjyewXXY5tSf5eyxtDQgMxYjejnpJQArsD6zBJoGDxytzzKWsfY6vuCwBCTe8FkWUPZsMrxRVo3wXg",
  "key39": "4TiEbwvmdLbnYdEJ2fMEF3rmSLz3jErskvGWiGqnKzDVZuxVCMymWj47drAoVDzZREPLvXFZnjnnbznZUByGQERs",
  "key40": "2iBSpdSnK8QkLBEwVhPQmHRrrPZvZLHR3KEaPpDWqmQUDjwSzLkTzoTdDzjevnoQ6NUGKmUjZ8tLviaV4YwCaSdh",
  "key41": "K5X1wF916VKktBoQuBn9ZmEDcPFjC22W62NBg91c4UHXXpNmMtotTJi3N2siCPscpcYwoCUPRsxabKmD7SV2GiY",
  "key42": "6saQUk2r5mWKoxwKdEZ2GzUek5EFvhfqGa9oYgkFf2hD4wMhavRbGoaoyQ4Ctt79rW2jBtqgXbcjyZrzHqkPnJ2",
  "key43": "5keD8PK2E9WZtvY8hEqqA4MeahRsxAoXvCPyyAD3HZYE6yVR2tz2cYTDC96kouV52pbF7A463N2ikCP3yaSXExbD"
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
