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
    "2z44WZDgErobrPyhGVPF8ySPReQdJeqxSYB2navnGVdN5wfNp8QWVsREk6j4DQ2dZmciQBq43QjBUcL7KYRykEwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39GcMovXokQSQ4hMMw5nSzgeMUx9nGVphTuoy4BWY2otFyUSuctWkPKssKVfgeFubZxK6Ee7rpneVuc8e3nGJa5n",
  "key1": "4mRZHSkMaLnoboSf7qZKfgD69gGZ1QAcb9p7js2BYL1vWdZrBfAdfXEqL4mKXgWf6aJhvxjMPKMswYYP8iF4kbAx",
  "key2": "3wZk7kaewiFwEKKVXeVAqigznwsHij6Fm1xpbyxRkLVUGudChUpohYyHaA1n379jAELNk5rdfyatPT9JTdd3PwcW",
  "key3": "2vPFm9y2pjS9h25TwjMqvvxoHoxXVzJv39jWXkxikxoc6DnFNqprSNSrtRPQrQRm4nHaTHu6kDwCA9CJugyM4DE4",
  "key4": "65DiUF2imWB3rJNRbsmnhkGwNgS53jK6aNnwGkjD37z6txRR9uppBXeDw2fjwLgJf4BKpwKe3SBtDsdW1iB9NEdo",
  "key5": "5TUSA6qtry67L6PBTPcfCTb6jTasdXnsPE1182Umcn61cuTS7ZAJfPo6iybMiubmz9xqe3ZMMCLuRqwBtZTHaJSG",
  "key6": "1vjQUkPoTtHzce3XpixGgNoQfqrBFP4j1Ld9BtEmgPjYQQQbGwkjBHDTpVtc4i5YtUyeC2HYSqg1gvEn2a7BPuN",
  "key7": "4Zwc1H6F8nW9DfPZuJgVWwNL3MnN8gKWjcB4dBkaWjfVNnsREvK4mww28K8AueyMHNnjBiR2UXwqqP7TPso2T8Ah",
  "key8": "Sv5skQxHVW5AdPFsbfG4nbN1f6TDSNnZ4AjYSgi76hSJub2jK3Xgp8JNMzkwT32VLM6TLQX8YMzGq53omDCuZTa",
  "key9": "5nRx1QouDL4TtzDWKnkJHW2KJ5Gsmw9dEU5yvp1wzVgQfXX2fZwh3JjJ9rgyyqKyaSeWMHK7XmizNbUxo4Na6oDm",
  "key10": "22oSoRCzUJXsW9rRMZs5ZEB1DVQitoRUgh3suAupZ52LHuCashMhUX4Ve3q1CvPEr4zgJ5L3J6GXQwVsMHBpEp3z",
  "key11": "4TfTmqARkznytTtFkJ13j5A8cxoE8wtg62nic4mYpSxRTTvRj4pT47w3i5JD7ZWtuAREbM11nHwYj4YRtMaN2Efr",
  "key12": "3H5yXd4un2Ejb8SyGASEnb7QgrjkbihjhhrhjBSKCNrfNf42bFpFPFLCPqE5zQPENUxMj4C4Gh8myxj6rJcKCNgN",
  "key13": "2C6TmpqzBSU98pToS3n4dp5GHfv2AiscTXqsB6jCMWrGha8kWzKj6xvbBrBXhZsbk6kuuTFV674GF6bMde6gcpNv",
  "key14": "2kuNtsAGUwWma5eRPTqercJ2KFWyaKUkGSkK4Y9Mj5CzVr7BJC47rxueDopoED8s7nVBGH2cvA2EX2tLGNhaee2f",
  "key15": "2QXfzkq58ZLV8iCttbScAFiM5i7j1RTosHt7gxVnghYJGNrATHMpehviVbQ8wYZ7eJA9e8TReSkgzgTtsQcniqXN",
  "key16": "5yUuoGndZduTB7be34xLtUTggwA85bKhRnXbgSdMaaexowbjHVTDarCgmz9ehLP9K513QDSbkHExkkEF6v4jz8ds",
  "key17": "3iUwgzDUKspgw7BQXfksS26x8XNFaWtY4aGnTTSnqPncMPbfwH7HkKhgjSEPFSfwLupq7YetKpDsdpLvt5prQKna",
  "key18": "5Kdz68p7Lw3Q5auh5WKJUEwrMLNkFHMEY67WmE8NE9uGeYsvx2bspKXycxto6npNWhbGSVmjApY99TByf7EcuGat",
  "key19": "5jLc1HVbofHZ1YscheQh1eYx9UDdYC9jWxiXNcuRFh2iebVhFH5PhvP2Ht6fbwtyhFQSkVWQGZb1WXKfV3uq45Fh",
  "key20": "47Vgjyd2L2SP1jKW7tP6TXCK9Psck5bhhkW3TwCKX1Wfb3VEpoM8qWrE9QepJiDt8cBPWVRTVv4rZQVHAD1Jqn1L",
  "key21": "AZ7YabakM2MZ6VC7k2R25MiQ5QYwC8e6PCJj9ZkGBqbZVmV9Uc4uuf4UgL5ZUbU8K7XbwfrYM7d93bYPFv4sx5w",
  "key22": "729KXBV6vi7CuZuRiiDXCgVu3f7NhWbbmACE9z2XrNhrCr5WUzcXG66rHUbi3CfzXoAjNMTCPiFBTe38McpHt8i",
  "key23": "5qDvYE3xWU88uFh8bUayQG72wXq6t6dGMJAhJoQduzEgj86aQL7SDoWYYMBZSQzUFGRNECAgoZFkBHjRv8Ya2Ny6",
  "key24": "3EPaQatD9BRgNzQ1uQJHNy7qz3iCjD1HqrWTsJNgec8zegBKDqVcisn7Xc1d1xjZBSZpCaHizg2Qf3nj2BKboLCC",
  "key25": "MwGuGZxsVV3t3J5wq87FtkGziZghGb5EMfMRiGDWEffbMiVEmdgEBAjkqZfStuocHJDJiUVs79GtVNRm5veXXLJ",
  "key26": "4FzG4P76UvQPj7wKk44Eq2L5vf3PKmoMra5G4bFujXBPsEoDUwG3KUbAb2LAz8wGC2FcLvcGgCZm3bTQTsW1KcDS",
  "key27": "3P2x4a52NiSTWgc2ybStk2tuFouDFu3wMrU12mGhxLVGn2NMZmvKNEkXia1vn5ZfmBGQHc5McrpB6ujQtcunVLb6",
  "key28": "3q5BT1DGEfHAqMztvqY8j6sAQgbkQcNscPJvJA5K4kJCyTRqUoz6MmEA3QEnuF1PaFE5CW1jgaBEE3uwjFsVNST3",
  "key29": "q8NMYFTuGYgJ4KQ95QcAa5hL6Vdt13JMocsfDFFQCPEw75UQec1ZygDLbw3m8zb9W8RWerjifkEtpPKhyGKenQX",
  "key30": "5ZmCFMmAuQZP91g1WMiQW6s6WDnFCmAhktRqB5egRxBDM2dRZfY9FZyNndxiZbQSaJkuHPCYZ89BVAoWc1PFxCv9",
  "key31": "31BDmugUs8JA4d9ZTnCAMGBXiGPrEGbaG4Q2kDSYLLTvMnw34jKjKkqZPUiuEqS58b86Eo9F4w1Dtc32x8Wy18gJ",
  "key32": "5uji9G5z995XkzXCGQdQMbipqcneEmk4961fxzy6V2KQdzvPGyFqmatCJZTAiKPMbsMsBXRju57AtWB7GDFKTEY8",
  "key33": "vr7KJs9AFjarrqX7pVeqsFazhoj8W2zdsErn2k74g4Dyqp4htzQx9mWDGuCfcPU3es4FyA8K9VMzWHURvw26w6X",
  "key34": "4gUHuYA2QNiB8948Py9qAnBR7YjYdeReQ4jyhBavz699msE3zer6Fm3gryU1in4RBwvMuGeVrQU5KnyffiSk8Bns",
  "key35": "4yhx7zDAQB4GWeVYFV2L8zHCev2QDiLr8SHwzS4sm2ZSYE6n8tqw1WqywPb2NwZwSP6dABmuLvD1ZpAWbsL5iCvF",
  "key36": "TGdqCmsG67yHWdWwGkXEXvr2UnzVnqM6REgQAhnGsCFBsrnD6DenJ4ZSSk7LiGv9dfQM8apkssUQHQA67n3BkyF",
  "key37": "56gCoLJVxfNrf83yupa7eL7PirfNxptCZp8viZsUDgzR8ceqgJCUPsUbrgoo471u1c53GU1E1EaC3QoyYPvfhaQQ",
  "key38": "38aUn8j1W3P2CiMH5ELYSnKuFXQYHaLZYd5DhPVXxEXLpNatLBHL8p5ZyXpKGE3mnYvvFCi9x64Wso6Tx4EciMpy",
  "key39": "4YMepFPn5ghRvMxjoB4dWie2Q7HXega3vz39bnrjNjw72gCycsjEaSwPRYMGBhiwHiuZgEmvoV6qzJnHJPNtw628"
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
