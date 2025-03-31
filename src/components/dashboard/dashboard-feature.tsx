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
    "6B3DpkeKMhq1p5jKQY1xK1byixtkPvKxjjnMqtNCr6Wf9aBnTZoHWEfrrkowk9Mq4VyuWNJLFop5LwsSwwDoPjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oiX4EGft1gFeFRAhRa7ex4icGmft3jYfvihUGJEzcRo47BUWkpLxngvy4vHMKwXQARdkcKFUFzgZ419zPZXR3ny",
  "key1": "3fA1VqHN3iDwS3Md8UiskbEp8RbDZCaPssuPKjEqxzGRfxdZoif6LxQuxanrKaygPsMaFN1XmeR6Mg2NeQXSpNkK",
  "key2": "5Upfe6iPgn1ssH9a2qgq33cseadP8LRjPEfVo9T2PV4BSj1fghjbnqscAzmRwJE3V3FxCBGNQC6DE8WB74Zcf46M",
  "key3": "3hCaxr79W6DTUV5PtK4rZw9g9j9qTLbk6RbCWUDFSimz6NWCQp6meBnJ1enZgzPkz2y9XmQewe3Z1smHoiowq7r8",
  "key4": "5xNvz5FubTqGN5iPt83nQtLnhfVfzaY3v8MtBahHDXoEXMJvwCBqbxvYxcFahtjzqgtMPJQ4LoTyeby9U2CRVs6e",
  "key5": "tbqTfVGdCTGm2jmP2jKNHf1Wef9hfs4Gm7wXvFKVrHrMJAeUywybzwC2BK6TUxCByBZs119KUgQM7V4jXtMvb5o",
  "key6": "eZTj3UXvsJjgC8ULbAxn2e8q2VW6sxw9VdQxL9b6AFsk72z5KEakvfmUGavhDbbXkxjZ8idHu7CkWwLnQC1DivR",
  "key7": "2hbJUAHYf2fUy3cjvHmHADp2uG94t1fRyYcootNsHUkLg6FL5yyqLtn5xjkBQMAPieXyd2osu45XD5UURyNYtsWq",
  "key8": "3SyrPUE7EQYzt3pnQXRmseYJEwBnkyL99ADXhnLSnM31w589kbbqJasVbXugCaAkuF2yrE4nGXiEc1kWcT8VVGGz",
  "key9": "4Lon1LUo2a2eWN5jK9EDFWQzjrVWrsBTN3uHw8G8eyiQ2TGeKvNuby1Gg5BX5mMqFFJQ4knBHqJAp1qQCwB4ChBN",
  "key10": "2u71HThnq4srVDU1UUpWzU4EXa74BRWrb5fcvVvZj1YwRyMRUjQQJz65yRsyyRyfaEpYt2io62sNSFsxfN2ihJ6z",
  "key11": "29eJfqvR4DB3HnsHKcWxy68ws9NbHGUhH7tkEUYZqj5QakTUnA8aYTmcCPFJ7wit6BZGRsVjXkPZ4teCWSDjTDJM",
  "key12": "3gn7DD13rr95ycPmkx551Ngkmotfy8RpVnPco3rfmARWxrnryfXf32wK5C8LCfQcKiweihnzqwiTRV15RcwVTHX2",
  "key13": "2w21KeaLJCP1u3i2idzjmgpMbfZRqR4o4nR4GFCoU9xbwieXenN67Ng6Qgob9sfzWZ3Lj8BsWz7TUcm3wjHs8EhV",
  "key14": "5ABuytj7eUd7RWreCN2RDXaQVPogm7T52WrJwxG9z9J9gzXJCTKtdWhK4345s5VY87x3P7r1cHjS2qGU1d3TsA4U",
  "key15": "3x2GTVWf7MCuRfuK4YDHEYUMARSFvLcSQp29fUSrMa26b8dmjYvBGPx63K7b19SFhWcAawYT6qCatt9wGdfWGjn9",
  "key16": "2k3Ms7obs2qWvA6WjayUuGFeZxhthrao7fqgryLQpKF134tkKBrPenEZDXqKufVMtW8WXFH2bbx4rpoQdx1vWeb7",
  "key17": "5dEQ4fbjbXxFDD4Km4rRYYKm2xtU9XwpUQfdtU5j457dAWoSf4BGDNQe2bzy8G4xxHyk1L24FELxrrP7hnMocDN4",
  "key18": "2KtAUdeLgxqV4L1aGRPyxju9no5YzdoRZVTbvnmKZLKvVCB1WcCdV7x7eAiT9qpvqT15HwZh65ryae3bvuJ6s5oB",
  "key19": "3bdThRiNtdMFuxVtCYReC6aQjJVqPYjYjYF3zVGsbmCvDnnvHjdLszsXyfCjct8vxmVHfw3r6ZoUqNCRTjghv689",
  "key20": "FWUmtMqv2yDJqdc5MLFYotbXYt3WgrrdiAJdYGGdq29QtJMQoaM7ZKs3dHENn7ovr58dxyUgXSNNnFUuygKzeh8",
  "key21": "356bvWXW3SQMDdwTp69EuMgzFHg8wziTuQ3BGXqvfvNX6VR96EfYyu5W2cRqsqseiu8an3rN2Lxj59ZEPJ5TDcbn",
  "key22": "DN5Rg3TMUHxEarpucyndNcRG8JCfUUw8QMmbL7hHYRJEpXttbRq28U5RzGvCBnUEVsGmVxy6Bo3Q2fSWna55zYv",
  "key23": "5BFXpfzBLRpt6xzJXHT2Er6DERRgAJYsx7TNrTLdPuJm3AC72N1sgWUUMdMGKCNYMRbrRntKBheeEAcnRWxY1muz",
  "key24": "5RxA4qbr2qcEA6guuUmWchbuKpLgpiB4vjDsSdTaViAoFdJKRJALnuBiUeafJoTGgVc1EAu8Ken3FEZ3VBCkvsbe",
  "key25": "64tXVZiu8DQtMDCb1dQ7Qumaxn6L6eyhxH7tZFHkAKXsE8R4P5B5redgTpwx99ShyKGs7M31517r5HgjdLZz9qsA"
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
