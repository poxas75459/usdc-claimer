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
    "1vxYBeokcLd4tVf3vT1B5i4XmLGi6N4wjm9ZFFhZ8QMfDrcmjPF9Y7oRZQi9V2rCbmcRiKaC9NPw5fEtow3qHET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hgtxJv5XmZZGjjFuJhec1Qo4TmuFxcciyxiSG4y9DLBXB1y4Zi4tmjcoVF8U7nMDMpAVJ8hsFBWuzdiroNPpLZm",
  "key1": "4zfVhXXXNpnZkPznqHXkHFo6SoQ2Du6YVCrBdvZH5iyMTGNn4ZbHJyKTj1Mu8oqGs1kPBvutG6Vojku4doRRwx4Z",
  "key2": "4X2N9mkXQsRNznWky3ZKdkcukUmtmdNG2776EeTKMhHsQSGeM66tTinVnd3zwQP4ScWr5sdo9MmQnweDZBWennX4",
  "key3": "21Hycz2mshxxVQcmyEwXwm9tFD8f1RTrpiqsLjRatUva4XKTrvs2LSWN97JFYeJR8K8fkJz6V4n53LcGwrZHSDQR",
  "key4": "2vJaHYnJTo4mPDsi2qRuHexN4uyXQjTFnVTnnPrfMbyCBJxt2rG3z5aYJAuvFvvWjs8YPJndfFXAUWGcTGHQ3wJ4",
  "key5": "5Wa8dN8qWbQuuRen5YCX8YdnTkanc9QMoTJMJ48Uq3mZkKMe75hKZAjbY2aAYRxDrse5mfMXtD7bY6DYsaurN1Np",
  "key6": "2WNy5n4mp7D3j3XpfuyDZZce1q5ELWs9Va1LyHvvMCTxbPmMeeHK6rbhvTFpnxp2YfP9SoWvNtt8pMBZ6BS86LoL",
  "key7": "2JkYa7b6dfDDoku3sM6Ca7aRwULsX7LX5sXEeSbBqoUhAeZhboQkLtggpHMqPttLwJbTQ5NhCBsg7sJk9ouCh3ad",
  "key8": "542gx3rW9264ijyh1HTtiUEfdBgqgh9AUySNz89WReoCPLHyM7vipgNs8fjcmQZ9yNvknueBcAfXuwaHYkdEB7CB",
  "key9": "WmYqjAzDSMogS4s2goRCWG9ke9RCr6WgyKGsfRLtfMupWKhztrvXdR4H1X4NXNA3dDc2bujYM3fqmZhFHtViXx6",
  "key10": "2VHY9TsoyGKdRB7GarDWddxaVHzznv8wogVgsam25oJL31Uv539i7PTivoUWBez6YC4H2q9rzHHpp45dhC9Pw4P9",
  "key11": "4Srsomb67uNE8JRZDY8T1mLWA7mF7TvzdeRqka5ESE6iQke7ngPnApBsGnqDbttgmC3P5eEJFvHmM8k9QxRuwtvW",
  "key12": "2EcPVgW4FMcbNRRuz6poywiuG84iA3mDgtQ3dJyHQRWycoyV9pT5iDzz9iiwg9wHr3nwsKKJ53aUQCpUdL4NwTtm",
  "key13": "5haMP7DdKsq7ERkMWTsNvR5ozmCvd6Lzp3M9akBfctWpu77sFNQ67zh5HwBHk5FPy4JfSz6FXrrTechAGTDwgPYQ",
  "key14": "XpLr2MCzW2EYDxTDWBZkbrDd9oNjK1skMPRPWF7GDnBaB8AgHB553m48yq186Tw5VtwSx7UxatkRJRPiQhaqao4",
  "key15": "218QF9bDsrcthV7TkZTpJZFKiE9iARrdffpmdtBJgSL95pExkpu1rtMx4LBTTVRyXhQDULH4DsjcddnPHvUjN1as",
  "key16": "3P5hLq6WsdU8EutVzyrwGZvPKDS41Au49H4Wzu4rzEi64FBFCd7pqhi1pPaFG4w3LWuEyoKDmGeVk3N5yifQniRb",
  "key17": "3RrijvCSkgdoGBXSMK2xMBqCic3hPdQX9CKSdh4ogfL6CzVVMVyESsHV71pouCuSozvoToFiUT8BrvFvL7aSiBDY",
  "key18": "2AeMWrYBbHxCb5MzhE6pgyMppA4xb2E38tzii8pBPdT2QZG4eUgmniSLiy6WwUeCRxbvPnL25XoE9kBhJ65GJ3GQ",
  "key19": "5p7QeiJq2FebAAsCUHmmrXUi9p1FQQWvkkY4B4qaafV459E1PVj5fiyrV8heKSEpWJMav4WtbSS8K2ii6RweQyJm",
  "key20": "Gfy6iC8XrdhUp5KBpnRQQJ12WSJT6aH6W4GRy4ee1JPFykMN5n3DCtBUUfrzJnJ39FWriKAxFmaZbBmzN8PAx7r",
  "key21": "5D2Tqe7Ty4RUkEsfEtuPMPPGCrwrryA7S1uzXrxPS5FBR77AxKKcnY8nhfp5971mgZ4BwAUNkqTzZSjiCkzCCjm4",
  "key22": "MA1PsutMBCcxvgbfRca3kwaFhkMntGhzZdspTuYycHwA9YWA37JWLuhesy3bty1CDLuYYMe7RJima8r81KJVG1h",
  "key23": "4ye5qAT3MANJywsJ4o11tTESFTpCrv2p8gH3TJbew5f5aKksGYqFqb1w45htajvkFCCorZEgf8cwbai7ShhhC8fu",
  "key24": "5uPCS43n8Kkzm5tcm2tXfkSqpzJtQvV75XmqYUGwqLkcgRc6Cqd4FeKXrMme2cVXGY1i1ypob5PR3DNKLBj1Fj2K",
  "key25": "7eTtLHrWJ8nrhJfjTU4mAE6uUDcXXmmYkVwC3hYwSLWGVXC8CuCwest8TVCW64uazxz9pBND4NL2S6LxFMNaRby",
  "key26": "LwPUWud36vFe5bA7z3ut4uUZg9BFFLcX8Zdgeb61ugKKyTgkWKKmiQvPBsicawCQE8oaUbKpmeE7HJrj9FEgvKj",
  "key27": "4Vg2oRy3pKdX33sfuFRmgnRXvfbm9gKMqfEZnYhnrvrR8c5hunorpn1XcW5wc7ejVNSSvmmTLTV91Cg6eMqeRWCd",
  "key28": "dLaBQnSUKccDbggqcZ1XPBhPeJ9pCeMj7djtNNTU12nVNRuk7U7pXA6qYjBJvUxGXzrwcmtTFA645jsx9uimdEV"
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
