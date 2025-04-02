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
    "3ykPWBEmsm3yYFfNXFZ3c2KheyFtMx2mtAPxmTAa2hsqhgC2u4iuaYRu8qsAaYXfFhMmB82ZmABjnNTCuDEMYHKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dk5S4yA9AvUAabUACmtHYs19rGGoazAUyoXLnRqo4SvTA41iCSANeue9SG31QBwezJeDgvZAiBSK5wyiFFc1BDL",
  "key1": "3NfHs1Aqb4esjLEFT1c4WMaoDB1GvjD79HoXPWkZSoRjebn8ZMeANooDkFiJzkJ5bJPL7XEREqZ7ZsDusDbAqFWL",
  "key2": "FjmS3ECK5b6TuhSZ9m6BM5Q6Aqc3MaeKNmhGjZQ6LKZnec1rQogEAniYcaaLm74HChV97veejrEvLARzHeHigP5",
  "key3": "4GMFmYDKFCUj88NmH345Kw9afizjCL7rqtGERJmuTuQhYPU2rd2HQEq8P5P8xArLcXEnmxaNoBXoSyV3c7zn3xpW",
  "key4": "5vGMx4tf42hPH1eKMaQcpsTPs2FU5qCMZPfhqeaQiZVqpGmp62QDh29sh7QCUHPJWLGMqtJ3W53ZkTSmSsKZLv9k",
  "key5": "4bW7EEUaac42yjgSovBmGYykE1FpsRrCPduFGbfk8twJJAbYr2apWpj4XkQnmGH41nnwHEPM3ecBiycyUau6yzqB",
  "key6": "pL4a2DN1gDhQxzLEkLtDpiJ3wyuC3KpKWLnEzbtoNYVadNdmG3bqiiKEzjDuYTieU75GTzPBv12XmtSN2DEpevh",
  "key7": "3jUK8weyjdKf41ZUrh8AmJKj795nUQRF63oMAT6uaq44WXPnAW91Q5toRYBLrdzQzaP5BJCHoYKDA3NEFNrCojGJ",
  "key8": "VdLqjuuNUrZBGTaNsex5WdAU7MLzN2bmipkuDhySuPTJMUrcq2hzrrbwwY2HEd9xhMCWmUXnpkBm5FDPwKb2XWD",
  "key9": "4vKQ9qak5tsdeg7G52c8m6hHNb5KAAU49nKgWEGas4b7HSrkJjsYz1wyDaW8C5VZXjX77ecY1EAXYQ6ZNG57vPJu",
  "key10": "LjFqXnCfqCio9MBsiHKFW2MRqqweVqAdZ1Nfc6usfxQNYMTafFLZAR4CLoB1KackoPGbsjuCifwNupLteyqgapE",
  "key11": "4QZ8kVRaDESf6qqQNrCo53RnCHBsRcxmu8yiMq8Gn56JeUXWCFb72Eqbcwtv6M3KwuZfxzi3qA4c9xN7ZQHn7xQv",
  "key12": "1GwXD15Aaza1K55gTGQXGSkwiXny5cH2UHnoMcT17ZaXrFGkQYC3b6QMZAQBpDBk3GMVDsRcuBB4jzktZ7dw7c",
  "key13": "26B2R1PDgfADvJuTBfYnhBGEhdbYcXskW1CYTvL66fT5kfZ1Y9bJujj6hWZ4KVipYLeoyrNtjcBji3DTpE5MvZfx",
  "key14": "4rXXsFkjSpcrHF4JUS4cH5RxHBm4y8PAv3ehqWumYjUs6rwbxbimEUTfXgXomvhQnAKEvGdPJDi1wcbVuocfokxa",
  "key15": "4KYBYGgqqqHUXVZqPw4LSCHBfQEa6K3GhPWKAnqSB3pfnjZ5L9UXLZ1pnWTue8HVNce4o7CEAQ33KBPJdznUVcwP",
  "key16": "5JdDax5vLa2KoDrnkRVCsNUVD6NBW3eYe2YjzXVQGvLGCpnC7AX5TNT1DFQ1Wsb3KPMwJb2JQw5ue7euMBmcDCtn",
  "key17": "RKHjj455UurEj96wUULGWyx3eDyu3Kkr86VzxstaA5HygFos6GfZm7uXcACnRmKUyKDGZgVriwnLkmMYDoPsYBm",
  "key18": "2HE4N3QV3GJDnQnaJg45bQGS3f5e7oLKqFGHk2VGxwvihqMNRv131o54jn46LbeALNz3zh8RfByKxPY72cFtSZid",
  "key19": "5fP5K5Uhu5sRvUY36VX5R6TNwiandprxkydYUBBu45SsyMoEbdsbiEUoixneLKkQWGQzkv6eDtEAuoFBPMaHg5tG",
  "key20": "3kPqQtYDrY5Cvn5UkwKjVRdvDKnYB6udPQ8eswgZ8Uoh9M9xteKiSKXS3xQUG4S3cpDQse2BjtBXf9m96tEr1Y8x",
  "key21": "2qYyok49i1rLoK63JvRyVfSAKE8CjZY8tQF6NHiAtMP4QR8L6R4vkXdaa6TpqNhg5nsjQxkAMyTqVM1QKuTriAHq",
  "key22": "4imD4X6ABYukX3peDnxqKwTjq279zqG97JR2GqtVkJgykbtn75rcezXaRKM47WEYyozjwqyFb8mncJbANU6D98ba",
  "key23": "CefcZLgiEwRbqW7bt5zXcti5EA6jvQAEju8XAD5pGdtGySuaE9TsSfzRnqXDpucmZ3y5iGETw9V18eQPnvWBnqn",
  "key24": "5UFcqFj8eSQV3imfwpTpK6XZiRHowp8ZgyckT5ZnHaajkkamJtWDhHp3A7jA3y8n3dehaKYgDXudL8DgMi8Whdbe",
  "key25": "53cMudB6LfzwiuPX1MbPL15rzybCDgLDPcn1peQYoodsBPCN1gKStC6RyqZ9yjzCQftEeqG5M57AWPfGJFaMH9Ys",
  "key26": "4R4dNf4Er65xdwjHcwjqC7kmePWuo3ynmikWv83ujVL9H1V9ZWNcdofssmFgikFn3TeLW54ngZHZA3xk5UTrkbfg",
  "key27": "66UBgasgYFqhch35bhUYJMUyWSJNHuQN8cM9xhU2PjuUyZY3rLG1x8Um6gBgWLZ1NRNqkaLzWfhn7mYTYq4PgoUD",
  "key28": "4AhLtYDkmdJCW7MYEVZ7YSTiJMGP1sYNPfc6qR8r1DAPiAEaq9ZDnRP8Q8sxWfYY2JzNfXN1cpaL2a6t38Gbz4gb"
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
