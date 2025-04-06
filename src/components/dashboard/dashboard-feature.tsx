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
    "4KXew6dHTtxwm3xMtP39EXnPQYpqs4Z9F3byzDkkM67NuoPbDyHEtUpSdsv5uhPRRiEBpzT8APHiE1ahiZa9LMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZAbcQkvXe5NxjNLNdybTa8yct5UBF6jEDAp3ERoVLeZH7Cv1zgcwDaqf7dp6gntKUrAFbuW81Qk4124t4JWevBz",
  "key1": "3Sa2QBsw9dXMC6ru9PiwfRbX7r3ibNCDELs5fHGzpoTyb7aCSQJaDfMDT22HkVAAfMSAtNBY9nCVTKPo83gcJvL5",
  "key2": "3RoVC5F3id9es223ge9Ym5nwFGJR1kAcpckwNN9i8pcX2UMD9G6niAki8wYc5DTpNoeoiPqnMgFhaSejSXzFc9QZ",
  "key3": "2RzYhHb3xXwmMeNm7fmvzQGvvyryb3KhFYYQ2Zqc7bbqSs5djUiFjjQQ4NNvNZHu8rGLXpTdBhFuiuRX6CHLRw6B",
  "key4": "6EumJSZJ5GSZkppQhwUTGNamLEZpG47JbcVi2wThPDMNjMsLtKa8BFV7bvK9evSEjSdFPLCeVAAx69HVxVSKJQF",
  "key5": "5nj39rzjHWSAmk9C446fnef43y9hfxAA1gxXnCvkDtmhb1Yb27oAoujyyqhLgLy1KhopTWpWLT5cxitwwo4asVZP",
  "key6": "5Vgep5WgxfgTFSNvar3D8xwz85qFaJoNxvprYTCRuej3ypbedPn6CxakhQvECT6hMgyStB8gMJ7vmYtvyMZPajzh",
  "key7": "648VBga4xgxWDFDviqAsamaXp2XHYb2Vd6ot8c4GX7iXDiDxPPLJ1yKky3E3DT5oSXp7KBqajdWdiCdkD8VbfQHS",
  "key8": "SZ5k8gBZNUku8K2eXJ4cfv4k6guJRrcdJ1kumtFKzLswuG845jAYd35sDwVW5NX5NrLcm9cScRdHZtE363fj53T",
  "key9": "5issbQLu7q3jnPF3ifiQJSkucAJusRtvR2ehDc5ovae7SnogFKMLskEsHGEMo6QRsW5NSYCzGMRx6rBRU9dhL8Uz",
  "key10": "6cXcqrNBiJAUZ1yefUyaz5nPqpeCNnnga8A6jXsuTvp9RuPwsULXoLPXBvbUymAXLLfyf42ayv7RFRszX4uSYFc",
  "key11": "51K6yYFA5NK2ctdwUiiapNE85iimWyAmvwnY4oCWnAMyo5ohP92c5LHn1eMYj5mxRu6WqtPb1Mffbe5sjC6kAKG1",
  "key12": "4xZxqtc1KUu7yykjbUVY193UL4oizafntYL3JLq3xYgZJwx5EJaJmHWL3BjUBU4iuTTHSGdZLTRXEoZFuz7pcgzS",
  "key13": "rYsCBpF1SJo5QgBUes6v1Wonhq88B49unrLBaG5eG3wHfGkCJRxZ5PpWcsPGvP7e8rG6mJUFdzdutTDzT6KeNt5",
  "key14": "5meRzbPGWtqdTFEBwACx7DW8hegkJREtVnPryX8mpKon87gdZSHx7hFLhDv7raQMDJQqX8ptNqmqXracjeqbmuQc",
  "key15": "5Wa9wXRfrvgpAeRPJHbY4T2YNd8UQB8dkaCW9hoXcnYttLw6cra6pkt6uwXHCWUSCXfPYqeU4RgwRqYHaKvZMfxW",
  "key16": "3i2HPvYHw9L8qRmktRLDgH7knH1AYPXgCbKdXxv3qA1Y46QnZS5P3BN2pvA3HYKM5ATRPDSdAePpYu4NroTM4Q7P",
  "key17": "4sLc91Aguvxst5QCrxXWFzKNYbiy4PcV97TjtrhwJJQCVuAapKLJf3jLys9r4YtsKAopJiabwFD83xG8yirkLg1c",
  "key18": "2sedFgEDcQcZExAQAEfTU8vdAnRz9onDDhdpoGCjrtMEtkzEVbumHHeHRT64D7kZJFNbpFDn89NGrEoWeP8jKzjn",
  "key19": "2MAQsCmCyPUtABQfjZ9DJrHtCuDQ8wtGf6j9edVo14fFMbojLAMVnvfPH3Wi9Dqfpcg1tRAX6cm9ogwqmwYbmJik",
  "key20": "4dQAoeMWfyJ3NK5HEqbaMCrhuM22s6BJcPJC8jnvve288aoq2s8tvEUJsUTCEdJHfqMPqhSsQGUKMyhi6HHS3yYB",
  "key21": "2maM3BzQsbWGgDG4J5BvK6oP4uJcwK2SnevQPZwsTFszDQZ3dSrqSbA4HPHEvkoLKinwHQ4fFErf8gmuUWCZJmmt",
  "key22": "4LxMbFdJpff5C74cje3m11tjkv6CRsfgCou6QTANb7bj2Q4DR9ci9LimzJMBHwTFro8o721NEkGL6Zx32ksaM6Bh",
  "key23": "3x5wxb8ip6fKhy9NPh6ZhQUurUafecF2wgTi8xab2WKDbEcs4HiT6euXWdR1GguZKLy5dybgpuhbRnVf7NqkvGX7",
  "key24": "42uvfdZ58t5BRHhB6WrguVRBACh6EURk3AQZck75g6AB4YHKuXJMeadwJCbE8hkGohhEXnDS2NwrkC72DPRtaaa",
  "key25": "TNznnbVzhec98bXzZHbvKKZygrV8117VDowv2pm9yHFvKNR6MqwvRFCamxA4FsGFuig1Lpcf2XMKeqhRe7VNmKQ",
  "key26": "55cF8ma4KjraHKbRHuj6k84c3Pt42wVVN8xGkAG3xG3Y1qXMphufyNNfgeunppXGnAehVMJK68crpZa3TLhKvtch",
  "key27": "5uC3T2n7toX1kq6XcLJG99nT5Q1u1HYA3KapMqnGG3gGDbzY9EeGs3uZvXSAidG1GwszwBjS5usnZVahPwzE6fJE",
  "key28": "4oPb7aNaVz97g37A8YTHHBk4oawbTE4gdrzyZMcCqSWWDTzw7ZME34uUxjyU9PQNv1Huqz5WwNs3BLCbEerYcXp3",
  "key29": "2YEGhRffWJqG2DvAw4VeSpfbie7m8pFLs2wAJM9VryX36BmkHzdCLZiW46Bmiqv3J84u8p1iTWrWiVrwBV5drkq4",
  "key30": "2KbqhCgHy59D3k5WWFQBz9fRAN4kDu7SGrQkHQVruy6xNkxdLqxwyTtKggZhwyeN2EzpptRFmoFgeSPqZEJZKWzt",
  "key31": "CEVXbFhPHGrpdhKLwie6jJaaNJvVqMotxiBR7UnzE2VpSwqwCSpZG5vqqjqUGeBb3FCziBfSqVf2D2pW3otYWQs",
  "key32": "4nSrq9hf5k6v7QXA4gKhJvHJMwS3TwhjEKcJ8CdhqwP913MjGwDvrc7A8AmHUPxaqK8SFdnSkY8d1feWf4BRLLnc",
  "key33": "2d55KeJMU8UtpfefaLuJiaK5Hy4ySXEeLYUBcCDMLCwYAKrosteJw27FGxUNquirziQs9JQGCBp8pSWHRMCARMpx",
  "key34": "5xvDJ3GVXLyKrvirsr6wfCMkYFQxvudnzSK8YQKYgNG5mQHqYPbBZHHPzpxZCgzpRpnKnh8ZVcoRe1hHqoF7CmaQ",
  "key35": "24Q3R4ytbyA1yAm8B7Bfm4wTELLKo26LPRoWdPRDi6d4b3zzAVGf5qWdnkMtBhq1A8j9aUyGDEbKUoWtdPeEZnKo",
  "key36": "2hnuJwMJCM7SL3mKjnHDS2e6AcVP8bwuAX3UmQidiBkVc9eevThUryMEsh2HY6Nm4PR2hsY6p9hyNceX96KqBjgH"
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
