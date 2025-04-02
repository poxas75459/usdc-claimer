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
    "gY5wNopNZLXdWT9Wh4U8CRJ51wdt7uMcRaF27KcUbWD9hFU9jn937XVXrpgKKmVzvJZU7wtkBp8GArYNNq9E2TD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zi2KXU16ynMEY3wmb991qSwL1KG4yJttYqFiWHMWqafFVdY8svxAjdusJZVapfre8udcPW4645gLUBeJduFptJN",
  "key1": "eRcV97SKQy1hEsqerYSQ5SuFpuJ7ncbPoBNtZ4UQkcNH92cfXUSxZ94ZTmmZGa8x9YHx5VHwqeKRg5Q2tKNR6tY",
  "key2": "21a4nseBckEvHUhUKw2pU4SrSUBJRSdFnnMZgF1iSRQqKv6gkKGwpRVxpZJsB6WELyqwAjZw4rsjX2gZJ8Nqso12",
  "key3": "26g16MsZYRAiA3KgbQYoUJ8jQ9xauATCQk9E5517iVeFiTd7Jyv9Wynzzby6rG94ZXapRqSVnfj6XW5n7EMQbsaT",
  "key4": "3BizZWVgCFekwWjYgfewrBKxzeUL95hmPCR6iTXT3WYA1KxupiFDuq17hKHxoqr5ogNz1qYtH731ikFJskBzPTsF",
  "key5": "3ASuLda9WkbC2WnS6WMireBQEyuMVoDuCu25abHt3i6H1tHGnReXhLHjvN6Vb9oCJ4VCfe1zaRZ68o9NZ6s7TN9S",
  "key6": "4zbKtsVaCkJSGGtsZrodCgBatnNiee4Ws8M9zciEi75dzkKYQwvNKYr3xr8BeyGTyN8ne7eNU1DpMtCDDhqFYYdS",
  "key7": "b5JocMMwsKHuW2Zu5ZXmN58Srg6swpS1izu3yvJHxKC6TSjwwLJLY5F1bAxg83GeZKC8JVMEaGirMHLu9FxLfY1",
  "key8": "zYUNKBWjB2o61o1upLQAKXYqZG4wjGQ3bPteHDWPyU6jTGZ9QHBb5wX6kTsBGAa9TfTC487XnSZRyavx6w9CZPj",
  "key9": "2j3YhX9UVyDtPSrFsyh6LWGX2VuqNSLjaPtmzfT89WXRXUxUFfA1erjVo5yVyQ225xc7kQP3E8H2JNEqmLwaxvAu",
  "key10": "KYJJ6kCbpgm5jSaQSmC3ZRTQMgjtABocWxNF58pGFuk5hXWURV4WTjLb5SSyzspgRtaDVdoMvkn7KJULvsqhxxQ",
  "key11": "4Jht2nvqCeJWFSfqKsWXNwZp2o6tKepYBJQQBJRJTaYCm2bDqk8J6yDPXxsyiAobY11p1oB9E7JFFApeS6WnVGjh",
  "key12": "4xfT1EXrgBjjDNx3CyAvoAh7B7EU1XvpdbP4c9f6Rbx1b9sgrQ7zyh5qD1j33hFdFPGjmVABqAPsvjr6eojuD1oz",
  "key13": "5QitVVuxhMe4sCnqdTXzJii7q8CAArhhVWvheJPtDtGLXrU3CU5ats6Gka3YZic9kDDNpS8pHyqwPsRpvh1NEwHF",
  "key14": "33YfscFHYh6GCHkNZEBvZQqpgDNXWDQndTBwPjz9qg91qYQavwFuygyP3g1NCEgMYthcB87V8adZcXvub1YAdJUu",
  "key15": "w8iNHqzC4Tvd6N7fQwrhKP6AmDuFPbKpi5fJyzLVCDxApoXyNqLNprYZMQsGH5fYy9CzD7YUr8kmi7XJ2iLckCs",
  "key16": "2MV7dgWGzVoJVRz1jE18JQ96AYbYYed2fG3LJBvA6GGLcyJv7rtwu1JXVNzwfvbdUvZTY8sKbmmUSpqeSSuMwTgi",
  "key17": "2jFqvd7U5nfz3Pxekkg73TzUn5kAAHwjgJ51rxPPZ25rBsVccF2u8P66BME6s433jAerr5ryS3qeBbTiuBjcgVUQ",
  "key18": "Dyqu2CGmAur1H8rqBqjW57E9DDHebCwYHbGqbxKais7PgUxc7N4fnksfRi3MFfwKpi5fi5MT2aZoyqQFhwYxzib",
  "key19": "NgqSb2VVRsn8m5btterVtxJSwzJVLNFUtspY8NMiypyGRAZU9JaVrXuL3YqXGFffg5hcfV7c5vmLQwxq5SWmuo2",
  "key20": "5RTLjXPqcSeYbHC89pvrRvZ6u4fsS9BvAsUJmu64axNidqxSqz9z7Fj6eCWT7n3p8Kws4yP6qcq5dzjfnkv69cyy",
  "key21": "3TonCms9V13qAyi8NjjDyStmxSpxguhJC4S9Pg1MdiqpMDuefQ6Q44E9p8u4WH49cK2AmH1EGsgRwrCswBemuyw9",
  "key22": "5V7QxGn2Qb9sZgW83niipeCUjUwon7GVWnRYUEzmmK4Tx92HpWf6i2qFQubgGjYmG4LJc4stiRGajHMZQg7hzavk",
  "key23": "8iAqTTCXfMhhzraMeaJfwtHfzEdAkCfbiqFDG4RGjEhrM4p6iSLJpaxLw9NwJU2DC21mFRXyYvCRpTDn5qBWsCh",
  "key24": "4whZqYs5PzDiVRMWqTLAnjU9qptjKRt1ZEfegze4BkHPxpGLsso3qKiryiEkZhTagBrZwGBC62oBt3mSYgBPU3wC",
  "key25": "3bMRTdxaveLddBdnd8QWxynfuaTt3u3XQ7WWTPz4K8vbcJaXWbdVx3tgWHxRyPXn1x8HMCo2VRXAyg7ib6Huc6M6",
  "key26": "5vCjbnpZgpP1RwAsxmL4AqZqgGcHvyiz8NGFjG7WBTpyDyk8o8xum6mqbgD9vsoA6cupcgc2WMCsFQ6HLXmGfRpw",
  "key27": "4VZAnnNfTaHrKr4KwtNPKTZtpJoG6BgnRGoyzfEZ2rPCM6fgd9XuSoa7GQEkfBaw2w7STpfGZpEmNuSbZhXGmerQ",
  "key28": "h5wFw2aBZNQVVYd9coGeMuahCkf4FA1Bwwnf1L3pJud3MCpJnU4V4Pgf4QzynHbM3jet9fayurgJKaeGVYtg1xh",
  "key29": "3KR832VtZQX9h9KmawZXPLteCMXxQA7mBRGNjbpRv5kdyerR8JYmhBTqZN9dHspUzNeeSsQruR5HkcV8vYrZQ51z",
  "key30": "4JtHCLVaTmkB3gLHJXM3BG193pmNA3xkbK97AGRbcTDbDtzn74i5VQfa5wvLctY9N9gQLjoejuJaMgW43ydYnbLj",
  "key31": "54gvVQTh6rL1v6GofbKjAgfr5kGrrjsvb1LcZ3jWaSnDsF4hFNZN2A9LRV2puC5C62oy2mCRQe8H9dwpLYBp2jCA",
  "key32": "3tHG2UexAFfVWDjP2xCSk9DLMyFoaisSj4pHcTEcgjMNYyvuEt7HH352nBHajDv2PoHdtsZ5hUTXDxxKv6TkhEE6",
  "key33": "2TwVGF6E8yAPWEiWfwyAT5A1mUVrgnULqPuQk4hqDCnEDmC4YD4JK8E2mnaaLox2x4Tuw5BQGjhXNLQD5FU4zEMq",
  "key34": "3C9xJEhxj5vBVhRZpFfQc5bmKdv5ijdjYVRRg6H7CLq3aafvDmEZA3jPeDPQyQgjqzKSLT1kqdRq8XDGEU2FkM6u"
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
