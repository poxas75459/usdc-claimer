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
    "4v3C7EhV27364TDXn5gGJqG57PrJm7C14bFz7wVHxerVpvEoZ8MuMku8DN64DDymKDTSwtWvrHX6qiMtiFoKeLtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tRNV2SsLjSaWj8hv2wnJFQLSc3VPiQMaMW5zkJFsuUKAx1BqXWGhXmcUchmeTrRxLLvXTZABb55QBGYg1L7Zten",
  "key1": "2qg1guYeFSgEpUJRL2Pu6oZT5mFc2DcBz5QhY8B8Trp4dS3RmNGh4ErRUkEuKSRn97cKtdXDv7i6ZVgW1EyGpAF3",
  "key2": "5cpSmDu4Li5aJPxw6x7H8beZs5PGSFixhZQrZDCk9CRYfmXELJUMmeE3TEqPEi4pqj7m4skK1VPY6NKx9RtSn5qP",
  "key3": "5wCmUvJ8kTXiyDqnzE2qaA7gF9xsejVYwbx3dVPmrP3BqGFWarG3jFwB6MEYBjaKhT7dAhECHKEq3CgFvkD8Uh5R",
  "key4": "4SVFf5Mt7yHw1q94S8ZAhJQpNpoMvhfQ77sPTQsZnqrjAFj85ufXPtnaesQ3deYpgYDb7rvTtMrXkaRhrBg17ydX",
  "key5": "5dguqLuxGCsCL2iZszCYWDX3rc1BV8fgaNCKmkKQpQLYPmvNwhuttv5LwYXPyLFq8UXwQy5Qdz95URTfn415rEZM",
  "key6": "244vUzAFt327aJyAmDCJHCaNxPubBqkbyJkv1nHfMKJQmDHoHCWANAC3mt5dbBeDt18ijh86DDZb2u69S2u3axhg",
  "key7": "43877jCJjrc96dh2Aqo5SWodS1f6VaBVoVzVa2rXsHP3YvgtEcjRrWKYS4HF24brTStdsZNsqXvptY1QYafBfyNn",
  "key8": "jdh6R1yDi3wLUre4MAaSpyQ67XANzF7bpqGCaoHsDFvM9bsJwPgU6FWfRYZPA3P2iGNc6fV6MQQYxRuczVh6XS5",
  "key9": "KCoPodPGMUkNfvWV5gTsNunQr24eQDY8PvmhrvHRKLYLLPR9j8wMhTG75Pp1ypGr5GV4AWSS4w25V8U63ndhd58",
  "key10": "dhAhg4FNZSqWZ23sPo53wXYYwp2PkNMm6Zu47Q6eYqZtMtAQSYmc1tiXRphGt8WaYF1ev4H27tzPEwZyiPvySGc",
  "key11": "4qgUEgz35Fe6REFeWVwBpEZeaQFavY5h5ouNK7verdjo1LnK3ZDGYfFDgVxgTjs1zGdFM3H3NKUfm8JG8ymgGWGU",
  "key12": "4T4vyMdStqyVPXkLvQUTE9Gyt4WniVpHc5S5u1KnVbFiQU5aunhEMR5NRvFxQ2MuLmyUcjEMxfE2oVnwoQNqqeoz",
  "key13": "4EGfQhZAxjzU1N1E4hT4pNUNEyqXi89vch46EcfM8A6PnWyyfAxSFXGfxo581WLT3gJZUBqMv9KgDgHBF3wPfbVo",
  "key14": "3LWujcZMumLGBDrhovJbL8E5tYgo2CiD8zz2mjLMVi21mRQKRWSMas6equ9vpitTsH5cXmEp4NSG4MW5dVPqMJ1F",
  "key15": "2xo9Tvup8ao6FTQtVnHtnRx1mQPXmVEsHvxNXn1tEdhRDfJz1vvhWTVQ6hg6DXoVydvQVvUWK4WszwVJzdsfxX6",
  "key16": "48YNn9jqpqgeKmYk32XJobLMtqEYWYNWMfsNZjferz336F5rdVSegGkXQnJi1pCVqnhDeLYyNz1eB8goR7LfmMy7",
  "key17": "2XJiwEwHiNbpEBmL3geKC8KCpPvE87d5PiLRVCwCcg9iGUcwuLkbp1pUnuA6iML2C8Z8MyfesYNFhvPG7JJqD6zm",
  "key18": "39pTdBpYRwUcMcceRXFbpoJ5aQkoqgrnpqnpFZRruQEGUENwsCSciVrQt3Rqsvi9idCfgLo1srrZGDtMzYGSBppe",
  "key19": "qfeUE4ZLtG6vZxGLYUc8BtWbjxtC5UsWNC1J4GhjNk984NjWFzkeaPoUu89rqQuxDP16i3vmqv24bfZiEgHU3iv",
  "key20": "4iA5PNFj2cpi47JJLRdpQ2suoLgBgFLkA7ayoExZFeFAsvQbz9CpdP7wjRz5MeJKHzxqwLsLsAf1GNtvsZVUGxkh",
  "key21": "5jxAtFBz4KPMFHLoYfsHVhSuuExgAWHKm2MUzCbHDCPob6um2nRKPdjv5gRWLWcKQuLrtKd7d21KRJ6u4fNKdVzE",
  "key22": "4tbsWpZsKwc22YRZzcR1Fiehv6sC1TFsP6DBccq7CvJ6eLSdTYwoHBpWFDo96URyZhaSxzDaoZJ3yR7SfBEy78FH",
  "key23": "4GTnVtfM2PbwRxVNyPms8qTYEgaUBynpGUHganeM2PPqhuR9SttCxMBEDmz3hyKi9jjh5c56WWh9ZMEuKmwyo5Cz",
  "key24": "2o4LJWJfRkYf9v3CApaYFnMj6EpGwjMFk5grZYUnonZmsWLAzbxwaGhRcHbHg33hYRfWTuGwn4G2boTjAqMNnDeJ",
  "key25": "PJDuSYxXQcrtP2gvmbaYL4Sjz1V12rw4Bu4oU1wCQCmDGSqpGBqTjdrrp1kYDydhdUFP8hbB1sB2j9NKc7LPJVo"
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
