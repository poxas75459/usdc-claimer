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
    "4X2KHtQPdicFd9781R2Tc473rnBCXF33N7mRxJFJkS29A4ciTjbFe9kQYd6A3b1tVhwsyxLkKamPamNNQ3611CSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sehpPsco8GTkxUZcfa4B9jXnW6Hh9WeJfAvXgw5Y3EhwAXexxq5pqrbEAazZAnE7kpdhEbTXLP1ZTHaUcAPPh8n",
  "key1": "abNJ6e7fbZuJvuHv5N7GtconSvbhVkkfkhY9Dk33tWE1Wc5f1r5MHxMoVwqCW387E1RzPtJsY25YGBBbhp5Hriv",
  "key2": "4NguDF52Sx51sLvs42wzFbCJq6Fc98GDwNCRMGXnHXthz981UYDNk6J3GWCxLHtChSTuVzHh8h2u1XwH8tmnJniN",
  "key3": "2MHfUoYUxFDC987442fVNBFzX1aBGAka91dkjtWR3vArP7CJzuzJsLGTUzC8LE872DhY8Z8bhaJwaVuHzJ3z3Je1",
  "key4": "3Pcvdr2KDKWvZzpWKyjT7uBCrmp8gcbnCv2fwrU8NEtvzm9eHqfhaYj1i6akbAcMDPurSph3Hd1Te9Nrta7kgzq6",
  "key5": "5RZtMrJRMYMVE3qmaT7FdkXtiENxZYieZC9WG8VTwdqG8h688dCjLAkzddtg3UmkrPaNJmPk46NAVx6CFcuwYr2b",
  "key6": "WC3DRUDZHN3opFHQddgfENmqb7GHZXTY82ouyjb6GKGkh6GjDAtK4w4NESVq6sKAwFAynBq7KjAb3GnKjkeeUhq",
  "key7": "4qUEtWpFRotNDQKuujg95L2YV7hCp7zGbdWvSTSaz7uf8mXN64eR7PrHf4eMxw8WeybfbQKDDj5x1Pod1F3vSC6n",
  "key8": "3idodWjenxr9ZiRSvDbreanDJVagrvFCzuApruWdc9o68GHHuq7TBM3fnQsuEfnQcbQU87WFnNAfq9AXvDKDqfiA",
  "key9": "4eYXFXMFtQ194qTsgTAzkjpRPMmVxnWs7XAdiLiBuD35AYpvqHg88GMRu1YR4rQcaT2MHMHQTDQUUSXL27PLnxpz",
  "key10": "43TMbJtaKb7ymMWo4rKr5WH92ikDNaLJpSzmSSHm72Qzr2vfC9oyGyh3KnqTs8oLZ6aJxB9zFyMH6fnTcL7HQr8T",
  "key11": "48cYUaLg6JiNAcQbTa12XNaop8cYkg6qfm921uugmq5GZEiX2KzsiVPnEpEiYWb4DQYqpATwwpPpLRAYYqpmwqdd",
  "key12": "3gnkFhQtzLccHwecCDCKzVDXx9JaBLWVxdqWLaBSxQ5Z3wi9165XKpuJamhG87DDLU7h9vFtq5RKi2pL59Fp6paf",
  "key13": "2KhB2hXMJLBLfUzbVByVXkkaisTeq5xdSWu7NqruHVGEFFtYQwxJvrUGWwBfckKUrnNBu1SZBjWKph42GEwxyzef",
  "key14": "4h191u6pWmHijCp3qcdS5ksWyYeFP5S9rrkHAwYfdTZjCLQSQjq43CR6uipg7unJMCQd2bpYe8ksWzhUoDNw1nvP",
  "key15": "4LsRdLd6sYXRwWksz2SL3nwrLmxePy33UWJb2JwJK6FvScNJxrgtewcpMHXKisho3tp7v5hTz7pzMAUkZ6j99Q8t",
  "key16": "4qGgUugFDHWy7Btva7pd5vgg8ms2WvcXdEsRQgwXemYEpEqT7JvLyxfCVMmvUjbdKgSEtajxH9jmAKuc1SBxkJGD",
  "key17": "SkvXyaWZwn6wNQ6aTjS24nQKdpcCDcF3963xE1Dd6oqMdDS95R5HwmJmKZCo1pGxk1faroqSdhxPmoij5Qf1kCN",
  "key18": "3m9QF4jWxRRQnZogHwvq6dkcveSnkcTqmYNohJk7FsmXAvVeEoAeotMN26F5SdzXmWRYYxbfeMKRCkJTZdwLUJpb",
  "key19": "5BbTCeuUmz8nxNCE52KJcRQNDkj5JF55AFrcEYQpPLWW9XXnytj7i6FuvGK9JawwvYdHLhyQZUvz3dG1s6zGQpEq",
  "key20": "2LU3FHNTgSH4h4EZ92ySp9a1xh4hcZziWThJoTKBi53uLRyqco2ZZ2d3mUamtq4nBLTwAGs31LzSLqdr5Vi35WT6",
  "key21": "2ScX6pFrxBh2qBsiJZRdKqHiyJJf6qm5xJnGxZZkKEZWkqLMumcjsqd4n6KZh1qL9dexxT7mDexxGrxpdZFo7Avs",
  "key22": "JZGJ8qZz48jSmNS2JHkyFs2eyq7LbEQsUcz9Agjrt447s5mN58CyNZcaxSbvUzrsgGmcaSz4oJsqUp7aYLwspS3",
  "key23": "2yNJUEoLgUuYghepjJJ6p8dotx22HTf1nGkth2ok8GeGaKeHLnGwbdMXwpgm1oEXjBf2AvuHZvvR5PuR5qyMQJRe",
  "key24": "4ZFa5szkGxPLJt6wWvy7KbxKvaaNgNBfbyYoQEFtxjR53C93icECzybbfGtGcsfS2mBo5RV7oAx7V59jiHmwaD1k",
  "key25": "43NmB2wVmumt573DDvtWV1FSDfySTmLoCMPRn8A7vXFnLLqc1AGGFu9WuLS6zNrY919guHUQPczxEd5kDz6yJxCB",
  "key26": "55ujxJFxkoATiGbFkLrUYKoD2F2PNKMMXNzdPu1H9kR8EDAJLqNrABQHCuWawn1DhS5Wdvbi1w413BjZZ1sAzwhN",
  "key27": "3ePh3RRbuzRmxu6MashyRBhMHPp82iBUCR7VnYHtHGGh5ffAqVtH1unBchQDEhBZGYhZ6hc5y3SK4ygoYixx7xRk",
  "key28": "51eHQQrM6bUcqywoJJaSfmZ3qqu3e8bU8iiDASy3ng3oP2PwFiM8z2ipKZMVUJaUGTTbrZ9T7ZE67HHSkNeLWabw",
  "key29": "3EzReAA55pJr2VqWB5yShPf8C4ntrsuc9UpDhiq9MH6hRqkcE48U8CHe7mhrhgP55eKfaudRLGU1Ejwgpm28grxE",
  "key30": "4kvkoBWfLq6WvpYKp9itqsbuBFtVH4YNqcp7U6Tvcp6xTE8b5FZ2sAyfsjpvhgvUjki5Ko96insGLhMLLdDKBRvH",
  "key31": "557uVagVGho7bFM6tqbp7b7JLSBvHz4iPqE5f6AHPaZRduvCYvrV1EpxKoutasSANGm2LNjzBgTVrzigUD9trEo5",
  "key32": "4N1tFibz7kjp6kUF5YwPhLYDyGN7khGJsS8CAxasKkfLaY3AdCBbHWBZXBsK5MPqP5vBdK26cQPhqKau6ETX9caN",
  "key33": "3ufAiqj3jkcBD2ZnBnj12LUR98hPohNYvC6RHtkybzuxzbC2kYn3qhMW5qDMYFE6f2KHET1PKr6caMu8adn7XD7P"
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
