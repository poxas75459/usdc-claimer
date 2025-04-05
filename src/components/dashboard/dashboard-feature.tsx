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
    "5RvdgPCGHja29yUNLJmhcJXxbhYnL4ZLpA3w58wRFNjKqtKH57Fj8cnTmTy2e3kgMCPAHcQLvYeSN1xmn5MXnKNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eYnpqMB8r8GPSkT9HcHWFDYW1j1BhdRuxyJ6dKnYa1sizAGhAG9r8PAq9eQ7USnG8txmkLhcUwANo25v1cSrRBR",
  "key1": "5Z7BmtyTkiaAHzbFmWNVtXjvkqPnvCnQ2toANvtZMxJ1xfM3wLAHoNZtSqjsF54XwPkwGb9oWLevFQU8JxJxW2iR",
  "key2": "2oxrrBpw8jY25faNirVbBpJa1QavnGumHU5EQKJ2SEj2Rh4kd7NzHN1HVDr1DUPvXpzskDxNe5gxx1UsoUd1xGnN",
  "key3": "3qHBvEtQVr93cwzNkkm92GfaTMCYy2pgeaf17wAMcTVgzzd8PNmdcLXucg4jhjQR6HLrrsBh6rXBAYdsf5NWLYZS",
  "key4": "WvvHbSZywx4YNjzvbJwYJB9FuGTgUsGQGvQoazqfVm8hL9STAqpoV6drBkzGqsqd3x5DD9g9EfSqF3NrajwQFRk",
  "key5": "3dUXmckTW7Ye4j2CRK6EdiV5e85io4t1nW2ADmGLGhDNmcw1k3mKtrmSLAPCh8WdEL2MFU2f8FMTYXfPVNn7wryr",
  "key6": "4DToHQbjAp2tt3Lw9Xj7vxn1YgUhAnsqVzyi1uUvVMW8c7x5iRF5dKKFeqpV2oe4mc419jPooggxWMnrD7qRAXSh",
  "key7": "4JzPrdkkomKnEiQFPX9DT51mvURSj7cLVdNt3u8Qn7TsFrTyGn36LH83XUe4gq8XUXr4uDd59zEiyrswn46Wq9uP",
  "key8": "2xZR2uvFShHojazFnQh5Wco2Ni7w8temPsr6YcnDGTkP1zRCmBPMLrTU1onsZ7jqrkZqW7hb4nmkHv6TsCbKSk4X",
  "key9": "44F8756KR3Qpejpjqn2zadyQs7HMZr7E3nif7CRabc1gBXCbCGqE11vSF5xfWUzrXozFbfh4JsuYmJu5JFjazmA9",
  "key10": "53d6M18uHqCRFCXma4UVssHQFTtKM1N3NFfTqPfyrCx4S18P2cqAiomQzuFKy6yRehaMhjQrSCJJ8in9fkHF3G2u",
  "key11": "5tzzokrsqYGzgw9nfGwcBxTfQjWrCSzjQa6mounmd7j5p5CEqrJfS1f614TYFUqjYXyvu8tUnxPLQywfgEqrfJLt",
  "key12": "LLvJTjeMHdkGPuAJMK7aWYhbAhYEaJpJDc2t5fbzcbqoHTAmhcWtLKL1NHMHEEu1w2okPKjZYANG2xdDuydYWRC",
  "key13": "3YzxED2DFNxpMuZE3vxXtrTctPbFTLDcFFrUCHJcMgCvFNbyXPnhBnzPM27MJaneuZWfmZbNbLVykiMJiWhC1s2E",
  "key14": "3XzT9ADwDK6Bje77S1hBYf9iPzfr4CmZEBcVnWLu5WQXCzx6BKjDZa5JDMTZBFQiXnj5xCrMh8nAui6KDkBni5Rz",
  "key15": "3thgn5XzGPqpWbFMA3w1tx5GV8rvjYnk6rvjR78ETaDnf9XT3zbNheM2mrAgSghTEFKCGg8GiXPum8eDi744avmU",
  "key16": "5sLyh5Gq8D1SfUatpWxLH9XSGQ9tZvNgK2CxdjjdAAAmwkvCvYHwofEHKmRWCwQmSJjZyP7hpgA6TvSRQwTv3z8c",
  "key17": "5P9emhjc5QCcFgoiFn6fcHTjNbVWCTz4NtZMrexMo1gpFd9LajJCpUAG2ypfK7EGWR3n6MSPxCqRyTPKKzh3wBBh",
  "key18": "RpFaEfWwwkrsKfDsxmNL6wMS6tnpzihVdqvNBTcN4YsMQDiqh3adBuDrpbKdfVqXFGSFFpY5jFBCV7DyhXjdX8g",
  "key19": "ULusbWtYNjiPJSY1NPuz4s7GfaHCRndpD7XcYzdViwFPjTz3qBCuPM1xkSpcvFUvCY5Pjt2TGbtXNxkxmtJrZhV",
  "key20": "47s7hNonViEgpsJVzTcMv3SeMiNb2ZqN7171syjF3zDQTuFnXkuoy5xX1s4r3FBiqWHy2LjXnDkdDJgGLEDVYuqt",
  "key21": "21Bt5ybjGs5au1tNPRnSQZvT4ipMVmjbYGHy1GrWvMMpRZPAwkZRBpAuFMzcJpMmd9whjUwzt93FRzk7SzGvgNt9",
  "key22": "5X29AqKGBGcvoTUrLao4gb9bCJCUMeYCzJyGpiGzxnNzfgVcadFVPQmZYqXi52s42Jxnv1BcwMFy6n2jTuEJp72X",
  "key23": "4oxhE3zFaHu3aqDsFAVTVp1qjFNpyUbCpzf4EhR42dHUG1tb1V5TuKa5Jm2PQxDfCXgyAndoRPpevQS1ci48Hyk",
  "key24": "5NjqSEiMRBvo6Jj8oZJQhsho6cZBcui7CnsCQNrQWPEcWNcq9ud5A3EyC76dxhBHtcEWVL1CRkfqY5QM7GuQSUPP",
  "key25": "3hJxyXmLPGkdvGocGGsPdafFAiHvCFrVD7DAWteeo2oAJ2P581aYJZcm46GLgQwKDiaRdQFT6vqtBFtzi1kjirb2",
  "key26": "Dc4TggEWuuetsd4vFT1x644KfDFazMHTfDcLrAcpASAiVBxMecFzsjUP8uT4ub1awUr1tPXnodwkYrriYmaZVeV",
  "key27": "mN2ugusBdkGtiX52d4mb9RxkZb97dCZcqAbLvwDrcyKjHExoWCLjK8HqDAXjijwfiKQb9faGLACRU2V19KzDVhi",
  "key28": "5kCSgJghv2fHSrPYkJx5d9AjhXqpu9uEtjaFr1DqAwpGxFxi2Ncs4EurHPeJgLXgumEGbGZqg1vMS7Qm3risrjmq",
  "key29": "2H9pQz8dUfbxNFemumJrgzNrSDPeBCDQDWSxgEtPqWCqGkXpByfSQsnnXkqbkLESy6KY83EaeFbWVmS2FMAo3xg5",
  "key30": "3ryDYJoeB8WJfeXB6RZgTGoYWkesvUej54qipsNHkrbDvGtft5A9n6bM7nbwa3cRbT7xnrWzoRtV5mFsNeUfNHmz",
  "key31": "37sgiDRBPJvbi5wuEWcRBQ41HYubY2DdaQZ7cLzxUZeszuZxHN9BY9hydaGBw1w8AZ9JgBu3AcpLb9NPT3JostAh",
  "key32": "ucG2LWfdL6CErenWqyD2g2kUymWTSZB5JN1a6DEu3HzheQW3wU4F9nBhSFiUK23QFexmnBhZDgqj7uhQUALSSwa",
  "key33": "2dfSbR62Bsfhf8NEzo6KQEcRwU7UL7xAr2W5Umybg3cxBZGUkTVmjSBDdwGH92k9YibfbxvHrECxA1vLzusCurjz",
  "key34": "4zCd4un7Z9vH46e5PP2pjwHweHFv86RmU8AdKTRUBtFsHCXE4dUs9NbvMdeLJWZDfwVqeqFNdaW8y6X5xGfsdzPh",
  "key35": "5hHFfEttaXRiC1BpcMsAjCmGf5eMqix5JLdPhPW69E2t1cBMfWwPMpTGA4yEk5huCPt99eoxQKxoRJzqDwKxHEB9",
  "key36": "oBDpiHUH5uraRHdyD51AxAguUxwVJG3oxYDxuEKZ14J8DZkGeX93sn82VLzHjdDmWJ1bpforj9BapTLFXBi3RAR",
  "key37": "2VGY8kqZH2dQocgHTszPzqdePRW3Y2a7CLNzTAhNjUeZMjQEVBbtrrM4rukbfmqZ4jDnyx5kkRroSVfiCDXw1smK"
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
