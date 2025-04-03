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
    "2z5FybKbcy5fusKxz2692fFmBXcMVeoYNBj5wBaGkM52XiBFkXc26k3HEkxEfifeG44P61tWBtGYrFXJ64zxRAe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3souw3qTpMzSmqzzpbNR1AfznaY9SSuRp8rW8hzvLGuZqRqNCQ1ikuN8JKZijG1NcTU8UccHgfDs5tWJKacj29R4",
  "key1": "2SFgRMsHws5p2zioSAyL6qxTezramDR5oBkQFa4awkBtvizczhmoc5eko7vDKHNQEofTp3gZPiqd77pnsoYAK2nQ",
  "key2": "52PDrEkBmmx4AU4GE6qkfFb7qUCHhrZFYAoFeyGzjuBfhoTa3vh18qbecs7qUUAhJf9p1HtYw97Zrgcoz7AJzz8Q",
  "key3": "52XdyBAPMujo6zdTDeP1MJonoxpqksqHUFcaDq72KouqCdRbea2iY2qx2g4WP16AU4kFo4GLiB85JjUv9VsbfV2m",
  "key4": "Jotbkx8MV3MucYSioL3JdqaPxoCckv9FCNxhHmvNB2Mkj9nddYkBUqBt26mhA8exQtCTDq62fLk9zSv1A9LcHWU",
  "key5": "31id3qpXTwT9hzoLZ6wRJJa8uuBTCshXwdedSbybyJrZ5gJ1mxBSZL4fJKP2h5G9iXPRqANb9yt4mpjcFvWSWg2J",
  "key6": "34KSu16jNne2TNG55KRKwuavUUhKAwrYpJTugf5zRVvn9r92JNMZybfjv2AWJGtrcG9SppKMw1Ve7Kk64ntxPVsb",
  "key7": "5TfMDuxWtPcyYVaVQ2hBQF7jeb4eTRScsFmt9PDTM68eBrNXSi7Hh2hUnnzATJ61VYHchfPLiFL57RUVqTiq58rN",
  "key8": "EgJqMgGDMYTXwNBKJ6sKQEahvMpZWavzC7MSHAXvTsQFkJo3QEacpR9nXk5tnyGKQS8fnLWpWX88RSwcLfWe8xZ",
  "key9": "2bQq5mz3gRq6E8Dx8kM7gxjRDUUT2aeS6eBb29q4VRYS6JT6oZt7behJRUPtqkXdYpJybWvdGUF9xT4QKxfGjKx1",
  "key10": "4gWBr12GZGX6ryjkucDwpU4Zayb1BBWYmqSZtLjR48pBYAM2C4THaRqcHRmEjPv3fkqiwctp6Q8LMVzRWj5BUUEu",
  "key11": "2E5NB2CKrVegCZS4fYGUDFbm41W2KBKHVx2kWRwCqmHZfZieDaEryLZtpx3JrpEave5yU6BsP57Fef4T5PiQsAHE",
  "key12": "43nfMy6SuJ4omB7EPsdJ3mpJG4WjdpPQ1SphvNpqNQTGAtWqvGzjQVKp5bus4htrkaK16jiteyaQuYFWVoRZzU8u",
  "key13": "WDWjgbHmzAdxwDfJKULxv95fpkxc1uBWahDKuk1mCz3TFZFHxLJxMmMLrxjjgXvT6nW1Knt6qaTrUagYGXLsJ9f",
  "key14": "52MdaBaogX8YHGhNdWtY2v27bUoMyswpP2m97itaUJoz3a7BQLmoCS6GzdNTHHKApicgPGebtdTyaBbM3vCtJBqy",
  "key15": "5D9i4zcn4Qa6oobUycWGyiX16d7NEUCCutqwjaEnvFogqgqyt3MLJHrkPfSnRPYuST9ucfxJtSejEp2a4hVDcKzh",
  "key16": "4z9HcR2toWKssHV6ogbkpmaJNR28jYhnbThnzFhTVwVXyvSGDSUzSo7zvpxvCkyyGMhhKmzd4fERa7BZcYHEPRsi",
  "key17": "UxJv6Vypfqb6EpU3tDrmpteuw3cvGP6s3JLtVb63Y4XmdoQkmymQ2uGzesrXJGUqXRzE3E38pWPSnRDDMEAK6ia",
  "key18": "5BFC3KwfJ6VZhhCS6n9ZGKYkhY76MBnMhR9d2nppbazwo5eBk2YX9CESWCpw4VCYD5DhBF57W8qB1Lfb9575TCJQ",
  "key19": "65x8cCr78aeDqXbd2QoijKAV6oN7aYqsPEprv3xuGFNV4DdcfzhLBje8phc1Lp9msseJ39hxW9UjepiNcs5mPEpP",
  "key20": "3n1WHHv3KbnoGQpuCe7gWiN1Fh819ZpMHPhjxF4pTzzST2CJaxdAoa5LgoojGcrGsCeA7AoF5Yr8RRQ5skEaCJEz",
  "key21": "36FvqYyHcbhPqpLwJHwFmd3btrmWSv8eww1WwxFSj71ucNGiUEbQ5yvhB9m9BBqnCAysTVDr4mpsti526vk7UZFg",
  "key22": "2KQAYSn4RQjt77kkc9PtEKPMJ8TejLMpD9BKo9g2qKfcfECF1MZr3R1suPmTKKMsY7Chs2cz8hHBrQifdfrSkogV",
  "key23": "61cL7EYUtyBeAmdyp1NPKXpH5fUhthusmjBDmsMeTcThKweGLQmmwpurjdAU1NrSdcPdmTHucNeaN4hLGcDtJPh2",
  "key24": "3FTVxiYa5D3T75VEve5UzvdbiTcfQKfh4P6F6YCTXe9PwtC4oRYuqMRV2NzekR5Mn9or94iRpXiPbAGFTvNBkDwJ",
  "key25": "58nJw2aYjSzgzkjHCG8xrgfJEbKXYDzsnb6AamZGb8B2tX8nMY3cziHCLRzaT1wxVdUWjvxtjRZtaSM5Pr3Z4LG4",
  "key26": "5WHi6m7M7voJZ8FdcM4vNe2vyGiUyemqFWvYjUwecKPtSpRsP9TtM6TSaVi8ZnzJGZ7oVdKHMEM96Th2X13pLNSk",
  "key27": "4hofnM68A8PxDZAmcDY1ZXuZYQxZj7Xc9rMVUHPJqm1ENBnAgBjNeZhhxjEntPTQm8F9Y79v4SSKVhd1cqMdosqW",
  "key28": "5R9XWprgnhVkiYf2S2RiPDSrygpvSRkixd7jxmMZs3q44TvGGZkYTfxDu1obUxUMge31ShKCZk7CsPmnaixxrAAM",
  "key29": "4Tv6Tu2sc1p17QLWY326hv7bpBqxsFqvxt3PX4FAgRXw5EtaGCtPG54DDUvRY9MQkFqZEpo3Hax6BExgUH4kzhnc",
  "key30": "4TwbKWBMdqWkkHnc4Q6QDwdkz3JNyZ75H1JvTbY6hEzkaeChwqdpcsew4pS4j5xhRxMN9hbxCafat1aethXZ6XDg",
  "key31": "4ZYRgdeQ9Mkbsobh2cDTAEtauW6a4o6WRDon4972MDde3dJvWKZMvRGHaiFErJiL9Kd4ZnmG2rDHq8iSR1bq34ur",
  "key32": "278xTkQ7WLmjw9XRCAadQao8u7DnEQW2E2Rbt2CZqp7EYbiouPi2syYSgcAaujAvqX1AxNTBDQwVBhfvjGA5qndB",
  "key33": "32MFod7ensUDRi3Ap6K4PhU1eEdMGsAPsb6yDbScG7acRM8S6QGbFgL4td25iDwTssT1R4BuaND1J4sb89ZxT8ws"
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
