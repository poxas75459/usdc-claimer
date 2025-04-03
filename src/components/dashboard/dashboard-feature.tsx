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
    "3NbKVLwFzkzFZFsT2169M16DrVbapk5n3GQetTw7pwB4E7USUx8XazmmEqCgeAK4KScdKgpWD2PVtTUNDXxKtBS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45msXeEGJVP89uyVPkefvHoae9SHqcphsSWvNEi9oAjK1y6Z2qny5GqjYXmY9Jgr3LsgUNSVVrD7TAu7gPqPMFSy",
  "key1": "2v9e6n3f5f8reZsK5agV58ppL5sxVNYE8XjK6Vdf3Wc6Kg2HxjxdBsJPGHmykzMwzk58xGWGei9DUfj98ugE6h4C",
  "key2": "4UB64Uq6vwtt6nNdyXQ9UtnsjxGXXjAC4iq4JYFcHgTm5ef4bnEujaWbVSwxbL1EYitz6vrqEnQrZ3dHhDbnybga",
  "key3": "3jVrdy6n9kg3iP34tFzhhRhYEokXLicSojkUERbmT494UaExhSjLD8JAYKKTL7qdLH1PLKdGWEHXMsgM7Ang5XBw",
  "key4": "5k336XUazGgBzxbmjzfvqKmChB9AxJx2VuKwzRvCi14WgKyfXVKmVNx44VyHLsWoKGRCap2omWKXHEXhoMyZP1MJ",
  "key5": "3M1ttEzkvoqqs57Lakh6LZApnjJGqN6avXQHFJWYwXXsXDBYtswSLm4TaoZFo67ZoDkXehK1BjvtVtq1wuo7vyYf",
  "key6": "3jUwq3d1pBSApdqWUdGb8L6isStXoevYVC13viD95oeEoAspCUA9Jmh4P2wFfoFX5LTrKStTWbjwAEpyPdjb9nHT",
  "key7": "Bp3WvNVKAmzoU62Hu7KEh6r7SJQSxTkWtbfVPnBpiiTG3EE1ujck8cAP8PumMiVbyb4QswQsZnVdES4eSsdtuDe",
  "key8": "AKgLmZEDygkWKQhfNQGLPXjit7VGPqWEAU6WTjNgNb1Zt7JKSV3oLYgRP3WXsC8PCAYhDNLXxs7iiroKssRmtji",
  "key9": "34ip7AzYpbw2ZoB1nENE5AKj7ueUZp7qEPJe1YiJG23AmwdCjgZusw1V3CTSLkdvWUbDNpajyc7zvFkUVB5mwhnE",
  "key10": "4QDs3wS6XDg9ngDv9NK3hrtLrfS9rztcFQN28vQe2LczwgvXP7RL18GQP2qWHbiLFczZyBiLeFoKt994VXKa1e9G",
  "key11": "2xGiB1bQYWhKFiscfgbBuDPmBwgH7FmWCmjcrH5sYhKEM7mK85goE83yHgLFycn6tQigHtVkJsL8c1gXgocU938r",
  "key12": "2wRTkN5D9Q8w3jFz56P5u9WUL8RcYswR96BBbtsVDD2fE6roG7Tu2y7aTXLPbNkbDsUCT2hCwGtoGoanjp9U9kTK",
  "key13": "4YLnhHPeo5wiU3x8phtLjZa9Yux49iTtu2oiwBVHaZXK3RP1sKK3giS78nHw59qorzBtwDBZgnuk51129RnJri8y",
  "key14": "2UQm9GWKr6q8Rcu6NGzniUS94SyF4YS5DuAhJe2GhrEVefyirdwkYJVsHJcBcqgsjpkiZdRPKdwaAwJGMaL2moG2",
  "key15": "361vCpV9tbqJx9q6jGNF2mjeUFYN5wKFt2DPxEH8zdhjJV28KUBpzvuWmPB8zCJn3c6bUFnd8bstthGttRLUFuZG",
  "key16": "bzp8NKtspj5cD8aX9bxpvDQeT1ds5H9He5cENExYUnW2ofaeHYHXzNxwWCMY57NRi3r5ouwcVJbDgD6Yc1oCRUK",
  "key17": "4mRZCgiV3MLZHpXcac5PmZecpm2L6tpTEVpePijCYBXrTQ3fcX7PZuiLqda25eBeKgFErn5WjxQXXM3sYDN716dq",
  "key18": "36k4oP6Jqx2KopoVqEGABXyPmCiG2cgcuaQ2G2YcB2vWijafGeggZP3iSvW2kqMT1wvrciJkoqRJJNCAEPz8cQz2",
  "key19": "2T1nVrZXKPUgBp9oBuNMWyLMV5P2pJaqnrUWJt7EyD17J8rcQuc5cQCo1TmetVauhF5LPEVtTC2rGeAqi6WzSdBW",
  "key20": "5NAjYhgB9ZafF67dWQysWuhv6jMCghgjocmo4VNpxsH5QFp9Z5ps5qv6NJ9KC3RS2Ayr8GVUiKSjFaEbxSNKRCic",
  "key21": "3yCMr4ykNMnM2p2nvvGpTqZx45bW7hEam8kWMawNfmQjvwiJ1MT6gE57r8SXULADMSMS6gAEC2jcWHcibqUAZmZ1",
  "key22": "588PECiBFK4jLNBwuLgAqkecpERaVrQ21uXXZVze9JJz6MFuBF3hkrpjoRNdEQ64ozUAXYT83kPnAVkznPZT3GhT",
  "key23": "5Wo2SUHvJAnqos2CzLxaYsmScsc7KbURUmT4Bf3SivUeoefGDKP7cBfD8dgx4L9hZdh5RveZfpPcSkisGzborSof",
  "key24": "xA3Tfh2KeEPDCvSoo7RBNB6eqiJtK1UA9DpGRKLcXfzsrMBbEoD5nisRhMwAc93HfPEaYX6wP2ucCwvWuvArH64",
  "key25": "4ApBrHQXdDCHSADYkVYssKPLuRhZb9C32WpawndWGPyoPGwLoZgfvsEohGRqEa5ZEkwgW6XngPH4wZ6SVMSqhuj1",
  "key26": "3FB7SHoiNqfsB2oJwvWYB2UL7rvbtADTJ1PDdFC9XSxqxQ3MsKE3Y8Xbh1eCCkdikU9zSasaw6faVVKhBJgtoNrj",
  "key27": "4a9zEugSkBCanwNMriCHLYiRJpvwxWHdfCU34DjTcGSpU9ZX54EcQSDCDjJqFqwfuj7zvuebwovHkmRBak3womHF"
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
