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
    "4YHKZAH5NoL4vCYspRWtsy8p2NZJy8aPZWHqQifGRcdCMMYDmJERgHMecoS9fzNChv6XscK6pqVPoDEWhJbCmpg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51RiPDTtYHXSofdgzYyNUeWonVnAHMDny2bJwPbsW8m4PCqJYLUAJrn5ex7mx5Sgi4Q3VE1HxtnBC1z1EFCbNJSM",
  "key1": "Gpk5YUVx8rWdXj3RuZW6ftpM7iGYNUmsKnepK6XRjGKtRya58YMAdhhULv31RhTNHpwaMVHwTNCSX8GGK6rUWHv",
  "key2": "4qzmvHnVoMRU4GFYTq7CdsmMMe45Sa4JSv9XM9iUidA63PsQumGkmAuTrRhg721pGGJCfh24hiHpa81TPubLcSg7",
  "key3": "556zAVcWMLFPXmgzZSzfUVWh4q7LYrxW41socTFf1BPLTP5f2VU6qnwMv2N2MgussaUrET6u8VLtbRvY2ckn3jmE",
  "key4": "2uRW94oEshSXFFUqo5Wg8biFz7aXp1CFa4hcEN1F7uff7uSxZkE4J8QYg6egawEVooeuciagzjrXsTWpEnzGMtsa",
  "key5": "4RjHFcm3z8TwYE8mh29UKvqPciZX9JqzN2JLfR9oBeZFS6vpPwHQZPPt5z1x8TGqHZFAQiUUkcbfVd8ChcusQ3Jc",
  "key6": "PNxqTQUdmrWqo6LQpGFgxhS8x8r8AHxo5CqjRqeRbUXTsZMLU1ZtWv6H3dVTdyKv9iKePDcgiA3qY6Km1Dej4AM",
  "key7": "4AAHhreMs64uvy6JADSDdLaw6gaPuRcXSWfQ9LRg81zKviTXJzBJpHbPi3xgptA9rLKSfcQDUzz1r7cCMYVCC2Bi",
  "key8": "41YeRa5kvMFNPbiHvpwQVyGVid3XfnLv7poqYxK1mB6wcVAFAEF1ac89wcu7t2hfFEZqMCQ7LmpVa6NBoA63pGzP",
  "key9": "5xhuaZ3SxHAdt3xf2oq1HHbjv6LcCkFtyrHLY7eLdkurCrL5M8FyVVEjYii9DyY1RN8rKSjrKZgZCNDwLHpa5HGf",
  "key10": "4Rfjtra5KFETdMyHAxguHGvMcB93cvq7fa52h3Fc49YGWAoficThMndAtKEJ1EYrWxrenTdrpgFbb74CzEoLb7pd",
  "key11": "4fcab2pfufSYz1Aum6qMELFbeJUDyo3xQDA5kdUtqGMJT4SvvWiG7X1ucnjG7aAYgyy9dqF5kuCNw98SfdXWoDcG",
  "key12": "2FA4kfBMcMESzQ6xKe4mE7GNXMReRXx1hNTJh4ghhhT1jxjg7HrLewFg7sA3pEm8t8v3GNGdn2WQpzy54RMp5vzb",
  "key13": "unekAZTozG8ZgqWRDc2DbdtVWTjDpHmuLiKbubNi4xM3mypqxca7r3pFNkHgSSF426Y454dM4DLpC5o8urZsJEQ",
  "key14": "5yLNFdAgm3CFoZBFnBQng33WSdgCYnqXSaE6QnwjWWRNp8jJ2ojZuDfjYbrJkAvkifGJSV3CxKcTSfqPEazJvebT",
  "key15": "3qDQjes2uhFSVtr3gX5B7vGvwp5xNM5bF49xiRFyHPp2WHAFQhthkByWYgeeK4aVVLqf8p3U2Zhb6Q4HoVPpXCng",
  "key16": "4LvFBwZdyjRXhny2PHvRuWWktcrnrzvtkPSBsjuBnC4aZfP1quUWokjZs824ahRmZSZSi9DGjx2kqhpFa3Rzm44S",
  "key17": "3CwK2ujjBCUiV7c4kgpB9RoQq6nHNZshxtL4TC3XsMNLzVRyPeL7jqKaZcMY8u2zsuh1aZoV78MbBenAiMMT6nh3",
  "key18": "284EUyTm2Skx6fAfz15EGfr3o7EZSwuPQMAnoLT7p8MKo6yu96yagbBB7xeuaK5dUyJNThW747Wsx9u6FRF6Lqx6",
  "key19": "5efRV2Th4xMorPLYXYfNC8Kz5XSP5oUnJHgpXaZUwBj5WHmQ4AgnPZJP5uocLbcRWnBv9JD7nxwyRrLnvneJr8tq",
  "key20": "3Nf3GSW6ncBkgfDE3EY85SZ67RjZjrPXbXfqY7CNxk1zDq7G5nbd2oksFKiuTz6yh4BzrhVdC7GB4cj5FCV66NK8",
  "key21": "3iH5XBkh5Ke9zVG9C8ymcmzwhTn3CKjJwtQhkgxwrdczxhhWdGQPRMo5MwtKbYD7gQC8MhvnYk1RwnuX3Rhj8snX",
  "key22": "42DC6mAudHCG63UyMn99PiXkUvn3kTh6MyJWfRrMmphJiZyGY3s3fEE5Ua6smwNR6fH8DbrTkL9i3osFK8UGtQeK",
  "key23": "2r9mvpH1MrZAsu5BxsZ4pCj5DyabHyDLraTyEEQfDZ2wgT8Riiso2vDPTaDPe7P4nX8vJBRfPhHykkVwbUq5TYTn",
  "key24": "5o1wYtss8jBs3ivfVHw3kYPJwhVuV8HJiV8nYRa9DSvaVoSb1H9XikUSbJQTZ1QYgg4esY9YdBho2CwoNPSEHve6",
  "key25": "ZWm2bLTp1p9FkLK7zDEJmM9rR9XUxueWMDLMQtWoceC6vWGCGCcQ1qqeQLvpvfzc9c6uZzgv4MpkNPVw47iYrZ2",
  "key26": "5dmZyafLiaH9q6fi9GesfLcA8CPSwzdsXiKQvfWV2Vn2ZUDqBQYjCzY1zSEJ3avAedi2BpDPcCTxBNHDNx4vRYN3",
  "key27": "4WPZ1cvRdckRpX7L5VpNbfM9eQmqbsqcpqCTmfLtqyHnbfzRchT8pjKi5Y1eULzQ2AfK1t8DS7j6EhnJoWVGEfdr",
  "key28": "rPfkUR2GfVHtrmtCEdPztKHCB7jrqhwqPp5Nf9vXud6jG55QvzqVS5vm4PZCYFUt8Wpx8eFePBCgFqP7YeQKjP9",
  "key29": "3rFFA1RiTLq8rJPRsVJupdvuBnntB71UpyUC5ncCXBmEA8i2SYv2vxqFzq2q8Kn7fZbD1SXbrARuf8Jm9ZKLFfKk",
  "key30": "LpUwcwsb15UQHCP4gjQzp4udK9Ua2tZjAAaTyhmMaPwcx9vXpa3WsrBAwE25Mj7Ft1Ur45S88NroEkFCMPzmyeB",
  "key31": "4D9JWidkbVd9yX31MzUiF35VTjyYVJv3fgzHXWMY22kBBCs5PxuyVVkRocT4Cb51hJArx5m6Bj4ZfyFPmRNMDesR",
  "key32": "QH12yY76ENpuDYTVD9H7c48mJRD4esgDdt7iMnARD7S2KGbJw2ChRXpPiCUaEowzqriEcFQ5K3Uz2uHieY2NB95",
  "key33": "4c92czg5YS2MWQoEPqLrZS5Ma5meSnrAzVnK1WbBW36sgzLTDDAMULkfr4fR3eNdCAFXweZB3XaACGsLjH5QVx8f",
  "key34": "42JLhwEkkNMLKoFXS8zpsJvz7MowKNKXKjZ5yp8yTSG5oVZ39U22U5q23WGnUR1Dpn6LrqurjtKZp9zgoLCbAYKN",
  "key35": "3SM3Ld1XcNRQzEnnn16N81Noa4JKo3fQjTSaYt1n2P1X1x8WU8JQZzSHLQMorktV9F2mmAjNRGTTY8iiq4aUGbXr",
  "key36": "4MFKgqfDnWsV4zFYyPXmCv5bAYoCPaE4JJppRVn135PkzQs3y14L5gb4Fk5KzpsrjRVLzQfA4AmD3XuXyckM3hvF",
  "key37": "5sghuo3cmVNmTiSHpdHQd8fsSkLVdpRpF7fupK63Bm589Wr2qYmuXN9pYmnzmqqK8N3hyeLQUeS2GQUSaZ6uFeuB",
  "key38": "346sHWQ62S7PHn6bmLxvnCYh29DRqiMfsjVnsu8n5PxSgK59p2boe12h1vnY6SAGiqLX1y91V4sxGddF2hFJcDas",
  "key39": "3ikCmjRMd6dw3tSYVYFL9H2VqRsiNSagSAsGMymHGBekVfkJU4kXMjmjabxNQ66NRa4VmJ8oRdkW6gdAqf2Wxk8v",
  "key40": "48hgQ9RofhgZGcqp5cfNrkcEVwyZBj8prE1XXcH55eD1VDUsjjw5P6H1D6RQhcHCv3QPRKNTxy2zrHft9Uss9btJ",
  "key41": "2M4gNtPfK669MaywJ1UaweacQuyfB1rADskFWf4ViGmHvsoquCW4pf6g9vcPFBHaCt7cbc5ToYkuMf18EBch2tNz",
  "key42": "5j8EDgkPtXuJ2QeiXDwAKUki4mxqpxFUHwbsNY6k1BETP5Y4bRDHFuK8rY4PDWw9q58z3L5dbEzJxyJyBFWkYDD5"
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
