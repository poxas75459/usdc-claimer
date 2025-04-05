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
    "3a5qjVSyDvQajnQKSjEicdRbYcFL1TsYSbkbRi8FakqpWzVTYasbcgBE8tdmz8hGt7YGeDMKxnJhdTRyNr3dXB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BmnWiZ7ZxMS9Nu9SDG9BEFux6UWEDxfmWG4RCEs2SkKQynVJptfTZeAynEynoQ7YbfKwxXFAGxNmqSQtLpNPFK3",
  "key1": "58wsyUPWBKAUwibbBYR3uQ24hKw3cijre1FXgW7F8SknUQQU9T3v12QgM7tbQH2MRU32JjbMndVpmuL757EWiBhX",
  "key2": "9G3jZzk5f3Ffic5yb5ekKJgp18GbxFXyRPPJSjkMywFokpzjpTBcTemiyMAWfu3v4ARB7Lsp1sUHN5gt8TijVt3",
  "key3": "5MEuBj54mgyravaQQuS1d6pbfHJoHQx3p9ftXKLY5pFeqPYohyzB4hfcoBdVhoVyHhNEU2nDTLxxZ28n62UvnGA",
  "key4": "36UP5bBJK4vzMEUHnqwHyjPWJxmBkRgZZbeY6Na3N9QA6Rgj71nEARdFLYWXqvZWgMiwUBvPYb8XAQtJasGnscio",
  "key5": "2Mg8i5qCB24pwRy2CGMLCPxyuuBBaqHK4j3ssXRNzQb2tQBseNtv9mMTGEG5M6zDzSD7vJCCqAESNeKpA3MULNA7",
  "key6": "3Wa1XsfZb7gQYW2jcbEkCVAHvet4onec5DUKZp5rtenxL185FiBPg26PRsC6A8pGhNSiuN8F1vaUq9DK5b6p3Np3",
  "key7": "2mX3wfH1eFPcdY56M1cQT7xNKhnjKhLMgpK5Pi1oKVFSuM69RViNiAMG4u7uFKnzqbYftXasyEfurrfEtKvAvgqC",
  "key8": "Yfbdq4Bq5b5JZWffyo7MWfZN88i8woyjfb3AtwqqYH6mUGtZJCvnK6v56YemKo35ZuD5a6Sz7qcxqRdBgjxNc89",
  "key9": "PmTPeHvUiRo5x3bah6PFcDkiSDj9pH1o3xScCvPYURqxMppNK8vBrfUWfi7beduw6auaZhW481VASJfP8AeoLqz",
  "key10": "5Wg56P8a5qntkvRMfNDi8Nm4JZWMFS83pNWH1xwa4boF4vRMYRXnMDsq7PTaeVmoQqNPhch2V6woLQeUb6w7q7MN",
  "key11": "2furjMohnAXaHLYZS3Ch8TLNwTeAHorhM1EXPwmMjcABLCkfPyXDYgc9FL6S2DHNrp7gkX1NbQ63EoTpQCMUjYzK",
  "key12": "3GDKHrhQ1EWUoPEfGWMs8JcKgPvxNeFAd4nYxBiLLd2fx63JdjtRBRwC3LpjKLTfbWZ2f6ubuV8BXdavUzjKYLwi",
  "key13": "3N1p3uMTGnC4TJ45h2r31sdFGfw1JUci4Dt3kDbaB9TdKK7p2wAokN1aXSqQq1MJm38xVzdEsUcpLGr6d8UHLNMs",
  "key14": "2LFiWqdCumJPKs1WbEuMjoSwDv956CZdBzv8UHgWff7Sm8RkfJ3EsNStcPGXebZfmUyixtVBF7qYpixm7UwuEcx4",
  "key15": "5sb9KULUGvKMnWxC6SCDZk4WwtANA62xtvVWHyQruwS9MrmsrwAsV1SzH3QCxYCjX3KxQXTq4xrQnheGw9V5NVmW",
  "key16": "5fJSRVjkLeV6oUpHVKKHFV6EYkzkiYDcYtruHUyrHsAMPATt5Vrak5okzzi98Gah73aiKVy9DspHRE4tmyedHkjW",
  "key17": "2iCRpAULEBB76jRKY9fAP8HswbrnSPNwoVvoBJ2kRJAb5Y4AmuukRC5TUjhfSNUhHJ4S6HKeNK2yMMPBk4Lr8cmU",
  "key18": "3CNPKcHfy7sovWHFdAj9gBgMHVJ7855uTySxszGvCeqoPfFbXshD3mL6s8nq561a4AqS33SHjVKwmc7BBktyVky9",
  "key19": "S9eivKcjTDJ7D7t8Y6ZD2Tas4y4bdkGsrMuPPn16G9YvCNNY7S2EH9GEmwpUpAvUYGhTWsf2oBgdxRimNQB2UAJ",
  "key20": "3YCNJBFqcSEvCygCbBFiXBdwxVT2TjQWeWDHt6K5LCBpsCHAPJcXc92RTY9JgEe9mwmsYTuAQZmPy7abKVyVjJ3Y",
  "key21": "5BVAeVpP9ZuC3Xx8ZtDqP5Dgs2AVvS9ChyrSr5GdepUiTSijzL8coCSxWkyc9FEp4cY2Pf7HZhUzYySs4eZNYmfG",
  "key22": "4WL35Mqv46dHizX9XSQtDEDDdq61tdvycC9a6Eaqeu5dpSXKpW43u6xdJCYvCWddNYV2MXvNtNP1mcqaUGa6qxKF",
  "key23": "3PAEJaGjxNzpkbj5Y4CaHN2aKLqWAZpxRuKBzihztemaWbt9c7EHC44ywue2LwcNV533d9h5DtzGNLuUZfVTrzrQ",
  "key24": "DFFJCFompUpveCKJ9KFnQUsdB8YozTLjAGBBv5HeomzQXQ8kgWaAGHDnJsNPV3qP5DUt8TFsBZztSeWTF7c4zm6",
  "key25": "jYi2JZi2cZYukJcMqSH7G7LowzK6W4Z3ATjzxEXCpVVC53PAs2KYXhXWRUQH7x9C7ugnZwJruPffYgnvEepfBag",
  "key26": "2Nctdku86vmvdmFyegn58kNs6z7ZkASHbcEQ4SUDrBEexFArfGLUy5NjvLCxLcWna2JgxtYEPUV6kq7zRKfsmF41",
  "key27": "2pCKJBtqpVmnvgqAMMx6tuzS8nWv3kuPX2dHbsixgu49WC9MZoFVQok7QcwjgnYEkJbsd7vk3zpM7HbL6op3hBgu",
  "key28": "2Kffu85jwmYoLFexrk24LNCJREmBvaNwhdPhzwM77ocynCCxcRDmt37zuaxENc9kwfR7djjzYWu4NUAdsHUZb5nH",
  "key29": "4Z24WTScBsvESfjvZgCaUGrMwKSV8UKE4k5TTVVuR5SGYGXW44xUxE9DLKVPL7DJYGGkCLg1wHR12w9eVqwDCbMq",
  "key30": "wvcXLMjUU8zaAwD2WypPWUrsaifGUqqKXsqjJxYSNz2hhdnKoxo8mMAShhQ81uBECxNdzBG99QfXgYdT2Ug8NY7",
  "key31": "3gtFG2D77Heti4XnS81hDs2HqLw29xHfnxxoNJ9mcZyY8gkaJfEwFpmUpsp4eiPAY7Tj2iRtQcLNbvZ99Wy2LVxT",
  "key32": "3muopAq1ooTQ2c5gBW41bxNLEdyL4wpNk6X4ZEGjcek7UvCdSJmy4L7ZpnY5zAStLrxRrE2jVwnqvf26HT7tPTsR",
  "key33": "hDSszDPNe2L7WV4aNsiFZnuGyA67Qd1nB912BP79CT2PAjzdS6BJZoidKDqcCPk7jQGtMZb2Qa1YrKE3L8EpSEA",
  "key34": "3EnUwuQcwLgsd8KTUsaUvVf3Fy5egPbMeKecSdA1aEBYae1am5BTmpgGHTFyCe76sfRXyKfJZ6Qpt5hyHP4Fmifj",
  "key35": "2wG5FUYpBGovRUy8gZ3xeZMNXYj2vaTMbh5krhnMuLvjNnCzhmZeXduBixZs9G2kZPvK1ofmFWpoxu4FJAvbRZKe",
  "key36": "nSDP1E3Wd1r3aAB2zebfXEW3vY6BEvEsWtcyjUXztZ7fwfrgrTixN4RZ6GvnXM82qcH24MU1729SAo13RP6CH1y",
  "key37": "3zHSdackQ5KYicdUdH2bPDUVaxKgM5kLPL8knUVsVLPMst5b2KoKBA6L2fsASuv7wbwUbqV9LAhCMJCs1gAgJmdX",
  "key38": "2etH4S6rb5gpnJTU1f9ASThfA24QT7NotGW2dbfv6cJkAf2dGPEHsCXPDFqeJCC8cBTaLUEwTyoThhrrCwLTCU41",
  "key39": "3rPW9WfXLpTqrZHECKU89usyPNL1z8fou6U1Stgs7WpiTSKoPEmKPMYjEhEUMazBajJ9sSbgBZwbrZiNK3qeTo53",
  "key40": "qi6WJeCn2vmySESeypMskYSsM3xmUzFSUv2x9cWdtKtikg1utopNFgxtS6rXfDPN2HNs4HMjo2rxuHTz7k7XrRx",
  "key41": "59FMuqapse5jdyVCurs1ZJMTmoFqUHQqUmnmLREe7bcA7u7t6k8kCLzdcnqcVZGw2u5pmToEmsjT9MU6oz3Mtreq",
  "key42": "5DeYM8vcMtEj1XHz19UwstMvRn6wS27VzJqzvJt78yDHYrHPLKmf84F9PB67RCs4iBxUkmmGZeaKa2RqUvVWSpAr",
  "key43": "2rhfZMbXrbD2XWtAagxrDBiuQYgt53XKEDtCbjjRfukg6hN88tG3sT3LsC2pkKAzYCo4bySft5mJtSUDtEMAqHfk",
  "key44": "uXqKnYSkinAdSmC4WxYiZVesrZnG5LVSxrE3uA8GmUXTV9CPbpuK6V65fPQrtQj9L9EVuRscEpJhpgWHqpN4Wji",
  "key45": "2MQwBepMyPmjJYPRKKyN42fg2PwVukfP6E1xgk2Srmj67Vr9qYYXahuCsCPSAeq2pnFdbZRCmCg9vzLqLTVkrYkW",
  "key46": "nBa3o2rtUtsSzhTLGMG2EuhsGCmieSEuv7xdEmz7JJtJzkF2pEfU78qgD83HxfnmASs2sjUjXiEzferUvVJkDYQ",
  "key47": "5HNzhmLRoLXgdaW5pEQGp1gW456RkHLuzQ5QxX9BWpRWH4RgikpHkCbCydFbTB1smRzjx3FKQ7tbhfNbsTxrja2c",
  "key48": "2n9PSt4zVwH5psGyjEPfNmMRZpHMqwbzfQ1i9ecW9FCgM1je4KFn35VkpaAMDcHS3gVcoXK8V6vcrhMZ457hGmb2",
  "key49": "58SpTChXC2SFbW7rnnfrdSLx3SqYdqgymD3nBZyxLLsmB68fWEGu7tumtCSM63TLosn3gbC3zeiEGWYSGqaqY97h"
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
