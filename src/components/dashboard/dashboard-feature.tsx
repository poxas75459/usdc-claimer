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
    "9oPKdVEFKUG4HnCrsVTzsX5SdaLzLYMEM8wd9hrurggPCcJrg4wVfTprpHCGiBjVyPR8mSJ8kHVJKnVBw9pYXE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59KNgjTmUn1YiCUFsWF6hYyPQZeuihnu5oCcF5vVPCZv7X119vxpKqQzkf8AuUq5tsh2F1NhWozvoQJvuDH7uHFi",
  "key1": "59quVTQdZkzKeNTk6pPWgAb3LRYWqCyeU2twvGTVpCtaewqKZMrqx9iWwKxF25kTg7VdpZfvQnR19cXq8DvwysR2",
  "key2": "32t8XpQD6c4XxQ5kpYLFRFSbWzZ2HiVKHhMjKLK1SvGMpVaF2iadCMnKcxrHCCKmeMc773tBm1dpd7XxbbNprpCe",
  "key3": "3fnWN2uw7QeoEqBdgrTvBWJiMyDjRwHhNMBJ8eaTbe1rkBcRKEbPM8UmQPUno1KxC4DhLuXSYEC2bWki2Ro1yqPo",
  "key4": "CLQYsGFKy1bibf1afRoGYytyjCsm8VuT2AQEUFpM5pP7GsZFAJmeqLwW8FuvmE8MfwNuFuJtHrsWUkes1SWTEYd",
  "key5": "CfxLAaj3Wa11n4R818h81EWWu22zn8cYA6eTQuJpSj1wBuaUwkDzurPDTBvRyQxxfAmV3wjLUAVGDx2KmZPMcp2",
  "key6": "4xohio918cLj4vo9fVTLRq23PLQJfkeoxr5rXhqHC8fV3b9SZ9Eo3BNypLUDfgQhJDKyPF8BRwgRFxThREh3AiNQ",
  "key7": "51nwcgdfE8cRw3YXRV8uQLzjU5DWjvPPfqfE3DBkTfQvDegkodcqwwThrY5RSgYQEhexRrH7xQrUaMYRJRGxJTJ9",
  "key8": "4aYsKFeXiaXnhxJH8QmMszyYuS2YjGKeZtkYg9uqtbxXhgihwWgsUTCSeD9joaPJCRybeoRvC9hV34JHcNKXEPoe",
  "key9": "4m1kh9Yurajx4F5KfU4YfKgBV9HuTaWUZFw2QvWE1XhwPnfgNegjJTcALS7qKqH8mGHUXdaTAaQFWXJ8xYj85bHL",
  "key10": "3pZKPpwp8A2wgZx6DWd45H96gNxyzx52yQPFH8pqngJRKdnvd9jJRTpPrQXdc4e6DDvZFpN3d9nyt4TVeuPh3jSc",
  "key11": "gUUR3vcK3qsbxS3BNCUY7fi4wKhpB7gqQHpgZc4WsM3r92Jcn9iHMK2tzBo1BtJZNK1zjFS3WAxVfozqd8ZsNpU",
  "key12": "nRSVkKa54rzfzJhKjkpYETEk5wV5k2UsvA4oQa1tR57neDZZhY2HzJwYFdj3CFog675b6vej8KFY48gJ2mesP5g",
  "key13": "4xe1Xncr5nfHfXRUSmQitp2vub7u7PY7Ffw1VBsnZwECDBwYu6GF9XJ6ZKJqfFrxcjChUYbNBqusyQTqKeCvtm9a",
  "key14": "5XvDrs6gSkdgm4LkpMNiyC4eS9QoiYbiFQktGq91QjMx7F99PSvBNzB9suPfzgEL5AJR1gJhDGmeuJpwwBo7AtvA",
  "key15": "45qXfmDjhLicujLfPNRpW8dPvWKmqZ9kCasMgbYXs2GGKUhTENCRmqD6M6iWspjpsgZAKCyo4dTmYcv3RFFpsMGC",
  "key16": "4s3AMsibdXbd88PngSCFBPFGVyfAugRWfUZUg3bafbPfrEoipvczEsjWfWa2JbGmEmL89K3wQH5b1wKpnxqr243F",
  "key17": "3Kow5RikQwrWw3ypRiTiLrLYK6yn8AWNWadQ8UW2rVx2nfAmiJpz8oMWqqF4TXrXEHtJZuQGngmrHUPfsmjsNyS5",
  "key18": "4j2jW7jTFmZrg74N696HKKp7ed8uq7RM15RU3pyPd8ottxSqfBxfHbBjWnKrzd8XfhVEnKBwfMqbNpP53BcTWEZ8",
  "key19": "2cyTFC38qvMCgRhdRr4oLur6W4piVn7AeUKaDM9xg4TuGfzzjd8tEqKSPLs4unA6JYQgpBUry9HZoPdN4vFQivQQ",
  "key20": "wePaEoMGoFQYPfXUsWvF4hoP9qqj3nwZRJiTH2KAwHXKyJVHQC255AqhMSWFW68zv6Qaq1BpNCbhb3adigZYeFd",
  "key21": "skBG7huSxG7ftrdia95kagjpzyP7dXr9oDNnopkbgauHMXNmbRBN4KLrC1oEnXaZ1ayv2s4rokLYW8pZHuroLKm",
  "key22": "47cYNQUXcT3H7BKxq9GqETv4VZCVfsf8vytjidyFTF1aHGPM9VG5GTUZSEZTVCZNnKQKkrdaS3pHL7ExtwTBdLmp",
  "key23": "3GUY9huTa5e3EcudpTqGdP7qUuwvnPovA89dRc7UW3BBe9VSXHHt69WCieG3Pgy2H6f4zoH2kZfThnevCA6hDMbi",
  "key24": "9maeT1C2Yk9p43Zhpvy3rDs6y7L4hQuJmQ9VNRSu29kwoeFKStQHGmeuwT9pBotbEAMrpUZm1QaxGxaU2fD1R7N",
  "key25": "5ys1Mm6aDAAexjtAGz7zhLjAZ3T76WwkV4LCRPoHXHxEPuBdWPA3qUr4wC9fuQGEDdbv7QUBN2ssn2G9NhFV5NeB",
  "key26": "5zmQ8LSg4n6BMQzWD2DE6yBEhhfT5pBpQsLP9gXzAVecBHAMYCSCKdBnq6LZweQpbRe8k4RJS74puhsyPWSNDzuW",
  "key27": "4AFrRwio3ikMh69VXwXyv427e8hvTr9eaoPNQ579fbZgiLN7qpL3Tme4RdZSmYBhqX4qdekVLiZ4JBWEKCakYXC",
  "key28": "27Ke8u3B44nnimfcdbmPoVk7AAW6Xn3CVtUjbRLJsoFZvKKochQyrUrbCSsTWFYLXbCkdEcyZPjwntSYbngn5vx3",
  "key29": "2LLjqRbFwtgQ8KYn4b6u2k5jGcXYVGWBjNtx14GLHUXvyV2tNcEqt1kvCqvXsFFW99BCDbh791H6iwcAGzEyiiLm"
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
