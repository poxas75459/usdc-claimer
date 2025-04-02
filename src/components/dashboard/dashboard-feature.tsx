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
    "57JvsBJzR8B4JaZFFFp1fiACC2SYh9x71uScFVULsBu6o4tCj9C54AGzkZbW7zDX7BfHZtsMvVj85FZgAnDZo3Ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4piZh2ysCjcdkU2DCkv6Y3Vc6R4YdZtz6iRbFkMJJyNM1srzoWi8yqK64oVb1e3b5kFaS8tPPzitkQWh9gwkNQbY",
  "key1": "56282XjofRiVumrxZpxMQdHyQjGUmc4hMYkEPHvVqKf2NEboJFEx7UTcmoZsVaRMeM2F7hq5rWZT9M1twEVwzmun",
  "key2": "kykJCxTpUEzPitYvzvWnb9qXUgKw6ebQVhduPnoTteGtMG3MPnVVXPdbSX2bayNt3kujSrgnehWhGJPCRUtCJL6",
  "key3": "4u5r5Efebc26Skv7vKLouoPLzYpm7NEnV1gGUfnYQB5CiKrUYWWHSsNpwTcZjgrHye9ZSds7LMNc2t3xixhRHfyh",
  "key4": "4BwiErMzEzqn1k97gxUGvWhzcze4KBdzRDMFeb9N5ktJkyzSKGTLAc8n9nfro31GK3JdHRmtEA4gM8m9mc4yHQUz",
  "key5": "3gf7BwQcvbB7g8B5MX9Pqqme23mr8JnGgGtKMhkKa9d9XmzqC8GJJU4ZWnZdSfUcoUoKHVe661h8HCQkDtHfuMJ",
  "key6": "2hEjf8XDzk27cpZ2cksoQVdS6LEsDQkgurKw1P9CEgyS4pHh1Km5p5uNnQYamkCP1TwqSZtrh6CdeKhV523UD15Q",
  "key7": "5kXQyaFGJYpsi4cC2tEobHVCdEsgBoVwsSh5vB67XJp1zDvdugz1LcXhjyATYQb3tDPCEuCZmkaGnf4Xpn7KxreQ",
  "key8": "k4yZXdisHzs27ZiDYwD5koNCgUxL35jDfvqDakMKzvbHCqsCv7wrw4Ks3Z1ZmjQRnjCGmEimfhgMjXpgkcHzcsA",
  "key9": "2TQN33frFQhYnfEtBhw3NtQpjMQmUo2urge8TAczoYGQeXtJtRr7LZpt4SJzhsvGhkmvczS4aYhDC5frXMbjP9LS",
  "key10": "3XSyVAwjrVm5bjBS5DmDpBEVdgMw74aTsa7FAhigTGebRpauwYBKk9sdsem6F9aTnLzXY9ovdoTauVV1ASq82a5L",
  "key11": "23zB6hZYbPtLxLpzz926giE3qQSSCcrJZYHWSbUwNhzY7GNtE7WfFe2UC7fjf4cRYuTgdmo5SyBSbNs7r7W2eRUh",
  "key12": "4XGUX4JutTgKwxBqMPNQiLUBZdXe4WyfZRw5qmjvq8oLe6o2Nue51cmW2quNzwQKAKWR4HnrpoHSXFgRE4d9ymJf",
  "key13": "nyCvEZkfL9wYKyahGMvcUqnGCwyWhK4hifkZB4sL3FEXYc7tpb8R63guiNTor8fDX9bUfe4yXJKv4TT88z8nTty",
  "key14": "28fm4sccYJo7fB5BZZvpwJhMTHEwp5CUzFffhtGMpAskRHrbXZyqphXqXBEaVJCHz8HrYqRMGyj1Eyr1tr3ieqMM",
  "key15": "4KvLLYAM4Uv8ht7zopjzK5FAWUDfgQzp5rRrewGiNkD8HZE896dJoeXhxC1HHmv5mY7CHiwh6d6xSnKbhP5HzeF1",
  "key16": "3gEtn5DtN8U3NM1hUrqosLpgmM73VNsShWjragRjp1CtpPJi6p39PSx5VUUJ8iknY4K6s4VU35FyBunxXXgeeDUW",
  "key17": "37hg2cEpKSyaXS56SLf4UTgHTMNWzzTzPpoHJaz2mMX7UWWMGGpitCwrixhyvxtM5dZLwut7AkZ8LZZtqZEDV9z2",
  "key18": "5gHv3b4f9pfCLv4JvpDwAKAyWLuzFf7MBndw1QGDmvYkabHq8wRpHKCxygkuWqqbgXwwwL9KWUbZm5ncXU4rXXLc",
  "key19": "4XTzhphcxH7aEoZyM3ncC43TP9FKxFq4Ht2TETdY9E3nawptSAf8GSPkTCM9BDvNv8g4SEWNzPbY742AShDSsAno",
  "key20": "2BzvZTDQw4YtyU2475HpDxMRBDHo7PjhcQbxWfACMHSZfYJYnrvPS2RdmagRNscVcARrUnUaWQrFaaxUARVkmw7x",
  "key21": "2qWwvJr3ZhrsttVpNLvqYc5eKngFYgU62Ku8E4YiXm3SMFN4xGxwukVz33g6KHkWKo2NJsPDXkzoD1YceEW3yPAN",
  "key22": "fGYU9kLMfDfd9PEiZkWEZgq1kVC4Rh5pXB3zBd3KTDMhiq3kPCjsggRVA4UR4A9CgAzKeUN7pLX5XhFRznvYaRs",
  "key23": "2JpKuMfW897sv3upWLN7i9CNTcztP1bt4Goi1tTkq7CPHFJt65S85J2RTnjpzU5d3zjZPcCwJHxNRb8XxDTqmPqU",
  "key24": "5DsS2FcJNPfcPDHRhK93KmYeNi7w3Y4Uxxe8mPdnht52M9R7ceD5DvgYWw3SXqNHUDXdxMHZqKhoD3fFgVuLmofx",
  "key25": "4GDyE68DKQd3J4viFRNiX2Q2x1ooqnUgMyXNni4LAgEAGBbPJrgNsJpMuxqSN1QDak2n8ED4MLtKXyi54dznQ7PQ",
  "key26": "3VBrdVVubhpVMUxdEUbGqo5djXt8ayTUnn8qakyx7vVwoGUR5apdGvjWgfPAG1XBVX5rFLJFKepYs5rcWcc95eMZ",
  "key27": "2TdsB97wTXiiFMGnwM3GBgJKQ6FjJCqnd9s8cX2No3oCPKadPScLPsBt9Rue9fEtwudkG1ti2uzPkHgJNBM164JN",
  "key28": "3rYjS4RXCmNFGtxw5pi1Q1G9PjN64yTkbkRQi7AvU8pqt6ViUr4pz6ZUtJL5A9FnhqkJgodr5m4wzPpjEbKbq2Dv",
  "key29": "52VVEYTAVRXDvzR9KQ3r5be2MyXZNTvwBS4uj9uwbJ8UGbMJGbCYCsdWQZ6RbqLfKou1k8KLvnkycibU2PkGLGEk",
  "key30": "2Y9aAV5DpAXQsYmUHnQEyknHDMvdHMuCaLnj4c3uNPqccdBgbqfUq487MMHXVuTavaFSkrGVvdFyjgF9US5T3dq7",
  "key31": "rqUYAg1Z7NYHTcK57m8FxX7XC4oWzaXt7vvMj6apmd6p8vCD5qJJEhnf8HG75LWtkCcau3cJnGTK4PfamqS7hwQ",
  "key32": "5u5TBqshyWmo6CiHtbVLkSu9zXZe3g81NQsnDe7ik18vXTS3STWLndzPybwmSb7FRqeGewAsKwbZi7VBegU1maK3"
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
