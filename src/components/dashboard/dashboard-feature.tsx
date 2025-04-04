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
    "3cJbUvrJLUdHKN9ASnNyc5RaXQFFLYUuR5mtSnEEx98BGxL9mdREJ1nFi5jH4ubYXzjdET1TuQR26MY7Ubu2QqK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w7d9jaGFUtLBXedcdANwV2Er2cAmoRe4a31yLgZJtVgzMQKBwg2qjLFw343m8ozfWtJb3d2HhLJo4HMn4Xs7qMb",
  "key1": "3FoMfJDU2zdWQji3PE7oizdTHqcpL43hQnrQPu7vJ8HVT9MERqLJbrWikPoWeQ6SwB4o1r4zjBGhaTpHsuPNhagb",
  "key2": "5bzMquWzyS7wdoZofeE8BNjMjwtArrBxwYwnRheFN1YtTmfLDPajdpF9AFPZZAmbYm4mA4Tr7Hd48AncueQbpxQB",
  "key3": "4XaBs9wxLUc69oyCcx7ZbW216faezAEXpGMW6Lap2FxLZ6jWUw7MKi8PVgcosHEeBoCnEspXCWN4cFWKEgzHeLET",
  "key4": "2gcW3U19Jv4ydiyZm1bSc6ZoqTuMe47stTFBSeXnK5YeFSiLM6poiTdGdWFwxTmR1iM9dxwMmN4D2XKqKa4dcJeY",
  "key5": "2sheGkfJx7nv6ekGXp1i6MCuxPCfH49gbmfocXpDvTusyTRTnXRBF9y87cAX6ReaZXRzTFhrCTYE3yk1yerrHzVz",
  "key6": "gYn2LX8VLDnhXDGEz5PqAtB83hBcoxJcFz5SLsSJzZeTNqKhZPtNj6RKiBp4qZTVgoPJJNFs9opzZqYPheuo7zu",
  "key7": "gr3S4cS6VqJbW9A9jFbSeTexDJaii4v4U2fp5taoHP1DnZbyHXhR9G4ymNfMWNhSkRUYjsYNBNqKNHVDivf1gCQ",
  "key8": "3whEuhFz8pJM54EBhWXU1QuonowVHQjjvoVusUfP7rgUQBweFBJAAk6XSq5XCWtN1kfg69fwXUbkcXAUBvJwCe4R",
  "key9": "2z99XUgquT8a6zx7CF2ovbZkqk1GTahzebxFpQ14k2bEFYqYty3ytK1MdeRMaP9NrGpdfkagiyaZttzYAB2ZeU7G",
  "key10": "4XoEELE3QSvLavrf2AVHgoZfWpSyJF4u7Vn6NsSBWyGyqoQxjZhDSuB88iqs9t8hxT7X2ehtt7RB1RpxG29AdxXW",
  "key11": "3HXg4thyEB6cmw28C9SPayBPKsGyGruAjTdJYBksUtWMySCfmYxeCuiMvitsPdGz9kLjReEBFckgyGWpz9L897rU",
  "key12": "Dkd8DHjqmM7kyVu3D467cRRAz4RSwQTWEpntU5MrGXt7jV6CXL3LfGq3nXXiFhrE6Ct7mxvpnf5eXbortRdc7xt",
  "key13": "5biQozEPY76GodzKtyng1GfRXBqBthuX43Mf1bB1Lpf4BVvB1paD9fwsYt5A7JvucHWfmtkbuXkB4NWTF4Rv5Ena",
  "key14": "4mxd7uMzsnPartMDDpwq9ijtvJBxJWxarz37NU8anpHc1o3qmprjvhmx2CQ35Wp3pZok3XPAkUyWsoBQvrZB8hFP",
  "key15": "4aN8xgG2zrk82CTuYh2fJUTJjy6dci7tK38hmk2odQM7fN1dvTy1jp5T265B9DckG1YZrHM94B1aK4tk7mmyi3y1",
  "key16": "5doQnjjopyxZhESrTu4Zn2wSagheV7DmbYY3kjeLp2i1AVz8XraKS1jxFoF4YzctqWMc2AdXY5Hz5jF3vBgJHeR8",
  "key17": "eTCFXrior1Q6i59oEkCUMwmf7f7ZfB9ZprnUQqw33WbTiFu96JGWN6GqRaMvhvEAe9vYFNJzNy2yj3xsstQPenD",
  "key18": "5b4RQpYzEsmijntkzreq8m2PJuFPdSJEgrGCEWQUZoycmkJSUnJUrEuKkzaS2q2eASL9BhjtCjvVLYwF8LYdfrBc",
  "key19": "5jmsrinUQutGhuewhf47fWVT3E3bXBWEc57et2gpe4rJnQStvcqFZq2D1CY3o916HXFQi7JhxtaDBzXKAAyYRpqD",
  "key20": "4kfTT3boGQ1Wx4Gxt2kFXXSZHnji1fpRhfD6S1ffkxNkw7zVYp5N6MLPoKzPyMyxcLUiHyoMcmbu5s5HLJj9SAkS",
  "key21": "LijhxgMDxYoHzEKGswzWcqAsuaL8BDoa43HhXiPKU3X9qSHZbmMjRdChpGAQnNTZuFiB6VEo5KXY3p5eK4BnUff",
  "key22": "sdS2j2yx7Qa4tdeNh5hN9u3P1gjf1RaGZJNFRudAqYzmRPfLtQsba5btACVm915KrsvSkERSxHkKGNzEKaT9DLY",
  "key23": "hgwR6YGqZfdzs7YYee288CsUNVD5ZaJUXNArQgG1nkvohdvCZk8bvsnZQUcFZ4PLgRZ2j7XndirXR53TtsvZ2uM",
  "key24": "5dChN4yDuN48sKXJLMBSvdFgHkU19RHqbeXbKXRb8Ai1gAtMNte4HJxaH8aqroEbu2M3ACYoSQX3gaDWvs6kUtoa",
  "key25": "2eXTNcogLe9H1a6cDViCskGEYZS2zrtKvyuSzTRRMfvuwS75Q6tMP7HGEuCMgcxjQYrzrmvVzdZhBKiLYVhB9kCi",
  "key26": "4mG7YsRdkfYFeJpk687fuagRi3qA9BhptnJK8t1rKAf42e8o81jMmHj82hg422hG66n9JNsAVQ5F7cJPdvfq8qQ7",
  "key27": "2P795CiZEmipRsJpkn6A7ykzXVEdwraVZehEufdqqkWiQFSe3bgEmHRDLjCExNQZ94cZmHF5VYgsAgRcw6vUhrGH",
  "key28": "597n9vr9e7v9cJDWvhQj5rzMoCwjqUxf5bcthqULnNghfeFJ6LaDYmXFSEGgXjz7UxrdxRWK9nGhzL14vdKp7YVC",
  "key29": "4sr9oTkYTf9WjcDZb8nhimWiMXkzo4TPwAC9D8A4ynyavxQEhPwA3BGLCk89DBd2H6MQ6mm97dAESa6SYKF2eGPn",
  "key30": "5WVEwBm5ff3zhc7Xwk6ekkVkpSQo3fAAUojuSo8yV1nDASHd9Vo5Sipy7asjYow3UuAevq43UNTbQgqYZrjD5hmp",
  "key31": "8ZmayiqbU57pYdRJcJRwYa2bGBPtFrq6JMydYY8giSsKr1eq536dbTTz8e48SaD3GKE6GmgjvCLSyxGAo2vHuox",
  "key32": "5Jqr6oyE1HxPduAPUNYs7MotgPHkCN5UpXmHtxaov2FZcKx2jKcVTupwNy7PsgzqfJvS9Dr9vR14NgZqNbRAV3Dp",
  "key33": "4MuAyzFLoXdUyAKwd8BpYajeq3xvZoD1A8ZEFat1dduY5KFZteRgTZV41DBnaD52kP9dGxpD9H187GT11erM2ALP"
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
