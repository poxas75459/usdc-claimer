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
    "nzLANawvX3J3hNsby11odgaA4jYRjQFSiJYPc3FZzdedAsXGxnKYVgVNVCZLqw6VPrRQB8FDotdyGsKvhwtNQ4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k6jhnfJDUFf3G2xk9HAsyYei9anrgX4fMNHiNBeDVkL1UmFsxmKBfSLDoSLADHW98jdNcwbDDeTmxDGXbQmSW1n",
  "key1": "WJ5stNLi4pR1iRzw48NS1w7ZZozf274DjugP9aXh2e1KYpcRW6xevJFkf6XDFfegCZPuRkZqXZB5jbuUXuhThuB",
  "key2": "4GBH5c7m85rgq8HEAbAUZqpL7UK3nrC3dfXsi8pq5JKXikijxjQooxwNrucetfovsnQHQxzb4PfZmueEhqsmhPtp",
  "key3": "3mn5JjBwc7ZyAfz2gJdhWsmVxT6dEoKQSwQ15KBdHWn8kTZhTyBZ3MrqgKKUX5HHjLDcT2kDntuTnATK9ssF3Ca",
  "key4": "34dcrJF19YTGUUwjhVCu6rai6EoztSyjRhoMKkhxwx8VRzJDHQJDLRy3hW6Vs8LJdoGbaVZtQTKNpL3dTXKhPV7j",
  "key5": "2ARoGw7c6GFTzRq5eArNagYHrUNmmoAf4Dsmj29o866Ki6LCmFeHaB6UDEhRUGe1i87QxjhXMd4ayjpVwqu4krvQ",
  "key6": "hV6DRqE1oqicB6gAvsyjmJYro1S3xRFogCdemfTFnb4Wa5aKXTpu8pzKMgEdZZG6cvuA9G42ReKfhC5v1u79mTW",
  "key7": "3ZDm71ctKYGdD9D2EjhifcdXLGeW7YLoJCDv7r6kyps4d9wBijcnAnJDm1xeB8ixtSFFCS6hhKaePGiRDuJgDGXA",
  "key8": "3yipMtcVXFvjWaGu4Cs3hsBanQpE81sdriD3seTtdWtDGg6jyVu2cosqesH4oQfzdrwN4eDs4uwWbbYuBkyu2p2e",
  "key9": "29L6ov3NhBQkVPZfaDbcNf7wd4uhqWSicx42pfsJetQq8J8wtvdyz4Hp1wPQd2XmRBbYUjKLVu5HkG1X6R1Qp6JM",
  "key10": "2pivxYhGauYshHK51cd2pKFVzXn7Fm7gL4UWAW562HnheaUJbLSFKNMdNzn8pie7xCPGnQwmGKfoU14WVAZD2CkC",
  "key11": "sFWQEpceoLnxEcakhgUCNYgbUHhnxriJcNiHWAKipjzyPn82h4wMfK3xGQWf683zwgmTf7DibtLWHPGfvzkroi9",
  "key12": "3zNru2RCYorXQ6jB1AJEaRtMrj9Q6ckrMTcwCTaDiUYTARXeSFNXzcuVbYaKR2HrvnBnvQMBxMBY64MD8f9HjzVB",
  "key13": "itnmHpgd3PbLSdQ2pyZy3UWjy136fPck4t7v5KT46tuG8rijwfwmtfwJBkKUVzXHCWxwPKiJg5wgQbrctusMZXT",
  "key14": "L2EyVZcXzLrFeRsx4CciTHxwfP39EsZ8ZmpTxKsCJWmFbo8WTzCSMmKNdFzAucMeMYFGoAnoa68mn4ZC8Qr3G7Z",
  "key15": "5Hq3cMLQvF4nFpt5hiXNjbSfxnuU1Z6TsXWRjjofoSYmRwz3eLvNmNj8ZMjSrtgwdS4N6yFuwTKcJTgap1FtGRRJ",
  "key16": "5JBWDZo5eLsjCqRoxXqVZiSNn8JiYeHhj8Zbap1JJCBvRY4XFzUhMFw9hzyQZJgCRDc9ELjp6Son4wJpf34BmWEe",
  "key17": "3d43oBoCwT9SUv7eWN7ZgMFKTMzNtdzXZ7tezo3R9Zi9pi5noa7M48hyMT2qYY6xQncYrib57Np6d4qi1DN1rkkP",
  "key18": "47YrFSFAqGpZS2sHhMZo7LdVsYWEzW7LroKqk9wve81DLNE3HyXtGNRYBjuwpf9wRzu2gQwdm7xEapqnSnXuxTXM",
  "key19": "3h2Lz4uXUYT1CGzRymVguLQhAjkThQ7DvCKdyMJjhEZgvv9s5DkSiT3nT5SGKtnLZxEw7R5XW9fesAkCiMyTY9J1",
  "key20": "53uLLgruEnbn1VBjvgGDwAS9zCNeZkDyV4r7t399wVzjDsvccsRRYrBpDJ3Ehn15eRXpqsUgBdB7YwEEPfc63JiS",
  "key21": "5DnUznij61MyLCVN3xuhyNrtmdofXoSSJ7T6whsJuEeWfNUhTk2g63h2BQofK46Mk14k326PjaTaZkboKmzjqJYY",
  "key22": "2gkAEZ43Fg7WxzTjUPyna8xTdwsrnRWLAG71unQ2kay9p8EBNRq9frxtEVdYoVnuLSucEUDQKrzNEdtkv6Gs5zL",
  "key23": "3oQUshshALfvqS4gNAT2FeepZKr238K9dSpvpZ471imv1y9E5xiuK7RmDMkLeutmGyhiyZKioHUVB6kfFqty5AWA",
  "key24": "5Va6bBk8J2d43MwN5PcyBH7vaRf2ETpmi6pkPJ3i3qpFSpUTN4yo2C2fu5iECtDinexMxYfdB9TkfWSosRiAnW78",
  "key25": "5FFH7JZo6dxaCrbko6GAdqNABMSYeTMoCbvsN4LET2No7R6N3Lv9oNRC4dvbpcaaQZ9pRNGc8LUAXz6DYuL7c6cc",
  "key26": "2BzExMGNR1K6Ci7NJGfeWVDVaw1cXQJcFa3qXFDnbecMnTCHDsAmAFFULKgDwYo1AyRRHXKjxYUvt7diQ4fzDp8P",
  "key27": "5ywaey3kmqcxvV5g2F7JbnQUdAcvrfjJYopMvrsWbWeySx21gvJQQgmwQgZfeFtALszZgsjj2CLBbA8rH22GJbfm",
  "key28": "2eG1TjnrDEdJmkiuCZD4KK56HWS96yevDS8rwQTwDRLax5jv5DAHeqZJKS68fCj319B1AxDe49JEF524GfarcX9x",
  "key29": "291qKVdQ1SZe5GHHamNApPo65UWzLq3hNku86RnXW74dunZp6Kw315qYxv7ubuhsVdnBFmv66nBFzCtvDeiV4VcA",
  "key30": "2zNBzw4FfDHYprPiysNQJoTHBn8FGkUxFiSGcW2yadezqSEhd1tJsujiuf3j3LURFyNTLinapC4YHrTcnSUwj1km",
  "key31": "3XEJeSc9BSSst3RgaizJWdPvtHTobCyUFy8YfQiLQ7rzHmFvkGT5ppVgwD4AP2AieYuDtHAG5T6Uc8KWjFQwUcVS",
  "key32": "2MEbmph2fWnJoLkBVMgSaeHV6mMmr8xZ7VDv1JnaL1DLKCR8kDGrdT163syxT47NVccx5qdZUzAksjY8K6pfskzH",
  "key33": "5G48wksAdxPBAL22UhGK4fd61cVCDGTpvNDsEffdXmpZy4uoB5UmeGUoec3Wgv3c3B2wqGMyDCh7gspLYmziTAmT",
  "key34": "3DWzQ7DVHUc5HA1KzCQNQfixqodcnEi1Hhi8Bxtf2U7dRVaN3zn99EgD4NVJrbb8ZAHWEKdRPY2aH1Q3CVTFHg13",
  "key35": "5dmh2Hug6Qa4K8RR5RoENvMNGCiEVZo7dMdtQnHuuiFEJxKKCkJGCMTwXj8c6gRXA9xwdY9jwEDJSbGn5TGpyaS3",
  "key36": "2nThYHfWRByqJoMb7WKDpCGVeDGBZJufr2buA46FsnWJFX5FekrsZuD5aSBwvBSyJrADSLMrCtxWEmAgdPxHLtTF",
  "key37": "28TsjcrjY9MCgHdRtXPDMGg9jC1PSxk5RcvCTfnUTkuE5zsZTtphS7YEJ32wg34QVZXY2BYgx9AVm7NngMRUtTzr",
  "key38": "3RyGN4mndy21o3BJfCm9PJFNNcYkoUAQ1g42sSUwC5sPWpedjrXMtppinCeEcN54GggDAeK7UYRaxnJPGTisoyka",
  "key39": "2Rj5s65VGb4fACrhmt31hxqPk7UBCTKJYocS83S1Y172zZ6F2x7VmbttW5ETmrKWWP1p6oWKsKWdeZJ6xJ37k9Na",
  "key40": "5n9MQqT8sNQ1uqTEXmAnAgByy8Q7Ac4FrvxX5qef8BhXwNwAnnYqSFL4NYEFxYBYAueRQ5h8XtUwk9AavaiyDrwC",
  "key41": "2LBhjPALnQvDPqnS5hK7ygDg8wpSC1tpX1CU5jan1abMtzJ9CSWRC9vuTCDHdz2aLnoLCKWV28ahRyLNXHMXNCep",
  "key42": "4iack6781uVnsbxaoX1s3rfDV6YV7eB9GdeZ9z6pBdCZroBsjej9LmW8fQz1meCUHTqnp77VrFW76fcBWqS1DFDY",
  "key43": "5uSP1JQW9tpYdLDix7yXCeARNddyWofHXa3uW75h1c1ikjRQr3YMGkxWkwHkV3GzDEwYR8p3rWa2uyF8Gsremm2t",
  "key44": "5iopFkmxi9vmTBVwGqZiy5164qvbSekcm1npumsD7occFGMhurJsfx9fi5PYFKJZRmhwdhcKjc88C3xXKZ6BJmLk",
  "key45": "4qY8o6ZCJtYpPDASAfRV9BxD4bR3FscVbDxBkNg8qWspkY6sRMvhX4YjAHxeqsopd1B746sJu1DmCM7K9WhQqZFh",
  "key46": "67U9BTKt8XwUeegEzFwyHYWz61SHfzNAkA5tyHnpkuvvw1MrtqrsTeKWN85ziiBXw4BkvCwZVNkhFwNTaE7GDLqY",
  "key47": "3dq4Gi7D2KxHdiPwHHfXfw4jSq3bZJ3h57kiN2SHcrjRAHCqX9F5whR97XyhzkruP2LTu247dftfZwz1hPzCs3Dt",
  "key48": "jdK8WpupWZeyvvSXatjxEk87stkwvXpaRwTYBrdWRpPHdmK3wpfUiBVNyYhjWPQPek3uvH2rFwvfc4Bz6k2Gqnp",
  "key49": "41MWNK92Qf1CUWyfx5dz9dY6e5JuK1B9czDaMGydxBNcP98cybdd78SwvNQf1JEYhjFEcDXcW5hDiRcjDhXMhxk1"
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
