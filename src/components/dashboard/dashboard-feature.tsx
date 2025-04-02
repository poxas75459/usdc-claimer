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
    "3NUn2s28MTs3cnU4EVGYYWhReLkM8tDnf9kf4e9KDKmMCC5MQX3pog2hFAMVzkHU5Di9rv2b8RvX43KEuVomusEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aRnbDX3Ey1Y2QSCs4aKsc5wMM1QBY7bjMFe7r5BWj3JD2sEZvMmRLCKfZhqCB296RCR9Rd5whgZzfhjJEBygTJ4",
  "key1": "53Ci2ogaFaHq98h929hWX8yjrbtyxpHRHSZboMDq8ni9zXnYDzPZdvdtKR5QyLJm7CUdKeqGmKbca2EWck7B2SBZ",
  "key2": "NrseGmWM9Jx8nSLFonnowvQnVmuZKrr39sWESohmXMcACETcCHatVYfPmWQTH2aPw9FAGvYfF2JQds1ZeBw7HWL",
  "key3": "2pGNi2gqPsG2N8sXoE4NWB3BQVCknsGYofZ5evzysxwtNUamgdWByL269GY2mNorKZfgM85pUULYoWMfaz3nJjDd",
  "key4": "5adx9guNLyfcsxubeB7w3nRxA3zxdAwM7dmCbe5Vw1L4qQ3CeYkx5jYB2c8crPhh3drASgpVcQGu3AAB6sdstK7J",
  "key5": "doBvzgz7BCUyx6iKn1XkRJoiEJn18MRxXVzD1heHLW3kaQV2FWcewJagdTE9a5tn7DpgoWgBEymatDVqtVMFHTW",
  "key6": "2VVFXzywMzL4smJjYc7rw9qwENwSkrMduQBk335PJKqDTLEE4SPhVsfWPjjjjwmgB84bAGkjnH7p2HCwezsNS6wf",
  "key7": "KbRgY753V2sSbZhxpY373pD1HDb3jgv9p4LVEG6J2Ff7BvCYeayK59gCKUafZfDtbHv9gCvgHbgoMonqrYw4JBL",
  "key8": "5KBtN9bAZ5HwGY3xGMZyBRr9feocYNrYorEHRE5YdAahFWBAcxh8CHYe17hT7K5Lr6rC3LcBuzKnf4yw2tj3M9Q3",
  "key9": "51Rf7FE4xWsezwWMHVfqeqy8bycDNPtceU8UaPRnHLnusbA6qTMwz6Sp6oTSk2S8rN71nmmDHkcjqfvESDdp5eB1",
  "key10": "48CiURkZoba1swAFidr3HGwY4BQajC31t5gFizunuiQfrdwU7Gt7zQnBeaqwLsXyK5L2zaZ4bfRF65Y9SjPRB65w",
  "key11": "2gHubgpwUBe6xzixksiwZc9fTWKvxYmtWP7dYGVy69VWA1wyzmKmpsReA8yDzb8j64b9VjsxaGrPFwUDkaU299AN",
  "key12": "4LoYrPyiHLpSXAMQbY3UCD97usAcm1UE7H47PEPyc838SxXq6j6WqQCKuXUtSCbytiPNEXK2qdTqryE8ARScscRM",
  "key13": "5xbVK9LX43sUTJvWkeqQspyDxKSg1tTmeVxDKvcQjLfU4gYoG9SEV3z2n7nf1YKGaXQEg7RYq419eSbt9m9afUze",
  "key14": "3eCgrer8H9RKm5Lt9WgaFiN5DMgachaSMQT628rTxPE5ws7yBFPL9aEh2DmvcFefzPPYbHR6u2s8pxf4Hnhs3cMo",
  "key15": "3YQ3q3qR3KsXRrRdJyhfasE9ngWXPucEPNomkb5AdDbVseXazM2DKGrrZ6yy1P6P2Zbn7GhX9bJb3w1bYFXxYArG",
  "key16": "5exU76wTB5vUni3Ex9nRjdEJCuwRX2pN8VqbWi7UhBhhHiFEZagaPMMjQ6YuZbKtBnbuzpiF2kzBmKN5FkZvjDP6",
  "key17": "2s7xRs4GT4A2uXw8BjFncGMvjx2KY1LTVbQkEPtvDFjQ3xoDAbBcKE3ymNuswtFEw6qbmuJAqR62Y9KKt5zjgaAx",
  "key18": "2nDxQ4XzoMrdTnxwbDqPxTKjnxmobiMRRKmMrJ2Wv1yHaspapGwT25MgqjEfrpuuu3oNjYTRY1zpH2fion7SZWDN",
  "key19": "5gaS9BRwEseBwfKt7kLbrxvLeyjKGEnKahD968DyM6aENEdUcozKBV76dEiPDJxAhxhL3KH2BKiUXPAMjoMyEkWt",
  "key20": "54uQ4oFFuh7bdmwScbHUfJRoR7HouXZTNJQMeZdeqkz72UXLjZPxf4xHeNJrYabR1GJo2TtaSzPEn45huw2nAE5c",
  "key21": "5VKVPC9JemdjtS6Rqqeos7y2niMqoQby5BLHfR1qr4TMhCFnRqphK44G9jXUU8Swg2229D4KqyeLxUaTd1tYpaWr",
  "key22": "HtuKWAUCtqwYxYGRJPKarGdwtenFNtryJK8udMZGxMvshYiMUfZ1BWdfEsaoe5g3DhBZVyba14dHjfe1xHJbpUm",
  "key23": "64Fw2zdH4zD5Fz7zkgt57u2hB76LVi9jkjx8CjLH1zBxtywQqghsS2pAR2VPCw4MaTu4M6MG8K6CrZFeJcJ7ui9S",
  "key24": "22vQZnTpBpk9ta5kmZhhNSA2bP279zaHUscZ3EuXvWJU5gRAP6y3Nev663xRyWHdxa8YijepLFBe43KtuDeaF8bT",
  "key25": "dTfrscMW47GrrxnAbfPgHHeBMkPvQj4njWfT8WG2c65c66RxzdbRjE353ymxfyvgHPNg847hAcd7NFNypzKc4de",
  "key26": "5B7cuhQP96HegL4dhVHeB3ixcHejCHsQvGFZDLNVjocZ5h85AxE2Eh6TzY82i3extb8edLFTsFJTo8YurwLT9PQM",
  "key27": "2eejwA5oTqBrNPGnmN1wZHTneRwzhSz8TAETtKAeSDDWayLPRHQXTuwkYsamPCuAMoYHwgRyhBy8YSigNRvhoQvK",
  "key28": "4XFfo7nq5g3uBFvxigeMuVwxKFWyAUK3Lt33F1eH78MiDyyMfNLsrfY8uoaHNmcptvBeJFcRwtM7RtjyY5usHUzF",
  "key29": "55tnevxSjWtEKscPna4Bj4Z2xa8gKguSG1q4rhMy2qY83EK6RoHXgJzPqBp3pj5GhbwpBJZAaMnH987zSeZUADrk",
  "key30": "5DD8dgCPK559ybMCNAWiNHebWVoefSRsSGLQjvWrwojjQPdnumtAXwxdAM4QVRAsjHwu4cRQ5myw3gpMo4eMpsv",
  "key31": "2BsBwmJQfmhrJ8VnTrXinZSi1JUgdjBTKNPJ536tebsQKtxrBRozqMpwLWrDiNRK4e46YdQVqHertgJGyinytZW8",
  "key32": "5gfzPQX5W3c8fsgtw7oC76DdCEgTQS2pasJVu8JLsYs2n9dfn2tiUqJeAckUhaqBYC33kgE7iWas9XAe4w5fUndh",
  "key33": "JrBfzJFi7XcHttzsh5B1iowtw9RR8ajt8C1VnN4d759Tb9LwFgsbwTqoDfwzXBBSWAUy3PEkXz7scGo4MthtKqS",
  "key34": "4VyUcKhJ3s5c25B86Crgpfayqfu6ZENukskjvbfcgCB8oA7PcH6Q6EXH4FqQKUmWH4dfitF6YoyMWoTgu3EGZURw",
  "key35": "25BKifTZTitzpww5RWYnMpMNgoYB7wg4PBzXzS3CkYJrqA8ZaMhWsamD4iq6BkN43H1ibYQYaGWbAHsmTVUhS19D",
  "key36": "q7yNatvmvb5BC6XzTGCs4BBKNMMwL7GRsFqEMVhn7HC7ZkR4Jw5NLzD9KDz294LsaBRG9e2TWqB8MVWioURSUKZ"
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
