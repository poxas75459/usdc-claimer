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
    "3BhsE5CtJSjrPWSaDvHyQy2JG1LWt25y8exU998CWDwM1ffnQTCANVC9vtdXJa471mUdwX5ikya2cb9HY5B7aH1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AASLJtEGuMnaahY4UVsKazSTBdR3xg8YRhFMDexVw1SyEhbkdGyiYVAh1asjiL3Ee74iwrYY2qmsX2mLd9Muuiq",
  "key1": "2CoQx988afBXe2fpVfdjdmrSiyZSzQBR7c8VpLKR4Z1FVxTRkUfPHRUnvzF8XjkvMvo6MQVn6PR9p7s8s7MKnEsE",
  "key2": "63njGzoV6Y1a5MjazuUjRJFw6etjEmNE1FzEevERgBLvFeP6AWJPNJuMcwhNKhGJYjPqHSaNjb4c5CeEgdnL79rk",
  "key3": "2A3he6XDeWnRzv5CTP25oujJ2SztGobTqPdRbPwGbUEtxzRCFBB8qpk9HbkwmxbomrfgL1yfmaP7Z33zB7Q8mKVc",
  "key4": "5PoDpaLMs63xRYh1HdQpXMb89MU2GBuoyUWwvDihno3f2w21L1p9qmzuos3h1qs5Y8toxFpaV3NoTEi3z2n7UkpR",
  "key5": "4i9mo9efJNgodwbJonFLaAZfpf6jQJ2HcD2Za9Zc8BDUKEuvdKmPfGjy3d3VFxCmtqArkZkBMCXMmKsfsdrjBM4F",
  "key6": "5F37Rvk1GaRXhL6XHtPLZoiQse9zTAjq8YHJPMjME74ou8Jx5vc4wJ6DSYQdXRKybB6NcKCaJ4SfaiDA3ek1viLt",
  "key7": "Fq35Fvvb3Xzjn33EMrbg7RyhmEm7qnunTujvop1XmaUJyEwyzeDUeXJxLPocZG8zmwT2eRbhg8aK7oeFu58fnJx",
  "key8": "4TJpLC6TgUdj25xPswk66x6QGEK15H3cwEbmVHS5NA2K5nAmSR6mgJ3BSJX2emCiZ5sa3pNYcxWY5pG5czGARQRb",
  "key9": "5PWkuwdEyMLTEBuisSkeYh6bycGB4N82sLvqL5YYVcbYAz8N249YyTAuo7xHn9B6DEpviPE9mnypRLh8dUJzUsMg",
  "key10": "34PdnrWyadCNr7neLxaj56nDVf2U71cj1yF2EAXprVUFe9gQupvhR3Pznyc9rod9oCZds7ZbyDCZj3B4NswEM5rF",
  "key11": "5uKfZa4XC3FybfNR9DhSDcr5ZCNqZZDWG4QbF8CX25DyED2SThRyAKsE2o9V4QoGbeWkok536GUTE5Fg8mUnTPox",
  "key12": "2yVGr4nyb1dVFioQDEdYxBG2emxBpt2MFKe7na7YKR96WDa9rRD7tDfHwW2A6eHDR7JV4GqrUJZ2c6LoUwerKSM3",
  "key13": "2Sfd8N5QVHmMX7Wg13dLro9czNqbhUCpZeXksnbcbowUJ2obqDg72mj9ukbRTn4FLJJyyrFfYqEE2C1zyHtsWaPk",
  "key14": "4qntNnWTxN9TeHjWUUQ8cSgyx3wE6ie3tJrVhbUUoeiAsPXJxMbR59az6KiLyEkNbBe4a7NjXL2d1uT1sZMTZRkX",
  "key15": "48gaXZv66QK8heqyWTonPakHoSM8dwdWPRPkSgoseLSTzRGq4Jjdc3XqFBepHdxeJVzmQ2qA34SC51g5pdhNp8U",
  "key16": "4oVGY5kqiP3huinwtqhHv5FXjkXzuwiBZwWPywJEr5HYcZTqARPUdzMnwRrgDW6UZtpJsjgpmPiYU4C6rJ3QxA5y",
  "key17": "5GHwTqeyEZyAQ4AxtQj67NJNxYoQgLRcVSP3HK5uhSgRNaZS1X5YdkUsUyiqraz8fpbY693siNc4DxnsJBWzCaY2",
  "key18": "53yRefgFEfX91Mi3VCyBkb1LEs1gErJwJs3vkhBzvn6ht1tiiSYddkThDgxvAG2vCzzaUymrDCM1qHwyW2LjqUV1",
  "key19": "2teGFVaFKuZG8SYSzBCoY51ZLTFFzMFW2VgEtNVJfE9rs4RUAmL3bf7DePp6ig2PHi7AwAGVuwB7ehoK7b3xAYJp",
  "key20": "3eRJVPVUEfCt1fqnad5Sn6r9M3hrQmME6g7ZVaUU9tFRRZK4mTFfBfvxVrutjZnhpV5RxbuuNj7Fkii2CWMoizrF",
  "key21": "fLxcJcvAsMyErLAb8GGKnvozpdxeHAhibtWercNKsjJoFefayWvZztQivsPw6Wq1RoLB5QzQuL6hsZLwmhje1Q5",
  "key22": "3vNvTsMoMyeRg7Q8tn91tmZDsTR5AVXcULa1QDu4aS6cpseMvrTx4ffQV2LRacxJBvMhJfsn8kgPQo4XjCZZNDUa",
  "key23": "3AQ6SAynQSdiM5CyYmafUSMKXubenGffDi6Qijkv5oAs2HVuqdFLzFV66h1wgLyouBFqgseih4eZ72bNXCSkEDp2",
  "key24": "3rPPWjdEACoEQ9RAvwAeJxBMCP8gqCsih81tLvThs7gJBvUdUXqNLQLJwhaKh58NCvQvDd8Xrct4juqM5bHdg8FA",
  "key25": "3L2UU5m9AYugwihojY8yVEmsdsN916z714THwYKrREbB1A37fHJPfFP5T3st9vSnPDd3MMqp9C1txvqZVQaTMTLk"
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
