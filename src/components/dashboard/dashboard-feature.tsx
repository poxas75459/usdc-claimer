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
    "4DKiDbq4BMYusrata21UE6tzT7TKzmRKMSFDJ7TRA6gTaDZyKVkibpQSkRjL3JW8hmHFaLfHYThu3cd2YbCAf2iw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2onnt4tctHUMmHdRBWUhqe36NMQAhXuWt4ks9ANqZJVSpw1WJ39x23PCwQnUbVfWqqTE4bV5FftiAFPHk5igAytg",
  "key1": "4DroQALtqrEKfw5oX5by6Yuxn81YucCfSfSHeifmZEFGYv9oJsASvghFHRNG5L3RB1DbmHcYkbi6EQPGLFZAt7ZF",
  "key2": "2bJLXMW3h2RxQoQVZTQnjmZavp4xrKFE9ubPgoxvBQ5FJsuzyLcVVH8LWbMHsXxFDwd6g3LPRr2UVafTRoGE5vi8",
  "key3": "3GHKUw9ficv3CpaCSQdq4RVFzDwRaDHjnQaw1RBswYuTAmp5KQ4w4zLDBEfi8V8GdEVvu9DtUDzy3rPwJTYxVkzY",
  "key4": "5sPEaYyd8cTdMC7hZL7M9Sk2cbQn91Cvhqb5HY33BdjB7QJCX3mSbaqWd5okpTEXBpe2LonvaoQLxHcjCHer7wbz",
  "key5": "8iUaQEkiu1xNvUDrGTutHw82Y1mrChdDosgrH4Ud8YV8ePx3FUicaRMUdGC1vtkc84i2B8cPTi6pb731Y6aVdg5",
  "key6": "4fmoHfeWskYcvkVLetrW4zUw9uKmCd9mj96Znmy8YkCTbWW6zV9N9BjxhCGhBDAhB7Qj1c5WjAK41MynLq9rdCQR",
  "key7": "2kMjoND8WSzBf2VeP9TMW4opNmPHE7kZLsHPKd1TeiQmWyjdvZRj9nhTJAj6jkVEBZfdvwVQjA6BH6KXtvBGLM1K",
  "key8": "2ddaW5xSju52ZVtojkkf5ydwrnvRxot516aeqh4NNeT5UxxKnRENzpF2u5yh4k5ANHpq6PaAD45KyF1zcWfcMuDp",
  "key9": "4bK3uQ9icNGZV3HhCgTLceYLhUmGUkayCEzfA4tMjJwUEVpovbJmiRCPtsz2nuF1W327sdNRRUdTW581CRHGqNdq",
  "key10": "nFgC6fzzBzJA2CxfNNHnETvZ4gr4utJKFkW5jsahFxV2TMcipqRkdzXajrcJfRYR6D8xdR54gFoTbdBi3xVFv4V",
  "key11": "2mYoPMdj53gpXfEqkWNM5mnbJELcT9idrWGmavt2L23YFFMnCikg9A29Ecs3Ym1FLV5zsJHbDpSnogjLjLttXhe1",
  "key12": "3Li7iAg5XwXsQuTdha81A2vwfu1NSUJPQH2rvSjEPQUaoKWmWf7gf7aZDLe9Jyz3mcnykazz5nXQthwqErzj5N3d",
  "key13": "5BHuoXyqGPxk79oKwi3EnFgchLS9iUL57FpaubscustYio2VX2qEj62ZPVAozxdrXay8NHMivtopPLT6JN16taRS",
  "key14": "2x42GzimfbSgr1QwNQcs8vH82d7QKeBy5rH4HU2pbjLy6ty7gsqTSDDyVHxSGoxRnAzWy4M5kWsZa6iZph8GcpjP",
  "key15": "3sipseU7u2jjRMeNiTqgrYdveKUZ8ceJ8TSvyW3M2R29UwoYy5afktjEYApY5nM4j7wnJqBJ3oAY1uqKaTqseJWN",
  "key16": "4KNAamfVXMov8PvHDMPhEsVBmFQgG38ujAPREMHbDe89vJGqy3PZoUR9RExVsF3dYtYVze3WTCrUGuEn5BmfGDFC",
  "key17": "53veJcZnQdRW1q6jpUzKw7dkdQR7ZtP6PQ2VHC9L6vSt54hJpsTJZ4jcjwLWKyfTijNfXjJnDJ1iQGh4iBmcV2h2",
  "key18": "4PsRnczMzJ8TucTup4J1wS2RXZnYM3xJArhUiXDSudiHraDr3AyEr2UTs6QNGmjh6D7PofS68zDPniWYN7k8RpFx",
  "key19": "i9rzU19ave8TQaRH4xvNwRMrrdd3R2TNtiUmBrZ2vKYCXRkWUEkndGWGV8rayKSrZMbait2HCBhk3dJZpuYhX7R",
  "key20": "29MmCVwmgYAmFNa21p7nygHRVduYnjVWmummrP9r3V3sSBmqAqiySKNLjooDCbHxtwcY7H3M9r3rTu4Hv59FMjRe",
  "key21": "44SE2Aq3joBhNGSKRJV41hEWT2RBQz2KU1ks5KgxxASXXi7mgz75QKF95i1FQmUkc1h66Epebv6dWQ1pRNsCdfF9",
  "key22": "5Srv5VD2HssLL6No5CsUryK355VNrGcAUmrX2k3p85SNcKbSZWp2mxqCooWAXmyXCis6S64xHLQgMPNQdmT2NEfd",
  "key23": "3UfYrVuJH3jJiFNQWYsV14tNtsuUzJfx8Zn6dt3GJb8M386U41MXpCCCKiHT6j79Vv7Qu7MEaeVGRP1ef7UYicBU",
  "key24": "3Vv88zbayhoVcLcCfeZ7ZDWgT1fKrfi8XUfC8jAxRjUCUwKbip6bdVc3ajDwz8fD66ANfs2a2dPtUSvkNCKVFcd9",
  "key25": "3yGxh1SJEXbbmbE5B57nEDPGqarPZySomcbPWFDX2d9NY6dVBxHdZ6uS5icQxKWmDQH77xQyygBNcNcF2wnCGnjB",
  "key26": "5Vf1B7mUKdRhoCAxqJaw4nrbEwSdANjDJaUH6MEk5C21EtN3fMCYGNajJXQumCy7ZvGuhbKhNS4PrRyFiDa6qfQ1",
  "key27": "3rAVsUNSVj4djm2Euynh72F4Ad9o3JngdhMKYgDzSHxQ8735sjR9muWbzCfVBd426QeCZfjkayL9aaU45ZYY6tCy"
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
