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
    "3wHCxWKHP6z3JSNvq31t27mRm7AgkLfmDp5xZfNj2NY83rMq9bTUSmoYM2JNHkAW8p8pDyBCLh6kFEn76RAfecWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wadUxgqi8ntjDaS1JWPkySkfrbptMoruwVwgemjtR1syxkwtpijhMAM1XW1GZYs9DX3rEzmSdqpqofQLRdMtraw",
  "key1": "nuDkj8XQ2sksBwhNsqr1sPXSY82Gu9PmGarfW7ygBgFmQtiLC5rWBktdwsA1A4dqD2bhS712pdw61c8TvDB4XJ9",
  "key2": "cQta3xPrdpW2cax5beACkd4kvWwjwUUhK55gcmfTXUvEoN5bkMh3Zb5Dcv7yrzCXES8S3jffjqYVyLwhb1kHVr7",
  "key3": "nymLfDbDuSvMz6JWsVVk1TswpPNTW1xftBGqLFouj11qg4qZrXX9yQus1cgjNN6tPQF8cPzgLVWvvWif4jsH33J",
  "key4": "2tbAJsLLxYH37AHhQE9xpuXPNPSLxTPQ7mpodYuqZ93EDEiBAm4aZL2ZPcMy35rJmvv1SN5deXozoR48cQmWjGq7",
  "key5": "m2AcrqwuY1Nx25YQKBZNxWspZAL8q3JfChVXJvwkTv5qJSdyerqrWAkmN51wiU75T8AgpMPL95tZBVRgx6BsBYZ",
  "key6": "3VrajQwhvVPJnkW7M4uuEy8hwqWKGQp3p2FXVYqTZaoWsLQUSX6fobhjUNcW7UaZvMmzJGEjoBzfrDsvDnLKKttV",
  "key7": "CcsHJGpmgWVPYcHB9DMtyXJSvicNfyXKWwc1KJFHUBNQSF43mSK81k7w5zbp2N9RgXSX2HmYdi6qLUTrDyitEQ3",
  "key8": "qpCCasqBhynR2uZDcnWJN8Nx2xoVcy8KWarfiRSxZz7StEDkDV2zHu4FMKvi8Vydu8HnjwFrycPmACASnKMHcrU",
  "key9": "9WTw7tjVpbNTATQWotsKaSxETVdFtzvSic9UqRFDVhADDNnJ6MsaTVdRHCN6Gorkhfshsq5N8AcidTxshDGpaje",
  "key10": "uMbvELjRuX9F8vCToFqM2gUSvvgrLbySd8kKv5Y5LqJs9RubLKxLg8cYRySF493oqz5X1CrCpJCEZb94jxu3gJt",
  "key11": "293KYsSZKUUF296Zak4rK5eSk3VqMUFNs5SmLHDjvVNjogTMuDY6BHP8uwai5UUN6BBb4ZTmrsk1M45HoZpXwTrn",
  "key12": "5RmoBJzFU7RfFDK5CRdFe8CiVmVcNuueEBAcQAdQ14nrZxgyhZMEh5EXUn7iGbueb6YFXXhWNLAUWoqF6CER5dnL",
  "key13": "4qe4gxvz6Ad1VM1fKV3nDesADfAx4ML9qmcZ2wvZMx7gZECYvVGFAxtK5jHE3BRBZvZKKLkujXLyYSkEF8BYpHVC",
  "key14": "5Xzq4H4mNpRMgWPCXN9GrB8JbczqPeF5UykccQKLyj1tRqUEzxKdNLm4YpMvKLamJGULe7qwHKshLfGcREVynrMd",
  "key15": "31J6mT5QodjxhTb91tYte34Jz4nT3jeXTSAtHB1xPJeUDRZzNgEr4pYvienoJEDHj95akg8TP7DPpPo42pkmodb2",
  "key16": "yD7GHLmuMqyH6J5mn37dDinjKaUBtePVTSGwZh5UBc4ywqWD8MxkM4vdahP1bTY7Msd8sbemEutvyFKvhJPPRfc",
  "key17": "2P9QBZCdruPC95iUxiAcurrfxYD1Q1331z1hXRfi81fs1KJcoTrgJskMcx4ubxj6LiPso7ZkWCwV6ia5g4N9jSq3",
  "key18": "5LT8vErN2Y1JpDSuuEMYwNgHCryGNYM6SGuzd2jywaN9JaTTUPGv2MCQFGPdPZWbVAmzgDLhQfo87t2NbVvpx2C8",
  "key19": "2jXCy7qA4Pnz2L9cWef5yfCbYnau42snmdCiTQaheNztTS8TfxJ6jGnnt1ptj39pHipX86mLoCfxH2NN9bGFcWFj",
  "key20": "5CACPbhGFonDjJ1UKcWqJYJwGER4MF6F5sG3hzi2DPVGfFtWceRFiCuPXZpkmhT11KJWxLeUhVAuoB4Rhwe2LjCr",
  "key21": "2hogr3uehWCrXVciAv38NGSuSKqYAQxHv9dBeMtNPtJrn3KGtuQ2DP9WF59gysudcyAQjroYCxcaCjDsXL7yt5xW",
  "key22": "MLTnc5TMDWMBrvQaQprXkUysDrjx2LEwkbPG9GpHwDgYG5aSSRdLFeW5qrFURd9q2TKFMaX9RQiqif2zzjZQzaz",
  "key23": "5bTtZf6iLkLv9bfWcewvPGtjRgFvxoVqxocuxbdY5mnvP2DzYPyD3wRXxrb4nk5RcV6P8xXjP4TYyL886FL2kUFM",
  "key24": "5drqL5BNLZkYCsbMERa4aWB8Vbra9i5Lby8Zap4mrwnX3To1tj2jdwHa8Cbkk4aALssSFjwRY6ciLtSoSWLyfMmD",
  "key25": "4YdX1HYmVkdpebrJjUiYhA87WGgB45rsaLFFUqXXurN5Xqie8gK72VeuvJ9kzmVycPcENxRF5fFyygbNoAnvNJme",
  "key26": "45AZkczS5MKF7X4BNkT5HmYmg2e4cvszrBniU7MHro4WYatfdSzMg3Vzz1891hdAX7UWiWKakTSEY1X3HYnoTjFC",
  "key27": "1CzkRz1sCVw99oYNH4tQocFekTD6nTohdG1jFbCja5BLxTB7jZ4Mszw7VVi2YF44nFTUucjRYrJmQU7hCiUsqmb",
  "key28": "3wLGm83dvnMbLKw63eanuc91efcu6oA6i43n68w7eW9PfEDBPeNYqRBzeo3HbFwWszhhac1QrQ2mYmi8eDDGFJ4U",
  "key29": "4asGpv95vU2PgWfQ1K6oD8kP3DExM977AuCgaVmbzBBwZP253MMt8thTKeBKYseppVMBtXGn6DNF7j3fjf2rAXAp",
  "key30": "JBpMAQupYGU7rAwPXXAn7wbLNTAgu7d5LA4YcYf1QHZRJGxZL9bVWYx7KP37ZPL11ZWJNuM7oHievug6vActjZ4",
  "key31": "4HzVR6X7GD71BrLewH2mWDTq3HJsA5GWVzMuSKXYbi7k4fahE8nZzPpsp1wJyyaZskzLS6j4XcAfXWefETcGHnUT",
  "key32": "2pcwqfq83c9k56Hf7H7UnhmTSttd5DQq7EP92Jp37FwpescN62EnRuvxEDxFQGwMP9yTjYne9QaZamVzpjh6eUUZ",
  "key33": "5uGBbsrWispAT96Cm5xPqqYUNvz6457shrcNUWSWyzGd8HvosKrFyfJjdixPD1NjSosHd8uLbj1MCas8qCRDq7Zk",
  "key34": "4KJV2HTbGecPLjLWWy55f1n2xR83uRCVydpGYfwyG2ddZDHFZGgHeseDHjwRXQ8dknM4mZe5gLyNeEvEPmFNq5r6"
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
