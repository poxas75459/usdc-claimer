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
    "2KreHUm3tySZB1uWqfcqEvCwiuiucamAVF7pz8RhHFTF8Jp6MpGQuE6WwGqpfiXM8sw7Xh3Wgoaq3T77CJz3Ah1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34CEbV1zAFAKTdvm6PyPG1QSBoDWeUkJx9deyuB2TkmJVSCwYLWoCo1nQvFERmGQ1qKS5femnziXGSZy49kbw3pk",
  "key1": "56gefnsSwYp9hM1Gm1R7sNMnxC9nhBYTXvQUoJkzckNji3AkHJ4pXf3P25MwQm8oZtcy5rW1hzvjVTMhySfteSjT",
  "key2": "kVCuB9YfyGKmgoAo95XZhj3zhf7GuprLmxuoM6xVSv2ztz5cZdEe2irht6CCJmWicmhULfmmaUuefNC4iNWH6wL",
  "key3": "79XfwPsWGRWgwEK1t2kcD92q2KxnvuoT3iNfqpjVzNAK8yg6TyXywi28Yw4iHkzBrQojkkn466Hp1vSLr4t36Ap",
  "key4": "3TevsbxscXmRxp3xpkpyWiYiPkT9jzPFRyLXGUGMD6pYKZyvPsnVeLZBz5et4uX31eGodAR4sAvjbeZ7UoNKQ5Q3",
  "key5": "3cpZ2RytCh3NoW8TuGcKrWdv3WWgSbUpRx4qrWDQCbuusQXD9ubp1tFqMPB8C4gUtzBY2BCMfxeCia8NJs29DgYE",
  "key6": "3usgeikbAhzywLuv32G39yF6nYgue9t7QsF4X75j4fBNeWucCccjeGD8YKvEEw15XT2Zd5UThP2ZJcP4BWXQ7Yku",
  "key7": "4Zf4smMwuUkJs7sta4CFgptASYX33NKKLFhex5WmKugqFZnLpLTjAADdCa1FSSEz6ymvvtmroi8kmpuE85y5CUFr",
  "key8": "45WUiGQiZBTPEasTELjpDseyPkGe4KUP7z8Qyxob5gCjfd9TQABWsgHcnv3sP9gb8os9fKGVzo8WsP5CNxEqTEmc",
  "key9": "4vDHjZ4nzhskf8EHZGV7dwU3SaVuEQ7p9XH1BPA4Fn1v164xLPCLfRini1Aa3S34DtQ6FzXczPXNbmKyzGhPkJnY",
  "key10": "5LYS7aQyzLBL9ux6dmg9XrbWjkJemd8tQ4qFmdAEgf2qdF1wXUBZx4Bex7bdc9ZQp26TudZseLjKLK4XZMiPoJi",
  "key11": "5vPeHM4CdKLta8NSLR6LyomxuXGFtEJLLvAzcaRLRHLqv6wnPSrpRzdRYUYbYnBdEB5HkBNGcNzLsCxRQTjq4Sqt",
  "key12": "2vF94yqY7sUdaoucB1mqTzzxR7yN3f9aboZyh5CAVfF1fNrTi4cBuogSYWHSYd8QmfvfVLW2Pnh4FvSCjQDy3qJz",
  "key13": "8b62H7GsrprWywkN8JPyzg2rJgSWLVV9DJpJCjwyWGUY7GTaqXESTk4nksvEUm6nRbU56LKtDoKR6iyLERaJ7Ci",
  "key14": "i1fGfGn2RzZa1aJNsvnqejGyhhAL5iDqwNnQbvFws1uaBs2zG3Hy9GNq6pzZJMzL91EqwtKCKXTogoD8cNui69C",
  "key15": "5qjS7hF9nwJ6aGnwbnWqefn6vE82c4CycQ2muo7EeHh6UHvtyhGb9rTVj5Lf2SiXir7J2tAJ2u3sWEDhAQWjLjET",
  "key16": "3DxDWfVDaMRfeQ6brHDXBxscazdrRKJFo16zj2pobePPSAN6NUDnTM1VRBwoVqLSStThkohAuFbW26VM5swYcyUv",
  "key17": "522q9T97vSij25N34DwJrDU8S5MyF5DHL1e5rRjzW3Cu42iJKAWmYqJyDJndq8W5ZidyXfeHGKDVCqcmbEXxmnj9",
  "key18": "3JfWQpnarU9M3r7SSVQFjh238qz65Z7NM3bm4VLvQWNzr3oqJNhg2UzwuWBvdA9AGYvB9hWcBQBHuNisPzg82rsd",
  "key19": "6YZ1ELB7CfpB6qWTVghE4HrevAaDfXK1QMeSZaCf7Z1mbjX8h36J5MFSJcnKNoxxDBzEv2f53WjKgymRxu6Wby7",
  "key20": "5ZG2PA3sQA5D5TrDL2Hq2sNb3JL9ZUJ3rFJipLat19gPUyZsi7cmi3ttjWDHjMuhWLcEJhqsVKuesHEmEycKiVqj",
  "key21": "2XdRDwhnPkge1t6oTwvawxxtdGMGugVT8QRdjFrHVZKLDD9gwvWPpxj8ys6zWoFZyxN26JtsNmyJXnYpWApzYAHr",
  "key22": "4oiwzzZudDvFbZk8Jydn8ym52zVdXnEHDtCAkDDp9J4Kv6xiSGxzbhhPTGUXiUJzmdY3KyLQVk6poSRzToVmRmGN",
  "key23": "5RF5tELfWRqu4B2rmKbnyAfQ6tKCFvcmD5nPnt1AhuL74GXBvaTLkorvxuA6ESuYg1f69WdyaorDASeNW4APeqx7",
  "key24": "3tCSY5bMDFRWUfxr5AYKaDNHSFKgw7gPBbhaktZ11XGNXa2wa9GQve8HoTbA3n5LSVKYVZgQ22oLbdLs9xZPQYCQ",
  "key25": "2wp69dDCeWKmRvbnWVNr2L6AJ3LYv66eAhov4Qwrpeknnxj7i72YPrUJvmBg87rdTNbScQmxvKVL5WJuPutUZ4WH",
  "key26": "622VTWceV3kA47a3eWKX4GK2BqVWTvt3zHugymoYygihZyRdH4ZmB1fuWc3Zb9NYUe31mdF2SfSsir5VzVMeHHbc",
  "key27": "3DeQpi8ugE1wbAd8spPhEyTkT9JjLBmfwfNZrrgbZ4PuRkNM9oHVF18pUAzU5LwRamp4FUht6d2bGNbyPKWeNbqP",
  "key28": "2BoYjW9hKMX7Kg83hddUadr3ot59yCTTjoG9Q1Cz8ktvu19HbtfkE7aigAJ1SkPbNs5ipxndGMAeLcu1ZbYFB15V",
  "key29": "3VGX1e8HGPuJyUaqsHcg8yQJrsTcRKgJD1jTexB5Gn5sfjT8tZb2QVq3CdgDbAH6TZ2qyLfgCa2UcAFxE3jVc6hT",
  "key30": "4c8Yyeg9SKUFqQiExdKcr1VRFSn7sn5vvkP4x9Q5U81xwc4hPuAtj5coyVFJuf5kDMo51SZKbFPpiiMyVMpD7e85",
  "key31": "31SzQ3xXdkQiN9pbxPnbLtTLHVstTYcfUUjmcxmB64bVs64K4krZsxdTBdghDL8c1Xkn28eJ2BnLZkcdmUUHFqwD",
  "key32": "ofPQRrFpTigBqHQj4KwXZpgiskc4dyyp7nafV3aJZD7m1onR4hGXTL6MjyREBmpZict7DabS5nbM1ChYQJmrpqY",
  "key33": "4afgS9ZfVLJeqm4rhgAtLkAmuL1i9biG7WTphR95qVqEKkWQfaekENmhDi8WJcJxdJXS8FYusaKj8buQjBU1LmYX",
  "key34": "2QCyzLDUpRhhTh4FcdLJJ5HmoXUrASuXn8yYudM2ogsSzDMvfuKZb42YJJG1LJSqexA3tL4dmzVzmeqdWNyptUEH",
  "key35": "5tFQDm7rAusJSesUNTwHdDWtnKX8gbWUYTDYUk1kEqiUu1kyguEKoHbSgBcsKgEXMJDQB9VTC96pUsvio4FtG5F2",
  "key36": "2MemWyoizwrdPQCCznVKYrSWpioxxLgYQSmXhFvWbs3YfjeUf9ccmMFzoAamsfoSpcGeKMHcBeJQ2Q91L5dPkrMu",
  "key37": "5ZzynuiB8Ycmh39vZ4VJkqJaFa61LHdhX5RLRV6Uf4634kaP6ytuZ21VDbVnd5RoJXP9dnBmTj1cKao4F8S4cWj6",
  "key38": "2EvFXLsEZvKYZDs7WW5L2oXJGCqWqFdLFiqopAVM3TyEVBJmSkUBZLkuC8z9aueDdTRxo7EmTuAKqVFjyETUZPyf",
  "key39": "2TCM6cTiy4H3frgefhn4fgtZT9su6GB61WBuPErs5wKGgD1YBfqqUXCXEQNrqhGEebJChBV4ENtD4Epmu86oofVd",
  "key40": "3VkumEst77ABDfsExeMk4TtmGE4DH1fdGneX1iG4bsgGQFYLF3aKEXBRE8A1rNhvL6JW2wvGqh4MiXuhgYu44qs2",
  "key41": "GWxPJ1tmXQEKxCabsYfzu7BLsKVzsKgie9n5jiE8dcjxG5KhVMcRnz7jGCYfKV8WsT78nkeNj56BPWK7QXNhHsP",
  "key42": "5oZ6aQUqvzXFR88Lbb9dXeVfNPCKL66zktdGz9mcEt2Yhwvaq8hg5RRo6rKgfkLHtPhcBV4nebptmeKUDswatTac",
  "key43": "nV59E5P94yKYAvx1nTGg1noydnEcNZ8FnTE1JhzhJBer8mkfEXsFx8pTEZAKfgX2RTUeAg86SgUZGUqN1UQHYB7",
  "key44": "CtYSSWwvFyPj4MV3WhNm7efoGW91tihUA168gsTJNsg3tNSz6WnzhQ9HtPtT1x77S68HEZdVfpPTXCLhLpkTo1P",
  "key45": "5ut8X5UY3B9UEeVfQ6893SAUEobuksEBGTD3KCPZoJvWW1ANpPUHHAes5jG4qNNJQwFzbgJB8yphjeDGurVtR3w1",
  "key46": "2LWUiWxatYADTJ8dRHRsw1Hoj5Ah7nbNPQ9ZHWB4upBZC27dsyv4UDxJXvTgxSmb9EN92twLtN4PGNhGGEmb9HdM"
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
