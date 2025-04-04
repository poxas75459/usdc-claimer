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
    "4yuCXt22mrpG1UfaxrjpoXDtGd11UetmqjqhbTJp3bk5WACdxpoSU9rgKcpUAXKr4bF6qoZZiPVVmcZHkuDp7Xmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64rKYiR3C2iDr1hzHgGvpkccBZTuxZciyo8ho4TLQn2sm7TDpjZFNSgqdKeCTBCxUxR1faCMjedB9oY8i623BB2L",
  "key1": "2Gq2S41rmbEe7A1kLiNUbKFxG4QvARA58hTswRMXZYzto7GQm7rHd6EQtNNiMvbLdmTReaAzJws7Pe6jpEx66A7U",
  "key2": "67bwi6kt4gjAVfR8JcmNULjDeDf4f1zdo76FMcNhH38NwienY9W6hLxovuBsmjnrMx3MXaDT2ponJmr3QHopCijB",
  "key3": "36wXXud8FvCMJJt6HbFGAAhMQJBt2u1hk9HbHvSw9yKUTrdeRXEKwXSPQ3DWUXjBxYCv3yarih4VEajXtqr3inxp",
  "key4": "65iUEMCTwXTtAqhEsDgRTJYBnm9E6UgkHuaduKsfqq22z9hAR8qEwg5vY4ZjNuHCGkfWXuQWG99Yncz8Vpa6eAn1",
  "key5": "3TFR31vWcgFtkPDhPtsjcw7AF7aNxmZuSzzhaffaXn11jHiuFQ9tmfrifePrsrTvkyWUMtmuYjSUXBurRVdcyMGN",
  "key6": "esCACtGmYm2S5X49R9Lm7yUisVA9rzvvnmbDgCAtSNxEWcg9WhCYnFhV85Fioqo2bwAiex8PRvvbRya5BntPFvE",
  "key7": "5fDF6wm9dBLGuddEVRLDywsJ9JMH3yrDDGwmtErui1UAoC2JiDQG3Rx7yHW7ow2W2eWTum5RX2LJcEhrSiGzZ7WJ",
  "key8": "2EbsvaTXacN31UpWhqbUfXQiCFCELFR7BT652ePLKBeSp7JP1rWD1c7cuwnaEo5Hb7RF4MP4HGZBc98u8PxQr7uv",
  "key9": "5bDiZtSxLGKK1KFVaTqxwkWsGsDzfGyy4BAa15sGzzNvwYCLwXEQWPLRn3W3AZWgn4DBSPFijN15YQF2rJHCkVCs",
  "key10": "2n38mpxxpRCKdTCoyMXiTE8e14EqvnQVrS5GDqgASPXaqyQmecfkm4qCqgnN8rbzRDzZcQ5NafkYKcDTMenh7bXc",
  "key11": "4cRahBkPdmCu7U2eMfQevWouVs9nZ9bAGpxZAsiiPSV7PvhwjzpwxGXsgMTNZxboEvdNPVenZJ8A1bGeHJiNCxQA",
  "key12": "5pyuS6xSPQH8eBu8KVY1aTufvFidixQrRR9KWQ4NvCgJN2GuDjWMRptSjX1raQkktM8Whz5tSCL6QG1bSqUQHADx",
  "key13": "4JLjEUYnyziXQvPL7ywjQQBp84rvX4kbqdstYJr1rTFMN7KUZNTToS7kzbgEpaoFBQxJe3x2Nn17BcEcFb5WQtoM",
  "key14": "M1ngZT7W4omCrBWZe8kzJqJLBXVPtpgX1z2frfGu3NvzQb8gkpvQibyr4mQZMzweEcpNii3CgT3AvCGEEEkGP1Y",
  "key15": "5kFozs1EwJTphJrsZpbv1mrFZfvrbiXmZKH8kBdMRdFcgkrEtQNVEgoPaKMTpQxwRnD3eWK4Jo54hUWFEHsBVhhH",
  "key16": "ye1wo3DiM2MNe4oTzvfp8acJFs4uNKwFzs9YCaLohMwUyDfR15n91hmzv4ZAQdk2Mjs7qCUH2jYQzEg7LbAsvQJ",
  "key17": "5pB5XN8kX39qCACa695r579GdmXgitoWix91vXn5LWsn9qWkHShq8JoXiUYT5WiZPpka62dC58eq92oooadnm2Wt",
  "key18": "5dDr2trbhJUUE1fdJ4QgfHZsP94Ywcr5v7mjGsmWW7L8bwKPLwczSN8T4FbCbowPvwfErVsf8VFT5SEdkJkXdQEf",
  "key19": "f7rUrZjbBoVLr5ambHhm1bDMd6D8JXMPERZq4XRx9RaSrhf39Rko9s3EVKUhgHrVmMMp2AvhEVzhCNAJ6BbRbVU",
  "key20": "AxPoRB8GJypSL2gFscUeQBWiXHEdg854F3vHnKaZpLaSo9jxuuCYMtw26rNQbA5g8rdcH3213LNu4sJFS4jpvrC",
  "key21": "5UEH7LUdZw8n124DhVwVm9JYjnRPWmmXJoWCYo4dhyffso1Rr1s7RfQXCqEnE18VRDh95F8g8314nCnWF1cnCck5",
  "key22": "3y4vuFk7L5wQdSdAQLr54qvjTkGBZYvHfKdz8Zfitt1pSrGu4dVMBMG6YRYa3wa5UJHed1K9aUApc87WdHr4CKyc",
  "key23": "4wNqtCURjQnvqSev7DexJ9HEX5UPoKM69ofY62KPUnRhJ3EgCPNw49aMgdw3GyS8WCGuibkiH4zz2ufK9yNpsPmh",
  "key24": "2LuGj6V868MHvz3cA8Uy7nZC8jYtzeMjRxjshqXctViAGMYnaCMwpMoARMKwfgGNNrC4oyRdwtMvwmfCgxzeTkYA",
  "key25": "2314oKe8pEtfDWKYnTrenCmRndKcZejQVLpQr6fe2wVw2GdhGniLRvAaMi3mZKeLtd6oWwd62rXtJvRkWtgBXYo9",
  "key26": "5GrU4zQH5GjE15X4XtFiEkZU7yqUBiJXm9Aaj8p2nnAv2nX3kS7gJQu3T9qEUGq3ZyNjJZyCBHBixn7uTh2wwW9i",
  "key27": "4ha5mFcrDRmPwpRA8xat4BuA2dzZACWWufaFj4sA4cvrrcRoTj7n4K3x1JvbMbasxRD2uxwMVxZf2xG5SVYChoUU",
  "key28": "3BfAhLFwWzFxXTeN114nK1CNSaj8yx7LLyNH4r1g9o7ip9rc7artiJpjFo2Z7LJUQJ4ge1cicwVksq9qxfvzZDKU",
  "key29": "3P1wD68Z3A3kYjqYn97GzRP8jpApzJxc31YQfqbp4A4D8LiLCyM4T1vUhWnRhoHzzkPWwNTcHExoc7vNmBpe4N2B",
  "key30": "TjCFPqCwGovTJJUrxDVznevaCVXaWvo2xLwM7jbt2ZQ8dyNuCvo3qjkfP9gYdfH8AwDn4iEfqHgATCdfbjdM1iy",
  "key31": "2zvjEUgS2sw31CtGWFaRbsSK9YZkfguLQqGgA16SHxAneqcSpbKKEsSx9SNikhgi8maaSdkM5Bha4GdnN46n1xjH",
  "key32": "39ifSvEvyHtV3NgA1USXacDmgFWV3Fpa9oTveb29oFJuqj9uBKa9Px7194q9nryMaxiQT4qs5ThUa8Ej4PDRcPiB",
  "key33": "2vHy6UCihV7nhgijJ68eogBmB527LyViYkHjemB2Cvu9pWwk5UZn5cewAEzR8WXZmjsyNMHUUh2wAezAdY3HkEfF",
  "key34": "31QnWg3Z2HUWaZmrucn41t3onXRLQABEsrj1RZt3NjttjXXqWp2CT5vGsa3ir8ocABDXJGMwQqxwWMoo6yvEyi9q",
  "key35": "LDxLgFmdXPS9rR9WcSqmihfjLRWssRGNPtcjcexVTpgbdJt8GhXYe8C3YzV8UwtcjT1uACgF1ikEQofeeGdbbHy",
  "key36": "5yeY4RVXKCY8ojuG8eqAYWiqUXKwkQKtLnp9teqkptQetg1LjstoNCaSv69HK18UpuRh6TLCqbU8ppjRHJ7MKJWq",
  "key37": "4XDa1nVnpJQdv7f3xiSDKGVZeyvnN6VobeD7JmuJTtotpw9EPchLeGbyg4djsbzsnhhEFGbPgxyzDfGpE1TWzjAE",
  "key38": "4HzpxkoDtNUwuCYmS1dZQxceerGwfj7pMjLer33meoBBECM2jiF9NjHNTd3de8bzXiUsHEZyzfJbWVJSJhphVWy",
  "key39": "2Ep1gdFcbFCDvtfLxjbmys4mtWiqw5CtTKVxDSbexU8tn5VTHH4RYZTip2CuSobRHDHkK2W5CagA66gHweYqzj4n",
  "key40": "6732NhTdEL2MQvLnMucQhirtGyU5DUhgXWDmHmZMpXvBNBXyHgtaGmBKjr1Gr2LXgWUTLC9k4TBQGmALcLwJDweH",
  "key41": "A3CaJaX6zgkByKcg2YoPa4cTtPaU3ooNkiiWvphMTfEghDBPo3KQCPWvZCsc9SERjkiTveaCYsAMjJHBZgrRwMa",
  "key42": "g1fbKLybxqbwjkiZTtR5uJQbHyaHuLCEGNspCm2SKVHD3GRRPzAzcrqKxwxEo4AiUvKQycAfP77YpEjKavTE76G",
  "key43": "5zNevBoNigd9m81Vbb5BrUTzeeoo4hdtRSM37u46xFXkJapjLt8L8AwzkoM5uiJ8K73hLmSDJqSGoSCboaxK2AQh"
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
