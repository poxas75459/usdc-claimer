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
    "37JkrqA4u7m1GdBYu696mTf9kd6Pb7E8BiWtjD4CFyZFR72G1UYaEFxQbKawkTCTFEhzBSGwZCSGuiQ3ieBgFQna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pfZRkQzt2Z41tfnBBqbKTebWMHEmdgFb9JjCRB5WDoHLC6ug3BYwcpGfWQxygjhaxp81PgqZcfMwhRt6UEL5Pen",
  "key1": "4h42T6u43HBYETjZGmFcZgH1iKTQZH326Mq2d7PKqArqBcYMY2GEgck7mVohYbL4ZZ8xBDtkLzyAahtrunmQykCs",
  "key2": "5Fh3rS1W1PWN3pa8Ea1rkFczd4j5X2vyREoUkNvSjbiR8Fqrof25J8srtHsQeQopqgNQxhRuMaMCrhnvA6R1Dkre",
  "key3": "QXTvLimA5MsTTREZL3ekDtMPPmp5dFZxF7st3gNFXDXuiTyRtZEf3WDgdvBryKY8cdkob224yyoSubNiG697DWF",
  "key4": "4mCKVD7rntgpEC3NXwdxCP9TK36V8sd52uBaDdJXUPpHhTSG9Dk4yxnaVw8ukoC8pt3L6Ju4DuXZ616b8i41Vpa7",
  "key5": "qwcmbrWeS9ACmnt17kGurWLrE3woxStNR2BLy8jWPJw8dc1iaZGDdy8sbqJfJYnhd6nHKyuFxSZEmeAHR3npfKJ",
  "key6": "1x93XXDGwVraQvsfrAMZmXDsUNQEL2RfUCXgGKMsMySNQev71JkccDgige5M4QP9vx6KUr2TkmDpgxDsf2UzVbM",
  "key7": "5vun68kSPLkk9FSFrwby5StppC96W5AgwcRyUGM3TaUzKBhCyi9vvM2bFa2i3XZMBPUiagZ6DzaVDebL62hU8hUL",
  "key8": "524cTkNguCusMSZZGXwVriHmW62m4FznNTwTXdJPKBB1imHY4dT9trY88vv8xTEgjQyaui73f9BZow9CjLsC8uQ1",
  "key9": "2qWxhYstAT38riVxTj4go4xy6hyLztp3dfCLhcpWfGx9VSxMgQ2XnbtxpnGPGAYTDiDZPp5YHbknRVFg31xdw8v3",
  "key10": "3BcoRFx54QgPihFzTHkwnyUGeHd5k6L9w2u41iWmUHnPL9NwUkHLh1CzZu2qBygmRqGCpnVpCp5LapJSyPq1t3dW",
  "key11": "bM8pg1GQpaiD99pVjqiGF2pzPEBDm8jveSabB9r3QwwgzTfuTxHZ9dYFqpaweM6APZ69iRWM7pDcV7t5sMsNznW",
  "key12": "yr3xtc3UCg6tdLAm97dCmzjZsx6DtedegS8ptFnUTxFKtnqM4kbiV93NzDA9Zs8ZY5Z8LHt4uQbz2MubhCVAgm5",
  "key13": "RwsX5Toisk9zFDbC7StiZHBtVBT2rMo8PF7FpM7Hg2bcQ4DmmRxkJqmpnbWEdyycvdKAXX1tmzcTGGwGsGqzX3w",
  "key14": "491gN3VJvMGw8p2qTokyoFqjFjquVWBpPVYdQK1xaUS5FFCCU4gzwQZgxfcQwwpat1o2Lyyv9HShevZVn7SotWii",
  "key15": "5eXdJsbXMsKZKuE4y4x3rFw2JuUq2hFopk4qyuM2jmJ3hhVAesCSCEqrU2LRA1nYRv6hJMhxG8VYu4Ynt1LW468p",
  "key16": "25G3c9QXg7E4ezsYmnNseBZBNX533gMt3BRS6ugvkH1rBuNb4iAVZiWULG6HFFeCpKWshWCxr96Tm7vddqcauf7M",
  "key17": "3Rr3DXzVsNpvwZNxZ1F6cgictyPgPaUGU3A2xsM8NxZ3scxgWjjDKSyZFxkYq6fNjaQb6VUbB6hG36PRX8GkmVzE",
  "key18": "4Ufu47BHyd2QaFfLuyapdd2GXBsgTzpN8P13aMBBh8APKbL6x3TTnLbb8iCQ693e3UxW9R2T326CRzoiFUwweHir",
  "key19": "4dFBNRcy9bexk1PSCGVxJBm3inHJaJJSMMSeaLLog4VY7Rt17SZkcVnwFuXQ5RrFevZ8Hsx4V1GuDguRLGK1h3fe",
  "key20": "2ainmU7drdudpYF6KAUxGPaMi5MrWrysJpmdVbEL6DBSiSpuoW6QX55UFTFE3h9fEYst4UYHHd9i5om9UWxceDTj",
  "key21": "26tR4Kx21NttjwsS6fakbY3cV3CuMJZj5WrbRV9KAYP2rXB8x3yFS2E8zeNSeuVaUwH8JdZyrFS4v4D3FduoLj1e",
  "key22": "2ZpqsYgbu4xrqdVscNtNkYk3EyduLWd3V3FmckfT3wHc18s8gvt6rTknpc7nYuuqZ4ZB7gwCu3T3H2Cc3MhEam5g",
  "key23": "5LXR4jE5kY6ynp7BHVCPUJPYB4D65mdLLuMqfy7DNuvujhFNg48ajfeNVppTA2Sh2Tu11NBD5MpS4u3aDPrXpTfc",
  "key24": "5WA15zkeAwKxtSEGbZyLq7CM9pP5EWK6XHVAscRMUL2vXZgCk3zU6VZdxjYpnH91n57rbJ4PpcQFy8HBQWWhgJXx",
  "key25": "ir9W4Rk4tZxPd1SnaB6ayp65TUzaMuNU44fCCpTogA2XHqmENdTyK7wWYfUcJxZ4kV1uvx8ETVJojo3CpgDVfPj",
  "key26": "XnG2JRPcYZwoTzt6j9EgczW26YS8xE9Ct1RGgdKUBb5PeUmpGgRAXKMiiCKeUjEVJXQg4YnC12JydUa5kY2XTE6",
  "key27": "2mwdUTpjYDczZkL8m8qhyLu48vrf6ZG6yw8UHPRKs2Hu2u653yuNbQWHQ7R3rDJfUJzpXaXrTgG3pZFRYgqBxbiB",
  "key28": "2nLzE3cRmJAK8wHuNbCux9gf9rbngBpePpJXPnJcTRsgoGcYJHqUdydJQnULznJ71DFicLYUsaR9R2bDL7MZvabG",
  "key29": "Cs1kfdnLxhJfqZ9vvVkmrpmyirRcUFKjqCgCphGdzrXV4Hbhj4btPWtyRhVYpWk5ZXsMG74LYhMtmjULyY5jjVD",
  "key30": "uPCkpLCpzHD7xCjiGxdBKMxxtLftmdbbuo8WFRvQ44GbjgFwSW3fiTK2kMeKwCRAtuGmNvr4aXf5RKJiBS39Qix",
  "key31": "3eisvsVtcNjtUVKJLXmT4jfqitSf5YVqbpXczuWrsYMAfueFVSX5nbfCL5oDEziSvBGtoPCwxaELBwoj6Xd6HAMj",
  "key32": "5ziADd2b5nv43XDTLPanJAwXQ3rWwrmz9c4PmfCc1jx8g1sce1EWW81sk6bDAvK3QFuCDpiEmQqEgjctVP9MEtSv",
  "key33": "4VhsNNdEs9bLFxzvrv39XX8jELxJP4zFBi5XouSwyNTcxckSZGGfGW6H8nHipBGp48V5MQS4KhaytQGM1bMY5MyD",
  "key34": "RxZogPx6DPytNJDY8tEB5NLVmxDSpuAxEYf1yiy3niW5sWEgryjqEAinyKBpDFjz2BfaiibE3FTHaiu9dguo4Y4",
  "key35": "5KWHaeXf1CZ86CW7reqihD1q1oUFu5cUTd6CWtRFeqtmq6VjZd3doHS54wpU2h6mfjuMH35zgp4jP8yEAoqAxf5w",
  "key36": "3q6Lc2Gfa5WVhZKE6j47DT6dhfFScsX9oYbtGKLbv36jAsrbtzJaaRk345p2TkHQedRFJaTVEPU8MPrZjjFeppDs",
  "key37": "2tNobKWL1psob2vkgK5puN9wJAKepvFqv367R5MjmDyAysMpkm6J5A5qtnQGqeSvTPEuakKfuJ4jF47oanRQK5bF",
  "key38": "2xEc81qkzc5eRKnD1ZxEyPUNjL2qoQdqVjoAf8ajHqNcHYkb7f7JwD48Vz9cHtpV1HDCKLhPk3PohjetNysyo2b9",
  "key39": "3q4XDocCxUMF5EPQQq5ATEcGyUcibaNGnCHUwAiwpM2io65kCNhkPMPBbizKmUArQuqPtBpkuoGvxKBBCgtZ5NuN",
  "key40": "2q6526F1gpRSPMyLEdGU6vKhosVyc2y12gCEt4hpMtDH5RiaCVgHE4gWUhsZVy9c9fKQSYoCjmCpdcdtz9Bg8tj6",
  "key41": "TwUVHoh4BY1xDJuZaJDYgN6VFKu17pioUwqBMqhLHeGq5ykaA1zo5kFCHkptTAgbggCFbPtxiPZG1TiA6RvpvkJ",
  "key42": "P9PgiRbbo3jTSBu51vD9C2ZRxEZVBGWxC95Ak2vihGVH3Q6qU6HgfSa4pjX7A6FgNgacA9P2Wrvj3ZfjkHhoD2h",
  "key43": "2SAaTmMxXcwbRwKydfCLqmhVFyyCPBUxeNnphgLgVz6Sm8h4eZDWwo13AfqFtinrhfhrryHtbornc23THWjvriyg",
  "key44": "3eBZMHonHhR4DY7e7xXzbdVodgddcYhgxfcxJmmpxEcNJU45GTTQt7uXZ8yn9pnVjzVutFBD1Fc9TLCqBwd5TRg1",
  "key45": "22cDKZuindDkTmMSViH7i3n3rY8E8WjtVVYmHvGMw9baubJD2zRTGsATzE93Wa9ZsNKzp2EVmMdftfCxXKEPJHGx"
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
