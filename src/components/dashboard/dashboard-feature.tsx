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
    "3ngf3B3nkMpbAWruYSe7nnYuysFZpPwrxNzqDQpyAikTzqKtfNHEMygGBPUaSj1qQkCoPpttqtbwNNWPjSoucWUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BXSMSSUUZExUwQnBBiafyZBzgVt3GyESeWfDL6az8NGywygjrKZPZWDuzeUdXMVUv7wokeNwnFGszCbePnHw83r",
  "key1": "24ST16Hh4fae4HBQAGUgHNNnArjeSPsfbSWBmCkTPTFVfMntpa4N5RCZXBCS3XPCeEHFyUC4GEzbxmAnGp2y7pss",
  "key2": "MKg3vVNDfgZ5V893dWDvtiPu84puLS4LCmKEvft2epr4GYrmazYm4eQ5PBGnNWcMsxEixirvoj8QCpQRcdgmkk4",
  "key3": "J3njAxa3r9LFKGQgsm1GJbmXNUHvgNywJY68HU7qGxLu1XyFpi9bWUwGDDMB44sx9R6HR7tbELF61aRo7vbzkTE",
  "key4": "8sLp8mmGP1LuHs1sD6UwiFYJxXAv4aPKX5aa3DUZrjddZ3yn9DgmamJm4ynhWvahnsSWyZQsRhneprjM7eqrBom",
  "key5": "2hV5J4DDGDSkzW873xHiGGy5YNiVvLXpLc3rEf1Q4bgmctUGZwEtMd2u8vaoYq2Z3tFuygxMHNMcJN8LKoyCoQMt",
  "key6": "x3TFrVzxfdff3CjgBnxW6YaU9BdEdyvhcFp9ekk86AVTHPNGHxDEKEH8SPqS2s9gDnMUZXQynJs1HgLR3me3N1r",
  "key7": "4zVMZSSdZCwFPpHo5JeLDH4qioBv8DaFF2R2kvptZ7VR2rw3JcQ9hE9bT7UTvgPzPuuzxGeePbdrDn1AvcqXKbxH",
  "key8": "5D5GLA1HNH1egk7Ctvk1tm1U8fTEqb365zz4AAKaygZdQAQSMZs1LJcBoD7KWdqDgsb5D2rBe7E7Af25qL7QVnQd",
  "key9": "4sP3trFHvY5HiBVTUL3VQKv7ZFByboJ6UVnMVuUDgWUwL4Z9tmgvSGggg5YrmLoP1Sxi5fPF4rxwjLAnWsgRXdVD",
  "key10": "4iRhB9SVHTtSZ2DpR1qTSM6TshwV4hNPN4UpjVSB4VfgCQaYgKsPqjQrmRCKtq5h7As1BBxq5S3E21WBxMETMZ4u",
  "key11": "2tHLfNzYobKE72rxiUFi83f9ECQEkLyemZFDfkMcjDR4yC5imCVvShzoc9PNXyhKofv5jFR3wKRzsJB6pz2EcxeA",
  "key12": "3RrkQR5k7kwnFBWPd3G4yzMr3YY3BibjjWGH3tew6d7CPn8m9aF1LjbQ33aq63d2Y6G6v1H1a4mdU8ByRFWMG8mc",
  "key13": "5M7V3tFSCHJWY54oso3mZVYaERsSAB35QZyTact4AgP4gK9LnnEUMxbaLFnUZvTU2DQoo2cocfVPjRcbtm5BmURm",
  "key14": "b7mwgVBfi76bvdNAv3tk4kMADrr8K9eZqpQk1sE5eSgirrb21Z2eSBThxj62k4aFhaVmQ8bJFvVr3xL8sXoKK5x",
  "key15": "YaMG7qc586THf6QFKSRorpoUxuYBUvhPBALHZu17BEWFDjSW4qqtek8dLJMGsVNJW5buH19W28jZWhqHF3Xt258",
  "key16": "3i1Y9Nm5f7Xgt2X6mxLE6qegaS3bwwJRM3zQWHQK1doXp6q2A5CraJsy8gfJ1Y385R6dSB18FD7yGg8zQMAt4Pip",
  "key17": "2ozM9W9ifZ3ekNq5E2Kkyb9SQoPKu9mvgBKhf9jsVXEdbXTrqsEdto9FPnqSjub7FYJN1m3bZhqyUw7qGmzA5Wnc",
  "key18": "3y8w6R8BH64UeBgAwqrWxavZmcKjFE6vQR1PVXjR1KQHf54CZWFJPdacVMgteVdgqGzy8wyy1FDxSadXJTU7qMJP",
  "key19": "5eesaLM3sVGZ1MiMh6cjM3gLbTaNc5MCUDBsTKJSKB7vgwyMhERzMbnFAz7daF7go5XsHu4X9jw7NnxitM26rTCC",
  "key20": "3MVHiocxhJtZgdN1D8p21fnQGCVNxJ1W9aAYRafUL4kYn31KtrXu99x5oa1hwN24X34gdgCMvTD5uEK1iHo8MViS",
  "key21": "4Q8Ye3xxs9wZP7F6x5fF1DDTvrnv5u6oW3hrCi1WrBxyqwqdh3bSM8UwnnUSHttmBFux328qqYK3rNvbGcyaUPF7",
  "key22": "JBkg3JhPhYCd99U2VWnzJsYabp9Uv967GEnFqJi7YCNugwkV3LUFS7wh2GwZBvCu4BLuNgcLGH71nyaCjnq6Nhx",
  "key23": "g7GxbLkQFkcVM2V7VkB1CmSxzx2RjsXtdJ3jAL83gha1JZcDSkL2jmRXJHM55byyZriu3HquWUtGNLJN5e1hCPc",
  "key24": "4mqP8tzKbURAJdJLhx2oK3P2edr6D86S7yG4BExXgJAnNACUpxAzHGQFDyaHWfoqcV8oVsfTqaXK6aWmzfzENbne",
  "key25": "4WCdy46oTCNstgjg3GuLDqBuCGMdQrpxXDEs1aNSC7nfuExec7qcp6dW35uBQ8r42hphTohtRyMsYh7WWmCFCHpw",
  "key26": "31y5yvkaXKXye5s6ByUkcHuJhxsYFejqCNTV4CangGmB5MjdKFUaFeBudGVhU1Z3tbuttPChtYCWkbTmcFdX3RWS",
  "key27": "k9tLWsFX5Nat5Zco1JDzcaLe5JYdKMoKHthcVKScQ2pRPTioTCxZnAGJ6b1hy8UEMhjUzFQHvRFSoBnAvxNoisJ",
  "key28": "23jaZvWLFGE77JRxnjciKeF9TTJfmx3mDdz2A3MrzvshWr2xPu5LWdbPVjF8xBs35pNMjvhhZYBpBqHLwzQWy3CV",
  "key29": "2roBBcCCFXt3LRhaiHBP1RFDgXfxX4bhk87CMKu1rEdTwdcZJffNLX8vKMBrM9HScZdrdAhrPvQZq2t3cnbaiiUj",
  "key30": "528GWBpLbgu9NMCNUBcL2JrMRZZkz3zSHysLdAT5jsu9QvvJRSPhf5vzuJdtd8s4XpTccHpTxJMdX5UjVRcxiUB4",
  "key31": "kVopzQPLF8Vobmb2vcmMypHuq8Pq9zESj4gSaUqNpCJL9aDtNn4baBsLbV4Y21UHx3PxDDvwKrkp8n9TKQBb58V",
  "key32": "2zQQJ8FZB77j5Nth4ZmbdezPs2TwqhcFdqDQYhkjTyhKFGatdBDcCCQVsztUm71U837nzPi3ZnJaxvPifVXWwQL7",
  "key33": "35fok2xqyauPZEDxEHkmWTWW3JpVrX7v437NMvDgQ1v98U1efsjYMJDKbHV79oCKUk8rCHyHQzDxBSF2SVs3Kjbv",
  "key34": "47mB8RaFBD7P6T5XNdz3FJWjE37rPrXAVyPoQxF65tsfD11UoZiYEKwUpY3wJLDcmfMmsLufB715u88jyjgDUbmd",
  "key35": "5HdcQgTX1P2jgwtNsTEJymJoVe3cUQL36NAmDJRwk9DBUfbiLxv6rybect9caVkjCZaR6PEXwXxViAaeveE4Ctu2",
  "key36": "3n4wxj45wD5Y7VUrx1fuv9P98UAem8nYxKXkwFZqCjeiUF3H6XsAFidsoZk4XicghmhBqicNqL7XNwBFKt2fCyox",
  "key37": "UevGVcvVDu7JF8JxPJAP8Mwj7k4CUECiAyCsbxKu1Yf5TStkhyAK1TwPLBdraSxKxviaV3wXkkVRLeQq6VpxBP9",
  "key38": "2E8jFuYvu81CdMMagRh7wcWxM3wWjA1LxwJtY9uRyxeX5SKWpnZdH4KtztWFqXn6Hn7Bz6oD6UmHoxK7pzF8FnJ4",
  "key39": "1VJJuBa7PLzW79vBUTq5pPsn9bxaCW4vzoBX1Hg1ZhG4T4rGZqY5E3Vt5F6bS4FYEPcBwNts4uHPxKtzrfDqJUi",
  "key40": "3fMixwn7cWFqtUhNzaCHXKtNLkcQFj9ZSLABv8CY1LZsjvLMTYx2yxofr1dWNdee3SiKpwmHLQ7Fx7XWHs5V9Los",
  "key41": "3GrGLJDs7jt3S8dFmCde4eLAgf6N4EWCQpEyYsWNDVsdYVGs8j1QqDxDVn7i5zjtiahMUHnHFhKKSJ4QiPcmFP1h",
  "key42": "4Nw1rNX6rGTZ1nxCKEm47m3N78Uw2QwmeH6s2tXyuTjzkaYKvuPjJCbP3FaAxerEVwRcZUYjbJuBfXx2Nooayq6Y",
  "key43": "5TEnhW1QQrx6CVC8gAtQYetsBMsgriMPrHgLpFTpg69mHQHrZmtmvygWtb6PeMKBxpTTcJEoQxMmfriwRYv8Dnzy"
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
