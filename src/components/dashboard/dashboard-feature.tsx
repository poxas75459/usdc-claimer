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
    "2p922xfpSji5T5qnSMAVVb5A4zHNrzyAm1NhfnuTUWNqE8QMHapcNi5qRnuSQZj39yYkffueSuDeVqvpoDGuPBQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZWyz5qBeWwdcdKoBa9QFv4R4yvihkvvuvjZY3bksHqgcFc2zpDasoNKryUsvRYAYJkepWh4v8NGRfMGMZXRpToR",
  "key1": "3VxubMofokVM9TJpsXvx3pimyXasqqvcTV4K9XhiBXtDnM9SqJcmZQFCrw3gTrvMmNNng5Dc5aDTjnZjqVuQEdXX",
  "key2": "4tt8mCJUyRz83aUW3sjCxB6QRS4aPiNw9tKTta6ixQ4yQuMXTgaNU1qAKznWaiWXyDe64hwLuvr5GyBftCYBixFF",
  "key3": "27hFZXEYtsNA5K3oHSD249YFQVzSqt99t8BRZZZVnhk1GEVsjdXymXx54tuyyjzBMH2at8u4KsHzTnuS2HKALdvc",
  "key4": "2iF3JX4PxaTfnBdrUJ2eD5RxmAapwZXSk4dS4aE2qhHzr7rf6tpyjC9CF3yMJyWJyaKrJM7MtVFx9kML5Jg13HKy",
  "key5": "4qgrocpz41ba2L7xx6NeozkPW9mch1WgzpnhTiX3fcUvsSZbn29iKGCB9mRADgNaJ65hfPsSXPJG3Mo6rES5cCqy",
  "key6": "2Qy9AviDk3NUvqLDckQgQqjXuMZZYCKge5whGXWYLz4fCZhkRAHmFzNu6yC9B2GuQgP5Vbabw9gHvPpd4Tn8EMcm",
  "key7": "56a77A6J4JUMcnmzXrePp3KzESRG1qVF79VWaCJYRW9jrhdDu166wAqHFMQHzhAAjiLvgxLdYZuBvPs94EkMqQtd",
  "key8": "3kuLbERX3amPnjazzRdEXddTMMgeTjWwEChUD3HnNtL6QUAngLfbccWTbXkEwZ3J9ykcCwRW4C6UN7ypqEjTmsh7",
  "key9": "66y4ja3Yz6fZp3jZ5f9NjAYNkUGQC34wF2jdxLgZsNf57WjdhzkTDmhVbfCB4LyCgU8gVCCsgTHPmT9jZiLxQHBW",
  "key10": "2uYmEbVvRP7LQZoLUSsrwxEt6uJMGJ3U7mLZ27mPnS9tH98ywkEjANZACuERh1HLMeinhWTXnRmuGEvzMnGByNZv",
  "key11": "4pewXYBRG8vEQVhBBaWxGSpLjoW2NtSEitMe1rcrSd7MTzeiXRpMb9QxR1Q7uXv5HeJHPM5R1nM27bTELuzdNJrm",
  "key12": "5ompVdzKSfo46YXiRQ38v3H6CnQAtdzeumVyfHQSjMLa2GecmnMyp1ktEBUY6yH9TTVPiSK5WMjb3qZcJd5aZvPp",
  "key13": "5cDgu9YyxyRtJhZAtSbHZHVN6AkDmEs1BWiJrdHZQihudhghmpT15P47ZchGQBZBkt8CytmYjS5dGANZn8sdSQXX",
  "key14": "U1jRFcUoCUau3MpwE4zNVof18FyeKJxxNwqEkoUF3ppCUUxUU4rWXyuuF3DsbygttjmpQbUzJdWnXztwPogE87Y",
  "key15": "3Fqfz17UGLvXgLey5DSEANnfW2JY1xrKeBzkHGJc7aux2ifoTKSMme9KJuH9EtA3REfc5zWSQkuAszEHR38qnBDb",
  "key16": "37KHNHeBGviL3MrrbYE3SM2RQykAjQ31NnTcSrrdoopiTNBN5xYG8bQJZzspjMoZwLb5A6Eyw564h1gBf7uuvYjp",
  "key17": "25YK883VCA8bsDUkArKTbqM1MY9gs7b3dCnn9FEA7PHKuntMbnUdiTmSdkRoVs1vANfeYETnKAQReyvReh7WBNBF",
  "key18": "4rao6AF8wyrmVJEqbNT8Tq8FRiJcQ6r5DdYS1JWXizR6Yv8ACsJvcVRFK9TrqCSFb1CsT664ippz2gjUHEM6sttY",
  "key19": "47KFBFJBMqMfgZEPuvqPqysDZy7UA5mnDZYZ4EctLHq9jMBBBp6yaqESMRyBWZjj8sGeHF5uQm4fVxH9kz6ugkD7",
  "key20": "3sigUU2hWeK3wcNSCMEU6KqBDUd9ruzunSwqxLAGCDFxbj38u3RZzBdJ26PvfCfNFaTSTwTcSRHgG6y2gbBQJraC",
  "key21": "B8yZdA2MrSSNSifKAGxCZW7UJH6aKqq8A1NQ6U8RmNbecB5p8n4cjMne2RL6f1kgZY7Y7FttGFoDsfRFQKPQYZF",
  "key22": "4MZw7XGCxHw7fLzzQSXAy5cph2rg8oMPEBndDfE84kZET3h2YTm9kwzzKkdzqDaCSKo5LhVUX8wRNiDopEKMVvR7",
  "key23": "268N662pgN8Lu2HniVCGh89zWgtacqa4WbDL6o9v9yfRLmZqEjgJYw4o8A145YhdU6f3yjJwDpUGi81wH3UBXFRL",
  "key24": "2M6k9W4giFbo9ecQ6ae9DN1wW7zPkKipqWXuGzwRxT69hv8QzJKByDzELx9qxeD3WNNUHFmcznDCuZBsavtafg59",
  "key25": "3hQmc3pxGWCc7wj1xZkR1zCFJxcDFsQ1NHcDWQYqS27NJ2rVxvZDqHp7QevKMbiQjvzX5hvddbZzDoFgSSMCr6X",
  "key26": "4Sp4tRhtJWkgWsyiUM9s3CgSpPyYxyRyvHZNixHj18dwN7waLB3dECwxuJjb41pdY9sYCH2dYXCtkssszmqVRDnQ",
  "key27": "WSC27nYfz4jAKN3V6DhpsFRyuHSdvZYF121KseRwchpR98cyPo65iDrHUZvp1XnqBXw9ZA4mAc5BBxceiNwWuvp",
  "key28": "2GgaVrbc3rq4ihujvogPsD5hoTqc8mRsn2Kdd1Z75K7BQDmAyFf6DD5DqP3UF2DkZzMWLN2T3q7LD8xR3gXzQawF",
  "key29": "4YBqDUixNW22cdhVm9ak9wHcxHWJAkYMJS5hyKRdjhoarFasTPeBfk8Frq3FZQSmckro9zYs76smoBpUMPW5DHHG",
  "key30": "5hxRUJtYFgo1xNiMbADwsUoixv2Jj4vzt6CV5aPeKRpNSQVnJhVUgwNFr65cJTUCQAkrLLLoNKd6N24LQ4QHbvAn",
  "key31": "3muer2v9UdYJ19y7AvQPi2jcgjDcSLfyp8iL3kaJrg4YJWXxuMQuFJXE8D8sXqsz8XphTo2bceJLepmES8DZKeVa",
  "key32": "9u1CuEk1NiPHPk4k1UH1T9sUY8mDQg4FwwCmjMJ1tsTtfKaCmzcyhUDgBPzacS6Xe1zWS969yMjDyLkZzfvJg47",
  "key33": "4bEWHxP3tHB3R8oSMjWQUuW8nvxArRvvTCV5M3sXtGPN6qgBYeJ9xU85fxvmC1GAhm3i2cup7KbicX5j7hHCukv5",
  "key34": "35SWEpNg8bkLty4TTv65L2Acsjh7psi71QvNToVWQJEP8ucP8gZYuKp91AWRxhMTX11Agn11E24B9GKJZr44sL6A",
  "key35": "21V15PbQ3VUuso2zWEGptxQYMtqUJcA5VfaJpa9mNmMcndYCrjB398cEGtTJ2eQwosjX36Ezt6EKMWwJLke6Fcpy"
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
