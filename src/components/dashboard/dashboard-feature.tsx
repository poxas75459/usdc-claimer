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
    "EUEkP5KTCaFt3fV9aq7qTrzQys7qhjkECpCikrgJBx1PnaMgpBD7ac2BuFgvqzizY687j2dHuSZny7KLSNncucw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CjkcDFRRNPkjiqXzu29AHEnWCE7KyjwytDapooyL51M4mQagWgY86gCtt7WSSHZ7hQbBkutKLwciaj15YQDNMD7",
  "key1": "4yAenkN4ijYpsu6VqxT6MuqC8kS4sY8ANCoNjTETu3ik5ho8couwXc1juTdSAkta3WgAWSbVkDqgkUtZPEoFY9iW",
  "key2": "3NnLFPEjhT4wtEsZkFbqnEzgReVfWyL2HeP4b2kddTjKJtQqmk5PYUSUoTFxe9ytrj7ZwWRMi3NYZoYHRtXdn4zp",
  "key3": "25fhApayNFwzFv243ejPeyuYZGRgML75Jpgv6pKUypP9xWoCjWGTtUj7sGHqGAWoQd83DD16cPpxbe2NeKbakek6",
  "key4": "3tLro9NJLE3B2RVZVPYaXGSY7ZeJoh669Ue3UuxXupRiTF9ckmsGbLNVhpkMC7Zinve4pbamSvdYZCRHTykeuqry",
  "key5": "iw3xeojsch2ftdwWXVacjCthMHQQX5tVZmfGobsW8pb5FGmvCjRG8qxycFYNpW7q6YcpJT8JXkFc2Arya3boAWz",
  "key6": "4RxqzZw1aba8rZpysSNG4LxKKiphkbyq8GN2KYcWDkkakjdmoDCvHCvfBUp2XPycHiBsfp2kEXw7arVyEf5rRksW",
  "key7": "uzXhyKzmNXqGrMRGQ8nfQGxkHS3QaWzRxPzNvxx9F6pbeJNoFCuaCoTdzA2fjZ8ez3d8hprQ7ACyVL62KwCFF71",
  "key8": "3KAe1q92YNZ9sew9r9eJEZaGu4pPRcHjGbPCdoUDaZsMh2rt38nwMsZiWhuYskfUV8fDU3GRUbVnDiq5DdWN4hCm",
  "key9": "37JKKzYyUKyg3BHCySxJDMLpmtV5TzfWGnApWwLnyFfYorRMjo8oDVwgoM2q2dKB49NKhxWG76uRvoMgUaXPSMM3",
  "key10": "21hCzea6aSQX5sCNuyZqXW68xctzeEdXMCwFwLtkhJb6ePjYrUkMTZf8Zs2oXacNna1gkWd8K5gY8PWNxb1m7KVp",
  "key11": "4ZdSsiTMQupXM2TuixyPyiqUnoppoJA5DK9EP3iALWvwnbkf4w8YWDZ6mKTpryGYUtpf573A8dTgQzZAkEKxJfZp",
  "key12": "5VhRT6ybTcJ7dLsjutUvpuFcaJ3wfrtg6eRmn3TeyF9RA8vmaEmbtp3FZeaYyS6kgDaxx7SkJT9EwDTK64vTbYu6",
  "key13": "5vxkUftXzjP1VRenektqUFAhXjzFvhF9DF1iL6R7KXGQKV5FoV7cAQ3LvnBbUtzBey2rzNDmfVvhg5z1uWmhrFFE",
  "key14": "5E3cwkRXW9XV7UxGKNXg9Li87gd3gch9DFuhtHUKuzWCqpNaMUUzfrjeDgcs5mHGjhZYd2VCRFbn8LXGFh8HheJL",
  "key15": "nP4gbXryHeeSpmAMZNBpeqSvVUZNaLJsGeTKoQ33RKdKyS261xKiZWQpNVQxAMX2cDCdfE55dof6H1d83UJvXVx",
  "key16": "3remEh3tKZkiibFGn6e6qtpHYSqNupiSJhkfKaur6rA4H4HESZmiiB4m78ZpHxshVzTbQF2Bq63JEvoarYYjX3J6",
  "key17": "3zvtzmCSfJ3txhzq65H8EHAqTDP5E8hsi4iuzzrZLA9uzbQ9RjncyhAMR19BbpfWVZ1CAxrSS4sd1hi1GQ54VJ2X",
  "key18": "eWYSPzuCqG1z6YiDno5kHkukCYwT7MTCN8SYxMrs5bPWFmmMLcEabUmPqYXXUVKjJPMi6R3iyGZEpSKsTFDhvhi",
  "key19": "3NxcDXvb9U6sAcMuborCzwDGAzQLMAKAz5rVSuMN4Uc6yg4KLw76cVuP9PNNz4sNjycw9a7h5d8NUQn8RV5Ve6Dj",
  "key20": "mGZAQbr1JApJT3khdmEfXaR8T1DPm5rqv9kmYEHyqtxkiDwqkd9zNMgJkCiapHVoZxgt1WvW1w1x3rqPtJRWbKs",
  "key21": "JduaoPTNriN688gHpXTsSbofftGKcFQ4FRaxA9tMN3oDhek9Fp9R1Xv3JAzXgM2xMHpNmhyNAHz4vAPg4G2kumZ",
  "key22": "3FbjFWCNHiJTHjJ5nG73ans1zVmLhGEGi2Ju8wTwpj1nz5yueTJyKKCgc44uFHiVoBjBYs41HSmJoU2kAmhr5rsg",
  "key23": "3Km5mSuwSQHEc8LKvrBUrmCTW1dKg5MauxQHwDucm5X2WzoAqk1xsoBMKjG2hpTDG7Tqrs5btc2rLWxdLkXqxodM",
  "key24": "5eUxX7txHSYff4jPDPzTgaGbyPCG5vB1Xz6LMNomPPWs7TWTuhbiHyWrps5MKwcsetRcS42QmgCTGEbrjiCBSo5B",
  "key25": "49ZVBW1Bif7GV2r2Lr2vjEtCJw7i19iQcicZADVprqu6yK9wpS8giYV8REqR84AC6XsGYCTiRqozx14ATpn5hnRN",
  "key26": "5mghXMDZq41DnqBnb5HjoyjihCcnUnUd8USeNSAP8KBLBQUUKfo3m4Sup2ZCP9soy72jSJR1SYWedRyTFkN4TWJ2",
  "key27": "2P9HbnqQU919ugk4Jnx98UZe7wk4oCRnUcc7n9S5P58jpL9rd6tAKNWuBBRLpWcuQ9FYBtuvYJsYHP6CY4Wphx9P",
  "key28": "x377AgRtWEcfkur9ytxyaCkiLRprHBPE7R5fUhqTWdxvyqP3LDSK69YKEuVfkqCzq6bX8yvdpDJ6ZtCRbbzbJfG",
  "key29": "5hWesQ6WWEmTXePiBMy981cf2DULgD4FdZuoBeiJ4mUed8HmcD1uLAiXXGVh3AAW1irMVVFwGvZo31yzoQU57FW6",
  "key30": "5t3f1D9wZY5Zk1DhBvqcueNm3V8hjZR8z12kBoUmH6FULxDzjbPodoaN52yLTo52waZnLwhZrW3FwtsCCAgxrw6H",
  "key31": "4Dj6SsaM76ESKQw7dxA297yN2Th89qzsmE4SWJiPa9fAWmFqt53NoppJV7Buhha486zn27C1ETGh6kY9Y1Ms43Pz",
  "key32": "KsNaqAMFU2kBfWhgQRhCF1aGhCAwG1gQbzwf1AdDrLwki9uFhKj43MnMSUhxedebd4YaijtPoZddn6L2D7goa2H",
  "key33": "331RV9Wr4uD86bY1v5ry4NL9oU8vasE4fotTN1fcCNa1y8STefP9deR4WRkuYS9FJTn7y97EbAwA1McxhS85Y1iU",
  "key34": "4Pbd6xpVKQmfBMxL3yCm2tDn8umA7mEdQntzVx5EdP3PeLqdNBdHsog1u1z5biYm1zcmeCBFKebn4ktDkRMfVTm",
  "key35": "43qUtPGnEntWHyGeGNbmjSavo436b7TE6pPEtaTJ7KHgDQTpasnKk7Kyht9pr2JvXFhgrNexCXfbNrUUnRvHuhvK",
  "key36": "2ppmkSXTsTnWq4e97TBN9jaRu4VVP35sgu5gz14xUmqbAV2PrZBc5Zp283KNs2fWoUiDTeN9ntw7TadeD3FAyaa1",
  "key37": "57B3SJLB9c1VpQJjdjhP4zrdsi3ZPQ8LMF8J5dXXvoeTFLtLHpYZeRfErKEyr8sSe7AJ3ibnnLBmZH2sB1vSC41y",
  "key38": "4vyp1wBGmm8SUaaGx1z8pGidT6EHVDvqsMd84ygiw4omC5YDgK5QGKTLGtQRudHVcFQGHuKXQnampthS5pJDgAW",
  "key39": "QYnHSyvnUw5YdTYtniSKBw7gh7rfYVq3PaHs4WMSkc3Rzw5cxqo7hwFPV5VUVe2utFu7xSSxUB5oop5p31NZnKq",
  "key40": "4SJLVGn8yiwEmGnoEqSeTTcsnFDtUmEoCAn5YoTCYfbVbCnGaEA2qKGDTGKiPCXd9P4komUw6TMsksFKKqG5jxPr",
  "key41": "3G3vdgHNPmYEwAC4fqyW1Vkb2aBNPC746PREgLRBu2xT2pzchr24Co7Hqw99Qgx7nUWYerLAvX93PaZXiDaXogd4",
  "key42": "4T4BDnEn5k2kzsfcFjCVZJsDJs7osoQxrs6yT6vj6qLzytDofbyrHoKSbCdk9N3mRGb5Mi6mRmh5kg6dWjn8x7ZY"
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
