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
    "4V5z9Exyhy9TcrtE2AEprNGNdXriQ5YY6FjQRLgg9gjotfskQ82Stk4hzbGkvUz482VRmkHTrT2AqaGD6osa4hw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qeSX7BEKGXUmmBiSUcA2ujFZJ2xDYovZnV8iX6MsV1mb7trVAtFBE4thwDz9SBK9oRQJCUz6M14cfHBQuCmZp1u",
  "key1": "2UDXaNPtvqSGj8zjrGZ3SCuQ55n5cuGJTK5adinW2KNkm91eCMvjYCSYFrMWGhKaBziJknVi69Ufu4rTMhPr88W2",
  "key2": "rMUXtT7iFN5AdF2HWq7cDnbFwqbf3DmYyHnVeqbbteZygJawXxep3vBRcWKEHxLTcr5ntsoiEhnz7Y9mujd9SLx",
  "key3": "TW8ki5zfK7y7uXUMKfUuA8nXMAc93ZJYEZEavEbEUnT4ZDr5uabSgHZjinkBEL4EEmVuDZMdZCtoCA4zG1KarDb",
  "key4": "XfdjVfgwDaXd2yqcvgLfKd1phDzPQGkM3N2QJVeWy5wjgWqyvBnoSFuWDSidp7fUJDNvJMbFq2WvNEjByWzjvoP",
  "key5": "2Tp5JpcmzvRbHGXDwcyveEqVB5GkCtJP5cznZWhbaekX2MY5BAVRoiuo6MfzmvEsnFBYrtGTdfZh6Uwzhw1rK5KN",
  "key6": "3SSZiCSeWmUHqSmzXAMRVFnCdzVMKYykjv1u4bNRyZT1Z56Bt2pNubGmhXNaGwSH7ENwCkvcodzqtiT58KHZshgv",
  "key7": "5RpANTcera3qdw2SZ4UJ5iYp1LcR2zfaKuR84XDFXegFaWW9dBt8v24tdkqpSoUn6z2iPwRzAxb2j9DdgsTReihw",
  "key8": "B9wkZJteUYapUepca186TmHSZoj6vfSt8v2L3W3pDi2pLS1FgA8mdaigUrB1vRuiApWN8xBocLXnquS7UQuSLoR",
  "key9": "qxpDeuJ3MsVZ2VckDpgLXPMvUzsru3j8BwWDkT9sQ1whncJgt72KQMM6D2FMa6ZY67MoRZJvK1fJnvY6zk3DaL4",
  "key10": "622TJZ5SnS4xumdqCWRuEAWEj7D74d9aiZ6xEQ4QUgXGLwZ1xCMpGjNDGnK5DEmHDa42RsrqG4sCQpc3fYQP91n1",
  "key11": "5ixdnNkeuwoA3E4uUjTiws7KemRLKFA86Uid1FrwSyohBcUYNQBVEXbA9WirdbnnxXMuyM1XsVqVyVqodbE4nEv2",
  "key12": "kNGULfJN7atxh2Zt1CzPARnjKQrX2w8aVWPdzSRY2MsqmQfr3kHKfTkkjVzxyeihbonzNLYTg1jmNfhwTng6eYf",
  "key13": "4uhP6pY5jSLvoMZdDs3qoykrX69WUBLrtfSaqJYqe1ojmE8sUUoVdywufUvK4wm4Zw3vQRCSEzgJoSxjiUzqEZD5",
  "key14": "5Ef9Gcq1ddDdw7U29EU2oVpY2RWKtUYRtroULk2sty7bgDoGv8xtmpYN3bRC8sjV5QKD4MywFs8HYx8GH2QiX8jR",
  "key15": "ZFDA7PovnSJnPst3deC39ZSKyUy5x1pX4kzaYYMGsSz1SrDVrWC6d1ToJnHkLf5gPLdxkyPWzb8kt2eTtJC6Rmj",
  "key16": "5RTRRU2ShGaQ4zGnLwUYf7TmUPFVEq3G611wUzJGNhkafhMLbL8MpRpkkYmFPg4t6fKLfmzquf45GmSV4XAcEvpb",
  "key17": "TdTLHZHAVTPeZPKq6DkZRYimM1uy8pBimax8dGZrCCfwWchmGs8RHrVbKDidp1E33UviQspnto2s86gw9dC3wUM",
  "key18": "2yZHmqqazwotUxT8bZxZKLRBLN18vMgmJUsmb5iJ8DxCdo2Vrg1Gohx5zReDFUN2TA5C5TayLmeXSLMHTHAyWPAA",
  "key19": "gmjFgAnpKHQpzpeVnQqm295ibcg7KV5of5iqh1snq1kMu49Jr5zbEW7Pd8fCPSJCTwUWBRtLZ3tDt2LKYR7DwGS",
  "key20": "4aHKjajNVdzr6fj2HwsR9vLvHhqRWeSGvBRx1ne7pNJH4Pyc8JnKDKfHX71rP43ffkthZyFs7x8RB4r8m1JkFz3s",
  "key21": "5AThy467DsyQVUUxgUJZiBzpBkwtrufWPiQxZdAVmdiTxdQq4R89C5ybu6qed3kqvP4DfJNZZJy2TXmKgaiF6nVs",
  "key22": "3kYuSYBPFDjf1EMEDo5Q6SpDTEmSyWk9W1eSb56AjhZLKt4h5jWEp6AsUroqwXmqeN54KBGwXeuwGgr3mxPjvHvJ",
  "key23": "5BzE3mvDNGfGgFgTwJVuFPfhiRYkx6hJHEzNWNnp6CyJzAaN1mTAvb3maByFtGcT34ne2riW1VxfYcxCS4DaV6gV",
  "key24": "5G1UqCp845Gos8SrdR2AurpsdcBeJsApv1tADhE5YTLZ7WADt5CU1yku4d52MmUYep4Yu8jDHoY2C6RTKGjoe5CR",
  "key25": "NmJkfo66xnJa7EajD2ZBWAqttAZALkMt9JiAYMkH4cMeLk1aoAvrmrgDGQic7fKCEHTCQBZvnFTiPvqDrK6tTYN",
  "key26": "FSTbFCqxN6j7Bp7653X3GtCvWe1nixPEQX4yThpFkaBBp5rqJc4hyAxRDSAVr37V3fbWMoLShHZDrM8RiUALr6o",
  "key27": "4PdeqcPEemWi5tt2DcQ2w8U1PnbXmeRiefMDU4u4L2WTQSzWkMZqdqCGTjN63YS1i6p2GgAdwtoaQY4uD5p5ZtSA",
  "key28": "27626adZ1RdhFE7h8YtCkRZSMEdyL14ihsGHK11btiLZJkcwK1D9sDMynuHXGPsX6qEiCsUk9FZPGT7QyeaEAY1K",
  "key29": "JKcGZ97F6TUcFamJDHGrQKLQKAr31unR9yqqXveFfGT5RGpUzmZcxTyDVqoftmYSdZK8j1JK2v4tnCCP7i2a7di",
  "key30": "CxZaB54L4nX4fjqtFn41ju4J4v1SVJVWmLCDwd1ojr3fhKMZwy98vNHYF3QVve4mGqc1p9wjKMhZzoBEFaLd87o",
  "key31": "CbMhcK1ruX3zyEsFegaP6cjM8H84Dk4x5S3hZjVhvt3GSZrAEHXUjhxkxaEf2iSKDHJb7QJU2fRsAKjzTP1E3pQ",
  "key32": "3C62BwYy1AXRUi2Z8SPQKPSEFCJoXqPFTJb8wJQhGpG1DXwxGmkMu8pWuEAHo7ZxtUW6yn89FjyhJFMsPzhLCv9v",
  "key33": "4m3oLmaK7TNzaCKU6qG9YByNa64ksqU6SjFVfZ5GCrrEQbNDWQFhoXaZLtXoy78P9jPXe28i1NjgiBzbHVbK3QSW",
  "key34": "51UEBq88hUCi3G5QdcmE4dxjcPeeUYMQCtvx1g8N82Lj396x6DYLJDP93AxdziAQytJiGkk29BXXf9DLdaw66FGc",
  "key35": "Yf3F3GtPmuxjFS1jo2b2iGKMVnSPKPVczunvy3xv2RWGwbWegkrcVJGEYotvPy9RwUqCECmC6wQmjnm7JP4LSwt",
  "key36": "4Xo7wipVjavWGQ8vCYu42nhe2mDZ9af9QWhHMMDorU7DPjxXzvSKNEkXvS4prMDQ78V4XbcjwGT37sHXTyzfebpg"
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
