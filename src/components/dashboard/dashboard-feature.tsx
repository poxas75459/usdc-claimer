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
    "rim5Vuqq9YAjSnjG6pRif4LFt6KifTxBBDXA6aLuLeSiiVBDok1rbaTYGVkDGfcXgnT9GnJydZpMteUNXydk71o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VoP5yogMh7BD2qka9PXbp6qi2EbeHtibJQEGjsec7P4p1ru2y4CqdvPTEAb7D4FcMTeb3tjGbYoUTzem3un4B2i",
  "key1": "2UWEu4qpXgBaGCkm4PMMtbLjpmj6tg1nZbRaq437qqNPQWg4q9X3RgXtHB4JTkHVbrMebUJfYt1PmY7ryjgsESaS",
  "key2": "3MKB4NbFFXXqsNaZSRypo8Ytki26RkMgaRSL7cDzmBwsuHwbHgCkzsb3VCKCRzv3XtovJqkpRRciTnDxnRx5savF",
  "key3": "3v1RJ44kZQfVScZmJ5i7HVRexAQdPXBjRbZVa5qGeh6mcpM77B3vn568gsaouqCbXu1vanwrE6D7ogcKcZreNJdj",
  "key4": "4iGbu56ifmTMsR974i1a6YNTtpgx4uqeFZQtedG9FHhR3vVqr9TsyuiF7yEvefn2fKrCVJrFJWi3uMJDhBu3r6gv",
  "key5": "5qJCp1ZfuYsA6tPvNFp1JAcVuPWYa68m3wRJwEwDeQ39EVxiup99Ef4jZXSPGJTL7fKVS175W5ysjrgeG8aKusgL",
  "key6": "4tzMpVN1ZE6Xq1DBaxPLHLb73D1kUYQuXCeAtwH98Y4pLzJSw4YJavwf4KtaH3fSdbEcdgE3BvCP6yAvvZWabnJ1",
  "key7": "4Kzeo6YvyqRpHthsXB7v5GMiuMG1fKMKLXLnjFRsvHqbYLU3bWpkhjat35iYhoHr6Re7y13Xs5ifL4TgEVsggwHY",
  "key8": "2StpLndBppy7aq29W3VoBborFRZSeXETSxKogNjkK2PHMTzFkvg1vuTqCsVjfwvAimRcfGfZRHyzyFa4FupvvUuS",
  "key9": "2DP8v5k6QDipBLsqXfsSzofvp3STw8Ub5VFvE6Uweb318mpTx3HP4f3R9sfQqVYZYBLcKsJrXiZdTiejXQXG7UsG",
  "key10": "2wmLoL2uk4iVJi8coM2B6aSoppNF4qoPxHBaWr8pZx8TB6xXftzJLCFRsK2S4xp8gt2Vpp8fL8nEVxaGDmDMFH67",
  "key11": "22keQgbbrsngjRJW5g4HyjhjnfgDRkC36PMFoRwKXhurADrtSfmhSBoEAp8DMBsRvmzTVLauudmp3VNobojMijoG",
  "key12": "4eAkzpvBZEKEGux3tEF14CbaaanYct9vXZZnfTsUEfM8S32iQcaf7m219BhWSJiHm7Ziye2wAM4HL6GMq3tgYuEK",
  "key13": "5HTxqopnYLyNUr8dDpxuswvADCPNdj9duAf5zwBwTf8HmLQudQPU4hNDe5becRVpE7CKEwuCfhQJvwuxfN5sGbyo",
  "key14": "51k5bBN3fRwbghcKwzvovzG1fucK4aY6vbDJSAELVwfGdq13cH2c3LQ4SV8h8R7hEZaYdMjQb3ZETGJYBm2b7cuL",
  "key15": "3oKzwSJRYbFWSHmvCWZKPgVi2bbU1EyD2Z9gwJ2cFpaF85LHV5Y9eWKvfgkD6gLv2D9f1VcxeCPJmeQwj1hNsrve",
  "key16": "5yGPRrcZrcU1p1Ym1pfCioryrLAa4XaQF2xFN3i1f9oKccRu72Jkakuqcsx8X2YyMwnixTPGpvKA7X1KAbCGvhrz",
  "key17": "3Av3xaw49NuyRDShiyBhrrJ3iSingawVfbxuTTb2xXKTF412wKxBzHyR2UB5z1jBC1fSWEpDBbMZnR7iaWDiMYNi",
  "key18": "3My1J8HgKkgydJ2A4fSRHpeanATcau79anGDW1DJE6q5jxiKYg8csz63cCbfcHkYMT5KcnPhT6FBsATUXBw2KbEf",
  "key19": "55ix1jaxkmHoa1bjjkNcF9RqYJ2asMFGGtVWG7MzZSUbH5dyyMNo4eNke3LJNiDsMp5hxa4E2HtGu7Dkdj2Waum5",
  "key20": "5aaNfBXTCFSfGg4xfKyxU8K4PwdLibjq1r7Bg15z4dhCKvEsAyxxg7uHrbiAsgvCojmYeiQfaPZ55VnBWs6bYkxv",
  "key21": "3Fkx41Qgdg9TRDHDFaPHjEuJoB6PzpJCMtmFNZ9i9nrJLVTChDbuDidMn8hjJwYWePF2gmMo1sMeKp13tUMEaexf",
  "key22": "3xzJ1gZvG12JuQNxkQWgfatASXDAua9AeeMv6gsB7kvd2ovo1CNMw8eMKEiaJUJrnTwD4dQyihQvzwekZo2KnXim",
  "key23": "5KtB4Ftr6W4SkTunbc72oo4oEgYeWSMGrtnXKBGsESNEikdrqTUX1vrbrn2Lo4R7VpRYR8CeqB2fYRDEFYG8pXje",
  "key24": "Zahj4soxELF8qkuVHXxJ1WLgoQeGMaBDwigAT4NRM4uHviDbEMRdxzsfnXpGfcondHNqKptqc735WNg3LVkaqGK",
  "key25": "5kREU4N3Za6BGcNg2XAdnmax1XD4MrdFKXScn1Rg64M7wttydfEtbWnzvwiKJfV941X9FYZQt4zKrSkpdueGGMKv",
  "key26": "hTHYoadbEVdfGrw28sEKE9if586beGgSuuqQCArrE7bCguH9eGtpNv23fUGSauetZjgZUxUFyj7Afi6rCxrAuhg",
  "key27": "316mNS8CA6NBa5YHZ9QHh7q8d772ByB7LXbFgGLNEYr6Vc8NofgNJb6FrWev5rNxhtynchzb5z2oa6S4KGhA9PoN",
  "key28": "2kAyLXB1ZuNFef5SrD8DSvuHto8deAf4CMdi4NccnnSWkq7WY8KM3tPLn1bLqwW483CxUjPUEPfhcrLwvbTKom9v",
  "key29": "4rqA9Y4qGcSaFi2KhEJWpd1HA9htp66ZkPd6DMkvUwCEyo1fEBpYHGomWsYQBJUFxTQ7SQqTUajR5KHUyzZ6ziFe",
  "key30": "4FDSf91rSGqMG1EVXbbBSBhCxXYzSRRaELUSLrki6oWydCBEeWeJqvtaBTg8GtMKGTNtjxJ7aaej844MqwmNuazs"
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
