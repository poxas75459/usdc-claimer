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
    "4mA1TziHra3K8tR6hYPeA9rLHnHQskQdstsKB2ac7bskFEnt2DSSDeFYmhQz5PA2ub4wgzPbcPMWsMiGSVBgp9bK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DxvaQ7wcyTSvp9dta2yKVfN1xCxV9MfEU65NHJijk2vrKYqyhDwM17Zkzvm6i1gUDbHUXs9qU6ozEc3ic3Ufzet",
  "key1": "51LdjdpfQD6WmwyEc8YETt8MMMVSCeEGTZirLf6Ryjba88dcWvKLsbcsMf7gpitSa6bqYv5Dgo2BHkojErLFDscK",
  "key2": "JknhkovxDMjHMNfQ42DEaySTLxQzWfUmv88qKabXsu3ozgwNcj3w5tJSBAsgd6RHuEnfEGLFVEmZEqXe6U3yneb",
  "key3": "dVCFS6MEqmko3umNxoz3pgrgJQJpTSVnCyhjTtsguT1iLxpUaAtia6HjFFTn2k31HoqEzD7omcJ9CvB4sovQXXC",
  "key4": "2J5k7CqtUDrnmuM1keNC4K3DMTtcQWmpRY4Dg9Qvo2bo3m2wf7zsBU511kfC6PwFQy3TdYSX8bssmsKvwC2NicCE",
  "key5": "2GJgzU22qZbtZxZ1ekggt92Kn1yK3AoWcDT7jsk6wyDRYRb5W2vdAKM7kVRQ1DyMq6wJzX3Ud1DBWUsqN1grihR8",
  "key6": "5mab4EEMuV7Wy4U99jcX7pwnVHjQC2bzdXewccur6Rx1pFtkxGMsrNTgc7M42u28RKhbjibFKoNHMabWpPcx841y",
  "key7": "64hhZbcUXDLf1B9Aqmqm4c7iKiajbsCZuvpbekBs9bZXRA8RwBHUw42sovaDSbWazMkyAerBfEzSgt3hmknnqTah",
  "key8": "2ayLokKMVPBYiszGvA1YcbBGfbqV9giCXJSKRfbB2N9SzFzqBUb2sYZYJq1zmsPReirinrv2iUDFkjPdEYBY1tqH",
  "key9": "b5jjVAyXXqaGfrWKPH1EA2m73UxsNc44tJoD2qGwCHvs7ZBtXKNsvYN5q2TJ9PYgt3h7gAGnxPMKius8omoC65t",
  "key10": "2DrgoHhxj5ME9aTdsdUpH8XhHWK52YyGr5fjNsTU4Z6qh6nqZdVCpMU9vPgZs4MBq2hjRA8B3UHM4CSLf5quQHjk",
  "key11": "5JC6V5PZMsjnPmKGzZ8wHguiQcS7YaGbtxE8jyqQE5UvXUv11swANcdtBWTv34HaZHQ4x7bdwRCN4gD839iJ1vwm",
  "key12": "4E1aoWxCE8CPYroGDc64WkM6B1zUdA9hUMLjZtVuLZSvCwrKrtAZgZyrwB9uYYgG6qUepcnhxLhVsUVBKLA2Ptex",
  "key13": "7aMxfD1vk7RfYGLNENXMTEm95DKuo22EmBRScB57BqUWk7BMfsPYxzkXDJnpwoKzdYe4KbcdYhUWqiQG4PS4hyy",
  "key14": "4HXnJzPQqgzuKSjx1HfYW19bpYYy6RnHpbYwDzksT9n6oLhPYF2LYTuhJN8dnXgW23BnSpPoxvcxLstf9VahN97d",
  "key15": "4HYTRFEXap5Ar7RyArJfy7MLf2mEm7USaodbczJ9hhGQQf6khSMyM8QyjgKmswVhvkz31f2ZbXN9uKH3YfH5sQMG",
  "key16": "2wCQ4bdy2T2BkHf6cutZ33pYTBUmd1sutFEEQLrPvjBgHcTaXF9ga1ZrzCc1pBkcZ829Vv3iUF2eRFU7BDTgyNWs",
  "key17": "2vwxtXcNRPnNPFv2Z69nr3iQu67pgCz21DggKCFyMVnaGcF5zznU5xsyrswbgQih2moa6xh5HoPAzxBjwyLKCjvU",
  "key18": "5ofePcUEyWfy4qK7Gp9VZUABimZ7iux7oCAw77yxRZErEisc52TKBi5DZANcuijY3aiPNgvVjtjTGjqZUJ7zckxe",
  "key19": "3s9hnD7ebRzdoCJNgnMFr45x7KnMZNHgM9MCmCPjETTNxfWf9gwoH8R8Kr4CKKtBXsQzvtiTTCr5YpzRE1SQC1Kk",
  "key20": "66UHzu2xViZDEU7VTtDMNVb14onbvNxz7kyLSBHaNN1sgnkQSb9qJGFbAK2NKvCNnuVQBE29g4VuDdNyv1wHoMYD",
  "key21": "3BDaYD2dSwxXNvbrkDrDSXpRBEUKGxmfWFmY565AKz1UGxK9RUYdmvYw1Nj8qbouiMtiKyURQQYRg4hJyBHx4AvM",
  "key22": "3cpANKEikbcVCgPsFNDikj7f6xH6KtNt73j3aXEACiCw3QirETvnen6EWymD9exVrFGzPd497GsG73myG4TbBuuM",
  "key23": "4U6f4NShGoZKNqcg6DaHaiR6aj58z7hN14P3JVzxpagHhqucWuDGX3B56mGemHPn88XffBBQYUzvhtzNxSohC82f",
  "key24": "3K2bWyz17ceSDH2APvguAVPmXHCdpwrkSFU7m714aL955copQbahf6Aseoyz385e15BFmTPfKAKFYi83wj8MTGZ8",
  "key25": "3iWL8VGsgvuXnHC3Gswb4CaZn5Ko8mEUN6Nxsss9epq2EZvwH61Zp6MyDZ7G2fduEw5a66iJt98E98p5CXt8iALk",
  "key26": "5Jck2fxHvE5NH9v6WxFbkYkskzFkC1QUf24bR2PziX4CNhuw7LGw672Uj9zMXLdCqeW3QqPoF3UnvLCUnLAJpvD2",
  "key27": "43Rg8J4qAF8mbTaQ77dxn2kBNGgTGFBbu7p6xrgd4hZuscoqUCpBQz3Pnps83mSQiA2ktkhtefNt12rY2Lpj9gFF",
  "key28": "fRJAL6CzsXebi1obdUStMff9KSXEwPG6P9N4tCApMCf5Wx8C8mp6FB1363jv6n3EvfdphwNwqiSS6X8DEdKx1dH",
  "key29": "merMhXUAx4oRPTAhrjG5nAxZo8gPzLCcYJUb1E5GthtwuT2jMD7tzhzq7K2Lh7rexBy9idxdfkx5UsS8vnvGqKr",
  "key30": "2hdUJifUah8JDbqZw6evgVYCE19ksV7GoZ4QCRLd3H2RDpRtUSjw9E7XvdehqYec3ueW6Tz2ufiJCsCqFxZrXjPL",
  "key31": "3kjU2sDyWk7JViEfZQdfU5NiQk6uxSnXRMb7sFUSmqSCTKrZCUFSphZmJFKZzgUxhJzkLCN1LTkSffftdKKPyZGu",
  "key32": "2ZroAGLTH2M4ZmKFgmA1NGxczQxfUUKdJayQimUN6FqxTSrKP15URAf7FU4ZFwtnweAV4dG8QnzuBPDrAkxp4KBS"
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
