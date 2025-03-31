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
    "LBWwFyEqX2rR2Uz4JAqfVXRkqAhSuapbur5tjogF71WG854GLoE2EaM8JYHK4CA2n1qX3sbUNX7TbLNRM9YUEJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o91aBc5rZYg2X8zGnYLSJTZuQ3xdgXygPpE37TEBVYsk6s3ZUUKSt7aXFMpU599NCUkyuhVut9FYq3gZhsuewZq",
  "key1": "31x6QMowe3qWxqSPQdeJSFAVd3D9FebFhBxMbyMoXANLtnK5jRCB2ewrdPUW2rB9J8Zc7FbsmwGRYSdrkQBeTeak",
  "key2": "38qERKNZuFKV1K2viPxVGhUBXwkMT5CrotmhvMcECCHseEcVYtg51PuwBZnf2gvRRAGQgjTN2i69jwGbgH6Rt9e9",
  "key3": "DiDj281WbQqrU92iGT4qcx2cACLHRcdWFYUhPR4HqK7E58NDu3JQsbCNR3egBJeZJUiFp7RTaXu8nwiVSLecQQG",
  "key4": "3LD36D3TWWJHJAQsryTxCNaMZXsowFWCzk2Zbrd3b2xGRAKWubBiCsRSCyBCK47WHMsBhTi9hrxoHwAQWu6ffkt",
  "key5": "34dUeDBKYMLxiFojCiq7g7rdh2aQtbbFwZTfCGBnTsRaUSAUtfFp59Pd2xPtcNu1UuiiPXN5BeAR3TywCLV9tN3s",
  "key6": "87vyVe9J6mUkarTvRCkgLs6Zu9fvEQ1vV53ff5N74bDAuhS8ZTnkCi6CP32RqWoS6P6tsRPFF2HwzYB3nKBBwY7",
  "key7": "4crfbnHntmM4M5sZ2tpuVXagG9NpzaSET2mLCx7i53yMqjZVPTXAeakbFTyCYmuk4pWhpjsiBMjBJVEaG6c3KL4X",
  "key8": "4nmk97vjZC3fanuNie1zrxpW8HHr79xkkrxRrWxPX62pBaMU8U6SWtRca91Gqn5hfzooqjn813Pp5ShhkAESPVtE",
  "key9": "5sjTSNCg4V6ectxrEPo1vTZZQuG7X7N4aJh21Bd5kw7d9CZ3DYJ6HZDV3koyA7aaHwCHSQjmV8MNWFSekjzugWG6",
  "key10": "2yATqogv1iM9RcBmJX3iToSwnLMATfNdJVpX5pPiVN7nqkS5MTyheUgqEDMZfNjpYvvEhKib9d8rRNrkfzCUSkKU",
  "key11": "x4kPEAsFYZ5jCj1QwNVXpwFLNVTAMbKP5dG8goieSuJe9zT2fn8GJMgVorbb6XqvU4igyfsibTM7ko9h9LepuBw",
  "key12": "2nPdryVPxAUFz3MD48g9U6HPvEzaZKMbJPdnYwhxFXaxtXnATTPjD39a83Q3fx3BVjzy2w6NQeHxhWNrLJ1iJdkN",
  "key13": "23ux4QDUs1kSsmAapvdEHakBcxPpjyYnCEQ13mVumbNsEZJtqzgUcDftK7775JLB3Qs6qtbPXFZBdCaaRKKkpLMx",
  "key14": "4bdubmaRQiZmKHLi8Ysqv6Mm7ePtwYEiXSezo3gN7QnuokcHfqx5Y1oKBd9MTm6M5y775T6bKZbtzPV4tksxHBgY",
  "key15": "4yM4BbdJirxLw1dCsjtBQ4nUUAbxkLybdBUx2MeV5KedemPPQR4nyLhHGoQsNdALHuCFYM5jBYhz6KAhGRStgPio",
  "key16": "3BAnpgU5PWv9jYPQuJKm2E1FussKCJheXXVueoqzCorFj3b9i7zSrQwXPb6VBJozqbt6H7KfLMVvunwFPZXMgjM8",
  "key17": "iNGgiKHL3QVdYP1LPNMMK9SE3TGizqJqtscXo2L8rZoL32iQRPHAZULTxDpWjZ5GPjXCcLLe7NGj2dwBGhhYZ6H",
  "key18": "4duTcoCNx3WMDRRW3fqfvpdiFZuQ6FdcEEfN8odqEyD1KqFBhZzzLMqdJpuZAMj3RdKvjNK8BFekVr7Zw4TnworU",
  "key19": "3ZQKGZz1KWC3tRaQ6sFGS96f3afWeHuiou7Fvg8nvzBfjaqXyfmD55mfXxHw6aLAeCK86iJYhdf889BuWxwXTS5K",
  "key20": "3GeLyTVmq7N89K5kYdaT6UV84jB2pd3EsTzHHnwk2TVPS9pbDNpi9ssnZkgteLL5cosFyVNJC47Yb7JcGgSnQH9F",
  "key21": "4EUoro5rUohofUQmwWuhzFbNimpAF2uGvWbCcmSAb8N1dUQBGPMQaPJm4LogYP2TBwqJsA5dz2gfpgRtrwPGLf6Y",
  "key22": "4E8LA1Cs4w4iwMYifQ77vcYEoYrdCx5n7UnFgk6cfEsUKuy9npdDGVSHgLHCKdijyF4e7LFGfHKtMQJrbftRXn6Z",
  "key23": "5vApFt2UP94s2ii8D1rMBvYX2bD7S1yD1t7EyCbRcS3qQwKAf5EVkqkHkbE7xSH3BtabkphE9ot9ESHm2ajWwJwd",
  "key24": "iTL7Nr9n2CXVP2ySARcmH9yM3iWLQLDwvw6fDR8rYJPLPiwPCPbRhfYjf9cB29rUpyLZYxKfKw2RpLPvFiocnU8",
  "key25": "3Kpyp94XBUiLmiaHX8wwxqXiUUvmr7aYLvnmmbebwTkdoLZohpauwctq8vLn5nF4b4Ew4UWGXjDLPsvRAL45oc5n",
  "key26": "3Pcfp7mhVHpQDYXMUo3qD8KcJ7vpxQHYywQYizTjNjTMZjZZhtRrZ5t3v3xaVDVHvhM5L2FN6u2NzLsejfpd4bs2",
  "key27": "5Ei65zr7ERrzbHkHENGwWgbiF42fXcWkHgRtTqVCr1bSZThh1KEpX97qzDAuYn4Pw43uJMxM2bebE2G2BgyXEYdW",
  "key28": "26feYD3ReTdZHzMK2AfJAKb4WLLxUToDeD25S9YeTbkcT4UfMZyCKDXPtjVWdR59DbsKgL172w29u2Bnbr3WoHqV",
  "key29": "43xkZRKBCtGNX6CqmXkf36CZgo3HvpaCQR1e6XbFubwxVRw9qpEWjBbtKRicGvq99yp63W3zkwgkae8kYoPLE3v9",
  "key30": "5uQLcki7yDrdWnxWea9yqb8WjxJZPLQAcnoXX8TAH8UhK9xXhJsXJUYP5wHEeFYokjTuKsDpWWiAQT2YcE6F72zc",
  "key31": "3EbZSYiUAwTS3tDzc27mSb7KTkgJoxQdJUPz8pVbNjqpAHmRgs4jmwUmBKAFaEiP5c4grTjmypNe1gbdxFFP2bec",
  "key32": "3fKkEiwxfbXtPi9YHr1SJinYUwz3DGmKtNbE7ALFicR2nzBBXBYkte5KjL3nS8Si8T3ijHok4BGvpbuTsKJrrEAu",
  "key33": "2sfioW6kDGFbwNUAKNdXPQcos3aSTuc5LJgjMmzPTyXMVLevkobXukAgDGqX1ySG4wd513eUPiWLTNbcXvPGS1eB",
  "key34": "MLsWHBc5UPRzFEBaRkX6ENchiK9EgwxpozV7of3k6VAbPdMvyAGmafxL5sg5AtujSzB1cnzUDPycDB3UweSwujg"
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
