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
    "2mayUsV3bJRr39ptNYatYbVuCyxE8gwqwtEu5APfPAXNCLRCPcvVVkpHbRCZhDiDstfrT1eNWkpis7i9KpHaGqyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6172jLCJkqWzvLpkKBBKpaWFBUC2hawtafdLJLGghAFbRggswSR7jJYrKcwiw42QHV6Fv5Qm3KrYpV6DN4pUpcqS",
  "key1": "2qoPF4r2VqgocxWXykh3Abc8fPobFp56Lni8oAJRtzhZtqB6grAYWUqPybP4vGGc3Ko5oCLucupFNJLfpFJVvXFr",
  "key2": "3FveYhRV9k35skFnZAczgTFpbNZtKe7b3EydEDWmBZc5MUrNAXfVbe48u4rnb2YyaErhUNKrqdB4Jzmrpw7BW7GG",
  "key3": "3XLUbbgjBugvvZ5bdn8ywmiDyTLoJoXbqPv4BxgbdPsqjmniNzDjah8PVKSzY296pvc8mrE1YNRWV7qNZD5uVUrs",
  "key4": "5rbm3aDvGJS36fdomJXVArKKN3RKPjMT2LmFY5kL8to2P3sDiQiGF4AToCSuNa3SF82vd5v2Tds7Mcb6peGP8F8A",
  "key5": "3rvZrUevWaDX9ULLLEaamkZAU8TXDLCVhp96iXCLVWh7KNFQywB3dnFqw4zRB1B6jCQCaxZJkxa6Rtsmzgcs98MF",
  "key6": "5WpfHMA8PMkwGy8fw49Zp8d12rUKPLovkg1LHK5j7ppxpZp5GkqHYxEwptnTqXrqxEgKujPjQaHYYoeRGUEDBjxg",
  "key7": "3DMw8UAUsxmxs54LucXLtcRsrRUJrxjt2tgEmTavAEBg2T59MtN6XWhHP5Gzf69sdHMqqS1i9npZ4aQEdKdHpVwt",
  "key8": "cBjSV8EtU6CciHukkEYP7XgEbxcU49SXoX5ewxnHsNG763CWN4hSZQcHeAjJUyUBUCQUmuJA75DznAz1hT6tewe",
  "key9": "2ByXtKTBqkWkWaSzKVrKBtfobZzK5fNrmVTXbcX1D7yPsdtYzSpKodtK822WtFdUFuEH9bFri9Mv6xbhfuatEXdA",
  "key10": "4tveoAkgXkqB5R43Ar7j54Kam3VRrrpW5sH364eG28zxDBizEq86XUUYvWYDzR1UqZiB4RLSmimgt62MXtx7jtAA",
  "key11": "3ghERfeZZAa6aiqDxTpe34A8BBK6UDYwwGoFHcExb51h88SJNdRLXHSmaTjzWrah1nvoHvVY7g3dVxv2eZh9NKoE",
  "key12": "31RAN6JVjxFW7rKWtRyGACKC3nbF6YShBVW67H3Xn1v7LtwcSo5FyzqCH8Rav3XX9rtsG7qQ1hQwS3XMm8T9FbQv",
  "key13": "2if4xzGDywG7ZjGK4EQkgoKM6ucFQPkzT88vgYv7hvFCzeysiGmMGtsMq36ePunwEBSGjL6BoCkdNmAWuWWJHkM4",
  "key14": "55yPArz6raFZf8XjnX7QRv1aMxzH6QCr2uZxiqyS1zKsBKpzyRtEjMPH3PEQQzHS1G1PSYurcxHT4d8DU7FBoX3s",
  "key15": "1HsmMZo2XNjRAtvLoGZ5YGYxJZXeQNoRrsXtgnQ6YvtYrMCq2mUgAD9LysB4e6K77Hqh3dmQrfssKSAQR8b85kV",
  "key16": "yegACcSbXnpquVhrLbpBhcFFdG5dSFbDjo49zfzLC2BJWpm3MiuyVg3fivVWQ8ud9A4bmig9HXDHz8iRnAmqTgS",
  "key17": "2wmdohZv6dFKN3gBLymcmAm8SZFQuzn9gEauKXYJgg5PhsSn3Y19P7NJKqAactwH99eCJa662iNkpS3N6CojezKk",
  "key18": "2rX7AQZLsg55pcqWTUX9s9s1nfpyZdmrcZpzBttgxfhknNBhU3zKuk5x99qSnoHSHfeLBr7qNJr2NMfG7UjbQTxq",
  "key19": "2C9aGzgBeQTWvkZD4ZdR9ddgbt8N8ExgHUi41MnKyWNGTHsHSmbWgD6yQ6JrZZ6b3ohkyBACaAhmCKeojXhf1Vmo",
  "key20": "3dcwHkMvpeDHFqHiEvvv6UqAFaeT92MtBqXGNy1Fs6o6fXLSckd4skJTTkT6y5f8ad1WCSaxxDjzjq3bzUNVY2Vo",
  "key21": "4SxdtPBXQE7K68NkHxXRDPXSA5fADavVpczDmF8y6UuG726nR2b9F9gEeGTeaFvDhwPcRse7KCZTxCtE5qLnQL5s",
  "key22": "35AdaMWM1TeUk9YY8oUHeSkMv6eGi5eumGkVmzPrgJNmz3cwjEEMTJuu3xAsS1hEoeX48ipTcazgTvR1qyMmTiSV",
  "key23": "nXXNezbnRjvKWgihgzPdPUmDSEkhpmRBHcGLLVQJUL5SoEr47fZuMkhD1xMtX2MxkCukEUvHxoAUzMxSwx4jefy",
  "key24": "4NhQpr44oJ1h3Sx7paAKqrjJfmNzXv8q5AsSM21idAGz3cGFABDpmVipBQPQ2en6TgYrDfQXUewZUU7qZkLrY6bT",
  "key25": "3KHNyMx7mSfzCR3XJq9BLdGqZfiLDEyh6n7V6Y5xSMY1Ete3EXjw6bWFsFX3xXxq24y6hk9GpYtazF8hwuyBLXaY",
  "key26": "4PfkaYn32ngnU4KAnE1SGAQTU85Nk4KK5uVUJQ5n124iD6efgCsmQiP97TfpibN8iaU8eLiyrpCdh9iHrbw6e6Rh",
  "key27": "5fLTApJCZB8MuyHSc7hYi74GfyQLk5TE1sT9AYuq2d9EJgiEEkEfecjMBVWfkmqSMSN6SEi5SreajHqM6NvxyGHx"
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
