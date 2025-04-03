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
    "31ZFJgNo7nty4N4Ex57s1Q3hr2DHSK28istRS2efgEtr3SFQLJ4Vee861LwCvuGPhQximBFpNCyRhSjBbvJosVWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9b8vG7pDMvEz7BH8hRMTqL8udjx6E7epKzqWPbc8GKT5YPEmPLuivcwLXhaCLU4iAUdNT4PrJ6r87UyV7AYRSb3",
  "key1": "4KG2AXEdCJTBeBhqDxmK6d8x5Sc7Mq8DN86dzm5kgGgzEiUvXsmjDMGGNFHScBHPgiXhMSFhqPUeCgYwQousLeUp",
  "key2": "5ZiaD7nKXd2VSjp2Xt8j6jjyujPxXF6VqGLS5vDrW9ZgmKxv2z6qWLUmELY1ZZA4SJSgDjXBvxhF7RvZ7nE1y9r",
  "key3": "2et6ApgAC8CF52v7iEsdRLo4UXZ1o2Nogd7JxnrkN4bFbJhA9krTqSXUBomfB2PrxiYpXfWVf3zaV2SqNGsTcHCc",
  "key4": "4X8C2iotEDq9CE8pj2en4wo4dcx2xG9vYojvX139KxdEdHsm1oqNtPUQTtBm35usADxGx7jN8RewAQyu7uyygCiR",
  "key5": "243na4pKx7oZkHPU1QhpGdF6weVQefhHszQArzExuTcdJT3cNjfa5Ys3ptR1WNWvpQAeDre7x8DQiDjRtDpJxCkF",
  "key6": "2yMsZsyzhDE7VymuyEv7VF7MXDJGWAELbnp1agb5zbA4CSxt91N8cKLJD59PDyVdZ2wdvTsQMnu2VkqPeTgRn9hZ",
  "key7": "4X8zNiNo9m98u9HWE5axbG5sJmuSKBXvaDUWfA51PGcAJg1B3Mk4GpLqdvpLAva8YMtfGDMz2xUTWyB82zydxoJ9",
  "key8": "Ri8jRNxSm9JR7Z6K35CmMs9aQVQSRbdp9QtJwPLGzdycFxs9VyvPyrSS4vXFdjoF6yKiTnQYz7Zyv2QSiPNd7CZ",
  "key9": "3cwmewo5RzcdqYCmEjt6sEAc39VP8A5ALu6SFcUSjPzV8CmuDNZiDTwB3MQnm8Cf1jt17XeYi3sPazu4qarf1Aip",
  "key10": "49mCKzisRfjDFhq6PbJMn9seiGVF4rR1QALdMAGva5LG2tZcPq9x4SwJQZ9NDHoDEpdNT5gbo8msTYRFqsNgwAHG",
  "key11": "26d9XcXfvno2zYBzmgFN6tu9ZGdhruHKyZ9EfUKd4vn85cQdt8UtNmTgAGepGG8Av9v3V9mBNBpq1ikFSH8NKj9C",
  "key12": "5UCFGbE6NkpmXuKy6XwSEerANU2sy5EW3SMX9PNvqN45i4aWUd47akyDneRUXgU6cHDuj1By6X1X4VVQV2pnj4ZV",
  "key13": "2rnX74AVShtaZhzjSm6jac1amxsjcafLFtt599345zS3MS4gcJxcSNGbLSNi8zfsULuKhGhUkf1LfCxzbv3w6y5D",
  "key14": "bec45CJCeQ5tzcBu6WBP9iNDQSNXJ49GXtjGFcMbjkwWoGKTXFypo7iWWVY84diiAeQVdxBe3ysPtRU2R9uXu6v",
  "key15": "kDmHACEGEhKSfckSdaGVxnbeZASn2hKpbQuFgH6XswzCPwUVTVztHab3t3p81vQKXh3wr5iu2C3FVWtYjXSwPMQ",
  "key16": "2w3iVzKiMJkrPvreSTrBTn1FrRJFRSZpneJQYmxmNrZE7EYZAxppRhfC6MFUWJtRbJGMDNUheJBAgovcKCbugrVp",
  "key17": "2rY8ysFdGwocF2wfrnPDVN4cp9oGjCLtC2D1WHB4wL3KCKGXX3FCQR7arninU8FuLkj2kMM49Xtng1a3t5FhQ14C",
  "key18": "59ojTuu7nFUYDannSvk6gZ1GUqUQRcpv36XquJm4MFTH5MkUMe5j7aNrG3LHPy7takc4zoSU8M4NydTr7LfW1ni",
  "key19": "NtK69AfvBy4qZDGaKUVkrdgX4j88UXAsDo8awozAjj82tXJ368KhZ73bq4ffdiwHcgWSqyPe5ZjQ991zSYL5LFX",
  "key20": "2VcpkXmXK3pRSajt3mKFNDsf3jFjrp87uz7BtagdWdbNAJyHh7h9FWucEGqHN6Bs5cQDZUMrFyp6awVUrND2TY78",
  "key21": "34bPgdgcKZZvxccssPD15YBof5V8GqTWRix2ct9Sw3uoLFCKFXCLUwe2CpPTro8TRJb9KMiBecS9sBjtBCU6z2tx",
  "key22": "52V5o6e4dkZNUa8aAPHDLqETfZvAUL63EDaaN3pt6ZftRewGcSPiSotwc2SxARSWCYCNutSMFgbKG7WSk7JBcn2n",
  "key23": "Heg3VwWUg3rFkQdS8s55dwTQuoTAcNp8e5esdG4ipKukGc6Bx5sZnMjyGAjDmmCK2uKGvMcqxFk1dRRMz9FREDs",
  "key24": "2JP3H5fdcZrmG8oyyWSEh7JmeEYFmR21YhP2eHcxqwdNGSNSAM2ivddPjSej2uyf5y8ZoH91ZwggyChAnUrJTtZ2",
  "key25": "2edRZNRsLhcXnhBBpK5upz8kw66MrF7xi1Bw511DE3oH6p5BycrH1Dq4kK9VRV2tEUJEWJdcpcPqdVuzVgdAcj1M",
  "key26": "4UsUuJT2PytmuuCZaEn8Rnxu2c48SZB3St9gsrsXtHgbj9hkqYAhfS8zLk139VvrpxMunp2NpaMJLu9YKghsyHDg",
  "key27": "2HBKPcvY4GQ5i9vuPvcR69tMHzgvypfAfL8KuDcvEr6QLNsGtcc8cXLAYJdCDCGdGhLbtZBuVQenYNME8Z1o5rjJ",
  "key28": "5YwcHikZV3ukg1XPfDEvKJZ6TrEQHv3KLfuS977BJemp6WFshJXmZuDc8PmYQEYcFK4qgmPRCPtLu46BL2J44VbV",
  "key29": "5PkUmraWLyqhCPEWoEao1gmDW9th99uTrTyyijF9fK4jXUSjH24Q4RrBeUG3KsjmUhbyzXqwdEV5U1spANVYguQH",
  "key30": "5pK6SZDbnQVkpB3FbmxctB5QyCLzTu1b4FjUHjGDCXP2qsgwyf3P4Lntt1UAUMnE8Fh7jpJxf3Auztv6nX4c8keF",
  "key31": "381wZDCky8cQKvi33cRMpEmLVTrLyn2hpZzmSHWYN6LKAmY7CTr1yzs2KSHj4KtpyL56Kj2NJiTHRzTNDhRQ7ebN",
  "key32": "3Rh2LNMZYoZpEJ578KPtoZBkwdu5RbUwbKQAMQbDbbQQAVUT1Vt5txgfQCUgLGFqNPggmqrWMUvy5bQPXGEXnVe",
  "key33": "8W44djReHtCwd6xh7aFGKYX2p5BT73RiD1s6SdSLji7iwNRT3xuuUrkHLXQhK8yAdhDLsMLG1pVqATJLpakN2QB",
  "key34": "3gtXRGeVFNXirbx17LBnsUYkbpvPqgoT2UKzgU4Yra2u6mmzmP6hyvELZ25c3G5BrgfUP42NmSjEg2PdDAJjHW99",
  "key35": "6SWk6cLSmwbkJUmvtHPKkFin1TJuXtiHKNA2aN2sX5VmbxwLombQaceZvSUe9cA9SD8pSLweFaTm9EdtFnDbs91",
  "key36": "5PtWsy6EwzmudRDHZ4zN8fDicLyP5c9nX3wrdjRWm2K67XYrqJK3andor5ReWdioGmgi3tbfpg7XFpDNZWppK6sd",
  "key37": "3Z3LbVQgqbDkz1sJszMz1kudz3K5FRvb4H7zRTpbeY3gZMvynqSedGHwqtY5c54YVi3xsNuf7s3xwFf9uTnAtddE",
  "key38": "4ViKUeoFY25JP5wx2E4fa4tSUNghLocm9CCFpkktcUhfUj6GArwKqSCE836hpZnsHytd5r3QGn45iQDyHaXt6g5M",
  "key39": "3zeNFDa5xqBS4VHGsx5od33oNEPDWqNwLJzA4urnffJTiRncHvjbiSr5JvrxPQtv8HifGHDo1NYMJcwq7tEwiqEv",
  "key40": "zmrJcxmB5tsEDasZ9BxCufh7h1Lmxeh3Zopto2Med5tpDQrUwFTShkssaFaoQxWok74eNui8cyapjcv3GaJx7Fc",
  "key41": "fR8pcuijzT9VpZ3DRPM3an3X5BZhFwPoK5s5DTr22PYFnbLzj7XEwScYth2GUpBUBYFP9kq4zYJuQewU2c5VqtQ",
  "key42": "VkJr88b7HAqanoQtxSXMzN1BGwUhHFW2LcSKU49rcWnTGsVxLfpq5ym1L3kRvdcjwhimUC5zNUPjwXosLGZudrP",
  "key43": "5VHHNyNfZ9xr9wMGdnabuE4DBriU9aGqgEcS1pC8GPx2Fsv33ssz2qTymr6EiZfHKY8TbtdGkHAz95qVxChQoTRT"
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
