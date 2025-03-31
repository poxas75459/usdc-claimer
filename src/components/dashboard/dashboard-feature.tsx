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
    "2bPxyvaWztMfaBaP3Nabj9snUzA1vZzoV3s6VBHgmiqq86QrMSqo9aC7VYhmUrPWtsxSiX3vAhQSgaw9TocYf5MG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rtw3DJx25qUe1nbFxPMfutH5zBJfaohWLmRRwURo8xUxXZdHiXdbHDHiQEfHdcXZspQxeqz7Y4eXmeV3DLfDhxM",
  "key1": "5c7icG4sjLNKYCXj3M4yvesK1Tot3SMj8kBG9NaXwe9T4U1HK9DZR48uWfrHUkmupYaUKNyNEXjufQV28L3Lz2o9",
  "key2": "yotbagFDPnJsLEqzDKPZA7JWJP78y4NRPE5aNjMk1NKX24rxo8juX98odF87XZwBgezXLD2bgz6JE7BLFt7Gn2r",
  "key3": "4HDGbgqAvci97WbTUQCvtSWg1LwMgCrhFUwgqEMChfQ8JiDmaugDnN31T1wJgeG1fV4QFbvi8wxx84RzXxsqMF6E",
  "key4": "4SZeDkQsStChgtKwpCFmN1ZyCdR2WxptrvGCugYJs88Y2429d82MFJGgyf2Fa44sQqgDwjFFHT91jdibxXcUSu6b",
  "key5": "2WQKP1vZzKShzF2wpVqYS5vF3sit8Ac6rqshcbRowopD1RBPY7CEAQhVGTKiHeaeZvZXNMuZkk4i6vdm7tZAAmCp",
  "key6": "4ftHonPQAaCJYY1RbgiGaUxwuouZvS5shDjdcdRZtUQoryaCxeWoDQrTgZy9XpKCqVGHb6EMYeVYQnHqFmAcZDCN",
  "key7": "39sqHKacFmQ1kuKDQqtf4r78q6e212UvCnvgwWymvEqKuTkvffUkXuffkmYnLeQSLGyh7BsBuRVXw2DPPpzA8E93",
  "key8": "5MKLLxCnPBZZy8uhPeND7GLUE4gVafz77oUf9PkRLFxCuUaWiYgboMq3ap5emcAoAzEQ3fBBGZRdPznboBSaTn7R",
  "key9": "5u3VKKwtWCVjUkSaGmJ3LoAgrEhzowyr7J84SuKmS5irX4f6e9KBbSRSiqLJTn2m5nDXNYYXGjb5nkcKYGq7EVTn",
  "key10": "smQcKmL8bPt6qNXfEASaTPohj5vn2Zi7b6WxrsBe7EHQtXDqjDzyLxHFiuBks27Xza565rqHac1h9TB2ism9aLe",
  "key11": "2SZUaiZgABKQ1McJADu4AKdBvhMrVAUVF7Qqv4XtNVtuJV6K18jHJupShobnEQ5kdgJaTjzmwJvE1jgafSXo5kfm",
  "key12": "2QFVVKazSiKwyLqvFLwCQSmt2oTb4B83EGgDwm9kdtfCH9Ncwk24qfYxcVobpeUvdFeuZuH7ZXqdZza7b5FFxyMg",
  "key13": "2z1AbwSQKA1jTrtgMEJMtect8K1Ho8M7gXg6YtGr2aw8sUiZp3n8GzWS2nfvXzY7Tqu3Qt7r6Jx6XmQcndjvoa4r",
  "key14": "2MWqJ4TqSth3KDtakgoC3D7ZbDRVtWA3DrBU3Ha9E9tzD2T89vFGtLC6zMGitVNknEJNBG2NvrKkrgoUcUZR3NUM",
  "key15": "3JTjve93LXThhx9q4RYu66oPAAponnJCRayBDRrJC93NpDdFpda5cpj6LAZYwNjiBqxaYQhLxnXM4QqnWb2oHyy6",
  "key16": "59nTFaR5yLLvjnHLXnSFFC7J94kV9Ey6hZPBYEAkQu5vD5eBcoty59h7VgH6xDJ6Vp2DVH48zFBXhjjyy4MpFEzJ",
  "key17": "tGHNFqHq2XxsPkeWXQrMRFbcHM9mqSAWMAvF9JygLK5KN7qCgR8uHUTSvFPfYoWZc9ksjLh1SQimSoNjYS1A1AM",
  "key18": "63gXqF4dm2xphWpycf8TspajSRzmNPifsW5KpdbDTkCPjgaxAZsZZFmPtpWZ8YUCZVr4Rk566ByLyW4GK9anAD66",
  "key19": "44GdCiGo4PCKpwb8a9EXMTktDqCvmGhGjiheY5cQYiTxWTvE9ZdESdku6HCcT4LsGYgGGeqNTNb7qatnYs5DjouQ",
  "key20": "519C9kxAyK9mMp5vEQwWVzhymZFhJhBPmcrke5XjaeBYeWHDwK86Tj5hhi6TyUeqvKRrvnejs7aFrGeJ7yDEdqZR",
  "key21": "414fujvzzmb89nq4sBeHDB56v8u3Wk88KwRMsW2oxL1zstayMGv1yzJNkZwb3oakQ6zjkHstjmsJC2EMbkBQHZpP",
  "key22": "3bE3wkZKidUvfENhYjinZ9sBsariA486wAb7ouTQW5W7H3R4pYtBwaiLXeFMdhcuNGzt9myB6EphJ7C7eVPZyBuq",
  "key23": "44TFNcX2UfferXdFKQUd9VyMqYpMg8EnabDvxi6AK6DU1oKbn4TUgQcZWYzuieLdFeRJpsChdSSWvFFPcW7CxddT",
  "key24": "4Xiq7R6E4qGqiBCPpCoXH7LbpYVqgn4d8Xu6rWnM116aprqUptp7nK27tu1Lyw9yWwqx4wAJmSKNNMqYFXxVWQsb",
  "key25": "44jhWKAad2qkGwkoqV1aC49kskMP9YbqrfGUrdooqUvkrm8aq14BZzjC33hvdNYSgREXPAX9NvEKJrLpYxL4gLdH",
  "key26": "2MZf6sYtVxbyGibCnKjfT8aPEuRoipoXEdnvv16NedDnqef8dRB1FNQmo5rWuDaCimX4HxAtAhUerBLMfeUw34Yg",
  "key27": "2m8MrXKNbQ5PCoZpxwQnuxPcZgCDJpWymnh3LNZQN6zncpkoyMHQ3d7tEVkVWj9brDH8nEoSSEpaEM3Ft2UHgp4x",
  "key28": "52GbKFfb1zJJUc7Tqy26sUxUberLj1KVX2JprYUkJCRSvJUe8KWbwzHhRwg2AVKqHc1kFYhNcmecmqrtDLkkJTRW",
  "key29": "5x2Mkupn13oEysbxMaRvg1AJJEeEtGoh29eRn3HGuLw3DxGrFNFjxzQNyFfniArXDhNA2v94caXaJPLg359bZf7v",
  "key30": "2QDHnbnw4QqQ8kf1aPAhPjSY1GJe9hhtYbLXHKNhYwoCAhAAffyyePTwU7EKqZbDNnd5Qs7VbrVbBn5jRbkRmpAu",
  "key31": "39GwzLDQHk9gUr3Y3coTvdPv2osXrEMjusqQNgpYPRLJ7UeP9Z7SVXfW4Vwtq5TojMFkZsoMq3osRc9p1jx1QJvH",
  "key32": "2ijrZDsk6agnPuy6ekEmVf28bctAy6w5YnjnPZuF9yEdgVkK6BmfhSAAPmqx6Q52B88GLQdExdaP2vhKuJMckhEL",
  "key33": "2rdZU9mQZnAWvkPsPmVQdmWZ3VaMfoVusMmZ7666tvcZrCTtJfYQp2MSbC2WpuRDYqWG1v2HPu542tjtLBwdZdBj"
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
