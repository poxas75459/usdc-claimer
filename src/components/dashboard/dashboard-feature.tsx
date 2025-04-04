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
    "2wZ75zGCGtqdE3awk6yZJm6a21XdnbUQAmVq4gLz4Wprfzot4UsFVThLahB4YB6wXKwAJyBXDiDWXYm2rFKCkgpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pe8tY32ZcnwRQdjeC9cuAU46WywaEZgtyp53G14YDubZQ1qJw5gMyGDuqSaf1JdZMdAAC4AsDxEPqG3n6Ss2bga",
  "key1": "sZj14WspuHPQFTdhrYL1qyCpmatekb3dnrZ7ZAGz87rNsWgHd6NtMdLCdr18o6YgzXpEdaDu48sSFDYGLMW1bQP",
  "key2": "3dV8qADujRP17DLkKaV39R3J8iYkRCbz6wGGGjKT69zUYCvBxPNFgrEXbE1SVMJuHJ3U8JuHydmTFv56eN6qXfYc",
  "key3": "3sPgZ22VaikS4xCG8pfiEP5nmA4gwLfYoCaR1Nrcf9YNiDkgyrDhh9mNWQTf8eBr2xwepAsCc9A9vZYyyZw4rWzq",
  "key4": "nQnk9RHv8UP5NU1DySicptbRsAhzzdUGmjSnaQKjSTcJSXJARPZDPFCBCwxiCtoNHudQXyeX8B3x2LBXzeBgVEx",
  "key5": "39zz2ceAUZ6RJFgAk8ymKK9DLt3g1xBLvahZYhSNkV55YfFZZvGFUJZdRHt1b1LgFmDhVioqfGwmsN2mqiGy1KD1",
  "key6": "25ueFQpqcMSmjSdUmnXrMSYcgqDK5RBWqrZb8BRAz6Xnqx7QYnZPLphAdWkqTS1jM4BvxHHss23vsZSuzfASsQDJ",
  "key7": "2VxLed4FM7DRCE1L912TYgvGJsN1Gw1zMnSLBdB91xLC546VzDBXssEdPq5UE9btgaLYLjV7zWvFUosZe7uczcfb",
  "key8": "5axqzCaxFDzzqia4PNR72Tm9tTxzSmDQVH4gVAjwcJtddGv5oVeY1xRBSM9b8DZn16dRu3DdPJGvG26d7kB7vM72",
  "key9": "gmRwkDjKqPWpCbin1Q4YFn3XgWf2xjgRokVaa5JMHF9LtS4DQNjX3QB2bkiUHGQ3t7JezjRDCcHi7Rwwb17R8u6",
  "key10": "4d4QkRSd5pEXboQymQcha5ZSo4tF5adGg7dj7HspH35ekCC1uhHeYeJSaD2MhvfXKPaXoPNrjzXK3XKTxVz6cjy3",
  "key11": "5Tk9HVQZiGjDUtxavbC9KXtrbftoNLgtcCUo8M1XPTLLD3Vdxy1fXifYHNDYWJkfn8497k6S2yKKaCJ6YWQjCCjb",
  "key12": "2jw4EkC4doFn1maby4kdFoqPpL5pgfCQ3ay6i9hKaS7UKBCWs5KRqPBPgza73vT3YbZHwGRaJ2Ppm1WNsRW7Sqto",
  "key13": "3yHjjyj7N7tuTyzUCrygfRX3wSXmrpthNuBuCLQ4voEspNWVE2oEWb3Qc4yX5RRnjCKhPvdtqBfk7wjBjLP2DzB5",
  "key14": "4hpW7jmGYe4hv5VP8R61M9EGV2BQ2hLKkBmodYrQKRupLLvYyUaSp4vVVgV1spKEcSJks5x1PRvtKbAz7uXsfxP5",
  "key15": "2HSssGNincxZqtDNUMtiifxEo9SJXz3SdF32m1PoZPkBjQCwQGFzxB57sdZRMwMLsuTVE7DYacDyc3mZVvF6KwQj",
  "key16": "2ykCqm52dLt9xRbHwCZTxCjdUcXcmu4yDykHNiYyf82zQ9MkfRTG3v6wehzM1Lw46en2bBGYoThA9E1sLPa7RRXr",
  "key17": "n6HrBUWASiC9gDn6bo8i6dQJMYF9AB3AsePpTUkYcSSDRNXzr3R68JUUdtjp4vHazt7H4kxLStWJFTbSQtkPaJg",
  "key18": "67H3UTkffw8PGUWRZ8XMzLVXr5dXbr8qKuySPvW52my4sxt7NkA8s1sYMiEdGkYS14TMgHWUFERdwHvr8Mc8YSsU",
  "key19": "5Y6qu2gRs88daVqjpJpTAkVX5FF5xXsJv4Ha4zi9XKk9h27dkVj9mAZCdcK5MaHbAwJNRD7H68MsCG2Aex58GWw6",
  "key20": "22kJ1XL7WifWNxMrGjxanroezVo2TZRJasf3aDoj7LZ3V4Um8N7BZAFkwAg4DWL7mVQvJ2jZ5FqbiCp7W1QZVsjo",
  "key21": "3FqAEaQzrs1APy5dLTgZrTENt2vHRLtV1wXusxP5dy8NoobohgkzMT5qthHxwChu2GHhjTW8QbdpdXALPhLnph6e",
  "key22": "4yiWmrR1v3jWVQKptZC722qofxmqNkNokMq555ivHrq5gM6k8HagrwKBHX8akHTVAb1uu7ZGMLB3kKBSGHrr8wYe",
  "key23": "4C3jtaHS4hT1mbDfxyQ3L32J8Bi2u9XhyCWyDVNLTqJjJbh6cDJzdSUswg6kTNDmeBr8Na2Qxg8nSEujHqqgYmke",
  "key24": "2hkURPQXzcH5dD2THh3BineYNonqkaUDH1fJgjtYfx9zUy9RgmmUcsw94KhPrz9tqp533VyCU7ScNvKEPqHrpV99",
  "key25": "5KNho8Moi9DAQwRcJxA2JCQ3NpKcv8Jc5R3md3WFfgw39MZwZdHft5zPPhKa88L84sfRSHZCSm11rrgLZFqkdCxh",
  "key26": "5gwsYkiK8gkdsfPPtu62rdM6zG7gG5WA9uGNBNWobxBi5EcQpW3vvmxnBzPiMPFuyKw8LeHxuEvjjnQLHWFn8UEf",
  "key27": "54oD5ZeLAziW3Ts2q5CamK8fNb66ZqQKhYxHmB8VPCW2nNy1KQsNoma9Sy13Wonu5vsn2bfHmjYPbTyFJLLmkpSp",
  "key28": "3L6WGtbanZz8p4YjkmEaEpvq94y9nqmn2NyDGaW2KEaPt6V3XqGyWRFQercCdMcnkBDpEBXHkyFMod9ygYc8np2F"
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
