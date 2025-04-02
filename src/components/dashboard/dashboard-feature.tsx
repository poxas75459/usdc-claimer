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
    "5vqkwLgP7JgPW4ggUCoQee8kYxJ3gTwrntmJYTy4Z3zNbTGRcmr3KraGoiTo9nkRVjdLQrQQVWzCXQqSPGdUJP9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oDTMoQ96B8BggfFqWgWZGhYkyK1WLZRjx4uknTygurCuxtUrptdaXFycSyfRS4A4sPPu7HT6R3q3AqKudvqHBEc",
  "key1": "tRU1PC8qbnhNZsice7KHT49cyD96yK3PzvhzCaJ5eNk1wrNmuEDmzGNgMamUDuFzGNDW9bEZB9adZLDS19uGy7i",
  "key2": "24byRAuS4YwojCWZp4zvcXPQ4L7ENhPy9FadcZkVkSz6bvDL63Kr8M1jGbz66KMSCgHfakGsBsCribbuTR94wTV7",
  "key3": "2e8MJCK3NWDKecRjwkJJBXpd9ZBVJSPXAkAKSJxQoXkArg2shDH3RMYYsEeG69UD592wRj4tKafRRuNCAYxmYCwx",
  "key4": "34ajMwScD2r5vsWGJVXjkLNrEG83BWpMA2n6L5VibXekoCvt2Xrae3XpqD6Dm7Svp7qepbUxDJb7L6Y65BZadHL",
  "key5": "3C4pZFVA4dEBEWpb5dWyMmYLqjKuTLXtJ17KT1pPd2KUDreoB66Y6ftNjE2mYfy2PHv4eF7g935C2r7px6dGf2BP",
  "key6": "4yYULtZZBx9Pz1f5sPkqgddEQuC1CTUtm4nWw2CN5L4KrcbsyLXoqkALtvBnbgHUdjqvgeGu3yobRCztKtzkRA3G",
  "key7": "3itSfDSMfJzMWJ73Cjyecja6do97LeTiZ5BV3cNRu4UeMENdDEMgSz4mVvyZamMPaxT1wvqzpgzjixT9KX296H9g",
  "key8": "4ZXxWZd3ZELTLjZKndb3LtitNwGBQgkEWkSqY7zAJp7ZoTx4tfjPUFDv6WFFzUHkywuFD6EGHW8MmRhEK3jQ3Qxt",
  "key9": "5pBDkjjc5oNLJCGw1S9hL2op4p7hhhe3YtEz5yBdDk8XmQfYwrUBRUSy7EmwryWFqATqAg4mVVKPTUkUw9w6Suzq",
  "key10": "WSJHLxysj1e1itQC4TFMCaFSHLPqSJdaDyayLBJdwyN6NYBgtuJu6bCwUY3dYbbgmyYatCXAarZDBEfDtsBu8gZ",
  "key11": "XfHpPmefozsu6m2Yj6fgQUfi9vWJ6vVnudEFzQSAttT81ZwzzoWupyF3L6hjP9G1PBL1yQ33WmsM6CAkkT3Vgya",
  "key12": "SuJ5CrFwN47Nsyv8cS3PwR6qvpzuSRohXqwDB3V73x7UzRUW9hu1c3NMoke3QkrY1BDiwR4TpmtaLaPhW7QtBCW",
  "key13": "3wLUjzWT2YB9UFEmEmDPzh3iDAP2rbvq37SJhBuBFF3sTt6DXEwrSCFB2FwKdSdC1CVka2CbY47Pq7xYMy8W8zRa",
  "key14": "419BPqh67uw7FrXThhC1UrQtm4Jf4mFyPmrcaPCX6GeHkKV9qLyctP7EunRz7ikNyrhnpc67bketmHF6mdAHf2S9",
  "key15": "32ccFXbat4rhEBp1bgJREUGQHCnKrCxMk5j9BEWX8qvf5ZWNNESmkK2CW78pvgNrhvuozqeEQcNs685fk1PvvEZa",
  "key16": "5qYxGvFo11sm7RA7pcCSEXsimxx1rebnFjmRGedd7BG6anfzJxgbUoEC55jjyDimbdogRvTh4JkWhg111MDGDrhf",
  "key17": "AT8pvLiPZefWmAyQETZ8Tr7bgvsnmYp1SQWAXNGsdknDjFeDCwtnvAXp4YEnKVUBiwicBwiLPLuJMweBe6Jm62v",
  "key18": "61z1zveSvwK8VtCqFEEd4xk1rbnaDCruHvKwi9j4jXkWgzAsMAH4GKQUR54RH3sc3hhkxWL1WLcfSt4tLTsDgbeC",
  "key19": "3aWiSUgYPHfKbCLweFjTtfZBgatX2FTaotH5jegCwZu1wnUsQCiVXtmDeDCpL6ANceeWWLD3kzSRevnWmcyAkr5v",
  "key20": "4M9zwQk3NeAPa7fzzmWb7dKRaLfiZDBvSJKL9DPoVwDbjBAKwN9Zw4m7DmMoAhRu3CSRsWL5uJbkMFhzKDUC3gQy",
  "key21": "4nkwFkT5nFoiG7ZrCCQAWnyxw1y8GbiJZSfC31Mib7GpNVywuMJRb6nLVvYzQiymwewZMtGc7hN1LcR2k12NuERH",
  "key22": "4Ny6Z9H9eSJytP9azH2Rbbq4V5j7kyUDy1yTyTogcdxxyuZQy3WUH4NwSp71pLEcMXfxsAS3Q1CbDTHD3is18gsd",
  "key23": "3e7QMbjpzyvi5CibfLULXVT9hCXt2SsKX9DjD3mkVZkJNrxPAHUR3sqChdDPujVWmV3tsCFBsaNbQwESNG93BhAH",
  "key24": "4VGiWE8A5fXdqbXN1XYmEDp3pKDJSYsLbRn7qZqYkoMTeDgK8bbo96KVS6PP9sxZxpDcwhmje7gH8Tm4dn1Mp2Ze",
  "key25": "1EXnwMA7o6ye7PKiyNHCAVoh1kAZFPMwSgNP2jwxVxdjjsGWcy8MUkzFBZ3XTSj6NL2bAnbc49whUHU6n3yfZ8X",
  "key26": "65M5bJd8RfpbWkXtuoxbaAaoBDSN6P9nkFXrH5o5G2dGuwawgRLZjEwx71ymJLqbqwwwv7TmDkQmgmqzTJQeRYuf",
  "key27": "4dgrx1LXqBNCSbduMMdZKAuRcDLApnhWE2KjNgVwaM9Qri792vewwnNyKiD6gNifQTPpifRKHdp7nXvDaZRWFbAo",
  "key28": "EGHFbrrTRumdmvfJMWDy8kMYQ1VM5avmkZQSqTmSou6i5kcNscPZDj1eVamDeBfP38ZjFPMtzgHxopdbxXSXSc5",
  "key29": "2Mckrj7S6UnYhcWzzqNLqa4TAonQiSZZQTpGLLCv2nww5BECYKLo3yXeG54Y2fHVycYN3yoVfHV78Xs87LJLK3Dt",
  "key30": "4opMi3EoGDG9KXkL4wGzvU6QeaE6GVkq66z3eb6ZJawJGuPiEANDw9ajY5kQsXyS1jcaNCY1Fcga4FjSt1GimSvE",
  "key31": "5rhKH4cxa1bfSySiffs7WD2N7jfrV3ytbYhj7MkyLaFCBJ5Rs5zCcAQ535F3F5uzDtnZ6YHSiVzbQMLA2PekfC5R",
  "key32": "2tCxiLT1i9uNCqeQEyHPP3vnthWMVA2yiGPFh73UUUVTm9U4BBHxyjaQbfQVRytJnqyFL6X9ERuUJPiZNuhvJp42",
  "key33": "PYkULTS3h31LS4QLKY4TyKyG2Yi8MgaSHqZVg8UHwKSwfjSQLuiXwvyBbszPEfrbjN73eFXFsSeoCLTW1hYZ9te",
  "key34": "2cXnsnUcGXtRw8RJXSoKARQSrQhorBn1mHBp7TTK3yG3Gqk6FzgcgSgSWPVFzqX2mJTeqXvsqV8DtNQjGGsxu5dp",
  "key35": "ShJgUoZvo9aJuEznJpE5PBXHNmzWcUQhEASM2e5YhYMtisCoeK7zUDTrktanR9oksW9UjFbHXGqCyJNj1P9X2Xq",
  "key36": "63ezt8frEqCAbasHoSUH2PmWyPBuf64jYPt9QRNSV1guidnyp4xFbwyKkAaxQRRYTanBnS75bxaf7PNfFs9en5HW",
  "key37": "4hWuFasWpSFHFkt4euDqD8Nc73Lo2y3Dtu1RuXxHydmjbbTevfWsC4gRiJJYAfQU93CNQqEenuXums3n6BM9vMXY",
  "key38": "533ZbJy4ksWWjBxgpmypKSTV1c3UYVFEiLjov4wk8QPvoN9rFiFNQKEgyj4iKKUEyUdGHWyRUz6EGCwjeHMWNrM7",
  "key39": "4HJmD66DHAnMB5fUxvwSPBTxScFzoCGwmmX4YFxUhD8341tbxzzaEyvtzbBVo3BPr22KwiVpWC2EwM3TPgdNaX9Y",
  "key40": "dLgNr72vcyiGVKQ1xj8JE76HNbZXPpatEpfTu4ZFSwUe8xaNEqcqswg39YU63sKKWwJD4CEh8PPAAJiPapA9xVq",
  "key41": "2SyxbPqJAoDZskDcqKzDfV49Eo7FiKu3qxAyakxsY1FHT56XqLdkXzVMqgFSiYgqWipxXxTnW7yyPMaRHxD9gWWq",
  "key42": "5tdk8EY4nrM3He7ipomFT6XEhD2DVjfaD5j8DwcPp52n3XyR3n4Tpm3xpdRrjWaKCMubEtvLNJ3jQYogaHuKw866",
  "key43": "4eGPtQGphZEubDvnqYmzwQxpPBgdPKNkAHXKsTMP7dYzmxZkCVbe9UmCiTz9RF7WGuUdnxccBpxBjxNRCbcoWo3Y",
  "key44": "eW5QKBzHNw6ENmKmZL6ghUj15TdLuPD3NLxvUomVY7XLHAAaTaekmQmvJGRwL22yjapAsyob1TipjUXPMQRxQBJ",
  "key45": "4ydt1qvFQwfMn6RWme9rwoZAbATqvBLE8KsR2hiPg15LWS9e1h3h1dZ8UYvLjDEZLDc8rNTNSaa2n6oNR9Z9tikx"
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
