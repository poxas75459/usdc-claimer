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
    "2MHzYTdY6ZEXJ2TAZ6hpMM86VK2BVgRKfmywCeCFwFxnEgzxo9JW4F4RwfAFy7X4KWawmE2zRuhs32tmUDDKc319"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WqkS3qdESffAUQLWoVXTXzgxpaKgSVnpA91fQShbdqKiad4nfjvgCAKFv81QkDp2zd1PHNu3pWF2fos61595g8h",
  "key1": "uDiEZry28w3HrdCbhiJkq49G74zyJY2BZf3EBaP2nqC7mDPRGKD8MAbik38M8uLZtvbiX5h63QoXL6144dzvBia",
  "key2": "2JQz6uLVqM7cuqUKJmX7aU1XYkpn6cAqjogUtNJfouBpzzbVULGvLcZ4aKDkeeGomYRr2559fYjoWuwguUro6s7A",
  "key3": "3bcAx8fxmjounu7Z6KMpduRdXwZZXi8cGCg5FTE5Dd5yMPgBE5QrXP67QFbDMbRUwdb3j72quAW5vsfLBrXyCwvQ",
  "key4": "3kbSjUknvV62N1piFRDuir6nUBAytabaVA73ZwxBXT8DEGDiknLUzCtnEkLhwQsqotpFRK6wvkEpptczRE7863oR",
  "key5": "3MetupaTpDE8EfpV51eXTi1pmJEzE2vbBpRyXGFsxhyd6xkaJmD7iU9xUK6FDe6PM7VwMeHRzviVUWwMz72PZybb",
  "key6": "5qwojgFDbsGUwSXwmULFJmBWyQqDMHrXQyBgpMY85oN3mZkFGLwj3b1xivhrCeFaCs6UxBYhsChZskFgG8EDvdSm",
  "key7": "5K83qdBrE55KxEhfq9mK2hVabmwy6CBB7WgHm5wKwDpnfcQjT9tD3dsutvr85fETJBzwjwU2Y6z18H4eeNU21vKw",
  "key8": "3uHsPx9uhgCmPU6aB82v43AjjT6Nz1YdNcjRLBH83K66JjghDTjynwiSNSUy8m5AD5XE9pqdKEKWKz5LJ3WxYqEC",
  "key9": "4bmeHrPn6491pfaiWgHEKfHCEdXmXWvejsqA1moGrHSiom7xpQ299VkdBX9Gx89PPRcTZSCQXpQyeXipEZqt5Lpm",
  "key10": "3tim9XPhQXLoUSHiZnKTVM7DxER3RCVWWDWjGwf87sEuWEekRezAvkPNGKYCaEvqaqJ3K6ScWpyxWevKu6ACWWm6",
  "key11": "22CHfWePFgFdyjJZwGzskJwg59e8aGj7ee5CrbEh5YdtGckVzpjfUZcAHzCY9M5c77MB6gNxyn1wdLtBTzuE9R4n",
  "key12": "5SRyykrwdRQMJ3P6VGjb9sVinLQftmDLALwFypTLfjXXNZjQaBYEyG1TZfMdPjhXjMkRsDuLGkvVDLwa7bLFR2qu",
  "key13": "4A4BKxcCgrBekZA5WoDiD1ZSZPM9wmF1rkF67oeY5HpJge49ErT8vWfseBBJv7pshzXowikGJvzwCEDzsAsmmtJT",
  "key14": "VdZhbscvCunUCF3yQRZoQSW2PAv9JmSSJAF84Yi2B3p4AzNhoZcv1ZGBZ1AHcWQM7zCnz5JT4zkUmPjd49yMzc9",
  "key15": "4vPPZM4M7iT25dCfKWAZVE5hK95Y8rCQnHd3DHPBZaM6nQFxKBMF2QcmzVFcuSvKVcnVwZmwL1iJBLb13XaYzGBx",
  "key16": "5Nu3v7ui6SZmyrwbzMp6pB22EbMKFAxqo2pi8U4dDH5TmTEca7E44SQ6rTASca71JP7De4DQvU7BHwsWkcePRwN4",
  "key17": "5AVXgtZRBAWkvjv7H1sJ6FkZvQ86vwrkWhMQjU8krdwPDQ23ZcXPbhVVtGsDR6SDPP2vfyoXvnvWjpxDVn4QDvkN",
  "key18": "4GN95X2Dc998iXv62bGYUagCm9T84UwKziekx1jo9fESeu7YeNxdiwJNxpBKZ6PfFt8vSrgre6BzdUuSHjpfhi3g",
  "key19": "2WymFWrs9HWrDXrdSWcKz2LCQasKxybr9CnC9fGpcvzYJUAu5EPEkwuwoSF78Vomg9852SSU4N488Rsju7MaaMMp",
  "key20": "3AAao4H4NLRZtxdBJpDyLcc9x8ANHuHJKRp5aXSPSwmacCNEtpquePdSkLqigxFdgEquSo1kfwvp4LQKNNdSKoDJ",
  "key21": "2AdhDBi1remugh9X7CioB6fRmYupNkXBx5vyQvn73D71FdLsUtAT5HL8K2azhE2vZhWbr2sRdaDYJ342DDAAKucL",
  "key22": "4gaYRb8fGvrXg5DdPbhdmBsU7JVUvVcCkcFVTVurmSR8fsMSo9Yfez9rCxVUtvKKvDBatK5FLwjbodiwCCMjyBq4",
  "key23": "5PHT6qS8zHddP1AghzvBW8tdBJH97wZFe68KB1DYsqWfT4hiKd4E7t3pvPMcSgUvWNLhpzeNTdEmhY6hVXbEGyo",
  "key24": "26KR8ky5Xa5MgZfUmwYiComqXGYjaGPiRLLfoiahCb798Gj4eneUtqkEsLEtpUk53ZbuaLFtFPMWVo44Yq6HHneB",
  "key25": "3oYxPgayxMwncBH6f1Fo5F6Z5wvrd57Ekqi8s6sCuxcPyTbijk1Y5Dxrg8q6gT43WxkjRNBgjZjQG7PZ6CXB4hfs",
  "key26": "hzkiYLj3wyDAYtxAMXVb3eCmCr1iX8z9zTDcaxFLdtXbL3PLfR5SFWwC8L8mxh6SftTdmkjQuMRLGchJ8338TCX",
  "key27": "3tBufrkjSXnwyTvfsduhjV6EmoLot2QDbvv4iZHdQcpZUnDzE9nhSScBnAkMCgJtAKxo7GUQVHyLKppHKyCkqsYq",
  "key28": "3c1FoXaXFzN2Q17bvf6FZ2ZD7HiXCwMZipwJ5sNwyFQ39iFM5CmLv65sawUKvwTMsp6eCejnmkiHd1pNmJz12vGZ",
  "key29": "4U9jwiMed1v2D55fKxbtQMiJ4oYJGaTdfysZJNakHTp5uZo7BiFa5aeze7NiMYw2yrxNrEV4XsMrLZK1SnFvX6rd"
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
