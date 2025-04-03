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
    "4RYBGX17GGEvjGo5S2y9MXpTVgxK8H8n7wLDy12jgCvbMNQLvHMo6BEnwernRUwvy5KwFcGq8L168q9P4wao1916"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63U5j5g4ZgGEnnTrQzRguzxkySasjs9nEeyzLVwuDJjcYi8PiCgKzSGSb2w87tbbn5K8fpZXMssVJqWuQqyzF7Cc",
  "key1": "533zHBriVpmUHqP6zAQsfBjfQkgk8MCnR8dagJoCBZG8xQmXFjyHvgMeSNJNM1TAJXqdw43Rtz9u4dRtPvzqUZzg",
  "key2": "63AqJ63WeeT5VsQhVogjroEYJD8vKbwXu3qmautNHwGAHWgpSzjMu4BeT3nDq5MTkRgqHnCzfiGw1d249PJ1xjnN",
  "key3": "2K7Krw71PPzQGHX78TimZvtYexEGpBt5AagQU4iFTotx12A2jEDftYw9b3NwbJu76b5LBoeNZ4adrZhPFfhNVuH3",
  "key4": "36haMQn7mLMyodaJVdNBaqec7eZtRhWB9WzcWWoBsmWGa6n9bKVHb5Rz2kGHm6YL1B5JisDLEjoeMCqSwNrT83XF",
  "key5": "46dQv1byuff3XpmJoFFwxQqzULfKzUKBKpu8KbxwDnqoys2wVN1i1RNyPQhcAKyJPhCPbBcVw2AKkafb7iNhfa1m",
  "key6": "2cCVVfoeSr9LTNm7GNkYNcuLcf4WqvdfQ8oecpqnTSc9LYUdwiZfcnhw5muDcqiGyFTeUTSZFxKH9d79ytborNfy",
  "key7": "4TCUFkVtgqf1iPvAFb4S4DPNNxvD1dEJumfU5hwPsoVNEBaSxziaTd7C5vy56P9dGjL9VBhULrf1B4KQqQuGtwxM",
  "key8": "2bra3G6rjQkWPJPvaJ1du34v4z7k2baFNQkcLT3J9tP1gG8eoWJcivmRjveiBQ1Y99g2qUXE37gMmSHCHa8AVYha",
  "key9": "A9vr8gvfYM5UqyyyJSQpm4HfopFHdRScw9W237aMNmJ2cLZgC4uy26gkd5mnHj7UWdHCS7rvXj7PK8D1f9VXnqz",
  "key10": "hDYG9rxJg3AxVhnWDsfhtgzAvKUJnpkwADVcpVpTTLKJtFb1MSUKEpBKBm1aFBTqmpnY3csQkVm4F9URKidFvKu",
  "key11": "41vbSzUAzBH1LT5553qxkf4QVdcoaGL5AUL3jDViDvpFii8khCVzQLNhWS2wCa1cZZ5cuKmA5rinA7qxNwjt87yh",
  "key12": "3oaZnJDuMyqotTuXU3Vy2qXkp1BZ6H6F3x3jNjWCNFbs9QTowe4UDfRiMbvPB5YuzD9Y5yGYTPeLXe8TR1jNU5E5",
  "key13": "3iyrbLEVuphGc7uyxUVnpz5ht9RmShRPE1ebT3MxVNo9AajxQG2bkgKZHSdLsaedGujLkGSGYkmkJz7tJkKh5qtt",
  "key14": "4vqVcHfc6M7fsHvBN2C6hUmcZKRBYN1XyCcKNnNpihdGRq1cUCjz2y33m1kLVUzb8vTPrzY5Q45bzYoBFtmyFLub",
  "key15": "5eWKSN4qGzjkpyYpezUPo2AXiy1T4fsB2Z2zRzsm7FRHnorQ6zqQtesPqTex7VCDhkzvAX2nnULCHbkDwpZYcX1t",
  "key16": "2fEdV1kPAubxYeuBN9ce6W6xRgfAF4xuVZqBtxHWLDDWMZCZK7R6VYhwWV1nn8HLupunBPNXGSRDb4ewVxTgPH2R",
  "key17": "3Z9nHueqdV5hg4U9gRpg7F5yrPu6pPUHq7yGrw3YvEfm5tktKZEimqoVVjX7gtGiCGh3HxcTMuAMXgz7tJyWQ7FC",
  "key18": "2Mw3aGP63nJGkPLgA88Q9guC2ixV86QbtT31RyFNxPEe4EVRHqGsrMZzixDNf3Ak5fG3GSCneHJDxn594rNpzCwj",
  "key19": "3LhwjUfeTA9TtXJMUNwZrTVBURP8oFXKWZzFRKsJrjdwYUoNjGummyMmWzmRKa7kE6pYcjvPqjVZTCunfzYxYdEa",
  "key20": "5RR2j63aoMD4u4HWe9EF8iEZV827VubfnU8upEgr3gWsBM5oyi4s6uHrfQdMDEtZLsWTT4HQozTYgzEbFayrhcAF",
  "key21": "8HeXQnZbmY1zGxe1Mv2GFAEnkN5g39jDuzLvgpq7kLvw6sQDh565ooJn4vXQaHPtvQqDChLzu5FhPS9qwfJLCbE",
  "key22": "26NhngxjZLjr1PWbfvsBwG1MfpoBXBusDNE9VXjxYmFn6H84RKgA4Nc36tfPX4FReBNYdrBak1HbRAXV78b3qsX3",
  "key23": "yHyAqELmJqEQBDJEcbh5CyGbh6m7iQXHDyRCLgwRQhdTcDiBvXsuTwKeLTyMyKUg1q1jPRkvLqq72LXRArRh7f8",
  "key24": "2bhKpMX3SGn5a3miWYeqbLTto8agH9tr9r79w95bibuSupTPDtpQpEcBW3QhmEtvUVP7ep2RR4PGH5NtAR5vrxm7",
  "key25": "33SokcFbcN7HvFNZipztcCZEDXqJMH7G5hA1hQ8o7Jtj93XoR5NaNwHW2Fd8LuPu8fhfwfb7d7YUca5rvKPQhTtZ",
  "key26": "47jfcnkPByChxKe3drEBN8mfP6BjHGyAbDSh91cfHPPv3bqTQm1DHTUy4T5xWHA2KmtWdkJuC4r67hgkCLJ2S1UY",
  "key27": "48j3aYMqiWdCY5Eahi1R4o9mikmitCZvDao6e8pLttKAVxPQk8uUPJUTFafhCZ17f19eiFDDpXJy8EpeNHuRrUfM",
  "key28": "jWKqNLP9iPp5XzQJnMJLh2tLT5kPMzkg3TtjkwM7pwr3uJDVWn1qCEwarYt2G54MSxqjKfXJkqw2hBLHMKuRUUV",
  "key29": "FJ7F6ZSBzhiv97SSwcrD38xUapbXFkNHA1sgy8nMWkDspTPsgf828QZe8Hex8g9ApHop53KWPJfGpxFsHnqd8p7",
  "key30": "2AqYTQesgPDcTtCUTgN8ZzeZuybGy4xCKut5dVt7DKmL4MfgRETkgoysPmn5eeRKctn16WNtLTuLYqeiDARLrCXf",
  "key31": "2pPzy8y3rWaCKF5N8oa5DC8nKar8488WeJHuFCodWQTdvaDyuYVVngRSBiv5ozqzpv2SZA32SJS87RgtQxo9c47A",
  "key32": "p9bFtgNQ1saA2iwa1rKKux8cqvR32hRHCFjEJJWQLpxWT9ZJ1Tz1mGdrY5EUGxwBJyqZDvBE91exfCRqwD1qVJs",
  "key33": "4QFmD1trsaMFcTM5iTZAsicuUo77zhLWY3YNpZs5rTcKT1TEX2BtTD7CL47bRDWQKjynd2c71QD8ZYXgVZb3XVRm",
  "key34": "3wB4MznWP5cvG2c3jW1CqsaN8TvDFb8EjVwyhupBRee8aKrj6Jj9dDgZSegX2kGVNNrVrscu43mM7h8a1LwE54g6",
  "key35": "4wVv8H9XRHzGNonFeJa6hboeQP6uHKZQVM75kSpYxkeaLkM4ZTQCZNRGYeP4NXjfLwk8R2Je5EbE37GSBAMNxsLS",
  "key36": "3fXYqsPPo11GzZ67i4fMk1CBq9NEVLnCH2yPSTbP58UjSitjiMgZrbjEdHmFzVgdYFqQ5hqTvRAQDdDbND1Tw9gA",
  "key37": "3s9rncQMg1PwxuhhkTLtquWZpATWXxWJo1aauFAPTZb95aucrEPvcSM8fBDPxWdZJj4uGMeQTWcw1bP7zkfefAQx",
  "key38": "4FwUgVoQ7gGwiPyt3mgUBrRqrY8KQsGS15r4TJVpk8AuNHK85A8qSoEF8UZSobHEwnUfj4xQ7jUPFYwsjzoMqvbE",
  "key39": "5LgCRb6TiouGcnaHaSfbmRT7szcp32WrwMxg9Ej418zWwVFn3TzzaxAtst1LRRa6PxCT47M6Mi9ZpCUve1DTUX6z",
  "key40": "4LBK8h6htsc6iWjVrw2Ra29szCd67FqBXjr7Z7zr7hzLvFK43cBFspXpC5uC56TMY4LpPQV7zGBffY7npFxyQvoX"
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
