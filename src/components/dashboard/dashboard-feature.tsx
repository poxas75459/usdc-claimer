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
    "61TtXA5Z3XCkrpCcvSRpwndYVZqZKXLR1PgLPWnEtE8YdE4c7kGfN2A1m2kitVJhRvDfciXpoyosdsKARQZSAUH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zioEZTmviSbz9LT3RCPKQ7xaDaW6oyTdVGycXaNUEMCz5o5Dvos4RquLnNn8KNnr44zKu9Xczc69TFZjvegVox8",
  "key1": "55BVzo1equB7JsdySPBRcMhHyRtsbFbrHFrjoFN2o4dAE2zYFpq1R19BBWTq5kfkqV4uQStvnf6u4P3aLG6TrBta",
  "key2": "3eNWcv2j4TogbDLESN9t8C5QxRfG6KjUj2x1S1YCBuxEWHstPUb18Z9gu12Z7JbavjK19ideRFqnxeGgWvVesKwa",
  "key3": "22f9TXdaeCX6cwXCvz7QmYk88VQvKZHtviKJM2knakxLkRFKQUtMQncFt5hu9T1DxqTaqmUkbo9tKuCzzANnKiVh",
  "key4": "2NZvbjirR3ACdre3oQ1MshQiqvyh3y7YQeMj3RJyJGxfYkE5rjmM6ZPcaapdgdFxYwzfMHeCktYEgSeTaR1aqs4c",
  "key5": "3h82zHJdTPtxwiQgosAGCddPBHP1XKWdxRU8mFRD7jT8qUYW9mU25AcBEQGAKeuVXvBZeuVB5GoDeJwPd8WsqeYe",
  "key6": "2JF3HpRra3wo1oxHub5i2qnwFi2EkNBiB5TiErbeUAtv5TrKyzpLZCejYaupZhfKwCoYuWhsS1SS76qbwnMBrKef",
  "key7": "knKyGLHCjJ1gxUSfFJo6Gc8tkTX3mDEJ14c27YNqT54SxiTkRygYzAaBddRDwuFFHbDLb65Xm3gMvwaYr6PLYTB",
  "key8": "3v1X2jPp6Q711LyS1cQCSo3XkUUuPRe1nRqXYZSGzPkYkwyZvufqmVS2L9S9BDJP6hsAqF8e5vYh9kPb71QqhhiQ",
  "key9": "LF5wzMBxfiDasGm5UZXHdMvRUmJ8pdWxQNpv6HhDEsEuLuSK3vehHRd2GWdmi3Xc3tVxUNyMj69oZwq8mp5vZry",
  "key10": "35ZbzVk5PZT48BYayYhNewUS6T7PHp8c3o9QGZEwdce5ahZmzZcRz5q88afyrSRPYXpGpj2eojT7LNDZsfGp9Yti",
  "key11": "3fZTDdD4QgUJVxPewewUKPr259aJKyU5CCehKU5PKXZY64p5FZFhFrLFneh1kH4XxuCiDQuxe7R1uCsKfUH827zL",
  "key12": "4LeUqtacxCUa8qR5qNXUwiHYGSSoEkJpS5rMJi7gKbmvzE5uwp3xkFEGzG5tUTSGN2e7T6so8BtVMN2N1UWuxMam",
  "key13": "Js225xyqoAxfEUt6mYCCoEpWgiJBBcBUcmF1f8VHYGaJvM6EtB3yEWpymzgYrSzCmXpGcC1nXCPnytCs7kLtvkm",
  "key14": "2LfTQq3x9UvskEQd6yEPvs5zNwcoi94qEGZKBfzQU2qnGnv7U265PoiNDSusWCjDWPvwgLgNWusKLcJ6cfJzCTT3",
  "key15": "4NgVdFaZgXd4jMnGisEm7EhwC3pmWpN4JBzt6ETfBJewZD2w4XQMKzCPSpRtQrAa4hTfGA6hRAHgJEBR7DM1gXow",
  "key16": "638WwmmVUModqw9fk4YAUfnWdbGyaigUZ2GqGhKk9QGRqdBDretw7dVFpz7QSiPteUSb2Lh3UozTcwfARAAbqoDJ",
  "key17": "5czpFEg3GioUVPjeWJ2MFsVDQ75BZmwn2RBndMMPfSgQtnJyeUFm15JR7SprfSnWqLrRoQ132SSan8zpGwfSuJTu",
  "key18": "SxLLqAmrq4uDzjk3jDeGyagz5PskSqG2LgmrKBbKPEsC9UwcAF35q98F8MmRq1pLTft6n5NPAxrTN9CPzHACh8S",
  "key19": "4dVUpeBS5Th531kNnhsY5foK12JbZrK6vfwqo5nWqCzU4oT5MrWa5SsZ7SanabarQ9DHF65Fp7kjVUHdRngeuFKS",
  "key20": "3JpUm5WJLZBF7m6vU7exdV87jZYYSZUq2CTRpshK58DPC9RvefSHNQkbeGr9sJ47sThxDA7apY71k4rPVAoWDciQ",
  "key21": "2ePjLiGixXvrKV4iHP8fMz7EpKnhBnb1ZRp8rWZkGXBRGFpiCytiUhfxC5cNEuf3YeZC99VQkjwTDZbZ68GviRrB",
  "key22": "3BYXu6ngM6BBDBv4Fo6vXi6oySDNKj9GPskWkCtBC2cz6uQ8y1g62AyhNgsbXsQikvjpLzqBR6QFAybVi7MTxrvE",
  "key23": "2cRxf2EDi5pWHiQc8fcT9s12zrjRgYbCTq8b3ZPuSt1N2f86LZSvesTDv4f5fyK3FAUyf6TS2An8Yanw2bDEoyo1",
  "key24": "629bZye2xE2JTmSyL67M9DGaVx8Mjsem4xdMuyDME8fejJLbtfJtLLNW8fvLxtB8HjfUTtQ5ygQ23T7RRaeWfBRK",
  "key25": "36h7wv5ws6QHQGzVx522p8GQuymquytLwwt7j4tZnz9BbxwPivgnATf48wqfQVXoeQgEKyKmjTeHjSBjG3D5Usuf",
  "key26": "ZMsbW4nJawj42NKUhcm67nJHn1A6t4Uo2MxZs94FW6W6ApnF7NiSwAzBkrze44YXcA6JpYEwKBy1Z6ripm3yPMZ",
  "key27": "4VfHwYMSDFDt2Ux7s18ypqajDEjViVn6UkcjzmW2cJKSWLk1u8rz797Tk4u6QimACjgFXcmY9sdrkVWMyDzjh77z",
  "key28": "JMxEvcft81M5cz8VjjfWCUfrNy254aZDvsrvTgStjs9RCSyXq2qZ8CUM54gEJLrT41BEcCPFU82W2WMSbZ5jUbo",
  "key29": "5HwewXLhT6G2tqduJJk95dg7pafCxfmh5SbbMdcTEzSBkyb4UFbGt1fcXCWF5YinsR3rHFevRsLLTY92uibL5dk2",
  "key30": "3GAc9h3r6mWGeukgo4TFEXrkbhrzPpjwv7qnHMCo7yR3u2MDGjnzSwkDmqAUAFEy5KuC9Q7U8arLmpEhP7G6YzFt",
  "key31": "2QAN7X1FrXHYDpqRUoj77fCmdSQrYe8wcgpXorhwQjeoxqE8mRkfpoLRX75K9fkdKD1GctAwYR6EtBPrD5v4xTAK",
  "key32": "2A8EXJaX4z7aM7Rs7KLok52jmabLtxDPJASLMuNSR132wmafXUEZgiRsPnHCq6HckHcPmCAwNR4qBE46DVx4rX2S",
  "key33": "4832Y4zBhXkeg9Nb6qEN2DBwUEabi3F6mA4UdxmeMDMskZJ7TsAe36p9ArP1DqF6FbkATArV3TWdFxK8BQNwPnGe",
  "key34": "47rBkGPkJcG3K6i6fDPrqxZby5ibtv91398vYYeN9RPmVfKWYmtkryFx2ewmz99XaVZ3aepu6GnPziyzEW2a5Xzs",
  "key35": "vZUTUCcDMH97yDMs6GqcTQNz9LfNFX9neSm8Ro1aTueNA7psk1RPmX7pYAyW9udCMGkQTZoR5wSGkX1pfXavKXM",
  "key36": "42NDMWhQoWgyGhxayCWbTtD8vsqGrghRAdu8ZqFru6G1JL6z72b4rL5B7PkXZCN8bDYEucreqCQha8BeCrLHCVBc",
  "key37": "29WRxuF7y7oAAGY3VgHivw95nPx1uEpJH7osaGNPVc8X9k37YNbTJnqNBrs8dBcbPugZZonY2fD9eTKyYcYd7r1z",
  "key38": "CvkKMHaQ3ixMNHRbmfAy96rc5VrxGwzZtKg7yBJGzzXnXZg8s9N8QqmV3Vr5MAdqT3gA3QGrSigGLG9W8YG7k2s",
  "key39": "45KFxJV5cf5NSnoUkmdkMQFjaN5jyDzMDkTpYPqMLaAFPn3d9jz7TGate3kqu8aSrhRJHTn6EgEusiwigs4daEH8",
  "key40": "51jLwaGREDaTjwdLsVf7nVsKtPXV2yxS1188MFqdWygb7YQ5XEWvdZgGTHCZTj3wZf6VrQqJTF3kEMoS4NUAZZnn",
  "key41": "3EKQQE7U293baaFfzKQGCKSB9Q4uS5XRRxg4khtgGJrBojHFSoXvyfMfg6etuttHYASVgqL31K7RYbqYoZ6dhCy6",
  "key42": "RAP6DzVoNPESWGdvx7UZXs7icAz5rNhD9dmgr24RJH5nnrYrwzgEzMiP3X93D3HD8oBdMkTwpMCm89tQgvPCLws",
  "key43": "2Jod7mTtEK1629Vs7B39VAYSojrcwTWdEXbST9rfCMxG8ieVTpZXx4QScKpCHFg8JN9xyhaPeciAfTmLVkkziMXk",
  "key44": "2gjwjQtBRgYTPY367wqFrmoW5ucQhKLTXDoHN5kDCi1uEF2RaHcAXJK7cX28HLwoC6CyNYWsFmNYEeTzkFLStoTD",
  "key45": "4EctdDyqTno7zwdxCnnAcVQkXj8DknGhYBTp9wKN3VKyNW6MsF5GD97ecMyDgds67mNUa7gxovTUAgjPumcpHgU5"
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
