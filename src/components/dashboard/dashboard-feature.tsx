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
    "4kbTkxDBRhpT8ACYnjUwaRMixHnstaYjyhrPUgTf4dsbSFwAjCwgUDvmPYbn1xADKUFm3pXWWT4mKodzzskVF8c6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n4hZ5abyttDSopPXyeJzUb7XUR5oBnmX451EDE2L874RJg9U2LfhdoEjr4azWKEiTAfK4S76F1si9pJCYw6ifti",
  "key1": "2TkLQaSBDSF3ne3YR3itrE5Um48szsFMB7Lm11rpRgUBan7dDcvT1CCeAC4Njfy3G7iVJd8yUW6Mo7SkCrcR6XVs",
  "key2": "2HM2PfmncR6Ar2DDvGwb2crqmp2Lv8bg8p8qSfCJkvLRkninp9WSqa1zXN5a2MF6imYvSJnmCjG6jZFFM137HTu7",
  "key3": "5jWspMPwnRkqtMxzVdHLiDGpMzkVgAyKDxzihGbGwuYQQuyzfTHcs1BVpWg5xXKbamMnNPFawhkT4K9GyJp7ZMP5",
  "key4": "kzJYNoyNk2KxgdWy2xcwDKDcrz7rXE53hUZC3BwP5SRL3tiUXEd4yeyxDAdHbzNPsFxWDn4URHJqzCdew8XdSWk",
  "key5": "4XuhtgvkUzxo82X3kBr7u6tWeFcUKZqQHXKNf2sonPcb7hMpvZiVdc3rDq117U5RBBwsAEQA1w18pz6UzWSgy3Sq",
  "key6": "3VEEhmD6XyhhXVheWXwMtsVwQGn9in5RpbTVBNG3PcF675TqjBdFzAoF2eKjDz9St1Des7agKRVfXvdLzAaYPZo1",
  "key7": "5kEirhf2y8frRk2uRH66pTcKoZP6Rn94V82cera9SBM4HNWPM4Bef6418aGkoxhpdQs5JwR17ysVBcQJni9cAdff",
  "key8": "4eHx8ogezyTj3mi3t5BPn4AC49qZf9sDa6XmywW8X4aZ9qmDddPTU8wJEfAtFFzGXZk8HfXhKUov8zoTetWQQKYs",
  "key9": "5eSc13iynNv1v9DaaG2WukF5nLKjXZgQgCg6wTjwVXXVeZTBEV4o4w2MQz4fK7ceuNpAj2wzAyv1Lsc4mpB2FoPC",
  "key10": "5w47VFCFzHxUumm1vRRyfiWeXCjz1GUgzXC3D98gwCheJtxidNr2pX1WYtgjsWxsdc52zH4DDe8ueWKVJsceXFpN",
  "key11": "phVNex5FoHTMp4ReTakYet4mPrRNHNGsra39NiextZTnCaeD6YhhNumAPHfmDzUmSw3AKteeuToycfh8fNsqy2D",
  "key12": "5iZCgyPSn1AjAGvLwLeRNazk47RNQ7esbJeHUDrLJDyGh7ZyYCrcudyXFsEdTDQC9KJKEVSfJwDTt4W4cNFst9hc",
  "key13": "5Gtiwfef1qZq3DNJScVSSDLWJnLy4YWTsppB7LGs6pa2c3NMuxvWC9V5ayBh4Uas4P23geZwGACfdNGezhFt3eyp",
  "key14": "va5Vk9nVCD4RHYSzghf4RNf6Miy25j2UFXLajhyqs4UwSW5aHm9iApidTRBRETvVAeXjJkKTdbyEwzv9HudMfJ7",
  "key15": "uMWSEBigoNF2i2a6Hxb4xzCe1NKLE2uPkAPNRTysiA8y1jnEJDemekgZZtKRjjQCycUy6CrThnXchxHRYcoDxgm",
  "key16": "3MWCeqAL7UijMdtU4KyMQRU7fjEhfxK2FtRfQBRUgXHAKVBXrmCEi7oMP61FDmT99jjKtQXwN6X6RgTzAHy1jnZZ",
  "key17": "47EPKNWzzur1RkZmJoHsNgT32ss9FxQHCjpv1HajCy4YWEzFGmeoWVLU7hEQiaTn1Hc5jaCVBEkrL7wj8SPYK16c",
  "key18": "49ysLEEqZQGDoRiqt3MqBSFNLeL1vuHHckoV3NuyZQRDeAwJVuunZh23o6BMLQndoeKXqtPHiX1NcqVZmHd4k1ER",
  "key19": "6NZ9ME7ghfNhE3RRwtbgsdZVLxQCF4vs9vkTUG4Gq7WyYbbt1S7ow2khfeWu2Ct9kezKGMgSy95wLjvEvsuWaad",
  "key20": "crcz5XxjLWfEptLY7UiMBCc5VVeEna7GxjyFUtHBHPrcRJqQkAAjGrDyo3gvdWxzGaGKruWnaTKHfrjYnpaxeNQ",
  "key21": "2ByeRdy3bjFzPK5vUWKBHRDGEqfrrZUZWji6BuZJ8ur6gTZFNLwMAFgfeY1wJDcw39Ex97AErwoANrHa6MxNTq9N",
  "key22": "3jVkdf3N1TzXTwUBw1WXNCo9FcaHuJWYeWt82VfnjSzmhqoyQSASBEWq56Rgbz1byw95F7MUAxKqGQ7PrA5WExMf",
  "key23": "19xLqWsQfrs2KpsQSJNQyRQA3xYH2ptxNN8oFDFwfisjxvx5T1AUJ1VqtuSyiYY5m84dwfxP3KgoYEts4mJLiFY",
  "key24": "3FfaQdF7VPUfxdi4Hpv5UD4eHBF8g7yhBGDk2nbxUHMsm9gv9MCXYDyvrhZmZ8nEzTjyUvkSGP9EXWTg5Uwpbixt",
  "key25": "2vGPgfs7M4ZB6xWpqYMZERQtg3KhKcmb9ZcjhsoV2GkemGEHZKy4EzgcZpguXYGG7ZuzXaeyfKvoqxcuRjr1Dqqh",
  "key26": "2Ti6Rq5kMstaPgSkNmMHzFGbrxJKBZDkh87TaXhLR2ctivsrmDXdgpzFuzD3phtfqS4h8jFgLaZyuTrnzAHDJb8f",
  "key27": "5nWxv3vSvangwKVnxeyp5vij1jzAkiZPgbij1JBkRUGh4jqdYNy2bxMx8YJX4BcTzCwFdamkX26E8SmTHXFr2Lw4",
  "key28": "p6dChWS9HNrEhEdDpJMAaAuUmf5r6EruE3w3YWEnroXLcJFaxYBhLFRpXn9Jrb2eY3ey58FtLc4TJdTh5Yef1Qn",
  "key29": "245KviEzqiqxg2Wyx5L3vA2AKK9eynK8BjQzxWj3b8zmmBgUscqseAaNrK1qzTiFx79btRMR6SYz42byQ2xkQCwX",
  "key30": "3qmEY8jjxtCmdq1uYLph6diwiUKcyJwM11jfSohmAqgGwqjvqS2YbPkA6Fi4BV38TTeu5siXJgCnCBauDWxHFW92",
  "key31": "55Yk6uB2MEuLx2MeMizH1EAtyc7vF4Rr1zHPku84KKmkH2qQ4xDFPexkTCGU8m172E38sqfqRfCZjh8dapgSbujY",
  "key32": "5wha8JFPyBcrN234kjqNbHFnE96iaLtFT1XLRPn5eZNK3JKc1hmukkjshrUYyKLMM3Gk4pKiqBSAnYnjssGK6YYP",
  "key33": "uqNR51gkpiwpiq76Ra1xaqPZX8RNUyEiaPRdRWmYKyVSwD6N7Gpkhz3Qhjat8XvVRFnsfgUNupqFnS2xgP8fp4Y",
  "key34": "kknqnbRtZcF8Qcu55jf9GkvBjWmmQhxpWnu3GPTucVQ9i5MecupJggR2A9yvLkGseUrWF1nwe7QYYPSZcrTSban",
  "key35": "4Rbtc1MogqTc1C1VTReRpvxGkD85od1iTJkb9zmaZzEAHawR7nPv9rubGKZvTwmJCVppP977prJfDukxaJNZ3WJH",
  "key36": "5ozJ9AwfxxMpiqMLSbV3Ufo8rvng1BCbpcKdpQ1smTtDbukdnLT7kGAxK9HTZYPUUeBZ3faZRszxGTHPAHB2fXLo",
  "key37": "45LqDWVRHSvMJSyULjkHWg29qRr15Gc1hDAFyyzg5mZp9MbaniMgRM35Az89kygfmSA28PNAYRLTZsX6d6jpgLhD",
  "key38": "48aFGqsuYkF87JtnQHtvjK66NVeWYJcGzZkcRgjcSPRXmx3Q34or5ES9n5ynousskCDWZeDYvBFN2hXeVae7bn9j",
  "key39": "5DjtoUeZmrTLm73NwcWq5zMokMvoXFej8cofvRDkJtRPBQMZ63ZEhGJ8wxHsqd6VfoCwZFwar3jKTyQeX8K7NQXW",
  "key40": "GnrDomNpf7iJ4Px6dTVZG7imturrc5agmjpBUTERRNLyeBwmvh1WRzBseSgZYRy3BHdxkS1sDVGvid63uCxSf8u",
  "key41": "3Fwxdgd6c9wLww9vbXWQx1Kk5qhXwPzgYj2PwrYevit85xn7UrWftu4NC5gT9dVB5hCeJj3NEje6cZd9cweMRguY",
  "key42": "5qvz8gVgiyykpKU5inNfPvWt6mgUxZ1bAAZUuGwDYbMVEKfRPb8sopv1giW2ceKKyoiXZbpcp6ZCR9GCU5jqXRb2",
  "key43": "2fifL4VcEw814e1TbCVpQ5GAHaf2f6XcQsUcGTBKj29DqhGZ2Cg4SZwsW59GVeDBNsEfKPs4g77PnjhPG7np4qZP",
  "key44": "2BLcc2PuNnKWD5Evt58bboABzDnANFSRb7dTDFUtbCmDu6WwSyCqazsmx35im8DD5wTtKrwNStGnwNWWws38FX8b"
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
