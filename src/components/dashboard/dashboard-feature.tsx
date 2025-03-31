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
    "46Drt3PSdrMu3BdaTBPWvEJTsHfga7iJsu9hea38vLGx8ncyn8DAdhXpGTU8vgHC9Y42FL4rM5K7Dn5Unq8DtcYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BMiSfUzGaAHPk988xA7T4xCFM32a11auen6NkTYdcPwtWKs93PaxD4acU6BNKp5TVC1jSVFQMfknqPQz67uXYDN",
  "key1": "mATbzSoojphGwJVL6WVekiHY7iJyaf2TigxCdaJzjNjDcFgAKEgZqVZzkMijroy2k2fdj4PhzG2FXC2kzWagBbR",
  "key2": "3Pn5D57RB7Uy7Rp8vfb3mZ3kz8pWBwx12zNMwhRVEeHa6FHjK9ZUXiqBcE3WoDHAeSTJEoV1QoUDq7GukiuWGRjS",
  "key3": "Qz5jgbxspaW2UTVCff6WfBmhgLuw8a6zpdCFsgHhfD3vm2PCyQxmRbeJaXg7DExwXJCBLjkRimMcbpty8aiVc7w",
  "key4": "3rKoZLhgoJzwFHJSE76vrKqXKkTUjidfTkq9v3KbEaatSKehDDy93AfaBZSd3mXS37zmmBsFCvy7R6qNDJdMCqd9",
  "key5": "5NqT3qvPxGg4fJ8F1JoFyJJ6cVzrj3NXQ3u2JKhdFh3bjRd8ciVDfQRc4jDto6Bfe7vdw8u8r6h4wRTJPvEUBLBq",
  "key6": "2DERgE6YuXwJEKfu7WHPPxRJKgXvVGSXb8ue2fL8BnkHcw2v1f3CvCSNoti3otkkakdoAPtNUCzzKQ3YjxzWnZwe",
  "key7": "5oZUsf2F9Se2aqXpmwXUtg6XprxJgpYcz2vKbuZH5G741D8qS5YPsYMdb2dACE1MVLahweR5N6q96jpbRmpQ5hBQ",
  "key8": "57xsedP9YCPxp1xzFf7Mu2H9JWUnDMnqLv8pXhAqevQhoj7MnMdVXJkSta3vJMXNDyZUxKwr4F7GNu3iqS4dnkNr",
  "key9": "4cbJ9oGmYh5MmFk2c8P2xhp6h58DdynS9Whte4ByLAwV2ooba1LwJtahMarX47g8JV8YEkSCSb5kMrqc1NvcmaB4",
  "key10": "2Av4sC1ZBDzCAQP1icbZ4X69etvSpdfhtpJevGH2HDTdbLojoLjsS9T3BW34cHfWQxRCtLSd39PqNCdEB4ssoVc",
  "key11": "5n1wBkqFRtD8ejdoBnUf7KC4gGEx7enNJ2N6qkVnC998somD3zfrCw8g4uDCYEXKyE3toEE3oYudDZi5UYix1THw",
  "key12": "3s275BYBZ5bkR8YgENV1RB1hpRKpWPkaq7ao9nDje3TLoKivxJr482mkod3cN3ce5a8VRy6cmtmzGuEAGQQ8VqUw",
  "key13": "4go8ZTTEnrtzCzWDwVuioBVDJ14h5QpCwhRoXZgqG2paMGoyVC2PkYcjkH6vQeDe8aFE9EsMGFF9G1nZ8bamVpHN",
  "key14": "5CJGmpqrXhfmepDYPjkbd4xuAF5BSPEbEpA47ya1y8pzmT7qZ6q3GqfyKzURvtJTmLkw3snV86ojW9e6f8SzFaMH",
  "key15": "2UqPHogxufiAP7ZPLjnbG7JqtUYDecCTZPt54PYqrkBur3y1AGwQxPwJA7V6feeWVQQD6kUspS3HfEnSzPjkXFFJ",
  "key16": "5ymu7RhnyCNGcvpcqKMTadviY2YEzuMnwLQLLdygsTuKTTgwdk2kfigJEiaQLs7cDMeksqjdJUnTxoqYEjubmTLX",
  "key17": "22rULDXK4M8pjq4BSNztQyUptQd7xSPCwrqYgL5sxEwfSDYNovTL8ahPbgMPRbT61cGe37KH63hXnit3JT41JkhL",
  "key18": "5CqdT8qLmTMaAXaQiKz6M1wCVRrSPwRfnvy2DbkSacMtc5xjGJc4577TWHnneo1kS2orn5qGxc1Pq2M31CkGs5CD",
  "key19": "4m64kstJ7UYrZQbqL4jT88JWDarFcSLL68xHkTRFVPrDYVL14QiZg7o4e85SmfAzZUM77pmMAYwEZqRvwnz76qvh",
  "key20": "5dYMXfT8yNj12A1GNAezrM8RnPyEwLsr1GKQbrGsRoHJKcBCaRsAAxB5BXAPobamnj7rcwSnrtcUPXWT4MyxLFuu",
  "key21": "3phXhsrToEThu3novRXvQzjUoAUG8SrhirrjBJFFRcXSrjLwyfsYBxsDQGGdcMYnD6kqabkycgGSE4JUd12KYuyN",
  "key22": "4vqP4rHFPRdYUNLCf5djbh3L5rzVmopbX1FUyxXZt6a2xkt5Fcpw4LY5MTYFnuSEX2vpp1DRuAMRQQgB1ju2q1vx",
  "key23": "3Lmf65NKCKnqK1S9phyHbhscnpqpVA5FSNqjenfEcPU3Fbx2YzFuf6QspEhjaUrjSPvsF191obBJJMJ8ysoBF5XX",
  "key24": "5bch5UnPKKKuadZiFV4ftMLyWmELnM6rrmocUBJM1FKUeeoeVVima69Wvuu9jXHPRs2wJ6fh1Q77xW3WChe2MKVz",
  "key25": "5UaKnjaxBnAsjm1huQ4Q8zn6Nafcv35UqoJvE2L2QJk39vB5Rmur3MrRbeDLaLZQBjo82Se8oNQybg5ExXnWBX7s",
  "key26": "3mYJbj7TUhDjXHXekt7Xy2zMstSCaxh995eFztDzMbJ9EZs4H7tDaPdvBd2xNgw7ZGdWhQTr8xiwkpmCa6X7H7yw",
  "key27": "PJUnufCRA8togPbNjU87ag2EG3H81QbGV9CeC7UY44XJxZ5zVVC7qJPyyXmYLCio3JRojv5G4scQeLVaWBZSddX",
  "key28": "45K6SeZ88AreKL2s54ed11vHySnNmGh2ZsHaxRuGskTMis77zFifoiHUER9edJb1ybYx2zx39C6xEGvajMSa8E2k",
  "key29": "2WD48CYoGr16Jr2eHW9CReGmm7JZDLg6vkFtp6sdGgScseTbfV9mpG2uamZ7kBubNsGy9q3SnqZLvb59iGyfi1ZC",
  "key30": "4gEvuemUfiM6Qp8wySaRVFa2nDAbXsP1VMYKG6SHmXvTbRzUcRbYGHGfGKgZCc7fBB58qMa4g9Y7Aaw8Qcvbtprf",
  "key31": "5RtPbetjvubpWNfDqEqhMnRDCcabQQrgQBVq8tWyXxW3ZqKsjE7uYanA9Fj8LWhLp9XJXDQrLuJyeRkPuiVcg3T1",
  "key32": "5Mj6s3gzMwMB6G9b6RyZEsKLtGyhdJPwbTDhXJPVfDJwJvNK2UfHgaHQxpKt9Yz3MKCNUYDoMfnWUs8ekz7pEcvD",
  "key33": "4rhNReieiTaWyYsbRXD1HQRK4v8rpqQWHcLjJyKdYuUZGyWeMeRH2rAR8rJfFQM4wPjgBuTwLdErYzbCCqA473s2",
  "key34": "5zaXZRjKbFBgxtrazr8jwuTagd5ooKfrpZHVrxsswA1iRtsEyTjH2ghPC31NNXcXLDHiFZFcAiC5eXR5myWeFwjy",
  "key35": "2vJiLnihbya1pJLbNpypggMV1k6xnXHhAjTfCa7ki8PzcoiYqjWx9SozC2HQMgXjzAj5SMfFHR4ws98ihPnKQrYq",
  "key36": "CvdfTr7n8Xq6PfEjGxtSvvP51To5Siiz9NifXaNHs5PNny3rwdNdA2praUREV3yFNd52xZSeTRweybn3BmKRzM8",
  "key37": "4BdJMXMJu6hV331upzY1ksDYXMbBkUjqj6sNS79oXxbwSicAd4d4RYbGJtpZjXXwKapjtHKe8CKMjdHvAP2sepwZ",
  "key38": "2b9RJBs3VHqHaLXAvYQ1ku5zA9s8Y9GL1dLZUNMa9zR8MygZwCRSr3xipBae7txxCVQtGq6kWupp41MsKmcdGnXW",
  "key39": "4zZwTUc72bLnEH1WMgcsntgrCY5ivRLWbqu7arEqprwzw7SdYhWEHz68fNST7zwVx8LoHr8BsYezSoWi138XeeM5",
  "key40": "5uPgP31UBpQWdxUVLWe9f8AfyHSnK9Vr76jbjGDMbUG4wGrE2KzBevNAyFAqVDmvZcKnQrmeRWTp8rCr6z2aHtVh"
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
