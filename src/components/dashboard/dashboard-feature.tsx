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
    "4Dy2eYao5UTDh1KUHLdBGhDPEX8fYmv2eWuSrd1KvjPRRH7NSKLewBTEYsUWTSnNxyArMRBr9pLugYYU6FG7zLSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39vM8JrSnkUtgZwPxKM7ApbYiELDsphxwHjserHmQtgrU43P8GjLYBoJkHRjJaM1TDufpMRAe7yKZ3NCsUACwW8M",
  "key1": "CZKQSECnjDo9V1aV2zyBd1siabZPM3s4gJcbyKFUzBi8WoyHudztviE8F998H7u2bSvetyuvcE8WnPUdUg868N3",
  "key2": "TGHDzEii62u6Qk7vssbbFZHX8PG5NAmiexdQHqjbciFceviut1jBURjj7XWkJsgiSR7zSJNGYvhRdsJta1bisG1",
  "key3": "4AJEsqXYAT8ZqiVVpVSscYvHK9yTZKUnooRRRiyEsbTsUU9hrgtmptpRHY9QiMsEx1rBYEZp9bb6dMz9EkTbpLsB",
  "key4": "EF16CCZb8cmUfoZpuZQrZ6BAdcoMnWuuyRxcMEDDr9G487LFJ14s3NF6ea7GJ9ubi8NdBAXcfBekiEw8HMMGNPZ",
  "key5": "h86CCqznPFHvuJRBXGkZgPZbBYX4Cb23Y4iWPqdqLoXmjzUZpChA6zunWTbPQtJwaX7Rk17AG2AJ1ZKLWdNzrEJ",
  "key6": "5eAs3Gx2TovHo5gsr6t6KZMdXf7wUs9TtPf35Fkw6cmhTVE2GZ8jgPfJbrVKgAR8rb45L1MXYWkUnCpaqKkBRGpC",
  "key7": "2TWEn3qYstHrrdxVd8hC5Utea6nvA7HisGTggNCgDsTM2qZZfjDNtmiazaiHULLaboXCiE2FFpXGmenGcqnh7qgi",
  "key8": "CvKWEMz44TZXzLXsK6maPqqm7x5V6QU9xPmVZMhLVq3p1QoB8R5nDY2NFPYKmJRwwpgVJabu86UHkdYhmH8yk5A",
  "key9": "LTdbourUZUKUBSUzABs3wnF2ninxnd2125X7Yyqgktrmg7uXpjNLPSVcVYvgQxG5agHsSeyqYmQTmS9EfzVbYLs",
  "key10": "5T5ApEKG5z3AELaRPWMFdk8si9eAnkJ4RvFbsq8eNKXzCt1sUckgCm2iNysS5ARucXkHpiQCTp3nLEu434TMzd3c",
  "key11": "K7kDFqdiLFABHSfKWdnb888RBVD2aQtqc6PWQGWjt796z5HUmKYmKtnEvfzfSqh7mRNKeXJSJYPSR9tNf7JKAnq",
  "key12": "5Ptpgv2mn6wM8tp7ZZPFDxsAwhupm9Mtw2ofhdBKyyRSmYBKy7ma3Fj8mME54mMfh6mXd4SDiNw3eWX5z1Y9uGvB",
  "key13": "4sRZpg6GCfZj5EgkD8ToJXELs9zMkxFqP2GjG7MmtCnGPoRYWKXP9F5xFNjGG99KFh6bj6Qpz72AQVgmfLy6P5Mx",
  "key14": "43YAk5eyffDQ6WL9i98xTxWAPGHpbsmNJpWLJfNqmbT7LpMYHMTJzUaLVWMzhFt6FQGbY7YwoAGqP6qT9eejHEo9",
  "key15": "53f3Q1oJHXrLxTDbmsJsLRSXth3EiyUNvPVDVtQaEGMW65XVY4yh15hBgb1Q9KMHjYubBKyHD8mAZnSk8UxNH3YN",
  "key16": "4ek2GWK9zvU5NA1bXfiKUy3WcU7ErapxU6xzg8C69emDQXQVDWWDpFbFfULp6uoKJkdXCLBFANagsCpQs54Vh4ZL",
  "key17": "5YZhurmcXCuaZRYEo3g7NDWn5P2rj2XsbofK8Jj8wzg4L6iaxzg3NUSCZxJeb8jYBNyB8ufFEjU43sbdAwWcK5UK",
  "key18": "4RL2TGGi7JmUjbUQipMY4B7k7yp46rrsY9dJViWngPtBJ8fxoaUB9dqWVshmSmuL5vnLcvC39AjA6HwcTds57EYZ",
  "key19": "21ZxxVojm6MGxSvdiFdzKqw2z3ZMdN5NzDGtHMuDN5Ajyw8F6V3u1TGRa9bgDiudGi1GPADCWbHcyFnUXabLr1KP",
  "key20": "3SJtsE59eK7622LYthxF8PkmDSKPyoHuejerfjvfFxsaE6PzZCM2MxqptcE3Qz9wno9gVKCdtig2CYfWdHwNSAsu",
  "key21": "3WiqY93B8zkjs8xkg8doAiejdPoG9dicHv9rsKFjJhp1cn9N4YRk8a2hwT3sUwk4sRhf1wWiKFgouF7JFzRijK6G",
  "key22": "ti95xsLuct1o51CvLxiGxrJpeWnxaXE8rmcCXvqi8zsfhoNDWzXCT7mvMHGP6wTYfj3MF69D646uYh67Zyx2CiY",
  "key23": "2qBsFauQAhB96t8LJtDTGdrRBS2vavWodAyoFUDAmZp7uTjXdC3h1CH31LQnd159F3Muc57vKWkLnoftPaDYS7Wm",
  "key24": "5U88uB6fHwv6jtff8VDT27ULUqGQ9Lt69YxUBhsqTBaEgCVA5VZuWYWynNvpAWbbc6adKoXJaCHpe2jpQEafEWX4",
  "key25": "2JScXy5DTyin5XHMC55MxsEtVA2agNcpqxMHWjieW3kdD3uH9m5avBU97x69Tr7hZBKwQ5vZoFi3Sbbin9bnFpLA",
  "key26": "5brTfuTDmiAUUtKNADVLLTfvbKufCr2KaMjSxPcWqNUX5oW3sRwc2Zu9X2EDmMe6uHP8TPZVjDNjGENyD9QAGd3B",
  "key27": "2NgoP2dqvppPjxCUFbzvxreFma8qBMZrsknbdrpqFSfbLJSUTogLwtruL6GDvh8pdr85tv88NMNQGqUUZqD7B6kJ",
  "key28": "S2UBXnr3W6zSkvLbLbTMLW2YBccFGUSdr8Eqtjqr4e9Npcb46o7EKtYkCj8FuJszChBw7MGnnKkgFVbjkiA1AGY",
  "key29": "28C9MkKfJhNQ18bEL7YCqSMkSXZAtyXTsKcuU5yTnKeYHN1mdzzEWLT35x4dxFWingVNj7aSRyr7NvrLQL54aJWH",
  "key30": "2w42XjY8BB6kpVrXsKEytNTbunq5BPzUtL9NNtairTWtJLgAA75hNetuguJ71HRxinTyk2LBzW9V1GofjgLDucqT",
  "key31": "AiryMceUj2Z6DNePSkvUY5G5VwbBGcQeSQrGz9bYBbdNbo7UzoEqUC3uUhBj7n31saDqhw5JC93pmTi6G7oq8yM",
  "key32": "G6rTmFoVoKRC3khi1oJX6STrHyf9kx1kE4kJE8JMP2ActvRpeYtKf4XBKkHRee2f3RnnEu3DDiZ9q8uwvenvUza",
  "key33": "2NyR1Qf1DMmWbvtpx1oG9mpqqeP31qF9gH4bRAqYazS7JzgGEyQdAn6vWw5U9yUAhTuKJH1CXw3KqrzeAubeqLWT",
  "key34": "5FdBj4psWUs4QsLt4eGPDhb87LuCAbsSHXxE3A7mDPGgh7W73Cb9g6eT7XJCgEbXxFRYcKhAguqdwakiYbKttrq9",
  "key35": "2NRBcHqzSSbZ7tCWpd6sxkvg55iS9qr6RPWrKMjKPf5k9tvG45CMu647WVMtUqN9WVCx3nhbgipdSBEgRuwVqoT5"
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
