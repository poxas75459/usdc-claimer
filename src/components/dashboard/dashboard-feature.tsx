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
    "2ZHFmu3xVg9x2zZEBb4EvnioeXsgs2AdcJUFdgCgygJ4vb1ER5a2UVug49tVvJRTLoXvPP3w5SrzHG5xmaD41fih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58bYdmps2SYS8EcUA6XizHMYtSfFJss57WE5ysAKTGXbWdREVz4Nb6PEQNYLVMTPNQWdrWcNbkghw8BupUkVkfAJ",
  "key1": "2tGh83BHkc2gBpwjE5d2ZYk24qZZwVTTewuBXLQSrWut647oB6KMN3nXPkbgukhxgzwTaxbosfuKer13GRFabdyj",
  "key2": "6N9SQxi6hACNSib8hhAoY9vtgdtLsGWCDrEdgM6w5x4ZtSdRcyvvYGFoeKnnStMn7yTDYSTQp4tK6copYKErAop",
  "key3": "4gHzEiVJuJWpmbqGA3Sv35BH72HazNTthGY7T3BbEfTeLv3Umy6JUwse4PA9q2zkRnjPETAwsGRZ4KKS5zhXNkgN",
  "key4": "aWv9zSkT4Xf4vo7EdQwybn3MFv1LcyXy8EGdXxv22ZsqNcvL2xQvNrp6a71Mk5pTPXyKjuSjdSphdXzemQuXFmf",
  "key5": "2asB8VnP22XKQk8FvgLi6XjZb2MF8zMMqAqmfAgADSMSUKYA4J3SCioFxYxRxsS3xZeYJAc2uuE6BLJCXZKjMYXQ",
  "key6": "385Nc7TRFq7TeTRwbTTuhETVKmP4gcabPh7gJaXYSS8kt7ptYuhRxMSzfmRxTjtCSnuGbooxsvQjoBH2DzwqguiQ",
  "key7": "4VrRtBenvKQYtr7ojwSvRAhPhbG6Pmn4tfh4pP9pemPNcCbL9absmziwR58QiLRzwpzTDuSWmkvLWSxjzmk3T4Te",
  "key8": "HBpEUZGrtDDfwYFr375W1THe2yBcu6cnbsrQRhaq5dyqScAVtkvc124iGSp73QDPvUz8dmpnU4NPEE3Jo1torGN",
  "key9": "2ZyPJhbFfaGQdH5oJk5dC29SzrXrfFLNLuz6GCxvJE2xT7UKRZq6hwP55y96czXkMSNuK9gtF9tvryCfpifvegRr",
  "key10": "29QtXc5KhSP45DEbH9QZXRkeCobzzzHmBw7rcmJQfwmujLiAhDBtjMocdLcQkx43pED55WhTTWDLkc1bNzSBJpzk",
  "key11": "5Xsc8AiDuvCYdFHUPbzXaigqEW5DTeNELQVk8Zfvgwr1DhvS3LWbBAYroy8pb6NistuTMh8hjg9xL7JMcyt4iFMC",
  "key12": "2d6qV3dmdFhQHHdKtHg1eKP8stzcEgxiVVz2ZPbjTNhcTcaAAbW8j9rKVyu2vjKRnQDQPdhAaCnqeUwp2s5KrTLX",
  "key13": "2PrDbqGLUaR3cftV6Le4uh8vubJ5dmeiE52gi3LUZnzsiH425SHhVgEsDQFAvnzG6jW3SqNxuhQzqaPCEC4HLvrh",
  "key14": "5N1HkdzaGnt2Mr7V3vmkBUufsEFXHZzRi3CVU1EsAm4dwiB4z7Pr5FmB7irD33LhXgVagza5aJ7DC2DSMcnBK2Cs",
  "key15": "51xX4LZRbf79v7k4umJPH1BB33MwdvZky3f875oiaEPyHWXqY7NwbzYwSyLBwvqLre6mqHn49SASTSY62EBrygdS",
  "key16": "DfK5k3dcHTv16GBjPMpBsayiHAfP8qJt1QxVQtPbbTYqoT4oF2GEYSGmm1Wm2yv9WrMNpzWa2PgtihmM8YKspTz",
  "key17": "2w12WWW5VXPPjhqaHrtiPjSTdhUyviCG33f59LmBWr3Puua14LHXtVjhNTFC5JZ8gL8iKtNHAi7P9c1QvgzNxLi2",
  "key18": "5dcHB7NphaSwVqQnu5KhivCiTfpSxfKRvstANbjPH7FEZwKqAx9QqH14oXaA61nJEBfzzpo2JT1i4we5afrwrvfH",
  "key19": "36AD5gdXinqnQgfdfrBtguMsohhTNQ69s3ZJjmhxNiE5A4sUgtZ3tJbk1wYjfHREBMGfHYNyAzLkQ7ZR2piKHDrq",
  "key20": "334ZbHRU5DdcbuBvfSNsLr5p1UBPbTmN4fjNCTTZnrhwLMVi73j6LeaQSFj7dffz7h22HmVfLv8LD8ZhanqpUS91",
  "key21": "2P9tyrCKTS2qTLL4GmuzuRwkKVZxxYvNKGRqRVmmSAyDkEMhZboYE645x2bQf8VaJLdZSpGgzftJZ8Fn8X58ywcq",
  "key22": "3KuLJ39TZqBfL1G9qNUE4ym9hy3G3AX9jyjqgRXQQejQ4g3tKqYhWXi736aysMa5RpKSCcFq67hYM4JQ2gPMngMW",
  "key23": "3k8TK9kBuuhamZtMjQEQJwHNW6s1JyfwBVUUZxyYmVvZYpiCnNkAYp3KZNX43cDyH4ir5e1BSZYkHjSofJefJh8T",
  "key24": "5h71jqzdhLQWSNJzh3fUZmR5rGjReQJmAh2UzXhW89RzLyr5rdKSdxMQWP1Pe9edP4Z59u35DWgkGpCLSTDCCoqZ",
  "key25": "2wXzqhHgsQ4S5u16Ee3bj3EPiKJR6voHjWw6gqfjxEpP6PahDFCfDsQJYmQa4yxziV8E7R6u2akvdeR5sBV42Zf4",
  "key26": "htQ4gXNSAKPNDmH5GHJFjVj7B7uePmnJEq9Mssj8X9BvBPAsu1ss9GhJSVdjC14ULtHusMHnXs4MBubW9buH8Dx",
  "key27": "4FX3CukbhPnhgoDpRRVQBNhbTMkApEkEavfZ5jZnDvLRRbMgoxkz7ezG5UyjKnLjYg11AwKdew4adeY6TcdVYkj8",
  "key28": "263UnTVJDqTgUPPkp51L7go6PRGTVSTB9S8S9Mc21NrZKRQBJV4B8eT8hCJS9xJdBY8zEik3FJjAUg5co8sdKajX",
  "key29": "MMYsiG3U3KkmrTZfUq6ksk7RySqew7WX9njC2xB2TRo9VtMF6PsmKL7goBRbrmqxALXDwU4751wWuGccUDWHWfb",
  "key30": "5DPUGjqdKPDa1M6uLYMF36MpTse8XW9LtMQqptsivYTErNW758pkipxtW1eehTWynNu8BhcuS6B4kfJoF2nXMxXe",
  "key31": "4fcJhz1npSU22yAkiQ5uCvNCPTmyU3UNZq1nnahPbNN4BhDCfS6qJM4v4eQwj4Buu9SEWTpc7CSbHjnYHg6TLsZ3",
  "key32": "3ucZCpKVXXscWW4Wpem8U3oR48dZFh9GKnfHzCe8C1m2hzx4ZuPUugJBcwpBw2VS7qc15HjejcLLJTxy8fJvxzse",
  "key33": "49uR6eAfG6scZCkGBhwyFrDZ8WK7WVjau576HDHeFFJ2RwRUSdjMgDqRcRRYbASydXnzVLZAnaWCFiboSXzZagEQ",
  "key34": "ENPYR9Wm4EupnEPeWiVB1Z8H2WfmZcQTsFyfyxZZbd8nguvjCNQoYqdRkx26rCLdqF8Rg5ARo7gL8GN1XEJhe9S",
  "key35": "3s2T76avhugrS9UPiWD2NVcvmozkUHbJK25C9rBNraEwMgVTgN9ctRYVynsXok8tW6aPgXF2bXL5zer3LQFkUQ3t",
  "key36": "oKBosfts2aMNzgEKrvEbGRL8hMbqDZrAdN6nd8GL9ZDz15kGLeMWCW8nCvvNuAjg8nGhWwJmgByjdKRgNiK5gQE",
  "key37": "4mJusnmuMsJgEMbS8KqCogxqkC8Jwznk9D9rbyz8AaqGMqV9TEjM74HqSdrvcSSTmJUkLd6fsH9ajFs4D66m7yfd",
  "key38": "4qr5mjCuCoXW6gfL7NLTH4K5dCNcvEjtXJRJRTwyG8wYgiPBXuTSfXb32Cub1Qw2BUZs61tSurwLFSyD2U3oWyEx",
  "key39": "2x8EBc3ZJef9YnpTnNhSBT3PLN6qp3aidcXcVtKYcJtcUdjkgxJp2xsMGe48a3HYvrrGuUsuptrvQsABH5WC4RYU",
  "key40": "vMy1DESp4hB3idPJPiUyH5oN68iVzfEjLJLvKHuETm755UUdvsc3mzcqWbz5Foa9nYKa9LLUimgc1NSU6UWJPaD",
  "key41": "4A3JcwRxhzSyrURhVvAnTkQyJCsC1wMFZcRQqDnuz26eQZY3xaMSF2q41S5ZvrKTtbYMFpik95fgp2e2qK6o9ptv",
  "key42": "4cN3ntDW9ZGzfY8pvDE48UA58DvBhbVudHNcB8fAcFR5VR42LRX9RB6Th65CgmQxRw2Jpvbhn4VwHv8LRH9bR99E",
  "key43": "7fS5hRkVSsp9eUPGyvMKPcf4kTygPcYJk2Q85A7Jp4ddoz2Ljqzed7qDejx7aRevy9zXeQpW6SrNThDiv6fs6mr",
  "key44": "66bGW9KQmsKJ4CLh7QsXws5yd6FLzkwFky8q47GHFc4rGVok7vFKumc5wwriZ35t2SR7ojCqrDvhfefv2Uy3Bse7",
  "key45": "4yauP7EbGxkVWSX6SzkmyKJx4TEZZkpaQ3Jmru7dsLVQHpQmTVi4mwjfsTn58WazVtF1MKnu6KLWGJhHpds6dFtA"
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
