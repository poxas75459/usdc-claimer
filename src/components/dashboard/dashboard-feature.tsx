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
    "5znAGdUW8eVVdL6nGzPYbw1HQhENNLCHqscmRk57o583xdCTirpQ2epri8xx84nGHoY34eStJBCwFZH5A5Usi6aB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h58RFs8VTpxGyXH7heLZ89Li8vdiPc9CRRLS9nP7GpmM1gsNXJArdo4kNBxeRmGYULQDc6fyhq4r11Fvurc4d8W",
  "key1": "3PoQnNfs7GPLG7wh67xsyikZVKX7kb2Aj7dkvrc97crRN6arBxaUxLmrbapYHSEYQxDdX5PJDrPcc3F4iR4gkaeo",
  "key2": "55HoZHZ8uMCimc2yP6qiZ3THiY55GrVNxKd5cmHZt7RcvPCJgXtAXu8KaovvMJhzC5DS2M549JoaygogBS3WXbKA",
  "key3": "3Kr2DgS7XY2yToGVYw2s88PZMNteB7sEhvweAHmZ7h1bS2RfPC66E6y4ojHARALSZMatRXJvaYPeWDBBb2416XQW",
  "key4": "4TfYh2tpMkvyzHsUeitF6z5NT7DDmSctRQoY6FbwVLCtnpFbbGnZ792rDKFYC2Q1HEGsCJMGFDJ4Whf12Mf2zAt4",
  "key5": "5Vm93BVAWYpQrgGkdbWNt6MYriJAmR9GqZXYiS8oZPtycYGjMJxNBhauEom475S51nEGvJdqG74cPUH65eyGZ1Fa",
  "key6": "2KRUnyywwtSdehq87E2Rmd5kLzRvx9qGWhQP6w4y8qC31vhvvLiZxGMWUjbek3TU3dKfjPBs4vJgxuBfEUyqD6t2",
  "key7": "8mUwTbwjb2JkbidHLKQikKdn2WLTPFCP2KXXK3UqhjsW6ANNPrZnvmnW4MiJjEyUaRGMbnDJtCNVH9JvS8mkVgi",
  "key8": "5yagdgM8Q9MUhaSD2RbGJ62LjMcuEw7LqbAyV75X8165j5kbqCnDLq6qQH9HcTb4j8Paujw6z1GW7qTgTF36BoJM",
  "key9": "3cjxAFjWq2nkxVrbbi6KNKKrmMnJJCX9WDT4z4VGkugdoGJLnbXwQkUmHTqQ1nN7tjzoYT8ZF7zi5EzboxCbWi33",
  "key10": "6461bUky8VzzGZ4XaPtkCgNS8axHwRQ8aRYoJuV4ugyeTHwVP84MpHe9678nJSKyMBkEn5Jedj5r8mbcGSkgomiG",
  "key11": "32iJZmth222VgibaskKcSD2vPndHFUZBD4GE72NzSY9A1318TNcxNs3fT2UyatUtNYVmT28Cf4rkN8ibw7wQ7MhU",
  "key12": "379HK6sRLfWzLCMCMndo7BrXKcsBtgatK3qkGYY1q8HWqSVzQM5HZuu2pDYfAWruFmeTCKcpTz6iiamyFhAW8ULX",
  "key13": "rXiWp6T7N6UzgwDt2BLBLUsd1UK9e8V3TZjtiQN56s65z9oQ26xhev22hA6992SHm9iF75JcVXXCd1Tgkh6wKER",
  "key14": "4W7vjzQJmed4Y33ro5yihYnGTDEsJjrx977pvWHQmCKCmAro5gZcnGGv3SozgpK8CHxr9fv7c6id97BabAvRahHP",
  "key15": "3bJVGw3v3EC7j2PV8TvBbNy8pfwJRvJfTQxV7Srz1fQRBvThMukB96Seo7sDwQDZBsmJcqMEaFj7Zhtkk3mzZng6",
  "key16": "QYiGANASVdDGAzcxLefU4FLYTPPAKJcF21gZGqRqKaYWUhzykCLHS3c5ceV7nQVkFQi4Ko3wpzzvvdN1ME2J4hK",
  "key17": "7AkmGBJLuKVjstKPkP6Fi5gLzhPzgMSnFkAjBUZ6Lca3aTk2werK1Wox5HPn6q6dY8tSPus6STXfnLf2BbQ1AE4",
  "key18": "4d1FMGwbpNczyQ5LEcsar3rWmLiJz4qR5cWUse56jZ9cgpjo6PJ4DNuo3LZYfHPZ7F6Q3y5jSTuHVgZC7amaSbAo",
  "key19": "4dUfjhW6DQD673fy5ZGoUuddLEZ6g2C9WbD3PERTH9cH31U1Q6hc8zG8NR6aPZBCm7cZAyb1uk78sGjpys14h9do",
  "key20": "5ehcuNwVHetGcGgA9d78Mnx6JdnghzQw24QuGuaETzB8NCcxyTbEiy9MpQ1KX13QyM13jC88oM5N3GG9rwmpwokZ",
  "key21": "5mWh9bcW2dPAsowShNr4VtXTALKVEAM6GWDaBjugtiG9wWRRcYH2z5GZVzFy713KGVmu7Tbe5Xq47dUxnuPCeEGz",
  "key22": "3uW5ZRm7Dm4Vu9pPrpqLZ5VpFUthVVTAyto1RRTPQkGWGfrUGrhucygwu1dcs7HJi44y7j2p1WhQtcfS26L19zfz",
  "key23": "XgRikTZE6gteLnLtRFo7sQThkF4FpqzvYsB4Pe4eEXERTL9YzXYv9JSXAcNNDfrP1xCU2mRDkWmAL4DaKRk7ztE",
  "key24": "UVvMsEioxsAwXjiPZniUqDtUJnGurP6NKQJLwPsjZ9vQrMy9yxjpTGxaDFqqTBWny8H6rVEikFUcTPU2gXxxUNQ",
  "key25": "4VNHRgH9UohSJsVFeu1HvaDffPoeEBRVpZFyYmDXGrPUgBp1VpbRcacaFrav6QCjzKthajKVJSPgjggjwNg3KJ7w",
  "key26": "2TaJJi7Evi3ki6xHHmZUfvgbaKwWqH7YnYezAbReT5t2BMUBG5oJHr3yTYMHtZRTex9n144mqvzteN58Gdp3tR9C",
  "key27": "4utsEPt3h2udnmDdJ95F19jtGme1GrnLvST7sCnxjgpGU5rkXEKKgN3qUHPXz9Hu3DRZArhqfQyf3jts8SLUnk5C",
  "key28": "3XRuAcLgJ2tpWkvrFFerdSJfnc5kBgUZQzE95vWhNmzBYSu9jj5Jt4DwEVaqLbFDeskyYPCzQc4vM2mBkP2Gc69u",
  "key29": "2kyhMw6r2XZUzBXSe8VpKhGJ7VaZ1z3ksweFfNQX5VAyVSjyh6ASqrGkUPpduxo8kyWNySriv8wEvfgGNHqyqf9j",
  "key30": "4ixhYsrbT8oXbx3b4RGU1RRRQdwLN7tqakDgbyH9nBzw18JteyQeZn4f4qnoa7PdV43EH77JNgMrfMCpgZctUU1v",
  "key31": "o8YWhrzvkkwdbghFZeQ8Vtd1T61MaMQ6GvHaaideu1YKjdWzGrqRc2rx4jcxhaHEjLdzzK46kzStqRf75wavaFR",
  "key32": "3rbA4xwhJk3zoP5NP8sXfnTdiuAmK4VRvdeCfEbS4tCTc2MAW4KbtNB7ffZCeKeHXev2gGVbL5ox1KCBxU6d5hp7"
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
