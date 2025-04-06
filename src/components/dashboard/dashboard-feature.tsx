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
    "2Z7RtJ3JznYaD5bBP9fCASwiXfhyiJH1vCSza9jiCdY5Hctc4dXEpiLGCbAcKimhhixCYhtf4MujKdGt3pbDoSLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zapRFP1aFDuZ3rsCWy1zNp2vk4jzxz6t2h5MwCkXivVSjaC9vLxdnDVGf71CGcMMpW41vnFxA7uVTsgsanzBDAo",
  "key1": "zcNaV89CSEQbUHAUVKene28r95vgANhxzPUzCxSv6UXivMq37DejZTECKgzhHmkriGWpwbe4WzP3dzXJHSizjdB",
  "key2": "3Tgse7w7jzkyG3RDvpb4wjRN9PSeeiGsCrsFAhEnfDbCzRQ7RLMh5Kr9eZgmhH7YvGscEPbfdb6yveLFsgDD32e6",
  "key3": "2dKfqmr3i4HSBGekNELEayDsj4q5iTdLjYZXPG78AsadXYorhKtEhn14wjD8VvcrEMovunDDWtJuH2XBS22PT8eb",
  "key4": "4aBidh4NfG1LuvzcWsfp77bMSQ3FVU2xPHMUYwgW6TKztU6m3nDcHkfXv2ikpY3RMYE9t6nFBAv9Buf2VYnfDBh8",
  "key5": "2odh7vYWqLYcmgCJnV8tDVCv2S7rs1Ytnp2JpQmh7KTws7PTkzLdzhXaZgENJmDorKnNxhTzcuwC4u6iazSiavS8",
  "key6": "2AbkPn7848r9KmLW3vK6WzMzsRiSEM6opttcSbHxMqgQ1izyvb8e6p3ypt9Xw1aVLMHQyuj9v9f3bB5VGgz6LtDX",
  "key7": "4AvAv1cQgVKSMZkgT3TQdm5YZnC1pxNBTn1juh7G4oRAUwzFNjmuhFETsrukHH1czLoYkU4drKNKMGeqxkqhyt7p",
  "key8": "2apwuPPcXYxc4WpjTydXXQHuWbkkSyRFGJXoUKJGF5s7kdTDBKZRvC2SozNZL4k2ZC9K3V9S68MbVuXUNJ6VqtY6",
  "key9": "3bD85LYa3tAhCrLDwGidktbKD4Y4igtFcUcKsEfo8Bb9PujuxZyiEC9XAvMWsLtnz2UqtQMu3qWWPWq3B3TZkfBX",
  "key10": "4gpz8rTgq8sKppdou4Bj1HuB3jkJBMiL37ei7daM3oSTgYAivCYjdMxP3NkonxUmLYLg7DTmSYojqLewDuCK4hbx",
  "key11": "3NVtsiRhvJP2w6PdHZDgXGFxfoTK1ipTRoEHqkt4EoG1uxdVEvGDYiu9f32SmF9XdJwMG1Lj91exNBW6m2r3DyVe",
  "key12": "C9h61KKq2cLspwk17NwEBYydcvtUXtWjZvqndtUXuXWRtxJVLavDyyNXYysARRaztKie7R6iVVtJo1SVGTgfgeB",
  "key13": "4AxbVBAZCayqzJ5ZSwws7vfjxQk4JEeTHWLGTA4BtKuY5Dv5fhytWcDaXU2KVyRjdKdRNB2ZzZNzPKkwGFqYNS4X",
  "key14": "63hatpv48hDucQgCSyf8vqqpcHut9353Q4G9rXpSg34VPh7Q6DmCwLEoAAKyHTcX22Uzw1r69N175Gz7jfoPNPWr",
  "key15": "2RGNVpXTQyAkZNsKBrzWL312s8Eve6YhL6J8bTR41194mmFD5KLVCR6VPTYMUUy1TymHQe7SmS7j7Ttq2UeLucKJ",
  "key16": "mqRHBjbqtpsTc23x7yA3raxpL7vtdJifaNutbCHWkrkkoGQf1iSgeQ71V3rJcAVt2GhLkqqSTEbGqJWJpWWdfuw",
  "key17": "4ePJdVF7LB1kSu21hhMJkF7keuAe4MBqZqEo2HzqqnstrmkefZ2tdhqZNNVLnrNJC9jCHHrTNvrkrRqL1zzMEcSP",
  "key18": "5RprQyUSK2uMdWkjFUczV8BppcTFqtoykFnzc4QNxHH1mf6x7wDMAQr9Dmwmft29DPSWpJ6nWekic3eD4vSAtpzJ",
  "key19": "4ZLBxWxuihhK7j4pivXECTSXMiR4EMWB34feKTC7n9XfgWgwjZbkzKZUgTG22Ub8UCZBGrmLtUQH5mRpQiKVMR44",
  "key20": "6VQcQXBEJTqQ37tmcR5ic4a8vUhoc83EPHuNV19cKwg68r9YQC7WbB8VCUGsTwTEP6TMo6szBBzzBBY4CovPk4d",
  "key21": "3PBxm21jSjnmycpvnLJqkkmNwG4m85knRCATBpQ8FT3aDA9vGbbDfcx83AWED7uks7VnjRdGMwkAFQ4tB9zMnJNC",
  "key22": "2vwS7Bi5ffpAfve1t5J156xdtRGk9Ye9gBPF4uwqEUo6BorzNEG3Yv7YaxrUdQrbhH7UASfbiRt5qctmk3tsEoJp",
  "key23": "5xDFAAvQqYt1XMprxWCRFjeGhEoyEpQ4qvhHgAB1Gw1XAzBNottn7bHWrcDDNGi62XyzeX1eZvYaz8DVSvqeUfbF",
  "key24": "611b5zFMEvhD4amGJ7hfBH2Q56hbhNgWciyQcuQFmabpJ87LxHzzyYUcwK3VM4w4k1qFFqTAuV4x3ji1NhHSgjch",
  "key25": "4Te1yPis1YRf5G5CSPs3pifxeXMmyHw3gh8C4PetTdovsPL1xBEqbR71LmGQtsHiPgMdroAgWKLnsREtq3vgxSmA",
  "key26": "34epchtJio41cff2SWw9AxpzS9TiCtwrw2yXkBEA5YS2ZcLXMmuf5TqxKd6Vt4AzpE3PMYDdF24E1QWeA6bR3qJG",
  "key27": "4NWshTihv5rX8ksVfs6B3D12HrMubXaMVx8ytiGpjBxgZeUKqxopSJPWv8ewBDfsDd1K7X3o49idKcaXxFfLhGS",
  "key28": "4PVWaKW1LVgLhdoUviHFMXgA3u6hn24yNJuVRV7n3rQeTYxyiFUAjoCWtvBX7WxhZTy2Sr17564iH8BUhRQG2afT",
  "key29": "4CFCq33QaKQLFcq7M41s2Cv4E85TDkxwZk1w3SuMqf75kqwPz3VXL54MeqDtKAB6c4AkeGjMQCcxvR9FSQFyDEp",
  "key30": "36fi8M8n7HAnEMJduFyxVTiMSLgBRfAdcZhPKs4sKrguLnooPkjT963QDYGrE4LBp79Ju4vCiJNdbtLeLvfrybxr",
  "key31": "21J13aYfdoDJCtrCppeVVAu7njZyyoBVUNQY4u4G7Su8XG8mwkKvTPvsUabGvqsyXUcySsfJRoWtefgU3aYFEoQX",
  "key32": "23qMPBYd3fCAsn8NmevTCeRd1y2nymeP8Q9J4AKE7tXmNgtH2v3gt51DLKCB12dXxJkrRKENq1e77BKDK6RZTFYZ",
  "key33": "274ndKBCBHJtYSafmkK8cp9YAirodTVXQxjWZqZachXSKSZstfpan7agjqzpvvu1nPxBQnhPCKZXtzaYAZJrX6w8",
  "key34": "4yqtvrQWFVzD1VRV7Nxn8nJazHCGhMf6PNf3jLqsK8vip6UzzL6hu1gP9kiWH74qrqPTyHDKJ9YSn6RSaojuYNN5",
  "key35": "4mTN26WgyLeGgewDc9kerrp5U1d5kYfCRPgktfUbtahmnQAyyRid6Bdd44jX5RntLbpS8rbJND1zNg1Fs4r2mKG5",
  "key36": "2msEwETXpCeLzutGzQuTex31jf7qtuR7NdA5wqNFmh4KipeCZENp4bFb7FS1nJjk86xjerRGY6NheZBbQdbkVjA9",
  "key37": "5Hg9nQdSfpEzfmGxZFLN1dnX5U8JhfqT3kkWBd8UWp5um4QpgGXs7GNXj2DSzkpNGQwtkhiHwVjYv8c3SWCvy95c",
  "key38": "V7sEwBdTEWWwqzXNSbaZHm41LBhbirkGYSJv4bd78zUu2hwe7aCiYjeSMzJTbHqSX9yHGpQeTziN3vrWTe4c5QT",
  "key39": "5G29xpxKHczxn5ShFwGSy34HbVW5KauzPTpePrvvrNQaNuaCCTec8kDWeq8wERAMMGF5QkQhdi1y4eFgQuC3UnPK",
  "key40": "3H3nm7iMdfxuL7ubbuyyrcEPN3R52jsyWzDCw8ThcDFBcwNtUjzhDWtn7EZUkYeaZMdwmx8PYiSXgBQcw1CkqTXt",
  "key41": "2opoh7BZGFTPHaCAx7m1F5C6XnU6wzYp7F68wd8TCBVEskGVuPDC9RUqza4fM1UNrdedKVfwbCcyvFEYKgEPHyoD",
  "key42": "5dffN1nV6shfjmA8HC8pFj8jSL7Tpj2eEd1cidRnMsWYCf6TcRZHqpvcsb7LWUwpMbSfXvYy8hMj2K8WaiFpgurV",
  "key43": "5uGEFPZfb8CmhHfDhgb2gjdztRSRHpn9kFJhu7LxAuRVreDMx9uLWHfLVLVjEfbDAjKauvp9QMwrsQjZVCadLC7A",
  "key44": "2fWNG85ewDLkfQJd8daFm5BaFxRBmoVTJGYDmhQhRfiGQaSNCgAA4ca8EoGfxspEL7A58qQ9FEhQ36WFXvkfzYdR",
  "key45": "4nW6CCQsNRQRSmNSX1C5GhZsrGYGdBctzXK6caHz5Bd7jESLUor1GcBTjTpEGCd6YpjiuNt3QD6pxwCLejHDwmVs",
  "key46": "4wbdVrpMUQeWQExYW9yUDxAnzGKkJZzAbYSjcM6gLXdh7TLtXwTwT83P8nJ5SratQjtMFXTVW93d9jrdPYHVZqwa",
  "key47": "46ULuFtMTE3t28nb3F6ek6gE6ioPohhrRyeJkgowKDSGr3Zto5k91v1Jvz3MpeU6w1Paxe6rFNVKnrtCffzgs22Y"
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
