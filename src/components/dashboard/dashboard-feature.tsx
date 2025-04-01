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
    "2ZqnY5WF3cqeacZb9ajQXmUAgBsVxKpa3PVJBE5fubv7oey8KwUdvkS1J1PLkNrePHnb45PhFuVNgd7opPv3STwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j9VujoqEtUP9cr6HLTyGsPUjsH2BWLBFxAs11Y6e5E9eBK4FPfuhSeEoJNdHioXKT56S7YJJsw7Bd6yZ4izB9av",
  "key1": "5LWX9CDK55Qw4UFcpTiJeEicWb31S8MqouLubzUjmEgxWfUbxCxfid9AvPzneeZUKd8DiXLVEfaJfdQYb6fXJgZX",
  "key2": "2E21S6xEmXLM3pV6pLtWtoeNHQkF4zNz9zYymPMJfqvooNLoZL8ZtkTg97qSXEzD2XRXo7Zpy24i8HrXVKwQA4ig",
  "key3": "5VRetVCbPR35xuaby4vv7KMtg9Bnw8WadGSoJdLpfvGpiDpc7C77Z2kKdkYGwj7NzJCWhZQQQMGBTjF2FLSZQWhj",
  "key4": "5BUJeaq4ZbyvcmTy9qhLLfLzZGrrGmNdBVREvTvKkh6Lkc8fpQmtpurSyqTRtx7xUMUXuRi97nGsL7wsFy1dqdcL",
  "key5": "2LLsjTXCjaLDHM53g2ekeegsQ1spqW1fWCTBox9RBdkMhSKixdP6nxJgMMjqysaXZUqY8vTGGsThrJJ3e2ZHnR8E",
  "key6": "5o2svFGaysoz8knQ3ygJxyyqi1uy9jHcBrVs6AhVrdCXQTrs6XiWexshcUt8TsE6LaTZP8dM7QL6JVFBTioz9jRe",
  "key7": "3sCvbn6tL1KmdFPTmhp47AMz9ZpoPsa9TT9hdCGCaLwi5StqeMbMe7RhVQYj8aQPn3CermgQHEaR7aMrhqUGA7Bv",
  "key8": "3m7gNK8jLHNWYgK4KcDwPCW69B2TJLmVT9KN9wYaV837HFiN47MuMp6f1krn9EomBKyMNS1AvBgwXXN6mU27QVHd",
  "key9": "4RjSVw1KupQmTJes8BQgmMrVxhRfmY6zRLKGPzMX2reBPLFueq3W81DNTYmhRq9CsV9kQVhbQrfwRGSQoGnwLsBK",
  "key10": "3wSyq7DNpU9yz6LWiwxm1x37iDTm8ob7WzXnW3RVTBy7iDjSMBq64Ft627QuSDSNNRr95tGXZg9mY7aose9gVaiJ",
  "key11": "5BtVy24REvDpu5WZjAmECSqeRUoUevqSUpePKZ5MVy2einHeigqeZBUoJp9ohSC8EwLgaBgoZeTUvY1K8kHTBQ7o",
  "key12": "2Zb8r7CKqLNK9cP4mhYMmsfi9N9dx4bTDFjotv9FZ4A78hBULAm7L9LFeLrp58k8cZhDfn6hK61CBq4ivkFHs6Qt",
  "key13": "4ZRfXNLQdbwjcbfCp87KMVMFGTcDvcQmn4V8XqopMtrzKjRAbnEakmNm39Tog4VhriybXRFPFb3aw82BS1Miryod",
  "key14": "yxzuykfNNT5bkpB7ezbpUGCqSDacfvSX35NT9a2PEfZMwXS9QJq1eqdACW3BiHeqcBs3makRVk1RuotaMKMqpP3",
  "key15": "4Ex4jdUCzyThcVbFSXRb1WGHE4JcBDVx25XTDsjqQX9PqRTmRRoB8Wz6txrTSJyHiXurP9mXVjdwoattdjm18RMF",
  "key16": "5PH9iCPWMN2yqnMCvSjem4cUGBJCUYe1KiQRnhtLH78FNfrgsU5dqUW6SzGyUKT4a6Gdj5sHkMhPAgVE3VpDRxBy",
  "key17": "hzwJbuRGvWDHGz1RzCWHPKaaYT3qfj3PaHDqJGm5svSkjeLZy5LqLFWG9SdWZd3LeAqBoomATJhhJ5RUaaeEscX",
  "key18": "17nyQv1GM1sA6VNT5VzUu25f9vHz5eYnEFjtUKNDdZgFRBznCZg7Fk1RfnGhjvwQDKRSQqkbCz8oWLnpFx7i9ai",
  "key19": "4ySEPV3EbmQrc7mFAkYXRqb7DkwGsQmhRRWdMvmojwNbfGPTRLTknDTpM7c132n2CMurbtvQC2pPX9fKjyCU3gvi",
  "key20": "61whe9Cjsg3RMUyeq8usHUdJuuYpxSB44wLQ5UXMJkL2psBE1G3umyTAAXQhWbwuDFasxS7ZwYieuX5dwCUFcKsJ",
  "key21": "GP8SNPqcsq3Apb9ec1Af1fb1rKw4LjyQ8Zp282dAWdK6PiXZsjoPAfQoXBjPRTBnZeUprXPMvd62MtSoBjXiea5",
  "key22": "6fTLeyqUo3BUu7GURAUPpGcQLL4UTdzjEhg1FbDsNeoqKEZRq3T13nXGZtPoXKpTQ86gvvE75MnHQNVJ4APZegR",
  "key23": "2bkVU4EUtrqTjGfy4gxVDW4tFgbGVTuShGzoXhJSzqx6Lxxr65BQZ1paojjSF8aHqiFxcSVjfm6U6Tzi82DAjSfs",
  "key24": "4EtQH2ttevZZHSeKiR8HAoGDBC5mfN6chrShNDAiHbwDZmK9BvZGwDKBr1DZAhX4tcd8QwFTSNSw55NNPPzkdRxe",
  "key25": "2G9RQVU4iTN3EkStfRvRHx7VtCxLRcsm61U3qFb8Cgfi4bxZuznoMG2wq1AG1UZYaK99sTedyDTJpKEFj1WraTJZ",
  "key26": "2SQxceJrkfuj2kuSXZKUP5dKACfn66cACFSetKniGQiYX1Eegvz3PpuQoepqrbKahakakdWRbC7tm8o8Ts3dAapu",
  "key27": "4aB7PpszMaxTDeQQ3XJNSuZ2GfWn3322AJYSPGt37WwAiFj8df92HVh79y5bJKeukEQ1XN8FD3hNWHt34ubGmnWb",
  "key28": "ZZPZ5cc4fiGXc1K8exec69GiKt72g9ngN7hdnJWNypMht6cKxMQ5uMtbeqTWL7z2ZjhTAyiBbDX56jDgJmaaN2C",
  "key29": "5dcqa8t2xgYWLQD7NBn7qqbzZbCfF9nvf4Hdg9i44KmnpAcRDeKGPfLg5SDnknVwsu26ukgHTp2squh6MsDmqhX"
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
