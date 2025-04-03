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
    "2S7U1Tt2S2kGRWpRRUirtZKgtzdXN2ZtuSRt2CsoCyACTuk1HFW3pkN35pH4FhWTzAQ9oJK8QhMJM9LMex7Zbm5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D94aWCpH8TDzmPVuyMRGuzxyHKXtQ2ThAWDHJrreuoU8no8Mjgpsvtiv9AaeZCJzWD2ypG7HJTGH7Q8ksvkgJ22",
  "key1": "25TrdSd2HMMWw7KwZAtVpzz3wqZwf4w268vRHdbLCgeiUEdb77ZeW5Mu4drJb1ZsU5zE6gGKACZaePzf4fX8tDTq",
  "key2": "5rNg3f3SCVptmBqmvC8WRgsUTc5hDfs8pEenfkfZgMF7AagkW9RVJvjUMwwsEX3HQ5QUHuziFP2bAoK1KjK7Zw5X",
  "key3": "3AV33ogVeGjmfvb4ZmLVjKfs7ySD9XdHvvwSAWEwV2H6ZayiyE3UapSbQ9iJumbA9YZk3cd5qVb7SCEBVQfq9Ba",
  "key4": "2rZnjt8EkUXKYm77G6D4btnFYCovn1ct6opqNxA94eeGgUQ8exeHL5D9jJcLXZ624WEXzYzg74Sh1T3AsMCE6vu6",
  "key5": "czYafoz3UyLY4SGk6f6cqmejfXi12iJscdAWijbySTcumFnb7wW3iPdqPHHgdY674NgZEkrG7uqwMediHTuXQ3V",
  "key6": "5mtSX9XGsQsYbLAXKpANUZ6Fdjpf2ub9NEmq7jkhoWRf2Y8DGbBDC5mQnygmUDH62ymPZNPLTNLycLhxm9K1H8Up",
  "key7": "jxYdKeyFKfJCPw5ufy41RExX7ZEqijBxko5PUdRYr9iCkAccxzvyYta4e3Zzk3FKAsaosYbv42K3U4pYECRYMhZ",
  "key8": "2H7mAi4y82iKJsXrAX6tjNB5p3Jiid2XnSQ88BjKoJcjG9Uyx8zWQ3iKf23D7XpnRhg5PjwwzU6PGLRboU3smSEs",
  "key9": "2RSj7ZxLwaL2Y9yd5ihwjaYm6zgduNr1VTy3H11izWU6w6d5J2ATQL71fcujn44V5HcmLbagLRoR4rmFeaG1xdKc",
  "key10": "2NtjaXHZH2qwQ5Nh8THfvmgDXyZvY7x5PnitmR6zXRHZU4VUMpbqayvTuegVLDNP74hzMWD4xmHGpoTe8DLQkfaz",
  "key11": "fy5g35yURm9J8r7Cz3xNTEbxNFun9eT12SFQ7SRGvK87REiL51xzDHrWDiLQzPPKz8y6oJzPqQCYDsxbhZecRkQ",
  "key12": "5vCBdctKY45Swj7KttPHSVabzamEM9anL5GctxUnRsqd5UJqsJwS83QLajxqY6js41HVQ8tKUfWJ4BWGBtnFYYSz",
  "key13": "2PmwY6QQpgUpJSRhTp2ymnGLvFNKpqJFCM11UPWWpruiWtTQX3L2k3FkeFPNyAmPLj6G4UZZNNEPjciSFp2gosGY",
  "key14": "2A53X8zyAGpBytRbHznLBMrHaKNLmyTpSTnidqtPvTrYq8ywVFzj4MxYhkz1594KCj8aPcEhWxY7msVfJ3ThrHv3",
  "key15": "675CefGKmUQhoNs1crNkjRjGGMWrcr5L615JTAr3TQFcF2X7Rr1CwRAxEVM25ZZL2w62GqWoTpy33zcUhU83W9GS",
  "key16": "2pip4QDwn3P9Va4quAxsb7S6JJXpr1NpjMhj1xrHHuw8K3USY9AC3jfA9gs6w7eDU1WrybmAuVcF56L5rqMKPfMX",
  "key17": "5EV9Q2LgbR2TzFUMmN7ZPZH7hXH5b3V6rDuHBYfzfcsQ6hMbB7eRYdumknWP8V9uSGsxnpLv84Fe2VEiU4KN1qmN",
  "key18": "wiT9pWS1fXVJroYhMHa2PAVFB6sLjTfBXyUYGsEHU2KXRsobwCyao2ze4MERwQFDNq7johdXSc4A3SWuEsDHxqY",
  "key19": "2VkbypovabVkvY8Xtjq57PFrfhSJR5c1SJwuqXnH7z4pcL5KMRoSh1YeLqs56sVRmEax9fzJejckqtoqQYHcfLys",
  "key20": "oXW4BEqvvg6LyjnhXRcJm7Sk2p3QYqCMmRQctRtpmNCTWZZ5QoccnQdwB6frdusCroJgFCbo68DxenQcVR568a6",
  "key21": "QxQzE51H55NUkhDezoN2oVUiD4wnPAquHA7WGrKnmGiJTYt4jLRV5ygd7A67R4CD1ctiWgjQafbBF2ZrP7xRouX",
  "key22": "3r6bFXaqnTMfCVt9273DmJdfnDsCbfnQtwdMqoUtHea9917b2rBQSLnhDHGdiQV5of86JgNowpQ51XuUme2p2bLY",
  "key23": "53eZji2uqtD3zzwnr3NB3EyQi2ayfF57zwTsb2HYopf45MpzU9nsuU9py63VGDA19nuTG3HQegN14UXTNDu3SL8m",
  "key24": "369ajBUSiJ21jgscyLxg1woUgh5dEoWrowju17GXvESBEiUwe5A6KY8PqKLzS641Eqm8bpGoDhmSuiCo8dfVXAo3",
  "key25": "5RUgiiLxeqGqxaPbiLXYcqRYLdUELn5wbjS8CRJs4DYr7EnjeF5eBGczzYeLodU65WpLCfSJBUFNTa6yUW65WDH8",
  "key26": "4HoMdH5iBfMRPMsYER6anXEHeBnPAk5z3PAuZNx16FhBXTr8T7yJDdzgmVi1q5Bn5n9Swq7GVfQghQddfCfjnh9f",
  "key27": "pncmeRUM3bXmkEPFiSPFzwQ4cn1nGx9XQF9TPbKSjuygUavMsgJgqZyFqwLV59ryNJWrQH9HVAHgChfHWH5cAxg",
  "key28": "PhRJ1dBqNePbTpL8fRB5S8vevDmN5UCHhshhk7nHgyKedDMDBYzby22X8GP3TC5upZzgv7svbxRAhNRfuzVd5TY",
  "key29": "5dA7HbqqWc69pi8MeeGybMT4TAWi4uWCKKVGnw6n2hJvDyHFFPcde6ZCBeNWc51RmDxREKXubLhNzH81YvRBXZtc",
  "key30": "xQr8sE1AaPb2RqVCvut4kYHhvyZBoMiJ1QgEtQ8StNfCZV8aHET5YxLYEqxnQqU8QYiVwGAjg8Ex74HiJ2wPUXF",
  "key31": "5k8GS2VexNhwqXHKuozhFUBck9dgHWjABB5GBbKKVPvLy2DuJkT4tPSUE89HehzGVrKAxETk4AB1ANov4KQokrFe",
  "key32": "Uc8KRJ5BFjUBd9pU8akZj6CjAKXbqPePhFtEWbN1XrtwiDNsMDDRFpdy6aazAFs7oh7M9RJrPdMu4hwteJXZqSu",
  "key33": "46GH2tURTxPX4GAjXqiRUfUKg1EkkC5AtTQ36WtxX2ECnkaXAXHBMi2RrFzrHNR94bNWT8AfxnnmGu7HcscUPsfx",
  "key34": "Vv2D6B8mLGczRc9zdvTAwgzLZWD51btaT6GhqwBUkw8a7SFrgffD397c4cqmEAVFC5DaxiwaT9CSbzbdPEUEkxg",
  "key35": "36TjdosAXJcCpCqRL7FygqtoBAAG15NRp8BWicxuD1kFXcBhJvxpcPqvri7AA8NwC3RFkSF8hCkdaKfETKzvqPnz",
  "key36": "63MkarCQRKwHybRz4XFRVWfcCV3ttnN6B14hMnPnZrozDX2scD5QeTLWQDt1wwjTxaD3SoYYcxVAgw5ahqdmVhMU",
  "key37": "2soQqx3Mor6r961cTpXVhY2hHmioHvffBj7s5846FoVCvzUv6fLFpcQJBi4Ji4BXGwUBkYEwwwwtazg4RBcyNVm6"
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
