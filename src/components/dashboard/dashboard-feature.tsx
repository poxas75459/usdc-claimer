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
    "61UminxGj3iJ2s3RzjBpZwyQ1jUnMgZJL1gmQ2Vh8yALHJhxntuPM1NCr2YeCrmbw7szotv3cVhtiWRsdA4xRijM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ngh2XLk1JFQduVpAsijeNxS9srJv17ySbEY7wTau29xUts9tSFnYQSG4JDzkHKHe3Au2tvdVuU1GCSrGwJkLh8T",
  "key1": "PFkL6GQBy5iw4MHJyoX7DJe4R4nm2GuzN7ctJhzpsDxnhuACRamiX45SmUVXKzNap2KEeqPp3aLwxeESZHfzwXN",
  "key2": "vZK6g2H8LnERjtdgMULhTNUacv76Ttp48zsM5mv58qt772w7EM13Yoktyx5skmSqQNVboKu4kfu2Y7irDqMiE6y",
  "key3": "VLP9RsEVXRWrdQB5AvBNjHdrpDnpzyuTCnK2HsETqFyRnU4s3PGsyuA3q4kS6dtjJ9J2dwhTT5nKz69ouhUW61q",
  "key4": "SNPRyTZoGxBrgTiQz7wuDt9pD1cR3pCUJsRjitL2McqDW5XZUXLpjzXri7XBYuqH87SfLZ8YHEQNhDZcBYCjzqu",
  "key5": "iaTU1BZfZMFxGRARg9csaBEb9D8J36t9BT7eLe4KBavtgbuQwR7dG9wbJrzjDotvTmJ5trW6K5aQuanzA8Uxgw5",
  "key6": "4V9NDs5CqW6UhvZqwBJ8TRJw6kea3xte7C2BF5cSbMfsjCwGYouxmUiPrry4qXqSfPrztmRJmfDvUcgHeiMGsBHJ",
  "key7": "4EH2zU6XXuLHJp1MYwjPq6obCFg76fv2gLrK7pKKNK4kXpTh9BZiCigrtuExe2zQprU7j6tUL5RopZ7maJRzKXP",
  "key8": "2zGoJa1fH17Ra7z1N61XeMsgXqN2b1Cg1JDgD8zP5HT8toypegtaCsqVnrXmoiAr22hM9YptovjbYgvPHhyJdSJF",
  "key9": "3HdYMgcXEQ2NZVKWKZW3Dim4wHEALdE3CHjinRGUhRu6cQLBBDemBYgMY6V8nbcozABdWbmZ6CRCSLjheeyY2Xxv",
  "key10": "2jHnnk45noMJePCS8ZXkJhqwUVwwmzKxhHzHpeemQwvBK2Qs5TdAG7uZKuU2zNUtNerPoPnLSY94AED9N8EsFqtE",
  "key11": "HzD4UxvLbyBuEMPSTyY3rL8gnmeMZf9zqZSceW5UV2UBn6PXzHnLAhKPGykuzBtNDccSrenTkJ43HCgQBRvNM6S",
  "key12": "4vLpKsmaMGWNoEHSA8Rix1h4XksbU2Mq8tmkJtJqQTuYwyst2kkBa6zXXhHhYiCUtheg7yNeysq96XjvfsWx4LSK",
  "key13": "gd3n2YmpTzKpWGcar95rGW11wNyqqj2YuKGRiV4jSA3L424fYC6enSi9jToi2BqwC4HiSe1tXVq4TskRCeRBsht",
  "key14": "4FaphVp934hS2qMYza1FaHCczdCmtEX8jpATURfaGRQeQyRoRJ5EumipfxuUVhxCq4GfDZRXBnGv7ydaUYeXpQxH",
  "key15": "5zFBsC84dxZHHM49DiWFcoHW81yU5jS99aw8gaw1wFf6FSyhxLBHxLe4mjg4XqPkc3aRCm2SFXwSzCpsaaj5b3Su",
  "key16": "2Ej378JiorQ9jBG44dBwF4jcWTrYjZPprDgTxa5cZydCJxiciPopv56f1tguvD91yoAjhWnKJWsE2JZXs1icSbNQ",
  "key17": "29zhz3FYBHijGibMFiix8JWZXdqA3qUBB5o4DSEsiZBfqFCugtjidJ9xKMbMvMVEwo31e1LGM4jgNfaGePMXVijy",
  "key18": "5kxSvjQSes2XLbVEHT77Pw4fxvo2MJv6diacw9LdM17vV28FnYGgjUY2gqTkUVGeqtuisnDdPE5rD4qyXJX2keQs",
  "key19": "23ddjkXPaSHb29Wteqtnk1scc6yWegReXSTUyTom4WN5BHpK7p5o44HaNDW4TA5MEdevPUQnj7hJjx95gXaeKuEd",
  "key20": "duBjvMyp64fQwbmcL6FBtAKWcAVpMc4LJ5FkTa6dLGL9z3cx4ASzKtFdbuaizrJB7GwC3qMtdf6Kvb9pwLtHFHu",
  "key21": "44EHRKiECc4bmVdydnoMvuq7jv7U6HK11TJW8dwUXi8QCVcUp1wreX3XmDZxx6SBp9RJwEHsYEk6KvDxbaYXR1mt",
  "key22": "2DeWHc2qEkFqv86YaSGktVhBZF7Ec1oiZk6Ca4MbehVYAdpmgfBYqKctaKMqQhf2C5q11nhX68cEw7d31fNf4DsJ",
  "key23": "5Cf3EBc2jm3qqhr9ijNuZ93M7c5qFkgMM5UboZaJ5EUMJYrk6z1P1ZZAxd5S4vyGZdhyqbE6MDYyCSBFXi3nVxvT",
  "key24": "2UjT82E6UZMEFENbNHTGqLVvpyXnd8gEgDQbN5L3AxDvEGLxxShCeiEmiagCjbVRDkVYunAMxwohnpJUSFGMskKs",
  "key25": "FP38dgkYaWT6JGodtMUQPUVFsYCzUqVFSfCySR4oBMtRVmxd3gK7PDWueTX5f5v1SQqZ7prAWPo12inyCYE1ztz",
  "key26": "5UBSANa2MaDJAygBtMoZeWuNX2JCH5ZtWytMv9z34cwWpzjKvBuxrXWxhskXU3g2bvsbxSymJh9QLTiQVYErNdXW",
  "key27": "2oqosizqoxP3kJASML3WFvGGmP6ZPZzgeLRAYJn6xwBtWQq6pgzxGsMBAU1oAsMQ2F1SEHhjAYaMcNe6SiK61Pqg"
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
