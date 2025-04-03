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
    "2RJoziqQqeQ1gyDNuPBicUdPiW5fgkxrS2UXt7CfuBfHw7DHRfT5t1RGYAhm491NA5uZN7kvAgQawF5gppb1CSbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1m9TptHKUVgecgCsowEmPC1VnAXeRcY7F6oBQZUqGjHoLAukEeawrRJyjDbxxqiTwp4MtEwphCRMncK9CTJNDop",
  "key1": "4bHYjwcDAKP11nfxGe31pt2xPg8pqATgR3ViHQ6U39MAQMoUevzEJkQfuosVns2XampbJWwfzbs4pbqSPwfWr2CZ",
  "key2": "JvXq6p93q4RpG7n7RJ3nk3yobmMFjtEqHb3JA1s93SnPPqjnFN7KKmGV35hGwhTFqKKY6BVHGPUraWahP9nDLP1",
  "key3": "4CrgEetYwMXSuqRMDTXUGuRppLG8h3CCC3phXsVRTDBYkLjr4t7n4W48tL4HW4TepxpVBtTKM9dvSLiwmKbBbLdk",
  "key4": "2WURcTRUBqioER1RLdtQBJ6pKQ6HisQfA8yhXws3zAgNup8pE8zHN5cniSFDWrZNshXwBAq2TafJ471teVxDppam",
  "key5": "UbWoQqujWiEGgESyikmBjdHMzsccBAnjiiXFNXxpzPHsdFdkKPnZJ2b1432diuMENs2twTR2S3rFC5nnieMNzYw",
  "key6": "5AB76vsPr3SYCTUzLQ2ReJL68kT8tZGNXzUv7JL8kJwTebFrXVmLcRR3mkin9QGtujSbdbAZYK5dYxymTvfT7gVv",
  "key7": "4YE6w7TNmn2YkVqk3pZBtDNG6weGu1dw61veFSThYjLhTUp2FUjzsppQMB6p9D67vHPWa8Zcs4mq1Wy8qfFiXjqz",
  "key8": "2LbHcees9Cv9YWPEtRbskqNBAZTjFiAgmcxPQ3irBayGLp3HUhtqy5C7Z4BLGiAvShTyKrAKq2uaqt9j9XrFeNS3",
  "key9": "4qeuqSap69dViC8njFhAX1Uvm9LhEnXjwSk1DQY9aUvyVKziQBJZFgB8RMC4HN5Dnm1ABt4bwj5Yw5pAmxQ8VQrd",
  "key10": "353dUe42GebVPAAyeWN2R79GABunGzoqQ6Kxef6YUBR5dFgV2qa4oR6c71eZ2vkEkTXCyHip3UEeGbQpQ58dMtoa",
  "key11": "23EPo9WC8ci5GSWcQCzRWkzQsPKMx4uhJGmCQBCgzstbBPE1tNG5TS4T1QR4xqw6nhJw2cif5CsRjjfakMPqPaWt",
  "key12": "63MTKDuiiGYqEF3f19NtkZu5uc7fBhzemDViD3PiYyvCN4xDDia3qdJsFq4h7fG9fwCG8pSByLwFV4bujFn8xeTG",
  "key13": "5qJoSNmAtjUE8MyDkMxZ85ivchQzeundoKW9ZR4UBuX9me54x5VwKNRHGLUS185KU61wE8y7AUjbpqmC6cPFVeL7",
  "key14": "4xxjniXYYvBXLoAQN3g7yfzi6Hj89kVririfg5NB9jcRXYzP5EqpdhoGHzNVot4VVqKkLCNk18VUzzN3DeLn7EHw",
  "key15": "4Uia2SAjQFgwqigJZoqyzNM3T2bxhq4Sppr3jEmrfmLh5eWd48srzqB1y5XDfuj9xPYEMiCZctKVJ9Nd3GNiuqc1",
  "key16": "4oQrtk7dcPhD17yKi2LBpuUGm8nSXqPhp1xBbnTHWDSc1QqCWrksNwprgHMkWQc9LCDjJdf5bpwq773n8fcRihBJ",
  "key17": "MD97NSMErZULiQzGNjZnoRZBReQ47yVr5MPznXLTJDnSLaWQQ7jaBe7VMuHG1Q1boJjgRAzYxzJEgwdCd2hgeLm",
  "key18": "4t8My177S1gJ46qhQ4BvRjV9Gztjr23L4c5oQLCHfidX2Q3fBGi6extiQFHqjVcnd7kV3AZvacjs5fncxLb1asKz",
  "key19": "5CVGaJDMdpTGZRLwYDt2QrFE3UEVDhN5rDrgFFhp4omc4wKcjtWAeiWTLUjP1KYeT7dDZjKS9yQcPGXRvSCsSaF3",
  "key20": "5eyzRREEtgkZS4PJqqjzVjMCKpBbHko3RGpPWQfbtEx8fKz6z9C25iBxyfqGCWEWCugCt9Va5bUeuAMDgtteHnQE",
  "key21": "3Gw2e6pRSZgVdgKhiZYNhtJUWYLvgK8EG39HD7YhWiDEtSBkYUWy4R6j2WAKvXgCmVqK6Fg2WKddYQcJ5zk6CFH",
  "key22": "5ebUNqTf9HAuEmqDm9SsApZJooFoqUKwaBn715qyvfJe5UFztF1WEqzdDTrqPPpguBGnz5QdYrxGSt95hf8SmZ27",
  "key23": "61P4JLGyvgQq6pkMMS9mXnDRxGGmqa11AJG37yZBFrvGV65kPeDD4FtfwvjvuWS7eT98trJrPKtjh9aWjZWCC6P1",
  "key24": "2Gq34DgzvL5LVHmDbFBUBQ59v1WAEhTCfAgqTo2S2YrnoU4EBs5WCXfah6hduL8NxQyUu5EfQ4j96GUKbdEYyksx",
  "key25": "54pUcnAEnFQYcH1MvxyMPzeUrEZZ3FCHJWSNerc1zRU7aWmBS8qiEYsnvFa7cJ1jvs36PqUB8KgTZxwPJSTR1YRy",
  "key26": "4fxpovCBcBzH1Jgq6yBwoAvBVKZ1ze3zGcXmBZoyaD8gmi3LzqCNbZk8opaeRSyV5sexmG8EwDBBUHc3yHDptKPK",
  "key27": "2AQo6dXmFyj2NsSk7nmAoiLNEikMBi7HNZ26SE9xXXrg1wNL7qSBcreK6zgHG9YwgTY946KJ66Uup57Ep8PXtdtF",
  "key28": "2KEffnHhFaDkmxbaAQC7uSbtJW7rai8GjEtmoAU9ECUJ4tkA5yLGFKwbb7gesWKe4AjE9CJAxLwuduyEvBQJzXSY",
  "key29": "kjZNUQV5dCNUSjPtSDCtyLUFKyVWoC4QVTeKp1GFBEnpncjzjFQpFAMhSeiWCYWzfJroHyvXaEvwQViC5UCuBJo",
  "key30": "5KEWkNyMNY6tjz32Le7hYcjBMJUL97tRkxApvQYDkW3LdfBCM8Jg5ecriJvSQk3CTmaqE5HumNDiqM3SAJVa7EJ3",
  "key31": "2ubxfQ17oDZeDRxD4xFHaWFZx1kaFeEuAQBKtAQcU5FZ8ib9QocY1fqGKoLkocAbPF1xVLb4a5GEZQgqdfVnB9dh",
  "key32": "2E2WxUykMWo5uZvQpwJsYpU1AZArCrQF6Pjkc5rWh8jA8vpSipe9PgBg62RRnmSKQPSXbqB5q9qkddHdkRvjeNRQ",
  "key33": "4SLoEALWdfBUMexprJUudvR8MsNwLEU3MLsBQhREfCNaZHpArgwr91x8DBu4He3QoDGvWUxVshDMfZVaMpFr7uDj",
  "key34": "3R5ksQMTSEyMJYk4TYBLpCXcV2Wv3psFPqki4ostpTQpNsv7Juscz5vjRRKzgz7fd899t7dUwoYAWv5KJEufPnKg",
  "key35": "3RQ8aTcTsNZ9MSANgXLZkXZJ7sQrxLER4SAi2upgB2pAzcqiarbZPYHQ2EmtG9SLY63bFgRto354Yp2MViV1fCAH"
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
