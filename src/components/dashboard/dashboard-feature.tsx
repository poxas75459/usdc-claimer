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
    "516sjeaQSnDDHhNhuyG4PTNC5aaqK8Cm7akBioHJWaz54PAeWyQNzH4Cg66axpmES3Sx5tAj7nNT9GPFcPB33UU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p3YxQo9gUJ822itQQaE3U23kcfWuZ3BCmx7FL2wWCouebMHQJQRPPMvZFHUy2KQpJ62cDDAkDXDVbQqfBiUjfSG",
  "key1": "5CKwc2tmmQhxKUxLmLMsTsNDtMVPn3cnPrnjMv29d5ksYrefH1iMgGKcWdczUWaiGzCeUkKmd6tp9ubSQVpnf7v3",
  "key2": "3KfhsNnSREFStHsUMYV7kHuaqJwCtWhmCwLYKNTnoGFYpFhmXp5iLeyzeCDLGhuLnN3jyJJaosRmhAnHxcMYVtp2",
  "key3": "4zELAMfWGFdDkgDssACXgbDX7H2YhBhf83EmeGvgGKcAkVYwK4acyXd8dQZXfQHcwrTpcy85nPm5o1Gg5xrFghGP",
  "key4": "YjRZ9HeVABSXsMfDXVVd6sxzDTVWizt5A6VmYLCkRaozrCNSjuCdWvuFWWSpW6DsxkevtXZwh4bDUyHwfz9nTpB",
  "key5": "25P9MaLf6CKbqAGF9RKnKrWjz7UTYAToTYAkoUqZffhVVodQfPhD1sgGgA8GEjecPNohuqtfaXVpcgE2EptuQq4e",
  "key6": "5ZW2TAsGAwbxRno6DjwzRFSov9LFCqG2enNxUJTdwaRyQzRQFcsD5wrHRiULmtr2Kx6sQmk2GVRjt2ViMtKCY4YV",
  "key7": "3wdtf1j54NqWm2V4czhqMCbKxnxJrepkx6S7Mr4gXt2PkPa514HZFeFgSgV1vnot5hHPfLxwnZURJz1nDiZXKhEY",
  "key8": "4yt5S4GFa6T75G4GWgdoEUvXTL26JhTqivpFUGwTfyLD9N47aoNYBf18v1H1aYYBbNG8bLGkhKZ8qsvWaXDtd6P",
  "key9": "4ubKU148CdN6TBcioShYhtwrrK2EkjmRGKDeyez2BwSYC7qtLuBVrHPR7n2tM4PSda68geRak3ZP92ndGCSpHLh3",
  "key10": "5dGia7emFwuj2XH45zntVKt2Hnrfwwab4ngDGPJ3JKWYVkdXPtr46yxNGefmpZQ9YM3AEh8926jCzgmWkyvYtUg7",
  "key11": "2aK37oWNGwygghY42KdwjSYEank72aq3BRjKdryFaB9xJwjFVRzdRFv8TqbHE52D7KSUWJdLyq1ueT627Yb6E3hg",
  "key12": "64uuLe1j9HXhnh9pAiJoezd1AwsqDpMLxpMPnabwdX6sc1SPgjJhaTEssbxDjeQHcaV6RZZfchq45eTnysZnxGKA",
  "key13": "4Y16vf8iNvJjjdSXwqbcSsEnQjytrXKuwRTjMLM7TkqSmvgeUPf6YLzc1mhwRDXQXXomgsKMuV6LhjhSCqTN6WnP",
  "key14": "paRgb4T4e2i6AsLXM8RMinfAwL5fuTK7xSMPrHQRLhHKG2B1vqQEmV2QsZ67ZSLsWshTmX7EaCUHoBa2fm5XLoz",
  "key15": "4soGnTaEhWc4tQzgV7wBPGsNLAaVPkiBdCTCiQQCcMe1dim2xwMPVsz43wpKm7uHZxCU9XSxE7EBEi5L8j511Taw",
  "key16": "5eiDkSdYzqZfML5j2FtEotHUtsmSnrq6prvoj82f6E7qczmFMDwho62nvkrWjmkirabNFYVrj5CwywwGedAHV6Xa",
  "key17": "2hu6ua3iBTQCXRk9mA1z5KX4f1kBgfYGZfhNkm5ngMg4tAtpBCPemW4QQorYzToeUbZfbDnbAT6yHu5uM54VZFxB",
  "key18": "3QWFnvaByYMMQLTk27SYG3ZW4124nmBMxt9GudFNgqLCUj59Ed4gtKSh9UQgqaEE1u7PEDcWhkiZGvPPYqonpxrY",
  "key19": "8xx8cbBNqUnPonLcEdZMfpYDkjG4FDwng7dVctRVvuiwhz72L5aBT2ebkh72GLVtj5LUz9juTnCEAdbuKtURhNz",
  "key20": "3pJYNvmfCpqCw5nvLjTSx2qZnHwSRGVrjBjgLDxkhdTwn7q5kHFN2AdBfsWmYMScAEZHxNjHXdmpK5Cigf7sYpYF",
  "key21": "qL2D8vXo42WeShHGmLGyiP5sJnGQbdAxmNSo5yeTjgZszTzd5K4vo4t1fdMPqPiKR31or9tzqfQ4pg5gmgPEppP",
  "key22": "3HDTAFXQiBRLotYjVNktt5GmGwUn7Vbsh7MsvBtSVCi7TqQKScuT4HPWspCpaTym9EkhYwRWpiwbjSytaVmmNk3U",
  "key23": "4jMWyGKwbRMJtctTXy6G8wzJeqkF8fY3fSs5qZvEWxZphMzkm3pwWgWjZVH2cmQ8sN7mQYAiKAFcuVvrhswqd7A6",
  "key24": "2JQnrE8CP1yecuDhgbUjZy3jsVFeWLvh5kD1KBBCnProxLxdCUuW9ubXZPJUksjyQ4w5oevTRLbwwrzYuFwZcUJf",
  "key25": "4B21xhdZuxB5C2fSnUtSWDcdNVBBT3fsenYr2D1B7rbQXwnLMqyzdzSJpVVgNxCr5PQc6CwykXuqGsvH5dUwTFwL",
  "key26": "4MRkakTYW8X8TWMiFSDyVuySkVkzDwMbKvgvfvWSKavmAtfPvPsBVeZxthEhTxLDjm37BEdqavvEjZju9KKQQtxg"
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
