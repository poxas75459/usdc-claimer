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
    "4SpS4SfUNqXpmMhk6Lha948TMPHnRGMYERwXUZwke98MVRqh8vpdMba7cYbUc9c8d2iyBV773gKCFroTVqqdeLea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3537m2AVF7HxPAhN3sAUR2VA3eAfPxqTsE5McvGnevWkyCFQAYgXnoRygXvWBhx1iwJsRA4EUpSbPMPP51MVwKjC",
  "key1": "2rwrLVCBWSfnxwDraesw9X8Wi6f57D5qbTnoBd59ACyeKr7D73YRZhtuLhEchx9nuS6HG9TEDVi8GYvFVaLUdnUh",
  "key2": "48RfmT5xQCjYQbFytupB6H2b6Ht3AQFaas6rACrPVxSnWkvCstGMM2PZLrzKV1YkW16ynPKhxckuW1HVFeuo9rQw",
  "key3": "5sDFyz99gQh5CjV5BnLP2aeHVVSJtbuTW29z8Jz7oUY8buauDQAuttJoWuQsGZ44Bd8D5oadyt7ysky7rsxfeqF4",
  "key4": "2GYr79h3ayAU4Mwx3tDyjxsaJfxj7kb2uH1be4ZWACYf9YuNG3TW9jyqwhKnuzzAmsbY14rEGanpxJKCKem2QjRX",
  "key5": "4KWf2EFb3gVCiMUP1yozj6uH1obGx1X6L4pX46S5b8YjUi54DC2LqcihXAgvxS18HDLwkbWqgJBsSTYHqLFEnRKB",
  "key6": "2fYUJY4mw6wTgHGxxoqdvEfbf8Yu6xfy8PnB2kLtYW52PCpd9kHZGXGK7tpZPj4BGhZgAFckeRFN77dqjpLuUmFz",
  "key7": "4H6Ch36jHocPzLQQvZ2499edVKAYQQssx6qNJJt2Eji6AZWrmemJBgDUgkLYYQhpxSdFmPuKDni9obnQvpG5LVzp",
  "key8": "gU3vCdjS65EdAWwGuXkCBUkHYnnVYgishq2247SaZSi8fLhDCQ35bdvBeLxkHMxgCdACkczLHNKcCroMu3piMSg",
  "key9": "5q9uJ3V3QvTW6ddyPfxdR5C9UbGHNW2d2ff4gqDttfapWmRjXSkFcqbYEspMuC8QnPk7gXy1KGAiYD6eeGHeLe3r",
  "key10": "4Sibn6L68nmTAZsE6xMqSGCRyNoM7GtGVRoAqR2sxHfe5zV7AHWmRJyD8AuGBELuavbmxvm1KuDUWv2chBWCsgR1",
  "key11": "41T31mZyuePpUx6DRU2BXKTNCK2hXxdU6h37kpY9PtUMqZeFTWyDskpah4tbauXhNSNcMirJ9fvUX8TcRhknjbc1",
  "key12": "ZhK8NMP8iVymhHw6v2Tjoggv1imZFvenwZrnCzci6BRJ22tmPcqJ1Na6zAwi8FHXEzHBmwCXbWqvREYxiSQP4zW",
  "key13": "5ozJXt4MKp3rpePGLXaZ1BDdnv6ufsDi3nKhTiL7ugQxYtZEFSmHDfDN2PXf4ePLisAxmTppJkHE3gvHMi4g3KDD",
  "key14": "3CwhT4cx4f3gzzVYBvf8kZbNTeJx1jXg7Kz3k5BXV9FcgXAB4PE4niHQwP4LpAD6evEumhLbptv8TXnMNPY1y9R3",
  "key15": "v19ThDDgxDBbdpw2DRw2Sjydt1Px8GuMcPdSqpa2DyMEazPCrsxuXFLTSKi3hKy7VCrVspNHWaVPLV44xEsXXMW",
  "key16": "4rAjx2jZ9jgG6mHJ7CJ6GGpWq2WqaSprGzYKQ2CC7bRHdpf2F7U3KYBBEaMdL1utEappMtbcws6CU92T3UaNbEGk",
  "key17": "5LyToZwEHnoxqMqsbfjzW2meXVQZEkhebyZUwsEE9nUfspYNQ66LvXdFB4Sd53WsKDkKzMdZeKzZJfxmY1vx7zt7",
  "key18": "16UYyU13PCRjfpYc2yLEmGK1DoCj6dokF4U6Wst47GTrHwbZiPuzHxUHCtdixhxRSTdLHSP3YssGGrRcWdQNTRS",
  "key19": "5ABuQNQvZaPUNZT82uP53MMu2sghAuReM4XYEHiVJQgn8Tk1KEiP5jyyMTuP6QhZRHm9LoheEDXkwNsX7CQxMVpw",
  "key20": "2aSWj584LAN4CyrEpSW1QRaKQjhovUJJee9x9HCs8pNSV8KWpy6PW58FFUTHQAo6r4TwzHqgBY4YqPBbL5u22mDj",
  "key21": "4K8cNtc5DjH6PWDvLdPP1PiyM2qSBB6mEdrMiEiGj6YFzR8nxnnzHrMTQ3jBtDWieQHk3H9c76PCRFNSjXXUAvo9",
  "key22": "3pPZ5qUXvWfcWcLzjBCjhnnPP2Kn4dUWrUWhHTgE13t3UUkpAwfRx2SafCrTEm5oghH3YanAQXNks1oQA1MsjJ6c",
  "key23": "5ZvgY9NFnR6ty3FRrCFER4XeKQtwTUwd3ZpfZ556Nak4Sqm3K4BPF21n7X1PwyeV8iHPpXKwTHbVMLTzmnC9uEpa",
  "key24": "2UPHW7XeuNondL7wXe1yrdqWhCrPfS1tfJKkCLYsvk1HwPVzMhF4ScPWMMeCqyDtSYHq9pRVKuAz7XQXViNjSL1X"
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
