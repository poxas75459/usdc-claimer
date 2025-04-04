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
    "pcbtbh9LUB7V4VneKFkmybxH5CSeV1WL1RyFBTp5fcxSYVT7RoJ4R58U7BsiEWbpXuKabLrgAbrUvZxfqzrHLui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qg7FUoeKWULutTvGJYPX8NZMLFTgLo5WveDiJQuxSo9qj6XWa1KarUr7w1zTsMRxhng1wJwydwPiLfKeWftVTtS",
  "key1": "572CEVA8YcHPvMxbjxji1fFk4w3LrupE2Xv3L6Wh3UENiZ49BskYZp3utH8fqfqnzeoCfvsiyPe9r6CZYYcs7nT5",
  "key2": "5gxwCW6GFZRjvYtMbyNPi547yKCRvfSLvWUSN2RC44Ek1d38Tw5fD3JbVmi2zjVDF8wjQPi98FDrVdiyEYrTjUuf",
  "key3": "4gu2hNMP1r21VUKy8dk2X5bixrim6YzkpRKBV5BDyHHu3GokPt84tvQxGAeJXpJcFVRrj7MTYWPZDn9BMiiTAB1H",
  "key4": "2Fev334BPMvFUyTJZGSPt6ktsGpEvLvxBHQXScBLUTp9NFFV3nKfMA92sseewjD3WvW7WJ5r6HAzF2FfsfY9hFQJ",
  "key5": "8h4Ltt69PMoXTUAMT1m5x3M416XSkgtCjXwv5XjKxVgNMaf7eUgEjyTD95MSoz1WeR5C7bDefSVeVKQBbqqUCVJ",
  "key6": "qDHud9ZJauZdnEAMcZFVgXiJEntBs5DGVufdKAJtg56BFcnUef4H5nz6edJbiYqK6AnTrZHJWYkHCo3Qbc2fycu",
  "key7": "VbdTTydoji5FG2rmgPZzedUnKKRx1tXv7TSHyrjZ5oSCub3GNY4Hn5RAVc8k46RgkjwAZ8ybmyiNvLZNpD8VbeJ",
  "key8": "uSvmLM6YqK7ewHFSrsyDz7gLcBbf1PuFjfXJDX8P2nH7ekLmvRaoJfe94jU525KBgkdUhrsduiruRwLKnLNzYft",
  "key9": "sk9QjRYysRH5pAzFM5BKDJJ1bq7a6F1PLN3nHCHbjcxnV4bLBWVSppdsri74U1ZDCRQk2Rab7Bxi6aq6TtHrMEG",
  "key10": "4dec8t7Tku1Wc8L5tjv4vWonxpaL64kHoz3C84NC5jD1RqpBhguezbm9dWRSunJJHqGiUac3mQSHJ4UYcYQxY6rF",
  "key11": "4UgtssVqyKv3PjbYDsgoqzxgPCK7cP4a3yTtEhUGf5YDJrU2zVhmkkemEykvbUqgLy59JuQcnEGSLgVN5MdymW3P",
  "key12": "2rSAWyEDRVXgA3LvssJqMEAutUowTkmoKLaGXqj4ePcxVXUVHrC3nywb5jLqAVFkDmkoKAwwDLQDAVpu6ST6A4w9",
  "key13": "2bMXXqvJZs4QPDT8DazFtWXhZVhjYpM7mqzn4oDX53EsZb67bHNHrnnFHenMkWbVcAwjZVcGDMxzeFkuy19wotAF",
  "key14": "4gxzLrbV3sbasTXD9kTvhzBwbpQS3n4yT5Fddu99yX4xQdeXrQht9ECyyASuTGMH694gKdu2wXfUECTVh8EQDgae",
  "key15": "oK9nB1Zx8bMJYF7vcxT1r5Ua5KXFcRasCFiTDU5rZ8aa5V3KMHDTSP7Pt881KMDo73og9rr6pKK1rbggMQaaiGb",
  "key16": "4kpSrFQirNygCP9vFm5exr2PNedQsHytN1E5v2aE9aTvb3iJgERqyjEE7eqKbkQ7oNcegbSWiqagb1LRqxm4uqBc",
  "key17": "4bdTFg9mTFv9BcaXPAgv684NjhNiT5jZH5WggEmBdSa4XFLbz6YKvy3YQdxrvw3V7iwH38RU4j9U1jJ1sQQqcf2g",
  "key18": "46mv35RbJjZWU2GPAGY2n3UbbmyU59EdSGaxTrchYufQqJJu7SkxkisFW6LL4n3NGmvqjDCeero1xpVnzdZ8YQn5",
  "key19": "5g3AFGujGDw26LsY99rr8m1DsqxAoEyBgZTSVyPXDLxkpVqJsZsKu1mAhKxmbidzdBSn4F7D36uuej8xrwS2gdj8",
  "key20": "4QJXYu5DxbsN3EyYeSs6aeFEqHS3udrcbfKWU84K91RLYXBYcWc8kUNrb5CDkqbXtYrnTbq5eoCYKGajxPeUWvCz",
  "key21": "4QCcj5KkZ48XYUbg2qCME4qPPyqw4QQWsPVmA1hS3XWwcrjoQ82QXVUQcFCRp1VJbshJ2hVNwMn56UqeGq9fWKpa",
  "key22": "3c3eHQN66ffeze4231apR8WGeXeXpd1QC3hw8rx5BikLFBmQn1iQS17SmwqxoyUnFFWby2SiHjtWyWq4wAzTrCj",
  "key23": "5SSfVG67EU9HrgJC6UVCWn1sUMREw38okNKKhrCSy72jj45mACCaVXykNVYh4aG1ofPFnd8R2do8eXTUWdi4STZX",
  "key24": "VUm2nB7w6Rp2LuU6N6jtcSJPSWW9KBSNerYH6mQWBDKu4WrMXrkfYkhv4C422b7PhPhyGMQYeBiJAKg5Eb86toN",
  "key25": "2E1HQaB744RRNpxp9L1cxwiVpVLpcgo65g4d8taRmY8tXzpQz8NNbZTieFB6r73CP9zuBLys9Ps6vAS6wFJRibgk",
  "key26": "4CpeVsCkm75zhhE8DnrnhjvbySN9HQyyGyzWRvAPXyPhHrZZR2ou4Cz9f9bwgv7nTNUVwJ8QgVBRwJtKshvwWRj6",
  "key27": "3rkbKfroTPJRh3DTSjzp7pVV913xbxkpNNVbabMNUNVCNBsMZ1qyShLFBN2o8ETj4DqXxRM7ujdKqw1tyWBTewfk",
  "key28": "52hwMDTtEzPiBQgc5GsG2AxNeugcHqcaMR8PtVa298Vn8E5bs13LwNiQNsCbcRdomhvQuttnDWfEQSNNQ412eNrB",
  "key29": "2VpzZ1oqihL5fuC5o8z7bftYfRhReTXJw12y86A37ST7uUhUBEQpM62AViVthPL6k1gUmoVu861jE8JRYJfJfnaX",
  "key30": "2pwVWNVNHGDaTpSeQ2d9pDCgQGN5G4YWa5timTNcYaa6C9SGHJLptNUb5MgsUjgfoUeN5Pf2ePHsZDKW1RpbgJqS",
  "key31": "kFTh57hed78mXyFL45fpwpbYKMgJp8m1NXzNtdemHB8WY8BJUJ9gRtXfPyULUoYmrwGtfhBziDTfaAUWzJkzdZH",
  "key32": "2ag5NS36i3dHkzNFNXamtGx6TMRjtu1sxxVzDYmQ2VTSsMTnW9y9GEvMMnoC9enNFe3aSC4DXRaq2ibyxh9abXmP"
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
