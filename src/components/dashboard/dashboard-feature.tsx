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
    "5WedGoa1HHLPK4MGSWfoc3wKtrAFwTtBLupA8QqTEdfCVPFZa2TsjjtpXY1jwA44QZgUrQ6ANbhaHB4UhHBZgiDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sfBa9XTL7d4NXvH1zTLrZe8NaKcummnBqg2Wz5oLTrLFRVYxWoSMUhWwuXwA6pFYuVu3cM7fxHZK5ep6zHv63n6",
  "key1": "BFBbuBa7BNEBQGpXLfmoDwsuJ9jaPiUB49ZqBdtrkna2gNUWvWdmqoPB8vKmgFqhjZrSeefnFGaTHFZsUe38MnD",
  "key2": "3DjfYQDzFyf5D7Mpqm5ZmQp6wb8Rp8izV9TzGdquUGFgwCc1MdYKTZyL8UKi9CSEGmGTsXTqhVvH2gckxrGkDGQK",
  "key3": "5F57U8fA5yu4AeidpcNetH8jQ36WEtyAiEQVfAXLHhsaxFoXpjfaTwUvEVWV75mJ61Eh1wKxKATKUsdgiEW5XTSS",
  "key4": "49UJwqti6eGGASyXFr15Q4J4GLZ5YoJ6WRv8AHmwz544vdtjgPnm7QTA9xeieXrjxKaLhB621smqbg78oLyXt4zs",
  "key5": "2vX7mnN6kENNTXEnHwdtpRHZmD1gtwe9GDNRtRbtvNz77gmndYaAeaX6hsfqE6ATuh3XMRTsSU8JH5Wmyq8RQiDK",
  "key6": "9UwguKyk73aNejStiEK3d9hzTJiUc1DJbhAZhntN2CB3PcahScaEtsMRrsRXcTYqy5hRXYGnBmXu8tBSPtb71tL",
  "key7": "58fvuswQ5WJZr7DA6rgRS4abBzj2YEGHoLjanH28Qyhez8YR32gjL88z1ibaGogsznP3bvpnUKBqpAr8wkDLgEai",
  "key8": "2CCXik4khifcR9oe7KTXBwDpvzJCfNcmtPCyYt4YRV2kh5Yt23mFHaeFofLKuKivzVcknxtENXxi4vmiZP5JTJfd",
  "key9": "4yZenipanpeqrzh6m5exzgUxgx8q96vjWXDirn2kVnGgrerCgvVRau8bCDv5XvXWSH7qyuGvC7KRXk8qRXyF6Ceo",
  "key10": "4a7JA2y6X47W9zwUgjdTpmQtzvUXQR6QY7JfXn5YyQvzMVtkpeTFGrTnY3HrwAn2kc9gxziVP4ytCDGEgF6XUU4m",
  "key11": "foWnbKnVH2GRS74wwiGzAafe433uX3Bg8bGPjeJeyNzLeHDHqYMRRe6TCjsZMoAkCABEKLuwZiM2szqAF7dp6ae",
  "key12": "2gA5rTj49Tsw1bJtJXP3cB2ZkHAMahMzg6xSeLXJzrdt5XSrRAYgG4hKSZkWVBxqw6y5pwibXfFGUQcfLBKiwZZ7",
  "key13": "4TwFQukqRQZ6YhoAXzYCXEAypwSTqPSBTKos3zstUwddUheBbERGs8xeFwuEw5xAjs27CAg7gBM8AuG2qAF25FVx",
  "key14": "3GYUiNjjhfGSfnDiECU1ZvdENioPug35FdCaPF8HcZHnunP9eGtoDSo4c2WcG9QFcTG1mrsNMB4miFPpxVVqUCD8",
  "key15": "4VW3do4v2pjMro6XrfVdG5GTa2iUgYMUTDoD9AvfNatDDHZg1cuu9fuFRSFj57SHag2aYyvduq72Bj8NRrFEKLkB",
  "key16": "39RfrNLVzmCHvTftQaYEuEJrEhquNtYMDQe11vwP34dQFSGnuvjUnsjo66HpVrSNNsBCUncczMQySuqTJAwVBAUf",
  "key17": "5jqkWk2wkfRFjNKGqVsfQgvkLcJ5GycGrbYSdKzBVZZEJua8BQT1zhmnrzsqE3n4PkQ98jmgJWuCCombBG6WgEUL",
  "key18": "jrFaJUxgSWqYQHfzGtjLkRy5msrBhsuWDemv8QB8RRgxwvPBBjkTtCws7vuGUty5pwTJTnsyxNLSaSSKRE1xWau",
  "key19": "3mhdNne3gGsyV5RrYDqXvvNWrghLEuUgT5YSYb41eVbyJUjcuALgsRGuaN2RAbNhuH3vSqjncFicyVdSjRwKCERM",
  "key20": "4zDg1p7TkoNr7FVoGYn6qtBToZgU2HLFke1CsmaE5e3Cfb5GtfcT16iYDzEqW4pTpjQqXGneXE8X6mSAeg9FRUFB",
  "key21": "3Fus6CrW8DAMeXdMUz738R4FqURXwjzC2rCTUipoKFZ1sXU9yc3Kxq88qY4JfkUMRkE4EQCtdbn8ZnYwbpc83kFR",
  "key22": "478tk1KqfYu5UyyfHJmnBNAEmQRG9r7KGJzfSu5MxYCLgAwxxKhhxQnQAmALdz13XA5dgvLrnBYrwBGh4wbpK3H4",
  "key23": "AdcM6FcCQKsYhQ8SpWjsLvi4u95gczfnJoJNUXB1Pie7pFcGaKKog7ozTv7YXVzYEWV5SQ5Vike3PksQPEDGSdp",
  "key24": "4A3AN4LovgEbAHTAAcyt38vdfafyCJpFyUiB2uita8jpXTWge9g8Zt9GfzEiL6SJeCQeVKTQP42BenchUwurn8Bn",
  "key25": "P9PCKJgiR5TfGDTBSQC3WMhrYZKZ6rT4CWG7h5wQvJTyEkKhRJ84Ye4JJvsiTtXcU8gGKGbU1i24V7ggrRrSbQs",
  "key26": "4crUp6R7KBszGFr6wKdgrTYdCUUDzhPFvtQFcPuaqsGg14ezWjdYJHpQiy1Bp1YKmJzrKStpE3nzdfG36b9DdR9X",
  "key27": "4MFnGoaG1i2y5kkn7mGnWsmcM5XNoyPhtpTkpe72y7DsgyiYD3NaDXbUjVNVu4cTti78Pxo8gLJ3rdAeNnRD2AjH",
  "key28": "2JxpgBxWtUmZXdJEz4Eq3YdAVGjSaWMM6Zuh68VY77bqNbCG95UnNTqxZRg9gQZw42f1FgV89rnpWz8cY9b5bi7e",
  "key29": "3aFw3RDh61N7jBLQx5oYs3zQcfAmMxKqAsDzWSrwwpUxHMCU9L6rHiQfHAmq1nT8LB7UXgVSBYPT2sUyA6kiCGTV",
  "key30": "5Ey7fFpjbi8u7r7yTQCh9aS89ECfAahv5p2qHspjEd4uh4P5XX2HGFzhimoQSPbynafR6yVn55FPgsBLduEJgfCy",
  "key31": "4R2gKPGHPUDJYKk4ZidTjfhFUuPn6ZAoUdRTyEhT2RkJ3qaQnurr8s7dombPd693DQBT8Xby84JW6BD8WidrR5jC",
  "key32": "2NdXGxAymMeGvcb4pZYVdBKdKnEEE8DLrgtf5VL87d6eMEotEP5vDMYGMdVK5hfVkTwZUfPhGVU1wHimkCkFfcdK",
  "key33": "5rifxiWwrfueEisatTYGT16e2t3RopmEtfsD6UxVAshVXo2kLnMpa5TFhrmeUxJ2KyH5EH3KGGXdQ4fqbSJSHWfk",
  "key34": "4QT7TywZ24EiSXxkQwxKBGkn5uuDCwG75SSz4BPegRiiHBDUTsiZh2qHHaSv3Gc9j1gdyh6Gmjmk2wGzQqiTNRrv",
  "key35": "5EWeHEfdAbmyb1haNgBz4W1G9Y9WYqezNf88DPhovyXe9VCddyWjovKpvcN76Aa9oJceJ4PPxb5WrsdjuaiC3mWe",
  "key36": "2UELVrN2DHdJ1pfcf88nLUnMiKDwA7afCfDu7XBXo9hNXkxtubnYUjkbXeswLUGTPEYtEYkqopU6joAMRBsPcFia",
  "key37": "4yLqy5ChGivjTqH6kY4eKBxeo5SGGVc3qfNtRDzUwLzncnUVEM1FYYJWwhAraFwcdmek2CamDPj1aiVQK9rUjEUA",
  "key38": "5H3gEdokmKC4xHvPfPeeAg4CK5UozQnBTEdVrwf8rFEZzfDAa9VYjx3yW6Lga4aobRGWNjvBC1PgcbUVrf9N5xw8",
  "key39": "TBUB1UC4V55uP4iZpEpr6nZ9YtRZhqcvrTf33C8eTMBn257nDGHMtfNNehELZiu4Uh6jSWLmwjJKV1A7fxzwTGF",
  "key40": "66zg45iPfVMdoR8BCaKJzrrLK75YfWbzXqTu8HdBpKgxs7p5wZxGYsYXzhtkz87vV2Uz3ZrBkE7gd6ZtkhPuxEkK",
  "key41": "2fq9YA2LucH1vbJaSZRSNXDkaEPrcVM7GvzYt7bRH1sdZiDSJ4GNNXY84AYraMACbB5xQMBV46ipVGemuLbhi24r",
  "key42": "ywYWrZaVtfyeDUGPx9X5MR2LG7Ci5VshFTGHbFG5poyuY32nsvK7N6AWHJwifkVC8CAJW7yAf581XQEJjQfpJ4g",
  "key43": "5gBsEmF7RznVcBT1LAU6EUW5yXMT1HKjFq2B3gPCJmn72bbCGpUdHSAndjaZiBbKf4hbaL7w2LunfeuSpXGhhpmX",
  "key44": "47XAfRbDmkv4r7JUfP4kwaAsZ5EdBLuKVAF8Yt8hQFR9SV8pi8eAyoudcSGyDGKRYm8xuDgSBmzur8qqyagH4kWj",
  "key45": "2xn1XSRb2wTc4fBXY8qYtePsFUCPvvJv2NxhovaioyefjpgCKukVd4SQy4iqxKy9ykBXi88F4DWpPfgh8yD3DEAD",
  "key46": "38qsUHu2U8jDaVT3yrz58uTq4U4gm5t9PnKQTQUhywW9U4Ai1cwh9C2V2AFPFVgPeHRYkbWMgGHcuKmcBuGCUYag",
  "key47": "3uY4zafDmtqwbueGg5FFS2ib46qdDcm3xET6JasCzy5kGyWnduFHdmJbu2v1x8V7fipW7GNvX8vHt9xD7dWYp2BD",
  "key48": "4isdEKDbD3BwQExChCgfz28nD6Cug1F3HLq1v5Ct9fFX6wkxwYgNsVh2B843attwvbTV5oZNAJwdfE565Xg3sAFC",
  "key49": "zTprp4BH2qa7FHF5XQGx4XYgBreHFLcV8S99XCzjQAxRLsVSYKC6ym5FNaWSbNoEoDiTQG9WAddHq7iQtJQnqjx"
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
