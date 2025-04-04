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
    "32UQiufK66oQ1k1zq6bD1MHXUXtaTAVs54n8vYpM1Q9DUtra1Y8ANPiwPcs6CCGrCsnAbWHzUkGHr9XbM7gDdGSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mCJfRnAUXPCsCHrba9XwkWBcmsjN6hF3qbbsu8dZj8RsnEa2MTSdszFP4jTa26Y3J5nCeKjfLhTKhrpgQszPsRh",
  "key1": "3Dkb8TQZZWyFyy7QhHkDe2JW8z6Ws3GRHREKXo5uZJndSoafRTHmzKQHq7pZfaLNx3a7WSKS9xqh2NhQE6wRucyD",
  "key2": "G16vx9DhsW8S92fw8mLvVohwcxHibBaCqdbdHRvVqZDQRsmz67ECcbQqAeAEH9zBYRABGgwYEqxvJYY6v9m79tm",
  "key3": "4M6eYjfs5sPMdkj5fQUnfp1DE2RAb72Z7hzmLmdUtFFShPMzfjBbRyJMn79UN1tXZfsjyehRoxABntYuairAMvuy",
  "key4": "2fF74yrcvhq27reL4Z6eYcq5afhqXTYPqh9UVKx5Ay5CDc7AkhSKLWrkZarEm2eDKx6W47BsZKiFqpfULBDNeXoZ",
  "key5": "59nS5UqjzLm74rUm4eqg7KPpDYYW2MoraKEN55ZDLjZtsSiVP5d9FntZYVcytcgabFafDreYWYccZBpc4NYZvgGW",
  "key6": "4oewUKh5cvxtSUA8xs8cAm8sMPFT5aZJAi7i7tNv7Si13EhBBNNpvj23r6JenWXKodTBM4R4RYsabDCwUfWZJf23",
  "key7": "2FNxMxMERb5bsYL1bEhowa9c9ZxAhCjKyKqycj2wVmNoUQamxxcTHNnNGMgxMA2F9G4JxonCVJGC3Yojc4SpuAhR",
  "key8": "4SDrRyu4BPg7JL1qcCz4SZecmYH9M2Asr4o8Shd5A5oT1fV4xEkDeB3NJFuFFDzeDVn66nhr1qeRCpgijexEnirv",
  "key9": "55LSLRhYJJUJwViM7pV4VHy9BSb2Any9Q4y8u7sP4X5Cst1qZrQ2EuT7D5FWafpXnHaG9ZP54ypAuLiBPTqcPsWk",
  "key10": "3tFu1pc4icWtJmyrgRhPCS18gHrDM3nxvaG1hsSjDwLumJ3EPsJMU1d5EoU6LbCBaBnR5emYpRCBaiPBqeb5FPXE",
  "key11": "2k59Qe9Utq6DBN76eVeXoLQ33Tuy5JvnSnNr6y3hXAf5dTM6nCKAwfQxnmtidLS2H9oX6pR9KQ7sz7Sk8df61QcQ",
  "key12": "4UXXaa4mzdMN5nRE6UgxRPcgttfBcCJqfCYAuiTWZn5HrSr2sYXYnsj69HcyKkHHc4QnaDQAzP5A9XPQrpraeXMZ",
  "key13": "218uaG4WoyK2o2cbXPWKBHymDWfZoHA7PgpP52xsvdeBumbqM6pJ89SzqYHA4eCU4i9DvQWCCFghvW6BfXCyhbig",
  "key14": "4i5gqwCsXAtGnpYnVyUvWrt9yQBa997nj4cvFrpuT3LaS5uJ8S87XrS3PpDfCMMqAR6M2MkWm3qHo4gVJuxuYLqp",
  "key15": "2FBPXgv8w6MFqTLtsraD2JyP6HTHHG12v8TgcEdEAhT1rb7K62GkQe2NNAtG3BDLEAPrEhwFn4jVDwUTRR2x41kv",
  "key16": "pzcbgokYfrpuETaU2EMHCa7AH5kS93PbESZheqqLZnCE3M7uV2qye9BuTM33stM5tAGDswrrDhiZd4kjdjoeb7F",
  "key17": "UibiEK5DfmHazGXvSPZRu7jgTkYZamidd7wZWue8x9qKf1WfjoN9fUuMah93jPh67UWWoBUJ2VVDQaPtLiRg1Sj",
  "key18": "kEbgqA11XGFLo2QDoLPiKRr1ucLdzkEtegSA6GtPhD6eUjmEfTfnG4R21w2VRirCocGddvkYpnQaGmuicaAXQgm",
  "key19": "46KmsRM7766peFm8jxekdR6Y5Gm4NjJ5SbHCajF2TBfWLV5ErejTwfp2t6xgf68VPmBrtXsF9jFr9n7oRiK7cjiu",
  "key20": "DGucaQCiEs7hwvr3WmwLYaMorZgNwCZ9yocEsiMGVqdSE5criHJ9h6eCGvbdGqUyC4zaJSMJ9WneYpP4uXbgZY1",
  "key21": "3amWz773R1CGXXRSXh2NsToAMQz4HqM4bEMc4RmGwjUQGXgQ9dp7udf8Fn31pc2LmG5MPa7mq7ADYuseUmXdWTbj",
  "key22": "3ouMixhMzykRKi47n6jK9LSh3kDPxycGSNLaE9RnwroU2J9tKHZghdV7pucxCZQzSeSnzJL8eS8wAj175zBEUEtP",
  "key23": "Fud1REXLh39sdxuEyYAwsrgBh5aRH6BfWEfGiQnBnZNPpmoYQEsciV8SZif3FDWq3x6wxVVRhtsPBdMcXQae3Fm",
  "key24": "4qBWzPgZuDEBicgovEe3y82SGkdRQVETu1mgpQEvbsHCFT9YF7BvkpyBe1MtPFGVq9ZumsZw9EUgnM8yCZkxAWzC",
  "key25": "hL8i46A5CN2kmnmNPDKtUZB5J4HqRFawDesR1Fg4kTqymtBXwj5CpAMYFJ1TdMY3cWHcJuspTLpj5KdivQQdmDd",
  "key26": "4HAKh7uEB2LKGTrbJwPgtBuQzApbyoXVkQF3QEasjMeJ5hpiXVtm2ZYDsbj26YrGEfkCBAjw56q8xd1HvnfjqAQs",
  "key27": "341YUbu53aCF386ssh7KDCzxnDHqG7LjzTWZnTNzHFuXEUUXtUv5hfULKNSiK81Z82pGdXQTbbKkkCRW9JrgbpY3",
  "key28": "38Li5mSTWjeUMYfV2oxbNMRirHSyH1iZe6aAhsYqqWLRZjQuqAHYNF1q5MuqbU8qP85wFwkjdSN2ssDUU1LLtWjh",
  "key29": "5eqgSR3azQXzm6W2ZfJ8CDk5aQBmCPucyUxJMvQF57zEo2EPQNBHqPETX44Pqj5qXWcLr8nk6sjArQNqAbQWovRb",
  "key30": "26fimm5C7dPDZhUzmZ9EhjBPBUMB5CPtXXWGcMQieXv1kfoARLHSmm9KgpbYmPiQHbkc39BMpdQ6WLjRR95ZwH2q",
  "key31": "3G6Stf8fXUBMWjyR1yjuW2XFFnNGh4Mz6fNErsHaJnaXqtn62xfNcGXb2L7KBHSiZHzENnRx8hVTjGcDty5AHy4Q",
  "key32": "4AjioeTSRF9xAJWa4P3AkL2gNgeNiZXAaC5FTjftdYdmYi7LDtjBcKaygbpnSALaMKcg9K5VHAHGHRP8DaRSTe6E"
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
