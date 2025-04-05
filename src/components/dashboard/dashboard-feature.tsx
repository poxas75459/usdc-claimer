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
    "3Smre26u53TauFZuNZc6Ccoy6EyNbCNJTT9yaWymEVZwgti7oDFF2peFdNDbSo8g76gucz4A2Jhtv3QKYufCwhkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RCdf52zG55L4Y1Y6mzKgxEhVoLCdP4NrcADrZE4VELfbmLaMHE3CsChA1P3vk1ndgXSW8HZu4sAoGUJP98G3QLz",
  "key1": "2iSS829dcYPbMEZvxGQs86FwRxa9HDrcNSYPLhySsNy41tqEFJvR6AXGbLSTT4UAqJt36S5s2HqecrQmREVmqzL",
  "key2": "2PE1T77e8HyFD2DtpnaTG9v5jJ3pj53fJNnmcsAjZbD4Duiv9saKjcPwbVgmtPUgLZjf8X7vezH9xcsqWMDptiDt",
  "key3": "5YscNPscmLSr3CSkFCs2ZBnZN69aHF3uspB8Qwb7L1DWLxoJ9BN51M2C9qSd6FSnt7SRfEjcvnRRNZEjdgLJsVs6",
  "key4": "48QS1zG5Q5AxQnKPTrUq2J7U2dcjymBmWKnYMWRVMWF3JaQHMfbpK5PVZwWkhR2LfuV4ULoKCAYsTUzcdvgXSY5f",
  "key5": "4zogUc8rW32SuMqfw7ZsU1yKNkGr35oDDpRe9hGRZXowAmJpSkJbpBjmJmPa4ZmaVqKxt1n9HS2ZULDSGd3jYcbV",
  "key6": "2hpMKpLYrWoRUEZorktF7ZZUNzRbR8XdwQLTUbNG4Xu5GTB2zUzeWTou3XU7ZHgEZJbeUdXU4XuiTGkHpFATkWev",
  "key7": "5Rsv759BbHu5RusBCWDxZzaiwD4CE1CQALc9wop3XTAn5YNyP4xXDAU3WHgvJFC1FrZL9coNQ2gi8rZ2Wkiz6ES3",
  "key8": "AH5F6yVDNsEq6mq5amuuynPM3hwu4wCxWHapkaMV1H8ZeGux54EASE5iScGPpdctRYTdfog4i2yAR2kkP8wd2t3",
  "key9": "4mSfsqNcZQtuyAQ9d9VVsZYBgyH4XaWEbY3PAfkhYX44KfKDd5io2xA7saviDKjWcFECu3CPRrmb5cPNk89TZ5eG",
  "key10": "3JXhyyZn7UnqosiTBuafmirjMidp6apaaP6z8FLF82T5q1uYjk6vkGPkeBFCT4JU1fxThEDwrroWhCocuCiVYyEv",
  "key11": "4KwgLANdbUyGCrZTpPN9zYpb4yGcpsWqoiTuHXVD3dAzyeRKUvE6vMYdvAT6Sx9NeWMAUuViuHSKpounnbqVQt5e",
  "key12": "3vpVRWFMqzZ4WG1HMjVp68qXot8WYRJXk6LEQDk8e2wDFDhD9fKqJaERLLikEiXwxkHu9aYNSS3Ek2gAJdtkaGdE",
  "key13": "2j542dxJVMEvqv1WyYexPmwFpoofc7geVsw8AciYPhJeggFBo2dkfS1RMTKuGgiQeHbX97GPxpXUjRAQa7AHwSQy",
  "key14": "4s2DL3odbSsfDSS1Cn2LL4fRHrpvhLkn8xHyPnrMs8HfhN1FUyS8gj6JenqRJwr6J2eRQW47satYosoaHpX9pNYV",
  "key15": "j1Yo15pmDmhKvKvc4cqakxwLFcBSKCVppe4dv1UkWmNyUaX5nYkH9heTG62MwgjJ3Q7SmfjAhkY96Zd8miFFrdP",
  "key16": "56RPTuAST1LAJiGJsMqe5gnE5vkebTP4wPT3ZCrpmTn4WErAYAAyrQcC9VwcjtHidF9HFrHNK68SAiAQggn9gFiU",
  "key17": "445QzD81NmZuhb64q6bXkkAdtGHMnhwAwy1VSNTiFYjRZ6RFUVXNa1hFnVaRrtvCEHjnmoXK2ZXj5ynXmBYvyonf",
  "key18": "66nBtWyisnKGoyW4pXqRDvPJb7c9VyLjP4zfUixUFhgujiKEs1ATpDK9yEwSX3PjGUYzqLgwYrUU9MEoHPyXyqDt",
  "key19": "7tyytXnTRmj1iEQBQS77X3b755PQHXF5Cq7zVVDaXVDJLqZCkdtZQZJUWbjx9XcbJwknZEim16BMLCM1JAT8bEW",
  "key20": "3KpDUvAfCPNqFATrFhj5d47Xovb9SQn8eGaXwemGEuJbDm7irDwY4ByKtoMYwPCB1dhf6zKU6NDnYAejaGz5ZYGr",
  "key21": "4b5Mf4PfqJACCskhpbsF38p1hqHobGauMQ6BmzpcDQ7AivrBG4VHeDCEnkBDtuKzsDo6a256KeSWtYrsLe1kSb6J",
  "key22": "BL4iHGspkSHozpp19xttXgua5HJJC6j8r8o3us515vWg8qt3Aj68gF1D4s6wwsmzfnf4XvPHpnLttH1vDzRCdcp",
  "key23": "F4ykpqVyMRkuuPHWVw9n9jJDxCXV5sesJS9JWyH5NRNG6iWWMBiM2xpMfReveQvAdcbUbRCGppB71Duarx6M7Sw",
  "key24": "epNKi8cgGb5Qj8CXxXmXYhQbpUTY1aix3FVixjzhMLRDUNBGojMwVdCphHD47rPretPE1fs1ur2UdxuuinufjC5",
  "key25": "Lk8x6CMcSJu67gJVthWqPYFP5KGBE2srA47qceDokiGEGah9tCxVKso5pjSmEXvwCzNbspCKPixWwVxd1y8GD1v",
  "key26": "32cLTNwMZhzwMoQVeFpWspWELvMvL2dyYB2rMH7HWxxQkqx24FCtdoKhY9UniqTgf41qPjcofe8dSgcTC2YzCWnC",
  "key27": "WvU6FPau3rHb89CJo3mmT8yRLoJo4r7VZmzHtbsw7PXapeg9QTfY4fc7RJD7nvzwgjPuGgUWADoexvKFeHWmsZe",
  "key28": "25oPrqHCUUzmnUnuiqBYyPEbCrFXzZ5AWdhuCFRJf9ZozzSV9bHNehJpcGSmZDeR8m1p4D6UzmuDkXjG9j8vzMHA",
  "key29": "5ZU8Qh8mW3oER5X935cpTpc5VzRsuZVTayDxrEdbUvfHwx5oUmmX87zr4ZbkpQhVR2MRmeeyZDwxx1yihXMPTxX9",
  "key30": "GUKmfYSwJfT5jA26rhWDTZrobHcohG6iPz4h3b4aQ6WoMH2pjd3LvkuSQtThSfhLDRbjXanayCUZJGSvKx7UGtq",
  "key31": "5LSaU5DxXaymCPvn94Fdi97FiWiM5KYypacGrmxJDAPGUCHUKteMrXqC8hLW9Xb4ZuNqi9FDMvWtSNRzdD6yZKUF",
  "key32": "3YzQLxDuspg8KvsvL6Kk79LVr3zEaT7ArHLZcygLDVzddnXA1HuFMZWeLpYf1b2ucee84YVpXJTorhfJXNvS16Ef",
  "key33": "2EAYjcHdo1QaLZrpvqxr7uwPWzjP7rNLEADegCzY7jELckocvNrAipjvasYrYBymWRZ4MFqAJtRQPxhH6hxe6mAS",
  "key34": "31NEPr2gqeGaKurgm9GvtUa9TJEwSBLWasttNnYt7gvPwuBk81DZdDJRWxxGTePcGcY4z98euM8tUb1vY1Tz83b",
  "key35": "2XDKV8ty9QbYsqposxDP1GYbB3bKrzZFG8u9sva82z1AoTjGWLTL6ysP4EvGC4jGitPBjgE87FnDCeZf8Fgwz9eh",
  "key36": "4yZsm2Lm9mmfvnQyx89sQgMGHzXMeTjCFZdNu7nQArZFGLNqwq8UKgeqvT2iGjYiuiUmFa9qzkq1gPcu7uuQsg6T",
  "key37": "2ukAFkaGabLJmW5WXpJkcGDtLyGzjLZ7y23TLDDrcfDjqpu4TFAy36pWEpkos5HDABPVHs7GbVMSeo4jD5LzmgVs"
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
