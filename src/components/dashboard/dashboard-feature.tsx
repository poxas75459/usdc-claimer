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
    "gUjoVg6tgHFTR7rFMXU1wrUhLvksHRJSTokZgQvzQ2Hr1yugp4qpcW9nbepZrwVCLrgPSwtfAtXzaD84RxHvcEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PfvZc3DmvB33HmNYs3BapD1ATyXRSiypkNostJB3K7fN9UorrMrpGcQYpKBYFE3GzGWbu9DAHoJA71NeULw6k9P",
  "key1": "21Swu2Hu7a33RhmXefb6GtBs3q87SNkQuNGM6dEbEHo2hEJeokgCLGnDBmS6nt2qH3bxj4U1HkDKm7DzM1uF5WD4",
  "key2": "3vd5TakFWs5hyFowtMUotNkf6Vf35YWybcGp1busRw7LBetHgR8SZSREJb9GhrJaXoERf8fqeEnT9RjajHMSJFMg",
  "key3": "4xjhLHkxhJB8RfS7kCFvh7ygGrtJC1r5WktqwqWS6zxmxBw63pb4aGw5YigaZVd4irffjhbVY4qXM8EfSNXbkUAA",
  "key4": "2neCu4cTmNBCC9j5YeBQK1uYA5FcdHj5UkBom5rvSaG9mwLeohqRwRAxGuDjQ4CvdxTrzzP5gqPVFDHgzrML6Bef",
  "key5": "3TuUtL7hvWYDrBwtjKgGXgr5RXYaSdWTx7yp4m2HeZKMMwCgsYqbFRrtS1juRkf4x75jr8XVQB4aucLE42o1Z7JZ",
  "key6": "3bMFFJ5mVcp5VTPX7swmCz2YbBjTJ96yby17QjWsa7HDmHikT8yGph47V5VHKULpNiv6VMtR4H4EbiLXNN2qcFbb",
  "key7": "5MD43dBuaJ3J9eYkeBP1VW6QyWAhWVAEXz6sYSfzUXhHttbxYei3G9E7vFHaQwU2v7qrYP6KAvn5o8Rc96KB7rnJ",
  "key8": "5RWSF4RfgFMKj7F9koKKxXTedv5srDoHKXHbfXjDcde5DdtHCnVk5o4XExt8Njs87g8EVW3hJcsav3FBbrTvyAiG",
  "key9": "5NykQSQkBXcnRBK8sfwvDP33dGynzBS7SPW8eXZ5swdhKCubQ5UwcYw2dHNfhWcWY3QXC6EVvCRJ92B7zfYCPBnQ",
  "key10": "5htspR3HLzrKN66hSMSUFQ5haaQoD2u5gLpDp4cfEbXWwJKCBHT37sNEhx8LKsvmiu1avgdyeozvjeRvkDAYXiFQ",
  "key11": "Rwf1nR8ee6sKu8mrm3QdbXTZ5UmWEpSMmm7NaU5H2XMDAbZR5Bja91pHPJf48fEdwdQP7kDauftXZXJgNodMPZH",
  "key12": "dhjphJJ6fJv6C37LgSrFfLmuJqkCqCYyiT3vvMCr5ex9AyFbnEvokJxBzTUPpbsmvdYaiCHtcWzZd6qPUZrQbog",
  "key13": "41MN2m9jcTJAdGJJGhfY2ephPuFR8AnMf56fvSk2h7gDFgp9ywDvu5STxHdU4q7PLRY2oiDCiZg7x4Cx5TcSUN5S",
  "key14": "htcasz5ado3MhtG3kcUg9uhyd164y1fDT7YTFZe5id9DxHhXdjuQFFZaKhZxp3vKhUAhvnj8D2PmJpqYubTVvHM",
  "key15": "4kWVrmHnw62kVXRwLWS3QijbELuZz1gHyxapXh28nMmBCZzV1HQ7ztXEQWX4krXhMQYt7brLsWYyPADZrdp1DHF5",
  "key16": "2YKU3nimwdT3yh3jUGMzSmc6uLG2nToyA3SUMQnDy3W4YMNHyRq5Zi4Zrv3mfM7W4rosvaqFv3UX9fLeUJoQuSpm",
  "key17": "wBJ8Lqt4cBkvfKQ2tC5j4pVeWRjrTRpBizCAdCjxjh16vvwyDDVHMVfH1j9J8LHZTWBWXS4JXar3HCGas7WK94s",
  "key18": "ffS8AiUayZGx729B1c3A8by2QdNybqycH8yLF9nA1LqJ5PekhKpQhF7S1DEXi2Ex6d2P9Xyq8nYwqcbxP4xYpqt",
  "key19": "5hXDBuwEfCpBAMMowwQVU53c19BHkTHoVNUi61jci2F5JVveoSgU1omygCbWaSUZRgN3RNu5QAWyrYAeHDxeUXeH",
  "key20": "3cck9Pt1NMMBmwQK6ag5fNauzo8qqTozF9CBmabYwJ49Ja5MsMufHuao1BKgLwU8W7Kt5jQvs9QcZmMqBFciEFay",
  "key21": "5P7oJouiPUKsceSq5WrSv9BXyUvfz9DYjKcmQzgYqRHToKKbXnEXUzMN2v6zxXuzLqcQ8j773NAiBsTE7ktFa4aM",
  "key22": "5yA3sfq6YDBDXLt3B2DmK1hKANontwrwewid4ov8DmMFT3TNS4SgHGQiKiVbPHcvGdLYSFXv7Bfn7ibcGqL5ZHEu",
  "key23": "4cakPUQbba9oBZWtoy8vZq2Vgk9yxMPYxXDHz5VDUzr5cZG7zP7Sp1g691bhX7MXLeianUVQCEhu254j64AML4F9",
  "key24": "5fyyioBKpoD8EFRsGAFA6Sut1V6kiCURpYiWqqCeeKhec89b6oRokb7URxHm9bWhsTx7zRQ8q5Jx3N2zuRceBEvE",
  "key25": "GWJ4kPoEUhAZGiwUP4wWZTKRCY8Kw7wcmQei6QtoihzL5s1EXqpSajeqfY8SfXBG98PKYBaPya2TxreXjh9gPCr",
  "key26": "5xbUBEt8QQkcRhCk8UfqB71M8FrjGf2Scr9fsG5Mf9uaCHoni2ZDc2BzZfsFvWmnbNLxFm7VuqMnTAaSCymYUyiW",
  "key27": "3kn9F8cAp7rMarkv79PtY7gkrv5s55sEnG65RB1S9oXKaGu4BYEuJ9uwf9Q2SfLXMfNLhxjyrFQfFndrkDxmGL1X",
  "key28": "3jhrSLmWbdFLf9ud5RuzBJ6wY2gNwMJj6gTRjtZo5qMNGGJUWH4L7X7Rr9EXq9ZEjbuRhHQtu6U8tih5X1FW35pb",
  "key29": "49fpQNKejhuXs3z7BMX7vdA9Nd64tEgJWU1Ez1vFP3QQ1kbfrEDaziwzGBW6XwDuccfZmi9wRAnCERpKHLhcNjy2",
  "key30": "hhRKzuiZMn1YEf4AthNiW36fJFgX9Zf5pGoEjJpoGmhgCsbyZ5i8xQsBBvAA6KakevEyLdtgt5tLZHBuzAm7GJP",
  "key31": "4XNF4iEKPxCuqLLU2zXUFpSa5NaqPQHsTNNYSWxE7xh7mULx1RC81da98HETaFowJVdQoQi7zYcZ5EXkt2mDswk2",
  "key32": "4cEqdNkAwDHC1m9iVYwYgHjN2ddmeyiDsaLKcMozBCgx7gfSv7KEjsNwC6Pr2qFukMKYnb4r1bu21Uwcx1aEEVjj",
  "key33": "4ykGapxP9JxqT1xcvKJ156hi8m6GtReZRjahpyhAvNuvvPTv9rf4gxs5CzESZ7HEdjWj8M5uN8H7j2ZxTwXW2pKb",
  "key34": "4ayqTkjMVzuXJj2QZDs1p92DmgCxnUusLQ2LZU3iJizCsXEfB8qjpiEqBHKEjU3ExA2ij3c9V1djqcx3zfrdz3ym",
  "key35": "2jUUJ65oERGeDfWcvJksBXZFDUouGgbj9XaEbFeSnizEUeqMXFCSL938c2rMHbZpsZwXmnCuF6AEY1aFuthmfRFq",
  "key36": "63bVWb3XFin6xjJEAuGkhtKBLHHLMwkzNL1RGE1XbFjoEqF9P25Hg8MpzAAMEQUSeHvFpGXtrXdVGUGTqdjg8gvf",
  "key37": "3oRoYbPjT1VcHVxmUYZfDtzCBq493A6peAdmCuQDcBKrjPJ4p5HSHt98ufybk2poTEuvp5neaLeB8eBJhfCvR7R5",
  "key38": "2aYEeQTh6shSB5tbgQfyeghZUxW8az1u3oDeS7kifbqbMHTUFXnQdBYNiXaSCv9QiPWLP1Ttp6zMNMjEZiYQDDRU",
  "key39": "2h3TRE5i1CHmUAUCTPbAxxwo57toGrTdNEBihiMDTudWuxEuSx4Xed6gBkirFMX2gjq7mDgsyePy143e1K7iKP9a",
  "key40": "5cSykNZpSAPQkwgULZQDZ569GpVbaMxWXGjdVSPmprNVa516JnZUSWuYDzNcX4fqoRag15mTaSbfjiwJftPpKTn4",
  "key41": "5M9hCBeCrjfmAx6eK5MdCS3oGGKfXLH3H4LGVkqZmC9bsWS5mbCwm7VYPad6oBAMAuiubiekWJxTuE4xY9YKfeS4"
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
