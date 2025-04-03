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
    "4w6kKeyHcdxwcy3NJ9wfsdMwd9HLMiQqUG3KjEQ7TzTJdwr5C65zV9A1hSKHDGLah9DXX27tyzkKUZ1QeM4JdVXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WCuHc4i6UKQfbH3Z94GS9Sj5sqSri2g8zet78NbJDBL75ieVnJ6sQfweTuVao5Utuy9G9g5pFvhiu6rvobUqUfB",
  "key1": "4MVeWDeVJMiBb3MsvR6oFteQgPJvMRaHdpKCQaHyWoe9dRgHssRLra7KavLJpHWAkzkjQLk9wgrr6FqcvJaqLK9X",
  "key2": "5wmFeRJdTcZt1DgReyBmPGXJPzFLpTqxztWA78oLJWmPXnSA82bETpyax8GjgbCNA2rQo3YwJztAN7s88WRFF4Pq",
  "key3": "5kU72xoj7d5FBUxz9kxfvGMMbnzUMjmHo4PQY8AzdjuYm35KzgMJ41hHCQZ1htYZRqLbxLU7VbQTwdQD4WUx8sFo",
  "key4": "3qX1EDzfyehnhHKA2PvyJJfcGsmNcDWgcTaTCM366tRNTdsLGhUoVPNyrusbZWAMxCuzLExf9UcaT4sG21kzCsLB",
  "key5": "3c77tzmHTZxMqWbof6eDkYp5aPcLMhQ51NqcoYvH768E7i7WSKZb9LtdNoaRmxWEiuyF2Q4Uj56NoN2gr7EdipCr",
  "key6": "4fTZauEyYq7Dedar3iKdY7YXNu9QUrqgQ5ZXRXNff6od58joU8nY93a1KkbvqdU9JyLSGa5YsRkgig35vSXu2Vat",
  "key7": "4kSBUGU13GNo3FniE1AVbzrHKSyNXyx3CWBdkgxBPhy3Fo8uCtEEt7JwXoqBwYTkVAeN5CfopjgCrPtcYeePdKnx",
  "key8": "5dv7XxpZ3PL5JHqNYcyenui1PGDse53UWYXRkpd9TPxCnXKdMphgbctahchQ3TPaBKFEMZgcez56DrWYUWkR6jc2",
  "key9": "x5HJXwkZ7Vz56orSuyVSgv6kMDtUU6CkyW4gc2dZjvYwVTxg175GcaduvY86YDAaY12xFVP5yDzwPnsVj76wpXt",
  "key10": "5A6Phq88emT3unEe1wQ7eiRBdv2FgTDnBQ48qmDvSgC7bKDAzzTHT8oLAesBZtnxDMYkp7Z3U1ZkPmmxhhdv8ExU",
  "key11": "5VNieiuoduyy2oWyZWZR545xwxmcxZ2Tt2FzE4TGLsfzm8NtW6CZuPg7xeF76MkDywQwBeo6E3Dko6k21AhDJvcN",
  "key12": "4QFU24Y3QysYvSiNMKyt1p6MdsxLXtK6GFWb7kTL8DZas5ewXfjjw9ru5JXRt59SUdhEoArbUQ4dFjerwvN44nag",
  "key13": "3NEszAZAAqHN9ZNtwSDxkwaoaCF22DVrorvaEf6tfV89Z92f9PUGTrPg8QyFD9YwFY2C775UPUjLcj9JCsH9A7UC",
  "key14": "3Vfj43A36CShCXu9ycMbb7QBGseBviQKqjikawjkY7nyZvG5Xv965aidut2H3iTu7JkQhgak2fYsZd2bz5NPYvvf",
  "key15": "PvKV3itJ3zbsVSKAvb3ovyyp1Co86eNQwbQ8QbSHM1KpcZ1xdXGXdFqAXpKUN4gP1G3sRAiRCtAxBkf9KXgeEBC",
  "key16": "2PxUBcTR75wPi9uCHT8fo3q3Y3L95bLiLUwAR2kzBfonM8hFtEUZFeQznPeV6TSZR5yL9Xp6VrZkeGwBXxmoUxV1",
  "key17": "57d9dKi5Dqrky2wZKBWUGEgsRYXheGSLqcDQPPAE8aboi1j9FYsq4cEWNQQaeQV2tfZAdsRqe8Qv7knWgUDCeUbH",
  "key18": "4RDAKtV2utKVixQrcBBGoX6xWKe7kFEg4eEGFLGuDw5JrF2NDUn5rCLuNtkmGQbF9t439ZwdWHKvc8BDLZn4r2BD",
  "key19": "4aRqc266HfrdPBzDhuPVLLwwvc8uMah1fnBA7pXKFovFhqpicmZfRXehhGf8fcNxbo8NaUi1cXQUXxddKUU9B2W3",
  "key20": "2M9hotgebr8QmNGDBcesb1Godt3uUsAZwmTQggU7KRE4WxQnV3DNQ3Z48WBtmMgStWLbcmUT8Fyx9N9BcDEsYeVm",
  "key21": "5MKGAbzk1aUtLHEEFDzMQUDNhzbmwwecipwNcnLxnVog4jugRoMJbuJAKk3SLDWP77NaC7f8ShPuX4PPA6kRgZHV",
  "key22": "3M3dQjNST8fUTHugYEkdnnmEHJYUCnfDYxWypCNAGpX6LYhFTT5Zh4pNHZJM5SEz4dpf6SKh1PQy7zxnkxesJLEZ",
  "key23": "2QgavfH1dUrWrfozUSRKKc8H6APnMTLTPu2ukFghCP3bbumrJ6Yk3NPoHxZDaQRicZ1GspBnTLKomaXvPfUqEnJY",
  "key24": "2DU1Po9GGsjYncEh5THeRaS44hUFTvZbDGAyLqgymcJQSDXKKutJ9jKdjHqrmireWYU8zgZJgpbeDMwLM9j1QeYb",
  "key25": "3fRZu1jNrdTfL5deCYGHrqzFLZvJCsxAAKTZuhrhdbT84oyeniK7mX1j1wBZPt5xZ1Lm3xP8TGUhNevfsdU4khTL",
  "key26": "5XsVmRdVLfucdjaDVd9u9FyaPN8DPzhyucazFGto3tyx1gV8DUSbBzmNuQo1sCkT4qg9vqu5P4djdqE5y1NkQdXm",
  "key27": "3V5w56SXy4QEWXpaqcJHV3F31i2aUxQGptZnAe14L5uABjHnh5uRoE5BSU5qUYkgH76XA8UjHvSAEt5GMN4Wyc74",
  "key28": "uC6VzcVfk17nSHV5HAEdv88AMCFzoTqSqh67WsJ8VK7urfGEMsmtYSiJ9Qh4UjJppiPvyuCJwSNtkSfRsTocVYo",
  "key29": "4hUtsWPm7izA3MKUwZhNoqDHvEsZKWtjdSUk6BxHL4HDKD9DGcSz8qetdZQYu1tKGJXKqkhyBr7UDEw7GUm3hBUk",
  "key30": "Mow6KTbdp6yGMxop9STQBC5xmyKWu7gGrz7niWYGWMwEXks3xWhgmKLTB54oWdLFWHTDfw78pBFWodHg5RvV6uz",
  "key31": "3WyspGGcVyrqzxawutU1cwZKjNYJLp2Q2TaZgvc8JPsT7wtdR9ezqRtdusfR1gyPktRShMwYtv8ncVvzCdpBssTM",
  "key32": "5AD1kaLUmw6PsYCp91Cc7WvdxMDyzLkNFt6q8jpRn2cyP85LSXqHA1SfWd2uomRS26xfP45ThxnXqC4zFqo8wHzU",
  "key33": "3pNZm9xKeDhnjUgNwvXNFNHeYjr639k4FNYqMkqHdekwEwxa34bNorsZkqn4ToE4uzNuLjDLWT5Tqni3TpyCVi6L",
  "key34": "39mCw6z7Rz4udMMFYLRqUykS6GUozZAVPuRCBcA9xqcbHv2Yb6NZkmYvuUeDQhZGh2e4fWoHL2wc72rkDZkyEM6A",
  "key35": "2HxbfcC6TGKnWYYFnaawq4PUuMj2jU7VqRudXSknc56ATYeR5b98kwxCoXn4T7AHkBZvuWSYtcb6rhEKYQthqsYH",
  "key36": "5PF6zhAnj1A2JE3UczPpUvLtoevZ54jPnkNTXkw2wS8JxrkkG4AAuLhUQkZX1xZQGkrCtSrUo8A4JcFEcUVGS9cQ",
  "key37": "3UJt2BE7sbWqK75sVTnrgU6hcKoVhSXV8HxAmx4ADQQnQ5fhESmR51ZnjZxen4d4BsA5itkiXuPhiVbRMtjNQJ2z",
  "key38": "62Lauv2iFeGZv2pcCwKhRqmzbVeiTwU6WARYkYM58XQtDpMW2DFUorDwWRtqXMgaTCna5dBx3YJwc5K6e1CK1TGb",
  "key39": "k8pHEt4kffD8b8scorPxZ95TbJo7oKry5VLwmks6kh2SjQax3zqT6L2R17Ze9FcUZ3Qrp9YR6LxT1Kfpjm1ZZYE",
  "key40": "4g6H8YpFLyMsWRKTCnfSiXMsr7ULjUmLbUaZYAFMw1Jswfb7qXjNKgw4ozjhCUuLLfXkpfYC1yHGZ6wX3hT1cxKU",
  "key41": "2NkxpomQmjShJpo2BQjdKWaLXjKahcEHt3yenhLcNraB24QXMndg73PALh8qko41Gb7SgwcpgNsQHw2WNPUZamii"
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
