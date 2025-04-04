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
    "vSSEVtynqve4z6UtGjjRXY1W9hQ7MXMxQaSRfyEdt6fjLZJRuukKTDJ8SqPmY7XPmju9CENvj2LbPwWtywqa19L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2znuQgJDGPaPBbz6Kq37fHaDFsKVRSQz6VAkLopYs9fnvG4nr8q5t33idzSPoVgX9evjcDRimK69qVLBxeUrn9Jm",
  "key1": "4GgiwxKbznpsNsi7EjGWeDXghd9Jn5infiodhTaGVaK33hENZHuFARVi8GKtRctKZ8vkr4kLCZwug2gRcTqEE3TH",
  "key2": "48SbJNpSt57BeRscZUURpGwtfkfhdHTzDe6tMwVyjuyViPbti9uHBLMLrzvWM6gCPs53BTEMMcNRFCZbfCckCAN9",
  "key3": "2dcxmCJWQ7ykntGhTvgvFX4vDaLJWTmtNexrjsN5ULhkxchE9c9nJgg1jU86NHv5EiWr29E4E5A9odHkMo4KjtdG",
  "key4": "2ATeJCqa9PJ3MVCgh8pL6mwdsnjGjVvvXXxyyP78HFWbwr6ZgwHkbkPsaLmFMUsqoCiwZ2ymNS8KMVjXcDrezZ1h",
  "key5": "4tRNvSFzeozDaV21Xv4NFB16QXyck8osrgx5GBYyZP8MuPiJVwNPktdwFRNBWhKFUiva86f7DQyxtfM7Uux2fwn4",
  "key6": "4FbN1yo75u79WoDuo4dmkk1VcEr66ezBPoLmj9bxVmKjjujkozUUEewZQhFE5LpqmRA8sZCo7A5V26FbQUefGiRm",
  "key7": "2CLEKXVCsfotoZmLemMB2Kvj5PZpYWEN2AZt4z53cejsVKRTfKFAgcvxLvQoijEfA4Thy3kxfjuqgH5hRLZQJHuY",
  "key8": "fRwh4CpHivwjUUpm6iu7y2um1X5wQp5XcM95jqyMgKGwr8Z55Gg8nJRrAxwbNbaYHCiP2i2CHFh6kiAwMrzczBd",
  "key9": "4ixpw3GfhoymFiu6oin64VCSvmX6H8AkHuzFGMT71JKAtCof87KcXvcLW2n33esGaor9cUNZwTrYP1hfCLSuBXSp",
  "key10": "3XjoYZwhkKqUcbhVZxRA6TcKZXySD94X6gLk5HAMhtC6JTGMp9tbY5wqy6eVLV6kzFeRcShTZ7pfiMWtbR4iSLJx",
  "key11": "5tCgaTEfwd7g4gXGE9e7j2jCUyoEjEsLsJ2p9et1FCVshSeGPLQnWuWDbCJa337sURx56utdL13o69TtwvdmF9t5",
  "key12": "vkNLZkEQLEKkABFSonKVHb8UoCLBVA3Wo6YBWavqZK1H6nQbvywqAtEPJXxYx6e38cuVqLM4hdt6xirx77e6f1h",
  "key13": "4P6CgsQYhi7U9YzfpFmRdC8AfiJD2NABMw9fJoMZouL8jyybtBwKKHspQHd3nWTCPt6JXJ11kWqVEQgGqwKh7VN3",
  "key14": "kJe5SFGJJrneTTRmVFN5g5kAtrEeGzZDUgNLNvoYhHRkEmU6kzS3Uyg9q26Ww3ihQqq2iCEBi2ThAbioBuwvUPH",
  "key15": "2dUU9J2T2EHNYTs4Aza5u2rPrZ5bXnSjDV1gw5H9RBuTsT6iwj9awT5Jm3g46qU1beVqkXvotYABCosr5k33qYrf",
  "key16": "3GHtoYygLkAAts6ETnEXA4Cdx5n7W8XBewLVobPyNygXnDQ42NrT2GmyapJDyJ5qrFFxtCpiRaAWfh2nen7gmVt3",
  "key17": "5K3yHKy5LQ8GqugmUD4LbgtAf8CffqtQUcCAcSeNEDwNwqHrMQ9LFFuHds4aJd33JJ8mnGWDNeof4QqUVK59ETqD",
  "key18": "4EQZqb5p2yjZaUqPqZwYAzBp4FQ69EYYGrZSUNxNabRyK8ws5pRbqBMLBLnKMQGQLiZGSGFaEL7LbVj4JKyVuNUb",
  "key19": "5JRvDWs8G5NA8HL2eSkPyg8ZifhGbyFsqQUPaHTokExuQdMNNjjpkxvKuiWTkvggWZvws3LvN1ypS7GNfiDgtmp8",
  "key20": "2LCEsLfSfww7Xv5vfxyhA3qEoGiPMCKd4H59wpBuBDMCevqJcKug1Suz97JgXLqgf2WASyHak67qbBakwq8gPjrg",
  "key21": "sxyyKTU5MaRbTRE1hAtusM1WpZnEe6hZEL55LoiP4GdnLJn7TqNjYoXioRjCN6v9ff8oknEWi9SRVTsoZnJjSuB",
  "key22": "2UY2KXqhzWTu5zkUeC2vxFMhUqvpkZAhb8qusDSM9xaNA4T5KzCKgzsRcueCRNxaWp9qPao3zzRuFR3SWFQ53mpL",
  "key23": "2hBGsNTkzVwdsPdncovyMxxQsRZVHRca1RZnPydjkC7AwDueay2JabetyEWX2zs6wVPhrcQa7kRCybL2tcYqZBPJ",
  "key24": "4cquCcsQQgAcL6PqVk9dT1QJBVSgjwH3yxfodiTwvisjumA9nXbpEfKbxnkcga21Exexrk6h4ghfcCLcso6pbuun",
  "key25": "UpG4bnXd9uz9DMwCc87bYUnZUDoaBzL7KXv4ttSSvMez1zLpPqeMxVHN1UdBFsJeXwCRWALJxktCpDUNkd5q6s8",
  "key26": "3sW9UydSF2kXTSfTiy2BZwjT3hpSiRX1h16xj4PgunAJdU8XeBduyYm8Hv6McdVFcGhDk4jws1f2W72fzoPFWuEs",
  "key27": "5dmWst924CiTbV49CUv5uNMojV92KT8VNkUQEz6Lk2RNJF31EEoKxQEHHoNyxozY1BhibohKNQDCjpYopkpQ16Zm",
  "key28": "2ugFNGktXNjebSuTzzu19oL2matGRmVE5hpAonVFYd5DAqqUbHBA4XqRZQ5xoxDAwmZ8TxbL1xY6sqBDrgQihovB",
  "key29": "4RvDQEdEMtV4Ak4V1QFHcbFi3FsFbt1xAgnmmgt2bJbBXuDREDQz9JH2v9rPGJbmGAQDyCGwXcX9ZAHTpu42KQQX",
  "key30": "3HEXrjvzJ5SW41MA4s8FK79RP5AgiXpFzmb25eeweX7jCx7YuEKPSTjuDqi9Pty4oy14AZ8UGhqg2wbTMQQBNnCt",
  "key31": "3d1CZdFXfTrMrdHFAc2c8euKWF5bqh5dSCUxbutRKatkhTLLfLfebs3hBdF3R9p2GwmLth6dSgx7c6hcVw39mpLF",
  "key32": "kej1QLyAapgzPNCrwHJbS78t1FwGnobRcb8vQdy1hqGTWEN2MCRLVgGzcJTc1hDHb79vr1fiJT2LJG66EkquSKP",
  "key33": "5Zk4h7ovdzwk7MjLWnyrqQQE4QfppGrmmMmYCWpNKduhQLZb9wr65AGQPdakr7gYvyJEBgrfSreKA6u5kr8GPQa9",
  "key34": "5WSfn22TG6kezsQduLnW1Pa6z3NsJKVGAxrHgJJGPvTqauKyEMf726gNwnCuPx3S1PJHUUAh5sG7ntdSxtjNwJQv",
  "key35": "3Vr32Sfhsn1VVN4fM4g5WMKBr4c6AKJCp2bMh4RDpYdX6uQhRpmumvCs9bMAc9kCKeGHvDce6QEsYdsEzhug3UYk",
  "key36": "2JnT3joo8dR9nY5YkKMqZPYvkA7Vuzvr6QpjFnCtacEd594c93vPxcRYPBTMunaFSHZrpkXRNTre8gvCVMjNMh6z",
  "key37": "TZJtJntPRHzh1Z67VvaWDsByJgCDEo4evyoCp76KFDKKqstoxeKtg4EHmAZYfog9taN3X4rB3wcKp3auSbio3c4",
  "key38": "2oT8owSw6TvJruQneeNgHfdhGrVFiNRrkTR2HY13xsHwBdtNjk9n1kBavaiPRieHx21xDjkk5eq2sws5515ZAeqA",
  "key39": "2hF3cZJKT2ijN444RKeBnWM8uvcRBoVDZ6PhbCWKPa2z99HRiByg2uvhn232VAEVsVzfoEGJoygRgxJ2ZTiYtXMG",
  "key40": "D42yv3uHsGikZLUwrouANeu4y8UCAx5n9eKveiavDXkfi5ovepT5o6wiyL49FQrVrU38Dq8QAX2aLQJkHswLnjn",
  "key41": "5UQs8qDNdH3v8e7KaNtAN7JhAcUQXHZ6F73KBHrWbs6dnUeUKWHvbRgxR6HhCnkjK7BHtkP4vjXPgkDBxXixVXGc",
  "key42": "4dJ6dguUN8zkPARjDkSjmE4LczCUx47FQFiyXPE3nPxHNSCKS5fXUS6SHYAaSk3cnRhnewsAHMwmt5owVojdwWE8",
  "key43": "NZif1QWRFKrzf4HqSLUuvgfehCG2vo1p6p8ir2dx2Gz29z9pYr1WrTjm6C4DQfWwg4dwb41fwZj1GJsFgGMS4rC",
  "key44": "5JAnNAhDjDbBqoiVSMARcjSNeYFRfyhbdSj7Ykik4bTtv9shpFyZk1dg19Mxw5tLK7eFQz4idpinxAHt1smacSR8",
  "key45": "2h3TdTkpSaBhmFj8ihaVTRorjE9ThPVZVwdjn3bBnQktF2d9ngEZJB8qiw4GMjvkdCny7n9d7q5EoYok7b3Dqt6H"
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
