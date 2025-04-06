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
    "2ag9KptKoQGpsxLEAmRGmFi6n55HjLViNXBdz7JoNSansBJNNZnEiqZkY8BmbLksdmK6LHze3A9W2RqcHQBFR65u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FfWqu7uRhWP5ruqj4w6SrZFoz2EH25eRSeaRVabBuDV14gU4ju9pcE27p4Sf1UQumRdwgkSJMb6PPuEefUEbePH",
  "key1": "NJy2eBLe9vRmrxnMRH8cKxuSXipm8d7nQZW6fULZ97vTetAN28aZb6xydFy9fDAd2gLRKa1U7KmV6Bx7nSNX36L",
  "key2": "2p76CiAqDv9FippGzuwXGzRXqRymNq15oV92D5kfD51D522rUtNjio5sCJkcEpgjMyQ1AYEr3yg93CzNgD9L1MKE",
  "key3": "43aZMiVrn8NgRh7vn6VikWvpcdbDz42wNAVmDv4tVzmrmRTZcyfGUMC6XBGN8B2kdf2RY6r6L7KTZQrpyW3QKgNc",
  "key4": "DnWm2xV2or9p3WBzbwCQ6icvS2vZsxgU4rCTA787HvyRWWtPrAg5dXrpQ3yrGjZUvxs9xbXdnEXtq44mSsUohZ6",
  "key5": "2zSaCxSMA9HibS8u3woKHwCkxa8p4VKBKFfJ1gGkGuqfiHYwSHD5FwaGXqgWMZ4SofJwmBdASv3fHFr6SxNh6MSi",
  "key6": "5xPCcmZx6RkW1A25CuTci1Tj9ZLAXCFJYAHXTZpVEEQukaCGf7VUJGYULdECyJQsR7BzNkRmcsmQBKdJoMK2b8pS",
  "key7": "3RCXW6GhwZ9XJhT2rR5vYzxmRuggoTxYaYfP7vbbBgPhudAiUD732ZorUFaWyXi5tB5gX92siXsAC4DZJs6aEKNS",
  "key8": "3vvLSz4Gkx5cDE27r7z6adhgH1QCfgMkP8jjwu64ocRFGEDG3pH3hiMRff3stqpdkym5Z2Ly9h2x2PPtJ4GkJZMt",
  "key9": "9ooaoCBM8auhWMzeavb7JjEQ6PdAowAUmP5kGNAfFpm5RppioCxtMmNwqPsW1ZLjU3d4oSrhJRmgrmLFdpaq4B1",
  "key10": "MwRaZFB2pqmVcXEZ3RWZ13KN5DYbwRwtWmG3L7Hj6YSNpKV2MxDstPwqW4M7cGU3e3VWB1T7LDDsYz87e66p9gX",
  "key11": "35XkcgRf7wDWUAhhLXfpWXi2eykz84cdJdwxaDHdErdxtappJvPLQqKdKmi9mu1LGxkTTBau9dRZTeLSGLoTNWDT",
  "key12": "5Xgjj6MtPz8eBd3nxNdE6NyohrTaRLVh4ZkVVuAHmUiA852hLF7sBsE4S14BR7yLiRmhhL4hcQ1AoeVRAnaQxGAu",
  "key13": "5EWTCwXvUKkX1HEp8rXbSPbb8HBEQs7bpR5yu6GbByHMLMuGJK8UVK8UitDeU4XATo2pnh1bBAg182XjZYSLiJqS",
  "key14": "aXH6GV5yqaFPNieh5NVTqmTXaMECo61svrXNxqedLdBhXGRrbH7WcHRwN1qhcphTGedvMFGYcZ3ryU2Rtisvp7h",
  "key15": "25RJmKLkgVsZDenKJTRwbrX1ZuGa69K93GeWxFmvgGFXWsJ7tF44AM8za4UHQzuj8qy1v61F1jQiu8oYWvW3rjbb",
  "key16": "39fRJDPBAhFGYYD5VAfp6nqajMgqysdyac96JLm6WAHAKQgYJFaKYU6FTFwdMPGiEmSNs2fz2XEKvEUsLtpmjVK3",
  "key17": "3PGU9GLwH13kYRax5pfWbRnDGg6TzQKi2oousJ4XWVNpxhTb2gVfQ2UwCZnwXWC5LZZcBU5VL7X7VnHUGTrxMk69",
  "key18": "5ecExCKxqedd3db3SnyCTshedAQTqGarZsL6wVLnupiGJj2PqxQsyax3ncGYNSaQraQbnNpvwBqNc9GLMdri92rg",
  "key19": "2NWBDexKLfVErUTjYKcumRQZMYP2bGk6xHTRuKeodmjCnzGbB8GuQs7yeRNvJaKdsEze4vC4izLLVqxxNoaa8cVD",
  "key20": "4oAgUKMYYoMyxNvBcgYsii9MWVeEb8MuKFE84mF68L79i56tpePAKAV8PQcyvgciqh4ezrPrA4GQJ3JkSMyRNWEE",
  "key21": "4GrMYZh7YcpDfavFzNDramAuX84rR7jBweSX9dtZn7GPnkh9LW3pmxZMgUFTBaknGWUdkuSZNCJK91uwcSxGt2zD",
  "key22": "3vb71M81z4p82ncvdYS2biRfdXKuNG8CWgfWZ5h7spzf17HRDjqoZ4iGdZ1yTATHb45D4TMzW1nHwhmZEn1rxx2K",
  "key23": "n3PPYozku7Qt8J39CWYZLS5EsF3xFPDsVzBF5cS5poFPabrnco59dU2KboCGR9nLFuMJNaKQGn1tV84j5maVi3m",
  "key24": "24YkLRM854sbGpHifqvwqMxrAvF7zw6MSZM6HxEbyy24sxKfczfoQQ59b7wt8tj4CehjPj6ovdN34SRnsiWm1qX6",
  "key25": "7AEmEW7EyX3xAytmaH3UwHBj5qVgHViMTnf1im6U1Dw2GbhyoTRTLSR6Uv9YoxTHvhL5oT4zEJSCCBBiDUUcmdo",
  "key26": "39zEoEUT2Ckm24HoVTXH2Ek8NbJ4jiUkuty2oEJ3gmm9WDwDyNzgTH4wyESWChC8LSFzwaygGJE6WemmrF86ijqE",
  "key27": "KcsfJ2tfxtHF14rWRM35m2Ufat8xx2ngTFHxYy5iLAMpuhnbMyf6xLpr97CQKDhYtFmVxiYx1N8BETPpZqCAbJS",
  "key28": "23pRAsEkRHBrxoVoehHqniWoET8Xx3EvvnFBKhTLVogMyGLCvjWExe67baUiySJatxgAVmfBEp61yEeMo91b4Cr8",
  "key29": "25UYYZ7kR855xkdDqcXGpYEyVszakQt9WvtqRPPbAzMkytVkhQRDtZcndkfLpH4KtbURmmpmHaQDSHBvzGwDMdJv"
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
