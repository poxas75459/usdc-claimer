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
    "8u8B8MQEfYtVqGGmUKyh2fq1LvCj8u2MKr98eGhFG6sRfqgx1VCHLYTEhJGwhaqUQAbGnnMPpZ5QWZHo4ifbj3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mXtT6TXZh6BT2FxnZ6YX6pkw327x1q6UV1bLNhohk1b5mf3fiUak9j2EhUB2imevpNUrsNGLvmJRKRt4knKnTVL",
  "key1": "2Cp8HsjWXhP2ViMUFoxkPAkbSPqwrbhvLthKdMV7hvmVpiaYosrVs7mf5uasAKxL8WsDPKUZzrK1gZq38W3hWA4T",
  "key2": "jcQnhGtP1knKgzxv3pPnuCEpxrU3cJEpwEaxPV1j2uGviTq36euDUXzqT88QxCPwbBhegdYPcEMvuHcQ9Y4Kr8w",
  "key3": "LUfFdGNjUCm4HtGA91kA8rCj8Enz4uacvz1inoiosD5cyVn9tukyjZmw9zQjUSthaosQMSiA3JC7YHrjbemV4Wu",
  "key4": "2GSeMDfmLTbEezMac34EoSMN1TK3CLwvbHgr6qJxVAwAvNVGSWzauP2eazxL8EsyYnE5nWAX7ddMwHEZa3P6foYt",
  "key5": "2spC621oo4qnpU6QyFp842p5g5F7i4vkT1nMRgCkicPv3aSR7qHjVam9fbNsxNSWR77bc9DqK1gFtvWCYNVNVa1F",
  "key6": "4VZ9cLtSkFpArXyBGvV5663AsKZUkS1QbjPJEL7No5kheVDKUj6iVpsmmtVjbpRR5UfKKjReP4tiXj7EkpUMMDn7",
  "key7": "46Yq4aUzc2kpdYW7DWkunQoE8ZWP6tenMqiwSTxVWPAVdoqxTQmcNCJV2ShMQFTE73WK934Uv1xmdYo81DxaYfRw",
  "key8": "2Qx3w4ZZATM4czs8jCx7Cd6ZR5tNcK6bttKCcjCJMd3JFcTXgTACNMFB4684dWYDXUnFTGxfnoc9XMrAKDc3AjUg",
  "key9": "2nQRrPBzhjLQ3C2GTJKNjucqwJXDvxHcTRpd9zfNMBji7ceTGGMH6UmEFyFKDgVq1SXb5jYYb6VEtc9Ukbb7wUMU",
  "key10": "35kNATVX3PLqprrAyE6ocoBk5DRNQNyPETq7pDbiXq8z9A72c1suwnkLo122Kgaj6HqLWX1EZn1nvYaDboyo7Ng7",
  "key11": "6548TagQQnYVtPPx1jWmM5A1Z3QjAXCgHLShc7TkHo5hWeQ5DHMiV7DzDGXozNo3pHbFynNjTvxWWMjyMAfiGtMt",
  "key12": "yixboGM3pJXyTGCNGYaigujwtFQmUD7N6tNdW1q3ySg9yTX5D9ishnGbi6q57q7u987k8MS48PQke3QUKZdyJBo",
  "key13": "4tFtHAqGXiFd8ArpfTw2x6Jub1ihip4ZTUpopAHmbEVmmUxitTkiEQDNfoAeQmCq4LZSn8SQKB9MvvcuXQP8n8Yu",
  "key14": "5VeV8j7fZoARF7oZqjbujV6hs4w2kv289j8Aq7BBUoUWGo1rAy4KG5y74n944UxxBhAjBZSHCcTSYZQSPBBevGfE",
  "key15": "5Jazs2PZQkRmRdkPeTFY34VSiNnDQpzn22w76QkQ9GXCH87CLUZkgMig7AtkpBWbr2P7y43KyvJ5tcPCT7ASPY2a",
  "key16": "2yGViZw18wEek9ygp236krMMfDgMMdAfdoJnLs2YVcijvWsrka8x8krZJ1LEi8AgiFeY5JnoxcdUzMnru8HcoPUU",
  "key17": "2HEpbPVq1eE9LbFVpvR7PifLnz4VGTztHqnwYQjSNyKqEY1HgexWspkAGyAELZt1XHtJyzk4dusGSwqMgqy2EAud",
  "key18": "4CKzKjYYjsCZjvyQ9D1CRjFaqc4sQt9aY7KUzXzCZRVrEZbQQxyrvfjv5pqpY9TdqRZceJwWaFEYyMHEBf8EbqLi",
  "key19": "5bt7BZK1SGzeWQBUmi9cPav8iiUr1HEvUwxntPNdPsNNAdvXYMAiBvJqz5odxyxBXPMLaW6UxZzDvgP63dCQmFMp",
  "key20": "3ynJQiQLHzkKUDbMj1mEnotbpFvxUNySGFKyneuo3Z57fJfdwSyL54T1Lhe4c2MVPgFezB9AFbNeBzyavafGNoSG",
  "key21": "4GAapSzBKSAjdmDFXCm8dubjW2N83Nw3RSVxSEa3LaQhNVx3A7xx2ecUmqJrENL5hCpb6QhYp7BTCFRaLeKYdDSc",
  "key22": "kkVtxjnJ6R1YtgQ9Envw7kJ9SijoXQssAbpkmqmHLAAAKgsm5JpRVKiatXt1zaecGqem684WDYnx3GhzXZygKj8",
  "key23": "2Kmq3Z8yrax4VG99wT6vYHNE8K8DtpwwHAyatmi8dwnBe2L8cH4BxfU5RS6M64mBERw5jckG4mwnjzaP72X9WRXU",
  "key24": "3fY2eA15Xi74j2xpchzdewGTZcE4oUTBJ1uDe77nK8TVjhRS1L41nVvh2c7JGUuJ8eU4s8MEsV48sm7kYFZczTsG",
  "key25": "4jkEffB5V7MCoK82YD6iAxUyfqdhJRfVhqmobkhheaLB7nHZQW9QYoBVAiecdsEbhwPoF7NMQH9kJx1W5w7uC2jv",
  "key26": "4FkGnDnyKRCx4px3AhUgcSLrRxH8o1BTuwQUNfTNNBk2tMATSFoGLAgCDPDwErhdB7mNmRY8ivbX3M4kiwU7eDUM",
  "key27": "cMxJiMZHkEMCn7KdzMsvxCiipeCKiNK7CYGqRLxrKCTc5CvELQoBKCxV9KFFqyABc2uZbkZP18gQnG4gxPY1dh3",
  "key28": "h1CroebBLibC8juUWHj4b64GqWmoWF3B1gZtMHVTuXgK4F4oLSy7g7yBXQvGsiJNZ39XecPCitoXL3oEt78c3yQ",
  "key29": "5Yz6CTNgJr9pncpaMKgHJ3pHtVaX85DFDRfhaEVZcyMn6Xaf9nXiqgkKQskh7g4oS8UBZcT2b8vDm9WG4i5MnViz",
  "key30": "46PZfKausYHxQiJ5zu3A5vxXN8LNoKXoX9XqjShKqps4MXoH23o6Z9MDGdtv3jx8bLkttJKK37Ha3xDgH96c1H3",
  "key31": "28cyMujRXh3Wdxvqij75jFCnAjDUeuiXaaFMtdjDeTMdWgFgi6o2RxzqdtspH4dwPp6vbLqjBg1pQM8MarcMtU2k",
  "key32": "536suevV2bFdRRJxDh8okK75U8SiYLwAxLGp99T3uxcocon5rMVDX6BBNxNHZiiSwo2knP3gwRJd2yF5fbsqYcpa"
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
