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
    "58vEQN8uTGxn6FXnHBFJBG6ob41WmjWMyY4WuU4xLLg2kN2JTmWEyLr213MVMNTeQgWEiWtcsQ5Mh9TbfkdAQ7qX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CyBwjG59kbvM9qULfYiRGVsGR1w6YTzr4e4kyHtgNwrgZscus3WDpmsDGnDBKfUK7iYaX4Dqt82b4aiyJSqdUKr",
  "key1": "4fv9XWYGhmA4RH4Ggupxa25ZuCavnpEfhg74tuGFqU2X4pFWeJWdWAQBRhRSvuhJMcSzKZNp6ozZAR78RWZjhX5y",
  "key2": "tqZiAFKRMHcRGkbSG4cwJNEJmEispKXC4q32h2hsEUFpRsj4XZQwiXHZiuMT3XSL3LSur9x8cKCCPeXFmPVm2eZ",
  "key3": "2CBhJZHmQpTFYmvo6XqZC2kuCPJqQEmyc8odRYmcvtBHHirakxBZgr5JGQvs4edDt86r11MwEg3qoHNy9zcE8Z1c",
  "key4": "qTaVvyzsoLsejJ4vuhJfb3yWmrVQn1EJHGF2Jn5hCyoWmnW3k6Zyi5x4REsAZBPWutcHGKD9nPQBeV1fKZuvs7g",
  "key5": "66tcHZe9vFEjz7uy3n6pwi7Mpzz3TwC4hSK4uM3v1o2a5KaSypH5CFZ25us5kSfo6etzzzgniwQuz7rv8dvXUUGZ",
  "key6": "36cZzz3n2hRY4gkQ4E73vAjirotzpz7KBPP2ApjuQXTzUjfFJESQbX4YDedRoMN7K8DUCqyDzz4bVT7T9N725PLz",
  "key7": "2HgbSjiGvteExGEKFYeMoNBdPA4yxs4ijnMvDipidvVpjyBTFnxZDghh6GXLdfwFaySkQy32eUurPh5QQGfBgEK6",
  "key8": "2RspnfamaBZAEPcTc6r1Bqscu5PjAk2BonryK652RDBZojq9zj69YD8io5T9NkgkRgwWU98xf23i3Jb6vs2Cz4WF",
  "key9": "4SCUC3QiQnSyHyvDAe4dAjqUygAmDMXawKZWpAtCxXBcG4PS2PjSQDkbB6jzpRNtx6J61hJ6aNJCRKFtdW6VLALk",
  "key10": "5YmC9JAxitrEjx3jYmC7qUDLhFsZuty54seeJLnRGmJ4tqbKZGzj4gGmUiXBce1v4ETyeQSwCdwqS965mTgbDibb",
  "key11": "3RThfjZXVubYCoeo9zjyR6uKv7QgqwMKB3dvNWhqzwbfQpDa8Uchh7T6WPEmGHiypbPYyoBuN2ZxLSqCZHET5BPf",
  "key12": "Rkfu39JuyW9nCyDiFPW9hdGXLKAKM41Ey95tGqfCnHSynRCZAsZoSgpTPJ8UywZmMPrQsm7HUcivgM1EFnN9Mvf",
  "key13": "2tEGiJYwrPWVhxFxSWMiFYrxVLcNY65Pp8qksW43ersWmF9zUaCsABr5JXwZrFVgThd99pVMdXKJdrdUe13MZh5Q",
  "key14": "5KNKrrvdjQ38Z5piUG9xdW9QFsgPG8Ks4h6jzhkidpKYb9Tg7jGhFVREwVPBwCx58teiYybPo73RwSZBPNnrnZmn",
  "key15": "4yvFg49WNsHWty4ZxPizTBeepPnDUP3hgfgs6kYPit79idiiBXdLE3CZTA7KcgJvFQBzdCZGVYEyUQVMaULtoEp1",
  "key16": "5vKbwWA5goxPkBNk5yC4A4ExfnggEA3Wyaxr6T8SwNhWmmuJ6dULFizZqHat8w1NocyUKyu6UwPVwY25gdKeLMe4",
  "key17": "4w7hVjPiRB9ifVThtoEnUaqsDHyEAnMjBGCoQecF7hZkfvEB25p347hoih7tphVoyZ5NFcBtEDbxhNpch2wCryvG",
  "key18": "4dwW2ftVwJymuabmGL7NKZY9tqK8oUGXd3dj5BJpBtcKCcyj4CmGaUBg58C3BuByL95rNv1KC4xccZTQ77cdetwm",
  "key19": "3DyXYAso4stJbJFr887b5BoPRaTbnZDHUiJVyi4Yh5nScMmRgQnzTVXQ44GuRtFhvTqT19TdxQTgWebEVcFhfnvT",
  "key20": "56yvrkdnzN9fVSSYLa1rsYdRuibRLB1LcbG3ijKKmzpPjGTPp41BtCTCJVkYeETepCCpE9TDrVQnx8s58Pf9yUmT",
  "key21": "31mvvBXmfRceNW8qvb9NTKtCpMwfS9FPLbUFmP7Bk5Xygsn582TnmrZFnaNR5Dp2w8f9t4C8ig3CBfFPdhLoqXKs",
  "key22": "4KnYi6ZtcaTjH3R23PR5kKA9oviTEwmVVGF1qK92PwS5S5Up9yu7HbytcSJQFsjWxPZWoBZRCWDFQxoeT8o1qHJH",
  "key23": "3JccLbjd8x1DnFo34aWGyBjJADzvRz8wAirBSdbR4o2nrQpTWsg1SzRbNVFjb6MJGsdkAcaaVyNnsJ9QiKt6K4hW",
  "key24": "hvVtNa3AJBVrNHDyakhh5eufDSbpYUSFG3pUoRdYYmuqEUXhW2GZdZDUkBZXNmG2kADvL9SqiiNwRvbhjvsQDTy",
  "key25": "EmxFJT3RFxovZUmeMriwsEXcZWoJyBhPDBccJ9qB5SPU6kSFD6MhGWUtugnYTMdELSHu7w4JRd3cjkQxeUp1jNv",
  "key26": "478mKc9ZXambp6fo9rpeiLDL5YzK6ankj4qbCdYfCpy32kk6GbLzv5eyZkdytAvD66mwn7iWAjhWvCYKHYmC2JBE"
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
