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
    "kKgG28gfZ7YDraivWYNyLdtRCTVygEuDrebryf3zuA3iyjw4XcpiYMfbY1XfKvZtjWMBfBMdaDYryhm9eu1P5qv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tqWVXguuzj3RnLXKZdrGAEeGtnydaxmK9JChP366TuvQGQ7vYKCpwnoBSXK5aJv4erdYPpFmfxcxKzs7mUHsska",
  "key1": "ThMMUNTVP7ivKkVH4LStsr2SYXsJzkQQYshmRAQx9CTkN3gXLRXGNJQ2Ud3Luifw6YfxmnFV3nAZz6JqWaCfx9H",
  "key2": "2L9rtWPKDatkvAFC2jHbNA6TxWY49AsrycsgkTBEQ9Mmmv4YMuFEu3MVZBpLbGrbm4BnJgg9a71KA8X9LrHRhh7Z",
  "key3": "5BU84ACNEns3sqTR6nvtnFkHynCHG1NxqVTZptp8cBwh15iJCTmYwuSRYZRDvfLoph8G4q5MfiWxEoaNUTCpLwQy",
  "key4": "TT47vr64WxfJei7HgSCNzusHSLUCSmmifvdHfj5TK96324AkrtSB4DK7NtYpu5CcrTa5Rx7Zk2BCmSbQRWaF1KB",
  "key5": "5xERnDiHMZUUTzRZiEhLdhsx5iF7vUsgJPT8tvm8tWyxH2DMb589GYMziVYABNsTrSaAn5iTaARTyTDry896FvHV",
  "key6": "4zCbdDh6TkBMUTvB7U6duVCGVtM9oQVVgbSsVxMP5YMEQJpxSqsZ9s4wbownHqCaXqYCktDbiGujKSKTtpEZXhnD",
  "key7": "5ufQqJCAuBKHzSwWLcP6zG3bbvRHeMxTBi5fbRAthU2vjtGuurSctQ3bYgh4NpzNPkgBi76AUeUDaASR8HBtNFRL",
  "key8": "2nSUraPJGcVuM2aUpphYNd4hXKhHVzNuhRzdcYAibdtukiRGw218MjMTwMF3gx7FTYBARFjzYe39M1F2GeDTomqs",
  "key9": "3K6wPXS3YnK671m32wV62eFejySXodsLqu3rfKxh789hkxKpY4j5PjgX4XW1C6sBZGp27PG5xE8s8zVAjutq441C",
  "key10": "63fKmhzcLPthergRNTnT2w2aX1Q2LXYmUMwrxsJBfFdeSkynyeCuWLEjmasLPjGo9YANoVpTTS1thKCgawoEXD1C",
  "key11": "4hf8Ck7BnaHCckM6qgSfcrvTwh2Bi9kE862c5KA4AxN8Vc8df7V8dVuA4uxEWqAEYJ3zdBxvUSFf98SyF56f4Prf",
  "key12": "4NdVSzkKMsaASkhk44MMsBouK1DDc9kRjwvncLTzNt4iUFNhhjYn1HtVvvcRmEgiVfPpZdQudwLiqHAudsD7qHQv",
  "key13": "5JM4uKbyF5BbR7fbbCS7EwGgb1AxrisjrvbxsUfrQvrJJVEoRpNsydE23vtntg5cLHaqPeCDbpzmqK31uvKTe7Qg",
  "key14": "k75NTmqXkntoZuW8p9tDNn2naFYY8wFLstRBfTxpY88NxGJqHw7QpCGuqYVZRt7HEK7dbiCVDyDDZU3UfxLnGRH",
  "key15": "5efqq7s31Hi5gKtpAUz4n2gJ3eW4NiJRpnNLwZBmDdNsN6o59p2icsmJkEUCubfEc5GLttGmP4Ekf7AuU1sDWJUD",
  "key16": "3uWbNEoZRoYi49aDigN7qyCJ9euGPBCHWB2GHwj3t9Rw4FCzUPxMQdevzoVpmdYCQK2HDP1Tk9E3JWfXmRVSNfHw",
  "key17": "4oMuqSVXCLGAdbsT5AT9Nx4KgnJqGiSrDQMC3ees2PsqEMi9Vp9ycckH7d2ciKipXaNpmYfY3G6s46biizetLRM7",
  "key18": "4EPumbm8du5bnvincWWrrVxHtxyiJT7umSGRCPqVhrnqBMk5jSsEazQ9HayU4zESLAxq5FCizyokV9x9GJhkvmXV",
  "key19": "4xXmwBMEMx6XuDZCUvvFhqLRJETGesKt8hEA96EqmK79QQY4v7RCoArU535mtGAj2y29NoL4inGEyt24uYAbRmPE",
  "key20": "5iwjh6TceMaJ4k8jY2NwK8n1uECcKZMiUbJqMbsTcoEsbCUk78wq7129rVLRCBq6JJukdvvcKjLpnC5cttuKckYh",
  "key21": "4WiHP2xKhZhWusRiyhZMUjmkuebYo6ZGwnVXQSCHCgL2HFmjWhHmzFEgzbK8Ke63MXT9Lnrg23QUMwuXG47LgM9i",
  "key22": "3eBuQEuhuqQ2CUHZMJZGAxFWf56vGABpKGeM6ov1vyYVLH78JF27kQgbgzwqR9g5Ddcm1t22XtChAiomwPXTzcP8",
  "key23": "4QdM9m1TuWreLQk8LV53Jv2K9MXKvvugT5c8dGqHGMfzkbiErxSgeAvwUSfGdYuNuebw6vdkiHGduNFfkTBasUd",
  "key24": "3VD2uzisNJ3jZHWNcuUioYNgpRa53QesQscEYkDEET9Mamn3HMds81m7D6r6D12aZQsgQDEQYqG4nATYd665obzS",
  "key25": "2spRPoAzfYE95DEerNTHJmeuyyWSCd63yGAfJbDrXZS28eemJUiKuHEZ6MHx7hhXLXbvUGj11zaYCmKR8vikvzUU",
  "key26": "33mL54HQefBSEu3oUqGwuxJSE4qA8ZHv6wkYEEKDJVfz8yGZ8dgEViZxEWJRqc3TQjdqSUS1X4TAZXg2EqJsJ4jc",
  "key27": "5Nc5e8bT4VaEsyoBkMAdsp5eSLYZV78KRg5wJfRsjy3vfHzfDD3dJBfUbchmMVtm3dBSiPagesUUXkW4e98yUsMZ",
  "key28": "3Ygh3MudPcsFVDLgDL4d9oCedcUb34EGnNJtvwTe89AakUQiESLDL3zuj8XpkZzFeCG661sjXVdeNBkphLVTdyQf",
  "key29": "yqHdYuTxjVNGrnbFkuo1L7ptVhaRgvJnqgHS1oeSGVodVxjpW7rBAFN7V5XPjq3EQ6d6gPF7d7eVojs5VxwxY63",
  "key30": "4JytBZAtH4WHdGpnRTQ9PZsX4Q85WniMNceSQAeU4FAFFir57z4qnLPLbww1AGs2Wgkzmx4oF9qv6jqdKg3BLmSc",
  "key31": "3DB9ntLUNe7Lu8UkYtptSqvgUt3mzhTEYABhohXSDBGW8uAgFoZ9U1d2rp3RTT7z4Ea65fPWFdDu841FgXG6PHeE"
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
