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
    "28jy4kju87pXDqrd7MscwSiyjrzkVhMmFn8VYz3WQpfhw2j3aFpYawAxLGaBPtuQMnyXgNeJzhRab8fFTFoEyBC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ntHwXyedNsWMAEUcfCogoXZsB3g9Boegh2ANhtDdrsosq2oyPKooxLo2a881xAekqKPLZkAGoUNmByLBHwqjZeh",
  "key1": "qgLZ8KRwoFS4SQXFvUzpJh4vK7bXk7se6ptT3B1c7dky9JaKkxYysYQKBWHm8n3chmsW2QD3LFin6pwHBQqFm3e",
  "key2": "hsSd8uNt8Yh9C4xKfzJo8GXmG9Rfgtd3kZ9cg1GyFs2r8Muon8xgzoGUt2MgDoZL1s8wFhf9NxfUHcM2UDL6F3s",
  "key3": "3QtwEayaGqA5LwcyR3rwmMRBdU1r8MRrEzVobme1TLgSuNo54CUfpkrkKgMSVrHEzhbgeTSfcVhFypc3SWub4CpF",
  "key4": "oz8qwNqRxGKQcGRmqzWGLCyfR54PsbPYkgV9yMQeykVnh1Bt7FpyzVhpvVXQ6qY98DRxSDhPNAsQoMmH3rQKTsw",
  "key5": "VdjxZbAatdRVNEAuVEb9iYUD4Wt2q1Yz7fXzPbGDmJQK3t7UCzR21H7AvSecfMKwEQXUuRYhYpfi2BeYfaVuJ22",
  "key6": "2bCe3yLyBeF1KaNYyyoMqBd9zuMbGW4sK1z4aPQmNaixXdweV273muwAZksoB7nr4YJYTfTjCkrzf9ULazB47N44",
  "key7": "3ShwSPStK2wkfGDnMqgsHbUqzq1bMKT2GoTdcbAjsuUwf1QdsV4f6jMh5kNpPjwDc27G66uz7tmb26VZMXTSvSST",
  "key8": "PF34z2pLEPGun4QprTHEhNZTpBTJEFBt7ZeuYimcyaqMA6cRSrJvhVs8eWGGmCPdgRcUTvQpVVA3C3nyQEBLnhT",
  "key9": "2joXWMp5iwKw719hxpumjmZF2hgRJ7HtdWESgtkmmqyHthpavayc1nKohtzZqtyuj4rBvRBurEiZKb9fVBcFe7V4",
  "key10": "3dn2avThGR3r7JefpKKyD5xuWBfnDVoUtvg9hu4UKFuo8hT1XMeCGt1ZTPn3okp2HkDmrCwLKN6M7gaxPk9vFajb",
  "key11": "3ggdqfYSecJggKLsLmxxon93RXonjYKvxTGxrMuBYJQy4fxnArsdTJSqi1GW436BZFK9SiRRshFAoznWcXAL2ePi",
  "key12": "beMBP8tckaXMecKikDzYHf9tAxcfSa2n3muh5ZYZjcrznPB9TpAiBH3Y8cifnYFzApaFdtUo2B1w1SZeeY2vfPZ",
  "key13": "2Z4eRybMRAjZreNvamLdqQctcLHzcnF7pGSV1bnW2gAmnAw9WNUiJYk5aAC376pJauNpP1G6uD3rQsYqYg3zEJSH",
  "key14": "49oj2VTA5uw9Wk6KJp1hHUTYSR5tprsrAfiPxX4r2xPoL571k1rKCuApD4Q2G7DMk3JeS9TbRPHzxE27zjH7dTGU",
  "key15": "2dphFDp7VxhST4C3AhtJBZfMafgT1hAdWgVdQAQkkyasUpgtqxdg9rLaso9tGzfQqaB9Uaj62yoh3VT4UyZtxBYG",
  "key16": "4BHuQW99SFxt5RX4s5TpT8XrMfJnucwQH9zuRCwYQwYP81DqrkWcforQzjvd7ZcNdU4Euizk3Xeam5VhUfmBfru9",
  "key17": "5s1gZef9giqswUxNcnXLv9hWwzCkbi66UmBEpkZUuguzfwVJ2nSsyX1mRwALnVMRSvPnnqgq2SRf67gkonQHe9yn",
  "key18": "RmGHFiKQdkLXoHUQw1ktQAfKHgUCYvhdPERkULxKfPbc7GZr3uQFBkRtKFj5qQtx5XJa51UNFrY6K9XvwpmrrKo",
  "key19": "5E2jW46ttskQt149TRuEhGWczceAeF5axkYGwTtso3aijuU7qrKcgkTPZbdn4jLddBqc68z4zBwGAwoUPC7bgR6n",
  "key20": "5huvRUJyMsmXFdtSAgS9MaqZb92hijrnNqpLtxRcXUpDu7oBQcTDWoxnZafuMhHrDu8kuu7ikzeBuFcNs2rg3Jsj",
  "key21": "646nUi8p2hYoh9ca4bkd99pzzGTFKh1MeFEDBa4VrWSS6WFr6EEbmUCYTktWEh2EFXhqho23TRFmNfhgLan8MoD9",
  "key22": "4r5RSSNWqyWHodWrDCf3bakmtDA9UADBi6JBCqLzc4VdZ1HSgLzvGzkTNLBUQbrH2GYa8UXrRqRftM2wSDchEEMt",
  "key23": "2mXZVpdX6yRmJnPgrThd9jRYb8tGTpi5sWjn5u7jYa72vyd9TrHxLq99VMt62TZjcJThqrMPTxTEGssjUpAY8kP5",
  "key24": "36xNUELrCPbmNqkAtVa3KDcNAHHLTQyyGs8KCSyHShvSJRsZZEvLjS4WCSGVU641e1i9AVYHgEfkRWRjPhKx3WZp",
  "key25": "53o7eUffqSvYcj64su7pvbfHLTjgpLEDrvkbun94LtyC5zj5gBJ3woWC72XBxmtt9mm5iXCKJ6ZvhMfW6ueDmSQR",
  "key26": "3xuTxpnYqxrKvKxfmL9wnvpnkVgzsSATTnFMF8txSyoeUz2LyjZ35guFbLfda27RqeqNv5zKb8oiGQaSZg35VkjY",
  "key27": "2cCxSLMpsiUCpDdxxPKUMo63xgn8vn3Vg3SvDecCukNs52WW8kTAkSoxDZ2fofDYyTURpPkHnURmDPfaK22ih1s3",
  "key28": "4qUqTar6obtGypZ4CAkueacth7PpRXLh7fs7tXfnnpQLwY6R9Tu6Fb622hjRvywMZU9EphFd5oNprnrkh3gosMd2",
  "key29": "5K7pfy3ghHQs8uv5FSQqrzvaH2XA5T4u6pe9BWgA1JUTiLmPmpLewp62ddGW9ZvE68JUWnmWTs253ELXtfx1vMNd",
  "key30": "4proMuQY7KBXBoxWSJY3mjfn1zcpJvV2rLhqmNtwikGcRMP3ajeXMrAVG4pDKN7JsvvJmDA5Ef7q8bUxB8u95sAJ",
  "key31": "JpLhBUavYcqppHFGYNirjYH4KSv5oxCr2HcXg7FRWvA58jgndZLPGNqWTBhQuPbAqRGpYUbFiUM1mYvfdXoLZpK",
  "key32": "4GsM3PB35DeXJ8r4iGJBFyngaLMJhuNJtGPqHXtXyazwKZbJPBmQzyQuWarQG9MVuHpEvYf1DkmDF4hJoeJtmMvn",
  "key33": "p4jHBphThF5zx53hgP7qSapX1yy1un7R1mw7hyRKboCvHRmU4X6B5NFRokW5e2udw5ts63NWpSj1dUUbrz3cRFZ",
  "key34": "2SDJaABejnSvDmn3mesqJdyM52WUCJHDKGMkrpX5xs9LGHMB2apMN4HmfEfF8ynBmTM3menqyYD9xqcwmrX3HpcB",
  "key35": "4BcNK6KWNfKw3LALM97RveFxGegzkggDc7BhwP9pcyqE8MP1WCWueRfdSzPZWeKGX7HfoMqAZnquE4dDLeG4T51t",
  "key36": "26yMm6fknKRDn9dagT3Z5RashXbjZr5urEHD5zxrJca6sTLPGGZMvRjtxv9hLTn5h9SmhvHrvMqq37PtV7Ga8HSX",
  "key37": "2ipenfuyFUcoojWk4jTo8i4evNuWJgW65g17aG7xADZ8KSgVKLxD87MsfzSxQthZmmbYnmakhhtNnzeBgwyziytb",
  "key38": "5K2LNzn2jJHVL2ZTeWqozP9KfFqEfTq3oQ9oWrVcxLK8YV2AyFMQCjLHNsxXHyEvC222tm8BQsBK2MxV8gT5DFiX",
  "key39": "4VCgXNbAsvCr472ocJMBY7B3jD5CwMHevxEQxf2nXJoCv3QZ9QHfA6nVRSX11pmtdH9Q9BcgMmBAtUXgW2AghMHh",
  "key40": "2H12uRBtAH37ddeNL8PDRaHdEKJ3hQWc1Mi8mgNu1ZWhkY28woySA33BR8wcAhUDx25gZ87MR26WZKATqMoi8A5R",
  "key41": "2t4AjEEN9oqqCnTwL7FJof28aP37sAUagXcPa6BDheZFDen4VWLzBomaKo6e8nGch3MnRuAkqxGvzVn9mPxhVEq"
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
