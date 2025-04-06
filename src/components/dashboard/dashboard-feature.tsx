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
    "4VKRg7VB8A5fLTw4QigAxHRmwe9fp3eBm8e1RN3uQp66K9NZzP5iMjAyPunCRPyKKLvUeT5ogTSEqeuP31LFUNgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56B3GSvpA6qtm6rfKeyWpQL1MZ6R46M8pMd3hCxBem7UPPFomsaiim2Tgh5q9ePpNPVuGJyRsD2fTw4J4SVn1uBD",
  "key1": "SbFVESbPz16Y79wtdvRfYtp2zMLu4YmP48urJ48JcriXYSXxgkzuRoEdzgKryxTfSaVtCevLYNq7GLhUt2czW2K",
  "key2": "34svpwAT9HAUa8V2zgRa2tMfP5D8Kcwg8WHt8ciLUpiVu7snDeXDeGBsr3g6vvntV6nuSstx6VQq7x1PjcNX6AHj",
  "key3": "22uZGcA3UoUqhFjYCE5R1yd9xTuT8gfFLfdLkVXfAQtpRwe2f6vW42GxJVyTTUpVamA8NjrtenCzj5hnenSt6hvt",
  "key4": "2hWzdp9amjPNDvF6cTzzPd9wW1WpRL7CcyxiNpfch66FKJ5WxDP4ZrpVZFKdzJqVqK7LbrNpbXVKquWvjFXJkkc1",
  "key5": "44RvwYx7t1YV3wXnPWRBFbtRpon5GBUZzWMcJV1hQchww8iKRKwAwuvtPJYgHfLMwd1vUDG7ioWM8Z7sujHokSwu",
  "key6": "4PfA9feMCYEnHNdnSWc7Z3c36LExDMYDCCjf56UBd4pm7hMnGtYQkW5dknBsMwQ3oXbfThh12vY3BUCxrCBFjAcN",
  "key7": "3QX4KXVw1gNacZt1jo31UbS7uhZ32BDTs4RAExGGccuwDS3gDE8NX5JpFHP9GtoYQmXZDBwSixpgzgNN6JEsuwCi",
  "key8": "55o3RiRwy4whfv93j4zZwF2pLfU8dEQaFw5N1We3bLegSCGmjHicvcSSNFeG9PgtpMQ7cYuYyJAdFWAHB5DPDjUj",
  "key9": "4PLysuSDsrpd6wvGzi7FJ2sB6vSkk1VAKXBeoZR3knBk4othkBkwnNZTBi3PCswNkJRixYjEeL2ccMe4eoRzDmjS",
  "key10": "5DBsbCKTXCV8x4s47n8CY7j2DRD87mHdhBjzVhtyaj5BZam4Pm9qSmoycrs5Lasit6zp1drjqgYWkr4UJZAs1i1n",
  "key11": "379wtLo7V2EDRJx1zPAwA86dA6YCeoLy5EmcjfEtPNjYQxDUF1mqmLWx9V2Gaw4Sr8Tk6emahTdtnafFddUfuyEk",
  "key12": "3PWVZ9JGDsuDRSCk1b6u2zFbQC79GFpn11k6ZwxQZGwXNDQLHDTim4ZtQv7DzABBthMp7dAAXct7q5KJTJodews4",
  "key13": "5o3XahAJvBsdiq3Sx6rFdhZCa1BwJDzCdMyvEGcQK2towpvv3x2W3yXxt9HhJ98vRggePNad2FNMcpt23FcBfi7N",
  "key14": "PpWq3w8eJHs9auvrbDdeKCRBfHJjyjgtHGHrmDj1MsMkTVn67GaCv73RsJw3f3QBr2cZ7rFmyjZQQfsRaLG3E7L",
  "key15": "4XW8EcpPJbSLvTNYjtAYoMUHRN4zobWvRJHaLrnSh7PwqR4b93sMnuNWypVX4LeXUmNU8nWyWTkVVDdc3JCKDEkY",
  "key16": "M1SzZcLGL3B9HYg6hgYRdnhetDNH5GczFGde9GmmZjFoyJHaV7LgzuycRQvU72CTN11zepqZtyzyrZcriyqD6kQ",
  "key17": "5eapB9VaDEhcsFXi1jNxwKyFagmx6fLgsFHaUg2xreR7n4Yo8jn7fsGW8maR9TNvbUKeuEz39QBcettCw9JcCSdN",
  "key18": "WNFdacv2gZ9uwQP7cHeVab83R58FmihEpFwbWdUhnfXPuADumirU56xVxdiATJZDKoKAAPUtPfAJQYT8Lth72Bs",
  "key19": "2TPriiJcWWjQ4qEXwYxk7cXA8AiUxwUDXbAGDLNo63N7C2YNSRRChfHYKJ82Wu2MLbr2jmLsQzLTU1TJUsNgtagr",
  "key20": "2hRPMZpYJExbARcyJrfdtyyFJN4igey3cVAH75nRunHBGWgPawT8fhJjPVbnP99vTuDhjn8Z8b63gdQRMzbhhkGP",
  "key21": "mrB5D9Uqaas7LyfasgaNfXsyk13qLj7ny53JUMS6HUfRmAhkket7uHcyEJQivaRGwNMJeT9f5KQoPBqKRGdFBMe",
  "key22": "5SyY54BWgWHvS5iXfUG4tz2gySEnMU2Fd49oo75ZW4386gF5bhouXp13YPop4j2i38ySjJ1hbbd9QThxPnsdz4aN",
  "key23": "4tvUNrKMNxP33opL3LV8sNHW9AUCKouxUXH7c9SyCoh1GwG5ebrSRTuu2kQ7ceiLJroj5QRu7QKkoKNhK1jSximy",
  "key24": "5QnDefL7GRE5Wfr74JdADrcVRfbzaz4aJFWBddhPVHUYBgqTVbkfeP5eaXVAakyned7udR86qNELAPuY12HnM8an",
  "key25": "AGTVDtf8BwVu6PnkKB4B3qBfDKCMnf3FEq1zEMPnN4aFnAwXqFPwVXgQBFghRKbsnjURu35XQnpZ6bNNby28DrF",
  "key26": "n6FcDAgP5eKLttbDVjmSfLhXmfUsA2TDnXCYDB7crFAV4rNKZFCuvh8pqCNCP3gZ8nJt9ZXt9cAZCUne36mhRLX",
  "key27": "5r9ewAMo5RhXi8YepAWiNTEQeXr1kzLEPLXeyH8Hne8U8MtjLDgq39WM1m2Yyg4kwcgkpjCqJjRi9yDT1VU7zg2L",
  "key28": "5W6kc9b41rpiWjndis4fjLZX97C3EtfFKoV2iUuFQ1iEewEL3R1JPEyvFe87EXiDcqMSKLUS9kRbjMMX6iX652qq",
  "key29": "E7uv1iw4Jrbp8NGtwX6Hrc4RYEqAd1dcbVkh3dBX2RP4Mg6VhMiBnhpJRLttHnFQWTLTYDW1LkYVbX8tAFi3h4T",
  "key30": "64fpPwHn59o75kA2BBsysHXwVn99vccXU6f2yqdD8WGids4v2gFdSJeCkULCT4iZoB1n5wvCrh9iTBKx3VYamhq3",
  "key31": "2T3JTCU9QDEH6tWfrzZZdgZe7nP6s9hc576h8WJpidHzsPgBJQd9jKLVmDWp6o9VuhwWx8UY6MtxVeSjG8G2czXS",
  "key32": "4dvcuxYBtkA282r6jRk47nZmYM37pnNCiPxVvpWo5HrmC5HpRw6oLAo8Z7S3uWePcUijh83K7p8MQ7w5f9SBt6EU",
  "key33": "5RtE41KGwDKB7EBCybNw3t2AmdvYaiBQEQbf3QhcjrcKyCSYRjvknqmQff9ArZLfd8dnZwfZFfMj12srvqKHYPjg",
  "key34": "45CAPrXSVH53k6a9aQ4hYFRdyecYC7FC1bhb19C9GMm6QmmR6tTXBrutmSXHmsLBZvcQQDNuHq893WVpe3msPFMF",
  "key35": "2w3Hgmi6xtsTvZVJZJWDmeb3DZguz2jCGPG8jh7FMVKDwoGbfDwauJmPQyo1VduvZfKgJ459sKCczhwveM7x1w31",
  "key36": "4ZBjwABq5EG7ZF1E1KvriKBVka7sCVkyRWucfgETfPpcgwoc465n9edpZZbCaYFxQtYj5bRoTNTHHxU3wrPfozMK",
  "key37": "537bRPdHbm2Ua55RXamhVFascSBUj3Kzsos28pjphiyshVd9LJKeJ1aFwYwKRN3SFVHXc2Qzq6daBydzWPthCAF2",
  "key38": "2UX4mdqtV8xuwhHAzWw5tavwcsQqndGQq1veCJCeqq7upHJvwhDE9gUMk6V8tg8LSH7kBC4YC3NsRDJUwSwZqCdW",
  "key39": "CXwsnwbWiXfb9gwAuge57si4nfBe9sfkxiVexKoEUyxNuRJan9CSBWU7Vq5RJLZiJxLHGDgmc7ZBPZpCLr6mc3D",
  "key40": "5W5NGFwdb9v8mH2ZTsswmTsPB6F3yFZx82QaK9RNbNx8UThBcWenVHGyj9cFsWbqNXxd1PDWrYKhZaRTYBJ5RdUE"
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
