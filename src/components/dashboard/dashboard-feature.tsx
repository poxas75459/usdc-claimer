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
    "5xk17oTanFJG1H9tQWpeoqToVLvgrsCHM2gkSRQZd8icJzfiYXGSWxFjZgM5bb6XBh2fpHiYkU9dLzY94N2k5MMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P7P2h1tedpaQeSPLGuKWmb1t3ehSGWq5zdhXYLgHPEL1PLrGchiVj5gadnxsV4iU4nCBjQAFFhL5bEwhdfeEgy7",
  "key1": "2gcxwhC3TbWG4dsw8qZYmt1yAgCUdJixkUQ7h6hzCdzqLwfs7Ed1r33Kq3LxQ9uFKTBwhxpswvrGH2MgQDVWvpaQ",
  "key2": "3mmDjMR5GUhuGZLCmGxcPjMoD2TtMpmaN3J9iidfaNvEHJ7QEgru9MBA2tjWdayPfvXA7K7X92WtXJEzoYR6Chjw",
  "key3": "5u2pZ68ueEcBYPtJ76YtASqVRJXfSLQmQRYWsnTzoE82hYcb5EtGNrnW5MBxmTvq7EfEdQLFUe3jfMzQ1ucURrk8",
  "key4": "4EYrFBS5FaJZDEV3f1qsoG8HpH2WGJx3GRtjRuUQUDoo7dcpcmfcBspmtYVhH2XHnJK9UtvMzZCJZgU8dLUkSLJ4",
  "key5": "25MRfdbwhrTWMPYNQMRpLHVj9SCA9Vffck7HYXJKfLYbBaDqje4MsNyAGmQR995bxWv6Bo4XAKX8pqSUxW1TpaTt",
  "key6": "4bPHU7VZEz1ghXe3Lcna33cWqBC1Z8bsads1cBhvurv5Paz3PbNQVeACCSYEBjZDS17wLBLZWiRMoq1V3rgYcgDp",
  "key7": "3rudporRA9whMV5gGLXgY9S3e9nevb4bxna9JZAVSzsZ69ZQDjrKb59yg1i2hyPjxGe4RcPw97xgYvVd54aDWhWY",
  "key8": "GoAgxztVpKtyzyiHqGizM81nACAKtfsNNr2vuh2wspnEta1XfFgMkKWmamfP3vLjJVzTApuLSLCT8xNgao9KQPN",
  "key9": "5SQPuZoQxkUPQ3S892zS5CrUfPaSfgVg4BCvnAonMXsJEbvZBxMRdFJfA3RmjsbUFGNTNjEkuZ9S1TSKEX6irWvZ",
  "key10": "4VT2TAbMPxaJfxwNhMgHwv7A4c6njegLc9bCDQeL6YaNXu5Gpwc4nyFnd5YNNUGANS6ADDEFXVsEzuwvnyAnHhPL",
  "key11": "3ZAYvqsTWw9MCwevAWcCKjEHEJ4AZwLgepRvjZjznNwcrnJqRxrmjVGsE4rGnGmMTD2MRLD4f7tMAz6jL6EdpfRS",
  "key12": "2iEt1EE3dMvivLsLwQ87MNbzx8v1rVsfNUdUmDyWqSYymNbKLMn38LRdHNmVok7qfKNq3rXc2fajBK33DwCRmKd8",
  "key13": "3xmNVVgvSnboJwwEvCR2FzipiEaRU3Q9dNi6p2QjtW1uKmpDY9B1RYRtAcEemLwYfabM9uZtDomHBi81dpC1TrRN",
  "key14": "41ZDkMJjpcujvCFU765ex5dGahsX2TPTzbmNAvVdt3KEVaZCyFuoKNEq6qTTFucfUydNgtw3gCAke4ji8VGseh3N",
  "key15": "3hn4appVKCxCcpV9UPWPzC6LS7PvsAiiGd9F8cwieMLoHLz9gJ1i1VWJztyiKgvdBsizG3iAePV2GcykdNWaQ9ZY",
  "key16": "3QvZxEKh27PZgdvqkuYDGnjStFHcUBjCCTTHo9BbgG7SZ2U3Eb5E9RXvR6zP2KNJ395UGk2zAxRpz72yDdMfjMD2",
  "key17": "5rF7Apu25P1F1weFQY6tNS4icKdqmeqCDGnXHzdMLMRbeesHHeMCjqiejGeDqLngo1TkGv3mk1Y63w7oqAST4gXP",
  "key18": "35SuDkCgPiVZATbKtsaFDamWfkU8Ej4b222oDRSeRD6iz3n16W4zkB8pvqaFuLAogjMNJ6DjwFJr8Nw5mxLPcux8",
  "key19": "4SjmyTSoV1TnxSKHRmTp2M6KB6v7KQ9qd9LHj1ssgwSKS3XVPi6y4PJByHHMANCzgKL6f2MofcPcqVVFPqoH7nUp",
  "key20": "4zVxtMhwvdTtSSB8h3Unf8jJ78SDve4WMzmxuUHN2tEm9EzzsL7GrBin3MTzt5zyjuw31PSLXvVUhdwhJHdkAPVv",
  "key21": "5R8kcJHoJZ12vC555guXYey57uaEdiXNCRAfPAgWjbw1xbdym98Dke8rGndw96B3ztqNsYaQEpoitjs6SyNUS9Xw",
  "key22": "HzBuBKaB6BC1rJLnwUbMZyXVxWCMhypvE9Cp9rHVDYJ3NLebTRaN1spWfqTajRVtKPCyNYu4puKNrhDqTBTCqij",
  "key23": "5MxFL2m2sQwKprspiXawwGNSPfn4E6W4GRxsExb2KA5Mx7TfsM8PhrmWsPinduzfVdmVMUXABzwEcgkMXiExwNs4",
  "key24": "4KmYws2TubAUhryq4eZfuTqT5vzqZeahX7s39S1RwwPWvHAYD76uy8b58MDvFEY9j523DorvmAR8TtpFLPWQsJc6",
  "key25": "2LUGX7pHZDpAXkfnShQSkMy1gEibSPY8dNUXpRg6UqUzDyzJiN5GHWMEy6STKTfxqmpPewctCsuJsFyxh32QLd8j",
  "key26": "DwndMcvVzbcHiCjyeTV7yuyYfarKXytpN5EYAxyD6hERrQkkdax6JZrpuxWZ5pVfEhsa2rsMhZXKncbEPLM2Qmi",
  "key27": "3QagSkW3MsQb2ghZWSxZv4J4Yaif8StYE8Gb2uCa6hnaVxtFR4rb8HVzoJYvfZtbSr97RbksbTTeQPUZtyuLt67W",
  "key28": "4HST7yYjHt6kP3qvKqg6RZbXqwD9BeBRQLT5bDJ1YQySyWuKsJH3nAxztaMFH65DdtUEmy8UmDVaeHXxsDkDVCJH",
  "key29": "Tw5qrWjrqQU6afcNEW8XCFdDfnGZPmZvFP5BupUHD4H1vjV7EP7M27h5Uy6ZEadAFS96MoH64mXJGQzzB18az6a",
  "key30": "2SqQePoieBzZqsnCTuxDE6TxDUcBbpMGZ2d1kerAUTzYHh4oxdoXDLnVedh4Fn1CdUGbkCww3LqE9EoSvapHfG4Z",
  "key31": "5CqYqG1z5KyXwkcnE3hcb79p2FMSAS1Y5n3tqGKPj7wDDeZnbXgkFhAcfsKyijamjnYtnjVRF8gWCSyNA8XBexsE",
  "key32": "2nq4i7PoBbyZbSgd2CCFTxwLfgoU9HWWmHC9aPktzvBCejRe1MJpGs49puQfWXc3DYvmHc8JWaeFMCeLtsEsdCPW",
  "key33": "5XYcGzVPA2N5ukAVDb8QnmP5fZTBANAUE9vE2mREL7kw7dKd1f5iiqmbqt8m6btLMM9vs6nVkSZY81gwGhY9R6pA",
  "key34": "4HPusxpzzduVzWWKd4PXiphBnzTGoj9cB1kRYPoshTt8T1XDtMYPZ8Nytd2NaTnCExBW6Cc9ncQDpP2TVhfXjnqv",
  "key35": "57Xzrj2oaPeHmSMXXJSH2ytJrV8Bg7cArHGHLoPWjeKaoFnBrCWjigFq84Uj3FGCnoYTrzmpupGaxM3fX1YZ4pTx"
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
