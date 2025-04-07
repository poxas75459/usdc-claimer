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
    "5peFocX1B2sRrs4WAU7oWmi2FHpypq19qw5GbK3YBMyoQzJA9pt835xziThPtFMr2vysuiDSHunYFWsdjSJDb93L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZErKocz5mMqZGe4BnkjRQpEmhED5bGXN9zWShjtN4vAoHgNoXNQfgKFyR6KB3yG2KLhj2RNNjkKP78ALDf75MyD",
  "key1": "4zUMPutnK2dHJB3ZQMGQC5dv8ajfZFqoWVYDc6YvwX3HrYkyw19263WsAi22hvBkTjUPnyrQFFezKEszQr6VUfoV",
  "key2": "9FJZZmyiARJZ26Byf35Qd6rnbtfyM3buMzdEANKTY26mfJkrJsYewSURfRvDVtj96zZrrsEcYGiG5vnhhwov3KR",
  "key3": "5jDqpX8wPYSetHE79kQpVanG7WpfhSVVkPMWe4Mk2Qn1hgJrKZbjrU38zKstJdF2mv7qFjSNNHmcADy6aCwBsu88",
  "key4": "5MR3Jt9JnXW84wgoJ6SgAK7eqW5tJYVfMu7sS3L6xQQy8KDW7MN5f9zMhBdgWCsp8XGXBSEenUh22YsJPJjHFSnW",
  "key5": "CVd6f7jNbnRvjiKu2Rsgc6KLs7ixyvhs4T3DyKtcSEwKG8NJKdL8T56eaYvypDjUj1VNMtWakJMzG3UT5VxwEPG",
  "key6": "4nmkhqfRrjvBiXL4KnpafJcZeLiqQuhmxBPjYMu2FK8x83sRJ2bFDMs4fkbT1SggvZyvQcFjCekKKgL62aR2pnsT",
  "key7": "4m2WETcsbSpU2nAwV16FNVFCQUc6DjLivi85aXyrtjhh1aNA7CBBH8rg6d4F9FB1YTnN7m41ejVNjXtKNY3iAjDL",
  "key8": "2NG1hzHCH2nxDnCLRwJTrWWmk5zNeGhVMDUYdGea1TAnZvRgsdvTAAJvx3wFXxJjdPPiURigJax3LM6kAHNnFFza",
  "key9": "j34QvcZ5uWtQxEovR6xEixqxveGpgqE7JxUaH1ZYL7q8F67u6KtFLEabQqreiWhGv2KFUJ6oSSatK7dQyiqArG8",
  "key10": "3E4msmJQCv526d8bQMooJsfNGRi2UBsH3BqizLFfyzo8yb4pSNfCD916zNGhaYrUFqv9KEtJ5Lok4pQEKGdhrE6s",
  "key11": "3FLag1L3Z6F8gSF6YdqxwmQcA6sGbMenk2LXGEattM5EhouMZ9RPyP8EQuXXywVB14ELS9dMUZLipZhHCUNeUSyi",
  "key12": "25jSVdPffKYTeChGn4c7fTQL1SwLH3Goq3YJXd2wU3H6xuVZu86UWGDcAduUpEfk7Q8sEvA93EgxoszsRZgw5N8n",
  "key13": "5oR7D9DGXPnpFYZSu2Wkxm6vBaS9KYELUH2m6Etjrf8ckvd8CPcnjg8Ymq7DvN3AGdbJM8Sh1eHwB8zYN1Tdd17y",
  "key14": "4biBDhtakc7LrhR9CFFV416RrW3uTiXLcBJ56gzxzReBvviZV1dZXDixqa3hwqwEgp78NpDBnje9uoFzBLt2jr9a",
  "key15": "GU2RpEXJqHXpMqeN4SntF2SvbZvVoFzpkyF1c6NMGUNe5AovXkVhVBMj1j7gYkpkfX6fmjjQBy9LSUWp6tHNN9e",
  "key16": "4aPZztwVgGEbDRrDYitdtpY73srXS5bZok41UJhPaE6EDgaCpnYE8mpSWaBTyoy1ikr4RH382HZHbF3dL9VnAeb",
  "key17": "2a7nLHAhZaAzY66ymxhcUraMWC1p3zyM8HvHZsxtFiinAtpSd7bWwjzw7qVahE2y9UWwoRpHHK6qKwuQk7ATug2a",
  "key18": "33n2F1MmSXi8LUn5qV7JRghRRgvgVfRC5nmzSNMLADfkzhyFiZudqAHrhtQJMoJWQVTwNzzp4j8vVv23m5xASzbV",
  "key19": "3Giw7DnFDHLE9R1JoCX2QcT15rZJeFDe6EX5b1ozkpuq2TcFsufgCLZPFRFZ9j4RqEY3uAxv9HH17UUgRoaRJiDH",
  "key20": "37yaAiWbSFFyiDGsEMKF4uepap8jepkuQ3U4HNqo9Q9fcWiitKS8aQQsmroR1VMMiSHBymEkm1AmoyCx8v4QRHYm",
  "key21": "2a3RJ3mUFhmnM9g9G8wjhSDYSVQkG8x2nvxcRA9CFwdGfj8V9J763zThs7bDfsbF9XBNpoP5A3VDYiGTWreYqP5n",
  "key22": "LZNqjGR5ppyXJqtMh2Fef87knN47yRH3r9EgbTAyniZzjhRZCmJmiJDQnZvYeUmeDBhZ7HzsncGZo2tWYFTy5qp",
  "key23": "UUmBiE6M7av125iemyG5HUCgw67mr7eiCfYMpTeuBoMQwbyNsnWkPM7A5aevMo2xYtwXr9m817qnrmqX1c4iMNZ",
  "key24": "8F1kcfUK95ZFDe5oAUHACm6AGXGsuCD6FS5BXUrHfqtrvfDXh8HR3PYhZ5FPjemGWVsTgRUPZta5dz77xJs9AXE",
  "key25": "5vNKr9tcmCUQUewDcSQYaHvwd6xpoJsgTHWc6j26a5xgUfiRsDmC6M3fah9NscG3EmiaKVG4Mm4kkur2rRZ6TnAR",
  "key26": "4RoZGndgsMjxezbHZ2D3b8wxT3VGYunRtguLEazcgUoZTR1aW6omYcVex86LGXvcMF6hYbw7JHmsNBrzDKY48k6q"
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
