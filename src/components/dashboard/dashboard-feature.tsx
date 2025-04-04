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
    "NEqpL3uXfkfyZMN1UWKkA1eoJj1qZnzy5WeQJsEk7Uuc8qAYUd4QUtMeJQ7raxa8buVmmaUc2BjUNuwk1Y1Um71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27LyWEuuhgoBUPJTVJMYFqa3a2K7vLjqUQbxtu2NRkDqtQooCLtL4RvtAS6VnhsoLyURboybjeELzCcJEzjZJsNK",
  "key1": "4g78KQev835oAQ58oHB1q6xub3wUPSy4uST8oMVjHFtbQzW89CquiKtZB94adQfYN8g62EFv54qbJsKQDxQaLTKi",
  "key2": "o2pDfWPzsP7yjQG9S3nua65YxVsxbvx1Z1bJmM8GfzfU8kVVypBj3gyFsMueAizWBUiVcJ8AipAeHPFazMxfEC8",
  "key3": "tXwXb76jN7iwHh95yzS5U2dsFdkbkPncXa3974dWwDRWjMbVJW7a7rQ4z4Uo5Lzc1i7Z198FYiSu5gZ3YTHtg4u",
  "key4": "2AnRzJU5TDPWXq3f3K4Vv9dyj614Dz94WhMGtCzysL2J5BfsNMZhC3tbCNNRZtwncGpjefADfiSj3DQDPp3DUGhr",
  "key5": "4J6RqwxWzCzWiQ2wc876Ahrbdg1AL9v4K6mvniTsmGjk2a73GCXpH77LjKLEZwHpYNTNWPa3BduFqKe3GVVumoAi",
  "key6": "2MKvxZG8KytvezFW3wQ1b4mtJVHx2kNfWYqdAGDuAVrQEMqhXkhPUV9ETW7iGqHnx7yniMtGW51Uaupzu2oQmJvW",
  "key7": "26T5cUMsmHAZp1y37ddKxQHUfHbch21vHyZR4b2R7KiBkY17fKvFmwcdTrJULH6DVXBoxcXH4VqrNhDB3fkpywZt",
  "key8": "4DdFowuzMrGfoHk5f9ccSLA4ACYRkrajKGHnUKuHktAnUifos6XzXzrR4nzPE9BCs8yFsW2wQcSsTNgS3f23Akna",
  "key9": "5gcU13C8bvCt9gypSr981VEuv1m5Kjv99fD3H2wrugHx4vrk1q9Tz15MeiRLHqacVEiZtPVnYbcbBsg5BdPSoeTi",
  "key10": "54RQPWCbBsfgMXWzthHCc5zJyBRKrBnYraTs88pcPk6ichSRZpTHqjR5kq9gduJcTwN5Azu9gv9eRdfUya6XdZzq",
  "key11": "5Hx2EuPxBKr7CuP6KC48xit55pjDD48VNFShB3MWQxV7pupvvEzvPahyjgQGvRkTxwLZPnLuvHJZcvHPCQxqfcHi",
  "key12": "4E2x6q34FYaCstSw9MtbN18N8RgooAaAFsF2gsKGJSBSWF6eZJ3ammc9AndhwNrsCKaqyJUV8rymmkR1BNAQSN7c",
  "key13": "2uJKaJfXmsmNcvPRn96CMEw8hDXcp4cpsxcMaYsthzhEeHBSpehMsWDqnVAWhMA5GWqtP4PnG5jtdqowwTeeLVAu",
  "key14": "yFwPpQpJDbtsHbJdvGo9Qc8ooPvLheUWenK4CKx2xfgJujPWcSFAV5VXUNd4PpPbCu2yGD1SRx81LN9Qo6CakDP",
  "key15": "316avxpSQtCJ15maSwQUNujBSbAGt5Eksv14VktbBRcGvvWsEWYrGFCSMQX6b6YBFxRBvvbN3WLZnze5XyBR2tyw",
  "key16": "2g1aTm8haJWEmEMFVY2jWpW3EasKmKPCtQiHqn1HAAgMrXUdWaT1nSkmTQ6TVTLsWZc5uPMhQhqQce2Gw1r1em91",
  "key17": "2JUcKuePYXH1ESPzDhSFSCGwoFUCrwCnY1sQUew7LQwsoJTMrfHKTRSPEwJ1exmy8m6cswznqYSu7UYfVNo37EzT",
  "key18": "2ShEm5fPwxncEpX7KbXCkRsZhz524yqjpz7jRSypEjrTnxBvq9mhknB14P2TuYzXiAdy1dFtwnN3p6rCAn8x4bnU",
  "key19": "2JxHhMCnUfNCsW96XAnjvFBewYQF7e3WN3kTgLm5J1fqXcJ3QHBvwkbtoh7r3tn75JoKBac3JhiENBx7wqg52zer",
  "key20": "5Qmy9VhBVAponFg5NdCT8StJNawrJGfbSteP8Go87HBMVWEzXrwA2cSWHZvFCPmrcD5BofDUSaViZiPq6PXD8x57",
  "key21": "DmUWKbT2d7roBrBDQKSrKbxdb7um9HeRGeQuTQbFGV8XnwFeZbdwafGNRC5fTVFefCnbLJSsbNxtPJAcP3ZdafB",
  "key22": "5NgXwsCQ28gnZ6YVh1Kzabwzga7vCyc36ztGycTTE8o9KcWLvYDDMx4KYgwWZSTZahDJDpUws9VpeVkSJawPNwPT",
  "key23": "2zhpWAghiadBSDwbYYzh22qDGUXjb4wBh6FZDGLfaezGk4UwWsdjX7qrYWgeTNXo2RaXuGzEnh2JMPMcwJTAWhs7",
  "key24": "3Cjpz6VM1HGcK5xRuhzwDVDUMXgQ5nx8TxWBTqJDY33aZQXCR7ik4pEbhMikYjDGGKHvgVCbGGAYvcn6LmDs1KXp",
  "key25": "4XfGdhh8kHtae885VbNTrRLqGPKEtYiZEosTxAtwKgVQkee7ABWPVGnH42gQGSQESyZMcKjAbaMhL7KopyHe1CZw",
  "key26": "25DSCh8MEMYt3JnPrPbQbWf9kGUVkPN6MmuwdjRQ2ZcRpyaJmXrbRgrPh3EAQsRpj8A5oAe2XX6iM9yEYm1wQNiy",
  "key27": "4nu534BdhVEJY7zM79WTnGCvYzjRJkHW4bW9qe6uiJ8sAVZvzBtv4Xb8byr5iVWCh5jFdmsFwoJUD9AjDoThjz7Y",
  "key28": "4NGUuZa7FjPfQU4PKdjoM2b1UhsdDj6ZHqery9L1hTP8wjtXUxpxutyvBRjvBZGqyZN7cUPVnnxFXaHDjVuQcuE7",
  "key29": "4Qa7JQVpvF8p2ZhWpeCoxhkTHgwbvYD2ath1fWFrtuX6V1VLL9MizZqxkLFF4kc2ShfELkvYdtgSwKznWhcYK9S9",
  "key30": "3oe6VDYEw5MHxs8it8weguRVfmDNWdGuLNxg61hxDA5z1FeZUjyRUmMPaW4ceJrM5q1ksnq9xbaCoXcS58BMDVrx",
  "key31": "4eDNyGJbFcXY9hKgw7LFsGD3xB6YGURkcfW8H3QcykoEj9MYJwYjq8ERsFZixfc3ocsB5kH6E6sKbFCNwuWbyXTo",
  "key32": "5ekAPB2GCCYDAbkcBTgHtMFZNBXgQ42nRgHqBvSAp1tNrcceVbGgZRYvmpGtpeSaNdgdcYnai5Fw5FStKJjLgXGU",
  "key33": "2zEr2KmrfcT3u8aMgDEcoGA6731yC5wGgtYNZhRdLNke4LDjoSgnfXrfmimp5U6DrjP8yL6Zd4eSbMRx2SyRzbAd",
  "key34": "5qErtjAjaGyyiQxjVXf9oSw31inf4pswzkYgeQhHsSB1sjff72Mr9yqywbdscqJadStPe8K7mnw3R9P4ZuP73eqR"
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
