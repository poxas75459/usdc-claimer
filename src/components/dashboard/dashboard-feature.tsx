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
    "atrRFqP7DsKsxGw8M9rdvb4EDhy8K6e8uwKHsdnZXMhoyTUn1Ahacc3ps2a6xkRAsoTgpPEYmDxQXSgaQwBocZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZfkCKKmgiv9BMKVDvSB84d17SLXCnnFMyuTNpECagAyALyy4LUdVMqbkj4oxNXkfHKzQKssZsixgZHcjVLe69hf",
  "key1": "59KpdPUMtVphvhRyB27e9J1R3Z5H8ZCFGGgs7m7YuisvxniqY7uXmrvxkzJ33WMnZZXPdMvcJXuQvyasuWqTBASU",
  "key2": "4RiB7gvuWgMWN1zzxyvw2utyLsaE7b8yqg2e6ANmPEKxtbkUzNtNaMTj9Y7m7L9A6uWmcjfeAgepjbUSsXFaUvMb",
  "key3": "8hfYcSbCJh7iPwTQXzt2VnjCTtAnzMS2qHVPxTpn15omxWN1dzR3dNJRFaY4vsGfS32FoJwx35pVD5ppMe7jimX",
  "key4": "2CSAShNKHAaXxtwT37T7GbuERMRKnGska5H9bDbrhC1s23dm17qmKxaBLUB7ZPLWK5ed59e9AcCfoQJ7ALLGLHyB",
  "key5": "3AdD4wtm7zM24vMdo1t5jQ5MuBR6NBxgccXskRr39bt57ZxPzUkuEjiChWMMhFCVpdiy6cSLwSi1DG2RTzQHULFN",
  "key6": "4HZ9dYcbybQdSuPKg4THzEfD3NVRLbJUdPo8Y8AoLYQxRJiwx4uu1HJhAaNQVqcbEcRNrkSuaUFqmRQpGMaTmVYf",
  "key7": "4k6GrgVM9HGk7hrzjnYLdzhrz76ppFBsiW8pizFw7VJV9QwBZaD83TbjCJ5rgqxKnHqyKYH9uGqLDdF7vHAZsQmx",
  "key8": "4EqhzWkinmtXgyPpmFXEHTahNG6SHWGsxd7fNbPYJkJ78z6Q6qkrpragYyDpQTf97vzYymM69Ebgem5XEXu676mA",
  "key9": "5ep8ipoympBgfkTdT6GbNyU4TLCiPLxycoVHmVXNkQ13qJtjX8nbM3Z7ZNzjiHmB7vdiTVyeMdrL2gg9EqBrXwfm",
  "key10": "ynkrU1udAHgx2oXkcKBexAtrKoD1jJu6B6BQ1t4HMJjNndWBxAV7bQFQvpKKeJWbgQjr1Sbq7569g1FEGdrfCYu",
  "key11": "vStbEDEyE5BNxgQoGsozXagUz3aDJcGddx2eucK8ZBjfG8k4EGuzdeTFA2TjvnCM26chXVJCfPvDwfVDsc1ppni",
  "key12": "3xVdPSQ412Wr8Pph6oUTpV7LLAyCvG3xE5g5pPQThXNBrh5ToxojiWdEVwkh9CN7zTABrSJNYi423yttDg6tJ3F2",
  "key13": "3ZGTBLBmj6Bf9LXqzsqLgJzbVpTZG8aXTDrEcufm6gxe3LAFfjDVJKdFkUfFhXTgPz9Xhq4MPvuhyjMy6RSxbiS2",
  "key14": "4P9an5NG2zVkTrX6L6ESXgGULf8Bf7CUKM2ygBDUyXroMHGWnrpNuTek62bLdeJqDDiEixauH74ZBJCAYJHZbYMH",
  "key15": "4fMsx2ABvdvQz4tVdQUfY8jgZrMSnDnQqXYhBCyApLV5ajW4NTSDoELkK6xstZuiPjaaSzmzjgeKxWs1sqfvTwrf",
  "key16": "5ci4WeKmqLfdytHNjtg6V6u7upV3osFmKkGbQLiSh9UkapvBFqRNvjbMVNhfSxeTRWvYMfXjDGzEJ1wFovGopQux",
  "key17": "3i6eAD36mk2c3V9m4kAgT2eQWNFGZwvkrJLh6W9RDrRAU4yCfrMHYDKDi66XNJeLymX7mdQVzY6Yb4WHJ4vDEnmR",
  "key18": "FKFZknhGwTfJSgu3RGZqUGWMPJEA7Mu6ue7cBvHpL4nrc43MT4NCupNAdaDqseVzcFAQHto4eVBb9rGR4azueY9",
  "key19": "3jGPuatJ258sMSCP6YUwRbuNjBgcM31LhLBUpPCvUckNiPb1GP8rrQFjqV5a76LTEM1snS3aeThx7Ky3mfxVBhcm",
  "key20": "3RsxCtpbPQECv4gasQD6zLipvcUgMgoS3U32piTkdYmEna8ohTWdTb1FZdH6mnPvtkX6N91tyvS49tocdD9Jjbzf",
  "key21": "qHxa4JMjXiAaBYKXM2NFfGHJdpqpxX15ZkKMfYPHziMK9MzAtivfJRR25rYhjqhELdUag4y68SX3RHBidzo6zrm",
  "key22": "5XAW774pMcbA3pxDcwZVZboPxjDQYTQxtVJcrop5VFA7yymuAkYC2fLcAGkN8Qeq4YriSDDh8KJu21bhQcdq84tt",
  "key23": "5vXS55y9bQt3Xqd63Wk9H3GXzzXvTR2PdEZFdMnvNWto9VEmG61QkqjYcZQRPBLMqLTHaBqzPFiNpTso5vPVi5ZW",
  "key24": "3Erk3tcHCovp3oHxku3S2aqGX4SRNuW7kn3Upjj8jvHCccXWqvrMw8tkqQJqpG7W2pBCrtTHVTefUJMWsA3AVLAF",
  "key25": "35RSRJg1ukC7MH92T1AF12796TsfpNdvzgLXseYY4nR8o3qkdHj6azDZunN19nhNxf5dXdkdq9dpZ7MASp4ZQNn1",
  "key26": "4sjaxhAdgjw9BzNrtrHZZwFs6bVeL1fGuBEbqZpPixJh2myc2QiruvxvcwvqNwgysigtoCdfPtQzigjni1Rc8tMm",
  "key27": "vvYa5LVoppATQ3wXgjHcTnkkHbQvMHYPQPpkxerLtfPRnf4RwSd1TkC3Hrc47r5Y2wTKQXTuUa3NCguC5ifRNLA",
  "key28": "4FG1LPzYX23GpM8VEVYNpgoCuKnwayTnwcHdj7Vkouj69epMoVFh9KGSq2uTjeQSwYUL5vYFQ8oQhD5zQ9NQ4Qoa",
  "key29": "umSdeRUqRjLe3UZuLnGZsFrXmUxkGVANKWwb6sGxet3emrDaGgSsWp4uSURNwuE6pDEg5n8iARAgQxZbS6e6JCS",
  "key30": "2efiDSbLewBuVCrdoHXwhiJtW3vseLS16xk886Lc8bqqaRKuHVTet8sFzDnZmGM1gdMR8R95n3eKvr3kinF7Tgkk",
  "key31": "4Dk6MPXcN8JmtGSJb2CXuaqoRPvZD7TTa7mj8sZpapzpQGQzEbB9x7yaLfWU44qttkMpYCbLDAQFrfGfhJxNCWxN",
  "key32": "YEbeaqHLx1AWvzfBpUJJPpuyt1syWCgYTSfHvzkX9u9fKd9xZiW1WFMYC34PmdjAGCgN2hPHAvVqP9Denph6tKV",
  "key33": "3vHquVJPALYXvZRTq1wMS3AN4GAiXMcX7ixW2yRjF9HBMJnbarFWPGVyAJQ5eTs9LCpSPVdxLxkAn7yVdKQVjyVN"
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
