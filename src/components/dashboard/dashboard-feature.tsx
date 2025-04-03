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
    "5hNnCiipYfER9b37R9fW4F3pVMzNtPgu34e115n5k73dV6HK3iJ5qUsGR3nB7PVHmbR457BxuD3rtWJsnLSM7dPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X1d2JXaRG75oq1gZc3kYkmxv7ej9zkRff4QPr3jdYT1JaEQt1ztkeEpiHfpFnKm1HuzandoKpAWUPBh5aNeoK7D",
  "key1": "mPyxqSgZauQ32mnxsoSSDSLL3tKrQKy5BYETzWgkrrYxK82jMCjV5q5Ay2nrVKdeFqcTgNDNn1ukajDR5VCY7R1",
  "key2": "5AR4BZceGPvPTYeQZqcsmpxoUp5sZiA1enJbAhnEPfYRvAGT1jsP8btemDdRvWQTUvzjHWMNGRjtBMnJ4nkafaDo",
  "key3": "24kZLA3vjk5oRApN1Wmk1F9aUJSai8gpSfQ2mAhvB9G5PiwXs4uuKAV78FScAG2fGPE9eUyRdtXx61gPHe9e4UAM",
  "key4": "53cvHgSfAVxwfq4GSUcHZxXfi2cvmTaDjzAxm13K1u5ke7SUEwX7JcF94zXofv8eLXRJ69Fjow7W5myhb1T4Fukf",
  "key5": "4hBH7QaQ8745FzSkmhZNfSjSsNFDSzV28Hhi9bonccTrXKMfboKVX5V4AD4sK89q5opXgf18ourhhMu9Ur4BA7K9",
  "key6": "2vw17X4onVTscchV2eHNwuF3iaNr25SwWEsZDUL6jqK2FzwFW4oLgEFndjDqDHPnZAgxPZwu3hT8SuU1xmtFTf88",
  "key7": "3EPuvu4PHF589EP5xg59VPxxSg2arwAjQsHgS6hSpqHqDmQXsCzX1pMwq18hqzWiefHZ9He4Zqa8aAyuNArnkmK6",
  "key8": "S8sVpXEDqmjWdDTLkmCE9JTo4kcLyQxtgPxBJMX6f3pCJ4rgVsDA5vthLg2diXzTrRrUVW6epSRjE1NSPV5CCKF",
  "key9": "EJqeBpUzGkvyTgePL1JH35Tyqz7nBzkCh4RoSNZ18sTDsLrxQHUDdXKiGa29HrKQfn8WvXggQs2EbQ6HRh2QUDU",
  "key10": "4tbsXy8V1gzZMFpp1nVrFMV17NghUrZGKwQLSRJQVnJ1mStBULGqA9WeG7TG62Uzpr2RRUcWh1ky4VNi8RPWa5Gk",
  "key11": "4mKMaA7o4YMdMfdtodufgbJLmc45vEe1DayXsrgKfJQWLLWUH2GgCoFVuXYg8Z8MFqbEjrPsnoPPwxGoAaMEoXpw",
  "key12": "4n8L4uJ3xQmnVSigeQpPLaBjLWedd1gWgyZ8SLDHhnw94WPyt53omoWmUed4VZ4eFXWrtmWKXRoW1ZKsxwyQ38iS",
  "key13": "2moQjjEULgRHxRSyJGb23bmYo451rPNXBc99Bwf53HDYiNdGYqkcGA58976M15VFcnxf8aTvaVnc2sXwmjTwhCMx",
  "key14": "374nKT8GUoVhiBE4x2gKbrQ7Lfxzw86g7vEjtLQ4ffipZ79hojCpDoE3niMTMr1rRnbbZzEZ37NSXWEUdRNzWfcC",
  "key15": "4wny4KtpBwYMwUgMp8PFzwSjEZbjUtZcsKYbH5MPyssFbdJzzi5J26t3FcRV9GbK1dP2TfyvHtZeEc4DwqUVimBG",
  "key16": "5c2Jkp8DVk5ZCnrUbWnhFgJWkvqNzCDdHV7HNyuP2hPyUJzLvfMXWmhdKKscBz5Ub9qYqUyeeP6s3Ac9p1zuueo7",
  "key17": "28b2WXQLPWFBCnug6EPxyqrarJ2mYkzG2SiyH5Ao57vMJCXG5v7qKtaSCi6PfdhPoA3zKWExFJpShp6mPWoPkzdV",
  "key18": "53yi3T2wnko8trPdxVeQZJgZSeniCTPfbgnbPvjxSC4LVvH7jfdpvwErDhE8PCVZBQ8q2utru2nR9MuPZzYE7TFM",
  "key19": "127uy8kanhJmzs1SftA4yTMR9SpFuBbjm2MKjaiT6YgpHmQTt7xg626ecHmdW1UEzAQ7JhULCa2acFX7b1haTtMD",
  "key20": "5r6HKesz13u4ujPV3beQunGC2uFtvCCVYbjfMi7E3SwgumcjAzqhBgdNbBzHaCPx8Z5i86phBSJMRkqvMqK7wL7n",
  "key21": "26SWhnPi4S8GJqJSCxBn6RkTny27Jcd8jjsrEriFVCZXpdAAnqWWE7dBTv7Kuj892ntYYUGuvAbiYbv5ZQksxV6j",
  "key22": "2k6uLMLgD4MGx7qQQWo17aAJjfoy4sWBZfRe5cdyB2Bcr8P2oVDBwCzCtGK8idCZSZWs6rtMeY72vSCqx4vgX8Tp",
  "key23": "WX89XyufTnbcsAEnxqP3Wq4kJXZP8SSk9BMr7btVfj81duqqw7ZfZ6nonbtZ2qCaNkD4YfCAJKvgem1NhQjWJHG",
  "key24": "Gsk93jWaQhQVxD91FZUxiSVGFsZBq8nbS97P7dhfCpgmeMK7KBa1ktgfHaknroFb8xXH3Y7ACfV8eT9kDj8jePU",
  "key25": "2uEKWN9tFwvqU5AYPQZ42cw1cNSJXm7DRsZAvjxBfYB8tn9xkvESMQHPVa9fxZDVe9dEVYqqqxNvFrHk726tVmQ1",
  "key26": "37uEH6Qi9wMCJA9RQH9WncyRpyUFNTLFVTy1KP3HirBEHszsi5MtUzP6utscoDicmwqLKw88uYSbXNH7mVWWCA9s",
  "key27": "3nzJ7UYygP9AeXHzSJ37XWcTxdKjyo7f3JyhJGz77dGXAGYNZoVefx8jG88dkNVVgooHxEixWNKxBv3P52CvkjkN",
  "key28": "xToP8XxLo8NcR6qTweDUdf3n7GRazvPfTkzETCgJB4ZgGVtoJqwVBrKf8LPWaurJQ85dVAAMdBBNhR5r1FLjMxZ",
  "key29": "qs63UQT94qSVm3Qrp7o4S1HueH1Bz4axntQYseEbdG4ACwNChmWdw6C32cbt7z9LbUPVCdYT4cX6BW9AQcdgty7",
  "key30": "G4ykdZ1gzScQVzfq7hFsYRNF9xd6KXRm4iDNE1iipwc3WQXr64MjzffDwfRNm7FKeWf3sWYTkkaBBSXpkYD2vcT",
  "key31": "2ABCLyG6EgskpzLTkhztgTJ7Sieyn6GmxV4cgzzzvyMg2KDxUokkDiYYmRfwYn5bgjaNq2NFgN88AAXEQwCbBM3G",
  "key32": "3iKrPsKxjY6Cax6Bkc8royY4E87cgx3ZZn2uRwSDc7sPCUheKzFiHvDQJ3Drh76VNGqzxapuRFSpam8tHsxz9jSR",
  "key33": "2cu6BKd57rX4ky13u4epkfFfvGdrDm9xMPEHFFkMVawoHzphb6qHmiXAhprHGzRj41dw3JdsZEDWULaQhHPTRsCB",
  "key34": "4xWh7Xvebp1xouKDQQ43GAoqHJaH5Fiw6zxjeFhKYNVFYyKGmztn9zDFVVJjAcqmz4YjCreMpzHLy6xSYekqgPH2",
  "key35": "3HtB1zcUaspBNUcLnLTopKfs9MLcRoUkMmZgX6AjkG4YWzPXXp6WoiDw17JCd3uiqrYncfPBNCaNM1gX2B8DVaU5",
  "key36": "258vui1D9bCkpGyDwVvhfYCLCTUrwas54tcZiHaj5Lctnv9wepRiEfidX8VzJ5A7biWRBLeHKHHAcRdPBMpSiL3t",
  "key37": "2w69YP2g8m7g6i9KXyxGERRqAuDWs7xhNyWhtWYcVBvi2nGEyjBZYTninUB5a9a5GC9AgboXDM2twkTghFrK8X8c"
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
