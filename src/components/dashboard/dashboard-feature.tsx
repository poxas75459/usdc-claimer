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
    "21Cd6WsuN6ukde2CbLfksnkAWkhnBYtE6VN82Go5j5CN2S4BhoGYeVzkyPdv9pE8A1HbukY57KRTQ6SFhDqTwKoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37w71RRUE9Q9quapNgejRnU9c1SqUtiP3HhpyHL42xs6X2czz9pjiZSDwawPtUrC9LfEYRWSTKUx8PKfXLhkwJQS",
  "key1": "35XBdzXz21GgUoAJi17NHdbTeLvUuYn6yE7VwdnRKMUqnzUCcJqYRknwoVM1qcArdDNNnduaUjQt2ax9Swz3inQC",
  "key2": "r4zCEojarXjVLVHRfrTAUiwkPs7GJo6EMk11f2c3Yz6DykgYAwHFhuNLSFyFWLyBwuGVEG1xusuKt4iEkPTLyh5",
  "key3": "5wwV2bC6FE4n1ittVQS4TR8CrjjUKP4J3pMDZ34teGEwaPMop7Bjn6cPuKrqMXvgozBHFavSarMwXMvA7sNxDftw",
  "key4": "3hCZt68WrU6i28UgzjJUK6MLDm7fappkqduvjzpCLebBK7fqizwvQuwbv5zsTH8oQ9wqUHtpuQxQGXKzzyEnL4Ct",
  "key5": "5M8Grk6ezRC1R5Ebg6mRGZ966Sm4GM2cVHqJhRtoNCEDtHmvgT86vkFMk2YWtnFihJUkrJjsRKWeRFaQuEQXwJ9d",
  "key6": "4wRd7DRrNyvRZwoASGnnZ4sYsEWq9sMbq3ud92XAcYiQMcsG75HgqMCKB8akuSvL4nApWYLcJ2HLnL1ZrE1gEi6h",
  "key7": "5VhBkm7owBVbErq8rsF3vfjx8Kc6fghS4UemCCjSxMXT2R4ydRpUKs95XvgH8z9GtrNscKbfQnVRVDQ6s6jtppDX",
  "key8": "2TQVUpUx2gkYDXi5zs1483cjtnFQHyz6Vg1Cm9uMmzWf8xo7s2Qf4oLrAappZf7co31V24fJB3BbGAwYHwBtD2gR",
  "key9": "4yFEorwnAb66YJZx9T7mjU8ndp2Sn61nXxT4zrVaXGvAG9hAQe5zkq8Y3TGGFKFMuyPv2rqfRXW3TcNfHx6zoooL",
  "key10": "2SMdvP5PrnNuQR2x8SQnDEpYjp3fcpgvXYp9Ypw7jcX1nbS1hyhp5nnMRypJhv8ttN9Kd6cehYhE39S6u7DUj8Db",
  "key11": "5KL3GxJwTdK1YmB9pRyY15A7PS8nZWihphb2yHCWgRqYxj2BD3yvnYpwEJirfkppWWJ6AVTnWMoAwRsyrWCUx1pU",
  "key12": "5hjM6PSNxVYQtrTWLC5n2tjTdMVMhaxcV8i2qbBDJ8kmBjyJiaeGWhaFcqUBJ6rvYgiDG5cdhmguLch9jFywkSKk",
  "key13": "34jMxk5iGhqbj4yc6FtiQ2zca9wKLnLi6YM1XBv1beMsEyojb2MwZPRZD6ZmRXEcvcvG5Fs3ocg6WHe1EWQm1KMg",
  "key14": "4Bs5oTmxxFAZrxoGAdHzrFX3rRVHWps5Ai4E62A5ecYRrUaixR8rZD4uoqy1pnGyoMwmyXVVtNDneavPMsaDhQw",
  "key15": "3Z5AWXfBFNevkxiEMgo4a1gRgAfmQtoruqHD2T7bdZp2oM8i2brJpKonGf4YxkxUCzZgjsya6vt5RcbDUb8f1S1K",
  "key16": "2bJzLHLgZ35jFPYXGDYLJ8QAUQyCLwPNqnzfp293jqXhHzVAq36sQ9T8RFeNeLSQGap2QeS3Hvn7vYPRnJxFo2MP",
  "key17": "AtT6xPuPq9TsaNRJFZib5YcFPks8vqTec6EA8ZjLdAyh8XuK9mDMzuJD2gnzQCXGtvpqobSgTnZDtjqKfqAnCcY",
  "key18": "4w5feXucTCJKRJR9QWMeuYiWsmNsy5gKzjr6VMPds8rjgNqrQwYeruKGfPxfApogC32cv87aP9xS6HJB5jgULLP7",
  "key19": "vBFgYafk2kKksNZrJDqAagWCoZXNXYEJjXHk655jBVWvkF4dCPVokobEQ3bzbg8m68gvYske8RWy3ZicCptNf4m",
  "key20": "5LovNcjf4vspDc4kJk3cJ8TL7QD7cwo6xsjrE2oPpNMNz5xbgLYKNWimYJsEaChRmw35WEJg1mSxtoKdqcfq8THZ",
  "key21": "4dGrrEbh5dLPk9Fdtgtkr99oPojSc6eBDGq7Ff1Cbfi1XPqRLCMj2zzAE1z1uZqdBgUQf1WcT5B6BQuZ4KgUrQYH",
  "key22": "4DwZ9dtUm2qCiP9p836vnnbJJwXNrs6CfaDiJ5gwXJccRE4NwUMPKtF2LUYxeXeyx65Liqpqev47q7dUKDbA2NFk",
  "key23": "2x2siSKhFhCDGSZQMnVpG7b4YUiA9mrWxszwzKFcYwyAvvTyPVZPRcgWDAkTFYy9nixGNRZfDzXwd4ymqoDrZRdn",
  "key24": "3FBsUdSK3D1embcJDUhjFosNThXNLdJ6cy1rrFvBzyRpwXX3xFyvsfM5gjy8JUEUFisR3ENgeZjL1WqdmXTGJMHR",
  "key25": "37jqnPtLer6XtH436vjLEim438BD4YVQmoQ1Fj711xsX5hEbHShsDYquyWjqT6wUcMHoqRcpJMV6DPw6iKUoymnT"
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
