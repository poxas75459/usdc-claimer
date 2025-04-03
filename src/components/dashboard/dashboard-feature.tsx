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
    "avWvsLAPybmzrqedwXWwGbz1eqiHpxVpLRXEZ22pgqdgAojfPgSJAGzsb2DsPpGvMjAguzTF4M34s98PThtj8Fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34h8fyk8q51MNntsJvuwigFwkESjjmpWxRKaMsmW4mVSAkvKJAe5zwrCNcBdo6kZK8qu6EZDupiH5VU5ZZwYCGYS",
  "key1": "4c8PdrAMiMe3jD2E266dzASFH36LqtxxBMwhPWTfRKEDSjCXHF2UTGsdV7TGDHGkDfthLxWheHngojPmkMzEQtBV",
  "key2": "dbeCFaDqSkzVKBwpoJyUTcsdEJAExddts1bbVZjechvBfC2PydVPFesgbAC5EkFAf2XZLX4TRAf4wwUi93JSqwf",
  "key3": "2ZM7KSxR68NudztuZ1He4JUHerChLRcD5KVfCHhwkcESUaLnDWSTGyPYRLGcXBSd58GswakpZfrFBTR6MDHPmT2p",
  "key4": "3F1qH9LyG6deftFXZP2TZgdVxMR3GBaUJMA9zTjrDT2Y8qP4tRg8dJvru9eq5rT9wgpboMajM2ay9ywH9eHLbA8s",
  "key5": "5NVXg7xJu75dM1JjTRFEX7MpfZNXbk4uZ4awVsaWz1C7A8v8g1YCHBn7QLkUsaAdK6U3EAtfXjiq4wKy5BRY7zDe",
  "key6": "4CJjdZe6K3C62aU2YR1nBHqiaNKQvntGpKrThT5z5jsg5R8bdpxgz8gput8FhC48B9AyLcjDvxqzuvts6Mi3j8WF",
  "key7": "3QRop7r5ZqmvjNYDdbAvK8rHPc2gN5tBtvD5MQDa6EjTAKeVb3i5FVzGbq7H4WkEHyv5kXDUkZMuA5H1yKh8yBQU",
  "key8": "3tVLHA6wCwYGKqsoFBKz1tnCFJ1xpz1xVzEHqWaASzs61Nh8ecfeEaRCtHNY8pTHN8nUyJYqdqwMohHqvKVc9i1c",
  "key9": "5bqoEPP5md9CZErB6fQhSa1fJdXZYExSKT7WGrwwZv8gUp6iUziQRcfD3R5NdNEictKmMsbZLQXAJB2MbLMK6n9F",
  "key10": "5qd7HfATYVr3pF2xEgNxjjiLkJMWKrrAUF18S9f3oePsqs3xFDpiJnabhQKfR6Wk7V1z3CPdZ9pHe5mjoDkbmQzi",
  "key11": "4oFE4532MnCNUa33mnKN5gqkoYkVYriGq9Jx12wKUYDfdCAXZ1zHrMzPafwT2QmwxCnrqpVVbB4zaBzWTcuE1G5s",
  "key12": "4hRGmiYt4ZWVEsEv18vergkZYsZkg6QEGqz9bmM3NpJw9yA8j1gSmowD9P1C9xw9rDm3WqzxphhKwUwWvCEiqJcf",
  "key13": "5Uc6RuxNzFcNzsxVn6ZnnitHsTAvJHDfQDAsga1sw2N3qqv5mEmkK61Kg4KBuokmovyR7Ci5bXe1Kh8LBhuBSPKH",
  "key14": "2pr3o1bdBhKR1z2zerXyW1u9xEQSdRYjBF97EXbXCwRJWft7FcdYxSsXHp8vLeB98UamkbQRoAm2NTh2U1HBt9pc",
  "key15": "3Tx1FFzDrChcSmPVFXS12ke5PSScbPivBVS3jkoMFWtdsLjRwF6kzKstxgEGfdyqk42TPX1bSVhawhYTWN8KxwHM",
  "key16": "2JBizBdbvEuSnbxXGEGVHDdhNN6rBQvdCm8z4MiLVEwf4T3CaBznbjTXNkPyxUjwEtiv4qDYb5nRjyypgsYGQ7Z7",
  "key17": "ZA1RMMGDnJFrCptzyjLBPCFhCBjsDKMro6znv37CYoMqxLMQEUWhP9dMGzX5iU3MX6Egu6qwBZWW1fof4jdn6h1",
  "key18": "44WQTgQCRxJChWz2ip7NoLrd7JyPQntZY23wazDGq4rdoLNQv8xFp81qvjwo2jHaAQzXaEESQVTN9kGjiCCNNA38",
  "key19": "4UfNG2pmztvSQhvFeBPK6KYUys7uSLj5Uk8iNEifmBTfzspaBPgVdWnCsKMKNTjz2249RZxs8iibpquTZc3ckDFD",
  "key20": "P5s7VpBP3yCoutq7GUiC75Xyiz6fEbh3eLGikgrRH86vTFgH3aWkjjagapjim8nac1FGt7V4ZiFfYsaZ7BrW6Z9",
  "key21": "Bz59SaUtEP7YDfwdH6JZx5aBB9MVmp5svShY1sV6n4coHcmvmmn2QaxJZJU8Z39T4jvu7LxGQNquztZEwMBMkTs",
  "key22": "55Vv4uww9yNz8XyUDuBLhEAnpyASH22DKcsZdmdJfjZ5jBxtXgc4xRMNKEUpP7QobM3sEpBLCwBv6VoNUw1x5k4i",
  "key23": "2hR2vqsByS8bW2y4LqWskZuNyjvRVuMnyaHXRnR6MqD8YGJw46SCpiEFxbpZBhLgXqjcJueWPRuWb32uoPVXaKCN",
  "key24": "Qfbj43nKdnF8tmpCSpzEDfqiTL1GJAKVUXFyygw4y2Qtoxm2aSiUe4GqS5yeGw7GKuav6FGGCoHoRe6peBRhWvp",
  "key25": "4pFiw71q8WNkooStueyzw2vfhVCmfEfUWquUQsu96aXgr1fT2zxqYL94LQLHgsV9w4MnNiDp8VuKvvYSsCFqbtEp",
  "key26": "4gnpke59ekvWXNTekwMhHAA2axWM2s1twCK996HWvmMSCnHTdcEDM99bUNsAcQuNEGD8H5HdCj3fHwZgM8575kd9",
  "key27": "3PSW7EAZzM4WyXmhgh6wVdzP36n8rVzNVkH8hdPKS3JmT5jS3iYTh6fn4LFb7fa4yVjFtfnJByt4gfqonH9soinh",
  "key28": "3J46bdBXPCr1urd1xdLoHWbrjgKoemCdoKv7b6LjJouabsfErceyY473EY2Awohr4cvHCaQ43qDSgLWWcZUAH7TE",
  "key29": "rVBsYVVXeqVrX2VRN75KRDSPT5STHhAAyRocfFeBZ1FNzT7YobBogovrHsFzbzPD7Dx5TmHnjnvuDRP1e8buQMs",
  "key30": "4N1Hg8Jx1QRydgs4MtBthSrf2xFhCTnK4cFPEPpKothfW4jqjmuMKhH4WmVtaoErwkTL8yefC2gA549v3pTfUCSG",
  "key31": "emwWFWYzKPNQxn3v6y8Msg8u9KyXh1whPvZbH1PxYquCvu1gZ4iFNm4PfyEBRh5SafhB4eAu2DfAa5xU2kpAHTE",
  "key32": "rLhjQrhMmzMsmbhdrvsTCGq1JctBqasNQu3zVbpP5hgF2GneuCSNdZpn6FtJeBtPRrrtFSVVQqtsJVd7Dh3a8fd",
  "key33": "2LqBzxAaLEXLDyit4gueNZXCvwp9PU8yg94YCCNiHxRUN6RfJzj8cRxL8rm6dPmN7x7LTSRwgAWM79S5fsDBP7nm",
  "key34": "4uTsXo6pwAtZjysSZaagEMirKAdokLoyXnsYs6qoxtnW8DvsZpXUf3Prh48KLJxLwAHxqX8WUqD3wqqxsxxEUqWL",
  "key35": "22xy4K1XNZF8JMFtuk7C139Le4C8qc3Vrd28QpDY3vRqn3UYHfby2HaGZ67gSjj5ZUUVhEaKWtBs947RyeWHfEd6",
  "key36": "5m2s1JjzL9macSz3ZxA9sh93dizKAxK7HDUEs1GFWdi9jARUH2tUPoQxFujNZ18yKpAguWk1kYb5qZ16pcGvjhcU",
  "key37": "ko31czLNR7Xpibj5A1RDeNNtUE74ezmWES55o4f2AxJzAauBGCffuTzc9x1LHyw6HSkNveG56ZM4NqXssckAL2Y",
  "key38": "5BZhjUSRnyyRcgXWsYBSoj1vj3XbdHHBDBcDnv2CN3wRGgzB2mnt4rFpM1TRd52mPgbbh51BbSSDqiphX8MLRGaL",
  "key39": "3UD6tzKxjgq94RmwykpVFyELmXv9khby6dBqbxQpV8jrDU8CKfisrAgeHgpen3mhp6ULfCT92PQpVM1qC6sJ5v35",
  "key40": "2Ky4CGd5ZuQRYLG1aacJ2ZUW3prWu8sPj7juwySu3x2ijtMBnLcbrSiuaY9Dw5S8vS8XZrQLrX1NQGaCpSgUw7F1",
  "key41": "nYeqSvENspRong9mmSWUMgLJqgZja3vyhrf91zSJX6WZocKaFDs86Rpb5tNUnymRTS9Nqfi2NMGh6iGM4dtUpKw",
  "key42": "4Yj5kw3L26KGgEneMjLRHHi6MDSXei8MqrgGgHJ2yV62k2W4FNhW4WEFCYfrPPxPEuzD9Pt1uWHecW9c68fE67q1",
  "key43": "59p7AsvGLsNCCYuoArX9ReNRFdKwU2yJdHkz6a1pC2oKXVWsbdYxzzV2Pw5tA5vLDSAKcPzDnPWdvoWQTTn4qn1w",
  "key44": "2gavAvjWNbStfEpnbHnFg1cw85xdyBsbDqFKBtQYt3vF3Efs64jGqq2eGDCHP1AV1qDR9QsajhzfAfkafdSKrRud"
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
