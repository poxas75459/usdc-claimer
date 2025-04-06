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
    "4QKKDvw8Saowx7AnK81cQp3VYNn58ZDRGLwa2QHpD6Y8KDmxTnZi4aooe84XKuPv2NnQnJahpm3e1WwAxfLQtWzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NamAPAuHGKzDdkWoapiuSfDJREKitHFpMg95Ansa5vLpUBAm5LYJqypPJvotv4btUhLYptsm6baa71HfngY9QpQ",
  "key1": "4ipsPXgsMzQFxqp2GUTt6Xc3SRDTi7P9hSFC4WjxYXBV33nb9WgRaW2oUkxF2LwTK5Hkpg5oVTTwnfCyS6oVwNcx",
  "key2": "5Z2g4NCTiR1tg33ChzZTrw8Vib6exoJiyZRm1KE5rSZi3pTbmCcDpkgiFiasdokWZbRgabiqDe1vqeFhee3w1Eek",
  "key3": "4BBdy7bjPcjvvokXKU6ZXhgaXJWHPZ3gi19Y7UwixniYpRTZiSK2MobPrSCAx4EYY6yYbb5NQK1WPVGV7D25RhLF",
  "key4": "4WwiduUAiPcoKpsabNjuhmcFtxjk2zvkF16dNfPy5dSNJ7s4s3nndhZzoGzuxzVqkoDz4wRU96ujWYYGgtddyAqV",
  "key5": "2gHXxWkTCWEBhrPviSHvE37XJTDhiurMBWKadiEaDAm5VXaTfvMRxZBprmzoZzwBF5zbnXAtWhdK4uKKgxhTDGTE",
  "key6": "444YqoCdvcgrS6ovctenaxjFdnUBZu7JZRtLmwEnZQ8Qi1E1psiMFFXiH4gePdUqhQB9MMsjSPz6C6DeG9w1D8wt",
  "key7": "25tAu9QaAUCAzttBjAiXU1oTHmuCgnihzkecjxwu7L4TjMVjHX5ZXC8gQQpBJRo63kHKhyxnob8ShSuSkFSXtoyH",
  "key8": "445E75234mHV5mNbaZn7Pdo4mnwE3kk74B3WR6vD2KVnL3XBRQXLEaTSzcANTQYmZ6sP9rAnoqcu7hMRA4bUewXR",
  "key9": "49xJAJhrnRWh3fAHtXgFeangRqm8wiRxbfNffHaBEqtvsS5fJca8Va2aBpmifzd7PEF8YqGbiJyvV15ix5h3tonP",
  "key10": "23BJ37xL5D1QP2CxxxxN2n9JoCHmayTMNodjtorWitsAZjsXGBKD5eeWQyKHPUcMBtWniWBsXEoz9wGpGAWzDdMw",
  "key11": "2QhmjZaFvmbTPBB3SXc81xJuHhhSwjVtvnuJb7eQihifPMK4YizQCwKuu8cdhXySdky2dEWKhajFwxMwwK6PvYnJ",
  "key12": "49akgVtqt8N51BHrerYPiFwaGJR5aCCaLtoPy5p1FWdzWCDDPxom8zfL7zuQyzfyfv44syDAzxtqNeNZpRXGEcPf",
  "key13": "3jRwkedqrWuaL11BkZZsMAnvSfmzikv9yPC2hJU4Eov5ueR6LxuMf95nes1PQGjGDKy8d75VyHqugv64wzwMR9wB",
  "key14": "3DjCPHaBbKbpgayU8ghLkHNBssHZ8fyznucMGX5dTZAFXUKKkk1hwGEKiKWT8EYxpddVFvPWogEWqBxjqYviEnik",
  "key15": "47g9imwZaQbLsi1nnBPPKxvKb5gfofEQ9jJDu51P5NshrX4AEQKuspzjLR3JWtFgKAm7H7gve8YbSFUDxc1EtfWt",
  "key16": "4Mrc2FFZMkUYN2qL26R9reyrLzPVVEqT7v1AwaKqgS5iCtsYR2vzNiUJTyFkeqmccLmf5jAR26JWmSyYipLj6Nb6",
  "key17": "39G3VYecpTm2BifDyEdA4TmrmefM2tEtoJvEnucP3f7Z4MivDwob7q4fRfLkVF8tSXBn38jEyr5DG4zBeG7kxc1N",
  "key18": "5pHZijWz7oPfmp8SVw1pPc4s6F7bsyLUX7DC88Ric8S9vPm1vCR9TG6QfhFm7aGbLT2vbsujVc3bThd5WMamFoip",
  "key19": "3WiTfW8zcqfxssRouH2NF2GDPP7c2DEGJU9x9ofD775pF2sJEUtpubWjQhyye1V584sqRtQH3Q2qMJc9uiaZNs79",
  "key20": "4w3bA1hGBshjURQoCF9PKvk86oKfeESohESFCjhGD2nMURvgd3HvroZvms77oQz4iFCNkfvaNqHiWo3SVYRE8ZFd",
  "key21": "4AwadRUBzpES2ZPL2Ak2tY9LYwkg5VUnxHcsqwV4bR19HbSXCedgXzqPnJ3a2ZYeknmFBzqsEqRYsoAtoAFjVXVf",
  "key22": "4t1mUmWxLAB3mQ83RB5GZpLwWcDGAfZ71MR5iY4Ycwppuh84aMamJ33AEwovdRNTKp3XuSkTuMoCHicew9AiKZTo",
  "key23": "2EsZLqcdpD9uvk7edgQreBqppG1gJHpNTZa4eRxSVKZZ25mXcgraEpGBwuHoCVsj2mPqYoqtwbfpvirVjUwPiFGd",
  "key24": "4dXy8XcFJoFpTWxm5wPCsEW2QqvkwSXzM3VfRt5VFqWMw6LxecnMCejuFWBrZKPMTQM87cSUgSuCSUSMrK32Ev7Y",
  "key25": "1CFeWvnHBwvbb9eCEAsHqAHyBxHqoTeRxBRrZypnmAP7j4mZjAfruZgJbhu153PQH8SkM6bAo46Q6bvdB6cDwFX",
  "key26": "3LozPKzEWF6EyrSXB9UU23QKGVoyysVk6PkWpByRC7bMbLy6dMrHeBb3yAA68v1Rkt526azaX3GU8Kf9t7iz9EtE",
  "key27": "2NDMjMpMHxeea9nvmL2ndsS7a1fE1R6GV9rxm3w8X7E5HQgd87uYBywQTJqhnT5MPZa7gJMHx3Zt7z7XygJyVSFK",
  "key28": "3wKkJwDjftYPu9xA1XvstQGPwnfkEEDMVa7eikESHX3ksnThkcmyfCaYmkDp89Mz8zGeDjn3sgetvwqihKvxK7Ef",
  "key29": "58wnhcc6LfaiVEbhrrX2UjwAdT8P7FkfpWw3HWNPWuc6B2i55e662nQ3DoLJCxFdopSvgNTA5WhjzNP7LeyQfXzw",
  "key30": "8auYc5ejMqxJjt1uZK8bXfqxXQU8bs5n7pYpCY8AWnS9ZejJmAZ7VvpVBTGobWP2BEcQSTPfzwZjj1CzC5EJP84",
  "key31": "4M1HaHNVkbnZ42dSL4eRu3o9CnxC4wX98bnyraAsTiGvAVZwgjZcfq8H8CdDtK7LxD633UENmZy9LiJoaosNvn2j",
  "key32": "4X2PfC6qQZFDUjxJzp7DTrd3gEm4iEKj5dWbZ1DdqevRfN14rU91nXxKLL8K4YptvG9M6b2j88ZW7ufy9W414npo",
  "key33": "NjE85GAYBmFqHCHFRwe9SsM4Wnp2RPqMfeUXbhayUfuuS5xgCjrfULSKA2a548PbyAEdrgMjpXCGC8pSe6DXRXu",
  "key34": "W2iX7PpyCnjUerqF2mw7UuErYeqRH6tMtordrML5mrHhVGkuxEYgvU18Tzm8ebvqRsUKjTw7QX7ztmAmiARSdsY",
  "key35": "6wyCrddpqPfEaVUKTvB6aJUUEKdCsB7WbWD42on3UuvcN12neb7DrP4VWagGrMmQAad1paxKqwavNTbbspLxtJo",
  "key36": "3cka4gknsMn3CTrNcpxsjx29uadLF9ifh9rAHXBrdT4xnReQYT9gcfPN3TJRSC8PVHBrSgdH8dN43yaGS234YM4u",
  "key37": "5GwaMotv6z7L68rMwbmcPYsRPUnmozMMhFq6HTsSJhYYCq6SofLbyxfW5iYJp9Lq1253ufpMsuDLLNaN9zorbTjD",
  "key38": "4MsQYsxaLiC8tkzP7WYysGGTYJCTXGFVE1s5DLGwPH3YyrH8qm4uQBwpsX8sRNcnfGZ4ygZoVzc2i8Y2DndisgNT",
  "key39": "4zdWdmXat17k3wydoPGQUx9wt2fTTXvuR3NbXJQSL7zN7QVbSTvxrc4ZNLev8okUWK2QNZDFygAgfP2AyzHMzgxf",
  "key40": "4B9TLkjQg9GpMNECbRCzKJzQD1ppJM3qKMLQC2gYBFd3ZX6VizVb39vTiUhdQznZ5ED4a7Jha9AJCJKbjXwqqjiB"
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
