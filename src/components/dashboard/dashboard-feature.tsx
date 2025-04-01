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
    "4gJgm3yyCZzFdK1sBWBYCDhhz9fnA7h8mxCjmsTcaFtqt41VSvch7kjT3fE65Rd8nLy9GrNue5hvF1dyiMM25R8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ak8cThsvYKjWKXJMVViG4buUabtVf4tNJj6KJKyccSW5D8DQdk8FSqSz7VKRmB13aW433enVzjc4WWwZFZ3Xhqy",
  "key1": "5vop3Hhq5uv52JipFLHcyy52EWM4Rgw7PauVoZ3aZhAGpTr8Ktqd19UxfhNcm3FnpNGQEK11YS7cP43KmDEdQyyF",
  "key2": "5TpsMSpsBBpFhwVDbuGJzToyHhn6Ey1wvbJXBKos6Y73VGELb5NpkkVrLsUZ3BeMhNvjTyjXrkZ9gspfJntJiui6",
  "key3": "4SvQrc6vovaPet1zsWbFb5MmQRTBm5q9YhC5vft26DPDDX2cBLg22yqtst5xCgtC4H1ZXWoYHSQ1rFK4gUbJDf4X",
  "key4": "3TijpAmp32QUFKwYPgn8d9ueuhdED5q85NVNxm5rdDWgrQPFPLBgTDsgGm53msptxieZqv6cn3VopGc8gpr2ftqo",
  "key5": "3gwxCVriJxWxS2BJXtdhXwGCRcoNWuLP2NCRuhYrPrGJoMFsuFcYX9RBNbtKv3tMVrcv11RomAisKzPUfUGCZaX",
  "key6": "2e3cDagPAiX8XGBYsUmZUNLt82t9ehmDpPxU7Mqg1mkbGa5Xwnp1JvZhU5PhRWV5DwFA7QCDV1o2UjeJVCnoG21c",
  "key7": "23PMt41iF22dqCQNtTdr53uPtmdxwAzkJQ3WbhQLVDU5B8wdwtPikjy47xYQu16tcq6mVUxzVayHsDsGQtPH2anB",
  "key8": "2b98ARkQaYuRvpAfwNpTQTVcnUtewDFCT7DULg8ooo3pbVDNyYKG94zG8aQU7kZTC3UMMPzGcYsv6vtf2JH8kzky",
  "key9": "4RfkvUcccpk4DWEfJvaiVbrNQyAWMkTmihgZn1xnRrEaiKYhRyZUGHM8CaNVr3WrZN6ZKRqb6U1iCTvNB9LTnb2m",
  "key10": "kLouwjqMMGSgsY3KgSBa1xrdoJQzAY9Ug8LdAU9Zm8wwG9E1sUzr8MWaemJNEadh7wKQCXxWrnQhyXB24VshS5g",
  "key11": "39GTonC8R3B7jmzBUMRnhZYsmMRUYeM1UqXnp1ZzvxsJdgCs2XhGdTamoKMDhKxxQF5XDE19J31nMy7cdKqmA84T",
  "key12": "4LWxM2cfmDKhJDtn8E4XNLGKifat21UwAF2XeKk4SjXbrGbKKGcMqa1AEzDZjaMvmUD4NLXdM5t4N8ZnpH5zVs8X",
  "key13": "4RHxPdbRb7hAgc4ojBsfmD8LYrKaSzzW89wTQrtvT4nrpYwVg4AptJjXeouiCtU56MuFVjrfX3SvkPwHguizcjzH",
  "key14": "3DyiSvGomzn4PeTWsCx7dgHgWa2YCJWPrkkfshp2C7JzuNYzip9r9EkNGKe6QEErGtvWbJ673MrgUwe5dSA454Yb",
  "key15": "2951iUwjNKmQq4GQwfeF1NjZeKWPKF86wqGnSj3vQtBAREnrig1PZHGifAJKEYPyBgez6wB1JyoYb68hyYZZYcmE",
  "key16": "iKEFB7YxCWczBFKZk7GtPizH41ev8xqgkbJ1DLcMAVXMMaSPUwxP7wDjvFJENMwVyBsHCBzWNwnE1ugNFCvCWeV",
  "key17": "2cKqXwuLE1e25AgvfF4aCRyPGcSuHzBAjXUhmojNU8EQDvtssmcThWaVgnNGnBnRuYa1XwLwshX1HfyzZ98iLedh",
  "key18": "57hkfi1MbrAMebC1Py4vhaf6roiGGSdavKHnzAvJ3VVrS38po8o4ZZvCFJNnCWFExfzTfAQNHWEbnDLeKMYy2anU",
  "key19": "1BYg8r8AhdQHiMPmXqAtM1o5i7N3Svc4v3MSiJcnNajFK9nJo2gBc2pYsAJeZjSsS2aDcnktawLz2a8P7xkLwdM",
  "key20": "LtGuhK43PVVQszSNFbFuNuDchdPiVSfyX54gHyRC2GL9r2W6M42KXP47XJvAFh4J3UYZWx1d9ASNyJQZiFwELpA",
  "key21": "W9rUqNk7Rg7EoZDvHCXiy26oTDok7Zc34LuhEDioPfa94znvsbSC4zrwDZLBuD6iAGFduvKEbeEof3EHKsBL616",
  "key22": "4rHrEqyNkbQu3EMr4nswtohJGu3ZykKVtoCGcSA6uq7FEtbo4koVgcpgTPWWSaE6duBNW2HorUa9XpQiUBkv1qqT",
  "key23": "46WqRqoTKCedxJXtJDE8kBLg7buLpuqwrujbH15RwjCnEA32aVeAQsGw78jqookPbwdCFRdn9n1Py1sy9XKjMjm6",
  "key24": "4MC11dsGhz5cTnsT6jpCQ5Yy3TqsoxkQUMsJgQASZSPTfarYvMBchrkjWp225ju8KaH6CxQhgBaUAAZ8rXN7q3D6",
  "key25": "2hnP1zGCSPQoUoj8FWhLfCzewSYCEHfMKsghZPyeWhsLsHRTAw3MXyAdowacEFSUhaHSsNRRkvVW434bW6ZaCg9Y",
  "key26": "4NPnYeCiaQQDESTxaaVjnCoQzAvRdWqDVGZrPQeh6N9nXgD1ZzyHugwonWS51wbWFsQgkcd9fPASq3C3U77FjWM9",
  "key27": "rRm2w8Aajhz7dRXkg6dUsYj92maJAwQPpH7tL4iEtz4wQ7xZtgpeys12GDpcGrK3vXN1L24a45AoLuzoeWx2L5x",
  "key28": "3Y4VKbBKmFMXHEwZcAyFFee18XS8GbciHLStqkbCPFGp7DDQNu7SpfMTkZkQ2XvddiinZyHLBeC4eqs4AogifGbs",
  "key29": "4xP8493ioZTdBLs9VN154N1AP5u4eFpKM8xXmkV77ZtuaXFGXGgMiNe5d2kkJukHgEQNuFMmBWy8EmZHN1znxBVV",
  "key30": "RYLpvCnMhjecvcXWm2RVaqfJ8rPvHvuH7t3zmspJ7H1rzMhFBcHJ7opUbEsZ2vw5YXLj9c1XRQ2Q6MB11uFtU5K",
  "key31": "3p6nFGM2KToQ1pFu4YUQ4kxBh4DDtTkJvugHqSZPYF3M6YVKrCLBBpapnm3ZV4QL3nPqUHr7EFVAvXG6W5S37GDx"
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
