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
    "2dBhhFWKiEZZkejnZktBkS1yZ2z7PcJ6VXs7ADHvj1A9ccynDsU2jBJHH9Eh6Hi1NYe4qLq7Xbg5RHgfzGsuwoXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62vzHzpHmLv71ts6zkeUX1QrGGu7SgAJM6d4PyeTjEZuHQi8Q4VXuJsuubj4gZnuaxGHQzbbtYLEPqDAyzbNf6NV",
  "key1": "3db6sPt3MnM9dpNxfX1GEfZKPECJYFytDkycw4FBiCtfwvUMpAPKuQ9tzj15H2foHYk4GpqgeuF2kbhVfw5PK2DJ",
  "key2": "tEDBaSBw5U2Duyo4TvikLytckirAJRfFTchgMdphKUXXFSeiiW6ZzNRZAwrgzfALgq7VPMVHPRNx1AR87QZn28j",
  "key3": "3mUhoHEB9Bwek25SLdycLYW37Yspb5MU64yeX5Jbgoy3BG4LFZ3Bw8P9nS8cxWAKxfhiukz2DqP2KLXBisUJBfQt",
  "key4": "4JYZhPPfJ4K91YC7731LLGncwM2btxynexMnYVkR6k84jXSV5W9hzscmCsXfJsoy4xTCo1FPMkJGKszZdbHApf8n",
  "key5": "5RN7FQw4ZnNGqbaKB2ayAq6E1fmuvJ6t2u3Ss2tsDs3bSKhW7trYeMTArHrkkTezN1VUs4DU1x9VDeS1SdMpH2pE",
  "key6": "5zE9SwLmagzGZU9eZzFoK8DHgcQPeY8vFWBvrkPHgiNinpemvmkmzrg6ow6HybDmfA5QoVJ3Ansv1KqTYD3dZ2ks",
  "key7": "2ViBAjZjB4hJ3SyXH4wHvjN2VebAyb3dyuDjGxv1rroK2BS7krh4nj3TSyzd4Sxo9NB3t6k1FWxQdpaSRtQTzm4c",
  "key8": "3PJuUDhikk5xEi2Moh2FBZZxdDsNVkbHfhcb3PtVdhdBrAGEV4zrbm5ugkXth8fFYQN5uCuUqkC5XMi2rB6BgfR1",
  "key9": "rcnC7g4amAoPhmaq6SAjUAkCVRBG9K2ayJNwv5trnAJme3KsG5L4PT5EtxyVZ86z7QZSCKxSayfDCPGwK2AjhS3",
  "key10": "HxWfSzEaZQbwjUMH6xFTR77vkdLkMJkJHgGX8Fj3QUuKtBKArhoUGe7nMNBTMJuJgBvULsv5VZrNVvmCWgihE2a",
  "key11": "3pHkCKALX8BCghfVTrYUkW1CyHMyukh82knMGY9WT5B2fsTzBjxyVQWyi1Jj1i3htiay3YiaKw1oayKZcrDybTtC",
  "key12": "4vYzRAe9vQyFS5czjgx6jpVSNbWV4Xv6U3nDnijommrVBUa4NSG8y5VfMoWepB9bzJFs6GwCTDcv8SvZZNL2B7ae",
  "key13": "2S7oYRVQwDPxEeFeqFfC8o6LcmG2kB7iuVaUg1ojMVwZ8hwGu9Nzeust1dqMEfuG4HHd3enJXXtnjkaao96WzXGQ",
  "key14": "4cGqFj3m7Gyt5EopddtynRUF7V4RaviiBQ72By8ayACSeUYyjvxCBwsxJgGMLM7LKW9zQwjCfL1P8qjGukEjUo8U",
  "key15": "4Wsa1BHBmLJcw5NeN1UbWDubMqyZmjcbNneCkZrUcFHxffvzuWqbVT691vqJ3VrrUSbnBNX691ZTdUgnJJocjH8W",
  "key16": "5xeifH7tXTE9uWsp1xvPKwHCgUmJa173wwyMzCP21sk3kmKBrAAGQUD9dmR2B9ZfM9EXCqHXUjWWGiycKocfycT2",
  "key17": "3uSvS8rH1LQJL7M8eUV3ELr1gxcNRaGiZ2ctS28tML5VNDkB8BVJNGQZQErSWGeqJ9jp1bxj4H13JHyY4XCm8dED",
  "key18": "M5Af2PCjQRAryEzUNDgDevMXSnc5kTHRFujS55WGkG7AkCpiBjTDPbyy5dufbkZVYJqADeS368hMcTxurdu1tNd",
  "key19": "55CyxDahJ1pn9YrzQw2KhcxR97z3CUJkXmQcfkqZ4g1fYZ2dyH2gofRks9wQMev9Ma342fa2uY1AkUAJMhwuoMnK",
  "key20": "5RLrKEpsr2iJD1SAF9tQpxyVwDpubLc6gH7iYRHUjxj3WmG5L8ckmo1T9oxEdgMh7tQqSjiXd29xEjuiWKHaDEdN",
  "key21": "2ZNzARZzhH7Wm6mnw5NfFiy43WzmykitLNEtUXXWqni477JCnfE5PRVnrrbJseLxo9UsRS5w3KbN7C2wFY2eqEws",
  "key22": "4q4kSNn5dsiwvRw16GCZa6m7J1s4u2FFqxsQ7QMexqwxCUM9wogmmzNdiDcpbDFWLUVo7k7bEgLNvgBdBEazY54k",
  "key23": "5hEjr86JrZ4Veg4LmMsr9LhN38by88szhNP4r6T77pCemwVBQn8TMVgY5zSA8xhi8i1uNd8zV9pPT1Y1R9WXvv1G",
  "key24": "44SA3AKoNRTGbVmJemjCAbBKJtKdtrWRkv8wB6xhr9S5ZXanUfvbCd5nTnZsMFtykgMYxNK96SziGsSKkJdLghqa",
  "key25": "SkViN2Ea1rWATLV77k6U2FS3ScWeVwXR5jvXJMyEhCRV5nGk3rdpEp21Kc1pwct3Px1LVFER1KaqVuxHZSWoXhu",
  "key26": "37TjF7CvuQ6K8UZjBZvA8gV2JtPAGqbPR85WH4WjbFdP5LutA4q5U5bYFdQ2nPxZWYXbkLBx33fhyexv5oEFUc4Z",
  "key27": "SMtgaLkbWjhMZBXHZoEfAzufTgoGTtBug4NN6uuEaGTUSt6Z3V6t6tB7ev5D5cu4s2DC87BkJjcBEN5GskxBQUX",
  "key28": "4uiFiEpsvfdb9jEHWXjcCcNZeFzmnVJ3g6cYfbjnPgnF1nWJCqkhkTEWVMxKYpC4m6tfMdZnwnfTUFN2nohdcY1J",
  "key29": "3p1h8KNE9fd6FwPY6uexct71nrAuHGkALdi9yQjerXkRGZoTm7M7RDK2e5L3KtKq84gMUw7b9Lcd2jE3fkbNunZs",
  "key30": "tSTQEnh26VFeH8d1XjVsv4PVizjwxBP5AN7SLCCG7dKvWZn221LZWYHdY7MumxgWX7to1g74mucaMdTGLqGkCiV",
  "key31": "2fp1JiCiS8zBPidiUhEvfLqWzrJj8mAzo5yG4mfAPcDTBAvR7hhBcvQKzsZZNhvCxAnR2Jns5qZ7iRpo13be3a6a",
  "key32": "4uV6h2WDu13q1K3xWzeaUgbVSFFEffn7NRF5cpeTcy8jwz8t88bF1oCXaB8npqcBC15gUpCvwywWFWttapWBHGGY"
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
