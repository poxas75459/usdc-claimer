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
    "5ujtgnUXh7M5FPsbMbK4dtU8ZJsQmvY36vjcevP1NCDHNMF1aFyDxD9M2KC3DvuJS6zWfgDuat39oEHBtyHG7oUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e5tBo9DPY12SywbAEMbBiUZJdjNZPdrq5zZ3HqGuUZ9TSPqG3VzoX4UwSQwnDd1ggdWmyfEZHyyytgTMSwxhfDc",
  "key1": "5RZc7fKdwqqSuLUb1c3B3E1U9iRDKQucwaFPeW9K2XMCAfJDu94t6tTSsiUb7zrDdUrhhGvzLWsbWKqbjdgKdbpu",
  "key2": "4QHACze46y5wTuB2x3UKms5q8Ei25Nef5jf4YABw7zcxGeZibsateseAMdVK2SeSZsbsRzsmZ4CnMJnVB3GAG3Xe",
  "key3": "46JstVM87qbdjeMZpA2jMVFfLPHZ3G2uLJa6B2em6XksZGwx8anWqHedFC9Uy4gDhAihUDLfiTTmG6yaot5FXSXP",
  "key4": "gegwo8NzZJpaxPp1CymiMXSJFentTdDmVq9VJecQS1yrgYHXoZhqjqkXzb7sRGZXaWZrN7XfgKdoC6KXjLYBrgN",
  "key5": "2Y4hnRRToCaHfUPincLBMGQqDz4gzsjmY2YfHkj1oGQNJ9B3rjEG4wEJXyTUrriozphhrpjvSh8D81Fp8dg7spKu",
  "key6": "2PsLbUweoS7rnaJBSPboRtzefFXMYbHZRk2we24f7gwfWyk2YrJrhPn7TsVyrS9GKz6QYzqwcE9wEwSxdpYv7ysK",
  "key7": "61KBNngG44QGGaUPchBAPPV7s2LNMj7HHoG6Cbb7Q6dHVjzGYUh4RUZtjV98raFvXwC1rFVokAGynGYoyEZL2gbZ",
  "key8": "2Ws4L5GEq1h84xZvGxv5xtvwfBLDsehHj78VMj814TDyS3zgb4WeXi8bD2CaXYwEWb5GDsDktookYF3ao6stWTs9",
  "key9": "3ANzV1EuU7Lfx46VFUKWirfYqayXxHCi7XiFkPTh8Vmd1V442yPKzusVWN2Ya9FRfdgDVgrdkh8Eeck7FpMM7v7",
  "key10": "KoFBnYMoheJgqivSYQJ8neT2XCKZ2N2KiJwuE4n2mbkpd8cMogw1UF8WogfhNzUdVAq2AD9Y5bwEsMtKSjYCKJq",
  "key11": "5XiXUVrDr9eqYDrqGiEcdjTyxaZSiCNfpsQj4KXJfGCtSmUNPFuHTcB1xhBAJC81aKuJ3iGYTYnqr4XwEZg9EkJF",
  "key12": "536KFjpYDqWCpvbjwmiRqR5xupf1HVR85oinBMSxiLk4MXNvJ3nL6nD8NPt698WSTDLsyc6ZLaRi3xmkYkyZttTi",
  "key13": "3hZkjkTgbDNMcAKG1NWryyRe4Gvnc5KE3LDzNy3mdHg5Pgydz546Brw79xBa4BdZw27GHsZ3Ev5V4ozpsvdjD3sh",
  "key14": "yKkQJAT5NEQedoapMV811xFmYxJjsWAPckPC8UAzcBcv3iT8cZQfzdGnijF2TCUeboAMKqBknLnszAJT5RPTW7R",
  "key15": "KUY3qeNCK966L4Xu9Dv9sYdteviWS7roK3HPHy2jYc4pnPTBoYCtJgnPhYAcwqbm6opsrAT5rEdLWHJLpTyuH2U",
  "key16": "5tvad2yFuD5BpQAGWfHJfdNFfKcDeEiGFr8dDvMTbqK58VVyhR9fSXLt1jz6rrb5JbiiVSkFeHE5iSa5AdG8NwUN",
  "key17": "66YdPbc3RdSYYaFc1RoRW82RHHhHCK5oeZBjS5VqMu5FizFod92Yaay4gA7qsStzxJqzbd2QprBsJ89EGftYuTx5",
  "key18": "3GNHe2Q8DbMVzjzfyzXxBBXw21B3mQDatq8R9y8PEcBLZmBUuA8RyPswdiHrcmx1tB5uTVQcvRFhY67RVFqpLcwx",
  "key19": "2R2KzJzG9eezF2Qu16pYeSfD7cS6cgCJiVkN1tHBPvCDgeQd2JijyvvoXj7jRi5qTyytgULnsjja3rvVBRu5qutN",
  "key20": "a7htvMpgYuSXEw95kQ21ecqspwq52AEVYDdE1pj1yPZR6CHAnNS2qWmMAKL2YVpgKgRpAZAPZAnKwoR53yKmDrX",
  "key21": "66StEu5hTyQFh3n4zzHbrmQtJMpb9PEhUjxMfVWntPa78ur7jcjsqpXmtPT3x3ikKme2nRGnciSBAHsD5nApe6BY",
  "key22": "3wJrjywTvx9wWS3Dmz2CFEWmCAfmuSEi1gW7UhbU6KjFYjqQNvocbh6Zo6xwVSqPk3S7HeKVWdbgZyFAakdEsxkD",
  "key23": "52ugYeK6LHs1gJ9N2YoGkQpgez9o85LGFZ7kEWX7EnwM2dEbsJN9nkyjJSiJ8dw77WoMc7ui81neWGMQFcghDhWP",
  "key24": "5ycGS4o3pBbvka4yXh5LXpaLBfcQD7NUX67zpdxKnX4ENFqrHxoBgERnUN9B4b7HgKQ7sr4hnCPjBKQ13is9h8NH"
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
