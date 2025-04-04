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
    "iZyakPK888NzntSDwcPs1Ls1buzxDSfKxvLuEqCgdUdYLRybVRdSmZYqS8Q4LJjs82tFyRpCQroLRoCbwZAGrro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c4fmtDbiZpm6Z1ByXSGcBre2RBuQRQ1XEV4egVXCf9bdLGm3j5522CTVfGvGuzCUKaLX6dK5neuKwB56HgGWV7N",
  "key1": "4aqhjTGesdMRf73zaTzXLrGUb1MMuhnctSuAioHaSXzwmQ2EivYSV85EtDrShGw7zRXNoZog6aamwN1dX86Ps4vZ",
  "key2": "4j3gcXJjgQNvev1sw4U148ckKhoc64hrS9Y21t7Kco8n3HAToApeGBjMznkr343Gk9vyyuEtFb8UaBFAGviJ593c",
  "key3": "5MhGY78acjUYM3ewa5cCwVUQwTd2cJmH1gXw8qUeYc2RzXsbfCcVswTZ52ag9ERfQ8xq9wCQgEW9gJ4p7dCCGDSC",
  "key4": "2HZpq1c9eGM5ESn4NwgmKFRsKGV9FsxssJ8UmD1JEyDWBpaUaAiAY7oqh2DemkeXDSAv6oYGtFqp4K3mzYgUx8HV",
  "key5": "49npezVJqkM5xNw5NyQshouJoFqFPrHA2teubaQVEd6YP6zYMywmJsrJDCYkpQb41rkivf9CYP7ha36dtDF2Jpd1",
  "key6": "43PyLwn3a7WpQp4f86ibSBAq2sPNQvwnRM7dSZkVwQLkYEbxyNM693J23nujH89hgEJERjC9c6T9acAtRLZ2Fabz",
  "key7": "3zThXt4zVxXNnmAjXtqgbMQfecMC686DZj44ecWPUHFisfNPZcprMKu9prt5MJtNUbtPKRhUCCvzqXDrUB22Gu58",
  "key8": "4xdCBoNku53XrpMyEUoKynxG58DwEFrs6kent5AabLz2VFdjHiYhrsckP32JqWNrki3Pvt4f1F8qWk1nBuyHL8Aj",
  "key9": "3oPGNJQYoUJawKHRqD8U5wZypPKFtqX4pKqu5jLQQFppMa3RSVUaqjZXkMzmN6M4mqXv1X6i1h5DKYbgj6QSHzAE",
  "key10": "4QTKMGySji3vwJuFFvu99Tg4BsQVA1Z62QsrEmfgfbghzBkzMUzsWY47aoKFynSWw59hDAbXvAcLoxb28QayFJ2S",
  "key11": "2dn25KvnYGoMYVgWUZsAfMUZzr23wFGZADZni7DMFY3izCkMiCUkDRKyrezcLfbkhb8wE4zShuYcpqnZb8RMhkwn",
  "key12": "4UyQ9jUBJbaTTrmMEtEhuuHXYdQZe9azhu7GEuBwLVNbboCnrbBGvvJEarwwkNYt9T6gmDYZnniPTuREJxBxsqaD",
  "key13": "3JLvc3e5sWP778G7Uy7r31TPppLMpERnEb6sQHQJ9NLt9d2Kz61wfQ3am2Ju1G5bJFxq7TCSwsBAwEQenLergZsm",
  "key14": "2yqgyWrDWY9VXawDxBfCJD5W8sMEj4BqeM9jqZ29CZdt3cN7e7TypAWUhoqfbaBVt7bKxAzBzMXgy2hmBFxUgqoL",
  "key15": "z7kr1bWCwotFXcDswNv8GkuDkzDTomLLbxDABAwRxacJ78cdQFzx4igV5HNxRyUDMdXDZmfiZ2BpwtgAME8k1Pk",
  "key16": "2turVevPRuyvLDFywgi19AwEHvxNn24XFpmn6a5Ewx2qWMnzbFeDR4zfgQTCsGyPGYSZgWajqJzs8t9dagfUp2Nv",
  "key17": "3QP8y1kR5i95xo49sbeBigX541EoQvzKyoh1zrQUEedjSQ5B1MbGuEEY7iM5dn3FB4mPL3Sm2EDJGvmNbPiNLuAi",
  "key18": "2NxvYNQ6hNuuzaT2dvZFAewLttXNppgFtskfAi6pb9dGwCGg2RKyUyQRoq24hc6rZYAYrLznNHYr9xF56uL6oSoX",
  "key19": "3ueauyrK5dbdZVfJiYqCYbv1hVmZreywZbNVG6vVapU79JHFXVWZHonUJHZL71YvPQ2s4bsLwWoJJu9Datjo5h92",
  "key20": "3DckwncUXngkkXezAhDgigym7bM6k3NZ3jhfbCtFbLZwLMNrSt6G69ErVwtiWeFZ21N8dNU22F6gMKYV5KE15ZDm",
  "key21": "2JJoa7MamWS7L3KTL8NwK2W9n2mLdCk7zCp6S4CBGXQYQf37GbteVEW6Whg6xFqdGMzdcjBP75gj9TkRGcCnjPPD",
  "key22": "3odjzETjimT8KTrtewqNnCyLj5jbtgpgDqugvYe9gEWfAR7ZXYfMr3CT5uE1BiqKzWzzvXXSqMVuUzPU6DcA9ddk",
  "key23": "4xwMtC1PvcdPgDaNiF6xJW2YZmERUbDTcGJy7iVcEQ3CZLpSrh4iWTYfaiWMaxv2pmvorWjHKRadK9gBEQ9HHo9f",
  "key24": "2QnWXUzAcDPZXSqRmCbKTaY3NebxTFfLPX2PBAcrbC2Kn8oB62aMwrLTNYsMPy1TS2ayDsDnmvTrT9eT75qcux5M",
  "key25": "3N8YcPJwvwVWpzHWbkpM25NUTrjymk2kN5jdWqyX9nUThVn2CdCzBvaJJYtGan2KJzffEksJpCwLM8CB9V8Whbjz",
  "key26": "2EHcXHVRxwgJQdeWj7xM9g9EMWfVuMojYGw4uuHmTX1fqT8fRiEtx4XHPszVVgNYxMmpyHRrRpzsvp8aPT3FAmSk",
  "key27": "2XujnuRUPwnxyWFwSaC4hMUMeLBnaug3ADJgzy6xneu5MexBUvkwLF8LkgAWxyidhfRhDZFemRiTfMiMiwYEExc4",
  "key28": "5Vvk6ZHW3T5PPVdBS8C3fXmp67cVLvPRRJ7TVtjdU7dnDAovFmHAdbug5zAvM5LURvw8mV4fJMYDiJ1J78o6355A"
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
