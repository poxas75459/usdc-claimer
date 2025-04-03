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
    "3md7iYCnxdw8tXDKKuw2DnRhNFkqG5qbze2VZ5wCiWdhYdrBxrTP6PWkNbDFwCHZKpEsKPGS9vJzNvWvpiuvYTNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L6YHZiSWPU1YYMuU3d4dQKAQeZX1A6Z23tmLoJshtkewUF4b1wBXPqeTMnoVaJm4iX6xyh8Ebbm4sdCEyPWfaDz",
  "key1": "2rbLRNd2GUuk4rwSP6cTtYzr8ywcrT9r6GYM3nzWvgF2mnziN8vJLA8H9wgi2qziRdBzKvKA9Zn6qK7UvR4EZwDa",
  "key2": "2fCSEcFE1EEh6aKvQ38Ckw12QpcRKKh4VUacxn17gzYGzobdwg2VDGGdUw53ykUd9QP6X4VfKDVUHtXmB59BP4Zf",
  "key3": "5fxrjPYSqekTa3L5NrgVdkm8UZTNNZrbf9ejjZxyf5RpTWCSTP1NKFLobDn5Vj2mnnuezYQtyznfXx8dM7XQkp7x",
  "key4": "hUWbQaZAAWtnpSaFKM78X7g8iFETQEwKyqpws7sdjLiwbSTqak8EZcercx65sXaRkvQyC8TQw3MxqGJrCieAQi3",
  "key5": "5PBGJ9eKjnSkDowTjxxtvti91i3Bu3zcJQEzHPhmH1ufBybYBtmFWNH18HVMk6QyHr8xFLZrMWDbaN9c72mSaoAc",
  "key6": "4aPp3Afwss9pErnz3QoQUopxgzcLB2x2DE2MrUDJQ6VCTEucgAaZqrU5fpzoSytAAHi742h5ombAWaCiTcMAk1KH",
  "key7": "gmm8cf75C2NcYEiG3uy3bmiqjKb5pQfaSQjywn6JZwLYJvYZuxWAt1B3qmJjyHK8FFkVffS1EPgiJkM37qz8uTu",
  "key8": "4uMWP1qQPe5xxoXp4jkmcKGchW6ZE5C9eK9F5gAbK7zkLHRFdMnyr4pFSjtx4G6bJMb7TnSidMGkdvXscV4auWkh",
  "key9": "XPAnYKfWfuMQnUTyWrgBNjJYN8mSygW97WFmmqxn9e4zasWm7kBXVBvz151SbJKRgJLq2MpsWX5FrsuL1RTqEqF",
  "key10": "FcWLP8PohcaqecycfWHrtvek1oDVwtDcGeDPtfaTJEkSnPBJUZarAty4Hn33xiKz2TWKsRUuFvnw4h4tzi8PNhW",
  "key11": "xkrn1z7hsVuSVd9RAc6LkyyyewM6ZpnnxmUFTgE3JPskNLHwu1dbJ2MrkEPoHXTRqX6Skx6wGJfNAwfZazqzAuV",
  "key12": "2EWAP9RT3nc2pFgV5UeU9qhRCrxoUccpjupC4Jwh34iwezdFpDoBho3HXmjCDTmk7BQ8PU3b64HTvNJQ38DA8evj",
  "key13": "4WcDSfMRghKjRg9ZPXvyii9sevKRC8P4DDc33a7fjMuYGrUrVxZ5Fk3bdRjAU1e99hoGbvmnVewNvYGVQ7HS7Urk",
  "key14": "2bAHZ55n321xLWnUE31bzagpFFSuy3A7KkRsAJXb9KgLBsMVfbY692JXKmUd6FxkuYsWVAZ9zqa71wtueaVGZB33",
  "key15": "3wL834cCsX2iwFXQhLAYc55b5pHSmRBRoYvWroqbr2ooDeYUGc8iRtXGcZHtg4KqKQ15AFRyCseLhzaiFMZ8xZ3R",
  "key16": "65zRmsC5tVpxGGMqkdUZ2dfTAKivCAVRY8AwbXAYnbwdxFRC5y9CDaE3jj7CpvHmjF1d95Qd6MHAeXDNtrnct787",
  "key17": "4QvveCszcV9d6LHPnZBp9MUFvmd95LrexcJfsh8D5qi99ko6qZxxqmFm36U1vhWXRqTc5t6ih1RZu1nDoSJJHY6a",
  "key18": "n9wYznSoYLhrXDmVCneuTivejvZ8DLZcZnSvRLBDMJBwkToA57TYWcmttdNKcLAdKusXfvCEqmLiMQn7MKPP9SM",
  "key19": "4SzpW5s7FLvYDoM9MHPuQX825tYC6uZdN9Ba7w9g757xJ9Tg9wrQ7EWbRQhazZmWQJcven7YuvCjX8oX7YvSbsXo",
  "key20": "5dA2qSeAgxsu5jYGUhuTp5TL4KAuByTX1uwGNrWpnWKchTf7vpVNDzLivWtwgVukpTyW9TUHBDBGtV6Z6GGsVDk2",
  "key21": "BcQWcGkKn3gdEHrKiN74Thc3gN1v1CetHpcdtg6SixQSCyYB8iPh7dPSYGyNRtBDtoBFFsauc9VYwAqWgfMcdaq",
  "key22": "3ZV8cmtny1WW1NJ6ApSeWyDasauQq8BXzEhvTzAi1frSytAj4mKvRgUixKe6LwWHQTPnBoz4FTZFjKgRqb6RNxKG",
  "key23": "dNXjhMA3g2aDHRTv4e5VJEa7JxiBFUy8SCdcLAG2fjtmPUYzT5QzgihXq5vs6DV5m4De7x2WFXzTJGsah469xVP",
  "key24": "51kDBxGcznzubj8x1nhFEwGpkiRHgRSNvneg77VGVEJN1wjgknA2o8mrjXsUwaj4s2QgAxDA5bX2cLNUwE8jeD4m",
  "key25": "57CXM7BKCdUXnE57yNC5dwYBgUF4aQAcrsosyaC8dgywFa8pBXkQ8w1QN7AHjjkC2rJ7gB7JG2pmdqNiK8t5sQc5",
  "key26": "4LB35yqKDhqrD9eEDdScPV3gUCd8kh45RFFCrMCZNmhdGFavDTJBhvM5cn6wVPtoQ5yjYzL8cJrNGn7obkeCJuGv",
  "key27": "3Xo24FUotwrwGC9nLyWyBktpybG2TWVatQNnP6BQ9QWXCv5GvtU6onSgGkpRAkT9wQ8JogBMyP79MbWMSp4qSmD2",
  "key28": "CmwghNQU2DrvG4ViTYa4DmzLuWxttFAZDJPRCKQtLmxPe7uBcGSPNK8fEAuBpmag8EpaYaNNTb4LNFWFS2uy86g",
  "key29": "5YCVmPeqKi7BB73Hhvb5sw6FvGMKBAkjFAj1ww9dJ3vgCLrqy4Ly3goRfhJVRLfzK1rR5XtqFVFYm9v2PHTJKcuf",
  "key30": "XrnFH9KL2GCWQyxeMbAD16XQywKYr935hdFUu8sCiDzh7KDUF3MZ8kU6YqiaDVSEBtKm4oevXTZWKNrRKE9vaQh",
  "key31": "74exHWn9yniqFiLRYx2wACpG7VuBXkb1VNbc11159fPLMH7sd3HfP3JoSnnsXhWPZso2p8rZG9U97sxHjpfg9j5",
  "key32": "3fiYVvqZbxoNw6maNVEKTeTirbkdU9FrpjvLniG53CUp45ACXW5UMGaMequced4FswWbJirmy4PGux4kfQJmjP5h",
  "key33": "275FV359sTMmSUEkb4ErEnHF9uDJHBiseuWyV7NC4pkrq6WDeZve9gWnGVMCLtioYUTW8Va5JBK2iuAPT2tgBhGr",
  "key34": "CLgtp5cftzjHo2XirFhuE2nTRCcs764TxdTKfqDzaasWcx92tacJWVD4v5kKBTEtwsmFeYVMTNs7Jz9FxtNe59W",
  "key35": "48MpdEzUdcMwJHiVp7oJR2Bv61BfxjsDTpnSbjeU6NPj9ddurev6kX2ko79YLKqn4iYpQu6Lf3kLDmb2CCKVBY7L",
  "key36": "53tA16pU28wJXXB4iC2k1xDrzbeprFV5vhqfBPLM7P35oS6rBiXU4ovXZyMqhfp3tatmojm3oAxAJA23H3yintry",
  "key37": "2PSUU4tbrRYzfZyGxg2LUJZUoi2DTJ7Mrby9933uCxSuzctraUBPpwjBuWkaYiorcpNgmhAEUbx7CxV81WTPLEwW",
  "key38": "3p1nkqn6Ff81B4rftntY2majqB2g6N41srFPtkbHjEQQShdN1fJzjqSSXX1GJomhfTW5Pg2FWXFiuopnar4aJPD7",
  "key39": "2Zc4B2U1YoCLELur4kz2z795E6e2xjRc3H98AY935Xhc52pNrJYUPFE3X75sQfp61tS9h5xJqZzLcHYBuQ4U54Y7",
  "key40": "5wH7erAYxGNggPayhp8Dd5j2KrNVhVSUAFu1XV757vJyLynLuoA5oHU5XG3f2W4WQ38S5trVueFJpVFkg3TgagXK",
  "key41": "2dvButwe9fM1xtxp9juxPs3LFxRPshmcqzh9Bm99cqm89vHqovbUtjPpzQ1gtQpGvrp24tQGtHA3RimyJhY245zX",
  "key42": "574D2SjKjToDYSiRXBh16yq9pvuZnm3FSYkt7afnuSUswr86QSQpynQF5GSyWCVGDQep8PFdzGEL46q4xSqcQyDu",
  "key43": "5AQmhzQivFitNvzDxtHimjNt4PeDBy6LqCZJ8uGbRkKKXKzwNSCBWB2p7o3HGosRqajPUxCXpHXvyBVKLZn2N7cQ",
  "key44": "2ri3rUNQU6vrfpDQiuW6Cu2nUfiu8MTWNx8WrPZbtU2kpx16RNwB1u854ekkGsnYh2niDGjehu9bh9mMpZ3jqcdA",
  "key45": "3Vey5f7agxQXCamevHUXDZYErzQWGnYxSNup6QK5BaMoFBwQzyvqfHuo1VJ6kfE7UkptQfXfPsg7Z4beqEJ6SWTg",
  "key46": "5tUQixDPicKZe8zUNQ5o6uqCzxafpi4zo3q3UVd1vttU432pQ1qs5WLMW5y1hWedgdQmLEFPeMyBGfTE8Temgqms"
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
