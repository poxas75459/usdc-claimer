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
    "3fxnjyw11toRZ7WzB62dGfHQzzWoLuFQWUaY2HtnvkRR5apLRGt95Sea7LThccYxjZ5GJwap3EHKBhtocbRPKDY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67hRVG3CfngjRi2Djzr2WAKgxLdd1zTNvpzCa9X17Nmz2Pv66nQk25E1m58JUPxDBjKN4Zzg6Q4ZG7StnbXn6Dvv",
  "key1": "zpQVrdiBPrg8t7AQeWfoHP6b1V452vPWzu8Y3imy7mteCY1k5ZBsNZ8w4yZhi41RWYhVa8W1T8Euvvo7W8dQ1fc",
  "key2": "57awr2CPccZdzS2qEJNLGPmNWWMu55MNJpoPjJNCvLjNxtKtF41FeFzQrrY5MEGMZZ2XgXbU7SEcv6gZ1xTMDqCU",
  "key3": "2QjyuJF3NtZMdNuq2JGmWDq2FEa8rjsBpvRfV9AsaZaBfjkazPSo68uxjqr9EggqhLXSyiJNs5LeWYYYGsxNLfFs",
  "key4": "4GXTPt6pPECKJDyyuyReBrbLLXPuMM6uaUaJ8x8nNk9bdmTKqSEB1fahz8TG5U2gJ5p1jiK8Crf83eSFRDHNAwFD",
  "key5": "3GsAruZgubvemjRHnQEmYe4c5s4XK3AREYp6Ddhf7oxW3nzDKaTkNj4QmfiTqwLaBi6Ma3kzudq9GunZFtTs2xpV",
  "key6": "2CYnB5YXWimb4Yvm13HoxNkr1yumSAqmDdpkptVjY1yey6LutFr7JPQefTBZECDkkGnobgveppjXGH9PhPXCdvht",
  "key7": "3NkFXabk49wiB8vgMAhKVDgmTuQTmsjhWf2ZdqYpNdtfJW619d5DNsWithZW7CJu26dF4Tw6jBBWsr2ELvvvgZAw",
  "key8": "26gwtDfTgUcZyRHEuiNG3zeDh9JAcXhbDxpjB6ReVxNBxHnQv2g9ne7LgoQ6B642unjf9YUmgEz2A4GNYEuG27C5",
  "key9": "4XBNkMnDUh7ScwvcX1o33c1QWtfUzpK7uaeaJfitjhfPwQxupo83iGU3Xko4Fj7F2pLStE3KkfG4AuBXB1TfKdGv",
  "key10": "5fXv8EyViSadQgNWSiqb12xUrALC2spgg5hB8c9hXGAcfS1StFePquMyC5zq5rogy5tAqXXDvuTMZcuJwNqK8Y8k",
  "key11": "5U2tMNMUZnnJTaWJfWuzumH4H8113QgDUTGD1Jdh4xXAywugwmRXDoWt8e3cTQZe9wxpZDrLyEYNUPZmLgwVpEh4",
  "key12": "4js1sAAkYFkZwB1yqAwGeJX187iSnKUh9LZoYAJgzAigRUqGs8N6CxHFAWVX3GbC3kBPxUcaRCpQDsDcEJtjWNoH",
  "key13": "nXjjD13yQWzCKK5FCRQKAhC4oqM4AcpSB8HCxnMEcYhwgYXjF2sjivj2ACCgK8EzYL2puCQSMyxcCDo9Me75LVo",
  "key14": "2vpdNeEzjEoB7Aauo332vAv3Wem87bvDJvehyZyBkhCdRywTPHrKzZ8xHRdxsrdKP6FpzJct7MChQQxghkUXAysK",
  "key15": "2zxvkbX91xoME1L3DPBxXuAfvck4JR6EiRih6iAZSRR2S73AS5dzPdfTb46VooSqJPnCEbCZ7JJJDzPsh1zpqiCK",
  "key16": "28K8vTW1F7gwhchkU1JukYKgLBbbLsPhMPo2HFf9rJszMsTPMbLxX5X6nQDJYZUYD3fcH1ZruM78aGxGa8VkZZy6",
  "key17": "2AueZ3v5FpB2YMQuTu3eDT48jYFDKxSnXw9v1gdYTuqs7xAsAJUNxGJwFBhQmby2h8unS3bNnDyGxN6QmDpQiEUg",
  "key18": "4Gi8syNteXVVxzW6Q5pRQ5UY24Uou5bES8n8EfBehVBJLCWjdw3U47R7nCp4Nmd8gd1A3GYL8eEzGVAdhQaT58cF",
  "key19": "4WNukFP969CciCGQbjEyhCX9ENDkN2FPNfECYa8vYSTCAvXkuer2UEqArNo3nPWwfSLftjjnbVY1THMduQsJzVB4",
  "key20": "5H2VzjUTQWEiDtpfZK3F7JDRjNpXrveeRfqWSaUZr1aUh5DNkDiFsuDqSYtjaFkvdmt71StpKhamxeSRCCvQU4f7",
  "key21": "4iCpg3FnwvVxFFiQXi8PRaiZRQwMts54C3AQj3EMB4BoSmAA2nubofkRUCAUe41FzgPGspR9bEdt19KF69927uUf",
  "key22": "3FH2EDsE2ETLBgr7FGNUGcFzQFmpCe1C2Byw87yM2FLNDsJSdCQSGFhhifepPcjRiV9bmrTELBGppHKP6yCEDbp4",
  "key23": "4oq4CzYoUiQGsrTpxUGH2xGLc8zs9hvhJwAywvXMFREmH8UiZp9ThGk5V2BFyemsZJpe3mBx8bhPvi978BHa1dhq",
  "key24": "4gnW6HN8pvSe2wsaHi9HweBod26UwFExaw1wtBs8V1YV1PLSmUjg3gC7p4r8W8Z4W5CW6dyVLdntmfM8PnxfoWzV",
  "key25": "4rcU16Tpx6p31yuaYknA2inZX6iBR2KYRnpkmqEbRwpoWb1qrxUjgwJ5bWfvPnQRaBgvWoHyqfEBd3bt1griuzNv",
  "key26": "2pyHDdY1HhV7kYQGDUN4k2f9eja8Fpdiwsrw4ouqigoHjydg1RvyjSCKfZrV7jT85WuRxN2yEsFnt1LMhrMfTStu",
  "key27": "3DrdPERkbRSsmf4TSGf8aYftXeuao4Fj3rhL74Am4as8fLGthdpTntrHbgLPSeFVayaSfZTN2o52soVuSwJtFaEz",
  "key28": "2njdtoo1CD4cwDxCTaDJUoKMqfqxcF2FZCeDq38otfZhHNxVsLEs2msdsntXQxLmAnbwVDCMaiStPbC9xUXQMiQB",
  "key29": "5EBRHy27o7phP1omX2oGqoGzrTER1AMUuECjeHSLL2TxYJ5VxysfjqJJjyoYe6syMhaZh5XuxnxAi8vzrwuYghMM",
  "key30": "538vLyUJ2Zs8qWSqN18zC9jirhSBC3wpaCViWEgrLjurbbqgLGuHyV3LJwcVvBK1rVTCWwqzA81SQbj5wdVPJEWE",
  "key31": "5PJwp74Ry2wHMYAG3y9kvF2ZiQvdfueY8USwL75oPzCpswtiSdixZHx9aMUa97k8NmY4WfdYvByqEZCKZS3kVA9h",
  "key32": "49bkSy5HsreTeDaCdyRPFY5V3t4mN5QPRBb5E3bwkixCW7onukj7hyfJVSoYXxVV1FxASZaKrCpECzRPF1jUSbXo",
  "key33": "2cvzH7oiFnTQuiEZ1LgmY5gRZ6WkD2nRVwH8PYxnSHppnznvRhuyk2eyaBbVCgWYujCSLZVzuZZEkczxTAXjjSQ6",
  "key34": "52S5YzW1eyfzDcVXZA2N2mjHACSRkV9z9KnAtynSXFb4VVA7BDRsK1pvep6CRfumDqsdap8jZ7mZCJjJJ8WMnKyB"
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
