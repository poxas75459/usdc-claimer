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
    "5tPLbNTgnewqFWWM73K32koGcVRWHM1xvXfKHr9BJmKwVUT1chSepgLQQrohAbbtv2UJy9wQXxQTzQL3ezRTUpL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L6LcdLB6hN2BKRTiDdu3u7Nedko3Dig4MWqtregsMA9z1YFivzxDXWDRzGg7a5ggW7ukTfRLo4XCMziTZhumSh",
  "key1": "2rA2WNZqHQkL5KrqQDKJ5XbVXhEAnujLv2kBt6mutchRnaCtA5cShokXSGj3cc5VZ61pBtaPkjhx2jqx2crRUMgg",
  "key2": "4BCkbA1V39bqHqh2iVtPzSpbuZAzyzzz4ZvxwGP2ZFD81jvfEhvZBozAvJ1bw58TZWmqpcceYm2JJ7CaHeXwidqb",
  "key3": "5H89ppudP6TKxPU17tmBKW6xuUWfDUHhncHgjVfnSUgvjmwtnYxt4ozFkdPEaa9W5dvBsHjth8oLhv6RjKEsR2Eo",
  "key4": "5VJtWUiwn4H9ySP6Y1Qtr9xYoq1A7wh5GbGirBzAG7KGDotEV81RjA7gpseSNthZ8yaDN4YvKsHTdL2fp2XsmZCZ",
  "key5": "5DeL2MLniq8q6qH5SeSHh5kL7YJGajNfbwzi2gbGuMap7C3Vxqg5FrWJKpYu9vHZJFpsfVEFBuBdhKBWWtCeRvqE",
  "key6": "4yNZNk3QuvfYvQMRJnkmzusHcwycmRRutLHnF5Qe1Ndyv8ZBX9rW6PbNp1Ato7VQjUoLacDoG2rgVzmUMhpk4NG9",
  "key7": "3DDMswP7K1VvBdhHTX8es9LHjJM6takYHvmGCgTn6coLKk4jPnfojAj15Av71Xy5n5eS6Mz7MxmUxQxuGFo1yxj1",
  "key8": "4iy7gGgvCxXtp4ninh2YB7eWT4MRabxzFvNk2qg8xk46cckBfKM6uv2L3tcf8YXG8oUtoJCPnVmynteAYGmJCezt",
  "key9": "2PvbSmysQcM69jqyUpfZ6tyVhjaFufBfiVmfdiC4hrEUShuyjCbwSdey5dsB5CiiFeKqtEDHFbvV21XF5wxv6yMq",
  "key10": "pViVHqmsCuZJV8vn3iEUq1KmWtfpgRSd46nmeSQ9rkQfVBVLu7jrJvRCguoQHvzJoUCHeYDcjcyAQRhMqNMZXHn",
  "key11": "4CiWfwrBrv57uEZFNWULKzoj8Rb7xitK3ZJR6EdxuGpeYMVkjppbx9Tndt8rYJHzSUWZ88hBu6dB9UbMZENsoxH4",
  "key12": "2r5TnFvSrd4KLFhb544G2JBMiMv5XWFeCdoy6xVcu81nMyTTM6cujKiqNdwhffGhwt7KsCeHyjfVxkuf2ndXWh1K",
  "key13": "4mWQNnBuMhQ7UTFeYeJMCUide9NSZbYj2Cq6FGNN3AeDTuHSrt726rKWEWeG8guuhTfZQrryo7Yvb3fxyC1i7o6m",
  "key14": "45E4KKUX3iCM2VmkMnmMnsxAnp26LhUCYVsAd8FBKcoU1kz1voLZxjW8XdymbBFuVR6ym2SYiQk4eTTVncX1D2pE",
  "key15": "5saqiNNPxCeKWbmjVfhuugMaBt1vNugM9H9NdWWKDoVSA5yPQne5fx451uHrnoaS3E71H75hcSKUTpjMUJLtL6ux",
  "key16": "5ohyyV8yeiTU9ceaNErNtfSRWvqmiPT2gV61HyNdw14r9ecaC2gLhafgWbxyxZDrDnNPhk3XevVHN5sxZBJk9ZLq",
  "key17": "28uTPnUyfSLPzQFCxhyNEt5B4xUqP2bZQh1ajXTbG1XJjsXzk1aWSpih7Kptd2K3nzFzvaJRyPXJbigS6sgWKDZL",
  "key18": "51oAE9N8ahJrTCaXCCaYh3HKH7coWRSGwnxatEAtv874m8BYmQgAJekpWrohG4DJATQjWebXs8jWeys28EXy8XJB",
  "key19": "3pN36YXCqpuQEiqwH7WRW9YYCJZFHLz3rWKaSttPCvqjSExDKMa3Cy1gKJm9gTNLumPz2Fkps7sNbXFBqtp16qLB",
  "key20": "2dnVtD59z5e4RwSfxFs5GtzioG7EfoJXaVBSuRaj3xLgpsVpEAnCRKW3biVtGRPyja2kbTkpcGiZ65mq7WDXi48G",
  "key21": "4wmmLb7hSdMXrCyV36Y2efGRxBiVm96GhzRtR9JGUMPoSQU4syyNnF76LqkvgChRkBBoav1ALYLs88g4atECBJtp",
  "key22": "brbyDziTbJkqoVrv7eE4opqQwDmaMmkBWJnosyd8Kc5jh7JwXryNaULN2zk7VSBJjYktNNugnKtFmyJSuqVjtkb",
  "key23": "Monqnu5fPrfmtkpGR55RZWFppxdsbSh8ZieUC2cvCvqyLpHbTwfVUGujn1iZgkp2kYc6quXofkofaBKK5mBAoYL",
  "key24": "4B1wD9x5bZbreoemBCF4r1NjYnmhbjZ475TSxDumNcWh5M5j3GH7kLgicp2sTRLLoMoLkcrEv5Na333CZooTJXWW",
  "key25": "kYeLAg6ftnRZiBmULYiXC6YLRAMfzGZPy2B3yF1wbSYQ4iT9FeYNmJpcp5aMcEiEMobhhGEcduoQoxpUn5jAivc",
  "key26": "2tRv8At9ZEYMG8s8jTsc38kgjVU9WCrzZCvQEDXkedt8hDN56fCiZmBQDzxf8iURpUNwURnxu9stbs47heTHpkTY",
  "key27": "5pGaD2yDTx8RvUfTMWWnQMHBaaE3mr2sNmZS7ys1px2uVFpbSxadpBD8uiEgtxYbBfKrAnYDmLC815Z4rjThWgJv"
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
