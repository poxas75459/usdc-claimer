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
    "5SyZrk6orygDL5AGFTbKcykeRs3tCBxJR1PQEW6k5jJQXNRqQv49NVVRxqWRdaMZcQzk6tugGS1DfKH6F42CXuUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZgtkePpZhYidcHBtzan6p4wuUtumEUEyCjNZSmcPFNrCERUUaWLS8aeXB1qRpaRh6NvAr4Ptg5QHVqE7T8M1w3n",
  "key1": "s1WHNra8j8TihTro5agnKnRaqGd7fUPbxykqHVA6M4SAgQG2Vo3cz8htdn4XcsiMxoyeuUFaij9nogRysmEUdtz",
  "key2": "4rp9DriEoieoPy45EjUgyeAaZYSPENT4kNZJGWzb79ucHVHBVLRtBESpFfhijws7Aa3iqW3oarPrufEX8zjiWbTz",
  "key3": "4NWqgSV33dwjYZHAJ4sprz4HdvW2oAje5heaytfWheXaHe6Pii4rPYKpuDYSjaXqqFekcMeSGPncCVGYFpT1D1EA",
  "key4": "39pqHtRtA98kh55FMeUDtjCJY35B4uM4dM7qWPxqsb57DQ1FKQL2WzNwLfHd2UZn9BgdukjyuU9oRF28jM54L8aj",
  "key5": "2TZkPBHp3xo5kEAZie3HBo6G4sDHYayhMhGNxTU8uuDtrmjkXKmhHuAQ1YYeFJVTmVywZvTAEL69sRbGYp6YxWjF",
  "key6": "3aZGPgq8cYX5rUL6Ak8V2ibDVDc2KcRCy1EP9QfEPCjNk5sUaRFJknFJ7gQpd6k9YSuYfSMxRC8ArdmVraPpV5sV",
  "key7": "ZwwgTMJgNvW7HntxtYccQWjPSmwv6oKqNix2A4KDJX9Gjvors6iNVPAZz7Wf9J8fV4bqYAzLx5iTtXEy7kpnreN",
  "key8": "2zhpQSHoQJ1JrwGnhyVoLSoZWUZhbMtHbYrJdYgGMARX1eVACg4HHAqwoXop8o6QqFB7PvesFVT1U8fPHvVX9F59",
  "key9": "4xBf2NKpzGvCDJ1f9rgWaVxXDpj79oCqMzPEN9YGSzgHhRsyMSLLZFZqrUmM8hjkMjRjoHxFqENuFcuvnMvwyqBb",
  "key10": "opZPhf87tRxecXejJy9AXRxMGgEouR6eLHwA6iyAuRephQ6Kg5hNS9PqUj9Qz4iZF9B3czBnwaqvSMh159VEijc",
  "key11": "2re4o6F1VMTXSehVsikvGyzLhSN83dMRQnioFX26aKux2guhaeivYtHCj8iM3FNc5KpuZoA5zMdK8Be1Gk4ncxf",
  "key12": "3oszW6xz3cwGzFM9wBdnYutyTtGsfFpHym52FUdG9hiJUP6mSN9Hvua6VBg6fxKmUAmQzHKCUnJV5eUqjEtevE6v",
  "key13": "p1TjgVMA3Gb1SXDEdQhgYxyCGzFLfRsvBRh9hmKu1tugt6DargXvuxdh3Wxed4NnMthBD27eAkxKZps5qunzwLK",
  "key14": "3w4tV2xtTnvk7L2qzH7q7fkjCfufTQ4kM57oFoHDN6ymnARn5k1XvJmEZcZDnm9Kk61Mbrku2bCbBEzoiZFuHPci",
  "key15": "4BkgK42zsKRDpWYqXrdXR3VgSSuzYuEmGCP3Y1brfkyb3TSykvCRcMwXMBS4GeeEhJBe2Wq2gc6FSpB7DdPVaFkx",
  "key16": "29fkMWzFzbjdZt4PLSnX6SsrHJZR4TwWmd9dMhgonyBLrAxzzJkxpXXa62zUqmGGWqs1pGKCTATpkgBm9gaipWVC",
  "key17": "2yYmLJWN2fJ2WCcFeyCT7fjE6reNLRsYgQeDHZarLfz3ZK4qUQJfUQfPmWXZgyWtXjhexwYKGVSrCmayDt4Bkb2G",
  "key18": "2o1UPRnmdFY7jhTfSmXuGrE5h22vonteMh3RDqkC6oMeYb2LmzXiEHD2mCcJZeKUdNzCDA1E4BtLABhMChwsPGjB",
  "key19": "2Frgcone9QAxjQwSaXUCBmpvWpPHRyBCMXvjdxNJ6M6zwWBia8E5rHJAQmtEcdzVYu953cNosjrjWWb911jULAJe",
  "key20": "63WPPjPNfeecUR69PFhcmcBmHeKBQsZ743ov7ZzeNo1EnFkNDmBPKGCPFKzMSQVFFjYaqpbsScsgNc1C1dJW2RXc",
  "key21": "2jL9csbGvn5thgyevwpF3npYVKyt2D5gRDnUuD4uTzyAa65YkdhEADdqqjv7TigaLgXJCdoxLSCcjisrLKxJo4J2",
  "key22": "ayNN1CSKKn2FfVZGVoJKiVGZvaVkM8N49wf3CnNc4fLWzEyaZ79GyAPXyDpRNsQFsyMsngD18AmHDQfrZKKkwE4",
  "key23": "4fh6GFWEvrfww5i3XAELDmsbGC8WQTM6e29cCHHoq3Ta8CPJk1X9wt6a9ZJWUeNwSmsxBxEoaogNEtqTXrPWvVBL",
  "key24": "3Bu6mrHwwscF1Azgqnj9jySXwDtK7J21j84EvpyhQVLVsXHpLBHLBhu7v2r9QfjoXgdvHGKAocmRmx13fPAiaNUA",
  "key25": "ys9igm7QgY8VhAFyB9az83Ti6NPqdpygXVaSyrJNn2Hhmky2Yf7f3o3oo3QTktoEvAmgHznnEfL18j6xLVRRHz1",
  "key26": "ekgRdtiD3ggApWeemuvXcJBjLnGwQtcGy5UrodEntWmyqGkzKNg5rtUnkN5dboFYhQtxFp8uzRF2dJ4wiyFdxah",
  "key27": "3mcqNKuQQ9kPSe9ZHgoyJGR6Nrsh9DfpzPJJ7bs9i6NsG3XR6aWjjw3HmWivVT8ULbERyj6B8EWgL3XvFu6pwny2",
  "key28": "54pwnpconAkgG1tBmGFuDZ7T2o7JxqEird5LQwrRkdXfo8sPJtCY76abutFqbsUBB8UjR76P3zzyYQkhV8EbNERq",
  "key29": "hvrHKgYasFHugSTHwHgfGd3tn8Jmb5YsMkUUbLm2ZSKCme3w5QFdQGdxkJ313qWzf5MQrvxw3wWEDsjcZ7LgCod",
  "key30": "2qAt33xe4aFeLGdNU6tH2EcfK7Ydxr73f1sh9jz3JkKCgjt1G4EcA1pjsqtsHMw3EKWyyGZwnnJtYQfDdn2KtCQW",
  "key31": "czAkfGLtnnF6JdyVeyp4GV3bxZ19UcjutWreARkAY9ubBfnf6eqPU69ik1vjaPUncjmM6NbxBFhrLY6M2Ci9CVV",
  "key32": "4rM6H73ZG4LwDTw4Xn5xxcTPBCqtrfVCMBWCpSMebFkxHcik1CnJLSqckHYR8oTQ9x4jhN5Zj34dww9WtU5DLnUy"
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
