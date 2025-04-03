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
    "3BmMEw1tPYbgVfH6qrZyhqfEuDmyiqFkp993K1xB3styzAeyU7HKSWWinqPXoXmQQFHCbZdHZmiJzEengS8RrwNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iacfJrMTziFoaofLmh8n2ukHD1e6qJf9JmJkqoBiVnt3HJJ9YdeSYfYCMFR9syNkUYC99HJpseE31oS61wNy66d",
  "key1": "52r2tVvk9K7Ybw8KhWyWQzazzSwPZnNtG8mBqwFBCt2sJHAnujyNCiRB5ej8cDXXxnqA61Y23K3rJbPLjK6EEoRG",
  "key2": "3wDFrXTtmd9YbadwesGrBorQsumNAU178E9qPEcEsQc2gJCD3iBRQ4PcBsAjPi4zgcXXwsHDHpP3wM1ezBfFLRa",
  "key3": "2DrSxMsjEpyYunLKQokH8voiFLWbSTu22GEddwKJJzUhjXhixkwz5AwgD6yyCh47RhD7qWuKztr3X2AXvYbcKLDM",
  "key4": "5z5N8K2qrzt8iyQLb2vVfPiyKkcqEdYmmXX5pVnUsyySMdLrW8yXh2BUCiGS65C51AJuSqSUHHgm3gT8oR76wjAN",
  "key5": "33scHku6kncjKuRzmv9VPafeWPRTSwjXvG7oi5Lt71biH2iucLg6CcpXpbJBCC8REd1RfNVA8QovV6Evuv3Wr2KT",
  "key6": "35dYYYfgALdnB31SYz1YrGez8WhbkjQiFtY3iruneZjhD41bNYQqn3BEvytWkQK3Q2yyPk16MekkFxSDvaKciREB",
  "key7": "3DuiZVPqrs6ziVmbdRLnj1npddQkQBaynv595jRAxPUZzbUG6ATXt52wfNhDsEhmAfAC1Zw7KuBYqLLGHvR52dxc",
  "key8": "4j12ZHGtzErhzBDYtggaLPTAXMTZuErJdEn1T9asc7e6isxkJqBv1cuPMtrG8HdctWhNjVgWjxzfA9eQMKFUKAwJ",
  "key9": "3YXHJ6P2AQ9dmDqJio1HiwtYW6D62K5dBBqJtPbVEGYJaYJ6cAokiuSwFcBtp4RZEhbFG2sopUCtPoAQTbPSvHAA",
  "key10": "24ERykUKYcEZrVquNYxaWkpN5VGsEjNeg3figArSQU1Ld2j9C77ix1a2gSnBfqKpgxDAFMCg8TTfTrtUfStjQrdJ",
  "key11": "FECzBRQhmmCGXz1CL76AXJd5aQ6cxRMw42eqaZ4n7DNLwNcarmrT7VEbmV8BHMK8PbrZFUMdWGsWYyMoGMZsMHY",
  "key12": "2SVoGjESbVV4ZcXZEQg8ZBx77zvCRi68yzsZxfeQQpn2o7TsdX1qUZHfYQ779awznU58PgZqop745MfKBx5fzRX3",
  "key13": "s1wCYSJmBoVJq35WviGrNwSoFsjBfA3uVcNemQoWERSMjhfpuZhrS5xpncsjDzf3j9bDttYAxzk8uSmuQwH7uTT",
  "key14": "3HgBuBzR5RpUux4nfe9fx9DupR9MEfE8fZ2FLBwQfcHt57cLs23sv5F1Y4e5ccSF3N89pLJCnzMucYBC9MDXiiQG",
  "key15": "2zyjGDFDUp3b1BchuFrY1EW2V9Xd878owSNkRNexyWxQj6pfZ56vRkzKURTLPCUPtnkpS1UqSuLyCwPYse3xiDQB",
  "key16": "4sDE1isvSSm6RRZAaN6x7hk3nv59CX9vzp2KRXcPp7zyyfPdcbRtAkg4eD5pp28KAxJ2GLH3a6bLSWgptQL2wc6e",
  "key17": "1zk2SgZta2Sj6HrHpuBaT6XCFsDHurBkUFeC3VaDKrTcKzGRmxjzV54mQifxjSn1VVdoYPj9M93G1fmMmrHtw7A",
  "key18": "3iX54ZQ9ndkxp6bXs37uNK7F1qV4sRncDZJFze7krXVuRyAgVPXY9f3JeSn2Jr2xjFFqHXmTeT4YJnCWTWZuDK6h",
  "key19": "3xytNaDpXPSzuccAZd2MKkpySD9fs66ffaCy3NC6MQaNb4We7BPmFfq9p9EJmj6V9yZyrbWBqJGno5fNnSYZrWAZ",
  "key20": "5Eb8U3mUBi9RGY27YqPwAhArrJ8X6Kocs4wLXiBNkyvjxZGqpRCSvYmsXeaJ542Gd4DVpXfQCCZiQdaHbRwbiZJx",
  "key21": "5sZnshEbfC2PzNQX8Hg5yfSLvYisemeMmbD9fkfJmEh9v6ssfgaVwPcXKnmzvcfP4r9i9oHGgcgs4Wqx2vgWmLQP",
  "key22": "2otKSZXsDrtgPCgeJPDntuyafYC17kEz1U4eg3o3cLdVtFWcFsQRQYQcQKDxDMrjnFx6Q2Xti1SydDSsi2t5TkYw",
  "key23": "3NsAobbpDdwU5hidb2qkDHUCnFrK9jp1UfxbsxBXBzq4fXw762VTQuYcmUPKX1LDyc86UGjqSB2jy4mqDNspyVTh",
  "key24": "4V9B5iQgCfszeZ8b87viNGN9WaoZSy178FUdxQEzGWL3Zu3c1sS9e2Ksrc2pZBi541GZuUoWvyf8VH7TRzNyN2hF",
  "key25": "3BTeyGnQC1hZ58rLdrGbJXdS4YMqY8vfynXd1dZE7EPcqpmWFEHKSyjegdT5MYppYgjrp14ResAZhLtWd5kyMEUK",
  "key26": "5B8XZyrD4YQEPKky2AQ2XjzQQmc3RyTvcH83wXqzHYWagoTeuCg1BTXZpEscbZbUUsUcRC7thYVRg23ZPBGDd6wz",
  "key27": "5XrnJLG2aFqbLHAa4wgt7qYku1VE5BiwuFk3ybQgGCyT5q1LU8NVGGP7WfXDHxt23eeRBxaH5tAbzBAGh28pudn4",
  "key28": "1257S4BWNPsoYX86R8bK31oZKzLqAyDJHZePLLyEtCpaZKvrb99FvKsk6asoLwSLoZMkTUuPddgs2VydiXKnm8xH",
  "key29": "26SCZtriqNWSoCJdiD94dfwPoxm7K8ZWHh3dYXMSZUmUsMKhAv3LCytV4WV7UNyrog8sC6w2PKNeNZ3p1qhQrwtn",
  "key30": "2UQmokHafhABz1ZrNWsfR4ffLrtfH693tcUkiC476TMjtCx3C5ZSLg6ZhCduwyFeTJPWqxo8VMvJGQu1yzKh3Nky",
  "key31": "zSZ26DCA3oDWpiwRv6iTsGEm8DxuaQBNoF1L7vT1TgDQFP4WWFDHUtaG8v824pxyBgBpYUtkLkn9NgXvNiiaU5g",
  "key32": "3P2iteYjxM2tZT9hRTfas4g3LdtjSq7AyYJhYRr5r8uXAsxavm4DUvwMwurYcV8Sw9K7Rszv5FR2wrMJ2Ar2mkvL",
  "key33": "5TztqgWPBrA2Uk5azqhUV8f47eabjhis6iCoWci3bxenqB3p4rEjtegF4ALR4YLGskTtWMQQUREaSWfGMGoMQ3tM",
  "key34": "5eTiiaUEcAvh73eaFf39JeiS5xwHoAFr9wuf75jwEV9E1WSq77aqps5sQpffszvVMrmTATDxraTPKKzYHuijruNc",
  "key35": "FPxbcqFSYsGE7gbG5ixNaAen2uE84yVJXmrv6voRhEo7rnzDovtR3JpXCj5XKNk6jQhvv77eFHBBsxW94vUUijV",
  "key36": "3KmgTpAcq4ASC4Wk3BGwoXBrc7gAXgHgndQdeUaitsp8bZ1NcNfhYz4Rp2JyiT2jS9wy4GUBr192kXvCLwjnJ4B8",
  "key37": "MJCbwQYyJ3STE2g9ZeFACeaWbtNP1r4rUm3u1z8C3NwfK6HsGAJKZCCEV7dRwkXQp4rGsTaxqv9Ex5AN3gTgLVA",
  "key38": "3SgMELWZXUW5vUL5RJyMbXTeHTADjESBuk7cPNKx4nLvTn5GmJHWR53jcooHcKBQteuLqGGCrpQ7m1b8LX8XTSL",
  "key39": "2Va3XHqr8RUDvNj64PWPzB7NnWWZtbriSmwzKq1nSTow2D8ays8Xzt2HmUNY5JBfPUWqAETsEwv3hQgoLMKiCyne"
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
