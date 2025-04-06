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
    "2Uyb1RhV4N5jjtFuNSAcBWVr1XbA5DKfiHVhq1JM32LR5FHDFGGkFD2woNqgFyp5s5W19tHAoxASEQpJe3uCadH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHdMnVAiuv7bWRbkrzsp58oQT8R3a4wqTCugpGqZkC8kKum7GtKWtXgziCFhCxqJWEVjFJn1YHL9Eisjy8kYd8q",
  "key1": "2mfJYgXyH4hnQHVADZgM9KQXBV6cw3sjFmurMGqj3rxAsFrJeRr9pb18hHCjR6A5CaxBvgjkq4PLLS4PyrwtKpvd",
  "key2": "NFxcJ1fnNhYaFVfr6T1ubYDzPceThispYZ6ZJMUXEkteTCY4KUBZXkdxmZTwkLQipZzZhxCizPbFiRPmX2Tsm3g",
  "key3": "4njPvy2BSD3cbvYseNgCe1fG5T18mZpzm4TcmPr2VSVhfhaiKZ2k6riYu8G9wxCBmPJsrZ9joacvANhJFtwB2Bjf",
  "key4": "35gVcLr7osXYsgYRC545vxTx4wiHRJjhY3VAGCFJPvapoKd4keMAsr8cPsFf8LB2qCVxByEHqn6XeDP4otNNNaHv",
  "key5": "4aL1HG7A4RdhCa6ZMeFhQTwJbsTCHjkcphYeEEefiuYtb119DfLTTijWwErMBNN1uanFxHqKH5zc5jhFQmDeSZ3E",
  "key6": "4Z52RZGDkPW5G1NWHbrMQNZe8MxGTVPnU4UpTrcGXGKSKQcyc75yzY3JGk1K74rmTRqkdKkWM9oGTLbScoiVJ757",
  "key7": "pVZ7rDMUmaeimuvn4ZA6whYaKu2JHsppdxUrrk3N2ogqWLUkfb2LKTrATfTvp53Xac3iYRXyxy3qagYB5Q42s5S",
  "key8": "3ywMjoN2snyPJfRAdgXCBFLVMTMFM3dNmwSzaHYpThF9AcEBVPBje9ouFfwvonSyqCnjM9gB2KcNQXo6FKjqqs9X",
  "key9": "3KGYJF9q79ZDyRbCUMxdmEAWYBbUZRk8gZpjeqY2pftrs71dENoAt3uGHAYhSsZMt5WHWsDfrfjcy7XEtWjc4u5Y",
  "key10": "4d1dfqjoQoMjHrUzMpczxFh7dxB3yuTbSQTnfP81NspGRSf9b8jktYPHw4ZLY7LHaCYxnTfKCd1vLX8iihN5DdFM",
  "key11": "3qbQKK7ZrcfGTSxtRuAWQGN3Ga85oToK1QKw11f2HmzeYXvsf9dzyNkdSAL8SsZRoYVjTDDaGBeve62CGutnk2nX",
  "key12": "BdhzUzuochd8zUXB72NRQNb5QcdXDrJh82WpUs4q98xU3SKeaQvYtKmjBv9ea4eEPLrVvZ7YSK2a4NdTqDNRYFg",
  "key13": "62EYTFfE6RasJRKJq7Nuppb4w9eXGNmW5K7czhWzkN6DR1fbifTYe627Gc9HGZB1PWsgGnQDuePUbqBepvsUez3h",
  "key14": "37NRLonMfQqVmqKpDQFoe9Z9HfpjnAQ5hXw3gRhXKozVCZkuXApuLA5mcj5oFXfKRMqDxQYneeR85GZvFvy6XPan",
  "key15": "4y41Cm7kpmfg6j1UNwRHAcXTRM9fSQMN3ELji9B85qpywozUesVMGnigoyEzkC2WKySLZVNiUrXz3tuey9fhUVzi",
  "key16": "4SuxgnKxjLgZxoceVcanjVdhW1Z6ggvo4Q8n9kJ57WrpApeQSBiNSPxNyH1iLiTphnpHUCUd93YLP472LoXqt66C",
  "key17": "5jWPmQEvSETnAsXS9fo4efa3h4KQwS9h9UyTD6YwGq4K4rQsTgTM2PnZAsVAzFus25PPWgVrbD4qHA8DPMyCewpd",
  "key18": "3GKcM7MM7bG2Yc6EAHd4qFns62LsBgjqaXZemsYLh2vT4g7vZ1jgwd99XBHW2nRGMkKcTn1W9E5bzLSM19dTnToQ",
  "key19": "2E75jka9gjiaFRSuKr6iMA2azqTodvHGnfyPdejpxSsEBLd5eH17XvXCzctcRnh6uUA1uYfY1JD2KoV7p3SQkiY9",
  "key20": "2gwWH6E4WbRsAstsWFKAQ5uCXGpzu6htjpLy2fQbZNVvXfCwm85c6aLeqM92cM7sBdpN8JZDGuKGY6esRAvZBfxa",
  "key21": "j1xhTi1gf51GVKnxbPTZwKBg7LR8G3mMdxJDggufK3ckNea5E2pX9JkRatsUzesH8PU5b1x84vN7rHczPB9tEPk",
  "key22": "4TMSSAvorRi6AvPTzKxTCQGRBk9JzdknYk8cA3L4h2cpL4hm3faZaA5i1ajwsqCuc7cb7gHrykMfVbnSGKKmBnvi",
  "key23": "si4PFhXKASK6c3wYV7mPAgv8qTJcuZnk5aYuB2xDNe79NkgX3YhQAdbL87Pyti6vH6QTfK2wSkVjigVg8yD3ME2",
  "key24": "cbbB79iyJ8efQWpDEkypaB7Nf6g7SrmjjbFCwrrm2K2ybcEfrLhkxMsT33FLgEZcWr7rR2ezDwyJ14gAgFRmgDG",
  "key25": "E16oSFj7KzD96JvRQ8RdBRZ7FG3gsdfmcwztPZY1uQ2q5UEBMmgBMgiYevadAPvpo7ehjR2x2mKYjv93R5464si",
  "key26": "2gEEDSEZ5hbavvdMsC1zjnBgWdnuyRToAKf4ipDqHYSTQacGfrEvBHoU4x37v33DyXdPdkDJNUsywj7SJSznVAsg",
  "key27": "4aZPaSZAntyvrEZCDReSdWc6ApdngprnbkaZZdNir5QVNc2s4Q3phEbFyFuQw5vd9eSKoA6xJJUPL65V59z285Tt",
  "key28": "5rgg9sxb3ECPaoNqH3aRph1yzbCDkSGjZPJ2k9YSp4tFF1mUg5vLJB8bu3CQ6ARMfyG8kvo8yMCbnKpEEM1tx2t9",
  "key29": "4CGpuzCyC3DyR6uF7ycXcuftJqL4PvjDorVYpdjZ3cc5U9YHAupma2vkxuYPnLjzEghcGG9HwezMUA2WE2Rr9brE",
  "key30": "VWrqixuXrqe2KVDoWyThPJDxxG14TzqiEMbRqXTEJzrh8ragTmH3GcvQsdwCcacLtnUzycCANZWN8e9YZQfWCgS",
  "key31": "p31tWNBq2ZKr6GCDTAkYYnVMmDgyGN1ssSgkfwEfebTof4GAoRcPn2zZi7jgemsBYsouJQBX68Jb7zTCQaAzorZ",
  "key32": "2UsJGchdst4NqMgsu4QMP9iP75HYP2GsQAyWSyW4ob3ZyyBiEyECyqWGZpgopYk7VXsu6RvSNmSETdLsGLZSTQL3",
  "key33": "WTMHwcgGoCNZ7WGnfVrHCwFwTdJFeZLc2quBLMC4mC6MPaMCwzkRCrAMpFE5SfgRAdbWtgwcN7CnNhxBhaDEija",
  "key34": "3drr96PP8Tv4tyobFvUf56xXBcvkNPmuGYSbTsMiyTPfp8v1QW3vBPAV1d62YcL67Hav4KRL4SXvz8cfa8mRx4nE",
  "key35": "5zMLThmm4T8Ju1Eki9wtBxNDQvwRgjrgHHc8E7VsKkjbzNMDnvxfvDbVRuZ4688A6fkLVRgtUJB4ib6yWMkXfv66",
  "key36": "4FC2Y1V2zJDHFtdkqWVEfp7pJqiW14WTRi6tZfUnBxMXBBBLKnDkqyzd57Mv1ueFuY9RrtEsVKdNjYCAXMysuTCH",
  "key37": "qb6fw5jYnmBxArmNX3zYrNM5MRiyfDDvkTpiK5heE79pGk15T7Wn38G9VeDrGeEGSjTKBaYUMMqFBVB7nUFEivJ",
  "key38": "3YSN8HAGMjpz1xvnmxAwnUdrGF561WsR4QqgYtgR59TgZZKYRNVsRRzR7NraxogrpW9ohJzwcJjbpNjQDawfGFGY",
  "key39": "5jo15eFYThyXW32TXa6CLxTYjR9DvYAxgHqM1GatMUAnQVS8ARzBmTgzfxsEypv2T55ZwTbi2gsyLbt46uw6jJhE",
  "key40": "5JZugu6h1cWR7SsDgFXmjnCLAdd6EXFS9t9CWEFqPNBLt9xkujRZGywngzrqzvScqgWx7A64T25YQAKGBCEHcpQf",
  "key41": "37bdv5zWoTk38pg5KNoZwoGry963mJ8hoSfhr6qU3f7k1TteAMqqvc1sizESXcMjTdBF3CCQJ1e3znXwanj4Hegx",
  "key42": "29DfxZsAQ76ZnKtyquFSboNicW9Wc3ogY1kjPw9httqZTBoHFpvutQW5cSw7pjfPs14ziUAvdL7JJHvWVe93E7jH",
  "key43": "64KbyecseE1k8sjbMpaVoBfBQ2wHZGzZaHMBvQkHApW88z3QkjxbLxbpK5HC5d7iBWb5jVYBgRrfkxABymiYnhDy",
  "key44": "2W2s2WkMzWVBgYkbv5P7CWnMLcXDBzWiedTDgWk5Ad22BLzQtykmZyoYJmoHa7i1fq4WjDSBCdtXoqBQKdvED22f",
  "key45": "JGR61ynfNSWExbhEDj5Pi1SsPZj9RyX8mgWRCfesQi7V5s2eGJP9ZQQMhRKpDXiNcSZBF6i86iRCjCEVFHdiQ9A",
  "key46": "32DuY1H5RXr6aqV6SX4xL8MWxYC3FyMQ7dr6CGMbfCmu2naurr8U9kgHriaWgFhScNoeN8JgnuRmHr5jzCXsKs73"
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
