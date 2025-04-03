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
    "4ZQ6CCkiZ3Wq2uCLvcSuiPwemMeRx3TrgQxCHB12XbdehBWkVcwg7GU6yiuwvFPnYDpzywDKo8xUCvh3CQ5GR2vH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yzHxoq1ed5oPtWR1frxgfhzTgpMhkusJBhMqFKMZy1NqaTcQignvSs6HFHKDKSi9MgFGN4nwwrL4LNE3DA7Tuev",
  "key1": "4kxQjvfMKRbg8BFa4N2uRHP1dtYoagDwiy4AKSm78AJ3KGR4PXFzvt6xvdaJNwLyPdE1F5QZSu4R2QUgt4FbBawc",
  "key2": "2W5A76KLKwLE5LNEvSHe8YAJJ7TaVVdqAf4t2DjKFYg81kkaB88RrXoQrCLmZ6xf88feEpydyxzTkeETAAprQVuq",
  "key3": "rwPiByXiRoczix8UkZ6MUkrDfaAuoQRP1CUXXL82XTkrKMq7DXgS4L8AjoaeGuB6H3LEeZdPPUzvp6RDSt8gGhN",
  "key4": "5F8spmGsdGbubanywtLyFMC5o4LAtGKyfPjS4mNiSM7fFgV7Htam2iastpbVgVwT5TtPjq3P5TAGTstPgnj5QWsz",
  "key5": "63c7UT2ZYxcRFPgykyivMLzaGwD9kNS73aqaJKGvYwNqvMZaPh8XdwsQJYYoe9s2MF699HChJNV7avQfu5f64PDy",
  "key6": "ybst12w1V1zfiSgRGd9JddrNB5r5bBAKJJarfrYi7GiFyHueRBiBXV57vv4tgvSyXX11KdzPDi7yLQ3sRnUwtmu",
  "key7": "2BphC86aaZQ6NFZ9YYcTPLMQHxxs5he6KhGCk7sQ8LEAFKoZPB34dBUyL6we6yasuH8xmBQ3sxZfz8uueeCvbjfL",
  "key8": "2S7dWfQ8YzygbAR9xL8EdnMnoZyY5zZEtnpnDeZpHTuWCXkRXnfyULCsy6jHA8SFvt9dFu8DSZ9cuq2HeWJwPyR2",
  "key9": "okQp2T5BsSpGy8HCnX9tUAN9YACFJDuVmhVovutG6qukGnzixwoPFGdeyB57YXfe2a8VpvnuaCnM2sJmjJd6V9j",
  "key10": "4wKFdfDfvq5eXpqEYJJdnsj2hrYyyA9xXf75LkoGFy6dwkugRiV4nFcYzQGoaWna3zJbTvYGBSpkaA1az9VkdP4x",
  "key11": "2bMoUbTaWeAUoM9ic13Ht4p8xPeC2RdumFDDSDoJvngi4CsQK6tRFMeS6B7TNyVpU1nbKV6Xh1aomaQo4M49mz6J",
  "key12": "2AaTD7LsA7aUJ56cFgrDQhBiG9b2rdH81KzrAK1MZjLgW7ujxpNJ4c5KmCJe36ARLxH6yoUZsrZHG4cJh4AM5kWF",
  "key13": "4HJKKhezifuiNjAWfwwgh5Act98pKUpoDGmp5ZwJWqqk2jB2ivusrc9ofesd9hSb7u7vBDx7bLQLJm2nrd5QrhDP",
  "key14": "4agvFnAwLyjwRa12QsvThRbxYGiFG6DkUuFv12HkASDMEikhDPgS5eqLLDDu8vW6aEVyktUsWx4Kioyp38fpywaJ",
  "key15": "5xwy6CgUyKSSgF9q73MBWZeDMwSnYTMU4QBr9tco8Syst5MTxmyz2qj7FDvpyXPhM8UdbooRUR9iLTsrN7xmqyjU",
  "key16": "3Uo95BGRuk6t6CietGHgRzc7gNWTPXSbE9GHdJ67zDdcnMS6RHWSH4CG5PfFu6XBRgsmWabcrNHu7UuX2qZSoFqZ",
  "key17": "29sZXRvsHCiwr1DvdNw5MmZVS9igpRd7MVkyKzn1pYTTg4mz4BEyKwChjxtPJMj1YupM1VBVc33uUB9umDtGBptL",
  "key18": "5zynEFbP28ns6rx4o9soaKfpNkaC2yM87bR6TCuWSax8rwYWwh5Gi2zfACVpGJZbUfxYAKmoGi1jaQKgwDPPSk3h",
  "key19": "4arVRkPcndDUZ8ijjvnGF2sTew7vhqRRujKZhQb1V4f7iGTnoq8AdXqAeBernJAMiYD9sxnVqJnmqzUEBMdrXuo",
  "key20": "4DU5M195usz3mcnP6wcMCagvy7H4xfTiy2F1hXunmy8CEPxykskKYRmjcKKnG2rb2mEqj9CLTdFWij5s6mXCymuz",
  "key21": "4eZN8hvmtr3vpZRBenUxacGNbFkuknGizs56ZgmbbKPX5Ww8PbsmjrwLhZMprNxgm3cyvSkcoNK1c48eZUJfJ3D",
  "key22": "3JW1rMoCfJqxLP1KuXuRby5ruXTvjnveXeidHkPWt8jowcEriotkf8HCbdaxvqA7BwYjW62JDrjw3tWopTCyXKBP",
  "key23": "5khwWSRxtQ7m9FFYGGFgnvfrJwQwURqeh3EFjbzy5yaAZKrojb6YnaiWTtZkGQGrUq2iZDMjQz3h8z6AvD8he3aj",
  "key24": "eCSQqt6bg17emwJ8sPB4K9d5uGk2vH7qtp4dnEyNBoKNc2pDjsnoC4sHPCupdPJ4pmY8HQMQxnzDwV1XnSLXWQB",
  "key25": "2MPiFYMz7EedQQyXRapNFwtG9e3wKzmuSu35pf3UUZmrkm5gy8Q6DnAQn4WvGHgpVQagxZbZhUavpjEncX5urmvU",
  "key26": "66SeFZobNVKwnLapjVXukn1PsrmZehjee33o9fXfnMPHDKuXFRHQK5GvAEikCCfmFNTMsZKbA2tjfC72Sj1KTJsZ",
  "key27": "4um9ScJzxYawZjoK53XkaRYyjrKGtzms1Yt954f8D2BnSdwyeFGbLbLqgxoGMCDrMNUDtv9Pi5SPVJBDFdCHbzxX",
  "key28": "8vKDPzrCQ6xriQp1V4DpAVttD4AnJdo7tsnS8FdGwx3k4nZUEWt6Yzrmvu2nF3rLVLuQ1uncFmQLHWCYQHpCAZU",
  "key29": "26CZpWEMZabnTG2JaNSPWQLBcsgBhEQKqXVMV4oEbYHsMvUPTWwj75FuhN8wPfM4eA6S99G1i6yrpf1GRKnmiTMW",
  "key30": "4QoYpgXGwmyJR3PoyxbMkUksYjzcQuVr2EA5QtnU3d47ECXr2XiNTpBmR361DeYaDZCf22yAshppqA78ZrNJTeDv",
  "key31": "3k9yZwFmXy6fr4wHFBDHPGeWt1hcaMoiY89pgygQbm1T2cSDCdZZ3g1btNLsg4yVk4214jd5rFFKFK1ntx6nWzG2",
  "key32": "36xJi1oabK3YqFN9XQY2KgghkYRHGiBtntQZExt8NjuKadR4ce34Snfm5z5gifng61hnMUhrg6ZqN9VNmy1G3BB4",
  "key33": "2Kb81wW95KHytNDut97dMaygj3kPY1JrLLkDBR2EwmSDSDYL9xmnZ9ArW2usP1MVpmeoj516pSSxPeqqE8GE8ioG",
  "key34": "K2uQk9ApyfDfk1ci6P9g21LobMChNjNMjhU5xe7SBGb5TT3rADoPBHuuVg8B9bxMh8k33aEc7VuM1L6yrT6SgJh",
  "key35": "53L8fwipUhG3tNJwMcFxrSzutEHdRDunc1LUDvCqRxJVRKVbWD3CZmnmE91MNTdQCMCWMTQee6sxYE4mjaJFr5Bz",
  "key36": "DbzxRYcDw4XZ91izUcU5Ekd49HYYzffqfeAi5TrTxdDXvVjRbsjj2GBgvoTssg99jkaTKQcmDGm74xabQtdc8VV",
  "key37": "2pd7kMqL4JZy1YsWPSycoQYqHkxSEYHMY5b5RhDZzvYjpkSXBqY1uUuFCGH1VioBBTTaf4XaEeRaJmCGodRjMWda",
  "key38": "2ybtJZpVfPegG1VETZYyNK1tbDzHQfDhNx4Fvo7YpXEePGVvj5P9QbeX5hGz5HToyKz2NGVwdqs3VwNNN2ddu3Mx",
  "key39": "3i8CJt9bNECJ4b9zwWHrj1cXeKc6FGLshmG8UYouJ74cj9n9x6ZzewRWwsfnWqinZveVeJEhxxyRP2ZDYUYg4LVJ",
  "key40": "29fRkhtVVgJR1tuaTCCLPWG4H9dXDhynTUK9jmju9ByS53sTUCJCQZ6P1bs4Ydpxdf5CMygqG1Jgn4cN5N3aiFdH",
  "key41": "4woQqZdQmzyN53jy6bVAoDmWazsKbAqjDGWzNgiy1ipSegjfBXai3QWiTK5mCzS5erqFUhvafUr1hbDDSCMWECab",
  "key42": "1UWN61nD1sLBc7u9eiwfMfiWzxggeGN89qeroz5B8WmqRaAyaacsefPSNXUWrh1bgNvKX1pncgxfSmZjCmfZN5K",
  "key43": "473bXYzoQSz8L8ppDBQ3p4zu2n222qNQCFTcMuWkbGZc38PCPAW8mZWTCRN46TSGodZv2iqTpiBBh1KaWYGwRXSj",
  "key44": "26xecFrrPcnDEVZgbqyE2xDtg9pPkNpc4fgPqQeENNJr65RFph69eTA4pxcCHsBkyZuH8kzv6Dw83xUQgUmmwjRT",
  "key45": "2n7Aca1FFRTkNPxx6W94US9Lvu4Gb1w56YBYXoonwtX9Ze2WxN5v5m2jC5fQEqLpHXHsgwtTtfqvDe6a9cYSpxV7",
  "key46": "3Hj8UFtjRmcAMiWzSV9yA6nvp1zoAkgVUTePmEsp8G1742CfkJmFhqtBnEDZC63eJZ4YULaschyFTeKaUs1Z62Ck",
  "key47": "2wBJXajcuUsa34eJjsNDbDSJAK5YdVEG67KUcaXqFc6UVoncmzH8cetrLNLGXmrDEog8ZpZsXRFTcPaL8yhzoFJR",
  "key48": "4i1UJDiGiw4BLpNDjtiBZu8xrhqzvQU1xUGXkxuLEohMWBoWMVLiC5BBLxiXERSuawBWW5SU4ApscDqxurDF7Rz",
  "key49": "7oZniYyvMNSedGAYMNzDSm9Bhnc8ArXuK6EjySMwgVAwCBQdhyUQzZ4PBL9tJB6LMEhdYeosYEazWY9ofvKHAxV"
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
