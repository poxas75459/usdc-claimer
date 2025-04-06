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
    "3kG6GohiMJKUX5kT2BnjEihSLyp14vv9zH983BrqproZWWsGDLJc215cqskbuFXsHS1RU8tLsy9YDbXhyVDNmYGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CC41Kb2hNWXyWCbMnTxioVyLcQEqrcVYbHNtirboi4QcCTxxg57wR93nUJrQ5tRxq2uyN73CJQ9Hvmk3s6cjRCu",
  "key1": "9Z6PMiinKC2RoJkFmVzcn7pJu2ES59FtTNZ7NzmhYrxWVMafTQdhHk5FC8MB29voSL1NkHKpvs915oYyvRh3bhu",
  "key2": "4vR6yy953RgW5YBW5U2qudVMSqGPyKRhvfA7bvsMP49H6eE1DCNSwhvVQFqbNZ2NYuiqFoHtzQWG5XGZ5EFB9y5y",
  "key3": "5fRBgAi75gJpvRZai3aXgiUJ7nhH6DKMGvCtETQCfnqvkMjsG6DHDN4nePT5wTuYLmVzrnukbX65WwHsDDPtQ6PF",
  "key4": "5TbGeNP4es6zm8YcQ7YmPopn2nyuc11Z1V85Sekd6FB8d9d4RDXWiGytjfJUwB53cBB2TRTViTh1gGCSgTj7bift",
  "key5": "5Wr6nhdrYM7HwqDtF9ygmWNXUPw7bjr2dvbZ9K57vvAxspfWvqfE511D2WbtRtAykT1eAwcwt1AbE9BzaSbA1TMs",
  "key6": "4Jj4eeR69SoV9pFaA1PyYYS74cpGnEYy9tVzeiYbKtanckE2wVPipBj3wBe4Kb49cuKfbkBzPU1xc2E6VhJ1P9xR",
  "key7": "29X4gQWQREDuGihEuXD6f3asgFQQ6NFA19r5j4fP3BbqbeKoQzqCMkYxZVqGyrHyKwWjw9FujVyxTizjVcH1SFkd",
  "key8": "66qikU5LX42yMZ3A1KzsL8nHG12qyGfb7AtFAqsoYPcfEvRZF5bFF2zDMsZahYSnFFmejkmTBMNRosLzyVWfocsS",
  "key9": "3aENDKAikEiniSD7ZVcso56QrTn9QszvWYsF5dEmCr1kh3C5U9DMNHV3XUUv1zdfDhyH5vpg4xfxTnbxAPbWHXzo",
  "key10": "25yUmrhYbcPcnUEtJwsgdKBYpdDQLmMBihFJrNxdQKtFsDuvNpGNoWAChvupiSzLXdpuUaYZgjAEpB2UNui6Kta1",
  "key11": "4uergqak4uGXXULUyczEoxHHsFMLrSBDGpnwHhScExkvgBiB3vXfemgwGCwJx5V9coWrev1g5d6G6Bpssbjz65FU",
  "key12": "36WcMnHUqiBEwTp5XYcV1r7acEY5parDSdgsoKMSKNz15EZzPbondTm9x1t1ygm8pFDiy3FzUF55ybBReVACcB9g",
  "key13": "4oLBX3MGQ2aQFJNhQDoC2vSgu1mrJg5nZYqAAFUn4wpSaZTC6G8sJGqyEb2yybZgMA7BVNiXAiBxfCVZcYCLW31a",
  "key14": "3THGyaMyo7Q7ca9YRcS5krXxv3tYWiBb2f99Y2mU4wXUpYYZi831g8J2oLb5uAJ9TedeKm3ZQpqM3e7DtEVBhUW",
  "key15": "5qdPJ1vhXeC2nbo1KXRd58GUAUDzHie9hA73gg8CAfhkPShVEnZVysTruTVnsMh11bieycGxCeE4Ews5rzLxsXF8",
  "key16": "2ZifqfbNGFtA6a6zoFtWcM8VmEGJCa7686jUZymhELdSLxvMBCz9CEsijs6V6UqoNwJoq3rTKHpT8q4xkunsE5f",
  "key17": "5kjmp5cYP9ARh71GrcGdFYrzMmoENbReLLCjJ3CbHVhik4rS6w8dvQmPR38G2gHGDJW6dnQC1HWw4G1MQY4qAs62",
  "key18": "5jEWPXw38VX8zoibqAW3c7RH4YiZdASBYtozkHSbD2xrxTCL2DAPf8NSBGdRsSNU4NnHkTQTcUK5uBUtaaFXh2ow",
  "key19": "59WEQgGSAfrzox8d6mbkfhYYK6ZHjKnaexcvZAXDF2iWQ3iiykymC3UVy16sVg65Q4Bq4DiQ3BfSMtqwGJqyjH43",
  "key20": "47g8Q8JUChxcdhiLyZ3bpqMzsBhjn2W7uZ22ph31KxZGd9YAWtjhWmBRu7q2ZXWe7YUNJY6DQmLKnKZzdgmdcJpc",
  "key21": "hryDuRzepBABCiCHDafR4xbjzFvUoQf3ARJ89ECreWr5yQ6i3AsUE9y1LZvRN9YxnowFhDpmNVqG6WbLDQG3Ax3",
  "key22": "56k7EwD7qJAod1s3L5NWEzb2HJt3avZ31njddoYbzPXBCCGbyPwAk6avpCbd8fHtiDXSUPvVDCfYoBWvh5UXhFML",
  "key23": "5eUjiZnmv2Bbi1dNiBiV4s2PF6xmkU6iHSoaoAvndTiNFaUgqEj6m7ms3sYJGnqwkMPJ8YZALRjpxJyGGoztXHBS",
  "key24": "4WCAmZhmQ2yWZyWhBGtgV7WXfEoobw21HyY9bdKAFF7nirHEPveXsFQsBvgZWV5SAFU7Hj639FzzQHbhbufRdynp",
  "key25": "2jGgGGbwctei32rDAs1aizPmJ22tEh1AtCxgKt4yNEWqhDgiuYqo5Gmk4UAnfREYnd5t8Zf8bM4tBAdZJJpWpMdZ",
  "key26": "UjYbd7cxGmo1eFtbN1BbwmGtdgCZhzBLJWRPxPiWMb7edm2er75jWQYpJJe5SopXPrWQz8ioo3EFN86c7G4Gd9w",
  "key27": "39LEga5oQt3Mowxb2AYLegSW2hAd8azMmD74m89kCciLUt5ZWkxqrbvLbuo6JnsHxxt3h1es24EYCuQbEaK2sV1o",
  "key28": "46dQ2oSZ3BTvjmd2hV5WoN5PhVmotTsLD6tDhaRXyyVBRqKQfu6qd8QogTFUXhsNqWCtcpifWQ5EKUa5mDRMJodc",
  "key29": "5FZXfVoFPzzuAfgKNd2BpUswwm4fgC2vgMhxze7RgSjCRP4qA2Dcrb826PQm1vqPqXowdTi6BtbnZauguh2YbUMV",
  "key30": "kd6tPNHsHX16ckGXvvNjXADGqcqXy7YWvmT2eaNGyCZ7USD8v8YpdSuQLpLs4B1QabHyacKBSkqj9JQahFcHQfg"
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
