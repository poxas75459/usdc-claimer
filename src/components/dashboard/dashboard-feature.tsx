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
    "KFHWravfaj8KSoXqfDpwCngGdvx3e2mjwYtt3uphKFfUkaiPDngzPxdPiKhq4eFsKBmbgGZ1RSYtknJxRbeRh9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sHaZBLQyeckKfZNiWPgCoqCrhqyrThQLgK8Me7ksmKxEqaGz41ybBcPKudyUMGMQyqNnEUwAc8W3pTAw4EjgvVG",
  "key1": "tp8sAMGXEHhCLBn4smAbknNLqu9YtxvjZV7QATj43phk1Skz4B8ppU5xktc88HLFHQDE4jYbDu8N2BDXGHpm8uf",
  "key2": "3NQfnuUWmYXUrZM2wMTBYB94qXBKG8qH2HhHi1ogo4MXDT2N6MVxqSNWdrktyFH9VRGkLakr6aEDFR1wpttNSLPi",
  "key3": "2U7N4mUgPxibSShWMzFekPpF72EVm237GUYWjXWMopS3qeFA1c5Tq8cU92PhDq33Za8uQMo8d763YEpbLbV2Qyuo",
  "key4": "3tvfExvKQg8NaYy8ShiQeF9zo3CJrG7nBtKSqbCepk4NMenF8WXhpC54d8s9dSS8D2zNBgDY1ZcXyNAhhSjd1r1C",
  "key5": "4qdCGwSFuEeLLU6dpbP7GLxn9BDoEHRSz2eDhQTYDXTDaaePrTgEPeVDkFMjgAetPX2PEfGGPQdfVeZYrs679bwn",
  "key6": "5Ur61J1P3LtsfbNtfXeBEozzogmHTVLnq33gaasMQ8YYDYfEWCtxgqq2VjtCDNwNQnQkVezKeC6znZApF3TNKHaC",
  "key7": "qPW5YdqcCGTzSndpqByuKrSHQ9bwHAbrLAVXq5tw5ZyPPsK55DRwrKUP7PwimFQaRos2F68Nr5gabfYJWE4rJz8",
  "key8": "2Tif2cyawshH7eMACxQbKgmAfzwJ8VmoWYjBgTLvzMSorvHFfhH9o6L2jh4mDFeQq6jG12Z6mK7YRXn9Gx4wafGF",
  "key9": "mWEzf4K16hbJqrYkTk19pw3xQACoXAt3P5NKbykRckZYFeUgEeQ4WWwSmwLFTda5jUqjvqqPDxtW5CDqHUvNsm4",
  "key10": "53werku55zGsP9dJ54SF2rJ9GHfLNdcgXUtsWJqRmxU9eK4z4EmkZytVvCSAwPxwF5seNDcrjdkPKydiN7rZvEXF",
  "key11": "rNA1vvBVpGzUCzzoHBYRMkthG1ZTFjCgMGw6LSCgDE86oCcUYFQtvDkSZtQcz1ZGXEmEuzNZ75pMkjvpMz6Vw2e",
  "key12": "3iM5ewxJYXjLQzmfBfQFJ8ACGZPfyxk9NbzACp2pvvi1AoVMQDwKkrMZcqMVFpZraHygLHRZ4UWWtAWGuNhVGpun",
  "key13": "3z7fK4NQeGA7RXb7M6gY5ewkxF5p2Aab8dL5r4fyHhYFy2EZXTJesup5ycmt6NuupWi9jp3v6dAcsq6Ajgsn6bSq",
  "key14": "3nvYRtZEGpoiG8dgUrTtfK8P8u9dKeVQnGTW5eHnwp19cdinDYTqbf1q8hEz4cKHH1T1N2JxoAyUueZoRBH4qTLz",
  "key15": "3kCmD9Pu78LRTazRvtuSbUoWojGgkx81QF8e6rCEJnaS8ADVWByDPLWxzYpkpYKPPxyMt9c2kzJikDkY82JeqA7R",
  "key16": "5Qw5ahJq5nxeCwdEpnKqNH6PqfSoHtwQ25wys15JJj5k2pBAXn2FcwBXaDaSraTN9aRUXk1fU9VNHxtMeGtQusd5",
  "key17": "4u1VhyUQrUn64f7rxG82P1QZVufDCJimtSMueY4XYCJXKNyDqj6Bi6hLeXFAf61mEMxAtvRq85vEd7PraK4RwKcb",
  "key18": "2Z2PokHqBPQLUB7AZBNtN6SVQ5R2fkHsyMGevdeXKVUd33y2goUzfdWi6ksZErTXXP2SswGEQYtfavQDHQfaiPkt",
  "key19": "4nAQYGD56uTaF5sGhuNpW49sXSPZciipbnzKhFHBTc3U8Z99AiZ1j4m9niyS64ie4jm3ACmfsYvwm8YgLHiY7Vbr",
  "key20": "nrtEtzRLCiNi2on8hPz6JEZ8mMfp4Sa2EvVgp9A7dtYDSy6BaWXjcMig5zHTuwC1LaHL7ZZJkTcyLC2cLr3ByF5",
  "key21": "5wo5d5Yhwz3f1vcJ8VJ4GXnMGzJtBwj82WiuXGKeUHRAwXRF6cPaen7pNtYr4g6WNMWtwsRGBrsGSNyRst8unLq9",
  "key22": "4PnuEFHbBeb5YC3jaH9NCHJotr6d74XgPx1rPrANQsXvNMfetHnUbnTQft59XuYK9yodpChmhZE8EGgFB4cfg3PX",
  "key23": "9pJVeeJh9yiyLusRT33sayFeWzkoFEtWgk9gRUxU5bKWktMGJFBm4zCoAg5hi7xdgcWntEanjYybEAdu3uKaqSC",
  "key24": "472ckNL71qkToFgoKDWoJ2wbWDhydkMXfLkgPBQiXdLJkEgunp8cKgDL12H28dVcv7PNqtCyydBcyPGfVTJBaHQ3",
  "key25": "2nDwWK5HxctdrkumF7i9UGuY9yX2SNFVsmb7aiSS63tnMrJPNRjrMNzvfG3hwN3uB5WBQyoxC1Q7npXDRCGnkt5M",
  "key26": "4F6aAbaqYy5utyhzwhNJFNBcUygkTztgECvBkUSx4hL9pKs61UXZ42RiCjWcCmiieXKGrZ31C3izw7Y2rdygE3rv",
  "key27": "Ys4duYT9fTdjEhgtEDHn4hyrh4K4LBTLRhPQ9NwHiZxT1yHpz8i8GJXafuYzANx1WwwyadPNmkGx4hmXKK4Tzj6",
  "key28": "5N9AdWm6UuPFAbtKmiP82Em4yKTSSEo2q7pkvhgoy5Bvffo3Lw5oqoLAN6hkqwrmNzhMc3nUkrhaQoMzWjiwybQQ",
  "key29": "rChwnnM7JfAoh8nTKGVtU3FB2ULijVcXF4BQJer1w6SHa5sQHmpH3hUjnk6S6RWdYQQbnDKZNdDueqKSBffjxxt",
  "key30": "26KUkajVaaqQUfPB5o5TDcay4HgS8m2NerQ9djNi995oU1BEkgUKBBwGjnXU8L3ZExhLNbe11QWfZyKqCBSGiAGT",
  "key31": "4WV5kBYyuaGKzANVeHRE8yYcQDKrAFAbnM7W1tyGBRAM8tpZsTdWa6ETYY3WEp8Pi9Q968jARteVvXxojhUMo9jj",
  "key32": "3TqpQGC22dRbfhYyzEA1XTFCgbq5hJJmxLkuwg4XkZdnr7PD5Mz7RNKBU4CJRN9fir2crvMAaEyP1oHHxnofKkkW",
  "key33": "2XrtC17CTm1vuwXq9SqvF2jS2cK4BKSRVf6odN9sRXtutjfGWXLyFLRHgJVdRfFQfPbftHfyhUrhbgrjib2DvHwQ",
  "key34": "52ZPf8m7Lmp8BDswTUTazKh7g18qaCmQkj8913sWpb8SgtFkT3ctAiaDG1bP1gR5V7f9PiHz4ab8V5hoz7923EEe",
  "key35": "3KvbiDTm7KFnMeZ1yJ4C9JXmc63iCVJR13vrk2U5rn39PufhKEwqUNFD9tnT1MjoKEWkp6TxcRsKnPAedqajnxe1",
  "key36": "SWegJruxci4V2RY1UgdmMReVc1p4C8XtLK7chaDXMdyawXopSCKERpPaXcKvcfCVKNw8Vv8roAmo3RnX4fxCKh4",
  "key37": "2ZnA9a34CbNGTZDbSwAfuam4LhmJB46f2iCNhf3jWKHb4LSUYDLGZ17egrRLnV76ypdvcLvXosNgtnHKEFbj6oXN",
  "key38": "3iZR5geKLZEaNTyhfMc8Yuo3YjQZw57Vx8nb92zGYHbS99UCUnoTPs5XLVcfQydoyKtXSWTGKcmS6eXkTZzW6NUb",
  "key39": "YHrZSpHaxqpcunk7n7xA3xwLCXpj52eJDiipzifPdobSUuHwbLA4NVausd4mcAmUfJjPjBTNuKmvfamCbQXHz6u",
  "key40": "2CHnC8CpSo39ZH8qWQ9ktZrTQPBXgMQgNQVhdHzwDtP7K5bNCXCyywfifWGT3g37rCcvRsRLz3GWLTQBuKcJS75t",
  "key41": "4ktQ4JVFvaX4qKzwxAq1i57c7bSzqu3jYVHe8r5RvqDGhyXN67eCuzQz7T9DS1P57XByXktjcGL2PyLkqL1VyBfz",
  "key42": "4oweSUn1RYouqCwRzQrQBaTH2SPfypZtBd5UraMQx6GeD4HhMWxUM7xG1g8PgsXmuQhG7Wx8iAkSevCHJvBCNQ7z",
  "key43": "2jGJ2YuDBWgiz4boiES8vk6J4gfqvgewCEi1yUjnH6jdtKPezY1zNuY9dcoQWEJVz5DcGnDYooQx3i3teePbgRkT",
  "key44": "jWNpSWw3XxRvE7mRyfi4RCwHvVccDxQoKj1jHYarQDB6q1wegLpHw1Y3p2WoCk4YwFTHgbJpx9b3oSwquhXeE8e",
  "key45": "3Rh18s5BgVNxqgG9kxyPRfueVx4UiBv8MuxZFzYUARgJwEUnK3dvCoMhpHWrWSRBXv21MieLH9x2rRa7P6mNVMoJ",
  "key46": "5xcchiuXnx3gdNsPGSLhJzCnf96V8NfetAVSRABobhhcgC7AntGnZMeV15URMYHGiK62XbWLfnmTBZZFF9Cibu2p",
  "key47": "4jDdJppXd4U5Vmaxgn2p7zRdrAQjSxurEBtFizN84bWi1QRKZtX8hQs4CvpNuX7LeSQCjqVFipzCMwhg52qmMHT8",
  "key48": "2vnmc2YmWkniSwszJMmVYrzQyUz5xQuZUdhiknwbYkpMi6kYjNZNXUib74C38FXyryjGHT7fiUFqTpeVFSNfMqbP"
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
