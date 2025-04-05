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
    "2nm6p5WtXYo1LTWtZ5RuSEuUYagZoLEdt36BDCu4dfhfggXH4TQGT1y8hFSo3nXkUN9ETfptmSVXdB9N9sE7c5ZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QQzjzqwdj5aty1qdewBKPmvkFwddJHMh5GNbTEFSFbufPbCDxwvErNWoy4fPmcNKPi1SXxxjrkpwC2HrzTUV81q",
  "key1": "5RpSfb8Aw2HS8toXDLfSZhwPtR2nKErtqpV3R2jkKYvhFyKcxsKEXMnmEtusrv8HCcsA9iTppmbYE9GyjXkbLmeg",
  "key2": "5vqHsSrLHurjtBsWeqCjNNjee1ZgBEXq46oTmt3wdTB8ycuTACC7swzu7HwN1fYZ12aomFrLsEjW7CgAGT27xUZy",
  "key3": "P73mWGpnPp8LtL2vweAjFMdxSrtugPyL7Q8GdR4bXDX3c9PCZzRE6zT27dux4NxS5oNJhLJDhzx8hb8QvFWvkZd",
  "key4": "uQrurPaiPdMqs8RsbvfBtNeE42qbZoazyPT2NvcyeUCUxANNLSAJgF45w9R2TGqT4arcjH22AuMnXFXqxf1YDoL",
  "key5": "4zHRjXsMpANFphjb8qbqJzQUMUE8uxhZ6hgugsLV2oUPQKfhbB2L6P8SuJxCECcTvkYrsEtNhKSq32B6DKdKYuiR",
  "key6": "52K5cPBmXD4wxUiDjrkzgHBLoPkLHQ23831A3Z7ksUKcQyUTy34y3XAzr4aeuviLCZxL9ujjxPND47AiKvTdZjC5",
  "key7": "66F8Xom5NhXEG9NLg1t26m98hLgWeoQQHStgRJC6KvngY8F6UeofpHsufSpyAXvFedDqD2jbt8pA9GtpaV2CyAA2",
  "key8": "4ubqHe7bLbUXkkv81VfCnKHe8Cawdt3inR6rnXRAQXPjY6ombpeqNYXxzNMKPiqKw8YNVqA329DsXBBMjns5b9cL",
  "key9": "5SyUarBfUDkVe7eJHbEa1uqnuDgbdTjJ7t8Yiea99rVYxJc2NXTrRGKbZyFf8vA8GTdyWrY4JeEYq8tZyFJAG5iS",
  "key10": "4rrX4iFsLRupsqiaQ9GeQ8RcCtx4dDsmVkF4R2Gzb2oNT5PdyKBg4QC493xLXyRWJh9UetJW5XNdqZ6fvabFf7VD",
  "key11": "46mGP458nrGjJpvMM9UE4aufHJhhDT9xavZPgdt4VvMEoYJ63PLjfQtawtT9vTFVRaiqeN5Fw9djbZdwG92c5QwQ",
  "key12": "3ni483j7siJ5KnZKvFSXN3sFTYz73WJX3MmEqYrYPmnWM3NewP1F3QU6tiP8ZaQcHyoacmKLegxpY6owVDnWszB7",
  "key13": "2Bp4Sqf2V2bR6t281v1pCR3rX24GMetrum9JnCytL4Ea7NTZ6EhJvEtCG4CwXq3BhSzdLnpHF78BSXS5PSKPzd1E",
  "key14": "2whR8G5p1ZZWAx63a3KvfodstBPRS7Vja9ts28FZKbX1p42vQzurmqrvuh4FcHhCdopBoESxccB4uvx6VMhPrvsL",
  "key15": "2jdATCPczvVXTLxCaEpKBuiUuhnv4ebtPb5syMkSsZxE3auSnXNRGjk7eXyn7wQJ8c3ttjj1aBQSdJ2CGuiWAToX",
  "key16": "ZLUC48dcVJgAVQdFoHgdGSfHoc7ufHqq1ftYxvm9ovJQfpHkeGeeVbsfHrx9KXes13GRopJpcHgWWLSsFhG9Pf2",
  "key17": "5FSAe8NoACnPEoe4599a3N8AaiptPZj8Bgi6JrCRrrUdXDzxgai6VCszK97FfCqeDaAUoU6U9JLGL9DtV9SFzTVa",
  "key18": "575ddoXkqcGfAgxAYJRWd57eaoG9e9vQ4WsQpJizPUbN7LWFBxDyFQEszsFd6NgNgt1Z7gApYPRvQR5HMA5x2RyM",
  "key19": "qhzLFj2ABy9t2LxDZma5sdCQiqxCnSjhDcXu7J9pLHV63UP1cSJqnKi8XZdBbtaHi6cVwSbnnRbeKZeR6tycgV4",
  "key20": "2Fctxh43W5T99dCA7UE5JhYpfZLvbSiTecZFKo3dhb1ENb289o395p9ZBuTqdNEL2WTNj4QW8e6K3fBUgvpEHPYT",
  "key21": "2yL6C2DjfXond6pBa2qjAUcypLufgN3ENpPi9D3cAnAy9iJhRbNAEKJkHktZb44KUoMkrAFaPw1NoKnc4WB2afZV",
  "key22": "3nYTMiaPFxL1CjMj218FWrMvJ1RpFVksWHp6RRf76EoyVauycqLYRNxNW5PPAV3nNZYTKhK29sVb8zAucqzvAjpu",
  "key23": "5F7Tt5NmEToEMC834s73TVDdJ41qTV2HjBRWRMboafMBaHKwFfr1bVzRfVFA5BTVjSzJJLvRqa8GbB94T6bBFHxw",
  "key24": "45e6vAuA5jVQ2JrTPyEGkz5AePPCFVt4Zxtiv7tRE5m5CsyiXEX48Wa6gdT4fqJoocjyY5buchYabkwsYhTCjpUz",
  "key25": "21t3n8v4K2Q9Z5RfQoT1qYKFWUXD79YVjfKEBUmDjYwbNEBUUQv6huhYTrrvLkKwCte1Vs66sJ9f7nqFmujCUu1T"
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
