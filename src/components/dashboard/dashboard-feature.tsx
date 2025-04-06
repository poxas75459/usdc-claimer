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
    "nfpyEUzG6P8Lgkcdkz7pY9f8wSK23b5PkDhfapKeFZ1zbUchQ6RGrejcLbmcqAQwdBqr4iRPTBq2HYKykVZXcJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qpTbMvYfiUZS1mqz45Lyd6a5fsrdPvDc4bm6bN8nwwaXAUA46yNXzrRARFPRhm87YtmoMEhXMfyNFnMpJADUsQq",
  "key1": "5upk92Em1YgC15pKAbqUr7D9MqsBcaxwDF5LY3WUjeT6h3VnDGh9aXaYDZGBpCuGtkSZ6LRZNjwCURQb2AQGE6dQ",
  "key2": "42ue3kQHHYTPb4iAGNMu7cfFUg7tBWkENSPMGmnzoE6i1BWtpLmWc92vqLnjk1LB8RpAgpLQmE6fY8KLa1NheAzy",
  "key3": "2rL5xcsFbAFPavKrZfPPJHHXvBvhDkTfWwnmTXhtCCn95ZJ22ykBBk4Z1W92PV9SqHJ1QCBuL8tuxFExwZJsBQfr",
  "key4": "5h3kBtP9GtxAFrRn22a7r6xP6SveTaz7paNqW3sbxPTG4Smkd362FciM8LwjwUJWdgfrf4rYreAF9eGttswdwx9k",
  "key5": "3m5jmS74PnTSHC7ouqaphenud9z6rcz8UcvYXpboiJuFdGE3ewCtMi9a18SztS5M24fqcMU7epkCnK9LvfnwsSHw",
  "key6": "256vqbRFQ3Nvrcm7ccMRTyq6fiXYkCbXz6ifC3Z35stDT91zrG4k2pxR2swLy88Y6PGDu6boybKftd2PPbWurDif",
  "key7": "KKLPxqaUbzjw21umDhd3C2U9Sx4T2NyadvCPvNfLFZmsQGKcpnTURDZrXQFBqbbR9gD1TrJ639xKAqsfTN3Moq4",
  "key8": "XD6heduZxg2Kazkwauwvc8D8gNVgpXoUCNusGgbyNyCifgSovT3V7aJV7b3zbk8yNKdvH6ay7Exzx9maejzoU6v",
  "key9": "3qn5fH1MS7jw2ydfWFRwZ6mz3oX32H2GUr4hzQyGtCJAmMpCRa9eWijTpVajb7HjydtSHy25QoFrcVqBhyzMqVyg",
  "key10": "1EVDMaQ6cQhVX1eWkWzbJFs9jdMH7dku3kyixh5K7hGN1TCW3Bh6bzebFwDYAHJpHUQCYDMt3DTkx93ti8pz2Kw",
  "key11": "5qDT61ex5E8fLfYVD7iKKEiavnj6pca2qQu7kvLwS56tewvGUxySCMDRRpCpXDGX6uUY4iq8Xs28MzLcVykDHTSo",
  "key12": "49xnRobgy2Y78xabspDaSU18CLoRVanvbtmCj1JgUCXy3qPteFTf3FcHex3jhZwr319K7ys1rfMRxxfju2BFD2Bh",
  "key13": "2GsMK9sFuPm9rjw7KhgEw9vRnXHHgWtkJJYaAbHLdzS1u5A4SbToTA1cP32C6VoHf9DQyudQTYhy4bWDnKo6dY4d",
  "key14": "2wRXEJKNH1UmJmggzjEvBW2FHMujQnQVvqZMSfbM7f25ooB5qR9jWxkMHXSMDBQRkWQVupZxtGsABtSsDaJ69pzA",
  "key15": "CUnZBJM5C7QNQo3si4p9NyzKiR9JmboMSisPN3JjnnXQT5NGhw4qrnBAPaKDBrpbPxXCVWfA8GKGcj5BqR6zUQw",
  "key16": "5D5cxJPYcsgSrd7s6ZdwZM5xHqkQQ8EdBFD4EvtRjoKhXDqQykhWsPFGPy6K89CfQZSFoqEoDyn79cTRHggm3dcz",
  "key17": "2pXbihTWpk4tdMipDaS5vBeNEC153xZn5keYp8TDcNwTNLFh1D4XLM3UKjGB3Ub7DXHPdZjrYGwQQtFu5ZTggHKA",
  "key18": "5JfE3LDKxmd5ZGJUaRFratB4qPuXveWybvPZtn2rTKEWzz2xuLxcQ61yvkpvB8Zd59ZkoWN1ok8msbqAjU4MB86C",
  "key19": "4aFSTmoywZr9u88jawQGqo1qRssCYDH8TfCmPirYiv7wqdaRjkANnpz3YwzoztDzoB8WHNgihJyiKgRp8b7sWS2W",
  "key20": "dFYgGs5tDaH71K2XKLHUqkcQibEPMEuQwrFw5sPjikbA5NA9xHCj86RUQE3GEvuPNBrJg5YG9qDVon4WNzEd7mF",
  "key21": "5UmqMwLTdxS4gkdvpC5fW3R2d2fU2SWsZedsAxmqM1SMsi5jXH3BXofWpGjDPJyZSHkPRda78YVtzUupg2zUXfNU",
  "key22": "5iy7Qybhov3RPy3W2F6D4PNJtDBGxaNoewTaiNgbgLCHJ3i7gdbvayCVFpaQCi3r4cMtt2JEoHgxBqW7F59nEoXG",
  "key23": "59QS9Sfwg5YJvGfU3Bs8nXH82AxL2kgaXfYxZNyo2DS5f4oVx9bNQmuRRqUrLycH45WPseCTP9j4R3TkP6wDZxeE",
  "key24": "XVNT3UWSZvbk1vmQgc9LfDMUnUwQFtv4Dn1zpW5T53V8xBdBWs6VFgL2pKLQAwY7cimwFMivMaCDb25cUFE2aWg",
  "key25": "39rrnXbyrLqWgz4VKiSNEzBgZiQanUDA6vk5BzSJdsYSrEYiguCADCNZBwsJxTcKb9MWFuaPY4qZGDCH1fNaSrZY",
  "key26": "3JcyFuMCEAeeBCQvhyppD735828sQM7kk14MLPgV1S9Vi9q8hc1gGjRwvM4qwN6cBXx6FLSTabu4sGotzv9K5zF8",
  "key27": "BLc5HBx52ZFw2fUFdizLKeKXo4ksfxpprXMfzQBUZqabCw3ziayZ2EXZM11XHw4VVigKtqjEDk2cq7ZYDA3VDTn",
  "key28": "2fZvXTVhv8Muv6m5itShi452dy33M6evYCBtN6LinyyRWpc8HMhsz81SHhbyC3tRLLyEvvprYWhzStxxtgEgri3k",
  "key29": "3BW6ZrNh3bdwXpb7S52kwtZ5Qc4Yfcczj9B36nDQcBVyZ4veuPjSdTcm7pRjsN9bzQF3jEKQtjUHeZgZAoaqMxqU",
  "key30": "4EcWdG9hrWK11mSkkxTeYKfWeXnKsZrPLuetQ2NrBRnM2NtirdPyD5f36zzXY2txco39GzoRKLbFokMN7zb25wWA",
  "key31": "hKmXNVR5C14hPXF6TWTatrtLxefQL2sLYqSq53wrThAN6qgRWQKsv6muiMbmVuT3jJiCQ42XvemXU9Nyjr5DDkr",
  "key32": "5hvf8CM3MDwtTBXvgoEFxqPR3aeDcpfRHHd69wsPsbyWtFtmQu1nUxRyZ9R2388g3FvAxQsVwmAgVtntwAwhQntq",
  "key33": "hFYRe8M2MtDg1PCwEVRFXKyT31Qp3gHAjKBZ24CoR1PpqPoFfEcV8Q3tEGHQT4FoAFVrri6ThaHCugw8tjDq3j3",
  "key34": "2KREWbqixSiFXt2ZEm3hbouvCkW82RBQbV8GjUY7g7CXYmR6KFXbBFFixdeo5sjP8mRJReoZLJ884pqLJicUfaao",
  "key35": "3LJN65597rFkoC1FpcUsPRZBXAcGhoCiD7arL2GRdpp9DEcnDmjmLLVtNG5PEXoX1AtUnKu7yJh7QFeGwbPNnc32",
  "key36": "54fqdzWgAgofDcbMG51nWaCy67ZtVw7HauYgCDLE1BJ73CUf9A4FnxzLvhjrBy1nx2exG4qWEXga6JFDso1pHZuh",
  "key37": "33B32HTSb7JkdnuDXgqYVnhEQ13fsF4dDKGCWEGjYSgbcTvLNA2BHGbQHSiSxDEmpah2AMsxnR5CiD5JDiWkfbJa",
  "key38": "BRsvtGL8JsiRAodCmWsSeZYJpbT9kKqHwQVHbziUHJyGXecpV96RuK8wc4TyrNwNpTdQ4DggwS9uUwaacPnZr9g",
  "key39": "3NCcgdwVBkRjxsak5ubrPm5owYzAa72xrPbzu11gPZ1nTcFHEQxifEJV1ZrezR691DWtrhgu6AoAjMbCZX3YDkJH",
  "key40": "4NJRouUWTmspPT6CkJGQu9BttURNtNJvbVSuWBUbbpxUCLZFhAvKgY6j1WjVoc42dujX3hxCsH33xxHdq7wgJK5U",
  "key41": "3o6TKoPunCo5cmJwAUbPKubJyDSRCg297vps5WL6Rx5HdZLZsSmg7VWBrYPzxsSkfuUPZySk1mMBk487Qub3f59B",
  "key42": "2SJGpoWaSAv6F1QMdhgzi7aojgp9tg8EfDrbD4Ed1QGCZfKW8AnDjdK6cYd6E8RoVBLgbeza9HC7JMA1mq5KZi8C",
  "key43": "4zkXmXN58gD9Ddupsk97XCDX8nPLE5sX7iMmzYHgtm6V1CnpSUPzfwQ69bheHTRyEACxF3dLZP2itMPKqiWRJevS",
  "key44": "4TXs9PoMEKJAwPqRjJDE6xFeSNbNhaT8L4pKSiopDtkTRzztuBMvBqw2iWHetFQUr11iViSivayvH4v6gsu7fHwK",
  "key45": "4e8a32PKGsrnfF7pF9QZPPn3PkRBxZxJRRtVw9TXMySViwSEhGaSuMLk3TgbRWXKqt7CHV8ZdY2HPKYv9QXAa3rn"
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
