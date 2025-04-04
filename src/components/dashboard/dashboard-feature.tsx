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
    "43oyjVAGD5FPd3c1FTWpjT4M5TQYTugKdwsci8AA3W1T8Er9pg7HckkeFss8RAaJpgLrusWLrNVFnYhJBBE9FPMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "662sPW6xqaRW7E7fGTAtg5zniaUN4PqUvQZ9tgGsrPeKyHgrdyefn1W5XaTuYtT8cyWYYXWcc1KbXV9iba5TrfR9",
  "key1": "ejGh81APD6wkiuPjsApDnNkEm91wQn6ZiFYtLJMw3fvEmJDj2nSrLNTwB1g1qwdxPNSF2y1ugmHcZDbyYe9gidp",
  "key2": "3GoFM1t87T21LrvAfjLKQwxUx3G3Yih24BEdeCqkdLaMbqBo4NoB6nV3vAHQtwP8Q3fMG3xq291APuE25p3pSsBb",
  "key3": "33vAJ6NufvRDsFCW3CL6X9DunpzA5xe4jt55D8wE8F5Ztjy2qpmo9sateo3XcyAieKQsSN7m1kZ7Tz29MBThA9VQ",
  "key4": "q2KxhCeKyLoKsQNGi6c469NJt7G1m7KA2b5sHxpyCnD446TGdagyZnYh3xwLb9psKMxuLDVBVJHWurBJGw681Vx",
  "key5": "49nDEWPZpGLnD63t1jn1CtcLHtytqwN3UJ123sHRCXi55KqrebhQa5VZ7udEZ8hCy1DePkSf1vyLfR3BcEmbZwvR",
  "key6": "Gxk13hckfuhdubE6QukhtwNSYUngE7sZhhmKEmmKE9wHfLg1gXGQLSx1ma4kFFPAe9WDjsQkG99HPuErzyPSYGf",
  "key7": "25Vehnto9VXNG7mgR9eUwKfwamsm3sUzPjGZEMabDEqRKpxRPYtzAnBMexZnW4fDZmDwU37bnHBW2YUZtnx7ALUz",
  "key8": "3Br5xu1jgMpRLD2NjNVQQk51C6biTGe1HmRj5UpJxM1E2vxwFsg58pc4C2V5sRiHmQJBCGZQqRCAZXJNfuu7ar9P",
  "key9": "GDFAfiqYoVG3SQMWVPSrdxdeGV96Hb8H9Cjuqt99Qq8m4T3gdTTD7VEhJE9ExVaiKswxSZXnnFP3YwkuBSLvmzw",
  "key10": "8xmVYpPHeryhNSKdxNPk6B2Q4zX2D8CtP2eGaMCUPej1wmP9AKuYhQaV53EVmu8VwmcJr4bQDufRkmVrDE3wB6q",
  "key11": "52HZNGAvqUN9kzgcDTYTkw1xXHFsKaRcne4fL4g6CKQe4LNfrh84HtwexU3UGXHoPGyLfCLkWRpB46P1ZF83ad4A",
  "key12": "5nyCUkwamSLXSGNwaN9pevDHZQXbENciaaxHHpmg6ShJAwDrzBjGtcaruGjZ9m8XVDBn7QzWZtktzN9vZnv6eyPm",
  "key13": "4k1oitfDH8Y2HLsAWzpQTRpDTzu76ykcACV62k7tM4s15JSnBFdez4U8r1TckB7gXhLRz7ZJvJyrW34HLDWock4x",
  "key14": "2SGRZQpcbhEJsphv5rG9MJQjQ73jWuNkmbFfPdqsUcexDGw1z5z735hhydMYwp7oeK9ugWtphUhhKCqgyqpaTfv9",
  "key15": "5ANT9MYE3F5rHQrRxEwtSXKEy2RMQUsb8788mdTnpeMFd4ETkuwrijBs5Wrp7qZZiwTrMH3kHM1LZexNDLNbBPLK",
  "key16": "9ZYumC9GVJDPZrTV4hxiqCgxPYarQzWFBQHmkHfBuqf1enP4FVj55SexhaqbvUEHj9mDP1XHBq5y3NYhsesy3kr",
  "key17": "5CBwnRyWicToteAEcAib5izyqqcbyoxgcgeSyymQDJabjtVRYPTtyx2ZGBJmgD9PnPkPnSAvDa8gKH6Mz7aZWPzN",
  "key18": "5jR8U3MhHj3giKpkYkkby4cyyufexf5nLT4oh2yU5Ch8UDL4jPPBrFNUszDa1doVyJhufQGn2o8C3Zxugu5xuWht",
  "key19": "3AaJkNcXAvGyD4SyXyASwBU8nUYei61rXXAqLKn4b5SQffKYKDwRTAeQFtq3vcUu4aVUkFqywPtqHfvwpimJzpD9",
  "key20": "SyWZyaCPc8h8V7JMvf3LW3eEpJbiX4MD6Bbt1iDPcsYbjvubqMQvVfiRdNu1eDdZBJsBA7Jm2F57cvjrfeay9VG",
  "key21": "4hxwDXjnq5ZiGSf4RBks5d6AtiezYtvhKcBCPM2uNUBPTSU8E2PykQ3J1Lsdkm2UvAEHPdvfVPeBe55Ru6a6zfMP",
  "key22": "3NbRB9C1VFbwHvfuND7m9haUJH9aWR7uDbh6tmFqs9Le2S1JFoKND7PhhNQofkshfCpVHnvepyg9emEj4HQzMDe5",
  "key23": "obP7EKu637PkXcPjmZ3eg23ZDjFjm8EsAC9wd5wvvxJU7wUvff8hoeVQErN3pEUnTWGxR4czzS1H1DXK9AN6mAr",
  "key24": "8Jj1FohFTH1Fp27XYVMXLCLHkWuMe7mWG5V987FqrPRiQmyH7YLveZrhwGRnkcJEsV7QFYhAmffYaoxVQJWRYSw",
  "key25": "5GQqXnV7CkXdS9XN4cNRibzJPzBbkMV9UKgApMxiawFfJXXyMxCgAJrXa16SLgiN4QxhHmiXfaUstvLqYUPB9Bcd",
  "key26": "3QivTKsN6iPEWUV9zNjmRTSN8eEB78zMTMThubFvLgTyZ4XaiTEq4P92r4mSZhnXasYX3BExBi842NzuvQrmYPaQ",
  "key27": "3yjiiN2tbSjLGCFBJzUfyRDFziMqyqYPa3NyTMrVWJ9BcsxxxGdNk4vEGtLocpNe2Vz9hAos2sXssBg6zJFqg7td",
  "key28": "3h3RRudxZCUHcg681qX4HyLoccn5KdU89dW7Zica4PH7LR6SVrehPUVL9mGYXKwvfbCEJR4GRrNzjqRutLC5dFxC",
  "key29": "LuwndDgniJ7LM9RaLPeHtZM23H5xDjZ5TxsH4ss4CvuRV3f3mZsFEHE7Bjo3M5bbVXFH2tBYbNwaUsiYoYL3V1a",
  "key30": "4kmnGZcnBux5ersnbzgDv13oHvtbnY2GziZvqGq3jFaStos69sh7aLEC7vX6yYpnRfT1SmuavfRoaaCX5rtf7uf5",
  "key31": "Uo7E3GBf42CyQH5DHCBxtGYtrXuUEpYyh7ysokY4gWm2uHDJ9NSv7GnKkoAXwmL92yboo7bueMpk9WdYrky7Gid",
  "key32": "8USmc61S6RCJoPwhygW5U5MozcFqMgd32XviJ9R6nFZG4313fY51QfzZKkX7MSKTsZEmZaM2sooXt3SFKNgP8m9",
  "key33": "2yAcm7ZrFAmdRWFN6zmJRRpTGVaJbLvDThendTSG2rd6YNqAze8MmsYp4TrupQGogUiFiYtm3LMMLnXAgkayjuGr",
  "key34": "4fXqcrT5Vu7gxzSXWKT23xGXnPydm97ofTvD2HSLdRzWfEbTNMMXJSTZnf8jucq9rR6nvPfYXpK4peYirtKX1LEP"
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
