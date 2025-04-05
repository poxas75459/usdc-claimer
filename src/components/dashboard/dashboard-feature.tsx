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
    "2UxYnRfmub1WourM2VzUkRgJvhcZq9KTDyELLrueoqit5ryd2ab3XemnSUNK1QFc6e9aScYXT4SsDdiWKRpp8LjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63poSkS4u5YyT5YohrvaaHW62BtCj1XGgH6rf5UaQZUzyBEPLJ58SdvSbMtTUA57qqoZV4guAFFRztXtEwsUqt53",
  "key1": "3po2WUGxLKA1nvgsR5WvWfWYQBASg8EEwRXuZAkw1U9ya8dvGzK5x2s4EFJvetuqj9c6BGsatBai2bAaGx1eVbSZ",
  "key2": "3rQzAc65X5hLEHWVqS4YRrzFHVBYovwEqbizHWBsMY8s1G1ZzZ234zPsJqErtsbDh3RbRqNtr2jvWD3JDyARjBaj",
  "key3": "3eKZswBzZU3HUefnZHqUGwan3NexxNJvrSUEWnHesiZCs1iBodhQ4sYCZUaaQos9qz7sadhrkN3k1Zs8XXKPs4Qf",
  "key4": "5kjqhAUpgCo9EfRJZGDKb6GUHp5oE8JM6jPjuPr63Ty7CgCrvMVoeGDAGLgKX85LnH1p2Gv9dr3bV9d7PtVrDZ4T",
  "key5": "2SZ2kbStSNo29qEb6UdT97irQ2KtZyoVenMtUKhgCGQrPrxDpMmJJjYVWEfB17mpZ8E1S2AHEbV5uxkLX2FYco29",
  "key6": "2G25a5Chw2JDGVJTD9NRXcatPe3ZAgo2AXyiGcTcEM2N11hZ1QFzzHE9m5g85PgNHo1Wpjs6ohgAE7UA3rHgxFtq",
  "key7": "QF6MrqveXzVBKeYWTBTJbjX6KTGRqbeRKYfqXbTvcdd4hfM2fqCLABfMy4s7kA8iTg3cVpeoCG4uexYjiAf3bLc",
  "key8": "5fzMb1DHCK2DhsF5H7jwqnw7znyxjCqcfncwo9V6orfEZyLBjj6dwxKJzk7vLn4jwPFoombr5nR4v1QmLpkETiX1",
  "key9": "2enS4zD1aTifLHbNFs8jGCzDAESye7erj3wRwGnwVHBaCXqaTY8vQNXfmR7Ku6L86uY9onVqruR5drHvYZ7HQMpz",
  "key10": "8uSjWX2G3nYWJnYRq6wTEVS91eHyazrzWDH1Hgz5PynbvciEXG43LPVR3mLx7EnkjVUMeSn6YeLHYjhukVouaVU",
  "key11": "5yooCxzRcHQcsjrshhRaD4RRKm9ScSmBFB7CXDajQu4chUrypYcWrEcdcbTxqV7hCPwpHdPMGK8dg7YTgpwaZQrG",
  "key12": "3y7MeeXhRhMz88jvFr7pNMeFjeNHxejWHR1ZUPSqMdBk1jdXdpBf4PizDT4cVut7umTgCpE2QqzLkwYF5ATvJv1M",
  "key13": "36YxSvWr8NdhyXB656RubKXdvh6jeKqDpSrB5fkQYxfeuMkGsFFGQtbth6apkkxET29fQS398dgjAnnDn7y7C51F",
  "key14": "5eV1KgMLdBTUo68KnTcRAErhjqU1WBEF9ychgz9wrXBh3Ym69AJYVqevmWMMSGseu4o2atvP4VUsuvsuijaKBjPa",
  "key15": "4RqrNSZKKNxtkBrYKo7DCsjRXsqFpVBMNHomX8Jp6uhGRuEEbvfJFk1zBSguW2JpnqEJzXysuu8UjGc3r8TcY3Nv",
  "key16": "5YFhv1y9EfqzzmcAqd7Qi69yfuoDTMPm9jSZZHZRoozH8rC1XVg6miHWHatRnk5Ptw4Bzez4iRMguJGLEHJdAaup",
  "key17": "4dPntJwEyKcpyHp5LU4XaDy6u8V9cHvMrPPfgu9tkxa2QdtT1fyfsSDXMGV7BnCnkh6VZKBWozYuiNAp8kFTjGzN",
  "key18": "5GRTzLrnFMsfKhxmmoC6spQ9nNHaxtpceNWfmtGGNnTsmdU914ZfVCESSo66FphWugZx5ZWaTsxFQ8Xj4nyNbM6e",
  "key19": "4jzmdg2ZkHooa2KzcsbazFt7RQUG5gsc6TQM2H1ohspqMD8iVEkR8Pe9CnLQUheksFuBpBQXpGsghoPK1jEB7H7R",
  "key20": "3hMqfME84cdfmamYtCkV1cFujKVhFq3YbbzSb6DnyTDfCjM7vzkdfsbkDZTd4px2N6QbnEdriTTyYhuxKrWDz8xH",
  "key21": "3SDv95LLxzvzaYhyEPe2r1w9mw469T759b8prXZtEbHxHZEYh6FfVnohBcos8jKTpRLWBB7wieUvnXyWQc5MMTmf",
  "key22": "tXq8RiE1aPovmsZibWvcc4osHpDLqkNvvYz4uUXwHdV6H6gK37Fo4ro4BhsY6XxtCbpY4YdRReTdms7RkXfQJ13",
  "key23": "3YscKGbXdmfHEAMGy7gA2obMP6wo6XmXorrgNPS9jDcqURwbtEiGYoti9pXhxp47fxKs2aHtqMbqgVxCJab1YgsG",
  "key24": "L4RanAjzzmfZskV3hTtkd3zuE5csR41uCxYynTKpSwrvsKScC9AL5cZkQ6WavqsPtFGnmF167vHz7zs6ikNs63c",
  "key25": "5NgSHHXzKXJ4E99355BLNnV1QaLTysm3vWxZvp5d8MWND7JEm88U1n4HihCdp5vBKKU7ZzyQw7GaPid4JJb6dz5k",
  "key26": "5j861QYvDZkmPf3wHXjXchcP56iXhmhnxp8Z13Jtn3wVkVJBdCnDiZwdnRg7Q4atpanxyigGSFQfByu8xkyjECnc",
  "key27": "2aTMytn6ZNp5RUQgp21Qy9ccaYuGaZqGCNgNkQEdfJJfRSwaFnHSrBb1YWn17pEECYtF7o97wy3r94Ch63mh2rtu",
  "key28": "2aZsdQqNrxUwFKg3J5xhJhDpjgZauBcnnypgacSHRsoDhJp41QKZM6qbRCQMhu1YU2NKqNbypk8VP16CphKZWcmx"
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
