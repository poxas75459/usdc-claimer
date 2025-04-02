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
    "pK12g5YwyrqhFfNToeKoiiVBqzhLtqiWQagwrgek4CwLYuSkGxpheUGXFKVVvbjAhjsMSwWF5n3Bg91M4z3tH7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47nDGTTyV4aNujmB58U4YSmfco4h5hR67Vb9att1BDY7WhHF11G2oEMkQiR4GcnAdUy8UMFERJS7xYZ5teRiULY3",
  "key1": "34AVtBzMgx73igVeogvSj3PGbWJ4kcFPxBYRUr3XE4EuGFad5aJG18ykj4nFR6AmzAzVzQXGcUGkG59bmcfxeQCU",
  "key2": "uWWWg2368g8GdmB8fJSUfoBatjKpR7pnjYitz1vLmVmaSDDUnWjkywFxxjeKrdaP4nCthJejajt4LX3TeZ78B88",
  "key3": "2YMsdkuq7MvFWJAWq9JtQLSXRFCSspZ2LrZPWr2DFwiJMcTsbTASLbGJBAwCPVYWs27owpNFfjJteVdmvf84AusC",
  "key4": "2VhNwyS5ruqaFoAxYqwKmQNvqKb8BTu4aj5TJP7g7aY9nYPvnhS31xM1Zm93AYU12EKfd87q2JkJgjQarDRu24cX",
  "key5": "548jAmKANFxZbZhij5nJVvt1F3sLzDAXSBx6q5ZdsuU8SCsrBaP9YJaf9cM3DysiZnRWjh41mpUc1Rb3CJrkbftQ",
  "key6": "V1dcnf69TCtQYZDjPt5M5ikw5guv5NywbSPMA9Z7Z3fDaoAkhMtBtgSneNF8M2GtuVCBeaimv8vmScmgXNemdQP",
  "key7": "58QYPSeRhCkYyYDCLWtJ1k9YLTPB2ugLhocMnkbLSGxhyBtz5LaABKNw8MEtW1axoyHNNZLrTiW3QnRfJydWW8WT",
  "key8": "66hw69VnR4axWdVtYtuLYG3JFaiiX2t3T7jsJKYZgHigG5PBhSyBkZEeCYZb3eN7j3MsJZuhGUwm4nghUU6ZGxmt",
  "key9": "2pWaWrkMT9yD3XfgGmNWreiRK9JpYkgHP31LXLvtqZjW9yxTK97Q2kdM6cBYMGN2kaLmHtepUhDfwp5Mwk1MXgbG",
  "key10": "3n941QMB45ZqSPQkgRocdrX16NMMMPoHvGK8s1TcSZNzNiPPitw7abtbTWKW9oGza8zEogeD8q3oTEt2R13DfDkX",
  "key11": "5ck3VNs8DFxLyvH7KrBTJEoFqGG1wNDjq1VgSceLDPNq5EjwpKMiawAQYyUKBVSMrZvt5YVFxHkH2Vc6FR2K2ii5",
  "key12": "5TwLDHAz9jSvBtX6CHCmsCLa6CBqtLKW8H8kq7aPvrCKqmDHMH6K3CiimQrQz2DicDsouuGyTMnvtnTfHuQnxvWT",
  "key13": "3cAt1SNGhCYLvEvcHmtAJRB8927sPJPkT5Sq4Uvq8YY887Busutqjn4bEros9NPQ8Ui749UjcvJZTSnGbDx6RgC8",
  "key14": "88FfYqWYTHgiYiysRTrS98NMaQzzPFzFVwDUrHYe2zo3bvW3T4VtV6n5LkqavCrq78ULUoUGiSXAZ1DT6sjqxsg",
  "key15": "kJT97ZJe2HEC16naEPtVDRX8Dr3NHTMjXKMxPKppDbMv9z1yjaByfaVZRe5NiTU5diSkzKWXvBJsGyjWwNmNEBs",
  "key16": "2q2qvE8cjDdhKXxUG2Y13oc7ZKhzBTPTWau5NBofFvYVTdrMaFt4MJ4cXHMBaAiZWAAQWnFMQ3vhJD3c2Fgg39hD",
  "key17": "sDtsM9f9gRgX6DYyCvpgU1jJdzURFz5imQtzebyKhcFtnMi2fM5jxshEtQvSX6NbuiHwkMParV82zP88AxVvjhp",
  "key18": "4Hjp7yQNZvinLnwv3roGJK3MaToZAyL63HjaD9tHVC7bHC26ZPjWbBU9tAkHmBTNyjs8hJNmciSr2hmSZrdSdB1N",
  "key19": "AkdjhQ8rc55jkExj9EponK8WqLqRJ7G4Jn3EJY4kaYPQw2og8sBYP31iD13USifJoji3fSsP3VP6UnuJUy4KLHA",
  "key20": "jEGJKVXSgxtw5seGFfkUppH5N638aVySf675ncJPZUDaKeFaEA9g2mspUL41sssife8saCdmCGgqtSmZfdMxfEY",
  "key21": "3imtX7cVMDLVzBxLVcy93uocKQ3Ugop2uDTXHUZYq8xphv2KNeTHdRymeMkKfsweZAoVpRjJmGBCdQik69B6dJpU",
  "key22": "2no3a8oG55mXYGUXVBKhdwSE9rGbshJyJJyvTMXbPqrbq73ZzaVVkZ3SBpC5FP7xeqvVuz6z6QfKVTnXBvbDr6ZD",
  "key23": "PD8o7zfoVpUK9HPptNAQzHcBVeEShuXHk44LCZuTxrLjxuieUKSyREGmvhEuQJmLtaMy8GtDWA9AGKW1y4fRVkZ",
  "key24": "cCQdvg1J2kYUDA1v17Quqeuv3bENnwzinJKY426YXrnGWdQWNbs7VZThkQrc4WS3cvcuebXKJjc8WXjfcv2d9xQ",
  "key25": "2EXJ1b7mQswp6bduQGBprJsWgJwz3yMXGZ4VpuCE4oLyEzqzBhAUegpb3r1LdVUgSFCdCVzq7wNWXKSJQwZkUAEg",
  "key26": "3huVoURyVcZNYsbqz4jBiR4NaMEmHQGEqrFEiv1ptEdFn8cSuP5mTPbNMnmJLaJxxqh5RrHoQfuxXDouc9JdAvZm",
  "key27": "5hyLa5w1ZaDDtUAf838V8FxfiQwV5uaEhKcE8JiEV712koGCjbTJSbHyPVagDi4jFqeX6hi68qDWYCLTaLLPk81q",
  "key28": "21aRUabybtrmGP8KQZSQDhasnMvBnLoZWswehmVhZ1a7ezX3Z8egKb4oy8fCuHTa1w49o6avYDJWiZWe4vepqunk",
  "key29": "MNetsTXYQse9163SgjttJiYmRmDKtQjPB8e2VVc2TrvsLduAp7QvQtAesGxawAwhcmnp46qfYVPU7szuqmfKcck",
  "key30": "4a3G3UjQUryEZciX158pTGmJXCLvnWGFvEayt2wdmy9FxzPENfH3pwmEQWpytAXhbcMyG6zqc9b4R2qdncFHbNs8",
  "key31": "5sUSPqi4f3WtczFyfkZde3R7MXRWEGtzAkNZJXv54jJXtsDtpQUs7JhoTkotY4wjbhhjkeH4axtXKhJ48kpkjgfs",
  "key32": "2LRf7AxTCkggPsYG8T1343U5G69tCP8bVRL9v74F37SJshJfWejZ1vD14dA51jcAN2hwXRsEWNzFhkecbu4xtPPe",
  "key33": "5FZTcDumtwwDeAAz2r9D217WGB5qtpnjtd6VGmGvWf87v8SdM7EtfBHqms7WNTz8HGGvmg8gzuzwW662Lx244ehb",
  "key34": "33YzCVxjxqyN9ZWdnZJYR799B636R9VfaaT5GFowdx7pmwtYqVNMk2TD7SzbuCAguhK3pP4DxMk4wJAcNXGJeKsa",
  "key35": "7sS8cP5rufW7qRviXmU8Nf4VHMGjpe7vXko3CGp3t5AX2B6yNohivEddFqtpo9aPYGK1RR8muvNkQgDRsAXYgnH",
  "key36": "5gnLHRanMZQRx1zXPKufuKJjEw8HbgBe2G72c1QWow8vxEKrhmNNsivZUDm2Aqzv2Z9e9ro2pMexGywNrHTm4mNL",
  "key37": "VnaURH9a2834JuvhCyccTrBJFmMveFgYSLsNAaAigApXEuTVgzT4DEV65JetnJKc7KhsyqqjF2Ufd7Y5QYkngnF",
  "key38": "2YPZTQPPiqrYt5ccrAMnc5GDWum7bWRPADit2FLShUTuKL9ToxD2Rx2YWcjJ3JsnvRdZ9Ln71UXM33p9wm4ep3o1",
  "key39": "25rhQUmv6CaAhMz9onvyLD83HALzYYVuSCXGNJmGgoLHB2WN8biQMRetLUDb7qbkDZum7jVt3oDrEQWQHKWfejB7",
  "key40": "39N6uFPjEzE9UGA3aoD1D847xLZVtvc9dqAujD4B6FJ7DipWSdio6N4hNdchmAB8ww1XbGP3Guwcs9gPfkgCiGL5",
  "key41": "3MpLcpCtWkevCvxiBgcphsQnA7uKiiFTcjDbKBXnPXD1RYLweryA6j1syezPajq2C3Cb5hrAuyRgghAsXTwt7ti",
  "key42": "26eP85wZJ5owXifSQMmZbJYNHUsPyjrVdtqtKCAa9GGbZiBnm8Fk2KnmdW32fcNvtm1WBMb63xVx1E75JRoDiGMy",
  "key43": "2yKr3KnRtXsXQHrdoRnijKk8zKTNiBfavy9A3ydLi1s6R1nsKb2bdcy7qVckQ3Nz4e8KvmQYKoNjRxP4NXFSgtjR",
  "key44": "2HkBHpNz8eX237RVYFw9cLLRF4qwfnSzz9b8soA2irhaDmHU6WBxwyYeXr98wN2j69LJRmzWgfsukq6GkwmNhPdH",
  "key45": "5zTBibVwzBWGG7tZzxwb92cAwHHBgoydxVJ6NhjoS5qRC8odiu5ntqPLxwRHv3GUmvfhextzTqEjRRDt5pJsxerS",
  "key46": "42ZPYKRyb8wqa6oNNtSU1WDQUYUcY7HLPnwrBm9mGG9fsGowhbuurWLKkzgnN9sHsPUSRCuRPBwPXZ7hEyqLZefP",
  "key47": "DzFWJKr7XhuAN2bLb1w6QBY4EHxMzf6uGqq12RuX2tQLgzvobsgJCDRFeG54RDve1uSW2Di3HWYSTfy6rhXErPW"
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
