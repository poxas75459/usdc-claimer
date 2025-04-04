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
    "FJ2VjZ1tY9r2JVtJAJBQKqhvMu8o5sazVMYFa7bKCEQVFKu8Z258NEHDQGcYXFHwGkvcYzWdhtpWT8YYmeU84BH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UMW5HcybWWNdStCCvJW6E9TxdtF9R8wUv2gWvWxfbAqFmwdYk3AZmFVmKaqniVnS5kwvbryraUuFw2mF6qw9fx4",
  "key1": "3X9DLtr31p82pdKD43bbdxHGsbGGxVQnqmp9MM8EWaWKMcDLtSNuBDHnYnSdBPk7JC4sWsuzdnxPkCBm7iuwXU6N",
  "key2": "BtCczjUz4weUEhwAsPGjnwJ4d5WbJGqCYknCRWFeAYWc1nF4XJ2hwZVRgQCvUk1D7jXdJXDdwP1zD4aPhAfMYXX",
  "key3": "2twx3byGgTem89tNdKSgXeuxQivxQhUiNWg11GRVfTKbhuzbPWXbgftviYPQMxmmxjm4ieN2KYT54H3MWB3ug9eW",
  "key4": "3voheushuw6hVENdwsG7D2UV6vNJgL2WFRpm4mNUsjYT28uNeg9W4iWK1HC9BRRgTCFQ8D35pGGMVsh3KWwkycwL",
  "key5": "TBFs3ycN1nqo83KZ9o7USBo8A7x96MesaaspBnN32Z825b9w7GEHGFJrJSRBv3QWhoZDREk86FXoPcatoj33U2A",
  "key6": "2XyfrcP1g9bAH9eFgBT28M7odcUBZnsXEodBNjaU8waNWgdFUWPXiPUiw3myW47HzSgQECzpSnA9KLocfr6vmrZp",
  "key7": "49pUXpEhM81atnWDWmPyrfW9C6ykfj9DvF2fFhsqdCR9e6EhJkZQVcoJ4yAadzQy6QQzDjy3ggZcVT9p6bkizhgW",
  "key8": "124Tkv78q2e5N21LChzBHzA2af5Wye9KWZeCq49VJ2KEaFduh4gY8sBE68YoS8NiobjFKVRvvUzhuDo8rA4UTiW3",
  "key9": "4Q2pYwzz1e971UpnpmVycCMpRLke1Nwy17LTDfCJFbQ87pSJ6EupnQHyJUdBtn76t6C9HB1w1EGZ8UkNgNUKVHTG",
  "key10": "3jo4Ag95VY7PEWLjy2PJ2fQr6seg2HFrCx9SqPpeTaQptcrxyEgCBfea1tddAyDECKKCq6pRppDM3rSZkjWDnqpr",
  "key11": "4ng8KcD4iNFmtjXKSYSC6iEzNTkqqpVuhHnSXBPvqLSpMYnch5QKFkT3hMRRDKejC9owoCZEHURkWimj6iDLHqoD",
  "key12": "3geWhBpG8F1iUNnCoybnjobSjxncvFM3HrkB4DLFjUoaP7EBwdskabuP9hP9YGs9tY6WaUGhLeGAsJX6DUiFRSdK",
  "key13": "vnKiA42dPZ99b9haPdVZWYgn9SqEJxEkRaNzKSGACBSaexZGiJ5JubD8BQh2PYrH8YugKQw3yDwh76Jz2PoK79Y",
  "key14": "5uxHTEcZR8vQXFN6YbybR81Yf17yptmQe9sG39ccpYreUrTasgqCcbLdktv1Kb7nFXZ7f7t1B41gJvfce5SECSV1",
  "key15": "4ceX59GzUq7yjxgPmHwNeatshq3nenEf3NxEfJWTRnit7Xmbs4srLUgiSwR8DW6mvEM3RDR6Eq2p7sjhvooHTNtX",
  "key16": "49ciFXHQcdCFfPDg2i5V5pFf3NdzUmJ8Wfk7wASkcbEZR58sWQnm6YbxRVLur2M18jsVtqhjxyzynNrhfBax5W7t",
  "key17": "2ws5HYHLH1nw387yzenAwF3kx8ujKhkq6VMs3GfooTfuAqGRtvsohno4QPJ4mJL64a3JB9ZpXc27wwEXqmFf5jbz",
  "key18": "4Z3GzbTGdCCbawH3asNM9QXbmWjzGzFDy9j8eH2F5L7uJ6AZWxM5PKJvrdmMqyNHG3FkynSeLvD5VUsSozYozTBt",
  "key19": "B6SSEfBgaNMAfeR8WrqNDeyby4nqL2W6CkieAynanBupgoetjcyLV4YybAj4LSFNBf7n4R6srtR8brjgz3jDWrR",
  "key20": "5p85FErCHGtZhHqffedN673rTtZrT921cZ7KS1ozgSwpaGkF8zGEggggeyTuXWuQf5v7GPR2Zk5GH9mWFuoYBxs1",
  "key21": "3nogocEZAUAY4KwGJUEm9TWGSrVJqwJcEpJuVC5cQnsWXMLiqi7KZ2K79pqUcu9noucT1ja6EahcPLBcpdHGmgvK",
  "key22": "2BLAwEbt8sLKjKYZShi5uz9PXxi9aTeQEarezULGQsTGHLPM1KtKjNmtyqu5yuZzhKUTHVoC6zLbYqrdz6bTeQQV",
  "key23": "2HMFSJdW7hFjNKUAC7eoD18YsFVrWwdKmYg1XefwVA8SHZtsXSeHiHNRLad2DyTREY6YXjk8PHgLgWdpexhzhX3q",
  "key24": "2gcxHRNzsPfhhMZiaSYP78yeHEp7nkC3XXdXv3NP3b5zU4F2KMLamZXx2a9oE9aiwcBRT7v1fnKokpbqAqPU7MAj",
  "key25": "2WjjYyW8rrBQFrG9uzjbQYCJs7jPjft1nGhzX5v8mBZoggizX9M3nUyeUxKnbPrPn1S4x5FFK39M2GWt3f15WxWH",
  "key26": "3hR8GDW38MpgCru2KG18kU1ah4CXTcR1QSMoV5EU81eEQaZgyHuPLtM3EUonLyGDYivVkoKCrgUBvX7WTPowNP7e",
  "key27": "5z1rmJxryejJyFvzZtidJXQ1cANpSLyUw1HDiDg4cVDaRQdXktYMJD89qgWmR7wPcrtEr2M9UbHwDARcGxD3UWZE",
  "key28": "4dSsEPvKUNYaZBLp8fwpeuUGbPm3STdnns6deNYgB8AatKFAXqycYqqmBykriY4jQ3HmDzTWcnPm378QoQ9swfE6",
  "key29": "4GxR1QUDpZNm1p286rBx8EKP7wMrgomZbYM1MfoXh7RBZM6hk42ETkJvpCNsujsZq1joEZL2GJ4NhLj4tpPwXuBK",
  "key30": "53PTtr4ounjmTj3sjXGHNSmPbK2nCJU42Kt8jK6uSmJzyrR8dGyf8d7uT2THVqaM8JCiQjtefY3nm8dQkHQ9eDC1",
  "key31": "3u6QuGKURMKgnepA8rJRAT587dWaeotz6ezBfcmYWtrRGEdJY3b3HkPz5ybDgdeVgE3CdnyfbodCsu2T3A1121Rh",
  "key32": "2znch4Tq9Gz6vBRdVvf2kRmCfaVWjAJUiGoweHuKK6sVquUU36QE6XtTapPyAo5WJv5xAZvDpH1y2E6C1d7VqAjd",
  "key33": "3XmjkvpEDHsLQWDVJCmC3GkJeX8QEZa2dBGcgj1QKMamYKJP7fbPBsXCKMQYNgrWqbeCVWEzUg1abAEJHmH5WbTd",
  "key34": "4mhcnhTFQc9Kg3ixyHftTKt2psruopDEsuec5iy63B8T5fPTkFeRQfdYyZXaVPJRqHz7m9sVigLSPADftC27KozX",
  "key35": "3ewxpG3qa2Sdc8L2saxPrULeRXdPx7dewUHxSJA3bHiMJCTdbFwj78sFKwSYBr8Qd12vL6Zp3Zfzo5oTe3N4T3Jg",
  "key36": "4kZiTsMUj1z3852cBYg4H6bmjxK6n74L3djbfsdUNkwhjFseycyUDr2wXXyrKkRCXrzQ6jHkurn3uVA5WohUW9q",
  "key37": "2WDfoHe2aJcafkcC5TtUuMoYfZ79sczEq7ShgMMq6mNPesuxpmKoMGxpCHmYkW1FW6jrkjvaf9SK23tsWYb562xk",
  "key38": "4XQHT6EAUo6QCb3K51hUurovmc7EqS3smHsBtJcqcmdB9ySBrvuygyBrqwFpGHVYH5423sXG8YzTkvg2LWxMKbSd",
  "key39": "54J96Kw1mtXdKJdBbzy3GS3ytFVfWKrUASovbBa7bdJh4qGT3vLzAzvrSXrU7jC42LN6fsX8fMhBA4H7Q4u7zwa7",
  "key40": "iAngqwEpVur9qfqDjEDgyejAZBThenUrxNHCwBh2KHtpSw2jtNMhjafpNX5zaR4rAtks25K9GNEErKLrHwQhGbC",
  "key41": "3V969omHj7ri98EksNEL58eHjfyBHssa5uHrsiAbibNrcVrHNHiXTpCCdZiAwiSLdcnfmrfbXDR5vP54vJu12TSy",
  "key42": "2q97V794h4wmeYGFJEWRiGr43HnxtAiPV76GFwoFS4LVNQHtjTKdBA4WVP9aKSLwEtvE6dgpKuM8ejtLm7s61Cfu",
  "key43": "4xTEJCpTsUqC9NuGEaq268CEKJPrq6cApUseww7G4ZTg9YTiYucjyVqLbKr9DpaFcvG14Ws3K1BnrPeV3iQuAcwe",
  "key44": "2YgeBWkuHcJvLX1RByQc2f3pnfFhhMsZ6dSk51XXNcxPypJYHCDYKYQTC3gDGjTJkBbi5K3Z6yq6AtrCiyWQ8wyc",
  "key45": "3sdr2EKQ62TVHy5wLkLgVU182MA1HudGy62n16NYFpAwKztfsMXP51CxU7hQxYT44bF6ASSyyRYTqGnwEP36oY6L",
  "key46": "5GE1d6AZdoCs7pT7hNarNAPnJkV4oyLmGs5N8mQQFGH33MxhJbBQcMnsygrZoiUnj3kG4kxHvqkgWFSu3HZyncPL",
  "key47": "2BhrpPPszjAuQgjZTDp3J8sxyaK9uv9AcQh4KJ5NMEekYerKHppaTRtJvAei9LHu9E4fpkyTYVQMr4bmJysmuYz3"
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
