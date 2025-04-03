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
    "hMBGMqjVKnkYshN6o5wZWWFN23Qid968pxAdvAQykAPQchzRDUXnjQ9g8Udaf5G5zyDbVXziqTDHaXzrXXzWLZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sw4UbhKf2ncoAXPbq62FvLASuF8LdcgmwCydBR98U9kN4yYDPfv8byUXYtMQRMVV7BtkdzjgyZcJFE3KJaTd6zz",
  "key1": "3Ai76nqFGL241SVuinP22XtdmE2gUh6ZPptGbUH99AbaZ4XkTMtbpQCBFiScgVRQGpeo3wZgAn9aNF7UEboxfBwN",
  "key2": "4XuRFJQm7AdzrBithUs8iWTGBc6vNwfqWEUMPtBM4RvHQprEMgtM2pCaj7TR7oVxSEJgBdVES11dr28reu2VL3W",
  "key3": "2yBoNqL3ofwjqWi9TrAGyi9757Xm9Mf7fzXjshckMy3QYe7Aj6Wd9xPHciAv3j2pM8dyJJr5TZid6RhFSLzYPeCh",
  "key4": "4BgEcTu9T83qkdrgSyVyyEU7TquT2yjhhaVquGnUTCoEg7hWvPubo8EDFufGd1fsFYK2GJvoWSBsvrX3KjSKTB7z",
  "key5": "3YuPXhpzK4KoqMsLVgHfycTNmsffX6RkMLi8bM4WPchgv6sXQKJHBCj4afgQLcBJVQ2L3UBWarGXqj7D22sComjz",
  "key6": "3c7vkeNUMo4MgdajHQHnhqsDZrfZKcieZrqhNaWHNphSFXXeX62AsdZK5BZxaUgSCL8bzcPn5jfcgiSdU8MU8D3M",
  "key7": "3bpLSZkunGMUr3WfB3qoUS7ZNjaTa6tDXTo3N2vgjD2YjJ9WuFy9ftrfjjYmjjxCY8uCg3rq1MMsQ7EBDPskrRcP",
  "key8": "7xd51s5xQADFu7N6ajxjthgKvjEgLw2DC4TSAZARzpbemxHhdDU45EZRXhEe6Dc8FHnQCa1vkQ7ecRMvQN2ZoU9",
  "key9": "c7EZByEm9hbtrG3UGguweLeNynA5EdhFcqfiobFs6fdjewVhbxiFwtMAYfwscaRPxKNboZdRvPydNN7WUnq1CXX",
  "key10": "3VW7w4L67cJoqoeZLipqtC5SUPCnrfdt7h8wcMajHQZYTCPo2ZaY7PXihXDDUMkvj8cdswbNYwzgtwGgo3HuiHvM",
  "key11": "3KW9JaPRVgCM7tAQAeEQJXutQHjs88yJ3DLa2BYmZPVSjAZAf1T2GxFdz4GRp4Eqw8WfUF6wEc1NjHhwCbpxt1Gf",
  "key12": "oBbhY9doaBYNhkTA7Wiitc5hGiHZqw5j47xa7f1dmEFLo9eRxhCuHnqHyq1nnpEwcdqkZza4U2BHEsmknebrbAs",
  "key13": "2bDtgwxvDxmMLrZcKbhRYDx2eCjv5jx7mEj4TCjCuYh5XRxj6pAV7DeegXLpr3ozh9EsYvAoSM1evbPLSJEbKaNT",
  "key14": "4P4dwtghUv787EaGE3fuSxenAXkU7avL5dMjanreu8sEVjWUq1WZj3TizmyuFx8Gm12ASj5DB1eJedvfvBbJfckP",
  "key15": "wPinPtS3yv2RCUa5b8PGmkzF64nUP1jUyNij7WMB7ANB6S1s1Hn6SFsqjoUQLtvp7UxJNkrSbCN75mu4c8snYPF",
  "key16": "673EkwqFtCzuHJyJ5nAYyFnf14XCLUZsJRX7fG7NSZERUXUtqiQ7LU4DZJhsETnHjzdxbJ2Qf3JySwxj1vusRCk1",
  "key17": "69mAxXyXhJaTzeEKeg242phSBep89f5CCP3q46a1pbyYVcZb6DHWk8t34NEbzCRhTd6yhMwjMo2uVPpCG7Uyyiu",
  "key18": "4cPMN3XtqSJo5aG3PyStHGzCdU9kvKBfwHCugUb4ntP1pffuZc3rScMm5DcXHdZwZGGtKZjYjwoDHjXHkFwEeCGx",
  "key19": "2TBdMcBoY3zV2e4gupYRDW6T1xnFp1wCj1rU4yHCPU6m45J2EYhQNfScJc7kvncwPnBQ3k7GLVYaU3pCcE1mNytG",
  "key20": "oiMVTrANdTeVAQCJxHPQDZDM7xoQ9YtCpfDkKKiHBULUu1MLUArQvmmfDmJoNLpPajfum3doLKKkxKUepHKzJ2W",
  "key21": "2obrjXMTRfeArpbmjeAaMQVQjSehK7sXNu4yszHMzndCXuZj8e1TpHVXC6zSAja8uPpXhRHeoEidARMpfZ3g7Vr1",
  "key22": "5pVZkvH6H4Tzcb7XkhUJXvC9sjqHdjyaSGvGXmrsy15wT9Rz1taoNuCpQWqvpoMf9S1xNK3oNL5zWcb67xEfydS2",
  "key23": "62MoxboNAfnC3AcLKwQTyEYJK4ftQq6C8ijoLRmDquXfhoVU46Xpp3XakEk9ZNThik2ajTeB73hMBoED36KRERf1",
  "key24": "uGxDdiXzvzCA5LZ9eAUyw2w7AJrtBanfkMePMHPkXQsyW9f8R7jGJzwUQhE5JLd6rUovvH9AwkpJGMy2A5MwjCi",
  "key25": "6FDAnbB7SWJzuoSC2sdzzNgyFCpw4ghwUHeMqKrB1DZsukNTJVZ3UVmS5KSjzMRLGXaTmJL1ybDZKbr81qvRB8t",
  "key26": "34EBokwTy8MSQjvNmDc7uouYwGTEgd4isM5Dd7nNC14JeduTN9WpzogPB7UhkujPVL8omHyDw6N1jBRGeGq5C6hf",
  "key27": "48SYEg9ux4dpLkdHbH2kUAtnEDeRfw3W77dpAQhD6jLZfBj5AcDiRUTVxXocQ3yLyh8ZbJYsqfYAt2nSWmrXExsg",
  "key28": "65UgUEY4ohMp675FqeoLMywfufAN2mU4ubeoXcpzKb9TdDcuG2aqz2fMer2wdoka9cwwNMGQGhD2xK2sQTzz2gYS"
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
