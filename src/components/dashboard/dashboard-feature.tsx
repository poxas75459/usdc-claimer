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
    "3tHYxc74GYHUcdaWsFhhuKb4H9XgfTmbggMbJXQQBQp6ETqmP5bvCPJXMt2qr56ErcYvJ3wHC3Ghfscpnts4TbMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mt2mkvf1Kse7ApdaTd8jMMKpmpgHfveCbnxPZWAtcMqK215qsZSsAkXpxsKPhYUpKTMpMfUBeNPHKy68woUPteF",
  "key1": "3tA4qjVYwwE1wr6dq9HZFXCmXQLkiLSvFUpgmxGo5ae4gTRKSxikkCADkeQSpaDtgi8ghoozwRqW19pieHdEVHz",
  "key2": "4xLz6vV5J8ycfJMUYZaLeR37m93xr7UKLamtYM7AnHZHjYNzad2A4mLkHUjxM4Gx6ntpdZ161v5bfhiPZ6QTzV1d",
  "key3": "54LVFLMpssghhbrf4KXaxVf6JxWLgVYKyvEDuE5hq9shLg3AJb6gXzd7FBQdc9RJQTCuRM8fHGg6uCPhdECWggEg",
  "key4": "3GGjQ5JvLjTHCtaYtyFykiEUrMJsVLJ9vnWjPiNyU4XB6aG4nUVKYLgeRkcikbdeZEopuSt5cFybhW8MCFroMeuB",
  "key5": "p8HTtsEMyXwZdshMGVcrBshzp9ykM7VbqFoadqShyrg5LHwvYZuRYx3HBkz35XNnKfjCxKfp4btBnvv4c7z9eZa",
  "key6": "5KhREF4TQMHMXwHd2QL4mJu99xwbAhTxSaVBjFthqRdPSmmuGqUaVdrLRhMEyWkdGs65t7swzzhC6x7LdqHy5pgL",
  "key7": "5ojTWMaVwCADvQ6hyGFsgBc4BJvootWiuur3qXnKmj8HYiGXvec7CkFDrR8Kat4KhcpW4ngLA3qqhBCw2Uo3y2QG",
  "key8": "5rkEPYWtfa9xZFTKu4nDQF1kyhwpZHR6FjehCggvfbXhJRmcL2tC6nQmKq5Kq2aiEErQwEdD5RxJjQ6czJktqerH",
  "key9": "3hUKTKSVQcUX1BdGzDpn6WWSP7Hno4NJicmBvUiN7cuVKCLEuYGiAjufEKSibVEPCTrmgtCApGcprV5V52DCLXGj",
  "key10": "oGz8cmMwVqD7cDLXjAaERjZGuxheZEDiZCHch7ETKUQepM6umyGxvAhiNXguYPQY6dtLJAv17bwTXYJwKdtyLCC",
  "key11": "kcbb32obUDzy6EeJobTwXfB5c3Mf1dkYwVhRZaELU5aXc1a7G6wj74S6kcY4kKX1Z2NXXVzonmpHTJQVzEpPd7j",
  "key12": "3Lr5TGDX45LxiMHypfRJz2iFqV7bzmh6rTaE7vumc4feqbdfBvEpbwc8oLKx71GkMwyFuquNhi9UTpR7zxjhWZPd",
  "key13": "3NQWSfM6gWU8NTdYNeJKNWBxaQY1YDwPrw4b8saTX7Ci1cSTySadhkKAtTZd5gFvuwKxZtGJ72TCscxGcEXkjpmN",
  "key14": "4PKucvAktozV1pZ3gRpDpgYTHMFYTCiaEmNqDuVXVT7uYCdmSp4eUJYzinVCa4wv13zPBVzx6FD7veRieC9snEv2",
  "key15": "5SZCgvepud2XEq9BQVqb4cejiKt34EQdd4ST4faHaXAGDugP5jQWvE2tgBCiG1ny5NePnrh1893g9BtwdT5rVBRY",
  "key16": "4boKgU8S2gXWRvrSPiWe1svn5xzzuTtBwX8PPzTsD5nCM9B6Yzz2Ba7WJyRq6caRKU5Ru2g7DULZkW8gVv4TMsMc",
  "key17": "4H5nfM94MC5qtLesMXMZb18B3KrEk5x6mPGmgH3Cdtv23HVTVfu7d6FcpJrnuQB8cePffRCnMFbKta5d5arqkAv8",
  "key18": "33GADtrJaEEVpK12CmhSf3SJZTpJ7y53U6hQ5TfSHpttRgjUZssgyVFwxkwSYj8HS2o1cDSsnJ4jVxXj2dRpenjm",
  "key19": "2fpW2zPkqRLmvY5bvkvJDoVrTn5Y4q6Dtue6BHGqD84RCXqfbfKotmvJvt8LVPxoh3gguwrYrRkbvbSES85T7vEd",
  "key20": "4bRknUAsm6ApuhPPW9HXd9k7yX5rsremFqTkU9T2JbQNs4GwMW9H8qn4eTwSrrUdb1eeMQyrmvv1DyCGjdohmiNf",
  "key21": "TpoiAC7fneVvCejeFD3LDXrA3EBRisxgJiot6DS4qb3LzxcZbGGj7NH9noHDsmEqkdRM2sm5kMGz5VDg7Qtj6BW",
  "key22": "MnZXVsYQ3ySws9rL4cw5hSuT1x4rppaLq2vmUfdMcMiuFtnjS7kYPUYLaezuYH3q9PUyyT8s36Fe1vQwekHzeQp",
  "key23": "KS7LVLH1s1M7qxAxQNh3qtgtTcuRpAo9hXf78CKN1t5DS1ZuzwqnccK1Fs6DtwEb1mWMbTYz5449WxZS4MVCknD",
  "key24": "CA1g7SeANoffAnMWmaFA7YgWCnQw95wvhJkyEkvFu635fxWbszMGoEeA2du5JrtSNLPX4aCgCFKSkubjPdryk4S",
  "key25": "3no9GRDfQFKjXne2FvQ2qRZX4tCtsSZYcTcrLWSbzUPhUdUDvhtk74vQm5EmsHkiyXYj2umAQB5AuyVYjQKrPyWZ",
  "key26": "uZhLWLD1qKesvYYVX16SoUrtpvwkjKFDzsXGddB64rH4J7GjExoWzG5tkXtkyJQ63rAuDbqLm3EoQnp36u8K1ff",
  "key27": "STUKk2DgCsdsUrpqkMrMoDAnAwsLYKbkrvFsvPtoHT7PVU2iGCSeetPaFCaUocGrci2u9nXAMHo7YsArUrjGs8P",
  "key28": "dpkAd2FBWAM5yQ7XK64nSicHP2PGXerzJQPoTDsp14jUD7GtVdp7pHiFagTjWGKAYYzkHwTDh4iWbhB8C5qio1J",
  "key29": "4WhUrw2Fsnvbjv2xATzDFFMKyMiuD1JVTb3z3bj5VyvDgJNgPSxjGf2yeaYP1H1aDxRHUS97SZ9a6mGk1vMrmfGt",
  "key30": "5Wqg7KwreQpFZ1iR3X583z9ScRwfiCt6TtZLLctMoTDbLGgWiG21j2ktuCXpQML1NuhvZaT3GcwBLe7znU8PACiC",
  "key31": "4eh4nDwr1VQHrm9buc6BrtyFvHncZvZ9S627AQsDan314izJ8M9pQ2iq2Vq99VSiGj5hcmQZt4E2dysuQS7mttUb",
  "key32": "2nhwwecacbUxkMoxRrkTUpdptMa4jt78T2PWiPsLv5EnHfyB97bzURyfWZur9AEFCZDyyggobbGjQLkpRbscVyFF",
  "key33": "3MrxhBqXBxWwqR3e32yz46DtPG9T2DHD57QNJW1Nv8GboXsz4UFV8iLXn2MWWCKPJigSszN3FGJwd7QrBoP5YqDK",
  "key34": "2UQmrNwyFMjzBHK95focvht8QYCdekVTfe7bnTbmoevmykMV2KVMCCgdmdzGzFcqnh91kShRGNyrV6JLRSwWRSjv",
  "key35": "25kw1GKixz8JzATyue6rqsdmYu2R9Mrd25tQJyHqhPpETAXuXzCeKtEGQn7ZHf8uHBpXGFaZS4Xj5uWhKfMa569z",
  "key36": "4EVDVAg7py44WfC3gono2GFpm8PfMmAfic9MEuEx4sVESWDTpnnZqZrgLttZ6Yc78zC3kQ9YRqYsgSQXyHkCmRUw",
  "key37": "4AR6Qb215WuT3F18eoJFQrfWnSMP3XNpfqYrFP9P1Emqx8MuredmtqXgdJAzKHsso35PRnXC4wuF5JDzB3Buo438",
  "key38": "4WpUMvADGAZGS34WwEJcfa3PtZZq3dUMPL5437UvEopRsDWUBC81Q4z78bQ2wCgcGK8LgB2F1d69X7KkcSj5Ei4v",
  "key39": "57c4VUig8HLeFavdDYV9QT8V9JPWQh3nxgvfEzUCpvT5cZ64r81FDxiWB48AVyJ3jWC13pEkHf6rc1ogfVT37Tbi",
  "key40": "5YfvEtecGPknxZuyruJG9fY7i66pkVxeEcAZZcLkk6wAZ8ns5iNhujsiCQqUewTRMgewq6FHgqnb6W49x2xkCVe2",
  "key41": "3PojsMQ3YoBUbfqhjA3g9t7gYCKe2awDN2fAAFNfF1XLCRHWj8pNzJ2Zy59z48o5ahbpc6sqLBkqNsafmDBsPfjA",
  "key42": "5etwi2F6gc2c4Fik5T8zmA15i3cdLFC7oD1VXNo7Jv6gkQj42oSiSShPrri3C6n1eNwmT32R5Vk2LMJAsN4JphtZ",
  "key43": "4VMKEoG3nM6S9o3SKC85G7dRscHSzsdqwP3KFTFX3BjhW86dX88sJgCkT5wxPcuVsBhx67VYhoLEBP36FsLJm4vc",
  "key44": "argM8q94u6UasgrVkW7R2u7uFmoEU69vuMmTQeqBnyb64JnXLQ78y7s4zV6Nf6Zcvaurbu7Mg1FypUkXGguhKV1",
  "key45": "3eyzS4KxkahyjfEmqLde7K9sGFw6DDv5dvh7TZMnwbXjgsrDpq7tsA9hSPv7Se9bE3HvgQLZfAm7w8U9x4aPCnwr",
  "key46": "2m1zsrsxL3sXrhbupN6hwfiWHN589pr3EJNqTmzGET5BqPPexWXcdrXrk3gPRjbuVBHPuaZFppdFXz4zT7YeA4Wv",
  "key47": "33G3JzY4QnGZSFeEiNqFd9UzNRgfuKMNEcZmoju91c9yPKP8Vksqjo1WG1XmFCJe8u7SdsiU1G6UEa7DykGmmzvD"
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
