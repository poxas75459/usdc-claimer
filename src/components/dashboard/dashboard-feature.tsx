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
    "3TXdMnUA24uT9V8UJK5FHWSLTjhFUCiDfUy29dKNoaNj6Pzr6rWggcUxiJBuRsnQn8Xn5x9VivR3w3t3HZ43Jfqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JM1R7m5GEphHDNsQd7kPw2VxBgiHM3hPy7B6ugqANXavx8BqFYe7XzaF9Dy5ZrCWw63h6m7YCw9A6bizxywkqcU",
  "key1": "5pWj8Sp9ALwNgFSiNhunYKr1uWzMeSLo89e57EnE22SLrbovY2CuBiMEsLxL9YC9WVfM57X2gb9NodHfKAozansF",
  "key2": "5YRSVnK8WVgcwvcfKavvAya98PvkXa4uv2VYe7uczd57tR7us6hYzdPWMfDKSDWSMpN2itKRMbeGcaW567bzSHka",
  "key3": "3xY4YDY1pSBP972r2yELSBqtgswyLiiyyssuHdR26WeCcVGNh89BDpZt49RCYGFfb3fMBHtEQUvwW7kKqnfjYwXp",
  "key4": "4sbRDfjrxDhrn76gntxSME1XDu7v9T33ityocWA6PVJcVePHtfyC6bysxR8ggCgyAzjGhZVT4k6ECdWDDaBTVMmh",
  "key5": "gMtZYqiWTsRtBPUvZQK455jXFiYsyaW81C95WTDh8R4xkR8xc1EKFqCtTLtRfPx2HM3tjD5qR2kK41UDDUN89uL",
  "key6": "4yktszHkJWZXBvVies4iCcbX8rMigzBaVvwDMPKcd8dDh81gNJgY3mqf26WLHLXaTaS1Eo7UEjQyQ9ETUYPKwbJf",
  "key7": "4MwvwzUNrpozCE4nMLawX9eJ3P971N6nJmkPhqhWbQWDPW6JCiYLE1VREP6i667gXJjRk8hye3wuA7cggJtdBsTW",
  "key8": "2bKV9x3dvkwVfpSHS54AoFezpmRnWtWWYgcuPkHy6qsB3tDaGjDvLG511BPymzk5af8gAxa4ydw6M9zmUtWJ7Jdt",
  "key9": "4dr49MTx3AYphC5X1B4GMDfDaZhVMPmG5QZFnxzX64gj4yn69Qvu4n84GUXJ6VLHpmRXCFMug2gzYxUPNddGuRz8",
  "key10": "4r9Y6vtDdmHqifp4Sygqrf5LZXZEdDK2vN95NvGHgJEPC2yfMp1199knDSYDLu2BqdzvT9PoR1i2pmdFWVq8sauQ",
  "key11": "5Gnwap5nUnQH1yJmjwrvqsJtitYRoMmDK2tYY9Q7xkiU1J1xpYZYFkL3KpsXswWJLTZWwjoEAjxVZcwDns45XNhR",
  "key12": "2pTKuEbGAZj1ony9i4XWtRLutoVucRR8y4Evm9KUMySzCcWG4rf8UFEAEwbwgBNnuKEbRBsQHW3na3ti2EhbRgSt",
  "key13": "Wi1DqZYq6bEDZh3tEzMFRrVqBXcJQvWb6EyUUNLeJZ3EzCZhZrWRBtByd4dscJNfzE8GNCCZ1pKkH8vjuyx5mbi",
  "key14": "3XhjUiu9J2Hi7AxphmAtXtx9vh4wnFYpvJ4fMPNyMuY6hiFL2rnMuMPAxuevBkMTVam5HHm7ERAnEW2Qtu2JW1EJ",
  "key15": "dNv2fvdubHxJbiMneFbpRq43KDJ9RsUASYEHTcHorqYm2zB4PLDAKTcFzVtdTZd4YaVJqE6nJeTMuR5iaxo7y45",
  "key16": "286SVGRQPg964RgU8RcUBReCki1uZujJ3tj5zZLvWwDGUa3JwUuc8rMqX5FFCvcQkvYP4t5tp4kRGv2f7HVQcEpn",
  "key17": "2sLBWyPsuNPL7Mgg37SZ683KsjXDd1sDb4Uhv9ydqTGuPeKZgtUmuw3uWY41HkkbmmZTNKxgCXALJBLzJdYPqBcP",
  "key18": "37TRmoqbTodKNUcYQ6ro5vXmAPKv3dx9kBCdVNra7418AWwPz3a3W2PpBvsgbiE3BqdNAJZxcE2JrVtABVMQMpba",
  "key19": "5hGpTogESu3Bqt5ZFrbT18CuGYoB8p9D9c24e8M51dkhnUZaVtW6513pKCzHpEEjvKigekcgNpTq4sNfrmZ3aFrP",
  "key20": "5Zds45rhvo7wZPyKoTLuGGeyW1bA1uSs448Q12aHrn8XvDNxQKB9VYzZsogVQMZPR4qLCRDL8frzudM5mnz6JK43",
  "key21": "2rMXEB4hzJ7qTq9gkEvNT62TLFnKiuVUmqufDCS67ADFuWUadMPW6CNS7H2yz9nmzCxSs8h6GcV145bkkMhv7oV5",
  "key22": "5LZuE9QXz8vAAji8FVgMNb2WZdRDq3UHm2vYs4vx3EUsjfc4Zin238G6ySGawDDzJ9L3QSMKKFdxe4oCcEX1f6nm",
  "key23": "u2utMq1R8h9yc471nbeYpkyWEVi7fcaGinvHFzCRzcxShQiurt8y7CXfbmYcjDsyKRiMpuHF7irjut7qXoVsvyG",
  "key24": "5CQc2aiKckEFS2bbZb9sWLRFC6Y2C9ptYoCkfrhXDvy93tBpxJ3GjLDQgEA4C4qg8q9ujr13duhhzDzSVLqXjGYF",
  "key25": "3rCdTVpUiuqCu6oj8vv5kzfsN5rUwTBYxTAhBCe69WDqfBX3gtjHvdTfjJiSe9Lfh2wvytby79XTvATpVjqp9BPo",
  "key26": "65KjceXsV5WqQnVYgrFz8t88h33ST9JpoccKHHWdAaG3mSBQJRKNnvMSbLaxDjuoPcTLm6EZMEHEy144PuLXU5Mq",
  "key27": "4BBGCrHEjfNY5HyeLJG2LedW4qDccoCgYKeLj4eLwDi2LwyKbPBoxGTUfoBnejCPLTWvPPHLVmeWXhUizvZPLEAN",
  "key28": "4C27etKN4WKXUNezb5F42PDN9dJeLhjsZHpSTmvHtHaDtgZnoyhAK8VXjsF7KNAdku2T6ojEktvhtBASPoRu5BbR",
  "key29": "pu7neVkEDq9FLAychMaNeoHWN5p2GqDCrU961hZz4PnjdGLUuEsVWJv4kVy8xphejFDtyAXdE3tYsx9Y2moG92W",
  "key30": "57P1t2pCf2iZRQnTVhnhw1sDd8CGW7LrqYWuHihzUaDmPn3GugasNxqAvv6LCKD4HQ3anxQg5KuQj9LU1JX272Uf"
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
