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
    "5SevpWEYBRvo1t8LEfi9xKtBdSnoLm26KXoEAcbxVcfQjVeigE4QjP5pTWr4fvfcC1htbRqsuaUb27gAgoCnK46d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vdwNZ2kHoZ7zFpzWGkGxs5QEXqbvN1LHqMDzE6sreFk1LadH5zLGXUo5aNni8gqhMbam5aJtSG3snHHo1pgN4T3",
  "key1": "4iDNrD7ELxqhNU5ewEcBENscoD9ooeu2Yeokbc3eVamf9VN54v5CaEna9sXJsYmpxWAwAkE6hpGJQaE3AYtpW4TS",
  "key2": "2uUdkopsmuATAnKCzA3kUpavamsJUsS5s5WCwq5raN5u3J5XxsJ12sjyM7ZjFrkGFT9VyeN85h5ut8MuJj1WPxzk",
  "key3": "b7ZSpZ6nGUZU6d8K26KJYSMdVtZJjX8ytbsbF69W3z9buThuBP8jxm6ECjkNYDQBfc3cJsvWoxouPvYyFNUizc6",
  "key4": "5SMvA1rJY2JJAfZLTHPuNB2gW4Ad9G6ojV2kuLHZCCRGxSZxjRddNDGfaXMdHJf1LZtt5nb2zai8H1i9nA13fNFt",
  "key5": "25ErfMUGMBpAqEMSzGSTBQtptsDpBVSRnLnwjhAYeNM5Y3ob2E6wem75Zxrycgm6hUqKu2iEbytX3w23PKESYnRU",
  "key6": "2DqYvarVKtYVbRTnnQT4SWWz8YJ7zBMksoAy8MjcDYa9b3jFQ9xZzu1nGb2mAYMc9CJJZKW5wE7HWCf7i6a4Toqh",
  "key7": "24StBhqrd7UZp5T9SYvBmGhD3Wdg2izkiN96kR5CpZD2n7eXpfkPjGHdJJaGguYBdMkwKnDVumNfyjHUdSABAJWh",
  "key8": "44H6HJXALQe8EEjKxsmGTqW1ZdX67VarLxVvitKFm9MLeqfoE4BbWAQN41HDx8pLCCrgCCGU4VCXmJtLd6PCYyAk",
  "key9": "4ckEdTmbps5tLJUGreGhiDfxT4BHvMy2pseHyfLfq5zHREsJTKJWmZDLFYNbw62PdGsPKD5rb5CeTrA6LjpRhxhE",
  "key10": "29EXCNBTNdXgtZgG9ctjQuKtZQ1xFVCR9e4rtAfTbub49XHSzz64bNxMxwhQjbfYJkkRGHrgzmk6tmCGS4GCxzvx",
  "key11": "2qZz1osFRag3X1TPPBeTBr6PP9FzZ3me4NHH73YoNP8otXB3VnKCSkpuHiqAh2EDJc5iezCqgmZk3v3unqvRn82y",
  "key12": "5REBcg3HFxewzwSvbAatwdLNAopG2NFzCfr94hqiNVBHhsCCxd5yErp3fnUmVsZ6uWJkBAsNKEHbHevfrrLNbRxj",
  "key13": "5KV5oZjzVYC65HbYuoUgfqSQkv83nh7Jvuh7vwdcczx93dAyc9UndXJBvGzNj6pEjLm3EEte93CMxVcygB6RameZ",
  "key14": "2Ct7ZbV4SFdK6rFUCup5bnMyWtNVwMFYCMuheydezEs3S8gxQXssdzDFVdp9PeUbgRK15T88Mhas9Xkm5LjDcHwz",
  "key15": "4QM1aBav9ysmTwyCxqLcUtmSAJ8eFUPYyRTcTxPNb5RVGMnwEmKb3eAhJMuEBatGPNrsfADfNa8qngpffZtokMkW",
  "key16": "4djLeQutZvbtkm1wf1j6y7LwLakGzAoDBAhq68vSieRcBWsf4y9x6QZumAT6S2hQnyiugCe2C4nTV2fxxkkSJRww",
  "key17": "5xxaqgTToPBJ1cMNPurWppT6KwPmMkJuW71F2FJ28mjCc1b49uckY1auMak9FUDARXaL1WgBh6uGfaJ4uocUuppd",
  "key18": "65vh6Lq3Kbzek7yFTxT4pCtRCMD9rMAvkTZ3WbrUD6vjWRBA8fBKmteUEHN7pCdsXhUrwj5SjBbcYFk1bM61TqHa",
  "key19": "5Fy9i1nWCxiyFWsNcKH7wnDCuuKVDfkGU52mgs8JWL8dRZxvVivxCtVPoGudLkmUVSjoXUgkfVMdoxRZoGu2iKzp",
  "key20": "r22Dmr9hm2fNah5fgEXMvffzMQqMcWtKh5MBjbpCz1EGZrTUaw9ZGtGwdDV7Rx26BzTW1fqsFgyhmmVkSa2dLMu",
  "key21": "5EzdERKpVANUazKcbfqnSRF9bwhw2FsAhSeVdChBJpD8eY4XWVumro4BUxxu4r5yDFzPJRDWYqEsPHGFYAdFsZVT",
  "key22": "KxPoYC5WE1mKejmDWLY3y1LVtUUN5XEH4vwUGvgsqE7fAVQDoTSrC8FXRDqfNBKdNXcvwwmAWUw6i2Wy6eFKSF4",
  "key23": "3f3kQn6YYWo6NDcAwWjaxLDsxUgTzpVdEUtaAWX5RZzh4SMfvL8UfGYZwPuQaE5fMtdUYJxHB2roLPY29QVncs3Q",
  "key24": "56GZmDzKj9FnQ7mio9X7zZ7dQsWrYboA9JZhgBDrmYjBFCsT2sHnytTjQV7NgRxT33WnfE9TyPPug2rXgSzUbL5G",
  "key25": "4xDNsRYTLaEYPUg3jgbeQnF6zwqLcFHdvswMPabKbE4j5dotfyLoUKVzznzEV5Hnyd1sWJeJxtBJbxpTbDeBEa4d",
  "key26": "w1QBjGbktdQNtLtPPErb116L2zJcfji6ZcQTKyWCveWmrRdpaPxCskKwc4kscqXJGf193huZrXbo54JyXWtpzk6"
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
