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
    "3H5br9pL4MGDFLZS1ZFUWUFR9SScSKxwBKbPGmA9FUsxfyu9GkCmZuQQ9EG2TJtZiKUv5iwK2yYUFcFofZHMWNwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HWM4QR4FQG36GwdeEYN4F793xkWQmG2P69YKk21Jr9Kh4a1fy15qZh68umTRLbewXHvRGKmocAhif7hjGVb9a6A",
  "key1": "4HeU3mP8rg7HQqNqJg18eEc1mfUEMQrUtYCoznkJHZBPvE4TAC72xoyM7ULDETTAQCzbZbRHeyKrXK6JC74BuMCJ",
  "key2": "29FLcXjvsMGr8Chf4254MtG1GnQ5WcMENXqby2qnQSpmnaMJ71Gj4RwfHaNKzLvn1fZfjTxsW5ySxJn9x79xkL2y",
  "key3": "5GmE9Sw9hrCpZcgheDe5BHscibfx8tYfT8TBXMRaLFrrQZFYDwVBoK2S7ohPEkRZxEqbSMpLMKWnmnupShkgu9x4",
  "key4": "NDmqg3P967PvQoqdwxYxod5Y846jKNuzNrnT1ifmuyucfFrWhiwoYmCmx19phfseMuEZ3Ws5N73dbVuBXVGKgbH",
  "key5": "7mjJqDc7oQMTxna9m2wAHWUmbVM8niZLeiMxrPWNhuXN6EQ4QXXMB7GUkX8C8egypKF3YUHb89DhQLg4QjMTamM",
  "key6": "57rDMRRcZ8ykHC3pFc7o8hUeBDcNNDdPWG3Hg4X8Vh1WJGjYGxiAGiiVjBuU6JPA2YCjaF5wPthRF16agei6MZYx",
  "key7": "n2TVLeZ76eQMqm4t4Yxf14ApZ7HKpbbTDR1PtGdKrcn2PE1LJKm1MDzC3NngJJiQmZCs812CB9q9xTQTq9xRYwM",
  "key8": "HsrwEGSerYZEbSmYdaRs61BbBVN5wLcyMkhUGsPxgbAomE9ifexKDA36dUFmLAcLAgXLJQn2zu3b7jUArYXP9Ur",
  "key9": "5TZkHVw6FGURUXzJwNMwPk1ghguVoLKjwvrzfydwL2iaiBN1n2GyzbAKHPYkgi9ux81gM4AmM69w8GamTEzwQSi1",
  "key10": "3CxGw1f3FHBZFfsCaXitjFkiKt4wozhJUrpxJbYgEoJB8edY8UqYq4psavKnvXuXYnPeHcyMHhU7dbjovyUFQMJv",
  "key11": "2y2GasMhAELPjJNqzux7YxefebuVh8pbmvQZfk5btMHXn1aaAvdMAafZhBfx3ArZo4UqtBBYPJ1NvbWTxE7C5nYd",
  "key12": "59LKoGK947egpoJsmHJEu1g4G1XMDZSYzkNrtYgsxVvLxwfKqK22iHwsH2pbmPcdpcS1PL4i8YxAw6ftSYRXszap",
  "key13": "4H3LiDCRr6VkdR8wd6MABAz4K222gjYtvbxnnKrfYka5ycmbduV11ufZ2Uw5FvzE5zskewEtssERzXjbFt7EkQfA",
  "key14": "4vwESHFpfjpbwkBN7YTYNPiqjezJ2TzhMjrjdoCcg34XDdwjurUbvKPZYJs7UYMnuLb3oWBu3Zcgugr8P8aVyyYh",
  "key15": "DXs5hhE5CkKPQAgoE4nKaY7f3pyS7tVEJmn4MpMSyQBKMEo3rGGGyevb4Bk23jcaX7B8iR9FuMw31KSsbgeSGsz",
  "key16": "5iGJHiAkrM2QzQZSbqdkjAHoCVia8t7oNJKX9nVBUbAitS9q9Bi7nSFvf3t1WgPwD4HSsVCkHhQ1qAD8CtUpMAAZ",
  "key17": "3rBhZkvNcqd9DHXEcmPdY93HG4sEW9Gzh3TmcKXjnBhynbPLt14N3CUyCksRjWDcphRiPvR5NsbujKeXfLB4ta1N",
  "key18": "4Y1WV7Aa3rHSLv9jg3nyMMWVL7VhYb8g6AjsbKRYHA3Lgiur49tsFGGnRS2EvcXkqNkA1T1p72jHpSg5FkXBJ8Zi",
  "key19": "49B4XLWUhwRUcGGYGjxWS159o8K28tgaHqK4TFbgWy28Zw9HCZk8Zisz3Z1WHnEDmhP4tE7Pdt9RGmxwsF1RXnop",
  "key20": "ZWQeLLjnfVtYCWqQynKvMLiCXm3RKLn1mN6nsq4paMe4zebWmERRDa2hAthxBgUKPwFDVKzJLTyranz9Pw7r53M",
  "key21": "KcdAz6r61Es57HY9KTHoFYtrDiRCZZvqV1FEdWL8P7wSCqkCnvC2KvxN8JXzUmwrDafAoRzEMfGx6P7UdWNbLub",
  "key22": "51VYouE1n18CEoeCE8RihWs2YGGuRyuAyJfbY56tddhpv49qvv9EoeEarKvCugqgaH7LqyjSUvDjxaWyCG5gfzy3",
  "key23": "997nz4VxoUuEUANq2yb91st18vJ3Kz6fa8HhLkJbUb3C7P4fc9tbW3KHM3C7Wy8HE1xZM4sACVdieASMUBUukPQ",
  "key24": "57qtsDx9R2BFXbtNRTDonJfFk1k9t1yVZBGkBX75o7Bgr7VBkza1yecXsVi6KhpCABFpEPzQrpNAYhbbcpbc12YH",
  "key25": "3rzrJ91jaxaWS5xrLrSU4XAYdNnJncrmztXBFc9iEuuKT6FJHtDUE3y7Pz2gpc8F9FGDrw1tWUBp9RhpZFT7YQvq",
  "key26": "5jLgd2DcRiBWGR9y5aPaCYaxd4gBr4X85AJ6Fq1NFGTkiSGNqVdZ91jKAroELR95rWCBrUrD3UVc8tKHgjtxufGb",
  "key27": "4gBDtDWMcWi4j7ieTqyHD7U8v5uFUxu6qeMWVTwsaaVAVpQdwpvFXXB2LPk1UvXnRNjHtFTt6Ca4UBK8uJFU9dCB",
  "key28": "2TsnoWTtFVgt74w1cWLeSVQwsaBZF2FUAbrEDM7kV1re2mNghnveUQByi6uotMkpgQYpEKob5km7ZkH5UrP2CwsD",
  "key29": "59zdKvHXYaXy5tuxSGq72yNDbYp4CjZHVbkaS8xVQnhws37zMhVUXvGGwoAhXf5x7ba44bU6CGj6X4uZFaZ6s7fT",
  "key30": "Jpgmv9W4NEvndU6joPi1vwf2PPjVmYhEQaJP88pfXvJMKMwBgM1xVHLu52qFK7CLUUgSi7U7iQzNQ6hU21sXP2C",
  "key31": "4U6eiyJu1FtXfx7rBFHuejRS7rGk9oGJxRB1W64nG8dnSZfun2Xvu4WDQySeTvqaV4Ca6tpwgmAssKzwrU1GQjVf",
  "key32": "2Pb91vi8oxCB6Kgpn3hRgXUx6ypVMoT5gSw2tRqFaEmmVAtiPhzNYyUqjjBpuiP742s54fG74LPLVeCpmyxbMyKo",
  "key33": "47iGShnTCeg7TnthMHDmqV8DQrJvHW5QeCpBqQjzPLGKrPn1yLZEXZDD8xhd6ke69GbGeNgA16axL8iN6Kw5ghgv",
  "key34": "598bLh7HhbD9SsVmRLuJKAu5kJq89zu98q6c4ABi83VneEn1FPpTRtDi1tGHL1Q2Q2hE5AQk1ZeNYmqg42Quapx9",
  "key35": "UJghM3JDtxyrRkEeUavXsVoJndmjWkJQ3D8eoourVhsfn7qJBdnYWTD8PdaKnPYcJ1JeCGrZL7Fj2KA9zv79C2P",
  "key36": "3vQJdShg4BUjhLTNu5Bshs1ANRHotetvcoe2XAfDf2f7rXXLjJTKkSoaNMYGyTdoZHABq71kBijYgy92Sz14BrmR",
  "key37": "4NQefFxM7Y6YwKkHFc3QSQC9VFC25Pgg1JrB4Z2oX2A6Bod8zdLXRyqsTrvQf3K65Gfomu11mBpJGqrPMcnzLZkb"
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
