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
    "46KWMCgiuZCKRSh3nLLeSpUz8NgS3zanvoD3X2cn8K3AYxenVFw1fRJ874JxNGQojRWS3CnFRjkBNmkYsFMP4u6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hYRJKHe8Sv2zpPxodX4TgeDXmTxj76axp2JpgUqRhZoLoYhv3NcNeNqcQzDd5e21muVNqpQtu36N2UjsrVuDqso",
  "key1": "2n287Gw5491pwmsAP1LQ5SeagwTqZ3EhwtqryMhDyLcPX6ZjwRLgyuiHTybAR2fTfa2m4FLGQLAWYEa3Q8n49rZN",
  "key2": "44JTRXT4BqQpAXZ6vsxtDfp5PVT3zEGTFjBTHd66Jo5d89BsW7NTd4H3hnis27tjcsYrPBX4B2CuhAVbUUWzbA9d",
  "key3": "5mtMAGgvfRvgPXM44fkiRPhvtxtkq73wBC2rXC7eG28MTpBfFNiT8vknC27noFRBvp4bzFEfaG2Vg4CW26f3qB3A",
  "key4": "4LwVAdL3e6ETBnkuesPTJvfYcPtKnviE7xqdDybobFaXiZqEqL3N5pvW9tWv16XL2uCx95Aj2Tat4Pbnnq5FmeqA",
  "key5": "ZXi79rYzFukS6icSYJ7rehvytNrEZkDihg7g8JeWvt1A2R1zsGTYsGGBA1ZphEkBTNhYHcqeDWQTgGDvjoYEY2j",
  "key6": "36wMEMiwfU86eagoUAyfgTXhjThtc9ZTQqABMWDfDVyb2bS3mrZzzykpNmpHYCEg4Cv6sXnGi1aKeQ1wBZnfpnvt",
  "key7": "gvNnwzSyvGyqka94uiWGoKhH4mu7hoMfKYECQoprjZd8cjafFmyoyJ2xiHf9UAd81758mEHLBZegLqgnVNf82dt",
  "key8": "2QXyhyKdSncPkMz41icagdKZhWCN5vSP7yWUGk4drWdJq6dTLjHyKxJQFZRXvMKcRzJUJxnxyka28Z9M5zuEZGvZ",
  "key9": "5AkXGScL5LPBWnJpAakSxdwXBi2mcgofZdm1ztxL8qeP7hBEkG3Rd9m6LiG4yF1cRjm8hMEus8fXG8oivnpqPXMb",
  "key10": "4hroodQ4wW2EFfst7k9DH6G8V5dTqnu1eZVLoPXuDGvxFT1vy86X4SsAWCf6Qrj6F6E8XKQSiU9zXYi1UyE5o6YZ",
  "key11": "4GcfLXdz56MFtD1CEVBd2sXdSw1xtL7QPZbsJehnYJy7AM2GyRD8a2DP2fxgL7VgjXSRrj8puJJ4b6wf8hqYV8UR",
  "key12": "5srHVqSdjjNFkPW9FS9N8AeCXp8NrL9seqTa2t8PT69MbLAh8kmnrPtwbvMwJGAv3eKjiSuRUcjuDu5w3dvxZsYn",
  "key13": "3v7RrGjTVpY8YAWPtuwM6E1NQCh6JnW1U6X2ZYqpMWYh9Qqz76Ug9XEBGMJaSe4rQVg4EpVkHxvkzAKhBNKrNU2H",
  "key14": "L5YYQoWpABhkWyxZDE23rTG8G5qTUFbwUckfQbDhZBmguNTKVNMTKwnVphGMziLPLRgs7sVnT1XXE15cAhjEgAs",
  "key15": "4sXwUN9uRkH1khfki3TZQwCSuyY26YKQbR7MxAwnJSx9HLbaunB3J89KRbYPKRAZHX3LohZUutrpCs2Q3QQvVpMw",
  "key16": "5hMrnkhr2jSxjUjHcyxGX4hixPJTRdVJZzUt98G86QWPNmD2ZSEdVBg4qdUih3RmNaWsuFA1kK8yrhiEVcJq7EdC",
  "key17": "66eDpRmi6mEH7t6nx3tbvoY6YkSDsBdSK4cqwWTcbX31cEXPVuPtVVcwLrPb3UfE1Co75RnuUhZoWUMo8YQxkgJD",
  "key18": "55mk4oARKfqWLjWe4dTwmQ66wQ49ypRy6Ae7hUHA4EdMRuycdrLRwHKtXvi7LzSqunzyCy2eaSRvmszgJLJCLcek",
  "key19": "21Xk2ULX3HkXFgGs2hTyZx4zFuu4jEBm7rFWq9z8yJU1vScNVB5CDxgVX35kPnpnNb8ZSbGCaEzJhtMbHJggDyyD",
  "key20": "5CTi1ehnyjmjHMxt37ZPhatdbFtyALNP9batYpo3SV2raCDqbjX3Zrz9pM93jyzZE1hFA8pXQq3caP25U6rAMi1G",
  "key21": "9GLNM3UPJewh8qSHaXcxBqMtAdsDySk4maXwizdPAtFadwCbgkBd58mEqxi1zcw3myhEE8NPJkGPoPDExiwas43",
  "key22": "4xHM5hAxCwB8RvTfxvp9kVFTa12u8Yz6TLE1uJ7FyeUHs6zRCkV1N9uVmCVPdpSx37CvKefdsrjvp2LcaqfJ3oUA",
  "key23": "2BPqEga9QaAbg7BqpJjiGzm6HLLjxBy3rG8hPAaKNUum1SN9GnHUnteps6wobWHYybMwBUqsRHWZpVWM6N3BxV3u",
  "key24": "2gjqH65VVEh6FuqNQH2SCGLWCRdNyvRrnULvGv2ik9XKZ5yBA2SERiq7dDKnB8HL8SjinHJx8z6BJgPAzkTH3zEv",
  "key25": "22MZj2X3GuLUudTdcEcJtefob3TsyNnKjSYiSaMEBY4QptqFLuuKVWCtbsbouA17o4L6eJSsXCUjMoyCSyRPpoat",
  "key26": "5B27s8KeetZLNkA7dD32s7jxhzPoYLVUzpVqPwVbe44ztgAqMk52EaojU2YJPvSFoQhQ1ZhLsfpg8BjAEKVfApEe",
  "key27": "4zSHMemwsEfYaNzVR54qMqwowjZS32qLTDsaHnCZpHAhNgFTa5xLNMVvQYqH9ABbv6gSxp2UuxJUQf2XwMScADhi",
  "key28": "5HZyG5f1Rimyx6Ko2bY9FtweaTK994qz3WgudQq45noCqH9DfKpeRGvp2h3mgMLjZa6BRzEZ5qaZjUEdbfUbuxQ5",
  "key29": "4cT9ByBoCz2MFkLaeRXidDMGyxdTVcXPQY62FD3EyodQgCdd4wPN8GqGtVwy9U11p8xS4E3PTynogjgxNNqyh9r6",
  "key30": "4SmwJKY1mtkww4pCsGL26w9WeHqSfdGqiypWiyXRpoBXk6Zd4ZqXsSEMpkvATiKe8h8wAzPvRSJ3g3BpsQBbxwrR",
  "key31": "24HggKWXv9rTRCgWE4ukY3hLVr7yJiuzzX9jy8kByQgjXAie6JPptp2gFJEiUsudfj5vEKEewgzCLFbh79Niv2Gv",
  "key32": "2CgFsubjXWb3vj2mPx3gv3ihiTT5FVxZ7xr5HczwvcZPcCkUcnEK5pubaHNpEZcYqxWpksoMmuzNvy7SdMjGmRW7",
  "key33": "2YtA8R7vQ6ub7sLCacFH4911dYidDSqy9trotmhgtNXcVrehTsYwuioDwokPWtTB7LxGurTeH9U1C8r39aFExBHg",
  "key34": "53PZY1z7TNfhYAoKnAmkPmFb7d34Bz8iyjLWQdYm84BLSW7BHuKJJvYJUVP4VsN97USy1uqVwcHGgdx51wuFu7eW",
  "key35": "QZ25u9epiGduhvdfSFU2gfeB7XmTa8Wjmyu8p5L1g1YQHu1C9PNtvMxqJSyHesGfqPri2NTVufBWdiii8tzqJPS",
  "key36": "SdGPucPwtXsoTnASZxMSqEnzjtfrT1tamnSJUSGweixWzTi14wGvx2uvo5QdV6sbbN9pJCrhv3kLgtXGVxpiC7Y",
  "key37": "3ejBGMfWFZiFvUtB8A6udRkurVJYjQv1XWxYoMvqHk5Vp9k3msPKnUc6Gxd2yEDrhJzGpDrJp9kvy9YrSNW1bxJG",
  "key38": "5XPLeQ5Kc3AnMWcgVJaWqyw8C1wSdXbF9WS22pCARo6hQ2ZEWuBYpN2nvpyxwwyd8EyfifdoooKwVdiMgSAyXpBx",
  "key39": "668CPPtgSn7JVURw7x1MrXrqGVVYmVDvNswzc6ekGcCy6A3m7Kyjqc1EzQ5ZVCfHLXERg8FsvodKEa9EjdJ1T2wp",
  "key40": "4Fz77q9rb4MQFnwWDNiHSFhHANobxXBNCmoSh4VgYexznKZomPs18ph9VPSoCaFzCRVACLSj8hXv4XXE95eGBFm9",
  "key41": "4SGhXXo92ewuW8gT2PxEYJpF6Bqc7c3foRyhK5DqvpWvNkaVSzSKPHqZow261gwfx6fUYqNLDarkT81mJ6yd95P1",
  "key42": "PQx8c9a7uvmTxxJ3wmWV1MZ3rzgYnNVqaoSo1fwBjBf9Pr9xKmTGs8UqigPGMBoumiUr7DEwQMYmArxw7Dm9jnC",
  "key43": "2VeDrmeJnzGs8jGS8ATe3ofeMotnES4MJgpLiW5fXiuZd2bs6TJiWLGjfSHuv5PV4Nv65btkVgy3Dxop6N9GRSF1",
  "key44": "4ca3EXKLbxAQUowb8yzbrMzHd7yMSHNd9rfBrNgsLSv7A44ZRP1yibhU3mruCJoH1yc69ZS94bPBVdS3RS4g3jHv"
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
