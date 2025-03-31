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
    "4gUYhUdnseCQwGWU7AwjSVxMDvSCaHvTGn9p6AhG2nqDV45JzUXa3nXUQ34emHiAuZvtLx7HBr2roZ2dPmNzcxYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41yQp6jiCsScJQjo7kFVVdBddjqXFk8M6ngtXweS2cV5R4SXdpQQJ5cCn2SaaWMmgjcjvNioP3jtnaX6fGZdfph1",
  "key1": "2JZuZuCFPZcPkCDr5xWzCuZ949DQo73qjDeui3ZWJkc8GUrP3gDeFmDpXJwVPKjDyGDEYstzme492PmP2K4cLZEr",
  "key2": "2veruXbyxpYP8V2Pma1dEBxonD43wYkJn61BH7TwSnw83GcGCA8rvszjvrCqJaUrhZAxUU29rvaxdKX1bxWQ7q2t",
  "key3": "yB2SFQmiuHsoVUCxU7U6wv1zCmJcFETPgEaNJYJW5TVZafeQ9qdCRMejX7G8fke7BPbtbe8KcF1QB4qbxqJXG3u",
  "key4": "ERqoK3xZo2Avv5eYe4HchmVscNgAFCHi7FaWoD2PuiXnJubgbgo9HwSuBddvMXigfhdWoM1jYvPZoimGafoYzqz",
  "key5": "3BLzps6Ronf1vyfaXS4YFM2Vf9J5KLtSJfGFa1tTzyN5u3mBAFp8ddVUyoV9pqF96NYpEt6iudFPeyvevzeWUrzd",
  "key6": "qaeYewdrgLv5Uz71tmorryZAYfNJt5eYjM1swvzshZJCVFLkhR7QaGwmagUvfLJSA2xEcyFMV62m5C22kn9ep8T",
  "key7": "36Ume5DncCtAZ9LqhAV1GJrnTJVxDD1VMkPj3cWM5HGtCHQQMMo9gxtz7tqaWG6m941gSzoBHdJG8zYZY5LgTYE7",
  "key8": "2eu5QhmEmwvZ8ybrqfRTzEjUQ75PPomNTG2mPxtErcNWzi1iuHzfthSNdtdm75fhnJdgdHguRipzaNzSjze8bHE8",
  "key9": "56AjUF23coeYfGfNkdnSBuym3mBhaf4fSdcy2vKDN4d1rac2RUjW1L7iQ2L97EoTHpw17bsuJN5fsvbKtQhUWjmc",
  "key10": "49GP4z5FMUrtA2v8Ni9NTDNb9k4YD4ExCFbAABYn43ijrqqw2gDAa1ASXBMoVXWjYW86Gug1FCREHLgqSdPGguCj",
  "key11": "vrMnpizT3Scsu2kYnwhiYbK1TZPcpRMZtTzQAo4GNzmcZPwAAVqpoxW1F4xRCyMaxPdoePg2f6KpF3KWDzvhudM",
  "key12": "4BF2556XKebgoDRBjRsTN8V3NbzD97V5ewWzUrpKV4pzDfQtEWbK6j7uuJWeAK56wGvpPtfoavGDMrjppTBBRT3m",
  "key13": "YxMAYWiqcmkKCo11xW3f2nh6zUhmkWoJ4VJAzUdngaHZoVaK1bxy97sAFkBaC2xAxt8LsrDHWwRBHtvznXtGEgq",
  "key14": "M6WTKDhLNjLoiJtva2eu9sVamYKticmSn4qBdYe7QqToMQPQm2u7J3xGqK8ghrWZewQ5v3DErCKWXqHQTTEDGSG",
  "key15": "3GueD1ih5dvUrPMZ5hS36DuRSxU487p3vrdvSqkBpHDNiFPr98dirC81SqhBpTdmzLAE5YoasdW9LrkDnYdi9LCM",
  "key16": "5M9CtEEYbZuBwVuRfJzENsxWHbMUh4NyyPBf9CSdziL9ePA9LEeMGKmBhdjnDdXqHkgupsw3LKKpcSfzkLakP8V6",
  "key17": "37vbbina8rZfrtFKsAzwiEdmMcDdzj581jQ8QDiSNrj5k9rcaCAMPk5wkaD85Gihv8CZ1oBA5ZScTuEC1f1SFBFC",
  "key18": "39QBpPqL5XKVkouwDoPtg955N2WfB7FHRSSb6TatBWw2vsA4w4SngFhmMM6iNFUUKNmibKLfEQhuRUU2BFA5Z19S",
  "key19": "4VD6CxgagFi4sfSBjeFEiQuTW2A5vCGVB6LNESsPTEU7XWLXhgDmANX2ZaGMSiCA57EbgcvfmY2papGNGZpmuxt6",
  "key20": "CfA2raqVXNy73qTnp8YDLipTqawqr2eaGA9vEE7JQNRh5vcdDdQNAjxyT8TL6dsH8VEDFTG6w8jbncqCCR1wJF4",
  "key21": "4Mz3z6g6ogoVv8hqZ1VxErtMyboEKreBMhzJFefJUuMLwRGiC8vP7CaypY94pXU2UZS2HcVjXX9KgcNzj5GgAggX",
  "key22": "5boH2Xxr74NEdwj4z47YHGmcUS1EbVprAM41Wyt8qwn4MByydmhE79GUccF6hFgbQcA17T1wsjCgQXsetjZnVJEh",
  "key23": "L56CSseqej27qHEZcUHKmZ8zwE3jsojs9PaJX3bSRg1fBwHQC4tD2mxTd71omjydLYAxGBLPQkbSrQTzFCGyj6h",
  "key24": "34Fstwb9tWfq2SbUKNwj6Fi9ooeLyun7yBmqhAyxtGhzdTygnWwai8VfEN9ew2xS4KjLBeuYDszcu9tKDgKQY92p",
  "key25": "j5A8jJJ8AFAsXvkBhmb6jQwLNqtQSTKF1txe8sPqCbyUry9GjaU4Wedyid83frDPwkWZNybcrs1PVo7eY9BzPmT",
  "key26": "2x49Ko6CDX19iSobdjp4sWkHsiUyib9arzeKfrLRAXtereRBLrFr5tRncwm2dQ9MsQo5134iAzYypNMyE5HLRoGj",
  "key27": "5iYsyQEwUyE3r4p3t1ptnhXL6TvhMWAHpLLUZND2i3BWAhPsgiooihmqivVL1SVhHQCkYXeN2891cPnxEvbRun3j",
  "key28": "67TLsjuWWNCaMS2gDop8aoZu2aT8NPPcpXurpQCtYT5n4w9ed7ikWpreaYacPBcNvUG32eo82FWWTV25qmCbQDq8",
  "key29": "2BMdRjYJXTtF3HCmV9YxdG9QsutCEDnZRi638raMxRxuU7nvWGMnQjyRcbfBKMeDpP5ym5BueJ83JN5NanLKErwd",
  "key30": "4yf8MhfBRHwLmVPeka97j5x6DeRmaEiSzLDBrnHitxBij8xprFHBVPbDpkPfHrH5agG5iuRE8uowpJdyoBVfuJN8",
  "key31": "2LGwaVBdVE3UoftaCNom7DYkzdcUKBqp4RhgiL9ojgSnxqTLfS2SFQbixB8w4xQ7VWonbxDW6xzq8QdLnCuiVRgV",
  "key32": "55KzAzZWUXctma774J1Kw4gtKDi4C6wpQNjPKmr1g7yNipZCTV3tsenoo1nSHysqZPgPAGtauLzPGotirqGW4zD9",
  "key33": "3J3kYhpK8D8bEKkbgcJmqbNV6LzuqFWesbBc1zirMpdQsyhkwWqji4BVjMNt5qLFn876NWQ4FEweNF62HLo1i5RH"
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
