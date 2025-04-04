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
    "4HVCqRQ1oT5m5mHP2kqf3st7GXapV1CXyZsnNRDNXW5eAxVip2TQ5Wu3SrkhQs9BKghg4yEy7Cn2qHZCGVnVs3s8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K5ju4tGJKf3Gk5GD9z1WpfxJyAscCABZVHoLXAzPndJhEy9JU1djego7rAMCSVWKRGa6CSNyXk7EEN1GUKuMFFu",
  "key1": "4jphZ6t2LZi1ajw4TeMomFzT2vyNc6fDDrWsMpSFsDnLQdZExWqZuyFbngigyLXei6DcNtZAtGSXSgtxsZHiYcob",
  "key2": "4sAYQ3gtavoWFbXVRPF14MA5wYbdxxbLrxoUevsobAscACfw2duHtVnBrKehheCWqi5ZerwKth2xcRtqtCdN7omp",
  "key3": "5AZ1EUBnCjyhWYv5fQFixYpZsWhK33qN33F7zQ9sE8331vXBq68bQBkyxMfqgDeDFqG46Atftj8njGaKaiXrigcP",
  "key4": "5Aqw6izwWVCD9XHVdwyFYYRKAt7BFUtRVSwosknwgFptDUdDddoPACbo9UxoUvvDJ4BaRNRB5bi4zbiknR7J7n7y",
  "key5": "4fu7sUdDYgz3HcdW1fYcihqS35WsYpVjK6NBKfwXJfn2SdHbcRvxh4ihgbosVt41pXVfj2ykKDisQLTQKQFaAsv7",
  "key6": "4Er3Bo7Ai4rh1vHPAtyVEWacy9F2aQwgT6dbxWospP38eFk4ciVEQkvZEQMgPMe6cukneyJZUZmZ16aYYTHjLifL",
  "key7": "5NHg46c9xwXszqNWD9eL7R1NXaXqNXVEzB8EqNY6NWbwSEmZzMVYyt5ThcCwN5vTkBCW3HLKo97ZB8dUGNbWLSyG",
  "key8": "58DZK6UThg8sYK4irv2EXd7FB5SHPaAgSojQxgVqTjAgnrgP1Mb2UdiLRkBogPk4RcvxLryZJQge5N2cBk2g2sGA",
  "key9": "4zsPdhbzxncxYmmjwkwH6fVQPfm4Fd3Pv6fh9BsmLSGNHR72gTLYPWip6QnW3ErvfRh9KN4KQt18GEnJgBprvxCH",
  "key10": "4bnTnKvrSKaxJMeSTjgjzQpbr9vE7NZgcgW9Uvvf9sEND27CeudeqSaaGHXBuXmPZ7cqVym3QJm9Z3eeN8fzCQoM",
  "key11": "2sVFDFU1QC8ozuEuJwh3FWpRhCYX3oEU2t1E2pcBpLbTHTAmBsPpxedKeDbjx8koeDosYg4fnGCCo1fWeG5pAu91",
  "key12": "5PJ9NdVHE75CLhyP22rBX9dQX1VQnnQHEYbQeT4TUb5PCNMMoTX4cdh7uAqX8N8f4ULNu9yyUuyT57qt48F7pAzr",
  "key13": "5XeXUFYwQR3UcCdj5RcwyHB3c35QmTkz3wriPdU5wJf1LYkgfT7Y9y9A5MMCLJLsaahPye6YJVRVubJS5mBjbqFg",
  "key14": "2iCghc1aGniKorArSisBrvFv2DVXun4wNMkD7NK1gwLyZzf8m6mQUk2mzoLM5LPrETXUeiRJVGgsrASP359YYTA",
  "key15": "3e74J1NST8ijGfvd444gQKtbwAHjSoHgGDdSafwpm1bPv2x16CguaiMKH8Sj1mGbhS4FYBk9iX3hv8D3yYPcxy6Q",
  "key16": "2uw2EmgZqFSx8Fa26V3h1VUeD7xXA16byAajgk2ytz5fRfujkCqBcwq3YJbAwUicYj7BFybcZGSbj1LXY2X27gV3",
  "key17": "2edrQWYPFhNqiDCGPG99ofpXGSxWtZWxAbRGphSECoQY5giEvznE2zUaW8oDt23Txht8cS9SJ5Zbx1cSsBhmF23e",
  "key18": "2xTiA2RfBnykbSLMjK3Lg6mZwrg2PcyntMzHtgX699zwUC3UfLZv3LLYtkwz1fPFDeJQ61NWaXd5hi2fhWZNhtcZ",
  "key19": "4VnqBzJ874RTPLE8y11jSfh7ABZQuZvVDv7kg4SKf4PGBRamyiqCRA3PwiQNWmst9dxxEsieXcdpvyaTdZF3U5XS",
  "key20": "63HFksn83GXY3NvjnS2xPDKMTxYSBWZRFSZnFKfSQ8R4Hi2TmhXsLs3vyKqq4UpwgV7tHreDJVf8oQ97yEthdZ9S",
  "key21": "3HUCRpbWiQc7WE5VCoUV8TKiEAN4ADRi1WzGHMPGKYq8RzuQBPYrawsBFw7HTX28xCQNJVgPXrHRexAaARtCs4RW",
  "key22": "2fUY3Np2pL5SWGj7Dxan3uEdkkn5xKHphA4XMK5ZcSkBo8kTr36YC16kPUXULFGudtkcTSeZnQ5WYXfrLJdVVw4v",
  "key23": "5zaFz8XmmVLJ8xtf6mhqgsaK9qdNaG73T2k9FFVViuJ9ReN3JN533t6iUmzh6AsJ8QHadjPz2hKmSLkHHhT4y4eg",
  "key24": "2B82Hj5hJmhekVcdhPB3mTo6YRiohvN8ed3Gca6qPSEqH1aM29fkzxZD5utVzqfDNVrk4iav3dYEFrYRDUYjojAT",
  "key25": "Xnf7RoocYDJmJpuLYbXJ6nyzz3KmfYLoVaaF7F4dQu9NyAonEFCmdGroeGoRg9voSho1X57No3Gjpzm5pExWAe9",
  "key26": "52rz9JdmFD7GZbcnroGjqFbkyABvoSQ4hNspr33Qq2sEuYmyJaeam7LmzzdTFSy1HgWVDm82ZsV4H3jv3KDhaMt5",
  "key27": "5heUomhCBoAJ3QSSThYRWE3jckKmUKr2dhQdwTuW3gPX5R55WNDWzM9cFGypszyrteWkPVQrhrM3nWH1h18Wp37o"
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
