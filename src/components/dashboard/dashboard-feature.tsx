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
    "4JgmEAxDhkexdeEm8okcRQUGxk6u6sRo9LATWkrQs193ZRApoeD1HDsVftCeDmWBGwt1dbERGXE1z4Bon9KUL81o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47YmMVEKoLLTu3DWWr3nnakhWskFwpfU7q7RBLKh1zvX58MVeJStu5hs3mYV1BA6QBPYZ4Hm5CReeEdrYT42YAF5",
  "key1": "4ZWVuSAk6Xou9kKjcWboK8BWHmKQ6N1F7TFjnXxvcjxxiVudotRK4VDFLuksWf2F3PVWNMzX3JkNj4fW1jkWUr7L",
  "key2": "4e17wefvj9HTZFfjbTxxii11U2FtnAN6Ht3bYfNv9TVoSrQ7MmLjAg9jHh3vzrevC42W9u2NhMGpAvaiqYY9hrZN",
  "key3": "rpdrJN9Hxy61trGfsFbVMaMx7k7Rx6wA9r2MqJu5SnUffcNKu6iuy4HGn7Ckj4QyfDt1y2EjZ8HTwu7GpjrurMp",
  "key4": "n7R2tUzRP7Bsqzcg5TSqepP4rVZFBuGuPmVgn88hB1awnYrL9G5ATCnmMMVkemGGgbQGyCnxxp8sFGpsQX9cntU",
  "key5": "2hRiXsxp6rzotCURtGyUjGgr2ekBuywbroQsXuqLv25HuessqKxQc9vKKYSH7uFV6WtRzNxpSd9daSBtcRJGRkVW",
  "key6": "23Uai97rbVvRMKVt9pmvojNeHVUiJRAibqqcXttVkySsf8YXWqdt5fnxvbwvUqucq9FS5ACvfJUzLYEfbrJhiRvy",
  "key7": "34PcF7XWuDbQczSyRdTX4vGMQYVq1Z6a6spMyupXmi2PLdjDfZFmMDviX6CEWLcq8xBmoNP4qo9sZZGjDUQsT1Dm",
  "key8": "5ab4i2VsnCyGo4hvhfiuqcoMo3eFaqjCwdcuRzP5EEyjrtkP3Gb3p5HHoNKDerrVGBQtzTTbEJ8EqeeRpmaS64QC",
  "key9": "5dgGvF8CGTNu77SKHxP1PQGjBCW55kmriJEEM8Z1D4Pr8XiYXvJoAz6JygAqPQRKg46SZjipTvEiyVWGLAvviLSd",
  "key10": "4szVR9CHoWJdwZp31g5axtEgtaok3AaKJCJk7f16Do4udyrxGcqisLpC9YiN26KnVHfZdN78uf7EFDqdfdFQF1vU",
  "key11": "r5dGEkS3cxBUPgEnNYprFvPUohbUUA19yi4ynmYvsLcEn8Ru5prMwF7w5fB2vVx7PYBY86nQDcps3W55xgq9jTV",
  "key12": "461Hv3zdtRTaF3C8U4CxDfjARj6QmYzVzmfyWgUJZkgWSn6DcQdYwVaBTRQVRgLNe4SEaYRBfA8nEhb7NMosWxCW",
  "key13": "5FC6nMkRVkeqrwDYe1HLkhKBXNj18nuiyG7hqHnnZQpnnVqZYVjnzDrwdtK6FsQkvTGbjofUdFX5HrbjnH7aiQ7f",
  "key14": "5vCCakos3tTXXnSn8MVvNNJ7m1A9VUyKNh31DabzsZPA7khn5DuK6HdtDDXzhabPqTWEp5gyeYcGHYeJJAEhtqHF",
  "key15": "APSHQvndS4Y9jZ3YHLnnKdyoFeHiNGYVE67v4aHCp7wmzsiEfzimtGHhzAsX6VkZJ5A3LZTvwkaMTNUdd7WVb8t",
  "key16": "3iRHVAuFkbGdc4r5QrsJZnqVQZryKQF4gQqm9TMDPBiMNKtLRkoM8Ya9cvi9tFQpxivfHdN6ZCUACgYC2GnrondA",
  "key17": "4ebN7EZv8gNUCaV16Hs1v1Fh4XJFGTSLqAdqXDju5wh2zkueXY1Z9pBUhZFcT2h82j6LvbLYr8D5yrfreGP2GCxo",
  "key18": "2o4XYMqXAmmsFbMhP9NAnc4938oHRkSFqpoGEqRud38rJuChFwPhiH2iUE2WmjAj7VjEdxf2iYtaXZ5onqoM9htd",
  "key19": "T6jbUwhUu9hXX7joTKjY7XSy8LUMNN5G9Ssozy4eGFryw2M8vmgUUsBpUGQ6Bfs3xBhGYEPL2VafYPSimrLtty9",
  "key20": "3pkHTqBgMg41FzPzpmpaZJW7W1SA2ejKwfrAC2px6BiGiGsodpBh5J8154Q8rxsHHFqyhqcmrp44KJ3ipvBXBmjX",
  "key21": "2BsGkBdieGCriY7EpkERTPJ8W3uu4CHmPAen8xdwja6wtRPZGypvRoMdFfPDEzC2mAby1TDBEgB46mZqkkNhWkev",
  "key22": "4kEqjo6ko5i4QLro11HeFSH1T6F2dRde4hWHsE5hQSn4cud2YMf7q77jxnA2u4cN1fuZXttaQzgrbax4C97EFTrh",
  "key23": "2CZNYc55KghV7mdTvwtXdH4VUwWAmiy1kKrd8YFSfJATzv8B5xm2m2dDixPJSJ6tqaqcNKop9Do1S96pRGKVfM65",
  "key24": "4Dh7LCM4Nyu1EBLy9XJa1dqvgC7fooJudNB7cGz1enainMMTvbP5M3jZKRzMKaDu8MkweWhCDDG2Gun28LGTK6vD"
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
