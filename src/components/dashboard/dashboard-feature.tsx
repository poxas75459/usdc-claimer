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
    "5dcMBpV2dLbxkRsxKdRFNht46UThKdk4AjrGCCn52dGEYNGDCeFMYcsdeAeMRFoAghk53qqcBX6wvy8nhe2udh28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yy7AvDpnP1gfS2XejzofE414uD5F9P4PbSiw6Bf5F8dDSMkAwBkFW92MPssRmjT2AqTY6hAZBUtbNCSRZM3UvC4",
  "key1": "5BLAC8uCTidnjiGhvVEMNTmMgC3GGsw5uj4tcPnAnYxWfurv2FWRuwzoDXfwzh7tCEGQt3MueYTjgYFZpntUJ3UB",
  "key2": "5YB8dyV8kDFGu7Qf7To7jUd8BaPfEuv9Cqy7t9L23a6hX4uC6EMChjhZag1z3Xyd8HypWfkng49sft1nU3mxT9Eo",
  "key3": "56B6PtLt8VxsHJqfjJed28wba1DyHmb16sHWerZ4xG79FoMQhx8fwz53jCW7UXGz7171X3wD8R7PVLPscmTDp2wg",
  "key4": "2qxXodBV8FWdSEeVVHEui2ajM2k4chyZ1gEJEKCCVALhgVCG4pMfUFSofcUAk25PNJPdbgPZMugdk6WjELVP8uMT",
  "key5": "2m32sFFFgoBiTzCKujf1Dc3BktUSuyncMHAj1WZyJRJ2AKbwpnHp3xDBzjYZ8GrMiJb8YBD38hhVNfjr5RfZpiBR",
  "key6": "3NiyaY92JLxmZCiivcqHbVTQSmsBnyFvDNZ5mG7mdqmks2gEhZdgGuQdHyYGZAZi2dnBNzMGQQ9FiBRjvPyJQ7rB",
  "key7": "3RdtrjZcF69FSECcGu1s9vvfF8Z7hBww4QikQ4QtV9edLFoKWfEtduw7xups1x9yGTmGB9jHxwyPQHbu3hU5RnXB",
  "key8": "4TZFkSjF4YdSTPgxyJwZUJFFCGyU25Ww53xAwdaKEisFkjh59zKgMoiM5ia1PgAYbtujwo1s6hc16p2DLTHBkT5N",
  "key9": "58y9oWNWz2gQNUz2dQRmBGxBkLby9LF1wiUyjEf2STdys1xnGcYHL5XeQVcdgHW5qyT1AgktRtMPnhSKiBgB7i35",
  "key10": "bHbz3KoHLdJanM8jjb9tRg9Wp8KTpiy2HwXXr9ppqk19vLd4X7bNYKvgoEki16D3TPTxpsoWmcE43PHEfHmm831",
  "key11": "2ACM59zw1CVmWzJsjZKW44sTmYWC7F8hKudLFCMu39nkY8ijgmrSZF6FuUXYJckPmqMgQkxWzCg7ZNRBH4EsxH28",
  "key12": "nhr4vKdA4An4ArmgEFenv12eS1ktMrBRtFt82hDx37N7275ctWt2YmpqUEyhj2cSuJ9FJELiogpic2jR96B4N9L",
  "key13": "BnLoKPE9HgbY9j8jca7GHUm1rLZPx7qtvB33vLUqoSj6Qq3KUXcCr159dmQbF2KNK2KTvza8uNeftaZMDneS9H6",
  "key14": "26t47yfete7LNvar2sztcSL2Etgr4wN3TiBsuGQuFtegMjNHJhj7tAyXa6EFKTZWd4mzG8aTRN9e7ghqWWwv5RFE",
  "key15": "3sK7JuoVnPkacXzhUnjXWkEUENCR3cewzn9rSi5kc7sryFNbkWMCsKojGaqGDiBz8giVzNeZKYHF31NbgZnARiPi",
  "key16": "GeJhoUu4KKYZ5huYFVE3JnYyoi6fAToGQ9BKi4skdrPpNBwGtkZXXMHrTZoP5AmGkf5oKKuJM1WrFobdEhSHeUy",
  "key17": "2Rbnbkjg47op2QTAhrPakbqoknA3pUveRsCx21YaJ3uuEvnsQmuoseXxFbqtGKa8jscwfFxfHc1SEL8Rcykq5ndm",
  "key18": "5AiWpryDPtPgaVGFVLEHvCy34EprszZhfccJF6MZxA55ymvXemYYDBkT8cpRazJbpbcCDR8Sk57NzTsnqBm11ZmG",
  "key19": "2222wDGv1YpCk76wT4HwepUyJV3Jox1ijzoqfVUg6ofYJfuCurGztQo7hanTv6jwccQMsojqd2vcXWLqg4sVcd2P",
  "key20": "8LFEKTgLRgwkt6fLaVzf8D31a2sf8tAQ6hLGyPVFZKYmp4oHfqNQZQdJjqjRsCtFYVDj1AniRwRtBs4AC6A1gAZ",
  "key21": "65UuudKpxjJK156midTNZ1d53Ss4MkSjNDsCLbe9E6LCB8Gdb7mXfJ6xbZcNSZcT4GyPsJQXvRxFj4Qnaxnk7yRe",
  "key22": "34SpnMT619USAn5DXswcjKrX8KNRnXms3WXjfr8LijckbeetfM5b55yBKTMEuruPcrNcs2HTVUTextJMSHErNBhS",
  "key23": "4n68xjo7TguJyuw1rEY8uYVVYKrPD5q14TG5BXP2RweY2KHDvyFW3cn2KiWDzqtbPrePN9X6c85pyhTHzM1PtBsQ",
  "key24": "mppxnp7noARh8u89FHBJcZzQhwM2gjzgfiVZ5WnrrnmxYGxLs6DMgK7he6ki6hDVosSYVzWnpDEWuSGvKFdCKY3",
  "key25": "5tiyajCyzkUfnQdSk64bnwrK3Zgn7xcwzcj9JXPcMLZCY3cgn4DkNqMRgJ4dQsDhiTtmqnbs9a2a7EXzmuhCKA9r",
  "key26": "7kxyWDfTykCu35cntVU3W6wKFj3hzr9Tf7sFrLzJbsbEoubqUBB6bF7K1QrdResUEmVimFSijShYLHPEQeSeVLx",
  "key27": "5k6rBQ6RApzbaLT2oYG9RAg6rD9e5B9AspiitwjUFdZ4ebaa9n74uN69eZ93AmZJuaGu4RKiQYmVwBMLxwsDuo4a",
  "key28": "46qb9VL15q7rDX4B1LURaNae5f8PYQCK8Spnm5FyujQNX6mXeZNfShdBopaxn9fZmgHSZdoYtQBqconsf5AZwFti",
  "key29": "2d9hbRSwSt326bAxGGYNSRvtWGnPH5W28w58pomNyEi1F1pkksSN2LRCPNmtvSYPYW1M71C5f1GpJQtFv7CviMKr",
  "key30": "YzLPuTvR82TG42FPesEPZYKSSgqtRe2nUYo6iLvbevjj2GTdcpueDEKpZrBa9t3QeyvjVURQnZGcUsRaSpUncz9",
  "key31": "T3x3DV7qQD5zM2xPZtY6ZeVFS1B76638iXHdxk69g9ZqmEwYupsjZGHfJ5UFqdVkR22bf1zeADwXAUCeKf2hXks",
  "key32": "5z44eYGtyPc3MmQubqZGsEpMJyZ8jocZzLWmPQ158atnzz1AMV6R7cdLTmwHnR6nUuqpQz5EFQYhXr6XgJKtwX5a",
  "key33": "2GumfZ4RotbfHqbZgX6W71AdXN7o5Cxnor1sfA12zTAGsrBB8nmQM4mxKgsmmH6D6doixA3rLjXGc1ugRCnJf5wj",
  "key34": "i9im4RzehSVNeHTwZsGUvsoS6zC3yu8QWgTXuwmYp9B5BBEQXaFeWaXEPvtAzqjJ98oA6PgHpENup4wC57G8B9T",
  "key35": "2Do2uR6xrm2hUQWZBMZPwzLjJ8BHVDEyGmTxp6UiiDcNgRx6G58a5p3diVbyFiqPePae6zUJPhBrNirYLrTZP7dS",
  "key36": "2CjSczcxm8dJ8Hj4AFWzJ85HhNZcTwq9tiPhjA1nXMEpDNJBiCy5ECn4WTG5HpZzCVNoh8FWvu24UPnEVE79fzTP",
  "key37": "2qc2fWr1xydLERCw9cJybwTcwpANoxKPPFoGyVReM2yU1aPn45RLP2PwnyQry1HCGa1esnAFRKga4N4hKBYL4vGC",
  "key38": "2EmzVNZT8Je1UPyNwj3PZGn4zhinBDXXA6oM26B5XVvamqDNnRiFmWtVGqi8NipgBVeyDZVtYbYEubfYL7QST4Uf",
  "key39": "5fem5sV8PiKKa6dGFYfBztEepw16n8kAMgWCGLx29h79nhUvNBJWGq9Hru267QssN8d42dLuwRmEmyqnZ9W8yWai",
  "key40": "2qrTUXpYSDVjiAkfReWQQZqysobce2wzaYjUaoM9o8AL4ESmLEdTaAnj3KWxnqLuJmjw9KB4w9YhDJJjBSSE29dN",
  "key41": "4SF4S6fWPsbshDcAfMJCwveNaqohHwXcRT5mtnnpYGwo7qeGD1XHXjBucYQcyr2xmFCTR9tmaxivbgTW95o9vos9",
  "key42": "2WGXqXEJKZbge68Q7XWGBjPmSj6JdZJHAHgYeYdDzCsDcXhv1wcdvd6SSgs2BwyRVpZ9CAigffMA1r9Z8xcvmAhM",
  "key43": "4dkZQFeB7jM1BJyWQyfpmXZGtL7EPiAYcANT54RD3sF4LMnKJ2UwAo41kZZh1XxwGjCy84j49Jk8pZoioaDLGqCR",
  "key44": "s6zCUZ1E2j7EMDSibMsFSffguH8HXhTwHNzZ55qrb4AprQkoQstnPYgsVpSvxYoYZn1jxace6nED5sreYKih6mX",
  "key45": "5TDAEZ7c22yCqtYjengL1PLWRnpW1kKvgcAa9m3Hcc3Fh6V9GN8gpbHFngBFZ4GGYPwP9XXxYxPBzQ5WGhxcGo56"
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
