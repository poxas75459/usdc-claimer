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
    "dRk7mmNkTpCvcQtpZ3btm7aMrk7QwdFEWop58rwVvoaERZc2yCu1cGnfoSU6JsR2Rt1A6bJm7fF5A3Da1X8GPgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rwLqZnfpfznyFbtTv9sW5Qvq1vNYH58FDGit4tg8EGawjJzPqvjasCrdy51G2rRQuhkZJfcJdnoXPvjZcPWW5Sf",
  "key1": "4rSntjZPUBtsv6CXjdRJVefcMcDeXaJqC1kXQXe4H1FSRXtEtwrHX5AEmYDafQ1S6CkjbtjkWfJs979nHgfW19Mr",
  "key2": "4G95bQ4Y8DdGsdTKtkZD99casCRGKeR2vsSaVwMqCRWezs6rMriW5KxVXEmXzi1kbXS8QFK2Z4Gxf21EZ6tsiBkv",
  "key3": "63b1CRcvZFgV75QT78hMsWKDzh8s6HQHEHfcs1LoSph1D1BfJb4VJUFr9MMaGdsGDZzbLCyXckKz3GvGqnma7VuJ",
  "key4": "4HFBcHjJbtnK3NKrt88S5asnoqkEHerwwjtUDMsHNNFytov671emsynbV1RZt2okNGz2GMzSGs6oevjPpB7EpMzn",
  "key5": "CZKe6y8jMgHUiQomFQ4sgb8GKyXqUbay3dkqS5z1iJ4ijrqG3jFCmtA9vBc5YBkzToAZzWEJXSxRyr8zaBF3qpc",
  "key6": "22gzkRxAQPZmgnmSdgTkjrzagRtqqajFEC3n7QmBtP3BNy3QRkbcoA6eEpk5thJVmAkgyjgs7v5pEgsBipd51c4M",
  "key7": "61xLDqXrnPEHbwdz7yv7PqLfU1k471kJv7LizQgVpXN9YGj3j6CxFKyW3RtxQAWHfzexjF1C6WviM7Nwj3S31opJ",
  "key8": "SBsUuXCMrSdrUugH21xRASkj6AARDsxk6KfhSBmcAnMT2Ai1yytJKnGUX64K3vWgxd18Cc7aA1CygGQ1zKRxfjK",
  "key9": "2cM9y571jHffSn3rb8RZdkqFTYQA7GAPZpJ3bcKaJn6auepa5TgXXMJYBhBfyS6RimmDGULn2FnzKvDng2movts3",
  "key10": "5iKXWSRcE41LhV7dKqkB1xJ6jmaA5XYudF1A9fhe46WDbnT2obZtJiH72K3pdsTcpRVVaxDxmJoHhvKAoLS7DY1e",
  "key11": "2Vnwp9muzbqkSkyrYfekeYNcguWGndeMsoWriHymSwHU4iWL7MPyBLL16oG4Z3s9gkfG6RkmEpABxBB6xGtQ8RmC",
  "key12": "29yRirAXrbLUDMDiXVx26NcZsjmF1HsSm2gkswkanVxuQocvsCAetGApHAWEecsKKJ5CXz5YKPf2tfjVzgiu6ZUH",
  "key13": "4HmgbCu2VS9i1t9nUS2gtv2s19ts2s1bxAi7htP5PK4YnhYcrDq1boVnwQJjcWXRPfaxEifM72QrefyrUt5rRiJ2",
  "key14": "4NmYEpbdWC1SQATJ5wq41qzvAGAaNLnrTfjz4xugv6GXHbB3YHbDjVoWkhYFo3mzLtk9mwyu8Q4nTmrrDp5rQruD",
  "key15": "2GGF279zanmGmmFvSbsYFnRJEaVkGVJnqb8QVbEFoC978fMj4SMjhgaDWEBhg97fctznR26DA85Jyn2mYGs4jydN",
  "key16": "4ST1Fa3MzcriutVHZLMDdQjyLpj11vdiNynTwJsM4wvgbr3mUvsxTU8k4UskDdyge2PYbk2zvxHBG8Z55gRstEVg",
  "key17": "BSzZG5wJkFqgq3FQSkezF9UMRbxfEzyZQYPLXeyPAWb4gpBcymn1oqV5eVWKd3p3QNSKaYfBhMP7GnpQaUBYmfp",
  "key18": "3TzST5QhMxHkhb7m4NppvQxjKPoVF1s4xV36cA7eUgJFQMtfaUpmvnGECa9mH2bb9PLX8BGHoPYUD3qCeaVoX2T3",
  "key19": "fHWJQVKHfi26gedrJYEj79YKyLuN6NcaaoiJUv1UdtV7wG3v4Q2CWqYNABsi12cYx5su7kDRMXHgPsC1QFr5CyF",
  "key20": "hAqDYuav1QqJ82BtJrRJAGhwHPH9fYqmCLZmNcSv8fy7Cb2fJ55fomGmU3ULM5B3MapS8Q8EURPPEBFi71R5S4D",
  "key21": "5DQq3jGrVVb1XokHDnMidG5rrPE87Uhwsh8P8pJ2n9m5LCmh39WxiwpNes9WiTXdPuvCFMMq6pEYAnGxD1ZCQYkW",
  "key22": "4vGRjoRDwc7p8CcFvoYvoURFJcPENXYxp8tyHUKykpA7i2fCDoYTtiNam3HokbaQRpkD9nHZSYuBmPgF97GdvgZG",
  "key23": "2fcUdfNn5293Ecb3uURowZjCJHSnJpJ4sQMRoYg5ADdy4iTn38pougX9cSqnpBvuSpW2FSNftwirJuVpMW3KFBEG",
  "key24": "5WoPpk3sCEWZVUCCGiu9MJybDtKaiBfcGKndWFGNDNADeVhbFjJfR2ZyW1FE13QfTWaFc7Rn7r3uYExNgdNLKoNB",
  "key25": "YiNaXEmnmT3TFD55yvKvqZQVPrhSxyRaHGbfAHej1UmooS2z8auma3Br2XMiYmRrSphgWuC3AqakvrWx6LFLgf7",
  "key26": "2nRKGnyfCe84NKf9LZ3M3nDCZZthSbDFFiJF6qJovxqVxDXd2TMWvorR1uqa1n6MRnFX1DeqopoZFTZ7N5xC49Dh",
  "key27": "4GRoaAduDLcZjD8qZvVVfYCzZZb5DfLxRCtNfZ2W7tKGmzQpQqT8SbfZaHqLK1ebUR4Hs1mSVVV5WrEzZJzXJmo7",
  "key28": "59ccgixZKUPUzBRR23fyubLUNiYfE88pNQrUAFzaz5UDKztXnEwTTU1ehC3iLTzhEeqqDSgg3ZW8sjhKmVb88Gw",
  "key29": "3LnJPzcmQSKyUXQZZtz6fBcQefDHoRxawsj6CvQQhiaTJJmxzaJAsdcihs6eWLFqXXNxUnhexGKn8gmnHyedxMFh",
  "key30": "56H5H3CFExviDiJxeaF8z546byihnjQshdF9uGRcGSniBqPCjAMXj7rRAzzdvW9qt2auKXjb8kfksKCASTnXc7SH",
  "key31": "5YcK8KmSpB76HT9Mz43so5f7vjqSYVmc21y3fHzzbD6eCNaQqRtKxoY5TLBkWUTSP7sw42VBUZGsJ5bUi3DVQiN7",
  "key32": "sRw2FVV6d8F1QD4jYdXWHNNjz4w2DqFhcwj9YZ69sDr4X3PWTTwfePcuth1Y9mz86Qwv1bxL8uV7BgoynyU8viX",
  "key33": "5g2haN3GVhRtkJcqn9edD5hCR8EJTjtGHyW3tR8ieKiaTLv2Kaux1dnCBwAYSioQCUTnzkgG4JRM6M5h5Et22AkW",
  "key34": "BJdNTkGE7AnBsh2XRywvgLR6JcmN6SkZAsTDwnmki8nm21eFMj7crD7CmgdzEsqi4CVztxVdacs7XgcNLZzhcLC",
  "key35": "45v2itorD5eKfH594DEmdTh72hFTki6g53P5jkoqLg5NrfcVNZpTUXemq1MwvgFuNQNvHGJiEFwhvm386DuDtSNA",
  "key36": "QDuTgraWTmTFBt3F5ZyLvXPS7UDkcXehBnrok9HADyVohHVNqt4NZ76QdE1JjYSkR6VBbCrQeAB9bbWrRQbX9J5",
  "key37": "5hRuNEhg752YTyFUWNNVDXNW7D4ziMigrgLhFyjHsdSqhoj4JT1aNvjWpxCfnV445YT7HbwY4627PYGVG1qfK4pQ",
  "key38": "5nv3NWHigAL1tquKUCNEEb9VogQZH8XporozWiNFzmFPqyjQYjgfeS2NTXFuJ6srz6LyYDaQwUnLfWpxGsifgpvS",
  "key39": "2ddM1dfsxBr3NqpHgbruBVN8ooQ8nfWaAbCceuGUCkRhTzohEcaaM4hFoJeqVBwCwTKuouPFsm9tMWse8HBPxFtW",
  "key40": "4TKb3Ycw8H7GUhj6z8La9FCr8kqF8Y6BpiryVdpQ4dxifY3jCf6iyy7cquP3E9igzWdJLUbZ6YpmjhMWzqFsJbMy"
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
