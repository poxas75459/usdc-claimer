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
    "5mhbCauybHsxXY2RuecDixd28s7nUJ78BgeqE83THB6npGRfs5yTBhn4oEXkhVv5uKf2hY1ntH7Dw3LpFxBWVZ4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZADnFzeasRLkLNmuQKRGiYVaKAokmf8nNAUzPbBA7UueEWdthxkEza64TT5i7RyrZnRZPQa6uBNNWBc9tF7TtCg",
  "key1": "4dCiPcmiEFsE7UEXkTMNMMzoJxXjfnLv1XbH9RM3HX6RX8VC6dob2wMjSQ3ubeG5bmkczHFNMFHEH67YZAjDNSNe",
  "key2": "2JkTCHHmNGx4Xh7UZMsJjnTB9REiHqpN9NGKHhTCeG5BKwYG4XBeJSdmfhmpGtXXuoTxYkzqm6A9Sh7hxxbr2fzw",
  "key3": "5J7orGpgYKz3okrkVd56ZRARBG4apCYh5iDtTctTFrFHGKR9j9RfEqKa9nttNGqQqK75JBXo5JhotQtkDCkKguR4",
  "key4": "weKAJPc2cxEoVKDyj1LZ75qHw1djrSRLCv8fi4EmdCMCLEA1d84YbULUuDabRPzLpUyhLDvcjmykqAKrSyMyn5j",
  "key5": "3d8MA5cw2KCkoE6tqWYyu3VjwAdSN8Nx28rrevyyN4qB8nhLCS3dYJpVEB2mUmXXMp8kD6fWWn7xvoM4Lt7fw2MB",
  "key6": "5mupBDh5iLekpWragRRK2SmWYrroAQFviy7oxymHFqiiFJwEXD7hp6eBdHYhL6F4CPhbU5V5co7o2c2vVVWh1PA2",
  "key7": "2GNGJtGJM9YLhUkPsJvf5Z63KSHpaBqaSYDXAYLHUmT3J3ou68RkfLsFnden71noggtJqmR76XPPGwSdH8dto8nF",
  "key8": "5SdnfhKnYxDA48piP1uFhHWCgW6cGFmN5nZmkH24NkcQpaYWvgeh6ErDmuh9bQ8R3PdB7TiipwdMoupW287UN3qr",
  "key9": "3YExw1jhT5iqE3yFxiCAyq7N8w898jJf49evE2xHzETCRFWCsY3BvGSf1uwpT8oz3a6aQPGrviLsM85MEP7oVg3Z",
  "key10": "4iypATidAsiXD9iGfu81SXXV38mcNocpFzY4UPXzpUf4xi2xgqJAmH1mZkNAEFzZrYjPSX3oPK2wUcG3UVTWXJCN",
  "key11": "4M1okWHKWnfXNqUxezeBmMMnAJZDEiZHfU4BQn1KbxbwbrGirbFSe1YDMnM3pvY7fAmsZAw5fGuo8Bbx9N7bjjrj",
  "key12": "3dUuKeG3JwRqtZ6w3ezYU7RfHEhMU2FcJcByDPH4754eQv1qtFmWsRtbJ1yoyhf55Gn7CBXGrxrYzW6Cm4xb8U71",
  "key13": "2HiY29gYC7AkT7d6DwzFGzf6qanUPUEkbdvuDP7CFxPRzDUFRXWZShAQ4h1RUPByLNUcki5CNUgo36CDGRFRXozd",
  "key14": "3Q5AKzPbVfsJd2Y1hPGSPhkr27HGvrDqCTRgkXi9DS421ryFKQnjiMNMdt7HQYMRLaNYtT8GwfTpANZdJiDUe5HF",
  "key15": "22idgRn98KvELBcSu5NUdQCEqWddoNwfsXJN4mNeZJyGeUB8EfZiCsFvpjPyMpaXBM959cbGgAzhdifVmoYptg94",
  "key16": "3Wng3Zn9qBkrzvwEC9hDhcnwueYNpSVYoAYvTTPN6fdVQCVcKTHRmyBik7RudfqNs6DEBnnic4aqe9cenu5zjJ2Y",
  "key17": "rhMA9EEgfVHU9VxHwykx5w1FT1PYe3QiyyAoaWGLb8aDTQwMqD8KGhQuT9gZoe78V8bEyZfoQ6NBw8t85xMPynb",
  "key18": "2WB66J2R39eZFzU6dv7zeStHeuSf15BPQsreHNwPZp57WqqKpbmRLvsGvPH5JG1NPrn2GActy2P2kfc2cg46vgvU",
  "key19": "FXXangTRsxMqWrnfoV5ZmnCUE8fHkGzbUoDNJK7Xfm3LcAnxai3yWJtu3GsecvT6hCZ7gyAdk1R2go7oJyMJkZZ",
  "key20": "2iKUegR57RNCZ64vQrgjSzrWLJNKm2Xjb7RxqgALQ1sPnAVw4Fum99Q2XTGC8V1dJBYKMxye6kX313CffK8kAeCJ",
  "key21": "3HY2dfjirLvmvsh2SiBHqKajxDmpejZ3rGa8MuALi4XhEsuFD8TxnjQC8jvyJgYvRvB8aXu2NTkzWqbagfZx9C8Y",
  "key22": "4MVGkuKBx6wL6aBjho5kFwUttm8QvfpygGdxWWLk6quhSHpdGBznb9yv3QMrSHiXFpBzs2hzzTUA6PiaNHo2fVk1",
  "key23": "4JQswueFQLaiCqAtGLupP711V3jWPWtayQAiRjgLCNiKJf9m5HdmKY2XVGnD7WteStp8zA7Be3fcte3GqTJfbnZw",
  "key24": "4NL6WxsQrkPsGVEdkGecHVecKD4YeyS4bzS9wqiAqsFVdB5PAEqEgYEAiSrZLbQb663EwQv8kPYNFiQRyewmJC6x",
  "key25": "4NdRDyiFYyXqqTr9nKbL9rRikej4RhaD5kurcpQWegk9ZFxrNsCS2yHcdLG1bSe8QS3HRubBQhv7HasfgwnCtipe",
  "key26": "3AffAsgpXpFYPJQisK5ExwRqWq4AMReQMoncPUXKtHZvgwDhm8pSKqgskHZmS6APR3wVeyXPmUn379kLPkf4e4Vh",
  "key27": "G5ML9hsHTCMEvLhRLVfxAy4Md89Mqc2d5YpRNeZikhSygmkndxUqpEQ3dMJ3iWb4PvmGZVRcYJ2DMBKd3hxPXzx",
  "key28": "58T722bv9913CV9kP5dtwcptLVwe4HV2872QNKK8JTDgQyAJtDisPpyvxewwFy4ex1uYmQW96KDjzzoVPLwJM4qi",
  "key29": "5shBzVd8iriHoq271ZQ6km3pTjTNnYKV3oU77c9zTXkuvzQogULTjR7NnsXznN6UTHLxsARbt6CUZhj6BdPfjB8h",
  "key30": "44dkxBCmL19DnGAWMr75kKc7UNCptTfUtWH8KnFXY15Le9LyVvzAyF3AWkShSjZaNebH2dKzUbLbYdoyQ47nS1Aw",
  "key31": "5n452ZxHUzYBbSoHb5cD1uqAJh7zGHRY8m5wExQVorwogKvaFJpFFqvCS8AuSv6SfziJ5zxd6txoC8HGBeScpDPk",
  "key32": "3WEX5hyQtieM9dh86E3EcjYnmQZ56y8crvALRsM8Aa3TPxPwFbte6CZ43xGLxyv16fm9rGDupDYQ2gawccppsKo2"
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
