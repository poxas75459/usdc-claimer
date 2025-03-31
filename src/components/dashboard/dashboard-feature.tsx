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
    "LY8mcqsBsXSCozGnXjs8HybbJtZhgA2rEo762awhAptp7SisAzp7bqy4QBVyrPfD9zcDNhxV6nUyk9uPoXcic6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YDgtmfBMb8rprSu6HAwR1GTpVTpQJv6kumq44qVyJhsZ6dENqpiorgBeiFUzMnyTG3SuG447AaMYwgHHtdSNGDM",
  "key1": "5ozU5nzbdNMMm5usoJK7kbmmfM5kRfFmaruRh3MnXnpukNBpvhJw2EoJAQWT9SkmZm4bJLgEKj9ZDRWTrRYBfPPR",
  "key2": "4J1mxxvvtuhUBdxtnjJ6AZyboaZyxGDeCVRZPtCkF9SDaQpncyUdJCVVx9qeV8SpxScwzG6aTuJ9SVfVNe5K5rgz",
  "key3": "ojmDoYvdTULbZ4R9mAkRPrNfk5U8LzWkmXC7TYqpSvcaXWSPRGKTLmrEYfDZ8oqhYTSC2zAL91iJHrEk52CWdtm",
  "key4": "5XYwFKJ4TznD2ZzSA73EFgqg4X47U3hzPzffmgi8u281PhC2i1GtbmXbpmPE1rKi4ALWGqbuog1R3uHVgVQcTE2Y",
  "key5": "2HUZQYysFy6JUVdYZ1KSDipVf9sXQPegp36qT12txxnXsCNz1CzZpDNrYD6HanfYj7mbha4YZYned7nstS55KA3Z",
  "key6": "3HEdVof6N9C6EPJzY5oKzTW5eN4WaA5St36LuRDmqgFyCv9XSphSvZN98hjVfk3XyjGyP87EzwbhH3r7NQLZc2Db",
  "key7": "3THcKpDc6vxVyHRjyPYbBgsyjixVMXHrbFdmfY7q27akZ7Y3ahK4QKVKKuHKiN7Dc3igaiz8qgnWJaSbZq3PsCgK",
  "key8": "59a3JJwDtwnp9aAmrwQLu9W2oQDKxNC4tgJpuXPsKFUnqQNdCr57MJ94fazJ9xLHzC8Q17SFVCiy92mCyfaR6a6S",
  "key9": "4ajgj2i6QhzZFrVnVAopTGE7KvMzzjszQzd9Bsou34g4t1Jjdd7JvSpFtxVA736rWNA6kknSCZzJbJiQFcghWA1A",
  "key10": "48mgCkkXhPWNY5DsHk5XdG4boYLjg4ak7XQVgoP5DmfsbQ9YYz5rmsujB8tubNADed4ui2NWgedx5kCqhZLPgLL2",
  "key11": "v5YB7sKSFzMnLBnfLBWfwngx7YdBYhD86yYS4jVd5vgn319bfnHXPR93AHjoVb3YPibS2p67govivY4xv7GnKfu",
  "key12": "61oAWVEMhmo8YB8a8YJbHHVMcgNu2VbVQ3HSGFSurgP9z3CAwqw8TW4T37H2LTSqyS5CAFUxu4TxFHC1sg5fzgPQ",
  "key13": "4NpCfYtf7MU9NNJELaFsLBguJjt5fmu9XV3U5xcJe8tdaEezS9MTRQHRghwqPFWroeJKaxvXCQ3GmrejpRpqB17W",
  "key14": "3jcMUXeVLcKXBYpNEP8YEhNhgmYNn7S7Jrbgb3FHNUXVvMi2XzSjhTRdb5yX9ZT7cf39eJKQP5Vt18rdo15YRVYC",
  "key15": "5yU9Q41YiKjaNVBtt4iBDcCFUSiMYoyupoRAYN5atdNujDu5Zi9w3ikYxzAQZDYawi9XsStLSezUdAdvVY9Raxg6",
  "key16": "5bAiXCfiCmLMQKWh7uFhAP6R78iT1Sq5jgZPBY4RgN1M2sWeEYtabhkRWhb4T3KKiZJKoN8Npa81VA6rp4oJX2cA",
  "key17": "23NwUPVsCPWVg4FNixEfH1YxE3oXL29KxX1XAJM1ntY5hFF2kwTbSKXgvqEdXg797astNmD7rqtQN6xu7awGwCko",
  "key18": "c56vumpPuNEG48mizoL5ePTyDxU6eediiXk4gBiB3niDzEQTR39SiZrsJTKHyzgxUfs3oaKKsgUxWqWdxr7VKdF",
  "key19": "3LWYsipnT3aigZsPC2c1ronxamdQqWjTNJi7FKkrvweT7JgD88ut1ZhtGnoHhM9EBC1Q1mE7C2xP54naxuWfjopi",
  "key20": "4P8Di5UGQbQ4cSKHKuPbKUHkYhyhKTGjWpvemzPoSSE8QYtDiaGmPAveTEWqtjGj7VYVDBBXHY77WVVDHS9ayrVh",
  "key21": "5jqmBwidRQZLiuSGQQQFhtaC8E2pA7iff9BEHvuEfhYpHDr3vdCBFg4STC7UULpm3HLDcWx6FHUqXDkhcio55rtD",
  "key22": "ZBAeSyoTnP1EGQU9hA84bhftmZqWW2utjq669ffJyoYBeMvNiVWctoeNfn3G57LMoAYDHvgzYsL1GteMSg3WDpY",
  "key23": "GABJuvMAfSBAeb7sJvG4rmsGddLGXHxE7sqSo3c7nv5ZPJUWEZzPaW4fNp2BVRLCyQYD9kow64GKr8MbbvmMRDD",
  "key24": "38D4xMNTBtLRUuVjodkDrLrfJ6FXvKjQKBgx1MJ1EgVGDU5JrbNXV62AbARaXkhzZQpbwbBcCEN6XbJoKTyvyEj5",
  "key25": "4n2dHv1FPTX4TGQYSwN64R9dqrfS79PvwjRDgHvqDUutn155NfwCW7pnPmnhUDquHoWKeFMY7egyCgoCEEWX9AQQ",
  "key26": "5VRwgJb8CxatGLPzbuZQfGTGR36wEUF3kHuGaFzExgrpgWfGbCn4WqeSkWPmbRNtN8MnEeR5jRQkSFRZxUfKNKuV",
  "key27": "2ppMxY4XveGTAJnhgmEt2PKKfo7MMNWMPYap3NYiyXemrictJzfUqCXbrhyo6U5DhqYLwLS5DczuVqo9BDSY7sgS",
  "key28": "5DV8eDAUwGQx91oBhts52q4Bg3LjXqZxe7nEB5Ai2pJ8ysrvde2h3g2Je6U3NaPL8s5TsTJui9FZT1T4mn1MV9tG",
  "key29": "5ttum4MEqyuJTZRnAXAGo1UkEhUerCQ5XcbFN9BDKK3V9ZdUosdyDEgshn9fvnmFpno1gKBVjNArUK7o14qLHts1",
  "key30": "3CmS5eRpnkTWwqwsRF71GzrrqQc9xxftThEEAsZWbRLjhxD9smRFak9p6AAfiDdhNqNmYGd8eqqRmC7MdvUqmQci",
  "key31": "CrvbcVSGcNFD1Uykt6wgG3a2YqhrFoUs5Jmqufzpn3xTy9AerjXQT36zQD1AwjVXCMY7ytxW46WhLxkqDTqGWit",
  "key32": "4QbuiZkG5Q53qPJy1ZKYvVXTGJTwkeCpw4GHxjaHDdWizDsVzji9dg1M15JCq49Sgh2LkCTVkKwccwGTYCBFMm9M",
  "key33": "5prXdUDKXpphbNt98hTkQA1DRFVTQetKTKiL8SKmT7oHZAdUW7BDY7zsWrkTayftbZFXWX2XZt7upMMnxPowVgrE",
  "key34": "4HLbZ32c7AUY5gcYX7HZgfk2RfGkBE8R1haBzUgBRj8N7xhcWUy74JD7q1mPD25QKPr5E6f48kuUx8rbs1gDqyG2",
  "key35": "3WDMCF4ryXF1ETGS4o1sr6rVdKmikGwd8oVj3dSoo5sqybWVUiezga25nojRsJgVFyLtE7gF7iCdMjd8jdnLxrLi",
  "key36": "3hsQMr9b46T5PanSbK3dSFP8qHN9Xmg6rZsR7XVtaC7EkDjVenz8qiTai4qfFw6MhRYAGw2sinXGuFG2xj1NiP3X",
  "key37": "3Hs53NAbirstTLcLe2YUrpu3bBj36DNJyJ1xpD14Q2g3L5vZLtH91uopWYUnUecSAUP3NGqU9b4EAChRna44bkSf",
  "key38": "5eWv9CHux2aJx6B7qXhyzzFWA17X2Y4dsA9M8LebfEnBBXGXAKVR7YT5ADVEGJXPGA9cAzVUjUgLEVeq6uGzje62",
  "key39": "2aY219qsnN22vohrKdvg1xShszdT3nWoP5ErPA17HgXT9LVWCLUU9U4fAbKn9FSeAj2vuVsPn1n7Svm2ffEQtMRp"
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
