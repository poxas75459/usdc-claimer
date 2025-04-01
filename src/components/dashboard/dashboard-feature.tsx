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
    "5ZRNtMSKCtbF6uk1gezR4vfXvPKPbeekhBkg2PetxP1NLf5fnPMqeS3xsTaCpVg9KDWx7bwBLRswD7gq7zTHSpKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vsTewZifPSUYM3ZBZUDDhMZLgb9JCwNp248wsx4WuEesXaHQ88M7xy7Cd134wESVDYt8pWJjBGLb3zKyToENjBB",
  "key1": "dNnW6iCRhTQPkeZrVzuTvR5oZh9VMA83GUrgxVYjgj6ijbK2Bm3TSwUU4Z2NK6xSmxMHG4TKT9rTQtAJwPccCrE",
  "key2": "5LQcVM2yaRsGYTds7Jkv3orXpU9UFv77eoPoiUanz4ZKbT2P5Kqfox7M9Fvhma9y6FkepWMajF6mpNR3hg463BGn",
  "key3": "5zLLdiHgM1rR236Ue3V2egnY5HURmnb1KnfAX5uQUzRLFBDj57nivtH9UZ3sVBqdQLVXcD3XkLK5foyRyTY4tMmb",
  "key4": "4DBvLvr3ySYAsdSGWwoRr8XqCupP7tQ6eRyMP7NJjT9Ny24ZABkxWQzEFkqE8xM23yrBU6R4QWsuPWDQcxL411qd",
  "key5": "iHPeWnxfcXVdTLsUXW6iv2A7bqN9AkKW5mPuwxP16npwa3yyQdjemfqfVhdL8wXKdL4SBPkXjjbacAzGkeHsJ3N",
  "key6": "4CZZfDAAdupgqgEAqN8fNFju32isog6K8y1zfqv5mZpsqMn3YEuThqT5ZML73136VMVNnPwqxbfZ5zVuDZjV3kgW",
  "key7": "5L85qBzAkUXK7VpTKW8jTsYBwHEv1Lnr9z2qETFhh2zWq55xW4jhQBndMdiA1YsYX8FGfxeaYDYoFVqqgYY4pMYV",
  "key8": "5iPN5fbhBB123Fd1BgdZaDgR4mr1TiZaJPSkkV4Jzs2JZBLgnC85zzgGUrsjPV2zcHvqhSeWu5mfC2uDX1Eho47x",
  "key9": "4QwUk1LXpNcJTNHu9fqkWSnM2GdTv7s7mMQzPo9HHy3nAuRVnvZXZfEzcLXMyU3MUjMy78w3SgC5WQDTyV3C1t7N",
  "key10": "3wChgLcbq1MtowRTG95rQM9FiRXdAaJHDCf1wE95kuGsoSKpmAymry3qzDF4ojPSJ2NN6yMgqRM7yNoeymVaqcE5",
  "key11": "64Nd2auXNmwZS8fwuhFTqooktzrEAJN7EGbYLUAoRdBMysm5KuFM6Jg1rkXXoHpzjEUft7iNvhLBVtAtMSoE4Fr5",
  "key12": "2ABP3WihEhvCveRQDx9baiuj9H6WtEM7LWbrg8RMjjk4Er5zhmFYmrc4zF5bkPxMp25fTTm6PXiP1Knfg3nWd6g6",
  "key13": "3bzXZJuTFocoVtngACTYemEvatZFgxyiMsdir1nWDzncY6ALRf1RtrjABGiygoXrA1KkqXJDh5odctBt2pyX1uvy",
  "key14": "2r6wMh2Ke2FzC8GE1zgfxoCSxTLhu2fCXhraWBrbRiS6izBe9kWFcADXkdALdPmiE1ZUtsbAASVRemCEFZTYr3VX",
  "key15": "3AA426A7MxzvCr7gu4uT7Xo3PLy1t5duYbLWMV4FwpfPCPWgicv7gqwKrEpjV3nNYuvKCFMDhuASaMuxcaZZBF7N",
  "key16": "49B3caPqdsPivdX2tgDThQ1z6JtV8dcFKdXGyxgZFbUtPUTHzDjdHwgMzynKJFFJb3By76dBDmU2sUV9ynCvkwXd",
  "key17": "3kZZaNd94z3KuU2aCaLDjfLhjd6XQEVNumGeL5vPsTcuBmxNKp9Ha6v1SXe1N4Zn75wiBRZovYk9fNPp5chZGkYe",
  "key18": "5Wv7gdjNrb54wNJ1u15hvuYfWpanZ9GHCXu5gfdcHtLuZuWo4THrS3QfLRaUuMPhnrgGvnoCnR5RMopfRoBj4wNv",
  "key19": "5rWbqSB2T1GHA2CpMw1f6j9r3jyEtkykrnbo83TbVbrBj4ivmcmAB6dZy7A13SHQm1mnqqzjAExWSBiQPhW45BTe",
  "key20": "4EQjJAiU9nsQv9wWdrfQWx3tVY6gmBfghv4z8mqpU8Ys68ox4RXShXm4YyP7QPtX9VkfdR8Rd1TNn9H6Yj994LGK",
  "key21": "3Yudm9C7hbcrxSmk3BjEtVXE3t96xo4wFY4aapoAa3a8pc5eaSaKBTSYTepFNjFwCKekTfDQjxKDUv5mT2gQnU56",
  "key22": "2hwJ5RU2FQDnGbUUPEMSPsAwwUiUsp9S7NoM8YqEa4wefZB2RAwkCN9iUzirpjJJFQz6Rkt9BAZ73oQqMkLSWoUq",
  "key23": "2UZzBpCQ9XbRS2dvHhTmVS5GzCtD5xaZRnJ5gwnkyJWk1BiFb2zGvZ1drcykBLB1HY7USskZ8uBS8scKsCzvopT3",
  "key24": "3vo6RkcQCBCPzHXpo6RzLiExrUYGaxfwuZrKJrmj3Ap7q8aX3o5AcqSPWWJhY1jjhW3Np3wMxu6JZgTtv98e1jyJ",
  "key25": "GAZLTMAo6o4QCECa7eKkRwdpaaucRZz6jpdTBJd6nH6mc5KH5XxnaoqVTZPFsm3L3DYon47wqxZBTvpJ7SrHpNJ",
  "key26": "4a6Vz2heWQn1taC1yipbGverpm2VbHaTph3JFNsVJuG7wPUypfZRt2jBUActsshX9KSLUpTHVdqZs9tFZM3ze2yR",
  "key27": "4HGoh5Jw9aSAuk31hGWq3sNWayJpAEJwfaPJDZseE9YFz5H2s9S9qifDaQCHJP3aYP4hTBAznzcJCGc3WozwVf2a",
  "key28": "4VR3BbUEzxTW62hXRaAHmoJdiqyD2JNnSGWmFhPuUPDhhmorxK77U6GXSyjLagb6wyiWa6bdSWEKvziuRA6LYUMf",
  "key29": "Q8F9XrTyFsRCQcvQJAEVRwVSUb4oa1BELMSm8LaofHyRP7aRehwYjLWH5fge5WK8YENfmfNsm98ot5DdEXbUfbP",
  "key30": "3iuamREc5pmA5qZPCcZLBpdHwTXXx7skzZbRb1C4FiVKpMqhbkxDCcMromuU43NPvzV2EFEHsPwn3Py5L8GD7nXA",
  "key31": "44DhZHwgWCERcbaVtx2rSb1rZPDFzpXFPSWaXZrrxr2WpsjukmSc1QAayM8MyZg9yRp3UzXFf4Em6NHvDgN4gB2z",
  "key32": "NkgrTH4JQhYm8inY4fKH7n2iv1MBAKUqdLp32pNzNXSFU2g2SrSzuzAGuGVsNfNiPregJ6dkWRS34qsV966PLZY",
  "key33": "5jSQCwSfcxm5aSU2GHnMzh4TXHNU4auDW2tHFGsmAjY2TU7c7vVHKwXXWRwYqDqVFR6Pw7ZXJzXQCTrPDCg9wsu3",
  "key34": "3xLD9ujii1azQ9XudPu4D6vBGHC9A89V58VUJzj5mqBKcVowS4C9Why3uCtZdh6fNaQKp61SwLiivDUxvPD226FR",
  "key35": "59WbDv2MgfCZ5Amjhco8quSyAPgMgt7quP6EanBkTWNXhYnVTBpSnhgQrV5k6ZvtHVZzjdcKSymfKqMEk6JkpexM",
  "key36": "2ry7K3pL5sVmPjDQi61tdrJdWGRvGBBRExQ8js6EUMXghLfxXfSbhG15J9Fp1qn3pKdYoYeLuuSRSvGrftRumbuv",
  "key37": "4GA9YyyoPNyrFsRXq9omuwLEE476Ek1DQGcRQLxKGtHx32rtDSTYdbgVvfRrMrRLbx1hUJZDrvn1wNf3CPUbWhSD",
  "key38": "6BqCX3QU4myTFZHsMCGhPejEivsjXrgsg5vj7JyLA1Whv85umyzpFEKGcWPH8uo3gyBYrxxnJM2ntKZVsNMMrsy"
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
