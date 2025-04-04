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
    "5UFs26LaBhTDV7MHjstogMMSRcHBgZCN7pSRbgADY7BgU9LuWM23qBBPzF4mcAr688PetTj28Z3mXhd2NjepSGeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5169rLyhBXWRHmkFWj7mDAfL7n3EjowNFK7fBW18LxQUuUc1dH5Bn5Tt8PLjCSwWHoidYwYM3bn6hGCBsqS9dDie",
  "key1": "26MjH9qVgFsKSJ7uixV9ScikuCGbd9Y5yBdFXYaErEFJ86VLyQ4HEuYn1WksfJmE97dqXwboApcP5RZ8nqxDWUv2",
  "key2": "2gG8Hw4KLXf1sUoLUipm6LrvbJN2JjfGKPLd9GgDqM7KCFJLb2AxY9zC5zU4i74shJddHtZNV81TckwoMmCTdoHM",
  "key3": "3ys7xHSorYNQveSag6MCebUMwB6M1j9vMXv6PDaSbwziB1zqizRnhYKt31fvqdMQYayqNfiPNnh9VQEnhRdumCw8",
  "key4": "V8poKv8KYRjUmWVbK4fD6MGeVxR2NAYTnPTLCdsGeUhKd67DtEjwKicvd5LgYhjXfE4RsXRHYREJYgvA8RHhtK4",
  "key5": "47SwRHPaMVmgkVUkwkdReJGgTR9UXq1PxiFrod9zzBH4CBLviawdKxYHvPP1cBZfJEdiC3vnc9jXSgH4UyRPhYWM",
  "key6": "2cmosxWSGz4ioqmN9wwhH6NU1Kfi973wPDHyECNTLLerS9ifGeBzXNTqCkRKkGrSoj6rADFA1zG3C4NzCp6xqDhf",
  "key7": "4r22aTGTGjZ4Dt4VRsGakymeMHrSEHQad2MfBHN74KvQKLPpL4SYnGXWFo98LBzGBEU2Dgq5VC8Z7PJXjvrg7mw2",
  "key8": "SxpNmd26AGAN57TixADHVBr712HmNZCWFTvzPpipNavcGGDsqJChBvTtLBgePsc9H6PYTBbq6oaNnYX3Bc6VUXH",
  "key9": "Wsyuhnhh9r2ZVuZs3V11rTZLPzv15zXZALQ43NKgHWvNYkjnBLZej9q4qJ8iKBiv3SWoXR8KYdQUSWHVnt6ET8M",
  "key10": "tSawNKx1xburRE3s9SoweyLsFaZq5jXVNz9i8KbqwNbdKbY9v1aV8VzrKaqV3wVnR3U3JSpDckhbyS5ptvKTkq5",
  "key11": "5bpzLWeMU3TxqZvBh3HyJc7eGukdukFZTaqNTqsDF9z27BfV3DuEhtpqHX7Q6Uo1Ym7CNXpiefHidJXi8FnC4dct",
  "key12": "nFEeUqWM2sFh9fjrwGi6nQbLr6118fJv1efQkZGQt7iy6QiweMVQrRXRqCfsJ1b3wBD65K1CHZKUYu8ZUXgSBci",
  "key13": "2V9fRBFnyANhVeyv8ap8v4yaongNgQMnjTf5PYWTVQq7f5wTyHTAxbQfruFe2pB9ao6AU6BXQ8HpDwuRb2qGocHX",
  "key14": "4YYPf3V7c3gvzAMs5yyxZ7hKaD5hjzzQiH8xhALMxDsFXMX727KGF2SHUqDzTzUV3e7noMNt5xDVRpk9PW56qDy8",
  "key15": "5g9xsPCHHM2fNG4EDy5gcS43vhBnM4GyyTZDWKCAi1886V9w6fPiDbnSqV5LBxptNroGbvaVUJb6RRVTv6tuTjD2",
  "key16": "53jb2PfYRadfSofEqEobvCpBEWMLnbE1UQC3BsnMEziTDbU5oQn9cJJyWiJ3Vi8wD7f9ptwF9aMZWvJAqbyapjj4",
  "key17": "429bvUmj9dGdzkjKKGJrpciNDw7YYgN1Lqu6QNPnV9NrbBdu6wrRwgJLG6faQT68kUfD8YNR41HQJf3fLoJePn7T",
  "key18": "2jDiQchEaVcHuoDUoYsbyaRjUDJmh8ozyfya5JntqHMTkYt72T2Fu3giFMXvjvCGweQqncbqnvpUpkCmDC5iFf1T",
  "key19": "3592ySUVY3BMYuDgLUSHu8P122YZJYovu8R784HMMeg72C7grQ8NXKxfzsC1T6X6Dazr5v2RyGoNG3ACrssv22gd",
  "key20": "3JzTkTwPiTyfy14FMPz9wY8xGLSK54KWyEQUBp81Ny2LMxR1hkk2VQHQ9BEEMwgjgHWz5N7e5vtA1Q4WrfPpQLfb",
  "key21": "KkCPXXJL4rfpK3ncMbbU3Rad2c9VgibckpTGfPGKyrMAeeNhiFd8vLs7mKYp8TbBZTPTUHX4MTpsnBzjUJgS8Gw",
  "key22": "29haKUc589LssSQnb2oiWc3jJb1SvxcY1FxqrxRTppLKCC3c1Vkf46JTh74ayCkfFARuZ8xirBdSHeMCbBcCmkZ2",
  "key23": "8VYCg9Cv2BAdyF3czRrjxmw1dyq1RQ67Na9wC5PoQHG9xJcuNeo7Jn9U16a8TfXs9nS5yCXmgyGc5vDTz2j7HhQ",
  "key24": "2o6rN5ZR265dbayi9wcMSCrvXH56XaYHMYASutbbtZ82VDWgZLef759nE5pdL2YnhJyrM8QFuPZtGzPEv3AMXq5m",
  "key25": "346MsPsY9J8kQLxnqShC8Lbi5kdtzrABR4qR7z4q6eBZqC2i9dACEYCr1yJh378eP89nWsd8is2ub8jUiuqVhzmz",
  "key26": "4f12oUA26iXaRf7bRpRKpp8KjBrSD8pRP8umCk9UTehUTQyqJT6yVgxrf7eRJUrisvQf9K9N95ZAkJj3ag7zPCDV",
  "key27": "3NUHjDXugbQFcqpMqffVfGDh7M3yo38fcTx2onXPPpLAXahix1CknpnLEF2mGBw5K4z2i4dmYf1RXgEGLeP4ibMN"
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
