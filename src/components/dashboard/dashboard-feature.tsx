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
    "1Yu6v1xCkaAEqBn54RMtV86iM7Jj57ycZ4QvsrAAhsZHnCaNgNMVCWYiqqeEDcRat3TtTRpMrHJ6C2H1MjradEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hPeNn8MKA6zdzyr5ER5PiFQkz5GnpSxGvXGP81bSXA8arrfRuTEVN3ud6szHKwqrcsp36wHMgNsmEbheCBqR5b2",
  "key1": "4Tfrx8hN56bgHGo4ak5DmrEuSd9hZy9C5nHmgvZLYkHYwmtAKfG5MLxKtJP2oFVz1okc5XmNxyD48VApQhR2vijG",
  "key2": "2r2piwaUmHfsNWhm88sJZcZCG4JWhv65ooGj6ebi9dLygRa4GXKEQVEh6ZW9Mj7CccqumQM5ucgwN88DufW4xtiM",
  "key3": "5A6K6roqCDpEKw8jWSe9pZ66CGqR9kZULuqQXC1wsEb2Js5S9HEDP5UofEWB2XvS2Ty3WGG138HEqKfqgyRUB7eh",
  "key4": "3aDjMBpHci8fTTbQxeXRKTreHSF33y1QqiFaYBxdE6ZJCBKWVUyWKXPWDHwWdJB8Fs6XWLnLynER7d5RtpsxE8Qp",
  "key5": "2DYXGdAR7jBckkDVTTXjsHUsYJqLZhArRPf7AVDjctegYpzFejPphomoWNsEjVy5KA7QepwyJf3eWJRCNTdJaTpg",
  "key6": "3FyWWWJDueTmF3k8CCPwAzsqi4UiXYzHgYMbFMcPwbKLexXA4o4MV95hL6EqcKxEjcrAGtmR2iDfsTkG9Rh1kHLV",
  "key7": "M6Mgwk5mPje9e9C7YenHvrqn81ebWMbSiUdfwa6B8edWEdpW7N2fnWFrBNHHvLrgVvHDCBqKxhH2yfzb6PEQRhB",
  "key8": "PB1VccjNZNJ6FpgrHWQfTMeC1AS1dRNWAubTmTC3DEVSNxtteeVKYwezFJdxHv2A4ttHCt39qSiqzgc5LP7Wd8b",
  "key9": "5kSvBG52D4oGPGaLYLicJMw6q39LN4UM6J1diXtXn9Tc5DAM9eWoSgVTFGnW7kpsoEn9bs71bi2aGjnDj7h6rU3k",
  "key10": "LvFRGwmqBi5P5atnVxDQ4HffFeUCDLU9B9U73aEHEUD1D3BJi4AaF4tityCrHnRLwB7AnCDd8H4R9J5m13YrtQq",
  "key11": "5vd3TcHpkV5jfawdW1zX71BjrpAt3E1Jf3Szxv7TKM7KazASEmV2xK7zXyX2Y7oa4ZHnWXnw42xLpfiG6j4drjqC",
  "key12": "5miWqZkNfexNmfCzF3eMvJ3kxoL5iNQ1DMQzuiDK3q7dfeLK5EZBHikq9vjyWqoMwdbjn9hkEUkcQ1zn43SuBci8",
  "key13": "32uTLZgghLYBuLZcx1QbbxuBoAj1QypySK2xE4uj6pjD7riGqarDjmJwS3wpVW6yhoptWiY3Pbo5DHw11FLbHtZw",
  "key14": "2qrxPbHe5C6GVN2x4BYrGKAbMHNey5Syc6ZzoixNiFv2dYT6xZ473p87v9XbxcFDE2ej6GfHxht4TGCS1Pf5tbVp",
  "key15": "4CaQ7pEBmePNDTigSnpWnKMBGRCpe4Yo67qDfwNSBchBwEH8YY9bVbrMtkAJvEwtXB4aK58YYNbGuVVyDwouxH5i",
  "key16": "22j7pLFn15Z6gvECWoPTDohwQztFAStsnXPhRcKshjSoGnsw6f3q3tk8RZ5KgYbNJX6NgGQhHoXMxf25dZSR3vZy",
  "key17": "2HWJaVJPq8oASogrd6236eCEkh5RYQMZ9Uo7GA1zqZDb2gLzUKkbcfvQQjj8NF2VdXn2VfPss69k5MTGA5Eo62pb",
  "key18": "2HEFwQ7PmCVyg7usCSjcnB5vozyGd6XWY18kGuqLKk7Z2uh3Vw96RCjwGetERDj8Y1gHbVv7umzt7u5ct2jZFc15",
  "key19": "4LGdpvXZ1Xsks4aUnToapoxAWfaGvkCFtH9niy47gydizmMBfFNSUfiyZVebU7UTpkb4i3HakiXA7pfoPKEzsKA9",
  "key20": "2n11r2VCzczLEXBKj4tLxaEfiBwubpAUAfmKpcrphyazkc5sgbbN5Gwo8WjwbGSaWwuAdHHsrvAZwxGtMoCmztyM",
  "key21": "2zKPjM3GUYNACrH9mgwnV4NqidjXGWz4aUgnn7tdsJDJJSSyHHTi1KDqsyimxFsifhq12JuhKiH8g7EN5t3SYy6d",
  "key22": "4Wnfv8vHbuMvjwxFfzjPgkkft5ezC8Pi4ab8LTy3t4N8A9KBsg7ruDUsbserKg4QNYc3WoK53e8UxtjUZ62FXm9r",
  "key23": "66ng4aXH4Ei62H3MR7sYnQMQofAKuReWdbdR2uDN5sszfD66aEMoeun9No8TWcBpu7MroaL638wUoxvUy1ss3sxm",
  "key24": "22z3WVEgHBRBiM1sZqcA54ebXTwYMniXipB51nX1sVm16iheCM3QvJ6y8sstLB9Druogv67yt7A7WAvEJ5QcZM8T",
  "key25": "3f1eqoWwy5iWztwWLhbEuQ9YMJwnKoooZU2wh5utVoS2CtL3DvDG4Jo3katQPiySziymQ33T9yJnYVXrguUs8eDT",
  "key26": "2THBFqewJVvGwL6cPbBt3VuSwGHospKhYy5f1XrFwWoDM78Nnn1FPYnXdu7gYeERbQaPJm3FYNx74pRctPxeBvYb",
  "key27": "3eK4ZZPMBY7CfQNz15RwZHLHTa4z78dXj8xM6dZzdJirs1UMsqXhb7xtMKVBKjJ6oP62xcGPZ4q7dHG6vBMJjekH",
  "key28": "x7qtRWuLD6aXG8z7APE6UdEi2c47a2qoaYMreRPxv9ZNY1AqeQR2PybQZPNv6Y7GvtY7gj48G9zEVE3Pwoe8VC8",
  "key29": "2zvtBXPL4fn7FHEAsgdKYQdy4RhPSbk1uzLUaWP3kmNGgNNxVWWnZxQGaeNHwKDG8z118WP8255jZoS6bPJhuZZc"
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
