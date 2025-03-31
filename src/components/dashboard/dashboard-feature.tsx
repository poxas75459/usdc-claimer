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
    "3A5yyrdo4Pp9vUaia15Aweq2omYY6fUAvYrrdx2suBHD6k6XyXd6uHtnK9XPoMJdv3cEm8pDtJw5AGZaQfgqL4mQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48PBbV4j67SCbKr8mpP3Ph6GRv6pBRkR42Ed8SiADGb2DSYUnAMUBgPJeLLhrEhsR6tjBV9x5g14ER5fxS5KM2y2",
  "key1": "35SSL1Uj86SCUoeQmYm7YtGzHEVGMrh5XRzvwiEuLuE76iYfUUxSMX3AMYRWDJkpLo4C9xmdPnnRVKKCjMBBcaJd",
  "key2": "4hj5d11jejUVhPgNj4Pdpmf9toaEdSW5no3U7LENEJh7jTJHN2YB3B9MnWM7S9FcREcpkxRUwtbVWphCcNDvEQNG",
  "key3": "XbFtjarQ3ymjqHga4UdngFSszgCzBUHTJKXtqeyFpZ15yTabsS3hdC8eysLwPJWRUXQchpfpgCNeWqQDaWqmU5w",
  "key4": "2euyuYLFC3hYCSG9nB174poRydE1tEtafYkxX99jMwJB44BbH8DroT3CNe5sKHAjhYrEgyhfvdWb6Fpg2ehgdd8F",
  "key5": "XpywG3yYedXcEDH7Lcy74jzMHiAaRrWRjzxTEqoMNWqnvTPFgD9JJkXZ3yY52UvzQa118ppTMr81wKoPS3s3Zio",
  "key6": "3YjsDXf6VAYSb46X2AvtLsnu78wWedA45dbiVbHWXQN6DY81jHW5Z9ykSpM6STEv8K5Vp1Hchp3CwRvJDvxkHAuw",
  "key7": "2C7UfULyD3oCwEnoJd5xF62voSVwzpJuR2xauxGMugeMbAkvdxvRjQA28vJKED1ABDm1kxECyyh5g6XTB8ro6EpY",
  "key8": "PTtazxRNynY4JWfLd3sQNqcYbPMhFSSUi3nfPZAg8DYzD87MrRg85CNTs4dkuX6HDW9nikhE8unKXKnxUNS5LsR",
  "key9": "5FuRNFD2PjR7gKDZbXhRpAnWouVWY7yS9YCGLML3LrdCG3cvoD8eJV2k286QHeJEAxspMWVbk5ZXtg9gcm3g1nQX",
  "key10": "31H4SCmPwPt9QvLNoH1hxTXuuCJUTPKY1o32yWYuF3bKqwnQXxHUwyg7TGCeAFNk88ybNCCAFwekDwL1jQ1AVEPm",
  "key11": "eo2LLdM3fujLTQeGub7zAj1vmZ5q9HhQhzg8V85WGT8rgY5xk4pvUC2SVNfeEqNWApKsEdLSbhcuqRTGTMGDCHd",
  "key12": "YFWGAULTPBpursWQ5abDGYTtoFPyoSGwvAnNE4XkKLcYUHaFRncBZbMXxEdjpYUvuJbGUESjeF5MwKAPfFVXNfw",
  "key13": "3dUCtRmkNWwMhXy74q2jJXM2bayQWHed3gkW1NoX57ThCuXMYZZWYV9986yEJxdstwwEmKzTyfBZefzyBucnjPYa",
  "key14": "2gEcqvjQ9AvGCfY1nfqJKumduQGfaAa3Tx9btG6kQfbyAvFYDTkR7623reMpTrkmLntxx1H7f3PyHkanAkMGGJM3",
  "key15": "5sW6f5LfB9QucRdTXQGkWafqp2p9xZu51aYCGihUsWhmp3kYZiMhb6Lw9MmtmheT3T78dT14tyHtPrF4qgtCMbbL",
  "key16": "4YtG4fqV95cGuEpLxTpG5m4RBr9iWehuY8q4aLHuqmTezBHD4wCUhpJKK7qex2wejYUXQkg7WKJi1s2LkYpQDmcn",
  "key17": "63YxSGPYvu5bNJmVMa1kUECsYR8x7S2r5FHUGcHScPTUhXbRKeRDi24FUTr5gag3BwaaTFA4msb1SZNuhNckb1mr",
  "key18": "4e2X89sgLhWF5NP48PbJ7WDkwbcD1aw3RjiP8FNx4B8NLP7cKuQqfQr1MXtYyWBdwJdsPhprr9i6yW7WYbPBsxVy",
  "key19": "3XKuzPgEgMDypCCr4z9tAaEEGo24fiZ85a5aHSwXfSU1woRF2Zdh52KpxNJ6pkPky2mx5htCSmRDhoGzpfC6UVPV",
  "key20": "5hNFWZuVLhospfVJEmr3tFwko8eNpQQ9iyg19VZPFiD2ydh9yvvVxBvVst7Xmadeiycc5NQYb24rcjHEHC19zLB6",
  "key21": "3AkbRRir1xwHEHJNUbFipEYTGxpvA1A5Ygvtoj8W9wjNgjacdeNxUZHoPgVDruckxJZAnoZagKSV18rdxUQhHtnt",
  "key22": "2xLTZfuDHFQx9Z4fbGLdG6AUFJsPg8kF75PZopNbpi85Y36GDEZhY4R6iJT2ZUpzMG8q7jEwMhTz3mUxjWt4ttJx",
  "key23": "2GJP18o1U16EhxA7RZQwLGVmY73amyVmoBAESL9QJArQh2VgAn8WAKTauW92dkMdHiHnCijahUNtkgaxkemmH3zh",
  "key24": "3B8T1Uy7nCGQm741RDQRXrKNWFnMHi6oteZTMNsGi8zb5uaRcvoZTxdn6JaV6dbSgxeLLE1yBi9EDr8wbj5bFjn6",
  "key25": "23nnHiA95YJdRkatBhWGYr2v7EeeDhN5sypeEETAr5vPG7SJDNDS4ZGHuJy6BUX5XKwHKkY6vdQkHgFGdWfSmj9k",
  "key26": "5D4pA5tWjiSJSAKM3FpS9NMGfSE6hGtAQG8tiJY8hQC7jYahBmkugs3WKSoHtU9JbtHq2XnFUHXqC5H8pmLizeBw",
  "key27": "4QhZmpShHeu73qtswjTP8qwd5xZFAGPxrjJdfAsS3hHTsBx83KdFaN3CD6khUiZuohj59rNJZ6rNHp48Rs3YHLzq",
  "key28": "3jmh2bNCCyfu4pQ1wcfxFtwh7smm5An8jU6ZcR14x8BjS4vNjAJV2LdjW2ELS2fMZ6aC3x7xdEmYmGrFEEgLwMST",
  "key29": "4upfvJCmj4bMndnomMCnFBhcnSPQvoe99WmUnynk4Bkcz7AJroJTNhqDALrigKVeNDFqDUa6D1SVWxjfRWA4KGaj",
  "key30": "5UJk4ibsu7tniZuJ4D6hbz4KGqeVsFEMvMVwxR278syrvgAsSuMwT9zU7Ypis6jKooLZASwJCyUxNU1NsBfcz6aB",
  "key31": "5bcUdvmWcGknfwVQZVY7JA8sL2bDWUv2HpwDWPurkp5QiMPdYg8RPUXH6C2xVJjhthbjxhXpAxuGqTit3gB1LNJC",
  "key32": "3G2vxhY78MewUPset9tU2r99wQ8dZuwe2m6EcT5fLTanCbKdDZUnC9rVGaasYq7vXbXYTdPdLMgUhybEYNdszPVm",
  "key33": "5JtJt2imBdBAV6gpLQDbeBx5Eq1pqPrT1m1RTLU8xPkuFHouF29txCJHophWKdric2a4hKq4VS5Gn8m3K8m7TTAU",
  "key34": "4vPhs3HAGKKRgZp5kjYvKnhvzxW4zMukav8Hq96pG6KDoyyxkynVNAuWMgCPaqEHjxwJo3AeggQzz78ZKBy4QPf1",
  "key35": "4JTXDkjNnozTKryX9wQ3e4faDhGaUbxo5cHTkYU5LTfavBe8cnSrGB4PFCEMGds8JKXc6sAFHvDD8YKixZwwutep",
  "key36": "hbTPycrrZnwLXm7kW1U4HVSwZY6wjKEG7xFmZ2dcV3wDuzPybJBvj8s5W1cS2KDFG4WK5abmXhFwC6KxATbWA6H",
  "key37": "ys68cM1D6NFRDYSkmBY8uguuNjSzSrsV76iaFYmS9aHVU5mD59MmnYzsaiVnSeyHDdVAkdKhJkWmKPXiURBAxW7",
  "key38": "3GJVoKN8S93QL5wpsuheGVJokrqDqAy2qsp3zPy1thjS1qXFYyFV7gW7eXGcts37fGC1Z9gMbV1GGEtEKsp3NxdH",
  "key39": "3JFF9dAnb21PP9V2ZEtxmTnSnxWgjoG82T2Y76fEoHwmirhYZ6D2Epb5MFGJ86pNfndfuhq9m3cWSnDpxwNkbDH2",
  "key40": "31bnZRgRsNyds1wHTSvanLeU11d959L3xfCphnmaJieZ1Ef1fyghKuB3PeQPa7Nu1HzgdtsRqNGBjKYKAhNFA1WZ",
  "key41": "58QrDYda4JeYJCFrQaxdb8NPUjyoA6WEbV8qvHFSqZwSz4wLbbyWbq3nRvCDFHRDwhzppC8WbFsP1eqyY3FbQvsV",
  "key42": "4ryKamQZZAZuvW3X5eUaCKqwGpZAuSYNV8RMwSvFV5AZjmEtAtxLGmG8Fuyr61wjzxrFqP9D3Q9barWDdNUvMnwh"
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
