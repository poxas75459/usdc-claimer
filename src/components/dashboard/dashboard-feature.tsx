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
    "5a8keJbxMyXjzvJDku23vNsaNR25QtCbLUBC8UiKP78wcbSZqEXCsRY5JdTyba6P9UCyGWWqjZBazAbW5TqMoXmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kSma11rZnjRmeMjLtgXeqtZReXxu3nHB1AT1g8KvEkmGJWAtAEjUyjCrH2Bg394btxvmmNMDrHNmKooh3jKWCK3",
  "key1": "3RfjQQCmjDn77Qn1px4CZ6ScfiA9SHP9UsR7Vhb8K7JVhL5GbNEvBTWPRoBoBucoEZpwhdUjZQZ9aDVhYPNCH2Uy",
  "key2": "4nHLX88q3BPqarVhRy11SKE1NESZtvmeeo3xTpqPFpYWuhEwQsgjLz7jq6KFpKjcdSAcVN5MTP5yeVAYGxvB1jQs",
  "key3": "5YL9aQbqbzFfPyc3Ct9zvaM6ujp6MCidwE2kErHLaKNBbs9111qvRNkSY6vACZxq7iqADA2FQmSA13gs3XbaEWX8",
  "key4": "63JGcNxPbmGf2m4pvKjbuCBoUF71Z9Fd3neaQkhHixMpB3vkeBbqtw1UQR9bvRCRJboakpWDZsBeaSasG7WtJqCB",
  "key5": "3TviLYJx7PLzgEd7n5hbx5iXEEkBeZRehaxrGBdmC2tfPa9iRaiSffmRYgUpweVVNsoXbiNtoKc4EhbDpGfaWSiG",
  "key6": "vEX2d855gtJv9H87be4xnY8QFUYxEf2jyXP2WKLUB3WTCkEiQmbbMLvPooUseB1ajH5TGfECjXteTAeSUqmwJ7d",
  "key7": "4MFzNG2RAmuyrsNeM5JNNH1z4qqeTcXZAkxAat863WaLJs36EBh7LHTqFDyAPb31UeJYhF9uwC4qsS1qYYbRob9U",
  "key8": "GQMyUhTqxeTHReEJ4dxCyY5u48MbDY5pQkSKvQXh8MmVJ3wLRzJK7NMqbXF922DTCgQ1Cke2ox36mvrqQknQ3eq",
  "key9": "4r8neKS62EHhc4opYnttpSKYRt1gyYdhzAaVppP8ZcUKxf1RmTySJFctLQRkudjT85yumqz7BSUtx8XkE8MfRByL",
  "key10": "5bCroP1cTqEYwhLTTzymqe88da5ftCKjw9ZrNoK7ZEKvoEh2eRui9tyyofhB21bQrybLnvwx53bCZWjwx9R617W1",
  "key11": "5P55oLEFwtj48zZKDWqjsEse15jjfbDq91gzdhUosQ5MRE7QLo6FH1RJhUQoUPgyYAE5NSdqHrPfXqeBkLmT8QJH",
  "key12": "21MgiBYAPVKGFHP4Ek2Pw9YvePxZMkWWKVhRTvQs2dFAgkwELskAX9JBaCYBoM8DZBPczKcoH9QxE1AudZGR1Lym",
  "key13": "2xdJkrvwLwngUGrWSq44JHjdY8m968tDECoswkMVCQnXcWfTwTadnyC184dYnQkLRUqeB7vhdtqjCem66rRETdrb",
  "key14": "3DyFaFC6iCE7jStWagagMJnoMbhbTLtzy5iGCAV5wdfELCFYCQSm2gkyhHZfGqNdyczjMzVojZoSpdXtTpLAbUcm",
  "key15": "5UQeCqgHbRkJiZiUdLnYmQc4R66A4ccVfq8NV6awtasZka6RK5w9bP6vrdLHFSwj4oZg1vszgV2vyiTisQa7ReMC",
  "key16": "4SGGyRgKt2FzH1utzBbhQxg9SCUQW9jU2NTajCzR4jUpxRRMof3zaoLjaia2KNgAtuThHwE9DjCKYYKGseUW3q2V",
  "key17": "2yq3qUVu69A6qrbAuNk5LYWew4hxdhZS2xHge6b26518Y5AmB9neUJjhLcEirpREkaBUCdM4YTZQjVq2CmkRRAmv",
  "key18": "jfgJdtPWioRzRJ5c89xpGViYzoo9Pu4xphe4v8cJ6ccW1TK2yUg8Z2sWTSavsjvgZXD5jrEE18UkawpjH9CUHi2",
  "key19": "2dNRhaFr8oPmgGgZ4VT63m9KUx9yKg7PUMRFGtc8yg2LSujgfE2nVghiYVmcvW1Bujnz8SvcuuA1w3zC8vPKyiUq",
  "key20": "2JrGCGXbK6AZJoctYTpsMrJSvQQ25iWipokYuyKYC5YAgLSkAj2aUpGfPX82HF6LsciKr8ZppyTu6cuSFwT3RMfo",
  "key21": "3UT9tXaRhNS9RbuDw3k8abRA667LU21J1WbVVucFDqKBS9FAjBTJTaqGgys2KKsQJzq9XpVDhPUMuzUiWkc7YhgM",
  "key22": "276V9SEuhYtGbSHSmt8aVzgJ9PrCkguoWzwqXkt5GHXqaR5yqtMAybYmCRx4vzVS9AeZvdfnBzgaWyDKGzeoCB5J",
  "key23": "WUntJAxYc5KPzti9M4fpahdZ3GAEa7FRbEXYJnu3gJ7dNCwnVF6rcevCReGN1wt2XcYanZ7yQm8Z8SAFd1q64PF",
  "key24": "2R4rPqTL4SaMd8YMekRxKgrL7bb9BRwSTxAD9mRoTeL1GVgdXnxC4kkwvpen5jFiD9RT2i1AZdBymU9KkU4vuNdv",
  "key25": "HZtSR2GNNVfWDAJe57xY25KJQwYbQPqZcmoGiKA8wqDMXNySb6bT86dnagNnbK44vPXN91zvBfEkgDQ7T4G8bHx",
  "key26": "3YexhbwWssLhqbetZqxCCYMrAfEm8xWF236LDpyi613eKaeLoBPhzcssuH1S3WWKgboc3XKAes9ZgQwrnq2PPr4B",
  "key27": "3nxUoxb2mreEkH8dFdgnFXYfyAvCY54zAfcds3vukgCuKR14H8iyYAU5cW9NWjizTNsa2rFKUiSWsKFDgTSzFtrn"
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
