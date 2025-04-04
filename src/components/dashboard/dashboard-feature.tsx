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
    "2EqWrFhqPqXErVakkNaqw7QhcziyDQKkUYSXnXexySRtZjgNm8LVYSkFSZtjjD6Uv8xrqn5hjRhFGdX9EFW9NkdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z14yVw8726qFSQJ4xr6Xt53FSrk2nkLv1sVKR9cjV4qvamQgZfksNDWuCQwcimDFzzHrYuKj3URKn7DrzHaiaGV",
  "key1": "31nrKUnciGC8X4CLjQecDmsnbmr9nfZBbVtcpqk9nuWRC6hdUPNAPPdJSQkvqveABmrx5hW78PxYM3NptETBwEyY",
  "key2": "ChX4zNKieQMjgWUcobaGBZ4gUG9xKhaH4SaMG7q4qC7yC63d14qBhw7GbPEQLiJ7PxY8GfgAJ94tVukAd5L9bh5",
  "key3": "2qKpL5wr42fHitsdxRYwXYaA1aMCghDwQMJh7HmC8QAgzGRW1s7HcZdf5aSgFiXusQuDDfS3QEConT9Gm6yWjjtj",
  "key4": "2mUVhcGsxLW5GnVwmoGjtu8pNZ1HuFGZBVFDwCDgEKXPxJxQfHRAYu5a85RiMxMu9F7SNcumJ8UyiNk1VnC7Kvyi",
  "key5": "2RHzsUf4u73zggzREtycF2MTGahEghFW1f4JMfUBYBT5V9xN76stRcmvQm6eT1SuWzMvfZXDhNcBsHJ5koTKkSSc",
  "key6": "21NbsZ7N2bvKfzdp7AXFtXzhnwWv7CBNCdYj6GgQC9Fz1dwUotsGtzYUj4nCX8Hn31xN2m4JDvcjimEJPBZv4WZ1",
  "key7": "3f57YgyRUkg9EY29aAWmDNKQmyFYBMyyTUpdY98n3djnWqXKsCKUdx1hD26X78FuJdzvLSiVZR8hJc54wuWFaARk",
  "key8": "2BqCWHB5wpCi8JEBjaM7g7mEXjcFWxDHPjSY5HcPvjWJdz4fBT3fdgztLQ766S8aRiYV5YqH1i3gBe4i2i7ECEWa",
  "key9": "4arFsnYWPDb9ii9w8VtZVdD9V5Lfv5R3VEfsGm4EFNchQ2zpPuvKaiDwiQn2Fvzkq5DACFRFCT6bzqLGHwnoDmaj",
  "key10": "47MSKundwazAn4zoqV3oi3Z4Uz9VxduQ74nWhgSmq85nFg8j3zdEmL4BrxgHze2xsPcnMHXmWAfLJFU6w2UeQNQw",
  "key11": "zcoMRBLYqDZDSN21TeMBKak5CQGvRhwssTovw2Uugvq4VspNxwkmRk6q7XELttgbsuiTs8kpZBvHw68dEN5mWfQ",
  "key12": "44WkX8ufbZXp2j9vLXn7LPnA12G5U59LHM88i16AiJ7nW6u9D96DULmnVfwan48dCz5t7xSG1ghjAT7nsinjdmHT",
  "key13": "4nXm1nQxFJpfiQkcXCviyoA9tWFbR4jHpPx756kEjpdYNBqYvvbLke6NtE5czmxfk433RyuRWiBEUyYZGzUzSwVS",
  "key14": "5NDvF3dayvXZ5rt4th4YkCxd3BzmDakiWxMsfixnB3k5CjNUdwu3miUQhqU9ThctRFd4pLQ4FzeqzLZiGt1mJTbt",
  "key15": "P2AoTiSh5ZLCmGRm8isV5TqepVMcpUL26rXRK3uGG4u4Ygr5Kzqqj6XTzzy7xyBtdrmWPf7fwizunr2MeJUDwjr",
  "key16": "5MDcixy42WF2sJUAmPgCz1WAw8KQoKL8bHcGiajVDaTzapwsTaEVmsx9QV5wKKRUkLWBqtkCVuMxPBDXm6jjQoa9",
  "key17": "3p4k2R6YtuC2gNp11m3fDzmKGov4SMpukyeMpbuTc6NztwvnUcwMErB2jPqQJ3m7qF7mCQGRmEagZpYEFo7UDGH8",
  "key18": "5kPnC3NxEVmmmyTgUDMk1VuEKcaPQvDfHjCWDf8LC8mbsyHSqrkqHfpGmYV4vA5HbgyDM2pAtHNhA1Jkk4iffFws",
  "key19": "3BwWZjPBoVEdVSRsRaLvzQAWSarBGuyEUPxkp67wqFqWKY7BedeiVGUBLXSYG2NQpNfGyHRg549uye18xDnTkqsZ",
  "key20": "zqQyBkHBnJxXNj5QXRXP3qrnwpMhMpt8CKoCCwUctaR1bHdAndCedY4FVnBBaGrhJ2urdmDvKaA25ocCyB8Sth9",
  "key21": "423oQwQWbroAPZhyepnQnyYqpFUzoi25Xhw1sG6KhYr8TKcdWjhjEz59FyrjZXVM84GBszgfshrrFK7KRvu7yimu",
  "key22": "3Gkv5oZHhucjHKgJyRkRB5fMmPvPH5smE5Khwmmp11j4HASk9sfnSBbMz2p8kULqCaMA24z8KMi41ymDP3AahvCY",
  "key23": "34N9oES59jWaDtERTaXgRXAimwk58FLyf7DjWXAcL47EnJg6mcZwwgZEENraWP1U3ZHjNeM71XyR3Ffdh4mEVJpT",
  "key24": "bQbocqsnqgJ4gK7XA8MMn2DbWwwizTLJd114kAjREvktaJsyPksXHA4WZkoxx9jdLoiAcXpDbym6qVRxjX7Bq1J",
  "key25": "xt5tYY5JgDg9V2L9rCppUrSLoovPAP4UNo4ENF9ngddUm4WAAo1RPbxcaJTUKw4fAEX4J7o9envbB8XHs3gpf9h",
  "key26": "BF1z9rdkr59e82SYrUyRH7YCnRpUUkztFktZwtBTwGwDWBrf7b7GKZ6torfPVfevG4CphJJKnebPWBqo8a6MFM6",
  "key27": "2WMZ47CKSgtTYpsD3Gia1c9JNF5NXXGpP6uN9YoSzityLtVtZHAYc9C1EppoZhPXYVRUw7QCZKuVXx3oN15Safzi",
  "key28": "2ni6qU7utsCgNrCszFkLcBJbaPdC8uETULWjhU9nxEqta3WnuQHwtbp8nKLVWGWzerEFfrV9bY8hAGq6PvncS2aa",
  "key29": "5PejAhsWt7Dw92F5qhKcNRZpDzjNptoyW5RNPos5zHAu97g4WkPuRqRszBhRe6ssYxCJjEA3zLTfsRvoYaoJnqwB",
  "key30": "4u9vmjjBQmseKcwsw7i55GwULTbW4fKYF4psdRHoA97vHgPAZbjNFpc6rATPv9W6S9y4D5nXjrp5fgFX31tyABX",
  "key31": "5BvadHnMUXdVco2Yr4uwT2ahRAFnEkW9VYnboLE3iqVWKqk1NgpnzPJ6cVfud5Wz9zEF7zeCtPu4uKFLBDZUmQxF",
  "key32": "4hU8f4cTANgRpGyt9sNaVtKPxNjB5wbsLQDM5pxWN1xbxNrhavB7NtLUESpGK9gfRqjKqTqNzbZWEBbZgj5JX76K",
  "key33": "34FPuR4CiyqfRHwahkkNSCW3Xm46Uxyn8yCjUsCikh2XW3Tf5jR1fnmbSMsgtGraec6KHmBSBsigNA7ucRsSYavE",
  "key34": "5Bz4MRGZ2XAGFCTMEcRBWarp3LN5kF8AtzHjkksPgXm5UjTEmEdeqb8uM2WAjozAKUwz5LiLwLG1B35HPJJk3us5",
  "key35": "3ECBh3K6EHAwau7XwFX9aj4duxr93pmXoMSdRETypS4AUhfjJusVb3PV3wKJioiy8AXg1qHsB5vzoBBpJxaVB6PT"
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
