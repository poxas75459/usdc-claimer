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
    "2mo2gUM9Ywk7WpE1m3M4d8TUnPHixoCarJptCeR2i6aYPFbtXM4Xcure9SQFMSTHQP3geE5hY23awACea9eWrDu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o3NTrcsLVNwJfiZ7FbtTyQVHDtWF1e28rmdAMvz8sHBbsTa2DXmDb3L9SLnGJd7UWhvHWQk9y4kgFiyNLXkPfwF",
  "key1": "3hK8CU4zhwhF4cfW4EiMqXqkwbyzAD7Y35dp8ouNLqdhyq3snRK4ju15Hm756XF6wcMPAh4uRmXYQghCobR9xKAv",
  "key2": "nuEX68uDLBAEhv7wqEPunZxsECyYrnMWky9mrDHTcN1k7L9VEgTDqMghQ6T32CydPw9ihry21Yhv6bSTWJ2mq7f",
  "key3": "2VgPpjkVTReWh7PvLSSteMgfaDJsTq5efoDZwypm2ay24rWfpoYg99M9zQYEXPbRKZTPkJo8vsajj6q8nyNMNkvc",
  "key4": "4k7SjfKjX8nYHZT75r9GNte7WxTFw53G8M7dDxmFMwyHz3h59wVhs6ctuVHU4cGDwB7NGAmwxZMf9SNmExxYMU4H",
  "key5": "3boGyVwbC7msoqnV29ABNLU4UYdpvD9jkc7AsELJjKMJtHXaKETLPAZ32FfxUzVkUumLCD9fE7BRiqFanZDGRd81",
  "key6": "33yuKXnDwb3bHVjKbbeG66M2L1PnNmwQPpD8ZfHTyhZiDe8zuinbgamjTm1xnAhz7syaWMC2RzWpEXDUoA8Ff8gs",
  "key7": "2EmQorvCWiQMTA4o1564xUVP3eiKhjjnfmm1WPLKB5PNd2TkNa5nwLuUw39cXsDJGm3NfLmMwbj8KYgZmgDqdTAc",
  "key8": "rxxcL2dzrangjpV45yxrAGY5SKdb1bGq3oHqZSzRntoK1a2VNUGUwZJF655tR7vUu2o6jwmaYDzECyDs7nJxTVZ",
  "key9": "31cMTjACLQXfFJkgnE1tkkMsmNUq3K1dtopBKdfAQMJkxmXTfL6udU8Avwu7TDqkhZHJHuaaQgK7KmzXFh5DSwAS",
  "key10": "5nrGVv6wKUVUDVBX8FWBcNv7kGREvPiRdcTx2HMxez9Q6M7GAAnGafCpqUEdYEX6qHm6w4vbtam7EFM4pDQrjS95",
  "key11": "2SzVb7WYgVStDtUZQZJ7pjJWRetoTy4cDuguv4weJKcH1L4PvAG7bGebwC2xDSQ5jdFiDB5QEvetMca3U3fCdHQH",
  "key12": "2hLwcpFSC56CimSC9MpkNMeEsxsAxeikAcFATvd2n6PDgWw2yrd4vG6okykrL5pLqEvaGsShYiCRbU8u9mhGhNvC",
  "key13": "4bc39hHx2dqRzM6PwwKF9pzwNEhKbdqzms3PhBrTDi7x8anabZfnGqjfEgrkfM48sgaXSymGrVStQ8wY7dBfL49h",
  "key14": "5xWS2KU8D7sEZg2Dy8Cp9tyAmeKLQWdPXG6HDrfwdqfS5TjshqRsuGQuPSpfvdmhk4qxE5eY925BYcFus6fVuLDC",
  "key15": "3gGUosMrfafqhPfK3d1AkjV76LWPGMjuQVYp8Z8AcDhnFxF7sNKVq6PUVFd3mc7V9qLhSZRfv9pHSPLfXJjs9XND",
  "key16": "5GmdjSAYgrvo87ZrdgmbLrWbjpAd7wzhyMfQ5zYRmvB6iV96umgNqkL17jqtvArRMBHJsdoK86XKsA5BQohHPdML",
  "key17": "3TWEPrgHFFkANhKB4UasYDHq9bZfTxo4WkqhaJSkPXohPYxehA7tAjWgHDavtdRvn1tVb1AJAVMWzUUhx7wtUof9",
  "key18": "KA45hXt1qk6q2ftcUxd7kJba2seQ1Hwj1wEXFTJQjTYR3ZkTYpqjFZQjtv3cF7zd1R2nEfWTtXR8nK7NFGdS61K",
  "key19": "5mFeFpN8EYSVQyUxgH1zRPAFcfHMVcUEyfd2yRcTcZvzimXbX9MqD7VUxLU8jisR3fuc2yBvvYVbuxJPLzJvBZpu",
  "key20": "38aeRC6xttpjjWxvkyMEzXVk4EC6bJbvb9e3Gq1qSGyUddrMXXr2f9LjkrJ8Wf9zuMCuqZumND5JKTeZ72S7FryF",
  "key21": "i7Mdf3HPM2yMmNfmXyFWA1qDTpEX4h1uHBWEDR6i89FXLi8P7iNyrM2gSnyNCwM5a2spoUugDQoxJoGny3uZLBz",
  "key22": "poztqMf2Fayr56qwhxLU66zZaWXf1nZvxWnd8HLsASiLAtw8CmPQNpyCq4WksDJoGYjWqf8wGEjdFcDheojR1ni",
  "key23": "2m4djJFPUqQfJhYgsxU6Fey1j3fWqocz9dix9jxtgT43nF1pLei49WZ11VAqZUsfWNBJRHJpfNDQDk2HeEUDzqjb",
  "key24": "2pEYfsBobCWBmevjX5KvqvujY3JSj4krgpNew5ZiPLYYtEvWT6mgLBX1ru858pWN5gXpzVqNphhkJdr2ZcqdkpRK",
  "key25": "46PiwcPBGf7JEkv5wvo1MGivQpbeKeZcpTQjo2uMdN1gGB2d744PtVtGRTTDnTg8wQB8qLHCEcSPVfrD3iJ9rpEG",
  "key26": "64swz4KbVYsGZS5ziCL5hYNaAYBo4Ef63CEw8VKrWvkgpWnYj2MMcAjkYAkH6ix7D8VwSaifJj7V38zFqPd3nnj8",
  "key27": "3GkNMDZskSRnCf4TeyFfe7LMeqzaZz6uw37rLRrs8CJ8KEVSupuEeSfczZ4mG8KZUpcP6Scf993pRPEj7rL5K3K8",
  "key28": "5WW63RiRkCiHusTsma8h7bNsw9vkfNCgYafeDZ3Fq8kXHp2QzSFBuHTXehJZPF5Aw761jyLB9iZoYj8jttN59Wte",
  "key29": "2XKt3MMRyPfmL2doLGpHeaVFsAKo26RsypXnpNkdAiD7c2pkS7g5p2fruFcm3EcaCB59VxhjgtVBhNKAr2y4TXjk",
  "key30": "43YSRsy9E17LqDRxA7qHq5HUb2sSHe1cPVEPuczwnDt4coJTEy2BMLDxH2AcvKL9VztEa2TCTsziNYntaY4SqF88",
  "key31": "2DFpKgoxzMwZaHzk6xzK2jygrjadG96vCuiZoFgBvQWoBh7dGzAGoT3G4VhnFNfjPDwdCKJEvc2G48fqjHUgAdDm",
  "key32": "4mDZdu3i1Ro7xrhxcHiTw18wEEaWsUoXdkvDGD7fvhbFU94fincVhRnWLXxTw89PbSyFWeJnvJNN8HPqGbwacekh",
  "key33": "Z1Zqiy85ZqmJNLGrttR4WX9cwZY1KAbMASmzoDkwWQmjnqAC1fpSEeH3MGRM6XN9H51YkRauYBAPNtDN1RHwU8b",
  "key34": "px2ThDtqNmnsvyzETY7sXJ8q34WQ9LF32VcFJoA32TtfMSdQcngZ2Q4ZaqzXzFuFingR8TmdEJDCw7AFHvyX5Xd",
  "key35": "2X58y8AMc7AU6B6oWJW6uAmTL6gTs3cx5CAT8EEsY6MDA9Wg4zvRHnXG1Tqxb5o1s2zJHRmCPMjxFYVrYCBTQu6F",
  "key36": "3ENvKeT1y2bdrRuRJkWvitrfDhLZ8Y42eLMGA2Bae2PmX3VM55wdaVqiNRs4eMTRTTpDBj7sYsSuXtf6CEWbUgvE",
  "key37": "3RDt5JM1bspKwRhx9A9T8Ji5s9Woko2MgvLZ5bphG3TmEoU7Qd7theRt5wBEmXVqSGpkWALba7TXnwFgSpzcVtwF",
  "key38": "2Z45J9RRKMhTGfrvnBRqA7uwZ89LCCmYXjtqCL3eBgHmkz468CtG6HEY4qYqQUWt66MN6D1ScLFwy4V9Rm4XjEKE",
  "key39": "3SMEQFAtfzdV4WthHaMTdGQU21ws9qaCBiXbdgEpgn1UBqChDsGor8FQVt5vCDcaLcMMz33Expe8kRvJBSbhL46q",
  "key40": "5Wk8ANoeqSVap8rATqvMoNnZk7y9GRk99F2hfEndxUv7zG9dCiuaZ7RVgJxjr4PLBf8CPN5MJ9TrEVqjWRk8NCuS",
  "key41": "4D1Mij5FQWfzQYyBS9QyFS35zAgv5ELMaUb4aMzqWyLvgkMjuVNVpzVHLkYiSMJ9DX7kYK5hVnrqnBuNB7JDTZGe",
  "key42": "3kuBgSD2LVvJhKo1YxnQVy2azKA6BaiYq4GU1kozW2JqjjnW4NQkEix9HVg8HUTPauokmmjMx39agR3Pe9tEhzJW"
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
