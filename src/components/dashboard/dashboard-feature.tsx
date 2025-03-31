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
    "42zVqcRDdvhWAhYfXzCyWVPcr3RqgHbUxd4NuNMW3mYacXRcjPz7EmN9gsVxK39LMmKAPBiq6DmQikoqHZ9VPG4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B8Rgs8AywwhbgYA59s8Ebmx3qQ3awu9jMiMPmprGvSxyqw42yYwakhRSZwQdUrgYtYSH21hf6k6Mp2gYrXHhEkf",
  "key1": "Cht7MpiwJUnpxaZHaBTJP7wB4BQsxWnZHUnnuBpFGfgqgrYjLCSDmWSr5bpGm6jFSZDMnPGYNFAYcofdvQd1y7F",
  "key2": "ATCMHT7sfAjWuwR3jx2aWW8A2RNRNheFtGtur1jz9vVmJGfNWKSxirMufeHjBUBdSH73VQWPzhd52FweS5LL5kL",
  "key3": "2AH5CE4bhDw47uVfn9gU6PWL44aFTYZt61MVWf4cD2PP5dCU5hBq76oyUMnhyAftYVnrE8WmYSLUXVZgtMvWQeEW",
  "key4": "2jm6Uc4tToNChDDUCs9khT6kWNBYY7GxrUDLY4vrpAfqdH2jm2ik5KmuUaucDZfRebUaDmF4uetneUNja36EV8ti",
  "key5": "4whDdaDuLfXArCp82yARmVnGskapfKhsgDLXTEuS1itJinDF1E4PV2Ywg2UqeFtNH6k19BbnhDJqNbqmmMEgppEg",
  "key6": "5WTtrUSoDUGLjaCwJTJu4KFHHyAwK8RRK6v4gNRqXuTab1CBiGcK3u1ZMSkgYN6Qu8eFzThPWfx9Res6XsAckCyg",
  "key7": "39oc9PYqx4r628HWhfE3hK84D3ARPfxxQPArUhzfd9Jyu1VNcm9UyQWaSqL9Kr4zYsPKmm8dg6zCHWAG2kDzeace",
  "key8": "3jbzMGvmBrKJyrMaGfWAe4UFqUi1tkPeFcmw2vhmyByEGYYFEQuZwtUy3porBeUbrM8HW6Bip4M99on25JkQPEfJ",
  "key9": "5MnoMqqUqLtP6LBHCQf8w3kUTGdwsqbc4TbZhuCDKNfMqzmdaSsnvBtwqTWpFiNmUgLmEZVRV63M17soY5dGeueV",
  "key10": "3tYQpsJaESisqErBWBE5PpR81PCMJnZbiJLDA38vLAYmPEZ2MNN2zFvd1yzF3fKCP2F4mRQ2XVeNgafjkmTAXwWV",
  "key11": "3r2gTgABfFWgLounnDebKUeoBPhpCQVEEyK1epis1uERbHu1eY1UTA5ECAkbgMdEtHzGpAGWUKhCsFzoFFdeixLX",
  "key12": "3ytgXWtJj8Fnh8qGK6nq56zareHpKSBki3F6zvKDcnFpcHYUfPsY3F2UMYg9JuQYVEVxxvg9MmSWSRbjNZA52uVm",
  "key13": "gYSUeZLqh7KLsEc1bDVv5fLvaSsw5cJLMp7SWbEZesX13hVVkYrC6z2gXxRcQY15taWM8YmrCs2e2ZJFyiQEy9h",
  "key14": "3pyN6Xa2T8ocGyYGZpJW4b1SD6bMKcaCJbK5qAWZVNGpFzCrgzYmnD4yvRviHvB6bEGN3H1pDX11iTZ7QNdu5mJu",
  "key15": "N1wg23fTToMsG5iHKqiZ7ALkXGr21YMcMKUAgBeWqS8kbMC1CwtqyaXinv1b8yXyqgXLLdQiTwccZ2UHkYJXQTA",
  "key16": "3npJThKCXTaG2ton7hFrfXD6pCNZ85X6CW4EFtnm7eUnTMwgMxbZCn56swUhYW9AJSqyfuEwsD4LtjynSysbb8Vc",
  "key17": "3E5NskKjeVGfAfLRCZrHNHCwXVPzVihNx6dgDrXr1fBYJV3SykqFRi8gm28gNGDWBCkDcMibmspDdyvVLjdU2MD6",
  "key18": "3JZLGvhfAUnZygF3ztrypVPxuuds9gease1BG9VQQm5pgA6CvKRomkFw5epApykfYevrT7axNNnPLuNZXKqZSib5",
  "key19": "5fVVyxgmvdWPyo4d6rYN8rfEfdpfywH2m21MMwSrswJsVQbrov5KM2TfYfqgk5Zi1jtyocdRgmzALmknh735QFRd",
  "key20": "26K7qX2Fgg7QFH63xGcZZaDYS81UcKHw8P2ysRLPX1YGzKMdRi1TDeakk6kRaJ4P8aXd6nqxvKcMPfUoaoRt2uEm",
  "key21": "NGNJ165oJtDT2tYkrULYSErTnioV1LfwMtYCZQ4u4h4vcE5H26XQRY7e8i2B8ih4QdJYkB5Qy5UVVVoQwQpAXdJ",
  "key22": "4qfP6CoRDgeS8Ssgu2jefFS5DXxZEpxuojqA62L7RsMVTTZDN6VgCq3TE1b9bqEUd6iL3hFfTBMLSDURqEUg8rFJ",
  "key23": "3gem6bVbuDKys4qjbqLgbMsP3gTLjmPPw8RWccAUBW9CdT6xV94dxaxcBF8oTzMaFpjrSyu1dt6aULwZhjjBUApK",
  "key24": "pk7MxMT743Tkg4Uu9P4vaLNemLnBj7G8bfeuUPTDfBsnt31WRJjAKiCKENYoREep7Lx4z1KJJMUrAQHKnkTeN9J",
  "key25": "59E81yAvv3dRRBLSs5AeAWnpJrRaW2gpyL7ZtfcLF177pZ5Ee2dbKf9dxhT7zFyKQWBwbShanAYXcRKSwcyCAFuM",
  "key26": "5evyiScdLSkNoTfvKye2YQc5eaT7ETt469j1ZzxWXbPwNcLanSYcixb5PJz9EreRk95UKbzd1AjLKNG2YMbe6iJm",
  "key27": "3pWVrny59hjwPmbWU7QS2k3ENvwvnkXgE8VTpfNM3NFAeXnN3BMJi5SY4DpQL2QtCoouA57w4UNAxcMgMyhPJrao",
  "key28": "5Luj6Qgt3n8Ap6tbjPQctxgNevBXBJDMnvY5XdKsRggK5nm6LxeiJDtTmFrDRiN1o3ZNRWZnNwXgF3mFF9zz84Xa",
  "key29": "2EdxmzeqYxQhwVkNh3wmN2ujqrBJWCZ5F3WaG85gJPufSarSvsCGp6m9YzPa2rW4stNEaKv4BRGHefH9XkvhqDCi",
  "key30": "58jtv4GxTYrwkLBorNGFbcRq8ctyV6PUmv1rupc6szfARJ2m9MGuLcACqtjBmM4cWghftGhwtNRJEF3Z158ondL3",
  "key31": "4qAxthsyxdQUMGMFXuJP6riuxa3iHgiBRXJGYR5c8hSaoniNDrpMEf5Z6GoPQRU1mSuspeMLwofC2nkXY2ae1jAQ",
  "key32": "47MPcDxdZWzPxtfsMCDWsgDV16DD5KzB4yhdyJ6GtCJaKNd5ChGgSdQjP9au77VSpEpXUZLU2yAvbTLBGkKQSNiV",
  "key33": "4qQivfZRurpQSZxEWr2P529ikhYVezokEuJho8RRoewa5zacUZYhGAk4nodrSzsvaqVK5T7YMGbB95b1zwy6ARFa",
  "key34": "44TuavehdPtxSSNUNJqSqXY5gSazaZz5EXSf5C4QjV6Ej8zAsvCGMZfHzbB2zMjPmoPMnFLjYQhdAWfSqs6Xc5sn",
  "key35": "4JDG97JxzginUQEehFm17RjHtk2Cpc44tmotK8o3SfoESMRohJvUry7DorUUV6hmcj57u1kiEU8s3yUhkXKUA63z",
  "key36": "3vPGwi9ebunWf1KmHXdP73wH3oAi39hrPzWEiTVRFSbYXPKGsGrYszKR8Kw87QfdMf9rPY4VudVhpJKXBKXT3Yur",
  "key37": "3kw24JwBbhGn2YTyaoXZJbY99gzSw1uWQVLPDu9StopCLTTt5Uoru2Nqt1eFhnbsfaMVM7cV9jGJwbPE3umv4cN9",
  "key38": "5xm1UZ75hKLqXmy79uJZhB2Jh5bZM2iJ8UDBH3wtaiHwhfPk7C6qo8JvbdUQsrPMf5W63aoP2s8uaixTHam5UZL6",
  "key39": "i1A6MvxtbDjpJdwXyPDU2xhMxQE6Q45MfgBAG9W1rh4TCrhnXpUo5kFzB9okJf2Aoujd75GAz9k44rmsY9ZuQ2v"
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
