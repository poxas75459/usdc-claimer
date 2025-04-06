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
    "4US2VDZT9Dr2o24YfpmHDyjS33TeKWFzi7dgtc1epRe69KT382En3jHBSNARHUJDiQG2JBuYXbP1uW2qnWwTZXp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54VmMqht8wRwbYU3JCfFmsMcb91B36zacrrNukxkLXP7KP62ptMSVEG9nSThfG8AZdTvCF8CeBsAw9GuKAFRruWD",
  "key1": "4WizLHbH1N48PbiwrBrgVG5erVXFviHvey6ctKEgUGrpwLyk7bEPPN6JbM3RM9VwzDhpQRFPfy63xGd3a3ijkoAs",
  "key2": "3Hmq8tgvqFgsHwGq6KSpMGt4f8J3erKdtJSnzAxXrB6NWJmkTwzF4K9UABtSj5sTTnLy9u5f4efzaQ9EzYbjpG8X",
  "key3": "3FCrX8rojPkihvjDaL6XJEy9aA74Z1NhB8g6Y3m5y3Z3Jzhj9oTH6drvLqrmXDxJAZhQvFNgAE62aK9ttFiUumuV",
  "key4": "L1oxdVeBPemETVJddmpMJWwfVmpLWcxfEcAirg8N4Rkah9SRyPVj4SiaerRYwz5iafiautyxnZYQ5P18MRVJefG",
  "key5": "4RKhryQLyEqGYoQTy8iyfVz7Zc5Hefz3zefncSfkac6bNVgdmusygSD3MCp1M3y8xYwS9dgo3Hs7XHKEyguiJHNg",
  "key6": "25Qa2tfXAJcnj3ALMj3TE8wiAEbLu3ru4VNv7JMMXEzkRaKZMQ3S4dPoiyswtpS5Tw2Vcx12oXS6E3WjYbuZsgdw",
  "key7": "4mitYURbnEhcvEpekJSiX9SNJRoMeeydZi1L8S7nq8sUKmTS8HpxJRszeLhHsbUgVhiJgMee6RfNjNQ7hkTP9GE8",
  "key8": "3TU2A29friXndPdu2P1o6JxgFPDcnQXWo3er8kicxsNAAXARSYahqXMvcAmwz3Wa6bVJcmZoQXorTvmKNaCNtaPz",
  "key9": "3TatvX9cDeTkhisoBpCVJzZPEZRMVs6cKbn4Noi3P4Gbkns1TTPkLU8bag5fN2Bxz6AgzqvfWWy6WGgo7SK3L3Le",
  "key10": "2jX11p2txduGXGPh1P7Qws7TNFRgRnniVo3Qw7ufswkMu6BQnQMHE8g7KChWokiVyqkbq5nTjJQMAyfGwaRa6whs",
  "key11": "57GLBFtKVxzHZ8KJmpiMcGZbpntVZcKUJYUtr2RCpQQDc52Lg6u3s4WZyzdWdfreFVUXnPJxaVgQEg1DtVtfPA2D",
  "key12": "2mKLoP5GP42AhXBa4XmCH5FLdrA9uLjkZUKwU4AQdGfwGrpji87epgWVr8NVhHiqjHDu5zDozvp3kcSbTXDhcu8L",
  "key13": "3ZbfFxsBBdkGng3w8C6UaLRFPeiabGjro72DY575wzjeDmMoYjKMp3q7hZ1PtQgmigoqga8muGhbKTwvssLKNFXV",
  "key14": "5WvKypyHFcpc8nmgvYhg3Za4uLxcpFs2xGSQygEg7WZo8zASeJ8cjzDUumSiVmvKjuZMHMerHZfxDjicefbmZZjm",
  "key15": "3rCaJ48Efdt4LaBkhu3RGY7NjYMoT5A4yLkikHedf3ykTLHCNkTvoy5uP3kMimQjdyCkNT5LiMa1WLUtqT2mg5QK",
  "key16": "3j2hJaysg2R6GXVK9SH9d6ukvUqGr3t9ikyqVyLb8TF1HmRvxbVXp8PGPyQtrhEqYtv13Mp4kS5xQtFUw1NQ3QQ7",
  "key17": "2Wbww6Yv2yRfGPDvWaVun1Vid7pNDcjC5SFFckTvKLrUrqg4cceKmqyJkYQHGExH5CaSPdyi98inBdaajkKbrosv",
  "key18": "5qN7MhWsmfJCbfSnQUaD5EQ7qR1SvFCmn9MFpuyrZonkDYXDVPgDhg6nry8SxE7Z35n88DKsiHPtMkeziuDCDd99",
  "key19": "3HKzu3SpZLTwURuTRKCoZq5bCQUwtM4wGWs9Gwy7MrZacXrYZq9JWpcuLvePSoDg55Dm1HvQCegzzv1TGhCBrVhX",
  "key20": "2F5y6gpSUhSohm5MRkiUYZPwHdKjDgGf4a6PoLxRFe3VqR58rMYs9ysjk3CeTpj1xfA9zKkoG8TAucbc3u1NQkQ2",
  "key21": "4gf2zGFBdjQuUYksdjr9SMhR7XBzoTi1CQwBewXXTEq47Mk8X97BAHYenTHb5Zdax9fuvu761tZUeoxHewArGzDR",
  "key22": "499igGAxrNCL7aoAR69CxKqTscRgEGfok25b7epod8Ng5csM2vEKcLbtHKRJ2wAwfbcPmdSmLTYxw4JaTQSJNtLu",
  "key23": "87mJLkETGmc5evK3kDsWqjSwWRHyHUxKAZPEy9qaPacJ2tPfeoSHTh8ZmWeGWsPtK744aAhdFa9ejGdRpQ9DEkL",
  "key24": "3AWVtGaQX4ifFu9zPMjPjMmq6jQjZnhyDp974MTo8C9bqeXyYaPknRDs7GC8pfciqNY1ipTP8SkY7QyaAxpMH3DV"
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
