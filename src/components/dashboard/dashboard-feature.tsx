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
    "2Ey14G5jP3sUN2kYFKKsZq9M9hRqkU6S5vMTe3pQ2hzqVQmYmHtAUN7cnrWTBWNLSNbYLbvnhhLAqwFdPbQmWASX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4o9KssHmUJdxvdsoq51A8GvFEYMoTJ194VFmHEYHg7N4PJo7r1ijpzxh9J9T3FVMe9BX5u7tVXQJqHzR6eseER",
  "key1": "5jniPxNPWud8f9UjdCvbRiwJ7rjvnekyciU5cAhcbq3tB7Cskh6cKe6a9LFdJFMcwtjAUPEpmUzpwhxctwY8fWJB",
  "key2": "4edExTAdzb2myQ9m7pfKm2hBZRXz918uBgpEuE2kHxapFCoVQxRS3JT9eCEXQ6X7uGCKoByR1k6Lu9HiJt6RjfDH",
  "key3": "34KjCNdyh59DPKoicFF6BsS3DP2FfM1inwfT68Uzsh3omLoprrAGmoBmBxYaNitAAU6czQ1JWeuvapHpznZkfShw",
  "key4": "2CyThub62rdwk61D1aGPTzCYAPt7ov8j5nc2U77bSaWN8DpTZoYkmeHbufyBRRkSSKnp3i24e8AP4SGRWV6aGbar",
  "key5": "4XNivQVg1B4waKcPcw2aJx3cQcjTvcZPtYtGE5gdS3hNhg2SLgZN1Lrb1A1wqV3muRpmfyQiKh9jDVrtLfb9UnzG",
  "key6": "5mCwePbsmcnLHDMGgStPgFEr3qDeWSxPF4kuzJgNYuoPWgfNvTt4h7JD6ebDFUw8oxh5Sor6tigcGmqFjbFXhdmu",
  "key7": "2yd9KUz6yeDcP9HrUBcWvB6v23zknPSsgje9kvZQbnakwq2fgyP3gMYdk7uMiymt2emzyUGSTVTxCtZHF7Rs71ry",
  "key8": "24FyR2v6W1Ctj5ykP3vkxuUZspVgm81YzTx6kZHCSG1zQL2AuJhhFEU6pctKng8FPgDaburW2SDL6RAnvrDinTWE",
  "key9": "4W4XWuHF2oCovbzDixf4PZwvrZhL5Af4nabdd6cgEnobEkffw98GqNfY3brNEVsc5gDFSrX5rQirppn6awZZmbn",
  "key10": "24GqtUP9FZMr5UVx4TX5yVJ5onFaMrRTcd2Gjw1ooruYAGLPgpyofgHw6Y5CMirWPdfn6Eba1J5smfqQekABTch2",
  "key11": "vTCTkQwcPgV1Mm2qhdyGdiwaUeSa7hcjCWXEypzxGmNk3xDvstmq51e8hVdZiTyVQNjTHnuURKL4Cnm9cFZH8eS",
  "key12": "4j5e2fNaW2NDm6s7ZiR8HhcyFuCjmZY6TLgsP3umJtG8JyuBdHhUFZdGzEw3FKhsWHAYo63FsgqHnVE7jQrJHKpV",
  "key13": "3G4aLLsEJ2KNYBW9pfQW1eBr1LjgDKJdJyVbvo2weQsVkwSRB7vBixzzh8BZktAg7yeDHskrx2LvYyW87d2r6m4Z",
  "key14": "2Xg65FAixufZn21aRkyfUZdF7S14wr5xLuprxi6UPRZqRUJMPhyTkwP79kQvgLmp5MWdC7kdz52jjNqJ5qXjbGz5",
  "key15": "566hPhqjtnUPjwL6MrS1xCQyQWaVPDvD8TXDa6nn4WHPmpj8AtHeHf9uxm3dE6gL61Chhegn45WPRYpYxusB4cLr",
  "key16": "3NsJrUBJCnVNgTQupSApDKM96QQgjazsZYASKnWUkWdCr24TyWbzmLYZgHmMGFSxedSurTTJ661rvyB6sD24F5ZU",
  "key17": "4438Ee6M477kRrkMKUdUcGbum8FksvMX4p8JgyE6ktvVxaP71RZQhN4wTSzU5FDGF4v2dVr2PmdkLVJoGwGJrmyG",
  "key18": "3VeaeErESbp19Gy1BqP9xuEXzYDTVZeYCCUVABatug1d7dcgDP9RyyWXKA8tDSvuFWtAo4mz4W58Y82kQg6trpu",
  "key19": "2y2gY4o1wFK31uFr53sNbpDs1ocpQ9eYFgVM5kKm8gW4G2LDhDjumr2A6MD1eCQ1QnKkGGXtrBKm7Mp32Z5CCQ43",
  "key20": "58PFaj1XszGxQpMG8jVHX7CrE7ht1z3ibCuwY3DkgjWoNRXKpYkgrKhYHLZ7QsfaeVTxMTHgHZHyGtTRjLpGa4DK",
  "key21": "514sidkxFuKboHzTatXo6KYviG6xRYHDo92YAeyBQ6cdb37PDvXSdpHFNTXdhzducUqNxnHumyxsn4fW8Lh2cpDY",
  "key22": "5x7kmG8TvVfwmajv6XrEev2pbQVAvz8KJRuCDPE4yAGBAyWCaEjrnXNmQNnrc3htha3za3NDXUS1ZmjR6Tfp73XQ",
  "key23": "4vNEVzRw5QmijnWGDXWEfkyobkrpL4TEsPMJtx8JiMEsP24GZCdFvPuk1tf814fGz4LqJx3C3jRPEwrEisp9BR7F",
  "key24": "2t78sVq55nQxqqrcpEtmmKmaB7RXNqY58uZvH3DWE6TwueqYkJJyQeZhmgnjRFvFttp3ERQTr5UhnTsDMDKmf5c2",
  "key25": "2bkKb1wgvPm2Wk14d9E43dcM96Fani6woF82KPc98U4UNN1TDbVerToCqQXKR8qB5aNMtu2yuFKzdATea22NLEbf",
  "key26": "2Zp4jgw6exdLuD2KAwWrJ1wxAy5bnSbu6ifMWUztKXpg8CHSGPBoS9T3mTb3kwdq4ETGhP6rq9w1A8TpYn543ZJQ",
  "key27": "3uZEHDtX8eLdKBzSTaagPQ8fAGoPs3YWDKRMmfxG7vijejanD6aVW739zq15bQNVUA2EX8TdMyeiZpsU3wLbyASU",
  "key28": "5qV48VJB4LAhxdzuscr73e6CAftFQBb26FTa2jKmAtmaXVX7Xs8Xzy1ixTiB9xDDQhPTgFSreiBBqFKQURsXHzJg",
  "key29": "3zDtrJNKE2PZ3EW69NUvTPj5ostwuxpphXYe91NiWym22VM8bRtdudRxhkFF3GiAPmwF8m5MbRvzjNQwPUXNW5RS"
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
