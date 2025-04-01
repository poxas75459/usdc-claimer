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
    "2VKFHDCRLDniTE9xPKi99eub1quciaWy5PjrosRFg6i636jJ1ApWrxbazqLQqR4F4rrfLBvt4MVCJXkibuCK2xd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9tffkoPoTtWeXKnbaoSCNSXKQhsENjSRrLCft3cKAH8stY7b6vG5PynwDGQbEiiy3Kxf3Vg38KBA7oRj8WZRptS",
  "key1": "5iDgUW1o9saBYZxqrFE1bpZMLnxrVMAjRq4vxi5MLNpNALKMFBWrLDtNJ3fT3L2wwyjnYCvnf1eE8VYQuPUt6Xvf",
  "key2": "5Uti4fbHJ9PVYx8FkbX2f4hDEvxE7zsCGDkFikpBtNczT2ZYLh7QQTf9W4qaPioEGbemRQGkFQ1HW2SbnWvDPx64",
  "key3": "3Scgn4b2huqwPyjywKrsirDpkQ26HbsBhvXo59d9nBrMFBAwM5Crj12Putz8LuVQCrfEm8UzGM7EeMR8GMftnJmC",
  "key4": "4dUWZx9vxqu3MV7TZ64JJhAcKfci4fYhuxDQNmkJ6vbEVq8c8UiE64zUssVBKPKjXbTcCrnsmHGNVf5ph4SL4J1q",
  "key5": "JFeUcz3Mqg8hEcXKYttsZy7k7rrYM5ZN6B4u31371cLvZShvBGXXwnqSy2yrsC8V3vs6fC6ZNdDQczUWhLayrYv",
  "key6": "2jv3S3kGaV4ByzNWSNjHts2WDTRF7gXUJfBubVVhqttMt4gnpmYNmtp4NbNZ2UbUvftSFqSx9EErVBJtrqfdmayW",
  "key7": "GPsQMsZUCEoR1JWVwWLfmwzHYsEHqbrZTzBEecvDjoSjEu3Yacs7NU9ZcL7NgR7kGyG8PwuhWD8hdoWyDcQwyu2",
  "key8": "XwFR4i6FNXnjZtsoq4PR6qZM5Q6ViCcuLh2mMjbnHuhfHhtABubyHFMwZRkZxKXnofdSu8jYyAtKPLswUwBP1ox",
  "key9": "TPC62HRMtJhWqAKwRegKtH3qksUJ7fJ6PdB3Y7q5hJh5dJhBnScnQ2BFWWy656b75uBbfTJhB8ckWq7wmVciHo1",
  "key10": "3Fq8tW4APfF3cnokTaeSsEcWCQydHLwzwerAoKnuMNQBHDAe9ZyG6u2KioeSPvJmmGDsSDPYJfcdhXEJs5Cfy3ea",
  "key11": "4oMQ1LCf4DamHqduZoq3YQVSauavY9F3wf8DP7JgxMx8nnrB4S4QsNcQThNLL9q8mLpyDtWeVmSoDaygdgRNbS7X",
  "key12": "3ya26BoP9YaTE7D84Ho9VzawpmwKYWWQdtCDKT98sDN13HCZ8AeshEKXRAHTHNNakRTH25pYdHVGnJLXVrmyFTSo",
  "key13": "pwKNYoeHbFKi3z47GeUCra9cDLjyw9x66rgBDMsuejdrdf1xpejCFvNWHGRW65jJE4Xnp9HKGGxXJ8Z4tPV4xNT",
  "key14": "3XKFUjduq4ZT1cEWXV1P7QjvRFEf79dxG8NjvefUt9Ayad8huY8jrhM89ssnHJN7BMVCetcg9d7YNeBhjkqYCPUb",
  "key15": "5yjWvC7dDkDdkUkSMdtyuPjssyu6LTztwp7rXKzE5Bi5Emjjt3ZadUzbndmPr3kJZdjWpkqhj3Xw5gUq11jvqt15",
  "key16": "kaRjX2byFUX4gcUrYZy3ogrsBZ4STfR9pAM2Cq9aCGT46FwbYwNCz1cb2uwjvb3D3nAtB2Jhq9hmEYdCL8jHwtc",
  "key17": "217VQZMQ1LJ9WJCuJJ5QTw5cUqzwGfsFL91f9kmF1V2xgxKWz1kMdBzR98K9BgTQKRSndZqexh2H1o4JEHpgebfD",
  "key18": "57UyVqZEePEc77Eey2yc4tLD4eoxRemwRk7qjeMtRHMRAg8oTwNKzEbbWY9y8LiqfMRkuQf54ScjtWTSbf79acBr",
  "key19": "5k2Mu1ZXtehfmWpsVxtgwWYfoj4T6n2KsSBMS8EZpJJDxLqD9HFw6UY4ohLfAt6F1tLJKm9khbyinGDbG8RaBtAp",
  "key20": "3RnUuWE5ak1dnmEoSAbGFuPvyMhVWg5MmUhLQa8NnC9AJNg4vuBW9fpKh9tAdBsnG2vJbdzBRd1DbgEtXed8uw8T",
  "key21": "bqWR7gWnimCUcxfEcPpET8D7U3h2DKhW6Z6e54QPHdggbhZX1XtDx34NBdCtSRq5Vv9kAJAjK7b5j7W17kXgBm7",
  "key22": "cSAorkYuormQYAGahaB878QwdT1YgR7DNGM1gz96EnFQU1Y6oE9bgydRb3yaVKzBxrgRGnoty3cLZBFbDFB7iyF",
  "key23": "HcM9PBp1YhkyGTTBYNARDEzPyQHEHTkkmb7MWmC9dsAxRGgvSqKy6PzRSREimgknfF5GM5UoHyzTTaZttE3UgoX",
  "key24": "45X3y6bGzM8oaV5NDiFaninVorfzw2XC3rWnWxjYyxN5Wuppk85H1VYh7Qq2x4amAxkUoeyYqJfUzmQMGpEZnB1D",
  "key25": "4r9h56uVVt5UfPuXh4M5nk2dJLkthW5NbKw4427SuQUxgWKmzDDRp8ydZXZCzE1Bcu2QE3XRbfbvunmqfjKhTWXy",
  "key26": "6561TmDNcSmnhCykC23W24XFy9huYs8ovKAudv4ypvkJL8eXbE4dbwHizj8KyT3XqFiw5cr9ouJxwPDZjXMET86L",
  "key27": "3VFpgFyeKqjL47FwwwNmpHrReLZHLSsb9yqj8KjeEGpgoY5YJM9tA5Y7qACW7goN16493sa5JrgTMgx9VxQpbD4E",
  "key28": "51JMCsqGjJLShbyPWV3vsvuDKqu4AmhJVVbpz4LDpUU6vdF1JTdbr9UkMkumCWWR4nX9Zy5ipcfBEu4kR5AYzvYC",
  "key29": "4uFWBeBE2tDv8pvMpWKWsvRnth1J4q3z5Uq12baKzJA8FPLedEv5YQ3atUAqckUW9hr4Th58KshziKHXjsBcxxUa",
  "key30": "329dsP9GkFUuXvKm3Jxe4q39FKVnjdju7fVKNURnFF3PSapbFknthiRaMpEWsRBnpjW9ieoPFtxq3G4xbgqhcXp8",
  "key31": "3CwjCS9AZBewtejxtC5gdyfN4TbKiandw66rhLo37NiY74y3ERnRUvVU4bAZnhBC7ak2uSGQbQbCtXuJS7sGrG9B",
  "key32": "2ZYenQvceVL99uGmCdWMS6t4Mc5Qgekwm5HQbo5NJz9YHAz6v4MCZphWkEisgDskKo98GcFRf5sBPKwtQRbZVfXb",
  "key33": "3HiygetHUMpiLkKmVLhusKsmR1aPm7c4gyJjw46HBPtnUVvAofxHe9PTVJNLNQG1LgGqCYprETfqQ8zfzFyAAZt5",
  "key34": "42fjKfhnz2q7wwv1cyfuZvk4YqjfFBPvYZHL4G13rEo5vHD5NgZdmGBtcjgPPurX1yruLsf9imRnAVfGGtpZLcAk",
  "key35": "2hPdCmgBfReJ41iR2BGH7xynjxm5VEKsxRaAiS6Hdtph8cZG54B4CheejcEo14VPcCYXWAvbuoWU2ZbcMURYgQXc",
  "key36": "46cHxbKtDxDTrBaHkNJ6P29mZKJXMhrEWzpUKe7HGBdmc7RTkSVHMxHsNRBy98jgXmTB5CvhEuFDSpms3BpZ2Fi",
  "key37": "oX8A76zJ8aAduKkfBxbugEN1hE6gXrfDTUzYEc4feYtp2MvcqPeNnkcuarRpTgnKX8o2NV1i7xxYJEC3K9gzsWZ",
  "key38": "3VeuNCScfgqvunmAVUYJhCBvD54QrKnCS2V2SawWYricuFiu8sAXZpW2W4HBxWvR6BjA1FsfgA8gFHc9UWmfW9Tp",
  "key39": "45rFXpG2ivzE7X3ZdVTK8vdqW4p4zLdzeJ5yMLG5GD7Ww1afMoZ3s7aMD8u6cKUggskd3XCzPxMGTBaEsvz3ujQE",
  "key40": "5adW3zPBSZ6RjdV5emjdaqJzmvLdotujcHBfjQAUiPLAqiJD77jsMXSp2o7m3Fxeu1DtVsurPEVjg5jc9brzPpZz",
  "key41": "hh5vK7fhXHHN9tKc8NH3xnB51opgnb8GJJBr2aFjSjthPDvX6P5utgrgAUVnPwwoQ3xfKKs2EJQfVNAfxhpR5cM"
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
