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
    "2GJ5WYQJeFbhCrqskyZzs3EPXgmhPeiQd2vUHjAZuT8quw6v7DcEK7FvLUYtav55udYfAypxsZAR91bwZQHvMJyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VGYW4baHeQNauFLAcYr3xrhMQYtrKSkK1n9jn3KLkzrhp4s8xwUCkYdo1wHdY9kmtMz5zikfY39sUXxShaRYVyz",
  "key1": "EeZKcBxFBDHV1aM7pdQNHvWC2QAw59TG48edoCCxKyqtA7z76mAmno7SjtvqnaCKLJKqJihhtZ7T6QDtig38rZn",
  "key2": "2S5UmxL535isVnm42vcDhc5inL8CRXG59XiLbgq3TE3zEbewVDcVyXf1HG6JRQ9KEwRGDCsJNBdhRK8LvRRRAker",
  "key3": "2Tr21PqGhvQ1aeFHaYXHxYDaupWyYhLqJY5xbT5GBRsQQ9vr7xU84eXJ1yfxtfSmUzBbBA9mdN6s3xMmskcjtc58",
  "key4": "tDy8wNMFxhGTsopZX5kL9YVJXFwgjVSLBbutBL4FCva8u3D5T7aewgPK8jyqcwujaNCoZ9LSPSHKUpxjRWbXrMG",
  "key5": "65XQS1QczAVLY6Gf5VgXA4gF6j2UpPEEjRXX9XvbkHSbt6qLFa8q1r1bdyyoYsy54ycJXFgUwtkghNYNgVSwhqSX",
  "key6": "5S5qfg6tVdbna3GHcYNJFNx34zLoaHV9JMa4nCpNzUCQWHa6t57KAeM6Ea3T8CTMHFG54b5BwyGCB8gYWarJ8iDE",
  "key7": "5Rsj6EWoiDdPVXiDxtsboMz68xuagHVayxGjE5XHhK9zmwnV3p93MFrE6Vy3q56VA1wnRjafCwHThxWCUadhWopd",
  "key8": "2Ya8MhygKtX4zwDiQkFMXMaCZNEGUMJLusgG78PAoj1D8gmuPHTGL5gRj7fUacNZUAkEGg1tbm81pHEx2XXnywLw",
  "key9": "3sT73vyNx9dXNP9pgvrBBhRmTiP1RDPUXUhRJez75y5YEDhGSHs2CM1LDNFLpYZeVxNGLydW2BWseRk2fHsvr6Xz",
  "key10": "5thD6eUemT9ub1PrNrXFe1Z9EAisWjqcPex2jWHKxVPVJQ4zKmwiWtNJyF3iiumdbTLJMEvkYXsDRk5owW1yqXi1",
  "key11": "29HbVsv3yiye5x1epUeuUmnsvTBdMbZEpnQxZS97bwFhuJAx5wmTN5Vn3R2TTkQjErSqwrtXZdezj7WNB8TeWA89",
  "key12": "5qQ1J2hi6DDSKNB8i5XTtKLpqepVqXUia2zVqmcDJ7GReHihsELSEYPJgyjreCVKc2ruQGfgmew9tpDV678M3XU9",
  "key13": "xS9d7R4xaJnFiZGzsRSDGcPJPDwE4xH19jGwGUsUJjTAzjZsLxFphbTj4e9id7myujZNGSkHTsvV7v6kwS7UqL2",
  "key14": "2JQHAAc6fiR2Cq72NktL6ASL6Ay12gM94Yt6yWJsTW7TWxBfLVKhdkWBwWNjj73hu4KauUueFZguoh9RNGCKJjEe",
  "key15": "LnzNrEf8dLczN8XjELnCg4NZXQLALcGeLfFMDUMMEaUy9KgkhWsH5rSaEUtF52sFjVBqHMKxShMxPmmLwSKer7C",
  "key16": "2EXTF5LD9uB46Vbb93p19gcTMBqGJEnEvARujrpbAfDfeZmWkriXyd3xfVRWLfvyVQu5uuEzJ1vuPC5cvmtTx6hP",
  "key17": "YbNapW9yeTWCggS68bJtx3r7cBPgyoy7cKTiX14v6UEZrsftiJ11s4vYcKf2sy5ps2fhw9ER4fnRTEaiHw5ts4g",
  "key18": "5GUDqFYrBWkjXN1bAoHzVstnWbBXGgYTjbMksx6HHUSaBwVUfjXoy6dSMrVdFGs1TKfQ3kXELn7UnhFbXR6Fgkgr",
  "key19": "2is8mq7ovaDvy4pcVCpGJyKga81STZRGssDVpr2LvrSiVyySt8c72Pfj8YrU51AKcLCmKrzbZLrrK9axTLuq5Vkk",
  "key20": "5tUVsZNwf9xETH9DPP25MVJJxRaLkpftcnwhVS5yMF1FxmbWr3kQxdvF21DEQJssLWpRmTbCAyVd8tBfBcmJ1gHU",
  "key21": "48cQKf9vxgzMo9AL91s8qTp9kv4QrN5FjtyoEPWMN1zwAADiQzrCraDKMtDB7aZqRqVsK5KZpsy2gffWW143detQ",
  "key22": "614sbjtLQFNFynSDVHbBm4rxhjYbd6BctnnrvXi2Now41dVdg167ij7sA8vVoRAyU6aW6FkNuiEL2gmD8cs7J8yH",
  "key23": "49XABpsSwHvXmvQWEvfZJDXCSfA8uihvZqa4xR1DZthAoCqf39iAm4GjtnnMsE4FfRGLcKtD8rFsHQNDeXZEvLzM",
  "key24": "4rKmM8SpVryqhrWS2js2ecxRaYAQRkMzB8jd6zoGpvtrHXXGYJfukV4Qy1E3GW1vR8g9RHa5wEgm2kVYcu3WpmSg",
  "key25": "2QFKYaXCiE5tP1ZthX3LVYUYUGL4MnX9pfAUfcQBt9295W8GvJqGri9dsThS9x9vDpDVfas2qox95xQsjDH81fUZ",
  "key26": "YHc2YJf45rDRqcDSRkcskYQ8uzMg5JSdaSvBLjNmTyhSqgx5qqfYYyrGQA1w9mcVCMBbwKt5WkX3WqevH7z6kED",
  "key27": "5jLQwxhtUxUgtk9gzWfMKQY7Ne6A6ccTjBQVXDpwzUfaDZMvFqDga9y3mZXGtKkCNCZr3jcvNqbX9hXtqfGTBM4q",
  "key28": "wp4ZcaWgjDEe9kbzpjPhGrH6cSbWZ4GoUX9gRBaDXD8uGXUqS25dVieipYxY7GTwWuuNbJhQez9ND1MMbauNQCG",
  "key29": "65fBNheWgZ7KxTbJqD5ocykYeohFxmMfTdgXEdXiE12igbqYCyhW4NyB4KTz4B7HZmHQ4q4E4UrStiFCSTn4GLuS",
  "key30": "38YwLbZ4Zk366D41sGPFKgioD7S6daimFXm77HekgRRugY2ad662FR7JDFvQn1e7WuCuAauDU1fEF2Dk53JCbjTf"
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
