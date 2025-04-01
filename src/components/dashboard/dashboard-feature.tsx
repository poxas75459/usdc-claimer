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
    "2ch3vbZgoyaTt3SwHjUVzVqamPZabrXp18BTQM8NqJ2QEnmz6EajpZgw3QE9atYxmhmZ8zW7JVMoJW6SATTdiV3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rxMfJvaoQidGwobKKfqgfvT1VySA5mJg1neVJ6KTwy6LgNVcPMScqoSwPApzbva6LvSL26RDA4XCmV4jybu48H9",
  "key1": "2tfVjMMcbGWkpzJxKh8wtwckyW2kGkve8ejkbxFVJJm5Sq7bgobZ8QydBtgNDYB3xfhQTEAqtGf4wKA5eHC1uMRN",
  "key2": "4E75zWwEB7N1nrbfY6kT28Mhp11msuM1AhPNxp9NNZogW2RvR81SPpWZJNLidw6mvoJDSKW7jH19XEWre2WfJKYR",
  "key3": "3whVuqeXcDbEqyJoaaBFQT1JASAbyxCtyGFzReLMjTdHmC6ySgSCfg47s981j2mHcKRpTzYeGb4nrRT3nD5MLUhs",
  "key4": "52CgWLnUqRKBMcrtKWb8oLCze66qZtmQASq2ZERjN7be9cLESL9GHwt2sNKtg4NiWBZp4sCNhLG3NxQQZv7vAodi",
  "key5": "5hkiXozZieWiZ5d4zo6mPQPzmbNpdegrA7GA4doi4tCZYpXzayuZMFQPhXusbNrAzLcH5GyUxthQWDxpZFicRAiJ",
  "key6": "4iGdnJNYCty6v92mcFHsGfbD9dFrVagvEPNnwY8moqvDzae2c3x8Eiaymv5VoqEukSYras55wX8mQi8di8vNrwTT",
  "key7": "26C8uQMdxCz8yomoZRBrqxA4puzVyf5RFGGBPjo7APWavL48Qi8pqM79AfKfxg316Jwkq7kRGp1i9v1LVgnz1L82",
  "key8": "3zqh6Tu7ibYC6ZG3Au74FVe7qbPUBQxDN9bG8cEEEjyBeUZPRf3sLkHudRQrsitmZPT36Y6ZtXNiCymfSRydKozg",
  "key9": "4jFB1w91C4AwLXJ3MjPFfGU7L7tUF17hFm7Pes2N4keEDb65Fn5DAbTjgCCirxbUrf6iTEZ5d2HncbnALwCoJ6r8",
  "key10": "2cfFw19SucRWxESDEfW4GLRbwgd1HjHNyS2gc7GGNFu8equp4bkyY9j66rdQgNmiYzuikXLCR9npfjrFV5ztpn3d",
  "key11": "5i9d9LkHQhx18Kd6arKEaA3Y5F58WqMGTrCtDxUX6wK28Xj8cCoYuAJVftNF566U3bExrsBYXvBegoGq5rfNdFL9",
  "key12": "2nCYJfKYKtAPNUfXRrbdz6R43PeMyG9PBURGUtTk8Rduxc7ggGZ3Dio9djMLZqHfGN1TdVr6USDZ9aTpdMrf3jFb",
  "key13": "36E8GKXgCEoC3zNMaFssPUoazD5MRv3o1vcEUViCr5nFxA7zVPaoZ2pGFBV9trBNBD9A7MYQmWwcrPEVk9m6xSDr",
  "key14": "dZK8H9iwndPDtpkHwN5VKj5AtDApDEFJvx9Eamt3RQz3nzcViMyatb8UoPh2FdLgSJcjoZDpLedSPB7ttsGPha8",
  "key15": "4xrYEiyF773juFkzvE8yNYrYZgQj7F7PMnSaKqvKNoWdgCtUXHCTJQAsXGRHjnM6B9wE218zXwmbHTSgddJBP1c7",
  "key16": "2RiGcesKqtUSMug8CdxRyR8N8T45EAhmZkdEsGkut6Q8d8ByxyQGs57VGu5nntYSDPAL5FsuviwHSCKZLnnTffd1",
  "key17": "3DSkNYjfRnHqvzZTkxY99V6VHYtbSuTTT17pn9yVS2p1G5gZBxmXchAirP7bZ1o15hAXPx7CqhXPjr1AoAtbjpd7",
  "key18": "5ssJHPph2fHah7RoiZmA6pvzue3DATfccqxKFeeEykZqX9QqPQd1TVp6K1HGgiqeS6YSDJHFxztohC9HZ7xJvUNY",
  "key19": "4Lf8CDHVQuCo1pGmFseG4n9NS11hoxnbDr1BAS54JggJhoSLVyuUVaN3KAvitQhzDoEEgMLc6nrx4CXb2RYfdk7d",
  "key20": "4EdnqTyDm4RjAEU21zpxb6mVgsjpN21VqwDzseGqvVmb11S2WA9YwKrGmtwrHVPwhKrhJFrXUFbJYGx7gLaWWqK6",
  "key21": "2opvLJES4ofPJySFoCD3XuS6DyzXVwBnnudUNuuTYZnkWJYK2t34BLH54ocwYBKAZ13bLXkMiX14CepDUXLqFRn5",
  "key22": "5pBb6igLURroaAcY9tdLyKsP2HKE1ikDoH3o5fE8fHyRj6N1DHw9TaVeUze3k1BKwc6AHf9JWSMqrX5XZ5SkvYrQ",
  "key23": "5MceyT7gTarPfBM1CXcVtUW4q32sZJFqHYUKyRj3hm5MZAC6CnG1QUAqhdd3eQatxp6dibGAbmo71WBbtk4dZ2EU",
  "key24": "2Knjkatrz3eX1YJFQcgCm9Q3vbbs7Tn6qP7Y7DUKmXP8231MshT2mPMCwQRQyMEV5GZcb1Ug4ohSMt3CCqUz14Y",
  "key25": "2jrdQyDWaAkL6DKehYo9rHDPc1CA8YPurwuZbWL9Fyd9TJJd4Bcz4pv9uZ5U2t8VnTNpGrWfeKdMRdneQS6cnTLi"
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
