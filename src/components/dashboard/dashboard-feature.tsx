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
    "2XERprhdgYx4D5hGkuiEe27MFkdZd1repQnWGxUNwdGyyNY6RDL43R4GJVZXmBzAHtrytiscPaiMWKewBi1KM4qp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pJme5oBX3FHvitiCAbwx3vkPBAQAueuKLjf2QzccNZfHeG3dbHzvSUbH41xE8ygDDb6vEJ24yf4FuRxag2PNBoJ",
  "key1": "2aiXsud1eXd32vnejdkqs8KxJ1fyLF3zAGJoS3MD4ETPBxsH6y3TLDf2HxZFCCGHeJjH9bYM3RnJ5cWWj9rsw2Qt",
  "key2": "4rVacNwir5DKGnWC9HKdBZD8VMkS3B7rovq4YkqvJ5g7ajpANot2E2q3pWTRetsssHwZnQUi6N3FpCj8Tq7uX3Pg",
  "key3": "47JJHTbAWAarVLMopzdh718LK4z1r7M53WRDVsH1wGHUM2qjiymBxLP97gwQKNvgVwwEkBVF7ep961eDQeUYkjAy",
  "key4": "63aP1dzP8bRySaggg1esPnsTaF9dU1LwVy4V9DNkoLkV1waiEo45rMWp9vMtw9zvvUQU38GyvLsoFyxEcHv1Y2g6",
  "key5": "2vbSHwRyZZdrM8KQ7YLZb3mUiE4R8ibK9EZqt4sf6jtHHEVAYExW83rj5sGsdqs3w7o5rjrpYL7Kgm5hVGwRfmMh",
  "key6": "4e2uE6teAVUCorMTmaYVnRudxx9PHjuheNLNc7jGg8pq1dsH7LQzoWP7knyzxEtEcVP6ZxhVUkdiPD6KD9RzTz2j",
  "key7": "2omJiDHgAWT1Xb6Q8iujums3C2UmK4mBjkFbmXQjTDCRFP1ghGLrNgX58g5V29pkEZU62nccPbXuWZPrjotiTSAD",
  "key8": "YmzzXnxE8iun4NSwQHAPz6jsbnmTvAJau74DXcvWBkYrgZTWpbRJKZPJh1FbgYuBKDazGumMUZB8TQ62J6DXyaB",
  "key9": "4WwDxn7i2bESSv3HSEVyFHMaumQpxZRRxqV2mcqazELucmGfmLEXqSVbBTtJ5csG9U4qRKwyeqiUo9BLyDrJPHtr",
  "key10": "61PnhwhCzxbmd9kG7nAyd7NCxLaZimeCEnWeRe8DeksM4JuLZSbGv8fL168rWmi13LutLiJ4fa8ZP9VgjpDaXSJK",
  "key11": "2zYJRHS1Gd4C85k64os9ySTmkp4FFE6rFsTVt2eVP65t3Jzw15AqB9ZyLh7K8H2mkv7wjqJQuyXcFuNeoHaYrsvS",
  "key12": "5FFC6XuqahrT4qDR3jry6bHhUC7zafJtPPiXvbjtXPbbXPjPJzspkzhhsmLj4mJEtu5KneCnmw6P2ZxBWYWmvSk2",
  "key13": "4oMpTya6bz48jDwQm942FVRipLHHRCjQNgGQKTUZrZKcP7C6hKpRHc9XBFscAWyhzyFpK7W7mH5hbqtm8CaQ7GK4",
  "key14": "pgR1DJVxd3LrCRE3MHbzwvRXuzgfdAXdxiLwQTtc6yAAn8TYfoQnWWGW5nd5KteV845vjBZjnWF3ZUmtgsmXjuX",
  "key15": "3YxPtbk4U6dXC8e1zFnhZccut2RtwGufA95zn4L8BNvfhXXzfwC3HfWAKry1kAut3BsN6MgjYA3yYvQ9aMye7ccj",
  "key16": "o165HKGdp9a3oLFtjkjjdhhzeHH74SHhECoVq6y6wAJPCCMQomFbT4UL1yzukpjKUeSSUjqsZBHwC3YXXZSpQFo",
  "key17": "53sG4xmMWWoW4vQ4LvFugnTfjnioQMtQVoHZ8ehDGtWmbRCDiomZHpbib2VM6xFEktZY7BeVdSuW5kJdd9Eqme2U",
  "key18": "2QogadB3dqwthLRBrLRCuAHNADMqjHo1RV2pwoGEkR8M5fsqfzcN6hGx6txkpmwVyTRJJdBAMtbKcMSJEt56bxJX",
  "key19": "5RFXuAcZmNN15RPqoWcZtveXjG5PUC5kKyVGTACR3UxxWPDfFJKFy9GCFidrcpHUx6eHdANUWAXUJrhmr7YpsU7z",
  "key20": "56NyYMdtumXFnMFE6dD8hKgduMvcCh62rB3V4DX3CBYvS1LKjEx6pbXXJXj3Jq9P3FEB6tKCKhh8b4p93aJgNtaq",
  "key21": "2NDWh5YuRm93hmqMPgCiCuHE2fLp972fCFCw49iExjDBQsX7tquNdxw3fGfkPD6vbpUYospcJBC1YyY9aj2xa7QF",
  "key22": "2VTSTfBYM7LFAnjZkvR7GoNjcxjjdKDhWiqrK5zwDYoCyef9FcRF52auo6bth4d45LKK8np5WeaFiGJKMtBTsCXD",
  "key23": "9YHMHwiZ91eXqTibtg45xiWeiSpLPeCVwvGTQkws73NoCeEgLWDgMzsGWcimhdGUBqJ1CGSPo9EqRBMVTuucPaw",
  "key24": "iWk4HDj9PGeVoBJ21S8EMeyPRRgMfjpnCMncoSCD9s86p4EhYnWd58GdNrxCNFwcMfdBAcwX5ZH1rqjJiAN1uWY",
  "key25": "4p4vcEGSKobsYPCWjGxRpFcyK1QX8yCwVm4ZvZhYYBf92aNBZvgso6RBb9H1rpg5SpdMYtG584YCdwC6ER565b69",
  "key26": "5sT11NTkcVe7i5RAtdFoHPZX7JVhTHmDTeM3SFhwXqzusCZ3yF3JGT5zrWZDfrDCw4xnoHxFKP81qKFYdCNdTXgW",
  "key27": "V47zaszTCepjqSky9zz9YzNaUx63vptszvZfrWtvAWsCKmGhVhnbWeJKCGP8zT4hUnoHiLj9NJbbykvT4qFLP73",
  "key28": "5yqd5KLmCnLwdadH588T2RsPX8isiLjgUnegM5NpRN7ut3SxEzeqjDZCE51ckhCDfbXNpV3oiAHqjVdUwZ22xLWS"
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
