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
    "23FPjW3Gqk57qJPPvEHqCtnks5W85cHX5LaNEB667BKwE56SBH9cMKQ2qmcasEgcP6z1csMA94f6AZBUA9VaVh8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1R7sGja31kfm78ZLxjm5gbQi2EcXEFUxvLEXgF4TSVamPaC5rJTNxmjXZT8yfzmPcorKxQitzQUzqcAZeBYgHZR",
  "key1": "4ovXD7f3cRWLzdwSG85rjXZxbtwRPVH68ExRVrm31GbVbERNU9JieE53J3pPKRN4RhvsZoK2UrtenmmbVLgX6qVW",
  "key2": "2hxDDyNdjJ9Cwjd9YmpLk9fArcebXRvhJPVWcwGDc5PuCTuHWBX1f8CGhVUrwQ9ZdRf2VM2CZ45jQWdTPBxZqURq",
  "key3": "5AVcnBUVzWbytSv1MRPfxbn2QbzSC9FRaVCHA1V182pDzt9Gv5TjzQkU9pQFNNTK1cL3f97Q3bGLgQwJEdaMSybs",
  "key4": "5xwtWKv6nr7UewYXcFJik7qyZ61TCuZhNMWBBhycU87YQ2YFyfXACsiMXzx9mRLyDS1S13PB9BRNpiV38YvvCMGZ",
  "key5": "2NTuLcdbQxCyPqPe2eszodNqgCMt3CaDNo524QAWijd1nDrBzZYBb9jE2oqB8zP6no86LcyXSSFzbHSxRAqkbuSL",
  "key6": "5TN93M2XEMnNfUZNfHCCPXDEUVBRvWc7MKeBRyzysULC4p2iycVWhoYsmXvrQAxK23gj5Xy5PFTxhZCjo6Z1X5ju",
  "key7": "5Dv1XWGE2Kb2A9JDK87N4oZCb8x1e2hgWvnQ8TD9T4t9d62Ya6qhEb1er57iwbvv6vwA3G3TScr3niUsjAWbJTMu",
  "key8": "2iHpL781t5hSQB5dEcNkSu8DMcmRh8oJhpDeMtUuLE4tZi4rBBU4AmafEZEnwTyrWoTvdTYKQzkQzXqh7xWKwM1Z",
  "key9": "4KPzqnrafVEUVaj4F5tNfWWui3au1kyw6CcMrCK7REmFL3duLaBixo5dxUohZKCB2ksLsMTQ2xB7kJgpJ46qzEfy",
  "key10": "4Uhshku9S6PUnbas6ZpZinxaTuC2sScg4LE3drT9bQHZ6kpXizYkQFeTWC5bKinQnRh59ay5DETTpQWMJKT2ha9m",
  "key11": "4Qc6tarCLkzusZy613rdBhrtKoW9p9VemNEinmRTDtiUp7CVJ9YA68EcmMkc6CS46tzBC447s1j2dRvxm68ma8Uh",
  "key12": "3MR8jXxREimKaE5fkaAa8Cx4S45nThcziCoDd6S3Z3AHJDinDRX8yKPy9R6zYu6HAoneCpvdb3gWgjwpCPWivdbi",
  "key13": "3GiLrNnuztDU9ZkQJ5qwXiiVZnczfWoJuQUVL7V8LrUnXFxJA4DWLYVDWYbcUp2oTMxTLZDgTCMLfCQEV34ijsGo",
  "key14": "2TVL5J9SXaRWE9qNmiBmFt5V6SYzFEN8mhvZKmPfED7Xgi6ofCpd54T74au3KHJSrtiQ4LSJuZR4a73e1weA6Xp2",
  "key15": "3LHJCTiaiQ9Ezoq5yBRFbYh8TzM5xuGxGr9a9ANFZPFoVYHs9FBjdjyA2VA4mVqjdinroe1Dw9i9dMDGDBqju8qj",
  "key16": "XNgEvSknf7efwpbwGYAAtkq4RwS4Gt97qJtFkEyL9jRbr34mmdcPxLfWLW4yyV8dmdnGctaVyo8eFBdYBVRWUdL",
  "key17": "3ar6EsirVnhcKnmVUL1ck6B4TfEDfnPq5851YH41iHF4JGW6MhbSfEkzcB9CBNUbot6gfsU37xGa1gpnX8gNp9Gw",
  "key18": "d4sSajHZJ6WkTVFtCPZZpWZpJUDHTegV8Sy8hv1bgY6sobGfoienzvjJnthD4YhnMjQsqy3p3JQBojnfQoYW1LS",
  "key19": "5aYPCmbWzHw2fEL6KWUfpvd7oViMSJn3NodsMBvZbgRK4rdCKqWgJMvR5Pkso23rrF8itZAjrcJ3Aux1SN9yEFhX",
  "key20": "xvGLwicaoNNBMp4iQi56A9tM2CJYJa3q9eF4w8GPug4EPoCjy2xTvzZW7WfiNotxAAoHR2HSX8d3gXE57W57vdd",
  "key21": "4p8aqZjWyxJkc3UqiUHS1qpRBkPZYfbdyFT51WQ8Q98RKrQnLQausAYuoERfe4TzNGy8UU6rAkm2MZEsmRoHgFWz",
  "key22": "36tNLHPZHvtbNubPLgysMXtc3MxtgZJebw3cBiTXDmo716fMLyNbK7fCT8JKMxDZsgGrELYv9hs68XjCdF9KpKd7",
  "key23": "2PEcYLFcddN7t6wgPMFsMoTD7WfpFxc6xgLa36oi8JmZFw32YoJJss65LFf7MQrUt5EyYaQJUTaCqmHMadJ7HW3K",
  "key24": "3YZ8GcyBPzjQ9sgsXewNt2c51Mgk4QWufcuNUmoUB7pQZsNdsYEFLwcg5HiTU2fScBpVUaANMH1Aq8AiobR1bhwq",
  "key25": "3BJiHVWym6yZXMad2vUSyCdhWyVmH6nRhJXH2Kp3Ld4zrXNkrqJC5QjP1UovmWPcvzWkMFF1RLgLRuibNEzwTLHv",
  "key26": "JAhJZsGdyQyWj7prfB5VGQ5AUTK8guKDP2coMnLW5EfEcxnG8FgwmadouxCtTJKJdvnbmsNWH23v7ivi6TvdCgq",
  "key27": "5qWeHeoTKVVR2QCfE3zFLEJd1yibHc1j7q7ue6Zp6EjGEkWjbtVhKrg5dQyNeokzmaHxX1UfhGaXcEUXAsmFepBA",
  "key28": "55xtB34sRnmnNEEnBdo1EJ7yuxnd8bei1uyoxDYYADenaWwvbthGwjPbUdZDdc9hkhkGXhpc4R6rVf2DXkfWPqsC",
  "key29": "1WLWpsJnuWhvU5FsuLW5uY6wi9cxFPyAYytCwKVLx3nGWzKykGhe32CaphancCq6uLegACkXw4wNEvccahqdEYh",
  "key30": "47oatNrveZdHP8vBk9jSazRQRWezpTJXZonSc1NS92u63cJYeGnLixtFnYPYmk7wHUeD7sn8PrBjNQPNMrJHvKMu"
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
