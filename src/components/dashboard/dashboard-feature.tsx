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
    "5oMrXcn28PjjvPyU3z2dCpi1h1AmAEpgjuH3RMUp2javJkoukG27id8uqKPkGoS3YjN8cRgZrrEgBVsPkiuZAwP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TCmnfV7EoGHHSahW2NWEtS1VeXwA6WhqsoLjyokRZV88F6hhC7iPya8kdpxx7vW2duiepqDYfDG5TWLribx3yKe",
  "key1": "gRrHRpTG5uQE8jFKuqGzjfPj2F7hovY4zPq3jF2vC1wpS9MWD3SRZ9SqArLF9oe4J4WJTFyUoWjogTXy9TiWZK7",
  "key2": "2HK6jx6J13GpcNH3eAfnvkXYQkRshpmieZiPkFxYt9mZ9nsP3mR8sdut2ynTjA4o79mRU4mX2dpJVjqnCQNvCJJs",
  "key3": "53GTL2rBS6c5Lyvp5zc4MjrL26JgzcmcpTMhTycuTHk8QL7zvXaf1DYYfwiSHqwgusDDB4P3EdrxT6GeWEsynvga",
  "key4": "4mWbJ3TbVKhkiavtDDhxZzzjwiyRdS5YTWgF8wZtijjJZTukiFxLuKmsMgkQ3uxKrqEtS162tBjr7vBC7VkJW85L",
  "key5": "65ksceNDAgbkGYMXT5VXKKw7DEfpaownD7DCtHhEVyAgsNpuYxZVxgajeAsYxVs51yjfqiuVQRHEactJ1NXyaqdZ",
  "key6": "iezXqjryvCCdT6JS8i7Nkt1B2GhXSR77HjTnw4XktrUBKjWcuhDxTHpu9pyocpsTTZnV6CevySQFXQADwtECShz",
  "key7": "4ioRcToqdFXyoLp4ps5H8pvPnf3LRMXCaVSzSz7VSdgB6gZYoQxZ8LDtNwXpVZ68R2vPGdziTW4wk3BZYxNGGYTY",
  "key8": "5PE1DMhqvhk9eaa6Xsh9HXMJ1QZTfsHj4ZyTuHPr6gk5qjvSKcC8NyViTouc1MoKbn3cQCTBHQyU7MvGB9grE7HG",
  "key9": "otCTGs7u2oPCJfmhxzEwx1RzgWvJWsRqa1SqVa3BZ44ooE75p9v8ukzaghARCTxYrBR9X71ALtRfmonMS7TC1rn",
  "key10": "4rA9TEZTBoAZaabYt7rrNJBrEi5uerNDg4q9NfFHWW7moKaiApxRcdcsKGUrs3w2HySxftzbxHqSn6PHfJoKjA5H",
  "key11": "2ZzGCvWTk3vRDE52v8e3gevoqGaiVjxpBKDnP182CiQZgoPL9GYsnFAQtckG1ogtq3xmKtFnEj8vvPqccwUVXW86",
  "key12": "58yHMBV1TZyrkeVq6XRiQLDFYfKQqjCy8X2BGVHxRL2r9y92CbFaSovbH6KqhQcSnyCBbYsxBokpmn25BZPEZMrJ",
  "key13": "4JVuRghQyTR86heMQVRsvutW6jLLgwgDXENPu7KBEBipDG37ekFj5JBoc9ZvACTNhXvSQtYiBpWULdWeP55MbNpC",
  "key14": "2uKaQf6vH2z6tub4bMsikHTBKxiSY6yhhqLoQ5dDaJkM4pdgkdXWg28AsZQDc7VgcQ4yGxhsYtBbaxeZnDBQgRBV",
  "key15": "5ip8MFn7yME4h5ukDySuk8gAworV2rLCU1ogPn7N56L5pd19n8ayvVL4sJzarXKxZmppW2Tk2Hu2Rp4iyDnwiggN",
  "key16": "2GPPxjREMPtrmS13Vpb2z4n6cafVz1s4zRqQ53cnRPhutMzDCGQkqFp5Qie7rJj8N7CJpfm1daScKYvjf2UJeynp",
  "key17": "2kXfu2vNGS3f4vXQHk7x39Qi4h57jAV6EyAtgDhENQvZWJfT74fDoGmxaJ3G3d3JV1Dk5vcmp5hn6bGRS4heRvZC",
  "key18": "p2KoDHvDgbvhzdn2XnQjPxZWaXqa7roryvkr56HLRRXv5gmg3xwYx4mRBe9Vjuk8ShGQAUkvmCjwH9KQ7Qtu6BV",
  "key19": "54R3BmRzXbvjWWN9FCpiTtMYounRVJoW36yYYbaqwpCXtxkNifrN7hwS7oJB5NFW5gMFGowMuVrZzeCCmKmfssPt",
  "key20": "5QkwN5mxBKJwTmRS7hTQpEqavGJa4EZECcANVphtu3VcmhUXcGDqbDZpRazCQd91PNBNW4PB5BHPnJuGa21txYsb",
  "key21": "3rDnTUmaMzJFRYb9j3gkP4oBMhX1xaqBCq6XA29o1fmTippi9ZsGSWvxiK3FvqKHEG6GBayUwWszketcogYJxzVo",
  "key22": "3kxomju54R6DvEF8rQvGHLu5TQgjEQLZ2wkHpE7b1Nxstix4gW7ndxxkW8WRGt93w29ytnCF4dLDqyaZ5RtfiU1F",
  "key23": "3PexkjWnRLfP7gAawApTPQKrWshDtH3orrwa6yVgJ71mBN1TSxaZYggGngcC86aZscVggda1rg2FXWjjvYVRtdh8",
  "key24": "4hgqvFbSca6cSRkQSw4VoJaER7wCCTR1jsji24hgLj8MEQQiuwy46ymwswJkrwuzuRxJ5aFUbkWQWvHcxupcQVSp",
  "key25": "Hpc5vTT84qt6VPd8d6MFNSgpyw3aqxVt35wAh6LpER2R39tozsZFe6S1Pr18nCbJv5YT4nJ8F4ZqFak9iPVzptv",
  "key26": "5vF4gKd6HQECVRrqDvDdu14xBTFz8K6fwXvYXuFTFnrZ6C8UUcN8GRowfXL8boNuXoEvUe3KSeBBJaY1t2atnnAZ",
  "key27": "4TeUdm6gz3ahW2snQWiu7TtC7r38esdc2EJuqGgyzGQRoXSfeXzy1HL4N9Q1JhTtVnq6osNTiDZMTffmwtT2Gw1R",
  "key28": "4ifSGkjiiJqgtsZaE67KJPTpzcUbq9eydY4e4Np4vJ5FLD2ttVf2hDkz3Hq68WaGnaprtqZxAY2j5bhZxGAgoJy6",
  "key29": "3dgwqr5Lc8T7DcoggNGQpvsNxE6bcETa7WFFHooqjWaaXFBMctF1y7Fvg6jNuFxNqbAKmQYRt6aid7uGibhog86P",
  "key30": "2m8qd2bntYzkVXE3pKLNyvDd5wKStRrd2EtXxjKXJknFb98K3gM1SMArYwKmWfNaYhcTWu3dUJtWwjfwJDvJ4uYT"
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
