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
    "2ur5SQjfUSnbQEacXCjdS1UCGZctVhSdRnmmfDGV1xXBMJas2bDL6N9Z7h33b4xYwiZXmsRBmnyoffX2QpAaxsu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P9J3ay2EAJJ1PBawHe6bQewVGoidQawCgydztvJqy5aj8PWWKXthP5t53Dmapmid3UZ3HudkSj9B3TiYyGYV9F2",
  "key1": "56mA4fXaJMX4tDUsPSFdrntYAxK6da5EbJvCskXPE6fp84WrioBWKbkppsGXTawPXyVvpawycT22oYAW8pNUjUP7",
  "key2": "Lkw2bTwZaUqMBmZ5JAqqyj65i5kbrDrw3jBTo4gptoaPrMzg5BjoxvkhRx78Hx3wr8cCSmhVRwfcdGA8v2e7izq",
  "key3": "578RSybFwKmbvxE1ZBFsHkvVqjRRc8KMMDLPdFpK35H1PTejXCdtbUyBLHYQpSeNDXe8L7YzxJwJwMbWT8v8KNAk",
  "key4": "3LQuBNvePsh696SzGpTNtGqqx5FvJutJJHP2sJw9MbXEChHn5HLBPcQMzRqqjXAZjinUxHHD2p2SS2MBsyzsoHGq",
  "key5": "3V9Mxh5vzpKjGUbLdMDqQUaXD4JjJedC4pzXNzHzkTDSZkGNSVKMxjhhMVoTjt9t4xdY96PNHcKBn9wfLCA7Dmso",
  "key6": "2bP185aMw9XEf1ENjrC7pm8vejWrnaPKmCN8KnxNaj7iLJzQ7EoNfZ3hSoeYPxnGWGHmPbpyea6i1TU1nspBKrRC",
  "key7": "2npBGz9Qp18JvDi81r7KcxWpkb3itTfbDgdxJxCunZFFUH4YJMGFppkCpqruNMP9swxJDzAi8uCF4DJk4TBCZPFM",
  "key8": "2Dma8PsixrsAeLKHwyWqvCaLQDKjkrjdSVATPR3mDWQSMXi1rXt4ojtXKLxmipg3apF9C1ctj6Y5DRsxLU1kZzAc",
  "key9": "FF87gNS8KTgA31GTyTxsU4n4E5xMk8ntbbAgsSRUzozn8r23E3kwSvQvGPFLbk8uiRwvFHchfwwQw95LAwhyLC3",
  "key10": "3UyUU1KabnD5EFWXJ64kypaqomzDBRWae7BZzfLGMRFaB2cyRw2Wj4uSWcg5h1pBXSi1m9AmgDAcGacYkC6Rk5ZN",
  "key11": "4tyR5hn6TRKrJwYDTpdF32SegfDdaZy66DKbrzawkakeT8x531xwP1AFobtLo6nkpdMxuH4Wu6GNYVWZnTSu8UkG",
  "key12": "3D2psQNcPxvYNHsTMRVoDC469nXRxwMChTLn2RHQZgcYC1LfihWqnFmhSoAcHnror8NZ1Jw5ZN3T1hsptK8gEp6G",
  "key13": "2Yagbvz14QbqTFNQhfQACnrCMFmkDVNaFWbCs45gLMRZ2m4jiNJbCSUuTxdjBLmqF4AfZCwwEq2X9qUG1Pahwy5E",
  "key14": "TqNNeGTismZfbR3aHvnU7CRgnEtHnY9RMSjgn4NxHsXN9C7GHdv72TkWKJPW895GN1Cat4chZctqHYBVg3GApvx",
  "key15": "LqeKZHhH7UH5g4xfxfw8Xrqv4wTAxtBqM7Y7WfU8VP2gyRN2cZi2j6xiDbpUSbgGWSg85ukGjz2AKai9bqUJSf1",
  "key16": "5J6EV24CxgSuhRCcqaNiQ1D2CK81Z2GYVQquR7WqCYhGsrHTmDhbPCi2WHqstTm9LjPciqAUdgFLu4zE4yMAgPt8",
  "key17": "uoaSwokMququGf6APYt3FESsLp8Ed1749ha33FJHWtXeowqHpLhFuFsfnwUvTyjCWUCd5x6g7NeE9VAUA5GqbU5",
  "key18": "25uVzsWhm5bsYbsurdK7i5ktjU4ENRogYaATPDFEqyuRRDRUxPX1Wic8q8Xrs4oyFL3XZNeZjY2Tixx9pJGKc7qS",
  "key19": "3pjyBbyG2ri4gj9GcUin5DUDd4DJNxjtudiCPSPjoo8AbJP5q8LR9Pd8zo6wJU9nZ2GAvKLt3TMSSJ5PzZ9ZCMuQ",
  "key20": "4iBW8yXuScSdqHbdnfySw2t1KUcAZTgWXNwSy3ay9ipH9FDc9EYbbeWuxHNgB1fqid7K2zf518Uezop5sDQfiLu3",
  "key21": "5ersBSrXU7bnPRNzQGUq9q6EwKdkEhzjC5gHdGnPTnwUKwmJV9mLubdfDjS21t3Lk2Gazc7b52VabWEGDLuyXu6o",
  "key22": "2JM9h7ejAh2xscytPST7x1yHatNBt4FhkFpYHSwEWacqDfYm9Y8rX6NMKRhW9iGq9ZmoCKZaWnRFjnBtvkNSffnz",
  "key23": "j2iWFP9YVVVW9sciLGaTFcFiQKLwuKhxUa9Py5fr1usZbRVTkSk2L5qa92QuzyaK6XcFn1gkPUt4AWQS73QDkWW",
  "key24": "38fd6mJR2AxeaF5cMBaHwk3xRnH5FzFUjqncd7nKR4YPKg7S5vPGvCkYj5XvFwXhxJPFbti6d1HX45qYH4un2RFf",
  "key25": "x8QpsiYgsdATjpVpH3ZSFsf55xYq7KqRYaX9wMomAF1EwyRVXF2U6rUvB3aLZYkWW2HCVdyjPG4jSt4U7sWqR1i",
  "key26": "PVWrV4Tkmk9S8dvpEZ7NxmJYtCN94V2Gb4N8sATi36DiHEfydgQ9qvddAut7KK6xGAkzxedWTdtkrHQ35MVn5kV",
  "key27": "3iAEPF35YE6F3MCiXqvRWjRhpGtJjihopkMmpySJ7scfdVU36jpRXe6Yk3Rc6MRmscRwqp3PWvt1pjFtU3p75r35"
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
