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
    "ZphoHP7Cmc8w3ZpbKbk7T5j4spuwBrhgNzgNCM8ioiWzLjNTAKDYpQ6UCB61Mm9reVBJoygtrCzTzXesN1M3z2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yyt4KM6tk6XX6trJpyJiP7tavPgytR4m23RFEK5CNEZaiMZPUUsq1AVLWMJVPrgHto8Rp4Ckm9nryNf7rKq1Wk1",
  "key1": "ZZQNR45c4UERPV3XgyfWMYowZe8ibyj7pAgxcbBHA69MXiX1Jy3dKr7V6GDyiy7iXKXJfX6mNB8oZac1LrbADvi",
  "key2": "1DScvUJgua5wnfU5EMCtT2KfemxeghpUhg83macwWQrzAXPu2fd1PnqEXV2wwZFCnQrUwh6M3uWdhGaZcUMR8Ro",
  "key3": "3cpcL9TnnakvBQTaVKbi3tiEAMwvS2VwNHdQVQ7CzQgMcpWGMeGQhPgVRK6NMobNxbL8JcW1TRLucNdwgJUH95oj",
  "key4": "3M6ZmXJzCWSo7N29jH7gsddVS3tHrPrD8rv5qViqynBoSuvNx8PNNot39WMPaRGKUWD3qYGTFnFjPXEHf1G8b7uk",
  "key5": "63UaC1ZkoKXWodXCacPo7nq6N3pyq7G5uLonUKbt5eHZMdpn9Np81LWKQkWeK3CppZUbfLmu5F5SFh8fqe43B5F9",
  "key6": "3rCiTc3YZaYu4jkh7cyM3qtEb1wH6ny2H6XZjNLYhaFat3tKoqunGerTZjCdKw97NqQsccLeybcShFDgYLNBZWjZ",
  "key7": "2GuPkBH8WayCiEorKvNsW96qw5TrnH7K4bZ2W1Q7R7U3rv7vBmyaq2ky6toaFvADEc8uSwHgkGny84bF6oKhiHrv",
  "key8": "2aGeYUNf49P2ypd7bHmEpbES8VFLq2XhENCseKYirvdJ4s3ePuCZ8SzdHtyUJfCKrDGpDQHK8XgVER88TuqVvPDA",
  "key9": "RJbLRg65vpqkufgHcRxRwTzeAX2kRyR8PvzXXShm57qgKAHRPWSvJgAd2ZwcmK7r7kdoFqeyJGsua6vLe8F9qJ4",
  "key10": "5u4Dy2VfCE31ko1Q2y9FVyxLD4m67i3qhWY1gZHhsPhYso4Ua4QhWTk3AQ8Fkjnmasz6SqqYQDb5oKG4u3uoa3Pz",
  "key11": "2hkLncYMnaDzGrxXchev3TBeLNk4cvUofaBzVDU8zJzJvtq8gPhmEi8UPttP8jTW66famggj38NXytAdBXboHcMJ",
  "key12": "3LJ3KTpgqbgUURGNkGSRatUbBrksan3TBVNgoutx6KiY9ab5Hm1ZQJ8AfjX47UL35eKdQ2qN7V816QThRcYPcNis",
  "key13": "2k94pqZzFBR5c9Ko6EB5QFBfokJWirJ7hjc2wrQDToTn6vvT3XETZMqmxNs9QXJZerVtz4jna9MCmkdqxkStkh4P",
  "key14": "4pNpgurThJsR6JeVDM4gFBiRmoDnWhUSEYR47e6s8N552ESqdomBLTthb6nBVyfcQ2VJR5Lzuxvzks7FyMhvsfdD",
  "key15": "3o6GgFpePquHPaNTq8feUvMVfDwqL2RgsjuZvTTZxU3qrY5nMiPnsH8F37EvyecXw33dQLRmqtvRyMJFmz3niwef",
  "key16": "4pBDBxvVSEmXPo7KwcXB23aesCiQX2EuAQ45KZFLQR8teStSYqyAM6iEZvDhxfNYUVJrUxacPTvwtmfDLnb9yLaq",
  "key17": "3UMPH1m6X83D32NBJmrsFLyzqJHQjZLRES1jRxpbmUWxmxGy3eu1eJdUMs9DVofgtwixLnbwBNdDZYYUWBuq6uUx",
  "key18": "53t5eNDLYVmHScXjWynXXV94JBEREjJd3vECgp2Hfz31BxcvsFJZvELbTFyGWGofdVFuX8Yui7298MXDkfDZ1jNm",
  "key19": "2uoy8vZ6U2YCpwSJfQn6o8ySxKJh2j6THio63dq6PiEtMkNaT3k1mA6GADge5G26LD2y8XdWZBGf24hSKfCETEQg",
  "key20": "59gvGK13qNajrNMfRYUCPDscR52KS2qHKa4YeGQwjFejs1w4WG8N2bUqb4A7iHnFSLwmsr1n4AqZ2YozN4SQS466",
  "key21": "67RmxMobQj9xMjRiUX68fTpdmv7Q4f4fxAgHhXTpKpTdXUELJabmGf3KvLcM9yp44Sfy2sBu2Y3qPiLzxVhjiP7x",
  "key22": "5HvH3ZRjeH5z7qSrCreUpnvaox9iBh1ktTpr1hemTrwy5RAicSbGwVb9edNsuRjXNX2eo1GxdrCoVHPCcZg6QHu1",
  "key23": "45hE91RS59iXMgdSaghczm1TTV8rpWLeL8qdwfcY5RBp2skJJ2UbsjEGCwoak99N1M62PoprQjJhET7ke16jDcFg",
  "key24": "2Mpqxrx9F45r98Np47MJpNcvKCtxY2AVBK6UrJUFi5QkRKheL48VHv1W8CBwV7k34LKpQsqJYEWvZhzGLM8JHYEb",
  "key25": "avTgxfZ1agWvt6PkvVBPRedyGbGPG2oxq5qwwEhp7T97EWzmFhtQSTVUXmnPNFhdTXcCxR9WMQKPUbzftqYHGLW",
  "key26": "35JqcEpQ9TUawjbWe9591VpSj8iQqqRQGPGPW3dDSMSuqQ7JJZ5jihNbAnxrRFNUA2xAa9Zcz5XEfDi6sGLrNHk8",
  "key27": "efV7XjRSNTGVp5hvBhPabXLCgngwsHVYL1JghwEy3Ur5GHruRzqKM2VR7XWzSxSrsyQwCCthXjULajRxmwFBxW1",
  "key28": "5aXMAKphDDD4gDt29HMc1xLD7YzbKgbitdmPQTXz5sokkRhuPdDTLNa1u18K2qGfudkFWgu31iJEh1FvGAvmLj3x",
  "key29": "4uf7TUoAi4maZiEtjbntyJAK8ZWtxiz2jxHjpCfCzMWwXtuACJc4Udn7z9QRuWGNgkyEYuPYUBe2KYWoRC3cnAAf",
  "key30": "aV1xzmJQeiQMLQHBTBbtPozWsezQALff1vWh4vL71pj8XHrP24JdcqkBRxQcjFaC2NeG29J9j77EAiSMZTgtEDZ"
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
