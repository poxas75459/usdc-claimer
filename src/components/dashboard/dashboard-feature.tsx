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
    "3YALdobHShD4fc3V1YdpDeKkXW5ELoFJy68hRKENTmzMnaXTHtSEJocEWWmZeMQnhKQ7nAxphFhN6qabdAW88o9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aJVeEGUBSZQKCJazRbf2TyGWoH8d265fbmhQFoSPgLc7SxJfzhWQG8MgevhAxbNqr1rJ922RBeTDt69uSssVoRH",
  "key1": "4UsYamo1TBBwdkxNG3eJUHmWDaGP68bm66qDeKN3AG8bNzptcnGu1V3VzmAxFuFRQuzv28UGnytUzAJ1Ti9FQJ4c",
  "key2": "4odX1iiugMXviz31HDBqUEdnji4rFwHLCCCxuwGezPGoYeGfnhKiCsoncYWGnhAQM5Z8VPqmhjv1DCn2yKDRcpDY",
  "key3": "4pu3vStm1T2kDmhFByK44V2x5n1FhfVD2j48gBjxkENytQrSj3Qvaepiv4MGLCav5CLQPpb7MxRqPYucg3niwQXF",
  "key4": "5S3x4mfDgY8bpen9jDegdPyrrT4YkDuxa698FE9mDrHJkvDjQBKhFs39Q9zYBG81rrCxVTpJKYz6F8PABKXJoFZJ",
  "key5": "3iSRrxqFpNPKxUsbJE4BvH2SVLUaj7Zjtt6ZsZDc4QDmVcgJofyRmb3r4NtkU35WNj1D6fDkY8oAJ8zeW9DiryP9",
  "key6": "xCCCh4JasS6sKm6S69yzTr7kjFfejFycUuogWaouKmEsjTpD45CJHdtNUyz7dqkH1ps2yZdq1YMfD2RvEKfGDq7",
  "key7": "2nkhGdzCKx7ud5q421R4LQH3ZvLy56MrjWyu8aQgEbibMhKanT5JoBs2tM1s6ixBuGTRiftJkEASmESDRq5qsYF3",
  "key8": "5yVpsM7arnLwS6JMY3pQVnE9pUc7ELAsrrboR6yewhR6jLyQ5LXURp69zsEWX9TRd1AUHLgtyid771ADVH9MX1XB",
  "key9": "RA2Xgr8efH9aYDkStvcznUEMqqHkQXG3gwgZ47Wf5k5RoXL5wpEGGcoxbb1UrEuNAYuTMjCg5i5U8FPc4eLkiRt",
  "key10": "ChWVujwUXBmNy1LFD9bHzHDeto8xuW15gDvpKYS8hU9S7x7Te7jA7AxommN7TaoqBVJ3iCw2JyLzBghQ9V1Ur2e",
  "key11": "3sThvWD6BpbKYQJtJXLdgtA1726FCCfjzWoayVGLXuJnTwvVdos4vaaw3kZSA32Yc1s36Fn52p2mXzQoUSMzvadp",
  "key12": "4geETvHhWxweFn7WR96xWPKixq2bTYWyDWwoxp9uSL1pi4G2orLot5JYRnEGnxBHb77nkd3Jdaf8EX2Vpx66fviG",
  "key13": "MzM4j2G66H3A5vqMxC3H3rjtxZAJJksPFqZLQBqsrSRPL4SB9uzGTRqDSqt7CkrUyWDk6tQVHAd6a7mpGX7Hf5Z",
  "key14": "Cb4C79PbpqPVjCydxCrbMCtgERNVFnYxeTjmkriQ2L6huZGRW1y65vfukcXzwPcvSvQdyov52r4K7sHencjRsF1",
  "key15": "5aywyHHJCJP8P3RPm3tMCZF5g5LVz73vXgyVP3zA4TmWjdA7k6BK1oM2K34fxqNFV4E8dB3KEEYKy6t1wgTXMPEV",
  "key16": "42z6ipcKiCWrcScdbkSTo2wRhcwKRZ9bwNX7rWs15jSpbV4bpMw89Cb6pdTo91oZY3MQa8DGTW5Ut3ygH2TF6Upo",
  "key17": "28sCdgX75jgqt9Pkwr4RDpPGpDwA2D1ZzQJTw5AzgCvCpVPQUHjj9Zvs8Us7CRjxJp2aADu2rQWCpat1m6bVy9G9",
  "key18": "5WGLmcMaCVTKXh97RPGb9p9kTb1ExxmAW853i6mZpUmAjpMX2rz9LAHhGHaWwQQa8d1pcmYcobfQUhcPFGnxRyxp",
  "key19": "VQmqd4LEM7HXnor34J8oUCN373LLkmEtWJM74D7U1LFUY9xacbQH3q1D6ULojMScJzyJmEYTrc2F49ApwWtD2y6",
  "key20": "5FwirLUXpFT7h6fGsNEWPVs2X5LmUjg6h9T1GN6TXA69keZiyqvoAsJMnUumzGf367m3UGTyBppnfFznApvQgEW3",
  "key21": "3K6FcMX3Q1opSekrcGhLXHVpxfirvLw47t2noN7bewGoPRMc3MeCM41AKLQ4SjgTTbtk7CTBbYCVFZe8PFzxZRxc",
  "key22": "2Wx3tdScgB9ZXU2iZ88jFW18KnF64WPdkdPQHH8et6ZtoQaDCASVju7tZ3NwzcLWCpYRgkTW9DbMJ9sd7GLMsB9Z",
  "key23": "5bZZabuK4JxyCGUYa14BUpA8PiFcoWVwov9tHmHfDGXabmxCEHKuY3vMm1KCnQqeS1k7fK6MthGYrvB7eRxpSGDn",
  "key24": "3rZwyK4wNHv2zckicHoGkBp43t4xwWjbK8KfmEq5ZViDVoaxEmaYHofjXf7pkMzxHwkVsNLP8BfQyUngkhbzQsi2",
  "key25": "5bQQvbikcTQmMyYdTVR6tAMGmW26LrMknju9WVSkmJEJuydq2JYjBSVvmGAFNWdECD6gUtc6f86H4RCRBvNyC9Zi",
  "key26": "2dmnUuxFtKqtP5gCjzNTU8GrdxWUVja2c2JmiG5gQr9qgdskaLP9LrLsCCFJBpLpdnvUnzVkmrTNXjmX3RN35t9q"
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
