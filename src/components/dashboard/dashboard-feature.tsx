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
    "3v86Js4J8KLuGvE79xnBQ7ienSUd1nGJSA2DK2GbV2CkrAdwoehMU87wAMip2CSWmsVA6osNTy4scBn6jiaoPz1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zuPXP3RhH2DF32FFiKwAMU9zpoZw24ZYB8B5E5eo4zaBVuL7udxtRcAchvU4FPbqinvqvV2Fv2fJ36LYBdfyTME",
  "key1": "4bxWiGVRqbhASt4rkN8bK25DfUMUteY8Q6qKzSN7mkofGkbjgLbuSXhy1fxzf7jaxqF1CNq8udUBQf3xR9pDZMmq",
  "key2": "55h62x6DYwL7ThqCKhuecUeYG4UZoGDwUeajkuPXqWFpkGNUBwXkWNZhktinJ5HNY8aCv9AuTuyuzhjS68bMWd6o",
  "key3": "it2FbhDtsFoC6qmu4JQgiHu1Zo2k9vTcHzrBs5kSs3v4GARyqaywBs6gC9t5C1yWDTQCk8YfgVSRy4wruPF5bWy",
  "key4": "56YBuUu4NYF2a4x3FTn4KTffNzAu6QsoHAjR3RuS1igQ274WKbvo2G4pbC5x29WR3dBYPCKL3gbSHC8vcVRtovzo",
  "key5": "4ndox9niWg2H51UJhneAhUWMakzRA2GCBkb55vgsiWEng2qwkYaRFD57wjsbB79wKCN9FnbHJg2wtggRSyUejo8y",
  "key6": "3jPBBiCY8RhdSd63Z9fA3zTpD2qvnuAJ2wJZ3236yWH5XJTCJMcNvkWBxawe2kwQYrdaGbQUBnRSJe9F7Ai7z7CZ",
  "key7": "5RPwvUmEi3kaT5sUTR81j7XHQpMiq35RV2e5HaF5fmmXQZxhBV3qiCAU8eJrutfuuJt5ouDeyEVvb6iAAJYjuQhG",
  "key8": "4JT7xwCZrFwgqCAp7TYzgRTLyASpiwVw1XhEAWo1rYAfgwhLWunJzFXGPgdhDocEUa2iDePAPf9LMXH4iH3hNaFq",
  "key9": "4Wg8fbdqHpPZxTqq3FCZzwfcWGp8y5w3yYXzViwaiHbKUbzjUCxkHYJoQUTfasajZZ1nLEmhWebecNyijdf7n1V6",
  "key10": "35rZi2faCjdrzWGZ2YNUUcD3uLnompbyREatqHwidxRoskEH4TVygenBc7Cd4DZSVztnonvWND3iqvGuQ7vcr4KD",
  "key11": "gqrSaQQA8mNLZJkiyst32tU8EyjvMtEPUjJQcw65jt7S1zeXJep68X6LdJFjytTKpZB2jG5xkdLsy7DtsrJzV6x",
  "key12": "5iDhfQD3Xb3itnMq6bsoGXKYp3S5FhSRLUFLgNoDQNdRiHkTURd1tPJ4UVospUuCo7vzGRs6RRkvfzTSALXNwv3K",
  "key13": "PXRgkWqi7yMcHokeD2b9F6VVzFjnJZr9J88ZDkNhZWzFoFm5jNYYreFr8gP7aub8QF1x9vK4ht3KSLXUvsmTRTQ",
  "key14": "A3BrikHNDkhNm1Q9x3NzGLiP2EpS6dyGikdp5L6wnSTR5ZGnHbW4RyN3HQBPkgLTfnVyC8sjsuAa1cvekwBh7sH",
  "key15": "5SM8P34cVLv3FZZfdH94wTunZqDz4BDHYzPMDoVXmFvnEXpfJJRu73GHnAxdCg6a5RmgABvNnGy4mBwM8X5M7MYo",
  "key16": "4gqRtFqwePVJWP2XgzRC1BnRAHcxpv6kF2R13rLMCat9RGJKQkACkh4wRoTgZhnNBuS8WrrSvNNr2uA8bE6jF89u",
  "key17": "cqXDssBq8YvoQZRJBMu6de8pogYo9mxTW8q6YFRXfJmoHAVyGx2i2JJw2fJWye9E3SjY55AZM9hNNfUcHLERLjJ",
  "key18": "XbUx7Re1kUUogWe1RxzXRTAKcp6Vb1pVTJUL6Hy1qj9f2bQ9DYJTMCUYmgqwfbaycs5mrYLLMvHmXGvL1ZEsgwL",
  "key19": "3dFZnAbY2MAXcBrGFbdg38kaKnEz3PFb1zKikjHd67Ey5DujgSLrJyqYnTKvrK2dzRLKhrithwe4WVZyeons9NeD",
  "key20": "2pnJxQAhUVo1fyeWuXWmgkDfrwFfAKvRFAMvVDw836cS7Bek9qGvyS9akghSwymswaBx8P1Rrs6hMnDpHFf4hj2q",
  "key21": "2dJoBGpuacMFYAcSrhynEV4Ev8hGeX5og5vKjm5owmnZGh7quEnhTLnayL7KS1TthYNJgqK6vd4bqhxGPDCyHaig",
  "key22": "3FY8xseMuCfdjGUPyf7CvGU2Ssv3hxyjgapaSnshXhXTEUVg6aeRsVWvd9VNJ9VAd6xrAmAKWDDxdgFmWDajgbss",
  "key23": "4ytQWsnpMz7iz4EV4xgL5YQ3kmZDyJksB71Q4J6TgZAW6vtHtZeeWGPrPzfvqKy3yBSQ3Mo4AJuKPJ7JcAdCoHy1",
  "key24": "4jqo29XfECzZ3Fs8bdu8guFW3uYA3gRXb2fPZDNLshvik3HA5dQ471vGmAALzbKrAdKRGj5tNcbpfDA82FsDnoGr",
  "key25": "5M67Uah5ZydQYatJg9wRT3FWmg8VioRxBrnYSLBzvneRaoJYXqHQUkRg8UDdtkdbHTMz4ojjDcV7tbrKSdBbWJej",
  "key26": "8VZipLYxqj2GFg7f185bLzinfz4hVHS5C8s7QZHzJbxsbUnSdjQ9ZrHEpHzsxhczRb5M4XytV66hNxC7arqrh5b",
  "key27": "5ua3eAvaBiZQ9T5WVofaPusaD48ncGbwatjKwk8nw7ME63KB1bREvmDzNbmMmQVU9WppYAFZwFbzw7ki6RH9cmHn",
  "key28": "62KUYEfP6CWJ6jzQsmuoL6XiVB9TUoBYrZk3QMr5CDSdLzRjkw7z6nYMUT7upY2aAx4DscYxLgXe6u7gc7aWweom",
  "key29": "6gt3qJuMsyf2mvg5X3rRdD1oPkhb88BESJnjfJETZwyf3ToVdVvzFjHwezFPM3XXK6sMzywiXGUaSHM2CoqaUGW",
  "key30": "5ndAVSxTT8vHMnEFgNsBrgZQcbVs32YmVC3hULYSxTCC6PrSumeLsSh8Cjh8Kq8xVr26Dng1RhY1P9TGaZ6yaqhp",
  "key31": "2SbPb1r2ANtpxSG5kvVpJUZjZoUfveWkFfpXNE48M655bCFhpLxFJ1kqGZ2zEaw5wn25sBbYQo2ZMUtrXRUPofCT",
  "key32": "3wGAj1XS2gVSSvPuqZA8X8G1bMN2xdHhQ2vWCKYr7uRrqiv2ktnRttb3Rybajkt95oEiLa5ur2dmVCwJwx2WUqGi",
  "key33": "2dVxbByaZX5uUG9oYPLzTQgrh6YBzdzfKKbZTHzbPEe4GrVTDuP2mCPLCpZwMB2qgUqGZeiC66BngAfEFiYQm8LL",
  "key34": "4HEtgLvJoNNPD28a7XscriDr57zZadJrTvWDEMqJjWJLpkdPshUWWpac5RDu9utbvPya4trJgtRC86aiC1ttNEoF",
  "key35": "7FHTv21nuMMsf9u62S1NiuMqryufXUEooFBQQNkZKQWsfjkBB4if22wLX8DLjQEkJX4qdTdN3ZNSnaamLb1QM6t",
  "key36": "4GqrCReZ2peExHKoJezPUurwUzMiAjwjaXUWH7hHFtxcURfJeMgsKhPTLZpRRLGvVneCj1kzQHJTLd74sr7MGpEe",
  "key37": "2epLshkGbsg2bu5ww7G8ZiJ5MDSZTqxQDGawehszNo5wK2ZvRmKhSuBPif4iu22zA6QL6pcxqiTwXhzZzkavEtav",
  "key38": "5DZVFT68CDUyji1zWTPyYX8gsyniJrvSZwUvhk4JfTjypjD8hvvdUzEH9fPnZzudkwQwebKx3Cd2MEyokYi8zZw6",
  "key39": "5w8dyhPZEXu7QbJoumWwttr9GPw5vJ36VbwQTZJERQbpALiYLmjbGuEZoL5HMvMdd57VQ4UtozDenQc3QWBH9RXH",
  "key40": "MZKs3Xv4Bf62pXVgknADpCSd7ttTu2ao6VKJFY4nnfdMNVMDj1dLjTeQrkkCuzJBjn7JooWvZrxHfhqED5PM3DD",
  "key41": "P4V9N3TnH1YkyNydDfz5ovb55MKh8vZP7ZL3rYSfJpt8VokSqccVXDYzJEinURWwKosiy7gTq4iGsBsgPrSpUSQ",
  "key42": "3ZjFrCVEEqaS8S7A5Bk5c57uvPEVHKhUCvNZfmpu4a7EfoRrmAJfpQWCiX7gaj9DsSnvwmaTpBgLJ6Typik8dpDh",
  "key43": "3WcsWkdXQobkNZbaXRCXYXwwLigEu2uF1QNenvmaoYjdmyqheaJZmVCMjyoankQqoVQaybbztZJntbS2w2sRUHcR",
  "key44": "68nAZFjEpqw6FiMmtRXoqnCicnNhFSB86LFuW8zx63hE4D3WCB6hdoM3e8xseJ6GEvVkrkK2QssJSV3CxoSKnBd"
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
