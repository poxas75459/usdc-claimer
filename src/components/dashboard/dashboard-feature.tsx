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
    "25i5aaA9dayiszgFeJrCDL4dwYf4PMKAQSd9xPABQmR6yoR9fAju2e5NeFYPrGS1pif2fUAqk34fmXEGXJMhDc4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SNJmrjawLHoPnor2miJuF2TjsZdpzPaw8FwKBZFMGbhxLrdxDmsY8z71PcfK5boEGzynyG9i3jHpkrJt96WXHg8",
  "key1": "2pgav957x2rE5SSiCBwdYkWQbCPvcMVZRorTmLi4q5wW8ZAep8VUXT24FvwV4UE7JmCyPueBGCiZGXUgbDAwebRR",
  "key2": "3srvFxyFH3akuvAjK7r44DvSBocXXGVMUzG6o7gxzubKLMaYeY58uRPBMHsjDq1XtrCPxHPTkRsPFWhAieoTGjtt",
  "key3": "5qPuLZsQxGqDd7UAY8RbH3oiStY7XnDircum8fVBM2RmEBDa3h8KaDsQgW7cn4HaU5wZbtGkG9TdCF4rYxnjiixq",
  "key4": "5TkFYXupfnVrCJJjUTWTJu6zsYqncsFZMwpQnfEsCkF8PhVkW7DjSKGUhr6ojiTNezwntDQtDs2HhEmoC4RbBw1y",
  "key5": "2xqG5DAzervrS4Qs5qXZXSXkwzGe4obscJcDsukSMYMhTiPNR3XGEXSVPvVKZXSxs7GXZVuUxzQE7uLqAe9YnfTQ",
  "key6": "r22UZUtmZr7Aj8qPYC411HBszMRKrcAK5WRUpTCHZE449LxPvMa9arHTLH7L9YtYKWA3deuipTQ2uDdZxZzSWMe",
  "key7": "4ZnsMwfqtzWADjBsvVrz2FBcGkFVGVCmYFhnjnZFb2k8j8AQMxMLMRpQdhgf6dPM8Yw3EuRFuFrv2BwQ7VhLFDNg",
  "key8": "2Cmdwf8zk5n7m2eQWWfw4KpaYYSfVZCsZN5bCw63haG6d725YidqyNrmHRcqUtMnauh76JdfRy7Umro4BspzfyV3",
  "key9": "2GVSJNVJwFg3SciBQb9rhEpRe4tphFr99fYFoW8EUCjmMTFx7gzVhDuicuYMpGXqkYCTm6jofwqr3sWV5W1T5eEL",
  "key10": "4f4qrh6nod8uhq23FReGyTmcApe2cnT1Xw5Myy2PAG8McDmGfuvQ5JG8L2WNfsxijNeLfyjWfix6Tsby3bShrYa",
  "key11": "NCxCYzmCBTpZCA2HxzHuQWVh13Rn1he6knxoqx9t4e778zZTDhoeY4PVskUGwxostWWyTCTUmvuw7ZFnTZwLTJK",
  "key12": "3iCGAerfUdVLihpcasjRdQPW5HkqBB19FSD8LUU53q41asHsp8pqTdN2jZSHnK3ZyoxXKEVPHvxSvDRS9hULRL2L",
  "key13": "4ERvZgrTTwx96hftfWrXwVwMD6fSQPU67CeEDA9AuUXD5yCrsQcHzpkiNQFchfxK4dezZQQhtwuqVU4pF1HpHnux",
  "key14": "52TpJBgWW35QMBx2z7u1G7NP2i9bVt4WS1PAkgwY7oJ6UgicWVd35Vdmwr93wohQnH43zHtEqj7H49VtKCs8Juta",
  "key15": "4mwPtwQzyTSpqNdCVoUZmPKXznCuxLMRvwzMpRHaaXa8KnFLS8GzxxB6xpKRFp5JiW3xk7RTkyQf6gFfhpxwmJPX",
  "key16": "4U98ZSKLsdgBHjEraGbK8p4ebkoiqXb4ujYu6djfQPMKDqSnQwKpYMpG9sstKmtzpUz7DW4ajubuY39oHCqsMn34",
  "key17": "3HFXr3r2MoXWcJi6oyo4ZMQpe9zYdnLYxrhzW3D9eiqetDovACMRnQxMVaBxyMqbAZNJ4CjxdMxtdJru6cWgzPus",
  "key18": "ecdQg8oe5rQmgBmyhFHCBnbspax1QwY9Ytvfw6n6HQoPPTaG12dUKLJUx1zpnCKgHLoyYVibRxZdR4SDKFsJLVG",
  "key19": "4okSD7LadKRb7h8ui7s4Jzj1sawt6KkCCkYUYBugUDVHqTDPprgvh7eRss4uN6dbQPP8RPFp6RRCDzHpowWLQSVB",
  "key20": "2VY6iGjNsER3hAoksVjJr36PfgWMdBMDJUTsgsconHoy3hEqGQRFijDDwKPkPrbt6t2ANDqX335ZxLGJ1XGWMhfe",
  "key21": "4RFgFE433gQghYqe3y3cEh9NLRuxWxFyCGpWqEk4yeGLPQ98cn42g3FEPcjqEA2CAwW5XmeRQnYmTUunvrB99Ph6",
  "key22": "2Ekw82kFNuUsVgX5hqajogn5s7EyEoEsvtWat2ZcpsPHaR2JfX3giHu6YKuwCGez2joof5VT98fUytMaoV9A9Dpw",
  "key23": "xn3WGj773cMZFDAzgSBJRLMJZGV56gCdK4eWBSnJDEA4GzfQuGhmvkPx3hnNNE4dvYuMb2ZJqWtbDSKdkC46Lvb",
  "key24": "3QRZFe6R82HVsmszZTaAkhPTweMXxriuJexoTCJT8vjaRSu7NVwPe52ZAXyQ5MkkJi8G8WRv7jL8L4rmoTZtMCDg",
  "key25": "3MuWkhC1zjGtnsjJWGFEpJsQzaYvTEYyGmzPP7re6XqL6896zja8KoWgPjy2KbPU3gvE7UFHCgeZLmbKWUjf2sPX",
  "key26": "53RoJSfBmHWtJyE1cKRqVquauMiEAdpJ2RSk51YVLPpAnGKE3tEhWxs5tdGDrxZDP7eaKfX45WH9QrN1DtZEetAy",
  "key27": "5fk4GS3uNx3o1vk6ifZLjHSa5rkDgJBsF86MCt9sBkgVpRRkWDJuGvPuAX3e7x4ZFBuKf68xfv5k4Wfz5b38rCj6",
  "key28": "5eUMXisSiSMEacJQDSKgE5kFy8sBW56ZBpxNbe62AuNH4dfbQhxVCvghvRurrJ3KdjdaCwU2kA58VnE1hbcPH5dg",
  "key29": "61e4fCXYoW845fknHogDWEF8T6SKuHFxiYsSnSpSETc5wgpTi9JLYDr1r1mWfiLokuUgxv3Ht2SidvsHVXq4W8xU",
  "key30": "3CKVbXHueMXtyy4xTGY9mbVJ6Bz67Pu3P6PRGdjppWKcUq154gwY9Gbmuwh1BhoEh5Jsaases1y9FBh9V64bySPX",
  "key31": "uGZGmrTMHZtxrcScP2FA5sPULBsjkQ4xD2wLhLoAZfMmm2TPTXSaPqnorLoSWiB758LbXd6pQZxEUn7ycSGPxAp",
  "key32": "65HuUoG6NwskPjkSKhAHcphfHoPuvJwbcSzFDiNN6jW5nCiMaKgZHaHPFaeZ5Zo3MHA3stqwpsSSfy77PVHaUFcq",
  "key33": "rrKLcFeN1jKEsTuSMjj5iA4EYv96deU54sECiq1VjyhrxrMSxTcJhhzNrVvXQPw9k6snHQQ1UikDxK2bik1AEez",
  "key34": "4MV3UvxQix7YktLrkdoKEKXfkEKkCQmhparxZQJ7eztFWQsUWRd57oPvpnxZf9AdMTSuUS8V9FkVuJbNVzipf7HZ",
  "key35": "2FS27dSCyw8XsQuqkh9GNtk1BGPM6aJbmuAiwak9vcB5b1ZGkQyQccvhmehmLkgvGeJRAgdZf7koaeKmJcTaGKuP"
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
