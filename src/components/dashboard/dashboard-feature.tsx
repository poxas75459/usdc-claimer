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
    "zbppLdfFsq17Cb4TCJURUi7qzFK7uZVLP5uFkV5pGqjmwZwG2vXbkzBA3s1p2tqAE315nk93tyCu2GCaDnADwAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vWXQPqAYbL91s2BuDnhqYmzBC1dZYgMJhSg3HPoccbV1Jx4ZiPuZWJXcQZZgdxDdfG7Egdw269guKEwqm15vnSi",
  "key1": "578FSSHtfhFpRMMV5STAfGWZNniLjSQWKqpBxKhyTFZoKwnVEbCSnF3NcT8ivsKANtQ8WJWkGJrCxM9kYxXD2PTQ",
  "key2": "23Ken3F3JTkaLJFHetQjc95k573KPBV3qANcatR8FxM6DZVnAFY6sWwDjshyssUTdZMy9twvkojMpQutPCVRXNn9",
  "key3": "4giy1HM39GvGuMKzygM9hTQPnDk4KLBEF5V4vKXt957vw8xutBdvAUMoKsApKKdgwZC1ZaosiSMxGDyZqhycmvFV",
  "key4": "4eU58g3wBXSkym1nurGLeN8fAvF7e7eL84VKYB8mEbjutS6BdiNuzRwjc5AdS7RJieMUVtn1Z6MvE7YQumzN7ruG",
  "key5": "3tEDfzDLwbTrR86oHY8ic3BHPWmMmqmRUfYVN4EJM2RWFC78dW4EewoowTvKMgiC2tYMcUN8f6cSxTxgztFkiqig",
  "key6": "4q6BNFtg9pogdNWXeyMK7f7mUBZMAgWxuuwA6icdxbeUdBT422QjSPRPxxmwtFir7XVJgL38CCdgw7PDPXuMQuWQ",
  "key7": "63fASGoJYNDG3L5HuxNn77uNUUy2CYPQy8ZtwUWpJv6vAsnBrhmfTngDnHYt7qKycZN9wHzcS62UgxFQudpWMRLk",
  "key8": "3jbHkPCxLyFg6jQ8MZj4v2xXVjXjibCTnW2SnfaYghMQZRBzrPzkxHwHJKhtmUH9zoLMASDUnmQjsHwsSa8v1B6p",
  "key9": "5pS9kTXuHETYsDoeoL5uNBQ7TqS6R2GhckJXyjfLMwqmmpEW7rgqzdULM2EEnQtZdyXpdELjQRHkPD8TEyZJL9dq",
  "key10": "4hAqba9Bg8DmpSNKkf2A6toNPRQaQ23necyJE3pBiGKTxL16pNBjTwjL7AXNTTdireHf57vMmtkaCgRatb6hSMUa",
  "key11": "4XNDFSJ1kRKDERQBaBtMBc79oTmpftZfSYfVEegZhBbKmkU7AHm2jXfbYN5ttuHkGRMwH1Vh2W1Tp5e6fKbqmcPf",
  "key12": "3iPbocC1FnmizXapdMNF6AenNELsde99K44QCdQqjyPPM4Z8iYR1NTqj87Ms4fmvSQ56xq6zFMt6RbDwfZ5Xjj9Q",
  "key13": "5a6gz9faqb8y9bR9a8PieLE5hLhszkQH7fVDhgcUEUKeSJdmPpDv9bH2KPZRTu8kyXRsaNiDgZiFQomjQyPECvvf",
  "key14": "X69yB2yNpr3BJJss1SCZ3tCeEpHWnufLfMTnpCxdjGL9JUBbg5o1EBpVvaN1UahjGJFssdVKqzExkeh6crZ863L",
  "key15": "5UeM5FZbaV8VwNAiT81CwtWhDCzwXgGPysJvCTsaPvhbSo3TCEe3PuxCTY4eLdRqCutC6q3akP6HXgfyN4NDYcBJ",
  "key16": "Ki3FUoS2G7MRmBE4SUCRnL3ogWK9XKFbHa1gM1T8V36qhDsiHbic9sc2Rg9RFUovS26rAK7aAY9YMrJoQkDqKQN",
  "key17": "CWntT5w2RGcUoDXGEbKy9wgKNmfQN2wbioiG5H9X6NJTCGvBfdXPbA8xsSvwHHYpK5VrYJcvCxEoi4QRoegMJjh",
  "key18": "2FjxTtz8vD3foxcLqzM4ZeLYiy49GDV2vBM7UAsVDvFMZ8ijuKn9Z7YXv1NN9adYE3X3n2oVPJ92WxqtpYKSYJum",
  "key19": "4uu6RrVgnAo6AghCa5TryEGWrmwmQki92gZ7xDbm8voUGvQbM93twaRyt6HotCYJrReGB9c28ihqVayrxFYJBFa6",
  "key20": "F2SysR3xYy7NFojLdwWV4BTsthGEV4rbS6TohgbzKhB4fPVUMZdcvKVyehd1bZXqqvrStRjDZzHR9DsYWJobjTT",
  "key21": "36qnAvHxmGxq6g4dVAgKdaiPQNwvfrvZTS8GxFGbHbYVdqEURm9Ee8gcjJ7r6nqHjbVouBF33K4jWB9kQDH48xsR",
  "key22": "CZzYcyq7jnJWdbs8Wk1zfjJqp6vgffJ7GM5Chx4Aqpmwza9g35dUi92i9VuJg7Tv1iWxoVmXifxe3qeNCT99VRS",
  "key23": "5tyMfNMvAjB3eVjtS7PAVTcfLzDMMQu8zXdY4LcmFa5AFshSSvUcydBgiX7MH2oErGhdN8LC1gPjgeckYZu89S61",
  "key24": "nVf5eWPURSbzgXWiC32QYcKUWuvNVGjsbBjdSbtyXf1JCbQcpbWEjwws8zC32m1kpQdLvBgDTUj6UmUPFvu3EZT"
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
