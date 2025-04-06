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
    "44c2UtayCmeXBDVc5ffLREe1V86yRPecGbkoaaSPjTmLPAYdyVgzefk85gqiWLB29A4YNrHbvgiUpnEE6H27MDNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xtBvQGMCRZSss4yfYK6Q3G3yvZwZd4WFV4hEeWRBViKB8KTM6ks5eAehC4U1NzhNsWecCb5gcE9Ke52MHL1nqDX",
  "key1": "5yGuKN1y6cm9zXtoFjBKZaNVaoS6h6VxEGTB5WB7bgj5mh1TWWT2QH31h72NMqzdUCrBMk9k1zxA2uUHto2t67A1",
  "key2": "5VVz8oMSZfuYKXFnim8NqbWg5Ai6ZtPiHdPdiGmkra4kE4gznmbSxEnkK8gK9Az4dqcFqVmNJnyiXtt8r9DWkqUN",
  "key3": "4E8XLCK5jKsLDBnymbMQ7n2SWDxGwZE8MUAVYvHK3QfMjByAP8vYgs8AhFLfASVxe7HLfb3Yujbbgz7mDdWjLqpW",
  "key4": "2u7FE2KQzP3JL8nHdu5C1qZutCC6J7JSJQFJHQvoAbzSC1L9B59xrB9u2M4vHA8f27D9oDFPP8tYMtWimvvcRKtS",
  "key5": "4JC99NwbbCnhusGPzZmo8yd6PnfRv63fiwBT2DGSio5D8GXVYL8s2ghJaeW6cxDPWhiKvswRsUYT8ZyNcminWrcM",
  "key6": "3cMESwET6Crg1o8KqDHpf9z5mZmF9MZqgk6xERayErijg33J2DmSewfrrAq1MbRjkwdXMqEWqGWjQm2oyjPYynGm",
  "key7": "MJbtxzSufMBVzdhKUcoJ6ToPYGp1Y1f7kLpUnLVNMvGqsLU7VcnXxkV7adeJPE14Q4QELnXnkRCELRRvcKXfLjC",
  "key8": "PxXmY9uYRPLsBgNyrYatw3aauBnPYEZW7kAb2P72Wzd1rNLbAPff13a8aA2An4eP3aKFZrAjrmrrcfF3cMFFXcx",
  "key9": "59KBSERQtuaVCm9Bqh4QHcRFqa6BAxiee4ubJ8EAT5ybCZTzxdun9GEm1xR1kPguSQfRYvKgDLAKA4XHq5HAdS8T",
  "key10": "4zBbj7yHLgY7xub4Y14uF8zhUhvLVGC4dkXxeUhMW6tvccgWovpAVF8vtoP2oSSrNHr9dfTc5z1TR3P2RUcdD742",
  "key11": "595xSmYaPhgF55pDTJEVj9MB3Hj9ZuushYNzXJEWXvndpPA5aoqzWPe1UDv9WiJ2Ps4QsXnyFwqs2zBP5NdBqP8Q",
  "key12": "5WSyHzTqWoXU8nCGVouf1AzXAXpHBywQJRgFsfmx2efxtjdmpTn3a9hfKU6Dzz7iGAvNC1tSwVN3tnmFD5KwsFAM",
  "key13": "3aC8v9SBraa1KQP4muiog1Tt9FDWdZMqGuWbGwRqZPNMDK9zFMzv9DhEc5hnVWBgC7Ae1i33FEheVfSURDy86F6A",
  "key14": "5XGuVB1b1UydQjUm9CJBgabKPkU6UvVjyPqiUJZJGyvATqCj8PyMBjooFwhJ9jmHCVxMhipATszjwsbqmTvutjU6",
  "key15": "4eJC4Nhx7kZkKbWmfD6UyeWDZaQ8YVhZqNxShtGZ7iHW7cTyW5MhyJppaSMEjj5wDC8eN4Ybdj1fn2kfjUQCGUWz",
  "key16": "3xjWEqUaDRiJjf1bGDVy8xgMC7ZDa25x2wn4zEuWNwY686ontfev9hBMVBoNNqDPppMjgnKyPFzXy5uaNkFUGEM7",
  "key17": "2VkEvErAovtJYrUaMNsvMMtRz6MA2N1jhb9WobHdZm2mpVJS7bczULQfHbPDz4XujDT6p5fYb2hrQWAiKVK7P2Rd",
  "key18": "mNRaR4uceMt9Us9jo6xdjWDmgcm7UTCszYurNBwKjGVTH6ewHMYMTiNx3ptUyP3TXBTVT6TCkKVYrBtbj18W2Q1",
  "key19": "2oQH6ZCtkGbTgm5oX6Vzwwk51ZjcEjmCt4ba4tgbEnGSW43tw8YD3oGgiuUD6eTaioJKSdjioDheBnVJ8uVTT9XR",
  "key20": "5WfwQakM2NYooWomYiXAHLUQjBn8nW56bDg8txFTLuV3Fav61we3CTUdFzCpxUouoicAWpF9XjCJgMgY9e7NrB23",
  "key21": "27axXLWwkzACE9vdegucq3knttHycfwo9sg8kXwBA1Lbx4c4LPN4VAZ8jbREVWVZ68LLSdszjgwewXSgrWUcBGUF",
  "key22": "2D3KLkcCt7DBfaJ7GpSVvbNChhfcxgTYGfJ4UHWqCnvALVdkWkkj1GHEdx7ZeMEPRGgPhbqRPY3sJigYoTsZkh46",
  "key23": "31E1iGRfGNnpdBos77yPDXiHRMZeKrySAXVTHqyGMpqttxuCdZDGR6wQFTSjqJA4QsYRPUCUTCP1JREirdTeWahE",
  "key24": "5UL8cBBuj16gqiP8cFxuUv9MSUcbzgPZjDBDPzLyAXJvLhP6LpSP2v8KRDCWhEedtAmZyypyF3s7KoQhtYsFXdfG",
  "key25": "YzrnknkzWHYKfJ7TVQ1JTnBHEQmpey31rQJ57itL8GrWV5ZoBpDdNAKeyABtkvx8qg8N37ZA1fjCEXLC9BbKr7J",
  "key26": "3zddfDRd2haudEwGJLGupdcU4wrsfXx3XqSWLgCkXBMXMehBx2imM1majbmqVGYEZTK2rXHc89VAHfP1HV1Mw3qZ",
  "key27": "21JqNgRMu3q2whq7UxV3TytASSToSX94GVHfAMcKuuGHc4njbsyGjgRd7fVf4yysyh57HQtbQoXxm2UQCHaKv82X",
  "key28": "6573JexE7XKH3AfomkbutpbuSgXDwyLa8Tog2WAhoxPyz7zT8XWC4L1StjtEZfhgCMYWyX2KYzZtRGTj7U8KtVBm",
  "key29": "5Fsukthe8ky84dsNr5rr99keyWpcCko6XMrZRCCRJCqELADdnEtVnyhUrf8NQFQkAGKHPbVTPSCLnQuvHXLm9FgV",
  "key30": "4zUAB43SwKiiejsdXDWWzypMMa9wou33dYRJFBkRD4tiaBfLbnmFJQDCwWv6KNTtKLNnHsHKLEnhZg2DD4VfCiAs",
  "key31": "54gNRnVi3XDkyJZW3Zb7zmxuMbUgkeQXckhU3ooPPwrZHgi4vZ8X9ZUQcVNgaFXKLjSFk4zt3KjGsQXGB9Zc34Em",
  "key32": "4Y8feRMV192zXoRFesmVjyDt4cR3VMjsoEFdTvPcDQmuZU8ezNPVZFbQsfoahC3Fq2Ep683rya7AX3ykqHQPwgx6"
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
