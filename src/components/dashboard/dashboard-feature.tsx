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
    "54gbFFCHm8JryFDyd36NosijptkS1782CeG3FHVMHYkgTQzGqQdb3U4sdWUK6ehQJU8KNvgAboUw8V4puphExrx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9HCgjCRhHUzZUk99HU7SmJcdXfwJcw1WCTC8Nt7T8meVWRhLN1Gphbss814W1KiPwFSRcydXAHc4C3mYvRFCda7",
  "key1": "5GUtT3ZhwhP1aXsYBYAVKQSq5g7RQQEJXLbYXxsogF1tcBxyQShV6THKjh5M1cYnXS3LExvwt2FmrEDfpn6ZjPDP",
  "key2": "5ovYdhMkXocTeqU9NuHn2zFuHKzYzPhHLziU5bKnTZsE53XQbfwQhoHfEqpW4t19PBi2wrRYCdzgfbepc3vvBuAY",
  "key3": "5TRP5ed3NEMwXULX7b8h4PfRHTw4xjuxfaHUidGNMieCQut2pJ9Gwe8RAWerABghQvyFALie6Vvp1E1tdM89SVRe",
  "key4": "3NDbcfkJE9p6fokQMQvrazTfbsdykKScUz7UbRQr2DFxaF8a29fsM95ywpvF5gyRNV8nsKsRhLojT7zcMrzpe9CT",
  "key5": "5eAKULzDCveYuo1TD5i21ywrVMn4yBCEi8gqqcL72s9rjCXY4vNgiYzsnpMP2puZ1xJzg3ccuvLNQB8jG5Zpzj4C",
  "key6": "2GojnE1GJw7JJg7yGhmMvyQYnRWUZCAhMxsJFJySLKgEYzKPjfNWvobqWzNFk4TP22iXT3EPJz1bxFAWmpgcC4YG",
  "key7": "3pPhR139dnAibhQmjXHSSkPuGow1iu6mUgSjxZ6MaLuZ7kVAJDrwomaMaDBfJghSc6w6K9C9hezoWfqcgxakzsNA",
  "key8": "3A7JVsd8Hi4qKs1ZRpxSE7yd2LQrTANK94eYNgNeQ7i2gYQb1aVPcHFvNL4p3uwrpE7MZcmDY62usvLGhMLyWh84",
  "key9": "BtajkgQLD7X29kMAT5Bp4eXXKE7fbxdw6bwAAVPx25UDd2odMtzGD3DgUNG8K2bCunBGE3xVmGG7FXU2sz8rhLm",
  "key10": "Xx3DBxBbjq8pwRU1YbRuKPVkmiXZjjzKEcBC9QWoJoMJCjCZM8cQGdb2C7tgfBdiUG55AFZYr9fmqQqpt8wrTxq",
  "key11": "2dyrcsdQhsbMdfHmuPBF9hARRZYva76qPuC3xBZwp8BXtKdYMjUZNqMkEDYjYfwmGF7gtxbG39rdAiNDuWPYLz9W",
  "key12": "4U9yg36zHvbv5BQwnqhD8XfhTp6rGzzgBZNinG62ddr8iF5PrepFa5df2ycH5FigQ3GgQuvxhAvdaGQNmrHVQVsJ",
  "key13": "2xSgJdCqX4YBAQadcVehKgzUytn5dHJDCsdyHcv7AL5ZbG2jQHfp1uK1XaFgdAAwp3X3R2yDm4NmuNGZ38tycJ2A",
  "key14": "5DD4CE3NDKk6PEbPGAaxQkHt4J2F3pyJ3Ma9JbgYgddts9xSQtXwo36bsvzLJGP84bwBv3mue7aANYT4ivEJibEk",
  "key15": "4anjqhbYHs1WMR7fFHRirYSMxFuTxQigmeJAQPEmDVRdEuReR7z84zZyKdPSmPt35pmHWgs5iG99s47FS77eStWS",
  "key16": "tsTJt8VYjAemZgx9imKjPxnFGaYg2wKB39dRpbnAkxUNZyAsoiU1ky8nEehgXtJTThySc8Q3pLZEWWkdEHS8GDB",
  "key17": "3ngPBtSajXUcZcHcsYoFFBDXdhXoy6p4SH3dfuZj2vA4dzGG6wtuHTFJTvemmvnDtck7aQNwv8S4uXHC1FiyjDT3",
  "key18": "2EoSpe5fx5Y4ija7osXwr6kV1Z9p6WhoabG8fddRRx3x9V8Jqjq12uuDy3CLE6tC1xJ1wAtfs4Ee5BrZBpks2JoT",
  "key19": "NPkATuvkcTvAVtjrVFJawrz3TLqhYJcEz4djXkdngFVXSV24yZkYDLvh4VHbA4Z2R7ZreByVtDv6h8DDhSbDfR7",
  "key20": "4oHi91KMAMuPLP4ma4GC5hHedxYcmUv9Pj5TmfG2uLSrdTt8VgRTff3d5gjUUKdmjLKsKdYKxzvfRHcNgRLrJuAr",
  "key21": "5PZHgjec2KUJr5aZyc1hqJ3bF2fAVxBoLqwQkvZjhuLpzaAc3fXBoo8NE2ULmS6gzNwJGdBdA4FovTzrLXExPkd1",
  "key22": "5ujm9QxNgEAxqjkXf3mBnU8gwR6BvwYo6mbcHJuWAupZF1JLpz7ASj5W5sYJWtxLnijJ68Tm1Dcuv4CntH9SE9Xk",
  "key23": "4bA1y8Tzs4wCmv49hFBaViu11yR1tZNoR7JD1VZfSrhEF4Ea24crxjvDiMj4N6FM9aqGCxacwTgat8hA2hMPgKhT",
  "key24": "5eThtsPoGP1t8oRGttzuxJLNQwSdnZb2E33gCdCrxsoxPSWFyDukP9xAariQcuGdCaLcuewDyrpV1hjV8ZcE8N7k",
  "key25": "5uL529JSVeWh9tF6midjzcitHSpJNQEvVKm5dB9EvLQ9tMrFPfkphuvSDgvE3EwbJHDAN4P8Lg7YQ593YSxyEsYn",
  "key26": "BN9DPK3myKvMd4jTmAHSET7aGVRV9UaNxr8yiiSksBPLA6XB7yeeQUdvpUYbsuZ1MEdDCYZ3jXNMxSdGuRQo8VR",
  "key27": "4dtaybSivZMduGn1HwZCCM3dGwgreCHo5nkoxAeLk7q4rm9Q9zF8fYvcR3wHZFvEhtV3gAR1WtPin5DhUHCzBnHA",
  "key28": "SQD4qGWCi3sqGYGDdsveWbRNV54dQf7ix6ThVXsjf5E3SNEwu4LUntWDjz21MSKPtGgVrpSJaDxgLYG3uQLLHhs",
  "key29": "GJDoAEc4Xk68NvdT3ysntezr52vpVg6GVW4qo1S9MZDKzxqG5huTY5fXekLN7tF7eDJMmXPZDXNp2TE55D29fZ7",
  "key30": "2VF3LhBG5qVWQZqRNXyFEhs9yKXhPMA2epRdjhtNWTcYfeeV7yNBDtRzjGtrqThfv7McERwqjuxvNt8dQaoSKoPr",
  "key31": "4Y87WmTUWRSuWBYAL6VrSVAY3W3WRfeoEjqrPLa9UKqLGvp619i2zUuH8fVJjoJLcN3LXcT7WjZg6JKchWaUnvXR",
  "key32": "2Ry12Ysr2SxeW1FuGMeMxgUfU9MM2r6gwAVpAfFU5pgP2m4MFNfRsRTaTvdoumNewVnMbmhrNBqdZ6gxLvprMZsh",
  "key33": "398Xw1iWQvmgmQsgpQzHgg7y7BLHd6HPSwzU4vFAb97G3dR8q1MEqckm2g11v37wwcXFzQMSKcjjsoj6k3uXGA3Q"
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
