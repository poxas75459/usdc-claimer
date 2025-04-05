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
    "2ecp1H5pUQc578h8Ro6TCa4ydYQEE3jfhFC3C8t8CNHHjwZhcxMRoKnyzoepMLsLU5cJs9Lp2ELraQ1wHzKHznXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66eEhZTRwMHPFNDEKmGLErLr6U2HjoFBctwLwVEw4ixZSrDKyDKBfCKUAJNuFPjmqCY2DuqKh2udZ5HV5MWNx2RU",
  "key1": "2J8GMo6j9kiZcQiq6b6H4Kgw6Zh4k7BfpM1JrUaivUA4zu8sjuD8jgb1CgeKRaKer1zB8nAiCjQzExb5YVZ4ZKgr",
  "key2": "59Y53yhmaxr5xnZjru4HtKZbtY7LoP99aeUKCym8GVA2V9uCtFcXpjJPBEvSDYWUUN5ETeL3RRw82PoyreXjKRNx",
  "key3": "5CFPRxgAYUArd8qLT8ZMNi4ZaMSaMXgnBrotp9cjfhqeZ4ExcE7JzhBxuhfaRggs8hELiPwhwpegjPqiqHecsndh",
  "key4": "2MoTkuyLLRXV7QuH6ew4yG52ppLeAx6xg4mnobd2iDmVreZW6BLf1NrbFAYLQX1ocxvserYDiawUfsdFgPRZ9kTC",
  "key5": "4Cq4gyZuN1rAqR9Z2CoE5jqJAkJ1fNLH32HKEvCuMw34ThoqHFjk2K8bCvTT7Z4ccnV8tAgk5wKG5DC7wyn4eK6d",
  "key6": "3VETZ1Mkx5kWFJTq7ipngyHkpdyXkXWbvrMjnBbtLVqhvbdqkdmshHGP4wyo87QLfx2Vagq2ruJNvkUtXWEvqZmL",
  "key7": "2Ue14hqeMnKV8w5YkXz5WMeDiauYESwSBBZnnBHE9VDW4AdXddQoji3KGn4LqmLPP8L5fouQKDmfJgEqAsPCgjD9",
  "key8": "3efczzVZfoXCw4JTojhkPzfob5wVGrdS5Q37MZzbWv1x37kVxzxuRtqS1igg3HcDXrB3cAXU1s1MGUGnHwtw3HP3",
  "key9": "2W3gBmoVwJyTPBJfBnSWJF1YgFcSw7nx8gtWpyp1RAZfgWzdoKeJUbn2b4mDVyaDxkyj8jrFNbh6QNFjMKV2ueW6",
  "key10": "2L5tZ4pG7YrsQUurEc7PSWd7qcgEYPZGJb5Br2RYFPUEbVBpdik1G4rLdp3ZT6F5SsAy2zKtJUaJ2wg73zfUAB3S",
  "key11": "5EvXgx8u9h7EeimKZceg6ZbGdVhHRD1gmKsAQPmJXGpMjhkhm1skyNSrPMimHEnuQtVuJTTkkgMo9TjMy9hjJuEH",
  "key12": "CucgV7MBKqqgwRo4JzpNQfdHJ8Mfi3z7Coy8dHUf7Xtq13R9Ep9NfpY9jCf4aLCwCm2u8zW1MfmHwoW4NiCr2WT",
  "key13": "BHyQovQHFYPSvBGm8bWPur2WyQmnNgNnijW6kj4tCxpwb43a8n33eiwL4WbxRp97NsZVJ4aK8RVTWpaZ6zzA8V3",
  "key14": "3stB4B2The9EkPdNLXQesuZWzedZ7hShmUYmVQCe2R1qj5sg2KUMmDhPijng3sBhaEPaUQyPUvU5D5Tv2QaTxzhi",
  "key15": "5UMFT53AFhPp2ENTBK5zxnDSyNQLvTV61FcnpVtEYiEMAmYDRh2fXnhprS3iYZew2d4jW73ABrfQEG7JQrXoNAzs",
  "key16": "4uZcgVLnbM49SfsyopWWCT8JoKcHAqHaphns68w6KmPW9qKZhovag5FyxiJ8mpwHNG4Z6zgzyViytF4MhMLGBP5o",
  "key17": "5Rrdpa6BMYzFnQ74UDDvcVifYEZ5WfQPAQgXbx2ZBcPDy5rQ4iGTDbikVKXzw3nBHsDMtDv4UpoVLdmLePBmvfMh",
  "key18": "2UmsQ9HjdXRFxaBYfukDyjoAgbgU7u4rALWm94fkjY3Jtcnjs2v5eQvJvhcGC8KA8mEuNZdhTCFtjd1gZZM3S2yR",
  "key19": "4AAtdQvbLtYwNd6pNhwaTCsnnez9V8N1UbaGteBs434GnXxu4cxKLU8w96ctCHDrjbRHLzEAL9L3qmhGeMPt8LPZ",
  "key20": "vaXrqXJZcxRSbekuagt13g1KwQjQc574B8sa9RFY9v1E7p3i6q8rdFuBd8L98Jjy3QV9V2xmVAoJG2VRrn5JM9T",
  "key21": "2Y864H7HTm5BucEVosBg2EoRSwv2g3bA3GWg2KhHbVvy3pLqXezBD48FpFgEqRj8G2w6DLFNWAx32eHk8TX9muZt",
  "key22": "5briDFgDtqa6PzxH15y46sdfz3nY9UGnt1TX7cfoozxbK6rcQjJCxxN35oGLxPZfPpHyrqc6iBnL2F5UtPJVHabi",
  "key23": "2zJnHf1nSxzPwrTFJoCigVaurAz3851dF4zNTHskwrBnahNGX7B69B4GqfLCFsAYrL2zxYaVnnesBXnyuNt4hhNZ",
  "key24": "4qtYbi4QgGvdNe9Q1FRiqrvYP8BkKttyYdAD3ELgMGiTcBtLewjSVitFBMVGYzBWXR9VmEGDsQweioSoGTiYoqRC",
  "key25": "r2CYJ8Vv4DfnYBTKdjapmYHkkQDfR2DdMPdPa8HtfJZ7jUrbwTpR4HRjurfCDLvHtzGa1hHzj7yQiZJEi4BBvFv",
  "key26": "2QRnFQSm6LczmmVLyRi1igoijjNwkmz4macqPPHGcDvFNXu6i2xpKhDtfu57NMPmqPyXbaxhzvchoWVBG7ZzA8dr",
  "key27": "5RvS2Bi4CQwfD1mcCM9z1UmdxRuzRM9QccvETpXHpbkaYuoq5RjN1DQ72HxnXQy57tdhxsGyi2rKG93WePTW5rWP",
  "key28": "4hRP9yNdjZnBFfPaxVVKajS8PCn8gP78Q3DgeWZnSvYePHamCHGXMXWGdo5DmHytVd7EYzUqzmcWhTvpzmG3Yavo",
  "key29": "4t5gNWGP3ebaQ6bgYGdExAJBMbbzXEz7br8FpJi8inrZAQtKyALaYCCdcDFx15iQFdRrHd351uJiAw4bexebtP1R",
  "key30": "4brUyUnsyZGVbgez3AM7BCPgt9pBGuRAE9H9nFZZX6fw3Yh1xDDaNxUMnkswsVaTuagp8aPyK7rme7zH74j3vuiw",
  "key31": "24PdBNugsyGyBRVe1TGryg1eNb5REetWLpktBaiqZ1ijnxJJ8Be43MzBJZTZiXRKciKEp4EAWbZ5ruv4MJZro3CV",
  "key32": "4JkMCXkn7P4Pj1QNRFkUWVKeafpjrejh2Ag24CKDagiTRojPHJuofpSjHnrJxgkr9tdaXLsEhT7MKv42ejWPE8we",
  "key33": "55uKYwqBenbPAe2hFGuBqjtPZG8D94MkEqeLKbu1DYuBwgwuMkq8nk3gJSB6FUXW1Jqr5UEyTRnJCf3LqY27v9yd",
  "key34": "3DyETUVqkgVY9w9GBNNQZoXzS6vZ28b7dYrdz6xnDCgnx7vc7jGBLBbv4nLeiS72sC3MHG1PeY8qLGnBX7dCj2TD",
  "key35": "2knUVg1H8Dm1epx2DrhFmMTZrwSU1E38TgYCp2pR5nXsUuM4KKp4toyebZL9m6n23k2M7RwDsFUSHwFzjehUtRNs",
  "key36": "48TrMjpHRVfDCS2Ry9g5t2GV1hjoBip4g9QRYBwSwZrNpvtrLjadgs2pNuDrrcbNyV5YRJD5FDsWqY3vqLPumMxo",
  "key37": "3cdPoiJJ1yScvtSBTfggaS3zxFPeT9kLuP8DeqKHfWBsD9ovNvT9LxbH81PmjuDQPykB8EMrFC7ucV7CbKtndsvg",
  "key38": "2ZSU142Dh2WoNPAvNjEKZqQWEP7Sx4QpRz5tfyM6ZcwR6CbQsQ55BdWaq8jCMG3RnK3GXTgoFjHyxfUnADioSvmL",
  "key39": "4bACp7HGKoq5uKaEfZP3S4xhcCRYvZqhKgJAYHqvUCPCbRn5ZFu2vTDp5DRcSuFvvVM2vXukZtFaNSj8NeA1qxeu",
  "key40": "2fRvLcfEsCrFUUGegd5yNeWLxyjshrJXFoJF8CXHLy67L5Uw1t3JwWTNepcE9q4mEKRXNQNifT3eJMv2va7tewxT",
  "key41": "5MPTbrMKgD6C76V9NB9XZAy15Uk9vKj54FtZdGf99ZEeaLuiJBHhT6YCRPGWxeken3dR2UDN73b9DJB4mWkHWzZ6",
  "key42": "5C8KEdyN2CaEaypMi5w7FsuL65fX5fThiTgEe4dMW8pkMVHkaofEvH1uNbYYAxRa8B5bmCSjJbvjMy2XMP45bTc",
  "key43": "5Q4eWixuqaCXp8BT7JaTpkM84uKtKhJPBKDoViqPyPs8h1TG7GhkCTXMngHD4ZR6oYZcpwdQ5qFhtfTjeM7MiAKw",
  "key44": "41YGbx1sA4PZUXutmqyN5RKPSC5Pwj5JbMthRQqoP4rZd8vfbakjHqT8vAwixSnZuFkVnMcMKqP4Sy3nee9mHB1j",
  "key45": "4GRAo1WCHtuwhH2HfhZ9zNcd4KGhvXjrEHJ3W7kXhBopXoQvwHPdr818rfFKhLMA9jBwTswD1ESZPSCM6tbm2JKu",
  "key46": "2mXSU6EPEHRduCgurrcQa2BqBCi8qTx8xCivFfQuoV1864wNuXmPJjPn65pXUCWV2zVv9xHirpwP4RWFSaF4vFy2"
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
