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
    "3sCVEtHav7E5D3NH84NgongPjY1RnQxAWGmSHpZpn9LGetZAN6aFeysvNcEPGECnhQC2tv5E8HEVritnUGDcivo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ZAx5eChLU4wtrBy64ZSSqmQZ3b8NnXcewmTEcPHydNS3VLTsGCDkae9gi6sivyXUtbEzKrGAhKjR68JSApsjYB",
  "key1": "3t2atTs2ahtK3UJmQQcYN2Zd3i7MnXMBABXENeNdscsxF22jnxEaXgAymJHUPwRo6gKxGQa4LnfdyhfuhUBpjMN2",
  "key2": "3hfQH3aHi3MUYv4srPuJVtrGKhvVyPNcZjxVkbKipdS1Koqqtra38e1LrhsbCFeB6VWfL8LTe5DTr2AtUs6x4MqQ",
  "key3": "5ENXWjYMhQ7av4ADFUoV3333yUp9XkFxNVujZBYMdcj9q5a9zNUTG5LhnfSvuQyTUAvcHYLEnCYBSm86ZRpkn62z",
  "key4": "4hyn6dKPTeP5KLsuoFs43epZY3ky1r6FnTWUiyzh8tvU6X49CGm4FnFcds9T3huXiV6421Feg3sMaxZC9PMyfPNU",
  "key5": "YkAJLqJGsMmzJqSC7ZRe3cPdmMUbPSNvZqWkvPZew2nGf4gy6WSFHshMJbdQRmBD5GPYdnUFtYuUv1xHwo23rM2",
  "key6": "53xMWwbM5s5WpQ1fnvAYdcxWJSMpgucwGu42FvvR8opU4H7LaeFavVs4eeSeJ5pyKA1Zagy6hsdFsnm4cH6tHsd9",
  "key7": "5QUVrKWfw6ZYcTLXA3LXr7RNLxg9T5VxMgm9t9BXxEuQ8oVipqKognp8UCCCRS3YHqbFwaSRrAf3sp1EqT8Rna8H",
  "key8": "3pmxfyxBttNeiC78s7VJtp3hUVdP9KGCsXq4H682a3xW2bQeyoPkRwdpPQwYB9zBv8yuSKWkPhhguiQG4P777TD4",
  "key9": "3JFzEwU9tgmnP2JLzz6WYzitxKAMQD1cHAhwZSH83uUyEGWgWabYHEsnsFEpzCYb1no53ZF7NEHzbviA3Ni7EGn1",
  "key10": "5jBwK1fckE7bX1CyA9yB5NFdMfCaMxmXH325RjkycH7NqcVhLzqi2QjXEbH3QXJZg6GgqixNkDrDQomtzc5huTf4",
  "key11": "2FJwFmXuF9kogcjMWa9n3W2EA6FfAc3C9bqBTKktfAswL46wenV4yi8wG1gVvmQfRVMrpR74DfEKG5HeixrvED6K",
  "key12": "25cenVjxJUiLqj5JXHjpKZQ6knQx9DhdhGTBQNfizhGfPeUptSHz7PK7pjaaqiDdmMRcVufJMuMVaR3ASrdHvceE",
  "key13": "259A4JcVUm5tXa8yrtNbAHdCjjgaMAkt6gK562eZkLqebb785BtiBVFanWCLqg7JFTVFwsHPykcKxz5dDM75nMUu",
  "key14": "2ezzE2GM2uRtzMASPx7zSB1FtcyPTms9YsF8RvAfyEs6B21P7NWYwnA9Dm1515BWCVzCPYVrhDNMEsPvCuzQZu6z",
  "key15": "PWG2AtnR2wzdMSWZRjrGK6z6fL8B4cBswqjwd9nYK317fRgyPmNry5j6JcGhmWJzt1y7R2ZVDZ17QyYp9Ce6KT5",
  "key16": "2HNQAbwPeHnq7BbigV9V63MZpHfg69NpemwXXGTKWXEQzgthAYGvsxYsHxAtB1UCLqF9dEVWRnV2PWggPcyJdJ1h",
  "key17": "Yy5uRuMi6R8wYr5WEVU6pGFRf2Kh9k6j5np9VGixrC1JUHwR6sx63BRnBsB6bsDQpwaMdrf3jHLg8t6jTY1Q9S2",
  "key18": "4DB3tsEKPosmX8nEWfEPgYm1uWrM2f8F7zGcpt9bwSLSDaywQTAAUPRu6XR6bxDaQKopeV6Ta24DSHMtAqVxVxUk",
  "key19": "1RpbUYfzQow1j1E8nwxha7MBX5Pndv2ZmQctxYcjDa2feJrU1ibjSd8GjQeWkfFsXv5dp3wzZQcfCCKFSAQiS5G",
  "key20": "2pjupvKPLicyHfMZvJ9TJ5NtKHUNgNkrRBVnDDRw6auAvNs59Bo1VpsDN4yBFNz64uwVgYw8NgX6GxiVcSXETA3H",
  "key21": "5mSCNfECYPQk7Kp4mVjenJdH5HJM1gnFqwVv5uwBfeELz2n49TawWQ85Xf5BM6P143DqpySUqvFmsmkcC9c8K4oQ",
  "key22": "2HKxYo6k5RxSWUZ2H7BcNGLNfEmrCbLjyeamfTontRY7HbgAe3o6bkHSizF4NgmepvGrWCUoi2fyMTAV3q9giZLk",
  "key23": "R7tML81xEXePsC9vz7iwQcaneYc8AFvEf3qbdiyJmNNj51gCoBjRCvGXJjfrAsqs8FVsDVgTuFRacDL4wwUNzsJ",
  "key24": "4hfq7h4ifZzmvXHhquntXDGDUKad8NCP17UoUJ2PigGr4X7qBAXGHxoH1YT8EyQt3BTJpnnK6aoJ7rYC1jRpf7eF",
  "key25": "NkHZAvcqribbN5TPTpEyAhjL13b1QRPMDqLj4j9Qy1ae4xCPbNdwJmw8N1QrfTm2ySUpsMMGDFaeBoq3TYZxEoM",
  "key26": "nWEjk3vU61N92ME6ikMeSWasQR7fX91DAFV2768FFpfiBUpkp8qvU3sE8We1rwfNwF8fPF9wkCWAvAEhbNC7ZSm",
  "key27": "2K51ZimqpL6j5eU3bPgjeYRcytpvBgNsGRKTdjcL14LVGQPz5K3J1PQiQxVT3ekpxYWkqhVzpZjQ67UsNAtgEv78",
  "key28": "2wbXfCkJDR4ZZ2ucFTt41ieRsbK2b7dgPredmG8EQEpLtuDyrV9nmDebR5LZviZZ3JxLrxqLRiUDpG3kXqWTFm2x",
  "key29": "33qeGD1UztB1FTVPJrEx5NWXHu9BkPDbViufcSnZDiY3xwfnj4axw12jm8pYwX1mr7dVrNws732JKpdEoMmpnAF7"
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
