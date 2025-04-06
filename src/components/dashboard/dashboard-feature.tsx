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
    "3nbbaTRxGJRzcRseusDPLDR397htXyMiUtzyX3AKc5kCAE2f24pcbDCc24AVas1WUN8csCdRr3rwit4ZZpqtGXaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iuGN8EG762mJc3zofFgxeWg843VdUMbKpXvomKj6G39e8jL3478a5H9WzmvxM72U12vjYpwumB5oj8CUUxEKoDy",
  "key1": "5oQ7DA6YaCL1fZKq5pBeBf73dpF75i8FfTHW8eKzd864w7ncbxBnP87CbGbKGwpWUP5cukskv97FKHuQXF9JaRVc",
  "key2": "4hZUtoASvmmQyrk5CSUb54DTQCPoN8HqfnhCBpP5aQfNz9eN7ghf6DoV69xkE25eQ13tsfkfxq2wHZt3icfUYaS2",
  "key3": "5aeavgBSAq91HRHBvK1byrDeGeeWuFhc3AanpUsntyAJh9z2M9QQsfYixzdWzB1KxZX1uAW7fiP8BkY7RfHvwvTb",
  "key4": "aiDWdkx9hhJVQeUmr2Cpr56zwvbnneN9FRfvJi5A4enaMPiq1DSjTWFp1xJYDPydKSJcPTvfy5aCmBVTCsgp6fN",
  "key5": "5SkNvXbjgZckyAaH4i2GwM7Cq1NVZRQrsFapzKTV4GugEs2BUbQiF5ZLeKMKbbweXKZcyLNKf6qiNBGaj4ha8xN4",
  "key6": "53PozFdRBqRiTDPbYbeLRzQHXKoiwXHDrAqHctBFhDnNFuSJm2BwK78mHHcqJWDqoMSnYpTpQmHkDRACyRLCKFnn",
  "key7": "424ZavSpL1Ky9SVf5tc3Y2QQ7RKBuAUQHRLkuqwQytSiczx2qH6gyqjdvbYJQKaGsVazCbixPWeJ4fr1sE2y32us",
  "key8": "5rb7Vb81qKJgo1orrAp5xxxJxLLkqU1LnG3vDuFSxUgN3kv517FnVneAnhxNH9B9x2p49L25WFNZjhxZkrUS1CFA",
  "key9": "2CEgFkR6azb3C1KzHetVUoxctEKCpmCRN1Ef3RF9joCUee9r9E8zpruB5pn4KxkygtCEpbz4p1gTQh7q4fPNY8L7",
  "key10": "32GJpNt6aLMMNZoyEtknqqUx5HLK78cigh1GDfqnUeQD9jtr3qrzgftxMw4WmD5BkSQYQAAnDeJCVATtdF3Z6Wxf",
  "key11": "5mHrQedMNLQR4dN292aMA8XMy1rP74iDPddKXY75FPqqjHMiw6e7T4V9KX6HMFSkeNemV1bwACXsr7ZEgatP4iuU",
  "key12": "5PC7d9as1WpG8Tq7pSTFJWCkoL51Xabsu7jLHAcFTsoo5DMid6fDo9ph2y9r8Pb5YqdP3GbvsFc66yY5BNL1bgBK",
  "key13": "U1VPPa3SxcAYRehH7fnj9UJWsjAu9uuMBSCvPPS94C2xUGbrAan1XLjw3MP7KAXjmiDEvfTk2i4CoGMXgk4BtAo",
  "key14": "5zfKQYq6JDo9KdzFq3QzNNkySwrMxw1MhSUzBZkK1VQyD6tPyU6rRg8aGpvHfZoATFYNgJHSGRgHKuvQKi5sLkzq",
  "key15": "oFwoWZLEc7hKKZM6XXefzCNd1zjXR9eBSF6nPD2Hv8YPmQXfQNvEeU3w3mFs6NoaP9RSqHQVUhwNkET6sErriqy",
  "key16": "2MG9nTdDW8ZiQbsKuKBABD4qJWQ8Tjh9qVuanPuPmPSkTj87TTCi8T1rNqSMVnVPujJqk7BtXo4DwAaLcnw1a7rj",
  "key17": "3fBHy5uVpxhoAAbzH3Z1X9L8v1pjHTs73PviEJzxtCbzRWQNAd1BM8U2QnyingCV2gfhPBGmbt4KH36EVHoZcQMX",
  "key18": "5tmiLLNP4UMUUt8CX6n4gLw8aXF8Ad2YsN8StG4VLNGWFWMBGGinryMH1uSeGfvcQZhrV1XqjLm7EYrLMeFY2uAP",
  "key19": "5Ef6WCX6YqiZvTScsv5KA6CYkjqkBBqDSm8VcC22qoP6ZwSYSiW8j8STRPf71rukQ85mc9AvvZvEn28WvmEiVjh4",
  "key20": "516p8V6o8iHhDvyF3X8gLMVQYQ6w2wdH2qc5XPRBaAqpmaqYe2RTGHAZkKjDLa9DrucV27GtduKaJ2SUehhSkwXi",
  "key21": "4C4Qv4oE68FNtBtiiZyA9Dx8hjbX4mYyUFmYL6o6teHGicSUhD2XPRjn5uSXMNziFy5L6JAoRWdwqM7H89pi5Vz2",
  "key22": "48UhbiCF3C9hnQfk58SEYRFgJ9h6D4HW9HDHnY7Z6mhocEEEtECgdpgmogVvWgGDsyZJWkbAjwFG2Miz1tw4eA6Z",
  "key23": "4MQnY4FiTPibQRCqkEwiPicLLCzrH5BoN5vRvxmJMYqkb5YpW6Dq67HLRkkiasMqRHHnnGNaYTBUCyysqggLmCs3",
  "key24": "4G8WFvh14u5QmxrnvJLJvGTKfmZ5ojR96qWxzWpAoYz5Z4ZivWk6QcjoZVAQgtpKdZDjLPQX6KQxSxWdNTgtpMkT",
  "key25": "5ZFu7HzeqdJjrrYe2vmo8bm3WzGCwihpSWtH84pXzSx6mEUUJd8tEiF4wqz8WsTnYoz4uZBJuX9jjsM4govB54Mw",
  "key26": "3c4SERQHi3aaDzyiqMbjeGkenmDsW5pNL5Gsti3gPns8UPkCqavERsZXpfQFE5B2VXXsNYzmPvYwhsqWRMgjMTjv",
  "key27": "viTsg8GXB2Eo8kxgSUyzC1Q2H2Xa76tg5hXFgDWp6PJ1djQcNedgsCmG5KXNtYzM8gwkfCbqKc1qa2YedRMHLnd",
  "key28": "4F8mffqRNSM4t2mkMKMZfjvi8TyrZMzFCgc6EFMAYMWkJafDVunHnJ2CQfjVoKHC8dZqEeiNLuESnsfwL2KMTd78",
  "key29": "3RKfopEphkZD72WZsiqZM7ZMGcBkHeKKyCf9rPPS4yJzks4sXhBidNtoMPLdQ65VLXvyNUVfgkpTT3dAUXVJMS22",
  "key30": "3rx6PX5VFANhdRtaMP7sCsCgaGzN2kSS6QY6NBH9cnbWo4CJ6ycGCa5RTofqxL9Kw66QqtePfh2wwyPXhHSnkW3k",
  "key31": "4HQx6ghyHhiJj2ehxRDArQi9S1kzjhpAyraLopaAReXQUSujUVuyakx8cDErcxKdqJDUeeE1zNttiHrVECr8JfNd",
  "key32": "4UWf5JH1z6rq6ZEBYDs5dke2VJRSAHctTE3GH8us25sAFoSrfypp4QfWFtKQvr1vtU5QLZ1MtH7trU84Rx38NJqi",
  "key33": "NmSqm2CxLbLa1Q9qbQYJ59hiZeWVJUBh8J6efJgMBXDxSBHivtPdmjMY1NV466P6VM9U7bwt5BsiDhEMordC6op",
  "key34": "ZiPtn7n1ZEbj74QPiPriSXY5dT2mYnPTQPQd8d9w7on9xhvFLFn1Nw7cnDnM1Mmr9Hz6fdqcjoC2t5jksZRVL68",
  "key35": "56AA7UQ5LEhYr37NioUGYz3eeYXSFXevEuYktyw92BQsjpTV77VKii4APv7prfY1izqokjGFQbWjDNeNY8UJDsw5",
  "key36": "5GNpuJo9oSVjMpdRkdtdiozpWZ8Rq9oBxEVkCGP3BXzUoMVJjnLgxQAu1nB8YXaJX6NxogFFjZVrthLhFmkiXUuC",
  "key37": "2WgLFsznqU5hDxjwhsCC4BrdwFNmHD4nSKLLVSxdrHGbtCp87oy2igTEMazERctnGcLMwjinSuh8UV4TYigVdwkw",
  "key38": "48AGcEm41zXgEmYwtzUMd6k24jbmZCUG23F1NUZMzQk9aToA64WUx2JeAYzY548MprQMunRQyvWT31M4XTM6BWw1",
  "key39": "4A1kV1wZCTnXndx1qT6TUGkY48yiyzMMAuXgbF2fYKvWs9Ftvxhd22kKKHeZUVaruMwwjxmZ94LwcmoTF7Ld9hQB",
  "key40": "5QUDfrCxa1bCsqmgWxMLKvY6T832wZaYxg6wJNk3V3k5MvNdARLBtZT1Hfg3MbKvJW2dZ2MFbCn4rWmJnGQW5ERn",
  "key41": "5YjuaEGAyWHf4nuQEPGUybSHkFHw7rJvxPpM95xMTPhrtixzmf5Z8WqffXeC2BF8ZVJQ294YKjYH3C3eaJHtyrus",
  "key42": "552MGwNG3FArTULFiR89cisPZ8uvFyb9k96hrGLv7NuwoqTvEdD11SLBGHTFQntv4VgFJUAmKgRtMYvDw9ZNYArg",
  "key43": "jnpGtLbjphjqbNuTXDYKTmhxa7uTgYbcis9FuSt55MJtLFHyViMfQQ6KrDJvQBezXq2bbdNWL7FdSPyErai4nLs",
  "key44": "5tEsax5L6ufJ4KbkrEPdnXsLuRtLkDRRDwCtaoBnE41hLGmtNJLJYy9M2mvP3AXCiSH2RZYzV6fqi6tStpy7gA6a",
  "key45": "3sgXNnW6euuziTnjLW6q3FmzRMsRtvrZGhc5j3L8aC9GwRmgCihB5JibCrKEPmKWvD93ZsVqpxnv4XuEpdSpugFJ",
  "key46": "4EZzrc1kr7uQCPiRkgvQx3sTfoQGGZn2H5HjH3um5B1GmSiajCaTqaAp5KWWHcQ69QvwjdQ3S8G8p9QinmoGLJGU"
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
