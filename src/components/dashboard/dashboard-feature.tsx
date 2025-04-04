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
    "2hEsaR9G1zUPeva5G9c2izmJ3H8rDWbyETfEy6kK7rxARZ9nfwuh6AHqeh27KePuVBtgCnrwnqp2THzcoSUra3zM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dPiR9Nva7c5t5fk1NLeReojyyubRpwUUuMX3R77W9mdeC9WV7obW5jmHcSALK9WhkrLgGdLNnjyRnenL4AeWwtK",
  "key1": "62iXRLEdxCESnrAzkPazLeJEjQ5W71TkBNokTefrFo73j57bCLpqsV9DrgkwCwjqqbLeRAz65wCH9JaTXMiUtUo6",
  "key2": "3jWVU75BKi8aSjTS3yuHBy4diu3LiCf2xncCYE8aEtoTw6BFjdHb8vSYWxtD84gi31PEhwg9L35bHixoHR5neaMh",
  "key3": "5orcxxugdVcpPthsLqP4Vbcg8CmEHbyDBEB6fg7kneAwssTex198ZF8gnEJX4HL6EtWZagaTY584sHWXmks77qKF",
  "key4": "RErTBrBBa62mpYNktZmVizJtbjBHx2BmtfPRrNdqp6GwHETrFrTzQhpE6UR4AJRAxdwiY6TWJh6TaWMXRrM5Eg8",
  "key5": "5pxvH25vXbWYinedCxo1X2FZyAny6TWHHJXfC9cgUzCiq3TuC5ZesVUSYdVCc85Nc8aC85kdgyXNLaDjG9uPmxi7",
  "key6": "3tD3dH1gqWtd7eQU2fd7B9fz8J4ZTDNgFiAJ6rWzBTjomc5UG83EKsa7yhzjfYEfTNGcaDr9un2yFJVE16zkYtd2",
  "key7": "2BV9w5hpjuMzxGoMUCAfhCc3fETKaCjCYqdKrfjaS9yupULGWgATDVwD66SAS1PtxqzAznMwg6N3FrD1h1PXF44L",
  "key8": "2nm6ALHK6A9sqCKf2qJRbZMWnACFAaAMVdU3WSyS5u1yNRcD1CZJZPnu9YMuYinvRTN2uuJUYix5NEtxZ7ybhrHZ",
  "key9": "2y3KRLP5yALnX3ieBhek1fEt4AndGUfxfzJP6LSchMYprnhnNzRxMQKXdXPuoyY1j8pZJaeeZrSveuY6N6QoYTMi",
  "key10": "424spp5eQcjzfwzGHzpEPirqAwYqWnZZLXSiXLrnTD5vvppzLRwSMd8on5DqTEZLk9DSEHr3qEK1nHkSEBnyeUpY",
  "key11": "3BbrjwgwaYHiTchtHoTtopiDTfn8oYTSE4EgCHJCqUW9dkoQtbKcAuqsN2JLooU9ZW2ZuUcRGkLwokEw7LRgUzar",
  "key12": "56tp1wr27E1d75EpWhkGSTh495EtgY2hBMDHFbQ2R2zqhFpoyabyDKHcpabrTAgWKgP6jpV333t3A2WtKBNU1Xyb",
  "key13": "52SU6Zgi3Zcq2WLnWGn1xRnm8Y9CLPKzPpk2kbFBfkYu2iLahPXh2HQJWexFo5qWuUme54d3x8Rj5hV6aWEy7y8J",
  "key14": "26PmDTzZN1ynND8j4i8wPn3k5GezvxcTxmE7RUTK3BcBweGJK1YJ27QgQrJsx8F2CeEXqkL69gLHKhzGdZ5PsEiP",
  "key15": "tByq4LYPvCYxukdbtPMDcvJsZ284x77J9yqMGVCzs82TPE3YQKsSz6qMXHXie6gG6kYL6yjwUcBRvscgMrUuP1A",
  "key16": "2PbPpbz5397vqYYXkK6Ydy8yotcqatfnfpcTxjDtbH8znrCk6h6ELQGEfx9zE7y5ZmJpN2Tq1XLFkxmDyzxCGdsy",
  "key17": "3LTfKSDhbMUZAuN4z211z54Cpw7AcdKQ6QMfexCzVGUSadXxpoXLtJH5kAkC48r5AhG3cS6HvNgx38wEFvHQxknr",
  "key18": "EQE7e8HT5MGBogQwiQUMpwC425DjhMcLC42Festoa8Yiejc3FWU9wmECf33xo2AHQDM6sx614djs17k2N1nxD9R",
  "key19": "48f8NtjNmqEyXZAnM1ZSwbGXekTjQL8kiUzwsYU7ykADgbgDe5fA9F2ryt7xmpYiiUYwnLj63NuLMhBrdB4BtkLn",
  "key20": "4dod4VDzkdskzvRoJwgkM7x4C62gMm4odu8cGTnmn76mZgkQE9keubZ7VAv53BP5N3evEQA3pMjSxWm4bjy6MDfS",
  "key21": "2XcAUpAgdu2LsU27kJzzTcwWD2Hkw3myBvapoVsCrww4znZWXwbzVqH1G8speagXkpUQzNcyjSsesFRV6RbUMTvh",
  "key22": "2AzU17Lg6PV9ff6mUt8mNmYauGj3NyqYcKr2o9gxvqLBXDALbPwkD8ZNR2je4JS8iPVcUHYE19LK3xWjxqixSnhM",
  "key23": "4Z5k2D81ABnQ6YbMBoxmEgXmv48fbKPFF8QM2eJjjSWV2dtXWik9K7px7oj1U8DPxQd2QmrFt4SBX5xBYV6WgEKV",
  "key24": "4Pc9ry58X2MXLwFYSpUTeFWeHzgLGZwQP7qezZEA4gBpLWjSFC67b69X3siZeRz3sn5FcuebcDsDRL27FTENViq3",
  "key25": "66w3jj5mzLu11E4cgGkPS5HokENzCpVxDiwkR7sw2pUiSd7onUgnZufVTHyeWonXgznJ9SczpyQkZFQNyTJsnaNQ",
  "key26": "w6rgPrbpXCqfhnsPaCHmgeZ6VfJXSVZ3r38ruZkYJ2frezmtWsX8wbEXYk3csEXrKTP9oXTRdByGPDmyR6eZ86Y",
  "key27": "3uwqyA6d7XRCYex1niJNffPDNow22vnbH1xsaUDuoQu5E4SQuhtCTBjj43pxj3RQpBVpNjSFoS7jmBwawWk8h2jJ",
  "key28": "2KNVpjvRzxnpo1Us55dqvWb8VS8KxMtPdMpCZkza2ToZEEG7Rw59rE24kKrdYEorBaD1pyEyJSqWW7hLf9opVp7W",
  "key29": "KCXkGuGdWCfkuc8EDj1uymU7XdCgaD5t3UEUVK8BcsmXJ5rFZMdxb6NibEDC68q4JWMZgEbFc2JkXCGMcmCiDs9",
  "key30": "5esUyWWBAUe2uTPHyRmwABsskWqw7Wq8tRdCxwFwadJPZFH2ux8eDENDM1E6ANFh7AXeuvfdrg5VEYYbmpQiKAtR",
  "key31": "4CBytiyFaiqZPn84E6qg5658pFykmHyrZ4cXegjtq79zSz7quoVU1co8jQHFCEnCxXnBhJiLf16ww5h42brmGtdf"
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
