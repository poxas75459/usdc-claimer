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
    "3wWEodAa3o9ztEAazM9xSXKc1u3nLekt19UWYnw8bGWWvtzqdEhnbL8Re8wxenovieZ3dBMdMvcq2AWbKubcR74J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QapPVMr4UunUSFMiWNad2r4VrWrSAZykgw7NSdobJPSavxxYx3AwzTb94SdDJsxdQ76Xv2v67SQZFWd8GnEjCkj",
  "key1": "2fcwiXPvdnzYbSfEgRVZXQTbLjW2TLGk2oDL69rU4iZJf416A1irpBXAJeccaLCUzWHDTTKnERG2w4ahV5jA3YK7",
  "key2": "2aFSeronMXDk2FGawogREzLN8yAw1ejv9FU69UFnZqkSr6NbhDBzPusnk53CL7e6cA294tDKQ8KFF8N4ypgiuL57",
  "key3": "5DH8sRrZdRsvMSJEcAyofyFTTZQdpbHFtw6wnpG25M4au7rquQkUMQDmnpYED3HBn62WfYv7M14xqDyeSZ1f24uM",
  "key4": "4qLQJKuKxuGbyEoQkCBE5jbAWAJHVgzjDck2oYyfWZgUhEUgEPbiQpW2CUfXgdjSFoW49rkNzrRUBYDnd5Yhi9Va",
  "key5": "2wcgiec22wVuCLKj6iPMxQNUn87xojruz3ThP7pxWtHoe94V3EzK5edoc79ctAJDNMKdtemADfo5GNDJqKzFJFdp",
  "key6": "3bEqxpLZwpcw3tRWQKvqKG4EUvAqqrSCbsjaqTvh1v4VgWJLRoVXd3dbutFpK7cENNfKwEJLWhQWzHB7BmT9hmZS",
  "key7": "5TaFNMVNh83o6Bk2KyVofhTR9mAtJ3hb68A7HchTsVRcUJnfjAMfJuXNeeNnH2J3pWndBQtCjvXKmLVzzoH8QUC3",
  "key8": "2YBBgS7aXoF3s3NnhV8Midpu6BcrdB3jqx4kVvwpWmXua5fzwq2AANJzahDkf6zgejcBto2g5kxkTkUxFAbgAwgV",
  "key9": "K9aZUWbwvWFz6kKP9riw84j2uquaKwZcJjqshiBk5JsYDQUJpjc5GK4QcC95LGbsX4qq6noTUb8KKid1z2fu2rt",
  "key10": "3j9Qm8LBCQ2hjHRvd4dwFjuxi55yGQuSNUYjUWsUbthhDekwygeN7gdZKCTKKNNMPwU8obykaRsA8iUcp6K6bPwW",
  "key11": "2k2DDR28Yjt5r2ghg8Zs9pEgG1oixTNbtDABeJde8PvX14q1qTvshrc6vNcayTphz2Yn2cJAanaeKxhGo5ZQ62iF",
  "key12": "4Ddqv6DCwbghnTTvZQdhMD5ndQrst8D46C4KvXeJ8vUn8NVBqbpY9otTC5NUG3D5QgeM8DQyPBZnJ8UCd88vhAUC",
  "key13": "xciGDMkrBRYJBfxwby4kk3hiT6bLYnj8CSnaTBVESTXuckHwxDAeVX7jxVYL2wHEZumjUsMX8ciqczntf3ECKMR",
  "key14": "e3N8negq68i7nv71x4VrDiXTdaLEPRvngFMoW6FH5SpRctvazGvZ7L1aeikEzr4NrbcFnoX8iWLJrGwQ1L6Ew6c",
  "key15": "5PsSN6G5hvFc7rtaZABGuVP9FXUudGMTXFrLbrQGaiedFiea34W6G4KneNgQEMKF7MFrR5X4AMfugoVokrLJ889J",
  "key16": "SX9MDR2DsgH7ZBLujZaYLHZhHhGFmjuwqDoc1mzQRJcbfXoeMvShry3pnNvtT4qWikSDmbSAib7Pj3oc2fj4P5N",
  "key17": "5K72ECaqiZcaBqHCBBhAEpE2AkmWHtUYQ7kC2csiku7gATo1DAudCb2daZhQqTeqaAGLco7zeG6TN6ThGk714QVh",
  "key18": "4QXStYTZWwMhUy6Kds2JxK6pCd2hsBoqnpW9A1jPxyk9oCH8fFumrfX8voBxKTe14ZXaPQo66fniNT6CTSD2HXx2",
  "key19": "xfD6msH9rKSrgyfrCCnVSoBx4UQ9EEDJbMAxgUvSdjcDHnt3kR5AopSd2Em3kvjxGn2qm67RRqT6MwqPfcLt2Ju",
  "key20": "5Za6nzLtSegDxqgYsFBErdNPJPFT6y6DaVXphbervzcuLRc3MRVAwxGs8czan4S5mwLCLBAnJ78MsH3zdM82JEo1",
  "key21": "4uSMFo1oHidMsXLKZ7DMWJb3YHoU8zKEuiC1k3YAGVrwUygDv665tKCGeiMQt5dSm5vs5wsuzsgNytWh3wgxjr7H",
  "key22": "5DHGJejoJ3xoRnPs2kyeS721RMwfVBWmLy7VmgLY3Y97QXDUu4xUagzqduWTL85vzVfyMEU79aQTDGVKmyStmuMu",
  "key23": "27xBY7179zrU3PhpvtStwkPnHjPU9ug5Rvo5S7w81xg9JBV8pDy3LdKpyZQE4SuTLnSQeHzTxj7Lhe3ceb3eBgWD",
  "key24": "HT4frGCef8EVN84keHWi7YNZD7u2VQy3wr46Y6Qv4bfXzLEGQmr3Pbg6NCsPwqf9TCf5netAn73PWX33MM99e5o",
  "key25": "5gNsxY2JYmaJPkeakxUBvzLpG7e4mkckFbesPxZY69edCSqTZZPuEax2xCeALWM8R8wU6osjaHj6egPfPv6GNL9w",
  "key26": "2dMbTmUssL1XusGNFQ2eKvWxCVErhF52U5XYsa9Rg3ur8ccBA3JibosDehBaH3AcD7ThF1gveKiVyDMnFk3qFG5k",
  "key27": "2hQedN276CXMSvSYDSGTYke5U5FHYrCFjtSU7spvWAih4ey49BzAMPnNKp6YbpBVVcrCqdCU5idAujmUyxNJfg8E",
  "key28": "4QoGKKS9mhmWzA4277mixiNxeFJU3PTb4fnCuTGAjsmhwVjwTeCgMEuxfkyM2mGaX1nUX5arwjM8ttwzjMgu3iQr",
  "key29": "5KGyxBppB5h5F8BhojH3MNcPyRXFdMXvoekHYUtkCj95hi81LG3XhLuUPwSpQdT8LME3chwTYm4CSfmsL3TQwFzH",
  "key30": "3ocgDGcWGzxKthq7XXwa8z7bqKNvHHWkJqb3ELnanHqmRLtV5BhHSejsMEGGjrxdVBZEsWpgpJ4t193cC4CVvY4Y",
  "key31": "2PYvdA35LE4ZPchxYaGcDiRZQbaoG58Vkb7UiNjQv4NFQBq7QGHjdikRRuuSBMhs2Xq9DGYfwdiCErh8muEB8YC2",
  "key32": "Lm4jSeA5hUv16q9eKpSG2roKMcZGUjtUMf3XBQxc81xRZq3S97gkhNFBmtrGSpCJFCS5QGdHHwZiDhPcpGwTxvy",
  "key33": "pzaUPKVMKBqXQNrdUzNp9DBnkyHq3gKyhmkYxorW5sWNQ3akTRtuGZ2kP6SPFtHdoYeeULDmvC9YFsxy9Xqy1CH",
  "key34": "kuDGBXSxAb2hY2WyKvrgeUHeP7fM9FmmZkzrqMihzZ3q4uRLjvrkqebQKCEfeyZFhwYHLfK8AuMDNDHJETTx7Qy",
  "key35": "3ujZJ7ab3qJpZGwcGF8nXUUew7ar1JoVchxWbgnt4JAQoWZraTGf3QCbrS15TiF1uq2vpdDbp6xprpixELax4CN8",
  "key36": "26jQyP7dPrnLbVukWNHts7KqKuz5Ev9KLX4HZc7qRfomvww5AREkGrLoQudr6EM3Eqvx3BAjAAVqTyaeWpX1K6au",
  "key37": "4AbrCVvZ6N32hwXG6Pe5Ntjxciu6miNkbcya73WnY8seoyvVJvSAcpY3sbVu9vaD6L4rMrcJQnVrConmUdt2hCS6",
  "key38": "y38BoacVx5wg9VDQqNNQAoKMLKwdjEQyhccnSA1cYpviYvrNBBDX6sWchZhQUwQTSvfmspjwYndNAmq4Cniav3u",
  "key39": "3utJWd9W4ENQQmhgUFuTXeQQ3DS1mhVDrke7xNzha8NEZ2PYaARgnokjAx5ChGqYfFdqR5LbsV2WGNuJQBmLm28k",
  "key40": "3qAMrbfyPxkCAVUUj68SR1mt8yEYbPkHm2R4KtVHry4gk1DPRaMjEVsT5MvzHh7FtKuW1ay93fYBcgVp7XBbisSW",
  "key41": "2vfDBhrQ3y5km433YtVEEb3Teg2AWezKyw2bqeJFV4ZfqwZ7jnmzH2NB2gfw2RkqQ9WfGWgQ15EDic4T35dX8bt7",
  "key42": "UAtws23T7QgHUcNXaS2WkqiL3xspvHv9ebuiXdVfAWfi2Pjhweygmt1JBaBuMw9rDoKaoBqbSd63wgV8kZH8dmn",
  "key43": "4gP1NVe3RuReB2KheXjy4rxhNQm2AuLkGF6qLqTgx4wnLhGkvdh7VX5shw6JrDwo2p65pzrcE9S1tXek4uuFjdmT",
  "key44": "5SeMaS5FR4uMtsJoxNhruaLD2koNVwJkPASHxo6nWJXW1tAawq6Lt9h94wtTPoVgcrgTz3MfNDaf7A1Hcn669a2P",
  "key45": "31gpQenLzZS4RyZqAWyJw9N3dzvks5FCynPMg9dE9s8SFCH5DCigPmd8B8WoobmQoQw9XhtHb9hpVUQS9m7s6DB1"
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
