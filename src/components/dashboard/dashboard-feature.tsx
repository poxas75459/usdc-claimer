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
    "5o4qjsRfS11cTrZCNsT1pXDxCaKFcYJQJwWDvq9aUxPFm7AHybvDy9w3webL7UPZKgKnhbocaB7C9N2h3E8ZRyLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjnTe8p12sco1z3wBCBxWh7mLyksK2fTHHau9iZfR9pabd7gZZ6CEA9DNKtaySCRnDVj7VdRHfiScZhyCkkZXuh",
  "key1": "4e8HBHgLqLjJznSffgYTd3szrhyo9v6WMrVU3K5ctacNkopmXKgTasLazHr5YikuTXq3R494QzLsKahczQeJyns4",
  "key2": "Mg3Ly6XZRik3LF4PQxt6KcyUVCnVy9WXsvUiHBLRKJaQmkSEfj45DhFGJwDSsqCSFNKB6p7Ra7bhR7scnydZTfw",
  "key3": "5juvq6rEsaH3btgKYdbwKob9H8JXuFMxjymj1WBv6omrJfuUWztrLyPYobcooWzh5fXLR61JJjQrF4iNokMzs3m4",
  "key4": "zsDK6bK8ALCwk9kG5DchwMQNrzvtGLq4cUFdC4Vpw68FSPian8fhWJ6T9SkZg1PHg5qRQfdtpNWcdQqW8mu6hRC",
  "key5": "47KGBuwqNUQorK3uXwMbg7wrjUqCrDYHktEGKe9AWHcGBggEb7ab8B4hcvpuDs7iHD3VN2N2rHfXHsWYGyLbamCd",
  "key6": "4dCQA1KgRd234PygdgrAgNKnhXNSUfU1iwC4NhXRFHuR2xDpQdf5n5VJzooJfvUL7TKRbSKPhQiQA46fQLexXqPn",
  "key7": "2uXaeEHstzvYkGojNXXh5kBsSpL9hEAtBj5GWv3d2rAZuQx9Kf1cG1wcTJTsY22vQsxYgmz9azauifv6qhdsPLdz",
  "key8": "24cBStGcipuUbfzvV7EJbYKAfTSoLexfpkNJZeJxK6QsCbHttwB4rJxxpV6sgmFT7CqTJ1g5qYT5YB5zBV7U4nsJ",
  "key9": "UAiWRWzVGd79ZdgJG3vGTcb7X7kxWcVy4PYwinb1j5UkAfJt8S9f9Z7Yqix933v1Mu3hGLjoPPJ649euxbnpMgf",
  "key10": "doNJqVh7EvrRkP7keTgtSrN2AKcncjsuYm5rD8QAKUkfRgvNS6f4xKkW7gEGYdnRtnAQY3AueM445qYqYEjyfTe",
  "key11": "4CtTws5ogNzmRC7At3wjrEhM6sYZNwzFGnkTfnMdsqthyQLuyDJFEDa2GoLtnZhut4ke4D25QvhBVmdLtnjc1uQJ",
  "key12": "3SEtzJEeXVcwduK319gE3cvt6p3ZgGhaMoqVYsg2w32s8JQR3oReqrGhTqddGwaxhk1obd2CrPMQBfdjP6VN5Yvj",
  "key13": "2iyuMS8MRLmbogvgh7vZHs9yk6sA9oE9E589dr8DSXDRepmdhtDPZiiUBxEGxbwztc98Smnrji1w6YQxzxM2wqtq",
  "key14": "3NYFtZT6enrkzEZUFRamnERfT2mqU7Tyvg4AfpGwssiZrVtfUzpDdx6CnWHGJEfpKq453Nno8oJ1R7JTn52PrLU9",
  "key15": "3G5ybh3v1UQRd9ZMkz5Tk1dXYQ3icvxbSfMPzLgAnt1hUbz8kYdGJZQDYSgryQYhNavWpQhtJy6GPx4jRTbH8QSe",
  "key16": "3xHkiBNhamCyjcbKXa7j9S8nJehe9mySHkfyw44VsNjakf8vA8r4QuK6y6ZG3PbEkHjyza7998UTHEfXzKi1CU6P",
  "key17": "n6AgwGbPjDrD1s4ihBfKmnKqNgMvuiKLFH41vrVT3S4SYYZ9PQXCrNzrZ6YCxTJ3PD8Adsi6Z1Ct5K8qPBYkZrR",
  "key18": "qLQNMaLAYtZaw1gfmmpzzMZuyoYaWFuGurx1ip4bnjpe5SEuo361aDDowy1uKavTMD77GzXX9BjDwEMgmMZxjwH",
  "key19": "5K1vfDzUg4NAevnVn3cSzWrytv3JodXWPJ5b3nzGvjS5CMT98vNKLHUcRei5y4gDUNCXXMEevrYqYX17t6rbxiR5",
  "key20": "4Qvw3wwJwQhjPsn4Tiq7WUCiuLYpm9oFR2Euf1DjV8NcK4y4VQ4c8ipWavoLBMquvfG9P1RSaWP4ZfovKLLJbQWB",
  "key21": "3DnLWznoxvKDTSB9GWavLM1X2xA4572WTerALooWzGidu9t94JrXB5SKXAaamwo1AGBedeUXMQpFUAKSW3mAuF1c",
  "key22": "5E92QsvUH5uDjYcVMvWso9dAngBvfHJXXBenQ4C8uD4XiEB3ZzM6HeodPbBF2CpfV93Y8QUk7ejLGrKonzxKjXZZ",
  "key23": "2oM5aaPy5SGJMTgqWdFcDPudU7Pg448bbbhTTzfZBfpPgEndMkEwdmDoqhppEij4TwaDBSZKU8YoGWmCGL6dSiM5",
  "key24": "2nzDUhCMCrv6QAtmpDb174Kc59PMwKSwCichWGEe5xn3bZAWvkENwmHffMTDk9jhsyP89CHi7KPWdvEG2MDSG61J",
  "key25": "4PNDKkVCx1MxD8VAm6tLEYZiQ5YY454PS9i3n4f9JsWcyMs3amviREFbgDncWRMiET6mdvCq9T4RHNPNwtzfDcxC",
  "key26": "3zHczZZ5EJeWbjPJSeQoprftddTaPJ3fMk6EY7CMqKirvDZ6CVCobLLv3XbEmujt297PnSmdNEtbuTUHy4rPhvaR",
  "key27": "PCUyNSrDtZybn6HHATg3w1CEcAuLWhh5M8WtQKMMrgtZgqySqbwQjaanGkUmb5F68Nzd5eMXq5gv3Uo1Dwmw47p",
  "key28": "63U2z4vpVXdMsouL91jfjKz3x8dSVNmXdJVAo2CVGagZ1xR4sowCJcRkCRzv8b4hfwqmo36prjmdDcveBw1ttiMj",
  "key29": "4nd1FK9bxtNjfbYXJCW1vWbSfSSRp47EAaNdhXws7B1wRsP7JDasdSSWJzxCgSt97ND8apX4vxYo2HXsyk4BQSRR",
  "key30": "4BwDbeQE4BgyhsjH85Bsz44vERTbuiePG3w5jazb8DpHC53raTcbzDSeUJDXpCj8sg3unCBohVXQgANRASdijiQe",
  "key31": "d1BixpQQfTLWEAimSt2VPeDSwtUu1nmcFSh3d1eriZxvtpgFL45VeJGVNeJf19f8amEuAupLMxx2Lud2UnJZsza",
  "key32": "44dbv1B3eH2HgsTCcJCAA34eXwiDuaunBi79qp6BGuvQTAfFA5zamqwG4R6iH8FigTWyBhfgDEdqurFVQBHoB5dN",
  "key33": "62WEqxtmBwLj7u3uePRpf1HybByP3e1tdU75aK7QYfW3e2r9jWGn3N38Vc9icsnCJBf9wjfuHTYfuJBNh33ZNnDD",
  "key34": "2DEo45tLPVEiso2NiEVSYmFzcCGMWBZcUimY5a7z7H13sPfZDdxvbBo47wvxbXB6bavt1N1K4r4emZo6JJdJjnu6",
  "key35": "3GbBq66DZh1FLqBMdjCQfmfeUd4ycSr94SvznAKDDMqH79o2sm8J56pzL4RFJeDxFxyroY9oqBaAc6JHdNsybYUw",
  "key36": "DcmZsqEkpfbTzXvJNXmvA4A48153omxPcwoxVrmHsF7hZFyFAjVeoQDYTRw3jzShPV8JFAR12kRaav2JV4Z3rRw",
  "key37": "3YzQD12qmMJYgcPn8ohm9rSSdQuhzu3JyptxFbL887Rnr48keYy5L2Qu5ZS1vTmKTi8KZgZcCVdCCixEvbPy18Qz"
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
