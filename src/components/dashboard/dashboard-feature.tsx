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
    "kcqYTTTBDGt9vi8DGdhZy1Lp5pYWeKtrohrpouAxUToGfwdtNpCQ6uVRythvCW97sUt2wUz4XfbTBKeKZgWonZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WEAyyucnmpMb1ZdPbyXAbT9q7vFVKGivupYXv6iqAcKvJMCdLJ3CUQEgEai4sGj9F4yHDahuqsZJfCxjxLcM3Lt",
  "key1": "2v7S7U4b8is3vRpxzRAg4n8KozHTeE6VBJfvw9GLRWqgrtby3fWiWbTDouarcDe2ZkSkt8mgDmpXySgEj7PHwfz1",
  "key2": "2faDs9jtPG2DxaN5pZcgRBfiCr5UpAPdMXRDTbJmXnFF8MQqbovfjfqCw9yAVkJbYHbEnH5p7giQHNqWCqpfW6jy",
  "key3": "zJgXFcHbp9CJN5Gsgqw3GjAUL41GeNj4BxPgrEo2No8WS7tK5SJFp1RHFGMeQLJP4fUzAfhUWYYpUmusnabY18j",
  "key4": "5wy1ar4kXM3CveQCsxPs2MD7mg2TbqTMsVgZWVMXjYMujhNy8tsAGiFkLrBh6zXqtjHqzUSQTeZYVGw4JokzCUA1",
  "key5": "435xE2tVjA3bUfNu8ty4fhUMKrnvVh4B4sNGUkicaUyB2QEWcvDxNjx75FVLJVXoCEYS2jvj2aADWg43MihZtsSG",
  "key6": "5yye12AMSNyKszLLmRdmJk7ApY2yeFqiQf2JrXr8gQQKeVnUb35LfNBtEKbnwYbK95agwxkxS7MraNPq5DyqsopE",
  "key7": "5mb5grz7eKet9h9NJMeU8taER643SBJBCHkFqeqdm29rimjWXLqZripqq4FrHkJDFGZ8eSFRjahkGzzV4XCFqrWh",
  "key8": "2QB3UuyEimxrFWEpvxg9oyAzCgoh13ZK2q4udAvF1ngeGhRchzWGKtpw9xDyNfGwrTKF2XDMriAKCBJDFdzp7ixT",
  "key9": "3QgCYh9tbvZJQvCodU3RT5965LoVZ7ejiCMYYexECmQVbszhuFP7uUPpXE6wiBFGEmToiDKUBcmCwQ3A1Pj9qi3d",
  "key10": "5Fsh2kYq3zmti2b28mLnsRjF46jrBPW74p4CqqTh5t6s1XtHeAZ7BNGNQfdrrgNxuiMASQ7LoULu5EiN36pQKAGc",
  "key11": "5MEUaYMnRoxxJiqmnCwBWnxWewfweqs4H3paf7UQTUt14ZeaxzJ5jbDULsytjoyp7uJTXgH6RMVWpeVWSLTXYEa5",
  "key12": "55QHo3ME7p1TBWwRdZSoLPS6VRgusJQft3vGdughnnycBTz22SX9nSroYBUafRF337YFrgR9LqAgQyiTNbhYxcDm",
  "key13": "4BNiPRDQAeYS8eotuuFQfvpRiktB8LFSoTRumMUn5DMrGjYYotHysaE5M5QHRNF9ZCL91fWHq8Kum1NJJvTEttER",
  "key14": "25KKQbzweJggAyccvwh53scgs4iJrovnKSu3TEcTnGCWRr1fPogwpCYMpXaiHf8VZjtF9wPB3wmZYCNSRSpo8awE",
  "key15": "67iykQfTmUfuiPR4YswxacHWNXbTcyoTqib8EM9oVjYRi8KrVWLunPqGHb63a6sn4UWPf7N9hpXArpRJeCsvpVZa",
  "key16": "54wqaF4YMNABEGuTMZ6Q6W6wtpDEmjzpfrRdfyh1Lx6rWFAxqverYPntbLeKnYHBi9ogAmKFTZ4o4Hs6czXprdRX",
  "key17": "2yeiCQMmW9KNC6HzXFkj4C32mjAikD7X92arM9VouZiGgoyXtaQK7rDP38JxbncaD2vrCAWNcT6bp2mhBPBFXeNj",
  "key18": "517uxNkYKTnPFkggpLWVMuGEbE2EafioPPsShL31D4qWqcEKgF5fpN8o6tMNXqVTpYNnLnXLc583ywj4f1tsJPAV",
  "key19": "2WHbHaciHH4QndHPUWb6okrEi6yggeEjznoLWVPEzwvyEi3UEEzZHTqEEviHuxbfqQrTR5qNtFJNMG5EjK672fGP",
  "key20": "bZM9hbZMAAWPnDio14AdcLv4524NdtZySGpGy8ympmZ6m1Qcs62Ev5zME93hpSXgjfmNEi8M7abn54iGfkL8JE5",
  "key21": "2vkTeLBHMn58UWEtBfG84We1nTgySHHcV8BGpUBE9WiWPgVDTki8yFSNYuPT94tPTRDsqQsPmDiVdSMdLrgvqFzx",
  "key22": "26pgnvfbitxQnBqYk2FGFGKmoLdxomKVSptT5W4Kbrk2gktebyx3MdNBYKVWs27C9NqvARJSWW15RDoV8LWwLnP1",
  "key23": "aWuH8FU7hXFYPJd8V4aKTM2stwyP5SNDk4swKMfhp54EsQ8eUDVXMPaucnewgDXpcqmayTXQfTt7GoU4yrY7qJK",
  "key24": "5CRQ41ajsoztHqAzL7uPJMFMPCKzrNeg65xbpkmSsv15KmJqMFxruAPCqtivgCGqHXLwhSZAbDQvvjfbgEqZ6zZn",
  "key25": "5brWmhpXbG7YGGBf74ABuZcXaYDQEoKGDZTstH4ZzKnZxgiuKyLQWyJpQYqbyTdNM4CsbSjjXimvvn8skC78vDSK",
  "key26": "21NXHRPTT7LPfYVLwZeHK5x7CL2gWLvvfYPL13zKb9jFhC1ThBQfkrKDxjnTuB8SF9XY5DYgy26GNpSbLQqiFpxs",
  "key27": "mm5vqQRqjxduqLw9Xnqm3qQ6mLbFxq8VzQkgYn8DK2fCLSH5mxbSfwziLoHm7H7eym16ph5fVGcdp2xp7it1jvW",
  "key28": "5cxifFDgFuGAf4fJxbvMLeNA1zaxmWPTyazq4iPnVUoSMXq8ucAi2Q3aGg7pu79wX8YmfDseaSHFtHkqWpmsL9Ay",
  "key29": "3pAQUMgvQ3GU5TDciuD1HWa3E5KcAWZyqPAPnTyDJGRLJAQ5CJtNBho1K3uZpvYCsN4ahdgYoaHFj9bTbxfFqWd3",
  "key30": "tMzt7P1MHqT8Hk5wQDJyCb3TsNWD8HzniC42yr4AJBWVBpD5Z1TsDry4punwNnUBXNjFiaU6tP26kZJvyiR7TN7",
  "key31": "34iH6FxeqVyfFrgA3Pa9jR55E6tgVAv4iHPoxwCiDUmd2TgtL1tf8fBcCf1o6aqfMfWmzfP3V7f6PGns5w9GbJPP",
  "key32": "35MJiedg34PzS5BGWskz3yqpHiw5oK33aeqRjEZweiu2UKa5KfjnQCfW8sNdvfivQFWvRtGKAXFobHY2yxXxsyU4",
  "key33": "3bijh96FhW7JUdhGaD1werroKif7DN5GW7QJS2gowzhm7VcsiGVfbxYw36ZojBYdeGrNrkGftsUndL8jgDBhHMLP",
  "key34": "jGKxT4TSDe5Qe9kYhwZdjgS76Ljix9PtwuDFhafpTEqjNVmEP8tjseccuGitemHt7urV3z4ZNeaTJXDL4KqfFY1",
  "key35": "2YbbpNiYt4Vgd3Bkm41qs3PtQDS3RbyNmXYdWfUBsMGeJzSDdEmNYUmc1jZmqD1aWq7W2e3mMoRZLfZpVen8eXUh",
  "key36": "DqL8W2BLEEMu2wFrd7YDAw2wWZ3ERiC372ePgkeeWw2JuzKPr1wXKHaKRzpgGUVAdF9XzrFvWejHHNkr8iLSjqA",
  "key37": "2sZPCndEq5Ccs8KFDQcfMZzkwmQoGUPhDBehCc5QJ3CLttF4mFdMxMnwLLA1KJ1tH14RqwCykufgVuGQ3tLgPHkH",
  "key38": "2JmJNWcjd3cqTDYKky96yqGQKCKnxEL28GazCboevN7waZaoecoYZV17o1cSukQzCfXF9SrtVdXDT1WHiMRqjxeg",
  "key39": "5qiyy2wA4Am12AsWDFKLWYgkCw44JdoAVW5kmp96EALeubL3N9yApbhVitbhPeVJmCqMsHgqUgZUPT813gDw3NQC",
  "key40": "2fCu1biz4NLvVWHkZBjdXvS4b3MHKnXTRg1NAEkeE3YWZa5GwNKtwPzV1HXSGQMtuFPvwtApTDVTuwyTRR4e8ogd",
  "key41": "3wzViT72ketXiPBMVR3hTjRxRST18PPxnF3r4uVhvdiQUubZZqYzBWAnfPTihAgZpYcm3XXpZ1rfvYLm9adWJRZz",
  "key42": "4DPR7mN6zaitegw1RhZdrFsGP4TvyfQST5Q1fJZ3z5bxSmJcRRkhuD3vB2m8xr8u9NS3WReJmfCFnXRW2EHiwxn9"
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
