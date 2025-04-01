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
    "5dmg5xVoj1pcgdrFoMjZodfhF8AnG9Nh5oAku7SpEskJAi2brCvj7swsDVfifBQjjSdtmuEx3kDVBz8niNYzx2ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMNYPtnBRfoZdAo8taUjDJGqZww8cctte3DuyYBoYXUaTVaokm1JyVpb8XmXBi4Pj8Ss4ssY2xxW95dfioRg9iw",
  "key1": "2Tk3pm1FYqwVsP5iMX9eZfPYWSaqLycjNkmsM5S5JfdEcCJabzWAC9bJF9JQEHmMyZGFJXRBAM861t1cib3dGwfW",
  "key2": "5rj9L1DrZ3qCW2o16EdSYLahwFD5yQnHTQMqmXDRAKBGznjXYoAYyx5Fzv24Hg47VDwVUge8F2vD2dH16NmjCXtb",
  "key3": "49xMMy3DCSVTBNrbugVrtWmkp1ohCL3782NUJKSS3gcUKb8Bx9FC6MWaAhpAvSmGKVzfVBvUtuw8tjpPYG5c1Jcr",
  "key4": "2j321kxe9dZo9jQWW9v5KoMDJWC2rWkK3Ka57XXKZdNNfhE5pWYrrF56cdC2XWsGGaDPZZy1i9zD7vwg6ra4CD7c",
  "key5": "4p3jYf7EJxteAC8nEui9neSRrUQ9YcjQULRjQkCR41oQSrW8kTJwQezCym7H9HR4H1KM5KiSZLikzJXk9tWWDE8W",
  "key6": "5SjWhZcYEmoGAPijJ3CgumFWqeM8wm7R4c2JQqxrCq6QU4iZ24cyKGqpSEjfLLqJQxSGfgZ74KUgP7PWVdWFat82",
  "key7": "5sWw1zgqVrPN9N6QNunEY8fF5J6SJ2dQPWkUXm4oQwazFMW8FDaStzM6Kw3hQDBCwnkabHA14b5y3oVYPmKKZYVg",
  "key8": "5poNVdFQK7AHXTVn588hWe8ePmipCBG2RvS6eXuMDfkRWSsjDSzaoSX2fxoaZ4z8SvH6wpntSKiRV2nD1bbD7BsF",
  "key9": "2iauyPZePhiK4YMZTQtmD2q5qLHxMxph5z4wogN5XAo1Bj82DgKh3YZrYrJkid9Gfb6YgKNvfTCxs4HX5ZTkBKTo",
  "key10": "42uWs2Aweej7sdq7h2ELnqrRQ3eD5ScuQKmYrnTR4b1beN4hpGW2Lbb1zaLdUvuBResCVYpHm7hMYcit1oHci9ct",
  "key11": "4Zo1SXnKUMobN7ju5122ddF1opi2TzwXNKgvx5EMBnaGJwWcspEjPhvd8XoQVwDwBoTP6j8Qqf5Rpm7vXSM7FnRJ",
  "key12": "xScNCBpEUWKcijhdYZH9kHdGqdnfgDFqbDEvpu4FR59Y6bLuX9BrRT4ZRbXJoHuPX512K3AaGVDkSy6xVfFdx8U",
  "key13": "2Fx7EwjFrmPLPnV1jei5rsUGu8vsA8mg2u8xv1abtXxis46kNYbuvPS6c69ttwq7NKcNqk3i8iLpkUPgEHRHjQ4A",
  "key14": "3D4ZkzSc2hpoCcKFy6fDTP5CQfa7mpuThVyJdXj1SJxZvxGxMTHxhzG2EqoXahEJn6AMjb5y9oKj8darkLPWJ2C9",
  "key15": "4miwMtsxaNKwJoiCp2ZNtkSyfgG5Xi4hGA2w9Q9oAyPEEFYkcTru8PQVBzH4XP8YiJfBVByJhgnxbsLnp6EeTho9",
  "key16": "4sG5M838XEPwjav7GdMebsuk8HiRZ8TLb5sLiRVNF2sHqo5syZzSstLpwHHberNzQY1kvT5i8dzX7nTxPx7Cgc4d",
  "key17": "29gFDTeS9fDsfFNnhE3Wv3tb8m6u7FF17bBtZ4f3RmwNTr6xZT1AL4RH5h1wXuk9rzygsgdWWNYZ1nfPVdUunPoA",
  "key18": "k9YHfKHZrHHznC8YTuQbugSioE2tPQ4Bos5MtT1qbiucZ5CzqmicDB1hu7qEKXrnQoPmCep28q37zJ2dRERCuYL",
  "key19": "66Vh5eMt1uyuticQZzqKkpncBgUHP8WZLzbgoPtNJmn8ySfKrcdeRoH9wHCxyPWmiCvfSvCG5tLs8aaHbJVJajLc",
  "key20": "pGBr8Vz385WDFwNJhAP32y9pUpQ2CzzuCtHQQynapuJGYGvQjqFGur99biEzPf3fpmy7gR1Kb3RUMdXGkQNwS2G",
  "key21": "3aFz4eBs8exJba68Xpa9x1jMhhwZGh5Tuv6qw9dJqAMtXQtztPYEnVn4rS8qh3vFsxWYQQL9iX3nENFtq8AMyWp5",
  "key22": "2R5uGmeMDNp7zrBhZV4ViBohw3M6cNPiz9D7WKEsoKpc6K1g4oXN57GCnTVBXUPcJmZcaGnievHsNsw9psHyUrcp",
  "key23": "3UbqicqtnK8PKJdv79pzn5ppXE6TftYUDYQVsTycDuYvt5hyh6FSephY7c5e2QiHKaDHmzaWMDXE1xDrqAmyGfSw",
  "key24": "4vb2Ht8Jyu5sySXu64ePzmhEQPCX1HF2vExqKG1Fg7995zPaiTJt7TtLWazixEkWBVBZWKxsQYKP6DN3a1Pw5qwD"
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
