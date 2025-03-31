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
    "Xdx8KC3ErjzhuMuQyTBfSYk2MSsn5dQLfb3VPvogyjDCjubyeGrs13cETjLUZVz8GEScwFGELjSEpwXXeozrunr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JYQuVDi5oHmmdyWEhk8C8dDtPRAvMhUwYXTSfDr2wTecFToRgEhmxkF2D4j46qQH26byF7ffrodcUuSZLLRQswh",
  "key1": "3fjrqdDEFrzGceEqAKAByxLymZhWpxbfDsrFDiFRm7daQcHNYcN9NTmeeNYB4gyDGdV1zLdsuaPGenju87xKyWzH",
  "key2": "HtKmWpWYmQ7dGHKjRQvCqh6MhzDPcCbop91aRsVHNtQ8mZ3nXinUyCdUqDtNfNbaaorPQywdBJWaSjxrLYUdgpv",
  "key3": "3fpzKqD4RV9ikxkhjsKjZ16jcWmEac2jeYxRM5c9o7YaHLcCDX9qoTNu6NTeTJXNVkV5EVhcWyXTM7pZsLCXAP1k",
  "key4": "4BTTXHEDWhtj2koQV24fV7PVUK7NAFP8dc4rDkFL3pyQLy94LJeMyrwvcZcyzgjdJGAyqp1eZc4HFP7Vj4Q8gFHa",
  "key5": "51XJMrZSJPcr3k7hdtq66uYrG3ih3AVz5Q4xNZK4Ktbjxv1Af8nkuWdLb9JYmVLFBtRQD1Hb6SBSKvwb3LYfrpsR",
  "key6": "gA9jauoCdkg9WeU3tghd4HHXS8GrLV3M4nj1LX7f7ADXCnK5WeWycrkfijAsexr2v6kWFUzj8H1DNvre2M4c74s",
  "key7": "5zocsbJcxE1bv3MauMGzBbHRkrcKLv9vK886L1zZkbCPS8Kieodh8pRNNnBSamT87o7dnv4yD2cgtszh74KnPovs",
  "key8": "3yPvEESwnG71DJCoUV3MiyB2MnT4e6jRbh6Jqupkt4W25FhyYeX6b6YZSu2kDDcuSCRy1mCzvpnwHao4xEWhavZX",
  "key9": "4pRbh5595PNqHFAqnBm9UkseUH5XMfVcKtwr5vGf7w9jzqu8g87MQhTsycG2ttgNXyJqgd8DtAFVCHDfbKJqto5q",
  "key10": "31645bjk8pw6rJfsxoKow7jJVgGi8PnBHH2feyZ3Xrvt8FWvhicBWzXnE2No5XzkaYGwNDJpjUBToMDbHkQWxTrJ",
  "key11": "5gsm3CJzHXAVhu1Lb9JHAoBJvUmMYsrAidvPuFPopU15PUtovMNEn93ppNDEGWwYLeSiuubjxSDk3AqVaw2dtKih",
  "key12": "dAV1ampTJURgjuu5hBdVP1UhMh8DTZFfMVWJXpHofpRLfifEbjmbuYPrPMHMU24p7Bm4eG2NkmZ1JT6oNSaoNHm",
  "key13": "5SoadHYCumvBJxp4MBGJNzUjvTCY4168k4FV9DKHvkRS5inZPNNSiCBzgSxSk8TviaW9BVXD1WoFBQ3oorDejY3e",
  "key14": "kzoeAufmE2v2bzPL6Q8fVntrfutVPJKDNhTB2WnPdPbdegJZYw5FJz8ivzX6RJ5GtLFAfCF1RoXDBkWd3V4UX56",
  "key15": "3cMurXjGzL37P3oWrQ6ASbbKZVc7bjE44CB5VpEmCNUDebyXrJ963Q1TTHp6Z7RMf4F5ov7iSXfPepuyxY6gMvVR",
  "key16": "tNGn6LtoSNM7WSRNVBYBD3uAorUs62aeLdtKqokXuDAasMNfBDvRASeyBWaQibzEScvQLbke3svcKxX4NEnAxk9",
  "key17": "3PCeN3vLQRL7nJ2p9GutZSNBw8DweeLbVYEd1FZaq8pCTuE5MkZAitLgPeN4Kmfg36yqmMgBicwoJBewQ8CtNmf9",
  "key18": "36zynr2WR988YGnAAzjVrv31wefUWepDfLveRKyJxvPMtG945eU416o3pviZ536dW2xHRr6Cq6qvSn6LcwDAmzf2",
  "key19": "2XyPMp9fLWMoW1SvDMK9se8chUDhtnZdTcPUjYB9HAVeDJMkY2HayvgSYzg26ko34y1saHdNK9ZP7hNWzf3h6es",
  "key20": "4qM99m27gnbWSxhqAAF8P9VueSdxkW4jo37o9roMzrGGJXhwAxvcLU1kW4AHPn4zyDrHbGiiYLTCSm3RVGbbuSDB",
  "key21": "5xxv9F2m4BrqXyYy3DxxTbG6RincZn3vJfyr18nJMQUdRZRhZBXw3Y1RarJ4A4ufpf6tXofen7BL9unYUAUSphZ9",
  "key22": "4wC2mWos5zTpncmzY5K6yXi22HvQkc4BwcRLLheGE85SvZiMSz6wW8F3sh5eepqsyYQaPFjL3nDjtoY8eK4q4G8q",
  "key23": "54PzkMg3fKAN1sqnXcuywJBrjNWegT2pKRRirHKVFBMfkqLPBhuWizSQ9wxNBrwcGrRcpE69KsThvFcDyeZzZR76",
  "key24": "4uPB72C6wPsGboTeayevbrUaWoTtummjBdRg79GWrbty6BkeCEYnKGuhyEHYhFJJycZZ7YPcuju2fXHGn472L1WY",
  "key25": "4yZubifdxkL3bA3XJLppHDaJpuhtmyR6Q4FKdCu3SxRV11CJr447Aq9FZcHgJWTg1NBa8fSmYFTRFGHGoWehRKSV",
  "key26": "2NaoxhrQt83FsewX8ke1wQCokLeWvrcyv1B3dzWovCvVEjQQceu6AZNjvs1KLiaahd8Smt9CUNtqRo5uV1mvBEJZ",
  "key27": "4sx4VmRBx7QBwTPQdSG9gRP7ZswSdZmgrheRwjYDApwSrcGdRD8D8T8dgWAHHMfePb5ZqG4mau6rbJ3bSJNc86fv",
  "key28": "5WTpHAbhxSAyPWo4vFs5dcjgRJAzxsYTE6BCye4uYJbTf4BnDEkH4uNP4gXpRevy13FurTa6QUQSRZrSbNzN6L8B",
  "key29": "3FmxxLE49yzZNLL19ViSZ3upTYJpe4yUYt1DZ79ajdKWQeqBHkV2PZTS4LCWX9KdDQ6yqFH7yzn3jyDkSS2gMeim",
  "key30": "2cYyqGpfnn7dko11hUP5gBhRQemyM2sCfd2Js2m4Wzuhd83L2XToo1ttPVWuZ8YWuZNSXEr8A9YECoiLodRKZeWo",
  "key31": "5bq1j3GPtQnmGaqWKrgoZJoSe4SPBYwjQyPTDLFV2bLpiZfPi6Cwo8ZfAn9z4sxmT5YHmtDE5oUYEqw2ZyxMazmX",
  "key32": "4nLv5VT9DZHC3zx4d5Go2mQMahLbGq2tu92s1rADGkcWdRj2GRJgW8jQQMQbxqRCi2NoCUmjsuA7BYvep1frR9gs"
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
