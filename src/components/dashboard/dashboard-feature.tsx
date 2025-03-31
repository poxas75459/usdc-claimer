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
    "4CVB9CeXoNPvHnSbTkXaF7wzaNHBdJcF37srvtRWfEwWkA6d1pZWFdaFXgDtwmHsqDr44DDKTQbYr9AaYADrpDmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xjPpcJUdWHg57siEt1pj42NqNfo8PB8NjeCejTvuhWiYTrVtVGvTZMMACTPaLEzAfMu53KQ7c4EmyXnHaPFTfNk",
  "key1": "3WUPDiFgR8UzNwXJUis4XHA3qeqc3Hp9meNbaUf77WsbdYJSm7Be39zMojjhRSPSK3NmGK4KUPb9c5L8kB29TBxb",
  "key2": "52b9LRqQBXw2WuvYkM3gupCfWCmMjEkrrreaRstBZL6JxtK7kys8Xq8npbbQajNKP5ft99MNY8FLPR9itBw8H9Zi",
  "key3": "3iPRJwQndK36xMeJzbE2B2Y9PCNQrgVQJRqr3VDVnTKGGVNBGq3G32uhAszHWQ3n9fHwsrYHyhfF1wh4BK8kGUbw",
  "key4": "3xBe3Xy6ft2PQnsAMk7E6Jcro3VCY9f1vwFqcvQon9N1uUdMsnJMWesAFPuBfusp5TjyKpCHftFC3PDyoSmRxSQn",
  "key5": "5T5X5EJCMrdHkwa8TdeNDhw57pVTrxXfRu3R1VdkxjfXCUyK6WR56uPbFVthahXJUUND2G65FbRJJYdRwpfqqcgt",
  "key6": "n7xv74ccMZK97xrZJyW5763DVGnFuu7pHzg56b8djqpD7yARvvvfWk52phHzCfmuxS5w1YacxMMMjHySBf6aMVd",
  "key7": "3fGrfqGL1n1U7D9muZPsG1CgWXQqZuQWtcSgy6QCXDG5JqZT1kPaGgcm4WqcHjhTJxzxsR5C5BZPfAWTZAnYi34F",
  "key8": "5vtFumPLGixjeqdjbxMLdjLqLZctvBqQvgdcQqgaCrcJfW4nARUQJd5YBG8kaJs7EPoiqZrCRQDs98nXgmDXHczZ",
  "key9": "48qEj3cea9CJiLJtdbWdYQLBFEWMvD24X7UyaCDcp4iXDJcRfo68ATbvRbRoVNnufaZEgKj8zKG3mYWeJWrJ15R5",
  "key10": "2ACLjcCRQGFGMWyzw7x8G3V9B4yogAnjimNEdLSkWmfA5y95m47GNAfSVtRDuadnfj9hwT3x762tPDjBgkm3EU8j",
  "key11": "3sfYD17JQgX6bhY1vaBVRC62eKHwsX9AQLRfi3XsheJADij7UhwE7tiQDsZNxSbV2grE9uxtprKeP9X54qUrDmSn",
  "key12": "3YYG5brfJnYEvQ2wAoWgDT9EJFmt2jvUVV6V5p7Wn1czhAKWutqVzFrmhWW2BcxaimSqU3CWi3RcDV2nJ3TjCK82",
  "key13": "4qeW9seEsh2G5dy5UKDtRx6Visj2YqRA6hdpGSkSaV3wbWR4TYZ8VwDNgxk8Erjksyuz5Krdshe2gngavuh3EeZj",
  "key14": "63Q7mXEUftrNfsdyejWQRSNFLWx9RNjw3QHifSJFJNaAGoMveUdKu9s3GwAQeUyULhSQSmQ8DsdLT1fNDB9oN6gW",
  "key15": "3C16CVLQcnWzYXnXB9z1JjqsnakekGRoHna1z8k2qvDL1oUX9T1FK9aXGfXKbL7du7vKbNrDC8dg3YW9LRnwBDms",
  "key16": "3sSbiLV3QZeJPeYfC4uBn7hjNLkfAnYnuZfQLP1oshmZK6QT8t3ZMuCS3m7qqf23FAVpX6A4XuP3PKL6UVaA3UDh",
  "key17": "21LSgAsUw5WuJayb3WY6zrE3M5CALEMksLCfq8ecefBoUAae8AHABd49Z922nwMB59phSGf939EkyGKXyYWSgcrz",
  "key18": "5AUNvj4XrfbFzE4NXEojn9swJsncCsTG662u1GFzdBeUmMn4zybXGnnbfMoLs9FA51RUdiXb4HBRnsxzyEk3yoSR",
  "key19": "4J5Au6jvz962gd2c7io5zXLMrhFNtgzyBJCBUkcayXaY3ishWmdvqFx92hSg7cgmvnRpFdLsNMJqjVVQ157DRbLa",
  "key20": "5ik6qGNRCySXA9jbuU9uLotAftZYKq3kDJ7GVbEEsc39yaLWtudamPh449XqRzAhFzqGfARgDb7LtPHb79w3u7LW",
  "key21": "4hnaJ9Gmo96A4KDYDDnPYGP1KqaxQVaJyycuAiUTHLSfn8XwdnH5xmcWgWkadgkTJRxKzLjjqa64Zdp2yR5BaKpU",
  "key22": "61VX2TWt2yav8SXkCC5C1uDC62bY7xsRtSRyGbtLPnHPpbkN6xyZ7cyVFRhqXqZSCF3EFUVKv862Dr2u1JFKQow",
  "key23": "2bqxaxitPNPjYN743LS5rh55mMgV6TjLMfiUnuYE7tjPEcCZJpF9KxkJRF2DFP2fu8nfn5FNQamnJiq4uJ6Jeb1q",
  "key24": "3XGueyE39FX98mcpampdSh3qPQWVBMmovfhFwrkMnqvaRdxVWyZLn7cJnDrepHXWGf9hnWAPUUrUAXZcLoijpF5L",
  "key25": "5DH4C4wCHnu7jN4F1LWeGNHmwgYZyMVf7raVPa4yGWZmo6MWbCGcKJkyGbvx3b1xi9vBiyEi4PE5vnwhRBhYQYr6",
  "key26": "44P6GrW8ruMncF2WkzSMwnWtAVEYwBsaULSc2Z2YvLEp6gVA2g53GoWd1XAnrACmwAadTzj8bkqdyRRNBtxSWqmH",
  "key27": "4XQjQz3sypyZLXFuphiKmb85tMxMAkp6ZDiDupRbdYRAMNUWguYK9zRY3iKeXFHeoPHpS52ruKDQ8XeBTGgDzSpK",
  "key28": "CViQXW5L718uYtRfuu4uKx1ML7tcMACGWcXXshsem3fsHaGvHmQop5mSgs3MLg4xX7Pm7DrM18gznqAYju3BhQr"
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
