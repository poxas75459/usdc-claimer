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
    "2Z3BmMzp2SG2BgRvaUqhnGCgBAEMUki1Fsv6tbDR6YSq2cauM1DhFtw4HJZfSDwM6EWNrbwUz3diwMCdCnZKU8DW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ywFGN1pTuzbNs8FV3dwVBB2wrmGwxbactXW9Zv3FFpKVyWKL1tTtEWgNt49vzwKRAbob8J1hiVnL58B5TD5wXu",
  "key1": "2BQsEJ44nqyQdnCeEPWLwQd1YqxgZZYb7gGdBKjSCoQn6egW1Xkrh8Mji4rSds1TpRiVEJcDrTEqwwQ93KWZ7UxF",
  "key2": "3Xxif4aovSWUJhRpD4kT8qawtM8Q8bggCkP4TdWMdkftxfvk9HSvee42BhpP7oTiTR6d8jKNc98vHh4FydfqPc16",
  "key3": "eKAM8soUkkJxf9BreA2cTTTXjqDTxick8GT2CNGmUTNUAi92txX5oMfLenA4AbgAnK38Puij4KWhAbZAJuUj2xE",
  "key4": "CfB2kXoYebCxGMaBN8ZybXK5jmF1SLrNE1wTRxM5CWa3uubkUjteQJ617onVoHWEzrFNc2LThHu8cC8zzBYQx5h",
  "key5": "2QarVoQv1SvTTffphZ8q5naJQxg6iYjXYvgUsEotS8rFGuNkBmGWuGwH6mmoxDPohfx6WejyjpDgk3BxkxGQz6sx",
  "key6": "3AKSeJ78CAbs8asAfcpiHNUJQn3q451kpBQHUKFeLSF77LMT4SU9uv7a1szpfcdbSHz8Ls1gNduHkjok2oc4UENG",
  "key7": "2BnkpXEQ6s9RwZojerYFcc73wpoGwoxpxvjZoJ8dYcTX3vAXUiovFRuZxuqQwHz1tq7Q18P6xkxaL6cGcnb8XJKp",
  "key8": "4dbAZWG6jgSX6RNwBnADGYw671qegNcFx7zfpMA1y7J1CDVCTDYf6WBCNu25XLtYyhpNrLW2ZyHqyJpevaYndkqf",
  "key9": "2FYrgUCeiGnJvn32m6RqBrtBxFv8wjLu5XuB3oj6ihqCa7jzkvdNUJhu22PXGoSmZt6qNnxBnhvkFnhsVWr5h5vx",
  "key10": "5tY36BkeG1tGpHppDfQd87NXAvTn6JSd7V1z8CTGLuFNKpUvZXeiRJnZvNdM5WLnUwxBqJp6JD9RQQSoVhEiP5Jk",
  "key11": "2p2KN1GpADBvn42QJiYmzsdjS6MdN7rfBjdFT7mxf8Qe8mPvhN5yEHB7YtYwbLPbY6TS3EgiGwRYG66HEvXodUre",
  "key12": "5cKdgGcG6XhCCnaAYaSVftcpaezCwLbGN3so3AKuLyrBsNcFZx5LmZ1ZxS57f4UvsjhsSRnDJVfZZiCsZXaFgNLQ",
  "key13": "5TzUGAw7vyv5Uih1cZUMX1y78dztp5tzThuXXydwRhEFrzRjKiWwQJBsZpgL3VVGzPuvzNNpv2HrTzNbJnFmhhiJ",
  "key14": "5MhHgwAyazU29NVw4YqU16bWe8bLd3QXw393PQFaPj3wQuxpTqAj372u8seCy5KfukyzjUvCuhRsVpagBnzqaDBX",
  "key15": "U9F2tV98CE7RNLZSpp2fZrDnAL3quyyBJ7YYHnuShPDUFCxuCuHEFacikxLx9W7KcPtS4PHhLcZkzij1DpYCQ8t",
  "key16": "Co7SnWmEJDPKk5avKqEKHTxXmdqjUhgdFWB3HP13MRTHWuULHcq2gNzujguyvQX1L5sQgFHmi6STTEKVJt7Tjyz",
  "key17": "2XKG6t2dAKkZEsT8Q3KRAbrHFFZXA4F6VxHNsRutJA35RZgiWGF6Gvzk8FNYLMMoJUnFNeJmwti5CipLWyFT3gG2",
  "key18": "65EtpuQEgUA79wCLFns6mj3ZMNiAvXEbPd2wiHYfFCDLdZfWwi1Ym7qCLVg2ekfaKrb3jKZTZ3ot7xrFj8PsvozH",
  "key19": "5mCwaWxWpVJTYTZxsWC2iubX2JQ1j3gTopqk3tm3Vmr2ozb4zooLaVUhFyQRsPxbALVdW4wy4qveyV6bPAiZuiiX",
  "key20": "5FqipTLg5PLj8TcKUufhpMiQU2m8qSy6i1nadearRTVKYNRxG2Sb8HuALPQjVvePqJsSkEYnkgPV69himVDLoHfb",
  "key21": "2rZAPcQgUzPN9A1ru1F7nmmcM82SwHyrzcbEA4SV2Gky9AG1aGgpu58Xxp4PakGJ8ds26tbuTsrHWrmUiBBqzsvL",
  "key22": "4aEJ8khzsgWsYde7fWWLBY5VjLZuy7W6biW1y1fiDgpV89cuhPHFnmX7ErZqtEnqiTvNEPUJLbTM4DWvK34yw6ZB",
  "key23": "hTZWAdWtz9LcW5dsk76Qb34S3bhCpeb7duCuXRmcMwZtBXEvqAdrHsHKJcYVMjxr7QTfnckyxZUwFDL7CrgV3Yv",
  "key24": "2zrsGFZwBXGxPBXzgW6R5Qzgji94yaKRQVmVUGRvKsmuo93cY6jYupWUNtnJwH5PhJjUyeAgw5jAbrw6WmpnX9qL",
  "key25": "21u6evLVotk2R5YZY6Di13yRwteyHVKvBHNip5gh7D7jFFaqQQKPKaGscSKttCb2VGek5qLvzAEKSVDGNo4E7cbL",
  "key26": "5mbPht9vrAUyszzbTwEhg7LAvcSN9ETGkt52EaQywa5PfN2fpY6rLQracMaD6behwE63msUxzVpGdBY3zS3fx8LL",
  "key27": "5ut3jyJMHdTxzAXz57yEkUCU3DpZw4SMoqRUfKgLyuVfCziPbqrSa5sb1MMgXSjEAyvu66MrJHajYuR71ffYE1HD",
  "key28": "41CcfrS6trZ2BayPM28Jh38aJgoWXGM1qbNxB373DvFkBCS4mbXs1odWiT9woCro3wXs9ADv9ExgUxpXqBT48DHx",
  "key29": "5i3wWVKBiJjrNSzL819tas6NbSJvzde26nEXmyM7neyRkRN8Y5UBeyyW5eiixYPNQJ5Hnvg3Scey5GxK3meeoUm8",
  "key30": "GsLsYGK1LN3Q9RGd9r8vcsaQJg1Ue1BJazx9UZX5Siz9WraAeLox88Efc23psyJqAQCKWCjktTAfrZARJ39CnEc",
  "key31": "58EWbPqN26aheyJDfUQTShSWL8uVkeWSm1AY1WdpJYPWRFaKM4dsdpfUQDQBQnzutH3eNUBCnqSUorzZ7hZb9cM3"
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
