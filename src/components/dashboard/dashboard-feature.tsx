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
    "7XTP5mZ4Ccys5qzFB3dVAGcxzRrhn4Hwr4p6rKDLDimBothdCdRq39zpQG8ALZG6GAa7p7XD4a1uR2678quKdi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gNVRtrVLZoUnXHfwzQQGSJnG4qNkU9NTyphiADudcUL5c7kQXk3xVLQnAa1s2LtX9F2eqA9mf41Bphn9TxPCujG",
  "key1": "2RwnBF2WGoGX7W8ga7jvhodnZ5WsinK4zfDMQ7GeRmFRNWbvsVmRGsCvEScCiuoVvug68K5J6EarGyF5fhRPrPNk",
  "key2": "2gyZHBez8zwVLzBohMACCVm86Dv51wTgKqGqD3zAsRiDEQQZRvdTDgetWsG3ktGxt2kqJYyPV4b59BW5DxwKJoFC",
  "key3": "46FdYanULk9QvWps59TWrDWgVXsGsM9Mrh3CKhcEFsw9To72w5b95wwG3kLskv5j3uJMBtQ5y1tPErPwtV84Nsfz",
  "key4": "4bmF5pqftnTXPQaKGJ4PUZetCoCLnLt9FDxo9DL1ubfGz4Fu4fb6C4X9ajR5niy3h5KVu1hAQEahWKkfUE3oqjQf",
  "key5": "4nEdokbpuFEzr99ZsHxmxGJrZBLvcvNp2L8iLQGwiUtGYN56oqWGhTWwasDKrtaLnSiXfZo8DqggF4G51ijf7q3J",
  "key6": "4VR6NFrU9T4XbHH1TrhPkF9ZoUoenDmXbSwdQDYwdPmSQg2hmZgDNJTqCEQds1kURbbAZLg8VkuJxqqx7WqzTrWC",
  "key7": "31oti3DNMhgmbJSEzULCc5pHcSGrrERYqSQxkAaqCBcY2W8jpEtuZLYud53y4cgmCUUzp3qD2oha4nSyHbnzrDJ5",
  "key8": "4pTgg6Lyfc88QVdAVdxwiWddt5ZA4ecYuSBzYbCJqbYSis43m1Bowa4qBzCMekXVwch63UsuRC2acQiR7pMtUqHY",
  "key9": "2TFWE5xJLA3Fv7cS1YYP96j8z8y9UNuN3f5MuFYWW1SnsVMLDnQvVukHXqD8A8xWSQqS7Bx96ibUiEQMnKRsRBmu",
  "key10": "8axNC3JarGXLNjvfKTf3vy7gkje28Eu6kLxDH2ggQWftHk9nDNDKTVnJHXTXvAVGMmxCR1o1UK9kUJ6hqqZLNYB",
  "key11": "5j2SVLCkSQV4fwQFZrqTQKaygb2zg2P3uW657NaKS3vn4sFkr2NMw6CSZXfVW5FNyGL7bKnHWoD87T2mu25naCGi",
  "key12": "4jxQhvGaNJxvWSZVQavMhD7ixZzDB8sJWdua2mxjYvSiLtTTrT4irDs5YtQzEjDJhLfrosDvWVcMGAXNvZ6vMEpr",
  "key13": "4HMx2F3JRDYuTNLzmUxtpGFhjrt4JLg1GnAhe1Br7snQNPUXyCMPwVkqfPqsH9FcpwfWEYBPZi4LJq7PenJWM5Ej",
  "key14": "za9cF7yDc96jTw2YvLvtMgzbai36MVoqNLKEhwa9H7eUqTC7FsVCcrudad4zMJTPhdoRJpcUS3SBWH9TiodofbC",
  "key15": "5ef2mSS1to2CMQXtQvfkiv4bphkui3DyqDX6dyG82Y8SArmvrffSEANSN6d8XnPx2vskgyqWJ4BxZTe2VrbwNPQ6",
  "key16": "3xnp68uSP9c24FmMfFZpoiW9mR22FZmhrYAS83LJXAK3SA5hTajtqzfD7b9YcD1j1K4LkYJSBkoBALPJjv217qq2",
  "key17": "5CNGFnitzLXP9dBEzg5LzpjHkg9ZHYZKBu64ugz73VKPZyc5VkbkqWLNVyXN8ynz5RnPv7EMJV29jq4FYtWy26nA",
  "key18": "4xxUJAKJ7FdtBqjAWCHxswzRWnV4xgNi21unq5uztcL3n6mD5JawPnMqzY1UxLFC7mukZsQ7HLWMYEarzML3aWCK",
  "key19": "5j6R2XMDPtaGLhmctV6WtbDxtGTMR6iJELARtbe5RuW4PNdbmnqV2SRYRhueJRiapbur5mak823s6mMyjavVw8N6",
  "key20": "2Ly55LUTmY8EJb1SytsHwxPV786NHM1fbJMYsnAMSPcv6NPCBuS6jqr7hNieB2kWqn5u6t93hoYY3LU1MyjZkduZ",
  "key21": "5bQu1Kpv98eC86V61p1DLDR2HveG4soTKxRzLijSV7etBq3RVHxZQ2DQMtTwQKhNX9CpzNy5Kgnh9hR86v8porvS",
  "key22": "4V5dWwgk5jP19s1JKcfhyRqc4VNjJrfkvUeKnQd6tszDeFH36f5Vuu78bcgaNYYrUjhDqQkzugscVr4t9CsogU8v",
  "key23": "2CPE9qYiTqqwSQ5ASuuNaDXuqxkiDstCxCr6K7RoKtd1dTYXrkrDeWSVQXEDhx6JnwTwaM7e1wNvpvvUCyFcMUEA",
  "key24": "27iuyoy2K7VXYThcqUSnRMHkdL7oV8ax54sVHHSA4TPvzRLYvSJBBpSV9bwfnqHsmCzEgzCfKrjykR3kGH66g3fE",
  "key25": "3vcbWTWkPZ1FPXGn6j3xvkojRQQ82Rp9iMH1R3x9qUmwLQqbmzg4rT98F1gs8kRksv3WzkM9Z3N24eQ7ZtPuVx33",
  "key26": "5bVt1fSyvFRsoZBHANLUT55toZLz2NVmofMCQJVSVBdxB5cyYuzqcvVpNZZvKYAD9GWLqxqxHdAnLETb2bHPsoZa",
  "key27": "UxyXr1kjAxMSLGoiYL9jWf7camjfQDNGLibkNsJJxvReniWtdjp9SVdoEGLFPzCyazZzrRzc79VKV8AVYuycETL",
  "key28": "Jpi8AjphuwYP3f7eTcHCTYwzwVC8SZrWwHbJsUhSiB7qPLdkY34Vz6CCSts6tfiGwUkRiWCa5uMHdpydpQ5SM91",
  "key29": "3WiA66iEDcUSwt6DdBVjzvrcenNv1e7DuU9xWBsgzC4eFRQTKHC4kuq6U68UcYKMDmrqCLC6tokQ96B2fK6KvFh9",
  "key30": "2Pp38XABnRbiwdPyyJqE6fBfJQJYXFN1F5cBz9QzSxBmorF1FN1heJTbjqHasvtithGYwNDpTC3kK9nHRqvtCuTY",
  "key31": "3nXy833ThNmFYmzGq2qU15xTg5tQzug62qoC2biPrT6mpqLjtSDCkGSXQpU4DA2DjxstoHyipJRETVL6VLTqnvqU",
  "key32": "4XCegF2DyijajEtDk7paGJXMfGKhaddX2Fdb9iQG9fXYeVB3H23cng78DgYNhwXdf4atBLU2Din8voNL5CoUzWeK",
  "key33": "SDamAS8i5hoTJ8EPZuRqB39X8S3PSPv3u4ve8d1pk2xF27sw2gNpgN1c634zDzN7eort2NJuX6iZ6BD2TFyCihJ",
  "key34": "2s5iHxp3R464SMmJwdXXH21rjAogif25tzwsXQZktNSHufZbHhjXqrEAi1sjAMFyV5uDKMFy6C6rYYxQFuT67tNk",
  "key35": "3zdyrxEzH3g1QMnGVPX5MDnJFbvAVNaqKvvQkR1Mzk1oRhHDZWkFRyTW6cKT3fwD5N29uEdyciprkdFaryCXJ37w",
  "key36": "4mApgkahzCmxNU89juEmnS4xaj4vMBPNE9sbu78Qnosy6kJJ5uLW9coXMxwDLWnz1YhYRG2TEYEBhwJyf2pdWzy7",
  "key37": "5yPj3NtD6845rPJAqUPDagGmgPXgvw2eYZfmQw2VsYW2joDtrV1mCYmf4dj6inZxjQhZ4WHUz8ksWLv43NURwVAi",
  "key38": "53dE3imcjJn3dEs73iFnSDLaNJojrPFvY3M6XVE2tpL67wLY4DM6Zb2mLvAKXFZNDXFShywzG8AFx4zvrCsRki5q",
  "key39": "2bQMVAgpBHVF7CsJxR5tws4gyuo9BXPsmZyBmzUUyBzmWhe8cwvrvcaVM42LT9oyDtW5FtZpkYesBKQxzfMzfP5",
  "key40": "bQRHAFQ61G6E36iBXYHt3fRD8Sgd4WWpQRmgB438iZ5FQfrTgeTxkDRpAwgthf4DrMH2A44PfX5U19Umnxq2ZVk",
  "key41": "huY28NY5KfbV9PS9b16taW3g65Xz794nef8gRhZPNS3DNG3LhZABZ8wGxUdLLre2r8v38W6J6t12vfK6XX7DAsV",
  "key42": "5ngYZ8bUGDU4L9WMGzUh5DMSFnFAHo3TroZQmEpV41QNFiipgp8Exjtx92CLdq5iYDc22jtwS741ihzSC2y41xQr",
  "key43": "2sX6D5wHTFw8Sj8aYqrXV7Ah2xcKzgxFrdZKngNf7gW1qozL6SY84HPFNHmgb2vh3xKPz3GWc8iLudA9oHKAYD3L",
  "key44": "3gjzw3K6RmKqG7oJ6hmGZV52ejhBUmiMxNJGHqLaaujnvdSH2kbW4fZLM7B6dYRjw9mbbQsiupeYgefF3Y5GNxDA"
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
