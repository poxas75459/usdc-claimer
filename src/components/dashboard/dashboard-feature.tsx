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
    "5yxZiQGRz2jPpTZXbaSbnxm2SK7JWWPho4GknqHPn4WghkZkynmcFii4zZaENN9Y5n3GVcvBqfRHdbK7UU1CAPn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ceFVN4b2ZRnZUhbaAtcf4yz4WbY5nxu55TjKcpqpWAyT9QBzoNeHH3zD9E2kM6mdfjcbhgzmqg6KEFjTzzaNzqP",
  "key1": "2WBfzWnwaXbc78mUcv2fkmQy4oEjjms4ZUoJTz6WTAndPu2JxVcFvoohwMwc56CJNGJ9bLQJyRoCtxqrRxApQcnz",
  "key2": "43AGPvVhfEvdMNVD2otpdPExA9zCeF9RBus4KZ3Nz5JtFRhMMNmugfpGTHrURXy49mEXbUWvcbdDz131RpUF3vsG",
  "key3": "5ZGqWSsDqBvnFGXUs9DuZqBfEcpPhSpFqQbtQsZP5kgKe14rAPWof1fnLCR8VneLoxTX7KmstdMdfVRxZwFDBLVZ",
  "key4": "3p6JLyz4tuTcMKe2A1xk88AtMr5YVwqW4zcdJDEWCLvA5Kv1BvjwvSZjHk3yJD9cQNFQyiUwQsKBC7K757ohB64U",
  "key5": "2nTixsTJLYLYMCEFcpbyMEdgDiLLNMmzwtsdvLHvdtKGTjbR3aRzZkX6fd8uvhrQbHC2fE2gQxcHw33k8i6oF4aY",
  "key6": "wKrZdTTs7ELBube3aSfBfUikNG6E4voL1EDCQKG3qB1iVmPWm7raErXmEvHeJMB6jA6sFKS4voooUDRRcMNtzRC",
  "key7": "3FBhay65CnRhgYNN8mLPLSUSEvFncFX47xU9CZx6ySijkKSvXGabqfceMpEQ8YUSNfAMqcCaFzQEvuSmLGCisX3v",
  "key8": "3x8CxymYRuwVweDbW1fmuSTL4ZNYAPHsLHqGAUoHPfCEweCSwociscNwjoN2ycRDtwYSQMzQSYWYGYo5nipDj1AL",
  "key9": "3VFMbpwi5VvaqR7PBTxgUDNvb5E4ZpRLFPRTf4MPmhBi4hkzzQwmqDjtNYJG5Hrfq8TwPvWtwzBRHiymgQ3M1VW7",
  "key10": "2BEiMLpPMaSSknZZyVvhyjVke87u4UREetXqgnGyQuNqQugbkK9gvKRSKs9zkUfhhQPopCvFuLH7FwcCvFcc7i77",
  "key11": "4V6L6DPSJfyHNUKpBU8NmmxgLRMh6ZUzQsqWdH1EJmQ9PHkzjyLk7hvexMdurmwbcwJg75CmMNHgFka6AKdmUghJ",
  "key12": "3akhZpDVCkqEQUsJzrNcWEXWif9Di6QgQ8GmAtTbaUgQBUoKEUiWGgVZGS8Drw6Wu8DgYzsqqzeWp3QgaDvMMXYt",
  "key13": "5MPbVYvuca4ttPCYoQYwvFLbcUtmTx9r2vcZQhoexpLT9FDT9AEoVGrNsBGAgPbyi6byUvCBBRdu9XGSz4Y5o2FT",
  "key14": "21T6RmngBbUQr6AGRETRSTh2HzckYGexBYWKior1BdaVUR2MJo5P2of6bZ6FVsz3mSTFhpLgEycnVuJYWQFqDHCv",
  "key15": "qC64oGHHW4PycXdYCmceyrFs18KZxAxEypkRnXBb14LzJCD2XumhnBdLtXYTKn6yW6e2fMzfHGGRPtHdgcnPHyy",
  "key16": "3A577qxUeNzNNStLhzDVFPacRz1FHG2R1BfMeY4Cx1kwxyPoTiKZGPgf9Fke7VzBVtfbzJ8qTMQe4hEDJwL4LYL",
  "key17": "5vyWrJ9vgdNrqYdBAP4qQDv7m3uEyHzYVXTpT9TLwY161eKtE8eKd76FMPdcXvNCek45cnLNFeoALzPNG45fknhZ",
  "key18": "53EVYPNWxTa8saVLB5F1QnYTA2XHxqFvV1V7LMtw26qhXfqzvGzQHgi5nTm3YR9yjzw5W15LxLqEn4QC4Lk9qvW1",
  "key19": "5BPtnJYSYRRQ1BKMc1u7Vnj4oSBSm2oiNdDJRywu23SMd4eLXWXaCXFECjM6AGpSnYhFWTDECr3zvyhdZWc8WwSv",
  "key20": "34AuFbWWo6m6UQazSW6s3KWjbBfenn9nTad4ZRVuUusL2iqHR5yBGgY7zmxo3UfBrDTBnzMoPZF6pddRKsuDZcNM",
  "key21": "2tsDUK6sSZbvU8mC63rp7RjtSHUwXyearVP8Rm1JeWBrbtbghJiQjbPdQpktjsibp2yb5QMXK2MFhQuRGZeLeEvV",
  "key22": "mcU9CuRwje1F2Sujf1iV5Tj4rMTQmVw7Mpe7hBNPBapZNTkkuJ1PsAsYqzbsZv62rEpA8Nkj2VH8b7AUwehrc2u",
  "key23": "5qgefD4b2E2bKZnHwFg8CsM3SnaJg7HqP7nARpHZjjGLR7txPXL2qgUZRHzP248v6KxgPvtbDFwdudLa7CmCmKog",
  "key24": "4aRmPJL4FwxKHfVJjnyoYNuU2Jefr5qW5X3fZwEK1u5spDZvzd1Ev91nU91NiBQ9YxjwNcYadkcgdVzhVnYK6fJy",
  "key25": "2GA9ryL8szEN1MBtvxB6egQC8p73oCvr7Mc8cokBtgciJ7Hg32uMKFiA3KhW2zEyFDyBJzpVR1KzvL6SSryCgJP",
  "key26": "2jdYYAxTTVLdd4WDr1tbwARqsCpcTLEUBNCnE7ChcYTycMhcMFA8Qg9TbtwH8PJwMnBnsV745HTrCYjPV7kdQxWF",
  "key27": "3mArLBK2M85UwdQ7t1hKVNivzD7H3mtRcSmMg2v1aSMUDKAHaKjekcGccjf92uS57vhTAFhpNpNedkSHuadFUogZ",
  "key28": "B3JFNeYVmYgmC2xwtoV4z7tC9fpoFLDfTQJC1uy88RDy53y8MGRdxDvmRYFv9vjY5V5bDNtEQ1h5tvVYCZq2EpS",
  "key29": "4UcyRbtXYSRh8vppjVtAMHJo5MYSfdcUjahTqZbj8WRhKo7fTumuFP798F451Yv7smNEGASWegvyZWHXc4DDRugk",
  "key30": "5mPmcda4Ft6zZCs6MqqCJtzF56yWC5doLmawgbzXLHFLSFSLnFMacrGbaJizxiVNjN8hWMMxhcZX36rrPzF8cdx3",
  "key31": "pbB2ojP2kNyormcmifXrzFkH15i2utBStL9ta9gMPsL8yrMotM7YwzNHHthx8R8soKij6BwTZrVJWtY18r7Rype",
  "key32": "3GWPXfTfd7QcX99zKidBQTr2uzm4bsjFeBy9TzsZV3gq5Yqza77wng71CM9JYMhfs5xC3tdorZtzv9FdsuUxSB6u",
  "key33": "4pEXREUjRmipkeCehzDGpYik5UQmT8K8qRRkK8Mosu8ao5VTkqDPP8xUjae7mRUXHk6ChQ8kXdKZycp4pGTNchyt",
  "key34": "4urunsu6hwvTNvhyB9352ENJwYe7EKB1dyuv7YphiK5AbSMDAquV1zWYiZRePgr88yJ23LSGLLDsebKpEF6Qt8qA"
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
