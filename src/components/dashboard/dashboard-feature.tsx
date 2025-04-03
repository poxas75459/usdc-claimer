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
    "2Yh5PLgRDq5xm5Bo8zXL7aUbctFR6BT6aDBVeQtg4K3Go5hsqQrqmdZjY33wNzjpZ37VXQLmCfHCh42vFiF5xmGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LtLSTuMEABqZ43ACSq8A6JL84s43R3c8fJqwegGUzhM75Kd2Wqm2o5EgR8nbp6HEcaC5mt9pri3ay4u5Sw6ttAv",
  "key1": "3wc9SGXPdQSgfwbYfuwCgugKtySwtrMP8csi31GZBfd7LAtttvWC231iaUjobH7sBvnv7WakmizyoaV2kPiR98xU",
  "key2": "4hfFCgfNBpDr54pFxLC4zzsNp8uZMFWbr6vw6TMrWPtzGcPHnq3miR28y9eiScoVSCQRKc1KuDw4sNLDRmHKbYKk",
  "key3": "5Vekjrv1cXERVh3Kb9BoSpGGRYsUPVt3q1ovhX8Te5zBDA8upehN7LJy5iPDetUXp5cz6Ght9c61c9pNdQNsVRS9",
  "key4": "QKvVLo4goS63jkdDogxBvSU2ycDGiuqjZeRm6HTYTRYcEJXhkCauN92TQgmzSTXGmGgxKCQsvyWxqEHjCJTCNgc",
  "key5": "reN9hdiYUQDGKp2aoBWEstK1Tk9zNjvLqYot8ribzncJm6Dk1WA2b6nbU4EVo9qpjcgGzYQbo9Kaz1dwzPCQS7Q",
  "key6": "3Ghhb7or4HFbqdhAvKWtK6vBMKMeju4epCujMydp9T1FSGEP1Pgb3xex8sDQYRoG7K3BJDKLvbCAcVpnE9sfGnsp",
  "key7": "5MwsdyTZto8YrtTghaBe62VqfoVwXwgBW91WBAU53DDgKB7cUk3QC4CCnHdGpah3DmHFgeH6H172kyFmSFuGwSsn",
  "key8": "cFEgGcLGdjHkKoJ26r8Z3Rx6GNKhCsDRf6KFSqAM6WARXtFm7uBcX6FgnK6cmba8cHEuGucuSTz4YrFJi9JvHjj",
  "key9": "cxZz1Caqs2MBgqG8RJHoyXgy1kjDV31z1mPJHmP44vSs3jMJyykktE2fDUiXXvcFkNDCHjS74pFmztJniEYjF7n",
  "key10": "2SRGQ1faTncEDc2RXmAw5zgpPGvnuMVyYo4L84KfjvMifuXAXw8hqnTEn3JEcWwGGb5Aux3CUKVQ4ggQ7ZqiZaaQ",
  "key11": "nX2UxBeFha32VQXYU9GG2KTD82DN8x8vSiR38devnseP8UzC2pw6X7SNHnSDTGj3yoyXgQ1PS33kfkHPKKSXVDa",
  "key12": "B5qzyj5UjzHNHHYsLGdc8XCQBudAdT4mJMAbzgQHA6CtfAXKcUcM9Vx67DPLJuJJ8MdYyDWBj8WivAv9PkuPyvg",
  "key13": "5tDF2uQJJaFqjpvg8seGvuBuDRjdC4nNHXRdU8yn7bTE2FBwWYbgNJ7hiuE6qDRng392ZSbQeUBjYR7acdhkrjLW",
  "key14": "4qyKd2zcevYdLjN3TEHjE4xaCujBtLLNLoi59Pzoo5uAkSgMaZQ6nZqR54fxkJhcqcqcRdweqtqGqg37FdxgKtUa",
  "key15": "41Rzo8G6Xvbzz7UEeJ8hKUNsTwJSFVEjfXyCMQ4FYREbQg1PGLHRVv7ogdmfJtLWmvStKYi75APLwqCJRES5ahVB",
  "key16": "5Tbat3F42DkXESByjjN9EoQ6UJcrRmwbzWpLp1zjbUediw6qiy2ViJMeE9uXrbFDQC2QTUTznc5KK9P2PXBjYTS5",
  "key17": "3K1fgupS4bqsfSyQAyXFRrDHk39tnrHntQNm46KhEjNYTZjzTK4u1JhzAqeAAbTwrmxbnBWxXQfWc8FEcJpr1mwc",
  "key18": "4xPfYjWNHSAMNPk4vrAnFbFQwZWZUoMKrm9unmmJeVk5bwqm6JL1E2MCWXKKun1EYDwpqdE57YmLK4rNe1TBmgCB",
  "key19": "2YTg9aKJSjwC3u2HQ8H5oMDmPbmDZ8gZzcRzEFboAWLzRvwPACFs2k8HfboCpGPk7p5vKEo21oW7sZ8jaqHTpx1y",
  "key20": "rxt3kHetY4kfyBCzgHyDyJuEPL7xRVNVyaY2URRmX3CU2K2W1g2sfZhbChPjvBoBQzUvgqP5e8MXgXe6Qz1BgbF",
  "key21": "5WuSuAkWE8wPShBzn6HweFDkfVhUBL9VZiuZUTgR4DuHi9gbZg4vt5P4QKK3WmDYJZ2cfwEqzmTCkHZTb2qLN1CN",
  "key22": "3fs3FMoH3MaCLEEcUaE2AcvRSC8bAXNpv1eZ5yZ33XjK5iXJK213P8oxVmj7TcnKquE2aSc8XdU6bauGAHK8tWeM",
  "key23": "25z4YCrNQfwpS5FmTthWUJLgXUB6u3cz66mUQhqvQ3v2mJfG25TCPT18TCkBvhuFoT11YmgNG8hHNv6zHWeCs4LD",
  "key24": "3inQK8xz8nmpy6zDShYbZWQgMJtC4hh3f466oDGHqe1rFJzqLZBFGMa59KxAEx11KyFrJ35KUztY3qzbHFUby598",
  "key25": "39M7oYR3dgkTMmDPLLQhB7xt8L8zmWTKBo6kNtqVr5FsiRxnddqXvsYj8JRi6X1p1ba28dFAL1EXtv8az5FYyp1M",
  "key26": "5My7A2ND4FpxXsq6cPhBgs7VbvTRA16p36EF6GNYpMDNFH6rb3QtoqdBvTeywJSRAG4xAdvUXfR5UiF1ZKUXotHc",
  "key27": "2mCEcraz7uYK7iQMUcT1JQGQwsgFz6XJ2P75riiN8gFAhBy4JQXogS4m3hfBRjnzWin11mMkn6e7o5k28HwSqjbs",
  "key28": "4NE5KVmXCyQJ7wr691nCi9umbiwVUN777Au7h4cFT9B6wDiBT9QHjKcCGAyCSfKwdSyDxAExhys7KeL4ymQk3D3T",
  "key29": "HmdpFduEv7HZprU7o2yUaydLcbtbvunNA99CrLmXiiztDTHumpXKTw9qJEKwf9C3tbA8FPK3NBiKwDyy4s5dTEG",
  "key30": "5zLKL6piKSCBSNsxxBnDbnDR6tB3baaobsQGQ9js6Sos1qN32vayZt2hPftLFseHoP86PmptRPZ5ZabfCn9E65dZ",
  "key31": "5F7Ek7X3E7iaLaQRGVFCiHDRgdJxyq8LNm23kedjN1n17fd7WQqDZYpBaLJ2KdJGz56yy7Ne2Te742sRbMxCuKtM",
  "key32": "iFTMXtoQ5BXkQbGNfNZWuHB4LbDXzfFLSXBCknTXck1qmFwqN5zsnpGiWtubv7A14vJwWv7qs4YEu1TpDKNxrJ5",
  "key33": "5EA9Mgaqr98RYSyEEzu9KdpKn3SLGnJg2Vt8oRdGw98smdRLVLzZKCRC2Nu7KeJsF3Sm5TQZfawSt2yycjt96su8",
  "key34": "42rjTpr4US9s7Hfj2NR6BNtmLSVZRrPoYHgnd4Gg1nkF4k11FMERH6jnHo7VqGs5FMDkxq54Hz4J7HnaceJEkXz5",
  "key35": "28Vjy9z4UFddQ4VmRKdegRfgGKHSWrxUD1uFmXkMYC39yR7Ct8oEySiUuG59k73r5zfCaNbQfErMQ6CAbHMy4KwB",
  "key36": "5zbMjqy3YP2tx9VppXyojB5WAzr1bU5VVCYU2EHXoyPFaLVZxeVmY6annZM6cotqDJjosK5gqFDvF9ctLnsPHCB",
  "key37": "2BTVP8TYSX9pfM6mLatiJtUSEkKtP3SgmHchPj6d6d52e4KfUg1SdH48MV9ws3LQxGZL7mEnFgVaLET1m5HvLGgv",
  "key38": "4sMgM4yApAXhELS11q1cfAdsKGTso6QBBE7b4AFmUDw2BoEzxDr7TQMpgNtfsYj7CH3RGb8a92oqxYHc9nh3SiQ2",
  "key39": "3JfotYjfV9KdG8L8hHWdekHhpvdoyUTzpg8C5gngRukTumeT7AxGzvCLdhXTkBjDeDeSDeeqoSrwFoapUunDG6VH",
  "key40": "4HNF4ZUyxzukJvmxiHLx7oy1tU9THcjceBtwKzPmEYX2SwSJXvPhe6aGYhr3wV9wC7DAXYJCLLTHn589DfesspCS",
  "key41": "2JdViRUBKRRVypiZqtf7AbsUhqGVk529KcnxzVCHhmNmgmQ9FZ8ivbeGrogNAHnHjcZXARdUADBUTzbdYGENbQRP",
  "key42": "2QLhPwpmxdhKaHWtqwWAhgNjFWMNrYfhJ27Yo4XyjfunptJjWug16WoFh8Fg3xwqtHcryk3uMdcGmmMyhw51hR6J",
  "key43": "j4wWFHEzTqwb8zzWUwhp7fqykuyX86A6n6jt4hd8ANhE9NdLL5MX7WgijuTGpLxRBpDc6SkNZXtodGuy73QPy3N",
  "key44": "64Fzkz1yKFCeEhcRAVStUg1kxSJ39R8vGqnes4vFDCsqkcYNLwXbmMsL9kVe5n35CewLZ76ysS6Rub9o1A5DTALn",
  "key45": "4b8KcKPas7LQmBWKd1QKdzxhTwEFHCKDizXQ6jchaMZ3TnboLyYv4DhmtRoJi7CJc6kdGLV7VZ5EvTLB1YukJUkz",
  "key46": "1yueeP1EeTLMYfLd7aLdmRmitWcVeYCf9RoWKYXZWCgStskA6bTYJiay3jyqQv6aA6vPazN6CZSrGMuxvGGDWLB",
  "key47": "45tnxHhnAUcbqxgR9MuLb9LfEMG4MaxSnWEgEX2qCyDUVFBreiEBDTZeJgoYQJuvEwzeng5hDWH3eksX8cjHaYK4"
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
