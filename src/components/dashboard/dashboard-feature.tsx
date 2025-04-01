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
    "5UK2deiSPQG2hWWxQ8EW69GaoTLY4x95o7E4Dp5kTJXTAn89YxPVmnmYFPYNS6EeYkXXMDqA2LUxtXMEJPKvsc7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kb59sDRgd83xCnjKwHtjFvPMBN9hW5QPg3W7EGT6AfPrc7cQaFqi6PkiSGoweAiPhJXitjQu9v5d3DhtDP5P51c",
  "key1": "SLyVXuzXPdUuQEn7p6fG9NcDGKbKz7JfgthBChvD995Qxs5YFQr9zTrBs8u4jUybLuTAckDJSBhEL5x6XtrvpDc",
  "key2": "4M6jDM5eE3KhHg7tYarxQzdghbaKsSYNk64eacH9Zo1LTfFkG39vUNz8JosoYfi25e3Cum3YoNNFdmtVXDUPctEW",
  "key3": "5Mf7JTsDKH3gDwqCfPehLv1RN78owKhpeftQp58QD6FoU3C8kEFw17rDCKQjLQX3jQwAeeXiYDi5ndzuCFkT5bCa",
  "key4": "GDhGzhMuLdeaXjgBZ763DjVEvMQtXQ79uacAtMQU4wB54n3Pwju9xQ7XVLHzdjCWD3NaD7NxRCbm7HeQ2izjU3j",
  "key5": "49sGXiJRALtWCcdA1NXmH71drbJbaem1MJMQDgdDzn6957ps8ffUXYHAfyhNaGTfeEoZxqRZuKZgoX7jZ15WXpc8",
  "key6": "67HDrgHhWJ5gKBtAu2zqqduhvuZYSAGg93qmy3ebSRnAxuymsw74f2J7iWxbaSys2QnYHbdSR25Hgkwy3EAFSqrh",
  "key7": "5qSTTpPqqQafxPJoq5hxrpETgNV23V5pno5FCweTT18txMcZMnHX3QhgGT5s19stD7i7zYbnq9khjyfx1CM217je",
  "key8": "57pkDRHMMGuaJwde6JiZ7rNWc1QZW87tzS42LHPPFtYyzxaJu4AAJWTUQMEUJkoxWM7ppaSJWkXYKKkCrmnZunVT",
  "key9": "2muaH2uGKedHGKZnTKr3cEGVeFHHpP84NphGDmKuaqLykzjjzWtq9jHQeZXH6CaTHArimo1eNEsxSGFotGqpKV5E",
  "key10": "FDkAM9bqPwmBriWzG1EQxDqqcWC5zhUogeRZFujuXRPWSkgSEFsFp2aysW93PRckBCjTr2hPWQZP4FeXLSmzagy",
  "key11": "2dGysdQmMdZ2Ar529iTJvcxJjZjfGEWbwQAjRbWBykoeHFwV3wMXZBzzrCJazUevqC6JoJs3czDkpRSsh6pFZkRL",
  "key12": "2T525CWxjSukJQEU22hX39UkaGHVC4Lupwi2FECwduNEJHFNE8M8yvU2CpGrC3Hg3zToe4D9qQ7MtcPyGfBV7S9L",
  "key13": "2UZFJFYpzy9rrFotw8JT6au4mNHNUwLzcWjq8KWZgvNxfia2Sjmubnto4XgwGkAhuC6msrD7K4PkZzfZB1CD6nRD",
  "key14": "63Fbxmu2z29PU972CM7kSKGQnKhGhh3s3Y6T2YcKYZUdzDee1cbBvEu1Kv1ku1z8E2ewJye4orLYibj4usANLYHR",
  "key15": "26RALKCPU26VTcUReCb7WyE7tcjGuuTXLnb9FcBPKkYimWedHrFkxHyiTbhpwwFHkWczsFJ3hVT8Ci4j49bz7uG2",
  "key16": "4sWfP8pvfWe4kW2x1SY3RtchfUV4oQ77nK7sGg6GgwCSdcX54pzerKvwHjLECab2NbgNuUMXz5goLXgAihwr5hR3",
  "key17": "6YoBexXZSx1PCZJNFXfy1iSJskjgNFR3ezD6royTKHXydxbVuR1dMU2Q51GQia9mGGdoPzRGoerQ9jon1oKtcNp",
  "key18": "KMR5X8UWp6k8EudMPc38RaMtUcawQYUDYEurjeXFMmLEqPCjAknpfsXETB7UeYBipKkYQEJHFwKAfyBY5D6A5zx",
  "key19": "4MkPEbY3uSiGWChsudn8epTaC4hrk7xwM58LymNXdoFxdL2y18fC9mia6bwrh3ksjaXZGnu8rrHSpey5fu25rC5G",
  "key20": "3fMiiEWdfZyauYvcwwpNSCwSy64N8aoT9LaEd5xCKacNWpDLU8V6dVyqZLwy73N3RWP2eSi9pyTfdij46EPwdR9c",
  "key21": "RywGaqLBJEjzoJM3P4YGBpkMQ5zjZPUVEQqCAdARnVkKqpSD97nAuKEd9rawHExQKw94BggLJ3V12NeX36XezRk",
  "key22": "3FFEcphjeQqATaw9gax9eRTmMNj31h1qZDgarQsSHi8z8TdhBzYRPgRdw6gLcgyzgbSz9wauHhy2BAPKdKXbuTSj",
  "key23": "3r4EfzqQnodLTkFFsR63znzmihEGQDTCCrf6GkwdaHDoPueZAijdWby1n1JuGpZ9qwMJzGHEepwT5LpzA5VoYgx",
  "key24": "kbQrbyPVieKVg4ZBbCdJ7aXZC4xy4R5LRkrt2iZvYGszyDDvYaSo5AtTNLSG3jJoLsZvem9BvWGUyXmHVLVguQ6",
  "key25": "2DhJ1RNenFaWF1QxZr3Jwyzk7Yr6Sbr7DN5DS4zJosJhPBn6ocJVqRJHqjEW3naPYtN2EcWRkBLnJ94akzy5LULL",
  "key26": "484pCU4cckdD3zhcEAgcpzVcerpCknCnVG2e7y3EWg7saKRa3KQbYDcQPcrs3ps48hQiY9HZEriRbJhVWwzNiBbb",
  "key27": "V6CVm62VXg45Yp79f1nGAqfCL11Kb1Y8MRj9uxnr1gKwd3zjWJHb63ffHwGiEZo4BYNdLLVBJGwmeyD3icxNDQK",
  "key28": "pChdULU5nns2eW6iNFLW5v16umpBF4kESwc1rBPxXLw64GRDZKoaUJPrcbh2Ufg6Nepe8xBAoYtYRRimWP3Gdfb",
  "key29": "2SX5rUvyc34sYqAstfMZY97CUmJAJCvgiCbnUFr7nccQaHYZrFLe1CJLs234BXLFRLaGzyHVNJwMvSjvezYt5XYB",
  "key30": "5Kj2qS8966R1NrpqZow9pc1biJ68R5A6XwVKTbaPHEF7bzTWst35VuCQjaxnhhhVzoP7yh895Dms4TSNaLwLmwbx",
  "key31": "2WnrSM47Qngv3wRcG7dxenvfS1iX4E7vUuUWVcovDMpi2YSbf67scGqpAj3gh29zsQvEZvtSFv2RfyiFxpYuxXC9",
  "key32": "4pzAFKTU4VG4mfMeQKRYgzWYWQC3MEepnaNUVwYviPhdHgsBMJEu5LBw93qDKWbMt7jczk5JhL9CDep2L7Yziknd",
  "key33": "262BicSinSfuhuYbDSrsjNpNCcbSNtrxcLNWCthtEHpNcfVamydHovwX2LogY2Y4iyZHGv6tNpA4JWtmyXvSJFcC",
  "key34": "2Pxt2PWwUDRWq8mAErsCFWN7uBM7kd9h1cSHw1XBNwEUnQadtPQ1K4Lf8MchpkQ6zVcyi6bcbSzmdDRUQxXfZsRC",
  "key35": "5rePVZe4ikeGmJ2iE9MJ9BK1yuU58vRHzciC9XUkwQEXeEtiEAVp2u25ssRZsmjrmJMW35JXVANKXBnJhEeHugaH",
  "key36": "2WJ1CfeUjruFQBpkR1Sj2CV4Fi3bku8UhDgWF29fL3nQwSusAMo2rELEA9SmuqjSWSB6gzpHxZZQfrW1muJnGPjJ",
  "key37": "3bNFK34zpuMXNHwA5wyBkRQYVjnWpVSv5bWnEAKrgj4S8yWrheEU5eB1VUWGH8R8oHtVR25xSEvPap6HvHrPhHKU",
  "key38": "61yp2eawy3WV6Xcyw6H5sjj8RST4umD5pL6CmXTBVSBN2PdXrFDkUp2mn7iGVCQgVgL295aSySbbS6EC4MMCzxE2",
  "key39": "4ussriincFXzZRydJsUk2XLYRdVSWg4vpSaepwBx1Ych3JSe7UUuiaZ8fDULgRobLezSrTrchem2EFYm7vmZnjiM",
  "key40": "3UYDFQ3ia41VyeTUVSQdjFYKGxMK6VQaiYM9xrVkF9t23taJ51h2PQWQ4uG3n6NTxcctDsHvaqAyKm3f55QgFYrS",
  "key41": "5ke6YmqXiXpyzCzA1BDpswcEBUZ1Z9wdYjmomDPF3tcoNn2gGbvyDVUtqxEgyoc3YWYkqye58fTZWvmBYkPQfFTJ"
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
