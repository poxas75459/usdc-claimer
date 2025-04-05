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
    "56y7Pz9jqQXtKkZrcgZaXyncWQzDxkZTUGYhJauovCuwKzFane16SphJComoArmHr7dSTcDY6va77WY5QzbMtBBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "anPXqBbCYrLrNpSeuxQjGPpLPTssgseMWZ7MDSVTVMVqWP1SV9P9q69cSSSDztfidBwTsFe9oWmhFmUaMKZDVCg",
  "key1": "5c1EVaeXpc3J2m9iJBJjx7v3DTX7RHDCHhKg4tKxV9QKXHyxF6U9vYLoBGeDBnPC6QwWzqhZb39Y7owRCbq2ekdF",
  "key2": "4Tig6DWnaKi2HzXnt8nnoLiK1zc14LqoBJM4yXcn3ZNNtzPquvKKxqshU8TgLyoH3Q1vvAyB7xYAFU1KhEJhS4iC",
  "key3": "xjJJF3H37UweXLDGSaneT3dhhDgbiw6AiHybQjeJBcx323YJHCoLML7rCqRBaZLxDYbcsLwU2nzpBLzCB7rHgqa",
  "key4": "2qYitCcnu8PG8dr5fTCmaUdMJtxU8etLsW8EVAu5sqYoqpqVeT2Trs8xXNMGfB83bEuKkerxjaf73e5Vg9jNbr3B",
  "key5": "XD4NoyZYVwAURBXorsXDxnCtqfwodXuhsFVpNjrdMSBGLpybbeXs6SENrWiWe7Cx5Lt14tAdt6ZzpWYSF2kzZ6G",
  "key6": "2jrTiQoRhokyW86sevv24zw9QsZGHPCDQXrbwRg1mr7eB2wdPfLYLMncysvU8PNFii8T4hQLPkn3EuXXQA5Jdvrd",
  "key7": "oD58C3V145ncShJ5rrdy14ZojBx2pVBbnij9hdNci6DtxmgTE7is2kEYV9NwAUucbLCL9zr1Sq1Re9dr53iwpND",
  "key8": "7APVCi8H8y1oxQ6NKaCrDwqdHXqQKe9Nh2GEZ3X2pBuR3CYkr4DziPGemzXdwvj7AVK2qqJQubqNiw618WfAqnZ",
  "key9": "34QM75iKX3rvWmR8dCnmrn9RQ1AL19qL6BUaHPyDfpiSkvNWHbqHNxQR5XsHgccUdM6mz5RZugqowhxLDMutXJVQ",
  "key10": "4adLpCFu34jepLrH8mmNXt4RbqiW1kVUSi3RTQZeNJ1fy2pn7mBaiuNeXRHFeXymDq24E4hp6tSNNgovuDADnv25",
  "key11": "28uVAUN9AyHHWWiMumfANUGKUux1sAbAYam84XK4cc7tdv2NLUES8nKeqWLs5Yxq3iKqpZ7HsCk7gn3wLXgRGAqy",
  "key12": "4ahHBdjpPbAWCgmQHyh1Gim38ojvsHHBpMFgrPpHx3actJQ5syAUjzcoX6zj84by3KPCzhUq88vCi76G4GXPU3BS",
  "key13": "43vMswAZafiasEawK511bD6FCYKx6Sk8xh9fjHNzWX3rTG77ukwpo5DxBSLDo5ortqh6eMsifVTLtFcZRH9T63cg",
  "key14": "3YjEowe9QL7rKM9fjambGpUy5e5qQUfQYcKDjKodwzDCwnuMkea2FWySpupfqQQLB7Brr3Z23Az5ux1Tgs1riAr7",
  "key15": "33opkV9Qj8P9cDqFHWKZAicuqqwGszxUhBRBG282XFXCSCrVzceRoyPZpAq7xUbkCvEsvtxqrSBFWkPWRLwQ9HHA",
  "key16": "4rcVn2p51c19HSwBDvVr8cWJUMWi5Di15eePr6nsKYw5kTnQECmRyjTFnNUcpCJWgoKMJKMk99W5HEoXdDgm6XX4",
  "key17": "ZVCcAMrPzga3pMsFemiovwJYGaJf4VMVEWvYS8zgPKD9Td6BYMd7wHrMk28vDmTfanfLfMyaqncgvjQEBCZjpW2",
  "key18": "4q4oT9ygLzL3KD9pFNBapVvxxFY7bCHWJKqdphioAyeT7qKcUv9oyg62ssgQnKRVGcpsuhV3S8GtuHU29T2oQddT",
  "key19": "3Z8218qhnNHGMzhjJqb3q9ZTv87bxyzuANC5rr9ePt2yzo1fKPPzYDAT6M6DyuwwjywHLXuqJmy7viTNDE8RAZKP",
  "key20": "KaL2JYyUKirB8pTMgFsRPefMALJRVyqFCpC7Hzrpg3c6WsVqzWoFfP48PdvHbxDtaKjkjyAVyXrUKVcqcho1rZg",
  "key21": "5DqxiPRsNeLghRTQbUUFgGeZDJYe1RNUSEknkNw3rvreqz4UaXafDAXoFFBnSqy5AVYXXUFp4d9pwsXgetfebfPH",
  "key22": "2NjTzf5bEk86LvYybdZ2eynwTgrMg2BX4UpCbjySojBKGLXyqJnzPn8JXhne5uEsA3oHhrCHJC5VKcMdU8rTQvzc",
  "key23": "2unNFWEmYBj7icGk4Ti5BhJMeERRtjpbAdBQSbxxgryLVVYpXfe6HR4MJrtQyXtcFCsytVc8UvbhCuzbdMtE1cYR",
  "key24": "LrD8mXrknS5AXzDcyATFLXhgyoRnHkaCMW2enpzdHdBeAyNEJDPsCzB4fE7YfQvDn3hKabXHkarZbXQNAgem6id",
  "key25": "2EYzDEnWsEjsz878AMkTF8rQaHeP9zP4cN1SUJsdsuQsmexk43PchPczJuavLNEMgV82K2pZpWJW2ScDTEo6u3Jb",
  "key26": "cPf1Lo3XhFSPZLBtycdRNah3QUfvPp5MQqKRA88BwoNVZjmcogy7rYXRYWPGccNLwuJzJLudc9yrNyAmdTjfykW",
  "key27": "41YG4yH5CNbafvfpVT9EjPTtKXJCBThXk2Ej3mZo62DWyLDnK2Lsuk2GiWBHCHus84yDKECqwTbt3aQJ7xuiDk4e",
  "key28": "42mYxF1KbSwrZTrZk8icFEWFkCsksaqNBbfFSsJGtAmF8LftHNFmbwccxCsaLx3hQzsxaQTambcxfsuc8nnrFZTZ",
  "key29": "4Nyhrq6ksvP3NAA6CEVKGVkNQNLASeeH3uDibc5c5QjB2MgjYJfxpznEWHEbype7dHTJzFNrD2AgEDubZL1sUDnc",
  "key30": "2QktP737md9PNYhDspNi5W8nhYKA6cMGdV7Yc5WsJ3xvX3YQb2w9up7qF5QuykB21wpYEPVMyKvHbjXoGj4AvHpP",
  "key31": "5B2do4PAcGmbwZapZbt36TA6uMA2eQD7wvZzmvMKsek4784oXd3KCjnQZB5cCAR55EhVbGA4KHkE7ooJYVjcNUfe",
  "key32": "4evGFGJtPSWKpPA47dpJCREchsnnV2tZVe5QCrVctdNksTxHd4PyWLjMoR6iWW1Zh1GNHUyYtqDWZGJ4GAZkkEUh",
  "key33": "5Ew81RAZXAKAsio5FenajCRSpw9FYwPKN4d6mZNepKuo85pKNJDzwRRVqMxc2Lh6ndbCDPPVTQuLu3cHPYKfjJQx",
  "key34": "46XExELUdiiSpp76r2KGv9rqtWYgUDfzcfATTgYqxnVau2mNJipJ2kKUigcLygiU1q729cCmQutDdmPz9jYK2K6D",
  "key35": "2fa8VjVJirBE8Z8jnWMS8vvJ4rziA9YwMaS4tt33exWimqE6RJErbDUi828P9F7eUUsTE3uMu1mHBWnNnz52pGeY",
  "key36": "2x6xg6zshRz9He3xZCuywEmwmY28yeWEBW3mrCAFh7b65K9LS6VhMANsge7BSxY91jsAJjq8Qi97bwbuYGKqwYt",
  "key37": "61HzQy2UPtvSX3Kf5h5k9Qea5pyCpw6c8HjppVYdxfrS78orMaBe2M7WfnBKhtDqxGakBXCgb21X5byA8B42y7hV",
  "key38": "y3i27aenq8VeeueYjzMSupSxX9uhEGj1ejiYFbK3bnanEUm1cdmjZ823aJvcjFw7rBdFzimWcVeEG7X2ToYmcKj",
  "key39": "2pBqWfWsXwkd3LnYP1MSBpQX43QpFojA7fvDLRGpzURk6S4kSQnqn6EcjbeZSaQJin3Q9g8khpUEcpSYshjCdkFh",
  "key40": "3hFc4SzyKBeAA2peVBd4d5JHACm6wgs4QBgYSMPyKpKpbReJpLToPCr8YPk7nWv198Zme5fpcyZq7mLPm76tvsHh",
  "key41": "eDD8g71EWK6kMYgRzSMVwDesGTyCxvWwmGGAqn9P1RrTwXsTLvaVmwuD9KJLf1B6uvfkBLYnaY6sxjbDJHD8K97",
  "key42": "4JxqdmR8Z5ErkvNm69WWjMZUtJV1NBH8DzjgAvu3Z1BkAgWqHdhhJL1vMsKSUyMow2HVvb9wa5JrkuN7hYfcxB2j",
  "key43": "4QYvtQUqZsQxc9rq9pdT7ADtaQxgHv8YWyasKemJZbirDVhj9EtHobLxZw5zoWAgXYUX1bzBwqb12Yg3g7itYyGp",
  "key44": "2XqEtPDYon1ivUDNdFfHXXAapvDNvaeQyx44pKdcvpZB4h6uHAZLWav37t35drWKYkDXbQ6GrsXYD27EMo1a7U3V",
  "key45": "5hdVHmUm2ae91UMaXW8f5SJcE6aFqdMvcPN6zTRD8wYi199bgpqxPh8fSugg22V9pMENzPobU8MFV7kJ6BbjVrbh",
  "key46": "213my6sZXNwr5GaAZCHG8dpNZ63b8y6LMmyvCnxstdBr6BUdmibt3KCrkG3s1SGBaZqyA7V6N3sPHBVG66HbVePi",
  "key47": "2yEJWSWNpVuDm7GDQUBSC2KfNqvEVB98GhMoQNmgRrLPD6wwVC23QCZihMxt3TG8khgsKojRAb5HbNpqBYNh7wmT",
  "key48": "5sbpSGEBnCTSPeS5FD8yxDEFVUeyPShuoYrxXf5kmKzzc95bkmhbsaarec5no7B35FiZ1xmrRmyZSNhuFDAG2qGr",
  "key49": "3kFvELwVZqcygcb1s2qqD57WXv4K15ybWD646jUFGz9Y4V4K17rCa8HjnqyHoMEcPx6YD28z6KvDAVVkswg37aCc"
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
