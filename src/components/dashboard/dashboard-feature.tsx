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
    "3jRV4BWea96SSK4TqpoZnPfujf7TSSKrQd8JiVaDrHzKTwLq41qsm9mhn1TzoAMmdvCdx6anAW4dZq6z2smYY6q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XSXGJfBJnQuXJeowbpFy13Ynum9eHzRw4wzynAsEzWeD73Rbd2ZCFfMs1tadg1yrXMR5pcdfmua4GayD2oB4wCV",
  "key1": "23acXkDseBApT3JA722Bgz5XNyXt7WSm7fLHWr193EgLDUm7ynPt1TPKpf1rs6v28Z5YJcGGJ5UMBnNmYvBSicDj",
  "key2": "3wJuiZEt2BiWQ9hBk2bVZ6QkXhUD4XiNY2qGeBMQps7j5pQzFiHDdXS3qRYnigSaPS53UWxvANero8A3sRt7CBV8",
  "key3": "4sy5PgGWe8nRU5SpH9WhYHLv3GCvRT1YrpZ3vyzMs3jPf6hD8WCVyMpRFpkSeAzZdMFuSfJBzM468bwTVNnAeBg5",
  "key4": "2k8qVhd7vssvACXVFGm3kW13hR5PYFCpwZ36yRacWAtJbtT1zp9dy3dyqaiZGPvhbkdVr5RvnnNfDvK6qdezHFdw",
  "key5": "5en1jBaeUEa3i4ZPcv4wUE83RExmYaLq9wez1PtzDpx4hKMgQgJ1RiaLTsk3enYfeKHPdMPoYd4nVuPd1za6pfaX",
  "key6": "y3vsCNdfsks3baADkBNAtEfpcCZt5TYwJTMem5Bn73rPJFJCM1ZEd1sBUipKLiyBddkriA8ABwtbZdheNkMpQGU",
  "key7": "3sUd1Lb6cXMLM82nNafbKEzmPuCF3EvgJFHxyqaYqGt7Z5he7PMifySFthey5QCE84MviXtEbGfEWnaGbkC7qxju",
  "key8": "2QoQa2bAqyKRjEEr5jrmX5bVQYM7tEd7RsAYFsaHTwuk1EctgMbyYVC5Eu1rsJsRBSqkJnWPUibXQhTyV7YjXMB",
  "key9": "4jf8WLcZCcDjK8W5PPVbsf2G48pAN5GXLApCyvD8sBEtGZWMhvxjtBjLmR3FJjCkH5xoqncJ7gCCyv3zkfUzDLc",
  "key10": "5jPMPbtfoNHoxAVDM3V6HRWBnTnVHUx35YYgzb4GAkfnkozuYnrV9sJU21AaK5dRPnjfYgqSiQkmygSKwXRCHx6J",
  "key11": "44LV6f2ADWSBNg7PwAY5CnykDUf41NtKqeYUXBMBz9avVdHz7nwrCx3v7TK8Axqzz3anENKzu35iVAbuhVY9A6sQ",
  "key12": "chX8ReDKgjxRqtwinqPyFP6Aa6QwUkmp7Yi6UV2haXeUFdmm2tGMrhsyE7HroPQhtFi7cKyk6Cm6s4WnR5XUaDg",
  "key13": "61sBNP2P6ypMiW3zEXmoS5LdGQhjf5sGzsGdtmxcPLr7oXTbWfh15Nn8kxRRZMBbeKqZcuFyq3RDsiQBBJb2j5Ln",
  "key14": "DmGb7RVGiLBMM5g3VCSQpBRfcTfNLgEufKJayCWyqsbFgzYyFoh7uwkne6qqVJsFvSGMea4qW79WbrpVk1fb5s2",
  "key15": "DAWeovCpQ8UMBRFcBoVJZjRrshs2BPyeCRSX76yoZrZoxJZ1NY8TxSvz5QY27YfoLfds9eibqsAtdg1XW9H783j",
  "key16": "zq5q4zTfScJmkVg4TKF5dSXzwPV4WmJLFDi8ujKLbJV6BRz9d1ynQ7eGQSpLN9sRYUCGvekroa3av3Awi3ZyTpn",
  "key17": "5EiN8eNv8pzkFEGWKooY3X6Me8VUEeBViwGHKg28xJj4pft4R1SDFhmywD9RAvTovBr4cipbCDZ7UJy2Ehrat58e",
  "key18": "5xccKjAZWFW2B5TCjksRZoALYp6uxhoTVWPwsDm6Jad3Vi1uC1ESV6WVSzJbhSmUQ3BEus5MH6uwxwH1eZaEr51g",
  "key19": "5yom7vVnA23uGYvEn2L9tSW9XPDvx79QQifhZw44EkwxoRnF9emhW6qfdPUSXbwoEy1gWfyPkrmPKyWbNAQp9cCT",
  "key20": "2dz3mCzSuNtnUP6Au35fTc1GudeGxEr3r1atRSP6EdNjeqkqRdgqB16vyU6RwpzdPcohQUuzgHBFyaaFtj5X9tFd",
  "key21": "5s89y3EStnuNv2b41HCCaaCYysUjzkzeR8hWVjxSJ7DN9sCess49Z8YYi9a2Pt1cSQ4WRzaa1WKkzeTNqAyTCMof",
  "key22": "32XJdP95Ugk2tjSM8vt9kDF8rAuJ2ecQZMD6ZQWWiS1nJ29UgkSuFcGBH19skeNsXWPHkMXXtQPnyrKxstXJM4JX",
  "key23": "5p5QskezyjgBtrvnAaty9f6VrtrXfWxg1FkVafs5LtN6RhMsgZwDP2TFH7sv3mz9yHJegLmZrCCSRGenhY6XXHCg",
  "key24": "g84tqLXXgKW5Nc9xYsPjHsvwgyFXmxnsNjcmeELw8EQnX2vxnMGo5Mjzizd7QXxBWYEkcSBufe9WvwEHTfPnJzR",
  "key25": "59rvdmbakm8FWg4dFL9CzATYhALTFkqbeDJ3aUCJwnw9hftkYNApn3VjmqR5zNnfUy3MjjXg1Jsw8akFvNg38qiR",
  "key26": "K3m1KNwCYw3sNf5wVHTEBfoVbvUjL9PWneE3cjV15YiRqptvFmTrcxvWEjHBaq8MDspT3faRDXqzgFFv5YPo18G",
  "key27": "2wdVF5x9sAgBqcwz9UtW6553NApk31vBTC89M2gjX5D3FsuDWKQdwFYiK5BGcJbykipvMychYLNYuS4wi8niUzAv",
  "key28": "5uuwxHe1FNXpkdKTPYVEC6cNDC8xjs5a8kwoEVejJw3NYW3nMLZv4kgMvbzrsDCDD3vxVmkLT3qen98tGmrJnkMj",
  "key29": "4mRuLWCg1Cfkrh6pqjb5UE9UrfvPjHm7vDZRSuzeAMwPDBTWNTVqD2CunDYGZsu5ajEUbNDmoqW1856DJtfeJRYe",
  "key30": "gyhRNBcxiyAkbkaF2KzY1L5Tj6wUigExHRR5hrTqqjSjg2jeJ8xiVJdpaDMnMXa2554zZjCFzej45cL6GpqqX75",
  "key31": "Cf4HLATHuKRXxznjQZi4kPPGxzc3vDtCfrCR1zDd3ADMgmX51FYofEgZSJ9nxMVhb34Ky44pyZDXbcvWpAp8erm",
  "key32": "3Dnrg822prr3Dffebch1xbJivx6h3xkYU6oEpwv7bU1FDv49FY3xuMAYqyGYWrhyS77ymVLHeQqnRtxj9geTDWex",
  "key33": "4ZktDtn3dHyrG7iCJ4thi8ydZ9f6couC9YpPE9LqwsBqxCM6brCFTgmeTQvpQizs64d2CDvVQN7aB1cNwg5UppEm",
  "key34": "2DFCvKh8DiZJcGV5etd3vVpWVBxtGDsgN3ZFybAEKiQJcZK7XUV5ePTbRm34zns7coZXMEyYPraACmV6gstYqp65",
  "key35": "3tYkxNCJxAas3gMKnecpu9nd4LX84Lf7Z4J35uPenm5fBNa3WjtgeWQrAcw5Z9Fy63sbvHA9WgBqk5HqQuB6G8gy"
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
