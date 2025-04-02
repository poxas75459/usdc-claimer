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
    "3dWcjaz7UD6b8uvgLDFo4dwBmTLyox9bh9Ayk56Rk2NkUVXogEb7fYiGcYzraEaREbpm2Vnth7kHxoRWrMML9rW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cbTPauzmd1fbdAV7yA2C3cFN4MMsoha6NZ5iMdyPiYhAenYbYUJ55RyUcSMfDuY3SwEbSvEL3fUV8LNUgadGcWM",
  "key1": "spr2C5mjs6GTjxHrXRkvEhda1BLEfNsy7wrNQpSiRPuUf6qWRJkGqE37ztxXv9FVUcPQugxS9ghSWJmjXZDnSa4",
  "key2": "2BH8iYTzMkWBcXEYtLA5rAryPifjUwjyYvRnvmUQEmmBiWa5zeaVoNwBxGnqwnt1p5wTjarKWBXrdr4qNXq8Zvk8",
  "key3": "nKhFCDGhK3VW7d9uRwQKsP6Vc8gUNh66WWmhTrzBocnwLkycaW2qKuoRR6NmQcBPxtrY1117bqJtsLKL6HHGo9b",
  "key4": "4STumy5nRSS4HR3XWccPeQ9KqXuF78BVowx8vFdhrXYRXsR2WrpPHongsQ8tNxNYLwxwdPpjDyC5DBrtYrfeVfaZ",
  "key5": "nrAVhHhkbhVMBqEQPZpHmRuNUKMN1zFNFRDNMp86czJRvabr8hnBDFV1vwo982eCM58AmnWLNDBwpGqUqJ1vpua",
  "key6": "4NZ3aHPJEn5gv7QqLjnEr1V9QoT9Uf3biPvGJF139WDriHgdx7CB5LWGdHA72ScaLPBiQNox8z7V4WGEovKa2GuP",
  "key7": "52fuNBJu3TyCtVgfn7Y1yEV1eQ9kMCdrWmKqC2jqQYGcrng2fFcS6JAfPJgsEKFTJCP5c3vinttgEpvgAJQCGqNS",
  "key8": "4TH9GBehCR5CtDdXYd3mBoXS12p4G7TkvAMgLcJRqePDbgrPbWP4vpQ7gsRwHt1BrK3WSYan3bk9hir19MojyEdb",
  "key9": "4pM6ZgxGftFvHvLK3M9XsuWPy3rqNHiXcACHyBtPPJMWke62D6s9WEPTHqQmfKpEwrTy9DzheomLViMU6NRH2eFX",
  "key10": "2Ka7vatMfcccUhYcgnVA4UyWqKzSYD1BrMeZaQg7o4qH3juJKAWCcGL4PhzQX72smyDRpMTb4Qda9He6vDyTeGtH",
  "key11": "Vi2dtc2sL3GTdabaEcnPBQ3AFvBoyFJPgbhKXL65N5E5uoxf5v5i5Gv2xJUkvyYecL58aAGius268MY9vsMdrBo",
  "key12": "3K3ZtAjMsad7pLo6wXJA5ahPYXFLp1LMeFqjUbRV38CjtxzcX8RCrY8TuYEZvdDtS8qeKbBeS96wNq7xRrpeqcKG",
  "key13": "2AksyUSBbq2Vw3VGyrokeTs1SWCxNnVvZN1VES1zn4GRk6kCH64PaJcTmy3k5crGQTpvFcbQjBC8aTSm1GKD7u34",
  "key14": "1Bt3kXVrAcXFAgfF1yjdPFrzMR7HeFF8JazKXmyBLzdSnLrmZUZkiPaw6q6GiBVnHMQmw6T5oQ8KZkbnsuXdZqC",
  "key15": "4ayqHomFQV8T7e6pgt9CdS9XPbkMGGjhhvATuJPrde1nDKG2XksFTn6Eyx9ErZuNDyMUb9Pkw2i1v8fdAgzJ3Ptm",
  "key16": "5feuJQkrDT9mDP4vjTgLLqEsWEb7SPzSLD46coAER4R4mmfrbpwVi7oL4ZyBuQbxyQqn5QFVXzAbC9aGpdqVrFZ5",
  "key17": "3y96UPCNZ44qoeyEd4bBBSjPgBDjaA4XXG3bvF8AMAragNPYc8ZzwUZQCjA5dVvs1y3W8NLZmwQC7wpG7UtT5As",
  "key18": "4xEYta2x6fqK1GKHvec159j7KoVATRAAdmcMH15A4eq8pYR3ijvx6Hkin1K8uzhf9mqrTf3y352ndAstRFTbTu2g",
  "key19": "SNdCyBb33PVBgRyZHzqF6kdqgeZKLv5hhSTUFpTWPs9ryfzzccMegXHdgBCwCBrK6vintdxVh33FH6oyxV4DKjc",
  "key20": "4r8AhLeWo53Bk3cnaFHQyHaoLkg16fJaUiS4UuqrtyL364ETniatDVjk8z7YzBYn6uLksuqPzJZtzZUE1BSV6fPF",
  "key21": "3fnkELabzPg77ueeQRkUmnsr9aWpRYmrvLnWTyWc19dEyzhA64qGReyg6j4hnwRwjSELpf38Dsf83SB61ncmgQzc",
  "key22": "3DLJSsz7CDpwD7CWTHHzmwcZ4z3a7rnQ66RQpYiCFvzqiTrRCxFLh4MXhzyMGrjZ3vXmUXGfowT1ZHmVX4xdmo2G",
  "key23": "32f7bbLZfsq7JiZ5j6BpkMnSYud8v41pu7VV5JoJphpaszhHeWdxzX2xEVuruoxXVEaa5wE2WNawfLWJnxKyDFT7",
  "key24": "3PLoqLbARvz74L6dghdTByWDPEBg8r35e1B7ZVcL5Kuvor7YMn4TDbXFiWgFz5BXuwrkpvwNH9QiJxW7Z83S6A9t",
  "key25": "2vNDRr74ciw31aJZZEBNGoP2srzcHQddoGByZ4yk2FbUW9nNPvMLuP7w4QTuUJ3ianJpi5bqf9b44jNXu4x7BbfA",
  "key26": "5oDkmEYoYvnZXozF3X3Pv8oFNzfYuemLTCiFicE295oTHxf22QFZcoZznNAzQfS9F9ejS9Fbs2XbK8rPiz2PKXEm",
  "key27": "5UHmXJc6J9DiBM1uEtXjEkdyvUQmHBLqBZGU7W9dKYcQNAMJmf83Dfx43NwxTshDjZAivsU7X19nYxKTGnTCK2HY",
  "key28": "26QRJfqMQ8e4GubrCn6QrRjKutFnKsCvPuU9eVY6Zg66HeRhaFS7v7s6ip8j4ksm5Svk7UbFY7EQf6f2E3awyrsq"
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
