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
    "3qphibsT6h5p47wBXorBUo9esaDeTavAky7voenRqNZcPA8sxBb2eJTjq34kLV1gvoUZEB7TMCfB2UGVdx7MvZzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66yjQGpPnufb2y9JBy953Djx9sEZvQHeJ9S4JYwy326dPTXYiRkvbKPfHwQJxZBFRWc9wVZrpV3DYCkPKvqyFnJT",
  "key1": "5KQtUDuudZYwTfzwuiCwhSZwWrZWg8roVPGLahvnLoMPJRsK1cmf8HiSAykecLebWRWtdo9nXsUjgUjX3jmynNQ7",
  "key2": "2e19nthQa2E6uN2hmkuNqhA2DLU1HRMbMA2LGLfs6u1Lxwq86oRAfVPvDum7VBX2gNJGM7oAmQD2XYtDE5PPLmiK",
  "key3": "27oPhfQAvHCkHzHBUV6JVJRArQeoCDhHnpVRxfgoBTSLrVkpAVauhYN6fmpSbpPaNLmPFaQczfLvX5CmnEeVMpKL",
  "key4": "2W9d2YXAAFZe58QHDxB2zrQz8MheTEtM4vPJXsaT6PGzyXFVt3jKwABn7EmLN7bgpPQQqHfVUgCH7Ct8pV6HVHNT",
  "key5": "2RL2MbFRi34ceEbaBFpFxGJ2gFc34F8f79pn9FAijdcaoQ3JUthrpGK5XzwWGbCdTgbLjeTNMbyFXrcSVgsqNuGq",
  "key6": "HxW3d5stXVinRYN6v7ays7ziCWWzzZby4kCvzF1fi5yruN2fcm2XJ2sNE5UP4SsUHAghe1A6F8ucRmHRwcShqBR",
  "key7": "3VjeNbczr9RDkWHVghzC1kCgUiaeKmoKz8CpBCyzauHjzsWNB8dy9EEKrR6CxzY8FJzpyD2kVrsjQuooc5gGgAVB",
  "key8": "4PssiW4MaKgdbNtZAPHjXkTjLw3XnSp2kgJD74Z61rnCi2rw8Pq6ov7RHCJBSmCw5WRzRrW5qyWpW6xr534MVxFL",
  "key9": "5ntAaMiqFcpsH2kUgEpmGqtMG4JTER6W4YNp5hmFBGR21ciiRf1JBbF19ZsEx4swejjieFsEvpWR1RB7TxvXAUKs",
  "key10": "2wvkG9Bra3JexW8YRwHCMveAJY72Qw3paYKZsJ1Z9SmMFFfstDVGUaSxiXqtHfd4uMdzmV7FhrPfoxVudwZZVAUW",
  "key11": "4Xd9MS2SsLWpTYaNvM9nfaqNExCpKR25A7h26YkH9UHfUgx8wze8A6tNREGRZHq9kgEoRKkAjf9gmn9r61PfCTiX",
  "key12": "4KPFHz1rhYRua1LWU7oPnNSwC5fyPLUkF1DWdcogjpDd3yH6pjD7PFNu45LzfbEcP7btFkSAMUWZhZmcHm8tzkgu",
  "key13": "nmRkNy6ZyRC7JCB49QHUupM94KPxuCjadA5KUDHH3mX5SbqJMZuCM2DZErutUxz4fupWPMu3rrS81sTWA1eZ47v",
  "key14": "4r1GaHmib2La9ii4Tp3L7RrA8iA3D3GpgaPr5YVZ77Av9dzN9zovZfDAYkTSDz86ZgM7Bd4FKKaFV3aj35V9GgWR",
  "key15": "4m464PC8juvRBDUy4nv9kaoLmyWmzdBLFCdGfmBPBJZG76fR5UmcV2dTH9ZPdQUaXmgyU63WNc7kmtQVd4rWP7T6",
  "key16": "4X6a2KSHSythbg1rUqFaeXcpDBy289RrYHqF9Gf6MCwbR1hEtvcVBBnn34Nq9FFcqS6qSpQTS4dH5geD5G2v3rR6",
  "key17": "xmmm1WRrXYbiq2vFvb2pwD4Ef7oUrRGQmXZtLVWUxUJ7YMtUHuxmoF1JFiKSRzSVYz3VeiwiD2VkyX63bkvqaoT",
  "key18": "5bJVPgny8jjZ85iu5XCp5B8WXNtkYyrNpUFYLnrZ2V1iPEfu3Nw9KRQamzEhsALBoNneC3gY84xEp7cmrrh2SFpC",
  "key19": "4YKxa3G6VPV8qouBABDypDUt3s2bGEDzKtqPUNaHVHWrowo4hBTomeGd2K99w4KdQCFSKrfz9tDX2wpdXZKFFhcP",
  "key20": "JHDVKp1QQmJAgQ2b8ddopSVTfQs5psg6T5mBmsLnDb79Fa78MoUYTBfJgvJYr2sHzoh47Z65DAshcWcTLztB5b4",
  "key21": "5VE7aA2dtm6a2Dzv19pGwveyxx8PBhuSGhd3AELVsRd2FnNKVynR2b9rHv5JUpB22yrpTdmSYXLHBqb4zRKnjtJM",
  "key22": "63ZjRgphM1gZGgdrCrEp6zJWrLKRU869KnaovyJKqmMMR3AqzpMEs1R9GEZ3P4iGXyXVkWvhfCuecrE3ZJ2gmueG",
  "key23": "2bDAM5Z3au7DJ6q6RXbpcLUYBzinAEsPJqx7zrwNymbi775XtFfMnUqW1EpuV1G2485DTFDhgF5Ra3mHWQQQKydN",
  "key24": "2JpsYr1bW4y5vrEQJB71K4PbVdL8m9BFb6LhxtuEdo4mDqNXjBEBGK1whP4RS7UtdmUe9mZnjFpx46kpEsAEN4ji",
  "key25": "3DJdc1GJRhaacs4HzxcGwdrchiX8jv8mNf1cy99V5iEHpyD1Er7uCsY68Y1KT6zCpfoaGA5qNEYAwfqDr7LcPCsc",
  "key26": "52U5fbPk33mVn3EbQ77oxPr8wiVWguSiy113JR6EH1VDEcxyerEME558xUjNJHUKoSpP3s1fhUWM6ovda8Fuapq5",
  "key27": "5x5Eem8Y1n7ZGgRFGSjBkX37JaDYwkh9KXxcJmFzQ6qL9DzTbyynB9zPpdG1kAMV53GpksdpJfqjdgoAdC79knFZ",
  "key28": "4rmWwPUXVmXJaD4DjizyaJkHHa9HSXy8dKyPf33HtkCugrLWVGKfgk94CF56mPmr8xavxq6yyWqw1PxeXWYdxPEV",
  "key29": "4gBXL76v3vpEenBhKbAT2g8kG3v2tVvNScWDUbGdCft8k6pYidojktZJKGZee6qzuk2Fe9umMadSxUZiQQ6B8NiC",
  "key30": "pfzcDCcMuCpA5LdN1RZWJpqFYouF6Tshn9Ap2c8WJrxe8hk8V6xCmyUoKkZozmMXaQq1tTfAs9yyYqqQV2eE2aF",
  "key31": "2PD5kBG9wrW1gzNseaRrKb3vHhSEM6PnvDgCqwFMDpGVjpp48Ezx4TRyk8z7xNWB6GPP1AswdozdxXJyiztMvCZ4",
  "key32": "3gWcw6psiA3Lj8jJsmj3MCh3YRYh7ZuqWZj9fwgPfoW3HdASBXCWZ22PWzDztVjYUVxG2qkXeUY6PQRStLEagYJf",
  "key33": "5dHjAhM1kbCqRoq8aohvurxdkzi2eM6G9rZEYGGkvzJqNrjpprPoWaHfd1F5XUC4Loi4XUaN74JBgz7wwGLi7dDv",
  "key34": "2KvScFDGnTzGUrw5Kt8hzBWkQ8SF4WDFzxCFqVJRQY6KbcAsKcxs91zELroVybpJLMj83kKWUuwKJMKpLDYGi2Fv",
  "key35": "5n4PNFMntqQqGPj37W8CGnT2t6Zv8Dib3Z6fQu5fWqdRXPAy98nEWGbN6TJAaB4dFnoH3kdEW5uyL5ppWS8Q7GQ",
  "key36": "2GwU9x1hMEscEVHaJyMzCDTVxKdxfXtoyP8jBSyEedhpcNW7yNxdf621XwadarEWicMzPyGe55cbZhQZ7TUtWnyT"
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
