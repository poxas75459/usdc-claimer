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
    "3EdJ8ZmRQPchQxRr9w7kw261RKrQ6Dm79dhbsfuXw6tDnGk8vFxSkm15p1Q1XXWxGFfP6XQN4KyX4U4s9FmvPkPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P4GGyhHz9FTMEH4VoocjvmcWEDT1qDoanXzb7ziYfWZcq9iMraU61iSsVCjXot67gDGA2pzDvj496Q7p2WiRQSn",
  "key1": "TxaF2DeDPDQCHGxJB5M811aFaEkodPe7cWdxkck9atbBRvTVrAetuY39drUAWMkQzzVCrRqMNo6c2vf92Zya9Qz",
  "key2": "5mYfWxPr7b58JvmXgyhdbEDcWFsAb5HqDV26j4ZhVqtB4KMfqz68NYQ15WbuC4KznoDtkc488PetZUhdkGDfmzN6",
  "key3": "4hvXqazHzaH6DnscZk9fFNA4gcAd69QbcFrP48tcBQKBh15iuDzNCSUft81nyoQkk7fbXBMCsDx1jTxvpWzvMh18",
  "key4": "NPrCj2K2TgsfY7sbmtxHk1Q5pMVAjkZC4ZzTtVgDSospNm2jHkXvgfZTnghEp5aZBVKG86EEqkvagChXaMnwxdc",
  "key5": "3WCuyT9oh5xzcx7Bnv1ibvUMHjw2HzZfa1X2Sw4ed2UStZr7KBn6B8XEPYXYBbCWwn6iXA7d3TW3NMENJLWRCzb4",
  "key6": "3e9vbKqUEmcTAYhwV3uiK165V3aXngtejqwBFAjt3gb7t91xh3YfrwEH3RceXc1foxY2tZatwZFzmcRhRtznZcP",
  "key7": "4iZ276LbikzqTmxU2rmLQuSE5Wm5gRCi8nK9BYx5ugPacLd8WfyS6z1ve7uUmWZs2Qi6JxsRr6wG6HzCwCc7zDbW",
  "key8": "3Sp47qrmjxKTQb2PM4h3Pu3z7UUMyri2d1MHArDW6zcmoJX7SbKsnhscnghHp9SX9wNQTyXytZ6k1WXBCU27YkUK",
  "key9": "2LvdPB9wSVtZLQCiePeqjHFhTLiYEp61H8P5Tbye2eZDn2EtNmLPJHY864LSJEo7hKZbuesHyA6YzJAJ2T4Tju1m",
  "key10": "3eTWnvhAB3v2ncZxNx7ePCZWsp2apuLJGwQmpT7hqNkU846U2svaPFKUfjTLpC8Bp1LKKEorraBTBqWetEG9CdZc",
  "key11": "FLYsXLWtcd6Xd1Lzga3jQRSPzpH8JZHFqP4cu9DtvCPTk3zAeMmft6ELNZEWiXEatvfbwkgkTDDKTCUKMmZUQTS",
  "key12": "2UEFAwdfmgpkRfBxqzcxSkoP1e1aJHBQVQ6wY8qnaHJxE4fAEwZ5cEQ1tBfiDtzUaTu1Rz5VtFmt4Ui4xmswo5Yp",
  "key13": "2MeDtLsB4tRR749VzckA3hj4dPm5en9noooCtcrxS54PEYyYhQC6JBEy1fQVghAXQbKADV2jCPYgBZfnNiUFMoCx",
  "key14": "4p3uikamun2R11L8n5bnafpLVGKyz1qFfy9NwiiLzkEyHipwRRdKGLrX2fdff9zcsSzCRj64DzwM4AYUWiatT83u",
  "key15": "2kmV935F8dsXNcmqyjsEMHd8wpLuwJ945khEM3eWrRhJC3rkYD7DPRUgXto9MPqjStxPBeMoporN6VRpiwNdJbiR",
  "key16": "aB9z7kzg6DPeS7MabqCr6SRLm1syJPCNHoRbcanvsjt2qPaH7t4n7qzhrKuVNfXMW7gtVbavxpMcqTZpWkXQ3QH",
  "key17": "4mVEwxHAYrSjgp8R7abWn3vg4ZLxUv625mK2hjNfZ2uKWn5zMeVP9rnzmd6FsY9t5QUXiYFuCJm8tbCQSKxxHZN3",
  "key18": "5DQHC6brTbAMQEMPyJ3AzLQaYEyRb9bxQTY3M2F3KYKbfCq6vfq6fQqmwf4Tt3kWuyKHG3BybZkuYu3UWbbRsgRw",
  "key19": "55kaVaDW4n2FLcQ25Kq4rdtPDEHqKzAuTDXWnZbY9R9geVaGi6DmD9Z8Dbcs7SHFtmak9JW8tdWQc96A8V1oBwSK",
  "key20": "3zpUQDGJiLEpqj7v31NfHsu1mfnvktZEmzRWTHX4VVwZshRqzExLt8bNAWviLfMezq5yTkG9Jr3ZGeXfGvaFWn9C",
  "key21": "5K46TpcRuXWX9Y4xqgEeXysShpVQCU3veumReioSuA7uunsXpcNvXhEB8ZX5YS5cJdUQAEGEPHmHKDrasKt8FVa2",
  "key22": "4Aj3aw7bT1vq5GDX1xgwBxoztyxbyMx2XJsdsyLkmEdHCgFD3Kg7DXugVifv8cHfhfgidtAhL2vbKzGZQvYG5gZk",
  "key23": "2A5dhh2WcHHPFCanvh3hcb22MPbipxdaxonQGLCiA1JtBeXWkPNFveDwWfgeKyaevnEPyBiCANxMx9EGQ3M84ib9",
  "key24": "478oBApQ2SgyNSUzQpFi4ztSwdVv4QYuzBQ7cCvRdLBnim5RvXMhkHFzBwRtL1zR2RHurMDxQCd3x5KsJ3r7wErU",
  "key25": "4DLwEbcRQN2qXuFe4q7wWiS2769Z4mjP6xjeApsnRthUUoi3rjSBrpLZGuHqsUXUVcqHzjzaY262e9EsbMtYC6uK",
  "key26": "3eFzu6GmFSxNpqP1VvemF92NQL73FR5bje35tRAjCZNVyrE7QW3GHFuGKBp8dzVcbyKjNdEUJdLWu1jmXK3gsHCG",
  "key27": "o8wCzjXc4QJcFGobsLwmVz5rwKLtrXBbJECTi2M1T4TYUEnXBbPvEkpysK7BBJYq5eSPku8covMBRwsW2UHH9F8",
  "key28": "427D5VJCa8C7gi6wxZQKVdo1dQxjvPjserDVBf9mcxVtHTKYKfGBE9rMz5JxHTqK5BT4Gjo57bV2MXvmq2jmQ8KD",
  "key29": "3ZcPfazKTChAzuQaBsdTwvC9ktiYfBmM3mcHPTUJiq1kgbAUtvUh7DVv99SNnzq9GD7tjKpiJFQ4wSLGPHS4r56m",
  "key30": "3ihBbHrcE4nfJicKqHjUfSgNgNg3VgmU4VCPF7ZQP74x35mNwuBmcXS7DxCedV66E1vkHTQ917PHVbLmPFUmFRvq",
  "key31": "3suFzGXCTvLTUsbpMdywiJkBxTGEWU2egqVVkKPS4cQDuhvjZdxX89mtVqSES3ig9FB7E2ExcEvL9Dge9noPsdxN",
  "key32": "4MYZ4zHxCuJ8CAEnLHAdYi1KUdaFJnaP2aWu7nmcxGh7QwNzyWWQf5qqKyBdbFHiKhHhhMyZSEE4C2d9srnwjdJF",
  "key33": "2P8zYetjDfP4UMobc7J37aLGXG5US4HdzJBFvUFnReZUAxWyR6DrauF9obpCSvQx39teMSm8qJGEDRnvX99EwtnU",
  "key34": "5nf3Bkd4WmBX73zNdJiS8DnYGT4AASY9a6636mhXhu94HLAvJBo9CVcighzvjWsZT27Y36eUc3kpzKZNjDYzY9WJ",
  "key35": "jTih9bmpnFQGtcPkyDNG4Znu15SKGDjLVet8eAZpycWaBWTx1jceFviAgk6Z6i3UUNUAMwDBMswuoMCot7wDrXk",
  "key36": "637MxnKTvby3jMiFWhPyy6xhxQj1h11CswWe7cYkBj1b2MjHKyWVPQ9mbV9jBq52X56X66gXfB5hVzPr4k2ctxJs",
  "key37": "2LFcqXqCZRF4zFt6KoB7M9QDQJnQWEhdZP3xcyL7mLqBaG6Ufh3zhQM3Y2BcME1pCH4XRxW3rdvhpdwGaYnnHi6G",
  "key38": "5qFTYAZDzgDZaskSjV5dzJRYv3tyuUhNgzacwtQQZ2jDqGtJGVzn3wGNTRT5fQws7Jz7bq6ZpStjHS5opLQdpjcJ",
  "key39": "5qaCWJpCjgZ3yBpD9RuZJ5259PBdfnsnnDXqXa5bmyV5DumHH6T6GiqNyejLoKxtvxFZ4GzYnDvraawsCDvrF7ng",
  "key40": "2v7xMpsdADyEr9nJnS49exazUyuMrStEPDBHsXTYkpQjinyG8ybM9aTFbSivonqGCMh1rK1Hc9ZM3QCmtiVSoX6G",
  "key41": "2svfGeSGpXZbCGsgzMm42NYndjHiStDWZiDEXnRFsg8PhpD4XTB8TaXpdZKdqAfoBDLjVFjXwPLVpo9FNHBJUR28",
  "key42": "oTMeC9K3oNAPWAXQrRNffbysj7UNnJZRxjn9g6qjsEhDSgSJguMvBaHCCojq4UwYTSLMwaNqB6rLNo2tQ4u7gCX",
  "key43": "4LXuf4ZSXpp6Uj4qmdxNg8Wh5hrF3wd8rVy8LUM3eoHLJASQYXsf5SwM3dxB41yq4jxcRjRxw4qd9dUU7y29X5Dt",
  "key44": "3CDSXRQvCoNrajbJori5ULfmT1AoErRaPr8H13seWdFxYVdUgREkkScDpnRWCSmfEGJ5AfQ8sPJDWtTXCvZ8oj9Y",
  "key45": "uzv1dEkxHKJeZ4uxawPyA4za1zjtuGL7GJZuhG7DqU9kLB4afC6kUgd1rZJLSWnWnTZLovbQBykJGFBCLNXaGM2",
  "key46": "4PZrSyG6Q6Sgz22RRdnbRTPgiTmgQixTnftCosVMd4hcCm1Q82pXjxpXbSTqtaxzrwTVSXJ4yYE8SAL5sSySDc2p"
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
