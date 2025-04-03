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
    "4ShkTgPSTtZq2n3isttggDLa9T9yM9M2us8yrFpz3ZyhpJCz48EncXLmdgYWMdzHpN27G7PBduDd8ZpAxccrex5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AjK44jbbfzTS2DuBK2seUE6g5x1MBSYMZh2KxD4CehvRstHPY4w6A6aR58yyF9JCHj4RYdsoTj8zbFshwyfKEMg",
  "key1": "2Xh6B3dGZdxigiufYsEcJdsSUEHc4MaFFtrrwdybhesQMS7gKVmTGq5tMVvVpunLCcL43EbdXK3xez3q8VeuzMDu",
  "key2": "2EZJdo6pUYboksBjk9WZXjKsyEzYsWyuwCLgR3UCej5kx3m7ML3mm4XRKBftWkaMRYb2uCc1hgEmUegCa3h3D5S",
  "key3": "4pyR6LNE4iQCqt3rv9bfLjsofdVHarJmt3Wd4t9gk1d2rsYCwRvfUFUfS3higfTAfTGUBpeHHB9goteaUFX9WG4Z",
  "key4": "3BJ5zJdXDGqpewJkGjBRT7Y1GoE8QiskHt6VQ6HtTPBSUBG7SXhc5yKckxY2rFdHnbzZbwDpdo7bQS4VBkQRycSf",
  "key5": "23eAVbkDuBgSKzNCC8nUEWGKCMt3YEiMtmgNoAa9XCeVByA5DDjiHDZm7z2rhjGuYqAq1vgLjD2Lkup4PiJeSYK6",
  "key6": "5zBx2tkQ1rhHZBQwz8uwueDFP3cL3SVxexEgfjHLDzoBYZ71GRWGhtW355338PPQ9qgubPzqbgFdEh7dJHKwdrF3",
  "key7": "znqS1eFseEArPoq2aw28DnuUry9UzWmEvncZ62mMruQQYg4vckNQ4jGEZ8gU1uAr3415qbgCMWnPFGgYizzUbDC",
  "key8": "2b7mPJj34tZ9SGiNX5aGefLRiYifYTa948ieV5wSNfSPzr5KrQpDaZCkVdgqme6SaaCZSt2kXoMGvMwJe9WAzW4v",
  "key9": "46eRGKckykuRB7RXNdJfAez9KLn8DYy8iwcEi92w7rDvgYuAPzm3z1bymxwqZfB5tUZ6M39RBBSRhStASBYx5e1c",
  "key10": "NDHKAdbXvjZ6itsKtqTvtBHiacp4NvePTKQTcuc2MxT5GRCwE8wBmJYiTpsqUsWv7Gy6jwUNBwJX7tiAn3kR9vY",
  "key11": "3D5YCZKioasbiTrbXDqXy1oNA7DYH5nrmtnVZCWc7RME4UJ1gCqNx93YDNowZt11jn81DE3JWwX98vVnVbZMQAMF",
  "key12": "3VkEThjtghVLsWj4dWLLY7hX6rFr1MTDZu82RKG9ndjTwbtfPuqLhJ6QU9nfhqnWYHJx6PTNWMsW7ubHBydwvefm",
  "key13": "2ft4zzRU99zHhXErnHcPitsG4iUooTJqnFntxjge8kH5H6qc6fMdAHV4WqyHxMoagd9W54PGMwEVbFNVaj3WGvMg",
  "key14": "2VtqmUg3AKH18pGimyejYRwwoohtrnrxf1q5viZV9WC8QnxyojsmJTKRqd3AYjtctMS8pSKmAWJ2Nm1iLZvZ4Y5L",
  "key15": "2Cktx3QNJxHKdMGumvXHu2fGjCpFJbMf5S48w48h4YqvZg45wAwh1J44PSCxsZdxsvrLws8WjvUXTKPXD8B5EuEx",
  "key16": "5zyPVGZQhyqwRVz6gdRoANDDjhGSh2Qrkdx5XqQbqT4raCRjhF5vC1s9effGHgJBxxthRqkqTUoffgUFQbMp7ZV",
  "key17": "7Gs8DAXCP4vYC5nfVogasE7ixTREezSRiNgLdMFQkpZPY1atXMjr8xSxYbQd3r3o1VYUBUp74Gk9xaFuQhKRp4S",
  "key18": "hvswDZ6VzVonMh4t5TZwqKBeKqAJxXXLbwMbsGifCKLwAwP8PnKsr8yko9DKNaiPr7PrkV9RDCvcVofxDZuvMPQ",
  "key19": "2vFzZ12Tf7JPG1kmo1QDeN6jxzzQYHEHLdszeQ7NG77RmZozt9p561mqsxari9mSmT5HmtFkDXBmWNpf7ggWUH63",
  "key20": "24mSzqtQfWSynmwJnWQQr58wcLqRWUMAGhwqX1ymxJYDP1Bm4RMXLba4DKf36izxKrKe1dGKza3vStauft4Xj4KV",
  "key21": "2nU2GwHg6soz5ofb1Czwa5i75hYZGbbJeGuTWJna968irPSZCjnGdzKfQo7oWBWDyY5gcHne9eRwdyGTdiGW8qv2",
  "key22": "5tX1H2uV4QQkhUEnby13v9qDydWFNJ1uDfFp9cd3FR2LkLk2nUG28Up8APQr37S4oHeNKfqZ86X5b4MhoWdgJdJG",
  "key23": "29gW4GvZWC1u13RYMnGybi3GokXp42R5aiFNyVsQaR2GQ8xbT5DpaNAWEP55aLtKY1KLiebC3ube6MFu7EhFvJL9",
  "key24": "5AXDKVqGsMsdRKZq28godMKTrxVEZqwDGcAXT24H5pEvP8PwfHCSqymz8pBcoUuPCDgynsTmQ79YoMLuzF8PnMRF",
  "key25": "2Yv5oPPg7vXtEBRcQEtnbF7soeh1bXovkfebr3E6a2pPbQrD22kcsY7Dmkw8oUWkHHUyCeKxXdvc1NuwjeqpQgGp",
  "key26": "3nFafBGR4sVPLqvb2QVM6rowb8WibnkX6jkaLrXCZmtJg2sNFohcqDVJS46bQJPfZt3dgSQX93UJAQxe7syLXpce",
  "key27": "2BGRSQrnJBVX3DCfXPFm3kbcKb3AwpbPzmfT9pz9w7cKnExiGFyB9kk9GrpKPanbppETAtnTqhMNujdqRWYYBpfq",
  "key28": "5XJHWiRfZnbwLzySQKnj863o3gxECKsx97RxEytzaSRng2cBRwRTpeJTn9F5YPvaeZtNbpx8eVvXe8UgpwiibVPP",
  "key29": "2GPnX1QCeeopjEaDMXE13CoRiyL8LaQuKHd5bDnr8FrqJJ6LwXh81D8rKWvWiUV56UXmz1hCBoFJ75V7qwnmWjmH",
  "key30": "HECmFJPnmhR4ZfQyNDDZHRZ8eFHKzVkmETk12mibFuuufW8o4WyHyHq49WzMwrGQvE6nscJMYsT9JZkY4hXMJAf",
  "key31": "nRWvtgrRJPNS56DPZVVmXypJdbhkUjyPA6qhLgaERFtPPuX1iP9QRXb92LQg8FAoQYpcjMv9hquLfNniDAgj9Rw",
  "key32": "dEazcVuCcDCqdxcfeyDPEryDJSnEvnosrHvBzvMynqpoN5ddKpyd73ojsGqC6q3uTAoT9BcL69Tx9EG46FsBVrt"
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
