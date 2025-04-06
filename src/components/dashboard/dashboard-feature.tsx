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
    "2ra6nc6KrcvBECzScUpAm8ubLVLQvntnqPys5T2CyBEKHvD45hwRZcCNwuFzp6duaWwALmzqAs7xt5yBm9Am9YNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44KkeDCKj5BRmnqmBzXMeNPoUpcmtYfCnkksUJANVzW4eL8ifgu4pbB7o83cJLG7kZiDDKL7xAoEGAuwJFpQCvsZ",
  "key1": "42AJoHvRKtSpf1Zux8HwkCEKT5GKjpUW5s3dg9nVXw1UxckBKrqGskRvSD1pCcibYoVDpfdpF6NKnR9YpCxiv6Br",
  "key2": "5ns5LMSNteLYJSndCAVbU3nYeZvo974ErK6PBRtBGu4dcM5KDhKAynqNjZBpKYyrntRdhfS2xe5t9vyfmrwHyF85",
  "key3": "3HbRv17CrjQwx5RTuHRT9VjG9ZWksnJoYWAttWRhKtvEQQE2LSexSHFHdgnhRt942ZLK2PfDoHJzXCK1Mz1wCqQe",
  "key4": "8romvGZFQYeekkLifmkRZLBdM7BeogzRa6CeUGgS13nTqhNVMHzAuiQqFViDXrBvwXuvduEkgmN62qnRxN9yhFH",
  "key5": "2PiW8KBdtjvXkoR5KPNTtCh5WKbVp87JuuCHgCf5je68M1SRzMZ1JvpQaaoneLjNPup7omeN6uUSebFieSSmcuRc",
  "key6": "46yGbATebYcesFxzFtK2YFegUy7oWGHnWrSKP2AZnA2Qu8f5p14KAWZ9LwVv4dhq2AYKBhxKoFXLS3EyjK5DoFwQ",
  "key7": "3gvTZMKY7AcpHfSGzJMafxR7YZmi562sbvQyokFRmg3bqc6fujVFp3NWW5V9bMQthT7yq7zcC1EvbqL1fW6ACNjU",
  "key8": "3JExVnnW1KL3gS92K62bYYfYTFsr6WuYfc23ByvaWp5SzjcmsXg6HZvhN9WrHqqTPttQM2T1LnVeCULNXhLqJj81",
  "key9": "4eojZEu641BwLnsD7DvtLmtQNc3xPo7tVQoNxihBCWPh7VuhkRjogRoHows8ieGsAcU2YT4XYKNNR7ZuDnpLACD1",
  "key10": "32NKkaF84pc8d65XTD8fsyWhoc6FacVkBdW8hQQSwFHoX8S19v6mbgyszGcna2vrgu6VeFxCJqweB8Dvo3rDw2ig",
  "key11": "2cidaoo2BfhPMpt9Py5JpUwwDNnXodUhgnvqWUQSfp7DCrDdygQV4L7RP4XQfS4qPwpLVrpcMcTQ2xX1N8UqjwVS",
  "key12": "4JE5SezD5KeQLyPbeARZbzSmaqmXgB3fvgmbHs9R2deD737dnbKfoU5MFsnhfQnNnAx6fZcD879cqho5sT7MMaBy",
  "key13": "2M8ccFBiY75nt2VJ2sEpNLk8XSwfB4pt62kCFTQazaztsFB8DWb6Gf4JDnyoKGzixFfrWsgYgXiK9EytKuRpSTFh",
  "key14": "2FWoKoNLb268A8Tk7XKegd5UcMD9UoProQWUTkH9cY9h4a2RPNqm8ToxA1fHQQ76LomJxJwscB4rNLFWnzwmt32m",
  "key15": "5KSdMsTmTYE2fhiiSqjNhnxkbdSK5yBjkxW3pYfDps9dVfhEFVh6unCtas2kMTjEeiVNs4YMQgtHj241ojJjYf8k",
  "key16": "2TzuyNNPMYhMHCmhqVVQEH4zKyQYsHYfEg85FLusDWTMAUK4jWEsk4g7YRbXF9f5UjYFnHrNQjU8CM8JPFMqgLkq",
  "key17": "5UDU4GrdVVPRdyNDumsHuC6YidTYjtAngaKFBay1EBytrEzfHwA6st8GPPssh8gTNowxJvtquc324ryiWDaM4SZ8",
  "key18": "3NX74aw5jPgeZ5wZ8aYszXCkz7EixaTLk8TH1fW6YBH5KbqxVg95EEEyYdU9HrBk9uZYs6UAVrhxBJq4fPEfoejx",
  "key19": "4yvkqR4vaakGxV14WHo1xYzE65ZB2bF9ojySbmviNwYazAjoFzhZ6HyChYjYPjnUjxEfQsKvMrvvqFPbrE4QvqL7",
  "key20": "2vw6JWeW7TwQ7DqLqh6dPwwgqkaebzqeJN9CYb1J84CE5WeqGkq3fBuaJTC2BJjZypkfC9qhCyQbUJ7Jadap94fQ",
  "key21": "2BnJ8qrYdKzC86pQ5sNrzCY3un8jYJB5gbEy3uHy8zSCNLmsU8mxvy8W54votjNUYHPJ4FVVpHFuhCozL47Pq27N",
  "key22": "4NipPt9n9whiVMUJRKENo2bLAUA3xyeJaLxz4AqxYGwCt8mYa38oBiMdqQmfNtE6EwnXD7fLoqyySNNo7bbx2MxX",
  "key23": "5qSLL1EE86eLr3upd4ThS8qZ8FqGiKvehaCb2gALzsGV3upa1C78emBDzr2hyKaGt6XEjssNcWZwmduyHYfsc2yq",
  "key24": "4PubTo62r4jsCJVn9oRhVSEy9GwLwrJduBNuERVSFZvQzQM8d5vZHjmrrAkAynZzYiQG5cw884SsJakJDkVjxmS3",
  "key25": "3ufrD23bheUz4Fo3dqwSbCEBiEotYq9LQTnmdyKnjXFUjJ1o34JAikmqcEqzWY2vR3BnPrxrstebpgTEg5dVsNy9",
  "key26": "4mCmwaFt1rCqvXjV4YdSHMDMXmFGLwKE4YEK3vxyHX4ZxvUNKZ9uJd5rtPpb1BPLgKuP6LfmXuUe7QmHPVXuFNVU",
  "key27": "yv8TSEcx8mmtdq6VGDtSunwj6ZEusjNawvgPWfphPvECpY6NFqM5JsuNvPdnqrgxR5BnG4KhR2Lnc2Rsq3UgsQX",
  "key28": "3Ci9vnvsr6SEnb1kZNTZ2sm5rehjMgYgwHeuWPfnKHWWCfwjnvHoq3mdPrB2Dqpq6Q8xcA5B2AYwGNqLBxwDCqta",
  "key29": "FeimxZPVNRBkzUnaK1Mr6uv7WP8YNGQBe8TQGCXbsb7JTHycMSEcRRucRG8tbJw3h23qPqs6YxuwDDgcMLMYLU2",
  "key30": "4SGNoNiZoc3emPnN6tKGThdrULRPDDU4ZHy5DC7E1MofE7gKXhheQ6rmMBWZSenx8XDjcVJjpvzBcPLxr2nTBX7a",
  "key31": "5t2AoerjBi92BHVGyU3aTdNDkzJT1BUYdfsByFKdNGTDeDLECcw6QC4pqDakPGC1KFaJ4ytANL3oetG6MEbZ5jBK",
  "key32": "4jyt7r75btsWLwjqreFg7eaTaZmku4bRU8KgKXBpowGVQPKLdu8KFwoBsWWyKBP8t3DATRaWfZxrzaGJ3UMPb6Cu",
  "key33": "2Hmmyrv4B9sKEtDkbafR1nczSWH7Hr8VtukpcwCmKELFGxqhvB4oJoTZ9tS7NR3DciwgUjWcaKdKCVitDQap3CjG",
  "key34": "2AKssAH9oGZJPeF6eLFui8bLseCzs9W6JBRDcFXFW68aQ5qyny8PJYQfMAsbZVCj1AVUGunysdAtf2spQr2VxeXk",
  "key35": "24WSL1m7qDSckeVUHxHkPh1jM2DmXPmx4EA8A9ibQoGKJ9cnZh6r6jQLvVGfanoeQgbPAqj6jk2d5C8xi11XHvbJ",
  "key36": "31yXEfWxq3T1m3qRaVLp3fBEsi4PAkVTZ3xdnC6poXhVSeKktT49T7xRF77QxGiuX4fR8NR4NJ8jEsivEc351ki2",
  "key37": "42FctaMRdzxCUszdEWwrL3VG1mnJ2KKWJo8QbSe1wp9SXyN8E1iZ7K2L9scYuCitBZJawRcMdtCyb9AS8MKy92cW",
  "key38": "2an4S6CGWzgBKYxjhv2GrTmKtucs1hqJWjejHfj7kBTZnT4V58bDifx93h4E5KtoExi9qBJ3M89WMaqBQMDxxDTq",
  "key39": "4s23227JXoSdmQtCTXo5hUQ3dD6nAYGhbBzvqzvSxx213UXeiYG34ssn1aTqnuULfqdUP6tkXivtC1S1eqg7c7oL",
  "key40": "g7JPewsjejVcte1mn2VVcip9MdqDT2HZbp9rabGFT9bFWNRxRa67SqSGLFfsyZ3eZZfzPT8My8vso1rfwAgB6gt",
  "key41": "4dVKHL9UxrrT8nRm1NPCr1tzjHHXq4hhixASPmzGtijJnDTgSG2FZgoQfiiCRn4GWpB1fg9HHcm69MoPpvigWCp7",
  "key42": "2Lhc1uQMugsgfe795v4HPkGQ1BBv6G1NCsvrGEi4rwtn6PybUoecG4FvJQxj5jzRTVxwG3CeDuRRVuzq41stExAo",
  "key43": "6Eb8dAJymtZHDnFGiQUbY3xp5ahposx921axNNt6co8mE1cMRwMLeUZwbBkqtreUJqWmExw7Xs2inEhtJg71tG1",
  "key44": "5P6gRnAbBtomF9Gmx2US6WZwMSp1TTu9bE4xo4sfVqQf5c3oFsSdsKWePzsMFm45CW2DAYxPvuvoSphG6otBuSBS",
  "key45": "5kZmjnbyusKf5g55A7mzTfQbYvCGA3LZo4FUQhP5wBBfPqLQEQGbP8kMMJhegQt7XPzXKTCgfsR9fJXwMMY2Dduf",
  "key46": "5WrPGC9zou5ZUcYpzGD4eLHbJfVBdKGR167UtfsL75eUvuvgmwNpuS1ZXRwJiC6YZxWx2EyX6f7WQKJTbWtinoK3",
  "key47": "5T6LrhMXp7s1hYannra8KMD3a3xhdbMERNZRhapcgZk1iPzBB3S5TunthDFmCvtx97gtBaN937wBNnJ98Pn6KYhb",
  "key48": "5b75Q4cc2QxT1MFYMiF1sqmJzJHieD5SbSssqk93AvBX9iAhrbeyri1hY3NZyQfLNmDXZcDyhGi2RXLkQjJE7ZTP",
  "key49": "2g7F5vVy571bCU8m3YcQErbHCbdgPydZt73UmZKZMFcsh377eNestnCsm2f6Qk3M1MDBTrvHRbkE98yujJXK8ruj"
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
