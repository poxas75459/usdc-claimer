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
    "3RSRfPpL2LVQ27jptwuh699XEdbGxGBiTccbqsf5soVynGGVggsBENVonvb9jorx8REXFcNh5s3pHSjBsKoHJeBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LjrAdELZNiNXXDbAq3GAg1qFww2JPPQdmd2qggxJB8daGpNBY9h8jLkZrz16RJD7xJrtNsoYej9LNqxzY5buSEQ",
  "key1": "5JtKpDUBhEyKkJpECZsNozNJjjGmFeCDs7iUrwqo1Kcitf9X6dDP7tfiEEKArs3zojXGzXQdimDCNLEuLtiUBgSY",
  "key2": "2nxaLXUMiMKc25P5LS1wVzxWNrp1orchFzRjebpCHJh81Civ9FHpYRCiKyza4UUkUm1pcAHxkJidsCdFeRLVapK7",
  "key3": "4fURcHQgyz3pG7bYdAzpwsjyLwxHD6zLtvwrbaLryTucrfA3Dy67558yb3ckmKgLJzHqdU11s7CgDgPKc62LAXFy",
  "key4": "uruVUuJyuWFEorck6ecKra5jKHrsmJMAUBYtyUkwsVMkY4n7v2UBLvNy8T5pAyJP9349zLePfPABM3xQWQCCjQr",
  "key5": "2g8gJJcqJ4Y61kdwrBG6N3dfZUoAuVKxPYYqX3Q79aghPw1L6wgARBzYH6STxhodeyH7yDxevuiC8uqvuHvPZ3HV",
  "key6": "2PPYXePAR3Mspsa38RawF92iGuRVkENsnAhbjvFATTr5SNoXzK63i8MEvpvYM54tGQvHGK6qV9gDSZFVHiYVfpL4",
  "key7": "56Ff1UiNduTpXN7gBXrkSf1tm28ZVHdtGR4ewu2jsqcuqW1F5H324ynJvC6CYC6UbmgfJVgeD6vWYLPBqMQJ64eg",
  "key8": "9gU1hYmGqPv6oyjq6ao5qZuiRLDo5SLpWTMEYbJjPxJn5t8ghkugXvZVE8CFSd71RU3NfeB2in7X1hpZCGia1zg",
  "key9": "4YkQ1PVaJzdZK9pF5AZQTT5CtNo8DsXDBh1vfp9Un4s9ZodYmRxjgFJApM1HG1fs1aRT3bEAKm4McJpE5SCemiD9",
  "key10": "4eTJpoHHfygnt3KX6e3zixD4chAzFh87KeNjjvtuEJeCeBYSAURUnJ3S4s59M3hQ87HrZPusHsTTP5HxrTKoLFGe",
  "key11": "4C3zKAaqvPve2tvjcE5WAH8crV1HUL6UcSy3Z4LBQ4xPSMDQ7pqavNRBKoJcW3WLjuS5GAVw1eR1cH3xEjp9XhKu",
  "key12": "KNYtpLByz9qjyHnx1mC12JzSzmQDwXYBQ7GBYbUfj3kL7jePGxqdEpoiCHN2tDwhdEBZymMNWswGmNQyLJGbrvH",
  "key13": "5SZFPogF7VK1CBtYKKPoXkRZQuYgWkygy2YMKJntGYNZwoAAPdbeVGrM6f1gaQoum9UixsU1JaqWvqhh2UFYXaZt",
  "key14": "5zS7x7FY9cinHCu5z1wERjt7dEHWLKJrDpsXEBA3nZN5Qbg2rnj3SvppMqLW3BiUu7x75f698U5s48gfzh9N1noe",
  "key15": "2wjfZnw3Wqa7wzJJ8fMNxTz436gbLmkqTNprBDCZjMeaoVdrSxGJyPkQACxaRBwDefANEYYyJJu1wpiBK6X7eb6t",
  "key16": "4PfPUMvCDyyq4yV8U5zhnNarYvi6AvsFWzjaNLoB17oSApbVF5gaiwK59MBacd4xS2vdkF1YGaFTjpU1ZwrtAy5k",
  "key17": "2RFCHQ7BQ4YzNNoF8jYfm8iLy5eYyRUcasDuZeDddgrBkuSW3oUUWLMuRKxzHGPZdxZCG1p7LkpkP8d3zUTvBi6Y",
  "key18": "3i86mtx99KMc53rTdLbHZmXErnHF9nMCZNhsLpTumTLSMSM3D5qMQFCUbvJT1UhD7c6zBS5eNn1BpnYwAjRkjKh6",
  "key19": "3oQS88EjDn3cWceNGLLEixGydybHAjUqy4SPWCoXiJumkvgLChArmwmBJUK9FZb8zzp7vKdA32yZkFi9NXvaqmTA",
  "key20": "4JhiagtkTYcUJB3J3HpbS6p79DDChCFjkNA9yeGHvjLJYtR9xWJBEhsepiw4iSfQN1wKSQ2prn4Zczb2NRizoDGZ",
  "key21": "62mpdbLZEqqbpCNM4XNSSzTxZT66dHov1eCbTLWxkNMMReFMnm3R18A7U8FfkrWw8BhhsS39kroSEHYWrgypSVaM",
  "key22": "5bX7kHd5hTwrheTLYjJhUjnrT97MDrKTYoTpLei7TPBk5Pz61oiFzbtJmVstCHC9a3gUq66WpfStmaRRvGbUa5mW",
  "key23": "4MnCb7aqyWFp8KpF6uHUGNqb9JJZYT9qWkXTeJ4xp9mUVeQZgJ5J8WFtw54aXGesVZkb12AT35R3QiMsUMjWQbqt",
  "key24": "2qmQnB9qVF2nqVY2H1uWg3UgHWo9pPu5NbXpapRXT5yjMiGUSJgx3mBrvjDMUb7cit9Yj6zJ8LjD4UZqP41kNaCd",
  "key25": "JnL7f6SYhEiJZzJgQbo7TFYLfwwKCmxTZ6uvSKB1zXMKPwtqZJJjodNQS3p17TdgFjTHQZDfkaXCXhC1fD6Gens",
  "key26": "2bEtZ35DJfjE5ofWLkA1Vwz86h8iCvwXNiNWi6wTTQZy7UcbmxTZUqDd9fXFXeMjxtSj6x1yPyZpRwk7dZp3yDYT",
  "key27": "35FD6gSu2Gt8VcVCSdUNwqDAHTg7qKAQEetCBVgDkQxC4YRJqTeQLHvjBRCgCW7ycs4zuQ8XYGmeCsZQ7F81qAdn",
  "key28": "37XVbm5gk71ot9jHJDxKtVg6r7VExrcrhYePG92JyP2BrujYEgeRL9MTMBZbHHVZvXC6ftpJBaBHXscXS1jJvyYw",
  "key29": "3qngJtKeam1majiGUBXbemPVeijziwYCywryUMcQUGBALKoEFeHPEmjTXZcKAqqeicn1U9hutbknaShLUqXZMPm9",
  "key30": "2BHdWufGiurBnQmDFKFeU2LVuWyvVihSGJtcqCAQdN3UCBJYiu4ASn9sXW3ipTYdLHTLd1EJuQhbrXUjqfh71okL",
  "key31": "5EP5d9Zr66AqdDbPY9UAUBXk8hnb1fDCqVnoZkk5Tde4WTusM38CQZcFwQ5dkHwmmKSUmBVYrfwz6yqBD29PDCC1",
  "key32": "2GQhz1yisvoFsKioKhvKewTYbj3B3QR9U6nMvnEb1DUSnUc3iTQA7dM8aGizF9wPBoanMMduPrJvDr3N1xTxcp8K"
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
