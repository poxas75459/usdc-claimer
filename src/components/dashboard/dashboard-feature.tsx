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
    "4EGXYUabUgGWSn2Yhg32kbMVV4mjwbnvTo6K9buDNZQBktAPTeTaM6sgLrb28Ln6Yqxj2v9UgAHeZ6TJBWetL5oP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C5navvekxxoCqXNNHE7JTvjHTMJTuLkTVxApuukRbpTKdt61wxdRUk4WEXMoWh3XnyVT7tLWADiADZ2dcoRoof5",
  "key1": "3eHyG3uFrESY1UjUYvpwYt1uc1CGtyYXmknC8GLR8gdAsfrZP5pA4XAMMZKnQSiFNZDicqzqmBjWVUoyh4TawUEr",
  "key2": "2cQbTSX6K4F2rKQ3gY1c9Zb4L1o1PwBRhXdPA21aAgcwM42u92v8jkNwfJ6MaqDSyrvHgoih69n1LDQWwgukKTE6",
  "key3": "4vfvZgyhbck2hauxpbCprmPciazJfJLPGNFKjX12x2aMNaJJW79WAxDhfaJVg8sLySS6nu3sJVEqARxXo1Sfv61M",
  "key4": "3k8q1KfCYTgzhgUon1Q18YH2N9Uo9zvtm8xT2ULq38gkNrrzuLN8YaDHTcXYnDr51ndSzFY1H3wJVxQvuFQYRvA9",
  "key5": "4gpM4dmB61hje8rkneNrMewe4Hjtsn3LSs6F42tHnkwab9sbUEXPjsjWeCGh5vw9TVNgCbGT3AV8smNWYToiSre7",
  "key6": "2xTSo4qRBzhCjVF2cUyHXgBxRxe3F7R8kK5SzPyfByPo6sbSjKeJX9paJKGxnqKcQxrfsktS3NvZUDvMtqYRqqaD",
  "key7": "JWSeiazygH64jpNAWdDsoER8nrCr56TsdVTrK4bD64ajM62hS8inTni1PZyCtyhaMSzXodXjJMZ999GVV4mA53N",
  "key8": "2um1EPfE1VfP9h1u9PggZvRcQj7W2ieMX6gyD7Mxg9SePx6cUgNdRb6Qe4RUmAGtsK52fVUWGFQny36SifiGoyXJ",
  "key9": "5EyKYuCsnJNscq7fSi53LprYBmnyCmn8xfkM1yV8jUWCCaEXgRdWqufSsL4UXMXJ5Kr5D4mnPe7cPWXDkrufCHqf",
  "key10": "5vrmAL1dDPJNBxdQUh5nwbW7R5aSbat7g85GQ7m6Cxb2R7BRH45KDaEbRMSxBYhFQRv2EdPV3WkcKWVZq3cKfaLr",
  "key11": "2YuaRgwV4xqUxiktHjYNLJNxsUeGuSnYWhMi1Z328nUzzk8HyAuewacG24uuTGLZN3EQyLqPBhLc6FVULd9GhwMk",
  "key12": "41fN1bwrPW6ipjXEhTT23Z4ch6MUGNTcrfvRGPtovgqKBxs3v1H5W5WUgGWF5REDUrnNEeay24M7YACuMa67fH5Z",
  "key13": "4ErHeSw1MrSoZhJhGWRa1s3Uq472ueeiQpUGJYV7v2BAUQ8UJcR4Egpqx9eskcAbbCCyK2YFCwr1UoB1rLshztBv",
  "key14": "3zxwFaNQ5ntNttuWrZh287ph9sya3RCxuuiUnbWK5v1SozUN6pHXL79Uzey6vkNSRciiwasAodKV8PmNBRp6rdvu",
  "key15": "24s5aNgdX2iusSMYkWGD5QofaTxEmS696CwMQL65Rvfdh2eUfRVfFseMfPDwexH4BgndnmSrA1suqRqaGb2iL4da",
  "key16": "5NP4Cm4SqNdBvLYdT3wz5hVN9JLvQMty6hRoTDPZUtPNniVb2BPr7hoXXh7Q9B65iyU5wjU97Z3Kf9SpKL7hzdGc",
  "key17": "64ci6z1aYwPyr5dz849E2s6Gzy1SczWRpZPAPpBrbbyWqRGpu3ddgrzgNJrm5aq9mY8VvLVBnhKruXLByS27zjTx",
  "key18": "hbCRmnmVB6kpzySurFvtmqK7Wj1mkJzwuL6v57JEqzK9wzdAqnJKw3Eoty7QdwYH9PrWheKReWMNoaXkomM6uAY",
  "key19": "3h3V1EWdCkFc6ib7nkFEi14M5nYX6AnmQ6oPmDbLfZWZRcLfPwCktHP33FMg11JDwpsByJwyYsoJuHKYKwRaPcCs",
  "key20": "4o2UXoLiLVD77jFzivpjtBviJKLgaicj9pRKDAD24MBhwjbNnCfDSRiNSHuHZWMmHd7XPhbJyiZCGJVe1fiuEX4P",
  "key21": "5E71R4YH17AKeLnovp2TupvytbY2Hiisx6od6M4MfifP95rkF8YAhrQRqFuAQEkZaibyFNWqTMC8jPwcXdueTdfb",
  "key22": "5P8yzXpoASwGXKCgFo3YamyamkD1ga8QU7pBUa7QwW13RJ8rKCAEewGoz3aPBQxFRGBvCgdqpDzVnRXjb2qtxpKp",
  "key23": "2542hiHvA4GUpthWNkB2WASZ6SdkW7j3ggHWEKJSaeJkUqyeKUZf6h6EopBZVUjJof22jtSxdy49L67g658x6Jsc",
  "key24": "4UcZbLUA7o3ZC8A8xmk3Sv3C7JuLAMXW7zj39ML94eEa994FU1E9ScnwsNUphugFGmDrUPST9mnPKmJmgTsuj1Cq",
  "key25": "4exfAnarfexNVp6w7S1mvASov1DBbRR2Ycdjv7QUAJUWoHnXsVJSRcHZvD5mbXFFGEjGG59TeX7VSkz6awBCRH7E",
  "key26": "2ru4b6LSxai5rKDot1KfxMPat5MgaDq7QhaTwtfLz186gCMuN1JQm7Dtx1v5m8c5KAbAy62r8bvXhnokCu8QkvTc",
  "key27": "5fh4LDxR9A4YpvUibbU34vWa9F1isTquXkf7LhLaxT2PACFu95YASDeEWFGdDmqWBqhNJbEbyZ6jvqe6EK3cS8TM",
  "key28": "56scShDH8ZfnV9gaxoxtL69tuehkCrFUmNVD4tLSNswjPh69AEEJPcepWYvNFEAh5SpMTCrdthXBVoACRshzYycy",
  "key29": "4TFzhhndESJ7sfLB6ePoZgbWj6aiscFWY8CwHv7erwewFFXsiH82JEqdfKXSzbm5zoqJsrHS7PB5Jp2KSyY7tUUo",
  "key30": "57xTWpyJFWuiH1CH6wFKBZdMAsXy6bN5ubmAiBFEXeQVzRLpmVEYFifYJy3J5XEgngYBhf6yvn5qpH4dmYTbZe3Y",
  "key31": "4iFzrDaeMhH7eC8tkAsP8gNdcSYkDS2bD75R5qtpfvb9cTD8dZ26bGFH3Q6aPzjdaVwkBPKaLfRYgBzmncmrsw4v",
  "key32": "2UYfgVVST9fubfWg5mCgAEa46bSfxutTKDVaLSi7BitEvYu5y5cXepkmJ1rL662fdoBoVrwz7AWaywPHHdrYFbrf",
  "key33": "2CtRdEmAcK1MU4h945ADeZ1iChKbvNzRRpXm273cyBCpfPP5Y1ZR6mc8q7bqVdAQ2U7JtJc6SvNfRRq3b11q1qF2",
  "key34": "5qAcPXjKr5r9NZmw6ZPz4RJB6dobU1tomFPMMRAQP9JrSH3j9t5ykSxQ5vTCYkcqLbEAN7JJvVaSzF2imAbJG5p",
  "key35": "2QvSHnKXL1cVbTNwUxtrSv6Y35feo8TweaGtC3vaA8XJxqocEDHfAgcQTSc7q5a8upsqmV64bahAoG9Fv6NuABqR",
  "key36": "32dZoTa2Dpr7D8FGqTie7fWYYLkgX1ib4fADX1D5jQGcpbFvsrerpMiPi5UCuPH4agEy2nZvr8iUYU8wGPJxNTxz"
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
