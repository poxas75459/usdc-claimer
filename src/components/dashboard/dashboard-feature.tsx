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
    "2ESGk35mQBsDgpcxHn6kaUXMNVbAu1jt8KKT5LRFvds2vjfHAzaZiRrG7V5gq9PRF7sbRrBoy8yRajZPycDd8jf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qzkKfgX14gZ6Gv4dsbKStXsKLPD6JPFwfUe7jBXFmFgvYUVCoNaXeeofBrPfriUiuS6smgMmT9gMM8VyLUPfb6j",
  "key1": "5U2JSsN1Tdq4JtipSeFdnxhp4Qd9We7Agte9aQVmLcjiRUcLBJ5qkuDJsvQEoTr2gr3vyq27tvEYQSb1DVH3cRFv",
  "key2": "3ETDr72WSx97LSo9bnsAPFsgcKLyxqbjCtKyh7AboA1qKVn9R1mJHbpYC86ok2JnovWof7HWMFvnChwuJLMC2Ev8",
  "key3": "5gQ3XCQbuaDbXN3nMZCiFRmpo8Cf53qVNp6ftpGaNjFZeqLXsZoFYJ5Bj1K2E12nfxD251AM8hVRazQ68FXdBK11",
  "key4": "2YXHH73vv4uU87EkrtQCQmvmtXrERYvaB7V9fby6ya6T6zGNXxzBuc5wNSc2CqNDW8ucYxbE1mRuek828V17SMFA",
  "key5": "5WveXMGd2hHgMNQnsb3wdMKEojMqJpo7Di3pFJAhS1rqbwieBJB7mXTDSuxnYcDn6SEwHYehu84A4querxbmiAg9",
  "key6": "4y9wbZMJzdTobgCwMZJyRfMiXAPLwybuUPWsdrHxzZN31vxbcWNcuURtnoYT8Nb4dd7LwTdY3SBPMc3eVq6CbgRk",
  "key7": "7jNB8UeyMSTHznyBujYWtnr8krzLhsRxUQM98xt6HnwXWeA7A6tuBpRV46UaPDbudoURv6SaJKJnJAFbQdrm9fM",
  "key8": "322u2bMfxybd3RrFQYbhnqFFaiFqkDBKNcFSv5aMNHqPLzh2p1fpCyqZdyKvXgVUMA31K34HEhKr1Z9ikyT34tqy",
  "key9": "4FKrAcsbsnQp2xWmzagwG9eggPKEnzE9Ljo16cLrBpHe3bvMvJ6SKqpC8WRjT3D68BboKHJPWDhJ5Bpe6cFVk4D9",
  "key10": "26Jhg2U4Y7CcrTLsZ4KbCTartaceSwd6tHWkP5PhmLDuXaK5LKs1Hcm8dhqoCT1G537VtgQg5oaueXkf4ihEDXZH",
  "key11": "3UzVNpFbPtVebt5YD131RNa8fqtJygaCabCN3gFXQUQzGAnJzDZseTe8VLo7rvM2A73Ungb5HGZzPdx3U7TCXDEe",
  "key12": "63qPtxmxtjjvqjjc2LvF7wpHUA2hz6cDiqZU2Twokhd2BhCaZwNouTbAeKJHPWgourzF6ay5Q1B1VXfBScxc31TJ",
  "key13": "a9gNvxnhjJnzD77zfGVzC2TpVPF3CoyECTtus98Dmk5FVBUFaJHrjtk4ifpRaatXSAaaKCJCgFHjrdinvncbiYg",
  "key14": "4Dx3GXZcFpEnW6wUL4LkB88wZ8QVVNBMqEdk85vjjmH4z4s6mWcNVkVuGLtffmk4iV5ttL6DXnb24LCXnLqCRFVi",
  "key15": "5uH7Q1oqkdXDZPJUnPhRXhijxFfcQEhJ6wKS7jnx9tVQzKvQ9wg8TVzv1k4EfHLfaqenBkVxHGybGooSY5vyLTKJ",
  "key16": "29QUPdCmvXN3vvrmN5izGuhB5zD4tpsYMyW939hGn9PeoAW5gD7AHj1tcotDvvTB6u3MQRAa2TRH4tcoGJ8saJLB",
  "key17": "53ocmH7wnQJj5BLZD5HDnBg6SKhvKg3k7Hxm1w6daFy6xNRkZ5JWAUzAQQ1yjUkqX7LVeYUZCtjGaa2Y7nBogWMJ",
  "key18": "3HHwayEFMwukdxrpD6eh5R5Z8m8D7ENKY4jKgbspxJFzrSdEwrn7S7akD7mHvAWbyotNDN52bj5J49Jp3bvUho8r",
  "key19": "pEZ9mpvJwYecqnT5FFjc4mwqDs22Yqu14dfQXD2SE2jYfBs9NV2836VCnxcoVKE9a27ATFNf5St1CQ1KDwxU37U",
  "key20": "4mmukiUhLk9T6xVJduFGxusnNR6GdZtL8wMZgdo5Ki7oQBGAce4FZQ1F2R2VEoZ9uqLfmAP23FSDFwgxC8ohbPNK",
  "key21": "2Vhdu1T3t39GRSFnPyiTLz2iY8tB6gZahgKnPUmVNPYH2Snsr2SCudvNp7BQctTL6jQWmwUXGL6f361aHSo2SD8X",
  "key22": "H7GNELgeSmA2xMWEkpo1JvZnrgdCs7EiF5RYeG5bXDaGyr35zxkcRCCnG9z3hFYgdMeVW6BkDYKnTTQUh8MhEP4",
  "key23": "rdPZGUkvd68Df66t237BDQh7TGVfYX5zg4gaYwcXEUUp9WJahizNsDRg3RBt7ygzkoWCCRVJjEdXV7poPHKfW8r",
  "key24": "BqL7KhzwddbsAq5eTo1Hf9cWJogQutTjYSNvdxvfdXEr2YkxJmt8MtvLXNLyxGJ9QaKECKpRsorFbYJMMEvuHJ1",
  "key25": "5hd2yugmUHGAD4VJXM3fu3v2PMj6Kq49hezdUYGkRzyCFm5xRQ4YbEtoJW6wMJT1Hz9fGs9zcbtMc4tra4vEJAkr",
  "key26": "TXdse5TgUYhUxLbasE9LQLgDrg9wP9e77Vm6PVZqb9xBLHfifksv44z6TBvpVCyhZ5urp4XPcSFcWb62aURecTR",
  "key27": "2hWt5Dt77zMXbyiSiCXe8KVeivRCdQzhewRgXdX9FerF7JZW2SZmDQkNHo7XY1y4bfopXsXYZEEvoEt3nNbuAyyf",
  "key28": "2d9GMnb17t8HQSKDnc3KJCSqzsQKH9mvJB9FbbugY6dxELzNJGXtD6USKfps2n9Kqi1GLNWhxorANUed3LGCi5R6",
  "key29": "4Lvz2RzXnnvQLAfN7LocSSNVUs27NrcoRaqUcG8zMacGnNymRosESrS9X2VepJ2JJ2mcdQ16cY6wUCsBYSwX5fpv",
  "key30": "5ZYJFW4txSNJgisfV1RuTDzja8nFuBonT9xHZrduEgPWRXk8bQzCckgdhLwVKg7cQdwtBmWQEWuAWq2n37KT2hJt",
  "key31": "3NxPoA91vMGA1VHtWtQiV8xbvxY4pEXifmT78bQ7bdGhFRHF8kGiu1Ydspp43ezHagMSkcF44zzte5x5EnoaahKj",
  "key32": "4ETMtaQvVJFNBvboYofrd1CRxM6EUeHxdZSzT6b4P5sjG3vCYKvC2FrDcckc15SqXFzoUS43whhx2FyMCuMRA6Cd",
  "key33": "3NZPFMwXZSQ3XBxtbb82NUzUfWTNDHisdvZdUzvzhQqCH9DvtQnJimpjR9z19cZYuwjSe886z4p2tk5MgNEPa3rP",
  "key34": "4BMZJq4L68beUnZkqTQeHDKaiaTJoeyUreJmuw716nmBxg55nP9W45PZPVFQe6kAjP9PkxU97L2pcrrKBkdXHhxb",
  "key35": "3h9Wh91BYKgzKKTDzHmSsvjt7XEWQkH38QQM7njCGvz3Jh8upGZ3wYDyEGgHYD8iJX6tvLmbYAey9suPgnoZrC8X",
  "key36": "k8ekwjvY27s5Mt4bMbuGyMHdaoe4esst7RShYX8Y7CDvUbcL3hMha8EmWDDAetWVGbLoN6hjaD3hPh6hePRH373",
  "key37": "5TxBmfUyebD7GcGHNigmwR8z7sScZSoZ3dTCPHB4RU13WsXgrSSJQ3ynRDQGJ59ADuU9embHaAM7kehn9nP4UXJV",
  "key38": "2p5r5xbipCE6oNPq21LZB99SHtpW4XNnfjKupQ8PaA55ER56osbffGQ1Ke5f5ue7qaH8xV8eGdFkJNocm2jsVGdT",
  "key39": "3tM8mDHSQYeQu6GbjLFDq2BQvyRhCVmHPVBQEQU3XsbsRyvnzzmmvbWUmL1x3Uy8hBHKeFdH5Vu3Z1W6TkVNFKjR",
  "key40": "2Gycq18v2J1P8bEDmNQh5bYHrtRMM7SXkgcf7jztfzuD5vaEQ8ESbMnGawRD3hUSSEdgrMNM5JETBoBfBmEfzQqx",
  "key41": "4kJuggsLMRkF5F8fa1HBeUAuLMbfovpApc8Zz8C97j3PHe9Xf27oDvGWSY82VLzzkJwoBkawd9meQ5Xzqu5X13tK",
  "key42": "4vSs43QJo7yy3g7RenojDW2xHqRHBRZFmwaCXut2d51Mf3DFncCtcY5xzq9z7pcPMPfnVGBhpDFPh3wrx3hLnrK9",
  "key43": "4F5UiGFVKqiSAC6p41yxCV4BrPFvY5e7F8uYViuEn1kveS1euYbuKjGN7UGJCB47Xt3EBcKG7YoLsB7Wuc8qmc1s",
  "key44": "4YpJvWvgmMcpjNAiZTSYgSLLactpN6iVGtbKPcwKudVkmi5cxA5uKxJ4z3z6nZ2oZfXVaA3yMiTWfwwmjUtoTAHM",
  "key45": "5LoskFoUzS3yrxJzduAMg3cYfPZz8wMYAmzpaMpozuck5UMjHF4bZe9M8hybgfrGwKt3mTJRrBtFDADZQMWmEemP",
  "key46": "2gujTrEss61JQdNWnqSiZWznuqZnuzeimbD5AgXqZbf61zFWntHfYBL8ush6EMRZqZUtnq1ecUkTo1B88GCTo2re",
  "key47": "46df9yCvH57SBuYfFQXfq1Cc9GCLJqQgZpCMKezhK1piXk38WSv2bcNTfXQBJpeWugEHZWMDLA9CzENb3xafwYUf",
  "key48": "mSyNpyqGb6bTKU52AeSw2MXa3z2KUxYu2ecDxW117jvJaVM3pvYW64tDcE8KozqPrGvfjHmHuzL4pxqw5Fivhvs",
  "key49": "4ey9nXFWufNY3LLDfCeh161EavBZFtNVvP8p5ZQ45cxdvTi3KBrgPxVqo9eaQJHwUMp18RsP1xetuv2LDWqv5xP9"
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
