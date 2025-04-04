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
    "9ZKuVzjbrq8BMG9C7PAdTEpD32vNxxNMDqAU7oNVYrZuJRNNCdfLqwt8qJbtqBDxn357LdtHccwcbjVpigqJA3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ShqNNkiLm576CDdxq3KmUYHZ6oPbncK6y6NHL1Hn2N8YegbnEgM65QPdabrFDkdok31pHK2VzAZ4kogz7RNDQZR",
  "key1": "2o1wpCypGbeRNSdz7YhELs8Ewypo9jE8aED8cs31wRzHP7pNX1vnWq9r8kdu6jYN6Gf7PeMxYJNdwpreQ8Vep7AW",
  "key2": "5dRGAHxBgD88ixgsafMr9UyyRXg9xV6Q7Hmdt5SFqKHnKWp6HTkjnmnb7bzTGpge8nmwP9q9SLJt4PcUcufsh5Kz",
  "key3": "bwxWthCDFzn5n6sRs8gKrVTqV1K4Mu9aJUWFvDtUTkBFcCNVW6dSB1RWS3Nnj6jDjLcEUTpTyLWKna3HmgQkgUo",
  "key4": "25DpFFnUn1aNi2CGojHVAu9rVURtR5Kg4kcqKdnjkW2QVEs111aKqAEVwBgYF4M6n3vtkSJwEphwVsxtojrMoAxw",
  "key5": "5JMuRVTPn8uXCzzNkwXcfGZ3jNZXg2dCDamkEMTJoVbZmH8sxh5zB47C8dBgdWfk8CXEnZ91GQPd5AfiDtn1jwou",
  "key6": "41yQoNCftZHnMFdn799XnG97fhFd8cTT5AbFfLAG8Qwe5FaRMcVasPjjoHCXFTpmPuvvQRpqq9SMZBuakM4SC6GT",
  "key7": "4h33udkxGJEKwq9ZC1K9BMCC2Fi1LGzwSUubqGHZd5yq2PPjgRCZ9vm1yy6ug7Wq6cB8hXPfp3yK884YppRDBhw5",
  "key8": "jRa5CJv9gjHWkUS4RphxqhXwtNdyn1jWu9WFnnJUCG84j3mfEAiivkYKZj52oqXQv5weP99AYg3pKQdBJ15X38h",
  "key9": "MaNMqbq5Md2vZPYdUaUz8xu1r4gnrJjTL6nzrzNU1ASSQ7bE4ds3EfD58zfx63xNvBDJdwnYps2XVobEYB2yuiV",
  "key10": "3BUNp3w63Um2fmtWFpPAideourtQTwnxuXJMxsW6QtGabn1N9qTNvRq68gnqnMD9iuts5BfXgxgzxD1pRMm49AGd",
  "key11": "4SRa7b2CSvwMCzwVe9KYdYzzD4ZFrCdxzPs6BAMDSUHh3FuJCampEwysfnmRfLsm29NFsoK2zfee2uKyZjbYFW2h",
  "key12": "5oqPnDcnWiq4k6JhTNkfHMVjbqjdVQZw1KJv7HQw5fqJ6GeH6UmXFeQ34tiiwcUom7Yjaa1PpfzE8AE6BFh2Xsr9",
  "key13": "5aAoWMCmBXxoiWQHgFUJM4vdcf1nz38pUNV3pM7nDWqZQfw6ouhwb98Uj3gLA4kyog4pjyRQxseJvYSXWzB12yzd",
  "key14": "4ZmsnDm12uLKCCKekcFe9rBu8ruLn1gSHJPMC4apP9cXGWLSiedwd8d3frYBpXbH3T28tHhdPvqgoEwewjWVmLbM",
  "key15": "5PBYvshPtp45sLYYyAcoPWc1JVVQz49s3zs6xmqKaT7RCAEAAU34gA2MNFV9zbjd6dFxPNTzcdMyWjBJVt9qTNro",
  "key16": "4NkMzAqDExafuYkG5ku1cp1wmd3mY5fL9wDt4r3n6kKrJc19ZozRCHqLAPVgqUB7ZaZPB46HbCqAT3VjYTiTEwkt",
  "key17": "57w5jeFmzd4pbrTXnZJmUaCCMVp7NYBSexqN2HJo7f2Jw8rcswmf2P9zzGBSuVEzg3v8JuxabZDGdHn9TU1Qx3b5",
  "key18": "5kMtNHhyRtsD8tUEsngHLwpqFyJkkJfSJphPrksbZGrFRFJo5xkPmG1CQMBhvkPyBj8FKfg42EVn41N1DLPBNffb",
  "key19": "5x5cxdc1SWrMyYLCwBQU4ox3pb5DFuGZ9JJJrswsxitAXQFZVWqAicKDMp7hyZoXp1dpPuM9pw1Wiqc9BLyxt7Kg",
  "key20": "21yiJNurUCHfrrRdgVSbH8dkaD5QACyK9oXvKTMJ4nfhSEJV1QS9P3sbUvyzASdAhxvgS4dMKKyNA112WXiCaZcp",
  "key21": "231XccPAwzjtJEf9UP69ia3XkrVUSghMwpPQb4S962vsCWpiHV68u5zehkuzNnaDg52mLV9M9tve6YrQDbn3wFV2",
  "key22": "5PqFDxQpV5JQzkdF3tGqiKiCMvuk29X1MrgTzouEoywwgEra11iEB7dKjbuNUvy1B4DijCkKiib3mHCnCgeje2EV",
  "key23": "5ktPTkeXSMeErZQVzvauc1wYkyvbG1RFEV5W9cfP4Nj9tAUS7Sirmv31xngtUXDAAq4Enkz62pwYm2MU8c7x2hYB",
  "key24": "5uxpRC3G3uf7jad3NkBGaxxPHAUsHa3cf2PxL5eRZmoYcUu62EYUvFbUGh92n1nXQahD2yM8qcbwxPFTzttUUzHr",
  "key25": "5pj3igfNv9d2CVCBGGeNTm22LBUDTMAb7q7RBarB6uJNMAiJwA3NaazPGWHw8ttJHwBj4BTCJ2Sm37QLLaA5oRBt",
  "key26": "2NvCkyLmN69LZYQEyGXy1dNMLh4b2yXtFJssDwWiTH5aiChqTsYCP9oMmT6VJHrqrNSvmdtS3xdJmmcNkfBtk4Nn",
  "key27": "46ht4zcTxK5BWw8F5k5k7UPovqyaB3NnSGKXbqfNLaEgRJHppNQMPkiTatX8TsawADDdQq7Ufqi4oESEzdP3suC4",
  "key28": "4wh9RnmGyXMAnARRMYMzNxxy5xR2VpHLSoVBb1YgrZEngGwp74r9hzuZYnL2FEsGzfnCZHheE3PX3gFrgVR7PBQV",
  "key29": "3TJqLZgqB1gqMcjbAshqWCV9Jo3Kf7LVgcvjY5JH4kZ1UPCWBuS8x71hDFPEQ7FHzmpxTu72zqzC6dgRwHusC7iF",
  "key30": "47e6bJicAZ6vXscHSChD9sGentvfN7mfUGFVgmec2tZyNFHkuAV3V1UomooMsD2zxwfykawXaUxryqRBAcXNFdFU",
  "key31": "4Sxq5GE6XL3wzTJCVKwh13wFHUnHKQPFmiVeiRJSFsxTHCFjHazMFr8FUWp9Z8FAw7dTnEYrqUKoqcir4Y5WYYhX",
  "key32": "3Y3kQjp39T9XwaUtveFBrB9FMNXnZHzxWghP2uVmdKBq8NxbKXijRmUgV7nqnwBDXXc1KUJqG8ceTnMv4pWqYm7R",
  "key33": "4PsNatu8qVNBZAYwQzW81ma9MC6WA5PLxNLLFpSsbLPJ7TH9fn7jyPL7D2X6HmHxA5zU8BkPwWcAD9bhjCMP1X4K"
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
