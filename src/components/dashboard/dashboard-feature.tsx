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
    "2XtYUrGufZbA5oTxF5tCVoLQjwKYTw42anhfWZAQq2FrCPoK2ngotBnt9bfib74ncSWRdFijUB1GXCivBcbaNA2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JkHZX64LPVtrwk6Y6jpuvnmvy2M7TEogDbsxeRu17oAcypnLueMiiFyUMDqEKH9jjXoAkin8HzshVthjCV2HGxZ",
  "key1": "3h7cd9h6U8ARoSKicAjRgf8HqEdVQ8fx9j7iaSjbASR4GLAatATMBH5rtseMDGJEAF46jtupxzQch9fvPDQrex69",
  "key2": "5MDDh9JXxZv8EgnBEX1sQocGd17NotRdqZFFyocvBHyiZiCmArqMXS5hL5NvrxrvTw4NYAiqBWtzyMjAC59r7AqK",
  "key3": "WR7XFEXEngWEZjfkF5zCE7M3KdhixL9qjhnQnCfWw46RVyE2NThNZNgLYantyXtq6hMjZyBsGeaX9iSGAXjX3ns",
  "key4": "4B8SpGaWQZe5fv9PcVVaymXeVcZnZNHgwFSDUpwCxxQTcUgJg9YBAzvDTiMUYK9MxEDwVaBThcYxuhCkYXJ49Nbv",
  "key5": "3xh1bUrKxs3CKFbW8pswA2YhBm5bjC95NPjnr91MJrnVMhnCLfiJuLh6H5RwFN32R7SYBA72B1PXZi1RgTB77NfJ",
  "key6": "2Q19ZjFj7ZBe5Kp3HhfCj53cXn95sNLhmJmcYnLaoamMe88zdb5dXMyek1nLDavPtVJpJAag5Kf83XieXBbAe8m1",
  "key7": "281gfpTVd7yCPmuoe4XnqsPnyLwfN2utRXLe86UFuS2NxGtxh6kBHxxtZxmFJcsTRH2JR25t7i292eut7cr5vp1V",
  "key8": "9N73913UKuqGHQCVxWPjMMJFjSardtzHD1fqnfEH8wCBbX14HY6QjNCg2cYYHD5vGPSxiPJt98XuUdWZfhWUodN",
  "key9": "TH4FKLoTT2u2jCu1LA3g15YJxdq8mT4kHxiKDji7Rxtg3rHX3YDpN7eDHDoay2YyJH1qD5ySZokGDj9LZhSsmnq",
  "key10": "3FLYWUyv6pTcycbJnxvPFdFjbgn4doJdFH6AWXncWvAUsvFCYr2VHtDsoDVUnUqf6snhv9km4Cs3QySv81e2Uoi8",
  "key11": "4tBfRyot56Adsdiy6xrQTG1zitkicZn8Tq74uG8FdiT2mPgpdXH2DtqkwWia1mepj8aZZeyFxTuP5jR6zJeE3Def",
  "key12": "7P9sFgFoaxUWSNNZCiQuL83g2SCJFHj6GVAEGwYw1geafhPYE4SHgdBQXRafW6BVeGg4poxuGGk2MRHAxR8TXPK",
  "key13": "3xecNcFuZNBZepxHMK2ALJrhfopFY9KBgy82dXW9ZnjsCQE7DXShPtugBUHjfZwhZTgKANCcKQ3Jbk7T2HakJeK4",
  "key14": "ZJS8m8kFwBqbmPSJ2N39HaviPPjeyyWnrc1tKKVW451NV1LLKbZvM5Mb9GW5s2xohfc7Cmy4wAfaLd4KQ7NZKqZ",
  "key15": "5ke9SdSRrVJwJukVDA6NSVnzAsdarg5NgWXWcEaVfdE2vCqaL2p62ydRzHbgA12aeStZuBZG489vjsxdaTYJEXRi",
  "key16": "3WLQ1J14GGDZ4zasg3vgLsxeecyswQdYPBVjyham7MDTUMTN8QKrCBume9SQtWrYY7VkzKrgA3CZJzVeLqd7wxXE",
  "key17": "5T7uBzLos9q4Vp1cmBDTgvZNXDYrtqyVobT1eUZ6trbPPrM26wH4SuhEMinZxXY3jUS4LXmYJ4759Zx3LWA7caTH",
  "key18": "3gDxctHYwBu9C6tsMVYwkTDpRZRL2oTwWFBHcBj53wMXfdyzm1YK5fv7GmcH75ozYep9jBB9P2MCZegoh83UpQye",
  "key19": "4BMUprbKqf4D1ksFft8orzdyird5GjPoopx9enezB4HqGwv71Fd6pQzJefoZR3EGdTW8VmV2P52cHbM3hP1MaaFD",
  "key20": "5LTfJtusrokfSzWAFfQA3aFd8Ui4qpZEcbUffPFFjYb9UZG3ds7affskPQJqA4tdv2x5cpc7RymwLAn6Aehyib7",
  "key21": "whphFGHGECYsM6GQTyNNnch4PBDbV2tM1vdM6GJ7zKCPapaLytSi1Soq7NMDg4n26NmNar1Xj2Xnvp26R3rvLwt",
  "key22": "5pSQZtRJJAKnMeqX9xAEXxAPTRouAR9AX7Dvj61XMYPfjMGdRbyf36svhBtDQHFmWbCUwiQsSh1sxQe5vAxUZ5T9",
  "key23": "254e95BjVg1RGBjQPpF2bYcSBoEcfYHB1xWWfKUT9V7LmdKkvPiMVkJCt32YJqEVsKHYXeZ9MzcTLXhFX9gdix4K",
  "key24": "3XBajyKw3vfnkFMf9K2sqeot1D7KBqgpV27xUDDH6cgyoqnNyFjKSigGnf7LVjstFjJDYHWregafzGi2bYntkLqc",
  "key25": "2qtuRWRKvdZ8N1CHb8MAq1V7C7VELsQwzX985XDtbdmBSiqLknMkXQsyGTWD6WKdU8ZcoaXhNi378nBKFJuMYiqQ",
  "key26": "3P4HAsm3AFdmiytUmDwYYN6esx5hK8htUosKrnFm3bUkVtbEuS858sND7foZEF4rfc4u2Peiir6e1qeYzVoHaamf",
  "key27": "4N6HMEke6vKn6TU92fHzvVZsxwFajkaCdAthoPffYgCXv6znyktEhgx46WgyrsK4iSr37S5n5T3RCFbKdSfiDSLE",
  "key28": "4NqQejw9xVTGt8v8G1ubDyguB1kLPwbYruFhp2FwFXPtc3gaCybT4AC7i8K2LZ98PvTjXAMHpS3iEXpzZC963Vvj"
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
