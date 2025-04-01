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
    "4UxETgoh5TczLGNjgdDtGHJD82QxmkKkKVF4Q2RgGXrhDBaiF4Agxq4tAaYdfapCTZYp52jQdxYYJxTkhGCuMXsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C6qamqDjteNWgzTHxtjDKARwmHW37zjDizznB9edFa2M71w9ejpxXKQkvNNTcrri1j3Za786RWcH2fJzJNVKdUr",
  "key1": "G27LLv3yuE6zmmziAgPDiLPUSHnkgCFS3P2eFMZ5YAb3EfcFLbmb182n7pdpbBbTnT8g3YSeKSK4i9oGpigPH5V",
  "key2": "ShACL6JmRbpioWHAYFx9TKYKgt8aqEdM1KkmF9MToXdJBp2uLQRk5hPezb6SCB5jFrEXbV211T7FUtpf8Zt71GQ",
  "key3": "43zrcemiNS1ENUQ9QevvrLAwsHh2fpZSvge4WJfg3Sa9V7jvJXvh4v9mUEzej5imcySz9WEbdW9ZMDSnLKg1sNHk",
  "key4": "5zNDzDDT4bF3WJ8Q4XAW5Gqhj8pCNE7y4mseMXNFVKzUH2GUPTCJpJ3Bg1Q4FpvCPhtXdV2TcUTAaEBoQaHwqsE4",
  "key5": "V7JmjxcEixDVAmJxnwLCPAKF1oSf6NBsGaowHGtRB6nk1orRtVwpvxosQs4gqr5QKgweyjCAkwkJugABXHCqsJY",
  "key6": "5Dghp4Z8AZCot7JFk1LemFLYeFD8RHzUmyU5znBQEz2zdcDTF773ChuRcy83qZX2vCTg7Z4YP2WvJ5u82ayqKyHx",
  "key7": "43hYuZ9RvUafwXdnBxNw7b9bcZWK21VnQyiyoZgC2oWqwNBdGw5pxg5YpLgjKsr3V3hCQVm7xZL9vAYpsASYTwM8",
  "key8": "4r274qQe14YVwoFi7CDbDk4g8a6ruJsiBSMCo6UdmNbabs1nsTCqbiDZVhwcH6csSd3vehnuqP53wTY52tz4AwY4",
  "key9": "e9fU2fYRzxUkgbJ6XZXWdHrvWe8k2tMfjxnr5eFKbLfRcwuWY1LTjNgD4joMmtuLgJxJNwc9LMhjqaGDq7JYCVD",
  "key10": "4YC2DKe6XX6iF6c5TUNkPtYqj2bAt2EzTeEbdA6cgo5qstU2CWZ6moqkcD36MfAos7vtJ2uZzz9hQSpDPKC3fqtR",
  "key11": "33ULgqveSc3Bh8nha2xMoZJ5XDQX6WQtnQR7faX2HAD5UD3RoCUkBY8snShaFRen9iDdGAn5qofm1Eputo7hDvfu",
  "key12": "jrhETGBEqPQ33ViXXfytg4dpxBg4sKSP5rXBn2x366ibigBFtZsxdMeRvo6aZkpLyvRGnnPCYQj86JCsH1AgAqm",
  "key13": "2oJF6NE8ZuaWwKi2dzYN4zAaFAJYqoQbbmjYPdqEMTpEzTydk2unuBqgWVz69tvU9uQnFxvrKorLQpkSWCEn6k8s",
  "key14": "k8Ju2BdaJAJ5ZfXvVLmtAsSkyQJaAdwy54PzE5z3JtcBmdqb9AAjH4G4Ppqsc49tQuA5ZVNoQUKEYwJQgYBcP3Q",
  "key15": "4S9kNr4k3UwKpbYjfDXUaNwJ9q44quPWAEPd1uUGvp7wnwXPTuEEP6zYgE4RipYLjBC3hJnAAD2m4dxXSAMZakn2",
  "key16": "38LsynB6bxnFpqtoxGy9mxwoJqXUeKxv6jrgZxhDbbaTcQvoCdNv9Kfu2ZX21eK5X73iS4cJtzk8uVkv7YvqsbA6",
  "key17": "umVZBZhhw7jwMf5bhj7w1xoX8xezgprQJFu5BL8QCxiEnGwcnnULvoqceMrjSAqnd89LQjQxYN6r5S5uf2GhEDQ",
  "key18": "5NKY8WvrYthURiCw1MgA33xzKsBZ8CV6AguxmfULJKUUGPuFSbYdjL6TmZHo1LMDXMp4tigBW1QqNhRMQXqEDH4p",
  "key19": "3ydubs3kftzNYUXLhC2Ltvzhd1aY6CiFt2scxgCscyMRxF7TZhuPTezER27hUgpJWtzpzt3yjQkWejc78KocQS7v",
  "key20": "cmxWUTJBoE5wvtQnwPKKKk7KiKoXjVmzH1ogrCp8BL7cmgGZiHVsJEvYLFka4PAvtLp9bdP1bXFdt88g99uKtS2",
  "key21": "3dDmeMNaHJUehUjb4MuJ632iTspFQSPfNSVWDmMurbrkYKzGZk2tWD3NLkzNksZRJnBeSPdvvmCkkXVVzgD7JShX",
  "key22": "3r5ZRRqzUvfSivLwa44AXNUd6bLWd9Dni5C2dgk4U8CXinmqKv8Bfkv35x8vkSLfCP8J6rs6Ws82X1hes4KtWqNf",
  "key23": "5kp5bQmEMdKvhZVVNuUZaNVy6VUHVZVzcyvYQbAPJ9QBTM842VFWbEns5jkb4GDzdtsMSsD5rfgRxh2h47XNWPbW",
  "key24": "4fXekzpnQ6YAh8t5ZUX9tKHgXCYdvGkkbwuVUPfQTBEd6BxEQdFGWQAUtHRwSnMopQt8tetNHCEKrAvLGYxodTML",
  "key25": "4p8gdgDsU3pF9HqHWBw7HrAguku2zH6Z3qfh8QnhZvn4dUeJyfeP65otjgsvWYzXBMmGVt2pmqXtXDd6h78TyANy",
  "key26": "2d688nhBxSkiGcmq5SFezvXa2L88MZPPrS4M2PcWRakoHWp7bpAbhYTDZ29NPgUwJPjy9cCh7aq7LVtpLrPmMkjp",
  "key27": "4jiXqiQdqrj1Qwhvg7vp2xmzhaiuUZxmHzttA9n8Wn1xSxgVkkvoQaXC5oAu7aQbZyTGG4LVRLMBcKGWmsqYUttR",
  "key28": "tFNMf8fvrTtgPbF39b3DnZPthwSk15n4cUJew2s1kHbt1eAGyzvNnhvn45hmfs3BfDXnrpFVkWodo8GUUkKZE6N"
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
