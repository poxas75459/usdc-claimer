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
    "4rSatC4vyfyVw2RkkTJt8w8GDTfWYt8UFRghzQtS2NcaDzG2PcY8oijc3HE9YmDU2KrUhXFWzeT4rJTpfKqdpZqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cfaffMtmQCHsrzsN1Y8qgbHweMc7tK7Dr3z1FC6pkwaVSct8caVriLe4vxw1dKGtZr3Ka4y3tM5BoyhetkZPoGF",
  "key1": "5Yc4b7MqM4aa8BJKzFWjbvQER96s1J7xvYWYahkGpsG81G2LVjL53qR5q9DMEnaMJwG2HKyHNw89HBxR1exCsiw7",
  "key2": "2Yuk33yMLixGW5eWAz8zSqY9MJBrGTvu8bTiXStrWY3m8uqeEK6YFyBjdK64M94mPzLamp85iTuFrcSQz6EK6BdX",
  "key3": "31m1nHr4w3n5muNE7Ds2QKmTwfDLC4VwyrBXwYbZLEFGskSwy7Sax5auBButnn58QBY8qzgJK4KRCDT42v1HKTsV",
  "key4": "2EDBBS6dFnbqJ7f4Ha9PA48SZpkxZdsvn9RZBek3wSw2rofqRauYyWynGPsGkcn77eB29BM4qgsJJXyQnQtXbXsx",
  "key5": "4K98swgypEEDmUQR94g2VXabHipTedzv2DvKxjDYKNhXFFRPdFdCdgryLtbqm91goe43v9Fgb34YDNmk3AD2xomK",
  "key6": "4vSX23ZpQzH7rbiQp6W8JDUGkSQB8BeLkjrcvBj5BZcdsxfyqnFEc24NaQS8WFp2X7ULhoyep9QzePNKBMeFbMEA",
  "key7": "4PMeXNbryfF6CLaYyLv4L9dEdG1xsPUTBubNTHT79HcqkuVHKdikTMXjqosFhyvac8ziqmZZaWn7Bx9F95qLUt7",
  "key8": "4WJDVRBtG6Bsi527erEYHiF6udMXprzsbxsitid8TLbDRV52dfPyEMVE5pCL8AA6Qk5UeTtj2SGf624zsR7HfSwz",
  "key9": "5nKFDVyWrPX1cqPoxP2fyEa12NV49dZyeuG9AVhuYDzJAKy65GPCeeT5tZ4yfUxEU8ZC54hbeVybLywLmJfyHYw8",
  "key10": "43N6gBws5RWDMtHZMxQxWdfMfpPWxWwSoS6hCpvfpXpuum2jK45hDWABvdCx1Tz2FTiS6fS1fZXHxnZistS7PbFc",
  "key11": "2nfdP4zaTkP73b84qDm4yo7RXkjwhJEBKGMnJkBmykSQJcWFht1KGfi9JbFZuVPJncL1Cng7pHum7SnkH5WjwCy",
  "key12": "TWhNkBzuT5UMJjcah9mWGx4NvjiKdnibtXKXC2Sq5fFxkZSaC2RGF4LUvxUGx58SQamppYmiBr5hpMnQbQWxxVd",
  "key13": "3DDKXAVz9rZG9WaWJuGQBKBvnwyfAahYMj3MseETz4U62VPkips2MgG3ac9BCfUDLonhYxjMi5ZhDHFJvacgdB7a",
  "key14": "4HRH97pPYrbg4HQFtqSeLSDQP3wRaFWWMe7AaxZ5mJqUAAcAr19q3ST91HuMo3wq9HV67TGztHs6qTwdud1AXn8t",
  "key15": "437WYA7pisvVTx4bhGZMvjH8VNWVhKKQWfiLGmvSg6G9w5jATj5TBhNr33dtgPTGacKN26RPe2UK4a4jFHkQSMuS",
  "key16": "62BGrwVNRLUZkTfwraweYm6hNCZAXffXLuQPcLCMoDK79TtjRowhVy6Fv2buUq1qRKUWGUJENyum3tnRgB5Mv3Cn",
  "key17": "2LwT4DFT17GoEQ4rH2ZUgZ4SsZUWwy2XP2bDUUswzPYoFqPcZxbreJeFpCDHFCJeeBmEBEAEAEgUFVaDUaqNi7qq",
  "key18": "4F44znTJYrsTniUNfrsK76UGZ8WJWrPMtXvHzfG75tahBmfUZhXDdFsY2M1jVJMyXDFUtkxhRoWTMC5JFHfY38Hm",
  "key19": "4W5V54hLMW8X8XNNuPZ4arKwx5eD6P5Ezr5WC7HWaU18X7FPqcjxRUgXzXMDmnXPkhgUeQ81f4XzoecmRDMRNeJL",
  "key20": "5N4euU3vUSXhU3oYeQGsqKA127jhH9aGzEiRD29qJMCK1XvbQfwsvEV5pF2mTpJfKXVGtbQsFJX2YEmqBWzsrxG9",
  "key21": "5srnnVkWD3k6Gt3ZPAmjBfjYnVgXkzHaqhnaLwxujswsQ7PCoiZJTuwwXsZ8iYx5EChqbFu8BKzm25UwqYZs2jPG",
  "key22": "DGxut7dYMXBBkp9Vf9XpGrwvKF8KL7sgTjCgddJvc6M1budoiFmyauXM3JcqTxmy7YvHnwYGYbjBP7LH713L85V",
  "key23": "4zckFDDK965rGeAjkFESNAoCpD2RpN5GSVdyv3Chx3n4vkysZ3dtjmoW9XCv5op6kxwxxkamszQPnWrjdzmpMM6Z",
  "key24": "4Cwqb5PAow4uKUSooFRmMbmQMrDRfTRBK8AFFS3eiRerP26taxhGVCMNKJGs9jrKqkVNhr8rViZRPuRsaVJuQyd5",
  "key25": "28MGGCxShq7jF6jxn6fZvuNKYyZGipDqEgepJ7VLGPNArxHsZaVbCRvQ4NdaDZonzkv2kNKvHyK1WN3bVK45jzb8",
  "key26": "2LS1b4rBG9dFPMwfb9u6ZF6cZQyeuFfQHvkVdnj1Vv4a2SNSm4KjQ7jS8cuqexUmiRKC1gyDqVriibA46mKGbvg",
  "key27": "wZ8LkwHTUo3LvwWx8cxCn4QZpV5qSCM1pJ4D4MazRRozBT7DJKs6JJoECu1zumKb9vRSVrfA2Dg8P8cACkJkg3W",
  "key28": "43cdL9rtCH46ZPRS8gWQrdgL2Jddh3TE2M1AYzpPh5Jpt3Sy2Y47AWqsymWvcUf8XwhuZ396ciFxkHZD6oUTK9uZ",
  "key29": "3TsrWoehFrj9YY5c8AfXNqPYAKBogyZ4ia5LAb1hmFkvR6idX1DHvfMbuqH8XX5eq5n6wv8wjo932RaFZi7WSLxp",
  "key30": "5gS4UfsaY2KC1igoS8YKDsbzoPSR15j6KSpijA3e5vazNV3yn9hUi25nxHo5xo3jPvf5T23gtHBFh1qDrBFNeNuC",
  "key31": "33eu8VM4NzdapT573BegAmtWnGs66vTRRRwVjyQs51DzZsFsQbeuEf5c3gXzeV7LYuHdt9KB3SkTwwQ9WJ3zhBKN",
  "key32": "3YXF4yyignuPHb1G9ukT3cZNNAeWPYvBMCLf1Vouzme5woPLWSaoTUSrhdaCezKbqNKiQLyKwREmFEHx6Mgng54v",
  "key33": "ySxN49PMLtbcF6YnVBVL7HdzWFsEgstZsNtsztBuuykixMfVykedAqwFbXUdx6XPUUeFyLQsZ2B9395Gu7oEyXJ",
  "key34": "5JNdBwazaGC1D1ezeedxVMgkP16726TFpkeXeJXAeJMCUjiZkJKYcHohEm6SFBzaw32QHtDCkWeuWs4GDRmcPBdV"
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
