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
    "5n8gLM4WS9LsZ8PYZ1vFEz4fvQWspoZEipXUgkVBLnUZoBp4B2Cf5Y8nvspxpUBczGJ7AY3ghnsBWzXYEXqbPNQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xheKV8BENnKT61AWpoU9WPzuyFWwiZWcLaZT6V8YsrRidUEVRm3R5syzWDHrzquZxHRoqqCLLK4gVxW8t4r2x5S",
  "key1": "4fH8LfqmG3gWE9GtRQ21SWNpBVnzj1o68QuTYBFRmtwM3G8z46caJjEUNZ41LzvFh9eYBCCUVHHq9ymPsLrZbG4t",
  "key2": "4mgechaobyBkMmHS6rzrbdAXNJiiGXajqwQzS6Yt47iTuATL9cVaBJsdyF53mPdmU4L2kET5sb179sjiqSMAmjN2",
  "key3": "2n19ZTsbW91sssT3aRmYud548tRjGGfHttLqnz38A8FEsZhTgC1tT3YM1pCxXENKnyhdU87zpzuiby895fMYNXSB",
  "key4": "5JGCUWyphGaPC87oc2VTh5m3iYcbuEyuRm3PiZLamJEGoYC3vwrwuHJ5TYYQXkKYHyhdB9iPmUPJxd1bedc87XM1",
  "key5": "4jnbTmzFuToj9pHqfG8MBpVJRpaBogaXNCXQw4AMpCReAMAENHCn7B9A1hrnoKVBRjLdUtgk8RRFqL7UQkEuBQLe",
  "key6": "hiChui3rZZHhg7FQx2BdFL22VwqfbMFtXijWSqDySeij7uT5TsZ6FxsE5m3YGr3W4KU6FN9Wr27EjfQfK2EcjTH",
  "key7": "3sPLvbhCkkqceUyxgUAH7mncxJuHDZCKVWbn5CM5KdEcdZ4GYu8S4u3FFZqYYEkrVJsTEh1skJUM5prSz7kCY5Sx",
  "key8": "5u24kkzAzYUM7XDPfCyCPjq7Ftz3f6LtNdxYkC2J7DsvU9Q6uixwsaLqAh2SCK2LPa9KTMKrL2bCV2SzUanrsLhk",
  "key9": "2pfhjpNYjLqdx6mMpjHyLriubyaxU6enuD96j3iikQSgcDJ7fsvqcFHHW1A3QaGh3QoudHcq8SCPyAsfzcdJ4zpm",
  "key10": "4GWUGsTTUu6ZTsTyZMK7h4ea1VJo1xxDxTbY3CnG68Dy9HVrGnNWtGXjWD6WqATMTRrPGARCw5XSp4bbraRXKBUS",
  "key11": "5jTdg34ixpqBUUkuRWjLdC7mCFXJmwPu1jGpGqcVFy8CVjoWwwzACwAeV1gDvALXiMHpqaakw8XYPKyAkz4NZszi",
  "key12": "2xQ7oxY7hRtVqfgcdBcEmkLCRoCi3cR45B1DJmYfNFm5UNq7o4QNLXDFyabFJRKUdvKq3at6Ba2sSV9cPW2gK7Qj",
  "key13": "25ZWnwXncUmxLuvRSVVbGi2dFWxi518fynL3QHW6QfDKmXntnca1BSJVyzzbp32tmBFy4eSpjKBD3QsUX1m5fqYa",
  "key14": "5bqQbMFtVBB7phs57ULLRhKQFYBgPzDdTETHeiYG3eQXHH9Fn1mBRRCVR7qkVTGfD2USQKNyuz4wUCUVw1XbEPXu",
  "key15": "25AFHchH9WCS8tqQGbDrHvtPuMTSCP2SoUHK6RE4eLZ4ewwY7mxNfZxhLT6Ay9Bz5XMU8S9VDmKZqoedPypiasgA",
  "key16": "36x4ZZrL4bd3tWXc5HuyhD7FBccbdnWGoGWVh99vryx7Xtu5j8SMUDJEVYJsfDZvcKJwrnYpk6PVRayuWHDcRv3X",
  "key17": "KGYvFZ1V5SWZUgD9Tddo38tEbc4W1CiQhutynZsJN4hgqiKsoWcrbTS5GAyDeV4JrNeT4NnW6Zi5u19Z7sUcj13",
  "key18": "5NrF1ptZUGzuP9UxZuNqwZAuVLaztMtxMipYve4Ao6iPYrMYMhoXc1aomoabgpzmuvNg51gP7rGGyqdWcd6njXWx",
  "key19": "3brmrx7wp5SETz89A3cWpJSjH4PhFRc6R2E4zCywEnvbkmu3FD6ctcUT7eprjjb9bY1G8GHuGRXZBpThawWZVxn2",
  "key20": "5BL2h63aNgZQUVLcTzGNfFsbQcEEP1fZ2AEpgRnXHoEyyJuae3j6jy3sp8qsVZnfk1JanY7hjKbyKmfUr4ink7XP",
  "key21": "cHdNY3Ya22f92RuiQeEoccWGZP1p53tkFVUEZ854fs4q9hPRH6ZfLsHQtHtK8UQbMxyGQ4aNUbkBwo7pGVYH6oT",
  "key22": "JFNpxzNTBoMzvBsLpH6iupGwtwZm5kbrnJRjv8v2J5RRB21U3j65ykbLVfmSaaZDdhh21E1RiYWoWGbADXvT4R1",
  "key23": "xQPWrAiMjPE9A8H7RFtJ7tXFzKygKM6UL4HZ6622Y8RZ4xSSCxzWAphGki6ffGrdvfmGzQySGLuxDC5TSEUpAkj",
  "key24": "531EaA7fshJvAY59TDMbtu4jjVG5rPw7re4H6R1fEq4p7AVhQ5DraCF4jZVS7RR5jiiXkwzZ5VWQWrvGdzfcLcSp",
  "key25": "2kNEAa7YYsyvu1qBnJpm7vtqxnaZ83BJvECVbqacGLJNHdTQe7KLWyk1PyVgCLbm7gankRbw7h6nLwgBfQPtKMCw",
  "key26": "WJttubZ6rq5CRm4ehLHRR8KF8JceCyVRYCu4Fi9Jj9QuETBwo56gDurzioGesT5Xqc6JurU7jFUzBYkyk4dioR5",
  "key27": "49M8MHdEBaxbeBAycqwgEjeqfQDa8ZnYJgjDjzZe6L9hGXgUUnga1GrS1w3UMyThuz7XBzsa6ie8EW69sAo3CZ1j",
  "key28": "4pZz6hxzVr51YwfZys4eAvyXUjeoT2wDip3RQ5mjTEkVrKcffL4qVevRRytMFtvqAdBjEpUE5HGc4tytfDtp2gqm",
  "key29": "4K5U5r9a2kxF4hWAKFZzDzR3nXp19WpEETT7NaA3W3Eq9mawmvvkR4Mod6VNuM8ECKNAGAYjNxAnZXXfNKQCzbZ5",
  "key30": "5UhkAcY9Sg15a6KQvbjj5afiVij8yQBDNm4vJfogyveq9Zxn8hsPYgKLREHVyDxsyD281qero77dG3Kd8w3VQWz8",
  "key31": "24mYxsEBnGPsrb7hCreZXrijsLSUeFrGaZCySoCNjutYdQRXFHz473ZQngsJzaitPiNUid8zL2VXTbvYHAYmAm2h",
  "key32": "23Q53LTjoBmtdgBdvDiKeoA9N3wyt9FWZT5wMLMjQ34AsmdzoZ182jY2buDGyz5xVmvnS9D8JqXifwEQy9SU2JnN",
  "key33": "5HBsz2fBUisjoTNMcviRHMCFpjnr1S75AXRohrgVkUGmvcR3CJRzFmnN7kMmaBDpXS7j1Fjtgkg7mtugFhH7Wy1Q",
  "key34": "53ypEvBXzN99mxXo1pNwnDSKh97ZE9jcx1sN4bPvGXXF4M5FtGxnJYKBctwcM657Mmxw1t2gRrYkpVgphtwi4DyB",
  "key35": "SCVrinPK1EmYYEHffn1CrQ36MzJFSEv6wVpqBefVxmyenpNNokn2phNUWtLS6WB2npTh44n9em6kGfUN7cQYZco",
  "key36": "38KXFidNNRrW68TbdWspPgwCKDWBbPboj38empdqJa8hFy2std99mXr1jwvMA8S9WnVnkr5p5kAf2mbKs2XQqDem",
  "key37": "hT3ZCdHm65TYdih6noQXX8eiLFr8drh2r6WaAu6gRcKnk1f8CgTBSYc2qPseihohqHnk9z3EcgJGuBxv3MsxUJE",
  "key38": "59QpepwXqjx491gQCy6PCDpyUYDAyFgPJn4n9DgBs8243dEy5gYbLbD3tDBaoiBCi31FAX9AfDyGvUArvFf88VXz",
  "key39": "2z8Eyh9es3qPSPZNVjUV5kEvyRugEW9kdXai6QWQngxG5P1YsK6jwHMDVgviPphjUJVRuC348n3HruGNy5YFF7Ux",
  "key40": "2SGZwKpbgjAkv1PdzExEarPRhjxBYW1DHgwmKxAYuXKZJZsmHmuzYJHUDxH8DY6r25gQXpcmnqCKjNvLKNzUw3xn",
  "key41": "5w4ZPySjMuks7RTnZ9GY4ZRVWmEwD7Z7uvCM8F1EybEFEqDvovKiQhL9yFrTLJWoEiRGtBAX8qrTseD3nw9tBbjT",
  "key42": "2w6YWe8bbnRypr5ngknF35H2TXxj3P5Tfvo2jTC78Y5gRm69GzEH9k3tnW55CVaqxGzeh1ddwytsRkmYxoZT2i2m",
  "key43": "5Jf5649cYdjsx2spPD8QqCQVCsheTwPkdVnsWK2zEBEtwDGGcLBDyQLK6u7ysnG54XavDGdNdbNgcUJpzMHTjqYX",
  "key44": "5tNzJvMrnGjRHgaq9uukVPVszCTcnak554oirPgGEgc1tynLf6GzuvhjWcxRvznTExhq5Lyer8qgUU1NAC1rrzS3",
  "key45": "ssGCRGztHSGxvQMSAHEJhDJDxdjcv39MZBhcipxrHRX4JFFRxkAuhkmwqachzjv6P7WzXi9QLvbGQsTn7rmuw7M"
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
