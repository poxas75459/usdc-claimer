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
    "2s3eTG63DwjtSEGAYiMEN4zAh8LyQumsmeZVswJYj5e2xsq5CyQs5S3BoZ1TsXwGKshHqPKV3fjfKgsEpJW8SRWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uba6tawTDGzUzRpQJdUuYN54ymmXSA1BCawZ1eqgGzr2w6zMY5BQTj1cDJVmCNNc6Qysc4FybFqpDYavyCa5DyS",
  "key1": "3N3mxKDkZ3vxHRWPShP391Ca3N49owSSANeoJwfw7g3v9VcL9zdxf2yScrb81YXEhTLJy5o3UMYExV7ATpeMA9Gg",
  "key2": "1FSPH2dHTU7abNnJymr1yaJK23gWkQyH4HVnEydAccMGJXh1XxDuKCkmUYd4mro8bGpuDZG39pRfjDDbpj1fn13",
  "key3": "635ZiVmFgA857Yo7cG5woPpso7BstNBcNrmiUT2n37YjrjeZmyjMfX64g6D2n2FVUuV75eUQbDT7xzK6nREFsMZP",
  "key4": "2Cxy5c1MP1Hbm2PVKabhQnhJdeQKJvq5WYWjZQBJMMEu8fgdSUevLNZQY2szxrRioykGoNBZv9LQmjsnaDAn1o5K",
  "key5": "2ddCJNToDQEKoYkLxBYjvurBVeRXi2KzktCaEtU7ADVZiH14Q6f68mLmQW2rNB8HMZsuoPbHBLv6BxSAdsiDHzd6",
  "key6": "5U2XHNTHPRKYRgUNQmDfLxnsqP5ZiuMaohULCXVVp1zqk8rt5e4HWajBaXAhzehrGNPpVV6rP2a5BswsVdQw8wFc",
  "key7": "3WV9nxitgyfyS2JB1vc36GjbDvijvzC55WBhFT5scpY3mhBfSJoUKZt2NYBfr72syiBwo65Amuxh8PWJx59ivT5f",
  "key8": "4gEwuZN94ZzxoMQhXv71stmK5D9q2o44dvt3RgaJdVfqxvZG2oFav5cB93dGJgrTKogaivxa79upz7rzDoiKGq8Z",
  "key9": "SSg6ZXJdSvfXZAM9jx1Yxg7GuigzaN1ZUc9LMuDDXNLpXPTXaofsHZmx4fP1C2LVJTZCbYdMPMX7vmtFyZVdRg8",
  "key10": "i3ZPMYnbVsT3EVMQ19kJ2H6wqLiPbkdVUHtWZJLiEWYd6eBzHXdE5bLuqEsUWVeqCu7znAdPEDZnpUHwKh73gT5",
  "key11": "2NcKxZtxtxCQV5fPqoLFYNdadecB1uFdSKS6fDY48eB46EzNn2RWSsqBminAnQzBAAMbWXjxhTPButFsppmunwFo",
  "key12": "4Kr8VRmtezo6dvbXaTa6DHWNYeQjnLhiwLfA5sdUv8o4Ygsvo31K2Y38BWG98p9hrF3PFXT94fG1X3MVbMCkxjpd",
  "key13": "3xS3MZQA8bsfwH6ZC6Kw96jJj23vuFKtBaaPUvim6YK9ZhD93Uev9UUiczgvV6EcQeZ2WXjgF1tzHkbDYyWawqsv",
  "key14": "33doqDRgd6JMzvSLNZm2yafV7rpaZF5e43UVeSgZGZZB1S91ntZMXau4VbBqoD7ZAcKFskPMTeRAmRFgQbeBTRCM",
  "key15": "4EiRoZsb1bBtP8bKUnmyaa3hF3JwrghHniXfBjnGJudmYowzM2B3kKjkR7cB7t6pnqY2bA8d2bNQJ1PRQch6Hg5N",
  "key16": "5XUyPXBpZvEbNYey5CT9Q8MxFeXnjmEM1zSmQ6ktrQRX2QLudJ75ZGAuyN7iLzADwxATfFeQxwEPQtHpaNdy1955",
  "key17": "5ce1UFmV4qimcYay2Q6Ee59TnmdGyYJcV2e5EmkPswzbwa1oidKVumpi8gHYmbEBPyGnWJUJujGsxe19SZRYwMYB",
  "key18": "3hxjJon2H56w6icP6HYit2qH8fBGVtBDAo1fhXJk5vi9YrnWjNuxr5wjxVY49PvQJ1YzxDYPmrmg2REHeTh57Tm2",
  "key19": "2FKFYiKUkBfeYYVh2Eq7PBRqB9v7VCdwH6ZXGTJvs6XSVPbiWn6Dw6NdNawTJkE1FBrtzhDgouyFZwLrRaqqK6VF",
  "key20": "4jiSz2hzgsd8Dx4jN8ADLKnzAnbeZHJAiPhzWssx5E2n7Xez8arx9Ctg3BrTM7SREJ3D54ShZWoNeSrHbibfsEJ9",
  "key21": "5Zx4NQ2kJT5XqAQJVxfEP9yoEYsMKoTvnyv3St9f1PWtiu2jaaVzA5VmMzQawvXSwh5cYJQXfhP15jybuBR2J6Mr",
  "key22": "Z8HHZsrnhNo55xthjF24gTg1kqKERP27izNVC8d5veWbD5HjnpLMiMGDfY7LwhTXXQQU8DdonrG7qEB8vqdU5k5",
  "key23": "2QRgpo98m8EXvdtkoyF9d8Q5yQBmif1nUVVfHDWvaUGyXrS2R1nJ8UnX5Vudui7YrLB9kM6ZqJoJng3tLu5gjhJT",
  "key24": "2fm34RAsVCoLXaGCwDiZRWSFQSwkrRv3WusRTnjBvKA5GBASkvXnngZ5hVstkfQ5YdYqQjcf68KKr9iho3NYJzMK",
  "key25": "2jDQph2WD2SacZotA4phPBpL39XggxB3uqMSi6q7dZkJZYPeKrgxUGTp1hU7KQLpa6c1iCPjsBjpcPcsic7F93cc",
  "key26": "37udmowoJ1s6Vw9fi8FLqPHFmZDGy9yzJDjED8A7hyzWBFWHsXjGYGU8rMbeaa2YsZomRRcEYaBMq3hFts8pvB6Y",
  "key27": "3NqWwiD5rW4x8TWtaxozfj2zPGkY2A2uDMZCYXkp3g168XpvZLCYEa7i6zLL751UuHJrwdwfgETFauBx3daexpWx",
  "key28": "3Bk86E5GKpBDB2nnTVJ4ooBoRtLH2Um6RzioPkwyLN5CTHbiHkQHProSYaeJrn3PJoU1TCkqMb7WkkLBe8TvjXjs",
  "key29": "23qkuq6Jn3GmxZ82SWEsqAMQSKrS1ZHKoZyHqPzDYsWcFhCzk4NHd3KDgiKhjjF4Ng2dwj9DoF1VH1AyPMtv7wrA",
  "key30": "23AcFXT9s4qevwSUVcityXtBTMwgroMKCeS8SRcRq7749xWynsWnw7PEGD8NUB7fdG99KHdhTtdxYaypL2bSVs3w"
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
