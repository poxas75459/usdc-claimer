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
    "3R6YvbqZ6UY4mzHBQ3KCQENanMhsAmE8yxfoLrA3PnjZ16L5KPuxxXUTRZcJtHGKFovakwSrPntrHBAxjhorFLM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eZsM2Vs5GDUzu1e75h7hRQDqNGnWvG6p8UdHAz54TUU7eyUajxmQ4MBymW4e7xhDsYy2rnj8mykDfbKkkqfBChM",
  "key1": "2tW3dStN74EoGAfcToBJS1d6aLo4o8hJMEyk1eBaQHhqiWsgunVaVYCQWaqMKLjF6WhQFtxbmQpPRgTCMZCevLaF",
  "key2": "2mhiQrQpUL8RzBwpgPoFVnZhFpBRkXMe52dhdaVT8ztfo1JtJ615Kx86QqjT2WQ8vj9UNhvp2eZsjMo2dXAmQytP",
  "key3": "4TYAWo9GzR2ckQHw8Dy8cfmL8Xk6rE6tpobiJaPTrMcvpUUo8opYhAqQJP8YQDoxnEAULymyYt6qg79cnigvp9vf",
  "key4": "3ZNTgVKb9vjA9A59nqZxyvWYiUbPo3LgqL4FvLRUnUX8k5jUjtCrmKRjhAAxxJuYtqnFBDxUzKmKV4dsRdKBd9dM",
  "key5": "31kSzhXQMa5KtaTh4Z1uSzqKdrbmyi171M6wbsng2WyDjXSfKG79bv6vNJTSKx25bYU4C2iE9nfx2ijdyRsABjx",
  "key6": "eNDoHkSseeqSGE7acy4vJezu7heZs9kD2qMNarQnqF1FJSoNM1zKkm22LRaJdStizNewYzio1LpYtoRzNA2cw4X",
  "key7": "4RidGNYRFrwj8kNDKQQsR9oyixSJ3tM5z5K63KdMmYC4J2MYU1RmU9qNFs7NKicokz9byo69oX1Q3xPsrFcqWgbn",
  "key8": "4pkMc3RGuTDV8SpxFHfsxNFDcTedW22UNHmPHgPcmwgvaWq74YFxhQGprgij69xPat9ufYNzQjPExpob1LqXuctT",
  "key9": "5boESD6hbAMQNb2kCejEA6Z6AT5j4TbAh4TpMJPj4jBqKf6Pt9qHHv9VxcMmAFWNR4n3ZfBF94tkeTYsjPr9ECoy",
  "key10": "5WGmdNnvELjZSuEhSGKoENMUtrS8ccBHb79rMg2jDimdDwrpN6RURkSDZg1UfDkBTZz3bo1ctmTMTWihKDRj814q",
  "key11": "5ynM9GPADvfsJ8EbdX8DTL8wTZhZth5Nmd3n6rECTum5um25ynX9UzP6XKNjgvszdAo92TfmLgo95RuEXxyFvrwp",
  "key12": "4SSaxATBM5VBArbuQb78n4LZc7EW8KVDYwNT1LYaLXHNooLts9tep2mTf5J3dBtzuAET1Bjj9Dm7HmhDcF8sa7Yv",
  "key13": "4zvK9gDuMtWoe11F4gRbXF2U1yunP4C3cM6KXWpZqB5gUeHRq1qLVBbVv2QRfPh72FTT5r9d8ZNC4E1WXftTsurA",
  "key14": "2NwEyF4Nvr81K4ZRMYeEz1YU7kP3A24KVPieQfz6WzfmXjx7krfKCE6U7hgRv1wjtJzTfAHq7evWJdtn9c7cNZoN",
  "key15": "2rNhGRY9WAkzJo83Nuqz6MhGvs8NX2CqSHchFSpbKKNNjvkdXV6TcGyVQsRhqWHBpNFDLfeznFieCop11NH7baY2",
  "key16": "48QhWzwCCdGA8NutL1sbxUYXHa2bfdvvCaBQgeJEnE5QnWLH12pEKTzpeiPaXSBhHwWMRgbdiYJHiBwVCAWLsZHd",
  "key17": "W5wddhkasVQTcEq7bbxsfFZ1d7uV6XY3tNC6Q2e998DLtpBtyofXLzZpxLjSezneqrr4QYVazFYwuE7ZeTYVmNt",
  "key18": "4q4hgZ8TwPjFnzB12ProaJnECtBsRvqLqHjkyu6fdVuXUqdiK8VXTbR1Y2hba4bKiHUHnEKfGJTFzUaZPWKrz14q",
  "key19": "5BNpzphGNoNQtDLB1VJueByzUMg91haBTvjaNTeAsTcTvhT9Bb7FbwCmf4UtkpZyqDAsXrTxMmk9UxRPWGPAMTN7",
  "key20": "2jwNWcEimUx6vHxg1n2rZPBXd1NDZm4htDFNwUH6eT3JkU3xi1ZxFzwfW5AKJVptPkndxsNeDb1v3L2Ni86hYaHC",
  "key21": "5GxDppupvB3JjjoJhFaVobVjHavrVUbPVN3acrbMEoShDWFQUPtiWSYS5GSt3gD11qrmq594pv72T1kW65Abm7Av",
  "key22": "UXoCHgfjYCPQHpt7avqRysz3GJRBDpKoTpNj3Mzu3tj7AiFCAih1mTyPPUGfiAgtqqJr4XyTKD9CkSf89V5bLEH",
  "key23": "Cdkaomabx9KeeKjAugUcgs6oM7LZ3VShfdF7jofwfjKsWXEWZQVzUCJWzDzpDhond4pD38a59pp5aWm5tdkRZvn",
  "key24": "2cpaNMautyPyhCgSuQN6jTLki849r5qmgF1miKQvacpuLqvP2DC5AKBFVuquZkuEgLqPtx7kpTq5zp6vyggSehda",
  "key25": "VMfuGo23JtQWXPQWRsnJNHK8uky1GevqjDMcuFHA9NQS1gYaLTtK6RAJS7kNoSdnjKGjHM8NQZ9UL5at3LMmkqZ",
  "key26": "5VxuCSTfA48tKKt8PXeEMrv3wkg4MDdjSnhtD97S7GZ9d1BKaGe5VirTxMoxuFFHwnKbSu1xgoFS9r54VE9TA3zb"
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
