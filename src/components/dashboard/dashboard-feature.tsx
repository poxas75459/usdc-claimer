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
    "5on31eeswj7kejaPMBNyqfUqALdctBP3xNCYi4SuX5vdhXg54oSNH59sFPmkdJDunn8C8trGwmtYX7Y3auH7nf2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UT16LW1tPLi8TmXR9sr15xJNn59GgwM29U5urhuUPmZpQFSdbu427m4rUqcqSnWqFr56wWWout1WrBTq8WDDY3L",
  "key1": "LviW4Qo75SJEp2KXH7j9MyUTCiQAF7mDdzcnc8NJXMQsKadk3JxQ16ZyaTHiKbkDzZynSHTmFoGWWfPTrK3mdZd",
  "key2": "YRrBc3rF3mFGmTSULoSu3TZjs17EZVhyziKuoUaju6VSyVH6xTvq61RcZzDGrqRM5DG9Ke1BJzSbs2GTZ9ynje5",
  "key3": "5k8NDg4vAMEcSR2VS8swKSLYGwxnN5UNumZXSXzSegR85Nju57D4KRGgJB3QqPfn1mitWWeLRjqwPb6nHrCJEymZ",
  "key4": "2HdCzhWUf9ZiYFNWTML58BbGQUuBq3gXbHp96KEFpiXTVZ3TVubfFt8cTUsvgjY44Ts1kbzq1MEfCneRZbym1zLB",
  "key5": "2Nhvxk3vwWLBWc3F4sDaEisQg1rRgaB4dzRuPDwFk4SydPzmukpenCbdmEg72eX9vKSCk9wmMvmSjugAJJBnDXak",
  "key6": "aWV1n3RwS9GPn4HKQjRTDoauvSa3pWF3M6qdH6CW9VExwXsqT8rKZ4gXLue9Vm8uTYueFMUHGVaDhYwM6eT1fRC",
  "key7": "5F3CP1BcUbfZUNoVU7T7adL4CmEfJ1hXGmjLPqcAuB91gzj5Mg1t8AaCSx9FZytmS7dL32Vx3RhR2YzUDYpJgFgt",
  "key8": "2kwmAQqFme5b5tvHJTxQQyXEdaMzb9sX6L52rghDiLgUUiwnBZ1XDqmU7Y9hfhd7jYZvZaXngCKCsdB5PXsvcSzq",
  "key9": "5htmBK5hAfZ3Xy8PgzvDdiPSzV8ux6TeRQC3hozAcbnFreTf9BN1T9CdaWZzmKtm9FZZ3QN1Nn8GCyfpdrxWteiu",
  "key10": "2GXyE1TVjcsYY63PMxiCQ8NQLkTpz4dR3hAsu2PRC2a1TBHMo6ApfowNLa8BBdW3H4wWWS5WJSX9cce8QwfxTepc",
  "key11": "2rEvyXk8FkfXSjc2bg5jKGZERa1aCK739FSwguCSqqyWiVPuZ8g5q6MvdtaC8chBg1QmHh14eoo4ASqUT7ZBJJhz",
  "key12": "5tzUTKPgC5T9hKg115UBiTBrMJcjX8eGpfYHScCgKVgF6SmqC8mbtJGuGEMhNqBQmVoyhedj7L3Svn52FTmURdK3",
  "key13": "4GKS2mLk8q5ej11K5NQ6ib6YA1ouuk4Ak2yvRnYmZY7g4Gzoa6hqZ8euHfKJay7xa3CtFzVzwsYpZQsMoQ5AuCn3",
  "key14": "624P8NPs3CerRa5gi5UmWTnwA7mrAVbfUWM42PGvtVTbYAamceJeLoFQiLwLRTQYTnXmgAzgnb34VThwSuD5ZchC",
  "key15": "4aeWwhoA1QqVWPyGVQYcJXxraucrVNYfv7kwq2AA86fVyGDGxkzUDvZW618hMBy6h3dUnt1rDNBEu3EedtKGr9bz",
  "key16": "2t22tAsrbi28dA5AvXUHdA1whYmXScdNBgzBWRfQYR2pLMBs6yRFpGh3xUueGE3ir3PcrBUuYeD92Bedt5fQfYnc",
  "key17": "24mPsjD8dfn4ypjQw8jn1rPKzBpEoTPe3uyvzntcYtXZ2xCHp87ARN4YMvGMaH3p9koVUAZuYw6odZDfGsLifqnp",
  "key18": "5N6Jn9W73ceLcKwFJHEc47FrxfraZpdR8Foaa9H23z16EJJZ66Dm2Bgau4wMWn9tEwTAaNcEKZFNQjWi3o4D1iaF",
  "key19": "2TcHyJcQHF5iGVhwQQxoMpMtgJzCJ2AGV67UAUEgiit6U1nRuTfR8Vzf465soxTkkGUQPQMA9yXoXS5xzbBi4AJs",
  "key20": "BXZF7xgRW74KHEbnqXWwpa6tGM9RwU6gu7DVStBD89tRtraDx5zWFC7QhxEBjcEmnxHUTH3Nqxd3QAmPERrsrja",
  "key21": "5f1LQasAhNYTLx4NogJ7qHZni53AmztJ3u9RnqmMoYq98GCcnb5sDwKSMrhsUgcMkiAwgjXsB9Mv3z2T5vd6F5xb",
  "key22": "csgD8P75npbnEnrjGqzU59oaLDsZoigyk1MjzRS8uNUhfj57GRTAm6GpkSc6ceL7EU757woqgoKLHjSXAjKqaas",
  "key23": "dGgxJZMtr8n4yEPNhwedb9px7AFHnYTRD8nFYnZHmyPS7RAv4e74B1LCdJ2sSQviTxyTEy5MrMWQMjbc4XnXgkH",
  "key24": "5cb6HS88QfBn4F7vmGVfUgHDBcocL3HV8iV3gaJJAuWNB9XehXtqi3FFKnUTZg6JLPJxxxzvTuQUBeBhgP3aCyUV",
  "key25": "3R9c1q7T87WKSnrR6a4TZNshVtMvrN4uTTuQ6L7swWM8CzWGK9jdpy6DDW5DYysF7CUC18ujQe9JqxdmNN4xng6z",
  "key26": "3ErGojgVvxjZgzCkC1jJQjL4k5w87QMLVa6SaZJ8ZLwhGxi86izYCBM5hSzQViJeb1nBJ1vr766ehEQmmun3NyL1",
  "key27": "28SGUMAuo2Yav7wddTrwveUUrZiPgivM44PYMsE2rsg5bETmSGWr5HMEDts2MfEeXDHVY9cg2feL7UvdsZWK9PDw",
  "key28": "4oXDzTocvTWi6pHh1HvmDc2Pj1Xmp3K3LqYnizpnDbCaKfhLseFurd6z58jX3fG4o9326VdBgKH9BSLmGSxMKLh1",
  "key29": "4JJvr8Vz2QzvS5jX688hKskpZsiNHXjZs2UUyFNesSTwhyoWhGQL4yA8sxLXNzLeH8px2WJAzU5Jy5Mm4cKUrGb8",
  "key30": "36fFxHWKvsdcwLQyxkMgs5aMSqomgsy73LpDBoJHDkeoaNSzEPkKHMHws6BwRx4oQXWS6ppruQUTZg1rCAu5FAbz"
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
