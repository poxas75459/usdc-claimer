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
    "5PjzG8DRofWBknhx1CbsBa1SMcT3x1xqHGyrVQzP5We7mvVQyAs8sSnkJ9HLEQSyADe86PFgAyLV91f7E6DDbehp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nS4zDZ6M4Ni4e3zRjHWMacm6SxBvLUGygQ3RRt4shaArpXD2bf2jFBrfWCzwJfXbhuK1ZmaWd5B7ziyrnH6BKBC",
  "key1": "vt2apbwduuX7QkvsfNZSgJZn4SN2VD74Jy54VdXTdqSb9Ep5nDsPzAv9JvBfvyHohQ5Lnhb7zskPkAfDhaWZ9Qv",
  "key2": "5e8Tc24k4Khcn5aQ8FkMRFGFvn5oU9YhRNMmd3RPh4M94fPUCnxWGXPrq79XCWZdmPVAWbqyftHUrs7ZYtGDvya4",
  "key3": "3PLBZseCHkcW4Uc6qP4NrxRP9dYNurZ2huEXwFb4qhC9KGg4mXQC3vQPM1zhZyv55Fxc7YZoQ1ncBfgbGtEErL2u",
  "key4": "eREsSAEu6kW7mVvwsEszE698CsvgvqyPsi9zcsrh6gTLdtfcqPd878rD8YKmLN3q6DaJBamzEPeRvqznkR73YNC",
  "key5": "3mCiC1iZMxLQY5tGAVJxPq42mRURxUtmfj63jYnAmHRxnHuPkYxkmwG4PcTYsyfJcBnkhNvZMSZNUKZghEvxkquR",
  "key6": "BHaCWJ1TBQuQkyNnYj7tTx8vummeBQdvjmERPsBLVUV2AdcsAVQd5U1cfDEDfd5x1c6tRrbHTPJhTsiBG1fintR",
  "key7": "5kqRGwdo744kV5bsoKhmjjnKt3vurBfWzR2qQvtMXn5mtq5t5FsS974XLhT61Kj8Ef69xe8K1toT62NCQBcpFB6H",
  "key8": "4LEccbbLHMGGAALnzc48CvJneQXMst2fUEunyAfweM7Np3RjBeapmNW7kKRcPQzKmUoFhHUim5E1A8W82ZNC1Ff1",
  "key9": "5i5obaLVWFTG6qN27i1A5TEKvXjdjsyXHARUWouNix8RYVV7aSYWZGAgnQ5QrHsyEozM8A8F646c3ZPRD1RM8sZW",
  "key10": "2PpjVQsxCh4zEJyaYqQSsJTq47EnMHeyFJBZksAqvXGvRL2NVUsyz8Q4vTMhYKQSf5fqMXtg6hQTDwGKP4WgzPrP",
  "key11": "VsKrv3fubRJp5pDoEJebgCgHuzuobjxUBnuhQoDh9Z8A8UedGCvgkdg8nLEukiaMFHmjr14YRhkHBHxRZjbcA7A",
  "key12": "4KZ1hURZJzzVqbEsZmXahZ3mvryTjKgZfQvyY4KdDR7hGYv3b4HQxTA7qLR2MS75kDWWBh9sFdLuGikukKntbs8Z",
  "key13": "55sgZvFUjBhtkPz833gmjN6XK94EEkrML3ZcGJAGPDJSwmzXo1cVRzEpwVwUM5oQi3BomcvZ1KM7LrS17Ne1NA4n",
  "key14": "3QCzNHBYQ6MvejDkknMKrTjhAEupN1ydXoUojrVkeLzPAQTaCPYh3JeRyxwZiz91NCCT9RMMAqka1ucMBSFcMwQz",
  "key15": "4CKjU2FYFZCguLz1FhvtxcXenJenVRiSaxETXCyCJGaYpL7uvZi5XctNvPdXHBSHsU1VXbZE8RFAcHsnWXuW3ccr",
  "key16": "5UfHFhTN3mjdc9DbErBVcmDMe2okwCBqcA9X9he2aUkuqeYB429yAPtNkoxPa5XgANZrdE9PSRycbzgPkeNuau8U",
  "key17": "5LjNi8qcbhuGWeytkvAofmMAk6wJESBHKr1TtXPKkoSJMCMau4EtsoERnqrpDYfuu5eefULfzxGww2DekMsJwHaF",
  "key18": "65Dm5Rio2TyCMTQKpWhYN5T4ij6obiHUuLHNhnmYfQjCBMqXDeb2jwhPsipk3YwEuqLhy2SKchEgpv5r6F9TYVMj",
  "key19": "27sH4wfH8rvbH6mP8UmvrXDPyRc1P9VDoAu18dHDFEWUi99zWMNjrCFbG9jkMLmP2GowcND8HRpiiuhRSbiZRYvL",
  "key20": "33vCLqoeLWXhc4vUxi8KyevaKhsAt3hj2AuAfsPofpeFRtpsA2AHGzwsV1J6DXVnzmcPAmqejL19fDZpixjFz32p",
  "key21": "34tSq6y16pqLyv7P4DxcGN8i63x3bigg8qaobmBE4PA7RfwgFCvkceED84LWH9Hdu1SxcSnim5d2y2vjqLnQq6eL",
  "key22": "3AbBcaWAqsujsiLuj9sJdzf9U154xoXK5qP9AjTbVEVnbeaRCiwFQaPPwnDBD4d1x93EwX9cndKLPpZzmPoZv3b",
  "key23": "4eSUYNdNVffvHbigQ6GjNesJWj4d3y7gLThxmEphmd7dsEK7wG9DLLLL4oVvkUARm23AsxgcSc4BuwvXNaHXrLdS",
  "key24": "Z1TWriwuNiyyH9fWEeVbZTZ4r6cgAvtpdkmxq5ZVt6TWBU8kXeuWrL8RLThwWg68iG2TfQpayacAJ2pQAbDnjrj",
  "key25": "2NkyxbNV1XwU9V7L9nJ1SkLV6uryyzxFSLto5AGabamJ9SXNJqamior9kJHndtEKHtCaLUVM68XwKsMpQQNaBwSk",
  "key26": "291rHQGjEPgiMFz7TJcWSAetFncrmgZe7tTBexEieXKXGm2evYaTXNKdehsze1ACmYzJadspn1qCgVbgy1hWYaJC"
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
