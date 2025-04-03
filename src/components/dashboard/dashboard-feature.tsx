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
    "4JpTVR2ww12Aq9w659V8XMzx1s7FxH15NdANYSTc5y6FQCAG2NzCyVpAVW2mtJHeKw2AX2QPv4dhXp7EeVSJKjuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45JeZvTREdNDRfr5NAgEy3DpugNQ8gqgagZ2yTMajz2mkfwhLuoZnjFa7DRtsBG8Jna81T7VsLbo3CUNn6EaDvRe",
  "key1": "4GBcmG31teJ9gPjzmmFtyafsNUQjebfSeyrimm5GM26Ut4Dwx7MqpskKrJXMqxCJwCHgcsyJi5mwfSrubxNHDqNC",
  "key2": "aETdnAZ5tRn3j8jwakybciGtnGSNq77xF2JNpcUbnx4yaMYnmCg9TjCESYj29K6Ge5nV8NgnaKiLQH94t7bH14f",
  "key3": "3H9dNHakFi7N5scxiat3gnkAyCdHkGLJnnVajpxeKE8W7c8xbdVffojTCgD4Q6tiwaHEbNyrwUFkNRYUDTFhdzk7",
  "key4": "3uGzBZbAA6FAXR8PLRBTGL6nxdNvbsbpimdHwPKMhDuX5MztjRKAeEAFyeA7cbcGCnbkXswoaLivspGZhWcywWuT",
  "key5": "4rHDEJgc48aubKyA49gdezjSQuzx3ptj2HF5ZnfgQYGhjBY8gpw4PQD9UReJuazfDfutcvaM1cdk8ro5ZSGy9Yjp",
  "key6": "2sDyUBGTtpfHka3mJqU5nazVDnMNvoBX3LVMHLjM7CPRAqfiUauLrTcdzsWAWkn3jHHswub2esgAo34MFHjGTS61",
  "key7": "5UNZJeKjv4525X5jQo1PENUCaCcLWaGjek8CRyDJ6VrDKRXzJkTk2jW2xt7ckg7t8JwGZXMWugM7LVWh8GZpBnxJ",
  "key8": "2rEpuXeyxkS9ZSQU8xq5itYke2DSpvRbgeQgqp2Yzx1S9acG2L4Cu39hud5agPkyM78hsKsLYu9aQSsW2JM9y7mi",
  "key9": "5UE1zLtVhGRpAiwnj4Gt8VG8aMaMcwbULG4chSiUw67i6Jj6NHwFV1YGk3Kdkyyz73Td9cNegg39ZxmFQCmHq81X",
  "key10": "wcRCBiwtcxX5Um1SuXQiPqGn5BLWaEAjFku16U2ruQ1NC6NJVz6qL6FuwAT5kPYU2crFrmpWuU1kCvE1GyM3mH2",
  "key11": "3jmD8MSx2V85xbBNz9nPP9FEA3U2uwgaqeySqjFkMLmYSMMdKg7DJsKY9McudLhKabRJkkVdcemvR7biqbkdNnCt",
  "key12": "MMGQa5NMzK9cpHjS8oDjFsJiQgx9w6pbKSPc5nX6JzH2ZM1HPe9qs2NmgBrBTBzHDJtoKGiLYfCuRqveFtHy9X3",
  "key13": "5eQYTH5bG1kYpbT46GKj7cdXPEgRAaJEfTN9Zf6nhvbtYQCQg883a1DSD5Vs78kDBpoEegnryM8kM5eqvrUMMLq7",
  "key14": "31S5cDfAfLBUNdadXud1fqesiLnuiW4QdCRnu5eDebk9JAhRdMDtbMjcrb2iiP1tHbYGeENhYSD1v4YERZFKUNEu",
  "key15": "2BueL3E5u3QXeZy8XPoQxf3wmkwWCJK6vZVzgDsiMJRHDJGU9nt59mfKGwetuBC3zQ9y3T6P9up7ETnwYoCbohWi",
  "key16": "3Y3Mt4dA3QypVgm4Qr92MKbvT6jiTst4iwaPC3RpoW3Zf77F8NvxKePFeZS6Xsz2dEWSSkL9Kku89X8SABzrnoZu",
  "key17": "QD5LR7KFR1FVU6yKPnctZhie76rLrNcBciuCcC4qvye13BtxaQvQ2oMGTc8r1tWjpV3RErwehzbzRBCLQW5ZFE3",
  "key18": "56ouGyrqWHXZ3rcoXUcCtYv1osgU2zJ4E4pZonUb63Cn4KEzEBwFmSuXosuFKC6GsBEhQBremDUWJr9Riq2JuPue",
  "key19": "3cQ88DkBKtRrzj5Vvt7eWyjjucxKYYbkYDFmLTuDfhqcHy7jYLBbdecc6mKFv76kNW38yayyh59USKYtWsPUWm2T",
  "key20": "5q7YKCEyoTXw6iRsMMGRmmtHVEwWTCrmLHTo8stxndkvUthcysVWVnRfziUQgfRuEyrktE3zuZ3AU3CkLAtqFf2L",
  "key21": "2k1UMhu6TKKvQuFkGcV1j6U12yp7xcZZq7PSCo5r5CPy3StwsWPzMds3fbVbseHqzZdFUncvRyQuMMFyPiviGL4X",
  "key22": "4rF6ENuTXRPUzf8BEkY4UdJza5edoXL2ayUG4G5GnYo4dURa63SFr1TsRfNgPPC5PyNGMYKAvnNZdinCKYQUwgCK",
  "key23": "2XL2rxx8Fni3U8Ys1gvM5WsENkbppeNjfd9SJMy3NZLW7nd4uw78srJGR1brkCjiH33eCLdUu4Z3GX3T3ahrGoRL",
  "key24": "FXp5Feeo2vJKzzj8irpE2uqtsqM3X9RD9qpYXLQe3z9V298qrJna15AuBfW7CRtxpg3V32QFbo1fDCRFYbyLvQG",
  "key25": "qp8D2DY6nTawXz9jZSosZiBRLQxLyRxqgbXbBbzmZuQDCrnvhsuWGhSx8PXzdXSxh3yHkBEcGd4vEWg2rYvn88q",
  "key26": "2hGac55qPg9N1CeBPLKDXrwCDPALkNMR1QHrV66K7nR5vfTsfjJNbUKd9HDPrFZSaSrzUs2cLaEcdMp6tGtAEoej",
  "key27": "2XrQ7Ls98VSkWxrE6TZpAhGZt6yEEeKQW73Mwscx22cnCm2odBwjhyAjsx82UNGoLp3U3VDh4zr1UWaFcXD3yYGR",
  "key28": "5EqViWh6MmKhJFV85rKPsNaKYJTV6sdFg62HJKf2CbyeDbuxevN2oZSqRL7VTR7HJQGqxUaJzxcZBsno5AqfiGnh",
  "key29": "5J4nHdqGWrZK4s3LKe7DkEPakWoJZzx9HKmbqj8tyEjMh38hjr4PUH7NCE256PWVbeeiPVgF8wva96e2dbunMeRx",
  "key30": "v66XWdwpMuB1YFWwecmV3zPvBisVWepbMMtDfFC2SjCAyA4gvSk78kLPCkufq1dpjmFiSsvj83EdgZ6sAjMu8zE",
  "key31": "U2iTFDXKvHUSha3txd6J9GkH8C8rcxDCossVB6WbF3SM8avjoaKVJNYugduacZHC6D6CcYHZ5Djvgo5ARpxpUdu",
  "key32": "byfQGCNoKb5a7WtTskRnB6aUGD68ZWSADNWPgFXaFMAyVXiJgpJx9z3JSFzxJvMxZBR1MnTpf3CPEB9Rk2NiWa4",
  "key33": "3ebfNexp4NgGgJftWQDfBZm7giH9fAaC6efgBMNToAte8gRudszujWeWYH2Qzci9SRD2Fff5Xn7VTKje4wjgNQ5Y",
  "key34": "D9Kv9mQ4XhFxR4gPuqFs2jLh7tusRJsPPFcM1GgRPkESRCsMod4g2bED9RhMLSWTtC5tzw9MqtgwnSoCynu2bho",
  "key35": "LwLTKV2U3ydRRysnzadHbfgnDgRpMb56X1GBaodHCtNxvxEXjPgf296GFP9dW8ZfHnyxfn45Y1XPT98yyixaw3c",
  "key36": "B4Kw9UqXNiPzefK2PNXnTX7bR36Q8VT29DK5sqfF1bf1VvoaB2fMEutAX5VuH1zi4HkzY47FQfVjXeULQXDPUEx",
  "key37": "5sgCdKKndgWjqAY76wdKGFEgh4TsRWzbmrNd6EGTRWPENm8wAf9FivoXxUHCiPMVHaz8iXwCQqNGDsBsya1Ljquf",
  "key38": "2LPZdhsZoPdHNoCvKAib9hDxJkqV1KtJH67GYjw9Zf5QRqxfvaWJ1mstQnQ2jztuqP9GPZHs84vyDCv74J6f7aJH",
  "key39": "4mocNCkbSAKZfGNXF3mAFFgLmr8Qdj33C4gV6C2DuygujggZvTRYdgZbYKBXKycMMkGiFKSXY9Hk3ZCuwQbziJJY",
  "key40": "3ahvAFUoWekBBmE1cEsHhm28GYjrD6Twz8g49maxgmoRaDSske2wuG22DsnNBbPhbtUaPFE1YADV2gB6nyiKLop7",
  "key41": "2ugqX6KcWaXe2pUBLPV36g1qUe1UjhRTC5cgB8Su8YdsaLjFp4MSMWUzf3xGqiyD2mmw4bEhfbfMANhSUj61bajA",
  "key42": "55G4X9CgKEXs65Pc79GJpbosqML69y2ydJy2RmZPDMJm1JRjdhVBwwQrjv8U5dngYCVTws3dJqhkzdDRQdtQdMVS",
  "key43": "36uAveKNV9WUMYqSkfMV12Sa2SLyCK48XPntqCPMAkLnNkZripMwy2Mn4r5h9aKc16TyL4APp6TWaCFgyX56DtQX"
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
