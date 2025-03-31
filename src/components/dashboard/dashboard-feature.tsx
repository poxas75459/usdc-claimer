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
    "4gWr5RfGtDoChqUbdPVZ2YG8SDRjgT2WeKjHHkmcALufuvQ5pyERAkdaTsJSnAmdzUA2RVetjDf6PT5RNxrqximE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PNmwJaYT8i4g8cPGJTdLpvpZac3hGHeYeh7QZo1D4kcNPsSc9RJykj4sW5W61cS6aEUrwrgoCwJYApQTNAPQHLe",
  "key1": "2s5FXzSiNFAGSJece4Kbio9PrFj4GcN3CrBv684Lc9j49YiwPTvauoTQzH9zUNJrKP2k8Fwa5Cfp4FTjxkGBXYGX",
  "key2": "2KHW84zGH9EnEE3JfycEzfdA11TCLz3KPGSD6pUutkLaRhvL6VG57ivoM15PUCwkztSvF7p8VzmiXFACyVhXEbLy",
  "key3": "66abeSWhFsvYbi3My9q1nSomGTFqVb9UDeTdzqk4Y5zPYuMzAPvA6ogYjcFADUR3ESfdbuEt6Yo3udZxKEbD3hkm",
  "key4": "1L8PjSA125W1Zp6xFaaDnVe7We6aYWbt43P4fCPyK4vEfLn2SkfhpRGkuXD4tWX52H64aAPpj9oMkHD1XbU4ba1",
  "key5": "2Xp9yeyXj6RWtweSmqhnqjhiwU7zEdLVDopsAWuvTdRreJu8EHWXaNvg4zpVtkCZJMWSfvMMGpTK9X3q4h66FYUH",
  "key6": "2GfKXaZFTYZQhbPfgAsctee9YminhaDGsBGK6xS53bYdLVCXr5R2hr6G4v4oreSgeiftehQqLz9VQWep5tRNzYHJ",
  "key7": "392eVqna4iNe2eEq41yAUWB64j9mZ6VrXK7jW6spa2ZKi39pqvjW5TR7wyQkeBfSqjQdW62LemJ9KiYKTmcHhifG",
  "key8": "RY25ZRxAAooProKv2UWWDcF8DxjXWYQNm3B5TL1QVzKjshyv1aS66Bs8KKTUx9gGpSaCqUSudyXMF9vJ2daomGo",
  "key9": "5Dfb1iDn4MDSXFgisJQBsAUBpc9me7nJXqsjHn2pt4D5GgTmq6sotFezbtxfHtircLCpXW5wWdrpbN9NGX55J6yu",
  "key10": "2uai2MdJ7rC6GWVixUmKdJrViWVwkXkke6XdQjizv1nmsirPuCiSCPy96yi3GmnRJYwnJWh5PtXqhEHGybFbdLf2",
  "key11": "EeT1bJDu8FoF8cNkLEC783YZJre9Q5ECYypSczY2DZLYQBAi2Acg1hN83PuHG6M8RdRnE6o8ZdqiRdJrvjdKxeQ",
  "key12": "2ZyGb74n7CadV7FUfsPMYDsrgKXAvn3JbZQJ19bu2U9N63ybtucGMfUNraDwWKvm49577EpcLhkH5xCWGwf1w1Ki",
  "key13": "5hAbyPsWP1P4cH3PSz7fdg8W7XaRR35UvjSkPWCDedvVRHuFnzYTau8sDrxkyKNDuhT9LfLnabxK9dWL9YLXxyYv",
  "key14": "27QBEdAdeBFjmPEGWZwz1gZtSrd1a3Sx2HreHpkPfaEwH3md4fsh55o9Ymqaki4tfXVsqw28iWC5Zxt37PHoSA3r",
  "key15": "29Xdp3B56Zd28pSP8zLSx9opo3yeFb37btBFLZov2CwRJwRZvcQtZzUsosRndveN5cFoX3wuLRyiURAFP4bpP7La",
  "key16": "3vs5Xre61XPNbkVbMjquGuNGCbdq4MEDDdvJh7h6zZBLjVpVjrDJ767yhFiPJVGgGszL2PDztMX6w8jczJqdCYt5",
  "key17": "4vrx1oYAarSVkdg9wHtpNApQcsmPLcGkBCKjW8jwZyZvM7FeLiW4Bmhd8jWK8Ht6yJqssdsXsk9LWaRwLjws3e5T",
  "key18": "5s8tdBTeZovC9n7WYvAhxuHd2vZmYxnXg5YHVYTbd9JM6shePjgMv7hSNuXAomhdEx8JzPs9ahqFCdnhcC1mXRBu",
  "key19": "5pvGu3ciG8unhzyX6r89DkKS2XafJM7Mu1Smz2auTrCp1o7v2wVFT8XaJPUZ2VbdjpbuLKnq6BCR8PXiCRjyFFD6",
  "key20": "46qyYuurUw1JwwVC3psTUBJDTfkPp2vBJzEv8dD53gcWxBG3qMNGbQKxRoQP1c8KcC6XdgPgDsbnRqLp1m9EXTHU",
  "key21": "o19GsRtBY1k9PBiesMH4WHsf6wDJiuAMsnaSfcTDgeW3k4QQkRfebqpH9ir9n52VLqfpeMR1j7wykhH9ZkRQGp1",
  "key22": "5abigyCh9PwCBAja25DKMD2n4inUDoTyQneUuqePfQTV2C8C4x9JCLe57CFsjocmVEEZGFfoCS5fHFkgBWgKPFXU",
  "key23": "YwRkNetniPL5A4WRZX44cPFzduC1GgSpDdLBcEcRSKCi6BmsKHLnriSvooG8YuWQGw7kHVUNCJwb1azSLpfnwf9",
  "key24": "53hqkSanaBtbb183sbxeDzQxKbd8hM8f6epPKKUDiwFyZ13mCMjYNK3MRXWAb9KMGspvjnXYi4y3jgzKq9J9Qb26",
  "key25": "i5wWz9nyihwx5Hjrg4pRJcBEV7xB2rmjsnmYKZ5iw3biZmt6KQJsxgYpuonCbxxMeiBq6W7yhHJh8RKBisnyRyT",
  "key26": "2nR47Bu3o9EWVqMP7a3did6fCY4Y7azeSLLgh8XvNAqA1dSBA23ZabKcwEXEJ2n1Gw2RSPYPn4kwc5SBJVVnGrue",
  "key27": "TcFrddaJP7up1LNSE3XhmR3Ne2HKk3zteXDftyU4sSHKhexzT9DY65LjeUMK31CpUDADvmAq2RhcRRt8ehwBcwq",
  "key28": "i4Z1GLafjJN7ZpeACtcycQ6i7vQuh1yJphn7wnPqk7NQWL6LcFtNggQa4usPPVnEFNYiSqjzeKHAPQ5t9qL7LwW",
  "key29": "5cH6ysmYavbPsPkFGdX3gEcq2W6qbD6wKi8pEtgggdN2DA7okd4SRK8gZKXZkKHZMsvP2ihQNuvCJVTy9qeseqVD",
  "key30": "5LvMZTyN9at5FrXX9itbTVitMiUT2mEsmGbB3f5rGfiwSJhbGwYvwkLApYEbz9R1Dz3TigaFbCWxJGdmwVMQJxBR",
  "key31": "2yf3WqVmyL2ub7FK9ZRrdxn4usDAAWG7sGs68ZtfwUsPbvTqwVp4VYkcAEnQWFNkDLEkC8h3Xp2Ne3KjMgi7uNWf",
  "key32": "51rPVZCMQgpKkSQqfuojkpKpLwcAvPGuXDgLyZ1UATX9DriELQRTGYd42Md7Lw4Z4DWrgNhDuTaN7JLmVS3Bo3aA",
  "key33": "3oAYkpPRxXsLhGas3kBQP9z9Zs13EZLkAZNFBLUZBGmJ3fqCao23VXv9wgD51PDrz4VWGyy6HDdm2FNeX1PWS4s5",
  "key34": "65U44Wauhv1LSpAizPCabMbfQ9m8tnd3vFWB8sEmuogvzYqrgL23MrdaxJbpi1Hg4gkRQ2SJeBdedXhAbQBGKxg7",
  "key35": "43wCT74vobTpoSiVgAjRuSSkbZQ1XN6bxt2MgkYMkMMKTh1wsZSwnJHQf63eyXvZ5DGwD9vXiNbVq4eheVanWRtN",
  "key36": "3ViBPrYvwvkCsKnSLQg9emXxDcQUjbevbwwpBAAo2b7GmTtXB3fsjSN247YPZvf51xyCwpXFQVPEiWa4Tm56NQt2",
  "key37": "23WxRfjSi4k6tkXk5AEmskd1s9Wx7AgjER9P885XYKR6o62kKGfrBdFSJZnSDdgnm92cYU4WXDBMqTfpHCG4eYNF",
  "key38": "39uMeVgB7v4JMW36crLiautGSx6DdkGHrHt4is6UtU3kdVLGbXxKbUqydYvP6QP18QqK9jGYB3s3K3HP8rV419WK"
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
