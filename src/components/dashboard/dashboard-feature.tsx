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
    "2cJLGdPVy9UsyEvEGwbgD4Te9YVnoUMeGuHxvKVhJXJ2X5uZUXrQJLw4d4iNcfFcyGgtBCBrgQnfHUL52is3CQ6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Aw8dV4yoiggqSC3HQkvYbKvSeezTBvrcVsh1PNJWVEhv3V4cXsZu2RFUZSQ3NPBoAQ6DTY8gy66ec1r9Zp4JQKJ",
  "key1": "rbZEfFwcUhy12HYb1kvYdhJBURzvz2h6gHzXBnwYnxTosCdxNJ8BiWtFYh3UMLA7iqKnYJpmW9VWHYtEPE71ykg",
  "key2": "2WnuGKQcTvyDAFDWMXbRgNEiTT9kma3QHKnBptQGcBXwmHnKrTqQ9MfUsfDnT1DKsg64AqcWL5N2ub4NBsA1HiHo",
  "key3": "2AUEsBEnuKu39tadUf9DQnivgEWeujcBkgTw2itSS7h6fR7bMeWGChg3tnZcZkyYwiYKvWRxzVWCjvCbh3nvEr8Z",
  "key4": "4S1J23MedZEB9ABqQZx5hEHXFsXh2gyudcLpH6rLuTpLRorAp24Pfdr1L3PcegESVJVLJyDKKJXTXU3LkoArbTma",
  "key5": "4q1aCkX5PddHkDmQ6M9AthSesF7YwnFwBzXqaAR7WPSp3wkN4C7X1eHwevPSutaihyTiP1CmiWXacAUL8w3xZZ2a",
  "key6": "fJASSzATxvRthTQWqMNSjodUPZhfcae46PgMknajfSrrrU3Ftwep2Z9ocKnLPKiW74QW6nfE6nC47oddYzwJKim",
  "key7": "2ZaDsLkLqMkMPpWSL3TcBMa539GGCtDfbCMu5TX6VwscU2bTkUYzLb7cLEPVjNjkw9NNbYC6AwRZaFqNTBYyGFPX",
  "key8": "3ZSm26fkMEu8FcHQmupZgN94t43At32dVhCmjTqmNcXoeFgPFVVCkXQ7AijGUXeHVMRvY6LcZwtYqm9vhMADL5wR",
  "key9": "2CZFLYEZytabzkSpzUB9UsdPLDr7KU4QcPjaL31n2wwVCKgKKf9KTj8twpLeDEtBVYziT6rRBL4qDZqxH6vvo3dE",
  "key10": "3uZAMBM7tGmaw5pFjf5kzaDrVW4x6JyZgS2Lqw29RhPiW3Usn1TMYGhETzPJpsaVcCVTZwFwxCCHt2n2bnKM6no5",
  "key11": "3fYAvvh7q27Q6v2FFoNN55YXGSUbrF7BU8zZpobtxntPbXCXQUrVTgXsKZjmyv9ykgqd51mKLAZgCDBXnheQ1QCe",
  "key12": "5JUMdabEnq8Dp2YNq5fQ5x6heWikHBE7xxfncMXv2nirhw7q9dMUoA3Hf8grqy6gYdeDMRk1W1tHMCrbdjXYA9Qk",
  "key13": "HtM8wRodeYritw6dJxbPSHbmtbqyvLmVxu7s1VWUXsPbsechsnm7Tuoi2zYU97ML7ddvw9mu2ANmX6hAwGS1iQr",
  "key14": "4UtNSE4YworYUj88SFGdvj25DWLcWLgpAWCCA6b3TfDbsKpgxw5c8x72dEqkxBbZnndCaF2C69EdMA2KKDFQLvy8",
  "key15": "3tb8nEhXGmD5fpMPwG15f3d6eTUkXFZSKYmcy4J6U5box82wNukNUKs2muBurJmnmBT2QFw6yu4zTRiTV4tvj6sC",
  "key16": "JSiX3SnV1dCZXh4EPznXHUxyGq1kb5Uyepftfcyb8V7QJjRW98YEvVdndi2VSG6uU1YtpX3desBfCwCPWmqjVUe",
  "key17": "5BgUaTa6M1S7tP9JKELiQB8L3oMwjJgPGbGhnu2xjgBAJkuYQzNcBxLhcd4tSqjhXQzAPTCCJZDqJHifHH9Std3T",
  "key18": "vT6HWKBNyF8geEHSt1u5Hn639RRR1jQtqEbZ1RcydvRDy6KHbRcCGsMjQoqJTjqzPRAzCdZZFheS4Yj2YNC6QkY",
  "key19": "49sjEx5SwaU4Ri8wUnS5oENHs1CwLq63qK8ehxrYxEX1iiNC2iK5a8aLVTupzKPUebkthuuwteQiPKYz6NGkyZUc",
  "key20": "C8pZRvGarNA8uAeZxd9mGD7XHb8TQ5tj16XhVhXrb6S8ZEAb6zz6oKVMcTmyPuDd2sJgfgWWDKoGMsVPj114kEt",
  "key21": "3Fa5dvkg2yZYFhAVxS485ayP31GmyXSFvDVju6woYbVbHhHYbJgc7dwtCrThqk2cjRQX4YtYtYHdLR7chvQ1i67V",
  "key22": "2oi2w6s5cnsH6T7Sona8Pd9yKvihNuCHfM6oZVsQ9oaECxkBaMQXc2EUzn1UCPEHgxXAo9iFxvaZbpLJ7BGpYZW9",
  "key23": "oYs2b83GmKYxUSiF3uGJkgBZxHc1CtAUdH5XxTGbnMCFvkHShKL1tMR1dYcfzwGc2AM7hhcbtrzPtTqrquofqEw",
  "key24": "4XvXRMaP4niirHuRgDwLMmkW42FNiVZ6aN9GiQvWCwD8KtCJxuNabxf3fpePbr7psXVWG2UGEpChF68bqWCcPxHV",
  "key25": "46jEwg1d6ejx3aAhzKDjBRv4CvAE33JzUpJFHcHQ1RHQcwxp2xZjaMuH8Ufwbi5nC8dARK6XhkKSpYo2q7NuG7ts",
  "key26": "hLnsx3fDe3jRNTXcYZQx312Ba5HsMnBbWYNnkzHUXh137uwJUB8Bfu3HLGWFthrHKnoHTbtNyKukftvZS75Raf8",
  "key27": "q5hMUoVuhiNafhEDqvEauKUK25dhz97x96DTwsPjWZwpB86m7Rubgbie4PPqKHiHMJNXsmvGQMFkqd8G7FZjoxV",
  "key28": "2UgnnzPuqTPMRgJ5292hEZ7BMyqHda8rhgqfSZMEDCtysmtNQEDCbdszkrCB8aTMVe6mx6cr5HwXxBSz22bgw8Y5",
  "key29": "5fPZUwfQG4DBXBpDdVHKutiJ5inZBL6d8ob471rxKYTVBm3LUCvvzJ2pM3CcQiLw4zqkSe7gjpnfSF8JEQBUZ8cZ",
  "key30": "3Suc3FUxrL4QR3paa4LfWhBZEmGRc747ynwZYMNHGFfhqfPLHRRLD6DtoCArZ59ivTWPZ22bc4U6u7gw7T2w9ZiR",
  "key31": "5TqXouMhvEAFtPA1Zt7BdUqtwQMLsEvm4LmbE4Wh2ZN3DsPryqys32tNVbiyKb9L9ogeL3t8B2uAL36JwuahExyZ",
  "key32": "3MmvewurN1g2smaRLt4GFGkZB82pzykpw6ji19gW9Yaa9KZ7xiNqXC73Ap5EEYqVircHC4EUHprCJARkhnanDKfc",
  "key33": "3o3yKxb1QTenL9xNdyioUGwMjkoHrHobp8vSZNaniwFJtD4Y1S6YmCcmdwo2v8y2fpRCMx4qHeLRD192X9P2nZdK",
  "key34": "3zdLMaHeyQVoS9paF58XYHLpHqrgtEbF9E5AnJdWAxfcshYmAiWy5wcq3ryVPkaUfmgKzaVUr7m98yuvNALKSjsS",
  "key35": "2Nx3u4ue2mBEJ4GvTt9oYRXUJcMLZ6ksHvJehhSjfzQzUxqhoXJieP1LY96wq2JUQzeiJH3dSpiSmwH1snjGboqj",
  "key36": "3VCeU2AWi9umDjbiZmMURcwGKyaykJVfD1DNkad8KHL3e8o7baEDQ7DWTpL7coKdJnU8khC9S6Zg9H9rtWggNfkj",
  "key37": "3QzyyneApbPKcAqSNXhE1W4BtajeEGVfNMUxvg3fupS5Nf8ByLYYQ3tZGcX4sPbc8jKs4ZvKj4psU9X6fgAGR4Bh",
  "key38": "2ftoV1dPsv19sehLpT3EY5oTeEVxtCVJPzeftu8xYey3CYXk36Yz4tA9F3rXfrnNUP99gc4rHpa68XDiEa8Aa23v",
  "key39": "4KJvnhtT2XiFbUYSmnSjyeiQA4SA5TWCLXWBsNwrG9bYuaAp6sR6dBqrBj2km4dnfhfundCP1LSbKYuBg8QJP65f",
  "key40": "4ULzPP2usoF4XD9GKoik38X2HLgV4k6CamKhEcjEyAAyjmUBJiv22iSUerKyduGrmEC1zoSczoU64mdn544pLN7E",
  "key41": "4Z3sHQF7YA1SaqntdVdJZ4zhQdMeTrU91XAqAVEnsowJasjaB6JDNd5wcyiMMbAR6nNuhtH6kxKnvzBEigtrhB8M",
  "key42": "3XDagdWdhfEEF2ohkcV4wJarqXXK1mA8qLmLejsptiu9Jw9cm7CgBzxEdFTJRVm1UmcbDynvgRAjTiRE8w9fD2ht",
  "key43": "36VcsciFQnmVixdESrSx2TuVLhobGmxSdKLK25wwcRHZMKmfUkexh1Ako3kocHbaimwEq99Zh3gTBUsT7Z1XGYXF",
  "key44": "62J8KdhZxmbJLoPwj31rhv4tc8rZbGVjaCj3PFCvvUxJaakgqs2zGYM7QetjiRAJ2HRmGXoGGNDCBmk2mmKmXFWi",
  "key45": "jqts3u9WKvF4X15wy6Z2SmJtsA8bfPUkRVVQ1ZuqJyNHdRwS9mNNGPiaGcmjC2ceMMgp647UdQxFK9n89mmFaiT"
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
