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
    "4buTyoXc13xtcL5Rfo7hdGEk9vp7VDhPn3qu87FAXQzkkcCQUZoTcHuKooteTcZKYmE8QMa8UKwZ1MSvcPFJG7xB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dMdyCDNZK4wFC4nTvGKChhtSXUs2MSTbFGmiJ8U686mBePcc1x7CXh29PStapoXnvsGoBA23ph8fbq1Af8PYqfV",
  "key1": "5tNf2miqTyv5X4oHiuz2dxq1xxVevbmjpRKstpPHtRYa7EXCebF4hcyxp38YBHtdUjwB1KvbiRoZU2Dk4uC8nY5w",
  "key2": "e7QwCb7M8EHe9VjXBzqgq2L7yomEG13tdXJVZddz4sRLRxPS9Pv5gCw2KHDDiQKjX9Nsk8MPCiYti5mev2P7ux8",
  "key3": "4bbLTRCcLVGN57nFCEEwezWUCGpic9ur27VrioDonipTSkVhmKihSHCBGwt3Gc2NEH5eVmjoQsUsopm8PNj3B4C9",
  "key4": "3DpDjN4y6RPHzVZ6ozZcWScd3XgGtqnbM2UmgyhTcY2eXycxwZMmtiW5kg5PjKtoyCGJd9CSTi8pku5n4Hbhyp7W",
  "key5": "2xu9r1yGUGUoSaS21MZbxzguATaCkenV8LPw1nFwvFamBmbMGZ2oB7swsZBbKKUnrAQcRbsv2yBDAME9Hyc9zixg",
  "key6": "3xStN2x3HuXES4LHJ5tQFKNYX2ELxTiFHr66HCNQGqQmKdg3wevy53P5PL3TPsMjLbR4f8GcknQxDYoWNBxdGxkx",
  "key7": "n69Y35CvsbLCAj5L86vAhyYLB5QkNGLAQh9FawoMXYMfcD4ZAKPwsrbdRFBZZmkTSudZM5vhfFmxJTtZwXYenBf",
  "key8": "5VY7ykZcfUi7GdzRrQ5KPFY8bT1Qpxp7U4wkum7FzvGnc5dkwCCvJ64dKGprL45z2gH16EhiRF9d6D239RZXT1de",
  "key9": "Kbm3YHT4cV14LThEt843YhS1PspbJesATuzjDfdfpao4v8wrPomsjcjmtJgmCM8H6H8khs3ZmdJ1AwPVsNiDiut",
  "key10": "5AgkXQjjLwLbr8gRNaLzumK7ZrTspDr8mrkMJE2ZVXjjDP9EKmZ6NRqh4R8hvM3aXtgzLcsEF5HNh8SvbdwfhCQv",
  "key11": "2H62sBXCMEkx6GxJt86LWiKbQb8zaRt82t2gMDnkpMykTCDZ2cWbaP5u8Eg2xiVTqD1y8W3HpB13sBhfeuLgJ3k1",
  "key12": "3DBuSHdQsttYA3gsJEDbMyCFnVVotXez8WSzb2n2dwP5nrDVBfga5Z7GmsUxXcKS3nYJP2NEy6AifTgRTPBbpW8Q",
  "key13": "3ZY3L8Rcc1DxPkyUMRXWtr7rDaXc8FfT3PRjEY28wRqbPypecDDcerzkFBQiqoXCK3XaR2R36WSfwN3R1W9Mrh3H",
  "key14": "5YSyfvb5z7j6sbEAyrovVHpQGXsq9rp4ePgXLtMwPXRbDCAmV2xggmxDRDYPxsoSyn76wop5tedzkPmUiBqRB5dq",
  "key15": "zoVnfpDmGC6JcCa286jS1LKRLFC788thsSvAvXmTsDL5GZNh83aoYpFjDAAKUffAFuBHaxcZ4pjxzDoNGtAuWSh",
  "key16": "9hgobmJBLzQkrXVVqmUxhG8AYbvP8UdPhCoUwjwRoc9MoMqExbEf3M17CihAQWLKYREHH6WfdfQgHZxsT7VazMH",
  "key17": "2ssHn2FczmcF9tJUhf5o6BPV9LCjrWSsAzcZZaXnoP5QM5neMZaRSgK62eqtRJ7yGBz9LFaJa54kMbAmcEVPxzUL",
  "key18": "3ojY3oQDg9zWbE5iihHtqdKRWDMTb74wQrH6qkBEcpDfRpA2PR1jBpmiV26W26EZPzVFMhzMU59WnR4SseTq8enP",
  "key19": "25gNrDCypeqygcTPgE63Da7R5HxyCALdR49ojWvJaBbRhob3RnvpwA6Rw6Vf8J8bT8nYeH4v5cKdAUQt3QFqMj9G",
  "key20": "2aK7o58JbCzbFS3PHgMRxEiDFmwqHnygFQsKSYpQGQHJfNDFEpjzSeQnzXALLjoVieXAzf3bzxtopQHrfdw3zraH",
  "key21": "5NubXqWLHQchaVAbk2ukUax1EuAQjRd1fCcvWHcDHdBCqaEPR9e3JNrqojzFaXxFPmGqVF3Go3rejAp49DZKvkwf",
  "key22": "2dLxyBSCJvWbS7bG6gypZDaG9QJfS7uQaBB23NWrQQL8CCsVhTemNCDKHHA4vFabuPCNyUHbjUgTruJiyZhi896B",
  "key23": "5cxtBtiMtbChyyXUUCzLcXztf5hspMrboAmYc8s944dBXk1wwF3Lj9EzAu1mzmb1nRRdquoXafpaQ4NvyhYBCnB2",
  "key24": "51UVfRz89otJbQ8Qes68X3YkbgbzBkJ2m8MUG7YPAfqmMFbUMaWk77CXqasxVLEfrcZwyFzGoos6PJaAVrPULMBi",
  "key25": "2oAZtiXx2GbxwdwpHG6L8mbbRsy9nf3ZZrQbvHBGet37NdwrMAHHSAd8JoKcMDa416z41xf5CWmK2ewjeG7QUsUL",
  "key26": "67KDYyjss6rj8vGo5BSwGset6E5EuGsaSDNX9XCoD4x5nwBe56pUX4iqTpr2CtvSfUZpsAmbsDuyMeTfzxN9KUfV",
  "key27": "4znfaMX1S6EEAye6F696XEaujHCGf5MsisvE55zrSbZzBDThAQnXyc7F1f1uiemRgQjS1dzcaGwBn3GyhUwhdZQ6",
  "key28": "CNDYRzkTeqYcTp7ggzZ9n4365Hn1M7Fwr1H6mmp16RNpWYxmhoHdGDF7o2M6MHb9tgPKVCJZ7zHP63Guf5zPHhm",
  "key29": "4TPr414LKdLNdCnT9VuQ83pbKVKLEp3RFLsGePUju52Wmqq9qtWihxq7cNAX9X5BpAXTxDZLufi9g528o9XvmqrD"
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
