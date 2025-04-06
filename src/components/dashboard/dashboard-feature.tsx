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
    "4DKhkYDXdC4bDEo19Vmq5rF7jefGxNHGsFgUo31D4QxAz9y8VGwFtYAE6AKAXgCW7bnmTBPDMgp3qn1r37akCFKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ogqb3z9UDGVPtidiutfr4FwNd6gPmNgocx5WiCyfny5nuetXHFbqsD7WpZKkA5vJhy1jboXyENXyjabB3HLfv88",
  "key1": "5nJGKC7sm67djaR1r29veWhYswGy9aD455vgQ9DfQ67oV3fBUrQSj21Y9qxrogUZtDsRVF9G7BmDVSuD743HqFUn",
  "key2": "33wk1Hn3XRRgDmkKyCPAoH4DNwwyg3sgX2RUUx8qpB2WSMg11pviockQ6oZjDwV4XEGnVBQHYxUjiZRKmmymmRic",
  "key3": "28auHuqb94E3zc4YJJV4L5BQXg2eV7Wtfi6jtToMJnbA8YPDRmHwkANb8o8dELkvuCM6aQAbfn7LeseX9SPW48yw",
  "key4": "2svxS3KqhJJJDUBYnQ4b72wB18WFoirEvsDuSj3AThRadBmtZMQRsXdN4nfnwZ5mbDKFjV7Z1fL9fs9aPYRjWiub",
  "key5": "RzzvRLtpgm85dwk72fVkGDabBie2JxV6A3GTAU8UwmYsE4AtDjpkwT6Pw8QmWpMp3hTeqskM6fLhjjjhuVYMtGR",
  "key6": "5RxUxy8pUbZoL3WAEhMRLtX5VLnNgCMnZgYfAxBWzbLRasY2vFDJrZCnHxDV2QtJsTMVnAsxj9kS1DvULH5Myjog",
  "key7": "53Wq2K7JPyn572fU9JN8LZnPa1pmrs5rZw7imH2zePsYSfs7ZS73ZZQp3ooMPnp4XurbjHTWwu3oobwLXdwePhwp",
  "key8": "4qorbVxHfE4jfQBy2EQRGE7jRTLfiMzm5ZX9wNqVqvTPRv5PS7pp3wgBxL1HSK2BbR19Qsjh3dVRsJrCrzJNJxeD",
  "key9": "2gLCbEyf3FWYpGPw58TxJ5yhm7K5tNAYuhYgAghraadwNRD62GhrghopAXLfPUfMmrTsYy8x3hdvP76KSjtqeL1z",
  "key10": "21YJgz9Cnh1sXweYaQ289b2dWYxzQFmTHhoY9ccBk9Y15LkiDiw11VEfKQsVvYiLxuNrKUwqsSjFqzrFfpsdFjzJ",
  "key11": "3ox7zjYBVNLU2qX5878uqS2fqMP9F47Ez4V1vMfDmmXLoCWXM321YreRYNiNsCVTombxYBzT8HPx4m5yjtU7H71A",
  "key12": "3mddaVZnV29xm28u8twe3x3Qx2Ujc6CjUkq9u8hoNFnRLY4d1oQN149T5dSNNp2vHJpmdXWtZwqaFQ7EixQaLahK",
  "key13": "2Uj5o96Do7skwtGWQMhwXXVeB5f8EtRc8z66xsDkyyE1DWiR1S1CcMvib6kKG38HYFB9XGWzy1iKrDL7zw8R2cB1",
  "key14": "5cBN9ryPC5B8eMhHznj3derw4gbrC9aoeA5WVes9rgM1nNNg2dvSPtDaCheXXeyEhC1rM2pt6k9onSy4esxkbQo3",
  "key15": "5zL7Uu2nvrxhDoeXWZtjZNia66h1hEHuzqc96zUa373ocEgdAZnkeuqvUDguqzDJJ5K1gJcsYaUHhQdZzJbspmvT",
  "key16": "p7rWUALBXNEPSiCd1KorNy8FNWG52eBLKiHbaHbiQY6r12o8tvmHHKWne58EptmL8FvJp3bZCUyw5yYYHSmmnmH",
  "key17": "62nHXpR3sRNf53NuqL1ufifPxnSpxbaawPMATfp6BvHeLPiSbnCe4cjhC9ibNEu3jXsZhDYAnGQD9w5AknMtuWpY",
  "key18": "58ZzQ8JGGbZyX13iie2LcoDPocjyubfnjTAUJYpHX6g6VtdJWGzaTefJ58wC9sJmRWVbSDYoBxgXZ3DRzcrA6ke8",
  "key19": "2pYu7VT1TxnKQa3Yw5Fa7nRBEPjE7XYTEMaGjX5PKAMawihPY358Et4JEX3TE7DCtRnbwUbz4WDtauRJrHSwgvVs",
  "key20": "4TVBRmb3iDn6Se5NYbgWMo9deFzK35YrZtrX1bGRHfe2uuhUp542rJh9RsTyJVj3M2prAWjJnbnyLJvd5ttrr5pc",
  "key21": "2vfJZXqBYHhP6LJM7icC2psDRrVrvrzQxEiMrE3iq3MMEKbCe4brbso9LbPJ86fTSX46oGrwfSYY6aaHUwXUyRng",
  "key22": "5iC4inx1XL5JWQT5edPaWFeCqtUytRKaY1ATszHHZvM6QiNmYmn7GaCSKt7ToPsF4EQHfWw2XFigCPyKWAUEGVbZ",
  "key23": "5DJ5jAjU5Z67FG7cN3EGvm6Ga55Xa2FZZBuVhFQLKPfo7RjX2JK9SCS5SinJBQTAJJvUmMXhZuJwPAgL1EmEG6KU",
  "key24": "Wn6AwgZCohBRu2rVy42LivHe9jGt5GBrjRHrFQ3VSzYDrgfgJbqoiGSeDd3raDfFTq2Mm67e4U3qbzEMgdNgCr6",
  "key25": "5snQhcM8njKr9yofGuXkHeBbGEJ8rFdBHsBirsiyeUC346AsDJiswe2bGdsBYDZdJfEdzWq6B9fAP41GrRpx4ZAB",
  "key26": "5v64PWHE4WhcTFkK6UMneprLR6RHUAjhJipyouT6LqfcqaqVsMFsgXd97grAQ9um43yrqaYqSwBKASFApwB3EqdF",
  "key27": "5ppXfBe1cYPEhpY8tWe4RW5aVbutkWtPkkYdfhZBgSJ4SHmZUwCoxVUjJ3noAMhyFCdWgg8KHaqcfnrDPksn2H53",
  "key28": "gbHnnfnSovEs2PgFF5fKf17jjzgeK87Uz44iE99c2HhddPwqHCGecBJ5vcrvYihyCrJEKFPb6czoawmKZAgmTrg",
  "key29": "2WvmwN6xRcedqh9RVFVaRvEEQ2n6hKhQvMTxwERHXKaoSmmi7MHQCqV71TstMJpC4vDV2XJypRNNP8nH4eR9PbsK",
  "key30": "5ZURLBK87dSLF5jbWrNSsudLuHYsRTwaU2BHmbTLJYepS9rg1EPdimxVT2iGLXQKs9m64YP9hFiwBiXHzbe2Arnt",
  "key31": "2rodDJ2vTfBYQZkturpwkCNd8FVdvrJbXyVVjfnAKmKq8kDV1VgfgmxrUvTRvSgEih4YQYirFf6ZEo17BVGCYvNu",
  "key32": "3EZHgZxphbPCYUWg7EWz4w2vpZk1gnQCm8pvriqEMsVJ5fE1A67uMqHq2dk41Rr6AQ7uDVWJjkqPximieazqHwgD",
  "key33": "4sLhj2TSjSnf9bFzGs32ZLzpGvqG9GpWJzUDdpdMwPdnLLRh4wyCJXqPjREVuBoB2bez1pmn44D155xe8T5hMZUj",
  "key34": "4aJu21VsgDdi21cotWFdHoKvE7M6GA7KMPyUrKafJiqjhdJC8xfPKvxzAb6rHaTEWERdfVsCG3MPyoGCrQS6z3RT",
  "key35": "3v43hT2xc6rW72bn9jPhUp8P92oAJxCj8wCanM2fC1DrzS4UdqxBPLgXy8x5v7m2RBdJhh7JK1mnYExhLAsExBfM",
  "key36": "2mXsbVmRRyrzomBnaSREmgp4xTdgfNWEnVrgng4Xzpep8Mk4Y23ZXzcc9T5xkZx7YsboLJgg76wab3bpF9zGTE2H",
  "key37": "3FPCJ2JxBWD7LN8NkwZyfh9HDfnb7mNKJjQ1bpVScS9tQGY2GxZQS1oG4H4Z2qh74WDJdqduX8q6aYbfGzbc6mKz",
  "key38": "5cRRRVar17ZyXgiAnJSSTE3a8Hox9pYCRLUtGHBgRHASuD1XcN2cyRghhfDpfFro53yEZg8yTfd1rjJcB2YSLcS1",
  "key39": "4wJntPbp1sJ4V6Bj2YaRsHmbonnrNghhpjTEgJC3ojTAcT4rnqQJkuAd5hA16ETgR6SJ5fMDUFQxw5qSU7DMxwEE",
  "key40": "2J8zbUgALRQqMKHntWaZ4mTLePsSxEMKxykTdz2PrKiQsMcs3hBoL5rFf8tkGTXWP2byC8U6PbcrtKfVCLqecwL1",
  "key41": "5HXv24rgo3UGhD5WrTeKoGx7749dDSqGiuoqneXaCJzzggMwjEYGNjm8tPxfxQg116uYn11Zw3HCqQoBDm4PThgp",
  "key42": "BNvwUFVNquxLg9UQtPYcXCxzaNQ3VE3JZHei7ofoRpdZfMzoBhGJLJD1qwsRuLHcqi5UKFvKwSjfF9BwK5sDQi2",
  "key43": "rU9UcTSMiTEJ1NP4ojfbx6vQ9MSarCaafvELhjqshPH1yEgS4oYfPzbvwhkGs585sD3bxxSmJoSX1pdjDWv4qSB",
  "key44": "41VoRpqDLD3NcpFeyzvoqkAiztcVdhyz1R5wExzfEKg6R1m3E8MbkUMWaW7dKXMBvaSey5xB3tL4y6f68fdTePTx"
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
