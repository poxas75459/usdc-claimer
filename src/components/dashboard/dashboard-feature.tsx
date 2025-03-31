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
    "58qZ6PWA8kVi6Po1rTVXtFp1T99CZka5hdbngun97waz5kgGEE2fvSmk1snZZMYJPH1ayuD2Ykq3gmc91KiMA8KJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVqEPpZdxq7DHzMYQ9yEv6TtnVVTepYtwTih7dzu3w1RM84xiA3LoZpZKJmvL96z5aLSUMUXDQ3K625CjPsTWcr",
  "key1": "5vs5zPECazGPab4Xf9EbepqiNx17RJYciRT1J86sCctJQaczXfods4ePTiCVnPePEjvpCNqn7ovxvoGfueDRgyB4",
  "key2": "27KTmpzn1qcLEu9h2D91KJMmZpM3ZSmRAJfKxWfbGsAfGsYPZg5cautP8JTq8PVfaDvdZ7bgdV9EuPmWG7JYcBGR",
  "key3": "3dHmdgY452jgmQVfKkE1oj7aXNNTb3x5qmT44Z4qCCmXUDLuZxcXRi7j3jcX6wDnndEEsXhfodPQujFw8QqXLKiN",
  "key4": "VZ8231Bn4f3CNPLpc6nx4QM4Dk5w19TTyq2emvrdzGqfhdzs3ekgnR8MTY764P1BH8ed85HB3VNSq9x6Q1iaZpa",
  "key5": "5NzWs3raLfeYn8GroM5iPJjbidUShAHZxVXkUfU2NmHQsbAZ8rRN4Ps9aLDqXVJ3FHdXajHNvAzDVt4q2PYabWdz",
  "key6": "2AdQzJxwC1XXZksboJSXEtNqZVUEf25ZiFo82FYpT4BB1QQxQtyeBtYUvHepUxsMDdzZz6WK8BYsXJUSFdGVRN5W",
  "key7": "66vC9tiFGTXApdfHVQU3qmsPdCjPCWVFpyzJZJwcAr9sg9ymUqLtQb97Ydxt64UZJRzfJUgv6W786NueBuh46M5N",
  "key8": "3nXVgabSGsQvrDrR6EAwvec328RqzPS79BMnqzcaueebi8Yam6weVGdD4WfFDXwvFpFecYsyrEgkhC1B7nFa4hhv",
  "key9": "5eXxYqVfk8j8NxeQp5B3pmrDtGrvSzd1rs97Xut2kJtqsLsCkFrV6Bgm4o8h7WL6mtJi3uAUr4jTW4X5WbipAh3k",
  "key10": "3LaGVBgCvTirjFP2cuvVzCPak1sjR4VJUvAiX4vDhAwdnWkkaxJxb57EYT1dxAYRRLZVdTZgLwnaE3rKrgPESArX",
  "key11": "Me2NovVgft9EDYfUiQD35g4ZY8BPAwNTcEEoayEfFU55P42YvjJdHUHasohWgUhdBj157SnThr5Aczw9U1V3bWi",
  "key12": "2RKmSmzp5n8EQ72RLGgeKUoWHhA9wTEv5M8PLJ7rPucWvRejCmfD6VAgUtxzmsPAA95WsjJ1i6SHxCjfae7Avddv",
  "key13": "DVYAABjS74bxgEzthoZR8TUT5A3UewWW1Sa3EKaMZAG92L8MvdU6oxnvajtBwuRGxgme6nuKBrLTLmxEnaYuxr1",
  "key14": "tdGQXyZmktMjrXQN2XkZhLYUvUvAQVUojbxX17HSQDYbx9C85o5QSRAjEJqrr4JwJQMQ96s6siKdh1GNmEduTUU",
  "key15": "4t5rwYXyw3hsHichKCNJa5Dg5LDNJ5srxzFRRnTpG3rvKnahJm8Y88HK3ppmyDAhMuo2aK8ofLAR5ox7Yy4ybGLZ",
  "key16": "27wNBjXYYxV75JVff45bdVKLwH1kEWbwZXnGCoX3EfXcESVznfUMJGWhjrWYSR54dZPFSHFnRERvrxUyhTXXK5dz",
  "key17": "4LHij2e7nj1AFEVqM14gSkjrWxzFFzYziTXsh57WysozzJLE46aVZjMvJKwGS9LKXSgcaym1SF5Yp3Qdj61Fr1cu",
  "key18": "32PvgtFLFM4F89bTm1MXAQC2tWjhdK8z7MArLy7WGKvoyaSqHKg7pjd7CbqLaei5kVh8g9Gp53eaj4emvyjfnErg",
  "key19": "4yaPALMJ9k493HogEd9sKLopJip6kzuDTyXAnJPX1XLkAjzsQkAxFkUoTZrTCX5gxwdTZVmKvW9GCf62bohVZH5t",
  "key20": "3GvmHRbijqaQiUa17kmoJzfP2KaCci2nWdf7M2PN1Gwru3Qq1m4pLMtS3oYhM7VN37M45AVxv2cN7PJfMkdoEMCP",
  "key21": "5up3rvzXeYTKJvKruVZQiWpi5gWPMqoEaxeggxKQyo8dPkha3XMRwMy5wggDqf8iKhMJM443LgNM4cxikNEk7c4s",
  "key22": "4sioqxkishWFTcXWGoVdpN2HpAa2uwfekLNPd6Ww4bzoghSB6QEFym31KDHGXDkh8Ej96AfHVsYRd6saRav2JRZi",
  "key23": "5SWYFb3Ytt5TfRfYJa6RSfdpJCFYE4WfMMHkPiMnjTYf7svSq9UsQ9vVxiBBan95BAykqV1amcoayWNzEuhHpMZZ",
  "key24": "2FaJ5XZ6ojcTVgaWJ7CDcEgDBKpJTuU5k7PD8JtZcgPxChRjz9iwdogFc3Qd7zc5NqhUnojpWmoiAgqPT9AQESg1",
  "key25": "47Dun33BkGhaZpo72U1NcnquFs7RTSPztuph36iU6vtwwmR55ztP91w2Fiwru4XhtCpLmvaM9k1ehZv7cHRtLssv",
  "key26": "27AQAmn5rvsFFFSZg26yRR3DujN1EnJdxEhfLYtD5FEYsT28vK5we2rkZj5SSqtXa58S1pfeHFuytpv5d2S9Tzuk",
  "key27": "Q7s99oa8xavCngYJAQerDm3bJZeBFU7j3MUrhmEDmhEcgtj4GJHGWbh54fkmo43vcLRNPwBzRhvCX2qZXFogPpa",
  "key28": "jySudSizX4xAYan6c53b6EEUCTNFqKZ1pQsPvpDLEznTCsTqancnD4YNpgA1q5vTXHqhtNj6Gz4Fi1v7jJRGwCC"
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
