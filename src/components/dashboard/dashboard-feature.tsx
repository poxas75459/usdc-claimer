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
    "2R36GvKvj6nAMzK6XZ8EkrKbp59Smg8xrXAv48ManGchVELEwmNvkg1tPUM5Y7jcazX2iyybc7fhEdEosLwAnZop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MBAVeLgimFNustHWCtjvtbrZSbbe5ic1cvUEh4NgdqtthD7tvkd6uuUJn5ZAfedZ7kA2qvS5xCtn1RaacBkNvLb",
  "key1": "2scsWJuiJzDHydCX5aWkknzGucxvaKmHMCfWWTNsmJxJ2VEEb3Nuhf6MV62bm3C8mvKsas7AYwZgEyVbPNyYuvit",
  "key2": "5DXDbXoNzf8VKm1PSEpXy2EuWRCtPcmfzcn3EHE5XMR7q4bHA2J6qZvqZFD4MEEEdvsWLnB6mcyZ7SG9qCY3fZ8y",
  "key3": "3vuS7y4nQQynUFcamF7heSLE7JcFK6ESps1oU332iJzGFC4ewhGL2YPUUziN27ekWrZJyPuKvcSJTkfpJHhPJAao",
  "key4": "54Aa9t2Gym2g7JLakdQ9Vx9YPWg5xPdhavLrSTDVVB2aqjdcCzwhxA1x8ndRBRcfgNDx7WWfhh9SFbDc9R9fwDBG",
  "key5": "4SXgkBk8q4UbqDbuJS6w7azrLVPMy7cDRJtgpnYnzz7v25WUdJK3HvEDZKKQw6cK5Rhh9G38zkAXJVYjZ1e5MtJR",
  "key6": "44jQJki4cbuuS8Q1PfPqvSXvEBk3FMkFXRPWtxMAvWP47nNczB5JS6MwiV8DDyccjo5fnGKptCDkrVtCEDYfkpb5",
  "key7": "3GhDrL9PsHBQLENgEYJHrW7F5UqfG4NkbTm14FbmuQASD6Wauao56Z5RjjKEFQnWUU5NiisZvC1kkJaLUSarsv9n",
  "key8": "4Vt8B8dsY4jSng43f5LatVSfbjvxeWY7y9UVMNLdKwkzbrfYx3kJLAf444TNiskNQZY4zebMNJSBdPsEnpaZGoW8",
  "key9": "5ownaUNRXR8A7ZDHGC9i6LgCr1kajJAPCYqPpMzHaCpvUF21wU8ozc23AqKeHXPebBeE8qsmZEJXuJ3kNBDojMxA",
  "key10": "5J9nPXn9xWzpknG3YMaffugoTHD9adSiv9kL8V9TG2EVbZVyzoxLS4q6UeM12GpQZ81vQ3srwMT92sLKiRWNSkfj",
  "key11": "HQUYTTgPXPMCZ6UfXisT1Bqb3mp8sHKSW6tRkJ9G3SGtL5yVboNuFYUUGBi3jvPjjci4Wjcaj29pR6k5aEuKZBY",
  "key12": "2t2Xc6QqrLq83sXwXGgAhJ5KZnD22TXW7fgKXLgkSGsYN8FuF4EGgMpWXAyMqz7oDksHjRiULiCSUV5JZkM3CPsg",
  "key13": "UF28BLuttd4couNuJH12hzpaNVnBs5yBQzP3dLYdCvWdVBbMUth1roNPcRcBYLUpxr61RWhgiQ2FrJ9gLCBGpms",
  "key14": "2T2VqaAzPd69hjbeVeYqpU5Tpge49ATbEzrjiacVAY8DWbw9Hb4wDbebrijxtnAFNXFf8V7XfHd7X47FLS8EecPU",
  "key15": "2DckJDGYhfZACGoSAvhj8x91rwpkTJDQr5qduNSfJnfkECMaeDWgjc74XcVprRvSzsF1J6773awwuSjqrhvdt6cQ",
  "key16": "gJcvemes5Wb1mP1Yi7CkLnYsHckXLeXgMA5PdZA5S49qN1Ks9HZAzYvGqD5TDrJQQcb9mMSkd6GLKbteA5SPyGZ",
  "key17": "ouk5Tkx1KmXXEfbLuw62znmBUN8g6pSrTZ3U3roksscAG555NjCAr7Dj6uHUBPLwCBTQYhW3y9SHNv9Nz8ZJ8LY",
  "key18": "5YdoSzkCKN5dMPLv94zj68JdQGWqmqEtxGbdW15ZZCq56XcVVvyn5Wuq5EspeXHX1EPxWGXt6jqorMf4sM4sCkLE",
  "key19": "4rTxzdSr595nZaNFg6ps32SM91TVxQt3DeK93DrDqDfQzqKDgyg9G4mmrVZ74Cf3NpFUrUvumtFYnb2pbziRXz1m",
  "key20": "3YRkjgBMJGdE1yHnr1WxHUFojVkz2dZJX8unnZZoZK8NVhSoeCfQRanDqwLiyATn2LPBCTFeYUPBBKd1gvq2PQZi",
  "key21": "4Frx6bXE4D2moGeK9ZYCM7XcNPm8H6DFzUugrqitUGEo9cuBpDXP21L2u1CAS8mvtbF8Cw5f6AM7RghYyew7YCyr",
  "key22": "67LnpcSuH9wxr8nnTnsBPdYqiVoBdRsEELjxZCSzj717h74rJ9LiryHXto6CbGf1Y89k3ULLbz1KXz3JW156j2LE",
  "key23": "2sCTYdFBW4ZKpFi8zRXSz3uN7G43mNxZz4jcnTyzcpMVU2AwzX2uAcP2eb63sPqAVWxa3Yymhce14emEtN6b6sNV",
  "key24": "5iBMBpiLp12X5csYHK7iDAGXiLVfi84njmRaeWoRwjq2xXXz3ETNsAaNJQjPFjPVJX3F6YxabumbfJu8Aoq1gYC5",
  "key25": "2kzKMry1RAYBVkXWWmezzji52zExQVBpBYy1RtbGmatRCsWeuM7Zek1pxACTp1DtWEk72kezY3xu4MBX3iwETmkY",
  "key26": "5pp6XeaKQePc3UUR1icxEbJsg11e25HCbnkCGieNXQhJsGfkS4gQBRnjw4udWYUVwrH9UBh95iEiPu2s7WDV52tK",
  "key27": "47AxFj4kBdYU13U5kdJhVo4TuYfjmfYadaneNXm4cHMwAHUcqoQ5DBFxNLYJofBUkF9HKZvaMVESNT31Sfz5Rq8a",
  "key28": "3yRoDZJ2DVEJLW4p1W8tbrPp2HLf1J8hV2ghbbG7Ezko8YQqeHMS5y5xt28ucAUgq42XCSGH5RT6U74hW9eaXHj8",
  "key29": "5A1SFFv9HkqJ7KZQYpYs4fbxVJvgHM5nAQXXzTF2hjrzw1ysHS1oqkkGcXCbPJirhoLo6L2xR1Ugh1NLF6VLv1bn",
  "key30": "YUmjYmXdyQeNwR6M6HSKEzCC8jRL4rB47iW67yXYTnmwHHxSN66BLbe74j5pgGco6yYTCb1K32yFym29WNUKyfN",
  "key31": "4F8cU7oc93wR8mAjtYCSinT7bqaBbYpN97e5nrwhBaekDMtg12rN1wfgkFp4UK6XqxzQQawGGcZmCSrLpUzr66Zg",
  "key32": "5SdtB2chJ7ydrZPBahBaUDPyTEPuPYNSmkmgV3YJSSqiQX77Ub7jsaULomKaLJtdUC2kWnorsA8FNoyWQJ7yRamY",
  "key33": "2ZPwHZ3eFuE6KCWgXYVvPcTpbqDepvzs3k5szMy2g4VV3ghVvnpVVLR2DaWGgHd5kT18rd83WMFZ9U3UXcohMRLN"
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
