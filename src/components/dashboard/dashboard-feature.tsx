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
    "4d8NsuCDKXve1fD4oyu7tgWdcByfcrRyctzGNw8qRccsCPVCpaAAPmdSn6b8VV8uZyZNQWxzV4BVse8egUzm7FRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yYtRDTLckuU7bBGdhc7qWxL7CpAxffcVwayc21SgDXzsM32qnpv24F5J2fdBe69X36gMZjcn91g8MtAj5A1NgSd",
  "key1": "5EsMshHBEmem1uvGZaGDLbQGenV9SzzX4m9NgKJWNokaYt9KdLdhZX9D1jRYr2Gas32KZJ5wBDezdkMAHpN91QXv",
  "key2": "dN1Fb4VzcYQxKPTyYyhGUE6QdYCqM11ynxVp2dkkB8JajQFzpLy4Sypvm8SJrSYzmw8zT9bDChy1KgSkQGNsHhW",
  "key3": "2L4oCAUsHpSVcQwZNq4HK8F52rMPM62cJohseVvD484D4T9PR2sRdPtNgnwdMyC3q6bMyR9HQWWaHiNfFgc9fKp8",
  "key4": "4hvYGPBeri4sLdH1k25JXnfNZCkTgLjuwF3aP7QoKSkJ5ViAJ6wEyat4eH9SzisZppjcJdrV5PjCbKFrUxzHGdDG",
  "key5": "32vndnr41dPBcnHiCULuuZoMRAu8jPHbPtw73tHkrQ2UkyWRzrZKmNJM57hbnLuhZwNCgNnD7UG8w3w2EC81RJ2H",
  "key6": "SVqCxcbQoFRCr4kQmC1TfN3rRjaDYcFN6KUDqyTrfbm1P2dLyDmYWwJE8VcW8unjyyFXHaAHkNkzyUtANiVzGWM",
  "key7": "4Rc5fcUN5JXMb4tzjWrrTbvzi8ibZRQaH7bhPBiR4W1PbH5CW6txPcYsuvU4uQyrTzjzcUrhVDk1ubR3tVYgnHro",
  "key8": "3qQAMUtDtkv6G72wEtgJgxqM26FzQHrYdLx1kepx5BNjCDY9U5oDPxEc3cx9JtvnVGtPBmYrwsDtxBLdpPzxBbiS",
  "key9": "dFDfsGs9EUR8VKMJsLWHgSsa4JaySfC81KtvFp6pB3HXX7wM3iRVMgv8SXVdghiLPvSUiHZVafzQWzbeBChLr4i",
  "key10": "38h43giqg9cqpfybMwWLeoA7gSJNVotyRRmgWHzY36MoasaTCX22CqcYDjrCDxnwcEewpwryTwWeqsgFgXfAfP1J",
  "key11": "4Qnt2dPkCDXFneKd1wGtdSPzLS7MEvVDXATSv177z9DdKYcw1Qhg82jWWuetrijig5iT8ic4EpJhWUcqCCnLrGve",
  "key12": "4zQd7UfZCSqNWtQDKHsmDpDNzNLDZg5Zk57DWCwAvAVn6r5rhWsvdURKcegUDMA8hNWkXA7xRkoYNrqdDT1vtRzx",
  "key13": "2enHo9hoZbgCk9NF2yqvDaQ5JAxtBHWrpywyV2qk88uvGG756jJdekbgGr2TR1VPEeLzFxEbQZ7JoC1Y75P33Q9g",
  "key14": "5eLiuEGDTbTj5NuVX5x2mrSzeTMfrYUu2v1GEaBH8GHharmq9tnWhdErSpU7ATHjRSX3YYYnrMSMekumiqrGeKDf",
  "key15": "vWHECmMit6La8Xono8k5giPDGkhJKcyN27wUtY2zcthdMcPqCxf43wxVKEhwhytcnhLdYmxbLEX26JeucZ5inc9",
  "key16": "2St9PiyZMxTvubyV82obxk7XWAKGA3EPixePK5xRTqwtDbYDVQkcAXhfMhmHR56q7uV5xgPSKhhoqVcnvZZoiCwW",
  "key17": "24kR7Zjb5VAuyLuVkjRMSNLNgGsAU6UFuFtbbfXjtHiChukC7jTCseEWViBkxrNqvLxPngKLWEwvnsaPKaf9C7XW",
  "key18": "PTH7ESLKD3ktTeR76UYrKDZmeFWLHQLxXKHUFUsqmSmS1PJfgFmr2CPL5w1pYPz4mmMkeeoqQnP1zzSrBLGrkP3",
  "key19": "4ofP5gGnSBKHh1X9yRYBbGDY9eiMhJM1gG3GnXQZPTd9PdZsjsG1XXfgekqehBcfyqC1YAM8kfpmZb8RdCuXMU52",
  "key20": "3AsyVP99M1jwSuwvPVfVzVDQpejHo7u9SnC74ADR4svgF8SA6p4d4dCj3SaUqVRxdxoajXn6rSVyzstitChauGjU",
  "key21": "44Wso7iqwVeC4inutv71usYCJdLpKLJYYVRzgEC8WwQSinY1jBoLFxNVPZr695LrvYd7eX7jtXrRoxRF8BJvuYNb",
  "key22": "dSgG65PMiFjN8LkeLqzXtgXJQpzTRviwc7P5LwdsAV4SgGZJYsBWAX8RkxjtaUN5B4Wz9a9HFWDFKGMUHuToua1",
  "key23": "Erhbhmn6XDFwhfRcUa3nWWVJFcAEGmF8N79bfUcpNit44PJ3MoTviUhQf1NiQJTTBP4qTFwaPAfBtDcws9zwFH5",
  "key24": "5Q2nKTpPGPtncqsQmRzyEL8dQsSqPa5EuRRoXAjuXa33H3T9x18JF5FCkQXBgnkJjZnyUvd7aAuQKHPqxpMSMa12",
  "key25": "wp9d4Wb5TyX6EAfFWPvCpJfnQVUtLwaoRi83J2rRQyfC8sbE7WtL4RXA91s9MxSHMbZBbiMUNnPYE4okYnJ5NGH",
  "key26": "3r42pZkFykK8xzUyXczc3hXv6NmjavuBDdkRZHUNuaBo26ChyraKw9uybhm9xvsigjpgZRZfa7zybZoHTCDggL9s",
  "key27": "4NwwSaSmCHrsqsGE8Los7DpuwgzKXW5Kfxu4eKqR1REe3sM9JJrbLuQtGfdxxk52hEKXjLirbMehNhNroC2enCLC",
  "key28": "4jFcAcwa4w4QsCZP13A2ESb1twwsYWNCDGpk7gv3gSXRLhUh6FJ3hfo8xHTcER1Bbj97BLeDKKu9pHk8FRXFuLMf",
  "key29": "46j72NwrUf4pLCFydr4KZP8SpiaoyQqkRwvpixiByooDsqNDfeGSsjqz2sdXxdAoKMhsEjhsUxJGy9zr1is6VvNA",
  "key30": "o1aVyeJWW22tLZpnALe3XeQ7st1GwdjB2EejnyC1RDfQ4antxjcaXu5em2WLnV6oY5tb8Vt6bt6wteHx9k2GFWH",
  "key31": "46YhDCtRbWP35LUvKmZ4RkGobLn9XM7X5e4VqWWviP1RxZCMV7KLz6Ui3vhDwx51r7dwQw5Hw9Cbaa15JKZex5Vv",
  "key32": "2bX6nocKtn1VuPbNWTMN1uNA6uvyhh2W4ATChGSmCHW4nnKAJ2yQeBnx3G1RwbaqLLRbJTZkaV2Kch28J4WDFwBD",
  "key33": "2VTfTaadZtrQztqf5y4Sz3wGycx5uc9u4b7TzzbLnfQ3UoWJFUL6CeYVETfA34CXy7x9QhFVqYoiYzrDvhpw5oqD",
  "key34": "1kZVxmDDEjfAKmbyZxPT6Eh3o3wUFW9tsTar6d6iHbPdLSwanh1VKskT7nxdHu9KKMxQC2BHmifzLPxhtZ2bayh",
  "key35": "3DHHeCRUmnur55P2gVYxn7Qmyk4YDaFBC71nFQtVxLZtkn1YFihWwz1xYYSq8eQkmkhWarnGUS8aFZXqjW9fQ4Vz",
  "key36": "2kQWbuTFzLBoQXFyXgeJ5ZVq5SFYY65h57vqUr9u1FW8yVVcFf72X5QR4kaVm2FJ3QspkGgz3tvv5RYo3dCSSHhk",
  "key37": "5tmrygFneWMrPiLbpFKikAK8G6Lmr5F31M22vuCU8JnuEAzLjoKZxd4S5fj8E9WE8dJ9tv7FL1ENHunP76N8ZHfm",
  "key38": "4PRP2r1KoUWEEfdTZqtbK3dmKaPCH9J1UdqniD8q7iPbeE3VT7Kp3hvfQpJGXsmHPgnKpUQwKeTd6hmhefPgzctn",
  "key39": "nf162eXPJeaCvci1nBgqaEYz68DpSNXE2YeucB9F7TAdSxYkERW3hPYSnSe1MYRCkrxb5TebzcFz8A6B2dBMFgH",
  "key40": "463TeDctGCDhc5P5QERK86iM2o8fF4ftF8zBcc83myTy8Jfs8CdMmnR4ApGxMFPGrZUFwdwF6UpFSh29ao7QdZ2F",
  "key41": "5mWQMyKWYGLN82QZddAq8eQUg9UvUxmcMnvAmL2TAXJxPPWNS1hT6KyYqrq8F7QRhec5ZTrBkSQfkXWLgqZ3cTg1",
  "key42": "5Xp8tE8xkGQtwRQnECnWwaAKY9e2syppgQFNiEQMrBxDhUcbbdgLcQsEBZLeHTrbqMEdNewYxrqWZUmzwPtFQ1jq",
  "key43": "4Mq1myxnCavXTvd6VXbd4x9TmoUgVPodG9sFxNicXGCAaMpBc3Fbg7Gksi9kok6jM1WuTP3jZ7zRHP1KcHy8BhgB",
  "key44": "vepntCXwbkdHSpJxo7c3ionMfyJu2QipcTyNNcH34Bp8kjDtQAcsDC8Ux72buVNoQuA6a8YyLZxx7kXQ7gZse8P",
  "key45": "3tdNCBcwAnuGNSgoUFjH4GPgiXxPkmifv9ASD4fxYDYbQzAK6vtAYRAckQHtMj6593kcMuSVHhfWp7J5pAuqNV3T",
  "key46": "2kUSpmy1vECFr1jWLTeRXusL85az75r1KHbnFD6QdFD6grZND8JbwGRZCFWgJt9MtqF7R7vsZsJjFYUBRwMPGRk8",
  "key47": "3cNbucSZp5sGpHTfyrCRHofCKKa3TkHUXJER5em6hxv2jq9sy2mUZfw3TRxb4dxPx4gm7JTvsQJf8bSuwTrWk5az",
  "key48": "3A311TvxgsNUuFSLf3Am3vg9Hf4UT1WzyxkR9XiS9hK5W4JySU261xsW31YUDq7W63bA7HMPAwsVdWDqMvQQoHnn",
  "key49": "319wAnMebaLiikqg7eZYqpgC6zjLsBCFdFT5dEjVSXU2WdJm7wHQyhX54AXtiULt9LzxhSmEbYVpfgbE65UmbrmC"
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
