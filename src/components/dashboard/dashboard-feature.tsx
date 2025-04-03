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
    "bLdwcQ2ChZRV7VWoPQju5AMXyY1QtWZJMHUDzSefWCzoQwjdBecmXWCJJY1ULTiM72UKB5LKrdakM3Q3GNy3fkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cq3vFrWeu1kPvZ81QXMCAEbgXTQpLn8BLGeNr1FZhmCv9LBBnoP3dBctnHFuuXmDr6CNLcsXqeFpXRsB5bA7yhj",
  "key1": "241zCiixVw9mDDVFx99adrqRwxErkHStu9jA6UUfRtKudWLFGjS18SbaVtpnXU9Cs84dB2GEmPnT9mbrsND5Ye5V",
  "key2": "wbUqsoHPuHnHqhDuwnTUqypzkjurDwvx7t8rTPJgR9gUu9tiabSQFhJH6Z7qaGndkLTFDFgJzD5LtRsEkQxrApm",
  "key3": "2BmP7Szoz7AfAcvWxAz1bjEE35iYKEnekeEV6Zwnk8pez4yajGjbkrGrHcgJcUDYWmf4ANuppwPmPLiMbgeXxgay",
  "key4": "3GamVi5Jv7oQgTq3UFU3awVLvcy6aSo6FNo6fy9ch1rCjC3vULq4LzLGR7wbawfnUgwnBjPp7a6tmgwKbbFbd6qL",
  "key5": "45Zsr7R8uSnDB99o8Q2LbEryf2akc2j8BG8TX3mTp8fdBeVPHAjAHhoGuoq3JbuFt3Uj3Jok1m45djm9FYvzCejT",
  "key6": "5eE4WSzbTFUMh55TUw5wB7BAxCLAbFcc2HfP5TMxVVDG4TyKKVwFqwjZa5qzXE16781Vbd23pqn15FsJQ9hkgohk",
  "key7": "62neauRpGDJReG52STiR7E8PYkjPsBHwr3tJoYY77o29QBt9Tyx5eEWg4x29tg68RZ8v3s2yBcwFWzg28usGc7dN",
  "key8": "3PnV4CMtj8b49gj4KJDJoRduxLNDM2TMf6mCvZkqCVkvpAWFFPhjCy5vrPnJbEFpsEGQK9A2LkqkuhYhvH7K8Dfu",
  "key9": "kGrG7u9o1jvfqtuQ4TduVNQQGAwLaKP2sUepUkGHad66uGgd36owQcKFP37QKqC7pQcGTP2xM4nYaRpbx45oje8",
  "key10": "2PMayRTpQjWEV3GSoiUteuzBW7QmSqDSf6yr2WYaAyeQokHuKfV5B6CFXXMV8oxDCjNRd5iTHZmPYjQ2PGVRPjcF",
  "key11": "MmqeP5bMj2YRY82z1rrWNQkJKjMtyKZFxHkXmDKqFXcN7m4nUMai1cH7Ud6ffSVRiBT7f24GXfmtqbpVwNBhHCp",
  "key12": "2s1ZwfX2PPEqkG3LHU1hN9i4ztZgrBdQc2wRK3mduz44meAsJx78Xg9irnYtiXUE35gEmJmrqqsMp9Eiepj8a937",
  "key13": "5yEA8gpywMzZH24GhxmdC1WGbd3t48n8EtK5kjZ9v6FZpJ4SiMSuZ5XsKFNHmCX1JqAyYGvKrXBezos7sMLevCZc",
  "key14": "3JZhPyf7MhpJp7FEoqUp4X5wdWP5XjNqDrzicGT5hpD7SEbf4QVpL2AyCJmkjE5cgo87vrLcpQPecZ2qKoLuJmhS",
  "key15": "27iR6gUt5dcUPWoVCUuh6f8sR1vPWNiLXNLrBbHxocxCZBuZ1duRUaB4mFVGWn2pxkkTFu1KuEHzQrEvwGifbwCf",
  "key16": "3T7w1WVmzABkrUQcwFBb6Lxo8jd7vSuCwWJJP6QwHA2J2xNptHJW3aVUgTDQb7SpVCa3oxhn9wgYVJga4n4Wm1o",
  "key17": "vx2J4itpWhFp8cr1EJrzbopWXDjcMEKh7x7KtDpppNpgR8k7GqvUmkWkZQRsdkFWiwEuGkL3odbx6BSBVyQojhv",
  "key18": "31Nhbm9Cj8SA4FofBmyfmddEMLrxwb6Uzf5TYUo26nhyjPEfVaWBAxAX4p3uib6QfTE8npeo7zHjJ1zq7R3gxM5i",
  "key19": "4UBTAcrtdDUdCbLkmft3Xez9LLSYwYhWsq3zcsMAJqZddBazV74d9UFN7kKvq7mTvVUcCeDDwhZrydtAHev8MvJ6",
  "key20": "2E1yaqrKvBJ5kpsN3G7qgVWMqHsxXrB34kXvmnvBXZVHkWSGduD4CkXV6KiTgenxAaX3A26Qae7NwFJiMUZe62Wb",
  "key21": "62ZdkEEiyXaYwaPqmBne3o42BWnikKwzCVZszgahCzoUCGQjLDuWitzH2xFtP4XY3KYGdPuJ7k4GzbajhCGavr2n",
  "key22": "3bPJHG1oZanfirP5Kn9tAumnPFqTnUanixkTkTdbbKWx9muQ1CJhLYqDXw3G8au3CorqCahAnawvBFw3eowZmVvi",
  "key23": "5mZWj3F9qKsF8TroD9Hiop5NAxfpWXU9gRWge2fvG9oL66yf4iBzPwNuYQqjHM5mw7SKjyJdVq5MvumSxfLpaaRG",
  "key24": "WodyCHoDBj4dD2tyCAwnx1AiYUJce96DnaeE4yqPCXgA9jZPfDNKdCLqzAM13V9Eb5mUAVAxfSfeNjEVf36NEqh",
  "key25": "2uTQCuo6tsSNWUNZ3ucS72ZFoKphZnMgbV364tHB4xz9TFprNbP9WLyeo6ADJZgTtaVnNd2SgnPqwhtSwHobT82i",
  "key26": "2ZGLqKEsG65m96PmwQBejJjXDgnW1Swt8rdn9tRee4Ee55CCreJux7WDWbQqHx37m1bySw7oij3dcmr7GaLBWskM",
  "key27": "5VTvVGgjYGhFbcVMXPQgj2yoUDAkoxPZii514C1Ju3hcTKWHX5K11k1YeB8CoUj6p8nKr1FzhgAmyhRqTNgQ9HMi",
  "key28": "3J7SzzyDuHDL5bvSMkc18FR6uVft27HPosnMwPcnjpYavPQNxTGVTNRPg3SaKncdaJAHeW1EdyziRecTFR9dMrCW",
  "key29": "4Qe13TgM79DMAKdfB3Vz6gC97XQUPSdtq4LnXARBKBRZreatt7MGYZGJaUBWchvr4WZ3D7XZdf119gUrRVFvipG6",
  "key30": "2GxSuKPscirhNBwHwY98BMEhgAGPtf7Y9D9xmrLHeg8v6UE9wh4zn89Vk5pEE7nCyGEAiAcQBwYAU92JEdnyuRTa",
  "key31": "34g8Q2XgJgCXbtyNE6w1Abe7zfWPu1sASE8oJ6eAnNhTsUpSyDNuqtyX9eKWAE9Z925848Brdb7gWvCVrZJbmZSw",
  "key32": "2S1toTEJHL69xNVTqAzMjf6LBwGx2PdNLS5MJmM7Zngmt7DHyuD9uNbK54KYpMkSAC5pxxJY9VAUTdgLamuihB4b",
  "key33": "53RqECZNdWuypBsXQ8tB4Zh5SZaJFZn5wDgYTMfrNX9Gj8foV6bvQzd7NKDd1c2JmM9WQ5RtGZ46UKNiuVy9J7fd"
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
