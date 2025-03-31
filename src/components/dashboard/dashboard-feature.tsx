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
    "259beutExAsyS7g2ubgff2L51tFe3ofLUJYDwrefQychWvyHDcFUvBWTXjtkj3rogHtnkDCoP2X9nnrghQvoxVwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zjxAkMLrqK179DHeyDk7apw8xo2g1DaFwHVBAyfeig87oYEFw892C8HSHwg8X8QYhBybo6bfqEkPdvhWHXf2pmX",
  "key1": "4rAy9ADSV8D17EgqtuTEAGTn4zLHD2TXVMX3tfKXM5xd5yfVPuayNk2XegMvbESrGQVpTK7Rz7vz7UnGiXWH8FTi",
  "key2": "4LuLvAKEnY85pFEqos8i7Tao8UaKVYht8vK3csJVUa8PSB1XTfLdh9S2cHNPmhJ6ViRjf2qYAfhwG5TMStadkaTH",
  "key3": "4uHBVxrNz6hWwX3uvvHmbAfnCMViRimnRkbtrN1G753NNG1kSKjxEXq3tgH8p6w1i1MUfTA9TbdbEwLdaVgwss8u",
  "key4": "3dXhXWHtKVZA8drrZ6m88TvDDw9PiTpU43NX24JbkUSsdwEgZ4dp7F1BkbRNBV4F7DYaaCwbu9UVj75uhof4haUX",
  "key5": "3zxpVXNsm6SotCCR5LQQAvbPtND1o6bxHhTCxEFiGUM4D7Vf8TagviQPoZaT1B9wQUUMaEiW6osiyMxEmcBtdAtm",
  "key6": "eZXsQqiv7ZXBJN2tk1fXMSYkUvrTT3MN5EqFYxbbYbDjWEAV8LzvxWkkh1p89c629fwWutm564SVsjnKKVtXFdQ",
  "key7": "5zDuHgVBxmrYLprNmukWY6j3DbBjF5K6kvNK7TPiGH4uBvfecVbEbgeCPT83MfiHvjcLDenxGiBWcT2VoosD58Bm",
  "key8": "3yvA5zr3kXc5Bxfd95ifSHwkJkfbX1iHQoUN5aWBay28s954dtEgc1nGigkpFw7PzreSiE6jfryKvxebBQsjjwrA",
  "key9": "5zpC4qXhmLazgjLChDVzQM7S99Rgpzxm1y3cxuPsqqfCPZJFo6u5uYUuMctkHGMFd8SzS94Do1VG25GYuPa3k7XX",
  "key10": "3qpNyDDPk7qYyQ8XSG6EmuX88YCvTbSya1ByrwKqpeccccWNyrBAX3wxpRSKqLY5VBaQyrJMrGS8Atb94CN2ej5c",
  "key11": "2k3rMF33vrgX6KKWFgq3bgTBg9XhUZuswZf6KYwim1M9PtZ5gRGuvUrHjwrMLuL3jrJWcfSdUzdiDjFmQXr7fN2j",
  "key12": "31CwVpDt3zxiubwGPfBgTCbpdMfpNaryQDcmfVcd73sgotF7qLZ456p8cCmotHK5WGdY354vYLqJJYmGDB73o6PE",
  "key13": "2AtLvCbwVTB73hhTviakfN9nvTGcfXmTpTFdTW18Q5tfNAWTHdnFjYyQxvBBbQW8RP5yMfNCV1nBcy8JQnFDWQtf",
  "key14": "2EJb69GrBiYW9CPhVQ2VEar7sJpc8qCpA5AmbzyUz7jp8f7DHRQVybG1Hhm7GXHZZQQaYrJUCCKmeZu2QQWyXnX6",
  "key15": "2aESCAoXk6HqTvRH7WmyJeW6gvNbTaVRtT8o52UH1QJxeswLgdwbKmPDnbhFYma6nakoKpxmTTs46ZDFCaDXH3KC",
  "key16": "59axsveUjPZK7MBUmhXtuusUCVKyAfHt9Usx8sz17rBnCxi9dyxJKhmAEVh1kJctB1wkYzhQcBkSJQ1VeWMRqzhy",
  "key17": "dDdeoRJAtA4oafvi8BFhxxDnWF2NP79GRh3vo5E3SNz9HsQdYPcCZRErhunBeusfZgrYzDnp1WYn2pszu9SV5zC",
  "key18": "26sCvW28nxsy2gMF34JAqVRJ1UNHo2eGZxfRSMpK52D8Mbj8jPGJDzsQnHoePiqn3MxX7ME9MzmEibettVuHxQn2",
  "key19": "NxXbJVseTwa9jSEfCW2keuvQUtRQrztoK4Pdx4nESdue7cVDkF7jUKFxrc3xwzzo8yVrQdSKQ8zaKZzmfjPTKdm",
  "key20": "23z45cdUjV1K2vNtiRB6c6RjykZvshJgw5oqvBMYz6mnjhaAaVbCLTNAcpDnKjevtzSmcfjNDs1NWPp1hPdJQfE6",
  "key21": "ugbDUHYuyb4tsfU1rSnuWV52iW3mdE9CqC69LwX3mVaMkHb547pdYo8XyE4HLcY1pi9mfqSgpCYFEBEDHkUBxDy",
  "key22": "2gonepF3bxNqQZ5YEKBsJrHK7bMzM44p9UVR77qdVanoBjVHad3qVG5kyLr2rL2YiabZvGR6c1v4oRBKZTwaJebE",
  "key23": "46ndJ7dyMFfQkyAs6jS8t1adTjNzcjDej1xfyo7JreqT1QGwdT1cUDRt3rqgAfodzDUXkkw7wCK5WBosipqivxJw",
  "key24": "4beS7Bt7yAdZeFExus4MRyjExjdNBALGoYzpREJs3yz3waa1NcGYoPmAfrjg7LQrQhbCjb9iDzVF7keaHYUCDVJt",
  "key25": "2tiecbAgYMCGN2EC187DFpqskQN9rD7BqXNr32A5tmoD12WqQWZEsTKp9wUQaoVrGJ3MJSvguCxxsYfmh5ESKhvv",
  "key26": "44Y2cLP5FU4jwgKNSARogY32AF4sXSjaQfSPxPnDWS5bRo5jw7rVwrBNx6AapkAwhs4xQzeMpEah8KhNgXMjvXdn",
  "key27": "4VnqGJHf4ZwibwkRhjhXLqEc3YHsZrn37YnsiPaz3w9WMXtA6Mv37G3PtBtvb9oyqdcc4VjgmLhEBtBfgc5dtyxB",
  "key28": "4VhSWxiupj8TnkgXp6KLn72sNhez5rNtJUwiGnqybi1aqyWy377CvtDXX3F8pJtZQMR5QMDTwVtJsDhbWLXFy1o7",
  "key29": "3DYFNgZDYVm6Xv5cBfLQcReH7F3XbThgifp7x3HwBvRTB9AjNv5PvFkA5p2QYq48W8A11NL4zwztz83AhX5yDeHE",
  "key30": "2V1RHo97KSzBXXAScXaPsG7LsrYY7hpsEYZ8a8RmajPW72n8srV1fNqjCnmj6baNnPix1VRJEtKafozqSNxKJt5S",
  "key31": "VQh9DKq9KnarXczK1aLeKunEkDdoKqvdkNxUaLd4vwpZyXLja7cuxz7WG1g5pqVffPkRJt9W8CQ5Y56Hk7DzqNZ",
  "key32": "4U6LCvbQJwQj2cN1MvqkS3CiPDG8Tu32ehBVZNcKyYwLi3jF7udw3gQg45LDsXyj9oZHTFLRMSmaLq8GTcmBgmvc",
  "key33": "zvNVxPmU26RUmt5xv9GmvEkM54Tfzk7yBfccAkhkAVT8oBapSkJt7oGp5tmucXPWYiJh38YgMHDPwo6nobs4NUL",
  "key34": "2vWVstXmkoVQtjg8vzsp6PJ3gP6LbCFkdc4onmTQNypEC3qDu5YFqnF9EkhY7rxJne4R58X8hHJCar5rNBWWYf4P",
  "key35": "5RFXZTEqHDvhJAL7HHkpjSZRwGCns9LbD5rbYvkNA1FyHJEtrbwnCaigMgwe3iuuJ9Zysq15YWqUGSd8Sns2MTB9",
  "key36": "4J3CV45ssSDNe5a1duPYshvv3YLXUaXov3y8DyD5ZN2vaADngX5PbzP5MrRnmdNiGf6UjDXMgVoC18xV8NbRs57J",
  "key37": "47TNyZqEMzJ9xpMifmgmLA6hFHN7YgqG4s9gSs4B8dYGk2SErgPECZKmobJ6fka4Z7dzbbtX2D7M9fd895b9iV2s",
  "key38": "2BXKZYVASgnS8sxik6LxGeeiYMcNPEpmmje1PJsVDvd7kRimTVHRF9tAfhfFDvRqYGVFF4XnyXci6rhiPdMcMGFw",
  "key39": "5yQQYJmB7NkDV3Xg2aPWNBpyHHFPXCgLvaxxGctaidi1AiV7xE8YA6hzJq2D7unUVhp4TzqLDQPnAVFzmZauuuj6",
  "key40": "27Q8KUavF9zjP4ccsJsVzm3BJpKhnpKbNCf8EFKTVcTFAo6jh6p3HFjTRnEjpSnHZErv4Dduav3jnGfUhnwyFVSy",
  "key41": "4zSa6TPwgLzmfz35iAa6MXsuymuz8Kbpcxe9h7waS2P1auKVNvSKL95czsCesZ57y27668F2dC4LpadSyMQQvL6k",
  "key42": "4X62QeU4eYYMKM3hXMMM9GkVpSubdP6XrY2n8RL21i5pxjgvFVNsGDJ3L6KLsotRtYPioA7S6HPM8vv74nG3QAAB",
  "key43": "471s2R8G9qX12EJkeC7mzxcSTvVgabR7hYmCKd5jEnLRysBqtxh1jwrdf3cavpt1aU1TUXKNEG4C6y9pqMd8Zamx",
  "key44": "5QYJzScoRLMKcQucGLCCJKKkXLpDvWGke2ks9AbjV4L2QeT2AhN67ZA7hEbXwaameHyBNuWknZufHPeuNc1WVN9N"
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
