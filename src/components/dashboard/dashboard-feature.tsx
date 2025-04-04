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
    "4Tjr4rfspqQaa9vaVntuzYcXiKUwHWoJgzZYnPczAjbksog5EZpJsftzM3JufCYSMJMKGsGkvBjjJwJkyARbXwAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dk5ioSiWEMVA26kVV8wva31wqPpSHNuepSzT9cmtVpW6cNM7aorYqhJhmCi7bWNJHDkCrdxKjJytKbNDCaN62M5",
  "key1": "3vzP2eGVKxXCmZ3r2aRbEXqtuRjH279Aj2HSVCTHGqdRqKqkHjqpKDdFpS4FNw2jk2vijM69eWDGzhqbBFZLBtH3",
  "key2": "3c4GtVbubLA4NjCPMAGJaS4WpSm694df6czsXW334RP9RpyYeCoLKPXcb3PTRT2cLRGABPu82xdkP1xyBKn2aD4o",
  "key3": "3tEkmnMjFUzHj5rzt2xzn7WMFwvF37zSDBUDzE3MLPigb6rVrs5gJBFprUyMKvZKpqDjPNt2tZpUdExH7Jrkk3ZV",
  "key4": "53pgFzWbSnzj1W1A3xowpwYZN5R1vopaym3Ld4cJ5TdCKvC7pdQtfBgWYZZ1pyFm1bJiFw4JCJf7WT9ymHakJG2D",
  "key5": "4z1gZbFj5fLyPbyk6D3MvmFGQ1tqgJPGnCrG4tYw3ZLXdrF5B8S8oVvoGcyje9DL625zYc7zmr4MnoqMn4MdWXTy",
  "key6": "2pBLDfK7yPvpghnHBStuEwn52pPEf6P7z3ACix4gSL54f1ZirxHykmfdaEVZ5ZVTgGkCj91j15sa9RCYKwmxG8NJ",
  "key7": "eLBwBBooshBEaRsgRLCT3u2dbxrAQmPZW8oWyWU29EuVURTPi7WdcqceVfRZV2AWPxmKHv7ZJcxDa8mgyeqpgBy",
  "key8": "5UXsweQ99JXYewnjtscPAVYVEjxG5uYM8w7xYfBgfpsWyrRofp7Ar3tkXzE2gi4fuKYJXyYiwTFk4UD12QAMxc8N",
  "key9": "4FgUR4uG2WZW5K71RHnb1i213obNSGE25hevF2qNSE6J75qspZRSCBsjfWx6GEbTQUHCSvq5ueMbTHnYwtfuRX1o",
  "key10": "2iHveCKSMvXAvoNkysxDwK1ALU3p6emK494kbkK2gteryXjMVMEVxAcc79Azp6xwY2Msn8c2zfSyXLD489QwkmrE",
  "key11": "3gp2K3ZtUCRmExqbP5jvqi31vJJiH4m8wDNY1Ro9iWnB2oHgYujPS71PzqjULvDgJQ3RpRhJMAreXAiGw7sd36Wi",
  "key12": "CYgdA9ohcCBGQVoZvfhj24WmNHQTga2gkxLR7RUDbzxJucZnSFSUEsyua3yweiMM5fxTTnvkUkmPdLGbiPswsgW",
  "key13": "4VZymjhGqZCVRKU6PRjPHaLtnME6HPykU5uA91Wg1ZamK798cbz8fgACY7ASp2YzrvhLw7Kg4PXeWEZ6ak3DZqTo",
  "key14": "2cZm6JPMcAqeZAviQNo8qMuGb1RXXQezWXggEgvMqDiPDKdtCTRGserKw9QS4YS1UVphHtgbZLK3zt3YkYLpnXn6",
  "key15": "31bsrFkywJhhmeKHLNCWasNrxpTgmNkAPfv4V4gddESwdinWTvKZSYmEpFyQw3P38NEuGuRxV9k95Tbw4cncLAZp",
  "key16": "5228aXMJiS3bQvV2ZqTyuozakp3RDxNTJz8fyxzCWYaiMb9bBtHdudh2qzHkdo28thh9qpCFufAVeJE8RBgEMLDj",
  "key17": "5fqecmErzFSSk8gdahXv4udf8tYHKWUWkeQxCNgWHaniFhW5LaTjsSkj4AogYmJF7kSDKav1jAjEHvJx2eud2c5G",
  "key18": "2zCDzBrdDwpcxZAXkBSacwvK1qd2ohHfZpVK5qQjoQF43BALUjDexUt7rx7QjhijrT5V794EfQYfuH2no7fYWrKf",
  "key19": "276PM2ias6p7qbnoeGZoiCrquMAi6qxGakDPdffPV16TjUPBcDuHhCe6N3JzshRHummjhMvfpsHiwp4YehYUNEyt",
  "key20": "mSXbA9gw2NTDd1pAZFaAGrDeZb54M6nTgJFZE2MkvgSbZFtRXELwepXBBnqZFcP1okJAQX9PGHTdNzaNrAuJgJE",
  "key21": "4M1dGK1qkN2rY4hsfPAsueAqt3NboMmbLBCRP7YjVd6Fkm6ZM1avdZL6LJM13n6pcy12Pd3v4NVANaJniVEByBps",
  "key22": "u6c9Rg1FRxeymjYyQiRBLadNH8gNpitoQbKdbaFnzzMyTfM2Rse4aMn8SuvtHCrc44Pm16AGGmpEWgP6u8WjgpF",
  "key23": "2qE1vPSYKSDnytyqXMPn8jwJMKV9vMKZLL95pdSgq9ReGeU1j6q8q24bUkzWCoJMaJEiJNfV8qbaACKHLzwygZwp",
  "key24": "4nAUFWbfEgUwCCp486EC7yxb56fvKwifTLEcCpKEXU5sCeJPAioeR5FpxYbFgjjLAEf7fvXdqMXhWmUb7NbuA5xd",
  "key25": "2cX4niC2gkxJJwgogKTxdV57UnMWFrbc6CC6LKPZpGEws9NCagmzeggqELXS571JaE8cdNZuNMsQuvXjpMNMaRvJ",
  "key26": "2g5tHsrpzdLDetYh3VkyVgo2MXratMN5yPSBwezx28jdDcSmV8vKU5T2MPfhpepBaLcZW884hebvL28kozFd5T8a",
  "key27": "65aLounHGS8MKbouUAeSkLTjpL16xXAMtyaQWh7aSHmXyZaL4bbzRudky5QLM9mvuR9U8oKH5d2SWQMYKHfHpKYo",
  "key28": "5FqnaJhrtkD4eXnzrpEaewQoVPRe5ncCeAPi3CxLiFWhh71HSsq35AciJ4cACbM44kThVD6U2tVNHCoKKtR8zs5C",
  "key29": "2UafzLXN2pXpCCCX8cqQR3srZ3nXqFPMoPqXC192bZGHZH9aTXo3o8u2qaPEKdu4ovH32w8sExHXAzD5usrewoRi",
  "key30": "4XKQjSweyAVPquntuUg3xeXUp6RkUeRLW9darLosruwgX2uqnjtoGohzrn9ot8NzM4A69aEknbCBBzbU86kddnCc",
  "key31": "FhM31zkPtP2uM1HRkyy1nWtVN6UFBnZksfZZkMU8SBWwpwwAwWo7kr5RhdGcKj8bHEerawJAEbrmKRQYyDMgTZ8",
  "key32": "4h8iCYCiXJ9Hs35sEdusAHpa9KNRGbsJ5Aan8dK6BxJYXVoEArsXx5teB8HvrptJqH8A2gP6T8dZXk772vZkyaCb",
  "key33": "5AF5cqu6jeLDbtqqcPBU9NuLL4NPYFzTiC5ha5jKPWvvEwpVPH7HXNtVBVpPnUv6UzNcsq7uvHAZV6pMhQoh6RDe",
  "key34": "c112CKiBm8Cv9SNn9TtH7wXrYbHU661rYRMJ1GhkGSr7q3fcViYyDw3JVYh1MzQrLKEwEdymXLfXF5p5o1z6pui",
  "key35": "3NR3VFqkPFCx3UY48CHBEkMBe3SkJKN6ntsXorbs8G5Cz6x432gMpVoLbkVLhhZJgh6ZAhEp1kS8DsyFHt7nYMfm",
  "key36": "RPXvpXNPL3Hmg84digXPuHxWPAvRdvTBkdHzHjuQSe2cSknv42uB7Ci8q1PDak6JTXSNReGSuzCG6YDHQ7hU8KB",
  "key37": "666Ad4Aqb3XMaagJv5EFE1zzM7Q666D9RrhzRAzdRdWRFWL7BdbAQKtZrX1HFqZYytxePLbTC22jymwXvBMTLpft",
  "key38": "45Fa4KUoujBnmNyD9jrEUHYP8RikX63J86Hjo8V92dWZAYE6HwtRgNXKkHGLjFA5AZ1NkDmvK2vZaWziau5qVAp8",
  "key39": "5F6QzqkVBarXjraWH8fkMJtPWYWerMaUtBpS5tRaEqyrLsjioUw4aWHgoi8DwvdERhUNGgBLvxrHSJSfKykPbGDg",
  "key40": "4dSDYbokUWr4HPm3CQjbPExnTdT21t4g7YEgjDeQMv3HDRJJFrYYTmXYzVjSBSNWcRFbMpTB1VB7yz6NedcnYNve"
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
