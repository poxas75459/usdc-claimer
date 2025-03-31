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
    "3KifKtKZ4rfQ47f5s1Yy1sfQumXuSVLMnjNYwJNhUtWN4yG39GCh2GSGj8U4Cd16Eho2kQSE6EX21JaQY55mRdVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ywEATs92AtcCT2k1VRQQPAi1oYuspJqeyJvKpYw3zGkzgUaNnugw4tJrpRjADtTPN4YhTJMMa2dTngLq3ZrE2or",
  "key1": "5LMD24mhiJhA849YXy7PA41oX1qmN6L2nR9GDuRpzNR2Pgtb191LUE2ZQBCFPCvhpTHqy9aycDfiHX1RHetE426n",
  "key2": "EVAWAYqugk6F8ZZNXfg1ZwBJAdHu63SAHCmGvQLhDFaPK6aBwvcw14j48cNANjXiXUci9v3pyAyVuTAducM69rv",
  "key3": "4dbaaMdb1vFQzvFvZsNbMqUKPjoRDR6zDyY7SCapWZXP6QoPjTgqCSTSbZQQSMpBikRKnLEhLa8RMdmLMjynCmQp",
  "key4": "4Dagg94mpycnrW68sVkaQS3m25Bm8UNFEEssopoEmE5ahy1ryd2LmueUbyYAmLRnf3dXc8Xpp8yYCV7J8dgGVEKn",
  "key5": "4C2zbonNHNRYMQc7gh2gdtS6gSUsHu9tfimjhgE5yiraN8kXNfcV587M1C6PgodwAuD4YYgUjmm4xHkeU1TryUYc",
  "key6": "2bFYS5699gA7Cx8DPZ9Qa29TVt21B8ncCqcZUBKLv6Gy8ofEczhX1iyphVqH5o6ddTbWjdNqBZwzDwECkAr14XBt",
  "key7": "3JLJcq8g7pnxiso1hopAZZXmpHF3TKLWt5aWNsMkRimsMaFPXnyiSMn8Tbk5GcrsiF6BiWtGrNYkxLPNh35zrc3N",
  "key8": "2mBrLbH2Z5BjjBWerSDUZJSJxxF2oWrP1puRe3ME896gdHxx2fKW8ShMVVxWLmt47Tsibz6bPb398egpa99G83RE",
  "key9": "3nJ4m9gDp8DhZuGW1im1J6oiKnZVuHKoxPiTBtwHFHDnqPauAmnq42Q7eH46ELdjgXLheBtRQRh2oP97W5hEykFV",
  "key10": "3LfrKkzWBwxcfGAucnYFsZYrA8Av6GEfvs4mn4Lt1TzBA7eyyM1M7VbvaVhUyeXbbKDeK5jcmFcq1GJt2nxVqM1B",
  "key11": "24bPULd6cL922RWudGqYQaWihU3wZWwHHdmLspPDn1nFMnFUYue5Yxa658mR1XU852LzEBPkPJG98dPvv2KVB9eK",
  "key12": "375kseBdbtfm5gHYjwqg3TYXNEbFLC8et5jCokFYuy47sV48zo6bf2VkcbgGVfZmgtjB6kyZ1PFq5CtrXcn31bYR",
  "key13": "3iAzT8s71RqCZJAwqGMHV11rEGq3hcMfmecmw5JxTqWaZp7yaYCsDrDvsVLFoJ448NP7EJ9nNq58ukGNq1PHMjwa",
  "key14": "3iqytGJpWH3SjZonezR3fqwcpuru4zVLmxX5iCcDvqHJD1vRynBzE6NvRen2WdiGTkwDQzWQe7Ruef6rZnExyVyS",
  "key15": "r8auqNeHrYX6AkxNm5JuHrL2mXSGZiGb9S4KTirTy1wgQWTZphWmXv8LrGkhXnXYRtdhAq6PKnoMg9PXBZA4SPY",
  "key16": "2ejJgFDxchFeWy5dWsvU3V9RuDLxEtBF2iRBftovCm5RCUdr6ZWPwmVw3uxNJx8rX1sgQRYxYXowAF4z7kMDHpaZ",
  "key17": "2R2Wa5pmphezUEySoLuRnmuUg7THDjspp9iAsi7Z5NCkNeLsE1jWHRvFHaGPoMGW1wg5HXaoUYbqHd5UmFGVTftQ",
  "key18": "31DAfVYUi7FrRm8CPUrNXwBxiXdMdYBda2oJMcrGVZHVWSwTLSvLYqJGjF4P2A8Lqn2yJPwV5rHBNAvLGCfTpADo",
  "key19": "5yWihWokQ3yuwzNCxtSqBRi8bTXd2cxLYF4mEb6LC1Lt3hzuJNGU9uaDNK6g2RSnWsmGx1wJE57DsLF2xiRAkaT9",
  "key20": "7HYgHz4tyCDYF2Nf26KJj9ubUUN9JyBSmtrToytujGZ1MXcMXY3VhtnQ75WSnwAQ93wEJqXDERKJjqiM2fvZStC",
  "key21": "4mejGvsvJ2YYYaAypS1RjJg9NbQmnQcvZ6atkN4n8JTPBanaUSh4PbtX8S1YLf6AKHArZNV1W1kWKjecCufVbha3",
  "key22": "3bZiptnNTUusYrczof5QN4X5EtiHNZJJiuYmjbkarPKh2fAAxpjjPVKJDCFpWYXtSUDeFRJGdL8TSBfmXNh6KfvQ",
  "key23": "2MoN1vACQLBYJbTeX5XfekyyRE9Jun5d117b5jJERWM2pQaLQxZtJhgTU6tqWEhTJnbGiU1Hdcc84B8YKEML64x9",
  "key24": "hgMSPrzwk6bWwnTnTZm5VSBkPzzgDXH3VMsZwfAkgcbPNfzdJtVTgY1M9gYwxhtWUDWwfAbgza7tDky3owtbHoD",
  "key25": "5LVJY98xV9YZvFMU9sb6U5t6LS9sBhrMizbWuuz1j69HmzynJ6rNAKtKEQzcCf9jwYyfnsUuMPKjHswkZY5ULo5K",
  "key26": "h5Q4Rft4bYRpcZHhK4AP4iNt3wN3SviPwLXRPcuhe2s4RVevkJdTQzBKSYuudx7UBT3qXKBuHdUBApHWq7ZVZxQ",
  "key27": "4qWaLv7eV794KYvS9ueabZtcbLfUfzexVdaaxn22BuR4F1BAeNUDM7DJX146UsQsGMXxaLBhak5c6US89kP2cnHG"
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
