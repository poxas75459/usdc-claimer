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
    "4anBQM4e88peJsgcyjJJSA7KLzCM5QhDpbZMc5oAv9cV5Kwjp77BmYkkzobjoVPZu8BvQBGANmbinYkFD8XrNQUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22z7v4RJfJgfezDWwMrqByYxDzLgjz1c6VditW3uoWHS7V3EWMpfLdDMX8Uu6VMdaMm2cxqprWD33dDXz1ZPn71G",
  "key1": "5TkcR1dup5yHHwQ9ZtJohPd4x6KJgHJXFKKtC9LtRSHMfQPxLRoLH3r17H8BsmcUrDGfq3D2LACdKFhDewc18f6F",
  "key2": "ArVnRr47U5C8jE6LWs5Rc9FL5ggNWZMjasFGTJf6sFrCXa9KDfBgkHS7c8ENQgs3zmab3S2VBso3Bk1g9FVtDLa",
  "key3": "3isU44A9GEiVqE9cc78pv8XgB2XhPKnScuyhgjihjDQWZxvkHx5JbDfbVVbMdAPvUvScEcfx5BzW5E3ZxkoATzA4",
  "key4": "5zJxPV8hSqFdh1NPKQNmBkfK6kJMBsveYNk5AXGYrjdyPKWk7a9u9uJsvu21FwZrkXje9QGxf6jwETFoBnPC2vXJ",
  "key5": "2fmZ7cwwezZWBrZURd4FobdU7QhSRWHiF1KG8TdXFanBt96UWnsmT5G4fdfJuK8TPkmPjVMhp2amm8NnwCAE6zDj",
  "key6": "4EUdqzE7VMqGWGzbo7jwF1hFKLCLzsd2uR13wHyptk2xXU3398uaaYJbx64aRQW1g7365XJ66vTDsWJmXdtkks3k",
  "key7": "35omcvAeFMMsYXjiM5JibDMTmJ2tgwpmvqFmNW3x4QQVXZ18ESZESJrYXg3X9yV4F6idsrDaC3Wx8pjwbdBrA61s",
  "key8": "yaFEQ1MpSzHpzhvzGdUiX2qcBb58KG1HVSDQKQYfKwF6zLKAxkzyctcjQzKKqsVJQLCk5XQ1jfGSn4rAH7ySeST",
  "key9": "4SR83BR95mQoxe5Gx3nvqhqBn6EQU6vhtGsVrks7Rq91GUiY1HTPzw9k4U6kzZrDE25uRhd4nUvHXqRP559UGWVL",
  "key10": "4qSrgHsBr3xTshbkSjKmo6RfCPerjwSxhHQjyFqWnSoJ8Ut7zhCXUVhdAQcEPa5H2ybQXs1W2qHGpv5nE2cPKspM",
  "key11": "4yU5GL3JNasZymjnyQED19X5sM1Z1bLToEhsRpy77xFD8Hu2jo92GHysLq87cXn9UGv4YVrkJRTrqbGz1jsVpTMg",
  "key12": "dbnGWRTqX5hnjQAhSJmPFvMYENqXxUjdoHxBnXCfmg91JCJb4TQsGmVCvt5HU4vks6Ru2CMYhG9LVSrpEU4hnD1",
  "key13": "4DYJDisbtnRwG96cXvUNycnyyDG5DnPqhFX8izVV34kmZxnmEDGeREdRDFFMxQJ3TeRN6LetgTN68XULnsHMRkJB",
  "key14": "3Lt3cPtyPqZrZCh7NsZ3VCCyn2BHjZmrpUr5EwU4HBvGoKEgabS41PhHMAeaaxJKBfQqhgvXtsCm23vPy9pQauAa",
  "key15": "5hAUpSpPZVurBmK6D3VdqpM8SCoyzxw1k1HjJeXLLAFnVgTSeng4VTzUbL8sfkndfGybWpLwqb84igENcXZYo9aa",
  "key16": "2fxuDstLFg8RsPfrBUgG9VzdMkjvK4ZW61U6ySqRxLy7muEvwST7R27fs43EKTaQLMo4UxhPxpYCns8GEUF592yD",
  "key17": "pCtciSpzRJAkqys3XYVLa3ZrxUxrS7jZpPgzEc2ExjvmxwtGhjRxvesQKZbchAzx13iiqskoDjU5NMoHyW7Ssdj",
  "key18": "22X8WpJ27f9m2o9kgpJsTkX5PeChYkifznYUhJeP4UXHFgKcjt6qPq4RkTaUa7ABUnjXQVJ2P7UHhq712h1zmskR",
  "key19": "5CBxe4BmE5u2GQjX6o7AAZzpFwtBuMngzPVT6jx7iQYTWNAHaSWrbWDT7Uqtn8oUbWocqinbQG8k3sVLQ1sicSWE",
  "key20": "3eeysFzAY4PKpgiV3FZ5ijV2Chzmu3v2Qfcc3G55T4qwpNEoj8cfJNi312EbmKgcNQUdDG3AWidTsUpRrMih9tJb",
  "key21": "5ZcLEev9Pd8rsCMgTgBio23KqF3LUiikbXSb4gyTLVZ6QxsaYFuDDAaxvetfVfVTwzBakAy3HG5etPNBHLDQ3dAM",
  "key22": "4pQv2cnWE3HMrFaUapKRThdcUkV2k4JxKcoq6qDjQn9C6jqE5DN7Xb6m3pctDDHLoLBwJghewcy6U5yAFyCstMNw",
  "key23": "N86jkcomkqvsJJw3kTJ6xzjhybjLMrHYV7YQhpbUVSTiD5WmPYiF1Eszg8pF6TBA81R1Fh2Jx9uPHr6Libdgbxu",
  "key24": "4y9Mi62yqPuyXr2r5pK8aarQXke8XJB2cLVrwFTzYtwXKWoS1YPtBAPJ8WiqM9pEA2RQRNANkPHsns5Lus6rZ4dD",
  "key25": "5q1btx7sBVzNTypViXaUpcxoPPH4MRAJ229umbtTJLE6XGj4fhjCj8KNaXHsDhWvwm1GhTGnR15XLrbtHxQQjwE4",
  "key26": "5AoPAJLRPZ5ZpkAP53N3U9LqgCNFcpc6M276CPGxqA7r7nGKTUn6B5g9hUtSNGdMEBRgLuRDnHjDpP3ZWuwX41tR",
  "key27": "5BQg9775vbUsJDhjC5XuzFavCueSd2d5w3Wh1Jv5XpREhjVD9KniQXtpLBLtaw7gHSK7Nwud2Z9r8RARepSkYAz8",
  "key28": "3H2u6YvHa7gA27wQ2S9ff9ax4kvedJrmFeeLTssmuFBLQnWLr4CWTdE3wqaCcW6PQe6ef49nhsBAWKi74EEoAKwN",
  "key29": "4W94oyvA5x1paeaHHx2oe3mF4aPFAWjM3jE5Titv3CyKXpjD2Gm8eAo5FytkSiZbbjAHYFv39diQSpUMM15gBzAa",
  "key30": "42kSvDQsLAJG15y3x1wJRvUTEAeWhwmS5Duoyda6SLdvpRQkUVKdE3PeHSRy1Bu1S4udQLC92spEGSfxAnwjLv2Q",
  "key31": "UAQPwDyyfozoEUbw6XCxnnTLCK7iZNmDkmaDE42nvb772rJjvc5bAqcb7UjN2NScfrd4mK4FqFwKHhdMBVtDekf",
  "key32": "dAJkjEQcHLefQLaSCcrQXQHa1s7ktPYA7KLeAoVMgctobFmLm2sNip8Ne3tL1pFXTHwP2CzfDQMafU5ZaGtk3G8",
  "key33": "2GRYxJgK7sAVqYkSTuZ9BXPSNMkjV5wBCzWgUncLNXvEUapA52WkvHHv293m6gpwUgfSGYoNgDK4kPaggvwgrz5d",
  "key34": "4tQZFk5pJJ1Rv3KhtasSgM6ZLHFwpKm3hfgu4AiZLWzowF59Ud4hcmGdF5hc46FFq4muvcNLXLjbTmKtsmYvdRyg",
  "key35": "q1HqSjLsefq6ZCXoMBe5kGN2Xed6C9HZ11Gx6Xh2cVaCsMSir6WfmaFDaz1ehgGAyZ2Z12oxokeMqKsDSQWVmEx",
  "key36": "3vps2Q24WNZZ34H1BJ67cVsfuq7PK3LvdY9wsAaxyHRL8WKgrH5qzRYzR3HT7cYYoXUUDFrMqZru4TCiWyfn4YzB",
  "key37": "3P4EQz9h7jTuKEo5cx7GAphgbVXZU824cQ44HfwDL2RGUWJSNtddMynERULaiMeuAWtZ1xRruw5ARbCKDDQ2RE5o",
  "key38": "2toMWbJisZ7RRH9V2326ivY7LfVjiLHmcjbJTc5ysauB755abAJwsuGP5WeLKr3iVtff2iBv9p9xouvAgGzYHmdP"
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
