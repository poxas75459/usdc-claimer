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
    "41XkWFgshzrG2krLoeAGkUVu23Z82WqKAPJHUaHWE8Xq4nBVauTyjp6bTchahBjhAbTpknfSX7gfJBv8pNrQEez6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gzpB5B5vmVbTxwdJorPwPSMrdrRTRWz9kN1qVYtSvgP6X8VdRMx1VMpsRM1fijxcFjAumA9acgHbyZ8DAqquAbB",
  "key1": "3mvzTEHUdQDh5NJWnurVwYyDvhJqRZ9JJoV2KGqs7HimiYTZES62tsR991iQWewiVALhDrGeDuqLTxM8NDhUZVnd",
  "key2": "22h8U8VR9jbEmB8kGXWxvTqHapbVzCtZaMucCMQLBudFzyGrBFyvQMS1Rp3E8nkfFcfaAfGAWR4JNuz4HD1jYXQZ",
  "key3": "4aiGQwQ3WfcE2s2knjd9daH3ap79UMrb4F4vKD1Zpu2DQSNGG1uzGe3CdwozE3pz5PftFFTte69dALUjx7suwgQw",
  "key4": "4k6AMcUAiU6H6vVTSk4gmt8w5iGfsJ8w3AEUaVZ6sP9fLPHkveUAXrZKzkCDg1YCsqMSsBBg65rDqPc4g2V2sdet",
  "key5": "2S6faqdsztpKzkpXJWJC3USzrMePkDnXbGgCURa4tTgLBsfUkJmkMpybuS3ePddVANwQ9AFSCkbAGfLRCoQnJAxL",
  "key6": "4sS5Q1LsWEjw17cp88CKLxdCAnCEhbVjLCQ5UphB1nL3LF6XH3Jb1mptLZFxYLXLwSo2xJUtKJbr4j9UqgGXf4Eg",
  "key7": "BLA9tkZ11xo9FupfgFSCwbXt5rnU35e6jZuqjGLS9ceAR7TmBHf7n4njCB16QcVvfmTn7GFKLsLcygnyX9FBkVM",
  "key8": "4tDB4H8U8ZPoAaqytKDxPdGR7etQfu985XuzRTAEVjQr8shuruy1z3mXNTZVv4b354JwnETeMGs1VaphnKfa13LX",
  "key9": "42KBXySGo3cHHakKLm4acF7jjoxaaJiRXinB34Urr6pTnbqagFEE85orVTt1oS9krVSzrAtNWz6HRTnSKcsk9iJP",
  "key10": "1PDMYYJVn1zBGkpp7aTfRF786gkL5urN7WcZdUWiPzX4FbuypR55nUrjPWQftJfbDaTHmpSGBNYB7ar5aQALGtX",
  "key11": "3fnKVE2WxUGfXsRpPwhLp3PPqXHxWnGUdctDfSqhKSUEsB537svbZPsDs4Ao3LTaa9zQcsZeGLi1Wn2CnH7QRLkh",
  "key12": "48vMY29tZJtPYEkwMt6uXJjawcSWtjqu2EVdDv3XgN5sEmHiCKAcrT67FNfyxhy2WddcuBrvajrQbBC6Ndn5no3J",
  "key13": "5cPg7h9xq3x1RQfK87xsiTYm3dmM57uu92uc4uRuuhFuf26VvTFhRAgGNu2vizYxJPapfJoHxGjFVBkoR9S4Pobi",
  "key14": "429HfoRoUGXMJs5FyGuSRjLeHwwmPCqQYeUgT5WbP75TnmVYNhJqoUAZAjKFhRK1Vh8piw3ThtcEio5kEfijXtdB",
  "key15": "5ak1p4wdChPBGptNyLaJuqgtgGyq1MA7aKozcxhKhYvUiEo4jgmgjb3gq3XXn5Qj7AvcdjM1TutzcpLCtzjrywj9",
  "key16": "5Zx9cwm5LJS4NAgqzwbSK1gDXA23HhqaoXWBCWwfwZfVUDygj9nAq1f3fRAWUjoNFejtfDwbs9bhVjFQXUkHVKa6",
  "key17": "4Gzz21gfc3x71kX2gHuRFcHRKBeXfJeBy7wpCCZwb2XPEFzMULFGt3uscbW5KMtDxypHLHm87MycoeFGBRPm9PCZ",
  "key18": "2Fj7uemD4fCkTdr9dJ3ebZDVGac6wT4CXpkAWSt6nSfCpeQ8rU1B4TJcya3p8833h7iMCqEAdB6xSaiPLg5FtDg6",
  "key19": "R9696teVS2xVg8jeTnJEgKoyvCuDrdEFBzAop6GRAL77xdPorDvpvAsA1xTqvtRYFDc3ASmDAuD3ThqdizzbSYy",
  "key20": "LgGGzRrUMaTNwwRMATTaZiFjHCutG5THhzSximFLeJLTQPhyyNnVh3SBZNT9uDCL6W2BXqU8tUnQtQCCGbLJk3w",
  "key21": "38VGcsQbdTyT7PiwNU3oFXAsin1bzKoULEVaqhs3giAEBMeidbHn3wzEdNurt4vfWhi6c9Z11XoeWJpqf6Pn25rC",
  "key22": "3cSscTAqWbB3PvWXHC6zchFcE8kA45TRG1eTMqicTcQXoXJpWjRpb83qs9Q8gEEBYWtkrzcyztWrBGtZrnzvANCu",
  "key23": "ecEgF1MCenPYNYULfCFGhP5k3Rf3GU594FYTjfPcDY5RzPeHacKbHeWbxH8XruFwnPaxkwwvQieRrYsubwKaZaq",
  "key24": "4PWnFBGbWSsyiuUJakJfwbZ5bX6ssJ9rFDWttEgwiriYHap7CtgbMKjp9dhh5jDRNqMcZPsHn5xFNrs7exgiCMok",
  "key25": "2aE6qKtwUzRJuaP81C38SXBAVbcHEfHKweJ423oxP2NHsU8DeRsiLJbJL3FvSCQNUjvxjmLBHMAmnkieKc7y8b9h"
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
