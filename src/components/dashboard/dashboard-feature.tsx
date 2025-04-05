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
    "Ff3FbnSAoMsmQyARYRC5VLqsQruuYL7dgGrE7rTKTuvaF1fnAPeZPUnz667aPkxPa4h8S47PzfYHzYFzJEo3csc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D8N9tuzY8cUMwHYBKbEDRLDvHLZeHt1cty6nzbDomuHaA9SbuEpZBKAf1oTDCRfEXWZ73XuJztWT2jrXhzu268e",
  "key1": "3wCv2Nb7z5QUYEgFEcBx53dwYh9JLc54kMHytgYVbZ154fokd3LqHAYy5tkeU81fMyhy2dqcfjeBj7odn5rWqCso",
  "key2": "5B8NCuHeBBzHE2oTpMiySZDadYvqfdGwgUaKYSeWM1JVin8wpbowabr99WT61vp3p5RmKc7j9wcfEA3QS1KLgaz9",
  "key3": "345cvZgrsBfmPTX3QGkWUbtjnkdmQk4GAjzZSaGMptPWMPozA5pydUiEY2vzZNkDbeaF3YYZH77YnMUxK8BG5LU1",
  "key4": "3Fg7dSmxPiCu6rC54yoj2SzA3PkENQeUFyceDZYGMHthLZpfbTtNqzakYotm6CXHVXdLwRVTBD7f6mS8irv4sUd7",
  "key5": "3Su9iPfqQvuwJLdgq6S8SYiBadQTp7cRz1RgDNUrW8rUJHpJcMnybegwPpKnhrS4SPxfvZ81vzTgk3VGTQxLkSW1",
  "key6": "i6ok78samPQ9JjbRGUsVT7r1sKHNEuSz2dBaJvSu8dnthoE1DP8Eqn5W3reumA72xfALM5PipeCdHRrUXDCgjBS",
  "key7": "Qg5XDeznp4uXLvpvFR51w3SHfxfG7yidnrjs9juX7SjXym7YVHyGhhN3VX1AxD69mj8NhtpUbqUXfShJzzay78u",
  "key8": "4rJP1hnqVJ7odtERDv9HQuGcX7BAaiMUmzK38VDx59GspzVgoShAPDAqfkX2sQUVSAGc8X7RHf8FGCzcVhKWt4Pp",
  "key9": "5mo5P8EU6z767pQ3C1C9y5KGYeEfMEpZp8tsywrEikDbxNEfNpDjFdPWayTqnwHkkTTHm5tBuhDTQGxemBm2LqFr",
  "key10": "53s1pUZCb5UiSVFuzNWDztkDzLipJg1CgZobChTdz3H2rutBeRQEWq83rdwRDgaEbQpLSE1nvL5ifURnpvY9HiUd",
  "key11": "2tPiCNf2cJaGB7kBbhBfTyZkyhveUWmYfvCWeAGJEX3dQfJhuTyjhyGNDrZkspu6AgNaExQZsJ5W1wvVMTdTXCte",
  "key12": "MfhCm4fJVeTRbYDnkwEu9tbJRCvj1BHfck9rczM6aseyo69WWXS3AsnEDxGwki1X89ULzd4QegitJVRd9waYufA",
  "key13": "2wkASYvLLb9sVcHEBF8XPkY4i5qsv3hDVvUVWrmEKNyJusf2SCA33HMbdHadBFT9EzDby8H5tHwK8LjD9yJfEeQf",
  "key14": "4w93mhnDnKaNtWXySo8uaQUM2RK4AAknCeQve7ER2Hcp3jugTyaftSagLVuTS4DQ11spwCEhRbVoBAgQxzxJN4Ph",
  "key15": "3ZNhxSKtxAQ1FkGj6G62gchzFr2r2dNk7nJAqa79y3sYNspV8Ax4XZ5nr1bgKvN33fV2Mevj3GF55nFmBWLZU197",
  "key16": "BEXxH1k66th4J3JvV1BHtiDgBLXx5P5ucCCpQiGHVmcuMoph4cTnxwNxsrJL89uhjhnDHgdaqVbB8twtJXt7xcB",
  "key17": "3XCQRiPu4eV6JLvXZhBnGj1nMeuFJ7zGhp85xDJ4cDV9gKRvoapaGykKF1LYePU7dr23dxqfZjijaTTGmz8dmBqU",
  "key18": "4tNH3vqeS7gcTmn1s3nThDj1rpZggipoC5WPD6UDW5YqVi5GEhb8yAKiGc2VrFb7a6hQzcLWpmnXT9TrMZfZxLBJ",
  "key19": "5RURKrYh4g9yApPFEKvb2trw6XxEfykbE4YSMaUqyomcWFseuNhyuhkqy6CgyMDNTkFcRyiDFZUKqbn3eXH1ejvY",
  "key20": "5xBNJbfYED1d6f5ab3bJpqigDEKG8AEEvD4wNjNjkNp4cZVzwE4RZyDtVtiVCnPoSZtVX4X2t4GwURdSPH1juxhE",
  "key21": "5Sat3u2EXa4yFqoWQWRHvHMdvtRrTqGfikgpx2KBaVQmtHGGbZCJKr5Mofph1K8dE1iZzV3nE7gvRWw1mjXpkfLT",
  "key22": "9SFwwQWtjNButyLVHSWuRufQvz8p7bCsEomsNW1iV5gGnV8iuMJCJvxLzSMYtgYMWjJNK3nehxBkS8P7sc3uHE9",
  "key23": "P8oJ7S7dRynK9NmjjxqFCUgyHs8jWxPGM44vTok81XqjrEXJJCTmqH5MZ1cP6ac45HcjycMYoSsnCYnzpLLZoEo",
  "key24": "5wsTp8B87W9ZjUrepC22Uo4KEj2izfAjsq1vAu8jSK8h4Q8R8UtKTrZgrefXwzZ4E2xNf15BADM6SyBrWWtPxXVu",
  "key25": "u4ZGFVigzDQPYfpGTzb1Z4WCJLbYY3FR1d47qKEMfEsvEz2ZbggaUJGdbPjGX8w9hr6VP2Y3DQP9At7sx3mYBPq",
  "key26": "5mvh5rnAG4za4WoBPi94SnaWw7Ly4dhMCsRiFK59oUXucHor4ugsWzrz1kStRWyNTJA2QfSQRkRnDk1gsDN9k5ko",
  "key27": "52QWyeSFEhXeMevWciMPv5a69mfffaArLT7nc1BzcPa9eK4GEpDgfi1VBm2zR2Dsq5sbm86gyNkATsP6hPVKvbkV",
  "key28": "4mLd3xQ4WGpeyvL2hDQkhoT1oU79uhpLBm3WpWJCPj2LsFimqfhLcnRfXec6qDYFw2Z4Kg2atSUXvb6xoMgXLYL4",
  "key29": "hk6oeY9AtWkeAaERJrEkhV8JwLztA12ajz7BfzDmn82i9oyba2E66RsCN5GSadjPw4HqZ7bKh9eE4QBDEgkFpgt",
  "key30": "4Sr1FcxvswonDHY2QrZ1dmCspUFDEzzmiE2oog5eDwMdvm1832kigdW5Xuv36Q5YXeQeJxZMkKsdMmrVra3qGCYu",
  "key31": "3zXynsk6g8oGPW6i1BRuVuMyY7a51VJ7qQjKVS6VcmqHK1bhrgKDnSagBMymsDqci4SbPmoY8cifCzpQWDW5uuNA",
  "key32": "3TTcr6Saiu6j9YabVXdUtK9CFSqbPzQj73LpXK8ZvSTy1qX8umJWTvoJhyKv3LhjhK5Ycpw9KHycEHayPJHpWLak",
  "key33": "5jQDVzxdens566bDZxZmwTqyxYkCzsQnzmWgQzkxrZCKFAK9PZQqK6tEribQZ91Yv3wcvCpt9knqQ8r7MbXmuPFU",
  "key34": "4xHTJHGtYad6GkFmK5HGHNnvdyvFAJAyoAZiYLgnN9X7v66x6Y6yJEkPTERJPnKEtZVH9ejw6YNNLjFgKpuVuqdA",
  "key35": "3j9knzH1gH68HqjnE89ci8BcJfxY7W2MHLEjjySCaMa9MoAKKnX4txo1fVzxjicjKn5XgByJu5ZVfs8cakvKKpPz",
  "key36": "3AqQUntaVw69AuTncR9UHsijMcNhprVz66HbVCpd39teat411w8ZBbKAx6N44dUfR4LQqsuJMtBe2GjijkdBPVAk",
  "key37": "45MaWR53EmYmpWxRLJybVvtwmhLUt2fbRRLsYSXN8JWxhKw1yni6krWKWBXCCBdqSuzioH1G6ezun4yieGygk62M",
  "key38": "VTXVnw8MjfHP5dzoiAKSJmnM1UHKVwjZ7pGQdFtB5geeeMEfMZJnzUFMeRhWm7z1dKpkz2M6xVyWUKNYv7uYA7L",
  "key39": "5r8SVP11sXVhKz9RZYWoKPgr1fwtSk8yBcFyFHgddYJvv1WYfGpsmAojRd5CG8pjD5mZGXGb7isaid3UTiTSnSAn",
  "key40": "44yjFiaSm6HU22bxKdz8DXjnQut5GMwBSXGekjU2zcQcydodDWuSf9UTcuWGAbYB4hchRXbkErhnwjomb5g3d4aS",
  "key41": "3fUxSwByT87NbUcKyGdvie7ws33BYTbpaaUuAXMz5xfm8rBB9xR6FgHf1AeVQe9yPDQGh7uknau3WjRELdnUfde",
  "key42": "4uV6aw2ESVjB9DUsNrN3vNCPVMnVv2TYtJavoApmj5HLRZuMSEQSuoB82qu4EV8RLdp46BjwncgDdC5zfAE3PurU",
  "key43": "X3GV3yb313eT7m6216RNnchy19VR65iGsNimVDypdhZ8UeWcxH1vAEd5md48oJvSehXsDHrA23FTwCVTeZPap9T",
  "key44": "3oi8JXDXyk1fy6Q9yS8nce1ih6gYDyFNuzsmqhxsGj3eznkknL1Ph6HjDPdCzqrQYkHXnkxDkFVapyEcaWWhotth",
  "key45": "5sLamRg58ynQS94oypJ3arM244X3aAkR8RJsSD1EAJZrhnD3VvdJBSJZsMCXDzTGCZttMUEyCiEdQNeS8ohYkA4Z",
  "key46": "45ZWHEaVaEohuamDvq8JmwHYNbVqBbgxQirFqRr31fMBNQbicQYLTPAS632phdpXuboHRSj5asMiRC3tMbeiKHQF",
  "key47": "PbnxhBMt9JcmBcskc1QY2LBbzpSqkNrURREsANLtNzwURivSf3hHBhZRiG8BCyBvNBarvshz7MLBus2rGFRuXfT",
  "key48": "28HNmntSJaiLHWrMBetNm78i1sCY3xnqbGbjCAQebc6gvwhAc7JroeN8gBdQycjiq9u6TvSrJruqZEAUt7s7CAP7"
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
