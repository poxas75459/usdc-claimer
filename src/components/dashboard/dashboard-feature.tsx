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
    "5RMdvkwLRbQTZNyvJ5z63yZtHFhMnCvSNBUAxweJdNTYHpoAnTRYHctEts9QDWR4pLvRz8zNgwRz3aUYArhtPYxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4wdcWcLkQLod9SPGf9LNrFLW7ebXJ4XXKfvA3YeBdif1jPqMja6gN56Uvhk1RxAQFSRGaMxh2cv8N9GVtwWWNi",
  "key1": "wNGwx8zDsaHnoqNhvawasZXToxjJhL3i8iCAoCZEExAyAQJS6JH8ZReXk7dxxpX2fAuJPWJAWbcc7jtPhZtCqXA",
  "key2": "4j7Uq41u5RtvfiXbb4ZP9Pw5HtTuwy3suYX5xPKLc3qsrdjPTwTFSDQ9n5HxoL3NEBWFJbc5EmjKc7frz4iSoEnm",
  "key3": "dbtU23CjiEA5pQyfDPuvNHqaoUAmeVn8m12dF2c8ZR5zq67MV875u6TuexKZGdeX7NYfUf3wNkvFEbZE4w6EARA",
  "key4": "9WLBx9P2idDUdi1f4MffZVcPFgTzkfJFhNZC476JkUZEs4WTRjXHbU1kCLujdYjC74xaKro2hmxjpFi42h9GvTK",
  "key5": "2DxhLS69r1mHXzfhHHdS1CfaYpT89YJFbt7QPJ6hCS22RY2ChaBgQQAPK6VpqtBbJ2RGcFo6jmTndVJMfFeuRjd3",
  "key6": "3jHX6Hevm6EFd2PJVWgGTEQ8E1snwBm69kU53LXX4XmMwKVEiW3XZt9Cyuy1VhJCDtQk85DZN3heTJRA1QzdM2hp",
  "key7": "4zxzt49WfFV7mL5SdSMwEgioMR1Y6pgxjn5cZgbqsEcMxo1PhCiyyrsxiahE6xbZeG28kqDpxp6y3DSPEQTT1XBk",
  "key8": "2yySdp1uWwEVqWE1VFVebMZ9ApBxyGhJBTLm8zJrgWTTRekLnzPTGfmXHpVNduoex3CN9zChCBZRD1pCPCisVGnd",
  "key9": "422L9vHEWnKK1B8qcJzEXreUoigGuJ4QgQZ1S9BgBPUhPpwfeEBVLpw5ddpGfzQts4zwWK9U7Qiq4nccjPvgZ8Yv",
  "key10": "5ZBjtdNL1uGkMehmaJRgawit5GXiNwqbpq8SobTTUiGgp6c7KXEvjEE4eR6vfgcPG1x3auZbbh5jrmQx1reS1uYt",
  "key11": "28zkxaAm3AgGwcASVUFaQ8buJ9MgDDLAHZh7HzwJE2FwLCLNFL6ppjimjps6c1dJfqXyCZXEubdkGit74r8sQHnm",
  "key12": "5R2X2kuD2UgxY8yGCnPJzcWXNJPTBFEmdFfN6RGBnsUQsC7mfuMD3CASVy2UcxS3MRBYfT8NiYqoh4XREyz5os4r",
  "key13": "2sPtEHks6Bouu5YTSp7YQFvejW8KMYyi4QRTRQBrc7dkw6UanT77cD6GMBfatu8p9U8vtwpTJLF1zcLQpu7ngCcY",
  "key14": "47M8miNmwHWbNhPymojRgTvq4LatjTHHFx8HuFAA9aopV6G9S3UwVvukXddaTtTAh4CzYhyiGZZvnNLYmTRJMB5W",
  "key15": "3eoe2XEE3Q3xMZKKjwszUiEf3XZU9TGnxLXLwp3WyNXY7TuW9gMEmrrPeGi3HzhNyUSiBGpDNgZJn4et3BzDUe88",
  "key16": "5LfGUSofrtGXacqBtYdj7ERzxdwyLb2C4GZfwkjMUsabCiTLPUMjs7Musii6xebitf4cy6M2WiDajKLRY3ZkYKWh",
  "key17": "3ZxAC1wRtF3XW8oY77tx3ya697ziwW7rx3dDbXxd7o7mSKe9iJ6kxvX6PE5mGuMtPk8oS31qU9Vh6woTa4hur2jj",
  "key18": "5pq3nWwp3XJNcZdft31DcytUoEgsyH83T8hRUaUZ5kWfmJrqQjgfhYtJv8sYx81mzsSfMiGrFBEq8jkjz2evmjBx",
  "key19": "4MvkV79nJ52JUzuW7TDqeXQEr5mD7PoTP7AgT8ZrZaUCZGQg3gqBZn7Qv2y5EaN5iwm4G4ayWmge93ESheA7YCSz",
  "key20": "5A1FSovMnLTuNmRL2mmGgjrwzTi7DiMcECk77afknFuhkWQcPtWYiwDEKwrBCRFFgr1VcHJgPxCevZW4ejjdwM46",
  "key21": "4XY8K5Z8ubisf1watr4efxPU23z3uzfjWnTbo2dRpcoR8DY56WvRSrWGzbaEby1g7RCUSzs7Yc4fJZkC13qTrsR7",
  "key22": "vy6zziFhR8q2GRa6z5tsi16KZF6GKqGQUMJrPQsAwfemdwTLgwHjPUjgHfF2kmzkU89LuHdPMAp2FJpbWAVupJp",
  "key23": "H9rnDJzK2gUPr8J6GBj6h8NY1689r29yoSg3NGbUE1srX5cLe7STtFXjQfJHDKmiLCfoWgBGWAr3zo2w1iZs1KE",
  "key24": "5hJswzWryM6MVKmepujZUjQwKLicDjWnWaFewKpDk7NWbFxRECFCw9yzo9QcEhi3AoHB8N1THECKjooBuWtfWMeM",
  "key25": "6146MWYvp614uVY7M7TEf5Z28CGGvNiZr6AtZmwd8a695rW5pTJbd2qJAG7UQ3ys29bdhkd4n9pCy5zix8Vu6HaD",
  "key26": "4qS3eVacMdwh8VLkuMu1Uk5qDNC1d8EwRsLkMuztfU3UWrbeDb3mDJj5Rx83bK5kXtVMmV3PVZNuHPUmF99XTa7K",
  "key27": "5E83ke78HfmYWw2DAjwWkf314J7Pre6uRTDjnjaJztiysvzNkXv4b2WzpRAW23RJthrdCpf7i5raZq2AjiC5g91r",
  "key28": "5HjBR9US2BFXjdSaS7zUgHoC4HkcFPfyyqgfbPAd4kDSDH3iNS7QXMjna2aaDNBVyBfwLCH6N8VS3ibwmu1KnWKH",
  "key29": "567ND8UGEtZc8xCGDvifNwzMVcBHo1iL1x3wrUNHpPjzFDesRX8EmGJR1kEoPkVnbGzHQdoWmw8L4tagpXSrHP8g",
  "key30": "3KvryaYYbposxSjX8ra73NkWj8r21H5x5isCyEMU3w2wQnuB6oZo7sFdExMMG4ASnZ4ghPMVZSGWtjTrWX1CL6Qi"
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
