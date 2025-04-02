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
    "5JmMwTpEYr7RWHQ398AS1F2R7JpAVf9CEkBZ9PA4fya9fzBYB57ZUgiMi2KU1pasRjWuXuFyz4qSc7BhsmwLFMrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hw67X7v3JhVmihYjHiUmXdkonb1PgvnyaCh2xj1vRfz6r8qC5ZACB2BxSmmJGnkz6QS2i8ajNt6oszdYrwL4qSg",
  "key1": "SgXRWNPD9VijyehAwtpcP7CeiYtwZGNbxZyoogaYRzTUCvFWUAd9AxMQLNaMYZQjrWaoQvz8KPee9AcpHovGdoW",
  "key2": "57vPQ8WPatrFLDALYNeZBXJ9ZfoSTRuayNhg5ErXyXdq71Rf22VmCqXFNSyVTsdj3NA8YkVeC9iegF8Uri1ejHU4",
  "key3": "48LJ8PSv11bb5KafdDHrM84Evcfd7m56y7oeKeTeAztw51nM5MYie9qSmauFWxhy8RrKqTqwF9q57ANwcY84UsQg",
  "key4": "LTnYnRjUopSMVv1WaHsyNgDDLJVRH8tsRp4MmSZetECDtbp6qDKyL2ARuJSuMUspVCkXohzCJrb9ugWTE2ePdah",
  "key5": "4YZJL5NCSzVyzTy6ee3qb1nWVQmWU3CEL1PW3NvxsZRRaxfq3XKaoFP9BVyVxvc3RuPtobeZu4PuQZoWgs2MUUfJ",
  "key6": "4YLLaztU3JqtjE7Q23yvTifbjEaKpr4kBzLZu9K7Y5JciNVpr5uyJgHwF8dTyw5mT385YBsxfaFhBYjT6UBZ5u2o",
  "key7": "41ZKj9ZL3H7gPgwZHRUWKTyEVfXkNcbpXWVznXJfxfiXQNgH17sirG1nP4LHeU5hEDfoXNvWMAZDTiV4HpFNU9N8",
  "key8": "4GPhzobbh3y54TNP3exdw85v2A1BvJn7rjMnTdrJrKkkCP8Lgm7fWKUnjExNKa6zbycwbtPpZpjgVeTAjFGCJaLq",
  "key9": "2ja5gtmTDABPJ69ytRcugh9gVoAY9KdiyiWfX4h5nRWNwgCzpoFQCnk582yecMHz5JXB4r3LymmkLTVBwB2WGLyA",
  "key10": "483kY6QPLxxK3Z9ApsVSm3JfaTGJ1znCcn5AHZqRBuQyFqz2YhDm1so4Xz43L2zVQkF3qA8N5Tz9kzmx1jrKiyu5",
  "key11": "2mTQvaRzLHQomHtACZfyHHrp6XwfRa3vzrebg3ZNJGC9GwwoxDX8U6cEQpfbtSErvLzERoi1zFkYWPoJnoSTPcAy",
  "key12": "CHS49Tkyi9E8EE8vL8H9GQNeXtdhtir3vuf95qmESE3xn1SvNn3Nc5ZQ5zbD4woZJdxf9WXyGsad2X29WExXeaV",
  "key13": "uMN6pz5ec1fPUYmqvWHnzC37BTfbxH62yHEiFhNTcSpcSk46ufUMzkJ8mMm6kZg7yJ8nKdHkRmv9AGA3Uu74ENt",
  "key14": "4T87yV1cGAYMizF6Mfk6sLJ7hTJehojY6pquEt8Kmaa2q3Yx4CJqhLFFBXZZS5zv6EkUdpqFG8mR16VLnEhdijv8",
  "key15": "4Cf3AyEANHkpBAvDyjd7EWQhbMiWXS9EAVmSuCtTrLdLqCFJGiKhdhW2JHUzFCcH2UXACqXSJszJsbnsD5en38Kx",
  "key16": "3CpXazXxZsfATbpNXiPzLxQKMf2LjjLR9nNDLev98Q91LroLiNSz1Th5CavWJNU7p7i1GZDRyjm8xREoqNfkcKwU",
  "key17": "8eSJnKt686SKDiiQw5gvCRVZzxGuUARgnkxerb1jrM3Babeq5fGERJYWDMHm1CXqPzYVcbJuBG94Fh6ABwKfPXR",
  "key18": "2Q2yxDV7awWqxizBW6P1sXkDVdPk3Wq6XtR9nWjquETED6XoYg6g1ZtUvANWRD1YCUmXCszGX36RdXeMQEmJNyjA",
  "key19": "ToppD3SDuqXDX7jKhQ1JEMuwy6miaDtPkHKArjp37jHaiWMStwaRJgXHP9RrHD7rsKxuPkqHdzqBs8Z5HdmhhjH",
  "key20": "4mZc4susSKdwmjpwJuh6mBuwBv2Zdh7fykJodKJy5UDiqKvZtKVN1RprnHENXdF3fiEpvkpqnWnbF4hAjhcqA6SM",
  "key21": "4Qkv3NaYNhqhqbZfT3cCw3uwuqBqtgkkCY4iQDg17Y2Xe5gweMHhRKPHKG4QhoMHjZdGPEyYs5LiWex2ZERDZF9V",
  "key22": "3JdxWoKdrAAu49eUDSAuAUDLfNGJUJQUwMiegZkcd6HGxqjHBRrrGfjPQddboZgQexMdo5UHkiGV748STsgWNsfi",
  "key23": "JYFKPZCu7mnqnxgyDigxzeWJVjTG83ZHntmtjwHdxvGnoF69g83wm6AxB8uaAezW9cG7W9yv6fdPTNLDmKRPbQk",
  "key24": "3t3NBbasBTNSY2Uo5CMTYYPSReRF5m7Z4c58knwZv23B7WXhGz73fgXNLXvUCz1HQMucBqya46yP68gBWx3uXnyw",
  "key25": "2AthxQ35o9FvPkSixAjuNh6JKQVres8gCvZLm6aK4iZ54HxqtGE8Nq4tuZmqJVRfH4QYJLP4dsdbXPJGvo3zBLVJ",
  "key26": "5rM94NV5vVCnQMXZ2fmCtSYcT22eZXq4cvusn8G7JxskXXAEbjfcwgyn6rk16fr8MbDGMn5VDkC7ca53HtiCyY2o",
  "key27": "5ZoHrfaf6P24fp96wYAFecFWZ6ZyaDDbeXj2kDMGAc3zqcZKNVWJqjYqGEuL35vnnELTaLtCFhSvjLnSS19L4tmC",
  "key28": "4hAZUrvaeJCapNAWffvswCVzqR8geNvnThY4gpzHMa3HDAHYj2zqEDwutY9aFPMzQpeMbkTeucXss8YesjfQkpuP",
  "key29": "4HJTyCokHutBWjjCu4as6VPA5KutuNCbiw4wWU8V4shghrrgwiEgRuzDohn5C7TyfAFgB7tBwWmBfVvH6wxRzS81",
  "key30": "587PpjZqYkBewniKWN71yKGke7dANfu4FRjj6SKsifczd7f7RZK2eTDJ687cJxF3FvEYNdQPBcKwsbQxtMCBBFw3",
  "key31": "36ZvNx7BVnqWNZmFhXNqPhmdYka3XeHshHnW5PAY9sqS7YRFJzXXts5DRX2MUGQbQ3wA4c3gk4wmQJFEBhVekQaR",
  "key32": "WcC8UqqNShGvWRC8DEZLtiipqDYJXdCDwfRfsaq8ffrLbTMVfBhAkVLg83EuC5nG7mM23ayEPQKQcufCMHntRvK",
  "key33": "248eYHSV9AocKQFSRK9A3S53fWpYWyV8gT4boNMbRyPBaCnFsBuGpcAmP7mLmVGnyLJZrWkj9Trgk9iRiC5gMWcG"
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
