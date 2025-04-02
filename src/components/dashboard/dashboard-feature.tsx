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
    "T2qas3KrvN2n4ccNtgidLm3nmHKcykvUN6kA6eLdVoiF6LcyoqZuPVqo64sQA7DaknB6L8BY1CkyyWbBxfcWPqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQUkLwBdnu4ENZdSXaSP59D3ZoYprFZcKWikjfszYTD4wNY71M3YEcVqXJ5Xj8ZKkpWk6nVewzt9W52JC15qEkR",
  "key1": "3Vuf1ieY7rhN2QvcGZYxbQFE6uReNJ29ccs1BKuu477NiZ2M5BJKGQ1QQc7feEtoSt43acR4Jw8mgZ5FN74eyBKR",
  "key2": "4yiEEE4DdPKnXFje5XGtqZ6ozkKwHyt77hkp6wmG7zpa3x2Z3X4x3KEnHqUn5PeibbNkqezVo7TvXma7HqC8nW4D",
  "key3": "qgDa7eFc9DfPY7tzw7xr9Kr8nd8sKxsQLM7H8QywegTESQQmDbYM6k4AE3gGnQGvQEd3c6C16wmfeDYpssH18Yg",
  "key4": "2mnTjg4BJ2gJ4Dz2q6pidVTXmuHEyP76VHEXRiUt8b13nYwfNU9v5p4SjwyU3S7JX69GoqZVWm59T23m6ZCaho7V",
  "key5": "4aWb9bYkiPy6rTyb3ZNDGXZi3mf5tbafTXGYYpSWiACwRa5pe5vBQPsTdznpo1j265PWf1tMAgpHKf2rq9v9Gnkp",
  "key6": "3x7BvuaK7NwNPmwiVZZ5nJDy962vpSnEBzwnxzrsg9Pyo2adygUuEoNA4jdyBrcGdhyCHWipnWCrysMnconeDDFB",
  "key7": "UENaMrvei5g2QgfhnAAfmcGxDVW7svyZw1T4hqizjmDV8v2Ht2sapnPTkZzrqG5qtqfdYT4Xtyb9M31Wq6W9Nsx",
  "key8": "2YWpgnFsNrmojcwKpxVzNmV1vchUjY31Te4ak8BNjjjYNg2Yj8SRdKoCWVGyzBhDYM2NGDu9V1oMLh3H79eLqdd1",
  "key9": "2F6Q9kgjUEbwvM4hcbf3WVs1hxytyqnvLbTKCVfADLUsaiLc7myMt2VaPhZFkfrs3tZNujeaej3KUDZ7Njed9VKG",
  "key10": "4swwQRygbrue3mtSNp14KAv9aJvvVrdPAT37dDvyyvXuLQ5SiXRyNdTZ5FN6tf8Z8PfWepuGfUbECC31Wd7K8qkw",
  "key11": "4FQhtXYu4DW6LdWuRtUiwcn5xZ66eYF6M5k2gWXNSZoNWM4rMiEvMN91no4jecbzbWtSo5rvSDs1X8958X1PGjAE",
  "key12": "4QUfk1pcV4CHprJYYqYHCyn9UkLiBQ21bY9YLFWpmLS4dBYH3a9QaoBM2PnfHLNUQjpJhAbFBgoJJbvVD9JarEEy",
  "key13": "47REuTz8wsJFHoLUTkXgWDuW6PME5LT48onB3sxHLjQjLr9hyq8truLrP7U33WXbBR6xsvjSyXjaMZYbosJt4TxG",
  "key14": "4DdAL8r2LnCAqUBXAWytm5P9FAq8brsudTCXKWnCAMBzWovCyxHTxwjqA7WqFxLJ9EAtfqjYY2B6EoP17g3V6U4y",
  "key15": "4nERFuUDAYeRneFguerZADHWMXYVZAvYMED9TE4nFymUZ95YwpaL7pCCBoenEJLJkeJPg7mdgZMzb2Vt6pimoveS",
  "key16": "5F7ZpraEy7doLdW89HgHQM52g6xCYVNhrSorCdWDBeDWEFhqJWhJfgiqRWZvzXqxxep5rPQ9v6pdfG2ihrwHYi2i",
  "key17": "62ioNSCbLvaSUWnUev6aMFTgGZzxX2ufPHWpx8v43yAVfpRPqxrKVgX5QS6nDBGPjTHoCN7cW7EYUTKHq3gP1ota",
  "key18": "22SDLhtFEEC4cmiGZ6ScNCiK3kFRtyc1PWc9ddrTg9TSBByeWNkAKnRoQ5chKVn3PPvPeRDV7tmgGy1vg7GJYe1y",
  "key19": "rHDvtHqprsmFCVXhxMDDSY1XpacVmSzyopavcZdJ6k7fWsKqkoGDnra28Hv6ShPMeHMdec3BqR4dDDZX9ZB2P5g",
  "key20": "BTLGPp35ZnotEy7qqxCos75rjyrqmpn2VA1UeFoQAktDy5Zhapw9bXjR31E5DEuxAouDn8jN3Ckfj5PpzdpzMwt",
  "key21": "2cBmbtqmqjnnmhbnZKuQKtqpE8ECf87nbT1vs42h1127iB6Mn94fVYK8M5E25t8tKCNZLGgJBtQRzUX12Uo3J7pU",
  "key22": "5z4cfSkSLncTFjAcxReJdTn4UgxuTje2sYJH7BCpJN5YPXqKu2KoXcpv13dwwTAfCi8BrKxNquQYxNGib56Ur6uV",
  "key23": "41FTuUiTYEc57K5p3S1EfyWmNBmAoCo7pmXQ98MrhFND24pS76wTjknuiE7RiX8Z8LY8UNd41evaaQps1iARAjWd",
  "key24": "2S3zQV4qCSgRTsUJ7kVu4g7vWWrNw2LgtQZegNk3VpuJc2ax2WGDDrmSfvpK8sXvP4VdxsdXBNxHHJB476qDk1dx"
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
