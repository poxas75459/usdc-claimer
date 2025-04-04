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
    "3mCAHQhvANRx3KXHscAQk2ugbB7jM1ahPgoaHkn1u9iKozdEqNmXhzEjuLE7xThg6Cgixq7i1vL9gyEUPbuNCugc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r8gk4UMQLAHriW7qhrS79AbnH3Bz3vDYbRJg1hBgFzGjZ93ZVEvTiipA1WQ8UQuKZgx6PcQjrPrDEePZ9Dp2Spg",
  "key1": "5BcfPyj9L4Hqf6iAuiFF5Z5w5DMSNP7SZho8Hq2XNZMXD8FhNbg2jqkL5p23ojbZqotRMSgQ9o1JVrvm5WRJfyrZ",
  "key2": "3X8wG2jTWqQe1bGnpv2bdXQ21LJiRNSyMVQWYq7zewSQXiG6kDeTUSvHvjx87658Wde3ZQ2ZTmHzaRST1GxVreJz",
  "key3": "3hw3mzbfpW2twX4V2s8W58cvoF6TYk4bTcuHaPpQhH3Zmd25XchszgHuutuNQAFTbsC716Y5efLfvEEcHS7crFTz",
  "key4": "2UNnPBi44wLVFdviDQdU6vzRaqWbTH4BJS8pkvHJ66G5Greh3FnTcTMAFz8qrG9LpFkXarooiiiKJadAP4BWZXnX",
  "key5": "hGxnuk5bzXQhjkz4Kabnu1PtLFgtfqCtmwV4tR5h8jBCea8eRVag7M3R7b5xAP5SU9MYNGDmETpYE8bSXSoj2yw",
  "key6": "3BcoZvEHL9Vjak3hkWD3hxHS7xwwqVDqy9M3Yd943q8sFSL2P1bv2iorvKBr3awAVbHQCaDi55gensRAKGeJVXAv",
  "key7": "5j6e2A81ZVh4eMH4dgm3KcgJ9ymdNzmDsCB1yM2wiXTSVKD2p1qwuCNjgzSjPXCxRg6pveX1S3DyE3jVW7Tdj75c",
  "key8": "29ruU6BJxgUXjpzJY9TPFpHJ6PGRyKUyQs1xP7B9jeq2pkpk8uEFKXXmgupotxnS19reDFRuzUEURMa1Fkb9gfa4",
  "key9": "4zzj4XdFGPy1GF4B5F3WQtzgMkcvta6AAPUsYegvFRd1qKsY3PijWZCJE1enbcFctbWHtPmMirBNbBtCA9xoE85j",
  "key10": "3W38vHBL1WGqtx8W3s9Ak9mcvLeoQqsXC5UaCfJSVCjxvLGcnaby5fXYhwnTxiYaAPSw7mvEzyNwYKFGfP2cE5Td",
  "key11": "4tVYBG2dPC6jixHJr9k5dr1ffY3BBpu728zkE9Zojje7Y3Mkgrv2GSfJSr2F31zbKowiXhma53xxqLvn8vwBvAoV",
  "key12": "5jfsfZVqbP1W6GLxSyQYbCiCtzBddRsq13szh6oNLBPjNpHfxxtr5oC5VRszTarZhbXrirV3eTGtktcr2oN6c1CD",
  "key13": "5JqxuF9119gAjwXopnxrkrTu28xSy2C1rj89W92DGMzNY3GiNFxYXufuMDfsGqWEbLHDJPgYw6hEZTG6fmDnHwEL",
  "key14": "3gyyDh4svTC5KPXYWi56qPKuzpQt2J4oSmhUQooDcf3EwEa9Q9EbqDi2RJgiA9k5xGnRQcsCd4sR5YU7x1Soji16",
  "key15": "5TREKt2C2KhP85ba9MvELNVtH83T3mqga8uwm3xS1dwxXLECai7PSTx665wdZqWPr9asbADot7P1YUaaSEnk5eEt",
  "key16": "y74t6vVE2iFD1dGE6HbM3HuEA9n14a1qNdyp6o5oFUZktf7Yn3KAkxyKM8KxevzExFJesUes5vGJ4j9jhZ2W1gm",
  "key17": "4z3AnmuNqnLs2Bvi4jdbJXifSQopeWB9qgz8RxDRPRnfcSowjwXPY32XoxFfpiP1doDtR8NVLG6P7U5DEvMVEyFu",
  "key18": "4S2HchHC7fo8pzcfXfE3e42r5icc1Qc8fBZfr3mcv9YQxXTJmgvsEyA2fkudCaN3fYPb3zV1wY22KVZsEjEdnRnK",
  "key19": "3D4iJwrUUYCq9GuLhQzAjd6YGox2kbnpU1VCrX2dz8U4FkLqv8auaDjk3tdV1h7QZJKWSnrXdFkKuijCU7ojNCRf",
  "key20": "2PnCfutMfhsBBEarAawuC7nsG8hCYYrBpHJTMMZGug5zVsUaQMKTySacFoQUozQ73FUqKS18JuQHtT1Ebfz8PZP",
  "key21": "RmxxXJVeTFARpgE4ZB28vCATYJwVrzep873dzZkZRHmREuyuiU9x46ZFjGkxikAQBYSSorjNpbUMEfy4r6daTkx",
  "key22": "4bUNS5ucUFqhwHqPqpMaXf93fys3GUpNWedxA4cX62BiBEdePutAGEjfvg6TE6jTCgaE8zcK6ALM2VdAKtBNMr8P",
  "key23": "5yxzjCBRy1Y7xP9CTcUJw74WNJE6c8MisBh75US4w85EpKoxwYwwjBrRoMkduiZqxvA4qmwwUm6cHPXDphkAExoL",
  "key24": "4E3Ku9kxKmdYnsAvG8D6twWwstXCFVTt1dVuvHo9Z1t2zYuUqc544D6un6Rsp7Vxsuu2GmU2wHaqd3bZTUd6cdmB",
  "key25": "Uixy3qi38YHr1EVezi6gEPq5Py7hdDVychTrTWMmftBbDEPymUHcgVaF9jfLaNC4MJGkrAaqAK9jyCopKsSYoff",
  "key26": "23WFGsB7nUpMS6EUaes72LSSLS7ihZaaeneXZrPU1DNwNrgJJpyx72FKYpGum4E9jiQWQPeucWeKuh1mBPCTvyik",
  "key27": "4cEsK32JjHw4qxwapxADSiiwQpXPisEfN7VXPcJs4Z7zLgdD8vfFutswjLJRmD2wWF2wTyWNapzKZfomVksR5sj8",
  "key28": "41cUAWhMMfFneYXEEzk2QH5YDYJ3iujeQ2aMXbW5JKMH2CccgqiHxpjUiaiUtSpueTRdkErVJLkMRoFSP2s8ByW9",
  "key29": "4uyKzWPnd7hNi3ikCK15s126PasdHzm5skS3yvpd4WbZdGRumQR18wiHPKpQLHjU9y7KFmp8M1BDhX6mDMdMsRJU"
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
