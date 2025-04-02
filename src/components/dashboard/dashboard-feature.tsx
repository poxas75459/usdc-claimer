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
    "5tbYjdapnYLvZHEgTP4RwsmgMt4WV95DECYa4sgjZNdb48xKuoEtmuwP4QVY5GaUWXCAZKP33U8fmxUkUZp17XSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AFBeXkkVJzCmG2wZvfTnTQTSUVyin7qAuGZo6fYmikuTWK4D8CNeLLG34jn6KUwFGhgcxGMx7RxA6oBHQd9gdKF",
  "key1": "FXVPQrCr67tzZah6ffaBEted3QLcPKCQKLzo1hVQ1xU9aE6xPJEs8jxdCstsZN8E1q72yBxHj69Nq1dxpJr8Ypn",
  "key2": "zc1ZGiU2XK8zDtaZpxDa5hkANRGCG9M1ExeK6EYEm35qCTKZceW36HQC4LvXG5doTUDYnbEAzRrvztXNPtP1cRE",
  "key3": "3TimRrko2y9RfRJhmSKNVaioRK2qHxNxM21PgrDU4REgZ8PHyhXBhjGXnyTWPcy8xuBf8iyggqB7kRBNt13HVhEx",
  "key4": "2dy3hG29eXc5ykSLfdupqhCpLts4YrzUBBh1fP3ivWAKZ1QvuZZdUkRkJotYY3VD8SvVHofWzNGu5TNyLAHiBetc",
  "key5": "EMsx3acmDHacinfLfWR6rAvvzWFRLPYR9fBtpfiSkmqLc33NoJf7doNALYRfYzVgM6iqVwHZRQfPTd3JvXJC5Jx",
  "key6": "5EmjuyjbFpC2fLq8Ve3UActN6XFu64ECCmp7m3fhKEc4ivAfBaJTwndjmr4mvKcJebwD3VqTaMZ2etxm4hW54cHo",
  "key7": "Knd27AvEWcXTvgF88vzebfyVfJJV1GAjKJuzVmqTB35LGNCpufigMdReFhkcCc4AeLD176bgiYvWVbYtFjxcmkG",
  "key8": "WuYKifa5ZnKhYfdX7MP8Xmdh1uTucgww53wCSbvA14V9DLvxuDv99Bc1Kqo5LgqZq5N26Xbb2RwJDfGkjt3KLn8",
  "key9": "5cQD2nA57YeT5w2AkhUnbCQfU4sUQZaeiKWc38uFYCU2EshtxKcdJUsft6tPEMGoKZpgW6iJub3gud32L7bbWt8T",
  "key10": "3gXhTuMPAHFEknNUF3u81WtsuAza4Xdzbooe5ceKSGQB24zRoVLUey53LRrA52iah1G9LD58Y4Fd8Q374ri7XCiA",
  "key11": "4WwB1Amrw9usH7aNifLGT8ekJKEtqEKWBxp6Hj3X1WDDWBnTD4izzMwmcFGdJYr5fAZrLJNi6M5Ssw4NNyhSnwg8",
  "key12": "6269w7vnfwCTjJNZTKeWpurxKDELZuqiQJAvj8vSAoJg6ucjNZ9G6ESAJuwus1wt3wWCJaESUf5zoWpfofc8L8gj",
  "key13": "4H55WkLi5Z6yNXPQnA7VX5FAVGRCodymZUZqzkHkTBSjaDCBK261jWpgfwT5URkNivXuzVEvHHDxxtyP25bxz57Y",
  "key14": "TeopDNaqzSzCK5G55Fyehz48msUwnyTb3izH3K98kg7Q5EEfUa5XaL9vy5DAwW4rjazjFevrTSfFxGbaEptUG63",
  "key15": "4zCHZFzgDtW2runHuk6RW1uVLbHWvacYHWX6mhLpRKrdcL82QQ5YGkYeDzHLCcHS4b6iEzr9ctUvjGDKa1dQNT42",
  "key16": "eCEE24Ds7g2Wr7ZLGiGr47gaTqxGHvW2jvvku5EMSFwQgNq8A9wnJaRaufBj17rT4WsTiJqKMgSx9rBN846sLEf",
  "key17": "65q9PKbecfCku2WLkRoiS6JZuXEmSGnzKbVLYHDF1VxAPr2Tw6xo2U6zjdNGjL6tagiH266e3ZMA7hjn15rThcbc",
  "key18": "2v1iWFFFLwzBb8jbLKVau3prYbZb5SW3cCPrWV9HLFjctrsq4gHd9dxxTxSKT6jdMR3jxj9SypoAgiBQwtGkhKWE",
  "key19": "2irS8qFSR2mmsKQfFtAhg8B7YEbrjnmGLtGvgBBqojuqTzpM8aSrGpeANqkpPDHwnxLFVpdfGNv4W2PevFdNJSxb",
  "key20": "37jccUM8vCRMLFddWC2S2tY6EnDsnrcPZpvfK22yrmykr6kXg5fVj5ZCtCH3gvBf5HmwXHUDPkUi11jLnnqfvn3H",
  "key21": "3x3S94n5xpYXPphZ3dKQCgVBx4GCoC6ADFrEmVSe5QLdsg3BQYz7w7GVYgyHvrG29ZMQRzXaAm5NFbXDCcHiGdha",
  "key22": "5GMjvgHzrEnTxgix3Ts99caoLPWakU3S1uQp6KV3Kd2GsDmTkwPm9KLttu4etkrFG2MmeqmWKX5mbTy85Sm87ueM",
  "key23": "ZABkUMCfMgjC7yz3fLT6SdLtgnrtBNTrbBKCLypE3HbS9hUCJ15yxmMnAKdxdpt7Yaio9H6eTAyJg3MBhYhZ4AD",
  "key24": "5kdpJoL1CWiuTc5UoM4xXMjPxrLhGsh3V62fS7APj4GtSgFU5HqnoqkmisNb3AtwL1WFK4Y5VZD7ymCkGkeWxCA4",
  "key25": "s8zt1d4uon3HTD6tkTAxFdvQdRY5CUMPqxpxxoh26m1MwrySVM53sMNv2iUp4zQhCCzadxyiQ7VFwjUFUAcc9b1",
  "key26": "41JVSE42bBja36FSp43BDonsJpTa5xWbP9dRXPBaC4rsVJex6kbwk5WJqXRFW7j39HAq8HEXmJ4Nx7WrWRY9wivd"
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
