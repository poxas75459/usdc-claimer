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
    "4K536koJa5XMCxCPYMLVQJ8YPQrAYjBdi6T1WSWAKURVFEiKqJHyWkHrCc5uxpHJhKPzhtgvSG1ivjRnAfdR669C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mX58YSpEwve4hJ1VimoUE9pFmed4Pvr69KXLLcaJPrFSjFGyCHsttMY16yJBKyzMqHGJp26oqNUjKyhekP5n7i1",
  "key1": "4hL8tBySCqoCbS4FSVXy8AvhDiZeBPMQqqaNAg7jCHUVdjANWFQ6NxXywS5NwBtxsokfdhQDSWZmy1LfXwKAnKM3",
  "key2": "5dV5vGVGE6euNfeUGnV3JewKcmiXwSVurLHdyUDyr7zHU1NysMYUbd4Pqdqqcaufv9uqE81t9mDUKKWJkGpkUA8Q",
  "key3": "2FFdFoarofs7oD6ka1SY6qjYmzZ39hhMWDfaTpryzXQt8EMse6tftHxaqhJsZvxbNhZ8nCdmU4UjXh55F5WH6uzd",
  "key4": "4b98DmPba7neReEyh3xPvV1KAkjTDiLMYpx7mfNPt9PeEuctcQv6dgLSmQP7A2PYGwsc47hY9MZ1wSJqaVSMbGqj",
  "key5": "4S1g7RyBmmw4TbDvm2tBfve3eUPKNWmSEGEobE4txXaM6vacMnpc5f77an5TfRirXppSxtvAtGPYy19EE3PcqA9m",
  "key6": "66wD5VpSjNZCjbA5ZDqY7XeEP1bG6fY11hppXnWiQb1spbF1LRh6hry4DbPWxPqCq6igF4JQmCLHdJBEqJuAP2i7",
  "key7": "53RNq8UjSjihP5E5FekbtfogqG82eBhKUDtisyEbcXq2JigsHXtSM4cTC741Wnfgk8HJqLxgNAihTFmgNGhiS9Zk",
  "key8": "MDtbQ3hHYBgHi8mf1SUq7ir8XckbJktZRLhrZ4T2pe96PpwiUmJsxhvmFoamgVuoxXW9m1RxkK9a4k4Ziu3V2Ki",
  "key9": "3LkFCjUWJk5Qfs1MdwX3BPoRkuaFAUyVMzh7aZRfRGzogb8rg8kGMCJqk6Vp4vX5XtHdohNUoBk8TKzHSruzfNMG",
  "key10": "3PCEF9oT9hpt6nRHyYbpuxb1Af6ppu4fTxTYoMUAp8Wb9NMMjyuCgDyEJ1TccAtqxkTaqhdQZcN7Rit2UWzgJiB7",
  "key11": "5tsQU3adcaiM5ZMgRPE5W81HyKwBSG7thNTUPFTSpHMThSTYUNFYkfojKYbgSUr18cTZNpj6WrTDy5VzxX5JHC7e",
  "key12": "3zsrpGAHJaHY5txrdi6wuTs2ciPnZqK4sVTeZrQ7ZML2UEFotuY4qfQEFzhmndPZvFPa8kS9CKsBstNavQAKnn2G",
  "key13": "446BxaEuCXbdXrAad1C3oPayj96aTmEgvPaBR57YicVyvnWBUr1udC3uPqCk5Tcduy68xX1TxBS7dKS8t3NfGbWR",
  "key14": "3nwtFFiaxaYkefGfNDtUbvJFnoZPEzd91ZM3j8Ls7qpzH2H1aKCkUTrwfKxnp9U3bTSHxsFoEofXETezAne1TDe5",
  "key15": "Hi56gM2yJK7NPTAnZdkQTJM6tM6rUYTF5apX6BPP4gQRynYoyVDqZ79JzdzPo7bu5mewrGd91FMu2zPzRPFMnyr",
  "key16": "3cDvxFh4iRoRG8sShVeZLFPHFi6dsDKCCUKHMq9Shrq8yHBDLs19xGL3CchvVMj2A83incisHgvCtr3TTTF4aWQJ",
  "key17": "33s1hp1nuKM3qmw4BXUnF3qcSzBgRHc4mx6RpGLVUqy9r1eZ9T4HanA3WkC1Pns4gGX8fScPHLPBV2NSjdyCe3BV",
  "key18": "2fv3RMVjs6A8FubFvHHpPtERc5hfgYdVsarb2sYmsfj1R5ij9HQcDe5S2XBAiPcwdLyBzbNiV9bJCX53qKjb2BQ5",
  "key19": "3QJxyL4Fs8EC3FTQtQj55kXPfYW5n5uzDtKxPtmvrvMcvacque5S8UPDzQguzeoKnKC1Y4u7NPGpkkddipA5KBWa",
  "key20": "5zkmYfGCHWeKw72uiMx3e26j8S48MfA5vd1kAanTnoaE633hsJmb2pZhT8LAwrTBqgL7im4aQEtAjXf2YHoXvW9Q",
  "key21": "2C1piKRXMFQgcZEpwFNJqHGuknH2r7JhDVHd1Mbo38cRaVv73RDmQpjCCfyivHHKnQNCCypo2VWkG94aguXY828L",
  "key22": "4ZeHXCwSXQjE17HgX8SXP596fs2kDkr3fEc9pMuL5pK6SttqgUKPghCkpKj2zcfds5RUH2ZyitaoR3tuVZdwHEnz",
  "key23": "44XWwP2GeAczrcbJgzrM2LQbAH6KGJZr8CSPjAFprbDFLBig1XRqRDo7wai98iZqtn8QXtyeYrVU6f8QsYv2D7B9",
  "key24": "4pqVZdkMSrUskoUVj1bFC6GmduLppeNE9CzdJnMvC5nD1wJFV2DpcdyPCXofM1cEZn14yfnaNTHHCmJwkFEbZup8",
  "key25": "5dHNVFhyk4xcP9yQ7Y6nxmdAFGJbxW8LKEQV2ttobenxmVuDSR6UrUoTPMjGtzc2hoQng7jBij4rAfEPghkzVDHQ",
  "key26": "2ji6PstWrqZHcMYrw8Vi5UbPfa1gMLqd1Yx3oSetcD9dCuY66F8qREgrYZrwYGhLtnC4XEH71S6wgp57iBMtN9Lz",
  "key27": "2oae3tgqPVTqxWeLLmHVMjG6FmHZN3U2NqGwxxu2joKw6NZ44TvNWP5TZx6ht1QFqUjEiZ3oTpYxnwY4rTuCT1zg",
  "key28": "uVSWPiNMhtVuFRATceCP54t56TVziMuf2hjvbXmV7e76CZuWFyAoRiyHW9qB9Gy6pe7B1r9LrZaMowzLJCZuDTZ",
  "key29": "2yg8hyDcVt59rzjfGqeNBamV98oQR6domhcHpQHgKQ3BVjHJC4vC8C1fG7Dgxj2gQms3SXi6WKe6gZEttQAQGMDF",
  "key30": "P8dfS6Tik2h6KARxynWX7zpyRMkfbgJ2a5aMPuURDcx6fspCGf9PM6hAoCR8D2Pvvx4jwXvTjqXNqWuz8gvhvuN",
  "key31": "Hgzpp5YN3SWbuRUNwWxd27zNVCrDori2UkqUZkdVgxw2fQGt5JgQxpV3bMEndX8KMKecYEkQ5z47nt5swpMhg8F",
  "key32": "2HL7h4qjGcUUx2CktwuKkNQawuyr1AdVPfTsvrGAWh3jjzYYNUTvjDHndnZYNzszGDm4Vtojb9vowaJK2xbbAMMc",
  "key33": "45MSvytZ8kjTM17SFDjFPVg6V5ZYXZiTCGz2wwZB8FL6TVAL31yejZPHhBLZGcRrDrUYkV1nPDGnHjff7iu9s2Kp",
  "key34": "Dparbp9tNAKNC4Cx2E1GaZgiVgVFPqw1T6M2NKmYUSae8im42XFr9ZmwPj5dhLrgqa7AXJxZLJPQrx3rYA9uXZt",
  "key35": "v2amc3q6GCgZuayP2ng3BrMsuHM35pQAnvEDEzyb1o6yugH8zZqEdbxn1rEW5UvCteG6oYkpQwFBo2U411hCN9k",
  "key36": "5eQh52wjKeM7XY8qp5JdTVvvpUBSjfbRgbCgNAvy6f2wCZdYcbeVWs9Csohf2whLyacH9aCgeiSBBE5G7fBeJGtt",
  "key37": "2po25TEaf9LDHiWprUq5X8ryVVJXhPU9PD5nqM2ALGcieJx4dUbKb5Fy6FvSEuC4TiiyJ3mKeYnKEp8ExSz2Y68q"
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
