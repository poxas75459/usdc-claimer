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
    "3LMhyEb3FKsxyCbgfGv1FfpMn5Qj2rThdDRN4yQ2K3PZhJA2Hzn1JreQ8o4dW5v3AwbwRujbnRoscpd2tBoJdcHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AzgrHm4WreFKpiCEmdhgaVzBr21sKneDrhu9nWU2KhK6WTByYea8jTgyfsiNFJr3mAV1NY2jSb9AyarpmhiVqou",
  "key1": "nPcmseXhiaSHqqCTPmVZg8sMxGcap31iQ8mKKdnRstR6ZDiGfuC6qL1HcXB6LLtwaWL3xPeMgavA9titYX6iv7o",
  "key2": "3tiM1xxo8us15hpY4LNwdNP6xWm5zsxpoaWEKnZ1BcPxGe7LBzikxPuDTMyG5ehj8pYek1KXZj8KbQJKYC6cvwou",
  "key3": "33tSzGWgf88JLuG9Dfj2PAWH1MWaNzDdsUC4QcaFaiKARnZWWPzzqvjZkonaYLkqS1KxEbn3TuWB8UYXfZbnUh34",
  "key4": "5aWLKecJPJky9dskLyYaCyLQSe5zNpR9FUqd4RwqqdUDDdebgFN8PQ27nMFQTAvTQEC3fBBskLCJQa6a63VC89N4",
  "key5": "4DZTSopCR71ZgZa6T7RWGMKmGbPnpDZmgN6mi4BqzBASqukk3ByukwQWK8sSFn2nrwKSoDWTMu6rKA84qaEFGnKv",
  "key6": "5rmdA3x4JJyxJkgmvtd3sRf7WqCGpccxzZA9b6seNdQDnZ23mjjNYZnqEGYj2Q6ruCM5KBj9f7vnPBSvz5qLpDeT",
  "key7": "3FeWCMxztExHReQ7WDti9hfpx19iGNDk2H9xyD1t1uZmSyq7yEWKnsALbEnAZNqyZguKLB2XtmfDuXUxYRNR541i",
  "key8": "2F5suaaW66aRkmMnVKx8MeAaqyFTpEfzzNvxrpFyy2Y8uxMXsmDzv7s6WRLfaPcxTeQ7WXjj2FL9YuFjruJ8cr59",
  "key9": "4W8XqugXBsH8xjuGDvjuru7WuTUWR8yaxvcfby54Yv1MNEUJQyU7RP2p2PjfQjDdVXXWsavzxjn19zF99HwvTS4x",
  "key10": "2XefLWfAg7g1FUYH9ice1kn7NGGXz1JhzHJ7NyE7KEo1fsfFAsdDfySuPagGtehjg2HYmPUmyGsX6efzm5KVrLr1",
  "key11": "3D3dvNngGNZMgtENbHzCjUDHqigW1pTPUh6RLAXchq9miFdDDMvPGAgvFEDLVTYxXj5VPmc5oVUkUZxAUjTALTrS",
  "key12": "454DnAwNvGE5aksp7x5Exrt9YnEUggX3SFSunt2bMGCPQmfjyuWgMJfpVt7RcmHQuNJECZdZkoqaH5mYNgBVa54c",
  "key13": "2DZq9Zca9affEo6nDh8C6S1o8RBWt4qbBxjubLXpbaufe7CMrcCGCVxsu3RiMVPon1SBb56jzWrDS4HQqbvFB5PP",
  "key14": "2iobowjqmPyeujj4xC2bBP9ad6kvtQ1XsMWb7gybdSgUemiBg1VWPV5AgrVZGwQBqT7XmvAvha3FpCCR9jbPJBYv",
  "key15": "gQxMsJXUZVWSCvMiMbiRatiHECpZnaELgafJj8VawEAU41bqaVj9BUcGX3Cm2KTxuw7eKRnJL868a9mUQ8W9s2P",
  "key16": "2A9ivHcvYxkaENnNC2YaMJZM8gLrP6vmiPyJ76uzMwBXWXtGqPzTo4jRCuEbzKZXb2LUmBu5EZrptr4iD4LaUDBe",
  "key17": "5xyLNLYLzp1MALBLhHxb2Ypto2jQow4B1jHzYpwRYHbvpkXZyK8Lunhy3PLccj6XiMo6M2Pripd3rCabJD7edTa6",
  "key18": "4E6DfALPsE1rMKmHFFtEGzi5gznt8s1Zreu3E3PfGH5rgS4GAzPrHvk64CuUjyG1QeABRwUSbxKCDMyRhCDS4B8X",
  "key19": "2hwk4MTUZMGWCmEncNSy9tNDvpzra5zGnUHAKix9CyGd3Jiq3sJatkvGM35TnTcuUqKugYfaiGqx4Xb4mRKWgDhA",
  "key20": "2Tv4QyUgaxg7dWoAPH1e7S7CJHEBdFKU8yXuy566jy1ov1ZgyrYwYg1Df63UenU6iKPnJeoe92SFM2denwpDEbaK",
  "key21": "5tqyEmcUyMGc8Z9mFutEKtmMXf4zoMKjbRe5xWtQserUHUkkGVTJVpbXBcMr7h7ebsd7sUWr9JSXYtVJ6QPUGG87",
  "key22": "4XH8EiVmvmEeeXf96dazHrFVTg636dYynqvNSqfJvKb4uCMwwwjwJrdVEXcSRfBuJ3MV431ekQWmwoqpVyTUZhXS",
  "key23": "4VKDD6mmsufQ9kfgK7sSNFCm64Ag49E2dM574X8Pu7vyegAgEMDZ88GqpnCYH9pvTjySfKLEAw3uAWUnkEFBfZo5",
  "key24": "44m7KwYyNpyaTG5JQH9WH27NrXwe8oBEPNrJXzzhwoCh71Q87F41oxGadv1X2yMVcnWSMd5XzAQWYEM5zXxc4jgk",
  "key25": "YtHpoJHjV4dEX3f18KikxiMoEXqKXuG4Tz3cnxbrWrUY7K8KGmmExBWtKN62bG4pLJnmMjNKepDdPX3tMmJiZF6",
  "key26": "2VeJWCEjSMABTJk8eM4pAv8oKVhKwYKoQE3tFy5HVkpG7rtwRJyRaJFrQ89mb7ot2PFHdmfYb9cJSAHKGT8at7bs",
  "key27": "5YfYrDhPsC6D9Pj7xHfcKQ9iYjp7W7QSLX2fuxt6hJSz2QEzgc8vmvNxXXNzWi4dB6KE9qVTFcFVy43ya7mFUH7S",
  "key28": "3LRo4SdWKJ7Qsk561R9YzmPyhPxBb3chRfRaV9M6Ke9wAn8deGcLWkzaumq2ry2gpsvNeBxnEWhmgzvoR5JZoYNS",
  "key29": "ZGfqLVkwqpeegeAkbcDbtPBsCjDubstQG2d1ZGR2UsE8RAtrxckCgBSwLmFoyHz971M9X4QsgnnYx6X3HHxTxk3",
  "key30": "4psw2zkJx3a715fhiiDSXuxfKEowTu91u6DBABVNNHPiuwePKBnAVwaoKFMYTEq7zZeUvcb7g5vVyDFwfRBoWsdo",
  "key31": "3Xwi676LYFCjcSvPQk6v39xaTjNtNSjv5bNPWXgBcEnuAfMeJu9nwDYQEdTUwcEy6un5Gv9ZWJdEd3MFquMksi2C"
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
