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
    "1kZyAKJdENKEe4YaK4uvhzfEwqNBCkxTEMAkDkBFHjMFBt46M1wuLFfzR9eQaBMtSVYHgb47BJFvrAoBShk8NCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fvb2HC4k3bzskzzKNEsyheA59V1eNXGQj9TA6Lgx3J9igFbYhQ9d5mF1QqWiWzRD1ozGbBmPF6JHhJPcnGYgMZ4",
  "key1": "3Hk6oop6nqFEbYy1Gxb7DrFsoPHjumZeMusLBziDHNBWouoeRNwcFcu41LqN8VHNwft6PHBztem8HqofrNW21jnV",
  "key2": "2t1hWe8TWSrTdrSiDWRRs47XAp6QFSR4ys7Y3MGudJ6f7EJUV34RhT8UMeoASvH7irK3p7piyQPQZduckcH2H1y8",
  "key3": "TZemcVHKcQoSxP3yS2gickYwjhDn5Umv8bn8A1mA8rZNESjDKQjR7uGXducwNSkweXmigsnpinkdXMfjXWMqeuf",
  "key4": "sVET3EqL2FPDjmTfE6jTXsdkqCj3sQdFeHhBxRTctsxybJknCtbaizpwLWBUwaKvA6cftbvdsMAa3oeHfhQygWq",
  "key5": "29HRxZWCk5Vb92TXoPoKZhQURrevW94mpZ6AK2sZcEs8oe2Cmi9MBAUCNT2ZiCA5B1hpoARDmiP6FD2pgipJk8iX",
  "key6": "qPQevU9GpFoAFq2JNh9zkq4wdbn6fpsjghDhKCc1cWhYu2MoP51fpgLCJuiYEPVxRievMyMb3ibDPwqoYcwUop7",
  "key7": "j3XuLFG7ceahhqZBiyd33sNi1CwnkvsyaYFiyroUceT5TBjuamgzJV6qYU4cgq3eKRkrawEKRtjYM1oKv3Em7a3",
  "key8": "5NZuc4oUxKB35skZVccRdJ3iNndfTfvEZvvXT65sbLWfU94ABUrZmfGyvVJ5Zzp9VVq8RZFtWtcfafxuSym3oaTt",
  "key9": "376JBUjEC7D9Qb7KLg5FLpA1tbmD8y9QuQgcCR3jGEFbo91TVyaJud6TgcZSNSkDKbHfnKNWRZ5GcMYyk8XqipRJ",
  "key10": "2jJKRU5MoTVBBKmmjLafAg5p5XNP9GG7v9ERmbJzDnnBjwaVCffT2sYcYNehoKSmuFgDR5RB3svEUi6xkNgkBN2u",
  "key11": "2odXmuyG3RD1HVmvoSQRpgRq6T2KLPVHXNR8Rq4fKRX8EnqZqNkpUeBjH3Ex5Mi1fdxjjbSfPBaNwA1tGwbwj4AC",
  "key12": "2jnwbR3UkYxRCerJdJVYXJRHUEdZVetm1iJDrogeCpjqZRWrw8YriknWGsCPzfdXj4pyMEJPjTjgJDbj6yETbTcS",
  "key13": "4rf5pBYDfVtWM9m7UcDLNSgfQM8o14z2DB7L8pyAZwgW3niCbWpcYDLKqPNWR8tcNfgmWaBE6vp7agzWXSBtXaMU",
  "key14": "59hrfbPqVrxcQKJczKr6hRVzYVzptG8vBwxF3cNZyaB9mRFu8nqGuZw9FZzYLExHaSqGhXn2cJzesnfhgKkd2JHo",
  "key15": "4u9w3ZWCfGau7vsjNr8txGHxia4YoaEJhGuSEnpreoBMqWGj1V4oGvHuxuX8D93xgN8N8HbFrpYe4eg1LWgnm6uj",
  "key16": "5pmdSMi8pZENeVRWmJq7J96bTGSydRvCfKQgzdeztXzKDQ9RNfu4vMPAQFiJu6CBzQ3qYajgU3aHYDc2hDfcCCdK",
  "key17": "2eP6g4vYQKKfWQgEYFgbtcR7bargf8PujEgJKLhbL4uXexKJN63kmm8cCA4Y8RX7SM89QtkRfyAgAcv2irrrqr5M",
  "key18": "6uJNXdRW7NgJgfCeKWStLEcQdnwBp3MWMCpZ5yEP39iTwYndUAjLCRZXNtuwJeKjYYFN6tyLi3T66HeNe9w5YNb",
  "key19": "3ERPeBQ53HF1oyZoFWuZQAMd2vmcPtfwgG9koZRrrSfnEKQJcvrgnoPRV94xRqgfiamLeAvGbTLZqR1S3iVwjr5b",
  "key20": "46UnYcg5urQqZabt2YDqwQGpcu6BiSoCRf1TVcXkzrvaDAnGKvst2HXYQ6osrGPsTcB9B7mPcwrF1iDn4aWS79Nv",
  "key21": "2321xQ8EduGNQTdXwooQXBFM4Bfm3mGHYKg8CUaRGtRXhwK1m9Aw8yUWBbzza3a5xjvpss2KbUMGRubTyqbAi1rb",
  "key22": "4Ap9kM6F1akusPUKQYZ3C5fBrJC5zRiSu8tbyfSpawnxFfeKd4FeWy6yCR5475dPCppP4PxkhjcYngGp3D1uFvfJ",
  "key23": "3vprYc43dHPcjpN6jYU4EeA9p1Rf579QyXhZfhc7vXVRvcH3szmPZRTSSsXEiX31fBSrZdBrhk96gJWEN3o8uY2W",
  "key24": "3ZuF88c4WyQQWL6au9MJUto6E5NrKimVcqn46XYt2fCh6JmR1oufEDUN37JQMeQG1UWWoCDUTDmk6bdsUyGRouU9",
  "key25": "5ukigT8KStXmncVimLAyW75uBGYwRKEDxdD6kdxqGLUnsnM7JsoxrY8n8CcWbig2j2k1EbMBbegvwYa2A7EGN1pt",
  "key26": "um5fxEZDwutPPdb99CCMQjh6WN2uvJd9b2o2cgMcT5PZgdU8NXwyezfoaCfKwLdaRz6jv7qXn67yChB9xPhRDqB",
  "key27": "55bJnC3mdGtaSVaVG1VuDmwXHJ6wgMDewceEoWM5Se51ygZSJqxRzDD7DokXqQkVvUUhmvBzpvjhu4ibBavBmq8Q",
  "key28": "3VkrBQuSCg4po3Ptmn4nPrepKyiUbxtv6hGDY4f6xGmqzPuSPGY92jNvhiHmM7qftNKNbwutbM1CW61r7oo5KUBg",
  "key29": "4cX2xaEAtz5S7tHgS4LGaG7ffet2oUoadrJEjSbj9WKRe7TD3MHMftXU2ru4KrJgXeUcTSTVQjxsTf4ChYvY5F7w",
  "key30": "5sqtMQJYWPxdfBuFmXvRk86g7FTcWnZbh6eiCte6dDUsFSoL1KhtotqxLeD3rXTj5fDtugWHQ9ckUNzzUDapwYzA",
  "key31": "5TV8aLmXCPN5ZHYBFG5FM8Kut9iUXKgmfwyBkvsGC7eVwERLrKCTzsiwvM51SJNaqAxbBCjEicXbQivmPMgz4VEP",
  "key32": "5XtsGUpBS9Y4zyrc9kNm2wpyBkad6XEizDu1W96wsy7i3eBKttQ7jPHTcjT7hugzbDrECvytMJdvcKwYTX2DrguT",
  "key33": "4DzvnsB2gghSaZwMTWQEcVWyEHFrb3tGt4djHcZBLAf4wnoEKe9kzvo8gnKdhPW35mNKwPgqdsDZC3Ld2bCYia1s",
  "key34": "F164PWCarmo1MBuWmAaMpui5UPeY2UFhEdR9eigYZwX4gvg29HLz9wqpbfBqzKv6fG7hAVFpcWMroK2Q4Zwba8s"
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
