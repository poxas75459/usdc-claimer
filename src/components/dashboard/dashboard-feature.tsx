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
    "64NFCPDqrDmjEh2EuSoEd4TfvF84e3pok8PqCxj8R4JM1D8L1YqkxwMEkpkSbzaX2JRyhQerugNsKToJYF8KYBSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rAGgJxB1XxEnV2K7Yo5Xm6EdnZa4yW24QSzk1UR6Ey1qk7zdr2MpYtXuBv79p4pwhgdMZVJs167wqpTg2HyXeaV",
  "key1": "GiZKqRHWMAyJ8KnvcLBz8rL88E4NTT7LZDtTrAZdbsXjEMAHddwXCfVNrjTXBVyW4eMmAfoTmzZkbJism5QbW74",
  "key2": "4BDkdGVhH55BYuczYDucmWYFaWkgexsWb6qtth2tg9d8oVse7fYr8pHLVr3DnAwYLGreA8SCQWJombLwa4fHczFa",
  "key3": "yPSxHT7QXRi4r59Tor6GcitnG275VXqkdKCsRxoDHukMgiGGbNps2hwgkb4gZbNobmRGGJLEfeWsXyo27QbugHU",
  "key4": "GwDGHnf2ow2RiYqu7gkxwVBG7V8QsH9sxYLghMm9HfiEZhsgkzFxYYUWjqt97bSBPFvgHyoiu9voRD4Ttuc2uxB",
  "key5": "4iQiZZY5gnHpk6UtCAe4bRg1nTqDcwMwoTMPXkdz4SgXZhuan8F6VMZaXA1eM7EKFFub61WQphbGGSxEM3BepxQw",
  "key6": "Aj7HSJRnhxBSY4efHCSrDqJnjMTzSvNwft44L9hA4jozuy5QjtRo6cpZF8Q1BLyTSASdzmCDbAFDEHJ5t5KEY2g",
  "key7": "ebZeH14KDnjH74Q75eqELo9AFHXxBZ4EZEPEDj7MXofK9CPWNzd2bXwnkjs9HdgMiSbSeTWHS5enD7PrLjYMiaE",
  "key8": "5SNwPGALZCh5KFH4U4Ce2Fi1nyu5UTKPcthxT34xnocqv9NKEsYrn8RyT6gE1c3nXPnnWnTRLsr8xaTMFnh98FaG",
  "key9": "4dSCotn9okdEkPDFa5vEh7sWg8ZoLm8XSt9TjvKAUnf6s2pntZa8ArWZkS9NkZJRduqUSy52xiC3f8DzY7mRRP9x",
  "key10": "XvJRXofj8FaSpXycyrufhSCzSF4JiWc3GF8DXfESmL9YTmJYghmmhbJ4dqouvMsHbLT6secU4vGdAxFgXBaDK1R",
  "key11": "3AJLjrzefByDdckJemqQDmVerdKfxd3QdDRPCiiFqc9yfDiVK9i6ev6Waua6WkbY41rygmr7XKxh3Kixzopc4uAn",
  "key12": "3kvP6BnCNuwf3oxepuvUEMWysGswxXLgsySqqWHGtdGJ9zxyDEF1L5mRqz5hXs2rDX2foedwEaGWHFYcFoyEshVL",
  "key13": "2miTJks8YoMoemGCqvEWJ6SV1pwcp2em7ufRYLa4duSpVrcKC8t4t5bvnwKLsGXzD4FwYUzxipLtw6X1uCKZnPEu",
  "key14": "3EdXj1CwTmMokNjfMc85LGqjsTKjxHjBqno53QzHyowFybWc5VS5pxL9EJAW7FLLCjeNBRzTfd21FwpyJCLHXnRs",
  "key15": "2PK8F94dGpWm74ph3p3LXXSK1xs8SP31o4xYMsVHuNbXQGynNWGwCqzG1THosRzvHkWB5HU7EmZyHZ5zNES4HAKA",
  "key16": "4orN85SyCeZjmGFwdi3WUKLsB2nB44S6FvQW7M3jtHoLhtCtz8fsLxT2FsK4zdSL41742EALxUia2Drj6vQzoH4f",
  "key17": "4DMgxymLNJC9BVr6Vav3ngG4qSihEtwadU1bGMs2kTBp3i5wRL2yceQdsvheYh53qQi52se7WrN9TbQEXncGmTyC",
  "key18": "4yFKAXLZQXUBomzrWZoWDVc3YgwqVckXaRYe2QgjQ2LsoMKLtVvUAfpa3AYkEqhtkeUj1u6gmxeHqbX4bkWqkJrQ",
  "key19": "4gJhCGBFC5PTtVB1tuj6PQ8SB3ZGMorSBeFVTsdJKQHBac6sf5XCdWPBXU6C2hqvf182hVLQi6y3yvMMLLNwvzpK",
  "key20": "3sraDMGu2u9JG6aziey3Jx4JELckX7sj89QxdPSsCHPXvdTYTzbVNkxin69xVsNFj6xc5wzFVvxpwbkLFhNoVAe8",
  "key21": "4Skr7PJbQCeLJ6gHRkWGFLyPtubKnSCCvsQ9WyoUe9rLhCoom3cSKbaruYCnkULjXu4CqgSKyoNpw5h3iw3JgXLw",
  "key22": "3z2b1iyFWFQmUcz2YCUrBKVRkZF91NnqPUHuyoVsfwMTjbtKQWQF4E7WfeXDURp9HsU5fwvWv6XhfgfbYJZaPuFW",
  "key23": "7tAUhzCRGTPQAucYUKVqkUqyedh4EEvL6CHAtV1JR22AeP6AV8vKaZZgNxC3jrNPLLSbxhpdvd1ttJo3z9ERXqo",
  "key24": "YDy7MLR6kRuHWCPLYYWKqkxvDtYq5FozGejUFCKhRqCSCbmcFSYhpPUuz8cBU7r1St98NUz8KMgxMQXxdbL1NRs",
  "key25": "4YC4XnvpodpV3JChFXa8xBXD1d7MNfdbAt8QKUBHKqqjbHejtMqLbmsnZFJFnEFmTqr19R2BFaPdRHNoDxTtBqbv",
  "key26": "9Ncb2KaUbJzuu9yqPYTCjkhEKnYkStYyrZZuji3MTGJMDUV1LmvkGfKiRHoRnQRJ2Tvd4ntVtuRYEphXJt8X7tB",
  "key27": "47p4gU13JfTJatqcf9Sku2p9vxGQ6qu4sDLfy479VhuE8C7MenCVUtKB31uiNe8YoDP8ZB7dZQAWmxEX4KYGLu7x",
  "key28": "23sW51thBDJ8Ht4C6pBhK1gr4ZJS1ja5nL7kXsu8dz91hEwrN8fyGhogEedM2oqpKCDeK7yB92bvgk4yHCUDmssA",
  "key29": "51DrSVpTqaqwCXES2TUsWJem4hJvuU76uEMjFMmyHVPZqFMpNGCGMLLNzasdpLCZZbV4Cx5ge42sAuy6YbjSvAyr",
  "key30": "e6eQsa6qTsZqLRB9XBC697MWhRfWCYLgBy5dp6b5pQA17RCvd1FgCdbZRHY8jduyoWBhRT4Q6NJGT59oDLTPnm4",
  "key31": "3sUym5r2PphTtMMJ6cTgtEHTq4tanPFttCVVHkXpVc7yARDEVQH8iJngbUNXYFeqQX5A3QQ5P1guzmcSikNYT9z9",
  "key32": "3JicHvEmPTV8kxNsLB83Tqo6ZUCFG2EjyCnQmrPFTQ3J3SQmEyPgD6i7xuT461wSxaxht1mKDAfioYwoTYtr4gK6",
  "key33": "4t25QRyrnC9oVUdBiLbFQNzBmb7gh842yZW7g6kYriy3kGdsVBKMxsY54kK2XVrACEfLHu5pGBodNRNVE7z81FWn",
  "key34": "3kXP1Tn7Nc8En6Qh9rPFEadCdtBByJR7sWLaD3cfneHDErpR9EP9CdJyhc8NNFoiJpWekcA8En2VDRBrSc157vdR",
  "key35": "Wghum7iq2a7ML8CayRdHxwALRqMwtDqjFS9irGPmSTvvBscRaRDMWEPx4uoXA1Z8T2AMGRnA92A9PmVgdbvv9Ua",
  "key36": "4obFK45C95PWjFL7SNAXUgWsaTxdmopujhMKkccmmpwvR3Fwic8q3ju6eJxqeLW8JbqSER2jM6DBVpNcjLKm1n16",
  "key37": "3RZuzFKuSZdsfPrywk8U9H6tAvbJ9Z3e5cnHm6Ywu31PWT8sfNYtV3osAn2JWgjVgwYPutvSD7SVeJmEoLBcVsC",
  "key38": "4Fiy1KPggRQX69Rc5MgFaKkimVdE3AHtfyP89TjwQhtVGW4uKR9oLVjFDydKq2qK9oqZ6PkzGaKZj731pxukemJa"
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
