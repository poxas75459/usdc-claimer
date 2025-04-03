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
    "e5sH9kMeJpKyb1nQayZnzuw78X88G9n9pM6WsbtstnannTYwdaLdY3PiNRrXghmosZ4w2CC8qc2nLFuFASC1uRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35U74yjiShF7r7c9SQ2o4RYRZ6P2kKBHsvVZG5J2znwmdrpxPECQSxTFhXUPpg98kafEqNMgqsex9qcEcdcCdaKV",
  "key1": "2kbmP97UKqYGscvrBoVDUzsL7NijKCgS8NdYu79JVk1eua3MBXc6WVj6BbJ9am8ZjVDSPzNNWz57pfhsqhcKPbG4",
  "key2": "hnjpZtfZWpkk7G5hRmgEBesAhTzFu5TpZ5W4yH3rEVcvKyMT3iTzGiq5deesgZdg1ahbzUis6wx88SUKA9BBJNh",
  "key3": "3N8gxWS9wkQbgdfmfCd5fYr3PV3HFNdkhGUqmut3nVVKJLMLJxaPrheLUwSywdMDtcfL9ko3fmL97WxWnMkJqLZY",
  "key4": "3u1wKFN2YrWDAKCbeX5dbWocEojhSBgi8vFrTG77ccWyNFwznXcv9Y15re3xaZeqDqSyYPZSXjntaqACVnb7LBin",
  "key5": "4AptxYstn4DBrhQKNFsjCA75E2qYXLg4GR7Tiv9pnY8X5KbqM2dVLo8CvSTe2ubTfbuRz5SvRzUd8wJ68ZS2mDvj",
  "key6": "36ZrNAm8R63EHaZ1zXAWWNfTawhyAUV8n5FQ259k3vwfsTkVpbjLRosQWn3M3iFxGEMHj3EtfojZXYp8iCkgCeLM",
  "key7": "5bQdS22Htt6DhJFEHBcudbxNQTp2HoNyk5tupVMvbF8dBjcWmWVw7o9sCvcDxrTQqhjTV3WBkkujCnst1g2gqRc4",
  "key8": "4hT6ARYbkxLAvdRJbMz19TRh5yTr2DwQxQdfTBwgaW5goQBectew3EYAC2gXGmXYFNPjkbPu2Qe2wBtAwgUnLhKJ",
  "key9": "42AQfQJd5hyBpNsvHpM9sCKKh9ZMAXfAhxKhQXBn5KKE8WsanazSQq2J7szxubsCiLKaFMB8QGAYAS7tf8UkdXDw",
  "key10": "3jZbUX9sqT1SojVKjRzThQJVwheZMc7w42kk5UnCakVBTQ96xsPfXkb2YsGciTBT1ade1QZyDiL82NHSLW5YUXXe",
  "key11": "3gwDBbpyFximCu65N4ArVxbt8gFiuRhn8YGjyC58EcY8r1t1ME1cEy8XjnpkYc5H1PKr5hws3bwaP8Q4FERWHrCC",
  "key12": "4zhmmmfqjUY3KhQSgDZ3Z3TwRQeuYfo7QTtRacRvYeBxzBSrdh6FUNSPQLacWueVgGV73ESWgGFtpNZ8UvpGeGyG",
  "key13": "4dZcvdxvtrU6RLXf5ziu5Fi6y2dVCHLFNTLLR5JMjjDJn2MjNGpoyHrmUjgtgBJ11kS37jG5N8Tw9QDSi3NpiFBN",
  "key14": "sm6DUUHcwABTG1LT9SZiR39zhBMWfbJZUfLrdr6rH2jd9HQUrhNWjsqRr5CAN7YZacMupudY9sRH4veMSfTZ7Ke",
  "key15": "2sQzRJQTeG98yyzSjvj6jNAkiAXngBAAPGAKYyiSGqtHE3hHBEBFzrJ8uDajUVK9yXLyhAMrzN9XhscEijGJfYau",
  "key16": "62rwCDdpPMUuf9Cam9MghKtuZuJjUax9wGJ4q9CVPNoK7bUYm5zeoteXnV6Umw1kyukBEorFXg2viP3VHjwnurzo",
  "key17": "4tjVz167n3tqiRFtf2k1LHGWYwwAXZrntozuSKiNyK1oRZaEfXhE8nQW4jcdtLnuYuZcgpei8enFiy2BGyJRNYV4",
  "key18": "3g9grShrB5S2rA4pw65mvUyqi5fHmwibW5uYPR8pPEjtLUB3UBf41v8vbG2dg948NZ8Psh4S9t1Mn4gryPWCDTkY",
  "key19": "5GD6YQGancnY8phvmFNeYLF3ChAjT29nCiwQDwhwbFX5DLvWQs42i2dCDPk85f6EwpXVXAzhKWkJJkPnjxMuJWjY",
  "key20": "3eP24jKtsd6ggWNENxVc7GEzqcmbXNaFyzadWeZHpWQbjktUt4dm8sPt1oPhaCCaFDTRzN6t8kgVyVMYm2BrTTma",
  "key21": "3XiktxWjzgvye7La1UxHp1hW6d9BpSgQ1SUPgvP3bQAX9UtkmHaPjTKWSfufs2tJrLcfe8YZHPGtpXTc2dhP6Za6",
  "key22": "4cuDPoeM4Rr2bLzFxK2gFZqyLVjiGUBaHHZBG9H14z2cf5Z9Xx4Hh4umxQVXT4NYEdTEZvzxZjdb8hNvso6jpw2u",
  "key23": "xNh3FXUsmCvz2aN2raakXXptbBwLq9fptrGAnF2EabS2wG3jDxcKs5bFwd6uyAhHoS8F9bsLkJfwm5gGvwAgAxc",
  "key24": "5EssE9oZShKHFHimu5wkY5S2fnC1GezDfh4GP43QQfumC4XAi3coVddqFfHbpVL4ixC8DUVSj3BorqAmfkFKrT67",
  "key25": "4aP64e9B69ridFkUfmYdLiZ59ED7JMJMFnGDBNk2xDSsGnyFoXdJBk2QaCkbK5M4awFrczUcRWFqCfMoejoE7VBC"
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
