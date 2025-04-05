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
    "2yVkLaSdWnu89gPoq5L3sDZFuYtXFwxwTxYFrw8PRdN5M3KfCQmDMzTdTxNk8opeQPjiyxDxxp4skG5usGoqCme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZLBK53RZzujBKtTRWKyryuPfjPgQpR91hwoRRNpZ3xhyB3cGWJmcGp8Sbx6VoWZV1bgB8w4rpVqunNwZDU3gwn2",
  "key1": "5CEJHfbZaNQ98MHK5X1b6wqtXKuSaLSADhfTS65YHdTjdBZe7xUZG5kFkpKgu9FsfnvCPU69qVPkqBan27TCgaJB",
  "key2": "2QHz7bFPRAMyomG728orpr5xmofJP75dNpWKDgZRixqLMo4F8xh4CFgABoXU6GGnkDnjRjFTCDEeBLpWycCdLb5H",
  "key3": "5HBB32HeUBmEVVy9iLG3KoBh6jtJByKYhg9S8XB4t3uN8quUJfYdy1wXt8wi5ibd9vEzB17dP2ripFsFSh2yfjGm",
  "key4": "4V4J4NjLkfZvWER7AhKzNEyH1Msghb4CtuMvwjurbXkGdD4rRGFnPWMPjbhZmVURa6HX7PrXaRoiChpkHQ36tEdS",
  "key5": "3xjJuyapAHmBqLeU4hGrEJknWLPR5UsWhSK7YLvmg6pV8f7FinkgTzNXnkf98MKho6WxNwWH7ncru8NtmEzbXZ9B",
  "key6": "4H8kF6aJNXSJtPQyAcd5xw21m5veix1QLCHoXwKYpLiMwWHVErkPX8V6of5qJRYtpLTXxeiDsUpfXJt5RVPSkNoh",
  "key7": "3MxnbGui9GLB2FYMduFd3b4PSHvjyzJc8ZoHQQF1qTwXwUX9vb61HE7sx2ao3DYdrkPGViqwgMMW9ZNehA93K4Ci",
  "key8": "5yuNDi8P8v6jMAMYEqPndsFMaQjwBAqtgG3SxYB6sBTFAuxbMYtNyuMTuLgjn2QhcCtMeH2aY1guLBc9LR6dRiHs",
  "key9": "2oLfM8gCATnDQLBQmEa1bXEx1iKFs7Wjf3weWGYEczkuiSW6gTvk4TcZGkeG8JCyXNriSPToXa8LP4vQ4GFFhiKH",
  "key10": "5kaeWBbPZity3rRtkAJjKokDSxfLQGPN9xMsx7ZxkSztS4oSiRGPSVQoZ2dqzHj6SLguCcuw19ns19eqntE9pSiN",
  "key11": "fcAChetjpaF8BWFVgJH5xaotibAnLJMfcDTTr8Kfo81L7x4qEzL3DnS4fP8AZES97Gi5JMV2Aa7P25bPXzx3pbV",
  "key12": "2BKNCuGwCFNqSPzBPEmD4eLpmWD2CJKF7bgUBnCW67Mt4JmxGPfaQByuobpth3xTSBrDsnU4NiNr6M4DJExW3CZq",
  "key13": "5VaRsPsJsL3rB4Mw1sptiFFrLYZnsvGZa36k8GasUrPMzPfUaf6mjPqJpr8GurbbmYfdXNqsnrwfvSVJFwTY1sJY",
  "key14": "qq216PvXGFRu2jbMNgKZ9CQyKpm9teJRrppUmEFGNEWGdS5LryKJf6z2yw6vck492rG9f4WV66VTJHg7ZGALpH5",
  "key15": "5PAj3fAzNgY9H4Pf32WeLdEjEA3PgxCnjVMFq7PJwzVixNUAGdN6TZbEAUUEQX4GF8kEidB6fxyouMcDXpCV5t5B",
  "key16": "54hPwU7vQU8iNBhMvahttBTrrY4wJ4GyXumkbYdnSxGZjJnKfbqWHWNBtsLfKM7sBkrM25JNBQ3trzeidD44CrqN",
  "key17": "4UARJCYrZQ8D6oHmsdGkcvrsqmQXfT4PWmqSoba1q8nnXS59dtdoDYFhtgLzHCRtB3wFVx126g7pGTgsxtA27zPV",
  "key18": "4oPUQ3GurwZhpGVaEDPwx95wkjq1q4ktJNWHN5ohKD28rTfbeEoAcE5Kf6prvtNxPiamXi897wquptmxX8Bm4XN1",
  "key19": "5xazbnfcfAmWmg2wL8ZJzWz759TyqSGiWCfismAtDjdrHcMJ6APzvH1WhpDG4xEcxcLhZaWpM1UT5SEwkTPkMfHM",
  "key20": "2AutEtMf8Mq2vG25TEnvzVwbLzuXTBSgfr5XvnYzhT4cvYBznjHvhr4Zr8ikSgMN241RtEBufgbmehYfsB2jsi9y",
  "key21": "N7GS8AWENZGAuzyitaYbmKztsvTMMB87545ThiSiTeK2z5wKafJ2FZBrzJU648LhqkEEUshniA6u2CwVUcnZMsj",
  "key22": "3tRi7cKGdUbaPFMqAdzTHYJ28ziZTFcMPmfzD5vrgtxAxYJEcd3sHkSc2UUxtC2GjPyQMHCFNhhKGVAAF27jDFbi",
  "key23": "2QoFjjrSTNb6W9xM43KYmPKj3XzQMWwd45pRYdFsqxF62QvCZBe7ESPZUf9edc9rmQD9PS5gcrn2FF1KKM8cgFqb",
  "key24": "797AjABNjeZdz9jy8cSsWmYsgxHiWWztxiPmDreTgnGhEb7UxTrEGVstp9oGNyJcuSSbXMpPf3EDY73hgXf7CV6",
  "key25": "2DRj4zpGF3J2BaKoTgbRYg7SXXfcXKxDvoRQsdfvNZJf8oM6YJvzPar87qPEUPjbZWcnTbCHMfeTDYpHXZpEpLfT"
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
