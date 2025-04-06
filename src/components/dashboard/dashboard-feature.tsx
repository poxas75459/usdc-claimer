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
    "2MvXBY4YNncmFMyaQubJs2fpguF2QdGDzN6hTcCdSKvFbH9Pwx17weQdq8X7vwoZAsPGPemVWmqvu9xbJT5d1RKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9gJDZ99eJUMxNiRaT9WXV8rr3pcQ14ZerCsobZKM4bvN9PNWd76CAdVD2Uv2KFW2RQnqB4Eoi3MMfDn7k9KzcB",
  "key1": "5CM5xLNq694VKY5gSABKWmShHbcBhHzM9AqSNeyC4Y7PPUCWZ3zLypEMzBxsYk6M3yjZFRskMitR7wjiM6AyJXPj",
  "key2": "52hT1uD3hbReAHeea6DxNU25bWB1WqTisZQGKP33LrdqkLqSycAUPzytxCz9wmFKVdYRndgVAaC8WBsz4gQtNsBB",
  "key3": "29U51PELFLw7iR8t1LM1AZa7XxzaC59jQi4tqhczLekUGZUnyD17dL4S3Ei7cEqk5Dkw9K2oWS33CqXrV3CeMwGV",
  "key4": "5SMJrHLS8sZ6F2oQYmtCTw1Jw8Cu3vT82yfRJ1QQ2hzKLgUo8woygQ6g82ErtwEnwarxYJS6pJze3516tZVVkCXM",
  "key5": "5E4DfnSDsueWvgWSKKbmb6CTYuiQ2bwxY61Qtbu94hfRzMvoPfk3XYpw6qyQzUWoKXcmD553guEm2R5L5ECiU6nH",
  "key6": "2yRhp4SKVehPTxLMbMrBdUUiFufgVTgmsq2zW2wX8VeUpEcZBwuabyfxKcmofScEXiwQJVsqiPJ1nDwVb9WMmvP2",
  "key7": "5d6bfQZWq5kzZur7Wp7eu4cVR1t5C8L2RkazGww7HejHDnxvhosRqTTHEv31q8JVzC59BPz2r8oiqqP7Jhmqkv6F",
  "key8": "5Kjx8dJ9oiBZHJEseonpmirXWfHazybog8WHnjyJf2sBGoG34wtExmg6fwPuFevYvwz8rXYKfoxcnjmDDGX75rKL",
  "key9": "35CkhFa4cCQPYeJsMfY29dDKDgApcrvfv8JyaEvyyn7HRg5ERQi9sSYU59LY9hhr3A5dsvFAuZnX1d8vQzWjDUjf",
  "key10": "31ALiMGizuw4xZgrX497uFNFPHj4F7EGdLc1PiSzqHL9fT1QuRfMvdqhkS1x9BGTdfzec7K4WRUR3CjEKLQrhZXW",
  "key11": "64LRGkxyZFrfaVqKi3CEtCKnA7G3mJhPJAy4Y6RuqNvgHqtbVMjT3y3j8xvKtNTAWnzF4vnKKrztVXiWggX231Gm",
  "key12": "4X1rDriBfMHuWkQj9DTGEo1EQcbnczAgmr14sGvepNNBUug5wCRXLWrULzqFH5C9AamewDCbd9PAPvTjxnfUGGVj",
  "key13": "QFX97bhtXaG8WGvvBmiw2p35eEr6XZ7rKp8putA3vkvca1QQDmY9QAq64aB8LQQvAW3Z5YwGWQdudifPWEjZVKk",
  "key14": "53NvFHS9yUnsyXuu3qkgBgE1qwvUFQP8zWNdet8HBtjviS1L8B9cTZV7UwQBZUYRoixcvsMstA1PD396NiCF91NC",
  "key15": "27yqSFX8EeSsPkxBWZxK9s1xCZxFthBT2BAPyRnan5L1CinG62cNXYRto8P7DGdGobfpyGZsxLBSMkDLKqudRKL5",
  "key16": "35hhc1KY3iPb8ByoSMhLqGCc3rTLadNgTzvPPo4DosZ3zan62WQDzRH8NpqjuBo8Wvm1qYTf9UifBNb5VfUS4u8T",
  "key17": "2LanvQSa7f22xr3LHnhMwu2VuxXRRc2vcJAMKrwYEaUBuNJK5gnQxTkyrrdTM29HrgWdkPF68KQjZ5qGSDxXeQ7q",
  "key18": "3ytMoEunzdUN6MPtPmLsCdciSWs9qKJfzwbhBVKGQ16Lgk9bUiKQ9KJNYX4CQ8iv4JG4TB4XDfCpLwnvQxcYQXeT",
  "key19": "4D8qCTxSp7tRYkAjFxtdJYpfNcpFvP2ZoHdnfDFGo64mm65y4jDD4ephTrQ5b94YAuuDVzDxVaJxojVZziWdFj9R",
  "key20": "281wugWncz9jNDLrrPmZYPFjbbjp2ERHnHhaZgKmcb1mt1AdwJX4io152XCJWy3tNo9s6PdC8LK1j9VVQkACADBQ",
  "key21": "4qjXTpq5Gi3XS725wsbCXPZWXZocdMqvMuApXZ7NsTVAxyjtyJwxx9Nxc1CUAPLX9vSR2ehkSsDa4AKNb99mz5MA",
  "key22": "FLtKejW1FchWK3BYoKTBEYy2mdbrRk68x1BPU7eu98LcewGpWETSCQEWTfb8FQVR72g7gCaqZzEeLZvS6iLgSCc",
  "key23": "UpHMXSuBkjgpGfBdwfjLTcmQp1aWd5aFeHwjDGkSPLKv6CbwLVaxX593cBfH3UxmvfEqj7n5viQo4ooHdietzAj",
  "key24": "DUWSz9gfwyc6681rFCjKzkWKUPZKCVJTkVX82NpKYRGfBdJuoi6uZJ7cX4GoaptoCZv5zK7NPH2VGNhzLwg4aAe",
  "key25": "FTaqFmL8dcLaYQqAyKuJaoGQExCFtovRtp1fGuzYCUV1aM57an7nLSuL15YEKsL1Hqbvimc2WoeixpLGPjeHugx",
  "key26": "2tpV8Z2ydBGh9uxPoBJbfM6uTowYZCxU5EmT7EnWvgQLBqgHNJAjCHsbYgAkoaUoguuCdnLhxBgw9RaoKpLWEaak",
  "key27": "2pgnaW66yRQsMNsvj4soXJNX85TeLs1SazzfxiqwdZgZNYGZJ8HKGzCbs1211B92QcX19K2zf6GaAcWYtEYbqDD6",
  "key28": "2ynd2ywNZfFuCfMb5YTLtQARPCZFSLNRS4E6fZ1dCZ2owxqwDA5JtJXDRDH8B25QxAiUQmy8Uo68jqDKr7Get5V",
  "key29": "3eQP4hS7Bm981H27S5pqyyW4q9y4kL2MPPjN5KnMccA31puPdmutEAGPX4oJr2sH4dcr2y12ga8ueZWxYTQjm1ie",
  "key30": "4UeTHi7E3K5KL52FyHSYPRbyKWV5AF7NuBbMGySKuHAdf9nghAiyBMKNepqpfVK9yKTuZFHs8ENRL1SYzTU6N4ws",
  "key31": "4xeYHw5UWtHWyzsq1RNBtNKwmuWNTEi2ZbsJoR2twvj5pDF2q3DEjGUMQTg1QzTFEUrUfz25q981p5L9XdorZNeb",
  "key32": "2UHzsZDuubGQQHzuM31AyiUjuk6znJpXD66HyLB9vpscPh3GejDcp5uw3jGz1SFHJDpGG2i9S3oqBT2H2XkhGpws",
  "key33": "5b5wG9HCLcy8YuueeueSfRUnkZt1YRk946e7Bmtqo8zJNX5UffWkeuk3tk2hNZkrGhUgUrbQTGwwQXQvjv5Dv1qU",
  "key34": "2GMYFffQvKEzPhsFkiRqL8G8NDP9cFh6uNhinvoQxKpq7EQyq6xbJXUYb9mBo1W6DbEnxPW6oh9SQwPhCTmFToR5",
  "key35": "3SxsSN2dhS4ELhRDpS72XcBVomSJebzB26RPAJEohhg3redvUkY2rPC8wDubGwEzdACkD3w4kWNHopPTZmagPiWf",
  "key36": "4urfP3Z5ogJGrp8nSDKSVZ62bfqR6yGMWnUgToL56amCqEJgRAEVqGB4ahaEXRiJgPsEsARZSCvAtGR1TSnHfCQM",
  "key37": "vPzuwmYHGnVUWCbeApcPbuhXxKHaW1rJT9ZUdUebCrkAXBSwQxpJtrVCsVddyPK8ECHVKYgqfjAHaZZVspzg5NJ",
  "key38": "4TnLLX2UDcA4oj8kea3DwYgHZdK6hybNqR1ivn8psva6UxHqmVPnCoEhB6UF5Z2hpmjRQZkxpu1MJ9uvhT2XAcXo",
  "key39": "4VWiKbj12BC57AZu2KFCAXRCW1b3juZDRaYrwRWUo3eCAhyMtKYntuRj1PRX1oTekW8DrC5vcBY73ge9shpedoSZ"
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
