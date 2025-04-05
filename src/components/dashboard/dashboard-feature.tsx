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
    "3hKAUuCQ7oiugdixiKZNxzUfbkTyFjRPEwep9Deh9c48KviNyKYzYTCp4w7NDdJDuG5NpBT98oHnwhbsWWtKC8oA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CwHhGySmaMkwwzWNbreLNXhRHAE8nsePNGNPSRWx8m4D2euoysDwDwdmxDa1TbmZiuxwF5d2WzEvK2L44c46nwG",
  "key1": "tVRVq5Y6thWjKhaqwr2d5mrmtZNXwTeyEnZa6azXHsLri2HNRs8QkJxKQwadGmNg7gwuH8NdcaRuPizGW2AaNFt",
  "key2": "3qhqhQ84LCJH7xjNt3vS24BGfHdiVK72SjNJ5WARZfYSK4odpbHJQdDHZyKkedUTX6SyKkNrH5s2WXd4L7fC8dpv",
  "key3": "TxEBmd31fetdewbPo6J8mgoGF9M6kZSMUCZuAPgJNMZEGCFc7b89MtRBLFkJC5i8312MvUs5iSU7VhnHQHgqEry",
  "key4": "4dWLjeEhggwExUYfDHztec58U5AiR83kyefxayMt4QjsJmsJguVFihqzTnXRUjQPT74hb5Hm15QUn3tgH6XUfh46",
  "key5": "tSUmvzJu7JuJsCiVN7ZvMiagdzMoydTxjYhRqWxhTHGtjsu7c8VACECGz5oMctJCq1MUv43cFmYS7ci2HdeivpA",
  "key6": "2WNLgGngQjE5CKMETxffyoYfwQJYi3TLm2CA8dTCnC2TdCXYBBQq2zW3UPz6Ku7xpm8cCAcnWj4ibTn6TCmF2ds4",
  "key7": "53BssBTWaNtRYsUMwsoeBvM45qn9jrxZhJHDLCHgNeXRxnXRrJ95Bk82z4hpoFAKh1jLrfxNnqQb5zbAsXGs6YVf",
  "key8": "4DvbL2jeiGBYDTHf5PCW1wrMXxet1x45B9XeL8sK3HDSt3AqPdgM4RL56JA9d8EadpsSSJw71Pex9Mv1M5fHjeAB",
  "key9": "431KymqikH3NZym2bvhxwV1DM8NXS8n8pVmqNsi4hgM2ZQPzBa9nE5E3CyVnLDPdoxY9rZ6k9b5qyGLywX3ZbU9R",
  "key10": "3Yod5VMpTye1Csi23JzwCEBEBTMzjoNp11cQLFcHQunkdTyF6k9gGoK8GEQLyzj68xs3BQpwTUnK5NCTtddteC8a",
  "key11": "5WeutRaA9hSgPGhjWSYfZH2eNAbEXHcuV6PV8f1h7yPsSUibHdART9EJmVr5fBp9bFBntXrxPRJ77nJ5REPGjb6m",
  "key12": "2SXm6o8zgtF4PLCGnZT3Z9N3TdbDQfwvpgvXP5HqnucnpDfKDsfbLDV1LADstL3zVCxmyjMKrKuFtDZ4gPiHhim1",
  "key13": "2cVJqJMFUXroKQEBXis3fqYqWct9tDzQae7Biy32q9WbAkU6TtkW3oTkb8sM7QHqDmyxHjhiMKvUX7Duf13uuzKY",
  "key14": "3H6oGAQvhHaDh5VXoauTLkX44okvmqheRGsDxQuQS6ocsdB7yRtzzdeGBqAvF5Gs4ScjLcJUeABLsngRRdhggWEC",
  "key15": "59q4RaUNNEHX8spntqSoCgjFQuUsJiX5MXULHbTeWwdTbdHFvkH8iUbUtJxqFYtLZauwnT8HQVP3mNt3qpAMnUkL",
  "key16": "3njhJsN6yJurDU59PnzD7K6PawmT4B57WnzayzeXDxQTAFDeoW4WhSeK9HQ6uGh1LXLRDQCvsn9ZR5ADPuwgnLoM",
  "key17": "5SUquFKsKpaYGAovN3yr2h4FCzdVQQEpw5XAP7hDvWMKH1ZoSCBiSV7ayFJZWgN1cu2DkTPeWDbrh561ji3yH4zr",
  "key18": "Lop59ueNq21hzSXqaEjV9oJvbASZAEUdTv2hNFpj3CDuCL9N3brxeAqrzySmKSJihUc5jfQHWBn7s7CuvVMNQEN",
  "key19": "2F2u3KdGetsL2vFWYPAQty7jfA1p4fa37HybyzwPoxjrPx4v7PQgF8PWCzXWRyUJsDyP4QjX2ymYztMjQFAhrtNx",
  "key20": "5w2w5mgKbSjW9T23ZPeH5tRDSvYRqVJ6Kr7NW3WuC5Dt4aD9abXMZraCLUhoJDUyYWakikQ691yiWuD7hK4M1bja",
  "key21": "3QZuvUD127xtCVbv4JML7ZKBCQgsrZCEU6yQiBAhwfuc6LUhXo1cQQkEYUyJHdhTX6AvLu1XfKJahx6928FB9g8p",
  "key22": "4y9QZrMNaS2g14rVJTg2oDBgSMDZfHaQXTmcvS8m6ngv6GbAbHkepUgypiUa7R7s3VijUBpnSLCn6HCrv6mQwS6d",
  "key23": "2rdmMbuM1YpHK5NpuQQGEHDZMZeF1sunbGJifHhycd8Mkpyv7E9CFFguw4YFb1oLcUwnmL6ymeqKhTY66dRaNFGS",
  "key24": "3RdV2ZQAwbYSe4HNXQKJpyYn7QSnzvxJS8jF9eWwEequNz2Fr4XkLYGo6DWqenrhnyUrjAV5yfuqSjLxWoP1vc6B",
  "key25": "3xNJmDUtqxXxLc2UVvwnEjDar1Zxs9drJPBYWL8nXue1epwmfKcQSQqhyBa5UUnUUd859hL392UMcgRj1n5ckNf6",
  "key26": "4Sh22ehUoAxKHmDTiUrdpJxeZQxj3HaFN2eDiT48w3nAjB1tYQQmzYi8VUFgvuo12y7LqJNLqLyUYuBSPXhjeaCw",
  "key27": "4ihESWnUMUmxBKyUx8yw6PDfk8VoDwFqdDz7qNKocBracpydffPqeiCsAN4YFHFYicE8uCeep2wmaYemRxDEwK8c",
  "key28": "3YGzN1gwSngJULizZCE7qjVf8qAKc4K3oLV8PWESg3xvWxi8FDW39YhC9J898smyTXXDC8YNaGzQr7k85hoRcnYk",
  "key29": "4zZfVb2bFWYy2KnWwAzP4pAvN57Zz4tpxAaUjDfzsBKi84qAUGre9UikemAsdm6ejwKADKu5YaTSgGnfavTiqnh5",
  "key30": "5Nrp9dHqzFTuwpUTBtRhEp4uWnhRJ4E5bzmr5bBFHdtPbvBBhR1pJJwrZvWkDSDd8s1yPkLrTtcAmLBUoLWMUuoM",
  "key31": "4uesqBDMnssQPNcM57W8cRgEVT81XAmSxfFbvFcQ1Uqeot9qZ57hdBb2Dut3Yr3s4U66gxeYZYxti25HhCaXUDbu",
  "key32": "4zUjLNFNcUK5UAbAVT4GBPGmDNz7u2rmatPuP1Bw4BX6GJUb7LXo2xRBzQX328hU6Go6wS7SzpUZtcqdenWBKMit",
  "key33": "6kuKKTYFadSpXWX8X5n55LYkBPSrVMgrAWcEa14Uq48hWHGvadh4mPWUVkzuRt1rtwGeAqPYBqigArw8yPmZ8cs",
  "key34": "4zVSF58oFCLfYp9GEMxghuK7jqXa4GMTQGU2drPKeQvjAe2pJvW69vWoGPs5wLib3RHgtPeZrG4vxWqkV44RLd4k",
  "key35": "2GmabuSqt6oNDPTDwst9eNaCyuMvzzANAL85apf2dTUgH9z5dHjQXQaFpTNTkAjLeSJokEJ2vchVMT6gJ15Hsvut",
  "key36": "5eL7y1CySixhMpEMqbWSY27QvCCEoBWXZ91PJHMyJU5qS5VebGELvCt2sHZKarY5kKhj72Vvrq3ZEhZP9wNd6Eyg",
  "key37": "2ZhU8SFua51E7FvQnUn8Pe19iyK1RhpsisvMg7J6cGQ5RvqF8hewj7L5263m5iD5oUwVsoTyTMPsTTS1VrV1U52C",
  "key38": "4XVe5rnPQ2zZqmYr2MFrRcieCo2agVx2EFWF12wa7LrnZoG1gt2KfnaeGDCnW3bYYapv5LpYWtNV56268mp4hWAh",
  "key39": "2v392BAxo2NQyoqQtfouKBarokYY6h1f6rQcx1Tc7LNW44oC7iusWrmBc6zcE42KnEHskE6ZFZbeRpSoXtUibyzY",
  "key40": "3EVBb3UAoXebE2qXWrG1fkqpJbLZA4kuAzfbBC4YWrY6Pcv2PcpgFGmeXwxvsFRpZh4eq3r44fQGd4YXqcGrFvmv",
  "key41": "28iXB2UPtYw5qbjdN3whQEmjh1th1SewsKA2anHMngzf25X84mqs2KyyMkHe8CtevozAkC8qQ5wComPWvjshLoJx",
  "key42": "2qqAyN83ff2HvfPUme2YN7VG1enbrDFxX2d6Xf4tEDrm5BxAp4AE9TiSxNtMMYRkXj4Cp8Xc3SzdYjQoueBxA4TA",
  "key43": "3wMkixKDJ9y4oE8PjwEzBbCrbhBYSADo1kzioJLcimqDW6gktP9UHz9d9R3sESaMGisHCdJ8x6diNjfFvGP6fzk1",
  "key44": "2acujCQe2Ywxj18cKCGx8cNcKGXfoit12o2Y7GSWk6vedAWNubQNg33FUKDfjn4Mjyfap6BijyCQNptXgm6v5p5P",
  "key45": "5gwHKjh15kWvnHGyerG9Yf9TgjcQmYM6Fb5E4dn5gvXyeVmTu5tyzmntf2xwfao7i8niicmyiYgaeYRyVR8ciDX9",
  "key46": "5TLZqYjPP5Q8S1cSD7KLfAAptYFDzmFxoDsVELA5igQrvLBuDog95KY62EQ91kspGiNQr8LyCBroBMYMxU8hZWrc",
  "key47": "54gripnim1XQdHcBpvMijDRiUboHcYiB5rrLgrMn4ZLKZJwLthYMAvNaqYgjXXX53SDTECzuB9AMWagmRG4wsK2u",
  "key48": "29463gUAETv3GT1ZEeCFRryu1GtzNxsgb4GDvHUuymwG2vNHUMKz4QYfUzf8sJKHNGabELMkcseH8MfQeA6iAZ8E",
  "key49": "5mciqwu7JmPKNrNkGWKPwtMMR6XYkGEn7yNr3NivNgQueHjxjg5APuuBLo1JHpxJCeg1gQuejQfgEMnYVFwf2KUp"
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
