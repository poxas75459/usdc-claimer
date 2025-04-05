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
    "PTr3zKyUptzXhL7og12uan6c4V8Nepw2A5tNUqfirkqrooKiWtYTbPEFYzcZij8f3wvfDyN5kWVe9Qmn9dK35Gi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PY23tVx9keJn91DnuFFtgs9w6wCFT4GZgscf5VwqUTCZdh1Ue5awghJUpJP7Cm9x2nTAeT7ajMZABgZGQ89md8q",
  "key1": "3GAdxD4hS3uJB9N7VnibeW54cqZPekcgxA38qh1YH22XtB98cD9mFEArjgu4rpMNsk4J1DG96ejJbNFf3XPC5qc5",
  "key2": "2Mki25Nb14koBgBNbkxRKzpNGB9Ai3kaFGnzcHwwdK1mGE7hkxnQA2AjSGZ2ebyH1eWQQ4qnTayhjiUfe44W9Cp5",
  "key3": "Tkb8CdbgzFoAbqNaHDmWmFQpqkeNsKRtRNVnGJadGZSPtyVVhQHyLkkvrJkVPYajqfXeXQrHKL7k59422DUugiD",
  "key4": "3Q9Hm7hoP9awJfdBoKHY2exz2SX9cgdvZKBbEvmd79cRAjwZbj5oYcSUKWu4TfUUzr2nziGzFvs3KccnWBmUL97x",
  "key5": "3rqtc6C12jDscF6X7yxWpCjNe6umsJ41wUt8JyiQw1XYbJyvHXbFr1VXcPUEK1KfGXtFjtWTP7jojaZNcS8MxbAF",
  "key6": "2xapvD1G7MDBfd28R5QS7GBjNNsSwEqj1sxu4X8ii9NAT98Mb3CfukLEKynaQTtTU1Lf5rRZLjdHpr71q9fUQRdS",
  "key7": "bAdXFMRBARdLzBcmxvD4APFG7H6in5H5NHhsgUc3WvvcNdkr1FPEvQE5U2o16FajaAkDmd8Qfx6WbJ89dNfyKYN",
  "key8": "5WvoNDD6LEUxBSmweXMmydkMCTcAgUUGcibVVX1ETBhEGRzYMggXpkh52Tv2uZccyKBaTp8SUFpPkHPsDDqpF6tB",
  "key9": "Ji2vA7VmFnyAxgmvFVphgxE3pjZHeaK6WAHtj2qrNLfk6qtsdgyGc15mM1uNWzG4M7Nbq3gzhSxgkkXCW4r9egb",
  "key10": "5K5kLhHDhz22SPcBuAHafHNwZmXZLjvF8ds5hxCXftBwBTayYTVSfUAZKFkCbzJNJ9FeQDV94vALZMqndrE1ML1T",
  "key11": "61DwRj9NBb9aZ1eUzDJdE41q3Y4jDsWTs7GVQye7reCWaeVoZgPeatwSPNPUPqfHD3NhEPDbEPcovFvT3pvEeVMC",
  "key12": "2APFqRptVAMEWGzu5UmAgL8FUY4H4TwWJnHa4aZWFH1sLV4kbVGWL1khVcjVgKBeKKQ4ffc6eAxNtL4GStgajKt",
  "key13": "5SzkWUcQfEiNxrhzSWSGGkin3hd55LtV9RNdJhBuZC52Vcm41vpJizTAXq8Um8o8dqTXFeLYuB6YXsnriC4Ggi8D",
  "key14": "4zewVUozhvPaJdJwXfH7XjhsrkrkjycxADwxL4VE6wwhALvn6xKBETFG74GNuRvGU4PPgw9MNotWMfHB5fyCUvL2",
  "key15": "127LJ1wdLwMdsUqNRYEn1AFZ38agFPzbwgfbRYxmTnhndveHWGYbW8JWiFMe2qwBQs3XtgvbY7QLToGWbDc8NF79",
  "key16": "4nQHbAfP4kWHkSb9sNqyJRuuiV5o17VKz1MZbdHCDeNWrK3uHAPrFRVdZXhQ2B8Zv99ZCm94LbnbkG4mcHGhx1kK",
  "key17": "56jMxcfsEvrmezXGF4WSZJuFyawPTMC2q6M3eswnkjV69acZZmet5bYRDCTy384yoEcSVtQ7avs7cjyDUCZGnXYW",
  "key18": "Ubj4CrTV237FiUDcrZFUcBpJ63vVP4X6icvt1T7Bz1iKmT5JUr6jPLrXumvZA7YCrVpG5xK4Bjp3UEC75WLV6dA",
  "key19": "4bjz2e14VQj1DFvpBBukGuehaz4aRoDVc4brRASqSSnuDBSxhanxWtoApzdx5bU6Ffv8A7tSKg13poBozKn6mJdM",
  "key20": "S21dodP9p7fYk8ys3ipFRvaSs8Juuc3anjFqpyu9sL3fUj9PrBHV5PNmW3v7UzxTmsrb2A1SGwzhQACFcci1fNd",
  "key21": "2QrTKeR78zdNLePJBmV7m1hxFagFaajtndHHmS3tU9znAYjoKN2cA4w6X3WmS4DjzWs7Lqe6ucihRLYtU4CoGw18",
  "key22": "3Ba4FbAboaUV6TpESWJqJTMhgnT9nUBRMQ6sgbL7mefvdXJqt3RWTAAnEez6daEJ5kcMue7cVCvvx9SZiDUzuTDU",
  "key23": "2Tw2szZBgtVxnDfDfQS39QWFPMLziDYRrmgpTzgJaBuyTGHE8KNBS3y15ZEnikLJUaYX6KdMMeLco8GKfvXBzTbG",
  "key24": "3W7KVvMfHLwARkxCJufpC9tPgxuY8Bgp8mrAccREBJ8n5mSrQ6NrBF8rjJbN1Qe5B79xsirZMCkDQseft695gVgC",
  "key25": "5NseT8LCABicAsAdVAaGdd1zRgMuCLYJPYFmmRYiFmpwsTukLrAQmBFaFqfiSkQnd8oLnts3BjVo1pVVSmMKfuKM",
  "key26": "4UqnXMhVx9AoKbdWHqMX4WwQzqqNAhM1MZbKRJfgwag4VSxSA71e1wddS2Joa5FJ2KKTHnd9qz9wkybuCTpxmPB8",
  "key27": "7fXizfdbfEQSSE2pRuz8AujMmExSiqskid8fEmWJZDS4V9ZkVdgKRK5bYSx6YVrMav8JjHXp56kRvFhfVYcuhdp",
  "key28": "3yHvuBeK9TjLtoYVs5LyPCfzUxg6vSUpjKQ5k8uuR7caaPqm7gSrwyN6GkKHHGkPCViywmzv7kZP98nGjJ9M33PQ",
  "key29": "3nkCcfdRPycKZ7AxD8RzG7nWHedoci2E1BFCrbsBhQPGwDefGcrpTt2HYWoRGmN7TACCSWx4vmq1igLtrKkaKAS4",
  "key30": "3j128mEZQs929dZdjnS8G1a9mB8kH9MDTPWrbHEuyVCX23BjYDeUCj1rkweTMRDYZVh4h17B6SCGoZzoD7eGGhyq",
  "key31": "64jr5MB9Ao21yiLNDEp95jvHemSKr8EtjRmLJnEAeqTFyArH23ExeX3qTKXYvz2dq4AGouXpirEkbRsSBKhm7P4t",
  "key32": "3nqKCmH1rMiWmuJuEg9qUHtc5Pey3jy2b214WW7PpD8a6f5sXK3Mh1ZEQZskES14ChcH6SFnGVn484g3agPLUw4o",
  "key33": "2bAgnx9Be6sfN8GqWAe6kTq5n6hNBJyTmSV68uN8JsQb6vjRGThpkX5uq6F4uLjCE6E8NqM4dc113jD1GjiuXxb4",
  "key34": "2hUyYeXEbasHXvomW9HLDQgp83msWnrrXDaiqtTi8VM1vnUzQprw5AZxpoQQPEUa9N1nDHqxex1qCEnwn259xN93",
  "key35": "4CL7CekjDAAob4HYemwQenXd3mHepXG3zjeCkFfmWrRicTpxKWDhCak6nL1dRtoWmTx87EhXzcZUmJmVcsqbnC9J"
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
