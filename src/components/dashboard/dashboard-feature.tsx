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
    "4LyqBEE2JmRAzGPtBQV4Kmav1BopJ5PDzTAGFb1AHiRjyoEPpaLFwbRx4irDxx7SDSSV3n6SRmK3QFjDkJxTHfNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fmRHqG4RjYtXzUS7QYDj9etn23vDAndoFKggpwpkZA72saAK7Eu1UZcpf1mtydGVfoWGovpdo5vnR8iyufiGCKX",
  "key1": "3BtK5VQvscgJNNmMAzmx58Nua3J2hTpmSqh8ccCULE4mmhw8o7Mj5tGJ79JfDREDi8XX4VCmZMJN2XW7rwB9xjGK",
  "key2": "iRAxr1WvMXwNcsGNxRPFcHhBaDMd13kTat3pKyxExE7nNdKfkVmpL9yF9QKbjuZp6c9zAifkCf1u7Tr9sQRbXS9",
  "key3": "4RYPEUv2UHJTNp7G8771faHD3H6kiShrhfMxXKksP5b31v1Ge4zajLWkD5X1cW2Zb5tku5quSs8F8FxunaEzhjcX",
  "key4": "3rWBiuNV1mtMn8ecCaDcTPdnY3HDzpdihJLURREq5cxecuXKJeBuxQcv79t1NGFz4iP7gfJkeubeRephd77FTKTm",
  "key5": "4rk3JWjVu1qKpBbT4Gpepghrtogoujezj4MHhwfRWMEarQn1xrg5faJbjVuaZn316zkNL36imKUi8UVhUtDEPjve",
  "key6": "5Y6T7Hwgqnfjf2VHB8FM5zSwPMgb2xPWUzVKAaLLS6n2GQisq4Qp2kEnL7itjwtsfzANCULyoAgaQQof3crvSFpV",
  "key7": "4T6cA7H6HuwrgpM7FjLbXMukmNwXXvJRFCEee19Mc3isxRwq7Jf7DCf2gn9dfSsg98M7TjVpjXH8ipxGHqYLaWKj",
  "key8": "21EC4H2iTE7cvFtGtfrs1ZzD4ak9iRf6Azx4Jw7yK8KWAA5BBBqhyDMS8F1M9j4esnRnKDCSB4FjyutoTtUg5ncx",
  "key9": "44sRvsLzrHXtsnoKw7JPbzSnhwRttsZoTZYNxHvHuJhcNPt2PNx1wvRkyghieC3ezCQ1aLX3rxvZbfGvWSQp8qS8",
  "key10": "3M2Hr68JvXEPfKn4sSVNv1NHSu2Zx9GnaUHDRQPkALeFqjuyPEJX9iT6To9c1D1Sf5mf8FMKk1Qke4hCQLjzTNK9",
  "key11": "4vDfqDJ4f6XNS13uasSXhBJcbC8DV8giAjdXC4wc2swZi9nxDHKP3u7ikEiSyTp3afQUYfaJqxfuHvwCnHoKeoiK",
  "key12": "62mBeFpzhkNV5bU883YKTibvLrgaCSEQnn1uxNkY6S5HAmtK9BBWnpzznfuPhUxi5y2TPfweaTEk9mWEd1zAdPCw",
  "key13": "U9VnP5YKXRCNcayBrERHgZyeZGhpXu85DviyxNYvkVuFnt67b9314zVsK8jyfYoWDiodR9mYciGyxeVh8gEB2jW",
  "key14": "3taDFSPH64ZnJoB7oe127JVDjBoT7XgJvspUDcXKkuSwQ4sr1bvWcKYAmNtwa9JTt5uLLLvcLeNNh3heKUSGYisc",
  "key15": "2T4H7QoTmmHpid9veXUfo38QFoifvzWSkD9SzDCzP5HWF5GqVDvzZM6QiWUTH3aqFQLBRKG2CATUuR3AAetZHnDc",
  "key16": "4WjrKB8MyYLcWm9rjCX4U9dDZ3RGCxUvT9Wr9vFY3KwtzZaSw1YdbKgwBRWdh4VQ2ndwWRoRZt5HQbHmbhv4xUHZ",
  "key17": "3XKiriQs7C43g5crfKeADCGGHJrMXRruSdJW3PYzRs591FPAoYKBChcRp2a1dNaz4a8u5KUNY6AenykJN3rnsepx",
  "key18": "51DneNhHo9nxe9xto1HHgzvAWn3QW7tsF3RGWrihJsJ1CbdMXWpimsTGVdtLA2JYzZDrEKVzm32EUc8YHSopXPyA",
  "key19": "5YN7mjwzFDT7QQPKRqn1mhdbJjH1ngys2dBfJJ1kMueHHXti1BnPvibwNqvNT5LSBs21Jbrg9yj82v85W9BKkURZ",
  "key20": "2ueSByyKWzQW6bCVCSg56foXTaUeLvsJzLNcSsbVVZ4wc2jmQcAfqf4BxdEXqv7wGBK5B5xy4Qb9bCYs1p7efdrm",
  "key21": "4YGSQD9ThL7Ub1edaNMUpFiL6Mb9QHnJ3NKSN4WNGvFRoMKUFpRDfpkp7HZq8Mg4aJzpkym4LWffGmg6Jbqq4kKL",
  "key22": "4LygRrkUcuFvZtYLEAXybw5aE2DWepscXNQEZgC5oWraYFoDnpXshLpmKpsfKbLR1PEHh5oavbWxcXR4giDrMgeY",
  "key23": "W9rXKHvVm5VDDVTDeCqBfSofsT5quiSjLw2HW9jhdSRD1ksSScCNRNP6kcxUFB2YswZTTPC8vduH9AvnyXyuQYf",
  "key24": "4yM9R3joqCuCse12ybSJ1UT8duE1CSRkVPebGtNK4TSCRppExZZuH3TfesgZTjgr6JYS1xn6SSdLRNArDobASzmT",
  "key25": "4DGKX6PdthLv6ezyXnPJ13Rue4LjCHtwCbgRttyQqxE1HtFKJGqYC4Qp8H5GWyPZgwidxsEyjprHpZVHoMBk5W5F",
  "key26": "4jou2NRP86pYzzWp8owssJANR8zE4hRTWXsmmFGG2aGrZXtx3JhTjmtyfZazi6DnkRBSmEW94Y1PLfimo6L7JuR5",
  "key27": "1T6QLWYT41yBUMjyMDtRXyePQ68QLttRGkmrWcxG1q9ujFZrpfFUSvg2442wEWczVnvy7mGwd5kswrQPripd9hK",
  "key28": "33UB8SxNTnqSq7dUTE2VtgDKqg5dDPREbbZLLH8aUtKYWyKeFdK8Le4AbF8tx4YfZHJHD1PNmTjjWJSvrJWhnyhz",
  "key29": "5Y47RYMXL8raYvtNMTiAPpFjCJVjcLsCcpT2HtU4T8GScUD1mHQHERJpedgyZcA85psbFzjWKukuPGvqRcJb16gg",
  "key30": "4j4D4ywSoNkApMnEygXwRPQe1wYx9YPuZLhUMjB9UhCgwyJApeuuZtoyqL1n1PguYWB9EwopbsNzbQuMRfvystKD",
  "key31": "121pscqkt23cD7PWqKvvANN9qH4Jnua7iKEnaPrGY5x99TKXC8jCRvTZC3VpssZPNQVCfUZg75XNHpD1LmdiMa7W",
  "key32": "5MZ4n4hSHwEJ1ViS5Ur23dSVxiET6amgxQ7XdDMi1FcZkCqnfpYmFqoSEHCbUiqzVSXBH3agmyPuLvbQCGGjZuuj",
  "key33": "5Ky2Ebs9XCZr7o6QCynDoe5Yo3HCuo96RMYGC2xGa2QX9t9qXX6GNfWPC9wgaidBzPp4MqeJsQ91qduiV2qLCUhN",
  "key34": "2xkjzMf3ts6pGA6gbTwyf9tuaiJZN5nRZfgTxc6rf6wSXReMVACcyVGdLUSdFdMAG3s9NKbGYaN2V7fJxcgFUk9X",
  "key35": "4RuqPjM9ofn4CV1nBxtybA9u8jpDAsYJUQoyJWULbhikKRzUxzVG8p9FxbD8TBZEVEk9ykCiPbss9x97Tun8wbSf",
  "key36": "67TjjJv3Ym7rKE3Qa2zRqhC7sTXZZ2cEWZaxtpnpnYuPRvNtL7hPtKXpDMtjWFeNFdPcksz9cpbQHWbA2mdw4cv8",
  "key37": "4c837NwfANyxGhtBrHGfWs3V7kAdsXT75bhXjpKH2pY3G1YUrv5AwpdtBaaD89CfiA6TmGrndQhhm9S1DvJAHJGL",
  "key38": "5qyMNFfrx9H8Qa6cao6xUcaN8xiCgrHoq5UZCMPn9domzaHZ2a5cgJBz5ssc7diT5HTbz44ZkhehdVagvy1jvPWC",
  "key39": "23Ryyxd6HjivPwnP5piNk7dqptFPAHEfBjG9fWTwpEvRrjMpWk3kZNHW6Yz9fGaCfMoEHvYcm8pyFmNpwqtkyrNH",
  "key40": "4ctbgh5uXyuS55zLuYz9MsEZNf46SeSmg44SRMAicTEVFCzmoifXE6kRg34TnQjddnTSQvMahrFuRNkYopjz4dEe",
  "key41": "3JeRjCLv6jzZd5gauaq7tp652jCbRYhFaBNcp2NVm1GQLNR7x2JbAtZvzM9RjAjwqT2YPS5nwaQs8WLxXTbzKzfU",
  "key42": "67ctVvHAek7t69f528NuGyLVDy7YHxwsBFowMm4WbrdDT8HM5PVBhF1fFMwiteWf8dBey2JPD6FRWWGwd8DpYyY1"
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
