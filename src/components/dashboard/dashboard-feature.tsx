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
    "3B19u5orKJigv4axSqKoEuHDkM2hBcEanXoeowbT78hNngBhjQnUc3rTyvJx6AxLP4oELqWqncvC5KvxQ2RjqNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AL4VTH76yaH5Ea7JKLBuv1oGh7QaAKTjdFwcTWzMQjRz9VvJFSG6Qrid6skMAz1Rv5E7NLvhZJa9SPR2Hy4qbQ3",
  "key1": "2guf7EJ97wz1MVGe6qGGk8LVKHLRCD2gaCfCcyu1p9yU7eCMDesqBhatk2aTHpHkz93orypXzQJSsgMcxe264cNS",
  "key2": "2T3uH3nvhyxPcmdVmCBCkHnqVBWQnkkBR8XGgNRtBQnLnhKr7ciap8Ggu94JSx5SYHrfsBDCn5HsBQgLYSq61ZfN",
  "key3": "tL8Kpn3LMuE5HFeCA2RvYgqgPmtJ3p1rGRi5pEoU24Q85duRRYmEt2ZNStgEadtghwznUqQ5xP3ujK6akbk8ure",
  "key4": "2rfa9kEsR4LXyeBudWX3JPscs9JXsvqrAKm5XJxYhSNphMnXA1U1PaeCgPmmvG3i8GodGQJZnxacGgngZcfvhdfT",
  "key5": "3LNc8wBeUQqmoXfJufrQkxSWQH8Yjuaw7W8rA3WYJVm6iHCSdfJbpjsqQ2q21mJeDLCoVXAXEyGFWnsirf8F2JE9",
  "key6": "3XHPcf4bijfKBvkEyk7aYjyjGsTYMDZPL6Tyr8PskiFh8zi359qy6iXTkvjai3oVoCVcoatTzX9fo2mC6aXWo289",
  "key7": "56KpN5RdDgWqmbvCGiCxvS54hz9UXzFa4n6GC8Ce7JQWaeuFVDkcdRTwkhpJJ8rJNVKYLriJAm6VKkzDedv9TnB8",
  "key8": "3kPS5jRhKmt9Zfmf7Mywj93cN4W76o7bVjSwz2WJx3ynFciUFHjY7WBUP22tNzj2A3CHf3xp69b4j1PE1b2Czg9Y",
  "key9": "g91j9xUB3KNYxiYYsDGQxFGgYG938w2P4TyXSmuDLgoSTedTpsWQFzVnRCayeo3PGGPoiaRrCX3Z3b7ijt2vFsT",
  "key10": "2GHe3dvWCtL7tnboN2zkK4sfdwymvwrZ6rEE12aecfWpYSBRrQqfz1tD2etGFc2PDaGLYRL7BPDp9hPrPVnPw6Rh",
  "key11": "3sPXDv7xdrQ9jCrThZYupDkBx7dqfhvKVX6xNiHRYiibHZYeoJfYdtQjbyuDh5m7tP7PTTdx17ukspUEESHjgf9i",
  "key12": "15SGhGe4or7Xz5S2cFGigwqkRGN6hS4LkJdjaQu4UJH2mbmc3EtEbX5KYhEpYKXokqGR4185qaHcytzz7cEBy6N",
  "key13": "3bbvYJe2AtZBfAa5kSnBt7LMGcmkEo313e5PXnBF5mdb95qPMwp77i8BqtWfR9Bh86x3qRgnAovniyW8mNWfeW26",
  "key14": "4Mxwv8aZGA4vNqSDJX4gCysyhUhZvVifo8MyTrsCDNXaRHRhCAYgAQDn12Hj8GBNzkFdYzRBWoEmWr5fEB4sGr1X",
  "key15": "5HNjNvUBQV32pU1bZYDGMA7bDQehwzyXcqVMgzvQ8kCvVbsbputRgoM4C71d9xJUMKa4jj4TgCS86h1fofQ5GeoN",
  "key16": "Qns2VC2VoQdhXcRZtvQG6s1PsNYiXRDeLPHPhjdYyC1h5Ej19fzFkfxw5SpoDzmWZQBd5zbw9y2azB9ZS7P6ktS",
  "key17": "YWSqRJccc3hxsMX9ezLjWWHCuDdLZXGwsVp1SdxDH38uHPA2mQLhiA55agrhBuEbxuChWEF9Cno2g5dDWarHQt5",
  "key18": "23MbX3HStE2nZLq4rrkspptPZPDpsRH4mp6GAigzdUbgPF4tLcjRALPAzRVHtVjVxyuk4wftugX8vJ9wGwaw4FGj",
  "key19": "3BV68QdpXeeKJxSoCu3SVP1Pu28yT3hhCjqzYaVNJW7CG8soApPKbqckV2bHV7bbz6sW2SXfLfgiSADPSDYhLeqn",
  "key20": "3cJKvUM7GYmtKUQLiaMYErUZWWvtzvM7Tnk49zqupSCckxjnnCQRUkhJhLBMRKfkq9kJt8zhQkN2TrcuxRk9Niri",
  "key21": "S5ZPK5iFwSkrV5dZdNfeDdGo5xcBHuZr1tGdw4AoebPA4MTpVMcxFzM5j2U9CrwUJUBUGmVgjdnTq8aSksDsxYK",
  "key22": "xpKGhn2FZMhuH9faXBCDF9hmwUS72qvAtCGkeMeoMrfwf2PALpsSso4DN1v4zUjhQ4EMudqpkNwhzRH4y8VmcFS",
  "key23": "QobPM7paHDXN3U1tiV3xM1mD3FTF9wJLEqygx6G2oXNtmL6NK1Zj1ZDp9i2m5zAXTPVe6WMmvuGHYvzwfwjnwno",
  "key24": "26pQZPVCjQhsXAbVYXEKragQd4j4HThBRfWTvzoN2BSxtPnmfGvusj2XWjWFehVZVUuhkVuAzH6aQHM8gg1JMBrT",
  "key25": "3RUXre6eNvzucD7oyRoTsSWCve2e6bxjtuXXC4QTNSLqik4dip3YNr9v5UdtzTop7ubbpXPbMWoWtAegxvcbep4g",
  "key26": "5iEr9P1EixFBVYuhbD9U6StKkD2d2zsTXadMy4RuBVCt7V2aUgp31NR4h39LvxPPiN9Wr2ZGxFuqruqbj1QTs8fG",
  "key27": "3XLa3juc8sk8j7q6EtHvFLfswN3aXNabCHDRNjRAaUr7cRtzTWxsQM7CSsWkgsrRpHfZJzbkgYwZour7cMMSMxwG",
  "key28": "28tRiURkzEx193Hery4SupWiREJub8sgBTjhzmoktZw6WWdKyeYNGryMbhtnWixQ8nzZqXypjkWCaPA7Tw7Z4R5a",
  "key29": "7Ydvf4m3tSF6f4ubMe48oFvAKXuJLE2YJqB6LEWTMH7sSCpwnpMxoZ4DZ9yyaxbNggFfp5Z93FuRqwCwK4Ze4Wn",
  "key30": "2DwswAM4NMn1XJwEqvvHXB5HMj6X8ovZ8fzvfFVBWpmbhm2kDKfforQ2gcgZZkKMDPK1evfTKgJb4oBmhuWEXzos",
  "key31": "3JPHvFGgTMgfdg8PxE98Er2tTqkAxnQRg8KtfurvZoKSb2DgtSZpbHeC7jbeucTuQkdfH66aGHwseod3fRoyKZuE",
  "key32": "62k6RjFVUwa4SYR97fu6g1ZR2N6Cz1c76n1hKYcHpX49Su98KBq8Ef5vKp9zKYGJoNe9hq72SP69wSbUmnSMbuD8",
  "key33": "2ga7476HygfYkZMQ396VBYT2mZCYvnnFhcFq1bhGAVWfEh8cMgTgtT696qPWvsMgVDHTVRjoQJv2yHsAJeDxwm9P",
  "key34": "4JXai68JWxpipR5dLqVN86XAaLuk72DF57ywrwYhtnf65wLW3wwhVbxidj9Brpe9ZW5bUusDEm68KRRVihWRgXS4",
  "key35": "v7BujnLrsSS4agbndQC11Ko21aU61sySGBUYyuaYaZvWvmpqWbg5fkGMSCPjuG4NkXjBjo2VnwuUHes9YxQyedA",
  "key36": "672PRLmKPLxjQ2GTDDxu8Gtegge4WikvdsYyTNwS8hZE1czPw9pvjtNF997xvdqsh8f6ew8FAH4SA6mfY3nms1JQ",
  "key37": "2G8NbqbcKmgMXDxaCzVC8auKPpKcnxutmLrGyPSL8qWQAh3Y69mzNxyARqoXUdyfK3BmvJRpDFrXJNkv2mJqUvTi",
  "key38": "5YxehqBGBA8krkhBEqRbLQziuz4cCnkSJHvhN44zS8xpiXBDfEznnCcYCj8rq6gbcGAb8bVDYNchEXf9JshLhETP",
  "key39": "4hfjfZn9QuexSD8kgpWeqBStKS2zFR7HmqUPVRZoStSfUFWb6NX6fTjFWUm1MHoArr4en2bHZUfKo8axFE93Lv6p",
  "key40": "446a7qP9CJVF1ks4JBYK15Ptg5LLWLea5nZJtLpz6n1BRRbkvbaRSkQS9HTzswnL4BTrKvzA7bGuv3yd2cfetoE6",
  "key41": "4QRuQA1ZZYSYGodRZHXaGjGHq94jKbGGXxN4US7VQgd82QF3JyWkZBsyxkuvjTzTF5DifcxmZ6dSzcXHmdRrbvMA",
  "key42": "ypRzDkcJZ81cp6ibUFtyc6Xudntbufoc9KMLJrKycy36PDEfWYLyr4XvsTW7ixbbMQWnXKq4k51kYVsqa9iXvAX"
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
