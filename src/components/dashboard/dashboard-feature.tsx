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
    "wzvuyPyGsqaBrrPNV5vT8L66nAdcQ5urHakA6UE5HrnVWxR4CwNm6tDqx56wcF2x1tQa1kqUym5hMiQwimtXc2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lra6MVpYJp623AVsh3SNEs78PhzRuM9bV9kAYmb8BgPK3yzLQMqqsWA74npxGZ5UZNUPvL9LdaaPMc2kpqmdLaT",
  "key1": "5HNwLVqstG5NF5mHYtiR9GXP3BsA3ZZPJ6aCeo1YF46cnSCDhnYLonRqM6FqcgHqetyDcE4RwugxD8MQzocRcs6x",
  "key2": "2U1G6JH1iuvkJGcvfzUjvjh3EXjgKsAJUfx5BNqWcKK2Fa4wfW7s8D1JxsXf3hbmvXCoCzqZJ9Kj3Quzxuk51YkL",
  "key3": "22rh3bFeXtR1kG3LyMMQNdCUPfC9X7vJgBA8RsVKEzmCiD3Hr9UGa4BgU12ExoHvi8L7MjMjtqxUwrdsH8qmDi8D",
  "key4": "232e8zBu7gca2TFytxnmB2S89m9ee73CdPiKJ2VKDLg31VGwEsbYoN4nQhhH9wtDsNS8WPCBLdXHjz6dCtssEw4J",
  "key5": "5dnwrU3JpXDxRfifLtvNcTGQNb7FStqTrofCzx9Evbfa8MK48XQ2uANa925x99B351Kesm9ZCh8TjLzNMd1smcEN",
  "key6": "DrHDBLswmmVSrzJdX1kgC5GMTaJErYDD3sLLL2wrxSqH9sTjJHZTkC2Sioo11MZ8GyYJFYMJ55K434okRGPNKtY",
  "key7": "3rJqLt8GSzD7ZziFmveXXJdkJ1jS5P9yuPrJDUNLfXuySbXR2FtUp7tP9rejsauvVQEoMhQ1mJhyzK9Lz7wxXMtS",
  "key8": "5s7XNrqyEBkEZ4pXzEjFW8ouWsGBrdfdmVsYAxRqstNLrkfDY4VgdpsuG9GooEfpjDA6DTiHzdMXcPo23BApK5ZS",
  "key9": "2RG8C2M98JguD5bGy81QMdDjGwa3KrqYLENpnd2gSUdh2Uv8x9TAcMzhTTQHAmMiSZhCxmGRpZn68gHCC26Doen2",
  "key10": "2Hp1JHyEgefJq1NQSNx1PyeGWJFEigtftqDfGaJc2DXJGhxNzrxsc7QNTkm39J8mHD6LdbBzb3PLwTbHFUzLDkn8",
  "key11": "3WVwZp9JLZmNEPJVrZ2ueZa8oQXtqTB7ZkesKPEKyqUfrxRmDfZE4QGGoJgaB3fikkebeXH5eRftrycFZHY2jsFB",
  "key12": "3zEVUeNhu6VNSDsazmArL5s7GYsUnj8Q1vKPo3ZGZSGW1JLgdDVBMcFsRFcBArPxPmFbUVvDqkp5RSNuMUXHctKZ",
  "key13": "3fD7cMPZf25hvg2LPU74Pr5pBuzX8GYCGvQDAjoJKF8jYcBPPWSk6T9wtncw8chs2o8bcwy1GFqZScLxcahdRZFR",
  "key14": "U5RkQdQ5pMEEp14JJHGYi4iFpcHENSjvGMvPXHbKp7Eeo8JYwqqzgLx6ubSNsxCydAwKi4zgkoKAQSnuftKSnKf",
  "key15": "56swzfRc6LJqaSsgTwszZzdgxeXfRS9bqtdwqZAncz5Ca5BjctW8WY33MGSDn8f2WdQCx2V6EoTKAUW3bs4awtdk",
  "key16": "3JuEK2upUmsw6BcJiCb7VsTQKF7iWfsxWbDL6wNHco9xVDrd1YbFLh9fMWwLYq2juDdozEHNw4HZM8cpj6N8ztRk",
  "key17": "2JUX5jVFK5mt33nre3akm5wyXMsyUgbss6EVB47FBhsEYveLDJXUAmcMrBh7DimpFLoQy4ZxrKrCG1TJFLY6XVB3",
  "key18": "22ACrGJZUAfXNKzkuiNshqNR3S68ecPLxnBaYX1RS7Aue51DtBvQVE3eUVBvSLMxdSywfAKuhQa9bS1ia4AohgcM",
  "key19": "ypE67zUawN7XYLmyX13CpWVgaVjfpVkeq3keavfexmZsyxXVd4CbCZMvtWBeQERZTeTz7hYoSvBYzquJpBDfQtp",
  "key20": "3rj8NRFsdWimBDddtoyHMM8vQDD18VNYsA9qavZBun6h5xByaLYSrLKfmJ1nQRVujybh5gXcjsedBoMuhALojYrZ",
  "key21": "xnVqYGVtWo6xLg4RYugTHBC4sJddnNsjuzikcy7TC4fwBLf35iR2UF8bBWR3JsFiXEtALn3PsUBL6Lz2583cqSG",
  "key22": "4JMBWdjStovZAnitWboaAs7qq3DpYBRAArvNCRd7PGLbWvWozBacJ8FqMG3D29PUs414MPrG99i9nDmCAMCJYwWu",
  "key23": "4xEV8xD1R7gYzBzKDswErKNe8MFFiSukTZbR8GFZAVhLsnXVJ96cfQ8Tz6EStomtbTmDexZc1PBBW7VperSoBq4A",
  "key24": "9brRxiKJT8fqdydBSTXLTCyx9Khngbm5vhKe86X5otuTM89gUk8YTMzjazv3M9FSrkFJH5PZhaSWRhxHxSyUYLx",
  "key25": "4Tcv7bCYkmAfByjQKyzd7pztQuQAuANCmdGMrfAkotyzRaV5vkrBEef4FUTDkKtzNwU4fovZ8r7tCfBKaopB6you",
  "key26": "5jyxi3U7CdHypPVXwKwFUTJtxGazoT3Xfkytm2iXPcMBQ53QkfG8JANQqnY26pe7BvjiSim1NycXAf55uzH36FH7",
  "key27": "5G5NkVcy2bu1V3qJowp5HKyiqDmFk6eGZYMr2AFAXYBv6eAGguAdPNxn7uCMVuFaBYPAEUvtBmSxBkgacAWZAQXN",
  "key28": "4vCgqDaxAbyJMtJGudL4JvMD7Du9y9TNsnagECw9WEL5yg4QzituGDLz3hqGhwQfcNEf47w93Gw3JB11mMKVU8yA",
  "key29": "3JDiNLFNhqw8RVbgDbBMh6NmVG3K9pBS9S114tceGg8ws2M9Eg5WQateyNxc1J3WCugUqhSmtPy525jds3aENSD4",
  "key30": "3gWnaAUudbN2wG1uMyGP2UoxEqKMe8ckPLq7E3oKNiCshD9r3pArGyRYic5PNjiAtfToHaQEsRGT38Zw5LkY53ET",
  "key31": "2PVHYgRUeR55NSRRbLcFgGu5PcWo6X7YUoVXS9XfYSNGBfQbrGfJzXdKcAjct6mkktrmyfL6AABSsnbMys3BSUom",
  "key32": "Q9VTfFGo51A4gg7huUkPc1tCgX2K4RmmsayNK15i8kUK7k3qxKtacaFSbLEEuyJNsja8fe8yc7qnKphoj2mmnUm"
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
