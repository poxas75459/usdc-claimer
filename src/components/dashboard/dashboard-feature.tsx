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
    "49eXkoVbutGvEXdCx4cVrSV2xTi54E3hyFN3fNJwvM71ZcPbZTuodwBARAjA5z61ezhfQLHhVkydpwPRzprHDFJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a35fsKgGMyTCQSLN5mkFdo9mbdnk9g8ZQBVGateUBw53fDAsUxqfTMFWUpLgUJzcLNaceZzpSMUU7hiXJbQJc4o",
  "key1": "3ZjszLA2uj9SHza773WtjWBango8Qj3ceDBy7boewgzzGYqKQzRgE3caNeiBMT57wkCH1xkequSST7BejgTg4ZNZ",
  "key2": "2d93cQYKP2GqZNNUPoHQbBACvge9f57searJbfgGFxT9px8jvSqv8yUbCukCViwgUtABK35DHS8epNjwF3mDLZcs",
  "key3": "5j3uigk9VpW1QsrNS71QdhVJf4j8SXyPU8t4fKfUTrpjR8D8MZQYav7ce4VmKgGzzFGR3DYwmGrVvgtyQXKw6b3c",
  "key4": "3SKjacFABBmn5VWMeKV9vxaWkH7ZbjoWnEoZa69uFWV27THkUwc2x4TnG6QCACjf6DTbjMy49Mi3hPBub3cjEGcS",
  "key5": "2oJvQ3PLuh2iqQBCUxaaYMtNCBWCDffBQSFB9iaxC97aSXWXav1boBTGJPZnMMNKzVU72Y8uh5EwRqK4wwsAiWJ2",
  "key6": "3YNZymgxCUSkcF19ydGRiCgk9JcjUhvSFQHiJjuvGZew3DU9xhN1fHQbVnP9Jz8sKhkHmz7UyE9D3fqYfv9Wi6S3",
  "key7": "4YFyXHW4R5YnHzRSC41hEj8MLQGegVdFcGKs2Jz7zimBF9zC1Bvo6uoLnPfBcBKgBqNeHWSK84kVuiHexxS8JYyg",
  "key8": "3hRRhvqmoaFmiMWdEm9u5RgpVkS87NoyTboB7qHhpn7ELea21uDkNVZoSm6pcFTep2oz7cBrpUp8BMBh21WeDLoU",
  "key9": "5ycx6HRBJ2YjFHqcMB8e8LdPVEzg8fbMQR8YfWHRD8LxWVGFUyaDpsLj93T4TDmMnbtZXLojxjgycVt7xi9CErMD",
  "key10": "4EGLWTovYLutsjeFnBko3Axv8Kb1NM9D48mCPV8pfKN7nyLKaE6BeXRQBjKushKuibvXMyQg2YPKVLtbMW7xLzTF",
  "key11": "3NsPjxor9CCsgmTUMsiSDjSSwHKq8M7t2EbXtu6voKxU2gz15fyzEnLx338DshAMnpf3aG92szRcRCAh296EjFwp",
  "key12": "2dnQe96Y6Bc6WKaGMoDoo81qeJJdSkS5dVZXUspNR5J8uw5SZdW51tU3KYGpTZHBCZShyBH5wSvwF9aauMzBhSaD",
  "key13": "3vKLrcFUoa53k6hw23ocCQMTpZnqBrpHygPvvYbFjZ19pocw3ePBvtGrxQQ2dHwiEupo7dh3cUuPuJPq3W6Fi3Ds",
  "key14": "3kPFrFvSqWoDRxWWZX5r6UAmxXrSW9wjJeDAXmqBk4q2Enq3nNBYV8un2dWkgNk7HUKKe24Fpsw6DER4unhNKUmV",
  "key15": "2xQkkz1b4GYEawFNrsZHySDsQZtUcWEvfkwH9HUAezr4KqyYxp4EhDPE6UTJS8Lhd6XUrFodQMSqoX9TgY12sGqe",
  "key16": "2zQyYo8rNLSKSwRer1QcsvzKHiguvsMm5hi2B9cwDtTTANe87UdEJ6rLwuinRz9d7ZdNPE68xzUR7TSUxf2kPjGu",
  "key17": "K7U7pa7m1tDRVMambRNK5wvrsiam1QpVJV9rnJQPfzcSB58xpFgEED5PaJRCrZBDGKLJhkaBEoP7b3jHgdoYUAh",
  "key18": "25xSnPYVELVvRX6aTSddHVpxiQos1Y8dTkgN9E1SFuyk4iQKN659tm2spvFL3BxDTawFUF2UT7XnQbhYkLrTzY7R",
  "key19": "4nHE37pVRskwCQhVSHUCYerE5hMn3be9PS87rMiZ3U2boVvvHbuxG3bWVeZP8M1K6R6aUHfGftFeHS5tzWdQMzKg",
  "key20": "8SvSXRAJwkxKQvHFD21LPgKfTHG46KQfYin3JgQAyyrzwMYcNXhFEitKxAxHfyBTgfyUX5kFJFFDiZngHCeYyuA",
  "key21": "4q8StjKqQmLakbsrRFnQvg92XrT4oYujgYWJFp79pAys9fpHoBrEqbHCEh3wZLjUcGwFBKjvhTS63zsBcTd9M8VB",
  "key22": "3eh7irUCHZpUuyXnrChE4bbnr9MkjfJRxboSkJRWVDuu4ZozPcjdMnkptSm8DD8tj4ZAgpJzoTDRBgutay7GWGCo",
  "key23": "2TRzx6jdM8xWmUcA661icKuzoV4oEhAEBvZby1PkwPRtkJLudfrbiqPxT9pptVQY9CJqyNPUE3uC4FQxz6CHgdij",
  "key24": "5imgZQwqZ8hg2uJDxTcDuDmwRmzkMtSJSEN8bCK12Wa7p8KdzUu3kBCcWWQx9RutZKb5yHu6YT4MgUHEPb63pYtQ",
  "key25": "3mmXJYiRKWssAm7fWbLxZ8WGrhPpvp2aMVuvDYPkZbGZujx4jk6bAoguuxrtMcbFZEg7Av7Xx2j4oe2zVMocf7RC",
  "key26": "5q2hxVhsxcUrPDhnYgQR4ZB7uiPEgrf5uYVgGcMvBjkwWu9P9Ff52u65W7Kgm2b4Jo88mfXgPvoDfnmMspEDoxXg",
  "key27": "iEQcCBREhKg9XPNmLbCjeCQsqad4sn7BESVgUgrYqgew9g7yUTBque4Cb3mzwRXHqAS5A3utcuSh38F9D4BGEsU",
  "key28": "583NhMMSSug5iDobFwzmgYGzLEC2jYS1zutyvSirnHdX5nGnAnJak4GyAg6pVQDDAoEw8ny7cFWFCE4aRu1yAYbm",
  "key29": "3sQNAfL878V1gn8hNpz2JjRS2D3pt2DxmexN6dkMVTFus2JuVmqUySF1Eu9362cwRkvGm3LuSbDFMRv8MgZbjsNM",
  "key30": "2MXyGfXL57SWZFqRZLmtDGjR8tEUgAzmngZWvkoZbeda43X9Xvh8wKVMnY1KuTRwYFQAytGyNWLVPUdgFuFjqN2d",
  "key31": "52bjGFpcw8uqz5meA8bncrDL8PryyoGzDQ3tyxCH4XENFvYCRnwmGHPrKyUbsFKvHAdeKzz4DNhZDNJWXiod6BWr",
  "key32": "2i14rHC16J8B51GTtWtujcWeYU89F2BQ1Th9GpHidZit6Fina9gAXKSHKa2usovjDrTDtRQRdyLKZAymGz9iJPnM"
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
