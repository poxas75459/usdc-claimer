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
    "5YpzMvWRe7DYYWYVUQN8xjqYmVLNxaseod899FLjt2LqbPWD82chyBGzdZjojd7FjXUgkh5QPEBXrVigXg1humSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9FVLvodrcyGWuMc1Ew8HDFvzLGsM7aBcxpH6fYBGbiRbzj6yNMAVRCgSxtgr7vn3jEK51Zy33UNfJUEB9XhUk5N",
  "key1": "4haZyCFZoBMfnpFhy2rSRtsYsc3EtiYieyHpsLmfJWQKYhYDpB7c1RqAdAXXfQ2Z8AZkMYhjNPic3akorG3sysUq",
  "key2": "5x2gJkJxHTFE3N981EJ4SEd3fnHAoEUoeShwwb8Qdc8oxkP28vWd5QN15tyA6GMVhxBT4DXcDRwm1RfU8xFr7pfs",
  "key3": "3jKndkhFKYWLYniitFUq72uPYWuUJCGk7VV7MeTQnXer1YjEAHci6FbSc3kAZ2EGCAbKFxwEUcssSLGofVnkgCVH",
  "key4": "5dUFCWPQvwrYd388HrCycDYBMKqm2fTascDYnDHzQaCALr5p6GBJSCCwpCjJSZEDEF5TMfVnpK7SgPw9UPdWJmGF",
  "key5": "2pUP1eb9SVXj4cnoYCG4poW2U3GaUxGQMXGrwa2eQVgS4YQfc6A1WQ4zhgAc3Tp5b5vyAHaCY7xP6BvfkvWKonBz",
  "key6": "3yWrtJTcmVtCm6AYAjyPFdLta6stDKRwp3zjkZkEunVkGHG14W1iSHRQ2bby6DwzGtLQPfvqQ2hXLo1WnJAyjhWj",
  "key7": "iPSc75Upk8hD6eEEdG8ktg84BLEpuDFEVgkuX3AE2AEjjQKufmLMW56V9f7PNLsDNLr6s4rRdcLNE3PYGqGCBk1",
  "key8": "pZ1DMNTsQxiASRRkYWeygpTybATXNjA1p7QaGbvs1cnjAviMdo6xLbXTZKsXhbq3WL1qPbaUr7oEAq1WHwHnMnG",
  "key9": "5jBoowu5L5jViHj9nkcHwp2vmELLCErZ1m2DJTqKyNro6H8SJf7P3mKyjNcYGjZxmUuUDGxTkbskkYUvsKfVfx7Y",
  "key10": "3mnwRx7cyX5tGTXjpMXwRg5FUCp7gbWqaeMeyzRRGZ7YwozubApmCiqjZoTa7gi2d4AN34SJEAdpHDWUjwYaRZgZ",
  "key11": "241a2gbJryNMcqsP1XhKKorVYCYjbWFxUjPgP8E8Vci9iFdu3ZoqRn5e4AqWAqmsmhk75DEdUgnLF3Hyux7oGhHw",
  "key12": "328mxsqiyN5SbbuDi6GAvJkx3121SqkcAnY9gnBoRrm9FzpvWkMDKPxUibviFqzb2fbtkyY5DepaToR5Z2Q39hJQ",
  "key13": "3kWtNN6fYgWYXVK6y1dr7th3xhwuvS7Cf1UXRhP5fUr5CEbuesKBoSiKqws7HeoaXxF1Bh2GpQ3TbSiZfZtYjHsG",
  "key14": "4hi7Xv6gRnt31rK7UYZUPyKdsDa6WH5DJXCbNXg3BC2NMw6zwT6CzSYVsbkvBLtKuxcvKd4X2FTCDXqA8VFYjDYC",
  "key15": "3PDARBY5PitynF9J2Ly7n3hKBVS7TP61MKADofB9kiuvKinDoXxNDgi151u95RX2ZAknJpmtNEqanqJS3AiY2SSG",
  "key16": "4NQRSM6NYk14nkpfWduyK15ex3g3VnGfKJfNe1W5xDzdTCGsspn8AdTfpbPPiGLRap4Yyqqn2MNGMXhzLeKvuHTD",
  "key17": "32gG5trWeyksQxZ4tx3ZwbuFp9iGx7Awnwz4QoAdpvvdHiEEnBdy9VTgagx1UjRJSmU4J3fnDNf2X8iL2BELadSe",
  "key18": "2qjemcevJ3wzjFiY7ywPxXBAxdAqKJE7S9WesoPo9VcecMhkyRZVCGtc9ssT5AseNw3Xnp1n86WGnkmQgkZrTcE7",
  "key19": "28ew8wZcTABkkysMhmousaCRWBbjshCRqZ7R6T95G87sKu6LvyqrrkqTw5PW2a2jGFzsZfBrBp3pPcEitBnd8kK7",
  "key20": "51GtqkDSVd3sucCwXTX1JYvGDvnEpavNecxHVmxre2GG4SPnSxZmEK29w5Ww4g5gZXG16yMEQkRGRZKD9sH7c1Lm",
  "key21": "3zKHtqQu6udxHBYRAE3PaRSZYjTycm84DB9LX1DqRms8q1exbbSbCzTBdpFrQVnAYPvp5HmgEkqe7m2tiAhUWtSv",
  "key22": "3RB147ZgoVTCPwQkCTcWvxG41PgyHP8Pgm5f9dbkEjVeUHVnjEqvj24CtumQACnucLbzqiqBCzF2LPZPCn1XrhwL",
  "key23": "5HzX1Kd59Vxu3jNbvFDEd9tTZmDYixzYffTeCZ9QUctKFhZsL88aQvVoEYHMHEHsDmZee4LSCc73MmJbH7zRfQ5i",
  "key24": "mkD7Tau1waVmE7Vfocx2yWsjsD8wgREVrV8gQnR7WqFMBnUJXJ8NqG5naXVjHZu5FgZXQnSy5cyVMVJzoUU95rZ",
  "key25": "4vwyT1hgjzGHB98gh3SSDqbChQgzq4t7r4qKQfx1KWzpCLGjSk6D2ahMG5M6rbyrawbmgowRHkcPr2YHrfyK7zXR",
  "key26": "T8ZfvVHKs4zZ15udtcbUDoS6GtJKximRaRjXwufv4yBwLkHzr6HwVZBTJMxvP8sDKKm3UkW6HWNjxSGyUxCSbKW",
  "key27": "474do1PGPPLRsZCf4SWLmN91LJBfzK2iaAmqVArtNEjLo9LCuHN8zBVG9DCvTgGNZCrr9e5rSwwMsMtAD6wCRtJB",
  "key28": "34Y6auSZyLb77fqTPAGzQKepGDZn8U71SQ1FhN8hkbx9qZzWBn5ZpMnFL1iy4gq7szY25LfBKFrJAVCqeWsf8kbY",
  "key29": "3QzcRuQrWtNr8qpcvoxcVF2nxREz9zPAYu9ahvWdmMZV5EqeSAnXZ3WJCbLBYw7zczGMukSVNzFsWJPhnnXB5pPT",
  "key30": "3MpQsDid5hcm5yqsSncGdQZm3g8Jhg4gdJajwq3Phyn4GeGZTvbvLUm5S8Zy7JyizdLzqnmAxXfNEbpStTYAXyTC",
  "key31": "3Ue3RuFmLmNJbJWtyjSRVrHrssugF8CKMc1x588K5aYhDyJQizxQno1mx8Uk11VZVNk6kcErdQPj4oqxDb7tA2Rx",
  "key32": "4WZm1Gvk14gbEk46cgFTaXQS3SPp39UfmREKXrTdLcVQu9k9sPcsJPxjmc9GKeZVRJ6aP4HVhmeFXEKQeTkRJBQs",
  "key33": "319PjYMa1mG5h4PRh7m6JsGHZtN9b5YXmfsoPQSpeLNNB8xmb4B9racCqSTKoaEg6DrY3gKL5cyKKpu2yygzr3bT",
  "key34": "3nyvRXo95QSTBAG68DY61USv9yZuNxovLrYWvUzjEkaUrQihqe74PBrF8K2Kcry8t4XB2ENNkHgjnwNWJD5Thd3s",
  "key35": "4Hm5HbmycQmcTycafTe2bpdu5EYPJkNC53v7AJLZaefvmberevYMYLhtv5YHp3CzgDmkgYxtZANcrH5TRLXruBTY"
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
