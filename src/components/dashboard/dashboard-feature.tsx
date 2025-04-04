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
    "3J1671jQAtHE3d4zxeFYz9jZWUMNL8aVbevVzJHnMYxr7LVp3aL7EXDtGt3emovqa1DtpEsZQrkWt5cyYdHtG32G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJUo6njT5TRiRm4yRo2fSJGVrD8NJNWKyMijxqHmo1Do5J8CQURsfbpQ22YtdHmjF4JyEGF8xdnjtkZFtj7tZZQ",
  "key1": "3zzdtJss2TGfSwegfiYZaMYHYpgruAhMzR4r92RzzJPS4fFXPu2XHvkjaLHpvZnRfG4QANBgiUv3GM97Dgy86kig",
  "key2": "3bAmvKMWEXtfB9LEEBE5KdF62KrmYosZ1ha23mRA8yxbBsrqhhde4CVGBUAjX53spqdus5KzrXEYxPVjfMfzsU7",
  "key3": "4yZhNzhSQSWLYexe4t3eeggVEvp8VwDk6HZutzdxMdQKRkPQFqAGbE1gsoVpyzsyEnQPiyi2CuL2HoKPmv9D5dBk",
  "key4": "2LyQU7U7em7kxSRTrVS1BUrSiAYeckCaKykWkEtxWkgrVL8THfKdqP6UCbTWmvhU7kid1uVWK4tYYqcghRJzpNXc",
  "key5": "2LiPT2KhyYpnr1ARc7aDa2GZT4PT8G4y98L3LWhJnKbxQEgJNeqQViV1ZUhxz8z2kiNnbeiH5ZkJ14mNc4nEzutY",
  "key6": "4DYwSZ6CUPTUUS13evywU1NHGjsXAAVSwrvhwUi5Ssg2o5GR5YQeHbbSweMFbhFu9Sq5Wa1WiJVCdEmh7Gv5k4NG",
  "key7": "4BnDNLTVaSb3z41AWy6MVaciKtm6aY5vh5JVpuUWWg5Sddtn9aUVgSixzeKpV1hakVphJ1ZGTx6n2aZ8U1emqvQW",
  "key8": "41ryAC6m1PiV7QYC1F3ABFmuE3isfXaASQe51FR45vV4MsTDiqfoQh52hBwPicRMrGnEkfMK8KwbcCVys1Kqf5ka",
  "key9": "YazKQgjNrnMFU5H8k39fsQbNS8o66c5v8B6nziCbqrdzgadQky611VhgNtfHs54GbWUxSaUMtvAZqshGLhPsnya",
  "key10": "5gFtfFC4gGGhyv615HQh4EZBkPmBBtkxi46ruLq3XVb4CacDYTijq9GqnHNwqG8W6BhfHUQWzkzSho7uHeJ9SGhi",
  "key11": "4kdf5wo3nktd1jRuALe9r8bqRVZozSbiBGwMTMHGW51zAAoqyfLfnqwJrRimMqKcBkvCSDwQKryD6r4QY5JqHADy",
  "key12": "5RSxnumDsVEXX2YCwdo3ZJNDrJNeNNmLNkxhaie92fMW517xsz9AQ82L1DEE47KBi1dMryS1V8tJLSr87R4veqd8",
  "key13": "5B4rH5AkFux5NJVfxadFYZpgNxaCLMMMQad9vWkyS7iXifjFuiudBDoB8KBrHC7ZQkaeJHuMwdGgQLFFSJBecUAh",
  "key14": "2nFZ8nak71nyKDdZBSHiwYhDEzTCDeRd2hdVK9cef6WtK1uvwnVax1M8sMeBbXCtDgyeK6N2RprApctcTX1BtiiV",
  "key15": "2kHxEXASW7KdB6FF9rHvTp3ooy8whFho2NYERUv2Xe7QC8FFAKfUsFZBdrEX7x4mqPoBQFwC7CSjEhVAk11W2Wbz",
  "key16": "3xQRNkmxkkDq5TQrH78p58AAZ81eJR5DpPiBfCmLWNLHR7JvHxrQweNaDxxS24q3YGQ2dQzGDtKw1oaWm9tAgiN1",
  "key17": "3iJvkzvvJqvXQp4sFWDozBTZFYwiuwXABjMBX5CFiTFmHo6AbmKqJtKa1wBSApVVKH7KYCChd3aMZroPzDSEk7AE",
  "key18": "2cihuyB8H3W153i5XbV1GgChzAS4cUuWmpbreboTJUjvLfsMP6S2bXBCvPJuX6pwGvo3We7Yjr6kwaVv43sEp6ro",
  "key19": "F8XrdZLJxiyd8zQzx116KogyfswRQ5i9HnYv1MHCmKSFRppCkkBYSzT2J7Gyibd27JsJrU4gQeAwk2g9JgWaTq4",
  "key20": "4B4q3AhXQfWZpuNkWZKaHSxXkNhtLkwKAHvjXobyaSn3G7wpzJXGDggxrpEk5WXHbwUQBWi7dbRZBkWqsquPLL8V",
  "key21": "4Ldj82a4Po5HeBnS53zH3YxumbXUT1thPeVcGzeyrmL7sb25qPsNw7Mrd8HqugbneYSQiYhjbUkaUsgBX6uFf9Y5",
  "key22": "42mfB7tFqY3UKMnJgRhJ7nWJKZnk2dAvdRQpk8MhuP5oonsP3oGgv7yFgUsrnHkSz3pwKSoQtVBH8q4xhVXXrCNR",
  "key23": "5YSzuvjne3X7XUHAF2Xpeu6TUuZfxzaUb9gSVo9bQfGmTzxutCVjD9YkobdFAB9unDLgdXXWnyT8ztuKb4TBTBjs",
  "key24": "3wdFgvxKknKZg5M4oHiKx7TdBn3ZBZswudXgroANUoBTjN4KXiJYq5u96YDxPhAx7CvoF1wi9gBXaJVjenx7wRhs",
  "key25": "2ek1ryMi66YBEWSpF8pSN469vuU2d8ZZaeEnppa86BCUm8jvnsZbDsBzUogGMWB71bThTus3ziXe8Ek3iXTxmWyT",
  "key26": "nEoZHDW3cJsKBaugHWpDL6SvUiwdXdcZkUxH6nQnxRahkwppUeZrtUP17VhBGYMGgBbsSRjGP66o9E5Uoir5U5Q",
  "key27": "3jScjdf3BrZoLpjYwEazX6W6mD245TpwHvfQBUmCBGv5sZYZVQQW4BSq1SgTdAJufGMiyLfMbESUeNqLtM9Jp5vL",
  "key28": "4f4MwVkTWJs63tvMVUrH2v1oN5xBd7m1vMaBZ9BJiSDBNqnKQiftLmbVFAvx62jZrrmmE1QEvzRqQcLkQFutawSB",
  "key29": "4zBkzT5HEspdZSiFSBowuRSGe1SJd6WckCRG1vPnX4tG5LEj3x4neBUsUieiAYWx9oqqqJfv2DvnfC47StCXSmTQ",
  "key30": "5ShVcMZrGPxib7dhcWi4FoZ7JBZdqFJu6buzfNzHPoQj8VRu8SbqdM1Q6GCCaU8L811jjNpKLs8Tnao1GTyqCyNy"
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
