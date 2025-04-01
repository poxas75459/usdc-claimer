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
    "4PBhTibJBVHR9pUpqQPtTMudZMMbHaq5iUY5PDQUGvKZK7P869GvwkBhrB3otQJiPvA1UR1MXJv7NqV5TCY6STkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35CEtqsQVcs64hzMoUAZPERsY7zCj74Qr3QKP1tQqvYznwVWuoDuGbCybVC1Hf3AaMHf6DofQqXEu1PdWqm9vmk9",
  "key1": "66kMYmusxfNZoscLw1XzmMTfcpt8CspowfizcevqcfL9td66G5byqCaBbDkBBY7GUP2nUNiPSqLctcxwXYvmzzKh",
  "key2": "5FjFkgoSFPUv3ShxukXwf5ZmaBiywNeBSX6LLTZKAPRXYRww4hLmVomf2BkjMUFqrDEC7kFeD49MksciBZNep3bC",
  "key3": "45UvCuVdPWMF41vSmGUMT1LvdnEERj55FaqZsBsLLiz5U6DKRkzMbAndT6aqqz6b5RPX1xTqE1ysUS212gtyY3rx",
  "key4": "2vRasGkh29Qn7ydpWEjiKFWXCSC2v5iNpmaRBkpL3DRD8VKGPN87HuWE6o4Z1nKQdUqA9TFKWkww9dh1qFg9qjyv",
  "key5": "4hrfwfFNmXHKA2SHYepNuAnJc9PsEUmndsM21J4R3gWnnaXErxr3TnsgAaBSbHAPhgw5uU81eArkkr6jgtEDkJx6",
  "key6": "2HCnBfLEttMc3tVMZGffGRLUT6rAmdsXVFeKf5Jx6Lr2r88mzXiYsgqGfb2pP5Ek3wKcXQBS9mnYSzWrKPK2av8W",
  "key7": "5trYLzMnHL74KE9Df3rAk8ipj9tgsJop9JUy2RHmLDocL6YErh2KHiDo9UztuHb79yS73Rpnu58sg6MB73upP5dw",
  "key8": "5oQiN3JAVA7vMb2wv7xzbU2persg5LWVz9SNy23gPa3uuiZ4KdtPBcgoYpWnMLQatPH8hQgpVCNEc3VjnZHHQg6",
  "key9": "5FoY6HaEwGbiKmaDEeE12hfaE535o6TA9RH35gGz4545ZJ5vyspHVVfb5NKERCWR5pg5zpasMRTkdH9zRfZCuhwY",
  "key10": "3tENXZ4WTBfzx4PtqUkFAYci3QnUFNXAKSCDQsdJQhqhhjB7SgHSL77UGKmFvL6EMuebzMAo6ZKhKrS5B2BM6rfP",
  "key11": "2nrz8eCNCaUyjXvXWmwXvUvzD1EK8cjAPpQJFEtE3npj66TTWDtUs7GwoC2roYzQeTq41MAaqyCokoeu14u3MSCu",
  "key12": "5YpRaeXxcikwGGdLNirdgvfehiAWX86EfX5UCQpGeQEWtXHayRYJP3n9yEjNrajX36qqjUgQi8mpmqzbLdjeJYiC",
  "key13": "5JrUDoMWdYJqmGAt6Zajp4mF47EtCq9duREwUd14uCdjJrxK6g2dSTehPXUe82kLE2YfSTku6hrSxdpGjGEz13f8",
  "key14": "2RUM8nmvsK3oUpyZyCcAMJz9PNzXNJaXEXnixLHxqE6WiAZMqcmqWNZEmHwPStFv7mtws6DEAhqEWoTU252gBRzb",
  "key15": "FHW31chQMTHchUJ9SXmrHqyYUFbBJnaBmDYppaLFEHQ53JNDdZnceh2zVmQ9Znme33MGDLAEAimmQju7uGGAzkC",
  "key16": "5hfu839S3tP7n9PLPeaFzBm6PtqXTA5i8AfdFmE9hkRSihcEnuq4UVu9cTH93yLHyJhoEvXGB5E9kMsFKVqu4vZ6",
  "key17": "2Dvp8qxGUDXXwQpXkR1FbAZDSCn8ewjKqXyfuczb51A7P8AVkGxqSwDdvTJNF45J6QmDYXW3KW8y1nedrzMNYJ1J",
  "key18": "2Um1WFqH2QrSRNdzMou29sbFLUULFvbVkT7QmV1DEXKYQa3ELUy4bALbNjLKX5jFEUVTfLMMV63snBXjjTxnucqA",
  "key19": "2MKoGsR89bnqmb4ypiny5ouDuWxYMecpKhBHhX3WHZRzz8iBVSRN2Gg4vVA7L9UBDtUSAm64sHJohNTBsgu5pPSW",
  "key20": "jwpkefuqJGSYHcBXM3nHhwEAXTTwgkbTz9kS61R128ARwGv7s3sRdrdv4aizfaH9xo7tcX97ZhXQoGcecQJj3XL",
  "key21": "qZLx8nvWLMenw4fvtq84ddoi89odA8RGZx4AQkAyDhE3fitvReqXuhZowPCJpoxQ4DQfh5W3NeUSZbuB7C5dAgQ",
  "key22": "vvCuyQnTXeLUfKfFnCWLdkft7XDSzS31KFFptjRnvTKuEw8g8A3gmNq6ofMszoQ2fJLBe88BDzv9omJymTKEz7s",
  "key23": "28T7tZosE4mgwB6Y6yJxXAUPHtiCmqE18rg84CPqw86mcK5jxAWE72pm1A2Stzx3FC3jJembu9HyRppyLnxw1wRT",
  "key24": "3ZjpricFoC55Nq2e78V5Tmk7Za6bLAoQp7gcPbyMSx3XLbZDG2iJ64JH7hCBBtJ85vcJVD1CDR3HwrtgRDxKz2H",
  "key25": "5kKYR5cB8AXXhcg6GCUUcZAL669hgNDcoFcEkdb2iy6e2ZBdAPrvMetnTs6xiMAqzt5TtiqE1HkZ87VC3H89YsT4",
  "key26": "DZShNJLjWQAJ7UcPzwMS9kddTSphQmdoLvQwTiZtLmFByuiuTbsA1U3oStzn5xDZkcm3wnfHFcivhEicT1XM4Nw",
  "key27": "SUPBLep5NoN14WqBWhQHBeEeDTv8sZNcWKKrgZeEPcFcemB15ZxWNdTphvqrDMfJy7s4P85UiRjoQH785pxLKiB",
  "key28": "4zSDV2hBxX1xSaMJvFAiYW1PangznoPbrSceAUH9id4nFUzFcBXrJVw2wjiQBKJ5WJoZWHpkWAyHEh74hk5LPkzv",
  "key29": "3Q51dSoCjYK9yhBNmA1x6HjYLK6u8Mc8AnKjsk8psML8hN4T4cdGViaBvNKCvaE98yjbpLTaWVkAistQ8eJh1DhK",
  "key30": "5Qve2JA35jHTqzpEL9mcn6dPcJUq1dx2Rcm4BRobtn3BfGVdw1DbJF1vZYYugsNqG8CMyocx7dw6tYeaULdj9K7U",
  "key31": "2kZUdApxaHkPoAxf3mokiZ7HdUsxiHBRZCJJNcGGL9TJP2EQWfe3JrW2ALfG5NfnajzUN4kx2voyNJFE9SpRY6sP",
  "key32": "48Lx82pGhsLn5xLZiKc1MCi1nYv5zpwe6tYceLiZscpWsyL9hxcNaiAWJvPjDEuG4zDdS1SGoQeKQ845nwhYtgXv",
  "key33": "2apjwrVHHkqgcMqjeEH5ggaTk9b4hsXSQ23cRTFzU7EXyWEjkcjhq92qG6FESJSQ2MCinjTbAqRSoVfenmishopz"
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
