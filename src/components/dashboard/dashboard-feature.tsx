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
    "4F7WhG23iKwpyCvT9FoCRtcZndCLm9USpLxAKsebasfoTD9VfFs87GpSgNRZo51c7tnqqiy5yXnGwNQRhX6rV8Rj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dTHCX6BiaSEhBovLqXcKxHHzo8aDpzjZLq6DC1Csq6T7o6bhhwgfPjETkyQXYbwL654LEEXKyfDCEVapiiKNjMM",
  "key1": "4QBdAnwnnyuPPBMEVC6nMfuwJkiRp4Sboues6vsqAGsAZR7KD1rcudTKq1ELPjgfeycs3QR5FYQGFVyokBKccQ6P",
  "key2": "24BNf6nnrMhbZCdLAgnZHtxGb8qybubNTW9qqLF89asuS92RtufXdNHa9tf9WGqcEqYh2WMwwLeuzGZNCgAhiNFq",
  "key3": "4UnWt2CvJ3WzookkeuZ2kQUFVRtHYm7mXnU1WEBXcYVNSGyoec49gyde1XC88mvNtQokxFTz4RVSvEaL7D5fmVGg",
  "key4": "4USwWnmcdAsrMFuUuxjh4qVTFbBakmRCu4EcDo3Jb8JwnkYhqQzaEUz8rnm6CYNgjuBCtp1sxtTR3nJE2s38xzzR",
  "key5": "Wm8ykjfQRQCBkNfXaTabS751Dc4PPDLGvSLF8zAcWRD8t3n8uv8oYBBMkQGXG66giV5bYdbh2jgh6x55Eb9N2Te",
  "key6": "aFzMcGNuV72jatXca7PqJNtFod8G1DdHE93cZLd1JZgpH1btkeRbnWamT4ocRbEnapmN8xihj1ZSo8Hb8pxxMnF",
  "key7": "3vZhUhHzoHABzxFZL557vpot2o5fDc5Noz7ME835fhtvbSPKru15cXfwoDGsi2VX2jR9TcYbu4UVMawHUwzUZHpg",
  "key8": "5Hexkij7XVp359gfhrKvLAbi3xhUizAN45eza4w31by5mJVMNhhKQnY8mhQHMnK6byBoNXH8YZ34VP2GyYmJ6HV",
  "key9": "5gbkM2ZFXm4hsXLCQMASVmANDRfaPU1reBdUXyCRH7bx6FYMMEY346d7XPnxpg14fDkNipdVMa8GgPh3fAu5xsaC",
  "key10": "2FjRT96EE3pyVkptYo4EEVxZfkxKRuUwvxSwStEVbeKzs3sRPSREFpxFFJrV77GGL1myPpBQSaS5PPNmiKaRyMqj",
  "key11": "2jzgppk6Ap8efFZbqpFuiF1kAKAQdYE45HXgFudjJYZ6EPWDg4JdA6VCPov1UdVzJB1fDTMHnYdekFJ5YW1HKkhD",
  "key12": "23t8gGABoq3yKQG5oT1LFKVPBtTpK3DVu8yuEybSiuGMskzGwSyS9WPGJmskZEdLkWpH8Cho1zHWTeFmC4TdUAxz",
  "key13": "479C6CY8MwCiwkbsFpzPffTmkir689Vo4B5A59KBbXHy8H32w2W9bGcz9WPt8dVJE3HnVXM1Tq3SrPnzCd6gCnXE",
  "key14": "4KXyX8GLuqb6zvB1nUEFSyFJgMaVuvCFAQ9wBQkT9F3Wi3N7Zzmth366AF9vCBsjc6qCBph5MuvhwGQQkv2RP7Ap",
  "key15": "3TGbR6fXSjtVbU4m26MJVc7QRr8LvCLxMU6n5HibxLsRoZP7xZBnFgxkUygHyiM2fnPVJeJVN6Np7ShdywMQSkjM",
  "key16": "5jfzqBjAuMh5ysbehp2Xjt2vJ8YKxyCBZKX571DHYRuY5TfSxeWtTwsUQKnyrXoW4fMhhAWE8ufZCLfmWtAYkJNq",
  "key17": "4cg9gVzBpF8Vq7VNJvsCMqsmwtkXrzAHnGN8Pjaq5fJ3yFcJMvev9wt22L9RnEb7vWjeBwHNSePbeigDm8Lb19aN",
  "key18": "34ouPE8Fc6d465gCNqw7pnYT8VjiLwwXCCCyZsre6fqFGGdp7AqFC1nGXGRiitZdZwdiDYq2MFqdtcHxwAHh4Kqb",
  "key19": "5iTAyGyHZ9gJHmJahn8gg9LCRGYpn5eKboLk4w7ujc1FUSjjpYNYkWPrzg22rht1QACW5btVtwYX79MxF4UF6CXK",
  "key20": "CoeaHKvjxiTPEkFusp6kGoLR1Krh7wvKqxGaDVSYH9Vj4bNFgsKbvypu8kLA7DBswoJURkBSeSHr7KHisRDHT3b",
  "key21": "4XX3RAw4M2V2pzzZ4FgEe5btsw398S6baF5Bp5cqL7LH9bC2eVxucJv9iPFtk4miF1GFYCtfovp7mfxrnw3P1UVS",
  "key22": "5Njr5tS4MheTYwbTuKyfxVMdWHikXFzgdHHZDrB13PYdnqLyhvFT4LYsVjX7F16NaYPfT87Li6d94tMg69sjNorG",
  "key23": "2CvsEa71hjAAGczE1fQeqBvptATJQh2J5Rh2JkvmbiLxdS3brv7Vzx9X2apgyDT9hw4C9AuLHFUQo44217kMVRKa",
  "key24": "63NqHbLQg9M75ths55PeLE4VMXuKtPzcHfkjLb2TtgjCxzVCDDFDAp3jf4NkvKnLaP2sVEyAyQzeaAf4GrcYim6T",
  "key25": "UV35rLrb5kVHwp18SBFaWdAN8ZGN9Aqa35prXyEoQK3ZmuzDiZjmsFZ4cnJsLGqmkb6sjCrWLD7EetDiPDc9xyQ"
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
