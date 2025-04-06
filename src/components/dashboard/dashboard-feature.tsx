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
    "Q8wCJpyv5oLW8sUDaU5nZ1tk6ZC2knRz5LtZTCXUBVqmVBrPVj5xHiWYqvTgQ7Ed3GqeomrKE79WuuVKte5etFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j5JjapFpqw24pPwtAxrH5kg2UJTCxsA9JZwZqVvHH5DJFytkuCbcWMdcSGMnSZuq9b3tzeAKjF6oe3FR8N71ChL",
  "key1": "AeHyieXwmBZgHSuxWiaa2uatBmibJQNQafw8JGT2RuGZhS1mdPZtSDrdSw9oVwxU9WN5scDzeNus4N2vMR9Jftw",
  "key2": "4VPy22rBMCP5am8FW6y2Reka5jxYXDM6W4NwSRxxceESccUk6uorq3sqHN8igAiVXLiH8zKdy2ZBiJZz1N9mGyDE",
  "key3": "2cGx1JZKBDH8HTCDYvo5vLJo2gZTGnTCLPgJr2TsaeCexFvx6NsouwT979REbLdsyFW3288V7DTPyoR25ueKxxDm",
  "key4": "3eMosA89xbuGH6xUfBACHkUS8zff436st4f3oF8WEju9YhvJAk2xM6oweDnFEfLMvSbAX4ydPZLmSKTZE2kspHX1",
  "key5": "v985SniQBebEowURV4w6C5Z9GZgj2WA7tLWSjsyMcmeLKo1SNipvwUNgaUvou6Fsu1VVX9BV2XdMtwBP2EXtHLK",
  "key6": "4uP5pHtJ4qiz8cHSxuCjd7DcJYFv8A6MrmyeMF9983Aag1VnwAmsZyNPM7cLwwV855NKiygQk5VhCNBEj4zzfWtm",
  "key7": "5MLJCxxjmZLzVpb6TDUuM8XDYivgTrW2sg5u8zhWye92T5rEjZ8xaiEse6j85E4zHifgsdaVUitQ5ZKJ2JNSy6rF",
  "key8": "2Rrzf7QPVTiiC2uaAwQvmCP9UHxiv8nj621XbkfT1qBnaLrSFVwjoPonXvLWBMZQ3kgN8W6doudX3aZB7DfRFZ56",
  "key9": "3KN7ivrG9XEaPLeaMng9JSYe1asNnx4pnuHeMUHLSrLBcyNqy6nzKVXtYtBRLaytSA7FvFX2LSn7o2anc5pjfKWT",
  "key10": "2BhWDoBoEQ5epMZEUDdDNFgoeUjQGiUL4yBrwe413E7qp8xzgtXVT2JFJA9hu5LYABC4H82spVoTdDRhJAiNaHb9",
  "key11": "4rCjsYMsswnJkw2TdSmxS1X77NBz6G2KcuoL9haPkZ5NJ1aDkN2fGmc35GPGY8myVU6rXHs4HcNSpE9hgcrCqqQs",
  "key12": "3UbF1vTjfXfAR123qNFL8GkqugmByjxQbqNkeQ98W6pX2JsApD99uYrJ8zPynCSHBowjNnvdyNuKS8jTpPdQAY55",
  "key13": "4BdaeEhA32fC9prgSNNN5Av9uHeurXmDFTiDwJmoyM3m4E2t9kUPHspTN5g12aARu5w7MXvvbUSLMck1GSZrenCC",
  "key14": "2PAv3CiMHxCP5Fg37H7rinzaJoNLB86TBqTPBDowxLJTnFkpWt3oqScXBUsAucC6FEdr3Z1VPUx9ywgYBM1uEuuo",
  "key15": "rhvcpQfzJe1sjBYDsh7AU6gKUTgNSEXJh8b9za6JwjxSwqVPtPSB6YRb3ZULncfBRWKLuN6GbYJZhTDHji5ih7X",
  "key16": "5Y5yZ1bjBXtFNoCb4QhYVJ1QoyEDZd4EuTp8vVK9PUK7EMM9F7C86ruS9EvHX2JmvUGK2FVU4HV9iPjbhaNc9MiQ",
  "key17": "21ror4KGisnuRewR6xRCVrZEMShkL9qerLWKsuKSGfUZTQ2ZmDq3XsUUiHDB4fsDrzCkGGz5BAFGyZ8NeBcZiw7u",
  "key18": "4Av2hqBVqn1p44VVbuJCtUjw5tn1oX54zTmrNT6hzTZCVs7f72Dr9jABtJ11D9BJxJcguSAwJ7uQ6gJiDFkENp92",
  "key19": "5TEqVLY263LcNjLDfV5AER1yohGuHLCNSETykncYNSWSM73bwQjGxEHVSu5syRnMuKj5eWBMDpY5mSPY8mBTiSs6",
  "key20": "35kFt7cmPmF8FJQYjhCjH8LATsKsdUipKgbuKt1rwGu7UmhYf4NAdGEt8xTHtx67Yd7JYwKHJ56BZSJmmJTEFFAo",
  "key21": "3X1rinWRuKMbFHeD1FBDVKe7bkfwHgSRovypKwipCjbhFWLXksKwpqaPT9xe4X9z6eVHcNX3t4a9zTe6qWW8RWpo",
  "key22": "2kSiJfUA9zG8PSXUWf1kgPShQVtFZwvCAR5aX16f4YVDcBLswJWTLXt9BLQPVmF3RgLzQKFh5SEkoENsTP9BvARK",
  "key23": "3FtnUaWzQ5DB74v2jxL6maUG27SwJK4zDdCqDeiGtSe93HKSuGeoGJ5KRNWV6oxfaJTS1oTpgVvw6iuqdLnpaAkh",
  "key24": "4FwhqtcsxLNd9pp1k6wpSjz5je8NTMzKjLD8WRArcSTVYr2B8y53d7hT6DetXHM8Lymt95tJUJZZKhD1HfSg4fPQ",
  "key25": "MhFNvnBQoYUs7NMiiFRdSX5Njamxfih2qX8XsoaurU6CxtWK6Lwz1Wp2f5KtDCofbdJGnsQoxxxp9AK7zuBkKAf",
  "key26": "3fmjn6SQbaApNp2TGGrjohSvKzPjYk1giPfmDkBQrSYMk1VYB4r2JEZRTV4Zq5B4iA6Z1zKun8yyMw8DDDDu1M85",
  "key27": "3vmWSEWyUNkDLSZ5vN1YCLWZbn7iX9CHcJPsmSoYeCPcZshYyAW26jfjRS2pcoEHoYLSyGffvVNnXdzqeSC2Em31",
  "key28": "5njYSjAqoXLdcCuDee8jzU7vBH65gTgdDJq3tpcpLsK1NmGaeH4akZ5Nmo2mrNr3Gj38PdG4xnx2MmrS7i8Mkh2p",
  "key29": "3WCqRe8Ti3xEEsqqoytU7MXmqVEwbVpFRSngppWDet4PLdhtve1fHDf8DiLJswXQR2FGT9QzWJF3KeR7NpctFWVt",
  "key30": "4e94K4kAgEHMnKjyJzvD5zqKk37zrDYZDkyiYv6KFpLiGVwAt9kHUEGA4auLB4fouo7av8NNhk3VUPEhEa2S29EB",
  "key31": "3vsU1kKEu4sfUgD3npkXm6JcuiQoqNRDQYSiSuUzbd1TJJVzFt8Xdm9yNiWQQ9HyuqjgoAgz9ZSM793DvTSqtTCE",
  "key32": "2U6JCQdcEzfJCUihqxE3jXbgdLYwLeDdZ3Ui894EE2vwzbQPHe5qaWCJBL6xdedKJfrHiBeK1WfouvBTKevBeB8B",
  "key33": "2yZPp5hScx1h4yFwUWQVJUzaxSmoSsq1hjWaz7C5mQf2JASaXkFBu5npvVjvS2uP6RTiDuCEDZxxy5nMZbvRgAUR",
  "key34": "PRgpNhMoUwqxyiY9xxmEcYNfV2YFaxFQ6HcNRMwcbEThYFv44vx8CSCXZGWRGQ7RVea2sWzXS84H8NvgAmXT5be",
  "key35": "5XHp7yEM9Fwp53YLG3y4ySbnpQqjjHiADy3dr7VwVo3PqZ4fNmpLwyhKcETK7xaDiW9fk2poJHr8UBsrWDeZekJ7",
  "key36": "5kYaafk1yJf2XHLiZg3jQB5DD2rwSBis2FMn38vpXuWHsDeYGJJXNvrwbzossLSf8vd8ZH987knRBkiE11fUvXJw",
  "key37": "49GJnLixnFW7Fb3Cg7fkKWprwqEjQkFTk3o8LHNsxVNXUs9UTEg81x3CJxW83Qp9NwTF9qtgGYqqDEr8B4SoYu93",
  "key38": "wVyqGsNdpoTc7cMdaHHGjRtamXDnGicjM5ZLewqSbm63Atxvzhheq9J7i6JEQA57SZFSyz2gjM6AmgrPfvPsQpy",
  "key39": "aUWT578AEwtSVbVPERGtNX6M9v5CuE71E8oHHwGB1VBw5XVC4hd3hdoBTN66urxgomMrrJojDpVS9L3u5u8eY7M",
  "key40": "3BSa4bWs8CqmzT27qftHNEh9vGjKTyHrWKWoUWTyUQHbaDiu4vRkDutuyMMAN2xqH5eKpnTo1KZUqcXgXwcbmczS",
  "key41": "2oCU65owXHacvs1sqHmNGBfohyG9sZrxkD9gwjzpazMGTGYhyr9YrS2zmo3mz5hZ9ZvFZQWEWXDLvyneVWP5Zvrr",
  "key42": "51rVuPuQ5DXXwXxsxjkajkDksG6LhnsZy2dxJLuMcUF5FZRwxaZkTncgLZpwQHSjXieoXBQHBGU67xRCaoEs9A2h",
  "key43": "4TSP5xgPTSESALFUDoz8A9qeMf5jRTnEGDTVVMdK4kE4QE7FabPq6aZnDw6JDum2R9vEo4zbD1WdNhkAAVR5LVw2",
  "key44": "2jYzaTTR8X8ws98ftBpZnD6RvjGmfjMyCxqYjSHEwEQf8Dsr99WDHk2MXjaVxgx2n3Tc46nKp6MBLRPitjKedo8x",
  "key45": "2DfEFiADAc1UMcuLAWw9WUURRWZeutuYjM7612LLW4uY8AA1U4NHc5qZ4TSn6c6wD2jQpoHBb4SdmqJTpZGgfWY6",
  "key46": "zrKEvunmwyHvVHVjzt1yvXQ7kfVzw1Ft3Uq3WHpNAMXGh9JUiPJYD1zyVVuKYapNaKWg1zpfzTXuEh6g4qpTqoi",
  "key47": "4LMwBvT5VoH2akp2eyPisydjXKLrsJgKY2r1bdpAteVJuEQX5ueL28LDyPe9bEtWP3RUDJ5q4fC7iFjn33ZMZmFG"
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
