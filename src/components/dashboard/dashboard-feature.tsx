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
    "2YpgvKtbQcViCgB8dXejunQ33kfTCrArXRua9B3M926PjHz3u45QKuxZ2a2Goa5yQu2UtgEeHwzrqpt6wsbMt8an"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JeYmLSrZEriWGuRmScwHDBPLiR62JbS1pVbVk5FRcxhxAzbu2Ti5hrxp1CKj7Rnar2WJtC4BsCrqcRzJCE4HyGs",
  "key1": "22WQEBvYJPb4bxSopqQa6mJvTbxsJNxQd9QZvJ6iYCu48eYqbdJ3Zdm4p82HYKGjuwDygvDsqE5Se9ozzHUx43vU",
  "key2": "5K6BXEVhJXB6QYKu5PeqmRVeReg5RNvUZwznYeHabsCLZfdtgiMqsZo28FTPD6boniiSR3U8us4Khp9Awxn7FG4s",
  "key3": "5LP5f2bBBreT1Y4BopQ22VkjgHMWxNTdqwHrc66LHoLpuWghNTn6869eoxfD5jBtWFEuDx6M4zh2HyTVN2wxFc8N",
  "key4": "5W3rtQjMoLqyrcy5YzV2KN9A4WTjggHPankgagBer13rguNoj5vogKkfphmoJGZH8nJMiGfTBUEQDm747QFEpMst",
  "key5": "5PyX2gAJvm68BReuYAXNkD751z47By4byjGPJHc2oE25WVQgoVswMM2mky5f185bZXqESD4x6RugZ54ph67Ezq2E",
  "key6": "5F1XCfjyP2ZrwjYToLmn6p7nNmN6g5fmwrPkAEM4ENRzTarwNiNCvvHU8XAqVn6TuXvdnPJ1qnNBNMKAkK3nPR3K",
  "key7": "4PdGksXyF9ymAamTyjrbXGPyxuqSv28sPqo33Mga63f2TprQ5nayWzAaUSYemePzBuPcmVLGjWAGoWS8kMh3tQ5x",
  "key8": "2tVVJoQsbrdxofJbaG8cLtSt9UNKrs9Hfve2qtEXQvzBum2sYUS4WdqvbSkJ4zPvfU5zfM2UKPQ5uVSjmtoa4EkZ",
  "key9": "3GrD9uZvB2MPV2xJWkHXgeSSRCT2WsGySQSmi4cpmqKAtPX7w2NqpPzsw4PuFkhKRLDFPmDekwuwxRmJquTF9sf",
  "key10": "48HJ5sPAqZdAqXTeqbj21m9mMvM9978PrD5zFHjHJf6ZKpy3ogxKVsnqLvWRjtz6sYs3Rv6BdQWDXboC1ctaspA8",
  "key11": "5PhmbdzuVADk9H21eGHLikCydcRJPNeq9NzVFHx6vvky4LuLHxhdserh3GT7xR9LoyhTVemDwkHGXMhJh142TLCF",
  "key12": "5z29N3iXjS5eFak66MkkB4C56UcyMHFrUUSsqPZUhxJAm8St7QGJYrRbjaijSAyENK6EGKitg14M2qd8dprWCxeT",
  "key13": "2AgN16UezNVMfp9SMU4AZMbxcfqquUAkEtM3jpDtS3ZYujfogCVWomxVirHQ6eriSkLDspixSE8GT7murscQEiQb",
  "key14": "3uv2sEsqpZ4fcRgLLJeSFEmzAWSVh4nxner4UXvKts4sjnZ8Fv3xoGsqg86MM1hedjuwGghjPFz14SgsFFWS1oRi",
  "key15": "3hijHhpMZfuiHCSNertTharBpumuqayPisSWmcn45n3CeLcuRqLZ2B7DjunC8E8Vu9KirHEDwV7JAt6K4V7Liar6",
  "key16": "2nnqs5N3EVLi9JqbnJhJw8dF83dwy7kKDEUoxLDSWeD9FqybmnkttSQKUtCDoQSowA68n9PP8GRZZWXhmgbGJAiJ",
  "key17": "5vyavSABMKnT7okUpzLzFs7BzBumMxQhJHjLz5bQJAzu2BCsc9apCEtnnfd5xJYUr6RkLXRdEAymsVABjLT3WZaH",
  "key18": "2TSsNPKYef69RakMfmMJX1LirowKKDR6so72wycfbgjDAqoU5inohvM3AKPCq9bRn4zxempq5XE7M5KTpbZozhZ",
  "key19": "38PDtfqYBNeuk8jNCvjF5Sf2Zk6FiUmA8vhhq4HmxrY6gjRxpFHN8AgFuhtpXhdQVUPkzut84FP4FHkQKd5PZWaY",
  "key20": "bbcVqudAJYRP39CeFg28fxDayA98wjpE9Zn1rn1GwBbK4sVLTMXACfWbSdq99Lo86krpeV65gbdKvZ7rbNyTCEm",
  "key21": "W5MdFuMHWDqUWBpHfgfQ37vgPqfhdnhhp5HQwxqdcZc1WGM4GsQcnS6fxQ7UKvB5MLXh8Xa5Z49JsGF2BkvoPom",
  "key22": "5Ug3CmU7xYaBY6gAEDSSyTYSrSWqd8B1x5nrMc6bivAfYZLvedbffwBWNVVCCi4NXEabiMn2oLut7zxtU5sUBrBz",
  "key23": "5CLCvdq4oQWRwYkXtqH7BdNjFSPGpj8jDzHALEmZmG5PCaoryEstvC2gfovXVzkD6MoDNvPHurLVucU1xE3C8uje",
  "key24": "45MuvJfXTan1YUo9AVApe4asJtDxeN6UGKKzWTJUY87Hja1VZTEUKSgdz6hYaqFvK6uAPL7XDqzsND7HtDbid82n",
  "key25": "QtkCvSTfEN4wWgnYydpxK2jDFEckz3J34SNkmZBhN8UjxznndLxfjdcFCp88Zms5fyDKHDPGFNq7bfmwbT4ewEA",
  "key26": "4M6u7D9LB7HUmw4uv8gwZCweUc45Ex4JjTZG4QG5ZA5ie8iPsXiMaGqA48ZruJfVtd3tgA1GFmvpkw4HVfm9Weyz",
  "key27": "kjQDvjYeJEJhogRa2eqmb8198xatJmqNZvZqJ537RsgwRmCYN8kjf63QU5xPhdmbWSL91Bp4LGrJskK2bQzQo4v",
  "key28": "2LHhSV9X6rEznKQw8pFeHu5mRGyUg9rsUzkYPXi5wS2R84Lh6yg4XZ4cjNxtNoP1ct36MU84QAsMCoBi4x1eNmmz",
  "key29": "3Erq13FCwMiUwiYnovtbUND7vRJ1mYAYm8uQw2n1dQvXQGiXDLBATUWH3QTg5v6s8GA1ibwMn1SKrtc1T96s4shV"
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
