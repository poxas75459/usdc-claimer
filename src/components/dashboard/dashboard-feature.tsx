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
    "2auNdR61bqXHXBGdjz7FwRG6SrtBPARmK7E1gPtQxJfh26CYAZMMbwLo2P9Q3QXD55tzkEBqUm3GbfbpwMjhddUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RYeRdBSX5G3EP5Y3hTPSXd1ChPBmrVWaty1nrAnwcCV3Wpf7SRjuSTbPQrc1bFU68DZG6M2ow12E7ZaT3jSrBfq",
  "key1": "3AFAWoZvGFxQSyDHoRtu1qybWYxjwawX8LL9UCK3sVtazcK3b9JdyZto232pcgSJhGSAtVU4v93sdV5css4jVRs5",
  "key2": "3BjRfdssYVTgpAjZfg5zSJ6gGTvQLwRx6581X1eqjfZ3bYfssmyfHGx3K5yJEcJtMUGywYxjKfPMKnt2vYRJnqvn",
  "key3": "3vFG8Kxmjcba7tm2fv3zK4kf36iaRwwYBc1NroEiz2MGkH59iEXWuX3ggCjy6w9J4fqCHzumUbwjnCrFYdtGFdYU",
  "key4": "4ED22Tofzd1UFJZkc65ukMBGUtwVmAwoc7sq61E9J1An9CZ5JRtFnSacRwHRWtCitGgnxYGL5Z6SARLLsduMe48b",
  "key5": "2aSGBVGcaf6QTsywoervd39R4GAXNVnhY8cVA34Ay5A7B2QiEmi6CUBKJKWYqkJR25V7xgcBB7oUwZ9BuCJnXukS",
  "key6": "4PfsFEYj3mUR4r2G4d4mdFx4eKTA8SeTucUCgKbyNFU2bLnJj99GBdJA1EeTr7fzs435KKWcWkQ4CCzT5x8VwMvi",
  "key7": "3gKvUMG9hrWh4t1Yxqzqa9aEtUPSWHWM2Y8bvw1exnGmeG8VFzr5wEX9j2EquTCBmBWcrSgbKThAeEDegHvFCKvM",
  "key8": "3agHkm3NyXN18J85QZFfsLXmzgcRac7WRb7DmKeTfxiB2i2BZwJ9ijg82D9Qxz15zgYw7LVDX5ao6DzN5zUzxjUb",
  "key9": "24QmFLdgMEZW3hqybjBxd4cZP34pnVRLaWAbr8KN7GNmKv68uZDR4oAuYp91V6JZcuahWaMaiwMVKmZJhR9xZx7S",
  "key10": "3hnAd3tSjPRuPQyfdK2wQM51e7cnWHTzBU5tMPebxSpPiCwkUqTMkhVMbBUdanE6qgoExxq8cHhin3oMQrZHiMSs",
  "key11": "4zM3tbu9vY55kaENa7KUFp5eTGrX7iumgzuS6SH1XtV85D3myGmuxgKaAcaP2dGKEQ2Ts8uchgadEUyyTEVCNbfQ",
  "key12": "4ZU2J7DoJXtWNpRhbeHKotbQ8FHBY1A6LtrnVVjfkZYmaRVLFSdMiq5a6C2WEsd91Wi4aHNbxfjUXmEStEFpdnW2",
  "key13": "2jBtVSuHWGo11uxHyz4aMC6cyvUp3K46x8L8JVAXV3hPsgrKpVLfR2RjoBFGWqwfJ5geA9rzF8tNE4Ph89NmfuyK",
  "key14": "RAMWqKvQuExYywuP83GbdMVXYSuVHBXzgSeoCCXdKB6v1oKrbQLkvtYWJuQvHw1Wwn4gyrwY4FcmTB5cQpE1FHq",
  "key15": "3ZJbgHdCz5Ge3QdCfVKXX5RdiTAgJ7PtxNrVFw54rCjp8JQMNqcHUmgazAqG3c5E24JfmgxSFESZt6Y9G4jL9rck",
  "key16": "2gfhyBk4UUNSD9snroRCQkXHwpR2j9PUXVcw3jMC39GfwMFxBrATp3fgu39mKJjm1dWN9GeBVV2dRqNPSy1KNvh3",
  "key17": "3nm7sVFP8Ry5EPhALzvqroACp1fuUWt6DMmYxgMcaC7wYjnEBg7sMyhFFidYZpu8z1MxGj26ysjeKkoPTJpqbWpK",
  "key18": "5WWgFfkxjQQ8HGYkNovyHtMfokwUCion6nx5Agkw1Uu5qL3CwQyNFnMbUDWKk3gSWqx7M6s7XiNbo9kYrX2CkUWm",
  "key19": "2xWbdDUBFBMf4desnfK1yTCBvLW8oJZ973U12Py14HpXEyMrK4tKRW6Aqv5mXK8Vcd92bdvCpSyaKqbDZdGXpHur",
  "key20": "3iRr3P5RRbZD81DuVtbESWPtCDT1YtvjYcDzPomW73kEefY9DKz6DmKt9xfmw3wEAyc7JR5mpwEgTVyPCJJA3R28",
  "key21": "3XY6zfB6QHGfxFKEynNCzTMuojqmu61FEuFqtJk6iWGmzggyPoMS8aXfAarWkaxQnQmPy4NDTBG31cTPsRotPvWU",
  "key22": "5pD11LwNCYAMuLaXxKAY3B7kMrzZeER6xXpyUp9tqgcKSmxiqMHmV3JeiogXS3JkaAEN9BsWjBqe5yAjCbogNFns",
  "key23": "5jU9UsWonupy7Jdmxr3mxLrK2nsx96MJoRKWLHidYKEQ1LH4ShSf5h8EzN3A6HFzFTotGnirXr3J93oCD8Whg5XZ",
  "key24": "2MGrZzgdG2kMzSmnhrrqpW7GFJG9dsP1RWw2tMeKvwG9js7x7mmBFQyYv3uiKV5vDYUgfATjAJeuxMx11TQDcF5w",
  "key25": "2qCUB8RiBTUQxoLoxjqs1HXRneSChPPcLb4VjxXJdd21bc2KTR894j1a3s4QZW4AWCdGvjsq6yjyjW7dMGzY9WXE",
  "key26": "2Y1RSqU2WeunhwXwL4XxTThxiXRYyosfcXVhXU7Fifm22E6GSVBcDucyN1xLQ35eGFVkPJDrCtpzpDE8d7bJaXHi",
  "key27": "P1A8r6VX43RoE76ETkUugX26no3YGnYNJ39ufS7i2Pqr9umETAgW2jmuJnzpGBKtBRxLo1VzQ2utvsc965gMHYc",
  "key28": "3MCWadjHrm3SFXMjL7RFN2VxJWqEcFebYFhrEY6UGmP8MHftUSszEktttivKxGubNpbUGqJVgt86xUB6859KjsEW",
  "key29": "5guqAKijATncMCvUinRpothaGg9zJuarvvzto31JynvbXZ4jRwKDWAQRd8qDK4y83TBaVz1VajuFHE885YjnhVh7",
  "key30": "4hPMxwvpartTRv1XxqhrDyGF11c8DuKM8WuDLN85qtfqiAnAWgGd8a8MNXD4kMe1yXs7AuhnnJax2jXfHXS9EXYu",
  "key31": "x2iZE32vwgXwV9GtGBEw5C9H73noRG82VN2tEeH6ApKbzv1zJtJEuiwGd8BizmTdHuExh4kUitysLXSZ9PzbFr6",
  "key32": "3DdRQ14ScoCDms7kVVA81CPuAWDq1rEA9E5Sm9w9dVfpb81NobZvDkFBFeDRKi2Tt4VrTWfZPujRH9cmKzt2Pkc7",
  "key33": "2e9DJnL5BSG6YLZn5j5LzGkkRAPUrbYJxs4CAsjAFvr1zwQcHQUWkaG8bqHy5oiKP4VghTUumNJMH7yfr68k5sUq",
  "key34": "38ZV47zPhA6G7YMHtnRVMexLyR8mAXJP1X77pRDvJ2DUAWU7rV6KzAGG83yAsTusZgyyihBBBXuCsfzwKYYQRwRy",
  "key35": "5b1jCQPbeEN5hPVNC6YkgdnAyxrviXQhQVrrnw7STunL15fogS9Pcqq2ULYLXYM9swVBWsiVL35yCt71hdqsR6X1",
  "key36": "oLmVTi2N5QnibZ35oz7Mf6wMZLmWjkc9oF3m6sRqYFMhh4mds3W7WYGnDu27FwRZXZkauj3LSJuvBUaGpUPf4Ra",
  "key37": "51ke43h736wFecePxS5LSKQB1Co5gND6cLWaYmFDwpCgBsAbx9MwSxoTKuHqe31jWwxW1Z6vXrKNA8g2GSE3M7uX",
  "key38": "61D2VfFzgKayby6qYH15j4EDh9Ud25enKLToyRHm8cdxECZXmhHC8c7p98fFcH9GVd6pXSv5NSJZqcEjiSeYiXx8",
  "key39": "4otHDcX3j5J1ox2AbaCE3oAeNmS8cdbGiEThXxXJDmXvQbmboMebev1niFY9SmRovry8R4uk7E9j8YhLuTcTQnvF",
  "key40": "5GaJLiutagwikqP19KSaW5xAGvoofb9uBrTPCz3nC7xSaojL4yjKvfLh2BX38szvyJV4Fb4458RewB468bkQNcTj",
  "key41": "5P6TNvJE8am9hB2U1Zd31A1zY455ZuM2odWEHjXhna5exPtASZv9YmYcd79MKVuEyH1cWPcGrVmLCERz9YdRhsL1",
  "key42": "4w86tUtV5FAT269584rvv8HRtnGA1KAe7syEuMuo1VhiDEYyZzgsrEQZuePHpq7fqGxmDkxagrWQ4TuBNHR4jkGP",
  "key43": "4qxw6tCao9qqFiaM86uD2uqEutgQz3t6xLHLxKXrgobiaHy72qwZZwWxLVe1WHoTKCJXs2v6n6s69b6jyBW8qJwT"
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
