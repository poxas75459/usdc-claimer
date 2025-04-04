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
    "2JAhcxbx7Nd4C7zZLw9UvyzXKs9ddNgebdBT82j3bkjMb31AtUEVwchFPsvWDrgE7bqCCroGkBMJiw3kmYdDy5Fr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43MJzVMKr6CFFGoqhupMwnPkDbLNkCX9jVREEfntxVuXvpKRUR4X2ovHYxjzMMcQQe8SFi4j2Gd1kaDjL4Bjgms4",
  "key1": "3WcZB9NmyeYUWh44ehpuBon9maNdu9tmZt2DuSMFo6phg8kEP5HVRRuFoJsfdHF4SQpYrUwEjSE4oXWvACZcbHie",
  "key2": "2enFzwXsBj24ifPkHzZPctekaGBnynaj2SeKEgj8ccg1qddW3fDxt5qBAFrbTobTbDaJQiHuK5hyyzKwXBEfJcEb",
  "key3": "48r4Z1t5DBqpZcaGaxhk1Cq9BJgxKd1nXZ4rbAfR5rwk9zYLQLogZPGUiMhsingFByuA2tB1uJXAzz39ux3kVMDS",
  "key4": "tiLif389wbRvVtaqBmW3eNpG4rkux2MyUTvQnMRn5r4kj5HH8gBVjW9ark3UUiwfwGXLaMb7NE9AZUMefpTikFk",
  "key5": "3KMpQu7RqW4q2w4o15hHGEHBDD4TVxeLwJQ12Ptpfmonsd2tUqU22foGGgT1dcCevV4usdd6yEz3iGG81sfdbB9k",
  "key6": "4A5NtpLwxPAd2y3tNSW5vsGRA5LCnzWZPgbdHNSHnZM1ACQx4MSBzGbPbfziGKu6bRWmxjpAwUxcp5AV27f7RWUK",
  "key7": "3mKt3Y9m4BB3MxZZyKixiy6YUBA3DCyfkqEVSHkkwEQ1nHNfMrjuqKuw6fVE9ydvYhRPkMi5fpQ5Cptr5Q1GpJXe",
  "key8": "5b2UQPVjKEp3Fs4CqYQBjppKNtpYmPgmgDN96jRYDvTmdTuTAP3xYsxKdN2novHu5apChuEPE9mxWMKfP53pXBWq",
  "key9": "3pFyGi6A2xQmK8sWvnLgQWs7dPwr8fzoNJAMqScT1pSuYjoxYQ3r4MrEb9Z3SeL83ERniJD36rKKfeFyX2rJTYz2",
  "key10": "5Si4tVUcYtMDQwvxtpaxcC9tq5GXaoSRsT3jiGXMrRtZVoNZtL8uNDH9qxnEL4eySVyJcrHTX9x3qEVaC2MKAjWF",
  "key11": "2VEn418h7bqbxdUTNCSzNC3zzb2a36vjFAWVZ7KepuDuuqqMZWuViqy4Ri1henKVuYQyNdsCbeRwgtf5sPaKyCkT",
  "key12": "4MZrHdSBkXNSy726XCjK3eQzS7GTcWMXEjjCXookpmAkJmbCThfgBuZRFsJzgsosuXfTSeWDeGb4jRPx4ZF1Fu5a",
  "key13": "3CDhN9fTxTcRd7E244jFokGYJawzfdt6jwbdaErfDBJaeVHmLYFLaKSTpNdhaA1jd6RP3zJUAjdvpLkApzNA8y82",
  "key14": "4aA9A9BBSnKCovyMqEnEBpmYVL4b1iy3eTSyB4g3nJ3TmpzEgDMmuWvLzB47DsaNsYEZS82K8RLG1XvBHXAzMLGj",
  "key15": "3pvF9xqJwenKQ8TzZ6Ei7mPpfKpP6Gm8YT5atZFt459QfowhTH4eVMQyexD2YwNpTfdBkQAKXHwxNuiz4Fw9G2VF",
  "key16": "29XoEfgWjGY6F5e4QvpBQCJ8pULWMWd69k4vboqWQN3WDUE55WcMdSRm859ZugJWuBcop35Pz63FViy8KbL77VTU",
  "key17": "3W1Zs8ck8oEmrJ99VdkGAtxwxt8PuLYXbsx8Di9j15EYqRHLG3yyJCfPFsr6X8s6HFNuK6rMaxtNXXHKV4ftJTuP",
  "key18": "CG9efGJkXmnauisniPwmZJQWSn2Cvj1mQ9bu4KsMtaotikFSG6jd9857Fv1GdpRez6XGbTaYYp4zqyFdBhm42BB",
  "key19": "q4rxQCgWdyDt1mZyFK49C7KV1PJKMH7kiFgjUDLAtFmA6tNSQzkapbV2u4eJhFTp8prtr3VJPz2bRngokGUcrB7",
  "key20": "5BYGfN9HJd3PjAR2YJLkYbqZT9sLSHot36X6vonwVNmbzoDxcJUD1o4pKNpLuPpQTzdxbwG5QG7ebgta71dwj1C7",
  "key21": "2tohEzQ4p4FsV45rdzo1kE96Ckx6Me4fYH9JmN6wannANSkgJ5hhrSc7E49mkfP9Dk9GEcemuCmr6KwhZbSBYhdB",
  "key22": "5zVByq5fpm3Tc385BtHYKRjFRv6g566kFLWnWjExde5EBjLTh5YW5EbAWkDrAp13wxprwwFL1t4ocmCZPHzBct2z",
  "key23": "ZVieNwmdsCmCkEovZu5RVJ4YTZLJFhxYjFC8Me5LeNN5LgH3jEbXNLrrSu1s5tJw7n3GL4y6ctY7xpjmnhKoj1P",
  "key24": "4HKxsHWN1inaduoW8uGysK2tEizsy8j8jockAtJvS6771fwLrsHVdZGHPLPhtGymJP9qUBJrjwhSTGprniYxFzjK",
  "key25": "wArDQTxyn488N3dtafvKWAkB4HQxGqECoJuLhkhzpqDc26kXvxEY4WpnNVD2mbUkWL3NFE7AaoKWEahVWTjAoqB",
  "key26": "ExBQDEjJXZbpYMoHUTcGV5gijkRXreUm69XUD8Be6BGFBJbkNxHRaspHkDexqqFBYcAYTZXMCumgCgqLT47in3S"
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
