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
    "3xGypKESjTdNJPWdbuFFuRSHj1y8Qas5aF1JjwVGjueTC7dDFxzNbqipawBq6HfyvJBA8SoeN7q5Pj7onyGLstGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v8rknmGNPHKkQiacjwYTE9yFm4gJiH48otyHo5NAWLguTrs6Mv3TymRv3FDvJFppvkFjsKX3yjJL3bWVcZri9mz",
  "key1": "CUwM87UkUvs95gpDWFTNCEasPkbsSPqEALe2Y6qc9VWSiiiyDDkKkJVf3gQ6sretPxsQicGgy62Cvy2KsUP8x35",
  "key2": "2nvPWpHgP4wNKZ7ayogUmNFn9DzjUDzfkYRviwTqBwypAXijX7opvioyQbgYHB2yFyNeozS9yunZbF4sXxPVtfBu",
  "key3": "38MpMPAbjsZa8VrEqWsgw296ALHLYhwWCKHyZSUnDryCbtxBTVZn3zwGh292Ndmg1MzYtbsUYue8o1YJSE48RmN",
  "key4": "2ajub1j8RZKmoafdrDEZXL2UW7VZg2uMYj5wvAuqvjpd6fra63KRnXwnoKWbZvNKqEo2YDz4ozKYXaUYjzbHowkD",
  "key5": "5JRuEYnP1v77aLE2Y63McMX75ys5wYcCuREdeHh9SLioXasoDnbj76iGcCxu1Ek6ffbW4VCA4aptLZbxLPSp2yjm",
  "key6": "5NKcAz6BN1M71kKQMywehGoz82pFpTB2gCxRXwNEU2VxEXUS9Bota9L4FbcEJpYXnCWPxi6hwZSLZsL1G4ptmsc3",
  "key7": "5QkxBSucjQ65GsVwt8BdvZ9svnkmNB4vsNx5YQPL53gUR5NGdm6DSj1THUy41P2N6qCdoXGU3YRGqc5Gt5vd2zjK",
  "key8": "gWZEodiX2kN7RvjZMDYFV7JNUAyaeg2CYoLGSBymYGT9hMrZ5htPfMbqfpu5HWc3pAoVsYZr1wRroAvQioZ5hWD",
  "key9": "3oQWVUb7c2n65QatziGQNd56Zuzuu5Sh4Vy1joidmf1tnUZwGZDsgxe14uz5a5zVU9MRKMn68qLa7skTok63JKYE",
  "key10": "53sZmfj1R9TqiRpLMGTTKjHwjKPYVoeAG7YpoWgmPigiDD3gDTg4XhPLaVaEuRnqDT6J5PNaxxbaTrTgHJwG7XEK",
  "key11": "4ZJ5FjzLoyv7jpuhSGkGeVjhLWoDv9pyHMWDkZaw1fDYXYmJNgyjwdNCcDZeuiHB15eBF4vL4wKRMAUYMpT61sYH",
  "key12": "2ZybKT68iYo8kTSb7NW7mpTYLEkJ94pcvc5krFZfPKSRGpUXxpZ5gBarA89siBvDZ6bNFwn8GqtYr6ohJydmsmci",
  "key13": "2PSgK9yBe6bKUp9iAkXnY1uz9XCmDw7xAPT1ARGfxgg5dtr1M3UyskYKumMx6bFgvrsieicTDW9wrCciHc6n2ke6",
  "key14": "5kdcTc2TcA6FPw7tUppFp2R2AEEp61HUnCL1ygFr7zkEPbUoHdGBLJo1SabMcgAwMatzGWNQkeD2nP12smj2uiKz",
  "key15": "67GavRXaXwmiN7CM7UtWR92FRDRzjXaqXHfEkYyJBFQgvfftRb6okLMu1wLmYKTZKU2eP5hUu2QyEnWoUoKkY65X",
  "key16": "8uySwd7G8BQvYqfVnzVfubDJgiBK1Zvpufc2ijyBAp4dSjMHEiFDSiGHzW4fCfHNU6REppeSKVbsMPHm94eMtQ3",
  "key17": "3UwzGxbJvV9BBUNUE4uz2rJvz1oeG947jNTAyz6JN7EH91bkEAn1Lnzz1edZEWLggYhxRNj2TVo5T4E4Z7Kqbx9x",
  "key18": "Dkbtbf95SUbngcBrfXhDgh4FKkkWz19aDsWM1vFW1EB4efzVkHVvBnStLGwzLRZ7n77qfqepzMiJRj65XdjZopr",
  "key19": "3TVJdHwEYpcD2x6A8E7EMb1EV8Vyv38P8DuVqZyWC5woRRELrjbR2y8iB6dqHHEmjNqNDhPGUjpew218nP2vQvDD",
  "key20": "2T6w7WxxciHqsyYuZVKUeRCN9hPFkWNrNatu9j43jCFAVD82LUsKWoez7bBSPcMvGbnUKaPcDdk17GKPHQzprRjf",
  "key21": "2ifbJMSBi561SNjfioFyW2qnV6Mmiv3gZmrimAAAgpQ3z9DkxaENwU32iXAwiZ85PPJztKDDFjAitvSAqkMEWa3",
  "key22": "2BGz6ZqGfGM6vZhkR352yQFr5CE6DC7zivRA2vbCJwC9biLh4m3bvwja21gejAygnDyGgxbRDYhKZ5ZWFFYtmbxi",
  "key23": "22wPfikhebRBdf3wh2pehCCMPZd9ZTpqxKpx618pDDCPyQQDVWKUuY1HGPsU1w49ws8V7qKt55Pro7B76PLZ9U5g",
  "key24": "374oC5xkWVQjhygwms5oRF5BryDQHwDEPH9uyM1cM4fzaLrzHzQ3FFMn164meao1L1a3RkJJ3Gse4EUWPJ5fDGhz",
  "key25": "3NzFf518JxGCSEWf4W5t2aAT89hjB2SA7PYnLogYZn8Pq2Vi8WVTJ7r1gYoJCYfJuTuhTBQvp5DAEHyZb13p4Mf9",
  "key26": "2hpXcyD2pkAkJ1JAzW2hRdHbV1dWe55hbxVp6itxMxwvJXiTZq5drcDqLcNs9HVB2KbqRN3mGwtpYujpXBg5diK5",
  "key27": "4rTNJT9hez4S5xDjfMRfyEy3Bt6T7gdPXfNXnXCiSxbmAnyLdbz8JbaR9NcJZcqTkkV5uMBmunKa5XHj47LuV3Ck"
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
