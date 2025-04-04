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
    "MnSED7zrzaB65J8Hnyt5zsX5kmeVramL13e5eT2dcKapSVb72WNrLx3swaajSy7wUgs4dfGUJ75opEgGT5h5c7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NVNq9fU4X916E41oCjWt8HmHLqteAxj3kNqGoEkz6xzHN4H4wyHtLs7d4T9ej8CdddJn25CrERdciiR8xPGGVRb",
  "key1": "5vYoBJxvALr2HoT1M1zsH6bj5fRoFLWiFaCkC4KSgAfyeqb8sfhAv4SZKXhxHWviqWzQCbZ4PYyGhnaAUeKWLkTr",
  "key2": "2HpQyKp3AS3vrAtNFUKNDMfsfs5BSY7fG7rvuZpHpokBEwaiNQ5Um93zgeEG4JbaRWiC9F1ewZMpGqLxVKxFQNEc",
  "key3": "44iMJSCwFJbbcbqgHAdS7PEQihTUd665ew1HtNzvUUb3JZmmmg5jP7LkMA2gbLEdHW4DtaVQuoNuuwrPMakU8B6x",
  "key4": "48tWtaQpFfJN5jSK1y52NSGf5KaZB9Kxqja4ZnUUwyUMwdVKEbYbpsc2ArArDF4rP4aCVkrnY7cSLRn7dAocW5c8",
  "key5": "61dyBmCEe1TCb8wsqhUQhJ76kDjRiP5PLQmuP44wAP2BeRRNL8Ux3EUAeABdW1a5wsVXp12gP7nVPcL4J6NUfqGV",
  "key6": "5rk5d9sYVMgY2k4CS1ZWXKrpC4Y3oaBFTmC53TaDGY5KWddN2JuXtrXh1rfXiFpqKnAaDWXq4UGtJyjkCXUL64rD",
  "key7": "4jWKG539yvs4VwThiGcn6J4RghKsnbk8bCH5KimMg4yWjkgeXo3DnimGsndhhaYJShHa9dPiSUeMe6zv9QtsxdRB",
  "key8": "3TygSCYYaXgzFrh9XCkh3vGimEqUM1TMZkKo7cM5NwKxnESyZCj1dQ2NzXEwCQ4kTuHG4ADeiBFXoWF5z5U7mSxt",
  "key9": "3cvbkontQzSs5RRWoMdYKgFLepTKqvNahTnxBKHv1kg386RvQWzby9v14oGECjncBbZmw76ocXvn3rT7e4bFy2WM",
  "key10": "3x4AWyarft561Fto5KAmsVBLqZADe8oEVMVUtQGQPYxcvQk1o8sPmr1PsFdU2oZVN5YCgGAUL1rwDPmZCHMtoaea",
  "key11": "2AfDcxUu1V3oDWYuhig6YejGRq9J2twtTN9Yh1vTpURnZqrh9hmRc91b8o3KLxdXxrXww186SptLauTjrCMLLqCU",
  "key12": "CryMo8HjfBKQLWcKgrxoZThSzVSk7mog6Cnyh8Cx4T3X1XPeYriLgqjApGM49w73yiPq6rGYBx9GHmY4qKEYHqN",
  "key13": "2SH7H6pbPxQzaRHRiUrnmTpJvrKQxuK3cZ24rATcBBktHstMmFdnf1dqJM8a3vHh8zcLHFW9QxW7dUQXwibxqnXM",
  "key14": "J67QjzFRj7RaXU3w666nAQNGE2WecUxh1Bjw8FSK8QWs7x1e4pdPKm5H4MKG2N62RLVCorDhnzVXVFPbWJCBd58",
  "key15": "66yjdpGjxAmeMPArAWLaWsFkcq3BiRkksKG8z9vgDXpbyugWZD6LvcJqNsJ3jVyu37ZEbgHiicK4qNzv5W5jYtJG",
  "key16": "5ja4kgPPKFUJAXKADCoyFK6hE6UAKBBF3iULseKj3Wy8j8ZCAEfVfT6pELEMDQoDp5a8YxXzNfpNRjo46uuKKNSq",
  "key17": "37V2CVshkiRQg9YM6bYnw5tasNHQFGfSmQFekakczAwKTxyccfxByJPN79PNqByDLHyt7ekqFiPmnSTKmjMrnpC1",
  "key18": "4mXRRcUYdt1XQi7MhWi4HDR8UCcLE8paprPbWQC2JESa571cavdgZGaDxESk8xsjY9zhx1TYu8abniX2KciktGyx",
  "key19": "gLCryGTHm8o142MrTcLQTeN6N5zs9W9kGA3wrU1UyEWkAn7HZvqPwDxfBh9Ag2zfyUNi9tmfiXYGUj4rcHeRXNj",
  "key20": "3qpm1SmZZnsdhpN5Mw5gazS3mjP5ifKcyiCMnqA6LYVLbb2SRuAm8dbJq7WgvMCgwt1qbwnAqivv6nkb3yLDEjWU",
  "key21": "ejKpbkP9UinJAZS2saeqBMkniom48gZLCQy7CuX7T42W9YMKMo3Gq8FQSDGFszTd2keQ3hpZ5eME1PRU2e5X6bw",
  "key22": "2DSWpfbvn8waTYL1uRbeBq1cWSqajndvTh7DAcdCyg43UuTBW4GQhczEvBWbWfyfhWH8ZSydWxQcKovZyfcTbEMv",
  "key23": "3UXF9aWPcgQookfmPrkjrpZSGp924PwCaBcAC9jWutVrnzasKPWZ5ECCwFNh7EM9AP9dWZ8J7m1WGwfEhk4u26dX",
  "key24": "5PBkxqRrRR1dNKjdSCXiEZHJBDDF8J5cxydaTRwcgMsLrEHrdPWRPyxsKULxYMdMTSdRsm9k83nHin7JPTC1CtmD",
  "key25": "4jKhUZWMDPZ2Kuux7fWm7w5srY4D5XW3zzhEPqjN6iJYYCxCfhPABkQj8jgbnDnYWxkruqA66xexLS1V6RpT6azE",
  "key26": "ym51og36Eq29xDKa9HtD4Reiw8yyzGFfbfH2NLeFknD6A6hvUgowQ1FZ3PNH1TA4yHUWpVW7jajnXgPk1sLsLo2",
  "key27": "4DAchJtCA216oV2gT7zSrhh6K16AdcMKdWXrx2EEw6FW2JLUyinMBRMosGJxM2zib7mhH9Ln5AQJ18ZLMDjGUtUP",
  "key28": "54nfCDs4wFPyu2Y15ondv1vP4aRD4ADtAUWoXeUKRmrsYq3E9sKyseoQkfyU4fxEQUGSXqgLnYiR3reQfHPo5re6",
  "key29": "3JUd3jDSapMdiezRwUDzjsbVPmBbxguCG4CGx4Mt2ePFC5jCC17AvCeRwAN21YmfpN6PFR8oUcy4A27ugVGGkCtL",
  "key30": "2BGmKcwu7c5K5oQtBCMk1Dmqh2KV612MFADoAjARyRBfB24foLgWSi4KSPHy9uwsYqxJpWZBG6kFNYRV7wK4K7Vd",
  "key31": "3mFxusYwYNfpVvKUucNwmPy1TyvqKNfVQbV4zCcLuZ6uHk8Abori3PB8vzFNuUpVnxPRg8Qdvu9Dwp48VCVs7Z5B"
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
