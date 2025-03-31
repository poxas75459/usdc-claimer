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
    "rimtpTMsyw3ARmzLdJkFu4vGc5djmVmWwJXGiT56ZFAjBooebgXFiNXMzBJ4iux74ESCtQQGEem34a1sL4mLLj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E1NNVqV58Kin6YtWTJAKDt3ziq27UuTQUbQvFgURvF1ejL48951HVgAUNmLJJ5BCixNmWvqzDXnARGHdHXcFtJ4",
  "key1": "29U7GVgB89GgNQCn61yZWTtLWL1DHpQiFmNdzZkhbEjb6o4cP5PRdbN7mhnjYc5SDK27ZmmAHcXrKT6fMz7oFHWV",
  "key2": "fAZ4kWiAMAZ2DSj5YMUphPVvHLNuhd6KK4gc3J5gnYW9HRUeehqtbHsrhxpcD3i4nYx5t3zGUP8sQEP4Q4pHXRB",
  "key3": "2irYE7WvamPoNGw5V549UMBs8PdNPSQdrw4JY6DVK48awehkDqHQKYXErL6M2riRdmdcmRKawwXRpQHt79WwkaS2",
  "key4": "59tHY1m3HBVRhxqtBdpveQss76V7pKPcn3bnKnSmVruqjTYtQC3mLnJpFphQSNbpWKPS1499o8FkhQxuoGH5mwiU",
  "key5": "3QQ8yYJsBJqBhb5ia17uL9UyyhaN4KJnrVkJTa4hL9vwQJ5MqjEfdiW5gRtZ8BpkhLZmsbzEjXwy3Jvvw2q8cDLp",
  "key6": "4LyR6MpE7gx5EZgrBc1NRGk5XJ8TUEbE1QNjyAN5CDRS3fcXfB4LG2rCPGoMfgwgn4RNnf2Qy1WCmKTSC9GNzH1h",
  "key7": "38eJy4csSkyceZdiDfiE69nqntvBvpFkdhq4qpeRGSxfJB7o9vkCD9rQA9JunvvjfXvs7w3qpHFSDrfmdoGKc5p8",
  "key8": "57rZgTvygd2TPfZ4XYhxmHD7CCNwzTLRAkRRSD7cf5QmiSBEmwc1kqTzPMXUAhTY9KAuC9dhghGqwBgZeKu4XmVC",
  "key9": "xHsAmTMxfnEwce7DkbD22zHonQ9mQcCmUQq2fpkL5DnrTrY5PKb5HKKJW3h5oBSa56KmE6MszyrFE8j3mwptGWR",
  "key10": "5ke7hCYbTD5KzpQuBdTYrSMQzaLbLNVCAE9QedmaNqU2orz9DzRVgcAARWtKQr5ojMPx1zFX89abc3dCiR7RaoHn",
  "key11": "592TtvtoGAkHCKNue1D48BekrDyo8mGWsSztjDWykDHpBabiboC9XBX8thSDiPriq8McZjCw6PWmbUc9feFrhf6o",
  "key12": "4jaBZuFms9A1Bhj3MVxUpUtTc5xYWPnApzoH9G4z5WhEJ5aFmia1PtbCeZyBBiQD3N4CJLaLnZwubYEUXPYEk7VR",
  "key13": "3jnxZ7AkpD4S3nEcvuv8pzks85KrgUokE2GHqE3HnYBSFvoLbHhS6jTADMroVfekofFamti8NAoFN7KtZ9CiUFV6",
  "key14": "2AVMDfurGdJT2AwYRLG74nXtepDLmnBzXiYjTryehebPKiJ4eSd7JsaoiFgQ9Rgbuk1JacnnD9F2qeLvNwdmWdWy",
  "key15": "2S7FqprrehSQK74g9tjUM8VQqqyZKAq8HGJp2N6kAHyuhDKtRAhwBDr25sAqWUnrswGCzVfwJxgoCQEZwyvVFsAP",
  "key16": "57yLrr8Ka1hoDyRWuPdgjEiDckgXj1wFV4fvCVu4aAPAnJuPzsbVDgN3JCZEnd1yB5ZGLG7TZoBDxqrKnLzRcPVZ",
  "key17": "5wGi7bS5PrxinMcAuVNHN8MwXnrffkZ74kcvZ1Tjzd4aHTxK6CkvEDwouN6ZbeoGY4H1vDb9UCGZSMLt4RLsHzx5",
  "key18": "5kjk121km393QgaRTSmRHjuExMhrQnqt3fccYjt9A7rDVNqkH19pCc5igg9jwNYRgqNZicUGUNLTRNt4pXmsbX2y",
  "key19": "4TWzJGM269smQPZsGVBV9gXu6MbuFBPak12csYeXDnRM47mdD65YfiK9utSXZKAGk3RCURRLrZqtm5C2pGB4PFAk",
  "key20": "5FpXrgLqNUEVXjoWv6jX1xsyJzBBMUYFa87DavpGimJpXJncSDUjcekPx7JvWr4ahLGE8WQLZAwzK1QmVrTRUuHz",
  "key21": "3dR7As2C6dYUpMW6mSj9FUepc4o2yyNNXynxFE5McCQH8vWqh9HkZME5x9ZgcTLfrxuxL51m9fTrh6r18EaeYsY1",
  "key22": "3epgebvzwhFkX4J62bMLtAZBrzNd9gxHPDxJopHsqaV2Z5HQHq8HrTUZ1eK1rFA3PPD8bNrVquuUCMX7FF4WikK8",
  "key23": "3Mo2kaZF2rWes6PCjUowufDCuEpz8VddbgD4Hh3LbtrioGcJZuuZoqxd3AA1PavVoi6V8FwXWk5wBbPo2Dcx3b32",
  "key24": "GPmT3f7NHMabGnRLUg9jE8ok9KYPFKgvxG2YqbGWrZ8gtS8pomh5yN2eYcWwe9dP38KsaVL1nC4UCySD1WeSFn3",
  "key25": "5T5CZV1K71owVB6udziLhJNC6vcmqRgddMNA4karRm2JUJdyrF4WCqPrbEQ1oCGg438JVfiUhGhNNnKroQUg3Pj2",
  "key26": "XZwU6dXXvZZsetHTmTAyKXqncZNFWzXnZ6Fok7JQb2AX9S8WSLbrUz1hfJDpX3xUXPVrRKhwijgsTwyRaEjtrsz",
  "key27": "2zqwUUCoiLBs4HJ4FZCRy2J6UDJAeekW78bWgb8tPfm2vCP816esPWiVwsdU39vj7oBxUFRPjK1eBsuHq5BxSi4Q",
  "key28": "5CbFe4atwq72xnh1GYpRwTUTuwteBJhquqV312U4cTyzQW6sU2mX4bE9kteU8bwgQA6gXDdYMbHjiig4bmqD7Gy5",
  "key29": "3M9Tkqv438DzDD5JR3qjChv1pXg4pnGACC4EqtRc54AihGDueEkKEYDMDQvaBMEtFZKztswDnRFhS3AvMRKrpCgb",
  "key30": "4PTVw1dmc2cagz9fCkc4WNhMvHAZ1HBxz4gMnjZKWswmpF9P2Vxy1c4bsu7vRo7VxYtZhuvBa9cQuADWS6CDKpf1"
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
