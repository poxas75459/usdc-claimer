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
    "4os7R5tTAWNJAjJQsKwqABw9qia84qdww6T95zyPtBUFGSEAXZFfu1mRHVpR5wpYiVLWz9UkoXf3D2u5dgr9FAdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CLP1A1AKGGjL7BAo4Lx6UTcjiG9ZYH9Fur8rt7aZVoVm7StjrW47Qbvh1rkmKqq5LCttigic2bJsS1wisMtUVfp",
  "key1": "63Y5Squ7e4SEDtAw2yMKiMzqEjmZtExzkQPwBWe6KrmK8oWsDogZmQPK5RXQ4FG9Vhqzv2YuhdWRGKJx1AgoxEk9",
  "key2": "2Qo1gRB4GrWiMNuxGvm6PXsxoBPWZu61omMWrnuhbvD4Z9JPwNUrjRso5ywcRvyNrn2A5HhFZmqLQDLTU57tZ2cZ",
  "key3": "63RPbHxEGWFau7N57w7RjkocYAPpXu6x7d8xyGyXvmcRryDwuETHsH5eTzjioPQZ67mYesgzdKoMbUD8w15yCDGF",
  "key4": "ATMYKwZc75qgoP1M4yZ4QCeihN6FicUptGKtdvcyhEKFkNB5sxub712FHMgTqjrmMB8abPT1MMdZ3TtEExSt9Bb",
  "key5": "4ipNjEyTPvbiMEiJqKfzYJ9GPFDisXErDGsEwQANi3PeDkyUadcQczMwXuCutk93dtuRgcncJnn1h57EhBPAJnZq",
  "key6": "3urRfzqZLECECp3K85WG4fiZXHTJxqnascjrqUYoFF1tpqGiqmkWeZDpdgMo77NvrRAd23BkZCEKPER24919aPRP",
  "key7": "5fgYLK8JrjZKbjpP3MQPHeA8xVrjNgjY24CReATZ7w4w5VxuiEbfsVyPESsccLJgPGyfUaHr2dGQYtm8vj3dwXwa",
  "key8": "3m9KGMJ3rowH8WWbiCvtayBnts7fnufhBPiiJbt4au8FNwVT7ZiVfsDj9q1RQMibrJW51kWDSL3WzZ9s96KwNKji",
  "key9": "4HJG45p2jH3ZVqZYnsDDjBiNkRXRSysk9ucSgyQnJsFnASmads1F7H7r1DzEVQKEXRFGyt2BwBQh83J8r17TgZPE",
  "key10": "32uNEPokvwCN2R5XXHGyjCJiJSF3yViAkQdrfDagLehVYyHht2bYCsSe8bEnxnRdSBSQEvmyrLgKNFDMpaK8Xw5C",
  "key11": "28J72m3vsNieiHKaazJbhJccxEsioZ7aYXnapQDr3jsMWqnXKQHr4Eau5BeuKYzeCNbbWNdf6CW4hsmSufkfjpLZ",
  "key12": "5bkBe1hVNswwtfBbr57VvFoUY2HZPXBzndZKADYxBYxUef5z8FuiAUCRVkFi1GCUFn78r6SKbwaDu7xBxNKKAoKB",
  "key13": "4huRGtW442cNPKyMtB3bWwRcSLLfy9TcV1SPCyMG9dXJZf2V5gHPnSsdmcdKG1rNGAhFPEtv4YbugLmSZJJeBpX9",
  "key14": "48CpSRdrmtTVHfZY17xcQbuGwXLFKqh5BoPmAVDv56z31FLppdxhkEM8XppFUYsKUpCSzNK3orPBonZpLcA97xaG",
  "key15": "MBzdwKKxAjeG44SA1Vo7iLRYibNGhF51Y77hXZAKm69HL26Uf5qKW3aLagLosw7jQ1iuCAS6iCtpqWeGwHdD2p4",
  "key16": "5WPMaztHXUsD7Q8wk1RMhY8KpCCGAQwbqRffJ1zTMRV6DvNtuUkSaMquKqMFzdPDHkim2NCZkaeHEc2fjnigtAKR",
  "key17": "mtAsH1joJHRDLh5in1xwZC3NX5jhpxkMyFPssNCqHdX8iBtVnPS3WKQau7Tcoa7BAwwZSdvVpAzgtiUkf6r1MT1",
  "key18": "5oDsgXi9FknEZaVdt1MCz72ZKYVzJfmJ2XNTftcnxu5oFaahBJjPm9dFLhLqhUGNX1p1WaEacUwrdeiRHh7nios7",
  "key19": "b5S2emtzmUK5BvimsPHmoVUdu7GddhXCDVgubnf2gNB6LDJhtFe6n7MPCv21z9cJEezoiDiLk2kXuQSAfFtcuwf",
  "key20": "3ZiqtDNDi8Ui7NMjmUyyFhgyt5NkFAmQqHZQ5FR7N7o1TVfFmhQmQzPy7WDjjJzg1LCiuDkjchzxaRwEmkMUCVNV",
  "key21": "3336f64yhpaLjiiC676KEWAnf4SWHbsGgTj66gzvApMjrCzivJ26EzeMYpg2J1pba1ogUVFdXudDkoE1dyaZp3JS",
  "key22": "664PHgbfxvUeB4scTdriuD9HymSGrF23ymTC9pkAKezY3a3r79qrC1sh9AVpepa5nz9E7vpDdCihE5E6bTRG9gBf",
  "key23": "4ZcbA4mduzrKddJ6uKy8FL8Lmkbsn2susVhb3WxedoyDX296S3RDCrDb86jc4uEGvxRMUZFCx9bnWT6VSnDgbc7a",
  "key24": "3cqM9BaBZM496q1Akq4unnG3drR8DNiXhr2X4TupLmfZ4jrcaEf1rcNZ6FRJgHa4o9yD3h9EA7wRgBRjhnoohEn6",
  "key25": "3nbkUXX2v8J7JR1Q8RNnSkxG5EiFkmAyQeTx2i8wZCBw4BTCESD1cRtjnWq2w1f4k7NRWdR2DwgZyERrb4c2cB5X"
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
