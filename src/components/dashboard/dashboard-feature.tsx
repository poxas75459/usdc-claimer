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
    "4FmxXw4TPcXqaWbJX8ZhuCZsSJKCitQKDNAXtD8z7mkUakjWmbrYtK8C3XW99FEGFtXD7rtsVPPucbZoHYNMuUn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pJSVKCBKDU9ZBCZuCyRvdStewxpSK35Wwf9oQxrMU1ZeCFQ6aNfsGb5wkKbF449jifmC4J1Baftm3KnBt6KZKnL",
  "key1": "3KzDz7rLMazsyAXNcoGLEU2PyQEEoSvKni2HnGtQC99E4bSeiw3wjxLx96umetEioah7Pmadxx8EvQHzJT8L5C1Y",
  "key2": "3sS8SNh3BXsJaK1QvNVTxds7oRTr2qCfcUrNrWd3zwXAjC9sVGX1r8wEbebDVfUeZR7dGKhjGt25teGGXfh8qe7W",
  "key3": "5SrevLLkKeb9Ywu1jtLVxuZ4kFPj9WCQW3uFfAVK7usTxs5p3SeQbsAsNUzQU3brTs2yECCvodT12hvCgZ6dQSh5",
  "key4": "KYCUQfT958LZYwGgrebnCgs2ZWDskgNovchWGXcZ9vRgkfDzvxB7ND314aPkctUiLaU56MRYukgRqanWJ8WCEnE",
  "key5": "5X1xH3rYT1EN7kob3KcN9nLR9g8QkiKsjPuiaML23Fa94HyRjKNLRbUvCBtZfRfEtymcmdJcGSs54oscvT6oRnSR",
  "key6": "2pTmAmAMYzu93JrEPchGaa8ZgNsZPaaQrp8PCj8idGfCun2Lr3ox5Sv2cdVHUxpqyc2xDbqkJWmUxaK9yuZbVruj",
  "key7": "2tPojNXLpnKMpeKFkcf1p4f3SwSjeQhzLWxGWa7ep2xbBVx6EZY4f1cmivfhjRygr8TUcyQiyAywRC1i5wbG2wFe",
  "key8": "52U7dxKe6kqyBNcQA2qNNjX8e9dcvSAq41jtTyXjGCYzTzTqa5KyDgexd83kYvsZuyZvKvWjHzZPoZRa6fkoNTt6",
  "key9": "Xh81GBBFSwJgG5obpESAkQ4uNsnxrKepWYp5baEBYujkpkRdv9KX5s6p4e6AQYJtHcTj1VsoZ76K8fzSLGZHg2Q",
  "key10": "2GPjEpCwAG2S47gtgQTCXeydmQmJeqD34zYXsmSTDDsZbSuvjgooQ7vvr8JANxDFQ9Dao4DSiokhPFhJgamx3keD",
  "key11": "3xpHB28ncR4ad6PRphwzKF7YxVoy1xxkc2yZegvGH4nUDcjizr2uU6EqKm7p7fHjq6Hv8MSYeeqWHv6q6VmjuLyY",
  "key12": "63obhENFdh8CLR6qmAmxmvtXnv1MpCL6Acx9gV3c5gxQHW2sq4ijocdFacY3k7fDKjHD3em61LkPrPnGGnexwGiA",
  "key13": "oQyRcoKzgCEuSVYxTN9v3UcAEjtzb4EWAwePHzGZErNNZCZXWqwDzZeyQ6gHuVp7chJR5CymU6cCjBxTxKLFrA9",
  "key14": "3EqEb5UNbQDpuVsfTZ9orzmf5V6jqm1LSetbwQnHuDyTrEgpP9Zhpi748Zw9tVMNNv3Wx5nN99x9YC8vwQkvYWEE",
  "key15": "4grHvr4sGSsmFg9L9uyZvxK3XAgpyFQD7rpUTxuaBZnevBRKVmi4LRPeRjUrFcje9qgrQ29PKqYWsrEF8wzwqMjy",
  "key16": "2BGMnGLVGf1qAVctmDvrpoehWdPmDAwMLkywzvGp1YRutahNbuiZVhjxcy9GnxkTjGJMo6z9ECxo9EBf93Jh8X4s",
  "key17": "5knpYZEyNBhSigkWkLckkUfoPk6qrF3WuxAaLHYuofkdvtTBvfmHbtrvqiRRypxbGoTTmsgL6UvoRgZADdFi49sL",
  "key18": "39h8gsBiFonbEL6JLR7zvZ9urkszXENN2ABMR9qkoJq8zCu2E7yeFHN8XPJDEYBzub973tR9nSC89wgRhdSY7ABR",
  "key19": "3fBZUyi9ycciPuPSxJRRj6yupiGvTZmM8KtXUjqcym5fr8Qh2JT8ssDBLeukbtJ9KTS6E4iTzRkksar9CstUEqnb",
  "key20": "4m234ixNrNMxMSgM8Wj5abh1hR8zkhhEWC1u7KGVmZs3SzdqHdb1oc6XstR5RJa6rUYeAy5bCDQVpZj1z2akXbf3",
  "key21": "66aE8QbPDNZKWeAEWAy5axBSCfEZkB1pTygziUAggfc9eP14gJCXsaSv1Zc6DxEY4toAim2tKwkZwpSwiqjrHGVF",
  "key22": "3zSkwV9BmExSby3JH8Uugpo5jUsSArZhaGr9P9L1qH3FoSf2MYsktkJ1PZfiRoybCe536JWiSG89r9akGk2kACEa",
  "key23": "5d6pCzZcpjuzXi9iM6XVmwpC9XeThCjYnEv8QsZTpEpM4h9QQEJK4xBCTNLSRTdJj1SwNgjqsJg18jXYUBLwDuK2",
  "key24": "5ZpK6oksu3XFn9gFkBkzSJ8UZnS287aCKCj3z1BhzdBrDvn6uKRwZP6EG3yw8tHAFo5Ru2vCDQaQP6eKGAn4PcMF",
  "key25": "5U6JKd3VwnyVYsPBMLQdfhhxWtCWxKLEE87Jxkny9pPc6ndGVWEYdeE1wa6MmybiaF4QPLhFDU5fXgXtj3SGJ8uz",
  "key26": "24KfBVRwcTF77h6Qk2AwqcoTKoWN5BpdeDEtgbFWZa4Bmn8nHCxhs8yvNhSvUsvoUtn2mcvjz25PUKCMo8Zyd6jg",
  "key27": "39gnzX9MyziotMREWfBxNqq6FiKB5pTxw73BhvuFN5BGmzcbEAJiiDC7bAWgDpJx6QWNYgPQF4rKPVwH9pNrprF7",
  "key28": "4JDbVxhJVYPYZRgZhiUcY3JWuzzRmYu117mkkFwLRnPRBFLqfdHgSrspv8GKtGwJfdyfXNNgCQrkNqKn8wjaFRwt",
  "key29": "4XaM1EvVG1GcHT5Nn3YmNL9iSrpgqPMc6rYccTzsD6hQhPbgTgTDhZUVwcgxuWHB4XAiPvVkoeJrJMskHzQG6eWP",
  "key30": "5s5AM7BydRQ82gjvbfmTrnXvgow1oadETR2BKej8SwSK98gQGfTcJ4QsZqN71XZSpkam11QKdP4AKtoPLiAqn42V",
  "key31": "4h3bEmwadykBVhFQr2djMnMX35kANhVcxizZTcyQww6jWXAHLWuhV463iUjRDDgpUfz1WDTyz8KUdoKqG5scyeRX",
  "key32": "ziWMY1RXBrUfrKpGMqQMDtekwnhfveh6k5cvkPta6cee36rp8x6phhuj5hdMPwGja3GffHB1E8ESi7K8BtayVp5",
  "key33": "KVtyAeyWFX1x57HnPemg7UFJKzoT37fXo2t9CEWto5WJjS5ZB5LVXbwC18ixxM2tzyjNU7TK3VPFBvcWxB7HT6A",
  "key34": "43Gfd5Naw37vePntqftt43pyUQ6rjqRMjv2Cvga4RKn1RKyjVQFg2kzTXBi56WffLQzR4zZWVpiCtG2fDGPiroEz",
  "key35": "27GAay7cXLhyWzVsX7etNehy62BVFfFHemsxATdyDfPwme2dk1u5GAAv49Kxa9YkhrSTp9FRJVEALTFuPvewhaZo",
  "key36": "37jjEh1YDyQNbRTpy8mp2MwvbG7Y3YRNJStHCCcXwYiQbmHG5Pft6WUBd4QcDRos4AqGWo5VJ834xZ62L8c9SFHV",
  "key37": "57kXwyeasriUVqnSp9yiiemE9XU9YwFLSy8sirFYih19kxgHZe581SgAEtdqHbiDnJ4CnD1oQrqYAtmLhTNFuWj7",
  "key38": "4Hx47B7qjAoRt6j3YRSQcUjg83WgdcYRsj2Qp7gsTPvtrG7NXvks6cWRxHay3osxFGadyFaLu9RwBbM2fqogU7Rp",
  "key39": "Jhx4MPTZ1yP82NLp6o4B8f7SzfYrTm5tV8MTcdFNZSbozVy25U1BZVaySfvRjUMvYE9j4vT7kvDZbXz1fsXq4Am",
  "key40": "NwX3qsdEV3UrceqSQomDuNtcqEs9E1qJ2SGAtk83LC4QTU2b2FJJMhKQKCmPmYqCgNqGsubat5rK1LWwpEQ56RC",
  "key41": "2UwYeqsNqX784ABRLeXFXKqrb1ZmMCxznJkDFedsKDX5dTmjMLrHPjCG8V5mKs6rqYcbkqRxbcuKbR9K48s87Gua",
  "key42": "r68DsC9ydpq31sxnruvFuawhNxSkQLNpDJ9uZsefnnwgBLisXpmjUVqXSf9dPeeJMJUMamknGs8b1hSfdNFN8Pi",
  "key43": "FzCXTUV1ZKqapRCx8CeFD9GwfR4PVuPR16Ewmk5Rixr43Djk8cVYA4iNq6GopMJEfoKSvNRnfZ9Zd9YUtpDdRxB",
  "key44": "ESWEN3C2ZWzDNNSgsNegsTkGGucaHwRGVLiS49pRcuDXF26xBo6A5VUJHfzYsfpKaRu423UWRSwNQ6roqQSyLQ1"
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
