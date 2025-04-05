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
    "2499PeaANTh84CH9hxsp643Wg4eSg7j8UrQo3onbMgVr8n5oHriryQ17Cp5qkR9MsEGbg86YSxhjHifNJbdFEUGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66WzAubaRL6w2AqaoyDYG6mPQEsiVQyU8BfT9yDsoH2bKLZim6APKyrSpcDiFtUtEgxSJzvCZDDg23nqQSP3ueR6",
  "key1": "2YpFwqwoA9sK39GP21S7TxVaF5NiPKtPij2iHvxc2BYgUpQHkhuG89ubCHC6FjfpEAkjLMQ36dKkpwQSiWfxNDJE",
  "key2": "5dPeDDWcmDNnY1hBDCzZpQ2YJcG2gzQkfpActXt67xJiniwWS6GYATJ8Vct1afczQLYP2o1eZkvsGdWFrUT5K56w",
  "key3": "DPFjRuNYq7YyHaen8SUvDPRwsi12LjJNVNBvqsGBDFnxKimPBRMjJCJPtk79HMKLsaNg1EosvN9xa2JGQQ44X38",
  "key4": "5X9WKbsPEFQpFqjCwkmBynk7FjAGC6aVMMk7P4WiaHVwTb8PjqVoy5vb5NJy1eaxwzZoELWE1kt4FCgcdJRgUnMe",
  "key5": "2YkFydU5Y8MMQEJwDPb6r7vvXzVsbVegCD3sbVQopad2kGpkpQrisNqnrx9xiuUvyz7tnGPhVgtTg1raTnswNS9D",
  "key6": "5w4RWWQa2WuPg3mewZyxdkbbDro7z6gk9TTdcKMvqVCdioNVPFaUxfEoUKRPpZxD5D6WbdLYKayi7r8vEgRYhxbe",
  "key7": "4yfKKWqeT4SKTnoPoQD1WSggzwKKprbeRpmUuSD6wL3YdJwU1JDYXbRJj9o7LtXTaM7pyoEvWzJpzxXkyxL6zfik",
  "key8": "xZrLkJgWQyjyudHMkhx9Td9vGdjLH1zikrzrcdeL2xXKnTHJJrk1y4cZQA8UYn9ADn8HQkqsp3YfG3wmbLRYqcd",
  "key9": "5D32yRzBgd98G9kzdHcqkN3BSi7t3sakeeYLPv8U6URmKFQ5vWj9vhzhoAXkJ7sjy333JxsH4m4eGcCsK6pBuwCi",
  "key10": "4U4NGB8PYGT24taL5X37HyM6KJfZX1yxBCm27an5rAZX1GQT6iHmCLqNSBVgD1LnC5oQVghM8vDeaAmojXkNXGMy",
  "key11": "QeMRk8KM9qM19WJAYdb1xWQZjfuqdZjAWD36Je3byF4Abv32N1GfvUd3gYWFkhD4zSEDeEbdwHoKB7xjiWch4wd",
  "key12": "gsMBc5CzXrfw9VkVvVyPt7GLstBZepKFgHtL6qj48JTkzc1F35Fw4Nd7Lpbpi9J3G45EEYjcy1sSrwiAJRzH1Ds",
  "key13": "3HjhtULAKXrVzPkcd7WQMxV2Lkq8K69yEFHyp2fAZxmc7pDM25fAq5sDuiD61SdVonU8dDGWfz1dvNVP7QMiovRr",
  "key14": "WGWFX2uXycHZKm9yzSBFkni6LuMjmuH4SiRNVCpPVkXcuL4yEz9gNAb5jNyJBCtkGXihJRbuJeyp3Pcp1mWMxCH",
  "key15": "2bL7jpwMqu8ySH5MT8fD2VCUhxqhAMGQX7TuEi2JCA3viKvkSJyD8G62oxvQdVztTJ4WdAdLm9AjAPFuSuAnMGNw",
  "key16": "juxY9MCeoi4XQAbQCJ3TmTg2Twu8sR8BVpxxVGTueFGzNDTsUGG83KbP11tR7Sc89Ktog4upCbFzKGv763fmuuU",
  "key17": "4GPfavaSwEj2mop3KuvGEgePuri8GvGKB6otDea44K9x5e4qBLhAWehfhJN8RtEhLMyunJQQL5uGUCq8EPNsiCPr",
  "key18": "2dKcb1uzQciaZgEr2UpnuU4kWrKW68WxjexQd7ZSF4R6SQFM64VV6LTXRBjeQWhbxX4pmN3wQLpxk1RpdMk48nSY",
  "key19": "5GU6LBqrh7pVcNpL1zYZ7e7yryZimPtHUhghL5T57aXWh7oobnBr6JNqHSzKy9tBGeVbFwTdSLJhxwGXDLhDu8eB",
  "key20": "ZeDNcERHjDBgn81aW4qgfQ56i7wfcCHupx9uTg9787X2yeJGaz8HGA7oRzhH8HMWbQpKNQHZ6ps692j7XEKWrKM",
  "key21": "3hufrK2BLv3jWs2K8MiSnVJJME9y6mcoCdcrKHRQCEZnsManU6vn1rCTgzBjjomX1dadU4cA62WpuTTjRt9XDFqa",
  "key22": "63bepnwrzpKtsELskpdqrfKtdBFHvZyG9stuQ1iYJEYvJVK41VRGrSVDJJ47LVmWmt3E74THeGEVcNmNLdMMuHFL",
  "key23": "2SKmHG1NPTRPLRbqgg9eCjVzWaJcSvvNLoF8ni22WQ9uJtNQW2wj5MaLNPKukfSGGv4Y5P9W1NFs2xw1hJ3ua5zi",
  "key24": "vSUaGz8AdrD187CGBk2BQV4vrUajVcoqzPkV2h8N4M2HbQcKBm3GMf7S8iR6ropjLe7nMk2AD3EVWgCsKzkC7HP",
  "key25": "4tm8Zeiqak4zZEF396nfZZCU2Rjtdgc687E9fmpWoZnKg9beSvJLfarek4iN3SvTJmH55H1LA2MhTeiJM3AfFEyM",
  "key26": "33crexLwWHXektSAiaiKiVHZERZon22cy2Qb5HUJRXuDTc3gsCtFWNrz8uER5kB4FKwAup6br6ZXzRjBJ6pfBm6w",
  "key27": "MCdGTm7BpfEDZrQLoQhqTVL6xmZs8aLsGpynKvRcHuCccALrPN4kUJeroBW1ME4LWTNLhxyQbyAbSwBL5HPk4QM",
  "key28": "2FkjvcBmHJ3voXHbQVsBF9AxmsJUVoeVeBmyb1S99q41auybEbpU6XDhajv9AGmNkgRMR1g9RvpALLLP5p3f8egS",
  "key29": "3it8gannmtp6LvHG6bjFseiXXPCcgnswUTU6WWaoRfHB73c5C1A7upxfyFTZ4fUtEsxQEEXhzjxRaiPCn16r1KMj",
  "key30": "27shvRhYvW2vBkZBLGzopChDktXV1iW85Chj4SGX4cD73T2frf3BqMGFWfq5EsSf7ebGYYiQbvbNJy1E1dxuY6dT",
  "key31": "2W7FuSSREnG3Nx63kAcry2GZcw1HRtvuVeG8uzD8yx62tXnvLB476ZjVhmSFXCihXZjd65vLDXvGK7RG5YGQxNur",
  "key32": "4m1dPzD5yXJzQsoewRphYfo1ivq5VQicFCiYZ6kG4gon6eNantZTuRjVa1kJf5A2HL19UprHr3pJggYZ8gaUea6D",
  "key33": "5N32gxD6qDebMrVADKnvTaBDhfuvukMxiwy31bkm8xygJmcPoWAoWW2b4MeV8tkLfY2GbSwmxEJyc1Si9A2pvgU9",
  "key34": "32Br5sjpkYngch3bsa8qfVoRB3jqwQ98RCTMnJLwLXDRAL78EV9xcqD9H2BN9psUR5U2JjtdodkXpYR3QFqfabYh",
  "key35": "3P6qf9qeyMKxHEEy2R1ktXcz1r4q1GVQwdSyAd9KLLkjcsg8WVgK7cXeQhbuX2XFv9zqabmZdqX9UeQ1LiQBoRet",
  "key36": "67QbVFZHF3Muu8yK7uf7eFE9YZbmMsSSqQTTaRoxsq8Hd7JwV9NTyJNr1nyAG39eQiDuwrmEi5CRLwsqMXmXggC8",
  "key37": "4ivGb1ztWBpFW4TsmwAHrLvUYuGh3iUSGK7H7yZcr68tMASndGtNx8BT6T5VVjJ6kUyiESj9wea5BYKNiLDZDeyC",
  "key38": "2WKaQidaCJX57ZxNJCwEA8XJou6SCMbHhL1J8PhcCkcAtC7jA7iHuAyi59USWbe6SMfu11Jj2V8KCFubyvKqxpg4"
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
