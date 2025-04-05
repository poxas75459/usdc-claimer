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
    "2eYhYkQpeSZfowJVcyQ2JfxHMV4pog9ZQofhJdbMR86K3MJ6GrrdhnJoCbdK8nhFiSfvc7m5EM2iuYVbz1YhamFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5poFdhitbvaeJbbvchA2iMGeECQmW2xY67ypQnKdJvFLkTuTvBS68WcxFTmwgSQrVkwHwRjVnvimWCCs4b6rAZ5f",
  "key1": "2S8bN76ppQMULCsSydMHF7xLVNDFhfBaaHLw4duucWHMRx6HUDvoEX5o6VE5v3o3TvTYGRsrdia1Ekzi2XmVRwaN",
  "key2": "5oD2utzK6HRRieL8p8JN56vvCJ9KQGspHw8mGcz5xCjQCpL8LHSNaQFx5BbbWTLeY12EFU8pvTFL7cKF5GL6rC9a",
  "key3": "5LaaWUTPrwbpFSNAJ4eocQCg9Vn4HLQdXX7dRbyvSc6kfftG5b6k6RSXXDWvBYjB7SEmFaQ4m73efwuRG8HBtcyw",
  "key4": "3J6m2BaQV11w3ZBqdi9hm7gnVNMhrrwmFpSNdyRJA6PpxZssctjrardwbKgBs2ubjA51yL7qyUGumcQkKni2J6gh",
  "key5": "5fBRie9ditNr3hA5eG4yRVdmfqqfe8dB19tKV5dSZrnYi9VQZTkABZZkTjUKoujodo41ccGmyHFSzq7WJA7KbQwq",
  "key6": "5qz7DssuxomxptcPPrnWbkECfhVteXTzD3EhZaCMVeu2g6rUgjAKijH6KTduqcBiHq38beyUwg3pb1E1fv6WCvgF",
  "key7": "qQHxb15p4PXqjFHPQhb8B4ZQTAjU4kfUerwXw9PA4K8gCqLsg3zY179TtyHKAFua6AfcAfb847LYpFf7SbsGjnA",
  "key8": "5Bm6cVoGCCgHEi6XyxGxcBnsRd2W9eMc58GsLGKimpfQAmCydmuXbN2Dm1vgeQHY5UK73jUqXZhXRDRFjiFMNuAK",
  "key9": "3vztqgSDGfJoP6uCrb54j5CtCestdb1qiTy11dxCiDzscxXFL4awgcGh31iEskfMUnjfdgb8jNjd6fAWR3adWFPN",
  "key10": "RLkKLovSQz8tAYLvb4afF3NJLWywFAeCJNj4qWwiLNjp1cLMZvRAQCnaD1Qx4qXB4nvdrvNYzGSYCdzei5K2d15",
  "key11": "4Csy6vi4BWNv1Gsw896ZPdWdbtXbHGMGDHR3uzYB697EMoZKiNgmpEhFvM1zakAaRnpiASXFAg9p2EsExXMoWFEK",
  "key12": "w7i1PEK367k4vHAu4Pd9JYdrhoo7g7mUL7Gwe7Q7cN91D31XvorF6y8DfzZpzeQgiNxzKPU2b6buXvMfSfwTmaQ",
  "key13": "233dDrQ6DG9QemvoZitsH6AiEJUy2hnJjN8ySfX8CyW9AGR26CywVmL5s1BoBBCTVqvLBC439q8EdkymuSz8B3kG",
  "key14": "3LfPjhnKYcGTQvqweReJ56qfCSgG3GvUfw7Ep6DnAhTmECB6ZoTwQ6F7cJT16D11sEeemEyAqWGjDPn9cb6KTWjX",
  "key15": "5CkcY3zAT1yEgPjErKUKC9reJQxPHwvUXnKL9mQjV35hWHpwPUs1HEKGf5Y51THL866worJiFmuP4X6FC9ymwbmk",
  "key16": "55Cd95fGspynwhYH8VBpaJ7t1Nn9YL1C3idcqKj9cTnvsD7RQkPM7qS9AZp8aFaqFLjx4Bauaw1vc4wrKgdWxVQp",
  "key17": "3snFN2caAxRnaHuYEwmNwpwnwCGU5ynshDvExs5vsYNQXnrXfkWkGfLRvB31HjqUXSEY1aDBjUChrE96PvkhfExA",
  "key18": "25mmaUVp8XStnif3s1F4FYxvvAXxJCtY7q4VCC8dR51TtPnnDEWV4ZCd83ko2G9tuzCL7LeevX9ZAaoQshtVH1vE",
  "key19": "3LMQWSeXwnVvHUy84h7vpgiEHkped6AufRiwCnBNGUgBnqSJYoc34yHcnPmrqgemmr46UokrdKtBQ5jcbkyHQAbT",
  "key20": "7S6PZAq9kS2excVewHqgsT3XX73TM8ZXuFH1xcAahDX461wqrdyXT2DxeeFbTKi1VgzR9RXJdDq8vdPrw7YL96V",
  "key21": "45bcCH41LkCSTeh6ELvEZebqX9ajyeAqs5BxjFfYSWe8XFrkCVrj44ByW2QaMRUtSmNDBTg1ixNqYi5rSRaVgx9s",
  "key22": "3BcLZMq9cp6Bhy2ubCvgX4KFUQEjG7WGBk5L3BpUZ4zrrmigkn4jRPwQcPks32W14STHSnkiGVg7LuJQuasMZkHk",
  "key23": "2PQtF5d2oKtPUnzpF2NWRFvWoqmaCiWsvdXoCrsfpw4psW2wLTT71axxVY7gBsvWhJxDo5eMCPYmVZ2Zcd4FfKKi",
  "key24": "3WJqAx6VriG3vXewFgYmJAnwTNFAv3ErX86kqH7atY9VKsBTeR6btbq1TwNevvQUVYgoYCefwSA8zmFgKp9kR2iZ",
  "key25": "5FEARvYffeq3xgSiYF7PdZvcjnriJxMjqFSu1WXgxSYfRxsH7pcchVh97CSybQBRP86EZguweYXxS8vS3HYHKHV3",
  "key26": "3VbvFxCAjWgAuhPtshdULSm9kFKP78q4VKHSSQDwWPnK4qLdRJPBvgTaosHmrZe2AMPG7Shf1QcXxaGVaXChvLn6",
  "key27": "MrZdn7qfDkMEjHiWfmNLJRE71dZSMDnUk9qEXtvLaeB7FP3kpyuAusmcoQgjNBw32TnccHHx7ZYJPoNZpekxiNh",
  "key28": "4uKoz5yDm1E4f193SzacdCw2aMEsiqciNJKkJxdA7f3HJwqqCzHQoXorGANWX7MWAz91G8CmYzeLKWsNAWu9VuyD",
  "key29": "5EFoxq5Co1YUrSDwSru2hUcE2MFsPDAncnhBc5ceo6yXnGw2i17ZrHdXuniEi5KSqXk4Gu3owZTb5E2yRejunqkF",
  "key30": "nmZJt4uqtkv6BZyXyq1CJQJtgXJ6A2ekwgcoHLZqJzmKMjeCiiaRtG5Eb9Tksvvz4H9Gn8wzvECkMTrUQ127HFB",
  "key31": "4WVozZ3ScmozTsaaBPBALSnm2CJfZXzFwpy1z7yNrhwrnHFwX2fbitsSgnqEGCSLX1Jmd5qoEEgJVKnZnJEkWDma",
  "key32": "qYD2wnekyeKuv3eTuHrnVzzoE8aWQjLRe97M3ScbKvoApeNhth17cA1BsvWF98BqZtMvUbYaVBsAjtDtWd5GawC",
  "key33": "hFGQShUAnvQsMSdkWgueoyNBqTjZZ8Ft9ur9edMhz1TqSXVNKKyiCrVpmUpyhyJD6ss4tB247KNZqnNoNh4WzwF",
  "key34": "uUn9o5VCyYApVhwDd5HtK5ubizYV7CjXa7waxtNahCBEobrASUuzLo2H38yBs8p38cHvpVvQxrgwxjZsrFCxHc3",
  "key35": "4dg46PDU6sPMUxqtxMJaKsNPBXBBGk23o15hDKnYvf4wxJcCsadUCPHhqNvs1JSsYMsHR6fqPJKwZya2GwVdHGLg"
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
