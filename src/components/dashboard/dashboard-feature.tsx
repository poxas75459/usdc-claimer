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
    "3AeuFegHwvHhvQZY7oG9cJiPxGjNGqnVRB4hA1FM6GTbYXMxCtJY4nV3TURQaD5uSWSKrCNNkV38hs5VRZ3Fu3Ae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Js3qRNACxmsMn33KUubKaLTLzGYiad3YK3JoF84ENgQubDLnQd12xBQvnvYXxwTqcWn8LAoNqzj8pj7KKxmcEp8",
  "key1": "3Y8a2NAd6UR2FCVK5ri4yEtwMvRX7LxQSZGzutDuiQdWMKkmgj8zNE6AFzigucPWKBD2oSwcJKhnuPsJsdBoNiG8",
  "key2": "5seMweDJ5buNNbDj9prLk7nMZLGwqQPgN9Cf4xnQCCugspztC9mmT9ykGfKaMCaJmuBtSvRebMo6BSDxDSp3aYod",
  "key3": "4HTskvk6LjSUmZBf6U29VWou8PPf2wnDjQTEGBugeAqECydV1W7PHrMV4jAup1e6gJcrMAhonfEmq5qLJj2qW97j",
  "key4": "52tctMPKih8jK7BWzavM6XQJuuUhwxxNN34eZKWj5Qb9FDfA58ZduWZZHbJWeVx2k3XBapydzv1p6MhwzLcAHfgs",
  "key5": "129yHSbfKakc5bNG6x5HoYavjh5dTT593Grc5oXnDHeHaxi1PhDasRzhubDuvpx1z1b9UeQBC8fi8j8y4UgQCCmh",
  "key6": "C6Sr6mC3csKeC7Q3yEj7zFWVRzS4EV3tQCWQLjUEGX8vmUKgahmz6ngtg3eyJf6eoM3jCqtomVJM3CSSwjm7Pem",
  "key7": "mPuNRf8Pxom4gGUH6uCQ8ddvDdkbX35fAuvSvnQSqUwumh5LdQTE88R8k33pyPWqMJjgjqG2U3xwHB2VKiicL4u",
  "key8": "FSvXcw4AJD7tCkRLWrxzcpxNYUnfCew1qf4pDwR6BF9W2HKc1WCobRVAVMgjpYp1otdWALiCExPfThB4aNugyab",
  "key9": "q5Pc2n7vSfWzV1Q8HSKuCWrv8hHEDjLtdgk3U1JJbvqoMac9eiZjY5LnQdnpMu7ZGqcfNrdjymLwX6tt26EyN9u",
  "key10": "5h8rjc1eh7YXsQXwD6rsuFARo6r1FHiBou8hyqW4EUwTnS3xn2kiCmtBZ7XMeFfM6Yd82X4SZ89yVGRJJ2uR7KW8",
  "key11": "4RFge7J5PBd4Q8LWuZorXTZtKoBGqCu4cwMReJMHxPcmz3pphioA1NMktrmjp2vuVQWgwRfhNUgGpUvnv4refEEo",
  "key12": "5BdrDWTtv3gnR2D5VEJSs3iBJBJZcqCDuqN1pWy4DBcnqY1eA46TLusB4eCo6KM1XSmVxNxrteDcX3nNHiNiCF2E",
  "key13": "386hRfjpHhuBPmMzCPxaRwp7STLJJq5XNQw2inwSyu9ccZb7zNGHG1J4Z5NX8Mi9apbtSu19XAcJhL5Nyhzo5Cbr",
  "key14": "39GjyxgUC2yvcsKh5XmxrYtwqFvoiukS82ADVSq9YSecEpq4XUVYkqcKDkauwHNCC53bTv2TkMKUGx3fs3FtyWhy",
  "key15": "LKhjDRXhfAhPfKcneFY3WkEdwuU8o5tRrWcfMJk64ZXJdDCncGsXsr7k8iDxhe3eAWGC9mwTvWwsTorg6MXpNad",
  "key16": "5MsLRvgmZS6ULJu7r64UB52v8Xw4auN8pDHc1Cva3J7N2nUPhzvRQYK3FwDpfCg1a9hboFnXtg9jL5Q49E7vxs1i",
  "key17": "3XF7jUkjxSsx9HuVQJvVpU98d6oEgq1iguzvJaH37xztWXrvpQX4P8EwcKz72SSf91bzLC8RzmLkJ3dCTr5r4kb8",
  "key18": "2z8BetqEdNNydtimHo7vRUj2w1wDs3rSQTVVaUik6G6tb8b3vVVuGquCpyRu7251x6HfMY4MXDhvuTW1MkTzZvSx",
  "key19": "2dKS6nqp4pMMEaceS5UvCwXvRZXe179KJxbY4AYmbiTuGMPLQF8fMEz1QcYuovmyaA7D5QUoc3hDnMjWv8Nx5xWv",
  "key20": "49XokhB68NEr9mQCZ6Da8Jq36LmMvj4sudYKKfC6YzwHraNdrwSQH1FcBT8xmJ4Ngdig2KZQzQx4yTaUzawYFkAX",
  "key21": "3cLMjxLKvhjk6kwkyT9dcXV6mdNLHieZ6heYqMaAtZBH5Q7y7MLgLnqdjuVdQ9Xo7JwPWXFrXRBLp46NntvwGE3u",
  "key22": "3agxmbaD2zbWvwRnvq2Cx9GHDbz9BrZBQy9TJKjpZaS8urArDQz29yaQzHNT74QEj5NrW1JiekngWJiYe9upytcS",
  "key23": "2ph1Sp8e5zWd4Fhdoxb7EMSgjk9QRCAzgogXLSK5NbqT2uMX75XmJYqy2Z9ctyUQ5hjztbLiHY8r8QgcTxCmfxVJ",
  "key24": "3yJmYANPg1whU48qx8o7EQmtEtMtApPp9qqzagWExFyirjKLp4sTNUkgok2h9FJU1s5ioGTPecTs8DzdWeiREyaZ",
  "key25": "2S7ats1c42r6KfZQ7zspbrZosQCyeFQKubiHesKuF5npywe3y8c818WPPMkZK4LcM51bNP5QiQDxTb5Kr51MThWs",
  "key26": "H7jKKNaUQC1tca43mrs2AagScPUKEtYzL32QAUSEyJez6BBUxhT1EGBbcVCuDxQ5fP1ZMaLFjoM1aJXG3eQxq11",
  "key27": "4UyxLARzTu9cRXYP5r1Bm9p8jvgNUbb7ZUQpU39kZzQozaeNpXYXuSGXbpLHXaq9BccxSZBeiTV6X6yUSgBjeRTx",
  "key28": "3vmgf5kmooNw7HjcgCLxehLgPHzXc5kVQSvSvTQyE3kf9xiYLoxRphHHtPkymUzhGi3Li5GLKqte6Brgp19PB6jU",
  "key29": "5Nxy8B5R8ZwcMkw8x5bXcASBzSBSbJq4gv5rFqysXfA55p4aQvgbVzR4oGaVsaknQ3RWjWs16K11ttwy3Qzik32R",
  "key30": "3P9qUSFAYU9KxNUk61M7ggHJCPkuXpb88gd9WSLvFT6VMuhaG3JW63KAZUz8KVLqLviFwMnaYSNGjSqdr2QuHxK4",
  "key31": "28giPkecAi8Q469bmwYbPNFS6fsPm3H3RfDwuZjWuMxALVydGhpHXEM6K6ejunzbK74W6qbFDv8xSfEd75wNpjUt",
  "key32": "33923vunowQ3uDQ8EA4NYS7AfpzbHuofKAsqoh13Upp4BGzKMD8XE7qvv8ugmutKapV8qunxN9RHUgfE3QkzvHKV",
  "key33": "75LQ8dLUbqizmACbmDiBpGdBm42VvNw5JX2yXYsc5tFXSXDU61jbCs2uRVie9dNXGqTya3yz6nyqGVe5rhusy6E",
  "key34": "48CJiLEG7hwJkeTMego3v3QARVjhm8kbbA1UQKsp71Db5n1EGWhuhJGKSjfbYV7tot6arfk4K5HPwSDVjcXGFpug",
  "key35": "4G6L76qZR7rzM7CiUSeg6shqEBivkXauKkdVkgbpu6YHnYZZAbcASynaS9qcWCSd5TduZBh2vMfJNoDHqiTZnQKA",
  "key36": "4mAHW7dJCMMqAJFfc1yNvFFKJmAVbJyriexFCZP7w5Vv1Qck7hAEULzxFjLnSYYvmanpCA58aTvNB515Aj7mCaYV",
  "key37": "294fd4L2RyczyDcozM5HgULkznevrPHiEy3HnK4YqmdZQSNdLGJPUG2KBCM9g1UwYcDJmd6EMFc6HywKy9MnUiAL",
  "key38": "2pjrpmf8oZ8dYoUytttbPXFMhjVLWMx7rFok6ucuhA3XrvHFVTMcYngdc85QXVgSRY87H5Hty3ToiWnqUnBM7k3P",
  "key39": "4sVJqWaiePCeSz5xg6urVCvFEgjYS8KMWBDGghy81ASFR7SSEyPNf6ZsMe9vAznw8aw5yXvf9hxCbiVPLApMZRc",
  "key40": "5jj1a6yZEgW1XxWMUvJ2HaTvFwKWkLNGgLL3gms39Bc8iU3QWMGz5FWTpZAoRKcw84vfA9USsekv2ZFFL3M68Uev",
  "key41": "2SHkJG6zkauZ6Es5rzzcUeosvL27j7wGc2vxr8TJJpUdVNgAaKykccJ4GqYGvVJUje4Zx1eHDdP2vCjqkQUsAkbX",
  "key42": "6btQztRZ6ZzoKrfATVKPcZ3HByK7dqMSNNDDytPYKVYNiw4zkWXST5cHgH24EB5KQeGiMUA9JNQVXp6F6VqgMVE",
  "key43": "3ZZbFpQUCvnBkPFc9Qt2zEni63iq6o19kdV6mcwEy89c8KzPYZ1kMLpwj5br5GHTaXbz4KA5n3XCq1qaHsTwbmdi",
  "key44": "5FdNyysimcS1gSmPaa7h14BFK6FYFX1PiFBoHzis1bqrxttX9F2X6pzQAhvrwQ8paGNVRbexRZSsYhNHBFq7CNeJ"
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
