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
    "4GBu2jGNeJpnXNhBrg5FeQCNPmjD52EBCvpZDWpxJSFbFnZy4KqcVeeqtg4pLY8UhTXQemZyPv2gnnPTBvJgGmsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EwAowDc7SSSR6yMUAPJV96Kcmi41uteJ6dYuQQum58YXqQaqhT7iTymmfF3veeK2tgxSNR2AMUJpqBNFFx8726o",
  "key1": "4BZEi1afWsAygkAAr7tnEi9z7yNhXmZnvwt5AacditBkwuhzbgD4RzhPFVWahDszj3vNGfz9vKWff4q1pnLeZCw8",
  "key2": "3yeqgZL4JXsnHESpWxj1tRRMPTkPpREQwfKQbsxcWiUkPbUeBRSn9j31dq5txM79Ls1QihYw9iePH2YfoudaFuLd",
  "key3": "3n96ocEnkt1KqqNqTTh4x47SYoEsLZ37Pe31Kfv4vLViech64dELni4Jq6DqrrxyHF18LSSWTyz25yJy8pYWpoWa",
  "key4": "vnfP3ywXoyknyR46zpWWVgVdHozue5DCZUQEW1nTfnjytAm8ZE7KTaEvhF8yHWL2wF9fA32VwYJ8tX8YDNC3U6r",
  "key5": "5ByS9ianauh7LpSere1NTAm9RtZiW9D5bcb8BPnfKgJhwURAZMtKv3x8KSFgSMvLUHJ4tMtED8AFdUbAPyt5he4t",
  "key6": "52PJx6xq4WnU5vuqsfRauiqMF9umnGaNoDy4qTCfgosFkuwxwkjqoBK6BKBKeyqdDCxx25GsYs3pxGnMzs664FPB",
  "key7": "3ywWAKrKNu6soiNbuHChGsJnxa11iJxiFZjaxwDa5z4U3K2NBKDpcLTyyNzcvhk1oiLjWDLCGifm2aX6h494fPS9",
  "key8": "34xHAfFvLxRV7CY4x5esKME1qE1tKh5nt6XDQ9xdAL5BDH3Q1BM2RAs6WT4Y6AF9UBRSFDhNt34DsNboinXkQDG9",
  "key9": "3DcFTfPqquRXprKT3DJEVDvsSLyZPcsrERGVU6Enm3BuzBshDMBVgigym5mXNGmZkVA5bqUtdJL1N53rZfheEAn1",
  "key10": "4m4KYLh55LyWNXY3FBiGrg6UMzSXF7gV96t7NYmp52zPnznXCWQuX1VHm3ZWuef7VyJVitTA7sv8a5hHgCYFKxRE",
  "key11": "riF8PZytTZ4wQA7TrFvNxYekCYxRW7kUpsBgXzVmZJmmzaDFHRzRamw44F2DFTqadWBwwvN7frB4183MgUHgxpy",
  "key12": "2GcbrsHHyQrE4CtNMA3wJMcdYQfPu11YRhrJ7YHJyrAz5TMyJ7EEe5HCxos2eVcuHhJb3NzxbduKB3gmNWzdkEbx",
  "key13": "61vgNEwzF8htyu7CRUZokH6MbQCvVGuAL2ZuE8G7ttjyeQ2sZYrnNNEPUEkxqDffg9VqpBsNRyt1TskqKa6WAoSz",
  "key14": "AXBkcD3e6YShHWA1RKygGohPSGXJ9sjgKKhSW3DAsLDgXRzw91vCrjkEkR4C5eXoEAm7teyoLZbBiJnpHvQiSjD",
  "key15": "4ay4a3jQnCNdA9gFmGp6V88Pf6uCW31h6kZuyeMEHD2obajsarEn6yE83zhoMFtyefAi3ZxBwcnHC4CndPupZYyg",
  "key16": "2XtT2NA8zjeoyC1nBhqVPc1iMmt41WNHx4wx5xUGTnMawqwBvGEk9VRTLnmtAWVtGeWFqsSsyMyPXQhJ4trh4B2L",
  "key17": "3HBT53SM8WcciPTGJ2EQQ6yfxzjwDovkdQLmuYPo7GhvLRgTyYN5dCS1iPHR2jQfwwQPEu5Xdga5oLDJaHHFQAHR",
  "key18": "5iMqSe2Vt5kquj2RaXrBddYWNLgHsg2LyG1e6wa39axVkAoNsXg2UxUdxyWFqQ3E6Hh81vWcsCEkuzZ7VhTyjhMG",
  "key19": "3VWHuJcjoCxve1hjjjWNMBfzU9to2NFnkWtEkXyFMSB7feUnSkmjYR1FkVYH7oLvDpwCjdmFWGMEKpqyf5EsXm17",
  "key20": "2a3Sm9pqPUNLjovV7EBKwYDPFCqTgdpQ8K2Zz5a96cwhQ2iKKm6mTpUrkk9qDkXYuUScHfV8KAMqmrB6TFv9DAKc",
  "key21": "4VWzxn1TjFX9NPgGbcq3yNWYkuc21FdDb1qCLuMTo9ski6uUkXjqd2fGkg1MgND3F38h4dwdqidCmQn1tLqLbxrA",
  "key22": "2No13tqHEXdhj5B7vKkwykzwMV3tEqpVkpZLsAroWrC3A7ztjUdis5aZN1CVtdjeYkZjXNL6GcWHcfJSc4yUp5u5",
  "key23": "2GSY3yzME1vch9nXpKjCGyCVQFspScYCRFyihAyhebrEQfkVSwNDHmDP298LGWX1gv7MvQ3Qg5Gc7cYrYQxMVTLE",
  "key24": "422GdMu9nCPgvxwr8UBifT4xUqwSGqMVSMdNFquBiKn3R4faZ3oFMUNjXQrfxCEPACFZ2EkJPmC51qBx16F9E68b",
  "key25": "2pVM8qmxsRAqi6n9mZy472wu5TUiC9Cb9xJnBozMgtTCZbctBDaEJH394hSJeVWruhzeUvivVeQHwTNBEcHKdq3w",
  "key26": "2VQrNJmLtxgQnECCNNxzdzt5dAumepvhkKnJ6JcXDmqzDXA2y8AUaj8Hmx9doxSXGkKabcXhPxdvksGk2eWsQkh1",
  "key27": "vLNum78TzyQxkuHJL4oC4ws5UEgRh91cAw5zMmwLkPzqZpMQDDG2KiMhBuHhZkJqxNdi7jV5i2RRrnLgXFtGRpA",
  "key28": "49f6HKbGBNcjdxacUreRCvvaT37Wwp6tjWg1p4zatH6eJxarjFnnzytnCQQx4HkkcC4ykvyM4QsApRgUjQJzxknb",
  "key29": "4ui2SGfK6P683cb9NYjCKZmVuVFNVvn5wKheudAxpLHkJegDLRn7QTNg739Xvu6MWiFZwGSyPcBJxvqESDThjHJA",
  "key30": "4Aw1EhJp78831quH5kFDfbMHoq81hTDTvqQU4kgG5U4seVPC1v2DUoUgJyTyHtWFaRQUyR2DnJoJj6sLkEsQ5Zyk",
  "key31": "3JTySRobv1Pk1QSS9TNRd3a3PFtcjQ6pn5n8NMZ7QnzC8Fc6axMfDVTwdjv16idmQnF5uy28uQSVoCoYwTBuqEYA",
  "key32": "N8eKivYEkQRV5WxrYZaF9PDHRKyvJf65VnV7TstnvzLGegeajBCxz2HfZJtMB13Lt7ro5wQzGjoJxookhsevfgH",
  "key33": "3aHYmwyWiUqd1y8LBS1KkF2f88Y9TXKh3Zn5ZUjHe2tGvJjk668wf5T2XhHPEuWn5KVYTWnP4EoCwCxSgwrD48WK",
  "key34": "62cGofmk47jGPuborKLLcGZ9HEmnqsfqZWRLuUau5GKTjg8hDuSxELrarXdSo3jAoZkYuNdGmthG1sNwuKRf75CE",
  "key35": "33LmnrvtwgP7KFHQkntNHfdEVu7J6tox3CZ7ar5XZBCjjYeYTwyeyfcKbGVoS6zh2u1mC5bEW5x1o3U8VJytZuJ1",
  "key36": "92e2EssRDdWERvpNkANpyctCxxE3J5mrTnb1hByXU1yfnmSSHMqSrUFK1RmFxWmfR5s5vmx67tJCaVTfsCym7ho",
  "key37": "etgLaMn2xKigwTaEoJ6bkpQUbisyMM5voo5kjJpUhoN8vEzx8SXR6LhycRGuEM1pzxEoH2SSQM96y7vTtCqiGTd",
  "key38": "3GU4jRou5XRjSTm7QQuv1fLzHyB24nxuVhZHh6ZNqTvsYmVq4HKRiQJdJEgsikL7kTuijGqroQtLiNVB71QABHgU",
  "key39": "658Bs95n8MXu6BBjygo6Hi45woUF1SB1Ey7PWjYuZS45Nrgoj3dAVRrTf3YcxskxjBPMGDSaV1vGCq7mV8ttjhii",
  "key40": "5SEP2uZ5XUWUETjEM927EY6VNzBi3T8QHAy2xtN21UuEYAnWApmkrRvH9RrZVHLnXbc663c4zCfVCXsqv9S4D22a",
  "key41": "4obfW8tPDXwGVuhpQ9GxiuVvowivbjAM4J1PwPLufzAhx2kxCcQeF5YfXziByBz4WSZMNZyuwXyGCTRbnoXaxPxN",
  "key42": "59pXsL8NyZgraHE1irKqcqQPgpLxSKZ1FTDGmgiKyre1TRK4E6nJyDwArPA8m2cBrNLT2N8c5fSHU2uYYy1S7Pdp",
  "key43": "3woowvLodyCBRhvTdk5hwh9kuitBMC6qMFSP4XWdANHmySzfctBwKaxTFmFSvRh1b2oX1Z9MGLfM5KkezjSfeCd9",
  "key44": "uANX8UtjMFFe1isJWKSo77rCAWvESedyMA2poJmgxFLKZMRzyPPoURSPBsEKGDgkcheot3uFkgKenxu8R2P4xn2",
  "key45": "2wJqXdFfjzezW9wdxHWaQrMsvYhShe3QU7D8C1F2QGY2KaVSgztM2QcijVfsKp9E6hR8QrTezXci9pAo5CKxafJV",
  "key46": "2yjiQrW8DqSpYwjDCvsSMTyAXvuiBv5EtX9tCRbZwgeBWod9s2VLZwNhCDdPdtzQPhxC23G6DuHWX1nLTRbbWseT",
  "key47": "4reuAdVPtVwL8k66QhPjiBTXgYw5LmUQL2oeyxcZE2QCekvekyzPS9xxT9VFSdx4YatDPFKHzFZHoML5pVkgbLSx",
  "key48": "HkncaactZNnJuC9FGsQ8DcbRwkckP29KJcRef7v8r7N6gTXjAnXWTMRbrF6MVxCtjfoAwj92gFdpwYBdxT34oZX"
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
