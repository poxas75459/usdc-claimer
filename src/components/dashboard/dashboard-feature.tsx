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
    "5FasSBR1NxK2ZiQexGLRSXh13gjgXAob48bkUtzQAwtYVkjqCSHKrARb7hCfN5hxHwpi6eW8Yk3nk7Qykqj2FyhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZDKKWGna4hD9DDCFAK6B4FJMeXty97qKah6kGrsjAXL9oksEH6wwLSiCRtbyYoMvJhkfG71Y5HBkGxYsfTDiGH8",
  "key1": "33QWwkGUry8JSffVaHFMj1XvijAM5861bHKLmGpVhD1ozzor5ft58AWDrKAty3PoG54oYvWYgMVWYS13QoNpKZcA",
  "key2": "ZirGtq97xWkEtcRnbPL8RDEGFnyVPBjxq7NunRi24DFkUfpsFxiJ9NJnrTzmvVVcBHqVbGec2cKGEZbgyG64XFY",
  "key3": "Ye5HHWnoQE12BxXt1h5csMsmzYFsqFiAg51DVfKeR7EedwSrSKG6uyuBCqYXmWEDtqnGG9Kyn1Cfrg7ovX3aADe",
  "key4": "x2j2zt6TZZ2j94CDowBmNNx1jEAfTQzZFWNbYc4Cy2TT2LrfMkZoHJoFtJs1BCogaQ5auEze6m1gjwUP6NYkgwb",
  "key5": "uwAeg76fRkx6Na5G1Fhj76cQNn17TLmkt8VFr8fRFf9dgtQNnreBCxuJnAW6XGXirBtF9Pxc5QgFU2i61sXrEDK",
  "key6": "4AGmWncWVUZtUqVTE6b3uH3QbYRisdau8eRVpyvnRXpGZw1JcekVbfsd2j4Thomy98KY5qKn3Y18Wxb6qvSwbD8o",
  "key7": "2c7WzZEd5icgjBWqReEf1RuCN6JeppbKeMJ1zHGZ3KmR1yjfReEJkw3U2d7KVRL2o5ebDwkvBMhjs6SiF46JN99z",
  "key8": "4gF1iyzzY8T6vonfwnC34uHbPjN1QdQNoLh9i9izwvV4UAE62jgQUV5YWbtE8vDEPimnneR8i3tDJsxA3ZPJDCq3",
  "key9": "4eMg2oYMVC8zkCYBTyQQKrNvTXPhY472w8E845wTMXXLH6fLrTmZFDmq46RWke4b9LDGrsgiTCCGwpqZ4FjqFSQ5",
  "key10": "4r2H277MW5XKHcJKWqRPzcoXnRusS4zBiU3HCBvEdFWjyCfViwkx6pY85kRX7JMspy8mDorpi9PfUXhusWSv4cyC",
  "key11": "1LnJ6uhGBDxzL5Wgvj7tu6ktmsS5AQdZ47Z3RAFqXR37cshkxmFMZrFZSU5ttqe5GJiZAtTmU5MpJUXNFfdRD3s",
  "key12": "viU3dNiaUuFxUNB69h3XJKMJbqUYZsvEZcn1SEfssVM3iKNbYdTLiDxhxqp5QWWDPFiPAkRKT6uZytw5VGnknyb",
  "key13": "5kgwMvKpYHG9vPozHciLCFKoypc5Qr15kqnkQtsD3sMjM5e1m6GKvfr3q7aAQwBYTna4FwcCY9uwSDmwyDYMDMNu",
  "key14": "48rnkPRFY1ZMH3v89kWaxqKLrMVqnKdoEjJqd28Yt2ptgihuPgifAB4YhbZxxMam1CReUCCc7m3dCU4S9jkWPw8z",
  "key15": "3e3J24XckDR5qKNUXdiMSoVQNX8d6vwGQpBgfc6Vkw9n554Q2H1eWMfLkC6UzLUBcqoAKoEe7naR515VpxK1JGa",
  "key16": "5WPWmzJWaCymmTG8SQY2qy76gJwfnD3fB8Qpa3nAijLceCmA2FFWrKeN8rvefY12xpnz94zoz471qn6mjwx8gdG9",
  "key17": "Ndjqh26bh6Losd3ZjAf1yNT2Z3styzqYYkwayvQqL65rdfGX6iuE58yRPBQNTGZFDgiA4NRz6tf38APJLs2AJ2V",
  "key18": "3Zkz8kJvgJQsWbt5nA245jAMfbDkcTDLRNyGpWf9pjwSzGpAYm5YCmebzFgCz4d9yWwj3pKJGBaVeF5JtnJgoKJH",
  "key19": "4PNGnUQiGwDu8aWgJ6h28MMUa162UJvduc4crKZLyJqG5g37ycL1ZQQEMVoYKTB7YrTSVoyjjoDG6dJGpH3NNU4H",
  "key20": "3k9DfLgousimHEqSj5XQN3nJnmLJExm3i6WHwwmqkUoEurpFLyRzbL7XGjvYnykwH6ZZWbEHdxYh1ej1ChKk57H3",
  "key21": "3RYc7gsMbBUUCtrpj5WbsoDhpu9PAq3WFZSKibNzKW8dN3NaDmHySRCZQXti17SCa4e9iEcfoLXJ2XAEWvNPbbkj",
  "key22": "2jEFJ188yEgxwoKDKHz9Qdwoq3TvB5e2Y8gMAdAP3rpjijC5n4sYgZnGucZR5a3dhZPWkw8iqGxXNjSHwDTK1BqT",
  "key23": "48LyL81YJiD9jnAnse1FGAKRaprHxKCrMAuxWtH3cxrMvKmPY7Y3WMuS6pViSonRWLQh6cKRpxGnCHiEDVkNCU68",
  "key24": "87zbjqxYJQ87exrD7j3fquzye9JD2F5zT8Xhb3kMixW3hpT8Gzn3gWyu4JfC4uXfYWLDZqLL5wqdZXeNJWQmxXY",
  "key25": "3SNQuRWQXkfSFdq59f8rMk3R8huzezwBQz8Hdu8pzUjYjLHCfUDWpNS1BHpCpuCyYiECGBbEbBoUawSuWyeR4F5T",
  "key26": "5PcuKUHFvVSod4RbZfBZLv3H2e9CW7LuP1o2xjb89i8m1pKTR7NgekFkzVkQW5mje2Yuj2SdJCsAbHiik6hxSFj4",
  "key27": "3BpQ7RJnC2kdbU6QrZHbmHcaTKLRrVmxSU1pHSkoGwrHdxi8YNLwiw8Ug7dEKXqycTqxZPDxSWZmNLcZ9WUiZwd9",
  "key28": "2iKDzP1CDVQruo5to5VZjUVK7KKcRj91F9RvCkWrdCg732mUp9f9UoqWv8vrFQobgPbpAtkiXqyqmssBo4TEMPhB",
  "key29": "37t1YXgKMJ6BNooqtkjYvWpLzU2mFhAry1meVxtaoLn31MrWK2SwLiaEU7LvQF5NQCEgDAPwJXw1vfbW489dmpfP",
  "key30": "3BcEgv4Q9HqZ2vQNKcbjSfqpuR8wLjxMUhAbzKxVncg675bkvMcgY5wHKemaPPHLdZGnzWvGPezApfisgEr1JkWt",
  "key31": "349tKoXpZJWYSuuPmRtVGyKWwTsgccAijpxg3bzyeBr5jeb4fZFq8wXgFEsepbt5Na6URJTRukwS4dhjApK24ENd",
  "key32": "4vkx7dAbvHo51VGAjjkkcmLe8DFEKmXz5kGHX4KsBTRvrK8ryWE85eYvcovybDGMBAq1xrWhpHEvFW3enYrPCU9A",
  "key33": "458WDB2Xhmz4ycJyqGducwRTTDJAZtk6bPsekPX74bnkF3cADwGUz2a9VYmWr1N5iemkiCzhHy6FyGi1uvTGpyze",
  "key34": "4PFU6JhmxWtLDVzBv3wRSRpuwrbS3SBW1ez34KoMvk7g4Ee6xVU14n2RSRwq2vFgDeDiQ7pAW1ozaQnvpyt4mJ4X",
  "key35": "61jQJrxK1Se9B52znoQaZ9pf4HUkdrTJTLmXPpRW2DJXntyTsp2jgencKqHBEveEuP7EQES2CVpMD7x1bZB45jRX",
  "key36": "5w91QGvSm9ntJbtjTA4hhFVe7TtsaTSVMPDF2hweuAvQEfj7yeVXaJg3wJnJW46Ki5QeqVZxJ98eG8DjDuDtN1iU",
  "key37": "47bi4FnJTNo2F4s6kvEXVbB9jU4gj2p8DrddkUgPh4UBy6gY1cdvkvHjJnynD5r9fJtjURkHnREUHin73Px2DfpA",
  "key38": "5KCeFMGFgnf6r5wLnMEcuPbPtVW33ovMwRr6kn3WckEfEoQeULQARTjyyQTARaZDb1xmQJdtoSVoiBPgUWzpotyG",
  "key39": "GCbsVSPjaWVfo3ny1uxA9bHBpYY4MARgRADpuAn4wbYWLunAUQdTc3jep2i96vqfQtjRf6hPHVucftsVhR5SgLK",
  "key40": "574YotzK9MMXjeagC5AYkiJUDbKf1byvqhR2ZVhrZCbPeFLRxmNaAtUWzEKkjJ9QuyacFfmX9jZ3dkkTpLhgMcqm",
  "key41": "5ijAnD93N6E2b1jJ7Zn1QvGHd1aumZGeAPJFrTZ1sVnd3RRMf2MZ5hsFJz9i1ypcDfSB6kgrRqob9GtmVeuZY7Cq",
  "key42": "4oryT4Pg4yxCLhYE2mG3XEWZeEwsNyHNhGUBqkFu9te7GtfeJpSncY91Md7fddNJW5o7dyss6DBhs3qGvQJqysCN",
  "key43": "2yoScLnL6FFYSZVPZEn3rse5tqg12o8JXz5MaN2DPRdP3F6rMj8xacNwZR4aL8TakXwLbxxU1eogr9xgPrBZj5AX",
  "key44": "PbMAUbYrHQAko7D5ACuqDc3QEbJF5YmTZuHSx76Fzpw9RtgpSQGa6Hbx8DQPKdA1bgonULAtnnWnmsD3WVdqWfG",
  "key45": "25US7zaXXVEiP6VHzRTdqwyCFz3dpLswTZeHetkQoooptyNMNvjy2qGRqgTBfcZVHGYC7R2E2D3cCSEyJVsM1TGq",
  "key46": "5jHLaX7NxWHg2UMADEuYsfDCtwA3iKBCBPurka9afVN3abSj4g8mdm8giNNSdsvFwoEznd84dBZWVX5sPqmzv3GM",
  "key47": "3SLqNVNZZ8QRgYBUrisp8zudcZEBHaYJdS11TeaeVmSMtMi7ZzZM3hMWpgfDLD7v4bsLiGeKxFFJZBtte5TwWeMY",
  "key48": "TM1WFETZgWHuXoAQ4HTkESvgSMy5q8VyddwcJtxquMvp9nYeWvtBxMBVPfAwbtcR65UerKxwvnEUW4XFatnMHLj"
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
