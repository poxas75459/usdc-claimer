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
    "4wq6J1yGENTFM79vuRrToX5m3dpeSmzkabMjTkEW9tYFAaRoPUWqq2u8SwQYXfbxJhTk5VTkFsVM4MzCuVtmAX8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rBGoRsUVVqRoNdy2LYL7fnM8439g5WjETQQrDg7BsqDoDGJSBG6NLRu7bWM35pk1WXKQxEXYT6SmUGCd5EmT7Nd",
  "key1": "4cg2gdB51KACx5kdL2svnadxVw4i7J7DRhkiwKV7bMYKgKNY5aoW4avZzquLTpTaTRyubZYhZUVC4pqw8FMWW4HH",
  "key2": "4tnGSEDNfLJ3ZHjKeqchHSShLWbAfuq897SF2invcwpdLnZKUKkTGzrEBAuGdcinBhwPcGiY52bceoXTLkAqfpaW",
  "key3": "3yPxvDir6TxzxfD18dmysCLLaQA7jAGMkzV8pyDKhY66virmKFLvzptcwhhqZYmtudqr933JX9NShHwvKDe23VMk",
  "key4": "3Uk7yAHj17DNJ3RFsHJ6YMe2Py9x6jZuJdi3zp2kFdfpZqXEJWy6m77x6iSvhwvgdq3S8JJKYo2mPgyqgsmHuqAm",
  "key5": "5bKJ6VB7AdrPScQ9ddATNu1rbFgR25U72rkZ5svoPaWWqMnDL4ppK59M44QMChtAXokYvV7VJ5fRhEtyRNbJNMPj",
  "key6": "4CSzPZ1A66Bu8SPFYLyMeSa6de6cUCxttFFLEqjg8M7zvay2548z7vpjFwtytZtrmTLFm1KVGF42yDpwevVuv2B7",
  "key7": "j73tgTCRN7kpYADGwMjo1G2JzbzoxtKT5nMNHLHWj48FBsLkVBvw6P26DZNzit2J21pzu65uXAqzFwn7Gugp9zV",
  "key8": "3KjbhUvSzbwaLGYXveqeTiYQxCUtJG27MS3LavnkgdWJLKKCYzTSpiPHucmHMdz7kZyTEkMccZjrQuH8eX7a3Qs6",
  "key9": "5kdEqE68ps2vxGPsZ1QAjNEzEfugk4aT2UBNqqTDe41TNLKLDTNXXFiKnb9sCkgKnLTrWbZFseMN9Z6sYFdTLCsa",
  "key10": "3cnaeXUJyaWmf9MfBDfGQKHGCAU17RS4RwqyUGEnw6fS8V3DbRqxx5fUcrUatR6eJoNFeoctywuAD6u5bsmn8VnR",
  "key11": "5xsf9rBdbZ2DcuCsLdJfTYvvTm1Tba5Sp1bfrXwLybA3HfwLnPaVjXc4RHUQfrfaqcVD15qQMYFU6k72FKbiVvvD",
  "key12": "2FsP13e3nGXM2eijt1PL2ivAu6fcDkHaHvEsJVdPe6UTgutsieRduF7RqhmsLZ1RJ6q6RRASzeq1XuLLfArYjifj",
  "key13": "5tKGDRiwVXP3HVcRFsPnEQQtYEknTsfjPyjCkAKsR49y9RUN8UdmSCAJStrfv9LwdGmpKhbpEmksJf4h27CY9jtJ",
  "key14": "uPnDpuR73VpqJisPZ24QE66u6apWi8Cy5sBEEqJgwoJiGFFsfzkoh7unL2RGwM76yb7vSXEcDb2v4r4hncPQrDm",
  "key15": "4QbpzJADGtafr6ABRcAUhyeRndDhcBcCZ43uQUueHAhJS46dBYaLa8xRdv7FE2mkxktZL4JhuCsJBv5Tefk5WS5o",
  "key16": "2gSVgUHk3RiiqpTCMuQXMDKzKj592qRYBWziZS1XVSy5oDCLPt4AVxaURoKn5FzohF4S6dEqPsCE6sYyPjsqPRvA",
  "key17": "4J1RurmgY2SdHGzTDXBzMAiNzDinNdG1Yy2RrkRLSdB73btEoGme9AWfsS7MdFqHdcU8Vu5qRous1gsDcdFtTsLf",
  "key18": "5qWKkyLyPUQzXqxbRnv6qDxyNiJomu8jfNboNgGqechvc3p87jxkDU7B1MhXaPm7S6mswBk5XiX6vaUxHgmaZivP",
  "key19": "5n6gnAfzJhhbznvh3aK49ygJNZJSuFRDXa1ZSisEkaoCiHkEVBxBMPkmwqCDivnMVCUhmtabY4uTNnev8G1VMn4w",
  "key20": "5VYZg1BWKidJgUXaQbAG3VnXAFSzg4dxL31Q5U9qqojG5gsoFUkfQ7FqrCCa4YVBvgF2Aon8LJfikBz8vQNzDRZp",
  "key21": "5rFoR8s8qNBhbDzWRWHqKW6g1SJb1iz1h64LvQgRSKRE5QJeztj4K3bDJvMdRC36751P5fXx9ikXE11Pi2hhdcW6",
  "key22": "d6ViQwJiHJWbQXTUSGxn6EJb76UCkkLQ9AKXFDuh1Uf3f5JU6whFtCmnbNXm5mRyG3spHuRdXsYMvKFXMsUibY3",
  "key23": "5xUMoVm7Nau8FaubJEV3vG2YbgTS2acFqYPDqMSxzPcLxe7ScPmUzuGGEdKe5VM7rFjpdw672n4DVZDszRmcsCsd",
  "key24": "5FepD1DZaxed9tZKGGeSYsRqHn8UAzpujB3k4UtKoDz7XHNZJUoXRSke1uknrMy9C7WmfNqfz8CnarndY5FNynVr",
  "key25": "2FTfKcTQzTm2UGLXHxJaBm6vn191LNagDqybc1RJU2ACdnUt46RsPrHMn63PnFaWWifbZG1hXrzSnczdsV4LUxiM",
  "key26": "qtDgi1Vua8UTPt5Pg3nBCZ5MNDagpPk5i93nHZmj2wGJQZZedGvSFAJs9PoCNyEVBKGgX5wonKCwr374qBHvXge",
  "key27": "4PmUorNUUncMDSrkfDFnKsFNdTUMcrLpLqZgR6PVPPXJaiC8cqJ5RKLMFUmvGE2BpXphGSie1KduDugsD5B6EgkM",
  "key28": "4GhjqzpQ2bRvS4jtRqpockUA2KjWXomyJAqM48aRZhSHuheMMEFUyGdBGCCb1D7vTgDT4M8MKoH9feMTt7TbamLj",
  "key29": "3EG9v4zuBa28cP4cW7CQDdzCA5SMwk1sMczUiewvzt1ijQ9RyLwiVJRtfkNpjyokLauuGb7wE7M3YWor3f1bkSjD",
  "key30": "PqSxoDy8CqRRMuJTNov9M7fYmZmAhkyDSAbCCXAeYwAwjNBZrrDU1xsAK1psGnJmQmZDEGvNmAgKBUT2XtneXLA",
  "key31": "4R2uoXtGSmcuz2bdZNHEQgftTDenesAVn2iA2cT2Y4WXBVGNH9uCw9Acoer3gJyNeLEDswLGjUEjqDjA9zeBuiK9",
  "key32": "xy39YtY3cvDC86wkg7gzRam8yXeJX2Gs1itEc5xGkJ45PL1LCna1HX6S5V4ZD3imrnPysNTzjgGc3iH2x2eK8Ei",
  "key33": "48LThVHGtfa4MmYzqyRxTvuT1AvAKUkruay7CPAjMXgC4eSEmwEPGV3SqENcWjwo99hM8HV7iGu2t6xz2szivXuf",
  "key34": "4UGmZz4ztkJUTryRdAGdUSLY4UMZydTwCV1BwVXYXzuvCMJqWKPHKTNTm5JouC6izfuN3iT9eCG3dud6DaoVDDoz",
  "key35": "4ZXirNfLDkR7tqAHc7UZhsDoCxZnNBFHXoet9QgDfMbbDwRs3nThk2fk92x8f2XNuCHt31u9BzdGQjJRaLwpev12",
  "key36": "4oLKqvZXHAQGjrB5AHNtZvhshZ6kXMQ2ka4X5Ncbm45EdbX5wSpKVHC73GsNb3qYqQqV8bu5xLU17WhesenwF6dS",
  "key37": "5LZY9mNspGFBnpDVrTKTdxYBBr4Z89NHFFe9ZQabFqhKzeYBwGGaUU7DdkX4qQbpAWb2jbCP3UjCPoJ9WYDR2NtD",
  "key38": "4yTjmyFQeLfJJbzQMVWEPvchjYxCT7sCZxQfrmFg5eDp7K96kvJr2e5kEui9VBLyZeaf1r2ckgyrtvyHzZzvEDTK",
  "key39": "5g81R9AxRyk1KGGoSH3yisLL3GUHGasbRS7cDg9umkkj4UcQo73CXhHLe2j8KukmctnteeQsmC7UMCVsLPJUjBxm",
  "key40": "4bVySF8kmyoy8XQY7G7mEfBUTf7eDbNy6SPc4AaxGyLwJZY1tb9CYtyoQpQ3gW8KsWrcKsVNS8JeDSF8yxdZ76Gh",
  "key41": "4hnAv7k4t84jTf2CaXrGcgLqsZC4Nz9YNkFtY2TBwVLTdpWKAsAyweDNa14G176BHdxv9ASDRRxMajy3nTD6RcbC"
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
