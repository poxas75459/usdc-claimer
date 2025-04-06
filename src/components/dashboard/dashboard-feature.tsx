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
    "3Aaz99tbaUJrXy1njzKyc23BRAJDJnYqx7qEtKukVvWMJgk91fYXYi6tmFdc7m764yKeHJHUv45GzMUzndXjioLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NBRs7aTShhgSmJShV4ZRghYsZbjLZvqupc3yWFWjsQS1TbUG4bEmCRYuf2izhyrCq16ho9e7GdMVy7zSN9yoZED",
  "key1": "2owDVowZzGCsWMGV5EC7B8KaSc8X1CPUamRZX5LaFNQgz3eozLwBRVDYuxQfNA4iovgwQG7sTCNGxcAm721gE4TT",
  "key2": "2yPBUZYYzCP5b8doCtfqc1a6xMtEdQgMb7nY8rpfRAHzRRaaHxxapB2m4XiMnXy5KumM1qUBaJ7TSYvya3Crv6by",
  "key3": "2Z7ZVymUmeW6W6w9rgXrTe3E7nkzLmDKdHbSZ51TGtpAHfuYCBpe17xx3vrhmrZHMDrLuDnqS4YSwnytVZDQt1oi",
  "key4": "5RM6K9A777GvdmPepfTi1gYu2NBrwpddk1CiHvXfYuNZZPWfnXhnbPHoL8T8v31Jxs4Dtkicji5vzjXZYKHomeqb",
  "key5": "57du3Yw7ie3mpw18TgXoJhJARzGJ6qvHEJzi64BXo63eZG5Tefnv5kfYdUBuVHPDiwwgpTNpVHg4dWWb5cJiwTBV",
  "key6": "5eYraZ9zkPC69188uDeq1JaPUFXWc4T83sgLvUucEM5xK3dTwU72SMiyfiaFge161FxDGi5NfdXdqivAUn6aNXPq",
  "key7": "4FP3p56iUjTbasa5cs9Xp45GduKKxFWPgRFyfaWczLWYN69tgtcuVq39ZNwwfwPRPS8MS8RzEqRdAz6j769SVTJp",
  "key8": "2JsGsvnY79XgmVBugVxKbxCY9BqtRd7PyyTtS4XMY7YGT6wnTFVuamEJaZBsu3TDkhQhBW6pL7trqV4yqSCaAEJE",
  "key9": "4d4pL9BR7zubkteBwrKPS7nyvZD4TFyWgRNbWYLAf3wEQwqYsPWf5Qa4b4k3FsCD1jyPKhV7AD3Avoy338Q9K2j4",
  "key10": "2KphnnKTCsj69RL3h24hNg2qnyBWYmr2SDE4NEg4TeJfbZ7XfrcYDgywyuAVoo75f32xve9wU8T6aZYFJgk4WhcZ",
  "key11": "3gP7cjwaZGLvfSDFH9ohNsRjAEAn1gpkK1NKeSSedzmQ5uanNeWbSPfvkEEYFmrfTgCU9x9rBnTC1XBdxKZCc4MQ",
  "key12": "2K8ov4r979edjFV9Mzba46QbPQXQMaMQ8FVsBpj77qwqHtLWU7BRuLT8tkdNHPk3FPSbduCCUVf3K6BnT2sS3Qdr",
  "key13": "3YD9tCCTY9meNW2JFBFQn5cR29HvFgPGwNZfgSbrwU6tWeEEHJmBr3AUH9gm6sLFLyXSpQC127Mpm5CPcubcPfjs",
  "key14": "3KfdKHaHoCZpDGq3gwEWxGL65v1i3BQ93U73mxKru3mjJT3JuqQAUUNHJ8PCgatvDAsq2Uf8fYBnQDp3brjYAySc",
  "key15": "3hWcmCzVSEdQZSjMxFtzrhUoH6VZ3yTFLWYmABrvBRSQCruwPgCo9zNfRCsjXPM4iUPsMqvZwRF2H2zaJH5A59Yb",
  "key16": "4fJ1gM32mVENgJ25N9rZEw8C5xpRaaU9GFmUGjJkzFw7S76nNKRiVNGcsJBAJWFHkTJxi6ufV9DCMKU225NeejZm",
  "key17": "29fAm9HrSG5K3uQ8XhZSijDBJZhr1ZyctrU5DoRFhsasZoUWz4KXKPnNw5wdwqg5EfZE8JqNV8LZLKdbcR2WybbP",
  "key18": "5Z7uH5gSU3gscFXEq6vFT4ThBiLpneGWYsWXz4rGdqCkeZqJNMHJVagFyufa6SEoqEtLaMaxRTnG2SQGavayBdeM",
  "key19": "4ErcqBtGVoUYgsDhA9YWQaa5bbdyuDvpsscULW6gQG5zWUbArBCqKXZ9jzEur8R7Lpu3TC3Xq6sva573GDeU3Wwp",
  "key20": "56q9wiwBNmLkyCrnTD5PpCfMF1uoJKGLLemHNgLb6MEwvkipjbCSUwYP62bCe6YNKgHfb3oUNJxi91gfQAKvJPSB",
  "key21": "21MBbqqGnKiDhpWMt11nVqGZ4Hf1DREHrwm9apoE3WH1mH1dvy25vRqkezpNrGgd1cmQxAAtmYDN7AGXRwFZXEKJ",
  "key22": "2F2r2boPecARQfio7sQXj143RbcGCTunvDbFYK29qLR59pQyhdS7TYry3iNfzKXeKKEW7U9MMTKuh4T2qfYh4XbL",
  "key23": "3Q1mUQUHtaom7W8N4FDupiRjz5wpnJr1mwbcLzU9ubk1YN6SNZ4zpLqPdsxv8JFVHkMEXJGu28Kb2DAeeXPzbXoe",
  "key24": "2dpkoCvCg68TrxxdB6QUeyHEpHbZ1vtoTeu6MBcZKjxSKLtsk5V8J2ySGM9vEhyTuxeKd5tU2fPa5xDLj3PR6gGY",
  "key25": "2U1FNgnd2WbKn77q8nRWXCu6qZ8UCKbk7kERkDWqUhExCuKqVMiQzbhhnmeiKbf9QGXDPzxc5zAn1rk48m4UXuPG",
  "key26": "5QVYGcwoq1TaqCzWHbTi7297q2mrkXAXwHrqdsFovQ2okidqvod2RHGiA74K9Efn2fsuS5kXJGpJL9t8fyNwxbX5",
  "key27": "5hVGrHNM6bvRokd5Lc41qRUR4tyNLHxbXXnQnoHJgZvn4imgJwAe6BgTNQiu9WekwSh27sSpMx7La73mYjha1kkp"
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
