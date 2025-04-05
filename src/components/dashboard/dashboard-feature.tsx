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
    "5BTxz3682Bk5uQhVe6igRY1tPaPqYrDvk4e3xokd3aEXvhv8yScPFUEeEdjP7FaoHpdSS3HNMngN6WVJH2BqYPzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wjDBmmrYQdFghxB8EYGZVKz5Fxgi21r6EdwJzE9JqgUM5AvNc5ubzH1bcxzPP4ysPqy6aWQ3UoZ66tXLW9jQjeX",
  "key1": "3CxdRtKGAyYbDhvNsLMbLdh3gKDfTvv738CGg8pZNUf7irkaq2MgWoppKqStQYrSvWM8rpjMGo1oPGRFYQLFNYd1",
  "key2": "5f416tpci1DFQeB7bAdBXLvarbc48DzruC1dzrnmTB37qdTB1szK2AqsMyt18m1pRhr3h43RNz5V7mMzBraa8TUQ",
  "key3": "3FHvw6pMtoxCtkoa2WchLkCsSD4gW3oehNzv7wcmvKezY5VEDKZjK3JUCV2VwufVnF7tdJEUptd6yE8TLxDoyjQH",
  "key4": "5tGtXDhiE4bLXe4B3TqJ4hy2S9Z1HqQ85mTr247RfbhrMUTTt37XjyWk9yhMw2Fjb9giv616Aw2CqM8PgNh3EXP7",
  "key5": "3VSuXGzVjrwxSK7oUJWB6mnaS3DMkm3GUCNmRkMhRWdo6do3QWqbTsqeuFWJyfq7j1rBjYKMa6d5ykimEBtPG5Dr",
  "key6": "2y2hMv1nmNq2TMguBZEQq6yusdeFVyVNwWsHghQfuVSczHgbtGj8qY1Zzuj64tuLZPfz6fD4o1pzUyNeNbnx4TdD",
  "key7": "21tfACUfqe5vpeWducQ2N9jYtViEao4Gx98YTjuKbqKgotpyuMxfygYATai5L6fncxf68ePmsNscL4VTMPBccyXo",
  "key8": "2WvtM4ewFmum3t6f4zVATSE8VWhDZK7eWHzhoJkLMtnHUg11ZV5z4AuUfzHTW8bXER93QArzRuPJ3Rqqggw6Ar69",
  "key9": "33zg7jqT5qNVrGYZ4e364P9k9pjYVQjhoc3MinQFnGG2XhaMFS4GecAJe1mSHBr29NXZSZMAc7smKnBjd6uxBf8u",
  "key10": "3hCXzZ9x4rKvghwCNtQmkWXrSnVFAYJ422WMRRbTypcAMwBGmysLK35UMwKPCueRF7Vby3UJdpEk5pW5DyJPhnSK",
  "key11": "4sM1Lncfe1QNigXpeZW8q87Xar9x2yDnPCdJwqszMQrRghiknhKp13QHJUiFjHSWxEvP5LxrSTxBUcb7pieiSKzA",
  "key12": "2kGxUUXhRMHsdb9NNR5Q5qR74jY9UUewxWMMYyRdj8eDy9g8isBiHeps3SmW28J7iL7oJrwK7Rtx9cNRqAyKy637",
  "key13": "3nFKMUoYdxH88b9YtenAY91q2dDCne1rWf4vDziQQad8gUa5piM8AK3RuNAnxRpZd69NaqcEzcd4Y4hha4CyJ3uP",
  "key14": "Jx7QPmqipVasrAVWrMnvyEFV22DpioHpCocm2KkwVAoqMsNjz3kEcw2ZmGfpWswXNYZF7sgmxe2aHGDE6d1RiBq",
  "key15": "yDgyhHbhNWFxax7dGNi4Xfw6Fc65p4anFtdZXasFWHcE9UjMzJ5Vj8X82i7JZ8GeF3VR4NfLocLdGrEYCCtrKZY",
  "key16": "32BiueCBZi6XD4VsiaS9vntdpAZFRZDiycytpoGCJhXdtkCSNvPmrcKxbd53z7e5QXNy3uHpygFmuKEdePn93kwe",
  "key17": "3ygLzhJej8Z8pgSnA7sYbN7NaxbjkD4peALswyXXcB6Qepi2qjcAjiwsgipfT5K79CG8LvbbKQmTepe1B1PEUotn",
  "key18": "qqK8MAvuifHhg3Zzegv4gm9j9iUeEXxxjZZHiQ4jyBAS92UZK7XkU9VsHf1DHUS4KRN4S4kyZPEsEt1gThcskPp",
  "key19": "5hFCgDMu4iqb4fPgkfWUSdz4zX66XDq9USVo3UHRcRdUX68d5JxX9yvV2BLktC6nnPrmpm995ehju9bRmu5m119D",
  "key20": "3CneQH8sj2Az3gCfYhHGDuwGLs24UsUyM9vUESRijTmj5guLnDYKd3KoM6X1yg7nwatRVSq9Sxg1qtSNZhoQ9DW",
  "key21": "5uYBbNS4csyh6osMpwrYLaZXGqPzLrb3fLttSBtkhNvqqbmFcH9UVYtAosqb7nLR5Voo85NXWjJRzc1XePe3FmqS",
  "key22": "47TjkWKXSZ1auhrYefuY3d16DVyB1XMnkbK2L4yMwrN2wVpohP84MRQfN5Zfu1pLetrcVAEaGRodpSJ2dVWHR6wa",
  "key23": "3cgYZ5RFbirfi58P7EYbGmrJZtxjd7e2wSS1uiNAboaswdZvuvVSukm8EGSmCjhuYvYw6Z5ZFECS7eHvxWMSNxxH",
  "key24": "4njJNQQ1r3BFHQ8gLPUVFzeKV7iXxsL341M2uai3omRAqpFsSGEARqadJ6MhMAG65J7ErssX3ZMA1cFHg8xGKGTq",
  "key25": "5kvz5NgWeRbN8KPnstAjSs2JRja3d4ir5Jqj2dgCWdo2HVzs4wgKeeHV2XmzvcZ8NrZrMK6vNEyXpUqmdSrLAe8m",
  "key26": "5Z2gc6akASniP2ncgAMEGrPJdDfRk7hWEaKbCw8YPs98pHJU4a3JkGKSwizeLTyo3UXuQBM6ADYz1MsZSxDfvo4r",
  "key27": "53Pv29QagHCyTJbBWjC2ii4uz1Hm7k94grjNmxetaHfNeKD9LSTnZCi16nnu2uxYoSFMaHmZ6ZVWjXXzEHSYiWbq",
  "key28": "4eHsbvYZhiSfsibAd3YpdRZahmbNkuLVMhEcNZxZxEoK5nGPuqFEb4gF4bdvedjpDZhog2toNDcE1PwugdLKGN4g",
  "key29": "ptZJ2xFUPQEyPm9LnfdEyQefc99G5egE1he1AX2AXRTYGs4BnRf8y7RWfjmyg94jkN5vS9xgd1AX3uQWFwiXFt3",
  "key30": "4KsUQdXEHPNzJXeopDPzVVfVWgTvWp93oyrEeK1nY7NEN4Qn79tiCvtiwaWWSwFUWDsJJGc6kzsbYdX82z776nga",
  "key31": "3tB4Ag1LFZirM6SN54RgQsuZxVDU9SApXXzisvfmfa8919v1bZiMUELibad6b2BbGo99Bs9wJkxxRtk7i3twenxR",
  "key32": "2r4wDqx9RVU9d6yGvakcWF1rsKCZBcFUyzqVVhtn5Db1eZGv6KNJsRfX35RdGffdmskJMVRwEkiAbSxcAqrUNDkf",
  "key33": "5ciaq2iq8J1pG1EgiGPPExSdWsFQutKGirfC1gjvFNt3TmXqCfHDQY4jFD7omCs7UNpvZneJPu1if2GKkXrFZuan",
  "key34": "5nYKQohhaVWdbMyKPW78mgzFGGZBoA8U1Q6jtYfQLjuoTKyjqe6sdCv5e3wSxmTagZejvaobR397BtJnJKMYo9Qc",
  "key35": "ejvPVM5CPdXTSkXp8PatNdL2WVEt3VePp6u8XSTH437ikSRVBC3NB92BknyFWX3SnpcPntAkGbRbT25VcKbfo96",
  "key36": "2k1YQsQvbqGyv7LUqjmoLArky4o97r6LWfCn6oVipaJUk1BXhjN3NL4CWjj84qjgzos2rJN2YMPKaTKHWy9jN8SC",
  "key37": "5dZwwwYwnWdiozmBDYwjgregV512XaKmHy2nTM2zSqDQF7x95kYifDiA6utMCwRKyTepyZmv3AAsviRhCdktQi1s",
  "key38": "djBUTNZ42kmLh6HMS4367GdVRLSzwsfL2o1nHi9qSyMn6nZvZuCvU8yTm8ZDfgoe87rz2VFESRVnejGocKUdYkJ"
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
