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
    "5N9KCbMSNxJNLJfNjCTpVXppqgZtdyu31BGD4Dx1Cxt78kJgLhcviJZ2AdHt1bDsuQQFSp9RY7om5wRzsc7x9HFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c1qbSnHg91DsFhXYmYjK9H1umtMhs8JM2A9zNxVL64ULTwAtwQtRYH8G9y5Qk7DJsDyVaAwVesZ8DPSbHrvbqP9",
  "key1": "3cuycPXYd3VJzUUPBthL9dicKoFXbu4qw267rcKHD991Eao9UdGMJX2SYnp9FwD6is1jBytGJ2U8p9LZNZDYsjCo",
  "key2": "4iWneZMx1GfuvBsDrdbvgqgua1MR2DuiTxMpZTw8Ze2jQetrxpzyE3CPFqbqmp2cX9DXjWiRhwBiGxzfX4gpfjSo",
  "key3": "2g15Mg7W3nuEs2TUZmoi8QWJQTeFEr7s8QG9Fu9AzHtvk4ibscerHonvZLNoKh266Yd8CPPPzNjoqjmgzLibt3TU",
  "key4": "5i16PjcoPshsnG5YM5FVfMgvXEqP2xuR7iySmDwR9VEckuqFymYC1G5g8U6usWmvRQf9LfsTS8qHMTc4WgaupsXd",
  "key5": "4ZftFJda1e9rajKTmf6M7s1z6JqiwgR1jq3MEiNPYUkrohxW3QF6Rvonw9Af9tYyFZG5b3Dy4Lgz8bydFq7nQ9df",
  "key6": "29kyKFLrdNotd4aCXYJS61bpKiS1T2W7mufUkFETWtSRdqcfh19iZorp72jhkmjm44vPK7xCDDmRfSP8pPdyEDgK",
  "key7": "3xbqg1W6pxmzWKhTzt5gTthwYKU5ptuJZv4oyYccxtLzEXxmhVCA2MvAyUqSFWAv7UDbXVTeHm44DxHNyarqQefU",
  "key8": "5Wx8WwePAAjJXJLGgbg812yPGvTD9cC8wwXWJaov5cfkore4zwB1JGQvqQhmQLSnuKSbLMZCh9W3E454xSgVwE69",
  "key9": "2Mu9Gzag9Z3hz1ifiWeyo8WYt6TsgWcVg69GPtYjAgsZ4vBNZwKe7DXfQRW3DL5vc6VWQmP59dCAQ1XL7mGTUNyT",
  "key10": "HN1ARXgprG2UkC2geDNrPPxnYYMmJnRVfEPLYaS19rA9h9t6jN4oL3sjBVQ8hnHc9RY5nGeFPsm7PsZPvJrpDeB",
  "key11": "5yqP5MNQJJxtrAQ8o9MS472r4zztruvqc2Xw613z776feKf95FQyg7oLMN6dbSWjWabc48kaN8uf5FhmT7DsZnSL",
  "key12": "3Fj3AoJqSVonpRqz4B6fhfCMjjhcpvK1drCush8y178V2D1DALu26k2Xo2DHYXv6eCgyuNyFGnaRbXtypDaMntpo",
  "key13": "5okQ5wLXmZkcXrQ8iVuyPRRm5ErEVEQTpogZ9TSfG3KDfjtCJWKR8Q8oYvdGTRakF2br7eN6MnonUgCH1QfH4VzK",
  "key14": "5HyQwRa8WnZkhPP7UJMm5mR9yVuZ8oCg1AfjNhReLRyjqwBDZKUADnLr7FjQueqrkcbKFLdStyBjwTf5dR9zNx6B",
  "key15": "2mAw7JnrZYoWpAKq53n74EA9VeXFF3YiqCeVgwRg4bhjjbqgmtGS6LS18sqQz8dWM8thQDoRPBunCuEW6XMSbfpp",
  "key16": "2MVV1a21TmV3i5n5BcTTdv8f2cpWTFVmdgzKgV5te7zfQoqZoQ4UTNzs7nnXRP77Td5VQHTVy42uP4UWpPifvn3U",
  "key17": "2h8iYQVavgeH1UAmioFhq5Qk2SEU2Qhxfx1YhqT293Dt5vnzRPf3bT7TJN3Do6R8Kx4apf3SjR2fB6dvcZkdTaoD",
  "key18": "5wYxpiNwNpQB3mzMuXNcc3MX6HjMQUmpN756NnJNPJTLg6oTvRXANscnv147Wsa9BUzwH1YecWADbJvdARcgN7Wk",
  "key19": "2osCHjfVszhTQWai3gjzLPRAmfo9siTq6UEjvNFMPSdnvsFZzvBg4akFnZzb9GsHP5Wno1dnhYBW5aZK9RtwFPJn",
  "key20": "2hwgNokJcSyFn5NK2RVkpgHoH4chvodkm662hLzqwgEzdeoJNr6gFDjs4gJ6Yf38BWFuoMmtJrHC4fQte49o4xSY",
  "key21": "4KuYjyujz9BzRtjwp3rAJx3gBy3MGyu2qNMb9LkHKTvQLPc2g1Xe7YUfonM3NM9a6nQAUT5P5Qx5UjqbDcWCaHwL",
  "key22": "VGh7SxC9XnsqXh2imXMZT8XmeuGheSWCjMS69e4SC2tHeq7js98AU1JeS3oPzPFbPJhB14cvsDrfNcdmYVLXax8",
  "key23": "4kXwYPS4GVRcRcoJvPx7HgsUZYhq2tUDTg7L6gJgbgisBSvzvffqT14Dxf8HTj8qLBkpm38TPsSJgCxG2STKquBn",
  "key24": "5TttVCGh6JPjegnPNnjPu3LX6zyYE4vhK9Q9EwhtdUBRiVAmrBJJqFHEfbRJmz7ZnRo4jyAC7mdsyEDQ3N24hVpW",
  "key25": "5vEsFT6NeonJ2w6wajhZKafiFAc9DAWCddSQkiV3wCoCvUUG8JmhL72ptJjPfw63UkmV99pkZgt9pXRMaY3KEWY5",
  "key26": "4SHqQWRyv6qRkZPbmD3aMRiMSqMb1iXtGy1A43mDXXgSZFZifNnKfGTGJUt1UhrWcUpBCeNXAgfF8SJwDmmZUD7Q",
  "key27": "637HPpFbfYqqf3FrvABZWDxanCiqVz9gGAknFF98L7WVBLB9zeafc9dGeV1h57JM7J714GcCjkJ3VA9Js7nGweQZ",
  "key28": "jABa4tUmC9E9d1FeL6J9GhQUTwfJmfy65kjRMmGWAyDX3Vv6LqzkToDmSxyUstDsXQ8amd4jYwbdvu9XaGVQqVc",
  "key29": "4mb3iTwZDn9jJPmB2WV99tL8xXmkuj7fujjYgJ5LnN2dJhujxxmCKpYYjRL2qYgU3nu3fi1UesrfgMVizaaGLihq",
  "key30": "2r4ktU1KmQsv19a2cWDgPBKuVjyfdkE7DtQL2S7JzGMhJrWPmQdmQmHiGiAbj8oJErYod3gtd3bQELmXkG2JoXVY",
  "key31": "4jasmCBaTCXpfxmXYnztPsWkh4bSQnUDCwEK9XRqorY6obyqs2evQSs5MjEeTr7UJoi9JyLPq7gYFjpgyKNBQZ6s",
  "key32": "2Bn2k6xYp1D85ByLUBs2zvxNMg2woqgHk79epnWMxew1eVJ7LZCtgjKucU7dghZ6QL9Sfqt4V9S8dq9VKjuRwtia",
  "key33": "2mVW6ExFc7GtVaJ2o1snq3wK9QpPGuxVK4oFeaq48LqJpAAzHAjZZBaJser3SZ71drrFLQ7t5xdDoBnXa1Nf6MGz",
  "key34": "5iy8wJzsvYWQGZn3d1FccFUmMcK9U5iSK3fxCbkKn92rQFWwuZcRfQ6dVz5dtJLjLx2XVp5Q9fwwqkaVsJkisSkq",
  "key35": "32AHAetVj1Cp8FsrabMTA3oSPmNZ5N7AzeKGM6yihzepCHAnyDhHMDfiKH37sLzzB5P7n6fyCaujqpgrh7m9UxJp",
  "key36": "41R25yMooau4XVdniDdZ3NoSvb54ECGqP2H7VohxpTR5D5wdKiH2yf9EspxwP5FUidy9YPRs7q57sK8cGNwRa6kA",
  "key37": "5tuJZsPzKkWgSqnNe9r8FrjYWgWWQWzfSdDX2bhJgErhDpnfitEyUbCxTVHfV8aBPR2H1GfCunv9ekTwfGjMLvsU",
  "key38": "2vFiHNsU6yzPNTcCExMpWo7895TSxcdMQz5cHBqEhtGZevUghsvsb4FPTRJ4A5WkbrLW7LyxufinXRfspXx4pQ8H"
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
