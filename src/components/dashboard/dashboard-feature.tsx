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
    "TJWPZrBdnReN8TozL4Fs6D5tA2QomsH33Mn4mLiFm9N8qgjf7EzguESdBg23vRXvjfbNpBH5db82XERvrXhSHX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F8WjBNFjaE7XkP2nHfiTnACLZjXa6gMPxLcax1qvLyakDskRs9Qz5sCR7sPDCPBPgXeMNumVFziahyavDT5DH2i",
  "key1": "oHTZn24BDYzzHPAdqQxi6N6nFfJzsZn6qpDQbWBqBQMf1URcshKUpcQL9RutU5A4e7dGc7d86upBMXDQ36vM98D",
  "key2": "2a6Ug54GaYZhPHFxiW3Mk69jYtSMvtWVDBywVFc4PRMAHSpMZnSnqjLLL7NhDyYMCSYAX3oWfJud1JS27VWXQyUN",
  "key3": "2cwhRXKWk4tt5CBukfotNdqYPMJvVSkZkRrZx2LPXg3hpJBgB4LpVWNXG5QuZ3crx9dMhhUHtb8zFdQmB2qpFyUh",
  "key4": "5pSDLSPdgbdo69fVWsxxXfyy1pcYFL4wmEDZcuYjU2wn5U99a4NQgJJZS2Wuk2vhDMQa2PXZ1zgQXFecKm19BBXN",
  "key5": "54ZDEurvDDsWQa1Bd3fCjxzDgGneoHRMLedTzHBhg78kVoZEWjGDzo4VnY1jrxv2s73ZDg3vCuX8qWWHjuSeN3T",
  "key6": "4dZZMkA1SzA99MDkzwh4jJRTNWwCnhbbz6pER6kNiJMyWLmP2nu1Ga9L9em9aP7auDbokegqLG13LNXxDK7BwuEB",
  "key7": "2BJpgLYAGL4Tia9YUMoftwUYFXCkjMnPjin1kABJQM6PQjQnkHLLHqZvT18p7XKNrJYYKdG4AdAnpfGnUAhz8NFS",
  "key8": "2UxD9aKC2QqtoJEsyqposeLKNSwbMmi6EyhVPJWwFTkvKPLYrd3x8tEWakBhavVvXn7izfQVsgBnZEhn4TWvrCC1",
  "key9": "4hG8biJLA2YBsgcD5xqnub4WwrZJh9U7K4pUMCeNN2iv6mEyXDxc6LaZSmFsCC6SHBfEUoCkR7fBaGNEtZwej1d7",
  "key10": "2Awg1U3rsfwc1BTrF2NiT4p4suDL673ZaSzFyYFdUCFGoyzse42k7T5jh1oCAACND18ibNseUVLvikL5gWPHaGgQ",
  "key11": "2axWZhb52CccyoJ89MYbxuJNtnrKpwPUKnNj2DcDPjH55pYW7F9BpqpE9K7FySrf7BmCCyq14vHydGGV42m4BRjS",
  "key12": "5NFKWPuQk8mFfPhZEtcuEzZvweYiFn8bnQczb84W3FqyZEGLqF1UdiW6VUXuhreed4wALXQgP2JAYCsixjmCeEYc",
  "key13": "59tv6TVYJ9kWq5P9SC6eFCiP66DwkWxt4HsajgGV63KiyMFcQroVk6WXuH33VCWfSYtBQCs4s8NzLxT2WEwsWGvZ",
  "key14": "5eWeNPBfVqYpN6BdD4wFD2SSyQSbGi1ksM31QVE7NvF9nHpPKmuu5QLpWJARkYkKSmDSVKUPJdawsKgDJ383KYKd",
  "key15": "2TPhM9beg78RS6pEDLnpn4TUwpwxYTxipqLzAKDGz8CqgnA12esNzsTr6CZsJZ9uuY3sSTUAg8QgzTMz3RUdAQq4",
  "key16": "U6wMjQAJRQErbSk4QwAmJeLhys6YiuVLB1sc6ZB7mtWRmVzdP5d7NBowdQSnzutpHfn6ndxQBYicJLH3aBL6Y2w",
  "key17": "3AhYVhdSyjXnWzeWVWqrA6h5CewNNMXo76oEbGJtiQuagVxTwLEsP8hAaZLpEB7ddYS1bLAmq3n5DLexszg1SEMp",
  "key18": "3R3sg63w8wJHBH55A3psQLFxw9kRVnWscekMvrLfDA8YZMPFegZrmRPjR75GQVgcMBPgBJmjpxzi3UuDGHqunSpR",
  "key19": "VG62LgyGdQPMxhALa7UXxSHkubHV2FQWdNAAZqyCt1HsAAiHA1VWSJKJMiY4EUkYCpAf1tDVd8DbwUcFQ3j4wEU",
  "key20": "5juFzNtj1C6AEj9UwCfBwL9sCLsS7tr2RfNQL2wvHYXofypT4i8V53yPcVrswAwum6DdL4ePQdH7qsrrpxgZWx5V",
  "key21": "2bSgxuhsFtm5cxMsEPxtZUZCjBoxvpjMfZQWcpYc6qn28qmYekJMuXvb42h1EE7w1jMkTxTSUZU4fMyZPsQp2cDV",
  "key22": "3KBzzGxQrHB4nCcWsm9qU6Z92qU1L9STLKDK6g3dwmqWjezfnhyahuJiBfyzHnaUaw4amL2UhqWNKPDf8sBvQCGN",
  "key23": "2dEa2qou8jStUpMMtxyk6dY2eXvi1zLokEt6o261VfUZuRT16g9t5j2JyhhXTagrWRzVymVpeLL2wHZbweEKXStu",
  "key24": "5iP17o7Ky44mUPVcTpjJabXXYiDopReKTFWxTdMMksr22NNL265uVitGZCyR5AYzE5sYUgXkUBHXdNC1AHd3DHDi",
  "key25": "hwFdUfVyni8py7hgtoDRfGjqjYfx5UDKHgfGPEKDksGjSCsMjfESRaJFrrQ2noExqxKGVk6rJUhkV3MB2zLuJyT",
  "key26": "344PDdHRSXTAymrvPQ34y3Gr8pJd7kz33TEaoV579jpKTmdqom1f447UgPpu3UAsNmRphtE8dut8opoDP568BQHS",
  "key27": "3WDL3v1zk7RwnFKFhYX2GNoBGgcoSNHDMUzc6MFifp4agjkMfdPwwHJmauzAJDn6BqWyrAVjkrpe59vxED5e4rKv",
  "key28": "VCMrCDr4D7UvjGrYX4fkVKBw2Mq8aaeCMXGa8UxdTc8y1sFjLgNoep6nLu8dESfLuqdRZtjhmQtkbUS5XJB21nD",
  "key29": "4xrmfcQ7fX3Q6CS9f6nSjQFp2HdzfAjNy3KbcKRTV9xmTAC7b596CgHhoMnkADLt442tQ14CWRC7RfNDhLiSBZxi",
  "key30": "FHMMDz4Es9BfCoVY63C7y7yvt8yxyB4CwfNytdK9vh18nXHi1nJtk1nZ4DzhnrySMYtoaKhirtQaNTspPB69W2b",
  "key31": "3uBPiGLez8igjFG4x7ciDv8tHcU5wXTSZJYWbDfU2Ej5HGnhqEmffmdpvJ1bzNXa5425vCjaat24F7hB7Zr8Nq8q",
  "key32": "d81wJLuhFCunvWY1yZqKttvZrfZVAPy4iVrKKc1QeYLUiRF5s8h3UHEMScRgSAgUhYTSfWcQu41GioxzwaouE6D",
  "key33": "22haSC8PnqHQHAZmNrFrApC1Hi3F1i1LUvQFmohb5mSDoMzhf7WbkVB43QUe4Fg4NGT8pH2dmDirQ2HcuJfBwB9T",
  "key34": "2BDdyy7ygMxQk1ayu2ch4Qv87hhF58Ug2fUd3iMD4nK5p44zjqQZ7GSG3tCNuYTJcqjQaSEb4NxLogF3nvbnikSR",
  "key35": "58mDCkCDrnNiQ4TSAa4r5AFCTyXw3bKuKDx6PhJ95ipi8NEPCUTzJowiRoTEPeVDU2h7QsxDvEhnAN32U24UMKhU",
  "key36": "hs7T12NBztoZv2y6uYyaCaby6qMBKvhMqEDDX7z6RGYZ5MzNme8Bin4jPVwUy9mwRDdv6fqFkzMVGVQ6BbUqPm2",
  "key37": "4R5DjRkdMah3bgrgjAu2e4txhpHM4ZMQATsqN7Hdj5QEBuQbJgmaisShm8Uv7xqNb3Pw9AQFFgs7H7FDK3knzFrW",
  "key38": "2nGxaVokLjCZPFWZmoRJZ5iDuynvpYAiQN1gVmQcJtui17gMxfA81qASs3imvuHa1CcpUsa23ETofEvfqMfevSrg",
  "key39": "2NLUHmighrpZbye5m1tnob3tLY5M7ATwKypPasRoJnnAbB71tL3Z8jZgmS88awoHhfe1Thiq7w5zKyYbsqtysYFN",
  "key40": "gfDPTuoN8FQSXQPBnHXmG9zrnZCn9KT45oMefzLS1pJ27RggzR6ev66kMMaMiAyzbfm9r3QxhDSbL5bLpnjrKqJ",
  "key41": "4Qfm69CFv5K2Xcbs5haQ5AKqTLgoU853rev14GpFuqzYV9jJqnvb9TXrRbuhxuAud7XuUWwkYCTcwZNy9UC27Q9x"
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
