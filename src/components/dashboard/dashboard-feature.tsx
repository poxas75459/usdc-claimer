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
    "613a6GcJjmbAsL6guvS9irpSSoTm3CBfRkmpKHVZgHM82RNxCb81dTxy3emo12ZJ6GLcrW1nz58NaVS1ZvEEmTyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GifGojPRjszN18V83bPUd17ZC161dd51JTVZ2nWSZS35pUJiUaUtpCEFaAsZiJyEpJn4GdDtBVjXf7kiKxteCmn",
  "key1": "4kGKizBuUCJi6RsfMPiunsBNioTmH9gjkeAY2rwucUE3VBmBW4YT5RPutinoWv4PyGCKs22jankKSWKsw9bNkmg4",
  "key2": "5FFEutoBYRP6eqfB7G3eW8DGgF4sHQPWf9B1Z3miNVu7EYSMB8VX27KSVcX2g8SaoMCUS4ErRkhGfywpZRi9Mnox",
  "key3": "5vvrBDrpP2QprUJRKcPqHdEXZ8dN9s42q9NJNw1nWwuGLrNZEABPSiVhE7NZBzu6mnxPyfmwChdj8udk9vJwGsmW",
  "key4": "tPsdNxL7K1SZhPc9JPBc9Vg6ynq133YVJad4XWDJYzWNSrx1pr4YrS6oNVXiXY2B5akEHoseDEMcVSGZXVxcNBt",
  "key5": "Yuvmy3M5KKHdyVBaBQP1ubFuVrU4Tb9azwx35DfFxQvxnqduof3qTppojHq8yzncNqLLtPxNuFHzEzyt9goaBgd",
  "key6": "5yCuAoFFbEkv4Hc471KLeXTbzRqUESWSU9siMUbbcm3v9c7hWCLj6esxbLqVycos7iZci63yFC1X9ABj4dc2wAPe",
  "key7": "3a65fReNcfvVL8duLGRhS9rVtHzf4UjvQ69xaNFASLZZsC1cxEZsnkPb6mskaMUKDG1fqaceFd7tXokBSGbmMKGP",
  "key8": "5AY9LMDKPi977zPPbrTDa3Xn45V5sY2WdcuwLSvsQX3CohALW9h8sfzkzJkrt4jrni35JdjPFgBN8tmBkqmMWoF4",
  "key9": "4wNNXWpuE9fQjgKFx1d5zjKbJMAoMuAghwHGymQ61Ln3x6omy1bvSRce64fTmt5TNktGdBdaYnAZaUybFfhCS4uN",
  "key10": "UXxZcg4iUU8CrQoYckPzFezsTXsQmkoAFTxynbfdMEZe4pdiBMEG96Zb2UJ676a7jJbooQ4DGZX7oVv3hFE8GTG",
  "key11": "4aLQ3GJv6JCvmDLSfxXeDrkrJoL8ZjrrmZrXdg6m5rKbtk4eyPcrQ1eAUdTwWvYhJdwVrHyiYLAhYQ17bXJDz5V1",
  "key12": "4whY3TDPMtKCWpiYA4VdF4VadCDU7FuFLipBs5dh5bMYVznjWfdG8GYd9GkGxQLKPLmgtMVEdyxWy7EgTAciew75",
  "key13": "4QMW81UVu7afUF91qzRt5SNPQ4vqLbdeQKR9vaCiBqxZEcAGcsGbqGLYTE7TKY1vuQoxuK1VUq4W7LiQ9jBGg5Tp",
  "key14": "5YZRFyNhMArvSgHKvkctKNKzCb4MPiZUHnyH9frQ2EP8AGpXX26DHfyt49h8EdATaGkStjbBMBrjvqrBcVjWVUbV",
  "key15": "2uTE1ADcSWSoSTmTjxfA6Qhxnnj4wXe36q1dLKCtkJLLe6eTZv9omnKxBMEDLnfWCjvsSRi2E7JqJerRvWKW5sPr",
  "key16": "yY7NcGRdSsCZKwt7kXcbS9EBfpTB8EqG9svZRAojQDYz38bsRUrPiCBi6gdbsrWT7scCccXcnP8Effs1VhD2Hr1",
  "key17": "2EsSUG7jbfSy26rzJSgK3u9fNCYk36cn9xwGHLfs1xHmjkwg1YDmumUHHi734hBE14Q3wLtUtJBt9FuEmmYttDdH",
  "key18": "4Hk31LTKa8JeabTLAcwDhPseNiYbDJLugdyQN8VkjRfgJNKk7drfSxkZ4vdm4qwBDvjgthBRV9txdTmUB4B9LFb5",
  "key19": "3oKhXhi7bCeQp1jQ5UTi3dMXurr8hhk1spbDgXaFUXtnvGheowUgK6H3WJ1VErP5QSyMG59jZ83PArek8VELrr6B",
  "key20": "NJqihHP8WoyPjABhWSEDjfV64tpsXT9YaHMz2AR2AmBZAD5jNPaQY6BDC5KuPaL6M9YKDzuNPmRSfZdEEBPapDH",
  "key21": "2FrtPRAsRTcoSfMr8TBHExphesY7TzGBDdHkMrL2kkFRsosBPnJM1Bj4rWAANgcPijDHJy5cm8jT3BPddctuJJQv",
  "key22": "ENhu8asj7jr9J95gabrSSv3kEiwf5sv85RU86aeCC5DQAaAxUXwBP62YbYbGSuChfyrzsSQh4DWicuanHFSX8ui",
  "key23": "sQkbEtdMYfG4v4bk2y5rHbUxbHv5bnZ9MHXMbc6pzvXwQfrFc6D9xQwurxzoU1QKgVan779GjW1jmRaYUFicov1",
  "key24": "1cahrZhFTQQpJbh2eAgjqa9FSKr5JV7ifv4dQmdQUDpw4RqY6W4nnnC5h7Qo35ts8s2ReRXEqXWEGvJjN4jDRkp",
  "key25": "4EiRHFe29pNUbkiXXsHe3HW9vdrFtMremXJbxe5fM6sgVFbPfjTvcGyb6dy7b6eJUw6Vd39GzSTF5UTU9DfZYhtW",
  "key26": "Zkew1VQEdVatjNXLvr47QAE9p8fN9wsdNna1isHtxZpbg6oXruSQ8H9wnXVKYkVbj16w3SuapiM5nJc5JRnyzBA",
  "key27": "2SciqDv2Psqh2cxhHTXMbyFtiNNzhQYp75AavGQgPwfH7CXLGeQtthxH1fXAB1VF4NRbFg9e8mP7Ps8aoFjooJeE",
  "key28": "4DMMm2S4WREv1Qxrg8BiVMhhk2G5iLqjyoCmhKBqz6jyYUiSiqB7kXnSmVd5wEtKTqBXMWQEedCUJxxWx74sG8PV",
  "key29": "5jX14tf5Jd13hjvuTFtDvdVem5ALxtRXB5uweUpfrYC1SwuNw1p14ou1cCEWVit1LvhxUmzK9x4ACn9vJ7xzZisc",
  "key30": "6kB1bJcyr5R6DLLEuPBxVk36T6RiLSvTuVDgCeZtBVNzRBSoHmL4xGe6CipeuakYrPyn9g5YdFTzmfLn9n39smk"
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
