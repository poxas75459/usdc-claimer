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
    "5wZmMcGDFUsUbABpxxZUcR4qt22HyqT1pv8Mz9zwfVC514ynQ7FqyxK1sKiPGBpaLF24u641BVy2ivWJNB8S1HJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Rsg3D5czxyHdwbGnuAMjf1m22zLTDnCyW58AVtiuFZP3RJXrir79sCRRgmoQk43hYvSZgvNGkABjjEv42PNpxB",
  "key1": "35sDVeDKA5D1UzHpWfKwAgNEdV2d2azc3p5WGJCrLW1STAqtvKqgoPFsmt5y7587NYieLDcDto8WY2rbknwEGPq8",
  "key2": "5FDFw19afyabWQQYvvMwhDq5xDJ5FrmJfueWXgRreksR1abzdG9DTmasbhcgKwpjtVeG2xJ1w1FzCuBjAg7EqX25",
  "key3": "3vNtNg5Vsg6CEqP7XnxyWTH8X4kLEdezRXxymbBgeGPg9d2UtgWzXMA54FWUfCoRx6t3tDvYYPamyWHucTuAVPeu",
  "key4": "xo5h1kMiQm3Z4fWTPXdBN5KjmG9MGNAejrD58wuMUvfUcwDUEC8Rh8YBUgLDL8yPPxnys2EtyFCpef3pJw5Mg51",
  "key5": "4z3ghUyAaX5Gd8kSJyH2vENR3XFLGV9iDyD18bquxSRJPU6irFKDad1zzj9bobGj1xuK2AXRLrcvB3jKWcJN4ZJX",
  "key6": "2nGrBwwVF7SmU5G1zhTE2ra5FQ1axFZ1HAr8zJhGZGVmTWeiGES6hqGbZd5ynTh3kD2oQmLyDH6mFtF1UvS3G3Di",
  "key7": "2A51qxryQ43GQjFBw26TSmzKh6VZtbc8r1Z6V5rVP5x7DXeRF8ivYNRSWHCXwjcNhjfkojDRemiqzarLMwGpkHf6",
  "key8": "MUDkZdzwmjZm3PnfNzreRZJwdaTsQ428DixfouFPfvFqhL3x5811eqQyd7xbGmSn5sXMCPAZTw746WATX2gxD2r",
  "key9": "556CtAPeznJFTzqoakvimUAcJHbMBpxnVRv6mGzNKwkQuP9dMSrVcuw1tQXN1okiM7UnLM48axX2LLctCaSVpGhu",
  "key10": "2wePdz4VpMA5YjruvZYVhJeGeyc2rTdKcTanCAkMRUhuan7wxUXpKrT5ptZWCeBLRifMeuYrnGThnpYaP6EMLNWq",
  "key11": "2vKNXGrUwpEhfHyD9G4KjorTuGmDzZw6F4L8HQWqyTKD1TRbh5PU4WHBgmY9X6SbE94CvPCnTk12tQHP2Eebysss",
  "key12": "46bKqmczt51mhQpiMDnu4HUSDnkqnrxEq8aZReYamXB9jAkMTMaRBJp51SRWvDULYjbi9jYkxv2BKpNUf1MKLwW2",
  "key13": "3e4hyVquyuAxBe2tddsCXuxFcY1yNfi66pkFYR7qVLCsSnW18upLQX4U34Ssby6rUod5oUho6HvbSb5C7DDp3doG",
  "key14": "25KH68rc54HNWkR72xFoJTR1PiBRponBYFnJAEQiKUYis7wEwmKhUb2Xkvw71bBT12wJcyiiDJoDkyQRnR6atVMa",
  "key15": "2r4tvEvcNMZNgrzKvbkdsXjswLAoV3oFqUoy7QuGPaNindZvAENqUTC27H6uuYkNr6TMhiLQRzuicANbknqqbDrp",
  "key16": "4VCaJQiYJuiqhM7753nvSV2KzcWzBLWk6Ntk9GLtN2PHPwUgwPbWAJmnr13EGCTcZNm1MHWr1v8ESuht6PcKPmmz",
  "key17": "2zCZF2Q1nHvjx3UGurMaQFpUMd6oc9V412b7z7JcK8p4LTExcagmtwCN8D73qEnEAqZERZsDwhCScsnKaqhjQ6wB",
  "key18": "2nAb3RrcMRGc1TZa8TTXGGfLvxFQCSbvApoQjziXmr2tik2PseRCfoUUnKTSoxTXmJQVy4cY3tkqVUYzdDi86uEy",
  "key19": "4o9dL4FPYMzgyXCP92NWLvzGKJbCVKMmnBkzmZPGSKLwSVJPgBhKps6JdSp3naZLa7GGT2Agyo7QSHkke3o5BLtf",
  "key20": "3xCUkwhWfGYTcpDCkTkSgK1NvPH3bqFxBY5vaDoqvnjhKX79RHaDvjxxhVQGcwBcsSxHmDj39PXdEaH8A9HfbZ49",
  "key21": "2nsQHuoYNqLEvn7MSQYqx65eZjGjGQoyPcpvAmDgqpivEaq33AS43h3hXZRFiL9wB7F4hY4Qvp37s8zomTd8oB2B",
  "key22": "28dLUf6yzAG4PCWL5QdsTAyqj4XAkjSxYmJojd9bjHc5AHzW7j4Ad9UJCBT73Ss9vDNw3TATwb8n3ckd1J1LhVLq",
  "key23": "3QrJuewdbgtMqpZDJSBX52gPaEzPhiQXbEWfyPi2cynvFgatQsZF2VdVb3tngZubje2Gthkd7uV4knN3yMzspTcR",
  "key24": "5FJGgAmPcyfmKCiiN55DsYR9zUDhG1MGeV71Kk2xVNA6bg966MCgkxAhEn9dMcpTH4AbKN1RGCcGZphiLwa6KVDH",
  "key25": "jwCnoKrnH7Xft969vdJ2qHAMPJHnSRJojZEKucg1sM1ZjEHMM1Rwwc5xLFGYkFteafAeQT5eVPpMzHYEp34L6rE",
  "key26": "2Cw5jdEkdV3Hhkh4GhMQzfhMiiqJE45WNyNbczH4Qrzs5T6dBY8F8acwEadVugPBv5B8NtSFJhnUXm8a5MQk4RCZ",
  "key27": "2DtANRVsyWnDehmFKz6nfbV1cdULxXU9fMCY97Ao1JkVMjC2gBHbVpUPBw3TVRsnNnM5sG1X3TR55uQvcYV3qtYw",
  "key28": "66TJBRA1wJJXmJjesfe3Ck6qEGMsuS2UuxhSQusahwE1jgdWANMQj1CA86T9YAs5YAbW2rFogNR3M8AeuXiYU8Fk",
  "key29": "2PQptQfDRWgxJrHV8Y7oMfuKCW116wp2bojYokDvegvFZ26enPemaAXyYMUsZisVFZ15cdCBB2y994mGFQiyURfG",
  "key30": "5VcujPYQtwoG4NzdKiNiB9vNPMxVLng2ZSUEhWMNm3WBjZrSVwsuPxTsNugtNb4HCujVvr1GbMNzosd2G86882rx",
  "key31": "528t1z5bdk1VRpHcDikkeEntZQSCfq12HMTkMUaArn2WNtjRJGYEj7fRHLRauxq5ffC1mUHq6ETerhE3FwxHBbXj"
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
