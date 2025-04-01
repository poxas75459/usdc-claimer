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
    "4zdLuCEhcJYAET2AqwsMXaxjUXimaNxcZAxgbaXs8kD36NVnZRW9yxN8wKE3y2xTiioRTrXUPz9qKFKNmrewHHN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E2ZzskMWG7N9m7NAWL2xEpnbfC7wDGTEQXDvGTDmkMyxvUsaPxAffZpdoLkPtnFa7DJoukaHQBDb6KjhogUr719",
  "key1": "4zhXBS8wQxLq2zLLgPiiVwxZhsDqm6ooBuCsdyeKeGWUMFCcetFNQqrmShc7q4ZRoG5L8rN4EdkFn4kRR7FLNJJk",
  "key2": "5vgfDAdGdZdzb9JgA57KKtj75LbFTzhgK6hxubK2j6UhSQTSmmcxKEDLdyJx7VgzsjDvw8rq2cCuiNW6TbdjzpWC",
  "key3": "2RiUFgwaUeXtSQiPEe1nVfur6sGa6QrDXXpLxLWSeiPAszhwtrtXEQQJfLmyAP2dnR8Hg7ACUh9vthhvHZtoCs4s",
  "key4": "CPav5Aogxzpun1QtSKjRutJ3n61zQB1hycUDQQj4WGh2qs7mBsFg5JuPcJAnUv97u2LAkQkS2fxU44ATwMe3MTT",
  "key5": "4Qo3WrkJDWGJkKfJXRintGPDwT3qRKkiNB1wVTdUqr9udHbmW4CEwsDmzgbxFxFuMEorUucJBuCcvpmch9pNResF",
  "key6": "5WYzducM3xr5j3SmXWLi3wMuUQUo3dzj4GvRtFtGeYDZCQVPndnckUv2DV8gq5TxeAZ8nXwUYhXBg23WUUSJjXmE",
  "key7": "2pDvaHWwiaR3UFQauHvaQHn2z4rk7rwxrxnxgSpFE3mSxy2mgsUfP7gopcv7Xxf5pGwFFyxBcyBHTVBwH3LRvG6w",
  "key8": "f125Ecu5AHB9ZEMRdnpD5LkrVa5v4d2N5Kww44Q9ecYLPo7GhFug9NXNU21NgaYA4g4xgrJM2y5NDvbikYZSwbD",
  "key9": "4LgfbQ4Q29pEKVJB7B9bUudVgiyjvaUkQaARSyTd2uXnYFNqcbF3UoxH2F7isVpKFEFexoupZqPc6mK3avp8J6K5",
  "key10": "2MufqKzwJZuWjihoDS8Fspo4vnpoXhw2D3Cw29SHTA6zR1E1kAjRBN4d5ZctgT99sDR5xAGPJ9uJnB2C93jp9LkL",
  "key11": "2RSaNP3HiNXeqrACVNrdVwESdLaEJ4mGWQZRpe5oRikd4SsQ45SFhRM41Drj2X2upQNENbpkASEXB4mPUF4g2kji",
  "key12": "2PaK83tt8bcgfzbMMQYpYFXL1hESJeRbNXaGZAqRdK5ECh3piuaC3VFFrfgSYyNGq56pbt2FAXiLQXdwFq2jnBF5",
  "key13": "3N6US9ai7nBtnWyTRySQqedpFhm9bZqWo6rkLBSSc8dznAfSx8onuvbfvUfJ4KKgBGy6ZF7A3CNB2XeeEzA21kRH",
  "key14": "4KgEPRJEssimatnj2mGZMn4SMTHGVsrRXdZ5auHisy9gRtFgBFmXeeQyZTdxoRtKXeNNgUB3xfrgKVK2oidRfUL8",
  "key15": "ZB89qKknp9jA5DgoJvPRkLXi3MKis3HYkwmZwB2KwyY7d5YMZ19smNhRHP796z9Rud2JdFLQNgrpvuU3CRw1aRw",
  "key16": "3JmxnrXAMBHw5yNEkpF811SwsvC7hjQ1qZbcKtWLViUYcnvyt3d5zpz4wmnq7DaLAwtmzhJVaM7wfqzhssQyDi5w",
  "key17": "2hScrT6KM47bGFbh12pQuGaRt8DfgyDvCWhZnZXzRB8yhDAfPuSig6KasdAZRFGHq76KTHvP6n4JugHyWK6U4GbX",
  "key18": "3vzGTCV4L9D3FtqUGepTnqzbiGh1e5QQHjJdAWRV2w41Gp4DvJnfosaraMmXD2egz9YmdEd6feXRRDAwXa2FsvHP",
  "key19": "JLu3GAZCkKBka2Tcz3AkcmjTCiVHAeqSpmF4GEgcxdiTtEL72Dw8EV2o4PwxWP3FrETDMXnnpKf9VXCTSKoWUbz",
  "key20": "4xYSzBetNAy4mLWiEbVdFADni7d8wesR9kvYepjgugTWQ5bAgortEhoJbsVP5B4SkPZ1m4PqwUtRNceGiSNGcppB",
  "key21": "4VfWAkS4y3j36tnDvjnzmvNSkPLwsxkzKr6W5pJGEMih9gKdXrFBWq23bFnDcmGc6bYVfCGGb15rUGxkN6yWr2hb",
  "key22": "2FRecKJ2AMggs9yStbvifyvrfYnKcd4zreQUxM3JKGyfiGbdS7YpQx4WzqRWXV1EHSeEuvjDTKSeJSvpHQzxkBJs",
  "key23": "65EEoZmtknWfk6oo9UJST4nmjBcBZRckMJyP3BcLtNfX6bNyZwhDk5PKVma6afLRtGnQSgkjLT2HWLtGSL1qb26y",
  "key24": "59HDSo7JKamBSiGsSvfheoNYCPexBNXaKEGk495fr3cDuJbpHSD1k9F7H8vNqSkJzFUsq5sjVXApBYverwzwwfAB",
  "key25": "4TvAB2B7v3FFxZq7i8mZ68ki8fSj2EzKchbCtrwBfp3D9i6PNFszF6zabPrDdVYraE9wctKbGPFGmHgiKi6oeyyC",
  "key26": "4HWARX1Pbj77EfcLYkkKuGqSjBBJU2kJ3NNuxiLyJ83aCsMM9Q4VJT9XhMfHuzZdb5uKXdK5eGFCBedibPGKsAKA",
  "key27": "43widd4FXTGZKM1oejY1P8vKQnf7BHF5BdTMcxNjBa5CyJ8NYoS6Po19KrUk58gPMHKr72hNtCBHsSUyHiJVb7t7",
  "key28": "2h2jsDD7EUwFiZo5uYtZJtgjjExdpDFsHXi5wPgfAx1eq5nPnw9Dcu7hcgDsNcxNLPBkovNnX3HRTph6yDKeZygG",
  "key29": "4fxLJ8Spyzggf6mW6xUYQuHCVaq1v2LNGN29PHjpWxP24Vj8jJghWWdnNBpj2eBKeSFETqgnCY2zZ8fGzS7mNCdH",
  "key30": "4y8CvQ1F4nWvNZSvSbebK7zhHMGU68XMEs6ZdPBjuPSFnzbg7Tqi6cty2qnT416edQGwLbDhDgndK7Kx2K95nWMp",
  "key31": "tTrWtovX9EVSKpUp3cqR1C6HrU8nDUALv9HwgThWYTusL2RtxuEpLrPj34n5DUSvM5ussPrCHhVRCuJjpwD5x8R",
  "key32": "5iSfg25LrTuUQRdRcfHHaPHRtgYxw2GHPzvSWNevhGVMjYW1GRa2Qt4YSGeAj5JVrGL9oBZ8UsYf8UV7ny8EidNF",
  "key33": "QCWko5hLkk7KJ8xG3x2KZ9MSXex9ZBMvmE482ZnzvvEgzYntymFWCQHUkLr9LT6RaSuC3ZfKLcGaW1AumeFzFA5",
  "key34": "4HJfqGFRBYtbkquFJnBE5pBUDvKDXZbDqQ7ECtdcjtZeaWi29YxRYskrsCthLhYW1Tbavr7dTjDUuKW98YJvSGdp",
  "key35": "2HsUQE82QLUE1TwS2dz43BuJgLGoLeZHtre1PiLqhPDg9jwG4ZXS2x6vfuKevvD9aXtYWVf3Dh3JjC4qYh6XpFif",
  "key36": "3izReecAYHb8oevXutCPUbimCLy3cYspvdGFuiKMZcwVro39aytcuR2Mh3wiqJjaMpVmw5LVTDs3ZXxCXQ3nemqt",
  "key37": "36QAeFAdck3KeSRT5cTeVKiQjXiUHXFKAwADJW848FKYgU9o4Z8QUQKGgeRKNxdXxzah98EU8XkEmMD5wGzaDcyh",
  "key38": "3GBQkTznFqnEsRWJ2PD1uWQZPVg9uBcQaP1AEzaqvGogaPrhkLUcpyDqPBHZzWDM7MJdSrU5UJbNBU1KLFhWMyXY",
  "key39": "3iJt99AGqRQ6dMKauhToXWwYj7MCzwDHjzS8VTeJ3moRXMXhEmgWjgYcHxfkJVgUrP3Sk9DdDhRB1RfB6V12kBpv"
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
