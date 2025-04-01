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
    "2PmQDhmXERb2KZSkcHxAGSkDrjLGQVdqtvxvqGo1LbwzixZXJKLSLPtjCKcirbumNXHjpHyyZJM79h1uxLup1SS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aTJWMYjQfJo5snPpMgQVQkHPxYyyCw6VsZtzH7kkyCY69kfMkZp1Tw1x2XZQpEKYAJPbWvYp2g1XM35CdR1sdr3",
  "key1": "4L3cTDGmkCwXQoh1A15a4E2GU8tZoVi5xa6H1DZP4SjnhjdR3NHsX52HFt5EQSeGcDaowJ8Y73T4cMNQHvZ5XR6r",
  "key2": "27GkpGdED35hLs6dRVJyEBqznj91RC3855iAKqbe8xW8QnxU4toqtbfXnjPDmnSSZaTESkYETgrt1GqaCubGzx3q",
  "key3": "5BsBv9Kfzdhab4k1gT86ix2hVm2YZzvYBfVzxuyDftpEuYRLY75bdH1obP4eYSsJoGkZ6FtcXtRKc2NJ6akpTijP",
  "key4": "55VYbju3kvFqrMCBxWNoTWuU5kChapjGJnJT4nJvT8nRef6o2pK5pRkfKjU8QoSotiFurvoPyisGbD8ZrK98iYdi",
  "key5": "2cjiWJraDhBiX4mxzf7uXp9vfVdsbUQgsxH6Tb1WB7tCz3xhdDgBpUCbJeZgLrX6trtNgia7921XByWeNavCx5aq",
  "key6": "2AihixnuQbhXwwHJRn8mnG5aRXYi4GcvKnMs3wfrx9GvjAHjuoLH9bAV44AsLsvEUD5oa7Mjjr55i4Qd7nqbUezV",
  "key7": "3hg3v3dwKL29UVBP13xsnng3cz8iVmjYDzk4hPhqQp5ngZBdyLvq39MuJHUKCEYgeCgXGeGWLk2TC8GrzFqCBbqj",
  "key8": "3kngN2yBpKhSJv7una2wzTSxEX6sfNNp8HF6TfDappMUfFFzTW7fUECvJu8pDjufWisuoGuMuh4KEu3JWprtvnd8",
  "key9": "4vxjA8LMtQ8YSgBmAJhqjH2pddPDmekMLRE64hhvrU5X16PJefaN4GmMWJDgrKKUBWd6yiPdcB6TegsxLX1ozG2y",
  "key10": "224dhbZkodChiaHzk8tM8NyqUbKDaRjE5WVgBEvXMNCa4uas4VCJ7khrxwnaV3ok5ZRd3kv3aLbmrZnUPo44rbgm",
  "key11": "ffExGJhwSxsRF9tihZ869cHctsGUyEqE6N8oGH4Kwuj2Df64S9Ue2CtDF4xzQTFWPdbkxsBNC4qs16U8Q1k9vZM",
  "key12": "38MWzBZLdVAEZKpzpBctz6XSwAuSPN37CUudd4iMnRjHmdr5pn3LsxBLRy7tp5TmYRzDBz88nXWerVQ1iyaTzsBo",
  "key13": "2ya74oisM8bBhopoVHAh1iu6gLwFx9KXx5aE4mPtjhBFc6ZQJDMbB9F5AX1mydRAuRYsWhLQ26TzbvDkdhur7gLi",
  "key14": "3Yn1FRaN7FRXgC9zCuFPwiwSeKHuvqnmqz4g47t29BZHTrQBbWwpizyHsWen9Q5yPBajkaRKc1eDUVFPGK4N911C",
  "key15": "3WDYc7czxuaDCM65huyGGoBuxyfzGbPD1snGiYANYMLTXyThNafJ1XDmXT8B75qGL2k8KMfpPe9GJWoNXun1UkF7",
  "key16": "2PmKitJzaL2Ns1nypaGEjHgUWewxPJ2vqhrFzwFREvwVv9DpqbxK8tmDrgTW6UJ3L66McPjECRKwMpsSJD2npiTL",
  "key17": "2kpNzgnoznrguHivQftV8q4h9sX186MjuCmCE9X9mtsDR5Sj34LqT3ozW6AM2MgRUiEkoFZVew5LuVhan2sz7KnR",
  "key18": "2zDyVwftymMi8iMuqPkFe6vPut85w1RsBur8oAU6goVsFk2RkLdAW7ECkb3bLs8kVox3EsJX6XTjLuv1MjV7uyt5",
  "key19": "2ePHtWbzbCd4MPqHEG5eAYZXQfPNZ7uNwUPzQEhEEvnkkxcSUKk5hnwp4htQALdHAJzck5Yr4CV5RdXhGqKMXDMD",
  "key20": "Qew3yrdjPPe51U4NziYbBTqUDwGhv1Hin9nTLnTkriakKKb4gNPtSzTd6hL1os79JVRMvPCzxJst1CtSDg94dGG",
  "key21": "2oFRhFBwERL4CmoPDPNdPQU24aS1H9M1HBcQr4QuKUNLHtLtzUziRNoGTYJbY55jUQZcz6iMHhPC62zrbC9rTq1o",
  "key22": "36SkBfHwsfnrYrcnynZoByUusSZ49K497Ht9SCpq6qKbCRSx7uT5fdikvom8cSRMhy6coHsoNeXLbjL9sFaxwwtH",
  "key23": "2WDnVUEXN2xvWCiJvM2RpHqPmXyDB4fGRWUmUjagiAVgVv12ccD8vMmfNLSu5yd2B4dm5TD8KDow7EX6qcq9nGC6",
  "key24": "3f7q4UdnVzA5Pb7bHcWviDz6qyzvapiicQ8NYGijmYVEeua2CabqSd8rkYeg7LgmvxkEG4EWVv3fomD212P8BtAz",
  "key25": "5HKifJu342KQD3EDWUFPW9Xi8aH1gstLn7JbYNsVFntAyehxg6vbfk8s2wYhDdeZHdTu7QFRW8opueskhgTSWSLe",
  "key26": "4i6XD7kRUgzaiC6K5mATDA38iWFN4B1Ar5kctDqDeJ14sJNqSr9VciErWfLJzwSUnNviaL4cNBk9zQu3XsgYqVr8",
  "key27": "2kTG9sC1dDPjG34FNWcFjc849kB4ATmRDgS2ag2Tt8GeyK4qCFWVZDDW4t1JCQ8wPMudsm6gMgQyWFXmHQuKKSQU"
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
