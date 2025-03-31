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
    "RhMzwrnAoUPfBU3J7ameraWi7y2gdSBWZGUwfZyhnRBWEHwMuaMhVo7q4KF3Wac5LgVdoeP1W4UE1PiTqAP7kju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UcHuLcHbbdXC28uVAVagnMQwSVBAMYnJHKGr2AThTYNCvJfZTvs7tRrcjX1pZdxynWbmnDH6QhxnLEdZ6Kk5uF5",
  "key1": "2Q57tRfzpf5tAh7eikdVxkomHs4nY1zpHMEsyxkEX7CmEBgXk2S4f8CddxyDfDZWAqj7DuM1ptxRETym9RTDyLua",
  "key2": "3TMNrKh45md5rmvWPeKoiF2W9aRt1tEcjUednc6pVBxtzu6qduAeTFvZhq7G3UdKg343BniaCDNjkBaXh63Vzst7",
  "key3": "5kAdQ5PD5nobQw5dgRqNrxZi4vU9VTMiBVukh6eyao5xbKuJraquqZFihNnfAEahjZfd74ZgALDHZaVEe8CUvMAb",
  "key4": "4y3fvCcuuwZHpJkYYyqbYrtsHDfahqLBC6rH1QRFVY1UqepJeJzZr5i4ZYqVU793skKYJPyDtBhSfcDSd3vpCt2U",
  "key5": "21Vy18Pdy4XtDaRyoAtGD89R5ng4uhU6Uv3rA7oZLiYqWtgQoPY6YWF4EWvkjwM3yZkeZ3N7qq721UMQpPoP1euN",
  "key6": "2sSjZfy3e8YRrKbdHifEYdJqyU1rmQpoQKuEG3VUhq5EPhxG2vWk4Q4U3KHcRczQHkewpM1MgT9nYEpGw1VtiMUD",
  "key7": "5fzxBjWuPn8KLXKS7BVSgbXYrwjciFUnxN7EVptYwxaiihpNdYrvwtJAHwqWrVxbB6GaQKyDBTApabS74JvqEf7E",
  "key8": "5CWqHRnq3kHfhhxGBrEDndeJwVib9RpWqRqBJGR3UQ3MKBCUpVHSX99MQVx4SpDApAebXvxS94TqE4Teoan8tAws",
  "key9": "5dyrx2aVo4ejh6HALQz7s8hN5EMuMYw99GXhsoPf4dATc3vkTWZQm8zRacByGgsv6brUxH6ZfTWvF6niRv4NSuGp",
  "key10": "5fHHkZscrPbj5wqWPgD4QW6HohC5xY1FzPTQWMc2xk5hrtu9Ebjae8TMuwAGro5Pr3BGj7a8sEkenMfL1kSNv6RH",
  "key11": "2khjkxFZy3raGwzV3SfHMyCh27V4GyooedrJ3Y5fs4xFiW1RSiPkAUcWq64vJ6EP4ohY4fwRoChfQ91srZxXCJXt",
  "key12": "51UobDQkrqn7XqeMnrzLgSi7RL9RzUZTehzXhuedQuw8BA2dNJXL3uiPtkaJ6uuoxTJRCGYHc1kpGcYNTzE2Sdp8",
  "key13": "3sHwZfskxY7C6Ph2BaBZYVh5PSMsFV3xE1ZAT3AZWB1fS9aZdErrdkPEswrszaNhPKQKA36PqqR3bJbtpsJ3QGLy",
  "key14": "2pq4P6J3t55vMenPtNekoYrAkVTw9U9zzZBDtDj2HsRExLfN17wUdUDidQTscEMQv97MSUUt3epoz8eYd5xjSmiA",
  "key15": "5vCUTRPNhcG5Wfpe6Ssg6M5edUR4BRJtKbZyS3GDXpz48H3ws9RyrdV4jbDtFGkVsXU3Eu7yQvpu8KKkh5xUMb1y",
  "key16": "4iUgUPEWuCcABCmZU8kBNq5kmF6GJmDzkkgr3V4ZbVcYVGJ2uk4ptspSMzwzRephRcNdcYRnQmWz5zqPQzRC3tPy",
  "key17": "27AWNM1AUcArfHbwCxFeTgknWshCWa4YbCrPihbW1Hb755s878FhNmyTBSXJ3yWzboaibV1Uv5iKaUtCAbYeBtF9",
  "key18": "aGEFBA5hq7jrNruwNQgAoGd3GA16mUD8f29rX98qVKVTbouZNuQu6pN3x44wESPRpmVWujmH3CZuVJTvMD5sWuL",
  "key19": "wugEhi4ewo4gwUAaQcKWM7uTnu7pT2MWYYHr6gz9BVNBvbP61VPs9mQCVo5ZTizpKcCXQHunHcks55V9NnuHcNv",
  "key20": "4MTtFRud7G3wtr8BX7j9CxeiQQRwbTk26mZ5yCNd3vz3UFLF4pFXAHK87mRoV9W8Anv29TTXUvPyZqAepwkCngtp",
  "key21": "216ej3VcZUz9ryZiCq3hL2v9JPnS17AyTHLZ3XenZUqBZak3YL2AoW2ewPizCBchivmVj59QoraNMsLNjCgnoxCt",
  "key22": "54WBZM8viymBa1ZntQVspk9YJhdieq1qM5prQFpit9mTqQEHnfJpVgDSKiyKL9w5dWCT4MXLN8cNjJzdxRhjpN8F",
  "key23": "62XU23W1besHT8Q7aCGzREo3NcnDkNyZgJDo5tCgy8SANesRRCBZCEgVVfUf8P9CgfYsQFQEzrEztHk6tJjXFPVh",
  "key24": "584xK4ErUJWePJzBKjSfAiBt9LRA4H1UaYdr3TmnxDmfQ3g9Y9vvG19zyrPigWxqf1wKN3C3z5ESRFdSXEMX4VQP",
  "key25": "3smthjLaL68mi5G144YCgX6X9UKd96rnYkbgXxhwK3CUKmunSHGKZP4p3fqedzkJD79AKUCE6YABDJL2Cxi481q8",
  "key26": "37bGVNWQLNx4hgQFkhQ4GuSKx9XNTAKSXKkaexyeWF67UhuisLCQWudHRfLUQSEdVAyEeZbFcr9amDLoF6c8AHg2"
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
