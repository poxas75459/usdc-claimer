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
    "4fTufd9A6ijZV4d7bWbeUUoMR8uojZFMvJDtzTRLWoP7kSuJkzk6qjd7V5m2VadndoAH9Hy5kd97Lb5XvGANjhTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sNq3WLFHZgbFuckzeUfFUojdTcrrFqZwznncioAZkswJmZ1YMXRqnVuMyK2C6a2o14rAKXVzEZemUG568dK5B52",
  "key1": "MaVp514b6jbXohVbcbAVnzA8gVkkKsQ5VEvPJC5g3j8m7ZdtgseWQF3mHygFAgnFL3yxxdsWsLRq6TKrS7Tg3KG",
  "key2": "2LqfPKuVP3ckBAwDEKWGyqiB6yQeAgt7TXNNcR9388nGEMpLp2zXvkVGAjV1C2uKEMZYmSsXCsUueHvLZmzbvDNV",
  "key3": "2MoFiJSubw4DUu1ByzFBnx5yCmzwR3EC8qcbYDXm7JwQdgS9DJRS5Bbz11DYHoZdhmuXmkDj5MLMWKtM4ibUhyjS",
  "key4": "2bghJtit7GKyPWF5uyU33e13NrNGnJoSyj1ZwPXkbunE6JZT2GcmTmUdeyX1Ke9jPGL1QaoGSposvPN8zhVHW9Jk",
  "key5": "4rj1F3C9TwNsEEudThFgUxn9k1FWkiu6HDXswp4AcVwhT8Khp4oJTTJgdiiHqr1QYUs1VqExHpEkVW9EewiYWMNv",
  "key6": "qJfKcfe9WVqB73oY5HWspxigqNEY1UKruPMnFmKoMhCg2Ko4yRqUK8CPpV25qYEc3b8kCeG8TvdUdTHYrgspDMy",
  "key7": "1gkucZYnN3JtTTKvXiktvgL13uiJRsieucRBo5LZQFhUrsZGXSzGZ7YH9emduwXZ5cPFzosDrAS3Z8mairzVB2X",
  "key8": "cw1Dc5nXf4J3MCQ6Qkt7i4cniRa2CGB4coTmzmpvTUaRN2vLYEYXd7GBuygGjtPDhAZvizd9vcT1xXGTu5atAaZ",
  "key9": "EGvxg5ReuVCx9cSEVHciRFuHV2UDfrHoxksYPcj6mLLbPtxywCJBCBgL9KgTRAUjoVayapex6ZqB3tKQxUkyqyf",
  "key10": "SKqMahNTG9LgoPNi9sTjFTbLDvLJv7a5V5MQaBdfmNGD5j55NwSiEzZ8m1XpopkmJ8ibpd5DCyKWFRjS3g3mxxr",
  "key11": "4QVnieQUTqE7doKCsxvrN43MfuQtRoXxEgeHzkM18jMX9af2jYMtRYT39gWRCYd5f13NUJyEGzLRzbNRdmb5NmaX",
  "key12": "27nL7viRXVJLZaGAYfR1Jr1eBGBHRSohGjrvQ7FFyQ5ypsLVe5KXC6YcwWswM1w6YMdpgcAmR5AsHPju5RT8QGch",
  "key13": "4Q7h1KtMESBfhyV3ZAbqCTQaNwzd4GybUYv2XETpsKFpdvPHJXB1xQ7otMX7rBJ1AwYbxMsVo4294sUvDM3bahEW",
  "key14": "31eRvRhL6xDwNzZkjEn899awMgN3wku9T3iizFTw242L6Z8Mhwj19QebmFrK6iKEEpni5zmQxXeYzfs1R5jaJQRc",
  "key15": "5ZJTpGeye8G52pmRUfyRG2cLxyXo5Jbu5GeiKW13rNo3SnGJdwUdBQHouxZJ3qMYFp7Go5oquwHNWUJMHpUbSrMK",
  "key16": "3PNpjCG2iYDjgxuuaGhQayjHnSeo38LLu9SuzCUkDjJfqx2mtq9iqnkyfpPEKSCU8ZSdYDY72yNE7q45g7hsCoTL",
  "key17": "9SpT1npMxSoDDoR8G5TiVJq8wJvCc8QqVEGmjyeU9EzbPQ5d3b3fUjGEYvk4qc72XudtP9oLgPJumqFGMbSe9ow",
  "key18": "4pZHUZZiFRfqr4e1gGoJkZaDP5i9L7RuwZgw8RwxiTCjtkea7H42DyJCWAf1krgBjEdx5cKDbyfnMrPyg9sAKYdg",
  "key19": "d7kkXdsNocyVU15h1CBGZd9PANfT55XVnAsLKoXdwe9n7cEMfSXuc5Quqpmrm2GLM33VtRJEvfArF1GNKvjcvtJ",
  "key20": "2mviwdX5MBQ57Y3ZuaD8syjAWd8J8Kwr5U6kP9gciftxnSuKLsXWFpr1ar3pFCZEzr1Rq1aX9cYD6dnaM87zb3jk",
  "key21": "4Thy3Y9sQUD6RmbJ1BhhGWPnwuFqQsjcdVbSumYz3ut1n6keuFfeJQAgMHuch4iABBYnFT8PsRP24hAtpqBErsMv",
  "key22": "3sc8zmbgoGQHBHFC7a5yy2zQWbGSMKNj1PHEisaAMQMKrPot5HUueS9qWUGG13QshJLg6c5CAFBwjMHncdrsCCUq",
  "key23": "5Z3t2iX8CbDtSQNAYrkeFjFp22nBnSMAaEvWGPthWVBniQi3kX7D1UWcF5o6ek2F5x8KcRUuBRYGGA5PFj8qLFA9",
  "key24": "414W45QvPsLQvQ71BBTDioSGS6b1csdtuY9zoA8nQqnsZ5HyV4RTkR5wEk5K293WptQgygPVoWDR6B7sz2mhPaNJ",
  "key25": "3uDHND4RUzmAVi6bbEkvrhfpqZ5W32KdCAcVetnydipYZex2jnKr8BBziwuy8MpawQN5wW2yRToc375groEsYNPF",
  "key26": "2fwXDrjL9pqiJB4qUBbUkriGU52zQTumWEULsF6pmRfi25YWEeJnqu3cnCdCBPS8NfXi5r8y4d5JjgD2dK3yNBPw"
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
