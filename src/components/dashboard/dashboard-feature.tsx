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
    "5LFAumeRSAuwv3fRB9pXpqVQD95toQzDe7SFwGy2ZtJ93hF9cYrGj5L9TFNHKu4inHu7AUwJUmDprBLBa4nobs4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FQ83oGnX6GbmJkVDj5fexcX1hbu765n2QKBgRmKzEv8XQTFxcBXCM5qJLaX21v7T1cqssjfAyFNC5pLZqdM1siF",
  "key1": "5g1VwisskMmyi3F9VsbcKTxbYsNVKKmNQ3EMMVQcMpejouZsTdc1HxRoWdiuh3c56hpvzN61yH6KPLbzUPKqNywp",
  "key2": "41kDYnq6j5akqhF43yrs8P5ehWjwN8PxzBGr8MbM7mpYNSDVcgDorkzV9meDtoKFaqYpCYPNzM78TwANZ9ZbwwZ",
  "key3": "LzAtj5K4tNUwqb9p5FvhjxD9coPU9kALQApiRBWW1A7aPRo17GMUkL9t2Y5o77QDKWsxZmyuiERZ51aimQTcRBc",
  "key4": "4aDchhmEZdYYvDa5FLbLeAGo2T2KYcYncmn46vafWbxADE5SirWync7WCiBYgdkewfFAbtXzk8Zfze7RQpUurXai",
  "key5": "5JEc8FW4NC73fpxVxvLLy4W7C47pTX117ojXNFkbLkkKfPsv8Kto5pvwffTohxaX2dRMQV8QLihNRmt2sWWqwMC9",
  "key6": "Y9u3VmhwRkxXFu9GCV7fznfmamu5ioQGyULymeQk16NTvt4ATxSK7SzS7kWnVwvZ7SH2op1Aefqniibkf7xArvY",
  "key7": "3Er9eVCqL5AMHhZ7CMJhD3kPkceucyGNAQqzHxTndNUcAiEScnuCCzSbUp57QYkC1H3fmigDvrYsAJzEVV3jDKES",
  "key8": "46pAia65UetU5dtpDBYdz6k3RJQ7xGbFZSEzRemkXiK8j4QUzkKtLRDdTJLoiA2SgnfuxrgeYd6zVuHQDooo6tRY",
  "key9": "3D85ZseZHamnsizRKSKmJBreDVsCSxXLNYX7SYUWbB4ZF7U7gtZCMRuDwNK4jz5bveDVjnv68tBtAbyRw2dRLpG5",
  "key10": "ZxkDt46xLcBtTBy1NjjHirJQDJDacTtGJBiUGYuQBDXnR7VQCU38UFuPR8c4sFPGU4o6uMrr5zCm72ZWjZQ3AX4",
  "key11": "dEvvSAuykS5LRFXsNMhpcG2iVxhCpDCs2skEnbsawyrhDkwx1BVmVKQtbBj215xgiWnHLPmGtD3SZp6bVJ4vSy5",
  "key12": "2D9mp9Lfwqs7U5iFv88NEctAm3y1t2gkeaJtCAGKTG3tD69gTAEGeGYn3QHf1MjNxCfBKvH4fwWXahmjr2VtnLGc",
  "key13": "4ZQTPCoUdoXsZdBL9CqVeYEFTYsVmdo16njjTJbw2khRKhwCmoi9aBBMEQmq2DAvdkJ8Ls7po9nR8xAW6ed4jiy3",
  "key14": "4jtBYW5VDEQ53qY3EyqG9YMe5GacdPwuwY2zcA29X56qpcACuhjrBSo9PZfqePTSJyxRvtaqM3eDKi4dqRHKxU9f",
  "key15": "3uk2JSHQkNEwUvShtxr9jYWMyYt8JCaizPzfhuLMmrPB1v9g2Tkumeo8HEggCHjwacm8pkckAVgGwUkTCHNSDgpn",
  "key16": "5dEnZscM9g2fjQJTDQprrbMHRbePf8mcKoFNqudGiKugptp8HxPNHW9M1nPz5b4xatqJsiyK6m3n9qU6RcAHrk79",
  "key17": "5S1ApfMpiiXkVYvf7EXPnt1RfXgJMA8osfF5dm99LcjV2M8dRo4eRXF1UuomQ4gwtZpKGksZd4wxKMRMGPJfChC5",
  "key18": "32Zhwret5XcrrLraWFkpBfiSuL3JhHj8wnHWZrGKdqC3PkufHgjCq8VfPRjx3f2u9UgfpPCDZJHxsNmcNPmLYwGF",
  "key19": "2V8q19LhsRxHc7NTjqUMhFPdvERtxpdXndT2asCZDWXDcfWgF7UHRGrf9urQCV7TX3biDbX4fUfHwKCCyG6pPNzo",
  "key20": "53fwfSehYNLPSKhC1AksuZV5iALJAxqsH91gC4x6kRxsHCJ3FSDqonZaGJBgpJ2v5T5oDF5seoaBCKXrrrGbX95M",
  "key21": "2CuGgcNsnQZ7eYWtB1D67DnHQSdgz2gy5MXcygvNfEZTTqmCUV3jUQZ4T2UhQRkmL9BPRWF4whMcGyRXF8GLKVFk",
  "key22": "2WqbCFv6ikDpB5GR7Xtws5s6B8QhYPxDEvDZUWTi8mFobujQq9FTECrtHFM6G9QCF6qTK16Nfxbb23HwTBocEnvW",
  "key23": "pqytD2RnPCVq5BJTpTfBMbZAYQ4RtvQ9VzAhBTpgoWKCQP9g26jNk3mgNnYRvhWFypE82oV1xekaJTqwntgG6vx",
  "key24": "2AMxrhCRVk7yP9PJqYVCewpVnYP7ygQoiFWaAJeVRnMeQZCh4NhM69UgC5tY9fCUg1YMSaJ9MPaEkXafUM6xY7Xn",
  "key25": "25NM25ZmQ78eY36qptrUjTDWr8MLL7AMb9JNC444fCgboYTJbqjmJ4r2j9Qeajfu5p7mfcdiDxW8o9pqYevgB4hD",
  "key26": "5ZEnCh1PSiDTYNznMZCW4khhhf7JokgeuhD7HiCio1cTtBTAL4oDomiS5omMbPoEwTM5DF6vogib1jyLw84Tjvcx",
  "key27": "4FcueZ6xdwyJNnPP9hn16iDfoxgu5s4eqfnQrnSuZW1qvvaHJruWEFf6St78pyALbrCpGsKKMCCgtpABMsKE7qdB",
  "key28": "4VyFiwM1j4dEUrd7fLmgP34V8jVFodX7yjxV7mTqYknGNXERTzcTTnds3SPqs6nuZ5yW8wZcyHsdYjtkcaA5FBPs",
  "key29": "sdtjCHN5KZtDxGrgnhcKFdP65yYvC1NknEE2FWAm4qTuvA95xqVEXMbMWVPAgLWji89uhfJeLr64jypvvvwTuQi"
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
