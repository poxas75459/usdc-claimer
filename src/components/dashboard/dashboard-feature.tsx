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
    "5xBCNW7vri2Sau4FYHR9EK1MGZFES78dzNMFLZttQVCYpjJNVmJ2xv3Yytu7NexgW62pSh2mz54VDWUEzvTtADko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XnRQa4ym9GJ6pEKmSsHvuzwiQ6SQnALq46unMoawHGA84p3GRmBS61RZCfeGfZSe4yVAMm1SaNDxd4GWx5MntBy",
  "key1": "5sUjtsGrfQ5xgNJJLSDT4F9LTpN7vnPXsde3Q382k385XXA7YyAaU4y6JuraZNhsmBuwwUA8wmiCg5XTTG9iTu64",
  "key2": "icVv2B4uhS4RsGnFUQefiHgmsyso5j9Ve274uqpQunPMjwLhaW9uz7XpcmCfHUfiEAkhmsnsTnCZs4CQbPF42cr",
  "key3": "NxbPnzJiVNMsoJMWaN6BJZbgcEkqNg5MFU9vfyqViTWnWfU2V5TaNkP8ti5ehegZqypoBFN5JFdKN4LNdrAq73t",
  "key4": "5SY4w3BNtH1FiQReoXMqdp9xntzboTbfB6Zzy8ZnDkVZa3EYCaDBkycxx2dCGBPc8xeUEkbJSTkpu6UHmVyq4Bd",
  "key5": "2YtLkFrgwyXXLKAimPYfutGMYkQAJxcDoLfQTB8ayVNJW175r6tejm3yqv8W3stnhxafZjXmhrccx5FdETAuKv1H",
  "key6": "3iDGAJaFikjBi1rU9yNVZcj4TsYTiGF1ueXuMhiin4YfVZo8TY9zh4FNRbb4ec9CihBnTTzdCuFywmE4DiDx2Koe",
  "key7": "5G4BsC9H6ygwAQCYCvKepvrgoL3i14QAL9pocSTgrgwSar3gkLn9385y2rjH4V1WjiKyrqNuy4YEQu7AZ4hke6N3",
  "key8": "2rkGEyAXZJNA4DqY98r7dMYKJ1qEBLnW3xFw64GJp146rRVsMBoCq6vkwQ44NAJgaxg6Vwv6kX5f2cMoPJzHNWMy",
  "key9": "51xJcy9tT4AAB9J7gWoZASdq2A5aT3nNF12kKGt4qBQD9xTdQZAQ5F677EV219W7BB13PKtt5zetxvTyKKyaTKkP",
  "key10": "4xsDGzcWwX4hyiyskWyGeWizmEUwdipUynduqoNRt4wR3qhuQWsW1oKjn51BhTXw75yY6Vz5pQdaAK7huEDpjjDP",
  "key11": "3MpgckTTXovm6HLoCVpdBKnSmRRcTCit5NF1vp6WDsEf79xSzDCn8Cjkw2tFXUfoZxsVi7TCWWrhtg4zwEW7U4aZ",
  "key12": "5kQpnnw9dRL1ojbN5WnjoAgX7Z1eUFfCh58EbkAuiMKD1TLavoY5BDGve7o7CGX3w3ZBRfae2Er6ibnwHfJgLhWf",
  "key13": "2RuQJL11dFBAmycpd4mYH1TDzXzj37UKFJf7FqWPAaJMk3UsvaqqGcVH22mwR2WHzKcckj6efEAYSYU1hv6s35NC",
  "key14": "3t4RPaNpqCVL927BqB5GPu38ZpUKN5rKUpgqgZ6ThwZdCTeW6de1Cx7c7ehZYv5BaJG5F3E6Hi7StM1takLLqJbx",
  "key15": "3FDz9J8w1SfTbTJZA3CayBkbB1PVgN7gjqVKCQTAx5ry7AqapdWTurrpjyBLzELaxpwv3eeivghzc3Eag3fw8GE1",
  "key16": "EruWFVgegfNu34GKsPEZY1fCiF2SgWMHXTYwpkTRMTuM7aLRNxEwBwNdUzJ21BpoPbRKM2uPuFJNqxgE9ucuGKW",
  "key17": "2Kcy5a6JuCipSyZazKRUexFWhPwCBEqAADHVGykg6Nq6bYdswK1Aj3wrNtuNJr5fKexoJvTb2M1qwQNeojFtcKDS",
  "key18": "27cEjq6BJXDLwrTJsKiT5YpqqkXuF27hAovVpnbRYw2Z2ezpkx8X2eKqwLQbw6neCeDMLTCdr4oG77QgDuEzAbpo",
  "key19": "5sxvwCpEmZ4eK4T3H4hSkh6wdDbdTtaLz42gMS2XqpxrLVpotxPGWXPJwfiyGoaFPEDmPdxwVnmxdGdnCQDpjYss",
  "key20": "D5t4WyLGrnvuQqJTwDjERfAyEmAwgoRqqQE6LTNNthjJBGFgMd9CBjvSPwNTrXFacawENRR2LcFWoiPUGLpHVvX",
  "key21": "2PjVUK2wgXWXTYjVuw1ERYaU4Hjf2SW4pt2qxpeXXig5YYdJbTzYsy689NeqCzZUaJH4EM3Ux22ucX55V97RthYg",
  "key22": "vfmYXDALoHEaLXzUYuwngnvKu33gVRunhRC8sfzJsGq7U88YVDL4uqpFN5N5HnNQHfAMFLtHy9G4m2MspkL5qeK",
  "key23": "KRpQ8qiVxYnB9DvmAvgmXoiC1i77uD9fSTCtLnzs6Pa43ht6Z4uafjSYFPDs1urpeD3yRZUXdz6V8XgDd4DkY6Y",
  "key24": "3Q4VyWVe2hmeBfCULux21daB8oFUhcKUUhiHrAKVeH7ip6CaQ56MSEf2dccfemrGRaC6ofjodLtaT3YtkWhYmWgm",
  "key25": "tMFRPYovE5rZLWp35eA48BCPVoSCx3PqqgHTbpr2U1GmiognCp3WCDA3zb2D3mZWgircmTaMyRTZARdA9LkgeJW",
  "key26": "3wWa5ySwvBMVmysqTi8S1KxaPveLRByA1aotADrSB9CZcJRM7xEYniKpqAUPmNZBqRbDtZjRjAPctFV2D4Fk9ERn",
  "key27": "3edUCrGjspeW8SZgaFMGspRdqc2oDQxR626rLcR3y6E4Qtc5zrgaHm2ZCgHbPcjMagum2tM96EjVFjKYGNdFEWn9",
  "key28": "2CrPjjNzQaWyWNGeaD1t9UhvhBzVwf6xpY6SxxuYDou88s3AueZKQ5ML6wk75umiQboqDG4SLCwzkzeRttCNwTLL"
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
