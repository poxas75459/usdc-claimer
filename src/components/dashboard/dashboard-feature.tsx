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
    "5ZjjARNh9bsPV2NDEWcJheRkVXBBVfuWKzK4xpsZ7MBTrps3zZUN5UXUQYq2fMaXw6d5SQfuF33Az3Z71utVkG19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dbQw2wWGoHhEDZ8MHArtiwa4B7nBTyupPqc1gDv7jQFUCE42o7PLdjHRjzzjrQJqkKuX1Q4SpergmCmSdsoALrd",
  "key1": "3gHefKYGempQp4r4DdGK4eanVngQr7wrqQuji8RVWJzdboY8ZqqBCFxXtcdA6TAuEp8neQg7Dw42sUBroGjdT2Dt",
  "key2": "5G4zZ9wUU8aFEGMfdDyJkeR4pZHFkGNrmKmxUHk9wPvPVJtfzhgGmEJbxZmVQ1YfznHS23xzqkMrAsfNFcg9KwA5",
  "key3": "4GMpSbahAhM4qMXp23YvFW39pi7NzVbR2BmismwJK5H1TdMUT581LDb8VF9aUMDzGMw6s2gZak4NpLEDufxLJCwk",
  "key4": "2bv4GsEaskU4h9BF9Mm9xhM2Ji85HC7BWpvkiscGXXVtBofs4dqkaQBsfrFMMYiwQasAfJrJkNHRAK2ECzDhY1md",
  "key5": "5bdVZHcpyP6LxGfmGCePKWjNZwPVrC7ksbzu6QKonheDMho3DLZquucmMaXgd3gr5PcM5XFN5xgV7ZdLVa4d5ydE",
  "key6": "4PN6HvEqneNrqeAd2NCXPf1puwWUruhTsyeUE3X55hKMMZNqXTDm17DKR2ekfX8DDSU9eDbYRwLrwGAy5udkocJh",
  "key7": "4TdxkWFfd2VfJfZV8xC5NBGRSXmrxyZY7WEFVyXw4GQTHTMgXnnCYNdG9KiJr81zcGUc2ghepHmBTQC85vx6G1KE",
  "key8": "4ycfTNZciUGJhodqPtqrYtXtszwuyoiLexnJBfBez2qzNSskYB2vT2xXFAZVo9T5yQSY6HoappAMz1ZDBUPNESLa",
  "key9": "26v563EqdrBvYJYxAMZkbaTUra2exzZeZsJRtT2eFneDL7tgG8yRagH7Sz6c1bH6cy4YRzpTkB5qRo2CAkpQSHhy",
  "key10": "49UKh9713ess9zQTNrVsN8iJ4Amn8h4wGgvRNWNjsKAKCiNbmnomxTY2ns8SGrKPs7BmKn7jpGmbHNP5xL9AwBkU",
  "key11": "3HhptdaBRV2sKXhUXHQuxS8aXrLZp6BSmY8oHkuomt2RYrT2eYQ9S1Z61q4t24hFgSLq6kZsyPTaEiPuUUdBeSVf",
  "key12": "3GgiH9sqmmeXkxSGJHw7ZvJsi9ZbminF8ZK1F4JxqDMHgmimb19ZtDvktD19Pk2h5tMqFQtLoCxrftTsWcBtyRJE",
  "key13": "4937MwbwvWap4WethcPAPu7jycc79QFtBU6RgCNHWoNRH4rm9jhHtK7oNnb97Z7am44SiVq8awgFyCYu9ui8x76V",
  "key14": "3vt4ZY3Q2X1FvdnXTfUwFz6qv72YtU8FbQS6yEwRTJgrbxKLDXnYF2ZySWBhfVfN6jYayeiioriTitGVSVxM2egK",
  "key15": "pYhKKhSrNCwE61Q7bqEiLY3vS14EP3815MkToEyEUcp9SHUtVqj1vyV1oYbKRfiDCnZxbPtE84VVsacbsNMhLBA",
  "key16": "1fhcV5oGRnG28p6bUgNnYJrcCmYy9Db76du8ZxtBuZsGmnvq8B6S55J6juBFEWzV8VTaAUNDNJ8eNSADYXTTHUx",
  "key17": "x9qeHk31drPkdNfft3g624WyAANad1K9XrQrZcZDc8V7ExBLPTZRmtN48fZyjBjbfF33UMS1kj2uRLypSfXkv8T",
  "key18": "36J3GGh4EsM5r5Zja34vW2qsr5BFYi7trmgdSMuZwathgNwkayPG2tWeVi6zg3fkpkBVv3ViCrFfXK6JGNTHpqot",
  "key19": "5yB7Sgv3R1ydErNHdNqVdxTAkfUs48nQtrhe1W3a1K7gwMNZLv7tH1oJXYRUcXrwTy5PviRAvxMwe1m5XXruSkr6",
  "key20": "5SteBtS211syhwVpPepVuTbxbvEF7gzdgU9CgmTKLknQtkcsSnMHYeMSeEp4t6qXAh2YnGoDKTD3bbLG1u7jrrdv",
  "key21": "4A4qXYKxt7WSRKBuxuNwXSim27c4vuQ7YRBmUuXFkMUQq3imeWdMj3hQN6bcC5pEuZ6QEn4ggzeheGoEdpGwoiQa",
  "key22": "3vrT6xSqp8FhKFg9y4ndhxbUn6RVSAvaC9pNLmjMbSQjFkv6jH1TBiBqBsMtykj3wShTNLdP5HZa8g3DeWuDhb13",
  "key23": "2wCikoUKRd4N9fzTUBGC5PBe5unq77zwpRVMNj42bq63RYiWN16NfMw9y3n42D4aAMTZvRSDFh3CH7seeKXLgEHQ",
  "key24": "38DT51mgCSAYko5qV2HUPuESKBSnXzDASBBaz86wvveCQYwinXWEfJLi4MSp2W76qgiYSNHYY5P3kRs6Ln1wX9DJ",
  "key25": "4biWM53TGmkpvTbUzYqqwP7tRZzUouMFSApjXiMuHjBdy6BcRqVLxQaV3K7fhKY5UfPszB95wRZFWmQFFpor2WED",
  "key26": "5gC1ZrffAbwGq9QPTSDc4e7T2vVqCn5HfxoKNFnGeaUsHEmnHcLascsqf2rM4EKJUCXUo2H7KNVnZ5cGssqm86Dt",
  "key27": "N3MS46fbe6T9DTVbWocDSDLtxhBBJxkVZubWF4NfFsg8aQfs7DA3pBSNyKe9JhFjKMdxGLg7Y1o7r6ZawkUo2kX",
  "key28": "61J7pKhK1jKVsjLD1fNXp5mXbCh9PjXjQvyvb8u5e14ut5vEDFCnSd7EK4tAE6cZC2fcfebd2wTjubWVAL4g1Fc6",
  "key29": "3zbxarBQBDQMFX8u78pXBeXEZbHHTfQkCMKrdukq9eGP4asrj76oZ3MuT1mq5sUoJ2rVBTtkMJMnYsQMzCoWdxZE",
  "key30": "2iXSdwnvx4hXDF93ifmyyB5LkNjmB6HbLYgBxbc8ePqNz3ws3KDgmehrDdqucNUdweaEBd7p68gKLnQw8xVWNDRR",
  "key31": "4qS62tUDjuwqjZJgRiA3zkcKkWei5M8DYs9Sgo5s76C8MreCh8fiHvzngMXatbLsGCXzY75VdRcgv2Q8JkamdZyH",
  "key32": "4NojKJuaMz8g6oCEsudGXrpgNfF1K9Abi8euRMNPySCjtRrcLaeJ17oMHjt87vEKBx4RWiMtBUEADYTYvPbMPZ4S",
  "key33": "29LLCfeSW3ssqfMPMkEamFaxBoQSuq7QqPC2JMVMC84Nc9hJPXpx8PMWTieXC779YeDBdoHqw2vv41MCAgTVcu7E",
  "key34": "3yrBz1B7setDBkHpgo37w4Nrd6d2j3enFER2DkVVP6Z8eaYvdcRivDwaPNJtymLy91M7ivfgr646rhy19j3jWTQ6",
  "key35": "5DHCZq939yRQrJzUkDc1rgEX5wtcN8fDbb57YnXiE8jLX6tH8u1RFfsKwxhuczAic1Pgtyv8p734QWnCCtkjx2vs",
  "key36": "4cJV8EmSCS7s7THPR6DMiZdTauvADSyGtbzDxTFtjr43NbZ16dPCtEYpQdEd3weanyHALiXvuA5BgtAH9x5qksGv",
  "key37": "5uiWyJ9qSe2GrN36uTxWiaAFrFN7Z7EyiyzNvxTQxsTZTU3edP1bTypbS8qtXh72Y3FgbwWW3etonT5HNrr9aDJe",
  "key38": "2t3omxb7mwBSX79TJJ6nvvMZcsixkCbzq1qMwB7pi2UjfE5tCPTusEkVA5vM896C4BPGpcs4zW3wXHogNe9b1ghw",
  "key39": "428UWmNNxbCjTzgonbgZFBvhy2ZwtrdCbCocBv7g1Qg2oE3ifWHQyisXbg8DXRSRGAkrNkBRqGPMDuFhLig5iDmR",
  "key40": "4cdbEWG2Zd8YB7m5bndn4D95f3br8e1TYNHmsihUa5WuPyUp7TMZYFAxrStVnKNrNfPNLA14XWnAmpRUQ4TyqGQq",
  "key41": "2QjeBU4Nxi9b5W8EHwMoC8GtVGr6sM692tChrowz9QwLUDWkcrKRSB3NKj5YGr3oAvwzyuSyJjGx1hZH1hLrD9zk"
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
