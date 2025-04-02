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
    "4SShh7dQfrucMNnGiXKpUsy6KSp2BTGeggJQKZcCP2qTqdAa2dMktz1gnx2CeAQBDkAgMskvsE6oRXRCWf6p2YgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RXPuhzu3ULdH7Z1s34wYeQeKTSaP2N8XwWFpgBXyBHB7X9ZspuojjbdhZceEBRiGEHwzwsx3NJaxn3bZB4i4JhV",
  "key1": "2s85SP2APNH1hABqwMX5BEVae1jfEtfLHHm7eFp3sMiRoDpxUzwF2kfHrJ7veWyLVz7QuaYhNEkgAhGp7zFhPBR8",
  "key2": "234iBcqEmRysUxUZp5N9kv6bgKQGEqZrGtyoUUjFUGLKs4iH8oAoFkne8Gq6PPFoWPrHYw5L9N9xbbLXmJyb6ugr",
  "key3": "62tJ5nUZeWw1qVqYDwncFDiurEmR6G5BdGByfqXjuWJPhBU1RhxMArbg3gQfe9MHidisvsBWkyYAjo8SRiXhZ16q",
  "key4": "nNvTqhmy73metvfbMkqyyPkcYpVQ1Eyogah2qdjnbSRmW6etZfE3iuNkUUw5kVgS1BnzbPcUkEEyZWWEJHc79dK",
  "key5": "DGYFRyg3qfTzfdp9GGgy4HhknocSnySAd5FGKn2W1jfrErWP9j7PRUxVbT8Xoe2ZWCWPfudDZ6pZCVSUvVVtT1W",
  "key6": "5FyvoTQ3zYPgtH3qfTMzfQvbQtFDmNr5PMQZXrSQSvPzx2JjvY6hWR7dF3To6NZwcTJj8keqSe3KxcGJgNi87Wer",
  "key7": "oy9KK8vg7rGFA9AGmBrFX9Z8JRyeAkckyEkk7DAQfgLeAPA7TKfc9DVuhUo6qty8PnAWauWysg5zuqcXbT7iacg",
  "key8": "59iEeQrYsUcSYq8j7ZWb4BjJAC9HSZSmb26EkL23qYK2P1aM29MujohKLSpHwHvSAXPQMRUUVeJkqcUTBPVsqdKt",
  "key9": "5kYRmyMxhpDCmQY8qnfKjCDbh7VD71YcYTCkVVMR9qQRpV3sjswC3RsKC2oxwnopUCNMwdgSVsuccwgCG78Khigb",
  "key10": "zEzjsxT6dn2LT7CnhVkw7JpKJgR52dCoZTkF2aCehmq2YjyQGXwXqhfc1W22QeanXSoS7Q2oNnpTeR9YyEz4btp",
  "key11": "5cHwVkQS74i6DBjv2AgeHekoQx55BpCarj4WC5iEuJe3JsB3rfEATHVYN2g8g6t5oiZYdGHoytAJ6pcjzHHCKgZu",
  "key12": "sQveVnPAyJdbrGZ4TaY2XhbZ8JSw3QGWYBGbSoHEwYhgDoXFRdKsfNYd71aSP6yTVhkEeFkQHPoFC9khw1fbDYc",
  "key13": "5MA7P5FuUAcYzDWtk61kxm7isB33vaNWbCLjopDppUnbwCc48vL8JtxcPwSxQFMV8hRrjoHqxiBBiKwNpo8aLhNz",
  "key14": "3DApqBxqgpDqcuNj8kbYT7WRjKZJBjnjxuNU4ysbJE6UGBj3toT9qGjNnE3Q9sJQm8gbgyXAc5vMYijpdv5ABqnx",
  "key15": "38djJPg3tRC8KaqzcBcTpSuBZrAJwHzTAk8wohdN7davoEBEo6PvYgEy17qBFfHRKLiPhR5GovpYVdQzxkAQmXKJ",
  "key16": "2gi2FDFpoMbnWHAgQTmhFJdf5cdQqxUHp4z9PzX4o6vza6iQem4br5uQTmZLZPGbiPdwyiHvycozX98TgdBpmswM",
  "key17": "3xVFjEWCSB5hS8Wwqb67NhqkwwnjqjchjAQnmz6V9pMZf8g2urWnwHyeGBKYXKzjA8Sc9fNsy8HZinzKydr1Ag8Y",
  "key18": "23ou5bWC5ntt8MjSRKLvX1HvynGbuRhu9juXmxxaVuCzp2JnoNZLsiZWtaePWSmQcL4Jhk6nhc3naUnPPY11hEzk",
  "key19": "5tZFwzthqpo9rd5eCtkrBE7VFsJTXd162NMgiwD1pv3NhX5X9GWT14ZUuZuXpTUj2c5ve1Ktjw2Nx7AE3kf76HTd",
  "key20": "2QoN7KTV1KePKyjqbC2uzvXNrQuzN1zBNb4e9nnPMUX6RrmZnvio24vtP81nGDLGkEzBpbcexeqYDu7scRttxoGN",
  "key21": "5TukVxD1hYVePEUyrQ5SrHEhVDkMEoV8kBuHugkd2ctHejqhGCXM3hYxSghKHXfDTC7c8xXPdPbpRqze5NSGL5A4",
  "key22": "3HC7mYQKKz63cE2yipfSDaXJyGZ1t6t2pyt2vYjPk5ES2TPByjbrVFYkYJqupiN1MykfoFAN6L48duuTna37Y1zH",
  "key23": "3obHxbRuKBu1KNuuE9Y24Kim3BeJTMYTEds28uTSU8grHJrKRGt87kANK3asRgntGsbaUHgATnSVgU9Sa77Vht3C",
  "key24": "4cWpHNstKYfQ8aeVE2J8xVSacBLjgR5LFQKkUzy2p6qmqeR3f226toJUF6Tw5LJDbjZvgcGHXbvu9ykBDRMZzMuS",
  "key25": "3W3gBStSAv9k8ngFzroSEz1s2VYcgL6BRMvuvHSNmWGgRmVtz96E8JpmnRYt6coFY8eByMaafJRLFHRdaTmy1kWy",
  "key26": "5TREvxpVgduj3y8gb5mGaUTCyePNEuaAvyW6h4tBfndA35TjS6AcEAgcgjecQXSsT3EChQwSfup7jEimEkG4A9ww",
  "key27": "sE8L484fhpoSGdCfw5156tHxwRFAxE9u27a4wcYPdXNBC3NNuVV4b9NCDiAf6LWQ42Gb15rquDzw8qGM7jnwpng",
  "key28": "5qtcn6NYzsSP49wHTTm3q9Aktf6KSut4if7z6wmKfHxUZ3yKQcRuwLnDguibSDveHFxyUzvnXmvRGYyhXxskuf5o",
  "key29": "4CUW22MprPCNeczUNvVkQNZVR23L4LmKAYFYtXMBCaoVMEeFnPW1Rvrqyuxv1c5a4W5wHDYkbi4AtdcWHfyYN3cT",
  "key30": "57eSZko11SRVuccwMzPCS4wNsnzPBTaLdYgFsmQySgD58QNpX1y3ZQBHUJekhRq2hQsPperzMDH9rCJYxtYNhBy8"
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
