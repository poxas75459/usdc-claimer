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
    "1v6JvfW9YBTd73BLbu73C1GfrojkXocaVcFpfd1DPFNG4yQnhFiqBM15hzt1WwCHGDX15tG7fpwM3o37YGk57NF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XXKUp7L4WWmLCoVXRZBCwcjTBYzhYDRJCzzpQmSkvbHE5StDdCK1qexgfWh4o8xGrkXXcV2RqYL9EF7tK1gHdbQ",
  "key1": "4PL6YApXgjYRZ8KUAqGWdhC1Ysjbh4V5Lt3ZEwreKgZmZ1NMU2d3deytkWvWnfbSbcfeX3Hu41XkvdkJEFVryf18",
  "key2": "3PTLPQ1YYU2YQQ5Js43HCVrXVzbeWAGWJpnnfmrtqCsbUUZgmafnqc51XTHuBsrhgKAbdu5MojFnh5xMfqs8HofG",
  "key3": "3nW2NiUyJ3JFVTpB4kTW5SbFdiUt7aK9JQgiJ7u7k6pCR27MCgLnC9SMaX5SM8veS1s2yN3auQVgFhEaVbGmrX9q",
  "key4": "5ez6o8iJQ5vitPA8KJnQKcQMUqcDKNiVyDQMe2gbCb9uHqw82NFwNLziHyrDHc4x9JY5w62GHTzndUJ2a8CfhUpG",
  "key5": "4SxxJsRR2HRaJEM2FcaXMPKU6RMPYSJbBKCupaw2nP734xf1BFDsvdpj5NXrwaG5fxVJrU4WMT2ce5S9uyU3vhP8",
  "key6": "Sw8tD64RavfYJ4v1KjJx7XSE4ZyZTjqvpq3C8p3ftVsoCiSFrUKCeps1n77Bee4QChDvq47EPgZJ6Dp7mqWBihW",
  "key7": "4PoRyLUhx7VR3NvDtx1KCqmvRbYNLbqABx7Ftv6KKn8xbyv7mewk9tjSSXC59CPvGDVx7vJVQbp9pYe7bZst5f6H",
  "key8": "5Qa34NK4YuTcFfcEw2pTiM9y1PRPAMp4fpvEJxfmAKLZ49YDLyDAXR91x6X8a3mR34PS53HUqW2w6EaKdJZBBWss",
  "key9": "kNCwXBVH7pFcVGqYfXwn3fLWgVqaxBPPzi1gDvF1KZkmkTNGAT1cc28fLncTSgYNvtXSwjFyHiKEnQd8P2hYHYq",
  "key10": "46vh72kW8YLudg6qKpzpseSDj54wP2r6X3iUN1JfYduqrsZu3vMm5gJfkbuKtoGjw4HV9d94p15FaJNm7a1BswcL",
  "key11": "5pCUsTkQodA6ySpuA6EcQhGpjmwSDfV6yWYraguqxg4ydHvUWtky6iao3kocyawdC5VVG4wkhC4u7gEr6eTNDhVq",
  "key12": "P3LzNrXFJAgN61VQwLQ33PsENXNCcXca1XdXtSS4FQkU6dT4Y9RDFa1yx4Gn7vEoYVkcHYCsFFpLQphL1zMfD4c",
  "key13": "5sTavBhG93Rx8sk63kZmKFCtDwdFDkjYLXNhRY978g8YR9AWTVoPKcrENkmRXmXccya1sEYARpFXoimEQZJnKoi1",
  "key14": "3erPQMsv626ds3uRV8dVyMkLLEwQjMAqXHaryCrv6dDwRH4ZDcCxY3ekFPnbmNgVSWcEMHGA8iYKKNX51q8zmmtq",
  "key15": "3VUVGPmZbKHddo1b24trdASRKMw1NHH1gqLRTUVCztX4MSibRcPPV8w6wU979S7NVhArEhbkkdRNRHa7d8PBpuXD",
  "key16": "5R2PGt7RcthU3ay5nH6HFAhkKWexCv2TB88W148kgy4gfu1shCFCHGGJC9GWBdUTbwERcKPWzdvCHFSFTWkZAucQ",
  "key17": "4C6ZfwbRLhQNWRk4hKKsLLEAjPoomfpKJrfdrmjp5eeV8AnNH2puyEQhe7TaERfTJKMqaCTozFt5KjXnwMCZfNqv",
  "key18": "oRMWaSzm37jZuGdxkLyRXNeF7X4cuqYBp6onmRY6oqB6Wp8YG2JSffNV6Jg4aHU8gxJ2AVwxhFXMWd2FpKcovAb",
  "key19": "3YrdJfGvj3MEusEuGkmZcVGpJiYdu1fyPDVzzxhMZiaf8S2QeAALAohKbsQA7AfL6kRJp8LB54uS9e2AcadjSJAe",
  "key20": "3pkAEouLqWBd5MfoCAtTYVPSYbJpmMPxxe4A9cJBVLkNcfZ1R2Rbpr6BVvdLV2hvyA368pn2iaoS3QQxErgks8jG",
  "key21": "3vsycpFFGGaTJ7PqLpdpHKah1QtJv4ro1AaRER9EmdUcsRa6Yrhp1pwH8erZwTMorEUEvsPWFm7b1uHDcvuREMci",
  "key22": "tZW2EwCmne8dwbgPmVuPgjQkrmhqswx6m3jDSdjAuPzgnjNtTPWycLBJNfpfThwjUvXucVHrDiHgohKHK7s6dbs",
  "key23": "4F5QWUZvKpTayyVSGEn5g8WuNi8jetJF4N3EThBc3PoDGmKjLd26TJJX6sspx3sifR64XFmMHnfHnRjN8bzdqd4N",
  "key24": "25fi7EqF3QhrSrCT2Mx175qbJmfTGT5REd5ZYXyuk8F7TD6q9MkKcwnUvg7YViCQzArf4yUS2yiVMidrqq2VMtvi",
  "key25": "2bban7JQu2y3MTSpbU2ckZTqxmM2wwE4sqXRgUoECpzGtgCMGMCeYpzfgu3oKAut365rrnL34H3rcvXoBC8pa4vv",
  "key26": "57eD9ZVSmMWwzunrHRgHfDedfPa3QXRrHn5NGX4LURgLXppu8w7dqu5VUrgsZ4exuqV1zvme1nVxMasWFfRjMAxa",
  "key27": "4JRsvrT5qgzz6P4eDJ99a8qmJ4Ri1KXPbQsPzcdMx8XMbDjej84S8YY91xbEPdduutsrgNXbriE74FbdVPywmuMU",
  "key28": "JjTxsLfEUutydj5AsRdBq96PgU7wn92JffCKaqyzhiMLaUk9am29FmksLYYJbSNYHA8DZhLJkopoqahzLniREyA",
  "key29": "32Yf3HwYAVzp5RsARRgM5acomJXjyktir4hqoY4ADNR6K1MdSt7DCFT6F3c6YZmByZCMxF6EhFA3JvbCau7M7FSW",
  "key30": "JuGWyWX4gHkheRERx7jLXJJnPL58rwDn9HFce9GfeYZzVx312VbaJTVzmVFvbQnDZoanaYyEAzdJaxv4zvcgvXG",
  "key31": "61gannjS2eCh1WJqwPvqjKpG7WYGxTKA3BajurZZk1136cJZT3ehws2RuSTFCAmfG4xVD3SygsdL78J1v3qN3NuB",
  "key32": "2CMjKSeo4j4x12Z3QtueisZ2dLPpdzFpkVsEbt6vUkk5KyZE8Q5UPfeca8NjSERgHwBpFPDpwGXg8ZVvTizfKFsQ",
  "key33": "4Sgec1jPC6VtiyPqZD7yxj4uNFeg56Toixj8PpsmKT35u93FybbMesT1HT94mAqpx4Nbkp5nasKpB8SXa2wpbDwP",
  "key34": "3JAZgeKx8hrGU4w8fVeRQ5bKk7ffk4e82tWLAVJpM5tGFw1YpFGmH1z2gcJBpnH2AHhhZS4J6HmSSAJ2vp21bHZs",
  "key35": "3zTEW7PNF2wFneWT1jPNWofun8Ujhho2p7v5GZk54zeCRFiJjt6GikG2tsLC9TzqZfTaDfdVNqSUZcfkQjNXrq6S",
  "key36": "4uQ5nYshLAAxU2N7WPS7YFc3uGatteJdsXYzZ6WVSsU2qHQkrYypzozdSwxy6zd8dyDBsZ5P9Co4HZxgJMpAn6cE",
  "key37": "3AR5ri37HFRoLgbXfvSkFYRn1qWNtBkkd5NYGwophDRSnVNte7tDZ1HBT1WBmnDZLcSTRfW4BseKMfuunbya4Bhb",
  "key38": "3itnoHuq2EDCTmuaa1vdtwWPrNhRFtFgtGdYmSH5ZDEMxRXK1jQVACQKHmvPkrShPmuGwHmL1YjZnAEChXph89zS",
  "key39": "3wxzBwvyEiAuerbVU7x4srP9gLPhMd76jJHFED8YuCPZEUpGkZLBiqxwfNwzkB3G16VTnz1JNQeHV3F92c3zXvjt",
  "key40": "2s3XyUuzsa7FG6tx8ybTFSLunS5rKFeSTiAkXN6zWoMHhVb8QnQ6SHzvEAYQhsfVkaUvJJK2uTkNwfTa8e12chzd",
  "key41": "2meUv1GqcZDWQPB136whTg2s42u5gQ3miccG86uXfnpUwp2yTA4kJ6BNumBvKSF62Zj2JikEpKWu481LnSMD3Jw9",
  "key42": "436JQtk8AidQrotoRy1pCnbnqHapZQKqXjcZAuNB7ufBBoE5SUpjVsZfhh6W8HZz4sBLhQFjZm1vP54iA29teWrp",
  "key43": "3VBQytNPMnYjQvxvf3UAKFkXGzBuU9oEEdQNf9SXc2nokJ9b1X9Szb5vkbzBQDuxGmpPGc6rhguCETysex2yqTvx",
  "key44": "BTYmF1vJhbF1cY8p38eNzd7U5W35UA5S2cT1CN4YDDVRT3CvufJkVNiS61nd8EMF19pbyExuReEgx6Qd75TqLN5",
  "key45": "d28UF6DrKhqDP5T32T3QremMj5pnBTk2qn7ASzj11en3rpC3UMyhtn4ThodZVdDHLHyYBjeAtMhr4q5aPsKqzHq",
  "key46": "2Hm1kCK37sFEwgu1NeJE21uZ6FvGGJKvv1Lp17swHrvivmE6kXegFsgmnyQ5AqBxbpvCeHLQWB4iCTHEU6v1WZyQ",
  "key47": "6J3CJef6SDR95HtFY2ikyJYd8zCXtYRBxfyaYcTZXZiKovv4TqTeAMB163iAiWE7ttKMaXcZ2a1co2jPtguUo4i",
  "key48": "mUAUzK2hUsq8EthsKcNCjuj681P1FttfrjSs6jS1ubimGb1TzBqEvNpBUdm7GHGzper1kvYydyFBPezyQWMBb84"
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
