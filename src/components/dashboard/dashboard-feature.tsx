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
    "qSFvrafPaWXyXsb3Ptx9eKZDiea3Ztp2CJhfMQKbun6wu636vxQhEmPXAgPGsGJDswcy3B4iAc1XR1mpLa1MbBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UHAScY4QrQU5xPHN1WESf2ZX6HgqiSuu6y4CE16dwzyxZxA3z3EUmTTRLeBkyhbyMTTXmSVkqGxYX5WZ7YiBbZG",
  "key1": "3eanb8THX6c8gWA3FJZhBbotaikG55K83xdAYfnz3V9xSwUgWw2fDxaZW55WW2Y9uh5pHkCTWsRxyuJt4rcgGRTR",
  "key2": "2vXK4MdqZUNfpCutYewsAmNEuvZmrmpjWajVER8WQTMNcPL2msurmTydvnTxSWemPu17EA4qVy8aRda211sBntqn",
  "key3": "3cTt4krAyDnSzVbEipVD57qkXmpZ2d7K78tj17LTBjpjvZVZebvQapJfyX3aDsLtoDbjvy1PGudFXo1e8SpBfKdB",
  "key4": "5GvhztTDrLojcmCcaBZJoqY9yZ36751dTZftp2j4ZCYWL8GKgrYxjyHzk57EieVEV1a2fSTbTFGVexYFgbEJ6xe1",
  "key5": "2MCsr3pQmFsktBm1TPCxfiGqwNWdb7LGBhenoc9cnRGs2Du3NnaRGZLXBYo6dDgND3AMWHJmjjTrQNiqSUG584vW",
  "key6": "3earcS7W6BCaeLukozANpD9kZuVrRw3nUfcm3j11TvekKizwb1EG5SNZTcfcY5T9VpkAQW95QiTiWMgXSJa3D3kY",
  "key7": "rSBz9GcNxyf4UR15DKW1a8i3whB9TsGkoDsDndXYDmqe7fae1E79Zgtq8g9zpsz4a5BbbWLndW6Z3nfehMTvmPc",
  "key8": "67EpKT7Tf9EJyZn7NuZoVdPM5ext9rhSYmDfjPdiGPoAa1q9nKHYu8HSncRk1d5XvSsh1uFf9D6LhqzWLcTbuRCM",
  "key9": "VrQktooZat73uYLB97VrDoDE4takyxoSnxr9gxAdAusNRLSr9r2v54HtHF6wFakeiscJkKBzugmJNTyNx7caQQM",
  "key10": "3uo3r9MP12RBpRKNM29YuBWBrYwysLZPQW4HtwqkiPxKyQokbdvy46U371PvHrmHUCvBjzC6GhLh1eKgPqDotjG1",
  "key11": "27N6KLTwTpZMs6vujpby1JKHMazTDSrrJnsBbUPSgJo87xLiRw6zYGJcn499gRbN6QSGGybFnNn4dT1pefFUT9By",
  "key12": "M1MQDznwYfuhcUNhjaSc45er7aJ8ZTovse2YZXAHgAhHCWHNgoGvq92y6EcxmaGgvz21ErD2JJtnwuGwnGWBPYg",
  "key13": "4WAYMYwRWYCYuFhdyVch7CLr3xWoqukT1bHYuQJuZtShzzaCc57drvTJ6GeL6XhoHsL6bEgGSSc5UNZnJBdSBYWA",
  "key14": "2q6Gz8rh9SgD2xuWhgp9XP1yad1HXJeNmGe3ciAq5Ciok64oB6pB9dMTFcm1g4mSk5rn8v5cgWfB9VKPgSXfQnTo",
  "key15": "4DosmtKYZZYoWbHSZVUXckYZ4SrU13nj23kVnxf6VF7ZF9pG2ov1hZLNCn7HWVHxhDrkpjAQdxYenm3dy6aFwutJ",
  "key16": "2ZopnMfDJcmwkQ1stDpWLvM5rd4D9hhE52kCRPQH8XHNcw5WbFBK7Nu7XpnfjFQo3SWXPHgM6PxHWu3CznawjBqC",
  "key17": "3ekpxBwu41CFo21gVqrSnDmRcqjK6j7qkpfidU6ghsdZ667j9GPrqW7g3nZ5JHyMkLzZsGjJsKiUAtD1oEDxwCBm",
  "key18": "3eFrxXtcm7eqMWcUFE5bWsrKHhP8Ym58xpPvbjdiiVeNX27tm7d22EL2Dsp3FTbrXTTUqsihANLM5fLSd5FxYk1E",
  "key19": "5T9tZvkyAESBYtiGNRSmqNJ9DsnWLSfz7iKbY3oV5iXQnMAhLDJzQBAYGucfwzuBjngKKn653UbP3S79J4qKka4G",
  "key20": "3zoYH2bUSz1tM72HhLTja8KYKyszZdzNPE2qf1p83euu7jgk5x8ThTaVS762GpSCotbybqCcrxX4VDd3wRnFFrKB",
  "key21": "pQiPpky5kyNg2i3oUzTPyD5jmj223wnHGL9uc1vhmxTwYQWVSWiZWp7dRbg9zCkd1uTDvRfFbkoAqZ5kVSpr92W",
  "key22": "3H6LDFon1paDznFeKq86tGSs3wu2dz8cGfLcWAXufvYwNW8F6pj5YyBgWx1uWcv3TPDBvkftCFUoKYcUL6NoCZ2K",
  "key23": "fq7AyanS7H6ss4oc96g571kcyVS5XhbAH1zoBXKgRgqks92kLT7oJxLGfVu8ci5FcVcoN8Eh6byN48NvsAJgu36",
  "key24": "3q9SVVzQtBB1JedgCkeXtKKhBu4hhEdZWRuEDz2ULYJKJvJUhMF84RT9wKG1KhewNZhK4WFpeHjS8s1RBDZVYPAo",
  "key25": "54HQftmgZeV1XvYgBEVaHvLFgAw2SHgo9X2rTcvsPbzktHqNgbYyzQQFwChozwYEUcn6ks6m5sLH4fFErSXvFtgN",
  "key26": "eeZkapLNhEXMUHu65HWeQPM6qMrhSbvS18FgtKiP6uxBjAuc3eLZeVzELmCkXnzi3tYhms7hRFmrqLa569p6TgJ",
  "key27": "4gVNquv5ZFjtcD35xC3gYKN1mHYTcvyygnW3fULfxvBtYYBfY8FDwN4H4UFZYmpam4K39obgetLUgneNeAEEvKca",
  "key28": "5BLu83QjCeVc2gVXmWivy8ZNzdLxR6394Z7FzcRJYapGTvk3uoUBr38ySSBM1FoGHh7TZEB8GdadcLZNn1wAm7zH",
  "key29": "PwWmuoRo1RN9Zsogqt6661yj58bgz4xvF4pUEqSuayHqkq5QxznxB1AQeiYSLcemRbWx7gvn2tLN4J2an2x7q15",
  "key30": "4Yb6goaGRjGsSGJn97HDapRqK7qGSyu3DJ5wQF2bamhDhh331yVZ8w4GoDFAwmBqtQymSogXf7qVjtmUKZQC9ssf",
  "key31": "2dEvVFwdBrwea1qcNchoM3robJKUd71LBDLSLLhqi6XcoD9sAmNDbbjBaRdTAddGJ4NeCPSxpaugJaGJ8xqKeBn5",
  "key32": "23UUA6FJG9sgTVmkGX7TUBqCV2MCezFM7t73mJaowhDViLFvDRSaTe76fCamTrbpp7P3L13rTmyB7jK4WwkGKMjN"
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
