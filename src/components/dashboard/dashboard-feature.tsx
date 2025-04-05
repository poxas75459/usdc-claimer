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
    "2vvZT8PWb85WX3Rbw6XdduHuuxFWLfi8Ww3XAoge8pd5iocf1gs1PDGWbLmPrDmXgUBkzirFbCSNaxxNdv5ncPAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MoLT5LdZU5CTCtPKtTCAZ1EQosWxbQ8VrVEqHkzz6jQTPnvVebNYrZPFppYjL7AxWSwyioGzwvXFNCZKvSZnTqP",
  "key1": "4XJXba7iT7nxvYpLfMa8htRLqKJpdD2DkiJkGpgXYGtgVGoEqBZiynY9L96vmAx4QE15aGVRUzcRgNpood8zgvyi",
  "key2": "3ASjXqEmgCdXCDebAFKwDB6Sz7RMmDm8CeT194S1iWGNpEi5wTmyLFuWphS2icgponsQDLcAWG3hCZ5VqVSBQJeQ",
  "key3": "3JBfHMCemZ2phpNzP3k7MjW7PU8AK5cHsUpiPXMHyqu53YjSRCc8dVQ2z2ydz7Wuf3ZxV9YYa7NupXMPuu99KGQ6",
  "key4": "37LL6zYRp3KcFV7AeGGWgsiFbvRuRLJPfp6RnUrXFyPy7FvrpBF8xM9ZUz7ujbiqahbkTZJXNuz97983hKmFxUbF",
  "key5": "3HH7AoZ21csEtFciMpJ5NYT5JoVPjvsUcoK6dRFPQ2o8MyFZrp5g6GjHGbXZcAJmd31sYSau4tSLzEaPopnqkoB8",
  "key6": "HpsX6dw7WH6MzkStf3p1wPkuqMsEp5Z37bDXyFwJyfbb3ymzrhNP3vKBLLYCwDjT94fxkB75JT5BDQPVvcp4KhJ",
  "key7": "5Z7hz7njjx52VdbVv6QRhqCFFH8KaH2jdmbRWMoEQeqWaHPkJMkWNLMiXfbCSwxn3kaiZTq1mctwuSLye38fvUjP",
  "key8": "EbMVsR4E1G9qsoQKYw161U6PtvKXWn5g16cRGBnHBEKX7XaksGvwpG7T74i95PUyG1QsVjLzuY75QEPuxqGmavT",
  "key9": "28p33ocATDTsP3KDLPAtJiHfiDKbmE9NvtjYfRFGKxdRTo4sg9D5QiLjX9nKkJE3Hks6Unk4eJom4r3YBJLbfSF1",
  "key10": "24a6xiKZnhajHgVs9WUEiwF6rfiHbUSTKaAatY22Rb6kWACNmorRjREH39tDwAFFgGmzHk5xbv3yXqWYGexRZZMu",
  "key11": "33EzxrRVX4mFvKYtQfCksnFZMzFNdJmbX7DssoazZZSRqZur2X1i6a1fxjqrFoGNffwm8ipcTmdys7JRQei22DnM",
  "key12": "tm1hC3r2ejmqBhHCdFKQpiCYHUasxMqcX5BFjn2Z5nhMetWvJgxTFe3bNdqPcpnTywVw9fDRV6Mp7XBhrrda3yW",
  "key13": "4kbKcp1HpRpw2teWaNcBL75BYegrCKRoCbGydzCCASNucTnSKKG8cT2mJBhcwDdw2nrUfUHHuZMtiQZvkNgW7t7L",
  "key14": "2vYwdNGq8EmFwxa5p3HBWfdAkAvLnQaMntp86Gtj8i3mK7fxq5cgBBxgu1A34C6zgMfMD8chneToJVEeV76asUZk",
  "key15": "5YUY6U3m7bcAWCxANRtrtSdVb2dhwK6ztYVVC1hqs2C3iVrLFixxYhNRRnXMwq5vU9NuauNiCYfN9g2VpNsHFjdi",
  "key16": "xybNSmf3YMeRGHLeq3Sa88JiTGJSqXaNrPuPytiuPdRUg7BjDNLJNbQEGcsGeghG3YAoCy7sa1TWu6YogAUviBN",
  "key17": "TgewuTeAabKEYbwNXrqKKUe6F65qdCQH2TTrCZP6rqi1KSWzFqBfmiayqV6864kmiLto4BgcUJJCNAcj1cNVmk6",
  "key18": "3LBcdt7rGzZYrYoZTivabZdmo3PBPpQAbATtD27AmnPQbV5NshZ4h4XVhTgQJd9fpi8Ma7hvXbYdztBeeDEKkbK6",
  "key19": "4K6TAPEa76v8iX7zJw5qDgjfBK3u7eZ459mumnZE29mAid3FnBcYP4m2YErpUBMmPhN8aAJUe6Ndy26iyiEknbSP",
  "key20": "3UaEcQYWLRLKZK49twZn1gLxJVdnsKWqVr5ZZgUxBFhXSAdJwH87MLdU9AJtWoVwAGMQZT3HGWTzmKosjJjukoCf",
  "key21": "4e7HrH7Goj7NkJijQSENbGYShhMBwpSEtwvjMZQG52GHTkkT3LnbN926FMjWkJ8CoW9viAR4n5LW6dyzRUDP8FRq",
  "key22": "4cMDtZPzcgj8wz6hNhrasS9wZGePrJRfNGQ8ScZV6sPEz48JTUVpY3yeMyeoARmw5C82idQP6RiwQDGzqUvtMm5e",
  "key23": "4BVx4pB6KPVxhxA2gicFLhnXX5CC33RKdsDBBirG7Mur5BJ6sTdY8PpmbYztq9FWdNnpUjWrAYQwk6ijc8nGnxJ9",
  "key24": "45MRWnkqR3ejtu4CMq2tUWkcz3Eg9uua5q9z5Pfnc77Ko5T2sRe5x5ZK4myXe2Fcq4FAV67Ft6ZCzmxJPdmkiz4f",
  "key25": "4EzheXBKjsJA69tG45PpuWiDX3qFLvYPzMjM7YVxKDu62dJUXQf7iwwgqhoFG8CZWzxHLB7G5cxnSteQU7UxZFF",
  "key26": "2sq4rmYjWcsmncxk47pSG5bz45EFVBv6LkC62ULcGEvvYbjkUQysc2Jo788riAiHBRFHT6zadNbkisKbyLAuntCo"
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
