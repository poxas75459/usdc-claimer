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
    "5V79JjGKicZw3w5ENH5Lbyv25ysszUjdRJ5eKkVQmawgz5ZiCjWHyK2bE9UhAMkCgBHyrRAMh6do7woegFmurwzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SgFEbeKY59G8FHW9BSWzDw6b4p9ZDyhYVC8XejxzPCqssud9DTphqBV4Z5bSawfkCGLY2bSnwXuyC5zo5kJ3M3m",
  "key1": "3sA54pzhn7Luu29afuUYSPahPVDvaQXLVF9qwnu9YcDE9tBvEH58cxQewMMPPgyTk1Z34LSZxynRDRUSaUx46gFX",
  "key2": "gUKY65gJJfUCSxNwbb3Xw5LuyPfL25gi3SVzZNvGN7iYEt43KJ2wLgFhnzWGcvEH1Z6UMgzW4iDVNt7DC2GifGf",
  "key3": "4cqt44DrPfhDArKVmrBAbBvakkPEFG53Nw8HwyEpcefDdzLPJ9UCwdn9zfohRn3LTHKbKHE1fU4oaCSDPibbrkwB",
  "key4": "5DwnVJkNK61u4qN3DPcEdbS1vTyNEHmLJdr1Kcr5TTDkDffqta9iw2aNynBBWegWagAiLcdL4pJwhpEbRpXtYLWS",
  "key5": "41JcuhqAyLpa6ckf3euwofSMESFND58vH1jq5BboHkkU7ixq7UJhpDehyTJxjnehQ9QUYSu311w5vFiofAX7e2hh",
  "key6": "42BptBYtKXshySWpYjShaAGYvmnM9KcVXMdLpeGB9G66LWiZouSUgoN9fS4YXP5ax5UX6AWuEpWDYpktsax6s1A2",
  "key7": "2dkpWE82ie7EP9qSLTmLgs3vwiMYKNSkQP8tL8eSXRzbMuxMynWz5XZ9Rz1ZnBgvbqwXKgTQeEuVnVzqryKxfz1N",
  "key8": "dyoFqCimRZjndoesy3X3JcWyNYhR2AX6tCa3nBZHKBZPi1N58icdRzqwXGa2Dtbu3Rwnn5Fxb2uoSqYQjcEH7Wo",
  "key9": "3FXv5vnUhTcFDduTh7nWa52UcWXTjwBZY7jcMqjzdKccuExs7gMCbHpajp9yyPfBaY5BuWKyVzmKo5d5x38Cm9tQ",
  "key10": "61V8xYMbCwmxYe46TeAyBXSnociGZwhTxjWXbD26bnwiRjRckBRCm8vr9BtACdBs9QoBksjRKpBaGc26gaLwQFJA",
  "key11": "4ChUfvDQKv8J6PA2BCjeKjR2onDmtTk7Y4KxpwKvNRDTLsXyWgmYBSsL96e4mbybkatwXndWeaDbWfdibN64Ttas",
  "key12": "4A3Jw5h1cTZmesMKybWdqEcFLDbNWxQf2caRUy6bvSJ3NkHhY137mwE3RTf4Z5yULBTfXRtQXAsKFhJ1iRhC2zoJ",
  "key13": "2moyCCcqv5xThhfPx7AB83FQk3bkDnsN7CYiG8n6HbFX8xvabNBEKYfTcr2HMsqzazQrejaBAb1iGuyB3A9QGeNH",
  "key14": "2k87zmKrfR8gRxvVLMoMeb79H6B7eeeZtni6rkWbuYEQ9R26426iSgJjrHYZEeXuLxadmds48CWzmfpd4YEBvoEs",
  "key15": "5aNMk1EJHi6GcfA8KD9NHnrtKA4XTSrBJ3jn4zzLXGrVKo8ERy9a4Ts7VKDp6Hha2ZQRGgscXgNZVEtuxxUYR2Yx",
  "key16": "3Pzt7JvqyZNgaRkEQbp2A2EcFHPJGYhKHF6YtWwrDeZgaxYnDKzCPpjhLWBKumUjLa7qheYCUdcj5bfBv6gJhY7T",
  "key17": "5ZZRbPS1nDrTKPHddvBYvDiqC1L6gyErCnQyidkqFqiLJYtyJcSxwqqDENEvLj8wBNS6oE6RhyRcr8Bis7KjXfMV",
  "key18": "5xuhadEmfAcKkSWLNZCTfygzfV6vpnnbBBjeckUSXDu8e5cz4HGR9Ws8u6gkq15Cg4B2gUqJMs24Hpr3YWWnibDG",
  "key19": "4LADsqubwA9DnVYqf12Jb34Ei5o9oj2RrAuJ6ZBhcoKzzxnrK8XG8wf94APRRCrwaf7A4ytSD11tnndkM6DiReFa",
  "key20": "2H5ffgtq3kWnNZrVSfjfczFiMiNRPpYjxPTiVTKz7tkk9hdMoKvqG2RqB5FR5A3iGNUVmnwbvMwoxHRiqwrJye6g",
  "key21": "46A6VZeBqpP44bUTu3Tep7EKDVWt57qR8ZKSWqQrwzmKsHCRvKEYghe6kTzaBRSmNwaH4fuSrGDTuDB2MCaaccRm",
  "key22": "77g2ZbsKHjvcVAaeuymayqCRyVZ6GEHeRkbQciJhuvCPzoRdsHQN5BHjG9LmTajp4eTUhfvvEYxeYnaQoQLMPK3",
  "key23": "P6fXNWuFJXeepffJ5DPS9oXHBgBpJwHWefW3DpsrVQo5YBbDtmA5Jc8FCu57MHmutQVCmuTcDBjb7VQsBShwxsz",
  "key24": "2VaAegpUDqbeeH2nLmuQwfXBFU4gFW4ECoWn9Tyy99Q93krNH2cwEqmKc6dWdtAtYFzkeyb7t5XB2Nekr9eDeEmc",
  "key25": "4L9cdgXaqePtJevXcUidVdiy4Qu5G3vsiBoJ8zhoez1SgC9iJYVk2tfLJQoRyR6JqpJq2e6bnV5sxvKJ2ZLiFA7X",
  "key26": "5RK2kQ2k7QRTZir8we8gzPohst3X2eDZggpQGhSjWsD6Bp5SWSE4UMx6wJfM76QDYkFiwM8otF5bTKFPXqBowqS2"
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
