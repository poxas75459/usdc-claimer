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
    "3iHHGKA2ELDiQzAJ5gCjvC3dkQL7MxnxYxYaeJ4tNtPDBc6sEN2v29boamSJDshUASFzGsuDpkE4euyn9SZ216nF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hDSpQQwJURg2dwbh8z3JkPjy2D1XoRR2maWHSeHiDaPXvLcQYiWM4dn71Dco4CxA98bACkgZWyExTvmYyG1bg4B",
  "key1": "VoFocYfaDNTMUVmgBWYZVcwvpAH2G7MHw774SRzkXnXkdnvLcgsdAG4de9HX2PbuJTcKS6xRXL8RXuAxGeXQrcS",
  "key2": "3AL5KRx1nsxPRWxKZ5u23osCmHaQLAJ74ZtVShvgmcdHiiL9PLRMfzTuqHJCCPJcYnYQKFCmMwJZpJzTGH627JDb",
  "key3": "4zK1hH5X5Mw5uVd4d4YvchX4xz1EZvhvdK3hyXLku74bcHve51nbbQcHsCXfijrZJRFcRetri9dSumxVgywqPmZB",
  "key4": "4pWcf2ggFuTNyNct1ioUc65DjtzKPkEPw9fLDAZSnoyT3FiNP6B5oPAB38NhVVr5mDVDJboao2F35sZ2Psf5b6Dj",
  "key5": "4MFPABavMTKeig5vtzkEBEsB8PbKBKR6EYykRx1NnfYfyBTGRwXPWKABSHaG7KTg1WiyMK83DpmUAwrmXcgMUwK1",
  "key6": "5mZasHu1qqxapi5P9u5Fves1zXrC4YZDo29cQ3aUTr89WyhkvSnZECzhTba32ewf5ihttFpjEBzmXivpf5LqxUt6",
  "key7": "4kFGM7u4yTYXQkSCvBi6ZDjmiavaPvZM8oYMYj4MmQd5ARCFgZ2ExPVpfThv5mhj5c3afe9jNLXSXnFk8Szi5uL4",
  "key8": "8Xm5wQymBozLAtC1mHVZS9aNN8dZRiUBHAJiLeeMtqhYjj6cMvyJNEZt7ExtLC4PWuWNpbXafjvZbXEtmzNQxdf",
  "key9": "5rPNAC9aLnMz8ckRBJRufALqQRtFBPxD4GJNCF6Qum6Fvs4CKMHL54c8e4wTUtoK923zsKq7G9pX8E43TBrFjYpS",
  "key10": "XA7MCmHTEsDyRVvAwMu7i6BAuKGhPgBwHDkjMFmMm89jKdMXfLgDR2QLEJFQnxC4Nvnak67pAsNBgAKwywodoRX",
  "key11": "2fABHFK7aXPZ6eWSgxAj4ZVYKU5GEznXwfTBxXAEbNrMaRawog5zpFhie4Z4AfF4rt5fe5oUgM7mnJyi4KQS9AGv",
  "key12": "3f8dURz7urA7MuQVcMvyZSVGRCtBu6Tdxr8HcVKqAm7sEB4qVvUAHeGXfEGe38zrZEdfJom2wXtYBGJzr1SfPAf4",
  "key13": "2ewCeGPPvfh5ogJoHQ4X8p8kCv5XgwBT2XQe3R1aqQFpbxDU6F5rM2j9Nn6Ef154Ys8oeFsPF5jbtG8xxAx4B1HG",
  "key14": "2ZmgEbF9ZAS93ZGL6CRPxRzTMpHLitXZWikhod5q3kgBR7zdNDwLoGq9u8ANyNH52gkZzooL7r6jqYKpdyJ8FDqa",
  "key15": "iENbxuR4Ch4rAnX8xb1eMWNsSs6DP9MacL3S2p3jjatm62cojP7wDxMVVCgoHX3ZqPtnhcv81AYQgHnG6mt4dyH",
  "key16": "3V8VyanD5bx7FdHcXuHsdfWFGR8byJSdAMGJBK7QHg7HmQLNfuakCKfUfKtDt9fu8bRW5aUtGj7zWTbpUGsbnQnT",
  "key17": "zNMimQprMSrgFWrSZnjmsyZH9czeP4fo2jh2kAcmujsEJS3DpCoebzcnKnMzZas9DPPSBFwtnJzwfBQhKSs9sG4",
  "key18": "mn6DeMANjmSFuD9KYZXgCsVNukBSjgjQiXfMfXuZnvs45C96T1HdUQ6TZESqXo6xMtFk4C5pJZMtBGMj3kDYujH",
  "key19": "4RLnuLtnXBBFxYyiFaKD2WkUHZbyYd8bUHDJpY7BoWsWsNhdQ1zNSabgy1PcdkGhRaVnKfbRFX7bMk3prbr5nwBC",
  "key20": "3izLogo6QPrwHgq8JTEMBZEd6j6Khgyk8ebZVqgJsVA7CzD4gdxbuzsuzBtRQ23ksSAHVAceM7V3LswjDq2g8b9A",
  "key21": "2PbmqpDsmyNY9YhcXL29XRVXxRE9ZS5TmDa3GpdY4uN8CJTWk6WXosCybXXCSJjbQQZic4ZeGH3ro6GSJcPCfBy1",
  "key22": "hEkqR3nczChEr9ZMQYjv1qz1dVRRqQwJHAkasm9GGUyWhNkakBVdnSvahnjKmMRBeNBmGDP4MTL8etENciMGHMA",
  "key23": "4so75Ymb1xXSgzZfzrdgCc5A5aGDpotLn3egEpyAxG9Vfs4qjUr97WphKJyPqjT7AJqxqJKveCDDEt1XiGVjYX2j",
  "key24": "57Wf86QfhmYDaUbY6NdVraDJUcHV3gGTRc7FvsfcDNG9vPWtMmuENR4BtH3GYktPo9md2DKZCyzzP54E2wkp9i1V",
  "key25": "2KS6BZpAFLquePBcyEHHyG6ECAGA1xqo8xCmiii96um5eLKgNFK2mvkTodXTEftQs1y7AJAL9ZucoiYnKr6tnwi3",
  "key26": "2nJTxHyST7HLuYw5ydb6YVyRR9zSxJgxiKYSJW7Vy7GbU8e7KfNUuSSyQPmgyCjgJ2K5og481cNYCjJQp9CxDvAL"
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
