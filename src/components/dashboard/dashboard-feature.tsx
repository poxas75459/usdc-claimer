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
    "3Jmk6hWrA5tpJM3iby1BweVnaLiFH1pSUoxgciEvBYGMxKL7q2zARmZrtFaFfFEttZNtZQ2xgpTAoaPMnbxHnGWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XvVHD6jJpmuQsZ775FZr9MAY6Us1a98dT3gAhLsVrmbhcUvV9Q2BvxaWHM88SguJvtsonZWTSTZC9i2wPVeoBiv",
  "key1": "5jMth5AuunA6r2pzn7hDyHDQC2AexJTVLfi8XvoWBekrJ6uZ8MhARM5nBi5T2RxU2B7MFRFr8DeYyPzUj7kMapkX",
  "key2": "4QKtL1NxaCwMZzo2jRNF8Fvr72aEnJCQ3s4ks9DTqGWiA9dxRBCpZzmkUqppTPdZbgUBQ9optkmbE39C62w1yqYq",
  "key3": "3S1i4J627BwLSE3Vkbc4FZ2fn1fA1j7ZAATr5eZJLE9NeawHbwAtNNZTw6SvBPupuAnUczke8PotttQWJYtVwcs3",
  "key4": "52YpAEvGNbptyLTnZawAPNqKoi31N2pJRuptnJmMQgGzwGywsz3kJLjxTfGPnFuq8QLiMDgYQodT6zTGpX8Ht1zN",
  "key5": "4GrMZRgGe4uyJgUjGiJNvFxjAAogsi94ZfsTGc7ZsLZvL4LPzmsNfrYAXbT4gfMuncpaVaVww9vWomcndKKgDGEX",
  "key6": "34gtM42PHJC22ncZuYfmx9VAYS6vy3cqW8JwB2DKU3n5cnHAQVwTAZ6T2QfCqnY8MnLDS3bmoYoC8QvT1P7yn6BE",
  "key7": "31wJbP9chPjndcagNK5yt399YmvJkuWc7Xrjom2xiciyQgXSqm4kNscAgAd5WW21Va3uHLWR4472NsRyzPjUmqwh",
  "key8": "22fMmc7iyAirzSrEVVZbfmoeFH1avgyjSKFx3zg9nEY9XfHocLD82V2tBx2ox5YLi74LoBwSqcJiQMXNrguogDyb",
  "key9": "vftirSBHuK3S6STaZbAJC7BHBwUt7HhbyKAsUMTsBeNHZXDGYMmVqHPKw2YAZBd3dL6AJoMjeWiJPmHCkWZd7kR",
  "key10": "5d2bdp2Nv2A7TJCa97SDfBdCpKtsVAGyVSxCxXuMcNQPiJxnPStvmEv2serudG8g3oDtx9YPomf7vW6Qr5hUEVvx",
  "key11": "3H93FXEe3tYC3Aoh6dsZmCSv1tHCGg2fkZwFawgU4qf6B5iNHJu4zjPETbxDB3WDm46V3kQuWa5UBEedyJP731jR",
  "key12": "4Hu1Pi5PoTmsNTpDPZwdqvoybycdfqi8ptT3ru2gFs1hxDo9UjXvJkGbhhNPk8vLEbBWonuHreA924hp9aUPsREX",
  "key13": "51cT6xHu5C3sd7w8Gb73Yz2sfRK6Tw3s9cod3zhfMPX1mqKVp8oHJr63AzbeRHYcFXYnRoLnS12yTQALfKjaUbxC",
  "key14": "5wGk8vHEAWazcjftNPWv2CW4R1MaAuctoMLcLyuyewPATtNLtH9PRAVgJMx7uqHaLWU6o42Dt5q4rRDnAVmV2Dfa",
  "key15": "3SuvSW7fWNjvqLs7DCKt6isciFuhGLRogaodAAn5Zm3Ae2j6BKnYeZnNQbGyCxkFfn37v4hW5nw9gEjDaFAMxWPF",
  "key16": "zEP9KeCewk7PLas89SqtvTzui5Bp6aRpp9cGXWr9oBQDPSmf2ZNBrY8xSJmPQjuDSdCsLjeLYrrpR3w9zz6cVvf",
  "key17": "22gc7qCM9kPtHzZpr1teZJSa95DcmfScDQoswcxnnscyfBjqrbX3rLKiYsnvyumUKeDT9HyFzVD6wefcWcG7Absf",
  "key18": "3Mqcp3RUgdp3NWsZSnh24dprM38oDg6YmrYqitVMP68rAbqazSiNYP4BDt8wpLYN466AqCVCgQdcFZbei8NjYcUa",
  "key19": "SXRDNynHy8tQSXoh5MZxiJ5eqCazDJbp5fJxr9EVUC8yA5hUgjuzLH5y4mVv2gyDtnTekgVoNxbxE4UxnoSTcQe",
  "key20": "49tJMp6d336kiCnhz52s7fX1ojyFQVKFreULwvhPByAXzJpG44Ua8NcWUnCVkqS71ogze3YYKKSznt9fzKjouYWb",
  "key21": "5FZnRRTHZdGcYcExisUkoXM4u5AC7pp3TrCxZh14EnyP68b6ERSEWery9fCu6MwiTkZUnPiRqHPrXcZyA11biSS6",
  "key22": "3g7gzfimQpbiRmzrqP7jFPcETdkZRNHHYPyYBSQ2vc5npE8KHeYmm7VRYDk5PoVYNMBFwxe57PaXXut8tEsPR78W",
  "key23": "3RGRg6owLWWqozN22cFwXAn12YvLvnnURvzUEG7e5USoAoz5wYDsHnN3ivq7FFMvejmSk9xAYmVtyarxgyTHU7SP",
  "key24": "2hwHAF7tm9riGZF1a6vxy6gFhdqDsB2kyLYU7Fq2JeoKkhKfBw65qckiu55t95Tk2URG6gMasZNeXhyp7SyYFcMG",
  "key25": "4VTBVGFwuM5vM1KTbprp6pEzMDfth6HMBJzdu1Xn3f3cuLH7SPA72pLP5Wgzf46KfqPvFbQYNVwdyJFoZJDZTvP8",
  "key26": "52LKWWSoer4DcXweYsELL9SAc2JHnxk2KgrubS5c5qDfYftRGz4nYD48aqg65bVC8qfZTADx9D19c1BQ6FjDBiNw",
  "key27": "2fFJoZ1eDny192VFMJTP6xeBfJ9M7UtcV7mgcUV4KGfZVKPK1tTYkk6DWSGLA91MekmfpvZUCfYaT8nhuPYheg4D",
  "key28": "WDrmJeDqZMmGkn6yicUnNvtwpiD84Y7FNFnbWkP3ffT28rSfiPDSQSV2YDxiLwXSbTG4WTfNjy5t4NQ464ZD7dr",
  "key29": "3MQQrMi51v5dQTQd1hvSnRfi5YnYLoGxid4rgsN5VmZT12xDxc6mF2wB1t1hgJtmibvkAWKWEpkNGdRK6PPZ8wcw",
  "key30": "ZZCaXPWcsbped8WdvTDHtumM1TE1yxdBcYBAv13VXCc1JYANs9zcPCHuzasvv2EAYBwGSK4k2euKVDdZNsr6Mxs",
  "key31": "4YFkhqbSuKncVLWy66zzmUcqmRXzavKH5UNztEqLJ7UN4n2HyrG2yKJAMPExkxYYW17jZu2XQ9TfHNNRjRj9ftVj",
  "key32": "4sXrBdZXu8T9zFtGgD7LWvEDFKTk27kyNFgFkUVsTX4pmTn3JWLhrEyrBC4vkWgS9EWeJt4hWt99JYugFPQWaHrP"
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
