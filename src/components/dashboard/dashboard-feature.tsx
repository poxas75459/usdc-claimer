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
    "pVFfYX42oU7tGFhNPEo6Wbo26DfsJiarPCYWLy2enMUpVJB9nLvnqiWRKud8gxeX3Erhrosx9fZZJDGp8X33ZW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22kNR33M4ZxCaqGAtR7WujxF92w3gG5T72oHeJKGnzP1xFJUz3Eg1WLq8j2yngz4Zt7hFymC3Ht32vFq2A68kDZK",
  "key1": "4WG52ZUR6m13A7YjhJaud7P6ao6dtgYKYgERCahFGjJEaEWf6CsjkeNkipGm8UEr9Np52DqMi7oEVhbQNBhJ1JLN",
  "key2": "2vRSwHE2g9Fau1S8X9GVrjRisnjP9X47YvbzaM6noZUb94j6eNfb3djvzwScxNWNb1NWPxZFiaQAde6sF4gx8KPh",
  "key3": "tkvAajMFPwG9zdjk63DPzfEsDnNpxWu9jJSXMfg5rwprqei2rL1SFa3nCMEsyCshBYtj7Noenwaj67RNjHbgZwy",
  "key4": "2zH425oHZnSrAhX8bRzuerv33vjyxzRUMMGe26xp3nsv9U9xGMiKkxS3P8rjTmCXi1RdMhNnyHr3TrPGnVnqQ3bW",
  "key5": "4WpyP5YuxrX995wFG3xMzM7zLSAYdQn4cJLmNyqCVjdAmQvdkf4Ng7Xb7AbMqsuvjRcYtjJEG3xF8h7n7dWkYhXQ",
  "key6": "5rXNakroL6AoKauTT86pbTbJA59WGgjJjNvJ7vBKZU8qYDoTPHfeKZceW64THDoHKzwBAFFgjFTKXg8mnU7RafBE",
  "key7": "2BbitU3AYZixrsE4VE2zMB5GuBNu7BZ9sUupTefMhbXaVaazogTYwggixz63CngW1xNp7rKJNahyqrZ4s1CSE7HV",
  "key8": "4avhZzvmDg8nwPx6h5EZWDrcNKvycBqb2Qv3rigSc4RDAUe8EGaBCrrJ7FHrUW3XD6NKEAxQRNkPiJx6Em646A5J",
  "key9": "3oKUD9YFddvDCRsyZW14ugoBSAFRQgQbtzvgrDefwPnPimPCxBC9PKJ4S4ox9AbY5A9ubhc74HqDSdxPeYvKnJYw",
  "key10": "5sP4dYA2cFeevYFPByBScm5K14aWqeCF33zzTuNz3LqXTa3AmdEKJvenw7Ei89CTM6KkTnJVUCF87q1HV2xPnPwg",
  "key11": "3hbZHpxgiAwoYZgxcGiUCgywBS25HhSwDTPVcvCaXZioy1P3dCDHPeMVyi1goVjyiZSJczeroTHY86jR4Twf9F4W",
  "key12": "3RLohQnd5sqiphwk7mDN9kCtMm4Q6QzG1LzjXBcPXLvTS66qDiF4VYa2tMF5tQvPbHTNNkSL1BWfdL9D28HZQj79",
  "key13": "3qCjsno8GbK2SHatGovfrpWrVJ24ns61qtgsXG4eWmTaVNjwmAW1unF4Ju5xKecL8e2yTFePod9XH4qG3H6ck4J4",
  "key14": "5k9EKtRcks8DSRVFTd1wjXawSX3ZpgfG3TYv19DGjmh2WxQbu1j7ZFsw9RSYyENQUYXmbQCcbUC92YN8iYUR7LJV",
  "key15": "5BFe7Gkzf49KqrX4DkxsVuawQsDYG2raN6uvB6sTPzVFZeELyBsRHEXeMRae2Rd8qCymuncx6cawruNbHTrQigU4",
  "key16": "4fz9dx2LBTnnuiS6khWtU2b3FVmB1VDgq7suN4kbge1ATdAEVWmQTsvvwXXpQsLkcGWsEgejwCZzUxFa2F8nBAzs",
  "key17": "5mMknQQEGRJ4YaBCEiahhgc3HdFac9WWGBChSue4eQV4usmMiLVUXVMk9bWbyH9inDHszFYKUrjVZUU4VHnvVC31",
  "key18": "2hjjSkxaRC7h8n8VR2vHvEnXd4moNaswNC5i8i4tZpFL9kCESXonH3fHad1xqJwsxoQcwVASjZHM2PXSyzZDgQP8",
  "key19": "49h4jS6bnt6xiPQfaBr5VCyWFfx8siSzHVJWC4BfN31QYRVwvX2dF4MDDxJbub8xm66YjAg27fumbxkMf3YZdxkE",
  "key20": "45d6QFQLjm1u5wU78twZMg15GJ4Qz7QAWSa2wbkU4UhWYY7vNRFGqkukssDKsNLdddro3txq4g5am6kpTMD9Tueb",
  "key21": "5dveWZjTFYgA9RmMuQMpebmaPeQosw5Sp1Tmfxb2YCscHQebZEvfDVJKSrtjjjxTJHGXNcCMyuiDSsnFu3BeRUhg",
  "key22": "3KKTxQ1oWpihCb2W4RDHpZ4rEBKAdSJauysT85trYkwVwww7YGS7vRTe8L4U2qDokB1cfRP483x3Z4xcPpCkidb",
  "key23": "4hV6ZEVAePs9KJdQC1VveXvxpv42WjdmnDJT9XY567JgHkjejMMcbdd7zakQurychmybNqUxEcke9ZCdvKfKf6pj",
  "key24": "3cAS74GzwsBLdreT5nYvhZXVyoPHZXBJnd81bSFRyQhZjm5ypm43F4jJdYcQidq8bGkVqBv6gAf75zPTaQLhnGbP",
  "key25": "n8HK3rXXGyHRQMUtoVkMaGfjkTq7CpkqCwYoM2rMV5guNsFQ3JR4VfvLY9vRxuWkDpPCfBTRCcKwi5wkA9pDK4z",
  "key26": "4dLdTqvRZaNrtKEWbYS67iPHifyAY41dqimt8ZgwzspMZDkWJQa3gR4MUXPay2XZ9zYETMTYERzQiSRC5ThVhoGQ",
  "key27": "5rSG65imjmTpn8ikAi1apDiiDUEVXiKJLZjH8pAJBWdeWFy1zCgr42kDt7WR6Xcxd3qqPmjPqh7YmgM76dmhz5KM",
  "key28": "2Aus6j69zB77eXcQ5iSPLT3zUa5RkYfRpmq7wgqcdSqghguNyvxMegho6JeHQdVqv4okLEMuQBHAiGsS4M1CdNCF",
  "key29": "22yAuADaDM4jjmZSNmxxFSiykJfY4SL3QbkQcAtRQhmvBKJMFaqgedVa1kFjGq6VcNY71oP1ZcYzvprCngp7R225",
  "key30": "4XjS1nEcBwsuRpQR4ncEtqXvXyZ5hjrhGWdzcK4zMTbN6ba1y7r9catPRa83tDca4jxCRqR33aBUiA9mzQyHpmW7",
  "key31": "4TSH5nZ9nFGwQjLVtD9AroNcqCnYtXGfKjtqs3Q5sj58P3VPwNdZ9xdXALAKpwuK4b1zoChnjaxsFQTp1752uGbC",
  "key32": "5uR6yeDxxvkCvWBGYkn24ziQ1xFkMHn25mBGgBtGn3zjhL1amPYt7v9W7noPVjxnyqX1rmyX3hLJjpMiH84gv5xU",
  "key33": "598PsKhmQmPdm3Pp3GkPhgp4dAX2j4dnKeHgwdGkd1Sng7PNYNQPFMQfMDGDPEW36yGYMrNQao3t9KBZzWE8Wbuz",
  "key34": "23NHHp1TfuY2Zwwaxum1cywn57cTJEHV89VHRti3cwgiV4M8noYEPQ5uNye8BD9nVkG3uocNdNTUrybze2Ef3V1A"
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
