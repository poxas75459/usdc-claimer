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
    "5wmaTq9VUSV7zxtVpYjmJR14dpJ6Gj3FxTuXdkA8w6groRCgV91KNmmH4466M1Y3katsWidHEAmUQWf28ZJaKMLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CdpUNvVKLND8Vn7jYzHENCK4LUYPNpfGTwAysN4LpM9mrXeB6cDQCrQ6qbUSHpzxa3hpRjbVRY9srHdqMWeebuZ",
  "key1": "5EcmiZceNR5GBz3MRwbUaMh88UarCbzg7c8uhYZXPVA61FGn5jMueACDutyt9chFwt5RcuisMWU9EmGehesc3yzK",
  "key2": "3jC7snyGD4xN5N6WVndPvseLA96PvS9kFY57DvN7TrD6UywEGhB8zBTh5jB8VhfUzmUfvrz65zGmLiW9GUjZudaj",
  "key3": "4A8KW3isEguW4cSQSMLwDaDJiKuFvMucGEQMW6YzrwgBHTcwLUc7mA8eWQ2FVq6gNVh9jymSDjfCzeEKZCvEPS4G",
  "key4": "GcwWBxuFUxYW5aMV5mog722h3zaXajBx8RvQPC42F5APCWmJAvikEeHW8VDBWYDKBdU2gMyzY5ZLSbqMZJT4CWv",
  "key5": "5kgNt21WawtRJhE8vdbm2eMrAzoqLAQwyZUpetvyE8qGyT8o5rmybh12hrhyUH1NTNRJ9rPd1RZRhL6YjseP8mb4",
  "key6": "5GuuyTvU5v8GGhQK3mfRhpB2bBTqootSyhfvXLJCEzfDm5oaBWLmiE91zTHzExRnPuZTghY11p9dS2NunTQpV8Tg",
  "key7": "2RChNhqmd2rvjtJGzWHkvco9rkFj4LEuZmNLgn9cNiNf1dGSxzjsYMJPRuGqNHu5Tw6zBoQumJ4CbwrtrnTEvnhQ",
  "key8": "oKCemznbp7yLchADrmUCSkaUqjoq8J6P9Wxy5xVzisRug5i5C4FZU4WJQ9frkSgNCfUeeVHQqqfTgiX2hE7zfiC",
  "key9": "4ErnJcSWk5LiDBgczVNVmsEqLLXF9L31P1jukNUtUSGssVp62UNdLBLrDYbA1TEbxUmxUqWAFGeGQvZQJqbidg7y",
  "key10": "67iyvfB37ATo3c492LFLCa9CWJ2yjnLqESUmDv3u8T2myZVVBsrrhbZnP1ssULxezssCmPpKLBreVXtjv4gQAwsX",
  "key11": "48eLWNA63z5emMAFLLXv7Jo9XyiT8uw584tBQtc3ZD3agdTG3rncBJnAU4sNAgWZooNp37nJwqZhSm26vjShA4x1",
  "key12": "2PG2gtxxJoPYL4RymzoEtTHMSRXL6oLXarvTCoENyUTvSdyX3Q6u4W3ZT4Z7iEBkXpUvybcakq3x9Mtn3BQwj1es",
  "key13": "fEzCaPNEZng1qHWkvLVmyHmCEYEtT286t4bLD1sEFuNKzSvj7rECubNVuQu4s6VyexDYhsp3yQmijDCfiHC5uFA",
  "key14": "iyoyqcH6dbyAWBB7fZ76xtqRsr7HHLnTJiGm3iko8geKWSBWmUzmjkY6TZX6h2VtfiXphPCg4xeBDdYvsQLVsrq",
  "key15": "5SFsXtJEMWTsfiWzJN7JQwhJM5krCwZGtFFkKdqHtWMVoRXjetY8zVVqGpq6PMGJR2Yyzg2xyKBJofXBE53R226B",
  "key16": "3hqLbh3auzzKN4VZnB4mtjZURXvGU4TUPYne5pYFttPHKw3KCyqzFF62kTorsdVdLfBiYQWSBAFBDTfDC6aSSfZS",
  "key17": "2DeX1YhBvggYX4HHi7W77uZRGtfpy52uvyQtpbHYgsHHpCyUZ9ZAa24ACFEDqR4VSvucw834b77293FXKfse3tqN",
  "key18": "AQU5VHptczhajU8CAg6eBH24sbBALHLH5x36MNgZbUgyERCfqyTuAy91tgWP8VnhhomexqzfyFpmMF1mAh6mc3t",
  "key19": "28UmoUAVVyGj6jfTYkHhrStmd4Eu2CeCUWvrAxQtsvDbo1czc51MFMwNsPofoS42BZ2azzxMTdBeYa3wM3jshfJ2",
  "key20": "4GgCG5vxbnQFkDKFqZGfzM56J52GxZBHQud1iWTvHSmq5DGjfyWuZQfaC3DswYTptQALGzHuPwhAvpZNM67hx1Pn",
  "key21": "33BfySJA9mj62pLEksJFHZSyJHVVptNQpL8ZB1ktSSXpLWJtnA6D7F3T8Gm986St3hCYABZkD5ZQYFgsx4c4s1ne",
  "key22": "3NiPP6puVSB4dT2hK4AkgSrtcRrWeBYx6iFXJSw38zcsp2iLC1uuPhJtmfcugRqvTyESeNTuZmCbyuGRPY5cSqXa",
  "key23": "pUk5MJpWWdBs3uiFo6pA45Bp4a6EBANFZgCp1D7CqaovUC68SwitmHojavphvmevSRbv2BycW7NdDE5KgoxLEE4",
  "key24": "5cRfRH7jCaFt8s367ZEwJwpuwAnATFpcTD8ZW4R4356NxMUuZdKymPeCbeeJ5GodAKwsqecveRgeZD9mHJwGSKJM",
  "key25": "4pX6Yv2DFh8d5fKNS2Bq5FGMb3x2ofTHzD91Fn53fC5ioR6JzW19WrXw3oNRA3erRR1vk39N7T3SV9u5WJZmW1fh",
  "key26": "5Kx66QnnAH6bvU7w9oj741hCVSV3HvvtvKZQAJv7YgY1xJZA4LCYXSXhEpzCNCtR9PwztNiCSPjdgt9ora9tnCFG",
  "key27": "2vMqttcyFW73jYH3zxodc6xH3y8CxMKrABTWps5KHGfaiZWEXp2b1jWnyyaBATxNg53hsmvumE1EUFoRUy1FXDfA",
  "key28": "3UMsRBqJDAEtSXWTZJa45zPGiUuwjnCjngJzozUhbv9Aev4VmLPQxdNHvNy1zv3WC7JtdSV9bfwwQXquKZDX2Kme",
  "key29": "282iRLRZRQiHb9jbtMFuuk1wEVWazv16RANW5fJyVJFixuLxcYJYKBzbTnnEbkgcf6mFwFqUPE7yM4VdbMf4ZjH4",
  "key30": "2tfyeVay6S2U8HA6eLg5dgYTSLHPrDhdHmrr8634oaeXUrNB8z5s5mxe4R3bESxXbNQwsk7ZjbMFvtE2eU83MxjQ",
  "key31": "9j6vndqKrqKnCTYtS2NdyG1kS7T5Y6k5xyFHzSDX3sCmToMoUvQYdm3EPZ1ux3Dj3CZMSayP88rxSMdHR6RXCKU",
  "key32": "2oAtUd23VKtKKSiDiSNeeqfFME1QqBpXYeRiPAZhmUxWbAQ763wP1AfXyUrHT8KA95FakEMrCAAR9jBVfty5pQgd",
  "key33": "47mQdRgqS7y22jEoJWdeDEc4ick73FXAHsepocenjfoMHPncQ1rc9Te2JB67Zsig3wMq6fTdfYNskJJSC3ix7ck1",
  "key34": "2my3dk9ar7tehxGdamDgyfCxZJpCzro7QG1od1PdTrXmWjsNkagNwZuUZr8x6UaoGmwdeq8wv3eUDr2o9qtFnziM",
  "key35": "5ZumeSrk3uvUv1hHkgXYVLLCRBmcDLCqparRqLq9xNyJFHGH48bXh9p4q7cQTnanjkYkkFRANKn65hQQ4NttXmWa",
  "key36": "3SCtmBxmguMSz5AKBCitQpgyKPbvFnjg2Rq6zaBpL5oF62SjKNsrDs5qFEzWx9YBijKTm9aGVfyqqR55GhPDNtea",
  "key37": "2cADo5MmrxRcZJ68F9oXYXcjY64PbudgFyR341esCPato2KeGzw7UKkoPztTqtEhGR385Agcv5ogyFuKWFZyVo3C",
  "key38": "3KJzaHZQETTWvxwJZpwvigWGcvSb4M7pV2WcSHmmJwymccgRG2vCKJrkvduy8YHaK2a7TxPcBTWcFp2pFpPPGGMB",
  "key39": "4XUYXeq3djJe2ZNnDb2CHaeEBV5LZrWnkN3dJ7ogv56xiFFyYjFLN3nefvfQCjHiC4EX4Rc8DF8rMtXAg6jMRo8T",
  "key40": "5RMHFBq52miJCTBK5U71Bz4GXmCUTxQXWaijiDxzgw8chBRj65ySehf4DW2GogcWwNWeLrkws8sq7QEMZkkQSG5X",
  "key41": "N821g76NZpF6ErK5o8GvCiHmryqy37gtMjKvSKDd8W6gBeY7HRY4bSwRoDvZmstbMm9h7Vzzrfm8gEBBhD4Key2",
  "key42": "Vt4g2vpNTEZ8hGSdGPtCTtjNHeap4W4FGDDWTkEciyGW8D6oDJkvmGXiYcZbGGPBuj6zCGrApcsD2wF6eswHer8",
  "key43": "33TupgLft1maokm6734c9VjTydezZGqqshUjSfiEbo9qzEDaQtdZQU8EkuZ6BNK1eMLbXy2iGDycQ2CfySEPnpHp",
  "key44": "3SLt6P2AtdzUrmyEMBgUufxLzaCRGKZQ8en5xbdwaWic9tamdrNAaTtQscsXZ8XoLufVvSQbcKH3ia6sGUucjcs7",
  "key45": "5NS2QRQBMTKyjQ7gEDHg3xu7zvmQqcUFvAjWdi771zkue1fzQb8puX1Bd8N9mNVtM7nnWZj1S3SgMBtqSyLe62QE",
  "key46": "62k1Yek882Br7RZpLiVoeKDcHyPiyj64DkzWw1FJC3Gu1deAtn5XX3CxhG3P24RpGP7H2D2yzJVCErk1CgK6wpTR",
  "key47": "3fruxDhGC7rhbkto4MkkD1eGALerdMzhHsCMLaYjrA3ANRyj19om2rbuQoJ1B3t5C7QqvTNhWPFLRSFERTL18Mxi",
  "key48": "4WDBhhPNX5WZVitu3RiDg2Qq4zrDoTRpfRu5uvu8xYjkKzxZGeP1ywXXRCAph7ednUGj9dut5yGbDsEKEZQrinW4",
  "key49": "2sNp6DxLyYcBTurBTFExu2vCBy5xXQHqGaTHcEkEBeKLQSkz4PJJznQEcPUcc2vvC9N2S39NtJozu2o4M1NobmZo"
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
