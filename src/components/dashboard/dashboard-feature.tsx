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
    "5tZtdEAYNoZm3UJJHAq9YPU165V4DnbtPpa1MUuimpWJpMnDBw2p2UKxyhgxhGPixsbsYUm77WUKcVTb2tRQdCHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34DFinxzNBcgmUUnF4di5YjfFvEJt3r6eGw3NZXNAxFnV4mgm7PEsFBMFF7JUgQYUq9XfNduVGM3xzXiszbGPwVS",
  "key1": "wNrFSgh5cnvqg16HLWCxFiKbDt3u1YSJ2CJ5dYTr1wyAHey6qzstS343mpdppPF8Xgh27ctvjNxUqTXFqhTBaFw",
  "key2": "4vqfg2Yj6byL71VUhtJk5KAQoF2uotz4GAAK45JdKGYZyrYNsGw445tP8eKJam5DjPVJTJjsoNgdL6qBzuaM2PNx",
  "key3": "3dN6sqbRECrRE11LQuDdPVKZSLEjZKZ9hjBLyDigNc3AhQqCyqG8vc9hNn3UkUYBb5E4nqKqmUx2aTQh7hvtzsKh",
  "key4": "x4gwkUdLxtHtFpskYTbXLijKVLBodGEzLuTvZ36fxXETHyZty6YtAqr5PCFZWLPaqLUuAmu2KnLfupynUj4rLNw",
  "key5": "ta35Vae5dJbXji4VSyRN57wzZcRYVBf6uRPAwL6YFhxJrN1B4XKRYbitoW9WMxtevKiSQjXaMUrc2RCm73aAvMM",
  "key6": "2hjxDwEhGeiL49zkqUzwmm62eZ2mzg9jCDWm5iZDuuokVtPAeHPXE9v5YEyB3dML7N25HYS83CrJBUDWxKBDmzre",
  "key7": "nAPnhMzai6UFUjn6CXQUfZ15RF5kfB7oLWkockP5Zb1CuiVufijp3fJuR3tFDUdcBDHrnTdQvE6kVHiYtrPARJg",
  "key8": "BPLSQPEwcqohW36Juk46YiapK3zqJGVjagdfzNReynUxS7GNhA3v89ZbCkJoFKT8GpxsB3ioa91KSwji18yntt8",
  "key9": "5Ee2kKhqQgaCQm787qCm2NUd3KnSqi5d5ESVZLt397svM9wHJXMFziqRFTk4HoVy2RTJxTjwkGya72NQw8e6MJN8",
  "key10": "vKWU2pge9CncPox5d9QDWVT8CX5DpzPXgfCeYbUQPvgmDL41p3vRoHSNyytUbXbz8cD6c74yXchweJsyre5eZpi",
  "key11": "23Gh3s3y96bADM6weYP3QxWSHWGoJKqxRmUhuR5dbNaewycU9ggn7Uy567WQZAnUxx3CvxcVY4NiTtAqU9cPH4GB",
  "key12": "2N9oEqabk3diVqzJW1tdtS8A5Gh18S4hvsP4zv65JVHZUfqwyBoLRiErgwmxpVPm8hsFxfLtKpT8ojBfULrkjSJS",
  "key13": "5XMzeMv8NSDRAzcv7bk5rFn9esKZL4PExFJdkKTJnGCLU6KNqdnLx2Jyt9HoTughiXoDQ3UZTpNXJUA59dLDztQM",
  "key14": "2ghjs8b5KXayEuTrMDjNYszsNmXXPFcbRNbaXFuXiGJSNun1hn7yxsH6Csi2G69dEP7wpfPMoCDaKcF9AQdRozaL",
  "key15": "2REMf43ZGPzyhiKTEdKmNH9MgqJZLTxGfMfESS5245vuBjuHZEdSHzGPQTggBsekaYfPT5uSQAYAp6T8ej49H63d",
  "key16": "38nUeGiocuNDsai9n3tKUvhH7mR6dVQxdSZ9Nowo9m6MqKuyGL52vxK5qBFvP3KbzWXZSCvkQUpMsBowpzJsEzVa",
  "key17": "2Q2XUgbA4zkuaf5pahvhZnKVYxEWgnbKmjWf2UfHYytiHsYtueSn8Zmum2sSisGSeiFUnfNGgb9nZmZZ1dAFdEW7",
  "key18": "GFBPS5AALcj4yXioBtingwuHU8Vqq8LuKVHQMRiCcPEuPTs5L6tAe9WqCYnqqRpwkVvoB1PWMuBGhTDZSpvf3ST",
  "key19": "4ZZWdQEqpV5aZvZW3NpHheB2M5xvG2xspdGh9mEDdjjp3pb2cd4sQtFiFGRqFz6DcnUxtKvrYokFwhgPWMorH6M5",
  "key20": "2zk9Yej8VTuawv7oQCR68i7xK1997jbUNmZBaoakYkoERpSb8nKU3zbxsJm6b7XVuYDUVy3mo6TakXu6oFNXTk6Q",
  "key21": "4aUvnFJrkeKkbBJ3mfKfCDB39sRVBaHF6xcdWss8Ah8n9pCEWvqp7z6wd1efdLiifcWG3r16fFYwL9KzTPtbKCrN",
  "key22": "4iuyFF46xggrAzETFPBxmx1mSeMvDxkdRu7zewqToDgtiSuBQF49RNT3qgbTwyhRSPgbyvyemfysTr9g1rYERfXp",
  "key23": "5XT3A1qCUnoau4EQDS3R9AgqLr7V1X5vjv4EAhVMau353Nw7tZ31uVumk9AAmtkBcdaQVZjiPpdA6CVvC3Acnfcc",
  "key24": "3g6yTcYXiCDhw5GLjjvmokywA9jB4h5tWuxK6QiwVFTERjK6rx3jH5Mfd8VygYkTbiJw1KkDjND1TCBENxSRJcUi",
  "key25": "PBtmsBUgaf34akRLMYJkiAPhSQfRM9dLviwExEFAcwrhSWHPdxv4FvDq5dDRbXHquLesfQkox5RrgzmCXSuTQja",
  "key26": "436j5mgxXMigjTvdyYt2yUWvfeXjsqxH8LbYWZ89ivTKGDnm5yV3CHEJqrMdgaZciC8Tg91FhKmuuwPXuTYELHDn",
  "key27": "5iFHGX5mzwU2UjNEhe9BYXQk6X1p5vpfVXXpFXaYY3vaF7A8KjqFBRBJP1NHHpkKD6Jstjj9BLsb7c2aHHfVxE4C",
  "key28": "2mUdQdL9pj9xvr8Wre7FGBt65pLm2apjjaeM986TvT9wUYmkcoS51axuoDJRuLr7DQSjeq5Y1MZxPP5uyk2m7eUZ",
  "key29": "42YKCp9PWT5cyCGNhVThzkT5m7E6cR7RYLN6oEySHjj3u9yDxLQMLnzRAQ6ABZptcZ8hBj4Gn7HEkAUDwS6Ds3BL",
  "key30": "Rf3LoaTYExSc9DrXjMiSQPtEaN2TuFBq35ScaMUvMC5tPAZ2B454Ca5jJ1hSY7XLUYnimqvSA2CFcr2a5CVh6os",
  "key31": "3UYn21emq8bptBjRH69V7SK76D6Zdx72X3JB1k6q2Cp54r74ksCVX2gzGP6PsXxuSSu6UXHWTPRv2SWmz6tzai7d",
  "key32": "2gmA5Jg3actMZQ5id54chXh4ozMCa48g8bE6ALXacyUJa1uMrmYLSrcM1WpuHTcUsWHvTV3trv5iydhbh5vcCagv",
  "key33": "aeyKG4ADcLVsmVB67heqryDVDJcxf84hHzZ3Uy5RqKVRHXigE5Jw9YpT8GpEomJnyn3mbhsVNbf9Qj3AhfA81R8"
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
