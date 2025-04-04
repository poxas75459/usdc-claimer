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
    "4onC8HnRJfBhikwuv8ZFVjTwL2w93KZHUNKvviMdCoSjrkBmUxqkwut7s6FJV8tC5bfvfVBmNk2oRf2ecGSgVzw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZyT7mMJRMyBkUbAGP38kg2ZaM4rCCnhXMVYYC7Sx5pG65SPF7GhWsmNtP5zPStyRk6xMAMLnQ6TVRhubPUQWzco",
  "key1": "WyLfBh3GZezbGUNDcqMhsyJSgubMpDzDURd98SbbS4CFkKfSjH9qaSsuarDadTsKNyLWK7KPJBgD5RV5vJ7jFKH",
  "key2": "34LzHURC7QdpL8tv6he2t5ZParmszpk4LGfgmVq8HdkfanTQo7nt3QPy63aNc6vUtWTDgqX8GfCQMjzZtwLkdkw2",
  "key3": "3VvgR34ecd1iwwd5E8P6HVsXKEENfaEoX1F1XJzgBqhaoVfrVjaC6TdUkmWVkuZxBgCbnGeHxkjw2Djxi75ocAzs",
  "key4": "5RxTjLPtfuFCUu8xQTU5cYxQoczjtMh31STiMLdwSRoXCU4ihTXsivtFuhr4DuCcQxP43dkZ8MnYtkPsiM98vQaf",
  "key5": "4YLNNgsPHUKqeey16kxSafH125JhuaUreN4C3VYSZoPphRGnXEMKpLH2Vw7hpgg6puY9n8ftbu9sM8AEi6zvK8Hw",
  "key6": "39xNWti7Yg48ooWv24zE4chhSbNa7V7JYddpWcniSa7HqmenUeKRvLh8tBngd8J5ZUbaifN732uG17hFQApMgY8f",
  "key7": "2eLVRKARG9dEAL7CdpCLHkWGRWvurnnKoysAz5gP491WaQUSD1DzXbDiRJybt3K5dW4YFufEejxXQXdKMGdFNd1",
  "key8": "2qTgrsyfFLfYJsCiwbG8CZKZjY17hTMdMSBWZCvznemuK8itfRcvsrqDxBd5ujHhLN6sWDp85Mc9WR5vZF2j3ZUN",
  "key9": "2a3qATK4ZSS6FC8M7dRXcDBb5TXSUqasuifSTnqcAFGEBV8thM8WRF5NXq5ZntVLfEb7kkT9uxVMUzBbK2T7MMTS",
  "key10": "26UQSWtLiWGRFBNeiCRt6WqS89kCweYn33DSJgmeqkEwjVMpmwMmfjtXduooNdq9w61o5zoCq4ddLBo9K4o3xBeU",
  "key11": "5YhsM439ToDwkCWHHnqXE6puMKGboSuWx4gJZSHuuhefssXhXdrPjEEzjVt4qvQ9HedCyaZR6spVCASjzq6EvsGz",
  "key12": "eWXAtqeFqEmxqUw1fyEJgMZ2zfZ5SwownCJjMqxozYqLNHPa4rbfupCbxRPaeyXRrcMxQj3TULeqYtiXDUpZjGe",
  "key13": "h2SFYGNDgutYQV26SaDPeXt1GievSVXqPjAcmdHfxU9xobDhuVS6zKFM2WYwFvDKhWJhEtR6aNbFov6f77VJTJo",
  "key14": "L3KZgs165hF77Ha3xYJ1HKVMa9VoeSMsw1no6bw5RnD2RyUSe1i9dZAD9dcXnpzruMNwd28o6NeKAw77cE2suSR",
  "key15": "rUNe1kzxhkgCeyJADoFkNsfDiAD9k9cBFPnuPJWt75Z67CWx44hw9nWVhuvWjcJS3C1kzeeY7CJCsSc6m4rgDWe",
  "key16": "AmQp5mcETGrUJ3k672oZRbfs9cUrBeznndr838xQxgQUv4maQ2hNEDn1Rbi1Cahnws497NMPbXyGHbRs8K3nT3x",
  "key17": "berhX43farndYWoQmmpwwR3wkoN2YjkRbnuf7f7vvvNMJzcVEAmQdrTTKbj3GxdxKaVJ8AMruT5qLHMLUEaxCTT",
  "key18": "5ASUTgxi6mxRUotnWBMzkcHJg7C6hDvyY4pqEfgAWWs8hDZNv63FMCWWvkyGVUL8E2FZBsAV8JzgrBgSDbg7KH5U",
  "key19": "6wsBE8MxcgqGo1ZP8XhYfQxbkrLK1zKBCBgUwxcGudnE6fZfV9kTM3cPuy5H4o6H7PWVNqgqaxVWEs9ZQ83xhps",
  "key20": "3cKhTsUsHCwAkayMeuqRjXYAEAxHBf9hdv4vCthE7Gr1a89AoskFb6kA8Gfc3B2JiFcUSYjsDMhEMGSQPHcM2jyH",
  "key21": "5jPbAwL1RZY3aMzxYysNPvptrZZwUPPWzgWqhfyspPs7TcZbS5Lq8cRhr5tiTxF3uZoBWNoCVe6dgbcykJE3bijg",
  "key22": "3Vy5btxntsLxcW9tpyKCSzj3qqhbhNSHWDYt43zgzK94dX8QDNNNbKSJYcNFeSLDLWwv8vxdUVcJUUfrHboNiawi",
  "key23": "3M6oGkrcBqgsXW9jspEta6qn6TcUvfFs4zLV4VbKjm7H9dB3356gwGMwFZTkifWYE3AagPBwpyuHqzdDtDW9ZBap",
  "key24": "4QMMzFCmRnwyzrUTjaaCKwBBNAnqRQ43mtsUEYqCG6aXjasXZPKfkCp8FnyWya7YudtUrBi2zgPvgNi5KrxGRVwn",
  "key25": "4AJRKXHKW2sVdwH1i2xQV3noFxuxq8SCyNAdMbJG8yXww3QYQNfx4bq4ioTxPdFFcTBXLY6UXrzZshN1ULchHXoX",
  "key26": "XMMXu9icSWpR4pCb8mSVyiSmgoSB6UciFtaZy4BTDsKxt8eSL6ftH7rKFFa2ZZCrBSKGcGwXBN3U3U74fANU8ja",
  "key27": "FqWbiWahhwdSvzTZwAB5xrxFta2z28R9EbB3FbvWHdqWvX4VrwygvxtjqYL9stwz3MHQGf6uQ6qtgFz7izgLfVT",
  "key28": "4oGxVc1xPpQZ4vk5VMfVpHuEGDu2gkgLPi79PxpP8LsFCryCoWLRswLfqvRHrtQ9M9Z4KxidZWayRdggzfrcwG8h",
  "key29": "bJXxm6nZJKx54WEfWZsfMJr9CveWMVeJLMgapGrTQHsdSjSugyCdcwYo8KHNnzgAeoMWCc5RsRTvF2U43w7zPj4",
  "key30": "4qCBwGr57H2dgGLKWHe9SegUx6tUg8jKSu6EEadNyaRFkBV4sKEsNRaFCTT2GqTzbRmw5Ci8BZBPgiAyskLnW9TF",
  "key31": "7BjsLiWNjxjpwSFGksmwiNvG8gpHPMzwrXf8h2vzkku2AcRFuj2Xk8y4epHtxuuis4iLMPr1YiNWho9ctzAdH6t",
  "key32": "3qQYdtkxCSz5CM3hZaJ2ZaSfenwrwnFf23hPPsBg7JYZnJzqqUZSUMPxiJZfZC42S8FchVmUScVcATBQgPaUMuUR",
  "key33": "5owBwZ2bY9b3xdbnL7hTvDNSYLxuf9ECwny2PYMqSs13UZkbb68ArXupMuD7Cuz6A4jpkw2X1ijcQw44VLmDx1nT",
  "key34": "zi7LkJgn1jL925gTTcETWft9Q7Jhpg44SLFGdnTZ8wcvt85kjs896sU9puNPzBRieQUMaecZFrm2tiMcddY2gNj",
  "key35": "31eFt4aodk2GcAkRGPkVuxrx2QcNvu4QVsYdowxaDjMUBvmRnSg9HnASSy9BQqBD8zJPEc21K7aYx1f4BjuocCuj"
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
