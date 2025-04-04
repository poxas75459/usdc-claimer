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
    "3o4x197wFsjSph3uom7JzoedYYM8j6vbJHRSkKfeYR3kLn6bX8CPHa8ME8B2ArkorXCubmK5gvogx5VvT6nAYra9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b4SXPbSGCqYDFazdcVfqwpRyqaodYnaWQ5a9YrHasd5ja5m5DdEJs5aKGNwC7bPWVGi2Ap235d34BjhhqcVAepE",
  "key1": "3gFEhdxxX6c85XqYmS2To2jQ2xHqz4yF6jhshJChA1KCDdEqsi56iNe72cS5nyd6nSFpaKeYYzoJDFwexm5fed5i",
  "key2": "Yq7UgX91Hz8SLZgEEioWHQbqWTvx8gXuor3YLZPJp1GvwHgthoU9i6vFkJE99UPEL2KorKZtuRggLVePFokNNFP",
  "key3": "31QMa5oBjZ419VhEppoEDfRbEjFWT2KQ3SCTRaqRa3Wegrb2ZkG4UiyvmnmjLxsNBKCEYwkYcszTcJ9SvzfB6dmd",
  "key4": "W2UZi3fug19hdX4n4ZjbyE5rWrs8PwxD62gCCSJbn95gYJyJuLE9N15q9cPXFGbZBkWia9WVYJzL9w6M64wV4hf",
  "key5": "2WnsRVnmYojwobJio1ZkftvikdzW9AcAePCcvNFN84jS6a1FwPYNpCwAfK1dt4MdLpCCX93MeKHFCuTmph9MfzsP",
  "key6": "2VTnCisVnTQLCKYg22Syd941xomGEGmdW78seXdrBWUvhd63AmBcQrXq8Be8Zqh31pvctQQAKfQZ4meP8zZcR38h",
  "key7": "3wugHYoc2W4s8eEuw7ZDfASrn2UZi8sa3UgxVAFQyyYRzMi3epQGWEn2udSgsst92Dfn1ahZUTzkjaQLG1dsQmbZ",
  "key8": "4YyMBBRY5qEFTk4e7Mo5Z4Fe4E1Ep2D5vMKgSRi2DFMLZ3iKwEoDkeCVFF42z54B3AYhj3FbL4UzfQY3uBXZfEF",
  "key9": "2w8e7nJyuFATENY8AMttvHRfpFwMJx1DVibx2YyizErSzk6xezyrdctZyokRvSaYVMDaf14L9c72Vr2Xw4aMRTGq",
  "key10": "21dsb4W8VMS6hTPeDwP4UxnXYPPTN4e2jKiH7FCtxZGpF4kCtPBAFKisMrPoRxnnhJFeFw3k4ZXJwbL3CksdfZmh",
  "key11": "JxbfpVsHjv9t7YjnoaZWxc9BDm5yT9U4N8fnJC1X7VnxhK4BG4xyjX5Leh81dkEt2VLEdpffkvjKnHJjW8tjYkr",
  "key12": "65UW1JWmzFFGJE1fLxPfAdjTnK7jd3qKsFdqUBtcGaHxX1UPNDQvuw1VusFziYNQHQNLwZckW7Hx8FHb9dAdZbHJ",
  "key13": "3HLAPfCbFhAdeUaVZ7kbeY9b8fyBTevDdJLYBE2A7ZTduKhugYkfBWcrkZ5cut5XNpLY2Pqx7tiPSnm9m5CE6sg9",
  "key14": "48XxksVfCb489XZ8UUzUNU7orKeHFQhfRzAc3vPUJjLbYbsMz1mtYABJ8g6mpZwH6cgE5J7R3mXdcRmkuxkDpMFV",
  "key15": "2DrpTAgc44EReQd1JbiMVLEeNuWsn7PbnobjZney6dH6AGNrAGbT2q6bZNFGHzNWecKicK9B79JRHMP8dECdq4Ka",
  "key16": "2HQ5vucJTXhNWU8bkUQ3YDu6R2TmxHyW8gceApBcS9ukV1FGucExFqLowxnXZ9dnHXQGKnmyS3H8Nx3wKN3AkzPC",
  "key17": "yXKaVhMwkBJB7coqN8ssio8SqsXudZhAmgmW1tGU7NDqW3wZ2SqSbpCET2J3EAJPxA8Gajgee2Q91mEeXErWuQz",
  "key18": "2KdUgLJ6NX6nPa4iF7pZh8sgXYEgZqJyQnHT94fMCwhTdkVd6g2Cnxh4rUEQWimWkHdoqi3vUtihZ7vdGNQALozC",
  "key19": "3uw9npJoXxzCCuYjw2xv3UEKmpQqnkmDjcPpJQWfqMCMQd8mnVrcvzsvL6yoRPRt3mz42DHAkXFh5MXizBjvDWHH",
  "key20": "35biSnBqDdVcqv87BMCh4RRmxtbstJqX4FAwmS8Tg7vSquyGg6mZ1d7SoERNVWQUfJCYSPauv44nwVonpcxFnjzX",
  "key21": "Emfvi3Mm1xawbcJQGWL77gx7kVuCN3q29A6EUAff24nCke2nMQYSX8TTA4gWh1qoBZiuCsi74DpEm6aExSqwBu1",
  "key22": "bcSB8Svz72St4txsykYpuXdaebDdQeYEsyZvsc2JeFzhpjLrNHsT3nRN3Unwbs8vUhMaoiZgmK3NNTcF3PLUn7K",
  "key23": "5h4CWgAhYCZYqdtAvmqmoSEeaDSCyWZD3DKWt5HLEEBVRNgEBBKjmsW5wDr5KmvG1TEyYVNkPzEaQ7SyLURLTtYP",
  "key24": "4t7kdToErY9MjXZrXiQLsiGV1Ur9WXYzAYw2oDSHhvhsSjEsLNTYZGy2GUbBVVzVqUZpeTWNA3GL6h6oWYs3wtHN",
  "key25": "PCQ3YbK6dJLNdZEb4YNZHVFwTeS6isNVkmJQ7XumGnYXH1PdRmZE3dGvCybMUMu6fvh2kcNwnaF7YSGs6UjRsxT",
  "key26": "5wZoAbPyrbtpEToVobinFSp8bNn59syWEm7EdzYF769YoL1yvYFkpafyd2QZzirUd29xUNbgmDfHFfsfMPk5Sn5L",
  "key27": "2gFixZs7rt3XEELmdjxPBZ7BUN685RwBo759LH4upMu31KbTdywqoka9N2VSn3BkLrATp7LVfDvZpfMEz3zNmjd2",
  "key28": "4Zf9p8Z5hquwCeh9wk7xrE7W7vAqHAaFS7kQkyiw4zjTbrwVeDvzcVH1SCsot8AhVKURmpJfYTXk5iZ8Ttk15eUa",
  "key29": "49NrDvErkAWCt2ZidmtWyG8ToY7wPvzvtfiBWEpGWnMya2eK69GUV5ByGVVHgNETANmxpz6fvaKzxsiq5uWr4E2i",
  "key30": "2tShvTULouuSeAZhYGoJve6bBszFu6uzoeyJNDWbyRVSqFa6e2cAuSSHGLb4fy2kUriALcLVRYbfYqwBZUzD9Ndy",
  "key31": "5YeQtQYwjukZDhJDJRsJZJEBQfRsGFuwp8aFbh6vcnvtnUhNqedDcZAgfDVUqRNH8Ginzv8dZCMudV9xQgriTayd",
  "key32": "67VoQnxiVmVPaVLaw7zdsjTidFKn9eK6RFrqH8d8mnuC2EHWbfMaVMWronNECQsXXY6wDoqfWRuo5nV3PS3uyBDe",
  "key33": "Ux6YogTCHV5vSWo3smQAHGoiVmWP1h35i5ad1gnDi4YhGeBF7zL6tLGED1iPQB2SMxBouAK7ivxb9aBBTzNpJw2",
  "key34": "3q162Yf9RqBM1bAcQo4bDMJj8bY9A1P7TEFSi583cWHrPpcRHyHsnZD29UhEwupSJPMDgTK5f3Yee2VaTFF8LtMy",
  "key35": "sExBV6BnnSpBkYNvSpHhXLRhm8oRMXCAM6XEM7zrQHv4CorswErmqNshouUhJReQMbpb9QNgGssboUuKh3jYmxU",
  "key36": "3gZh4Lz6nis5KYd9wtNr19QkBm7ftxAfaYDdpHibsJe3Jka3p6v4vrWN7R3qKCzsnThkVNcMYwpW49yUPQB9BGQ9",
  "key37": "49bza4J6SNDuCKe45LQhkSL816SJgoq8KNmww1dH2HcSL8vQRsHPhKKJsEAokcZ73ahXLJLQAfmSnC6b64HZbvbQ",
  "key38": "2r3VqB2YpvVo41D1pDw792TobvgizhcAG8UFex3vAKWPHfgsWDmtThoZH1aCxeZ5CTCyQLxSEsBY6najgc9jBwmJ",
  "key39": "56vwbjhPb9jpdyEGqHsDnQ5M5q5AoArqzbCMJfSP6GVabuuyFefrsmrJvfAR58DEo4e6J4uNRzWFAYAPeQZxtwUo"
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
