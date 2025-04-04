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
    "2zoef5Mf6TeaJagg7m2Zehp1iVi2MXgL99jE358uXm5taQe3reZXJsR5256bKTcHg7gHh77TnkQ1qrV82f79rTua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kt5m64UEzeRzBnN7xGDgC8VGCtsjKeaCacaMuRWZti5qwFJoSmWfwrm7AtBTtL5xBCzETEoAvoqUSFSWCGteotb",
  "key1": "2iyfxvoDTHQKvizKD3zFrBnJ2JDRiBre6jT7gyh4sSHYQ51aNbargMumbhFsQ41sL3oKWL5ZjqgDBTxd4zpLrS4",
  "key2": "48sNnsCJUfMttbFc3jR3BYVNAynpjAcoqWNDtMjGz6E6hDyFe5RDBCfq2GzXdMx2bMqTRpbf1r9J8zK2RWwFPKHx",
  "key3": "2vfXvXQusytRanYTybFFsQ4EudstkjDmTq3zP33ex6gKYFdjgHi48iEXHCetExNCJjmGuV79iejR2VDuSYBC9kXW",
  "key4": "2ezdiiD9vjZGmbY8sd5N2uXzD5P3XDzmxJFHGgjfJNGPbPf86SuZ128M8XV8LiatGxUYsqDe32BL15zWbaBSpJAy",
  "key5": "5KTYKtR72eatoxqrVGQ9JdUG3a3ncAYUoYSw4ay76i1FAudYox7Bpt7FABiiNKLFMZRNiUxYtx77kMqthUB6dSvv",
  "key6": "5PjfEqTVCTvkgPzn38aLHDD5BWq8R23RCUJhUB49qMVogkTqhmw8frXjjezKGBiEJREVryvf5W3oDU9jSLZWf7xe",
  "key7": "2r3PsqzrKv5gVcVLpDosCJsLKkbgXFBsbRjtz1vXEYZjGVjpWPTwuZqJ2RHPrghGpbkW79vVwqBwhF1YV7DUPAVo",
  "key8": "5isnicPZKG1nkQBzEauvwePVXtooA7dxYvVUUHp5BiNLDfyhEzmCcPonWwdbfiTZjyrDa24M8j4d7VGtURwXroaM",
  "key9": "2ZXm96efm8YbQzvXes5DQDK9FFSj6iohzNnV6mRC9F1zm79tTxNnrgjma7jVeg2JyA45Y7eQsXYHLgvHXpMcDYW",
  "key10": "2K9o9X1pzUtJ7moHJtp7rFXWxWiRMS8AW2JezhQxV85pgiDotD7Ntk8hvUXFTwU3M9PwRD8s7R5XQoGUYR4Tivmb",
  "key11": "4ZYoMZfy3STYXpkmYNszeghojaEZFCH9tBeCjJ7nR2ufMQynoo5VqA9uawA7kWgZ5p389HF5oP3W4Na1DEZKvpLi",
  "key12": "5zhBQ8GbXebU7Vy5Ad4JQQdNQZNxkokJGSMeECzrEoFQzzmtDBcuchfQUnmxKTuAyyRK19HQfxCGUy16LDdXJLYB",
  "key13": "2dtiQtnoYZk4h12rXKzWXdqCEKGfdYV1Xg48rHR6u7fzegb9HHkBKYniDUHNrw4UZT4dLzMaG4z92YCHTxqTK8MH",
  "key14": "E3rY6P2phkrxYHSmsJaRqMXfKgMXdmc5LRPef158gK6dr5vnEGnHvWMPeZUqGeXkbU87i2MFZnjuK9wjM6uXp93",
  "key15": "3BWsDMZXVKHS3ZhviHwvL4vByE6SZ6xv31MqeeciNr1CoqJnvg9T5wQfdFe8hC6Re3HM5zg7JWcjbExF47JoUnHX",
  "key16": "5yJzxgWZ8qgHonFwGm3yCqP7zGi4zV2dpvckAu8DE3oYWDvXapQHxv4XjRE85v6pAWiFoJkvDb29GLRDyq366gY9",
  "key17": "2HcswJKqAdNSNLTrLExcED6cvuWZauSwozy88ZgN4iUC8YHL5saELpJGwzmnErDBVxFXQ6pPCpkZngvfFb7B2S8r",
  "key18": "2FRUMrDxyYRw6P8tjivm71SJmKe4LdKYAMqdJu6iuLoK3JhqwAPADQxnMYPVdxMYQ4etasyPcYnR9NzF5NPoBEUh",
  "key19": "7kh62wJe1DaDdb438jgfxCC2qH9RzvfrzLsoDJqDFDbxH8WyhPqN3BBQEEknAXDk9SSJ5ydD8P4c7TSuvZnyiTo",
  "key20": "2ohgsErdyNqCo7N6YHUDcyLDrfZWMj6qNykUevE6g7mwMBmiykaJQtA9vvv6rGQZ1FQv21Vzzypar9PuadH1ggVu",
  "key21": "bgKKDEo3mPkAaREoGurCxq8DCck2ZiDkzR3e69a2L3XvwLkWX4ZiaLPxUuNqKhBPTq3rbrC9WHedZ5tkRyaFLS8",
  "key22": "2e4g2P2bbqvxVPrZtYYhowPLqYFXoyBNnNnKsZegpfCBVfiNSznAMdLJNyBKuaviUWFTEUY2n9mvma4fiwELRCcU",
  "key23": "4C48ukMqvehvmfMnPcfnmhydGAC26AbVQ87p25BRqV6oq6cumJ8eaoSYPEvjDitVKqnB4vn3ZUUk2GA77goL5wW6",
  "key24": "4PvKQmUe3zr9iVo6AG1fbjTvGJtHEPzWXmDRwitutWp4sZC9EBJP4WczsvPunbqa6UbYmj1njtPfZXjz1X458MUU",
  "key25": "47m8hiKXojEMyeLWmR385GMRvFTVLA1x5x7BZ3mvSEdjZUF9aQnVTJeLjw5t3xanYHb5gVBpuQ1q5uCsTnmjx3YG",
  "key26": "4QEkXKi64qra2xknfrhH7w5MGggc2jAkM4xCxweto5VwUpMQRq1fKDqk96yQ5CPBpqm5rggwWEeT7B2xaN1PpZRy",
  "key27": "3eGK7otfvd3a3rzMdvgpTLmu9tytuiRURu4BMoPwF3Gt4V9qKk3JYdHtN2TMbcv9UuShpwcj3n7kupJM9RQJv443",
  "key28": "4JpjWyk7PafJ1BEsRrwctVfswjbTY2HX6vGGjsJLFT7FYGb57grUADCGfBriAidDi3CdHbFsZRT9vdmi538FU7xC",
  "key29": "GMZpn7FhHXs8DVudXPn5uhCMGD3gKo1AiDzT63R839J8ZnznV6HQLmgdvvFuWL7ajRN1vicMY6vQ2DrQEzLhQiS",
  "key30": "5Kr79tByWwm4rDn3h5BASRPLhT6XAiXxiKwsu6MM7dV2S29SF8u8GiKo92qHSAWfzjxvF7SqThe4FjgEr51kQEjP",
  "key31": "2A8z6zka4MwP6qPdcURfYTeNS81RQkbB2yew5PWdxfXadjYLnvyThdSQWJEn9uwkavCbHapLFPYgzDjoLkk6A5mF",
  "key32": "2adGSvJUERPP3dC7nQ3jLkTvASfCX9ZcGa2BaTNXSfUhWxAViLBWzJ1f2hyoUJPEKvGXKkS1J8zZAmXSJP6B2ALW",
  "key33": "4fSrKjC4Qxfyyxc4XeYgqX9vjebFjvuGMEAaqzxfiA6xzoxiiLDPJT73gqqrfA4RpXH46dfJ2SXNkTx2b6k68yob",
  "key34": "56bgcDim2VSGn2kjYzZhZ2hXV63RstEDNoWeB3oPqSgGum1SyrULuBa4HmfGY2Bgc9QuxRDiZ9U1mwU5uvPmfxVe",
  "key35": "4E4QwnEvMRz94g6ao4EvhTsHUSV7nyjgsZ7wGyRuJwP2apq3mXNs2T3NzGe4KzcrJ9F6RKbHtVsVHTg85HsDkKRJ",
  "key36": "518uHhmTeF8JTC1cNu6ZABCYzkYrCS4McmEcKthhoHSN5AvTEM5Po8KCZ57xQ1mMGbviU2s1PZEcgrvZkAr5YN8N",
  "key37": "3WP7BQBUHssCpzMmdqZhYtYyySwbWPid6EvKyqSzdYF7wNx5GHw3NbemvDRCfcfe6rXQSQ9d5ZUKCTNW8ZuDk4k"
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
