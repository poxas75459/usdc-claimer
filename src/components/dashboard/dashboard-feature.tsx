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
    "5b1tLjF3uZZgZdtvVXHx9SMS7Uv7PDuaABuDj1VFVaEFyjpD6yFNriGJsgV5RPhNm2gvKyXVYoggFSHhfDhTp2bK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RmV4Pdaiypsuh7n2CBS2ZKLso5zjd4chqee5sF9acGaqRBvzvPsXAVHs37Ct8ty27W7YkhBgrktPXxSjjgTZUtx",
  "key1": "2FyTa5egYAgieqLw99EbXkjfgMcvduFhCKEqNTGg6KsSCZV7hXyg75BsRee7azjdBMy4ZkYBpzzPMo2gHmxTx2M",
  "key2": "UhhXHUZvZuemcRaf2EajrjpAwyRo6G2MD6TiupRv61vfDgc6P3NMk18etCXxkhnkUwgGo4mwJ9MrACdNaTvfUUr",
  "key3": "4BomyTaTk91v4X5SoZywHBdJKr9p3m2T4NgoR93DWER2y7QkvPxoib4z9L4zhhSBZ6z7FfGY29asYJoZAxcnMePg",
  "key4": "3N1Sgm6b8AEnQnJtC6ECKtL7BX8mnnNV3mseCShUjuEiojMc6NrnMeyJJ9iU1Wkniku1vXLe28VMLrZSiKGe7vgx",
  "key5": "5Lm8X2oeuFCvR54AH8zvNVCQ3BSZ4i16hBX6hHvK6NauRbqB8ZnNMrszVznxkuVG1ZezpReE9whEgwTCC5H4HQUL",
  "key6": "2jzpvy6AmS8FSb61cvhLQ8cKsbzvHDFw3yLPV1hwxhhcvfPqJ22y5FNVst7iuHuL8mgWGeYUh5CrYC5FkqAm8mJC",
  "key7": "NwgzieURSmrma9JzGzC7yiuTP3YgHSJS8DBqFRnuk2NA4fLLVM1criyth89GVHM49PFnqDjtULdn4E1JLGirxpv",
  "key8": "4FSRXZHBUHTjtaAFBLzcHpvaNYXE3aHCQDLeAkMwFvoBFAiZfzfWLmE1YQevHtSBq8kzRSSQfFpUHgefBQFnejFA",
  "key9": "4pqcgQsjosovrNVptXPTZXwGoqEHnRjCmbNPU3oPKUbnZ6ZKb8tyHd7Ud3uDDB2NgWqXKXe9NwuHFPsXx1Y9smLr",
  "key10": "5pQkh8L4UGTh2L5BHVKHSKot6tXeqbGai3XmZRXAMbP8YFsExMgLrB4yV7if95UYKm1wnPv2zeWsU4si4LiDYWSR",
  "key11": "5nevGDUyUEb2DdduwNzoVXUaCriHnZ9ET1UQSLroLfTaT7FvwdPDHq6XGPHwp5xm2UgiWcyvghC46bhnq8EyNKcj",
  "key12": "3sVqMEMKxKiodpvtfaXd43hgDCUykk2A3AraU4esQP8Ev9t4Hv1Mnq6BpE7nWMjM2PLNgGoZ94P1EDATAXauct4u",
  "key13": "3L66CzhDeAtvfnmEJVjcsr3er8DmTxcywJryCwcbKcFPxkWWyFHiv4nyUhqhMtCgxa9DYK4RUBhne5yMWnvw2AKB",
  "key14": "yt1stm68B2JzJ85hh6Z5CPK98ifMZswpm6FbAvuAqeAR1HTspeGcdGzKsXEjf811BKKqkwdnKvus8hZSnruUWsk",
  "key15": "3MVz74TCvwucG87ASiXGkabNduAi23XfjD5exKFgVx4zSYCkuWTAmU6S5avq12SV3dAL8R7VgBSNKQCjKu8FwdUK",
  "key16": "22XjwdGaREQbA1ckjnreJufr2vm5NrhYWLZeVLKQMGfaNxTnMG5aCCtbQTG97eBJ7YajDny2oTkW7biXn74ES1Js",
  "key17": "21UXPaBVdbPp7Qm7ZQbXTPd6d1R9YqzzT5XTdRDj4Zkjj7K2DmBunsWeMA5a2F7EvbkZtHQZFHFJV4maAXJFsGie",
  "key18": "5YSgT7itagD67ZDoQhVD8gyqraQ4wtydMAXBXzj99pxhBUQEPFPm85JGYBW3Hy5PRVwHc9Jjqv5PstVUhA6Yaoqj",
  "key19": "5q1pMVh3gDhCKyczjaDw7UaCQ7VPHZ6nDT3V25JgHA6digysntaTq7Jhh2XQcbncUikMv33BAsFPWEfgguVcSbMx",
  "key20": "5tVyogTBEctTR6TVGc24mvtJV7yo6EHJ1LduMGWjS8DAjEFAGsErm4gZFLrRVzBMoBkNufoVh1rLEYRjXjw9eLdw",
  "key21": "3n8yt1m6C7eP8keXGSQHknRJWT5S6MWsoaRqCeeZw5KEgqYAbxH7TwC4vLjE65QQNQ6tr2PWP7akDgiVEryvutcg",
  "key22": "4XGcuc5TnH9zHSCwDDrp8GnmmeRu1ba3enQeTwddrfB9yEHV4enhFZSm1WcVcp3zn4VFiiQnAvdayksFVQs3aNjM",
  "key23": "4NzqxUoguYrjUPXUYkw3zCgLCQ6vHFJQEZRjcvWubzCZzzWPcbEhWmCahR1VTAyNg92vxTk8gkvRhm4aaphw9FQM",
  "key24": "gb1BGP9tcYHWbURLY4wzDjguNt8TXzbrrZ5hGYTt8SAcSZq8VM8bbqrFCJsLsmYVi5CuxFYY2QessZPt1gTV8RS",
  "key25": "pHNxfCzuL9oDzz93zo52v5Q24hNyaHaYrSyo7LGdyeYG6MLBTqC4byRL5kNV7FgQkXmqxKMJGuDYTD6zRqubZrV",
  "key26": "MDwyXyFq61Fq3xqWSjffRekhiQv5fnrNc6hjUSTn2EB5mZ311jWTNnf5xagZzps8VHoXxCQrmu9bd7KtZXCtozd",
  "key27": "3aEah14Ngx3vhkD3YNiprDfxcwUk57CNBnS7cvnx5NhS2eMT1Q7BHYvfQ6qxRUHpNunH86gznY4SpznHaZkFQsPh",
  "key28": "54btCVexhzPCVNQSK3sBzUKWeVtKv9k6rkgmyimFjqfabtHo1uFQvWMZdsFpu7UjQvSen6FQ2hJPB9TnJ7WaAzYQ",
  "key29": "4GWKpeA8eDygw33RvdKEyFuWdD89rTzarDMa5uBPcfjwQFpEE5guL8a6ToTCYfzeWXyGy8JvTiaJMYcbMbRy9L3q",
  "key30": "4s2ANAmzUGh4mHWV4t5uA5JW3WUVt2YTZJu2o6ntT8MbMafwTRuzirBhQVPmYhPvMW348fT9CHozSZpupyqYfsjn",
  "key31": "59CAC45WokRUt55dboz8JFLdDNgJDx6yk3zjsgeH6kn7mXvEsJ3XDmTEmG8SW4cQQCbPv8QF9rhzajYnRW5djVVv",
  "key32": "342yb9kExFYjKh5qo5K4H21jKirWPRVT2g57MD5Q9LvYC7vgr8pBvknkCa9RHbSXGh9AiN6n6ANedxsNzbDcxhWP",
  "key33": "qVpAb5VParSYtCPTZ5wMzQrKajU1shgXiZAKLKQxFSbqH6aizBHkEi4Co3SPkA2u7A5jwxujTStbmgTYi9USuru",
  "key34": "jpMxXia24PXA6Ng4MtN3ZtpNPoZ3E8g3eL3k1LqjXEkPAmfqdYBKsY9DTQ9KbVEDzqvqzYtL6JQ7GsgWE5nssRo",
  "key35": "3vD6E3HWKAWm5iWRab9h5o96uM5zxRMoRFWnBHmafZxhxXANzUcznVLovgpWJ44b7SgzreGeUJhXza83xb5RAVMh",
  "key36": "4dniZDh8gkUzjtPzu8BaTD5V3tTdnE4tZf2Ht25omsfgo6WNPQ3AJnp2eDxjuTUFwv58Dqj6we3UnJpqgur1XoZu",
  "key37": "yTL32DxvdVzn7p9ttRpP5XVihKMB6JdFDDZCm74UhjUtwD22VybpGYFUDWbGS1awALgsBownVawVGrGLFbvzVPd",
  "key38": "51ozC4v3uRjpuxmqgxm6TX5iTGcyvdw9nZCvTAu2voF2qKUQ3KhMYgyQMuQEFLvLfqKypLkRrAeie5fVgHjdC861",
  "key39": "3RFtbBdmUByJSNNkb6ztAob9sziCCJ1zCyGkiURFAZB8A7hx6JRduvrnayc4ecWHhuTZpdDiKWmtNuRE67bfa6kw",
  "key40": "41GjQYyBco74eeEADMDxhJ8BBptuay3nNeMpsJKwmbR2CoLBHuDLCPfouDxPwibfAiGp9HMKsmvByfKoQ7dPP6FV",
  "key41": "4Q24JnM85rCUwH6KtRJ5n5R5PA97gLwUfuvUcyEeNZnkNEsKTdRVS9MDwLDGphrVL2KrAjxe51NKwFF7i4GR9YeJ",
  "key42": "27AKm2wjkB3NGP1n8kmApNQVU2HaSmYKEQrmjCaTZGHEa5YXN3GmgKp2wBjneNpgtQCKn1THwPm8o2W5W3M4XMEx",
  "key43": "2VtWhnRmB39tqszKG9PhDtMHVxZaYcWEBqSZt3gjAPhEY2E5i7odxM1sXRWfGPJHnmFpvU3g1h6dKjz1Zw8M5L4G",
  "key44": "4jgxhmg6onbLMswTHiKy2jYqygp9f1h8ZSr4wEdaJfKR4qf1A3TnJTRxEYcfdn7kJFobYFAWMmV7P7kUdL7ecHfN"
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
