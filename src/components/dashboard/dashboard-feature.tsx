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
    "b1kQRRceEcysrE6vjtqGGeZt1scc8TnEXGVN8mAQUwxJnnhKkSrN3K8n9wnSYeuKeJD4y1rbmZYFaQkw9bE4msk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UzfsGYgSKDptorPn3k4Nwj9Ezi4Fx2c3fL61EcgHk5f3m1Si8CG43hRnxNebjS221L2KLFmT2eKdVWj7Cpi1UZD",
  "key1": "5E3PfH8B9N34ihbpmEx19a83pUxXz8DRB1qnKaEbhuJsJ1PFsgyZ32qLBPLuyJC5DQjmpTerKGCT7t4fdPVA4j7g",
  "key2": "3ShkKFY3oM9qtDqgmiYeXLqVKrat7dfiLECpJP1eCZj6P4XKVssCM2utMihpMKKhGTUrjeRUXhGSp82bPCpDcp8G",
  "key3": "s6ZQc11r9iP5wnUn3ZrwAd5iy4MzbQh9baGAhmu9W9UAXfhwttiboxShpAJpP6N2s2D5KDi1XXJjzNRw6qAxo6k",
  "key4": "5oSzVSpLgEhm6qb2xZS2uwHCa1RxGeXDyt5sjVZZDw8JB2BDUeASxAvCZ6QqpFAYvfSmaP4vofrHap5bxAjYnSAH",
  "key5": "4f4G9vpHEquaxTQho5eCafyhA8hdEqJFQchy3g4Wvj2QzB2owfuRWxqiFdfkN7bCWD3skLSa78P8RxD5JtX63qvP",
  "key6": "A9zfNFna2WFBq2okndZRXxYGW3ajEXn97xTf6mteBcULbzdjUhUbY3rLVAVPUpW7s5r6YVcNNXo2Siuyi7ACwVF",
  "key7": "56QDqRzJTiB6XQZDamjg7UKtGFhbSybbRjBNLXAF9BrfXjQuwp6zdPZM2P7JnsEkWi3pDSYHVQ2CFpLPTcRu7Xio",
  "key8": "8p7cxjVMUobLX6FFdtbinE1DmXmtzoFic6rveShynQ9roYYfpyQUioUM3jfArN2eWZciD1tuyVYMETozos69nnq",
  "key9": "2C837Z8GMn3oMdJyfEHMZb2Ud1Nt6BUJZoC6vDkRSHsanFpKHPnCqpbB22oEaAynHdchQLW29B1Tkge5wfDoY7sc",
  "key10": "5Ftsi1eRvbNpoMUgYopCVCTZ2miX5RFbSryTzHnnXiNErZdoUWxwMbi7oM8iwqyhDmNFKTTer6qozJfavTZ4HBGn",
  "key11": "2oXNVrfstNKVX7Vr27NN2YD5ejhq4agGwm2Jh4SP9siVkjNQeWz55FW4YmRw26fn2hpEukYGZaUTfuf1euPZ3QKQ",
  "key12": "5hDcstythFtrdyYcrcYeMoJqE9juMn6fb36vbaLzveqLyFtr2ASPpvU2BGgmMvTKKiqNYiZht4YEwUNqF5LqSLJS",
  "key13": "2oeQcXNuABapTqEaWKDwWjLPcV7AMyDMgcBq1DhdkHiLrTYAPYkoNsVbgowy5JD7GBtiQA9jbRDuWHNWtvL6fv1h",
  "key14": "2afA4btaUQR3TSGKbWx6PTcsJQDJ81o9BUrfNtuzqHKtcGCnmUCRNaPxtEsjYbj3CA4BfaqdEhNCXueTzQqXQ1nx",
  "key15": "4y8osmnkebypfigSd2kAjnJeGSJY6gBEkyD8dWFdeRgi2BegKPaSH1Z8okVzFSJsnYXyVGdCe32nVKtysAx7nbJZ",
  "key16": "43mBP9mbVU6wefcN7B3YoxSazYKCsJJrPk1Vq7gwT1StuekuVTFE9vN1L1DLSdH7gXHhLZP8kDBeumWcQHotusAZ",
  "key17": "38gdDpubHPNJiZxEBhTb6WLvtqeAJ3hsReMnhjFn3AN5C4H3BvKhmm7vCGPE9B3Cw9S5DK6waSCYYpfuZ6BMy57t",
  "key18": "2FyPQHnexA5rWZPByUUPA2jJYkiJ5s5DF4Bu7RN35pcJTo4QWpwbzvt2xXb1XSNGGWK16m3TzSk3R29FKtsMEmzf",
  "key19": "4etrQjGssPuW9ju9fbtqWNvqjHqUcrzjENVC4zEf2AvqjmQsNKdivQJzSUx1js5H8vXgoPHGkwCuSVP7usqVufky",
  "key20": "4FUymMxWiqm2sU5d2H7eyYTDyWo12m6gTzaTYtAqyWvPbtiwEndofgGqxCpk36dvHLnfVuKEGTA7P1Mv3mEvZa12",
  "key21": "2csJebERYvdAfe9rxgahUFrbYSLYsY98xqSdZXCP1ToThSeobEVuy6pQtkcWLqVgFBQnZvma3CYZ7JQPfmMB3E1S",
  "key22": "27ruTxEjUf83ATCqpRhHEf6STFKj3KjqR4sf2dhKc1XTW39VAP8wqtXSkV4sHJCXf8Y7gzswXtnbYFpyoQ4qSqVz",
  "key23": "27fm2F5k4EHj3eHWnadNjf2yyKy6KR7GqvFqbeWvvJ6hZY3tnP4femuX5nP9imDrZErB6oUs8sS35cYevF8J8KUK",
  "key24": "4PyDzNdqbF3pNwe4oMYVesXRxFn3XttNKjQiVSuc7Nc1WUWc4QQHhp9r2JJ3V1HLFxzetqszoKHyM7ijdmsBq4Jq"
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
