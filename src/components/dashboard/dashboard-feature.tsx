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
    "2Kb2kY4vEeHvJWLRht2U2WosD4bZNW6bT99LVAZzgCWYC2p8dVhheLZVaBT4aahr61ppU4xkqs5izm19Vh94rZsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aKGGqK6sou8vkxCMNrQZfZaurZm2UkaW6WZFHky53eMWz6ZsiHz638pURHsKWVR1qnbPDzutdMUaaFhdsxcExaE",
  "key1": "xZr2NNNid9qzFRHg6dt6Mu8byYtgs43y2BL9V7LhJembaCRTbGaUQiGW1Hubki3Dm28YcXHYLnhEj8Cj7KQQtFW",
  "key2": "5hkrKTs4wcXAMmp1kEUAX79m71PMYDPod9yTZKyot4DaRYHsuFJT93wCPCXFY99jXtT28WUrJkx4h7GJQVizMYCP",
  "key3": "HTyiRyWnHahdLxWo7JbBJWjJ5N8dMN3UcM6DHYkx215o63awaxQPigTCNq7d9Bc7fqWLAdHUdMLk8zoqCXTybCY",
  "key4": "5t2WHYLAfXkhLeN3XBgEKom23LkpJAQT6QgpQJxJZEQ6SgE4EZ13vv2RsrVbuSA2D1LMBX9vjeNXGnZG5YxBPbLf",
  "key5": "2THqZeSgZwf8VVFsMZWSvH3ZtwT4Y4QprXLhrYkiacMa2LJyf4KXEmTvxXhCKDefr9jqPEyFhYJeRsCnqYQP1YcD",
  "key6": "7nWFksWAmmcPNcdCtXHjQSPbYCUy54q38YbfgDH1GJVP11nZvKBYb8TCidZLcxc46UZzhZoGsQjzhwekVg6xSSY",
  "key7": "55C39BGYQ79pGQv2boHHdp4RkkCJ6TnzqbBaaJSft8EfbhEmm1B7x8BcgjEP9hEq5fdNMwJgpBv7243V37d4yv1X",
  "key8": "5WEox6Lq568DhQCshBKVoxRifNdiQYzsvDJtZgaD3wq71NCX9yF3ZeHtbEJD1aLmgF563P9U7eufXdYdidziDzLG",
  "key9": "FaPr263jn5tfnBs1cDHK3XvqFh7u5iHJreRgz2f3sjgvpdFy2tHQeCs5ak9AwPXitga3mwmco42AvrBnCU9Jf2j",
  "key10": "J7rWCCnMeSAUTNozAKjTMd7WgkoffT3sZ5hEeVfSHHjyYJxKeYcLvJpdjddSbieYPHMHkyhVNpvpaawjNZ4aLP5",
  "key11": "DSvBwXbaAkU1GtuD9BEp5SEnamLayy7LWrQ8FtzmoY13NnSf8sqveHHduRUZJzQCRDErgXr2kufGAxCPhPCJJQL",
  "key12": "ozfwMiXzsGNNcKsfdq1sNtVejWzykSagQLXqkuStUTKe1xkiLZdCfZ2uaV2Cb8VF6L8Ex21jDjaPMjYENHcQvgY",
  "key13": "5SXsB2263onJKcXFvMrEPHNGQLcZ2YoRpqtLijdwLgbwPo9adtBS8SkQe6KJuFTYq8JfbMn5t4gV5fFc8BXa6b1G",
  "key14": "4sjMKuwzBrRswv9E7UvNyCJD23GjyJFmttdakSQkroqPyxcPs29ipXXt1H299c9mj97rXMTwiq2oarmejvpiS2fS",
  "key15": "4C2oueZgG57srtKpy2PePyuHD1kpZUuoV7q78u5pmhEeePBDheNjv8rt3dQ2Hmp4QFp7QgTwh16FTA4w7nu6F6F7",
  "key16": "3ukQ3iNaDUjByRurmjEGWBAS74ZJfCWCBzn7ZtSfdzbKVKpmzrgPXiUFke2EzuKzsiuxzJDsTQJ3mLD2U2T8rJkq",
  "key17": "63QiHbsHGpDDcubjBeJrCFGsWiCriKE74Cih8wCrpctWPptEqm3tJyZ3aGTVaZURHGFnYK1ETZoRz5CFG9Ncrkw",
  "key18": "5YYo4gPNrZUVN9B8DckY5vvth7sHGuSAkAC1Nyu3f22kLmQMK9NLqLFGXfqXAkvj5fAWm28fWnx2rB45iMja3fV2",
  "key19": "4UCTUTGk2EeLUcuRdnY6pCZo6f7C44uAxaBrutcHhAoJXJ5YN89ctkGQHcRhR3UEEGEfwt9kJBDuUxUCh9Vi4pq",
  "key20": "3LgrWaNhyu2bpSr6LuLt8ry7yVfESuWK39DhUpXTQcXgGn1CipM48xR7Nkq9ASNtetg1SLkvhp3gF9i9QUUFTy28",
  "key21": "kS9q6cugN1zbHZecemvPTLJUJjkAEXdsci2NJgzDHm3CTwsBqGn9H9DifjFiwUWyWaj6wsdhD1PY1G68yWCuUNx",
  "key22": "5DLBiPmCDBiiyZwTHJmgqHeE9x8RgUTVD3Aa6JdaQHa1Q1d3HCh1QDz3xGg3tmp19uzH3JdsBi9WBYRrzCe87dSX",
  "key23": "XyJBvmhkqZpfPjL72ykjrhZd3t4uRbDYuidW4a1oSsxm5B3bxmmM9Djceo9qLnUs9iJtGTLyYgX7n3YqcGAVVnV",
  "key24": "3iDQoqn9vpoqDFtH4E99tMboyL5Lp5qQ1Ttt3zoqXt2V9Ugo5yyyU1fhxsCZjHFzANdPzd4Sqvi9B4v8ayhJBron",
  "key25": "5j7VW5n6nAnmjKAEJEVALAqJt8QKPmLvH6ETwZtNjbCtBPjben1p2ZpDNxhLRjUUkdbd79GyY34hTur28XQUS1ZU",
  "key26": "3h6u3tqZcEFy5VEyZ9UXdGcH64qLHXNZbvhU9XYwE4HRHuYh5hmojPHfTL6AdiE2K1LceLkf1Z7PdD5UpuvELLs",
  "key27": "5wPU4Z5fXtWLUTwb5sRd9Pbb73gveKR8jqDvHhQ2PormmZojhDQv45NruKz5Ki3X6Mod65f6sU8SrpGqigp1dBBp",
  "key28": "5GMGgkv7g423ciUR5ZJoMNHDsjWQUQzV6tEp598i3PKndmKJ3nWXczZHPfnYQ5mCaVjmZQm6PAMXx9G3mYo9hCdo",
  "key29": "mdJfVisphHw2qrb28JiDPkH61Yvm5yvCWVMtQR2a6ewJxthUbew7VeHRKXSkej9TDtdTZKJt7xukbzfMToJjepM",
  "key30": "2Qpo3xChULgemUDG61M8aJVZZyvAJv7662t5iY7yLw8Zu3aJdhAt5eVMzhFpmKDsa4o6QcLq9Anh4rZ7BQ6BqHqF",
  "key31": "2Up3oHRFUjZptdtpoSukaKukNCNgjPoXVTDzo7gqGc7ewGFRncXiLCjMTTreVUD5gY6ExxSeswfBnhUZddSwHe4U",
  "key32": "5G6bAhhiPfZWXBsep84vixevevx7uWpTtdqBDFsPURmcfJavmXPLCNs34GwaeGmBc4NU68hDYtXAdHmAhWwcurjS",
  "key33": "4FxbNaJ4CspSnVXWArzPQPuDGEVPjezuNLATtjnCvNXk9qaUeT8D4U4GfzcV3HQqS3KvEjzBCEKgQskSmE4nUidp",
  "key34": "2oRxzhSH5CMKsGTKzd56qJz2tez8zov83RcDusLq8oAabzTvT1z2RKW9RG9zqX55jZwTKg1YXkQR6tdm5Xn8WGRA",
  "key35": "BAgxHHF1d7xMCa7wdmkfmtQBYoMW2tH4Wdsk5q6ngx9KY8Mf6QH8zEry6eXSfRbjB7KhHT8GisZPwG7TXC3jiyS",
  "key36": "31uKiiF7Q4Lwttao6CyDV752P9DpByY1T2VNCSYJs95DhMwku7uCwFSyVNHqfVsWzVerzrwUUQUkgxu8ufodT7kC",
  "key37": "3iTenXPgrSm9QZMDyJjJESyiBshbUBtniDNin87qbsMUxyXZGAwdtXCA7WGhurxaj5mvkKrJAWUTa7HARgKpcc1i",
  "key38": "3sgsDMdJoxn4MEVHv3EzLrGrDWSKvpo2XXGvrnEcxrc8d9EZMHED24iwPSKSEoFnafSMffP5TVFqVdzbpig3mdyG",
  "key39": "3VT21FSx9YipUmKRCxMNJibsZjSpL4qTsSFteXZRCtxL6KkPGJ1ZpmSy4QeNVtmjVWhNwHgqEqgq6uBpmfVGi5LA",
  "key40": "2q6J9sp4CzPf43xbNK7oBD5XNnQhTopAMQYcNy2h7xHBnTvEMe4LSknYfuhGrFsmryUE7WRdtjndsPKYPjkSQVfG",
  "key41": "2MnHZvDC6NLn4UyZHiLP45hxKtsn52JthRjrbQhupsuDuTnD3Ua2xAozw84DT91CpXXAQSabfa5LRbdmNXZRNWNr",
  "key42": "8Bsj5xUWkZoq14U6fMR2aw1F1Fc4ZUSAqbrJU1gSxUUmNH1qTrt3W9mhY7MojGgxbxc95d1yTD6F5dUR2JztFpw",
  "key43": "5ZLDXdgKcZiBtTF11ovnmGKNiKSeyZGzGez5g6UAtoRbUcKCu8UiaHPsNatL7ShiJVfYphJJ1bbdEk2Bk5HKMCJ1",
  "key44": "3nKvmfks8EwKrezV6vMwjqYbYBBdzZ7YuQxGzwe9o1PV2vVkZfNssv7kzLW9XqGXYvcbQy4haMWaMVfFon8Z4gfr",
  "key45": "3m5ifknUyehinTk1zYQLp3Bz7pXtD1smNzSJ6vKRYBP6XazSGDWPpvk8FmDv9imECfGftsgMpapyWwpLHBt1Jkg",
  "key46": "3ng27wjKoLUumkn3JrjoWA529DU2VTWkHBfyKXRYyjHisUabU1mHQ1TQ7kgXbQoMcf6SpAH2HKkWu1dsHpd1cWHv"
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
