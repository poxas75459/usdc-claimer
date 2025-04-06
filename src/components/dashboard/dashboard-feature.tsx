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
    "5gKbGnNvfztDTwcJYpp671rXAeshFKNXvztFMG2f8BAV3L5jh4WTppihfFHqcAvrm3TKkPbmtHK6M8jK9bNPcWvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AmEEZon64RuXCFxbC2MxHyxD8kfsx8PwGdYHi6KBQFCVUjESeQqNKyjypZBmfrVw9aB2zaAWuPLda6PyQ48yPWy",
  "key1": "5Jq7Mm3WDUKzpzyEjxMDs3C5xWrzFUJzmHCzg8LVaCr7fJuBYQjy7ERHaBf1EVKaBbHTVfQA4o5yXpx4AYrJH5b9",
  "key2": "1d1vnpcQpGPDbFoHckSSXigcCRttJFopnvWBofrFSR8ZaqpQeQ8GtoSnRPtJX1Y4QEm82Nmy6RGNHRV8FQ9zexE",
  "key3": "AR9QbvMN8cscdEJVbjnTWL6eD3KD9RCDvuaFXdZ9UdA6Rdb5hvvj1Lmygw4VesWPMX2PaRQgYE1F1rJN1npuAp7",
  "key4": "49ZeR4haXLxnRATxkz1MWcHyqB4omiaGujupxvf3Cu8ssUsQXSX5KTiZGoXMW6Nkf5BexBnDoTcHnEQZJZ2pJoYv",
  "key5": "3N9EVVdcqDE8ZAPx9MSAXkunD3k3yocsrVDY1W4k3VYJxPApC2gBsFnpAVVcpnVxmpZ5H13qnE8MC1JeEAhw8vE",
  "key6": "3hJ38qEz7AujZeDd2EJT3kd4kmjn8DCRSkYGeBycromaXUkMpMLmsJXMLZkd8yCvMgMLKwU9K6Uw6uoxF1SkmDB7",
  "key7": "2D2MZURErRS5PyZBDj17NhvMYTzemYnc5MtoLJZ4BexNDV5SipLfjY3q477d9FaP9BbwZ97jSvdScyzEH7k3knEY",
  "key8": "5B6wfGQvN91SFK5DacAtNVbJDnFw6RBKHm9fjKSDEKh8W4z3KrT6rVer9MXhbkdEeviaomVNqtG7FYjzcXC7mhZY",
  "key9": "58b1Z3EnbGrXK64g2KtxFH8MzHBM32gbh1qUucmjub4CrBc9sVFyCAoT84Ga95ZNHdFYsNa4douPWXD7FXzKFi8U",
  "key10": "h6gaEzyYLXLE6XYfFDUgKAgoB8fUQTEgdeb3o2RL7qnRRKQZQ6NGWzQ44p6FHcAcphKsmDH69mErDgTz8XMNaDZ",
  "key11": "3Kq6LkQNzBjyXAT3JjS1QRTmhR4zKpoZhiKGCuzFTtXiXsiy7q8pENqiSgf5QZsz6Mcy33gmKR87wcn4tPVHrGKZ",
  "key12": "58DzSUs73eABCrfiRMGdradkzXRw5Bzwcob87pPcnpB156kv19CEnhguANf95QcsDwACf7ck3TFC3TETUp7WvmRK",
  "key13": "3V2p12Fm65NXjEwc6KizmBaAYjjJg2iTncdb28E3zuCyVUufDRtaATUYSWPH8KonKDXVRDrtGt6ACDBhAZ2aWXwy",
  "key14": "2jfAdCfaCjGsA5HddG1rdAs1vT65mKkWBW3FfNF3wVVX2MxodWAbaAuSTn4zsN8srPoMKfXgi5fjUKwgsgNES98s",
  "key15": "5yirmn93BBrvGyEsn5CaVHgtU7xeh3uU2d3otyF84vLCMcCGJAPsW5b1FpkBNUhD287HXBsse9wm8ysYJg4Bjvhp",
  "key16": "2ucHxdhxnUNmJuyLgiw565EhypDUyLLPhSrc8YjTvCwTUPn493sdhDfEnXGTFiJeKRNnM8hsgs8oBdFupKfi5pm4",
  "key17": "2CJA7SLwr8Un7kYa3eV2Psvbedg39aef7TRAje5VZSqgHo7fwZAt9T8UTk8iXz2PDyx1j1QU5TSkMozYRSGa1o99",
  "key18": "2GXs7UeGiZjaEV98N5jvUZ9RXtT1weXDwkFQ2mFbvsNJCZ2AgQCiVPFa4ecHXGqviaAihqpdFgL6BFPbqPQwRiay",
  "key19": "B7TbX9AGfdZL7dF2bPaf1w9c9akW8PDmyuxPuecWCSQz1LjK3mAMgLUFe9CnuT8FRpocydKjVN4gF8XsfyEBPMr",
  "key20": "WmpykbhdhWesrZYNypqRTf7XYZqivV4ze8xwiJ5ZwdE4GCd79UqUWWbVrZ5tWegCmMJy9GWQNMXWVrbijCsUbW2",
  "key21": "2eN7jyVaeYwdCsoGpHWC8tuNrseq5S1beaSwH5D78xAqYFh1r95JsDykte3HCzMq8E215WeWL9yTSq4uaUGDNywo",
  "key22": "2H7TJUKEkRRboreZsHWHWvFmS8zCNPWfRmsqmatPRA1cC2nUmYayi13SWArKiVAmswKcf2iXvVB5TNuiyLn3RW3C",
  "key23": "3a7wWm1EvpXbrJZhuthxa3BxatBTVrWtdR34BJHjdP1nBxewAooeQgdAtA7eAfhBBGz13xyV7SgUN2WetggwkRuV",
  "key24": "63Q26yUWz5C6fFtwTj34DXN58rFUvy4mhbFZ7JkcAaH6H22HfX2y7N6eyLJLRHvU6zKQCU4yWGiLWdS9StLTroMg",
  "key25": "3ek4EnRkLzn58HE3W17fWNkjGXSEBmbsdLq7E9cB6D8nNXV63hfvQJ4HQQn88t9Cn4QoKTgv8WHyG9RzrmE8YxQM",
  "key26": "46vYJQCYim5YRy3dCp7xq7hVgvANATFbbKk8eBWt4JWo48nzbdTctG2iB5iPT5T7TCRAswjXVAVJ1oLTEwfJdtLA",
  "key27": "5K892af6tkLE8XgB78tdyRqofJTYArDfrw1F49sy8AXKbrAQZKkw5ANUHNJoEbBPudPkengqXH3hbyGXFgTDWt42",
  "key28": "5aC3buafKCC8wXBrJiHgjgR6W4CjxKE6dYEvnux3GcpfDAUFsGQUknofK1zrsXVKYqtEDs98m1xq3RZdjkYzz3sF",
  "key29": "4jbrdCWcQKVqTzEJcjUr6NCtCYV5C2ozqGevBxoassM6hUZtMYLm9jB9DAqhuZh11YmdzL3kEZZA2i1XxobEQ8PE",
  "key30": "4nFDL6MBxD5VkeFLjLMVVBnutmXQrNU73EimaKgEcEinUUGB2A6tUU3MzgEU9tuwrFaxnMqJyVPfQxM68PGA4GLt",
  "key31": "57UcqadvL6pA8mi4Kbs4YE1pHWQbao5zKUGxchqbcE98zW1ku4SGTW1EVqGR34pVB2TKonDoq4MzZRKjpZrfAXDE",
  "key32": "5FH5v3MgGrNiy16AJu8YzF865MgESeSAVBBu9KE3c8yec8Q1Ypi2g79pVCFsDLboRsJg9zJAbMdfrN9rxZvtWrvX",
  "key33": "xTuTuTnnwmZ5GVCk7PWNHnXM6iHFhsqSbzrxC8cGFsZvzzC9TXrWmRRnYK8Kz1U6F6q35C3DrDjYp6ESSgEBFdY",
  "key34": "3GmFTHR4NyiQNomYtLNtjpYCzb9qogYPcMHSJ9fVLVtEn5EDjBQnoNBsPizAoHH7wYTaQJqykrHVkMbpJfEPTNJX",
  "key35": "3oE9zDGjodPpygT3tR3muvPPHvELcRyuwQgi6xLePZSmojNyaBPWmdStZe5zSNoUQDv3sDqBuNdSY9zWtfBhTzyQ",
  "key36": "61LiAbNCn4c4KSabKZD4czyQ2bun9zHDcJbDDYWPNtJR4qzCyfUXmEhVv3347rR3MgmsxsXFSMipFkY6AWxZz1BM",
  "key37": "4NfstCY89MJxCYVq7YBxkXqg7SvdFSxQwLbhKXD63GYDvcsboT8i5xwE9jj7dsozUDuhnBokQ9NhmwxxHse5DaBX"
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
