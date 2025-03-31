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
    "3J2far8Ldr4UKBNVQvp3Dw3Yf7xjudvLkHPe7JvpUdo9Lt35HFHvZPJyF79aD3j61DWyfJbwm5htrynYHxVEvKAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bCUu2PG1USgvXNgbcEq5qQ7PX7hhptjhT1Q5METgaPxMnFVgaZXXQjWyUnFq7s6wvGuSs1Xy7jKkdr5mPxybppn",
  "key1": "2JK3oWhdgWcSFe56H8x6J8tUTFFUtKp9QtPseQR3fDhFiJbao2Xz31QQ33umd4RurS7ViUyyRrWH9sqHWpwdZFX8",
  "key2": "62As9SGkgsc9N39LxPyaJ8d2CGmZ5svH1Tqgdyss6SYtFtML8LvnQnta1WK4JA4N5yJGAqrmmRzCqe2KwDfYuE5Q",
  "key3": "4ooJ2kvUSLmrGxdkqPLpuQRFyTTxKNp5mRihLu8vn6Fb5aQTUf2XkPrUxkec7VJSGWBnzPRU413xEBm2bMgbvQza",
  "key4": "q6L1Q4ScGFyoWfEk8DuFJGYebWLgENktQxXx9Kn7FCvfyy1Vc1jtcWpw4e6HcSZH4WivWQWsaYDidtsZy39Qdr3",
  "key5": "Px8DbLFLZoUnN6zCXq5KYvB1De9gsuJSsR47Nax5UAypy6eYX6G8QPhvNaLvGT54nq1m81FsJ22B3ApHd3Tgjaj",
  "key6": "5qGveiU7BiFRNFupytKacwQNkupYLfvGUgnsREZjQFRT2r5TY7py19ZdBTdrQPiuMVKUkWzGkzGJNugkV8A3Hvv6",
  "key7": "3zeJkfnseSZwbGmYBeWcM21bopQkSi8QGaSoBsASm5jbq8eJat3dJdbZypFMmb1LawNfcBA8oaDjaJ8NuDviZZiY",
  "key8": "3eMUZiLz9ta3jnRiCyck37ncEtD1Nx4bpDbouoMyWeZj7x71bZP9WKmYf3NGS29KybfCpHGm2eWZ4di8C2emd4mk",
  "key9": "P4GSq4G5ekLLnonzZHrh6j8QCSkAL5dGDoQgN798XHB9WK544YBSaoAg1DX1QvgYSCVnkfWdghZakAEFE9YVgL2",
  "key10": "5jWwhWkKTucf8FK4Z7CrDC29XBckuhQJJm42Ms98xg9kjh8CRcSxdehNp84mfDr7DiNchZ49dGYjccjLgCxBHsFa",
  "key11": "2JXuUhNozuF9KYYD2xdffykAdkLExsd3HU6eD6t4ACwJA9TqrGVGf9Ck96RjaC74yQrF9Z3S5XbGvFogKoGJrvnM",
  "key12": "45XC7FHAFjEvZidGwGgq54JHtDiWjeFLDDRSaNjV6Kyki19f5v583weL7V6Hcj57AJrpMxfzFk6UBErTSCiZvqFc",
  "key13": "5Yo4CubpM9QnoX4e89bnhNnaZAvji91aNzVE3xvXCAwEDMjYmgzYNFRenkAJ66b65mPATYGozLQNeJYQReHYxF4H",
  "key14": "3qhj9JtsX9hazkZmUE5Y9vMLcRMF6pzvY3jJEcre1ogcH6Y2fNsFetrySvRaPKipH8LksmZ1ifFAiiuVq54JhTPA",
  "key15": "36jxK8XRCvDg37H9rZyjFBSWfmBWhLMDqvFTLgoN6CCmCR3thuAumSCmBtW9ies4entMkuhDWGCzxe4nNGjCoZpp",
  "key16": "3eDcEsXAD2McaaVbkpGrMB3GBjycKQDf9i2Y9kXNfBfXX8orHFx7wk9zttm52etnon5gLFcutSr9xoEkNykrKGi3",
  "key17": "wuHmU3Afax2irYvaCTQN3Ty8q6HtSVFCVZdtfCvMmDg425SwtnrTXNs6bvuWYuwehrsY7PoRQJ8oV3CZtVQcTxf",
  "key18": "n1NxBFbGA3wQDR98ZNEZ8dU7P2RGmyLj1NM2oE5r9PYQ8wCcaw9hBRc84umRXREeCv12vAb1kqJq4q8pG1PEqLH",
  "key19": "uYAjFKLHqwEPZney2soVhk9ThReW79Mx4EJcEj9p7ykZN53eraa8CsQ7qtpSuFWhcZjxxEYJvqNfHcSpkGWrQpk",
  "key20": "MdFeY2QadnhRBLR7jMoivn5QGAbFCzxyxWwd7HhU1jkzZ813G9uL2ehATSWDbh8zPzYrKgXWRo3TcW7zuewdQAZ",
  "key21": "3MYNLvt9deXuMiHLe1gDc4y3pr9xynewMqk3SYtJkBESTKXQwQvmFjR3s6b62zUsKYycdWYSQR5VEan1Th7uf3Ys",
  "key22": "28TZv5MkVJzAB5w92gxYrfmHQFD81J6LdKKRy5bjn4bakb3M4YGbeexMgFFTKPBA3ovCruXUambYgWESgPyS81Jw",
  "key23": "49Qk5K1HhkNyqyqNdFtk7u4eRoZ4RYvSCAkNHzm5YDKKXcb5MQRWFdHLZnjfzMrrxfvrZUvBroyzM1ZyDQDG541M",
  "key24": "wuGLT9HmF2eZKfQMesTYPUy5gxaM9ND7zE4FkEM9n6M2NPmGVeXLgdw3GiGZdNEzQd5MDoCrzoEbE3frkaraUnH",
  "key25": "PgJPkqsPgZYS6Ut74T8YuLRnuA1dEiD4PX3aoBsedhsE2hLPF3CiJpStbNJZu86JtRvyGV11HopCEfx9JyFVEjd",
  "key26": "5WU24d1eibMd8b232agief1GDbRgSnrrMLX1omHzHKUomZqq47boDQL4JVWZWWBJbPDmT6ZcZWvRbsFsCRY54KmU",
  "key27": "34gy3wwPgeaiW4fwFqrMdxoAVSwaCKRDZFcUK6BS9xDqCTY7KUTYkJKJcktzWg9ySzBM4kWurVdZydxuSZoPoRWK",
  "key28": "2X3ZgC2JY54kRynVAPXRQun8Q4TiPrJDrKDzsdDqGqUWjtNK6YCEPTdXR9nxSMttPzTJdX7R35U6Pj7NqQnHk48N",
  "key29": "64SuyRrU2GRhrjaPBtmVmv19g6Kx79XvcojAnb6PqMm4NrK8S5P3n6VKFRYvbq3F3SH9nKmwxWsVDM7ENZVmJaRZ",
  "key30": "4kQDMD7Y9JPgpBRmHnrgN8KHbSmDmZbeaveDcEjxN4UzepQXGUEwv8Pso3b4ArpVuzhGQmcjmY8NnA3VXqQovNXw",
  "key31": "4cf5sVXieRG873T3MMRhJwwmC5sUQGhvZntH8kz7ps7dSD4UC2p1XFQxRgw8YPeAHf9K792FBUbayRdQSx1u6H1",
  "key32": "3UAthMVb2XZx8Ph1qD6EwowbtP5ZfJbFE7gTrqsLJ2xv5jv1qXm25r8XqGhaeFrpsZTu8rYdD5UjwnCUFGgiHCtg",
  "key33": "GcGvDmMLMw3JPTwKW1LbyZZq1HhyXZUMojsZQiKfKJYNpAGdtT6Q2toQkzU4RajUBtknk2sJcHxwgagy4jqZtEv",
  "key34": "NvE6cDUxnK3UsqftZLJ5ViBjd2koNu3JgjuH6RWgxUZiiN25PUoNzuCei6Wyn27zNmw9uDsh3fesfP1D68dYppW",
  "key35": "mz2NZZWH6RSuc9v5Gt4BVrNBYWvNgCbheHygS6wkP2HjQt7FrMbPEzjFPswuXVvNWauqtNHT5cm8Z27n2d12SVc",
  "key36": "5FKVe7VbS6fNnYDjHxJ9ZEXyN1iWYQZTjH2CYrJptQbBLQhVWcitJZTDp9BCrDwEzPn31FW1S6Rs7GA1kmqd9cWh",
  "key37": "3Jr6UuqRxgM6ixmbedhsyiLaavRNUJvwX2iBBr7hUnFAUadVFeFKGwpfTd4uP5BbYy1R26SniKV5tP7sNseyAZ6Y"
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
