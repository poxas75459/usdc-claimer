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
    "WJvrCDrpwQLRYAWnqthK5mdkxmFNPkFkebNd1tm8FcoGR2FudE37t2ueTmsZn5W6oi5XTYKNMBAGqPLhdT5YMBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34zX6w6F5fVLrJM5PcuE8k94kBZQBnfuSKd8RkxZGv7qbmg97fH6GXdmK1XCPYc2onrwiFseEQTC59daAsUzv3tW",
  "key1": "5CctpfPWFh6v8RdmJ7QK8NwemkQxpTtQ315sZWT1AuKncrHhdszYtjqfe2nu1WoEP8L9FkmtvGewSgX4TaU2EkF6",
  "key2": "b3bsbW7ZTVi1QM5qfbgVy3jidG5XWnHJPSyL1bSourBiumay5ubXL9fhpjZ1hYuGgVbWVTQA2pYpimEmoAT5arr",
  "key3": "5kFnyWSUby497xqWyhdVtdM2HhJDYF5mVz34TxX1qbhw2gP8QWpHvh1SiHMNiQi7vXzZWJLad9dt9dDa9Z4vc9UH",
  "key4": "5bo1pvZc9q1T9dvrQwJJdBLVT6GTc7faQ7FKjDPh1Hx4isFHtZ1fVqbi18uT5U3MimRkbJg4C9m6QRsV4aUHgAew",
  "key5": "29w7ajSBteUbZcz7JuNqYc3R8XaysyVRToeZt4UqmrgMqroSoCXLz4cnRcmzBgvq2CWbEgPi2oc1FVuaH3eB4Q4y",
  "key6": "DTyBXSa3x5bbRahErtyrYYUyKDpsFf7j7KHmNNqkDhuuVMvsDUQP93bEE2Az7NPsjG5Sva5TxdDUFjRJvPpUhWi",
  "key7": "3xYLHuqMdPQsZ5HVHSFWLpGYP2Fmx3ofKNg1zyZxrvoXsHW6Wz2EGomkBfCRLDrVSCiJZozbr3TgBm2HqMAgrG4s",
  "key8": "53ZTQUCSa4PGGiJMWuunHqsCbnMjjS4AmueCsiqE1r51asidJQ7bEZtDNCgqG95VdYqa5G7sPKiXnS81dc6iByuv",
  "key9": "5JHrVYQGSkdkWqZ2kpYW9iuMLLYxK3AAAoo8dpDsdTZyfeW8oM9m9PrXAL6EJ6Pmqy7dwJgfQT2FxrUgrAcqxSmm",
  "key10": "5gbWAPtzCM5mwvu8cZx4qNvxAwvwTKo4P7eZjMiVDaVR8SUfyb4hYLXiDZhkQm4y3u5bToMg5PV1T2qAeXhJoWCV",
  "key11": "55dLkPERkQiKkSdDVYt7CkmMXeppmeRKN1vDKxsREb3Z24s2zu8zVHaywQJoU4rPSooYBFnuQgW5nrFptGAwzrYp",
  "key12": "31ZqVzwAikxfYU66nsB4gxwuQaXTbZkDAzqYRYDcTpHAk9xMKJQNdd2gJSgcsPiUf2bXTn17o2hUThWL7KQUFo3k",
  "key13": "2dc3gcxvVNcBgfTGE49gATzGrWdghr3UBmjBYUEJYvqfXtYw1Tfue5Ef6Lvmpt9Qi4r66ZBtPATvjPLK4XewAZaQ",
  "key14": "3JKEB9v9qJNu49q2okzmJEc4pGo83xx4HAWxX59kgYoGrxPA3qtLGgAc2PMmg37pEkHcNpn7KaYgjS7pjfopzhq4",
  "key15": "2xiwbkb5UcoSkVQGzdY2PGNecY72XvVtfPQuCjVFQbCzWWRursibaz4mJUJfYd7NUjjtmScGxd6B72QHjZgpNVuT",
  "key16": "5s117uZhUAxoZGAndU1XwGy1AfydsKG7fS8k3wVjNU2NFEZE8ZkN6Rpty7jQmgBo9aAcp46FF9RmRXEfXVtgE3kc",
  "key17": "3syWVTiHz5AD2nhAWzfeQeQar7Z7hefM9puj2ecAVFn8NEoWD98Ua6XzMekCM5v68zMRL6Ndev9dd4QhWLJvPy7K",
  "key18": "4xg7i91MuPxsen371iGhSRwUdwk9wsSUr2UaCL6dA1APrgGksiFYdBPkkCJNZvA5TLfrtbtjsvhsihZPsunASVDg",
  "key19": "44EPSyoA7dAZosSAgHJj8H3vmFzLfnGv1ntStMNN4wEPgCSje5WMmVRBVLgAKkvDtxogP2oTQma3oZVcjhEB619R",
  "key20": "5KWpTBWgQr4owLzdYsuRqM9qYKBHqd21MkufsUdwyRCRC8fxHv9aiq2jY4u1h3SfWeHxL86mutZ84FrMjEa6Gggu",
  "key21": "5hdjHPYJWbhjio2xk9g1aqxp1tBJNDfWYYvxxHuVrtpjU92XiDWss59Fybx1aoZkCFhfenb5Db2PEGrVB5dqtDLQ",
  "key22": "qPKPKDDhG3eW6Z941DJf5vRxiX6MPMgk1L82LHEmVL63udbmPJ9K9wzCDHGJrQkDubZV4wv1wHLSEWujMpSNJ8n",
  "key23": "4Gcpg5ca8f8Pj7zkfZn6YNUc3hwBUbBt3sitKmViu1vnae3kejEa9R5FaBiuc1UsMc3KMsmE8XGWzP1RifE19yGp",
  "key24": "4KPkoqGFviSVtYNuHZQZX8A2HacTz8jWnrfPkaDpsckx7BEBFFN6drT9uon8ug513CtDNrcE3Gac8PKLFmkbNWGd",
  "key25": "vLWgDYna2EVK9YCi3BZzQv6DqfojptLAWekD2mokXCZdkm1ZMkXdpNbbXLWDrRQCE9PtcQvN2P4STtTWyFnKnvY",
  "key26": "45awTBrp2hmhvgmsY3AkNKdgaBtY9mmRAFqG6FRh1Zi3PL93i1rfvswYy2nv2niKjFofWbP7RsTrAKJR9QyXd3cV",
  "key27": "2AV6coT6c3veeCbCnscm3n6sQhGG5nwnMSMAGfGf7Gb7ftgcRPBovsY3FLByZFkvzkFt72KaEFSVfdDLa2MeVvKf",
  "key28": "51HHenp4xkgMrxMhSfFvWPFXpP95xDvCZPuwkvPCt3rBj8hsRT3kADFLxTTFY59TkNAVf4VwwTCVea57f68KLZsw",
  "key29": "5qMidBcS5M9riPnHN8xMRwU24fRdVCRxirZXF556DA5V6yVyqBRFpCugGf8zTNjTusAV1iEi9PzvZN3WbKaeJMWJ",
  "key30": "5brArpCu2VWMW93YcQPB8hyriXE7SKgpUGao9EmY72DGnufv9wLGsRzifTTG2j7NZ3f6amWfipAxThwXvJuTFTjh",
  "key31": "5bnMRBpTUXxJwqU7okwhoPMMAqW1dYLE5wnSnfxFP1vmRETxao9HsVLuBrUrgeFJ8dqSmo2sndSnfkX9Jm223a5s",
  "key32": "36q3FBfY2EriezHw4qLho8AZerm1Nrysx9Xo4jaVWT7Y36bQjeeuTCvxYMWUNpaeYBQhnzEMqtMubQL3mhbE6ngL",
  "key33": "2tmTSfsLCsDSzqdTXSa92uJjFz5Aj4veNJXG9xRFK9WaB4pDB96cdprNaLr2GRiEFzojTP2GTRzWj2LvFACveqx1",
  "key34": "5skwxGtJD9rRSYDrQsCgM6tj9rDjcnZwWdf7w6c8WMfXE5geWcSAEbion8voKmXSr245sVg4hnFA9u6JFw1ZhR7b",
  "key35": "2B44MouG74CQo2kCKSANZE6b5tyQ6D3xh7WuMCwJ11ctHmS1KzKjZBFjKqNzaaMKbGAxK4Sc6LKzKu1aMcfQJEvL",
  "key36": "555ekirCroxTqQrV43FAcaoHZTH4cWV5DzrNtFXqirwEUouCjw2NZU9kyHRYPmBtzf2nmGd2ST6di5VeFxCamdaL",
  "key37": "5TFjikbqTJgnvURvf8aRcRUznJ3Z1vWwvJdhP1cS3yLuMswQWnnd58R9nViH7bT3qH6ZgyzPZdYHApdD3MNeG1EB",
  "key38": "2yAK37umgGt99emtwnBjwssHteoGqbcx2K52nEa6rKBE9oSnxUd7DdRDhCxnJQgWCQDdXkwW7PRhbsymN4f7c3Zw",
  "key39": "5UTSadx4sVusGSnQkWd86yVTLp128QUFx3djacRptbpxMGf93rESratr25WhQUkmK31sf7Xm1H1EW9LyqGxsP8rT",
  "key40": "4Sq2Z7sNEisimGqvfuGSp9MgKZPadtHLJbmKNX9Ci3eVBfxXDaW7cQ2bNUiFzH9YbXY34DmavaA8LwRUi9qZi1fW",
  "key41": "4ayrzvbNzDnd4oG162MHE8V6UfZvKcsDzdFGvuNywK6Bz6NHe4eaEwKesuh5CBmtCm1Js5gVV9BkjhnZBSh2bteP",
  "key42": "4g9AgByDrvHtrF7W75KoG6xk2euzUjnqfLBS71JH39vrXBiQYyc7jFs33juihWXejNbTW78mW9G5wop4gVs6j29g"
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
