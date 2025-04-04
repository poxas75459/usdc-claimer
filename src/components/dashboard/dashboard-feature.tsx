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
    "yXF3DA6tapu5VXrVWWMyoi1BxYd94yaVddqQec5YCMbggmtdHgFpCsJTBZpZz6vjVi2eUDWozZu6MeuJFSxaDV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4arjff7SEaPsPPLyLPETDhe5GVRUB7G3Va83WWGkboupgq7NeqM7pLbrLks1Ns7v19g6dp4h8zdH1EniUuRQ3f4Q",
  "key1": "5GKaYWYvmoAVKkLGxyexugW725R6bFTbDprwwUyhmktKXCeAHVZcxsAxUo1Gqi7WuLespaR58tYDifWBYS75v722",
  "key2": "45r6e8EZTd2KU4dQYAanaLKUp9eXofdreXzzkVGmaZ1Yb9q6S5fVwVPBxyWdxPdfbM7XjyKEBFhU4bQehpKh6f51",
  "key3": "224sCfGmZfnA7u2RjaJj6p2dRntaGetcNxXGoPVozskXEpngRnuaQJgFsS5NJAALYDSKUqTpvkNbMUrrE12LnWct",
  "key4": "4gvANjh5yv6toit4H3qR6MLwb8CQU2fFQyvrDFRC6qyiZ2RND17Y5boAfszfgqdYWqHhkC9ajQEQDida8exh9owt",
  "key5": "2t6SeQqfizDXv95aPhso9aXxnnNo3odE2YBJjoKUkb3Y2vfpnDyMPYdXF9PEXSwCe3YuTnQbHTe2rG6hSqAyPkQ5",
  "key6": "weCJFUoebh4NGqZjMANEku4S9ospePNcVRnQVFY5fV6voPQvPPrkZR18wBb2zviUNuAT3UBmxU739XVMQAtJUzL",
  "key7": "3nnjUrDaFyB8xfinLtjFCexjPKH4rwQ6d1Jh3SZMjgxuSVpGu8D13Q29v71LNAbCcGDSwJsUxSXawbH5nE9cXzjF",
  "key8": "5oEiG4KLmxw7KQZi7CdZ3y34ZdmyKQ8dwz56GqdvV74tjgRyH8BFEt6B17ePLbDohFPbHfB7KtYtewuPE68yCoPJ",
  "key9": "4ECc9NLLkySxY9DJgPt9PWTKSRxiENHB4FdUiMktMbjQ8cmGVpfwjJxB95LZveme1AifkeKu6tX42bHtCP5mopaf",
  "key10": "4d2M4cRvyhXcxGzFkYaGt6U6rxXVLwVEaq4GqE8EUQKwoy1cP7BmW8YuG9AvCfU1Y36taGbgAQJRofzut3EER4v5",
  "key11": "5Butx4PJnEc5YACvDdUPRMTG3bM5RZpuSuYQX5fmw7Y8A7CQBqDfzbL5crNSCvbGz28XjmhgL9VSkh8iciZN8FeU",
  "key12": "2ecXCr8VQmjzhZqeipRNEs4Bq1JewTazBdh6xo8N9afGGvFuDvXQ4QGgyHriYvA4BM1t4dMWqUJgCH8yEAKzzAyr",
  "key13": "57VKrRDCGfxJRaLx1LPoFvke67MQacVLgJij4BUL7DjA3fhcydPuoaw9kXJuNPXhgFt3F4JrJiF8VcC9vUT9j8ob",
  "key14": "3syc2n712wZwgPTZ42RAvFnpF289UpK2UKnapf3w7N1UeBvaCk7WFQN6SjGxdeVq8WNp7CQUfhaN2NMB5H1t9wUZ",
  "key15": "f7iTswpPcmzjFUQpBCvsBXHxkAoggdZBYyoxQJjD9FCYAnngdKDCBgHPiX2rVe83gDGvmxMNU8gmdcBDe9g4VHw",
  "key16": "129bJmZqLR8grTosKYqrYwq2n9McHPq2yCHGDaVPSWvj4rdqJq4nofbcyJbwpVBdqRY1cxzjmcPVFN1XQttbkwQ2",
  "key17": "5Z1Re7xrdWUDZ4ByEE73EYTkB4tDArXFeHoSGZN658ug2An2uzaWV61RAbZNpXaWgeGCQoBUsYfEqjJVAN2vZToD",
  "key18": "4uwPd52H2mQtW47Rr7WQkCkpap4Yxnqta2crPWERFq9ao8xhpqiB4D6vxvJrZEcGEL2CMgnd5WQ7RV8ZVbbzUB4J",
  "key19": "5FGHBG9F6ubu2iyd1XaW3W6R1Z9ceB2ZkRatTd8bFHGadtSgQKzkKSUKKLFtVhw8c8HMmMUYrhwVP1QuuEbdykPE",
  "key20": "3GsfRPrg4pmzZ7SLbVnTkBew6DR2TFktsDST5hrtRzuCfbR276E894D4sPSWeATNSzHp5oQG5aLYcGsQn9sBfDpu",
  "key21": "4jveHYQDtpRnNS5KrqCkC1oncbYMefVPfQsi5CzGoFmvRpvNukHaqerTBepeExmWj8SxGm3LpUWPLpPfhqBJih4X",
  "key22": "2U6zPUB4WGyDNrVmJNYptjg5mgi9td8shJrPRaZaKXsR8a8QJ1Gbeny2xNgmtk38EZjgNW8ZNcEbU1KWa4Wa4ny1",
  "key23": "33WqJknrPYgmiKa7ZeeHie8BcThWCAVCPoJ3ELvRNhRYpmi1TNygHxwHrfyAVatTusuQ8kkfgrqisTtdnvzvqo7X",
  "key24": "5pVt6T9RpDeEDztWzmAEgc4EvXyA6UVGQ6fzME4qL5HDMXSGKjpiJToxYwCBDYiW11uBPP1WsvBuib2Yo5pENBjk",
  "key25": "n8cDS953gt2s4wLEp1ajDeuPj34pmXueYePa3933hZAkoX9RHDn3RbKbpV2EDhBR7sRTE2xZPptiujr4mrcWKSX",
  "key26": "NDWBmei3Z1XXgfFfrtBynX24PnALoHJYMu7QRDU2fxHNefDUpYTwywRWtfjXHNd9W43bnUGAf3Lcmw6HmJcFD9j",
  "key27": "5CBH33wqXrZegWdjrA6GDQjfuvPdMrmTBqYVacQwLtst95z1Pst2S22MLb81qPY4QRB987y4iafDjB8ehzAnZzZp",
  "key28": "jtx1WjdxuD7y9HYS38L6rERzmP3sgGvkrXJv1sdsRH7YupGmKK7HNRq7issGrH9XdPDTLcsUXSAtwndNZ2Hj6yE",
  "key29": "RC8BcX2gdBVQ5wdwRBmiuCodSDT9LuLTWJdpGLgevPMrWBctMgDebJeDUpBDsMjXGNQ2jpiWthtHZAitqzQuwNF",
  "key30": "2fAnUVvsBjut478G4uqjMDrnLNXAx5JMhcizFzXUEwfMBNa9KApN64PpUH6dc6D2pnxmCTYVSSBn2LX3Df4iKSL8",
  "key31": "LE7ZJny1XTKT6QRLJyBnw6ZNXXF4N6h4cJHg17udf9SwMuSQ3Qupj2BhCj3BD3XpnCLWEVWbvWdMi8T6NqGLYuw",
  "key32": "42wDdJdRReR2MaenUU5ELkMiKXUJYsM3a1vRT8xc9RqKnPyuEqtcLjUhNMYtPvQUhKnRaauhWRimPXQmXiY1M8in",
  "key33": "2WpMX8Y8Nh52MtXdXDcY8LjNW9K54noR9poU6qLS59ZQMirBetmYoLs6Cy3pY3LKCrBKD3J3wjQs84DuMAP9zAJP",
  "key34": "4JmNx8bRvmBNepZ8NkPo58bNHsawEQBZ1xSM3MnSJs1RavZnT6YQ7sDP1SXEM8cRhFyaS7svTm29DcWxtpd6sZfi",
  "key35": "nUM2HUEn8QQhu6jtVfTJ4orjegff5tBxZX3YgATYu537zMzNspWHHdkrZoiCo1wHTQvMW47d3mxK8cyXkgAj7bQ",
  "key36": "4AYW7jFhLs2cRQb1k6mnsLwJa6oTgri4asR65cGHCcnzzzL54u6htRwariKgjhKi3azdx9Pq9ACH5icYzZSn7FG8",
  "key37": "4zL2z6b8Fuc1hvj7y8xFi44FgNa6kH9Bc9RZJBaNVJLvggeQddVfjq4FEZYWUzMd3ZTHbjANgSj1kFT1Mn8xjcbX",
  "key38": "3HXaHR1s3YneuzAq7gUdjbEdSjPR7uCsGub5vCeZKDe5Q3Bw1M8d5HdKLkBaedEicEssDFGdv7zRBxtiuJahtWVJ",
  "key39": "3CCXU9szpcdZpT3J8JnDGJqtemTbg5tTivUaSeZEJc3f7zVCDuUFXKmZxY61FWnorBM9W9aq5t74GCBEhWzLBroH",
  "key40": "5NGdHWyPK2gjbXCh9FLfVJ33WVYUNidBEBMqwTP5zSte2E4fpvqgL6WJxpYQC9YyXbKDnwYKuFMb7n6i3xzNP6VD",
  "key41": "3yXNeaK6bGXUg5JD6tYAqUZPGv9pYx9wdk8ihzXEbpnBsuquW2Bp27fdy5iML2dutrscxXUWYVX9nNbKa9YngtHd",
  "key42": "5PyteCJ6hkij9T2FPxG3qPdp5nqz9xkLpLGidrxEJ4WwMah6Q5HFxD1XqBBnGRUnzTP2dYWSNLAiWqxFSixgev71",
  "key43": "ijp5pRtVeARNZhktsEYAtse3m2MvRQfZLDVBdGqARDep5ec95f1RCJbL1KLiF6WMpi9Gzb76LzEC1WRPP4s7E8J",
  "key44": "55aDKNFffSNfuYUVgjdaFDwo4kqmZxNqCDT3L61XCmmRAtsbQkXg4FJ3cHZMZaapV6edMPsotSt78ESVZGsWi5CJ",
  "key45": "5vPk1uptQ9XEVBxGsn7J7KxVKW3gyUht1AT2yHQYvnFDeZM36NCMwzGyVUWwCooYggALLf8oaooFyX8bVQ3UpWG4"
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
