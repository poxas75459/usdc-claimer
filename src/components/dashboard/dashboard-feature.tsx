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
    "2taNtAQ2sw83YfDURhyMVDsNzqMCvjPMhsdPbt5U5nDQiVquFuVcs8yqjPCwkhKQzshcZu47hn6pkVfeNhr1Lo9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rDNvghy9pdWeMttBMpRCBEtKgNXx9iRkF4uaUxFEuqjh3fWmtY1rTvnWBAQU3Ng3rEUWVodp79rS4wuzLEKNqv8",
  "key1": "57camYrBpJzTYmKDfc94BzoKK4aNeDNyc5zRBFXRQsfsH2qTnpLZtA9J55yuf8B923J7FFHcnNPrvx5sq8WvfGDV",
  "key2": "3hfrFnWYMeHFrtevuidaxEdUcRgc1pgoKGqtfneTSc3Jzmv6MV6X4TSV5hLqV2gBZYTTYwcDGAfSLRoaTLGbs9SD",
  "key3": "4CdGertXwvJo5QAeNJh9MiZ7BQumLajq1kfBqy5LavmincNbrCBoVyYeWWX9MPbxnN7EdHQDFKb9YEkCVsFqWnRP",
  "key4": "5LuKedAPp8QZbXkw8S6rvqPGvrKqZpXWo5zqaacK8eieQdzjTpw5zxt2uC8RJJPCdhNhWCjV7E8H8EZ5zWR2NeQy",
  "key5": "4t3agkogvs6H3jtyKinn4p3irnVWWUtxvLZjcRMt5TYLD9nCxBZXja2APMY68gEiAh7M1U6hZUEd7RnKcoPyxSBU",
  "key6": "5shuUjxcys6frHroBKSxJiXoKgFsoE32k9sX2tc7Y99b4gHFtEM5CEDmtCxKNpdhQjEcUebs86eDFpzvf1HYWAFo",
  "key7": "2YQ6eMf8Gq2YzscXkJeSPV232BHap82mkNeeEs5pwvJemgZisKczD8Rgyb6VwaNhN5X2FmV41CN5LEA57dCZJjhT",
  "key8": "61JZnyvppXkdz1LhDcrhbNniKCEPUvd1g1zHUgynEcWWQKBEpUMj29yQpSHvqv3Dq7nZFyaPvFdP7PfCRGpFeUEZ",
  "key9": "ka5sEHVAqEEQ65DUHpSvSET6NakptKDY3gZk7dbMetBVyYfBwPHwQnwHgC2YgkxT6yCf77mrQmV4Fdhx6JDnhwd",
  "key10": "2bxWMq23aYLurRCmHPEqhFHoyHjvXmV3WYvo8sVcGz97Ybeqf8wHPGvbbB7a6dASZxxt8qJDBDxksH9korJUhiVH",
  "key11": "5Ysf3nVfwxnFc9AGmuWJkF5iqVGts6QuUsey4brhyhNT94spPEsVnekWMGPDDf5jBh4dY8fegD313qiUr5cvgeCZ",
  "key12": "3543DmsfKaSiRDnnt5ESJHMcpQgb666roYgs3eVsGktBfv9DqssxHGvS2xJyLsHzme2xFUhxsmAXkJyiEJ2Nrjvt",
  "key13": "4F2xEU3SfYUkbjFEzxwQ3PDkJqaSyoiakvXGZrL4sUFgsCCdzsZZrg6U6UPXgPo78rdjpvp1UM5hA5kjQ3ReBFS8",
  "key14": "5pPW7yFcAku96R5Lw64JeGd9oEugQRHXK8Ws3XAU6TLSPciAMFjNb4sSQCtChRP4LQdXs2aYxyfTMPvfaNpEFshG",
  "key15": "2yJBo8T1Kwahpqoen2TVLD43NTZXwgPcBpzKnmGCmkLmEngKCWTFmggQkr2ifrGNCxtK1UMtRQKcJBWaN18LLjHr",
  "key16": "5TtSJ3KcN9NsuTje2NTXjQn8nSjr3qPykw7EJU8GQZpjM8ZizRCmDzwcXkKK3pYRRtNdVvr4xgpKp2MXdc3XuTvh",
  "key17": "5v43oJp1EecAFo2gwBRTNrAwHNsoVnhqUbGe1N925zkL2Y45sEDzboWiZK3vPRXem1YmyqpPFpjTeExtCoRWgg94",
  "key18": "PbLdc78HueiEVmAoJUuWne4mPjKK2L9Y7YogM877Chcb1pKfo9mt1cKheuxYmLfmzCiudt4dvbqfVD6nXgdEjaV",
  "key19": "5AhmPESqoCoNh18U1UKGvU9MvN6voTUnaeHF6Muvu6H4Q37k1KZUwzBY9xEUXZbnqQDCHLRMN63kqgQkQH87YoVJ",
  "key20": "3epMwUx7oMZChhETF1H2bjHKHNwo2SmkL8nwz1cdxuH2VCnqnyBvva3mX2AarchGMTnAckLmGQAhG7ydckQ6Rp1Y",
  "key21": "3Q8gMo9WtBrKXADGTEWATsE9d6N5fx92ZHoyjaxxRNemGbQAiQrzHBxmQmZhh3XcFNmqZKfLT34vvwGq6g1eSpDv",
  "key22": "4xXAz9XQgaMTrW1DUpPJkUG2EzvdEGchCXoATqpgR7TA4vsBF8v19r6gQu9LHsYckK5n9py2MfPARxQgAXBUG7rn",
  "key23": "4TMPuJq1MvEAXLtZepRtGEeL4XU7RDoLsreWRXpQukwuNYxPTjWCsampctsJWE3Wpnjj7PWstzzxDqTCpTTvtGSy",
  "key24": "2jC5siqqjkEXsegjXvpLZ4Fvp3vbjhpdm4NxD77JS1xtXjWS54js8AscP5WLkF7WjhBeT6u5prc7GXtX2KeVtZRS",
  "key25": "4yUnQxfQ52m1rLQQtLQS2wbGvXvdQ9ZnQBqmcQfCXeuQ7DYpZVivSEXJF1eFBkfwd78Rm9wMGZe7Jp7YSVJcK9oE",
  "key26": "5kCCWgMnELcLgb7cKXu32Pfuu4jPBdWNgkNGtLSyowAVjiVTdRhjJi1ycFAcp4KohPn4vPDm9RmK12cVnMh45od5",
  "key27": "46MNrJGQN7Zwn5mRHn5jXNHJSEVQPmi8iqjp9aKT8CXgz1gysoL52proZB1qjnLfTfrTNoJhR2mzhfVeB58zcAeV",
  "key28": "2WA6m4ebbSF53Dw1j65g3SahzwE7LLSZQ2FoHz84xEm6i7mXwPrjsctgxnRjHhKn9pbTh21ptnPHHLFe8kBVkcEW",
  "key29": "3fojPQC3iepqRSfLBvomxzV2x4n1U54d4NGtgVvBEdYpvTky5iNfXv6WjLXm5uidin7wbwFygy4nmfBk2JmXd1da",
  "key30": "2GrXfU5jsNiw7TNvQXsqtHfuMTx12jukzWH71yu46qHsKJ7JH7HQj4XC9JibRaKFrGQsPDbfH7uqcxPJhRvjmvDk",
  "key31": "2kf44DNuSog9WdHQueZx5cybrZmq1YUhiNqQiLrwCkc8DbcQGfxaXgkLQ3BUi7c77z43iFse2h21uUFYZETV7Qqa",
  "key32": "64qoaoj6Um2RRHCJok5TDQ35zjUjDR9y83p5hpaHbf17FBiiNZgseVjZqiMkeXTQAxD8R1KgMiBHtL9Y95KPvE24",
  "key33": "3r717vewt8MsGL7714v7jrUH5mtTH6dcijME6QUWHibinaXNCEvwdvtdkccZactmPwGcnHo73RHetZ9nG7nRwNQB",
  "key34": "3SwZXqKbLgb8CHcrBgfnd9JnmafP1Rxwx2YkohMqPS9Eo4fyTiCECGJjAJnEH6yZit72ttshLaVQtbdHTzJAJhpw",
  "key35": "355bBkF4ue8iUNXno3kLMnRJJvwz3CVF2g5cycsyziJKiQpMEE6TtWroxSDNUXYZH7e96GcJN7kzBjbKDQzAUvCM",
  "key36": "3DicFQU61ViN198A6wxxThkNhfciaQQfvRLvpudWStBdA1Xd2aqpSRPqBKWsw6MemrGXHmqnbJvp6gxe6ikxBBHC",
  "key37": "4FvyxbXTo1tMYFN1jN6ZabrPReYPDUm6LmJmGfJUrehxqfVcDZ25UmL6TwKcLjTkEM8xmQmgrdkk3C5HyEqhmsCc",
  "key38": "5yyz8ugbYTcYWLj9CUXNMsKBwaXEW1asBrY5YqW9oWZ8D4JkoPwSPAh3kXEoBks81cpEbBXKCZ4CZPrKiEUzCtw",
  "key39": "2ps4eEogihFXCij4XKtHQCeB44X7vxa1EUJoiJSw1ssbK8Tnmg1qiYAJeMe862WMkZw7bJc8e7e79kLZ4R1YDbNF"
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
