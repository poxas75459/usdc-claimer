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
    "vqQ6r4UkuSNJcHcv37hs7p8dFZjbWRy3yLJZePepcfEU1KKSmwR76ecPc4QQ4wWe7wEH5RFTsbHRukawqCPVvk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65bJUthL4w6sh3HymnsfS2Aa8vtxu4dc4y97oZ3Dys65uqKWwJqH3q1tpqgYewMhyn4RH4DowokwhVcPWDvyRVYz",
  "key1": "KfXXQb7pHDDwvV4oPubFW769PJqYJrQHNpETNCXtVHThYLBaWTPN6RiaWxynKUSKwgnaHvqGNvSJBnjzDmoSysk",
  "key2": "5vGQSRJCPVn6tRDHpZXVweXkPpxUNLFnXvSxwqbWAaP19Spa6ATmqhCQokdLjrQegRbgSfpxYBP7R5LUyuNdNEyr",
  "key3": "F6uoHVXDMvuSUkF7n6jD21BxtV6yDxXCtcFCW76h2GViBn6saiF9Y1v6Uz7XMkCVmTPUwj2tJnrRFg6NhWoCqjC",
  "key4": "4FFDauSLBkHfgpDXAAuzBqd7KZMT68MbeCokAaVMJRNvkcWTkihMSBwULhrQtgAyLTgPv4fbnQaJDDAAHEN8Lo6G",
  "key5": "vasSNLMFLcRGczdzWemfdS9MzDz6THtf7p7kTrynGif92GvK87af9qqK7M92KfvpT5y7WNzF4Ga9qTMuYB1uU91",
  "key6": "YnZSppoDyo9zUzCgVQMqwq3G2m5xcK1ed9gncKAb2J2CZ89qXuonwNrTT8B4a4AL4m4MtTpMsXatn3kts1poPLo",
  "key7": "x6fdRFMwHcdkxE5gW2ARyeCdcHfksRyGRmLn1J3MTxmEqNAhD3aFWbcade2jEsHCWsZrDAkwUjaNrKTzHsZEccf",
  "key8": "iQnTJaPhs3FwjC7ezHLiivwMpwj7K6QZMzpbAag5a2cHKTjz1DYRXo3gQYBjGnUc3c61Zx81jRGTUoUoFYX8nuT",
  "key9": "55y299jLV7nUez1ESKn9mcbvYacMpjoNoqt3QQwu3oKR1W6rzfheVsAxSEeGbBgXoLBsHqRzKeKTJywJqmcAsYss",
  "key10": "sw4arEexipuTDrZ7bZXRpUK4VkJXRFLbQPdY6mVjSyo872uYusmYMNQtWf1NrrG9yJFAQHa6r14A417pHUsBBNy",
  "key11": "tvyW82eUSdsoKpxqEunLyJTnnbw8jT8KifRNzFiqiNufQyxei67ZpvzDoxYQQQ4B9qWKCCfepYRS4VvBG5SdgB9",
  "key12": "4Pkbv1osmq95h8EsYGLokunCUTp3gNEUQ3WvYjYFbTcvAPbGXx5EDopt8vcb1qj3tTnqQarTNsYAf6P59e69zg1B",
  "key13": "Sp7nfCVktuUSZukV8sFd3Z9eKKajTMM68Ui7g3FxQdBaK7K4AryBU5JkoRiAucteTZQc88m4HJTHZaWTZCdRTyU",
  "key14": "yF9Rt7Y7QRQMgAvUybtsr75EtwCm858UKPn6CuzqEsZQLaMGefGYh8g34F9dQkt19oZR15bRWwsSSRwRQLxXs77",
  "key15": "2uorFwoyg29ndRUNpkV9UVWd3PcAbSnARfpRFYKW9sRXfYjekaKNCg2XDn1M7Z3oppwUcXn5PQXMPUVZZ2yHFRv7",
  "key16": "3ZKaY55mBg8zsqJoZUt68QFDv2cfXkLnqet6tbDctG3mB33RB9xcHKYWD3zarfDZcijQUY7wSY4d8hszMiebRQev",
  "key17": "3H2bQ9N442MhTAx1mgM3yBnkGP6zpp66Q3jJLUqshiK8z17EVg5Pma8oRXw9ZbELva1pnaGFVGqayioq1oQhGDdn",
  "key18": "4veQCYFUW8nriqLzsrXVJ2G4KFdPoVarWUj8jQqgApJyWBXWq1Vortd5yaBULNpdJs5TfEPGeUzAk1LSSuoHiwGU",
  "key19": "4VK1hSVwbvt4z8JLgtu1nrrr9DBgxsk6jKVrjcypuevNBP7msBAraEiFSyMZghRoj3tTSkKs2LC4QFMxkcp2RV3A",
  "key20": "2GRR4v9z7yeF8whihBhZY43mouUgJbSC5oZe1n1USM1EDDdAhwU9JprnjVMK1hkKotn3RAzrFjrJ11DFqgQP3Wae",
  "key21": "5T9tuSVSyCWrDn3LVbnUVbqCi9A6ckBMmFVV8EGhbPzTZAbe1x93TCFfK8SZi7a2ozPfH4g3wGcKYHiyeiLs31EM",
  "key22": "hxegdJ4znMj2CiWUKZwriVcWoXbq7t8WmKuPP45R897j6JAKvPnfgiT6EWbCeCKkwchLswKquAXvJoCkFgKHw5k",
  "key23": "fZw88whihWy1DHbj2mGbYHJK2RhMRJDoYykqr9kqDjCGsZk1SxYtQBBfZvWCQCj5S3vHDVnbh4t5Xv6W6hA5rpq",
  "key24": "4jX8jDnSbbUQFGbwWQTuDn6rNidujrQGKbY7VmVcpjfK77hNLneCB18gt18cfuFZ8xKnFHb8MaSvUMyePc3q5ze6",
  "key25": "3mVGrK3NtaADsuSMFDM84NVpZmrf1BHBvGEXbYkyFvskTsvXZtmMZnNq6Fq1eUjSAznLuffdSPTdyHh74BRnxYWQ",
  "key26": "5mQ5RUP1UeUxqeV6XmUzQUyQaYXoZUtXvb8xpmf3nQGAHtPsxcvYXEJz8kFWc9PZpJM79tkphaVU4JEoypii3AVW",
  "key27": "29HtZB7RrWiDvhutbq56mXjyhZExu7asmimerxWAEA54MimVZ9eA3mhotD6qyB3SM1SJ9q9DNxCnryRo661HzM3x",
  "key28": "PCF3iTvfu4E2nvDieDuBNSrcpbNhx1ao75RGnEYAbG9YoQf5oRkD3xbKeiTLfvuMjACchV6KdLMB9NDp7Nqje1Z",
  "key29": "3NmHiKeB5sPMsBK4rx21K15Pm5QfxGfKAgM1iaz2sHoX7GmZi4qLMNorFsttRPG9vTMAtSjRtxkLMXza2jhuMx8d",
  "key30": "zZp1WvY1hoap5agoa5BJbPabCV5JyWChXLMqoUkEYUYdBdExXToVXXNc9XhpJxYLtJ9RSGvvxHQtg74sijkLmT5",
  "key31": "4guWoZ2KnVmDX2hhhYAtkzNKBtvxwovrfR91vpVNCmdwuoYuVLsQPWZEwDpkVyiRpN11U2EiKHvFbqZDQ7tH5bhm",
  "key32": "3XLjNyjVRHeuQ6ViRx1dCYju7ApmaQkwr7kdvFuF7XgsZygNXtNUXbRpmbfSpi7mMZvaYzsoBXM8bvM6xHABcdoX",
  "key33": "4qiSJZyPLifg2VB74SXGTGDh5RzLsvU2Spm8EKZAsJtY4f7TWj3GuGmKKtaVNuHfsqX3R7BTvyGgbSXro7iSTQ9X",
  "key34": "3yKZEwQuo4mKzmCsbJUfToPQWkoqhSsoL1UzHV26NuRMgZUsQw4trfFsM549yuNGXssPpqJvCpQVsBHVvsqjGtvS",
  "key35": "3H64zQ99quH5FaduAbuQAoL6xB6aVn9Mt19DfSgqHexn46muRLFr34DuLdxr3W1FATGuSUFrdMWjN9aNNihtbaK"
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
