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
    "5Gko9gbU12KN4v94nCPeVzAFj5EzSR8xTYitK1ng1jQEuGKsd9MUofRhQ5sC2ZEGsN4r5oW7MDcDTQjZkC3cJG65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47fsafM5n7iBB7GBiDY7ddmitwe2HaBXd6KeaRXdULvLRcBuqFxS1LaVERZYnFN4RqgLNxUTEsMrnqcQ5EcB6mDx",
  "key1": "4DgGJgceRRbr6DmrHyvhtHENyUkF82rZP79tmfxNZTS5E6v9o1PrgGiPbGU4xg8WD5uUviSGZYwrk644WiimE1iM",
  "key2": "62q52GuR2PcCug9vCd8aibDGN35bo3g9yfS67Hh8yFrKVHh1sQD44Le3myYojBRpDux23SBjn6jfkJfS8egQQuGx",
  "key3": "2gftrc15pZWRXdd4e88YzhScqbs6djArzHfxkLGyykhkb7XyRzqWvrUWkeK4XaTaem6JrU44oS5Ah1UkPNrg4NLQ",
  "key4": "AvMz1LZpHLeMqXrZfk5Z7bdDJjStC27BeYJmEyYr7XPBu23Fkr5xzx4xsYp2Ao7U4Yvp5pamnW5Mp8S48isyLFw",
  "key5": "2wMuvJ8jbXTjaBhY1dsyNMMixuKQe7BnhU1pvhesbYammMNeZ1CqhZe1GkRWiWxRCCU4PP2U5QYu13G6qBQywKNZ",
  "key6": "4Uh6EVgoTWQgwD45EZohoVRu8FZQSq4a4KojURrBiEC4nXnABnDxd96siwT8nNyKxzSyrU2WPPrtHVTGfXdtcMGz",
  "key7": "4TFh5XULxFHc32qeV1VT9UBcyKM8xqnyKKEVXKDgixTppti5E8SGeytzJueqRXobkhyJsJTetXuaG6WiHA3NtZfb",
  "key8": "4e9ZvQBbQjja1RXA4jofXB9U6v6dU8J1U1pfSYC9LE26gQzcazX8GmEqT4vqkRX4LrNeU6RYLESUEWEN7jhCQoHQ",
  "key9": "JMSK4w8yGdyx4BKpp3JMxbQWtm2nQp3veYf253h1ENAYwtYQvAZoZdiWpMkCE9LBgRdDNFEDbUmLkCFsj2MsPJF",
  "key10": "66Wan8QDCKdx2ejPwiiBESXq3Lt6L88iS4jba9MvCVbgmho6wrHsnwS3wrc9qoDcxNEmkrzcsT3Bt7tWs1feY3wc",
  "key11": "YVN54tcZR8VZ5ei4pskG2WC97SFCxMmgRryHpKa2ymHEzvcgzqxshqzF4VwU3izNLEDbJetpoM2EkDYkrthmHSx",
  "key12": "4DszUJLNhMUs83ResfPsjvKRYsE5zhyxeEZk8ZXqBX9GKRkxs6UNUNLF9nYJoXzhsgvmbWNkVGFKbHuqBFa795pk",
  "key13": "Mw9gjL1duxQ5VQGFVEns6nuDmPRCDK1wtzgUjXGtMszfZTh6qc77iyGrrcbGVV6CBgnqFZLNkckqMzCoE5oGv3w",
  "key14": "4So7JVz7Jdij8Pta7rXj4cL6EsvpiA9ZdoTCHLXPjiRdrhDyobg4Ja21ukH2p9qm2MECfLGRo4tPmB5gBKFF554M",
  "key15": "7yY4tAXbThFNAMp2JDWXN2DB6gkZYi1SPzARXzAspYqYCWWw6MEG89bPifGLMAU9br4gJk1qWb7vitr12GVdAY1",
  "key16": "yLiVki7Wt8WCToGHAMeLGxsYGgDo6bTSLhe9dEFybiSDKNa1xh8HRtot22b2pnJJS4xnWKS2QnuvJx8t725r88L",
  "key17": "4LdBYw23fceSpamuQpwQuJvwAkfmY9h6mfe9VSNSzmmwdKeVSgnyED63uoggX7kDc4PAocv7uusR8rWJfjaipfBC",
  "key18": "4QDWCByG9tF4eWY41SdUAmfseYL1UzddfbFwFko9cPznV4MbnbuSbKkLSx1UhTJ2kWzCdxLdnpHKGaxbhKYGUcbh",
  "key19": "4ejhCRVwNaMXnfry4gsaGgMwY34s3MpBQJ5Nd18CjifZkH9xHJYRZJ93n1uSzvUCJZ1hTXbkT9WMQEVW5vd5wyEd",
  "key20": "5ewNcCGmHmGcAP6WiGXQdyvX8jKoZg81XCd7UEkgkZxA3Paa4B4Jaf78PHuAU5KxSgok9MyTYWeG1kBPT6ENMuXN",
  "key21": "4KZyhfXXEQg6xGaGcSiR9PcRh9ryArqtAyA1UE1WcHVZV6fshv3G6tioaCt566QJSSwvCe4cSKgwzU4pCSPmB5BZ",
  "key22": "4ei7kRbX1xhzB3XAwVq1qxDbqehMD2tP3c1kTDWaat8rQdfq3NwmGo18Q7yjip5kDg8tPaJVYBGCyxxr34spaExU",
  "key23": "2Nxo2yrzWQ7u6LjTFk4qwhFnw2NKm5WNWyJ2sBdKN98VfY7caaeydhneabbTRTREKaqppjkuTUxGeZH9MDhvmxiR",
  "key24": "3ypkmVPkUV4aNe3YC6SeNGmGYZygtRkaQnjgdbuDrHFJyQ72rSXwEQm8oXEyrKGyns1hgcc1iRVsWqTrQd4WZARd",
  "key25": "3Eq8PMsBVomby4D1sNWogyhm5BajzJjTqSiSWa6Cqrq3PuAVQJuKqVfGUqQQ3rs9mRj91fPAJZHP5REx13tkZKWE",
  "key26": "4nE7tb5CFx3ixESpSPeQK1CaQeFZV6zVEjxKBWXVWTXB5W14GpkmbfSqXjWK7PjrP9eSarpMavyqnpUYS3SgZpBb",
  "key27": "3oNvhYbaVjbvoun1Yp8KZ6rY2NXGR3y1y6iCPWe53eFSostS972gN3GTTCZe2xALst2jWAAegTUL6bNgra7oKrxq",
  "key28": "YFgc4aCK2Ra41MyWkm45kmU8nVyXY2z3Ua9etnNZBjqxExaHoYcJqyzRgyTYGoPfUQEmjtxEfBrXNUWufs5MGMh",
  "key29": "2dVtwGEyZTaEQXSMMuUJhQx7b62VbCfijuVaRiDvqisSnSiVxgw4cuumzoS6HeqBGjsKQTuzgYC7gUJAaEy53CvC",
  "key30": "2uwDbzDBtAhJN9phYGQ8bGcJYgKTkoXWQbBV5bgG5T2nzpK171VKo8Uv7Cd9w8hp55HTjN8kNxSp9h7DgspcrXQX",
  "key31": "2Ru3vYdGf1TVySMvn8q4uP14VkGtFB1YaBTkt6i1sKWrfvRy2gRRSE4j7SRY4D2UjkaNj1WBm6b24xyEH8AHqZ8X",
  "key32": "3LZL8L6Y8keek6KLYY6vPUHtpzccfBsDpQbw8ZsKU7niiSwTmCb44Xgr4rLFj9P8gh8f7xeAy1sMi8iNTJ7RHcra",
  "key33": "3m54PTAv8w7AvseN58gcNdeZwXaEVHLCNga7wdiYq3XzRiMRa25kiZ4rcxEfAUQKwznKNyq9R92G48gYEtCpWhnq"
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
