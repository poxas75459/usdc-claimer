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
    "2s8tRJRBdbqWpQJ2qi89X6DtPYQqM1HRgwzDb2QEB7vhz4YPK7pCLhk7SDdKL8ZxSFtMiBGmbHjk3U2rzJYic4u3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xXFC1Hr4LaEKYWxpCFqcnN9BmjLeE4rDb9E5VU93oBP819aaMCsjNHQcaUqGDGhh7EB4uAdr1poV9CZvCKVpH92",
  "key1": "2h6KsGSYoAafCjmHp8KCoycdo1jxPGWmfiuVY6j7sbQnk8VcALrP63Z8oUV1jiuMGNTX6dsoKS8vvFyU2WwC41Dd",
  "key2": "2NivJf2Yqv4bt8Fts7p761MUMHzm5nBozRLLCMEjQVVJn64GdDpxxDGvcB59jQCTw5EY8g52BUtXdS9bXke8am7A",
  "key3": "5tmFccHxSu55XcrLCSYMj5GyWgbNbzB9Zu6fEtZsrZYZEyE8gj9Mph91NcoMPjw6nzekTViVmmAZVmVH5zMyLDZM",
  "key4": "3fiXkTwXk28u4wous8jtdqQVVmP1DMs6D36WCsYrLUYSzS4g5TWc8Hj5kvr4GUPxu6DPxN78pkDXiT1CsdZUwg3o",
  "key5": "5YAcjrPykfmEWLy6fQrbD96ojsnhK1ZWUBRkjT16c1rZs3zsfTXr4R4xRC7XyxLwdNq37mJWWsYnhiEDS54rj8wo",
  "key6": "2zGYc4vYtZLszp1TFgWuRNf8BjSyPKG6Jf7f2pniwTrtXUSWUyDD5mEprFTCroa5U3TsZJVEFXykmXRX5N2fG24d",
  "key7": "2tdB68vt5H7ChCbC3Fcy1YcSkgFKwTPUcPDxFunBiDkTWzWgZ9LrGCtpLNSZcLgxZfwDjo44GU2pq58rxb6xQSiB",
  "key8": "3jmys8F2WDu3wyuYfqtkhm2SbCk3LMtExD95EjiAsWvkqPrmSTGtFpQxPJrhrMY4zEQ7xvQM3e4UZqP961yk8qm1",
  "key9": "r7Jix2PvMSZQjMmDj6L2nMsi9eZRZh3KsAWen1B6GFjfh3tkPUp6zwYKkxhyrgnEuJS1Y9M18uMPCfsnF55bwwQ",
  "key10": "4wX5yoMfabqSbzWgGCS1KKBopxGahmWGwWhwUeMvi6g96h8fVMA18rpnaeXuearVoDN3ap1PQJx2qMEsgYShMkmE",
  "key11": "4SM1ekMtzJAYFVkbWuhordLquBj7Mnwjgtdo2DSnwPbzkmgDYwX8iAVNkjeprbcM8n7tgazXZHUj9fFjwKXWk5pP",
  "key12": "3884ow6ZijdvhEj4tRD9NszPEHEYxS94njGuy69guGhCGCr7ynuvQz2WJmrNAUpJ7tpPFTKos1YTbXBDE47Emzkp",
  "key13": "2FMVaAUz66buSZUbBFtq5kBMegmsENgLamg8H7nHxxU6wAPnThKE7JZ6Sjc64sBvc4u5Y81xXLVGcP91RxQvzBKd",
  "key14": "3hrmhEMgvpjhXsjhEKym4FHigvns25MsHUfY44w1gPNb9vqJguE6Yvv6k2UamxWLVUbAvsP4mB3chcqgjG3cte4G",
  "key15": "5yHsKdqAY9tVCeBbnzPkHVbkdUYiC64GCfiDWJ7MEu3ptBE73Kefprs8WXU7ufhCsE6Pnwm5fYMcKdGBbH2k99g4",
  "key16": "5v2Z7nYntsFqFh6kRGAnYHDyJLr9DYj4pJzGh1nHYpRE4GsGsDVoHKPX38uSAV9G1RM7itizPguBkD3DYpAFKa2A",
  "key17": "5yJnzLTUTmDEz4AFV8gUkV32c2yv9MZUyi2JQdWLqyBXQv8Pttksy9ebziunD3wuJik8Ex98R87TUFHqokv5hzs",
  "key18": "3yNGppu4CD6NthPF7jKw267nBhhhqX3avRf2JTa352BFXUr41cx6vRywsRnnKFvuaB8iKyKHUsTEsYZ5xkQMvMif",
  "key19": "3npptwjUPLHtk6FA9PaeMWZm8bxJJC3cmCA4zBkQC1wjfLVCdgLenEKVemuGEjpyKds3RRChs1N8vxLt79UJ3LFH",
  "key20": "5zYZ15su6UDcMVo15foVHRa5G674m2o2R5FGWohNBnN9F76W5MZxgLaZ1B5VaAfW54y6oDo8yHnLNeDBjUyoPfhp",
  "key21": "52SeZvvzQEygyWj9VKnVieJuKTYC16YFPkryV7RBmbPiUaB9oev4EWSvVkbRs5kVowKvJKu9ogxUBScyNzqBsqBf",
  "key22": "2ZHPocHGm3mGVRs7JwxxPnfr4oKRy6Dy56TK2hps1TrPyAjm7YfVTv3pSFGRGdoriJWXtmFNFjR9DzeXb8F8Nti5",
  "key23": "3VgQKNnQgQpQ8d2NHyyXpidrNqFzmowLQChzfRbRpsjnFj6Fs71qaw5pof3aaRWab5ZDQEpwbEn2zFwTqYDedAD6",
  "key24": "46Hh7EtpCiXLLYhjaRQ6UYnQVfpnaJpttPREsdHkbF3xiQhLnMhtCNJVmocJ3CKYRaos7GYjn539pECp9T3ihapp",
  "key25": "3S31Bf7cHA2hxQYgNkw7KDsGH6nAWhq3P6qo9mwCWLRgfjev7AxaiRZtMXeZsAmrqFTFzKwDzT6C95b59awgJMt1",
  "key26": "4Z7X6JDZfC2rbqeGTx7epdWkDD3sQ5f87hDworg6qHCw3pP6MBxcwLPUEp42Sg1GURBS2BfEdosXrwLGd6iXbJRh"
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
