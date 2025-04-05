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
    "3d484WZCJSDMFjU67mbweZZgWWSvxmoP9ikjY7aSXWCvLsrG2rRGJ8cKAB3dRJiFvPwUtajAYWh9gLP9mFfj5r5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jcSZMdPrrsGWSoqCehbz6VDaPLvUQxtxnLCfLRVUbzH62pcTf9sbJq3f4gozrkLzY5vn1nFWuFvuvyMbT8ULBt",
  "key1": "2cg3HKEAPVfcWMkx1U9E8naXqvABfXkCGGJ9c6LBCqZ5NNUrN3ojNU2T395WiwoswnLn92xSCDXWfEVo5y5uWF4o",
  "key2": "27DBPB3jDhSZQHZjSJoWCVoqJ8iQoJfMBNRSAtsJ1dXAgY3oA8BrygrtAyZoALhRrhDRms48KmjDwq8s9U5DbB2R",
  "key3": "3Psx6svPvxpC3vfan2bhY8KbTJ11R9K5Tx5jQScVnzctMq9igTEjLQPj7Exv6wvBVWf4DL4bbKHHMfaYj3mvapKt",
  "key4": "nFUiK2zbZdHZSj2FawB58cS3MdviXEu6ytbbZUdmnxnEde8fPdPYHPwirmzWgVxD5EH7Fyxfvecyhmizr9pkBS1",
  "key5": "258y82PpHn2tJkTi28zdFV6dzrUjhLY7rzMHrKbS6grmF29oQpBgX5qntZNUWUkE6yegaqQuuMQLWjiHxdpv9QaT",
  "key6": "2tdnvYdNfYPKYpjDmL3aEgQAni9k7HthYypFvXe7v2DnK1TPsgpPkC5qvRDuknYwoCuvaKgqS49QvNJmriB1MtFQ",
  "key7": "xo4CxqS6WvzhDeeZeNg2dA6ZsbzmwaHz82qS68jmXTszt9cK9Nb9aRESTseJRS3PCo3hTAugoXVj3zJpWqjk5gm",
  "key8": "6jtwwx4BA8UhLGXrM4ugAn1hvxRngs8okYsKVDaJ4iUxFsXzf1Rr3bW4cGEq9vzS51h55Si92uBmEAxgTtphBeh",
  "key9": "23stBfmttB8LeL4cZZEbDWpKQ1A7oqiWdiyi99pwNmVXLQGEcthG972AG89fgyBkVAAXfxVTRvoMtBDnBCuA5wLG",
  "key10": "3bKyfFAFGUeujxS9qVzxHFGsC2cLM2JzEcwYvwMfwvFSzbVxifJHRQAVAuzC1eKj22axETzDV1qj2cNfXCKjq46n",
  "key11": "uDaFj3YqT1PkF2q1vFgHVXmhLwu1s8vz9uCbjsNnUBB8DYzhrbKXmqjG4uFYwwawuV4Pfatt7bZiMiWcutNdmaY",
  "key12": "2EKqAB2KdCB8iNq2an5oX3yHaTwT1GZPVmdqXrFKfePSFxmuCeCFGGGpNaMLmZiGNg4EYunH3xZRzFN81beyWpff",
  "key13": "2s2d9LFRbY8yXfqeA1kQp8f25R7Y6RWrvCwJtsDWUnc3BmZ5QoRXjkDawWBY7tmucZ3wtQNHJ1tUXLoBUpgFu1DP",
  "key14": "5KJmRBXq5B2veZu6U1W4iLV9jbYZici9Da9GH8AZE9v67ftDZeyBwpPPH1neqkYwMrXzs57UCbjQcSKD6BfU8Fiu",
  "key15": "2PHuMa5YvdAeqaa6pqoKrxW6yDZoyp4mNw1Y2ckghxNeNXKnPwY8wgfVYxLphpKyftLd8U5HiLSmLMuTPXvNWiRj",
  "key16": "2xQNzYjp6X1ie2PWjmKSyNVQEYtBr5WfDFcTDbgCtvuDpfMcui2HjwBm3JXUX9vMAgtRT3mBsEJDqsSbFXSk1XZ",
  "key17": "23DVRHJx5vz4UtahvQaANjrszEDE88ycNFJo2vNL3BWQ9wAA8kGGA3RzXc41THbSbYdwfu5a6cNF93DxY8HdRoDf",
  "key18": "5WojVA6tR3PSqpkBjrTGxs1368aurJqXrXyCHykLxvJTtvkWem8gALniuCd4tSdfa2ATXrdaQssmEx7cqp1ro8iF",
  "key19": "eYJbUJF6xh8r21RpNmghDAKN7NztZ1xhNeJ1xJiegityaaMzzpme4vAUr3sDedDoTXrkKNNakcF7RZv8LdYnf1j",
  "key20": "5FSs8i1UpmpEAbBQUExkMzKtu1uJwTJp6UEkqXSqSY6bJpcEPUWXUB9cuuQbGjgQffKLjsz5j1MpVrEtnG2xbt4U",
  "key21": "5AzSmvVzgbu6mdFi6HznMadkZg3iEstW6oenG84n1wr1GvCNGhZWeWAwghD2xuQrYUDBRMySZvwr8eAN9UKxVZjD",
  "key22": "66eWQSgw2W7Hr5zXEcecvCkGD88GQu1t5jL1RrbRqy4zPt5Vb3mWnNHJmshRTyBw7JwyP3KXybpccCF8QdyHzcbh",
  "key23": "4KhzU2kQFcFnxsLme2Exwn5ahamy2C8K4QXNGmrpwvxpKmxyrAmD19ZSEwY86H8sqdAKLgj3pm9LD2DEQsqwVuMS",
  "key24": "5twvjkrMUZmTr127dphQw8Lj6WNxrt84pC9UDme1RBJRP3RWFF3DJezfg2EorXtG4DFoYkAtGFkZToeQmdRCBYox",
  "key25": "4pe5Ysh4835y8iWTMkvFCfTVuGaatUa1FkaA72f74C9k2BoXZvKa96QrRMqtPRkoR6Q22R65UfHF2YjNnhZVD9TR",
  "key26": "4ooXcEtoJ7dWyQSfLoCfunPX511EKYNYtQs2MzjudY2wkWNXuJqRSBoJZYQdQh47UX96VabvEDD5X5xdj837pYQ5",
  "key27": "5heRszQCi3NcyoMKUtYmPJx4wVaDPdLG6qmRbaqyYZoKo1bjFoH4YWfXK8ugobm3gTcetZgvohjXTP4mqgo9fKD6",
  "key28": "h5c6K2GDFiKKpWD7esX44T2oxsPa72jqRcL5nEcwajGdSfgyiJWCKaaWobFdJtLiFCQZzA2qjZwNVHjgDdv33in",
  "key29": "46d7YFPS1s5upHYZSyqRSuMAoZWQWnt1X7xzW7tYJdAuhh1y3PSSNWrAxgwGiboBq78oGZBK54rGY16Rb9LEr8qo",
  "key30": "5osGLW52HW2kwKtBzvq43Zc98HAtY19xBi4iZUCkuSkMRB26Z9zBmJM4NjPpRssV9cE1G2h5aie43cC6EfNfYYP2",
  "key31": "4zooeoZSEJVAzDiLbP95MvbKxGvUHAbbdqbnDQHuU4ACALZMauYyU2Hy3S7B7nh8oSEaoS2HCfJizRXzsHdpdMSx",
  "key32": "4EGJD1LnT6eWi8drGGm2V5fWGaKZEhmBrez2qVQrFbEMfxynbpnQDDuKnGuTQJgbTkgGWdubYW6TMW3h3MHzGRoB",
  "key33": "5z7oD3g9a4oMz4HFsTGaAdPmhzzisdV2cLFcprQetRA4k6cKUiG7W5Sx64jw9e7DK4wf2Tp4kj19E3CtC4evXHqM",
  "key34": "3znNeM5nShqRhkWydWp1YuiPynbXBL1CaGMtyduoxvqkz4gwqYbmt7RMPTKzYc9YwYmnRYMLm1QyumrB23udYgR3",
  "key35": "61thvSQ1aoLGkbTetkHTmnG8jDwnMoP7fDkWq8t8sT21sF9gBwNgaxLb4ueq986gAA8GccBSjzK258KaapHqkCzs",
  "key36": "vSq9GGK3m6WJsEshcxQk8VKFfM2KsQ4T8NSKRL5sdk3GGSEeHdcZcKXY7GcjqwKPTgKBpc582D6L2MRacmzzspr",
  "key37": "2UuBRvwa1Gqjpkcbx9qPkQARGeiJr9zTbcQdE9Ltg2fdS2tUGc2vnv5r5rRwqEy5ZAP3QcxgRttdtynC1BjaeV8q",
  "key38": "2JWogGVz9De8XMNsuWAJ9YpoLZXqjgsgqgd5UD1rMQjrbMPskcUXuAGWMGPrxkciJnj6uorQ7swVK6DgqibnkuLu",
  "key39": "2QYPoimy7wmbebNAXbLqYxmNMmKrbbXZo2uJY1Rno7fmVkM17fCWhL4Sqjr7JjZkoREHcNUqFjtXxCmfG9euvNsw",
  "key40": "upAQLmkX82pSy1p5Bt39vkPdV14QcVEjMqq4EsurY1FYtjHStFT77XwRXMDr5nqt29p7EqRBK2yV5GVjE1paZtG",
  "key41": "ZEJaDuh5DQ1aaGnTtAMPNyTtWMfyjsicAjVofVYfGgTRREYcRyYmSs9agXhVnVFrGsrEthdNKuHUTW13LgoknFP",
  "key42": "3VWcF3T1882uGknEcPkrLzihz2DzVbnqyXm2TEfKjhABoyYJjXMP2sRGBFuxa5eFCtbZrBFPUzxAmaHGtd34XCu3",
  "key43": "2RkjyG1mew6MK74yYRkeL6g2s5vWwHBg6gg3K4XYgrNuSKfbeeGpr4b5zEMkvVjjiTvEyVsP8z5jn9RTLmjvZAZY"
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
