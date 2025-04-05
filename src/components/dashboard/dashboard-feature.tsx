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
    "5K9SHwZ3RQhURysfybrj72sRbJc85GDzTs4WQZmGoL6buY7mDFE2tzog3LA4WC4VbYRTUWvBNjzEP7M1qyc2qk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4qekbGqg2AiENSD2zW1Wm9zY5egV4Yzf9THawVD9B2ruX4rzVPUGa9d3DkvT2BTrzpkA5LVzDeExktB1PbB3xr",
  "key1": "tCj576CzqjKNgZvr45TPTJti9oHUvNxYKnHo8xLsbJBKJ1gFWuWcBsGayLkmED3sEkQm7JPBXMzcVeY2yDZMgha",
  "key2": "35z1hyn9KbVE5GW4zfxdbxnxrRyUUub3omStFghRMsbrivCoTrBqxSEeeQvq6ScB5puhCXYhDxJBVgTZkqAYd9QG",
  "key3": "5KvQkMeszr7b9WTtGgDn3bnNh32MuceoEgdDCsApBPZkbUMbT5g9AnxrGp2Buv7Meunwe7kcEPjWUMA293VxB5sb",
  "key4": "26uyZJUn3uTtfG7hryzvCU4n5Wytx1MCx8nEbFn7tWSEbeXL1D51F7cCei6Zcfa9fS4Vc6hU3pK79hHjRSbW55NC",
  "key5": "zeqwH6cRShzCDEcUGgd8KVmB1jckiCG9YiufSu5z5sYwrPyWfCC8QBJCJgzeUtrMpmxCgwvFcyHNuyjxWxXiuis",
  "key6": "4F3TQvh2jgq7n3w7mA4sTHheNz9AGNLPyXXyyUv3chn3fEPqn9RAvBnX2bxVDcWxN32xvDS8cFddVu5cWenA3U7m",
  "key7": "2VWQioDMz8TsWSMd8usXv1pN8C1pkzrMmYPWnSjGh9nsbmwWLYWHZztgss3rgdpGPBotBydDi8HA8MEvYwLN4H6y",
  "key8": "4EPgXPsdnmoeJHs9bp9SWfkDfUHfgtn8GLQXVxHi42XMohEBFmchngmDDWmR8VNadTXJD7o84DqpQWpsAsVENqQN",
  "key9": "4TCjJbswLi8XkvKX8wLxuTWvDz3zEfwiMYahExCNWTUiv5F7mAM3Qbwi9nMD7RNcMGAiE1rbtzdTtDcQeVWeFboS",
  "key10": "3wcGkvtg978DZDiSQCn9LEYs8VAKijNCvRFZ7KMFaBdaXJ8PHeXeUhVBQbrV69os3u14zt33GqWAFDKybaVwHB1P",
  "key11": "39QUvbJG5jm4NsEFi6ufvRyF9PdZZjDTVfdKKTdEYUVkCAzpmGnzyVwu3snesU3BRkdy4B997hoWCUtZfeAUAHsv",
  "key12": "2c7FsiMEeJqZqX7i37H2Qv96fgZ3sYawZQMf5Z5sC8gaonQe9XURBMNTCAmnTDweQJULaWzKvsq76J2LEyYNvjty",
  "key13": "42i1Fsxf3BDvW3sUBCv85AoCbMZ2r1nv7EasMv4VWfTiC3SP1VGnV6XENHt3tNXPbCXhg4prRCZwUMkkAuvyXH9o",
  "key14": "2HUW43xmtog6pF994g8D6c6DArCJ8z8okKE9axQDZ6w8BEy3xrL3ExBJcKcAttn2cEwqUq4Ah7TKABatdXRLsCeR",
  "key15": "294ddkUGavcMWVXNFojE6cEQDgxJtiYGyGNxVuekVUd3hMy2Ck9LwtbAvcJgt96tWDGGoeWZsMocr7fz6qNPyTNr",
  "key16": "3kF9HhhJjw5J9rPUGsTESkVfvdytotgLudJ29V4eE78d5BoiWTFpaWBuHK7pABcTowSxQXYCe577AaavNcpRXD1o",
  "key17": "D8C5fdE9KiZFqAMiuRuJWg9tFsnDGEXuiE7jxT1KvWuFZbM31AMCe8VjRXznKRQKEAHCmprEiG4byHY9CjjXqt7",
  "key18": "3Y9emb5mobpCPnnmKaaP7BZykRaL8XGTm7qgd3D47W4JTZrqq96uvH6akAxXYANkk1oZdpKuoGYRFJVd7Vprp9tF",
  "key19": "426H4m8pzsRmd4ToDhAqK6Cq2DL9fGUJRwdaWwBz1kEuCm44dyi115vYJhyacgJDKom7CV8ccRx1kPU9VcNRzCz8",
  "key20": "NsbowPfvhqgU5sP4dzHcKUXrLMN91k8K69zDGp7uJcoZW628wBgFjXzFDy5v41uGV4RziUM7Wa6RB1nvJ7AG2M7",
  "key21": "3GQpSRySD9SmPtrC5eYLokrd79hzuUk2274AmFHGiaJEqWC5Sda6mgirKL36MJuT74DxycdZoi3Y3wAHs3k6bcFW",
  "key22": "2sBAj5cSm4RCXeM6jHdnqchoYv4QLukUvFmxexzyP5cKVvZhgbp3XDZSn8r2Hx6ygkWLYgeZPGFjCVizpEdcz2Ag",
  "key23": "3QbsgZwxT1nWCqcfNENj65MZcqxLhtwg7WMH8Yx4JegtFerTpAvnnHemTAhmdzqqiYGrsSLSWqsoQ9QdNoydoxx4",
  "key24": "5XFYcufGpoWn88z6j14kzfSCSJ3WFdQdf7oKncJQWKpYTm73yRCoAw8tZVrZXMtE6AmenUNuNrGtgJxG5nEZC8wm",
  "key25": "4RevkdvfN1EPgywaWqCksoGQ7DVL4vtvCAv5nrhaSYhkoh6r3km8QCWp73JNV5YTFYrAP7YGsW3DT243DNjc3NBL",
  "key26": "2wSZfzQecQyajHnxJDjLCXRBDdNR16DdrnYWxvBcXxKdyQmuj2B4C6WTDaTffEYwwi2xgqyiE5DnBXo7jTiJk46v",
  "key27": "JbziqV3VNE5K23figcGiZPg4Z99bZFwwHRa65Udug7jovc5aegzsX9sc9Q55cqShiT4NMupLdn54fo6iJvsSyVC",
  "key28": "5XxnY3ucztSvDJVCo2b2ptDpic37xprrRmQsnk8ZsEdQQwxdCNWdvRdyze5hos3rSRKgPT3bdRbzXdN13kaaES3i",
  "key29": "5vhxQmQLmPiRcKGyRZ55hFunpggWU8hvvjMSVFZTEr4LMWAAv94Af86SYJPHCX7LUriXM885Ja7x9cn2epNaJTVN",
  "key30": "5GsFhGSUNei9uhpEzoyFSEN7m55Crxw6Wg4BZTCNH8a2DuGNikHtwRrdLQn86ZxxJ5b6tnUPaEtoz6cjd3YQQp5K",
  "key31": "4iashn9Cmuoc9NcPkMsZKaWStr9fe6HGDUzKTMhdhPGdBuBqkK6JfFFjP2nKSi4zBqNu4TNt7QkdCVZYNTya2V7t",
  "key32": "4W3RLTRhorQay8M6V5p6ouw8uYRS3a9p3VCvo6RSZETAy4K1u3tBK2doa66u2o8eHucfZVpYd1TsF297fXC1zzBa",
  "key33": "HkW1Mm6UMAg1WqyWMYz6fCAEjEPGk3fLbsK8p8EmavE9cRjL5WZTDgNTgTCV1x4Fy6f3wtShH6nsXjvuhMBESJH",
  "key34": "4WCMW9n5uGfd5uYtUMT2Q4SLsvqDo2GaabUF47A1LGT63RmJYtygoVAi1Nxd8UtmfRdLkM2WqW1p29Jj8mYSV4e9",
  "key35": "2MtDZVbAvC3JiU8ayb7QjagmWNvz3mTs2XNfdZiP3Jer3CYRsQXjGPYwu9EkhfFXTJmFr5JKyzbNzbC3LZjLAEuh",
  "key36": "27En8g5XLQLdMCcb8GTAQneVCWpcmLdBZW9XptP2qUZwgejot27RuYsyNdGp5ChnEXd9wWcpRFi1dM3hTsp8x4yB",
  "key37": "2F19x9XxMMuNH8tuVfCPaoA7dxWP2cU4rq8AKnTeQgtrvpAbAksGkhRDTYDGMzMwBuV9rLtmfn4afsdomYiFnFiL",
  "key38": "2iLJSkrcpQxh9Y6WucTyACmsLnxDbrzxqRA3RASYH9ChyQ8NmPURWFvnz2bPEck4AF8v3TLB8QXGHcVHK55ybfvq"
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
