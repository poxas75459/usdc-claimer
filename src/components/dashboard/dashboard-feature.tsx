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
    "67pXq5v4eVtdYJRGNvyS4DuVkQYGk87vqLGvrrtzWRo1GyL18aUv8cnPRk5HWpHpDajFKxr6HzQUJZS8r2x2KFBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2oimSWfx5cFKtooErhnqpWA4jeQi4VBKxeRAd33N97pZTCC5UtqK4dk7QdLMpVekbxkkAiFwGLDTdibCojJWCy",
  "key1": "5JqaitJ2D4mkzA9aYz3D7uwsYakMHiyUz5dY77LTp51dhbaqQyqR1tUdFtJguPGShBkdsf2UbqiyNY1LtGSsVuov",
  "key2": "3pYfBZczw41BJsvZJWuQj67KPWkoxqAqVW22x9dpzUD4bAv6WYp2LvbirZQZv2TRquNzRpmMBK5i8SATW4eLjAnM",
  "key3": "2FK6VmrCiQvVZsKRTAhLhsez1F4r87JpUZy5gxgqNbQkHQFp4XtBDdAbmX5KX9bwZdczTsB8GmRuG4RGUbMBE9XR",
  "key4": "npMwibpqW3QLBaVe9ezj5amdYkq1QtfEQ3iokGB66wz6Jyw4wN2ZQLkhc2bbvLmHnP6t4zM5MbZxWemopXL4uo3",
  "key5": "5r4AgDThW7Cfmevs435hXF94jonvjXiGKBS1b3YsuQMrNXDPGiEUWtt6PCMV83gN7ZgmnuDPVEm6PNrdeWK6hWb6",
  "key6": "Krd1rG8jfQr4ZyuJ7E3fwFs4Lj3juJ4QV8Xsu7kaeK4zBKFHEGxtTyTAY6LHzFRCMLgbA8TLY8LWeotCu37H9FW",
  "key7": "3WnfBxmsS5xY3X6dgpigjqmJesnnPeKzNodPwmMx6os89ivyDELfqCiPoHRcyKD724vQLHR9ge3r97sAxeYbWhxt",
  "key8": "3asM4Bkegdvs8uFCpj15k2yqYibD7veZGre9zuBSVhzRe9pbZYEUdAG2S2KRQNRH6uC2kGpBjx7x5sp34DUGaKVi",
  "key9": "5ds1tkYsjepxiqiVkKjaMkGBoYgSdYmGKPR1BNHnDSNNbV1ywuPmSQXB8qCYhVSEhd2UxG2HGnPoJVEvcs3x37zn",
  "key10": "2LjDT1YjCQRvBhQwTM1ibWFbs2oDUK8FM9CFdDztB3PkodYebBJ4dPMuUps4TQ6cspXV34vPnV9AXLEA8jvFRqf",
  "key11": "28AJqkYcWD9hHoVnmjPaJ5BmSHeogMQaM3yVmqrqrwF2y93kKDKQoLbmnfV21F8TDmPnzHb1vNTemGuH4xy5PmvV",
  "key12": "3DpyVyDa1Ja3PfzQ7MLpUs3qXPpSWazQk4okZMnunSD3cuofar25i41w4yP1RopiAv1yD9gLNEVwANjF1k4Dnfyw",
  "key13": "2Ai2S6BcYCjgwC3dzz3MKGPmpzLWf7ATvvPzGM9FQBCqAK2Cbz2wX7JMiW1i9kciDJxJS4VDvUfknwuGeemADeqJ",
  "key14": "5LUi3YndwJ3z1cqgQce7YNTMxUyMyVhoMDwsDceBQPpfa2wBfXDhRHyo4UA4kQvt3B5Fn739eFUvgZKUzAs9ADo1",
  "key15": "2fwCJPzzeKfpVxPwSa2xBkzrK3kV5CjStsqChGfP4CjB9g1ZYUpsyVNhWmfjecTuFDW44ehREpLWvLSj2PiZyMRo",
  "key16": "3NneKAx4haFpmn1kx3Av34bJz1HcyaWdpxKmU116zynNBiZ6kL3ivSc7R7mXr5XS57y4NkWc3n7jhg2syEbfdpNK",
  "key17": "3DWSLJ6srPUwfgS48AVyzL3LQV4yQicZdAuYmhEYrb6iZJ3aiRhLy99mJQnerAiN7nJHQPgdntDZZsbAqocKU3rr",
  "key18": "gaQ9mrAgq7eBzrTtXEgFcBHiL1Y2fsXCuiPBZXKf9zAiYexBq18BREeHeuvA7B729x8GRGNCoHqNhKvQcmP6vAD",
  "key19": "46qU9kyeUTHZabaavsLRCeY2tM4LikF9paYGivjwcg4UVpeHJ9sf3NNEkSrHi6CgYKRN3J24PFB4v7orYivjYGjf",
  "key20": "5Jji4ffnmFXRJ4xnLdNUyka12WT9vdxeLwBikhqieetGKnja7Yj7uDioS3bNnoSijq3JeKpyzSqhYdiXqNPzs533",
  "key21": "3GTcPWzDP2afwDoohEiFicovRcVhJeHjexxonUVgxZv8qvbXuZSZ266xjdA8ok4netWhJdWyufWXHyvecqKkpBqn",
  "key22": "4fsrb1K6Yp6viivpKbSS5RF5ATyAbcjkb68bmMtcnpbxfe5wieu7ZnZDMve6NHVYfVrbihiQQC43zZssw67yaEjk",
  "key23": "4pPqc2UJnkeYRws8vrQ3PbRHM8G7W5g1CYboQ9XXdkyj7XFLik6WGwYXcS56LsAPckfA38jpYRv1Pj9Y2QC9Khez",
  "key24": "5RygV7J7PzhuHkHXasCK9tZtGfxnLhuLcC2HzbhaSkoe3iyuXUTDivfCu7ueBDLc639C9RXch9WNyRhwvzoQQhkN",
  "key25": "23bcHme6hDjqbgEg5gXkVYnXsiS5hp8gyoPGQuz9bBsWyYZQBKwdvWHfkpzLNjPMo9xbLYgybDd6huswxZucG17T",
  "key26": "JHgmDiyfqWYVwt6DKfrFjRtYH8gQVwUihn53SBneKbskVvDccnGywFh2RMQf7cfc6s6KHqvXenDP9aKEa9zFNHF",
  "key27": "4rPqrs38q9rdsSYgZVpZwptGyR6HMAbeZeCNGhBhpu4ELUxgkteyHbM1XHWE6bn4GjYi4uDhKgSRLL6Kwq4RSuFL",
  "key28": "kvsGaXpsQhdytoNxGb3boMn6c5JT5YnnJv7N9zuvtRMJk6LDoPTT1RLsbRuE51osCwZMXaUir7ZvfH6xEeZWmHC",
  "key29": "4R5Bn3yJRhG4KuJwXUYtQQXzVUkFzqf16SQb7MN6rPhBrnoYWoidFyvwKY9SrPbxvjT3FXmVfJWC8bb3KceWNxJw",
  "key30": "5SZ1Frwu6Pmv5ut6hQCvXsid1ocgFoXHKJ5xacyq9u1jrKDqCLtJPHbsn7M2KGd57mmUivARuAnHAFi5HUnAM5yh"
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
