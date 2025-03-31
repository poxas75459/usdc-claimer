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
    "4aAyiP4Qe5jTseTYphkrtJwmJXxJGd59C7d6514yuPfespEtV3eiWZMBHH6uArrgJVWYfUHgL8bnYg1KChiiQE94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "664KhNgQxud3ieLHTLYdAFTDevfKLYEiquVNYKBNHkiA9JVRaiVh4PT1WM3tRgCxBVpVW9sjuCWADnfHR2QJBPsB",
  "key1": "3EX79wLK4CnhXywwzfqSXXSzzAvngyJq8FKPtiafpw9UaYUBqTq6kcUf59fWkni7ADBAeTeoQ1gaktYDEi8pbeoJ",
  "key2": "3w5pp2jiBqmd616LWxRYeC6Navg2MZK7oSuhkLspCCRnTcd4mDx3Fs2hgPsWojccXa7sWWu4Rm8EK2qom7ihzGx4",
  "key3": "Md5zXtFcwYrLynbQWSUmBWHzHQHii89QJWfhBTDLpchyG8xuUmKSEcCPakrYtRAdUg2p68u5PZfeAiAgC57FSqF",
  "key4": "2tQzED5kvowDPY4c8GbrGF3XWHmXS6cryVX3G1sR3LdCkPnEBFAkMQQbY2Ye5ZfKVubn2NSxcbMih7fS324T6h6n",
  "key5": "4ozi58dxHadFWJf5mRP46iqtCtU9civLBgc7MJC5D3sjzbL5KoKYhwY27XyGY1MDxf25Wvj2DyGLgefBpXcfvHoC",
  "key6": "24B3y2heysieHCm9r7ckhb5qrE6TTwPbCkEekvU6av5Yay4a372BF5G5kcaQgUtES3Yz9XTBgU8PjLkYpuWrTS2w",
  "key7": "fn7TQYvWXGc1igr6bQJfNPeXTMeHyro8fKQkKgDTv7RYw83uWfFQ1Gr31ATh7MznAJ8g2YJ1xHZ3cDqv5grjPpm",
  "key8": "67nJquKauh3m6op9DP9ibrBnoEZUmoGgAtbjiVTrnRcDnDY8AquDyeVK7n3TKbMSm23Ljs2yG2RG7c3Le1NsDkoc",
  "key9": "5kjDyyWkMqrqVqkUjNAQfZbksnjRUhoB5qWS2jntxCop1FdwA7aW2vnGn4Hv5LfsnPjvGxwCeCxLa6y4Y4RocFsV",
  "key10": "3Kt28rVotUWzag2kKsLPrhwK7UXQogFk6bP2wazRSjUZUaTq4FBJvN2pvRibUSgV7MAFrmA2gFc6Uh1zNuirAeay",
  "key11": "NXaaBf8MfYtsfRe8pXWEDnFWmFw8RkZsVToBXCBjTk6U6SK9JbdjSwjBUN5rNBzgsPKb29o1vVLZK6K2nEu7HMY",
  "key12": "38iPDELuXMixLUUQTZgTezxJFGyegAMG1CcRvj4iFRCR9gwwhC5tGFDH7TEZi386Y56Y3MhyyQ1xUs9LRBPMnVby",
  "key13": "499bxCt8dzT85ooFBTTYC35bqoGRUPyveRA1kQvYZ4FvZMdeZu7gBGZXCBdPid7vGCFDWj5wQixdfNHZMx42najC",
  "key14": "3bL7YiiK6i3uAiGYqD2XRBu4KLws46feBt1A5hvcfUXiUSuqUdDdUp1VUCxc6BLUteb75cWtDbp3XKcZas4spdCb",
  "key15": "44PRL4zPV2Au7oBgRmbrZuxBxefwwCMVxxDxnVZN43MiVgoqSNg9gtz9e3C8aw8tPXdpntiqFYEmDKhhUxN45toZ",
  "key16": "3kbtNvVS2G9jL5Jx14rnjCGJWo7rohhe6Qur7wf4nRrf4hYCtXXuDR5ED1RbRGVePfkcqJXoXdR4BsZjtFxGLQZr",
  "key17": "gXtteTS72P8DLq588DTWb6Q4xaz6n3xrmT6u5pc9hJSk6tYSDD5dMezj11bYANFmiwQSsYH58ZeNJEWcaydF6fg",
  "key18": "2WY1WeG7iYiCqu4PMp8f4L4Eiqc5h5US6f9UuRCXzBQqBdSKqM8aSpWUrcdz9zc2bP3p7WKduuieUJLXvhtNQavQ",
  "key19": "3kTJ7MqFcjf6TwxhDDT86a4MQzJhSduRLRAYpjBMQzd3vtrWSMRohf1Q9BYxBkys4F3A7hs43CYS1p4835eSLxTd",
  "key20": "59VySio2VwPoMkw8YbNYBxWCJYzn2ywqA1zRrWkG9hCUmjLthMJdEspyUSr1wvfjB5fsfQmEPj93qb3st9uDnSVE",
  "key21": "4sppKq4HoaM6CT773SFmvZbNvZs58yBXXsDtceag9TWR2j1ZVkHrykWAa2ps1E775nQGsnePMPPQpPehkyHjygY7",
  "key22": "sHkUd6BzNgGcySaU8zBTf3Wp2ES36UxNaDcrfEXhUCUM8pt1MXHeqHGkGN2FwdMEy6FWNcB5r6G7weP3wa3o7xk",
  "key23": "5e1VMzChLJ8StW3RQTkCDABhGv1y3DJYzevNSCPgF99KvFP1pMCK7an3fmyiAqysHSzv8ehpzq5RfrdK7m5rkoBa",
  "key24": "3XXWi4EsWrXb9xYRAK2XJG5kog8uM75DBxmeHxvtauUWirVLthanzKgXfFHWfucsG4WQzdryyC21saBjFFCdmuz",
  "key25": "6NActZDjFxH6E4jSLb6YvmZ4WuxVGUMHrkWkbmffx2W4J4Hugho6ckacqLE1LenwPFqUw463WKZXJfhVVXgi9UF",
  "key26": "3ZvKy7tgc8CPNvNivHGcGDADbqkVSne2YQJpeZ3eNWXbtGjnCY3y6bGVUnu7H2rsKkT1hM9vrXPdo3wNwEd1Se37",
  "key27": "59pwySWwYJmLKK9yVY7vQKD277oEbMkWRF1pRnzmhSwmaor8rTrmyWvm9QBCop8KY55SfvL5Kzq4TMc1qm5bnmz2",
  "key28": "4BLKYSBNGxLzosn3VkWtYqhCi8oq36VznEjovXBVcfhg8oSYkGPTnhh6BGZRq1GFi6dqsMMSQZEVz7YGbS8rw5Nm",
  "key29": "4UaeMHVoFE553D5XkfuZc6tDJaiWsmmqyMW3g5EmZS38TDhoBu6zFoDJ9uzYHB1WUQNe9gcADdhLsuoZzhPvmh9L",
  "key30": "5p429NKznKprKsdwvJM4HbcuMTtxQ8VhNbrCepkwtq74HVY1a7FRGBTS8w6XDJJuQKwJ8bcvb49nXVU9LigrLKsR"
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
