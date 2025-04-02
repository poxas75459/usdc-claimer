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
    "3AhcyXnR2wou5wBNLTFHPh3MNuHvH1ccSXHUNUbjqotDTWCxTqyoMMahWUXs7H2TB11AyhMxZHjntgEtC9skrkwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qox4yZN1AoGkBWAgs3jH4jTYuKoUEVd5nHpmvHS6ecbDXBPwE9c9nu2ZR9FRfPwQ1KuGMDn8H8DML17B22ZPDWa",
  "key1": "49gYDjmWANna6pUR6v87ZvJG7eHe4cgXzpUy2wFJi37S2Guro3Y8Pgo21WwuFvkwyqdBWEFdTwNts9x2foubMiN2",
  "key2": "4i6VMs4sYW2kmKWP9W1SMeVwtDSgrMJXPbuneDhhKGbUAAFZUuUFsa1Go1UTfaNRLEbE8ErN4yAHfEoicBLyhRPX",
  "key3": "2eZsTRKngZv8CrTrvJ1YJxsquNv36FDQ8sXbUS5F8DWRGA7JsdmLjjrz2RLGDspDs4ZQbLwnhTYhyg1mE16671KS",
  "key4": "49ScJPNmjYKGbNsiVofcWsDf4b7dWLZ6Nx3AWFiziVsAAjZ9syZSEKKbdFr6xA8kgTeLovW1ocb6wZnA4kVbeWqf",
  "key5": "NYu6zUf1xnDbNE8eD8ERwX9HrsnVDnNu7DPhKhg5sWze9wF9cJHY5FrtGzs2d1R5EbwobAwbbfuuKfHRPTffxqC",
  "key6": "4Rw5sfXoC431HVhCp5B2fKqzfKZEmDfEDtj8Qif8QJRoQkeFHvWb5qwvA29p4Thx2U74G8CDtUiQqoVacbhWr2ge",
  "key7": "61z1MVAFqSLPKnYcTp2MjCQAW9NKqRA1tPxedqnwxwPEPczMMWkoRcyuBsCkR7jNxwc1C6SMJN3Py1Q3atyV6qCw",
  "key8": "2PAP533SVdpe2Jgc5mdXVWKJBx4MdjKGwcwszYzoLBk6Gcv9FeseKrxjzBH1uyAoMoT7XNyPWb74fnrBcB4L6SDq",
  "key9": "2rmv4R11BqUmNsh6gE13cQi17C6E2cuuNvk8HWrmMJajpiWTWHS1ZMMc7Han5EuEvrodC6bfo57jj6F6gTk3tRPt",
  "key10": "4cfGNNodKVkHCpt2r8Z3ZMCjSf4bph32GYXv9SXMY2Xi9BT9pi7bL2TCB4NHJhwcrXt1incTCkxkFqNBb9ReUQsV",
  "key11": "5hSBNFbLD8L7nsbWCzkcQyCanBzhh16BEbgG3c3Et4nv6YvvcF7EmKPveJHQRVKo457bf3GoERZjGriAMHbpJLPA",
  "key12": "52p6zSFTsQiyCJFhQvJkWNWpPvCmFQnQ4noBKkEQW9va7A67HTEj4W6so6aLnFM8MyRNJ8JSjtFkj5UFM1so8afS",
  "key13": "4mw9KFZdoK25rV8o51HpZJfs6t6NvycPss84Ti4kX4eQyp6GtxzxiTnvTA3gv417FgFtY3YjWBz5cNV2tjsynSjd",
  "key14": "4b3MPsH5dKFx6wcJkkzXGdrZvw4BCmAm4rWRhi9VTgwds44eyULiPpJCZ2pg2cKt8DikVJA3okxniY7ALZwYPfqp",
  "key15": "4h33fVVmtSAx95q2JkDRYQQhcMX78dZpPgDg3JSPWwHzTyj9vsFZnwHnMDxa6ieqUQmSECYnCRrwwBHaePGTZ7Lx",
  "key16": "3yGX6wGLWFKH8dW8mVH4FCGMfVqK4fjnYpKgVizDPjMhc4PdBdbWPiVZpP7uV45H6Gk9Zh1EL6uH3nSuSPyos2XK",
  "key17": "5fygLQyS8h6TEynaWXU3TbJRd5insThQvRwbKLJbEsvVbaJAf3vvu1QVtr3nbGCuwJjRrkQHsvY5YvA5RwwEsWzE",
  "key18": "3CZonH6JHtBnV9WksVqRwgeVUkDiZ1bXZb7wGX4PCuFBSELf4fWU9154XCyQZoQmuAHugJUWESdtLLi32LQBvxiQ",
  "key19": "3voTJfe8HLQSPei2zQgGBUv4mQGkEueAfqSNckZrvAgfrAhD7bbPFpCCtzn463QJvc4z5WBhVWuiWSZVAhsFQajq",
  "key20": "5bmtzAqPL3VFf5do3Z7jXy3Fw7Fk82NFxHpdd8KSC7Mqyge1qr7p4a9BPXc5gRBi1Gb8aKDbSYPSE2XJTitqQ4ta",
  "key21": "5kkRVvFbJaRGNTjSdZSCas9vMA72JXkWRvePqB4Mxzp8VviqJcbKdUqHkQxZ1KqYJxGzjtuLm8AsMSzHvUXBLSE3",
  "key22": "9V8oDkgdJt9TrPLF78N9cyrfhcQTo9RtUrse38USXG4AEQ1t3XXqCqMv5NYuMPx3iDWHQo6N3XhwBEs4VxcMiAF",
  "key23": "jU6wQxD23f59MWD9AhR1ZN2QmXKCokYyMbxrTZwUmEx3SXsL2yeAKK2RuHPJ2FaoxaTeD7vwkJ3NRo7mbowmTbP",
  "key24": "4zfHUV7z7JyHxQudgWEsCmZgBA65wxuA8HQGjkfrQ4KNP41rieT49TwjQPeHm9BMNnuwYixG6EK55y9dyaicTNev",
  "key25": "4BYBzDnJCTeVcCtcmNgYdn9VGT4UP8PnxkfTYz7fSD8Bt6zmcmJP19416vPLFs64ZKMNVfLy5JBb4qJA1Bi2oVQE",
  "key26": "9fY9eJeqGun5yWB5cGErky6eCsoKcSjXUhDpFTy7Tvt4GbU47AAyu9Vdkwgtjar1igQVuFoCcmUR3m6jHJ7pD33",
  "key27": "T6BPzm1nDzCr2trjWfRMUrbLukMVSqfkNMRBQwFHjACH9x5oDVd7ML4K4eZquMHzDEDZh2NZyREm1HDkgiMcdn4",
  "key28": "3ScRKkUWT7jwnBJNuyHhHUwEKYzCUxEKPMyNb8Ta2z1F6dwEih1K4oR6Ex2qBR6p6Cq2DFvzinwwBb2c2G1H4AaW",
  "key29": "4jLkkDaGfW4bEHuF1BzBGmqBHvLbbQqqZEDwi4GoXdgzJjjJLh6sdVRxk8Q3uvSHLg8RPPT8nKpCV1Mwfhx3MHCB",
  "key30": "2ayaVuwf36yL7cSJjEBJrxe3jPJS3pqfGjWnp94GohcqFNZ8vCoUwaRpNwzqrutNBXF6eNYSY3AqDSbEqFhxmAF5",
  "key31": "3v85oohTtk1BSEACJC6CV3QkNf9uGjVuWywyB52Rxyem6DnJbvSFNBKrEcsYPxrEGxRboyqHJpgiau8zS2dhhXBt",
  "key32": "4WuQEYbQnw19dwK76FhQ8CZq2eaBvqjY6rqaTwo1zWq74sXAPvq5ikiGX53KZ6fyeWBpn4Gz5amJZ1T7j2JZCZBT",
  "key33": "5br5mdveUyxANMfrXEXCjjAa8BR9WWXVxbxpBikREsnzx5E7TscXBgEwHBHdx1Mrw6LKV2WPG1RgBRFNYGGEifiH",
  "key34": "4VSXH5aVFSBk5v7NnTm73rK9pzEK1FZ6V8eBrdayKLg2TYUi9rm798acw8odrBJxpyWd81ARXUAu1U7QbP7Ysdar",
  "key35": "5fagART7xEn3wMwEuDpBDMhz6StXTB5Q9zWEUye6rF1mTqEUFHbyCgXk52ZYW4pEuKUsi2gnU24Cv2qLuzdydkuB",
  "key36": "3pAhhgN75YDsV7r2qPGiCcG4wDxB43AmSkDGAQS5s6NfC3uu3FFvwVd7p5ECZZkJCRstM1sfnUV5Ph5Fbz4PTE2J",
  "key37": "5J6zaxWknxmHAgiWVomgR11fPnRXkQRTasWHaGq8M2xi3DZbgLCNpAN6i3JBJCsHkBstZ4RwV3i5v2roE93srKm2",
  "key38": "4xi7UFjRSzgeB93xV5R222hfQvUPs6vnQXqNguRXRveQhG4cFFE5fYK3uiC8wc5iVZ69aKG4AKCbeXan6SjyUe3Z",
  "key39": "4FEAYztw41qgWqrMoHT4Sz1QdJJN7jH3AQSwydKa14VmwyDraabgnL5oXoJ4ToPA4fmFoRk37KPAdjQPDfpZJAHP",
  "key40": "3ZFTeyNwVKrx7ANkoGk9YTnLyXz3kUiPvLvjjrr2jpmMdGvdQx2fa4xfzcRxX7gwaiTYtbSmSYyUMNt8G7ZfZ7jW",
  "key41": "4h5yDZdHDm3g9j3F6spLe2iZRM6cSkq9vqrrmXqevtRDgtUhkAXDXTGn1Z5CSNibHrWAn8psi9VVWRPWsq8Kyenu",
  "key42": "3suUWhgJ5vghna1rEsb6Cc9sMBkwYv54K9PrrQVEF5F2g56pwzJF5RynJWKGGYRRuNEhRXVSBGFcxEtwcRERKhBy"
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
