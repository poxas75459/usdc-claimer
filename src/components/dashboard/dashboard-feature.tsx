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
    "62PqLJgCLu4VRT4NtgxPL8pXGreW2DJc5LG6tKQLUhFK1p6WCC1BfvX88St5HE2KSufZvhsgZcjHvWGVSkzgTQK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RNTwjxh8wmhAPTcnMXmNBzmoDCnNW6fbpydokHGHyd3LhSYQcZ2EykbQ2eCpwBoGzD1wcbuD3svifReRDwYNuCU",
  "key1": "5gDNMBwoVTDoaFRLQWWsGFj7RkAWWw5Rdvj1oxVjw5F9xGMYm16PQDnEgHREpC4rod9F7YpfwdGLG323JsbeCUm4",
  "key2": "3pCeKgbv3L7RetTaf5owjfMM2GHi4M76opdd914iSuQADr9VPavCrPsWSpTdGnDbPdXE76a2JtDmn4n1M5LPuwFm",
  "key3": "32iNZRxbnNX58JmQF4ZnX4HBY277y9NG146NPMPj1MVHTUDE6zAbLxQUbnERbGzszsgiYk4vo2kpxNCvtpX4o9s8",
  "key4": "pRLsu6fLQGHeEEHY3fnA5R6VL9gaBv4w46NxC4xq6BhLUxan93NFyS3wQgCKFyqmC4zKnEee2my2sE4VW8RYjLF",
  "key5": "4arzDrgjknMNiBeaFC762xRZSQvU27Guqzmaa2ithWrT7Dygbcdddh3oCF2gHSDFPUTwZ6GGDT4Lnz9kYR3jsqC6",
  "key6": "3ptjTUhixKdSvzrxEsAKgNVrD1pdZ87rQQLohkXvF2Le4H1rXEbUNeX3kyb2Z5rphYp92ru66Ruqocf2yPnzUmR6",
  "key7": "3iqw6613aGbxegnnXBisZ1THeNcsB6mTeJetf95o7TaLkGCrkkDTBEwAKYgVRa7HsnKoUvSxLuCJ9wALPf46WK8N",
  "key8": "3ae2n6ViLvdVhtHxXHxcp7MpseT7sKXGG8L9m4NPR9yNzpAcPYcTgiEud8kXRv42dbAR4YAr4uwmFBv7sZGKQU5R",
  "key9": "4fXzU5ddpboGz4unWRBjgFg7VNqZ28qhLRwkdi4RVUS8xTaRPt6CeDjNQUo8ThStDfTSSNkkjYRa9R5BL5epKqYh",
  "key10": "9GfXj8D4SRnTaj54sb9eQjZ8H39hnSWAHLCm4KDaAEbxEMjJYHPUCrCCNmkMz8weJi724SH1oYgN2giB2ppd9oh",
  "key11": "C12KteAtUU9dUByCxpxqFMnXEB9aMP2zD9UnxsUzgs93ivgbpnkAYv7wGPrgXx3EnfDAadWpmoiCckkzxfoPzAS",
  "key12": "65Rbc8Tg73WfKPB84rNyNGQ4Y2WKmRxweBEmyV5L8JZr9qsG9ZhuhXacKw3gkkUm3ddSJvtsiJeaB1B9y5EWWgrw",
  "key13": "4TnPRg9dV5LCEwKQApQsGPjs5HweQa1tEEiWg64gr7W4BXSjG2n9MiRzgJTKpAnZtkUk8KfxWBnqQ2jWzKFGTGPU",
  "key14": "Pk3tnxRgnWn8aQm4DWR5AW8oXU5bLtpiqA1ayfkFU8PteF7qfcXarMqKduuMhwP2rHWXJppAsNL6WkftAbeWtos",
  "key15": "5oUiurB6Eko58z6vTytdFRaR3xcBDoaGbi8fwVHNtNWKZoKEgizSnCEZFU5bdiVasDLYd8E5LFTbYugKBzNsZ8Bg",
  "key16": "4TBho9Xk8DeNtm6Nq2xpUqkYu5YMPzEcwuJh4DYqoUYkwHWjqHmrrcDePe37VY6A8CTV2C8CvZg2A9gfh3gZ4jpB",
  "key17": "5ZeuGLvpRan5iMfQFz5npECdGB7y5DKk22TL9KF8exRbLz3zHsoYcn8CNzvDi4yp1aFKirhWvNS1ENNd3S5gjdai",
  "key18": "4nFiBjXbVdAoV5J6VRYdqMkXsko5QF6mj4Ti8DarfajrXfBNvzbnEYaZFwrm1LKTjnk77zZRqvRmpN5rTVPqmEdW",
  "key19": "2SH6nWKzVjaATEDanxHwKPN5AHPRHTSpUhqcotup5YrkL4cVCfSFouYZPznqK1nbJGPYvm9EkAFxG4Fz47vSBa8f",
  "key20": "4rBpYmLyHendMDgPw8oDzs4ywDeUeSZCyc725YcuunWuC1Huz3HCWtU6bkaryBKUMbBmxLB3wZ396skbHJhYdi7R",
  "key21": "39XZYcb5bbqLswSPMZbHettmcvD8KcX3e4iVnU6GzPLAo9w8cLYM9gWrdHC9wA36qaWz3yhn4xHCLaQFvoAHS5qj",
  "key22": "5RLmPoguyPymZ3ukGRw5TDbuzqjLw52oXE5AzN2hgASzRKm8JjaiVfvsxKuuabm3EUWp14NMijbSWNLg7S8LoFqC",
  "key23": "3k4ThWNVV5GDCD5wQ3tpmyaW5GzgWK49ery1zqMsLJLDLhCFfUMfL8YgLLtW9ze4dV6CYZ1fqj3f4r3D9Qrk99GE",
  "key24": "2KAH5GW2DyeoctxLuvcmmysRtHD7FHAjvrVPjgbXiT66unxN4Ck2EjxrkgvQqcVZggkC7G2Fx5xAwwh5vbVsRc7P",
  "key25": "3FY5KXCF7c9dGpAGHxo6NxTNM4Depqa9zm8HpcaEKt3LLvnVudU7qbXAxgdVmv82QWWKNYq7UCmK1HJcCeeYtWaQ",
  "key26": "5TG1VWBURTGpz35G63GWGpuy8idn1NsGx5ephPGiZYfm6qAJGRcin4MhEwVJw2z7G3jMLmYgrQ51HkSxZt2GVGaJ",
  "key27": "3ymWaaWYZ4GoDSjkZ5Gk4Qq5R9hpfWfjjNkJnmfdhR6VPE1mMYJ8dLijTY2WfZ2sJJQBrCc94WrznRBq7FemBfmg",
  "key28": "2XkPTFZwRxtiSqCd1WDfhev5kYQHfdhRhUXdXebW1Dh2ShWG4dJHtYwzk9E92oNBgrizrTJGvJZBMLqJF7z2sXp9",
  "key29": "Ss4X14L86597nwdzKqPGJ3hSniQ3XT8sTTXe3iyEmPKZ8AxVhuDGQgJiSeUqCZiutvM52QzPRoCQvLYUNBN3Hy1"
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
