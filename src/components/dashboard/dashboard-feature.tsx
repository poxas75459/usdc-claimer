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
    "5C4ziDgqiSDjrnopweLhJAscF75Cx8qCRPsbVTS6Q5FkpSTjiHLhzCTPsp7HzQ4qbqhFzw9upEF6uXY9ePaZhrhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x1WuSBSQpV9gLNLwbX5uxyKvzTtS9qCF7V1nC6htar5wkJxxSEgPZiKa5G32u872h9iKqtHopyphfQs4pB8S6rL",
  "key1": "5gVxFizvYnDwAXneVaTnejpaCmrbTh37w8FHNS977TuZ8diLCbx7hgBvA7ftCk4srXXt2TRGK6PtDXZjaiGH11dL",
  "key2": "2qUY8vRed92Gixe53hBFD1BwafEyT6Tam4ZWDhDjDqNHH8hEfXDSJGNtuWvpdopiThrxipNys7eSSprTx4knUTbC",
  "key3": "6UnpMtFTyx6z7NAfwQywmNNF6j815zAQitU8gk5JXafKvxvtRq1S5dL2RGsTAdYxvhVFeakd5urdbk5NTBkMiG2",
  "key4": "5JtviT9hC3FFY9eErgjTxKXEQ7Y4gzTzkWzavY8oQNWckBtZonaYoYnETYuufxZwxsEMHj2Hfdw7rHceNqpr3Gvc",
  "key5": "3RjFMainiPVtgKfrVXnEZMZdQrs9tbLUGCyDhPgMedPunnj6nCY1mPNekDf4aUvMXg5C79uQUrtkW9VNi5p68veJ",
  "key6": "4L1SjCodsDUxgs3CRkGScP4p5teefhzowaCsQYi6Jw6T2fnamonUZVqG1ouHVoUrDzKG3c6HV4aaj5kroycQzfhS",
  "key7": "5SP9FJygNs6cf2SSXQow5nAMmFCkeSSpgH9DnDeTZKHH33VTpLsmzmbGxVpSnpJs565nLwvVPzZkAgdBpjh6iZYG",
  "key8": "jtQZssWgzTDXqBCKTi3sM5aPagwwuxR392UUdS6eMCGqMyrDo8c5ZeRqX9k1Cnw7K6a1MnJmx4UfE5GCFeAXej9",
  "key9": "59E9JQSK52SXWoME8BwuYDHr6iJpceCMXdCGXKA8pBBVwjAbRpyYmWin1aCsGhkpuGGkgKPrNR6vTv3AJjzG7gNZ",
  "key10": "2SRDrp4sS7Y194QVLkGM7kV7XEuq7STunCp8UFXxjnFj1rxNAtnvtcJAfzJTcgtXk8rbMt75rfjcYqhcYVsYocba",
  "key11": "3C6tJdf1jGYaKFUdtBGzrDnZkjDmVtEwDBckRWGYT9DdZGA2MuANfJQKx4LESLVwvybTR5VGeZ7LAmzbpt8JFphv",
  "key12": "5H7nUCP2CyorvUKbQBdn193LLzgLoDRyz6jjwWwYkbUkTHtvazPpp2MsWgdF4Tp5hJxn4WsrZz4KBBi77TozrXvB",
  "key13": "qBBNtBV3HfDHrVZECUzRGYLxM7idwXhidjKHckobrvP5hoRXv6rahgXnpyHGUcnPRRnracLfBdAV4HoJ6eKdYTG",
  "key14": "4PeWCxLgRKgAjhSTxzbZpNzwHaNf6nFPHtEkRySf7ueCYLaY5HaWipfFGfmAadUxFLisBudEJSKbC3DFZ1EJR6LL",
  "key15": "3WDq4tUT8u8rb9zoJAkx3DGmzr1RaG62WFRViRD3wjqKsRfxLU237j89WCBQGF5KuizRVytJHEyPGoJxU1PkRN9R",
  "key16": "jRp2MVE6jiLqqUqTDbwP6cibZWFkwyHDFytDSTMJSmM179TeAZnYmd12QvdBPYj62pfVnEv9yNcH5CyQFGx4avr",
  "key17": "3o6swAuiuQmVqyGH6CZv3VSP6siETsAth5cxxPJR8BaMGAxrZ8GRvRADeG265Xa5U5F58QUu5TPsWy3FyhY6YFct",
  "key18": "97YbSeL3yDuy1YrUv55Cz4sGoqLBoWmDLavhnNVujG6raSyAsxXaRv4c2PgYfiiYntBnhZ9xvC3t1Ds8R9Dv3RZ",
  "key19": "4KoXaVUsTamp6WUvYAAZ4Tc5QWFbJib1KqGaLGYozJPZbsbxJtkZeZUscrkqd4HWwvhoViBNvcDraKJ8CZdVrd9b",
  "key20": "7E97KS3oYR1q2Z1euBNs8d9km9Dd16j2HEdeGbff1YtJ9q8QvWKTJFksTmx8KUL1UwK14FVgDmZ4zLDrZeq5VoZ",
  "key21": "31BMmTaJ6sNXpNF6JMm2DZphqLgBNNHrfXUkDSK9JhPuc89cqyjW72RT34ao9cDfupibdY8qX7z4fJWGsHsXKVD4",
  "key22": "66wWv82NeVZ8akh6bahVggE1yzLexPc7G3jCDAi7gtQrQbGHgRoWQ6fr3hzb2H2xTnsuaN9A6rrAXbFunAebeiXp",
  "key23": "3TLK5QwKxqJG5cp4pTUSRE3bT3ESnM6uHd5jbmJYhoBUQYAWCpyna9mwb2FzN3zkXgHmTnSaDtmZwB4gWW3xpYv1",
  "key24": "5Vi7Thy4AQfkYYPsvXdoi8X5d5Zabw3ym9bAuHXS9pboJHB4EaE4T1XZM17h88Xb3N2LJKAKnaBozzkKYZ9dKeac",
  "key25": "4nBQSBAeEX7HbDSX4otHPP9iz4v6aMFG75K2puvgGkv8wXy35tHAhfG8Lx7zJ9mNVBismHAZs2RxSSFBzWPrvfj5",
  "key26": "5JGeVyGzoYihS35kKRuPDyYJ4MKGqY3uGK8cLDiZyehRh6LCKJAUFuPB9pG9TbncuxJ8tzz1jZWJLXZMmBXXPtzW",
  "key27": "2wh5HxjUJr24x1uVhA8Fm9y4zAnTfAGhqKbXs4rgHnMcKEjSUfaP4FLroD6FaYn8GsB5Jwo7EvwJ2u9VmYRNQKTZ"
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
