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
    "5kqaVn7myx4ghHanFoqcSN5qsjd25VZU8nvEEb8GS96qEGUYVeCovNjvKJnDEjzx8zN78ErWwjmMBHG21x7rRcop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uehRbiexaD2Cz62AM9YTHtugkR6fpNk79Mq18ZKezbRir329chhE3fKKL8Dw34BCYxNvKKY1NBajKcDXHARjc5h",
  "key1": "4SDo3Yisroeo9v9RasaxThrgoHsUfRjvS3jk9gNobmq2W5rsmS6XEpVza7ERb9BwvBBrSqgANbBqXPz7ybfWyseR",
  "key2": "5eDGJcmWBwqfHzpKmHTAZGGCmgGfKLvgxo94Ms4GYsqAaHkAsA6YEXnxgDKDcANLg3xjaXSbJtmEPooqMtL9fn72",
  "key3": "4Nov2ijACNhNfimYSvLM3ybCMiRwxCaXgd5jfRCBspzhb1xkB6i5EpPpNTrJmqCw1xrpibLd2JRbuWsB6apSgPsH",
  "key4": "4j2Ba2RW7azAJdPYSC3MvKv3FJmzT1LSF1Wo48sHMhJXDWMDGV5nizJraFQa5n8FPRNrQUH3WSv83hNrHBCSMW6u",
  "key5": "3SgFj6b7cvAbYZRumM8EsYYSKgVQL6rc14yL2iuCfbqrwvTFTJoK718go1HSkugy7MkBhPSvviuYEH2SRL3sEcZn",
  "key6": "Q3jeKuF4Upvk4BfkEU2dng18Lpbw95C96MLJ7PVJk1aVXbMWYjV54APM1LyMjsQgYcxsJFErVUwMsUDoiKUjtci",
  "key7": "2fJ9SFxWyR24qZf6qxzWAQTBFhBmrtL3etEGyhC8FBoCrXjqLaQJdj1M2G3q4Q2gCu16U3iQFfzpwHuiHTjEwuHD",
  "key8": "s4JDs4sxyUFZNKmTSr3sUBLzK3dcsjnzK8bF1ZTGjVVUHk2f2pdEabF8RgmwGC7fdUikJGjPQ7Geokz1XBhhUyC",
  "key9": "5EkwkTLpUebYdk9pwaQe9qcTohVrBhqfzpz1wvcgPnDYezephiP7F2wXRiTaTyfJseSMvucpjGRcpfvkUvcDV5tG",
  "key10": "3R7rYokBbzgiBWM7SanadWixAuxV85P2N7fPQTyUBEgJx5z2hpAy92vDiDt3B2GL6YJabHY1amqFd15Qrrpq395",
  "key11": "4CUQNdkBDSzW1vGYQ6qPtF72FSFsCR4BBbyi5ixEeSh67y83kdjPxmNCwSVDxuJUY62KcqqqutmqVKwCyRRdEUGq",
  "key12": "5uvYfDmt3XdUubhD3R6S9nquGtgNmA8K1vwZb3Bxrtb2pC9FxzAFyPrDyfGMBRi7uEuKGuex1wUVhqfr9wEkYg51",
  "key13": "4NVqGqDKHUJ563bFwUzaCYhdkTaHvSJGkNXJoigAS1PJYY732wd78r9bSoZQJRSz7kxXdpQVaEaVDzoSJX5Z6L2S",
  "key14": "arX1rEze7UuwMEyAWfSB5JWFpYdXLhwZ7DYt2txcyAfNBNQtzMpfkYBLcgNCDvvdhLVxtZkYRbYGHUyaEXhoZGa",
  "key15": "2CoAnKKs5YWZvwAtBAewDBjizLHKwiL8xoxdnoPnxfi7zJWq8MT4JVziB4L58GCdJG8xmKfXHktUFKe6YXfXtL7M",
  "key16": "2UBbBMPiYoreQXCihfdN8MzRrtuHG86NMqxUa6WaWyux7gC8GFi8e6aVCYrsK3tBijn8G39kREzivyjq9yRrvuiK",
  "key17": "37FWrDmXYbqPYxTa83EA3fkuoypHcC2rgtRKX2vmADqV9yPeKSN9sMSRnRGoSphsmGUj1Fw6biDeGUhrd3VBrCXD",
  "key18": "2NXdWRMitfEZjJC9E4tn17RT9rVCbgFukRkGVcaUizqA7CLuCjMQ6upp2orYb77MtV8GZE2Pit9dedddDrdoen37",
  "key19": "2yzU7GhggZL1Zz79h69qfAufdGEZUYKi6j71tmKgGgG4saMsoTtdyCncZQa7eysLyjN5BBz782NQtp79cRi2eGtR",
  "key20": "4FNgMFh2MB82WW1yfTmrjGAVeQYwKtvGGJyooqZFFG7NizenVdZ28uBDPMPyyh44zggM2SjJqskniqDXcKvTkBMs",
  "key21": "a1Qnjnt9LuTbhKeAz2sMvd837TuJu6a3YnibAEFxMe5kcNYfTMMpY4oSh7Df1hJzrBHKSKZESvuyN8M2EWoFRXC",
  "key22": "4epJyYjQG9TaWyjFT6bZ5Y4ujycu9M1r3dzQpxwa8UbSvxdj878zuMh5aZ3gqAN3EWpsaQSLh5A1cHZJJcDQSTP",
  "key23": "3r5diyUQ2kmBfgV8BRpPZMBGdQrsZ81akeRwCM4h11BdKDNv4J7knvJjrVkze7XpJoC3JTbyW7cQLnkVKM9k31NL",
  "key24": "5KgRcw7eA41HKQAoJur5ffdVxjFiNAXErvZSUe5qDnw8K3rK5TrTPbvVYSbkRwdW6SEzpioUDHzygZ3rQ9KJp63w",
  "key25": "4oFA9z3raapapDpS4gG6xFZQArzVXNGJFqUU7tWcuxPcyNLkKEZtveCcEXapPgKRPZa7EfuABsgTBxDVF5CTe7Te",
  "key26": "3zUZEFunsVmzZLVzFwjUgBsc2zF9d2f5sp64uBhfYXAerjXkjEkTErEW7ZtfSQ7tSpdmYDQ3SQCp95Cm4deij94d",
  "key27": "3o1x1onutSnCyQdmz3DRWmSV3AYpnsbbK5JDhePSCBttJfP1pym29eppoheVW8mRC93vPreA2uvVEymb95FiMeY"
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
