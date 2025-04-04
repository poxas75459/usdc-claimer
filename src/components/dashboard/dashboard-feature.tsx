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
    "5rxyhhHf658S71YY6NbCz9X5USP6spSUWSUK1LHxstgvoyqh4gFz5afAGTDVyLCdkxBdoL9JrjDjgnBGp1ERjPya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45XWbvwkY6vSoPXNPBspRxi4mXgzdk6ZCpB4yLkuQ1xbyY17EBEPnANWVVwSANHURTAEboHoX3WhHWAksGfBTAfb",
  "key1": "638vprnYpcAzSSbMk3APMLwKQ5RXC7Y4H6M5PVFGmRpeZjV7JVVoBVVrQaaJ2ReV5ffhuYkTAKqPJJdYfNMZ6Wu9",
  "key2": "9o9qMoSYAudp9CczGydHg5V2VNL4F1MYiHGiGvioyMwW66kSXyJFp4EjSzkrTfuM5nndDzbrrR9zLpFebQwyzPm",
  "key3": "5vf8RKRHVQhEPgHAgaqn7xkHZuie4iZykvK5nZgfeTXW8jEGfRm9Sd9khHhUqkUxs9qrmKfy445UPHTexFs6QuT7",
  "key4": "2WwaSFpfP2mj6SCuHE6FQgB7A1qDtTDaR3ou9FyheByipn9P76TFEdsLL8Yk9ywi3VCeB3c2UrZDBVzjGEfKRv68",
  "key5": "3NELFERGCCa4BQxQnXnSSPFSptTBe8BynWZ35rmZEMH2bK7Ey9GEwqj3oWACRB4CpGQthtFyyh344nvVKrbmCDxN",
  "key6": "2M6EvXV3UoKRuX3nbdnBhYKUzV8BDK9wPC17hzDn4zL1zrK8jDxFFWGU4UhNWbb7dzz7yyGipPxLtsjFyDRzAfiM",
  "key7": "4oju6wF3azkFNYB79qvtzFLozxJUf4MkanTNFVFA7qmZ4Y62tYX4e8ipF6f4j4w3Eamt6xZfPE69LxHSK2Xv8j94",
  "key8": "3efaa4TBXy2p3oxofjQCLEkSRKypcSJtw3rwckXi59sGfsSPJuzm95JitYNHdpThQSGVyan9N4usA2ALrgQanHsA",
  "key9": "5tAuSsyNPG9SGsew6NHT8Z1cmKdhvN31Di1xriSY9AqjocBWufEmSeT7CxPXvcKuEMVfKtUw3hb43nfDVEhjufiV",
  "key10": "3uP5J6V7TZz2DganFUbtvz6mSdGHr9azp2f3inKS5X6CWkzDALJHU2LzpGjxDWuXFKhpcRPFugy9nfbRMorfSxHg",
  "key11": "2JdHLeuhNtW33ZZmt6gMsajM1Y1Zu63WhedbnLgoNdW2hjwak4PQvszy55cXGSPFyrkEqPNqDTPPTJFB8P33u1gT",
  "key12": "5y3L4K3R9LZGvda9cgLwjhxbxAYXG6yXCaoHVaR4pYR7v3LrZyCTpDoQ4Gf5Ev1BiZPc7a18UCsMsZQuHpqDFuxV",
  "key13": "3Rcyro83P3NrbnEiyFdRAts2jpQxXALYkzQcVvbEfMjhnhfGHuBWEksuvH3NAFfV6KyzNvjBFFg41WpiBaHtYzPk",
  "key14": "2yNXqTDV8wTfaHH5nWNxWnBJnp9oGkFkN5gpaMV7CP2oN3t58rs9kVb7Tvk7hNaHoaK6m8e7j2F23ciNZqzEk9HY",
  "key15": "xE2LJapxGVRNvQ4zjW64fmvpXyi2dPf695nGGmtPp1DUkTkgUaEa8jT3v1FPvv93XR26Xwsv2jKbyXNtPzV3GVd",
  "key16": "2j3zncxdxoW6XaiRgJKfPCXdGifE1QpT1JHHGjYDb2z9UcbTJi87g8x9wN6YRWTu7dYgt6sH8NL9cn71UURgxCU6",
  "key17": "4djig8z9i9LdLkRQKK4AyPHMpr92ZB2obfNMsESXfN1BackDdJZm6pTTWUzXHXDGKKWKhoeoVhkE6PaErbJ4kEhJ",
  "key18": "67XL3FHaLKn5stX2FcaD82TrvLz89pJDHXFDpmCkKAwgyByegghnReoJbRQ8ym2FvG4iSG2MfKSCTxZBtLjdqxb4",
  "key19": "5xfUEB5RneWmHT64HKwr85bqsrYH1CrVSxSBzfijYdi2sZJX6Xat6R9TsyCNkkZzmFDCixzh4CAsibU8CRfmFNas",
  "key20": "42ta7XBZSWWt4U1NjhjSLX1bbgG6PXNAyNRYp5NhgXbS9gtGdTxpHQfEVsKCc4a8qE41tF5x1PyBuDuNBom7DxFz",
  "key21": "3JkCN2eHGBFTBiFuCcFJoo4pfGmn3c1nJrNzPUYA2b5hyoQxYmesVwoYg5ucpA67f1ZSiTb3yoyvsVSxesZyAhKo",
  "key22": "62eyAovMpRxQ3GVbNuG5C5Uhs4zjDbJ8K9yde9mgMj1UoM7KwkVPz11ybyEiY2K66y676LZNkD1uPEGx3bJ7FoE6",
  "key23": "4vNWWu4P19FfpVK7CLjP83aZh2eWpbP2XJbDLv6GKMkiG5FiixYPKyCzPW58Ta3LQbL4u7GdVNWLfQtnutaMY4mP",
  "key24": "zUubhRkexUrnscG5cyBWQNYP3sk3XMSWGekco8Y7QCPpo6ZevRev14G3hUychJoV8EU1ZeDV7rTd16HH4xVDUhn",
  "key25": "cg6HDDHRLMmyFowP3imLpBqf7Y472WZhv9peNuVMkFGHGNdkaGnmHHYL2zqCscmWCDp4yRhYA67PYuhGzuviZn5",
  "key26": "2ETdnPePLZcxGde6kUyFVJokbvKjHkdMPUczb9JzV7Fg8MJG7iKV9oHxDQnSjZ7bh16qEUKMjVWazgBkFNNn96w",
  "key27": "JZ2SEy1ZKT9mXkUkuCjwezVdnNCinGdXVRzNbX6ko3jqD6r7Y2Adfe4kaKsVKEo732BYgdrjz7g5Bw7sJhavcFh",
  "key28": "4Prsxk3X521MfpWdoAcsFoud42aKmpPzJMECkNXne9QX4p8Eq9CqjaEyQFNHYv7e9MNKyP6UomShtMt4hAo7yFj6",
  "key29": "LS7Nm6VVqrgx77vB7ccD4S6BnhCUEQnR6hG8wCffJeSrYvJ8Y6EBhXfh33MdkSC7TYvcmGiqRT3fTnPuyqE6BMr",
  "key30": "JqM6BPh2JjchQhpFVv9ELtav8iEmf52SkbwasxzEpwMmoU6MKaARXHSNn1vKuhh9YuibxcwLjuhmHVC9b93WXwy",
  "key31": "4KiAm9ge1jBBTuJu4xeP5qk1qcu1S9QEskNU5ZQTjYxmcfGZf6Xiuf2Qs2z79ZVmQXik2PBzzqFwLFpVAkRKQRUw",
  "key32": "5cGXnDrrL4PrxgJQ1nLVBSfK8nLWKuUdTYcqdGxM7vv3dBDz4HKhFcDZMHuMeS4M3UrQsWEBvDYPU1fVErdueESj",
  "key33": "5CxaC6LU4GBcer6fJMHW65S6HJZ8SK1FUBXELgrrLKyVqLpeSdDbU1YSQCGnXkWeYLE1YaMdDtUJKNEhPbAQAdXu",
  "key34": "4oEocCch85Tc7gzPmzdFTEmMaKW7pA1oq8TtyAyeXkcdbWWhxAP4SSKp1G9pFdFdcmWS62GsKaDPzbRW7Y9N4ebz",
  "key35": "2mVeUmxFYYrt6Lt3S9FqeRB5orX5TsC3F4D4P8eTDC9qArYmh3vMHPd5w4bDaD73meJ4YxrhvQTwTXiUY2mpakQL",
  "key36": "N8JgiykaGmciA5UjrVBZ5BP4oerUGofz7V8TGotDmNYT3zrDbxR4kJ8iB32bpVVSfa8pfAW5Vu3LYUCzBJdzKPa"
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
