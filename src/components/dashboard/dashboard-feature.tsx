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
    "3jGYJJAL97vR6KbWBWSY94RkfTXYKGS29xByA5SRMsVAzaxNbjXGcjJWvJhufMuWNKqWLRtHkoQJFaG9R7UHABSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q3TPwst9nUvifpLZb8Gh56Nn2Cob6TRm825djCwD6yQ4Dpd21gP36WdB1o2f87sKEqJqX6FU67mPPPrQ42J6WTc",
  "key1": "431rR3K2beTmTR4xJ25Axd4LdW5AqgjWuArgZh1c3dpUMJhxxdJaTWtwVwt5MVQmtiVjRjSPGvF7QXZ7Voh4Sk6F",
  "key2": "3q8Znka47jyeXgcknXSRPAFWFYbtKdxVZXcSKaV9dTLUX3fXu9V6famN9Ve1JbEJSsvzNmQ1BDWoP6VVoKVYfEKf",
  "key3": "2bBta24WbApSZohTqn2tciLfBu7KZm4FvLkDdB4pYQfEgSiJekGhyYr15VXNQrm4MYhBNfnkmHfhukM1Z3C5uVmf",
  "key4": "xxaFvfjpuDm3kv5bLLScHibVYeVZ9ebJzzKFKdMXs9MHgRFt8zRrbSfewfvwPXmzWAC1be2aZy33csKb49nA1zB",
  "key5": "5VxdPN3RX26i44bHWvbh47waN199rUVXig2cH8NRWKRK1jnpaTMmyqn1rGPE1XgkLnidoCx2cx73ekrbxBmzAfXq",
  "key6": "2MYBeSEe2hEb9bGR8QDthQ4GQccN5dLFaCTmSJFGRrJXBoBtdR6HH5HfGFSxB6ZEwDuH95iZ8CUTLTRrjhJTEzoJ",
  "key7": "yrVUexvoDd32ifRbqo6MJGpZUMXEnhWxMPT2mLjMxsCWR7zAcFtcCfYNEU7qjur9SNEsPWP1eLVDw4Zj1YF9ouM",
  "key8": "DwwF8Qg9o7L71jhvEi6i9Zg422Mf68XVLPukihzNCD7SCdj1t8Esjz4f5i5F9jDctTphrQNh9U6Ch1SeoPBHdun",
  "key9": "67VYeq9Vt1BGfo3dkejsoAykf2T8fCF6QPgW47v6NLGX7rcmhyZd6SZD3xs2Nd8Y9eQiAU1reJ6ewJCD16VTUjvh",
  "key10": "5rocDEmfhg8RHMRt3n9Fq1wBjBzPCDfTmnTVSj95gb6hoXUiF9ctXUd4HnUZN6QsyhD7fiddkqvjKTb5Y2yrbxiN",
  "key11": "4QL8hMLsTn5zECf8r4ak9hfCbqJWhJPotGD2jzMDLz8ECLh4oGTTkksbLMYEhBAiK3djVduEWm3GHeJAe6CdZhkN",
  "key12": "3GRAVHbepThyHsenPWxEaPVqTuFor7AyaEz2QwPrGXJEiE5w3GNF5JSepSDQZ87M9UgsJgg9ZwHgwqakwYZbkTEy",
  "key13": "2XDVA67tAhxbC1pngcHDWmYEPhFdeqzexCivLqJxUnC6Mm9koy58H3HkQTP3oM3KE2BPqdy5XLa3qGhCxRYHgjES",
  "key14": "2FDtYR6DpXReDQV4qhRYD3aabRprYtMFRLBA4Shjp1PDwxEW9Q6YGVJf44KjeZJJyg9EQeiCNpS5n9Nr5DvddEXe",
  "key15": "5YtUu6TKZNFEQ97YZ7uJMViGYF5NcmNPwRWf93eqjmZiwb5ciGZbPyTUSh93sFQPzn6pNrFjFioJ8WTDyY3eB1LG",
  "key16": "56pNrj6QUPgDxFFR5LqJSJR4YPCba5RSq6ES31Zyiyjndf3AjYmswtfFi2A4GRZpUxY5pjRaRv1ZKpNe957cHXYb",
  "key17": "5smwaAAA261ERrhQVyTKhGdZo9rURGzaqPjFw4CowKEPFWE3XX7MxDUkQJ8jC6ZumiC6R12NuUUNJRU5HLesjyGt",
  "key18": "jykPRoxSywC4uXcmpDnC8EZK6GmUSBCuFau3PyJZuP4dWykqgbsdQwYe7DZkLxVhTDBizksxE9Me6mJaQcxyxhG",
  "key19": "3HKLiugktvS9tmo1nTxVrtrHTJiYom91RzAkKKNDNdhBhWCiTX565sYEtH1yTQggKfqpRzuzFTozeQsYybzqBaYJ",
  "key20": "tqXiFRWnHdRAF4gn6qhtQKfKjDpkBq3W1UAjqdDzhQQepmrH3tyDujjhCcT1cSViSTw1pPPxjPXkid8KgzCjdf8",
  "key21": "5BXuc4XXBHW22qF3oqNdKj3x313egq5wmYVkB9joSAc9nDDSW8BZPYn4zHBgpnh4XsfrqkgoyppBLBjHkQpteus9",
  "key22": "2HpSEXUnr6FQcZGg5pjP7fc7Wyom5VAeJ7ZZRePUS7Jhz8hJnQHrDJ1dJLufegGgQZaCjUJZTu2RKJsftbVN7ArM",
  "key23": "2xsKR7PYbgkhoKu4oLfKusRHd9vYpA1e4yiUrTLoTrQRDijgXcQ4zXxmhCEsu4R3kWEg4bemkffcHwMxCTzjHP6o",
  "key24": "4MAZZUwm3Fng1VbDk5eukMzE6JpnMP4VeYy9Rb72LtZfcc4m3rLkfoXuN8Lqp9uU6592cCLbsFdp7rBFas8EmFXo",
  "key25": "49SmigX8Z95RquGumUwaJJ92KggBAYMcwwaAJMdGwuWqtYoBvcv4somBLdQdHGJqVGJTJH6sPyzUiV212f1WCbPh",
  "key26": "65i8zKjNBHdoBvQqLBnv8QiKqnfqH38xMMG4UR4h1WPHs6fTrB8XJ6PxS1jqfapWHpcBuVEGbdaU36KyQ8Kvz9GV",
  "key27": "4RhpTBSSQWNMfQx4qw6udtjwZFTgAnuRrdEL4tbk5EztEa96uyHMRXgWvXhWgmUBQgMg2RaodSaNLH6aKgu4FRP1",
  "key28": "2gZ1YevVhq1EPWMP5oB8GyGX5E9KaxV7RSvTxczEs6b6A4yeiNY9dEf1PBGicFRRrRkVFEx8y9rEJ8ELsCHU4xzu",
  "key29": "3UwqJ4in7w2Q3mbr7idgNPjMu5HEiCj6tzSfjUyZU9PFBf6nCiCzb94Rqzk1Brs53idzWkdPT3D5xv5JsPrdMDFV",
  "key30": "2AjN3mQgPS5ziqDi4J6xZorGCA7m7Bo6tuGnmtBixDZ3G4EAtJRfBwDiWirjKmpMwowPhW7eLezrSFFgKMGzDM4P",
  "key31": "FDkinxbzSpCGpXpBh9pTsTmyUFVpE8TGf3peDPvPZYgY5KKERjLZhcBy7u8DJCX7G1bKCCejWnQx65Eym4yRtms",
  "key32": "3BtUgUBvAncY4MQsZ8bDAg1gjStNm64YUk9DktPNq8d5hY4PZr67Gw1c4M2q8vWs47FTaPyDK1eeJPUhWY4M8pL9",
  "key33": "5iaSbumfimXitmYkPduZP4GYXqfRE6yzipVtH34CATSPkeNr3Xm6hi3esobuVQsVPn4KaTy3eXKhyuLysuKean9G",
  "key34": "2bwC2vwdnNM2CCt7y2EDFZCkkcVvWVYSEmqSc4EPZWt1UASEudWQBm1cb1xCAMbWgPG3gNMP4iQSQ8YRHFHkAaWm",
  "key35": "vEbnJxEbNna2VcbKapp7sfkmbzDrfVzDfEfXfdupmUrgMXdbxtskai8HV7TdDYNngVDqTdwroia5atZvtPExu1R",
  "key36": "4toLJ1dnPuKHPvsxKYQvxoGWzFPw9uZ7Noxtefkpf6eejbyDWGvnjjrqNiKR2RXywaENqfZSBocWxZ1V9oA4oBmz",
  "key37": "2QxiHM4XwhW8G4opt7qwZ3ZRzXvY6KzmrLTfB7iNEath19Y8s57CJo4owXCMm3YLfaGwUfZfsffhnGz21a2aSq6x",
  "key38": "36QCoNQeaFHtGoeGVDaHEuEZJjVcRCK2EwEpkY2h94EyGn9uhxR5Z4K8yF9kgKQrsZiuVBeREAWimJodcEYTQevu",
  "key39": "47bkTz7hS6RMKHQsahi85hfTencbkh4BBGcgiToSoHmCCDu9tYDpTsnGAFS1huSH9cxPo6x96fp1ZJNEvvukQohG",
  "key40": "jxyuuSQJmMAsSwq5i2JuQSBk8UTy9353PcTGs8jmKDX8ZUTxTXnjVQKysssXdgbFLoNDvJdJp4ci2aSma4q1CPb",
  "key41": "RrTB715hLAQHg8uCoow7MFuQshvGyypAFsNz3soQoVTboXGy9BoKD2j2PT1rhXci8RdD7WCivDVhoQvTwhnzJLr",
  "key42": "599ZAkzxrHT2xkBV628QR5SBqdELe3Y87sL7gb9qjDHWzzQ5FpKPbs16PAqgPvPPbp5pYS1sHHj5LJJ5KzNR8t5S",
  "key43": "4oTzjukwyfKq9Zz6QYsyZ8n1EqgwceumHPrR2U8u9RJd7UfsMCJzpiNWmBxQ1chkWFuMmtiw2qbaJBEFXp2SknQC"
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
