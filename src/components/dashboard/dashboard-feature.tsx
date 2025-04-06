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
    "3P43nUN5ZjmJHyfVHM371EDWABrdT3jAZ8to4qSfBsXyRKXq5ye7tLkLsbVmUJCUDe5G7PVRsw7WETr5zsf2BaPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39r5qMKLHkQLRRX5VvNFFbvAvzBFmNakPQ7DWSMrKhqJRDYjMypFBuqdmPHiggWSum12hA6xV5bAULiazLxBnY4b",
  "key1": "55dgCVRNKiApkZb4aMkn3CwrUdQVF1ocscs2JRZK5B6vUBq6UfXWHsXrhoBXRZCvRarG5u6WCgfX1TVHU6o8wZ6F",
  "key2": "3V2bCuU5GKG2RfRHGc1zusmu8V9CdKzEqzKF61b2NiQcHuk6eweW1xYNzvhipGd4UjWVoAoQKTTCBHgWVBZ5tCou",
  "key3": "5cEYKC8qLpBZ2z3cgddKRh2fKGSmeaF753z1ngVmoumguK5yrALR7rU8jfjV4Vtsp8HWUskgMwH6R5Ww4AunukLT",
  "key4": "4zA8x6NgidGkJ3mRuCGkRPXsQMtjfQAHRmVoirpved4bX5qxB3Uy9PQdwjcHCcRtnj6kqKF7LiEempn6rKnWuATr",
  "key5": "335NDKCcvPBRc2daqZVuZpXZrQu4mzx1atzhDouxpQkomjxAuGySyirR6bQnhd5XWprJ7mu7prmbT5e4ymHXSaN9",
  "key6": "3rtuB3tsMqF519PVeM6ZTLukDWH1GDhRCXhK5kxCu9naQvCHmPVpcCtZjUnAJiFbuKNVYUV193tBR461BpxESEGB",
  "key7": "2bkdFGVQy9NjL8w3dKY33x1Q2gpZ3wpr5x3xYTs3VJarSUgLFFAdN5AvogsREcXA8NeHgmas4Ph4qyYHVNZ27mgw",
  "key8": "MsBDLME6JQPPjENDW4MTihFbMxgp6oogDyPW9ikMrAT3HzfZt67V3ZJSwyaVCWiHZkv42bh6chPzWtrE9YUraAD",
  "key9": "3wgFU6H2HtdobAJbd9HoQVX5EQwEdQDUnoAP7LV1R3n2HATEMXRRHwsKCE5F3jB7Dy9EiwjW5XHb4Yf8FZ4nGT9H",
  "key10": "65KJ6C9fy5BKBwEzXU9Umuy4h34g8cCvQ6FjKLmsFXxYgHsGuAQFQUh24bK89xSXec1UUrRT6CoBZTz39cUp1dvB",
  "key11": "5uJBuNam2zruk54tNhUmEzqwPdyasd6gaTQR4Wipewbb7LWDy9DruPHj6sgMF4dBH6L6489y2kKnbMC7cZVamsBD",
  "key12": "242skriAcZE2rgx48uXwyoFWyy9aekHTLJZNdsvCBha8vjNYoYxkcqe8woFWPj6AkrbYTqe36NAbBZ3XSBFw9aDW",
  "key13": "2A1GoYJgav4nF1BZyGdzi9eBX3AQe4oqzm9oTb6iK5REngkW4NbfzpSV1P3QrL8ELYcGTpSZ9VseEUYMXyuc9ReT",
  "key14": "3aC3iAVDWy7MSSQiJosR7r4GNH3NYB6wRZKJR7t3VXUMHYi52Edg4qAWt8FXz1v1JEdudXvNRX3R4NXQA2iFVMgi",
  "key15": "VMj7QPmixpLA3XZgfQ9bRCwn3J3tJ3WZWvaC4BUJTNB9NZYhqeUKdUEobtHTX2ycyShJXrGrEJ4iro4qJQoyJ7H",
  "key16": "3qTXWY6iKPQMaH2y7h1kYmM2dJcVeq24PumJsqbTEbEg8VxqdqZNqr4pPg5EWK4RS3cmeqNpe1rrFgP5nX4gtvon",
  "key17": "64WMY9SDRxiNtcfH6Nq5krmC3hG7BhVRbNURZR2Lj3TW95CrsqyDpzUF3RK6HppWvc57PWtMA5vsAeGTTkE7bB1t",
  "key18": "3rd9VMKeeaLLrUbwgogVLEVGspGreMFd318WWy8NcVxJjWEuswg7THaoDEXXuiGMeXdnw5q9ATVoJn1sAifgiCvr",
  "key19": "5PAFjKjD29NsYKoxbZTpZPYRV6zhzHvf2As2w449x3NqJnUnYg5UwkuEymgzEKGTGFFyvWp36RipKRTHarrrp6os",
  "key20": "36wSy19Yye35zDH5pgTvQv6FWyBFdYgg3zZ8XTzmdTJi29ugSfmyqwpZttLiunfdiWMrVrSbzPLqQ4oJzjtPQz27",
  "key21": "2MeR45HcjonTRLckgErPrxReHAbNAdmXUXS6DXkeUL39xuAWDkznsUfVMGmRk72hjqjFb84ebZnUG86WxD5PZNq",
  "key22": "z9pzUtitkYQforzy8EJkCxRuF7vi7GXCTtb7hx5SP3GKMzFKk9uSUtrw5nSrnwWiWeNgzLNWfdvz5BpjgSEsAio",
  "key23": "2F5QE4HR17XUsSUTcP2cwgsWJ1rBx1iqn5EK8FZpwXSu5g6FijymvabToTZGTDmxujgMMVNc8KLJn6xeETwRcY5q",
  "key24": "5SUiagQH2r4JFChqvuKHy4XBRe4k7BvdfZLzfHJxsVPwo8UvwL5dAKehQ7e7d4FoePEBmQ6fUnmGUVDJTmJr62xj",
  "key25": "4WRZePvkRvsXaG2yZjxcbTaCo9gXb2z8icZajEtqoKaqUgh68JVrnG3Bt4j7reCG9xLzGMHcMhHE9YrVN8PmSLe8",
  "key26": "s8VSqaqwwEJ1MLqTB3AN7iGQHtLHmJKbVcx8HnwyYckEBAjTcjZJthKFqGD1SgswGtLcp8nAbkne5veLLscw4tL",
  "key27": "2dBqhSvDBy9rusoDihMvD5ySxf2BVPhkj7N1szJscMN4zsm78kbRdpQLnHQd6WDcgaa83NQTCAhp18viDNecMS7K",
  "key28": "3GJPkdVvxEuHuXZKBjHZ4exnajcnQRMHGM4PcrRJXEirjEV2qggTBxiwNfCUMbDmcwHxBT8DU2evLLwfSt8u6h8G",
  "key29": "31UBaRjqJjZUaDeopaN7uYHsAPx9W44U25ezAsH52m6s8fLUuy5dymQhm7rc9fZWG3TMYp6jTXcFcP8Xod2P5cx1",
  "key30": "3TXAxwtEcthcHKhMR6HrqJGnJyJpwmtDiFZjXxXr9vt6DjxKFfftA2fkBWq88w7vaQ2jrYA3P8Q8oSj2CggQdEz5",
  "key31": "62seyP5Az3tudJQQ6jvCBGbhxaeHXAsq58AxfzqdsWLbfkyYusvhojVAKRk57e1JJ529WGxaKdYnDhzZjzJcAxRS",
  "key32": "f3PMxwycw1HRGw4pa6MQYXtnmdyhnWcA1hByNW43uDw5M9ZLZvtfDyycVBqNpSJ6kC912CxxwEbNCeG2GaddbBK",
  "key33": "32oV1W8VNhmFe5TYDmqN527J9ZYEwkcmeqTBPwWszmTDGyZMg37NqfyTraHj6HRsHpseHRd8v9RsDYMYsQbhZUqE",
  "key34": "4peJFzQv4Spe738bJ886QERCN5jH9j5JZPqe81DihoBLuyR2poiL1d6GSWW7f8cWsdUCYS3tzXNT5unmw3zKmWoZ",
  "key35": "5obcARoiycxnkn8HAC9RTHVgjspTLkx6fKthTxn8p7FPMxNxt4zsbK7xG36fTD39HaUaejkVf2TJuuokwr1miMrn",
  "key36": "3dG6iWYDcs1gFyN3B4sZ7BDnKSHsfYbE4robcfojypKMqWfCkhHSm22Rx7sUeZJr1k9TeGkAW652Adsh1bhtHXZh",
  "key37": "41h4wN5HJJWUSBDwasRwVba2tsQHnN7WEy8g8eyV5ogBMiYkiQVHuYa8Ceuw7TJ6fcKt7zN6cGyZVgw2HMWcpxwg",
  "key38": "3tfMYhqS8w2D74izwyb37namfiRvTpTKea9gRbWFeEC9JoNEkETZVVJb9zhAVoWS6GFByBtnP51XJGvGi6kxbLgM",
  "key39": "ttKZzTQHYCqoUVYguzzYkWYsq7Xax2kJkoGQNhv9d8MDeB52jF6UVgyiuXX1rA3EB6Cu6mhY18jLk1M96qrZN9d",
  "key40": "3D8SLQX26rLmrnRZCrBPE9QJUPKvMDPdx1GV8d7FLHAHHirNdTrnEiHJZFvKuEKwoBee1cGacfLA6XzKoRoFhMig",
  "key41": "wk3hQSFwcxnxLQBvBkGYSJMzb8BN61WRNNYooDRP8C6RoEuHc9dWWFUbShXuv2SFcMPsfWuMv4q6jw366nafnKe",
  "key42": "4RU4cF49BhA3iw7YhPGDwAHBJ1TnZNqefLzWx81EKooof3NG7o13Q53HfuSY69dGHZrMRuskxP2DUx4bcbnT1b9n",
  "key43": "2x5ZKLYPZhGwFkPkBfZ6UrqaGemGebsabe17toFP9fLdg1NTsj47vN5YfjRHWYErJ9MNiyFWk123iND4pDrtYktK",
  "key44": "25pkLS4MfN7Bbg2SbHSEPWs1AoNZocMuravoiH1fc4t2fEik5utWYQyPDR3yeTeUwTsHnCiYg8dHcmGNvxPnu8PM"
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
