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
    "3u2cuC2MyBvthLoMBfoYXpfFTgxGrrdr5Pys9Sou2cuGQMGWh8F36DsmCFdRSh41saW4Rw4qosUYWkyKPmZQNCXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UZGVyY8GUhcwdcmPSb52kzeX3NK4zPqXyWFVgQbYu5Lr81nt6BL8tiFpDr8m22jn3Jf28sf4wZ4gPbH6cDLJYGu",
  "key1": "fRewfjmYspaEQdqa1NFywgpoFRgux77XNiNy3yu7C1DxTYjFwkXvi5Rpt1nB6oVVefPj89zjd9dqPeEBSFXDDfm",
  "key2": "34cCVRmrxQfmFgAy4hknofNjAbFvRvsejRG9rdsJKct2TBDTiMbfkRUBoHYTnyPZNRm6e9C8R1SgmU3EsW5SpidU",
  "key3": "432cNyf6SWDyU383upBx6aNPEPhna4LYkHEV5hW2fEuT7KiZbNgqQQcDeATts3WBz5necvarR6XYmZqVnHVgoNTS",
  "key4": "5QRZK7mBoAxyfmzDLSbsgLXjH1VR1LxrwjsUyCeDKeywwNtQvYrVsJ9M7nFpyczsebhxnfeHrjZ6THoJNmsfyE69",
  "key5": "5pyzo9h5Rfwm8SyhMUAasfHyh6ziRRXgnvx9MdkwGRt62YnGDcVshXT8qRWSPedZuDBaxCuwJ2vAEmKjAZbZvFwt",
  "key6": "5BUNAu1VscEcEpEA5hJSC9eSsKLedPBUnm9mXr2N5Cf8r9guqV9LuQwU3YnARrxTkRzfurwknhDgVssm4pDjZ9W6",
  "key7": "21CikvdM8Hj5KhXgWs2S51p2e2KsCbYaPzM27d11tdQA2WY7AaYzBzL279Hi5wGrXQHEZd29Q5p6sgzf6zeKBzow",
  "key8": "XGxTxaJYiMVYcMc9ewyvjnhoRoyNmbhfg4MFrMBUtyQV18SQ7qXPv6d5s4aYxvmuvk6PcZUaFzGQ4AbRqqxc8RD",
  "key9": "3Vhs3DExecTgC4mNXGGivPHMg1ggaVfNPg3efzka5iYffb2uEiHeAhtvRdv7LziC2o62vnbVsdUTvdGrv4rAAHVh",
  "key10": "3F9TrtPpAt82sAsABQoF9nfijUmpqbjLxf5QwYx9eVg9U7cuTye2pArPWmmLgtMx7p36jggCtYuM2TdDSkgi3GkK",
  "key11": "2V69feTsLP95XH54nFhPHNNP2ztdJgcgdD35uRv2ctqxXLE8a8MRBjAzHo2ujRz7B1MVhPcKdWrGjWX7cE6dazdB",
  "key12": "2z1VrxwzqxJbc2Y5JhPG1r7JQzGBFU7Lgetbjk9cdJbXohYimiDLJFS7mAVXcHdpeZLv2Lr5tRviksW6StvA3onR",
  "key13": "txxJVhPDgugS8eQkDA4qjrRQUhng7hNYnqPqc2W9NKcUNn6PwMbqvpe1cnGKSn6NhPwHdGWvrVswsFi7APxjsVL",
  "key14": "5F5GfYotDBR9qbDPk5VYWRTxVWj5NbcTCLfJfg2nvrH5eMosQFmCC7zA8FbbrRPgN8bSknhq3WNh5CkNTU35Fnjh",
  "key15": "2CJDmDafYvUmxEifaRLnuygmdyBPKF4hF1CWKeA8zzrn43ATQtjgNWgNsuNF1jRoz616b7AM7qVN4qqqHJ3Q5fnD",
  "key16": "21DR6EyrZSjzEAX9szeuq1CEgSMnDc7BFWZZEadZ66S17JDY1NnpsxEPH3recUBiX1qaqNYtXSga4womkmQcjtGj",
  "key17": "4CUaxbH6WKFH9bdJQdei79zfRZR3KfrLJ22YkST12HpTrznWj3zwLXQvgwWsPAfCofmXdMp456dis64FQKg65d97",
  "key18": "U5WvfrEQyiE5bqowuhKciGNebvJdhGwshy8qLvox5U2iUtM3Nsqj6kJU3NYRSnxddyK7jPEegLym2SxjHYFkMBM",
  "key19": "3n9i2qdAV2D19hTxKPFL9VzagfKM6LCFMDQphDf1y7M7CTm84f1jt3sPmx1is72Are6TXgvvyt15TdosjSEuiadz",
  "key20": "sxXPHvd6JWmEYug6gTY5jsrdaNNgGzZUhgJmtAtRTex5qcnXHZzCKhfiMjK3764jp9osY6xyC9ExeFCuWHw1ys4",
  "key21": "5WWpRSYcBtvEMP8ehqhcxXGD331y8cMd7cr7QKPdzc9vQDtg4QGUBpgSGXVvfboDgYuMVks4d2u9kEpngGAG5RUG",
  "key22": "2BSHRNntP9aJ3Mm8sEubxJDLactjkoehQ5KBE9U4c1gwuwxQhGGCg96fkwnf6nU7TaM6f9meTQe6y9zRLxZ78Lqx",
  "key23": "7d6w2edzpdxUK4mbKtPy9EV3JynCPCnSYWdjGRxu34PiUTZEUUkXErzhpZM4a7YZXDqhTmwMQdmTaNeLpt2F8dH",
  "key24": "2ghzJbWm62nCAWqguwVkdFehiPYrVLqxKnD24MVQXQfhVVfubJApbDdota4TUMMse78ZYWPcX3JvrFADY2gdkhiw"
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
