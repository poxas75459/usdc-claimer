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
    "SDB6sFcNFCSD9kZaxiV7Qv8zv8bMoftz4q3KUAx6S1VFpF7AVXzVahxD7D2qkdG2YbVYBPaVoCSVXnnKHgxCMpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yRnYRrhi1mXGU8cd4qx1gyw9ME5mYyHL4B5MmqBNRyms9QGCvZYgUBYQfhaGpLnj91oCdYuFg1DzHfv3YLSSrVB",
  "key1": "faEvvrxNXKiTUWdu8yTEd5mg45MtGpKP6orTyhF2AKpEsukXGr5eAHgzcBEEvjKtUHDRRXL64w8cqgZfy5J1Z5m",
  "key2": "32FdPSQqiBRAFJD17pnNBoQ4imN2mC3H6JVd2qLvJrpCggZuZpAuUHjknyUz1qpcQSpzqaaY4iufmEi5PXXJtoaz",
  "key3": "2cN22gnkjdpMqCGjB5RcdakWNFe5weUcgoxWA5heqYMXiMhwj7rk3E3HL5oeZzhutGHqJE4UQiF2RRqTkTESoiBe",
  "key4": "3LnNvP37gYekbYXD9oCcicyfKKvKMzx6xSMta2uqsCM1T1uLnUpq8MmNPwYe29hHz9d4LRPQHTEqUChrEQz9BdCd",
  "key5": "4uFgM1vMBHZwfi1dVvqc1gm2Gb3n2ern1PnAT4Jt5aChFtDFsiM4A4tnymZqvtPApaaimRvKBaybBq3Rxw3zKWaz",
  "key6": "2hSDk9E53V7PAPpTmTPCtgMGSdMZSxCLgDfX7deidoxKy3gM68YBkj45x1rnzXVUexfdhxpParuU59V5RSbJnizz",
  "key7": "5kV4yY7QsidRJhy18vJPF6LHCvahK5qhqiqhKQiTk9fzB9VjQdY6RVF1mTHQ4bW6DuoTuYMrtLG4K2uHytuuBfga",
  "key8": "448yRursYjHxvND6bNS7uhunzftJqrppMEWmCH7Bg79xpniVDTgcTL9hhCVvEjUy72C3BA5FH2efLXhc9V6nwCuB",
  "key9": "3UCejFvJ4chrdwRNoN6uBtPaRBtpSQZo4H4ZwZnpbYnuwjAhodhXaEFPVw7T8jV3GKBRdbL2NfFuFUt45MdFuhQj",
  "key10": "37pySdvXmiiSTtNxczpjp8NqZLHNAYdFQUiRh6cvjpqzSQ7gqdB98zBj7XQ1bgP7DAF45AWoEGoEDcjMPCpf2ohp",
  "key11": "3m9yvofYVmkzXW3d9FFXReGQp1JAYHbGrdKxDA83rjdLLp652UeQW5mQfnDvSjtUKtKZ8M8BQeQkVCJsDH2ksMaj",
  "key12": "6yQazy6eArA2aZ4NMTzyD2S3zmmsfcAouceHQc1gXGWL7uQ1UDcmrEHAArEzzUheAyDTS9SCv1Zg9D3HcxkM86o",
  "key13": "3wPN7xUJ3kY6prWLeGHfq6t3sdkoAgqyfJDGtkNW6iHmxY5eWex8ta3ZNHNUG7ME73UR2qbhb2EUGkYLJiv98ggw",
  "key14": "5nFJcEX5KB8dAwpcTLc9rAT4iRd5VQfdVkWtET4jHxrkbgDXwqG9iEzyHdDx5xfc4vcWFet64Vsq88Hp2zSQ6Su4",
  "key15": "2iy2xHC2Tj9PAffDJVk1UjQaefhm9B1XRv1ZRUsMA7Lcf5dQxkX2czSEjye2xjfEJc7E1vKihmSz7SyW2HRy7duv",
  "key16": "47AHVJMQeVwGQibD21kddENNnuJ7NcFTai8DBzZp2XKGd7uanTCENnuwKhwq3g6wua4SNPUTyr1nDsDmkFAa4ByX",
  "key17": "38CxgGZRvJNNozMZpkgAif6oZP4U8GLTMAaiXUiB5fMavs1QEMLBQKay9qY6t1W45DTZY3dDgcEWUThNHZunFaA7",
  "key18": "2rLdscEd1rKFQouB83FvJP5nrB5D9WJ4RNiwkaqjyC6uJt9kESMSqs6AgFo3va9n5u7iYZdqURjjFWL5GmqkT9So",
  "key19": "qeLAMz5fqVwvPXMwE3gu8kjQL4fVo3G9LjuNjNEg9n1wjv4zzDiSSPuKQgF3MrkpSkptHrkx63FmzhBa8mpXCHR",
  "key20": "25qdNF9o7HFmqb4HpwuSEYMQHBEE8yU7iD4SGkQoaV7AhkwDWV1nf8Ue3KkUtc7hJG3qibQMHPPn9qSpskiAn5km",
  "key21": "2BfLP2bQmau2XBKgDNK4PrMUTEi7TuFPkwmFkoFxE5wemXPHEBF6qrFFNE5LWHcMEQ9YdV8qJhWZYYMSwzSLuJ2p",
  "key22": "2LSHNsXSiEB6YDP7yEC9VjyC5Qbh2TWZAPsFhFHZKcMtChS8yLv7WWxDU6jKypvANVXpXiNsBcCuE98HR8N7cS3L",
  "key23": "5n1ox8d2hZQFcgmu287vSW5uD98Rhsymm3mnoq2vkF3jqb8K21qmM4xS6RVYxycRZaf1ZaFikAWvvxGxtSppYoi7",
  "key24": "4uBThvPbokmiKxdHWJd14in3U5zx5dC14U3kKnztMsK9iXv6DMpofzSRYnLyyTg35aRMFWfxoTPvMvtKsJAiuxJ1",
  "key25": "45kk5Qh884eUHUCu5k3Kef4mQf4vDhNnTfSqWu842msi11cXSmLve9WJHkn2ZPPw9hTxn9zper5fHgAtYuEABQNf",
  "key26": "61hfL6CUPD452TfJ4iFNjMqAG5cxHP8VCuU1wYLCqpFtLoo3bTTqa2g7C3exAUbs3FsPULZ5mNzioDhZYZxTgWZR",
  "key27": "144NYzozCgZiVnSDKJqzMsrwwxeYcWoJiXcmUBW1tDUnjnY6RinoFyJL1rg15f8Rcm1FWeybJMVKTqJ8EJpBfSv",
  "key28": "4QCn7oA753fPcVj6ZsZkftktHVkHQsSgyRC6Du7f7aoPHxxMu7TVrLAqTDwkhJAxXY5Y5JXS5AEd8YHmBmbbY5N6",
  "key29": "2BtKg2WDPzyVBB78G3h9dttUXcPUF8GkowiukAFnvWBzrjge2su4B5zr9oJtAJuQQ9UpgK15dxyYoHWyrePqcBog",
  "key30": "4pMr3cbE7W7q3mcfxpcmxNSAN4KFdPH9vJk1a6iFJn6gJhdrQowB7XSBZth6FDMaazUsnyXHofWfMA5o4iZi8SGf",
  "key31": "2Q5Z9QwfnbrPrfxPayazaRr11s5b9z9a6BPdcC9BmWMUtf4UowVAZz4Uz3C14SBHN52CeoP6BrdDwpfgzMmwHw9k",
  "key32": "54tGoFcmqjEzpvEHme6C1u9VecTDCBg8kUCWw9n5QeuGDTh7Z8uLHDfk7aPx7F87Z7N5vRGxVx3bAMsn5oi9NP6V",
  "key33": "5Kib5njJJrPFKfYx2YMyqpBmF95c3EJWMrKBLUVYg9dSKRkrSt9jhjJ6y5pgZjUyDfu3raiMVqpAiKmUbMFLC93A",
  "key34": "5oDExypzqM3tHZq2DoQZUzhwdTVbmn82gUDmbN53emwWwDzuv7ZK8dzGHcwEvE9aR1Pq7RC22gB9bMkTFf4hpVqQ",
  "key35": "3qPyfGw9G6dHZckKtwdgn5zuPEvZRVJJdFmyFyux4gLbXhG9PzTTRy3CK6LPcQzAsy4G2iY2hmPBG1joYHYvXov",
  "key36": "rrvAKgDPUaF4dvKx718Nw9SVxWULMMKBopXdDh5s2nNx4Hak58BHULozt1YDJNUAiGuhAGSkg1YatiKUMux2F9c",
  "key37": "2zfuJUPQfKWA217VidWEFwBP24RSVYtWPcBQ9hxmkKSuBveMVY9Q8RrJkEJZ2vBK7v859nj72BSyphLRTw9TdLmn"
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
