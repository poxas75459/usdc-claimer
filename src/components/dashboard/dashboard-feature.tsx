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
    "5j7bzrUwps2MYp7pEN4iqKcAxvTrgstrZ8wkgpZavhxPE1vc42WKFRnDtrCLdbWcd2sRsGG9wDvWdzGGZ7NHRnhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58VKNzQ33ht4fhh1gbF8pBVsx82YNnuZjNYpBgbSPDzwxHQB1E6a9XXDjb3SDL3T1ngHBQrxSbUdshXMCU6sw9cx",
  "key1": "2XcKMe3UicMAJArahZ5stPNzZVjzVi7zcz51SH7cCnKa4EcMSZDAMWC2n3gWWcCFmwmtCiQrutu5sCMdxDr2zpSq",
  "key2": "2fLMNqbzkVguB9gpAy74qtVdXs94gvG5So1gUS2F25VzcCv2GXKzSTHdfyEdZ6Z3sZNC51dkPd3vL1qvhYH7bbek",
  "key3": "Cf3umc3Ap38LfoJ5N8tuS4H3mLoqy14qghY2g67iuRNt78eCvpwFa1PD7Nn6KC2oT7udJj1vs2kNTXA1jvAU9Ps",
  "key4": "4niAPK2jhFm9upzMsTKAdEJbCH8zH8SQfzxjxgo7wMREuDYr7wWfEcogmb2931hbP5oEsczB5JpVAUAemz4hRqmC",
  "key5": "QWn2wn2JaNjdjyaa38jXK9jGEXufv74RNQFaehwKiXpK6DXUYamo8pVNQA27ZgA7opneJVAG1LwbND4cBEgoWCA",
  "key6": "2XWGq1mxZyMH2E5oYHHhsiGTLZBkFEKgWhswBHqeFFEMWCBKhWJ2tGgP4LxGRdym9FWHpYLRFEPfcwdcMurhcP5J",
  "key7": "47pPZGWFatjMFeVc8WnvF1zwZXk67vFVKfjKev4KaKJTL4KTdwcvGeTHtE1VAZKWJFw3CuJPxAcQwWXXgzhJjtum",
  "key8": "5Aa1sz4F8GiX3GDQncrPP2gYaiqaHvaqrXLNBM3E9iBiXiGGsMBxato8QwAKWoCD5UvmUevQrpu8gVUeL5zuyegT",
  "key9": "5iT6BRqsc8A3QSsMMLVPyi78Kgoqyej2jXr2NKK6HomwyVMdHggDLVQkYkH1ZsiFjcvhxT1Xx6YssjtdvpgM7bSt",
  "key10": "4dph658oxWoyDe9cZiET2KvRzPsVTXSL3Eva9fgQTVwrWkNnUuc8maS9XGYqBtRT4UpBSSV1Bo8JtjKKC2FLFp7j",
  "key11": "oSHUKNr3F7z6ruSsyj7wi3KRRQtr83Epv5Cx2boRhNXQRvnUJoRov5hQpr581CoGHSqV8nJK5uN4qcPKNAfiYWh",
  "key12": "5LgZHHAfqT23CiJNRbxp54iJeEGRgmdUJFZQBEpHPStiFK6SpyVWPU8YvsCUjs3c3yNod5HaHqGwG3NALNgz2WPb",
  "key13": "2a5jt2grU3qAk2HaHodr1LMT22ARKRz8uRNEhmNMmoqdcT6gUboWm7bVZtMnYduN9tV3F3yQgfzT2fydFd1PoaSB",
  "key14": "5AkMtmHiBh3XCfVedjSBnvP1WBmcxqesuBCroDKJAhMii8kN4ASdzMUM1r8FBNo6msE27QoekjzVaRApX5fVAgr",
  "key15": "4dgvW3sLJxs98TKys9VvQxkVwxFkKZgVWHgcpMTgVp8gAkXErERVPkib3YR6VURUNauLEDm5SFeVazXiVFmHZ7XE",
  "key16": "bkznWHYAhbJbdQcTsrEdN7gphAWo16noMekLjqRbVyPtnAEfriJ2yNgsvbM2CZjjDEBVnRgYgNFdnJ3K6b25buG",
  "key17": "3MUNENA2JwsWTzdQxn5jjW5dqH5hTwZtsJKxeHYYcm5vwSADk712ECecwrkchxESrkhdC3hVq4offy5h45D9tJjf",
  "key18": "34U22uYXT5EocjXeCgkrW8YtLKc3iSkQVYw8iceqGQYC3qb5xuJqqvHAaEfQQqEfXBdS8v4XDmu64xMP4RCSNJWi",
  "key19": "4a9vP7Gd8oqC71pEThBTSxVpjDY3PPF28cvoqBEMYTzyPoj75u5XVALvMh51xB8U1L2WJ4ZvGGzDpSLx3crvhzfm",
  "key20": "4jxfE5SwHLCpgXHbxLp7sCiMjQbbhSVsDA5QJcyh9yxuCiuHZ3zKQpziyJwPvkPyEQAwQsdmELd7wjAL6yyaUsYC",
  "key21": "3FSK2Ns7oboZMJabzeGgg9heDVMBg7pRTi7J7RAypsdGSHPXimySaafVgRtczwcyCCW8x1Y9QMsWe8DrjVDk1FCb",
  "key22": "2JySDDq9n33kPw8ZTFbjXjfMshTyRWqV54ULPF4orrKvbe6QJZJ4BZEaKWjmw2EAwK3FYNqX1UQxfN8P5xL8ip24",
  "key23": "3uHJzeme8FVkPKP5P95vTnYmYkHKbS7vnwibYyFFdPfFtFRVwcRowPLizZK7DrZpu818LGK6ZE8p2qXivY6kRmj1",
  "key24": "5n9MjmFd8jiCF1TZh8j6nWKhEYXR7zGaXvHy3CtqdRFbpwkpMb7HAPCx1cJqYY83bLLPwqLXGPbp9zXHR2uPvp4p",
  "key25": "cN6HLM16DzZnEzHyt5k51VopZ3eBs12d89Ku5fu79TGtC13wX9f8gj7783XjVSRD9nfm5qqBdmWzxisGcDAHAqW",
  "key26": "4QyXvjRyzG7tUcmDoP7jwvB7RnmzTJ7ge3kXuLUyN7dfS5d2qMpQo29Mqqf8243nyZRi4ZyFnmVfNXgNUoYULac",
  "key27": "5ty7rCw8MDiscuRUzx9Xyj1xoFcqJEykugFpmHpqwVFQquwigRkxnJVcpJQ69Ra6WxL8SM8Dg6YJD7aJ9hZtuUN3",
  "key28": "VEZw29ijjozWBzN9Lfk6jVWerFjd5iJuSWKHt42oSso7tDvU3G1W1VaxfHywCM4cPV2UsHjapNMiZaHFkV7pHpM",
  "key29": "5zhYWRKzFT9g4oHLAxeTKtKiUkh1XpbRuvj4mdYDdnZJKQNMoo791hN144TpYpX2aD7bNDsnfniCnf5WT4cMR4A7",
  "key30": "AWbgm7GzVZoZS5492k3bSjL1o3N3uiTxenT4YWWJk6pBf4jDXQbiE6yFpbFAQpSawxfh2XdsY1xaVkQJpRk6LbK",
  "key31": "5LwjHHQshnCr8XnYu7XbxdnM6LyHhiTqYu49KBJbimAfVuz2rmwkdu2KqrJzDWjL8KaSqpW4ASKNbQvwXiXeLKPV",
  "key32": "WwP44hqR5ETtMqQWYrvRfqbLnS6XLDVik3h5VtH5SxjuCBs4EuZSAMe5yNw7PVzJk5jNL93Rgr3riHxpkUmrsz1",
  "key33": "4vqM9Dpdn99cyWhbL3xznyyhPzNKNpAhqptQAU5UsYQxiPTWuqfScuiXPNJS2tsuPWY6ijjxRRhmfvneKBUgUDiy",
  "key34": "668dKYQxzo49LELDn45zt8erEJiGbtmUGSM7c3an1DaLhdasVfbXezvu1tQmTUKJ2XPxk4me6i5BaomMcM6teb4P",
  "key35": "hqVHaSBzLMqVz3cXiWGU4iTTYyjR7EW7DpXdji1J4KiYpKq96jqmCALpAUzssyWqxQAHtqPRGJh7EEtdYME98ez",
  "key36": "PiVaYEaPUFUsc8AsHy9ZgWeCNyrcbhPBmSbhXytBqiy25qbeLCurBv9QaWAXEuWBYeyWA5Bj5KwnfRTxkb6HwBW",
  "key37": "2iwfnv7Pg3xQ6snwNPRBdetscJ8c1CiUM1eFdfT9MfxrQKgyKQTtcA3uMEoLf59fewk5KFe7DjxVRSGZafcRq1WY",
  "key38": "4qN7JZsCf7j7iBpLQMDEJRoierZejS2hjvk9S4XfZG69T8XYhRRUXptHf8aQpwcryutw9P599RL5spXrALL8chYC",
  "key39": "4aSgAoyajHBEX4mPhGxmXe6TRnew2MfN8cuemvFGJoDRy4hFUoAFKMXN1PX8baiS1UxW1JEcfjLpMPExiki8n6Su",
  "key40": "2nctcn6bsqwYW5Qta7ra7jNGyZbmgVD9NH4hxXXbdTPTkzosavoEeDE6gsgshdm2JgDuFLY59n1Wyqq7sN7BDcm9",
  "key41": "BHzJYfsSMSJ9xeJG3CAa2Rkz9nZuR5j3MuhPxwM7fhqBb3sFLjCtF9f3MdxJoJgEW2EXeLYyNcJx5gUsm7ue4uW"
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
