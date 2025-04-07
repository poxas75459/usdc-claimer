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
    "5AWUDWP6Fz3JfsC7DQk2Vmo9nMBbFmPezsNjhBd6y7fnYp5teubbZe4Va6tERr2NirTBhFf3Fm3NGJLDETaHV7t9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nEppHpnR7WRCozFubVRWRJevEaX54wS7Jn1v45SvyBVkhz2NWLrKHjHmYGnLAgd43DivLG9sFoLvJrVw7a42Mu5",
  "key1": "4KYSfmMH8PuTiHVy8CMcEYTg4nSJHg5fAHFBS1ctKSTexyj6RKWkwybucAoAZiTssmKjq65sQqGjBrAEsBHngyet",
  "key2": "5QxuDyhkwqnrN5HVUSYdhCh6tmEAL98tVoRtWgX23UG5gCRBZUv7VvZqLvLmVos78sJCoC3P5kj6AzEyMXQSKBLu",
  "key3": "bX8omh4jtDfSheY86ov99U28WXu3bfFUCqvFtQ5GTTqmcsokm7h4qpDtVtYbX8xku4xywnRhNRW1UfZAyWSehnE",
  "key4": "2rUZ2uLqucvXAEumXJQqLvx5bKpbaCo9gkmxVDnRgk8FRHYaWbyAR9DvhQ6TD22y2n4zXLz2K3NQcxtMEDvPtJD2",
  "key5": "58v4TQx6jJnysq5CSBcGumBbmPcNSh8UdchgdqbD6K7PeESiFxQXswJHTdK1aoFHJSUaqTEie1EUwwxTbWqqNX4p",
  "key6": "5pU5Hy4xdA6qV5phUC4xu2ZuhNLT8Jhz4UiUwsTzztw6NSJ6jrjmq3Pz9RyeactatZbT9x7EKShqgGsz9ocRdmU",
  "key7": "n8hymrftRQLgxT42hBMJU5Rsow47wNgSeBbAgNpYtc2rbsXgwxGrkZmLQb5UQjN37KeYezuuCDiyy5bERpqadpx",
  "key8": "63fJmqv6ZtcRkDZx8qNbKJ8SwZSyGGtStK2fBmdjRVMRBU84KLGp6fQJSjVU1Sc3eUR41rxz3ggrWipcGxziC6AM",
  "key9": "2RmjYgmu6YNPASgRHfZfLZ985eJxXvLhQpxzKjEUd93ZKmXiy2WBHiXfKxxf5VeeXv7W3uDU5oPudSjG9uaTV8mP",
  "key10": "5NGQPVMjBti1SSKGgcaLP4cKocn6F6weaT3nz3zMGRv5ad9snKBVdHJaM9ZnrDY1xLNXAypmAeVBdtePNkAiqWdP",
  "key11": "3wDDEoZHKBTQdQ2G4NGQ8JhnxchqtWUBudrvKraWrmN5rqfk7xeT1owawWZjkeETFxYUiX9zo5BGFbQW2bYaB2EC",
  "key12": "3UHyVAZ4quWvyL7BfgRLuDRfnEHGhUkWXds3qxcKUw2gtzN1GFJ7tiEJaJzKDx3ySMzAfmHVMbNQMe7xGxjXQHwq",
  "key13": "sJR5FcdhV3fr8AeVXyC62YsY4ELhKbr9RQdrZj6vXGuo7NyHKemYqTbcgzaLSuzyW5FqAerRSbtsx7qzfr1BhK5",
  "key14": "5CtbtgL2mrhmQhq9vkBF7Mua64nW84PxPCy3ewR1NJTZdCnSzunY2k8iQ8SuAs8wAJD7DV77g81nRSM1XeaxLsJd",
  "key15": "5vy1eKCAMXFwh39wHGFh1dAqRFQznpc1oQjocb36KVnWd8r5Nviuv6uAQk8BHHzinb3fcmXyxgJemtFe2J6RKf5c",
  "key16": "3MDNURXx2XfePFAVz4k4t3Lq95cNC1YPm3uGknmycDhBrihbXmxX5m6LzfHhs55RCSz6vFoF4T6y9WK3Kw33nLLh",
  "key17": "62DvV8UQM3WKLJxCvvs3ctrpDg6CHL3PLQYiR5twYeXDLKkw2erNUeVXQU7JML4MFMLs26PKEWedR9tdYyif55mi",
  "key18": "5ecmFc6Ae6tscrZstq6cRFyqnEW4VCexCDKPY5bv87BmwTQ8XnGwnWHzx3EesM56wHXnuq5NTVuPu96jvvHNpdrZ",
  "key19": "3y1TqLAMnuiPCTPZezEG4ey3A8RZuxFENEg62jcofvZBqYFBcALqqDDmoChPhvAyDVg5HNutdzXfJaybNqsQGQ3P",
  "key20": "5Q6SESRnqf3mmBuBExbbDAdCPMyGRsp2CaxQuikdkB9kLnSmzstWnVEeyVAdjJRtuLvJYTETjPUmiosAcnXEJ2RJ",
  "key21": "2HRFmi9mDSuqVT64BGqqG6rJpeBzC13mPE8hKJW1x1ZjJL1ZXzENCgmpAa8QzDTEqSTKm8wC1pEqiYaw35Ci6jhX",
  "key22": "2QPUk8PNmTHmo4E4M8Dm2sXstv8r87RHvYcBUxSF1opVS1r3pNf9uvvYyj1E7dnK54oHmyYf4sUMFafSDRkkXF5x",
  "key23": "2vGrKUqvprTieVuWM82RYADjD2qDfG6Uhz4oQEtYwpD1SmaxRMoR76BDmz4o8trTc27kqRD1wkdwcearVSirsgRK",
  "key24": "3XD5LEDLZkvBUbXZ7owJ4NfqqenddQ8BKARELiG3VDJRg2MXpWix2Hv8rYkHQ8dSvuebLYFxqUaV953aB8tjGLtm"
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
