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
    "2SapAMWTD6zTZ7VKcSaFG2YxrpoJJ3e49q3iDT3cDixZBAN91SNgtPhE4itenEM4DvqVnGTa5r8TGtiHBdSH7p7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32mvgZyN6xQf4Xftgi56cVtJ6tPgXgN9H7HT7PkbqZH8xRFk5WT6fnetA7RFtsAB21LCbjAKTVBvTdsmisyvYerd",
  "key1": "4fKrPCVpzjdhSarqLBGWcHG88PhGmp3G1DGM4cz7EU75XbnouR3S9HtXmd4CiyKo1ovNeb2599YESpzkSKNQ35Au",
  "key2": "5tbNzZYUA6qPFqqhiSNZoYtFSnU8amBZa9uLnF5b6LU4Qu98mZNXwkPqunth4MwqFQkDbGxz6ndvEutdCnd4MoEi",
  "key3": "5BSzuUv5CqtFrJvAmT8oWf6ipUTM5F6LtyyG1ek7ZyBX4pyjsNkFdoQ6PNKY9drj1o44Fyjt3Sm9BTYLoYU38Fj5",
  "key4": "umEUV7weWCZr2eW7PqAVcfUv2gDGhg9d71WAvL3xHy3dsWA7aQkE8EqVWpTCAorfvgqpjh4d5WhwHdyyAs4ncWJ",
  "key5": "J2QddPFuN9aBWbF4WU9khGUo3fHu3FhxAsBwSZytZn5dgD8XQUFGfR2K93fR9ngt3CANcMvcD93ECvecKt39pnG",
  "key6": "2geLt7ErNttj7LtVjS2MMAC3ZKmwJfSse3kK2A7dgvtDupXMez7js5NDtUrGUVKZLs65hWbjtyufVQcxGR266fcJ",
  "key7": "2rkf8UdgAJfr732tdbuHaJqWHn1UfBA2jx3oRydKTjpznv4QdCwqeKtMeukRFstCMMYm3ZKn3AXGiavFSmSoCx82",
  "key8": "62M3XGhXJwWYjNzFTNdigdWtfJaCXgL2kZG32vysU3DAmg9KoKTV3PfzZCzhiboyjQrEt4G8kLZ8oCqRwaoZw5VJ",
  "key9": "4dXoqUhWwjeibonGbwce1YLjMH2ABwrtmE29nJCa3yfAxcJsPbok9D7mXVJazahXADnbsCAV2zyjHQoayJRjwo6s",
  "key10": "88uHaa4AtPUjmfGP9mr9psyGsGEMXMcATkjiG4bz1sLvK6fVUx92SQiYCSyVpAcwxWtrxTcb8y8TLbXkjFrwJVj",
  "key11": "2HES9hbeVWRyLo3YiaN3HWqNh4d2aav8w4JLdaAmeZy2sAutZi5QaatTEwrCULv278fH3Y1p8j2bGMZ9SfiaPQJn",
  "key12": "iRY65C8HGtp9XKoUnFKxNo89cLPqGTi1cvSWX5A98SJqCEHMoE5TvgMcZecHRVaoY4ZGoPizVdCteRUmVnCmeVZ",
  "key13": "4MiNYqf4yQtG59d3otSgv8BtfjdDiRJWoGomfTfjDTS8MczVi35ft7NLxCNYBmffC6dHN6FhTJnJEKzDusAQ2RXv",
  "key14": "2c6w3dKWGauCbUmtMT5zuqUrvGL788hKPi72PSWE6JvsDjp5XiH644hkwUqxZtvJoMoZ2mrP9n1EsFV8KL7mpYpm",
  "key15": "3TvrSZMrNU4S8YtztGkfY9R1Q4HfEigfsg5HDXZ8fo1etgGKuXsiCrDKfsKXsAYSa4pe6nxqaifgE5ESZUsqMuxF",
  "key16": "2W2xRo1qwnFVGV3taQ1cZSeTMphxNBZur3KAdemHBgqLdHCriwckJsxoxAek7HFxzEfczR9utxVSZKRXzMmx5Tbq",
  "key17": "kZVhPY5E2Zm8VW3sVBtoc5mgYL6sxgvHc1dHFkGkNWisSm65BLHbtJfsSALh1yk36p45KGhzDGWciiJEo2Y3d59",
  "key18": "52LwTKNbvgp8E822JDzMB7tg2ke76NnpMXEGSnycZv34JpaZDwLaFYxBpLQiM1xaz4Syfq5BAXLBRVnCD2Q9cRry",
  "key19": "nBWj6iTLHqCJUgvN1a6VDxAjsbGHkW3tNohxEvkzpBBnegNT5Spuxo79Qq2acTff9X47weLhnpneao26hao9VnW",
  "key20": "3heQbAXKvNnvvddXv71hcSkQZmoYHJxJDGfCxjSGbGA3gRbQwHnAXU5oLdZaxQB1h5oq9DVMmLHGfqyT9dzYETgJ",
  "key21": "4Kovebn9VVdJLSie3KQW3t9mgwCBiCqDfmiBjiwd6DBXSreorfbDzYd9sSVnTo6zmfTsb9qTLKCSfB6fHoMPGG5u",
  "key22": "2Ce8NhHjzh9NMLTbZ9hNryagrfBWQPtDDE4UmK2k4uNiPD7rbs9BGjsLgPZCSHF9PtRcLdJ92mjeAHEoZTruzg4z",
  "key23": "47CZG8EUgtVjx3dDd4yEGjobLDK9DvHQGYkANMAPdqExAQDAKJD8xfgRSoBN4BNfVyw3XBsah6xJaTCTrMj6E56M",
  "key24": "2yHxrWn4UsLC9LgstcntkzFRtnoZrjiGg2WVQdAfPBDnC8eZCG73Bygna13XZx1Hb6BNoxY4eQJXk9fN1oHU2Dk",
  "key25": "2C7qC8P4kq8bHasCEfqdAiafb4RHZujM3ZVaPJQ94KNaZiSrT2kbvtp8dsqdw4RVAKoqZDsuh8569v33M4ePXdGB",
  "key26": "4om3ZVtHgubH1kW7KMzfF67G58DqEAVwTsTL8u187rATyEjUP5odsrCPakM8a91zeMEwsuCTZbY2rCJXo6r1pLer"
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
