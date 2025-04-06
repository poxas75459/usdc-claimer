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
    "5iSxw7KkqV8QkxAyUEe1MqFs4DcT32gqg7smwRgVxBreoPmgLgjchB8gyzZrPA6BLAHqgaEDBQSvMFxd3z2Qk8NQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ru1TrrCNkZ6Kiw6zFPnU8xb5sSfGwKMzPQyazqtBFpWbHGFztUPB34iDAcv6RANuT8RLqh5SHEUhNp127Tb91rd",
  "key1": "3HLMwkjdAZVSAx4h1FQcqP1z4f3pkMBGki68qRx9aaMBg4F8H5YnmYt7S8371cQuLpfg5bmhxX1tHUwxQ3JQxkxk",
  "key2": "5Cd8hMvZa3XokUdhm2VwY8McXn4rALLCDy62AdtUUao6BnNRByJP8HLUm21ixjVre2GMWLgAgzCn7S88Fe4gQRtQ",
  "key3": "3948LNAdbALWdzVw2PEPuHcsqP3Ef7oYBkChRrqNn26vu86qxtchNKKjaTG47hB5f2acZo1ck67AJFR3yVioSw4w",
  "key4": "5rY1Ns7Jv4y6ZJYVdyfkDPvo8AKn9QJRj62WCnbRwaYwjL7T8xT8294pd2dBPQCtK1d45DPPx9FZhuwPSKGtHhHB",
  "key5": "2FeFnreouBqV1U5722i8kmsGKZmWSdnWEodqMzmFPK1zzSEV4j54vTXwQdMTb8aLfr45tSA161qgAZtGoNjCAa13",
  "key6": "RVSjp35FiBKfvoKA4AJZWcMUYV47RKwKHavNnWftEFj1XBC1CKbfREV44RhNCU28ku7jGfmig9B7gMCHxNzeCdD",
  "key7": "3FJqKRkbWVsztzsv6JB9aQMvLnwXkjazL2DMNKpG3DWRT5rWhBmWTn9pe5817JPdNLgDVYxXfQr6Pdve737bkr7C",
  "key8": "3ouQSukoUfYaAdYinBa57V57ea7H6bjjH8WtHXyWXD7JUBvwD6a2RXctpzpRERV5dKmUDaFPTBp32VM7gTtKLYVf",
  "key9": "cxt5Fx2247EYfikRYkD51H1jTwUBXQM9GaErMAjqTdfPdjJFbZ7cn1T4ae2YZsVuAQAzVY27uq6nSr9wCUu1Shw",
  "key10": "5CMW7F6uumRxGegcTHTYrbxrT1o4bRkmT8ASSHbZ3b2DioXh53eK5JMsbFipgXBXgVbKH6aXMBem8eQF74fEW8rz",
  "key11": "3BxNBFmpqmp5H7ns2V8B1A7NHcPQ282jZGVdo5d9dGJr2hi8YnHzUP3XtyH8M7hsAWDhMeD3rmhPF8yuHCCk9e4g",
  "key12": "Uf5rzkujEv9ngbiC9bzNcu458nPhK35WUswcUkPMAxUYB3TFUKGKxCR2WUR39jpJ4jZNiiAMBzxxN4ssmf1ri2a",
  "key13": "c7WVvTfF9CyadiHy2XnwDXv17UWfbDbcqy9j66cXJf72gTWBP9tJSZpATaPLHcvSsCXyHqtpedKcuzfaGYvj3Pa",
  "key14": "4EYSfEChNxVVGugjrSXA8fwqb7NHZdcYRH2Z6rPpVQpjkjm2sfro6kmC1GrZBRhmHnZU548KgGYEMZRqyqrWbJUp",
  "key15": "3NowJBJRaZX4RDS7LPYWF1cNuU9Tg21ihXHEzAG2imJUT9F5AEttFZ7BWg5dgmeiEqzAvaP1ZhCSYaYz89GmNpHC",
  "key16": "3q53qtYvEK2jQH3UhMi9pxnVRYeETYsUAVy56ve23X6Fte249r4EPCC2pvSDFMw87Dp17NxTLpYMnV4kHoowyV9j",
  "key17": "49QnBNV88czpCiVu7DzqdqMrUHDDTVQvJZ2xyJf4QJGwQrV3uKdRYhBqtNAmWi3TiBNwbx9tEPdn2oeEqmzhMrFx",
  "key18": "22PxkUJKeoS1Hi89aLJH5KarDajYNK8MsBy87KZDnfse8mHtVUfZRgw9FyobBADszmBRLZZfj4foNDQzbJLRyT7J",
  "key19": "575AcUQhgqSTnyashwuKpeDyKcRoNV5ShWAMAbSnaopW4oNDq5nxsaj3odRexqNe71GESuaSAdJfLoGSs7ZRMHww",
  "key20": "2qZCDmYT9xRBFJFqeBcbbqzKFdLkQQZNqiVaQTvm3ocDqZ1yYHagEqjes2iY9hyt9314eCDyTUBVRbF729Swi6VR",
  "key21": "3DSatNywBRdQUuGGDoqfnAgnJP72gQgpr2sm7kPnGZH9ht6pszdv32cSZXpZDT6tPnq9J8C2g975EwiJcKrRZxZD",
  "key22": "2TZdtud5kSJ7jQjTKz9ixYY1ZQ4aoPnkq1319N749WW89eN8xkmvfHtUT8xLQoaGBPNiLPj9NRKL61FA8zjndS8c",
  "key23": "4Q88repJK2ZtCzVFGrqt6513cr6ZyUR9HfLxQ4j6UPVDBPcoPv3zE1tH7CW1LLZFXxu6Lx2fpHQPmyLrNzyLkvHY",
  "key24": "3Sv6CE3hDjN3p2TVA8DBKxpEf2HCY8LT6gGNHsjCvG3PUsTqKLFdmmcCU4e8dsHByz638nRgUCrqzsyZ4bCu1CAA",
  "key25": "2pUYz7gfEShyUHL6xQ1qFwTqFv4xn7z6wsWVxmP23hAVKeqTUF2Cb9zScPrsBAmgRszfaASQVzGsRzk8nhuzJCe5",
  "key26": "3uUtuNssrk2ctzX3FxQXXahAfYLF2BoABnJYi79Z6hWE2n39oRjvktaDRb2ooYXp1Rfs6upr5rcYz7XsKVMQvMfE",
  "key27": "2MJ6kRcukCwoBJUENnhT6KahYBmR9ceXp8H4nRLV36QVmvbChVCHJ9deto7gkmhBYmH1P3pv42DQWF3B8JwyPdzB",
  "key28": "4sAn1uD46ZYAR1f6A4N7riYuGWjVSY1sCdaLsVdSMA1Rvv8vU24ZkdzmaKhM6HMsgrh22V28x1JWDn4khyD8tGqb"
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
