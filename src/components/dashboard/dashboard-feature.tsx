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
    "3AtnbFprhUGznocSGAWeanEUS6j2bpwd2LMCcgKnufFt8qGQ9tbNujs4jvXZBrVh8kVZuKHAHZwNsST2B8wmbiQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L7z77Yqbs4SbDxbshPLq4PxVmgqCp1aFbM4z2tdAdmDdNQhskpMjdBQEs1C3Xv66rtm8DFXLGW7gM2NLtDA7xRr",
  "key1": "66hwBjwEJaFNqb3SypQ3nQTP4re9agLtKpzTeupAWeRf4wWUmG6eff7QbQddQJ8fTimZ2qNLmpmNtTA6PWXD2Ysk",
  "key2": "5M7ChviiFMo3WKPAWPDAhLAoMc4zX8cdezFNDrRoYXUHCLFZJ6HgUv3PFvfMt4JfP5NL1B728Ba1odAfyaFoiS6i",
  "key3": "D7vkYJNys5zGWESGbacNarq3CU6vbC9JiEZKUvvxt7KZpcaWLPtoknAF8BhaSn56C5mcTjx7BRjpTNfs7pxQSTR",
  "key4": "4uPsbtaSPwc47StPgqutdMkxf3PrhDSsrkbEFmmB4qiLeFVQZQmGWq5DjxRDpmRJsozaRdpx12kcyz2YVvLRBMdi",
  "key5": "5P39grg8eW4Q7ZFtePQbQfV4XZvY2L2H5BS8B8gFmNynxcJPZQHCrpdwXWd1gXjfh1PRUCDyAJDahSHpcTdPW8BD",
  "key6": "4jTG5uy97UxPtwELRNq2qrwWMxz1X868oDyjZzBNTUS4yqEghSc6ytSd4SxFoQj97BpnqQB2DqBGwwrA36ubzhCS",
  "key7": "4Ap46dGHhihxi7Jf6iqcTNHUcFmdsiY7zeLZwhdeF1CkrixMFQW2un7ie3WbmxDRJMBWA4Cd256ShrfwyDMYiEqw",
  "key8": "5tTpiFcWiQbw4qVWE32XaE588LQ7biC86NnZrd124CQfZrUmMyvdssqiwUepxuFJcqf23V3J5MyidNq6f3f1Qdga",
  "key9": "3bWSZoeafTh6uv2yGek1F8gA1CkKEQen6eabARYpr9LLsyegZrbifKbtL2EtAc56WtTMNGiHRF4aBMgxj39eFB4",
  "key10": "3SZtmvGQxB9kpf95mc7weJh43ULVWBQY12nZVG5rg27d93hUTD3EUSEz8MXsBsMECj1fpajd4pQbMvu73K4sBdnN",
  "key11": "6BYoxbwK1cbpehM3MZGbF6d1my8UTRDrCchXCaHWcBiHhdy4tin9vqfCFdXunSJDwDuaGmxwhAFER8eWSX2DDig",
  "key12": "TZCjKTJhYFbynzGATNpav6GYVmyPTkT5QeoUDuvvirXLkiK9bLwdRTKUuDBsN8cnkLaFxyLXprmthE1G5fp6CST",
  "key13": "3g1ef7D2pBtCQfxDqJNm9JLxDskVFdLAcm69wAnXqYXZnXDGF6hHT7C868e9e2ubcfiCAEGj4Vyh9dwUj1pfuUji",
  "key14": "kPDqu7GBobrMeqGocmS2GQLxc9zoSHFXWQEABvnmwLkqStnxNsTo7QaDPqzPwZv7brSWcRyr2g7CtDSi1iKG9CN",
  "key15": "2WYHkC2UJ4KDcMZF6R6p8KCDaqUdbTRCozahHcTd5VegDVFhFJT3wi8jm1ACPZ2DVqvn2oXvVKq2yNuPqPhdUgqu",
  "key16": "5vyeUuKLWE9B8EuM7YT5s7EAoi9NY4ax9YKKsb5T2qnPsGSfyhGKKLDSwAguk2LiwUJTd4NbrrdqpMuMZ1z3kwyo",
  "key17": "66HLJUM8CFSMVRpEgftVaGvL4yQeiFtGJU2UpvNdGYkPArwMcXuuXirAvPcVbdTWs92SkYzhTB1vaSW82qzkMtM5",
  "key18": "3RBGxvAGWkYAyYXbpWqAVPexxQAM1FSm9ua3hF4VunSRPkC2Kp8zXzGWojzaoQnyzn6dTN6BhrPKL21Ujj7LakeM",
  "key19": "sZgXDyGvX4UZGPZcfU7cxGhLQaxHdeZvF6Gi1JGeTR1tWrGa8neRxEjHsT13Gqgee5u9d7AyToZbpECGiNDeJSa",
  "key20": "4VNxqfzdZjopCcz513oDXNMUDN6KbdUUKXnsrRPzLQkMcwm4dzbmmsqwhJVDAFhpJFdN3CvtJ6e4oyH4iaKi1hCC",
  "key21": "3q4SUPc2Pt2x7Ngt8yiiwoGt731gvb5Zf7M9mJE5hTYar5JeBg1pwZfSF4M43LGywGcArdiojXnWHRTCdCcYEfFC",
  "key22": "5A7LB3QAkZfHG3Luuin4QdknXbdqULYkBKGtZ6fYmVDyzscqnjvFgP3qhhDnRnUQqarCwJn9ojfpdRz2Rt1aRaSb",
  "key23": "2QRys3M2C59AtbsBg3TYq2NY6EmLLLSCRgMhYhU5aJKHptHgUCh2ijovRHauJd1DBoCaYnjwLkRkDuDBNwCkfJ5X",
  "key24": "4ec9kXNJzBqEprNqmWQYyD31KStKukLz8usJUoinMZjCpv9MMN3228vFE1jBko3DkzYTRQrFgCkheuKd24Yr7aA3",
  "key25": "48C5PSWShJRpVg9LjhoePhG8MLCEK4SV2jx8vVCUQrnY2Ps6BSU4QoBa9baHjq8CET3ECxZdJwzs9CdJE4xzyEZH",
  "key26": "3YMZQurLPJpivoyaTjdsr7XjGkFCdwo3VrxitiKB36B32zcve1ziKFVAgM3eng1JhBfguJHRAF4Ttm7bHCeZ4V2J",
  "key27": "5qBwsJCGdY89hXURQzRo7UEE58NjWy5B7a8P63CnNPsKwyjNSKxAM98xhqTb6vD3yXmteS9pFSMQaE7M14ZWSNQw"
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
