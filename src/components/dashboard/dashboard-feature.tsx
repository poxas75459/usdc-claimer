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
    "2jP8iz9sea8HjNcJrR2pGEQRBg2VFbY9nNLxyACmZmBNR132rPqkjgfUDvKXXNEFrfAWZhjYjfLSNoKiV7uQNsqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mCYgpz8gVTDtiCXCWZ96d9xfHhv926uqL8yAXtaAKnckuYvBTs5nrVTn7UmT7zXnGwkfLn3CiDrifA4MxDKNd1v",
  "key1": "29WUBmEEPetxSNAAGdy9GCbLCLpN99rojd2wwGajD3yrobjFF5PKwTeKSo43Ac7E5R6ezGirTXt95oohtHz11ZNp",
  "key2": "3kCKAXEoc3W4nuY9uU73iEtfZgVhgWuRC1rBnwzFtGekng8WMkW4Lt2Dcmfpq31ejDA37Mwx8nsyu74tqY63WkZj",
  "key3": "3SpLRi7hokNq6N2BHCC5XM7wgkZVGhaCcuGV2B9Yczhqk1cK4WV2xyoSRkZdNJPtNLrTa7Ju5g8XffjxVyST982U",
  "key4": "57zuVrrJPmoj9DscCX26Z8bHu9aH7qLpg44FKgAPrjXic8bJaXdpBrUWR14JVdMa5y46XdYR51BswRsw2M9VEfvq",
  "key5": "3kDFLzC6cPmBPwggKLHpWYJgBVDCi4u2ov46s8qhqZuZ742xx653DYuj6UpVSVT9w4re9Zvvmeba7b6rFGFZST2W",
  "key6": "pcbz24fZY7gRDEGwxC7YfLYJLPyecWRqCDSnV4goSGZtniZaDHLMMoYdQ6aLYyMYh2Bf37LXFnkKH3FDH5ANn7y",
  "key7": "5tV1QV1Vo3Mj3RpVH11n1HRRZpb8t1iTTcuJDDeUFStwifvKoRsGeSCLykM2HCFjo2eipytJTN8t5p2dnFxYTH5D",
  "key8": "ZdaifkXDqy4SbXVQrH2ZJEWbw2BWG67JC94z1vZxw7YdWAkNQnyop1eA5EuuoUkqaarEUKs1k3tFWeMjJx1QueZ",
  "key9": "5pV9cAXfQhm1erxdFzf93LS7h7s9tpkAgwAmpN2mhonszbAVLXzurR1fKpXA3nAbFKYDWiy5W6fDgxFTMSF7Ntq1",
  "key10": "51sm51YDC8y8oZPMAKmbnMbuUuYZUcMnDBgNvafyushh2P84q8n7Se6Ct2chW26D1vnDmWsGdgadnZNqUxNaTcxS",
  "key11": "48XmR6hC5uY79zzForY5BNDQCyk39R3xNBbPAQ59bG629K7AFqxrvKih2WNpt2XVyFpfe2y2nMMY5WMj3Zxg2rCs",
  "key12": "3yf7qLUuNvAPmt8BLEwprwBhNdqr5BG4fCJEe6eWu5aPNpmHrBLAHux5YE4KTj5P8zn9qAbuTE9sRW2M57PEK2Gy",
  "key13": "4BDvHa9T4baqFN5mQuqVGXsLNJp4HnMJNMnD9oips3xGms39aWERu7pkTFXtVgSzwG7QZdTLvAqjm6nxgc8zyucd",
  "key14": "2PeCFtHS7VXfL4pgWih8QMForaRBcEwrC3DWhe64UBWrMPT537cQnqJzUJNnox7aCQjtuw6ZtXondNGdqbqZuzgJ",
  "key15": "4V1gSP1YUFzhYCbaCK7hii6GUiuSYFHqCMKe2FoUd3ie3vig1EuLbKTK6s2Eq649VfMswZcEhvBWZqpdHjM5w6Ai",
  "key16": "3ptNNjG8DfRMsaTr4wbHPN2r1sSyJtLRZFfTCWow8iyntXEC3h4bPSPqjkEAMLqEaA4Mj1CYfoBy6SVKSyx78Gk9",
  "key17": "5bzFipJYX7DeQjpLRdFXMWK4xFVf7hThx4yYMZxGKCstH7YFh5NHWVuwfCtqUHLctXUMroE5oUAmEKThy3qLNenp",
  "key18": "2TV63Jdv3iXrSWbFm2sba68h8bcU5h65Ei7ouiapSAzcWBE7FvU6UW3FbTzmY3GtGrEjYJXB1sJLGCZiCkVuTtUn",
  "key19": "56NwQHBcpg5w3aCX5CjzonFXaW8V2uWG3763AeNKJzJnGH4gmfYtLFZte1VFCjmsCec7LZWNqdc8GVj8sysB1YLz",
  "key20": "4LHJcKa82UVeFHirwnnZaohws3sLvXReREbGWZqqeciGWF3PnuXQzDZLys33XWMjdmY5b6qJQBsfuqBfyKR6AQTN",
  "key21": "2GJ37wSpC6LbWczziWZcjGTnshxe6rpDSfvtY7vyF6jwPke9nTRhoqUYQVwn5ETDjSQeXaiKgvYUjCnSYwM4d9QZ",
  "key22": "5mUa3hMuwyxpgPA5pwyxT6qjzi4TDexH9YipnGcCYxUvjwNxk6SA4xdBHDSv3obMUo8NSYAiHJgyhMKKRsMGak8m",
  "key23": "4Gzpqz8xeNqfm65f2cz6wSTZkxC92qahvb4ffx4Hfpj6csiYnj4HkUEt786FmPuBUBktunXarJg47YseQLr9FMoD",
  "key24": "43UHL5tVQKF4hUAxE8onfqXJQwtUpBuTn4TJDLqmWGiYMomajpqmj7SvWUc8YwWT6ZPS3JkpszNyUGMFNb9hPjTo",
  "key25": "2dnsRVQQ24zPos1nibdKnpKvEYuDPTGcT9DBZp4vz1P7wi4fGGbfJJJekBZKoes8a8jETM6wNkikEX7ARgoNUUja",
  "key26": "2Y3uTB8HRP66Z49zhW5xpgkgz1K1RToTN24Ge9pqU4LFkRjvQouk8SBizSBnFxQmDUj4yHNsQQq1VF3dBY1MYpZj",
  "key27": "5SsDg5LS7xjfKvjgUuuDqKsaaDihYj6sAHxAfFQeChSGVURRcymp4eyvwxEEoqoxhJyojLnhrXvEzU4TSxgn3wPv",
  "key28": "5LixDw3chfT2mFrmGpPRyH5JCKA2WQJUpuqdb37MTAQbx1DbZeb3gcVXBg4xYYeNdgzPYBLVHLoqzHGuEWihoy5M",
  "key29": "5KNrMhU3nYafr9LCPs1Yymzea2oyjvrmF9cKYebR6reHPYhNQ7QorGMrFSd9czqf1r1aeRzKBfLWgqfkv8ZZBCp5",
  "key30": "4XevsqzDT3WBsRij6PMyNtxKYgLLhSva7aYhvKKBGejVuQ7Bs2r5ndvhit5FEnThKGUYZ2DmFpnWd8ktYP5b2Tnp",
  "key31": "4KhqXe2ad8kfhW9iB5VMjn5ZTffHw6fHc4zpTUKQDzfoYeembhCZ7VBFHGqEGUWXsM52uZ6dbNXZtLyHym5zyVns",
  "key32": "HmJnD9N4buCoviCR6sSfKaqNtvvz63nAfCFX5cq3X7nXmRZY5FasZkKJ6k56KV8Kre8tc2VJ1FEsF1buZ3t1oMz",
  "key33": "3NnujvjPJFrva5MPbz1LhiNqoBvWSJ4bdmUMoWFsZgNobSTrJ5yxz3qDsG71G2fGUa5g16KYEGVgp25ZHnvsY3Qj",
  "key34": "5A5ZaEKn4p4ic9s6Y8JK3q8VYk1R7RGoiBqmBvKE5YLLkM8r4JbuATRDGcGQ51muSGp9PrCH9su1afU8yesaedfp",
  "key35": "3zUXbw5DqMyRH7kXbPorNoySQ4732XoQGmLzo3DAXHhEt41JEmDWCg9J2VdFbzNuHo3xLyobFdTYPTDS39vgdnqT",
  "key36": "2b6Cx58kiuTtfihyuFmYqr2hJvrFEQwMdYoRdB6bLw31JnhfFz39BL2R4vDeR1WB1e1va6cnjmh6udZa1uh5Wgjv",
  "key37": "5cG4uTGPixPxmPgG5pqryDMSEyJRQ4y5ReRjmNNU1t4PwaFvLrvtw6SqETXtCnrw3cKH5oj1Wk4RpyUWYxD26GyZ",
  "key38": "4ejd8bgtkDzRnGeRW5gLoN1pzW2Hqqc2nRBtLbgCzgtv4S5E9M9jvKTFNjzqQmQ19DcX96bHWF4ikMHVHkUHJ2Mz",
  "key39": "3wz6sDCfiuKScKRQNo3GCLFyqWMVNUC5Ksg3AoLtngmH2YCxkTq5SU7hSkcRNGsJjLodj6Yx6MczSSyJhtb81MHM",
  "key40": "3QbbaYH5RVAivzLP9u7PBhbJVsLqaUSBvL4QLEg5w72LfAZpvHe9FXpm92J7ovVkuWhuoSVvh2hDPdVZvAVXX5EZ",
  "key41": "5AEBchVVoA6K8rVPDMkcu2j6mfK97LWhNKg4BgTrJikDAzH7b2r9TQwuufswqi4fejfkjZxjecxWvrqRaRnemGX6",
  "key42": "4wnF7SBQrTat3DmcyoVm2FXToPAHW1JVHJbUvn3rdyM376ugb7HDfVLRfSmDjKQrE4and5aawAaPKg2JrttGZSiK",
  "key43": "3YwrnKNXxhR6FXhurRxsCCg7FPdyw9a2CrpnixRQyURHH8NaodfoZBJbwjoU9x3Eioztaz2RfZSvfzCS5Xn1WgGS",
  "key44": "2SM5Wnd2QDXsWCk2gmLvEy8HSdF7X9SCSrJPesdWfuekT78u11YnMqX7CBS2xq9Vqd6zhS8mYyuuAzayXv3ZZmJq"
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
