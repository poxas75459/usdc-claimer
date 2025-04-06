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
    "wcbbtedRucZqrxgRZQycoBaGpn3ZZoHpspJPDyVVdEvzdmbwbqMtWc7SuL7bBSwRZGfdswAXceiLUgXHdtzryE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jjzAHvP1jRekdYtcSRNmd5ekojWC3JYXeZhXf8GqterBTpBALjcqFS95FPNx4hzDH6SRYPueYA7ctBHtMVaD6Jr",
  "key1": "SAZUztaraEALWycsNPo4F8bpMWkxvm8z8BcoHzLJSxAa4tWrmWrEGrnB9U858JvijkqwW1fiV3vqX53VBmYZRaD",
  "key2": "2e1Wcd7upxP7AhsmZe2yD9YSxV5TEkdhhof4XhLx11BntEMAXM5hLzeTx2kB4Dx24jhnQ29ZuaFG6ZMrSs4J1LqS",
  "key3": "3Sx95Bd1UQShTZbkbVFDuJZEeLEQkA9S8ETghdAA9QQptgwUKWEU8HXWiK3C9bYavVqxYsjMdKZ3p2gcq2hysWvU",
  "key4": "38R385kD2a7csec9nux1qC6LNpzfZbPdJTAnpMMV8iL9WjjRKzhVkfdR1SU6BFqqLc2bK9NNNxw6Cze8ty7w7nJS",
  "key5": "3aZVC2jrhLFRrGg6BotiMU7WUrKn1W63sK9vjkfMqFWBnF54kYP61HAxNXGZSM4jodHGB6FEdhZY2MEpiFXkZ6cd",
  "key6": "3jdqR92GCEiRxtaxGp37LC3jhAJVUyQmRj6gXU9njoKGMS5sgtfHKTWAcUEjdV9GojFAcf2GJLEbAXcm5pwFRR1V",
  "key7": "eE2v2auHuPe2chXYrQDhReAtCLt7iQX4myLeJtgKn5WTyjkSjz73q41cUKmzbtGUa7kq8cipwY37HcRpQ5xRs7p",
  "key8": "56nQffHd549WEWGn49pXM1eEMJKP1sV87wNqH7oamnbiPB2uAvpet1525aVYQSN1qpx5sg4uoCKeB4DbTeDCw2ST",
  "key9": "37NRYm4W7M7NYTvxpxNeWrMLtZcVhDtvDeK9RHfYGkEpBBYfZbwoA43JTojTsfpSL5hrHrGWcKno6EYc8ioEaiEy",
  "key10": "65MVBRvtoL51t1mPUFXuKTxMkyvWoAL5KrxcK4BHogifAMw7bM9tNpHtazvkcCfwCfLgtCFE3qtbPJjpzUmuFLEX",
  "key11": "JmNzGqV6zNbzzjuK5EqestNELhsz22vs8rvFBJSTtaPuEWVFY65x8RrYft9XLbfLVdy67aM2v5atvPF8dtxGuyb",
  "key12": "hv9kfLhNVMwwwTyGxZWjZSbRg4cMcS1YgfNaPFSsyQ7kGS5XAApbyAKZqQdTNk5fLHCEo3WJH6PJwdti8k4oxY1",
  "key13": "2v4Zppdpn2N2t94biU3u2c6FPNdnS1543F8PMS6YRqWaHpEq5NatNsUvwjSqNK4CVuJrBSESEFwueV1UfeyKUAf9",
  "key14": "SXrRzaqZpzLxaMCbnuLWU7tGPK7vBvY9tFeNzdK9QbzpddgcrjNqPgRvo9B8YmP2shzxURC16NhyaabFkrtvhtu",
  "key15": "4sYoUAVhG4gEkUSP6exsBKCzE5uCXNkkNyCaRroWiAmoWmwZ8TRwaaGA5L46NVAUh6m8kuTF3sh38Lw4MtnMu9CG",
  "key16": "5h7wA6R7hLr3aD29RA5uoEAuptSh5T47yShSjUh3GXgS4GV3Ai7LJf9drSqDQKxiC7UXob5fv4fNr7aAFFrZUU8w",
  "key17": "243ENTWda17HeKzbbHjdUifegNLYgXirEbLhbVUk9Mm6qrtC2UotAXb2TpneVGocpsCE28Whgvk3sJrDvwkm8Xur",
  "key18": "2mB4F8ZghUt8Xq3RY4PJLGXvKyTVzN8r2GtgHMqxmoHWo3SH2LbojN9hh6Y3EbpvmkH5pCqHTKTZqTPNzk6svD8G",
  "key19": "3YUpuBunY5mAc1NH2sid4CPeGnxZEaLtvNtqdvr9L1FStRBMqENsABxwwZ8JFqb9SNHCAHKjTAgdZgNyzBYoCnqg",
  "key20": "kTjrJi5yjQNd7eiAoGwhwrs7LkWzdTno7hkq8ACDBZ3qooDqEr9JBfX5CBPXTTDbesnuQv2P8FiCXpTHXuRj4vf",
  "key21": "27ucM2Y332AXiYKV26eFs9uJBmZBXn9nGfU8xjHK8ynayokXBuqYXuNE4r7uWLHQi854U8LpPLuWJrYsdrh6SbqH",
  "key22": "2qRKj5D6P94ux3S2nJV7AWeZePHopBq6zLUiHNbZfXtBLFBgJYjDjcFiFWdQrCfBitbGULGC7CPD5eikXSPSBEDw",
  "key23": "3SYmymsXahhp26wmGPhAQPqPUjFvgNPzm8N8Q9YRGWbYvuq7EJEZcf15gcV9FthgyQDnRAGGrmkmc5f4gQQVKWEx",
  "key24": "4oWbYgv4MQu2J4DAgNkv9y3g5LLADzXLiDqYSSsZtit1K7GTDqmj9HmnV8GqqtxL8g1wKUnEXFf5cCb3yYhUhxre",
  "key25": "5HAC8kTAnf238LHy7nheDJi27JGUjx3s4VnTb27YFRsGCCPasyGBqVcTwdYS63Yt2VeoNT6n1iKK5bNAutmLkYgD",
  "key26": "4CLiZrrzbKResVJu6YY9QhDs62GpXqDi99w8JrHV18QB759Pwm2PZV4sqqkB9PKmjaj3rVySNZf9DKeY2WTUvSkk",
  "key27": "78wWozYUqMav91NBL8eQCZrGbDQjme4RJJHJmLxbh91T8fcnLmTUYSzhzHMg8QSXhaU7Vbpa7oPqq57x39Gnrp5",
  "key28": "4qexwn7RwqdSNmAEyXT5Y7t8LxqZCfynDa5L9ankknQGPMAE1PVN4s6nh8KK4o1Huy6L7WiYGiJgrHT426naacR4",
  "key29": "52t5fkmja6sgDSr5XuQGVg3jr855x1fRnoaJ4tjRxP6F8VZFLGKsuYHGhLbXG3G8ddp7ef2L49R5KAkc8WTzwBtK",
  "key30": "58UuNtbMWYMQuFbB6e57WoLMVBKb2Hc2tBU466XHUWSuWkFarfB1VxWVNDSumMnr4Yv9jarr1cHRUQfKMaNTMWfQ",
  "key31": "66ZcYqwKqFtZqrtjwVS67qmSGb6TiPBd2vNjwd2ut4gVKgQJmG8rx9bbh552bwuTjXgXTL3VPv1MbpJ5r2rYzE67",
  "key32": "KQRJ3tRFf5D5ZGbCsznygwRXT3M87P6QQ5km85biN7atMX2MY4cXKh6aMZjxEoGy1zyJXv32HJaETvEftnF8djH",
  "key33": "5VosvUpnvPtEuGeMoEngeVkWyWiFC97JogPLsgB2cKamfPmCYYUxbdUV71qZHeogc2BXmjwKqfMDVeDMCsCVkaNp",
  "key34": "zD9xdGz1JZpaTpP8SfWBMmNUNb4RXHf6sHrvwT3tuQn2zz9nnm3fNLfZruW5G9WvujCx2f1ZXGFZiZdxX6Jjx65",
  "key35": "ejL1s6j6tmQwTsB8ffsBNxDS3YPasVmTtRQjutBD8euYF5QvqTNS8UTu5gGmJGY5QjNGGqSoPeXHz1y9mzECs5a",
  "key36": "2bWWR484i6FaT2SYjQTmKs4zvz5fwjaWn1wSBJFxg1Za8izh6ZWRQ4TAzAetwEpTr6pxUT7gEKM2rhVYNU2uc5Fa",
  "key37": "5FrF2qLt6KbUSR3Pvkd7ndsYzkqGYiEjp3z9iS1ZidjGZosJwpmtfe1g3E4bRygmY8xE9CMwWcVmGASvDqaHKDDm",
  "key38": "5gYFzX56FCCfnFh3Lg2n4McAh349AzpRtFQjHDCea9RWecEPJXtgLU4vpBZQS5CPVswBMikV9aoUquuEH8BDVS7B",
  "key39": "5ZkLPYHDHeeoFVqkewThTQAFeGTnmZSQUPCt3EkJ3sigoppzgnyKC79U9D4cAGxYKN5nZnTgKV51hQEmwQiM8asT",
  "key40": "B2faMsEvo6tDeYPP4tPh88mCFe5otdNazuxE4fscRXNh9XnnMSa8xfD7wg4c9KmsCSNXKrkeU64n7JiocL6B1jN",
  "key41": "4tFCjksUbjAfcfqCt1hyRvoKS7Pm4Jk6N6XQ2ZAe4Fv34kdQAD5DaPt8L3bWcLWGP93bG6RAHcccvvxk2C71Uimh",
  "key42": "5QrTFpoKfd4NDusHScpKiNCEV487warjRQUhQCBxMByKh33fxHNTgMgCBvBy8T2KUgfyqWRjVM9kP6s6rjCRmmgh",
  "key43": "c4ZZjdmNmhgiLQBm5QraCDSQGzwoFzQ5fZCgpZBX8becQsqWzs9qKf1vUAjX1v4EkqZN9aFfRPN4a6NCtXT9GEi",
  "key44": "Ji3vtmWaeba9CnZAbYnajaFZM5fQ8Pdw2k6Byf52EX8cBjuDLtiH8g3JdVxPmxZ7F1P9SN8VFPDz6YQPG1JRPxu",
  "key45": "2YypeYGGBSD5LLqHF3egRq3dhbprAALznhF1TUw6Pekh9CEdTMELc7raiyzFmq6WiDUE73hMQPFEfRSDRMSjeB3T",
  "key46": "5yWg1i5MsRrG9uvmEcYjafpPh2Mf33sM7qFa9iyKCZ77PGkRxNM5K4xy53QbnstjfQFLSHRCr5WrechujqJ477wj"
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
