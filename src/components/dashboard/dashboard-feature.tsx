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
    "5vapJ7zS79B7GhTPE8XXTTKUWM7wvRjTRK4PBWU8zcyY3UfdunQuMzntnEaobmfmarfWX1ze9vXQYA6LSr4Cb3th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tCF8NJEd7z6ovUqDWv4tKhHo5FGauzyArCchcvfoj3xb1nsn4X1LfHvmT125wSQzf7smRgeaphqUQk2g1MMC9RY",
  "key1": "3Zko3EMwatZPJXYZeBHXohoLGvT31x6AFAqmxQH5RMhUU9LrGrwWRQu9qErjHbv2DzNN65rDYboUxtGVjwTJH8pV",
  "key2": "4gxENAU6vKbK9veLww1t9Z7mhMLEE8x8FTrwEnS5BPru1n979bkYEXfRnUBARuTjDgQrve17eozrjmVocR1WRAQz",
  "key3": "EteKYt6vrd9X6ZsWCUdHYdUHTZSJSawiS7CpTCbXXS4gDeutJikxjZ8wnYj8Y5UXuBzAtoKZyYzV6bQ1hqaE3GW",
  "key4": "5JohiAKjApZ8yajfatYsYqFS5so4y8GTdNWz3ohUtD1UVp5rYKFoca8oFHnmJUMT2i3WtUk7gUvgva1mVPfXpSh2",
  "key5": "4fic2X651jhdbfaS5S1FR8VJvspzC7hmQwwPSDxgYZG6wFFqGyWHZDbHSM2J759R3HFyWDwriohpyySAPbfKfj8z",
  "key6": "4MMShW7iVBHBGsXmxidE9BtkgW8nK4CwHbZpPSZNzM4cn5ECmKHTXse2K7pkBu344Vyx3CJa7hhV2bAF5nP99kTM",
  "key7": "hPZTHjdC4ChdAjNxhqK1hUkTT9uckDfiFThYTPGMTKK3EiD29B9qZoJPoMJ6zh5QHMoAJeLrta2h2E9QoCnm9BY",
  "key8": "5uhzsXsT2gbJcb5A4weChLYhG3fxQnjGEDtWLzHj4eNbRZNWvtBn29Ss65mGWpnix2AXJkreTMAS8CuD6pbdoBSF",
  "key9": "8pM4z3T8rDpmC5qEhPhGiQQHaw29yQYJiGPef6eUcmK4VufYduKdajh77jADVrGjfYdvwVk2nzdQ7gFjbUXXYr6",
  "key10": "2RdWcaMRwNncqEdnK1MhXUv7EBsJrR43LPQySmxS6uqa8RsyUA2jwQYGDkc5KxPD2MytKUNAr3FGnMYzsyMeX6Nz",
  "key11": "2v9DtvZzemzQpnBzbUL9km49zZRXd9ruTLGpHZnDK2wF7LkoPLFatW9d6GYSH8yNRRCW2xMj5XoNse5AycYQADb7",
  "key12": "3TCpNZVw8K6fHGSVpbG2ExbD5ftjHsvAYTphesi3GzZCE19v7GKtf2xLrjbUfa8yHnfmgZpxjR9a33jzsoZPEoUP",
  "key13": "28VJTBTDKGgSB9aRy179LtpRr9Q9W8ceBJ3vWPfaYyQXUVU4JGvV5HqgTxvUmiLFJGFzoM3ZQBXxvJ697WD34v6m",
  "key14": "iGNB4JAjFYouWWkz512RZdcxG7jwKzYJiDNYRyue456d6PPUE7S65tfbvE3RGWp6sbCA4GPUtrGVQwkiGTRJKdF",
  "key15": "3t4qZvrpMtERVy82Qx21uNFvFtBw5eNFpFvPQVMydDocrUWpSgSM2aXZrpjKGzeKZJcT5UMjcFrD6VkDNJUN6YaA",
  "key16": "4ErRgQXm33cQnunNAF5AWD2zgQ2hxgGNpUEaf5wBSWusKBH55x8vnBvbsL4j8kLMq4WdzzSni3fMMUYZqBmrpkhe",
  "key17": "5gGsSgrGoDwHPXJSiz9wDQn4yQmEUbEZaWZCemGKhZdgARGscnKGBmkhSpyjVrcFVnHvxfsgwmVGbcAkqTzMSHvN",
  "key18": "32h6iHzoL5nksBbBRfyRNsxx3QsJ8zcdLeRgs5NLxWES3zm7v3pDNfDbV82puFtrKVsmYPxZgZiPwWSYh2ZVK4Xw",
  "key19": "5VmhyF6aLuKmua6JSxruTiZRNcZKCH5srabrgoULgQo6FVxNP8B6CkqbjBSBWv2KhiiT47ncWamZCjukcfYjf7My",
  "key20": "2VhXs8WpVB5tYSWiaPbPri53MMisnbzF5UA1E4ZKRMF6KTpqNpZnjZwzGgcEAXgokdCCELkrrKYFo22vk46koCpY",
  "key21": "Y39S6up8JXmMH7jqX9dX1EJjFkKH1Q4yZs5d4hcsCTvnngMvkKRtZUzmyLMHNhyCnQjTYE8uiLptPpeqzYN3BdA",
  "key22": "5f2T8dfk9si99TTcchCXVbhg48jfy7UFTwXWWL5C8fANZLbAMvyzBTCNNVFKB43NcrSMbwfr8Ed1KqXVRXaJfvMM",
  "key23": "4TsMNxb8W4f8cAuNAUczUF41L3QajgRRXXFextywq7V1h3AXoPvsVwJuSZCnj9oLFgJyKSp4vbQKttGUSUv1QG6R",
  "key24": "3dkDEt9MoNvzYrvabie7VXE1B8fsefPbDWCx7xnNtk9kMNzufw44yHjC8Sy9okrCP6ghSTPVKeRq7JQ1uxcj4mgK"
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
