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
    "3gTYr4KREoWJbrPLbuHWHGEpcTWz5WtHda55k4Ghqu69LnsRpUqEuTevvix9HAuMcaGkQm5F5bKAEjwEKUknD7aC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fziH13SxTWrVKBTS6pC9hxySuuuX4aWnVWj7fefoKH4E8WMzMzgAtCyfyJWX27vdsMpq9bZUmDqumVEWLn4K4MD",
  "key1": "2Rsouvz7ZQzQdAiAoJKFLvkpV4mNcZKAczhyf2svA9zYpJL5qDuYJVt925yk88jXjmUiSFYyTJiuFszkcpr4LdT7",
  "key2": "44i8ZHfAdEh2v2sFPycqJ2Z93U9V2CAhAMTc8nzckueu4ZPPbGz5DaQU8GCaLZwQKyNkrdYZsbGq4MQ6dUw8o9oo",
  "key3": "21x2TDJRiWQG1pJD9zdc1xg2cWNw8JjK9H6jrvXHrDFm6S23Eec9AnNLsJQkUnPj3fAf5u13wg3ULtFNRcS8Pj1F",
  "key4": "641fJm5JQaN9ym8KSwic1RDRfFUtSkk5GknvboVbePNKci79bvPpSMaYRuvnD5Zkg2hvRMKsP4aCcCVAtDcgjxww",
  "key5": "4ukUbeaUuEWgbpDAmtiADViDhpRRYbG3hNNZGNibN9owKGbihqWrhM9e4g3EdJZRQfkjHJiu6zeR2Tjd1TyTaKzQ",
  "key6": "3WNhXDZNdW6MXnkn4oTRqywqMyrcMpK54NwHq993xoZueY6322XvDyeh8sizq3U6wJM6zHKcgE3XSEEkTFatRURn",
  "key7": "3Wvy8ErzEnm4K6GVZgjMc7KtSjfiEVmXhjtAYZVr7zuhbNSK7oAnnSQjJEbpncJ5D4cM1J4Xpai969jGcyjp1yiU",
  "key8": "2nxTDT7u33dDfgJYCn3smrJjGkZNTFXkN4xhFeViutcCaXdujeNP7ossfTG7qRXUn6CnfQMoohDjn5LZbYLYVrM8",
  "key9": "QZ4K2ECd9Ht3M2EKhcVTNXMZiLZpZeGRByNNazr8cZ83PDxk2NiRoppjNAWD58ztiQdR2qqsoGiJVZjKQz1SVgM",
  "key10": "5Mky3HCP7t3ELTJVT12f2XuuVHDWB7AbJcZp1EVAye4oZy4trbHuthPbXjWoa2JHonqkFwRqME56LytdJTuQsWaS",
  "key11": "48BiQvKUn157LHFY7YLP9n8jKb8iiK8pQmfcFDmqWARhAoartym9ejVxiSRPULr6EDX1ZGWCh1Vs6qxrcRZh4msn",
  "key12": "oCocN78YiDwb8SN27n85nu9QKQ6FHaqdUADB9TfLWuaBbzFz5za1CyqP3HAGD3x9gbwJQjhHXnQayhXSZ6VZiAK",
  "key13": "C9YSU7abBZpmQhpoTvLqpTBTUBaDTVgjjraaZ6eweFhXZhyURwA5jHxP8VftxMdHTNAGbdK9SbhQKyeYP6tnSVA",
  "key14": "4Y4BCuE34TroBFW2WwnP5ThdFVZD4Pv8tvGEcwa2QefVkkSWqJkzXfsiC7PZDtv929wPexSaBBc1u5NojE84rLZF",
  "key15": "2ML7gZGCGyVLx2HS1RgnxNHyfnWvwAtw7mxxhLw7irhoDU4YffbzdYDbsyvv2ezxP3D7Y3wZm7yUjyvXAHDGXbQs",
  "key16": "4iEqLHFWKTYvKzmbjgUjkDmwvi4ARW6qMSRNsWvxGdBZhKvL42tfdUvgm7JP8ohof81SCpYwMfw5nQ9kE5ucEr9Q",
  "key17": "4tRVZrqujwhuMNWMVssuRdk4nvn1cMgw1o9SZ3m8firSNuia294kmt4kAMswKEVHdLDKKSA18TLdUb7rByVx2DkF",
  "key18": "63fYbnrVq7nWXKUFXcL4497GEoR3rPdEVdH6J7VGxjpcFmdR91FDzWdGqkSWP4LqRzW96dTBsywPQtaBsqMrZMbf",
  "key19": "LuWgkDt4FqEjxwYaiCwh6c5aqnDZ9DY3ncBLCcfD6P8wQVLh4AEcUnF5F56P1rNq7W5hwdE8vQYNviEF4bkozR1",
  "key20": "JSvRLP9VkmCrb96RPjVe1dxSsuZNz79M8u5iaZvCg6awKVSbSZGssi8XYixN42bxTZEvBJ33QRWPxj9K3ugaNYS",
  "key21": "tVgTPiECcji7rr4RKTSHgnA4ZPSkTDfopBrjjTn41BP9bag297o5J51AvVBp68EVd9Djv78cK3mSvUVVQeXX1xy",
  "key22": "4aAavTyEnCCL56KHVHBfPkr4c3J48zHz8yab8SqbVC4s4sMTEhubm9S5kHsYQS2pZbeq5c8sqQ8zU6aUH1C3LLvP",
  "key23": "35QrbqyoSHj5bheCp6qFyk4aeuMzgqh3hVYsFfTbRGxLJnzzRELRQhyVtyFLQiC9zcUEmN1u9p59ZUAWnNyy9Nuc",
  "key24": "63aj1WGQKj9aKoYMM8PjE4umnGEk7sHqeB1EsdMqeVTF1FrrhuvX7YuQUHv7ye56iHt2pqpzEy5hbZcnbVjQ8wcF",
  "key25": "YBRTQhvt7bwjQsaGuDtZeRMXukEhQbNixtJ7e6Wk8sHJaHCbj2oHNk29vLe9C1XJeUnoZi3wUDwXbUkjSTL9idf",
  "key26": "zwk6XLpQtUyYNcLYvZhkk6nWYs3SPzGzMAs2EgDWKtLrtYyASLZiexdBU8oTTRyCS7tiANduMEq6iUZbaDidWss",
  "key27": "5Kk2GDBJjcZJs8mCUyPFzWYhZMvzQRAKxJHYBR6K3Karftm7PByQ8fs7DTBTkLSKE3tNLmPeLMQKRFjGA3KgFc9g",
  "key28": "TfnABJGor8yGU1qcJ2uuvUTocKyTf1gUjnkFLMNmAjWBPZvAX6T9e6crMMz7AecPaaZKActddbHTUGzg8H5hsPJ",
  "key29": "8kQynRVLCyD6Eg1GPPG3VNZ3iya9YFHU8Fkvc9HKDD7dRtJq1HacY9yqJ4m7Y8Sk6cpAPWYqC6fdtP518RBmi63",
  "key30": "4Vfm6LdeWJnVRD6d5N3FaNzBqtKoDiCztDmfjFQGvDT85qxdpyymLxHv8Z3wEcNvnbzzd5NswqBtTTQgAFaK5HmF"
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
