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
    "5UievH3VhcxVX6rToddFRZSUNuBRZCEjSptJXubqhsgj7w6pDqCFZCtbouheTh9DRHAAEpfPCEt9KhpzbLVZs2B2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xzdnF2iufnq4bTta5tCj9njDC7iZ5s3SbzQaFBsMmgRD647ZZvhRphSJhdEuuwExV335yXi8tHo6yPmdAq7jg2B",
  "key1": "4EN16MLkjYvnN7fXaYcCo9QoFEHj9iTMDrAj3ekWxiveS6ZFmkEnZa9VYEYKPQonxyAuffCuPJVMbN8vgNi7CVqG",
  "key2": "3kfnpF7b7LM6CniwEpMGrF4HkCwZRabqh41TK2UYY5QgYyznZwyDnUJSeSL959GrUFrCttkibqSJ1a2o9wVNZMY8",
  "key3": "5DUStUEQMRymiLqAXZ5fbdtVV4tzNjzjQsoai1osNJUKhhHRghRUhFnmMxte2ZhRLwPqp3EMBJG13nzE7TGUkMok",
  "key4": "2KddTGgzqNw5UuLAuhrzWQEoZZEimKCEibE2m7SAKFrXaQH4ATv86LWmJnCqZv4D7mNReJ2pEjNDAZ82CEtWhNt3",
  "key5": "3NUHXZohVrsCm8N3K4xuEyYND17FXn4wXdoaSEK4hZcCduP2knpgtxPvwXSrjnhP5HMwKpEupJGoa9yz6DPojRj3",
  "key6": "2MCJSH7RaPTiGAGvL8F2YEM5UXi9Vfg1qHHVJzdLZu2ngjNsBn6wYPB1JwrYU54iTFHyghxGeoXxYkXNsUa5rv2Z",
  "key7": "3EqFkxc19Jt5FcPEaWDfUmSMUNk7k8DC9QT5M7bvKB8GHT5eZ9Y78gQzaSMwr1UAwawbNTxsU2CPfVrchnufyaWw",
  "key8": "35g47Sq5P6j6TCn1mYXBiUVDsc4N3JVexbfCuTpU8EJ5hNPhERewTKmTHfeTmUCTVHF2g99CeEgTdohkKzWTDnrB",
  "key9": "35punr2dpY3nn9Goup5uDJyioNACZnbieoETfp46DJEiEf3KJ1vPCQMTEd3PLYZhyVaCpVu2V8nr15pR9vTWFD26",
  "key10": "5ZK4419gb4nLvYY47uUELS48ALVjRpu7XrSn8fLo1o5bXBX6AvzC43r7bGpUdirnXRadP8gJzV87ZJjTxrt4SWM4",
  "key11": "A4TAorbHZwS26deyvJDBJofpvd57o193TUoHqBcM5s8MFac6eojESnjDaukzx1DyQ2ZV3swJC1t63nnHwBpYT4P",
  "key12": "3cHwU8sCSEkfyfv24j8VMpr4RsacGcuEqYCADPa6vNhSHXs6VR3wyXm7LZ1caB5jWwdr1GzLvbrsaLWBDXVV16VR",
  "key13": "25uq25iMPhM1bhYVcGo5ACMh3c6kvGNDPgdiPcRoUoMajYqEwL3uosjx22NNirwusF7hnVqrjCXFHoNSjHWYg8TD",
  "key14": "441qknKMEkPVo4Sqte18Miy6Zp12tu4W9uHBQ4Qucv8VoEULC8vasTQUQi4QpmSQawPMZqgbr7XPgRC51jE2cPJ",
  "key15": "3K5z1RzDmfHkQLhgJARvghSUsH2u78JHaSNQnLZas7ovt2SknndcZE6QrKYtSfu5TGh5wo1mCwQ4aBN4byGKUsYE",
  "key16": "4XTFm6bXsbBiek5xocwT6enAbDPS4WdAS4fmfvhvnihCipKZfGmDUAkBUbC5kXgQyvGtE7ATEbLJWWnBjMbhVqRs",
  "key17": "2fXuDQYbhCqbEf5bizGhq3MDP59FsVv6h7qFSCRTWWk5U8zSnFdrZokGwsEfzYSDhnjQsbRNduPsk2N4MyQo32SU",
  "key18": "42cPqbvJYURCQK5kHC75eqHubyvqaKtUqBfgqtXssjumDLKEmpwxZSjzWnv9mbnatFovMse1sp6x8ACd91QZGVQq",
  "key19": "2HpXYH2uiQ3nCSi6BbkYdicDmQNUn45ghmmATYfC4fK2e3ZBD7QR4QgE8CM2MDNZNN6qpUFTkD3oKZMF9Gv5JnDk",
  "key20": "4noRTsBydBPpaUKG5b6znoZX2n6by7mUxs8kCyPBx6PqbiKNgooCU3dUNUefjbLHKFYb73F78REUAHCMqEDWNocc",
  "key21": "5BF7kR9T6VyfhKRQxy11ZBUa74WmuFyJ3BGQkbZ5XZkjkJpTjtNqpTtUaE9x4JJry7TSvBnDKTNsY6hkPq4npTxo",
  "key22": "56LKoFSEc7oVviNjUnFfFkPDQkhVcTCcSWeBeNTeukNDYnDo4r1nPKMnrvCoLXxQW8UbBciUf5dUgeBmfRPX619n",
  "key23": "3YWNBtrcVv7dG7eQnMu4eW82b89swzqGdhX72trQR4dT2gxLKoV2ZnQmC3Bxdn7DmwjLdGeWBsbVzqufRzsrBiQX",
  "key24": "39ju8QnEQ4cYKm75z2M6AxypJJueWUDvej9vDox1njavwfDZhaaP5ePNZkcEfFAvXaj2zo9hQt57BXZq4b9sTqaZ",
  "key25": "5ki54e7EpHjzm7kyqVmKWW6H4s59QWqWfmxYvLfEEyrZXkPhgrNZ1NG3qGgxbBXNWFctnYdD4Adg9XaYtp7yNsLq",
  "key26": "33frDVP5BcBrwkJdgoZx6abUM9g2xByzJYdX9T5BzCQdZhzFicUFWzCiayKrTrwAyUS6aeayfrwb5uxx4ZvjNi94",
  "key27": "4RAGco94E33UxyNKvSyew65aty6RKp32HdyhBC8Q9o5LwEFWXcfWE1EkK7jmU9ecWs7UHJ82HkjfH6QuX9m3ewR7",
  "key28": "4dy4oWAEgeNPmsqgsSK8HTBh3hJ7fTfEQtaY9khAjfD8iiQ82EDHVfNFqCeATHbB2mxx2KChQbUopy3irfgqag2r",
  "key29": "317ERsafPrpm7wSB4Dpm8UtuCuwgLC9sC9pPCTA2Y1Br2GyNipmgNTfsNDNXGYDWWvdK6TrEV5UZkvE5gMhDdWS7",
  "key30": "36ishMABoQbxAsqJKfxGHo5bphM32E7Dc9CRvejYcsPHP8VJMrFG82XFZUoyBT1HoFEdBrpAu3rDwhjfaHsmWFL5",
  "key31": "5kDyKt8FULj44nbaFkpushuneYkeruMV2ERbW8PvyL1CjcCTBGB5x6qKYHKbbh5QRpE8vSYcXttqCKDnc2meoPxE",
  "key32": "pvC9SgnrcvAQPfcDA6yQRD1ayMz8vJGXqZMqvAbhJ7Vyj7HGaAQVLwcfw6hoXXy2zHKre3hZEJvcNESce4qUKBh",
  "key33": "4RFG5pcgJ87VNEFWWpLR7Q2z1avBPJdiLcPj6PrvHSocjqA2bkdrgWEUSZ3TyaX9UUT6AC4k5XRUcyQWdP3xHeSL",
  "key34": "2p9tC7JGYfwoP6sq5BJMttaPsjfrw3sC2yRzSfdYCGUeyQta6KAq9oFEvRdKKNx8qyMMnRaTWynaBsyDuLr6cV6G",
  "key35": "GwAGKYUi9VfqJ5yxhu2Aa45nNLSQA2HmGhCbpMzMbMMVjNQLaY3oMJGrwvxGoPcG8pfAczBGJ7wGb7rKJiuiu9Y",
  "key36": "5uw6Jftc2F9bAT6GtoK7udeaDsittegTfbUFnVbYtxSHxETDN3xRZGuynkxmnowTEZjq9SPcV4KM3n6Pvd7nmAQF",
  "key37": "CzjvgvDkirm4M8Yf2t2MukAEDvHLME9pt72gQHBCNPp69GHQoCFmcFqLSXH1TXnYBtgBrwdVcARaGiqJ78tcQTg",
  "key38": "Xxgidq45UXUwN6r6AfDsYCUjPBqHUFRoVRQonSuSDkEEDZxgvraqCZ6rCWRP2XzHTMgmUpv8vNo4jLBqM35ZYhn",
  "key39": "5D9gNsAo7csKnrk2HydyLhAp3ow77JRTLACicGHRng5tkfQRvBEe3N6Ht4vQVYRBK79Qm9v3PG4Jz3h3JTKgMjDy",
  "key40": "4teHUrFrXvt2LyugXcpG4mZbpqkc9WmMKxhZsfZqD5g5Xz7HsQd9qVAnwCM7noizvkbzrGYmokJ6vmseeAd8zLEL",
  "key41": "4bvLJJmAk2obcBR6y8fG4sMfjmxuzJR7CRduoDKtecHGDV5HDDL9PgVPgfUt9Tx6gc2QZmF6tggYjx8UU3CeyT14",
  "key42": "sB2iyfmfGogcSpZLLxLWkkBwCY8Qe3fYyi3QCcAUTGQjacUcbLMHQo1wp82p63VZ8PtCuaEhKECixzUVhHFShf2",
  "key43": "2DSAoXyitoTNsGGDkf28rbQ4y4Xuk1QK7A6vFRaH5XivrXXAgB1QrqiHG6PpVq2ggfHs1nNrCCG4StBCWdp4vPNs",
  "key44": "2Rd2Y3KkBRCUzn2TeS2zwYuUJXPns4fbTJcpivQ12bQE58QcnoGwUHhJ1TUQeiUeZ6KzUBEw1QfReE6Ci37Hmmxs",
  "key45": "26kdEEiDiq51vWWNuW8F7HPuhP9aPEmCXqtivA5wJy6fhU8rS6cqhTffeKyfUWbJ4Ldq825ajup34NS7eF8rk6Kt"
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
