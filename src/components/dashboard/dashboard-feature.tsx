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
    "26Y2NexrsiNGFFiJ1WQRMFa6xQpacy37U8fAbC3YGK5TzjDmaSidEbgiMdV49BxFLtFsvZUp13ztrytvGJ883rVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F9T3gSnonRh1NQ2pR78vhoXA8xrBJ8ziJrNhwDMgHjUYoRe6cVXQhKLFWUQpDbgXdgDZM24acX58N39RNGTnVeB",
  "key1": "3rusGc1332ySY3inNQHzGT9k2VagdiH1vR463pa5pERdrsw4iC78t6Si8tefNGRtwGhSGpH4WjzjM7ZE64tMmho6",
  "key2": "3yHsFHn5fngRZmUSASmq7VstfnfP2mmt1Qj4tYpbtiD5nQQkdhVqeQgSWqNQfnQE5PvtUVzxjUMV6A33gfL9pomR",
  "key3": "5San44jcmYL4ga99pt5xCJweek4eFXPj67z4ADGorSfTGRJeVm7PWBajbtGqWxRrJCqJ8sof5nfS8NRV44a9nuJS",
  "key4": "2bmnV41XkvUuqojxd6BiiR4nqF8pPZvVJChNkBCaXBxY2MsDCuiu37irPf8FfpJbnjKVjK4aNgeicYKipebxj9Gh",
  "key5": "3EEZKZTUfgapT8n12YcU1TfepiAxNY7WXXdmbhKFCQ5rLHVxuZnHtRk6Ax3LBWZtdhEBc3Gd4oQXgeC9eWgrUWqV",
  "key6": "5ufdGwkenjwbwyMXe3SqogiA8qxAq8G3xuAKTsHhNznkwqCneBNVtbaMyM6c6si5baDYEWGrcnSfSoh2wUBMo2j9",
  "key7": "WGxXJkSSM192qX69svMFkEErBySakoRAG8ktwmVYy1fZMDY2aPpnXeAUAcYLJZBktv4tmaDkwSvjcDHqUrw9uMa",
  "key8": "4ZEdSYPeyr1GN6vMWoxZFbfhyxr7Qb9i7yDU7i9H2esBQ7azjVgxmT2z6CRm6UyT1DdsD7ubMtKgmg6czHNeFGcN",
  "key9": "2fXKdHgirnq4ZiUSXDhxq3jqFNFi5Fbj6d5SeKRU9z4HtF7iZMPPDgAbdKVMVupGZkBxab9v33cwjZmzuYqPapH4",
  "key10": "4sAqCX3d2KeCwNjxYyyZzVB4ViN65TZup75kYnEpbZhuetFvCxygX6aGNbM5BjguoSTT6y5Uaonbw8k87TLm77r5",
  "key11": "38EUBd5b19dBHunaPEEsxNvZqJ3rg98ppJexhUj5yFBavAmvZq5rofzTME6GXitgFX8iM4dC3YavoKtmQqKP25QR",
  "key12": "4wFsrfkrvAMp7As5ZHi82dqSwzZh9bZBwMDQqEHtPKkp3PbqMgws8YiLbS4ZWQ8QPuYdBSiEdGUhqEmFmCqFYrvQ",
  "key13": "4VQJ9aqibdk5WN8fAZAK15DVS2aSDT4dXFz8vwLzZdQzJDu2wa96qcoAJxMzW7exQBruUL3HAcqDL2jWpsEWcvR9",
  "key14": "4pn2KiM8tEfwkG5ZEfmb89jL74CQV46SPzDPhqRZ7d5ZCndHZ7mZgUUe1Wnf6qPsfWnDUsmyhmdEA5CNZyeUpCn7",
  "key15": "4c4xMatGLKaUis63obeCct53DrK8WrbM7zkJ9pa5zaxis9rGeP3iqR2x9iKasW42sTuFsCqrrrgtccdfivH9VAHo",
  "key16": "2eFgHzYwirbDnyrGVcN4MnQiFCqDhF7S5MEf9saGfwSDvRp3TGSKuAyba84NxQc3LfZkjegiJzrr6SJYv3YC3JDG",
  "key17": "uLRVGQ9U4NtE8ngY6T3XAdVAvZco4FvY5Y2kAZUjUUCxXE6MKjDoZy2khHVoQ8X621gRsiLhXiQHxuUuFq63Sok",
  "key18": "5rZFaktZZPBHzrvAHe1nHGeUsZ1MRdVProXjSKWVa3rECKeKonHkiQiTBU6fVNYNdFV3HvYshvaXd3hzd1BmoP68",
  "key19": "5o2jxB4JbU7AqGrzWLEobmngHsVswT2ZtXoQuD5WGyCXsEnRnmddQraWFJRoVx7DQrbeZ6BXpLWcZ1pEEfxZfjUq",
  "key20": "4EJL1d3kskvuLXdZJcR8WDvLToAtGEZtjQf4br1Q8Lda6oiakrqVeF5kMNyvJeTC5Zz4nBskPvpxfgsvu8EPEsHW",
  "key21": "5nJKsFFFsggwRNyJu4Xq519M9PosJmqRbQWpkwedfydpdmCGVrcQ3SL97Lmn45B25PN8HG5jnjKH3bE8LFnSctQP",
  "key22": "2VH2a52i7fuiLBtUogABCQBdzKiY5HKw6fSCmpMWK4pRg21yVzSq8HXTbUT2suwj3NHswJmxAMfSVv3MT8m6Hgeu",
  "key23": "wmfeAe2UBseapeJqX5dMWvjPZKiy3WSsCZwtM4iSNJepTFEAHewPrEFstNFZmrG1y6tmUYLb5GcrM1iNBxSLHHU",
  "key24": "4om3MZt69JRjXRA3PfSdJyvjnLapHkuFNxVsduSNEG6Vqg9xXwzNyLfTJgApxPRfpqvcKDSnDqdNxFWsDLh4ASpc",
  "key25": "5p81qxyPhMMu3fFgy1pkTvzELqZdrN8zo67uLLLqsjsBsAr4ys7cNE8W7XcMzp74NBN4YVVB1NnEPRUeAuiJgpL8",
  "key26": "2Mok9RvUpUnBocRhsfpAW71E57SHLFyzLHKNdWnC4Qu8Hf4qsPviNEpRWCzLHqJxTpneCQzBjZvTQm7fMVM1wevU",
  "key27": "4Skom1TaGpyrAUpWcKqw7e57MthB2Ak6Q6gSNCnNLyXH59uLLEUv2DsQUsquV9JacWASySroDECpCi9ZhNhMNbTg",
  "key28": "2QkJRrYysLU1oi1wH1c5vdvcqawfaxGbEdALCjNtWCwbB3je1LqEN8TNdi8YPkfAyLUrPD7ziKCB4ZpKwkHMDAwa",
  "key29": "57RBsRGPRutKPmW86nNRtRTATRN7pse9uw4P1nEx5yj15gsSPqCwpAuQbYGbsL43QrjGH3guctXPqJtnUf9vCYQs"
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
