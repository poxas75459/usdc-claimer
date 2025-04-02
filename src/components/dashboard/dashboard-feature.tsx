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
    "3TweeWpHBQUEhvzaFaQCoUhcCNHmLWoxAj21bZKMiW44UKbqsVKmDB4weVo6a9fcKhSk1hA8h2sJMFfYE7w5F7JW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dZ6eTipX95fjpFP5fRxvDvokgS3Ugmzkod2jZvSwSGYCeibXdhSsysZAQd79YDGGmGsFSDpizqL6rHgf5kKGYnF",
  "key1": "47kAG9P1YjAGmMGCFjsdK99Ebjr3gontXd63U831NaWVPHb5xDnX3Ryi9zEPyew2cya5SMmPFyBaUVivNA8evNaK",
  "key2": "5yywGjr1hk25PZ13EJKs2VycvTXxTJGpRquhVZMNWsCyf8VKLdQxK72KBNJ8rEPc1kxex6YYdBDv2qYXwzaeRff6",
  "key3": "3f75xX8Luug5mv3pUPByVuA4D8HLBWz1LKv8drcMdNgPKN2CfZrEFtfhRq2gCB6pCfif4qmHVjyMVUmd5HRUvKtG",
  "key4": "4aJoifqhYWTpPxMimAU8Jva1e4YWkJEKzFhGZnhcpiQ6Ufvigg2Rr4hdZMrcGJeF9Y1rNsTQfKJhYaHwhZDb4E9P",
  "key5": "3k7MXJ9TWKe4RGbvkcvEaGYPnMsVA7D79jSpKTp1FEMMrpZT9KPNV8ZDK3AoiLvLheR3deX9ekSVopkF1i8wuvfk",
  "key6": "5Pm8XtjbzKFbEqou5ZHb4bK7YkVqFmkkRh21SvvsQ3KxAXK3eUfUoPHSLXRB5Y3igZJsUkJG8Kmm327MfAF9jLVM",
  "key7": "2VtDw3kX3R72bcNVUmqSq3DEuRk1Ef4CuDcZZqJXQJ6ecEjSMerEXkG79GMS4anWhPGEnTmFnDpvkooZf4zmSpAq",
  "key8": "ZTY3EDD8JJo9RNNsPJpBxSXRL1LfpSNcTpfajYUw5rtCJ6u3unSxFc5Z8wvvfMo4xR255KK39mh5ZuNSnp8AHhS",
  "key9": "2WxFBUAzKGEjTmJhCZq3txG2Heaf1YAMtztwMo1NpnSMoe8XPU2LuJHUoLnWwkY26gMKnx4uPZWKqkyHyqRWS3rE",
  "key10": "5ijdffqRHbnGJ7fmWXCgK2DzoV6ZfbkBSWrGJdZeCcZGt5M6U2xBp3KK3fHLj7se4nvWW3W4SMTt6Za54u8HshNJ",
  "key11": "uXJgGnQThh3MFouvjKrSFo9BpUFyjQRiHp2hu34HmXtnrPAynVF8gK2kv1faMtZecnf2nizgxb2CN2mmWALobYo",
  "key12": "x6rgxSTKBTuzj1CLqv2netdAYyswxGhhWwbQfjEXsYi99JVkJ2LLBYHr3icYFYVEg8TRkw6ki8DHKEiTjrNosRF",
  "key13": "4aqhyB9RakXrp5JZaiU6wzxZcpzo94wtM32Dy2ccMtw8kkZg7sZDZPtQcynqf8ZHWb9yub39UnfwLcWk6am3jadv",
  "key14": "2kB69UomvMtchMkXjfeiQZhg67z1HKT6pKiRufs1Na43qoR7TtozJnMgEWZBYM6JPYKXVN9vUjUjbeoy5eKQ6F1Y",
  "key15": "45rD7YBrsoLkaDhc2kLkVXN3JcySSfTPSRpDaFAGSNQng4bNK36YAoHPihiazHx1k6X4ju5VpTWjViuzWMdfMM5g",
  "key16": "3SYZB5WxnF6TF7hWJC4C9GhxyAogCsFLqvX121ueuex9NzCNEXkBfGn1pKZQarcr9YhP7NBJ9dRCfJfguk7fFuPJ",
  "key17": "brHLc8zd4wfR7tGiPfQkQW3vrNABq3R773BnscXdpd9QADL2NXtNxq3tb5mnS9AYJ3nzqMvM2HJ6cTWf3YkHvAn",
  "key18": "4dsM9qk1YqmpoqLAACKrQbMFFiE9W8sJHLCyP43U8Ht3SJB89c2gkURYAWnvE31mToMSHWF2HUJa5a7CiTbuzXjX",
  "key19": "4bMNxcD5eKPDjxjpf68g8D3i32dYXddY9836E87s4sMTZcQVDiTfFH4Zd68tfZTMJMRrmU3zsLj3b9T95bUFonkt",
  "key20": "2PvLri6sFyJNMuS6GnUFrD7oFioS43mUTefFFR9t5Z4KHtThyuSMDHyuhqNnq5b77x1ULS9oxs2U1d3tYr5CtjMT",
  "key21": "4wo8yDho5Y1pUccYcbcYjAEDxmpwRz29vTB31sxymPgEmQjsJfYzt8HSdXtJE51WFQB9ZctFe4o79x6FbT88BiHM",
  "key22": "5iqeGwGkZcD4yJgLGRMpoiAztsWeg4HHBKoEju59ChwvfAPtaVxM8MQc4q6MYXXaBvu7TPjycqEz5trtQpPafS7H",
  "key23": "PE63m8FrLFrYRMbo3cx3oiybDbbAe15nUHhGw3N6mrd5zxFb6yRgSDdFpvk6ghJWvbwovB2YJoJBLX7B984f8FU",
  "key24": "2pLy9ynBzg5Sh4p95C5gq1qVGnHCvjm3BwMoLBCNwgT4fEQpZkp1rCfdGrWpEMrisaHVDX9iYa4hxrc1HX6v6xvn",
  "key25": "3hLQHoRP3kqpZxX11WfbGqyznJZvcoDkVQh1QwnPVnWA9kxLAErvBWGqdjdWEi3jcxLvh7e5hRLNrUemTZL3D7Qc",
  "key26": "2KPgxB6XNWqBaBHEA4g71mjFnMha8iSJUC23RWoQvcCPJvf7St4LAV29s5npGBemVAYgVBYDGDix3NWxbbF8xvHu",
  "key27": "3kKQ9bti394Hdtd9bWcpMoaghxr6d6afRaEHuXwGi6Sqkm45dzoQeDY43AYzpeKMgrGjo5G3YaQ1NBeCzj9SwSBh",
  "key28": "3ni9KHnR6dYfNwZJn8G522Coj313hGfruBJuLbGjA73uPBZgenxey4XvuhPZbTuehhPVS98oLvRMTU9UDr75NQSr",
  "key29": "4NQHeC1gnZtbfBHNjWGxhSUV5e8gH1cXm1BoGkFF3t3UxtKtssCd9y5PMVLYEayFXoomrBVw9QppVrqjJuvcq9Gz",
  "key30": "39KtUDCVWcd6srVAtEznQ3CSqhCtfxWjfRJeU3N1397vMqwZWygydn5Nv2Yee45DJTpAtkVtEzDQ7V5JZ1hf9vFD",
  "key31": "2fqnPTw2xz7BmjhGXu4VznJ8BBJobkh2ChyeUtsnsnXQgF32vqgDbhY1ZL8deiJ3ZoWvworwxZaHtsp1YTTHfDeS",
  "key32": "nDtf7SWrLngmeGMimtmdKCQ1nv6CY1rcepiqer331Gpg7tPkEgRjRjXiL4G9nGfqsvgbFSE3UxyaSeeKFnbeatW",
  "key33": "2nSkLpGQd4mSEYSjw2ZhsjNU22YxpRvHe5aaZcZkAxxz29uZAHYaYqauS4rqet5zTh5NCjizjprg96tq3k7rVpgn",
  "key34": "2mj6sAuuRqxid9QxfnfCUEwUMR4mhHbJxpuHftPrJQxHsuk6aXUecUYwnCcmpmLqGKqPq1wsBxDqVx417a7a2hGY",
  "key35": "oMA9giamGiR56Lg4ZVnM3MqTF4B8MFpnfipUYnU3SaLDXTK9fB1EwvHoxhV53kmFyKsjDvx181YxGcAENC9K7sg",
  "key36": "5Yi5DuRSVwg94tMgKrTXCgJGqLCDAMY29kbnyjVN8xgop3xxvCmgsj4Rwt72d9QrouKekXxWsHKZa2aaT7hWcFXu",
  "key37": "3sSRTsEqvD1weaQhWC7LFkuwSboYeTfdjSVMjaVub6oJxETEhxfaFcUAaDh62aek9jwfnifMC4i3Juf86z7PzFqX",
  "key38": "4cxdyrjq4xMzd6AKjYRcrW4zXbu8Wf45qRWdQtwUL3KxmV2mnZfpKcxN4Pp8VejssuWn1U87375VKbkVFC3WTpkB",
  "key39": "vn1nLyZ3pdqibfgUcoThckoDmn3RUi2kdYAsvCdgGRucWRqGh4dRem2YxGko61135kMDycZjKTyxMFhdJgRMH5c",
  "key40": "21ytkcyZpTC2wrghic4HTX5YG9wCeBJnpZGWtZJgsZ38AfnAH9ycePe7BpCnx3THQ8tMVVc8wcKPQ8c4rGWbTsmk",
  "key41": "21xqh7WbJW8wJvArMwbmhLJudNKaAWqLiwUAi3UJyNa7YfAktgpgMjoMZr6jnzxwBoPuxwLvC7Wssjjg4ERgYEaN"
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
