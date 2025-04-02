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
    "5F83cMkXxHC5oJxQWE3miTG7WFmmpeYQVVRuX1FZhtkUqAFrrqQ6SDy5k7BqvkvX4Cnt8ebY7g6Qn8LprciVqFpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vRtTxwbdEDJLo28aZSTSj99fz6PcxDDpH6nr3iTPTJYyk6pq9S6ojcpT9VL6Q1vG8eajUAgbfe6uqPVRivftFAP",
  "key1": "3Ajp4fcFXAnbYeZYUSDg1EYBvLRdAJypTFQNKtvzy85YmRfPicRiKzb39ziySRejrevtYY7YWHrVnoXY6ZiWxqrN",
  "key2": "NpUvTVCSzyswzzx35EXdt8LUcgDMerzq44WWG1HfCf4ZKkCEc3bQs4DbTYJzM6s84zTUKbZQTHS3nuhPSeyH1nx",
  "key3": "4AEWxmti6j9DSHwtMsQcNUzywYXa8q6NLKnuGctvjX5eAsv8T37qrwzp586vRK2wAMjmR5RNuxtBRUuXSv4axrUT",
  "key4": "5CfxrLCf1RUirL37YZzdtdUEusC9R9AEosUWjKHvxXS1kmqP6pvDAs7oMeKN41LPLdBni4StZBgHAdmzbqgZsKvQ",
  "key5": "5RJo7W7o9aWHjjc65b2pYancDst2qZnMxLd1V8XrRR2T3vBYHCm2bWDLdRJTDjnL4zSdJY3UsRtGtWzfKWcHezwT",
  "key6": "5XsmsCf9TbnDDVzCzRb9SaPjkk6pdvGVozXznDZkWG8tSjZJ8wCfNdfpEeAiDJ2BkDHiK4pW69bcmdBM3CfFfsrP",
  "key7": "58rmb2rPSF79RQxfWPppsKM1tXCAaBLQxDqiLyJZ3DqBGsu87mTxMvumrQc3ZaE8ZgFLq3YtoZFgZuuNWEozH54S",
  "key8": "3zB6oYPiKBnEXHZLXzqDTca9LMoqVviSyYxMEYSLncwZ4db6XCZnLrig1gPPxsUfDw7F2WXqvZdr7mNfN72mLuH1",
  "key9": "7y3sSzndiQCNvskAL8UGEydgNm5QuqGupbWTQvLd1MvmxGayPJs4D5ZC2Me6U6APx7odvEWhisUWpBLK4ij7oFB",
  "key10": "33XMd23XEq7ZTW8cZ1V8yhSBux72bogrux1H6Hu8r97rXuVXuN5841A5SB5vSET28a6nsraWK4GKmQJcEypCtPzJ",
  "key11": "5iritckDtwivuAN8qhYdykecPMrByA9iU8w6PzRRNcEXMdbYt3NikbCy5VkUMfLWG73CxxwXe6d61hqU8UuV9Khm",
  "key12": "XVRZwYRSoWWJr7vPw5kns7CVMAxDCQdw74fiys79FJBovBVLrW9845AUPu8QtSnjUwgV3vXoP6Wrbm9PWVQgx6g",
  "key13": "4aMv8EaAHVdNtTVcpkfhrTbNgACew7BZLWiG9ZaMJEoThNLk1Ti46GnZsQypLvucCqTeC4eg5YuvJf6scsNCWuE1",
  "key14": "4F4veYCqMeWQC4qejUZmWQo1pJUbY9XxweHjxxEvErWgzU692ZSchgnCFPsKVCtWKKKmQniSD72jE5c7768dwZAD",
  "key15": "46RSjqwYTKjSg78JMBeYDQsbr1FuEHhzFj66US1CrFGp7DSX2wuRTzeEuohsthobGmQpo3qsLPn9EYsF8p7Kf3xH",
  "key16": "3NZswmo77k48Ci1TqCwFpaWiSnb6zKKesUrwjfXbHCs21M51uEBK2XGXPouSsLLZjXiXytrN4sU2EQMhcBcuRnhc",
  "key17": "3SPTwt7ACs2DkH28kpyGRfPGDbDJCjg1qoMuFxDsdZDurmcpDjbKxuhNuPCjt187TeM1Z5M63ac4n4SuXt1zCpe1",
  "key18": "3zBAfzDhdFzX6B5qA6uHcaEsZ4wfW6zG2WgSQfpMJPoN4jHQP8SySmtRHd3VS2zpM9F9u2tFgfxuy4gfv7qSjjnD",
  "key19": "5QiYnM6GNMQVHN8VsN9AdAX65odXppvgdWU4UYoaxrcECp41WkAG6VbrL5x5b1bxCrxs7wEMUXHD3coPQvAjYBaR",
  "key20": "C4inTm7z9L7SCi21CcwWA8d6yWFNHxXTaVUtsMgMtafSatsKG8GLPCmRGK6VuX7sEpSYNXixbWUczyXnTr5NiEM",
  "key21": "3ZXQ4oVWFffrL94MyvoFs2xVWaaXVkRBHd472sKGt7XmHSUbMtDqREU5M1QTUw9smP99xY59SgJHwH933VAZttVC",
  "key22": "52po1LNFcsZgr9XEzQYDtrjQ9FQfpbpxzHfYS9BCUVAqjJz493Qi7JJLVMi1pUYAjYQ4N1AkZ5Zsa478PhcxW4A",
  "key23": "4tgH5SrkhuPw5Yr8rMU5HthkyarJiYUTy3xqPMDRojCBz9bGz5QnE3xeAog64wm3BsBVxN5RPSmyy5Y4pQPFWVCi",
  "key24": "4sbD2Qvp2Etqz5hsrsxAf78nKeV74FAHrDFRT5LnszppBHBXdtbkv59uG92jMkqxoT9UNxM13YcgHF4vVbdsTURt",
  "key25": "2N5Dag7fYjpDf3tS7FK3JR1fmuaYV81SvczSfo5hcp4tqs2qtPMxUH65AkCGBGABu4NGPJKoRARM4mxyGy5ep6iP",
  "key26": "cSmZpfkMem43MDwcwf3bZLcieWLYgGbeQ7bpAY3UUP87yc4CH3W7jDavrLH5LWP6PvT2Q16DyDgjGxmRj8A1M65",
  "key27": "5d3NbvsBbygqeJzJwnJqKVjDPinz17iypbPmWaKZK4hE8k7XSrZzhskZ7ufRHZvCWzMLvcobWFAqknYCxMhS8isY",
  "key28": "64wqn3vae8akyPsXVbwsiESshP6aUQs5ngofkY1g6EzXS76disUtz3GSjBUN5gaNvoqwEXpmCcq9U92NxMRPUJxS",
  "key29": "5VANFosgF8vEuPresWTdtxGLuwtqDavRcsiDwcv2HxeWm1hgu3rPVy51HN9MW8tx5mWEU8n8V6x7vcPPVhj1LJ6K",
  "key30": "61D1NpJf5S1s9AJbPQntbufRyLmk92JLkq5wizivDGhm6xaZYGvkSS4ZrT6dfDXBx21Dv4KesyVT4SPVZqLDNbU9",
  "key31": "6ybWx3oiwpKHTMHVcU4244wCo7uoaEcjeRHHobEGGafhPXNWHXBQM3w4Mz21XskiYhmN3r2vzEki5x2NqaJ79Gf",
  "key32": "CmdKVrTtywKTtJSicNgQXqAF2ptB8r9RKr7DMC8wS1K1L9G6ySirSWpqpsjS1biJ15FaXAj43oCZNwYDYud2Jhq",
  "key33": "2BiVn1DnqChd3cGdvAvQfXzt1vANaw3nXpLqq87o17Tu5oZD3SSHRhJH5i4yFigFC8nBzrVsVuRSFPKPbU7DBvy",
  "key34": "5cszoxyWnBQYC8Mg66o3sxhfDL6NPAppQKLbDCZtfAZXThE4LivUgwK5hym8shwoFUo2qoYWEstTUJaeQ8xognua",
  "key35": "459mR91ERyYYrMRaWe4MBhjY32fnptnWNRf4Z1pgqrD7SscvDY2wdMt3G2emHB6SnZrkgePCTrjq9ewhyAfFZ2Ws",
  "key36": "e4YmtAgwxMJ4osucahPSyBRjc1ijfuq6p4J3ffrSWhGwzQmz6nnXm3pPPMFL8eWgJJQyPGLZKL7Z74yg3GSE7c1",
  "key37": "3Hp51jePh24CPCDtWcerRC7ybdJhqFrKEEhtCPswicUhEU7Wa9ArsDvsZMQiCMS3bR8WU1RkUeg5Gw9mn7y543X4",
  "key38": "5mT2Ar8gicKUUbfbRBxP7jRr9x5v1LLaumoEcDwCC7pyvcWG4diARBRPLfFGRzVVmDCwCig9XD8tgpRpH57PdM5X",
  "key39": "28Y1Emed7Zda39zUBXnMmNqeGgPRuhzMv4oKxWxVKVLrCRsMogh3EFXnNgeLcRzxJqeJCZptSugSxrDsrASjSRZA",
  "key40": "2j8YHgzycTtYhDxtkiKqTECQ4Yoo1H27CskBdHkvZifTBDRkdQypJbpAw9HFftNJYNBh3kkgb4zWHvdVMwfXts1S",
  "key41": "3RPnP3Eneb8WdjmWvYMrouqLBmeMbtBvhDwoJxkASUG8zxfyywajYaccocew2R9yqS4Beonf9X1qt1EFNfQzaP33",
  "key42": "4ShYSDyoUA7BtvmmNDAf6VXKgD7Gh289is1LHj4pDfcspBq1SbQoV2VEjqSN7jrCrXfuu53X6zrXG9NsiacTPf41"
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
