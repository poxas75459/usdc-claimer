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
    "DYZwDvJjVjCri28VefPxEUJjhYaqhVLthLtUrxsqAuLkEbQJYnBi9qtWbDjLSCJEpRfSGZ7zh7zvijwDC81dooS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LfvLLEJ3n3Zor8dzJfZMUm6mKwispMK2UD7vWSfB14rgRHjtDQqUQphFLQehyLeydFUHVawsHLaA1YqrZgDxDUN",
  "key1": "56AAV62V3YLdC2FTwsm8T2ZjJQaReuekpGy5uzo6ozbzyYc4jWuW7ruEiutgKcB4FhN9eJzoV5PUpneQuYgEScF2",
  "key2": "1NZwV7o7SMcz3QAwpcgY1PMvwhTfBkn3LHot99WHtwXi1pXB3WiUihKkiUeihPkpCJkUjJvx9VdocV8zE4GwoZ",
  "key3": "3wDg6JbZVDbPzKcRNyburDGSRuo5eyKVhkRCB1wf4hh8zicBA7GXYhCKNhB59pVh4tak9RNDQpAvzefB6KjraHgv",
  "key4": "2b6jwYTkz2U4TAxdHMWUmAv3eua7rzRJdbKDxySdKV42WHHvVHuLzUDfeSfWEy6daTmTuLF9mpwUcLJhNk5uizjB",
  "key5": "CVmMSFGPvSmniEWca3PLcGvywq1yUiQBdf8YqmVpvTZEN8SWhrN6i8k99W6FX1wBHAfHqE49Cdxzq6SVHah6fxg",
  "key6": "bHotcUofeyGUbSP8TMHULSkhRrSBbQ4Yoi1wiBPzn8S1pDz9kvqSPMUuuiiFMutyiEmgFCCxu55TxCCGkiSueBj",
  "key7": "2Yfi2vu2HGENi24tLGuwKdEeAjyVCLLkwy2K4TRPFjF67pESbpy5H6gtcFVLrvzzKi3fDdwj6zHQw1FRdBWZAmPq",
  "key8": "5ri4u12Nz5iJ2LcuG5xiLiYBEbzCmG7L78MTgfJXADZ6xVWz2i6PbkqQqzDL5jWvuNEn5rZmsBPSV7S5qsv5DF2z",
  "key9": "gSEkfFG2dqPVEJM8s4i1n3Wv9a6AoRZTUnyMMYjSvg81bvKPB48DcuRWdref6ufV4E7VvSxSv7K3fTLQk6ULs6S",
  "key10": "4Nyz3hXbQBJQNpjKCkwsobxz4CPtSnrH8iZdvoEsJYpw4XDbAtAvVXMgdxn88VvG3rxhixsB6XSL11KHR2ZGXoHg",
  "key11": "2efptKkVQ1Qbk67XvCUnSNdUYbm17zKmQPCBewoidBTWCBvHjTpDuBuMJEEGsCZRzHWLc1SkyizPaNT1WwpAUofv",
  "key12": "3KikWkxZkU9aUf7r8nhMwLDpJ8k874696M1T7zUwVAuh8nKRi9r2qJR3e9LMpDGX3k9M8znV8a5moPBQCzM5MKZD",
  "key13": "2FZhhjp8jLyw4qYRby9S3mU43GvWP11nTfiTKUoQttmnP55L518nD9CneWjWS91G3kqcQmH2UA5boNvD8EyGmCtf",
  "key14": "2DYWbQmg3aFsSe4bvv9NyypiHrPpyWMyfjPCu51B7vBttwt52Uvjx5epfBU9f66ZzPU7hjMM3CP931XdJ85p63mt",
  "key15": "vp3zutrY1jj5eDmVGbB7HYJYfsv55fY6fvjset2fz8HxtM2eVUiQvpTewuYtmKKAGUTbtX4DDBCbSoHEEqcx65G",
  "key16": "3RkTMdMv1Bz9De6FfdFjJ868ew2tLPiQcTmKGCH1HwEsxDnUE4Heqn1x4wK7MFe97KmBeEmFfmiQ5DYBCdjWP2ay",
  "key17": "2KPS6HBVChgh5zS9dZ6bq4wehgo34eWo6ZMGrA8XJtkAWwbDBfiGzZmBf1WZ1cjRWHxe9KU9kBtNEcnQAHf1r4Gg",
  "key18": "4mXesHobzdf1emnirnpAtgP2eUw3ESDvrMwJZo9oAzMMnoEp8ZvfnLTmjvn1fXGGWkWMYeTtwVvUDf6oJEsiTbM7",
  "key19": "2p9AuPkYe7GExYncGxY2MhDDMefR5AQ4kkTw8tsQwwQwWvmtCJkHNVKYdzUDCFcTpcj9FWgy9ZxLPLYvZ6Hf7m9r",
  "key20": "5S3sABXcQcZ4eqdKN1NdxhY1SbWtihNMo8oL7yHbzjv9WkaE2SYJefNV6DHtoGJv7LyXhqoCJPL3xWFL4siyyKpj",
  "key21": "3QYcT8ZF7DpgV8CuWLbeyNGomW2ZJjk33qxrzh8hMCPMJyx8dMp6BQs9cvFBzvirYS1pQvY6T53AJ4qQZFnxQQeJ",
  "key22": "4PBFAH2X6nbtfQjfL45M1XDQyYJiSufpECoK4yeFmCL5mjj1taFT4HVK1FZhvhYbAJ7TffVYAyobBokiqqsNoL7Q",
  "key23": "9KG3dCtvdzfYNCe3ueQjAdrmpsBdQMYBw16XpCUvsTJphbMDwJBJepWuQavpqRjnN2yykWD8JqVdHWpgythNpqs",
  "key24": "2FYG1tUxmPCbtHn5AKKKEG75jJjaCzVbwEPoiNJ2JSBVbnfYRbLnePAHCZwKcKE5e8FqmXf1cSdy8AUvNKLXT5DS",
  "key25": "HSDuavYe6gg74XUFYDcBK5EXE2x3csPKptsPENq7zuE57hXaumXTA7RpVzzaYsztkij2YjrT2Yv4tQ5rZkR9RDd",
  "key26": "2psTdc35GyuzTLvcsMyKUn5o6daHQWGcMXJJSEDpe3poiNrtpvdCuYNfcguCKZk5c39WKnyTWZ46QQR5Mc6tyMoZ"
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
