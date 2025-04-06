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
    "5x3cH131LYq95FLdp3Z3N9XG4Wq637Av2nRRTg4jzetek53wKDG2nrcZmyToKwn1VToZJcgSDEGmMaPYZkeEMS4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ub7r1XL6SRFDDmnH2eXLsHuGLheMDEermdcUXznX3eBKL1i6GZ92w6knU2JhUhGPR5u71QFVjfHDU1wkmh4CbEZ",
  "key1": "3sPB7nxtbMKomxynPyAVkgdCJcc6eVnF9kTzw5s1VkjhafTe1QNW1a3k2gk617SxJbveDXYTKryM2ias5DDeuj3H",
  "key2": "2QiEnbf49szzfbxPEnNad5bcsUbY6t7rXEGv6fBVU1U1AAy1tHv3VxZvAVqhMCSAeSCHZTG8ZxfyAzbjS1CSNrfB",
  "key3": "32xpLk1efZLu7AaoeNxnvEhiPCHwgVRd7sXjcgU9GFz5C9rdzM8g2Lfz3AZS6tp9bZfipfCKKPLobUi22qP27x1z",
  "key4": "3KJr3gpnGcPECffWeHTn3f8nU6CEvHR2gdotTyf8vV8Gji56D8EpAdKFF5djqztd8PUvfAd2AsMu4uAapTm8fR3Q",
  "key5": "P42Ve2ft5k6TnJb89XXcKtuL6RUpb1wKFSgzdpCHdLy9u7UenpdsaLD6VGPGZwcYunNM8dgCLHEE1gKDX1jbBKL",
  "key6": "28UNFgQnJjtbQ7M8y7tdTcHKVv5WUuMoaQUAgecnSFcAb6ontRQzdUvHu6Tm2txxyTMJKbAx31wN7zoDprGjtvaS",
  "key7": "33Vc6zsBpCZgSk2uWPobkQeMkaat24YELUgyZTAiQmDSn9yo2S7zvziTmaXBCQmwQfq4NgZu4M3ufsr1ZcguKkwB",
  "key8": "3kBtSorfGYSTW6CyWDv378UhKqG9wirdwtJu2psgiAhno341jvxWBiCacD76mhzbGbyV8UiF3T5v3D6CtxXxKuE4",
  "key9": "2Pbv2PsG6UuGJGZSPF8i8mupNxUtxgpuCZEztAGpKFNqNLEM16TBEyskyELCU131oD2cSEYUTfeR7dy9Qr7DFgYy",
  "key10": "tZ6pqwaPqWA3hBAzDgD1EV12t2PNwtaaMhUpxcC1u2i1ZS8ArgLpA2AdXLnx3XJpCC1hDP1ZnViMw15x2HQEsYZ",
  "key11": "2gnKJ8jkNDQzmPDLGoXUSsZrakyob6XUEit5QPcpa3y64q4K87Xm3im3Y1q8BXCwTjPtN7az5YBg9rF3ybehpHjP",
  "key12": "2zoniYcrLfmkn7ziEi4sxPUJ6pdG4EG7kjpfb9R4Yezd2ALSLSmSSa2YXqYxSLDg4D8b6ESKxeb2z6eHif1MyXte",
  "key13": "3t2Hazb5UaSAVDukyNZKypPiCZ8eBK41rZos6NmiV9Tg7Sd2m87Z1xLsj55nhJyDH8DS1wt6NLWosBQHY6he9c1d",
  "key14": "678TkMNkSSMKLye93D6VaSFZQpyiVrmtduJRAo2mRKAeVdXogH8xYvtL92wYMWkPjKETZhQ6bwhHYSHYaryvnLJZ",
  "key15": "5nFk5zzMswvmjrRcLaedix54PWoJ5T9qzV5QMQGvDLU8TT1reRo5GUhiVv8YdWd8iq5NLZb7ug4L4jrCzCurJZXe",
  "key16": "5GRbTpE6YyCKeQdkM6EFkZGSk6j5qypDE1YaPRWpEPUwP9Jy7476PJJDpNfojv6yLPXzYUc4baYzRjmWt8VtnRCH",
  "key17": "5ju7HSneRsm9rYeHxxCRULVLvP7A3hZySnQ6qA5YBGaCoEqNcwiW62WAgwNv1pzATREccZVnUwSoGnErCp9HLuox",
  "key18": "4bpVcPpCkVefhHcLhUy171UAc23AMba1U1HUdSSxaduM7GUjWMp7dC5kmTiraBJ8MHBGg2oLpEq4APZSBFJQjPYV",
  "key19": "28taRJDh9GmhQn86e3V2siMbNFD9FoanbDqAS4cPR5encoqQ54UbWb5NXKMNpCszq7M1itb4Ux3QGX8uwTjZykA6",
  "key20": "Ug2d66vViF8Hfds8oQacrGx65WmNsvgMHbtFeBSM9mGZpXCJChRF1ocNFFZwfg28RWEmr1JY74Lu8xw4UKEq8Yn",
  "key21": "5VYjRBBpDw3h1qUgBPkqU5XtDeSu14eDUUg1xbuLrBiudzEK5ZXsjEZHrwCN8p8a35fNnyggGMj3kMmijdxWhRfN",
  "key22": "66BtLEPQgzNUcHLAfGD9RDf4YJieUNq3uepfQvBhymUn32XJmHDPC9d815DUFQehdQfvPYaLnKV7LexeKkK3c8nd",
  "key23": "58PNf5b4dH6fm2GX7dQsUMja95uXBeSG2ykHPZqeqmcEEJHRNvvnQ7DrBgRcnLky2Xn9FDUmnBmcLZPPwiBEErHp",
  "key24": "38BH4Bb6vWqGovxgki9WPATqRXnLMTjAD27ZvAqcTm5yJHxVtruUdkvxyBitXwxqb79DLzZZsJjzJnNvAsNhLmCa",
  "key25": "3CgnAi8renH4Jx9wuq2J9kgUP1tUXQ61Dz4qQScCSrLrNgfr6VrvShKJhfCFC4eCtXFeCbTsgT9V6FtmyuGYhkVZ",
  "key26": "524XSVcSvc6qqnwBLQBmnYaa6ghhXkFkoJHPqDtgtKou375Zd8pTUzcsVRKtoYuRboRuyQgmySMjDzT471UWenpR",
  "key27": "3JzZnWfR5TDQPRoAfgTnbwb2XteS1ZHAfXL3hL98cQ8gn4dhKVXRtRnvJ6hBVcHCJY2Ni9doKbQZbUC8QYKo73hr",
  "key28": "4g1NaC5dtfumZc4rU5hTYmAqRxdeA9H2sENSDvMZeJ7rd7MpayBu39GoaZrPzELvSM2FrsdruLSCa5xRhHVY2hwS"
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
