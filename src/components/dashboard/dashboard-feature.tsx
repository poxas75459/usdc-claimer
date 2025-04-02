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
    "545QDVRXZa5PZTe2x244RcpsqtTXRqxGNp7czgH2FcnhS6CAoB6cEiVF88MAvocD6BcyzDeEkG8aZJ55nuNGiZdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQfrtzNwYrdVSRNfYHigxRnFoYv18WF5gtgct44HsU54rBs8chcnVWhWYUbUjXzXGVuKgtJsobz4N2i3qfTCW3f",
  "key1": "398DZuoS9FikUbA85V7vKqSALfTW8pjq1zhmaXYyQCHJyVFZMVQgnT3crtVsTBdnAJdvLtqNoLoJWox2qzHUWctk",
  "key2": "5bvcQtpuW3PJoG1iKEbMr62XanaXMLZ1TEqj6boM9aeSY7RrcwDMBJJAMwrzrD2BADhi4SpJbvzxk5sGCAqsVUE",
  "key3": "4qxArmbUXg8euTHrawxzr1nnuaMdcLWAHSbzWXYKztKDnZSuKFRgwRYYn5kgTS7JZKNxmvJM6nnQAeWajWJUHDf1",
  "key4": "5KXoGCTg7ybYPQgtxro1DxS9Mub2DdyfWsMfggiYWAZz5teixDK9zcXZMhskpikr4o9YZRY5d4MocY9fYQ7DF9HN",
  "key5": "1eXpyR9jtzrpgCkdWwLnr2hYEXGKE5ptNG8uKuxRcUGrKyk2wFQ3AdKaZk7Tun4Ku55kMwigcLW1zYMdmEG8eUu",
  "key6": "VHLSNgrXX4ojNrrG3TQv6ZdSorcEfnWhscKPbuutquE8G7HD9P1HPqo35b9zhg3GY18ZPW1ycLcP2UW4bBum4X7",
  "key7": "4EGuBdVz2pC6DKsoKefQMhNAF7i1EpApR9wSShKqcx7pcjmJkSRzQihE6f1t3AaMii27fP6DhwwTJVK4tdNAf9xE",
  "key8": "3na5UayNQmRkZy7kBFWMKhPFQRWz2AftFERj4XUQSuHTEkjzH9Sce1Jgoq5WdJ183RLN39w2r8X9kjgRbE1dH7Gh",
  "key9": "51N3eZ8rVgJysDYEjibCWEGMCwrBKcrXRUaWd9d8qzXSnWh6K2mDUW67T5ZZ6mhoEtXq9TCTt22HeHSAmPi6UFwa",
  "key10": "2rM5YgZFAYyErWstUjMGFKQcgYEAAiFkjnYUsiuaxkhmSpeCCe2565ktJDr8uVqMSfKrxWicnVDFtkyhVGD3JVQw",
  "key11": "5X3oq4MQoG3asKH9BaZzxYU9ALoqVeTNy4EzTGrTrTrGbnCVXhS63xoGTZMUVEAzbdqbxQ5ykyFPdc1wrzPXVHsb",
  "key12": "2sk6CtJikBd37d8JMpJyNJvgTPsit5saRpQRceJ4WoHvAZCdbuzMS2SyFkVx1mF5D7CdxeiSJJMzTmZRrfaTeH98",
  "key13": "2z6GcotTRLZ9byEKwSgNUbEgh3mGg46ngMMRH74HDTSE3iPdiyLBgYvDHmz1HKLfjMpqnjaoZpERtXwWK6GKfQ29",
  "key14": "2QrcvgGd4eRCssNu41a1BNuhNvxQtLi7x5SAeDdXLLTdDyVVokuPhopJfkNCUcFYFT21qk9GJfCGsPTDVAU2jb5t",
  "key15": "5yRccTcgZJYfTkcG1JnNniUiYTrKYbFRsbBxR4KzXhCfhEN8hqVtvq2Tb3BDWMQH7CW3kQ2AV7ZGZofPRqT8Uqqh",
  "key16": "2x63aCx8kKgRfuTJHGKNRnrNJpD36ozLV8qDvgMeXtMF642pikUsJo6SkA2pAcSHiBV6RXGiY92nre8rLtFByCw",
  "key17": "U9bcgKJbUKBXLRBU35sMK7KhgMhW9NexV2oQPLNmXE9a3AUd3JXVEPWVzVa5xuu2ZLjGSugvrLTegbdubhcXJuA",
  "key18": "2XUAKoEmobWurYxcDAYez2Duhk7UA1dtuKCtqrNRM8Y2PfPZUFvwLp3L6VerKJKVm7YD1nVAK16yzMaLPQtW1xD2",
  "key19": "5euWFLFbemFEJi4F4fnakiSoJ6F98H51gSK1vAs5fnZs2y6mZ8RM1tBYmJP5e2Y4jhq8HFyVa9CaPTgh9H6u57Er",
  "key20": "2jsL3FDiaEdwYLmHvLH1KRJrB1Ye3NNXGGRe2UTDXS4NrztdT6gFxCUE7JmfjvFeCVGQAdsmYPkjU183uXMNXk99",
  "key21": "2Jnq3aEDqtKGra7boiS5PNsxd9sQ6XMd4dWggjCYMobh4QGQ5ZAp54uUGUyJDWb9pSAZykQWark9jNmu3ugP9xHt",
  "key22": "4APEof39t2KpYE3nzgQRWpfkxqMSbtiegzjDEp1y6pT9RMLbiiqrNAiMxni7TTeR3v26D1L6nximVVvXyjLcRH4k",
  "key23": "kyiP2MQnBh9Q3AhVxyYFxMfqiG8BaS64b5VkCazkVcVpAMDrK16N5T1h23oMUNP4Ryz84rJbwaH1fKV1q4DJCoN",
  "key24": "2X5rqbuDn4KbXYJb7DCu1g8QhDnTPnToHVpvWGomDRfUV9biUW9s8fGYoXRuFkFE7txsz655oMEryZRghAWoxa3k",
  "key25": "4uBfk4SuSbL6jH9tVA1PrJhGwczr7CYux7rz8Aj1f9WCrqYtqGC6kbsWr2Ajmdwku4pMAFBrTr5kX7tTF5BXhenW",
  "key26": "383QA8Dmohn8qMcWD3oKGNjKXTshhXx4APc5V71ahnwodqSMNz1iK2CQc1JYZ12UjYVTvFvCU4qJKk1Cgwzyv1rd",
  "key27": "2A1NqkvNpL9CtH5BARjUHg5fyE5NEju8xTUKxhGUuTxMCy6JNSUSs3DGctroKfDrdndqdAe6zrceXP2v3BSnur7o",
  "key28": "Vq59mb9ZzKJLuWsAoXxok9Nt96AMRqzk5oMW9hbF9K9LbRJSjPpgegBhH3zEfuSsiB3g2xRpsozerCBHvsRp2oR",
  "key29": "5PoxXCB6Mjt6yGx6qNt2iDBdDzxWZu9uuGFh9Dar4ciG9Ai6vXBtXHX2EE57rryo5zNtS2frYC6MzYZifmRJ3v55",
  "key30": "5LBmpncSoP8YRFwuDicCxUGHseQG3H1g3G66WGmgkP448EEiVhNen11DWoZN9cn9nMigqiSBsts2Y3vQN2gvQv31",
  "key31": "2XeHdDyjwMGyH1CViscRBHeTRFwAwmthkiCWk4uW4DArTUEB8mPiZk61sQ2eRPcdVc2iXcBES77dRqUWYm2XeFxG",
  "key32": "2ipHHQWax6WkYfzMSgjXMRCHP4izXjiwNq3idJzqPaWAjGWjtnohqtet5Xwid2tYEK7NgQBu8GktgXgfn3nZfAey",
  "key33": "qqF3TkzwFUxmqycDk4yncGaavUiracGXCsrfq1bZgQL38bSZTAZQcbuU5Wnysy5DGhpJb8rYUc47PyF7DMRwVAW",
  "key34": "3JCA9Ykw2JVmhoxDkPU12NmkYxuwzAHEcFwZpSt93xuvAcQxRGZpnLVg7S1KAUwr6sz3DdvpzQhMLGdRfm8oUrCq",
  "key35": "4d2dPo1PAYSL2cj66eCxKuX5tje8SHjrB3f3MaMPiXXXHpWYBw8yw9kixkjE4XN68JcMePUGGf7PJ86ko7JSrPZt",
  "key36": "2oCHjj5yfzjS5cL22js45S3UXjc86318iDEcRx8RFxRHyqGgtX4joBq3c3EPpdJUeUcV8zBF5btqgFj7aRcmCRVH",
  "key37": "2fLnzwMjpcJMAfQ4Z3sApdKsJUUQbfPGoQyYcjr1GkrxXP1qgDskrNVAJRHkksdhr9fNcWQePdDE8KdLj58dupLB",
  "key38": "5wumdgxBoGjAK5Cr6VwYhhejvLyHRfEJpT53uADU979zuXBTEjacDdhfCsogCvquxTK1DX9iGsP3JYVGHR8fjYHi"
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
