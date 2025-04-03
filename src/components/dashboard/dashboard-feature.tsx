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
    "3eDEThBs7bWo776CHk1nMnwDvMoSAxJrKR5u6fCsMd8gLp3bN5Gumox47ZbRfENsmMAFmg2EwwPNiPrHt35t9yhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qGot13kX3LxaRurLYTPNDELnzT7TKPxiMwGSuW7GecbRce14aXys76xAnwhFLTroYvLQMi76kHdYRBFaRfYKjaT",
  "key1": "Kxsg2nRv8W7VdsM2n7ya4Vbj73hzMrSCPNxBuEWKetLezgzdrr5zCQ4f86FdiHatdajYqqiJowiDT7W9RE13wX1",
  "key2": "3mUk7N8KE7ekmDVqFJczz8z38Y972rkjdZjw5kmdZUrErkABUoxoY8ZCauVM8d3ukVDMZZ5pTnF6z49usF7RPTLT",
  "key3": "4NghKDgCMcFBUKckuDGFxHhfLzXMgyGWZZykGGp2WVC19ka77bFhGmkC9WpSjqdz2w9T9qpjUB5gYxKWMw46ccgw",
  "key4": "VfJYriMbpJ5Xxo2zkTtE5JMoA1vJmKpvsB8GaUrjaxwch1wiUFiaN3n37UMmXGpST9yJVCPvjgv7thML1M2ZMmX",
  "key5": "4QJzYXNtpT5aFgnptgHgCNBbHEr16K2BxiAurMN6vZZ7ixGpaS5BpRNPAaqwdovNWR5XuxiQjgjJCXEx7Cw1JzVB",
  "key6": "49zZipD7v1rPAaKa8Ja69d6Vd4dLHzFuZVFHG6RG91o25jj56K6Kf4DP1T41bycmwDGWnXtpaNMB3BKfZKgQbctr",
  "key7": "5dEZwgdcuX2swWC89qamVk3TSSFkJqawbg6s2TNNkajp6DXS3dkWRFxDbduyty3mGxdnFrWLgs2hw8TUyTYDuTk4",
  "key8": "243DANcpGas8bJFxj9gDbPwo2NFAVop52PWLJoJ8iNuCJeWnNUMqqXv5zQEcumNQJQddiRSS3qfCZ16coMrBv4f2",
  "key9": "2tVC9ADEugAN3pmTZwu6Mtyf1g5XY1vhRnwBQA8ZmFU46KU8v7C3GQz1T5CKk3hs5zFoU8U883fvTEgHgu6HM36z",
  "key10": "cbREaH1JdLr5EpMdqVR7mZReE4175a5TAQsSETHFxE9fz9nBmJdo7ex54i3cg86X8aKbr271apV2tmqA6ZDiprU",
  "key11": "4Ttdicrqg96NzX2SRRQDqQAwbhT5khuuPKeki1kL8o4wX1My7W9onbpWabLjR5FfbtdvixKJpuFLw86mPine5AdH",
  "key12": "W2D6dW6Lz4z5oRU8CQ6UWvNhWpmTzZPweGWpTfDuAb4xrFkFxCKnUDHd7LT6jsv21CiQDFFyxhrPAf6ZvNcsiCs",
  "key13": "4JPeebwb226rcs5XZuj7eXNxicCz2fy9L29HksLnWpKjFab11JdYWK5js4JgvLoc3wDTG9FGvQEjn2iV9114ms1k",
  "key14": "32bqaVps2kcqtNqdQc9uCc9NhyqiRLSNu6h9ySzJnRcuDahPM88VANpYT9fqHzpUT2dxoiMgLKrmxjCctPGbZYLe",
  "key15": "5yqBDBWhRNXmYMrKwHJFmXBmnpD9Ms4ty21NPQXmh3wqC4tyeyoHGymoexweb3CHkvbc8etmgNYfNsfhTS1DYGiu",
  "key16": "2dXodjk7NdDE7MATBSeGXqzCZeefq1EaSHRkHTy6wAGMcf8BSuKAncGD8bAgaoGwqXpBZVpCJxooksCHAPgpU9aV",
  "key17": "7op6fig4M98Sg81cJ3pRWQap2onoFUcpeRsSgTRvkngFmhNb1Lk11fKfraLJGA8k8n6AcgsUjnfkEtWdLCQJ3Kk",
  "key18": "52vbaKCbL8TVMJxvb6iusdStzCR8rTTQBLEy71wp4mMt2W11ovFNqQjbFiQqa9BPpvhNsK4PUqk9S84mH9oJRzuh",
  "key19": "4VypHHCquZ25TwYsZ1jtZYVA6fpRk1mAMZ62AjSi726FM5qc1ELUegkY1LenMGudEpy4tzJ8XtBtHZn8y7hwZgMk",
  "key20": "3tsGePhN9vKoXTaMS8KYXmZWNU6MULjbPCLiQacnPG534LbhM2muveu1CYuWK9f5VF51Jf1HBsZBvwguasay13qL",
  "key21": "51Mr9LKtQRuUAARD2hUDjdXiJx6smHaEZJZKcoQ6TstB9d69caGvY22UeEJFSv8PYkJ2SWU8BSAuqaKA3bo4xQjF",
  "key22": "329jnbNiQQhhbVRt1kaBxHNwdckYitEBSp4XKqjwqbv2pR5HMAwVswX6L5GuCUN783K7DcXqDqefVXQoz8LuhGqD",
  "key23": "2pgWAzxmgw83HwdxiDwuHjUk3qorMwobJS5DzCiRnAutmERdQ3BqtP5tkMLpsnkNgM3kPcjNVQBuoYQvZg3FsAu7",
  "key24": "51xCczMe8mwndnHd74kMXr5PdYvnLtvWdnTg7eFukrkSVc3FXta7zbGu3bNNarLcw61DtF8KSgAiWcR91K7yPGCm",
  "key25": "upowtVA18xkkEQ9HZhbXSG5Cts7wEiZ5sqbPjsPuDvSdaZGBMEscUU3KeTnhpmCgxrTHUYRMt7RstdsdiLAA6Sb",
  "key26": "2zdvA8p8uK7srtYBmtoK8ai64XuUQw2M4vibdfxzcZzRY5uSx5V5YmkfLEuo74Bc2FzgXLPVJMTbAJMDEDfY6iMi",
  "key27": "4YwHA7T9nZhmCXYit9UQhxD2A4WiJPkid7udF9JLuRi9qyEmpqVJmQBgoVMXyeapfPJ6F1mfhtBJcvv6xA6VBHfv",
  "key28": "2neyEMht6zg2kZghFXPBuKVaVtwsK8p4nwXayB6NY3K49SptSc3LJdfwYd48fgRXUA5Q7kp6g8d3UdAST39MSbd4",
  "key29": "4YkYKGRq2zon8DZAYpbDK699nC9LwJvXXpwmewo7uk34ED7NgRVocHbK82tMgkM6mQ98nqqYvb76pN9YoYRW6kBy",
  "key30": "4hdumSw2TpEJdaJ8aMY34Vz7Zg1B6MJj2gCoAKBxBQz94z1WQnshPSV4Yyqw5RT14B9zVwFvFVki91yDTMTX6fvC",
  "key31": "5oyoiPLGqeuanNXfGYi2MhWqRCpdBnRhbzxgnA2tG7JEtXsYzBkuf1zv5w1cv71ec3sWxs9ca1nucAD6UJmje8ht",
  "key32": "DpttEPqZZbib8E8ZvdNwAuSpXqLA8keKfRLcFVX7t4fm7pT6iTKVFz9ZrrWkUra5f6UPmjjJkQZzBWuSn4nsQnD",
  "key33": "2vzPcKxw7wxR5rfBQu7tt7DJxW7j5XbX6pTedE2FXdreUprJyniL6QyUnyQmchJVxB7svwoRwNbhkYK49EGh2zgh",
  "key34": "3AxTAJBDNvJNs5HR5k4vd8fyamp21aRHXLL2XdXbkXJut6jmsJW8FEv4o4y5AMAcAyKAsj6XKB26NxCha68ixUVB",
  "key35": "4GeyaUP5eYQLiaMU9NMo77HGZnSWvoUsfjLHwZHMiUNr3DiaTsxneSesvoPt46NxcQRHCsNV9zCfDCqpgRSAwhtS",
  "key36": "4KvncrpZfgdQTfw1Kejh9QuiGwjKwZ9eshik7G34uJgFfq3cV3C91kDi2YFcnnenZxuT85YiQTa6ZBkN1pNFKJJN",
  "key37": "4zsXV7D5v9RpriMAXEAf2xriC25yUcWWfZ785hvj4GNjTQqYnUZj2VaniSFZWiaVPDCszPXy6txby8VEtwdQfyJ8",
  "key38": "3EdL364sKu4ucY2Qng186jsYumqhb2GB9UXX8byDw8Rcsm3iHxkFqj4e3qrtc2yCysau1epThgdxuVNapUHaTmJc",
  "key39": "5MXhWvEcSYSLoYqmVuSxXYdAw4Lz8AWfoT68hw46p383QCZBX9zbrgTar6NyTQZ5tMabXU4WUFUv45Jg1Y3CV2ny",
  "key40": "3czsoxxjk6F5JTG4rCrfaGvw2GTM6tQ4QstVJ9z79mprfrxBZ3TeYFzQ7CgtjTvmYJHLj6p12q2GZr8EmQR87sjN",
  "key41": "5si6KQg9Hm5u5CKyDr6eqpTwr2BZp9HLZTmzmYJ5EwcdQ83etPLjnphjiXfrnN1UFAFvnL8UmiQp1gHBPPcm3mTf",
  "key42": "43CoEweMGU9CaTJcCosvyvfm95HPW8fVQkqwodeXhfeeftShuZwUtDbWj8efeUa5VwwVsDhKD7hPrvUHEQp21GWp",
  "key43": "2cxfLgd6ce6ru1i1A5kif7VMwXpwxPZRFLo2nWFtK6HmqkcaAzWvFAshwfRstYHX9TpJWA1BbhoaAAz9q58EJf5s",
  "key44": "2TvkrVpXwc6mm6AGqfE8VcpsounZNESQZ52Fy3KULfxnXKWkkHkJSXcN49YhGP7ihkhrWj27nxcvf21UBkTxC63k",
  "key45": "5SFUuyWCB8uNXA4qd7Y1YCiVRxumg1qbRAExuYtTt3UZPzB1UjVJkouaVu8e29C27a4nb3HMb3NPLjhbEgm5AgTp",
  "key46": "1cdvWffdBt8WodU9GS7SahweKN5GbEWsS7JC6VLGvSuyfD9kJnqtJxqLPWqVrQP4Kt8rYtny7D3dVp7nBrqnLqo",
  "key47": "w33XSiYhoLEvqDYtR5e1Lnat1dzC96uaxKLhzRDWyVpvhkDab3tAgaiWpZScrPjJLAS9w5qsfQR2gDqmDsBYaMZ",
  "key48": "44hVt43U3o5zp6gaguhjUkZqRGeVSoADb5pedMWaqmVEEVsueyK3tmsvha2VAEeGSF5hH22k93oFeYkHvpz6n9gg",
  "key49": "gbHzDdmGuGzEgohM6oo1RyoTQgqntDvpZL9o8iscnBSsgNkASDEszR2cS8TH2366J4DUtEwe2Pdni7s7d6X3tsi"
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
