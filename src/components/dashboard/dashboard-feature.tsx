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
    "2PXMz3Kezy6pcQtHswsqsMzntSntm3CdfJtKv1DDjPYSX1iLuddFLAWruxjfnMn8hDikB5Z4BEe7hJyxXT8zT3kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h4rXfbkfhf3YpwT6yXwkaxfc2sCA2v5N57EDyUioC7AJ6EhZWtepDL1XSWo6wKBCZJ5wdy7HKjjuj6vmHHM2HW1",
  "key1": "3W5621NZm8FrJZghsFXPqKhdQNzEdVtSuQtX5EJpcL21p7Pa8iVSEesNEYdUXctj9imqBULGsWQYvwXGusMC5P8K",
  "key2": "2rTbFdFbZ3yRM4sFanR9fDBBngxqYbofXW1ZRnaCPfoiQGbdsSCwNPVof5nJbs7fDLMNrf6PaR6RdwGsBeCvDzpe",
  "key3": "4VJ4ZnWEFxkWQ5XF86tWSA2A6WgXnM9N7TAbiXR2K9tVTQ1BVHjP1Nba6knMxwCcwpzXwRkWhdr1YTHTFFMTz68V",
  "key4": "3XngxcEG1KeLmyQ8BdbSkxTvFfpGQhehjmEXpeRvnXSoXqQs17jHfjVdn47ZTg6qbFevKcrTbgwWHm5138K13Jv",
  "key5": "65CbVATV8kNSKxm7XKFnr3wUALgnFu36qMa58hRegvMkJeqF1tr7uUsjWg3j5RBYrfXTpFgb7qUcHQb7nhNz4vVZ",
  "key6": "2Qg8kEkvUJ1TZnghX4iCGUE4pQ6KDw2svJ3Ks9DrFpheoHsKimfpoXcTFgP8hvYHEJWz2Py1cBFNRDi7UJokH36R",
  "key7": "5kHdR6q9n1UbwGMphSs1BqXfanCsikYsHaEq6gfgFEpAnXAyZgJqMq8Xob39Bi1MkDtQMAsNhWtvd1QuN1rwEEia",
  "key8": "4WkbaryRVsPpCz4xBZRStFfDmiX2pLdKe4iC19rKfrXenrBvSou7gbbEhPWnGZzA4Sh82hyzqXNzQ58E49q4efFm",
  "key9": "3tvVNs2PMSvS7dzjtYiFgJ3d77buLURMradwryjBm5GppB33acgNBT25w6ht485hcVrMcTue9DjB77KEZ3g5kkMt",
  "key10": "5h67sUv2aq6nFET3GjUEMNKRCNcj6Q8LEhKN9h73ycRQQksi73nQQLRYE6BphGMNwnPaFfbKgbvcYGr58TVLN7nJ",
  "key11": "SeuBV9rUqmJa1wUqbSTLW3tCadrQkxWtGDvvXT6ie4sSe2dJkGQeip6iKRDedpo3JZQGkrTyCTamQ5Dxyw1nR7A",
  "key12": "3XXeZpg5LigkMeF36gcwEJV7RKcXqQSkMGiwSDYzL9DznGsgHFeEf3z5XdHB5HWm7Nydkje222kMcoGBhjqzzW6c",
  "key13": "64LnY9ACbtVpqWGYt4y2QD4DaTkb9YhDgo5Q85PfzfR3VEnoCFCQDu78LiimJBfjBimB71fcf3gughrJ73hN1D4C",
  "key14": "NrbkQBaUvRvCzKN9aRQypnmX3dkdX8VXyikSEeLKmjaG6MeWajQAyxUBNDisttaQNVKw4PuQ928mSRCYM4KCa9K",
  "key15": "4eBizQ2VgMUsAntEveLEzm2hkdXA6AXqokGbqBo8zsd5KvNMgdmHL5mkMnXAB4wi93JtkpN6s34cMMZEpbn2vc4q",
  "key16": "i3X2D7JPwuSxMs45T818ufgqp88uxv9PoM7dauGEo1tXXKiR8pNY8eX2zkniQVTYD22rbSF4pMJtbstvi3mWmJv",
  "key17": "KpLSVcnGHAQ8osubgXdfGx63S4TmTd7PjjiAto8BzfWxwUZdigVrht1EUwiByrrL8dP88BH2kcitYPo9tBsc4ta",
  "key18": "4KTMMzMZzevqYnJZEbbbGdWiyxiCVsEuipuT6xZ7kXx9QyYqX3RA7rdqK9tFSqknHASuU7FxdQnKw7BgmxE3Gt9W",
  "key19": "3ZTiVtTdjYDWohLUeJJtaPAUA88DkUbxzE8qe6xpmap8GC3ssyRPTQeU8Zya9Src8JbG9FvaCybcwsU6YaZZuW19",
  "key20": "3xHj2QMUyhYJZS3XsCkpQrcSPbhFEDFy5cTJqgw8n8Ru83QM91ApBZkN3FuUYeg6WAkqqakuKavgKeNkjUEFU97F",
  "key21": "5Z1SJmb5PGrPcmeT6V9FZmBcaNw4mYwTNuxXy1vUNNsKHgTf2Bfqyzqt9Xpz5dJqcRbRohcrF8VmDqdq5CC6TycW",
  "key22": "8x4kiUT84qKWMwMbDaWLY5K4cFUnkHuPcXT1iFHiaXpR3vsDaobx2maF9p9xe5y7ruffg5JuMFPnhaCy2gfjfQT",
  "key23": "3tfMPtZAipXrZUuC7frtJVqJkMFA4wtdNG8MwEgdQtgsP3BujeuaJfMsR4bTUM4P2zch4Hduv6J8MoiKGkH72R2E",
  "key24": "5n8bDVVaa877YtjN2Rw7tjuxWTd1gNVVKyg35DTas6bfFJYXbX9puJNxCE4ZNPRvFtcqAWAiZ1hEceMJq1MSWD6E",
  "key25": "Pn2xXoQovgFV2SWqMjF5BpSBLA4TyY9PQM4JZ4tWAm12Kie4zioScHw4TaNsuDGFdmf9vCY6AmsMCCFY6jKE4RV",
  "key26": "4Hjg4DGtYUFgfAcyTQMei35NXpGXttn1UBVUHiMfvmuxmjQqQhsoUy1L2eJsFYJorh7PK6NdbEdbsudqWNxCbCGC",
  "key27": "4Jv8JC2JCSzQmvfYW65SduPX4Wa5DaYA2jZWjRPvxKHRYSzqVWfKmrVdVpuRMsgR2B3vmdu7NkgQ7HbEVPBp562x",
  "key28": "4eUTCieR3wwHWFvDDkF3yCDtNyYB7y3TZF3Lj9vdwe6m8e6LrNGfVikWHahZew48fyCUfX2J2W54qLZn8YgZtdVu",
  "key29": "5SEyFH7xuvmVYTjAvCKVPX7H2EZjpz1DBMgy2yZ8XeXjaXmrTExLvKTCfB3SBddHGP1xrYf7qxHchN1nVnRqpC96",
  "key30": "JNQEH6CCbds4BH6SNPgJkGAXDwZeinos6ZF9QT7vpXYPgSA6tnXkNxwwo2xjqdKx452WhaTRPqdBUxUDNAC3FAt",
  "key31": "7WnTMsgzhGyBdtFrVF7nGfSzdLL3yxmAVhAAKecaGzobWd5fVc7N7nkBEmE6PYMRWDK5n2cQ87cvZUabLZvFMUU",
  "key32": "2kTAzBP1QhDFA7zYTmrAP63E5H4CjXCRCbqvW4cPUQ9T5gDTzrg2zuBxmadBQyhFLpcPNQNT3YvVNrCK2TXX6GFb",
  "key33": "3tyGQo5cLZRYRnkYmTDVEUiGbcriRaSH9ZG93uEWrMX4TUY5SbMKn1LByybc6tUvhqpx5BcrhL2Ngs2Lk4BN7KVD",
  "key34": "kR4aqJ8fQaVLFVmQUBWHhDrwPvXTaepHveni51bfGsqe9AWxA1R7MUAhqm9c98rvEUzWxYX34tYaCciuTP6Aa89",
  "key35": "5HBB6WqoMJkaWNSHw8VDnaNTy68ShqLcqXP9ikBSe7zUaDDxSsM1gpf6m3vousn9tHBiT45dGdva8XMYFS7j9CaU",
  "key36": "2fSV3wJ6h2fS2KV4JVgsf4mibGFSqGw75PgMgbWkjmCUprR9LYVMc7tSMV1ydSaSoBFeahnmbPih2pDkM5Pbmq1o",
  "key37": "5RvmLXPaEe8u89CEniFBXN5virZFgMHEid2yCZekCqAsZxc1Yygooebmnj5YHhncf71gyfjnTKsHfD3w2PCBdD6j"
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
