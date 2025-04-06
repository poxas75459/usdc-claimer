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
    "4eqK1F3q6ooTjjq2MCsLNrySr3keyEDUiF5hnWGQRWktrc9ZAUw73cW8AUb1KybxjD4TJqGiHpHz4eJVMtTPMSmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m1yLKzhMGv9EFkEoWTqR9tdrw9oGAbLW9LLK2DUiK82Vj5sim6Dmou8XnkjsGK8cc5kWyg2wf1ZxjBte9LU9rRD",
  "key1": "5HgAT4k6ENxDFCumbaV4MnLwfxBg9Yf4qbjkNs9b8GQSr4fWfYJDyQoaA9FDnBiaDdKD9dox4LcwZqsK7y6JZCwu",
  "key2": "5AnUbEjNpV9wajqWKdK1XenBXRnF4SMTXRki38jHAbvzi945viywv8hVpQywpdYBAL2ezHHKvADcTnpp2quiHjU6",
  "key3": "Gz2hLRkM8Jn2YHzqtqMxuN7thrf2tdxH74mDtEeFffXDXhi9fN8F2N5rigfu7kjvQECWMbuKE8u3nYGG649pPd5",
  "key4": "2GTN2gi2Y1ZvRZeAFiMFGqzZzyW3irmvFfyJ2eLjo9vLXtUsTjk3wEbtMpGMyDctp8TgWF3XyFAjUrYGckGHTHHf",
  "key5": "5tT8yjBVMGH41MoRaFjKiV5Y6QrBRUS1P69tqNUtDATtSZXnzUGyB9mUQhYzhS7xTFLwwR45uCAbBAqnkiEtzeuX",
  "key6": "9pBPT7Hde92e9EA4ew5xVmmNoMyRV4Swui6ZmrKQLKSVfPV7BGTYFtBCjK72Ubm9Tnv4QbBVXKwVHR9agheJ1Vn",
  "key7": "2YrVfwgo2cfdc9uwbC7L9eZnBA5b2kGBsuuLiWd5vHa7FeAJbpqjeWvht2HVd3htJSgpowMA8nkekSUaPGRUitdq",
  "key8": "5EvoLaHmuszL24XyHVgVr5P6WVRu3k1bVEJKR1bvHpocb2cRpWMFe845a8oR2ch6FB1UN7BXhPAtn2jNTKF2jdCM",
  "key9": "4q8N57gtnZLNqKnBAGoXnGrJWgk2ZVSgmbqw4sQ8GC76AcGTUifCwVVhU1qRimyct9ywBeh7BN4RogaruHePUrhX",
  "key10": "RuTe6SBkMwHSLKq3qKCm7NvBBvPgNXBNo5anAxTN3c6HuoNNNGWTHsfEWJZq72qxFtmaQ3CLKknLpTKiztUVu7J",
  "key11": "3265ZrsqEGXwGxtyh4c3HnFruYPC57Vr3uiSda77Pt26g4gmKSYNjRqN2PhBt82rB9cKBbgVwAruNqBzTnfrSH11",
  "key12": "3e9GxZPNUW83Mf5xuauWLZtN2D2xtQhG39mVbsP2zK5HNUDkF9ptgxvQdzhpR1k1fRgqRoCRDqg5UXupPKhRVMUh",
  "key13": "5DcvdwhFZ1hG7YD15eHEiMLVvH1puZ27VpJQTrUMsD5YUbrspip6tg3r2YuB81GnGv9HzxQ9LrX6WgCbKrypHPcZ",
  "key14": "4V388TafVi9i88ChwEyn7vWtkKd65oVLsT3L4d4ZcqGRiGi5EBTb4HoeQoGh9q525UyqnXaChvhSq2c66FjYHYv1",
  "key15": "4JJ5YCmVQTu2gRGdPxPRt5HkjPo23cBjDDUmzDAyfQJv6upHGyjyzQDf3NiNrUSRSiWKRXY6o4Gj8kxjecEQU31G",
  "key16": "3nGHMEsCX9sL6AWahMYbY6E3SuDA7YnxgsTNwNS5BJv4A6Sr12cM9E2rJ3nyBDpuciWYfahN7etgUCMy8juZWot1",
  "key17": "YudzTA4WXENVzdtQGAJkrdHmTA58pSn7NdbqoR8isKxY2jysStaQw2K4ZoqNS7vTvTt43BPedgLDFvMUVuy37Pb",
  "key18": "5VAz442qAWmgK16tUdcdTs7UsrsZgzt3Dvk8YnwdsuFiEfSLZFyamAr9sB7Q4qMLixiSCqLw68BhgBzDi3yQNo45",
  "key19": "3ViHs1UYrbAN9qfDs2KAb7nD82Dkfr41Lhm7WRr5cjdmdrzqM8XdVKY8dHxvNMcWjtbpyY4n95Mpby19omjd52FH",
  "key20": "3imRJL8wQCzgg8xgsfnu549HXpWXrE6Kyk51N8nebynHBevwYoXXXxuAjftuVBtuzHAdsH5JGE9AL1Zc7yR2ni6B",
  "key21": "3MEu1Xdxpr7UdvQkSpaoXQwMnQDrF9nHmbQvPZ2euH6PLAGUfCAUKrLvd3H8fMwqMuRKUK38SWrS2EjkyDgDGJ3x",
  "key22": "2gpBv2kiY6vCsdmedn7Z3Fooxwxkhpc9SYvcPt4VChawqqk2FF19M56QcDBXedG47uiW3sQ3ttFNiFZ9FNefX4op",
  "key23": "53MxJSjWfAn4nHTpxEJpRPydYpjPPTUqKim2L1styg8ouBvqnvKobB8u8dPGk4D9icUhTuZKfrzMpmMMJd1K5wQb",
  "key24": "8pnVawPrW5vrqWSBWx67Ay3GwtmZA1ryrUDR3E51X51jYozXHVCTnNTygwAWCBj2H6hWbs9E39ZeqA44kUgMipo",
  "key25": "5vm7qFuvKpZYYtG3MczVTG2ht15Pwkz8nD77jNMQC3LZWbSbwN1vbiosJLRv1dpBPQePW4VzZKb1qUYrvv2FzFoe",
  "key26": "3dRCK4CQZkJA98nR1eHRYFXdW1CcLF8ww6sFoGWHHSNngkzkPKmT5KfGjxhVJ7rUxUJEENKs41b3C4reVNd5VgJd",
  "key27": "3EHz3UCzsTwRqtEuqTBeEeAdsyykwHj9Gv9PEwmqprmvRYyvh6AE1pv5Aa1DMi7JGVz4bDafK9ukGigeziMPUQN4",
  "key28": "64E8T6uTHZUFUtDCZGKk4BSBTHKwGLMmgJcg2QmsmpfaCfHmn1gqMbtiT4Kbtwbq9GoQ4xWC3XNdaVRqg5t9XKoo"
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
