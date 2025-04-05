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
    "3vcY6sk2dBWn87NDhWYG3wGXwz9BQvoLkDamzEykAj7C8dmvaYvYDWMBatkm9jw72U1UXcLxz6PNak4pk9ujXfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQErpM2rSSBW54cNEh7krqbL2khMhjaisG5Fft2DNsqy95MZbzFEneLGYZA9uAL8VAqHqCLxNhkced5uhtq4wrg",
  "key1": "3JmLDmTaWjxayoN1kvqEpow1NvVX9soDESXLzAdmi8hWjvNe5VjbCxCbf5bBFoxkGbCf6QsRSpTMtt51AdcSAimC",
  "key2": "5X8W9W8KLwX2LEFm1SwxNoUfq3gJqFJoSrjYE4ZovkDyxJrg1GWYU2nUdDeZ6EfgT5JTKcjosvQsChYhpAPqsUNn",
  "key3": "5VXW1qcUGEcwFWJRHvgZSUcZy2fDx6WJruonjga9rzsqMzyqsP3z1mL3xtaQKmp5mTPnqcJyQJstHBtfXobVNqni",
  "key4": "2WVrh5dzJ3CrKZUeMyetSVdtCCGCTp455EqfsKcx6AVpx1RN9Vbd7fkbxrm83deNZPxV2qqAA2uiBDeZ2uEWAWS9",
  "key5": "3SexzTFcLLhipAJ95pME9hSyzYD7SAXzBEgZc9b8vLbBHJWnmJBrXTug4zXQnwHsuYP8kSPptvvFBUN9278DKaLe",
  "key6": "5JtNsozDjQz5gHBJrJhE6VKfsmaBUbBefJsBEMiTuhB9pkv42zaXQN6225aKpt5xgTc3uSbmP7WKZ6by7mcuKmG",
  "key7": "3s91axpn8e158b4Le2iGG4A4V8uVR5J2CrBjd35Dvjrie2PLeqyFSjJqmhVQCyqmBPjARXYkB9nNmZ5nfjLd1d7P",
  "key8": "4P818ULEef4vPxfmVM2j7cnD5KaQC76itaYA2CMMbWDRBc3pJtm6udPSK68ciqNXodDRgQXsF49kSVo6mLN2hXnm",
  "key9": "5ktgULQxYtitigJwqbnGeQsQZMXxJVjUfAuxnAfhXPTWjQ9BiKvHQ8Wuzn1rZjPm9cHRrXUPr6CgTbyPM7Whoeky",
  "key10": "2rtunAgyTGBXqG12BEaNiLh3Kpz9cuavcU3fiJbcnvhggn8cz7ziBCQVYZx1D5KHw69VMFnHmDUCXK2fASKjzVHi",
  "key11": "bescJPsn4ACiSkv4cZgdQV9bkRYobRz2H8rBMRbKqwhLf5fZXMnRK1v7ZGxEsuvCP2Uo2uiUSGp8eYoNxwZz5Y1",
  "key12": "63qfF3dj8eUDciHQYuGZbZsMdzEijmC4hWUBMUT9vCstCGwBdaLn77hapX5dk6GH8REn2a3KZKEG62SDprQDLbiX",
  "key13": "3iwdAUZbQFRqkknJtKxZScrCXBnucHY36CGaaGGijrowR5McRKsi3pJgZNrrcBzayTMBUKAtZu3o45WajpvVcrQE",
  "key14": "a86UeLgCaPfbh1bxDJMmtkLwq42r6tYDr6hwWP4iRJxgpNpRySp7HGARHRWbdgPJzpvyEwrap87EiuJ8cEFyLKt",
  "key15": "2SRzCvoWzFNWBiNDvVkVSRkeTrsJE6LUoo9By1XKqTCTComri48odHGXfu1jRhgPgGsHhjwgbarFPF3B1qeQP2ec",
  "key16": "5FBQKpg7CBYM888ZawPUKuZRaKHpbRmkkZ885su8veg1yq4Ko5YwtSDKqoQfVwmcRUe5jDTbDSAAJjmGaRMtsdC7",
  "key17": "4PSzjq8pkNHDipWQjgVs7kqGLo6No14gDmJNgb3UyeJGWZoXQomNLo53XRjDnFExgY4x7iRjaknp8V4mTXbCTQnw",
  "key18": "5wy9P2GG56P1zVH9mRUtvBHGpyK7Cph59GkoshPw2deKWNY2G9rQULeoKEQdmFLRZKxAYE2Ud1D9vRXnCtNHa3Q8",
  "key19": "VnN8eiNYwPCw91ebNRffPpSq2vfKMTDg9Pn3NVWb1TrBsj7DC7rw1rKTDPp3fW4BYdW4Bbkq6HxjrJ4MrLt4ck9",
  "key20": "4oVnQpGsw1h1D5oQAauoJAoyeXpxf1MqUdqcSLLLjrWQmgzQ9mKkVB7CjReEPwkGw8RQ1dKCzNYWqcJCiV2AKuPx",
  "key21": "E2N4TF5zQKvanUDdo2448pift6ZJeczY9iXhTfaX4CMyWhBPgqXfbVpWB3XHUHpPPQC6Lb26vUDhk1KpY7r4QwR",
  "key22": "Pok5MQEyTjdKxDPb2bzG1DYSnFuJbUMWFEkUbdA6Frb49edZYKty3wcQMQR23Y1kwikLQ7KrwM7ifVNaaczSipf",
  "key23": "3MBfMXd5AZW5v6uAqVXSNMpRp9uoyGFJXPBcT8jd1dzuTMLi91pL9DNS7FVb5KRHSPR5nyPutvy38MNiKcNRKcRD",
  "key24": "2fRa2of3hYH7eZrRstwNvJ5e8Q2mayBWNMQPEaw91UF5uo9jeuBfEkaEna8iwDbXvDpuWZ7reqQipYc4XXL63Sxz",
  "key25": "5WTuz23Z2akdrZNuVqb9q4So6YS2xwKMBmQgQBhwk3u4Y7KVVi2mTBaP97RcbcfSE3YNt7aDKB42tySNg8No96Qv",
  "key26": "rLA1oAnX8Yys6bdAnSRD6vCAMXZqLTYqZ8YDu9aCU3FKf2daZEPidZBJdarZV5KfnCWSTv7rPgA7QrY4LJHHQ5s",
  "key27": "3vawto9LWAH6nr67ZGbfktKuNEbSc3aSgg867g4eA9f8BZzcgvuxmt1XHLB2hhjoLPobdwfY3vrofv8n5fYDC6ym",
  "key28": "5ZkV6LbmoCXiuDYSGGobz3MmnnxcM942Jv7D1f2vi35wWoX4BXdaqu44yNfia4NGmmRGbTwPHMnSUWshXSHGYvDr",
  "key29": "5xFwnPXLKVjNvmnWK8jSqekohKhKnWVWCVM7HN2rCn8Nnpjb6vY7bEWk5L2k4FU4tJ7XM6qvUFi8kf5ei7dsBprC",
  "key30": "3gSYFWr29C4qgkpT28Nh3Tie61czcMabHV9WpPxSSSbKB7sSoaK8gYe3UGnEzWe1KSefpKoCVr2HVJ7537TFujgN",
  "key31": "5aDydhp4GT4KG7rRkiPVV7uU3xy31zJuzZAXvr7iajk8prAvL9mbGbb51A36ypm9U2ChJG2WuybfPGa4uaS3JiqA"
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
