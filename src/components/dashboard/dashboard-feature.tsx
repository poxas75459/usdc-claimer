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
    "2E7zdoyGns7LgVTGvHfruYtTCDbfxVnB2ZEXY4BqstUJ32cExoAsYnGEZg5TbswJ3YdPwciqLrFUGXaQ3ieHqb4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HpTQFBrym59tQNgLywve5UeNwsH3jDWBnbeWiAPmQNo4k6iDc467FQZcdjmQChF2AHpRUePCn55Ti2jw9ZwUU2j",
  "key1": "2L1oMfGqtE38JWYpEThWcoiCibPkaDsXrXA8gne84Yb35iDsC5QP1mxMQNeuFzcJqAkpt3R4StmChghBhzqsBnqZ",
  "key2": "57L3NPdMnREzyrRMTc5uAjkbmuJdovXEntW7jo2iQi5bCMrPdVYgXPPbqDejjY5rLVdV9QZksgE1AW5MhTC8aGd1",
  "key3": "2w1eka5ndtkd3oHszk1fNpeyRWmge9zcYWQi9yabrM86cufeAFndbu8pHmwgRrTWu4kWjgZjR1nG1CrDorj3n2x2",
  "key4": "5VMbrJk946ctGAsUXPdkwwdqm1uSQWRqUme7igPfyxXtT1ho9pg3H39tAadrYSnAuTNYuvNrVNYorKFuLrDriMgk",
  "key5": "XPt2fCJsonnUVGkF6TXvbt7XXKo5nnKFtjMiFsv8P3LVFFUxtVZqvLVf3wGdgyg8QzzKzXtuPokG9MuQ1SLY9H3",
  "key6": "5QMZsxAWDvismFaXijEBLcXZMHqwSXWWUr7E1FXfZnoTUMFtxiNz8QsJGocSZqU4cbk4jD1CgGvbLKKUEVHWz53t",
  "key7": "2Sr8tcYGj9bN3ubEQutWxq6jZBimPu9rUchQGpxAACQCLV5mq6kZCPKbrkY6dzW2z8vGZZ7RhJ3yifENXNWippbn",
  "key8": "4SAGmpPz5DokPuGcwEwNHHbYqGJ7HTZeg19WFZPazP47hWfuhytPyK2uyBDsdwafJ9QjM6uJbPDyLw5tz3AcQMNg",
  "key9": "93hLcgkmRGgyDVSbwLgrgdnAiWhi7adX2mXVcM4zM7Ux5voqHHiueuSb1JrwrKneyDEobGLvrcPcomsmwiHCCGg",
  "key10": "5sydoivQCANW1yjevJFudGLhyagD1TpfrvFuFmXQLCBSsUXVRbBweGbiBqC83p2wFu3VsW4ggbRKHNbk3zqNH6Pc",
  "key11": "3HUxrveP6PB6YAUtvqHXNC4PGkzY5TuRA82WKaiq79HmSsbeYhTwW7yBUNHCQjddd8kFQhLbQc94nNCWs7MRNMSN",
  "key12": "5GrivX9HkDGri7VeRL3nJgUwE6TKdPi31n6mkT3g8s1EeNPXc1XmYAFm2wkjhd7rmN8G3CFSCRRSiJBuabezYPcZ",
  "key13": "2U2SRXFX8PhrMJet7pXMw9AZdAKsb89H7TgkghA9C9L8YMwLAMczjQ2fUAEuYKdcJhrghBGVhhRsT5G141BRUfjH",
  "key14": "4Min3PXtKvASmaaAY7mt9qqnSwvcv3o4Se364AoaMpSrsEG9CAcuZsATy1VgmQWdAD56vWELhUDoqDtB186uSxtH",
  "key15": "2W8wSy2UNgNX29nC1fDoxBSxexNJ1cuRBMtGmfZYcK1Zih9Vf5JnRh9Xmm44kHgeyrY1LifAsbmJuVoraYSNh8RE",
  "key16": "wjHhFBb7rKjmxAZGTNEXvw7AAg1JjpChdPtxAUNQ8kYGTHK8HeqpyEgfLMg1z6mpnUGPsAXSfQp1MRBeQGYC9JE",
  "key17": "ADPe4oPTEFhQLN4TenMQn9GGZrDkGG5Was1U6uHsZWBP2f8icJXjontqjRu2GmVTxrotRHSn1jngH5kcMx6v3sE",
  "key18": "5PF2UKeVkDAmtye6WHDrKGbDfcJEb41jXSyn8Xf6Zoqk6LpJqDfbP4vzVZ5GoVeuBkNCuWKgFTbSBWUG6NqfMBkX",
  "key19": "3dz2nkMS6HjCSH7WqAnRXbpcgWcuvBuUPy4W4TEuKmnUGw4q8Zs8d7JzSMoTprZABaVLoixJPQMwkLAUn2na9YyK",
  "key20": "5A1nRdGzkGs2WhYKzzUzEk8rmP8PTYUN7ooTz38seGd2ms4nNUu9kZQBANP8DifL8d5YNdXEGcBXzaq4RTbFDWaj",
  "key21": "3zvPzEY3ZhRvtPKjYTFjCwLxmNA7dtVHdKfdV6hLZ4KkAgBmCi2bFWxmhusmNkdPDekKPLSvpdXNqcH5CL2S862w",
  "key22": "2owfBU4QX5rbhk2FKtJ23ufRxmXFNtDQoKFJ7srpb4EKpLJdCtmrUkyaAdKX8s5b9qDyjBztNx6LUqFj2qencQFe",
  "key23": "4jMgCJCsHPhJodbkn6hJNtXv43WUaRF3CXpkn9egtoUo712btbmzT1kCAFy11FugS5Q69NQojciQLGWzJZJhJaVH",
  "key24": "au6rsJqAsYkjp2Gcyt8RwHysaeGcLF15A6RhKThu5gm6jVnQQVbnUUNgxAkQsBUwCChehXx97hU9VvZoNWCS13k",
  "key25": "5dMyJYawLrcRUTj4aK4YrAjVoEReR4HXGktRjL1baE6vMqWEScyRJ638pWVrBaWY63bMQrjKAJp1jbZiUmXGnvHB",
  "key26": "5hAuGJy3zNj6ZiJjRfTF7F5uXyXKTHLzDMPUYAtJvtG5VgYhHuZdjwun1FqsNUZtcwTa8hA1tW71fArZieCAUC8E",
  "key27": "4pGf4abndkmAajzpJJzKgdgt52ktNGh2gemPc4H2kpb7ijPPBe26vNVt8A75SvEqjgASMpGaHUfATtJDKMeDKnUa",
  "key28": "4dyRqYPhrW391kbPLi9mq3HWAFyBh7MJ1p6a2bj5gNC48J63N3HamP5KWA6CADYVQuVe4PhjHW7bVazvHRPZFW4i",
  "key29": "3dL1DX2ZrWbJhKB9k9KYsKQVqY7zJEKpMN4BqSeeyPPT63ywF5JjQ2AxHR9u9U4pEZMQYRn6VWWgYc52fT6oS3NS",
  "key30": "4o7hXQD2TMLGDx9Qa5k8xWaaVx1z8LdL8V1FZ8uZsuGxdyzq7rS8yS8fZRFLJij9JDudA1mM2BkynPkWagYediG8",
  "key31": "4uqAgsemMGAwVsZScnSCvu14skpg86h4sESeJ4yYmHP6C4kJPHSZ1MtJjoVSas9a16ruyXAG4QmPy89yLX7rLLoJ",
  "key32": "2sVEsroq7S2uzW67FF9bKQz3ApjFCp1TEh9iASd8neLxnwVwa4h4LwfiMB447LfDKjxKzjJBHYTo5g8p1WqTYy9H",
  "key33": "1acseDCvDcUZb1evXYEkk2At6iYKKytsgp6jLGKThtX7nGs8qy7i7fcRwxyYQHrUnxMXxRcVnReCxBiBhHAJuPK",
  "key34": "q3VAztfSuNk8FAvtMeZmubrBwrRa31HP49J3okTE3CEhu6NajiwoipPHtGvuMcg363CHWW9xD1Q7Y12A7oY2Ryt",
  "key35": "4kjBp7C6pCgzdV4uh2gxe69QZqWeU4z5JzV34hhLfCqty3gnZPBco8y9hQxZtQ6Mi3bC56Guj3UUA16oiBWvfT2A",
  "key36": "rvvhcAYurFMSRhfyc4MBjVEtvs3aKipvNVNgUGN7szuf24mWgivJTXjDDQYTvus7bos8fFVnH3UeAJwDf21KCtu",
  "key37": "4yX3VVih8JZrLzsXsPSsE6zygkoCdS6bZ3xByxH7RBfSVLDibLqcNdZCZ83Ww2VDxnoaWfvg9ePmqoHaVx82bXAM",
  "key38": "2WgD8KqQTQNpHJgruzhQBEjvaj2CbJYxysk9f6yPoEwwxyfRMqFmQDLVvJpXfqnKqSHa8zgukyowQQqaA8knbSdS",
  "key39": "4JBrtz1io11k7iXwnPcpRCpoRUnE6gVW5W3Z9WNsttt89qZqPGRo6hMW7M3687MAX5w8n2xgp2yMEC4aTPyUJwfx",
  "key40": "4Nduu8XntRepkjWKsi7BiSNsXrw7JkZGWjsqXHDr8UCBg4tznJxBL7CegczWsiL5Svi2LiQ26TQiGbDAZKrcgNir",
  "key41": "3DAtD2owNKYLCcxCZbwF1uHw1R9RzKeWQWJ1o2WbUQsD4GtXKVM3SU6GdLcm88ZaP97oLxUzWkKZ8xzNTCcFoyrx",
  "key42": "413xzp7h9ho6kHnPzNfWdL6KtvwoigxperEaDyGLf9M9E8bYJdRU9k1t9mPhNyNhLf2h6U5XPvneCPk22BV2WAv2"
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
