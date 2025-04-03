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
    "5QWXXv2uU9AryZiLqQuuroC2LRw9VT4j9ntiW5CKbxAg44gCRPg8xBGxP9WZUxP7KhNZJEGE4bnAF31YWszbBJDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sQLNK7wWZiUEPPEtYhE1vcKsHEgypsywau1ooB9zm1kGt68jPoVQUooT1ovM9CZpfFYgxGWHYtGEMmdQ9NUtq9S",
  "key1": "5txqpVtYA9RKMSvCNqReAcmzsTQrgCZZDYoKm8ucuU1TB9Wz5aiJxL129BXTmik5r1bLLACwrb8Mf5uoxQihK28C",
  "key2": "EK8ckeP3xVm29DuW7NGjrjz9qheqeW59nSZat4EWHSRf2UM3zn9cgkTUhw2DYKejcVKjXJwKene9m4XWemarv7A",
  "key3": "2tqBgjD7CVARZ3Td7nM8fry8QjQ3QBq6CYhZN8CymSWcu3sFJ4JLwWMnd1jgiw4YpCKSgoja4fkKBWGznxgHzYR2",
  "key4": "4J7qTaratUbaDiq64dBuBy7cCRFRMvWS5JXPPzZYMgeJrpYDS2izZYniCnUwDUApYPb39xsYPyxMobMBnGkfkH98",
  "key5": "2BSqjhjdGVACM6dyVGaLjB2T4oKBCF3XrpSvi2fvv6ke2JA4B5EeQW4JotZwPu9DePBbJgBSGhnyoBFghm8qnemp",
  "key6": "6766e47oMnXciefmYBz7QShoHHJY9izsLwyVLfKRqywbhWrJKgxT4HLL1AESw4TEpV72bnwQaTdHCpghD4aAjkkk",
  "key7": "4pjNPKbkJSi3n2wgYDn6m3i86HmZ82EHnapyZBrE5evWVmvvcAcgqRB9NshcijCFVS6k85JQo9eYRwEwtpXfVXLY",
  "key8": "5yXVzih1zkY8UfrgnS319DZg4oqqZebe8aY7mwwaBa1iE9pT3KtSizxHHw3GtM5YG4yECdNBwLi4avNnWCK1aT5b",
  "key9": "46XALimdfLtvBp44KYTtwo9sEfJTL9CTC6gLiKovZioYX4AzeetZfpWzD1dLzMEuwWP6yt73vspZC9neH75WwLk7",
  "key10": "5dQQUcYJGsn1EUwGTtMCPxKFiURv2bA3oxkZZ57VzGyPxYCp7PXVFkVPtvzH5x3fbngJV1Gf46v8sj5GURzSte8e",
  "key11": "2A9SkDWZ8opv5xLUKdCA1aB88fPRRKvaMHaihrutu7WCiRnsbmv82Wx8Bebk97RFvP9S1anubvj8qbim6ySbMhvC",
  "key12": "J4nn8XzJWB8tsPzhWsrajEU4v426bmEP9X84a4YvpRgwJe3mVYVnyfqbG6urMbUHyMKVTmD2dfSb5GzEpuPFufQ",
  "key13": "49nfrxyMQb7i4MndACMUwyacrfDosahHo1tsBvwRNa18LqaDuB6uExyJDDJ7aCJErokdUf2AcuBBKNuWs85p518q",
  "key14": "qRWXZCJQ5VhKWWVCeWRTr1QBh96vxQHsmExSegNKTMVQLdeWDSVWWSnRA68c35Jhobsnei3Z4PUhRUiFpz5PvQv",
  "key15": "zsHbqme4aDxuTyh6UpZWHdh9fmBVRMomYceqwGUCsghJXMxVJ1tfzY3q7u4Bqgxa2zeotVH8YdG8AmXYAsuFNes",
  "key16": "4Z5TwmYTRRwA79XvuC15eUaKDZSxE9BLfE2yeYMdH4h314GYLq8VqWEbynq5rfhwC2JZnEmhaX2zoR5urV5TFeaG",
  "key17": "4z8gfJuqZijkHTbX6TNDeMzToXiU4fAiKWt8StwarWTM1FQRcBr8fZ97zR74m89RoPQaWpUVPUXcHf3Q8rK152GZ",
  "key18": "vkAus87G5wRraGXugLRjmB6CGYjeeLtMKe6pWncQr8j9GRejx7F1jarTM6QawGt8dbc13Gp4beFiuUKT648SkcF",
  "key19": "2QX9H8RtFtWeGvdvEANEnvwDZcPwks3YfeEMcfhgjZTp4geCzu1RTnzZPFRvjT6JCNzXH1yVYUf55VR5HPxgr7j5",
  "key20": "gwbzAHUNrqMZZnvE8HEPVdqAb1Li4n614WzcFWKMgaA1M4ZQBdQKfYv6AVTcFtJqBpCoF35fhcD9HG7GUttbk6x",
  "key21": "wdi2U5fTx7dQ36ayJda9WtZvozx8XpbRzt51H4xtAFC2Lf2FYtxayuwF1XcUcAXX2CAzUVaTQSvJtdxW1ojrbLv",
  "key22": "3MbmCkjCV8P7cDZFnVWi3G3JM82rjb5NGQvf9GXNJLgD5jbbb2BqcRF4yQssK2oEtXzn8SpuHiEbFW9w7eQEP6kt",
  "key23": "2wDoVKJmksfvWDUNomKNFyrAXRKMFi8K1teSkSK2XZPtR7CFLTkLmegPe3D9x1uCCPr22CjjuQPHrsC9iasc2pNq",
  "key24": "4mY77v7pUZHCKMCYkWY5MnQKFKzUQseFjJX7DNU3ZFDhqCWwWT9ofGXqtkyg3UaP4s3EtALiQ4cmVEFftJSmneCP",
  "key25": "2LYuTn3ZdEHXiHznhUAEYZevBXLbSPCif6Lb4UR1MUr3mJJeY7vgTX9fFys3FAexkxEYAAgxDjHnndxoNiBzdTxc",
  "key26": "2tJfkZdpTSSjz3Sa6zSRtK1fCcUsMGfcwJE9trKF9SKHg1QxrKNUQ2wJfT4WsxsR5FaGhcMk7deRUQQNoNpro5p2",
  "key27": "vPE6wSonvJfQmUy2EGLhHSfAHNt53e1qZPPhpenKhXmuA8PGKwyUiYDfLwdemvfYNfK1qo5iHwN6jGuYjQAU3K5",
  "key28": "ocahjnTo5ETbua58T68PnLvnyxP49h9WLvbt95PiSwE6ZAPsj1w4cYTk6ecyoCRhfgzJtceiC3y1FQLGxRfN7Xv",
  "key29": "54ExGRcW5jvirVC4b5P3ubqNRChCNZwytbQrHcWBizA1AUY6YhnK4ySGzkkbNEd2ViYK9fRSQ43YGoSSQeM6A5UZ",
  "key30": "21XsBzGnsCjwKG2N3y1f3rNNJAx36n1ZGVJmNiYSLT3X8jTzkgDy8ZNz3eC5wYnSLTFLWyjcv7qv5C95ThsFYjZh",
  "key31": "2uYupee3ekz9Ar4dEU9Kb6qeiR12iEnu7BJx91BDZbAtvVRYmSPopr3mpUmPVxwMnDBVeDCV1iTSpYXvgcLQej7X",
  "key32": "cijUkVqddLPbAJABvUAsYKyLPs1kZHr45o4SAkmoYyEAoBVUGf3Yg6TeEu9gZjfPZVHUjaYSoZpq9tbHTqtVYXV",
  "key33": "3mRvEZND4Y8cPUvE9hhBz7Lw1qfRFm83f6NtZRdwkHaQc2iJB6RV8N6W5raevDMSruwJN1nMCWTbo9oSiZdGnBbH",
  "key34": "5F5SDMcekANE4xcJT5VSshJ3ocomgM8kJhHa93fe93ASJXq7WoAp8tZNFd8UXRnqaXPie1NG8Bd8zTCiHdVE4PfJ"
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
