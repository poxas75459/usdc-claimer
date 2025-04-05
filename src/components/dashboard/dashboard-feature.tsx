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
    "4NdqzuAa42JvrpoMHkTXbqbe4houdWDpdzTMPihuQ1sXiRwG8haJ8WrxNdeCPZWfaPezTxXb3mpnKojfm4MzWUvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GDDWqGpQZF69UKniWSV5yd9gbiDFPKjakfS4s9LKQRTW3pW2EwXAUcxVn9qfYUwTMRKSwdaXmT7to6ULEXtPhsj",
  "key1": "23mXe3fV9J7ae9X3chWySG2ij8mQBCpezEtZHoRBP3da2sohV366bEPAF1FA7q81sj8Jx3QesbuykUuQBuzauHAn",
  "key2": "36MpWo1yk1Gew1WwPPcoVBgnkjKoSBEVeG3UaS8vtajgRecmoCwD7W69a3dcFifBdL5bA8jnpLg4dZRGSdazTLSM",
  "key3": "5fL5MDAfrJsUngJXMANvNxDrsWm7mXwqz3cKM7aDAqn7inTkoe63vT7J1MSh9YAWpUGik6dJUPT5cncxZcTUruu6",
  "key4": "39AL9fabvMZN93Nb5KuRssQZPbRFn1ucWDDCWB16L3CtVi1nyk5wJGdsyb1yW68KuTuS1LVoMtLD7o1VKaMC9sXZ",
  "key5": "3M1VcWu9fjChzpEgTtfzMV5YksVWX3yLGGg8P7HSfqwHmpBFfpHToJgWYtk7m3pnqgZhSbBqKE1EzAhjHQFfT23A",
  "key6": "2vqfonaBRyUi9pLxgC6oaQEC2sK1z69AY1Rb35RCjYbgNoCAcQbxzxkvS3Wc4XFRy3ScrJKeuqAbvAgdZANbmPqY",
  "key7": "2nYDj6eBTYG4KL59AkPHFQVoHNcWS9u8GsowhX5Phug7jurW5pBWMdRMcjinyvCivZ8B85652b26e3LHE4PFPLC1",
  "key8": "HTuxZaicxxiAKZi4Qj7seQN7WBFYGFwQ1XYYf5MEXB5EffmrngmfkBqsaEvyDspPJbMUwPBr7DaNChAHprNhSgS",
  "key9": "5AdP4z7runbNHDpFNHRr91n6o9j8DuryKobnZZHJKVdSqAN2EGuWYJFhU56N5xbeBNnQJHBhJFfGPSjJav1dU7P8",
  "key10": "5QVntvEX5TbVqT1GABzdWnYFE45rq188CDMmSqTM3hBbhuKe8xmeRzFhbshtQDXdWXm6P8AeCPDTZTA3xzYHa8Lw",
  "key11": "5p6N2oj8sxiDCq7XRY5xWJRSo41ecCxvG3Gw7MgjdNNQNE2LeQgVw9GSB43NwkKrpsfGSnHY6sMj99o5XmQgGAtB",
  "key12": "33Tz38KVng2pDPNjXGFekY7TGiVU7sjeyM1ezYzmy2sBuc9GBFMM8SWp42qnpgXX9dm9kdyvDhUnR36jM8cE8Nxx",
  "key13": "59fgHqjJcktbhe9zPP2KPQQ4t6KiQug818Xf8WtqG2zwFtbqboybCzLEjMa4yChKEZQU1Jh6FEGVm7S9qkznSEc8",
  "key14": "4cEF4UxiYKU9kb9WHKqPbgQ4bELdR59MMSrc67ihVBWTBf6DTGjhpyCjefxdYgK7Lg42Eb5rhUYM26jH2HdUEDur",
  "key15": "414X3eHmwhe6xs1PUj3yBbrVRkza4za6stt1LCe7NTgV6L3KuquaaRAHdy1SGNSMHGSxgnzR9GbYwPLZK2TWe8f3",
  "key16": "b9LKSTh2zhXDANJPJtvz5ch4MKqWtSfkMcfiPEPPJFP2gdCyzGRVSti5CtYAvqd1ZFq88RAwv2yA7dHbsa7HiTN",
  "key17": "4QtwVQ3eHsq6eWDLskSiyskH8ibPy4UYjmhZ2ofoRtzBjmCme5ev5gRuNKBJsXgBD19DtQfC4b1Txx9VCgiVpwwb",
  "key18": "4MmsHEQM3xyUyFcqXUMo7FXYR3WBVPSydN7pkLvXNtiN99j5SrL6KSHZBjme1bZ3GNdhXmhtp3wu2dVrWgtJnNdj",
  "key19": "ugPTn6AYiv6sSAUAo1LqXJ8cgc7iBz9bDtVCMYdpvWGFQnW4ZZNgNDd4198UcfhKWbrGgiRUE6HH3xYAtN1DRZA",
  "key20": "CELLCufeHbwtRMmUx83e8hiQUMJKdg3ir1hB4EpqBV5Nt9hf8G3qhsPxRKamCRAAWrzHairB7Fhd8LL24RjiEQr",
  "key21": "2hwbJCNfqJW34cqbsG6wgyk1aaWfpMYrJVJxW7UxeQTfz3huJEKA1dagsFxjX6Pcfq44BzuCT8xhUmAFx9GaR8Y4",
  "key22": "3j5EqMYXGBxdqsBh5UaGeP61A2vP6Y5U5v8am3Nt4vz2dttdJ7hpYdSYrSkW56HL6XWgiZy7tWGWLwvvKkBDt6vM",
  "key23": "5EqYkKQPwNGeFYifeFKgxXpiTcahQ8hNwA5yVxJtfCfDGbmTaCuXWeS1sR6utfHTo4PrfLXdUjuT1feuCLWTvuV8",
  "key24": "4j54xnu2Z1s9GFhe8SCpqA6VQZ31GL4p5AW6PeijnB1o1EWT5n6JEJayy6QAcX27opFdBnBde7RqahU1BTopcPQV",
  "key25": "2PCoPyu62SFtJjNTXxHCMFhbCJ2c2XvVbcDho44ZotVygKLFnBpgHFHfMAwQPc9rfD5EwsQ9YpVfVWsAwWoCTiif",
  "key26": "58zb2tBLMPXRDce7HicUuRRCMQrLwLsnCEuPgU7iWfd9sFNGhXTUqav4H41kbYGonZZvWxT7rHcszZfMfPzevjgS",
  "key27": "5Jq68XtxEWaCufxhBc18HH8v7XQnDECTsqkd3L8K35p7eVqyjq1Duvy1UuHeQRadtcGHyhzkSMiJ3UE4nUUh3i4W",
  "key28": "Rc2mwoHVrwgiJptjNaNg8roNTNVFXYmE8cScZc9DTZehTGSiDeax6J9ysVXvHXYj1iW1rpj23yjTB4Zu1LxeywM",
  "key29": "3L17KH6oVgeaxdC4tEVv3uUtDARt6Yq1rz4QvUm8oFicsWz2BTgNWFbSfTRRjpM2Nuvm8BfmsqwGqsEcxRyYWdJU",
  "key30": "4bZm8LvZLe1cdF1CWD3hWfddSEK7kJF9A9eQ4uQfUEWqjyBwhbr5rWZnjGZbfkHCPuRMD4Hc9owFaHqw4BGteJ8",
  "key31": "2Cikj8fnYYMCJZiJ2eJKDc3q9UuMapMdz4BuTDHBxYZ5MSgKxx5mZ3PKCMwkBURiBsSfiBgXR2W5UBEvBUUvVKJ6",
  "key32": "5Gf9JWLx4HsezgmDAQKzpFXgXtKtdoLWrc9fP9UdiDfcE2DScqKp831YRZHG4Xx1WdEXZK5aDPdCxMe3SGKuMw2x",
  "key33": "4v4nsh8keyhLok6R6wZvnaP7mhu7U6GJs3GXQ6YKa8MEGUS31t9SKij4MVyz3G82H4EqGAhUN4TDRPrQavQFhnYZ",
  "key34": "cFsU16m4i7hLjdVEoePgdRf1Z55cSLzthgTjF7LqNQKvxjL4PPAMLsD2Ffu8hmcchtHgpPWFfe2S9nM4UhsYP1X",
  "key35": "3saYvpqovnKr6ZKj3nk4iEYQuDmqYP8V4xuG21JX5ZUE84YbTwaEjNaZLsy2fmaHWnFKhZWyNRkcc2Taqa5r5SUc",
  "key36": "4hkiAe5goGGMvJT1A18VfvcXRAXz2kWETstcXANcKXZ9sA4M9x2fGFF9fhDF43VaCqAPMxSvKXNXexgwUQQzxb8b",
  "key37": "mszzFWo1c1XNa8YRy77dhw9yf7K3MhJPQiWjJYpvm1sWq64YwQP27WsvpCtUEoEL2xnpf6ATmi2WGqjB98RnMHg",
  "key38": "2F7TJAoY3arjeZwiXPoPWvpQvXAK5kuPo7tSnnR9eQZ6vkJuw1jMJrR5EnwRT1KEtovGSosdBRybVZbLz7XoGkNK",
  "key39": "2A71jDTpe8YvHCTT85eNxB7pTN9qT7WQ4AQsZSsc477BhGXuxS2Ym3kxnMUUJMsCts9ADNnFcByVT3sM3dNFKaSA",
  "key40": "2Ftpqu7cgyps6gWDUjaDEMA6bWeoVhRKDYByjVr62VonsCqUDnYF6UbXFxt3TpLXTDzPGsCUhWhWhwBPseghJwb3"
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
