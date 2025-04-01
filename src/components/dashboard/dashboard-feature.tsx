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
    "21Hr6DdLvD9EMs7wGebkPKDw228KhAxVueXVN3y2ttCcCNg4nuJ7HJu3HZa76hn9ueouwHGBV3BUo6Arp4Pu7btw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s9Puzcz6qJ33VwLEwyXsCU4bXhmuv25FeL26NeKv9vfAexnrqmw9EJpQWBU3UGWyvdxH8669zTQjJVQyFJJ39pL",
  "key1": "34ZuP8PDgm5mexoeUXzhdPBMgVLoa2437J4FxGqphP1EGyB5dYU9LAbeMSkq9tLRiiFRSLadePM6KLM1nUgGZetd",
  "key2": "28FB7fxP9gTBrJVSwsm8SHPm2AXTrWshjiNcsmgpqzN6J6STQTmmZixY8fKLyv21ptdEAkVizQ5jYGcULTWh1f3p",
  "key3": "3dx2hQrhME8t4fojLvh8u45i4coGpgNidGVhDTnRhxbUNMVLhPJGugnqai1J1gXgqPDEJiXg6d3M6uVFB9ULvqY",
  "key4": "5AizFUMyfsDT7aUMFKss8pZcZATVDDoV2DXhKE1Wd3ZyHa9MzdrvnsT63uVrkyiD3sHTf4kPwJtW9h72HCejafWz",
  "key5": "4PnNG4MEC4Frtr9LNk1NNcTadTGmRWmHeRkuibKphPJX5jmJHhoQi9MKD4PaJWv9145J9Vy8LnYEJn84jbNrDUTn",
  "key6": "3awyHPA1SW7Gsx34CwW3tBoFjPN4FNcSzb2aCqpCJMzSuhGkttef6eZwxSDJvuXEkHaFJmx9nJbmnR9DWEEAy9nN",
  "key7": "5e4khdxLtUR8LLNiEbk5WqP3F4h6a6vh1wBgASHZE68YB4Bq3hTgyhtf89Yok4h8YaGxsW4FL45dW4WqysKtKCtc",
  "key8": "kYTU6iRiP4woVgu3fjAatfrjyWXb5Xztyt9bLeFy6M4CJesB4SFbL6qvqH2rNavG8c6B7Lpo9esWsKNmTQTKgqH",
  "key9": "Txnuaz4Hy3p7EQBMTZp9fpttd9M6y61Anba2D28oLcvGUx6Qo5tLHqVNZeghQ4oyYULThZVbcxnH9VoEdckdSSB",
  "key10": "64129q5V8HEiBrFX1MjLSBkFtZwD2fRMyXaVTNeinuXmkzPYLUZy7ymJVG7XKoswNQorFuPTohJPjTTPFPS2sneX",
  "key11": "5bdCUPJG2eZYmNsB5XNM6Qzvcj3iBE4dmWw7WK7s6tfR5E6bgLLqaBu6AwhFpe3BghDdckrt7Wst1az4REnbN4iX",
  "key12": "4PxAZeotmZnsyuk3YGTt2ifSgndeDYiVPpcKsfrMQPRJFTYdeZ1N1H7nmxmab2XxPwpiF2dxySieXSfAKGSMLHTe",
  "key13": "2zAALw3cTHNXmgWXKhN24jGYfRJzyDE4MrJrAnDKTAhiFqH39E658EgL2MZNhXsuY3uSEDvCYYY8d76JiaJPKF6J",
  "key14": "RDxQdiD38BPtQJ6wUnqm1seNZD1YGvW6rczx6D15mUDBVNqFfNrtvZ4Am5dZdGafhYKcu3Zox47Rf8niiy9ymV4",
  "key15": "2bNKn6ARkVtJkDhdvgtHJZTwndpu3bAJF3d9djrAWLN4hzTdSEKbPiMgY5jQrSLZFJZE2FWVuQSGoFQZx8o9uMRg",
  "key16": "65S1fNgkDaf5NzRSJ4uSBDH6SppHsDYfX4iHVJba9pYufbdxpHTxpWT9Uecp2TQSogfC7CvzJcGsNuVL77xrG7EE",
  "key17": "RSWn7w7tW4Hk2KXTQXnAEbK9d71eZY5TyUe3AsvNAJ9znmyYAX3gQiGiXry5yUcFU1R52VbYwJAhE5fo6UHLRY8",
  "key18": "5YMkb9sCMJxE3uVU7x1sJdvfizzspqrVSVyTa4HRmeYxTy1skL3Du9XZKkMNRzoae4PhYPQSJrgXJt8dTRrQCabc",
  "key19": "41HDniTQ8X5DvrhitLeQ2n1dXHfQCGV8FFLZWtPnwprfz4k3hevYqCu1Xy8uKrfZocPWyP9FVxSTg1i6x68y4A9y",
  "key20": "4WSP7B6saR5cSAGsgHaZoNx3ctbbMF6raUxCiFRU3d3MG7rTBakgqU7Xvrhoit6ZFjTsEJNCpiH72PBujCqrqWPJ",
  "key21": "3zV9iu9DhpzBp8snPKZxGMwCdpgTQDoDogn696aCZp1MsJuNSoEBLqDaWmfcmRTmGqXyovBRv42eZqXRFF4gVYEF",
  "key22": "5QFWnjqfakZUZeSm8tQrNiq5H3kg3aAuEzxLRkvXfyYSvjY4xwr8DrcXLNg2o3MGuwg23XJdzooyqxTBJXFPwp3",
  "key23": "MMjywM2iy9rw4JwmeaT2ZJeER9A4PxthHCj3LcDXSuBhurKWkkZ3wcNmaSbEyztyj1UrmkCdJM9ntjCiHtiHdVT",
  "key24": "27SXii1Bgge35cbZwxxeiHc7s49QWmVW2piP1tARxGw8GuyxjF5Wx5LY7fyTZm3km2VR44htLo9Mj8SJvWjF7LmQ",
  "key25": "4siFuULLt3sepKPjcmYYC6YP9YWeS6oK1hiFak3X1AvmKXEzqNivhjb3kbCej4JVVhZE8wfD6mGDttxARWkmiqn4",
  "key26": "5NL7TFN1Lc5vxC85qbZhnmBsdiLRFQXeoChY7m3Fpq3XYsTvqWmkLYY8dNQd8xngvXJQhnJfsooEjW9itVKjiof6",
  "key27": "2KWbe9TgY9AmjucgZK1TgRD5nF46RHLQ6BNYRsaW6kqFLgFwUmCZj4v4m3cjZ2TeVHkAtDq4SyVkUtXWs6BYyQK9",
  "key28": "2mExZ8xuRRKXdkx5SvtWhutisvM8sFqSMABK4hv5Dh4kK4tFbv8Nr6SiQZGTFGaf5cUFkyT6YA3EUzihENoJQo35",
  "key29": "4Vh7JY9DK8bhJ6RP17RWGU1jGtXh87jCjrpq1uGE8dZSZEtHq1RgRDxFXFkTwAVS5h122CtWHmLkfDWghY34XcuN",
  "key30": "44vFXtLFBuhm9QcEF7HYQq1USrGNaWPHVxep6abABcbR2LbXL2zJU3K6Z8sC45guxaX15roFiHRHBTwtQgo7yBoP",
  "key31": "4ZHkE7Q4xAKzYAR8v1oFuPk3vgyjcVE9S9Qz4sgLwBnMUzQX33RrKQagDLmJFwpvESprPG5DLsgGvhv9c9tWk1Z7",
  "key32": "4MRs6xrAUoPUVpbvTWeqxAXxChho7JoSQn5J8bwFuoSsCCqN7yVcAG2d8ouh8rP4uF4F72kbKCHrf2b4dYabr3Zj",
  "key33": "4h6apPxToSEp4zMJXkztcifDEBtUFsCEMy6RaFJSpJuCNu29wa6LPLsWmtZABkbWtVB9LGay8EXgnVTDzzioWQid"
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
