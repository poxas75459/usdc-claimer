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
    "2gQXd9DbSs1C2LryasyTVjbVV994CjuLhs7dRbry7H2KZdoPLiCySrnJ6hec2q5nNptGB4BR6Sh3TW8yqLTAuVz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jrZ6E9ykEAmDtnuHda1B1Ct2JMe6vRjuqpm9i5EwEAYFr9s91krtfHhr1NcZU3enzJyrthz4VuPzbw3W2i4qj2d",
  "key1": "4yLP8d6EGZK9PgjFcPVMECb5KsDWmCMsi9DdujTt8mq46unyPXmWm8vr9AqNQhPKd6iMSpsD9d9h4VMVfuEYZQrw",
  "key2": "3Pxz1jJqCRjcvWMeWw2GFQqKAT6zQSUEK4J8RNGVbekYyXuzGFShrHs3Rbmmf2xAZxQWHtY5vN5SmAFbj25W9HHs",
  "key3": "2aA3Hy3W9pbgcfU6Xf7cGuSoMAmX3DFQ7BkYv89CmWoZKcrAN7re4uCmPoHbfXq3E4Ddo3eRgpKra8bzf9pk3zkQ",
  "key4": "4Z2anBnppa2DuPk13hPXVCNU1mYiBrpiEKCx2EevdWcPDs3uUrZ1xJvL1y4AvuHc1JWsrBAjjoZS8ewb5D6bXX3q",
  "key5": "5orsAqrpNkUtHbgf8DGP9n7ySf7St9QV9kgVC431jURVVeLCP6G2sDnGLx7nwextoYJVygEVSwZCq8TTqJ3VAzDM",
  "key6": "4YeLSkVM9TEF6TSjxeEXD9BgD7y1dYvmKag3F4rpDwg1ALd26RPxbzHdM2EacDYp71DphF7YpDEQvwDq7yxtaGnS",
  "key7": "HqtW5fFPyMKwUgS22KBSJniVmECvGLvzBp6PzUp3HrYi4sPwfuAMRRkKxpErXFs2VUUFPm3UZmHd851MonyJX8f",
  "key8": "4axDyhviLCtTjnYPww2mXcfpf1gpjWBSMSABMUXydiWHxmCNSp2eUSRi4NHdmdLECd2EgQBPm9pchdgE9ankb3Dn",
  "key9": "2sJXcyYF1eMrVyJJucPn6ccf9Q7Zy3S79nfatyYSXJCoNjPpwh7S5v4SrLe7LPdNarF1X7u7HHUw5tsgpsFLc27J",
  "key10": "5u63B3vXsejNQqrmJLJP9GzLbCpzR26X1ZswGoWwg8wq9GvpvJfx8URp3BBS3UW4ZL52KhbUXvA5XU4uN9tsdfwC",
  "key11": "yC8UURvtzPYfddA7QKDqZJfPabA3qvDm23hSEpop6h6M5VrKr3LZGrmf7aG8ERVrJLDhMgdG7K2knsRN9sdTp29",
  "key12": "3QokL2mtnMrCMxQPbLZxHjHkc9b49iC8WBsgXWZjpLX1ggY5ay8s2f9NhQt77BRZRsZTHWekTqrw8a7UxLHB2BL5",
  "key13": "4ZF6D2roWtScqALAvYsKytXWhM6fmEY4hafntiDyFznnEcM1s2w8kdyaGRq1SLXakay9WbZopMbpL81qFYDCiwaj",
  "key14": "2trH77aTArvZwWoa41EMcLUQmr7yALVN7HsqcrTarrTUAJi5RBG9nCrz4xnVb5j6GdkQ6GLof1aHaMu1QPXdf64L",
  "key15": "5ZfeUqMR6PxaNGpmLNmQ42RDnJ9ERRv6LDAiQBCGe48Ua7w3rWee36xWGFb6W1yAU2zAPNcPUTXZ4kgGXeQYuGCK",
  "key16": "3cxh4rs7DZ76xkwWDJGYW5E72hfCD2d1dj5nradd4jF5G5hzR1nbWGJqL8zfiqzDj7JuhJyVPEpj2FtbykMaXmqp",
  "key17": "4oryftwmp4k1MUQU9QCim8aucfjKSFXsf9RKz2aRq9xSbA5A58NTtrdCxciENewo5wZddBVweznQUTKQcBY25byb",
  "key18": "3nAQmyGH8NP2H279HH8ncRxhuJeMhRWmEnZ4g2fg74RPjHQYvgQkkBgSSnoMALCcmoGFRcxvV7FFV9ddqKchxQ1K",
  "key19": "WXasQbfUbLiLy5aUxDkHvMMCJikHHZsyaGyTDwkgDP2SEeSQRRULg6cpLkWgKs2hCUJWzGq56oaSu5Dozm7ZNze",
  "key20": "5uPuGoyZK8J9dn3hJEAfGsuKQgywCAzKG1hottd9xHyLHd9CLvhAtYmhcQsgizmFXo5etAaJUWYacqFg9491eFXo",
  "key21": "39RwJXWH72jfgRxmuyJRpPaudZP6FTrR6w8Fs25SuDnRKtFYUasSqpG4htHaAipL1Fa6UMRKiRWskfshXBSUmkf7",
  "key22": "5MGK1m5JtvbUeqyPwdcWSJacSk2sjuGwmfoNxvHQPSZnBUqAYSdnjPG67eTZR7gMVVxmHvTrPFRzzRy6TYkbDVHE",
  "key23": "5ojtGukBC4YvrYCno2XbYkFFgo4bgpEuWxbFs3hYAgAEG7PhuHfd1P1YZnKm1SNnVqZCWfrXCLKNxMR6bVRAiuga",
  "key24": "Xv5bKf6sdd6yH269ZK8K5owZcm5XhvPqGY8gWn3ZPneQNx2f3ggNPYAgwhs8YsdX9jLvZZ9QMfn9aRzwAVvtbYc",
  "key25": "5f8zz88yBSTGXGxDWkrND8bmSKwvPeu1Bte5tqFuEutR4AbGx6rConxJjTAjNKVzATDJuGrJAJh6QsVg53nqht3D",
  "key26": "gw7iApSd4DJ6mQpen6TYXDzi12s5N7FQrcfdJZiqQTuHtsizkCUa5EmvwVuDirXhhdU1dbwBiqHtPMq8dZshAxU"
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
