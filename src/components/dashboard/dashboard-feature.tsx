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
    "5yBqLiczMJnEePHnK6WRbhZBHyN1o6dNG5aJpsYYCeeJuHUQyAtQJAZbbXroKgiejnU3U8ALXPeF7nNSJSHXSWNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TT8bW9EP2bREFLAyp7ErqAYncbGyR2bfqz3ixsi3nnTu5J1shPASvi4XJRqKw1PtiLwgP13XeexuJR9BMenGJYQ",
  "key1": "Qr6jh65T6qo8ZqTVrQrXThndbmm3ajTV5RQChEAKBqBXVGMK2CcJvNsBTB5jMBEaZRkJY2GTzYNa1ebbt8J77N2",
  "key2": "2PjGqNxBZoxrsuVU1yDhnJXFLYq1Zh3atdy3znSqdxoAWkqvcVivRibccaazicUSzPBpwVFPknogoHftgPa8T2S",
  "key3": "5jYPtgozNJyPFZsHJxQ91FtpEhJUdTQQ3p88vwWP6KazpdnvwQjC1CahZ7a6qocBdbWzdevHsrCePeYXASunTKvj",
  "key4": "2kknb6YvhSyZ3gZA4C44nzQXLN2n2ywVswhnRcz27emrWpk5c811DUuNG9XqsPmKCkQ2HzkXKLj5KQi3L1tqmw5p",
  "key5": "3gpL2L7CrTEdLGhtJYwZJWt1TjtK8v4Ugc8ZDN6p3aS1dst6yn2K9MRHfKkFBmQi96NsYxazqyWmny32ixxpJ7VR",
  "key6": "3UQvUdHC37NYGZkiQMC119xCLoQFm2dRzTpAuAXeoUYLmp3DD52VNGtGU6knX2JUNqDSmp4FpTdJbnzrewJvXE1o",
  "key7": "5WJzTnFydSRgnSTwhj7euv6MCn9roYgmywQBjZihDhuEdAYvwEwog8sioJxXMBuNnn5aqTv8iXrDxL5Rj1xdq7RJ",
  "key8": "3kUqjjvbk5PaKAmhy14PHtRnsiDrXER7b8SSNP7nBC78qZXVkxggRG65a8ULZBbkuxwihYm2XfeVCtdDXvEpTex1",
  "key9": "4JKiyzUuyKRaK4yBnsQkppRoAvif4qA1poMJVB6yiSmptsVtQ4WmPUGwCAJ6wpdfLPbB9k9oTADfJTVezYsm6b6b",
  "key10": "4P2sA4tFtbZCPLVP2REB2d4cg3wUVbT1Eba5oNAfQkjufVuVfPpeEttJ6yL99gH8vY43hEh4tQ2yb7nTDw3GJwgH",
  "key11": "3MD8jo1BDUSm17akcn9X6TyXch7ebRqVVAzB9iKDWxLb3o14FNCepgPwbzqpbt81gvDCvbMYLkGTjLGoyupYj2qn",
  "key12": "2KYR4UsyFENnMH9YmyKGuacAHXwtxtCYQ1tq23HqgZQKr9zLUpAxSKhcU38r6nkD71CUcHFrodhmCXpn8zsvMpPC",
  "key13": "2b56MdKNeHwsbV2q1E1MzxQZA9PRdrqNqmt1XhoGZVaBiYJr7Ehd7rPLUdpsC1ChK5vzZBPRFyrPAVHN8xEcZKyS",
  "key14": "2rwajsSc1yCmK3c7AQH4J4S6gq2H85yr63TV6odRMQXcP2d9Nir6qNKT3P1ERsRfw6trngmC8wHkegZn6stCnnZH",
  "key15": "5JdzCEUVrRzSVT6DgLeZmRHPHZugVgpTFG2BEEG6vwQ42MHk9uzTdSXdFgoyhafM6BbFck1n2EXyGYbV5kH2Jrgn",
  "key16": "4wzMtEYBQ8eRWXEEBHC8dH8ZhAkUW2z8GayK2dMFg3JVj7obXha7wHBu1DtpmBDHRfaAAfhk1aQTr3gpB9ZasPVW",
  "key17": "5qQ3DXmdZdDLs3kg15N6DpsrpMjxE167e4D7pefK2Zza72qiH1Qnb58w1fHp2ZSksSMUGnghizkMPJhd5Amz2JEE",
  "key18": "4FESuubisn3zQqHVD8LsBwGpHb4RP8UvpCTgaA2JSmWeFgx7sehVTnEFrUhcdSx6bxvfuRMsM8o2Rw8rofjb3dut",
  "key19": "613fUo8uV3AxDz5UBr2yJAXXrzSL4XH9yy5N67tDaNBv6uRk72Si3opvtypcbKyJ7iBcAoBV1S7TGhP8vEHTSc5k",
  "key20": "5Rng84qHDucEsAbr4qqc11ivEr8doDpmZqdkBnHFehVV7i1RapPxZevj9midrZrDVd7tKZTEAn3CSo68jZ8sonnc",
  "key21": "2PnqdBA6gXk95kpP8oF3n3QxSh5SU9S8itKeVjhrQz3sRFBsKQJVuGFQRUswa123TEp8aJHoHiyXe2xo7xB2h4gi",
  "key22": "2ECyBJZv3tD7cnHZ6uDDmi1sDNGd2s72z4qoSn3JR8KWTeAU5Snbpj4D14aH6n1Yvk3N7W3E9mqvKEkdx6zytVeu",
  "key23": "QjxYkPEFfCwroSmKxqdro163a27DLWayL7SRmQhkibXYSe9kL4VsT4DpuqXCxByvkkJ25AFeQB6nBTtosXscgdZ",
  "key24": "eEJgfratDxxen5oY9rEZz7yeTv5Uqvh3ay1eyeQJwiBG5CkMPRLy5HvDXEHEK7F3uqYmDt5ZhmJb5nHxwyGX5ho",
  "key25": "34hAWfJofURGkhTfeaxmFZMiE3e7doc4H7dfNa2iv9B1RYU72qi1JpJeMWj3jhfnFFVLAiy37LMqU47BBNQ68FFE",
  "key26": "2kLij7xZhqXNiAUp42aA5UfiQdFRYiF87RHyuvFfJL5AoemRJPJJaaGwQ9JyaNWCwzLaHRiPYbdZXQFmFEwZ3j9t",
  "key27": "5hrKfNzX9KtC3eqVwvWnid5YqJ1LY3hnBChHzxNMRhf92qNVfP9xyNBBuZLHTBrZhzES5RLj1SiPHM4M8HpGQtjr",
  "key28": "5xC5RKKYNFWoR5fZJQsxtj3zvRp1UH1X2n2NVFLLFUWNcDR3VpPoCQucEPfTutz8UEjmVaZvjLFutDraR2EUFdaZ",
  "key29": "LvhSumGUNA7KmVzymcZLvZzq2SgU8B9nFat2RAppHX1ABTWVupZBECJ2wAJc5oH1TjT7FXrQZAVo575Ms1bSyKU",
  "key30": "qozEWJJp3GULk342s1KJHrWXwEH2Be1guFDLgibpp7JRdouoKMmsE5Zv7gUxUP4VAzSArcWwwcqCGKv1YLGcpyU",
  "key31": "5xYyiWWFoWey6eD2eWHgo5c6ce39Fr7pHSZpHjL3xE25p4uzdqxmd5AnX7ryKFqwfH33jg5Vj3iezZo2BfEnzwLv"
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
