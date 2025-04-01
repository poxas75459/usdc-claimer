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
    "44D2HmHPscgWkhFjdp2SQU2cyrTvqaX1zoP7D6CYocZJ5wkQMbs5FMSeHN54hXisCMSykWVVkGFC1nYq1DdDRGfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s28itSBAo8Z6CzS2eUJjFPTG5d3DqM2MsXKia9CxCEJYc3XCkyQr7DMhxBzwey4w98N5YDPAdnDHwzajcP2maTw",
  "key1": "24FZJEomKXRkP3HVxLDSR634wvPeeneoeSnWo29fHUip6JFBqiqQ3XNy33MKYe9MUwky9UQDEEhnuxzTCsqNFpdF",
  "key2": "4BxZGDcx1qbt2Mz5ZcjikB3Zc3kDeqyL6QqSgHpbFSWgYow1tLu7bgZB7ZQDp5eftzENCSE7BHm2qGwNNQUZpW7w",
  "key3": "5iQcSmQNNeXPVxZqJJuDTgH7Hn6xEsTyJVPafWthBzhNgEy5Y7NmNA5ePEXuzqgadU6TgqELaFuaY4SyxzG8Aevv",
  "key4": "5i6KVs5KSuCdyyq8gMfcMSQd4jDs9L97ua3TiNGe3n1UETa533U8S8nu5yA9wAbvnmM8XYE8jJRkjeTAzDThCvfe",
  "key5": "4gMhdyajcCiG5YzcE1AsLmzDopgCgmEtmyETcZNH4RrWTRRetWQ6xtUwaSoGidEXH2tY2BpALGA5pRnczUVUBg89",
  "key6": "3iyCjETfEJXpj9QdGgYh736kitqBQTGwUhRDvsuiiU2nmB4crt98fhDdWvgXCCp48k6ZDkHKRiwo6dLhZNzBFQua",
  "key7": "3eLmt42YkgmiHP3VSo8cJQkWJstaCQXK5DZ15648SkH3uPE6ciCVL2Nt6UVPQcyNtvQdU48T1AU18iEwbA6ZVYsM",
  "key8": "253W95CQtzqwB46baJ6fdvpReycTPBcKGkqhUMdp7bR8ic1haD7MMGtUEM4uwx4oZLcgvV6xcB3HjAptgvntCZiV",
  "key9": "3D35cLZigM6M7hbBp5W6MZ8woz7TnbyQwpEzRMzKBjEGJWTRBMTpVgqzomL1bxLfj9BHBu2FcnVVR5o7FKf6YzY9",
  "key10": "3cfMc3vW3Q5exCSWopcBWToYNybD3jYv3PPSpod4UmimVP9w45Annc8gEFuofNpUHkvkyL4xC4X3i4oZS7D9bdbS",
  "key11": "59zRiFuMPgfAL6gM15jkTDCLCr7PW3THtFH8cVjUXEwVGaSgoy4T2gBRaxyb7pZoVV9s3L8vXMyAp8jH9fP2yes2",
  "key12": "bvJDae95s4HXeSXw27TzzL8mb5rQ6jiVc9gVJ2ov3Kf4MCcmVFUQPLRAyGev4FWJpU6iSEZLhHRexTDLbPhNF9T",
  "key13": "5mdr6z2EHULSXY4ZLqB6dxJ5s75XmdQJ8NdGFfhctg8Dj2ahT5K8aQ23MQziy4vHHeWeXu5ExsNjrnC6VdmztPCP",
  "key14": "LxEaFPRiifgrBV5G9MrpnKfpKJH8MQufXdKzEt9eacfx92j5fmwS2gxzb4ajE7iy7HAXsX1585rCGmibEWGDWNZ",
  "key15": "4aZJkq4gyPP4wasHPL6v1wUdQGAw2hzrSKQsZttyipy2cgFr1hShE15buvrs2pYuoZcfgVG7vhaqmXkRvcfppsNA",
  "key16": "26jUREJk1YenAMp7LuLNDpjfgd8CULq3TjUziCYynqpB8f3nkqDrWJU4LBCusJCqZ1VU8cAYxRq97LGVgPXSqf16",
  "key17": "66BU1mAxYLjTbam9QvJeF8BgQGSb7sh3GoFysShTRH5hehJBHAx1eDhoa8m3vS7ZTCfRjzybrix5tZjn9vyfAU8E",
  "key18": "4bgWWTKJsUciLVYTKRfaqMve4oLoAXD3bDHYbBi6xx599tk9W59VESMcDYiwAgk84JzYvn32cFp34MKdD4XdBGVV",
  "key19": "4nTKysQ5TCAdN2mXi4yueT9ero2DJ3FLeL9gYAqokXKPiLh8EVpV3yELM6CdpVwSFJ66jz4k9u6kxQj3kVAbCqgX",
  "key20": "3jWm28cGUb6tCBCiohUdwJYqLrzdZMP25nAQYstwGidvmubyUF6maQFmWNa78c2YKx2GzdGBnHdfNZMYVVVoS1Xr",
  "key21": "2nZTi7XR5DcnCHAV1Rqv9AZxZ6eonj7kLfcU8NMzbRSUqXi1fhr79dPmAqHrQR4c2peAoa6dT8VMN5ueBeq8Qgoh",
  "key22": "3WUvytigtr2g9WTiq2cN66VRLKkuPmzjpmzjpfBMZaBscFQiVyWvr5KVeTohBEYoNekx1P8Yd3o7aLUqaAdBce6Y",
  "key23": "4T2er9GpaKp1odLnR76qtQ25WgNjxEMF7ZrXJ8NJF6dBsgxiXfMyqWxJ2WUYzaryeNK1gqKXcvZ89FpKeGSRZwTv",
  "key24": "SvDfZYL8pEDQLmdKcKfeHG5FwFShVSoP3UP92Aof9FJ5dHrV1MkZHwZjhRabnENNcAk6osP3Bq9YZfwU7RjPbAS",
  "key25": "ZBLVJXxHdXw7iur7QWWnWj2WGnNwouYGqQyC2NwtRgddvF2mo2FzZQ94mJSbhRBzGFoeEhPf9k34VoY6F9gHr1F",
  "key26": "2TNiiKUff3udBsCtiPQVHcUbuEAAuKG5aFLWZz1De81TrVvvVrPB3nUGVYeyKKc5dpaJzTqwJyEf6jdMCSmUr3P8",
  "key27": "66V3FtVkxHWKNQ4tZdZzQu3SgMGwDPfyWMpcEUuyAK8xGnVYwmh634zoYfok7jnGfakymrjJHcddyveEVHPAVTJE",
  "key28": "mcBgZp4GZoP5WwZmZufFD5sS69VKsbKwNhHaEvBP6287j3qJ4oNsf9g6X1wBJkMF2uAWqBovKdqo88YSGoLC3dn",
  "key29": "3uzTNxoFV2bkQWohHnrvNw24yeMWbzUern1P3VrN879cRzP15W5i38fRTqL99n1ZVJBSF7t9gbRHGEMnCB3jJXoS",
  "key30": "4PSZYYGWRX98efEBeuC5dLstS9ouCs4UrA2V5zd3HUwZ7NEXH1dYa3mTbsfchkZCPjxrmTDSssYddYSHCuXY5QX7",
  "key31": "5PxgtW15qrcs84EtXq3S9BbeTnCq4Yy8GNyGB4xaSWtcVS4vkvc2vTb8vxGQd7qCiHzt8nSKvms84YtcQz2tznrd",
  "key32": "4w9ZGNyFqSbw9PBze71e8zLCMCtHc6T9xetmRkB2K4yZnWhu3FYKcTEzEeZNvosrGEbftNcYcjMx6jjB8fAZ4KrU",
  "key33": "3GE65vgWt6BQnD8irraohprgruAhws7z8jD4FLtbSMXm3CrzdoB7k5pZQ4JmTydE9SgwR4pog1t44eFfWetYaXJh",
  "key34": "u4vdRYW7aFzsh4SZWdrPFpTZ4TzcHDRFoKTbxYSnJQscnchi9o2wzf38akA8H3tRPJGFYwgJ8AZN5e5GKB3qak4",
  "key35": "3v4iiRoUVnTPvoxz6SrZaKnguL4NHSgCdriu3EAqHYmywKYM1dSr1nwAKVynmzeq8Qo9ttZddFUukFRJHD44BwLt",
  "key36": "2d3iJwPqQbAiBZRJhKSyHd5n7S6DXHHHSiGJBfAZokchut8yHTeiJLet3HgimEqkmxFWY9xCLisRZuWBjWb2xrvv",
  "key37": "62y6YTHxaE39u9QMCqEak5abjE1sgRJqdDfMQTduxS7MuewkKyqobZTwjNZBcRshxnfMZXHZNy1ZApacUp13ginQ",
  "key38": "sVMWjQeQCE3fepFxnRuoJp1yu3rtniQFgY4YLwF93YZ3KiiP9bpbq865KCbr5797EJzJsw2eeBf1GDRryoE5sYh",
  "key39": "3rxEaWs4vQbSyG7RDmR1Kg2uxSmMgA3cwiF9PqKrCRe3JBWBz8QngMdx5BQJkJ163xmVcHmdtY58z2xFi55e52UR",
  "key40": "5GmVJ6hDDruBuxhDyhozJk5k2sD6WgX5WMjcZahpCJ6V8YsuD4j749AoZmuU2ArQaKYDdzmAJCtzzVPGdHAsspoG",
  "key41": "2obN5dt8QztyagY8XVDer94GzD1kqNPhP5JfSDgxe9vWok4r6UpmtV8QQR9d51ix6UDN3CEpToXuqzkA88jF15Dg",
  "key42": "3nnGxDDnvK4cfUfmsG8qGcMsVPkh6wVKnTySGQ7h8vUA8Wty77iBgNtCVRm6h6pS5A9a5DwRvCb6XfaMzrE9cTpK",
  "key43": "4XKAW5QH2tbR1hViUw5Sxy6LR5dTKFL7dpcT6pwCtJQt8ikUA3dbfNTY7EJ2LEWcjyyYLZKBCN7Tb1xBygDQg3h",
  "key44": "2RBab8XzKx1K8hNa7oxoabABmQG2uNcSNqcJq5pB5jwyccLc5HsTxLJhUhmGJXFwDuPjeBgciMmLgW96f6Z7Vm8Q",
  "key45": "xDDWFwaRGeiZXpRPKLahsndMPUxMQprvZqLGoNZhLqAZrpmSDqRtpwZvVbPs7codUg5uw64n5Yz7iDcAEmVnSwT",
  "key46": "5aCAtkQBVDZyXAsC8qkfbWncKjR4UGjZkwg5P6DCzyyGWjy8G5o8gyhJHSrkUXRb6jHEbbvx3eoCnmN9mpUoePxq",
  "key47": "H42zuLMMevnxdXxJ6nsxnxfNXMZqi1RmwqL4XBLVqxeaHGBzNhJ5s5P6JddEpkHDuEoGPpaBvGUEcgG6bJKfUCH",
  "key48": "4eQN8Ab9SyReRGYqKP6YY8kQPqr7A6r3tgyo6qyAfBupmXJPqN1gQ3v4TX5PZSwknJhFy69F7ARziEiTcZtYnjhA",
  "key49": "3ErgWJ2QYc8pTdc6GZYL3rsXZCxMnr8jfbYxM6591ogWz2xT5gvxbTptKMToBBMB2FD2japbUzkc3vRN5LEq742u"
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
