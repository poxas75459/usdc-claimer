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
    "8T4DnwbdDgC5iSyryR5EiRDNF6Fuj4pZetmo2Zd2qXPqnfY5bRc2pPLMencqaQjDz6NxwnYQfAEfu93H7SZrQTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T8Mu2zE4F3qcitWSJwrzqRVe9TyjqbA1CEU4DLDmfTaQhHBYwH7gk7ZgScW3A3HpYdzMj4HNFVHaZu3jLnDTF7U",
  "key1": "2n4HPDKQ2GbF73v49MSW2Xkx7SD3EBtAupAyUvJFtmXSr7gzWRqEQBQdNma9B9xtuaWq8LNdBNKxdiSrHmVsFd3q",
  "key2": "3Q1AA6bLxkeDovBJeorsWoNqvd4JSVKEJ9GUi1umprxuJfXXLDFi6N2JmTdQ1DsxuqGYM2B4CmNzXXPTMjHMFtf5",
  "key3": "571wcpEdMpX23ibj6Y1BrCfaCStGCCe5vcaar2piXh2VoUWnNtnSCk1Pv1NsQccd63QQm9Wkacb2eZYksfiuB2H5",
  "key4": "2CAzRU3XV33aGkQJt3SAnfRhCJCUJ3R2DHPhmv6hfUPE11dGiCXMPBZwQTBgA3TA5DbVqMGMzJQsu5wJ1rYcWbeZ",
  "key5": "5A87cRKJbG2SkEngbfMUUfXUxvmhr8kA66SfcyzQ5YgVkCgJRo5VfAsPy8fRWWK4duDA8T6zXLt74ePfymfFriB3",
  "key6": "66gwhZnM6jfkRee7DS2rnpZpe8bKuTTcRVt65XYfvJYuhpxmJJ1UEGMviGuxx5UzjL1wLja1MFStSpqeNdAApjvQ",
  "key7": "3BcMC2w6WXmgbAZFADGzeYnjuryFYTRHBzPy8xvgK1EQYCo6FS7EFJjGx1V3jipYsy71FVzkRov1Aj2RMVcudNqT",
  "key8": "2npzGG6B1tR6EVww3GogdvWCyrLB98hnjp21ZTiE3NBGd7xy6WDcCb6b8joS9t4R6pDBRqWDtBvZaFtfTrBQZ3M1",
  "key9": "oyoZ8TJCTXuPQfQQrw8h7TtB2XPhfe5pJi2RnaFGayS3AnS8spMq6qS5JxBhgXioMBsq4h836gZhmJLjy1n2Fnh",
  "key10": "MVfDHqkg4nJA7nCDGsEgAK4513wZgs3UjNAmBREdBvs6n5zcSzxyMmMDEsAfYpn9jJL5h9TUZrNn57zA7ZTjifw",
  "key11": "2z8sffphqePTJWiPAEVamrDqDwDAJjFBYRGhCWBcsiDaS7SRrhy8zUYy8jJwNABxpB7P7U6b567PW8tpqfWnyVDc",
  "key12": "26Ekj9BMXc8Y453zjPA5MTT8KZstHhZAX4MuNqWKL5PPABKyG7DFaf9RgvrEKj6SY39143WGgbeiTLnthpRJxYqP",
  "key13": "5YF5oCguXcQCypW6t2VxcZi3U9msZbX9eDZDE9PrFarGJWxVUqSc5AvtNFG77UFpF3fDxdMrhHUYQXxbRDvD3Akm",
  "key14": "dV2o5hFkUyW9qrvryog8m89VVbTkmxjsX8sa7fhmzDZpcQdNUCZyY4CYvEh2X7nmGRNbY9Ebmq5ZA6yTXpGsKFQ",
  "key15": "2Y9FLJR256R31HcaGMTRKq2sCZ2UfY2MBuXNNJuRHAWC327sKbJ6ApQwHgQK5xwqxtfEj4yJiJaNdNYHH93iRtZX",
  "key16": "2qSC5ZD1uD5RpvDv2Eo2cVUkAQJoNVBFz7bf7rRYaw3BmppeQHB7JYPzcFdLs5kMkjZnVZL1qEfWMmNw5yreRvdz",
  "key17": "5i2Fx1BHib9Kj8b7ABazKqxRtyevLEQZMfmiAtoW8wRzAg7WzbaD1t5YtTzM7X1w9aGNAeYDmJhiXDZLvShNoL8b",
  "key18": "ZTv1wHdhFiuZnLG4Gv8GgdLiUAyu5ZDLDzaXxeZvg2UuTadWu14Dms2YYxsZvrvTNFddd5Hy1XK7nY2xxXVxCTj",
  "key19": "2ivLQApwVkmqYsYWmWGNxUHnQYdemA4NYq7Qw6VSoLdcg85hfZWFb695VcQXipS9AxRdvFxQxkS96zC8JuNUom6H",
  "key20": "AVqwH6rE7AkEGrwFS7WNYqqErvmVoCMq4V6SPw7xfusmJ5d97g8L6HyFectYqyaQhgnRX5gAeZFv6xGjHWy84dH",
  "key21": "2ePWceUz6YEmdhuFv6xGaGSmF9asELRPvUhGvcXDBg8PU5vDrjdWZyuKxFg7CrEviQz1JgkBVswqhLzDGWb2MjcZ",
  "key22": "3y6HCYJeA2P4cKEZW3ynJurWXahikY3zuuTitiQJYjbFKQQDM5sPJuSDcHYBGeUdAKSLVUBb74gZ2aq91mTD9pPp",
  "key23": "2oepxVM4raqZu2aZ26F6xZdMsNYdmYskVExgcnP4qj6HTEjfnhv1WeVgs2WSVB5gKWiJcSBKPy5LEg5bBE5AtZ3g",
  "key24": "2BrKB5KXDYRNXW7tKTkb5SrWoHq4WWnV8vEE1HDVLBJVyEUgKTQYtsvRaDWDd1Ajf7byDATHt9jE5odfjFaN6xBJ",
  "key25": "u5h7BJaoQjXWojThBouWH9iQXJvikayMKQz2nRUAM1KGdJjciwzF8qJk2BgUVRjRvPr3ra7mHhpBpjbmwc37YKb",
  "key26": "5tazT5fvD8b2ZGFMRRH5yTWvE2pS9w81LSiUr5RvrBhTu3TJNm2jYUzir4nQDyJZ4wMVmimaFVY2X5MMZT5rjYuv",
  "key27": "2uu8xkw6HKJZt4gaVhz38G6sCAPna182y33eRH1cQMU6Kk475CwrK1tGVeQfPXbRcvoAF9aQs7F8ebzLdUFNNYxq",
  "key28": "2aAtZoXDxM1RXrRzk66wZTmK7kGGoAx6Fqzk66Es6itSB2wgbEZekmcSHGAMKYYUXcqcAzfLtQiGae1E1x3hX25r",
  "key29": "34PDDUgtfGmHa6DkSnWExbTsTDnZn8bCEtxieeV6xZeuaoiKtDPQq5YN2w6U8AFxeMiPkoeR8L6wPvNksYPTuXaV",
  "key30": "fghhzdkdfcKPuepMij6Vmn5ZxdRJTnDUPEgxzLAsXn4JJhyC1qzXDosFF32YEaainPD1CSeHu24PEEukwtbWC1b",
  "key31": "3MDYpPw2snCP92zjhLSuhd5NPa14e9ERGjsEjB4JNET1M6jfTMs5drKhS7QtbtLuMEkm8HUdCn5DrTgyfpbZvmDf",
  "key32": "2XJq7GHPAbVX7JsyM2p2URmvo6GFquzCodSmmdq6NT42fqUmivTgyTTB1hvaEG6hZe8oXoumd7MudwhbLjSr1GN7",
  "key33": "5K8KjXp1xYVzRDe1sXQZ1xh99uLNsW7Cap3gnaerCQ7fmZiM7A5bQXNe6fcX9aQ1ixPJrDXa8TKequSCcatc5grT",
  "key34": "FKb3beFzv9bpUKSUBMqCecqpAbbV7u2qXiPqFjaBU8ND5aVfekzsPmTNigJvrUJxDLCLkXdiVpNAUzjF67ENLno",
  "key35": "3HBq1DvVQuXj9YJ9dAeCNbaoNrXXT7KUots9VrH1De5A478EtDWVGUXp6VFp7wPywCLpmNfjVwc1evkmWyV85w5S",
  "key36": "4eiJpQYYJeXYscDvmtsohfkTCWswH4ZAbdSuqYkYGU2yMBAxN1mvJX3tWMyntuktfF73P2zeg4Dcye1XP1Us8KF7",
  "key37": "VvYr2D6y9oCYrAvsrtJHHvxq6Cvunj9pN8qJMauictTuk6NkJYG61XNV62gE5e6ve8iZZmL2Lu1RTp6CMM8nEcf",
  "key38": "wQRbTwVUzt8aJTYocDcd4TXoJn4xbrknyxSUXBkPQNxkZGV9CsmMbar9sDQkNiuFcMTjSWrAvJMBngMewNuTnUC",
  "key39": "c6k9JbVt8Bnsk4hbzi94noC7RhWX8QcvM4o6jw7ndNKgjD9iCc69yAgQvaBgjBBpGbjPurX95npdoUY6eG5NxFM",
  "key40": "2P8ZAtRxiDongvUsBqbkwDdj8GESSxipEr6QLxyQXztgh61H4h84BjMMVkUM5Nwyphf1NAgV6ReXhegAo4x4W8So"
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
