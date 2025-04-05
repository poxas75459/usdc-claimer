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
    "pKkU2pPUgw69AFjBr4nhq7W6NUZ31paAkz5mn4VqHwSZtLEMKWsdEHPqY3HZpKJSC7XoCrMgCeiyCjVLfWmR59S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JouYor719ybXyPFcF4V75nouGb4oRQ5Ygya6piBboHb32AGJznx4ajMqY7JXTZcctXgVVHnZPRMpbnxS8KUonfH",
  "key1": "3ve4tJWs9QDGDEefbAGR2Mz3gUxfk2LHu3TDbdGJYv5UXVGyusvirfQ9cSPdLixGjeaZEdLAMN2fUQBpbV9ZT5gR",
  "key2": "4Gn27ogGTy9AjDwLbzoH7fdgqDTmd7pTPitkzwUr6jsRNySTkQjwdExoRs6ncCE8Mhvf5QjxJgszh822R3jd4ekF",
  "key3": "3iCfkLGkuCf4gHubkbMQhfoUqF3pKVFSwozMezR3BebBsPfQQHrWbSLaE9UGAu8MZ3RTiqW9mNMKrv6kcU1tPLmd",
  "key4": "28hFW12HJhFuHVTb3WfRChagGwg1QmzrDWzuzM4zqfyobicyPVGtuoWYsG8twxK4nNrjsAJgVuNfCTQYPGnSVgBr",
  "key5": "2PYrGnNWAG82bpSGPcmvVmstWqvpY7FrFPQnsdTvGhzBWRryJGzT9KmfGia5rVW1BFd33NtbPuyuBYpUkxdFVqwN",
  "key6": "3h5Cb66wvsvFUxpYQ1b24fuRtYhDDFZcjw99MJg7DhvLmaBpCQ6Qx2LJXHVBXq7xgwLAwkWn1RsjL1HgU7B4fDaM",
  "key7": "4hC3zn7ESYtWva7hWsZ7pcaGFbTrJ5t5HXwX2RsJrPrCDt8Sty9eMRxbfXuMjNdKM8BV62uK1a8b6MGtD6LQGf34",
  "key8": "2P31Jqad9qexPyEv9XG58Hbd2S3wQ3B852Cj2mV6qf8SBHESgc5YUVCBhedx6WkK1uL4oDJG6enChe3jrBbGpKRE",
  "key9": "jUHAc7VBncSFZ8m179M9Kk988HUpfTx2dEXMtWMFhr6QnNBoszwZnKbY6WFf9hbXfE4qtow74N3V5NQ2B6q92fd",
  "key10": "5Gebpys9VjRG4vhmx1owRMwsWHc8GQbibRQHTPKiKkBFzLoC9WpnoCJT1EYrFz96FzkT3a33gUyifgRRycfodZbY",
  "key11": "3cSDH5JmeY8LiWWc8EyyeZseSXm1aJzsh5J6AfTMRPeLuKGHv92KhLMXDiFUFSD1Y6KVGeMdx9NRTMbAvKRtwmUG",
  "key12": "aKZiF1KA5sHiefvw3nyH9xwjgdkmPtRhyhvCZ8XngqCS6tEgh8zLc4YVN8jenNxyvv76Zib48b1QZ7QjRoSHdqf",
  "key13": "HJgUjearitG42QWTARK1wnRFJxnMS9bSHTBe6CdJQEXijzQRNotY7XRBtSHJXFCL5mx33fRhKJpe2fb5x3uhYDt",
  "key14": "xh8bPgq2KzqcYQk1SDteye51Y3Niqu8GhGKDEs25rqocr8Rb9aqRb28UYF3EFPUWUqSjcLHG7W5hxsWFSZw4t7M",
  "key15": "5GnfWR7HysFVnBGihASdPBTZRmWWBeYk6u6QiVvicMru5Wyi6hsQ628CTSB4VADiCgwhbFXnHBpbywSwBrkEJ9w5",
  "key16": "QhxezVvovG8C3rkMpdi48FqjqCogDkcHriw7KCynedizU1kytfhA3czvZqJopwDTKW6kLSCeSqjF16f7yXbLEPF",
  "key17": "4duaQCDzWXxy5yLQsa7tjJsQNE2KfLSqcHhLUKMjYz1zZpU3ogSKGCZxpE58zDyd8QhWgCNBkjWkF2BkocJwQsxR",
  "key18": "BdrQx2WhKsqgcudK7Luc5SrfhAFY8sPRMTqDqJ8RGMsG9bKMAf4pot3jpd4jqQBw62DYC2NWYtqtmmQiZT2E5pS",
  "key19": "3GCEf9HqXbLPcL8gM6fApmFhwCseTskQgMsnusRx9hqQCdnt9rZCpmRSHxwiqkJHQUKpcY2BqSFNs6HdNowokfdE",
  "key20": "4ujEHRFqcLcxquMvDH6sih3PZYfq8dZqUdSP1JNxBiwyBDSjsmNfp4G5KZAffCQRyyGMiHQaNASKnaDfpSw9ixyR",
  "key21": "4mWYRkCTJ5VJuczz58C1nL4D8SRoVrfTvVgyg8LBEMj5LEpEwC9eWwFP6vh8rgi1QR2qxVUgJBfmtrmttBdEhaYE",
  "key22": "4tykG4R7KUtUfLv4txqpVH7C7PpY1ny6MkSD34r3zekhb4MwKduN9RtGucibKLpeY5daZzNAD28hPBxjuyFmUd1N",
  "key23": "2KmCSiJMLzYvfUryCDHPDsYwwrkZHWNggbQdySk7Pkb5wSpUoUxRAscQ8xn2kNsLhm4KrUpUMih1e1Ji3hmMDhdN",
  "key24": "5bCfoFNoqkVYdnx197MpM6ydPmR83gsqL9ZEmUGyvVK84h2ZFuM39ZtLg98WzVaoFm6NUZ5qqbbBaZiEXrDB4GQW",
  "key25": "2HpXta9BS8KUUyHFVKPM2yyyHHwi9Vzy5f4bm1vuama6eNcSxLuu9myZJnUGPnj4yuWq3K4NFiV8U7bPrePE8s9D",
  "key26": "3jVBS2H5bApqPMv6tpgYJHFDSxgbdKsYBCzo8wzZQ2FYLJq3vRNSqj1hv6XubASML7u87jVKfg8nK4z5DxUFxPnd",
  "key27": "2tAnusbMGJA1TMVjHNdMFUJimRgPYGCbVX3NNHbSP4WibD5ZRt2Y5kieLeTuPtv778hwkRbUCagjyrGzMRe4bbhE",
  "key28": "2Z5ZTEqZs97e9FAQxKNmaV2shZRj4wZwdKqh6E6BPanPwS4kPFTQhHmkRdN4WJutekjXfUpgsYx2EMvVA7GR7MiV",
  "key29": "4SvyXHMB7eS7mMmFq7rzR4Q3udvsN5wJ1rPht8UGH9Rns9mDRTGoLhBPZ4x1oqjNEi9V8751y8GyWuXkeMV1HRS5",
  "key30": "2jrdm9m7AV2jAbWcJiQE9h97UgH5MfKb5bier3EuL3y184p7Xs9mD53vVVQo86NMpAmRRCHYTDJs2KPwLkdf5gNj",
  "key31": "3TxgGcbJmwKVVqPFzMKUMVvC63XRAKAjpzhEz9Na4gQKtCfL5Xequ6abQwpcKyPMqkdF9VgzuyCayxfjkVraUsmW",
  "key32": "AqehpyA3BmGBapkajUpE5YhVjLp3bnAB7Fh6RwA1CGYki4L4MUGYpRgRgJ3suYc89vDsnfXKnLsthCBqCNzM7YZ",
  "key33": "3wij25yQfUYF1QAxQFRD2eWFj8Q2BP9mXB9m3o3KrEKUGcREh96yPBEr5YY4hHUYyiiy1PCK4ox6FxsVeRgkcwJt",
  "key34": "5j4869G4VEUz2njtxvKmTo9NvovYX7LS5F2Wy4dUsJM57j6QKQXhfyZcLF24yy1Vid9d9wU2KH6oh5suf2iYRFBa",
  "key35": "4gVZBwnENDczbWx9bVnx3iZS6ZYNpEU1o9nPzBbYwnvznU7imXzWWHZTK9yApx2c2wEqYJ2N9dpNLvH9Y69vVwyB",
  "key36": "dUE5AaZcTtuCxTWd1PmUtPwT5PUvtNQUthKYi5LdZLhrYYUhXnPujfdqPm9StiTSo8u9ptYX4onvbRnFHJEToKB",
  "key37": "3TnyipMormB3eXuuSSPF3n3piEjWqcjgdWSPZHoEKezsNt3vUFiU8MMrgrpWSpwFzoMp82dAWif9RaTq5NYpTM2s",
  "key38": "3YbNtEQcbkQQ5VSFyHkPha8SwqJQb9KgxnBhcK2Jrs3JQitBTb85GGrvPbjMEJc87VcyM1RDzyNPji6iNuxPMhx8",
  "key39": "5ScYbdfRHTcqrLDrLTCMRomxEm4e7Mkbr46vH9TzCwZYJRfMK4RHBvqYSzryDAyCpst9QchFctYRj7dTZNT34FDG",
  "key40": "3mZksWKJHwxc7A2KH72YrkBgV6DR1R3t9n2ofotTG9U7YBAbDXFiuqqSvk5LjCmQsgN71z9bReNreG1aApyPZumc",
  "key41": "616YQQm2w572rgfjNDhyVEnDU3dDTWE3JLYy7ikNNfgnoKqLficZFGR41Ko5ZHf4LNeJqEmgVwkJy37iUwTH4MGU",
  "key42": "2CWKqK4EEtX2g3QZjvrNtPEmCjBN4iNVqh2LmhqkiWPyFztUmsLYzcKEUdGiNTt7mn7K3HZ4bVkaVMXgtz25R4uh",
  "key43": "5sivVUoxT7qUE1y4dT1XWH5QX4xTA6WNkmoNL6CegWRS1jmFnCiSihu1VQahYdpTt5BjxNZ6rMRSpxrjSg85nzFz"
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
