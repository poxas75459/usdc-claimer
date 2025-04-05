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
    "RnqvkVWK57LbMyrm3ZqGCypoXB1c5kz81roLCm2Zp3chTWRhZ13DaiugC6oC4qwoJ3hYeCVtpjTqsdDxFTMPSe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DDSby2PcBpXFgsc2MQkmRMm7L2YexyqjnYa9qjaprkTCsxv6znNiznafkcTB7j482rF1ytFcy5x8nte5inn1awt",
  "key1": "4Rnuqkp9Qir8CeHvRzSYJSqFWLWCb4ZB7t4mkiWN84pcnqKpy2wEAvapkUsF3uHkJutQkqHBqEtSgrGJrGUcDszG",
  "key2": "4eGdKS8VP7TnrFXSSsWKupzPdjtuR86jynh7XkV57USzPWwR489TpxgivY8o2ZD4RAVyMyRZvKhY1v2kWEKsDvXU",
  "key3": "KQX8MSoMjS8qBTD3ckJyh7VHAgtRiFQpoX7Kmy3fgn3w2XRZVkdZXnYeU6aC82fDioFTXT5fnQBAWKN36jhirFD",
  "key4": "5fd3CuQ8xnWudGhmhZ341fJTLJvuDiPqP3oT9rfdAiVK83VRknLYXwY53qei1ZTjhKuBKbZ23yfKGJCf8wsXF7MA",
  "key5": "29Q6iWE1whiAPDkL3xYwaLfeC7W2YVZtLodpx9LLBNm3cFrxvMV3b9jHhSs9b5UoaEjpemABJXDeTsvK6cAiPTkH",
  "key6": "3iALNySznTMWLYKoUBntKDNAF3etVHcX5z3N6vTD7KJX8Fny7X65sD5T9vvjkxYUd4ZcqNNGzpwwwJs2c1GhADo6",
  "key7": "4SXGuHaJRDhkMYZZ8NdGzKkc4B5XnqPvFN3Fazjj2C1bm5TAyTb9p3mMUxd8PMPxtTB6ngcKAfMLc8gvbHeWzuLP",
  "key8": "5KCfTQwj7RUTaKdR9oyojULZACoJdX6hrbma2L79mXGEPDkMWWd5Ea3g5JnnHFNpH48MguacZ6ManjYmKGpihEJx",
  "key9": "64uTFNi8wJTL66RiVtNPQ7WJyJrVZB8yWnqjRWYe43vjKHPMPiz8VvnyEf88JWvhEBY9dcdm6NuUHxhuEuq3yog4",
  "key10": "4kkR2QSfiACc5LFG9zFtUThYcM6s2QYFAcW7snStAeFfbS6AYDYaxY3MfVV7dYdfYEChzbDuRRXWHVxRJvPeK4Qq",
  "key11": "R2zEXpAaLicEoxuTX6VR2Y3kErULTV96qz8YStm2W3DC8rjHh589fUKhd6bwgPoi5fmvaye39CMaeF1oYj6yzHp",
  "key12": "4dwpWzsQK6A4GyjBDa4EaiwivBgEAGLWGTb7VqP8ngWE5LAAaPsptWmQr3XzpmNF9ZeCjZyb11pYUuBb4KkN5Lcg",
  "key13": "jReyG1L6uuuVYPk4QAfVM72RZ4tQ2ujjcZjRkhKaMYu4fqsSe6B57cjNmbrfZzH287WsEvkwETWSQEo32XEGfth",
  "key14": "25RdmBpDsgNiZ76wR7jN92ULK2L1i2GxG4gsnchau6WuabKJJTga83aryYhf28Kkr8gardLNNotH5uFe4JYLhd5W",
  "key15": "2v6Meu3LKxmH7X7MK8CWWvGcw12GKw4d4kQqk3r91MvQ3sb675hohCYxL1D51moyCEwHPDsvPa9KgVvtRPvs4qZZ",
  "key16": "4fH9YptXm2bfDo79fxbasT97QnhXrKx5yr4w8ZaYHugnWrWLr9WS52aQq3fiPeageRm1qqAk6DLNrMwa9G54VQru",
  "key17": "xVHMT5Kj8JP4WHFcFBFyL7S554NCuSfCfmgFXokELWqqDdbGaXJpS6XtA7Can2Ysru8PTdhB22MbFUPAS1hurii",
  "key18": "3uh91vq87Wh3kHLvPWBf8UYDAdCjJ3tzEpKPoTBRiBaL8KmEqgCD7JzZfe4GzA3oZM3ueEL4eMzQRMhpeT3vVf3Y",
  "key19": "5g6S8g1s3HE7GZdzhoMSW9mMYnpQzYVprGKWJ5tpCFhCptpM1S7WrbW2E3JVXYRHk9g7syZDybUT7xFYNfoVEjrm",
  "key20": "HE3K2ajaCvYqb1rjoGPJhNmoShqa1hLdMnWdR9nsMh8eVsaHbF65ss2cA1DSuhKmoT6SDNHzQh4pVwXobmR9VEQ",
  "key21": "4x4bcUsJBShTS8U48Rtd9hX2QEFtZfvP3V6gf7NkAF463JxV4Lp65aju4CNscPCCtBN1FjdLU7BNVv2QTXTotvNV",
  "key22": "5WXM55cWw85RmQwjim7pgLfNWHztWh8pFM82amF3SptgiP4Zm2b565bRdGdtq1JC21d2WpSt679pRErFBwW5it81",
  "key23": "57XDkWRwwRNfHwg3x2PSjJLixSFMvJCT465wtwKWCKuX2D6XX78Rw5g8SMtoww5GmruznZcFG2MAmKtBSt2eFEKA",
  "key24": "g7GHvaQ9xPuZdzuJA6b9CjbNXuWYGTxvypc2hDm8srRCks8iEbS1vkNfLtuoBeRR1Bkadsgvc6f5gBJHcdSUXPF"
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
