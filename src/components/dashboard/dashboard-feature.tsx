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
    "jhj3iZqjEsG79kP69N6jq3ftWvGBdVBykZR4gaLS3kJ4vLXs9KJAi1fn2zZum26VLTz8onZTNA5jx7uKSrQmvra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41KgVXTYPMj8sxb85Q26raZD4SRSYRXMe7s9tEsTZbpveYe5AVuBrYehoQ151781eDJeDqcZDuJf3sQrLVqJnPW4",
  "key1": "5jqvfa5QKNpcQyrqgLDPJs4LPSW6X4QK99X4EYLxRbQyP6yjjbUrrqxMEqTnM4R7YYtjUzB88zzxAvgwZwgiXG7E",
  "key2": "BdnSRam9fSVM6p5Stg6SYVdF74c6rVswgmzTZ6MYfh6CvGGgtuyABTeymPHLvSTsKv71dg3ipqWPdYHexrYeJo2",
  "key3": "61d8QMsCqKgk8QQXMp4znQVwkwtLGRTBPetg591ftnLXECXFcn1CWMtNpQinqh428YRP7epFxSFu1arSeEr3UP5C",
  "key4": "666noPp2PXiUz8Y4YP5QDg7WThAA76XjDWwQbompFcHZg5hJ9wtZDMXcaozYdmSGkC3sGTmNybPTS7nUCfY6ddND",
  "key5": "67qD7t3GHLdbTXrhtVyMM1QCbYdPf8V9CA1EAynzHHgwoJFGfSzZ1Mq8VSXq81HaXqxHJ7VffhHcqALYrztjv7be",
  "key6": "21UYp9NSY4SgpeFmy8BXXjMTNbAVz9H85FQ9mfaBH2opTAbRyFcFLyzEQs7HCTqez3WFufU17gqntPj2Ja9n6REA",
  "key7": "45t1Vt7zRwc5dqQ24FcgYWm1uQNNZe5UEtbkLsvD4EjZhfMr4EofiQRv8JutCYAY4Y1MhtBHfpUHWMKXrJ17TxA1",
  "key8": "Po5tsW2mk7jZC8kQz8KR45CpD5uxqEL53AXWn64XUqMpTDWgVh6x1Ct4NL95QoFWzMg6oWHk34iBCjJeTwS3dQP",
  "key9": "2Z1B226jp3XBSooFLDo74s4mpxa77dxi9ajQZRkreQ661enMpBtUHjBWndQmbWAdzqXYcDJR2zi8o8ENgwwnTv7C",
  "key10": "3WVuYjaYc4jxyjXZYFgJqG6MjHtLRMJj4tnmUfAbJ7Fp9RBTkC1ZgQLoQ7jM9bgnYbwnQX9HLxdVsCfDxU7zt129",
  "key11": "36YC3mAdFWRtfps4aF4n4AY3RtM8eSfLED6BFtWJAXpZTGQgsc9A96y8u2qyCnumjfmXkAZjpKx6axKrfT9hVLRs",
  "key12": "5xHXkibTfsL9ZjMHmx81CknT2LkjRyZWn3CZBPf1zzoPDFZDyHodQMBqLod2WT2W45QyuZzn6Da4eN71sMo9JyjH",
  "key13": "4KRdMohf4d6bghjA8cJimPBzeWaNHcXoWJWMyodHtTfz8AibaSXjtaaFYM1Cie7K9xCXNrE78AFVDYGezYTzxy79",
  "key14": "4zo37nPvPC2qNNgjoSMcR2gKVhmSPbyZtSxs7J1oXPveJJT5MkbWq8ufAqjPDgYqw184hmza9zoMvh5dpiRc73KM",
  "key15": "2sSqsCHM4a2FZSkzrGPxy1TKNqdyBFqnoAkdKakZiXdKb9PGiRGF1fCT89bMkWNzkzWgQyHWuR7R1QyduPjqvpFb",
  "key16": "3ifC7pfWMxZMpvZVt5Tj41EPvEF3cVfzbD8cW9B8884sLBnYoEjMJKSnrG63QmKDu2DnZ1g1LC4cVYb7r1mEKvo1",
  "key17": "4XWht8yvayW5fzqyMHtZJJcEfiM6NWWQtgWQMrEtY8kTnDhMgsiSyMpMMjNS26aZK1u1uiw98vSscuyKTbb5pw3U",
  "key18": "2BnfS5HC5jU2k9R7Kys28rPTZJxB7UuEEnAZsHh5YTfkw5cAudhCC48A2X6p9zkJdMisytqhhMmbkbge3njS1Zgs",
  "key19": "bpWb8dHtGz88hZND4k7646MaQA19U64QLtQ1aRLRZjk7Fc4wttX4iq5cFrWaGTspBGfkLnkYf7J7obWuYN8fpqA",
  "key20": "3hif2hMcVN9zxpR2BK4Md6ubRjowC7QKYZcr9vThDBPC7AxfwwXVEHAmq4ti399MZd6a6wohaRRxVNdfpNrgV2Z7",
  "key21": "5HgHGcviMTnS2ekyknPsB1eCtLFUa5uKGtzct22GH36LvVZmnTTzMCzg5eWQCZinMb9xJN92EGYfA1fpN2X959UM",
  "key22": "2hFPj9AwTgVpBJBxKqziRSPmnDVtZZtBCxShqNri5eUnt264ADW9eHZH6BxBAwXAFfZ1g2QbF4uUyqwfBZef1HdB",
  "key23": "3kzWEKxL7z1mURV1m6FDFiKEFAfkXXvvWRtEn92rRQxK15pkiE2FozgzXwTDBQt7CqZz3KXHRxodgufmdG9z112F",
  "key24": "2NhxWMsY4yBPhhyNaor2uGpsoMs7aAU4K1oS1JDXtJkRNhUVtekx6zg9RApivMpHzbXKHj393aEAiYTtg3mYs5ZE",
  "key25": "4aNsjBC5xg1yWiVQN74kDKgzDwLZ68tsSchGHaYFaip2rb4XiXQM6skwta8FDFPfFr4tN5ZdTW4bThm6HexY7MDM"
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
