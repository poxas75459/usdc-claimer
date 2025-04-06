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
    "Z9nPs9E4RKAJyK3g9iKZxmxEMzG1qnq1QMrAiNtgsH27P1qkhZJWEAzz3t8wZhJ8Xdp8xRz6RTgUyrAJAkTEBFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ao6PNFEeujQcNb2EPhSb9TfnCi6oB66K73GwWbsoKdgXPrpWChxx65U8gvmk42bxhgXkVhzj7jhFTFKqXAdZbvv",
  "key1": "ZunygeRAhKAHZki3iBG2n7BKubpTPkd1GjKWDZU7imfQQkKLnXYUTsndL1tPu7fEHjoYt5GiUHptbNtUpRtFxz2",
  "key2": "3BDJCLKEAWfzaQKPxPB71dpQShnAibPmJJy6rJZd71iTjnPGkQGjzkRYcePYxJrcQht7LLBDgUwVPFEJ1yhNGoAS",
  "key3": "X8g5JCPycsfiFkk9n95iRgYAB7Y6AwAgnydQnYYpCpbnYqbBUcF8wWMESvi4VRWxaFDBrbTn8M8XFwNzHQ5ceJN",
  "key4": "5EPrnhxowdLX54yh8fbggYVVVY8euMpShHYXqsvBDqSifzfsNBfQqri9F3e4o7F9yWPDxVsPB9158CZ9hHhKVsJC",
  "key5": "4Q44HYznkx5Wh2aoUv3TgqLmSXctGM56kqbSnx7xeHXDqmuE969C4apJUjrKKiudhL3gToUav3L8wEDdmCvp6fm9",
  "key6": "3embwskzChVxZ4QL6HhEEzwBnYJbe1EF5WemPBj6xaGQekPNasR4fKjUZ41HAdT3qCe5xk9B1h8SxNVMh7Mnsdk5",
  "key7": "zf5Gr1hv7YEqv23jmgoG8FUQrgEvCJANcrgvYHQ6ix5DbfMSkgyBS2GhNYq5KuB8RbbXd9AD4UsSwDddWgzu6HF",
  "key8": "5NrN2LUFSUqTnVtFM4pc2ZPGujftJv5jY3j3wbhv2fTTyWgHvvQgVqGvso47eaWek8Zuamm328k4YCd5UvbV4V7i",
  "key9": "2NsdH8kzRXrcedzVeu8UyMYQnkmdXFMnZ8e6v8afXnojfaa7bUbD3wGKNVa3ArcbLxco7G38FmuERFgzPwZZdDXj",
  "key10": "nVDAr3rWByTbZnFFtbzDb63427EWbRXVmmtpWRLzMGviqdrMZzMJryXeHAoewBULVaofgFLRcGPCcCtuHqbxSSP",
  "key11": "2UxeRRy6mjJzNbtrktbwbsp9CxVQDWk7Cn8GHm4TFnPw2Bw69iWoDTCQeuttR2d61aBBHUFbSmswua2m7rBGAKPm",
  "key12": "5QydzH8RL2og3Sc1jWeSaL6N9deyZrRAHVdRyxExQA4LG6khdNjG4F5Vmup8KCeNhrwe3P2ZRN2JbaBB4wdMWME8",
  "key13": "2FEYTiPYqwjH4FtQZrAjhzuoRTSNUthr6xZVhEVbgmCub8F3FHC7t8zwPNTBwCLhJk9x2tnVr5fGeFZ4gHf1LK1f",
  "key14": "2QhwhHDQj6hkaHaQy9LWmqcdcMF5ns4TReSum561ADucFp4zU5PSSv2pHaCLtpAje7nDf9i4EB6h2cmCN8Q6owuh",
  "key15": "2iKuFcLqNnZgPByEBYG3CN8FexEmfFxLtUFo2hQdzAnGaFf8xVr9SWPUXweNF2cREpW1h7ZDfSWB6Ss8FtxHBCWD",
  "key16": "g2xVLv3HpJN7VSZU5Bi38PQeWYiSsooJBJepk16M7EbEg6grQoGFZWkbPToUSoQYXewnxBB5Zft9H3uVfE85P5i",
  "key17": "5KrFGreSYNHqEFKDbB7SfnGtvktf3gqZVwzeQw66dwHPzvn6Dnx2u72y5MPecBj4xK1Pu2zZddzDtjaYKFdKvtHG",
  "key18": "3DCbaT3KMrpMqGYV9jCNrgZGDPMa9VCmLPyNo53yUTcwrJym4jSu2LvcXPegKET57orzgw848TQS53yXPHY1TTQL",
  "key19": "5967gsB15AidwYUGHCDUFvU1QYvaSHCxtvC2HEUmMBaXwfbez9tpVnUD1DhYzKfQzrZjfPrc42YvqceQ4xxQHftL",
  "key20": "2xk6yHd66Vez1RuhR1tFBqTf94p3fSXjeu2dXp5ZjoymBfrbrAwx5pxBQ8MU9NyKvmZ8Wg2SNGPjw6CbU8az7RTy",
  "key21": "4kQthPExbSR1g1p31FGk5Hh3xWaHYCeL6tkhVCRze5xrcSN5GsQg7QWPkW6Zf9EBdAmXerancRB9HSDptkdtfY4J",
  "key22": "3eyx89pZx7NfTdBcLJz5wXT5LBm5KKgitXcXQbSRQ3CVzwNJRNcRKGZSykTPg2tKMfHFarCT9yk1YkrjpGA7Y7Rm",
  "key23": "2gFABpZSKB4J8xb8NLtKvNdgNUt2i99A19LtdJNfeAnyKgLDgzYUxnz64GSY81cAXcRZ3PPHHxRNs85noDN59nRz",
  "key24": "2LL5S8HZt8vNMTTKyBeLYA7uawCbAsmNCeNosN7JPEM31xHpdiuaMYPxaq3MhqoUfBNPHh8iGbbPAf2CAzLERM7M",
  "key25": "5YWvNrPbp444HXoSFghnYDJ4XLnoAvG2jY3nfiwZpVc43yrdy4bLCTePm798HpvJAxGepG5nRTKj88ECPweBA4CS",
  "key26": "51KB1Q9NxNJReRPCuvWqjGs4xQ4mZk62F5F1rzXUvMURnk65pNtRbq3LojPKHNia7CRqrdJKHBRb4Z59m2wanpkA",
  "key27": "5daUr4dVVWmfwx9cfPWF3XU4GvfJ8SRYS9Q2RBEJd9P4FUCQr5VcT2WDrbMM7Zwb2er391UamvJZe945Axys5F4R",
  "key28": "F5X62jYAeUvDvKtUFeDmQPCBGjgm2RjjbUta8unuvzSF6LADXBx5PuJssin23P3VYsE6J78nHxLuRnc72q9qre5",
  "key29": "3WDSBE3S5mCeSYnEbNJaJU61MZvM8jKHLyoVLjSg8Jg5x5VhuoFaqq8YypV3hgh3Rsdikc6NGYk8ZqhwVH9s5S2t",
  "key30": "2TwpBz3dTXY1fNDoRM9rg7SdJ1Mg1Gjr4FmSHu7bUxfjQEvCX76FWTZn54jQxLKfGpSSy4sFkWt9qDjwaiduUwnU",
  "key31": "4qi78jdmhd4PhftqLF4Zms5Cwo79TSBtDNanQ3p8tepgPiCwnbBRn86sif7EYCFh7pDS7gLgPCXyV5h5r3SH9CdU",
  "key32": "63tTHQKN4TscFH4EKS6xxFAm899zm4CxawMwjXt9bnWtGTAvRhANycf1a33FtkBSEeCVJpTUM54gJRXmSpoWeiz",
  "key33": "5AKBzZ3jr99Xt3Zn5M1zyxzAHXWmwcfatd79bL2xk2YaGa7vXCbzQqitdm8gdtkMN6SSQ4nncGt3mCyRTWcGageu",
  "key34": "3ugp4VXuBUrknogSx8aJFkFzhRsy32nWvuoR1LVjgRrYJ51TtoYMrBQ17ak9v2X3o2MLBc45XMPqcBUbUgQi7ipM",
  "key35": "4S8Y7PNUa4b1XK8HGNipTWz2khRuzbAggKZ2jLDn7Y7cjqt9EzRWQs1SPM3HGdWyULkPUE1GsY2EdijE9Hujwu6G",
  "key36": "2Kmq5XsBHprAKjX8mBbfki1siL1xdLqvEwLUBPQp94eyLwA4KMWrWkaCcK1dN4ktycaoYRGfYLpLpijnNVba1kZ8",
  "key37": "46DLQmi3A3tfPk7CwBy7MShrbSKX4GzL6Zsw6zPoyADobnHE7K2Doe4PJnJjqzoDQqwrkxpyUyYbmoxtRiiMfpUi",
  "key38": "5LXzUYDdZvv3SW6vVsCVzCYZUH3zGGG5g8ffekDSEBgrYMgTSsx37JuEXQx7eed6Ck63FEAM59qAuzLsy5AfU5yp",
  "key39": "3gfVhhAKG9CtXDNHzwE8u3SCPhSjrWUG3bCM3emdW3vsADNSv5guUcDRKmLSqPQ9wQtRUJiB9goJ7soEfASjVqig",
  "key40": "5WEAxvz2KWnb2U42Hp2YxtEG1FJHpLPNNt1ax7m6fHn9WCSnuMJjxHhEnJjDBiUdfcMX7kk9f4qDo6kz9k9EjBc4",
  "key41": "t2VN6QTEJ84J1yqpF6gc3aK3iCPrPh3bGTKYGchp1tsqYjb4cWiEZhVXyfcZUgJJT5WYDHEaxdPogjU4TsyZgTy",
  "key42": "2AJeY32tCVdFNCXB5ScHm8Y1g1JfhYjdcH1X6WFDCqasDbBpSuwhhADQtx1UpZfD8EGa8ZMPXnPcMpTeNdWDkF2f",
  "key43": "43p5wNVN7VmRc2SE2sRksQoncrYru5d2kgf6tGJSj7QH6AmihGgc8FZvu9Xcb37bxkjZJ87yNP9tba4LCjrMkpkg",
  "key44": "2joGDs6H7yPEFz6y2HRiVtTREPwSMq3qX6sfTKYzH83BTUiqoYufbd62F6qX865uYwbVCAS38NFPRGTRwz8JFMU8",
  "key45": "tdM1bimpcb5dY6fkUtCCyivo4U7xMM7Cso6rnfd8bdHVqThGbRuzJdHCFYKjz3K69hoBAQjqrp1Fq4dBzB7x87W",
  "key46": "uGakaNrwM6mscHUyoD7EHU9kcd5K6HUpaJn4TaKWantdib6HLsGtrEps58fxGwhSgW4gAQ3Jk9gqp7xyxvnAr7s",
  "key47": "5JEc4XmpwpvHzjcYKGxVADaevSUDd15HJyKj1C8sjboEpP5vSz4JM56Bg8pzdQNYPGHkVMCTz6doiJmsF7xf2RKS",
  "key48": "4iM829X4jRSZuo93HuznkmdPWEjuE8m1LfKvvejgSsgTRZxUSarFizVXBaD4xLYEQ9jVgks2BnmuDCnQVWCXuKnD"
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
