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
    "5AbKze8Ja8yp8MSy4ihVyoVtZdngB4J3onejyG5pTeibPLLNV3dwf9yBAp5B55CDdqkYCk6Tjmz4ZjFxm8pK1ZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L7W6azVZs4AG9q5XCRPV2d5YyobsCAQJapm2jhwTG5o1D63AfRVHBiwQCjD75ZrDNXeGdhZVmHerzvsBYrQgLeS",
  "key1": "2qsb6nBwtXDQN2765Qd3wfHDkHZXWxnSb8g3Ky1ZPafxxoPtEjzHsPDpvFa1QkNHXTNw1Uy8G7NAd3Ar9EH282mq",
  "key2": "2oDy1ehirMnKbnnvVs3vwjybtv9srSP65B2XsfeAck5LZCHfetdUbXbHK6szuDaZ8XhzQqqis2N7JvL7Nxv71ao6",
  "key3": "FfXG5jCuHjMH3fDdd2Rqq6L25mRqdMKSjYnhRtfh4ehszmxfAbaYu336ZiVfcTn7GudMJNbqLx4xAXmSPjCZ54M",
  "key4": "4sQYM8R7Q1zb22CHgeijEjspbUQMYYU9DhC7u82SoqVfYqWTcXc8greNu2oKHEDfmkR8UXnNCAGU9oTNcShiwx3o",
  "key5": "5prXBLAMh2SLwEVPwqRTiD54qe3G7A2S1Tek7pBaUAiqxD7xPMKU9jRyin1vVZ6vRQcRF3Qs35TTdpakJCHMLKWT",
  "key6": "3JN9czh9Prqr37fikMUFhLvgTR3aqXYAN9wtJqsXyAdxSHHd69neQMKBXeaXLM3xYiZemETQpKCPaU6MivYXuUY5",
  "key7": "5zcacJCV1wxL2nvP75ZbCHNTavTot6PQnKSD4itm4vLDQx2EtiRoLYL3kCoRbkdgWXrig1NbPUCh2AVsu8WVxxdY",
  "key8": "3nj5Yq2WXFVVbzSQsLWt2mTRb2yx7x4CWMKrJx9wXjmNodykt1WT7DxeTnwouq44nh8sjTgkYa4s9VTQu2VpNeYA",
  "key9": "24wJsgcbd4drG3gWJRtR8MBp3D9qYA19vaSrhQaNswh2Qz3URkjc76XQodMNstj5zhqFsjHgnL3HV1K7DeVUGHy3",
  "key10": "4CGRyF4F7SazgZgJUkNZeXFwmXXZZNbSY4aVBiQqYtQSachTsyocYFBXEKkbPTk44PzcfjdSkGPU7uL5JDEX7pYF",
  "key11": "3o8RJkXacqCpcAyUjjwp6P1MbdDzTHDxDHixY8q1CWKimw5a4dk3EUz2Gon5SHcj5Hzj6ZYNVYu1mn3FacRDCEAk",
  "key12": "5eKBr4c2zjoohFLdf57roDdzZGTQXoTS4niBLZZHqBUqrjn4EokudmuECDnLxsStj7LfoLb65UmJWcJ5dDsAsttv",
  "key13": "QpTXZ63nkSj4xn649noRTAgTWvdQLG9GwzzubSaFzCFoaHr1Jmni7vPqAsNk4QTU82PsTETAVYfeJ1bATNTnvQM",
  "key14": "4BxYH9z8rsFCzVR3L16cJnTyJEJrafwdDorwaMERVkEBdAKPRfgppErUNgDPYtMyhcCK8Dy5Tg75UCMaTLqa8dCE",
  "key15": "4j7VVN7kgcjHH3NHswT6VETSPsMFSdn6KL5aUN7pNz2SAZdfuerozeDuLD5wPeUrr4ff1313CDc8UdVjFoYCuwCe",
  "key16": "2p2w4yDTZixyNDdRWBhHGXi7iaFagvVzajQV95MXritapmZLTocV7D6ctJT9yToNzMT2nyqW99DZ8TnxnCg7RX9g",
  "key17": "2oDaL8vm6XtqxEdRQWvUbAgqGCak3dcmXkS3wQ28EhDnDS1D1CEvgqc9NWnKemUea8oX6cZJYzuvysLW95CwQ1A7",
  "key18": "eK6L3MpUGCb8i3njUfiapcFbEGG9TMZoxwPBmR7RxBNKFENmxEc12DVkn4oHrU36UdP4c2i6AfWePyvREszpQ77",
  "key19": "2S7ShhGziVz9Ur3FBHaYqT4J9zRNcPbmKkEUgHg8EFiUWqmkULX9iVcNpJL9aTE7CAy6Xv74WxZiT7zha3ig57gQ",
  "key20": "5DhM9VcowbvoCTjMLQU2n8UfmJGBse97txFTHzpq22EeejmbMafihVEJ4mineRKLuc4iPeHZehzkpZMhHTBvfVXc",
  "key21": "4goLMc6NDsBQTsAEUo6aVKBUU19kut7G28Fq5PUwHmnCpp3ruF5XjTtvfvoPSfaqdYRZE9JmqtfhTNRyr7uJnn2p",
  "key22": "29XqvMQ61pLnR2S8Tk92ZeVN8B9ZLJtCUzzgXaiBYappbit52DgXzRwGbZJRBLdVvGdSbmdwLZGGRY8LLqJzXutr",
  "key23": "4bdzzMnCDfSAau27oiBpeahy5JFRfUwd77sKCsnASr7V1QcsUVwWmjBFwteckr9ExNnqjgfCsF1xasHTMK9bTPid",
  "key24": "3CRPyFhQny5cazEvr57WvQNz7tjMJX6yvPVo43a1NwpDDi7YmY5stArT6GaweVJy4CnrprrbDyTqsJ9L3meAddM5",
  "key25": "2s3dn59utPPhfRzW2bn2Za1qzSmtmE4hATKjp5MeWUeprnq7sa8dTbKJsMkovqvWgztB78FWr7i2yH3QLh2NvyZx"
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
