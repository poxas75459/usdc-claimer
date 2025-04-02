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
    "3P2jeVY3YJLfU4WzYzGqh4eexM23JHWjsk1fcGrcZs6SMDHnMorGUktHkENZg6mkzPbnM4UGR9RtxAmVLm14nzDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DPv5oYatkFxAG6ZniHVbGUAtgZM8o4FtWSBaDHmAkR3uX4RNzKyrCXsSu6Dd4LbBA21X4pgg1ZBhmcWgGRMSupv",
  "key1": "2kg8CuYhWcdjNDdrK5sU2hYCmkb4y2kohtczJgdp2B9rBiEM64tYjKHrwWRX7PkxnXV9bQfktek18xWHF6C8Q78E",
  "key2": "3GxWS8AiHg3uDDZfkS1XSQc4DQcHWuhBwMe9cpigS2XGKnBqBsNpNS7wE73PwL5n3RFRi1SYHEUtMqTESLtSw7ZZ",
  "key3": "HNxtaQ3LS4fAvuguBZyWoqbVq4DwcByCU3ZLNqN9Xw7qEAE5Hxg4ceXzdi68TUQPpoKWDTKxePC1P4wZbmR2H34",
  "key4": "9utib7hRwMz92FpBz57noeJ58ADcuLxQQjT5BxkdqGQa7FVRL9cZHBN9iRXMKW71X9CdaCKWhDF9jYjrpH6Akpd",
  "key5": "Kf1vVGvGV65qE717re2pWzjNNoYV2sEztWgMXRL5xUvcjwHDcvrxwPv8cWDGDYPg4ogTWXA2yLDWdjQYJA5ngWP",
  "key6": "3p49ve7QtQifw3sGS3bMzLcNjvzk4AsprQZmQzeqkpVXMxyCDjdYPzE1dd3DbFNMkQT1wMKcLrFv7vjBwdM64zHH",
  "key7": "5djAfPc7wzF3d4mUugHUb4KBnTFjRaCnHT8iP9insfYxHwD3b65gb7CRLget7hca3ZDioTFd9Ggf25PC7PPZAEDR",
  "key8": "255fAyEq3r3nWd9gED5MGoARPNcdaincTEQAAe1BQ6kMAPgX5jjytg8xusrUimHGxpVjsFxXA8RSGVJevKXbfLqb",
  "key9": "3uveaAFoQBB44XCBaNbpFbgyqRgghZr2zm8GZfCDxVUCjWdHHyJugbfCXvzK5Xbf5mFrjpvxQe3hQtRbwxFUiRyR",
  "key10": "4GFBsgeYjTmyXV54U9VK9r6EWTq299Dd2iueCEJXDpxB5LzdEuWWDMwnXmAjFxKPyvqgwFA5QpZQR9RaNZey7jkx",
  "key11": "5VxaUhVEQF8cJADPqWdGRvrUu3Mu7rN8z6xbk5dfB8JxcYM27Zas7PqVDbaKe8NkdHN5B74MSP2CqnwR8T94H8pG",
  "key12": "oma61mmWodbTdAA4Viw8nX9xGFi4LgwiJWbtKUf5y8hwafDPv1iqDg8ChYeFFYmScD8aF2LXnPoXMiGCMwi49cX",
  "key13": "4nop73rbbykhVW8Vvdr7EFMipmwZRASE4ytqQzqBEPPgqs2ck3KQSR1ZdmKLCsWq9ixez9aPnEagt7xZYLJxMubW",
  "key14": "XRLEE4Hjh58PWdBNAAXr6FGQHts6L4GVqxDtVoC7cYD33UodgL9PMy766vonPdZyFdtipKk668T54YPwrJhoGmA",
  "key15": "5272e4CqFSpcke6K3ziA2VqbpUawtTC6kCEPx8R7Kvoonot3JMekfpw13Tq5WKmpyucrA1cBE1rn8wNh3dR8bSHq",
  "key16": "kDjLUtzRzh75oLENiMZxFkEARvJoBWGQMqxkhT9hctBMmKBFSaNVMvBhEpcBBFyJsMCgBqn3sDojSudotkqf7xR",
  "key17": "4exEQ2ZEhcnyxCfVSuXC6Yi6YkxYJC6PkxEHjPhEMMurNUg9zGAHc1rqBcb6ghAoe5ZrEKq9t8VmRSLcuRXSyqxn",
  "key18": "aYipNaopVdGp8ewf6haKV7pHRc9muioHmLEhERF7EvWhX6sNEJchzGKLjJGgd4Yywq4QieKBP14uVSiq4M6GKdU",
  "key19": "iRYbbq4WwCo7uWFdhBXDXRVcTgy6FQWEvujD3MWa43ZEEArXoV7dRtuatPM32p63MFgqvVUtffnFuPj9W7D2b6Z",
  "key20": "3P3w1J7AWKECRrfx1MGHbGsNE9JmbpACvtSz2rZADnEHQuyViePttunLDdD6DY1ngb9o2DbNZ9KtZsCnDAvwgFSw",
  "key21": "4f9gQw5hZKyqhLuLjpySF7jwZm2jyEWWPBa5qhvCp7wcYdSBYTfLWWPnks1dXEzMMdtEKhwFzhLAry6TfBLYwiSF",
  "key22": "651y4eCBtiaALToaM1dnWFTjoRw5ADJTv942XWXUxGN6jKHEKB1wHcTszk3jKbGpttBkwSsa8SPr422UF86B7Ecd",
  "key23": "2eF7aiWtqCthm7LvEpC3JsZBxxUR3yfb1kjksD3xSZBqs3ctSQkrS7sqKq9kHXL6Yocz7FwXL5oMEMTvRAVazEay",
  "key24": "4hSLpfRodtaUKsXfwomquuqUhyxzkCNo5uELaoub9CuZmeaBGWUyNMyZdMZkPmJW626hGXuwcwFpuYVnGMfQVEMt",
  "key25": "2jaDCbZBiX7G7qVSRsnraMJp9A5bqABLNDAYPJFKxSXP4gMx6nSMMjr1qQnQ7y484ywhQ8yHRCfNRTaiAGBGeePZ",
  "key26": "2MNjJ87Dv5ioJPsaAgmBZRo2ZH7Z1fbP18tdXnykGB13jnd6kN8jfHMNmWQXtdr9SErNv5dQH6kQxVYtWCxSFm4e",
  "key27": "3TaqQsB3dwuEYQRorvZoemF5fveugLLvYw2EauY86PYMD3LqiWJvZmRNjgYY2JBqsqSjn5u1LxPTeuBgwWVdv3ai",
  "key28": "3xiKKrcWm1fsm7x2PAZJjbQaaAzqxVLMeU3sJwNpikQa1cVUt2h8QKE879xBvANue88awEKwPJZSyLqJZJqg9KTk",
  "key29": "6xtc8D6CPQt7e4HznqnLnR6Ewg8AV7stduAGeobYy67S6XzyspwwpiYMeV3yFGWgCybhbeDuHvfMtsvoNPZTTpX",
  "key30": "4EcgMaJ6TYZJ5KSSM8B6dTiaAB26pAnKM8bLF9tNMDwCNFSt6z7Tg7cFxoAHnUsCLF3qLpw9qnukB88H7PK7z4CJ",
  "key31": "hQQnhCbyNrBi9YShyi4RmZf8AfApkE6iJ1JJA4RkBQn9CBhJGvJzHEZaMUhZ31T84n9J17fSmmJgugMN5rw4guB",
  "key32": "UwqGyJrvLXqKQgSfW64e2gPAgR5trawy9XdfYgdCSenbkjFESxdpJz2oakYbWeUrskNxr16WERuGSD5StQdGj51",
  "key33": "XZRjptfQqLxmGcy3uDxUH13CFezJX3VZNfT4M3HE5ZkrvMWLL5hs2RQD7VLUf9HR46w2auHihTMAaCeQEzcZrdG",
  "key34": "2HFUmNRaDfhgU4gpMWJUEPLWMhGC2GzrfKUzGPxiQSfZoQoTKgdhCjTohs2dFDg9gwqt6bioS6HCXJyeZDZE6rgk",
  "key35": "46HP5GHyDFSBNz55xTd3jWfNxQN15VWYsvmU5hV4peva8eakyj9kjmKi4vC1XdLB23YCxN2MXoC1G5Lwz9Guhav5",
  "key36": "4faC7Bftdpx1uKq2DVrdSKMKgcjv32qhoxJp27SvPxSw68YJ89Z3cx1PN4T2ptrQ1DwxURjV8g2k9noSDQFoupiD"
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
