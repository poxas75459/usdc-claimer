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
    "2Yo613V7ZC9soyG2JN5fBTT8YfMdRAPwr6kg6x6UqREsyxQca6ffC4FQxTzCenGnAbfdAbvggEUSrBWG6wpwtJKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pHUqxU5HEh7eemTqzwiNtbCo17tK8Dhw89AfG4od9JCSWLUg1snaV2FFtSAxKiDGexYpMXp97tWb32sqdu74Adc",
  "key1": "4N6gEami6imPWq7aZC9T2uyFg7hBxS8Eh5N5x3Gzs1Ga5zkH3xUuqVr6u1YqqVASpEVjRsb58UDFCNUbeQChvHZe",
  "key2": "58fhUs7aCwdgHqNvwH6bHmLxd2hgZNeNdWPCQ6Td4NJMTKaKPpLtMBhQBgYeWvtSn1C9qRMmABLbLTwQNCNeWuCw",
  "key3": "SWp4LUHAuwVbgstoRfsHWAkcPsET4m9c1LYoi3uT88hforNCwey8bTLjjmQNJncsgyTR4t3LaFbpuUCBCbsZrST",
  "key4": "5JjGR1G4rVC6dYRWvczL656cWr1FhKDDUZjSYtStbQLTwF8Xjirf45RfdREcyvB6kLWETb8YuR8dxHG6nxv1j6KH",
  "key5": "2AuXeq3ERfXTjQyjrLWsg97sLNcPaQyECGCi25LLXPrJg84C9FFP4uyXDF1pBNb2dTYinwYYQMX5TZMFEFdPWg9P",
  "key6": "4NruiGg39yQYYNCeJsYK9kuSnn3cc1en1kVZ9DwovmHcKtfjHpqf2wf7eaxrfwWgMjXwx3NgJxQUYQbrsU5r44w9",
  "key7": "nQydiANMAH1At5TCSZao6rzBp3pHZGiP9BxjztibrGgTuNWTdnXHCRiR7MeVbv2f6QDbxAah8Y4NRPVZMBvv45i",
  "key8": "3orCVoAsXM41aN9E44MZ26MghAmstDds3sAjxaVC5Hu4UhUuZi5499mwufv4RocctxJTfuiz2mAytCvC6n2s9tUb",
  "key9": "3HnWDcBGxY2Sj9oCZgJtfBw1eELP8oyNeYprLVu3DxsxRf44TcVhyihheJjTnJACoHHyy2rEWRzvJn8hLcPKsAZd",
  "key10": "5LkK4xoXKw5hUsH38CY3uszmg2qwvMoioA1rnXrc9EjT2g2iCxJKDVHNajEuDgBxTaXhUjLZ2oPdKZULwbVUzGoK",
  "key11": "3Hf7RDakTQU2Krk9CGL8N3mwaskfU3Q9Euu3TceZ45y53AeNkgg2fvsKwybtsQLBqBGhPbrdx8qWW77de5iLqsjB",
  "key12": "3XBS81zNFJPtTCEFQQSLpU1sThk4gDccBgd5pdWfY1SgC28kve4393t592MvaFRtNXdsmuwsjXv6tWZ1sABbx9da",
  "key13": "2cTJifLoXGCGvdLcc4ezmspMZKJ3GayrumDYRBpkyPLA7o7muJBhFsyvQUZFSYnG4zUPVBwYtYyBGWQqVg6Fr1ua",
  "key14": "345UrRjqMujCLMAdByBbSkKJLcv5YgwZw6WngV8BWfcxrRg6Yq9r7UkH1rnUYK1TBajWjSyXCaZZeRUD8kSpJSgT",
  "key15": "5qTMGJXUdFzJ1TfikCkR5DmYGSZ1tuF6QQFbJGRecXmGiCoPvR4AyA6h8Am8zkdGPVPYndKoSSedhiUJBxzDRiaF",
  "key16": "4K7TtdR7ecCCCi9Q46zBzmMojKSNXiXF94cUUV4Dsy4khjLpa9gy436Tm1KWNX9r1imBbVzvZypQDeVkRLstnHc4",
  "key17": "21oDdFTtBV5yTyWr8NTbfVBhshuj6Cnoy1JdoH2QEdL9kyuQoL7MqLNRG2KzRkDEYXNeTXBAPkYpXc9aYuvJk5DY",
  "key18": "2KoLtYX5obTdmAib9Y1nX6wjwWfyYSKhxwdJ7UcWj3uLwPGBofL4vSycsBXFj72udjtKLVh4xZ3WssEm41sFpPcw",
  "key19": "4JcbydfZ7fgQtoG8NL46Wttt5bzVi51BZaoj1GCMe9bdeEkJ3UYi8dhZorqR3mg9uenVjfWZxhKk6CZPfdTjg6GD",
  "key20": "3AC5Ap9LEjPR6BoXMRwSqHnkq1Y518tHeB7LFrbPoYzdLb9JeGLjUjn7WRxYBCCwFfPrhBHGZYhUfWq4kCJbZfY1",
  "key21": "2kLzFG1GvuV8vpwQf7kdTz2Q9Kw1jURDsRiunvZoXgS9wNT6hpUVR5aYSbKJCTczKW513G4ETTXkENm6rM1q6ZVQ",
  "key22": "22xzVfMHUhxhvNmhitDLj8Zy5Q266arTFgc4eh1Jv2ehruVW7JexQcdneK6bn1GVvYJS4M5pP7FqERJghV47y4Uu",
  "key23": "XKTMrQqAHo3mNupwdwy6dWMtp9mnW1N8rmjKMPPpqPot6jQHgGA75mGqgUMDVTppaoopu5uj2BSADxgvu9vJQkM",
  "key24": "MiRHCekU1s2X5EDxXtSNyaqAzTqH6iNJJSy6QAywC3GX93xEc5W8dfDi3AkoBvYVm2wCjVJS2ne5GvaG4MnTKgM",
  "key25": "2vYP8jFcbBsFjSrELDqVuJsrikV8oPoPwAm71DzC1dwTMMnmj6GnRK1HeLw6yL9awFQsz8niN4qC9ycsz39wrPsV",
  "key26": "5HqBFHUYDUy1f3msKs1LxdbVGfeWHdX9rf5bvACJ6LpwdA4GhyFMeJnZLU7uFUzyNyjcrx3rThPM4FDqB29gGGKt",
  "key27": "58MhMPMbGKeVyEXTpXobbqwU1fHefJLn91JZoSTjPMN5KJECYg48cHKxs2UjhyKAJmSMYVfGpdUZP42cpyVfaomw",
  "key28": "5iDq1z5SP8A2KRJ6skW3GFU1uFjqEmFv9bnaVXTzewEK1vzNgGf6LXXgSbmdVpEqe2YTe15VoTDuhfT96QyobSoZ",
  "key29": "5wii9rtV6sVZES1jUXxSjLcjweww3TtQnmj7MbLjSmtMp5GH1uHrXTZANbQ7bRKBjaCCzDSPVPXBeziQJEYGYGRa",
  "key30": "2WHQUBnguUpGhY9vNj2zbLpUJgprYjjr528EznRL59rkJQnRYC99y38m9P91DKqh4zGZVoR7Mrqy861DEaJKer2u"
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
