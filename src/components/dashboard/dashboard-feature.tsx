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
    "4ueFqmDxGappEHnDm5oQGFLNVe4bWzZL9xQp4HFC1WDyizQX3WkSGQGrc7oMnUvAAbjoNSMnrppPaKBQJoPERvLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D6eWFGW1Y5tGQrc9djWZP9LWqM9LNCYYyYUYuZkPBDsyCNH9UJVp8JJN9my1otm4FX7UmPkacFqVe1uEqfnVgNi",
  "key1": "3uo8X6cYDoQrB6xUQWMP6CowsKufxk2gT7UcozEzAviiHnuYZNg3pPpV1Zzw7RP3eYojn2prYfYxd1DEguewcnRJ",
  "key2": "3chm37U9xuR28pLtyBLP29fECqhpDk2TR8Lx1ja4mSsCpZrGUErwuDNU6qXG1WuA7rssmHq3gg6RJwYgfK3p8Dkg",
  "key3": "4rpBaKJ4bfEYNwhwosqymoW2SKvBNM47j9TmtRadz9KPWPPxQsksnqp4bQhQy9BfepEmFEU7VeFWHZtYeKNFdMjL",
  "key4": "3mXMion5HgCLsEWoKGX45H23Ag7XPeF1ZK2LtUgHuwc7uAxkembJG3VkR3m8JTccBPv87XgQGMUTmaK4vYyRa57D",
  "key5": "2AKsWVzowA1cTjFWi3XsLcJPMBDj3ad8XPcdYXPWE3fexrsSaaxKtXyQAbWFbUgM6x4B6Hy3kGvNJf7MwdF9RXYU",
  "key6": "36dp3rFnkCuUv1T1ryRBW1sDLS1TE61DTNkp6nq7cZiZ5GAniDvWP1hqLfo99styiqMrFvTuQhuCpMKyrfYPQFci",
  "key7": "3UaASoGCGxg7V2cx7nXq93dDTAojaNjaQrdPXzhyJ2b8Bauhfn4zWSBEXNeM53PMTMV77SpG54Ybh6g5KtXBFhi2",
  "key8": "5DQRrUteh5oF2yXQBjiZwfDaCGwjoHb9bRnQt17KydgphKkbBKuVUrX9Zi6A8oUJPKAps1yDg2SYdyZD7aVSMiKC",
  "key9": "4PhXuPEk5QYyWojfJF2zV4WGJ2ZcEDevoxReu6Dcdhqt8PfRhMUQxRVj4WaFAzi6eMevbnswMUnUBAyth7hCEDTK",
  "key10": "4YP34szHweyBtttaDYTkzcz39iaXgnX4pNCsaQJ5UG16Z8pQqrJPnR5mP2VCfMJknpnkNTzyVSaMJuKVZSKTfKUj",
  "key11": "2qfdcCA9fjTfgGVjHGhRx3DTi3Cg9G1XrtDqqJfJowaGNCi2Dxw6noLGueAzd3S1roXun2UwbC8uf7T8KG7nqqqM",
  "key12": "3DLUaE31aCLvPU1XXqLgLfJvLkR2ps4jHqLs5BM8E91Gce8RTVWQhozvmGwtwqbSN5GyYLkiyWgm4MMLpvoBc1h8",
  "key13": "4enap45CGQpdSNuxiwCkuRUzB9GFbEKgWc5vMPM9UeUEMQyxEzFrmMKHC9sJMxNqFiLooyN6DGyTFeESGXaCSDT5",
  "key14": "4ZQdkyXxR7chB1D57hNxV8ZZb7LSkPAxHNUWchJUzZFnTVkM7S6xpLvYtdjMJFCcJZh4Lg46kT4pAkgakUBzkNLg",
  "key15": "2Q5w8Er9KBPqYqNpDrY9m6jZ8F2ZoP1shjHRaKoePkdJSm9wopU1Uj2zRGJ1kwVFFMnD7jyn5ye1T5RqAv4Vd3R3",
  "key16": "3tvqCkqGg6dJwYn82w1kpejpZayf53LDvUd1kaQs9QKr88ArDaNN1wsApe7xjVsaUXfYUzQ3vjxdChmSopEX73MH",
  "key17": "41Le9JVMdNxzJcKhcsxjcZaj2AaumAv34VgoKnvarEvDCdSGXpWNjVFswYu9156KqxL5qzdkttHvKKkuzDGnyAMU",
  "key18": "ytfJ3oU4RyN3tprfebZjAwW38XeWm6E3yWoTZ7r8gEwymtkRQYSFxCqvQZ2mjKwf6kBPMFst7KBtQsitDMTcFHX",
  "key19": "27979xUqU3xpuNcTBgq9x768W6PF2bBrmvYQhrk2r8Y5ZPUaRBXQQvQ3hkWDKHuoYNHJUtRwYayPNR6TBTpvYAjd",
  "key20": "3ZajdSC9EshpKL3nqXaYQMo64rBs4WpN3TZxkiQTVGeWr7L54ez3PgAQwiMhvpVkgnDgMuEYST1jHGSEaQXckKJJ",
  "key21": "2iGHUtEALWvShb22SfVEHSCLari5JSeh9dzsDGQTYnRxFaRti2hjXCFnLqHjjjHabTCCs3FbtYbJM6yLewQojzRi",
  "key22": "5i6cG2iTNVqwTSAzoTVrJRA3X8WadVfNi6u2T1YE44ncc7En5dTotFV4PR4CiJtK8rQP3H5yWQVRzRbf9UM8gftz",
  "key23": "3ojrVg64bMZYJ8T997i74Z1NP7u7CFBEkGerBbsrc4caexKaTaL8TK2DSBNzodEJ9cv4XZKXxsw2rtdzieXFUoWv",
  "key24": "qEK4EpzhpM29US8Hxpkx1rh3kbDj5At5tMHcrTBAj8zLfbFpkApbs5beeccszFeQvAvsnenFvN9xtvhbYpysSzE",
  "key25": "hmkd24dTSmBzGcNEbsTNPTAeyy2phE7YrxBdNu3NpeuBWU73EogfMbsZrx2sWEortHYLzWZJbajxJDnMw8ncU8F",
  "key26": "57nSNSrJVQHeVWUFimDGFHD3nen6UkispzhigkaaUiH7BWUrRNz7PRqebE3mz4r9czQWeXG45kjhr4soheXE8gH9",
  "key27": "zEo8XZyMrLf7pTg1wS7G9aKP8fs1eH2ZNnmPDMMhrC2hBGuWfWc5oeUTELLYXxEjEYKCwtgcaNNBSpwFQ7qZpXS",
  "key28": "2vKvUj31JeKcGgrWuZevDKtst5Ke4cS4UqF724aPJnsx9e92rR8CHANonNXtddxDf5dsVMHUQugxT1mXJ8Nbv4i5"
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
