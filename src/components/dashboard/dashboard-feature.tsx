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
    "5D1Y2ZC8BbfRYJyD6qGnnNmCanZDoRKxfWbPhdVPFvSr3HugJMT9sSJd1FJTRhhxEfna4C4TABmBSxDasZQNNnsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hhn9MYySGDAzSLQA14eQANhTL69JLpui6B3EqnP3T8vKXTq87u4n77J1x9iaEzs1oMp2qD2WvT52UPLWNNS5fsm",
  "key1": "61tRXYfk3oqpwu2ADDGYzrstpepmHhRQPeKRupBkga1trZjKspEXA59xVghoxJy1iwnjFsSmSdKemF35DnWCF5C7",
  "key2": "rPxEwddoopkEC7EBaT84jLF2t8sjVGD2nLWGEE6RrFDhg31UuNTvgW4aUrd9ZPaxqM4ChS4J1ermhs81sy3vEpx",
  "key3": "3KXe911uH2csYpXtPgWusq5mQRiv4HV3VQuSiBtAKabbiC6UqAQrvH2EM8hDESjxjV5LiE5ij6AwNRwrJBCjaE6j",
  "key4": "526VsxRxcJajmd3YuJ5PG4BxKBEcAUaKTn4sd28uaNWJyN6uqSwynkAnnjhTS8mAZP2r7jeKFPqeVKZi5EK7m2iX",
  "key5": "5PDzizXA8wpxbM4NHWJoZ3qaAib99zxBmeeSf6r5NMZmbbdnk262WJ29vQWLzHb4m6NkaegxbF7vMkfKhiiK4Rcf",
  "key6": "SEhxK6YQTs9EmCHcRCBLuXtsus6zxuWaZBeLo7gjUjtCpmvGA2cbzc7fhPFwwFT2fXTTTkFsEy41s2z1yGA551C",
  "key7": "5KcRWQrbNd98cBkLHNz8Bpvcwrd3Luv2RV1XrzZkD26xEKFpEUsuP92fYEG8fTu4ZLRzGjvhB9EVdbrtsvPWp2dL",
  "key8": "48b5Cu1ew81SPZcKzYgskAPpswYFxrP9xH68fQGUQmR4iLegEJeUqhPsrRoJhgicnYRfeRXtH5Heh1kNeUyi71CP",
  "key9": "2MVsdeFKKGpcdxYvKjHCR6t3camDbSx2tC3jaonqbRmJz8Sx7XwbdqCD7VTDHHHzsVvNYE6Q3PuLjZU9EfYnLdW4",
  "key10": "5Y9HEEdxkLihS6xcVtkUSJfMbKGaaKCeqkRB9boEazvcBzVTu7bu4RrEFyex6HwpF9tD14fcR5a568TXxruGkAwe",
  "key11": "5RGgXjJ8cvtoRmNi9np1KGuiysP5aYGhw8mJQobpJToJ2quNrM7Y2YeUA61m68LjF9s8JMWQBRFZmExe14jrweog",
  "key12": "4Cqiir2aKrGdXtJgvoYm7uBm1stCshNNbsrtQssYaNa7j37HutXnHHyVET3Aoffrdnyqw9XwAMfN9cV17FSDpEMN",
  "key13": "26jZgfVYiduMrFBiZAKHKY1JHqhxAQMKf6JcwL7KV7TceuGHBBwK92bCyGHP12SXMBAoHY1rwtMVnedeLB3KW5V2",
  "key14": "4NhCg87z9cLfDB4MHhf5MwG6Pn3ErgCMozCtX28E7LDz5eWCgYVaTviDHgJv2QDXpvEsmvy1EfAq3Qt67FhoWRk6",
  "key15": "3DhLDeG4VdsRfpcPiSLdgq1mBeuRo91SnfvAqSZgcH7fN4Ertdb4zBd71u4yvVjdNSU4T1BNkrRsH3HD7xpydZWY",
  "key16": "4tyz2cL1uBiYMQHmBLQhb9mxAQQsZCC1RpHdpynqcYbzCbKJBuB9XeNC3fGMnXbTadFowAuuwq3uh5jSibq5e4Jy",
  "key17": "5bY8KULvaLYsVygmjDMb9XZaiwFZ5CkZppQFSDVhTjgJ4y2miMsNwLzR7VpHSMDDsADXvvEhgyJr4Hy48KEj4arR",
  "key18": "3DmzedqNjErrTypJ9snq1sYUtqDuXL6rM6KdFFvmGVkVu3wSQjnvR7eBg7mpi2BjsbKsujyF3MR9pWcDw8PphwaY",
  "key19": "WEvYu4iECY8s7eBkE7fubR4Kse6USW7aQequqR5KgsZatT4FEUiELLerBepsefjfvyHi3iC8unFLeVuceD7quKN",
  "key20": "2yGynAvAijg5F15qoS1QAASzqdYTppXZRZZeBmiwYPz7EHqZQUkSGQtm1g8HwpE392VLMPXt2wn4pS7c5EVbg383",
  "key21": "3hfVQBWFoAwx3E8bi982ioD82coJssAWRYvCRd6zgYdMvB8EbMg9VFhpfUNPbNa8AJSWHyR3RNVhWGXZghNFpRve",
  "key22": "654yWzkSzo35zm5uAyCzboetuedHuYsXLvjujwtqZwkmomQ8tBCPoohWDFQt8jgjLECu1iNmHYfFw49F3bAJngbe",
  "key23": "2DhJLu9pN3japmT4Uvt2xz8ax9Qrkdnt7zbFnFxBeseF7xeKv17pfoWu9miQAjLAjoWsYDHWZMZbTwtxDSAhHmMj",
  "key24": "5hSfrueEvroFrBwLqm8apekNtAKuMJh9M5ujv3VBFNGYNgCeKeF3JoEC6AtSL3gry6LYiueAao74tBt3GSZv2tQj",
  "key25": "73Litt9GgLrJorMTXhmjLhpfmMhStEc6GWvtWzWK823iUMmRbvk6HPzWH4tGxuTyffRaximbpGdv2sjd4e5kiBe",
  "key26": "4evedSMJw8C2B1Fc7fT56Y3Fn753jZa7tjW9hohhPtPTUaJwb7jWjpgGdL4ETv422HvQodDhRHbar7QLRvV3sDMG",
  "key27": "2rZVELg8ttBiSo2FE3wuf1FQXik5zdiu8uPtgjSXqxNSfdvrmTKiD3SsyYCY1KVLnwJmb3bHMCHBkB9t9mfFFgXH",
  "key28": "5Jj9d3nJjYgmmT9to5ViwH68t7JppoNCXZJr6pdqZZuWLH9dT9E4CPUsbdwM31V1AHeGVYouQuYdsrMrkiuzMXCK",
  "key29": "4qmaMdSy5g4tuNJELi3s5YBbdhY1NMkD1Y8KthGj2vbxL2jaKz9i3nNpaDcWHcCCpfHJcRvKj1jC9MbAAHBUsvsP",
  "key30": "643dVtQQq5iSChwJzc36uwkgUawHqMV6msFd8EoEzp76dbiGpqSFSZUPBhCuYC3g68QZBV4vF8oYXraQfgS5Yo8S",
  "key31": "5DLGHV82gE7PC4uLDAASQjAAkFR5Gj1htnmmnxDV8ek7xJihxJodQ5tckjDg7tNVyHu8AXY7doxQULGgBAzxJKi4",
  "key32": "3epyptJN9yKSQc157GkNPdXkCYrMZjwfdjWk53SadSpa6wS7QRWLp4epbXya3kGyfW6cxNqkhTtsYnyqCtPRgoLV",
  "key33": "2PUfga33yGtkEemQMCqB1LxPp8U939ieVQVmauGExmcQ3dCUdPV5CMukjsR6pbLiH9MN6w9g2KfBLNBZCkmQsvxY",
  "key34": "4eCPDXM9e4wUbfhGf5D1huX4tmGs1iEhuPSQjWqAp9tzGYp64cvNF13VNbANnyeWa2kXmx4wui35T4vqaT34J1jr",
  "key35": "5DtZnFLFhsn6SX8QWZeHDycgLnExwpsLbs3tHbYYaMxRahK6gm1Vsg6mRwymtNtiMFNZRXGq8SSTASVMZe41KhP9",
  "key36": "tRA1TAfL1hN9i2tjKMEhHTXGX9Cte6Jy3p11FXpZ47m71FQqTfVEPh4ALmfk9gSXeFAk1j2qcEe66ReHxHbaL8J",
  "key37": "3CVMPXcXhGsUzSWwbmTXbXnbhTQ58deevRJcNNDRwa8BvbXBAJneXwoNq8AR3dFgYZbD2kuRsTcnTUbA41jFNCFB"
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
