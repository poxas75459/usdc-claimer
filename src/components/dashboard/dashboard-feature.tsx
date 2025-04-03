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
    "5D5tAvcEGYCZ3ewuXvHCrbCUdEA62SFxfbvGKtCpsXA1vohVwbPT9Pput92JN467nsCv86hvfbxspFEhjpFo1ZDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z5xhcB399sLk9umh31mDTdjqkNqFXmM3RvoxKEr23tuvtAxGjNqv2QpBdceqrgd4NabAM4GkMHHpVZBZMN1EaZQ",
  "key1": "3Ny1aTZxhWvRTZEwuHW1rP7rjKNwjuh945tnT77MDsak4cFaHQB9yKbQ7rcZQ7Lq6j7W987N3AjSdrrHnPSNGxpg",
  "key2": "2rTVtCNG7LjWhCT1oybHNsXq9Ae42rAoWscbyJUgKFE7DSQYTcdbESPPaNK28GN49FHktcdcVgLdaX3y2KGHSmPw",
  "key3": "4Um6D8KQJabe2jD6Lh5LK92RPoHgcsUpZ1rgJ6ieaNMkxe3zF6TaPFkyoj78Xf5w2M3rzTiMCyJhPbXHa9TnVJ6G",
  "key4": "5K3YHBTatUq8b8NHAvbro7GMH1z64DkR8kK38Uwxudoz9GDSunKcpmBQeiWDwbWLMoU2dV8w5TikSzKYHhV7RMjx",
  "key5": "46XQMw6Etuwv35iozo3KCrxrgf2iaD2ivRtcBLteFgML6uH9rRnnzW4Y9o67C68eSxgAxbRDNX69YxAErPFrN8WS",
  "key6": "3kremoh3GqxykyZqE1hFx2ekbEC9YJN2G2VzMqUgUhFghPB9fyhn6GLwWoVwT2hExe5jJKViC14SBzBPakYNbhCw",
  "key7": "2EyQJ6tjDE3DyH4h5eHnEMvbRj5zvdePsn1Ren3BL6Hkwh8CMR9mYNAjdyekYejEoN7gDBtMWLum4XFw3MFNAj4t",
  "key8": "2TKVw9YeuQVx1gFc5XX2onWBx1FWzMfQF3pbp8dZw1Qe3wqrgDgDkwKnEh69o3zDmGt5C5WEyeaSLjc8LEVQcACZ",
  "key9": "3NkynQKyZ1sniJwrHSaZYr1gDavZrwVQgkcNTx81X5cKxNwqAzkkp2M3RYpYXFK4qhR9hqHF79irey3y56Z6sQYn",
  "key10": "3uJWXGBnxvVFd1VqzDrC9a5NJU9FaxT2thFTXLeUVFqgY9d82xdWGCPt73tpzfGLruk5DNgtEZUXppQeDfMJo6DB",
  "key11": "3NmZMbTxjvVJZrPLr3fx6UFt5d77KppwdLg7netTFgsfD2QGtuSZLdHVjX4wFTg8mWi7yY8VNyUjp8GqotTjBpFr",
  "key12": "4YrcTSNA8KVd6KEmQsH5NivG2Mydd9yR1mAk3mXMbvJPSPiQRZCCkm3TKGTkr5AELEtsKTnJR7tcNcoECWch9NPm",
  "key13": "4A6uqBVJ6yzRAqnD5k9UYZDE6rDzypd2uqt38wXdkH2oQ5bsDH8t5rPweHVtAbLU9aUXD1GcMxV2nGxw1Zatqet6",
  "key14": "tx4LbfgmKSWrh4Q5Kcehu1atQNd39BaFSQKtibTPqqrTNaNZhz8ChMpGPP1TVqRy4kGKcFrfBQxbTn4SnMUe4Y1",
  "key15": "5doWQoVwsdL53CtFdrEZHmbyiMXL1KyteW7Hxgmkq5yr7L5pSvNDRn715GANcxUbPbCHE5TpdmK9YLw41aa2cHXV",
  "key16": "35Et4Tp5sRRcrtFMV9Qz81sg2kNLHFwqk12v1BsKy7BM1ncjEAbDHQHy1MqN9kUFcWcY8EGUAn98CNMeVtWPHgCh",
  "key17": "29xEbMHJkQvhDumCAvF2TzM69R8qp6F9rkgBCr5dWgmMPd1Sqm3nZqjZZKEU43GcBETzwwmUgLchUnTUoW1nsUqQ",
  "key18": "3SqL5Wji2BVawPWxfBs9GWFAb4q2VcTpsvfXzUCZbebsHpZoVpwVQUNcseR7qWvQi8MCtZvBXZ1hyWPzCwnG1g1T",
  "key19": "66rB2aGg5kRNDe6Ae9HJn9QGHdH1ka7wFYp3YBAbqm7psNbvN1LiyXnGAXiktgSqpn546eGQMKVtR3CX4iDsG1KZ",
  "key20": "435iDaBiEAb9NptFt3uQFZJHQAkvWVpZ9pzXFpf2iae6JFXRFauYxQpEXEzZcNz35nWSs2ywuGDEBwyrQ9v83gb1",
  "key21": "zVZdeHAR7XB5WwNF5pG8PLdhmpQzE4Si9Wt2fDsyiRymbt7zh8k5V82W6eng49yF4pgqibitWJxTxHgnPbszGkq",
  "key22": "3jG1X5rvFUxcbiQoSD2NJf8P5ynryLxpqeLm2pUTKjRAmo787SV5RdTp7fPt67tZJxE93Hnf2R9GVj18hicwC6N1",
  "key23": "gkrerVkAh2Dpm12mDwjQyFqW3Ly79xmW3o8UMcsxnKuyGmQv6QbPW9eoobcVaGJgXWPXWwf4RHM67EKu3GTTNAU",
  "key24": "5g14aasNPA2T8EyjbsGfJqUsodZ4ty9arrmZgizugCxmJqS8RhpjS6JgiuCHoyxuimCAiNfiKLMRQnA5ykS92ReB",
  "key25": "3Ve1TMeSLLUhFM4QNHEH4hxvoN93D6HfVmxfQA5w7TaDCspDN5u7sGR3bYp7fZrA7gYFqAkqhaD5cegz9jB57Eno",
  "key26": "4tGgxJDG23e6UYGEm2NUMNSRYCfvLyzUH9VjssLbAkPMGsd2Y2TtBy1H714bqysqbAUsYmXqokQy8JtD9NMryWq4",
  "key27": "3e21nMQSraPfWTSscHubiJVdDDWBjDnynRPkoyzutgDBsJEpfETppLDVWgijdNjNDUuA31NVS16Ha6Ky1kDT5DVD",
  "key28": "48hwXY3ZCb9ZBNTAWJpC33LxQ1qHHuP8XTLoGKN95MUrr6UgQY9zRU7taodeLS3JmhabJX3LwNXMwfF6moV785Nd",
  "key29": "2HkaPwmX3iqethu7M8aV6zhXu8UMy4JjhaSeLhH5vpaXtFizrxPVFc4vuTsrawVBMHbZmAXDMNcyEDDeAoYUrUSx"
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
