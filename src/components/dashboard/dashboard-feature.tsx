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
    "4tRQ7Snx8wjQAD1uq5XXbQoVDJGpPoYk3JkuWbdAf9PFrZYzyUMP2ojxLL83LjDAFmSvQGSTXBd4Qerj6kb1KQ3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JaMGzEDNwXnnnr78THkvnBP41pTjFrMdGM13iAMVffD3hM9MPC6FQDasT7hZFGKkZaaCWWaUn8eZxnVJUkdLt3c",
  "key1": "2XD5a3XrQCceprPVr5JPV2iVEvoqeNuvMWV18x7YD8zinoNd4UV1dJ1Kvy7aYCmSpWEiL3kNncPHA81JbwMU5BC9",
  "key2": "4iBvFySsrhqc1wAjVfeCCH6wbJrhA64VC8bsWVLufQ7KzfQ9NFmC33a3GCSKGPb1EJdkiJa8XXungJJL16igEReQ",
  "key3": "Jhjue2qCqdFcV5SwZEbAd2zXWnvLD4EqXHm96pTUFD2Hcgy9uGCr9JmCPFfSK3zE5dV8rxCcnyaYCdfazGqR6Qq",
  "key4": "cRNqoHC3A62eUXQfnavLwujwJcvkxx4FAEqze6sexprWosz83ExciFp23ZTpMe2yRLFuT1pYUU91psK7i9cdqAU",
  "key5": "3k481eaG3iYQfJdPYZ8QW4rZHCCKLSGA6fdjhpdepw9xQZEXgxX16X7KsvSfKGGQWEHppowbBrE7fXqdmR86So84",
  "key6": "5HkQZnFUWTYR6quHTqmUktQ26zdgeV5ZatdFWWApNW4x8TPvebhcPWEFuQRVvqokVAykGw2TiuVvkCozurbjhP5r",
  "key7": "2D2Dm5ibwVHodmK7yFFvrjTnpjXuZaR9EiKM4jLxFgn24uHT2uvuRqhrwmgPjyZcrRi7qrZHwdcL8M5gKHg4UEaR",
  "key8": "uqfub8LfdaSWbyhTnHMUKbLfkfTFWftTu2nAZZV1bTQNELnmqP8P8JrKH5dyjzsBF8AueNLDKZ6XA6DCN9mnu5F",
  "key9": "4NahkKtqDT8d8caFiPgoeLW3uDo4sxWDWJp3nQsJAkin6FMi5RLQoGeM5nEyeogex9gUxv2N4QQLpj4owVyikGm6",
  "key10": "4hv83KnZNnedMMmJH1oTFvrGMVD3RvkjUzH8sgaqcaQv8yW7b8XtZbRsKy8ocis9Ud8XWeQJWefBLJoxASXjZLsy",
  "key11": "4Zdd7aadpEC5FGN4gDHKv18kvVs3htcXYxUFvsK8oc6YNrRzM89bC3xfa5y9E7duqotefNWMTtgM43RGS1o1bCeL",
  "key12": "2CNChTvfByiLTGAZA1pGQBycyYSr2FiykzWK11ZEkPyE9ahJqeAPr1iD13bBGiCqN1XnTEbmxZfRj9hLZuCgzc4p",
  "key13": "4bDvaoQAvSUNN5sAsNcfmguVkSqfdnkEGc2Be4zKUyCqR5nUkFNNXYAPZo6r2krtqBqDuMGwvmyMPUUX9SeaD8JD",
  "key14": "4DxUZULSc89nGcESGN25aAdvAt4859DYJ9t8ZopvvpfEgjH2AQVJkdru9EFcpDiJ4FV4UXg5k1TQ4XKvCEwijvr2",
  "key15": "3ZZXXVg9VNUaHKzxMk4N8nhAg88vnmbk2dSQYry4CvWhEnmuRP2Q42pMr5jofzYTK9SzBbSY3ZEmkEFPFTSSXhkd",
  "key16": "3wdZde44ngsaWru5vvGmSkCSf63KRwTF53oRQDjLJvJPq71ZNsC1vZa5rirRR5dCzZbq7KowYmgniPZek5myVQDK",
  "key17": "3qqDArkcc8cPGjaNAmFzn7t8e6sEtPLeyGfTP8TV9hqx85AMj4KjG2bPCQwp6uzPXGsNURze3kLzRR6wn1iHmGhq",
  "key18": "32JaNBwvkehtdykkXva9ztS5spX3t9NfwDNZk1jFqDAP1Uo8nbR1WwwcVfycg39oEQDvBcqtdcdrmhFRQqmQm512",
  "key19": "5FAqQAzJw4a5bvPzYURHagEBeBHQNqkJiiE8DKmkw2JSVnH1eUzGspyjJRNggYBs56CH7rhxcx5YfftRvdXyPrjv",
  "key20": "25iZ7P3AMu7ZzmT4VHxmoPJvV8CueQuiSkiiw2FiwK1F6uache9TQkfiYANe3gA3HCMTNtNH9mTPZoucb2V38Nsd",
  "key21": "4tQ1b8ocnYLUdfs8tRbWq9VkKuWfQv8b9w13T8uhXioHxkbxMiiHQidsAka2gUT98sQrPvkXWNj4FmQ6JgmHRwkK",
  "key22": "67Pv5H3QS1Qv5pfr8YqAacGbHqz11oqxYRhBWt1gZBa78YRULHBKk9gznzcSZDN4Yo4MzdR51i4urVPM1TAAJRra",
  "key23": "5utpMGAm7DVVwSRuyTLxHbRLjSgnnVfx1KXYW94BQ2Ua3BAEBa1qTVwiPo36SQRa2ZzGs1TpnnhE2X1GVcxigDrZ",
  "key24": "3NvfYuxf96CdnUQKRH1gJjmGSHg6zXPoEjbxpSu9QdhkFSgwRXNo2i9ANhhvygr8uwrbTAAn44DceREoBpYQbfcx",
  "key25": "4g8gYfvKvxhNzDWeT6pT5mPiPZ43DLTGuAT7RgRxYtbpusafzKyYAfYmXFUL2vq1a57DXScAGBSBYdVr3dQdU51f",
  "key26": "5npsKbjfycZZ64oCo6chbfBXp7zb4oUZ6rY8HVfjGQDYRbLpVbEB4GDqTbRPbb1uxCbFxg7AHyGJbif5Qj3NTHMR",
  "key27": "4Y1TBXzXkVCEZZq5Bkzyx2yEiPgazo15c8oZBYQw1VSaMkHZycZRS82yu3AxBemmvrCB55nGEvbSjTgjSTXeSrwB",
  "key28": "3kLhvzti8MEmnJpgRzGJTKpew9xiEhwmaVhmKbFzpXyHyX5sBqbkHNB58vX5A2SEVincrR3auYf6DNLwWpQdV18b",
  "key29": "aLhyvApcDKzfmRqqMRLieMm5ZJ74MwonpTJaMs5EhZSC44hWqAJAzmfLiiUb3C1Ce8WhPh5P8WP6pkf3w8G2TBR",
  "key30": "yZabkGuuy6XdszTeyFB3SyV3g8oVUGF2bSRBt99pvzyyY8CMDMHFZfwDjSnVcMEe3Hj3QQwyXhDDiH3MdSxiezp",
  "key31": "8zYmVYz3ZPRaTNcxSspVkJruFvnJFGipypuZje1Tnbpa5HZmAGfqwFZmNhDo26scAP2kVAqGxmBVFmZ1SDGnDWu"
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
