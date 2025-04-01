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
    "4ArsnrFA3MLbNPnfch5uLeMJVv3etE7ZX8qd8FbNF8SkM72PcSHbpBV54Jv8kH8T7RbgN24BzRaAvFqaRgCkPZe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XASQDaQ5xKR7767CXfZBBdS4J5EENz7eKo7ZmoVh34HBzBMhpcPqdF4hcA3vrp3MF4CsJMyDhc8wpoP21sGtQX6",
  "key1": "4Tj1sVmPVDZwcenvczMTain2vy2gwS6FSHDfr8WCkwnW7sGsfJgrYQyLT7YxgCEYs7t62LKx4cLYn5WmMQHiW3jh",
  "key2": "32UfCQw3E36oZ1EgWWVG6FLAqHb4diztbsWCnNFHireQABc7PMjqPVkybfzLyr7zRpG2phYUe28nogxUSujU6GVp",
  "key3": "661GcsLStXubNPvFnXqqKeJT8kHimuAME5sDJt4JemsCxYBtKzWDP5cwL6kL85bsh8ZpHNpYQJrEMF6bFNHrrn4q",
  "key4": "59gGynmjSAJ8o9eJfMs2fPTLkRUkLhCqoPRhYyegbFa5YoprxxCGFpsQqiaZMFTH7GAotCctiHDL9ysyAwfZm6mK",
  "key5": "5YrmWiJz6MiLRpDj2m2axcNrqydcAUi25Ze8UGir49whpE4ptxykWrcbAoSQEayUn3LtcDr7VQpqqoBU697GYScp",
  "key6": "pzzKakCCVXpA1iEG2cdKEMp8yVawcfFyEzvtCoMNEPBLGdHXyKEhvDqmSHxARHcKGF4ziocTLbaM9xDoej2xJWh",
  "key7": "4XSeehx7fKorGN9yrvtSHn5dG4chreG8AoWKgNT6VXb83Yhcjh88dSor4wBLDXU2sXdb3bhi5fYppwwWuhkx9wiP",
  "key8": "53wjA67fP2kcc6bXbGfaYVnk3Kd6sj1xguB7xziCHBCBLZJwi6th3XyXeP6MGk4EjWmuYhpjZV6ytLmzPm3fNgXs",
  "key9": "5g1yJZpSZyKspAatdLtotqKYsgxZm53b1zbuZ5d3QJc8DsCLGoaG4nAAsjPGxBb1UcUjs5gaWw8Td5BYCR1oR9ri",
  "key10": "5mVPPtqdPPVcstvQZZdga2WsBVGLS6fHEvqcVUGB919gWYKscxtJfWgLAiQFRpKWnW6SbQUW25Wem9bkGm9edNkd",
  "key11": "3AEgYp7Kk7hbNwtEWGhpB3J6sC3jV6L64gb88oJHwvXa2TWdhyiP4PpjYbqSbBvypCCb6Lm2xNisDDcvETBXTznc",
  "key12": "3zy7ZZAbrL6zbxMVMqqxfe89U8Ji3pnM2GBE7xVuPQA2MtBtMsANC9DqvBkBiSffXXkRjPeJSupRnUf6TS1zibiK",
  "key13": "5bPaZqtwAhwtpUgaGgpc2tPYpcQ94q1osXgaGYVYsgSrYmvp5JK7urZyvzBZiLmVrQHvJHHfANngAKErqkb387MJ",
  "key14": "5oBcDrYmqYmEAPc2uP53eHDMtdf8bD7L85oSPMtspU2Jq6gXMqV4Ny44s7uxEBSV3jFwDyRL7pJNJJjQdsXkvomh",
  "key15": "4tBZjTf5uT83FUrvmokNe3y7RXZYpkpaeiDiBsUDq3ojUu8G7pzuCWoFMLiV9xVf8ZYTm47L4jXiD3wQpQtEbVWJ",
  "key16": "5nBzBmE2DLcvvdcirvKSkWtL4VYQJxs4P1BL9TRqN7duYFB7P7uNg59Z3uw2LEaMkyckfN7sjsKE9VPJope8CPRf",
  "key17": "XRhDk3aUEdCLG84MNh9UTKWWbdzuaZSA3TSGKrDivRsmFk9SekjNyVPTCuPpcJnH9TD2R8hVGggh6tcoZHzcBfL",
  "key18": "4NCLzx63ukAWAnRCgDP16hp56kU1SCW98YZSL6wingy7nJfFAaEM9dBnGRTyuM3MjezrGzkwJrHxZ6jbbJbNfCda",
  "key19": "3riqPTssyYTP4ksFuThGk4hPMF7ApDSfq1paWqPBeQtUCXBebFxC81ojyGNbBsPZutBnVcrjo1W4bEtszv2F6iwm",
  "key20": "21QQw6tLiTwNFXCWVfJamF91fxMjoqfkFHTXSXvCaX4c2ZLwA229MKvb7LAe19kiJ3Vb6YPEW361tDp2v48dnop2",
  "key21": "2e7xT42a7VUD7gpVfQaPQZAFj1GaHjWtydDF6vA7tXzJVxqVNzVuCwtzpt7kg8coBf8ou9hFdkKjYH5re45qZAfY",
  "key22": "21WBfB6PU9bGfx9vmunyCZw9f46JXUMQscqSjYKbgkbWiiXdnXnj8pJqwa45NYUB3VFPE1fxaLN5AxTbHmCFvjzB",
  "key23": "4KXjqz4nhQyYmDuaKPB3ESsdxxKXLY5Crbky86UyASXcFK8Y5o9K4CBq6ThgCDGQ2MF2BXuRhRyXYpd2nnYdpMej",
  "key24": "4pq7uMpkaahJ7MrqWp5xxney7KEhQJpZ15v7npgHfsMMUK2u5KULEMEeq62oAmfjbr6JPSJAkGaULuC41zYkWbLq",
  "key25": "PUSkUeiGRPPzSMD58uaogRnWJdi1JFnS8x4Y8wFgkitkysdX87XhnYmh9Cnw1sv2SXNoSSBnjvExievxVAfsgcQ",
  "key26": "5vhgTkKFtZXT5JZ1A55HiyYJzV1Y8zTDVqmLBTJ35TcSt9ytF8cUAcjsmjr6mQTcaXXFzW7JWtRRJVuhdk7rhXLk",
  "key27": "3vsGWL5CcWfZ3MFFjGeN7UsY5XveQXtVCDYo48jVAMQ1pGEgXM2x76kD5Yg6tTiK3tAsNpav16h1JC5UZUQVUnFR",
  "key28": "rsNKR4vSPu2W1EQhTfkfb15rzQkMWN4i2DBDCWLJyFwR59zqaErkNU1a4GD7bTJhoijLd64Zi5CdvZVd2yywvLf",
  "key29": "3ZDgJpMdwhxHajvUmzj5vJn2zHKAiwdwLnCGZAM3phPCDxuVXEEifAiRUgq5KXueYWA2pVyQ8usSZxfE7DCjdyq5",
  "key30": "43gRSiqMfhuBQKLSuwgRVA7sxSeoGLRED2VZdTBq39BY1gqhGysDZMQjKK2gG4cnQ2M8qA7iZiKYQX6yoFVXtLRm",
  "key31": "4WdYgytjT6P2uBFCCgwMFMUPDHXEon5iFeBgigoX2tXUeUz3fR5u27VHEMqW4ZttqxHp7kdKLaDjftwx5i4pASMQ",
  "key32": "mntaqVJ1i1xE6Rff4cyZUEqFtRQVN9w2zzyrwKpcHPAUw7WZr3gXZ6wLCzs8YgVBTDhoE4XmvGMMk7cCqREyfS7",
  "key33": "2ZXAW7yEnNbstsvPhjYAxMCh2kWQEWq7wUuWoQNwVoVURc4XYUKRZFKkMFDQHJjmE6kiWieQfpGHSn5ee8p98VpN",
  "key34": "2ULQ9WF4aMU43dA1aiv2PBLM7RNJwaqpR2skDyWfqbvAy99SrLDLdiXjzevd3jesiNEFhagaumRUoK5MTrqQuCNy",
  "key35": "v5d8zA695hhmAZiT9aNLFXrQTfk129dTHxsym65q36gDcKk8B3zFfQmyuA7hZ7vKL4tyX8uvnUM9VGjac2GYTpi",
  "key36": "4fca8H17ywHDbbDKN3KVhnewkBTCjcUsd1yXBRVDn1BioJJ2roHu5bY6iizAsRoqE41mKYEAjW2zd4D7hsSePUkC",
  "key37": "5Tba7xT4GhZVQV8zCfUV3WRFk4nvUS6CmUU4MQddTV4Zm8V354YTeqTuskCFHycnAshz2ZLaq3KpvUFxCkN5Kms",
  "key38": "2UdeW8mm5xmpHwzEEJEydL5hN4h9v1sisEYxc5eMW2TBHJ6BfT4f5fCzmdNLNPquftGSmV9Ensms2XmCm5BEpjwB",
  "key39": "2STp28zcNb7rqtDw5fi1DvwtaboUXn3ZSwxd51kTmYP5DiggMxmzLeYr2hbGkUbzbmwYGHhqAo9KJdeQKvVYni21",
  "key40": "26uuo1wFLXz6Mav6uGRiGJEQyLh5XyviP2v2qzzAEbgQYUDQ49c6589mbKUPsMLeqo58R2EhAWHLVXRAfWYsyX9J",
  "key41": "3xXVwcvnWMpYXaTvztursRp4QEBFezaALG3voMyCEUkGJFbpvZWESn829xueNrRjPf6ZCNbKfbnyKVfkrb9nhjLq",
  "key42": "23mfrv5UJVBDiDr877CMasDfg7FJS7kANjEfqhhpxwE7YTHbPA3eJx6TXVKDQ4b4MzjmyBCbwKp1hbsv7EfhsiGb",
  "key43": "2qaKvKbC7RFFNcAEuoFb4bPxEsVdKqqs1YW5wqyE4Kf64tX8761QjdBwXA2Z4iqLCtYGYZKigSc6PutwtUWnhGTd",
  "key44": "M3qRUoc34CbkuYwDY6FWzqSy4cssNvgZXkYymPvd1EQop1RBpJ9XiQbnhuWAXpHfckhtf4jyjFYRhtNPK5LbZ6h"
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
