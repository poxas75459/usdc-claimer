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
    "3zANJ7PYRMiqHNuDUwqweYHsPwY8F7uuEHi6Uxx8m7nHrKShkSGJ8KiKzoXXGaUX9jUWum9GVkZ91PoSDTnJHK3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TBagasXFrQF6M5TiSJ1ZRSN34AqkwXCfastvnRcK9qRyxamT9S4fsRNh7LQrCT8gtLJCrkrWBFeFrtsHrgmeaW5",
  "key1": "5R7kFi6J7DGz8wSUatPR26WHwDj76Ris6rAiningLFe4nLiLehmaHhYX6bVDABCjCRnBXw1e6hd5XdZh5vnuAj6Y",
  "key2": "5wRVMFHGSQr1TNcaWHZxA2Vd1mJysVz4xAZ4jogGsqnwZahML7BXnSAddfunzcxJFdu3sj3RmJamzi6A8ofxHgsV",
  "key3": "qXjCwuBXCbdLaRtGhQBVevCN6kt4t7dtWv5aobCsmcWGTqpekceudzEZRy2rqbxNz2wbgBZ2VkoFhqvx8xSpUaR",
  "key4": "vMr3wuWweGBiRTjE6vVEzRF7v44qSHqHDqmRWu8EpA549m53J2puKWBbwCDREGAABLC2GBd8upqcie5rSThdiZB",
  "key5": "3o3hEN56ur2U4eeUtW24oWTuMZFsRJJ6ydgjvBVd7Y5F1zq3ToX6dZnrRP6JmucVtAPCK12VqZS2NeVuJw5GMJKk",
  "key6": "TU1W7LxiQCyQorPzfPXeqrDHVvKxoCPgv5LjBBVx5bFsYYoNXsPVm5MB8xcf8US12h1WtgV6JBNGZcmYQxn9Daj",
  "key7": "3YkEcAMhUD38962mZH1b4MjA8MHaDPyxqpu2oGu8XMRGx1kGB5UUWxW7ffuwz5RevWcF9MwuVoQ5qzdmuTR7KRfk",
  "key8": "5qxos13xdFUM78FU1NuZxpXNbZQKmWWy3NjoxBBeLDfBCcDSzeYNyR7XrJ4Vs4MqVixUHRWWMpebLjzQidfU8rDo",
  "key9": "3P1vSqvgLqYLFkmWRa5yUvCrisRHLTEA9MtdC4RzSnFNfW3Wjqypc8FdREBysm9tuaqeaJCBPAvUKRHW4bk8duJx",
  "key10": "YqXRk4LQhEnykmjkbUWQtqzu2TcHZUVJuU4buaV8pZgrCbs9dHoKK3hu1pHKCXPmonHEQcHp46tNWjCdS2Pdavg",
  "key11": "58Fy12LPZqf6ucYaCuHpmDMZNdD9wZP7bjxjWWCXZiwW9kj549Q2FvCY1pzPcGwzTsx8gCc96aRsLnkJsyJb7B9m",
  "key12": "4vYSepM71d7Ar9LKZYoGQ2erpiDQLugJwNrXaTcJsHtsgYTQbVGfoLxjTDmNa5djytuT7McA5QMsSnhmZWebdayL",
  "key13": "ctGrJvWxKPCYpEWZT1keikkygZWuPFdpYnVESvLfCdJQkM5prYd2fsAVS4y66fxypnKLnhcTUpjEDth1McyfCDh",
  "key14": "3jHNQBbYELKfxFHxroUvzzXD9dxgzWGEo2GdiqWLkS1BdRbfYMeR7xAgWfe1TZUnY3HwCBda6qGqEc14YRptdww6",
  "key15": "2Rbfyr6UFgUiJYfN5YAmCseNj6BrVv5wLGgDJXuv3WQg2iHMrBZcHD7VXZCeEk6dm3LeYYH39JNZaznsYzs2M493",
  "key16": "5hm1M1VGWTSUbhiTSox7j1Yf91mosFrZ62YoGBYDdHM3KUFbSYJoSSFuMDLp1r9u2feJ8zNFMFwP3F33Sv2vKeED",
  "key17": "bwfLKhsqquta9Bi6oC21QveP6wqXpaCukC4rXm3c1TPbFq9asApL8e1gyRJ83XiuPKFc4xdhhSFcEJwBUdTAFyf",
  "key18": "iaN1VG9o32G1eyCK7Hs8tbbJ4ygvpVPe5kytXso2jkpmGYFnCfS2Y8N5MptM4ZiHLLBEMkYjLbuS8Dk2A1dKQys",
  "key19": "3CfBz3dZekdxD5c3CTQqQjy5NJyUP5uAn4Be5NAreFp7drwEQGHfur4r3MBKegP86kNJXzz1t8CTRmu25LrLeW3p",
  "key20": "2PMfw77rAX8QUiFNxmWhtBbW759YYMdU5XUBiKyZ3MMrq1jZucGNruLvr3LbLbUvuAa7HKcSgFgaRiJUkahFfRXa",
  "key21": "3JjnPNMvTDLfpLzmU7ZY4bgSRLCsKuuHvGF9c9zipTvyqofdXKjmVZkS7LpH96WkVjJd5wXKTnFJBaUU3rjw61hw",
  "key22": "35Xktm4eseVAJ2KSYuT4M7LqbY8ipG6bm9oaTyrKxySV343kkUhctHJzEZ8GWyfW8yZFN1TRfPeW3V772N1Z9WCx",
  "key23": "sZZ1xW5s31YwCRLfD9W1tTva1v6eTgvm58fVSotm3aw6c92ZQSgLa4NqPuYfcBxSWWdr431Lj1DjffWLFRjoQAZ",
  "key24": "teX9y4WGDJkEVDAUpnX3zUwiHWzjXZzr9wcHgJd7UvdT8Ew37pmuSen1Nepd7UpiaK6vkZJcYTeS3SuCeNJRSP1",
  "key25": "5MFcoZUoErV5FG278xcVzJYqTABi2F23yL1EBXgLmRzyyNx2L7bfBG8vHoxmbWeitWS9E5YrLrTD3ETdUez98tic",
  "key26": "2BfnktTEeQpotaTtNMTvGBNy8sNKKoeQc98thmPkYeW8vKwX2DdP7jqXWdS8AUbU9tiR64gCF6aPgBPokm7iiEpn",
  "key27": "5VwwunaXCdShh9fUUaL6sN8sfCrQ7BhUex2RfFG3d7MU7v2rP4wT2LaFFLt7xLt3ikxWdxiTdTfpMaEd5wdfUTK4",
  "key28": "3zf3jjd7ecJAKjAqNTMdtWQ9je7w6a4xEZqZidBT4CaKy2UFoA2PdcJs3BFSawK99sFrut6N5LkpHAa7UyWrSgG",
  "key29": "3zSAUq9EvXDpG1hNqxbyNAQ1BdCMxm5yBEZDQcy28FvCEXcaSeZjXHD11BmB7UVhzXV4QQxiys8sBrmVxSfPz1N1",
  "key30": "YYjcMRnmELt1ANymD9xALn34ekGPGLDszbgn7qbucu2CQLyvZgaDSUzgwWPJYWgwkRDVusftGLA8s6Fw8bnLorT",
  "key31": "xLJnYfCKzQ28SS1MJciUNnLV36womjoxe8NPEyS7PM8jb2LdHJaAj9A2MHF6J2LTfVNiDRm8RCwr8FJjGCgppX6",
  "key32": "e3cxD9xw51yZWAPXGu4x8zEtmNTtjDSc6Gu6dxNS7k12LGWJrYL4M5o7WV7Y5szP75sn7P4a9hhgCp9N2BAE5Jt",
  "key33": "46WwnCbRvWbZsXpVXWmmA4cZvaKsGBJ34wLKuuxjm2e7bL2F1guG736WctQYj941pBJoVoiX16T5zsFVpUZrKws6",
  "key34": "2vyPoCYqMjkKKddNBfzM2vvYn3BnoDDuVvZ2nkdkpWzgYvQAoRfVvm3Cj9RNQr66ZdJbrwtnaUWiPmVXTTbiEpFo",
  "key35": "2Q8BUyN6CqHVik9uNriEeWXGsbYiXXtbZXjNPerJCahCrFBR4krjQF7cQVvmuV6ujDCMU9Q1YAq1sXigry5tp9Ck",
  "key36": "5QSpzx7BXju68SQXjfMEoFDjCzAmUs9wmfovu79cNPcxsrmXMjyVBRq2JBeYAYv2xUDLm9THQZNjgiq9PBhNAx48",
  "key37": "ubf54D7ww6Vn8PkkDHgbpntLLQewR22PQ4V3He9TeH8UEjqMwSjwNEiv4DAbTGePcgEkXETBm6PYYkjryKqdtQD",
  "key38": "4Wz2wZQQq4VeTvoGX7fXN2spyY1koJF6FVqWR3REoYz5vEmwQkCJZB9ZiLLHNugv2ewhrxaDtD54wBWdzQFeqneL"
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
