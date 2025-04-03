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
    "3ErfBqEvNMPvYD8vSPcMSpZkSMzjNJiUP2q6x7ohihaddVGnypfM4GXddLTCBe8LvUtszFt2jLLkYWRhMBeVhfuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EgCR8gxs82syN9D7sLDGmMfejVaRoFeZPWE2xnwLkyHjvyVDysXwvYt8k3oDHGUfECLtJC6FRsVUtQvNvoKBWvE",
  "key1": "WMPwL4JgAMwdMxA4YmYVxZoK59QbRpdihxVz1pxT8GfqkLm7bZxwai4GJ1CR2wPe5Vws4wY65LHysUG4LqZb6X7",
  "key2": "46MJBYdfRatvit7YXWn98u2bcS9qzqBn4rHVmzgam6a3Wq8z7LQuEVGwjmutaefQiLU2MUo5WNeccG8TzDgEbyCQ",
  "key3": "uS29aEFNZdZQ9LSgJm4ojVWe2GgM4XVNxDUJvhXj5LDH284HcnVncSE9rzjoUNPmYyK8ioyPE8dwu4g9cFdDP2i",
  "key4": "5R6eXZ11f2iLDoJdJgJtKHn8W4t3MZhMhmdTg2kBVrknUtPti5GrthEU246wgzmX5P55egSMFouuBMpZjXfjNCeC",
  "key5": "KV35a4aNjj4mcqSqwB4Vrg9kWJEQ6MncT6vRuQYS3ARLXrVBJstUzBnnX9ePv1Q3G7isrh8sbsNa1KS6KkNjwxn",
  "key6": "2TSqXBmTnsHsbutm85MaGoReBc4rGLcgVZ7zZAn5HXTWiUGkaybnoVq3zQCzuWu96ffyi2RweyoqXGZvQ5y54KhJ",
  "key7": "2C113FG8fwFyQbepAB4nyPt8NejUevJAVfPc9oXkwGmVZJndmvnpk73vsJuUNF8Y2wjTEnZckMDA1MdQ3bytcYd6",
  "key8": "2FcFHHjwwVkyDfxjJAu3e8ojfuTSNDQhry1qu85xkGRadiHjnbrKzPaWU8GbuotV8t34Rh1xP12SBZVGeyb33zwi",
  "key9": "2fp8x6UvpZ4sWzcYpbNHhAioTwnbUUMefjEk4vqbuhVzmk1fvAJ9tM4hqvHtrmof7JyYkXEEEynYfgqiR7MhsbK",
  "key10": "3i9eJL72WkYuXJ72qNkzwhLPvYW7DBf3nKTxnxj43rbTruChwjUHHnBj2U5HXybTzKaNtGxKsGkPAL7zWRNDc64y",
  "key11": "5tyWqFLjBipzYTwuvG8YmnJVTnVtpvZneLP8GVRh9Xsh4vqeJAu1KpTDxEgRtDYFYbV4NpB4PVNJAHep1oqvJ6L3",
  "key12": "4ucd7eqQXKGMajRXmxWtCrHUmCXA9nbMBeKC5JrbdKCKwRfWFMJqsBjGJgQJ1oQs1T3bUd7bVin68ny6VfmUp8cn",
  "key13": "RqJZ5TfA4xLzEWyuDsyf5BPTe3MjRpXCXxQs7iuNoegHpgDZUpEnsXR2FWA4jyhbegQVtqCT4rs3QdyxyTVwFEs",
  "key14": "2pHZ5TsSdPCiA7jUgQVzZppE2Ma4gf2k49KprQgmREHKorN3SDgnSw7zU6QyfcCoMh5GyUbQGoqezPwJEnJWbysi",
  "key15": "5M6c8h3y9Rxk6JXbfpp1XWcZszELzmMyB3Uwb9jnyuJpLQqTi9kdgcvL69b9uXeo6T1CJrhJCSgX2L5N5JVDma3X",
  "key16": "2hkxpWQzT7cdcE35AvUtEMPG6MM9ic2cfDLovYeVEDPS8qpTUZRaRYXa8fJ3TGXQozbb6SeX7bYtFrzkRqDWt6g2",
  "key17": "5ofPD5uet1fzEsfUsdp2QH5qTRiTHaMfFuD67Nsf9Tc93S2soxMAEWk5KhL5xcyPswV4U4AZQMDFe12XnHG3v5Qd",
  "key18": "4c5g3dY2YV5kSPnDSkLmxBpspaaUG1j66dEzymuCnQqPKLwUD6ZMCSVJEBpUKdKhV1pXvSuFcHZT629ag7zTj4fF",
  "key19": "42d6aei8vPqmjXyhkmuLAohRc3sDysZukZBsPdH5MsxMwBHotwdNoGyjEvXUo4Zc1LyyX4Lxqa49U3GAGnsdegyh",
  "key20": "4ahretGZuC3mFp4jLVDPVZiYcFZ8v2pQUzAD9MLcFfEnycy4ZEoy3eW2LKRAXS4qBfPm7Xaj67bGFCyqPDMhKmT8",
  "key21": "pnRuDDmRbF1MpmbTSzkR1BEz4XMiMd8hr32aAfwx4mMt2RKfgm1QXhXWPMqQovuLixxa4Gy52Rf2gFhUrrz6YKK",
  "key22": "HMcFaNLEZCFKcrUNhBuC9SP9PtmVt9MaFdT5WdwKZBsQJxcQu3JQmZCsLvntFPRXgvRmo5iSbkH1Gp93KVd7ob5",
  "key23": "3dwvFDeQXsiw5J74SVxcGyhAezRUzqJv2sNoaPNNifkLm5DTGbneQErYosfzFTK2axemvVu8ePR1qZjTCDi2RNfv",
  "key24": "4b6ge4C2Fp25JiEKr6sBADr4jXpAQju12BrgjyQdHCXGFdMi9cyXA1ZFspkvdb1DLMDaMbCDGnaD26hRfUJGQknX",
  "key25": "52UoLWn7Rt1NcPi7AyjUrEdzkbKLnaAwHAw186nMMHUvMbnuZJQbqWxFshppJAWyTbfgL1L4HqqqV3yMRNzgjshd",
  "key26": "i1Mu5FQuuKcsAmJJJxAjeLHAmYgnLh5HusrDxsDeDhdQDAFAN8cjyBnBv1C3G3x72tyi1UBv6g9yRRHLSR4h785",
  "key27": "3cyzoXENLT5SaiDtZhh9HsNW3gTmGwRmFhKQY1bhRiPkqoRaKnM8AuHU1fLRJeK77UCDRNgEgvy6mzpZMi8UQJk3",
  "key28": "44rEubUHU91XF83DMByBz3BJaQRjRpGSmZagf6X4q4uXyEoaYA9vqVTyALtwvPAciX9VxyD7r9K4Bot8PJtEkiZc",
  "key29": "51fAeU1zey8iCCZDZNUgiTRfShCFraieLswuCp8cdUAJ4K7H7prXS8tXp54GyFMVdX4GcjYFgW23tN4AUgdCnAq2",
  "key30": "5k1rBQmzKsmsgFPyoqeZbYknZzSzV3mcsJut5GPWmviEeXaZ4kBBTCEWj6pPphaDxwZVz3sU7bMZg2yN33SMmzmH",
  "key31": "3YMSndBf5fVqwaZVR1NetQUECnabZoM9XV468mDP4reLjexkeJ7DH1aJ2dGVAsuezqsSZAGdojr5LWwiHfNjjwm6",
  "key32": "42fieiYVSk5EQZuLvsVGKeLWEJ9ZNhqrsj9gCsauVLmCDodMkwb89DpbXZv169P4UhCAX2HwKxQ85owRpydHmnZX",
  "key33": "5rsyCAmE5AWFAJtP2wW119ZVtNeRXvnfLWPUZKnJhE1PuDjcuuHRzWdWhuR3Yawju4djehnyu2bMeLrs1pRvm733",
  "key34": "nZr16DtVhawjze6hUHhXek7xR8kPXRWW1SB1p7Gr4j39P3FeB2F2jfU7r3NRWVdLuF6d9BZvmBMhoSyCqFv8WmH",
  "key35": "2Xc33xB6bKjDXTM8TsykQmzZLwFiL7MP7ec5j2wqxd9mAPZ6CbTZN4g4zR5SEHJUpLZmdLDL8gG8MGaKHJTczVWB",
  "key36": "3kEgLYXa6aj4SDJXDUzqnnNEEaBUnLEyayQqmb5bptagz9SXiCP8WspTdGcAoHfyva4LknMGWnnMfXxu6MbZ8HLk"
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
