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
    "5ANadURZP7eKp52oQzTeAfPwu42kWJkF9at51PvZFrLjgAXsSNjEySb8vMWwUsfTHe2uDYaXPV3Aze8je9x524HK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hQSfQPEFu3suFV5nDsRnuTqArePJMUwD1K3sadwLZmShKeFL668wua7LaM9XV4cPCZkH1hRXRs8YNzVZnV8bEXn",
  "key1": "5rDjuQ1UUXqRvo4xx1jLiuRfuz7HfQbx93Jmvv3nw4VHUVU3Po3WK3UjY9FKqLi4VbbPoiqcvuPZHVZgfrZvfbJ",
  "key2": "2rFiridEW2CJQNd2112sP3uHmuSbxkg9TXPvWeiW5Ap3kdTM9BJCFS6VMqkv91Y2jb7oWTFxLDLqto8v78KZKV94",
  "key3": "qCQCMJse87hVPP24RhoPiH64vpykMk9kS1ehjoHHroDA8zEmDx7tw5KFPZFUVqXcyXtYi6crGbboKdcbPy2d8L6",
  "key4": "2b3iTGrMENzTwSCFiCnwEbXcMXBzsZp3JvDU62Nz6pn2VJWy1ybhhZGyHkezpU5fmjcLXTh9sUJ5tGaGiJwe5fVg",
  "key5": "4iAcJpcvD7NC6D55kxCVRk6NGXEqs8hEYZUs2JjBCWnUaVCuoXBcFK9Bd5TN8fnGchePVA1yEgSccjrrh7UqkNGu",
  "key6": "4i9wzcDiXvqykzhi4eLhoEdfXFjfYw3HyjxPa9Sk1PxsPrcGRz2RCSQzwELs2PUY7r5b1btfPVtvGzP3krW7G3Fy",
  "key7": "2db5ML4GriGQGdbSm4ykGo8d2ZWYdAWpGVxd9KyGMMXtpKodVNK58GJZZGjsAtJD9nMos9L2WDTn1kbtbwoJguaN",
  "key8": "5jQMf66GbDVdZBA1EX53xbrc3DHtYbjRfDUxw1RYf5dPXsuZndABuQdn6kZnyDNu1H9QMRnZdX4hxpo9N38rZNwp",
  "key9": "2jcBV63UxuM2YQnFTtP8DVnccYG61fjqSN4xHUujPyazcvvSFoktDNVuKHLeh9GQJds1QbZafRGB9KQAWYsn1iFG",
  "key10": "3zHetRFkeVGEsmNrSLEJy9kefzUFGwZo1wU7vFhNtkDZHX8VCo2kDZBs47NndbmtYqg6JYpyPQ7AR51Pp7Z7CmzJ",
  "key11": "39yXZ61RjY5ZiyPXmt89Fa6XgGm4M9CxTnQf4XwkR2ZKFkjYdncDBQfEi8hGKG59pK97eWL3Y224bVs9FkpG1v2i",
  "key12": "3Zz3ypKMva7hLmirJ49zYKaUoQuZ2SHuV8fqoUa3UP3x9fFzN16qTZUrRw9sF1MdKTDsLRscqo889fWJLRXXvapu",
  "key13": "9fZxrUDsBFN2tLQymsaPwjZjWnkkUnSkNXmRHJeX4gK4WW1frnMKn4YfYEsZ57rkX56d3RKEPVXqts9XkgsXbKX",
  "key14": "4NQW5zuUpZAZXtK2Lj7nczqCUwaJoziuGbzcpYPz7KUgdVoSuJ2xe9yLNeeuQ7RssB7pYAiXtpPsZRsD26qE5ZZ3",
  "key15": "5Ah9LLEgF5Q6KqhQ8MKvV2hb8jCG5bhnBKnPjZrT2Mwv6jTnn1jGAGxTnXAQ1D4LYQUn9QBT2ZehnxSaxB6fevZP",
  "key16": "iChwxCmbqXHbXEW6ceANWXRK5nFoWwrs7SN4XUF7YAwrW5RSh5qB7aQJCSLsGJmFY3AZWUjXHD6MXKmit69gUCx",
  "key17": "2hTSZTaAj4zzGzkPcTqamKVFUc34vmCjJYdxqDypCb33LWCXCJ7Rx648j9ArtdFRqVnmsJKprrBjatDFio6dN1t8",
  "key18": "4kaeTFkCotV32LBctuRXSkMVDJFrap9dQGzokA9F8WG666i8NnFA4BcGJ2cyeyChWLtWhXiEyDvKf4NDZcqnp8CU",
  "key19": "2EwHUuA5Rv5teyzUSuckNTXprooZgNUyuxKLUxyFdBWUqb2SJtBMx8YiTxeEbPUBqV5xuHst1XTyHcgCnysrwLEh",
  "key20": "4E5mRLSK8JkcpnBi8JoaTDZZG7RPswLzdCwAjKN1WBAfgWkTt6RKwQ7M8wB9q8caJMWABpUSb3YQ4WPNQPwT83w",
  "key21": "rcUyBuZjj7ExvtfEgeNEP4VRHamQJ5sCVEFyV4FpCvaQHAD5wQWSd8cfXJZcAwWxFWVjEKLGUt42vzWcF19q9nd",
  "key22": "3kKup6wRif7V9WBTjRGRZHgEreL7nHQqN3ZLYPDFT9MkbwLeqgk67bAg7Shk4nYFFmJETjsRqMuz193sf5wcrn8X",
  "key23": "4Epn7fdMZtspJmoJD6iPYKDvawy58U6F6ZKY4dZHg2hNhn2h1yzhEPyw3NMVX8FeGoirax94tzarzqmggKoUAqR6",
  "key24": "3Xr4LBKeu5iiesBX5QaJapxgDiu9nApUH6putRNZyrTb7hFA9CbTUC5EV879G9GXEH5TtRxKixqpLXFFkeQB7uh6",
  "key25": "5a43UkH9awsUK2nCGDJZRX8oFBF5aULCaZSbeYC6GwMNcqnW6N3DbLjgKyKfiGj2du8Sth9jvuMyVn7xmLV2urN9",
  "key26": "EKvkPtERsTkAYibXKRgkfUW3MQr6vmSrnsq6Ttv8ijo1eD7kCxD9od91J3F242KeZoLJbPJW4WHt6GNZp4RaBN5",
  "key27": "5UTPPf27wdqRKuq4YScZeVJzYLhGga6DnXBT4U8Q7STJoWfGoc6s8eFTP1SpcGCx3whKcJW4sXrgR8QhVCarZ6kB",
  "key28": "5vbatueiuPMkrA2iVpmCjbR9o9Zjmgz4weLkjbdVWb5vvcxyHot2ZnKYJZgVcTeCeNfte8xvcJBiWEPjv9GhHcNF",
  "key29": "2jeqkgyncGmpBFLhqToXTyz6KwTrdfUMRwpEshnFD3wQzD4SUrqnEeqKS1ijqEQAi12tVErMMLthP4VMvtmAXYBh",
  "key30": "poWHJVYGQdwUc9iipRQvfJuDUR9iv2or5YvQhe5t5UvNU3v7sqVGXTGLksXdntUx6vnqLJ3jkbWrvejhTMeJjZz",
  "key31": "67BaU6QsxWAxTh88WVipmrnGF3uVJxMpQRSHtTuwohRJaxXy4Kuy3MpSwhZE4knrWEWshjfLQxCGfVFMkFzU4MSH",
  "key32": "df3j7NJAyKNNzYDXRoiwgswvugRKUbSuWbMrPUKZE6kuqL7bA2H3cWqAGjkAZkAjpsvTimeof9Uw7BnFrH3mnmD"
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
