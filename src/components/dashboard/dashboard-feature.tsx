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
    "5QF9vGgFzrHDf86P3G3pB1ACN26ddGzF7FTeTd9ya6e5HnWB33yV55vD69MxAAxobMkCpdPCLsAeS6234vyB8X2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X37q7Mi44qMzAkFaEntCxZVHZu651EFVvKg2Wcs8M9qi8LF2Ss8XaGHCheQbosMcTdKgpsDbxfjLwYpaEYAXkkL",
  "key1": "5NwsnGj2ux9La6SfUzbKfoSfFjF5rCTcuDTaX8hfDL5giLLZMTnRqmibio6XgaEQ1izPYFvi5aJfZCk3JeEZPq2",
  "key2": "3He7phFWCpcYT4fBaDSx3RDc8RW71PUvNvakGYgbWpwQZRRySqHdoGcTkJim8nfLooxb6CHQiSuBF1WQyf7H8Nct",
  "key3": "2TA7PgoY8NH8KAncstN9F7ZgEyLzG6hD6yC2irYCGPsadweEBFBwmZR2hE2vPx8MatynoEXNw9VM4FUpjAJW7m9Q",
  "key4": "3YcGGFEypbGbhToyBczfn76yRcwZhwQLvFf8NeBYDsYcebDsAPgRpjJFEe38YeZsKW8oDrVUZL9dwNLZy77fR11c",
  "key5": "2Cm6P4VgzbWtd5fy6JM56FWLH25sYBQzwoy77f7bhaXueJj4KkTbmwCLu9Q7VkX1a47d4dgHjNpzULEdT13T1RFi",
  "key6": "651uGs8Vdjin65P1uN8L6X5NTSk5svgPghQ3jmkdP97bsiDM26kc5hSCFh8jaVmxWpi58pBCPNqZ3wEUxsZLi1R9",
  "key7": "64eHFxr9Vapd38Bh7rJx29qo1Uk4gCy1RWqUFeurvuKYGez2cycrnPXMxuxyQFsgtgZnGrHnK7B8mHBSuNPAXGd",
  "key8": "4UbU6uiGQSxZDFjD8reGzkQi9V3zm5qgYGyDAHYJpKHMdyv3xpqEpradLEjaFheFt8k9y5zSy594e3sVu89updhd",
  "key9": "4WZqvL3Wtx5VegN695Y6HPqS7T43x6huqYfNFLue2VWR84p4ekkzaqzEgocBhDmGkFZLxavhX6Xn6NpmgcWJzDNL",
  "key10": "3Z4WUkfowq2q7Ft36GcZ5msL2vPnVzoYnov48vfzyLz4MZsRdJUcat2WZNZQFYYK7YfJuBohrZwZbbrCAKQ4QVDE",
  "key11": "3U7NGL5WpkifAEVjKnGogep4ZsX4d3qBu3dsKv9dSSYjmZtnUuSZWQd6xCLEuiSyVCiJwaPryAQWyFBhTB8JYkjz",
  "key12": "63bSL5McU9FZwMP2nsHZ8VKSgu1muJjvTG2upb59uFure9zvGdXgY599hT2tw5QmRfqWHkhtkRJ5UNmm8XNXGGAL",
  "key13": "5miZxB97btarQRq5tFejnKaTwqzeMYUbmKDL8bqyKTrv1i5SCxytAuXZi7FTtP9CkRx8H766zsQVsCEzEZbheJov",
  "key14": "gayUGBEucq4P4iGtWfosFNgEn5BfRMBy4djaUwe1MP3CxTLfbxRF7457V7XiDY4TAzq9HGBZxWo52gRXzFfaCWJ",
  "key15": "y4b7AfvVHvMyVEDsYbsg9XbRyUHmEotWhWGFuMzEvjDE7BjRaREyR2Kv746eD4G5hV7he6FygL3stfXMvmZCkRH",
  "key16": "57pVTfNpazrnu524moVe3Cyzx5TQxR8T8yD9GJ4XwhDFoo6txFQ42CbtbuviEAzPrVuBFaP5cpyg68pXgGZSRmb1",
  "key17": "2JarPEmqUdyM6NiVhoVSceAKfhbAodXVN7nDVe38Ky4jNPqTfBU7LEddLHjXyGWTDbrezvr5UjbB5JBunvgdJD8t",
  "key18": "5qT1aBWxTPNNv3aCRCYyPmivSjRYPT2bDXd3XAowuv2d4eNprEBZoqFMxxb84AMCKZcLH86sCZvKbpNXkHAXzxuQ",
  "key19": "5fiHR7UTMjM3ypokDCyQy1PPJmoP6HRg97yyfJYVm24nvZG31J2UtAY97fK6Gs28fxHbYVbfmrUETnaCzjy84Z5R",
  "key20": "TzhoQwCAEK1PLHMDRtmxzVgT3Yxtb8Z56tMK6uqtTNR7cwdmX5UbfgXgC1BZVZL4cYDMAoXVG1AJTgjHRRFXoup",
  "key21": "oSXyXydRvcHeN2sGJDEG2PbZiPnZQKrW1FcHBTHYmrsV17QTszh1TyAjfPJvi8eko8yWMofsD9Y5YBcssdDazHb",
  "key22": "QSnWD7kbMPLPFnY8umtwRZw4SmGLaB7H6nzMyoqyoEBkcFHMmXjsDMEGZAdSSP2oT16AkRJeVqyUuskeZ9o5FdC",
  "key23": "2KTN1aVLnipe5UyiEw63PZeiqKA2LY38EVBD8jgR3QTyhvP1PKuyTjqB2ECzE8esdqEHVLcsG9inz2HrbVZwiWjW",
  "key24": "SU9PnD5hrtfoxDgtA6AJdq9gsDTQxiA2VvEMDYTCzehr4cbZYnq4fXXDRXGQUwZMHy6yZLqsKdF4byV1n3D4Uke",
  "key25": "264diELhENQXD98x3ZXTdREBwMsvp8gfzQB6zLse3nUNmRjM5o4MiKwqZ5s48gJLPKRUwkddHqfY495UTyjSJ5ZB",
  "key26": "zL1cv4HN13LA8TVKg8NJncLYa8LebCziNcnKVfGrxyPfPU3YaWRt1b2MxyWyh7aj9D8DbScfpbyM6HtazXSJAkp",
  "key27": "34P7HrTSyodrc6PrFRy2xSZnCqRs19K78uMnqRbktQv4fLh7sdgxD2uCE4fjUeB8iK7DVEoTMn9KBD4r5QKUSkA7",
  "key28": "3MprjyHyQHvaSd9fWyhcEU6Vz6vsinqYhDDyuxP1JRryHeqqsmDHpZ8dhGyLsAMWmBEvUPEAMc2xgYAGU66EnAtZ",
  "key29": "5g3UcBnNLKBFFmVDVjopkKwoRuqNxvKkZCLN5RXzGntKDeFzYtyPc1Dhmc6nhqWWmfre8cSGF1PUe41zQQCRvy64",
  "key30": "hfDeyghMsDkifD3ih3m4PK26e8MZe34jX6QcH1imuqZ7emvmKZJZ3ccfKP1XH2uaEKHTPfJT5pvzScmDLtFkMqV",
  "key31": "4jbKS4cnzcVaV9rnhxpBZrcAKatWwWDBqMRG81hcrk3v8mzeHX158DnJD2FsT59gtcspZBiV8YRaPkV6pCFQ95vH",
  "key32": "35m48fh6T2cHMf9ykaGoVv78g5MiyAK2KcSVic1yfH2DTzcKCcAyomgreJeJyWGwmvygNf1ftVyHJY3mvWkMxNch",
  "key33": "2nUKuSMGEYRWGWe3U5ZEGbFGZfbyJWq6AZGomEznC8yXQndkcWza7fS1k51R6LQRCP9PM2YhYmcyVcjzfKezXBtj",
  "key34": "2S5daXGn4pcsgPiSXComvu8LPJ6AqMQYwgc8381x8sdYRAdrg1amrvvrA9DZkUSmFrhLJVkKNw8wG7kds3NVYVqV",
  "key35": "5ZsT1KVQuvybak56aiEFEpabLeLsudfA3xBBVsv6NXg7RLWNMuXH7zEpZiJCP5Y9k5v6eXP2PUpKJz7Ncs76nVdM",
  "key36": "X6w6HHiP7F8mRF842fwzeosHHadYAR38hKh31MJ1yw8bTbXuhx9u9XEkMbjEAd2EZoBFiC7SyC2cYBsVYGkxnP7",
  "key37": "5znrizuX9DPoibfdfwmonetj4MMGHm6XaBamuU8KAhJWDhgyAMjbf2WiQ7FKRyrTBCH7PEdkEeZTfYSqy8uVSVMv",
  "key38": "gBUqaZJhvTGQP29sAwrr4M1WW7wChKDKxABWiCqfESTUBpUwmj6r13Atihagm5eVeW8tzHj7RmhobNLtaHQaKNC"
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
