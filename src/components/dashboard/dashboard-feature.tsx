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
    "5cetPLdK2Y4maLKub4RNqZZd2eQFxXWEeDbHTHdyMg1wwTte7yfXkTVkzGc5L8oD2PRbD83zxUgkijnatLMZLu3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gzf1RTYRxg12zDBiJWBb3tKm3V6fiCCaYWrYYQ5qiv7hmc2aDTDaVw59nWGXijZWhVCDBZw5bA4ZH4DLafoTNy2",
  "key1": "2LT1Pvhp265kmXyAJ3j2STaJRzY5DxM9ps3tLH5jChMAZH6Rvk4eamsSeKYb728dojvfwXidrehf9QasNARWUQJJ",
  "key2": "2Tr3wj4nyxigdtvTHPCpN4wDYjRwYkc7ksRknXMwsar8GFkYg3H4zn56ctLTJCBqMtDsBZ2aHTwpSoJ1nLqaKtGP",
  "key3": "3VbBWP9ftpDAnzYZGk6MgQiyBaFF7Vgsk9Ni1DdUQqGybqSTUxQ4nESHpSbiH31yYpqza9UScKu2dpzW9McHFDdt",
  "key4": "Lv5cm7RP4jLtwR6PjagnMyeUAybPT3ygcX5mzAwEAKTyeJ8hivDMjdSLUYmxz71Vc2JPpdyLyxNWrVGeKswZYs6",
  "key5": "5AG5AcNn5xUdwEJyJGvGE54MmDEEPXuM4KufRg4tFrf1FJ3FeB3s5iEfyQWr9WatCAxxdbJq1pmLdBadUC4aEDJG",
  "key6": "2ybRwoLFWoop89Y2FVuyDAsTUgGkkDrcNLFbfnh5YWj1AvvgmYV8zqx4gqhsdWTfwFo7QWyekMcD6v48vRGJ6Ky1",
  "key7": "2FeAcSpEATcSGwdUCuRBMTmTk3AoLqy3jqjvCmB6ADMetHnKgNaGBrnyVu361d8UQcoEoKNdUwSPA3rT9NhuHHHD",
  "key8": "2MTrYSdvvJYw3fBdAD464cGYQ3hS2MvbErkWTKtwk2i83j8V25DY4i3nPRyQszeXZ3cg8Pc72EDdcNYHLwHYm135",
  "key9": "4pjdV4Ff3BX5Dbtqq5Rz5bFpK9pchDKdz8Lw1RgUZBJcZG236NptFn9NJNXbLgBBanLnT2FtdFnSYegiJLB5Vai1",
  "key10": "3U8NutxkwpWJTw56uZk1T7rDJEUmKVdip4s5hirybwpF9m7bzoJdwgQbd1fjApwa1Ys6D5uP3n5MWeiitwi3Wm7r",
  "key11": "5PRSenaKoCnSYKeuiCMy5RBno4vnquWmSmc3s58dgGAGmGYFiM4NAVtVGxHKMxgB7vfPsb2YVaJxRJcaPAS2K5L1",
  "key12": "55dEcPWMXxd7JV454btxN8G7d9foGiipeNontV2erGjdvaLuYfVWDrSvm8qoanMSD6igtroqQK86GxgariN5LThw",
  "key13": "fy6RRkLXNTEHZHN7qt6u4psBp5p2meVi8gKYJcehjdBLV34yQdDWgUUQ7ohpTo3ZgMVK1MV5pCXbH7fKaqnpVcy",
  "key14": "4m2ze3LiV9WXAAUTfx3ZJKaRDzK4WzgNQJDgaCa5hwje9rJZnBTdVfNm15zRQYPxa711gexHv8hp7KHDEeCgpmQ2",
  "key15": "3bsD8SsRufD56YW4sDUGFKn5csjApnBarr7ADu3emwUmiuJr9LSmKzxQy8HuGJazGFcvbnNraTjrBMSgKsUg6Bmu",
  "key16": "2Ksc9W8DpyZk7eUDDsr5MeF1n1rrAHsQKjpaRuyByXKTxvkEZd89NzYJ66JgWyTG8c6bZMGJdhQpPY9zsrMwRSM7",
  "key17": "54MapmWiJUvRmF7GWBdPoT8ic6Y2DsyWkBNKn1TnSJmHgSdiuPGzLCGoApKKNVD4hEJKJCq27gtcphhJmT4Kuu91",
  "key18": "4BxM6xg3bVvdbXCtzdbnf3w9cqak9GodRcDaszcHowbfFc8Usw8HBjspafwktCKdQwGPLWoUTDWYrVrKh1kqfpSR",
  "key19": "3xR4qn2hWvY1FYHhqe74jmVmNVJNivKtT8C8VaUUcnuhGD9yAbyZ819aMmQ9SN3e7auBYkkDd5x3FBux7SYso6Af",
  "key20": "5MdvsjjaVk1j2CHQD9MAbb4j2a1PUXvnkwFtHw4wLA7E8EfBAyB44jSRLdwuBNfJ1dcvrsiwdhz6BwMqCnBUA5v8",
  "key21": "RppXowZnvygYksfRUAvM3APWYTEvZ4WMJVKsSKBhC8eBuNWMf62dC3tFLF8qbZ8RUTrZrssTLis8X9pokjWhApA",
  "key22": "57sU9gdqfjk5dzLeKBMd7rNYNo7rU7d8XUUWpjZ9PV5cP6axcGwmEEwwuFazMErjTJ15FghYNPHm8RnJxyrZpWrd",
  "key23": "3yX4eH2Kbjw3f6JC3QJnDxXFEfjRrBZQESv8YQRRWMPssLeqVT4WcYgV64Hdm2e6JpSmvAEVpAK4w7E4n2WJkCX1",
  "key24": "zfoiCawhDavd19b4VQVJDuUYoqz1SjvsSeZRQBJariJPa2NsLvryLjDSUVgbL2P6nxP8skk3Hfr5JLRFhTebH2Q",
  "key25": "3htR81QmC7Sje9aoZuczoK3UoXmodw6jYqMNyiTgimxKnx8ax2t6AHUzB5SDiktP5gSZUisVzpQoWtfycyNrkUMf",
  "key26": "4TiG5Pu4gFibopnNctRfHGwuKK66HMY7svC86QfFQcHKhn1M64JPLqZvQ26BDfy5T7EiWW1D61AuywFR7X9Xtee5",
  "key27": "4qxWei4jHT4KphFwH6TRCg4Y9zqDkKrNfuVHgswvff39EPo77oxEyo4uikYQzf6LGBAugYVCM3iZJ6stLFf7gKuy",
  "key28": "2GChNW3y2u6qEE2fJMvCjaBMxUaezN9TPxUe9eZpCy3NoMPm7zypoXYfVxHGjZHJUcveFirsshEeVkvCjjJKpHhH",
  "key29": "bLhwjsqAR7avUMnEy6zqTj7YmSatHwjeu6m9XT2HjcRvNCmkJuEdEKUe2Ck1Zkp3hnHEwXQyoLWQ6guzYoVwo7r",
  "key30": "DMEaRY2q5YnjwNuH4itYWG2wq1qt2nmiq95m6XEy7n37esZaAtVf76tKjPoWp1xrKDseCcfNjwJC1NK3TRMNRzs",
  "key31": "nMTyaTYZAijDoNC8csZY1F2SRtoT4A2bHGi6L3YWhd3LgpnXm8P8SJ2o23G4bdCfZzxCagBqp1Gg95eAKZ7evwk",
  "key32": "2j7Mn4JUFt3sDWRCWuWP2wAW9jTQPmkiikUdvghFEfDpcE9JwiYgfm78Xa5Z2cMNmma6jq4Jj7vJQX3zMhyKFaRd",
  "key33": "qFsRFtMNHMLnfrzvE9my5sMB6mtjrEifnPEXTtaxRHUtwbsx3Vgot7X5GPJm2pBwDNXMCNAwBLrq1mUUMUuvQnZ",
  "key34": "2C9h7b45NnmcWNSYrm6heb4DV2a9URE8LWSwvj8zU1gXRpTBpTtiqgE4BWKgmeyDTyMzPXuuBPGPxfw7ufC6EKMz"
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
