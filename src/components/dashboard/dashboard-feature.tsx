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
    "2n6hvpC5h6v6UT8Ghmbyn9znMrTWEyTinCWEm3pp57p8Gmgb15yXdUNQhnRP6zABWmiGsFrdgQGsDekYNkmpQMX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JszttAsvFSwaeofoygSUcSDri3xeNFza86E9kJyguU2XSSKfyYZReCKr48Lfb49CYZgjTcbT85B7aDmpvUivKTS",
  "key1": "4CSZN4xARoiBraSRpYsqHu41cFgug1KZiSNT4o8KbXaPy9xrzPa8WYXJdsHLKbc2XFEh3iSu2n4KeBM3T9xbUJGG",
  "key2": "kcaRdcEP7zbGvv8dp82o6yqmMLFS8BDs5CpUPH6P3urETfBHoo9zht3tjggQVwbW3kgzvbM5H7Q9BjLDQCDD8Cj",
  "key3": "4EQMB4Pe5qNohyvCC9eyBtZ4hLPnYJjaBLTHufshUViiRzXS8q4KMmGnMoQjeoUL1GQwjR8CkH6qDTyZ6SjqZxUH",
  "key4": "36XNAzTW8B9M8Tmv6LftY2b6zXo3s4NdbANoGgrQFDm8cPCcGon6SQfE4fQiw11RJKpNxQKcHzmidq8cKiJBSgZ4",
  "key5": "UPGd7sx97YavULs1xURPeN73CYBknBLNZND2RQxxnJhCkeE7rEphJYr37tGLkitx1nX5i2gJLRgG34bdzcHeUZx",
  "key6": "32vmL5TEuC1BPYefpu7iy44FgWJBVMzffawE7LQREVcx1MKU3XpBs9kmrPKcqKjaZPAvncugkKfENyibUbLUByWj",
  "key7": "3i6WcGb49UQ1vTvxsKQ4RkTFJ7igHxGGpfHjHVwwFF7VAUHcSv1zRHGby9fAN5aCvS7S44wMqzyRxtiXWT7XitED",
  "key8": "3gPuwaMm9LMx1d8A7ttPY2BRDVRtKek28pwq1AX2NrMEmbi7jyVeNmN6rKUUWyDC3CrrmL5iJ8zEHAADVfLPfxCo",
  "key9": "4cSQv1LV12BRCjJoniH41MQnCYEhCBUP4vKE1D9tz8vG3Hnw8FQeD2Jhf5FxYhdfHd8PMvmB2FhE1HGJsp9sheNX",
  "key10": "5TYPTwqAuU4Lhwi9H1tNQqFJ6oNVHdNeeajUJK8XpYYmu1LBNwaQVNnzGDK2W3iyvoDuQbgixoWsCs3NMz4ofBCm",
  "key11": "3ZFRBV5x4ecmcxU1WLaHk61jTms5g23t6yxgVkzpuoSnD2efchFdcW3GreE2cohwMewoyMqAaWDgD4hSbncGFcXu",
  "key12": "631SeCRUQKwribUzgMnc4qoxQ8yLXDAyndbkqUK8x2rfEQwqM3B9bRs8FnsUeTPgH652MCDDE23kjWrGjfAywLMW",
  "key13": "VJJNCxLAnvzAuVAAu7mcCYPu8qywCrHHA9JXrvHpYYsqG2UAeLCCEt4TJvKuskpKbv55NpTLGBDy2iqiC3sMneK",
  "key14": "3nYMoogdqDoAm6DNNR2pDyAj6qsgcCropzWCDWhgQGnLu8ExK5SCpFGMGoxPBswyHZpBLgBXHpM4BaLUn1iWd9kE",
  "key15": "FLq7vBX6K6cRnVYDYXzsAMB6CYoGUs1rRb1DmT3CxhU79oMZ5Qg3ExrcXWeGz4VA1oksvQu99sYbyou7tm4Bdcf",
  "key16": "2q4chmy4d1hbdKa48mNG2PFahMj46LdYhva3w9kNCbP2z9nvbfAvTBZnVBMKaYPFsHzPdfq2kFRv9mTT8itv8fZn",
  "key17": "59j6wGuZ1stP5VEZXY2mUwQR3dncAoF8PP8xEYJcG1pNMW7hezYK94S4tnAv1Ejw44Nhs6xkakqgWfwqLgxr2Uvj",
  "key18": "FGxxZbDwmPy7sHMw5X7NDusjYA163PqBsviwagN2Uxes1oXkLywpizSv6gqD2t8ZEHLtJeVoVLLrDo1LbdvDbfG",
  "key19": "2cE9LWfVS4h6MSWWh3WKTsk6ttN2kGWAPo6Ed7MANw4QbDn94LjeMQ7kMykMi5VtmLHF8Hq65Cv9V3BLv2TgzTij",
  "key20": "2RNwR1rTLM14nMBuQJYedV8FfCfCFj1TcHfnPJeoNjY8WcTSKs151xfsWAHs756ug8vcyfKhrEczteNeEUByujRE",
  "key21": "3Fz9BhmtirCGZFjEwwiHC8NKcquoihv1187MYFToBNuD2U3QbytzJJyjfu9aGYwcWKuWDFC4vUpMeSMuFCJUqRPB",
  "key22": "5fKthNZ7N1WjUwP93ffZ4KoazLESz2cySqmeBKaVi1tXNvN3mdWA18t3Rxh7HrHeJQHXrJSmenMEbggi2mdoehWa",
  "key23": "R1MRvX2tHcEp2yRxzEQiz1HgTu1URuWVewRAFCF7UHfF3j2fdZQi4mqWDpCWvUkHrcRWeE9HZB4oHwxtV83di3Y",
  "key24": "3TUaMBLTP1dvGdUEqiAWGmmsaYq7MoP7wBoVVxaJ83CMdTL2Q7aWA6S7qZz9vBiX2c8BUhFgZLYnTSqJmeR1Hiu4",
  "key25": "2DSF2CZnWZtuNvosUeToAK8P1Tu7fJngn5ZTepHyFjLwsQnETaCVA7tf9fWbU8Ha1ZqHYiUzYS5Cnp2guUUkno9D",
  "key26": "KZbRFzQYGB9LejvGn2J2ZMHrsfCWDTEkj1NuZFQNcS8bkMTT4a86GYvdNVeV6kvckfLeYEoA2CwNfrsi8LbsDNZ",
  "key27": "5ChFBNLJHXUZvBcRp3zmzFWNPzy7hQzFw3bNVJozNuMo1c5qLAFhsjSn6a1nsh92dDi2VPXReS23PcMJiDJZa1TU"
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
