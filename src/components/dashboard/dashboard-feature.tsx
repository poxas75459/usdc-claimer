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
    "2mqmMuJJPsRAnRmCHMf1WhdXBPzByyJrdQgUgQKjUd5LWznHHti6r8oKN5vf8Mp1AymCMnD7judvmTdSpuea92Qx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AsHr7pNH9VBmwphyeeVHV2pTjXcEhTL5tt9eC8GAJXckPZnVGgbqUyLJGtdNTGifkeucZ79gqBfaR9dDBQvHNED",
  "key1": "4co38CFcfVWB7hn56tyncD2tE8a4oQCWPERkyNEX1uygVr1pQsopfdC8JaWjngQPRcdB297UdH4Apv4MEMiuapPG",
  "key2": "4H1C5vYxhTseTMZgQf99zEqo6iCEdVUe9NGrpsao3pHaM95UkRCLz8epYsJUT4nm7wjrkP8FWPiVNuy8U4xbL7vN",
  "key3": "439wyppYsK267EWvRpnR5efBoBa6wNAzDMPTV4YrYcVnCHwt1jHE5TUgASEhPEZGycwfahdrL4vScanGXPFuitvf",
  "key4": "2QLqyaGYKhvE1sHtMBL7PRhicuTPjKqRE7qgbmqCNvZ8ftgEfTVdtBbuRh4gmMLoBGRYs5c7N9nWYQpV229bUVXU",
  "key5": "2wseHqRm7ByUbmYDUKscGXTyYmVSvibuTjow6aWUf7oxqn4HAXH53LCporh5NCETWQgMfERup4dPp8pGkPEcBXx5",
  "key6": "4PegEER6hKewS7jjUwfA9RFRBerwjgsmQmBaLP7UvgeDJY9F7ow1z2Lo5HCr1EBH44vqCcJR8JgZ7V87uYjcYpPr",
  "key7": "3u133tUXpKmogGpKbc9uSzR9dYK4mTG2edcbYB9YQRQd9LWKZQqHQEZG4h1ebijCMeBTKx25Ej4d23a5TNANpKLC",
  "key8": "bEm5HiALKSSUmz7n6nEdUbyFDnetHD2eQzTvJV4DLYgk6LfJYaqo6UTb7fp12tyrPHn9puHfrP55VAVJL4NZf8X",
  "key9": "2ZsrNsXXe3e9GnpkxyGrAjnBdZitgm7Kx3BzezD7vy4z5Susqhq6wgaKqvYr1F4NQdCcSpgpD96AqofUAPmdTx4",
  "key10": "4TsorH9gd6bE98ygMakbprynVbExizjfVKNX9UmicwaXoYvSCyHS6yo5b1WSyLN4Nm9ZHVfCGS5xM711ERmmZ45j",
  "key11": "3FYAKjFgqQamyBLT3mbR51hwKP6cd18q5r2c8GCkP9rg6fuAr7hPXKcFvevYLBsWhqSEjoWRe5TGnkMXrPJ1qDvz",
  "key12": "3GCrvP8beQTpBghit2ohiSgMsVKhZSKpqndCTdTMVefAQ36DP4Er29VhYhPKs5XNeaK4E3Kn7sBmoiQpHibgWSsA",
  "key13": "3BxBo89FxKQyFHtRy7Q8qhe819gUCBnJsbkba6spt4bgcs7CQqVp4R55RzQoufXstgHHb6oteRaG42QFtdKHTcmH",
  "key14": "2AdYEJkCjbgdaWiE4BNoyB21ufL6dcMHZsyvncjhudDGnVuSrfQEcW6q1JybaRLBHvVpfxkg7uU4Pr4ZzJ2fkMsy",
  "key15": "4oz2dQ7fMQwLfhKTzfeDQoxtRbz2iHNDitMPUFv8bGyJ9QKvpkDPkiYWrpbE9BnJSffrWuZPeDXyoFSCNamrj9bt",
  "key16": "4qFBr7kH84CZCHe7t1UkrH51pxi3csKMbfhp4iz9YUA3fHBuiAMaQ6aqK5ssqTujfCgbHYXax1j7AqjEHWnjicuo",
  "key17": "2eRR4Wn5qdr8jDjKoqnZ12n6XZ8ovZud2YW369h5TQhUKN1Dg7wDK4qsAfU3ti1e3qdJtLye4g1HaVVe3mXapjZL",
  "key18": "2dr35JFtrPSVH89eXbqLRwLSBeiWh7wk4Lu3qFs6bWdGeXSj3ztwBjTHMckBSq1MkzFo8ffZHjbJjfXpvzUwp8UD",
  "key19": "2H2p8CSCdqBrUUMG1Vi247rsA9U3wqJi1RctH4qSxkTW9bqZbpZrAJRybUnCYJwkMAdhKK378Fn2MabB1y9f6Urs",
  "key20": "Z69trQV4a4xC83cmJWZVgyhXGiC7pKZtzN7ARrJxT4dvMhXYqx42QKTrtNvZFdR91hgUeHRqyEZxyL5xyt8icLV",
  "key21": "3Lhnd6BVrLoMvokFh19fDTdLPXtMz822epWMcskczzuFpYR6RPdbBfVvSuVa52BmqWhizBB4r3KddNLZnTc5kLCW",
  "key22": "3pkWzgE8uRs89ANtjreukWvpq6QFqW9wWp7Gwcjrj36Djfx7d828tLhdN2NhvAwHChH7ME1tHtUvdaFxBTodVhdd",
  "key23": "Rh3dtWcGffqGngUeGJNScs4VVQsPEyaAY29mtwkByFZtsbGz33NDgjkE4wp6m4TByqxa2bG5Hk3u4BHrtAifUmY",
  "key24": "38MzYsDVgq1CivP8GjyNfVuYhNURAc2cXiofVQMWUZEEfJ9ydKfzMwRcma695Rr2Ma1U3KWEMpGcqt1j8Ws81MGh",
  "key25": "oEtZ7cDhz7KTiPgvhro5Vh9AWV8Rm5xNMvfjgedfT8p7MqgQBpcK1awPFXDov6PuhS9gieXwky8dwQSR6WboJ5q",
  "key26": "5V8sTX8yfaBgmL3GcabDx7KXAc4STJC1CNFFSEX5J17aC5t7kpkfHq46EnvuZGsyrTg8K4A4pD66MzSedwjvDfkE",
  "key27": "4QUbwMisZZkEsjFpgrYcPqn8bckJPsvPVCGCCFzejQBZzg7EJnmKtUQnEe26p6hj3NBFqwmZuppCc7wWNk2mVmHs",
  "key28": "4xecbkkV71RjGDc3g7Libv2D8X5UQSCy9yD61rVeCkH3G1EpxPjrEjoeymKxKF7gkHyPq74GbXErtRir2tiRsUqs",
  "key29": "2vDrAQaFfr1Ecqvsv1ZR55E8HH1tt7N9rqwgTg6pAxjymjc2wjUm3JVMdCrcNXr5dJy4hHqar9L8azzK8S9ck6Bx",
  "key30": "3oQRVgp6HNqTiy4p84ALEvEsDdRtzkZBtYuMkYvcprjwYraiAm1YVvwAC8JiUPbtz1R4CWamz63m7F4jhUaStXeP",
  "key31": "5DvjAU6pPMXxzDTjtmVAcN9RWYd2zCvFeTB1YkNSkSFPtnBgwnHUugrmem3JmSFHKoPM8KEB4cfxUKaV6QHHwBfv"
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
