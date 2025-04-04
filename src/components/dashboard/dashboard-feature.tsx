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
    "5hFKfttfcVWNhpkVt7kUPffPC8NBrE9eSco8o1xVQCSJjv1dmLa8hfySHF64MPNzYTLKnVKYDJCo3Qzg4JrC9zdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JVna9psPP7vMfEXTEpPcrG99aQva92wdctWA58xcQP4VHTjYJcedM4SPF8WFyFqztitayvvAJyyehCfzKR4LjVf",
  "key1": "2Wgi253BWfJ1res54EmHfxKpSNEaik2BCzSUVVDijVSz6UShZKj5i2P6b79SP71G88cSCocR9xS9bQDfe5KN3JhC",
  "key2": "Yf1N69mtLBdc6zfurLUYMTXBNtYbef6hTGkXRkQD1vUoLgTj8rzC7CNdDc7U3mN5DkXSfHAJQg1CKPy7ieC6nHu",
  "key3": "4ShsukhjbhGYjNfHa2BAdKyLV95XzDhSvtaQywioDD5DZJwNN5HyweUfjau9VcmV1RjrrhqhDizEowp6Z3hJJgpk",
  "key4": "4g8PM8sWXE3HzhJ2jki1Byhf3UiSzK5c5o9Pm1oYeSn57go75mWrCxrQUEVGYh1X8ZNMvccVi8sKbayKqqiM9Zvh",
  "key5": "3uFXgHXTcqfyTuWBa8mT8391yWdpvuRR9toTuaCmWQAdcTSambA8MtiGpRBt2JuzU9VeVxfUiVQrYxosypYDykYd",
  "key6": "3rpHyBz4cUeUfpRenciZjJPbe26Mq6Qg5M2KxiChSCtJVDmjykrt5d8QS4M3dTxDWgdsBrB7VYE8SXmxKeazwySp",
  "key7": "2o7Poz7unU8Qn4D6cg2taJFkF3yJU5FzZUQCP1AMkpKrkknVAPc2VzehzMv4E34pgWqESivFygAUxnxTqXDMwF22",
  "key8": "4guQrf6PWWCsUt4VPeDijfe753vC7jA8GAdnG9eyCCR8We6y8he3Nn81AH7gsT2mT56ZC9H8GJqAh6qENdag75uQ",
  "key9": "5sdTpkF19LgaH7cU5KsScnZnfuJRfz3FWgdD3CrqmErWSs7C3Y1zj3BMhH2gxnvaYzsLDshhYHweJRvfeuPHAGa2",
  "key10": "3ZhNFiavoyY9Jx1RxTihq5gVy7XPSDNuiFtnBo97zUqA4zBpL6TewuGX4HNTKYPopBSatAsS8JXmTXWkMp79Pr7L",
  "key11": "34W3d8fL2GRgjk4ofGE9PQ9QMCpahkFTgjFVAvjHQHXCQHBgQfKFRjip3ypVjeE6rGByr6KBF2PbtPC9A3HrifUp",
  "key12": "2SN6StZg7qE1LPnYiJiALEW8jLmKxxHjqRDTBZ8JzdJAa2mZHNQqXAawgGqsK6BsApCWvndxw6Vym1kWRMj1Hsv",
  "key13": "5oGPJvjHqPMJh8mwsnLC3fodGa1K1rwwQz4FVG8RgZH68oyBdkEUe644TM7UYHEBJFh6PPe7XpVhNNBdgvabW7Ds",
  "key14": "3bH6wA4R494z7oL12MxdQJhZL9VoarGbw6FEBV8JkRXJykGLBMZrhV918LhSjypXRRgfwyQb8Nmo2aRDC8HgLSP5",
  "key15": "2KgHPfULAF84WGHR8TXTcGG2HUT7Pp2LgqJ7StadLrkVuyvBnmJ5BTAgm8ZhgjE78Sk3ZouDj44dLeAgn4zZaN7y",
  "key16": "3RqnV2KnVKKDPXFCvWbZ6TpoupzW4gFWP8V61sMXVfV7QLMjYhqiXUYbpqogcMyrwWEdiRRN11Ei6hwp5pyA8xJd",
  "key17": "3Gbb2TQL4Mz8KYtwLLxZ8k7qWEx62L4brGr6YAqpcsBtexFNDCd8Ra2rH1fdU58ZX661xkPhswUQDrdb9FJprJ3A",
  "key18": "siNh2KK5zLmmVyyQoxGy5cpuh4vkScvaijUNor9HeswLkx8v7bzE5GQQGSsLnvAAjarShyFv4qPhreZjonTESUi",
  "key19": "614bc7QUVW8tTPHHLPHZ4J2NKQEvPCHkA7KX8vw9v2cTbyjv3zhrJFh4zQXeSMm9sbcYde66f63Es3ZZWV92sEjU",
  "key20": "66fytYv1dQtxeZnxFg7BQqhbmAE6e3aDUaBes8fwg9fLJpB9fd3tu3UQRmiEFbQiQMnoU1emAovqKVAjZ8a7ktkt",
  "key21": "3L98j4cP1xyu2baj7Wa35q1RjiZikEYDN5MC6jZ3JBcLWA6XchdwPPKkDixBZ4QukxR9LJsUVPN4P4JDfMjFHdTo",
  "key22": "3tuUmZobYGdqkyz2HprJgFkRDjPvm58a2XpwokkKxqZ8kcjUP2icBx65vgEep9ywwuQ6DQfXBQpN3VybwgHpiiiL",
  "key23": "2Br8nsg4zNB4q35EnuC9ZZrQaNFgGeCcYCKdZzztcxQXFeejRr5b5TonCyMYE1vU3M4AvWWoNfRc54Q9gk1CjiY7",
  "key24": "4HHhqw4Vs27mK4YTVGPiZthTtMP7wThsUZWVA7L3YLGPbZ4htMB5SdhE157LgT4AudryqBrURwaERNVGQq9pnJL7",
  "key25": "2EBvhoJvoTrFgsczfjWWza5dvs5DVuPZEUSkXskm8x3KU52fPNySFTrCyM9YBTQyEsSHHrVEhbej2og752MHHam5",
  "key26": "3CH5ifQyrJDTQSKzbFhwVDMaUrnfQSxyH9av1LBuut1EQ51PdoRDYqG3k38g8c8aGiW7VYko1UbRLBB4zPvvezAy",
  "key27": "2bdddGDmxn6SUhdHhr6oKPvhR2fHnYys6G2thN9TKAMzsbFFMygnmmhEgwstCw4JrMDWrXhRBLWZXyqLxvWdddgE",
  "key28": "YRBD8tSYYjQoU3eLn9XEX9N89pJVLRxj95avAedV4L5tsUStWB3QjtebPKwHwWPPYkc8h3tixj6kG66kUF2gSZ5",
  "key29": "2QyE2FK26jQZJE1hy7xmmQ5RMTLsFYd3ky7b4dLf6n1qgXdWqxAksJaEKKgtWT7Fu1mXpDYxNBDSueBUVTboySVo",
  "key30": "3emdiFgExYZTZYBnmdd4WHhWY3GFHoApbWQzH4JQWGPPMy4STPQCZj1VsPzjMPJ3Up2vyhcfWk2qCsvhP1bFJLUq",
  "key31": "4v6dcd3ZZ6iB3U2dPDYGUoLv3YB2DoZH7ccTUnm7ZecCrNdGWN2SzAhtGwgW5VFBZMaaepJvScXd99vUNkro6YLN",
  "key32": "3EzUiXDdS9BHJKXHNnzpXYehH6Htbyy9EETQdzJuKL1kHQwLF5bVBQmFg9rWPch9VRLNxWdD3EeJg3HpvtTgdGt1",
  "key33": "RsFo6pSQePCRuyYovdXmaKX7JgQi2HBvg4GSMBMXzzdxos5BGAKrk4bUUkXHYdyG9hKG73ArP2jtiiPmVHNBtiB",
  "key34": "3hzEJmKU1BJ7Ec6Q4ujcnacz87bMv9cTfVcJmJhdbaHgJFRp1Aw5GC46v6neenVXei5XTBK8P15fR5qdQNjN75Wb",
  "key35": "qhsnJMPd9hANVHK6gHLPLgSicJRwjRaDGMHtmyx9ZHkZjtFV5AYx1GiUDt6Vp8GgcV2qiYKRFpsxk43JyG9SUCq",
  "key36": "4sVfyy8Pztr8k9QA4udH5GoSsCM9tT8bZUqA5PBq3UfzkPnaJBCAohQrTeN8iSiVxmLj5uLWkRcwRMkB8ymAmV9P",
  "key37": "5fugHjzMkkEXdBH19xfke7EpCmSCE8N4M21xTQJe4fjjDqESeAWJbbncYfAhoHzidbaAsWEbM1GbDVJjtGPtC97e"
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
