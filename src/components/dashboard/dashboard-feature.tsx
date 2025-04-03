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
    "2aJBeC1dvA4MZwatLUKn9fa7uHTPqT5pwYXBqnXgSrnLSSnnGt1t4zEBFgNnM7qPD1rWVMWuLSwPk1nxom3mDpLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ttSxoWjYFtJKNFs2UjsZrMVRWSJkjNjxkgntn895KGpf2Ggmk25mA9cLovy8A7bthyugeLsfETCuzPcZQsUMLWY",
  "key1": "bWJbUPE96inBgBCcNu2n31t4FBjbDYodPBHXxj3zP2NdASAGHWA5i2Au7sJ1Bt34i32wurrcfP7BrwiKnZgw3xg",
  "key2": "5Hs9d6HGeiPfKzxf9dTtC2pMzhDGdgo6beSVyLCN6Xg5bjabHV8CWnYh9gQh3iGfXTZBcs9egDQMGXGeFoioyftt",
  "key3": "2Q3MpLuswksJbEb4nZ23UPKsmeKdiw5GMcwsybAXjuGF5F1j75DktrMRfeoSFk4k31x9cFNTnPCmxydVTBXgo9vU",
  "key4": "2XGqmQhMoXde2H9MfcHih5JTNRThnyf9kJwDN1dk1wsxYcLW5PRSwqw1xukpAMGVZon2EHuuuUHxq4pS9mwzHE7g",
  "key5": "4cKBTTcfiYTcNCKGLg8z9wg8x7MpdY47FuBwKcZUQQnA6juadPFTv3XPa3jVhDsCnjLqaLW91Fnhgk8kaMVrtoE8",
  "key6": "56NmJUAfLbWtriMkHfkrHBVHGUM49Xi2BXmjoMpGL2zLkSMjgQo54nBSZ7J1W46Wg2BoNfLQGovYNqJ1YLv2merJ",
  "key7": "PbprebV2V3H6VnBjpMFiSUuMyGwpJxFVpRSnrbLVDdyGNBdCXtJAiMvGMGgX5HmXPv1mGYZqpiqJFztwF2WtjmM",
  "key8": "26hS3wcizRdKMQbN9SkVcTNscipkcXB453Q1JkfBSjk3FcmwE8AeqM68ov6Q1yWUvdfUWT8g7KshW8Uuv3szkYHj",
  "key9": "5ufTimNaXLnYtWhC9ZJtesWKLLieNbVHhVUbqqpPm35rAAuqRpuvbZ4QHxDoZBm2FPqDxNF39cpAcHpkGwuxjWTa",
  "key10": "5n8VnhVAgdRc6jzQWSBvvS6RYR7TYk1y2CSjNtWWAGevUWUnLqU8TaAJwwrzyRa2AZXgi2AqbD6ritzyfxHCgokK",
  "key11": "zuyDKo6EDKYAvrDU6N5qddgKS9AtpMF3Em9PPi6vrpqpEQtGF1p7Hu1EXe9nszgwRM3FdvSxf5JX7X3voRq1Jgg",
  "key12": "34ioXhRGETagmk82hF7tV6s2W9FF72SRgEMTA9cL3XatGZWVXsYK6Wc1GFhwazyfCSGr2pKvJt3PgDK6WooRbztY",
  "key13": "3FGtgT3Ndn1DjQyUJGm5LXnpR1iKosKxfqNRBUj6eGPwrtyHQfwoic1YAsKWa7C9tKBwmxZfWYndsXvLkFKhL4wi",
  "key14": "f2poRgRmtu7iChDaivkkA85ponJC6b6QD4hTEiuEXQKtSPnUPhg4BKEXmtu8LtPu76Pyz5zGvRXaFKG6QHv7fsp",
  "key15": "4hRWLf5f4S8reDBeFJLRP8J34sPqrdQWpnVfLwcDwpj24r3XfgRjFvNbdzWbisuw4SkgpRiW7QdUcxWd2LGZ5dWY",
  "key16": "Gf3gYLfxEKfeFPxb7fV8cYaYB8HiYc4kSedpuF6eCLULtmiGrEXEtR9tc8ieLKzvK3PErhAN6otubthMmqe7Zr4",
  "key17": "35qSHHFqQWA47txrbR9Pp3Uw76JjsTnxtorZvGsmaSfioZ6QS6MXYTG8QykRqhrifXLNwSzZBFuAvLugyzM5A23B",
  "key18": "odzeP3jL8AMBr3kop2j1cerpsD2RPsUexhVSjLKQ2WXKyyA6RJhqKGhPZgaboddVGqB6RFzTdfXoYdZYzaxzdAp",
  "key19": "4PgDsuCTW6TVJ33PZDHRa7kmXK5CbczZXjVFoKyDopSnPrZzhMRJJgH48bXMRABz8MXqoTZVTARvg94eMgF3m5ev",
  "key20": "57US7jJTZ5zUDZaQVFQKHf22VrmTaKbYimMDsFKzyhDQTxdnXETxT8v2ikzBdsutS4bVL6zZsSuLE8sJt3z1dxaQ",
  "key21": "4485xQRbB7z7YVXuZp2Q8fuuf8pZuL5NB47sx8UpfvAr2pA9mfvuZterqRkoB6W9yXbcaCqnjczr7LnkizT8ajw8",
  "key22": "2Kiizk51RC7XSd6SY7s1s1ZV2xuHAa1s7rLoe451AvewT3E9TPZ36APnPAQuUHLZnJQhMcrWh431Bp45jgaYX1yf",
  "key23": "3A4ZM3rGGVpyAsLYZkXa18nUHebf5BQWtb9DqrsNf7e3BVsYRFZUQnPGmAbt8L4ihtYjxoLbF4BY9vi94zhHawdY",
  "key24": "3tjWZBxbmKNfeUrZnDrkp4gWjJEk1eNDSx2mYbko7pkz6pqfYErF8woStwFJ6xotApZUadLyvS2ajmbW9UKeEoRX",
  "key25": "346ddUVGrnJ55Tu69jEqALR5NUR43rNUpwKzMz7txp33eX4XMb5SmCyiPgna8p7Gpbmej32p43Jrpa8aJ5nX7SVJ",
  "key26": "4r8eZTJ25t8SZWwvy79cD81BBx5jS4dC3VKvY5f2kASpxQ5Z11cxrTZTnfF3e3YS5HYp3jEmUF71FYa7LTWfdAmy",
  "key27": "4rzUwB1sfoaMtDoZmDZDoMHrE3upfW1Fw7RVTZ55RPMvDqmqiEUnhffPUcyqiUnooDLTLVvbG8XhCZgPqJRaV7Da"
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
