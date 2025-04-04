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
    "3wPcZejhwDc7vLiD8ncRRua7Uvm2sTKPnfgkTfkmGYy9kxEWBM1ekgfHeXmpfTY7x8m4xH7FfKKE6zZg9syMGZXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ecr2UX2btTFjQDuhgnb7De2bkj5QXbKJsMsT8437VfDFnMQnmqN1NrTwjqh1ersyYJtzo9kiCpYgnJLGjdVSYn3",
  "key1": "55UWwnQTN2SFVNcfrLaq5fYmcopFqhdJxiTfMjnGQxAgUdCpberMG2owhqtRv85pzuhH7dvuwYKDavrGiRvrMpkH",
  "key2": "3U91h6peJJXuBkEnRNbwtsmVavCaUrojLGLKdsi6HsmR8QUKH7hrPeyoazEwXQtUAcRwicrT1mrfrLx8MUMLVE1K",
  "key3": "3XRB8u4uNtevDbaKZzhqzefb4t9N32kKZwNs2mFBkiRgucLDD7NsB1SbJ92qKF9wtywJogAJcnEXwTHht598ZhGD",
  "key4": "4Q7WcGbKxUJVfGdvriubzJ7huQmQ3eHwY6c5pCCibsUrQVut1dowo42kjUuUFdLK2UrAJ9TjZWWTy6jR9eKcrLE6",
  "key5": "3r597h9hEum8CED4tAttxgZmdNsSQ1XuukwwYGSZXv6ovMrfTJtMUuyjvsGpWuokE3DJzTW1WwCjXjSdxuH91Dmy",
  "key6": "5Z5TrpaUUc6ydHkzSk97GzgYArFdWHbNNjS7c37QABUgqHNKquvr6rYULMSGHjAQ9VA8NFs4jw86hSzKoRgzHPLp",
  "key7": "4Rqp2J8JDyqskPCadXhSm3HKKr1fN3whgwAPbBG3VFmq9avknnE5aL87tPAMT9vMTRqj4zJpqjRD2MM3x9nYiPhL",
  "key8": "5PLU3DYL6d19CicC4UGWyWsBHiS6ef6GSqErFjR7fyAVjVHWetgvLhZsrtNsZmcF4GST48qQsWpCr64idPLg5Cir",
  "key9": "2StT7vD9eQebjVg27BYMGjSPsuNECw1GykoJPVP2wZivakzdpWiHDV754Aru2HpCpCfnYqhmUxJZBxCru6ftEpFm",
  "key10": "2GE8rikASF7ZE4VRucfHv9LSuomJMoPCpgrnRpk9UBddb5wsR1wGKesfmo9Ugw3tnYnVXrtotzS8Avt8kXXjvA1p",
  "key11": "4t56VCwVQ1wJ8gXp6npjexJmVkv92hqFNp8Mypm5dHSDTRiC7FiCYm7yoVTmBeJdeHcb1LkpynJCdnm1tDJotsLr",
  "key12": "649SJCAKV18AnnkbvCLWEMQb7R57wgG1LAaQ6ZPmwThKSUt7zSqLSzuAqW8AH5xWc7DKDnZAgVwyi1MpoprWrxaj",
  "key13": "4Nwz2nNRoCpk1n5sc3Eq8CYmkaeMFzCQokyygkBn1WWWWwZCd7knvPT2W9f1r1WNFr1ZPbZeCpLJWPMs3khh8SiK",
  "key14": "31GzBbQEVv3BSAVFTieGnNExB3J9eU1uUGvMnzvNkbBJNjGS7rdTC1QkvPmr1RJNx5RNWaC3XFkgL3oJ3vuWjuAj",
  "key15": "5rWM7hc9g9V1DxZAYjpcvPGprb7kMEUQWNGEDrNfmHJGd5519ueqKoq923zQ5jLba92supUD3DUyQy6DWZSaHjDZ",
  "key16": "Ech1taDmBH9tHbECWZNK1wRtMgegafkgFmgjhb9Y4nWXMHGY63pQdcwnd2bVpKDrsSp1F1wwUoCDfxz4BbBYXrr",
  "key17": "5VW9fKbNWy31xCeBGkjjtYfQjnCDSYp5LKV6KFib911oFGv9DoQfiUHqpU4dspFiWFKPREo231F2zacU1Q3Z9c3g",
  "key18": "2ExRiko4QTG5a2sy9YvWKfBhYGNxxJeFU2gsSehG7eAP3LLaqfqReDSGvicqViyYSQmu2SppCQ5R9YeovHdZUSkx",
  "key19": "3c7WG4GEzvfmYDNNXV3B6aHYKE7mB6zvvHRZ5cDPnN5K8PwPUqAa3rHiFDVXuqW26L3xDSkVDbLai4e8GYoWVyJR",
  "key20": "q8ug9kfsNVqjBa7Hixc8YT4jWUR5iLPCdNcFDPGPstaf7akTpe9PN4fbosCR3uh1k1sjvyrvayJ8RAFneav94Ng",
  "key21": "2nNoBuAHitKLNfEUPaTCGvyJZZmj8JWkwigy8XxtcaGUM1Br225L1hbdSGvtr7e9631BQFKj6T6JxDzc6daZ6So9",
  "key22": "2H2jRmiMBUZJYcBwcDgtyzsbgQ3R9X8SCBDwenXv3qooLgU5GP47z9AmxPGEF3sVfVCjZ42ZCJWzNDd2gZtE6QAB",
  "key23": "2FdWDmKyUMaWfzTmszbTTqqUav2mA7jV48qEDpxoxfxuEASAcg1JDmUfdD3J4Rn7yLCaAdQn7unWYHKPizcqrXbz",
  "key24": "4WhbgmaJ1BcE88BwpWz6Bn4hukj8FVF12xAZCi29PwVmSYaLFNPXk4oMpUkSUVfBMkCVovPPKomsf1ygjwHcvV8a",
  "key25": "3TaDwxePgCeVD2RFPZyiERAvMXC2NdHvGh9hFMiw9cr4NAhXSKg966sUnh8T89fBS1uFPQmLh5oE3mgr6XiL177k",
  "key26": "xMZZx2KjMosj5rguSNse3odF8dTmpmKL7p14JZdh8ot11eVyZKNbkPWCU3gsMXkUVHCHaQwxRA195PLRPK39Z8i",
  "key27": "3CjQx3tECtvaWZ8BQJFfrjdsLWE3bCVbaqVJiMSr2iqHkeRGinEA6xaHSFt6VcJ8JmdzUNMKCEdJzzNwDDvveLhn",
  "key28": "2mX7aompkMtkJMxaswHph13HxhzrBSsGr97cQWiErVVuE3RnZ2YXCXo7dNRbRCL6pGbgfoRoLQAe6n5HyrnjDhFX",
  "key29": "3T7DBq5zNEWBgXL5ZuJdJCE4tmkZgP5GUFsqGibmxrdh1XdU1tv4VmrqCbXtmBwpWkZ18Xj2c1u9Gefgg6xtHGDR",
  "key30": "43kanNYN3vga1cCTzZ6YjRqQcMm1UzpJVDmxNPnMfUcJ7cknboueNbVVFx818P5rQy7dVRsRH5mefx15XKiv5nwT",
  "key31": "4avwpLf7U9iiaZKwie1kTfB6YtKDn2Cr5WynHFrTeQyfQZY7ra9KPytJYUcUkrhZv8WtNNFXveGw2B8zjK9Etdys",
  "key32": "45wWShHmKSD5hQJzevE3qvc6aYVtXApvvrWNjtFiy2Zb2jjXH9HUDYyJdMaHh7Pobij3T7qoyTH2semPr2zkCm6o",
  "key33": "t1wCuXdETHMfEpj7LihvgWhrdycRrHBxgKgmzptYs3w8AuLJvtUMhm6xSJgTNq5P7xHDjzzWofJvXGo94kcsGtr",
  "key34": "5EKn9CV5F7etSsXwP1wX332xYZtJbXNFjaX6sGaRKGBizbUKqx4Lb25Mqa2RKn7WbgkCCFqVLN7AQswLrJMGa4pr",
  "key35": "2nFZMy2XKVWEpnbisXenFdET5LwemUYZBG67A84PSqhfcsKGWWa615oUYzNLwbFbAkBm5SAN5F3cCF3zNgiDPsmB",
  "key36": "5mEmZzLvsG7r9sue96wQWwD985SHG4GfVrbrDKqnckCs8wecHVHN3uSkFWuUvFGvQmPPW7Yt2AuPtHJ1q8Bqs8o9",
  "key37": "61CcJW7WGA7a9GBuKCNNXSXDPNAUQNr6rmxcU1YXEmX312bgwvmRHyQVbMJXYrE7qkT7uDUJNdoaC4FEFDVHdDpi",
  "key38": "2U5MgtbYJNEeX9BRK1A3LfewNQJ4nGCYPoU18d7bWqt3NeFZEWKKAuqnvJ2ayLaui7VBAPX9XYLrPNHTBPxTCgKS",
  "key39": "5oEmFL3hmN187xoyA2zrwavdp98kz6UpoXtBzFPnrxMz1AEb8o5mxgAWSKgoEDa2e9beNNRKYxBkEYGL4sAxMFVh"
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
