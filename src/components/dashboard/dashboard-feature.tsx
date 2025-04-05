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
    "t3YH63eYDMwhLWf6khiQBNABJRqZUtJKzFVgnq1QxhTJVRP42FtXyJWhs7RcpjgeFGqjdPnSkRRAGteVQt4wTdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3crFBXqdQG8M4zqaWcUQLCR2NpbHsQieyAsZ3z5UugRAvWMPXJBEijNzRrhAXHXUboCgkykQ2UkX5SJJbbvWhfBU",
  "key1": "3drjdVU3Fb7z2qc8v4wwqYavATzvjv45pV7F3ZuVxpaB93PZ6S9acTsgfq4Jqhc9KRKZNPrvfzz1paaNknWKKAEb",
  "key2": "3musM6sFRqW2AQcgebW1KpSZDL1a78ygFW119PwsAjA5o9cXGHtCmLMvkmKTwwWhm6nWYoX54sLdAfkZ2pE317iv",
  "key3": "nAmxZDcgCbFfyNyzUX7PCSodas4NptujwsNJcEVpyuHCgMGe3heHjKQDPRei5Y6Rxj2kR8M3gjjYSSYoyGM1Hxu",
  "key4": "45ivRu5J2ZJCczCujPZ9Gr9noM63uANU9GwL9VYm4uNrBC51ywze1eDPhduYpVQw6u4DrpmYZSiTYtMDAV9CrD6T",
  "key5": "Ui4CNbG8ox7gW4DVnGKQ3s7PvCZDZQjRhFEd7h86gA6mt2LeTAv6nZe9wR6Pu5qQ2ZHdu9N6aHzbUi8CquDbB75",
  "key6": "3B9ynK8rf6CzpAMH7QQAraqkBumCSa6mCka2oz6JYG2KxiYqKYTGA6KjGvFVwnRCGrcPvmwp5hXcoSDGhG6uhwza",
  "key7": "5BavhZjHv8BVWy2thCoMzB6jDPdsXqwgMNeqpkpdss7gUKsiePTiRHrJs8kukDdEmfczvDGrnmAMK5UMcxQdswyr",
  "key8": "3QHhvMj3mtm1gb1JWWaQQSTneJWnCYqTBLBWNPFpwNT8Lfen6zRMNfb62HvoD9HbLJooe29ZCtPTXw4TPbWvQKuR",
  "key9": "4rU5nRgytkNEz8VB1tVos2yu8LyeCqtNHaPZyw4VEkk3RSp5rmwzwuFXi68gVTWJvd1GuVgCdiGdr8FRG1u6Qqt7",
  "key10": "5nKsBMQeVmx3SmCXsPJ23ZPGopZWti2kGZmQEghnUBsmN5Ny7SRBswCBKc3n5uTtwpDffJZR7zkHA1U14WtPsnfJ",
  "key11": "ZrqXckKW8CF1btEkniDzNHtc7MjhxQcYkTEreusFLdxs3aE5NYdeLdfUJjM6uPhDgQaBdBNeSC4jJEHxWHwKast",
  "key12": "GxjCiJh5EEDruswgrk1wfU1z4iNpFQ1RERnEje2EvhPtSnZ85W9zDneRDnBsEmHjK81FBjerzat73BXm2wmMV7J",
  "key13": "ASkqePQh1GzruHFddnhtUzSWyqgZzYkuiexwaGKUJR8wyYr4kmqUtfpsKpPC8p7FaeL2nLiiR8pCor5gcQELnsJ",
  "key14": "YoutoQPWiQWTHb5PxgnkJu8EJcr5sVRGBa4wjgM5G8xSkQGtGVwXkKFfDNw7hPoq8URtLEuT4PQcizjh88j2vSS",
  "key15": "3umr2W7GNJY43umT2381j4wrUWs314guetYyEYqFJjsd5usiSirySQcUsi1QcoSKZgiXp2UtGDPQB3An5zBhQSMj",
  "key16": "5nQFHTH6CYZPRjo9TgPtmhtjsDS5WZy4uTZWkGoFDDcX8Sy7o14Ubzvp3hsvor1RaXYTGeoeNGkRHfQKcUn72nwz",
  "key17": "4mkQLb7nWScKjC5HkFgPg5Hr5DxA8WazPWU8Q5PsaMpMw1psLAfmFAKpeYox8QBeqZSWo13uoPTGJKT9Qd25kv6e",
  "key18": "5yizf2S1hsbBeFPha8dDtxgxCTsMwtvdMGHPiPoXqEhLHx9dJ1Q4Coy8Fc98RXZkCyXFSBGKJBNPGRgjjkjQZekm",
  "key19": "3icgKBGcPZ88B5kLFBsrgUszM2Ck1MfXmt5Yx596CnhXtZiGKQTZMuZzVeARJpTHV7Ehes8Afd7yJn6par69hMqP",
  "key20": "44itFMisdbP4nAyJqaPpkzHaYcWLVu2X4w85xUYYCLe6CT3VkPCzKTBJ4RS34y1Pwr3n7dAEt7yeMK9Vsao3rVFA",
  "key21": "44VPpQ293oK6WnCKy2Ffo3d5bcEXJhb13wsVCeYoju57xNndW9Efz2ZgDzsHsw6DsY2GnPtrCLbr9VJE6L7vgsP7",
  "key22": "4a4KcVBME9pkt5uGRowXz1uJ66xWPrrRDyTboosV8EW3PidkuGgbdb8ftiwisRHQ7kPvWdUQ5w5rTZJ1dn6YUWE",
  "key23": "4f3uDHd99EnL6A6pZGzL35KWcs1qeWMEEfpJH7h2eG9Yaeu4UX9xE3FBuYmSSaCEs3sYsV3FR6bxVBrjKocueA8J",
  "key24": "ySidmtbMmibsVcSTQdL4VWRMW7NLFxrFGeM1D6wZFaT8zNS29Qa1PdYMrSU1sRMY552pW4B9bYauJzMkZyYmWe7",
  "key25": "HTpxvPDPDeyBxaVV7295wtR9a8Bi8AZi4x4GTB3y5VgicUUgvBUpQMDkywUHMezrcHuFtEqntjwk2DypjCVEfHn"
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
