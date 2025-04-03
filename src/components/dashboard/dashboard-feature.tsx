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
    "3cFTGPcZGLHY5UUJNz79qC2qwo41HnFdcDmgmZ5rNyVioqARMvY3TA8LHtHAYnkMoEg1MKMe4UG4HRPffkYRy4V3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t7Se8DeFkvkF8nLYYxLg67KaeiFaQVKrF3KbF3RJfFNzvdoTrY2pAdADmnrEphB3qjaKu4R339DDadSNjWDrrbR",
  "key1": "3p9QDMibQtTJK94SBKS8xsD9KipdTwHVarFjqVJ4F9su1GjH2KMut9hivgxCcoJjVR3a3tpvf4zHPXZWn7h94ywA",
  "key2": "2EKT2vXRNA4bYexz6qc1FER3SUWJm7Vik3dZGfL9U7PAKUbNdrVfZLyxyxgdHx3Udimtvq2WsWdQgpMk6opMffyR",
  "key3": "MZtij3o8UixS2AZoyGUzgHvxMwSvJ66eAWwULEdr1MmMApHNJNT1LSvGz4soH8ehaY8gFCS5KqkP5b2oDNmHxgK",
  "key4": "4QmJKQznjcRLqpxZhbNHqGYZ6kpQYbqtw5XwFuHcZd8RJw1ujGLUSUvpk84dvroQTFAUFRuEFutLhdGwEcbSAHnG",
  "key5": "2bCsnKCoPezGiWyoa5Fz2eRWF2Pg1rodjumFG1o6ag2527EMK825hptr74zG9bXSuJwUbtVRfCuXgufGMjBFSHNh",
  "key6": "38KoVxHncfoQicbSW3qbTzg64ZQUAvbrRE8eQgTuzhcYo9ax7iGsTu4Ln9XjSeHcDDRqv8MNKg4hM3SxQrbf8axu",
  "key7": "zHk7n7M2VLWDXZxd5ZhrZUxY9xhtBEYn1FXznKsTwQbnhKEZ9g6r6WtauCtwJwk3TsyR6VWnDj9uLwDRVUdnWmY",
  "key8": "3azz7J8uH3zcSC4pSBmAiuDutxkTBJRHqJS4tPTMGxVLein1pvMtgmQwE4jYJo2CbeT13ijXA2npnXQB9j7DZZ6e",
  "key9": "2Y4cKnNv6nDkEnXdF7CiZxE5KkribpNTDsUixVc7bnhLLobgUiMLaBv4sEKr12oJArSEZGr1uuJQPurN7zkDe2E8",
  "key10": "2etep15athYWUnqmm6su26JKDs78Z25YQ2GeJi7zDGiuEwc3jznSQPyUNdsvNW9vkjbUycsTDR3ojcUJbsxNoebi",
  "key11": "2MpPyZJSsRoTDotbGiASsGji843mB16Botm3HzJS7E8Da3rJsroVaMj5PqcqoDtHRhUJegoxaZhrodXyNS9tifVs",
  "key12": "38stsaLUT961NB2vfinJpqd4kLGn7DyWbBMh8snrKfALNkDrS7Rk87LNyNb9dReDnRSPJuaAq9FCbz88Zeauf2J6",
  "key13": "3imTp5DxFCDQqEu1hHowPsnYPm7TeR7r6m3v495LL691mABLzPJ8NxKs5YhN2vK2Z2BtrvRPshyA8AqLBGuUc4Mg",
  "key14": "4YAvUdT6aK474JA6TNPDJe9VgfDo5rHepWtFNfyXNpYKx4ncywNrjMTAkCaLtjg9EFGkZhYnqNNTDCgcbGdUyTHr",
  "key15": "5VDJqdP43iZAAjqS49eZpBsgW32tQv3gFpfs3sAuuYnhMpbZTkRcFfC4z2YjwgxXSmvLVSLKh4eMDedYgrzhF4xf",
  "key16": "3d36J56dJfLP1jhLcpUT8j5z3aHUJzA1To7QyLcsbgaPXrDWPCGDLXAE79hCfjqeAW2U3ZpAmfm1uLHkfiN8F57H",
  "key17": "45fXf4ZRthphEqus7pHF46UxQDg43brtr6jE2h4UG1sSHKKEB6xKyDTs5uprMDupHRczoXKxsQpWi9D6gyc1xBBF",
  "key18": "4ZwkatVvSTFV8Sx15Vimn7KjNqe2duRtWcTbfdoMBy1xJ9kxqhZiup9E4wmd7kw5ccP4YKDrTTgwrsiL3eQjYzkM",
  "key19": "SmvQ69hCGhy6jKMh54QZLgjrNrWCyuQGimTzEY6YKMbaHXo4GtZwByyb8zMUERbNSKkt1WXFWyqwf6grKL899Gs",
  "key20": "3TL5SUvoj7gP5fr55EiVP4Tv4FQSLHqHYUnEf6hfZSS5CQtu47HMfdk1WZ7RBdAXMyjtiR9sMSAeXaXibXRCfx5Z",
  "key21": "rSCazntcVMcyLvf3gHRMnTkDTLyK9Jjy63DU6VeLD9Z38dF9AmMB3serP4eDo3Z5PoFD2u7uJ5wBFSQUf7CPMSa",
  "key22": "3bxCzFSuuUQdorXdrA7LJuFxubZK8pnAy4tAybNdkXmSUHn8wEJmZtoh4nRQ7kNpp759MLhWcgYw7MLcnwcD6eGe",
  "key23": "4KWyDPcMRozs2xaqmPX6tKZvJk4XyecZD4FuUSp1NwN8LqsmSRipR8sZ5HN4UzzFSbr6FY8e4Y8HSJTNMcdUHfMD",
  "key24": "5hMsp1BKxJq2g3jnwDjjVn8tuZmWBNE4FBJ8tNMz578jPAdDvHEUUTbgNt3CEnQwWWZLCxTNKQZPXRMEb8wdgwSW",
  "key25": "3wt6ea4Uy5hffDvaj8A5tj5oH47KhsBvNHErvNcB1AW669swYXWxdhbSJx4V9muU1xGtHN4gV12CPEAcGuigTt4f",
  "key26": "5Vv7P3wBvyrsCnNYrh7K1LAfdAtqBb67bWrtxtbPaNwyLGTvpS4t55JC5a7mr2GepZjMfsU56JuNnGdHUXsQKVrp",
  "key27": "2qNSVUHiDrkyag1jsJofd36eNeQi9XisSt7Xw9VPWXRc7F8DBsU5enaJA5nM1udYvXhzEvDX2bLLZYFxrnL2Hb7y",
  "key28": "3jZKLxnPSMxgPvHZkYfqBRdDFaqxLKHUjxTcpwbN2nZZ86iJhHhwqUkZop89Gg7mbuuo5ymp8gTzjhaBoEDK5Ynk",
  "key29": "593yzpEMZLGdxLa3YtZJCBb8Q93pemjLZQ7TRJHohCicveFaQvmXGnTYgLYAHJhjdYgoxprmYEFzv9gHh47HwLmr",
  "key30": "2Xx7iEjMFcpREfnsN3YF92h9PteG2spLDkEoHHx7ZYBf3ZMpnPAHgDynDigywNvwfHTrvxGioFR6huwJ5KWa2bFV",
  "key31": "2hswivoLwTYYcuzinSyP5BAuzqRR7x5tSpcPy3GcW7iQDKmExZGZNkCw37Rr9QEtptSMaSCfwv8c1UdSqKj3Q3x8",
  "key32": "2ccxUvc5dBGVBq6MuEXSKx2v5GAuijLxfVCmLzDkXTqggCGk5DwreGkzHRbAsD42aLoP2MgoCd6f9nFf6ArrQjce",
  "key33": "36cpy5HYdkuvkqUVhBMHgoHKbKkpWtCqGGi82geo5SxKCmNHFdgDQZYJ4fgBcc1G3as8iGeAh6gtuJYhdrC1Expp",
  "key34": "3TrvNCCDLyLMP7nS2ftSjcFxs2167AVoePyQSYS3YrDEyLiqoP6DrAYUDEkuS5sA6gGzhCwyjKUQb6jdsdoZMfyr",
  "key35": "28ZdoEwCiFbzguv5YY6KNECZDfH7Tg5e3F1Q7Xwabh6QE9dUyHXdbmL3mUyV3dKQKNX1sHAuckxhAgSJTeBMcqST",
  "key36": "3orgZ53TM8FqHvh5tKHYDSSGSsNkyJREVcpb1LfCmro1yL9zCZeHqFQf69GFNRmxRo5FJFatKzY2hnePCMYQzQdQ",
  "key37": "5aJyz5yh4mYuQooUyYyAwoYeYq8a5oruYmfv1rV4pAPr2frM6eiTLqRPmSKvPWwJURy4ZmAA7kefoFv4RmZJfTnw",
  "key38": "58L64tsDhTU51MA4oBfbjXgZSsWaEhRirZovbj9xV27848AfmMKTdsY38SWwBS9A71oarxWj8kn2jKsGDPieXoEq",
  "key39": "oEcY5oneNKyxZqH7vs1AjkHCU3p73dtj6bRfY5xyBxVHrdBVJtZs6DCrEf1BeUEaD92tAZhp41FpwE6zaa8RivC",
  "key40": "4Pd12wwDZSkP2nmT5cDRVCNrgBuGEwXn55SihaL8mYfZNsUAcNKV56TPF1DcTXQadGBvMmzTvJtSqKjPQSq8GJ8J",
  "key41": "2iEepkxncN2DFRLEqL9L2tPu42XV5Jc1Pauvip4LLsu5dNT5PCpsQya8GfD1WLeFBWP8npmCKQpFQjhtPgiZGPEe",
  "key42": "3EEMRBTUwa7tgaSjMeGvSn92cf5QjGMsBUXDyECc2nKaztiTdcSDXzNARB52bwigq9Lv2BbUjeSaTwBJFWWHoWSN",
  "key43": "4RZVKuBW4WiPzNLzddDVVq6rEbCoYekV6Z6rWd1GRTUdfvm8Pyc8Hwd7h75dTmum4qqJ14XNySydkugXZxKgKPN2"
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
