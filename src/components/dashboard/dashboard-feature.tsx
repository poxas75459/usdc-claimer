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
    "4TQJjPrhcBpsq1LFS4yyvDPyTnXEL1cPmQreVo8GYGctAbriAqTTbRUC9MainzPinHzfuL6zrgCSBexfNyxEhpiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k4KBS6xc6dBiYAWjm79bvmP7Pp7zBFniG6rswv7FnMHckgspZW8Q2dtybH8AftLzCP9A4DvinYSgNSkjEjCBG4b",
  "key1": "5Qhwh7UJAjsGcuHe3j2MiUUdfMDA5bSnjxrvfSahu8NJwq3fBR6pnchYG977rEwqwXxKCCLWkVp4RbYdf2aGKgrG",
  "key2": "31eoG5gk2k63s37aMKjUKRnetaZDGpp9aoScGVm381btunBGoZWqHeUh75b4Ce9PbZssLVh2pmVJ6ibsLMwVfq8M",
  "key3": "36i1zPCxLXzDH5tXp3PcXukyLiXbRrKHdfk1NCkw2qYUyERySjnEjeqPz5zA5JjjAGUAV6oqiL3bwuh4Gkm7RfCh",
  "key4": "NcojVvfbryuehspxHqPX1phXFfe6tSy7X1UH3cdWtxo5mTHWE8GmKj2394Gy63kNGrx7PpoyCYBiit3JrwwAAyn",
  "key5": "3ShdQjQvQeMCUo8puxQenFR5BQv4eEUWms9c3YxxQojpXtxMMZAH3v1KuuRHTefNHh5qZfkeC7fQsXxYt8tYk6xi",
  "key6": "3zJMK4ct1VKcdKjbWaKBSf4PiFWbcEwuSZ8eaRquyTgraVvGvhGXX9FDLkcxEETeSszEx5Jm6siZopZYFqcjpx7P",
  "key7": "vPgoKgiVU6b2TavLzBEVbs26renDRecMEfdcWqzE5SMbTKmA14FCXBJceZFKbx2LFhnDS2p2oEMfXSwHwkLnafF",
  "key8": "4fdSmXgXqsFj9BubZivmLn57PxdRnpKN7RfJrQuRHcNg3TmoDETWTtDyD865rXtQtjEDHvdoCSpkMnM6CPU8UgHq",
  "key9": "5J4HRS4nyWPSJVP2McUbkVutnC4yQm7CVYka3W2zsDjj2E6vA8TEdKADv3sexcgP3xFHs2RoeSiTgTbR52jU5Ynv",
  "key10": "UWMPqK6zDyyycZ4xw8NZtyTQrH6wFZjyZE7vsukKDhSgR8iP5PXFM5LSnA8SkjgybgmsdSpY5y7VDT6gtZPYsDZ",
  "key11": "xK9abx5VG2wAqtKWJ6cuQekAMj7oYRTHK3VyEXcqnHNp2afQ4dgHgXKfMTwgkrSL19V1BUpGzyddxGEgLCLRxvg",
  "key12": "tzMXnSDYZrgiBBcehZ6E4uC4h8hp3JQNtCN783TNwpMUWw5umeSXNnecs87Qhdqw28bryUazCNf3HnpHedyYwUX",
  "key13": "5VuVzwcu244mNdCHhhRq1fqdQ62X5FtjWUEeQBnMeMQQ87aU6uCZWQfAiTKYiv4pUctVU2niaSByoipojz7TzdZa",
  "key14": "8Px5hMTuvZwhxWK3ZLgsFaZueJkKjDbMsvVeruW9m1jRZ3DTEPBHrx45Ysqg3nYL3EHDpqAL7PvmTj2SjpxUY4A",
  "key15": "86GsLVfaWVZ3RZizVmYQ2hnuw6wWBMkDwSBa52Jo3orBBfxVNNwGxJeRoq3H3GpHxSTxxFno6ZQ41NMjzTXgY6D",
  "key16": "5ZCCVCrvz5qCWaGAZ9pE1wsPfVB8k8PQaS9wTeqSSG3pRTFtp2VcLx76YYwArPoeh6dNWBU8qSVfvaGjruHfioEy",
  "key17": "2Q23b3GfWko2KAtei8t4MXPuBYAbhadA7qpDdjk4YqAPP167ihDgtLSDSAKDN3w7SBvyiPNYBYzEBGRFHLTvsRTB",
  "key18": "5USCMcbFctfdWEcD1bn9st6k1RjQfDiLkqZodT2d1FTnw1qSsKxoccuETsSx2yRqSeN5LzgLQCYy9gPQrfogNjLo",
  "key19": "5CVeMkFThgTj9McM9mD7MMN27ULLwaCxxvuEYwmG6p99ZwHiSRMVnpQTJ9pNjjJxhGL7qFRdrbqa64pa4PJ7pcoC",
  "key20": "hcoCcSJBvEM7pHGRNEwu4T7fiwzfm9ER9wABToBZ7RqFKSfBJLsLjLYXr4TEHAJtAppVynLDgF31fJxPFYi4NpE",
  "key21": "4SndgZNdvGeFrgDdVEdGyqrgdtjV1q38fRpa5MCzGPQFSyC1PoT8E4vmC3haWWhj2Bfs2XRJWcSF5ACwfBHiV99L",
  "key22": "2cEH5jnAvFh3eyDmYgm32dqAWZbQbKm1CjKKih7iy5553kfGVUY83mi7gjsfGSEPLL65HXvBeorUXqz6NAWdTxGx",
  "key23": "2tXVUupD44j1uSHFcrX7Riq7Z1pXyeWspdks5juQq8QSaXdbNoFsNEtMHTmqoUnTaK866Cbxju1fBJNNPEXfyrtJ",
  "key24": "3HcbNe5FB4j6hBcrLZBJPeNUJAtRXTphKBLekWdRx49vH2fkR1BRd59CtMqLKGt7SCCH5fckDo4zSavEvcHu3kdp",
  "key25": "2KJBwUiznatkZeqSXpV3pZ2fvM4A2cKVFqX9LRYPZ16b8Ta3ogqk3HnkM1c7UmAdnNCaV7zuXJ47rDv1Q3ghAcTb",
  "key26": "4Pywh9Uuizr3N5usCu3QHf7uRqayV9x7JbBsnYxin1SVrL2drSKSgPsZfTq7TKvLZVFRyNc4R4qUDibiJsHksrj5",
  "key27": "3WEgKuCKR6DEepmdYJZsAXD5WmfkeAGGX76XKxApCWSouxbya6BS4eCRSZrtvS4Vrn1akDbHtZxos31MsVumGN5Q",
  "key28": "61ZJLdHHdV6FhKRqB7HBRFf7T5JS2USQZJm18F2CQfCy7EQyuj8wC3dDJtARSS7wdv9fVewdUjvacgzSHReNykWr",
  "key29": "4n5HfM7RZZK4UxZoSzazh3GzCbpZ3hN9JJVBQPzZy77zKfNYj5k4vkG41RXWWnkfK8egrJJGbFxafmjcgDsCD1D8",
  "key30": "3Setkgxme2pf18RBCZF14pjANEkfasAq5XWJNM55HtMwmLyyktUXuV4sYKxcSjkVB6fX1X6gYadJGG79DsEueJjY",
  "key31": "5K5mLW8QYaUb2zm4TEeTpTUK47hZUVL5oXF7wnB1R4XQ6AGLq31NUq8XqEj9qkvC2dwQnatRfEKPwwsXgwAfuuQ7",
  "key32": "4u7o1VYLd8LJf1x8w9qRDteFUQfzxiwouzba23gYBzzTgckQ6yJ5Ay4MjvMgFm1d56Bs5wrMNmBqh9DvFsaEtyMF",
  "key33": "3TVoKFRBRsUCQtqu7aN2xz5De1wBDEj8pxwgoK32r38vJXBqfSYGbrHzQMGZLag7frPAJevmjGdXuji4gjxgfcjz",
  "key34": "42NG7PhsActvNv8V7RHWD6F6ooe3U8iEogwD8QLsChHqdnkPDH19QYLTRhcDqukC6k2zotLYR453BtF3BQrBaxr5"
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
