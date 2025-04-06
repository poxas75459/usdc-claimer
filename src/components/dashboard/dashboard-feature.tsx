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
    "2epE1rnfbN8rrN978hN3L7r7erwg2n1x98uMsJkFDLqyvt9WiyDvVKuTXVnrqJeNTjLqEgMp9MZs4UTAQG6XfDeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QjeyvQ4rhVEYE9E9tDVPZ5zSsTQ2nmbJANAdkcGNaWU3wmet6yv4yNeGzixJw2K28Gu5vwTPftdFsSc5uJJSEPn",
  "key1": "5bw21krfASLZszDKqmmFUGEwDkyom8urwxRidv1vARyXsEvSCF2vVBp8ZfKc3aXhBXjTEbv3ijVbEdnmUNGiXRhd",
  "key2": "4aWRoWdUura8Ap3atNFJUGRKV3NQ9hDUWfHZLXouyQY73ZTAUxoWeLeVSdXxDZWihxkvKZ4BcEJGcBH2SiitPFew",
  "key3": "3MVBJg2WvUVsLjqHMgYg8ez4GMgUhEXbCeMvBn1ZJ7PseaZGbNBFhGemG1dTQydperWZmoamSvo6aynW6EbPkZFR",
  "key4": "2PQGBb2kgyYaGRiHVmUMJ8nmhFaHASfeqbsUjE5x4B9hk51vScGLrYn76YMETUgc9KDbapgLemnMgP6311NFewaQ",
  "key5": "pvTmfFa12cy9FR8primKhdarTAycWj8pyoW4u8BFxZfyWsoSmRwWrRzYznBCbg48EegAH6zJgsnXeY8MTNBPH1q",
  "key6": "kyWgxz7igCZc4S72w1SZvP7SfUsgxY1ujdDEoy5TPf17SDGMohagqDFJHDpgt3PUZd3Sh7haagP6JyKKYYosiWb",
  "key7": "2D3VjeNQMw3ZNCxX4seedVfR7WkFqMHLDB3phnYGh3MaHsyFCs8RDbEg6SUJZb7k9Yr6zYo8Sdc17C1Rx82N9kXs",
  "key8": "nrcNPGVo4ivZgoKGNMzM64uSEP5uaqq1G9iGZVpi3QbNi2BiTBFEJrBpLfZWEKWCXHAPYcB4QVoTpr4hifdejqQ",
  "key9": "4cHre9GyR4oMqnk8jqqZQcrp4JYUCUqPvGJ5h8Vookv8fMCH7wa2xc6hGaG4DR5B74KFzqekENh65VUHp2tcR3ZP",
  "key10": "2BVzFAmmHWDC9rdTBdYbUFixCEfbwnEKVPDnrSLxCts9A35gaTBxs7BQHxE2n73mBQSRZz4fJPKg8UYTLJZBuiza",
  "key11": "Np7R81YPboQLWpcpVZzFdCouyeMTpWHUCm7PUSnnbBJvGddWeXXBkaENmSF5MHEt3msajBe3Ka1ZQxbd57gzx3T",
  "key12": "3tru5a5H6ebyA7hVh13Pif29WukSnuhywXBx81dJkuHAqTC2w5M3CGAkwUiFVKetHkWGHpdqG694UUnzXjzWw6Dw",
  "key13": "5h9WMNQAESrN2zzkergH4dWtZ3SZgAGtcDEfofyaW1Dz3x3QiB7oEVfSic5r6wEiHLkX2YUY5r48mpH6EEPbETYs",
  "key14": "4jYkVQ8ogZT3jjnJHUwSfa1aKyLBK1oVRSw37ucwQ14Xh7UhAADx5QwLpYi7md9LwxesEYzxYt5pM42RbAFfH7Xp",
  "key15": "2dUheRbfa54zxR9wzm188DGTYDi2gsSkDkFWEMkzBp7L1fjNtZieXyCZS9jVXTJbqq9X6RraiCgZs6BbSVixvKb",
  "key16": "43tQCBA5RrfnKTD5SXrPW1LHerMZP4x8nhqD3SSMRHQuwqRWr6pee8vfvtzzpF723D2s8BzP1c1nZmCgtPd5YUDp",
  "key17": "4dHtgpEY7qpz6P5FZdMbnutRZ9VFTqTEJhYdRQNJXcwxKdoE1Qaw1t1ACU8TQCf2PyeQdn99vcNaF5YBnWihYb2s",
  "key18": "3KCJNP4oNJymCCkJK8QzNhpWtwxEL6oPcYM3ixPwXWsknQH6NmcRXNQeYsw35SQR1FAWd9YDszYM8Nf84dVgTJc7",
  "key19": "21Ha1eC6cktJsbLfQWkKKNwDLk2rvk8979UJKNiGkVNFHuwzD6wAByh2JbufdJ3W2nuSoJBBaPcw1oXo8ZPTUoWr",
  "key20": "of9X5Qc14UaBqEWBxHuV6eR4LrfeygupDA1ar4qp9djopHcnQpfUk3WxjJCGbxWiYym5hT6aM7BxgdvRRxggCUV",
  "key21": "5Dy83bKoT1RHEXQ1YzYaLseT7XhC1QKCg1tMghQRn9ho2sFStbM4Rj4WQYKivbk5PhkxRUs7S8mHR1EyRzmy69ba",
  "key22": "2T5R4BUUpmyqBpL1sJua6kFpdrmENGqqMTDNcB6fLjV7tMUJG8FycYPTj9BmtF69kKaWmUa6QKwA31D1MPKfooDQ",
  "key23": "3dkSoEE3VHBhuwfr7mYksVrqKLfR7yp8piYg8Gbz4u1bvXcMimBMYG9Da7KgbReMxP1XNAM9JYEUQ5sGxeBFwxnK",
  "key24": "41NKWie3oR3f4cMCHNZnvJEexe1TxGJV1dkqdu7nBWs43W9YeFWQ4KDf4GwktetpSBgJXiKTX2ARYHHUw8TCyHEy",
  "key25": "4a8aWxQ1SNuACFmLv8rQ3EWS2h7Q9gGx24MhTFbFd57A95xwgWXxU2MRnDKYeJTS126rjj9qnKGCMGBNWuRJyVvF",
  "key26": "CxssD1PQuw8PBV4N7HdcW34pXSzGqmwHZ6uUTPNMeoE2YApWEYV7jSS5cK7ftqTnHAUe97rbDL8fWY2Vn2vdUSB",
  "key27": "2HphCQbP7SHDviZ4St8jnEKTukQF2ZKo8WQetgGxPiFxLdpvgkVfum1khFSgihRLbCZPtB4q1r8B3vxStkAo465u",
  "key28": "L7yMFHTvPJMrwnBeHpsmmNqJaeXBaatPbgvN75Ga6ZGB9NsJYPTbdNuREMkZCcDuhkHyfWaAQnVq8Jq3dyjeAWz",
  "key29": "2RTGM32dqWJDrH9zbpu34xCRLpWJJ1DvEUg2uTffuUBxX8DTYfw8CGCGn3ABzHHUBDZjXvnD1F1drkig8DQMmVkZ",
  "key30": "592g1Rktom8KXMwYoqcjcrsUdV8icK8QoMAPPaLx2U1x37H11iHxf96NxghadrcJqxfHxyEJ6b7pw2QH3k487Pmf",
  "key31": "4FdmrCfQXrekDB2JXG3VLK6424gj2eQ6GDV45CTEmkngDVJk5652xAkBnuA3VXoYkrKN3FQizQ2wZ3MQxKGbvsk6",
  "key32": "4L31dbwkosoQQUAWjLjPR83RYLU2Wwk5ocVLV4LuXtrP5a3jaTfTRSDtEPhdcLTxgbtYQBWAdTLwBnXZtXi9DWgp",
  "key33": "y9vCW1Cn9fCWcvqXr3Azqp8sKg6kwHfMvm2B83H3D3rVH5sQxbi9zHiT3qhK858NcfFA9iqhAyTXNidS1Vp4G7g"
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
