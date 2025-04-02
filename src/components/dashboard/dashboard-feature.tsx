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
    "4VymmRnbsrfqEx6HzkoKVZWepLj9kCAX25b74hXaUwTX7JJhsRHsezXPYMS6Heg9fBeNRF733jVoFjf8phSr2uVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HjdGKpPawLyabnf5PXYfcQNS3dXmTV2WaLKqwwcXoZSR4M5xU1NF1ycURvoCD6aZM8mjxfnqdPX6R4bkfAmNYu3",
  "key1": "muMjMsuNKXEFFeXTj7abfs5SRXmkR8rzFTakStWtgwZEEAvRHciHAktgAgT11HfN3s6EUTuLJYpiBUHEbZMeQkC",
  "key2": "WXaKDYJQ2hjDJXwG8bVd7eMEmPeADJTs4kWBu4jU8XkBgtGWcv8fHgyxYVLnnNCGSGN4XmJSAGz6nBLLTCDa4j1",
  "key3": "skJ9gSnvmyPVWdWkXKxdJRxoR76jECGTMDuamKgu5RD7apW6GKHnMMgENKkADrVMqEQdZymdg6d8r4gUgXFC8VS",
  "key4": "5oZbiYbwTtqThAFLbGS672wTN6Awqfu8LVVrXqhLof5RqD5pwGua3d8wD4RaNjVB5253puWGnrdJrqYrqnxqXa5S",
  "key5": "2CTcGXP7uNeYSrqXDq4jmNt94cBeDUKvuo19qqhUW84ipsMCthuFLR31m6HVPeyneSXHXpaZ5yPmYddQFKqkqzgG",
  "key6": "81Fznpg5woJnJutM4BaadXx1C7h9wfxAgXA9hT1XXDiLEyS3X11HgRQcJ6JnK4ZvDxPwSgqrmxUkixCkZHqNMAT",
  "key7": "5nSRJr1RwQg4BoBbfKouGvWoko1cSKMxG81oHfKTgN9wT7ixER4n5xUYgtsZZ4bsX43yrsV1AsxJfFGAN5siEdSo",
  "key8": "2czz8aQD9pLyeHp4HJNKdLM4P6UKX943Su3ZKDbDQ8BMdSYWteuBZ8RmSmw7arYcWwR7q6WXAsAQQgBXx7GFXdk8",
  "key9": "4bf53TZqQ5vSERyseck5LY9K7H8QNSLjqvkXtB94jeMW46jAQV378TB1Y9e8nqFB9NeRQHVEE6XE5Q4gybWgpbjJ",
  "key10": "7knFSW2zhTgojoCZZEbf6gHR7enaF5kYtQMwqXxeDV6CRrM6eJ6qDVrDRCnMaNTnRqSEpbvowVqNnRr7vQG2TfD",
  "key11": "365CfxMVu1TnydDQNtPx5Ht7GowYSkuL2hehivZzVEr2tvZMj3URvSCkNGGcsLBAB6s2FSSdV2WiN2fMxhECoTvF",
  "key12": "2SbCKdneEVsnEt1V8EgyPChfD5VVWwRDE61Wo2M4LN3cnYmPZB1ujTzvAAQS9AnCyhavVNAnHSF8gAAMFkpymszw",
  "key13": "25DbGPWNAD5yA8eTAVUjWHk4UgVNc7eDaULcbzLewe44vd3iNvAmqJsF7qpFH411GwDb6C4XU3jHs3igMuuzgNdY",
  "key14": "2rCjB1CYikwiFngzeA4oQbTUPkHtfnSCM6Yrq6sZi2QVbuEWgET3SwYnZnAbYS65ydEp67wWic9kvXGLZnSr9LQD",
  "key15": "5MRiahf1QFzgxpcKrupUTycJGAbrsVukzhkgmpPT7RbwLqcL4EVq5VevXWj3hCiHVJHeA5Dy9r8xpo7WvbqaTu8t",
  "key16": "4LcgB4ZapzJKjPwSTmsWdi1Bo86satshvXG3ey4HJCVacV8B19qddAJjRzTHGt7vjNtbMGUM9qJWTRzkwMjTobt3",
  "key17": "5bwn1peVu7vzAeHivSuatYKANKr3cuBay9BUxMjD1rC3BdXhcojoCc7yGip2wKYu8m24EqjUtgthdqJVfuuQzGuR",
  "key18": "3XspvqfLVyxqhDyrTVQBzL1pVBHFfU8H6B8JKXK72Uefe9KeeJrMWWXJBMCmREMogAd3ST6yVw2ZZCWXSDznxBSz",
  "key19": "5mrYkDGLMKHGUmFVLga63g49PeoFcrpxGbkh6i6d9L24h3aWAmjYuT7f3gUHv7Ph1UzHNDuGRLErgSnNDqj2yizk",
  "key20": "42v8PxoW1rpAgxUYqG2kHjfmNbT4757QX5PMAo43Z81DT2zfT7sUdAx2oSHZXpZvFkUgGRYMSkwuhR6bugwpH3Rt",
  "key21": "3cQrXQVJPeSdevVnVAbZHF3fPEEQfqeap7LnuzohhXR8BUXDR3mquHJg6jXwn8kRLt9VkC7twuPCK2DLfJfoWbGg",
  "key22": "2Rq2TtZndtQRN89EExUQBNgPDXgHGufxMT6phCykxz7UWRKN8DKDTjfj4e9UwJK3tDsSmN8skCjgwtwrwq6w4AgR",
  "key23": "3cirgfrtrdkedUkQJCwiP5R6hAtsTueouQsWemKzo6um7g47EkpKFY2KbQu7h8ZoMAWa6hyPVcpK56Po6Cy3Xa7u",
  "key24": "2vhEXTfmZTEZNbPkSLoRzM6rJ8k86oZ7d2DVaTHZuYHqgfwJSDdZXjq94roh3DfkSeFFYcCoAfhYuk4tLboN6Rsr",
  "key25": "63GQFjBMghQdtUopk59mt7RLj4BNt7rjdESht6Y8Gx665PQofMocZaMDA2AHAopNaqUL78eVPDnDfeu5iqtiELjC",
  "key26": "mnmLzHhgcnxjW5HJDr8Tsdq68fxfPGvbMZj4M9rfkHSYuutKfQbnoUtzHrmKSKr4pcERdjwBySkn6jkfReNaQ1B",
  "key27": "59jZSRtcSPaw1MGf8hr3VgJEDAE72MhBS7WbRTor34L6gfTzrWN12it5gCru8rLtApwAXwRHRf2fJXXBkdfBC56",
  "key28": "5g8UeRzELNftS92v8aY66XErdStPJ2mC8TK9uEc7PXgeBRaf29sQDNaiVmMeqaNEiKGQPmabFYjqgbS6e9y2taaH",
  "key29": "2Kxz4Y46avJst94WtnLM3D4dkXkc2KdebmahKf2UKNxqjudGmghmUHaqa2EPgZfaVinsCa4RguV9jTjGDLEV5Kep",
  "key30": "3M99zVAu2HqE5sv2RzVwZ9g5uqxdBYDPawQ6k2U7KpJoXXGiLYYm7y8HP2x3VWSPYpks99sVfHZ7EQhcRRLT1DUp",
  "key31": "Sa7q4RDGczHr33rDFetSBa262yVM8tSjipTGMKwgR65kWZEv2PhMRfGJipDRQkbcchjgFi7GLKnoQifGVTHG6NN",
  "key32": "2a2ieVWsb7mfhdBkMzLMtQuCaqYeXKmt3hzKQdUfZLtJ3pU4NmzfkcfwhRPS2Q6yuAdJxKe3Ycm4GvhRGJSQrbZ1",
  "key33": "2Ke69WCAHzdezD9cqydjwXpCZji2hAk8sm3oZx1SXnGvqeEi7cAf9mMkehaEPa68msS9wMBmDETCz17Z8WtncCET",
  "key34": "2ZxSkn7C1oBXwWu9nQQyzSkKmP9PUzQQXVWnKQjhygniA1NoXMcQZW6qEhrLQciiojvn1nxcpQe4cLF4ZdaPFLPK",
  "key35": "32sD4nYyDboWiYtK2dFUTAivhLxC3iz7twD4asJbvutvdk5SZoRp3gEydhZ29Bx7FheEcyeu7rYM9Lz9NqXgCsQP",
  "key36": "gMUsuPAJAqsZ1mzgvkLSk7J8ppKVi2Do2J8cPuMA3NY7ySAWAAZBWcf7EkA1Tc8V5FQYCqjkg5mUpwwAjh8nWmj",
  "key37": "5sPnvfuvWmTe7MgPEQQcyWuuBs8qFJHcomGpyYHWDtj53A9tyWYfWyEgkXQ7ZJTsfqKaem669x5iamY9EyZ1yjqe",
  "key38": "31ffyiet5Z4KjGaYXtwV82vnwqXRd4C4dYyNvLVi3S8YgAy14qSqi7eWjxZoMJevgrj4qjUzY7qejxXss6xv41pm",
  "key39": "2tfJpeF7Ug2pp6iNP2cuC1HnVrDqjPjV9XA6Z9rY6qJJSt3gG159irefnwZTFjomZ3Hx713dJerYR29ryBeLxgfN",
  "key40": "44qJtQLkGvHuL4WjvLGUZttfJ36gGnuTVZCE92qK8ctghHehKU1nECb7QzCsMKKjftp962J2oBSDMSTHYuDecVjE",
  "key41": "2MFmz8EHh3GR7YtfaMb2GTPpUGMdGsGfpELGg5MW1Qs5BXB66WFgYJfHDrryNK6JMkGET4BS7LxueWmnZ5Vk2JJ8",
  "key42": "4iXyUJFg1tMnZQvFVo3YDYLMhMg4XvoJQs29RNZMpwRo9enM8hDpqwk7mgouDsNrap69WgnPyEWMtNLW5cmCFGUR"
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
