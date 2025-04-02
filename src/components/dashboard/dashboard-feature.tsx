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
    "43MLkJxhRWzj8ytXjK44poRnFTyjPCmkxrpzoRrDWo9zm9W9Eq8Vx6MaQq91zYMD46oWbh4fKSJNhbp7SpdRiDQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24XvSb5MrB2FESw2w472zNzQgPRKzQsX7z56w1coPcR5FyCiLpaMZ3aGuKDGJJRmP81NngaCa4GVw6XRVnzzdixt",
  "key1": "qa2qGb2GLryJSjno3onxJPcQYRP9iRFieR8V9kMCTtdW1JhUeEzqT5hiwANmAy2j2vqHNZFUY17nvvcUq1ngTNK",
  "key2": "4nmM4cPPEGuP7jKsnB57R6FKx1tkBwJwzoxqZxwnwrst8smJ1HaGk6uU7QWMJaueTWiAfb2hf5pFkeAjy69Vb3CQ",
  "key3": "4NkRF5iSK4F5cG137N6n5qQsRFbSfz8vRfzX485XRLw8xax9GACQXmGpBockHfRwQhXb1CTuu7AdWxdvedZTFrVF",
  "key4": "31prw2eQk8aXjWeu9czY9QXy3YVV2qy6dYod8kX45CncFy9nRH62QUphWENvpKEf4d7HUEi7UkBEWAHJ2UZZdK7f",
  "key5": "5AWWZiKRPXS4gTunvjPwi46FySRmRBC85p4TT9gUTcF55Yp45UgMwgVpuYZu8NAeCSm89WmFAAWrgBpJrRY7PDtc",
  "key6": "4upUzb9QW3vR4SsxyxW8zHdHgA2S2j1xnAfQX6p9TfAJLRa7xNJYHkCeUnnBc9de82ZbhavjkkTSjTkgVUvYpK7Q",
  "key7": "pTaz3zBJpjW6DXpQUgfJmSj2ZofTyADpvtPanZm8YZFSdn2jXe6qL7rhUoDdZkS5nxG1JnTn6JTLhVjwjXTRitS",
  "key8": "4PQJXXVauJDpKeX9PBw3Zm8tZYgHKSkd2m7QSdPvZqK1gRJKtGF3DzoiBc2i7FuRG1oxUcdNpBVCW8ZFJiUJXFZq",
  "key9": "zq6RbSHwWoPeqRzTGFceDZD3BW9Z3c9snQg4u3BKF83Yb2PzpAQ3xUurZUWG7nxhf9WXrAZqRu3U9EE5DtZgjBv",
  "key10": "5uKY4hvyrdd8UN5XMoKs2C8ZQ6RkiPcQyuu9Ubfetkgo9GawEhXbsYpPadu7PgvYCYyPuiBtUeV7U5YgyNLyP4qV",
  "key11": "22E19gYBgCuCu9GTLRsuyhp9u8AV5wimY9wsE6bnzj7XqtHKUcJwayJwTRBALAK27rbZsSXsm4xNhgkU1q2wHF9q",
  "key12": "5PaQHoUU7Z8tkNr4j6xFjYGi5mX1oabG4GgkhdVhAwsGrhjuUr2KRiNZKphC3a9HAqdQfmH35tj6vVzSTMd16qpL",
  "key13": "cc2my9knicmazyrk6Xepc8XTgMGGdrwr9t9F8yz9WzPLNSdnN9e6u6B84a4QNHhegv777Sc1RWVrt4htdXSK9Ht",
  "key14": "5db5AkAx3TysM5Yu6UbQm8kNsYRq3dz5xcrWLAs6WndZU3rjzTwS42r5qCDkkYZLoDVQYnZVTu6Byr4QchdCvyAc",
  "key15": "45hRPv656WbDdV9g6X7hGvKNkKsSwduLeW2byrmx5mZTqJNgyNgJ2a9XygrbZScr2eCwTeGg6xYveTKym7iXQxMn",
  "key16": "ieT3g5VmLBN7t3CdsUb4r5rrwFgqkA5QT3a2DKuaaLDJntRrYqcKVUKws8YJZWajBnfJ1THHMH72FdPr5dBPGeC",
  "key17": "3mzqDdr1hWxKmPWoKVWkCmLotpCDArKLpAQ6JbThgUV19fW7Z1mfaf1x9x6R7f9Z4oJgZx1JCTwdDHPXSiFgUUeJ",
  "key18": "5foo53AGcNrCbCV99Et6AFPQzTD3kQtER6eLizabvE5epYMKsnEET6De6qUAt13pwJx3fKUwh8NWnmb16Ckg7d3S",
  "key19": "5UwSuy6hrUF5W5XhbpuFB5tT2aAgF8xHn1GqUeFSsT8n8qUfPZ9RhsqD4teWYRQcLNnjmMf99aXgtAjMG4U96WWG",
  "key20": "5qMLoUq4trbqb5MUeJNnXqp2hNXBUFhRG1t9e2F7jCbvNseDwosFJTY5YYSr1Sx2wYX4k6tjgejiynsKVAAynMcv",
  "key21": "3robLVWWY4rAKMmxmkHBcJrRY79gKH69M2FCcgFzdqUmQXgqcbC7BMPELdhmaXNgM8ps43qNhUfvzHWVZbTjhs2q",
  "key22": "22o6csY9amt4YhaQkpkVjoLZ9WzURVCix2mhjH5jixmn8krkJrcTyTcSTojyQqzPTt3HzFxwPZVeSkvuGkiDUfBt",
  "key23": "vwjkGq6EFEjut2EydpAPuwBJHchJLQqqugu8PGk3dY5pjZ4obBXb2cPaidmW6Ucz9B2ZPTivHFiDeyf2CAd7AYh",
  "key24": "2nu1DSToXiomw1DaKdr2DxrF7wywnkgxJZLRzjhRUGQjijD3z7BLbdqpdc9aMVbCHWKtjjLxGjqqbxf2PJyye77o",
  "key25": "3dXwA19zr4oASbjSMnLrJCKb3aMPSJCoH6SocqbfrHDrh1sThfqmAMoSwzX4T8bXgU3d8uFw8AofEN5UM4JK1CaK",
  "key26": "3fzJCoJCNcfRNcCj2HuKzG9Rv7B5tRbGr9vxF7kwsQqb6M6tyKedHDx9UMG1WXa3sft1g9n93WtkjA4PpNgK9YeR",
  "key27": "nzseNqRxFxpNZmd8kAJJTjPyqsjiHw2pA6QQ7BpGC2fBvsQky2XDyGu3avJ1JcBbmNNKEGorHfVh3ccArvwsvPX",
  "key28": "3RkNsjcBRuJk3vuifyVv9xQp9Dy5GXNBkpzhDtVb9ZHYfCyTYGj92kgXipwhDWJa1Q4b9auoEXa6gmooTeEAJqST",
  "key29": "4CnFyE7cTXRkiD1MTCig593RYN9nUifY3jUF22Sr9EnmMc479kWrmgbR2TKJ7bixpZkSqUoJghaAczSfiXBVSkRE",
  "key30": "59BMvEkTZ63isJK6r1aVwVLJBYVm1GpYWzD8ix4SYZjE8A9qXvFEWnYhKMzqTZfPHE9Man26bWzvSiGizB3xx3Vc",
  "key31": "3tJucbyFCed4xUb77PahQFW3fwMKZd99pFZ4SySh1J1Gfxv8CtfvS9LdGq2NaB2yuxwoDN4dAGUi4dVeoevjF1tD",
  "key32": "VAhjta2onbwz14HAqXTt5CNNQd3Sm6yG7Xf4dDQJ8UgWDKWb19ND6bDLeJnEjWqGf8xcZKJoCgBbRZ1mjU1krAA",
  "key33": "5YhTHoXXq49BxWrgVCHEfNZ6UmyAKTz8fv4fjF7Q8uG482tp7cnf6UrxyumVUWyZLxaZqjk2bDW1gNMmkAqTo7VU",
  "key34": "3iKchYck4hYMXzNK7eXKmCGSXx7SB2R2KQUU7qnwQZADfxMzWf9TjBR8H3bYgaPBmKiaA7GUcbyJfR39SgeLFit3",
  "key35": "649zYywft4TCDTAAR1kQjEy6V9YauTC9BU217CCxR8juEF9ReDLEnhHkPcA3ZDd2sWBssqgfvKBMFNhuxqFji4m9",
  "key36": "9jNXaxVCjBuk5pZd5vShsDU7URGLA9dK9gCF5jfc7CeXRBRbsnxeDgRHQsU9XBXgeHQQ3LhC2S8etmWPerFLdQt",
  "key37": "4tN5mBExpB5hHr6c5xpmf2NQTLq1AoM5Cxo2jaSka2pKcnKhJiRjPe3dmDq414T4SLvSYJRUi6YK4SesUk7ccpo2",
  "key38": "5FoPEjF8DfEHophL7CvZy1v99kSDVnp2MGXVwqiU6mXZqBD6zMsQjdsg2Teau2m4zT5977vJ4ohxVguVp5vYLx4y",
  "key39": "3QK8yUE7CWngrhxFPgbxSeDBGKdax59awc4KrZUfcjwnvX7vf8vVnvRLzp3bp6WKDjAHcFh274w2GdzDJhVN4qT5"
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
