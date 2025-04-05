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
    "4eRhk7Kd9ySogVdrXeXM6d11b1tzshjGSyNEr53PfqrMmyRXqHVumkF26DV7P2pRQk6j8e3fWdNyUReen7GV4dh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nAkkqbFPbiywrchwhKfSgAKntKsNzBPsp58aBvG34cxdoteNe8e6w8gqAUA5MKYNS5xNRBJrvWYVizzqfAAgaWe",
  "key1": "WRnZZ9vELnq4kRs1ssYQH9uevxYAxurcw144iWv7GGGDP7edJuLhg8KaATs1UK9sKn5SpLkcfxrGNRUGjKF3TqT",
  "key2": "55JJeTFWgwvzw8fAPSxDU2qL6pGNkArAa32uzFsrUsjwvGFTPwYmrqXfppdSobVEihPA9Dd4PdD3SnrqnrYrnYZ5",
  "key3": "5Hitg8wneyKpSsA6J2fXksShusq3SAVqK28CdQS9KuUTXsmNDkzapDfdVFw2qzZrZzQCZmoZu7XxQkCPWx5JiVzE",
  "key4": "gQd6ApFDPmaKft3eQvDiXifEsktT8TTEskaJakUN6d1btd9a1Lf4Dbfb9Tkwvie2QaNkEiBTGqMYJuxtPGFewfC",
  "key5": "5jpAY1pJDpRTwaWxW3Aph2jzEfxGEYhRJTdotucoHGXKpHVtvP7Pzh31j3tXtB2Y1J7GYDS2nJwDcqwaHDZKHxrE",
  "key6": "65W2B4xcvb3j6uUux5UjRzcjL5dGEizz1DKJENN78BjbAmgRpBiopoH7kQJxQkJmZpr87Z3GvT3TexY9vjA7NZQy",
  "key7": "4Mb2ucyvacwNsANFA4y3HNEm88yyV6AAF7rjMZxBAzkr9FPCg1nFwfj9SRxr8e96cfPHSZMzFP5Mig1G3KmtR4p9",
  "key8": "2oafXiCg7bTcnULnEhfvBh1yEznJnbJqBmnxEsdS36SP7qDwkAPmsgTeHTPbqEAGbwDb6AZqQjnKr8AYtHZNx2SV",
  "key9": "sRnpX4RhFgRENxXc9vfJajZNFt2URTeKzKPeg987scgqBY1ETcvZ8PyrZLoKhVq4c8r4ZuRMkoe6ZkwQXjaqqN2",
  "key10": "41Sh6asRBJBrzXrTy89guxNpNFBrTgHULWG3F7iHdgna31rMd7tGvBNhWce7sWsZDfUT3y1yqRsXR8sY1EEGjVaY",
  "key11": "5u52m33YgTk9HYAKL6wS5zyPfG61QYheSxfTz6Wbi2meXRwaCvHG8YWkRb6Jo4VBmfAEHhPXknuGRjhMMvXqhgiJ",
  "key12": "4MQWcc2oKYjtdZuMnbKzma57wSKikjQGf28wLd8K8JApDmRgV9KHmdK84bMivvwei22upZAtnRrzx8eemyxQhqEq",
  "key13": "wzVo4YJ1iAsajv5qfZYnaK32kcTtz5nNhcvDhR7LCYpxNpxwaurs6u49XALQwxNDi3c4PGYcN4MBDku1mqrwX4J",
  "key14": "2Nc9pcfTWTTXtxLRQzi13LdXqkdeub3tUp2xy5YNj42ffMfGAQfc7gxXZArvJMZqmHmrxZkfZiBJTJkxG316wC1L",
  "key15": "d4Kueei1LB8qCzFTycaVzo4TSd6bZJYG6HKF3NoqNWRuoMpGqp2V79ZRDu8LCgCDzu6HWDLWojgUAXBdcQeEMKA",
  "key16": "yeDdoQ1CQ3bSzf5k4Z7c8wHQucZZVFG8TtpJMfZq4zx36ccPL6fYVaD2KsrxJpZMGtAAeZP6WC7zPRxPrE5v6Xz",
  "key17": "3tzW9ffMdCAMnFLVJ1pPdAKtPnyFpSkVWGU59xuJqYKUWVCzgytK1R3FbxYnKpAfLzpad9D2LBXcK94SMyPCyf4U",
  "key18": "2YddWRG71MFNC4mpy9DC39ruashotgg5DPH2tCBxMXnG73nDDCoccRqqwGQqxTaQ6fUbzVSfwz8nBzNRseSxTni8",
  "key19": "5XxFtSPkNQ1K48KkZwpPvVN5dBB5MK9UvBUs4aM2xZcSwKJ4sScWUobJ2mqJKTgWqdTaeQKt6nVnSqVHEgMTtC9V",
  "key20": "5ya5NAGCUg47SXGFZUFX8wCh3V4G3zrTKbHT7kpjH8edbXWLQEngNG32G2prMnVXimYAPp8yJHxrN1gnD7mJA3AA",
  "key21": "Nc3CtpKZPMNXozQbxGkdTdX87Rqxmh1KagNdKvs8gF58gh92asery17jhp8SfY3as2Mfp2MM4qKwfe4tWNjom8B",
  "key22": "5c7aDRqVP5d3mcgfHwHsJvks9ZLQ7zccoet6Pv51g3mwaG9wHa3nJeXVAGEb6MCnRHg391imFdtMdwAud8UKAsHM",
  "key23": "3VjRSZ6C6mnXLNPnvS2ECDVqGLeQRbWonjyYSLvoeXtqwXh3DLFEgyTigtU95KP1ovayEjcuGjC6qBM2AAi5ZFSv",
  "key24": "3jjY5EuLY1KWQ5n8RvPp4mrMXSYveBHmGVqUeTwhN2fWzRb5PMh7LoosrvhTAkzp2CbU8anj2h7d2FJhivVX7yxZ",
  "key25": "2SgQX1ZWgVkRhLjEnWSMcgX3GoqSbPsLMQqwarzJB5j8pUqBEsKe2B9YcLtHheB73Cum5PMsU7WPf92yfaVLr9yP",
  "key26": "5y2p8Aq4Rd5YbyGmz4gXPWS4qTDGzRJy2rjHKg33YhftvYZ28Fu5N5ArZd2k2wGJj475YH4NSRDXYQesWfNXAW4w",
  "key27": "4BxQHtTYRwk1jPHZLKZZAnpGerLRyxfydk98J1xyVfAaw3Di9roN5wMGE8L8ym8xRfmTgxmFb1xToszeLmbpouop",
  "key28": "5M9zrJC7Ri6AsieD4aLmv1Lf3n7tEU6KqsERvcGkXAoQJEYWw9AJpeoMefNuvVjFoFVXsHtBLdnGP9ju8GiXdtW2",
  "key29": "2CNDZsHQX1JLHSFf37SUBdrZkshH1vbMBPSXQJwur3bYWNejCnwbLVmgXqUHsTySnDsdUFFBdGPbSaeZr8DVehf6",
  "key30": "2itiQsmt72hC2JCJKR5bSXQEEHhSiK6XgKnUKZ5UC44ko8Wu8zfqna8fcL3crpuaUzjL9rZT8HR596gdMvesHCVA",
  "key31": "nYwcW5GNGhPhAG31VCJbyju8ExQEmWm4UifvASWyXdR2inXsyso8NRUK7i3ehyL5cwLgLL2qX74DCgkwFzWcwBb",
  "key32": "4ZJjEAvmXMwP75tGe3fns8QDZcdrYz4ZLpyzEBXntTvGoM4yBra4Zw4nK2AGED6q6XtWpskbEJqdrDPjsZCchnuf",
  "key33": "225MGUNJWMehqzW4U8p7A3nMoQy6itdcxC89wJyDjQK6ibg7qnUX4voS4gd1SK2fXawwqVJPEuAiAvgVkw31XnKg",
  "key34": "ENso4SBkhsrUdEfSjnLR5mZmG5acCq8n1nAtQaymyNe7AnfP8BpD4Tt9tvLGrkLJoERwynUC5ERCPyCgz6g64Le",
  "key35": "5QRea83s6tg6Abxg9Rbnvdwc3ottT4Mtufmkpf5sySwaFCmscNesqGEqTcMnJB72yQTUbVnHyDUn3tQCmxYMj16d",
  "key36": "6423XnzzhiDHWFS15b1gJTBtg994Y9rvNMNM7RLJz7E3tdTn9PCtWB6bUBgz1evgAsL4mAavakv4fw1PFJmjVSNt",
  "key37": "3LkmbxFUtfQdjdh1uVHu4Xr8hrAPYB84XRV61YkvWx11wUfuaA1acX7ULbPtwufR49mkKwFXUGuCkmvws2RWkjkR",
  "key38": "4Gjbkw2wPsitHVu5NgLdaWio7qDJLTch88qvP9XTAKER37nP2p63N58pWQNFQZ9MnfDgBMRH7kzswTGaD6omHDCA",
  "key39": "26ptBupR1ZwwKQRujff8dohGSWFrJBMdNrYGs7eo4SDtu15ef9pjGoZRbsMr8MjjATCkPLP44mqbS25LX9gjYZZk",
  "key40": "3RTdF7DuyHpyc53MTVVmsy2jbGsFmdUh9FvputfsC8QZvEzbGrCh4SrG8ssjGFLWTCq5ynmoQarxU2JgsyQwfVnp",
  "key41": "EKpp1xD68vAhFou2CEUvxj7yR9r69JEX61s3UxorVqQJTYhrynde1cWo3EhYyLz2s4Voh39LiuEFGRi7gktvApQ",
  "key42": "543Em75HwNCYExAn6z1PwJRAFjAWs2uHSXjUDGtSxw4CFemYQQkUc7p53XgjdZNb1vJBW8dwYG5fFH2sPfcTrMDY",
  "key43": "5BH6nsXC4uVqVYFGNJJ2Zc5kcUE5rahZcjPJkSEe9ewJv6g3C4orpyCb6da4xBVN9Uj8hKVuWbVSiBXTQiVugADn",
  "key44": "4wT5MgHNpy54nDz47SvM1EoPC8wAg8Qyb2GuyLg9qr5RA8bxf27dZ9z36BxkUc2Bt4zwSTCFWqgA1WtjhqjDayEQ",
  "key45": "2u53ThyThrYJfh5RqJZSLsSEGf6i8NdDNxQx8ncWLmPSbCS1Xe8YensSRxShsxcZ3pV27AtSPJq6XvcFH9rRyc9m",
  "key46": "3JjkRD2MHVWZCAwJ55uYECGd4hBP3oRfz8me77xqXw3Z7czPjM6zPobPpttekSprx24vND4aPNHKaHnPkprqmaJp",
  "key47": "aYHMrKMDeKQPsteWGN19MQ6hhHNg3AyUQff5pEcJkhN6hzGweaXBnRQDX3vMckh76topHe1T3SNu1sSn9LKFy2p",
  "key48": "3mqfPG3TRcdZBMYjq8WvbABqDQD3z71nE9VjpfuieiSaqdvk7dmZZpGrotWbXFUzeVdUQ2xFMrDhtBgXmp7j5xPy"
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
