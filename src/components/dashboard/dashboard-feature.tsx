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
    "5z25NrXZA5Pyp4MtbQZrnxjhWFVaEDWjd8vqfqmR1UjVTZBro5E24VAnVNbyRFzQSB9VXLKugVY9SYBegQgD8fg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "szMiGx8MA3V2FzEJLsQJQ3nDbSuJQ9c9vwkruGwxE4i8AzLDFhW7g5fyFcfUCnYL8whPr5TcpHtcUoAcAAwoUc2",
  "key1": "2tZ9mn27WwC2ysThJead1rtCgJ6NRektLxCRcaTn1CAMMGNPALfyzJCfpdcEBq8LgWp4PGLWLY7BekwDD5cssqU8",
  "key2": "2TbJu21RPLieYbcLLghzHHwBURrQTcJFzLDPW6qgdjpp9Eh3sbwfoSn8UxQeuWwB3hzZC3pPmofbK3K5hPBVQJA",
  "key3": "3FuuMBkHhefzpx5absevkkyEPa7rvYmZpLGHFtMDN8KR5Nza6NwBPLtjtHjcUGTApvC42dWY5jETX9F997LwDtmk",
  "key4": "5mo1UUkc2wqoGWdBUqpAX9z9uD9Tu7qmi1mvHMSgBwNoaaH3qNHffesnMhp5LyPY7Se5dkq63e2K6KZSnQD43od4",
  "key5": "3tw67Xe1yssfd7kK3nfkkEkmqnioXiNkXbQd7GCvLoLMexCG8wAxACRiWYaqRBwwkxVxED4QBKtV2xMfZzKUem58",
  "key6": "3Z6aZ8DBU7PHrTRtSrCzBKHkfZjn7zyGJiT92STXSKhuMdyzy7bskmAAvDbmAgCHYhDC2EfjjJX7FEyYNyzh2s8R",
  "key7": "4v9XKThKhkCgCsH9ad1v4Bojhj7TaLZWEjivc4WLRTmKeMzAd6yz59XmzPB14Ua7RP13h7uoLDffPWFnLunF6yEr",
  "key8": "4sZ56WFqsk7db5Q3dqPEq9vFQKgiu5Zc68pvpHFrarnZm9GiiBX52a5FVfRD9ADPtM7hV7u3uWsLS6yC6X7bYE2A",
  "key9": "5KRhTXUK94FwezLxmJL4JXQRcFfnkU5H4woLeYAEmG9oH47hs9Z4TXf536xiSYSLhXjgTHR7wurrsDPdZ6i3SxGi",
  "key10": "27xtmc8HUkVbVBkQzzenymJZkp8gRzyoNcmvz87j3vDJ1mhS2gxua1S5HzuVdxF93yUwXf352PusbfsfFMb9JXSM",
  "key11": "nSSjXCQsGe9ruFUr5NPM9Z7HMnVP8yR2zFn2sKuxJmWfcmhc9tb5G9M9rDFefi8aJwXtDPvAx81yW1ksJcF5uhs",
  "key12": "63mUfPr1zsJVgTaAXXWdywnUuFVh57Fw1mA6UdBRLfjabNLhkW8qDxxuCHeQMStTeiU3EEuayNY27RgXQ32fn9BD",
  "key13": "4tNPKwn6CEf4ywFDYg5X8vcd45qsk8zNRci6yDoRfQBztWNocruWMdNpfCJc2b7TX6JBhVDqGC3QQymcTzymHjYg",
  "key14": "2QjRUifTAuuTDvtHftfjrQPQVnvYC3nF3xrFFjeXV9213QSuVRLdWf5xHaTL32SmHfRpfjza8Zc2KReb867WiKUg",
  "key15": "5qeDn75p7BCAhvZr8AgmsvBhgW4WKG7tL1SMG28xFruNxkR7NRBcgNgyGVRpQc8siZF8ydNkdXVPHYgAnxBzGHag",
  "key16": "wzcHHKxsgGhbjxmGf3aHS2nMmd4gdSB5kokxDip8oJ9kVm2zdJciwAd5feyzFHwnqBeN67ZG3xtPTD4qx4yFGra",
  "key17": "VkYtvvG3rEetKpywNSaCZ6Y7vGtF8EMY6eXv1ycKkvZaDZz2jsppB8WCfekwNoqgYpDG5nE6RgmgPcW3qsjjPvb",
  "key18": "3quhKxm8nr2DTfSMTkvwRim3N61TrPSq9yFFjxco91JRkRL8R3LDZXe4uoEpkVTRyqSovf4xGW5Zdh6WRZA1zPXE",
  "key19": "5vHLwdeD9m2MMyFhtk5Vh5AyV2iAHFMMSP1XFYn139xGtMxFcPk98fRRdDFhaUWr6ZTHQoEYsvLXkMKBTe4zJokZ",
  "key20": "31VctgeYawYevKMGa1A37CKGDm1uR927TtPcuLWzVnXxFeReBaJu9pWApWBAge36iiCDvdq1Bzh2g8LZ5Fu2SH88",
  "key21": "4aBQa3j1NNhjvRMBVqK7MyeoruNRpeoGqjJ5Tw7ZHMiRfQWV3HrMc3oRNxceBSFQVsdBfoLT8TMoo2QVJ5fzfiFr",
  "key22": "4qTMoxg1p6ijEYRyZmQ5ZEfTzVGDHPzCovSToLJskSx9hkREqRyLcqneod8Vrz6pU6kERrbHsmanoKZ6JSmgN5nE",
  "key23": "3phHJar1cviePT96BxJfZaUg6aLKVNPeWUDts9ArKCGiVsqcSQMjL7s3PuB2nmYxkCuZMV2ZsWw9MwA9sWzpy5YZ",
  "key24": "5asAe6q7p9DraVYERkJpbyAH8ZGF9Ph6Cjfb7Pim2iCt1gkacyVCX6FjRVvwdfAhy1nCaCjZmLGjVqm9MEKc4Er3",
  "key25": "2wUNRbsnZ1wCKPiYJz3h1RvXTbDLSx6SMfwrx7CtBBG8LDJ5Qdq2DN4sxxUzeKQEfwT4D6DijejzGpbimM9AzDiN",
  "key26": "2hcToXZ2RHEqdH9NcA61e7nU4hvdKHWkcaAAAScuWTdzJAm15fj6JaWmPgpCV4yFc71XdBCb6Zn2ypp6owW6NmNB",
  "key27": "4npuNVexyHBqrDJaw3V7DLU2AATNU7jKNFDNsmEDLfRXHQv4qor5NQKRfsCvxPQaZt8zQHzmE5F1aeuKTwRD2wkq",
  "key28": "3ccfFqwSeGDFJWv5LeHGT6CVmjpXCjniDY2DmRPSQu9DSNhvCEpBMEJx4KHGkXnroCQbMPZzkngPzfT62ubxEnwe"
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
