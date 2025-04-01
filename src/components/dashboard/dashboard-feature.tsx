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
    "48K3KfY6XTZHxSCeZkzSjNToQuca6KgcwRJZ6PZF4qQY7XT3oFzLJAGCZ8NmbQpyLVsze1aXDfYdrFMRUfaJSDHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wLSags2wHiXnE3HSYcmKr8tQ55mkL5Zzfd9dMfXq7nrJ3qxesLSxSigFxNMnT8cy3tnSus2zQYcMtsdckWkX1ev",
  "key1": "3ey7oc33bH81eVT3GroFEDnLJAYkNqZSkWGySMU5ZdTbBRqFcpRGyex26PPxrGoo5gfiqaCawyG3nS3A6kvf6jpb",
  "key2": "3FdVc1f9Y8nuWq11b16xwHJwJ2G25uJmDS6KksKGyF2D51V4JR9B9ghczT42ggpkyhTEpPUzv5a1BcKdvoD5Jivg",
  "key3": "JucjUWkf9FHqvTj6ynMtrjoKFSFZV4ZdtKSLgxP9YwtYC8xDDqDsD3R9iwedz7o5T3jc7MwGueXS6YMeX8h6Exg",
  "key4": "KopNrzcahUHM4dBcrzNCJr22gh2sJJpkZN5pMKe3396UoP46jqqN5L2zeSts3e9ebNfwRob3kXqSetaDteyBuLF",
  "key5": "BYPae67idWKJevEgNuod2SkB5dCJeVquDiH1Nf57tvLaxaz1hTEdX1jWp492YR4VKDy88PSb3NRuvDBDKBMSp6D",
  "key6": "4xtTbymfPZoHxdafxMxXPtuQxE5V4aWzVeC5eaarfkC15QCqNuctdmpUmAhTX9pNqZZEaxd5qLQ6gJNHk2zJ9oAN",
  "key7": "VUeihZ8NERjpBE2sE8Veeck5hJhnn47BbybGb3PYK9WVfVCisV84gFAzUcoszQLFaXdiGHbTzKR6FjNLFii93WS",
  "key8": "25HZQFAZ7jQ6N9qPytkjG5EwiwSv7QXkxqVBS39KnKMpng9wceNxdxuC1uABtVdtw262edRNSFGaPA8SpQiAPR4q",
  "key9": "5mjGvbeR3KYCj49dK6kSVCpEB4PdM6PZiRF4TDwGSCWx7Ciq2x1wmfZgEpCx3u31sNqJWAfv2btvfhHvKbjrzK6Q",
  "key10": "3BMXAurrDn1YzEDVff2hR4LzSr7VYtiFSSZFnKzTxBDHRAe5MBiLCsZYUo4Dnzd1SWeitmZ8fYdfGnWJsDbxJaB7",
  "key11": "tQ6oZRukCpMSRyCu8UfX27KVebUVkV6v8VFZSDYH4AcR6QJeUzE1BiWXpzWgy2CC47xGdn6U8SVT4C8Aag3gi5K",
  "key12": "2x5kbEcb8SR5FoKVHaw6xc3EQFvRegnNJKG3tb9W9p6AMCuo9DMtZRciKqVLui6W2u313fdTnJQP6pAbaAZNyydf",
  "key13": "48AkfgyL72HDLbjYsLniv5Hbq8zfdqJAwX7hDw586NP7f8uHyHN3f3EvhAWZVoAbSHFyVycKYyEKSsLHCd6PE97H",
  "key14": "4TLDYRDKtJYy7QYaC7KaHW8gPdhGDAqTwnMKVqjeCTZtjtEpY7dUDRu1wop31eJ1mY5Y1udHE9sktNGwpNzchtnm",
  "key15": "3aaFPDFttQmJ5vwvhYcNafjkbE8w7r9FbCgWfs678c7H32jRM6nuejHZ2dieMTFTsaktVWuL1C1gbG3rqEu14sVg",
  "key16": "4zwz3BWnx151CfAh4iUHMr3Y8ufsDc3zhVQEs3EzqTaaashN2ZujMY86zauK3E3NBkxwDPxZqZ5aSTDUXNoe1uEm",
  "key17": "3pwQtZYjsYuShSWk1DfLv7D6X7CTycuAxENYUTJrQTyrmhmG1keFwBFpE2p65NC5W9xFLqS3NMKHRo1D5BVcSndt",
  "key18": "3emoVkNTsZ11LPkRfD9BH78LWjiELquVyNn9bZmFHfYcTDSmf8sebtZC6FzLMdYimhrvr9oh9zaJZT2dw8qSM1Jn",
  "key19": "3EnqghhMZJRfR1t1Ys4QWWAcs46cXoy5hyjz2XafVvZLQrcy1apZLFMwdSeNY1ptxwAPz2w7vKVXhg16L28H9P7x",
  "key20": "4rmfykSCAqxsqVF6FhuaqD2Xd3yfPL6Pj21dWJjhP9J1XcSsDrt9M12XQwrxziEE6WNSrRyj7L4TPmAVu75cQsGB",
  "key21": "2ivmBGKrMvq4GxgafSL2bdugjvDJpN43gitSkRx3FCQ66NJzMznKrfYnyJnFfpfhFJn1VCz4R3koef9TekdEAmjd",
  "key22": "2TdGACfQKiByTTsb9kKXvM3Fsg2UK5iBoEL1J3gTV8gaMfBmcY4wocDTMqzaVX25sAZ8EZkVZ8kVu46NoRGpUy78",
  "key23": "48Arguzdf4nMQ6x77LnEiQFuwkG2tqqfkxgAApSwk7UzS6et39K13PgcFrD5tTXZYusQKcx7Md6v4Gwp8h3dAGza",
  "key24": "4JW91XxstomCmxtsEZzJ3JvGYxBA7p74pUUvgoCQMp1sgVhu13zLCm8rcJ3E3NwaqygAnva9VtqJzfbPPWfkTD3i",
  "key25": "nUAjkuWgek24S3oqBvRD5zBg6hx4bCp3oQrT38DUqnLk929zXCAcfCTeaJE3hCFW8d5PzyqtF8zRUtRjCo5Toea",
  "key26": "4du2gSbFXbQCubavCUekXhwrWiiJJDKb6hcGnDiu5zJvqvdjruM7J19tA94hndvFvqZSHwgPqD9D7CaZhKBKQRgR"
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
