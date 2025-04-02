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
    "2kySKKX672FaQxXcnWgtvGBD5HmiMcquoxHSSYrgwHtfbCCj1zDUGuG7M62cK9n2giPx3YkRATTEAiQLyd9i7SRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LTTqCNFpHp1GQHpGTZVd1Gmgkxsdk5q6GBNd9QybLhSzfjqDYRYjvPmJv1Y4dwowh6QnRAgEG6j8BoLCG38R88P",
  "key1": "3z2epYWBWrhMtAmiZMf8nq17bY5F6Xe3z8WRdQfYB98ZzHhPKbbZBjYyiLXvQSEDu4pLYrvfVsCB4rsUZg7LYtX6",
  "key2": "3wSG8Ni5F9Mi2zjnkVqj3iWrz4qHkJtQFpJtGU58xrm9fo7BVxkXH9WFAf2cAsGJbwiAwxgdTJdCFCm3YqNFFXdH",
  "key3": "6RbpxCZxxutymrHpx3jm1T2Kh4wAajGVvG6c1QdUsaqkaikrt5GUDDNgATmsttSwn2sh9pxdKgDjDRthym1XxXo",
  "key4": "3LKQ16boFYGN3hjgitkPkwAZR13zt1yuTRY25WaxEKiwXgQmDE8hvrkbgPZYUURzfJ9KELo4qXMViT5qfh5KRi1j",
  "key5": "4ZdANJ1neTzzoN8kRpsbaxC94ipq8apP7rPhrXPF2PewHqdccnQ2UcqJEf4w9f8FTCfESbp7mta7xUZ9zhj2WnYn",
  "key6": "4vZ4nDnv7y2fenEZWZUkyUEbCXMHcjv2KjA1LyXrrGhfmDfeGottW7p1jgubXHeyHt56EoAusSgK1LBEZhWfh1VN",
  "key7": "63Rp5he1xVLt5J5SHWgBDYphcV8e3XrUSfR5mBbZySUPkw2ArjXXmNnMng5YVvjtZFzZj8bp8Mak4BK7yNpziJLa",
  "key8": "3zm3Tz26YEXSLdHsWuHfD5KKNZNQJ8Kto2Wc2BR9tFyXVyW3F2zQWwMwv3GGbdTbfmmM1qibGVFB6LUZiRf6ABUe",
  "key9": "2bSsMa4g8F9anGoX6QVnHEew1QvN1a7Rst1ng1U7qTbUBYYgFVuL2i3Gu3hpUGmRBZypiFxPer3maDqwWbE76WJj",
  "key10": "5KXzq6CSeyDmRh3iBFPtpw2Y2SbP34jQUjLnzbUqdfBhekwJPWfSkjT625sU8tW8Xwqi83XEgH2CjJr5YmoNZqDa",
  "key11": "2KYWBsnD65ewq6jUVNYcb4Mv2wcdSX4n7TSD4dKg3p4ciUzcndKMuV9icdvXFhqemqKBWjBtqVP46KPbRiK1BoVW",
  "key12": "fhikUXKrrGzoMWLfryH9DmcK5RRLYkFNk585HsB4i3XLDb1rbkJoG2exncE5G5A7gNqGwst9qX71inoRqEGniWy",
  "key13": "3dbePr9Ptw4ZQupyHnK3KXaMbiWgxm8jjayTq2uMcCynhUCaREAftKpKNh1CeZjH5S3J1b8Aq1TPp26ppCoFZEXd",
  "key14": "2mJPayzj7WB5xyRjVMMVWVnxuUHXPa5h6n3bLfc6Fw2HMM8t6VYduodvHpukAfZG8oHoRxriAft5qMkGnCAAAihK",
  "key15": "2vDJ495YKLVPQoenPKh8hrNzJgf9ms9WuWc3tB52qQdLXUCG9RstDVAuLkCsZudLyqQR6PK9duB6hG7bMqwvEYYp",
  "key16": "3DJeD2vNu3PqjQV2c6irTBK79ZrCCXdKStfQXBXWxbfcL7MznMgyGNRqnukTuQywJXqBNU6Zbpu7xdq5ZrCqqz2q",
  "key17": "4BoiNsd2kkAHKrRwMLdcyfn7jHrLyUWH2vpDbMivixr9e9SUXvvweogTysvn2jyREWy4g3Bx171EhmVx9nnAA6TW",
  "key18": "3fHnZc6vxMRo16sKAVQ4shukGeymLx39V9UM6mqwWVDY7NEUNS3NL42an8W1BtHBfyPYbSZvPNH9B16h47A9q9ce",
  "key19": "2G6QhUzL4aT22ZkJy1JQZbRhYmkE15LtAYTrLdYamC5RHWTgDDmvL751b2JUbgdYRoLHAGCm8DFzH5geu9Dniutz",
  "key20": "4ZMFmjn7H2zYEewtdtmPjabHWVgxqU24w1W8NTpwTSqFXtYUtZ1vL4B5dMvyazmabSoCBkLNGdh5kGo68ZSzoucE",
  "key21": "3k3Bbc66DX6EwAi9msCxG9Yfbw54YBGSZ22Lvq2SrisgvBraFs81dpcEkhrcYtgqLwGvifu8dhBZBZhEKkmpWgjt",
  "key22": "2wf5YwL5UEpdhQDWXRZczhLmjppAQLFHai3j33YA7gMVfonSYf36QQzYw3sxYzi2Eh8pvUFNUtWAULnkG99KsMXa",
  "key23": "37WFHCzaqKyVNMET4wkgn5gHwRCPvnQd7XtSEpz7KV4i9emQ4AfAQCyrZ9TEPHwhJCZYkdLR5x62UueEiZ4bGgzr",
  "key24": "2ZKx17r5AnVQStx4K1NnWaNXsVWBZaSCyWHSHE9RzmYAoadp7Y2RFEVf8kyzcFjWfLnRzZsesk87GoxP8UnuirWv",
  "key25": "48SHVXTbkQhuwjtVFmYVxzwhUF3znB86YrXvLHEDYgaPvmrpT6J9fXcssDejwnSvoYmh4y5BN7xCphWewtSnbCht",
  "key26": "66D6VRnqYhyckkWKQw7C8TPVwecym2pzCAHNr7mh6AeqtiYRNvCvLtVCQLP3Kk9N63wNoTrfsxdTvC3Knv6YBpPz",
  "key27": "4UsxhC2rciNtp5ekkDMcZmdPyPTiap9TMXLS6431nXMrQNaWnBpgJyXZi83dvbXbqVnWYa3pxHyjpzzmwfcLMuAG",
  "key28": "QFMuLG3AbH4ZtRQvsRyGyquviBNLrVWfXRcpakpUrQa1RdhXQnRJzGsyLHN1N2NdY4acCvMrtnJDRm3VsmTx7F2",
  "key29": "4n9PG9auCPkGJzkqG4kGjQbeN6XbrkavWDTjgnbjALGcWwSPZ7poaguA4CQHiqbqycU3ew8WwotQwQhAer38wqs4",
  "key30": "3oCGrF6xafTVuQWPFE2iLFpPqJUqoaQWho5Vok95MkH6BuvdBWTBrpMauinDREbmHhvJyyREhuU7Hf1GiiMJw35Z",
  "key31": "4bt8g56x935pwHsekzPuCNQG7fZBh3W3TdS4bM2QCV8fDF3Bo4zeCuarWMrvtsn1dMvqMLY5cZHETVLQFuKqFMy1",
  "key32": "5ZgkKn3DAMdTq7XutrZ73sLFrcoQ25NCJyG7WZ5v7b7LVpHH7rmor17oUTC4JtwmPAqGmGef2rhQ65gwGFtGWjff",
  "key33": "5ybw1bX87rQ3Bycdi6JygGJqbTrKGkHhDMzJsmk45w5gf21Jyc79BSeKn5q8Nn8DKa2of6uYrvnmYac4tfa1MbbB",
  "key34": "4362sfpYTprz12yDP8EFKWhfEBwDfBxuGX5XPVe3zzhf5DKArG5FPCzZYqzj9cLmKJMMmHu9ckCuKsnBMpp1N1qk",
  "key35": "3mxGNU88Uu5vX2A2qzdmKwMfgdY8jyd7D7AuEVw8uzpo8isyhZDQ3vkQ6spbQtG8Ty3y8vH2U31hu5jyxgJSST2J"
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
