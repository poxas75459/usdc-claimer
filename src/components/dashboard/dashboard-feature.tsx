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
    "3BQTJ7yz2HjdPMaeTgbrGgaJJXBdFXKreuW5KzEKEe2S4cKn17EDWApBgpTaat1ddNEskosZTq9t1smcTHdBZLEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44JSWGz9WcFWuDnbqRiqZ9UAbhuFqhBMZBkxXC82msgsDDHg2u2Ws77Vp6vFbAZcr49pQmJd3gUQpAwsAa9oPAs2",
  "key1": "ZdZu6sW4WJ5zSZWd81AnnkCPCPoyefVhPH1UmkBLGy8DR6nCqZdgwERmVNBJf1smk1JzwE1nBaFWG8eV1K413bm",
  "key2": "mdjjHatezKKuYXQGoHYSdkTMdbgLSfTLajk278B4QakSFAoyhKU1eCKtQfEyAR5BztfqiM4na1awpzGrcabSZUn",
  "key3": "3oM5bEAo4YGbLq6c18anWFMbn732h5Cqgjjma4NhtN4cFUNzQbsA4HJDfNnhG1epqCrAPMcHkBr5xiyPWKcaTdFr",
  "key4": "b1LFNAk3nT6RnVjHuS2TzdWfyscZpfsBivx7iUparZjbqMBY8qooxGzeuVgJVwPsunAC7zwKtMRoT7hjrduZjCh",
  "key5": "3yeaM8o3wWuNVRBHDrFzzPeMZbNXLRsTBGGe6V4UWp9y2sAYydDh4KkWMcWihsYLZwjBxk2jgPSrCQi9VCBQ2XvU",
  "key6": "5iSrvjyhL9fxEv7pEAGb8hwKUY7zSGtNewZqu67Rm34gYoqdjcuPfD6pa7yMSKpSAcMA2hsaMjc7sudVUdiGpw1E",
  "key7": "2c8rZXeufbR1fhMcZobHzhaxZgs5DuMaDMcwdm3RiA7ZvS74NK5k6Bpv7eX34bUPB2jFTNrjkntoSNw8ZtXWpm7S",
  "key8": "5J3zk7BQx1E44TWDAWzYUjin5nB3Bg4wNQrZ6Z6Q3y57QfJdaA4fWkLJQwiXCeMxEr8PJtXMbrdhAa6FBBsBbL6k",
  "key9": "2PeBzfi8yx3Na52785sBWKkPn4HDunedLRpJcoD7HEkBofJVJ4Z4AbweQtuupTXEq4MWonncwajz1vnakKzimgRB",
  "key10": "3eWfFWjrD29KtonMW4tGvQdyVLUvQ8eLB9RRt14KUnbewSeCbAxHP18pFbeJqekiBs5fFk1uWbVc6DacJLXDQHpc",
  "key11": "5iKP3pNiPxa9bTRd1UXCM6AneY4Ydv2gjqb7qYQfSM4mRn4cP9bdwPX7X215rzhmQ23s4iyMJPYJrm38p4Xv9gww",
  "key12": "51vJpAGW4pCvMSUXBnnLodRdRX6Yy3aV7gXvtnqHyk3ffWkr3wXL1tsWPg5eQzx8NXAiEeYmPKGHax5S1UWhYVRF",
  "key13": "3Ef5rVS4hH2DspfzyVWmgGtcYeoGgJzCX7T4ry7BNWCkYFfmcH3YVxWRHo5CiA7JRCn9HtHLp4WamnL33kUQcfQW",
  "key14": "2oiZzYYu3kkH7JwZiwybRvW5szGgqfbEFo1gj9nkcKRM9uCJUgpTodxKyjeDifSnKmfKs6G2szq7rDTxGGg7AAmD",
  "key15": "5tB3bM4nodwQoZhuzBga7yHULE5yvgrUYooUaxJCXYcYpMSno8mSLoU1xt6uWEbkumZBqFq3dxSYfqZVS15urMmp",
  "key16": "4ZCWrKJV7TzWtJTABE2VfcfnTmXXFNx7yzaRFwPPkYDqTsSguXfQJz1bKpoA1F6J3pJULYLjeBmcKiWkFAB7C9nH",
  "key17": "2QrUqxU2YqoAmuotAeVKc7zxhGVCUXE9JJAqTmcvxrKjYvFX8wxsMGKzesBJoB1VCn3qG44ap61DtpPMpE6BKXjb",
  "key18": "4oyPNz6i5Q6eGrkMFQGH7HyhXBrxtMBcq145eQ5gYri7fYF8sgyDKAaTZQYCCG4xQEEqwYJy2CFobUUEzmfRsMRF",
  "key19": "WZJGUt9ENS3Nqmz3Lz28basm8JP4ny1PfkWW8aQYF8ygAnJmvqax2p9GXbccmCuYGo7SsPX71TeEYtR7fftRYkw",
  "key20": "3CHQ91eDkgATCzPMLqnW7evCjAGowMVPcZ3P7fgM1jhfhhS262UtTRUWxZy5guzRELxNiRw4ohHmq4UStdBU5RQU",
  "key21": "4BP1F7KctoociGnmNbysRru65JxniCbArHWpNze88iTSCaSzkdmAXSy8u6B4ZYXV6xGMG6tcEKPV7xa8vCo2ADMK",
  "key22": "XUE4q7dHX4VB89u3RzyGbLBARbXNXFYkPv5tzezfzUYft9Z62BQ4W95t6BsbU4s4js1zmV3GYuwDi9AsTsfQAxr",
  "key23": "5fen9x1pUzwbjNpf96inuCNMatNAm6cfREFHRLv27Bpiqju1f8RV7Cc9urEgyrqAhbQ7WKgTZzQCnBSENNbB4hZq",
  "key24": "3QSxqkALwCR4UfDTMYyDozUWTD1rUzDeeiKne231s6B4vjDj18D8oWCyPZC3dvQLauGDoFfkMx5E7Eu7MARf9Ssu",
  "key25": "4MLTvcdmp4nvqAiMtLTWuF9karbLUN99mrWTtNBCuzwrnZteGCtVQUu5ScCdxq7y3w2Mzyqffh6cLxpDwt92Rgr2",
  "key26": "2D4Bm4oLRY2VGyB3SdkWap5s5eZ12RvTGYDrcBstzcpn1SBdr7AMxHZa8umc7UH9nugBw1rSBixfhc5h8oUgfMVU",
  "key27": "2gQ8MsYY8CFcdBT3LNZoz46AAZ8dF8GetdQSwCsjwzKbeEtwqKpD2S5vzWD5HVih4aasHBwKewrnKf1myfztZq55",
  "key28": "2DbiDmjYGXBuHtFfybv6e69z9dv4EAbNTDQbMULLXRv8N8DvN75hBWh2daj4wx2K8cn38zmjHa7ZCYyADY9fU8JS",
  "key29": "EMHLLANe6ZYBpCTwkjdPE63ThJgLN9mZUGC7JitL2ej3VpvtCrp5ALM4jZnGtangkRtCjqg4aFMAX3TGnPHGpfp",
  "key30": "4dgBWQnixTQNqnUyZtJSeWuEo7EMXzB7c4Bh7cfYNYmoio4LczN5Zssrqfq39Mzhq1QAmdCqjJ7KECVHjc9XqNPq"
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
