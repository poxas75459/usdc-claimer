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
    "S8hfZmofpEUBihghaXz138vQppgSFVmsig8GNkX5f2RHExV1e8LxJGViPE45CAmbQtmrKCunzBeb7ZcffrpCuw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SPvTgsPgvLd6gTZc8BSKtcKiX26cbFWp2hzGThP34SdtDvFKQB49YH6TgFkqMLkmvu6RVTsUWzRrqTHq4LQihVN",
  "key1": "2A5jEX1zw9rf2d45uNbHQgoadT9ySFVq5PrTjRBWzeYXtixxirSqbT1V3af6WhYLZyDo4rE4E42EDS1zsUgNexaV",
  "key2": "22Fp63uUGk564UuV89MUN2GXpfYh1WNJcaXAeUXxS4hNnt5nD9uGqGuqHzbhBEJ4nmjNrkThi2LYysFf4meZmPLY",
  "key3": "4EEaYdVyjABqNL3Ej2pNm5xoBQy7jeauuYQ6zqfgfpZhngYKvPqmzgt6W2YEVJovyuENo5qmRZKjq2HxCxGd5jn2",
  "key4": "2TjeWvocwV8MLFWgcUBF4Spq4jnfDC6rQEmDQybz1GjWR2oiXkRi6rwngH7BJRojkYPn2Erm9TYWdhuUXKgMtNr1",
  "key5": "3TQBVEU3zSVn86243XMxA8FLkZZd9VgXjZxxUkEfVyBsAGchE88auZJGkZamRcn5FAxgb8KvdbWWWkRp67voiFma",
  "key6": "HuD1GyJenM9jTyoc3Qr5P8jK2jKuMHrv2pdBko1oPCWmFwK297SjvTqCpLPDPYeijc5gHr6Ec8JQWMXgviEHCsE",
  "key7": "2RPzdAMRUcxDwiyenbWfzTPrCh6LTuKEucAQEjs9G89ti7Q4rMvZqYxb7yufcfHs1NiuKB5BzSNwAyMRVitVHJfw",
  "key8": "Moktbg2kBR9ddgEuiYKBAefAeFFKrbGkZDdoM1kU5ou1oUucr4UewCaBARzPqwsRcGjntJeBpBTeCmdnNEef7nV",
  "key9": "2zmyhcc77VnD195vibLSkiv5AD8vr9DBCHVeFe86iXyMUzJr7d6nMBygAAxarc9bP2yXXicmn7iK6jsbXEqYx17Q",
  "key10": "3sY8TK9GMzgaNDDSgs6wGq2pWgeoiH6R79cS9P1DLv1kyyaEKAgfM9awpekiSBZVCGUuaws1EBzrWTsFkNxMGRMC",
  "key11": "4n3c5dsHJ5WWXUJnQLkd2Se6CqD5M3XTMXu2o9UeyEdqkhWcGz2aibpyyrGy6V8PLNgYGXB3GZywLdJAVGNLqCCE",
  "key12": "7R3v6t6SLFs8NLdGAXP8CddcpvBB64NV1Xw9opX8PpawFxHyNBPHFpyAZ6F4jKnF6Y2xQGtKQ2pbEnwSeV6zQLZ",
  "key13": "47t9Nn7FqPqSuiq2Z5YXR3nvt9momBKDg9gZPzVjk23rYcwU61thdXGWxdSENMhaBBCucEhmLZkPEF35jirZmSDg",
  "key14": "5psT9dTsmPpvQL2zJu2TJDMNHyvavg7jKyzFivzqYCwTmoGPCxqWqjXxPfSiPDLt8LB3LBQZaFcwruP8LJppm6do",
  "key15": "3v31SuGVReJE8KaNyKj8A5E7AhoLuRQd1MjE9LezQpXZAhnwn4wqJkpgk72nkc14yMXU2ZMEWgVVTpZfsD1FVj97",
  "key16": "2XYtrsTzPJcCfidivNUZSWGQrVqketBqCkTHyvw7ggMy42Atvm9UgHoMW4RhnzXGaPScUZxPGjGFzPkVbEMRcsb4",
  "key17": "3ErM5bZ6vxdL4rWSaS5UtaBvdkmpZmQ19BcTLn3cAyrJw9WjjXML7VASJuvotqQLsQLqVEis78LyS9vz3mhP28Dq",
  "key18": "4hgSoejnBzF8BKjMM88fCpazzyViBJDZaJFD4dc9pFojmkv1cHrsaiof72MXGPc4tL6CUVWQNyjDRZ5BGyvnbXiX",
  "key19": "2R6jn6SwNHk5U84P3C8Z9Nrch34Z3afzosU7ZnCr3mPxpCKeu8qJ7LHZAfEziAjE7sH6A3ZzpyjrfG1sELdsgXUP",
  "key20": "2pZz3oTgrvVnyMYM5DN9SugwHkqsQj2mwZMLXjYLqDZzkSdi1hRoVuwPn7XR8BdbZdLsCrUuLVviT7xc2VSRPer5",
  "key21": "Nn2jR9mZLBDJq3fcQrbhmhgqUEVHyeXmaD8RtWE6LL5hEK4ok11wNdtSnLbDjm9Dk4RoR5NuvuWY2zJd9EqoskE",
  "key22": "LTCBNtGV8bmvBkbrxVFE51tzyswGLToukhckR4B1PnNrJmxnbByFUSJCCJknXrFg65d92VB4ZuEd5VdyVQSdjtt",
  "key23": "4jwZpXqBr8rmsHHFWgmMcLKf8dpDTEDCkXWXVfeJrHsXEGD3Tw6GipJrMUxX4tez7VSsmUDrYoRjPmKtWi9F4rCg",
  "key24": "3349P5m967JSNkrJHdNGJ7PGFnLGZ9bcXveV5XJnUFw1KEgv8k5Hg6PXTa5djpWmQu17S1iDjFy6AoqGcAgx4AW5",
  "key25": "yD7y45ZBxS6nGr4Rc81XyWhsnEK3o5BD3yXzdB5vydaSAnMpimPTrVB3LaFMF4KPiEyySoj5PyiPL1gGuDZ1jUR",
  "key26": "2CMGj3DfDkVz1KKqbDAkuQKXeBmqkXhkR7puNYdphxwJnEnWs23gx22sNjnWeCQZJwvRRpDhFupjuNDWDz8HaiAu",
  "key27": "62YPVsTWpWg8KC3ZeN29NZ1qVsCE9Q2oCf8Qzvui4WQ969eX8anP3hfZ43hxCpQFoYKkbeZW4BmQwxkAotuxYQVw",
  "key28": "2aCJCXbhXynQjXL4xper5FPKEvnRUJensPh8R6QoqRvMVMCXraj672pvnbeE9nrQBjmQwtkU5inGwRuLw6orppHe",
  "key29": "5STECqkJ7XULU9t2wwnrLv36XZFyVWYeNb33gTWR2AEbUoFinVTZ1GQ1F9ySVwEJGGdArtQbibP4Vh3SxVecYcoi",
  "key30": "5PAmJBSwJjJhYhbmJk2V177U9KeLXHnDXzjFEgz7K69GRVGzps2LzAgt5XacNdiqK7L3BnjgYwU2BA4k4oCrQCtL"
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
