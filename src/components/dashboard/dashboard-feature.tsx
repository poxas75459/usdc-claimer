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
    "4jam8d73YBgsyscGjWurVdoerqXGM7xoQFCMWDuWUp3aZxWoSw8q2siT61Kfg56yMuNgyj52LF7xbmzsDE7hoVrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TccwByHo5epFgmUWcqvZ7xxJYjgwMbeEFagVu52JAh95wWgQxX79U3McUxXc1RN5gcW5BPbnTETofJieMRH5yq1",
  "key1": "5vKBV4bd1KS8b9VtNgoNhpr1dyGqiizff1G6JczLbCtMPdak74FUQy2dx9DMQwY7XJtjkHRGYSpBsPwcinVrtBzg",
  "key2": "2CmESe5V4TfNWzNATA624Foa4qqP41D1QZHbkAj6Rjt9jc7isjoztq38fAug71DAFG5t7NeyYG5nid3hbFJAj5Q3",
  "key3": "ZY9mL9DSrs4R7REiv69Q1R6ndpgQiKW1npEMpCBbH6MGWS55h51jteSzKvSXT8wcBVUfrgoQsZowturH296LXC8",
  "key4": "5f49XsGZ35yuXwEa3b5QUka2Dk1Lj4U6BUrUYqtoZxTXFSKjii1ndzHGfU354XKgCfhdSbMr9Ciwf63JVXTqt943",
  "key5": "XdH2e7vjzfXcqtmwfrXxNX7eEsWVdENBVav4vcAxpZbsnpZP4shQaTS5W9iHS13N2nDVF2o86EQ5HxMqjboxDEB",
  "key6": "4ZhxfuhFzhmhTJP4EB6vgxo2eeGcwnTWci92psfbHfc5Z9o9iXFf57mvNfkJ4TP4t8AA5w7S1tCptVqx95r7X9gW",
  "key7": "4chvoAw7kJuSz8epuupktgQhLHDtBkVUF2yXj7MgPXWAdREfZcyEa21ghbBKd15nVDj3xSFKyL8yrX7iDVXEUzV8",
  "key8": "4isrf5Y3qVShFf1Wz76RHHqVvgrFVEQyukzgVgDUKhZmmXXdhrAxM8prhhfikanhxiKFLMWtKC8abZQXn2mVDXtH",
  "key9": "45NTKFoeFrL9uVkZdsDCrufRDn2BTYEo7eQiRimcjpY9vP4r2N31gdeW58zCgjYvMgvcne31vZXLEzwEEjk2fy6J",
  "key10": "3HG5uUsnADiqQKbFvz3TxdV9AV6CzGhiy29N72kQBDQKbCnqdzLs4LgjL45xpH7qe1FYfEabABJ3TWuasKj35hTo",
  "key11": "285jFF39pg6HqMCYYWYLSEwdk4n7wyrirenfdFHA6QAamDat5TCFAcFXxfAqT2fEEuNPuZ7dYoEYGAVsbMBbCaZt",
  "key12": "4vm8S3q3cENvHyu11LLQ9wLum7JBsMfs7DBArNSk8yijiEcWTcaqQDhCbA77HJQprsVzonqmL7x343zcqfiridxY",
  "key13": "24N6FfyW81b8dXSrXtkNc4Yy7Fi7WZMgm85oJUKu2iL6WgcttcYBmxYBVKRoKDxLLeaRKAG4jcv1uthGaN5yKiKR",
  "key14": "4XVXMUBSJX7yhgeZkE3HRBBbiA8EfqKrYJ3bitBuzbx2YnreRBmYZjjSqcfNrFoaPuA3ifrLY4DkoUTAWzZcZWwN",
  "key15": "4XvUe5swhTozDjVEDi9nbHTuFFbJjE8K9dLvtvMZcivWXMbqNm5EJjRwStH9iLCBcbTtdTKLHKWFuqqGuJtKavCJ",
  "key16": "2AV2DCagG9U6vz2KNo5CKixBN9zMKuRHDYe6s7tHxHzbq6zBCdw3Bj31KY6attpcPVrDVb96Pbn12qve1WPmSFLZ",
  "key17": "49zhCKobHbwFw792ty2SkEeuqZVcN2MPtbauCT2FaobaRCK91UBhQsNJLzs3dFLuYdsP5M4cJiTsDFeHqGMnT5T6",
  "key18": "m1EE4ZZEuKA4Up6HdeYBXRZaPPdchgxSvsq3ZPndEHDmt3eU3kyeAcB4tQG6qCj33vbmaipUBXPAFMMqfmaHvkE",
  "key19": "5GY2W7UAtigpDHWm543UQV9nuT89F6sqndoF9XwBXLLeaMn4XRxEVhtBinbknEMZCFXBbtfcxxKih4AsaLcBjgS1",
  "key20": "m2PmzUdDKL2u1aFqZbhpYtU2G9FbFoR5Mf9dmWAS9kbqeQAzoc4cKR58u5MBm6XVQSr6R2NmYXmNfeYuTM3DFa8",
  "key21": "5M6A8uu8vjgXPtm3SmCnSRxc5GNe5SqAxZckBNaXMsF9dicv4nRWNMJUCZnSgPP42YLMAikrKpE8ZHSwRUKzkoq8",
  "key22": "dasC9RTPtaKcReAzApmAkTzoTJK7vEnd3p1TPfhkXqyaS9u8f3wvuosjkTxZZXMTpAvc7f7JjwqFFMkisu3Wv7k",
  "key23": "2Sx7rWYiSh6Tj7NSR98WRJQEn6EW5jEWRVWkVdGKQL4QY34shnZ6AmfYdgvLbBNZi6TsMUpMKMwLMsAYENzmwWTZ",
  "key24": "4wKTh1ZszXGbpLeSx2T8bPVUtPccL995UEEjbk1FrUHpvHX364LdHC8mxq6mHdMcfRmQyBxCSrpDW7r5uXxVWxcX",
  "key25": "3vHzrg7mm3Lw7zDpqC5h9WoQuYq19kPiTrvqgwH5j3EwPueVL2m5edPuxMBMvf3icPwPDpCrjtfbjcz18LqZcYE7",
  "key26": "5jNrfG5UAhkaAasLwSrXNNGfiJQFS7pt7UprNSq6sUJzEpkBS5LBRJXcdYqAQCp2owLWgwhggduiB8gT3vtHonR2",
  "key27": "5vwFA6acNBN3aFaBfnVA8RTy8vdxYCeHvWNZsEm66Hbc8wuonAGrhqYnncZUNYxjBxyvJ474TAdy1KzuxbWJZ2e7",
  "key28": "3J3jy3Y2cuUYUWVZoaM9KAjr71v5HyKgHMzhWKt6v9dnQPR4qRpzgbWAJqvuAyLamnQtbujDvUXagXDbTs1TWM3x",
  "key29": "1x5N3oHyNudNSiaqvPqT9tWwax54rbF2knhe2xmD9rLGZ7eKnGeXJeT9ZvjUVdCNv1Gbt8ABocRLhAfVwz69jNv",
  "key30": "3PjZENknfhwym93qprSvaAdM2QBy9ChywDCqkJVjq3Vikqb8wMMcAKE2ZaGSkxwB9vhVLrbQbz6wk6wFaiu7PVhW",
  "key31": "5Sb2CmgCAZFphxM5HJAk5w4A64baCKwqkebQ58Q35vweuZJtrvgQT2D3ivEYKJ9Fswo9GexVrjs63WM9Qg5j1pp9",
  "key32": "2DFpU9kW1KNXMGUsxtpCXEXk2hnXMP8BGPM9Duk9JhMracrfTitJqjSUunTVcePWGRGu9FGSn43ahKqdGat4FVZC",
  "key33": "4CpcsU2Ti28pdcNr3gr5kQ37fe7BSbc3hqxfwHnQeUSNrkTyM4WkF52rpCrst4haUch67SMbobALM9Gr5uBwhWgp",
  "key34": "3aKpGW2ZVNnc4sdkHxhtvwp8rhq4rmezdmM7jF7XcgqDb68EQ7kEPUBT4eAnupeBBgvsJiQ9cJVhYotSrkq5LARZ",
  "key35": "3RDgkpCCpXbVjS5wpF9vzvdYzTRpdK6pKqMPQLCMRu37pYG7vXbKbDgp5i3ok5oHxia3yKAiYXRipXP4XWaxtoqq",
  "key36": "4jAqAqohaJbAeH7xcE9kmgURBnFpqvX4PWeLxd7cw5gdSqJ1DjmfBv5dsw1rpj6ofUzt7N1qriSv7wHRnSjq9ZK8",
  "key37": "5r1ZjR3S9aitMYhJ16UCuMLNuoLNrnyamgmKwVatmHUT35RptZ7cBTp8GfLP4HLhNkGmzsDjHLAoE5VDwtjtxTGE",
  "key38": "Zcc1NSbwmLy6Ex6KnUsTKrtRNGdqKT2p3XHPGwvhiTRwkBK26yuMkizGKGrxk2akgWcXER7TXJeojUdRHrmCKok",
  "key39": "3sBc3je6Te9XTbxn3P4E5zXYV86PRbirvdniEqtGVuz4i36RpAWSQXzncMnugxuEVe1cMsFhFzuNKSoReZvsYVJm",
  "key40": "3UtBBveLNTSHAqmyNxYzh6MRFkVJH5JR5L8BFeTqEUmbyyiWhC5a2TTkFW4r6ebqmb6M47eZUmrkY1xr2MBs487W",
  "key41": "4Ka1MSX84Fbu5kdq1B59rjoVZobLn9qvzaPb8pW7y4KF2diynMjLySBJGVSGX7Wev9Fmsa9Yhc5tv6vQAg14HiqD",
  "key42": "5rPE6Cg8y8qbPw3kNEnyZAdcCK4Z82CdkZrNYEuMrrXuJy81P3hYoAXTiyZivZL6SH5VuyxAMi1xM6VxpHeHmU7p"
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
