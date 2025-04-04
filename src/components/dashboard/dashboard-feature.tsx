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
    "218HuKLT9HPqMiMr7zk9jzJ3ubss9FTPezXV7JWoTtWTjYdMV4qseMyq5BrvWV6D45ytKyw3TuWBQMdTz9SuLqwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PdtWmsTwJJbX9uPzmwKdHa4H297jHMD2KhhVzWjeKAv7JSz3g5WQzbDmvBdovPh7G8pZu2SQa2YYUfyXHrdhXKz",
  "key1": "3uFA2w3TYroXFhLKuBnUTZHRPaDU69Y2N7hemR4FcaXdjBmfYnxVmT2C9Qfy21Lt2pHU4Cw9TvHwymEBgPvHLtaF",
  "key2": "4hFmtmyiVZ94Bcyitk2sWGwnqUKm87zYZz8haQZhaVdesbqfFexUFxgfB7gEfooCaX6iy9kqKVKL5YSRiGMTuUKT",
  "key3": "5CketRBBQzrVJb4LTcVTFC4PWLUUkFGWRfFgDet5WfZDgHxTNtG5XAtqTnV86cbEr6NhRkZhhTeA8xkdDXKwjQUb",
  "key4": "CdQB3wb7M8nUybW8XLQnRF8Sa1XmmCWAKxUhVxqHerXLkxc6UroeKd2pptca6iCEZEPLJeTFUA7Pv2yPvHRe3fd",
  "key5": "3J7He7UYhvPyryYK19S2TBXosq31u5wExu4fRVWwRMAH8i5BZ1Eu25WZNWMHpzCrmEMeKAGf2im2GLwkNR5uTtzx",
  "key6": "4xoLyUk9vnXTVtXuX34nvqmaPpNfJHWcHYRZtUnZqb32nq1kTD4AqHPijnpQoBi781z3QEdk6Hn8hiRu8NLJsgJs",
  "key7": "38wcVLvmW6UtYrgc7LJ9BGsj9JS4mHgqoeitFva1CZFiRKT5t6UjAJtR7VoyU2nb7LYziiPPvNUUj4Upo3eFoAAR",
  "key8": "5PrXs6B6PBztSP229g8UxeFyhUwzAFZ7drtFzJAgU7RqSeLikF3FTvjyo2LX71Hz8ULyZdpnWfQLMzXFa5bcMQge",
  "key9": "3jwe3ULMRugQEJJfvZj8wBywuLVeusR23uBeS3Lx5MCiswuyMQZ2se96ujXsbfUHbEc8njMPtNdkmB91p46UmR6Z",
  "key10": "54Eegc8Y43vGeZLqcApN7bZtBXVnPFP35XRNpkzCx24yb3yoDNgPjXStPMzeawgcMSCfAdn5ARjnW1PHMmPRx6y2",
  "key11": "5BHsBAixFwtKFWq6SDxNtdP4zJN1H2Yq2z5mWDu9SjbumzTmcSAfDM2Db49VkbmfABNupqFaNUDBtUP9itqQY65D",
  "key12": "5Q7toBLvJQtDp3LLGZxj4rLsTvcQzgieYKx7B4r5dx5XrFvjS86VisYcsDRf6zdq1AAbCYnMoZrAeZr6vRomnk8v",
  "key13": "5ErFy3G64h4hZpT7oYjKhruakzGxE33qRBhRZiaH81bgNH3m24dSG98o5JiPjW6ciCgKpTdbVY8d2onFPFEp4rQH",
  "key14": "3nbU76sXeGoQ8nGcjT8y3SArT9e1cTbbpcvMqjTJfX3VauiBZz52AsMN88CGRf2jCGcRzV1rGtjtbtoRhet2vspm",
  "key15": "3XnS5ffQyKMK7r9CMGreB7UEUaGv1zzR2MZGJsU1QwQeAvYJbA96Wkrb3Qw3ciAFC8yCarhb287BjhCBy2cKaTjj",
  "key16": "4nrwMHnGfJH6UBmNKSh2uvD94fZPL3N5hvFgPnXr5kXMv8qxRxMBiyJVHTGxL4QziMfHi8LPX2h5fMw2hMAzfyPc",
  "key17": "2fJVXBXySFUReuUWHSG7mQvLJvropf4RnNN8LD5TrhENLTR9p6hThfZMnKCWY5mYe7A7pwuPebDqaG5LBD5u7iNY",
  "key18": "4fuN4kVYDvsYtjUb1QR49my5V3Z11EZfUksTyzgkLSoq8zxr2qzMuncZ9BjHPeSmBWgDL77Mmszuf3jdgnM28u1t",
  "key19": "bd5XDHkaLCzrzaCmCCYRF84n1XF4FiHoq1kuKS7tCY5KL8RZZdVfxQQwUYZuLNGQdu4VhYprYcuee58pJQx5p9v",
  "key20": "3iP9QVLtCsW9SgdWT5MbwarzC8gpUnw3nL4VPm1aW42dj2ACwWDezS3JbMVR8zGr6LmMNPo6cQyrXVhuFajbHTKF",
  "key21": "2FVdJhwUsC2NfHcLB3mkrsBEWbtXt4JgyzHTXkc1WjJb2qKJ4Xxyg3g423fLsdby7SAvvd5QKHJJuZ7LR6cgU6hv",
  "key22": "uNfp2Rptv3WGHd2LYLwi2J8sPPYzbKSEg62TVinmjFiYDsUCNNjvQbMd3QEmSZgPH3SPCxNjSENMbnoznzzu9XT",
  "key23": "4AD5EK6YqKtf2nhk3XS7Cd6vvRecannDY2stgGx9h8LNxFZhZWcLcjpdRdEsZNs3NoQBEk7whX5wffCZkuTKQ385",
  "key24": "3aBtGLMNHvNKe3iLwkuaY4RfrVmzRJ9zWwaXQuoT4uLhrAa7xHHGWrgMdNzrvWk8BasppoupXFZ6Lw8zbeWPiUnW",
  "key25": "3bhFPtj7cbojZ52gyNQSfYCrgbXjeyD1mqHAP1rfHub36izrj3gAMHkPijzEoe2RYdTmjT8uHkVtg4uotxgPL2mF",
  "key26": "56CYbjLb9hXPZDZPPNzVqKdmeHxo1pLP5Nt6kbUQNqpAsdmS7gGBnXSi1wbotGcTU4Ra3R5Tvv2GX5dRGwNFZyRT",
  "key27": "5iJtRr8rEMqLyZj2iLJg8ruD7id8yYdPm3edmz5DWpq2xpXcGY5r6nZfncvuyfJB32zAokqU9esapjrL4o7gnV4y",
  "key28": "2k8GDFAwZgg5GSsEZbi41b9pEPqFWYKoPoiNfFizfDDDXVxxPLLdCKNQwG6Y5EqbTBNKEhixiafUPAYZ7vH5YgfV",
  "key29": "4rcs87jySUwnkiNdhy95mNStHw2ELuYpXvF7hGBAVLEGVDh2hStFJyPpcrXeLa7Tm6AfmGbA3doGECX5XXpRJQvL",
  "key30": "5iGMNPTgC6jxV7y5kDW7yWDL5XFsV9s4yNsJApqqYpUYovgqh8Xg3v7VSf8NnJgE4LdjT1vuVz1uGU9C2CRofBPM",
  "key31": "PmhcoQwDBRi7WATEf8dNM6JX2fqRVm7m1sBQtdSdMihAJVRLRZbr6PoAVJ8BaYrdRA1fjEp8yayU4m2s2Jc3M6r",
  "key32": "HhBgD7ndGcXH4CqYFSviSV9kVUnA37VTERo3DcCcKdeTAfYB9NkQvgQEGUk2ouAafSBeUgL85VYPRdKJtaxLqFW",
  "key33": "fHGYEmRNYZAm2ePMaGzDWVLUPtZLYqMCqLiKeePLHSvFRCLiT76duVa7htxXNiPVrddUDWUoMipBu1zvi1ctyyQ",
  "key34": "2gWr9r2c5n5NdZSYCZgt13FpjiT3wdnf9ZQYpZadLMbQ1Sr4FtdYCxKGEvMLYJpb4G7PpM1Jy9MJKBjesKuTM2dJ",
  "key35": "3YbLbpw9ummDtSyVkosmevKPgaFmhfoaPh6HG591t3Joi3yvH2DPgENoHy6KwgtEBkjKdRhLuXit92AWiE6xUhvM",
  "key36": "4ELLFiaAmyr6xkLxU7MD1RapeHqhnLMs5V8kRAiSk1ZNgiJBp95rMX33uGapkiwFKuHgZ7gfbJV7v4kBsE6r5LAw",
  "key37": "277T5nXdY5aunERL8mobqjfNLvT3Ec1xWy5AtbHX2CeaZ3wAJf4t42wAvhBZFTWHNipyKPdTc7273TAqK5n4nMTo",
  "key38": "rJBAcpLHt54UsCiHpeuZ2whHdSg61J3qsz7E9zo9ZDUt2fEJihGc6okvQ4VRFUcSYYR9a7tcXSnCVbCHi4nAuxQ",
  "key39": "4cd9CxUUEQPaSzo5YjzQYKEbX2gsiZwiWiWSyhwjEVZgRnJ3rABDJeNFnLUWtwtCwwvze4eNato8sm7jQrMfJVUa",
  "key40": "3CAr6QaMdM43gtrgS5wQTjGcMWZirEy6KRXLoxfePi41pgi2ZyuaE82zJUPEZaXBr3pzcaPAhWmJF8XDHmJ2GrzZ",
  "key41": "4FYSE3rWWqdvVePe9ejWb3Pyy4ppgcDzFheDWyNGsveUw1we3SBH8gKzcmAGKkYCWHcdwUypKomv6oPh4i1a39cr",
  "key42": "NQVndFmDAq46Ddsqz1dEpKoaR5on1jRWcNKf7AgNFN4ZSVzor8CKAZb97uz3mNk6yB86MQX4fWtFzTXHeWkpwFv",
  "key43": "26Gvbg5zVupHDrKWbDjHkkuhFLjvfDSyshaD7xhqbXAmVzuGnozGyxuqnn4kDjDPfU3LLfmKrn4kti4EN9gwCBet",
  "key44": "5eiRtipoh4FW9Jbo6FiTBRgLjJJYWv4NzTiJC2jsbBndGJfpTQCpGKbRoAjMNpaA5muj6mKA1mzLRRBEiw4JwyN8",
  "key45": "pzYYSdHVWtTsT3CCt2vw7XpFkxQmQ7HWVmBu12QUB9oUrgXhh9bkQKh4bPuTnUkbyYTke7wZ5EdtDqDzfnM2EYJ",
  "key46": "BkekLpMGubn7e1KUw91qgAJkiMv7RKQjyvnNktuPa2hPbmj2xA1osiddjowvw4F6asn1bFDCCByV4SSVrvs82nX",
  "key47": "2iqBJ4obDAkSWyYxJem53zavWSGSV6FRuHEZjZ4fzM7KftaRgcs3fAac61dJQ7XoSS22my2EJTUqh4phkdjmJGgD",
  "key48": "4bZNMtR3pSN56VoUzpZ7bbDCYJdF4pcL9qkGWZ7LqWyiEdgqfHs7zNUAyTmqAihiXnu5deiXMnhYA3zrkWeMr4Q",
  "key49": "2TPLmbBJ7tv9i7SbH4gXj5CKambQFkCgaoT8rJ1PbSkEjAy9pSq97UZkKEsCgZNP5XugmyriXNw51NHVUEDD1vkF"
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
