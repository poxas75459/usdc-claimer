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
    "5dmvGs2fk45DqNvV2mZcKRLJ1HKzLkiFJUV21FFCHuqfphSmCbji8vfuYAzDxQqNSpUAugpWgtEso1jLpGSF9XhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h6jR38Ks95Tz5pccQ75b7mgVPWyDCq34h9CcfKGvcwoW7Ru4BAATUwLVFBA8gapxjQzRSCwBa42RWTdt7Rywqjq",
  "key1": "25xXvpZrQr5GGnoMBQw5nmu7Tw236HpPfzzxmRAH1RYnUbKvT8FPH5euzeLdqSjgqck8xqhur9XvRhD2MWo4o6ak",
  "key2": "wMh1rAf5UNimNMHGAQpacc12jZGbDrDu2Xa5D3wBUpniBMnFjKcp2xw7niu7LhPzN4kacWveoLeAnCddWeh6MgX",
  "key3": "5U6Bgcwsb2TVEMMNr6TjsB3ZDZ8cvWtMwQwbKFNxSShobpJKvkpwc6mKVLLXHkRzV5uYVgw5zfabW7nNJRVoWncZ",
  "key4": "UYwRCU3NqTusqvNynv8WKq831V6PE6kNiT6s6DsbmY2YcNnCbU2LNqUR6AJigA9omhdU1zh1ZJmC3H6gfarJ6MU",
  "key5": "38R1ADj8h7Sk9HBR9pZZYJK13iuoZdVLuyRUovUXCcXDPP9aSFZ2hEPryNUWVQTAcaSRwgp1EPbwoDnyMCgDNKYL",
  "key6": "3q7BMxxA4h5jYzz78rdeVZd3rLGmv6ZQFoFrQ9R4ZUXpf2raFizqnDUaHYabbpbBbha2VdiYEthYQVuEW6j1uQGv",
  "key7": "pqbEyw32ie4mR2atXsG6TiqkbLsYn3sRVSk3j5x8wR52xMMa99aT6cEPeMh6VZV5EwKuLuAB6yKKf7Z1sdepgoE",
  "key8": "cUsksrCqBuZKgYBa6Y7nGEURjP42pRD9b9bapRDrvARRKqu8xtRYVZoo2ktWVP6jVK9csc6JFK5Nww323ApX35T",
  "key9": "2Yy81cXuKYHsaaJ6QTzQBoTKnHCs8QCEEgvzmHqMrzN7NUg1QDowCezg43aFUY9Kz4EhoXJyjut9E5YT9akHNC4H",
  "key10": "5qKx5zNidRiTVFuPicJutoyyQUYE57kgDzUWKuHw6imCoJauhnKptx6oEeB9ZeHTMzz5bPXrYmR4GM27AmMMZgJn",
  "key11": "5pRCx8f2jwpuizuRnYCayG3rhFMMjbXivVx9jEGC8eezxUEfwDTxcAN5FbgM74VizkW1PPGvZ9WE3egdrY35JQcz",
  "key12": "2XDdMqNyL4becj7yxttxf6oxWYLe4MQLDpj1ZZcVWcb8vkQCUFoZiMArCjvhyWAbzXoLRVEv5iQS8oMZyYBACDB9",
  "key13": "4gKz7mUqMub4sEMqdm12EnSb6MZ1pESo7132zE4zMmhFq9utJXucZybMpurh2WfSEaKkWqJ5gSCuTGJTjQCygbhs",
  "key14": "3aoFN7jXGfeg2NRVdNDv1bn5W2UrHmpjW9HUBLagj8JUR1RkrpfpncFmmJKhHSpRJTZnBKoSLdBeA9i9xCHRGSCu",
  "key15": "2BFS2vFsCLHRRmP7zNEZbEoLPFCrc2rcrU6SEDGC5czccNT7rH4uH9pLh8JyUt9KufsycRDbgZJ1J8UEkhn8yjdA",
  "key16": "3SoJgxxeMhahhdrtYSrLPqu99Sr5sSgEPss3aFeE2nBPoc4RdVjHJ7DUXCdALbY5KPVyk6nr9CMmQEFwRoEPuyhL",
  "key17": "4r4mjMEzGwnJB9ddg9VZ6PVDYJ3wqeb38Z2Ti2cqg6CEoRcnrpeEYwgimWK1MpQ7NW1W2ooUu6Y5sD8BHVMsdsC7",
  "key18": "4PRq9UnW58aoMhQSKH6NmCReRYmaGrxF2N8n1hQEV2L6Dxh7ZJRYbxyUXp7fuMAjkUYRhyEBtpa98VNu772aEUjg",
  "key19": "4bh4KRshezCrnRp45jFGAu3wPmVWEuwUxfr7WGDT6EDL4ma4As9EN3JSyop6fX4ig952g1sGCzNMKqt8Smj8miLa",
  "key20": "5TRV4CkcV5nxMP5xoMTD3XtzEeghCtSv6qAhiQEizvML6pPwCodsvousPh1MM8LhwuF6KFVfBfcfVL1xeYD1wLV2",
  "key21": "28Q4xXesNb5nNnSGKth3hPmeicDdgubGpRu5EHvzsR93LCXAjQbYPhxZ7cfHaWfvDwGswYnuWAe4ojrMTrSW1kFQ",
  "key22": "3sYibHTeCXUnUyjvqHdBSeuCTnq7gLQFnNGeXDRiXWZhHGRdxDaweydF6jwM5h7d2Nocu2s3nJus2CJajBwWr4fc",
  "key23": "4rTk4qDu1kKBZrhk8yN2huXv9cDRAyU3rQBH8rSoyXuciuxtzAk9VarBj3u8ws1tx3PvqcfughHjsVKwp8C7eePa",
  "key24": "3BwVgm3vRo78PwXxTUPcsT4vxv5fS6rRevgJkzi39A9vSr8Bbdo4rJV8Fcz1VaVQXw6we1kFAoPjkAJy5Tk8pD8Y",
  "key25": "WLySk3q5er5kgPWRnCxg7f7hWM51JsQLUWnF8popQRt32vTLrDmLkzXbPepSrwbcnVJUyL6WimsmTYWmtF7no3Y",
  "key26": "37zvMakGWJYg15UncGjhgPGoj7ZtwVF4YPgx5P4gVi2NZwWpP3rhiS26LSv95u48hwoxx3ywNLJRcNLFSgm1Merj",
  "key27": "5iV8ZhYcZcBwTobz1rUhLwvUj7WEPJnbEy3kFGaPCXn6m33iah3iY8sy59udeaa5TEHtK2Rm7ZrWk7Djje7yn63T",
  "key28": "48B86htN1hcYn4qtbU4nD8YB4sdXaT179x4QnaoFdwXmwzfgJMpiUiWHLMKxz9Yq3Z1WmoCiNz8TnxxeiwTZAGkK",
  "key29": "4fCemwEjJMrCsbae9ec6juZz2doR7TfmjEgKw5hnioweZvWAmh4eGTsyEvuC64NYxHjB2xwnQ78zTpD8JkAS1VQK",
  "key30": "5TNcdaQFho3ijT7bnQhNSwD5mRQSLE2So74Q6AGhyyasDkSZouwTz1ZzFDzVGtENkvND33LqgSshXmsvFudJnqNF"
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
