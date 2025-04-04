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
    "2PZuQrSd69kpwZbj7tm38oKWCLxdu4u115T1aaN1gUDcJq538QmtYKa1QU86Jh6TGtDpY8YLwyhkxWsjUwQpWREJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EvNiXR5652EmsxFuiGK5zA8rT7WthE1To1EUzdPByrWzgE4eKwqMc91HV8boeVWrz5S8wYP5TDEZCnXcK4k1qPv",
  "key1": "4WdLffBL9Sk7skyLhrjJjRjPJF5NrqnB4CR6z1kFQM1HhTGMwXXo3qATXwfWUb3scLHcFhx9PKaAaT1V53UhBKEX",
  "key2": "3atT1sPsr5ob7FPrnjUVdt16ej6hFwHrpVYoqqGS1w7EFdjH1C78ZGrFxoTJmu2nKkJYzNCB9jq1Akw58Vh1sHaV",
  "key3": "4PBBH3gobySwJvfooaccSkCgTkEk6WZqgDP2XFzF5HMm8NtZEpNyiHKDa68Bs5sSvriyt3qbQ34JvdwgRyjp3NPg",
  "key4": "3N9oJQzFibnC5TVKKQzXDRqRyYbSzvDaSsabegRXPS7eBkKsWJdH2hFyVVRPjkhDXPkPbVJA4ADJNM46aTDZ2Vuz",
  "key5": "5MvXxit2rZpt1pPSmjyfv7JeiiUhi1SvUhq4kPbG966rdmeFQz5bAbaRjXRVJbVnUc4DVuBfjG6cAmf8we3LYwzZ",
  "key6": "iiutQXqzB1QHoqb8MJvaMKehcn3u94LnxGbyf93jn2viwUHHDS2onVDbWvaKKifgAq2Rm1ybWoVckH7ztEWvfrd",
  "key7": "3Uz2L3tr4SsBrtMp1wYRCDgJL8xcFb9V3fiv6AKjoxHicRCc9pkpB9yYVUYSqd9kPRQfnPnqtTUumDbZFPbGcmZa",
  "key8": "2ubwuJGz81uhvHSEuTx53hJnSZTSep5otwFF96cX8roXrhafSfFpUouEyAADRF3hzsf7ovc1v5K9oceUo9t8cBi1",
  "key9": "2duY7kL8msNX4jUwefM8p6roRNUt3424KMpvMjZhs8ABEjzs7TRJrnL8N4QJ4w4TBAsVh6M714warydiffakLnLd",
  "key10": "2iK1NYAbqvQHpnUAFPYJWFqhBhUbBBee9JfNb56mQMTd4f5mCA9FJALh2Bo4NFPFGDKCyrqvA2iSTJXmkTj4tws",
  "key11": "4Yxw8K1TVPBaQ6wSmAJ6PNJYmy8Nbg2DuCgNBZvT49N6pD7o3hAdjdJzEtXma7VbU9ssB11F2bnYUgPL6RvJkqxF",
  "key12": "5NFZxxw61a5nG7GHax5qfqX7fv1L7DXcYuDVT3p6FKaxu3heHwLuGcTacqpG3Ue5ewoJp7WsxoZTzvaPUuBiCh96",
  "key13": "4YEVkY7PdjvhuxYLD5KdKrHyF7r4cv6AM85SLDrteB273BgyYEtP7swPDS2j8daywV6CM7hdvAiZtxW83unNNqSr",
  "key14": "MS683H7gHgHkhuYvuGU8LH2dBpaeF2SCecEWVtUcf3SFiXVjPxtXEhHni23S5L4YsuQzjTi6GLNhqv4VaFjTyjb",
  "key15": "32nqcvsoavsS4kDmk4VvVxxkBs8FuTLiL7R82UDupxNyztRqXKDtrDDAs8LJ2WL7woJZsVjqHACgAypm97MPCq2B",
  "key16": "5K8iM6kPVNP3dRu8d4TacAFf65NPwTA6QL1ae3SjJNCsFrmRgsx6zXdcLSzR5WpZvXaXukGgJMaZTdEF7pCVyZ6P",
  "key17": "pFjcNsGFawXkXxAyudd2PwryFsDf1JC7Lrna3fbpf4h3cGyMbRwNwUSjQh2toYx2zKkgYecAjwRq5g8WxhbC8vi",
  "key18": "WX2M2DBTWzK8jpb9Qdm13bjUSCH87CrnVCjvWfHjqvsXwxC6GaiZVqTveD4Ux2hUcN5FgxZbbFd83dNq7Bh71Xw",
  "key19": "5J6BD3DJSUWqfxiTuAZJEXEGvPAvFeQ7qNRfTd26omjczRTsPEkSqZBJ6U3G3uC5fi17D7hgv9TbRxSZZa575htp",
  "key20": "2roUoV882YyXUs4FV2DHFPdEMFNGrJQCwfkLHwj8Dkjgmh6t1wCyM5srwzVasZpx48XKgXsMoZVNtgwHViByYdxa",
  "key21": "3v42jnxKdGmR5Kd8GC11xP65Z3wBedoikukjCzrusu2o6k5XxMFcrwH6TpNPmbtywHZEpS6md3SbJ5kh6ZWLGxnt",
  "key22": "4zhzyFPVQawn5TwLPhyiVebLvtSAbKmwt2hbgBF96NcEmyUJzJdDQDXe27UkwVtBSw7Q867pca6XgLhAkEroty4w",
  "key23": "5N9yJiVbfLPqYjGspdaX5DLiDopgTMdfYnc3soGzS1Na8WBSEyrxqJvXBT6v1khDaDKjFzuys3f1Ci5cSQCe12ma",
  "key24": "dPex3FjZ2XLA5VE7ozC7dpU6CataJjrswXQocTBNvMBbHaJ1pPtxE4FzPyUZceUXF4eQALWExjZ7Z1wN3y5avVN",
  "key25": "22mnkKAe5Qhgo3PRvo2GFREnLj9F2SEj3K7CEZfUgaoiVg6pKQe7fgbSpp5tnrFE9hZTfiBM6SVLBnWRoeTHnCZQ",
  "key26": "3tx4B5fq2GPYPqCZEHpzBEFwEGKPbRPkkCcesnHru2GbqXoJe2TVhPBb9AszM1T6sYQUdt2QU33EKE7q3PC9ZTPc",
  "key27": "2A9uQPBVyZjUBVegTAngyDfYqFoNu3wVifpmEA9ZCDk7qoBgkGe3h6xS4ahbYAuTsJ9FU6KznvxQVYn7bRvabmNn",
  "key28": "5cswixEbK2cZmKQa8uFdzv4fv9ugM46N7pVz7XnsuCr2kVUxezwRpzsdiKe7e1Aq6tofqTHocW2NPfjK7gjPoE46",
  "key29": "3i3YkgP53ffaGYD6g8bCyJyVs18XSpjqgkkrE12kNXTSk1PrsyzcCwtco2EPU8KAfvogs4rBCgSpVDco71ib3Xfu",
  "key30": "eMT9vZxj2gKPxTDFXAeAFAmdfpzatRUFz3jvqwXb2qm7bBpKNVwvZzJDjJ6Uonr7KAgMaZEgRGoKHkm8eoSXA69",
  "key31": "2ztfr5s4oghkhwqBwTn55WuZNV92tr9Ua27tUaoFSSFhAQy1zcKxXkm47HS8M5FAtQgFCEhFkztGYsfiRXsBmkGX",
  "key32": "4g2XeDErkK91CS774CpWDCr85RQNpa9Qcq1cgkMFt6XMY2AUmHkoqqh6NzdG1hwX5PPyngBTYMEcJUBbJJNQNSro",
  "key33": "216m9QR1H413MZzmb7HzUfhQ6GydFSfGtpp7Vqj26gVJzwibQfX6ULeEyZNV6V81ae4QrvK591dvuKQQhNos8ucH",
  "key34": "56b6tC6hMxczkBEPUUspBrCc3YU5MqKXKzEccbjJHMEGhHjm29Gq5BGCkDkdwFaKrxkRQupBWmcG4JyqmuvcZJxJ",
  "key35": "2y48219xYv92A5zG2fW7ytvCfBrictv6WSDtkZympCQAuaiuC4DZF1cWynjNEYbJUFFnwChsL85WsTJaZh1Pdsei",
  "key36": "FLiJdiwmcFXuCV2dhx8S9q85MjPjrZ6MXED5XTpRqT9xshDNNmufUuXUQT5sgcsKjVwHqaTMSR8HcysJx1mAdBj",
  "key37": "5NRwJfzUApmdiazcZZFcxJUPt6xdY2ZHu4kyTVgRSE5UTaPCuqtXETHEC8jfbL2vzUySFkNAVomK4Pf4Fp76872g",
  "key38": "41BMhXTt3BoberfXijddE1iTdsXDtqhWm2Kz8o2zxLAA3sX7kDwLpH71buaigGHS8b6SmBGVvJH3g5dNW3Ya7ZjH",
  "key39": "5YYC6jJK3pMqdthS9CEXbV3d2uSkwCkJ3G1Q8vNLnMsogx9zjkoi27jfEagWbccVvaDz2fdyKcvYSo4DWovvtqCt"
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
