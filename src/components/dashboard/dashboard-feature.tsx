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
    "BZHZUXeWcNy5b3rDNERJbtVaztT9ukceGxaVQFNVynp5htcroVURvDnfmajyymadDUMMDQuwdsjmzfRwZ5QoNp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N3EEkxdyshyRjptYCkF91pXJAKXkQkBcbyGcf5zHkfk4hHJS1mnH7tDcX2psFpcNBgpcuuftX5TCGDgSrE9y4Hd",
  "key1": "2TdUQLJoi74ydmtR1p6H2xWK3PLDqfViRKzs6YMq5ZZHcBCE46oE95nGoEdksFX72gmbUfgfDuLrH4ujh8xZgqPS",
  "key2": "5cAyrzmzoGKQ5efkHiHyvy3EmpsU247P3etrzgi5jhxDH5Dd9pmcdMzRndmUmJnfzAc1kYVNc8AZAkqopjR8fhSb",
  "key3": "5snnNPtLpoAv7hj6DYYTC8PnbsQ5cVNJbCSgoff3FZi4vDQK1PeEfYYeySxZFUpWoCov5xS92qUPNmtmkEBChu2N",
  "key4": "4jVT2ewXFDrtn55PHfJPyV7uekswUX7BkiRjfL7oytQR58gbzD3rDDGfyCe5xv8Qcrwp7tisK47HFQotybx5KKAC",
  "key5": "P1brAhGQP7MdkMpXdghFHmAHsXPP2EAh36caSgU7eJuTX9jDmsYMJMMvpkaj79MB1vmSNAzgPGQvQ5CxizrGGK2",
  "key6": "31qrqP3R5iCeBKbsMpesHbLUiiBkCk9RrL4a6DCvhwBknTfdSMcyiVYjjtEbtecRHJFbuJSaVnZSi8397ZPPc1nG",
  "key7": "2UpZC5C5o8wNCUvqbNZimkQ37UXAjHzKo6JTe5JKykDdjbx7ZymoMssUBytNxWx5KnZ8TFMp5GTVTRBpXEE9LcZ9",
  "key8": "P7ynhmBd23kwfP2gPLLy5E41qfF17RE3TiaDkPXMM7ogL8u5hV6EDqzpmbJ2hFUD4TneRkcZHh5JRFgcGWovABN",
  "key9": "2Eg32ZUh8uiSDzom2ukjJF2wynSrcH6jX5KqvvNQ2YMkVz7jRMjQcU7cjTTqignnzRMnnRMJn78aQCQrqC9zcZCh",
  "key10": "3tesKMwHpNpiMrByoEKoueGo2zc8At3askDipUtwtbQB7E81dyozuqSPT6LJhTkQGXiaPnUL4ZirCVpU6k157w1C",
  "key11": "gpa8m3eu3cKaE4z9pYS7AFtPYB2JrRxwdznvUxtYM2EsDUnxm6doS8j4jrEQgrLG1u38LjsKDgYDvk9irCukzKi",
  "key12": "3h1ryjtFoYVCbvLKQ6LgW3sEWRbGZ3kstrzG8HTMP53fm3JeYS4i7Wm82UUB1ct7RmUm4zra8ZohJnkzfbFzuZpr",
  "key13": "C7SZCV4ueoxJVe6GwRQ9KpphMrDoDvkHBFtjoY3V1rNjjLaN9Lk3ojJfpZJpXNxDkHuk9Rm4f2Qc7724YpCWLQH",
  "key14": "3CmEjAAApzbi6E7CQ1DhDpxog4oMuhqNXXwYNCxELt8cy4jSy9Qx4FNEAmoHrCS9gJ7b8LESrQYYbSy2RBF7gQ1f",
  "key15": "4CEHwpQ16DqaMrQzCTmvjADFRWuNppaz8ph5VTwr1QDityXNHDzSzMEJuMGyHSp98f8CmirkbLdVh8NUi3mL7rLH",
  "key16": "4QSXZ1SZaR7U1LPWvLj5P2RaxwJ8opPsR5hwGV2tqqTadMV3SSyw7MmicecbwcWA9pFjFZ3QXPJwV1LXMCraHPuv",
  "key17": "zxHMMo9mkccVB4rgvRDKsVDvGnYSF4xXjBB7mb52YfyWnpiWQHg8ovpDdaPpdQeKViQNuyA4QRQdYFqAhyTjnNP",
  "key18": "fyfM6VZAoZe21qNn9rdSjfzAHvGSUmpCQ2SRoEaSUUmjmg17RKU81VfmTYQpMT8aM2gPPgvQ477DGFDQb2H8nUY",
  "key19": "3fAbwg8G8xrAitVQQD79VTDTuG4Rhk9taoUAMGzMbcMNsQbSikVUabKYRagK1kxWcKFCxFCBwgUocGbLa2LMJFEC",
  "key20": "adHCrpSn4sRbreg7crnnLvbNDWdzLjf6YppsW67Bpjk2ghMMtUTyZqgTdh14GnCs896Bm3aPz13ttPcFMa2bwT4",
  "key21": "31rSdjRr9KnkTY7YgNCmNgcv1bgjMEHfkfxPRJRDM5Qkn4gRpuNvRCvBcq8fskAkXt8B1c2mHDCeex8YMifNphyb",
  "key22": "5m8K8CyUUrCLSktbtErag6sjPPW6U8xLhd2aXxYaYubjsvi4sXaGJVXs9Lep11BDxC5ZxeDh1faHcY2jkadv7XxV",
  "key23": "4ukza1nD3rh4WeiVjbSVQWWsWvaoFP2CkmipBKzswjGh9m2Y1S93NcQ9FRjccKL7N35EhHkp9P5oppMHy5nCF8GN",
  "key24": "4qHfntmWmB7BacK66nsoQ8D1vMt1CRvmNmtx9DhSv3h81hf7on413utENiB5bzN7VcF4VqL9SaiLQcyaMW2A9s8J",
  "key25": "67KYudNQ93GRtcCTY8bLUR2eRCiocQzHDDjNzoe9NTQCdR9ng2NUrsjimYhiVAsExUTVjqh6rHCsK4qh4yoRtmsE",
  "key26": "3Y27QyC3BZcBabA6JMXfj6meSkLADm3XJ5HnkjTRX4wj2DRhBwhQT2jq5GQECBqM1zpZ56d2jA6TvVQwaaSaD5EK",
  "key27": "5cY8PVKPRG92JL9LgArWzWmpWV2CYBTvanNhhWnoK8BTmBPvsKa3b377zSgs8LN8PWXcnZAM31DvvBRY5mTfCSR4",
  "key28": "52aXDChtzhtChfzAJqcZSXU35pTcnnYzzD9xdXXqvLrVwWaJWfFNLDT3yNZ8cQzVmTY4N6pPbn28FZy9DzQ5omyc",
  "key29": "4QnQJvV7o4RGFxVLibUNet6WZSvcWhwEP6tCbyobaoBTGUYi3o1CQpMYYrMTLCu375wdV8Tjios3EGDmmYnzWgpW",
  "key30": "2P2aFskZGHpFEqn6EaMND11KhdZ38pukTuYhMDb5Z71WTELtJneadzedKWXCNPiNTa6zv5mLpRcC1d1M1rjrBANS",
  "key31": "4jJP7oqRY8wa5GR2rmkSiwJkRUjcg3vJKZ6tVJKQVD7XgS7xu84UUAUN1wGTGfF5YJN41wUkg9X9WEKdsqe6L8qu",
  "key32": "53CUEnBnetbA69s3cu4Zrjy3THrHdY8bpSRotxZmBW1yBsZhsJQ6PS61B5CKF4y2LDWY3iwFsduW6i9ogY81aQcb",
  "key33": "rK5hBGb91BqVpUGycZdJctG5eE3q1sTQ97wRLaiZ4CozQSx8HnzXb8TsaMzps4tukqHCZGxzC1uykC2qrcJ3C4b",
  "key34": "63i6cdoEo7avyGSENgGzuANuq3DvfHusQd1LfhY7RSzzjLhmV8rXJ3WW6EhpVaV3i6erPpYbsYxVxCWW6np7kXXm",
  "key35": "53PRtNtJZCx179q7MEcpFYav21ucGGyebnKt7ghmvnhyKvq3SMWjSeJh2C6dmQZ6PhvyPopHsb2JzV36AE48j7d7",
  "key36": "3TSQe4F5dCGN1jECMXf94KAxazMvvypWtuSU2LnwzMJoNwEV6M6aNgoEjZoz1tSfA8YoYMJSN7gjkzs8eHoygswF",
  "key37": "61FGFbZuKRSSYUsRZLkpEQf3Csnnt7bKivYojWMwmW821hJ3hwgLpNsmT9LVFfKGK59X9s5R4F2FGPeCgM4nAvau",
  "key38": "4ZLcmAhVibPTQQRA4K2XJdeNNZwdMpFqSRidFczF8kCWyAQfFELSATE6qQdQxNC4ZnCsV1tgjweUygQzFXPtfk1r",
  "key39": "4UnEbtmPpLW4qys17vBH1iQo6XgB5xHioLmjj7Ux9DyMA84uYnEgxhrr9R8aaMKoHQ3fF4uCsZNRJzExTrSA37TZ",
  "key40": "vwmXDiqHtnYa6zLsKsti3JAERXzjT4DZYVze8CkjbfY8N2T7XFwqAPoF8hEpRqHAGVVwr36xw9zZA9PEf6A1oni",
  "key41": "2u8UdbNgmuqueeZPuyPvFhW9F5GuZd15uLTKnYcxWGDWbLuzssR5LHjFBfJbZCsXbkx6bKNfGpeVu3esNcNxCX3P",
  "key42": "5ePBC6gxvbYTpk25ZwjaMDdkGbrFt6QjatbSGF9rNorAZopKiZA3tEDi1bBby7kujLxyQrgiELsxQp4SeSt95Kht"
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
