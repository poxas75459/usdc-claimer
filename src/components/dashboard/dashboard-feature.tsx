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
    "2rN6DbGMDzv7crKRbYzcfqr61oJ54n1xW281R4fQXXcN8uS7nxuMdawLBMNCcTEaXbd7ytEJ6ZYrbdygXxb39wsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uuVzsAWyt1uK9kdwR5X4yfNrb74Eda7GAQx3EY5NA8UqbwzGM19BfLF3wQ52ZEVb1YCRat1MLjobTnC2ytMexk8",
  "key1": "ThcaeBHhsVr8cyMEuCA5Hjwd2Qp7dQtw6HVomd2RY2mQnD9NdqVqt6Z9JzxK5UX5gaMCup4Jkwfww871FsXEq2f",
  "key2": "3r6szcZCXQokfpk8YmKnqVQnJxZa9U2MiDFecHXQKMRmKoXc65dgCXTY7NHuuCuGKc4kUAkaesghohQAcouyZ14k",
  "key3": "umLSwMMwDB3pumHwHHBWDpAiLdg84pWRXhDk6Fx5DENGAceB6V93juhxicA2V8VHcUGt3L4N3WPz6o33vsrfwgX",
  "key4": "5ruhKh74JtoHnaKuTcAaP92ztVU7bFzyziHyvanHqEcEdPTwUdjMn6er5YLua4ZjhT33grUiGCkXfBe4SDKT9HZu",
  "key5": "3FBdbcJUKZvxCYp9r5sUZXbM3QaTQ35LjyEL8ZozgZtCtDBriqzrA84iPdYXE1c8HmQa3wKqyxFGMpt2RVEFH1KB",
  "key6": "5caKgcZ2931uT4KxgBKf1RwCM2EznVENhusmmBy22QszXLn8oVKTSakhqX2rwb9EYqrtbtYLqbr6Qud4sZnvHet6",
  "key7": "23nbpjpNGz58EdR9x9iiUMpFFKUdRPJYaiGRpCMafLagtU6J6YJgEf3uHKpfhxRWAALL8bFFUvPiKb5fgin6fPsv",
  "key8": "2w12grGG1UG63kmHDDyUyu6PdoJBwFKtwvbvMT1EHzxaj9MZLevMEzwLA1HZ9juoGmkz3WNvaX3k68GbcqViGSgS",
  "key9": "5mjkCs4bDR9vvpPoydUj5voCkraL7kPHvzbXWj6nEK6NkZ4Q6xpXYib7yHmGSuTciQarLpbV4cWXPdvBfY8HALen",
  "key10": "s9HF3373YtXUUQc5uxrtVNGJWEzpZJPaTN9EPsvjpqTQMidxezVxcHikZhnHYCRrq6y4MEE9GofzKk1d68MKGqw",
  "key11": "4Xxoqrz6eWVLZ3jaJ8UkpoPinAZ8DgkG66ashcUx5wMJcKkxiFTfrkACrC16pgYreRcrXBPeVmydQ7DG9fucgn4R",
  "key12": "4FUWFDw7Lrsz1TxVoVf9hBGUqmPPXPbyc1FRs6tyJtiMAVnRyLWcc1UevrFS6uwBe5VD4Kxy7mqyXqn4fK3Jd3ZZ",
  "key13": "2Mt3oUKe5qXsybQH178BuzAh7oJHRRb8gdqH7ZYdG6ScPeMHKLid53gxQSSU5kqR1qu3J8x87kzTB6F7Lke7AgyB",
  "key14": "5iF3ZrEE5Zv5AwVjmuequgarfpASfzqgJgETD7HhKYXSWgMdfTNhr4NxvULEnxUNkifMGzzUtw4SMY1kbASRjhD6",
  "key15": "7rvr3S9mqUzo4fDCvRaURKnW52zBmtQ6E7tfVV3cWSHxcnkJtp1QHonzr7R1oL3TZ2c8dFb4PBeBYFWB7bTwm6U",
  "key16": "41wdZiq9dxGfGwzEs13QHuB4Au2wg7Um484AHhSHT2xjA9fHTgpva9Tb9xbuLoRSb9jbTAN6JP7eD8cNsijqL1BA",
  "key17": "3HH2Yk23zR4gfs731nJAbKcBBi8Z3DbRKaHsSSYJBQemzHN1531sExsRC2oBnHscyofx3AWgmvD9RUALbH5AMcak",
  "key18": "4L2Ex1tdmWVdJ3BYixP8uMo8fjXwvaKCEcT5Uuv1v6K6DWoKxAZ7MZ9TrfxuC89jx6xuihdbYoA9TKKtZg7zm8qH",
  "key19": "3os6gHqpaC9RQdGrKLo4g4yLkamjrY6P4DW8XQ92UFWy77hhuzWhc5jBqTpjH99jjkSVmPAjCKAxdBi2hNkYs7BP",
  "key20": "5RvcPvCbSA1mTBQdu9gBN5HhcKAdZnzVgEteef2V6QmJuGWFAMgkb97punzveBkAXJ6LZV7F5wFb6vAgeDSdXf9g",
  "key21": "5t82QucditRSCfiKRyXmFShswak2mrzftTutJKqTyc8Jq6iUBnC6Du6DRsigrnwwN3NMDhfWMDbhpQmA7mfeNZst",
  "key22": "2veMUo97yS3swZNT6N39hSzUfmJMCG2QBdbLk98x32E9ALLyGbFev22j2pPykEf7p6GBsq65Mm6fWNp2UoUJsARX",
  "key23": "37cyX1UJswcc8uPdJzYq8bkQtCcGNPNj7h7LSavEaXXB7WEWnbkBBvo4jCwjSpLRsn4aUyC1koCCMpgeKLroSwu8",
  "key24": "igiqV8c6dvQjzASXYw1oxjCxwnUnaL6mqBPLt1NtuLgtTP2xU2t6jbLDZ3mCueZHRa5g8SFNEwcrdzLMUAq1zVS",
  "key25": "4ZgSjtAcY61vDhgYXepeQXrM5JRRdEjapUi2tDHB1igL7xyo2wokMTs5vK9xLAHvM56hRaFA53or9eZ1RsmAgTuR",
  "key26": "5Uf2XTq5TnBYFB6xTrb6jk8H1rAD2EyrUsyBC8FWyvNZYZFLevE2YpidjQVHpNFwaf75kAHK1sHb5JDUdgGEVV1X",
  "key27": "im4dH8R3aKaKQMMxRxHNGwkmGTko6PH2Ahvd3o2pQepoF3b8N6pnssRmkAjbr3Qpm9g7d7hTghWJZaWkJ3sRbJ3",
  "key28": "2HLrUaSCuBWecUgaZMM2zQxQj5tQLVY8h3qfRVDvetnDwHx86QGTnL7SJgbn53UhGSU4v1T2SDCGoKhJQ3JCRs1v",
  "key29": "5KZDgmEBTRum9YcEsNxGEkiwVc6pscM2RwPx6awht3vxU6ms7JqSh7gotMGufoU9LC4NyXuzbMSJYHy7KUYEFYo5",
  "key30": "5zwAEAVdoxFQGavknZyKWG6N7rFy5Exgk2zfF1zrzR6VtznnaejkZsx8tMKLHG82SK54XbVwyAACM4ppdQfYxNxV",
  "key31": "5zGz3NYcqKuf18uC1Ffh7e1ksGnn2vBJ6hyTZqTVBNR1ruvjYcfojfsNEUZPCV5hafkGYtxzhua4GDP5xSWVy1q5",
  "key32": "4LrNABz1hXkkLGsAgcgb1AbmezTgP337zUhjf1sqs1vBvMdFXqQA7PXmfZa47Zk7VqDmUKi6iRRSvdPLXtnMpSAE",
  "key33": "3gW171vzAghuChcMMa4SwNTiKXW6wMkyYD4uim4LxNNPKP5cit8DqY7XmEHq4sq4EJQqjTE9tHAd15S6ps8px3HM",
  "key34": "gq7r8ARtQ8jZDis5eQKH9qTHeN1LpJRhYqLC29GFBLbceC1fXL8Jiv3RtiBqpqwSasQqafC3KKxXshrPJBgHrDn",
  "key35": "31JnVR4WZma7arXC5LAFPVz9voNGziN8Ad2GMe7ukcHSntwCBCTipVNPJQHwxV5iNCG9vs1paauzsQZQnnNiVVr3",
  "key36": "4LNqfyETfB1SQPbz41gCJ56EwuGzqD4AeAzx5kXPn9abHsVxmYxwc9nqyfxok8FoYJNvd2Hji3FkQj6RaZSy1rs3",
  "key37": "54aTucDN5XSn7gZL7KqXGCSbsh2bbD8EFaPgaWkrtoVjXjxH2ybmG3ah8bPCQbLz9GXZYVXrTLMACHrgzb9WhtQk",
  "key38": "2GRaHzjhuuL2Pi1BQtY5hURgge5gnPQJXHyvxBpBDSuZ8aUKmFs6XJNLcvSF5fwzJJRacshmuNkJ8r4t2MoStNvZ",
  "key39": "4r9Xpdwth1KPhca72WHCAFr8VQiw1jXLxufG91SZLzgGQymoACdTge2fwjvmp1dgSDqo4y2A5xJ5fJrEoxyE8sek",
  "key40": "4ZiEhCdiWmLC85DAtPpEebxy386Jkxx31T2r6v3X4KfCbmZNVwbZ6RMo8ZKYKJZLL4e3HdJy5gv8a1GgnwbpoEd4",
  "key41": "LjbdUjSD2MjUY8YnfQY84MpSEesNAkRivTWFdvjEuGzB2nXxMCbcyQwMJN2YNppMys6MgyMqPtLzLZCW76Mhrwt",
  "key42": "4WwyCjn1rNfUHQkDc1jXSFYBks4rXt7vbyCwGHbeTDSwHGWgGK9ZYRUkv2A6ixrTnqL8jYjneduNkdB1cuj9n953",
  "key43": "5xArGoMv2fXXrLwEDHtBoCJEyYD7nYxozkGZEAsBL7yRKjFETyRrQTG5TjxR2PyKJ4NFXBHZVssbCWhLomiEwuZ7",
  "key44": "46QPB4reNhy3eWMvsNShiECoLg33187mmfzpV12cfvqibTs5k2GqwqeHGFmVbuPPHYF2Rjo2TMFvXYb5eySSFR5p",
  "key45": "3K48dBoJhVKTCLvkUR5aeZX2ZRHuapXyVcti1Qyo3koLGqR6ruw5bFcPU6GBXuhjw9wRE1Pwqdd7iPxDFsezTp22",
  "key46": "2kxizUkmngk4MrNpLt9XKqURUjULZs4wb6frLGWjJDuZ3wiVsJYzz9YBs6mqJykzSdSxxSUGiBcGyJBzAPzx92Eo"
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
