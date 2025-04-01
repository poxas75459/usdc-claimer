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
    "5QmdtFhAXJvWi65V2pseATX3kCxWWSnQDzF4dYXfaEVN56sg96ZoH8fGas2JcEQVHQRowNEohmSccqXYxN5bcg2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xbRqKH61fNB6ZuXU9CpA3Nm7RtXYT84cbyc5Lc3BmRhBY7SxKYBFfRQ4oXur2bvwsYseYLGqKXKQNoNW33dFW6E",
  "key1": "4wQcEghFi58zT6WmsGLpy2ypJsYmC3K8684C1qXQrhhN5gm1GJZhGivsUAJgnygBUcJWBHQGCpKSr4QghMh7vRWZ",
  "key2": "4NiWd8sy5nDB6P2c6dwUcuZeS89BhMR4TQ4weCUuwovWvieVBvbHaTzFN8JhBJBMZwVFjXBZaTWTuFHUFw16e8EL",
  "key3": "2mGPMu83RWCSyve63MNbb6twKrrdPmyQ15xkQcSa5oxox44r1caEDWCxcQuHcyVTM4DsyzU2rsRi8uGfUJXDdWBA",
  "key4": "52qDhRmnd3vALTsFQcCpZvjg2iwtyWCXYxWuB4trbd2Sx6yf2oaz1KCW8riPHa3Lw5QJaC5Q2a8WuEKSYUjAgLUY",
  "key5": "4qb1Lq5wtsCn4KNRpeFdjfCL7x6o97c5UNSgWyJxuPC3fdpkNCLLzNhBqJSgfR1X8bYbG8qbcyHV97BUzw85Syc3",
  "key6": "4JiWx3tvz1UY5UD4BtrUjd6p4ALFpvWMWqe7cXsskAeQng1t6KUeWTAyreyPQgwrhWJpCqFKfjBaRHpjssCMKkGj",
  "key7": "54eYMb3JnrjcAUwcx3C4MibkPKftyRTY8J1Txqji8oPy14FWnSdDePu2UqMhPqW6mqcmi3NMJtjEBkMpRUTCYdiF",
  "key8": "22qNfbVXJwsDGfGKdn1WVP7XZh5fHj35awpVJ3jGSe5RX35YyRbiB82pUXtAWHhwe4eQ3eqvshb83csGAVGLCMso",
  "key9": "vRf9BxKEQ17aDVcZ6QXoHRaBcrMxf36rW7CgYT73BU6tjYwFU86W3vEZUWY9WCk4cq3XWUoG39xLtUCfZvYE5wJ",
  "key10": "3rswkNxnxnztMsphN57RxrWXn5fDLqia4iGc6YrLiL9ZCYoRihUsmK1YCbWkXHYiB3RbtMBkqmHRA66ab4Lw1kfc",
  "key11": "67oy1rTHBvaZdwVSFtATWFqdmQLek46EProVGGNdQ1MvKzoWsf18isSs6wmFSsPyCfDGAYBBWe2bpvusfPEtoF6g",
  "key12": "zoMr78YsAzJESkp8RApjGN5yeWkzqQo5szQugWW2xmRbC7Ki8DiTzSPkhVb6ZFzFCqf8gvUAdjKfffq27WHw4Ri",
  "key13": "MzZyWAPu8hfsyNV8Qt4He9LgdEULgrC2iMDc5nkrBUqVb6HqXXRYzkciP1Dbv69hk794g75Cf53XcC81SWf61aB",
  "key14": "y1sBK1ovmUUEoyyz9CcwrQ6qsT8XxaSnSy18zZhvcH3G5GKRzxzS9E5bMP9D4x35TPGXRLHVJtsXYZHcQ1kajzV",
  "key15": "4crnhjsLtDSD3PfQqBxLKMgf6h2FpvYkvA8RKEqMfopbb3rWFqBvhsVrqou1p7uYaeHN6PkZVAyaeyz5xTsEWApg",
  "key16": "4cmf4eYynab2xBBqPrFdZhKYoY3HQsPviGCB5HmaeF1oDEjBBgAhfhWgiHghuZapzBJsvMEv5Q1dkSjPSmzofYfp",
  "key17": "4JXUdfd6PAGFm9wVWFiDxFrwYiP65XoVDRK3yEAMWt4K49YWYy71Tvs4uoeWQFYvjtBSwc7qrxzSyEyaWCXuFNMK",
  "key18": "qCefYT1D5nzusvWPYLbdc6M9i8jmS8jgHY5UXUDdLLftoHwmZCT1Td1LvinXyhP2pij4yfLiJxAq5LkCsNB82B4",
  "key19": "4oRBwSbegnPeJ4GPugnM8oYRMzG43T6TjfJi54uYedAJzqr2ZkTD2C2xW4N56u9zNqFWusfCGWqoYpp6iLoyDMwc",
  "key20": "coYzoPgQwJQX8qGW8LMDNujjF2hXFtt1sKTj1HGmTLuekVnb5Q8YZu95rBjZCWuxwVkiAqdAT1drbjzPbtNMNqX",
  "key21": "4ftZdQcpYPgiJmx7AnVDW4pLFYR7XVH7dKy5EF98r6skuAZ95WDmrw6BJyb9x2D6DNGiuuAMHsA13jvitSoouxiS",
  "key22": "WrzynVoKyQfvRYmqAx6fnDkxaixrDBM2ozYVT3XPBFFPYUJnVpGCWigB2HB7ifqCXvodGq3vmik9ZJZcXkRs8Uy",
  "key23": "2oPoDcvxaXrGxYTDhozNK6wuWz8yYgU4AxLqJgcs1Zh9e92cpWdMSoocA9nfhfTVdHwsBkwNqGFDzpLhboUvvNJS",
  "key24": "fZQE4s7JrJfEFDsTQjcaAaRzN9Te35XppTLuxSXxoAysSWw7HN2JfQXYkRyxqD1Es6SjsKCwGAgxeU8PgTBUEwa",
  "key25": "5EKFKKcGwDppRmLGL8kzRc8p9gjQCxiDFJ8CcjcSpBynVSbRLbzxxhuy18XTTKXenoyhdNtGhVtaQEtjLC9d4N4o",
  "key26": "5djxzG8kkC71a7VJuWHaHe9X7DbRvs54htbanr1Fb6cwkMgwrF62xsR13X92je2Z4RVeELd4dAuLxU4H1g6GmEvA",
  "key27": "w2a2PXsM5zQqUQNDvAVKsQCRDYYYuQG5cChwo4uLkRqNPJz4GGs9F27tE2SSN1ZfFBNuEnZSKML8MF5AKGq6HLH",
  "key28": "2oMKx6h3K3Z7W1kcUxHq4syJSonNZ7rbHDqjMbZXg9r46aBj5jACUD32TrVo1wXvUzinoRfFhWbibbXZGeUe2g5H",
  "key29": "67Y7DrqnLXj4digHtK3N9hJ52YofNqkEBAqGuPMw2kMGHrJUk1LHTQNmnqA48t2NpCmRJZvD1FkJmHN94qSWz1Pu",
  "key30": "3z9SbcTAXDdYyR2eu7mZ2zzZw733ekB36u5566rmYsWhRZA4jic9MMFKS49pmwrSpttutQw344AYu9J1D8Es24rZ",
  "key31": "5Dpgxf7HyxcQtZoYWVg3DBzfC5UwSUpCiTjHESeE8hm5KJ3GpgNSVogigG7nm7aDjtC5EwAJ4sxrngWfLLkDkkqu",
  "key32": "3EXvvGvB9NWqFFEzAqk7SUdEhYS4138CE7ZXPHEbdcF9PbymeMo9iUPhNaG5fCxu5biuW9t2ErNNhebQ4gXtiW97"
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
