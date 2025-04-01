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
    "BoCWBnK7bSJcjfkug9Q7J2rSEHV5ftfVJzgG9T8K9N2vjBNp9mqBZhjHqoySyqFeCpWJsfe6S2bn3Ag6iTepPhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MW8vij57NDRGQn7UePXPzjaYLUHFqGkknNgZiRmfy3U6XZnzfYNtx7gXqDef7cB6b7UdUWaeubaDY8hFkgMty7w",
  "key1": "KWHx334k4Le8T5iUpoGPaTetskfmEmoW6GKL4ryFmnU3RFSStEvKqiMqMX4FPPrjmoJ4rNZ3MQbPV2xmNWbbLki",
  "key2": "3fc92cH7YpA2RsWarKD3fbgWXUarZEFHCZUV3zREdhbfE21M6GKVwzciFj539aLAqYpCeRvMT7AmA8RVLBfTHvGa",
  "key3": "23Yj63zsLwnXVAyCvEfojtfPt6XpoCXV64yYtHY3K1HzfW3ezJomSvq7m7ASBzyKUBbo8Y96kUT4LcECcfrKm4Vu",
  "key4": "497H7EcaN8iKf9PYaey6GdTnwW6A4ETmTZNjouVpiHmGvscgqtCSVFEAcqk17VxZjPMmBxzjaGFmKU2rN894P3eA",
  "key5": "3udhUaDpaNNdPxZsTaAux8Zjek8M7n3TPRyy3UJmR66yt41xaQ21jiT5bsoJLiPRyApFsU6zCFdeLBfUgb9mKPk1",
  "key6": "54YmPJhF7wHEz8WhM7AjHjSREq7PzgxVUKMLAqo7ZzV3UcuL7MMM53xfr7aJJ2omvYFBwozyAmYGY77xuwh2y8yz",
  "key7": "4dmP3B51tJukuuus1BxukK3HTxhGp4oZJWg5Xpv74J9AjKByWG29FnH1St5aefoeeQ47TkmQjfzzY5g6HpHUYFbs",
  "key8": "4vY6DWTUpcZZRZPQonzQBUaU6bxWTRv7XdvycMqmYd7QMVxux3kC7S3xYyPPEGqjgiZNLTrm5UQBDPnEMiV4er7D",
  "key9": "39dfqjPLrLykcsLbLkVzEztQhC3mWoAtSV7HgywnQ8YuNpdD89NGADnNiCGCtGEPukrKmjfF3gL2hBcj8nN8AUBG",
  "key10": "2A6ez9oRic6fpcrsv92ve9RkyUigGoUnYRfFPSqc4evJLj1WRKHM8Hd84UAjPvKTMvwWaoUmGg7Q4vBv4QzZ9tm8",
  "key11": "H3JRbk9dVkBzu9LBAeys3d6ej75KDx6X2mE3yvRrEivaf91nmTgpwAvjG2FLoDUyauK8FDKMX7SfmCmh4AXjNgY",
  "key12": "TtxrB2y9PaHtAZv7PrahorkUsNnSESJsP4xkKFQhX9gDa8Byfe4hsifrRJLZTpkDzGzj5ZBw4REMHQFseH8kjQp",
  "key13": "3KLHdPSC9jogwUVY74AnDN1CWXJX8JiR2bFmPkYF84WxkLpCTDigLfhpvoG1riHVWURUnN3Qd68dvuRXZAfWLR18",
  "key14": "jt3NXZLjQ3G1k7g1EFQCzfEYDGbnRhKuof3zP2iB38aRGHtHpEpojAVsDmd7tsXkuQPZRTYZxKV3zm9sHjhZvQh",
  "key15": "3HyK6sCw8hgV9eujCK7JAtaP5PoDFcHkUBnAdnXZ1h2J8JZyuksJjrANnP21XjKNdh3VUuwggqdHgovvEEoGvxaf",
  "key16": "3xWCktUR4D1mBJKHaV8LZxou1vNLXfAa8sJ1n3vNaNVReTbKydNXo1RexJZdfJvLEWrQkw7qGVcFLwPVkAHBUVfV",
  "key17": "Lf3dhSVvU5Ybw2YRroPZs5whJ2cR4red9d5FwhpVte3tisqon6yJ8yYQWtfbwefRP9mE17bjKpWGc1qySK2b1Jc",
  "key18": "3NBSG2eTSNnqKGeLjcNockv3h4N3QxTkJSCiJexcJ2G2ZwZiRTiE7J7erGHpW5yafW3Vgkc2TGXxooh5V4JuyeHK",
  "key19": "2jFXyUTwXs51FQUsnjgebUQwqqJqpRVorpkDaDYzp4K5dsUg3sRkq1wbk5YirV4MLevQyte7jtptGinj56m36mxs",
  "key20": "3wmbAXGk331fu1kXejm2gJ9mvTJEao7ixra4R3MRhoSqVbvrX45j7bBjYAvEi8g14bs3gmRgN3enqv1TZtSRQyUX",
  "key21": "4Bd4mCAMY76xXx8t1LumeDXFrTohRcqvy8btJ64rqRRno8xGtxxXR9pTyQkgkeahH5UigBSb4gJhbCkJUyFqbnqU",
  "key22": "5a16EkN9NHg3N3ZQiTHiosKtEHCsrRkbFgFxjom7Dv652QYaybD21s26AgfzGV4GR2UnjqwKLeDXReopcHuBht8J",
  "key23": "MqcuEy1URjLALsVGZmY1j4Jo8NZeca1hdrVA8LjeiZK9sYBExMZphqckTpyzi47TqgqDKBTF9y6R6TE3xaQLj8m",
  "key24": "Fdi5nxSE79t4KHXWsXnD5W8ojiWNWfniiYidGMp4GEXrnRBZP4d2XSyWpM9Cm1YpRPfcWL9h3guixfTo99SwA1Q",
  "key25": "WxsZrGBMvoHuUVHMrFPUwb9pJ185fRazccBikv2QxRsqe95hEVMbaWzCYw41YzZLikx3yh3WRjQFEUom43xqha5",
  "key26": "Br7B29ePZEgPCgKqCmCVMEaBL5whA3h3MmfxXSRnxWKCFwxX9gLf6379DixA8yijVc6e2eFGpKvuShv8Gwp63ZK",
  "key27": "5jrFzseDhpTkDX5zApHZuzXYJPSsdYAmu7DPeTB4B94Cgiu8pJasQyV4CWQMzrWR9UVrP8r7TTiz4sEDJWPY6t8b",
  "key28": "53eEsakmRYXcG6LYSGyb9TSH2jffwTxdp3YVwfaR9z2tzzBud8txUkZ38FnvdxdmrFW4qKqLquseSKjPrqQ4Znky",
  "key29": "ARCAEPMGNt7VJvk4494m9WqEujek61WLWwv3gmaFmzQKB4uRhehBTFo3A7ucKjpEYiEerQ4nyrrxVcRKKg1vXeG"
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
