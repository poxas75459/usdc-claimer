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
    "sYkNmyjkJ4B3qcnYmn6pKSpEfaHUUPtusFgRgmjMAu31eeeDHKGBFZwoYtm7W9LQn7dfCSirkhg1XhsiDUmRCM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MhYVHLpF3sbvE15oc6Kzk5D1sX9EaZqYcisZyJsDvxDZ4JFG8zMsggEfCQGPXq6Y5AYa6NGZptZEUk31VvFTiP3",
  "key1": "467qcSYbZ2jhgsQ7SYa4L5ZLV1qaveDNq69Q7sm3tYYENkYRMXgcvodWiWJgXXbp4WSrBoVYHFQELyKzRzooFACu",
  "key2": "5yNyhpH44tBCXCgUA3C1cfGn9A93o1ZcpvxDGEfqYxo4jSXx4U94Mqcf9SY6LDK1RruvTTAb3CxoMP9c3fEcUYJv",
  "key3": "5o2Ki9zRya6XXmWB1KoukHU4sThWmLfoy4ZKyQZyu6e2rzzKkZ5okHzL7iBQ4CxtgX3nEdwiHJbYp6zvV8Bjvsg8",
  "key4": "Tb3jDpKiuaf2FGuer85qgGtybVyCfq3vVUXXk9bULGCnr8CYEzJSPtVMj2nBpofW2y7qGwBwg7GvTYvynj79L2V",
  "key5": "3zR42RaXpF7CCSNqFHqvSqpLswCAXrMP5o6Cvbrum4TjoJD3TUM3DSS28SUcGy85yyH71mpsQXsedH7RhpYMMweQ",
  "key6": "3GjRggPusCN6yBifyRs6q7nkZPSXiGEWk8fZXDmBmPdc3cbxg7NeG8eHZ8DUCdQa19WF5ZgRDiHybjpBUJ5HVkBU",
  "key7": "L2SgS8qeCMGqbMKnEvW128nb1ixvrmWMKhm3E97PyQrgXGmKU2Mc2bSBA55e6YpVQ4Ex27tTi88ixKNrNV7ABFc",
  "key8": "555bktu8W5W2spcj8cuZakpkQbECcvdR5uYEJDuWZdBmR6wSSg82wYMSGDdS9e6enXuRASj7eUosBiiDwKirZYM5",
  "key9": "VVveC1SXivsLCHaYoyRRBeVg8DpU4Gf6JyCd5FrnhXSGeWtjBobjWKPscrpZ431qUc2wbHjcMP8M6hLHCAJqMpb",
  "key10": "3tB3yL8gZxV2jL7UgQJ3rCVd7XnAdb3xUr8sdgmMgvMne1nK8NG7pasHgzWNxFE8mkMXcZ7tCYHLWjsKtwAUVbpL",
  "key11": "AcDxLvUxK37KYWwne7gCnS7qSGtkxCyArZh1ape6BHyNEzLoxKpy6TuBHbihCH5uZwGbvGb9GHormCAJK4T19hW",
  "key12": "43vhzDrCEJ6a7HFdBzQUEdqAVXdDb1YuZyENUsSBN3hmdeRwkDcwwozYAZqGZiAAh4Ye4GbdTtkRLmXjvV2geixR",
  "key13": "4T6UP51YS3Sj3Q215yBhCZiJQeYgaTXRCZT57PttNTvHCiaThDmsNwYUPBCR9P1ymazfWPwhuV2qzLeFP7wXAWeL",
  "key14": "3tfsU2im69mcrs1oKSkpqJVdqZgAoYP3k5EajGYJNxscVpapGUzC95MDnufJqpFpjs1ecSPD34ZQ5zJVLo75GSGr",
  "key15": "2SW1qrPJuoM34kjHNcoHTdeGbSo2csWPMe4pPxBfa8jy5CKZop5QxKad7yZhcreok9orYv6ggnLjfNRBjY4U7frY",
  "key16": "4TPHM5cX1m2eapwPEtUkxX6zwoygQjCjJfrpqBfVMYjaQk8RsieWMFXqfvwnvHfRaYvgzcqnkFkFAUSMVsstS6Ff",
  "key17": "63MMf31WfEBjW895Wrmufib1uDV5hK84uQdD9aUoZMPUoKPxYc6cDgKYLcipdg1a7dBYCeorarKcuRfFMWerWDgd",
  "key18": "L9RPDLSXheKjYbPbvdH4Scru9Y8XkFPn7s9qZ4VNy2T4aqh2DjnTqeUmpwHVKkUNNzC5Z2h6te46N2eX734ok77",
  "key19": "64jzhqRVp1C2i63Rfu7tGqckgFc2w1cVoScY6RhSUpmnmNWUwHY37xMkpgFVLRBLHuSXEkzvZvfHTZi7veu1wkHW",
  "key20": "99tcb67HpyJ9zQTjAjncbxLkJzM8hWRVdvpbEmRjLbzBj1i46VaGt94QL738RJZjMr6EVYviWp61U8MuFhPoCet",
  "key21": "ucwV5bWkxkDpPEX1hhJAGBmjsnBfcyu9JRGjLtyL7Q2BMR8md4VxkpzzQWWuuRKHftG4niaBwVkgXLYUUAcTwja",
  "key22": "3jK6762aY7NDtHtd9Ftkx2nafh3wGvYdvNJwwyyQo1hFzHez52EFJLYP4XTXFaYsMujybgux88Q44u2BYwDsG4S6",
  "key23": "34dcw51XgeoG658nFfA5aRuEpXfWzGptPRTqWWLH6et444R3FmqN6unsrGBfPPmxKnn1WHytvpp4beoJDZAXtcHK",
  "key24": "2ZqCrJof9n7QVeW4FTz2zqkP5TouUfvDF9W46wcE18aRG42nBzHS8ZqcWLfrP7Cg8dAaqy5vSQinq2cRHWELfdZD",
  "key25": "5tReZ89vRUp7J2Uwg8qqyasYu2Huhn5o6k3KU5yvcJwn413SoNBMraqs5dbJdVdm3fJqadQeEHeFzBDW8CXD5vyM",
  "key26": "2TxDB2okenisPow4kMKVS9UXHgA3vrUfuECHpkbtGwmDX21EoidLCRirj6yAsmbvVy8dz4x8YqmBu3sitxwfHMY6",
  "key27": "5zZtGoDdhfY3gYri8uCSVBR5KQL44FhYGMcCz961WQk6KtwcNFdsKBCzEF16GyrapiBi67GWB96eQrzB4UYj6na2",
  "key28": "4FfFSfErSXMB2QnxdWiuh8g8JDwEe7gkpQk3pqtimW4cyogzvGv4J49ERjwwXYMGh2V8ug5u8hGKWkrJwRGx13mT",
  "key29": "gQ6c8rBMSnHHJNCLkd5HbYJaJkdDcBxRoCwCNdULK4ji9JduJvUneobknZzbfV1aS3yayMEgP5fAUEtyDxxAh6R",
  "key30": "SErmJqgRpRRcMEyisoVVFrHnAApgs93dzCvViXdgm1ncMu71NSW3emUJ2YF9bDUFfZTPcj4FEpvauDrE9t1kjvV",
  "key31": "8uW1Vn6bdfgZPUEZgXZ9knEkgfqdhCefEB5cz66SYvvKeUBQ8P6QvsvJYhWh8S8Fu8mPpvCP2H6zs3DRutmxtAi",
  "key32": "5XCPrGSGhb2ze9D1outQnyzLmuTGjQ6kpMKGXe2cdQ6LmkPWguu1LkbBWvM7tCs3NMoCRAa27rcVRqcn4uQ159im",
  "key33": "2x2Nv8iAzt8YCo3KVahv98UxdiqCMVqYJUEndHtbsicXYBrp44UemGF6CUXuWk9YcvYabeYbU3FM9znsUcBRLGDb",
  "key34": "24UPMdYwQ5kXt1Us2EpB2YBtPuu6sSm64YYRUDu1AqfuLioGBCUaJd326XGyKYm9iV1A4zP8iz5yniwNSozrFfv6",
  "key35": "o2R2vYvKUD3Uw5RLd8z3ujzZ6KEGYCFbG3U89Po5uB78aGKgcUm4HkzyFm6cfNetqDE9A6jkg59KADzYCUPGmVB",
  "key36": "59ebPtXyVCs7pxN16U4fQkG4sa4gH5BWEZsch9LZjREakA82hKDybjdQsiYGZeXfNJUDnJH733XjyDfLsoLcvZd6",
  "key37": "2kU7GC2J46Vu25r8c4TouQVmffFhqdcbL6a3DeSFKD15s1DWNEjvz2QWCZrGBdBHuaiacMMHYt7er2wyvvBeGq5t"
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
