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
    "5gRpBVS364bawxkE97iLZj1yxFuzH2arLbGC63Qg9hLs5nimokv1i1UrGNiCwFh84GYnz3hGMcZQ4p6V9fcJsL5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LT3To5oBNYs1AFWtHmb91DBzTMKKvBxqrQYX5jrpJHHtmhGcnnAFjxo1hqJLBTBBNzU7C18USwQNUmoCoci3LHZ",
  "key1": "5FV54Vnx5SucN9FgWEFZgFvNL4jpZgfawCdSUHpMbkZNJB7aQyL3Fn6ca7JQFuqL9sSEW217dp9cB4cTfLNbP6g9",
  "key2": "47J1vgPDj1zgf42N8eKYReEnpms5mHpjcvGjFshTCZ9yUTcy4XPSo7RhSY6tZ7VFr5q2j4Wqqp3LPmmV2k6FUYJR",
  "key3": "3wPvijCLKxg3WqEw7rZS8dVqjKAhqRXBAdFCn3WE6ApgxLEzLRBabdvVkdEVaBCuo68t2BCy4JscfpjgXEDkCftm",
  "key4": "2WLuYjxoyQpDXDq3jdbKZMrGToqKYeVpZtkCVmzVZQ7oMdBeN3jS2Q3b7kDZ2xPDoMTN1jHsb3RHbrNpevFBVGNc",
  "key5": "QuSjyc9XTV3hpfZAUYDGJ45jVHgPdoZ94Z83BemsxNpkuLFWhCVVKzasmAu4cKzGpzn3V8r4KTJXnYgbLtLFbuC",
  "key6": "T88XKLBeSXeT7sohY329CtqM9UsKySkEXNNT3XK8xxP1AU8HuGjh1AT9e1GYmmxg4Kmcpjpm63dUYv88xxpc7X1",
  "key7": "3UEimKQhYDkpdaBA8HSNTCXMNdbFohdfUrXUjHSamU9QmGMzmpiGmT1CbCQ6f5R23ocdyhf2jbsD93Kox29ngF1H",
  "key8": "5uHR29vPrPHDuHhqzMnXK1uM18PQLwMHiFJVcAMqX5G3rnPisHjBN7r3rm8Gcj2Nr4UrrmTRcqrM7yyGJAL93hMj",
  "key9": "64G5QsCca2CKC3zxUb4oBGLBbYi878Z4r9tQNqqkkY1uXitjX6piYzeJwGaUgWQiVwB3akzJMZS6oe19QmFdYwqJ",
  "key10": "2usMRo1iag2zG5a4Aks9CqzmnaXB75Qw2DYq52CR74PBEryZurKC8sEhMZbfLLUreuaBZzjskiWVV7pfUMY5uA4M",
  "key11": "MyEm5gGPDoYX3RtpyspM8AKgLSJFSigLcZFcr7qyTN2g1EEGtFU7ayKuw3MGpNKXUxMqwnTK775aeFkbvf4aNfU",
  "key12": "5pnXyzgntWPeV1xxhPtRKkb2dJaSaz3rwgJLTXN1vYsJ5mNN55geGaE32fGMGR7nzoK5f7Ff76KaijYJnTnGDaCZ",
  "key13": "4suaJBQboZNinJ2MR5446qbouv4UwCiD457fB9QSqzPmQdp76tQDZoMSTjTfw7reit5ypNzFv6TVUcH6ixeCxYN9",
  "key14": "623ucrK191XHDr3ij4UZyr3eszafoxq8zo3GratFU3xYEqSw6KMWVuDtAz14tCbhspXZF9THesabDdagrnmQoKho",
  "key15": "5VtJogwSBfPMGQ8Aau68yDsYxuesNDjC2VjT22ZLoVLcpXn3vagtpBDDuN4CXEsvnvnh4sELZFGr4U68MUBwcQeb",
  "key16": "21N74KkvP2NRmAujxNBwpRPdLuEfc9HysMoWqjT1jXGKmtuYVyhQ9EUQwCpx8GxUD37fw4N5ADzcJE7tf5rwwHeA",
  "key17": "3dZuae6oRQh7dpNgZ7QqTcFxLDVr1E5vxSSDQNPTdxDguT8UyQhjzWaVYyPy1E1Cm2WAnwJMckA5RXmQ9KrGrLtc",
  "key18": "5cNMzSzD2z45QrRfW6HNocuKd64qRo4UqbYDSc2fqAyWShKh6mrPhUsyLV6PKwi3vxWCxbfxTQq1SPSe1Sh7RS1p",
  "key19": "1fzsBixcH6Z55X9TjiGqhrnmJGokV3XdRLrqdZ6MEVdzvZM3FcbWXnnhUUXVB4eVtEUWMcWyubmcZpNixSAWi2i",
  "key20": "55Nt5E68SHqKed4uX623R6rXJvEqrXNP6BozXgQMcZECWvW2YwteiJt6HL48vmDYc33GwsJGC3th7rRqiZ8CXKtr",
  "key21": "3hV2yyATknTr9E51JHgN2Pvxei1EPWPY2nVDXvJZoS2BvK3VRJAnr92kgod3EiFMoAuexxJDKEPsNtLYxVFynmkx",
  "key22": "2t3Ac5ZVAhT13yRHxLdwu5VFVSeGX4NABgGRR4b2wF9MQLfBPyqV9nJFmfLZ1rtQMmquUqmr66QyAjsbX6gA5D8E",
  "key23": "CfeTLHnqYJq9DAMRQnAAkQjtgXGR6qJFnt8WHyouJ826HivJGUDa6tZMfUpQMEyYnTvRc8yQH1t2D5jqcHKoTSb",
  "key24": "4rkrjwdSz1eZYBMuC8r34JdASStZjVQvmLyz25ur9YHVXnDAmbMu2ULW3NogufNW12W12W2SJ8U3mbA9VgEmorte"
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
