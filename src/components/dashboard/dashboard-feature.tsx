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
    "5pJNn65DVaJm1uHF6a5pvkpzh5kx4zQ24SYhxxF9ptd8729sY4z1N9LgiBLhQJ4AW3RmyH2chyers4nsCPWNaSyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g6imKCicpEBAe2mu19uotUg7cXkghchbtRm6PjAnSfvDAoEWhjZT15iTKcsTxQcVVdrdyEPfxbVXUTp4LL6aSAp",
  "key1": "EcWa8GZEHwH6Lk1tjFeS9e4XvMNH6ejResTUz77h7agML9EHS1PqT3JmYXKwPyNwe6Xjab8qAUtm7DdkFqsr9bE",
  "key2": "L1yrxAT8nSkc7vzN4AKKYyFz9tAFRZqgqP4JHCRroB7uFP65haEohptwFTatUAb15vwWxahW9j5ksxX8nfRq7Y8",
  "key3": "4wnjr3oTBPQLsBpof5hZ3TE8dnccbKQqqfuT4Q2nD4cAo62zcYZCoAg6sY1L7Z6opjKRAMwbYbNScmZSk9FkXFrT",
  "key4": "2vwJgGLDVUN6Lxt7wC9tULpbugGau5e9Rk959NmFF2DX6gW5ewSyKtFKJt67GHBMxed6aeXv2dhhQ9DrsbUejhZM",
  "key5": "3qrBgQnjpNU23nrVw84CRGEzWrjHJc6HAXGKa3EGurQ7WoyFJ4R15zzTU4LuWVY9b2T9tLDDdsJLacewE8TBZFty",
  "key6": "4R8FKTRH5DUeeduNi6HZfse2KESj3Zvc4qpAEBSB2ynKnexE2SxTooxXz9juBULZQYZkdVNbTuktMczhhNR1X27y",
  "key7": "6H76MR7L98Y7E3XUmKc3Kf1Y9DK2jPV5TTxykiFrAtfweFbYtEuKdUi9ZGAvwficArkx1hiYkGrMVSrj2JqPE2K",
  "key8": "5eFKWL6nyGq3Xm53tkvjpFufkuRDLQ98qnSwUuPoaNGWd6Q4imQ6tHY93M5MU1rshVxTy2yiWHmj2wbtGY7M2W2x",
  "key9": "3pKvkiqYa4X2kD4HiirLxLS9UuC4mPJpEFcHwqUKEcZ5VDHSW8nQEaksiMYG9FW1nSTj9XArWsPXtu4DMQNArqhZ",
  "key10": "25yRbD1kDERvZbqvLwB6zgHBsVHwsPh3LX3MBUiYffDDTcSKuD9M9xGHmxt84YsdbpaGy1pxasU9GPnorX84TCrF",
  "key11": "5wVKBrs6A7rH7mhh4AXHpxGhrKpAvdoQ5UdgAebPrGveM8dEQCmy18a9WNxCoDKuBGTrx5EyQpv6PB352tqKaFiL",
  "key12": "48Miqj7PdYBe8BAU5cnK6hJWRATmeA97QDysxvjGXAuLYvw71yqMTxAQUSziWzzXT8F437yLpAuVxAQQbXKK5Kh4",
  "key13": "2ypZrA37XdaPW3dRwKV93AbxwdS1y87GmEPnyy92DcJrbkiPNWjQoybZ2bNSJy4WwHaGrawQJAKVVcrYG64o3JKd",
  "key14": "cZaq4WwCT1GPYWBYyio7qjPQL4wUi9y5vwW5ffcSQNJBsrX6jnYC99ZwUxqyBUT9366iJpHtgg62SXRmTpDpY6h",
  "key15": "2ddJxKE8e77ZxNq5JdWJMEdwAzGNTJBcDCzCG82Ub1ojThfBNnUiWCMjug6RnJ2X3cksbFgjayfx3ocHywVURxQe",
  "key16": "5nsf46azNYvWzh36vtdtyr6WaYmH5o92BdbnkvdQo5A41NboWB42Zpw7D8jJwuH5g247tYPwr325SuEe9FuZQVdt",
  "key17": "otm7J4r2d89UJCqjePBDMq7wCWXVmamYPqBNuWWDDnRnZ8K27DEiWYKUUk7iyKkS3jDKT3CqZmAdJFAjHBVwPuv",
  "key18": "T9xGDKPuYDwteL3hGHpYxiBuU9RRZTYSANDDpRqFNR8edpBAKiP9Ms1HmwqUVCWHGN2CWzCaUyX1hvsWV96MGUA",
  "key19": "3HrzYAXHwurmyvehH99EMyCRwyUnsfMjHHQ5YqdFyNJjyjkS6z6RbwwP3bnTY5vYt8RNqhSF3qQKJm9cC8cTs6Qk",
  "key20": "2bGKKL19CE7PEUWDtkDgVxVYNNFkzbjUbkp7aG3u8E66qvKeqWWmaDDorGAhNSKeYn6n9wGqQbboUzFGkHkgkfFm",
  "key21": "37KfMYyxRZj8RWrLzmUwTaNpgdohjizoVG8ywBgwBAHUSS7bCQYpuTZhiR88ckCKHEh5tjrifu3cuL2CUoEjxzhW",
  "key22": "3hX7WrLXwnXjTnq84LNDCAfgqr2YCN7Bria6K3uyXeouGqoXQYJBaiE7ptorq795ByC3XdbUJkHJuTfsXQUEEgAJ",
  "key23": "yEtNo2dBJsnoqCRbJRSaowXmGYdtmkwwH5vcPX3hr6ymqUj8PcWA89jvsNC36jo3WPmaeZZ8uQeVuRChKJ58S68",
  "key24": "4zVMSfefuh99v5eW3a7TrZpdU3SFfZk2QwBDG9WYnZWptYGU1iF7UZzm95rYbdzmG3Ja5RQFomxoznQZxNW2QrM7",
  "key25": "5KovEKZeWU1q3Pk6E9iH56YB3ihHpXPWf1R3Z4egmJXoq2jwAecJ9BQQszXyTbbw7ymU8C1aF6kF11vhunND216y",
  "key26": "2jDCLomZmKG9yAPdRJr9oWKn13oQFvdXMDaKbDsoMMTTnnmbL67S7CPyonM5hzmGdo96y6G148yYNcNmuUgY57dp",
  "key27": "3CTg7KkeEbLghQJUyYYDExJeYZ9K5V8UQzj58CpwFe5pBAkzsJcWGQXq7CddSFeXVy1nVMFRUdxcACW8Wi7fQnZj"
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
