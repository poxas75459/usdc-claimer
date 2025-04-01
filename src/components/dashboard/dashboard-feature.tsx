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
    "5o3Cfb4hg6zQirRxDfxnXEne67zAezaMv5BUNPy1TUAeEjBTWRFVeFtARTCsxJqTpkBzTARZ376CvnkZttyxJA5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zVhRpmRvGy2mCboeMLMLz1S4ZQeRZc1w2Mp1uN5GhZenjeEz5UfmmpGJD2Wc52P98cZxKRKKdbjhWunZNA3rKig",
  "key1": "3oG6dtjwrRNVMuoQVGAmSBeRgfgSNSArs9c3FSJhrkDvHMb5d7VUT1fi9xwwkcHiwQ8vnhUfm4TGMsDgDjgdv1p8",
  "key2": "5gwGKHK9BUQnVvWw5eXHMGH33NUAgsPttdya2EDyrkvnVgYjetwPNRpmfY3PNSP9G4vR2yAuBG5VWYzDKQL4gH9V",
  "key3": "2tB1on4HmqcxgMwjkWSGULKdwShKwVedfzM5w3uwg7MHZ4RWMTwaVsta5hA4MmKPCowKeBCk6z9R6Nu6gRyGogqH",
  "key4": "3tLrhjzzqXfa7o7cK3qsoLddsCBpNsfqMA8q3vA4fL169oS9y6ECnc1bqJh9XMcxADU9BqXSrwGUutbTCPU26WRN",
  "key5": "mkPgM9bu17wTV8TdtUnFhmR5GonMuyjPahrXRzQgTomMqC4RqngSxm2TbDxSmtjiJp3cEFzLLD7Puie5vzqCcnd",
  "key6": "5V9o92RAPm6xrZyXPSADpszkCKJ76tKrqxZX1tSWsU8BYccgeo9bvFvAEUtSVLWaKUgeK4wHfaoGbSaKfec8V2R8",
  "key7": "35z5av7sBVSQj8cojybq1HDoh3UA3rRUZDhqCV2So3fFKg6ARpG4t3mF8ywRmnoWAWzHP8o59fgwigYq4Mvr4CWP",
  "key8": "4RKPgpp8X5USe4pMS98ymfbAn81Fa5R22N7ttM3ygwb8CdnvhbT4ARnmTiqrjUYFpuibKZBAKAjgrNf7oobJASC1",
  "key9": "4BQUpKyJNJR9uCtsZc8CMB7fsg2B93VMN1WveqLhYN4zvcbWgi6rEfNvsiz7tyEQYj1YWFk1X6ntKJjX1EsDbAyi",
  "key10": "5D5t5NwurTd7iBwG3Tjzwrz2P4BE2wocfpBHPCLWtXUWgGqBR8Mkkyp5wByEifxb4GafqYjRFC5sJmBt7mpNpZ6J",
  "key11": "44zNaZDWaxuXSg2xWR1uDu7aSJXH2z1HLNTiVe11Fud8xLPRqYBognTkY7Yg5jZAX7f8EwouFuLnZutqiQaaYmna",
  "key12": "45jN7mS9b4QgfZcFFugGgHteJQo8DWL1nXU4sGTwKya6DkVVLZ93GXs3em2XWN4b9TMwYtjxDdJH7GuHSFY81KU1",
  "key13": "3hr3kCHtBJNH47BdERNupHb9xtTLZSHJCPvi2XXcDwf2wX1x47t1E6QAJmo8828xCs9Yjg735JggB2ZS9JXSzYuf",
  "key14": "FFn6JrWFf5UoSswu5CoBvBjigR39tBxCSuvY27b3xjoZMqWMsqR7Nc1oyvMv9rnf6dUjezz7jkJpAzWhCVwYANq",
  "key15": "MkZmwokX4G5jE7b1MbtH9prVxTH3jzv4jjSh9BPMp1Aur36rwCqBWb9MhQKk4CAXM4vnAct6rzdjDdMha8ZK6xh",
  "key16": "2664vL63mRryZTmARSnLuCcXhAXVfNPysu2SwEEZwqYfkfJC4t75797EaB2Fmh8E6k8xFhiUrs5XRwavA35b3rus",
  "key17": "2yiFpmuL4jxFJoAjkPoDmVwfwdC9uPxtGik6zU8moUyx9Khiasxw7hakvcuNiQEKXaSUkuussr4TtSd6vVNAcwFN",
  "key18": "5fxp9icS7ik1SUUB6dEZ1udsLV8otp28TuNNAe1Pf4BzLbAyNdGP8K5PBJ7qZmUzwT5jgYK53nHejKLaA18s6Eeu",
  "key19": "3sMLKLizH9ReS5zQreUcRY2qmaZpCHv9ArHGJkz9KddEUdAdJssxqbdNw2Xk9CWWZXp7xozcatgbgJVzNsNoSfVY",
  "key20": "SbVzgeQYBZxzMeWtRqS63tWSfKRS4scdWH9gRAkkUsAAMCinHpMthpjZduMAyfvfGAoYoMxtpGT95mBHK79YQXe",
  "key21": "5pxMwN8wii8xvaoLVCfC7oB7vcqox4zryFvQuwjorCbWToghc2XbEPWqWorTqJGz6EviVXzGWppx4EqCeehzZLqN",
  "key22": "5meihY3i5UNiPpz3UNJ6i6892dri6JQhchvHnyLXxb8L2W25UqHXTzasbtnwjWg6HSvnzCMjAFztHPJ85NjuKcAa",
  "key23": "4XJh1b9WManMUM7NNScZbWVywuczm4m6Cf9tpu1bB32QNQKPJT3VLchRfpHVho1nwAB3q5fG6buEXgMLSrQBHNRT",
  "key24": "5QyMjPUNdihgJQwi8wQWbAqLGDoK52hH5LSPs8WAXWRqA4RDsquxDG5WYBUJo2B8eRGfp85Kw9HtKDdNGCJr7vhW",
  "key25": "5cAUHE4UnZoJP8o1JgDXsxudhB4ZWLsFT4qSHokuAGZCJsLAJ1pxR5JxXdhT5Kzy1zBDN454EamoHPDgQzZBbEzC",
  "key26": "Q3DQqaFYyhYgGSNpurQLKikFia3L5mAuVtQ7skCkyVUUvtGXswm6KJLUwH7HC7jchjJ5f2yKrbyJwjNBu4xjThQ",
  "key27": "2YbauUNTBmhY6421JbdCNYcG44fioa8QnLV3JR8nWNdMM9y77RthNXwthZc2sueBKsRHnjuhvDDvB4CPXXG6PooX",
  "key28": "CwMyuZEVf4znaYCChzt6AcZhPeh6Ticn3AZfckjF8GT5B1UJ5oug1KkiNhYCUv7hXW15t7mpTma6WznXPm4gYAq",
  "key29": "5hHicW7sgJ9LGu8zezEAbYAR4uE7b57gmUJXjosbvTbiU21jH41h5xMz2M12J12zk6kznEjs6fLKe5i4XkeqXjP",
  "key30": "3f2RfgXwr1xQqJCGK45ng1kgQZ7noLqETCz8k26jGernrNL4dDoJWvi6CaRNZjwe14fjymisCkGdNpiigCFxPw4u",
  "key31": "5ZmwuhdBi3RxEipmyYuvRpZvU8JKmiozSq3iq9PiyLAD9eqnteNDGcj9UFbJf7cBRpaa8tP9cB13Kyu6P4DcyP3v",
  "key32": "5tDiFpSHMfjDdJVYk4Scd2AqYPWan4ZN2t73GEmdBwDpHFc1rnLYSC1t7v3966NnXjd6pnUj9W77S7WmtCE8Dp5n",
  "key33": "3nREamPRagNoyE27YgqFAkfcExAo9g78S24HPsZmnfwqJFz6J9rZEh7dkfYbca6oZFnAiTda2HKT8DneKcUzkchi",
  "key34": "5ZAMhKZYK9D7gavWsKXt6vzjcEFWVfp6bSnosKHE1cpNy3QcuzVX5xVk6EuSqwd9qXesS7GSv8fCkD2j9J4bFkuj",
  "key35": "2W3RGeHQ27xywj9pgBEz3Tj2Qgfh1r6GfhpFasJGTpnQEiszpjGZhoz11fxDUzeK6X1GAxnY4rTFhNkP2fMNm1a9",
  "key36": "3x8GF6kNsYfgpu29aEpQHAxXuZ7iyY5bs23r4HJzjCA8fhjnhC5Kkv6ymNXzbXas1sCRcwuzuPtpZR12VNLFoeYm",
  "key37": "5oas1ZQ6aBmLPMyEUHssNnmFmPse61RM31PQR9CrrrBtkHAUg3itX8jK6Mn6wgZq6YfkY7THedLnSXsWRUeUtkkG",
  "key38": "3m4x3cfmV4LoGSoans2roLDQTaWVV95Qj5xrEEMND4HMYJuiUtaEGxk8HVDbHF3die4yFBi5rnzc9yHR1s8eeWkr",
  "key39": "31YGXEUbTAptcJSASKg8aiPLbcPBeVy9ZAgAJVA9c4RCLJu5Z7bbxqi7FzYUZ5jxnPezpiWvRC3VgFf2iPXxc7rE",
  "key40": "2d4UnafUc36t1jEYA4Q2Gdtov7ctWbb5QigVvwrBrLD1s7UrrHQ82oxAHX4FStFa5j5QnWkdKcVABHdcdA91GP2S",
  "key41": "wxwzDM4UEtheFFGu2JjgBUEo36DvojisewSLXiMSR5bzTF1Tw1jWDGyXiZCamZyUM7u18hrDif5ZYXAxgvV6A5a",
  "key42": "4PZ5PDby7mq2CkJMJ3Xsdid28uT4Lr5ZZUsCTkJ2WAJpMAbtiSznjzD3tXuRRXCJSqZoyx5UAgbLkDNUTpFbru3B",
  "key43": "Qk8kNF3GUzS5B5JpBMyVAypfztQbPn6M8CEdeUWM1zmxGqxsJgd96wp9pzn8P5FRXhJCnQL2r16F23aVvgVAmuf",
  "key44": "4EfDbkBVgmkucxHRuazs73uAfFKC85x3Cf2Y53uSqt26PuwBzJGCfwJj2o6GGcSsZKiLS7Kyyu4yGTCwGSDMdbkY"
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
