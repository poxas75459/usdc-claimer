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
    "NheiKZnh6VSKjaAQ4ymLceocVSVsSSmXT8rddG5GEhwSb6BaDwVFoZkaaySjAF1rqLyxtjx2M1YBjBd9Un45ZMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJyiccPuB6TkpGhkY7h4MDk4B94PDMxYF663UyR7qwAjNpEEcgYL6Ax6asgRad9e2oMfPNEzdzFrxkzShGs4zav",
  "key1": "22Fbaf8KJTysDjRzT4eJ9s1yW5HyvewC3ifi8CuxPLnXx1iUe9r7SToN6SzyXgSpJ77XSJxwcfW9z8T78FdEj5KK",
  "key2": "2fFQ2g4H6GmyKAaiVeWzydRotPthzkoAnS5EfXW6YasZYbAJQ54Fct5wKZ361BeesqEnASr1fpkz8YBsCb889bHx",
  "key3": "Pt4m7LFwtCEKxyrcDU19TNsyMnQydFDTxc7S9wZ7D35zNMKPVtu1xUz1hCy3YYSDDQdGzjbzdSNWaRt7mDdbSHp",
  "key4": "38EX79g2BzZbgapiGGGD3CGb2KfDwa94GKTUwMrPqGvvRcqjhCEGnHUjcDH5zYk2ho7w7ToQLUd8wobcPA3GWi4J",
  "key5": "4z42u5XjtFXhjveW1MBsWJxE7oNBZsoWDvfcDJLuGyMgU9d26Z7Kkw7kqdeCoWXUcvMNUWUvT4xiBf2aYiRb3dhs",
  "key6": "2WeUB1Jk5KeWCzLRQkmMfTERtKs2pmyMjs6Z5NdWCJEtMW58yVuyKx2iCNbaB29dnJFEA6bz512u7nL6zbQTAJuN",
  "key7": "34xKYGMqoZByP8Nji9svxrsxmpCDCc8NMVqtVasp4TBy7bwVwt8UKQoxMWZVWF1RfkCCibWZ8K1VZnMk18iUwuUu",
  "key8": "65VXjNTcLprCUAZimkmfzSNvD98tFkhCHDXeLNMM1SmDi6PmD2UNsAMc2oR74LdFXprpMsAdsT1frhqH1HejcbX1",
  "key9": "5BaR3qCthGkCJTbgx56fbgTWWWszG7PZrDYS5393YZNd99wn4xrKQsVMJJQjWqNnvThwoqbqwFCvoaj7UmqfMQKu",
  "key10": "Te2KTx3GajPkTDFc7ezB75xwHkCb6mZdLWByqhFR1Zr6eq7keZHjYzU9ULhFdve6RifSCmdpxaTqvrbGY22s3r8",
  "key11": "3WeA7TzVMRD1WyNGuFhKGyajqiFaeiwz7hSrd2KvrroCFWogVNGJEh12yciZopJURDzuC7k8GXc4kSkyS1uV2xUC",
  "key12": "2AMC15MvmTXW27PX12Lai4ziJ7PTWXtfYA8oks5GPAWw5eiQqKbkYVVLkGTpKXkxS4FXaPiMfz3fLQMgVisWxme3",
  "key13": "7vF2yPbyEpYRuGaTG9yLbL7sNzz7HXf4fdYWceZ88r3RSpbe5LTUZ9ZxZBiJQzHaezKTVXx1rLo5DKLKfiCFNSr",
  "key14": "4eACPc1R2GyAAgTBEruMzAynvy1NQwVPt6XgxGh78bjb55RMvdkjpqd4R6yh4DKXr9iZ6EsyXRPMJDHpP3dun7tv",
  "key15": "2GCz5BY2S34j4Qd9QdjejNkXJ1DnS99QB1G6VX2MMg9mfKPXuTSwBgtk4Tiy8djubAo6uCucP9y5hw1QVRPPmuGS",
  "key16": "265QMrze4UzTfx1zjKv5uhDYbXwxtjymDiKTQv1uZh7uca76WUUfpeB4CctuS21jKpmuadRyKEPHYczM1hBA8FRB",
  "key17": "26EQW19NnDeSy6rjvMyTDadyyoQbBXxpuphJYLswJKw6N2KhvMEEqA8wfmhJFVMZCCUfJC4w8RqYQS19n9qzDdJn",
  "key18": "3ZP15ELocfuV5sx8MyyxREiAzwrvmKRRBipvw8FCVvDMdatAsqLRmqt1cLD7CRLDAMLaqtBrvyoHxRqhueSjQ6tL",
  "key19": "3iZVMhrsH6yQz4ZTpdShG1U1L2d3WeR51SF7D8s5nY9EwSjNmucvvKJMUpWQHUBfo83Q2pQgqpb1skYdiR3tk2Kn",
  "key20": "4Nd4KqvBGKTs8SxHi93W7JhTAwJDHpv6bPnp7MyFqQn4L8RhtBcMcMKeMUX1jZugVnY34gWFXYm8spbWj4pYLZMh",
  "key21": "RbiHDd4LtzmWQaRQtBiwAGNkK5H3otw8kv5WfTj9HgqbKq4s2HXT4YJi8P2dukVs7YJ66YqDYfdU6syF5Bq8FDJ",
  "key22": "2bKfm1xz74Rmzs7EfBQWRZrgGjd6cTVZjRHM6PuLvHSKcwt581vXMFU5VKFgWogABSpNmPyykfm7rC6Lp11inEwF",
  "key23": "2ASSW73S34kgLotUGrik8E2YuPweu2vQ4j9vFigh7ftc2jqx61uSBeUQoTKnzfKLd3LVqUMCSJEYz2pcR5fFPi7Z",
  "key24": "3D6hd7UrBSxKLs4RroKnC2opZZz4wcgCarNWq1jpumoyNj1cxdi4GitM6KNR8MNqVfbThNdG4TG8vVroCfY2zLK7",
  "key25": "uDxw6LmuSELioXb8sRth1nYuvXZwJ5FLbR2NULmfF2SikxzC47iLb13eLqkuhwAqg8LCxeqQ7rGXuhYB9ZEuMEt",
  "key26": "DtxcyATHMg5hStAwPexiyAEfDExWY7YyHhmKnp7vfjV6dyLp3BPaRZ5TRmj9E62xuHDj5izc5G3QR8bNHroxsBQ",
  "key27": "2vpBRNHvTU5SAv4dHjgCMj2shxaffC9xjEk4Te26p9gDbzndeNHhZ1pz5ybQ1ZS11NEoywJWP6GYxAZiifxxQ8w9",
  "key28": "3KsJJgGx2GpvNV8pgBVsJvrc2GamfWWYAcmnYYKYQKMMjz2PEBKMgUrwyf3uc9gNPEjEvyKcKdnzvdzGhrjPzxRy",
  "key29": "R6KNbsLQCmn8ar69ycSftKifNThSULJ25WZkCRzbiw2nMtdwyMLBis4q4J863KfMzuUNtFv9G3LeMumWr7GWA7X",
  "key30": "4ZwpwjV1gTourMMSTbUCqcQTcSn5E2ADSwS23TKM8G5YsRtt4q47toy2H8gkbJm5E4rkB6trd7VsX1dmERgnxRLb",
  "key31": "4B5q8jYSF2JXs4ZdDB7JmXyumynDr8em9bQnr5Lczb1hBm95xg96WXBUfDRofcMt93pUorbVAWHWzgusxWufQybF"
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
