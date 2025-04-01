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
    "56hn6AqUhuAHhX5PWaMWiTARyfaq77J3CbYSSEMd1rwqksVRaDrXAcGEFQmYaZZS7viQ2LFcWexxfGwJeddkSqM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFxYpEeWhdsNvaVKW4sepymm7fDK8qWmrVFpNP8uv4xHBDhL2TSdAmBiN2xXQtqvGEDHesrzwuRdY8hF6REC5B9",
  "key1": "HGjVGbQnXh2KXRdaDKYoh8LxXnwWYPAr7dwN1GXpSzB3ot8N22hYQfa25uXf3hWYMTz14v3VbdSJBfjMU7RREZb",
  "key2": "2fYdboRKzU46cYj8FdoRWBCfNS6ZMHkzvQc8DKVMwwCSRJh4XZEYzdbFJtoJv6yPe7TcxnVhRNoTnStDo6Jmbr8h",
  "key3": "4aooLjYSvkNKKgtEVssKkEN6cWLDya1VTKKcYCPfBG5h6h2KyuWis4GeWsE5qYwWzmKdfyqHK8TNsJseH4Jnm2p4",
  "key4": "3DQAedCWgCVUcB7ArvHCyeP2gnVJMxmJA3JBennV4tCcsuYp48XnzKpaxu7yZtbVCa5uLtzYJuzMu6YTi2uTvWwY",
  "key5": "5JQuom9sb9PiVjLSR6446jqmQJKZcrKbTvsX3cvnjVYckVm7Z8ZwxUnY8iD2NUF2Pwc65u5Ep1U93vehEb4fM4Q1",
  "key6": "2ufeuYkFLCN7WsmVNmwyC6DiLmBzAV2n2ay6rtoorzkN1bkfmnqkrqZxSycvC64qhDyuoxcYvtgL4Ed1XYGLBNNq",
  "key7": "469hvqYM37YvYgWjuHViBLSTQNtiy4Y5AYDhDo3HC9QZ7yuSU6bTeLBasvcov1abCSko6cSdBYrb4T8xgq3wGyEN",
  "key8": "KYowKmNZpLu8bL4kFdbeKVqRTsu9QP2EEAYy4ijjpxBD2nTN2uo1jeY2AHHZXk5PyP6AJqqf7uHjNQcfx3Mb486",
  "key9": "4KUqGGq33AvbapSPorSTB2rMCTK2PQaPGzPdgdiPbFm1EHqFkaFToh9JBWXr4tdU2bED222dKoaUMGrHrRVvhQmr",
  "key10": "5n6swLzeYvY1UP2eQm6qHt4Rc5Zkd9wiGPG6JVFrWJazkSm5VygZMVQax4bGW6ETJ6XPYfE9JpNLe8W3peaZtmAj",
  "key11": "EBDUmvd9zu5mNW36Y6KY2VudaVfMrxVZsin5Mn71sXjuN7vmQwvrjaTGMUPQTUvNd9ayhtUv5krei9AqQyNWFg5",
  "key12": "64TFw9AmkaSvFbmM6gdNMvcCs3dqqvD5XFXhg3yLVLmePQiSCxGrT6Dtxng5a5h73PU1rAQSdhAiE4MaCHz58S7A",
  "key13": "5sAKx44EAEkLperB71qnjVNYVkwqqA8jfUrwgdVVRK6Y2CJrh7RbxtTzugW1FFLWJx9goMYNhHWhowesU4QJ4BmR",
  "key14": "ASjfYRhDoiyY57FDdSj31qfuPg7mJk9mNdUFJNd1rdU6JRogXipJ7QPtefK9dHZDqKESQPHZrtTjiqpq6WRks6b",
  "key15": "4tKEZ9F6oFq7Z5ScJWLnM5YxeuZcSgENKcNf5RnnaVJSqmxywLXKdKP3aEuB7jtjw54J2ToMyDJVYwqba9RRwA63",
  "key16": "2pYXrdjy9ZXff71bg2PNXoUzZ5nzDuGd11Eo1eKUut9LCpDQDzvtvoUXnxzoEjjUgurqPF64TT6cCHb2VfmjRwDW",
  "key17": "X3BAUaMgGchtCS5vBgeRjnCc97nLvtjFSwwr6ZEhTomVfz1VXxscevJomY5XHCU5v2j7ie1wEGVM3hV1abmv5C3",
  "key18": "3jQDE55Mo4pgAhYA5iYmNSU5MsqB3YPDCz8xTU1NtVmSqKBNLCyf2MZsepfTbjXXqqqMJNwQQFRxDiWjM1dCYbAt",
  "key19": "2wmt9Xku1DQpzCLhj6xMeJA6y9EeqcwEPFiEjdp25hjAdWn7i8zARZHwLdxMANdFZpMddccvTVi3pZDEM9K9WHj6",
  "key20": "2Wmyrp2HTAjLxsxLXdqAFJEa7vawFxfWpGXqqxUNSUAvSyf2cdT2ddMFp7ModuG3Jx13CrQv68Ewb6VZJhpAhW13",
  "key21": "2nwcqnfhvX9WHXDo9uJx96uWfpJUfreQE31en7P3mC1b7bz5ghbbpWSMSC9P9LTpYPagWub9Wb6zeCMz8DnQFcug",
  "key22": "4t4SCgHoFCtb5QfTM3FV32qLKCLU97xQAuxg431yuBEi7FdeJLH3QqnGsWo7sZK5REoCtUnCXavozDPc3JgWvzNg",
  "key23": "3XkkqfUfiUjEWvZftpHjYvmKy7BLGoLoty2iJqoTzitU98oudiWFjwfcBbK8UvLBnPtJ7bbQRaHw34oaqgNLfSXP",
  "key24": "3BiYmnfeZLmSMPm84jthnc9zZvDiFmfhVztDJ5DgS4JbY74PL95WKyVgxzzB6EaztEXpABAcJdq2ua51Xij9CmRf",
  "key25": "3NybVqKLTbvXVrbDDeXmFeXNepDtmdouXgsTcTU5N8S8BJYLfQhLjvcjCrYp2TTTeThCHTwJBPJcXNkAxYJM846G",
  "key26": "3tZik7noxbEhhSHxebpHGivDtCydkLWgTorhiw9JeahtS7kB2DE3f9P92HCk7YDbnXaV3bWH7H7kNZm4hkTaNuK4",
  "key27": "3aV5TScqXKFJvj4sZfX6fV365PxNSQAtaS3RXWSdDkV4QTeq9uJy2dmFMt1AN21fHPBLpHnoVp3LZvC6n7ZcMHm2",
  "key28": "W4j5sKQu8nfuz7PQ8YqSjkUWH8vjvAtnBC6WjyBdU9bBQs2VmVHdmSVofjdibUzgr8KHo4mWHVc2NAipyQ9YYJo",
  "key29": "4dzGd61Z337uK4vJQ2nbe6FCZDmoA9EAbZ4a9kvJ8XJvDCvSZhtciuhYDvKaUb16grx1ApNyjn5jHNtb4FqLTDYh",
  "key30": "2t9LDizWXC4LDiUFmsWVixT523rdtPDQFDtrHDfVNds2HiUJxdR3KsoZxSJgHHaVMKEsugob1uh2fwzDs1xQ2oaS",
  "key31": "5n9VgsogeN4mZBLFNsXXbXfXnB3RNKXzKGVuhoEZ3E3mkQ3dkKwoHXC7kMuFdNj6dMpv7w2F7E2dviVJ54Ht4Xff",
  "key32": "593GE4myQy9fecLvJr8a7eEA2zF5JJk4nnLGGcEdFfyrGKLwsVcC1QPCjQXS299EfaJEgYCJ6cCvmFvjPagTt4v5"
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
