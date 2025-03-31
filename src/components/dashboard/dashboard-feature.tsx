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
    "eU35e4vCzuZJ3LRPo5DPWMsk3MNfjTu54RUVByEaAyygKN4H9LQ6YBj1omKziuR8tG65aaBngmJakjSCT1cdzmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FsrmM41gtACVy3QTmX3DS248WwrVFzSCE4swcrVftCAVLemFSmqTBHXdmhwEoQ3xRDqqScuYBN5QJNeQHXk8tuB",
  "key1": "2B4RvydFKcRzng3HKwvLSup71d3SpTSdYiT9q9Am6bgimqhcFoa3mqGKXpuMotzi6eu7QhagfxgaBNAWN58fxeW6",
  "key2": "2Pe7kYvC6BU3GvKc3eKZCoktEMKMm9rAQJAUB8URkuNGnU2fZwoY93omkd9TUxorQGd59VjqRgGcJh51keyUouN6",
  "key3": "2vhiZSFr3Pi2qRzULVFAzNzZL5FRqXDiEqCiWGQyDmULjSwkUhqvypccZUm2JNgoC7xBB7ncJLL1uBNDA5USdzci",
  "key4": "26rPrxHi7f8PwupGfc76899ShpQTpRxruAmfAbxufPDAUtaH8VDGU8S8LeBM4vt1VviSNvcbukuRtytkhgGRXrDW",
  "key5": "5hN1KsfPBrZzb7xeUJJ6GWzPSiTnGnYB3662RHWPZ43aWn38rJ98uAGgYPP6Mdo35g5oC13X1R2JUNccRFRjQ3ew",
  "key6": "tUiuKdouGLVNybSjLnZhL8bCm1QrGRe6V1Kwjn2Kk5GznxgFDFk3YtuYnLAaDntCcnwKnh4UPxhLyvcPaDA4BLM",
  "key7": "5bRj1gDT4te1e6eSYvDuPU7yxu1QuadoTKMx9i84n6W9VQvDxCWi85jUhTAJtifncQAQnQEsiKWc44N9nX8AgyTq",
  "key8": "2mNchsQKpf8sRbZEaGd5h8JrKchG923HxjtG3xsEwQTF8nnpTKn2qMkhCmetBXGHypjGyPg8m1kZ41yUjtscYz3j",
  "key9": "3S49M7r6G4ER4R6FPXHWngDT1XpZ2P45mVm7DoYQ6jLhrdaAGGsmRSHXghwyt1o6B6hVvQiFpUk7gsMenvjdBKB9",
  "key10": "5bNi6gYPUroVM9bpeaiiCZC1AecSjNpTTeEBeC5S4zrf5B6JS7dbTQGKqTLaWp2Th2pUEXrGoJTjdjhSrCA4GxdR",
  "key11": "43AAcu7wMbv1MEuieF4cydenAL45BvEcx2dNypq5DpE29camMvc4DnMnU87st8ys4fFAUzMHAto6FpNmo46RqLg2",
  "key12": "555SMuZLmj6aN1oyofJHcYZnpvmCVsCzhfZ6bkG65hAdvoxtVqNoAXj1Kxtiw571pe7h934oED7jqMfQXZha19yX",
  "key13": "4c7M6HtP5jByutWewnryrGxUniG7j3mLGsZiYSe1TqFVE9EszaM4cawhixSNFPQri3nVXejYUS4zgMJnkuhCUdsN",
  "key14": "5WwUiJH4HuWP2KGhxWbvVhdWkvWJyoAEn2uNmUPAFFDodw9uKGD44faka4RvnFfQ18GAHTZwF5MeioeaNogMvyS7",
  "key15": "25uFCcxyUDXPNRwNbbCfNcVV48aC7ZmE64KDspZAu6uck3bqxgeyGFWhFUdwmtRndkXPcfy4YcAFDyaisBZP79gT",
  "key16": "5ULXJVxchuDvRBiBkpSDEkExgna2WKG1GELi6q7jGPjGcdmjXLCMTkSRF2Vb7pHTcuuLKSJDGKP5GEXuKwrgKAgY",
  "key17": "r31JzZ3mmZyYotX42A1UgWys9nuT7CCpwFb3VD9Hfs6W6cE4aJgEpfmTbBqPDFVvyqirpHbEkta5u3mojZPfAFq",
  "key18": "3c25twewXyCVQTZu49fNgZgopnxstUVMwWgLSu6aT3YwAxJMN8t2dujLJjshL9yi7NZhJUpf1gu7umjY1gKTAi3Z",
  "key19": "4JmHGE9wcL5VWsoSUrWJ3c6gP4WzxkdTpF3y4RwifZmivKWn1JGofeaifTFpHqXwYrUCt4MUYdc49pzt6P7Q3uWN",
  "key20": "vZ79MixnLi5mvAfaFU9rydg1oxLuzZg5npMkzTexKCcsNu86CZAp6D6N2qtgjjCy9ZEPY2jpUkudkbpJkh1pMw3",
  "key21": "3YeAVWuStwDrxQ6G8ctcso8VCPhCM1JyLXfvuyT6nJ5oRXdMtcbL6RQ8z7FkuhQs6orVAAzQgBemNnnk1PAWvwfb",
  "key22": "5mWxYrMTktWdmYR7ix27mFoG7X48SVybuyTe3HDh5758AsUyfoiu71fV1W93ZUwHLrmwvUHjiTzcqx154UZML4ms",
  "key23": "2dhsoKWniJ2rQiwxkupbipCKFKHBmNKBhvz1iAUsqYPnMCqBXX5oNX61s4R855Fru2BBSyjzpCWXRW3TczM5YHeU",
  "key24": "2RvGnC1LiBsqPN1PkTNmcatnfukPGzqcDszmYLXSiL6r8cBWYJggHJBSmBNFUF9UyXBd1oLZLvpGQDma59DwCppL",
  "key25": "ciYH3A2nQLq5HR7yjCiKYYyFZ2wDhcHbJQLyURPRTAC7mrVfy9mKhYYSWN5pzSWKYHAA5owmkRdCwEvE49KnfG2",
  "key26": "3bhrNk3Pk7iTdG8Qixkw4yFrGAwqBRSHriJtaadubqEYP83WuVwqUjKtCpsrsQkb62Bna8YWWa8e6ifuxWz35zbN",
  "key27": "57qnY1iM9cbpqo2R32GD7vfRGWcvAU2vNnaf4k2SDvLR1tcni3TjJDVGbAQ2XsLanzmpcTToeG1aZZyHV9LxJTSx",
  "key28": "2kSqYkK8ua15oG6A8gXpeNZ9FtnnXDjoEmpcBLz3GWcce5Tqp1Q6Z2CYuuRaSYN3tdWemcUsuwEPLUpkzfcVXgup",
  "key29": "39wgABgsxuGtcZoqXHJ9QVYx8HUiX5AsjdHLyfA73mVTd7mTZF8LuL7axoXqb9Ykr9hCVFbjY9JxfGfkYh4myyPt",
  "key30": "2pMkYBwc9GkiijNLtNKczVxVAbgfU645eVBGdeTHpW7zo11e1qBHfffJrqgQWPACnHuNMGq6efXwYjibahnbXHdv",
  "key31": "56i6WJYqcK9vk6GvzZTGuJtuwiAiVDp4DmzaGqBxdpi1UJ6pgb89htHZeMQsBtPzSuUqco9BsUYY5zvmN2fpvZ82",
  "key32": "4tFKAj7yBWPznPP8oUVYMtD3EVsWoTpapjha9mQVynyrmxaXDuWewxoibjVNh489d3KDoS6nuVpXgFXqgW4gTwfF",
  "key33": "5UFptnTm4djfqehjU457cXr3RKHD56yH1k7FjNSmsNMBkazDcpWNpy7MtxbBeW6MVHmhDhiVvt8dkvnDMys4CbTB",
  "key34": "2ZMgLEGU3ms8M7BKps4iWidr1i1mVSnmRZgzF7mQ28dBdDx3HtEkSuiZgYNdwaqX6aV9j6NoaQ6yaCTxVCAaKg5M",
  "key35": "5L7kYYo55dVcGKg4fEDbRMYXBSxzXwav1XXnv9KZ9f3mY359i6PLXWmvRU54bEXWS8VvbhhUeqEP8ryct15FBBSp",
  "key36": "2XdpXvS3fMJianVquiHKNVCmJLUjCMz9AEzjkeWS136z1yfVKhUoh53YWCny3jUqcBTUZZa6qpCyVrEzmzrTvpHg",
  "key37": "2ZK6tY9rSsKUbuoyv4i2GvoxSpZCPS81ETtWbxwoAaNJGic9Jg9yLWzFKFniJ36FVzdCykAeHpUyV98TZRZu38wB",
  "key38": "2pWG9TNXCsB9uXtiAH8PNRBcri2bE2W7q6QyuwAu1aGEC396KZRG2xhsSdrKmjdbfd96EdXXUga3xkxZou8C4SvR",
  "key39": "MLTSZaYfJsooQRxt8G5GHkkkLkjeSUeSJZkb9QSB1w5gD578DoGBf7JWRx7gJeCNNXvmzJWuW89xJx8K4LSS1qc",
  "key40": "42mKqPRVACyZxRSSca38Xu2toMEyDvRZbLvBSJwRyxFqgMX9Gjb2g3aghgEAMCwfJC4vRm7isCjAVjby2LY7hqtq",
  "key41": "2YxWnbdKJ4AnPsDyeX1gnj1W8A77oVNUothKfPDm9bLDnFCTKNtAZoQyDkbavP86mgtx8g8SqSusEEmbgSztC2bH",
  "key42": "4Lyk8yHYjQuK6xpDwwGGc7FRYmjagibuBPQuweVBnzrozVUsvuXQcY8SgesXAa2j8DYTMvY9GuyQM1SWMiDLbTDv",
  "key43": "3D9TUDSVRC9rDMABYaNhnd84Ee35D8MLQBbkwyekG4pHxz2L3N86Xzobrbx7kx5xDmGYdyfVFmeb6xnPkFuyRYsQ",
  "key44": "2XPV5PRiu64qgj7xgTM4HnpPtQnfUyuK1gqjuc69Cxyg77fKbiQCALfYFXjuyhGx8Ga69zzqpXgXCEJfbrXXBPxh",
  "key45": "5M4uxxR1YY9GfE4PncxsjR9NbZxgbNeQ4mGCf4aGiPt8fux8s4DCjt655MzsncwrG6sYiUUQVPbFDW5Hake2AErg"
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
