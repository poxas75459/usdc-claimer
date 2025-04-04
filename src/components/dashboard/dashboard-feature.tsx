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
    "3TfnVRpqoCvai4xPyQhERw7ByX2RisYSxNqStMCtSuamDnyDwtEMbENeACCu2SfTtCjnegQAvyb5FRh5fcj72K3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "18tdKBjeNJhqCaUsz4PsbDqgaTb3HwWrbzaMDgCXpKWqJsxeC8TvXh7ZjVa8rPjzMikC2WX2MnoSEbUhSrAFbJH",
  "key1": "t9Xm2EEsUgLaoPHknDPT6EgHd2XKVBhRjGhLSse7b4nKN9dmGoeDh3ED6LFbcZbqk7n5gJzUR7sEPWixyq6UmgS",
  "key2": "3UkfMC6HyPwwA9nE6U2ZphAb3jbH3RnDsd2RnfMGM5pwCfgaTNKMUngRdVoGDc1cH2LRvnWDhRc4w61s6LDmZV9X",
  "key3": "5e1TEeia2TyFLYCdxxD8uBWZkYKcXQ3EHuzrLqGupqBksrM7mboj9Ko7baQtpDTQG3QoDZGGJmNGhStGjhAt3hZV",
  "key4": "3kCGa5FASk4A7HmDCc1qn9sMUk3t35XcNLQkQooxZtRRFBWGBnsPDEsubF99JJX4VJmTz57qWAD75HN72vjzDntL",
  "key5": "3Vtaa81fL4qTwpvmSbr3vszeEymNFeE367iEvAR1m1phzLBNqZX4v6mdbB8EhqBRrHLBmPCQ944dQVBnJrLx5SYL",
  "key6": "2y9aGDJ7VrdhA7Jw8uw6LRXBDy7v274CZsNVaj9std5dmjBuXsgSmukzoU7BxPTTRZXEzKMHBpc5keZYGogftuQZ",
  "key7": "2dAizojU9oLmu1uqiLqDfSTMTbrd966Y85MYpnd25hhzy2oLaZkjfXJFKZEamGGwknZv93NrEQd4NKbKA8nSHpew",
  "key8": "R9FqjoWdvNuyAJmUr7ja1mqv93QTkB6cKawTw6KLpBp6BACxDWiQA7QwS1jWZDpcxGrhQaPtWPPXuszH6TcnARo",
  "key9": "4rKXr9Y9pHGzwp4RyBMBP2ueaKqJU5zzM56rjxYkWkuCFhNfJPLQ7EY4w7CQc3mBWaN2cc3FdarGPiKMcj2eFVP1",
  "key10": "2RH5nc2Fu6nFhFJEsmVoxYoaKEhxeizM5M8mdRo5FJ17bXtfFnMHEvs7DpYXvCGiNLhJxxFN3r3riJCixKvpyW4j",
  "key11": "2uWzLs5tAPVGxw2G2TvzEZKfb8K4YS4VvBd2z24APRrzk6qbVjRRAkmJNpLxmY68K8mQ11t2R7XbQs1cv5AtCSjB",
  "key12": "FRdKXXaAdaXZcTBf5La3rD4naeysM7brAtZwpr32LEz8cD1dXSbfVmZWwQ8DwokwCrceZiamiZu3QohUM4m7yG1",
  "key13": "czRGVCgTDsxAdHsHJxfSB7JupQNaQZ5yPDwvZXoMSy77DsPeQEoyqyLVAPQWbqcEJcZzFeeS9dsDGTkexcz1sb8",
  "key14": "5SkDtScxGmgGS1QjBGXh19UUDHGeTi5WrAXJk6J3HdnMkVcJgSkHoe2KcHxsjy8DVqyzwEP5yKaTYaZDLmP1kJVA",
  "key15": "2GpppDBqR4sg8hpugSCySK5x9nqC3pZazmm97Sh7RmtuUzd8xRPMrK25rsGsBSnuqa2iT2bZoK3wGgULtXhq1srt",
  "key16": "45wCKt3aUVceTXXuKFnqVCxQm6JnWih5VcD3iCKmfEiibCFTobt71LkcuzN9ax7WZt1FKFzuG2pLDLeY2B6Qj96",
  "key17": "4Z5rn3c36fJ5M1WYWG6NL9rnzpwP7f9DAZtjBDbuVJQS1TqqLagbMnFrtninWRcn8Hsb8f29qFTNzQ9BE5GAk1R4",
  "key18": "5ENt1aRGuhsQd1wGe4BB22DmSfzPVtTmeh7Frma2329VPx18Cfxgjhe1UVct7MUw236tQGgR621GCiwBwbe9gh3k",
  "key19": "21D36i9L9QGvBfvCKVW9nMzHEtHbp8SrndViBNgzmzjTr1NzLSNqGNQZky7qTLpt43Djxv3EBmbPSyPTC4jtkzfW",
  "key20": "2MVToDL3PJNK4ybYUoq9n6rJVGmn9St4hYcosfsrdPjc3k3TU5YhoKVehPMHhwUguUR56FYg5Jw6JGxA5eqpsgcF",
  "key21": "4X9BBRrWcS3awsJVnLhwXqw6wir3Z1X3sczdsxYd97deu5VSMfLnQyhqGvVyFRJpuxvX79ktFn6pdRDeDvJ4c3L5",
  "key22": "655ikwBPbqLydTm3MuuWArnnFxQrY4hDkFkjW4TtTcUGNVTkLMGpyKUvKcrYfWSy6P8S6chYYJaGAKay9b87GHHk",
  "key23": "3jKTn8oaLf2xCEezf1DkW8VAeVWBANXhRmjJo6bPokWGLpmRmNoQBYX8HVgTjTW3uMEgz8M2WAsR9BE6CHZ5TJUd",
  "key24": "32W3tAckR3FXKyaEquzAaq9TcjrEoDg15HgU3NdwsbffsADH5aHJPKL9buCMfuF1gMadGWRx5Nje5Wj9xCWGA7oG",
  "key25": "4dHfiUc4UGdr13rkTA1q249RiEHfWoDtD2zorjLDAQuUaj2v7ML5R11Yitfm54yXaUEWi5G34aR1HpvKftTg7Zqr",
  "key26": "5jGFsdct9qctYSYRd796UcChTqmZBsiAFepLma5r761Td82V4TWkkDQcfbWuWz6ZWj1hRg3cALkiH5DwBBeM9Epi"
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
