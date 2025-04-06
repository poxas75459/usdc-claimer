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
    "7UodMvvLhdaTaiTSUTAnKjtBCKVvouVrKaPdij8CSvo4pht789m6u1TbVu1zKPQ4oJ91JJ2c7ReMRHD74ZkeCn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cvwtCBDF7cBbfHB5GibYr4mf1C7PhhgEjnoQ28KqRaLH8TnJztwVeoaz2e3vDpwneQAfdK7ynHTzUy1AfiF4UUx",
  "key1": "AezPu5B29ETckMUvCdLXMQk5jZ1HW28hmvP75r3wZUM1UfLjtQh12Qhq1iZDb7AdZP2QWDiA2o5WN7tKHfE1qeA",
  "key2": "59Ntj7QX8e5mXn1zsgWUMrLXgeUnxyUtegpfnfNiocS16UXTshLpahcd6b8e1d6LHLEaQifB3fnEpMTcViJ5gfMx",
  "key3": "5TPVrrk8GFZUVCX5dwxwyY2nXdG2ZDmjb8cD3sWDzVaTnCtEday7y5YgEMzaM9zcSYV3tkLxEDE4UgSoaSKuxZi4",
  "key4": "9FusrRAryGou3DY2xpL4NeoUzehVWrnhNb2dhcCqBt3ttUd85duaJ171dKDNUmqstFBg9V7ip1nS3Etpk66e5nW",
  "key5": "5nxEWXo7coX9NRpx3EWXVymq4fjR1PGbo6R72pfex4oYJVQ7Y1k2CVy2HEKuu4EEUzb3YUHSPGAZQ6mkUkVCuf5t",
  "key6": "jkAK9M2j97eUEpmxLGEE2PFgCg7RpejqUvHWqbannAga8KMB6yGZEdY23CmWdzUJz5onX77C9G8ibDXmF3nxZU7",
  "key7": "35ZRTLiDo3vUavLKGHQWk2NF7y9jqHxLRPxF3fLmTmicWqamg1YppAFSbJrEV6HdLY3Ec5jFGfwA7gxNELj2Sebi",
  "key8": "2T3VLQBV4JGfVWcPrrpVibAEHdzXLSG8SVj5nBG8o3AnuoJC6k2Hg5Gbpf5HPEy5gJ2fQMzc7XetuBbFyNz2RCKA",
  "key9": "5rUUZGQqHcQrSZobakEW79pHXcGSnMQzUWL5XcBhhhEg4MK2AVxXP4KbhxtauMsRirGx75jahgeEQtF2uUqAN7Mf",
  "key10": "5vt6Ls4nK5W1NfagscWtbPdNHn5XN8PK77BEDpz38mSLXhkCuo9UPexYxyWaV1YQ45EGDbpBsNRQy3CfxEA2GSbt",
  "key11": "5mELE6hfBfNfa2TURxy3qRXcrX5ZuvtQGCQ4AjEJtc21EWTa4xJC9voDr7tFxNhbcoUkKQ2EtoCrAe6SoQVk9bCY",
  "key12": "445EY7emRbStDegz2JinryBZniRTURzsY6dGURooar4cHphzNkhXEC4mcSYy6hjRwWeRAGVn9uUd5VYgKrPsBYpX",
  "key13": "3Y3c1wD9FKi3pPv4nM8BuiXwkbZhqj39BVgKgCVcjDLd5o4Lx5qSxfAgsKgK7mqSWQRTeu4axqvhPonS7yTG3nwb",
  "key14": "2LzDzYJ7r7GyCmpqhAkcUsCtq8t9Qq6aPZqYx7vnSBsF39xsnSzbxFeYriL2rPCjGxqGnAAZHR2r18bwwWw9oEQw",
  "key15": "4Xie3g6ecNrhyBLfSDfNz5vdDm8VR2Rhi1pD5BfWiLXEPsByJosnn3ZWUf1gwueu2mVN4q4p7N7sp5ejHWDiaDKT",
  "key16": "4RPGBVU1KXBZpwHgKZMXT5QXw2RMvnsAFTVmmNDCFqUyfpdsCdTyg7fpVEAFtMga8RAB62tWLxJPAjufbM8t8eNP",
  "key17": "27jr3xKjfoxfmW4Gr5MNxrmUcybehvz6Pi3icdZLvrTeZssN8vb9w7whzNkNyQ4S3bvqd5u6a1FL1ELnYiZCYvtV",
  "key18": "5e1DEmtudhUK2yVCfPb7SYQjscn7BMkbPzFz8yWBvk4LPdUR7HMtifbx9Heyti7exjdKEsjS3WfqeiuM9GcZrJQV",
  "key19": "3zwDMmapskGjRAS6UxSt6YmT7VdibvWoiDEMqLBcE37hs4GpYQS2zNaZmJCMoBRs2v3eKGPYs1JaSx2nEqmD5A3r",
  "key20": "2eJT9d3xZ9jN7dZGrezPGjoaJXTxiFeczeYpi4tN587chCJSzTS8pezi2xnkcfsXivid2Wtf6Y6j7nbXu1oqsRE5",
  "key21": "2uY1Qe2BFEJPsyGkxX2EqBi47MGgSPCN6Ni5J46TRbDwGm28CKgUMhqjjE1BLKU4Rz4WmnFE7EFNXcXYEi8cZCSm",
  "key22": "5Mnrd7rZ1gGBgQadKm6WiUB1g9VA6pc7YGZcKy1QyY81zjmXZPvHBF5txbAKJsce61KuT165zT3svFvnFj7dU6cu",
  "key23": "2qMPsrEdip5wj1Eu7F64vyMh8bbdhuBrEVQABVu9MaA5vVihvYi3cEvhhQifhjCNM9SutZDJsqC42xwA4iYC42kf",
  "key24": "3m3p1k9QUE23JeitfhC9SHjShhVXgPK57JdHietmnqVj45VB7Eoa9nrhmBjsoMAfxRMaqgvw7vzVqcTJMpmfuiYt",
  "key25": "1GrBiURQfB1BGagfLPpyu9Bqf6dokhvPUF2dphtSKbzLAVaYycufgXrihuNYgRov3RqCnu1wsZQPLUv7kE9ZpCM",
  "key26": "4aHWa1NJdLf6xiDnfeFdA5PqMPgqBeZvQXqf3BEdk8oys53q7rpSuxrwDnJQ58f7P4brKCTAgagmS8E3ao5cHYpm",
  "key27": "2yaad9xGJKd967rwX52L6kY4doRJeLtZfJtZyuoGCZSE6L1RZpV5fKgy2EBB1Et6tRW6HuhU8wGMBT7sBHYBdXzc",
  "key28": "36iqb1TBtnXxGSdpTd9t27QewmpE5ZfBUmyZw3e8LQZEBW2wAmhLEFYYV1ia3GmUwpAamhfSDpya9kdjRkaYA3Zt",
  "key29": "3TyBmAzqAjFpUgWG9A6UKZtbHwfeyR8FvGCGBq43V2scs7naP9k4TcGW78nCsuMAZQeURFvGDqWH2Mi3QFWUVAGC",
  "key30": "64QZd2SWixMMN6PWqa4E9UqABFxuGrbzgcaQGhy23Ypw31u4gkic6k6MwwzKifz7vmFojpZnMGEB6EJ8hC9w5t32",
  "key31": "2yE9gSryFLeWFbk1RNbZCyRVYurJdZnHovVeT548QjHnb3tuwgzLyRPojb9DY7qd8nC1duEw7S3XZE9ov6Jswa8F",
  "key32": "5676BDPFzwP9VLmtfsWLuNVYs8w7RgmS7iudQP4EUfe8WDyjrpHvPEQcUSrFgQsj5rcooYy3kt3rM9DP1dUofHiP",
  "key33": "5oLziHrmws283RoqhwUCJWzCEo4Uwz415uKu4wwVBmep7zyogT1e2k5q8FUKFuF9tiLPR6KRYbQV5bEUy7pseH9q",
  "key34": "5yxvTZ5Axssa86d7hSerRJH9o2rrGw2uhYckiBuSsBrJZcY4s9t9HDFr7fJMvtQWpby9Gnm8ksKE4jXCxFQoDvLY",
  "key35": "41bN3vaa41EZnNL5M5EuLDUCakxPCDE4R9Cv7P8a1wHCfi9X2nRBsC2Kn1HVYpapgAYhvM1fMVyniF3WSrGAvk7k",
  "key36": "4FzJ273ywPXat9nkUAWrAx45njeAzP2CMwDx1tRXSRCAAWe1DUZn8t6EX8RrDrMX5p2s1tvonMRD78AwdeyqgWXh",
  "key37": "2UkBG2BeKqfbK4z5Ug2hfCJDTba4f4qY3xPukAH3jnpuF8ZjpZkyzCp659Fj7EKoZcBJHLKKP9yPfmmxbKFLeARJ",
  "key38": "SYU4gSnp1cNrrNw6SggAgGfBZnuf6nUnPWWSGij9UsXVFD8YjAVhczVJtpiZnwQrWDTpXJX9jXnTqfj4ukTDFU8",
  "key39": "65PFHFcy6hsbvJW5JoNKE2MiEXYkoo2pnFHEJUURhwJsChx7uuG5jAcoLUab785ygAQfTYYXWqgx4hBgGbfk3qrx",
  "key40": "Wdt8qoPJt9EsVAbDbzthapT3RmR7xmreKM3BJ2VWtJs4jkSG9mXPR3G3vmna4SdfukN3j4Ewty7n6jTpt9dEzvz",
  "key41": "32bVEhwSP2x94L25esXhGywK98krZmgmaUhr6h1yatNVASBgif4J7NgjpH3gddjWw8kRixFACF6KfPGS7Aospgn2"
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
