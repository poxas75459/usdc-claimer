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
    "62jbvKqeWHraiKw4SbPtBdT47tCL8DKtDpnXSKAaR26AqGbrAdmZQCvv45zGrvFj1A9n1KqyqvB3guNormha4ZbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32jbZ19SbMaUXxgbos5DzQHxREMBUq254VK6ozb958kB72AmK2LFhAGkTDCQBWTX9LQuM4xbPV1VyuE4wfVVDHYF",
  "key1": "25sBqLiQ6jNXW219tDhSAUzKfujPa9CEBZ2a6zMbFZhrjHMMo7rtM4Zy8hXCbUbrqCaq6pfCfcV2kdW66h671XnF",
  "key2": "5UHNTKLrcm2BEoKFPmXZmLpMFghBa1LhSfuyjMQ6yETyWD9gi2SdGNUqwS9f4X3zjSPUPEhdHHbKN7Liqe9BQUJj",
  "key3": "5A4banSCgpEb9V54kphxYWGsNLfMrGGxhoW2szNeEmw52z5aiMnKS6MubjUfMWK4F9dzYpYih7M55FiNpNY1PbR4",
  "key4": "5qyU8Ytta8sVET4aGfbqx2Z8NRvBPWVgR6zmCtXecDV737pWTno9pbfxKiXb2m5VJAnmRdaRbikcbPFbhXMatNbX",
  "key5": "5WCdJStCDntFjSuYsZbbdbS5Drz4CWYA62FRcamymEicFtHvPs9JdbGk4sYr2tDb58aJBy9LMta9nG1XnbL1y9Y4",
  "key6": "4Ztf1FhAAx9traG6SPmtjirtGyPbAgWQXV3xqWZ5GSHx8eFb7sAPJv2RSeLXZTDYTgthP1HAUK39xbv2wqguHp65",
  "key7": "4LDGQz2abEU5T6Vyp1Ena9BGCZz6mSKMbwqg6ivBPtNopgxZdTewHuzunzSnTdRj9MkZ9USgmjfQVhTqcxGHdFRj",
  "key8": "2vwbiNvb5LHnyDC8PCLirXff21eQbXUFiUiPhKjQj7V6q45DFaxyrcz5DiwW5iEcyX626LpHqx7G5XRSTADA7UfD",
  "key9": "4QseVWeSp4zoczmJiDcjjt6yRRTbjs8uX1U3g1PK8F5h6XKBTgFCoVDcuDg1vG5uEmxe3h2vMcT9MTE6xBGmmCTd",
  "key10": "7LdwQryEeDPVA2JsRL6SBz4YbFx6Ap5DZBEBxaNGcsxPtcCFE8t2eooFP9onLXeipWssuU4csUUQZ7jCkk5kNhv",
  "key11": "zSmFJ2dYkBs9PbQwVR65r3mCwtzaUv4CpCaYphi2F6CSnTSYG1gpH38o9tSARxDBjzZpXadW3VDJpyBhVhHXDvY",
  "key12": "5wjGC7r5TfHf8m3yyA7kY7mBjzccyLVyzSwaQuJ6V5s54rJHtbQvP4yLnaF9s9aMQmibBb5BAihLi68tWHuGih9n",
  "key13": "5vtsiGcvTLMed9kiC1dvSutpUno4MkvGyhHMi2sj3RrmRaiXTGoWL7w4pBGkvv1cv5BhDJ3VgNiR5bWuttSmuXLJ",
  "key14": "56oVHiXaYRPHqtnQho8ei1R9zYQxG3jGyitLWT4tbsvqz3fRio3LESzkqtoVLCbJn2bUiFRBCM4DG4hwJPsuhH3a",
  "key15": "42f6jQzihcKUq2Gos5fh6kvvdkfx6jKrk3Dpexc1ZfRoEAWp4jh6amF985Yx3CEZzDzLRvfnAyzAAPpuTQENXoPF",
  "key16": "5oArNUuwnhDh6pMeVMPEwPSPA7QVTNZzeZYnoTeJMLr4ts1dGD5GgojMPr8jhqzG15qruR94hMaMa57CfggXjN5A",
  "key17": "2Y13S3VTKoQdK9cptWGbrbtTnGyrvLexzhc6u21opsueky3QTCHFD9za2RmvQKR5yBugwzGjkT84oSnMjtFtodta",
  "key18": "2yQF9JFWNDnz73WftAxmdR4NkJjQXN84g8rnr2U6KvuQMX6XEKj2xAckRGobA1ATR3L3S2ombmr14De6MJMKqZMV",
  "key19": "5bxxfM12Dv52LL1h1EPEUu9S6iCbus2L3g7SYpZLZYW5Cq3aPXKDFeEdy6XH8aYfU2LKDoxTJes6zPG1NthtYupD",
  "key20": "5FxoXHa5djkqTrYmCsZzquvfjkXeHmnLPLMm6TiSge7bjVv95xiTUZiuFoEknUC6gD2LydDwAQsZ9PbDK6YWPkh1",
  "key21": "4SSXic8GYWgk5DKTQBfeuVmaVLPXyans39XULiZL7eoeiUuuvQE17SxRX8JqtTD7NEnHvbEcop4bzgUfw3LLLxzC",
  "key22": "56FosizofdgVkPqm98f7Pr8vPY7mwUcN34hAmUA69y9Gd4t8xJcef9NcCqo8zuTVifE1uhkU8KxcbQjj13Pk3iFa",
  "key23": "2yaDiFieTmrtUGYk8chmw5AvcPNLP3zTkdKWUHYYWF4t3YtY8sZxmVRiamfchea2Lr5axyssaF6BzZjAhEfCUTGS",
  "key24": "5xcxkFSneBRPAmwFgr7jjt8Twa2ukKzVdGYADgSZyHnzE9KD3NfmmWfFEa2UKn7BWST8kbnA9n1qJUmBfMr27d6G",
  "key25": "5zPUXV1FuSvd8AWCkxZo94C2T3Uh14ChWHR97wTbz5fTDRm6xNBTT8XekY93YcnQogfBzjq8RRodtfLL6NdYPnPz",
  "key26": "3VrZPohhAUBDNFFvqSDU2bcpL77VuVkMmZmcU8LA1xFMDFVynU9VFG8orNmfwREREdGpwJvopddRtHMJx2XvNxwd",
  "key27": "3oAwvsSpB78Wk1sqjRsb4FX9VLKGSLQoEw2KBo3Jw6kxPdPgANdt5vAVMndKUGoZESUUFFUW5BqCsEguREbgYYLf",
  "key28": "2ZeXsLNfKy2cmykj9VPwii22hGomiFAqn8cRSiRB7FSxXuiR3upVki9ZBfw9NpPaqqTET51EVUaeNck94a9ja4qD",
  "key29": "BTNmXrExoHEDMQKifyDBTKF7M2Mf1fXMiQQuLbKgFpw8QvVYTQdTitC7x4cGqYycHgkFwWdyiPbL2FqpL4LQjsw",
  "key30": "5pq7NT6fLRfbiJv8wPLZP59sNhNjGsEKreHxC6EsuSZU3GFZDmoMcij2M6syPoauEfEc7he9LRVmfYToL4Dyh83T",
  "key31": "2Jg4LzRZLuM81gsM4yWLC9JvGAR4sjHfKVusUeNXV3KuVXacmsiUbK96aEMTEK2Lh6ps6gfeZkq4cMBQ8fAxMvYh",
  "key32": "2X6hznUcMjL1FiNyAf6eKuJTuehgiWZtSneoD1wrX9nhqpqAQxqJykijDmRTuwuy33Rzsrg3XLTiqx2g1PWu4pQH",
  "key33": "2147UYq7L1KY6Ua5nApuJ9ai6urmJ74XPJC4t5nBhHrvdJWUeFQyuPfZTdDVEFLqADVKysetsYNkHW6tYKVvsior",
  "key34": "4BK2xu9qzJAKHzDtZ1YaF5NVag5utJxTKSURNeKU8gX31ZMpKbJ13qKM4xBGknftXbeEfaEZ5HnD36Ehme5D3GpP",
  "key35": "2C7zXNSghLHwR2td8YjqNdUzLqu7poZqXn2oKUxH8dghGJctEtDXYcm6Xn6cH6QqEPymJYaVBzH5KLb3Wn21pA2n",
  "key36": "4hQtKJkDxMXRkXhQ2ux7ab71sjfgagDQJzyAYhcNVgSNn4qYgdHJG4aahDWz3MLZ8nBxeMnZBdWYkL293t3ZiiuD",
  "key37": "3TTdcK9yCUw1hqFiH9vqPUaos5ccdaWPK1y6bFPHpMRR8JdphBpFGe8XLwxpf6VLaRCVSq393eBhxk1R6yZxaagT",
  "key38": "48RUXi4dz2brk59ziCjAhiB6LvoZTNxs17qsg7tAWgoFNxj3yz26NhMJiRUQtWhFNtrQ4HYkdkzrX9xgGZq7RxPE",
  "key39": "4r5oa6LAfAFCGWcMTepk6fgPTvEqCWVDZpSwFt7dKvg6dNkr2fM71WurYKRdyR8kN17YQ6jShfoph3EJA4dTZrJm",
  "key40": "4tJxxYkJnrfTetQuuaaa6sWwwAwVW9PjasKnSBhddiyQXPmFgQp1ra2AhrqNffNRx2ZUWGefNvAHntUJXC7Cw2g5",
  "key41": "3M26ydjCeGPZmsomJpNS2r2cM5xYsKtErGSdfonMJu8wroDB33Wkq1UzHCrjfpths8c3TtWkYur3CubFmCUHYd2y",
  "key42": "48eqhdxq36hZ2tEsy5Jxf696qLbuxM7u8s3eZUwAgbcjkwpKpwp1W5F3EGxqdqafbHdLYuVT5eJJX1gdkkmCy1Bg"
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
