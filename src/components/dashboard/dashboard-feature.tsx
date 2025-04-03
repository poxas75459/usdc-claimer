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
    "5xYZcsuQh9Qc9HMo95yLa6ZH3kg3DQ3Q85YsjadAdsZNCXoy6vYnZKbzs6gS5ZxyjDcHfkd9CM5qJceZ4WNjQcYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BqFWMP39hnVDv4KAFVCHXG4V1KEwfYzVkp6LccADm69Q7Tuc6iyxmGg7DBmhcSjoVhy9ahRdjjJXjK7deMwAkUC",
  "key1": "4ZWG2xp3YCG8tTEhSpnR4QUP8sa26F89i2dEthqNTwPYCHLc7UaoJWjHV8ZcXfXhTfupFJCprg1joX98TeaCKdFC",
  "key2": "EaNYaAukD2mBmvWypiDnQDHiAArxvbGyMEqu886gzR1gSgHf7gYqzWmqccKoeY2egsQoBh9zqoMYbKmBx8pQsDL",
  "key3": "6vzsfPbj7FsmYDbE7Arrthce1VuCqeAvANdzfYoABo9oZmY8tQQcBwpBN3RcoRrrZH2frNEK9DwoN12rQrxF16h",
  "key4": "21nn5bN29SX1ZjpkH37x3DkKBDsaWXAPb14Mo6WrUJGStHShxYp5wcnJ21BZBGt163mdGRhzoXr33NGvUo2NYCnh",
  "key5": "5FA3dfYpfN2eETcbiPWbPH3aNfCa9J9Seb4q51tVHNXcjy3Kr8nXkjNwr4QP3PHRXNyTQmV99tBD5tEagfQ1SrRe",
  "key6": "2Rr2z9KCJUrTXjzgwoGpUx4XMSVGx33rN93DKRbu86kaCUBJBFFs9oZ7Yyo5vcmUoKazrQWupmgDgKRXw1T7NHMu",
  "key7": "2fzXPASQugLH75Afifj6jhMG6sFvLXcyc1kTsvnGBLereBH2L2B15Ux7YGdkGEk6yPUSxT8LNqLTqb9woACPynvv",
  "key8": "5UUAB1QhaVa4n2RYadgkqk1zwGyPhUmFa1pyQok733RXtXfXCVcHEYxQjDvi6r5apjNY427LZU6Brr5fmy2V4KSt",
  "key9": "5SLfWGRWkoWtNk4bAYDeKiYZApZf4rni8AZhaHVkJjp62bkEwc37b1FNocyzEceDfBYKQAF1JmcPQXnGQKiQfGZb",
  "key10": "3QBpd62YJn8q6n2feBJHpmiaeTDKpJx64u5CpmwRApPFMmGjEELQTHJZCevie8zv6QKLo4GaE6npXjsSJoze5rAD",
  "key11": "2qb3Lo6LK4qLwJXPFyAXEwMJACjDJnyjLaXYDfeYZ5JCTYWYKHMTXKyXnitfnBQib2Y5LJRunRSgNzzXgqMW7hfB",
  "key12": "LvyED9V2pArKFYXDTsSmSqJkwgHQf1edwaYkGCGVMVFayBjFdYgFWza83whWXc4B9EneMjS5SHrfWkWfkKw772v",
  "key13": "phKy2xQduA49G5L24CDQRJ5BnJM5byQmj744zdcFxzGFwb9ZZUANwte3c8uSf5vD3GtxavwVGGSAWPjZyv2gvwH",
  "key14": "3PYSmd8MwWkkKgk8DLWf65ppwArHj1QFeodGfJPiHq7m88j3z3CUwMFDY6dgasLvEmLL19RbEeqs4qApGcm9WDxk",
  "key15": "4nRinupG69kF9uNj1BsefrquooVvZbQiMtpj7wkeqj5ZgVbtv8gShJHj3sdPFE8js3TuvoYmSAgMqXk9GwqQkdUJ",
  "key16": "5HwhcD2hGKpiVw7Ry41e88Xs3Hxpio4Cg8t1h8WN3bHqCVBqoCM143ACQZ154NW1eiLoozuCRSvwrtqnt3m4LFpB",
  "key17": "3UzrnKk6PXDRJ79R82EGDkky32oAsgzC4SCjvddeo6PtWVNTqmxecvzp42rXBjAjH2d3iXspQmkECgobj9jEB2ab",
  "key18": "4G5YQXnYkFx4c7KNWys84RT1AaFf2jS4RUwgrG3BcDjZqP4vcXqHswtXzW56da5pEF9XotCFEr1uKsLDTgSfX6Bu",
  "key19": "3yKcGtWCKEYgPRzcJheaEnpqqVtURWuVqbX8Nw6TAC17tpobnJSeRHh2UeYaZ85uJkbzRNV1CZ2M5LY7TxQat3Gu",
  "key20": "5Go9EtQWqj6a1jnyMXnbH6qv5DLn8yrEcWTWyYzpkRPhTkpg7HGQoWbLxSKKt2CnkHSEsQoAHQrczyumfCbFTNp4",
  "key21": "5srNKAv5sWjtwwKmYWCnSuzBFPLEkmk5U1uGpCpAbdnckhuqDV89b5YGoRSzeDHj7EVKm41sGeSThhkW22EWanb7",
  "key22": "37VAPoSK5sTJtmP8LxF3seby8f6LmurvAQJC7VA9Aa5tha8ThEMVRPTNZwU6aE6bjG2RGEPgTHJCEfGSPGnFKzJJ",
  "key23": "5hpJYY3yvGXuPouhzGT6Q3XUeMr4ADyTgpAWNXZzjwK5LBJXtByt2xzEjLofuRRmmf14TRUNrh4CsSNEe2KpFJ1m",
  "key24": "2psEcVo2imAx6kjcTosVuZ88GaeFeaQA1feQdhRGJSAFEwcYw67Mb8RbX5V9drMBNWwnPgYVYw8dTkwaZWjPst4J",
  "key25": "4THSWv9VWdgiE1WhMXQiwGtz3vAaF9nQsX1rfZKY5TmQBV5UqS3sEJGzzSwsnUjiperUiYtfoEuHDdpuMiF8ihMX",
  "key26": "3FXEs8fZweDtS9M2jAFeo4oCAkyRrKUGQ3EwTnoT5hd7sxMpXohic2GZdfPLLm6PSwcfzgLruX65QzJZ9Rm9cyRC",
  "key27": "36fYCoojKDmjPrfRcrRh2b9Be5sw17AFqc452o5rirGL9RMdrj54uTVvWhzSGXuZZWwGjgkTkmUkWkewN5tzYucX",
  "key28": "4fNot1nChJ5Eqmi2VtkQGLiCe41MXYG4wuf6XgHBGVTn1JjU9fGUq5sGbevBPeqNdUfmoSzyWUHzF4emUGRgS5Q2",
  "key29": "3pgBkTFhUvHZS6452g3efuTTnN7493hUK5R4VU5VyZoB5FTtjRMPEWNWN4C8GAqd2VR5Nm8UJ8GtqeWPoqwYCPJ6",
  "key30": "5bBxf4Vqco8qbFP3oJxFADAgPRqQBWnnVh4GksxhW3uzhphqJ1XtokyA9koxeNokfw31bivkJ6gXsJjjHyaRdDo3",
  "key31": "3tVXLVx3fSQEbaKxo3tD8MUdB9va1aQpUkjWmm7jbBmcsV6AJfK9PE7Kf6yQH3XupJTKtpjVd6mtopQeGWqCVYgv",
  "key32": "51xcwAWpocij6KiqquDC7t6iRaiVvGpoDgcrBnevvxkNumrd7HisHCwDAd8CwgQpPg56hVrJ8aeHhNHfiuh6AUio",
  "key33": "4u1aYS1A8eSY1cQNmE4fUBgbfUh5BGsdS3scCJyNSruRq7TpkAtcLRzT44RbwZMeRue7BWkDEPFNPkfYBysUKfUt",
  "key34": "3BFHEpFeHxjwtCb3PwazNAyPmg5GnAjSiQLWnQttzwWjNDp6kUhnkzzupeHQ7Xgi5YuXVy1StE1xgdx4e1rasVaN",
  "key35": "4t4tJ1Uqq4kX1rHH8U8sHoZamd94P2n1jfUZLaoWMEgg3BVmaXtj2FZWh6hEfNUWpopF75sMezuuZniUfwmQjBrU",
  "key36": "3qzASMpTjnj1oT5K96MgupEM5ht4y6biE3E53weWGbRiSoteJgfxNrkbNpMarM11smrNKukrNTnzJbAJ68Vubc84",
  "key37": "2yc36AfUVvkNhR6Bv3NT7JujfdQsJDvaryBysM1Z6LLWaaYGZv1shivMLYUa37DtmRi9sJGvgsGe7V2dmZikWkyq",
  "key38": "2JP1F16f3JPgVHfAUTm1j9PkpxUnz4fFJbwajnWKHdcSLxyJdMLp4BBXtizEXwW2xy5F8jriNpc8NAfgBripHkCb",
  "key39": "5WmEewN2zTBcr3kSMWDVpuPKouRvta2ycDVciUHAQu2qETwmybUP154Q6i3gxLvFCCXP27gSLcBPYu9xLpQ5SsqM",
  "key40": "hGVGerJDPbk7VLHam2JGKy9NiHJMT2qtSrGWTFTeHFNSP9yGKh5n8atHesCo4AKRQ5kM1jdMBx7LNEcwBHx65eE",
  "key41": "3uJkCmfPEeLFqJmhhBUov5urvdWNeiquArEK3UWz7N6eBw6pjd7MrAvWZdo7ji9deNMDGeH8TLBTdz19eQVQfkMr",
  "key42": "R2BkFzpgps9ZqTMxpPziFAhiyRhQdx2s1yE19paWTCDEJ6MsFMLEuufHFxbm9ZVwxbDM5GT9AQw48g9DJ5eN1uH",
  "key43": "JtLvJcFcVhaUeb83ikeyAiGB4PpgcNAniwNpzKMLHKQHZ4sS9X7AKftjh1agW45MYiDjKUMgup1jqDYdB9BVMvA",
  "key44": "3bbW8GhraPqnbnvUuewe6BccMFK24fqcTLZSkr9Wco1RjReXWrM63nmAuAJRf1ELvV7NKQ4R28mhtygT9jeLmJYf"
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
