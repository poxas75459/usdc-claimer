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
    "5cByJmmVMa1Ketxmb9mzub1D5BZiLy7AMfbegBeHqHsAQCG2z5t8H5LWhcvihYABfzAFLt6zYy7VBDFFGgLdhe7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ofy83x1D4ihcciMrjvHuBL48owbNTY22T7BJC9BdMznXYMvb59UhJxxvw69t1WqJXgB61ErzqUuSd42YfchiQK",
  "key1": "4P7haFJLBRwF1fhi5sLKVAC8wa3CrjPs836zYzL8MK4XPNTwDtRWNgggJLpCAit79U8VtzS4SejTtjAiQuj3mEed",
  "key2": "4VEV2ky7g44Bi1AWDBDoRsgcxamPL2No33vnvEHTsDcennFjKr2RuoCFZjU1QptKLJXQsDvhZKrdLEvYZBEzxYZB",
  "key3": "2TYnPCjnwukpxFeabKEFNdfigFGwnESoP8D2D9emVhzFZ9yRwx3kvV8iihUzUDVP5d3wuzzmAsGnZGMb3gkb8rc3",
  "key4": "2tTeqkdKvFDBsQ5gVzzmL6YXdUPhby7octcT33hAzHdc8721DbrVAe83hPTxZpuPiK3aJ9gF3ysiDdVrvfspCeNr",
  "key5": "3tzqJrRdJVMFhT7EVkpnuSnActrnUpyQo8cn4UBEJShV2C3jBZY9QoxkCMhDQ2kr4ZwiA3vhY53FWo9HxUQkp7yo",
  "key6": "44jeo1i9SWMxyu7yR7iAnpKNaePyHbMhT3Rr8WyT68w4K6YkPoY3vZPFhfvKv33TNnB27RxXTzkkxEWcYoMpd1V6",
  "key7": "4M8caLjApQdMGPBWw56UpCFkCVJJtYPJSXjeRm9ocYz2sFGtbJhGU7X4X83yw3gMK8RAqP3eA13G5vrksgK1fX9v",
  "key8": "2MURGRwR68JY84FV3Gpj2DPvYPPKVGyENpvsKUBH7TFFUGcmSkACKUP9xdaaoZ5MZWmDp72uLz6ntzz7h4WCuS53",
  "key9": "4DyuQNVFjhmLgFs2ytG7FS3P4qX81v8wfFwubQP3nBeKgo7URHuN1g2JK2czEnKUMBV8hFeAm32NdTZxm2W2qPG",
  "key10": "GkJrhEogcPv7TyavQAEQ5wieyk6zSpb6oixbiAdU43qkrNUbJXRGq4ENn8Kz5z6Bo86EUMFcyuCHkN9BgtgBvnk",
  "key11": "5XACB2XNK8zBLtFCsf31g54WkvC39tACPbE4RW2r7n3ZTgZBU1t1NtwSwPf7dzzRMkvGzpj2yZm42ejXH9tVbAFw",
  "key12": "2yQVS1Q8qjKmF8RWmcquUiGXpCJax93DaLY7H34fUcsQL95whQJfA2VLq41Hb3acxK8iXBaafL1rTvSiyQ3YxdKz",
  "key13": "42bednCZPKcUtKDVNMFrxeBM7cbGjsS63f6g2Z1mNbzQDENGnryGHxCXxS9VKMnScgCs5SW5kDw5U7jjAT4ntJLd",
  "key14": "4pJpQ9SBu4nGr1itzWKqvXC3NbyNgKjUUv3wvCuBCj97ugWf4jw9k4FH7GgMRyU3Zok5WkRM85yoz6RR5AykcPea",
  "key15": "3paV2iSW4HoAmsoqst6DdzYzxd29CRn2NjJmV86ayRDy934Z6eEpEGpPmDTXPqJKstmXR4LEoyKDPXb8GaBJ98GV",
  "key16": "haWnVM3gV5G7MMK46wSown7YKcVXiLBL99HM5U4rUiRXdJHbf2QUv4g3CijsHHM4AfSm3MHLn1i9HsWhtoSG7RG",
  "key17": "4Lxpvj64WtDb1Zsj5HzcEsFbmQ1vqFWK6LJbmRswmMr1YG5TL6DTKgF3cj29uDyW91Am51zy1f8UmY879K3o65iu",
  "key18": "53rh2PuXMy6wHCXyxBXDQ65hCTRFnoDWdghrootVH2XbvZjRr8YcKYoPeC8FZfxrcvPju1FkNZVf54Mai5piTMfA",
  "key19": "2bFgfdg5QZfruVYfMe76fjdVtjPmeDYenEZqpy69eu4TBqLpmGH9ctiwNVtuj2d1FVLCWUZs7NCAwddmygtWs5Qc",
  "key20": "3qFfUxBzHUXQNzDZrVKwF5nFdjrfYZsHdrfCnDKqWXRhXCCtE1DFuz8gcEP6pm7L1FdhXFMjQBJTcWExEiAkdzvj",
  "key21": "5ETApvkYKVuAbQpuCKXRarJVQkLZExb9QEv2NkX4ED4KzqpdmprvJRPbDx7RBeswKbfNmtBGFiNiJvVQyH4jpigc",
  "key22": "55So5MEuKVgNd9R7VEYH1iBL9aDW1xFRiw8FrzbJPo47vfWedmEEY9ymZRxHK7aF3JfUsvKqSopFAXL88MmAaApr",
  "key23": "5iu6oWko6zVN1TvfGctgPnYz2DNkSKuWVUW3TdnEWwkGKCXvsCMG8wXcyx8kRxskY5L2vqQXA4jjioWopYGy6UA9",
  "key24": "FcNfD3heX97FqvvR9fxyS4hzGojjFME3V34FzVQjwW2t1mTzoqRZmSH6prJpmHAGNKRHnFT43V4JTRAMzDrcxG9",
  "key25": "5Vn8wNcAURaYf8SQKc9jX13vBHXikkzqXBgfvXhXaxU1U1d3BWJrd3AhiYTrAVh1Nk3tqEks87dTpGHv6gtG8W2B",
  "key26": "2giHXXtfLsGngN8BTPYBTGwockKcNSUJ3TXXCo6h6AfkhndS4qpKTHFEAEFP8RPAv8YczvKAx5ZghitqjyDYTENZ",
  "key27": "na3ira3eyV9Lf6XychorpqGyjAbxLj6nMf3n6EmNqHB129h99VrTUp8YBUS6SWHoDU4RPftiSpZBjJiqCJRccJL",
  "key28": "5RUyfBB8JKHk7CyRSxpPohqGkvxtQxBNMcWb4Hg3D2MdwEYzmFeNXnzEiNmzaeQHcWii8jF2ZD98TcbcWdWwNQUU",
  "key29": "4CW3zJBCnmXHXcLEqvuJzENrf9XUxBhNabecTenn1PDTb3BTLVRp7Bi2hWQYAdnuZRteXfE3PobfR2ird5iER23D",
  "key30": "64MJitn3JvpMJgAgEksyNdd7EUETsjYPHLLhoHP2PJSykhTi2uii2hcNG8cGxrG1X7HXFNJ3n9fsVhFS9oEJZ2Uq",
  "key31": "5deGnZ1gzwPcqAHEtbmvTKiBMuMwKzXXv28UA7vzSTNSGZ8XvbpK6KuraEPMSTFJZH74hmVyKGstqWsk8tos8yrH",
  "key32": "2bjSX7SZkPM6eMuGbJLnNb2D4nzPCHxyfxMzB6fnn4NHeChJhY9VYqryNJ5mnEQTR5T8Nk25vZiawxBBe64dePdV",
  "key33": "3WCzapAhSP2F8dXRu9bDRqT8VSqDPJqVXuDHSubbe6J3hXha2fMLDsPN6B12iJXN6h85aafjS4H5kbpDXjDHdQfH",
  "key34": "52c2LQwrBARGVnTBfGoPEm56bdjhE3u1q9SQCx1wjUcdvs12mE6zexyreUj34WwYLnYFv1aPE2UpBu1e9oB1pXE7",
  "key35": "5tz14fZKCBxypnzjxyRAewU6RoBkAVvFxWmyPqox3wpTXEFfwtrV96Jjpd3wfSiATX8VJFBG1kNFg3JVaY4ifNL6",
  "key36": "5LdfCtE288Xg1exzfh8USgLWShSk1WSQrZrc5z3SeHn9a18EpLg1EZ4G6shQarKSjfrmSDfPmF8rTg43wYFVyHTk",
  "key37": "3Lfp78itE9DZKj42i7VJBjtMFnkYJB5GSHQJHUpiM1g6C3z2nk5tEj3CHJjcWVLuYhnJ9V5ou1U75YiW4tPRZwa6",
  "key38": "4v7XGnsXcmM3HnFNF93Pt3E52K4MpJxE9ahKPwE4buvBVe2Ct5x7bbgqGe3SAuFYHukPYuPvxjtw5j44RYDFJwve",
  "key39": "5CnzqRWLyvuQj9JcLkRy6fkqdfj8qM1QTdNBjZybRcuuDe44e8jGDP24zR8AMuxUPRpYD7hpkRaFNLFKd6PSjG2w",
  "key40": "4HwQ6fKeLu1tfFmeVvd5WqcDE4E91SJ6gHuucKujZ4xvv3VPhymoMC5YXhSRySX5DDrxME85Ma33srV2YnoTM8Qz",
  "key41": "zoUegkQHWdzaKnKsyXtzztRqa6uqNaJ8bup4iACHdUjGtmBvUKtpiZ3u1zUg7YfnEJ2DPKLiEP2tK627S3PYaBh",
  "key42": "2keEnd1iMQVNUnZqgjFTxYHyvaYZLEawAXMxYPJijZeBCKaL1W4wZngXjf9D4FYUaS5vK67P5fQ2UzUiE1ZhW7AL",
  "key43": "32Z7dXQpV8eSPipJ79RbHvrYLvzioMoknbt22YdCXwou8gwrBNKaakWH7jPaUWt7RT7E8SgAhiovHRbtZTUrdE6Q",
  "key44": "ufSqAytpHqDPEZmMDr2rzdunjw6e9goktvFkdc8wnrmUTisRAJ5hP8VJ7kLq4XR6jGXrgSvzpTFYzqXNvXoQaYP",
  "key45": "s9H487SkMZidaYJV8gThyVrVux6DnRfpyPPAYZyWzaX1Kr98Mo1rxRc8zd5h93AXRnkfxaxLcu1jRsutZ8C69ug",
  "key46": "38GA3DjWKKbzDn7MQovd9D9hGUAeB83RSVmCyEkNDwC5dafZJGuvVm6t5cUFADP1Vw2ZbgCpvpdShCgVgSQnasCe",
  "key47": "5D7P4gEYpoeR8LSBKHpjB3pfcq57MpBcb1sRXqkPFavVdrcnzbVoFmSfT1Jc8EuGdgMMNvMVsNqozR7rAoJHSyzU",
  "key48": "55rQjxeNWf2feuKqCSEhfWVZqTyKEKmKCuwjNTPmCDcf6Qf8mnbTSG4tbwoh55WQaLvy4aYrczDcrBk8gw6wJm1A",
  "key49": "4jVupsUeEBnaPb2vhbz5MEKa4kpvKDTaBgStwEUyESorEAfRxKdwXuav6Zgunzn8GaQRzRfUJdq5HPqyLgDdr91M"
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
