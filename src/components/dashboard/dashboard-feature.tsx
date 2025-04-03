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
    "4QjuntWUVB48dd7GaU1upBiYQyYL6WNum7C8etVs2CSsXerWw1M7a536xzBRBjVnw66QTw9vhMXXt4uLqknF8hU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TWG6n3yHFKKjaAmpmpTs8tteVB42h5u9Bm1CnbQPa81e54onDXAFwjgDbL6iWq7b1uSwLbf1zEM5dmwa312SKK3",
  "key1": "2YKZfbSMh3xbNrJZS5AzE34au1bm31kSvsccYfBBpbhUdE7Qnzi5U4n2d3iTb6pF7BdfA2AcTbEbyQZH2AuQzDJ6",
  "key2": "5JDqkq1w9t7Tr7ewbetqitPmWqyex69Y5a2UGCG7qUyMWy9aimuHfWZWFMpVkgjvbQsznkuUa57wLCgZanJoUrjx",
  "key3": "3u6mKWiRGZJj6DcvmPwUiCGUSL4WvkQLuL7uKQiwj8LdThtQdfWwfiy1zoFNc7hnov7F1KNfq7D4N8akakeoCzW1",
  "key4": "4BxkKaXntLKZnFidLyfpGbMo4k7xzQqjpfjSzodh1D8kx6xC6iEcbes1G5rsxKdLZJju88g2JGTDBtgncasLyEWC",
  "key5": "5NuwdfZFrsZRyBZMJqR5FCdAuS9KwqBBAAQP8CupuFKN253Q7TbuZGfRUTaDAbQ5sZNKTSFGKVn9dAjCgVLiZNUX",
  "key6": "2HarHGM9qp5kFMCeKenCpUnv86aq922XQpuwpejwPAey3f26tAhTY2JmsaJkaF23BvRAQXVxkjhpSFcPgsnjvafY",
  "key7": "EtBDwCZ8RbBapQWNHmTXHpT8n9XS5yTJKQ7itHG2h6eLCREXUYACoyQ9GzdVYSv2SfqXUtqjBavNokFvUWH9wE2",
  "key8": "5ycXssfjFUg8M8nQauV7uwbKY612ay7kvzTb2rKV3ivoMquXNxd5nEDcVQdizgEDuSfDmcipftxwednkSDEFLC6d",
  "key9": "2hBeJ89uEfDL3Up7P3v9VMeUZpmgcmBDqR4yDs5ikfwBRqXqYnLhrpuRzJvzCtZ2qGRDzYXYUcQujaedCST1vYgH",
  "key10": "3bFYENgwJKFM9DWXf4veV77ZWaJGRrKAT1BNLuWtdV3S9VF2qjAxd9SA9GvcLw7XNjLTP18ZTZmPpb3uV7csxLaM",
  "key11": "4JzHaVNRLfY4FUSyjte9gYnvAzPC4G6Mhghy5EVh6opTi1cfM9xDdN5R2uGAncL1DUN615CkTyZgTzppjgDHAunP",
  "key12": "4KWCN7TLvJYabYWg2mtJCA3yWByL3bdevg6xM6Tjk71Bt9xc84B3Qrk118MuUYUWY3TJpVrHUXPc3sX7RVwf7Wy6",
  "key13": "2k5Ajd3XHPAdPqWZvNuDQPWzKvzbauXqTdX64W8YPHFpBvEZMffS4g9cQGYJL1hz2GmeuBGPaVqiaoydgDgwmaoE",
  "key14": "5ieichCV4seEHfgC5K8QGmvYq3iWfM5X42rxXKkTbKpm1JJFjMg8t2DX3fYZM8i5Cf1FVymwuogNEvjqsVy3gUkZ",
  "key15": "3zJZZoeDMzQLMLnRPHJ3zpoG9ftwQVkgPFM5yirAoGxBDtRLS4Cvj1fDa1vnrjxrcoCMcQm7e11WyUqbFvnfd35P",
  "key16": "65bysKHXRLkSy1eL8XvQ5A8cYq9E5WN1teCBFAFBT74gBvC5Y51y7kR3jrKz71wJ1unvE97bsejHzrS3u66TrBn8",
  "key17": "4cn6NYDVdMCADndEEZukvppBZQUJfHrgQY9dXtzQEYqMZXu1LxJVyZWMEjvzHmxKArQyy3W5QJcqHqGqKkcEnkb5",
  "key18": "2GhMwPeDEYfG769kUivjpGQDwjHmTn1S7SfyhwjEMMV9CNDSifmLVrkEeXJtjkFcFLpGD84LsGsbfswApBATeurh",
  "key19": "24epYYhgWhUoq8tnndvHfep4zm3LkrEJtQs1aFzTgX6PQCoPj9YAXDoV51c73wsV9JoV1VgU72LLNasrSDC7XLrY",
  "key20": "3MdsRBG5v3aUTEo3dynPVYoHt9tQhxAQaKSyw6AbkDvyTh1o8aRnSaJ65uWT9LLZRJTLha8faF3L1D7ByKY4zVZe",
  "key21": "b4nUms8s5u1KrntdpyAJXQSBwSip6bp9zwDvXh1kuqaQfbn9sFsYLeTQPvTNcyavLYNkEYt2T7F8tBakui9FqkD",
  "key22": "25wSsqnW1m9NQLaWE7UG5TUg3XJ189oEQaRMPRFcrb4nyVCWfo4CY7ujppoKjuQHFcn7ZbME8V1QNJbm4ci5h8mU",
  "key23": "2Hh6Y1bQVmLLnVqCQSqZUnHMeFFpCfmQEBgnN7R8qyeYFiMkts7AhiUvHoEAYnH2BogkYuFYKWUbjKZyUAsGiNd6",
  "key24": "5DPYTo3vJXCh3kA8yVPW8Rp7s7y6jDahWERM9xxeYpmGgqZBk3nsMXfm13azeWraSKY6ZDLmpW3xBXxmmiefrjwP"
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
