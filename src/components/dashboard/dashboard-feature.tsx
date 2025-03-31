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
    "2jYtNTy1X3Hvdech4QEMgFiQuZXTBwnEjwbT84UKmzU3WyRjHV5DYGDJUfcT2U7dJSNBFi5s9AMfcV4931xQQJod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2usHuBdZbtF1mDBNqBuLV1paQge3PiJWhx2iXH4Xs81589nGHqNqbmPtvRQxES1633WwWNGGA7zdqY5YrVLijzvT",
  "key1": "4KHGocM5Z2nfyfUEPtj6hfa2ronHHRSVVkJ1fFR19HZSkd1XqBuuMuBM5z3ZaqABgHf3hWFVgMEXz4bYAMxiA5Ah",
  "key2": "29eZ36roJnZUkBcnFS1HLjP9z9QTf9pY37kxrmPMrKpJP1WfuBazFon2SMMtenxwBUjcYGQSGDtMBAYJH5mfeBjT",
  "key3": "vGRFZqYE4hYnCNdy66aRX87uQ7X35FZYMux5J3E59o3j3KheH44F7uYhbhwhAi8Q7vVXT6i3VHkuQSpuXEhTjNW",
  "key4": "71QG3iyLCvwncrDpXGNPcpoVB5jYkeEixMRGgWH8x3d5qHuy6P1PcGzdWg1y3MS1z9C5NBr6Kry4fVyteb59Xqg",
  "key5": "4XzkssofDHjT7cBCB1KYVoJAbCddMjtRRnnGRjn52Qk7TuRRs2oJ3CkKEtwXrqeSqMWqMhnNMSs8UWStxDzvvjHP",
  "key6": "5msCRAFM7xZ3x4r6JaYBPjuCEP9gYPMx2qswHzeT5AZ43rVrULMGpR7DvYKJDGQCVKjPCfmZADAP1MHAYuPwu1Xx",
  "key7": "4wd5sfgput5ReffJtPKzPWpmVAdzfPaojodA9VE1Ja7BqGeVCZG9xiKN72Sj3X5485NGBsV2vS1WJWQwbhVF9Ekh",
  "key8": "3aUsTokpwdWuN9TS3GfMb6asEEnZWzUE4Xy3EtuV51dtb3LCT88FEoADgLkFEZuNk7ajhwR4LA1VaoskSd6oN1E7",
  "key9": "3oEq9zxUd8QiDi3aBwrwSBGyX4qocEGhZ2B2AtfdmvJCdpCPb2nUYriC4gskV1kYqd5eDR1c4HfSpghuCCHmgSHS",
  "key10": "2GeJFqBPkuroQoRCsBFN6m5UVEcVJvpbKLhrr5jN2iJLJgTjQphjZFyfDCH1QLsmSwMGBnVhkSYq8sf56VQWSXrF",
  "key11": "2C7f2pebJSvjvrqLzHuUqDqSXGenGiMtLGQv2HN1pSG9HegUgtgDoiMahdRQBxQYgrPrE17kyb1x5BLzLNUmwwGa",
  "key12": "3VT8Ua7hMqpy2J49YnYRos4bTQkUAX6bhiPtpoLkN7tBorubvZgUXsRgeC7Ekeg5S7tCukHTBWWHnze1GMatWi69",
  "key13": "44czTPe7Y2Vt3T6MQzdrKganervBSDM8WKqgYa1JCTWvLFPSn4eZBWd7SG1SsUvRbLrq3QUfRJbRwgRTKLnYVvAK",
  "key14": "5CutCAXf3KgaH7RnSvaS8yd4Acd7EoNCddqgoHnVAYFK46LQe6MCrb12XAkPiSRxcRJxTjeBWjKtMNQyynCzDJ5m",
  "key15": "2JVcAMQcs49PHo3oMvQ8VHUMPFmsba3JYTXAav5TD7kCgeNjVx4xLBuMkJtY1mdF1ubNGASpFn9orzPDavrxqQuq",
  "key16": "4UfGseHUgvyQ53rqQxw1VTGFGVrQig7qZy1q5i1xk31HeVJumrZkuqFh51Qt89y9qeLFYJcrjiCTAdj6Zeg37K17",
  "key17": "g1JkHhDCNZP1q5b3eLm4vaYVfWeWWS3K92JUfR49iMqH6571WwzLeqcwJvQEqy1G5mavo33oAg9CWCmZdjDdYy3",
  "key18": "4qaPWHeeuvNtmcnwKLstt4ikrnfKHvSQ6WemWsTBKGAGzh7xGpjRPt6tFoh1w6QXmKsWq7WLLoD5j66UwumfmynN",
  "key19": "5Dr4e92wwei2XWF4yLiPM6KMQRaZED3oZaK62bYjecAHwizvoWbrW2QPx713eA4VZfojzjPBAc3hdLxHwFcpcjWd",
  "key20": "3AA7r7LiU4qBNUZB3TvR2zCX8X5txLZYmWRtNpDVAhaULjSeBktc3D9BR4o2p1hovvu2zNVYfAuJyHMVk2rKuVwH",
  "key21": "27kKMaLa7ZokitJunTDjbroViaBeTtxZMSaZtMSVcDHWFFj8nqFLEeimdV7B1sfyAJk9GKxnsRw2o4AY9JPQPjoB",
  "key22": "2uu8JNbQyuJbrDRxHrzPoWZcTCBbyj2wkB5GbNwwfZn3yDrskJwVS47NNxR7TZSnQrLTSBBtPBtzUmkAG9W4Me3G",
  "key23": "5whUYcTGVygbLwDpqKGY12AgFguCzCSwGv9YAZAUfwjMSFxfmnCzLdihZ4AvDjJ1ck6fJNZ6JWoWmdwvAqyTYien",
  "key24": "hEUxacnDMeg8QzjP2tVd6TEzpGCvyTXF5rULo63wonW2Zgbuit7DiXGJnFtMEPTKNm4oWyEGL8SB4idDEjCcXf6",
  "key25": "4MJL2yPjy5dTFpgSSmo3JefXKoy46EMdoySNgdVkMSTejhPHja6DQJGwvwSnSpDvS2qxejyrC5cwRLwZRpziYqJe",
  "key26": "4giLyuwjSQZZxcSJao5qiU6ck91xJDfChfMrWx2HEg7NjbfQYKfuY3gnwyp5HLEEZZifSGnaKzsnGVRVAaKTGEgH",
  "key27": "acyAZfgbMbYkbhSQpjt6Ftjo82GGr9mjKB4aughCtQAHvwk3M64w2rEGX5feSMn1rfdmaYzXTijybmbYh4G11Ak",
  "key28": "3ogGRhzwF5Px3iGYmFYhiRrDzMYrJW9RiKHLnQ8upwhRrrV2ZBcps8EoAqWYrojDKiXnTmJ11gkwtDWXSVTp4Anj",
  "key29": "5uB8RCHhzNbQU3PELZhytQPkJV2FmHfF5HR7RXC7SUB5GLCpEibY5298vRxDf5taebdRBPUWYXVTZcdxHGenagkr"
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
