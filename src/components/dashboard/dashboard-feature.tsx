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
    "3cu8ykiGDyFrf7A5gMjYKLFNV3S2KJJvCas8X5scmvMwzUSTxEQPMtjhmA7AKWR1ZQwz8k3z26iudxeH4MtKG5hU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ePigdWeq8Kaju2rKsEe9WVzSALyeRJLd2j5P77nF7UPnGWCtw55BhbTABxtawnRej9N6n8vjfFxMPK58o3hDtsV",
  "key1": "Aq1qia37gDEkwVVMj5m4WJ7N2xYed9JZvgiU2WJzur5rJWWDX2ikVHKDmKxfip2BEEUE1hJzCX2TDBBVwfdu5sD",
  "key2": "r1ka6Lo4nvCuV2bv4DoTC35Yg67wqjDsqfPqTFQnSZbPYFBiBEWENzYQPQTHCsQXbSB2ivBnSeEUNXfaaRsTcLn",
  "key3": "J3Yhhg16g7GaCaSxbMfKRR9JpS8oeWLGxFi9vhyPjisQaKHmQ2yGh3a3xVz19AQejvE9emDfe17iL4JtBWQ1hdE",
  "key4": "f63x4xNxWwyNe2AsN1XCqb5pcGP8EbEinJtnsCWTBL7ABTAyWVE8R3QK8UGgbLqSYbV1EASt8DCVZx3VxUj6z4e",
  "key5": "4uxFkkfCQRiSeejtRJLesPvCVwR2V2W5epRrZnMBe44gfRLwEmzNit9kJv2XZv2XVzmZzmuevihCnBHuSXum8dJr",
  "key6": "2oGoBmeH2uSN2mWs6aC3niaQbAk3cvyayrAHSR2KhckyA5tfCgPeNwNhEQkyhL7nEW3cuwVy2EwLQuiiRUKt6D27",
  "key7": "4BX4nnURZLYaJuqcH4bzFVMCqVpMncT4UQ4Lc1FPQFCcpt6WMi2BpmJU4AVyBDKKyoZux5jf5D5xjC5RebZ2jC42",
  "key8": "3DPgUojF7ehrLPCApbSGpwnNiQa8R4tU1B23Fa8wP79xNJq4x6YyNKQck6kCyS458upF2qCdRHqNE1jGfXr1SLUZ",
  "key9": "2rwgxSsMRw3eVXPmYeiqnXoYmzfPGKNQzoW7P2E6TMxKDoChd7YJUZ4fmEfTUxks6BARDMXPk4aYToPue9rsfPmK",
  "key10": "5pMMj52EypG8LKK3FdSeWrADkER1gTLbJCEQXBwHRfmhEWKEiL7qCYo8ca9xGJA4WCdgnTP937oECGM1SwLcCP41",
  "key11": "3F6ePMm2YyxQBoEt6TADhz8wwib6FqdLAtYBiRd8fGFYcYNM7xksGAQTwKorWjTAXF4HDeM9E9u2MmZdoyhQdvG5",
  "key12": "Cio83r9nco2cUjZ7o5LkQeQTBNcZrDJ8pTN92wZeFU1j2aUsWvpYTDXkPG2PevAnXM2bkxhjEHeMrfz3BRBjvc5",
  "key13": "5px4HPT6gmPgwcqBNKSch3HeUMQpZfTjU6waiebKCa4xxGK5g1ecaof9qSbZ3hSffjDyZPTxT1aW21DcSGsuaYgD",
  "key14": "3vhQCvKsVxM1G3exUe9TeCGD46LyDw9NH9Nx7W5VCNsSHy64DSB8nQSWibta5JN7QjwXviPkqpDSJJpDBj9Cemf4",
  "key15": "2vUigHjh2mdxui6W7Grj7GYCGKjixMwiK4UYqbksCChpYiAjAFcT5cqwG72XrcXa1xy67uYxTiQstX4VPoWMSf5U",
  "key16": "33t8XDxexi8pZZuJpstppRP68PkCJW1mNDycDbVnVuHzD7rAxLG6edc7v823PmmGCJPWeeS32HjiZurrzyn45Kj5",
  "key17": "2xczt2s1uSBRnv455wmfYmUFHzk4Qk63hzPh7hry9mChjcaxNgB5DfCGjW46Pppvdf52ru86XUYPT6FAFNpAbeaG",
  "key18": "3bLehWdLQWYf3mpbUCFErSz6Vy1otZtBgUgYDofKE4pk2fZsbfrLvUf67wmmkjDoYXygt8CG3TdNXzZmrN1oKSAy",
  "key19": "32592NhNi76Ji1pzMAGEknbXCU2w17MntByR4twE3YiLxMqPrN7GCKaHwSifd9VxT1YgikeDjCbtmj5QSmWFKn2X",
  "key20": "5sZfjieHrvSjpHgnWqV34y6DzcrzZmad2Nrq3sa6Apci7ved1TFwBaGTfWes59Em5VLt5SoRgJvTCz1rj6x42TRt",
  "key21": "2D3dThEw5EYBExVk4HMxqFxaEHcYZLTzrcMGgJd6VuAejSBUWeEhXMyiGWZ12ZrL9fW7MZERvwdSAHEgh23udeFB",
  "key22": "2ByrPZU3Kr2LkMossCdY2erYuVd6YrufajAt9r9RtwFG395evKVoeFEojy3otrvhtMNZv1Sh9umCpgSzw72C4cod",
  "key23": "eGEpBDmYKrxZPzUG12dSdJ5gfZEjJdtgHNLVSrgqAFABzww5eQTUeYTCVcBcj5JqFDfLguYUxGvHF6jEhEmxj8q",
  "key24": "4a4LYQ4wa1ti1sWNuRibvGYfbcVzXe5eARJjJ3jk7TBFgrFUaczZJBjBH5FmScDadeXatBLu8ixAjLK6YEvzvzmj",
  "key25": "4ZxG4HibTu8ENpgKdCTw9Ld7wmX7kAkdVtD11i1ozFnW6itDhfjDC691cGhgWnxGncx6zuxba4r95dc7ZZQXSpfS",
  "key26": "37Tgutk89JVfPqoh5jpAhkRoRCo5fAfP2dwKzEn1eRPEVQnv91u1WZcTnuf4hNF8BHQZSwHWuMo9KbshDcLwwEnJ",
  "key27": "5Ukc1oM448gsV4ayEukhL7yVACy87WoY5Y5ViJU5w4r82wWFPzqoXCtpSa7yXzpQUMe7UM53Jbprbkj8jdWQJHm3",
  "key28": "F62h8XWaqvCbnVEnPWH1hduVxMBuLujaUu5Nbb64o2vB9v5GiKH4aTxdtfE7v68f6WMvF2NZc9eo8oU8idp3Y9i",
  "key29": "5TEfhhKPF5aWgrtHyd4JF3jCJWoam3vCFeQTdyAkq37NDSFm4bjKfpswRM75wZLiFk7bx7rxpcosoUaeozYVxFTN",
  "key30": "35Xx2iHXFgicZP4LcYvqDUa5jMGX7iJbhnCGmn8wpSzKuHbZX7Cj1RETKS4ab6vNypx1moofLS1oiFpwW8GrMic4",
  "key31": "3eAKngEqKinqQ6mmhxbrYLWDg8KFwcGLD9BcyVgAfx31gwoQLFGP4khHtYTcg9qm1LPNwbLq1R5zch6LCHtTVbZv",
  "key32": "ghHDibRVVkChXbZJK6C2cmvs86drKCSQPJ6wwtwjUK6iP5xXfKtxw9UyarqfSbKdqXJ4VJLvaLjrL6GHZv3PDGQ",
  "key33": "2RK3D7wuUN9AhFgCSGFBYGA76Qk8MmHFAcmkPunWWV2TLaEzTuW3eGMzhWdZ716JErWF3eBpix8Sw7U6FyRwZVuA",
  "key34": "5fnmXozQk3wk1HbKR2fcb5rM5GRiyCzNTfdDVWroi4XjXGdhUoxpaJiFg3QsiZ4Jex3xs9fp2zoKG4GLniNkcWCX",
  "key35": "3TqLKjuCYyidm1BieMhc8cY9nK3bCrZWU9TvVRyTbHEWYsXgU62T1rrDcSxGNBTjAFQeyxSo1F42tvtaiLmEjuhu",
  "key36": "jP3YEGFGVkXnBBhaA98hVivDyXsqdN27NCSzec45srnMZ6eWYkUTayBg4vkm9GLoMJktiD2D7ZvGrFNngDEsnGg",
  "key37": "3T9qKzknH7PG2rg6cc9HoHMN7XfefjxoMs1qq1uvAQspMxsM9t971u4HohWXv3C2kVcXLB96BnHWVG6Tr5SopJ1F"
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
