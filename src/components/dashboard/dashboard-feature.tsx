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
    "5FmQUfGCv1RsTBUp5k3b7Jk5Vyj4EYHiyjFEY5mh6Euh8PLVgfPWkUxGWZtv2cNbCXuLtuCJSjWJcy2Y9B67sgVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AQ9rsMnaoW5VpBh6mgDacS5B96BaGgTHvdbqTYQqyhHW2heWbfqQYiQfnyokJSMNJz8xzLaT5W4w3oYS6dmjWeX",
  "key1": "4d4tYvm1VTHzvUye5rtKNqu8jWuVFEtiwdLoPDkmtS6nna5v5m9M2xGmYkE6YVNCky6DnxH4GdXgpyBmEL53Ms2v",
  "key2": "fenKwqHeLAJbvX3PDQrc7unCHVvYUgkT4tMejMS4xka9bfHyWDmFymT7WQJKKcUdcH8zCXQtxK5emmivrcrAr4T",
  "key3": "5LrPQji14tW16Aa5M7oTTTeQvm9kF9JjyCGJcwPzG4rwHjn8e9ARML39w91iZ9t15ktFUmdJt3pGH8MYQvbyJyrA",
  "key4": "QRJutyBjKettgH5JBYkcKsci3iTg2oGwbvVKhMpuDx74x5DDLtHEvDESrcHh3DBjrpA2j7fvUcqCY97TvExNeuL",
  "key5": "4Zgx65RNANDvyuUUzL6Z1cBg3sQEoMBwYdgGA7h1vc7ZM6gd6KzU8Eq3zHyMDRwRoWKrt8YFY6QshVSZHgxuxrpU",
  "key6": "2aquiB7zNdmvm3PqKyxPDDbAwZPkyZ5AYhkwGYHRoziPn6BJW9d7zC2GFzut25yVDfdMm2NmsJWUqnFdBC8cGV8y",
  "key7": "5o4vnWRfKwr9hf9ZrmA44FVeRXs3ZkKQCSdNw6RhTncJGbo6ZdeRnLPomCGbn85BFydpVHZ8JsEFUZHTSYLiPVDW",
  "key8": "2YntTV3t56J1wGGo4f31iN56TXXCCPxLQD1jVCb37VaovqyJfkef4MkKVGJxh2ZZGYogUYSPk1guPndqQKV7TXrY",
  "key9": "n2a6KnPPQkHUsE8wrVouKmGui2vAbeVXJH7xvAwd9Gj7b3sEYPppQM5s99GFWZE4LEYY2YrzD1MMcuqtFCPVSTp",
  "key10": "23woNAJxeaSSQ6ZQ8nyA55No91WoLwxMpP2T9p9rzNGHmCjoUnftkrnTgs3LhkNxYTeqhWYntdrGm6xxGSB8N35B",
  "key11": "4FTD9fADmmKJdrMMjDFNas1KWKFfrib7v5zh41Pq6Hsi3yH8FCyag1dyRagy5HC6cs2zUjQmNYrqvMHki1uAkZAi",
  "key12": "aJFmcSVBihPGqxVyrjCgbR5jXdZRTmc6ViCi7gVLaYpnzNJ5G3DQDSwecLdsCk9UEiYFFtSeagqdBL47WdJKKdJ",
  "key13": "41DDukiWah6UExfPby48prdaXHUo6nm1wo9uFkfK8mMP5BBpxtap7Lx6sewxZRrqApiBFQjHPF6MnboE33SKkFi5",
  "key14": "5n9j21Eqj54goFB2wqDFpVYwziHFAV4ELESbDRXbH51UiNq3sYQZgXeAgu4gGmaFH7URw3wjKF79nve7rP6nL5kc",
  "key15": "3xDMv4MQqoXA1CZYsCURrzxhsDLEcngEGFE4vL2wETScbk9gRfPYsid318EHJYD6qYjob87XhRBuCTZnKtVDg44u",
  "key16": "r9Tkgq7CHA6b7ycs591cH9JXqj75Ki7ocxb4rdxKept2fmpweukZL4A9hNht7seQEiBab3v5iGiYmjGe9KfaHuD",
  "key17": "3nSiGJYggCo39mwtReQ5bDC7rpmVNq4Y9ZnhZoh1MaaYfbSbQ6ZRskn52eVxwVverCKpPPjy7nKvzv8hDwGgPCoH",
  "key18": "tDaBq91fdkahMia1vk32JnHMiXMLH7BcQKgMdvRMLm7uUHQ9PP9LNxLe4FF22VpfkLA1ydmToFeNdg7Lnz8w7q6",
  "key19": "3S7Xpumq7dnM4K32kxhhDyb9gbiqZuj8yRV4DyNwvLzAHTBCzDS9XeMURxdsKmu49qNYHKU4TtQM4guwVb587bA",
  "key20": "5ANisD1Daz7XKUQ2mM6c81mCtV4Vr819hdH4vQufQyzpNeCbqNfAwt1cSgKcTRXKDJYy1bgrFqrKKYmm6UqAn1v",
  "key21": "5BYRDFNjdbLUJsPmrApjqDo3jFMAGPPZrfAA1W4FtkPc6PtzV3yKooKxNRQQ1zBRMFXJheLg7hWQ8BNM7FRrUFHe",
  "key22": "54rARd19q37dKbDx1fJC7qXZdRz4qyRLE8g8bV9WwAcDRdHjKjqp5t16DGojy6o71hU8UqM29mnUcYhD5y8pFoDk",
  "key23": "5vmU3AZJNW6cJJNWxZ4ABRFjyTBxqZZG9Xmp3ABZ8XoHiUykxe81dtXghq3aC6uNB3FEdEeLc2wm3ckHYzgvp5y3",
  "key24": "ZhBihkeeFGRxU63qr7YnuXCBNM6Zy6JvPeGab7XFPDv1bTpwfyTNb712yCEzQ7BRcywqYGv5QVqzRawNs6gUiBx",
  "key25": "Wtn22ga9yCWiRdKK2r8vcR7ghMBX4wxAeZmuxgsG22ZFhsLRxh8C6pqH2GdRAHvS6FmjQ8aJ5H81cFdcJnfKMTh",
  "key26": "3RiD9MrPh3KdCRCzPpbCXqLzBccUEUtZAaS4KVkar2y8SA3WejxP2Asof8w6rYAZvWxvQJe9wae1nTvpxdYsEiej",
  "key27": "xEXkdBDCmgMpqthJ9m2wFYijJFzihyQHJSZVbWJ43uDYb9zgcAY7JdyMxEv3P5hCq2f2eLBgw4W53bTrx7yb314",
  "key28": "3h8QDXErkj9CrT5yC4jadct1zVkGDNnTVqmo2RgkKtRYhe3Ziv3Uv7R3WdFoz6QdWokEQFrQeRgFwXcWRptCEEdz"
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
