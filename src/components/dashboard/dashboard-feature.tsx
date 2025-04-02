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
    "5F13nmGCnge2c7Nssgkjt6FqtRW8nNxJeBmwrFovRXQG4HLimbvhvTAEnFboQTKjomsLKeCUJoECrTDuwZjhtYQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xRyfMnmGMrwkPHcFB8m5LJjhrrzRjJYdtHz9x1HMsVBkgMojM3zZ43KaBCAhu2vYayFJ7n11f4FA93SWnK4J3gV",
  "key1": "52KgvYXaPy92KcPc75v21zLpaDLMyEJG8DxZApNgeFNTvBUyeZ7TLc1rgwLGTYteFwdjPa2tcAFGJuHrRz61hvUi",
  "key2": "3BVdPTBLjGCXw5UEhAzKDVaoXSPRuG5hYzzruxknyiuNZoCR7DjyyyC2RmXWdkiV9nsENxVQfUmrkrNE2oTcJokA",
  "key3": "5wRcNp25usTpjT2vGR6L1PpH34AjY86Vc2HzuHaNzUNL2U7mCAfDv4K85YEbimQX27CszoTEs8BbGBzDAeyGJcgL",
  "key4": "2sfCPaFuTLZmrZnZ6NnZ5Fjbzac9Lzjag1UK5dTMGPrqfPNHMDiG9ZLu9Dt3AxedyL5gHooT9zcSvDtVrGsY6wCg",
  "key5": "64KKzb5REYjanJWFwG5AvvzRmhx9v7ZrfgZRasJraA2yT951pAnQKY35rXFHUCPqkn9BJ6dr2wy44p3jAWgqM4d4",
  "key6": "3gvMe1Z6bqMrQV9cVzGhLg5kyQxkkWYedjtfQBhzteBS7svdKeyDzmCmzoAuKH8zoSLtvvsnHuFRHXx4BFQLR1Lr",
  "key7": "29kTe6twZKevBNJq8UseDM7KrWf5PoTucsviQjpb9tc1zeqegkoQ4wAVNuEWMADU9oac8nnfHzh8HqsuLvXF9Yye",
  "key8": "4EhkcdUYUXZtDVRKr77QAH6KX9Zbvt7tTnrrRyRHxbX7mu328jtYh1wtzQSsnq7zn5AS1d6KdxK47xwNt6BRs3wG",
  "key9": "3FGxmHRSwnfUAx3SRg4nX13TP6rvDehAHxDvgCc3PsgNJzWHRVqBaUnx4VfsfgmRAt7V8BDNqMQdGSy3ZM5EqMZr",
  "key10": "2onCQnaZMrTfDwxF3cQ6fE9c1GjosAWYs1WrnjAmk15VsuJCpSWzZAY8MJbps7eH3XU5hnjuHM4MeqcL6Z2W69Mp",
  "key11": "2qfy5Y6NhfdiLGbP88rWr7ayp7ck14u1DN8gshAzvnJbYQ9hFUpMK7LLd4sDLMzPoQkdSksYpxAzSa9eDmr4ZAHS",
  "key12": "QG3NgrGe7dSf65B6QPWtxe5795MdhmDvb6Wp1qaNyCstXdMb7gPk6bFeutsQ2dMdFyYb4pV3cnTrMrjF42gH4HX",
  "key13": "545KCR9nRyjiF41DqRDQKZbTNZQMs5K7ALfxxu43yYUbQ9CFNEDSUUe2QF97sadd4eDtEymcxXX2DyMm37kktSCu",
  "key14": "52Aiap5khWgyh735321qVtaxhGR2Sv2JHv4DKrFppqp92KSFSrrxPqTENfr53dmAxVsEeA6MNWSPQfknjnWAmc6c",
  "key15": "3PCVgKCSEG4izQ8KLHBLrKF7amhGWdj3YaBXvu8EF9HYmtrhLr22MHRZHng3BXgM7W6acdk9yE5zU5kcsDvLCf52",
  "key16": "HsdDF4zNeVH81NbFmFMKBrek4Ww2KVuGbWiLuwTYoCj7QjAiVHY714yQYYFmUyzBeSCpS96qk6DJyQFpFWywbC6",
  "key17": "3rKLyTjq3fkfpztUxqnQJfnrcHDJcVAd7P5YaFGJywUe1VpwYNDW6rCr5vmVUErDNEVLkRkQmxEkNMQ9mWZ5ayRw",
  "key18": "5Wv2DZxiym3UsGD46NR9o1b2sffA3CM6hQT5WK67NpfATCa9eFU1wARa4KnRoKvACV8VPyjsvPBpxn7oG8L2BvRc",
  "key19": "3SoWNWDvFY9Y9t9GgFnYPHVBaxskX1L6svPtQEkH3eHNdQyAJHY1wdk2qJ3TFcNAtrCyNK9VGc5cqNadnCenXs3d",
  "key20": "2KmbDFnypmfnGR48EqzJXxz8GocFA9RirRHBgJdV6P5XLZGhFUiCwCKiZbnXYDQPyuoqNDPrJXGPYXDKME4SgVQ1",
  "key21": "2MJgrcaKc4oMG1YzTwjjmRAEAHRtBsCr7khZxWJyncBLVoCaQi3YsFAojPToHbeShS77QxEw6QFkb4jm7DoKnshr",
  "key22": "WQkvyCMFuDDdySw1qdR9GSPZTGaL92iUJpM4t7auK8xPp2nw2k6LVtWGrMg2J6yVoJBxHQ7DwYsZGpyYVsSeQQ5",
  "key23": "Cc44zjo3DD5Zk43V7nYfESTjjwHqU23gBSD7kToRYSUoQVWNUsRuCJ9B1mqzGJcQHm621JyVqfLpkNzasp1xqMg",
  "key24": "3TwfMpLAFpPuFQ5GovWVLzv2JgeTQhLPYLu9EMPAr1g5AYKp8mHKVJjt1opBvLV1WzzkGjWYoxRGaJLippi15hjs",
  "key25": "3NNgR4tgZkeUkoeAfrtLjXBBFoXx6DwV6QB64f7X1MmFntCLMz7xc6xkN1CKsyYqjxar2Y2d6Kij2whD8Kwn9ECJ",
  "key26": "5SPuA75BLTKZxqisjmARsCKAcDLW39n6RNW5L9eJgoryD2snBLDfF5QowDyCbfuSaNVtCBYGwRE4CVBDcuffYvha",
  "key27": "4mjRAVnZNJY1rC1vnUoAiZA6fr6j77JUmF3CNijnGTFRBtNAUHwqVTA4ytYJh9HjbBarosJDTujFD3aAnyWj5m7K",
  "key28": "wzWFr7V82CfP2M25HaNNNgqWHEYzF8gWvn8qxuEzK6dbVKMuC29wV12LtV7WqWGk6kvb6Kni7VocLJEiidA2yaz",
  "key29": "2gEXJjmxTybge8iL52NGpBH2NV42BniK8HCf8rEYZcFpdxbUTKMMBHdrqj9myJ6KQGbtpaSFxa7zMfEfj7N3uVb3",
  "key30": "2Mqgp2925SXucEjqyk5S8VtUoDYLNFVp1yar1MWwHUQHNJX8Y7cdqkjSBWCr7jubKN5PtzzxsMNdDfDQ7GQhdeYp",
  "key31": "34hQtDCYWb47NAbQZmQFGfWdjacYVbrdAV2wRvQsTnC3TUPNNDe671DgoGqhkAooDyZZQvKmhC6dqJQyRx89YUjM",
  "key32": "btHCSn1UMLE6xDMahm57eCM9JvythESUeN6a7d8krxy6ESb7cXDwNsSiSj6oioQE3z59FEtzDGdzBMEUV2WQPnb",
  "key33": "4xfHqzJHK1hLoFXnxoDqnsht44DHvYniW3uh6dKWZCVyiVoQeskkjx3H1qLFV3SSJek7exG23xSemzpNjyELKnwM",
  "key34": "5MGJ2iodP1DzW5fMV5wzLeDSj4oA3zs4oe9SJU3CLuurDgm97Zd7EugnBxGojJJmFo5SRvWsogZgC3rvQDL1Fgx5"
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
