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
    "5LM9jS7hzfWXMFwnnwWrNJyhvdVW2cyRyjhVwRpVdgMgY9dPKwYG3evF2gHzVozfimz3pGNMu1iFdPX8oGNi3Nz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ee7tRW76DEGVjSPpT4iqFVLMZoPRgwPfzf4XAoXQNMJiGPozuBpq4dqvM5f6zpmYBM7o1dhx3JErpPc2uu3cJw3",
  "key1": "2kXKJ433k5j5LYaDGaCLMgyHJLQhfm1jbXqty51CkavnsADodZo2wEyQ7UAJdpZ7Gi4WjsFQxowX3jx6KEyDTAiU",
  "key2": "3afRrxuHmLMcjdruSuMGsfqzBhJ3FBAz6w2dUP9wpBoCjxrn51r5xyDfugswfsy8ww62TJLvuAfaa44KEWbjUYUZ",
  "key3": "3dJvsQRohrFvnbTpR9t9hDpTn2etpxLtbfiu6duA35C2Xfc59wUBvJc6XEcpGQxr2VSWHdVUeg9hSL9fgz4NkYdP",
  "key4": "3qYhKw3VXWbzyh2gVSC3NV3nj8kHpTUH3XxKPDp5mCfaRcE6ATs2Zn8LSosB3xzamjp9bYHfrhbXt3ZiUpV6x3qi",
  "key5": "542jKN37uuLoZoKEN8wdagEduYWMx6XTfXftja7rB6h4wYarayGQ649eDwbioEfZHVpm8HyKXvwb3AX7Pp21bdbo",
  "key6": "exVknBT5kvQFv3ciL2eamxK959irK7hKZd3NedaT33eZM4P3wKahngpxoam9FiowExx8wyhpXVXWBve3w9Wnm9d",
  "key7": "2xfW9jDhRDF8WivCAqFQfLegDY2EQbNTbv8AzNthpLYADhXC3duwXQA4nSWZoL2DPQEfLZjRArt8kpjMUJsUw9NX",
  "key8": "2i73qJV3VZnvB36x9XyaXKWz7iZeYxsteEpfEvLumi9jCFGCcEn1oF7iB5pR3xMYoXrqucZBH8QDrtH66pm4fyYZ",
  "key9": "2HssvALSgn6uo137FtfWJvvNJQVn6MhSwcc4BCjBB9zkxTeiMTdT33wrFnkxtLE85mktjmdbtfhuieSRoA2J5RRY",
  "key10": "3vsopwiNC2y1YBk2r8cg8NptpxZwDXRQ2r8eoFtw7oABymmauev7QBSWeRtDFF31PCZkaTAWRgSfpbrDQUnYpqcr",
  "key11": "2EcJyYJbhxLDY1oiB6DrKoF71ERNvvEHXgVpfjgpgYj9F9au1YdTpZY9MBXAvHF8oiFKDjGYQQNPPfDvUDoQyyMj",
  "key12": "4AVyF7h5QuK6ewJkqJMeQoL9mm2g2gNHBHNvo5eQDKyMkfFXGFDNhSvkk2xNiSzKUEFKMqhza1BCgekPLdm3dGwE",
  "key13": "5EUL4nLg17rw8eZoPvPichqhTi6AtFmGjQW47K2a4CFxSsSAz2S6t2QE2CBtMEfPreHqFcZ9ZJs4y1PMGRT2Di83",
  "key14": "EpVkp7hbwfpZhksZJ5dyQ1CD7HBMFFfwnYfm2igWL36HSav5q2daLAPZ5gQ162aSbAXegJC4JMsGCPQr6qFet5t",
  "key15": "4Qaji2FpjeY5x41ZrCErtjqc4ZCSPgFw87tRqv6MnkNns8DrbaSS9tgtdbm1d2K5y3khbfLGejuUCMscTZdy9UJF",
  "key16": "59cCwv5s36QxjgVtmzsDufxHtqAfe4qGzsLqjYp6sLN2KcJywyiKLoyJVcwZzqxtuYyDkromibeYRY5JzKU3w9Y8",
  "key17": "5LmTTAFPBo5rYZces4J3enQLvtfL3eLSNBzLn5qkMKxMknNxzozXPYFJrXruoqrLLJv6AoNXtnnaBR6xpDvGjtRC",
  "key18": "cnsogVLKExGoDWedxFH7oBzkzf2ypU1NwjowUEcSoqjyeigRCUcNLexgMY57sZQ7x4jSFM3j8qmWRffM1Ks95S8",
  "key19": "4jWYS9kViJhtetb8LHPSXPBjJnVvmfgUsRQPqmY8fnMLFmSb5vZ3n6ToivQDuWkKr8GXcvLrBR3rZtWVtPnWozEi",
  "key20": "38o2d7xUQQEc6rwt68Aob1hHf2ApxSxsgfbtsuUnyTKEveHwkeZWavcg4R4yMpHAKJa5g4j6M4kqTufSw9jWsL28",
  "key21": "2hqdkSermABsZUAmPTFg2H9iZRhZKBcJo3LpTcb8axLeMNf3SiEaYk3SdCjjTwhv1KoyF8SjQ5uvdRewm8RVEysm",
  "key22": "4zKrBYYcgDD6vi36YM6KShyQdSNdbauKL9t34pRhxJgM1Ro3LVwDUCV3yK9rbMcwzhgw5Lfjxvyi16fjCctpsTYV",
  "key23": "mb1yqZQGAJwz3YXZy3H4NiW8H4Ht1BbV5XanxmrrmXFuBavXSW8y6ppXTZ6BjYMk4qN2sEv81BaXdgSmkrXQz3E",
  "key24": "33iocmedcdtZXCjCCW3x4aWjNcYkGyzYyebzjLDJ3whDqmWpTocyp9WZ3DZpvnXP4nQqxvAE7Fn4WGd4D3kYssZL",
  "key25": "5i2YicTUTbYg41WNfH584aH83nqXex2Tj4ecCE68hsZgJzXQSC1LB5QU1sxcQkwp4tRQVzfdqJ8fGKTAsVo3ggnr",
  "key26": "46NM3cV2hqXcuGHaSj9BjeCvuUKWJ3nJwwtwmvPkiLhP3Dmv4riFqhFhD2e641acE7NxenHPntd32kVkbNqWvd8o",
  "key27": "262nVtqkiRteQes42cTmtvzC1ta8EwMpQ2chWtNPt98ezi1s5q8pHHkbEVBPn1YFQpV2vq2HkXnKPSY7etkfdFVh",
  "key28": "4bJrVLipCDpNUwfaQNSHWzsAbCFrzQ4agB3nEMRW9JbPx2VDGZSG7a6c4LFib9Grbnh2PC4T2QDW1JDJq8wcdyxE",
  "key29": "2d7XmWNXwRiCzYnqxmMptzbg5Qc2am9JVPRrkEwqWpdfMsGPSP9D9jofHKuDUoKcnVeNCU986kDV359Xk5V4HRZp"
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
