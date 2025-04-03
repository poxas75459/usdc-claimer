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
    "4sL1RJxWoanMPHkDzA1Jk7oYnLdJJW1SmAv8f4fkf4CoEDTtbVTzqmW8xuTELs3AkdjPTfbh7zMvvy75dYhck5Wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jiNo2kz8M8ALHxvpqTAgz8jhEts86RvVg7H56rMEt8Gt3ViHqkRsPZogH9bsVSLuZ4Tu4A6U9c2sVeTMqQUg7vy",
  "key1": "3iHjhrigwk1scfXuCvMP1rMa7wXoC9dz4Yh8Ag46V8eaUMXvnhVKQAx4rFvCgHGcWGh9MgZCtJsPgSYP7acFKLiM",
  "key2": "mSzy81UkKWYinckftQJ7voQj9u9tYuxdkY5ZzX9BvscdK35JcMfMWoSkZohVYWtJyAV5M3tSxLfP9qWpKHyaiWP",
  "key3": "4k2RW82bXaD89C3YvtaMGnthaG8uArDjXdorMrhaijmzPSPkXwqTcT1SSoUnzFJXZ4Naqaico2yvUdBu53goMuGY",
  "key4": "5RPiT28j6Vdfukh7yTmZSS7Ny9AZV44DdvDEzJeK4EdMKn4yZZ73KiLs16t7EWAgzDp84CCo1FH8d2pzqWNTHs1Y",
  "key5": "5SSzzgMKuepCB5498LFaWsNS3Cp17RzFiJmATW1vfcS1ZBjq41LokkYLHbhEmFsU9GdQjzNJdYCKD1s2w1Z6TQ5S",
  "key6": "36cwF4JfLe6RHpAYXYKHdPaQb42f7FVvocR8UuMo7NimuKVpB6BsixpuqcwfX4F4W8ViB71t4TwZkoaRwHjUq8wC",
  "key7": "53vyVF6a5xA9srM6YZHcvH7ML3hYKeFCcW8uVfpidjiVXmSNbfiLKkQxf2cuSaeH2xpD2cNJcXhJhU4GoEA1J74R",
  "key8": "3JVWQ7PUFk4rz99Fx4N9e7VSzuVxAM7utnC3ymFYFSc7sunHc2frrGcybJ69CRgfKg6V8hDUfJRuxgW3NwoCCB6f",
  "key9": "4eJZbUoi3Hnqz42VZAjFw1gMTEVDgPna8DWFw7Y6derUsARJZxknE7sJxG6yVzDzNQKzu94WL2uMhP83Vcs3wV1f",
  "key10": "4Ai2YBx1xdgn9qwSvsjcejyzMppuN8b45JSNDU5bTaFNJyeNyVvRGj76aiHRweYEMRZUwMe2kA6EDEbEM416dhCF",
  "key11": "TWpN1pePMQpmQcUuww2tvDQSydEtLrQFrtCApPoommVdyf2g22bjatcVsnHVY8iwTJ8ST7W5kfVDRvXBxL8adoa",
  "key12": "5tXRtEzPfcxUKhnRd3VUr981yspHFzWZfYi9mVSiyRuTUw88apsQQ9oSnmkp7AwZJ88UWCXkWn5rerpfNdYH1ma8",
  "key13": "3Rp7UUDxTx27gPWjrc2U5LgukTK83K8YUW5qNRf53qe73JMkem44wKcipar8uuywqYJD1Hyy6bt1XE5SsZUEPyST",
  "key14": "59pWxGAWzhxwxXP9YMrQXimyvHvJrvD8AZRsAajKo8tEQP6vmDTnGB2gK4YKNUBJ3iw6BcHy74HzuqiSUTjBqaEG",
  "key15": "2s3MZWFzHneFQgKurCNPHkdM6BDmgt6778TfeWggL855zsJ7G5PCRwCncjiYWfr6wsYVPdpvHHkJH25TNKbnJ84Z",
  "key16": "3Lau6AiRmxBEKKiVBdAfMW5ypioAQgTpa3aNr6hd4LTuvaJ59ufXSNH8q54bngwyV9kD83YbiYA7uF6VPyL82RbN",
  "key17": "3f8jZUbJK1s1r2Yu212jvgWuKtmdmtoPzo2N1zuQJc6myVQ5iHWyPFGp8zkiAkBbuekCq4GdVRHKQNZEiSVZv1db",
  "key18": "VH6qcbmx6BrnRTHkgdycbXoTPMfTEUiWw9pc7HYT4A3Px8uBcNDaYjjbdRtVNaX6SmcSAQFHv8HrTu4jTWqwpwe",
  "key19": "3MUsWGNRrBapZFqa6yiseDFUgZCMrCQutKQ2Mywv4PLcpeHwho6PZtVYrY7D2H68YAoUj9zebZQNb7bTgejwZXQG",
  "key20": "hZdSfQMkJ89nRaGL6aWaLBTqmjzuyFj7NbcyjBKiuBMDnYRVp8pTJhUh9xVk4zPQhkSH7di2aPahoMgzjVcKqKy",
  "key21": "54fhfFAQLN2RVMNwaSp8Um7pFCU8ULu5CxrYYeNYgMtFKaSMEEyuDkmfcEYiMnQyqTfCoaseZYs5h1MTy9wEn1UM",
  "key22": "2xR2RrfaEMip5hbdgHKUdkRWH9zZ42DLY7KeuMrTie9ZPmtRa1NdambDxBZudPncBbv4HQC7hptBWwVqWkw2zCaF",
  "key23": "mxLN7gFb1W4kMzKwyBRjqoBADo4ujDP2aoDyBRhfvrhZaKqNHpuUJ8TCeuBrSqK7MSdGweCVnBykDiSfUcVtJMk",
  "key24": "47g7LqQANxjfnuhXaNZcha3CCb3MKPbrMSYjuz9KpvJwgcJEcQ5uAntqp1wEtc5HRmYZq4PoKJtXTedqsLzTe26",
  "key25": "23bjsBKpqEFNB8ZdmFLVvjaLYGi87Ht3My9PXKxFcGG5Cd3UVF5JNDf8gVcyKPGFxMghzWnyLHUNQy7v9B7sVfzZ",
  "key26": "4hmXMmRDqwPiqTMhW4dAirM2wE8JH2SeBYATsMa4bnnRVkPSc54fq1LVggspTGPhfMLX4jfh2g2SU9pmhKqx6NiG",
  "key27": "3T6YY7y7D67byxZ8bSGLyVoqnCyZAbYtEfbaicCq3MCAwTrp1m1fDpPedm5698qqSycF5Wxg8TeXkyzCwkzPwc9S"
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
