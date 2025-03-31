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
    "4MY7gDKVKa4bqV7b3ZmnCFdhggsHYuyAMJCPpSzfJd3BDfK8UV3mUciGJ2H34WjbKhPXYAnzYmxBHkVoA8EBHbGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DGJGDTjbi8APoF9fidL6FtUzujGJ2BtkUw1ix8bD5HAyYVEGszdZfjJH3n1Qb84mRDrnC2VrfhMeYKe76w4bwgr",
  "key1": "3ypD46ZJeA3UJw7TaRJ8V6uXDgt9ma4XjJyfNjHXC9DxbZJhim1yBwT4wLJVyBViTPPBhZMMKMXDtytnfEf9WXYb",
  "key2": "bV5ZQs4NwpNsFM6qxYW2ULqefoyG9PzRrzUo7d4WhGJv3wadvuoT4AsELBV2Xs2Qhidsdt9WqDWHoGtgabWb9Uz",
  "key3": "o2NUjayi9NJ4Qf9tQTXFM1yn15TPDprs4NuCg2hxXDQu6Vg7qQ4DsyyELcErwSiYYGomGceCAncgKL79fF7rYPj",
  "key4": "tWXX2Wi4gSVVuycxYb23Va3jZRBdBzvqy5zYMY17c7XJCNisRbVjkVphpuUub7JDwkiUcDvPBBibiapwDBRB9y3",
  "key5": "3sgdQTHoL3VP3fU9eDiXZRin89MWcYgia8HM5631FdtTW8zHzgQsKfuA4Zm8bKs2tLSQMvDM37RTiSZ9vhju6pT5",
  "key6": "4RkVQbsPGQhj6D9bYi563Z8ynRmNGinXCdUBJDPeXxrcRcHzXbSddtuoBCyiTuem6GrtNYxVxrJTZ98q5qnRgTQG",
  "key7": "435vtmFSNLDVisfbVPqqoPzAbcbtHoJEVRN142cTaWE9dP6BukpJmoeaGksVUXJkwD9QAnu77SgdTGHBqfC7qvVg",
  "key8": "4hUtX2gjXMEHK71cpPPRW1EuHGBNNGYac1PPaHx4gLwy2GZ5d7D2u8W67VnbTcJkSeEqRqZKQcZcwYg6P9JioLPP",
  "key9": "5FZuuXX73k7Ks26HmhUKPHkYLzSR2TyfQwXZRhNSzj5nWkHACmAD3npRcCcMzzBFKNqNN2JqPmd8MuRb3EKhV7m6",
  "key10": "ywWDiDHxtam71yjFvN5yQgMA3BiZJdHc3yEo2MMJnRsDVy9DXNVgiqvieQPk4fhbSdnocxjsyxVxbUAA2sjQm9L",
  "key11": "3x75VHFU3QVfv8xJu6ynLqLKwCzksYV9D2XDgC1QtCGykL51pRZQgAP5ZbbbwhXeDUVSSp3SQPUSqeTLCeRH7ri7",
  "key12": "2afPtB9MaFJAwwdT1oiyMeXSxeXqrAJ6h5CdYkTH8xeHZezf3ax16DqQc3Sh5vEYzZHqjyxDy3nSiewYH4HgHgfn",
  "key13": "5ZUauGeGrDvf7Lht4weYKDtCJb6jPyfTTUPyJfBwvRZC9Efzq4NvrE6HUuZuB6zqbMqw4zXSEWiSwp8L1db95UWN",
  "key14": "2Y1shxkMdMtUahpgqq8qCS8SivU6g6GeH3qYN8XAp3zzLa3so4PbmZkWs2gCWPAkDAyHBbnTVaXFUoMmYsanabh6",
  "key15": "4L7U1L7QpbpXLZ84RWGgCYEf9myLxe291yLy7yEjxyKPALPpTcEVdiwZpCrV6qg3PwtSdYLYaL4QFVySDDs4BVVJ",
  "key16": "4JYm6ffbgk6hKRLBJ3onLHxuvfDXxq83BMHKT3Q46dhfHzGKv82YdrCMY82akcvFMLc21VBLRPrYTfc9Nf3VFUUV",
  "key17": "GdcwgBCNuVUcoV753VG1G3UN2YoZPiS3xio54PJqX4XHbh73jE98yKKRG8ERJo6tszN8cSKLHZ9Y7Ld7L1QNedD",
  "key18": "656RJvaRXJGf9o4S7BtiEhaqWyGbpjLchW9bCHrvEQEQoWkh3YS2uKmpzzifBziPziFSwgjga2bX1uodhdcS1X3v",
  "key19": "T4y8EHyadXCMTtx8ULLmzyKi2vCitQKkid7Abd7h7TQP3u83o15JPzoew98cyBiHhPbmdE8Bdy1tcV82nUW3aTg",
  "key20": "2AfymGQHJi2wvMmf19qWJQTBvcREvVrcJiCSHLKX9QY5uYcjwJnJvBUen962yMzUUVtWmc2SLkYkuFt8KWrFcTxG",
  "key21": "2tRxdhmSDe2ETkVoAvdtySmEVxPeaP29LUmvKVJV6J7nFH3CNuX3sTB84XxjeWq7ojKX7FQ6pybYVNkmasiv7kDV",
  "key22": "29ceWk76D6xwfdrfEjawc497355Dx2fKnkXxiEHK7THabTHRZtPoaCG7DLt83jLdfLMuKsaYS4dq2D2ZKWWhwydc",
  "key23": "4LSyvJpa42rkGNP7zg5KUywApyqmSk2qjKvvq73Qrj3324GhqRDDNZEtVxnF7PU9yuEncstYXVWnCNbpYyCGumx",
  "key24": "5hyKvqf91Q3Q6FBX31xYcEfJ9gTj27aU5Q7Vt2atWQPWRZU6ekHantgZNHMTjY7wTDdcP7nXhEyffwLjXAh9pyvZ",
  "key25": "5TeXektV7CA9CrJQJPoraWNpLrAwjes5Z97EA7SWW3vtocFriusgmRLC7A17BQQgQ4vhiZNwqVAetTvbt1atJ6MZ",
  "key26": "6215iNHG9p1BFAgjcpMux5JMHBDAxaSTGdXrWwBvmT1P1krCgPAvogprB3Mr3HjcyeVMb4WdeBYNxQaw1KcNLkWH",
  "key27": "3bKpH27JVsA1NFrL8wLJ7T9UsJxrzWaMUMQfdQbesS2BANFxUW1caK5Tw9iWZGxZJtBFZi7DQFnzLnKaUDFn4whV",
  "key28": "635nNpDCe5HJgiTK2rFbBxzLkz9vD1KD5zeRjoNZzyPxm3AfKH7P9FF5Hs8mCMUcRpnqW8zstKEXoMG8fTvL8C3s",
  "key29": "4aPAqRCr1XBVYgBQuJmLkqb1nWQgDxDPuoNnHxsKS6MX7rB28TTWVBYAT1MPvQZvpLCVmhA4ZYKMQRptEwUMUYTi",
  "key30": "2zJs2JhRMtGykdsXoxS1Q2ByuTRN7XMpYSgAzHq7pQsdCUxE6dZdLhSXjn6f7vCZKpgy7WKjPJFpHKNurmqxAjL3",
  "key31": "2s74hci8Qot6TseAuL47XYPBnyCY4ySXiAr8ShpM1CHhyRwnSvzDV22RewiVfxqteygUrmNNRCFfFhjnzzoFEgmb"
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
