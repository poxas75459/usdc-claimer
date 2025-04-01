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
    "2uwTnbmfHVdYbVLKajKfkVLyfHfUkLJihahNqyzis3Ehy8Y19pDcnjNZ3BhxR3rVU86n6ib972QaCLE2graMYQ14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3547DU8JR1fYf7zMTK7Z6NShZRrJALhHTm7oZvXobWfL1p1c3dSK2MejxCZMF3qViGfE2HiHZsTKUtcJyNwNJpP1",
  "key1": "4FhvS9rhdoE6WEn49fY5pPg8hdZigGU6eQJFyGGniQCSKDuc71LXwQU9ZZB7BJtqCi2qhsoLBwt2HJrtsgDznUny",
  "key2": "3uNZPSWX3Ubqh2hMU94mEftCfxVhMg5zp2x9iQCy4vb2693MVjqNNckufRzCTrdvki4ZikRPqgtjnTQSJCfwTMXT",
  "key3": "5HjDKXEiNfdrxPKWcNi3gnkownG9SVTtyFaKz43gGoqmaPAYyBoFLnoCdVvuHXsHNpK2dteM3oC3LwG4jkk7XF9H",
  "key4": "32pYo1k2cecdPoBebvMwtzFHMEN4yDpQHSis2Je8fR9sJbbqukNqD2Q6kZcXuTd4qdtvxrC6ymM3FZro3inXnz96",
  "key5": "2xtvp4qHPm3ut2UkpD3QdAVT6vMDc4UdJts22ixySamyGJj8H9mHqonR4QfNFjN4S8q2TWnB2wEZwtu6AiW7mnr6",
  "key6": "39aMWbMDZijSTWjUT37ZJztM1J8qcDqcZM7GpJWg9JUAERrVd3dd7uLaWfjU8CQwWhZsne99XTJutoGuTjDeKdd1",
  "key7": "3vzbvsMP1MVgE2rZqnWrXvZN7i27NfZ2zV9YYR78j4DS8xierqUENLeYwHv8M2pYxkYMwDfjcfw2Hk2ZcpQTqNGx",
  "key8": "3XYD2LSWZPtNaYBJcYmGGJS4eiJnssngzMQ5qkfGzSec2iJ3oaHpnH5N8vN9tzLstexUecYpLDhJ8Y841NG1EkGq",
  "key9": "82KpoyRuYHgBCKU2w6qKJz5KADKnNbfL77yY5bsFTF96PmaCKhyMiRAbdCdoMoCDQ1inUZmfm8SrHtCqW3jVqHt",
  "key10": "5yjGaB4uWvXpAJa3QrSg3iH1DK3G6gHZn8RcEJVzSA8hJvEzUyQMgcJF3BPUkHP3mY9Qgdx9NiC7MQP1Zc7X5HJ5",
  "key11": "3LAG9S2V6Mz6bXS1qL22bqEawJ5TUW5oYXKxTYDcGZUw62T5e4SUFThossJAeYXPzAZoMReEJ2zCSne4pg54owGh",
  "key12": "2fe3vaWpfrwM6BmhmRXb8u5SYpVBoewEggiD6yD7dhBUToKvnaaNPo6SVjv8D2XfpZdoNLV8SNL2gDUtew3gZ9Jw",
  "key13": "3o9RxndBG4iqDnAefcjUeuGenJyEF6a6Vyp9ybVR7DKbfzCWpcUsvCGH7hZLZAZNwqnkEwfVYTBLjK6d4CHsW9dm",
  "key14": "2243a9CX2eCirTircS92bwYeLtr2MgqwJe84gMZBx5hjRNL9VWBeY2zuS5q7cNkCT63wrHrNegFPMHaVYCsBzie8",
  "key15": "2U8yigEjGxptNP7K128moJa3H91t3ZEe2Fa9JzUNAfcJQpKioycZ69Wi8SFTe43WgQSjvazhANhbiALVQzm5XbDg",
  "key16": "2wXGp3tfdpwqLKDpmgm6Rt4bzsWGZZECCBia1zGS74iFqFxCVRLVfiBHv4f9Mn8LJuXhYaRNp3soRtbD5FJUckFp",
  "key17": "3x9EaRPtt3vTCzcawYPAbK2kqtFa6wAruKG8ZWPgx9JhTbvrtTGdPGbEoc1AzUirpZUkFr6dAfPmHXkkVbwr5zAz",
  "key18": "2KayFDvw27DMoQZuvYfHngskr77pkXDB8R61E8GkTgi7WKTGZMCcwhaGz6PDGu5XCtbi5wzB2KpBv17edNDia3t3",
  "key19": "596kFkPmmTEVQSZFrV424DM1yX2aNi3QBmZoHMrkH1VkaVnGQAAEY2WgyvvvkFdyBN9Din6VJfUAdd9xq8LhDpVn",
  "key20": "2tJRBhLoQcYVGRN4GY7GHUbP9zvPmfz18viFxNKYohzVpNMy6QnKp6Ca2fvmmwMXfaXjiSgg89WDfYTk1B2mH3SN",
  "key21": "eNtwj4rWJdCqdSAZP9a3V4gcnytxPz1ez41kAyKW1x9SPYnYCfj2MMxDZCMwsGkNNPfHFSAEETHZx5VB6GKuecZ",
  "key22": "5k4PKoGPyHiErWbYpSMRpmyBh4kMSY6CKE6PKU6cFK84PynvJruf6t7BNmWhJkbyBSdhy8xwJbg4QVodqL68mzZb",
  "key23": "2okUEcQvoBgm9dTF59kxkbvdA8Rz87rfR3AwmS21ySYMCS4BD9uucdG465hMgCvvX73QmakJGJuiSkZzmv2x4iwt",
  "key24": "25fs2wpBFabpRiK2jxGACi9MPqbGxV4wTpKikDzfFMMmAnjUjJpCFkJYHQBG7NriCY9xsRCi2ojfixCsq15v84pm",
  "key25": "397APuF3aBgzZquuetBJNdkvMzk5x1RdyhaaEkfmVVLwfrPePSjNkE7ogFfdJMAs7Bmo5BLjbu1pKALQtNPuX5Qv",
  "key26": "2dEiMR6u7obawXzUqLyLdBALALUnoWYVEiqymZ8ht82aiKDgZJkQYdzQCbv5Y6TfroxZ4q23ULYJhbC7E6yzUp4h",
  "key27": "2eNxi1x5aAokGzV42W1hyj7699UCW6urWzdEFhYkAXuYxAQueGcb9nbfeZiovhXxhJC48fjM9VN2zZrrLz7vxJNo",
  "key28": "2q4KDkaG3vDNDfAvSNEZPwxyd1ZddZMdjYFK2XCAcegjBpWTmumWUyNXVmAD1JFFd6KZWDh8efMrvq1vx9hvQ6xx",
  "key29": "3jmvG5F5QD2trnj1pzqzFuaQH3adEREkMjRqHVjBchgw3fTTW93HKstahPvFFT5382T7znVeCdxLgS7xVkfzJzKm",
  "key30": "49DYXzeCzxjvdFE6TLD6GoznJyb5gZ9138iC2NdJUkygV66eH5YbwFACPuJ3pz7z9JazhjozbiepbneYZJNtqDLE",
  "key31": "48duMTa6B4jn5nfF5EGCJbFwa3w5k4D45VTWhwAhxC1Z4JfdkZ9PRUtFvbfVxCwxQXvqKXLdyoykJjzKDbFJrRSt",
  "key32": "2atitq8q73TpFAY8a9PkupbuLu9VEwMRKMKaawCSrq78MjbbahLyka6336f1nqeVGppZd3S7257Dsz5YRhA8sYFz",
  "key33": "4tPgt4PZTAWDsNqQpATvhigQsq6C6dF19GfbYe4TMuKQg2V2RXvGjV3Jjvhu7ZSmTgtS4a4mKpQmVr7ymuLQzBRW",
  "key34": "5iSLYXRZ8qM3Ei5Q6GFYY5HY8pDyuEUbjpmDrUtrpUK5x75w6X5tPaZaFed5trwnYX3mMqzFmw9swBJhRH5Geb7K",
  "key35": "3E6iExFzfrH3fgAwuvpX68cdWuB1XDvhmsrgkpPFZTDicmsfe6wNCDQzK8C5Q9jBHiyuzBex7iRU3zDLsBhG1zFs",
  "key36": "311FtnD3wCcmSMEDafvGL6ShPECqdAjMbJdqYU4UVAHYjhxH7mMn9FnYi2RDLVjUfW28U1dsMM6d98WD9tV5Mbcx",
  "key37": "59e7oAmDKvRGMRKNQM94ckY2PK32paoyU6tk7HTgLvjKqqB8CAdL4UXUZSS5bLgeR1xuy1RMWZ4sM2fEWopEm2qa",
  "key38": "3eTJ99YvYaqP9ByXRSoLQdFoGTw1zxHCsn3LydiEscdVdH3dcmM3MaQoMv15wiG17YfWBN8GfGtzBLh76e5KScVz",
  "key39": "2y17DTNSVVcactZiin56fJYU4o39byHXZbVFTdv4frQ4Ly5q8KKd2RFvGTcoCWWr2ed3uKscJiQQk2e2AmFkpRpL",
  "key40": "5cCcDbHxzXF8YkcvMsqVHxvMgfWDmE4t128TZ6uHGSZcjrUHS6ibu6ARugyXjVoMxr1ZprPL85cJaUs8h5dWCQEv",
  "key41": "ot5v4SKphZgHaKfAiDKCtKQikq7Qf2ZrQJs7Em8VDUtfVm4s7u2i8YzWfgv3p7BM7xMe3KWR9fN3M2mraUPdqiU",
  "key42": "4F8QTHHGojuj6kMB85rBjBRz31vFoW4yQ3dR76LE532XUG1qYG74h16n8KUjJUiRiTMcZsJitbbvb5jHg391xMkr",
  "key43": "4se6B2xYjbVrB6AYaGMtyksdYkBz5g4VcvehZsABMJ4WSxJX3YFrp952v9VuoaHXbRen1LmFn543bX8PSVSWA76A"
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
