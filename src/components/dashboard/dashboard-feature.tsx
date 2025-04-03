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
    "2BPV6BLPrhABupwrWqzQDQP3XCUoYmD4wrJ8h6eHuuPZiUa7rdqJbfH7vH7zFNFMTxxpQNAebg453Uo7DLk4rvBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yJEMzFvnRquYBCKwEbZrP4Nshtp5J6zV8GzJEXvcK8uZ8wYRomSBxVawQhBRecUxXyUM7McNNYM6dLQEJh2dLAi",
  "key1": "5WhxUCD1kfVt1ikqmVZZEH9PCry1FtmoZQEzPfEjLMFeY2pwkc3pFTibsDhjPdVn1q3UXzjSqfLDDQDWPwfWRozK",
  "key2": "2PEPTDCATGwqCAsFYdWXWGXpTFn831pTP847VyS6NC5hqBoZwPXS6DSnjfMus6JQYMStn8jKfD8FujmVDi7Qa3Cq",
  "key3": "3NWN7wSauMXXWnnevsh1cMR4u3pAusUiFYKs6T1PLaMVrMUhgaYtRrFf4e2K8cqfRAFC85G3eDFKiz7qL3wi4svf",
  "key4": "5b16zkYTpy6RfDsiybHW4npJpZiuQjcvG8rywYEcnMBTmN58hMg9QK6P5HSpxxCdvE15pwd8aUwpgkAihFtDAwCj",
  "key5": "2gKxvG7GL4MzkkBkTJd13QaePM8Ku52efEhYAXCxYYNUzVNeCnUT6HCwgMZrzkffudd3Ck6LXbpg7vYePX2gAoa8",
  "key6": "5AEKvErwxsHx5gihyBJLDJ8ghyT5o4mYxXra5L9HKK1qU1VGZzMvgNXeFtPp6m2tCtD99SHBjfNaAAUcU4uy4sus",
  "key7": "5rJKbUDMMVFcScjV2e3RqvszsJtJLngAAxCazDuE4yJGy2HhaCp2K1U68ZEBRfQrJyTxiwaATkmi4k5dPiYLpEWS",
  "key8": "2MxmQUueMSNT6Mp4aWCLNHSdQjKDCSZA6Yy9nfCiBLYxjGVbgrLX19D7dHHHsyhTeTUPRCL1btDoXzdSMhMhYvGM",
  "key9": "5KJ1BohivprKHGYKMYoqQosMsc3ECBNdnQEz3MVwcZw3urk2cnfXLixBdjqAUWBeBSKn712PBMi4sPYg5cvKCXup",
  "key10": "5bKhutSUTzsyMdMDzoLmNXY5L76GEwjBZpagNxHmeZaq3QkRbHN3Qw5cBk4b8xTf8v8cq6WAcgkCQLPbusctGLya",
  "key11": "2oSCq2hfGj3FLoj5FTgWg8MB9pWzDAs498cGyRr3cWMiRMiAsjBLRdSRNUA9ZwS4Xf6SrD7cFpgeBh3ZDxwLUt46",
  "key12": "xV28oYcKnpoHQckjUKienRdkN8HjSv1eQ4vcB1TY8BZnyZpXMYJgTwPhAgNbe15PoWgXQrx6XWR983iRHsqhzrU",
  "key13": "58zbojr6hSds6cfdi7pwfFd3La25s8iFePi3xmj7KDnRihmWV5T7sU6sX1EwNzS6WqXtk8k6ejp49WQQPFPWiReW",
  "key14": "56JAKuZ5CBaZkRZuFqmmL1RFdiqKxneZHjkT4WihfYicbYppor29ZXy3guuvv16KzYHUKZwLUA9bvu1j8dFyFMWB",
  "key15": "41oh1TWuyaWsrZU82abAkcARVPs5whShTn7FqWpPzJ5LKGfqLEbYPrGzeNDcbRTeHVerGVhnVdmN4i78P8XnYxsT",
  "key16": "4jU2F9KeM69Ly2Hr41r6VuuhxYtpqcjgEbJkRMpRVJL7vumY2fnCp1S6AqN6H1ySEkNM4RwutRXPmEZaugiBLxmi",
  "key17": "2Q6qEbnhmrDyF2kdsN8z3PXbSA7Vpfaz8pm3mx6HZWrZmciWst6LtSDsPbDj6RcS5NLDCq5CVZBN3nRKmHPTMqUw",
  "key18": "3DMEDi9hJPDQ5AS6PPcoHMD8X5b79uczq4wzyjZKLhswe9q35owePermqSt9WihvefpCJtgpD2pFsXqH24gcg7U9",
  "key19": "3HC1DaFnKwMDygGaNMnt9bTW5KiMazUeyqhMPeCsJ3pjQkC8wszwSKdaujn2bVBABNYB16dG1rtUVfUzHraHyrds",
  "key20": "5g3LpHiJt2y6GZy7ZLgBuxN8BmVUjJgfBN6f92yUNcKANCP2xrC6cTXaEPkrYcRiBSHG59rPaiFyqxkN1niAM9iY",
  "key21": "3KZqXS5hSuaQ6jUgFovjnENbiUutMLFgCGGy1LH7ZHLa1kcTEi3ZKJc9q6TLC6KPhdwoJo7Q3QPRkePkx62CciLz",
  "key22": "fTq4FpFD7vVBcVXLa9PyRk78tkVqvUtV3AwwLvBBsekSDcGVczFgJyMetCyunH2rUFT2W8KUQfsp198WxmvSR1Y",
  "key23": "cxdxNiJZiSgdaFPHD2q2K7SVCXCJBC8iX6wjTqKgn2k4kv1PHYMSZQ8Mzh1rn87XKBx7P3nSHHAR539QPoHqyqa",
  "key24": "Nc7djbW4BzXZxxhgpVPhZwVrmcyBXyj8Kn2qrL29zyfCd1Gx3fhxx1asrPz5epSv27Dr2vWgmEHpP19DHAPJdRq",
  "key25": "2unirdwiFRVFfqGkDxFBWrXaf1TjxFSpCaR4UwqWWHExnt8XbaDvSdHg7L6E3Bx9dnHbh2odKEvkWrUQSZJ6jjDn",
  "key26": "43QprXd1m8JKDyKyZ9HB3VvsLiZp4jo9A1EzH4TzoycCr7tiJpswVP8bXtTHeRqne4jq5Hbpsxz8LTvPbytpTewj"
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
