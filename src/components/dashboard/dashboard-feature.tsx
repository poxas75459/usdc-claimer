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
    "39Xi7bJBYvWqcYvkhFJcDfR3b65rMtuQa1K9d6MCW2VRL64fy2eangwTc84c8ekv8PcMVJG5oZBsRyuem3cLg7kp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DshDu3uSM5NuwmqJDXqD8a3Nqmgxougr1ro5s38TrxM5rBZ1oQpNcc4yUviRevU5yk8cMyAPRSVbvUSs7GqDQrK",
  "key1": "hvTXJWurCaoiX37uvEZUHipvZc7A8qYw4Da52MGBtuks25QeUEPEaLm2ymj9pZK7GxDf4WXVRaKWvZXVNdqvk3L",
  "key2": "5BTqgZqtU7Wrr9cDvsRRCc8U9cB78PkdtfqE1ykm8QUyxyLTvYbiGmGrccw18rk57PtkfXkUvs8h6dJ93JrTMuak",
  "key3": "5fGChzJ7meuS1J6QPJdmWBTH1XcREANHdkfSTdskw5DJLp3KAKvWBcqh6P4FmUQkGje4qxD1AubkpkHknPBqwrRq",
  "key4": "4Vxp86JZZhGb2EWVzC49TP7xicNm3i4wZiKJgA6BcmWZZjvxSrsFgy2syzw161vx11Kn7BXUTDKs5t61trnKSdbN",
  "key5": "CdfErG73sohizKdjrNuc6aVb5deWuuADmeMmmPBXQQ4jrE3RxmPMcjwVPHXgoAQMQnW4PYBvu81WbGxZEsUoWGy",
  "key6": "jQtLhcokTwpHE6qt2YDsLwf7vnaTa6KouuaSDuXri3KHDM6uHJpba88PaWNXxVcTKNzbA1HdMqXYD5DwLm4k5DK",
  "key7": "2L2tgKyMyS7qg5hKodvzNP8KHHLPXKwcKe3NSBA1seDhJWyUrKSq4ahbzFm3boPvrzjURmNd5YcMmyPAdWMGEARV",
  "key8": "2qDbqcQXneMbh5nT6tgi5TVicbqoAArmMAC5rAZWUUgcXT3np3aGVjFNs5QmrKZrcgAJjHM6xTEY1M7p6o6E3Y5b",
  "key9": "4w1g1Rhvygka4t1d7vCsAK51i8vLzjDxmtjh5X1ALAAKa3eXfSXmCfaEAcP1nUo65XYYAtgtt68wgJmM6iGzZMxF",
  "key10": "5i5F4u7ejXhF5DsRmTcppPuPin2Ar1RJcqCD7tXvvC4QXuqsEp7FbMbTYkCZvQCP5V2fAqv4k2aAXNGQKcnd178v",
  "key11": "3Wg7KnE3nJF2qdQvefESw9FqmRxZoSurbwFJgN7F3zeCUyHiNALH1jTWF8gnC5VHfW5hrYKUqViWYLBTyZDCZX5J",
  "key12": "3JbcSZZ3Zu5REHhbvVmQWJeURQsqbUGm3QyVv9pv7E3mPLiFvv7UX3VbH9NCfxrtkETERuu5YeF89ZjzxxZT28qM",
  "key13": "2jFNYMaGWFWJPmAUSAsnvVgCjjXPJecQsFFFdRzJMRJ4RhGdVn29tcfTXq6WSW7U8i3gQqvBAAxUJvjHfqPVL3Pk",
  "key14": "48GwJh2wMMTTK6YQEHBFpUJvPMKStgmT8fyL6ui64qogaBPGajM4SVUxzyNxLi39p14NYxwkd4SXQg6G9ZEzBX8X",
  "key15": "2gVgWjUcYJwaw4QrzBEXMMTFW6kdKVi9rHf6NPLuGsTaPiBPAex4hJ8dfRBWp2czzTLXa8Q9U96dk7v7pZcq1SDw",
  "key16": "4ifMt9izEKscZ2M8A4xaZSVCK5EVJBZVrH6WR3rvCNJBMqKfcrhK1B3e7wcq7uDpLAga2jK85qyrA9XuJyrXqhem",
  "key17": "3szuxarCd56RMLrQAjxJpafRyGciZT6sCwfVicb6c3kTgbdaKuaxv1mFY2hrHi12PjE2r5f199Wmjx7i8RNWXNVH",
  "key18": "4ae4SRLWu45T8UMvWJeomqR9Xuj2etpErGL2jocLrtmY2wcZarh73GCU1LJtjjsbMpcW6HHuRWF1iCMYA55NMgdA",
  "key19": "35YGuDg3a6BapuCqSTAPMVEzZZBAarN2tVXt3gzjcUiW3FJFgfQ3wY26dbQQr3HD35wdjMt2WVUTobnesARU4C1k",
  "key20": "5zo4yqThZV7JBLXxnx35UhVkDs4s5oxcqp2bEeAmXkT8fZ14E21yokkbSUhB5JaTT8UbqhuPibDX4soaNJELkUDC",
  "key21": "4JAMfSQebXucGpoKJPxf49VDbDZ5YhVHymht8hcDTcxexLxi8zTYvqb32LyxUsVi97DZ26Q9kaYBJcemufSx8BKH",
  "key22": "28SiuJALQNNu8Ar9GH4QHSLybq2zCBzcNisM9NdRUDdBkYjpcoUb3RjjevCRAdkLcpAiYfoRCz9aizg65HhX5MGr",
  "key23": "4YXRA7mNWy7fkx4usK8ZsGxiT1KFEbhytGyiJyWn2DuEPqJ8TE5WGAxue4gxeCqu3RNVE2vgMu2T8rgX8KrfhyH1",
  "key24": "22523ZTvJQeXwLEC8CdcxjnPq5iJwbZMnDZ4N7DF9SWf1D5dMbye3ndQ7Sc3PmyYKv5Ev2WSS6nJehFNSBtxjK8a",
  "key25": "21KDY5iQugGfS3CmiwEmU9YBght91YAa2FhgfKKvHqMswv7HHkn2AnFernqwPYD6x59tTaYANAMDXSEUr5LpG3fB",
  "key26": "3hGiAMUmDXtfade6auepm97SLTipS1iK4mpMtwotT7Pb2fNPLhzdjz7qwNkMoC4QFvGSyUbTbFFE2R4srNJNd7WA",
  "key27": "5qfpRpNx4UhkVgUHtCYLQD6kjRfbebkEBgmz2g352PvEukFynfBrMQxpvqu2Q26y8Y86C273XbLGKxbUaTKXyuse",
  "key28": "2oBA9zUhPCKL1FAVVTCexHYmWKhXtJxZNeLDkVyAVeVRrRGNFM2eMu1Eau53JVKvHkPGZntvLLfPPRyET8C5QxvQ",
  "key29": "BQWMesEhQPV3NjJJB4aMvfg3R1LSaBpwcWkoDn5dB9A9YFhYS4k8qUCZ76DdiAnjMQwwnrdMkfQ7Xzs441DcDJN",
  "key30": "4KxszGLkrEcvnbfZymzcQEXV8JwgbTtP11K6UbE8ma9gDqSUpcLFbX2AWQoChBVayWbYAroT1EkiydxgWVk8iT4A",
  "key31": "2n7FXbsoG1o89BRsCkdjcYkJxmrVHktDuYJ5Wrpriw42jEk9MR8cTFcV4RV2Txkr9V5CcmEnC2iwFPzE7nfjmLkZ",
  "key32": "3dUQ2GBZGQHMdijhw5vHLzHHsNq7HfQkxK3mejmT7FWAG3vfhQJXQqC4MNFimYnUx7c5mWwqDwiXUCaguUKLnTwS",
  "key33": "3Yt7VHQe1vT6BA2VwziK3C4QY8q3mWLtX76xqf3voR5sEffbDdadKtaqBLJvdj4paGF91hxRsYo2bJThDFofoZq4",
  "key34": "5ZcppXwBR5fbBJV75sFTZqb4XzwhKCVCJJFxgGS2wFmTF2draoZFUkmxFHwghZ4jNuJazCnryq2wjgLHdRC8dJH3",
  "key35": "38cMrYiJaXsbLr7219FLiwLNuzAqZ566GsKxr2sUzQgDSBqsgKVn21LZTjUuwGSCeY7xSCgPd7uq2Qe6FYZH4wkj",
  "key36": "5XLaf8nZLDtNkf3KTYh6pQf5tBwmZbi3WVtM1mBTxm3KLmcUak8UbYjaj2DgwVy3bZ3MGawAJgfiA3zyugxsi34w",
  "key37": "5B74hfPZoo6e1Pg2TthWnpuWzJwfFxtfHgCxS2nz5o3b7oA23eQ2kfo5nBMk34V9vMk2J6L1x2H3LCbDJqoWoxnD",
  "key38": "fCCQJnyzj6eXiE8uBTEbNpUSK8E8CXCnr5E7fH1wK3xXXr3rUN43EL6b63FsoRFj5zpEthyufDAQCw9pRpcpArS",
  "key39": "5EQeu5W7NYbHmNKc2xK7PFgyRrRep6gGkPbTEp4FKazgVQfWBqDMVBnKru7rUgqyPViSJWFEXd5EVrFRqRAevLm7",
  "key40": "4ZFJmCbZkx3mTnQfyXftmErV8PNPKB3dTE48pD14b87Bw6uUgUiBxWs8t4zcxMWrMExx2F28TuoYsVTahymgXThA"
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
