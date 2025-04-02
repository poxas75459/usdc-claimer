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
    "4Gth9icE7BkpZtgKVjNWrC7aGFFSKcbh3NuMKcyZKTgwQL1zX7d3pg29KqDzPZJTCsUCXegUmkvi8LqVi4Cz8UFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fiLGThtnBJpNawecatyLzpyfJRVEdDztPsMgUxkFQu9i7w384GEpxgfoWUicaithYgQkdKkz3yN1aPNPAcYKEfz",
  "key1": "GANGSisuFCb4Mshz7cY9mWRiJgUP7p39Zw67ucf4hcy7t629tqkohbyWBjcBtQqbQAQu9upmsXNyimPVNJiDaDq",
  "key2": "2QQLDdmPQqEV2hSiiqHYccgWUGHW2LcTNSdpammcLwJL7L59keyHXxiWnBAWzFQhs9KjWESg2uR9U9b63V13FiQY",
  "key3": "dXDLKMUkUMeyL9ZBKb59SUUNbDn2AP5ScTNrRoYX9BkfsGrCGaH9WTat5PSq8ueo5okrQueZad8d3dmZvwbcuXx",
  "key4": "3i51iZZLoV2nXwL5eKM1o4ehA2f2cSWxg9B2j6VxPY8L26wzYGV4iY5GgPUXtrNNAqg63AKw9oXpB1Vtz5QZzVR",
  "key5": "uSVAgRMUNQjjWtYNX8fejPoV191Xi4d1x3QLNjccupvWuKJXcWQCcSzohymzDMEkSSEWLfsE81mJBi85EtVmEcQ",
  "key6": "2hJ41pxbvkRDVW33yePCuAYd4Ef93UzuEF4aaKZ7iLG8HpKXUReYty7T4P5YhMWKgdRCSEL42fthgmUPDa3p6KJU",
  "key7": "5N5RL7b31r7PCmhyyhS9UfiCHoYMNkxhNxvuGM8UL9qNYFEo4KdkXdWhV66VfDjfFgXjpZtop6DbeAHPcyWhLeBx",
  "key8": "4svxgTnb5AA8xW1ywjuCqAyrZLworbqWYMpjx3tXt4NA9LQRYPkrPbxbosPJytYf3s5UadhPxYEhPEkY38RpgvDk",
  "key9": "3z87YChRgTJaUB6c6tLcb9rteqMDhmek9oYa1sPUS79cCLHcHvnsX31SS7LcbaAfdD3PCzeDFM9t4hWry1jdUeFL",
  "key10": "5u7aHGRffpqBsYgpNgzppiAsDHUfujtv8Sgs2JHbLn5M9aK8UqkCzyMsYyU2v3dtZkwP44Kx7Qb6o2rLJs38jqfV",
  "key11": "MRx6ysSDJmAxgRzkF2XTL1mg8Zqh8JtWVKAac4iycVaocam3HRDG1qpBVZz3xTmdKJvbRmJWJ8uMYpVBRoQcY56",
  "key12": "5TBLpxo2r4KeeVmBz4LyXjNrkNLcYERYtK9qNATp2xooNWDQqLtrzNuPqm3vi2UxdFXz1zgUgjV6gHhAnfjL1kMR",
  "key13": "4WtYYQnm9iQ2KhR6hVbLQefMRFpsbUGcgP1xGEJE91MM52uTkovcSobWa9gCQ3vsj6QB8DytWwuv7nayV5bK79H9",
  "key14": "3hRXLp7NcciTHUq4Mm7Yjp9J1hxoxxPELQtFYFjMNZcs9DwWbRN6jTnx5aU4Pg28zUeRrBCSRK5HuhS89xo9kMLn",
  "key15": "527y3rMWHsVDNMZrAmrq6jTmgdj2aGPPzWryo3Suf6SJjWyzB1DhyUeqt9qzaFGfX8gkTkC7RDnNK9452iZpZNed",
  "key16": "57CUGkYt577zGxK4UYfvXPscjhZ2SsF5fDiDSmd4SqwEDbberjNtyDjN12vxYcJ9NtwXuxr4ZU5FaCtpVsrqqh7W",
  "key17": "5mo1SCVUdFiPTUqcCXq5TaZT7iLT1DfQN6iKVmjS9edBRCo4qrfa5LP31qjYTLeJaXTqAQJ3cx1okriqFqsyVvWc",
  "key18": "3V9FHB5EWq6zZyeyx8iK8qDcGbiuynJ7Q6rM7HvvMqBYTJA9voJ9665D4n4PkUxgm4tQ3nzYi7yx2PPuq2cR1N6L",
  "key19": "61fXYuidbHUwXnbQnxY8y31kSj5UsH5F4h1fM69ga7WjHTdoXv7q7q9zsSLr1KRsqJjsknC1t42xdx3EztWgVbdd",
  "key20": "xNPJ3kyXT1vPbbzRyFRY2An5gyV7a6uDxVc71h7nmtsDeYh4DQKRNuNuapWvin6VsdktP5moL1u8HsbgnG3cZoV",
  "key21": "5GkQWrwcAuYJby4YSg77mmYcrvQrfw5d14kTXesbhgDBQRJh6GCCKrUzxn6kxzpQyB9LReff84dePbqgJJUaZMjH",
  "key22": "5Q2mdmSDAkdUysFF4wQ5fYGd8Qj5jCT9aRQ4qhk3cY8AfY7CWpnyor5FEwxyyUhpQnUiAFsf7iCY4YVkaPWf3X8s",
  "key23": "5i2jdpE67LzKMrpJCMUkKLD1LdJyFwtvQrJS1vbuaawbhBnXnTmuT51WXfN7VwjWye4yf1xXRzDb5s2Q19mvVkyT",
  "key24": "2duv3oHW3mQN4ghMicL22BNrhSo93rzdAqF6H5ixHtad7WaL6QSmcG6sghE69qPreUjQ9Wj8JbhmFnt7qfkMAvyN",
  "key25": "5HhnLbGvsBBWtpSD7Bu8Pvxep9pQDE9hoZBiBvn2UUhpWGvy11L4ELFKvxYLj1vSVFov6frFyzAyWEXevQDJVDUn",
  "key26": "5wPjA1Cu8eFAcCbX63xNMVuqrYjDCpCoHWW48CjqZMRfABcrioKXHvNQJGXWq4bon8xMPC2YBzGTe6gVSmdzqq5K",
  "key27": "Co45waqaRqsM4HDQLYVSPR6MtJdscKw5B31E9oYMrkmU2Q6QP1APkeM6i9jzUgLaQ4c5AYUtmut4QZxk8gVA8Qi",
  "key28": "tFPRFxD8xFL7sEcC1Pky1BUCqX6h1STXVfuB2ogYJX4XCaqfpbjaEBLLJqBJTvCG8FNr64o7oJsc1fxigePcpbe",
  "key29": "32mrpKkhTngdRxuuVrPAgd4dgPzgDsK4DU4JvVXFr8rbXCrAbxtJJX3nx98fthrhKX8pSfV37ZVC45WvuSLwHF6i",
  "key30": "2wcTz6UKhYFCR3RaDbaYdSKmFJmXdXNPALUBjbMp6VwUMPz9Ly2mVfypNRfo38Xhym1RHGUeJo858JB5Zi7Vu6Wp",
  "key31": "5KfYoiCUb3xeFSNUz8gPCdVNWU9vBn2Xs4h4SrQpcs2qkuAKTUjfKte6BD2zgRTeKaMiNQBAkcMJCTX8HTvXCWhY",
  "key32": "2EvSBNhwxUGm5PV2c9yuYqSU6WXWoexFz5CJbMniW9SKaYjkChPtSFiUyyCJPi8EuWzPsNmcDz4LuVhqe4hjCjcr",
  "key33": "26HLD31phUQD93Mp9EKUSQ9ALVqdHKJenP4BM1ptWzw8PUVvaAX68RQfLG7pvdsB14JvzGPbHFJL4erFHZuJLEWa",
  "key34": "dQ849fTgwchsrP4CNSp7kiNrdrdxQ7iwuw6TFMjEppdrciBYDJibXVooApU96Ei4LdGGqaRhLtD4myQtEZFEXR5",
  "key35": "2xPfePD9nFEXJvubzco9xyyeGCdVZiGsp17ipYTu46aEniyvPQGiYYaesJH5UP18fn4BS49Me2kB5kUx7yJb7aVb",
  "key36": "4KEs8gY3fifNpu4T5ZLBjpk5t11QUK1jzhCsM2UWkVKWR6Xptrup5opmWkpaH1PDKnHb3UmzNcyPeeHK5CoswVst",
  "key37": "No5NwCyLptGF53xPpBVWPmAEnAt9ctnVK9jdPq8hmdkG3s1bMgbugCZCngQNaNGxQ52iWj4DLoDKaANPbCD7c7Y",
  "key38": "wsXn2pBQnuHRW2ejkgZL2jF7rKh9ayi7ZdS1cEjH3nQ9x8Db7A4no7kH1bkmXwoWbDn6dChAi9oEwuXowk5Mans",
  "key39": "5TgHdFmoFDXZWCqDC5DhZHeFxrvzbnixRogaHj7cscwWxDUxkJJQYPpNKRGgLNpCiZ4Dqe5dSJe4UB82uoh3tJ3V",
  "key40": "4eMFUv4yJc5cAgfvZZG9b34NXY5ZAY4phwPpE5UzyjjhkqW49hPZnTS6vksEsmMHHytgGUmCLhRxZUouBzkQAPJz",
  "key41": "4VQYt8zz6viSjzRimGzQyusQ3XLsBAf3mknrdZ7dywJu9BjSDXpBuBm35S8wB2LNT7v8sq14NSzvJFPfBBsNiPhT",
  "key42": "4nTLSjjgg3wV21RzMTV7asmDJXCvAFA5saxDh3jn9vw6a5cNKP8B8GRPnGJH9dCRRY3V7cW6ZQuX94vYnRUPRQGf",
  "key43": "2KnSpZCzPVet5moakUXQpZRS59jJYsjbfSWicawsvL4g5su717rj2uTb8Fb59b56GKkD7q6aDrtKnvVGJgNwY6wE",
  "key44": "38vCujuCLJCPwR3J52fJdfngZHvFEMFwR5AueWbNaDMkCUgqiamEJ7QjZJBBH9EAxHohQdUX1z65LSy2z3wNvKsV",
  "key45": "29f7CZNtUc4K7FEGu3G6DVegmPenyvem3ts8ZrT7fCNX7SL3VeLk3zZoKTntRQaVtCS2LHF6obqqpoWRc5qWfJKK",
  "key46": "4BWqgT6eP3PEY2jv9MdTMHNd5TH4axkFaB2mHDR7C7JdeiyzeVSfCHoGBpztMaWbbXhBEvHGpKcEgh3ZQxrhKCsg",
  "key47": "5kMFi32bEq1rFwpCVekuNvbbAdoAvawRFeECXLtnNuc7GqEuL9jyWRkGkRyye1r2x9F9kmyMLub9jnveWLdEof7W"
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
