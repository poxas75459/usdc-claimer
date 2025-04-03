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
    "fkxopojQe47c2cX8iC4Wn9FTmi22bUF1EED8TR4yXAzWwnUugRicQvwxXhju5V5DBn34dRdkDVzvDX173VqCbzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XsmxJz5VYgP4SJqivnMixUgZByCSLyHHm5xKD4RqrLT7XC45fBRxYCQXuga6CQxiLEs8fismQyJaakjZ438sPPU",
  "key1": "2pGzU1vaSXazDintTEvQ36x56ua3zG9M9Brqh2YxJfBnvW6TkNFZKpDvVEdUPkf6J86Qgw5f91Net6otG1pK2dr2",
  "key2": "2CmeepYraJSasbCNEop3quzJzrH8vjZ2ym7arBcfFMqSZ3XL4ZJKp7ctZoagK62ufcoooUzFoJPZtCNsZL8MSctu",
  "key3": "4Ymd8SE6HLN1kCBajXKucSDXeTmCKrYfKTmmMnmtNTnZF1Ay5eQMiE5EsdyH96JRiWLnNbLUeQTPLsKJdqmJrXTG",
  "key4": "3p2SEp6HPxoXFkfvUKXUuRi52FdhCjuGUKZCynpxodraH13z9W1rcPtwNFL6rPAHmUBgdytNf2eHeJssTrC3zWGN",
  "key5": "u2sFF2dVG6noFx2PSrqeDzSEVa2sX3cRWaca7hdgpNEsh28stHLs8S1YUA3RrmBp1DDjqrruW734aE1XEPSWenq",
  "key6": "2K39L9MD2p5pP8ZN4WtG3CJgZVPLBskuaRmbfsTdh4DGXjupbkYU1S6aFTVZJ3bKeKLACTCRcq15vyrQN7YuXUEz",
  "key7": "65tVieVJJB7CWsrFgMsCYztKDU72nLbiR1sTiJLcfauVQ7BUZQF1geJqUL8NMiTFXTeJT464vkvT2BQ6DijNtZze",
  "key8": "2v8uCd12vQe2JDH6UCk9q1KxsK8XZGcyfh2fYbrtuAYa9MQXJshF84SvkgLuwUNrTXzDAUAwyjBaG7d5mdXPBp6R",
  "key9": "4CAhAUQreCtq3vZnHsMUu6XDhm4zCyUs6m4UL9oiACgNtxpuFchCEtgVT5FzhuPo3nv2y6scpYK49jooUVL6MqCm",
  "key10": "5GBjrzyrpBRaUoKSDDcWCKgfx1tVLEUBVNSBDZ4EzQTvek5PikZ8C3LCXogG4qjy3cptSot2urHeLDfKtsV3ZHgV",
  "key11": "EAnZHBLeMDBcfxWSqvLMSTr8YF9Uj7tNRc3bofMu6Cjf1xDkNXodLrw6KjaBD4WApSYVE6R9pVDnaiF9yTJdE9H",
  "key12": "4gTB9rz22RRZWzGTwLZARxTkihcVM83yGxEvqnFnPfquKjboC4aUM99Lo3xpzaS5Y5SARsJCLPzCCPthcGcWropK",
  "key13": "4FTHeqqn661ZW3FdQP2NeeS81hZJnAUqya3QdmNVo2RVnG5U6eQDud6ximGfmqLMjNqDNYL3uJJV1SDiGK2w8q6j",
  "key14": "5dAZvgprZdNvNhHmX7PU7mXE82xSdidPkugQjRm8wqwmBb5DxAKy2NvpNHKXz5TyDNf7csXFjZgFZ1HmwXcpM6RA",
  "key15": "4QwGCwMGrnS3fnDv7xHzfc71uFD3viZEzhrpBsFGupzYTytnCyebBnfeBcFGTtgLCuzhw8jMkqxR4Q771ZjwpK1p",
  "key16": "4DRGRAouS1EEVjTQWskda28vhDL9xshSai7mmdwRXm73mERwNnKSyqo26LCyThgVJEuQF7Y4oCiumcugVio1rzYm",
  "key17": "vcDPZvUN1ESZskjiCPUBQPRd5dajRNbqVKGpFKbNYHD1LcwEEWWJVnSanRppk8UEBiCwFk7iZTw4QsWVbyuutEd",
  "key18": "2hwyd5ZcuiXrKgWi3pnMEjN8RnKBENJX2Cbzcn98SzdskuXqwBtoFrit56vurEUbTFu79YSapVA32pRrKUxrPVWC",
  "key19": "5uGadwCvGnj5ywEwd8WJAdCHRfGzkVemL4NXSVPRQZwbwwHP9N686qZo8WzKRmLiXvnALYrC8Ar2cZaVgaYuP5U3",
  "key20": "SZSDezhYHWNTcRiDWWuA1sGzgS6kjVkB2KQnd7uM483RbgWjNTeT9BPNiNv8vBXuQMfHoHriMNLRbbb5jvhbNRV",
  "key21": "5hiqDFusupgz3jAq3REJGjJkX9Z3Ju2i7RQGaTEjxNXHdgyd4bFas52S8vf85B7sCZXq62UMs2FhZjYcLm1F24rU",
  "key22": "51pqakpQypnyQX7Sz6v8R2xYLsiyw8bysWVZvtxuAWPz7a32bKEeLJDLrnAsySKQUhwJVZSzsVYhUUcs4LjhWvom",
  "key23": "CgHkyfoe6uzGLDQUvDQfm1Q8WBpRBCrZFufTgzCZfTYpntkhMGQYwjD2LNjwQgRpTnLfm1v6FzQysv4jN4HUvyB",
  "key24": "46jYCRPPM7UMxp2rrbKPhEnZu15ZeBQQxAbcBoLoCwkJBD2UxDkxw6vQQKZvTDG8qFohtejrH9YJ385ppJ9ZD7vk"
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
