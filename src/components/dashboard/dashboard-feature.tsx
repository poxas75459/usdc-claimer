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
    "5PtjtFJjpW7BjDQc4bP165wxRnPoLuUEVv9fR7w5c81uJFgZ2NXN4JtgvkKDGX8qT6UAq3N6k3gEiPfUGhjoFkWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MAi9ekorgRpY5nNbsHpGuj9C3zmD5PGexKEr5nCz5Ub87VND9GKRtgRbZAaNe4FLdhuhdCH36CStCSG5n45qxLg",
  "key1": "WbKWYvirf3sqKzeM2kPzcMkyzFrHEZrByb96ShZm5b8GZ6ZDRw7mYtNTKSztmTdsUKZr82meDbGAnZg8ZVXDbdr",
  "key2": "5BvVPLuoSX8D3n2dBSLKNcRNigVrheSMRDHQxn1pzZhBAauGLbmFFDh1xPKWMhWFVD19TARNPdRBAA74ZmMmZoDf",
  "key3": "2fTdeL4zBxiNrfYKtzhnUZQUcRvrJ87shUbaXvNbnoHu1hVr7utkdbXsHaWmxDi585UXjpFCfsDcdvm7RCa9xV3c",
  "key4": "3f4feCrMniQrGMr78MGses9VRXJD5h9JJKeim6G3dXpbpnTaw3nk6jWUcVguKJTmdcWxrGE6W4X7Qx75GjWAN77P",
  "key5": "5MyQNLEpwSWdd6weJGaqmJwsNmaQnGaTKqLvEzXrYEqAcEQiWdUDMuTPvFEzjtDzEKkTqJBHfphsU7A15xTeKoze",
  "key6": "2vP7cCyed6Qw47abKbfxATijFR4ZAuF1s8kZgihq3ge7kaCHn1hS1xUDofv6aPoaVHbyifJNqfTwsvmnCzBVca99",
  "key7": "2vCXNoCyUoL3mhA4j2nn2KknNkb7kWEs612ymqvbyTKKjtgwAdAoLzhRrw9u6JbLuGHpAbm8rGcD9JneuL8PxvSW",
  "key8": "4bgDTUwy5Lubirx571KLYyjbiGbkgugKQ4GqhUy7CfqB882XahTW2JYasjngQFJ63hUX3h8sYWgcRkPeJshcFCAL",
  "key9": "2BTQ7r8GT46648kLf6aYJmQJQzuz4yjbDTSd1jMHR3ATxUyYdK8N1UrJnKN2iCF5RQPi6Y9pMEwwYyYsGRNFmUDE",
  "key10": "5Z4pYUTLy8EufF9VLVJPd1xvxCWfmRiSmw2HbPR2WHwsCbsdpJLE4gm2vPVKsJ4xEKKpyuYA4wsv2ZNriDBnKhaE",
  "key11": "3nFPAejhvq6sQD6QDk19DLBb3iTtG37qeQ67WGwjgV58d8QiFF5RJ5YoiBsrjAsijPDNsFQ7U4iWANWbjxTvpPDz",
  "key12": "3X7KxZQQbvDQRy2zFKBNpBQszbQ61ZPEV5yga2fcTS6H76kjDpfkcJ1F4HqkT2fSpKdYtzjwfoSctSgY9mH8nLvU",
  "key13": "2o5tw45yJmYw7yL9J89hGJLped2HC9rJFq1TD3f9euN3rUj23nzTHgpNE8qcKvj6reJ9Um978WZ7ktbHe1izwKtr",
  "key14": "4CCSznJKuCy5pa9cfA3GQYbTxqPB37r33Ja2HdCvYdqcSWs6PdGLUSi2L661AbZEVx4F1AgPXrVhSjs141Ztfzdh",
  "key15": "4nKxJMVpPVbuhSg3ZxqU9R1DZMQ9Z4wCMm9T5NBcwrSXgep3BEfgQDkbjXftHk4zhnWxN3WwuYK8FePi1FeoVeHr",
  "key16": "5fkNowf7uaCATF1evDSH9WYukQ53H7YUiXAgWVHD7CDE1UWeQEAvERCiZzaFdFBkLHusJEcFM1wSqSkf7EvNSGW",
  "key17": "2NFSBVRxi59CpqZqce54QwrbPrupyHE1a8NNedPd7Gvf7p6HtBJcenJwdVFdm7AzA4YZMAQT1VumuaLpojvJUQxE",
  "key18": "c3YinN59Yk3o1cKFzHNcJpPkQSv4gcg3T1h6qc5QFRqGiLvaDq4aTJmsvV5Wh82GYumQY21jXYCCcN2BU3TAM5o",
  "key19": "BTogzr2S6iDQPjqSJP6gbC9AJzf7o7UUrkrReQvEnEE4NkEzsehWLF9umUafkP9uFpZGXP5kyw1VKzx64DPrisJ",
  "key20": "65VACe19Rp59nuHTv9GA5snGXqRGVParqHEatRkiX5rVXuna3px9YwxeLXpUfkgpvnmFwoCxSMzmpF5Xnapc4D4v",
  "key21": "5wBkkStj5i6szKLnE6NvLWqE5hAGKdVChiKihHmEfMooXwfxCReihdGTJe5XWuFtfZikk4srVBusXRnChcnF2zZ5",
  "key22": "2AtBkV7Ajzee9QjpeKBQxHRCEiNFJ51WL3dwZWU1roRtDW92PswK7vD5NzBv87BDj5rsGq1UjABAhFF5ubKQpcUj",
  "key23": "qYLiJj9SqJZg5JbxpwmMJRhc7uad9CvfWbdEJbT9cMoWBrTLkuADmPv1VbUYpEoqC73HpJireoAdUWjxbe7DPpn",
  "key24": "5vd1J2zNoQDYyYgjSN4Xoci6kKFa8887wLke5rKXHxfUdHn7ywWWqHFmag6dfExbuQMoXYfjenjmjVMHfL95YqSc",
  "key25": "j2HEssmsJNJVnkbB8ZCoew5SbiS1kuGhJoPB8H5yi2EbmLoX4KAS2Rra7FYBQrkCtmcmaYoAUbtBKgzYqUEifCu",
  "key26": "3wNuHi9qQtrSBut8Lz9wvApQVPVzt2Je8x3atoGsrTTqk9CPiGoaqJuc8LSbdKjZfB4S9Cxgiiv2b9w6fNvyzsEf",
  "key27": "54wXHZK53QdkEBQmCrShdGQFk6PhuvVB2KqLx4sQWbSiVBTH3VocaYRYQUScaACcXoab7Y3XtaPakzoARQ8eCicm",
  "key28": "4KcRNuctHEtM7C7MSLrCVV2YMAsucBEKXQPS4cnWdgezz9rCcgM94XkKmP4EwDaZLx4jWDVq7bc9EaRJX1BxuAFJ",
  "key29": "3ZuW4Uua2TnnQjjVq6QJGX8qUaMuLJuiEHZCze9NFHua8gT7DMdX4i64LYrJ5SvxUigmcRBtJRvv4HtunjjQDWdj",
  "key30": "5mXbMAWaHHgL8qy1LKC7b5Wo3bymVHv3zfuePhuJwb8g6rf6zhe1dsCj6fv3yebd1MKsx5db5geidkvxzvdJm19g",
  "key31": "5LjoSB6D43aVh7G8GLx96UKLLk1sgcLz2ecjf3bTbxn8YVhme2kBFRtR7udDjFzoJ8xikqGvAbr1gSnsac7W66F6",
  "key32": "4vd9BS9Cszf87p5f9DbknGdH1LPDkvCRSCSaYVLNLUWcgkiBRjDBS7kcW66thEvSXWL46AbQkfojwxD1mnP4sJvL",
  "key33": "5nRaRygBuoviC5Z3bNXqvvfNw3z5TbBAh3crGhsaJmWMU9sZvdJDTTyDm3ffvh2kTufS7d64P3K7Wmg2s9ZDcW4L",
  "key34": "4PDTgwbXtN6eHBtghfrPdcAJAWaQXNDDhd55gCqvRDAejVQKms68V3s7nm33NS9de9iiWdmuJvoFSi1izVqREEL3"
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
