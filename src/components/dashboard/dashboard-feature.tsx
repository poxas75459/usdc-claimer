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
    "3CEsgPA2XRxZie4mzUHbgcBzBmPghWud9hj1zJs5NZMwdaA5tVWZAR6twyegu8bBCjTA8hTD69amKm8VCJzxV5AL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UsNo8J3AL5y4vKYCstv3YcvHe5Z1B5Xm36CiPnFi29wDanSDUo456YCFmQVbfaQSpNrXBKGecygMigVsqu3vMGv",
  "key1": "27ab1GgoQzxqRxVSPrPBDvMVfCdvfajSVYEr8RbQsQA8KuWVc8bHc4nq66A7Yyrv7hgwFjacjfx19ioN5tnyLHHJ",
  "key2": "uEX5BG41eyhftD4jQwGfMnFBXUqtf2V76WiuX7tF5Hu9S3toMmujSYCQHDMP3GVWqPguwFJJFEJu1EWb1Dbwv63",
  "key3": "5rxSyGq6gJbSyinWfUDos7FDVtFg2botTFJPLyiL3ctSRoHHCvxings8cNffkTxeFeHx9T8Bf8jhodmpV9meAJPQ",
  "key4": "2g9VmdTGL2mchU4oHXho8HMdmDLuVwfQSsgJX15yD2C6A257KF2T7NPPjCvG55MxpS5JfT4VNuLHyqK2L1UN3EL4",
  "key5": "5mTRWQ13Egc7AW8po18VrsS5MRLDrZy9T5KmhcJ65YWUnfKfCArQqFNnfb85GzjsuGf1fM9zV6BdBA7Qmgx4Anmh",
  "key6": "3g4cfCSuTTCwJufxLQwZco9SG6VorbhcxaopxQAtUwLL6LwGbWXykF9aak52CG7N4toDKjskKTNi4BoSwurFgDwX",
  "key7": "2JGC3cCofYDFW7hu6rVumzXV9jsaeq3D2156YhrF77a7tSgfuWFNYGiPRtH67mxXoNxJJxT7TdCyfcRUfrGaQ8w9",
  "key8": "4maon1J55Dqhbz3uTqS5v3oev82uj5a7aDphUdEtQLKuTcKkD66EACtiSmw3APE4251Sh9RPDntqZxkBkhFbfQYm",
  "key9": "5sFTz82fks2YxRhCpcxFSy5MA1aygr2UsGL3AcVohXLfbMYuSf1nYTq169HyNdn7Fd9zEn63a59KsDe1bNZSqJDF",
  "key10": "5WDPod7MBjC6mUeFJ9snbRqQ9NDJvzpK2U8Tjw5me9fZdutPLMtpLZYviuzg4m7uhfR9h4Zg6ndgMbagQhDBCQrU",
  "key11": "2TGDaNHTyzP6fzjDZj5unajDJqG5pUKXQUcwWVMbjeNPtiipHx24sW7KSYGruF3pF6rC98Dov1T93jFDDKgewxiB",
  "key12": "zz3fCqWXciPNtKZMWYQDTSG1rHBHqAJrv7h1ktsq4uXxP1h3ayrWzQpFG4U9qp3F7aoiNi9wr2JpDh8XF9cCJpb",
  "key13": "3nVPRcEcjQDDpzxt1kjc9xn5w5Ba8CtvpG6XtFWfHQHoAY79pPoE48woRNZ3zZA3N5Pf69w3XCwuH669Yvia5heV",
  "key14": "48N76J4KuDC54vUzCFHUvXN2Gbc9vos6h9vMwtoMA7sC3BYrNQG9Ui1j1Pz5kv7sFqBTrMHUvE4Y6p2tfeK8n6G8",
  "key15": "2jrDz9DtvZmENA1a2KdbPZKmGs5bt8sXbc7US9JHKxwEb4oJgr5o34CDYWtcmQjvdemagM3BJzUoCabTwCoehiaV",
  "key16": "wqVftgC7gaweK1wHSzZ2cRJkVVMogCMdj7qr8KGUgyfpM9JK8BBpDvNRVrpybitZDGoGprPYu1Dtv2LEa3pbM31",
  "key17": "7MpMxBVi7WeN3XADhuT4vMtUSbzYaMKREQFFypiUt3gy9eGAAreFBSvL8MCJVanwmEozzYEfeSmY363FTy1pqCV",
  "key18": "2kcSALjAkv4zPTFPbWLMbVtJGdSYXGCa1YNaiP4obkcUbi8mQnuUfpyM7xRpUUrN86PTJbx4SJoWuqmXE54u37BV",
  "key19": "5pYLZgULWYYzeoAkTMzZLcSr2hDBBnRwQG9voAoUJhdRSSTg3LR6e9B6baeLary3nF6a5pSi9Y8XEYe97KNoTccB",
  "key20": "z8LNr9TEY9q1ujXLu2Age2hABX1sWPtzgdrNH6xqhVUEVGN6C4YB6GibzCzseRm5yEpd9AZ5uWQzDrkUarYto8h",
  "key21": "2XAqqy8VzR4SWy4hgeN64Aaq5tpqnkJy3mNCBXFYGbpCAcxz4nsrJVRp3uBZop8etEPpnLMTqvqmH6SmAse6du7P",
  "key22": "4trZhqS9ALwmHeYAbivYNFrsz6pCbBFGLG2FUhs7un8teG3CoHhGmjkWN8zcLywpturwrsgNMSc1wW4Yvu9FsAQg",
  "key23": "4PFz4JyCdzFS2oSRzPKwVnzeTiAJxLfLGvCr9qtBLW1xPdpBAf7RvPUArcgPv3UVbBBxPy7GZdrCeQz3hi6faQWw",
  "key24": "3Yru8VAZpkyPHhmRk3WJSS2XsGKZzhF4YmQTpXzU3XDjvruUjcNZF6gVq7Ey8HsXCd3Fg5FJGRvi8TbnVrEZKAZC",
  "key25": "vqEa7Kvgu7YYCZFAeT8LS84CpBAFVdhPzcumgjiuXC186jSaH4rSMZRowPdx5yMEqVDGYviYwdnRucT7zkXNBq3",
  "key26": "4bZcrayY1o1qQSfLJDVqQaqgtcjSYzZKcEutRga9LjXH1Y83u5E9kgRaBFe9TPVqtptUZjtTWkf4fxDsN5JWuFtX",
  "key27": "4p9bvtA22SdVeLHC1uF7A7J5VKUJzpEXgvBGb1zF8cXv2gJ3cskMZtTR4zR71x2vsVtQr4oz42SEozxixTxBaqBH",
  "key28": "5Nu4WJkepmK7C99Pok2j4P5fLSyLVhqWXwNrRXDZtGFN1W9g6RWHbKaDFQUufjVb2uoiwwf3tJf9PMKdo9jPndy8",
  "key29": "5bVam4xZsqPbg4CznBbtjryY5aKq7cznAnRkKkBUJVpMzTXWtuDvvknzPCWjT7Lk1G8ecrCMxBWHnaVVhMPVfGvx",
  "key30": "5UzAew9jLQuemyK9jqztBdJYZaAWcxLQKMjkAHqgQ6PDd5jargwjxbighduyJEWbT1jX9HDBcYJJv6cJy8Ld7QGW",
  "key31": "2aNcLjQivUq62ecjxMpvDZRrNmKkc8KMEmN6batLdo41bUYuL8194PvgoyvZ8UnZLiAbigAnVeg3HCH1tcKmGshV",
  "key32": "2YZ2F9jm3XbDiQ8iNuhM8x9ZrTuagiWKXW9S8MXAh88MiLNPykgJ88KqLc4Uj8WGY7aLgjQ1zBsPpm9uWe2BHhJF",
  "key33": "2xeqozngcm7bseU94iKrrtiGi2icioM8XMuv8mhDrp5kqzZ7w7Cur1sYpf9gu7SWY3VXgy5AbHJEyf5ZAB4sjfYH",
  "key34": "3RFyQf6TL44NsBhiwSRDbP6VSH3Dd7CCfBXpDpoSHQfdgreeKHwgQUCxZB8HXPkm63YLyrGB9TgGtj8xh1u89GcR",
  "key35": "2Vt9EtWE7nWTuC6ufZ5VSWobZ9WdXbxAEjcfGTFJNSDxLY4uSoaHkjsQ6L8NvMkGRWYxyWaRCdzAvvkyeLG84P7F",
  "key36": "DPYsoAWzfR64ibYxBoR7bB3xgAoppDXJ7VKwM27ADSRUh2WyjFkdZBPaXRQDKH951gF35RfPvVtXgf2bYtRFRnt",
  "key37": "47p1QVV6f2cmbwh2ACetU9et5jUpfgcDi7RarsgZ2Xodb6oscBR8cMzW9nJWeKwPVhScyFXZ5h38THrg69b3X1ug",
  "key38": "4KRxhqQKmozgxJ8caByiWU6zjxgYrweh12CdWMSUtdohmJF9moK8KztJ9ZRwXB7DG7YwE9PzUYKwRFar4SK8HxVa",
  "key39": "4eMFdyCTBgc8p2uv6LtLGS3pRqoqkanibZujmHsbTJ54aCaKrev3MqRmzcV1vowgSyaDUbXTNNaFGW74AmEYSBKD",
  "key40": "5fhzL18ieYBQUUXJ3B8mvtsB6Gk8GEHAw23gSHwS1p1wgsVCLaWFGKw5UpgPoPSiHXxHZfddKZ2ayzYyRDncPJtb",
  "key41": "3o1bKpPtjkeJZWVRgAUCdYiR3ysbJgZxe1AuiZ9YUpZ3CvwtZWwgQyxud4yuZa7K9CDm4DZPwS4odxkdEBur1B8T",
  "key42": "5jAPmyqjrZxK4Ntmha3cugHsNgE9zZjVoM7kxSyaeBoCipjjS9ShzsvjS6aZA9UWbWAAEDSsWLLZNegk5o9uRUWp",
  "key43": "5x2NeZkaEbqJgYxWMyns2KBecUrygpjTiPfxtLxobdNKVeDM7e4AuR1YRXz1bAMVV2KxkgrAfY1NspWetGUWVW4s",
  "key44": "4vFboa25QVh51QaqoM5N93EDMGNCWo9ZGnEN8sAnTd91XwTB22GSfMhDS8o4y8Nr622NV3wPwKmoQJwtStDXXmPo"
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
