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
    "4vZBoh4jpTnQRgSHN8urqntv4eknenoPmNuh5x3aLkK6ctY8QYPjtp47UdbqSqXihhWjE4gJNoriw9Db6GXA9sK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "562mTfh399rApCVHqFdxnDQZEZdCogdQm64t5uqi71hw3ri7xSToxXE5DvGZxFgTEihHJbF2HM5HLDpf3iQAUN99",
  "key1": "3CuhoyjpeXBnKhsCJRbiX62q8JpBcCoRrmMqLferNdEsXXpvwtfDxf6D8zqYmFqxygzVWPqFAekWc9YPN3Q3S8G2",
  "key2": "3zQ8y2VHmBFEGSK76ZtW1DLLXz4u2z4RFZRUwSy5RyuTz3QFmsjBBwwWucx9fGBos8NfG2c6Rv7sApKZhDkZicEU",
  "key3": "4qbfxXHYdZzUuB5szp1NdnZpBU1gmwbTiMAEcVubzzS7UNnXwvm1uvVY7isNA9maCb2jw3u9eCqNLsoXHNPbU3Xj",
  "key4": "2A91HPzQXHttQMnXGCzw2KyVz1aM295PvkmubhjVMDf5dxTqMxBSBuKBWVVeFRPChtSs7xybFpwyb8KNZwxLa8hS",
  "key5": "3AR5XYd7dW4DR6nf2CDiSZvEVufugz1AprcCSzUcdjqszKuHrwMqtBestwwNGBfGoPRN15YoSvvhBBuVXhzQ86ur",
  "key6": "4goYdDkhVV748Kj2XpJiLkvHPyt42yWMS3MWBcwRRuet63wcMbkQ5wKCb83ZrjJctxtAhe1XSo3fpB8EsShuchrd",
  "key7": "5dxfCjNMHQ9embqahsLRtoxRqXcrTcUWp3B2H6NCYTYbG7oh5E1z2TBCsVN8Y6U4tP94gBEo1gfVpQUz4Dxd5e7Y",
  "key8": "K4BmdrDq6dMV2EpaWZwwqPQySraDbzCnxa62RTY16LZjGdp1P4PdQqyVLiJLycp7D5b5WhFZWtR8tRiAiZ25guZ",
  "key9": "4Z2gYpBFqdUp4awyci8HQXDrHyRkAa8vgBbV1gNg4w2yZFuVueYUka5Smo6F8ncbxNRhrPnejspU4Kurp3h7DgUn",
  "key10": "ArSYDowTLwmGTh6usbxNzJtzZXPWuiQZksNyN4zo4s7eRCRkN6bUZykRZqPUn2XPXjjH5SaUpjM6vPuFLDWNhW2",
  "key11": "38HY2LRJJTF7BFHoqPSoMekwbtb1zN1VaohhxNJhigYHAPH2wnNXNd5NJWJdoMDdwKEvvsXLwF7a89Y5hfTrLhvY",
  "key12": "576xhFPc6bQiYeCwwp73wckGRZaQ6opLDDNgWjPBgA8iq4aGSEnHd3Hk2mFqkx4MKKALkw3fmMc1Q6cSzmrhvCYh",
  "key13": "2yHuUUwSM46Nw2Z4MEevrxhBbXa2LZajhPRova7uBBbxTrQaCpVpcPuvRBVM4QZdHh5rUpuUhMr2TGkPd6NVNN6J",
  "key14": "4P37Ppo8khagnG7XqQ1RGgHouepxU4m2LNHXP5DorwiStwp82rknhFWAGZq7xMfbCGaueU4eL1QoFPC2MjiePBWM",
  "key15": "2uUBFvZdqMDXKo87GfxoAMf65i4AYzDU6Pb6D6SKqq1caxdxxgM2fqdCshqtFF4XYbhBVtss2LSU8U5uLwBMCxja",
  "key16": "2nCtT1ybKdYjauwq1q7iejT67CxfemjG4iHygWrQfVhAezHTCvvv21Usjhme61dPNCDjQkg1AabctvfDChyn4gdC",
  "key17": "58WuJDjfuHB967hvkAqsnEbg1f5PC8W4PXoZysuiVg4GpUyhEYZwtYmbACKtUkdGE4wPQtDKFhjDCioSsKojdBXx",
  "key18": "41GYvFREvhgaxFJKdtqsFqCjE9LYT3D8h8nEfLUpRZLDYZzNuQUiRMDRmWqS3LmnCAx9sneqmGfTXxMb72MiimBx",
  "key19": "4SWp81edg7AF1w9drHP5pjB8PH6gYtxQvy5zRVh3TXDJL6TtR8sEc4QKsUehUws1zKTUbpaYmxrDksoKHEqknKwb",
  "key20": "2VnaFjsUodoTGbQHw5qdFyH928Wszzn58SEkndto8MYUwtSCX6R1XapatN2rzFmkwoNfSDpPVr2qPVbuYwT6gmTU",
  "key21": "2dV53AMeJmUVX6v3VHGAF5C3sb8Rr8ijUEi1ywBeAJQuwYUYwxHAHHrkduhoEqMVL6t8VhZEPirSAaiwnwXkjGVb",
  "key22": "43xRieYfXaDgN3xqZQwcejPDkLokSAkbhCjLcupVWCtLZbmi1U9ZcGPp4acDsHJpZged3srHFg3SPP7Aj4tecZ6M",
  "key23": "3JpX13hyaePenqPgaV2o1rNN8PYFqDZTAt7nQxo9PqcRB2hh61SQBTnL6P3pskZLzQTbMJwDqHWcf4RsXSdXA2eU",
  "key24": "2BTd3oFoRw5ic3FzjKKbNt8PoBNYgjN7pDVKB3ros5H4Z8vybFc7Wmf8LMwEyVsLsQNsFYiYyQHysmKRDsbJwzo8",
  "key25": "3ue96tf9cMWCKgccGTr7FjETpkJHsb3EqYhN9XQ8uBL44DLa8u7vQrGg8svNPZmoNfuktWGJbfLSaRyu3xJBvYuM",
  "key26": "55pyA8M7igjU66ShVbw9n5iWCvcdDiSgDm37U1xLzHQRYUNHpNWz1d2DPH4um1kV8i6bLPMNFkcsYeZ66e4evY57",
  "key27": "4qAxz6tBah3iNWpNPQyS2tMDZRMcSv9DYuu9BTjWeefxu4ntvJqiDP16xAkrgua1o1ChB5xfn4JdDTnyNR2N7fQt",
  "key28": "26QyUzoAA7ReEfHYrxVEHymit62aUhyByL1pqSufb4n97x8BHX6EJK2sfraCtnHxfZwrN8NnDhR56VkeX3XbG1jS",
  "key29": "4RqkX2BtNpf5qDTfKXzVG6PaLTXXcpZfndhCT9WVsRZi8hVzbBvyihk5gPiRKCgiAGQQqiGwLYDK9FAcpuiWXYBt",
  "key30": "5kXiAxVz1kWfhXaPkkGxcRMjR8bfpLhvzhrQ8UszrPWst5KAhdanhuJBo8icMzEM6XibvH4z7mAboGYgyQqimX9w",
  "key31": "2rSKoLos52XP68ULHxVb6bV48MVp3fRiwta76dmeHcoHHKVPsyptYbFSR34QeEiahYkib3z4UC69r3cRUWuhTF3Z",
  "key32": "2NNB6MGEFv5Bf5vdVwv4s9qKrhQdTr97MkLorteoNLUMa3gH8E1ru3uwHAbHFaUQx2QLESyKa217UvmdM4M8MRQD",
  "key33": "3NcvpdwYKSRL5zNf8embCjQKThNGyKY73Mc6s67xZf6uhLEotDdt6KctMNzauJMkPnNwGELgHz4Jwpq1kLN8kgFP",
  "key34": "spfN6cv6XtWJpWUZ6rjNy54xCNjaZ3QYkKpApV6Mz2QFF7xhQGxNh6dCNb58pHY3s2EEzP3p9KKJzYA1Sst3pWm",
  "key35": "5dWwH7ACeqLaZNp3zevwgV4u2bYsTmobk3u2K5HKKxzB8Kbbb3rw6xLC9JWar2T2bNx6NUrTxWpYZvfT1cH2p1vK"
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
