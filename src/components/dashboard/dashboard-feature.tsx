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
    "2CL88Kuko2e3HNLDXoVVxu5av6ah5UsNZfmD7djKAhKXyS17LgBboCaNdoLufbNDZ2RFYA2GxayJvhAj5apMpJuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wf3b2RGFohKyZc1TQBM51Pyi3ZzAm13P7Ri2DvoZCqZoG5fURUmfToRprLA4XgdBEsV5iTw8yYnoN2CJ1NwarS4",
  "key1": "5Ayt5b5AmFSNSWQRHcPVoi6TvJ9f8a8YobvFYvKEFANyoV6HYBpBAguvZet1Wu7yVXQn226F1gsxzQuyp2ejtmPJ",
  "key2": "3J3mn4qTaSyVuDmFY3LBMyw4cKMHBda3HUpHmQoAGfwVSdS7vGUbXJ93Vy8CGM7Sx7r7weXMr4UaZSHPW66NjXr7",
  "key3": "2HirkX78dm6so7AfZjGc277C7Vp1phFzLzRKssLu9xbJ9q8efCg4MTa29u6nJAqwC8Rqh9yDVCsaREFxBnQaH9kg",
  "key4": "2qEYX58KWrvketSqfgp7JeTbtWCJWYuFnFhGJrWrLnmCjqeNADTdj6KU7vEipAzuWyENwUXiXLVsG4p4PahvYqKp",
  "key5": "2KgKJVJccES76tvohugXNA6gcptayMf5M1uoiwrWacmHbZJyRQcExhHR4oU1yWE7tMtm5oU67NYPoZdavzUhJx6R",
  "key6": "4PLvy6xLWd6VPnFYePAacWtjaW7kz2t5X9tp7xSWckedq3QvrUgyBjtWRUPras2EhQDVFw6wbbUUiuPhv1DQm3Ac",
  "key7": "4B9NDbq1KwFNtWfYBoszhhFGte4K4vjQCFPmNDhEQKpLMXPuPbXbSbWLiWncgJmE2fi8y95QKon63Mc4aKyKBD3j",
  "key8": "5Tgf7xPfN79fWi5dSaLR5n3qhpfeknmEjtkm3yo38LtpAswDAuFSbaTpkXEnyi6DktUVN6WtoQ3XPE3F2VBC4AVr",
  "key9": "3Rz9HdBMsK5YpAQTH7GQeySvEuMs5Hj1HHmZnMPdj94dVQShiwm5X7KuqmYXfSN71spRNmLPUBYdPFi4WgSVBZMq",
  "key10": "3QnT3XhanyXgpofoCaTayuzqF22pqY57HejFv36CMTzeXGync4YQrf9hNAvqdVywG3w53j1hHSCvG1EdNB1wxrHj",
  "key11": "4DuTA8gKP2SyrX5PCVA88wvh8msHRZe4WjWxczC5kiNjbeXuwRS9cgXuS16X146xYPRNF1Mhd7CSPuUDvNd2de8G",
  "key12": "3n2WAJmADxmHfyKdSxMbAVuNxHQdo6yEDWjJmdjjdpos5uMzBPG4KX3y8hyFRUAzcVfQVkomiE8AsKs1kSvPeWwZ",
  "key13": "2HHw4yMeUJcf9wAaw8QJ8PLraZr5v8MqPUCCrmtmgr9pzUr7BX4ayr4hqW3PHbRrnSegmr6DTwh3DSrmEWAPTvsv",
  "key14": "2cyuvodKdtQc4AKm7SqVy2Xi6JXdSH16i5AzystoThfdHWH5XCtFzfWMk8RUm8hLfzaQLpiz4uKPPLzwChLDsMzU",
  "key15": "5vkDBMs3aDrPuKsgAkbyccucGBxTFQ4ixtbCYnooNXa8Ja3YfVobfeoBu8vEV2Lf97f5SsGLTtAyCYWmBhEgvCHr",
  "key16": "26DKKYt2izVxcn35bFgx1LFpW1CfXPJdwNxfj5tZ2Bp3oyV5YTvawHkXjRrXtrBN9WGJAdd6hBhnvdx94MRA4BdW",
  "key17": "siTWre6ihbzYrDdtNXiNuSgh4cbqyhagCu83PPNY6ZD4AKT2wibZmMGTNe7fiu1fNATNTF4aG1RK7jScNWTtpkp",
  "key18": "5dyytk1MZGnqCkKNXBwcxGhW2Ci3UMDknUfyaxSk2hVVUnZQftZf3pqDtEAHbaNFsf4Pvbs1RGDWxZ22XYNVBpr",
  "key19": "3udLbV2CV757x7vPGaZkbtqvN3veZTJgUhs8fWbtRCPmydcDNtQEsMqY9WKyzLpKbz82JQkEq7gKFQ7Kj4qyw4zZ",
  "key20": "5Mth9c4xRFCcpwspq9VVRioaxpdk6exBRbTMYswREDAEhwB5DvSUvuLpeSmomVWKmoMQGiZ9ocT3jrVUVGQVJpYA",
  "key21": "54dWGbz4K7qkq4b1pZQeRFm6RPSZL9TDidJud9u7sGD1o475hLSCKFVXRRCBgLFZ2WkpZsYfZ2Mm4ZmHWEWTpgwm",
  "key22": "4NRAzuuqwN2LvAu84TDoEh2YNG5ZcgB7oxPM6cJJGXCEHH9eXzCnmJNjmKZGEzoXVPruqX4UUF2vginMV9tjsWR9",
  "key23": "2tQ531Lr275rh3pW2Yx6KEDTA9VxqkfNyjdh8b9q1fKT4ux12RJexuLgGxyT4ra3d5PqwU5dS1TUfnCb14WxCep",
  "key24": "k6Uwd3cHNeDE416SUCnkK1mJBYhqdbvMcEuu3QhMTkvUt5R911wsRHTFrairCD9HjVQJZJQGkYtGajkub6s5dwt"
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
