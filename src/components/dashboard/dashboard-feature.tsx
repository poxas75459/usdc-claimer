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
    "4mz1qadvc5cbG3RyTL2gZeTnd3YjtmgPtNzqGAvWo5ATQPNEQ1MxHiGDsDPBZXRcH1CvDevuhhxV8csxswE2ixwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U4kQCYyQYDgFv2p5QeRy8bTwL49NdrcCPaQLJuUrUWSvRvzjQ5qY2BQX76JdqwcM5ozovze3RyD9A5ELtSpDatK",
  "key1": "2cbYgP6rPC4JAdCYdLRcxedtH7VqSptiUZMMGNLVEz5CDAAuStaT43Uw3xEhmSt47mMHKmyz7KRYCvQZ16CZwpZY",
  "key2": "4p3yVohkHsQH11NVBnALuWd27jcMnZAVSG3mksDP9wuzudKuyABUum1MKFV6w4UuGVX1A5XVu1e2pXfeeaJVioAA",
  "key3": "ris81wwaUE9tzKrkvLeJYHKgpxPCwbmvetVcnYNg8NnReRYZz6e2HG7LstEFaGpn3rNwSopgie8Ubo4yhcSYhEk",
  "key4": "4RdaYsgrXqUQt42SJnnyhzRda3sQ4BY3gJs1CdFow4HecybSTP4xJmHK2Rq6NJ3pNTq4sJMVmyH3pNu2rqLCuT4N",
  "key5": "fmuZ6H6rqLDk5kucT3UF2uHCa8ae66pwysWD3PJMneUJHV3FwjCEYzcvyHNiC6apkp7jL4yu11p9x1BijESQMmz",
  "key6": "3sGXUQ934zjjPzfgQ5WNHrVPPm6zA8FMnCcnTsQoPpdN5R7W6UzENxeWbos3F8R3p7VkTWMMwFKRouj39oyUA3Dm",
  "key7": "28fLMtPxfXNDn6Do7WFg7LKKMnzmeD5PRnYBJKjMHPWzofUJ8KDyNzehmBEtg9jHZ8h6osVvK53hHs5V8fJXtD1r",
  "key8": "QthVMgr7dKetE8mxUncMevKjotgqardZ5U5CWtdkbiHbLs1jrJUb1sFVbALXr64RTEtg7paWhZ1HE3j73LKiJQb",
  "key9": "YcedB6kTv55dco6juem1xgU8DrKAr89GmRgYh8KHv9xi67wAzBykutSsxWLZVv26SqWGuKRWtPBE3v6ip6LJY9r",
  "key10": "3n8FhGAURXzc1fpacm7DtydBYRQyS2A8FsGdTyxWr9o7ve2X6bZvpgcBgpKmgpXqPfGCUo1r6GbifqpkGVQ2G8Vq",
  "key11": "3bBtd4rBZuoYQ2LkyBXBdKutbWPk572HXkP5au9p3syo9NddLKMbo66NngZQHobR4TuZsPzdR9zR4T6qu9gqyZ1b",
  "key12": "5gVCmpR5S6MDKswrFNcwyvDFeFJWFCXxHzZkfSt2bH1EsFQqsjiib4hPsuLLXscW9z5kaXu9e62KpdDP25MfdSE6",
  "key13": "2vs6dwbkwCAt14VSjFLcwemYfEo6o5ByYbD9bR27ZF71nvE6mtq1nraWvt3rwszKiXRhNWZBodu4ynGxisw1rqzr",
  "key14": "3BGYuMqpFYYCcgPkDULgN9NR6rCo7wqK3KZJ76td7mVH5afrA92QEPPsK1zxZxoVq2wFnKSvkGA6ku7GLfWVmWYT",
  "key15": "47HToHXA72mW58rYfRweQFLbqApP4pjaP374FXniErDLKneeYt63euaGyuN92aYGdj15rNwjTbCZJ6kKqdCDMQ7X",
  "key16": "4CaDQz2A8y3aEGkbUY3cSjdPJ9boniJdcuWmBQwRh2Erw8iRkjncapdnZtfd3ou8ji8p2WwXUs1Dwo97SNNQAj7G",
  "key17": "2UVeJtR6K5C2KCe2xaKMF7jq32WHMtuPpBjCvFcisCzo7NTYbu8owNT7iXdiaFNGCVKQpH9d6qMgSnwsmVeKKPkx",
  "key18": "2a1EdA6kQ7btLYmKzW825hHXAEaJ3gVtPebK2X9Jab52x4JckcSq6XA2LCowpubgNm8xViz1UDWpbTcW4amu3M26",
  "key19": "4T5PpPFeEW8go5mYfpAN2dAnVBTvysLvRXfkvpjAsA8qw8KMAxw2EFE6hzQjyH28K8rNzFPTDfxCNmzAtfYbqo5C",
  "key20": "651ETPtaaTRZSooxRA1TfegSauXhWSoNSbLm4tT7cE7GHTcQ4Qbqt8SQRfJkBSjqvfgds3xDc1C272VjXQccAWvb",
  "key21": "5iNhmJuQ4kQhe2vfgDNXgo9PAYLTPgvZvUhxZPdu7FQfGjTupqXUh3gWtzWLe8tq8ykUcdXUaaasyEp7AcrYgAYj",
  "key22": "4U8dbkHsHtbNQ9b1dSx4uzQSjUEzTh6oE965tuc9VdC2N2Xf7qCYTmJfaw8k3pUezCwAarVW5zAPRbpTj9gnkpBC",
  "key23": "2YgQz1ysxhMMKZzW5mPv8GbNVgaXUrQGjypQLmBmEzQBJXErv1iXRrkGrYDDk92fHT4sxkR88hX5sZYviFx5EjvB",
  "key24": "2hhYmLrYbvKVsU8AKrzB9fY11tr2VBhvhSri9CHS6QeyFn8pPe7wJ6ireZE6RdEjNkhA7qwLLB1JBp8VoiKKmjBY",
  "key25": "4wWit5QNjmG3epXBFaEobJTaWxnqCB9ciGJYPbonCiyvaNfZQNSmfHfG4eriBdZUCULdd7rhjBN2k3jzGxSAzSvo",
  "key26": "2d98i9J5G72TbwTumAh9r4VNXQYxsLPJ76CEjdeB8zFE8StfqbJXhaFUt9nXXhxSGgG8e5Q4KxQshtpAkwZYrSCn",
  "key27": "3PvvCCd5xRLSdGoEXBWuz3f97AmaX4yuKgRae1vSyWf6YXYt24dkDxGXK4f7NudZz4MsAn3exoKVHtsiQppktsLT",
  "key28": "64ykntZbvZWVEXajeT6hQ7fi3p6WKnfyemdQTpPD8x2vq7z5GxndEBYXgwMz6vYCJGd55N9h1sAE7rWBLCCbnNHx",
  "key29": "DFpGUrU3JYFSigF16jZXJhQZbFJtrP3tB1vDF1zYrmhvvETFaUiXeoJdbayKT2D5cbtR6hQ8XtiYUKVCUEXRZ2y",
  "key30": "5NSai2ZdAEsR5JnPPn8BWEQztzDtmnMmvzD8iLH9TmQEA5YqnvadF6vLUGv6qAK8TAu4qh21Cbr5HWRQufQmGADh",
  "key31": "4vZSdMquXQEBHNv8AE5wFDRCHSHn9qJ2B6PvgD8fePGG5YaWxzeS8nqcGoWAdhNVnLGsP8j9iQdFw3dgQT9nYAzZ",
  "key32": "4pdR33YsS3pXW9FnT8opPoWjkSYs9ja64inLwVw6u9g9qJb5xWfCJ6d2ED6nuYWiWYJ2CajUKw29ytK8iGctEFzR",
  "key33": "3qkDg3aPnRPo9AxD2P8HmqNfYDsDME4ng51XX4JpUeeSPEKvR4VvMjWy3YBbnGY3kMNnqCea5p5F1M8W5nqt4TKR",
  "key34": "5CG2AoUMZt7Das27P62gphMtuGdTAgZcbSKZYT87BD8TQU59y4aenVnbYcZvStuKDuAkw34zB2jRXsqJtmZn1mM2",
  "key35": "qTxEAGtZZKSrHRwuJ1oy7GjogEA1hK9Sq1ecmxveXqMjXkDxuBe1VDnPAsZBhsdRiSHrMngDWw2vfyePNufJpZs",
  "key36": "3KaATzW2k3TQVrzjXgphBxgMB7nJyHwcp6ZrVvFGU8sN61Zm9TyTgKJDC145ZBBBvj2HGrGmqqofpRbxjRP9NjK3",
  "key37": "2qEj6YtApC1nzgXfLpWANB2n4cA4pTo3wJQrgsqR9yXt5fJB8M7cfjvSBdzxNpVTPT4YZmpuNTryAj4NikqLgQSM",
  "key38": "5EWwN3TJdugbEKcXqAqkrZkuNXacs1Nso8bE6fnv4bFZVPQAN6SVtr4FQF5ADvvgMRT57rMeYotVbGxpAXbHnzhx",
  "key39": "Uzc71sRRFSsixCpakZsMav52i7PxKxDjxtVNgHExZmfxi486vq4hVcrUbjwXdUtYYtNmzw4yntV21zrKw1aL4NS",
  "key40": "3fNvy9cnFFb5DBxRhmTaG3Dr82rGio3Tx4B6WEr1U5fMmivqeUECGV73kwPvk44c5RZG1WSvbFRHKhy3ngN3G6n3",
  "key41": "gSTWj22oFhiANNJq64AwfHo5RKmaDh1Zk7zT9DxbGqNfAL7Ba37KeAUDW1AFWrs3d684u1NPyxpSEP4A2J5t4Ru",
  "key42": "4ah6miETxAd4VHo5v8ufX76x8c9CNskUPKNUmpf7T6e37xCwRCNcg2wGpp4gSMjNyJaTU2mSmZvEeUF1RrJyw1sG",
  "key43": "23NT1HBRZqZipn2e4MyQDBkcmqQuy2vaXKfMBhqZTX1tNF2yNsQ7Y6yPqAJHqhusMk7cWGorJBE7veiEmmWCZoED",
  "key44": "2WdLP9bKSDx7VbiDBLNU6E7pnKzv5UVXCrW9pVhe2fMoSqFMs3Y7a1KNCPV7WHuEHqfTD2enPwLjoP6k6RkBKQRC",
  "key45": "BGJeee6f7ABVUvKZucFjmabAynJrH2yCesFJ91GABZNw9QgtnV3SJgyuSZrWWEqP6hXCuswEJFEGTVPsmmgq23c",
  "key46": "5DRbzZpokHxsYZ2FzoJSRgfzCn1cNo7wa4m4zCjArn1QJy5hNSKn2w1KeLXTE6qNzzAV3xg236CdnCgeFiUKoZmQ",
  "key47": "KWtukNEbvYZsGfYBTFyTpJVMce1W6ZoL9Aa5kCTCYLurXKUatUsuHE6ZLA3YK7FMnRUL52pGUC1ssqgf4HYkyJv",
  "key48": "2Jj9SET9BGQZTKPLCPjSc4NQ7USZiqeFDgbKG3zhmqmuHauZzkjVEqRQeuqAfTxJy99KuAkyBAR9RWUuV2gVvjAF",
  "key49": "F1SW7vr1vnzjSjmeNkgjaPo9hbHzzfVhGgtn3CeXqe87AxNToEyDoKYHQHVHn2DQi6KB9apFsv3dbQF9U6iKRez"
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
