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
    "4NqHusghhiMpcE4yzPkYq9F3WC6aSDgp33y1ZFeLNdAyVdd2KRcrMtTQepyXJcDgni6t11UGQxdAjh88ApUWc8Sf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61FMJeepkyBbEXTxoAWRxQbr9EuxvQGaubanwp2jprwaX9x2wcpKo3JqfbfDTX95SM1GU8bGrfaRWew2FhBHhYyM",
  "key1": "3xpQemQ3RogxHjMzFrq8sfyh5Ah3ep4Ggk9poJN8Ls8bK8dn7NYFJ89FiFQetSXP6t5JJPNWdhHv6mWtHP1Qt8bx",
  "key2": "61vV9c2zq5X6ALueu8TY6J5Q1xNBjGoiEcjjZHENRomYeyeJ1FikcaFGp3pNJp6sLQVGEK4jRsntqsyLWc6TsjXq",
  "key3": "4Eve1xF5eEjZULLP4YPH41cRTbqkvrr4nbyDgjzFzH2XRqRAi83V1PvGys3fU5U44GzNRiX1ijS6PFf9eLJfXzbV",
  "key4": "3g2UwYF1icbDyrwEkvqpRSpvaBn7d7vG2fuMDZ95P49jCpemUcK8mohzsKETrV22hYbsY6gAEvgft4LwQLJYuJx7",
  "key5": "4rGNW197AN3fvSHq8YQgW3kx7R4M1oQgTSstwSbNVtn9Tt2agfAqbTt3BLtchtsFnwt6sGFgZrN9s5WhiAFdBz2M",
  "key6": "3767vQmiGNkqCAWiZePXMcLeVrconAvVF44eP5YM71qNFmWjBiJoQqNNBGyC1SKTaYbd4bUuxRUozKZvCmUDdh1k",
  "key7": "4gqEg2977A6WxMF4HjT8vAP55BjbcuaLC4WYqWAHgccitw6TQYGpN7KvTccabimtrPdBpgWWnf27dRqVSpM2GJ55",
  "key8": "3hExvUQK8QkUsGNAzLp6CkxsQFmrqSwJbRkmEJD9xKgLa5mVbVbgGJxc3hkCNgeTs7uAhBHnGFhd18Dkavksesn2",
  "key9": "3VsXizrSwAieefRNZLM65UiwfjFFPHbvCyGJT1KdKcZdH7cmQQ8VtE3BbAo6P9BRD9PKaqtDfRApmWA9j15boukb",
  "key10": "2gjS8yY3M4LWgdcBquEqezVAnjjpLUGgbSutmQ5U4r4DRnUAwNzvrpuoALWymigy4HhUo5LfFT8FYnMEj1KRaoFj",
  "key11": "5VHBTiuNpvHPo29hpwVKmuf8roPK49TEryPuGXeBydUkRAQxC5nTQ8r6rytoVkqpsfB5wfrd991Jgk3KKZAg5TKw",
  "key12": "5t9GswKs5pKDSmU3TRMnCQ5osWsn8jca8FJLgpxCfELYug6a1RVYACK8ZyDLWMispuJV9YjuyzqAZpYnDfoNEjFr",
  "key13": "NFkACFUztBEj4W7aqosMcrRBZ2h7VGpZ976JtcAoxwP99g8NTeT88Bv9so2TUyogbWTUCZVfMxfehiXCcU2c2DA",
  "key14": "2fK66AoCoUGfAfxVU7uyTPyonExTJkPRKGHixfcwH2qfC6ghxhbKa4eB3K7yGUqJRtZJdGW8U4SeB1eejzeszmnd",
  "key15": "psk94dstrUZ9qMpZK1TpJSzujMBNKPLSoP9EPd6bqiqWoHNkRRVLqqsjs81ApBwxyPc45YVxzj8FEBAMNydxoJj",
  "key16": "2qFsoTrSHSHDu4tBMo5eJjyauDWyhwZK1K7DaB4mq8pNLXNywK2ftqBsRPZUh9uSu4k3Ea9zhrkxsWQ9NYYf98Qe",
  "key17": "4NM2RV2yoEn27pHqaNt8ykk6GV6zR5SrKgRbuZUQ39tEVidfqg7XmyAQK8bQwnpqA68JYf3nw9w7evvkAG2VogEP",
  "key18": "RTMecfFUHhbmwG5mAQ5zU5hZ7oyezqgLKsET2e38pbunZxYzUfnTgZVuVEf2ujLLcdCmyfKXoNGTLGQXbhhoZfQ",
  "key19": "57cnG3BxdUgJoXFbxW9P6MbBgwzvrwjEZkd33VbZu81uk5ELW91TznHySgSyXG2BcAQmkFaK7rXkEJqMscgJkfqK",
  "key20": "T66U9pPiDfmg5Hd93GHib1pVhedCv7eWYeSz3aAGk9H7jRURm6FuMGYZwomzDgZkNpxRpERzZqV12gHhSw6v6YA",
  "key21": "3J2c8z8vUq9KrYXaFGK5kPWCQfAFXkKSYZhcrwDBMVi3PrEPJnfvbZvuqDyqZz76rtNL9MYp1ifscksqpThWmqvg",
  "key22": "3WQRSSBgBbRVRWZ3YMFKoQdpuzy7fiM9JHwLa6s8R4M2i8Lf78QrMp3EEMQm5GRqW6Czo6CKPiuGPwZ12WeE6USG",
  "key23": "5Fg7un48XhED1qjPGNrLvrhpEY8ozaZzcd6LCzoMeJkec6oPgUrsKYKRS5VvxThqivTTwgo8TYs6m33FGtaFuwrG",
  "key24": "274zNtfJEsS314E9sX3TWKfMm2NmSt4Q2morqSwaLDUKVpYHr5r1B6FFRL9ZBP1EDLej9ERNJoiU8B7EVYSeZJ7j",
  "key25": "2xrFCZjg7NZVLMAKQaeFsUzdFaKp3v7KMFVq8vJQTTJvEeLNxa3vcM1k7b421r2nhpoyb53ZU99sL2QLKhDUfeq3"
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
