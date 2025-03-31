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
    "3NBDkJpDK8kDBWe4EuSaDTeTZfgRbxZVxzjk5KusyzZhu3b1uPV1rgjs5h5r8aFnVCuzuTxyQSM1e1ujupHwkTjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GBpUM77mpx1jqa1SAX7cKree9kSVtEkqFLE9ESVWoRrpLXA72scHWKNrdFq88fbBGqUSz3QR27SLak2jdKrVFYw",
  "key1": "55c4rCFYG7iL1wTyp1mXm24ahvqj1iqLzsArhJ1tYZgC9f1gvDH9W9Lz3goQRdebQTPDmeg6q5H7auQjYwaTSsPi",
  "key2": "3S1gFoifv32rtSNmAwLDdeL35fpB71Qv1PyowgEwBP7ecSRSLDxzSjm7BzR8nCCoj6uPT8xA9QGXJqiagz1ekvWQ",
  "key3": "4AzPrTYGjw4oQE8M5RH6ox9LLEMG9R4NBqCzeaeN9kLoKiuYreNQFqJR5oL51NeGNSWgUH9L4Ge6BVtMY25T9bgx",
  "key4": "598F9dwcii4XcesifJNftUCqowj5DDhvZeBTRPybw8ZAziBYAp4BePXpSPHpJHDDnDRKZkeMx4TbeikV6AncMK6D",
  "key5": "2u5du45z5k7rjmq7f4ejsXaFWoSQiyJBYpgLorWfT4gEFdLo66ifpGY4Dij13XZNSjobRekjtBe4L7vXEq9ywPBq",
  "key6": "mdmkhSuXqWhGuJPcdPu3miQLpmvdbjXcRdJgZqZKzDkwkmCw4mjPoyiEqpfMk92bNQtuLHBGJaNJivnRwJqPQjo",
  "key7": "5SrzB625dbQNNMPa3fX2XN67jq3Yhh1Utr2ZWiTDZhrHyWkzpjmwKvR94pQE2WEvrjEbYG8PFS3SX5s8RFnDS3Cu",
  "key8": "2WoRhutNhkUYTj8nvX5K8pXpQL6r5cvivw2FHi4Mfq3b457BpyNyBrLH7P32ZhfikyjcQRhyevfFtBk51CAJ3Phg",
  "key9": "2QYNU8iYKUEmc8qN5q6PFkM2U1a7YdPiKUDTW7hLESebqLWh4jL4qcvzBeBWAaDa52HfDgXjAYwWSySaEtNBMANp",
  "key10": "39M6LuCAc2mNAQ117N8LWgHSXGBU2hw4o5Rcnc7WtHnSpqt3tFKfVdo7naCcuq8wQTrBpPcUzcQ3XmTL5hsRj84v",
  "key11": "2WSFQav2XEnet8j87A6UzbNBeq3wLQye1c6i8ciiQxzft6axtXEW1QEZ45TJboqMK1KhSTZ9G7BASAzMM4bJXgpU",
  "key12": "5kmiZUrp79c5mRWhx56hzKf8R5CFssbD37Mj4pd3wqr7Bp2E4HvDTvit2ctj2GtjYcwE59BqqBKeW1QoXttnu2hs",
  "key13": "4vqzMd7f289rbvUabq54whA3wse2W283zNtu7HveBodzqwN6TMuLFc8WZxBsRV1rgpaVYPwquVa4mUFqXX4ahBfg",
  "key14": "2G8NgZkUnoQ2SajdEgEo2NCvYanhNJo3DEZVadPH57oNLvSh5RMak2xMNzZFASudE4W8gP7qjpW9Mok7P3toAyqP",
  "key15": "2CJeMeSAhahQLH8t5ePvYDCfRDLTaiNyMAPBXuC3hJhsCAMqFeGUCVV5BbHC4s26zCH6aHGan3gwJar79XTKVdAC",
  "key16": "2f22kdUpaT3LyXTNrh7GPrVPdTSyw7GYjERP4EsogLcqojqFhNfkMs27CJiVwkx9XG4HNmRSDEBSqk1Dpyyku59v",
  "key17": "5Wg68yuhwHHemrzT985geNqBQFsfAoUkAhQGSxBUwK5jWQU1xS4Fu1hSY51BE7hEGaiPzFVpGJdTzArtSHmvQyzu",
  "key18": "4txwyKCjkedp3qwfZLtY6QtDChMhQEgqv8QVRGqjMtC2yQxY4p32SBm5ByDkSpvkVurn88reQeYbaqRDBjQMttE4",
  "key19": "41iVAdodkWe6ssYhaVw4FNAJgMn54gfGsVh2piEgbarCNTkP4NaCVafmyk1v4xW4nWvjp5FwwBZZkuKXZNmMsonS",
  "key20": "g1xoTMvN1cTUuTXBXAtMcdrNVyNNbuw1haS9S34pyeRADqk6ADQvxRN5t3mCa6NHSSn4z1dv78p65ivkaRaEwzf",
  "key21": "2XnVmbqTPAdYYSeAS4zLLeScCCfzfHUjZwHZMYMsefUoxNHFuiN44bBiB8QAerPahJvwLfx1XdEwm1nVvCkJdYDR",
  "key22": "G28XqCDrUcAxSNhWcUW1h7uZexQkbKjfCGdVcA15Dk49PGKkCVpNTiN49en44Rd73jYCqiyb9d7fVFKPzVZtysF",
  "key23": "4w3Jtp2z6VY1X88KC1uCiAnuChfYEgX29rxwS3mQFsoGLVkHEzjUZKYh4RzP1Q48nkFByDFEzkAU5wwr7h8f3YaY",
  "key24": "5D32Eb7pr8pJyVmehtYhfcoFLpvUaqGhxgkD92XePCd7noC33j9PtUgsRf7ZLEBDQrxnd7FRJwXAZyuNXv3mHgVf",
  "key25": "5kB7SmddrLCF28nJXkwjpEnmj81C4Z7TgarsHJVniyw6DaD3yuHAmnueCLaJnSpnTyxDBasoRcPc1ZmNijXsMLZt",
  "key26": "3rKAyYNPaCmUZue6eahXsSRW9J2y1cDAbzF4mbeUJHScVpDMMXNHCszJMfb4pb1cxZAGSVC7Vc2JxQd69EBDdRYg",
  "key27": "44urG7DFuw6M3cNiuXZd3WtXUiUgd7FJPxmLRKMhoWTXa53CnGaQRL9oSCKTcGYMCDPzJJeHU44HP7yfMY7jRkau",
  "key28": "5wMHNBGGbQn2L2TqwfiBigdaVQLdJFnn7AzasiC65cCm3HCTT2EUzv6b1XkPnkqUpJceUmPV14rAE3Z3873z9FnX",
  "key29": "21x9JeF8qPDurCniPCZToa8eyu4Y9HTWbnmPewWEhmPVqPtb5pcCrQ2A8QogiSdtgazs6R1N6FtX34QTFoArj8Xp",
  "key30": "2Y7C6ePeXhYeathUnVj3rbN5SQ4iYLop7LD8yidA9XYCyyzfs2qXCUDkXjPVSnsRw3cqTsVrHXhDBNs1xaqJngsQ",
  "key31": "4Gc3wH5eTGFT1epAwbeFY9kcoXb2DREbrA1Ra7sdMwuLgt3qYBstUJuJWSMeyCaifM1BBacdqj3mgSjn49ZM8Sy9",
  "key32": "YWo7BBo7Tx7WFQYw8WBSEoXQuHWrzmiVGnZhuYkgpgUbjJzUKPkv5CJ6FKFRAutJtMEWp5kCr4FS6tTp2WiVRhA",
  "key33": "iiyuUfiTFSAbLZT8jPBed7gwEg9x85yMJr76igzkd85cT5KgJq7TR6rDg7dtmS1x3UTPhaaWwdXddcE86LYvNxb",
  "key34": "4CKQFjJN7WvjSE6W8e8HAx5HNteG5DNhyaLvtXTHjozyMvwZsExfbKuazM4Ut6VV4pWywsxdf4RoLMgn1u8hMHmL",
  "key35": "5Awv7sfuuMpS6Ra7M9cWneZr3DCXn7EZHyQ1NfqEcuZUzZLexxuSMqUEG4hbNFjTqdEPe6ZXyfpQSt3mm72iTHkq",
  "key36": "66UugybQfAKPZjfYmhJfAbHZcamcg3APNmVwWjaxnrn2EU7Tmx2va14ib8DPt33y9YQMjMEwNebaXnUTn9Wfgid2",
  "key37": "r8XU3YokWaamen3ZunNpzFL6Ng7WaV8o38HmMjntNgs68UTa5m4NLu1psL35sGd5enCeDQJRXmn9aLEPntyx9Np",
  "key38": "2v7XpzxyN6eHPjEdQPZmu3NUvRJ86DnYseyy3ngpUhJXmBSNjFtT28h1HLRWigrgzuu1abo5xe3GmA7QXFQN6wtS",
  "key39": "6447g6akUMTkrEEzeHNPuHDypep2qAMGUvLJ7PxFrCbHCuaBdnrX6TPsbmM5n7rBCwMDaWJzUiVGo61UKQDAhPw4",
  "key40": "5t16YxQjGmH4U1f6VEkRFkZhv3FdEePxQY7PW4nQEgve1P7RVHR2rrYzGRDi3WoPyuRSSkhdmv7pnQaGaKP4MB8T",
  "key41": "38RCXXhGASvmjGzYHfMaGDizURd1AfZZi2hncJQgtV8m6YRvpz2faeRZ5AxC2rNi15eQiwQBMWyjcadKRpnwjdzB",
  "key42": "2gdG9KGE2x5bZ7LLjiBZHviSh74RAiovEDbRYHDWdTkyFgbcmAHRxvjxGYGjaYcxVZewzwcQnjDeTFtWcWwL4EU6",
  "key43": "54WwttMuEgW5UuxCnjRTnzqHcCqwHdqCwi7KfgH2LdQBakF6U91jLmqeaHRYnrMUBqqshQg9pVnCdDxGUHwvUrxJ",
  "key44": "5byGXaug9n1z7wsxerzvYo1V5L7tv14vsEDhhwi3p3yf6yFAp8w7vMAxuuoy4YFqX9KAKbjsQhNggXNrtzBPhwdT",
  "key45": "2iRL24jby6ZfgdkmE1cHsFoVGtaKdTWdGgup7iLhV8594muZfbShv6Ym48FgW4JFmAipf3cShF3s7wtP6qzqVW1T",
  "key46": "GTdCfWQX7QyJZaMpzFV8GN6NJYe8JVpMx9TVrf6oP1hMSMEPuB8PVPdcX9FHKWD5UKUGyG3fZQeKdySMp7ceRD3",
  "key47": "3mpWWGvweczVqxhw6bMYNDHeK9H5HZ4DoZMoPNaN3umEDJrg26vmLnTQfJFQsFWW44Vt7Hmea1xecAJhifQ4Szb7"
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
