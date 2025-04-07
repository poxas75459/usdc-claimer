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
    "4GCVKVFtafE1vWbkbNNdAo3rHD7jYyM3a6RzzDVgavUhj2rHBhM6r8TMuMw9cTCaJJ4CxrFQmRZshArb3uQ7FAaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TkoH115qW5ar11raYsL2ihTJDVYPKBdc9HvrdBSgyap29rpcCyEMvU6BqGFiehb9uJtChJGgEQR4EoY1RuJmtM1",
  "key1": "5NNkNip4gozGfKKgUX6pcmcEkWherDbE7DgXM4JE8a1CvvYjJQ7AaogY93KDkJ6xLXrFipe59o96NWXrDS4zjehZ",
  "key2": "3WvJDgQgVdXNNBtjWc92EDvAw6AErdVePK6yV8BQTd9WEJzYFgRLFrfHktKd4GcqZFwBqjeLPED1z6uBNDHksvNv",
  "key3": "4JTWYy1TZ3XVm6dYdcVqXuD2pSBaqpNTtZwYPXFFhkBmzGKQEZYdwuKX2PuhGsAXVN3A62V6nuiEWyPy49DBw3YU",
  "key4": "PeyMhm2CUiY7Deu6w5hyCxPzQZRY1yijo5nwv39Axq3N9f1CbKMz3PjXNfHaSPTVqDqVzwhVLcA1641tn9D4M3b",
  "key5": "7Sir4pJQFCtdZYpR7MEHBC5GULYc2anFZE697Af4gMyqoaA7f4Qyoev9Exm5ct3vqHt1ecrC4ADxSDoDoTqzrub",
  "key6": "42xfpsKTWxdo38sYvm47R1uQzin6kMKpQaiwmBXELH6aTUcN8a8nzbPnoxESvMiFPdiFETtW34b442usCTW1Rhh4",
  "key7": "3ihjqZpEBLNBMvwj78BGuWxpky4NosVyAv9spmZqJyZXyGa1QxiFvDcMPLA5PbQT4r6zmGfsFK8iAg3xbW5azTFh",
  "key8": "4NXHkYwSgink8ZfRtKKyfhu8TFjzH3mjLcJG5Da7d6HvHiCGA1W3XcJMPR7uTyULS4e39GJT7wUhsbkEkH7pv3zE",
  "key9": "3AGydtKfX8URSpJzyEUZJsHc3jZXrRrM8js5xyWYHwVqEH75a6HB9pnRhf2gk27LTbJVAHM14qTVKkV5Z9Lb7bhh",
  "key10": "3vSnyxvyiH6mBHBo8XUSF6tEyzrtDQAQMh3DEPLPRudMsNpj5UGPp4Y6KUT9c6bGJ7XhhzyFA1oUZYFwr9HnsFrC",
  "key11": "2gNUuF9cZLBpdq5qvKWdqrVH7Emkjhceuawt29Z9qatgrbtu8p5mEc8tdK8uAyRcM7TQmqN7xgt1Ad232khQAudy",
  "key12": "2MHeCCKNUdWcTrfCgY2h3wryaiP9XwNboUVPAknPhco6o9g8F4fqhzuscmWBYh7fjexcfjkrbqZU4KsatTAZn4rW",
  "key13": "56WUwMbSeek1tGErEvRks92zYL732KKgdjX6iU71HqzfjBLtcUpBbZiVvfQpNFkbm7eAEgzcNcND2oC6MBjLzoVP",
  "key14": "4DVNxRpJah96J852oQECSoebweVF8jYKCwZaVYcJy5j5bHopLnjCFUFJ23WbD3P9rBfGQbucxTZujBjvfU4UNxSg",
  "key15": "5wvNhQEiqiknvttHTsaEnFcHdgAw3DefuJm7Gkq6riqQ51zA4LgVV4KegkscHXzx5T6SzJK1mxiaMtcHWCTpCZyu",
  "key16": "2UKydT55J4cuoMqsiwzVXnxziVPPbBaEcVYfk6Jgdf5Ws45CixTk9VSi8tG6QcxaVSfKkXNr5bNX3Y4WG2FEfbm5",
  "key17": "2qov3Vjcr3mWGcmidobAZG9t5Hmh8xjZFWtp7zM5obsr19Vwgd45HJ2qD7pGgGP68LZCWEsYw9Lj4rcmomTceKuK",
  "key18": "4C4biiu51FjEhvR53rpGBUf9UfcFTwHxDvDEN83XHWZtURAgHMQmXLtP94z9rKQ4wmvSp1CjdWuKNitSPW2rHsdJ",
  "key19": "2D3kPmP6qF5jVpcX3DeW6C3rSFTdT1BzcGYwoWu5JZXJeSomZsfWFK79L1xiRFiuPtZkBURmg2SAEGb4aFob7EWR",
  "key20": "yyCwVppb45t7BttuUDTKxuJNv1HZEkx6mx3xUv6sFte4uhmPv48b7L15YeVLEKaHEFhAfPWJFoYdhWDRFg5NBPg",
  "key21": "64wLu5h6bwcV1aoCHBTUC7QchXTrKg66N1SevWhukDP8Ga39FqdR8PCDZcrm3WKpQzMYMbnyqFN3eVEZ3kNXW8su",
  "key22": "tvuZxvxgmc5wBHMEDYPSPGUA1VPooNQd34kWvLmLWuwEGNADXuhhQACgm15fhzyptmW5uvZrTuN8CSzhhJoB3aS",
  "key23": "4nWKiP4iwKBfmDR1pCywZhdkyoPth17rBshWuVpKxw86kicmQF9BJ4ejxS61Dqzox2iWpB23YZ2Z6JMboLpzDasn",
  "key24": "2wMqf5jNrp1Z7t878bHat4sBiCuMhohmxpqH898jiW14q1Z76BdZQ7tYbgntZoVVQrnMTn15gcB6BEPqy8wRzFBE",
  "key25": "bj6EMpv3dbzAqtYR6U4i8Fa1ei97S3nnotXjE1kqrSunjbwBCSG8URUkJ9fMKpELU1p6SuHTuUPxb2yyQ1gmrHX",
  "key26": "3ztGQFqrWP6obsUviygPLLuGLt4GRVrRRLC4vUuoGqqSVYF2pJ7gMHpLReTRDpv3dDFA7Cz5VsdpY5NKxMWvBkLo",
  "key27": "srXUsLjCMV7tn4FVDbR4bS95b4kLHxyBfLLx8XkPCXkH4inhGC3a6eTwpexsaG6pPszhA1qWXPTJiwgKcxQvwvJ",
  "key28": "5KggTKRHWPw92ZAFf9eH6qehXmQwzcoAuhqqLFywy3NLWGc1C1amCR4SzFhy4pstWEMU5oTdfA1e7d4PeRr4WZqm",
  "key29": "5qJw4uVcKQfgNkyA7EAp4VmNJYcv1LMbznSupwDTSxkSZeKd3fLW56ohmfTFiB1Dv88Msq3z2gWBDBaxdazFnXfq",
  "key30": "2ZCt7UdLxAFSpgd95wwvpaCGHg6dpgrNoc4nPNCGyBnK7zvZWWD9Ka5K5Qrw5BYYJK6RxWKb583X6yB5N6kfAzzi",
  "key31": "3XsxEFMv5o4sojkm5HUkzwgUiEGEK7j94sXZBWbXocNSCmh2mBck8K5bW5dk716Jwj4m3xHHNkWNWsjRMtkQuTKH",
  "key32": "5J2VHCK7vWsQ12JWArFUSCFwbRPmYCddYmbTcRKJs9LJre1BKzyVKHmNUNucHVYKgdvyeSj17QBF8TWC33nmMNLq",
  "key33": "4qnHdaH9U3PjK3MEnFJYykhqm1zBfE9cEkd2LRXowercg5oZNDBLmdYJ29ysy98xtodahtub8yH4DNV2s8h7TnRn",
  "key34": "63WAsYHPFTki8SYbMQjJrRRNRvSzmxcPXNZnJLwyq8ha8HfGVLBrQD5zic81cZxSH5QirvAm9ez1L531WrbBHBT6",
  "key35": "3WtuWA2MdcisdHH2FH7yHYtudgg7VWEFtcBmA1wRi1H6DtrXyFFNyAxDiiRbt4xanTJ73cUcGAbkgwdtXCiacuet",
  "key36": "3d89evLwMDhUfHFXChAz3LHFG7PjvacvYuuhA6jTXrSoRYkYV4up8esjARVAb2kt62rDJbWbLNWk6b2M75TiChMB"
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
