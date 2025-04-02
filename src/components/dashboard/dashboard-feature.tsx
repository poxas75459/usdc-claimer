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
    "2aYy25ZSscziKuB4hfcRvL8NkoHSCD5ofTHZHjoNgbNTduNbTguoHGZvzxACYnE7UpfSPxYaxaeqzJZWSRuwLsdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XKvLu1w9GThwKEzC3gg32JeciYphYxNX7fAN6cKUQ7b4tndkFrVCATUQ4dQdeBJd6BmcxjGVpLeDQ4bdyNBSC2u",
  "key1": "49aBCJiYBsDwDxtFuErY7NgDUZUjjx7SaUwZM8ZzqqSPGDW2wsNA8dyg3H1XuE7UmTLmzQ4zzGdgr59GJsC4QMfY",
  "key2": "2zXePReyVsr1DrnQUufSq7xAFbmfTzF98zpwpe9x5roDCjwGb6ZpMPE4gJaeyhTZKD1Dr6m2idGTzXMyfusvrcAN",
  "key3": "2EsPbLu4bnAU8iTAybL1bQcDAgfEajQAFxDvwmQCS1ic4yjz2qvJJEnBcLq5BcGbAwEcbeQ7TMoKeKyaBVfoZuBn",
  "key4": "2VaGwiMorvTEKkFbVeWFon83DJo7XS4E1psrN5AymLzJAFTkeofp4zJj1vsfaTQEMVKvCQuGiUm7ypZiuwL5J75q",
  "key5": "2Rre2Up1jrgdtteDXqnUQP8e1q1r6upzbmk7tG9hscYVosgLBXC2WLBAS5ttQLyStkjqJWRrvUs8hWaLaRjq2F1P",
  "key6": "3vqXiL3A8dkCnUCbL8n8xnFG7tVAe8u1p2e5wtMhrW3BGaJrxoyJ95reWbLLCMVaBGN3GMkyTq1EChVzeV9zRGmf",
  "key7": "3DDuJPcgMztZLCCNT95G6DDL8QAkh9zMWJwFkj7qeMUoFPaaK7JzonE4LZhmFKCdCe97mzNRcxjPy9j6zJFV2jrS",
  "key8": "82AjNyHLrp5QPgB3DL8HM7E6uuVPrXVJ1zM1zc7aoY1yr11nQitMxXB9DfZZfwCHT6n27MZ644UuKjPFHTf5odu",
  "key9": "GhPXTntos5TgPHQwqz5G6r4iDQUyWBHrYMDdbwL5EvVBNgYkoidUFEmRVexFY7PMR6Mw8J68mgVqDWaokekjtiS",
  "key10": "23Sy27dkHS5B7QU2trJNFtXQuiDLFosziaPnGwgyaJeuuL1NQUayPcFvK689yCoLaEKv3MpMAiePQAPLGLFNhbz5",
  "key11": "3B2df2AYykt1D6P15q5a5UbsXJKTXMwRMnUJMTeNh7WM15nKqtSNfF9777d9Xp7b6oB5RnWscJaDqN8Uh8i3JbU",
  "key12": "4d5eVtLnGHB7vwPWSc8RaqvJBbU8rXCRA7CLxw1M7B4GA3x1SM88eumQyn9yyX66dGsUkvMGBHDBf7VJ4zKjvyy5",
  "key13": "5Uy54biXZZZM2LWcMGRMHde3KJzLmbg53SFucVG9Ja9xH1fKjb85CQN5Xgn9DiuxBWRZnuroiVHKPF7yU8gLyYeD",
  "key14": "28NCmZMbesiJaWVYy1EBoaYNnnhjGXDxZ5rHM9BPqZCUXym4q8UrZYATHUwmK7okjdK8RgsXU6tkmkijBAegphCa",
  "key15": "5w6gvB9yDXCbG26EgWJoPJLXCDarg1EtdsucuUKceDGKFGksmjRxh6aLF79Xy4gmF8tDkAxYD9du9pw1rrkU7ZcR",
  "key16": "42j8HX9PWzyWNt9y1HWyWBT7NNBC91aA5341HekpKt5M6teHf2ofnKxhrAyLbdXe7AhMissFeAnKCPWquuuqkTqu",
  "key17": "2pbKnB3UpkVTvydVg8mcS4HUQbf7ZdWEMTufgqEaDXMd2Tu14kwdxsqmvdbbm51A7LCVNV2iuce2BMEJ2zDwHq5V",
  "key18": "3xnfZmLXXor7T9FQyq4E8tfsUNkpQMPmzW9KP5pRdrd9fsSpYkRZzT3PXHPcSaNi2HAGFxUCPKy3FGA5EfGEwfeo",
  "key19": "xY8kCoq754D8kCGUdT22o6he3hsqES6CwwWYTKffJ26AchVvZan662qXkVuhx2qbjQWKcp2uuXdy1xyT4gZhQAB",
  "key20": "55qDXAve54z6e4GKBdCJPPgjdcx92P24pkcF4v1nMk1NjxpbyxGCt2pxnEFpTNWd14KJ9tcMNwdWr4UWED4qDTLk",
  "key21": "2DuEau822BhqtnWXSV4LJrZiizrdB5sPVsBM3WALiQfYxWP4yjRzxQcnbaMpFspLwXApncSGTZSzqkxNSVnmCXwk",
  "key22": "3wUTjgQY7XaZnoV4unXgHbdJBB3tu1ZwYxEwvAaWxAtAZWsy19tUJFv82GXKFrpGvCFw3CkKabFd5u6EDmnnfqvK",
  "key23": "4Cg9rPYakyb3rJBBwYPhbV6NRTx3F485kt6qNgY3Wnntyv4ZwbE8xKtvnPS3ZAWeFqK8huXGWRHUwgU4vLJZtGEB",
  "key24": "W2teidw5XoSSfQLyAzHfyquyvqKfbhHfZCxLZSYdkZj5av6BiT5eZEdbRjknZyUWythVnaJ8Y6RRazVRGwGJDRW",
  "key25": "65r36BHVWKGBFFmP3dKFq4i9Eg6Z3jQZqyzrRTWcWWv4cRFkQMBPEBLVXHZGaLaqFfEokuuo7mkchcdbodWnmSa6",
  "key26": "48N81kydwJhDyVB8k1eKKHYiHePq9dMyDaLjHhbGCcAjWiHhdLEY6oXXEjc9KfQJuBhHfV45VR15sQ2u86ypBC83",
  "key27": "4hHvwC8LyPgsH4WLTV9KoomWxgkiFSMF6aPmd4zWu5VdgxwSjtvMiTpMiR2wzChi17ADiyoChdHe68mApHkXEB9D",
  "key28": "26C21FvNBGLpnEUj98L5xz4SidEdoivR4BUX4E8Y8BRS7Scb3Y1mJRa5akE3X2pn7prLqC5VWfany1MvyD1qa2Dp",
  "key29": "2Cj3xFHjCnKBitkuXfBpmDkNuYc3ooSM5uwZdKQ793E47Jri3WfeyYZyFo1gdHYKdTrBhkmaaHtaXyZv34UnrX1B",
  "key30": "2LyN6d3oN69CyCKjvVwurJ8SsPUqLBQW8P6QLTFSXmbZnnQK9V7EEgKYBN751evEXYUW8QyWebYNH3mt3MRZyzQZ",
  "key31": "2bfJa5F26687b72MfCEYziKudkvf1dvUcS6233Gq6fxM9QVGQ5DQNcRRGRRmsHXQPETduHg4FvEo1xu1SYWEnUhA",
  "key32": "5YH94DMnSHqkPvqFfqycKHyMDoQNZ8qmiBV45Com3uBawGL6hioYWf4Lf7LLQ76kLHuHFZjCSV9noN8c8cjmNsT",
  "key33": "dzMsbwz5ySpavRUusojVvMyixxSL39fq2CDBpWTJmsvzkFR6mdP6wF1fNfEHzRv5JjJLLmfDAQssJyExUnP2rCy",
  "key34": "SpcCPdsiyZZzd3ZkA32TJaAKhh1TXLYZ5VigS7gi3HS8KN7zn99uXWtRNqpiTMEJ6x7tCnFbtZ38q5sJ1tsySiF",
  "key35": "2SDFG76y3UTiWaFEkuujifW5TWCrqXiKu6LVcPjkpueVYfryWzdRmadgRoJpgf3RUdYvBfqBrkVYCKnoCkxDjExH",
  "key36": "4SQVrNQ1g2bnMBQtu646BBFiAJkVN4tf8BjUknn2UHRaUGruxZ37AUuDsYEA3p4Hg1rEZCuPukayeSMYMLnqCDbf",
  "key37": "TwxyGVckQLSujR6YDz1AESQ3Mo4g6mC7YYyh9WNuUhpCNFsuR9G9MBpug4hK7P1MRXPojERFn9HUN71f5t5k7Ue",
  "key38": "5SQo45RMArGUzFBhPWuooy1oVKDsoYQyaqXqGom2pKSJrDfyUfWMVLRNzcJY7McgWCo6V3n9pG7AXdHSUT1xQQAg",
  "key39": "2Zhh3Lan5V859xhmbVcsp8Em7sXXL4gNhcAkqbVP5ffLCkCXFjkZndaiTaqQF6oQgrvYmbe6uNbZmytnWSZ5nLEz",
  "key40": "2LQiKqB1zf87NqH4vKQZZBwdqFXKeVriFcdX2MHz51a5c3r8zt9rt2oRjBGENDm4AffMqoPfEjyrZ3eRu2CYqCpb",
  "key41": "4kRTEypbA3qHnP374HrrzbupMrbni8GLVPeRRJrgt9C6pCRuFRbdBV7LVrWyDBMfQ9Q1urYqUyktaTMf74H6NdST",
  "key42": "4So8QAKAHvx95R9FERx3dtQ9JjLr3GwFeu1n7NV6tjjPTP19mh16EJeB6SJTfMuWVFbs1zS2JH6tyAHTfHVkh4GS",
  "key43": "5PLiNabQd1T45A22HX5Ayx5VzZTMfKYfk9mhKXXPAXuhB9bWvqPP8dzwWzNEwwZYjWjtsPDsQ5Erbnj2Rx2GqY4H",
  "key44": "5XU86XdHEpfekTBUreuQFJp9G7sHM2LaAXvhtstCVJyHqABd6Km4S3D5CycHtR2qWNKvLJsZbaqfwmV74HcJzFDr",
  "key45": "3EGsVYCE2vDTpz5AgFwLcbTV2yTRWuyQ2M4stBdmHr3DJ6qvuZq8VLiq324pRPnSfuTF6gDpjCkRLFwtmDNwzmE3"
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
