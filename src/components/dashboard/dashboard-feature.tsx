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
    "2S1tZUfnNwi6PDytdmRoP3kFm8gDiMuzY6sp4b6u87EFE24ecMNgABgrzqjYsm1FnN8NVZbh5kAQpVHP2WM9Ao2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JcU95TiEW2nP8TCZdme4FYrxjCuxjf2WBncLiWCsoQepunhSEviRWj3GaziaycDgdw3AA5U2aRb8FJqo3q5yczh",
  "key1": "ZKx416ZyjAovQkBymEV8ezonj79MkxUhAMcFXp3QqRLhexLfN1Fqti9TWYuFRxXeFwhZUiLpBQpNHCDjVtwJ18L",
  "key2": "4FiDZyD1WG8H7fhwAZ1EbtrYzeuHMYBMuyVeuguiBjZzptb6XkwKn39xU4vEqnbCzLzR5H2SeUpnnXtoxYRuz4dd",
  "key3": "wdeLREBqfPnF86VEPyyTsWjY58zUTPq32EL2GUf8fjmvLmoUR9BP6ad6QWL1a5T8CTkzELJFGtyjjrG2Cyr4N6A",
  "key4": "5YAeaXQpQbxouWhpvhRfeEnVZD21nWT7dt4tEsiUdBMxdZEQ44WB3qj1TGDj3iVXxqukzHvurmnopjMKCaYAV65K",
  "key5": "5Lmxiyv5W7nFhwmaW1ZKJhnGasBF8dB5XTzEUbbRnJMf78USs9hVhBpgwQdPic7bSWZ7NAnt6KtTRrLLVSFt3ps2",
  "key6": "37tfErVX2CH4DwSDhFdN5SeVL8VoJxWjGNHTUniZi3mRiS59ZZmzRzaDcV2dh8sCsnLnc1YJhBjMGGmmhdsGsHLe",
  "key7": "4CiQMj2CpEYN4uP1TamQBJb3ZatsMQYRuTzepTFU1y7J6HCJsj79fLkE6oXFhHgE4452fpQ3kQVWvRuURHb4aib2",
  "key8": "xRujHArmF4ir5eQi4GRYF2mZUVEDhVoWGokVV4oZhCbBY9RmrswuEP217tYEJxwkNu2j34HsvgkhJCNCjPrQ5qB",
  "key9": "5z3etxuRK8VX9iRJZvqpJxkb9TtGJ339hCcm8uw9vLM4kiSctvo5DQycxBkH2C3573Q91kGrJeEs1uAZXwTVepuY",
  "key10": "39JqFrYQpC75QmPJwjmQ5cY8KgJ63iEa2K2wwwBZHPqMwyjozJFUmVzQbYdLuWJwGLsgwrQeRxmEkar6x5oV3AML",
  "key11": "2ixbB4zh3qfZQJuAf2JNaysUJpbizAjpnC2wRLBYiHeUms5afybw6NuW8uor6y9FLdKSmVgEEJtaY22zxNVERYZH",
  "key12": "5e1RggFxxTQ43JiPxN7ZvCaxQT9Zcir5UNMAvYykqXNVL9seXG51jcyzQajVuV7Y3SDgY6bMRkW4Mghbgxevaqs9",
  "key13": "3szM1LvG3UE9c6bk9cf87APBBYVtV9yV5GA8yJaemDdzEMsS4hATsPgwUXny7c3M1eP6F9w7UbqixBL55yfbNCRU",
  "key14": "4Z2oCJcuCsqnhUbgtnvCpekHUXDbyp7Brk6d2G7PhVXP7J249Rqo12KwzusCgdi1Ww9nY1VCBREELLvcgRZNEL72",
  "key15": "3YkZrGHLUmipWxrubCuppt5nXQgiNnNuJUjSvtHTtB5TeHiZNzqNQhUkCTMzSxztL4dPVcCnBngWg2aneF63MBgF",
  "key16": "2Ed3QRKi4MZ8L6wrEF8eFWHWXx8i3Ysw5mLURtU5hrjf4AedQqmytuYt8vETUiwwRHX4aYWAz5FdjfGZrtX1cFNo",
  "key17": "3Kdtfq7Xa9WjD8VtcwNCqfpgsEQpBZmxT3NpQXM4mrrd9ccK7Z54xzgzLKFW92Cnt7PSWLgymbgYLHyFyKtvp8rh",
  "key18": "5cCsftS3NqXQ6Zq8YJ9fUE1bgUpgC89XHCRrgceRDpvPy12TX33baDNMqH73wQGuh2UvNqmvjZ1s3jmee89V1RSj",
  "key19": "4uqPucL4KVXrLqDa8yT7Gc1wW2NWjj3Kpa8xaZABDHFju7WUZS6vHwF6PhHAqvC7D5JggXmyGVmGBcxNVSrAiTXJ",
  "key20": "Vj1w86pJAULRuPxsfHdzwCu8Bmeah3siH6Wu52krriTQ5BF538PeihxMmkPyPvpLDzc5HiDFjGDP7gCExo1mmYb",
  "key21": "2pGsSrCNZazfT6bwSwj5qTKXwffyUffeYViWq9UWaF5fQ1B41oTroMPktbGpGwp6Ds6abHUGeYHyWd1QzJ6i1ipF",
  "key22": "3oNjqRHatuHNMwLqtoiAywiEV7HjWSZq6FMp66NWJvS5kFAH6ox8RHWMX9om1qESQDpgbNFQhGKeecWgwK9NUkt8",
  "key23": "2S2ECBhWjfWK9Rmb4dAmofmeXXb4wEd7KKuXcBSTAqdvmqYWKU4z3wUNG1inCps2QmixsRPmMXALewhUs1nBENbK",
  "key24": "QJQLTEnQMTGyknLiTRkEeEtTYAzU9YmPgBCFurcoVSENfRaLG1QANo8XmQwGwHt6JV8A8MSJHQkBtmiUWuKds6D",
  "key25": "5UzpwQmDVGZhfwnppoRnmemRp9xkSh63KeMfkb9As84JRqu2ybiXHSye7tkQm31KAvX8kimreBydnjwUT6c6YUhL",
  "key26": "4oHxUj2zgLyZ6HQ8NCg9fWbs3jhxvr7eaGTZMfCA5VpGAGP1T7G53rrzkwtDgxsZybHjSWzuZWC5GqdozyoDj8Cq",
  "key27": "5DsB5S5E2douLCx4ZegXvHP8pJUdQXS8PkonA84rXjsFJz8ux2cueTfVvkzshjqb6gYrptvYKcmJuc6tV8rAD8f3",
  "key28": "4SuTvZeQ7jAZG3Jnd7wZZ44wj7yPwCiYsGeXhD8ovmF8cw42pLiX4SbG9iVQj8AGMGjeY55GdVRHy4J3Luuch7yS",
  "key29": "5RdKDVz9Xss4g2DzQ4NUEnkpc2DmmMHsMGpWC9Q3rmZCW1Ja1h53CXNjUdzMxSRTSFYe3Gen8vUSa7G7TQDtzBW6",
  "key30": "2ZTKs6z5DZ2b2bmAoj9N5E5TMuDzhjGQtGTRkxRg3b2z2oYSiW9Wk7rRQefpLQep3Y9XkifUi9StkcisfzvGKDQ3",
  "key31": "3H3ywrMWZXLtrpJT6jCKzJGMcMgyBPVJ9T83K8nYDqF5aS92oiicttGXEzusNhLQ5rNgFpaQ4GEdp6GD9rfo71R7",
  "key32": "4zRwBnh1kMqqP5ibBPBAxB1oGM7HKCkwJCWiLjy758PeJa8fjAUGE3VQkQ3SaZuQ4Xr29YDBJFRnD5DmZ91tKxaQ",
  "key33": "5mHCfy3RXLgHLowS4L9gkiwovLLn8AKecrRcuTj96MFaBounSoBvrU9ht6RDyg4heL6H46j5zu6KeHyf9mAcieRJ",
  "key34": "4AC6zU36n9SEYBfucbxE945dkM5SeJFR1dKGkfZaXoJLbaCSpCLfQHQZ3ha5ZW3sjWdMRbRoUBncU7yYXKsirYok",
  "key35": "4K8rdCxYDCFcXTXvf7af455zofGR4j1CumojmWEkhtPsaRJWeiZKqM3mFAfYiQqRmXwH9bZn4XUVUL3SGbofKgqj",
  "key36": "4yiBT349CJ45YhPSAQDm9Uax5jT3GnPu4tZaPkP38zSq4tEEZsQdn4PteYr2iDFUtgVrzcrB8dDT9u32uFNX3Jsb",
  "key37": "EuhomM6VAWtzsqBPezASLbDxWrvd2SXhvstrMUTFdX7xRXfnVQouCwQ2ASPqq5gxi1LoB9UiuTrZoB4Mr2PWm7P",
  "key38": "5thYVB1aAen6sf5iNoK5LXuv5UMpQGpMb8ic3v8qKj5M7yh5Bz5KSGqHfxebdTg8H2Q9KtXGDEaQEE2JqeEwfbCg",
  "key39": "rRX9WX5G1EAUi7GDd8GFsXWpWvNKHY3TWkeRPcYvtYmiF8oAXUqxXmatBG2oGGocFxJGmjrQtRPqtc81AvnUUVT",
  "key40": "4MqA52ZTvEhiq4YQAUZ4AzfHtNtVwaDG3jFi5hsHBMTirCKrucM4bFzwP4BHmbSR3ZvPqHofzdXXzNy71MGyeGZU",
  "key41": "4UQmjtcuvLKBbFTzi89HhiUDRqxvd433akKE4tEJ7GWdjQmpQayqmZy6z89HemV9kPcvKn93rTzBuuzF6D1j3rF3",
  "key42": "2DTWCL8H99VNmMbkzFQnL4hafXFu6PGy9h3oh1caD3F86DnYxTZ3C4b5jrTUAq3z4ErkYUwvt4BgaeGV6RC3e5m8",
  "key43": "2FtuQjMFQXfuj7mjYH9Pknr67F3jfGkiMNoTrjvmKB4AmLkBPHDGtTEGvBMnHTwY6ocbwLVEfS5VBVngpm9hMxgw"
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
