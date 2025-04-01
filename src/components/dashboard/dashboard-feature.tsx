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
    "5c6RXR5mJQLHYwpUCZFkXKYu5Gb4vg11A811RTUFdMFT7yCThqmLGaWuobBZxRcG53XwH3CTRbffR9XJyvSxGf2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ponuw2rEXQuQj1fwFPBh6vnobeZ6LE27RdEVkkcwLf2HkrT3fM3LYwohtdqQ2N7JerpBX4BJwvShjuiX2guh74X",
  "key1": "kxvoD9ubT4DN8tyjgMKaPTSNW8shuxncZdar3w94a3x4Nt4aZ2qrNYXnAPftEKyLio8s5edbfcQS5D5Xa6WbTqp",
  "key2": "v4ZDG7fjgjhX6ExAUJNwqkGS6Agbw7mZHhXPs5Ghem3e8hqYa4u1nZkv3YbRet193qRd3UkQwACDvYk29iJMFAq",
  "key3": "58MqUE2Ku46hGXgoW3G1jDqspo33YRd4bR5jVxFofoife1wJ8nsmf8mSNJ9p8cgqutSBRd4mFXrNg3v9iD6SuaYh",
  "key4": "nd3cgL468paAwZHsbKrAsZfjB3G3jdNBT3kBdPbgXt5pne4HpWPGTZt18skRjdDpjJsS6heDqGtLLh3Ut4gxgZx",
  "key5": "2QHZE2ZWggztZ37cUATQTa2g1LYY9tUSQKBZKuo15ZCRbUmkEebXNZFEroFbaok1KwzjG9hrgJRXksuD5nkXSLgH",
  "key6": "3wy15BxDnNGmmPMfGvt6griKHBQwyNYHrJBxnYpB5anb6aWWRuVFdpcUJGmAZfAisnZLWTJtB8wsiSvnhgEMrroq",
  "key7": "2fM9Qnx1cmuMkyJ5WJnDnhRsVxPJGqFL1dv8buESbgMiKDKtnkzSLdWGL7t22E3RKTcWmT9jm87yfeciHc9Mn5DS",
  "key8": "3rnfWwx8qN3HB1CEDFMfgYPKS4kBkrZXhzHTmwtxriUM2n57txVrpueu316XQgRbaBHACB7ni9UXVdkkJDeiQix1",
  "key9": "3yQ4saX6xzN4KoufuSGVySAMT1FSkXS7z7MP9Fg1fFTwavvneWhgSe7iRuC2536Zzqp8pfuVnWtkzA69WudehksZ",
  "key10": "2EACnr3uJA1d9arWio6KfQW6nTaCUafDbBe3fvu2Uh8GApv65qQaUC6J7H2RAFaDf3PGds1cWiAcczungoKrYRSW",
  "key11": "3X2amBsXoaop22qagVEUcH96TNgpxZZZ4xy6AXTBTB1myiZ9WPU6tgaQHZmjLh5EKHhtRHTnPxk4vihRiC3MSwzh",
  "key12": "5MBLRtR4uLEZh8tSA4storpLd1tNeUSRXDkvrskmRQc9atbjd3Wa5ij8LbxZjzDdkDKkdBkt25qgxeStXmZ4J3LQ",
  "key13": "4Y3Lv8mqfvjo84R5nTRciVjox5ZTjTAY3BgDYUNa9BtigLW4e5Phm1Lapr94hdXfxjwWiJKy7ta9tvoYFvrFtCGx",
  "key14": "2g19WYgM1cpNciHf7zUrtZdHSGZUbwxdCDiD8u85CTZR6BbQTMra1wQ3iB2yKHfdkHZ3Umv4aYoVu16jVAmWm7ny",
  "key15": "42fvYu9DiCb825iPz3hq2KCr7S78tr4DGuCGXvYC7CTFRAZZpFRegNYGUZKveaULvqCxLBxA45VnpW1P2Tkj3RiN",
  "key16": "iT3acg7MvS9MQSM74mPj949J2RFGPpLnUyYTBUJGT3SKmXze2QnX33GfzAt1nEGkqRh7L3pKhgVg8B9mGWdsqWb",
  "key17": "3mSzRnWfq6V6a58aYWqEV7pN7BZNjt56gSXC3AGkVkMwdFD8Y44FxEqnryGrzJpj6uTSRsAUkwibSCyQVR1oE4YK",
  "key18": "4536MMyQqchCCV6KKiVSnh8eCv5ptPGx7FRXvYCoCzEmZ3DwYy9BjaE3S6XxfSfNX4YiDkKGY1thJgurJwzHbR52",
  "key19": "3s1MGsLPTw1bNKnt5qQbRC8MBvTDREGq2vmjrhizw4EcgBRaoXsCQntUTHQpezAkYpEcLFNdg4aTWjBqL2JG129T",
  "key20": "4zVKGiW82wBzTsS8MGy4g2ijcGx7QerkYM8pjuVTNUeH5TpF6DqBZpZ5w5CAuVtqgfMhBkGAhDvSZS9rJjbyVDSZ",
  "key21": "MY9UP9gS51nXLkcosE74wir4nJgioLh92yiKZskS9rpoFixJgGaFyvjfsD1KFg9CpMhhMwUa1ebHDQaCWt983fs",
  "key22": "3YyjzLJRQp9chU7Rc7x9uTz73Qv6tgVB9Ejc6u2PhkSWR4kF4SwPQpu2Nx8mFyRidh9RG6jNRndFhooDsVQUcpCC",
  "key23": "3GaedF7pMt78SKC5sphJM9TuECFHPM5S5G1mP8jn2iHtYjLkHRpYxCjqSfoapTxgiJiCATadoeRsv3jyHymnD7CA",
  "key24": "Apy7CZVVmJ3E2KQnRPnvjsrxXTs1ydzDuMy8LiFqB4KDndDsMbAKywBufhJNo9HYPjqQgBDQfWBzESitakB6XVF",
  "key25": "4zpoaWyW538rKT7ELrMU6TDRNm5ik2zQFDfzDGjH4iQkabXLgbFZA4AEzCTbPe5HUfDkj2BQLjsRzsimUpFGMgsm",
  "key26": "2cKgBmHiWgNuQeKoxDS66gjpDdzDj5aJDHEvvfAhiBrVrCdS4TsGG7KQTQzy8DgHy82WGt71p16V93suVMFq4zGu",
  "key27": "5SxZMDjAgnQ5eMME34geABN6qZPJCVjvL6vAY5eEfBbzcLo3SSJCavvQVNMLBRnrmSkeUa1P6nFSqxQSbGo3tLWV",
  "key28": "3NSePuCgUpqt91KPQBz8NRLFv28UchSxjH3JiUBqWbnAa4bJMfxote66N9tuvDdN9RZUgupmsmavSCW8HwBdxFDy",
  "key29": "2dTpivBnR6wEPsm25tnGau7C9Hm46aC5jvDoAhESePuRusixP1c7c5ByM6QewrQrgZ9gqBtTJwW6nghXnxFMe6ES",
  "key30": "3hkT9kNAKUVtd3hQiDnY19FEwbL6DV8C9R7FxoGKX3TyFiTHtBKFzDb2dDJQBkoiwaWxWKHYa4VzNgLK8Qui53wM",
  "key31": "TXjLuYyMbE2w7vXsrKJCgnr4Kc31Uw97AmejLuqkyXGzGcq1MxS6q1PvjK6i1FazSLEcLRWEMNv66k41ENwDsat",
  "key32": "mpQi9yF4cywkkbWmusEbVDJvnxjQAJM8eGLE5b3VViXvEKRScJH3hr9cRoHjCtPCWaM23cGry8Mn8MhaYnTSMzp",
  "key33": "5arvtzhpjkh1jYiBccMxfawnV4g5FwYszsCyrF7Zt3W6n4rizXH3QHUoPsHVSLmXZiYmsDDeRAbsTQNemHmfWhK7"
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
