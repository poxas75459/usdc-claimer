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
    "3JafLcNwEEgKtNT1xHnuXBzAbPzygoeNaJ2EBALK1Si6hVY686hj2RNQKgED1sShsjq5ZS12nsxhpg3zrVJd8BJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FZx88vmp4b1yBYhPcGNY2XXAH4B7jxBDLtELzWZDzaoDMvuyHzAbCJ42PAQgeHXjmYRR3bwB7U3dTAv1rpZA974",
  "key1": "31HGDstoV2L5PpX6pd4UELF1PzjvV8Yhf7jA3L3k2FYDio5WFrWf5MqLsuHRW2vScea8mxPHWH3HKQhZAkNY3ibY",
  "key2": "4ZgicS6oX3JuiaQ5JmWevUx9NPQzncqrs6NPsZ8bTGoWpasjh3XKLxhfScBWTKezZWQpSyRy3vR43xi3KWqYEECg",
  "key3": "2F341bxLaSFZDY35g4hs4RJ5ErJamRN8uAaDGKJejoJYELHMtLM7xH6MvaWL5ft5kDXnRY6yNb89itPFTrRmoBQb",
  "key4": "4JhRYjAXY8ZRpRGDqyuk14tFbVtmvMqKkbz4bGeWcakGRjZUNWnmUTt19vK3gjNaUBhUHPpFnay5x6cYj9jhJCXx",
  "key5": "2ZdQon9CUaYznUae9uzaJ2PCZWjBRUkk4ZBKxmS8wZFYoxUyfBfANQ2S6fwT7sisLSDQZy7fCrEhoAmiacvm5PwU",
  "key6": "7cgdqi9Nys7YZ3Cy28HkFSboxZjT89o6khSkuE8oJqmX1pjN8XaPakwa5pGtyL6a3FVw3DPAUFStV1Xse1CCjbr",
  "key7": "3skbzvtC835rP6QRFuvrQBBYRkDATZguniAjS6GPMK7yNWjZSTBm2ceA5nwz54ifSC7MALxTjPNNYtD34NrrTJEK",
  "key8": "3AvYfA1y8R6PXhVy1TwekxiMvbBH1jMA9DVkmhHzw8UFfJ9GRNJLPDxf6EUP58WEdawEVCg6bcVqP3E8C2x8JUu5",
  "key9": "hJ5ubk5HooBCKap9LrrP3AZQkmPeELB1GwMWZ1aUre7wRR1Z1d5x643RX138dGck32sTTqwXyd4sZw6jQH1GbHj",
  "key10": "iMUZ5kB2JCSnrENTMpjR7RdzKvevaHDrqgkGaL1BR3uZi3DWKieUhSiZvma6ewuPBVDbEjRTnn4H8UPKUuEFACP",
  "key11": "3V5GiuoHmuDEWsM4KYuN5DgDkD5Lw2UGsKeHYEMNiRBpSjAk3LRYYBBsRondsYpw9daxHyJN18guT2G8oqE6hmcY",
  "key12": "2JARbYgZLZmkqUhwL5GXmxTeHuTXZaDXnfLpbbfGGJMxP8Y1vw9swKsvsKBBozEszYWGKhT2SKck8BWVGjAYLrVT",
  "key13": "arptxkUDrXnM1uvFhwVn29fJeY6eyJvPffnVjxRNMMXNcxctAST9ZdBmT9TMPX3n4kF8MPEzVEZunqi1CCrD6yt",
  "key14": "3fjUxLf5SVFYfxkJUBFGDGuCmDT94k4mLoVVLcc4ZXZVjwTn1sr4EQoFzCGa8DGbe5KcKG71gPUdaeL79Ftn2Tst",
  "key15": "tkqyhdobXRrFXZuyewf5q4HyVjpgmJMxVinW9HXmtKEHzcNgJEdauo2kEcZMeTuF94hCBoRGGtY4qMRm44dxEuv",
  "key16": "UGDSsY13p1u8nktvHuyydFR8bUv5Q9uZUuYqauMbMrrKpLNFQkGcKQxoLf7x5KFbVj6cJnNqo4VZb4oUE5h5tHJ",
  "key17": "C6yzVFVqKVmPK9vExhszKmNmQZmeHq8v5J4KnT9XeGZFQB4oZkm4udJF848YQr1bPvy1WX23xoWz9owcoo4Yruj",
  "key18": "4xBqjEnzFmPmFBup61pLm7zmqtpx12WxZrsiEe5SkjnUXGNehoBqPjpDsPwHRk5RB5yVbT2WYjSUdQAg4RAFmYvq",
  "key19": "5wkquPgmtZQ5WdJGSYFRbLrqaq71KmT4W2WNXhLfQzbuCY63kLUFZ3rsyP8F2R3jKE7GThuHnhcbPWds8EAjR5dy",
  "key20": "5gDKe1vurBwZ8Kvc99ZbYWBgVoWy7RsGD7U1WSeMcxHWRC88gQxWiRmpVN22js4oXpPNmhbiTna3urXnG6v9DApA",
  "key21": "5nYK9jcyG3ZzsqMwKZN81VSwSyhpCjHUDofLdy7cVa7q9xScxRzTiBGmqyKfTVAGhxSxjKWcUAknCgkUHvhVbChJ",
  "key22": "5M9bpJUGpCAEx5LH3jwyjHc3QvMFFnk6Ka8Wmpvb1p7dBPnT2vc383tPrB1Z9S1mfBfxWwaS5WmqKZr8Kv8qUzxD",
  "key23": "5xADYNE33nyZ922JGtSLys1abPW4ArtJ79oG7EdWeXheKfzjGPfrbc2Lv5AGFM7uSM2tFJsgFjPQLuSoNqSJAq6e",
  "key24": "3NPs5xDwN7JyM7waxK2KeC3F8miqKKx45B7efn7A9bze5Gm2Dyh1Ewt4RVAY9jyfSBAn47V5L1SvBi6Wk8RLPoBC",
  "key25": "5oa4svZuHUqFPhAZnqRZCeJLpvXTkM6q2Tp7bB254UrkTECGf83ofFGkWJ2uAfk3tjtar8PWtmpkYcvtB5SGoWqR",
  "key26": "29fmEpCiBmfkz7hrPUpw4uiDPnwYBKKz9Y2dgn7BNrofLbAGx1dkUi2QdFKfvEguyAf9uWHMEHBPHx1mXTjnZ137",
  "key27": "61KhDogPxwz2jWK7o2dJeCDbobRvKtGQcP6X41x6i2o4HSm9vqn37zfCseHsv7bExTKfzf7C6HzZiNVMyM1nmnf2",
  "key28": "2oUeiNnWVDnGaezMrhzK4jd9YyM5jrNPyrzwpn8Aqi2hAgA3a4LE6CTBXsjSqWjE7or454F7WcsQ3PZzTskAuo2h",
  "key29": "wp2ii3UWNrqKUwHqRBjLURcEEkKuKcUF9bjUTobyDD1KHTGBeXd1gfSTHgmqSe7VCMvWZoZfNsvyQ6tfEgz6ryD",
  "key30": "3FSsTnQ6kG6dD5JMAXYKJwg47FR2oAStE32Sb8RvL55RR7dbB9czvC5qHTYLUgHKrSzqqwpMnyirwV2rPwQvRzdf",
  "key31": "4R3cDspEtxF67EQhJUP82j7cn5UcHPnKau2Fcdp1ucYABBcRaVv8P3NXVFeWQrAW6M7gyn3gFj3iXwNzYTxcG1q1",
  "key32": "3zfjEFpDQZLnBeWwVrQXSc3DXwFjbZt7qF1j42cSi7HXQEoiZjKdJhP1RzgaZgCdFyTZibwBFmCkztvzycwSFTSD",
  "key33": "5wUpt9LGqCLdfio4qiEkWkY8iVzZEztkqfQJ3icpAWhH5kF7ccFnbD4prmy67DAA67gsaYfebyMUUGEhJAaitWaj",
  "key34": "2XGNjBnyh7ELzzMBbjBga3LkzVGFX5NnzmdqhG4iCg6QLqVLyxBR9KsruomHMcvBDZstNbEVdVXqkgs341CRSQ28",
  "key35": "2gctPzxBvEEkSSTXrireSng2vFU1Zfdh3C81iPKW5Lsmkpwy4WBDQDpk22Ht724BfUsvfv8pAftvngBRGDtaSgnV",
  "key36": "ZGWBnaUtw4hF31sJUs3Bh9YPgHHcxVzocgXz8HhuAAkESTehQqqKXuU942D4ek92kWLSpjRqHkiMXGnEEs41ipa",
  "key37": "3FqFbuWvYKehMrz541TAbnGEB7MU5hFNzRXEjZHTDUUTRyEyY7TijmemsqrLrRawk3ENkm6g55gYMhtEiWCeJfAr",
  "key38": "hpbAcanVY3AciUFDk6S49WdECu4cCtXwyFHkKGfRfXZzH9GNe9D9RxLf1obtwLsZuPP5Rg4eqrQT8NeAMEJVmuE",
  "key39": "58Wc6M7PhnfNDgs9xDAX2v8iEvFxcPDHSRPRquHwc3A6oG3ZNZW7Q1DqDZ8d3hrjcJzRPPjV1p55kfxi3aULkV6s",
  "key40": "3ZDd3iYAAWwYpjWog2yYMyCi4oBV4XAW1V7jrfAMcTY2qBsb25noJJZ5LUqfnG1fw1WzAgovU2qBaRD74beKLw2"
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
