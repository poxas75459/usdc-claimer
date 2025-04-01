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
    "MoDBiRPD9Sgr9owRk5wDysAQjzi8Zytqs2LfMVdAiV38xuAk7a5WiMggS9LiHm1DCGejowsFCxnrGsMEAQGQd5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eebuYJ2R8Sp5i1pFSEjzT9GQyTzER7Q93cvhrgU9abNs7caZTSTrHn8CZbxmEfjoMwV2cSFtRejf36wxJDbTrUJ",
  "key1": "4m9vHyGawAgxVMDgvMtGpUSNTpDvQcB5NCZMV5tw9y9CgyrLY5pW32WiCsa1C66KmZnxb5x1ktGSRUV7s2M3xqWa",
  "key2": "2hhZoSqzm5RAeC54NBp3NK6cHKv9naew3rrkQaDWYbsrSyvV3MbaBxHtthYChvWNX3RdPnMivPt3VTaK5zgjSGUL",
  "key3": "56zgtatw5gf21MCN6cxAjQ2V8VSpnPexv6F3jjrB396cnNM7c3aaMKKjk768oBGcqTEBJipiZB2v9o5edeQPVfBJ",
  "key4": "da1yniJknLxydcCUK8PkAhawx7BMrwuTwHtEgVVR5thQTHfSS9ncseYyrzRxVP6vXQttgUQWZDiwPDXy2c9CTYY",
  "key5": "2UM2SDCYpHWLufU5e7Uh9sSVKh2JFSqt2AKXV9Ht8Bo6FYt8ZXQQxm4sCmgWHU9gS1rzrQQfQsU61qH2fGReNzQS",
  "key6": "5pD34WDmeB5S326SaAJvZDkcqs5xgdTZafNVf4i8qAmxMoXDXqbZRaRv7vkZAtt46pA4jmyekNNinMqCYPwuSDSb",
  "key7": "5ztmA3Ud7M9RCdzJtnkbpsYSq5ETzK27EWqa6b64B61jAF5GhgA32Mqq1zbJGi31Y1LZM5PAdN4qqzps3tzAQbwk",
  "key8": "2sQLi7sv3Qua7o45NbS6Ucf9DTLzMBh59XPWziUVB8VCpP1VBJhAnykuDTM1Sj7o6WTCKY21QhCxhuEvprnfrdZi",
  "key9": "5pxCvAcvbaSJUd6Nsi3Z5jife6GVMHJ2zscHbpnxk9x3zDitiuWmYuQtnQjc4c8K68RnrUa6JYdEMSq1LQ7qGv7s",
  "key10": "ha3n4bQKz3VDNkAmgJ9hrJUs6Tp12KLaViKYatydeR6ktABF9f9Avd8dAuyptyy9ZN5Ck2LrnQNKDT92pwBoVYu",
  "key11": "5xudZHGKsJ8WPQXdo3drHgmZkdgrCBiJkR5P1gNVCa4vaEBrNAxdqYBkqMBXgTy84ro7ZjX5NYsdrCNwZnkatcXW",
  "key12": "4jmVfX6m8BR3AK8u1Z6iXKBt8A7mYg6xbCTvpUMrDcvrr1cc1omGwsYB18yiSpTLqtmWPsR1ERt38XbTyuwP9Beu",
  "key13": "66vEkRPAx5J6p8tvDguMsyWjFxRNQZVe2Ryv2Wju7A5HKWvVZrbB4waBVqbmQtG89NL43KHLAFWXw5evweazR2T6",
  "key14": "32TSdv3wfLHgooXysHuBnJkwARnq23JWHs4ayRc1TuX4f5fo3fpyrdVR3mMWZSWECGtyR8rQii3er99qF4D926Ji",
  "key15": "5mVArCRyKHaDjdLY9G2AtZkahSuwMwxr8ZTTckHvJwRDrK5V3jGUMYNJWMEza5LiZtxxbxkAPWTNSsgFdktJ7d34",
  "key16": "8vuvvs6p4eeGJAdRNrnMHkqmLb1BTUGaRqYiz5fLSGCRRA5qr2CR2pbkbUyDCdLxRHdzo438fExsk3xuNwrbd5n",
  "key17": "5a933D4GaQs5DcxhuV3wtEHsQuYkWZSunuSLBNqyFx6sVmkgJYwmQ7vAU7AVvb1WvoYbyAQS1TjunU16Huth8bLC",
  "key18": "55uTfXxsgKXfY4cs5EAaKG77YEZXFtqz3fqzCw8ES6e5sAHZ14o2hTj6884dhKFD1RxMKHVHY3TRHeRyQv6q9GxT",
  "key19": "3wJ9cnnCJBQwHhZKYDtBZ7nFR9zxJ6s5hmZSG5r5VGnSM7x6NGHRR8unSjyYgjdZ8sxNf1MYNRaAWCS7jgjR4BM1",
  "key20": "3HHCPWGFkxmucsPNSSAdLjiSLGgLtryQaGDzoNwSVQo3UeydHZ8bzREphTgG8gQohXbjq1pTZgmvkPp9pmP144qn",
  "key21": "2uMN8dGqJ9aa8vN5XvLfskVoaQvppHBCujHHeL4jFc2vyvWt1RPLRUZ6DhgY2SDBmSviqKbMgG8ysKxzko1Gk9ET",
  "key22": "5b3NPLufqsJbJq8fAjCnVqXK9ar1RMnL9BAgm6G84iF7q5ifkMYKB8p61X3KGpVjs5sgiRu7LmAkTTr1yrUgeTLW",
  "key23": "46LzdbHAdpEUtop5pbiFv2195sopdchpqPYnHTe5RFQusB2WxUATvT33tJjaa26uiDumXSGVvewJhD7MzbcTJnnG",
  "key24": "2PUu8CLPvRi217A5EQtX7NQN7pGHBJ7qJd3jKS3haMY7CAdVc8KWCwyHehsWPMx2WqGEQyNwGxfkV4gzFJmK32YN",
  "key25": "4msH21RtgxsuKtDBFSQnDogrBhMdBNBmRp2XY8QeGiL4XtvCHhDzdhVAkF4pFxTEjvSGHJz1233HAEFC1L3Ffjbx",
  "key26": "3Lif39kjPoix8CfrtjdEAC3WUTxYdyz298BmBMQYnmVMxdF481ntvUhJXruqYbNmnQBFCwWzdeD3cGqMWzZVJJQg"
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
