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
    "2AxvWTDac6FoGaQnrue49uCLaSPAQeyrp7WAzuwpKzqeXpJdnmn4DU3wREt9YVjS7BED9DW9AS3Dy5SK1WV4q6NV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rzr914XodsDSXCCuthfiDXQw5WHfoCUdvknNFHpYLDQtLvQq7sdBBctad4A8gFoqjqdnE5yyjfLws4kjhAuJQNy",
  "key1": "3wChvRpQxE9RrhxxKoSx6nPfDCqgay27do8TwmterwFxxK7iiSfSG2nNVAsnpUy2nJH4bqbpRDxMsvwhsrzdyoXg",
  "key2": "5cpWMascAFJbBuBA86Z26V9bXrjyKgDDMJCX67RGxyy6pkoqR2oXh4fEm4DZ9yVsMKK28gtmJgViwZDPfpjz4haC",
  "key3": "5DSwzD2YSLcWv8UcVy17oFfmvmzsmmtWXUbv7kNa54FCLvDMn6XzeFsCK2hYowDi2HxWhGNQ3S1iPfcjEoVYa5Et",
  "key4": "4kL17Lf1mk61Z7pxZwqjgcfU2URKv9yrvR58WfriyyqptGPvq3VqTya3epwJCse8yVhbDbBJdjjR8ukrL4Nv8Qvb",
  "key5": "5Re3oHVnNYGNJeAB7Wz5GytgHCvfeNr5ZcMQ4pSh2abAuRBUoByYnFPCt8QFEckTZ76txKwxKvqNGoaiur3p4so1",
  "key6": "4CE6MUy9KDocEUkaT2tfzPJNfKfVzhcxnKjiKwGSAAWKu4nkR1cea7Nmm5uBwWFvi6h9D7oNnVmR8isrYpFf6Tzc",
  "key7": "5hMuzSXgeY9bMiRDfPUEmMgtKWjC5HRzd6b8TBdxxvy91vLBVLfGMyqaHoKYbsX8bxNnB8F6g6kADyxs1qANiN1b",
  "key8": "3mhXJRkYma5ZNULebdJSEvpEryR82PtCbgs5nnbzmxNtxQb6juR2tx7iYk9bkbLCkiB4GAAut67WoTR6cJnx4Lg4",
  "key9": "5E2WGJzDzLxANGD5K6tE7ytcdpL9WgcAh1HD55qGau27J34nUzJ37oy8QQxCaCmC2k8Gf9Tx8mrKyvESPUCuwFDJ",
  "key10": "63yJAQjt2iTNzvHV21vy9A6CDq54sTNZbzCk76XkLkAhUxHSHnjdLs3B7K4Gd2Kgs4ndhiMbLjWgDbM7xq3tWtfQ",
  "key11": "3NBFEALzFbUvWDhNc3DdvYVBEDoAsPdfG2bx1XAfsk9ddh7JrGUnrsUgubSajEugFMrgpPMjSRWC9rPo5dcgEBCs",
  "key12": "2bFQtN9SfACwvxANxVP5DBiwsV7vmHnj1T4aa1T9Eb5a4KwuBkbk9SKBiT9kaLTziwEuYnvSSYkWazrMpAhezjxs",
  "key13": "3uVCqHcUdhtp5iLgbhoVtZai28F77kv7fAPZzZjzEq3rtv5cQDahAdFB51keRUNiiNrGdyLjqWRHrfgA7K3P3a5i",
  "key14": "xF2CbcoJfrpbA9ixmTMaeWScPSTmuB4Ajrjb3oLYEtU3JPLPfUjgUoPGYcp5keQvCEAuMiY6z6yyfnGxDCg4eZs",
  "key15": "pLnojxEZ5wbo68mnTFWQHAbnoddc3wWDQwpZquCDKDJVCgNhqfvfHirbym1VAJjVypugkKzCT7wJqbHN2sV4eAZ",
  "key16": "EUH2Z48JbECogttZ4LmSSLRPSAuZJYu8u2YmkX3RKfgpM3n4YW3afpyNBfcjz7eheVEYYhK6jjfVGeTGTjBkgrh",
  "key17": "2YHxKrYuia2uSZVZTDK4GfBNfAgkXdMFZCMyZ7qdVicT2dr2MgwczvHqS4rFY9XjyxNErwXU4ZKgmVxtqsLkVBtg",
  "key18": "9wAi4xKDsSkdTDEiC6DPQsKPHEGPjERcvQFLykqRRmGv8DDWYMgajbMaZaqw8qzUNyEE6MqpatYtr2w7PBqiPiT",
  "key19": "4ma8dRRZA3poZasCzNo7Ffft5K7UuBuAS5iBZSrpTT2N9ttQfgJ5dEDynh9thoBrvP2GpqfoU5eNKxLvB8uNPti4",
  "key20": "2djG6qxz3rmHYtjNmBVEzFXFW5TMAZPV7fi4BHsmE6j4Exuw8rTLDpQzWZwSoPeytKVTPgKGe7G8rQMgHLTHH5mK",
  "key21": "3cDTkXHp57xEquQezBEoK5fbya1eGst3ToYXxDSdGFG1CafZpPWfiRSqF5ngi2AqzQzFQ1DEUFn1f236JqaRUHHs",
  "key22": "2FR5RNsRd3CP1HbkXSZ5CCH9VJ8hUoLBaCjSpxBiRkdQtnNPAHxQ3VccRbvsM4Jkma6eWu2ws2V6oGwv6ijR4PvT",
  "key23": "3pT4N4YZnuEMSRuZRDDnRTW8CaB5nGiyvrNFDzGManheEDpL6QBtWAhf1TcMwnmSFQ2KsnCWc8Gb46QNUmaedZmt",
  "key24": "4Fc4pVuspvdXSJoriiGuLsVdwkktRr5qrYJAyw6332TPCGZsZDHPuHk9CWNRitMvcEeUN68peKEAxNRzxpTEAnXj",
  "key25": "2zPzD237s11DrsmrJKfYfhjoESf5RhvBeDSZCC4ZgxFERsJnTvYkMhMtU4cVwpBHZe9CzVYhYT7CCfBVQqbwPqLu",
  "key26": "4LzHuPvG7zVwWCmKxEwoFvPmBqpeQWn6qZN3d4CyZeeg53gtNXT6DqpVwfiwqFr3wYrp1xskoyy6uVQJDiVmXy5n",
  "key27": "1rNyeiyaFkRsLyZy4CQJMKoswCAm4fDf4aL4xSnvo5X13nC9wbtGCyyZ3V5srGxDtZu3sGC6KvNQ94M3Uax6EvB",
  "key28": "3MD8yxDfZBY11kn5REsx7sLwrP4WYhvMDnZmPoT8DvrfuKXi2pYFeV5sxTCwSCF8KsWaLR3naP7aG8qJriD5S6hd",
  "key29": "2b4LVCKWtnntcAGCTfKmLxAeeyHPL49RutJrrzizZcjjfTGkojBS7gE3LMhkhgFAMrUXE69FC4wiNavasHLxgWYa",
  "key30": "3JrMa25KvNELMcZDzv49QWcNrnzJGnxZAVHD6gdvbY7eEAjegX8a437eUtyWrNiLmLksMetYW3NuxTmN7cxDM8U5",
  "key31": "3BaoeLqr9Tzk1sAqUjcHk5yDEvKeUfeVhksM29PuhJ3TzRaC1BwFCiP8sWpdb7bT52sczVH1wnzfqenfrVgNXcdT",
  "key32": "23axARKGufKYHfAJtpEBiG9MmwjoGbhNfqMGt3aXTDkxnmZMtU97f7kCJib6rjjQUyGtkV5hcDDWxMRFFndTWtJB",
  "key33": "4L1LgbVfhadpNj93SXwjAk94yUAyGidXeNJVq8cySQUL42FQA45kAeQPXZ2A5Tpn5SskCqoiD17AgZgt594AwrYJ",
  "key34": "48s9NekStG9SdVcWEHZX2hn4JDgJ1b3gaN5DTLH1QQTGAnaqjdngAw4SwaxUWoCd6Wvzrj4Na8f34qS447ENyZK6",
  "key35": "4ZJtxzBPRjKBoPaCF7R51M7KdJGEUaLc6hDpiMh99u4A91GQQR2ctqz4tKNezVhkQG8oShnDCfyKD1Abz1Hi1uiC"
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
