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
    "5qGp3eyL55AwcStbk2E6ZF6QcqqdafZc61FHTfmZmxaRDzmWhsJHyDfQSuL3MEBSePjyRNAZeF6oMTjTb61zWvP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t5VBMXAVc3bPrMNwnMm8RUUZB1AxsDDSJpAZtLTPYDByLRyi5hyrqt37QWNsQTv7ezChZrdMKMhyBFWubyLizBx",
  "key1": "4BrxsbiqEhjJHrH96dMjNJButZjydEyDMdJdDvc7MZtcGg4kF4VxE3wWtNu9RaRhjziY9UQuNJXaubovFtN6scoh",
  "key2": "2n29CriLJGXzmGwXNbiR26pMb8iwm7ebjdtMDD8n92EXJAz4YycUJ8rSCGJKgQvch5vP82jqEn2P8hncy4JawcVP",
  "key3": "3Z6a3roJoioRFMew7yazhHVZGCAb8xjrfkyrnwagyn92kANK4kYP2MVAQGczsGwvRcKk6bwzTnvcdSJ9EHgb2iNL",
  "key4": "TYGe1tBN1sh8qtHKbVQLsTUnkw2kZSs5XmoWS8JWisqPL562ayqtnNEtQihqDFWW7odGJ2okoYG9VooPyFz6EAq",
  "key5": "4GnCmuXwHQ4QxoTfb24g4R73ddBBrZ4n9iM96XnYko8eXr5iXQggVj4Ch1Pe7gSfFPLLF283TtauKfEWu1B1p6zp",
  "key6": "Q65HxbYvYiHdtuPm3EtmKwzYzbPKirxA6oA8RgXuoninKGUatzcbUYKYpRrDozfYHezciSvcyjboWCUSbCr7VoN",
  "key7": "5CtLVADdTXbUH1RxJdzRrVx9GFABdT3UULWJqDWSRcB5kL5hg5AdtbSgqVsuy3Yc6ZGipja5Xed48EzkJwqUmuAY",
  "key8": "37u7QjJRYDBNBofKUcxvfBEPozP6xdMRqSsWw7ENps2ahzeDXU8WhLhemNGJRERmtxqJ5YVq9fibJ3ju6e7jG62r",
  "key9": "4ZyGvZ32zyv4oTxqJj4u5a1zBUmcHiBesvk2ezP7xaR7auoZzjdqX3DuMKgxhzVxcK2wW5grkanyurUZyH895KDW",
  "key10": "3SoimQJiezwqWF1LXkbuHrxxvFWM4pzJhfye2LEo9KZLpJpkbze7QV9RDKzX5kcbvL35WHwWTxZU54mpfCpuf5Vi",
  "key11": "4S4pUJCdLRoi1etqedgs1GPqbkPN67ry5qUsJ5vDyDAkaX9UWNe5z21NqZZF4yd64W1XEvXMXnJtFYhyHdH92tAR",
  "key12": "senddsFUEktZLJryA2vgpj7mRTJPJLBL2gGVN3z9fq5ywSvEdLMqzbo36wmx1pC33KY7QVxWqenPD9ivaEKYNe4",
  "key13": "2yRvJEo57WVkSWXT8b62yw9cDXbqsQJ5pCR6cPYy71wAaG92ukSsJSpmKJcJXqCqS1WuUyZ1fnMPjYb6egHxqz4N",
  "key14": "26W1CmUPwKiLVB7Qm1gfaFGwXUHxmTRjZnLAJ28cZXAJRcKHpz4CLp2GgxPsDTGYJF7FtE7rGbhJ74goKZ11YpBK",
  "key15": "4FS7wuERViN1HWwjUF8er9E1kRKCYnSumJsrdPLMKPFPCMZFgDoksUWKgdjdccrBxUrSiCEwDrDXhTpWAx7FMhiG",
  "key16": "2HupyYvXHCPuM8B8gqPsUAQHJoezeXAcXNhUuqox1x7He5g7Hhj8r21CRE6hfeq3fA94zKyAZgv1pjePsboqK265",
  "key17": "54PzcTB8x9BwejokmSGd64ZyKb3jzQjXjTL8FpVj6o4KHssZJvkg6pbbN7KMc79i86N4V7PJ8vcruyxrGxZr1Xbr",
  "key18": "5CmnyCECkvTVKu5hBbp3sUwTXw5YanxcysYBoTj712BKLZq56ksmTMxMiVdPfEE5VVb2egJPYixyCtrnv3LNuzqR",
  "key19": "iDJw4yivXuDba4JUkkZXtx4mNsBVXnL31t9hskLSPtLjYYTqSmbCrgw7XBQ38NJYQpzPzmCv4a9umRMXLRsvwz1",
  "key20": "5eegqwD5omtiQbJX8T97TNnmhvFBYWnkN8zMi79PJxzZkFKWJdWxauUdWJXXFKmoGfQAncRQDiNbTDm14fA1qwTn",
  "key21": "2q5LFzamkbnXminby7T5MUMLw61aCYcZcfWevXXUgAx62WY3ofy2JBSoPEnkuZTqQwwdjaXttKVySmC7xzpTvjFK",
  "key22": "53Jk9Lm7h7rLEE6WnbRg7B8Y6PTb3VUrgmmpxF2bVRoHXp51Y61BgJznnUmHCD2FBrrHRPgtxH1sNB9BFgDbZhqD",
  "key23": "4GdzMiXon6uiDc2YboEZxZkAS5UYWFik5ts8AxRuRziDPkoHEEph56duBXdPMLu4GqFByhAVbZSKWKeX8KntxLD6",
  "key24": "46Td8fawf72W6VFjiijaZ31fhSCB96e9HLT8DAm7hFgjzT9gENy2rzBv93ZLv6YKpCLLnk7SK9HnJzCc4neZjfyD",
  "key25": "4C688CAzSnXyPHR1276BvJqGrGEsHwxiX5c2jCVHLWjuJEmF3VhUKB9ZgHpwweLu1uw14p46YghkQp4yzDyJab7w",
  "key26": "3GgGy7QLfmL9xWgZVZjwEWw3cwKow3UhzkKowFvBNLjud9KKcYEZiQoPGxBLttbTLe7TWa5hcAp3HDq6X8AdMfJm",
  "key27": "2PtxqDvn1PmAvhgV5HYTFDRX8mZztxJTTxzaYUgef76mbUqq1cKhk1vw3ACnKxy14xpeELbgDUyzYYz6gzam9RK",
  "key28": "4b2m3HJuchc5Q9aTxMn1Q8F9Aq2FVeYGtzHAhVcVuiJYfShwTfieCUCLeCjoPUEiRFmryoUHyL5vtqwN3MJXEyhg",
  "key29": "5Xh85Nx12gRAdf5t9CeU2S7tQssC1CuZHJreuri7StQ2t1D4ThgsgRAw1TJG6ReN3q4kmaEfDWEhpqHd7rgEn3v",
  "key30": "fFNm2jsju95oChCbwGE5Rs9hXrLYjoX2TuRyR24LhvgcF7TN3Fg7yVRbCjgHvnUpT6V9Uhf3xhuJm8QciUiqQcs",
  "key31": "3rYTxxQFeBcM1wGxHd39rczjYadgFBoxB22rGUyyMKxZNDkTfiqyBTyE9b8nNzbkURxF61XEqU4dpsHhESRVoXXA",
  "key32": "4BGvwe8wea4biFRx3ppLWU6NwAn5yo1SvYd1N7PkPPXmu2dFa4abKfudA3cARDDsQb65aRa9rqF6kvY7mEY7SRt3",
  "key33": "4bFroFb7STaWkj4dGHCdGUxzdoZVtoHB9cJL1Fk2aVn18MyP8vXFVSGn1zvqFK4QK7EUPwUhMHxxZo2CwnWVSH2K",
  "key34": "3UN3vT8oLr1TD152obTdcC7GE1ieUkL4532jVu5Rfw9CENBXfmijhx9MZWXZ8e2FgY2GQdXUGeUpaHs1PsuuJrmk"
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
