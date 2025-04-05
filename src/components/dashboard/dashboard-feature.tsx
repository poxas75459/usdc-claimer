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
    "3TUgRKRCb55ffwk6qusZVgdG8cvVqSuvHxubfiThBaRS51kh1Sg5AhGLrnwTrtoQPjXDBqySL2JRq5uLr5k9dow3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EDryzqzc1iVACy7qSUUnQppt6hFBmifqoLJwPziSsyLtfe3PH9EyP1QEpUNcufDrTcXr6BCJfyw4UN17vDLLGmU",
  "key1": "5zGHa87hhz8mVrURD4qYAVqi3F4vyoVVGpx1UmHY97T5Ji76k7fTfZDAaAmHrHBd8gBkSVNNLdv6hcgm2W24pTWY",
  "key2": "id9gQ7QDGNfSMUguHxb7CNAVndgnjZGMnApGjJ3AnaRtVV6MqVe9U1iiGG5242VoVqnXXVsT9TUjFaHck9Gor9m",
  "key3": "4mYZasNYVtdpTSq42gw9PEwv5N1EVwCHmYT6TV72hSv32ZxCTq86ycm9YRWhK54vhtYQsszsovXJQ7humXkrFMrd",
  "key4": "51YiSgkj9YBDkNgUYwMLPdExS9nRJYzHv74rRKf9NWzUKL8YicMWVufDs8U3cPizHJs1dpTMkJkvHYen1X7LGZSF",
  "key5": "E35zvDtAB88dQ5HHQbM1hbwKivo7ZrMeGHiMNFmDfTt28avVeGBwhZ3189YeQNPuC7yEYkHmutyvyScmL2Q9C2P",
  "key6": "3XoAmV32fw1qiXaHewg3v7dGKf6rjhYzS41yYRkUwEnJ8aAk1DWBYr4NSkj5dyVv2eLwSmZmCiGE7fyi8UUz8DNx",
  "key7": "4oHvifaZ6dgjY8pyj1XzunasCVzEXV7i1UMFQu9qQJYHZ1BxGqddVy73mNq1VkQmhN66obn3Wdo5zthQJnhom2gw",
  "key8": "iByEAUrtgNre1Lgsqse1PFuBQ8PwgaXQvNQiMga2W7uXgL3CBwYp1kPWdAQDXZQySJvKQ4m8jb6CPwmVQqQCBHH",
  "key9": "5cSbRkczmGUMgw3w7MDxiq18kdhymmzrtRjBNyJv3wBeU5kBPPgpcg1EmjxJvZVPgTTHVt1V9CxudKDK7rWgskpF",
  "key10": "3L9cwhUCoCCY6DRfHPdrNHxXN63aW7fbRp8bGT5n8yxMdumnHEMdaLQ63Kb7RYLTU8HXWGjtDUPiwFWPk8X1ejPo",
  "key11": "2S7hPzxhhzLn2eudf5PDDm9NWrJnwk6gzwsQazRxzGpVrtjLLszSuEqDqrVU42DdgeDjTktvyzMzUWAZRtkzYR7b",
  "key12": "y18tScHBCefw7rGbpedvsa6ajXG6Vc2CaNk1Z6XiPESphMAwe55Gu1ExcdKDyvkdmpJta1agcuSidnMqSXwfFqK",
  "key13": "4qgxRjnpKhTcuE8CpCxr45czdh7CB6CfveCzDc4Wm33P6Cr3NihTd5TLnRz1ctzD1kiSnzNXM41zzTQgfxdGYkrx",
  "key14": "5DdbW55mHMCKfqszaxGsPJf3Tr7VesbFzRUtHy6tfjZxKRN9wTvH7mFSjxJJQsszo4Prvf8DYkCDHeh8xW5hK6Re",
  "key15": "2m9Mha7345jEGJf3Hb7cLe3w8ApCNQmejJUsK2242UxeD48Q6DGU8Acr4SSWcuft7eQAfoR4TpDm5ktBK3BiRWtc",
  "key16": "5fk1AzohBsi23rcpiosksmwVLGkHJD9tS2THsDyoZRJjfggykLME3Pm1ZzDSqo3fpEe2UoM6gjkExvde84NUWTDj",
  "key17": "nPhdqvET4yzQvqDRfYCAx5WdrTKWS4zojoHTHAqt9crLkgqP5RzkVWVhHcPHd3QxMCaGRcNoni6KdF4maDTiepj",
  "key18": "2S9dznazE4ZZTZHruLqZFQqvq6HuRRAew9JeBvtTPvKrkBU4fkT962KV9xbQfEEXLxS8L2wVDBqUQLpnSPjQrAA4",
  "key19": "31XXyVPGrfYKSoHQBE9z7MGnNqkTfZZr1S4HyLQmtJu6MNJiaPf5pFnzitegKUX8tYFUVAFpRibzz65Vy6tye3nK",
  "key20": "66gzCBdkMCZRdRj2e7FVHqzm2gq59qCCwavfNgpM1XbY193VFxZHZPDxfmVczZtzdypYKbQ3cuPJegzSQMdmLgST",
  "key21": "5tkj28VEn31AA38sTGNV4sBu7jCG4L13x6AAPppKA76GD9ipCKeFBMY3j8Bd74b1xYZU3Ts8UEbZBoLJkw49rTV1",
  "key22": "2W5paVroKZkEgnDBpsQycxwVrTtb5aZ4mrkToXFHBAP1Xrestj1H97JQRNTWinkdPpT3PYwNcNXwtEPQt5wJ2CeJ",
  "key23": "4GYwpmn9JrHobvf3GRF5vhz9mbNjuq6ZhNvMEe54pxFLTidR3fxQAMwNtAMXujgfaSiDzKLtKtHFvQKnVod916ud",
  "key24": "Adr3skemZuwiT8Fqnx4fty8X7hnBpRqhG3gGfrqopzf1RMYCpeMMCNTRRaTSpkoCb7CkgpeQXtfHvwM5oX9L8aM",
  "key25": "21Mwf9f3h3spPGhpdXjzQ3Bfe8wwzDtgBZmhUG1kCNAZ2nJVLDFQX4qTU3y1QzoUkEVDiqHiU6ZxB7uFdeaebAQ7",
  "key26": "4VYS3pzbmoYnXEtXh3ndBiAZCrbZyXFy8XvgNVcbYQCsspcAuYYAxwmEReULXWhwWmc9YVJWBscEhYLEs12ydExR",
  "key27": "3ciEaEgm8zWPbqWRmdiL1QqYCZUL9wdUiL8q5jpwUYBrfJQrAYHoyaSYuNBkQhnoYj6GTC4J4SKnFL9krjgDNHDz",
  "key28": "2jQ1oMbtTox1cex66stCirAoZUnPkZmJiTtHy3fJZtzxEQkY934Ubvt8YWg4xFQi4FrmUZHUASgBTQH94Lghybz4",
  "key29": "45wMwUr9GVxoJww9b1C6Z9F8rnhzAfo4wDxZAmq4VYLNidpDdSLAfrnoVbmNe5bQEu874EkWc19HaZCepy78nShS",
  "key30": "3P7vuNtV6cAyGaVSPCPp9TVFPixPaVEc9FsvYJPfCSJUihRvW6oGWUFM6cH3832QmYGp7ZxvPTVAEVLKaxDQgnb4",
  "key31": "2GHKtmViCX1CLfvyJu5LA1vGFpbZhTSMiTajiXAmnmTMPaCSD1wkHmmqoidvLdvMAESuCci1iTTrbhLQ4M14ioRD",
  "key32": "3JcmSov44GHsR5CwuHMMki1DnMUmUM1E7EShbYwHHrUPUm7xPysaNSK9dRyzb5Dgdi8VS4oT47r8P8eVBPk42E2A",
  "key33": "4qMkb4dEyUXcWVG7W4gSdNmd78UxerskvPaULJJTwrwnN9yxhZvnHtvqX1Yc5P6TCYsDmiYzkMaNKAbmsKy91iFq",
  "key34": "4i75athiBd13GDaf4TR4Xw28VLjvWKNNWC61kiKEMEKemXV4pmDXQLqN3QGDiToAmEkEgkGCSRqQv9yftcVAbNHy",
  "key35": "5nCo3uvdj6ni56LrZxNDCQUmvXkURFGRHi6kbZfVvHpMGSzUBugSg2Fr48yHhR1kpA2QiJWaetnXxdfAVJk97u5q"
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
