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
    "4uFTTsyT2p7NRmkan4qPrqe9T8bsKp5maVqXUeWTiSenXs2A5tLzyQ6LN3qxxbfmvRRFRFo9bn5syAK1RMt2caoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ef134QJPUUdBrsHbc3S8PPW4G74UTZe9vzYyBWufmX1GKbQFN9XEAFUzcQisngsdizHDGoGtbDKKo9FT4YXTjNc",
  "key1": "5H5xxvm77Y7zBnC8DYewjphSrzUBAYkRwsUGw89Qv66xCpKj8LGea7neK2ogR4mzeD2BmFugHMxboVheqCj1XweK",
  "key2": "53MYvaeDmN5oYGgjFDp2khbVHZjDhwoGEyZ53kJcLar6MvESAQBibkpcNmTSmoLrQx64mohyStDF5HRnY9pVUmKg",
  "key3": "4LjRHno1u7386LWq2CgLNQXPMFNpKeehH37hX7CVWPABHbnbXtbCUxxQiHHTJAcJbD11ieaojEGiGg3zWuALkxMQ",
  "key4": "3mpeSokdFgLYLSPwSHzd81xat1LvGLMDDQS9gvpPSEjWs6GouLGgKCfCf8wwtL6WqUdanuXZAYPQFsLTCGG9NxBF",
  "key5": "brRK2WZtZcKPwQDB6WF7K2i6Dhw3WXWhV58WAZ7jRTPPSE5hDP3FbK9fVj2vn3wYCm5LTFBxfBAPe2Vt64dKpBX",
  "key6": "QJnRBs4k4dc77yhVuWbLucxs6phg3LCB2Uo6j1U2DMCZ5ayJ78JyZuHvYg6EtRwK89w3UzwuRbU2oV8MGg8zvi5",
  "key7": "5JadyAwbVhBXox9pnwupW2YwvBQCba2sYrb2edZ8hFj3ASXNppiH1UjaJToWvg6ZHVkh27GJM4kbUwkDrxXTY4Sg",
  "key8": "wpYGuK38yjhxhSS5RHFBvS4PkTr64Hkbj9kFW3Efac6nvSJyusaUB2yMgwUPiaDTExUjMGpLzfMz9JxCM3bp9b7",
  "key9": "55aizHhERxgYGZnMAQ3TRshR4Ygx6RGrXEXBqFktuLtgqBK5KbRyV6QpCB2mgAVFZA5uCNDXie6Zd2d8BheiCFBo",
  "key10": "5RhdZvD4d1GPmZQvgVVGjxL5hNeC8KgtMF7wDMhHL4hsWkVxzmDcBjvhzoZ9nTP3RmnH35ymmLjzWLegGDT5PCmu",
  "key11": "2CmndrjQXkqJTbkDfju7tHndbMm2RevjC29QAjtCqt6Sd1i7CiSLokTgGgyDBZa92JLf7BbvmEzun4n9ZZoYJWv",
  "key12": "2iFxgpbHVX8M9SjBQB18xHgqPqmWWAWkq937XKoa9ip8DGa3dc9zAK2S6n5WPqHmD9VS9aPUpSPGPG4iuKwyWjft",
  "key13": "28VC9HvDG3mbWy9itccp28VMy1Ss28R1D3PZqpdPwVHyqXFDSbJXvXD5jFP3adiafgXQRrxxQQTRbuMMzsiaWU6Z",
  "key14": "49qGhQmtZc2ZodadDZNYVYT4Dcu7r6e6Koz9Z9iMiLTgsr4BdmaJv7ksL5qqdEMmcXMb5RX3yvkgsbGpziFkLyq7",
  "key15": "2d24txYoPEvYneeQP1CV1L1ysZfvJucVPJcTmvGW1ku6EVxSsKZj7djjfVTfpko1VmidbHDd2xPn79uZyykyXo7c",
  "key16": "MqABWtEksrUt4b3adPfQuuAi1FxfW3Q3rqfgp5Hd8QKJaRH4WcAzWXr1ECCRsUaHJ4Nb4oWu8MrRVf1PU86YfRF",
  "key17": "3jJLcWuDNGhm643JVV4TZobDCkYmWBBeGtR626cp1RXBep6Yb7AkeNV9FgSxJ1xeCvWNyaArwXYCs2uy3yYs3GUo",
  "key18": "8MTpwtneHRSeuRNjdL3v68J2aNS1mTDRcykMALyJgB5yuqrHoQRaLzF4xaPVR8vd9AQ6iZNRCVdNagbGVg3dY81",
  "key19": "47xo9G2UBRDZ91nQzZktnYVwD7cr5finRmweJKjmAVTeewbADtusHRuomf1pTzNb8D5dgCt9upFLMLZJBhduaZBu",
  "key20": "2eyJFBc5oiydw2CJpN6ftBP5N7qtWJM2HSjUXj7eLMYxyQYJ33VMRwTUYMKJctTfQGY42zuxz71SxaSs1BTQ9zcM",
  "key21": "3NVGNJ17agqUp1WcYgNumvnfhsst62to2xrQJBsnDNFpjdW35QxVVPQH78hmea8hzNRWS7EavWdK7xR8DrF1u3ik",
  "key22": "Y6hbKc4gqwjjMoB8kevHAZahwws6WvhoCXnYfaPBhmSbtbMupKQUeTqtdQPgAveAhyeKBuVhu4LzzXbHfqpKyxT",
  "key23": "37R3F5LNGFWARRb9r5EN6xCQRBPBgwZ1rpqPzLtrZESwU4utmYcPhgzB9hTrqGEN2oGdroU9a5pgP4s87cxiCFGW",
  "key24": "2FP8PXDnNEwW5Hfbiku1vbf3JJuKfjyfkLJ9PcGvJQcKH1mzoho3cugHpFK4YoYGJL7weynqzRLJeLN3m46wfEvv",
  "key25": "3UtzNcFawmkyH4LNXRqhAjijwTkcCDv5ALhPepGy9GDFCmFmasPqZTtSScG2ijJoxgfsCNX1ks4yAmySoRMC818h",
  "key26": "3SYrGTpfovKzZiYaGfRMpdCsbwDmdX7cqbfzDGgPfaAPEGUB67iuXjku6kQttGb3M8m5DBYrgARULWDb2BrQkAb1",
  "key27": "2fmVdiAX681uitx9FrbFAaB4tXpgGQutn8vm1fcGXaQZQ1eAEAn4656xcyBh694QVCA6MoMcy4F54hJc18WT7N7",
  "key28": "3XGWkRPvKc7e4Rpy1sSeg4UVTSdSc1e97mXEJMNTQzDXqAyfdhsEJ5Qg7Y9uSmsxwjH6FTmSxzPPqSbsCpfVuY1h",
  "key29": "2h7gDgv98Cp7iqkE74EySUj9DHHc2pZu9PSnksKUxvMxjEsdFouCArr2hwoJiYgvUucDGtUdwQPesQtLjynRVHpq",
  "key30": "2pE3vFP9Zzo2mmUu6xwcsp2o37vhbYiPdqci4gCWL5NsFQkMGfDHdib3TmU6q4dADjk2LFJtcnHA5uxFU2YGCTnC",
  "key31": "3Dbn7VFu4c2V25LGt23xXLGJYiP43s265hut3K8J4XFLc5akUwBWaYQvMPZ75GpdyWRmE9ZfCE3hG8PNZj67qpYV",
  "key32": "59oPXevtVGUx8QjtCni5rxr9XVcKkCvdwam9AJrKAyZPTPkVH9brxMRwfdmdFcY6Qi2B44CoArZ4TxrWiFenQ6Ph",
  "key33": "4cFZBfUviZX5yXSRHtZ7P6Tyy34iENWLMkb7zqJrgCt4dLxrTfxGHF4neV6vZwGcGVPMWXzLn4cZPTQxbd2aExvi",
  "key34": "2po2auejVuNd4iKuTGq35kJwySmjHbppiaYtW4kQQQKxJQCqrZjXHzsD5RjAqDRYCqJDorLipYwyWLAUnnjnZsm4",
  "key35": "5udHH7XV4Puv78ox7Cj4ZX8eufafx2x2rHhR78SAwnwHtCJBSFcF7QQ3CsPkTqumkK8HUzKATDPcdp8bVuQwXYag",
  "key36": "3aGF54R94TiZoRZK9NiW8b2dTCbJhF8cvVJ8QEzU1gibhMYQrjDqynpsF4jdzzjCmPdxNjG8FdfPVE1eGbtyzKW5",
  "key37": "m2L6v29i9HaXx2BXhBCuaDgHPG8MDRs5hgX7hEorrZ7kg5Vguda7Xbzk87ZkXgADsh395c9NeMGdYnhV5RFzgGH",
  "key38": "24oWv6LEr4cU5xGk8Tc1mkSCbwYRW8bNV8WtsEK7neNiToVZ7DvPYQhvdH9RuWMng3qEznhhMUEPUMbXedYPLCts",
  "key39": "5B1jftnDXC4hkFQ4y7YhEwrN6UPFxeNQF1BCmc9kvJq9nHr6Zbf3Fzyijx23YKLkemi4A9PNYzFbY3FRU4VFxCrj",
  "key40": "3aeFaVjpFxFFVYSN6LQSiPqV8hkz6YR7JBmSeyeXr3vgVcsBbSYSFwmqxxF68HiKDAHqBfBQYjPvCS5ocpeuUXF9",
  "key41": "3RZXsX75qUBwGciVmcjoqZ6EJStzL3ZbrGc5iLZ47o8GpTurkkBwPZXMNZiK2cNYEFhXu3bmPUE9pKk5zy3k2vjS",
  "key42": "4mf8WwuPX8vB3ugbTYP9xSTmcsaj5ixVMrzP84nGPjVAfSLV8eKEN9FLdG4qrBU1RXbyyKrWnYXUUtmeU4x7rpLG"
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
