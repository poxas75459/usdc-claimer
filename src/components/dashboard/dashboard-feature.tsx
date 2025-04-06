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
    "4SKLLEqkE4FxYirEzQrDF86w6X9j2adHXCeM65EvUzUbReFPkDsdUgotaQu8FqzKYQDfWobjFDMqW9f8h6qnj74k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28kCrH7LA43vDwZSEkF3y2M5jDEj5zgqPyUDmwRwyQjqGuacqzb6pPo5WFJznGTPP3aSRth8xzgVAYrG7aZBFit4",
  "key1": "yFqaWjUQZ95NthYaJAmnQhpTcWtCxfFUSMM9RfDV94yJHR4HjLxooVgPRhr47EV6D7rHeyLPzTEnCZmcKKaeCrW",
  "key2": "4mqr1qjfyZyWgMr6mcMmtEikcB6mL2uAjK5azUjtPFowbzK69sVNm3m9SnZtudnhdq4cx5RjFLMkCPpR3DfRc8Ns",
  "key3": "4PSEmNQ5ZAh5fJqWTN5QEGHYtebDGPgvJAYy4rUwAfUJg7Nf7TQktmoWxRVLjS6MBQAhp2XpfDdPRr9NPa8yfV12",
  "key4": "4tvgyG7wbBZsXdxA2jSVBDhezgNPhdbum6wtfaPgdrSFRANK3kHURS2Y2esrWxyzoPSYBmU77iZRgSwSBYN7YhkH",
  "key5": "LwarJeAezChAFyPQnd2wZT5aLYtQMmNsZeZRdggQKPUZfWMqypEfadHn2TRGNaV5X3Yujk9eJ7uVrHd93ScpGMb",
  "key6": "3f6YervcNPA47xWqawDhpDBahpMc6xu5LZwZ6uydT6DYzaJoJp4U9eaKx83YniW6oXJczd7LKE28q2aBzyF1gMKS",
  "key7": "Fjz97My5rsG4P7oeskRBmQwnvFfUrfTJCKmoXZYq9iF8mRYD7KuMtxwp3qdQh8MPCc3SvMVjdfhsRkScqfNFA2o",
  "key8": "5xpEs4L6MaGHnkBtA4DVY7PbWpPTkoZAdQSZn9AaSGbfm4Q1bjNtmw7YQKvcaeex3JiZGNNyjoRxPorPjZgEfo6N",
  "key9": "2GHrXstbJs9XevXYJXYAX91EQMwi4Hv9VVkzE4ErFbxD9R3fW4r788iBDuYyHs4LJf9oA8udqnSvgydX5B4svxbS",
  "key10": "AXjQtMoKkVqZ7z5fRFwPc6C8u5cSDsVjeX6uB314THdKK7nctcpuYQEvC3Aizx9vtvLzrjLvH9GcAozR5xfg3nB",
  "key11": "4Nz6eCCNPMGxJ1DCDANnfQ63mEzeaJyPBFHwrBZMmVhzDFAbDgNT55vDvnEdYZpedcBoMp4ppNB6WBxahNESv94z",
  "key12": "39rh7MQv5QtAeciUFcmN9QU9dmTFbFcUfrmeCr6VNFfRemtf3tpTJX8YrRJYxetqZ3dcY47ddmu2wSxJoQ3BLuqe",
  "key13": "27JCFFtGy717vykDwu4YJeJG1AGFSzBe4PhwRoNponypDPjCBt6za24pdJuLc2GJJHCSK281ek3CZCSUyBq4SCjw",
  "key14": "tGwhgXDePyfRa35389Px83xkYVyTfJEugEpQKCdLR3mprVTMubjzDdmrdW1S3ni5GZACdS45NLGHDwQMTRnBZwg",
  "key15": "5LvH576tss2cdBqUA7CorMbiTg9Wn9ALnZY25LgzL1DjKtvjBS8xFRgzzFfPULoQkR2HN66DTNZEAK1de5iJTi5T",
  "key16": "4bZFha1iy1f3yynAopPNumY5ZBwJcVDCRz4jAugPSBQzLn9gMkCuEiWC8CLoHK862cDGgRJFik8B9hTkUGQHvD9U",
  "key17": "5uTw2pxxSYcAc6Z1CGKtvTfnRy6mQA4r4a7e1hxaTV5L1ugeWibbjnQrrYydG7e8UYn6t7L5zWYbk9qqHpHFfDHT",
  "key18": "5e1bUE7gXchLEw2Hnc53BTMvwS8ShpaGgn691L9g8qHpwMUN7nYB1j4nBJVCRCiFZuqSdD9xYZusSnyA1txFkmCx",
  "key19": "623pkLCfo47ETpkqZdYZVgGbjRE5Gto37nXvgXkbncpbyKrYRRw82VRBUVrvcg5cnGZjx2NDRF4QYPb3sYTjENgN",
  "key20": "gqYiQFWexMXTa54WbYpVMGRZCSJVs5M8uHexT7cQ2uSvQWtnFueXceomnLFNDLQEeSJQxGCqMCcd6uNxTNu5biZ",
  "key21": "3pBzoGZC9eoQ6ekxNUCJFm6Cszq95QPSCRVVpJUgEVe968F55ciU2BX5mxuXcN5shRXBzvJS5hW2K3g5bprGdFQa",
  "key22": "2cQKu3KPbZtGaLkizE2vz1xF3dbb6Rxuv7yrKdgXRBkw6CpT6azgUE4FH3yC27PEemjJt2Lxv1DLS3Agmcn7FjeC",
  "key23": "2azZbNNH1upbVmPASJr7wQyKqeSvtSYDBiF6qrrgXu9nCh1sF2jcWZ5e3SR4JHZdnNXXMuYx5AbY4ZRj8pMyp9L3",
  "key24": "36qfvkcmQWYjpdCEdDUjfmqZmungPZBtLtqR22EZFjz5KAt6dqU2sbdr6Va4ng7hxxsQwBieULZ6LDPEjTTBTQJJ",
  "key25": "5ZthrFtk3WYxFAAP9RTS8kRQ3LPBGdPxGWCXoBhyJU4GvjsUydSZyzDfroH4wVNKcgBJJEkV9moc78VsgxHuapE4",
  "key26": "2WdnE7RyFaQ17ytKVPmUt4s9a36exnj46PtGydUDsTz3qjEaHwY9uUHSTQ8hNbo6dPMvCiKCA62peYaUqArvz2Hp",
  "key27": "4D7nX5Xt7PJs5jAjYEncGcdE83VgY1LeLjeVG8NuCPLg5nULKTcuCXJKZZGaagQVGmFdXhm37BbYqks1AYv6jBty",
  "key28": "5n2BSko5koGcpnC3r64MqUjyQmSSwoaoeJZmBs8deapsXFBFarG8xFVpPcU27y4W7uo6d3Yx3NiUJ1SocFwEDN2",
  "key29": "4fUJFh1zM1wgvXYQ3oEkh16ZwjfbCkdQsdNYefudqHkHBAH1PpFj3HnJiqDtVDV5Qh8jML2EePBzUUkb1aQAApg6",
  "key30": "nU7k2XGAMjoaS4j3MKTJTharXLjkChNpokWi4yJZkr4WY9KxKca6LNNaatxUe7YKsh4FiEwUzeAk8M25HYvMS5i",
  "key31": "4vQKWuUXFoAQY2qYKzMfzoHTCtnHpjfbQaXTBhpg2CdgaFS628U91sf1aCRkG5HFczyzvgaVVq15MsgtWaDdVzua",
  "key32": "5PDm63w1sbtXpWGCZU5KP9ZxiGexhVctFcY6EPAcftiAePX5KBRCcJ993Lxmozw3kZ5i5jp84rzegj42ZVQFkLAV",
  "key33": "67q5ayoVkU7p2xSJByAueV9ozwQ8T3kZ8Feiqd5UpbAoYz2tqAJm414denuBYRKzWp13y8sehS7N8rgs9XQ27AMQ",
  "key34": "2HAVXsSbqQub5V7wSY2yMKTtQoFVwq3zqjPUxtSL1DrTdBwhNsujJJcvMwj3UVKjUQKVmJjeYnvgsHtfvsE7KG2c",
  "key35": "4RmUfWRTzzYsy1PhiiwR6n8vHDHtMuvhyi6eb557c5Co7dZyaT8rEjfBdRzZBJhgi9UHksxkTZqVsgpuQVisqzT2",
  "key36": "3vZWx69sqeWsT44g8gyEaDTwMV2kZQanFaL9Dy14xBmLJZ1eRGaQ3e4GRFpGjT6oR8NZVqoEn1KtW3bxT4RdYmnD",
  "key37": "4rQDMrGrv4BenNZesrczP5nYuGizej8gNxVUdekFuKhunB5azqFn2h6VtGrjCJr5NydmXfSyfcsMtRJVSuqKJpfx",
  "key38": "2wR26AbwaeWSsuJKzswrpFcPtUTzi8K3re6F9ZqowEY22EYZoRBTbo8uuapKStTsiR1rXDRKoVgrcVArV2LuDTwi",
  "key39": "5mh8EGASs6igbEHgZLe9r7WpvkxipTNqNzUbEHLEFgG4UaRxUCNBke6ZfruYXbxwz89R4gfm8HEg27aAYDrBoH8t",
  "key40": "5nf19jXxuwTRAPX4Pgyp7mqqzZktfgucAsH3vB1mek8as1z1ggppAvx1YrBAA8HzR42eyHKfAbvZkTXV2S9D5qkS",
  "key41": "629UPU2j2TjQmUr2o912VCikBBvH5YUuheCH6EgupQWbM7g9wUyFGoGSbrEcvSoYmUpDnd4rAoCuT3aeHH3SzC4p",
  "key42": "D8naijNBPDFoMczEDtH28UgYxUunfa16hu3KVVbFdDEvXi7tGowPgcoYKcwptZ5MAHzBzSZtCxAeu6eWrTupuVV",
  "key43": "2X3J6uNUqzK1bep2dQ5k1CTfuqLqJ5MsSQtuFPszbUuwEuGS7WAytcZ169VPeg99tVGAqTtUxi5YTKNuYfoZiV6J",
  "key44": "4nr17iXKC4NdEBywvh8YCWbifKTUX64LsaDnx4coAu7jj8N2vp7qRrvk1ToU2yCxNvT6kiynFwpaJi9PkCiFQvvU",
  "key45": "41xYfGnhDSDYNTdn3ep77jL6bgifJvJfNPYSuVpPLpUDz2RvZdo2ixVT8JDXJ69WUgknp9n9LQgACgDLerqxg3wP"
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
