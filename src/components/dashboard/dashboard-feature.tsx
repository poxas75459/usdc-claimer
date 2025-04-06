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
    "4MkKAYnpH6aCmrKL22XWcMpJnxpbgZDSxntZaUwNxhmgxSYeSPNpyTaEZztFUiL5ZXXw76Qfw8KvW6w41ZYL9tbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YghPJKYSPV85QuiQRbZCWe83TsbPCsuRg4Fs8rZhEnK9TxpjxW7AvLYGddfkxYoB9HH19rFDJgSytfN7JWXhisQ",
  "key1": "5XsQVgpXg6FW1r2MXkVNuZ6u1Tv9LFXa5Wg6B8dQjUDdJsaUn4SyuFuZprAofARWtLwSLAE7wRq8BrTuFsa9WEa",
  "key2": "4sba9bkq1k3we9WTyNC3PZu7c6nSh4o2ATwfHWuzB9f9soa3PuxPDrGxNGZFKWNNE67cBotzYYPkD8RWb66wAaYV",
  "key3": "5JkYirXQS5sjwji4MZBNozeeLuTGp8wpavMGTvkoQuQQxbkMT5ty31wN4JKZR5T2o1gADXoXiXkunhiaAkij2bwD",
  "key4": "5WMU4AUKBck3GUubQM5VsntySFVck1sHVFNiXz5tP82PuECsbDzwPV3j5qEGiJZt4AuyykV1hJUqhcYx2mWfTrMf",
  "key5": "4Hzs9V7vx2V5spgNodFgUGbBfmxXFag1mPx5RGweaYhRFk18bJH8TiBnEkHnXQNtAwQxavevmx5GMeeJ9JHYtuXt",
  "key6": "5zjqyL8xcYKHNBarUGM6Se5P4mEjTFRB5rEDc76AsxWqDYYmvLDd8StJ13woLT15ZKvaXMVvwKFBpzqGXudNoshM",
  "key7": "534KXz6uATmpCJ684M6AhgeEjmzGkCmcvJRE2zfyiBYw2hoyUHK1Wk28hg6bxpfCD142hTErfauJccx2Jo26SjbC",
  "key8": "28rgmS7PnhPZRvjDviJCxPEYDXPEFUn1JfDdYCc3THdycTCM3ByPf7vbHdx4NAX9Z57AKjmFrGcSgiZF9cKzKRAG",
  "key9": "3rVGPhQxHaUmvtdjD7NCBY5cJZgHoYvzKvDHRGLnMB7vNbTYKUHwPbKeqHABxVv1T4Z9bzfP2ayYctJteFjvgv51",
  "key10": "4D3rg6sxyUQ3WmYSvGczRx2kzLoJXS2urg1ZxKX7Da99UeUdPfZPWnHtGux9vvcfoNyP99dg1HRhasMtm3MHAfZ7",
  "key11": "5R7dXkkXzcShqWZen2XTozvNiBMkiR6E6YMxVeneTThfJUNp8gdJGN2W45uyCZNGhW3sQsTY9vF8w2XX2xqfom2q",
  "key12": "2mxAxBzTVfB1qrBnQwTCKvqFaP1SDrHtYCeM9awK5V9ASF1uDKQwSyTLDvrzwBz85d5ZK8CnXF3ueck3A2DPee4r",
  "key13": "Rekvd94RbcRYUxDcQQP7XLegGyjbrrAM9vudWscgbK2ptofcLGPFB76z2Cyg26VJ75DUnAeouFVN9HvJSoXQdAJ",
  "key14": "3UuZ3U3KieM3ec8HYgLtsvbgbxLxSqRRQ5c6XNdEr4qTHCnPfkLkP1m9JTpASnM2aWvrtg8uvDzpUmkojUSK6esg",
  "key15": "3faPe9RkqN77rZvZ5RGS8bTBL94rmvNU5dpX8DsViu1iFAVDSnK3a6dHdeHfkCApjuh15nDNHYLHwedk1xbrSPxa",
  "key16": "3Wp9eMvZEuu6kTrbhpL5mQxLFGEpJbRit5Dguqpp8soFeF11FzEtP5Wpx1Xc3WsAc53Gs6qfyE5SrTWkw6HBNsJg",
  "key17": "5ViccvGKGoG4cUbhXtNabQeQcRz5rgG3HQnDv6fxpJEjxJPTVVLYFMKPYibiyvCGjqYpq73B7D2dRRGFSCYWqkQ8",
  "key18": "44xyAMAs7QK3DZs6XPtDScJiV2c35ZUEC9GiaWf5GZ4Np4WtaLG8iHenLZJPFe2nessEvdfwXqvKW393KwGkzL6d",
  "key19": "5rGTSV9Y3gPvpDhC8fJhx9yAwcrnz3YDPcahAFRsbLue3TJEZo4GUp2k67pULvKRc7uN1p9j1ahL9osqtewxSZz5",
  "key20": "3JnQDZ6Vh29SmdE8T2B24DyNw4amGsM5oKsbTNqUgKdm4Z9aqRcLAHzz2UXFw4hu4MSaEW4GfWHVRsMyr3Y7DkC9",
  "key21": "5LaH7iBhxzvcxGeu78y8N4MUGL2ZQcpFirK4yHZoGxPc6AxNmBkAF2pXDgWuFgyu5ZiTxR8MWqx3Qa3gsaPMLm7C",
  "key22": "29SvLAayMVXRg4oQVfUQnXLhpFEiRh1T6VQbuBEbJD877QUk7zJkL51hFMJp5j2WxggnygVt7VgJ4BaBwSZJuCeY",
  "key23": "UcoezqvbkS27hN6DyhKtAie9sZRXkcbxRTgGR1TVkx3C9LTusHWwrNEHt6PbxwtJaoC8Hd3W2s5Bix4xzzkRHnP",
  "key24": "4f38J5yk9biL3ecEqfNBk77VpEKPJXDmXvoMFSTmZoERiaCvHeqFajkaBkE11ZJEooMnyJvhphJhfEyn1xC9ThNw",
  "key25": "2x8pDT3McxDJUoT7AbhAxsUD1epNo5TvL7Kn3P1f7bJhp7GKHvBrdnihS8nXtw7TPoGVCt4GtnPBMMM925qocJdJ",
  "key26": "JhD7psZDLZF7dC3G8Dx9Uo8QyHFE3rmN6HBxt3BP8KWDQesbgUVnjktAAR6q6VavQPkHnCj35dyzm3wTXBy13kt",
  "key27": "Sub7JmRg9UQtXGR1be5Jsrdb71QyX9K3h2HeJuSweoU8ZJQWPNQTJMnPc9q52QRyMS2vnwRZCnh1owWgNvAFthi",
  "key28": "3h9d8vyEX3cEhXaWHTbTRkw61rVVi9t7gFrLxHwMTt7nA3uW7Lz5F1781Ks745RrURDmFw5izGxbio1pmmDcKZGo",
  "key29": "uwXJucg2pLbqJXBKaGRcpyGhvBvS5BWi61e2BrwQD6XzDVdoQ19nRwENc1q3shUBxxe4CHpHqoVad24QzUbGRUQ",
  "key30": "aAU2o411Uf7K5yt3R5mxP54jBykRn1ie415QHNg5yu4hPf7d769rhQG9atzEBGgyBbwaP3z1g93UHrKgJxQA4XQ",
  "key31": "2XnkHVSbwvKwYwqt5nggkBU18rVsMogwmeQD8Abj1N9tuZ2B5CsphbLVNRD3NNTsBwJ646Ynvkh79ZhbDVeoKv27",
  "key32": "2KdWz2v9NgqN5nA4VBh6VJwgH3oQLKAjVntMvLEsC13pBnJuWCCNkbTZuzbmCKNKnhQZGapnQv37f2FnNqGEKN2r",
  "key33": "4kpacZuAwicpwQE8QU8xMaeC4HXSGPprLPGCZmdsjhpirGyS4yLFgMqPRM2yDZeXSAqd7gAzxChUAHtgnLxKeaDK",
  "key34": "2KbgE6e8GMoe9NhGLqAGv5xFcEeRajonUG4vP3vaxNMDmJkLWW3cZgRXqc9bVo3j9meySgsiKZokpGDw41wxEryb",
  "key35": "QpbTaAQryXdeKoaU53nAmbPrExrHjB7FFiUS72WBHuTJioSoXJFDERQqYgjLs5L8g3K14YjGZQmFWpth5ygKQ1m",
  "key36": "3neoop3xroQSxcbbVqFqn4yMVP72opsiYAdibqF7HJnCJGxtt6py15eqi5ybdLh6JMnSD11FVBiPuB6Dw95Y4tY5",
  "key37": "3BMpuNKSSQZ5WSUTkSD5Kv85XcKPLfTgbSXe3cP13CQbuBrKP5ZG6yCUrCcRDxWZdAS4Bp5kmPSJav7NijjiPdhG",
  "key38": "2m7LcsYkv4noWYhKusmYEQkM1Z8eEfH3Kar9oEs8A7GfcmUqEYrKkP6JjYHJTtZV6Mnr9Xd4Ysx4Vw25CiAFsfs2",
  "key39": "3Vj4B67PGfjippj6EBX7E1DYaVJgvokU2KNuxKMHhgMVa2ZyNwKwwkCeFYFMrUpXaxJ3BWMR7Ljf6VB5ihJWxasP",
  "key40": "ZF8SWV744se7tQip4z5NGHqDnGQe5RgvUjZGnHzHHXLWm9n77AHV5daFPwiqEvxeUuHC1kATjjVSM2jrnGswK7N"
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
