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
    "1jv9qg2eqrnPZB92PPh9rwQQ8qSvHf8W8HwQVV3KtkYRtf1a8Mnr11xvUSmsJ5C2JMx8gVhaakYyjpNZ7TfBxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QJgJLJDquVkGJcNtNrXaUA7zqw3nsQQCdVYh6GNcPvqJJpeAtGD39GdZkGmg3Ucz9cy9cvMYiq7MWd1cq3nFaWC",
  "key1": "4ueB1iBTauqhMoYXyhDE4UsXykg12TQTqX2HpoXaS1K6hvERPccmXvJ6PgJLKZ9hPN9XAMkYhRqB7STCQLf7rbjH",
  "key2": "2mdQHQEXxwh36P9XtWQBJ7EwsqyZfih6PjzopVbn7BRdsg2JJ2P9ruvYBRNA4xWBkaqieCZaGMcrdAvp61PmWZdX",
  "key3": "2FySBfjfBMnf3Hz2KwMZChF87PACn7A9cduazx8CyxSTbaJAdfXTewDQR4xLhxX2amNiFP5cKimT8yf86fyVzsd3",
  "key4": "3w4cMwjQsfSucjmYFP48VnA8hSmdCpmGEbzpbZqtjTAGhFetH9ra2z59BideNnQoWoeqHnU1KgZy6YQKPtaT2ta4",
  "key5": "2mFv1MfDvTpFAdMqB6GxBm1sw5Nuh3Q8gMDw9wtAA2QmSbDnF4LcHEDemAJv9PEJchMREgdobTHX8jJXJ3sPg5G4",
  "key6": "4nQ9DDT31FvQab3NJz358SQrFhSLTQh3xnAu5fEQwn9rdmFQjv7Jn16QuTnFNzBXGh1wPtULr4DwjUov6pFQzGwP",
  "key7": "51cEcKKBinZzANwt2MNx9eFyiFCmHmrutxdUsZFutVQV9hbM3kfbxdhaUDuZXFvaXMRrk7sqRgQ6VE8woySzd7CD",
  "key8": "4VamQ5iVCJnyU55JYZoyaUaXyiK57aLQbDa5rKgvXC6A84Sbg3mXExGFRzYqZFwyBEcBniwgqyyfEmcR7rpKdb6R",
  "key9": "P4Y7GqQZbUiG5AZsEep7X33bkYKZHHfeY2eE4xTrJDMqta55HWXmzgWBpDKvqKD1UzJyEeeKAxHtRy8zcgWeriE",
  "key10": "5U7pqT2trcAyuwAg8ya6GXreDNmJbwbQDvxWbfzpo6cUGbH1r38sBLurPiDZmciwpD2vCoj6UB3Dsk4B3xUJ6q9F",
  "key11": "2KfF2Dq2bkGU9SCehheY2SW7pts7yS8pbDns5pd99bzF8brwuQXi6i2RUAFRhZ71iSYdXbYsbzy51rmBJdkRYH8q",
  "key12": "4TdDrfPYbVNRToJKReAHDR2sRFRAdeFkip8u14CmekKSBxw7YAm9JB2BXh2n92F87ttFbvVyg3xYDA4LaQtdcFHW",
  "key13": "5LRcFurFnZALq7QZPSjCXJZp7v27bkqP51arvaw9Zyofzm6Ye5a3J9etEoPTCAEV3VjeeYfSi4T2tz1dgnJKB2GY",
  "key14": "5BGgHfykm29inehRQhwy29SgtWTuQAcaY6uUrTUJZWS3nsiRUQkq1kamEqmCjpLYCkzvZaJtyxSoqCAzf4J8W4QN",
  "key15": "DpVmvi3eBa69A765Bc83AFmKjiS6jx2sZfHSb6fYaE2BHQEYpSvNJCfxUbCrsickhDrnVJ1Mr9LFRD4ZBiL3qkW",
  "key16": "22s5qkfEXAg76xNw8urCes2rcQHPYAAKzZ3CY8QALnttKh8fRmsy1u8wEtgVvbyp7q9coHos16Zh371vVT7YhRHu",
  "key17": "cQAMnfoqHo56bpGwtqDdnuoujX2qZ49XnMWeURRVyGGhsmdJi4audwajV1R2mUvfgYQf4zTePBm1guPPzTbCbBR",
  "key18": "4gVrVMiHg7BLkHdL52tVyDMU47VAMup3jczws4SEUWgX3t695EafJHcqc7yRLhqyVFAnxejijzj12rFjKjT6f2f8",
  "key19": "4YSXcRN1i3qAtUdr9wkUa1mznh4XvMzLANm5AyvWsiCfNTXdqn5Bsd9pGLsvsLRjS34qEqFdRTf92s6Q4fjoz4BS",
  "key20": "5ywh4pQxjofFLuPuhXrqkehfnymoXz6MDMP59crv5znKYVVsHu5RSuwcBNWrYLjVCKMdGtitFyVgmKKcg59ACHFf",
  "key21": "5fyUFLjkBZ5tgZRaRMNtbAxae62izVeF7txC8aXupT8Wdc7tXSxAHkJEt8g4ZtQwt23dgMyamBN1eq3cu2Cu8RH3",
  "key22": "4QDbJzGqyUZWtSXf5EcZqj9Uzp2RffmM7oQBcjDv5XrfiARvqgwyYe83nESXyC6bR8zUPUiwrvudf8M1Z9hQtSXx",
  "key23": "435xTk6jFdppdKR5EnyWAcE65d57GeFrkDwfdRVEEREvyAREfB9aKYdBrAi3sjSdu9rTqT4gWYfht1LWFxCV9r4i",
  "key24": "56gMzFwCD5rhH6eqXL5TxQfxr3mynBPf3C7uXu8T68FnxJVeHkC1sMaoyQmWNi6oSBwSprugREK3v2J6bbnL4SVh",
  "key25": "26KckWceb1SW4NAbVUgHh7kghk7bcmVwhLyrSo8rRo8ezcfGwc5WBnkL5w1Trg4MpgwkqwHyMS6UG486SCSdZwM3",
  "key26": "xrRPBE9qozYACF7zPwZpvep1YZVhjBn7KYaqnzxCtqCHJJ3jjk3nKrFWzKAkmSmUASd4VyTARQX2mgFrXQQwc9e",
  "key27": "3Dsca1VcJGcXbYUReZSWb6DrutWqJ2TnGMcz3b6GHacCJ9PzLssTA5pCNc5upVRobjZiQ6xPRJ92WQPSTp3uEoNB",
  "key28": "9VDntpBLvRsq3DtM4Fx5CCpmKF4RC7ntHjiR6JjZSZ1cwicXjL7Jg6TWb3hQ7oPPgZTPUJP6fwKL8M8WroZw7Xr",
  "key29": "64ox7bD79sYShm8PRDEFM4y9RuH4ZbXXrWx4XKadsKPLXHSBMwx3QQZGVMZfejTi8SYSdbFH4tdcF5KEc4NHsK33",
  "key30": "4PKg9A3n423kyN9dQ9rbe9b7rE3EKmMaicG8rG65vYBnq3bGTzUdYFRGoFqvwCds4MhJGYZvKk4Fp9FFs8NdS7zc",
  "key31": "3N4xzpx77BE5DRqWJ4iCddUrzraL7u2BtgRqyGgt4FkynyJ7hK9G2zPntk5UdfUKPM6EurShyRvZQsPYi4XgfzcQ",
  "key32": "4mizugXWJPzVWYRsFL4EPmo4sgvyPzuXf74teYfKgWCV53QC4KZ6X9SmRUS2f9HUaGp1KrpNDn3mrzWH2uof8FkU",
  "key33": "4zf4jMmA3ZGL48aW3qE4eVnNULbFivk6J1Rnw6MCPvNbVvJRgq6n57FJ4H6igzJ4K7fQPAvs1DPJdwMC7NLiwt8u",
  "key34": "2Qwso8YkndQzAhZ2swh9UAv8LoWXPJXSDHmVrHzZNAp4pfTJ3KXp7Pq9Esc5ixZgKe8ihwHeEaZDYyCoYsq2Cirs"
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
