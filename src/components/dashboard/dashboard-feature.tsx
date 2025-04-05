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
    "3sZirnsSSgbEKU4Tv3rHDZM8nVeK2cA7chfsKCPhw9Usi5hMLP2guqu1n2kWeM1C93CFQxPpnT9rkjfq5KdXFafA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UFDaWcF1Npf1M75ns6t5dv7SmwDnwPP6d5x9eHyajM125rnBGmYmHBBvRaDZmd75c3VpzPDKqBS8F6us9Qssz6S",
  "key1": "4fFcTprCZvwNHmhf5wYQUtGQ7Z6CCZVj2yqsz2Di3snmFFAtqHnUJ2wYk2SpukQWYCJZ6NoxUPUr5Yx5EuJ4e8MV",
  "key2": "3nuxtfLxLCkqgCx6ASXRFVSCCq6aMKg2Yxm2RneWYQMawbeTw6gqbP16MWBaD1g9F5jJp9Hb7ELaY2ZQt8CBpSgs",
  "key3": "3g2BGj9W8A5QuUNevbZNKJw76cbAn4aRuCRZ9RLsGMRXNWH8A9GyKwaZsSSDkAEG5ZkCjzxAzztf1FVigPs5eGaf",
  "key4": "2Ggub3ZYmXdAAHopQ3Q5bbN81UwhDbfncVbFLerGsbvZm8NBkZZxz5uTuTSAtY4JSfVee1uAPYVUDnPFRfjvZeRy",
  "key5": "4WJk673fYFNFG9YwXCHa5x3XKgUkXmdSCzjxUs1kCKDrpHwGPj4MY8NDVpq4E4iWKattBWyxXzFzDvQ4SuQHbgZu",
  "key6": "T59SjTgPbksBixvPc9GGi42AkU1Xiv6tiWUm3qWkq1Gwc2q5zrpuUQA6oMMt6cFcDchBhJYCmP3muZTiK4yCpqJ",
  "key7": "BMEG6AHT4no8fhVMyDfJm49KQqe4f5xpyeeMTqiDK1bf1g7MvxFfAVH9rtr2wuHvXtgEsQYU1hsymWtmMxy72Cp",
  "key8": "3k1LvNm977dNm1NNVG4ogpPG37j4WB9uEmjuWQRa8nWwC326XXTXjYb2XXt9QhhzcDmkTcRCMZw5pB3BBANaxJ4G",
  "key9": "3g4cugsnXq4xfh9ENCyun3FXjSzZ8vDi6YE6CKySwWxAvDEhSX1uCi6NbV19boy2V2RhhVKKeh5MoA1DCs1bn3v1",
  "key10": "5en5QKWUXP7X15H1v43N1kwFHuxSXyrHzcj2o1ToeBWZSSnPMERKb6YdoD3D1VFx1nhj16BLHFgGdcFEf6BmT5fQ",
  "key11": "8Rh31SRGyYFmYKHcnpfyzg5Xr1j4eRxAsDMx435Uovwq1jPaE8m5s5T2w94hS4Vs4zAjkrGXR5rJWKNHXXnMWKD",
  "key12": "49odNf58uDBkcNy6RieryGo9uNtMVM1g34o2VL5izUQArubUX4QWeKEZVamtHcukyajbcrqVQjHrx88F9FWVUP1b",
  "key13": "5Nk7jhVeMvPNAK9HskBCnrHseNgYmACjvm8LtprLv71qjQuhciwNP1beUhsAZbPW5wnWDXg9DxNuoJ8et1N76fjR",
  "key14": "5MUiWtayC9SVctcjcBuTxY35tAw7pR4zzb1egY5m5kTKdG2B6VsbGLePDrNaStxmpyoDNCZSfQFoQeW1haqWDUYk",
  "key15": "2YBtRjCfgdbDcxVBzmrZz25d6ppVA6LrNVd4kZtuSK2muqUpbfAygT4KMKWu3o9Fqo9A9Y88LJT2txxoUJAi8dG1",
  "key16": "49RT8BoHHCnQpSXa4zbGHb6zgHzwG2gfhwa1ywsvaKd5zHoqfKk1ERdWDgmSMhaQXHFUJszjDvufgw6M2wPjAK7W",
  "key17": "4wzK9FnVNWXKdmtioDNK3oYE2Gp8dk4DZiFQsrJWX5PFiGKzJKPkS1NbqX1x9UQJuNXjxMNhVMJZdtuz2xULAAbB",
  "key18": "veBwRoYWSaYemqK2ReoDj8ryzEAMkzo2tFJTdMWT6GBTMxraUe1dy83W6MpuBaPq2Pj9PRRPoNjBZRaBvzSX1oJ",
  "key19": "Qj2LnLdeFVvPAdfd7zMgTAK5hsbJMQ7Ky8SZ2Qd3LQGB2NgcQFxu2Ji5greU4Cp9rxdQFaWEDGucxyYfS7FK7Bx",
  "key20": "2YMyYNvrmzEdYEuRsN2MuQiHMehRTXme4QwA3JtviDVcxu36LqpGWojvhh39UVBEnot8Jj4YkeY6yTPj6uEZhVYG",
  "key21": "u5RHEbDgdWE8E9WDiydjzdf6UCrfPLj2mazVvrPNVSycc9C43H6oTvz6va5A8L16tMFTDPE7hvCToNFxdT7sBSf",
  "key22": "2PrFGSsr73voLhukXffg4Veog2jdMd8wF51rpTxW9ehXWrPu6wmLy8jgwQDzcX5sT2HFLehz8N57ENTecfnKMpF6",
  "key23": "3ULYUCyy7x4x4KtGd18Wj3XM9NwgLzZ8uqNraWKqCnoeXpWb3egLjUFRfx2VHj878FBmPxAea4BVsJjmjvbiQ9wN",
  "key24": "jgM2zaT1guDM9mK3s6bv2G4DtrxJ3pg5aTgvfokxvXTqxETUV4NNRxNaqYWWmB687Z7e9Ma5HXUHGdZB7Yhe67R",
  "key25": "4bmn42fzrK94QZhtioVnHoYkgBb1dw2tGQYdVUU8aUpWBoHcHd9wPqRrKK21kqhTz457mJwDMGz45K47JJTQAHWK",
  "key26": "2Jwz4KHF9c19jCUTnD47x7e4Q3J2hauHfVZetyLuwcKAPSd9SLFwzdL8zmPyufznLYbkykPmC7QArDGCatxSukis",
  "key27": "S9SZhcGDS7EnBuhC89Av6H2abanzxtGLg9ZyKCe6vo36jWzAiNVd6jL2riQ34swWogMD7Ex2MXQCrqzPwyFZZM4",
  "key28": "2mNYaQYgcay3cqhuqEwBZ4Rooi6Z2NQ8nwLrjR5MemTYk8t46pRCaGqkH4qttXj24khr8ppeRk6oyXRFciPw65ns",
  "key29": "ShjMPNeBaJAjTNvDtpQjnpmFpusKWntPbox5KrW5iJSoCCcaU939RLrGJQcb5RRwYQN4uuLJPCLzadWXn8bDY4k",
  "key30": "33SLxYGKos3dhWPr66yRupt6usqA3dnM8BqU8fozm4tmDomfTLb4oDLPKm5eU1v4e4DvANvAe2UNbFCXaU71SSvo",
  "key31": "3gDVEz4hbwwZXf5NYL62rAkPpS6oZySHgsBWkXLQ5ND8GNggjBqiU4Z232mmNym2UgrbkVHfawASHFGQz8LJaEFe",
  "key32": "3NFgtoRKGJBJ4x82HQ2dAxHxLR6HkH2H5hfzbSQ31bUQJ4oXhF9hX7n2v3CdJTj9dmU6DiTZFAcwyTnnDnh6W9HS",
  "key33": "4EpWKGtfg1YZbTuBvKfkWNRSkyD1z14KFgP71ttgVgUwnKk2ybxEjVzFEwmu6sF4LBEe3fgEN2XSfoJxeWZaPy9g",
  "key34": "h3tFDJVnLHywkSc68L4Wj5NcZQNzvbGW5SJqtNT5FJXD4VWWR4PNUoQaqw3PK4jrSP5ivYLpWTzTRSDggw8cUWV",
  "key35": "2qJg6HE9Qdu7ikxPwpWPHEgvcqyku19u2CYPMvNYAMykDXHB8vejAbhC6xhiYaTjhA1YjReoQvjUv761qC48NQrW",
  "key36": "5yEGvuEyDixMVCPfJzR3mfwxfrnKebJQueBNtkTLhZQHLycdzQM4czbuu6gwvpRftiS9cpggJpioMcij3XS6v3mJ",
  "key37": "4RSqY1fnnfbvfpcNGCxVKg48dGsEzWuVZrLULjTjMtP9wyLm48vNKC8yxEczSK1evxa4wx2TmecRh47ZJLEBXNGU",
  "key38": "5KBcBHTxZG2egDPxzhyn1Bojegr9nQhHFqs2sPd52qyd25NZLfwNXA5Ennmuaav2xTa3g93Hueap1Ud9jS8Y2oBz",
  "key39": "5kG7oBiZMwaA2NsoTcTt4bDepBNDdJGF8sYcfYSnqpMoBXcPDSpH1w8P8D3BJrkXFvLvzxCrzXzvMupptgQTxwkm",
  "key40": "4BP6u93aiXuGvFD9rm6xSMQp5CKR5y3YSZb5RKG8wzsFcsfCqWe559ZGVU2244oMgZVvehwjmZAHwpNftygXit5e",
  "key41": "JtRdXkeZA4t7eR9UyP2ss17eg7q217TWxKU9bxtnmCnKVAbycdS3R5xHk6uc2WjxYRCEjLTU52iYYoWPY6m2e4q",
  "key42": "5gU1wfCWQjspvwTYrPXJpAuYEL5RThK78uy5AnsfGVaN7Sta79LNyQN8Pj4GE9d4cCavma2zUnmvuysRE54ESQHN",
  "key43": "3woGqGMifiwgHPmmaYc2QX2na9vMDcrECAggNzhpeiRCdqChuN5fbYqKbephoBcvE1d3k6jzESTWTCf1SdqkwqqN",
  "key44": "4FzfnsT4TnPHrRjzmhWk6uXyUPAyoEZURHjD8dHfhKQjfqzRE5sw1D6dK11fxirtfD2XJ8dRM72s3UbTP33Ru45N",
  "key45": "76nsKrWNfTHn2TmrA6rq5QCPH7Bpw9tkRgxXUrPpSYiiHDnFZsoiCn5KrghK9mf7P9zf9smigPqyxoipCb4q4Ye",
  "key46": "4Y11ik4dhov2Mc9CyCdXES84PaoD9mp8cRcXdxd3XgtdgncGQgp11Y7mivCCUgwPKF8QMV69naE3BsDeVHH2CoCE",
  "key47": "5teYvo6Lxgu8jWSsQbyqZpjs8paX4aNLoShXeBqSNRwuEyGMWPPZwkw34rAzyhXWjpC73PmtZASVaA5ymYH4SLo8"
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
