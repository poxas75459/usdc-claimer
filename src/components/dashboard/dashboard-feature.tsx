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
    "5SjKoGTUivyar9d65j95kiSejPf3xVjjz7gkhVWak482y2ZWgzsndC5t1UfbKKoWZoqeFcgapdVoxKUUWXEmJG6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULLCbrvjbffKjGrKNWNGXThRiwF4c8cPWfJUUNpER9urWN5H2bsvyLWnN7kKQQayoVP8ejGpxVN2yDHQ8CECQ6h",
  "key1": "5q4ws5o3aCgGaXxCRN6f38TCGSptKsE6L7enmeanvDdLVvbL8JC8NoyToRDTYAejYbKJdD9S3x9gzwWx34i61zny",
  "key2": "2GpqoDSo7Du8EkZSTFhnQeNGwi77V1nmQqiB7TfjFYwoYpKpnEYu7pJ5oU9R178cJGEcKNwz1uBf8a9oajwtMsmQ",
  "key3": "4SqP2bahkt9ekPtcYyuVY4rm269YixTxfsEB1z8HBffB4p814uQWp3u4Pm1YSubxQ3zoKRarZq9h6qagUaFzCRA1",
  "key4": "59D1bEArmMZVbqxjT3V5KVVTA6fnQ7Fk3hEqjxstqPLjwYJ1cMRGx5JAdWzjswDAHpMiwE1A71gtLYy4NdTh5HaL",
  "key5": "57Ji8Bc827bHpE3AtEVsFGkxVUDXyf1JD2eV1Vf9Vvp4Pk3hoBAhNWKNL2BFpxpGtZewaZVivEz1sm3GPuHiuzG4",
  "key6": "Wgm6eWPV8hXRkQm2qZ7Q6fSUuNNmq1dgcVYhk8KvYRq29otEUPbAEo6mijNfyEsJ15FRzvm3eoagmhqXwUCRHa6",
  "key7": "3X6ZgPxyGGm7aHHymyvhyFECKC93GnzHExmFJNRQLyFZPCYcnnWf8e5qghgTV3gYfunDNUeDCPSdXfFs4eYXdjp6",
  "key8": "KVLNs93eXQm9DTFq9i2q1ca39XzyVzhqerfS2jAi4ycbd2pJMy5Hy3PUSut1qf78TAsetRbnii16Di2KQTyyH8w",
  "key9": "4dMvbR8f4NhgqjzrEnspnvdkwTMxsKcLCWXY7dzn4XvDKNQVMwtLNPCHKKzW2mgW1bhzTKw4KJ9UFHnWrBgqHR41",
  "key10": "51WhArAW8AzYGF8HNkfJ14Nx16MowwfxEz5hgau615eZRqBfsd61rEWMMcED3DDjiT7seyJMFvhDRnZByh1oDJkq",
  "key11": "5t44JXn5UMYbgrvzxcDMGgpKwkE5Yb6dE9Su9W32oHCFFFwxU8LsieZ6rnV6QcvLoror8FnSSVMvrPGwpMvoNUjw",
  "key12": "5KzgP2h26Z38Y9xBjhEQrLgGosRfY6Vu9cew48oDRXagiTCgawijrAjB7hu9HHryiFevzkskfcLumDkqofZmjKPk",
  "key13": "2zCoSc7BnMMGVfNMF348ThTHySwPDWQQTLdH4kr4PmmqTBpxz6eM7adQiAtDAacgyLWnrf7SNreQSUHo7WZZ4GcW",
  "key14": "2om8WrF5gyjpvyVTRfqb1sdhbpqwTE9h9zpDFyNoCSHhiYhKR3XkkyZgf8i7XopiwC8pzkuC944wm7DTqMUFWfX",
  "key15": "3L8gJ2GeZ36VBrZtLJQty9dwJzxmpJjgZFcc4KFmqXzaS4jAAUzQxYmg9WXWD5o52Ay9WbYo7muAhtxqtnNNQtYo",
  "key16": "557SZoYdiTJojLoVVca6LScd3X8ZpGLFSTnk4VnxCujKd934CMJ2L6ayjag1jLgU7VHsNF2DYNXrPEVoxmYmZKAJ",
  "key17": "67333ZW2ycssXMy5AuPbMNrb1SBSbP1pRNhkXHnAEwGgJuwGnwZPLRU3P9mRuE2hZkNLkzZcC1omuYLd6aRvtr2e",
  "key18": "5n65JEjgtgoKS1yHTZiZGq5TQuvqzPoyH7Ag5EoQ3ujHKKR4e9Kztho1Cimuqq7Bpd6HqMPZNpTcAYmJd2Mybvwt",
  "key19": "539h7Gy5uHRbBN7t4sRoJFYLhNxknTprRfDCd5ZMTAxXHxsH9YRrb9v4HhdWN973sGx5sPfsfgrcfb42XTADckmo",
  "key20": "2GECZhSzLonefwU2dQoutK6vVjG6bJmBRGjjopdHHK9xLNdaebh6oQ8qZUr9RSbMhLmXweTAfnfaRiKs9K8Ag638",
  "key21": "BySs9A9HaxHE5wLX7pdyuypQBN5TQoAMgNXb4s2Nqh2RKbMuKGDsWx37xrGuZeNiVinEeLcjaXdwLa8uwQtiTqL",
  "key22": "5eJrs5sKbxgyhiun5bxK9prBmZkV7C9nRjEAxkEiYECjmgMDo6L72LHKFrbAsENSB3PRBD9ie12SukCrpYE2sEc6",
  "key23": "26JR8FndkvHYPeh5AktiTLie8mbt5mD3XaBYmdTDcGypYV91rmJqtBuAHcs3a29mtsJSnTGRoUikqutcvbthXwQW",
  "key24": "44bTSfwgWsbvhQ6gNZ7przPXHcZJDLd6cfzX6uNjaKiWyyr12aHPey3tPGEB84W2tcNveWvDLcVxXbymKNwmzM7N",
  "key25": "3Lw2QgyqYBGAUqALykF7pugYEEcQ2fAHyhTq95EuAErgJZ6qUKPDeyHgpoQsRSnxCuVtahGeHVZo7y9nVPp75pit",
  "key26": "5kD2QwE5bpDjMoTUhqc3QD9PhmDmdWLn5ymobgMFF27gHNKoCjhYmrUg9Jy482ijQykQbGAVZrNntPFbFenxtjgt"
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
