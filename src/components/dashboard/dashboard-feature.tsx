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
    "3ZP8tZctyxkxAN6FhavMGYKiVFwwepZ41X7MWMjDhqtpTJXBP59n2phqoD63yLYNWbMH7Lpqno7PvAaSVz8xX3DG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uACoBcTWzkGvtWgfjD1svshJt89VFT8dsV3ECEgxHcVG4CKUWFsCY1ULAsurdSVjhthHD541Mq3fGoWBUa92zJG",
  "key1": "2MrmVbV9Wm6KX8ZtysoMtvqwtbxniSCBrGKEaVbcUvU7iRkzRmoGhjryjTaqrRabWV3eoQPSkGm1f61Tk5qosiS1",
  "key2": "31CzycT8jbX7Cp4Vndsmy5RhDzsAxcVkJdqB1LrrvHMi3FnbHczFUveUdZsVmaubaR6oygKT1mB7yUkjuKXR66qc",
  "key3": "47dyd1PyXQftPdymthaNPsxhLidyRmeJutQK1xZ43suMUUZqoEdkq5G77RZyNjqHYJ9nGkyr86JtgqxScHG2U2PW",
  "key4": "359DhH4hRkH5X6EYSLKJnEvXCu6ueEr7ZqGzZHd6xN5xRh7MBUWNu2URgE5d4wCieEox6b7zRNtzgGmMBtTqJJiq",
  "key5": "4Lnug2WH8YfE5zMtqZLSWk4pUFqLRz3xi1GDmJPbsJeUtS8KQHyszkJaynWptx56t8NZiCwmvS6Lmpk2mLf9vezM",
  "key6": "2ADK2HAHygWYpYEe6uQWvscEwettkjk9p2smHMt6NK226tGz2Utfm2kfyFToHfxeKcbv8dGfn2QCsgPhVaAuTjmE",
  "key7": "24VByypAkqcvF7HZ8Tzd7bvKdMy4v9StJFE1P7jDNkAyPM98Br8MLC4Vbvy488sxgSB65i1xVWurQPA65UXFW693",
  "key8": "QPMxBxY4SKv1TW2tuvMhD9zTSfjDKKmDgwBKFekQ7wQuytPFCZseaMxX6J6Cy7NALmwPGp5aerF4ZuufwKjwbte",
  "key9": "3frW8H85rZGqYvQrDvCmpvHo7cdffvYkDAZHaAUTkMAdrbYCPNs3vPQUk6wHXW2ndF1qqrrYRv3xKNFFiUroivss",
  "key10": "KuFyTu2Mbsw7EwLPhx2Fyv7J3q4KiAavMDvkbyVxqRVGe75t9WZrHwEGJ4W8vdL13ZaeSf6TdhcXsn53TzcwMHn",
  "key11": "2wvavdgnFvwiRsrke5dmg3Bt5kkVSFJ2ncH9Evu9CTcxioPi2Z1erhAAkFbMYGgNa5a1Rrxspoa7TUVVSP851rcB",
  "key12": "mM6XdKSLzogDZCGk1PaTYim7q83BPC55qUA5GEwvtEriMChs6WtCegxVeMKCWj1afhtH6XoVSceJwoLzUZFSFUu",
  "key13": "2NhxeuFL6RCm8QM5KwnpMgpx3pM6o6gtU54HRv1i5gW4fCHdWazya5PX29aikfzhmKCN1M5c2s6pbMuaFyZox3Ly",
  "key14": "2AdkM3DUDMpM7mBMCLNrWbTvxvmBQGdvh1yAEZUDSwwF9a343b87QCe8aqP6XK6PE3WF6LQnnEv3avGDYYqQnjE6",
  "key15": "3fCr5nXX61gxHxcq7TtdyEr99ptDqm1jKcMQHerp96ekAZWhkmGqzZUVJDKYccPMa5BUgao2PZHxqWsnbSA9FwYE",
  "key16": "4H9rFfGCr8Qc1koSaVoZhZdVfteUSvzH9HyJLU5Zu6tYkVCrtgeYGsePY18nymY12YaAMmLC3S1LbqnfHtVvDXxz",
  "key17": "2SnBtRNSPM4sTZFexXeLSkkxdJ73pxHit5LWLi87FeW6ZLpPCzutSbkuMohPR5mmtWZTRFP9svHDLLkYCj33hm9V",
  "key18": "bcQiQubAswEFnMbS2GPCTk49gathnLoRmKobUzjHT46Pf1WoLAYf5qScy9pWetNiVMFpqm2TFqDhyQAA1xEnmEo",
  "key19": "3qAJKV2KfTtQ2QNg9ktyDQw3gmmk4dsebPNCrfKVWkXp3hn8n3inatH9ECK6WcQVGYotQgzQfW2SWYJBaQs25KjN",
  "key20": "3xefeLAgSaZKhic6gyPnxRnx1ZhvXk6LYZYcsyXfAvcBVnM8QS73CUyVLNimUeADrFmuitGWHMXhQ1oweVCYiq3t",
  "key21": "5fMMaJV2zsmAron8CHWucyMU8dtGQRoba4kuiB7MhMoM7NHGvwz2mQvV9JQKe4UAuFk3omoU9ivEXBqkGN4CWZ2c",
  "key22": "X8TasxvpkZiu93ZhGTtTm3RbYcTMJCA9FiWARrVWQB1PT74DDQvVvJ1E1JRsRw4HSKBpBViii6eLJqKMWo8C3pX",
  "key23": "4XvbyTJ97xxTkK3SUwFa4fpFYF7uvqdk2xa9fX4W3wZrwuAeGHApNam7s1qusCo4f8cFA8NwSCqAGGZkDmaoSLrR",
  "key24": "2uFTMwpKaQoheKLZTwSsiYBurS4xHVTMEEjSpTnCjAkgB7gnT2tTQUd956JesNaUUgaVABNgg4svV5dczgYRr2kd",
  "key25": "5DfJPBPohpHFDFbt7Ya647htU9aYTxY5LvRLfsod4xKgS3byXEq4rTaU6W1yCdo7gsy3gFyk1JyMV7zZMYY3QWGP",
  "key26": "2RyD2Jt6oDs8vwjnm9kZmd55Z7EgVcmgjsQPbR8ztko5fyGRyf1rEKsrcEHoaAMcvVYDjGp9BpGx1rHLgayQd1br",
  "key27": "3gn2vgdeQSshn2HbP57tC8zNgWPnt3Z5uEZSty4KGpAJ5Fp5Q1HQEQi696DpwZLWyvHHHHL8TX6CDcFdRWJjziJe",
  "key28": "48uhb2pJepam6piN4hLRtvo1bhjQXSp3WLZQJoKPMfd4YmrcR417323W8sffPkDgKDTwxyvH6ZpzmjYpSQGKmBh5",
  "key29": "3fgSFSw3zTkChpdZPGVdWedM3bFqa25a75CTdSzUgLUqJgsH3EGb5DmejrSFcwdFiHwb4kybEVg8ThgYLfUkAVTo",
  "key30": "63xu9ZtnfJAuiGMRwBq5F3FT1nEurMoTUtWLQJd3XxdpVV3iPrfGfqxkqBXMMRP5x8pXgXAWJNu8mzEJnWugRrKQ",
  "key31": "33DaFsXbrykYoiXMBtPyYdLjn3UWVWkx2cw3EH7ukpUGGVZRNPv6ETznV9At3gB8FaoYaVbhZt6xrB35hH6yzZrP",
  "key32": "5nG5zwM9Vp7rchbtwBY96J56ya8LpmhvvSRkv8tZ9vySsnk3nvPzgJYGqHE4S89gfYE3fUxfRrKQqvTNeRGNezPa",
  "key33": "2E7zwfsMKu8VXMB5s6aXAS3oNAsnc1RENeccFAPbzSX5gWqtAmB9wQ9dXtNdf9jYNQLoubGbrv3E4w1r8chxu9ph",
  "key34": "5HtfVqcu1d3nbkpEvDt8gXuBxjMd4mtTpSEJiWypvHLkkrvRrg4p3v9mh8bjFosHU9eVHeK7tVmHSMQhFYvWw16q",
  "key35": "56zNNMRNjyCVTEaJ8AgtC7UZ85qbamgYkemHCfdHGufreA4NqeRxsn6soDyyfsASxk2mY31ECZGTVQyth8eXiCVV",
  "key36": "2KEjqBQ7zk4J6LqhByjB3X2HktMumk7SpMfMTfS3d8deXMhNuT7pg2mn6uN1yPheEgwSGB68LP1rPc5kswYJeLxb",
  "key37": "4G5XuXVwGnU83BJyWGK9xQ82ucLJpYrvTeP5cwY5EXxxgcf62j75DAYNM93oPwSAxLFTwtY194jw7Tv5Lu514D44",
  "key38": "5Xj3hNfgu6iJiSiA4SHvYCLorvsVjRYwMa6tfAXFsGWLrRpKKE3TQDHS7L3u4CWDDgBZTXGCEWY3o74nJW7EYfp9",
  "key39": "5iYNAqp16f9o7WEd6hKZjUQMTNRHTUT7ypLEJDZuqxDqTJ68ZZRkm5uUXzGSFqEX6gBsjH1iSYWEPy8QssYa5aae",
  "key40": "2Qx2LZoqxc9r3VtYm3qJDPYDniB4jWYwSXGn5Je2xTsLywWJ99vzYpAvYK36HTg15efTx8DzuzPyqSXvRpt8QAbT",
  "key41": "3bmLFEPnUajn96VrRJB9tpmHViiaFLuELHZuGdhKgpo42Qo6nysmCr7PVDJgu13xyyfE7x5LtE3Tj8ngZxCyghP2",
  "key42": "26uwL7wVnuedpEBiDN6RvFkLhvMLycKwfsCFrnFQUwmrZSoVqffXV2qvqRCMHcCwyk4fiGjhYkcEFDVpEyJUwDQJ",
  "key43": "3q8i4zDVfEo4dxcq8fRsWCZFSW9p7Gy19hfqhbxnZKFRPVezA8JDd65qh1KvX9dQF5k8qUXpbJFtF4pGZbgwaxa",
  "key44": "648YHUkW3ruFyGvYfTWrV6wr7wNmvfdnJqUrQfZncQWpsHnjkABEMCqa3yRuvUb53NkALnDXzExVNPbPHECdwyBc",
  "key45": "5RP2u32WKaj7Cu5zuJVE7HJiP2Dv52oSsYMBs4XaemF7GyjeQ59tZasYJ15iByJt3exrBq74jEHDoRfdKEynJU4Q",
  "key46": "2xd3nYRhwPrkbbXr7VerxNzhExgXUH3xU61iqtquyDXKU4ZqqYs5qbZMmFC2XRzD1yudnrjCkAES1h6T2oL9HBSs"
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
