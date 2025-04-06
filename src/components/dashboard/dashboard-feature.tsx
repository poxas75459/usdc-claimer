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
    "4Nh24ni92nztJzfoDBsZtR23vqKQBTMt2REoTWqs482Dck6py3tQSwKmYUG2QfcecubKJLQ6QfsyXmZSYTYBTSTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eWz84vY5ke9gfNk4jyMMmLqwMryBNJfNM44cuCNKjvBkD4qqq8NM6dS14fwHY3jCgYes3421qWmzp2AyVe8aies",
  "key1": "2XvPmT4D8auxPtRgRXFeTkxavUHhvm1cFkduXiHtvtqvFq4YAzzGEMSepfJVdHBMyWiaETKV1RqG1jRc9446aK1",
  "key2": "3r8bbqMn2eWMNgsdugQm6Ek26F8mPbSvPuX3aKwzbu9ud1mL7La9LFoX7gG5ytDir5pix4EZPgyiqoZuQP2fnHcq",
  "key3": "61zBsSjKcMrCVtpk7KnsNRj9YhvHYo9AFHEsC68BbrymGKkxRwmDvsybi2Y9KGPdoWELgog521dmzDaKqV7p8nou",
  "key4": "3doy3t6u8JoHLXRpaRxSoyEfvYVsaXfbWaN8jCk4B9vSdqruxUPrFadbtXR7vHxGNBTeAqQdQKVeUPLoP3Z4YHsa",
  "key5": "38UabEota9dYeAJjAqa5oSKU5S7xvhqLxnkizDxnnnxdkfP4uD7q62EwLuFj78NZpGbnb7N6baLJyH8eYUWqoBXS",
  "key6": "369MxH7MnsBQd1uyCRNGUAJBK2PSj514jP63gmih8T9oUmRUwfjaUmqp8yhdtZMZeDsUsshUYj3LDbSQA5gWAfqU",
  "key7": "2DCX42PNA3qB6iw48NDdDrpn7pRNTfnPz4aihNgccVVg5GdPsfXuNxY6SvFuUX4qAZUbQyyBadWvGhtgxwo5Ybga",
  "key8": "2B7zWb5nkYL7kEcFTA5KWPvmoyRJd1EQcttuD1474MxxG5WR7sUAnmeytfnKvuHKwWi5kfAq6iXs4W3e63dZHfS2",
  "key9": "4QUYipBSD8rFSD1fM1A6rBgenNM1kVq8FJppQywksBLFiXP1TZqm81ozDRTFTeqXzK31GXD6xFLYFnCUoLjKfMw2",
  "key10": "2zbqAE967nJHwJtNqoDUHsv2bnbZGcC1WTiUycFEZi7Q44XSbRHVnayq9YqxRkKpfEAdARQ7GpPfTPr8oKGZRZxi",
  "key11": "2Y3nyRofFzosNe1QRxv8ajNoYAmNTfzPxUGX2vkmfhbzx3F1sqcZtkxjzRwBextCFsY9ckjax3nkp5jJCBmg6M2q",
  "key12": "2J1tXXuuWmdnZZoV86sgBo9eA7gyj5JvFboeGidajvUVG19yjynj98AsPBymmSys23P9YyUbKuQEscFZq1hXjntt",
  "key13": "5SRaTP1AXdLq69EM3CG5TRDKbobKRxQvLHgWkiVZapAP1SperBVW8gYpCLGr24zHs2NaqTp88rwyp42W3tEydTWi",
  "key14": "3dHQ4XSCkJhxHAcBdKEMSeDw1sJfW57Z2bnBUq4LKBrx2nV2iSunGFW2oX5wKNkXJxaHSomY77WYHB5e3zvJtfFh",
  "key15": "33buHya6BcPYywQMKNCK5Ab6Kr2tKYnZGs8jGpNmbF6u3Z61NTXPVmWipsxUKmRrRto6E82fUb3uRrnwXd7wtH3k",
  "key16": "5yUmoJ5X8mpCp6q5otKY7YmDZSFhDD4McpVnPVAByHF9h8F9GJsLo1VMsEusueNhudVfLs2kT1gAr3zmuUcXPnvP",
  "key17": "4qgJkyNLTJkBkqjoR2h4qFQFQypPzBVx5D3YRuWMQ1SVCAktovEkzGWdT4sx1eSG3X5UDPbboqfhTHfEko3rBodX",
  "key18": "2RuUqE4HeyPu4UCS13UTER6Hb4hH95xumrMmvZ1eTUGeruuBokbxgGQV9gp1rJAN14GTdg563s6Bvu16LDYzcmVR",
  "key19": "KoHZNP3hu6KkyNgQ4c4UAPfXn5f2VFHJy3MPcwjzzTKEFnuFJTvdgZb2XeYq5BHYtuzdujnRh2eCYA3tQpardg6",
  "key20": "4F9HtFNJPrYjLmXcbxiDvVvNwUsNrm1JVubBPGTPKufTfqbkhSwmpJPJ9TGWy6RhazbVjNVRxnQonax9dp5rr39R",
  "key21": "2AG2L7awiHVC7RhFfqJkGFJtKnpWQ6HjF3s1R53BCyYFWF4GWp97jBWaj8X29tSyJKdjVXW2Enz64aC4MVrHkynx",
  "key22": "pdkhTVLMkgJ8an4DQJmgXnPGDbeWkbCkZn7cEEPq4iDKKGcdqx36iSvD6T4TSRvri8rRzctMCVTFm4P2YBF8v41",
  "key23": "4gYzX1g4W1jhdbX3JNfUbAVi1s8AHEXKta9k63HEgZjbw7u4QSu85kiNoHekKp39JMwnKGHxUP33AciboYgfQ4EZ",
  "key24": "4Dy6wRiAAUg5CpZVQzU5pGrcpSHHrpXHTUpkJfivi9Amu3pHa2vVd7usLMbHJWnXyV5oqY2dmd7upXhgL9oM2C5P",
  "key25": "73beEVbaZAXzCxMu97Tg6Lg2Sn72V6aKQZrvVgpzKQhhKDjH2XAZX1zMZuyJDgyjCDEu2oC2R62CT7zUJokyoZj",
  "key26": "3kariHHCQqjRpVMHmmKaKSky1MaH44t487UDP1HiSGXcoVxvYhBKSks86jSgMAXxi8hZftvxZPWCuomxfikXVzWM",
  "key27": "4FZggg5AinrVpDYEKbytuv7zFV8CFVxjGr8TJeF1pisnWHksNu2VWy24c3PJ5Tf8E3jAbAkw8Zn5iDzPUZDp1bmE",
  "key28": "T1L5oav17o6xWfGkpkPFX5Soko9wnUpTnrqqwnVNNPHGqyy1im21fHn4bU8Amow8ASX3MuvMjNdCGEC4gapcsa1",
  "key29": "2tfYT63So9sYrCnxE9bV4tjjkYjGh2M3xcB3QJ63zYo5hvH3RAP9b97Bq2s6VjqbUQH2bL1FpZFm41iJAH7Ctcbq",
  "key30": "2YMrp9xMnszWZ4F58FQqKqgCkydy7YAoyvHL14JKEk9SvKkETQWQZBLNZtSvum6t3dRMyVk38RBLEnc32JSuCQB8"
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
