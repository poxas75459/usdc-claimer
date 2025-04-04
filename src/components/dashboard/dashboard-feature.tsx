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
    "2pBb5aMJ9AjEKiBdAozefvd6FXTtoy5Xs6FEfTNqaXRHsCDuPuktgZKjHHUVhDWoUa9kCKM44YqtWUxt9itRWjig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58NQLNZzppG9yo7nAw6f9DDDEV19Rmdk7uFjfNwkDcrk2FbhdpqguJMfMZxX7oVX9YLiCpqNYeK9pA5Lh2j8QfoU",
  "key1": "2jwDwksLGib9Pqk7uhPbqifKc4uj3VW3xtmhTecs7iwrD1Y9RKBFfNPw36d7b6fNkHj57iWNqsz7cEz948bjzVTC",
  "key2": "5HEMM3NnJsqJ5NVydF86eoMmS8cnPKiTCQXRJBhs9FaBwZCp4JsTRZpmViKMNMrRU9SXbFm4xy7mMLT3dZ4EE3FT",
  "key3": "4ohHGRFMiPL3BNywT3FApCpMBwUvCBAesisrXTh3Gi188eQiwDpQusU2icBbtHERLEkmkpUkVzj1zQkTg4us4gLs",
  "key4": "UgsSWvU6ygjEafiFq98if5QHpTudzXkeqaPXXSFZJ56oMUmSLb6YSrPoNcNh27gJrQNoFNyTMhTgQ2yJxAn5bfN",
  "key5": "5AxoXEf159poUEzdooSdmniMdT2sD5NVdoaQyuMAHtqfC3AFG7ghC8tWvpEuXcxxDyx8suXSyswsFJ8y9TB7txet",
  "key6": "5XrCPh7bWEboE94vDYkdHEMMU8yXerJNeZeAeyQ86pkEf1KdmxHPVtJJdbWZ6hnhENdxHcnRATuwX5ik5Qcc85Kq",
  "key7": "5XsR3RMHdPb2ZFTrUZBgcCgiBMd2tVXsFifnSgcxQkjTEthpRvoH3mbuwNPkUmt6T9c5EsXA9czGuCf94MVTV51z",
  "key8": "2kgUTsawJ2d2ya7KQvUhHpFktng7bRCaV6qJFgNZ12wDbGecqJM8LYtqKXDsa4QR3mTYwrKFnXheevMkZvt5LjaK",
  "key9": "3TYVSecY2tCW4XLtgmChY7zQyhGPHdL1XQH1e32wfVYdKBzZ82VQgzfgFtJAM58Gx8Ky4TdYvATN8KLKsy1HtK8J",
  "key10": "WpwvVM3GDMfDQAiGYVo2KGzrJKMuc61SRMD4KMKfPKtC5zif3Z1QQMqKnfGfuHxChriGsbNDrFwPpFFXeza62i4",
  "key11": "4pUfmD7cvV35avCaghE4LnRXgeVynuAe6fEVus2YNdWPYrYkTENzThwJVoGznmFWp3BrXGytKRsmGDdbuyVyDtfX",
  "key12": "vpKAbNjBLjcn2aQ84c7wuECr2PiFNFqyhaYpgkATok2bUD4m1eVq96A9MCCfCEDEcCW1khuxbfGpYsBZ1RWAFeA",
  "key13": "piYZ9SRWWiqg7p54vvz91HW9GFtjA7k83rUtkGzoS9CKAQDxVRfw2UffMdyFugBKxyQVNUTJzGUWmQKaamBSTQX",
  "key14": "2dZsFYydK1FJdp9sBPRe3KjajUw122JzJLQZurTZGBi9ssbuReWiFJiXLfmJdGZz3tNM3RA5SyZz2KmqPMw3Josu",
  "key15": "zRTgLDcGAcj78S2E3JvwjHovuUbQ2WD72BKQZ9QcBNakQhN5Dm8G2H6q9dK4Qw4BKHHnzG8V4C2yAhvKMgQJ2NU",
  "key16": "3DRrUnt47kGGvfvcMUwGy27oPeBRL74mzkJ8Tz8m35y2s4v8aP9AnS4iYX9Y6cstK9vdr2jr23TNxbrskfYQE2KJ",
  "key17": "5VP2xtB4d7yfGn8qTg2VofGgpk8hnveiyoh9CiBCEYYoXxaERXz5eex6BCS4Mek3VB25hpc8Ra197g3ZXU5ETyuH",
  "key18": "TeTkBwTLCoNQUyKwdRcWsGw323PUJ3q25DBqaeUPLcxgN8vkfQS9FySgiuLLvExyZ7oAokBaRWQUchjnCFM7LNm",
  "key19": "3ukJ13SrUeZM2J4gz4NETRJXKJi8BxfVz6ay4PKMc6zV2KtPpEyNaYWvwYdaR1zGNhCb1R3kZ5xxiZV1ygKaa4pM",
  "key20": "3CmUrNVdiHmUyQAgfLAkjYSMspSChtH8ggUCquFDxkP5KNv3w66pUHDEoSgxki7xowaudRuXtdpB3f2fW5S1xKkF",
  "key21": "2MALsPJsVzx3cfZEFCWy9xVG1VV3QhNNKtvrJoXLtQiu8XWoR8s7T4dkRM4bjcVsGc5VCYDWozYZKwrpShcjBFvP",
  "key22": "54TGXSjGX5hu4hW9wiKxdXjvqbKPAQS3uJ1j62dzVqn4pKbgqjcfaqi5wap9N4oGMCnfkyiTvhR3ggDekeb1sWLA",
  "key23": "4ersEGqk2Dc8qyDY8ttXFG1BS5Km4jhALXdSpvRoFaANJcFMrfYdiDRdjbZmeZjCb489ctosMsHHV8NzSCJd2xzY",
  "key24": "2otXSYe85Wk5LZ8whLnCZqxhEzDGDTanw7wDy8ZsNJU2KHwbeTJ3ceFWHpGCsML34qzkcN9bafNAQPxuyus2seaH",
  "key25": "4rsnm5fdDEuH3Yg4ZFUno9RTtttZCK38p24Ky9RThqFjP4LkiKsYm2VN2zsZDExarHgpb55GCSB9adZNdpg9pE7y",
  "key26": "2rjfgefC2hw1j3hgSFLTMb8Pt2Q4vfWmj2ArXp52BTZjZ2pbfuoAaVC1DqmEXAchMhBe5DfjAmzZNp6EqXMCgG9J",
  "key27": "4DVQYho4h2w5izjajVYCnMFdkhopoq1oiFCfmJiy5wMBu1fHt1TSypvgu1UFmhpPYFTxAEYdsBFXX7owjELShsJA",
  "key28": "24T4CULYMtECGg2xv4ij8775SiRqmA7s3SRJEYL1S524X4fRGQYzpzaMx7Mq4ns8Xq2TN3Xqx9mFpuf57SxV2MRC",
  "key29": "4URhMwydqVGKaggaYXpFnXbKVoYAqtBJDXi8ZWrwYBDmCu37bcG413vD4u9u1tWQUTupbc49d1uL16PoC1AyZoX4",
  "key30": "2C6JAEhZfHLjdgrmi9soX84bpkvfbdy6yi1Q6CLvYgiRG8r6vcJKUrwjotG626DoQyGbgUuCab6Gz8674QScGeNJ",
  "key31": "EPnERh17GxzZiY4LMRWrpALeYjHC7V9o3NC2huKWq7foLo1aLAShs3bNfk6m1krDAoew2R7jtB7wnCpwcVDqZu7",
  "key32": "2uAV8tEZxUyEDRVgA4xtSSUAWbpc2RU9innn31qXN18LFKA8vmegYGpbi1RbyaoR26t9v46UZdUW4HCTfi9kNN9c",
  "key33": "3Nvna1zX1FUAB3WBSFfD3UFN5oBdjxsv7H991VfgqiaVDfhLpZGP9BnubcqH8CGmRV9iZMYihssWr7mgQs9pfNVK",
  "key34": "2p4Z1bGgGssKdQDBhVd5juYeeXN92p8XzxnKr1ko1HtJZe5mepH71WpCypLS9MK6ZXQrqCKvnKWGgNPtrGkpe89h",
  "key35": "3vTwtMGDr7mkMga3aCMr1Ghkf3vpiPBHUTtfFMJE5zX6cQJsgGCkLS5BDS4zP5C4s7x9NEneEQ5UQmqKdTnfNUtz",
  "key36": "rtwv9VXazQnydH9B8vK4Gf4Ku3rLFxUViEMbSoQ8G8uHhcdswpWZR19gVP4wc58EPgpr8i27x3kHErVWZHDrnRt",
  "key37": "4KevBDjDRQc4SxZaTfuYSieYaHBamDqqHqyqkDoAWDizUxEjhnavfEQ1DwB9xtxrU9tvoDesk3NqkGhnk1YR4Knw",
  "key38": "5gJHBCfhCAP32S1Jg3YC6QxF5b6YC9oN5HNtKKJ8eKk6QZvBYHTxSrjQs8NkSUtjMYFAkQN42fUL1bubY4JJtWnf",
  "key39": "3WBRoPgY8Zc3cnsTGVorutdidNDBcJbM2yNTEZTWy8TFi9LCkTnsT3KXdavmYcvYy1pRWKibicj6frBxMrubKhyZ",
  "key40": "5CqA2eJzVSJ5rbxRFr5cCquUtqUz4v7UU5tCwJnDP7GRrM5FXpTroDJV1D8hfwDJbvoXQ9vDiayXbB5CaoTntZG5",
  "key41": "47EifEjhisxY2GX4BVaSptNSd1CxoFrFopqV4KASET63fVYEfGBL1DyXRkBgNnCt5UJHqdsvps8gFPPMdJgrfmPG",
  "key42": "4m5pt8a1RbKwsABxCeYq7hTJm6f5e3cd5DuvsjvBW66ZzgBLkAm14HdYJ6zqbxG8SVS8bh81Fh3H9RNDGAQQeD4J",
  "key43": "3MHt9VYjLVqxZcZmWvQ5dSf91jKuSV5msyqjNT3MsU55XNJD4GM8zqZUZbTbZt1xRTtyx9Lg88jmn8T5os4b4Cjj"
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
