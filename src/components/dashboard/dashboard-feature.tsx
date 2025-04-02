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
    "4Chr5mJXCvXDnQfsYHPM3zrdr3UEomYWPqoZeWiV5EBJUoDxZEa65AvmsFd8bRYMFcRq6PFkDrHoozEcUK23iPX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iUUajZBFm9QNvhpAghaoh7K8KWLNP9NXrWFKjt6pUahGts8Tp5nmFnuCBbaTsibzcaBigpnJV3ABQ4H9bw2QHVo",
  "key1": "2yLWtxE8CW9SiCSUCxyjXXxWMvPfjbk59AdGMLKRYokPtu4qHxSDvrwN2vo6dciabaMSwHYXnfGHtuQPMiqAsSX7",
  "key2": "4afCNRMNUmzmJ8CNFZnVnKm2m1SGwqZFtGedVCAWCk2tZTW18BUe4RsiXoBsVBTx35gSKKEuiqfhKnQPh8XxR1Xc",
  "key3": "3sKaBgvyJRcq2jnHnx63FLeiyQU623H5pxSWm52WECWKvorVzpN2Khf6V1v4Lob38C5QwVarhofb47widwY57ivU",
  "key4": "2Dxq1f9dap8u1wwdZaAesUU7S7tu74Y9G6buAoSmTiZGJfphrbjoQD9jFYVHxg9Y2QrFKeAgahuzDruBePB4yKiz",
  "key5": "2MksHaoNmif9xsuMNhrjUdTgtTLyfMANKofBwcEXPL8FYmqQcFiMXNyiYvfbsPxa2vXMonwQttEvVrAuAdY7ubcb",
  "key6": "2Nt4qQvzZYB6TWFNRu9HCumWiCZgB5t2bHsvxEStravnNUetGaHExMoUUaDwzhmujqJ5qVeiXQjMx1EoUsdHDWjE",
  "key7": "5dkEa5qSEXJ4iH1ekBuFvyqqYEhCsjV4P8PvhT69RjrARYEx64Uhsay3EppV4t7g6Nna52cf2fAz2Xp6FQcwnnJU",
  "key8": "3XvnsAboNAx8KDmA9QeH87n3eXXyLZEjvKHJobX2sPqeioSNL1omcddUNCUtzLR5vKpAxze7LWV2qjEak6nJCqrE",
  "key9": "3m7YMZfdFbVn7jNVjr6MNa22c3ZgaqaL6HLG2CT3eQ1fncsAkSPn7xP2KEQ3rPiZPtc5yJpZidAwNPKtzZ8n4SAX",
  "key10": "rVxEGtb7KHBvoKJeLkf6r9CmaUHeEdK425zrw9JzS6yZTCSVv26Hw5fVPWThTHqJHrF4BVqQx1WaW46g2C7XgPC",
  "key11": "BbdLorFR1VvAcisH6E5HGrxRz2qhMTKC4HajUKt6xTCuvJTUW8sgAUv8xF1XvnNpPrqiTKFuCiwswXU6U1m8Xav",
  "key12": "3ANNXwDGGCSNjnAKPehuWvQ8gvh4tawzFXTSN1MYFsAuiFMv7ef4nuDtS9Geo89cvUtcN7WfLWCdHkkKeMeRFbBe",
  "key13": "5teKJ2xV4k5thF4s4BF4BZCeG5RwjGVLf8wxkLCVU6iwcM9oFPzRdSppWqGAVgVtvypJGNLwQfRstZkqrStnG9Z7",
  "key14": "B6hR5xQcZ2E8Vr8cXqcdEnmCp4kFh77X8g7zqNV2txgTtqKGpkZqZhrPjHVVJjoWcEbjJnr7K6zgkJLRpwG8jpC",
  "key15": "2z8wNMZBQZgYQRS9JdSvpBkSogyhzg3EnFtB2Ut2uxygEAvsB8QjzLrshAXJcfUM69CyDA7RATuPXzYNGuQE2718",
  "key16": "6ep49PWGvLtxdxoBq5RBN2YGCdLKA1jAJoGpRd7zDqjvNDwR7QVov9Ag337omoAwWNN3kdifk7Dy4LEDQphtG1D",
  "key17": "3iDJpGF4PFXtLhr8bPmbzJ3iMVQ3vkgXBPRKiNBCV6f9QNinpEZaVooethqpp6M4BThRbCoDj5gFM8bYQBeyEZuS",
  "key18": "24REDEvSjVmJWg9C28PZkVgbwzNbcij4Gx1h9GzXsBEKuQZB1jwx8eJEDCZyNf6gFvC8jXN4AjKmSPi6R8GKGTC4",
  "key19": "jKQiTCe3oaBo1oQs1UStJfvRhoNp43ae5fgxdAcagiRyWnPR2DCghCVAW6d8g3nb1PxAPLZuiJFrocqvqNBZBvd",
  "key20": "2Gg1dyXme82N16kTirGEWRPKwW735SBzPmxCkaPMGvKXeha2d8ANWz4r1udHDp4qVscj8eP9vk5GuJcwofzpey7m",
  "key21": "2meGfpgRMNMwqcuBbzRW6MqWpcooiuXHbjMpDXRrgArv5TBZPwWAubyHpUp1uQKNrMvN8bGH6RdAuPCy4tS2Y67e",
  "key22": "4dMigXhaDkRNxLGaCMAH9JU8KgRrc5Jr3m4WsvUhBmu8yKRZZcugjyi2sSKEbcPqo5VBEKU4g5a2vQCkqo27wsZ2",
  "key23": "3aMTMVbHTxPMcqtgpQF1Yjd5W3sWzS1ykdhFK854wwU1HDoVXRthRRPsidDTAdzeXqkUn5feV9i66RYv6T3H4AN4",
  "key24": "4Jo6Lxw24hM9qfDxmPbvg76idQaMu1Qc6sJXvbPk3DdaqtcHq9HhEgpdryMQSsLFKxZ5hiJ1zgPowH4XEBCpEKHB",
  "key25": "4qYLSjYwsqibRqPJzorTCCprpMzct2bCXZgLonKPjXNA6oknR4X9RjjfzbZgUvdXPbqRQwxvqL4WxD3bssTHgvto",
  "key26": "2yp5VeZqcJ2Zci2PNEm3XYvFZLm6dsJ58v7NmhzJe3wKz8uQtRTe2MizH78A6WsPGy8hYPr7tNthLJkhdK7KVKT7",
  "key27": "5kkrtLLCFLPcbxXiBdk9NwjFgk713j5DcHy4GgGeDSydxC5yfrMRunThdPDEJ1fFGcNTtUPFHhA8pKATrJGXy1SX",
  "key28": "4R1rjdoorxGCckYCAPB1whGbX2Dw2KwqVurLF3Qr7xDNHig9gQfCifT5L3ropHMpUFxxZ9c2ge6BFw2E9A3GwpMK",
  "key29": "4GKX5KMLqX8wTyGuKeyXa8Z7vJ2jffBDQip7fA2Ej2GkbwJ8wEcztcTzftb6ZaQfigMbuawebuHrXixyCiRh13r6",
  "key30": "3wj6vuPBFu9h4EDs4zX1piP5MkbH4kLyRkEGhXm3tLUtS7ibp7qNZKahDzUGqE97eg6UsddFTEepNNz7DKf1hHbg",
  "key31": "dNw7u4tuQB8DYButFRDB8Z9X9GeD86RUcryuHhQsbKRkgtrfNUJuwkS4974jUZGD9E6Aqb2ne23jp2XTZdxUoJe",
  "key32": "3U3tXgHkMDpmHLSSwnzit2kQ3FesgoFwM9tB85nE8NMwGSSXgrRqDwxPdYHCydSoAaJXpVAoBYUcT9Aj7XfP9w53",
  "key33": "XivuuvHRAoE3VptSNG62V9oLhWTBizV2Nog2PvCMLgP3Ype5QjEod6JR2tEvdbkXAe4JTaBz99cehhSTTbTCcgq",
  "key34": "vfrdh8x5Jbg5XC9U1C91emgaPfj2HMLPXUKXwJfwguXwTjCqMR6LC4jGUNUJLjtfTXQruifV4WgHLxaazscvvEo",
  "key35": "5jyBPeZjK2huduTChJUkESoTg2tCHcfJx2Yt2X5UFRPEKP7hCp33F4JeLkV54yp18Jt3Rps13X9NDpmiffGhboWj",
  "key36": "5UWSmJSgWcW5JoFGvpYuYatNfhEgVrSePLhVCh192SiqGRCLpEiYDPM7QBqP5Uthmrn2etH4S8c4NfLUjwQcG8Hk",
  "key37": "3WfMPeEGmcjQn3nscJep3oqNf1gUy1NmxiDgt8imYcHbZpwMZmFc3rnfNvp3uURmkRdMfKbD1ggNfMjovqQ49uLE",
  "key38": "5ssDHLfM3jcdF9iJ7mryHkWsTmybHwt3ufr7Q9GJseHEjNckPdQqwb3iUXWyZ9juDts42aRE41gv3ZVWn2CgMKu7",
  "key39": "2QnirDq8RmpCPBzPjyGi2YanoGMzgyUCPbMdezKXo6hyWUPukB7iLXceJSVthZfFArHVVddr7RuFMmtQZp5q7zyr",
  "key40": "26mkHGv7tXTQGJGUauXoYqDrWsMHepJM6QNCettLxgAJ4tz9Bt4VyZmjTGCumWCjtojKjEP3QGg9XU7siErwZi8p",
  "key41": "4zQFY8wLHctF5k5q3FtQcq1H94Ymh85iYMb4RYX4XUwQUzGqoMuUdmJdckZY2m6LiMTiRAYyS5qWe5JDhLv3vuhe"
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
