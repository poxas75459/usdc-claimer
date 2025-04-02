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
    "5fKwuaVjy8SChgR38gS11sCnd3LaSYED81Vw9LB8pE49Qdj7GXR474ijRx9q7754efN3MmrcqZ7X5snzqM8CTw6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vPWy2v2PSKarQ4sYEgGhvZKLKwzSRUAgWkQVK2bRCTLKb9NjKQG9HNh9mXD5zvRbSKLGsJJWggu2a8RkZpRxTcr",
  "key1": "2VntkvJApyMatMguFM3G6F6Fzhf7RLAsdkHy9PJGTBkVe4eRFEn6JwK83a8yZR2MWrfS81egWZnWANmnSKECkHd8",
  "key2": "3oVvRvfFnrjK21QbfCvZLMVHCaFJqdAGXS8Qy2q1xMJbN5U1AQmteFNSF1koPptppzjnkerY9cMu7PwzDHPy9vYm",
  "key3": "3RTUfBqVsCJCHBBDd7fnNRz87Yp49RR5yPie6LDkmwULLXS8tt4P3Eg3GxJc2rF2YMDaxJk3Xn1yE4SfWkvR6DA5",
  "key4": "3ZkFnxM6SziFrySZm59u2yV3j5oQGgau3grsoniKYW1sZf3QcYwZbo1N7bxFi437BTKz1MWC7VuhY4MGxYM82S53",
  "key5": "2U8dWWoHqhG85xGX8caDSk36EAogsR32kozqPQ3DFZhjBkRHPShcMF56qUVi9VyZP4rNGrT1LScWHeFFsuxNrid7",
  "key6": "2MSnegX65w9gZA97dduVfzkdaYBQfJ5Y8eyx7YX4uKDZUsyPA8QEtYgpwbgL2MAQ3euxPtxhn9nzYwR6DdCShXkN",
  "key7": "Sq8bgUTeCUbm6vG2H7HsfoJAwA1xWQBeRDyjvjtyYdPuBnXe93WCk5CXxPP9Av8VJZ1xSDWJrCUsACDydUDd4j2",
  "key8": "3CQKE8kQLNxPfjgKzKyiHwakSajAQYgyH8rdZc9dy2tmPxEJUSD8cFPjKqL9SgcQ7Sm4wBhEMjvxWigSfgZ3rhpN",
  "key9": "4pWg9G78QTU3MJxjbGTdUUXVJzPe4nWo6qybBUXgTmSPtpvYAQmWkQZZaEhzRZjqws6zVapxURLWXLxFNSoGvrCm",
  "key10": "4ZkeX3ZjwRSfbeXrkxgq8K3wNND6ZHL83LQWkCZBry6sn6Cm26NCsWp5sp6pEx9o29XXuwzgkzkJAGAeASJAe7en",
  "key11": "3XjHuQoycJKTUfUnkRV8mBSEK7358V2QZJv1A9Tyh3YAzG9Wr9NZYhvbPQtPJ65krm1u4pwHD3Q4BHuKHj3JC73q",
  "key12": "3HqshnFeXtymhtX9xkBsXgsNftc9HAD9XKgDn52azAoFS5apht1SpV4f1ycj5vEjEmQmCwQEmkvUBbfTXYJJgzjn",
  "key13": "2Sv6F4ZzckR7B5NtQMhFmkBDQ5JW4TjqYjDJCtqU6jr34673ZqG7i9Y6maJ3AgCUpzMkisLHsfUPoYuNibm7HXuW",
  "key14": "2iSjMu8VeWzL3sDLbc3UxDWY4ug17EFGBSZaPqKGGFuVZbUBuo2WAiRNYi54XRpe3WrajdLgNp9stQp52FThgBHD",
  "key15": "4sNrQB7V7R1GMHbLXbxiLyyJK5g685sXCHoAgcbwPpPmrueDoPi26RbcxwSSx9JwvFmTmsUp2maR9PSZMHgtNhPA",
  "key16": "259Qr9pyLsn8uoir8QiBFGJmK8r9VZaH3tFvTfGhym9ufuh9k5ov46KQNiVdq15fdKmZS3gAqrA1d7iEoVJimPKw",
  "key17": "4aRUMGiCxEzTfAJaNCwqjaRAypp8fSLno1pQoSf7U62bEkHjFZH2BB1fSkWXibUFzxHCk7t384QNCaLneRM8oUJ7",
  "key18": "3jP6pkTjyKHuGqegQg8j7PwMmBdd651hAxYXuFWMZ6heSZTgMRigHybEmFMF1WusHg97zRb9hwZgzezNDvWrNxDt",
  "key19": "4n5PeXRoTF6xR7L86X9PTjd3xWtRRe9BbyEX3YqD6vfUUN6iFXCWzLKXnpjFF99pg9WCecw33eD5FpEJKBiNDVcf",
  "key20": "2oLU3GKSX416GEpT2Ukn4an9D1XYNRcUvJ68VjdVBLx95V8U3v2QgLiyu1SirrUcRb85nyroM1j9q2ocpnSLv78x",
  "key21": "3zV2uxefomfUat8WcQTr8qRh2b9CAHiRGxdPi2SChFMmAFux39CrT5AygUXAgw7rJKu5dFj2ZvHZVr3pihj5W7nH",
  "key22": "2SkLaDzPwMXcr5733rX5WHoiXkPhWNCdtfgUYmhjZyt5xD3X1mYbUcko1fp4d3C629Ew2gGU3t1kb4FpeL6wiUfC",
  "key23": "3NkTjsGwYCXQWw7Yix99pFPeLDXTndqKkmq1fqV32GWexBL5SJ2E6mkLvPEmaqc7hsyqz5Rjts4MA9VsNP512WnN",
  "key24": "4FBWsWdBBpHtTE74rnfxF72ERtZpCnDBKCYjRzvoyGSBqDMpXzHoWsj8LrCkwVVb4GNmXoRZK1vvx47VwH9tJrKj",
  "key25": "ERVsVZMRxCtePS1u8xUN6xTUQfbmP5rxhbTgNFp61ygVLxihDK3aAqfBLWHJyoKRRtLWWD8gyhf2mpkjAPMyMbt",
  "key26": "5Doyt33JGDARzkd8K6BaVNDp4YT7bNS8ALCzoPSzwt1u7e7qxjDD6pF66bqNhHD9Y2mVYW8CootHhXYqQtsLmdwX",
  "key27": "222MUEFXa3uReqN1YYsvRpYagnr8WJnDr2dGhEu3YhNtNaR86Tqc1p3SFx5JSk9PiJgfjSyD4eLLj48RmBVzTHD1",
  "key28": "qjcPnJiTpKqAgyDhsZEHJJRDRoVthq4gZcBEXJn9RjguDAPyxgbrDVkapdAaqXKKZsDrVhNkKNA7r4GAqRRnWCt",
  "key29": "eWr4jh4UF9oYczdS9dFpAy8zt3Eyvjpamej8XwZ7JoH2CGcpodHD9nhW8G6JY89hn6a95wEc9py9HrEkaaafgmn",
  "key30": "64PVoXU79CdgJMu5tS3p8nGQ6Ke9hyux4fv58AZ3nM7ggj3eSv7th1M9L24StJ7S4u2GCsh3TzTS9HaYAEHtzXu8",
  "key31": "eynKZNHQBk5MhAxqPM9GmrziPv38sGRxq4ji6ZF3EtSmDABhspDr6Nz9LQVkVTty3VVNNv9JZzen7FLk2eZqokJ",
  "key32": "6554AFTo19edEQB9qHB5Tc1Yf92NaAntzWe9ZNkEZamo2LR7H4L1ARbdQYFzmCvcfFKiUsKrcisvJdxU5FgxQXfX",
  "key33": "5usjRMnSkXnJ6DxYMSzJVNJjuP8tQQWL5Z8rrQ7GLGA9kvHSD83GXXfgJmcGLgy5xSGfnnM8AirAQaf4BAeWJrUU",
  "key34": "4t8BUy7MVUSLZc5u4AZxytv7GecERBWZpvz3bPF3aTXM5SMnCqUvEJQKWqSH9qw6e5RLoqQQ7ayGZCmWBtrHp8q6",
  "key35": "4A2UR3N6mVbEaNStTJR1XBhuK3GGRUsVHZsGStsYNyP1tzfWGs6AiQxg1MLw8sjn4sYLvNjDTDHvBdpgnWKyp9TB",
  "key36": "3TqnJ22NLNkTbzfHXTa7r9ezwrJUoEHVBP98EU5MtNPEqjimEticyKDkkr6wg3C4FmjUJdwXqCx4K4JKWPyvT7yC",
  "key37": "216jK7yqafAzif14mu6Zz6jo6HEPQB9A7FepMhwUs5iWP3nKgtbHSSnW2XdTJQDPU64nVA4wHz3PZiNENbvYkYHL",
  "key38": "336p4a1KQiumxP7pYxZ7DiXCSfEAEUUqvdkdLrP6ap1NhLAevJqGZ8oTWvjndF5sVGsZkQFt7rZ3eKmnBHraHzBN",
  "key39": "2siNwrQ2aUwnYzn8havRDmGxxfhWyaeP78DoPJ2Ev88zuqBjActB9hY65VidviaWT8ZFfQJmNMqt412MkGEtWvT4",
  "key40": "8gqP1MAMwV2KEU2M6LHwrAwnxrt9h8cD9oqBNFyhBbDMSbEwGPx6Qo4bbyN4WP2Wnwo9bVJscWusyYcfoEEJtLR",
  "key41": "376Ls3CckXPrf72xEvzbHj6G4iHe5bp14xfFzEt45kPjPxwWnp6g41AUEq7Jzx9VJX4eicVnfhEAS8s6yrEkt4kY",
  "key42": "qeR2zcCRewSXsuE5cDRN21BsYAczRBz4Ci9mmUdCuEj2VezfAZABr5Fc83pEJPyPd1tcV8tkDAEczm249TeworP"
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
