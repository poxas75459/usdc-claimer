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
    "2UXWj4fFbFUH4TnT6vysGpzsvwnEBL3rct9SqaCqwknD7HPpnj7J9Uv4tBqF5VJ9rm9XfgSTx4WH63sf9MVNYShK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "448fihg5DAVzPQvqe419WWWwRBWUF4hion8Fq3Fu88QHRur5HSoxXwCp15aENiCiuSa3mZbrSmpPZ89M2vshx2iC",
  "key1": "5ndRUrEiLB4wDrHyMLUZXSJbCnDuTbSFkSMLHBR8L3rH6efR2d7vQ6bpJrtCsUZRyvi9J1aHDks1nePJ7DnRtCaa",
  "key2": "DMs3paJucjNzfAUwwQsjMzmsezL5tpgW4ZcQ9VG26Fj57kuP2ndGSWR7yDjPB3sy9DJvSy6Y7tDfYGeiwY6FYgr",
  "key3": "4BJ7GiYx1iekhwHsurGjPmDwM3NuU2mkWsnZHQrSicM9VB3nhR383EaEDhZdu9DovYC7G1zmihAiXmPHMkcZtsJd",
  "key4": "5aSUNxUmz2BRwQLJp1aXHQ38ZAr1pFoDxpho4ac5osUg3HaKJFqLLRyMncTuMiWskK1Tb15Tu5yKKvnCdc5kK6RN",
  "key5": "J72VC2ZZ8xAGkGnsYMPmaNNeQc7WCSnzmnEroZZhHad1wNKm4ozZtjL48oRxEM6vsV9HjJQkmZhP9se8evUAagz",
  "key6": "m7UshNpU4bXiv2HLNu9dfgLDw3WsQRpFh3w5DoUvY6wzKPpeqHvzp9ztVZitMMqZRFKJ9uJQ9id2ndV3CqXfK7a",
  "key7": "5GL6gVuUMNrAUa8S4fAj3PC5wFL977VZM3KPrV1RrU8viL4KGoCHEVSDvgpx9EXiWvxP38NMVrCm4sfBJDovk8mi",
  "key8": "3ktmoyCTutTEuCanycCjB671ky9tCgyzNnXJyYLFjHQu4L69FpJPf3u4uwKEdixUKnTxmWsfV18uimnKG7XPCQFm",
  "key9": "4GqX5X578aA73cGNuHUGrDnM4mpWFkZ3NiaG4ahXAAfWNnWcLN4gyNUCMpYfAXAZQ9YtXKuKK5znVUMrfqJbGHsa",
  "key10": "4xLrry4zuebkyu9yWAGES3KJutcabf6SRJ6nrDNEANWNz3T86AEEheWFmeeQMjmHXeQ1qyti6Foqt5u8z1DEn1fY",
  "key11": "62tnt4Aqq35jNvJnQs71nZHUWQwBFiKvBKHpidUFKWKYTpU6GujyTtJ5gnHxDPf19hs4s3f3cczfjYjC9Zn8x9XG",
  "key12": "3GJkkRVqARDYeUH1wPh3qjGFUWtRdCQpiiM7JHvumf71GXhNVTMpnYv2D6f5Jx1tA1ZJ15RQBVyQeXntBC23M2v6",
  "key13": "U7G5CB73raq26ZMErZoDJ4mEeoR7sXr81BLkqKtnsnjWCTH1929h1S9W7PGoCxwreAbjzxWN8YL4vJwTxYRYRv6",
  "key14": "3rY4ZHH54fJNbeMZ8zsqChtxHKuQUrFphfyX2ssQogxqPRbw3Bqq7LNCVCWTAd1rLb8wgo5wArbyJEGLNoDiFsSM",
  "key15": "3V1Sc9WjmPAFFSBfpqZgsuNLEsgaYGbQkjNWUaRGnEw1k44Shyio4TCNH56qbfgB3JpKQgwQv55oqFSGeGi6A1kF",
  "key16": "2UAbn2ebPRty9hRfc6ZZ5pB3BtoKPqS5DGNePnkMQSPe3GcXHf8q9AEDtckQFYWcuJETwf4YxnrBAgZra51zvMz2",
  "key17": "2okDiZ3vya6K7aHiVfaM8FajyBoCWQcmXCRZMCEhrTctsNz8NYkzkAwC8qPLeSjBWioN8q6saihCc4MEAppEu8pE",
  "key18": "R4iCpG6Y4VhVTFEmYgC5QKj4hmQkhSnmQutzEJRPgYbEx18iA8n3WFHWbc12b6QLjHknuiaS25Y96JP3gdNcJba",
  "key19": "28qyiiBfbgTdWEvSoWh3iAZiFbEeDQijN6bXM1yh8t76dy6wRUuCmtijTcAapb33U6jGACcYPYuVMguLhwwzUf2Y",
  "key20": "276Q212NQcTm3Yu3JfxKreaV4qW4NR8XHiHQDNDUChDuvVYrBLL3dwBfvL7Wgj65prMczXMZDLCvBwY33GHaGYXv",
  "key21": "ibXyn8cU48qcMPcUKcoKtHF7M6t4EbnYnJB23F4JrtDq1b5GDR83WwUSnEcX7DtQH2SVeiHRLLGteQNnq9czYTe",
  "key22": "AEptCox3Z7jgBCBQTqK48YEeucwLmAHTZFqMjW5uU2ZfLLgsecZbz4k4ukiBvYRR8vUZr2Rkp7N52XJX4vtQTBi",
  "key23": "4qZ5r1SN54n9BzZei9TuPqKVZGisJfAij4NyX5xd613avoPcQbRgbkYqTh7FiEW1eqBnm9GekGeC1vLJoEXiNL7D",
  "key24": "5oD2McMxLripueADyaWBEmt9KgvjLSu4cRtpMALV1EZP9fvuQrSvFRrUssgugGTXUMDkeN86tG5nDqXff7qdQgTn",
  "key25": "1YBzn3EcXD4zKiSXPPPcRtt95p6dKcwfLtyyoYAkvdEcUZpzJqm5mjDf4yXEYaWs5iXLojah3dvRoYzd6VkR1zE"
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
