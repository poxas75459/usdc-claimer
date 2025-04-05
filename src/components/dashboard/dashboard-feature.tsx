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
    "36aZyV4UxhFVbsH8yTutWFaTV8kuCdvBDBL8GSja95hpdMug9Ayj5Sb5qFj8pd5GsA4DwZBuWMPBXcX8BxFNEn9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DVehtDAZGLK3nwBQZbQbFezeE71HiX7UhLG9ktaADJrn3bJVXWKvvyJVcgoomxkjHKE3ajpBkvitKgyfkdwuhJ",
  "key1": "55o8rbG47UmWxnxuDdUcYEavH4pFnzQjZtBdDNxkuw3B15gGBy8NP7qgBW8MmFMfJv4SSAFt613FKSSKMVyfUgE4",
  "key2": "hSJkVLQbb6yEw811nGEXA85V2USX52JF8VcPsxYKAzn2r4G7WcWbpvcUtoiidQcGERpf7Ni531gtCeRftofec2G",
  "key3": "2xjCFgmPVTcfr7YZHE1LRM6Nevmr2jquUm9avS23zAo5ZsARCsRpaLCKwwhLvz6kp5xCAjqggPspf8xdD6v4555c",
  "key4": "2RXL4i8GATTtqGcX36FiAmDuRvtbNW2nZpDqa5GgVYXoEGppAF87MXPGM9czGEaaoAC8pNcg5QVtTPPYrQCaihVM",
  "key5": "5LsN8U5CKDPb7hPTGFZWXzcz5uwfpEqw2Skmoh9omAZTU6uUnTmPPytc5iCutyN658xK4ZwuopunkbEqxWJcaH28",
  "key6": "5UuLKen648msYQGAkijJmUk1NLLnU4gY2mjc5qeBE4b1pQniDP1jARxWtDsbT1m7S51NVKZFoqp79hn965qHLUZS",
  "key7": "3taKxtcbuxmCVWJs2hoR9WaaUBnyaXLjY1BQiAqaADcNFSPY4DGapt37hHhF2xT8PJ4qboNR7GvuEHC6gwkYscmn",
  "key8": "45344VGKwVU8wa1rdnbFYQ67SxcVcs2tvcK9BHG4NpJtry8eTE4pJpdtHboBSJZgqJ5nN8dCJMUh6F9aYda2ozM6",
  "key9": "4SbJcZZKkkL3q4EACqsehP6zEbtCKd66GR7UpoPDwxxprKKVoqM7NAY8qiYJAHHhQ3BPwMPrHtShNmFKqFunBVv4",
  "key10": "3D2M1s9fdCVfydGhN4byWfgdST8eVQhMbzvfDqYhGb3ZhMAPiUhZQhp7qUQWeHxdVrxjcojZHX2kdKPa8g35PDjh",
  "key11": "2gjg1VB7JKS8hpzxdWDMwxi7NZcXrCb44qZigtLF5AWda6B74Tng9GAVs3xpRwc8VpkJkukLXhB9o7qLZgicadYj",
  "key12": "5UPvhVMfGGnCswbWpx3Kw9CcxbwdC5epcFJK6Cw2Yx29qcErn9nmNnHPjWGMKVKCTdQWfZfiHdo8edLJxqtLSUSg",
  "key13": "3PQ9yHaFwtqS3nA8cMDWEXXX2yGsYs63BBkuhREzsXYa6h7dpkBm8C6QU42vBFEiDxosNNdKxjwf4PdpSBdzzpTN",
  "key14": "73K8MaXUvpScETo7p5AS48snjKT4ZwSr52dgaRgAmCpcaNYGRJqrQtZ1YV3y3Y8ZrtHWkv6bxigj4na1fRKMwtX",
  "key15": "p6azvKYewDeuLnzFgeFavB9Zj55Rv7sS25QFgrjS1vkfMHbLimBdhRV8b4Vao3zCopUC5s3fnp2LnSaht12RyuJ",
  "key16": "3G84ZwS6BGLd843ERr5yS4dbzUA2pFYfRZHJra9d69Pj9Ha4ABJfixdTHZsX1upTHViKrAcTkaeXBrvq9N4oBF7a",
  "key17": "ATceXMJhqJyoy7L5DZRZiCVSKek9gV6QMvKKdeLDp1SayhxzGGKndvTmFndeRRR6zA33aJWoLmYgRyD4S9mHsis",
  "key18": "2EujVESiMsYCjtLjVrVuuJXqaJW9f5fLaD88LLrLxJtnJts9AarjXT1xZjjKQYykdxHt3hLAkNgUtoYu4NZYnvf9",
  "key19": "4RULhEf6xFFMGZRBLWQFRJ9CWQgW454J3HrWZAZdb1HTJ2NYTFpR6TVGsR9iZyZ1UKw1uEDatR9nQBQVnBjyx46z",
  "key20": "aKNnspwBxdh8q9gD2N22DPDc4spuPHfQJscw7ENTaXZvK4VYUPMs8VH39mkgm51THigD2wwS2nawrvGWe32i13b",
  "key21": "jXPg3M6kEYtwvYz3dJUrkCvpe3gzcGZjSchdcenLrLL7rHqUUBxNi4Moxv4T52JHYujVWDCp2bHgmSRQpvJ771t",
  "key22": "L2PnV87gtcmMcBTZwWEMvBh9PHCGpc6gUZJo68wHJZaXFDugPi9Et81yjuAWqFtSvrHwcxNqKxeoEmcuGpffKMz",
  "key23": "FRti117aW1s3QNkqs4EnANBDh4bhxoei5nRC6NZYRBJ8NcbpwTnQdWVYw5719Ee422GH6XzsFuN6oMgYoX43wXB",
  "key24": "3fDiW2uKnSiTctiRJzC43zUN3b4LtXKYYEowy5CF7RW7tLyzHR5tmNuCas2iC3hBBKtwibaCGh8DrYx6Wcx9L3vY",
  "key25": "1xwvSALN2MEbH71gCuPz6gPcYR3s5suaReypT8V8kcBYbsNkWf8WLFvgwx2yD6DDU5nZSKTFMrxoWYRnxby8PjV",
  "key26": "33EnL3abFFRKNgJqeNHEyfUsqcxqcXqhtPiZiaeiCvzz6L2cU2DG7uUAXfxPHqztJAGiHLM6kKaKokvL9t5iePkH",
  "key27": "3v4seN2pt6jmcVQpPuBXLLmcT3HWpVUhgYAgxf94tTeTHefS3mKAYPxTQ89QqRYFqaVfmVF6MSMfisxcP5XUNQ5v",
  "key28": "21AhqNtDhMBtWTH28nC1pehHXoGoqjzYmL8h9sxk58CCsBJE4x71oqr2tWUWrqcacenZ6f8JwEMZsBKcCGm4HFC5",
  "key29": "YvQ8dn8p1jVDQHCQGh4vEYMDZAUWquDFkeKrvLxLCXvhgw7j5B2sqY19oPxnvgkMd2jUgQwPTbLRE8x5mhBH4bp",
  "key30": "3TD1gw9cPWCeZS8zLMZvSwZXSubXg4Ah8mVV8zFWPZfA2XvHiWjKRHXGcBXb775EWpTEYBbtkTF8EAaycX18n2Ke",
  "key31": "vwzY9Y1cDwjuVZL5eX9frwSeUPNntnjtsFPxh1NkMQG9vsui7NQzA44YuL2WqoKLdu98XENUSUaeEB4jAAn8jYr"
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
