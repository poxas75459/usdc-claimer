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
    "5e9ZbZ4R2cjjz4onMvDKybKLH599pwRgxFy15jWSfZhzim9r3Ay4Pi3MS2xDdVc7fgYndWbo7SQMYbj9VLCHrJC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tqPhj7UGXaBRk1igZT9zDoGsozfDjXciTztw96RttwYbfctGASFmKHTBPSAiwrsmHmcWLQGpLDPAatGbcV6h5xL",
  "key1": "FrAaxor7a6p8etTD2GFZsoEDcNYue2msSxrSbANUsb1xo4MJpCDvd1Xh816Uebm9WzwejdJiEr7TALaKYi1taCg",
  "key2": "5YmrVKZhkCjN5ZMVazSdEEs7r5Z2MVpbPKQxqa6NXRfZvMZunyq4CswS9gLS7cn4WsMywzVBqNDqhRnUFFWffwh",
  "key3": "Ku1o3p22quGhrj1NJvrvV5ivPb4WoiYvmFPVVszbuUPCAK3bbKbDRdayzFweUTQDTAQQxjhCyfPXSfJafsKeYvL",
  "key4": "5bobLC2E4WiNCHY5TVRdp9LbXQ9xpRP9kCJm8bPn7N5G8HzDDNo8SWfSr5CBJ7MFj2QKu1vmHkwXJKFR4vKhCYqw",
  "key5": "XakPCcnqwySypqAf2BcQdJTCY6jtZHMpKpRd5mnxvy3ZwB1CaxAxFvQYphQAPwEsMuTKwneZULoSNKo8QvcEzPo",
  "key6": "4WQQzEBjgoCVADo5iFCC7UFbwJM53DpkAdo7rWkxK1QrkBsfx2JmZcNmtFPd4yqFByhbzSpizfn8kPEJjNMjADSj",
  "key7": "mMt2WmzKnihS1wzQKqonkktrYDCjBW2kwAXY5PTm5UaPduzePv1KRwRgiwMwkkJ3dMYLa9qFYVAf7LKqfpdRGVK",
  "key8": "3tSzu4CUEA6b3RJTD1LzKzytWZBosqV4CZkxfEKpsnfVEec8fFinJGsPbaey7KpqYqyqatADoGcC1usRFG5DbwzT",
  "key9": "3sKksFt6u4BRs5ZWAymc71nic9nWTruS81Mpfs28YMJMyyCexkiDjUg4SBFJ62iEbVze9h7KeNgMzttCXxzA1khg",
  "key10": "xV7pHfkJYAgiZqYEBBybuA1DPYkyD2zYp5ytF6caqugmDGGDtqSyPPNHWm6X4faLwvvA3urfgqcGDWmy3qhZS4j",
  "key11": "3xUVWfujnWEpN6CrHfMMLSgXE8jRiEYbTwpuKqeu2rK8fFxWEWirAYVXP19UuqUFttT5tsj83xqi9Fm4Y9HzJokS",
  "key12": "3VP9dSymkJszswj9s9UZoowvbjMPgXg72K4sSZeGQmH3Zu8MRMwoC4pX1YyvmRz6tj5V9VqSZWtVQhUj96Aje33b",
  "key13": "Lrqep4uyGaKMUy9fJb1ahXw5XfRjyo2NUUjuzg5UzFLDVFnCLBy2okU1yiwrdYCUdpk7wjs9uAUQUpbLvyFCMdC",
  "key14": "2XTMuQ5Uc6TAQoT4aj3BFTJpbnhc177GBBpG4rcUb6b4c37j6uX5BUbQvu6xKFCqxjPuJMYBu22w7v1XphLm83kt",
  "key15": "5m5smqECacsEze5xrE4CsCd3yd36Y4otxyaRDByJCcPDSGn3vGTu9cnrkqBafPQzQQuVRJZAvREQMGvg6yjN8b64",
  "key16": "3nkPVEXRJuuNdLgAkL6oqYNwLg95qAADGKYH1UyW9TVT4BYwJL2czGwusNoYsD2t4KitAACtyYsi3J2FV1w8WmME",
  "key17": "n2CQeXZ8Yywkdjgqdb5xh67f9UjoDctHJTovQ1hNXqhiYEgXN5h4Pnam8JK1HCh8LfjpiNGgsrmbJHuPXHsCKBq",
  "key18": "ixLJSEXbT8V1v1zeV241Kc76TMb5WqsHV48BVAouBwY1C8eUJJLdWKqTUVXyB2BmH84xHPEUHYabCSvabcWmduL",
  "key19": "2r8RUK6YNa2nAJrWU3PsBbxjo371q87ep2CTxcXyUzjk6Rxyt91BteMZZ5u5pc4xFYdc4L7hp6nymKpf6GZHqDiC",
  "key20": "xFSaWuZSv6UAvzWMW8iJ1JWjpoUr1WRMzz6RCgb3LLthbMitqK9QFjDN4j7XbtJTL38L21QD2RkxWoD9xUbHB2m",
  "key21": "38Wd8Jb7VVdpHN7uqrA8bqseuEmbDPdrrwUXqdzqRufBhNmV5T4Jhnz22NeESz9stst9CSzpUa4iEj3XRQQNpH9D",
  "key22": "5P9of6DEMB4PTej3kKmny419qb5F6awByzxPF5XpV6akHyrfwSxji9Br6dCmbpoySse29Uqy62ZU53o6zwE4Fjej",
  "key23": "2PRMVxLVoS1Qd3mLPpFB7MbUBphD16X1nSANEAULBeRyXjJLDXyHxfTi22AfzELFL2R9VHokjHHNBRf7ao7KQXrk",
  "key24": "24NkCiBKq7Nqc5LRjBeHrMUURhKWMvUjriFVf5dwsSMyp4aK6LqS5RSCpQsD33uahvRmYLhHbRgEqNapT6TCpxs2",
  "key25": "3DWKL8J4ybmeW9e5VqivcaitUzWHautkGLRoTPaqWNk6xQvAhq56SxKmKUNSG8WtFBiNywepiciGP78Q4VASEPiD"
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
