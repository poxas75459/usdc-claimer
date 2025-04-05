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
    "2oECZNPNyHPhhxh4MBizBUrQj38rTBg42cgeqQAwi5ecg4mVFN8MEvz9EPmz889tsGPy3p3ND6CNetyAoKUAowzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nxCJKGfGWbz5deTbxX9BM33F3sVTyW3cjyDWduN3SyGv9FNLBiMwEaeHxfTqSWZffixvPQin7NSrXSWCvHoxwJC",
  "key1": "2b7FkuNwBJhCdANHzbGRRZMV836eUUfVewwmgByZfSftsEtWPmZ5Sat1VdhwKVLDZSQ7wL2jAfaSFav2Z1Z1cxVi",
  "key2": "6jHzMt5MAQD6G54wsd6oAKUbqGuz2WL82bb1NmfQ6NEbHC5abwj4tkkqLLLNcTcZiM5zJVpm2uGgfm3PUjZFN1Q",
  "key3": "389AVs6sVUcuSmRFEhErbzCaHRDTe96pxtttbzaaTTU9XiUbxZG29SLN9KaAYErmFZNCjoeSHpijPmmCsaPkS6aP",
  "key4": "3FbEux3TguqQw2V1KA54qLJx6GtpMWLQqHgc2eVYGaso2CaAKbqSR1yy1JwVc52UgAfR6i2Ca7EuRE6g2iVwAQWn",
  "key5": "2gfSRi9r6qVcEfpury35qyjifN797jFaEzW5FDPR1QHL7gDY22QUqvG8YYQF8Ezpqr89YV2pb8GaRfCssDQxiikB",
  "key6": "4Ssn8krYjURGehkQmKW9NGBRZwgDYgvtF1Pue9AWcPEgxXpAjjGg65stjdpZKrToNJafJuWTEZFq6wSaPn94ZptY",
  "key7": "3rr8Bv3XQxK7BsbQ5M7B71Tt3xxTaz15gnggtSU4ZLsMky7qhW3hZjJijkBxcHDFHZhTrcLSXb2gYcGXGoScoxne",
  "key8": "3D45cbC5cTFCFb82cZvRsc2mrBPQPV9rG7bNUbs1WCMCnjDKNRANFRXo2hEENqMvMeGfjdNVa9m18ajrXphUYT1D",
  "key9": "4NDk8Roc8XY8bnoatXLwquKb6D2MG5xvm6KuCG31D1b7Qa4y2wP3ivkrkaiDTuVjHCy8v7CH8WjTEYdVkZTAGUCf",
  "key10": "5ak4HptBVmPUGj9farr6VTT7KHquruHw8JUSDsivsWhaRBGUcB46qQhSKm6Tyk46kjjJnWkfQJ2P71wH9HgBCt5f",
  "key11": "26YrUYKpC2tXZ2dvg7Y7p9CeCecmgQZRJpXVpRXRvjxWwJLsRRHWYrj1G3qb7Eh4S8u1VBBSFW1ettLRE1U84bK7",
  "key12": "4j8pLQxcmaMdRe3k8vnEkEEcKabzRAcKdRVRsNRozmU3nnJdXQo1YFob3T5sdYp42ERjBuFuZCDdygnBRxPEpn1",
  "key13": "2PDH4FLWa6S83evsubYjfUjPipTGqf2qmpKYvMbMxuhUE5qu5oMj8xyikEmP17KVXAzBg5v73dqBxvfdBLycUwrM",
  "key14": "4rs8ANFH1P1mJAvDGd326PAjZFfaGaoKh6Hew5vQKWdTj4gnARBE3nyQiQ4TBErrxTiP6M6EoSCgTi2XPq6mA7th",
  "key15": "4Lz8Bp64BqMwy1W8DihiEtP4Qme13LEG18rw9xEA7dgdf5hX9Yv8aDrnuCsBJLumvaMPivzcTWUSZpgnWUm7aDvF",
  "key16": "3zeL7JmFx7MTFWpYXNEZN4XCqrixKRMZGGtAzkjEHXM8ZB2VyQinurXRe1GQDeD81X8bg9xJ9fQLxr6u4dSPVSEn",
  "key17": "66qpTPSLKUPBxxWU368RrxipJHdJg1uvR6FT718DZfwsEWU7hHLSCi2v8Av9gTBqcipyQcdtgeSbr7d78VB7wjMZ",
  "key18": "86yWHnVnYRtKY1KSM7FL3LQQh63x5tAFvaQeuMdPXWoK8k4VKvgdHYFoM242E73kbSvTRrkeZjPiw9V7h2CMTwT",
  "key19": "Fj3aRsYZFPfxQqto32yfnJVgTBzkjYwGkRZ8BMoeBbn6dZbwXZsacCAQj4NfDvtDrYdvhDcbtbW1dXohpja34Pf",
  "key20": "5igfpriAhkHYbmC7LHQFDuKGLjA5PCNyxeT7VbXeGB3LYYeS9wN52C4cgFHvXo2LtDq2pdtRLH88RVtyeyzri9e2",
  "key21": "45FM2TseQDFKoRpmQzXbzUxnMoHPrnEVGEqrTAMUeHzRGu9abJGaj35GVFnmXG4SZjjVSx9EMeHQDCrrBo4pwW34",
  "key22": "5osXAETM9ewSthJ4U2WjY86pqLxs21BK3XwxtARdBDc6SFfYnyLZU7zcBdgRnNcfbGRBuWGqwoM9jYBqsHszWbUM",
  "key23": "5ZG5WAj6ymqZioNqNuKg83WuugHqoHRCtEfz8U4uxsFuhk8GRPNskFQa8xxeivVz6bi3YAaX4dAJhMSH2xws4bNG",
  "key24": "pv3qwLwyz7YscBLR4a3rbqMWPbDHsKdMvuvbtLvXKHz1W6B8oTVNFneawCchR2qEjnNdAmuAW4tEzqtC5MiSMox",
  "key25": "63gFu1HP6GdNrxBJpPZfQJhuD6x3C5aerBPfBUqfQMLcvRZFBkbnug699Uq9h9p4sC4WYDkz4WyXn1U2Axuwgp7B",
  "key26": "4s1gYGSyQc1ePxaWAHqg7nvHG1CMy7ijtpzBbp5Y85K814zNULRTXaZhaXxfjL2Fwg3qoqZisA5JezsWBYFvet3f",
  "key27": "3F8HoTjxag2g9oD6deBU7qPHAm47Uhhs3ViiNPzXzjwVDhDJGTEQPWBcc6jVYFAjihfJdtcRBV5NFXvZnEkdL1CR"
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
