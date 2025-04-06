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
    "3ZCAJAqdeSXdyhXv5TY7cGs2Bc54vfRvi8iSAbuB37gqErpcBVajZ8gCmU81pe7tSJk2CbrZ31Tz6s6HG8U5gaYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fc1JNxHWEDGQz9PEUkNj3FcNcdSHsAxWc8fGkiy6Wgtmqz1CuwUfZ8uxsurvTvCeHPXPDxs2h2ZCpbBU82B2Zj4",
  "key1": "5hqPGU1qtuaFd1Xq7s9P9SsWETqmtk6NmiZKSgdDeviAD8oGYCVt3fBTJ6BKdddXF1q4GH4SyU3HtXoS9uKidzzi",
  "key2": "5h5XHoFZNNKHVHvWbzF6yJbKA7HEmvyabmPSXRZ9X3x3wPxkPQMV4YJWmqxMLbqC9FpcVLmu8RKvNtr9mL7L15rq",
  "key3": "4oA8UKtaQXmws8gPnYavp5UDapuZ2euzkmYiMc9ubMfR5XcSFSNP9BmMYqqm2nUp9Ah4dmw9ejgTyLTFw2gtpmbD",
  "key4": "2YLBNUqVjPyVg3EQxcKuorrSoPM9Lroz5vTmRL4joVFa8vuAnD6QzbJKqnYqAcV3bcVKG5PJszbsogXjJQRUD2jh",
  "key5": "5KRzHoHxWxtKuFCCKAoxQD3KG9NtwL6TkA42HZ3uxhDa2CyJM1VJ3CDtTogaq17LGuXiTQMRjvm2DZdkmZyMFit",
  "key6": "47CeBB4gGab7fPf5VqmNSHTkN46nd6hdRPVnhwNV1nAVzVgKmyzw4hFQf3Ms9aU7rjkgwVYGVpEeBb3hskcqKYGD",
  "key7": "WSsZdL5tpeQteL41BfsDkHGFoMrhHQqtQMMsuGVCoEKaNiw7CZnnzdHKzXhhDekg9jkf3pAALp9gZCeJLhLGmdf",
  "key8": "47LV6WMNHMKcBH8GKAkhZEXRmEjHo6ZURkBmK1S9LbTNq2BEwDFmTfisvr78vJ3b7iT3VqVYwE7neWDRfPD77484",
  "key9": "XECMSyY73NyzpSsN5Ed5Q3gQra27hBNCUWVnGVWBX2Y2aLDnTMyWiA9jytEjBeHE2WrFPkVdBrJr95BsDLfV39Z",
  "key10": "5bNNjTdTSW2M3fefvZvq5ouh8xJoXKta5ryeDUcUMZuzXFjXYxsYz9KAArWTqj6HbFVistbc7yxbgByJu7Z9kMYm",
  "key11": "4A4WLwZLmPcdsESCecvGboqsq43psnq4c3dDhnXhPfgwibwrK66vYUnynPeZRydbQxA2FzXhvm2U32Yjy9UebZcg",
  "key12": "5VXrMhZuBSKVqomU4pXh3kZtDGdHbE7AYe26GLrHhuVHnpwqoxZFd6FgdwaHHkJEMVAU1ScoBLe9pbd25xXdtT5G",
  "key13": "8xLPbfAaZLXZLaN4aWK69CEGkPummKSe1oer9u66MRDaMM26kNW69nYNcbsChKW4p7hYzGWNvqWEN3jdRXMSo5m",
  "key14": "4evQaCx7Hk3g3T6dxNBmik26LPvR8N4VEFtwhvc84GxqCSzbGntMPM1Sa4ifggNC7iJmoW78dRyAbeXqoRVtFFsd",
  "key15": "3RvD3cvGvrCxC3sbfh15KJk96dwNC9C3pssh3yC52grhzBrbCmZcPHT4EaDQv52HTXWzJ4GyJjwJ5KwrXs6RANzA",
  "key16": "3v1BZdiJG9sdyjC1W6v74eJEkSyC35VrfFcgrgKXSyFd5aKKhwpCb82qR3QWTvgr21aZGV3FSJVxyCqK9L1HSKRn",
  "key17": "5jKZwxY8qtdcyXpcjNCyAcAgyiDvUpRS1YN1kzxrnRtcuZWrCENGNZRnYck1SLf3dN51LXCTDo8ZjCw4YLx2Ks6Z",
  "key18": "26aFMqadtdzAepBbepyDfBuK7dxpg1r84UxjhPoNAfepRX62eG2aDVyMrRZCo7Rd6euPMXTteY5pe7ZBnrXxcCcZ",
  "key19": "264RVXphXAGiP8vtgmjeCLynq6cVXefUDxRgwSeres99ryN9Qu64e6om78fnm5mgARFpkZcy8CzrVFkbCJEDyu3v",
  "key20": "Z8z89174z8DwQ8kcfWGwwafcNVJNhdqyQqk8Yjpd1WuypFNLMgi3ELNxULtRcWLwuB8PD2NA7xQRsqMiADByMbh",
  "key21": "5op6pvz54kZvpSq7fahLxtF9EUnWpga3cqiKg3KVPd5DJG4fWUKBmg35ezw2FDoPYcsHwQcuEhfCC85aFz33pCzo",
  "key22": "3Z6dxNjDJNGfK51PbqCfew3PMMVQAtUg1fi2hLA7sdvV2q1TzUd6EjEzRcmSa9D8mTv6ayMxZdhsqqD9oGTj9w3A",
  "key23": "25WcR4kv419hGXFRAj5WoYdP3bwJc5KiHNz4THyLr4GZMNGR8UuT7dPQgrnYmtkZ8fQiwhfX7jr6zo3qLrwMr722",
  "key24": "5gmZaHhfkokDoyFJmjBh6iHkar1ig7WrBT52fYCMUbDR7cCWpKDUn7tSNa6qaZyBwiD4BZ5HmwxgjN8tQAYJ9RAz",
  "key25": "44gTcndjcWyBA2SYVR3tCr1nNXDtggVheS9139FtVVzpsyfXXizKBmuUhcZntQKaqJcwJMpvNRTwJ6byV6vrPnQh",
  "key26": "2r6sJxCVD31MkR25AFCQiTSdf2scthnpTWtMVoCh9Tw3KCHYKZse9g13fK8Y3H9kU8R9XMuHc3aqSYUnWrbcyFGD",
  "key27": "58J8eptfYSU4qf5M2Scbpg4Ldr9B5vTfWEAQwBeG2HrbNub991XWkp5VLLKTKqf5Bc92Gsj8irz5yLgLeoWjiZy7",
  "key28": "2FqXeSM7zVH59N3cQ5NKzHchPM1uVzp3z6Ece1FxbTWCkjwkHzmF3HmDiVLSnXnSZtgnEu4yaREmSJaRfQhGmZgr",
  "key29": "2Qw2Tr4QZbueGAb341JndWWXNgRuF5nvZc4SHpZy7nCb5v8Yfb5iHubPAtswDmL11XMfRjUtQi7SkLYGRE7eXyBf",
  "key30": "485ePgHyBLQ7VPVbKuJS5RXvuSZDCtmKow5E7DboVnhDeTp5Dnnt4RnT5RcsMFn7mqW5zkDuWQDTSqCGd2sbLCxq",
  "key31": "5TmLXCBL7yACpWj7Qn3yf8VkBchLKJ42Ep16XtEABRgh4vpCgGkSyz6NfsECiwtZdvVdcbJmKpNqSgkhvzTPTUoh",
  "key32": "2KTGVGsK2oWk5rgv8s4B52EYLBqXHnWwSY15myn9vEDncisBrboEJ9vaDWYgubNCwEBwKzvTPytJpmmAtAPKN8yn",
  "key33": "3ZhBaDwmPgermvYxfUfzrDjbAmohfw9e2Ysj79sEZvMsCmUcMXRsFUQt4xTcsWTkijphW7xdMFkyN5PHVU84eWdp",
  "key34": "Cc2uuHQDwJJQCV1YTjAXUbTKBMjXh6RRm2tMhoBiDqfBuHa5JPGeM7cVbCqTb18u5hsjt7obA8Lgy9pVha6o4QH",
  "key35": "45AQ8j3C6F78rQE67MrTWoqUqLYUzqpUs8pFmg9QKio93fikxhjk6ZEucGBZnRtWNnktoLVQjAz8vULySMZCL97C",
  "key36": "2NeKsJpr2MmifDKekeSuapP85kLjy5QckgF1JeTaanLBp65u1csGTUKUNBL3q5L6XCLQreMCbebagnM1MmPvF9Ko",
  "key37": "5j3JSGWjSQy8HyEeop4sw6egcpVRhWqM6HxapSvoD687xHqcDaZGHzv4sQjgFMrC4soFwJDLCVBc78GaGEXGUYDT",
  "key38": "23JfWuUsa58bpSry51N3GToV6kN5ZPxyqGauADtAYdTsZYZvgoRpC6QJYxbik2kn9weFWgznrJs7QSbocVyDEpSx",
  "key39": "2hKhgXF8sBBh7sZmg7L1xwgxBA9DBY3NWVXStPK7V1ej5w6y8ENbxwUSpu86FjvVsHYB8wFuar74sPC2A8u5PHGA",
  "key40": "LdJL5hX6bCeXbvkYfCxBcWjoPKwTX7TGGrv3f1a9okkoQ9ab99y4L2Xuey11VQ8h46P2cBZ7yCgiUicguR3b3EX",
  "key41": "5cbUeXY58PUjCutt1oK7YSj3TopHjbXCRA2Cd6PBKNdPB2zjbQSJnMat8vc3yWrKnBKPJecpNutSGeoDo1jWsGcG",
  "key42": "51GFfLr86twQnxyPnVCuKHnvupoMZo8zv6fP3iZKneBWM7nUpKshnhgNB7iZoPw5C6nZirea5JKoidh9Ld9nyVMa",
  "key43": "4ikfgHWLgu9dX6sHxmEwstauWrozJ3i7Y7MMERdagQBWro46tG68x8LaefD3dAFR67fVeWkFW9uV2JG49xQzttFM",
  "key44": "3A6PbcYLYBwNFoUzbuX74Sk86DVvtrtxSaGrR1AsYZ8sDCNau9R9qE7HEVeuEg7TZNBQEuo7GKPsvA1B3BUzfRE9",
  "key45": "3ucL4rfiRAaEKyMX7rJ65sHpSccUZArCzUDiPdKb6mUZVrYohPWXoCairzzmo3ESsG7Rh9SXQo4vWkvkTLLkDb6y",
  "key46": "2DvrBUFdJ1Ag4uAyAb3EwSKRdwE9sxwvdLjKByk7f8gpAW62u2WnN5CoD46cYzG3MsDqpxuHnBxta4tmcLb5r9Bc",
  "key47": "2oCepfGJC4r4gSVAnXMAgkWFzVkoV39rLpd64RX6myJjGfDqkXeiYApcBdVstU7tzfJuD7Vb6TWqwrMgUQPPU9YR",
  "key48": "4MHs5HYQCvToWDXVwpVNbugFFTfjXVpNqrmLHP5fT8rp5TqbBxj54sHqZ5QQaTRgdNEZ7ZKWuGmoJZbApMnGigG7",
  "key49": "4zgGvhaoXdhkozUMUWCBVaFrqkE6U6fJdgxwSp9yQPL9TJsX8NgdXAMgQ1crbZJaZtEo2oQcQTFnWpAnoAwcdHsd"
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
