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
    "3sxfzPbcmxNAndzSiqLMX4x4jMb7xu9Yy5yWX9bVoYdVZv4DmuZZe9k3EmciGXwiPviPbeWXbbvDQrYRQWzVLJXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4obMhAh3i948nmqcKKq9yEN5UvgJz9SocxN2xqufbpYDK5HtPJssjRAU75RqLthYo56gbkySHp4cgf51HW8F3fLQ",
  "key1": "5TjnnxVt1DK35g3xvBh7KsrbJ7ZFzAYn4Dvyt1PG1Egyp6fCEbMpSxCYiXuJtUsu8i2kdoYjhZo9k8bxDM1DfH59",
  "key2": "5viinSd8SnsA5EQd2ddsKRGRymTfUzzyXR1gJMCv6BDcm5sVqKq24ca9Fs9YFJ2U9dUmfj3NM8j8b3KLMnwwmptY",
  "key3": "61ShGLR7JQFpx7iZrfkwxckXBmA6mRvkGCZ6WmHXPobq5sXj7smzhib4ZSMKXzVs42Dqu1T1SjSWC8TjZfFvHzd2",
  "key4": "5kHPDR8zRekxJMcGMRG9SsTYfqfQgLQYM5aZiiehBXyjg9SPTVJsNDF3fHcMVrFc8CYowRPEfJCPJaGa7FKyNqVK",
  "key5": "5pn6UdxbQqkaaZXdnXnZ9Sm7WRxowAnX3seppMm7kArJph1c6eoL5ahD4HtyQH4QzjGZWmL41cu9moQ3Qj9fMENc",
  "key6": "62wk6sx3JSDtnVeS339v1PhBmqs2ZvXiteH4uFQSEJx9WQSuCmLHpCwxvF2aRbNn6eLSJoR8pHtfbYbAbXkaUmYc",
  "key7": "cBGcWCKnYwQX8bBfMfPMKAjwAGyLCyv49ueRNuAnCod9CLRW8zvrj3Vca8QU9r8jru8oXEc897P3MRUZdNFnQqn",
  "key8": "Txjt1yrD53Fbk7VCvQFNnkYViuJLdeLnwCoUsVLbXtmko1RWv8edNTDT7hsLiXdutQuztbF35ZaoeFpPKf2mgg8",
  "key9": "4AKoCvGZWH8ub6tSHFDRh9FXrMPQYhb6PZ2wrsSNwJxVLsYqsfChU5aY1gQm4JGZrG4DKPAw2d3w6AqxtmGmr3qH",
  "key10": "5VowkTCpknnRk56s5wtf8kUS8tqiwpx9JCTGFwaftZVupcSQ898Us1buLMj6XCX8tmZFs3QT8maYnvwnyNqLAf8G",
  "key11": "2vfFd8Qs1ece3MHvgZhZCQnvpHSRDLuVAVnv7Dkth4iAPfAfMBVKZwYyU2t17FxV61PWdgtNYPyPHxXepPSVopkU",
  "key12": "jLnDmPZtATtEjEeNvBRMPnAjCxc1aLmCJxk15kb6KMRqCR26567jGqsubWhMMUausViu1caRvSwmwtuqxmchSbL",
  "key13": "5JJiqzTBttTemZmppKiXdam7DmzsBKxckYKP9hKGQowzrA9d28ymsdAVtcQ4E8k9fAmd9t8pcWn3i9AYTP1xS2BV",
  "key14": "5w8RQcAHSnyxQReZ4Vykum5F2BSNdgLiCYJpyf6QrNbJwmPuoZxNoEu6jc3MGMVRrNBncbxra5y7VE8RfAmeFXpA",
  "key15": "2xcLx2B5sqStP4qGPVjbYTZx3Ap37kVjkN2bF8Xogm4no2jpkrVbMY3GHcosLErXE3S4scyefTaWyDbsPf4rxTQ5",
  "key16": "ynUNEt29sokdJ9vQrymbXDj2W4Ub2kAG11Gv5Jz8rjLAVPJq87sY1vn3We31VD25unezuV6KfCEPSMrJDJNjZyu",
  "key17": "2eWkz89NTJyQS5aNdtEcEiCt4nyxC6r6HVz2YiQchDFh2YxfNy6pPR8UraPk1pggd8aLiuqzuFPsvpiHSNeXQEcb",
  "key18": "3ocYtRrLcjLSdRTAwF3Zq4AmQkcbDRmSY3hzUqRtivkwkQK83JoPVjihoFDzHGz3tNGxUymV9T3gpGiHt5j8Anv5",
  "key19": "5vDZT4KFSmBzYXXy6aVMSKezdA9Fnw1fMKRbDYewXAcmhiz7rdpbsyccM4mzRAHZmiskds3EFKfzvaCu5DhaYRLY",
  "key20": "4GyZ9GiDKNnRjWodUR5ZjLaZzEjzzY64DMv3C5fE2xA2T4XagoNr9nrXdCDMSXByMV1FURAWEb3wmTBMK2JzmMgc",
  "key21": "3HtyMdjFTb7qcXfWBGZwYZivzYtYLMD6ra5qyhDUowB7yJdhVCFyiqRr7BhduYgU7NR7Nic1pz47iPCK8MhNkLXV",
  "key22": "3TABM58SytbX72nMR249qJpu6MZ13JhM1WAEuya2g8Tqykz1WRrFyQkYwKcUXNSWtcdunjk5UCzrXmn6zvB7S5gH",
  "key23": "3Eki3MNvjoChHHi6jbWR83ufxUBhWFwprDYWgEpsvLFSSGgNFuxeo7dWUpMZFdzZ8nVDViGGR46ZBMyKojmLdwXF",
  "key24": "4PEkDtLrcbnvDpnGwoVpjRJh1D2HqRZWEFs9hmvENCsenuKWb5moPaqR7egFvFQF48z6sPbxwdwwrUZT8Tse8spC",
  "key25": "3NYtZR7r31tJr1Y4WYBx3ug3EW2p8Z33FCiAFRgBswcCFaTzzE3g9P8QLH2Aig99f2w8ybiuLA8egUSM573YYDEA",
  "key26": "3dpBCZ8D1MVp5BfopiWTggrcPx4gT966Fwxom7YnVeTgyeRszHtf98EjU6SQfgqAEffJ3Fxt4kk1Bcniq4BWU6Zp",
  "key27": "232Non1Sg44jUeNDP6fSwsNa9Ba42DcPwYvKRxFxv4L9ZXzeruiR1cDE42akSNkjkQsRcmf7S7VewfSoALdFyrnG",
  "key28": "LeTerdB4Dwvbz6t6t76ZCbCK8qSWWoVMaj4jCp17hcPzZ4hyhbRnRwQNYtX5yhhDyGXHNhz9dMdtNpHdoHs3CLB"
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
