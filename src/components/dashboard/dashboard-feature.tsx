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
    "4W592A7mCRrxUpLAW5QWdofANQ5mbdg1Rrym3NqhvtSBWQKVEfjQgtx4NVh4ZqgPENpkZ5gAU4bdF6zCkhGN6qvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oR3vMCRhDvixgcM5vpiUh8HnH9sni6GMrx3x4dNaJwQLpvXo3RK5XGAWkJ2NnmeV2BXX48KVSvPQPtD5J6K4Brv",
  "key1": "WciYYUNXctJpqxUerGudvW8cfPVp2V2GQpCjoAxb8ChHZFkUzz8snAdL8bfViExPvt1vy7dHpz4TQSGBMZNWR5k",
  "key2": "42HuBVJrqLQ5YqY7tEpZ5rnrmEV539CdVZZmjWJFBWmGhcNc5V1FX7mMN8CgFzrH3Qba5g6MQJ4yMpsvXHwhNWuc",
  "key3": "N7xjXskcwrjMxAgGbYRUPjKLFU3fn7A6GLs7ybN8w9by9vEfdjTC6rzmRsmWjCZkSVwc3XsJ53ZKPPCUNZnXemF",
  "key4": "64J7r4PdbikHVD1hHo2p3w1v3P4pr3x68frEJnRH2nTGV9YyKR1Y84kianQEPgKgpPmpsFb5iT2PEkzgZ2cv7kTs",
  "key5": "3cN8cnXmDm9kzsudCknD9Vmww8TsiXrLtZXMAQSCBpHqvn1KTnQJmttua77HDjn7zQRjZmQJMpzPVkHd1W8qpw3n",
  "key6": "5pzpmwL8HBp7SKmwF1FXbvFzupFFEWwcU55Aa1MVsx6CBR4umFWQYXUcdPcSw9urEpsdRhdZaqVG3iftr7pkjtn5",
  "key7": "NU6JR4gPrQ4h4CsH6uADUaauZVoWoY1aDiaDqZPtSPXMeQsDU2af9nAzC1eAHFBpHvttLK8SzrUqeDjiR9DQuzs",
  "key8": "MXEoAgnttLgKbcSEDTYVCJKM19WbTG1d85HcnxzDffRcUn1w5XymPJg8KvLUnGHGEHa39sdgYbYykwpnhXiGzjT",
  "key9": "2fNcgXLBs3w4Dzpg6YwARUFZScCKJkh5rUhhR3V3uV58j2q2EYdjP6ZRWbWbK7m9ynUpDsAFKicpnotCwjQjsYR8",
  "key10": "4s9zobZNBJXWkgwQvX6rMCCfcc22AB32K7voVtdRGJFeu7mF8pBuWHSXcxUAhrpt1aZK5mJJRr3vLRUnh958ZnrJ",
  "key11": "5MRHSpUAPCZUsi7FiK3AQLVbNDbCcPJ2Kz6vqLtvZeVsLJdLAVv37P1mZbWumgoC829UJchH7m2eyaUxUZo1EJbi",
  "key12": "7azw8x8P82rZSTUWvK1Gc8Ubrfk7ooQwDamHLLC4Dr9nsZ76bFXuv1JzVGwG3FuEsWHMDD3otgL9caX6Eyq637b",
  "key13": "uGFXsXaPcQdvmxsbEp2pkrYCaTMPuvCUVQ1gaCt92BorqimU6gW1UHzDovUU8bugVrEep3uHP5fnhDijUkhULKs",
  "key14": "5NcrCrUz65L26vijcnNGXv57qfthMWd55cV4uFvYPQUxySfirdwtzXmTgYe11R41shj3ycFsTzMHoKJoUj31bXp5",
  "key15": "2evf6EAnMCHFocmHvDkGBKerA39TECyhmoRNsjvk18eCBbYrLFnoxgkFMGGgCtzTNrqavbpvdajU3TSKtK1Tfm2J",
  "key16": "joJhyWuy9wqDTf1r1TE7r7amrwxkCYG74MUUSuJagbuHGpb4MNNtbE9BT7kc9jrJbxcgsYA6LMnVZTaNM95duTb",
  "key17": "4vuiwWxyJLygxbtw6meRw9KtrRqBCp7GoxC89jhRXCqGmiMPGJ3LmhV48Y1YeBQXsUwNb1Uew3engi9Lreb7A3H2",
  "key18": "WxF88qo7XC6GtdXYYH78tCP8MBYAkjx2rrNZU3VoZChrjLd5M6MP4vWQKjwD5QcCeLMJASg1aWNZGpfHGHjrbov",
  "key19": "4ENNNRJvdsg8Po95pRPZ16zpjwZ5Xd2ptw9pT7iRMmm34e62V4hsuHbz45caFJ8pP7KqpbNuVRdudzAGAfb342Pg",
  "key20": "47bGFZL8GbAQ3jGnAT1EeB2nBVqDkjNMSVUNSvpdf5ej3iVXqP6St5cq4ddn6hsge4aZac2eRedLAoek1kNC2pE3",
  "key21": "4Pe8KVyFq7KsfxWbH41gsHCu3T85XJ2LYFXJe95GwoZpLxJabmraa5mo5Mkjnyh6bsx8Geo4E58E4cvH9DfQwiB8",
  "key22": "5u721Xvz7iAABA73KqDnV8sm9xUM2cSwhbeJ9M9ihjB67J7RRbcDCdxYpQa88U4hMAM4BxAyupuX6YWdmRej6jF9",
  "key23": "33GzyzQwsKtwszp2MJNAguqopXBebwm7nP9edBrDrMoodzMNkeeRj2qnjNFds7HmWRpF89431dkG55NFLjHb15xY",
  "key24": "5PvqeW627pcD76FbxSM3xaykqD9rwGaMVyWvyTDPQ42ovFRk5wYYrgJWLfBtVkoirRuyXTZxMWmLhbEiWxh9v7bG",
  "key25": "2JmhzCVgEUt72gFMp9ax87Yhg7AuNJbs1134m4PZSQeySMB1yxjaTJe4H6tspwyNTNZtN9MbtwW4fAtYF5rPEcJK",
  "key26": "2tQDLFYW2HWGABmwVD9MgPdQnA2M9hc6cj6vEQkiPPgHxom459fAzs24Bq2fe7ZQNtBdGfAjNtpa6wKTjq2WVC6v",
  "key27": "v2bxxq9tF4xri9y2Z7KjkdvQYwkSaag29NLf37tcJRVTFmm1a89vQzM97kauc3LHvRQTsYxyGhh9h1H8ckVx3gM"
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
