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
    "krRuSgLJSwuYtNR8mgrrdL4q29Ktp1PNusQNxyQjW1yAuWhaHs6VqGWPxr9RX4DuCbpAHJytYmrUuzhGbcTMz68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PkqJY4zjDHicmViNSSxkgeKMbRhi3Rz8hKy48dTL5wguUAjfQb2SbsBdqH8cqh6wZZZZNu2LEhATXgAA9acL9Ln",
  "key1": "Br1ts8pUj3XgPxv3kBPoFuvohrejcwus4nskGLpcW9AU5CqfQSS9QSpAonBtToUhP8me4rQBViH64dkeHtWhSky",
  "key2": "5m2YWv2SnXe5rvGGxL7r616Bu8Mj7bqdi7QKzDBHnDnirGm3SE2jRvL5o5ae9yf443Vc3UVXCb12Wa312nxo2iSN",
  "key3": "4zfCJLfQXthWE9KXMKvYpCD1i8AhjH6cRVNf3wEDBNAQtKpCu4BHLVwoPtDkspw2BpMjwXo7MM4SHxrRtFYTnheT",
  "key4": "B9f9ZUUmd9EQiY82vsZwTUY8X4TBehUH5ATHtkDi3LjWk7FxGR4Pc4wh2v999pQe6n9qU9mG4oQv2YqjgVj9G35",
  "key5": "2CmrFuBnYq8JAZZpS2ja2m2sPNPAjbWP88c3kqG6Z32iH5XSYbkJTZ1srkuU3kntTrWfKLzgG2nb7TXTLiDDZ7Eb",
  "key6": "2Lxvx1oSsEEoibnfJMUd3fYguN7QTMTmW9HshGCmQyUpVLHCCCXt9QoEqNm99nfQhG1dudze51fe8hTRB63tdWZ3",
  "key7": "2a8Mk7GgKLjtigrmn4ohU9Q7sdpkg2ST8wQku2u2wkGJF8CqHDcj4KZ9v4GBNvj4RSVqc5Z4id1YpUsoiYa16zoM",
  "key8": "3C58tNgH2ib1ez2rXHoBaAXBuRkhudHB6zwivXBCv4TgYW7Nobxncy6x2rFFhC4kcyZuj6jv5cNBbBU3AnEQZeWg",
  "key9": "63CnLZbDXjZkJwG6WhBDbCp4Lp8i9n3z7LHBCaoTwyyznbXz82r3CoBbGVEDV9zZYF5n39YRE5tJXHr2oeDRhu4V",
  "key10": "o1aBAj5cW3gfCS8GdxxLNTLSaeasuYsfvNKbKe46aNsvAUAoLfgMFueRtnqVEjgPRLDpYrm26Yu7d9JjVphTnVE",
  "key11": "2kk5xnVDrDh1SMPLtuwHynRiqYe2UXD3TepBjomePQo251mN8CuBG9RT3RbK4nVf5PuWn1FBcNoeWPTqqbGCnd38",
  "key12": "4Xq6fZwGaKktLDtPZNpXXdiotDFdny1ys2Jy4bvSZwYkJ9MuXLdxCXQ6XdvYQcTHTaRh1bVXnhgJoo9J15SFLhmQ",
  "key13": "4uV4jpD6KVuybYQ8SsybhSi93SyTwVXFdCsLzszG3ZG8EooCvq7aye3Ae91PrA76QNn8LQ98NBUFj8qbeiepHCAC",
  "key14": "h2PUDKw1PecP71TWb6RftYzVt3NgcMvMax7BM57omsNzjnF33CdH316dSvxSuEP1mMt6UnyHiZDEXDT4bWjnkoz",
  "key15": "2gnzrfvWBFMTzafhXtQijAi8Vw9ujkwFTCMxmSWjVdH54ejyTkoefxHcek8d3nkiG9VjqFp5E5ZU2v8PvtcS4bWs",
  "key16": "3kmXPww1CY1kqGmb1cLdrdv5XGrk9xgc955fTKu17yFiJNAJ6ob5WCKGXD87JvQFxZZqbY13Yc469FqvFzj5g96Z",
  "key17": "2o3hFTqedqmpKWS85eEdmER9F5Xp4Ge1YLsW6DFNYRYFe2ifdVRrCPtL6vVjpMB67YEsBqMPGzcfDxZteK5Nuxih",
  "key18": "5rdwNZcnG9hVHoPgRvLgUsjxN7bbasF4btKm1JzR7UJUkcWwnQwDhN58qNDU4rEndf3V2QiRi8Cc6UVnq7TKc6QH",
  "key19": "59H5RXLqQBSJXEniznuqjojY9WbmBeJTLSymXucEEPq6BLNmf3AfSemTBPLeEAvo9CthEKVJdqeoFPWXRgHtRFYq",
  "key20": "2gokW97EbEWz5TdRpR5LSu7drgRrZJgAvqxtrxvw1nDes7vF9ww4R7henM4GiNaqiHV6mKKn1Vmd6oe1d7us2gwZ",
  "key21": "4Zv3LkJj6xxMWsSvcBaqw2NzC1mMUxwKixELo5fWKPVWpAzc4bwbnTyZqPad3BXtb3vfjTUjDTeC3a7Dc2QgRbVx",
  "key22": "2zeHA1xnT51B7uuAK2yMSoDdMC5QGkerqd4yXcjLzYWr2Fst2J4eNYV39SCX2MEKTfnw515kQHt12xZXRhXxATSP",
  "key23": "2x4iA5tprwofXaXG2BoUZLsroTce8xeAFucTuNRVSa6NKR6dQgurEYhf6Mc5crchbJp4H1UjVeQcbEwZnKFi83NJ",
  "key24": "3dxfnuB8ToP663SBegaJ3vte5YpZZsHGgWMFmUKH8Yzq33jA3p77sezRWXYvrix3hVeoarS1tWwnUs87MV8gpVS3",
  "key25": "4MjFBsV9NjQwZATKVrj9TVbXr2wWKpDydwP7r32F9XWFdUJ4pwUdxD9NWUcCBmEsuQjxTJsgeBF74xe72Xfwu3CL",
  "key26": "3azcpdiZVHUw7cFtvfNK8Gu3XJePr41f2qW7TAzc8MHR1kSYbMZWh2kCrQLgNNy3G7dqEwwc1qnRUs1otfxfvZXG",
  "key27": "2yz6VVXMG78dti9LxYrdtZebG9HLyaaDFB9iWzaswzj4qL1tSX14ZaXgWT7FZdnKLkU4TonAVWpBLQSXuY5pc9eA",
  "key28": "2GmzhcoDuWrC6yfAK8sYH2BnjNJBZDDbWDY4UP96PradtWwPnnLRRgECNzYGsZPcWVNL91qhKabC5PLajuMQiV4h",
  "key29": "4zKZhEqSCUAHqgzkvWTrLoLxP745KBN6xnpQVVdB3rmuegSkf6xhhr4k5SfBbZYXxJoy2vnyidCQQHo7yQkQj2Jx",
  "key30": "46TRLVxg5PhgEzw3HRg4GMU4kXupt5isHA6udpiH9TVTkDtetsjAYhvNm7Xqd6u6bz4fH6kTZoFyDQxwXaouDm6j",
  "key31": "59BU4im1aCtMUZsg8SeLSoZJqzWgtBED2RTjZK2XSyVAJT3NBphMzX1eD3N5ywmJiPBgebYix6CmxQo6xK6uCbWx",
  "key32": "CvLxFCdqjgUEdwrzVjheCSAKWWjYy7uGQRBErarnVExuHo7jYPtvYDg1KThwXeofrirFfwu7rmpu1rTS6ojGGTr",
  "key33": "2kbgRtYDM2dFi2rKWTzLWsoNw6hrZH74ocRQMp8SXqYQe242T3pe5ydLrzcYNcDUZv9xkySRoa7AAmUTU79NZJYA",
  "key34": "3RP1yvx3rXUkb6w3N8nowe2WCUHLhPsdsyu2parNGzMqdxi6uaRS2dTKzvHHsyEw31tr2WGamXA8CPRaCYQ1bii3",
  "key35": "4hU8yrZThZSTyofAgnErH6Jgcy61kcQ6sMKpdC61MmB4Ujy74nKybrE43m1Zc5SugeZoNPSt3xnjFpJKyPS1qq6b",
  "key36": "qwV8dDNc72h8tMX46Wyf9ZjLxpuwCPjG5w4DeGVpn68zb3fE93feknJoh6MMQnY1C5NG681P6FnfFn2bhfbRxnU",
  "key37": "3wAdiNBmKhZYWHrw4ox7XR2jjebfgTnbNgELEGZWkqgRAZkkb8ERg97pBBYCyX2nSR79TtE8x8h9B1LJnRY7DVi2",
  "key38": "3joTBXUG81XxnFhMTGboDJuDpXMzXCjrh9f5H61eHCzrP1MCsNwaCrhwWcGdTyKKLPUuFxu6GgVpX8QX7ngLeNNV",
  "key39": "4xMXtjWtMp51bH15bi86r8ZXqwVLtfeLNQZNEp8hBaSdL2q5WGHhXegPiBFKWQCLtfPmYZzMJSQbCx1z8fqhdaCz",
  "key40": "CgYD1svBc66Tjnw6UxQGrFNaEmwLpFPWodV5GRnwJJv3TwdKPohg9Ax2PTYoSWtYvLA9zEVXtpQGWyZDeuCs82q",
  "key41": "XqdZ8AN65qZi2gof6pgvSKtnj6dfErXmBz28koXi5UwcaMS72FfJzcE4V2nKHhE8YnjKN5YWDfkQULPUoPaRYtz",
  "key42": "5PN34HDrVqzVbBsB7iLYjHF5r83QmnhwSztzWSvB4xXE9cD1FhZyQd5CrF4v5VmNoup56Q47ojdm6jzdHNjTC4kD",
  "key43": "46wPimpe47UsHzjNdTbDgrXiUCMHnHbxvzQmRW7XKDKpxpwviEtGj9kJwj7s7SQddER2WppzEnctowHNDxLDNp8w"
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
