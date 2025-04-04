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
    "4hCLzy49bHrzx3uro3yiCEWF5G4GP4HcCCks3Uy6aAhUdSL6oRN3rpskCZdXkbmWJH1ioUgxq9EAF6BpyLoCfbXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fBUshNFnCBwn93brPW5CZoaN3NdVBzk6NPRW2rdbqt33vYZLSBaQkfevUWv8T3MnQBXfAiiSCTnG3LgTMFdrHgz",
  "key1": "62n7h8exz3dXUaTRgs2WYqFfx7DNErWw3JSWHeCArDNuCakaGwxKGoEcGcUbQ34PRrQj24Tav1cq6PDUxtvyC8xt",
  "key2": "4KnRUqmAFTaL3S1WU8tr9CAUYu3DB7A9PYhhQJLH1PKfaWgamZi5GAXF7noTkafTfk8h5SVVHGp9Bg32tYQghSCV",
  "key3": "5MD8Eo7tjt7xaNHrqcsXYq7s67PdKqwHrqvDUh4W46fwwg7sAGYmgJhUTWUWP1MNGxH7jwto2rcsyMbUe7UD1b76",
  "key4": "5hjfzBTDqBBmwfL7xrEYe7bS3LX9nMWVQGZM6Rqo6YW9e1g7D4UADTVt7T7ejgaZswXZQNHuMyKMAKJyHsfdJsNM",
  "key5": "2PF3UTbw834DMTKwtDUszyAi5e9QXTC624BpnQ97GC4SBSYbhVEyaZrGngLjEHviiJiygyxXBm1FUD1HzdW2QmAF",
  "key6": "4Q6LCBBtUHCp7idjE9Jcjb4D6WYkR95XP5ZvMYpTSaigmCNb5DdL2Lm8i4N9MxiRQv7oJ6Yad8LsAw7ozZeUAVv2",
  "key7": "8VJxqsbaTq3A4dRX2K51aNXoWAjgAZBuw4V22DKyd1SB7bSQrgA2aauVLGH77Fw3yqsjyV3xSKfe2BaijywoA3r",
  "key8": "2oXb6gwdChDdvTxqRo85zKHNan48Hi3hY7poATTaPTpBGmSxSNRw8Sk9FiC4gNKyu7dWekj2qmKxKcLtKPtNcN5N",
  "key9": "TJSqm21emMvm7SAeaArodWgfvyxLkgBGYxRqS9T6wevnpLGEqcososxjoDhVhjaqxzzQoJSVMSxsrymQBF4F1dv",
  "key10": "3gcu6KT5RsJ3YEwbi1wAAQ221CKNJniGCE1qVMZfDdwxaQQwThx8qNcnxPXW5RqGc4a95JWC5YPypw2wxmdb2Lvv",
  "key11": "ocR7ouC1VxpocUhewSre4q7r4iZmyLfpafho3a6vhoNs5WRuYKoV9ezmWTpZ6A5gMysv8RFbz9qUcL2wPU6b4be",
  "key12": "2hU68zrEnGcreHdJRwJqmMh1MY2C6dYyYAgMZf4BjrF4Ni4MEfPK7ZMoATyaeqpvyUmPmWuzvzkXRgdh8Xuqh45p",
  "key13": "4eSXZ31QWA6vjJtiAkG64m3wioDTs45d1uAosx1NwCeQmR1E5DwiLrAugJYCukgT2JqvjtDSMYdPsyvyDtnaZQLS",
  "key14": "46NDhZGJ3sfh9NgGKVMCTwMiuMKBQa6Mo2uvPfMjdoZQakEU237vFj49tyL1DxqMbnuSmY38hT4S8R2VD4XAmVw2",
  "key15": "2UfpjasxkJEUMEWoaeQTbt755WS84zf27PWd9VBb7vNNgEbRkFrqVfAUKTfA5DqLBHyboT1DV42YWupa4qR493vB",
  "key16": "3bSRSMdg25NkmSiJ41uKndMwuGhoEDMrFhrzwQkMB7vjNJjnGDqGa8HBVe5MFheHJ2VswLDQPrczQDJJfAShGPQz",
  "key17": "3U8E4GrxmJZnRuY4PjDX4MasCpUNbJQPzBWzGSniMH7aWEvbdrrwZxQZ56XjF5iREfrKJ2UF3eUCY9qQu2GGitT9",
  "key18": "2ZmCmct8Pp85br8RyN8i8uJeTXzgsrU8dLhAsbXe7yPkryE3rwyCma1C4QS8UeuAz6GHRgNQm4SPStqNFeumYhiL",
  "key19": "2RtihFZwMnHFYA9KWGDwkpympZF3eimTY2XvKJqjRMnCuE1DSG17rtvyEyKvp1F4HNubDPqxn3h7DRjVRKYmAmGX",
  "key20": "2D4BvX1krtbPvabv7Q8u1j3pwNbHbYzisAnck87F6NGLJfJHRqWbPpeV4ouZbNfdxYyXBhBgA8hy8f8oBL7dhY68",
  "key21": "3xaEn9cgwb8yfak3CWzML73Z2GzryaKfyripqrpwCvmnHs1Lz39NdqnL49z1m7yk8todvkhML56tZkVoKXRMnxoA",
  "key22": "5ryUjjDKBwnQpeHczHL8CkQKkGUus3oiZQGBo2RsFJ14ENMvkcKyRwSwyX1ZJf4YzuKnmDayPm6HjLgT5JfsAStL",
  "key23": "4wRrrQK3o48BnC7SQZAbyFeszRJH5nGSryskZcZQai93qUsWmHkk6Po2ubERpdjWbbd2uJb1wJmGeub6RoqahU9Z",
  "key24": "4kSRNGypQbMJW4eVHZxH3bKdsXfYbVVZDr7hHFi5whP9Ykv8MkgTAiEStrktZh363WzWuJV8j9zG2tjhNFFG31No",
  "key25": "5YgnymTt8JutJDbsVGjvX7BX1pDp4QJgmMn9FQKrtBbPnQkKMrujfeeXVJ5jvfwDDaMrthrwnhdoV7CDhb8zpLeM",
  "key26": "25rJn58q9iCxUKiNrtokFuW5wM55ri97AvW3DZGVTb7xBRtqzLUqcmqUrpq2hPtXpHa5oKPssgdyzbEJVtpdikLs",
  "key27": "5cDUP3FRRFEpj1dxXh8Zs2LHqpVKTFvDVQN4aPX3g4urTMRCTawYD4We4jJ276T5Rj6NYQQxhQE3hRUG6Xpwf1Xc",
  "key28": "iSkioCtkDCbovVNprqCxwEuBY8qATWbYb3kogNnKeuq9F6WShVusYcaTVv6ncFmbFyxk3fsCy1RMLrc4AXUqiFX"
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
