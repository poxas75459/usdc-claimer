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
    "2SrJmduJBSEk16UxEY81FcyjtQMsRWEYtkopKGYXrizEhTMQrLgDQgt4yg8TgUPCEEU1XZ5AoxpvVFUc15sF2uYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nEdfRKyWjdHyetuFpo5LgpMjHi3m2itzrg2jFkvehM6VwYJvVWxcWH3682jTK2m9kjbPECMQH9yEoXHdPKPwYw4",
  "key1": "Vh848Roqg44JgvoxJkmYfXXobc676HZtEPsNiEvJX71J9cx9rwpir9ECRogWebMA7FoEKj5UWVFaw7Pm7YB7hAd",
  "key2": "2dzi1hGzVmcd5LhWnBsyeEMQTPDiVbntABXPZT5Rzn7ZVY8a1MT63RFWaDNfWCY7Y8jFCxyz3jRwJLzCWAh6E2tD",
  "key3": "5xySim9Tkz2jZV5Rg6WYbmL1mchFTbUwaVdePuphKWo2Mr7JiwNXVpUWbX6amDJMbiWNdSArMjfMytpg7Ne6vhNg",
  "key4": "67ohBTGXfrFqLMFeKeauQcaeE2a2go19QJv7GRwU2FRRWrFP3o19C1qyEfvLqXF6RfGvxQ85jjXETfb9nRsZbWEM",
  "key5": "Sh5HQgpSWDpxHod7KWSPy6UnVJvvuZcHykrQzDVwc2MHks6py7Kqrigvu8m4S9HhdjAY7MyoJnnERttf6CHwbd3",
  "key6": "7z7xi7UJaC9iy938CMnU44UnVZoSpsn8aKVeUy4oZSi8vhgnAfohyCp2wvt4UzjqokAWn6eV3MxPdCgbj9biZ6s",
  "key7": "2a5SZmUKNeWRu5gSMh1Sqs2vHa6rsfWq9XFyk6g5hBBBRhxQ9nbwS7Ke9FxwAdpcvomKJuz4Z9PLnLAzUoxuwmtB",
  "key8": "3Ay2RaaoGVHQyNoKaEgtGoQjuenevkiNCGurkxdm9bdHsBvb3Jy8Fzt62PpYyQ2NFdmfsxX34iT7VgmECN2d3B8Y",
  "key9": "2ZDrgZr7WX7CU1ihkYZcqsNYEhn69Yr3tYWzxGNt9GCNJQvv4nBxTytrpBeCr2Zo2kPThm1xFz8gTVqRvA8mwECP",
  "key10": "cmJ1rGiaPwAspp3Vzd7oVMCZ8aU5jyy4doSm3RLEP5ppKxz9amtRV8iohLYNcP7mCBvPYRwAqHb9HSgJojRPJr7",
  "key11": "3o3e87DReY1UFS9uaTsDTy6NVsougxibYGQYLGP4jVQKdjfnr8s3KqFUn3goAJPEkpfTBiM9rPgzsmhqnKcNpQdX",
  "key12": "3R8Si7v3W613ViCaEmWFLrmPA7ubbxaEmbuzBxp79LWG7UPo6ukaw4NN2adixwVfin1oRCTve92YFfkAkyZsqxq7",
  "key13": "37cfPQX43JaTTceQdRWoKus9yW4B9DYcrkR4uBYBXwMejgeEHrDWYnhxyqfj4VVBoQ18rZidAFghiuasbmp5Uqp4",
  "key14": "4ZDP4wpsyQhLWevdMxigy2FiHpdmhWDsWYXZHH7RTYvWzvrP62YZfyT1BfiMLufqiTF1GXWsHgJ4KAgYzxt2veNq",
  "key15": "65CP1Bohcb7oW3R8pJ5uoX1tYkgaiQ5dYeLV7S4Y1V6kJJYezmUd2Jt4L9tyL8nm9SpJfxzVmEzLRESLvWMmBhEQ",
  "key16": "5ao8r5wTsoroXgHAceGHW7DAnvdcTJXkQ7sXDzSoYGWyCZgERmsNR8G7dGzsdsthPy9WKH5Qk4ruN35hTKkvYLAD",
  "key17": "3sDVYBRktNzfoKxzyG91gNFtc4ZUo5StiiDZby5poMivhFYa6qW3WaXWSAB2hSetYkacdSNrCTJFKL21kJWhEqVS",
  "key18": "4dZUm3EE7kUmZq4AVMHXe2hfzPEC1s3CdDxqzPJG57RQ5mjgygxvNCkYf7nFuopqacryArH9xX4z72LShN5J915K",
  "key19": "jsWx9W3AHf3eYxqXeTyWbzFSn8taQqGD3WX8mL93Mt8jDgGpcadCKwe38MrLPG3T71kiPWMy8cypytfGY5XHQbS",
  "key20": "25vazS5Tx9hN9QGJ7dbhu8HwmCNViV3cFrnLXbpwHyMU96RHu5ZqfprNPJ2uiEPWTR2fxb6WpwP2rEdvhK1CDfgP",
  "key21": "r88QiFb6BPL8MMRq53kmGU3r3wchmhWoNKvFzaFX24GzdmMBeGY27DTrLFvCXkiszZwiDDKbCiuNT4Rb7vnTdLc",
  "key22": "3UY3ErnuCM1SmNwMFMPHPMMxL7Z7h1XNCVVX1VWTTq7ra1NY8apMsMEf82yuAmkddHhhwBR5emk66b5hbcur6X9P",
  "key23": "F3A4H1ju4gSuaoPZNekrNU3AjsHHXdTPp1WVF1u5j6BuSJaN9eggn8yjtaH6nBTYd43WkxTDYdLb6aEWV99tXKX",
  "key24": "4hj2Cb35Ut55Jijuks4cGyXkzZwLhJ23dXXxi7V1Uc3P6xyyHY7oUm1xnEB2ooW6yifUCH7K7Q6d8DW3H7g2PywQ",
  "key25": "5LotWaSiMfDixdRNM8efddWY8tej6XYeCnEtGAH6jKjuUaX7UHWxunt8xnPp5F9MnLNGVZcRbVm9YaMsASoWJsDL",
  "key26": "4bFjvuf47asjnSharzxD3VVCxJCivYyRAWsTQRnLfwaH2moTewc6nRfFJskWyKZJFKA1rJuA3rZDSKA1Hpe2iA8w",
  "key27": "5uTRhY1662nQ3rZUGAUaGiXFHY9QK94xzNvAa4XsA8kQwypyhJWByT8eroQcgMofEW1uef7qCYWTfCo1WdmaTJyR",
  "key28": "4SnayGh866LjwiU1gB4yza3pEmCnfwfPDtP73CRHUkHvbA7xEkD4KNvChiW5os3UMBVyu1hCPcy8zzAJvc381MHq",
  "key29": "4nbmRFvDyf3VmHJe5PyDpQbeVUnB1zTamBLT7jBfCVH9ccghUHUEbC2WbXvVd5x9ifQuL1dL7GhzEx8vKC19SdQ7",
  "key30": "4gHEnrHpnJPcrxwdp7HhZ9QEARu2GFJjc4GW4gLVyXPBVYrpGMxrhucsEqvhogTt59UhVZJzPAzsE6WJe4Wd3xDX",
  "key31": "cKdf7Bd25HLba5oF8r3vBgQiVL4rg7P1d2spwoqbhwENNZusvuEpeQrdpUK1gvLRpBaTq5pM3inj33qp96yu8KW",
  "key32": "7XhGDRPG5WagchSv2DA28nu6iGByJZ8wBpn2trNPSLCQb2fsLNTe5Axbwcz9GMT7pvfwTXWkuJFpAs229owaruk",
  "key33": "4tx8unbarKX3GJ8PErDT3MmAjC71SerJKvWFUJ8xh5NYAg26hDfBDhFGFzZ4qpGmASnxSNCNeUcgYkFS8Y8tymUZ",
  "key34": "4ykuyJxnateEnv1uKvQFY9A2Zx1RGMPiBzGk9ZmEEDyTket2M8h9NTiF2EdQk5kUmnQyfEeVawyXWEizvert91LN"
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
