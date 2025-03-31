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
    "5SYSUwxYJgkKk7JvTfRBFXtre62YhdZk1k3tH6TdiUQN7Be8JabEAGsT6AXH2MBmTp5FQ5YCgZk5bF2JXRabju8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YYnC99beE1xUL9NtztNsFbKR4Zp8RsMPeCkUXS6JLikBKVZo6Sb6CBbq82pP9EjdfvCJe78aNtaDaebSFPRQXUM",
  "key1": "PBQ6pwtBsM3nb7hAoYWq8aY2ZMH354AdsStziq9A15E9Y9RZYsVdWcw9kug3ntpV7uu55t4PzuQQ3habSH67vaw",
  "key2": "3JLTjckgQqMvekrtqzj65xBg4r57b34arXaTXj8gm35QGGWT6dw4SuUqc1cFY2bxMfGRFVHXLvDphvdq68WeX3VB",
  "key3": "3brZU6mD8TKUTs163A2f2cLTssnEQxsyJwQtBiVPjsW5jbFdk9Gedb2P2nX4tbH4oPVMDGHWTetjSiMoxPPU8VBw",
  "key4": "5nZNDYbpZDt7SUn3b9ZPgKxgAm8eZbScgQp6wmZwEWNk1jMbgCF2iAnoB72Qv83d9rguzg9DABP3UCWQgCuLawcw",
  "key5": "neGnDPLR5GHAj7cpWGmuZ6ia53jibe9UrEgVjn8p1asErRs8QcmSC2v38LL18Mjty5tTPCfsdL3v39A987LQb6i",
  "key6": "35TqqH2ifW8kdQRGPNExiasprMjkevSi7q66Db168d3gAYUymh3phXo5HerUTWjLPY1zad2JkEVzKtLcEga5AbE5",
  "key7": "42qzUFtSYNZTM7NkcEfsfgnb2CcVLTbcK7XabB16PFvYumzF7BjTmgSmMRhcAhKq7NejuYhsEExkMiet3uuzZL5j",
  "key8": "4K4tLHWphLvcUgiKdBpePck7HuFQBtybwJhMEC1vfC5dtKUMZ2qA9YLxgKeJruHn5HrnvqzKJVX6CX5qGrdymD8C",
  "key9": "aCxZRzp1Yvz6LTt2casiCubYTTaNYg3drSCaEg7JznwZf1fkduL2E4ZqnnsQ1u32Vqh5Vq8nsSeESRb5hVuF4yD",
  "key10": "2iub9QGuVtDoWoRW5KW6sd8HEKyZsMcPNbYF8qpcJKb7CzRiECBiyWJmRnRWMKMwgHD8cVN6nSLwguDJ6qWsxgu5",
  "key11": "J1L14B26CNiS5R93SuDzjbpB4ksFvtEAfMNcnX5guRpkDJ8Qf8wH1RntcSJKWqMuVvkMVE5MWTNnGCz37di1f5V",
  "key12": "2C4YMyeHtGe3Lw24BUz9T46zS6KUjncwB7qAWEmfxDAbi1pq62xpDZyALow5mhUU7isSkYb7u7BrFx45MUVzvZyB",
  "key13": "4Fu8PWXFkBnbR4xsT2RbZpqHuZRn2EzKUH2VsUpLeH2iJifs2w1F9n3w44Vkm4ZVDuuVTP7DM2Vs2gqX9R64Xfh",
  "key14": "4W9Z6baW8gxDF4BDSMQ774CSfBe8VKnUXDHzeq15dHgFFbdLwUuTCMWKvHRCRFh8Q2TA85XoyxNws7Z92nyfnheN",
  "key15": "63eP6Mfs7ZfrJhBKhmgf1Qg2gUWQW2HJ3Lfn71WB1pCtAhdMKMRht1JS4smwWhHdRAuEX98Ztk3yPG3BTGMoQXaS",
  "key16": "BwRNTqPNTt5KcAfmSAmDBQHHHGptytmEZ3cprLhhCWjLn6RyUdSrxViAgR7SaNsAYCMnYTVRen477CmU6ASLdSz",
  "key17": "3pkrm5QU5YNmAWiSaYW7cMLgaQigxiy3eYP3Jux8CQtq4YrGndGubpzCQLcUpEk9UDpN7xCa46P1EArLMUeGwFXZ",
  "key18": "2cc7RE9RFqazAFUW45Nwt3pPKjrhGEzDZzX5EK7Dnjaw2UqYLKpuEzS3rtYsZZhEeaFZ1eQxAagYazN5bgyW4umt",
  "key19": "5X3j28cPavyBexnkQWzaQiXCUczAVCuNjLkfB77X81eArL4Y5CRDsUp7hrRxKt1BfaxwKF2oNTFK3ZsaQrgguy1R",
  "key20": "3aHTWuVBALscwY9iBMkxGFnAzBLA99Z8vfje9c9Fr2twQpE6ATc1MG22WojcnftRM1ztUcZUJMXjznkK2LoG5fuf",
  "key21": "5ySJdaS3VUZMkxmyuQUyZaTQVtAZbrQwcbrS6UAyTze3sF6p1ikzozFNiyyxcHDF2Ec23GgzLPZMwyuSHdAUDbXi",
  "key22": "4nh6vq4utht616PisciX65pqFueWVEfDo3ZPpTRxi1rk97MxPZYyCpXCR7j7r5CRKgaEczwagZpwo9ishDMxNCUv",
  "key23": "5E3bDRgyWwaKbBvxfNsfqYLqD5wsAqgMC9xegtqtjk4EZMNiE4qdahW9Ewej21EnnEMBLMMUgVxLe3sFPGLXk7uS",
  "key24": "5eJQWFFAc4rBwyBi61pfTSG15c8yEPFzsxLn5BkkzQeCEzK5fqHLN2aBe1mFUqxYKaYTtinycnsMMjhXriKcKyJr",
  "key25": "4BbRP25wjcYkKt9dZDxXCJEug9FBFyFYWzh7Sna98vVn873acNh2dbnjK5ZuznPar5oXXDcS6bqp4wvjzJCqWVwE",
  "key26": "4iDTzXpz8LeCvzdVY2bbNVQjPaci8UH2fH3j18LNCn5gEdCsnHp4WqchJqCGvPKRAFUvBs74T724tvGwifRDnu7R",
  "key27": "a9ny3DDndfhMZNNBCf84F29i5gzJXRubxnbw37uTN9py3c3Vjp2QWusNrRFUV98YfkgK9hFpL3rRar3QFtZkPF9",
  "key28": "2kzsVuVhw4RcfsqUZD92SCn1eDV9q5Xfi568t1yXEPDNLggamAW5Zib2UxkV3R8ZddNqz6b37yVJQo6yuzCRTeuQ",
  "key29": "5aGrSJTecjXPnr77auQTP55QsRftEjKvy5wNE4icKwvPrqRETkzmQKn7BBP6Q9yc96CT5CngEfwxg4KVtaq9GsKd",
  "key30": "4ppSjhSFyzpb9gbDMnSY7mQbd6FVYaUVGiBZpYCMyQaoqzSwPg7NRac3GtomiEZ2hhAQup26WPqnD1yfmPTW668n",
  "key31": "2CxVu13CgK7urWXWV3Aa3NnUtWUXPUwpSNf7J8pi8V6J6WXmJe5RapuDb2xCFKPPFGoUMRaZogxUHrdryHBrNKXM",
  "key32": "HEYu8bFS8MBh9KmSqwCePGVdxp3PcGaTNUZpBpnqUvtDfFywuhLhMctVMVrze3j1hkFSfWRbW9zpDmX6GsZ5hef",
  "key33": "MR8xoa4314DZQRJouzTmDHa23yGZQGr3Gj7SBkN9HuDj2oY1YnPBLKtyz9mspQXizAe773KQckRuqZdE6NM3iAU",
  "key34": "gAXpMUoFGG5pwV3QmbKQX2jgiuu5os2PxxtpRMQkdi9XjxAggVGLt7Ym14Pic74EHRws4JnJ2shZpwCnydyHZ2D"
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
