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
    "4hZru936AJPgWQ1xGy7LUquSK8RktWWAJeRVBqcr7Wbs2nkwjbQVE412ta1Q5csjtvpqcfWe6zT44tjf8Zs9kGVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QKSQ7srFoQrpDmntZu6avoNwbG5tiZmy92cEWbt928v4jguXTpcUgbW5zJUig2aK3zsHuuyZbCfAV9pxatLte2v",
  "key1": "5Ukp7bTF6hnxfHVNbshHHCTQ7ySSnyTg6q3Tta7uju1gyBLtUVUtcniSYMS7oXDWqLKf4wQTxrRpwCtkP7TDHJoq",
  "key2": "CqmXS3E93yKL2hQtMMtCVWQX7B3YWrRjcKhBm2c8y5NVscnUrPfYTUTv9hkeTVSe4A7AZz8WVL99PU4TDJNdhij",
  "key3": "2xpYpVJxu1ZeF2iX4cPWiLSwPJGqWBrNndSrVsbvjYFaVTXtTeDSKC8PWrxsk7n3Xcr9domVtgi4KEpKucJeQ9rF",
  "key4": "kLB4VbD371VFWdLxKMEiZcGhbmbSuo9qm7p9wf4B3b6ipZSGkYjA4b7N4Qwa9HiUU2raotMLHy2LhPzWwMdGbNB",
  "key5": "7J8eNQ7AkgRzU2dqf2RY5dWZAyYTqrsz8NF9o3XmfLQJS2L6t8zvfa7xSdP6QkLgLmaE5vxhUv8kLRwh3Ke478W",
  "key6": "o5UKdKHNLoEMzxvuqsVDnejhnPr4x5uYvQfNHbkH53a3tJ9Fe8uY6EzSwVWsD39jgkGxahFknuXfpdycUYkafrK",
  "key7": "3YeS4esFGvG1GWwpgxKgLLt9MpLEeuC6L9kjRqa2FTrtBa62Q7FnLEN6hHuK8dfzanfRUS53NBFPPS46iNxsY3m4",
  "key8": "2ZxipUQGCgBYkavqBPaJy8vH7bXbGbHWz9FAstALypC9VkYZQoUmUNEuCTv9jW238eAqu1N4rjDwHFmmgDm8B599",
  "key9": "4ShRV7Ji3KozAuaBoGAajEbEupFX1XUnyQAjTRUsWSCK9rwy8RY61qVsdjczx1nquNZ2i6QG1Sc2DGt1J1n1qqMq",
  "key10": "5tpKFQDS1ohrRxD7qcTV3eRnMogz2R6UiQe14hrzMoX8wYtQGWKJt8q3syGnW6ZadXHrsa2KU1JUxHyv2uyn8UKK",
  "key11": "4x392ZdxvYrSXmEyGo7cbqh2JZXcoEX6818zbzKXr5amQzcFnnxoGFwdPjdaUvPtpDr4CVHcWujcmTYSeQ5atBNX",
  "key12": "2YJoZbCa78p8LFmoW2S8fxxBtrMhspthk2fWybHGhHdM1T41Z88ucgTX7zSVxaFduHbVMPqCXCV83XkZnKn2AQXQ",
  "key13": "4S7WwSuk7q6ruXWMepAdxj3t3sEripKseMXNSLKqNo7dfJx3jjgTiJNSH23nmxWtQ1bKjyo2rgShbh7TUaQeFpXr",
  "key14": "64oJEKfJXfRsftcdvWYEx67jHWDgQJej4v8q2CJZs1zHtKouYawSNPg4gvCg3M9WDfS9dNqEudsBZHCV5VA73Jx1",
  "key15": "Cw94WAwGpmkJxpxQd1xpdnVfSYcyW9vHSKKoLDa7FJgCQKikRG8XP6mTziZbgAMpw2N8q5qyGDKz4c8Dk5Tx4Sx",
  "key16": "PfEXiwK3fvRqFNrVsGx8hAFYPianPEYzohJdYonyukLaro6kk3H1NpxBoGh2z1SXFrsyvHXmzTZnQz4wK8Dvk8j",
  "key17": "4gXBZthvWgUJLhPanp6AKNFAw2LQMjTzfDQV2rKKFD7WSJTRmaATgF92Co4VqbCGm58pNd6gPVqQD3M51PnatTjR",
  "key18": "3YkMjKo4i2uLHZ1FzYSyFdsxxM6x5qJeo49uLTx19sYKUxcMkE9axQJWJm8syrvgpmzrA9dhJKbd2haxn2ofak8c",
  "key19": "5qKeDLbQeApkaCkkntX2ocpGGeBZfJiF935thjypKKu2LUjwA5kfGWWQsGwChX5rwJUwjioh1hGVKxMN6M5iaaCt",
  "key20": "4hnykZLBX8TZW4RreBn9Da9FZekbSEpCPL3PVGEUE5pWmkDeAj54qvrVfyQz82QK6ipYyqKjZUPLbVVdX32Fh2U8",
  "key21": "284CNDjqX1n2TBsdgy4mKhqUZLpnrD78uHqGs8jgLA111ejGwe6ZhnbDo7NYUzMbmVDQAH7RE9w1WRs4h34bE79U",
  "key22": "5T68ve4wtpf5ZBWwudcfkF45Btv91WGr9NzustEG7Qu6UY7JsktoiTUowwNDvCaTEhSJ9n1cpof8ivhftyCPofiA",
  "key23": "4bGt8WQXRq2TtBZzdYKR2jSPAcQPX5vxfuY97TZNnfz4qax8sZ9hLdwURJcjikMb1dDTGTSBbBaxcpZ5zSWn1RSt",
  "key24": "26BQBTLK9xgbc3yw7pqmV4L2x7UindxtwBBcUrmtp1nTxPSg91wV1teC1XTZiykZrLyQbu39JPNV1pQVzfsvyMN4",
  "key25": "5udmCs8QrYnzfkwgYwR9LpynbkFNV4vf2jTVdLwHaZ2q1tDdT95jTUYBX1xUxAiB4J1BXKorjXtaEUvCfSjC93PR",
  "key26": "3cbntrME9Fokwo7tdVmrqUpkZcJwAjpr9UgKyazMkRvjeVgHzjhQ9jzQRd2HMZV8nA8xug28t9iYti3KZAQT5tU1",
  "key27": "466oNWQ3dz49XWhST95GuQBSpLbAgabjvBM9ZvmbwNq9RFWNwJMJ413kBoxAggo6TciAE9sAPk4ViH5HmvGfbZA7",
  "key28": "c76f8yJ5CC3Ap6STzzM8wZBT84KLBC1f3K5KH9a8ZXzaDcXrURZBNoeF69eVAN9oxxCmJ9uimzR2RZW7PgeHAWf",
  "key29": "7ye46PnvzAJ3AdgCWTgA1wMV5EAYcSvK5Em43gg5ACKwxqxFj3ajQ2Tn6hvLWvtXunsZmGEaWoHrfyu49sKAgr6"
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
