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
    "F5ki2LAfbP6DCyj5EmfNubBexLBtHQjsCJrLWFnTifhRi3H1GgpH18i4QGi5eZZUVcfdFFiW25AAsA713S3CjMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KkJ2W7Zx2suinBv4q4q7zGmhZqrUgxe9J9sYW36MScFPpaVJHvwrffDQYqN8hnf1aVedXwujWH7odW3wNTohcZa",
  "key1": "3BkxeGCjxpFWN51LAbojL2fHeZSMJjStvtxHa5QgB3inrYVFBoSbj75aJegW5yFmESMDQaeK2n3w9Eq6N2e2wVRk",
  "key2": "39AyR8sEFmNW4ZyWcKRjf9htB4Jpqqw8zoz9QL8eiQcy9bNkmUWyLwe5Y1KndzxoBXGMmv1KQjnw7thVXpV23nTB",
  "key3": "51XaDJZdRcCAijf3hUiQrkZJTR5cpbMXPTYbMgnAV2DocJRAucmQiNZB9SkBPLNcw6grfHdfVWs7QKSF63R4reJ6",
  "key4": "3JLRCfb2gYhWf42wSFc9q8xoFUr7i69XQ2qbBDuihwZRh4DHUxccMsfByNPbqKxucuGGkGhx4SqpTiZcWx5V66v",
  "key5": "578256GymxGjWme6rKuDbZjm6pEG5Nk7k1w5NTHq3Vo7BtcjAC2Aw21NZHNFGK893Hgo2aABmLNPfvpVidVhScrJ",
  "key6": "2wJ5UpjQMEhKicN6sTRHNQXzDYqLh7PGZhx8JEW5mJ7SZdHcEG1ocmrFyDU7ibZpiY6Y62tHHynt4y9JR8dUzp3n",
  "key7": "JbZsERLRv4wvenCoPs61xAib9Bfi6v3A3Buvg3nHuA7bpuesiGDtBaTiX1RtgFEjyVXp7gEpRNubGCSSQkBTSN3",
  "key8": "4WRhVnDqboFcggx6MhFZdpQHTdaLAGCSDYtZQnjH8Z1XHpCBNgoXZA5seB2EboXCWQnjAhCe9BREEEe8xtQUNrzc",
  "key9": "5NPJUcjinZrpd8pUYfYWT84jicZ6GYWLfzPxkXzV288iyXdYeiorHHuN77s1cFrhYyUNnwsLaZWAdYGaEJwo5Dac",
  "key10": "4mjifkCP2aAYkro49rK9QdQdNF6dB8bsn26WEmzJQjseTSwJXqfiWWvqYrTxGf4RwK9nhysFiRdvvW5VB2Wmw4zp",
  "key11": "iv4zedmv4ZW1NoPXmb2zUCinqp7Lg2wVcY6RkXRkoMua8z9pE8VT5NCTF8p2hay8h1XeP6oZPonS3imzNNeuDVM",
  "key12": "ya6tFtiBLkBhDkuUvee4rUKxgmND5J9ahYVPukEjfxZi8yEMSc37H2vBZKssfGDznyDLXcLP3mvutjyL7nhK2Fa",
  "key13": "22Vv211KUhQReK5eVjBQFYnEUuC2Zub9qC5We3wrZsQYpxqLdVXApkYLMnhE7DTPYWHfgMmBHvipUPNfL45haybU",
  "key14": "4Ty9qronKGXe3fyM3DHNMcJKnsxE98VZieW7gpvGFdv1ZkeHBRb6SEnXtg99jZhNEyQ8A3c9KRwDDRn8JQgrkkZz",
  "key15": "5b9rzsFB5uhtr1eZdp9AuRk4UNuYk2pXd5BLNxCYs25C8BD35AFqgVo9eteBsjYQTetcsqZiS1t7ge6ML7mM5EQ5",
  "key16": "dqyv6NfFWyN4nCRRAfpvBZopZ6BKq4bGXbH3VKEj2Wa5oyTDYTp69mouLrDn6wCvgB5kDxronPfeyw5KFc4fquU",
  "key17": "4vYUTW5V194R8pi1BC2K8SWcaQSYiLs7ojdd5HA72RokVfxNJUQSDUo5vjaFw2Mqt6nfSBLW6AvTWHRKm5kuQuZE",
  "key18": "5GsANrhLVpoPNagDbMJ1LhtnFQimQhnMDYgtsoGnLEsdrVGk8SGPC3VbZGrX3c1KWKpQi5gHXrzshmrwksrd6AER",
  "key19": "53pknPGiQQmdhkCVVeYD5VqfzAaRPuag4hsZgk4DiUjoUsdvK7MqSRGekB9bvphM6rTAakjc9Bg7S2yN4S3AS7rs",
  "key20": "2vkmejU7E9RBUaKmigpRVt6HtqHu9PNbB78GWQbquPQFg8WhpQqpqA4HwEwLExAwyy3h8zWXzfG5Bpo8gLzvX4z3",
  "key21": "2BujSe5pCCuWGKeQbnmeBUM939NS4MLA2VxNapMrCDzBvXXTjAC3RnBexatnBYuLJ814icms2LjGhq6mHpPZ1MAE",
  "key22": "5ysS6LSS1mquhFUwkRRdwnsJsyzGYKRtU9L4CL6YmVqVFaSwoohqNUbabEdjA2HEBDiTnf1QNjX7LEhun9vKgvuQ",
  "key23": "2GDE8v78qJNSzcNQYXQedCbUAEvUXEWcKjZTNgobeN4MJZJCF8pVk4CcSunzXNFfBqF1eudZUyudef2dTNYxD7DZ",
  "key24": "2cG8bPNdu9Uum6PK5YpbyFj6a16mUhkz4sd1qHfBe8GfLzVzHwmDpPHiheJLU87puDmKQTqYAGqo5u8DRfShtsme",
  "key25": "4vV6kpdLZsteiwAeHiCzcbMpNEBxqC8VfAMyZRN8YB2h6eHp2i4TW3KJXtmiTzVQg7ogDASA2vKkr5qRJhQYBH9B",
  "key26": "5pnuGC3vYNgZCMTgm5jzwcE3ESpuZR97vsedqRSybGckvr6c3BHWcy3AoVrk3A7LyXttePvTGVXeJFJprF2GhuWa",
  "key27": "2YCHwEpwsWoC5cMRoJwsufsUNAEcRT8DmzFy9aPHELik7aB6GtTaMkEFZWMt5GknjPFaTo3iDqyCnzpT7Z58p95c",
  "key28": "5KBCnBhadCvt6bAykdsuhPCGKFdkdbuwAohKr5iSuoGSK3bfee64sihLDJY1JdJKjkj1YC4v2MiFn1LWpFf5wX2w",
  "key29": "2jBoREFRc5Tx9cU5GFHg5GHLTHgkjjV6LY1wXu7NcfW11M3VfhkXH57FCjmWPJMn46fy1g6NxrmDYWpMgdJjDCqh",
  "key30": "5erSajC1pgYAHsZruTc4bNrMwJutwcNPMMwCUstT332CeamTvyM6XRJkhG7vMh1zUosQrRzc3iJ6UbxFoninz2f5",
  "key31": "2ebFyuNF9w75nKbWYdVagcVkbiKMQHDxWxKm4oxhkZx9vCgnz8FSxvMvpCNWqatpjqKckasfPhN611GJKsysZrEG",
  "key32": "4GeNb1WgESCQ15U3s2TVozDT8XNbDhy5swGmBVxff8cMiNV4JiyYrwZfC7jyENMJcodPkZLAmhE7G42KEoz3MqKH",
  "key33": "3h9XyWPfGqo6MYx3tXaNXoUREA3SXMfT8ZscaJfJ8BdtG35tD8SAusBHcVvpbjfoSBMsXqRbpBiEXan4rvBLq1nq",
  "key34": "cMXwqBoahQf8NjVfYAvAdWVSQwaQvqfzZGq3tVSSDBHQQzH2cLe55F25pLyHxK7AYaaP61u1e2ARVqktF2ywWL2",
  "key35": "VMZrpXYoLXCjfSTKJ58oCjgnDhh5XMj9xoVMnMsZrou1W9UqTQYiUZARY7DUNHVVqDK3RebaQPqHGtcgJxVq7kt",
  "key36": "5kUbqfUJ441tPxHgvZKDE5c8H3k5xNHSTeBbrRw1TYNXo3iX7NVpVqT4mcfSt74yyjzo8BqVjmjht77iopa5Wg7F",
  "key37": "2mBxpgf1JaiqutnHeLWmZHbsTD8mYVFsNv4Zwh78ay9BKYx9MWNr9fsexxtv4wcrNKhLeoWBC2aNPgrA2pvWjgUq",
  "key38": "NTTa6KA5yCTnuHQBR5VVdt2ZLaR4YZ8Ji8TCqmcixgtrYUWQrDQPGhPUusU1KBRFmPxbjh7r3NwUHG2xaXJLpmk",
  "key39": "5iCVdNw4WrxNqb9hFHcha4q15deV64zpdKtKYFkfiKrcBe3X7LzbzpPD9UVGM86Bxn5BzNXkGNzbZgCVPxNPqc2B",
  "key40": "46JKhKscmowc8iCC15zpVd66eAWdPxJUX7AkxNBziokWcjFQjKn3yWL3Lb7Zmj4916VR6bNW9SKR9ZJRgmqiyB1",
  "key41": "4MqxKHLKV3447jiM8LBgksWNsgaLtJ8aVsA2BiKZADsBPLvPqfibrCwnd4QUWs9fy9oZvF2TJ8vU7VQaBFBojsSf",
  "key42": "GHnyo7zB4gYd8PodRLkPZdQppXzoosm6xfHg65q2kWbwb3CQBaLvcvghYjoVVgxMGTzmhQ5yvZcpEzhTXTYMGA1",
  "key43": "5zxrXYGymzZqv5WLdySZJuGsFeKTKxGhgm6CmSnGerpxgTtDvJfZCEf6JBRaoUGjXiB3Sws2rVB9ZHSYS7SsDsov",
  "key44": "64CFk3AH2pMNtAqUMkPgJryiKDuV3oaNFVjTD1Zx5Y1eBJAz5yKL27bdhsZenGygzHR9aD45FN7eVjDYya7Cupz8",
  "key45": "wPiBCJNjEAQ7oYEam35SEVSccmLoftNGvpYPtQqcSi46p6GHP5SeKpAAjALZtJAyZ8e6pGUnHvLFy5krZj39tBL",
  "key46": "4hRcxnoeWa84Wp89JFcod3ui6fXCQH1EawqmyseckpneRvdveVb4ScFKQR19ysxtTwwScDwn9SYEhZv3q5sFpevC",
  "key47": "4YByF41gF4M574tBsHg2GFzt6g6UoYWrBjSKS2i4XVu8dRc6djVeAkMMFmeGJVojBqmd65nhaWPWyMCk4J3xwCR5"
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
