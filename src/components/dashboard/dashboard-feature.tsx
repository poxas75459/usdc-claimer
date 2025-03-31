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
    "26LnAhz5HrUoZZshGEsLUH28tCWCyxH8Br7V4VMeeUuncFPoEX94nuzLUAQF533dHqRGAc44aZTYLramvY1rB581"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fx29KFuKrVhQt914XN2KnehKoC42Jc3DWcX6VGzhW5PqzPtwcMW5mKPvviopT73BmqWR1tAs1tRskiax7sBnNXG",
  "key1": "4eC9uyYQKXMMyV1X3VA2rF4tbdnwxrLfaZEubMYySQgJYEpR9czYH4QSdcQTR1qsXXP5XyicczF2yvUWVLtFiB9t",
  "key2": "5bppxxgjHqm5AVrQh716JozFVWguxjocGJ11GhyVenmiXmXLehGKR1zxhnvsssf9TbkA7oWzt91MUwaJTov76VBB",
  "key3": "56m8La2SeWpCWay8EaKqfdtfkX9QKrbviLX7eyVKQJDto6wkdRoC8xiwsdmMkKmh28PS7m36G8S5J6RfMAdQBh3j",
  "key4": "3eNVkFNQs5ktJSsa6vk4fFArmgr9eWHTjdFoci4qnCnPKeGgfktAKd5aCfxNJe1nTgPCvBZQxTKsSCPcmYffWf7p",
  "key5": "B5WEjsT5SSwycpfsAY3hm3t396mUTQAKCLTUk8bBzd1EG6E7w4NLdi5UA2558LtwckxoGPLn3cfc9o9rBwZb89v",
  "key6": "2i2WMytqBFUDeuGcsrnSopVqnvF2L3yc7G4uMwuP3i5E1dwVcwLHkXFxAraN6MYZYXYbJAiwT2JfjiEcQFacXVtP",
  "key7": "2KaKJRpKV2f9yPkuG6MA8jsnYLyfnXjdVV6bcUdvLwsmBh6YsxXUsDbe75BCNd5NNQSU1qzPdzqXwY8i7BdQhU2A",
  "key8": "2F7vESnhhrgBhHJbNtX1njULux4eqUyfubvTQKGWDb1LDAhBuiDshtYYqcT1PaYDoQCkmGYNoejaHCMVek6VJdNa",
  "key9": "2o6t2Sy4rYUbYLJuCZD5mjkeeLQWZTPQRT2TAnG4a6M3bme8Jq9ZXXDZ8kArTbWSZf3veBTJPCEBb78kJ6bnAGh1",
  "key10": "4qksM6iS93w7BCCec8MTMZWSpKffvcMzJCK4DykN3WMv6SwT7ppgb46RednreX74EiBuvvYh2SBE1vPZsDRn9QM4",
  "key11": "38cgniGq9JYsSaA2keADFd98BYiZCv1tiWrAomaWTtCZZmScC161JHuzHKXUqvLhYDHEBWo4eZioYN2NSzx3818A",
  "key12": "5QHUnVM4nZUpBV5bwdWPZeMg9vFP75yHZmckRsyQVaiUcHaMF72CC3GhVLfrYHbqgD6qr195GJACVmnFXesfKh6B",
  "key13": "2NbScmsAqiQszz487iYGeXYFLeALfipQBJd7Pi6DcrZWdV1USq1942W1Ds7BG2qFviRAzE3L8zBfRPfq19768KcX",
  "key14": "5aByZmkxt3VH7EE1cCCeL6J9fKX547neY9ZNkx47Co712s219w3rb4jDZa25rAwFBjfEdoM1UU6u534AWZT5Kouf",
  "key15": "4ZpKo2TPbnNiHd84oNKdm448PNHKQyFzQ4kGsv8UUS7rj97w1ejarCe73u7WqrQBqofcCZfMhitJGYHc993neKB",
  "key16": "56vDRWUN5r39eg4SHPCUPg3sPvZDDDJGDFaUxovoGJNQgB8pBNi9ewe6zMwosRXsNUVFmcEqgw3H7Q7oK5wAfsCX",
  "key17": "HQJfh8ZB1ZhjcGqrTo6Wnnw2N9M9jffUwanD2XHSLuBn6rCS4cBr6GQk2hicGMCRm7jdX82ctxZQ7J3EkegLigY",
  "key18": "4CQ4fbS8Lrv7yjvVWnBsfZKLQTemp8AexxfBb4ndcuxwNE8C732Ch19ak53Du42YezdJnTSKfZC8XUY9v62F8ZER",
  "key19": "5sQyEPDf7qKbyNezCVesU3q2RCuzLuaviiuxusVJutcgxHtBke2F6uQQXNmwZgWaLk4BpFJLiKp5n2oCJyEPzaHG",
  "key20": "2VcW2wWYDotoq1tsD7KBm5j9fmvBzJSu5SwjNHWAGaomJV5HqSz55vY8kd1uZJwyzo28S4wu8faBkJs3oo69qkpy",
  "key21": "2MFrmV8ZTqKeattEB3EgenqyzVbYoqLsuW29bJA636kMT9Zcqngjjtn8TfwHCoPSzN1hfDWdbUxUXvZe8wweo3fb",
  "key22": "35fCAQ62g4MMNvciLrPXbSyBjSP32cwYeEB957RnABoYyabZzi3ovSkiU7oUgcdUcfTdVuaEP2WYCTZXSSwKYvTz",
  "key23": "AtaRNsakXAFkRUxLH6owptT3BKTgRQhwyHHWsVuSVgcqH7tUtTFxpTvgWAbWnoDatKZA9jZZZanTS97M8rotSTZ",
  "key24": "4RLvTiqELm9o8TAEU1uSycJjxcemvjBeqXCWYk4iSkbJaynW2EFaXfzK1wJTCmWCC4CRdVmUp9sP4fSonsiJkBMv"
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
