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
    "42sTg6RmHsEahtUb2JuQ5FLU1ZDoYCuK4hgJYCKFHpKwvEFKqUgNV4iyKCAoTYqoJnE5AmTkDLTd8vCEEHwuZmEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aJxD1NiRsrVfRe7jawVBKyhTa2NfrZR4z7jhRydQRQoxq5KzHWDbr5vXSWvFTJtVm62ebS8cbFN4eemw57Du7Ay",
  "key1": "5mey2SxqjJJ5MFTQHR5XFi4R3Ri6nRzrQi5cGDCf48nmwYSk9ZeYfe7cVGV5icRfv7dEvnYUErBiHw3X49HmDyTY",
  "key2": "5Wdc4b34edFDRLRDNSSqnUivQX9L98p4XXLMDF3iKSxXXJ716ajXX77vG8qnaLx1h1iMAnvnQeRQeHNk1YZzm7vt",
  "key3": "2S7vqoWnJvPBwcLUuYrTiEA5Jmm3ZmXQyEbGo7tEEXpYyvZcCUQmQiAK22HtN6Pwwa97QKQ2wRxHjztCtXgsuMkR",
  "key4": "2PG9AgHk5gen2ko9A92o3wfDiWiTXc4a1uX4k5RPAcVAcQuwQF58GbW9MKbjsDmLZ7pHCawaf2cnk1HFdxyy3UDK",
  "key5": "yKBXYJdzSD7CpmmaswQ2djcQsfZMGGCn4VmPKv2uUWpCpyaoDY4nKSjeeYJ3Cber8Mfq1XwjTB3hKZmmomur9LN",
  "key6": "52drya1mP3MJbcDE6KeUiF2aUHojwf4P9jZY5QNddvTmbnFVH1KbThCqGSWUmywxT6WVu3Ji9yN6yYhi4s1HV82W",
  "key7": "5SAz2b5cAW2h65YfQRQqjQeYEwKBCM3ou7NAQWdXBSDLv71Sgq7vqynLiT5fy3KQJaDzHVYFxVYobEbe6vtoaydF",
  "key8": "2xaNCUi3kfBKmVf5A9bj69pDbWVZKKUJFkjk7mbqx8in1UhHNFYf5VcvKY7R5z2DbNP9F9bB65n4gCPTh1zQkpyp",
  "key9": "3MXvM6CxcpGaACsGqR1RQux6gTvRm8kgjkRuMhk3Cv4edYaEgwkMs2NttYruRwfaXv99yKroUmHetc5mmyhvvsuv",
  "key10": "S2hVoDGAFubv33idQtEzcHzBEoBJKzpphHWWXZRfvSGkCVVsCxuqFARZPwbd7LteE3dMiGKDi8nmCa9GwJwDUDA",
  "key11": "2WgqZtpGuuWgrBcK1XapfHknBrwNcJy1tzWL2JvH6fQUMuTMwhWnpUCn6rpxuB2g1gLA5GN9jG4g4vv6nkGZkhRB",
  "key12": "s1nUjCYJTjJ5NdN6EiKUH677tTveC2UcSFAMHSgEMKNPFje52fasjP1wqoAv4gzYCbgSRD8TXfLCY3CYHYdrSWg",
  "key13": "2oLSVafPQ6zFWdHCKpBNTfXKJV39Np3WcXFE1futmigjm6dyVSQgrReKBYqBUvrxHJovVNepcTQ6BsjfzWY1HA6V",
  "key14": "3YQbg6NzWaWnhnj5w71rSYmTLwyjFSzyj8KMnXErjmbTMLRxD11U5hAA43tH1ahU6wHiRZhNrNvy3TKLavZx7eJc",
  "key15": "3qTU8c6KJhRwD4gnHmeXr5WD1GFRVdBF5UdztioNF9recg3wdjPkL6neA8WTcsFCx2sSDu3SqW9vRXNF2AUywtu9",
  "key16": "2oiP5NWX1gdAqouhUHtmYWxSJb9nqZVziVusR25JC9Pu5YA52nsz1hPcXffMfmGfEErsfUv8nijeAdTA8gajyXqP",
  "key17": "5eV1ey23GqdtKCDKAGnVvFMtpnEbJaqUYaJRCPUaqnHysoLn2PdtFshcMhXnw4jdbyno8MQorbJnX4Ug5yoc3kPU",
  "key18": "Wcj65ncW2kZ48LJhBo7ooSFPLBCbm658ahkMBeJ1RZvC23ymNDkyhDfZpAXyKwPdyLcWPMyg3TirixHbTxm3zmt",
  "key19": "f2xAgogHxfw76fCaMk6H9f1uDnMxsQEkZTbwBWusVChHzBob71WwkFCSfPfe21UU9o4u2Z6PM8bgcPcu4EDNDAG",
  "key20": "28vSG4wMfUVqttoeqCxTJq1skY4pdUUJd7GQPsmoDubxP4sttBieaEARA7XkLNF7kYebWzTW4bPihVjjrzaY6Aah",
  "key21": "5ZirJCEvRykJgzk7DeVevH1GawpYhEWaQxZ5XGSg8mK49EQXKoAN9TRrxtSACWFtxNNKiZu98B5nqJboJdMSf6Jj",
  "key22": "5pSYwiDEPA88iKQ1MytrRE5GMynJ7KTgYBKHMfqf9VqRNXECTg9F4W4zQxcVRJnAbtBrPyqappFSkvPw8fx1B2T5",
  "key23": "4EpqJTNdnocQEmtasvjknLX4j1omqdKmoyTeTBz4mC1L9y5adMbcT34N16YT6jjZ5PZUVBXbGK4ZEUk7AiWRJkFv",
  "key24": "5pvL4J9BopaMaoAGS2t49AD75KwjccbS1jeyzAcXxLZECpGoqV85XSBLoWTg3YdUv3AEuHWpHN25sK6AYNUgGMcs"
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
