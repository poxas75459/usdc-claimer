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
    "2pbHK8T1hqAFDUNZqTzb44NNeiqw956R7Bp9swg6JdpCk82toZbiapbBCcBSwobHLyASKW1JqnfnjBziRkEq5nQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CKh7uVmHmq4Hg8y6oE2DsmjnQvZ7ZHrGTzFmF2usK57KSPX1RnaBgu5oGgPdGJ15QdHynwwb6eQ27NM3Pvmz34o",
  "key1": "5aW8WuUB6U8eT1zBPNckW5AGxbtWDb6G9gNaa78WH73CK4CdWsGq5Hf5KzFVgUq4FK1KFbdzFUQXHEK3i3JwZZa1",
  "key2": "29SHawRNneHVySejYK14FUAqVUbLjBDZzSMs49BdN7BhPpX71B857bzjDfwcqipWTojqZJnnkdBGNrst1mskoYLU",
  "key3": "w1a5FZqgDDqnJ7yY7UFampt2mpNbcMf5Cs76jHdjrwPGsxSqzhfnrFYVsYFez5QN872BFqy9GxmAu3fd2tZpau6",
  "key4": "4G5y6Z4f5Gz8ETkXkYGZqRYUdfPGczsjtPaBYR4Kk2T6bDUdufN2eSDdq2jzjouddZyx9vZwZhYPWSEtYPkBKrNZ",
  "key5": "5HZLuq5pgTxKYYgM6R89dwX9b3Y6kjP7AXWnwx28RZrx9FBEYGsvgqhJzt4y7AHJReCaMAcSgxW8wTpNpo37zecn",
  "key6": "Wi7d86fMESjUXaoSwhKDuKETVAcx4QWGpRz6dgngJF3RKHQabW5TmwQniQvuDqBAmhJpDpZ3HggpAWFkXAHPkBq",
  "key7": "2xtdEsLaKYH8DeaC2ZSAppChnRpumygn5QUmxEBZqrk1i4FfA7H8ACTpmEp5sEqnhrZQscSnWr2UgtGntyRectDY",
  "key8": "4sQBq4HMvEwy7xs7syNq42XfrF17WmuUnWNMshVrhku1KQATEE3CqR3EjfEX72auhoEwWC6dAoU6JCY4ULzF7wHL",
  "key9": "4wf1axhKJbrAifJcN5uDNR5VEKV6cuEMidb7WdkDUwnYmk3FxosAVkDtsBCVbMwGWw5KtgkjNoT9JvzXzuTEaE6i",
  "key10": "3QpXCz323r2hBeN6VGb138dD4Mew6Pe7RAm4EtWR2qs3PaooT6UWDbgYn7t1WQFBmhcrJT1SbP56v8cJFrspc9Z7",
  "key11": "ixLYcqUsDNoMx2GFCHXu3fmNakFjPkwMvYEumNXFXWxn4fEmCBKkL7tDvpdKyJtH3EibPvCwNd3RVVeTrbHgVQq",
  "key12": "2eYmW6krjcz84AiT58e9nntHJwBUmDXLtbdEkupYxfL8GVZgPnaEXhKDDciFQfGJDVJvMXRKzEZ3Uz4F9AnL8qcw",
  "key13": "2nx8rYz3ABHgHUseq4fXgpA7to2wNtaZiK2QQG3XScGJhEAvVkH6XfniQQqqij7FgutfHVHjPM3wZk9TUT3BTagY",
  "key14": "4jzE1cp1e6NFx9HEdGnn7VAmCSxMpYdZvkJ4JKnNUuCod3UjPLKB5Ri8uBCLMxqAx2frhtDP9wE75rfmmsZu3AeB",
  "key15": "64kc1DAGAqSV9PB2M74yPL1SUEBiLjFswjiCudrsoEPrLJcAzqHJZjoNVqAogEg2jEpx7c3TgzrNTUu96zonWVrX",
  "key16": "4tpXYczozix7AKFcxKiVEEhRwYQCbUmgiiYBCgaaDLdLbQhCirstyC1Ay7ptDVkPyd4GweBGK8YYWyQt5HfJPV3d",
  "key17": "63GXoMF44XucHsHE7zvumsMZRS7LWAAQjnHfBAEqUySUQcm41SAQpbJJY1TSg4X2oKsVmhmAkbwjhBMuwgqj3nzu",
  "key18": "bmdiruhnw19pMBRGkbkHPb9Fft89Qs75aBVDkYvWSKf4mYycgLtSu1GwkUQYotcs6ie4eanrgEmkQThSBztKc7m",
  "key19": "29KKDWu35m7G4Y8Wp678x2rteYmV1Hd69tSdCMipPf7BUmaW7G2GHZmMgiVWivpXb8i7uyPCpE83xMT7iRPvcQE7",
  "key20": "5z7ywAD6pKtSf4ftM6YgtFAKHj3fsYd9HQKuGMayvo7cdZPrtStR6jr8ZELtaSUNfNx3xPigSuatiu7hbyB8a3Ed",
  "key21": "W7iK2dPnGcL5qE1uaxMhnmob7XjqMfYSZybguzumCpGkEfXCq81b4YE9ASyHaL7xtENVAizSyHJSQGxCcg2PVYo",
  "key22": "3Jq8WwGhQTpmw9dThQ2VbkcanCa1s1TbZv84wKLCBLeu5oLrTG7VQJCdpL8E9S7E1vMMFjYTNNVRpfcZ7miNxg17",
  "key23": "2UjHhznwswm93ccfMSEMUzjtVC79agjGjbHwRUyGqAiJpDRw88BMacEg51m5yaCvbu74w1MH7y9FhUMey9wXrWFC",
  "key24": "hZ73jzUvdJzo5sAVZvsJxqaprM5Nu2uePPZV6APvtQw5UhJBgdq8pFiHU1tXxkXa7uk7bBEobKa1iKbWhWUVGgb"
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
