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
    "pbRsaqHgQhbSijNae7M25HHt1sCp2f9P2jxmXaMVxxKKqCzDcp7FradAe4eGZbyjEfJDG8bsEX4Jt5QknmoNqhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3covhAaA1rpgQQ9GTkZmTjFRWTwvqXuFSDDTNKgGCUmnphMFCSuAjitytQKJah1CrhriB7UAL3Fqy9u8VYBv5teN",
  "key1": "44q5XYsDuicohqLy78uSXkp4VJCLR5vjvDEu8hhZ1ZqMhbLZNomnoebiQcTWgFeYw6j9TLFs166LfEtiQrvhAxAr",
  "key2": "3qsJ3sAdQqb6M3bS4QFNeYVbShYDDGigrHcK8inT5anYG3mmyQBXmF1BE5LcEHy137atrdVF5zxpxGzVcXGSsH97",
  "key3": "JM9j6eD6GyZSgufAiS2AramB2vh7FvPZpgCM2D2SxgSnXBegr347FQbdjny4wm18n17vVYXk1Zrpk5pM2ZfbGCj",
  "key4": "5WLybi5tbVMnafgmGKJ5EFNn1mn8gcYWJP8gSPoXQnfJaPPXZ61fVdcHCtfBPAquST4yBe7m58BVmNCZ6Da63qhC",
  "key5": "2288TRpfSvGiSgaRKjffjWpTG7hGMxvAZucdiYgPxsDaKR7FvVLFg9DcL5upLfcfRxL1HbtuXeF6suFWTwgu6Q7T",
  "key6": "offgUyytz9aKv2p1xNETf3wvrL6RoXVFwWuSf2taZEeJ2cakiBDK4pM8CcYCeQgSoGMSnk3KWdaMzzebMCqJspn",
  "key7": "2tDDVGaiMaASoA2bggMASD2ptN9GugjzqvkFjf2iRe3pfLHPkL1Kad4d3bzTv488e4FbrU6x5fT5HFQXS1BEVNG",
  "key8": "45XPgSdhftmm3ukw4VLEr3QhKR532GMV9uL86qnY5cVd3XHxFmzBNqgKTsans8cJ5UB7CSyDVA4CqcUsw7Cb9fSc",
  "key9": "3QHKx8zqXEq7tCxZWkA9nNXKDLPQsZ22E2baFAYEUcLSpL3evVg31RFiya46yncHmnSjzAxwnd5G37CquuMLxvRi",
  "key10": "25ZiDtF7E2cWoxs7MF3G92xBiDTdsqmS4FSeypRNFgWVVbQQoyPiwsMRGCqkbe9jjPLxnHQjMgn2ayFvCjs8uAVM",
  "key11": "3nBCjHXX97mE1wg56Y7uNPiLWKSXpbcPGGyuP72BtGdzgvDhMS8oMik1mzDrE1z2s7gYJEBLAbgUGvUKtF3TEysk",
  "key12": "2YB1SPUjif5nqFKVCQ1D7FrTxZkvBRonYYBwLKLMUrWqfh1ZRnJ6FEMRaL2kwcCHfsLiQuyWfAP8MqQ9v6Sw8x2q",
  "key13": "5NqTmcc1SjUsYv7McHzKcn1pcx9ev1AkyxqatzpXL7YKy7eGcvDvhTUk4EVxdZi5p1gp2SiojJ55oZ54ufBbNmgH",
  "key14": "56kTWS5hDcYpoonuXju9EhCqfQDfUaTspvonpZz54614C2Sg9XDpKi9kkBLGvN8Kq6LWJf3Z4QcBogKZxhK8Ux75",
  "key15": "ysp3DN5baeznKL86JKZ18EDSw8Se2rebgeoPy9bzDJGKPpTdfaj5x6ktutBYLhj8LPiv2s2f7fym1tjvg5TM6BU",
  "key16": "5SEKVSFR6j7eXaQ4fRBj84o6o5oA1epV2BTKQJgojMmS9RkCEc64Zpw3U7fjvfYTFeYo69ADGMnix1dpdnLyz59W",
  "key17": "264pBa4x8WTcxkdkS4ftHXsK3mrS97ZsdsSzaxaAqxUVWJcdqNmm83EejY8ESKSA4chPuGestVPg61DQrwvQtcZV",
  "key18": "5Xnk9CZvghCsAjzfdYwmAJoJHKin3ULrzZJ4GUTPvoWyZBCJEwzJsL61qhaZDu6kocopABmM298YMuDQU7Ae6PH9",
  "key19": "2xdYbLdC1AedDXLYrEdCa4Wp52BRzuD5wGpHSC2ybyjM7aCUMBco1bWb2UsZLCoEDQtB4g86aGfbymtLe2Gmr1m8",
  "key20": "3GSP1eVwYa3LNkQvv9yzFJFtAo4Za34DNtm3QQ6XWjGvHFSdwKSNPDm8oaEtcjVaBFech7EnmDt54Y3skMSiuZ5v",
  "key21": "5MEGebDs2SBJqqRKd5gmP5tQ1Ug5ABH9Fv6NpCrxyomtS12yAb2uj7aGEVwBRXWWJfeo4nELnH4ENpWdz52MyTgK",
  "key22": "LHAu3W61BNzLe8iWPJqtU63K5rzEbpGTnfUd1oGcRYtccnMoNd6R6bipYvQiYvCi6ryzp6Yi38CqzKrdjm8Mb4y",
  "key23": "PDtVFkXL2Sfb7BmyevCUQDtbYoJJyXEF4XpzE6WSXqK2YFsYTksfQ2N3hsWq7tfSH7W5XDSouT5FaE7xYsW3Mca",
  "key24": "5igwabjP7nPfKNvKHYcMn4cpdPr2AcuiVksMnkVAN1cR7g8o7rGekD2FSMVWJvhkiuDPvpTqKUERZGjKoiDsBHTm",
  "key25": "2845EuXcvJhmE7Jtpt4XAku6UoJLAKPhDiCSMttmV5vLqYYrzEfJZ9XRvGyBSVqoL2jTv4w6rcn6w76RHzZBfLDv",
  "key26": "59tPJCa8qMwayuYbokJAiU9C5YA9Hd71gCSn21FLaGTvRiXRHpEthQMK77WNtHP8XC54G7yBVAy2eoR9KawjTzXc",
  "key27": "3qLPKH13wDYuBXS992MKteT2UUYdryyA37iaHAsdHkfm2TLa51jvkWcUA1sfhBxpmGFEzbvAAvZLKvgvZCiCwPDR",
  "key28": "2tTrKNpZHCeamN9HhuivANeAXRx8S8Ggdqnsa9mAFJFCHnCbs2YwLEpNnu1228a7AZMXHvYfTziTG2jmrZtrmzjx",
  "key29": "3pUjTJzG2LmrNgyuhwApAbPawuJKFBYqQJuH3ajqWax2bzdAkDfUL43aC9feM9ZG4rBvKvc6sxdLwL799PTdiRrN",
  "key30": "2k1RKk64GC2VrwSU9P23dD5WRrkYEcQafyE4W4df3BkgFdRwdukZmYNrEZDiCUY4YS7iN3SdFyze1Zq4eB8RGhXo",
  "key31": "DL5ssodxTLu4n5ycP3qki76JgAtWjtSWRB7D4cmsEXZSqTM5ybqXPsR274gzfxXjkBghy47Dho6pVAmxBGknJF4",
  "key32": "4aK62MMUZLXQTkkZdEkuXfUqFrxKcY2aDevT6wFVNHLcyFfSJBqX44Psa7SNaa3reo6YFrWFdfYtLZrkAEh3V3U3",
  "key33": "3ouWr6XJPnRw9QQ6DiC87pTVeACcEGVsm26c42bHJPKyL5Mbc5FaLXQhs45J2kf4pwTo4pngnzesjVJmAPrUaRP2"
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
