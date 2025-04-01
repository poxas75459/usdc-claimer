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
    "5omm2AEJwvv54CVxzxX7aT8C48f1Vqt7jbxVJaGMYFTGgbo5FdFvkdQLwK7jxepBEgh6775h9dvR2iu9Het1CV2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zKqghuYemLk1np7k5Fn4HCkRJ7uww2LQspcJw1RXfnfSFqimj3Fs6EGFGYG6GQkc7JsdPordJxEnCg2hNT8K2ga",
  "key1": "3DRK9WGXxC3u4JYScUsyP2qYDgJ1G8CEVAbtMgFKFYUcHwDsRtQnnasXnLv2x89UNFBu5D2wUaBf4gcNAp2eiVdj",
  "key2": "2iPpufwhFoGQMe5rKHFYsXZgkECN4Se2d4VN4dzsSDs58dHotyL3cqEeuXrrqyefxZLysg2DdA4zpkSTnveD3uL5",
  "key3": "5VsreZhvDPGnrqz7cB6ebcv5yYPZA3WnrZP35VDenKSFrfzjGQgfZWuBJ8dH3g3q5PuxgHwFbVS89pDKGUENMz4G",
  "key4": "vSSqry2DD3aSTnqVnHwJMpEnfwhp2CQ1zXMVarvivdy6kEhjy9GqWHTgtdcSSsQGJ41TE3wmeZ6PmtNYTqEhD6x",
  "key5": "5U3ge3moHpyKKwGvPZ9f6R9QMyFkZeSMfWioiGtVgDKKJ2U7NXYxVbuFDNhAQopkjDpBoFEVSit1gyt5cuYxPUjb",
  "key6": "3PVCQrSg3XKs1fMhwuyLVXJ2P8ivd7RW1p5MDrHfAPBGoG4U1gKNoRQn6yu8bwYEohHGpv3xgJsfijH3DFX9bhG2",
  "key7": "32n5udqZuYHvm4Z9f3om1y7EUUmkJbX1UT7kki4Wmh4HDuZ13nq5hXYhZjwRz5uN3ZPeuc1baQMJU1e8SLCY4ucb",
  "key8": "4QiBBwtWDtW955NYN8UjLhuXQLYB3heybXXLxwK4TUDBaG7FgCxvK12pNuBGynYLYPshAr7WTdTQ49GqfDnDfSUL",
  "key9": "dQDmr71QgMjgEdZjL3QjxdUN2p5xfQ8jvjRoEys5HMhnfn7CfUHo3md6YFsoaqaEXSSfvLvPCoipvXJEYmaMNGs",
  "key10": "2UgR8jHY8CDP6DiyRgM8rY4XaNHfsku25mkkf91XdPWFv3aNkmtTpVXdNbGJQEbwAXMKn8ydZDzkbkEWPKGGt36f",
  "key11": "51KqNASRixhVAaoFG8njmF3uGwxH6izFSCxmXJysZb7keKxD5Ka56979z79NRKrHMyKLYWde5Uyg2GiosBVJf7wj",
  "key12": "2mJbzWA39JyG2aHqsTYcJR1JYLrjLzuzxs4aTKSR4QryLMR73SrcPzsXkKwsdbcHYivA5vb1RogcakaBBRfgYotV",
  "key13": "5psqYsKmivX7TjcN9oJAnQNREW4sCvvMjTjKkMNyMUxkPUPmCzy3WBfvu7k7eTRskNHmqoGmvzMBEekWPVG5etAQ",
  "key14": "TeZvuHYcUHWWayAS4D7Rs81NX7HWJQAhSHaQArqKngEjVuREEKFC3Mv9cKmviee1XGjcmpUj7dHXeSPNgwpMRPu",
  "key15": "2UkpYG22FPpZ2fwKDKUzsJ1tNuwskuHD8YVaGYSk8o4JV7ke6i8JgF7h32mHgLt2SxTjnfYNCMPSakinVeRjUBtJ",
  "key16": "59NzgHMRsCsv5gmeKY3VqWPQUJnfzcVpo8BUVMPj97653vSRBgs8ECNjSs7uhbybvJEmTfvkr9WSs1B7fEUszXec",
  "key17": "6646zynhytSSQVpqUx7w93ZMUDF9n7zZNrFheo3aPUPJobMNSfFgsRJesJA5RZ6YziWhM27uD2tgoVCfqfjk1j5w",
  "key18": "37d6QZ7suRTchH8PPiWaf5ZKViKvmf1Qo2H2sm8mvMZ89VGiWTiU88331zp7xskFrANUaeFeF27NTYbh7jBKLCfD",
  "key19": "52a6WEtuHG8Eng62iVvxWQzcmNZGJcbTjEh4Uy6jkvP8x63dHvEwGEuLE6YozqxX8HunkNdZwRDGWB65QuKU2vaE",
  "key20": "4Jxd33kbceY2DP919hJSGqwUf9yYf4paUMq3mr9cJxT4oW5sHoNpZpCBC7q3ReKZFRXyzNGQ6Vczpzw1BK9juqx8",
  "key21": "5h7jmoGDgktZALfG5nyNAwYeVjzyKqgPPu5LHBmiveZtCh2nRydQ94ouUekAgraoMaoxZEzjNdrZfhbdXd1NnNQp",
  "key22": "4wrLk8mu1DaiNkbHaNoPQmPmRYg6UTTr85cHRth2RNdJs4DwXEYydiBnwNZSjz6n4buJstYwGL8TwkPAdfvYT39k",
  "key23": "3898KdaCR6hC67QWc2trF5JLsdFHgeYyqSCRuXBJKjgQ4AYaVp4C4fMz3AQ8pCrkSed7ee1qbRFPetfTzUtiPWjL",
  "key24": "59mTxC88aphhfLWFw24VUAvXBuWcaaNGiW4XBJ3TJVJ5SXwt5fhF1tQ5YnoY3eLVVAAZNzuiPUMKbcb5sWB5XZto",
  "key25": "3kqWax27aPKgkUvXJ9Jw1kAcCvxfd75vCHofenNz3yX59jj8sTVsyT4UJxBWJnxCJsXFDNB1TrLkgNmtHgCsx52J",
  "key26": "qpKBF6X5PojRDkVCrZMpifkpsQirP2shzqzXH8e6x5putAdjze63QaZ4rmKfK3AFuY2hTuAoPAECHeXeNicdGwZ",
  "key27": "4B1SFmptMXHxxiCGFk37Ftatr9kx9JQhAevN5Bgjjta9kRUXt7Z1uuCnB9iJfXhThMXqaAxjYmURSvFEdKfiuLw4",
  "key28": "2ALonkKTWZxGuBsikx7VbVEGLbgD6oLgddjjpu1wssUAyDHjTUHZW5m6BtdMEe21NGqSKLXavC845PKxvPW9EuyL",
  "key29": "2fXUaoaL8kk5af9n5d7BA7gWCqKfwUtjeNXhSLxnbFfAYfYPhAUnxTMNjQuBtq3rDxzyyffix9jcUngNb5dtUene",
  "key30": "65MT9UGtyjvNSLAhc22gWf6ZrNm9w2thKCiBUY6dz5ZUETgYJSQm1cCr6pzecwGLWc8N4B81TCv8QnrV5qWCQv6N",
  "key31": "4t99CCA9DN4x3dzTVjdjgrgCnurp6JREj4soH2CZWQw9NzYckopwRwrmXEJx4t21as7Ko8BWqrNGpQ7oXqL1RoKo",
  "key32": "642mTj83p6Y1xosp3EyX5mMNWNmwtJCZwgs6ASUHWqnkAviJEgtQExyPz35pdRYGCzbx67kmnsRp4dJwSFcPxUnS",
  "key33": "395mWq9FC5Hwy5UUhwSwbTtPGDG6QCC7J8RK8rPM57yQp291QeRF7b4H1nq7fLDhmqTB2xuDteFPmJNbWLe6aiTp",
  "key34": "4JTEbSprFaRmkJWpVugyW9HyTEHiK9TQkJK97WsniLwjFAzx3UPddZd2Z1tthg3cdFpcsEQsSKSeuZ9SVn3NAvv4",
  "key35": "3JKhtXV7FFbZEfcLJXCDT7x9piZAnP3UnPBZ3yBY9j6KVBphRdUheRwNJoDnFZNzF9SAEVUUtK3pXycF5rGQ6SRT",
  "key36": "3FBR9XpNDAvtCgLW9WnAitiYfyM13bxZ1uh1G76DNSuxRBv4CP93DB9M2Q3HUinLJPYivwX9mstAS7hwMcSbk8aQ",
  "key37": "ZHv3qUYCfMZmiamjjAZrVCA7ws7J8Yid3NigoHP1MpEzTaBYVVcN8bWu4qyhL1ctaPqfYL8TtHueubDamtq2Pr4",
  "key38": "4ixF52jbhfB6xEsjA8rbbRguMMGvMu3rJAJk7nMx1hjLCLnhqgjSdTyiry3vXvAXvf5TVoF7LXys1gVwEDyFEnEZ",
  "key39": "3f53Y6sCdofeDowgqZMcmKJwxm6BZ798QwPKbXQZNors8LM49UEQahEuvmtEAje8XacGkMUkqKDiNvRhuZqsUrAb",
  "key40": "3b4hcZKmMi3HevimJn1Zm6bif9Mfkf8syyW6cozvhZtyCoyyADc6FZi2oSXXs71jaLchWczPUzfikZQotzerHKrW",
  "key41": "3JuxEyZFdapn54kvEhoyTg8hZRnBKGym4iHWJNhryZ8REwQra8qSt8dfEosdZdY2eAcyH9t2LwPV9k28K5qQbUjZ",
  "key42": "5RifeXoE2YUU5Tw8xA5oycigGFgM1t5tUqKML8ZLTYKsbx7gFtMVybDwVoeoraGzMnH9iRJ6BC74ayPGLEDtfQ3D",
  "key43": "5S8pTcN5Qu8yRKD7CcdYB5ac83EBKzWVQ9WwCycRBXi7qzpiEyGPuSZQ6uLqVsQuzoFVoHye7J63MFu9rsSy8sAw",
  "key44": "28FcizBFmpb91e2ZNgBX3CBnNkGnQHx5296phT77J3mwYV7jiyEisijmXRTLUFXPc7Si32BFFnhXoxCCRn7DcLQv",
  "key45": "n1QF8BDJQuTihBbWVWJfGFkvMpbp97nuefN1HTAirreBPpjh1LCo4oKuatp8wewdCUU9Hzbqu6Hu6sCBQTTgV6M",
  "key46": "3UknzZtSK3JcsNFgXASyNdmwHzzDxv21G4kpEi5YL7yupXQjKbai8m39K6oKJSP8NGKic9LqJC7162hx6rjG4pKY",
  "key47": "2eSvw2Zkxq1KVGbVXAXW4Mp7De1ny6Z187cDfqqWE78g51ZKcfUoCKrEodouArbN9VtvMeUAySQgvsoz5FzrqH91",
  "key48": "4oe7qgU2MWhRVGDtgjN8chWCGhXETUsnCJpVLixZftbNLZLt1DsKZTqssvXeeNT7ySutyKLUknbugYMbSQoNAZ7M",
  "key49": "5XMDCbGdpP4anGV6VzJToYtECJ3RbvnjpEe1hpA6PCDUN9fB7EZXeyrbsWWq4w7CdrboRgk4YbQ8q97hxPNiFqNc"
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
