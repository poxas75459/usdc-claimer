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
    "5ggyeFdcioDb7mJjetKt5ox8SmDvSoRgJAveti7s55vMeZpJqKN7MQ6gnXmA8gfMMDYGRi7EEbycfwaTfRWM6PZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w2VYF7cE7Vx2kfm44YBKMhoQy31J9wqVtJvoUYM69bWYWCf4saacc7EuFzJMhN5hdBS2U4iNFSwtAaYsSe45wMW",
  "key1": "5CLmkQTKHieM7gW93PTedDzSvYmR6zqtenbQDeZHsRrxbgnBB8smVV6EJzNy4jTm71VGoBBXKoHVTcHVcTUudxQe",
  "key2": "3RBYYy5fPWaThZSrL276e6dsQhwK5nbghEQWdNM6NXqYHK9nrT56dHFtMDsheCej4972uzXrgQpX5FZ8iZyiqjsp",
  "key3": "26HHqbcG5VhhQ2BEHpcXokZANt45KAbKVfsTnXRqi2f81n4coS1u24KXxoax7WpT9zTXB98w6Fcr9gELhMN6vmi7",
  "key4": "4sCQyQewCCFzCSCLeK8p4jyE24aCY1DAyHFwpk1ZGdBdvFRTzJPY65D4cQn31AG5oeKAeo4rGduuDBYAvSgCEqS2",
  "key5": "5fgp4RbhpXAhKoHHYAwwyjm7RjWBVv6kwsMCbMqrxNBU1rusK94BHYMfyL8odyvmrmAG13KPSX1JrdnwXmSRXRUN",
  "key6": "66Rjjia1HUvcV3rLkupHCAJJFN2wFyrnmZT9sDYRCRSywprjtuoWJC137CMfE6KSBEFJm1XGc4r1KC5SdTWvpJS6",
  "key7": "2FrsfD8x1DHk73io1nNnoiXtMvoBGxBmg7MPQTSBj62Ro4QA9TSkuTYYuMNJDM42visPuJwhtDaUaqm9oS4zdJXR",
  "key8": "WFtUXKAaR4Pw1gSYJQjFKCjnQPSKPng1R4nbZyQEo2TK6Z9k7coNLSB2cw8feNiY5KBcqzKQTfpFqEsCU7RHR8A",
  "key9": "4UsXBBAg7tkzp9KMfUJHozVvBjTETv1s2T8UxhxzhKffufahrRd9iC8r3CQFEj5TL3LjMLcThx6PDEoH48DNP76P",
  "key10": "1M1oHnkAUAv2sRqjCxqFEqCnqFvtbKBzakkeSG5tdCc2KKsMu1MtbPzZRYMdbSyQtNUGTtWWSLxU5sFk8EBLeY3",
  "key11": "39xcJqv3d7b4xt3gfPS1zi3PXaw9sfCggP3Lr1Etsr8W6esdV3hD9mMxZHt6XTUHnAmKYauvooxv5s63gjZBeGcd",
  "key12": "5VnvwJjxfYX6nEnS2vygeqEe7KntnPbaUMhdJSNNg9BMnb94DBrYxsdbDLhMbXEe2VwotQRLo1g9UiP2ohGoBWwX",
  "key13": "5PNAqnFbEUyT9TXqt73KRhQrVWru8WeHpQkGxszQVx8gyGsAAgp9187h1BQz8tob4qdNNe2EFFqtFpVhJXRwMxHL",
  "key14": "2rpBMR3y6MQLqsMn8UVDzELtFYRgTWJ96rbC4snPxzzTE6Z9WMwEKxsKugYe5djj2CcFXtvZzHnW93ncya3zKG8i",
  "key15": "ggwnyATpgwEGvJvKhL6DS69xEFey6YWSZguka1pBp3DdqyJvdh66KE5UcDthvhLCoScJEvEdsZ7nFLKKXT17ohh",
  "key16": "2oNPfXKjX8EzB1o9Wkdsp4KFRzoGJreV258ijC9Ad2hEXcEb5WNmbpbGN4tBsYuHVRE13mmcBfD43LZHGz99mhSw",
  "key17": "3TGhPsajZ1h5Hzow8ThetvB6PaWmuK37LybnBkE7z3aEiaTSE9skpsSArZdYVUcWyWa1dhWymneCpoAUicdigKPq",
  "key18": "44iRfGFhvY6wHsiANFAjLc7JTawu96xfUSYemKyWK39gSf2Nbt6qrMFLdUHX5nHyiKLTqB5aq1qk3rDBKdCMub5s",
  "key19": "35fSJFMrWQxfdQkAVnc8XK185baJ2H5Si7wFw9TZC15n3XHRpjYoSnKTAn3ZsDZuCXaSPmkoq6sodjYCBJNbsxbM",
  "key20": "4DoNm4niWn29XpQxBCxCodZqAHooC852Z2JK8DSJd1S1zApj41nkkXFpKDxQN3Wa4JvMtSP4RjVhoJFNopyT4SFy",
  "key21": "2LUaPsbQMp47GV45ktn2xAdW4p5Eg3Kw9gHjtXhF9webLcMrfxZzANs9BJ3azM87LdUgFLyYsiqHafUABhTf39Er",
  "key22": "SSWWjeXLNoB6sE5qnGBTRpcemFx3iFLS8oY1Tt5nznPBH1MoxLe29mRatTUMtLwXvkVgSWq2ZTXN36echXqf65Z",
  "key23": "4kZJ4N2fFmcawRzEpkogu4U789S7UqGieK5KtBXFWLByEXNdeBbrjTWwWtQvp2BPyy47eJJ4ovT29CBotgQBcUkB",
  "key24": "51EUqfEF5K2oEzTsMfNXzxzqE9pir47WURFSShwU3hY5KH3HCN6uun8jJXvsnQQA1wZQWHoYMNT4R1o5A7zriSv5",
  "key25": "4b6ECBon5oSVK88S2iP43s3u45XN5Q9bwnA85C1RmJuXqtwQXQbSDFz3YkExwAkrW9xcouL67g3shBxyryZgwpYM",
  "key26": "2ZMNAKKtcX3GFEPtG3dzq5bzTtFKxrTNEpL9uXHHoXkpWDq1zwadiV6hpd5Wq2wkRtwgQqzkyqp1ovGBeaVorPu4"
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
