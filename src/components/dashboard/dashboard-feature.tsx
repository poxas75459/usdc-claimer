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
    "2emhqrrk2fcCsRzkHnfrQGLXBaubrSNWXrEK56GveAJdXYzN6XJxtBXrjBE8oLqjP29tKdxPQ9tirRzSHuMRz3nx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z8QFuk9F8DwSEarCgrDCJaCf4DfveAz5PwQSDiiBo7qck6DBivWUPc8cMAkVdTvo6FNYaVhefXFrdX3nEoiDu1x",
  "key1": "3ZcMKNzw6ZH1KJdkoqQaaUw44ULTz72ikoVMNsWTvLpsdwLVyCzwUYKkor5ow9weL6tzD8RqraVN5Xhidx3qhaab",
  "key2": "5XhX394KC8EJZEnXnRyzTugCi9U6kn9hCsSkWz1CNMcWPHpD9KqGyWpyo2PWR3x28iUmxYbmdjkHzYXruWURFNZo",
  "key3": "2L1ePAiWNU7MriGtTbA22r33fQyP32FKfAXbbBepw7H27RAVDeqSBjxDKEqgG9rztxME6yp8gt1NXqSFtR6AmnAk",
  "key4": "ygxXhXuY33qcYWmsBRdXhHh4Duq47EU1pAj5qUxzFKxQpysAULr4rBxLiGXvkoN3xoa45WnbxPfF8dUvjkxJ4rn",
  "key5": "5VboDSGJGeaYZ1BM5M6HiKwfkhEQfKwT8y63QFgquqTsLQKGnFe6H9jbP4GFXW9CNQGtbf5BBtG8iBaB9f7n2rUq",
  "key6": "65vvPJjWfq2k1sbjwGE59cT5RFUBeginGA6uSvvYjHNPbsAeasP8JqjiPSYwVktCeXdk4zcaBE799CtgDe6LUxtU",
  "key7": "4CzKXVkRLazGKebUCfCqiDbkpbQYUjZbsB8fxPxNd6xcSJ9HFWFWUfna26T2HYRQxCuam7etWir8K4ZbsCkeE2Xf",
  "key8": "2HZuWpZCVaF3eq9AEjRaZaFjrhHKzB6Wyu1rWXEXPuHZHcmX3mEPehhfwybf6vaSSKgNt5VJMJkrQw7oodP6tt2m",
  "key9": "61QrZWs6AEGGpwhnpBvShygsheJZDiR8Ck9oZ9NhdBfzjqK3KPHdxtsBJBHn4Hn9qCiqMKCiJBZ2FjKNjkAyVeb5",
  "key10": "3gPdSbpTYs8K2n891qdAC5kPbpWNwiuzabp8pMAWE37h4DDhBHrfchqWriZVT3PJJysw6xSC4B7g66CjFKubo736",
  "key11": "22CGAY5jDE55L8bwABkzEbRGXp9y8YCsPnVCjM7wNmYgXBWsaBGY8xr8241vqJ81FeFmTc3S4zCn8j7sMZfTLSQf",
  "key12": "4oBHs19YK4g7BxuAiod2121SJDQpi11YDGJv2WdKrdyzR1vXDPBxq6YcYiarcjRe4WqU88SR41buw8cgZ29rA1jt",
  "key13": "2oWEqhMLr5hXWEWZVnapiG94JhQ2SHpA8hE58H6H2dxA12t7dqdXUBuefrwzxeCSV5qaJit4CjNEkxvGvQJALGkw",
  "key14": "4fWNGRbT7JgG1oheXVVmTtwdiXGo23U7qyxBiy1vCeN36ATZHSyKwAkfdaXamc7gfocd916FX3zsX51Cg4VoVMnW",
  "key15": "3WNZjFuMAgermGRRLBF94BDfmY8TRpYXUfvxFSiYa7jZvFFU7oxqwzMnjyw9EptR9JVPro9TQr48eZBdLKsU63w7",
  "key16": "5YrjLKa85aNR3vJgDUsYsFwmTtFASYig9MJTFPMcHhKS1j4GFHXrm1nQhD9B7x9kdyXoc23eFSLUrSAuqBGPEwcJ",
  "key17": "4GFe4ELFVwCk5aXKdNRVV9fjMrCfseRtzce3vrH9rxJkrGLkN5EMNP9bcCDXJri9vki9XgSV6AkKsENhTy2TTp3M",
  "key18": "2uS5DHdtPFsdoKjSr58RYyNJiwiaFjuEtqc3TQpg3x3UkamZqNDHEXSTkEQyFPK9sh5yZB3c8sy5M5ahLJeMZZWv",
  "key19": "VDoxHtoWCxTYi6mCmSMHNmKnUA4ex4Yd4oWeLgfDFk9yNDomL5LxYB6ZGPNzzmqy8XWgsJW9X7akxPpTuYV9h7J",
  "key20": "2PwQ4oW431rfdwmBqwyDbepRJQjbGkVuM6cDNjjxhNci4121B7a28pRq2ewBcSriB6sehjQgTkrvgftuXiG8yHfV",
  "key21": "3Mih2Prd3Gw77Bt7GGV6gjTRt5Aij2HX7tow2b9M81sEXGvQ3feUTPMM5JtbiVySaxeVk6TofB8UunBWbwGZbPjg",
  "key22": "2RgTiSzD31baMeka5DybgSb6AC92D3NY1ZHoKLiJoooAmqdCrx9ZRmWSNtpuLjAc711YwwxbtUJKLPKzV9MvFyvR",
  "key23": "39tyZwAoz1awHpJxvnLjRb3VBz4x59phPc6dUbxCZuASr613WfpWJmwM4Xns1xGwLXM2uzTNyiLq8xzdbkDKiUt2",
  "key24": "2pwP6nREYhsF5MzS3GF74FvZkhJ8S11Epcwt2R7bGe1esFKbwuEQR76gSHZxC5E7C8aqQCNSanjxsjD4tryf2cFa",
  "key25": "31JBpkSvEi2gRUcxMFmg6FpDMiePomY9wGWsiv63zwqQFGVxwoAGuWnNz1vEdAJqgPTmPsw13gTezZJcRZvmmfqX",
  "key26": "3wVNBL3RtSd7NPqryBxbZfjyppVEU6fbRaxHgXz7KVk9mwLsKLPtQwq9XVhqBDSXSRMJyicCU1B4LQjjk3sN4XCf",
  "key27": "3kK187hMDgvmyQTSAnV4qC5wsKAyHnmHEwkKiASXw11cBqeYcBTdoMi5fQ3sQjtcTr9pfNkj4Qra6qxWmeihThVd",
  "key28": "3cD5wwSteqo8R9yxhSXmeR4LVjisVRiyrCHvk5jLG5EgqRRdisaeGNauQtPoqFwbsSKpjdcrhttsRPHBt7DnnTSh",
  "key29": "3fYkCucPBmWXNZNQK6beVTsqkGC4VDewYEV1fz5k1FmJNSj1h2jwdjf8vNa6ziEckjFLERijuXhd2jrhB4sQENKc",
  "key30": "5JX8SbYciMSiGoGTrDg19eEYLKskxW53PKuTzzgd6bTTxEwkoQYfGaj4yDxMeqLjBNWCo9DQRfSs7HpsGz1k2JAb",
  "key31": "4EPQvDn7z4s34rtT1MuQpZdryhaaTwPxANLGkSEcX2uGjnc6G1U3CgDfQbaMVUJVDbDJPkDMTyyAeVAJoGCa6BB9",
  "key32": "5roN211MxCBn5cHF5489dQK64zCFDCdt7mAZA6gmJqJQJq9w84YASfNzWfvLZRiV573BcMVurQ1TzfbmawqFDxTr",
  "key33": "5svBmzjXzboQzYZ9i2A3Qau9hnxx3nmS2wTKcbPGYkELEAmnpYAqaYtSkhrgjt7sNXwV5sMSHfeavysQ3GSk2rcD",
  "key34": "2rxPwvTmxvwikwYRZusgU92HEN7ctk1XGZ78xLKL6VqwC5KqEGZgdvSWGGpLN1JxjfL1bUDG5PPpBcNuiWTs886W",
  "key35": "2Sf38Q56iYodoPHjTHRtjbVuALkxRxsWxUC71EhzVyUfCCZnZ6CuaZGhBKySAgTpEBUCCQZFyQSiLFKKNKWUoC2Z",
  "key36": "2LWSasrfzrJZrgzecz9QjjriAQNRTV1NFfs2jUtq7KzUqfQG49pRbrchGwm4FimN7gZsyrS4L8LyFKKJhiDyhrC3",
  "key37": "ivBssSjWqow6SdTLEU9uJiSTHRkhf1JM9v536ebP5PF5PX38UnUjBYPC2qrYYhyjxgCHxhghrtjDgJq7f9Ha8R7",
  "key38": "3RyKCyCsiwWcjG8cEsx4Z7SEk3Ha3MzjwrLbweEjEzQg9YavrXPembGtLQHurWN1XU4j4vhQX5Ni9huH1FoRpbX4",
  "key39": "3d5GB6aqr7K2dFZxktUsPMnXwrbfqWXycPBYgNmRsTS63BwFhkR4M6r38ubn4DNuke1KG1dNjRFtTsk9q9xPTYuK",
  "key40": "g2c3TX5RhGktLxkburPct8iKjiJLm3XgbefobzLf9e1XHRpfvU8czKbJaDFshz95wnv5UcfGj8GxiptQWLVCynC",
  "key41": "ZmMwiM62r2w8bq4ifUUR7o5NBvRK5PmFJ6mKVmZ2wrMgwqARFpjmBPCaYPpfVE9hiUUS2UtbbrQjPMxL1CY3pJm",
  "key42": "2RiJ4PGZmi94vA1wkYqSxbRC9onFGWfwQywLvpkjBZN9donH2g2zSwnXcFwsVZaehDAkTvVNH2pWVZDTkTJozphL",
  "key43": "GxTLAsXs6E4qUM1Sw9b8KEc9CtiDYLY4nzLDLHMxG36T2Jm3xqiXkhW7cAokudrQpVeaKjT7romj26UajjQUtHk",
  "key44": "4s14cLoTwJTKq1TkN7WFUgbMrKqmpAK8ZKE16EPp2rjv78oEwFuhB2T3tzD4t8GdQZdtmAEGuGVgEu4jgwW5tQeM",
  "key45": "2BqxUYcXJtSjQ8KGcQEzWkp6x2FDhwSirws8SYBaVoxwLZA31Bc3JZMkiBsCYc3mB3AVbb3Z1MHYXMFh3u214SiJ",
  "key46": "4cFkRYsNCMrzhoo5dkjsBHnJdJM3svuSV2YgoWeKNj4Nkq3EHbTWLUuxTD2aLekBiRxzRkdau45N3Es1AwMRTkxk",
  "key47": "tjbUWKSr6unnYzQ9uVTTuNqaLnn6driBxex6pkknN6KXhiXUBgizYwcjTPzHG4pmCXGfNaqypKcfxcHYKqpmEvc"
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
