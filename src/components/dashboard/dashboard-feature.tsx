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
    "55Gv1Tfbpy7DQN9TwvUCcEoL6i4ycgD2musvt68jPSFocLrHD3QbuE3M7tXiDAypeYjrfJBUkWwkZAFxAm3gWKs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RYDieayfHCLL7ZemgnNxMHoqejj14qiyfMHRUp1y5UhaT5npbtDBYcFk2gsnEhR6EKqYQsXoasGFFosszySA9ph",
  "key1": "iLVokYSLzFiMrPkQa7YELxuvkSgfGMhNDQJtgChxhNeTmoCy8ivKQNRj8z9J32UGJxJAf9jzoYXhryXkvQktnRT",
  "key2": "y8pReE2WB3moAHwwcZGKBgkP2EiQXo27fTkJFcmgNf34a1wb2T9AM9RvHJfQryFt8Bct8poBsd81X9ad6mAToeW",
  "key3": "5KLpdYiXupNJdQwKfqUX7LX1r5N3H1KHXWdtH3wgJaCgjZWCD9nR3o8vsG9bk1pmjj2DkDVQa5Uc7aJfTDS4fZ9e",
  "key4": "3kSnyQDQKLdDba1jAVnLQbQsEFktPBucMR4UXQadnhnWfY6EY5Y8D8VmYYESUhFayRkFJ1ymZ4agcVh5pBkJQeL9",
  "key5": "3q28c928JtPiB6TrZK2pMp6Un8VpE7ukoTTAqkAHCkJR7EPPe1xtSDJb6DWwSkzfVie3WjekMQHBhSjsRgqCfEZy",
  "key6": "rizsY3qRLktYv2LDnix8pjVnF1omCU9cWZVQvAeMuuqemmzp9YdR8s3akbsfbvEpAPhHkELPUngY4ShdRwRqi6U",
  "key7": "2iQeeQJGjyHroukNhB1cTEGVujQzbzR4AhGSJH5AjmS66d7VfSeeKnRM2SshsiEzUpHDZZ9BT2RVAmT8Dc3eJvWX",
  "key8": "5H1gAnxuXgTWEJbe5WWJHkahaqLYMzLFWgCcDXYZNDSbi1owXVvXxLbdm37QBTL3cY4HrhmohRzEQTrFJwzj68XT",
  "key9": "5sTRQvEMfqRhhu5z3n4nfRfgfJu1P7j4a2uSMf4uBHvxoBw3GTf9dt78DzATL3WiWJ5uCNFjUTP3s2ihwEj4XAQf",
  "key10": "49KsBqRGc8jJBtyLX9WueQ2Fzhw7pHBWwdDgUjS5dYogyH5FHPvFfkD4NftjLitPFavyReYLSnHhXPxSka28iMRT",
  "key11": "2qiBoGMS2WrJo8GPa25HczwSH3T7kFokpd3KtsmQByQJ4rW7T6AgRMMDmxpgFBgEXnWtg3tfvsMGQjrbeZQtoUqH",
  "key12": "4JVNWWiHy6SJXCFKWR73wn1EV1wTKKWKghwp7wVBREDPVWjzHUWHyJjN17ZbZDgUaTXn4wF6CH5LDpSX33DKdstD",
  "key13": "3twC6DhAcAu3BEbcuoBHhz5Zbr8UynSuTSFSdabALKEBApBe9HeLHrQF6Le4CU36Kmntx3xbDTwGw2GTLWECAgd9",
  "key14": "3A32oAHaat9P6WQtW7exWE4eYMTcPfcakRZH6YGgrywvdVMufZBUgo5HzEQKUK7NwpcDP6MxoWU814dfnAD5WPhg",
  "key15": "2SpSC1bAknJTcRc8BLAJM7D4f7AmEhb717gvyRgpGzVjpxXkg2rATmZGzwqtPxGJg5PjRsDMDpxMUVj9CF8qD7ZY",
  "key16": "5XL438Eh6EQBTkDWpggkvNQndLXmXQ9bUDTWTJeisiYciuh18NhykMzzuTV3ZBWqE2zLUGTTH62DNK6WFM5ZrMeq",
  "key17": "3kZbuEvjvFoaThFjhKbMcHqmjr3qikea7hmkDET5NqfWQQctqHBbcq9GgbbUe3QvaJTxWQ6G4BjtBdrCrSH98kCx",
  "key18": "bfrTsJTPLW5CXcz7RTZo4Vunh9dAmvwz5yq7XKyMzUzdUpmTKZtM9BijzzHoFNLUnpj7o11WHSx3ABupyZBFk3o",
  "key19": "5dnCqnLTqfF3oLwuYCMtrBYrLTeUb7pNKDVnJK6F61qbiiazgsszzjENcr1u8eutQPFCYwpKAQduLLfKkD6xDYjT",
  "key20": "2YBc7TJt1UevwH21wdbobKohChkE1knpPYjcmnqGjNSq92HVXDDzBditrgyCkaZ4mUY1kWQVf88i3jybWgJLa4xd",
  "key21": "635cA7e6ZnEBNSutdnVyoGPTskH7evz4wPuJB23vh3SjpV2ZRwkbzrkUJSFi36v4SHKMFv9o8VxAGc8ynmC2ztcN",
  "key22": "9Ey1YLJRKY2uirj1jpxNZTbMRCR76WVME9AoKSzJsPtpqEyazUD2wyzwdY6nYCLhKJc2ZQtDPJPx74iRrvuThJ1",
  "key23": "5pWnh4dsf1DZpAPuKuiYGXL2qFH2Y6xqGip46rGSH2s6x4b7qGoFsroe5YRLYaUKHeGr4UXUV4JsnP2mxqLH5vvj",
  "key24": "21vuky5vW5Go5HPSmMjERxQJdLoY2dq4dXYQPTGtKS781oEUrm5rvq3UeVAveVthHiJ7yq6zNqGRgVJ2puUcuXxE",
  "key25": "46rrfwPU8mZ4pqiftGicyTZmKJCtqfxfHeFkFnWTfi4LnzVFmyh9PgCBMazVocfmUFnyoHzaj6wieZpP294FXqtg",
  "key26": "Jijr6BTPMifydhUi8dpEFUCkMPYGDh5ASfnC7drs5ELxQnKL3xNbZSXQqcuTTc3kqUKCeQsom5ePpkbE5KkmEhB",
  "key27": "56mDYmTzEPpS7RvCisNaSHLfF8kHkKiYMz6QbxoRa94EwsPvsR2EFURKqKiGrujT4mrBJ6axPNVaQuLKoGs7E4ar",
  "key28": "k8WCEVyoKjHsLVh22JhkePMxsosajFC9tExQ9VoJ6WM7jXtpaZqebeAADz88BafJ9hHN7TqXSXpViTrwkfBW2tg",
  "key29": "3GjzSSqvfV66NUyfZANr3m9Er4dosCXrwk3qeHcZDc1JjBSKxvEigwRUVqXdXf3QA8WoLd84p9xA77NoAdL6HGDj",
  "key30": "3zuyiVq87zFtECvRPgEC9sjf9Q4FwBRWcsaJaxM95KTcGGZiKywLfzzgT1D3bWdSJmLGQKvo8ATmkTF9HsUirFa2",
  "key31": "2noXTmbJ1B4tVtjUDmGLndLuqr1YZg7y5ZCkzh7dhV4XSpH7JAHTbK8b44f57P14msXwyXjCrfXdKAhhGNd2E9bS",
  "key32": "Ra4myHVQmrY2iWBBGHiMcQ1Z3kVHJsNPW8Epy9PFezCNBBMgQVLzYi3e4wiotrMPZJbkBdJjHwcbnPp8Zum7NtK",
  "key33": "34mnURCTaGaevbdsrzzV65LKP8fXwzdTjhfMamK8Wc82S3cLY9t2tyrdzn8GHepvXmSWJJAVpWZKfthCouiqecZH",
  "key34": "ND7MnjWBZs9tyGdWAuD1VXHpe5kZrZDanepbyxfemtCXagHRcHhBnsngj3poN66xNfEP7Soq6LomryiVLAnLJWt",
  "key35": "tENzKMrL25M5Pb6cXzTMgxCzhv8km49pRJAS6wqxnD11NSnkbT7DCBy9nAc6gpoYmGsUTxVKSZNfATjCkqCExdT",
  "key36": "2vcDuNr6FqcBHNihBk6cFSZm4TYsLvwUujJmcWGFTts4x6fhmABTRJ572WZts37t3AGeuMp9WQAu4ckRajTTmVMc"
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
