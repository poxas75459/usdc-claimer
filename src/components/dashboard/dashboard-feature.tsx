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
    "3o3PuKfyC83kyk3J2fSQSC4dRyr4ZKw8X1q4JsHhwx4oWHFnhBRQj7uBCYR6FriQQnWuYzHYp1HFA2pAReckF9TP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d6sCgkH2LdCkfFyR7HAPF6wqS3Rwatv74BWiUnEjxqkNg4LwEzpZVCFNphZruddUPTChQFfFndvQ2W228phUJfm",
  "key1": "4ZRgGu2ys3dwpqnWZfPwpKxTvmYZgGmPF5SFzEVvfSbzSv9mRYyc2pqWJWvFqBdA69uEuzQCWZMQ6RtnmVcfxzdo",
  "key2": "4HuhKRt6krg9fSUq6xk6nKgYyAkiBmZxVgsNXeiARxHioypAwNnhBMcuVgGMmsbbfwNmMhsEKoLMp4usD8Msxrr2",
  "key3": "34fDEjJdjtcSkFVEFNenpBG7mBS1isbMdV5TNBnkbdueWnf98QHHWsUR8pm2F81UK8TdyyYpYPUFk24VsQ7ZHUP3",
  "key4": "VvM74eS6H6tVJLkykF5ZpBQfTkSt3F3KhAmR5ZugimFfdcSakswDCzhUb5ULChNjpkfNd7VnUxLdeSZWASTX8Kt",
  "key5": "4UTaNXTwfLNAUnhPGXQjTYBDcpEL3UBLNwAgbTvqRXaN3rL4QwhSwkf2cRhBkRJ3BUv4HapughpJRd3B1AoZ5UyL",
  "key6": "bHMhBGyCy2kiwCMDLkx4skhcEcNg7qfhjmtyU5tbCFhj6VeBQ9mK1S43J1R5iJT1UU539RnPkeqtJWbw3qft45g",
  "key7": "DPpwPHpaXUhZpuqfzxP5RfeRrdUAemtv5FHDPCeAqb7NNjKJDzvud1uTF4SDJwwWidQqcSNFVgR5hFebUg9F6Hv",
  "key8": "4FXda941TUrxdENvyzZ9pbwZ3fG87bpXiysCXbkbC9csdWqD9mNrUhubR2nq2AsAacMHH6JR9RkTJamUVRimzZ9D",
  "key9": "5PA5Ekje1wfWSMybZWEE4xN9chx7PebxnAn33DL278vHYmH6SrcVw85xbDErTid5G8dKN6Aqzwt4ssKu2ip4dZFu",
  "key10": "3gPf9kN7K94q9P13A4X6FFqAL4m9Ls7uVuFZr4jh3XGe1EJHtN3BWD7fME13mPqKLyW9XiZtnLBBJAHzrCATAuwt",
  "key11": "39bh4ZAU5Npc26f9eyStkwxM5Rw5iXXbtUFb9WvjPK1VS5srSmWbDeB8dU2J7aWbFitFHTU1JNqsMDZ4BxWizqao",
  "key12": "45DSMy3tZTxpa46Lsco126Ljot7Hs6CZWEmHAWDUkn8YHmkCehy31GG1teHDPKn45QRCG5EaxN9zgqJZimSTBpDe",
  "key13": "2MGhujuM2s2EMNNgGVQbx2stNudrEkQoi4SfqVxaA6TeJNY1bPHtbAS9DvDyEesCtvH2QcbNyzsZvcKRdYg8u38L",
  "key14": "T29c6kj6uMDaFQPEcMqkX3DzM8qqy7AHt1XFqHtJbbxF2JnJ2k5NEZHcHf9ZzdFK8YYQXzFER4dyxfuGFc1BSqX",
  "key15": "5D1yABK2yX8DQWZAjaKJHqqEjCPxryY2PC4fDmctcR82T65uAknAs7RFa4rMGvUR1khH49okpCM8dAasQwdSPz7v",
  "key16": "NqawrZdrTVAqcBycZ1a5p5ELwspUyFkuWaf1F9SCPcpB9RV4hSadpnEfZM9xREJSzvTpxa4QvRnc8chdLRDwNZu",
  "key17": "4w2khQgdH42TeLMQjjQNQHcVo4B2tNwePS1ijc7tGd9U4CSwNN6NH3VSQyYPs1xh2YuTHohrPSe67sjSUSh1hM1r",
  "key18": "2snRiDviRspg2agtvrXUbpEj56KrSNwudioAHUa9ERrX4S1qTGm7B1FJHAmkuq45FjhnsqQDUUSVfpJFJrZZ6Vsq",
  "key19": "36hST6V9zPd2iQXyEZmAuj69yxo1bYyz3AwwDJM2anFHeCnJLYgGdyAVztZY9aM8sHe9p8x2TSUggfQkfnSfqVLQ",
  "key20": "5Etj8hmTrWnELrcFiFN32R92ZPUwdbGW8SCy6k2uRr5YttNyheUvFyDjMVSqeLimF1Wc6yLMZHRChbJ1afxVvHwM",
  "key21": "5iD4VXQedReAPiH6sF1bEQNZzjyjRt6jHjg5n5hhY8paRdH5xRPgMTiNdpDncXCNQrCcSGtoDUw7pR1aVPGVGS6J",
  "key22": "4QundWd4Xc1gDpWEiQNj5Gac2nsRsh8yBtzaxC1wEfUEPEgzfpYak3E1LMVngasWsjTpVx4u2xkTQgWMeChUfuH1",
  "key23": "2rsvZNRA2P82SA9QnFdutqE2VEHygDM1MtApfiLALuezQo22PVN5qQELhgtVbg37YcE4y2pahV66CPFQZPQMqMH8",
  "key24": "47VfTZ2jtjfsc4LAZVbEzxQMgZNhwfrTD7FYFC4tKPoC2pT63rws4JakXDxkF8pg8xXLop2VRjnbu2BNhLontZAV",
  "key25": "SpDfVmYvDzvt9TzmMKsWjKagXrXT9SDM25Y16skCzAK6DPfc8TXTuiwNSzpwhcAFRnnrhUrFeMAdjRDZpyAkcUw"
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
