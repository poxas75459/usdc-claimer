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
    "4RVkmuaovurZM6MF3cDQ8Ly6jYpjwiVSUM83TKQ2mgKhmrW3dc4WxW3UgCaHkmA8rNHyVJ5yQz95Yuge7bVCVytm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CYnWsM2m72E8gFz8xbAhHyvKNH9bPP5dPeTishvU1erUpk85tuMeQEHVV3aAWA7qrD4JMhN33jgoTbrprGi6QaB",
  "key1": "2ZenXUszSUJaZZFmrJpw3qTWd841j2rpc2UanTThpTZvfHSx9FLbkrqaDaA7imFoaqtuz2c6RGWKZbCxgEwDayDK",
  "key2": "22gUQyqBmVLMGJ78d2k19jDN85xiKXNa2CUoTJHnewkqTYB4UezV2phJuGJ3KCted71pWsbkStNjb6xQrpGdWrbD",
  "key3": "f6MW8JRdMxaW1WY6GH5gzTmuWfJKdkgYB2WJ7vtPCaseLM98qaegwF9YqLV6dGkV46RWKnqHMqdoGKN2o6EgbRC",
  "key4": "2LpCntaSpGh4noXM7VJrzwJWjNaWHqmTZ4mQ9rqxjPysK4hEFgsaGuAH1HQbNjn9k6eg4DoYJZkFZGn2jwTxS2zE",
  "key5": "529LJLsaQyDdq3xTNFQkMrBJ8tpfiw9yHoEJHJcHJyzQ8wbXH9FLPdaLZJwDLJ9T1gmtWxEsxgmYUdjaSp7a2XH8",
  "key6": "4hnKqhe3WnQCRuBGGR8jmnb198K9usUL4Yi2RNGuTiWEzsLLrPH7jZ7LAZypvXqEZWPZB2xhkricLndKLZ5fL2Rg",
  "key7": "2vV9V2U1hcTnSSKxJCfyt4ffoLCBtV1a4BfKps3UqAmQu6fgDRXkjLGSSNVhDpGuqNisreLfYGBoX9tjbWcGQj3a",
  "key8": "2FEijohCFpDxFxMzxnNdyr2Jp6i6AiWYjQP7VGF5hcyfvn7zHWFUnWR9PaSzCBPHaEQKHdPmiNqGSxS4i4TtS8se",
  "key9": "52yWyENb8Akyd7wAgHfGzDp7RcGKnjeTKY9WrD5aiyeWbGsqP5FNw38yNfeULVdCkRr1owYkA7x3PeYjFyE2eMJY",
  "key10": "PvxooWaXSVtbfeT7TcV2YvGqDmTrG6DJxkm8hqdUzaCC2fqgAM4Z9R3gyS3p47Bc6LLB38EKUDsZryA4HcQ9Vze",
  "key11": "3qUa9YybjpNavv5QJM9TYLGfrXM6YuEwKcsmnfJ2eKNCT3yEZPJiJc2W4C3RHqiVXUtJHgM3rmvt4HJQbMZF96aN",
  "key12": "USw7eNRmRweMTdksGfn6uNgp5jf9RVc8AT4yGKzpDhZBgRC8tNCB4pt8Dq52jQQAihqEFyG29Fhjc36oMCtKdQS",
  "key13": "3ji3UyrM4avNHiLKEhT5gtk3kWZJmXTf5ufj2JrHPLg9E3uYKmBPQ3qeZCghCiFLZQMsziJL3GVhCCbmUJL9e2hn",
  "key14": "5bQ82bk9XJU6Gr7PBUtS3q5Mxs8BeRFhpepsRVRdUrgJ4PGQjTwpa3dESv8TdhEWkrwy52x2KXfEWnmaKkDsWdKG",
  "key15": "58jZ2GhmM9MK172NZ7nNEqpSaFqtzjNfyTZZxbe7bepFzD2JqFUxqPUfqVc3PHbWwYyZmAK8VJ8y5fcH88VD8xi2",
  "key16": "4Uw5opJAVNeCMQhwvzcCVN6aXgyLczczmFCWfP819BR3c8HbUXusrsh3aZK5C56kvoSFDVwttzUrs8Be9Emdiu2F",
  "key17": "2kPkwvo6fZEqLY3Y5y1C5SZLqg8AsUP5YGr81WMHKcDpyoAAgjNTFLYYMu8MX7jYHfiBvutQCALUGYYFfvHna7mb",
  "key18": "2njAeu98NsWSzTHTrjojpR9U87jwfzoXR1tcGhciD88UsJie9wxJFgBch9zdBKLiRJ8gZz7VLHvPYaseZeuYNDto",
  "key19": "3jR6grkB9hfVCZTzrxsdpPod4PCrXB4XZzvsHK9w4TktaRbHGX58RiBQq9i4mhspMKVqm9LwUBEr2PYfhWeTxpZy",
  "key20": "5bJQck4MX5GBQxJcTrxgbiUH1s9wx4gAmXQuYxawZLoKKt4gbZSti9vB3d1TjVykgNvxJtu7xuT8GRh7N8kYagAg",
  "key21": "26o3rTvWJ7cRSb2JLjjp6EZcmajkPGsMrAYXtb6MC5gJ52nentAL6U4BpBaNUS84ntRofBNeyJ7T6HxMd4ZwxVaD",
  "key22": "5aZuqvEh2eoYj5uEi4izJtndvJBYtnJGKAwMK293PfYrfARnuYRKK5Sqysc7EwgkemjCPL6BxD552qNB5Pg1m9KK",
  "key23": "HQtaVxcKqTwqaXwAn2JLYYN2mGdoXnAjLXrPmJvYL6UnCC9t3tkoaY1ih3JjTx5wEsUxUjAtMTSXgAx9WnesAhn",
  "key24": "3N7rNu3WMcXhvAAzt9qY8tyfzKRWZARkG7SdqDVvnY39XtnN4sArRoDdvPfn6yJeVVV5nCq1H3TNqXCUKzN2dinE",
  "key25": "3HsSPTyYmAQWehdhZUZgb6Eaw1mpZSgWuyf8Sae8DsTQ88TxxkUpMESQAwyJkvaQmWguHMzMKHUCmCqSkY384yQ",
  "key26": "3a2V31ZB7V7Ze3ck8xaQoTP28ubBfqVm6tE2bVyLZVMJuq9dRwHSHXigN4vP1SKBwxaDXzSh5W9HpeQ41ShkM9m4",
  "key27": "4wWxmX3UPfpsCd6fRNCNxvvwSVGhGatCnGMU5KPXex5KXQcqnvciwcSJWr73s4Duhig5wms1wfAXoWvv5gb18Fpb",
  "key28": "4Y4ntpoG6vRFQXUmwZrEHUPTWfWRV1Z8YDdVDBzBdL1QfR51CT7WCjN94xzse3tH1Fqdq5gMZJbZQqHW6doHGCSZ",
  "key29": "3o63YBJAUchokXnPee7Cpxo1fyvAtyEjpxiVaP6cSQeC2tysyPefMgLJv73iFVWaJMGf6UpbmwYoZvh1cR2GHbKt",
  "key30": "3YZ7DveA8ajcrcmR8wGJVQyKYLyA31boUymbhT2o8eBFjGinfecTFfQzSG88csT5uDGaaLRgUXDWpzWRGrq4MYGY",
  "key31": "2eYZaf4eXEtREToW6zfDBLU2u8DuFpa5JNXq1DZJRJ2o1BC8TtPevsWYCiPuNw4LNyBN5ER9FR3Z8j5RiSEWcYEW",
  "key32": "J3XKLDJRebq4d4Pf5FALNsNnZoV2xNUY1GDQCNZ4Jy6Y8H1ggKLcUWBa4CKJKyhaLT5wYzSkaykndLmMSGvThP6",
  "key33": "5VqV4UkYBHxiKFKCEztUGEdKjoL1f9RC2sDgT7VcRZXky1GfAGG6gHLESufjFqmEUJJU6CmD398QiuKohWzwQUXQ",
  "key34": "5mCFxdCdzBTUMMiaSsRqUF9cqx3bDavLt9BE7etfzdDxWaY3z3sK8Gpee7saMewGZT7xkoE39Vpdv88dyKZaQa4i",
  "key35": "3Z7X9AxqqLsjQAoph9oA3gNRC23DXTAN3ckgZLqakY4UZHMnsTELGxyFc15K1tzcsmK82Xx4DYQcvPh7iayDtuQ6",
  "key36": "4JoDRCPboSMHsJSdmAVd7vwGjYc38qtPtR5mnWXabcXggx8rtaGZcMWrnfeqM3PCYKabjQYJRkxVxmKNATymwUV3"
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
