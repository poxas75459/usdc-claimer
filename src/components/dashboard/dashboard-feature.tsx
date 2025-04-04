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
    "5ziprfBCeqFnBd667qyz1imrdRCopF9fvdRunZnZzffEPhh2XcaFeYkRiqvkCAuJ2CnqpssjxkV54Z5wwWMYjRQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G5agidfPy3UP4FKXfSdcdVAGnNk4wpzU6nBN8riG3XBa2gnPqVCTzagibJ6m1i7YyBoUVMVS5xhUup4XMVHRJ4Y",
  "key1": "4PWbkHDn9k1Z3ZTJWYKv8N4qxEq64pMeLcc1F2HJGEui3eG5hjmCuhAEcFXrF3RNJX3ACmLKdKRsqxfvQkA9G4m1",
  "key2": "663nh2a5o2qvwV7GPsjBTYqkzBuNbnEMBwiucgLPRsMEsXGfdQd8ADNrXzwkzciVTDdwsdz1jFu1uYERxmENGYoY",
  "key3": "4aP5RKd6RsMo6rPbV2Hej3d1wqjf1V1SmSyLCgLP8zdY9m6FWghWVTDKF3NyFQUApHiV1UCrN7NLTSei5hDGhN3c",
  "key4": "4BzgTvmJRbNZFNm57iCVju9FbApyDFoQtP7FE22AQj1q2jAj58tRCg6jcD8p4esQ2vFgrY5MbAt64ZewmQt913q8",
  "key5": "2NpuhLgJPfzjZReAPAjQoMp9mp1hbSHQDanpdGY2YmQWchcDZiUC4frCFENEvrawdQaW8MGLSUzzmmnBFkMgHb3S",
  "key6": "3JpYj7geLRj4qmLeucL6XaNRAbMByQjJPoF4aCMubGouHRAY3rXHGG8LCEHnhr7LEQrbakA2yjYkSVFCSiaDgQm6",
  "key7": "4JkwrG4UgMyRdBTWyaBEGkqJZGDwWCdArdX2ks616RS1anYG4YMtFitkKt9n9K79TwvgEqCdQkzjvmJ26SJbf7BU",
  "key8": "2LH4Y7jbPrDVCFjLbppoZbEbxVCiqQ6PANrH1mRYMydMGTJ7G9uP44KDCifJMH6dFt6682t6D2NYuExWTKkNKhkP",
  "key9": "2isQpxRVLSMntxzMWhDQuD5tvvMuuxHn9g27TXTSnREqYEqv2XLSp6GRcyYBc4bdvLKBLCtWYosvSt6VjCeUJmy5",
  "key10": "5EwtyKjvaA1p1GaLhcwC1DWvCipDYbrevB5yeYASK8saYPKrUj9TDa5BuWPJ4MDJ4ZgCgXetMqWuN4jFvBxNgh9z",
  "key11": "2soMSkbZbHSAZrXWsKSt3N6ELdAourCFqW2yTnSh3Z32BYLJAZcVNX5BgmYhM1DAvUxrTmFGtHGCvHckXxPi4SvA",
  "key12": "2wA3aYMkqw3ZEkwsvcU2uLxHDR49KSYjvNRVEcJNd7CiwTN1EFCdi3hPL1UH1rQgYJM5D1QVsbDSADzZEKxamMfY",
  "key13": "3FWobgT1akiaTpRGpybJWrG6KnZpyNYbmJ1e1gPKYqMt8MRRuwTRZj6xYF7RYMZV8PRXfETBPPsimBEaP9wZ7SSM",
  "key14": "5S2Mvbg9kvsVHvfJrM5CcfJnC6vLgptgfWJrNrnoHm2yLuXyLwdEaNnyLJ4ABdZ2ggcbLuAaBdJrBK1DN6FkyUx5",
  "key15": "4ZzGbYRtPt1gr8tV8DUWFYmPybi9fAyUwe5ZEJwqtbTGyu6cYLd8UVyDmmmr4hmTin3hpUpyHRLxmHnid5WCkhmk",
  "key16": "2RqVSN3NMuiJqZ66eLWGoSvcXhq7MQ5vegRKQD7xERqA9rxdNyScEULqAtLCzi6Yp1qhPQHrNGi1tZpLAPFyEaV3",
  "key17": "2U4Rjrdaq8tJV32FG3G6RwiiWdKRNrCL9SvWYikztx1G7ymRgrtg6E1ZMG4wXn7U4rswyrfyYxHVmP5eE7FsyRA",
  "key18": "2vwaJkv5GPyqgiSQExRUL5bzT9mhdjjWWJtwp8DbUnLm8bce8D9XKUBTEqBdRepvhoVuKtTWTm67bBp19TjWQGSY",
  "key19": "3ruUUpro5nghuwEhPxCmrpaPdN86Vy3tPGY4kPNHCcQr1JKuzaRvkaPt4om1HSRh9tmtBu7RMncV1jtEDzjMTv24",
  "key20": "sLcvuAj1TEodDxWmomRRQegBJSdGUkGZupQpTk2M4pH6FUQB84kGZM2qMqfk56Hg7aACvruwg3Ar2c2W1J6EhoW",
  "key21": "3WX8dD2j3VF1xJYJSx7fwZWZfnCU22BEyTQMMXi95wKSs2oxGawtAm7tcYfNwF74rL2H5JwT4Wgj4cYUERhxnyXW",
  "key22": "hS8B9rikqh6b23E37pd19XsRhD1C33KBe4745MLBSNqHd3BiGZkzyoujn8crsCHNnUEQ4Dv8Ubpzhz3vcrJqf4c",
  "key23": "4ei5kfXHjStAorppJS3zn7gQ7Nag63LXdaqmEizfXc5PTvCbLXTE2Jk38SGHSGN8dtQ6AZDB3X9SWQXSGq8d1hsE",
  "key24": "2yfAZar65Tu8cnPRXJLYeLcyhZEnG5MNn2HQRuhrg5tUwE4K7LnhjTPBEJW61PFvcg6qxFnANHgsFCWM5mgXMmgZ",
  "key25": "upEe3R8wkAchZkKeoZkkMXuiTC8a97QeRdYTsaKN8X6yTVPZ4FjLaiSBvFbVUwd1xy8nsSod2PnDBgVQ9FyLm38",
  "key26": "3RiA5PeNFPSPfHKt5bn3hDXwAtJFHJNktRu3fa7FD66n53XBrP6Qo2JyqZHHTcncBYQpWfWH2F4gZo2p5NAdZYww",
  "key27": "5LURTei856Khs8FuAkMRnJhvBpKC8b1EorgcRYvLXabyc7rUX3miWp8pMb6Z7aoSdEQodLzJ4Di2SWSsof6G5gLi",
  "key28": "4ojV8MbBRZ3VfKqQ8nxwTFyywWp8WpUgcakpooMD9P7sBxb37HVhc6XBeA89FY8HNS5wSugwkoKyiWnJjBAYwWW7",
  "key29": "3PVgZsN5qHQgYEuApBTjfnQ1qkd8yigqdei1VwFtX2XpvdpqyYr3MgFcSP3Qfww2MToA4i87EstJxm4vbJbdWZcu",
  "key30": "PLnAhoZjKCFgUVEQEdqi75botS1DMLZYET7jmyvZ3UqA4YEcW5YLCSmkUAyUMxRCGwnHdT2WCHBYFXS2SqWKkgP",
  "key31": "4z9yvGUk644Dwv5DUQRMnRPEtZJwEV8GnQVmufqTZmMySoq8StMbGsdtkwtuKyd1TZryCYnACAx2EAD3wfmSvT1d",
  "key32": "k8c2UwJ78ojpUQFcELaA3Ymg3aAA7wHLEwLBnfJVeRUrusTaa6F1ab3yPnS9bBurtWMuquFNF3DHSyTv1TsreWr",
  "key33": "5XTkqZo2W9WKUfqL7qaYtQdscq3jKsKwgBseKPTd8ryXctGRwKpuvHCmLZVF47zyt5bixmLnUZYwL7NKjQdJ6nJC",
  "key34": "52k1KBZdhRcnZseuaZfxZ1jK8RMFRBU1cRdvig1qgqXFaBirQjQm2xT1qzs2r9oK5ZejeMH6MDrep53BPAPiQTbR",
  "key35": "bnmiHHiGy3jpnaNvZAExPcqmVH2wjhiNRZD3A65KDxBQh1xhrjajj2CjAP2V5JfCYVPdV735Y3gdq5FbbkD4y72",
  "key36": "2e4xAz3FrhrDUnmLULnHtbnqhNNrpET8D8rHiQa7HW8qXW1gncKsvJzj1vmCRKXmkmSTcpU2LDSyFiisjwUQcYUj",
  "key37": "3xe4PJZ7QgDPb3hHGJrDj7JBk4Es7G3chDHqFFDVYNTcUvPVGZBn7XqKG6YoyHgCsbYEZGM93LULqRY9M6odSX3w",
  "key38": "2yw67EMYn4nTjhGKnoYyLRFSzUNb9fxPGQd22vsFHrstpLZS9YaUVZtLQiZAGidjY5MmcifNzyPSKUKgk4dJu7ea",
  "key39": "2xYYMhmyuAeb6h8otRP8m2eRsg7fnMoEdpBB1Vp3yjgGVXKz3XAXe8iHYNRf91Z7D9CzPAv2brbYxy5TMJ6FRVVg",
  "key40": "3DHQpyTNJoLryELuCEQV571NrkhdBjDGB5qXNNTLepJgWeJMPy3zc7oUAau6jcaGPPBXB3X9eHRJAYRsZFhzBKKM",
  "key41": "5cRhiATUhrhTXRDVQGabZE4qW1kZRpH5mRYkXnjUSvuoP2wpmvCJ4VLa12FoQTLPc4Nu3SNDhrkv2NTxNEcoRK9o",
  "key42": "4sp8PGUUyhSTjmbpy9UDtjjZhtHxXYtBajtdaMX96sa8wwRM9zHQrP4Kf4v9JK7MceXsYmAKNWF5iab7XUtRGKUN",
  "key43": "3JoVr6cMa67yyXXzyTryYgNHbdpUuQFczwvXVaQk3t4qDcvMznK9QxE9JFRT9agW4YcHb2aabnH8MN5Yf6yLQe5S",
  "key44": "52u3uPeZoW7n6XGfrzFy3PeSVoxeyqQLjCWnEt9Tids8gjV8BUFSxkh29SG2vCJK7E7SY6agRcq9xjnpSsCSKPW3"
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
