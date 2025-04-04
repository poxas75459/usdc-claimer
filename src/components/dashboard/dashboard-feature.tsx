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
    "2Q97HDPZGu3Ag6uwcnmPJ84pbzrTNGYSy6briuxgHW3ua2eKWBa9xckJYcyvieauwSvvCcGLmjFLdMdsQ4QuhSdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nuBW8ofdC1pKwRUCoEWp1aUUuNL4PavSiRr8pTNb8GeCMRkvgiVQdAYVbuTdLbNwzUHLLkmWeJcSpNfHdvtpVmR",
  "key1": "2iuB1LTRXdjWsN5WPCHns2KWMVNAfhntQHeZiqxvyXeNcogZUezmoSxyW2oYrRmqPTQe3SSGky5i3Sx5Zumh4iH5",
  "key2": "41dNBy6bxiAh8ZCbF9MJxc3Jp7WDoN6UecBTvnucH67dCrcuwnV6Eiptg8aVERzToiPkh6mn1k845wavsFH5GvPm",
  "key3": "4nKQLs9TpZHZSxY1cRXBqa3eYNXbAuJLyudFWjoFGJYwuYKhyQKfyTmJy6PdvRyaMcfk5GJhnbtQfNE11sHM9ZPz",
  "key4": "44MVTQ9FGcBroZQVWS8qRNiYTExsnaztVqzzCds11VoPmzLpomrsPp3xGM75oWaJuDzsw6voJa3DzMfpsEVayHtj",
  "key5": "5xtJVuZxWBvfmxXBxg6vSxyB4TtRXwfxYAAg8Zj6ZrQQmgZZmB1R65STzz3zRPopjuFAkpyh3zVTvcbTXP2yRmjV",
  "key6": "3vzuC7EWiqSigui4vGY6XkhzaFxfjB1KqbbVqhM2gvsLmSQe53XT74dwkVCffihMSnQ9RnXt1LktSb4HW7G71uTp",
  "key7": "5tCpMgRCUUQ9VE56xXRyAtg1F5zGFdqXg7uadbk2AU27CDRs71wfQATNyWob6HKW7FzbZWUVEwaSzT7icykaAtBf",
  "key8": "3pR2Lahohip5W6ri3xStS4m9EaQ4TjKXr8A2U1LgtD5kbVnqiJnJtNcSjHpg5hswbBaXqWUTer7vASt8cHeqmVu1",
  "key9": "59Zj5jrkyKLarKsykoPaJjxjsCxhY48rYCgXZT22U1rFRYRkPVWv7QufyRoiCi5gLwtbU137v9AffM9UsDuRMWnC",
  "key10": "5gmop7omDAyeGrtrtvGDcV9P57NgvWCWMN4wgPkmYzm1NYiAwKLk3i7TSFyg4wvPLQHsuxB8qkQfL5zxsLVTKa41",
  "key11": "infhr3qaSCfQZQsK7NoXt3qrG6fg131BPp3ZY9Wm7ZLD49upEvGkNNXPzusPLaorbKzY8V5o5x7BG6bZxHCQGdY",
  "key12": "2L7WBQAR8vwiakMe4rWg4MnJyCks23QqpmgEhkv114w9WYU6fSykGe3QrEcXvo8R7gvjtGV95xureTxJND35KxPP",
  "key13": "2o6EBAaKt1EfiPPqusAS4qi3KHPUoWgEvEjJDDcMg8CNerKM7j8W5LhykkguP8Luyki9cprvfqM42G74gdPsBAGd",
  "key14": "5kAFgF8yvNsrBWsfYsqixVfTjitNspkQ8V5yC14pCEKbEgHCazrK2Ae3W6Yq32QhXEi3TBZpjSzGaqZXNYPiA8b3",
  "key15": "3P7zeVRSWvxk3dPmApftjRTjGHemywHHxc59yy6ejMxRoGtnrZ4YuXXTgjLrBwSY4xhyqQjKq28DZ1CC3TpHmRe2",
  "key16": "krMQj4bYZcd1ptfJYkVtx7Myux5rpuRoqSFDsuMQzaE7LUcpXxtLy5hpWXmTDo9tEe4PnVnVGWzWm1zGZKyoARk",
  "key17": "4Z1KdojrCt1MBfCWyopNiLoYVSH9feMJzenWeGj8t8bALJUkeeyYGsKcJ3ikxE4wzhEUQVgFnQz9kuLcaqBtwVkv",
  "key18": "5fDh83CgPd8Lm8A4mWWC1vesSgznbXUq8u95MCGgxxcTxnfdgDH4GANmLtZhMvMxwX7FaE1YjkJ3jNLjgRHNidyV",
  "key19": "3xgr2oKLZ7tM1MooJJrmXyQrRJ3nMswKaUybFWDdq77XjeQxxz3UZrBu3spXNNXudNSYW2djtFmpNpT8rDwMBnT2",
  "key20": "31FdFjvsoctstFUAvv7aYBwbamRyBp5wCsEF1i4jMU4QwDLWWF5xDA1ZSe4hX24i5VENUMhSBYoFV8amxe2jh2xq",
  "key21": "iVvf219qoE6Km6qUW7PobcMc3hwNPU99YwPw5nUD8VSL8um6qbBpNPth4q2JQ9ekPfHxHzd3YianYukmJedVhiw",
  "key22": "5tWZnYSvY7jJ78HKkaZSxb8x1yH9vHMrj5ZVATA933fWzSVp2YLwp9Zx4BvSeYuxbUgMg5kA4HEREAkFYZRBqZXt",
  "key23": "5Wy6WpyVzp8TexDeRjJ2ivFfDz3J2ihUPKU3gp25TnzBrjhAr88yqt1srBqMrv3iqnTaNH2W8rmpnqqrpDQ3XJxm",
  "key24": "2jeuyHbB2qDWUoifTda7gPTzV1dLNcmqw2pcWvtqCvhHsQnjoXxVw62A97ATjmNxN5ff9gfY37171gweEBuJ7EDv",
  "key25": "ypkUDcBEePTW14gUmN4uVnkJUKpfSa6tGDA9hf4wevBLJkuVU2edD4NxaEtGbcqdhc9S9cwQiRuUewXerjHstCZ",
  "key26": "HntdjD81oNDohedihPaVDTCEt3toiFsyN4MCVmnS49oSAxKP2CiUJ75TSaYeooAo1FU8cbgkh8czp1W8axYbGXF",
  "key27": "3rWnrFvrvUk5UjBWKyQo7rhY4Pw9xZAoTb1XAF4zoXeFqGPDnnwRrqDQ3v3bwdJSfSAiYJRRmrMiFu2dVUs71bg5"
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
