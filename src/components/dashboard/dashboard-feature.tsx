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
    "4CYwryoHZrAasDRBEuAmE6veCgPKsmUH4Epzy4pFNVSuhmaMZAMrh9bCW6ADEyLiFfcucH1mptesNjqyGSX9oBws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pF52VEQ2CeYX7jarBAaEiEMC6GeYT2X26XeyfnmMeVcku1NPrjRCPSdXwbhGJ4xR9gwWG2bRkumqyghHfsBBhbM",
  "key1": "3dptHn6cnGaiN3UxRjigEGjWq3ocgZdioeCYbgvXkL8C5uAgcvrSw7SmyZToSws1t1KfR23hPRr83NigsCremR4D",
  "key2": "gkuVVjppczZT5ZJDCA9TC8wEohzNXVVmMMFNooWBRSsM61dko9U37mUWfonCEGpLKDSkzxvLymx68qiDLAC8FGH",
  "key3": "3Uzq41EQZNyDt8Y3w2398siJYmnhpo8XRSjhK9SonKdMoisk7da8E2o8VoXXmsnqLnYNXz37RmeYo5wDZ8YM4Huu",
  "key4": "4oH818DU4cQkMDWEuyX5cM4pJ2XLShqa9z8jUYwD4pdABz8KjaznB7LdCm5NFY3Lu1cbuhWsYZjoQU5XyPBLNdrz",
  "key5": "2b6vwT5NrMEbT9JwC5L9X9a2CgGsGEyiwohVVA3hbS1jKbo73WpLoGkb3CCzZZKnfTKwMYa2RLwzbbK5V69pcLUX",
  "key6": "3mZQXPAt4D2nx8UdhCyapskFXVajmSin1HdMZpKqRwC32DWwi6CAaqrikfLtXAC2aFWoh3RUZbH6kRw1Fhn2zmAd",
  "key7": "2UhKBm411x6peLYSctSnrri5AqrHg2Fkac4TP6iWZ7jpkh1heKNect34Ldb4TMihm4vGQaY4prZKJ4yEhTXHbSpE",
  "key8": "5AehnUzaTxSZYw4qyaBRXF51kJY37MF3RDNJ5kBZhk3oBZz9xj3MLiAfMzryWtVqg2zSiYcDEi5rHWoCobpZRb1U",
  "key9": "Bm3QBtvkTfHjpeGNdoQLx58C6AxjhDneiH9vFfGs5woDkjHGtHzmdgyuAyThUnGEquDVEffHB1fH2afAahngH5o",
  "key10": "WTX4SzgXgX8oGYQptvgRMRBGqRzvKu7Z6ajKWfYXGaF2SKxVk2QiCJqftraMiqFR3TneAcUpRhboF1mJyYp8hyA",
  "key11": "3SyNLH9iqZFKe3Du9yFFCXDCDd945tkXx2mtagHCqgtvi7VpQzPS6gH9VcUYm3ufJCBFmw5H6hULCnvvGBk5Bdqx",
  "key12": "2ajiQqjxdyyR8GKj7divBJHwDvRSZxWDiBnabg1PkrF1SzkCm7NYDqHMC9NA2zovNzVCMuG8PnBZ7EBLg7Ma2LCd",
  "key13": "35Yt89E3zJKMVcrKp8ThDs5HcMnbBhhNx6QomaZyQUVNd33NtgRgJREi7Q4zWnyAiz6SZki2iRryTqEYUAxtQL2Z",
  "key14": "3T4Q3v2RZtve6dt2fkPdsbhHbXvmU4dxSBGkzRnKjzCbWEj3f2fvjxxVPZBKCVr9TDHQBdYGtsYKXF9hZERhJLEr",
  "key15": "pATtPC2pU6AYhEWAim9NXvNec438MwFHi9ymJ53c2CHyjcypHUciSsogcqh3uPaguwv2rtYpBpu3bp2qvR9ZyX6",
  "key16": "45gZ2WU64xZaRY1MjbZfWmtEz84voYrvnVeqFugWDQkhLoDJjMWBmsbedYKyBERQvW3webXmf2ZD9r4K4UzVQUFA",
  "key17": "3H7p2HhAAMXjyPXDTLapSVC2XkJJKyATjjERJGV3XDLMmNbX7zKZjQjwvNWxUobS3HeZXMkdsHKvKiFWtCGYoWxY",
  "key18": "kyxZ8sGXKYSq2j1sAthdApAxvxLjGuBX2yK4ajF1eAu8Q4LGDsGH9WREfQxMBboSF6VAyvezNTruVmtDBoKcZMY",
  "key19": "4rCRowNuQSYxv1UNdbxaqxd18z6XgyrWgNCHaKYBwZWdkcj1oYx43fW7ruHL5dtWp2DLJNLVZsRAhDGgfTNyvVsf",
  "key20": "3UrXvVddzfT61RUreqJeYJEVquq2G8pKwuATm8aHUAL6X7PqZjwcZHLLF3vg7DuiJVRpJ84apqiCVwRCQG4DXnP7",
  "key21": "25SGeNQDM1CLaPWmo2jmv6Y7Hd5Hnqc7xCYnLGzvf8VMaqsEprsLXALmT9f8Rxwtu9dcu8U7x4pMWRX231ykMgDY",
  "key22": "4t1kPHi8cuztTFhARfwbVCNx5FwEtjFsmE8FXp8jxHNHsNdwUFUmwyC4zPtrsLhKPHtkkgRHw8XjoSom7xzs1y53",
  "key23": "5aB1d7DnR6F2ps85x4zmWbvPEq2LQD4eo5qUhNeKXRYncde38vW85tmDr4SK4gF5r4L9MksTFAD8MgZVf25NbZTj",
  "key24": "3DdCZGSxZSfJChzBuUmX7QRAtbaYLbgrPB42PjKD4oc9y2sqtBroG51yFvxCRzCBwPjWSBag5FZNozkbr54D9B2B",
  "key25": "Q3DPSsURpD7HGBxogAGXzDxKeEJT9XLQGp14kHgxUsXYF8G4LFiHAHooeZEs3yHZ3anS8SrNCJueL1HXeMNb7Cd",
  "key26": "3A35AGnp9QMG1SQDHaLWA1Mfr48W1Aigo1PhCPr1EtZuz2HELgwXtkeH3uSiuXpr1nTnDpFUCLj6qHGvMuBXYFbK",
  "key27": "5p1q4kmXyX7yHzsmzXnwQarm98FnyLBNN9CUZzKQbT4RjbM4aHsWS6kYLJwWrbGeFjghADJ4E7jP6KffwwFzskwM",
  "key28": "5H1tS6MRSm9MAezAe9QQebzvmog1Uj23wC53chqk7fWWuu9GXrYKwk1nDawoRicYKfcNPyrQY94vpNX12Kd6W68R",
  "key29": "3JYQowoVmLu3eFNsDpbtZNr2YzpCNaW9bfC56Ap9HBsWMW16vqT5YEtpoxipy34PVe4M9dbPsA5RL7mwHuY5hpRT"
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
