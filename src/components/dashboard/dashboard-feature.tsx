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
    "45T7eGrBfm9yKmP1cwnj8aG2JEUUeiHpLNHzkK4xF1u5DsEe94RR1e9SwHqy9Pgpb3bBERmFMRrjmsc19U5g4P17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KdzZeg5KEGmhDXARBJvsBtmc2gZGAAytY8PMuvSbQZdS4VBBTtKHhYL7BroptJH7tdfbBjaLTxPLFjCCUHTUtD1",
  "key1": "57mVdcEx3vnfzA46SySWajyJtrLMdJFWwtArXesWzo1HZUsEPD9HL6hH6MzwsvXNudiNMqPGuQ6S7pA914Sh25iE",
  "key2": "q7R9yQpm9hB7EUgbXncfvbYwbXSMDGrKm98zry1H5HrgNofmdZLQBzA2b4vwnm22y4pPyPmq6TnYg2XmQo9E7Hr",
  "key3": "4W35bkofqP3C8JuP46T8f8nHmEx6hQQ1H3o9DVb8Wp7k9w979CTTEXLoy7QYicSaRMBM9arfpF6LgK5p2jgJ8G65",
  "key4": "4shDf3dvJd6F3EPh72ygLmXnMK3TDVGsYF4ZckVarBJExPV9wP3DwEmBiJnpGbmssa9rv78w5a7Mqwu13K4TjfJh",
  "key5": "4kEJ2Xrnr8qBUfNywZ65976E244uCswmPEFHHqHy8VN4jexVTSgDdDBYRZ1tqEZZgRt1dnGmGgPgpFC6KXtrHDEm",
  "key6": "BX2HGNHKDezuoz81rQQfm77Vf5MDJJtR7A5Nm8xsfZubwTMFPLRE8VFBbXcFSYqb58kUbmf3boASyhhNJZo36pE",
  "key7": "2JabNwRKSWRnYamCTreoM7gzFBCFQ9LFVVcedYLEFNQF7zQcMn1KeB2GqzNQfGr3Dedp7TFJrvYoNfV2pGp4sWnP",
  "key8": "BvFBMy8oyApvFPp61FULBXSkPE7nRSqvA5pBsLPFBTC23GFrStRoposxZmPSVLT6vFKTxDdJ6Ne3QBBaMVeQ8x9",
  "key9": "5isB3jfZbz9zUWrAPZXN1TEZ2CNCYmkB1dAQ95XmMBL1mu6hmj98cgiU8tMXpgg2XafQy3XbKN8ueLPFndggbgn5",
  "key10": "4jX2MrU7BJGEypZFPWmRdCzJ4jzsc35kQrzwuTNRhQ8iPts1bS3crEc1CgZU9dgS33skum93N5DYDLpuUXy4rq9t",
  "key11": "7jtHWJtMQNUjcxE3K1YrncWxt26RgYBkp5j2iYbkjz1HkHzHcLE9iDGeAy8x9x8cNrbJGB1S3viWczQikdEjg1Y",
  "key12": "1o1mdYo6NpKdagW1ckhQMyLF6FMed1pZXB1KEv4Y1ibqKtFEEcPMJQf4acS6fvrLgAPg7iztKp1DvANhSCHbUvL",
  "key13": "2JxNfJsgNAENsEnemqYGsZkc2nJBhoG39AiavnZE3MvimCu498nuL3VcChKrXSZcJx7aGG46RdW2Zr7uFSgwkbv7",
  "key14": "4ycJJNZxEWTyNZQYGF9qDQi5bVy6utvroEwCqiP3pXE23UpAXp48iWVS7vCxAbb1ncgTTpDhLEWHRvcoE9PJy7Jq",
  "key15": "2AfnwFminq3WDwXqhMyJ9iamCm26X6EFYur6BS35mq6PLLh75qRoWxRYZ3L9rvugxeTryieQywAnyUoeVY99vNDz",
  "key16": "5f4StuprrYEdNhjswwvJCqnNxufVxB1DPTLh66KwJh5tp39Mw3ooSk7cKeT8FxRYG7R9xpPu6jBz2jPUK5J6qAef",
  "key17": "5mrtZZnpsLzj9KZsYVs6pfvLK2Qi1K2z1F2vc1hbUqALsUMQdqotYXX2765toRfEP7F8dqmhFArj6EdRt4V7X6mh",
  "key18": "3N3wvRxxHNa7iM1GapHGjriecyTys11wBjCHTTRPWGVkyJcrDEnD96nvJQxpjy5fcXZkvfbAysQruJPNVQLWFeUJ",
  "key19": "4iDs4aoCE7KmMWDPj3bPJSzrXpqxm9eAskfLdhWCxLXymAn23M79J5MdW5ESse9KX3JTXucb9xW77FySs2BbDPBP",
  "key20": "3gnZwxmkzHK9eUhCCBbdbydxoeNhk8FpPyrmNpZh6QQ87ZPkxxDbGTctHXu9WWNDDBqfWo7hsniwC9Lgw5ygEnsX",
  "key21": "57cv3ZsTy3rqauudqcxWYbh67w8jXjnYKTEEcq3efGQz6GXSzvN2TUMsXgJisBQV9HaouPta5ZhXxy76LVPUZyLg",
  "key22": "G1JjZDSkX6UqxXJqphQNks32c8b6ZGH9KadwoVYW3a13a37L8SKZuzVDHXsNjMT1ypqXB53f37STFWVp1Zs2qzA",
  "key23": "2XbM9PiJ74XznsxjCbGajuapBTq4ZDfTWfGmr914BhJ69Zx1hiXYMVgkQLW9opHqYiNagfHs6PheWDzDtUncfbNo",
  "key24": "2A7WpY7foY7opMPNweqgpK6fd7mMmeWJc5zrVR68XZUD4ZcwDtZ99EaAVWnMuuvDZsVMnLyBDxN6vcDDquYEeWfM",
  "key25": "eA89HfV7VJDgviFax8qrce493YKdg7951jpEKkTKDg58e1MXMDjGNvJTk86vfyKK5kHfYRrG3eA9p7vhrJkwBtV",
  "key26": "3QiL4Jc89BhSW8MGVDzJaLSVA9Fi1g6fhcEFrNZdshpVBNzZP6DeFYyfNwFGqAGpaRArW48jdAAezfmxqbuPQ6cS",
  "key27": "2MaFsMLhh9nxgJEKJqUy2casx7JJkPh3Q6CwrupC766XyKASGxbqT115m7ffBc6ZDsaPYXqhJN6AXU6ZBkoPcLn3",
  "key28": "2g7Apr2ytiCe3BanTxzLNpLLtzc2MYEQJM4SrudAHw31NkosNxf3pLK9a1dfGdxhheUSbihVJrhJHsvuV5TCgfK7",
  "key29": "4jEiQvKSTNtpcvLaBUuj3B4wCndfKMwWpz8TBy23253bzvst2QvkWtfWUhymcnRvTRNZjP1yVyAJQ3V2Et19FPHj",
  "key30": "4wUxJCPzQQ9KeobBLYt4BkABvq1uEf5cao4sapEooyL6SceKRfZbUEMc8eCE8Br4HwDMDDGoBG1eMakTMb7AEzER",
  "key31": "2YGWVg5sCK8pne3A2hZknYCz9JtkM6NWqNFzBmtXvPvzxMSfQC5LBgGCN5N5TCJQijrEaSiDojj7jehTfKn3Q4At",
  "key32": "4tJNwsWMhb8M2vXkFiEkbjPn9cxktPS9FxFGD4J3Dgkqp6QxY3eiVvxAv1dcHqTXh1Vvpm87zdeuVZpdchhotfJg",
  "key33": "5jPNdicPs2q3aRKSm1qx8YKDvqNka5pET8SPnidcrPK2WeEqWnkenDpD6vHJhqUUsqPG7fPjqDjssrZSNY3sHHFW",
  "key34": "SGocNvecz8gxYQ9aaaeL1UZDSqHYFjPbQHkKk6jhdQ1JXyi8B3aUJ5VeneQwiKCZvRy8YwtC4i7WQ8upiHcfp1Y",
  "key35": "5HPJps1w2dMPV953Jm6oc9t1ZWfKAZT5LVCTcr1pRQvuLhT2aFwqieHwjfhUF4YNB4FBToRCsFvt9kZcNrBJTFj",
  "key36": "67BXDY9hcJL8GsQAae7pXXBzvcuhGwBKttop781TTbXjT7biz9avJnQH3smDkYnxDDgGfv59XXtZuxRhnVEdwkKt",
  "key37": "AbDQn8dY4CV2hBPs1aMu9d5wuVs7At3pAY3UksHFWp6W3Q9XQxadpUPQ1QaoCwuHuhgCVybLjxP1WSfY7AzgAi6",
  "key38": "5aQRRxFHNGMTiKPjjMpPvxfPAjfKS4CrQiHUNb75M12LZYdUZFSiN8VywFXCSpWrKfjcVWuDdUgW11Umadv9yoe4",
  "key39": "48tWcQzEgQF2AeUbiHdtgLU6rbbUiPVo4W8TG6idwb2M44us9ida2keaai5h4jsMP2KX4VGxV2p1vXpnPwS8kvHA",
  "key40": "3ZvukfoR3Ky5ehUy3Ro689mkAZar1oSerNQQAzA4BneUy7Vh9iwQVMDhAZ1WdeaPfCLKHCDBUogrKEounnAbYFR9",
  "key41": "1zryrtd5KZ9SyJST29JxqYLUTmrxJXxKCY8AFozJKvLVJHDNDSGSj4K8i9ZvjB3MpVmYp9qGqPxV8rGJFb6XoJ5",
  "key42": "53N7QcuWG4yAJhDye82tdBkAb84A6MpswHnc4TnaxTWvg4w18fUiDWqVU1TxT3AZf1uHTTV9wFKzqeyh7gUxoKKQ",
  "key43": "54uuSkK31QqRB9mJ8Y2vJTk2HVqHS6WzKCdZXvUEwgV3MWnZSiKLaVqSWLo4CEFRiBPE97ZAdUM36YCdcunTaAkB",
  "key44": "ywcQZWMGpf6SRx3xARSSq4eJ8drwp4ccUi4GgxkBovd6pJuGZ6ffLUn5z6dPh8SAnp23L3K9jNX5Q73hxQKNPcs",
  "key45": "3pYCS7AfyGBZTZJhgBHfuCnoJSmj4gFj6HmcAFCvEr6a8TCTJiKhVTVvfYFw3hE3mt8Tvp7UXpYfq8WMrufVppyy"
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
