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
    "2PrMhcP8aic88zWX5uhkgGwTJJ5vGhsw6ariYrKbNBY42TvSk7B7bt2n7Y4J3r291YNzCS2PWLGyWZ2EYkTPXj4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dccJmENXp4p48YPW73DFpCjEWTqJ1Ys9YYfbZZKcncKqd13mEzBFg866g65baJQiBim3Euk4UkwhnYgnUg3HS16",
  "key1": "TMdswomXhKorbxkhiYJcMeVKHXjLHcTDu9uwjLteaNHj7fwAPsrpTn4ivHqeHzymXcPtSkyTMwG9UZnEW5xxQ8W",
  "key2": "2DRyf3herdpjfcyak2aa1chmJbpFpQC81oFbZDhMvGdhtFM64nSLQhdZcvrC7cqzccFtyZXzXMfXJhvgCobDuoNM",
  "key3": "3su8mXNPm4KbF73tpeFBbpVkTUJZtPezTqAzSb31ZiYU8iBnnjr51s9vuuW1UMW9yFXLHYkT9FALpSGsqtRHWnpq",
  "key4": "dmTVmGn9hi9vhP7MwH59kJesCa6LSwzNL7Zr7kwU2DBVmvwHCTjKQqtpPLDXVkvd2Ujc9kiVPWNY1UrQzi4PgAZ",
  "key5": "44aA8UnXTCpAaDZAbnamqHp8Vv7pAptY7NyTpkfvLEoFN95pzKviyww3u1ytqLad1XjpEfsXVVo31A53kdS3aTi1",
  "key6": "2VXupcwK8KdwLSBNHNLt12CvG4HUcqxp26rCQ4hx7Qi966rUsxDxue89QiVrAeHNvzyXv8yFbxz8rZb9sUEzGmUd",
  "key7": "3NQqCs1TxAXiDL4ZEtAoSMRPvMWXn3s3xE5eGPrYj7jzedZhJE6pkxBXhiS8r21WfYQH5k579xqmgk56B2aMjCHt",
  "key8": "5RF1nHjRREhLzuzUZVEooAL4WSa9DQ9267yRAFXkF3ULe3PirLtcdcjsQMyMrK8zBkVvszgQxVyL3cXt2MepqHeY",
  "key9": "4iuMXDpJv9nzPx6dTAzUkZL9mKgf7vk4uX6K8E9sk6o8gSjGeTVZKfGCJbuPZ3ugxbzkyyHNHUCyCNHgTzsb1jwo",
  "key10": "2pwkv66438yXXUTVqUqXXYeGSdec4GU4rPa2k4tHdwsys4ARrfQkFBPz9RxM2JafkhSbwU6z91KCrLwynRJXM6KX",
  "key11": "3uNGisaz4EdHQsUtTD6u2FwB1CAhh7UroZBcCaXvGsaGqK5pVbQfB75jb98H9v8RSgP7upvM2pcLPPxkwsNW4yjL",
  "key12": "fMQi7BFhZ2sSvkwLdJYpBZv2DmCpqBfHSzyjFTBAsz2RTCD4fBnVxSgdCqVjxuPsBTz4MnYTAZReKDxjjJ241uD",
  "key13": "4dMhYxMDrdFE63PDBjEiFdTuvrfFNFDjVvFDepovgWZ7YHmARH7SvACzWneL291U89g8y1o8GHRvYCseGVK2zbin",
  "key14": "2QoRXhoyVvGEGdrrZMAnzr91vL7vUb93nmwGPGNkJE86MiUWK6C6Yv5GnW4eVHw2LmSV2RDoHHLQS5wYqXnxALfh",
  "key15": "2miPYG4BhXqua3WPNiZ9PKEJdfiuuqt7DfKbnHBm54XjMMi1wbuPhNLNvjySNFGpF7Xt7U3fwuqdtGz3fP4yaRQ8",
  "key16": "X96FPHs3rLSHxitkGUr1E63gQzq1jyD2NWaVbdEo2bCzr52As5ja9ufaybCEz8kTrfmCBssPJ4Wxejw4f31Adw7",
  "key17": "GCM146qA4fshxBTSFdZJqbuy13QiSyYX326upu4RqCf7R4ndEkATjtiqaQ5wKp5HWCQZfSqrK4ozcYGVLrNmJVp",
  "key18": "2kStdgzSBDy7K1FMpBeYbRHYMKRJDkby76sBVn6rsjuf3AKuBh9EScvfQMU9iJaNemR82RbXZ3yuz3Tue3vTj2Lw",
  "key19": "2fLq6Kbr7aGoVbQf9iEFmtEpounQzoBNp5cLkz1d5RGb3Q27jdhK34LCQkkXWSD4YysUiY19oPF3ihZJThxnmMSH",
  "key20": "35BeW8yRTjB8MeHwqQtU5v84CPsNfbxArA4hSfaVpxBhbUT34wEMHbzQGPMp2wsPK6T3jJb6FGM81813DsqGSsvA",
  "key21": "KBgUvcHZZy7L4kiZvRz33EjBRiD7zcA1HX681KnddsJpXahSET2NgQ3JaeXy7MdDRJVmhLaHkPMEm8UZHPFgs84",
  "key22": "3Qrtavz5i72wnyBa9efv2BBxMcFm3vRqTChTTkkA2DespKjT4cQeBXqALxyD8GWZqLPHSvsJey3vd3CHJsZmG16X",
  "key23": "BiRASLto4io5a5iyt1CK4W4mii4n9meUtVnA1zLZMd4cf9mMddFn23J7CKogijjgJ93NJFgvQDptxc2px4eH88J",
  "key24": "4NcXvNXkmhuNBdmVZCd3PLe4PJNicXf21Fb8tCV6bSguZsrkTQHvRfCXKTfjkXyJMB34exRvMBZwRL5DmsRtxRaH",
  "key25": "YLVX4bHpyfBFZe7HNcDoaxRfQfAeY1pJ8XJ1ivco93yz5XH6hK76o2kDsKKZ5xRC25WSDBRp1uA8YdicHoVnv7A",
  "key26": "64UeYqrFE6kCJfeMqMRge7JYZnTjuCmw4pWbe5CHA3VBhFDNVtTjBdv8UKgKKT1yKECF5fS27WudeS4c33Dpr4VB",
  "key27": "37ZB9RTL6iN3EpVi6rfcnYnm1NH6MfoEX429PwvdNquDkiKMK9FvRcUAhJTCQ5Ck48SoAFEgcYCNjqsTx7G5a88M",
  "key28": "2a4ayYzxdX1gHpzc5n488KwUf3hbqM4EPAtyFnCJNGUYa1QQ4qq7Lfena3UWjpCH23WxK6AUXvprsGgLVPe9n46f",
  "key29": "2cfiN6F9Naix3EW7TGBZKQc9baER8pkoXJF4Ay4cQBtr6nyRknEMERB7RR4qACb5r5ApbpKR7zNfbmsApSiL1M2G",
  "key30": "i4FCDoEYaBkcsLEN5Amkz3d4MEerQHVf1kvFVfWohTsrS3JDpnwLuxXkJBQPeX74NnQ3WRMFXSKfMCYDsDv85Tw",
  "key31": "4AqNtdsqAZzWekc4hNSJp5vSmkfztpWPqaevLNtaN8PfGgJT68Vw6uJbQEmBUcXWhoq9HdqBjGrJvxSF4v3PLnjL",
  "key32": "65EtLfgvnhe7zvQKjrhRgraHEoo9yQN7oPqEqnS5RcVvCdx2rFFMFSs4d5yJGTZ7cr5v7rLDfLK4rUAJFkdJ7w2p",
  "key33": "4xtq6vTa8SUgF4gJ3w8Z8n3CTLB3Q3dbJABcrcvirKDLFTdfwyHeLH5QGPnAS99mrt2NSPMfqdtT1EujPHeGznro",
  "key34": "3wWR9634qqL6j6bFHZ8uT44emPRStwHAJ3PCeT4yLLTP2E4Ukxc6tQhZbTJNwg56DVYb6sThvdzR4r9i17xwoDVs",
  "key35": "5HrHfK3qMurdYptKCM8EutDnJQosgtNwUUEEnZ9oQQz2xd2H4r3wNhKNtYzGi61qhhzC2Cb9SK6P4tAfnKBiVs4D",
  "key36": "rhpXAAuvTAEu3zxtAncbgxna4hZkXGPogMQKdzbeedkasdJMYcFVmnk7MFPSbYeKn8soKoJCTnKC9TgD4g1YzsJ",
  "key37": "xFCnpuDwm7JckXKiwX1j94hvXTSgWjTefV9NxxtjBoJR477yppoyvmzdAmC5GEXqH1HFdzyC15edo783NDEj96a",
  "key38": "4jsoyfXdkKJVipUUuWxxS7BVdEvuwLSqTJkNvz7j54T1HmviXQMxXvejg4kV7AkcK5ZwzvNDBPAx1ZXmYaN2w7eM"
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
