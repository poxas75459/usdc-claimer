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
    "5W6dCC35PzneRgJfnFcF1L7Gmjkeo4eafWaFay4FB4qkpJbkSG7bKicY8Wu2S4dEaPY1Tptjn94iipomNsgSD6LC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qVkhG7GrC1mF6RyzkWhE8Wfu1USkvYXzFq28HLW6LyUp5a45vfjeB7gbt52Ws9vu7m9YrpAiyHQdLyFKkMs9JqN",
  "key1": "3cTM2drvx9NiLzgc84vs5Cboh2JXRgHf3T5nZUiSPSMxqyACsTemgx6gLkc6PnX8MW8GtpwU6YYLksaNKiSjJJwg",
  "key2": "5i8zaZCmcNpXAqXWwfnBta68NhC6po7HTFmdiGbYFUAANLsaqbRFk3b3wuFUYfXaHfFfwSfFngPv7ZSBGVdjiAUS",
  "key3": "41Per5WDLRPutxbEyWFhnWvjYgkrYDi1tekTQ1cRakf4oqRf8m7vZANAzZe4AAxnzQr7vLSDndQepYH6JgRhFDAF",
  "key4": "AAMTfvcwTfa7Dz3d212KwpBmp2K6HK56Sddpo94n1pyWRE8CGnyeAhDqhighetT4Y6Y3oD2zVKz2PyXk4FvN6P5",
  "key5": "46hKB44xssCihdVhq2emwD3w5cdYZ84GJpb6CDYspwb12jaCSW8VcPbAaP7L3GoBhH7rVdpP338kD1Dk9PxTggJJ",
  "key6": "3D8Wds7nAdeB3jE2fW6LptkFvxTCPmYaPeohfsKq4maBhAXhm2YfVfDu1EWTJ3y1W7dE9fewNBRbryiBdEhLsphF",
  "key7": "2EFMwam9MAo8j1WQN4cjiADgZKC4N4Tvr6PcUnYGdjMqPddiZewvMypjfuPz6S3myThjb46ZXxoxRjkg12dBYvUr",
  "key8": "3eXAtu9dAH8LyuS5k9C29XSsrML563iZaH6h31EDaAsoNQ4Ji5UbBNuZLYKqD4yrLacGbvCeenC2rrYTqccGQRYi",
  "key9": "4LsFc8WDuqc4ngxr94vgSCCuvyo9nVTCnFyiHTGoBwzLgsCX4ZEFYogMG5pTveZjoFZJBPewhEStCNXLsgtTsaTD",
  "key10": "7nvoAa8kdPqcC1imyofeLAzvvzkRmAvD1QtTWDFfSVGSUhcBK4jcYfFTXqViYKb47azM6yVhck4BL3FvFv62wRj",
  "key11": "5SpuipMGkcei6FRcH6PoL9qNMNgDpDVfcpTwqPvDLaNWXiEiRWHT3X7d4MG4uEYCvTZg5aXxgjGX6mAYbq36kex5",
  "key12": "3LWJV2iqZoT4QEU7ENdgJGpoVq3KcDitJUyRWSsCAXZES6k6uCudtAnaFS8DnzF1i1SbCmjiGNvDakLw9aBEGfsR",
  "key13": "5hWTgR5odxft5cwarcFUysvKaMDzdm2jvZMmcTFxb7zV1HjXaRxkJou85Mvxb1FDa4RtMHdeSLKJ6kQkKoKrZhbM",
  "key14": "2YVxqZidHNN8n5UuWLYnwsnjnQeMXQQj5hQRR8eYsQutG4A376PL8BzPhjJWoa1ev7XT1rThPyc4DPGv4jveskP9",
  "key15": "7m53cufUyQCUXWt4SvVkBcLn7H2nM1eMag5xHXAajWj7ffvG4J2RqyWLy8VoXM8JRW4QQtjcxtYWGYrundyL6Mu",
  "key16": "yAfZouSNiHHKKqfEnJe9tSBhvkrKZmNnSonwVsqxB5h3H7ecTjpDz9nS9L6vcwfFkrq2wgWi75tBDxazLRVTiDq",
  "key17": "5ec5LdjQA2hHXbvDUhNhtNeiDFZXjdopZPvuGJCtUWQ7P6NbftqWP12cGYzGzjrMQX2oG76J9gUCxUeWGn5zDgtY",
  "key18": "2odQ1MZsasfcFzPdMwsQepHRfsAZNtPMB6wxTMa2kEV8APkdJyXMwvSwq3tLt9aVVGVmp7f3FZRHVU1p2B4Rdg1Y",
  "key19": "3NaGVLbCvj7LKtvLGGqGVhAHD1FmWXDoedEsYXzTautL9tY6s1n2X3d248e3yQYXQSjXcS8BNaovhWXDabN3VbRw",
  "key20": "36dF8Z7ytQ5aiTKNimw3MZBxDyBxd2FK4PUT5U8jkeR8fanV51voHCRL3C4dC8peF1E3Vw8F9A5ufyttSbmW4CAf",
  "key21": "2BuYRaZyWSLoaSLzcioVSHiEsEyiaZodQEaaFWhrSHzwkcAqumvP7GbXW9j2eFwUMR6uk87strh3gR1dgy1jCabi",
  "key22": "21giCVkjRhrMueFjSkR5hzKbPRiA2wYJ3W1kniD2a3oajH35xZNbZbWkGf57z5qgrfkhncCtGXQ7aVPLkb5HSt1e",
  "key23": "2V7TkPWSyQ1evPU4LtkTVvnK4Sb6YUtUqGwykT8poZurNy58wzQrXJnBP8hi2GQeABVemBr38TVGup4uTdDjqAch",
  "key24": "44GKgL1GNBm5TUBvbbuRjr6X5M1wE4xnTQpQfQdbKAsHCsSgvZByePcySoc3e2XsLcwDvR3oy9Dz1QL6FUePNMbm",
  "key25": "3LdFB4K1Rgya9iLXzzgq9QhdMxRUpYhXWdo491nytDrsRFTAu2zu8qytV2J2WxchUpAYJG181Zx1fjLybPVGXk6G",
  "key26": "3KaaQ3uw5KJy3rUodNjEMYjsVb8Eo7LvqEpfTNqBX4w2uHe2tKTPrhbG237k8Ej6nKm616C6JaGToHcUcCbxNyxV",
  "key27": "4VkvpLEiTrpoR8shFZtnPE5YcyiMRSnmk4Ux5qKMbjjsgAAR2LAP561RG2oyFT3tvdGL8Fcbc8pL9RaTx1kKq46M",
  "key28": "3W11j7ewpZbp8Fr9J1N4oNN1UbWRjtj5kP6GTfSjqNuspFf93obV3PJU7Z4A5qbxose4r4QFf4o3zEUPcEUiuYyu"
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
