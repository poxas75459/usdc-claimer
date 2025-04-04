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
    "2YXUEJ7mzXUzs8ZeKnimqPYRNBHcwciB688LRqsbyNdw2BqhbNfRm2FerCxanxtsmNKPpKx1tH8sYe1jdMnzNynb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W9xTewD3qBnE794nxQtDfo3cJ7zTpA8YsfZBCDbA9jGq2ha2utYuxy5aPPC75qazp9ufkRkHr22NnbcTZQgToYG",
  "key1": "4dST1gvtCCgHz8nANnKbYDUY2qm3j1PGhVgrRLtwGo4YYYofiN7zbYX9pPzTd4WHbGnBBriVSecZFGkvR58JfR2X",
  "key2": "4wsFcKfMR1jUSWqtU9p5RZFZAGYcKiBB4x9JmkyLUQfGn5hi67AGJANFXPHqzTzLUspNTby2DFBbpN6dP5Fj1LGC",
  "key3": "5t3yVsebwnjxLaTneoVTvcGhmaV9xyTLqTtrZDZjFEdsk9vq2A3ztSiHdySfVaRxn5AzYvUDXCs5mSVSuwMWpG5h",
  "key4": "4s9m5nQkdukbmCW5eJLFrh9NXmQovBs6XPYAwwpbAdgNQ3RMTPCzRRNdRuGwKqTmGMw55PSHKkkicwvFDDSwf2D2",
  "key5": "2jTtWvzQXQvdqAC4oYfVCMQ75Q3W2ixqY2gHjEBxi9wZ3yire6oDNswcCYdYHHkAkagJpQ5E5t6Goq8qQ72qwZmp",
  "key6": "3EthiAuHcy6u2VUMsm9aBTiWMyuseDMKqzUCxdD8sUmWzJ26W4Hn2kZihru3ihR72KLnuRrTHKBh78Bqy7DV7E1y",
  "key7": "5XkttjPjQudmdqs5JiZ4wPah4KEVw1xSPgzxDctPFjeYeRftet3Em6wn4EjAgYrfEnNZ2tYXcrpAyaWA71pfjLDq",
  "key8": "4oPKM5LiMDmwCQzn4ETi3D7pRPTxJSR1Vxg5LCvejpWUQBeDMWSzi1BazKCnv74M5CLLsvfkME1m2zLAb6HfxdKc",
  "key9": "352DLsgc9hgAMiieGYGPAipUhvttg29Tx4imcTJa1CmVyqmZFs9ZGu1KCX8Z3Y62HffwFdMECjj2HpARYrBuRCjc",
  "key10": "5YASrZQo9o3SENoRThV8n7e4WdVW3rroEfWqSLipHnaZK2B5Wgtabg4RqASfr1uk3uhocL4oJq6PJipuTvESnGdf",
  "key11": "64tLnaj4aDEKoPLyicFVitvHCe9fWmYee4Mv2A5JCTL4khLLykukcV5dM19VRJzCq5PLSkfmPDQtvzCifQg7doUy",
  "key12": "2hTFYY7U4hikvffVkyepTUXTpcwAZ93e2ZLzKV4NRDZPbvLq2Meqybuafzi2MrjG73jqthSzoFv6zdF8jNgibTKA",
  "key13": "UNAcFapQnEbKjaPwLqJceML4YEDtNXLdL6cbLsbDWjs4yDc1sqWwyUZx8UyRSYA6DNVp8c89h2CmiewX7GVap4p",
  "key14": "4DT2kNS9psZfrEzzzmrTtqShWm32DFUPUJUXMhtaAFobZkYYVZBD5ZmpuiKeWseFrZY1cbNcVeQwc5dMgenrbG8i",
  "key15": "4Kz1wYF4YMpvxxbAonmKg9QzaQwMBunsYkyc7Fri7B1TZtgPNY9GxPZuVUP49TH4iFcyMffQUGrNcBZw5Csx7aV9",
  "key16": "3z3HFsLaPxCfG226eTbcyBykJaN3mh9rDAZA99WB7EhMfV7Jes1gsSkhR5YUu9W2suwEUY6FPTSKXL5Bgp3FJqe4",
  "key17": "3kGAuzC83ZJQrwQUcjz9wm35Kb8bXjEDw7Y7Votg2433HPWm4TykKUV2D2EwjetKQ4NCiUoDQFZLfyxNGAGPHHxT",
  "key18": "kEkinAaghgX5vGadvD7hd6aM5H35JpDC6v8z1W8snjCXnDTbuKLk7G81So57MhWTYVQRVMAU6yQHpm1qMh6bZwi",
  "key19": "3PgEqUpb1SH4wfSBAEmGhgUhxHEXnezrPf5peeLHKe54iVDhiJQCydCjXnzdKyqsxFP9mThLzSrW1rjLmMRp17Do",
  "key20": "3M7MHfEwZcZNaDySAp6CZxJvHL9vq1PbwKCaQ3kw1sYEfioYtvJeeJ74TN9itu3PcSDPMD4Yevpjv5PFQ4TuYLk",
  "key21": "5GDMTmbBZQyERguG26Jphiz9pcwbhLMiquksF1d5NaKrqhRjHmAiK1yhLfdDU9JWbGnHNGawhBQ5wv1TwtB2o2C1",
  "key22": "58bcnShAoX6kP9QdQ8SVLV63uMLUwY3t3JQMSp5scXRUSuV2kAmbXTKJHJ2kkHY27VMVUHCVHEMg7RWavTErmGXa",
  "key23": "55N6VWNfKtGPpdLuoVCdwC732CDyxmtqfiAp2w68LRsor4bfbS26yzpE1GLaEsocPfLmpUiQCS6WbTJUAxCFx77K",
  "key24": "54jHLhsrTGGDSeyK8cjDMM4jNaZZYebfV7fgm53ThQAi6FyBKHUuVGbjLZxpYz3QYAq2P7QRjrHhTr2sFAbuQRWD",
  "key25": "5ZM7jetbkmDGZtvzdoum37knwmHv26qDT7c9z75sfuUHsgz6qqRbiUiRHgw1cfbmkFiaDb4CMRpu3PVwwAhvTKXa",
  "key26": "4AbRoadBAF3rhT4S72kccvLU7xX4YAG1X91xeUKVRxiU5Np8yapHZssa1nmbvD4Dmkzi7WriESREbJUi49obZk8p",
  "key27": "2dxNFLKe8fatZc5GKMRQxXBQVCe9J3P6bjuwb2qGBQtT3WHTggpaELDjJHBj5HPLwXpF4pJBfXSfwJWKXUWhww8U",
  "key28": "4VSLUi3zsrm59mNXK69btdwozP9E6Q2UWsPcUg2xKs5tJ3CdTBHt6YZzKp6oyN4dT9CFD1FaK5KkxSDzKVvmVEqX",
  "key29": "61HR7RC6JB1TFBJ668jyte2mNj3UK41a14Jkkd5SiiwQrwnjm9ANjAcJNfSvL4C3Em5LZDZ5c2uRCz16BDaqeEFv",
  "key30": "4VaSaYaZNgBDmcFoAjSRY7XwCmui9RPtkHsToWpPejcYnoznHZCp9kDFqpCe1kJhdVD5jjKKf4eL6FJnXFBLNufU",
  "key31": "3aH8WQcJJ5SvJpSS2zbRS6aJ4U7Zg9J1KoyS254bv3BjYcPwoHA6Wng5xNTAYtSDVm6rbxJWSj1BVzAkw76BNuW7",
  "key32": "KfFzTYamuM27ybv3Zw421MJ39ZkG36kzVb6pLFXGtS5eogFbXax8tA9qo5JnrLy9EQt3fckNRes9pa6K8DXPnoz",
  "key33": "3bEhgS3rxYPvqVTWJ3sdygabs3QcqDNrM7JvXpDbgoMxK63PoB9agauaS4uwBwJ5DehK8nyMW4AMKabPPYi8ReNJ",
  "key34": "38UcTTg13jPTtnR91cYmuDchAHxQGjjNuTVdRZKAtEALjBSqJ3cpUxp6TrV7j62StZU9n2ine2HNSe2LPJbh4DBT",
  "key35": "41yyGhmh7FTjy3TAafxcn86eVDv5dAuFNgZdGavXWiccfC46itAYVm4NimnmFzt5AEQq5LU1HwYa2S7oZ4LP7o7S",
  "key36": "4WGBF94k1apgRMi6BAuiu4VPy44XvQKmPRBjMLMatq5fCd8B8QZ3ScHqQxm34R2unwPBgjJkubxsR2155jEsRNjZ",
  "key37": "2sD3Rq1mhiAHe7yXx96p2hv734vfvUzH7EGQh5LyErY9ZmNdrJMnCoW61144qJMMZLX4oH7QZhwB3ZiWBUTFZ5GB",
  "key38": "4yWWjLLJkiFCwyrtni7Kuyq9i4XULjQ5fD1p4umDkoPEfRFoy9Jeo7BT7LV7h9Ct7d8JZuEnNMRYv5njD3ChEYon",
  "key39": "56wvLJFtecpU7tiKMnoKhgpdec35dReAmqjEdEhQXQ449Govtrx19cYpF7SaMBw62R1vEFZi3shVCwpN5tnv8F7y",
  "key40": "3E5bb1bNKxk5jHPYbANs3g2SQT2jPKyQ9c8r2dTrMWYCiizWonBPuaDw96obLbvkx1YFsvAg9etz9nJLbMs2npx2",
  "key41": "w9TPnhZuD3fYzyCd9pYYRY5hntRA5cqNrXEb94xrsMJwGZiX2ewNapiswroPBbt7bxdQ6x7ivgAtkzGy9hLSrW6"
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
