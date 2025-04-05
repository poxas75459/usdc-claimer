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
    "5LNW6N8doP2FW2T6atgsx55v1kRYWKgcJbYe6HuqFF7wppts2XEseunX7p7KUQMp5SDcv8hUT3s4XsQ6sxC7iDW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ujg37cpdA8rJKoVox9tXkAK7s7pdJym2M5LssAdXibHgvVjbB2eLEsNoy6mSJtCym7Nc6GsxYc4CQw9xr5tdBv",
  "key1": "597QR1aG4fNFiy482QkHL3eA4XTvxhVvgauEbB5hY64g9bZah1hB9JyY82EL8iLUqivzHF36bia7s7Ru2dWbTQAP",
  "key2": "3PiAnjZcfcnLTSNxLNQniiNANki9vrPW1DELrdgXqXx4fADhTfHAvKvLnSiLJc2WRR5khEjvKsUZL2MRfa1kD9Es",
  "key3": "3VQjRgUrXYh15vpfvwfhHB2fQDoS83iVkJBgPoHfzuD8PXD9YuAaaSY2CPsCQWu6vccJyUyFsn2cxtHHXyY3ua9H",
  "key4": "pEQRbfWwfGV1Y6edmGuV3WDuQr2sd1Jz3S7xazzyu2PbBKcYr6ArYduj6B3aEGoyCcXwFeNw5agvDKE1f4AVn3N",
  "key5": "24qWyPSLmVebDawtNNb3MJEgFwqVagG196fXn8t5iBXMkKLDh3yV9xDYWTuygXSCZzXWemuxJtqdxbaYiBi4Nhqf",
  "key6": "4YtAUqeCxFnm8SAWVQMxD6VbtirrSwGuCqP8Rz7duLosdhwQ9vVbuqBJCz6BPWQVhbWdoMtdt6RiW8cSa52sKrr7",
  "key7": "KoZq672Zpkiec8E3uf1vRJUL52uHZP8RvJzcvaru9ZqJ8oFQqWbaVPUYMoUGayqZcfJuXgpxuz3TCqCtGHAHx7M",
  "key8": "3nrcfUPnizxjRjySa3qYB4UBEHbmdAAyikDTUvaRiwJKVmWy3HJGhD1XeGogjiDG3LQp6LTV2A6XWYyqDta2RUWr",
  "key9": "4zHdwsgvbZFwx5R7ndhkREKtvme36tJ4RAQ1bpQnd78xqTg7dyZb6tk8BzoBWykgvVmjG4VyqrQ8xa4mioGnoZec",
  "key10": "4oDKoBfF5pyCPBQn4CTphBnLiD7GzNKPwufJWeBG74T5rJwZxazJ88srf33uUim4rFJMFwAhvrni6FK4kYdNRi37",
  "key11": "4gQEpRUqwK2WZQdQmLgFytcUq6aSZCmbkAFHuXwzAxcTLRMEamx583J2q6ykzHoPtKY5KFULB9a56P8Nh2MGVFw8",
  "key12": "2ddDh27Z9EaQEBvvtjxMos1nWwJ4W9NxAKqo9o1HF8c6cXYmpFWdejSebAdWUgiouxsCFup5MRHaVVewBdJ3GL4Z",
  "key13": "24BaxnNzWNW5Nk7SuNPFKqQ6yj2JCGscRLFie2HJ5FMEWctoq43bEL8wsZkCwGqkpGw5S2qTwQf43SczdHmsozC3",
  "key14": "55R126hEGKTYq2XxXSEM7iaefgxrHyr4Fe3ke1GdT1j97wDB4YfMkJmAQ2Vmm5BN5N8sHd9iGYaYAUzYPBd3btnq",
  "key15": "MsVTaKzu2AzZBdDCqaoUfFJEVYwyje9iDZDQnfvpXPa5TvMNFVGnnZkJcvpqpNuFxsxaNzvAk5gRYTuxsqMajc5",
  "key16": "473rwUErbL4hK4NdGHEbsYnn8cYEcvYiu98W4NihokbTUAxpXZmkx15V9cpLsumqC2thSCYLMJQjKW2xRh65wGsZ",
  "key17": "f8wfF42715qipktFZmMMwdrznCCtNEBgregdmmzXeDNmgYunDP53UAULK3LGpL6PRJoFtGiZey28uTQCeqQibrZ",
  "key18": "5Za9z9RFmMBiDAgXv34rSp9sUh2GE3NVXmnMLz99S9pAxC9Lsbqu8DWp5ZZFc5GdW2uR4yz8zuPksNSeL9yj6WWJ",
  "key19": "55pcBNbyogMZNswr25EAiH39s9ZUYQuMNGTQQ3s69pVgpN5LgJ9qRmmM9TLczaYusKQFJ4SSrsf3yYvxtNp6xxpu",
  "key20": "2rbhdHaXQuRhjgPEZLqPmh14oXF3DsWEj742yUnkbxrdquNbdNeeELs88eKt55825mzxPdGRCEo5YgxTmDNuK7Gf",
  "key21": "2wbyoBUG6XiSYZbiFRPyQj55zrrwXWEebHs6qHW8dinC5wNutFKdAqCmVk1z1xkjkdB4gnHecTjfcPUE3B3EYqv4",
  "key22": "pG5EsZ5Uor2YTy3HM8Ucxe21TPqYo3a18MGRXwrkz1RxryR2TS2CAFQ6oJFhtFEfrQS5RSF62gkpnEgXtP5iidJ",
  "key23": "5Lt2r9qs8jQ6QZv9eLBLvvp5bW7wfMNupKFpbLJCKhdX5N8mMqj4gHUpxW4tBiXLnSCYJijTdQn1VR6JhKTnf2aX",
  "key24": "4hqnV44tNtMPwXKvouYxkjmPuA5u87H5gRradgTQi3G2CGn6pd6qEH8p8eAyGvEvUNaEuzTRKJN3g2ZtjFzTNY2B",
  "key25": "3kTC7z4CfRPrHgaFTETZbbfiaiZ91juDPWZcTRPC68S5eRXdkhUnmjsmm93xb4BMif3p5wGcvmRecVjBBnxZHGmb",
  "key26": "5bUXQGLV8UALw3rVEKDpXC7ntEEmvcA4SJrwtNvdkFde4hE49pqVAsorz82csEDjdmLtaGv5j4NAdTjD4TiMGKv9",
  "key27": "5cn14Pp1SknbB1gH7U2N9LDqgznPjZeDbsSPLC4cYQMeT1kxBfMp5jR2PxfEc45RW5a9azWazpBsHe5SiVQyTavr",
  "key28": "2ayQr7Vdo7WbYbw3ikNLrA7NB8GJQB2zdAGs6A4atD8H8JxkrjbFSJue1yaAitmD36DHCqYkvjBDhHU1WSkerxaR",
  "key29": "VwusGtowMQFrFCvkRSvA8C1pcfkidxbzrod88TvFTvbPuxJQzZVh68EdcQXVSGNDUytKnPs3LDZXqvY2Lafwegs",
  "key30": "viuqdZ5GoSG4ag5S7pUvaHX21wX9BccfFfNVtd4ZAzDnDuTPpaTyGdSoMLaFxWNciK9EiJ3T3XbNjvctrj3CseW",
  "key31": "5kZUGwqEywf9LTiUmsAoiv4mvVTcf6RC4CLHhiyWewJ3kCo1zS52UaQqWExW9AboC5yd7oSzCjpq4fs6tC7B3ZsB",
  "key32": "2c3rhm84RvupEFcU6i3ceatdTLgd4DBqTpyiBb49vmfK5RE7uVWLYwZfh5HCr65TWhFnjRPVW8nEYHnmPDKjS6dF",
  "key33": "2LzwuTpbMArPuBMhExx436PjLenhjoYuiwcyPFSwwqG4eaDQGuFTVKAvC5TPbEDY2rGTW24GvGwVuzqMCiV4FxgZ",
  "key34": "uSgfrrFv81F4ennQbYJn4Rk86e4syr3s989cTwExjbmCn19asZYiPseKDJaqEkr3PE6VCy3Ars3ddfF5cwB3JPR",
  "key35": "5N4KjkooBororkut8HoLignTRjZJdgAe3Tpr1qqmvCMArVVjPL1L4o1fvwTpXCrBvYZQRcei5R1mk7B7uMSzuozN",
  "key36": "7QjMUsGBuHbZR2GFtuW5kdHUjAcMseNgDjB1Esw7MihZhEfC68TESafx7ysw7HiP18qKZEAmZYbKxmihP9EDMLF",
  "key37": "5DWZo55ovLi8U3XpUuvebYWFJjdvkvcWqsKtU83HgLgPohV4RTArFNSjNsahexJVgxrcJDijvv6nY82Y1AD439iA",
  "key38": "4SUbdEPS54kAq9CwSRcjF3rfX1gsxuq8GjGVWujXEomxJzFvjrZszr4PPbEKbuDZEGHPx2PQi3yURtXWrCtwfC2J",
  "key39": "rRkydFEtDkengvwVoRbXNTcrxteDT2AqPQHjjV1N42uj2vvk1BudZ6yruZdsPyMSvtkFjRXomMqykVjgeqd76Nm",
  "key40": "3VYDCiQetwY2py92dMStsexdv7m2F9rqd4crrRSqWnWceKyzzBTJhTJpBQ3itJHDrRWBdud8PqSRsVmoeQsRMqmA",
  "key41": "67GXtaKCSBraJ58cCjLtCtbYnwrrXGbTVT7H1xgoWkMFAKH58jGfFy8Y3sEQM7dK5K9zgLzGbGjp4tY4HAPUXNYu",
  "key42": "4apjcPzAgLJGdvxZmm2gQ4GkZcjj71B64Go8kLSjctddHZPreXXNM6r4s8iXgvQfAw1gWxFAhnmXqqTw317Ux9vk",
  "key43": "43gmT3NAN1ppDUVaRHHjFPZsjQhtciZj64AoVFNvTE3uiLFTMie4SUJrMg8iE4BuJAunLWJKA9P7GocDJmWHGWqY",
  "key44": "49a1Y7W5k4zc1A7X2hpQu8XJU7TWt3qr6xwCpDay3Svc9TNxh8VPG3tJCiaEucPxa1reTBn4Ms4rnxqHaQNUqCCa",
  "key45": "3K4KWDgphUDThwEuvtChXwvCK5DfY6L5qhoYkheph6cCabYPKV44YUiJ6wDZSN3LutJLRi8K1T3L1Rwk7bkupkeS",
  "key46": "5vRC1HX38hZtszRoFLLQD6dkER62ucR2dCqLn6jnDvMsWBcMpKhd2KJ4NBqD9J2tPiuL738gC9FQGYGMtsZLT8MJ"
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
